import Home from "./components/home//Home.jsx";
import Accordion from "./components/accordion/Accordion.jsx";
import AccordionApp from "./components/accordion/cmp-example-two/Accordion.jsx";
import ButtonGroup from "./components/custom_button_group/ButtonGroup.jsx";
import Paginate from "./components/paginator/Paginate.jsx";
import { Routes, Route, Link } from "react-router-dom";
import ProgressBarsDemo from "./components/ProgressBars/Progress.jsx";
import ProgressBar from "./components/ProgressBars/ProgressBar"
import CheckBox from "./components/checkbox/CheckBox.jsx";
import ChildCheckbox from "./components/checkbox/checkboxDemo/ChildCheckbox.jsx";
import RadioButtons from "./components/radioGroup/RadioButtons.jsx";
import Dropdown from "./components/dropdown/Dropdown.jsx";
import data from "./data";
import "./index.css";

function App() {
  return (
    <>
      <hr />
      <div className="components-app"><h3>Choose Your Component</h3></div>

      <nav className="nav-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>
          <li>
            <Link to="/button-group">Button Group</Link>
          </li>
          <li>
            <Link to="/paginator">Paginator</Link>
          </li>
          <li>
            <Link to="/bar">ProgressBar</Link>
          </li>
         <li><Link to="/child-checkbox">Checkbox</Link></li>
          <li><Link to="/radio">RadioButtons</Link></li>
          <li><Link to="/dropdown">Dropdown</Link></li>

        </ul>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion items={data} />} />
        <Route path="/example-two" element={<AccordionApp />} />
        <Route path="/button-group" element={<ButtonGroup />} />
        <Route path="/paginator" element={<Paginate />} />
        <Route path="/progress-bar" element={<ProgressBarsDemo />} />
        <Route path="bar" element={<ProgressBar />} />
        <Route path="/checkbox" element={<CheckBox />} />
        <Route path="/child-checkbox" element={<ChildCheckbox />} />
        <Route path="/radio" element={<> <RadioButtons /> </>} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
    </>
  );
}

export default App;
