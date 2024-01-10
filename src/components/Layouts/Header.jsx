import { useNavigate } from 'react-router-dom'
import logo from '../../assets/nutri_logo.png'
const Header = () => {
  const navigate = useNavigate();
  return (
    <nav  className='header'>
      <div>
        <img src={logo} alt="logo" />
        <h2>Nutri</h2>
      </div>
      <div>
        <button onClick={()=> navigate('/savedItems')}>Saved Items</button>
        <button onClick={()=> navigate('/myDishes')}>My Dishes</button>
      </div>
    </nav>
  )
}

export default Header
