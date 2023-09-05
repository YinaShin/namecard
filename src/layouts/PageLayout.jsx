import { node } from 'prop-types';
import PageLayoutStyle from './PageLayout.module.scss';

const PageLayout = (props) => {
	return (
		<div
			id="sqWrapDiv"
			className={PageLayoutStyle['sq-wrap']}
		>
			{props.children}
		</div>
	);
};

PageLayout.propTypes = {
	children: node,
};

export default PageLayout;
