import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto xl:w-4/5 py-10 px-2 md:px-0">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
