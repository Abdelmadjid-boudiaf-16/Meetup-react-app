import { useRef } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const NewMeetup = () => {
  const VITE_FIREBASE_URL = process.env.VITE_FIREBASE_URL

  const meetupNameRef = useRef()
  const meetupAddressRef = useRef()
  const meetupImageUrlRef = useRef()

  const meetupDescriptionRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const enteredMeetupName = meetupNameRef.current.value
    const enteredMeetupAddress = meetupAddressRef.current.value
    const enteredMeetupImageUrl = meetupImageUrlRef.current.value
    const enteredMeetupDescription = meetupDescriptionRef.current.value

    const meetupData = {
      name: enteredMeetupName,
      address: enteredMeetupAddress,
      imageUrl: enteredMeetupImageUrl,
      description: enteredMeetupDescription,
    }
    try {
      await axios.post(
        `${VITE_FIREBASE_URL}/meetups.json`,
        {
          meetupData,
        }
      )
      console.log('Data posted successfully')
    } catch (error) {
      console.error('Error posting data', error)
    } finally {
      navigate('/')
    }
  }
  return (
    <div className="w-full rounded-lg bg-gradient-to-tr from-red-100 via-purple-100 to-blue-200 p-4 shadow-lg">
      <div className="mx-auto flex w-3/4 flex-col items-center gap-8 md:items-start">
        <h1 className="text-2xl font-bold text-primary">Add New Meetup </h1>
        <div className="w-full border border-primary" />

        <form
          className="flex w-full flex-col items-start justify-center gap-8"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col gap-3">
            <label
              htmlFor="title"
              className="font-semibold capitalize text-secondary-text"
            >
              Meetup Name
            </label>
            <input
              type="text"
              id="title"
              placeholder="Meetup Name"
              className="h-[38px] rounded-md p-4 outline-none placeholder:text-secondary-text/60 focus:ring-1 focus:ring-primary focus:ring-offset-0"
              ref={meetupNameRef}
              required
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <label
              htmlFor="image"
              className="font-semibold capitalize text-secondary-text"
            >
              Meetup Image URL
            </label>
            <input
              type="url"
              id="image"
              placeholder="Meetup Image URL"
              className="h-[38px] rounded-md p-4 outline-none placeholder:text-secondary-text/60 focus:ring-1 focus:ring-primary focus:ring-offset-0"
              ref={meetupImageUrlRef}
              required
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <label
              htmlFor="address"
              className="font-semibold capitalize text-secondary-text"
            >
              Meetup address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Meetup Address"
              className="h-[38px] rounded-md p-4 outline-none placeholder:text-secondary-text/60 focus:ring-1 focus:ring-primary focus:ring-offset-0"
              required
              ref={meetupAddressRef}
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <label
              htmlFor="description"
              className="font-semibold capitalize text-secondary-text"
            >
              Meetup description
            </label>
            <textarea
              id="description"
              placeholder="leave your description here"
              className="h-[160px] rounded-md p-4 outline-none placeholder:text-secondary-text/60 focus:ring-1 focus:ring-primary focus:ring-offset-0"
              ref={meetupDescriptionRef}
              required
            />
          </div>
          <div>
            <Button>Add Meetup</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewMeetup
