import { FaMapMarkedAlt } from 'react-icons/fa'
import Button from './Button'
import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'

const MeetupItem = ({ item }) => {
  const { id, name, address, description, imageUrl } = item
  const faCtx = useContext(FavoritesContext)

  const meetupIsFa = faCtx.meetupIsFa(id)

  const handleToggleFavoriteStatus = () => {
    if (meetupIsFa) {
      return faCtx.removeFaMeetup(id)
    }
    faCtx.addFaMeetup(item)
  }
  return (
    <div className="group flex min-h-[340px] flex-col gap-4 rounded-md bg-background/30 p-2 shadow-lg">
      <div className="h-200px w-full">
        <img
          src={imageUrl}
          alt="meetup location"
          className="h-full w-full object-cover"
        />{' '}
      </div>
      <div className="flex flex-1 flex-col items-center justify-between gap-3 md:items-start">
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-2xl font-bold transition-colors duration-500 group-hover:text-primary text-center md:text-left">
            {name}
          </h2>
          <div className="flex w-full items-center justify-center gap-2 md:justify-between">
            <span className="text-lg font-medium text-secondary-text">
              {address}
            </span>
            <span>
              <FaMapMarkedAlt className="text-xl text-secondary-text" />
            </span>
          </div>
          <p className="text-center text-secondary-text/60 md:text-left">
            {description}
          </p>
        </div>
        <Button onClick={handleToggleFavoriteStatus}>
          {!meetupIsFa ? 'Add To Favorite' : 'Remove From Favorite'}
        </Button>
      </div>
    </div>
  )
}

export default MeetupItem
