import SimpleDropdown from "./SimpleDropdown.jsx";
import {useState } from "react";
import "./Dropdown.css";


export default function App() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    "Action",
    "Another action",
    "Something else here",
  ];
 

  return (
    <div style={{ padding: "40px" }}>
      <SimpleDropdown
        label="Dropdown button"
        items={menuItems}
        isOpen={open}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}
