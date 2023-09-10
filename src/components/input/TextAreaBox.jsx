import { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import InputStyle from './Input.module.scss';

const TextAreaBox = ({
	id,
	value,
	placeholder,
	onChange,
	disabled,
	readonly,
	maxLength = 100,
	minHeight = 152,
	defaultLine = 2,
	auto,
    isLabel = false,
	labelText,
    spacing = '0',
    error,
    isTextLengthChecker = false,
}) => {
	const cx = classNames.bind(InputStyle);
	const inputRef = useRef();

	return (
		<div 
            className={cx('text-area-wrap', {
                'input-disabled-wrap': disabled,
                'input-readonly-wrap': readonly,
                'input-error-wrap': error,
            })}
            style={{ '--spacing': `${spacing}px` }}
        >
            {isLabel && labelText && (
				<label htmlFor={id}>{labelText}</label>
			)}
			<div className={cx('text-area-content')}>
				<textarea
					className={cx({ auto })}
					style={{
						'--min-height': `${minHeight}px`,
						'--default-line': `${defaultLine}`,
					}}
					ref={inputRef}
					id={id}
					value={value}
					maxLength={maxLength}
					placeholder={placeholder}
					onChange={onChange}
					disabled={disabled}
					readOnly={readonly}
				/>
			</div>
            {isTextLengthChecker && (
                <p className={`${InputStyle['text-length']}`}>
                    <span className={`${InputStyle['current-length']}`}>
                        {value ? value.length : 0}자
                    </span>
                    /{maxLength}자
                </p>
            )}
		</div>
	);
};

TextAreaBox.propTypes = {
	id: PropTypes.string,
	value: PropTypes.string,
	maxLength: PropTypes.number,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	readonly: PropTypes.bool,
	minHeight: PropTypes.number,
	defaultLine: PropTypes.number,
	auto: PropTypes.bool,
    isLabel: PropTypes.bool,
	labelText: PropTypes.string,
    spacing: PropTypes.string,
    isTextLengthChecker: PropTypes.bool,
};
export default TextAreaBox;
