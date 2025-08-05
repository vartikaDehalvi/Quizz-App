import React from 'react';
import LogInPage from './LogInPage';

function LogIn({ setScreen, setUserOrAdmin }) {
	return (
		<div>
			<h2>Log In</h2>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					color: '#020446ff',
				}}
			>
				<button
					className="btn-grad"
					onClick={() => {
						setUserOrAdmin('user');
						setScreen('loginForm');
					}}
					style={{
						margin: '0 1rem',
						backgroundColor: '#646cff3b',
						color: '#020446ff',
					}}
				>
					As User
				</button>
				<button
					className="btn-grad"
					onClick={() => {
						setUserOrAdmin('admin');
						setScreen('loginForm');
					}}
					style={{
						margin: '0 1rem',
						backgroundColor: '#646cff3b',
						color: '#020446ff',
					}}
				>
					As Admin
				</button>
			</div>
		</div>
	);
}

export default LogIn;
