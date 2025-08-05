import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

function Solutions({
	setScreen,
	userOrAdmin,
	setUserOrAdmin,
	filteredQuiz,
	userAnswer,
	onBack,
}) {
	return (
		<div
			className="totalWidth"
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
				width: '100%',
				height: '100%',
				boxSizing: 'border-box',
			}}
		>
			<h2>Solutions</h2>

			<table>
				<thead>
					<tr>
						<th style={{ textAlign: 'center', padding: '0 1rem' }}>Sr. No.</th>
						<th style={{ textAlign: 'center', padding: '0 1rem' }}>Question</th>
						<th style={{ textAlign: 'center', padding: '0 1rem' }}>
							Your Answer
						</th>
						<th style={{ textAlign: 'center', padding: '0 1rem' }}></th>
						<th style={{ textAlign: 'center', padding: '0 1rem' }}>
							Correct Answer
						</th>
					</tr>
				</thead>
				<tbody>
					{filteredQuiz.map((q, index) => {
						const userAns = userAnswer.find((ans) => ans.id === q.id);

						return (
							<tr key={q.id}>
								<td style={{ textAlign: 'center', padding: '0 1rem' }}>
									{index + 1}
								</td>
								<td style={{ textAlign: 'left', padding: '0 1rem' }}>
									{q.question}
								</td>

								<td
									style={{
										textAlign: 'left',
										padding: '0 1rem',
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}
								>
									{userAns?.answer === '' || userAns === undefined
										? 'Not Answered'
										: userAns?.answer}
								</td>
								<td>
									{userAns?.answer === q.answer ? (
										<FontAwesomeIcon icon={faCheck} />
									) : (
										(userAns?.answer !== '' || userAns !== undefined) && (
											<FontAwesomeIcon icon={faXmark} />
										)
									)}
								</td>

								<td style={{ textAlign: 'left', padding: '0 1rem' }}>
									{q.answer}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{/* <p style={{padding:"auto 0", textAlign:"left"}}>{q.question}</p>
        <p style={{padding:"auto 0", textAlign:"left"}}>Your Answer: {userAns?.answer}</p> */}

			<div style={{ display: 'flex', margin: '1rem auto', width: '100%' }}>
				<button
					className="btn-grad"
					style={{ display: 'block', margin: '1rem 1rem', width: '50%' }}
					onClick={onBack}
				>
					Back to Score
				</button>
				<button
					className="btn-grad"
					onClick={() => {
						setUserOrAdmin('admin');
						setScreen('loginForm');
					}}
					style={{ display: 'block', margin: '1rem 1rem', width: '50%' }}
				>
					Admin Login
				</button>
			</div>
		</div>
	);
}

export default Solutions;
