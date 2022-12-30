import '../Layout/layout.scss'
import Sidebar from '../Sidebar/index'
import Navbar from '../Navbar/index'

interface Props {
  children: any
}


const Layout = ({ children }: Props) => {
  return (
    <div className='layout__wrapper'>
      <Navbar />
      <Sidebar />
      <div className='children__display'>
      {children}
      </div>
    </div>
  )
}

export default Layout