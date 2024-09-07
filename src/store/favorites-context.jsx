import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFaMeetup: (faMeetup) => {},
  removeFaMeetup: (faMeetupId) => {},
  meetupIsFa: (faMeetupId) => {},
})

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([])

  const handleAddFavoriteMeetup = (faMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(faMeetup)
    })
  }
  const handleRemoveFavoriteMeetup = (faMeetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((faMeetup) => faMeetup.id !== faMeetupId)
    })
  }

  const handleMeetupIsFa = (faMeetupId) => {
    return userFavorites.some((faMeetup) => faMeetup.id === faMeetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFaMeetup: handleAddFavoriteMeetup,
    removeFaMeetup: handleRemoveFavoriteMeetup,
    meetupIsFa: handleMeetupIsFa,
  }

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
