import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FavoritesContext from '../store/favorites-context'

const links = [
  {
    name: 'Meetups',
    path: '/',
  },
  {
    name: 'new Meetup',
    path: '/new-meetup',
  },
  {
    name: 'Favorite Meetups',
    path: '/favorite-meetups',
  },
]

const NavBar = () => {
  const favoriteCtx = useContext(FavoritesContext)
  const pathname = useLocation().pathname
  return (
    <ul className="flex items-center gap-4">
      {links.map((link, index) => {
        return (
          <li
            key={index}
            className={`${link.path === pathname ? 'bg-background/60 font-bold text-primary' : ''} rounded-md px-[16px] py-2 text-lg font-medium transition-all duration-500 hover:bg-background/70 hover:text-primary-hover`}
          >
            <Link to={link.path} className="text-sm lg:text-lg">
              {link.name === 'Favorite Meetups' ? (
                <div>
                  {' '}
                  {link.name} <span className='w-5 h-4 rounded-md bg-primary text-white px-2 py-1'>{favoriteCtx.totalFavorites}</span>
                </div>
              ) : (
                <div>{link.name}</div>
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavBar
