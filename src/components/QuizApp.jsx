import { useEffect, useState } from 'react';
import ScoreCard from './ScoreCard';

function QuizApp({
	onSubmit,
	quiz,
	userAnswer,
	setUserAnswer,
	filteredQuiz,
	timePerQuestion,
	subject,
}) {
	const totalQuizTime = timePerQuestion * filteredQuiz.length;

	const [timeLeft, setTimeLeft] = useState(totalQuizTime); // total timer
	const [count, setCount] = useState(0); // current question index
	const [questionTimer, setQuestionTimer] = useState(timePerQuestion); // per question timer
	const [isPrev, setIsPrev] = useState(false);

	// 1. Total Quiz Timer
	useEffect(() => {
		const totalTimer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					clearInterval(totalTimer);
					handleSubmit();
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(totalTimer);
	}, []);

	// 2. Per-question Timer
	useEffect(() => {
		setQuestionTimer(timePerQuestion); // reset on question change

		const qTimer = setInterval(() => {
			setQuestionTimer((prev) => {
				if (prev <= 1) {
					clearInterval(qTimer);
					if (count < filteredQuiz.length - 1) setCount((c) => c + 1);
					else handleSubmit();
					return timePerQuestion;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(qTimer); // cleanup on question change
	}, [count, timePerQuestion]);

	function handleOptionSelected(option, count) {
		const questionId = filteredQuiz[count].id;

		const existing = userAnswer.find((ans) => ans.id === questionId);

		let updatedAnswers = [];

		if (existing) {
			updatedAnswers = userAnswer.map((ans) =>
				ans.id === questionId ? { ...ans, answer: option } : ans
			);
		} else {
			updatedAnswers = [...userAnswer, { id: questionId, answer: option }];
		}
		setIsPrev(true);
		setUserAnswer(updatedAnswers);
	}

	function handleSubmit() {
		const score = userAnswer.reduce((acc, ans) => {
			const quizItem = quiz.find((q) => q.id === ans.id);
			return quizItem && ans.answer === quizItem.answer ? acc + 1 : acc;
		}, 0);

		onSubmit(score);
	}

	return (
		<div
			style={{
				background:
					'linear-gradient(0deg, rgba(200, 213, 222, 0.57) 63%, rgba(22, 28, 204, 0.34) 100%)',
				color: '#020446ff',
				borderRadius: '5px',
				padding: '1.3rem',
				boxShadow: '0 0 10px grey',
				width: '50rem',
				boxSizing: 'border-box',
			}}
		>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<p style={{ textAlign: 'right' }}>
					Total Time Left: {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
					{String(timeLeft % 60).padStart(2, '0')}
				</p>
				<p>Per Question: {questionTimer}s</p>
			</div>

			<h1>Quiz App</h1>

			<div style={{ display: 'flex' }}>
				<h3 style={{ width: '5%' }}>Q{count + 1}.</h3>
				<h3 style={{ textAlign: 'left', width: '95%' }}>
					{filteredQuiz[count].question}
				</h3>
			</div>

			{filteredQuiz[count].options.map((o, index) => {
				const questionId = filteredQuiz[count].id;
				const selectedAnswer = userAnswer.find((ans) => ans.id === questionId);
				const isSelected = selectedAnswer?.answer === o;
				return (
					<button
						key={index}
						className={`${isSelected ? 'btn-grad' : ''}`}
						onClick={() => handleOptionSelected(o, count)}
						style={{
							display: 'block',
							margin: '1rem auto',
							width: '100%',
							textAlign: 'left',
						}}
					>
						{String.fromCharCode(65 + index)}. {o}
					</button>
				);
			})}

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '2rem 0',
				}}
			>
				<button
					className="btn-grad"
					style={{ display: 'block', boxShadow: '0 0 12px #bebaba' }}
					onClick={() => {
						if (count > 0) setCount(count - 1);
					}}
				>
					Prev
				</button>
				{count < filteredQuiz.length - 1 ? (
					<button
						className={`${isPrev ? 'btn-grad' : 'btn-grad'}`}
						style={{ display: 'block', boxShadow: '0 0 12px #bebaba' }}
						onClick={() => {
							setCount(count + 1);
						}}
					>
						Next
					</button>
				) : (
					<button
						className="btn-grad"
						style={{ display: 'block' }}
						onClick={handleSubmit}
					>
						Submit
					</button>
				)}
			</div>
		</div>
	);
}

export default QuizApp;
