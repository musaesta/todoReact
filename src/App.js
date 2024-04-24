import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
function App() {
	const [taskText, setTaskText] = useState([]);
	const [keyInput, setKeyInput] = useState(0);
	const onSubmit = (e, text) => {
		if (e === null) {
			return;
		}
		e.preventDefault();
		setTaskText(task => [...task, text]);
	};
	useEffect(() => {
		setKeyInput(key => key + 1);
	}, [taskText]);

	return (
		<div className='container'>
			<div className='display-4 mb-2'>ToDo приложение</div>
			<div className='h4 mb-5'>список задач на сегодня</div>
			<div className='card mb-4'>
				<Tasks taskText={taskText} setTaskText={setTaskText} />
			</div>

			<div className='card bg-light'>
				<div className='card-header'>Добавить новую задачу</div>
				<div className='card-body'>
					<Form onSubmit={onSubmit} keyInput={keyInput} />
				</div>
			</div>
		</div>
	);
}

export default App;
