import '../Layout/layout.scss'
import Sidebar from '../Sidebar/index'
import Navbar from '../Navbar/index'
import { useState, useEffect } from 'react'

interface Props {
  children: any
}


const Layout = ({ children }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleResize = () => {
    window.innerWidth < 1024 ? setIsNavOpen(false) : setIsNavOpen(true)
  }

  useEffect(() => {
    window.innerWidth > 1024 &&  setIsNavOpen(true)
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className='layout__wrapper'>
      <Navbar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen}/>
      <Sidebar isNavOpen={isNavOpen}/>
      <div className='children__display'>
      {children}
      </div>
    </div>
  )
}

export default Layout