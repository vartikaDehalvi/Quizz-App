import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faPenToSquare,
	faTrash,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';

function Admin({
	setScreen,
	userOrAdmin,
	setUserOrAdmin,
	quiz,
	setQuiz,
	setTimePerQuestion,
	appUser,
}) {
	const [displayAddForm, setDisplayAddForm] = useState(false);
	const [displayTimeForm, setDisplayTimeForm] = useState(false);
	const [questionAddClicked, setQuestionAddClicked] = useState(false);
	const [timeAddClicked, setTimeAddClicked] = useState(false);
	const [count, setCount] = useState(quiz.length + 1);
	const [selectedId, setSelectedId] = useState(0);
	const [formData, setFormData] = useState({
		question: '',
		subject: '',
		options: ['', '', '', ''],
		answer: '',
	});
	const [time, setTime] = useState({
		time: 10,
	});

	const [fieldAlert, setFieldAlert] = useState('');

	function addOrEditQuestion(e) {
		e.preventDefault();

		if (
			formData.question.trim() === '' ||
			formData.subject.trim() === '' ||
			formData.options.some((opt) => opt.trim() === '') ||
			formData.answer.trim() === ''
		) {
			setFieldAlert('All fields are required!');
			return;
		}

		const newQuizObject = {
			id: selectedId !== 0 ? selectedId : count,
			subject: formData.subject,
			question: formData.question,
			options: formData.options,
			answer: formData.answer,
		};
		if (selectedId === 0) {
			setQuiz([...quiz, newQuizObject]);
			setCount(count + 1);
		}
		if (selectedId !== 0) {
			const editedQuiz = quiz.map((q) =>
				selectedId === q.id ? newQuizObject : q
			);
			setQuiz(editedQuiz);
		}
		setSelectedId(0);
		setQuestionAddClicked(false);
		setDisplayAddForm(true);

		setFormData({
			question: '',
			subject: '',
			options: ['', '', '', ''],
			answer: '',
		});
		console.log(quiz);
	}

	function handleTime(e) {
		e.preventDefault();
		setTimePerQuestion(Number(time.time));
		setTimeAddClicked(false);
	}

	function handleEdit(q) {
		setSelectedId(q.id);
		setDisplayAddForm(true);

		setFormData({
			question: q.question,
			subject: q.subject,
			options: [...q.options],
			answer: q.answer,
		});

		setQuestionAddClicked(true);
		console.log(formData, quiz);
	}

	function handleDelete(toDelete) {
		const deleteItem = quiz.filter(
			(q) => q.id !== toDelete.id // Return a new array that does not contain the matching id
		);
		const newQuiz = deleteItem.map((item, index) => ({
			...item,
			id: index + 1,
		}));
		setQuiz(newQuiz);
	}

	return (
		<div
			style={{
				background: ' #c8d5de',
				background:
					'linear-gradient(0deg, rgba(200, 213, 222, 0.57) 63%, rgba(22, 28, 204, 0.34) 100%)',
				color: '#020446ff',
				border: '5px',
				borderRadius: '5px',
				padding: '1.3rem',
				boxShadow: '0 0 10px grey',
				width: '100%',
				height: '100%',
				boxSizing: 'border-box',
			}}
		>
			<h3 style={{ margin: '0' }}>Welcome {appUser.name}!</h3>
			<h2 style={{ margin: '0' }}>{'Administrator'}</h2>

			{/* Form Buttons */}
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<button
						className="btn-grad"
						onClick={() => {
							setQuestionAddClicked(!questionAddClicked);
							setDisplayAddForm(true);
						}}
						style={{
							padding: '.3rem',
							boxSizing: 'border-box',
							boxShadow: '0 0 2px #eee',
						}}
					>
						Question
						<FontAwesomeIcon icon={faPlus} />
					</button>

					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<button
							className="btn-grad"
							onClick={() => {
								setDisplayTimeForm(!displayTimeForm);
								setTimeAddClicked(true);
							}}
							style={{
								padding: '.3rem',
								boxSizing: 'border-box',
								boxShadow: '0 0 2px #eee',
							}}
						>
							Change Time Per Question
						</button>
					</div>
				</div>
				<span
					style={{
						textAlign: 'right',
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					Current: {time.time}s
				</span>
				{/* Forms */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
						margin: ' 0',
					}}
				>
					<div style={{ width: '60%' }}>
						{/* Question Form */}
						{displayAddForm && questionAddClicked && (
							<form
								onSubmit={addOrEditQuestion}
								style={{
									display: 'flex',
									flexDirection: 'column',
									width: '100%',
									margin: '0',
								}}
							>
								{(formData.question.trim() === '' ||
									formData.subject.trim() === '' ||
									formData.options.some((opt) => opt.trim() === '') ||
									formData.answer.trim() === '') && <h3>{fieldAlert}</h3>}
								<label style={{ textAlign: 'left' }}>
									Question: {selectedId ? selectedId : quiz.length + 1}{' '}
								</label>
								<input
									value={formData.question}
									onChange={(e) => {
										setFormData({ ...formData, question: e.target.value });
									}}
									style={{ padding: '.2rem .5rem' }}
									type="text"
								/>

								<label style={{ textAlign: 'left' }}>Subject:</label>
								<input
									value={formData.subject}
									onChange={(e) =>
										setFormData({ ...formData, subject: e.target.value })
									}
									style={{ padding: '.2rem .5rem' }}
									type="text"
								/>

								<label style={{ textAlign: 'left' }}>Options:</label>
								<div style={{ display: 'flex', gap: '0.5rem' }}>
									{formData.options.map((opt, idx) => (
										<input
											key={idx}
											value={opt}
											onChange={(e) => {
												const updated = [...formData.options];
												updated[idx] = e.target.value;
												setFormData({ ...formData, options: updated });
											}}
											style={{ width: '25%', padding: '.2rem .5rem' }}
										/>
									))}
								</div>

								<label style={{ textAlign: 'left' }}>Answer:</label>
								<input
									value={formData.answer}
									onChange={(e) =>
										setFormData({ ...formData, answer: e.target.value })
									}
									style={{ padding: '.2rem .5rem' }}
									type="text"
								/>

								<button
									className="btn-grad"
									type="submit"
									style={{
										marginTop: '.8rem',
										padding: '.1rem',
										width: '10%',
										boxShadow: '0 0 2px #eee',
									}}
								>
									Save
								</button>
							</form>
						)}
					</div>

					{/* Time Form */}
					{displayTimeForm && timeAddClicked && (
						<div style={{ width: '35%' }}>
							<form
								onSubmit={handleTime}
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-end',
								}}
							>
								<label style={{ textAlign: 'left' }} htmlFor="timeInput">
									Enter Time in Seconds:
								</label>
								<input
									id="timeInput"
									type="text"
									value={time.time}
									onChange={(e) => setTime({ ...time, time: e.target.value })}
									style={{
										width: '20%',
										padding: '0.3rem',
										marginBottom: '0.5rem',
									}}
								/>
								<button
									className="btn-grad"
									style={{ marginTop: '.8rem', padding: '.1rem', width: '15%' }}
									type="submit"
								>
									Save
								</button>
							</form>
						</div>
					)}
				</div>

				{/* Table */}
				<table style={{ margin: '2rem 0', width: '100%' }}>
					<thead>
						<tr>
							<th>Sr. No.</th>
							<th>Questions</th>
							<th>Subject</th>
							<th>Options</th>
							<th>Answer</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{quiz.map((q) => (
							<tr key={q.id}>
								<td style={{ padding: '0 1rem', width: '3%' }}>{q.id}.</td>
								<td
									style={{ textAlign: 'left', padding: '0 1rem', width: '35%' }}
								>
									{q.question}
								</td>
								<td style={{ padding: '0 1rem', width: '10%' }}>{q.subject}</td>
								<td
									style={{ textAlign: 'left', padding: '0 1rem', width: '30%' }}
								>
									{q.options.join(', ')}
								</td>
								<td style={{ padding: '0 1rem', width: '10%' }}>{q.answer}</td>
								<td style={{ padding: '0 1rem', width: '20%' }}>
									{/* Edit/ Delete Buttons */}
									<button
										className="btn-grad"
										style={{
											marginTop: '.8rem',
											padding: '.1rem',
											color: '#020446ff',
											margin: '.1rem',
										}}
										onClick={() => {
											handleEdit(q);
										}}
									>
										<FontAwesomeIcon icon={faPenToSquare} />
									</button>
									<button
										className="btn-grad"
										style={{
											marginTop: '.8rem',
											padding: '.1rem',
											color: '#020446ff',
											margin: '.1rem',
										}}
										onClick={() => {
											handleDelete(q);
										}}
									>
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* User Login button */}
			<button
				className="btn-grad"
				onClick={() => {
					setUserOrAdmin('user');
					setScreen('loginForm');
				}}
				style={{ margin: '0 1rem' }}
			>
				User Login
			</button>
		</div>
	);
}

export default Admin;
