import React from "react";

export default function Message({ data, setData }) {
  const levelOptions = data.level;
  const selectedLevel = data.selectedLevel || "";

  function handleChange(e) {
    setData((prev) => ({
      ...prev,
      selectedLevel: e.target.value
    }));
  }

  console.log(data);

  return (
    <div>
      {levelOptions.map((status, index) => (
        <div key={index}>
          <input
            type="radio"
            name="level"
            value={status}
            checked={selectedLevel === status}
            onChange={handleChange}
          />
          <label>{status}</label>
        </div>
      ))}
    </div>
  );
}
