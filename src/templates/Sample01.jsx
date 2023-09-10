import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Sample01Style from './Sample01.module.scss';
import { PageLayout, Header } from '../layouts/';
import { InputBase, TextAreaBox, Button } from '../components/';

const cx = classNames.bind(Sample01Style);
const Sample01 = ({
	id,
}) => {
	return (
		<PageLayout>
			<Header menu={true}>
				명함 관리
			</Header>
			<div className="contents-area">
				<div className={cx(['container', 'sample01'])}>
					<h3 className="h3">부가 정보 관리</h3>
					<InputBase
						id={'inputForm01'}
						isLabel={true}
						labelText={'직급'}
						placeholder={'직급을 입력해 주세요.'}
						spacing={'16'}
					/>
					<InputBase
						id={'inputForm02'}
						isLabel={true}
						labelText={'부서'}
						placeholder={'부서를 입력해 주세요.'}
						spacing={'20'}
					/>
					<InputBase
						type={'number'}
						id={'inputForm03'}
						isLabel={true}
						labelText={'핸드폰번호'}
						placeholder={'핸드폰번호를 입력해 주세요.'}
						spacing={'20'}
					/>
					<InputBase
						type={'number'}
						id={'inputForm04'}
						isLabel={true}
						labelText={'회사번호'}
						placeholder={'회사번호를 입력해 주세요.'}
						spacing={'20'}
					/>
					<InputBase
						type={'number'}
						id={'inputForm05'}
						isLabel={true}
						labelText={'팩스번호'}
						placeholder={'팩스번호를 입력해 주세요.'}
						spacing={'20'}
					/>
					<InputBase
						id={'inputForm06'}
						isLabel={true}
						labelText={'주소'}
						placeholder={'주소를 입력해 주세요.'}
						spacing={'20'}
					/>
					<InputBase
						id={'inputForm07'}
						isLabel={true}
						labelText={'홈페이지'}
						placeholder={'홈페이지 주소를 입력해 주세요.'}
						spacing={'20'}
					/>
					<TextAreaBox
						id={'inputForm08'}
						isLabel={true}
						labelText={'인사말'}
						placeholder={'인사말을 입력해 주세요.'}
						spacing={'20'}
					/>
					<TextAreaBox
						id={'inputForm09'}
						isLabel={true}
						labelText={'사업 소개'}
						placeholder={'사업 소개를 입력해 주세요.'}
						spacing={'14'}
					/>
				</div>
				<div className="sticky-button button-group">
					<div className='button-row'>
						<Button uiType={'secondary-2nd'} buttonSize={'large'}>미리보기</Button>
					</div>
					<div className='button-row'>
						<Button uiType={'secondary-3rd'} buttonSize={'large'}>취소</Button>
						<Button uiType={'primary'} buttonSize={'large'}>확인</Button>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

Sample01.propTypes = {
	id: PropTypes.string,
};

export default Sample01;
