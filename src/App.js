import './App.css';
import './styles/scss/main.scss';
import { Routes, Route, NavLink } from "react-router-dom";
import { Guide, Sample01 } from './templates/'

function App() {
    return (
    <>
      <div className="temp-list">
        <NavLink to="/guide">Guide</NavLink>
        <NavLink to="/sample01">Sample01</NavLink>
      </div>
      <Routes>
        <Route path="/guide" element={<Guide />} />
        <Route path="/sample01" element={<Sample01 />} />
      </Routes>
    </>
    );
}

export default App;
