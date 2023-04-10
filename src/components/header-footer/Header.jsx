import './Styles.css'
import iconGithub from './img/icon-github.png'
import iconLinkedin from './img/icon-linkedin.png'
import iconPortafolio from './img/icon-portfolio.png'


const Header = () => {
  return (
    <div className="container">
       <div className="logo">
       </div>

       <nav className="navegacion">
         <a href="https://github.com/NitsugaSamot"target="_blank" className="enlace">
              <img className='iconoNav' src={iconGithub} alt="" />
         </a>

         <a href="https://www.linkedin.com/in/tomydeveloper/" target="_blank" className="enlace">
              <img className='iconoNav' src={iconLinkedin} alt="" />
         </a>

         <a href="https://portafolio-tomas-lona.netlify.app/" target="_blank" className="enlace">
              <img className='iconoNav' src={iconPortafolio} alt="" />
         </a>
         
       </nav>
      
    </div>
  )
}

export default Header