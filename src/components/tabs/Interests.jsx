export default function Interests({ data, setData }) {
  const OPTIONS = ["java", "JavaScript", "Python"];

  const selected = data.interests || [];

  function handleChange(value) {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((item) => item !== value)
        : [...prev.interests, value],
    }));
  }

  return (
    <div>
      <h3>Select Interests</h3>

      {OPTIONS.map((interest, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={interest}
            checked={selected.includes(interest)}
            onChange={() => handleChange(interest)}
          />
          <label>{interest}</label>
        </div>
      ))}
    </div>
  );
}
