import QuizApp from './QuizApp';
import React, { useState } from 'react';

function LogInPage({ userOrAdmin, setScreen, appUser, setAppUser }) {
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (appUser.email.trim() === '') {
			setIsValid(false);
			setMessage('Email Required!');
			return;
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(appUser.email.trim())) {
			setIsValid(false);
			setMessage('Enter a valid email!');
			return;
		}

		setIsValid(true);
		setMessage('');

		if (userOrAdmin === 'user') setScreen('instructions');
		if (userOrAdmin === 'admin') setScreen('admin');

		console.log(appUser);
	}
	return (
		<div
			style={{
				background: ' #c8d5de',
				background:
					'linear-gradient(0deg, rgba(200, 213, 222, 0.57) 63%, rgba(22, 28, 204, 0.34) 100%)',
				color: '#020446ff',
				border: '5px',
				boxShadow: '3px solid grey',
				borderRadius: '5px',
				padding: '1.3rem',
				boxShadow: '0 0 10px grey',

				width: '80%',
				margin: 'auto',
				height: '100%',
				boxSizing: 'border-box',

				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			<h1>Enter Your Credentials</h1>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
				}}
				action=""
			>
				<h5>{message}</h5>

				<input
					value={appUser.name}
					onChange={(e) => setAppUser({ ...appUser, name: e.target.value })}
					style={{ padding: '.5rem', width: '60%', margin: '1rem 0' }}
					type="text"
					placeholder="Enter Name"
				/>

				<input
					value={appUser.email}
					onChange={(e) => setAppUser({ ...appUser, email: e.target.value })}
					style={{ padding: '.5rem', width: '60%', margin: '1rem 0' }}
					type="text"
					placeholder="Enter Email"
				/>
				<button className="btn-grad" type="submit">
					Log In
				</button>
			</form>
		</div>
	);
}

export default LogInPage;
