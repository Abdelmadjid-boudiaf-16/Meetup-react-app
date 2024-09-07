import { useEffect, useState } from 'react'
import MeetupItem from '../components/MeetupItem'
import axios from 'axios'
import IsLoading from './IsLoading'

const Meetups = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    setIsLoading(true)
    async function getData() {
      try {
        // Make a GET request to Firebase Realtime Database
        const response = await axios.get(
          `${import.meta.env.VITE_FIREBASE_URL}/meetups.json`
        )

        // `axios` automatically parses JSON, so just use `response.data`
        const data = response.data

        const meetups = []

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }

          meetups.push(meetup)
        }
        setIsLoading(false)
        setData(meetups)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getData()
  }, [])


  if(isLoading) return <IsLoading />

  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-center text-4xl font-bold text-primary md:text-left">
        All Meetups
      </h1>
      <div className="border border-background" />
      <div className="w-full">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <MeetupItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Meetups
