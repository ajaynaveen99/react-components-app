import Accordion from "./components/accordion/Accordion.jsx";
import AccordionApp from "./components/accordion/cmp-example-two/Accordion.jsx";
import { Routes, Route, Link } from "react-router-dom";
import data from "./data";
import "./index.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Accordion Example-one</Link>
          </li>
          <li>
            <Link to="/example-two">Accordion Example-two</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Accordion items={data} />} />
        <Route path="/example-two" element={<AccordionApp />} />
      </Routes>
    </>
  );
}

export default App;
