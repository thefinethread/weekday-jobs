const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      type='text'
      className='input'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextInput;
