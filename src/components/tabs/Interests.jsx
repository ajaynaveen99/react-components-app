import React from "react";

export default function Interests({ data, setData }) {
  const interests = data.interests;

  function handleChange(value) {
    setData((prev) => {
      if (prev.interests.includes(value)) {
        // remove interest
        return {
          ...prev,
          interests: prev.interests.filter((item) => item !== value),
        };
      } else {
        // add interest
        return {
          ...prev,
          interests: [...prev.interests, value],
        };
      }
    });
  }

  return (
    <div>
      <h3>Select Interests</h3>

      {interests.map((interest, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={interest}
            checked={interests.includes(interest)}
            onChange={() => handleChange(interest)}
          />
          <label>{interest}</label>
        </div>
      ))}
    </div>
  );
}
