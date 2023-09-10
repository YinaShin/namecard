import PropTypes from 'prop-types';
import InputStyle from '../Input.module.scss';

const ResetButton = ({ onClick }) => {
	
	return (
		<button 
			className={`${InputStyle['reset-button']}`} 
			onClick={(evt) => {
				onClick && onClick(evt);}}
			>
			<span className="hidden">초기화</span>
		</button>
	);
};

ResetButton.propTypes = {
	onClick: PropTypes.func,
};
export default ResetButton;
