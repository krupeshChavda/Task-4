import { useState } from 'react'
import Input from './SharedInput'

const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false,
    contact: 'email'
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '500px'
      }}>
        
        <form>
          <Input label="Name" name="name" value={data.name} onChange={handleChange} />
          <Input label="Email" type="email" name="email" value={data.email} onChange={handleChange} />
          <Input label="Message" type="textarea" name="message" value={data.message} onChange={handleChange} />
          <Input 
            label="Contact Method" 
            type="radio" 
            name="contact" 
            value={data.contact} 
            onChange={handleChange}
            options={[{value: 'email', label: 'Email'}, {value: 'phone', label: 'Phone'}]}
          />
          <Input label="Subscribe to newsletter" type="checkbox" name="subscribe" value={data.subscribe} onChange={handleChange} />
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '20px'
          }}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form