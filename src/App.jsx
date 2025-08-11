import { useState, useEffect } from 'react';
import Layout from './components/layouts/Layout.jsx';
import Welcome from './components/layouts/Welcome.jsx';
import Dashboard from './components/layouts/Dashboard.jsx';
import Challenge from './components/layouts/Challenge.jsx';

import WORDS from './utils/VOCAB.json';
import { countdownIn24Hours, getWordByIndex, PLAN } from './utils';


function App() {
	const [pageSelector, setPageSelector] = useState(0); // decide which page to show (0: Welcome, 1: Dashboard, 2: Challenge)
	const [name, setName] = useState(''); // store user name
	const [day, setDay] = useState(1);
	const [datetime, setDatetime] = useState(null);
	const [history, setHistory] = useState({});
	const [attempts, setAttempts] = useState(0);

	const daysWords = PLAN[day].map((index) => {
		return getWordByIndex(WORDS, index).word;
	});

	function handleChangePage(newPage)	{
		setPageSelector(newPage);
	}

	function handleCreateAccount()	{
		if (!name)	{
			return;
		}
		localStorage.setItem('username', name);
		handleChangePage(1);
	}

	function handleCompleteDay()	{
		const newDay = day + 1;
		const newDatetime = Date.now();
		setDay(newDay);
		setDatetime(newDatetime);

		localStorage.setItem('day', JSON.stringify({
			day: newDay, 
			datetime: newDatetime
		}));

		setPageSelector(1);
	}

	function handleIncrementAttempts()	{
		const newRecord = attempts + 1;
		localStorage.setItem('attempts', newRecord);
		setAttempts(newRecord);
	}

	useEffect(() => {
		if (!localStorage)	{
			return;
		}
		if (localStorage.getItem('username'))	{
			setName(localStorage.getItem('username'));
			setPageSelector(1);
		}

		if (localStorage.getItem('attempts'))	{
			setAttempts(parseInt(localStorage.getItem('attempts')));
		}

		if (localStorage.getItem('history'))	{
			setHistory(JSON.parse(localStorage.getItem('history')));
		}

		if (localStorage.getItem('day'))	{
			const { day:d, datetime:dt } = JSON.parse(localStorage.getItem('day'));
			setDatetime(dt);
			setDay(d);

			if (d > 1 && dt)	{
				const diff = countdownIn24Hours(dt);
				if (diff < 0)	{
					let newHistory = {...history};
					const timestamp = new Date(dt);
					const formattedTimestamp = timestamp.toString().split(' ').slice(1, 4).join(' ');

					newHistory[formattedTimestamp] = d;
					setHistory(newHistory);
					setDay(1);
					setDatetime(null);
					setAttempts(0);

					localStorage.setItem('attempts', 0);
					localStorage.setItem('history', JSON.stringify(newHistory));
					localStorage.setItem('day', JSON.stringify({ day: 1, datetime: null }));
				}
			}
		}

	}, []);

	const pages = {
		0: <Welcome handleCreateAccount={handleCreateAccount} name={name} setName={setName} />,
		1: <Dashboard history={history} name={name} attempts={attempts} PLAN={PLAN} day={day} handleChangePage={handleChangePage} daysWords={daysWords} datetime={datetime} />,
		2: <Challenge day={day} daysWords={daysWords} handleChangePage={handleChangePage} handleIncrementAttempts={handleIncrementAttempts} handleCompleteDay={handleCompleteDay} PLAN={PLAN} />
	};

	return (
		<Layout>
			{pages[pageSelector]}
		</Layout>
	)
}

export default App
