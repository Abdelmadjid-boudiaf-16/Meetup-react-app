import { FaMapMarkedAlt } from 'react-icons/fa'
import Button from './Button'
import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'

const MeetupItem = ({ item }) => {
  const faCtx = useContext(FavoritesContext)

  const meetupIsFa = faCtx.meetupIsFa(item.id)

  const handleToggleFavoriteStatus = () => {
    if (meetupIsFa) {
      return faCtx.removeFaMeetup(item.id)
    }
    faCtx.addFaMeetup(item)
  }
  return (
    <div
      key={item.id}
      className="group flex min-h-[340px] flex-col justify-between gap-4 rounded-md bg-background/30 p-2 shadow-lg"
    >
      <div className="h-2/3 w-full">
        <img
          src={item.imageUrl}
          alt="meetup location"
          className="h-full w-full object-cover"
        />{' '}
      </div>
      <div className="flex flex-col items-center gap-3 md:items-start">
        <h2 className="text-2xl font-bold transition-colors duration-500 group-hover:text-primary">
          {item.title}
        </h2>
        <div className="flex w-full items-center justify-center gap-2 md:justify-between">
          <span className="text-lg font-medium text-secondary-text">
            {item.address}
          </span>
          <span>
            <FaMapMarkedAlt className="text-xl text-secondary-text" />
          </span>
        </div>
        <p className="text-center text-secondary-text/60 md:text-left">
          {item.description}
        </p>
        <Button onClick={handleToggleFavoriteStatus}>{!meetupIsFa ? 'Add To Favorite': 'Remove From Favorite'}</Button>
      </div>
    </div>
  )
}

export default MeetupItem
