const Input = ({ type = 'text', label, name, value, onChange, options, ...props }) => {
  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '2px solid #e1e5e9',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.2s',
    outline: 'none'
  }
  
  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#333'
  }
  
  const containerStyle = {
    marginBottom: '20px'
  }
  
  if (type === 'radio') {
    return (
      <div style={containerStyle}>
        <label style={labelStyle}>{label}</label>
        <div style={{ display: 'flex', gap: '15px' }}>
          {options.map(opt => (
            <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              <input type="radio" name={name} value={opt.value} checked={value === opt.value} onChange={onChange} />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
    )
  }
  
  if (type === 'checkbox') {
    return (
      <div style={containerStyle}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input type="checkbox" name={name} checked={value} onChange={onChange} {...props} />
          {label}
        </label>
      </div>
    )
  }
  
  if (type === 'textarea') {
    return (
      <div style={containerStyle}>
        <label style={labelStyle}>{label}</label>
        <textarea name={name} value={value} onChange={onChange} style={{...inputStyle, minHeight: '100px', resize: 'vertical'}} {...props} />
      </div>
    )
  }
  
  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} style={inputStyle} {...props} />
    </div>
  )
}

export default Input