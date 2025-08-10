import { useState, useEffect } from 'react'
import Layout from './components/layouts/Layout.jsx'
import Welcome from './components/layouts/Welcome.jsx'
import Dashboard from './components/layouts/Dashboard.jsx'
import Challenge from './components/layouts/Challenge.jsx'

import WORDS from './utils/VOCAB.json'
import { getWordByIndex, PLAN } from './utils'


function App() {
	const [pageSelector, setPageSelector] = useState(0); // decide which page to show (0: Welcome, 1: Dashboard, 2: Challenge)
	const [name, setName] = useState(''); // store user name
	const [day, setDay] = useState(1);
	const [datetime, setDatetime] = useState(null);
	const [history, setHistory] = useState([]);
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

	useEffect(() => {
		if (!localStorage)	{
			return;
		}
		if (localStorage.getItem('username'))	{
			setName(localStorage.getItem('username'));
			setPageSelector(1);
		}
	}, []);

	const pages = {
		0: <Welcome handleCreateAccount={handleCreateAccount} name={name} setName={setName} />,
		1: <Dashboard name={name} attempts={attempts} PLAN={PLAN} day={day} handleChangePage={handleChangePage} daysWords={daysWords} datetime={datetime} />,
		2: <Challenge />
	};

	return (
		<Layout>
			{pages[pageSelector]}
		</Layout>
	)
}

export default App
