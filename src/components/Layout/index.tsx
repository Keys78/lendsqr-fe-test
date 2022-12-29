import '../Layout/layout.scss'
import Sidebar from '../Sidebar/index'
import Navbar from '../Navbar/index'

interface Props {
    children: any
}


const Layout = ({ children }: Props) => {
  return (
    <div className='layout-wrapper'>
      <Navbar />
        <Sidebar />
        {children}
    </div>
  )
}

export default Layout