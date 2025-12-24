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
      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        background: 'rgba(30, 30, 30, 0.95)',
        borderRadius: '16px',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '500px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
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
            padding: 'clamp(0.75rem, 2vw, 1rem)',
            background: 'linear-gradient(135deg, #11998e, #38ef7d)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '1.5rem',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }} onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 8px 25px rgba(17, 153, 142, 0.4)'
          }} onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form