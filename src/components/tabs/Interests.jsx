export default function Interests({ data, setData,error }) {
 // const OPTIONS = ["java", "JavaScript", "Python"];

  const selected = data.interests;

  function handleChange(e) {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]:
        prev.interests.filter((item) => item !== e.target.name)
    }));
  }
   console.log(data)
  return (
    <div>
      <h3>Select Interests</h3>

    <div>
          <input
            type="checkbox"
            name="Java" 
            checked={selected.includes("Java")}
            onChange={handleChange}
          />
          <label>java</label>
            <input
            type="checkbox"
            name="JavaScript" 
            checked={selected.includes("JavaScript")}
            onChange={handleChange}
          />
          <label>JavaScript</label>
            <input
            type="checkbox"
            name="Python" 
            checked={selected.includes("Python")}
            onChange={handleChange}
          />
          <label>Python</label>
        </div>
        {error.interests &&<span>{error.interests}</span>}

    </div>
  );
}
