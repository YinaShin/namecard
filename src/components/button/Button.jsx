import { oneOf, bool, node, string, object, func } from 'prop-types';
import { BUTTON_SIZE_TYPES, BUTTON_CLASS_TYPES } from './constants';
import ButtonStyle from './Button.module.scss';

const Button = ({ 
    id, 
    disabled = false, 
    uiType = BUTTON_CLASS_TYPES.PRIMARY, 
    buttonSize = BUTTON_SIZE_TYPES.X_LARGE,
    className = '', 
    onClick = undefined,
    spacing = 0,
    children, 
    style,
}) => {

    const onClickHandler = (e) => {
		onClick && onClick(e);
	};
	return (
		<button
            id={id}
            disabled={disabled}
            className={`${ButtonStyle['button-default']} ${ButtonStyle[buttonSize]} ${
                ButtonStyle[uiType]
            } ${className && className}`}
            style={{ ...{ '--spacing': `${spacing}px` }, ...style }}
            onClick={(e) => {
                !disabled && onClickHandler(e);
            }}
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
