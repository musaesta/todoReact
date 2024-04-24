import EmptyList from './emptyList';
import cross from '../img/cross.svg';
import tick from '../img/tick.svg';

const Tasks = ({ taskText, setTaskText }) => {
	const doneTask = index => {
		const newTask = taskText.map(item => {
			if (item.id === index) {
				item.done = !item.done;
			}
			return item;
		});
		setTaskText(newTask);
	};
	const deleteTask = index => {
		const newTask = taskText.filter(item => item.id !== index);
		setTaskText(newTask);
	};

	return (
		<ul id='tasksList' className='list-group list-group-flush'>
			{taskText.length > 0 ? null : <EmptyList />}
			{taskText.map((item, i) => {
				return (
					<li
						key={i}
						className='list-group-item d-flex justify-content-between task-item'
					>
						<span className={item.done ? 'task-title--done' : 'task-title'}>
							{item.text}
						</span>
						<div className='task-item__buttons'>
							<button
								onClick={() => doneTask(item.id)}
								type='button'
								data-action='done'
								className='btn-action'
							>
								<img src={tick} alt='Done' width='18' height='18' />
							</button>
							<button
								onClick={() => deleteTask(item.id)}
								type='button'
								data-action='delete'
								className='btn-action'
							>
								<img src={cross} alt='Done' width='18' height='18' />
							</button>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
export default Tasks;
