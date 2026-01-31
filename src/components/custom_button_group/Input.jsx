export default function Input(props) {
  const { value, onChange, placeholder, type = "text" } = props;

  return (
    <><div className="input-box">
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="custom-input"
    /></div></>
  );
}
