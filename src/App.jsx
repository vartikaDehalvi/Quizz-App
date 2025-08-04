import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import "./components/QuizApp"
import LogIn from './components/LogIn';
import QuizApp from './components/QuizApp';
import ScoreCard from './components/ScoreCard';
import Solutions from './components/Solutions';
import Admin from './components/Admin';
import LogInPage from './components/LogInPage';
import Instructions from './components/Instructions';
import Premium from './components/Premium';
import Thanks from './components/Thanks';

function App() {
	const [quiz, setQuiz] = useState([
		{
			id: 1,
			question: 'Who was the first President of India?',
			subject: 'History',
			options: [
				'Jawaharlal Nehru',
				'Dr. Rajendra Prasad',
				'Mahatma Gandhi',
				'Sardar Patel',
			],
			answer: 'Dr. Rajendra Prasad',
		},
		{
			id: 2,
			question: 'In which year did India gain independence?',
			subject: 'History',
			options: ['1945', '1946', '1947', '1950'],
			answer: '1947',
		},
		{
			id: 3,
			question: 'Who founded the Maurya Empire?',
			subject: 'History',
			options: ['Ashoka', 'Chandragupta Maurya', 'Harsha', 'Akbar'],
			answer: 'Chandragupta Maurya',
		},
		{
			id: 4,
			question: 'What was the capital of the Mughal Empire?',
			subject: 'History',
			options: ['Delhi', 'Lahore', 'Agra', 'Fatehpur Sikri'],
			answer: 'Agra',
		},
		{
			id: 5,
			question: 'Who led the Salt March in 1930?',
			subject: 'History',
			options: [
				'Jawaharlal Nehru',
				'Bhagat Singh',
				'Subhash Chandra Bose',
				'Mahatma Gandhi',
			],
			answer: 'Mahatma Gandhi',
		},

		{
			id: 6,
			question: 'What is the SI unit of force?',
			subject: 'Physics',
			options: ['Watt', 'Joule', 'Newton', 'Pascal'],
			answer: 'Newton',
		},
		{
			id: 7,
			question: 'Speed is a scalar or vector quantity?',
			subject: 'Physics',
			options: ['Scalar', 'Vector', 'Both', 'None'],
			answer: 'Scalar',
		},
		{
			id: 8,
			question:
				'Which law states that every action has an equal and opposite reaction?',
			subject: 'Physics',
			options: ['First law', 'Second law', 'Third law', 'Zeroth law'],
			answer: 'Third law',
		},
		{
			id: 9,
			question: 'What is the acceleration due to gravity on Earth?',
			subject: 'Physics',
			options: ['9.8 m/s²', '10 m/s²', '9.2 m/s²', '8.9 m/s²'],
			answer: '9.8 m/s²',
		},
		{
			id: 10,
			question: 'Which device is used to measure electric current?',
			subject: 'Physics',
			options: ['Voltmeter', 'Ammeter', 'Galvanometer', 'Thermometer'],
			answer: 'Ammeter',
		},

		{
			id: 11,
			question: "Which word is a synonym of 'Happy'?",
			subject: 'English',
			options: ['Sad', 'Angry', 'Joyful', 'Tired'],
			answer: 'Joyful',
		},
		{
			id: 12,
			question: 'Choose the correct spelling:',
			subject: 'English',
			options: [
				'Accomodation',
				'Accommodation',
				'Acommodation',
				'Accomadation',
			],
			answer: 'Accommodation',
		},
		{
			id: 13,
			question: "Which part of speech is the word 'Quickly'?",
			subject: 'English',
			options: ['Adjective', 'Verb', 'Noun', 'Adverb'],
			answer: 'Adverb',
		},
		{
			id: 14,
			question: "Identify the verb in the sentence: 'She is singing a song.'",
			subject: 'English',
			options: ['She', 'Is', 'Singing', 'Song'],
			answer: 'Singing',
		},
		{
			id: 15,
			question: "What is the past tense of 'Go'?",
			subject: 'English',
			options: ['Gone', 'Went', 'Goed', 'Going'],
			answer: 'Went',
		},

		{
			id: 16,
			question: 'What is 12 × 8?',
			subject: 'Math',
			options: ['96', '84', '108', '92'],
			answer: '96',
		},
		{
			id: 17,
			question: 'What is the square root of 144?',
			subject: 'Math',
			options: ['10', '11', '12', '13'],
			answer: '12',
		},
		{
			id: 18,
			question: 'Solve: 3² + 4² = ?',
			subject: 'Math',
			options: ['12', '25', '7', '17'],
			answer: '25',
		},
		{
			id: 19,
			question: 'What is 15% of 200?',
			subject: 'Math',
			options: ['30', '25', '35', '40'],
			answer: '30',
		},
		{
			id: 20,
			question: 'If x = 3, what is the value of 2x + 1?',
			subject: 'Math',
			options: ['5', '6', '7', '8'],
			answer: '7',
		},
		{
			id: 21,
			question: 'Which of the following rivers does not originate in India?',
			subject: 'Geography',
			options: ['Ganga', 'Brahmaputra', 'Yamuna', 'Godavari'],
			answer: 'Brahmaputra',
		},
		{
			id: 22,
			question:
				'The "Roaring Forties" are strong westerly winds found in which region?',
			subject: 'Geography',
			options: [
				'Northern Hemisphere between 40° and 50° N',
				'Southern Hemisphere between 40° and 50° S',
				'Equatorial region',
				'Arctic Circle',
			],
			answer: 'Southern Hemisphere between 40° and 50° S',
		},
		{
			id: 23,
			question: 'Which country has the largest number of active volcanoes?',
			subject: 'Geography',
			options: ['Indonesia', 'Japan', 'United States', 'Philippines'],
			answer: 'United States',
		},
		{
			id: 24,
			question: 'Which is the world’s largest inland body of water?',
			subject: 'Geography',
			options: ['Lake Superior', 'Caspian Sea', 'Aral Sea', 'Lake Victoria'],
			answer: 'Caspian Sea',
		},
		{
			id: 25,
			question: 'What is the primary cause of the Indian monsoon?',
			subject: 'Geography',
			options: [
				'Rotation of Earth',
				'Differential heating of land and sea',
				'Western disturbances',
				'El Niño effect',
			],
			answer: 'Differential heating of land and sea',
		},
	]);

	const [premiumPacks, setPremiumPacks] = useState({
		silver: {
			title: 'Silver Plan',
			description: 'Basic access for new learners',
			features: {
				questionLimit: 50,
				adminPanel: 'Limited Access',
				duration: 7, // in days
				support: 'Email only',
				certificate: 'No',
				accessToSolutions: 'Yes',
				downloadablePDFs: 'No',
				customTimePerQuestion: 'No',
			},
			price: 29,

			discount: '5% off',
			tagline: 'Kickstart your prep',
		},
		gold: {
			title: 'Gold Plan',
			description: 'Intermediate plan for regular users',
			features: {
				questionLimit: 200,
				adminPanel: 'Full Access',
				duration: 30,
				support: 'Email + Chat',
				certificate: 'No',
				accessToSolutions: 'Yes',
				downloadablePDFs: 'Yes',
				customTimePerQuestion: 'No',
			},
			price: 79,

			discount: '10% off',
			tagline: 'Level up your skills',
		},
		platinum: {
			title: 'Platinum Plan',
			description: 'Complete package for power users',
			features: {
				questionLimit: 'Unlimited',
				adminPanel: 'Full Access + Analytics',
				duration: 365,
				support: '24/7 Priority Support',
				certificate: 'Yes',
				accessToSolutions: 'Yes',
				downloadablePDFs: 'Yes',
				customTimePerQuestion: 'Yes',
			},
			price: 199,

			discount: '15% off',
			tagline: 'For serious aspirants',
		},
	});

	const [screen, setScreen] = useState('login');
	const [score, setScore] = useState(0);
	const [timePerQuestion, setTimePerQuestion] = useState(10);
	const [userAnswer, setUserAnswer] = useState([]);
	const [userOrAdmin, setUserOrAdmin] = useState('');
	const [isUser, setIsUser] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [subject, setSubject] = useState('All');
	const [attempt, setAttempt] = useState(0);
	const [premium, setPremium] = useState(false);
	const [appUser, setAppUser] = useState({
		name: '',
		email: '',
	});
	const uniqueSubject = [
		...new Set(
			quiz.map((q) => q.subject) //Extracting the subjects while removing the duplicates
		),
	];

	const filteredQuiz =
		subject === 'All' ? quiz : quiz.filter((q) => q.subject === subject);

	function handleQuizSubmit(finalScore) {
		setScore(finalScore);
		setScreen('score');
	}

	function handleRestart() {
		setScore(0);
		const attempts = attempt + 1;
		if (attempt > 2) {
			setScreen('instructions');
			return;
		}
		setAttempt(attempts);
		setScreen('quiz');
		setUserAnswer([]);
	}
	function handleSubjectChange() {
		setScore(0);
		setScreen('instructions');
		setUserAnswer([]);
	}

	function handleShowSolutions() {
		setScreen('solution');
	}

	function handleAdmin() {
		setScreen('admin');
	}

	function handleLogIn() {
		if (isUser) {
			setUserOrAdmin('user');
			setScreen('user');
		}
		if (isAdmin) {
			setUserOrAdmin('admin');
			setScreen('admin');
		}
	}

	return (
		<div>
			{screen === 'login' && (
				<LogIn
					setUserOrAdmin={setUserOrAdmin}
					setScreen={() => setScreen('loginForm')}
				/>
			)}
			{screen === 'loginForm' && (
				<LogInPage
					quiz={quiz}
					setQuiz={setQuiz}
					userOrAdmin={userOrAdmin}
					setScreen={setScreen}
					setUserAnswer={setUserAnswer}
					appUser={appUser}
					setAppUser={setAppUser}
				/>
			)}
			{screen === 'admin' && (
				<Admin
					quiz={quiz}
					setQuiz={setQuiz}
					onRestart={handleRestart}
					setUserOrAdmin={setUserOrAdmin}
					setScreen={setScreen}
					setTimePerQuestion={setTimePerQuestion}
					appUser={appUser}
				/>
			)}
			{screen === 'quiz' && (
				<QuizApp
					filteredQuiz={filteredQuiz}
					uniqueSubject={uniqueSubject}
					subject={subject}
					quiz={quiz}
					userAnswer={userAnswer}
					setUserAnswer={setUserAnswer}
					setScreen={setScreen}
					onSubmit={handleQuizSubmit}
					timePerQuestion={timePerQuestion}
				/>
			)}
			{screen === 'score' && (
				<ScoreCard
					filteredQuiz={filteredQuiz}
					score={score}
					onRestart={handleRestart}
					onShowSolutions={handleShowSolutions}
					subjChange={handleSubjectChange}
					setAttempt={setAttempt}
					attempt={attempt}
				/>
			)}
			{screen === 'solution' && (
				<Solutions
					filteredQuiz={filteredQuiz}
					userOrAdmin={userOrAdmin}
					showAdmin={handleAdmin}
					quiz={quiz}
					userAnswer={userAnswer}
					setUserOrAdmin={setUserOrAdmin}
					setScreen={setScreen}
					onBack={() => setScreen('score')}
				/>
			)}
			{screen === 'instructions' && (
				<Instructions
					uniqueSubject={uniqueSubject}
					quiz={quiz}
					timePerQuestion={timePerQuestion}
					setScreen={setScreen}
					appUser={appUser}
					subject={subject}
					setSubject={setSubject}
					setAttempt={setAttempt}
					attempt={attempt}
				/>
			)}
			{screen === 'premium' && (
				<Premium
					premiumPacks={premiumPacks}
					setPremiumPacks={setPremiumPacks}
					setScreen={setScreen}
				/>
			)}
			{screen === 'thanks' && <Thanks />}
		</div>
	);
}

export default App;
