import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import InputStyle from './Input.module.scss';

const Input = ({type, spacing= '0', placeholder, disabled, readonly, error=false}) => {
	const cx = classNames.bind(InputStyle);
	return (
		<div
			className={cx('form-set')}
			style={{ '--spacing': `${spacing}px` }}
		>
			<input
				type={type}
				className={InputStyle['input']}
				placeholder={placeholder}
				disabled={disabled}
				readonly={readonly}
			>
			</input>
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	spacing: PropTypes.string,
	disabled: PropTypes.bool,
	readonly: PropTypes.bool,
	error:PropTypes.bool,
};

export default Input;
