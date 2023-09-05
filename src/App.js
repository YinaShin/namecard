import './App.css';
import './styles/scss/main.scss';
import PageLayout from './layouts/PageLayout';
import Header from './layouts/Header';
import { Button } from './components';

function App() {
    return (
    <PageLayout>
      <Header menu={true}>
        헤더입니다
      </Header>
      <Button>나는버튼임</Button>
    </PageLayout>
    );
}

export default App;
