import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import ResetButton from './button/ResetButton';
import InputStyle from './Input.module.scss';

const cx = classNames.bind(InputStyle);
const InputBase = ({
	id,
	value,
	placeholder,
	onChange,
	disabled = false,
	readonly = false,
	maxLength,
	type = "text",
	error = false,
	spacing = "0",
	isWithButton = false,
	withButtonText,
	isLabel = false,
	labelText,
	message,
}) => {
	const inputRef = useRef();
	const [inputValue,setInputValue] = useState(value);
	return (
		<div
			className={cx('wrap', {
				'input-disabled-wrap': disabled,
				'input-readonly-wrap': readonly,
				'input-error-wrap': error,
			})}
			style={{ '--spacing': `${spacing}px` }}
		>
			{isLabel && labelText && (
				<label htmlFor={id}>{labelText}</label>
			)}
			<div
				className={cx('input-wrap')}
			>	
				<input
					ref={inputRef}
					id={id}
					defaultValue={inputValue}
					type={type}
					className={InputStyle['input']}
					placeholder={placeholder}
					disabled={disabled}
					readOnly={readonly}
					onChange={onChange}
					maxLength={maxLength}
				>
				</input>
				<div className={`${InputStyle['buttons']}`}>
					{!disabled && !readonly && (
						<ResetButton
							inputRef={inputRef}
							onClick={(evt) => {
								inputRef.current.value = '';
								inputRef.current.focus();
								setInputValue('');
							}}
						/>
					)}
					{isWithButton && (
						<button><span className="label">{ withButtonText }</span></button>
					)}
				</div>
			</div>
			{error && (
				<p className={`${InputStyle['message']}`}>{ message }</p>
			)}
		</div>
	);
};

InputBase.propTypes = {
	id: PropTypes.string,
	defaultvalue: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	readonly: PropTypes.bool,
	dropdownButton: PropTypes.element,
	align: PropTypes.string,
	maxLength: PropTypes.number,
	type: PropTypes.string,
	error: PropTypes.bool,
	spacing: PropTypes.string,
	isLabel: PropTypes.bool,
	labelText: PropTypes.string,
	message: PropTypes.string,
};

export default InputBase;
