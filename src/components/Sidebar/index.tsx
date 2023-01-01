import CaretDownIcon from 'components/Icons/CaretDownIcon'
import Suitcase from 'components/Icons/Suitcase'
import { navLinks } from 'utils/data'
import '../Sidebar/sidebar.scss'

interface Props {
  isNavOpen: boolean
}

const index = ({ isNavOpen }: Props) => {
  const renderDashboard = navLinks.filter((val => val.category.includes('dashboard'))).map((navlink, i) => (
    <a href={navlink.href} className='navlinks' key={i}>
      <img src={navlink.icon} alt={`${navlink.title}_icon_group`} />
      <p>{navlink.title}</p>
    </a>
  ))

  const renderCustomersNav = navLinks.filter((val => val.category.includes('customer'))).map((navlink, i) => (
    <a href={navlink.href} className='navlinks' key={i}>
      <img src={navlink.icon} alt={`${navlink.title}_icon_group`} />
      <p>{navlink.title}</p>
    </a>
  ))

  const renderBusinessNav = navLinks.filter((val => val.category.includes('business'))).map((navlink, i) => (
    <a href={navlink.href} className='navlinks' key={i}>
      <img src={navlink.icon} alt={`${navlink.title}_icon_group`} />
      <p>{navlink.title}</p>
    </a>
  ))

  const renderSettingsNav = navLinks.filter((val => val.category.includes('settings'))).map((navlink, i) => (
    <a href={navlink.href} className='navlinks' key={i}>
      <img src={navlink.icon} alt={`${navlink.title}_icon_group`} />
      <p>{navlink.title}</p>
    </a>
  ))



  return (
    <>
      {isNavOpen && <section className='sidebar__wrapper'>
        <div className='sidebar__content'>
          <div className='switch_org_toggle'>
            <Suitcase />
            Switch Organization
            <CaretDownIcon />
          </div>

          <h1 className='section__header'>&nbsp;</h1>
          {renderDashboard}

          <h1 className='section__header'>Customers</h1>
          {renderCustomersNav}

          <h1 className='section__header'>Businesses</h1>
          {renderBusinessNav}

          <h1 className='section__header'>Settings</h1>
          {renderSettingsNav}

        </div>
      </section>}
    </>
  )
}

export default index