export const InputField = ({name, onChange, value, placeholder, className}) => {
  const onInputChange = (e) => {
    onChange({[name]: e.target.value})
  }
  return (
    <input type="text"
           name={name}
           className={className}
           value={value}
           onChange={onInputChange}
           placeholder={placeholder}/>
  )
}

export const RadioField = ({name, onChange, value, checked}) => {
  const onInputChange = (e) => {
    onChange({[name]: e.target.value})
  }
  return (
    <input type="radio"
           name={name}
           className='form-control'
           value={value}
           onChange={onInputChange}
           checked={checked}
           />
  )
}