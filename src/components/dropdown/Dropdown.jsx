import SimpleDropdown from "./SimpleDropdown.jsx";
import { useState } from "react";
import "./Dropdown.css";


export default function App() {
    const [open, setOpen] = useState(false);
    const [label, setLabel] = useState("Dropdown button");
    const menuItems = ["Action", "Another action", "Something else here", "Separated link"];
    return (
        <div className="dropdown-container">
            <SimpleDropdown
                label={label}
                setLabel={setLabel}
                items={menuItems}
                isOpen={open}
                onClick={() => setOpen(!open)}
            />
        </div>
    );
}
