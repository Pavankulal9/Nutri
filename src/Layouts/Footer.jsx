import logo from '../assets/nutri_logo.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <img src={logo} alt="logo" />
        <h2>Nutri</h2>
      </div>
      <span>&copy; Copyright, Nutri</span>
    </div>
  )
}

export default Footer
