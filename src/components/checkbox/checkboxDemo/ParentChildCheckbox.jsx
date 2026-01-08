import { useState } from "react";
import "./ParentChildCheckbox.css";

export default function ParentChildCheckbox(props) {
  const { parentLabel, childrenOptions } = props;

  const [selected, setSelected] = useState([]);

  const isAllSelected = selected.length === childrenOptions.length;

  // Parent checkbox change
  const handleParentChange = () => {
    if (isAllSelected) {
      setSelected([]);
    } else {
      setSelected(childrenOptions);
    }
  };

  // Child checkbox change
  const handleChildChange = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="pc-wrapper">
      {/* Parent Checkbox */}
      <label className="pc-parent">
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={handleParentChange}
        />
        {parentLabel}
      </label>

      {/* Child Checkboxes */}
      <div className="pc-children">
        {childrenOptions.map((item, index) => (
          <label key={index} className="pc-child">
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => handleChildChange(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}
