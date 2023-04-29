import SearchBar from './SearchBar';
import { Link, useLocation,  useNavigate } from 'react-router-dom';
import './stylesNav.css'

const Nav = ({ onSearch, setAccess}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
      navigate('/');
      
    };
    
    return (
      <nav>

        {location.pathname !== "/" && (
          <>
            
  
            <div className="navInterna">

          
                  <button className='btnNav'>
                    <Link className='link' to='/about' >About</Link>
                  </button>
        
                  <button className='btnNav'>
                    <Link className='link' to='/home' >Home</Link>
                  </button>

                  <button className='btnNav'>
                    <Link className='link' to='/favorites' >Favorites</Link>
                  </button>

  
                  <div className="searchBar">
                      <SearchBar className='search'  onSearch={onSearch} />
                  </div>

                 
                 
                  <button className='btnNav' onClick={handleLogout}>
                      Log out
                  </button>

            </div>

          </>
        )}
      </nav>
    );
  };
  

export default Nav;