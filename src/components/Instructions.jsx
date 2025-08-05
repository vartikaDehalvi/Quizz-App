import React, { useState } from 'react';

function Instructions({
	appUser,
	timePerQuestion,
	setScreen,
	quiz,
	uniqueSubject,
	setSubject,
	setAttempt,
	attempt,
}) {
	const [attemptMesssage, setAttemptMessage] = useState('');

	function quizAttempt() {
		let attempts = attempt + 1;

		if (attempt > 2) {
			setAttemptMessage('Free limit exhausted! Purchase Premium.');
			return;
		}
		setAttempt(attempts);
		setScreen('quiz');
	}

	const timeInSeconds = timePerQuestion * quiz.length;
	let displayTime = 0;
	if (timeInSeconds < 60) {
		let time = 0;
		time = timeInSeconds;
		if (time == 1) displayTime = `${time} sec`;
		else displayTime = `${time} s`;
	} else if (timeInSeconds <= 3600) {
		let time = 0;
		time = (timeInSeconds / 60).toFixed(0); // fixed- returns a string with (0) digits after decimal point
		if (time == 1) displayTime = `${time} min`;
		else displayTime = `${time} mins`;
	} else {
		let time = 0;
		time = (timeInSeconds / 3600).toFixed(0);
		if (time == 1) displayTime = `${time} hr`;
		else displayTime = `${time} hrs`;
	}

	return (
		<div
			className="totalWidth"
			style={{
				background: ' #c8d5de',
				background:
					'linear-gradient(0deg, rgba(200, 213, 222, 0.57) 0%, rgba(22, 28, 204, 0.34) 100%)',
				color: '#020446ff',
				border: '5px',
				boxShadow: '3px solid grey',
				borderRadius: '5px',
				padding: '1.3rem',
				boxShadow: '0 0 10px grey',
				height: '100%',
				boxSizing: 'border-box',
			}}
		>
			<h3 style={{ marginBottom: '0' }}>Welcome {appUser.name}!</h3>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				{/*Premium Button */}
				{attempt > 2 && attemptMesssage && (
					<>
						<h4>{attemptMesssage}</h4>

						<button
							onClick={() => setScreen('premium')}
							style={{
								fontSize: '1.8rem',
								width: '20%',
								padding: '.3rem',
								marginTop: '1rem',
							}}
						>
							{' '}
							Go Premium
						</button>
					</>
				)}
			</div>
			<h2>Instructions</h2>
			<div>
				<ol style={{ textAlign: 'left' }}>
					<li>You can make only 3 attempts. </li>
					<li>You get {timePerQuestion} seconds per question. </li>
					<li>Total Time for all questions: {displayTime} </li>
					<li>
						Select your favourite subject, then click READY. Or directly jump
						in.
					</li>
				</ol>
			</div>
			<div
				style={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-evenly',
					width: '100%',
				}}
			>
				{/* Subjects */}
				<div>
					{uniqueSubject.map((subj) => (
						<button
							className={`btn-grad`}
							onClick={() => setSubject(subj)}
							style={{
								margin: '1rem',
								fontSize: '1.3rem',
								boxShadow: '0 0 12px #eee',
							}}
						>
							{subj}
						</button>
					))}
				</div>
			</div>
			{/* Ready Button */}
			<button
				className="btn-gradReady"
				onClick={quizAttempt}
				style={{
					padding: '.5rem',
					marginBottom: '1rem',
					backgroundColor: '191cc280',
				}}
			>
				Ready!
			</button>
		</div>
	);
}
export default Instructions;
