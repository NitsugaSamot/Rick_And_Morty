import {useState, useEffect} from 'react'
import validate from './validation.js'
import { useNavigate } from 'react-router-dom'
import './form.css'
import imagePortada from './image.png'

const Form = () => {

const [userData, setUserData] = useState({
    email: '',
    password: ''
})

const [errors, setErrors] = useState({})
const [access, setAccess] = useState(false)

const clearErrors = () => {
  setTimeout(() => {
    setErrors({});
  }, 3000)
}


const username = 'tomas@tomas.com'
const password = 'cielo123'
const navigate = useNavigate();

useEffect(() => {
  if (!access) {
    navigate('/');
  }
}, [access, navigate]);


const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]:event.target.value,
    })
}
const login = (userData) => {
  if (userData.email === username && userData.password === password) {
    setAccess(true);
    navigate('/home');
  }
}

const handleOnSubmit = (event) => {
  event.preventDefault();

  const validationErrors = validate(userData);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    login(userData);
  }

  clearErrors()
}


  return (
    <div className="container-form">
      <div className="container-image">
        <img className='imagenPortada' src={imagePortada} alt="" />
      </div>
      <form className='formulario' onSubmit={handleOnSubmit}>
        <label htmlFor='email'>Email</label>
        <input className='input' name='email' type='email' placeholder='tomas@tomas.com' value={userData.email} onChange={handleChange}/>
        {errors.email && <div className="error">{errors.email}</div>}
        <label htmlFor="password">Password</label>
        <input className='input' name='password' type="password" placeholder='cielo123' value={userData.password} onChange={handleChange}/>
        {errors.password && <div className="error">{errors.password}</div>}
        <button type='submit'>Submit</button>

    </form>      
    </div>

  )
}

export default Form