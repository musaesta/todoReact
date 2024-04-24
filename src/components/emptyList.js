import leaf from '../img/leaf.svg';
const EmptyList = () => {
	return (
		<li id='emptyList' className='list-group-item empty-list'>
			<img src={leaf} alt='Empty' width='48' className='mt-3' />
			<div className='empty-list__title'>Список дел пуст</div>
		</li>
	);
};
export default EmptyList;
