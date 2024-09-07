import { useContext } from 'react'
import MeetupItem from '../components/MeetupItem'
import FavoritesContext from '../store/favorites-context'

const FavoriteMeetups = () => {
  const favorites = useContext(FavoritesContext)

  
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-center text-4xl font-bold text-primary md:text-left">
        Favorites Meetups
      </h1>
      <div className="border border-background" />
      <div className="w-full">
      {favorites.totalFavorites ? <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {favorites.favorites.map((item) => (
          <MeetupItem item={item} key={item.id} />
        ))}
      </ul> : <p className='text-secondary-text font-medium text-sm'>There is no favorite Meetups, start to add some :)</p>}
      </div>
    </section>
  )
}

export default FavoriteMeetups
