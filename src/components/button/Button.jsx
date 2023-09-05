import { oneOf, bool, node, string, object, func } from 'prop-types';
import { BUTTON_SIZE_TYPES, BUTTON_CLASS_TYPES } from './constants';

const Button = ({ id, disabled, uiType, className, children, style}) => {
	return (
		<button
            id={id}
            disabled={disabled}
            uiType={BUTTON_CLASS_TYPES}
			className={`${className && className}`}
            style={style}
            onClick={(e) => {}}
            buttonSize={BUTTON_SIZE_TYPES}
        >
            {children}
        </button>
	);
};

Button.propTypes = {
    id:string,
    disabled: bool,
    style: object,
	children: node,
	className: string,
    onClick: func,
    uiType: oneOf(Object.values(BUTTON_CLASS_TYPES)),
    buttonSize: oneOf(Object.values(BUTTON_SIZE_TYPES)),
};

export default Button;
