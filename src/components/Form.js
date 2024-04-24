import { useEffect, useState } from 'react';

const Form = ({ onSubmit, keyInput }) => {
	const [text, setText] = useState({});

	const dataTask = e => {
		setText({ text: e.target.value, done: false, id: Date.now() });
	};
	useEffect(() => {
		setText({ text: '', done: false, id: Date.now() });
	}, [keyInput]);
	return (
		<form id='form'>
			<div className='form-group'>
				<input
					key={keyInput}
					onChange={e => dataTask(e)}
					type='text'
					className='form-control'
					id='taskInput'
					placeholder='Текст задачи'
					required
				/>
				<small id='emailHelp' className='form-text text-muted'>
					Что делаем, сколько времени тратим, какой результат получаем.
				</small>
			</div>
			<button
				onClick={e => onSubmit(text.text === '' ? null : e, text)}
				type='submit'
				className='btn btn-primary btn-lg active'
			>
				Добавить
			</button>
		</form>
	);
};
export default Form;
