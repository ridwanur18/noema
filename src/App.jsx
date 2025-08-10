import { useState, useEffect } from 'react';
import Layout from './components/layouts/Layout.jsx';
import Welcome from './components/layouts/Welcome.jsx';
import Dashboard from './components/layouts/Dashboard.jsx';
import Challenge from './components/layouts/Challenge.jsx';

import WORDS from './utils/VOCAB.json';
import { getWordByIndex, PLAN } from './utils';


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

	function handleI