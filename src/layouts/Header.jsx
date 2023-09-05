import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeaderStyle from './Header.module.scss';

const Header = ({children,back = true,menu = false,close = false}) => {
	const cx = classNames.bind(HeaderStyle);
	return (
		<header
			className={cx('header-wrap')}
		>
			<div className={HeaderStyle['header-left']}>
				{back && (
					<button type="button" className={HeaderStyle['icon-header-back']}>
						<span className="hidden">뒤로가기</span>
					</button>
				)}
				{children ? <h1>{children}</h1> : <h1 className="hidden">SQ전자명함</h1>}
			</div>
			<div className={HeaderStyle['header-right']}>
				{menu && (
					<button type="button" className={HeaderStyle['icon-header-menu']}>
						<span className="hidden">메뉴</span>
					</button>
				)}
				{close && (
					<button type="button" className={HeaderStyle['icon-header-menu']}>
						<span className="hidden">닫기</span>
					</button>
				)}
			</div>
		</header>
	);
};

Header.propTypes = {
	back: PropTypes.bool,
	menu: PropTypes.bool,
	close: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	className: PropTypes.string,
};

export default Header;
