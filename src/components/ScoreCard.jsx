import { useState } from 'react';
import QuizApp from './QuizApp';

function ScoreCard({
	score,
	onRestart,
	filteredQuiz,
	onShowSolutions,
	subjChange,
}) {
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
				padding: '3rem',
				boxShadow: '0 0 10px grey',
				width: '30rem',
				boxSizing: 'border-box',
			}}
		>
			<h2> Quiz Complete!</h2>
			<h3>
				{' '}
				Score: {score}/{filteredQuiz.length}
			</h3>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<button
					className="btn-grad"
					style={{ display: 'block', margin: '1rem ', width: '50%' }}
					onClick={onRestart}
				>
					Restart Quiz
				</button>
				<button
					className="btn-grad"
					style={{ display: 'block', margin: '1rem ', width: '50%' }}
					onClick={subjChange}
				>
					Change Subject
				</button>
			</div>
			<button
				className="btn-grad"
				style={{ display: 'block', margin: '1rem auto', width: '100%' }}
				onClick={onShowSolutions}
			>
				Solutions
			</button>
		</div>
	);
}

export default ScoreCard;
