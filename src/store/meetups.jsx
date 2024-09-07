import { createContext, useState } from 'react'

const MeetupsContext = createContext({
  meetupsData: [],
  addNewMeetup: (meetupData) => {},
})

export const MeetupsProvider = ({ children }) => {
  const [meetups, setMeetups] = useState([])

  const handleAddNewMeetup = (meetupData) => {
    setMeetups((prevMeetups) => {
      return prevMeetups.concat(meetupData)
    })
  }
  const context = {
    meetupsData: meetups,
    addNewMeetup: handleAddNewMeetup,
  }

  return (
    <MeetupsContext.Provider value={context}>
      {children}
    </MeetupsContext.Provider>
  )
}

export default MeetupsContext
