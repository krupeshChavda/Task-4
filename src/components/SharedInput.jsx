const Input = ({ type = 'text', label, name, value, onChange, options, ...props }) => {
  const inputStyle = {
    width: '100%',
    padding: 'clamp(0.75rem, 2vw, 1rem)',
    border: '2px solid #444',
    borderRadius: '8px',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none',
    color: '#fff',
    background: '#2a2a2a'
  }
  
  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#e0e0e0',
    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
  }
  
  const containerStyle = {
    marginBottom: 'clamp(1rem, 3vw, 1.25rem)'
  }
  
  if (type === 'radio') {
    return (
      <div style={containerStyle}>
        <label style={labelStyle}>{label}</label>
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(0.75rem, 3vw, 1rem)',
          flexWrap: 'wrap'
        }}>
          {options.map(opt => (
            <label key={opt.value} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              cursor: 'pointer',
              color: '#e0e0e0',
              fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
            }}>
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
        <label style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          cursor: 'pointer',
          color: '#e0e0e0',
          fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
          fontWeight: '600'
        }}>
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
        <textarea 
          name={name} 
          value={value} 
          onChange={onChange} 
          style={{
            ...inputStyle, 
            minHeight: 'clamp(80px, 15vw, 120px)', 
            resize: 'vertical',
            fontFamily: 'inherit'
          }} 
          {...props} 
        />
      </div>
    )
  }
  
  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        style={{
          ...inputStyle,
          ':focus': {
            borderColor: '#2a5298',
            boxShadow: '0 0 0 3px rgba(42, 82, 152, 0.1)'
          }
        }} 
        onFocus={(e) => {
          e.target.style.borderColor = '#11998e'
          e.target.style.boxShadow = '0 0 0 3px rgba(17, 153, 142, 0.2)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#444'
          e.target.style.boxShadow = 'none'
        }}
        {...props} 
      />
    </div>
  )
}

export default Input