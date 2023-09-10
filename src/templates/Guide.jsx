import { PageLayout, Header } from '../layouts/';
import { Button, InputBase } from '../components';

function Guide() {
return (
  <PageLayout>
      <Header menu={true}>
        헤더입니다
      </Header>
      <div className="contents-area">
        <div className="container">
        <Button uiType={'primary'} buttonSize={'x-large'}>버튼</Button>
        <Button uiType={'primary'} buttonSize={'large'}>버튼</Button>
        <Button uiType={'primary'} buttonSize={'medium'}>버튼</Button>
        <Button uiType={'primary'} buttonSize={'medium02'}>버튼</Button>
        <Button uiType={'primary'} buttonSize={'small'}>버튼</Button>
        <Button uiType={'primary'} buttonSize={'x-small'}>버튼</Button>

        <br />

        <Button uiType={'secondary-2nd'} buttonSize={'x-large'}>버튼</Button>
        <Button uiType={'secondary-2nd'} buttonSize={'large'}>버튼</Button>
        <Button uiType={'secondary-2nd'} buttonSize={'medium'}>버튼</Button>
        <Button uiType={'secondary-2nd'} buttonSize={'medium02'}>버튼</Button>
        <Button uiType={'secondary-2nd'} buttonSize={'small'}>버튼</Button>
        <Button uiType={'secondary-2nd'} buttonSize={'x-small'}>버튼</Button>

        <br />

        <Button uiType={'secondary-3rd'} buttonSize={'x-large'}>버튼</Button>
        <Button uiType={'secondary-3rd'} buttonSize={'large'}>버튼</Button>
        <Button uiType={'secondary-3rd'} buttonSize={'medium'}>버튼</Button>
        <Button uiType={'secondary-3rd'} buttonSize={'medium02'}>버튼</Button>
        <Button uiType={'secondary-3rd'} buttonSize={'small'}>버튼</Button>
        <Button uiType={'secondary-3rd'} buttonSize={'x-small'}>버튼</Button>

        <br />

        <Button uiType={'secondary-4th'} buttonSize={'x-large'}>버튼</Button>
        <Button uiType={'secondary-4th'} buttonSize={'large'}>버튼</Button>
        <Button uiType={'secondary-4th'} buttonSize={'medium'}>버튼</Button>
        <Button uiType={'secondary-4th'} buttonSize={'medium02'}>버튼</Button>
        <Button uiType={'secondary-4th'} buttonSize={'small'}>버튼</Button>
        <Button uiType={'secondary-4th'} buttonSize={'x-small'}>버튼</Button>

        <br />
        <InputBase
          id={'inputForm01'}
          isLabel={true}
          labelText={'이름'}
          placeholder={'이름을 입력해 주세요.'}
        />
        <InputBase
          id={'inputFormError'}
          isLabel={true}
          labelText={'그룹코드'}
          placeholder={'그룹코드를 입력해 주세요.'}
          value={'0000'}
          error={true}
          message={'존재하지 않는 그룹코드 입니다.'}
        />
        <InputBase
          id={'inputFormPassword'}
          type={'password'}
          isLabel={true}
          labelText={'패스워드 입력'}
          placeholder={'패스워드를 입력해 주세요.'}
          spacing={'20'}
        />
        <InputBase
          id={'inputForm02'}
          disabled={true}
          isLabel={true}
          labelText={'Disabled'}
          value={'디스에이블드입니다.'}
          spacing={'20'}
        />
        <InputBase
          id={'inputForm03'}
          readonly={true}
          isLabel={true}
          labelText={'Readonly'}
          value={'리드온리입니다'}
          spacing={'20'}
        />
        </div>
        <div className='sticky-button'>
          <div className="button-group">
            
          </div>
        </div>
      </div>
    </PageLayout>
  
  );
}

export default Guide;
