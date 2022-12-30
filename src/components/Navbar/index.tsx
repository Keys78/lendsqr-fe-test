import BellIcon from 'components/Icons/BellIcon'
import CaretDownIcon from 'components/Icons/CaretDownIcon'
import LogoIcon from 'components/Icons/LogoIcon'
import Searchbar from 'components/Shared/Searchbar/Index'

import '../Navbar/navbar.scss'
const index = () => {
  return (
      <nav className='nav__wrapper'>
        <div className='logo_wrapper'>
          <LogoIcon />
        </div>
        <div className='interactive__board'>
          <div>
            <Searchbar />
          </div>
          <div className='interactive__board__content'>
            <div><a href="#">Docs</a></div>
            <BellIcon />
            <div className='user__actions'>
              <img src={'./images/user.png'} alt="user__icon" />
              <h2>{'Emmanuel'}</h2>
              <CaretDownIcon />
            </div>
          </div>
        </div>
      </nav>
  )
}

export default index