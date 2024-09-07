// import { useEffect, useState } from 'react'
import { useContext } from 'react'
import MeetupItem from '../components/MeetupItem'
// import axios from 'axios'
// import IsLoading from './IsLoading'

import MeetupsContext from '../store/meetups'
import { Link } from 'react-router-dom'
// const data = [
//   {
//     id: '01',
//     name: 'city name',
//     address: 'city address',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo voluptatum quae fugiat voluptate laboriosam obcaecati iste tempora, nemo quis non, ex nam molestiae quisquam molestias nisi ducimus at distinctio!',
//     imageUrl:
//       'https://elwatan-dz.com/storage/6127/EAp3MmTkFBVPMeBiwnP3ZjwMgUhxjeCkXCHT98YN.jpeg',
//   },
//   {
//     id: '02',
//     name: 'city name',
//     address: 'city address',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo voluptatum quae fugiat voluptate laboriosam obcaecati iste tempora, nemo quis non, ex nam molestiae quisquam molestias nisi ducimus at distinctio!',
//     imageUrl:
//       'https://elwatan-dz.com/storage/6127/EAp3MmTkFBVPMeBiwnP3ZjwMgUhxjeCkXCHT98YN.jpeg',
//   },
//   {
//     id: '02',
//     name: 'city name',
//     address: 'city address',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo voluptatum quae fugiat voluptate laboriosam obcaecati iste tempora, nemo quis non, ex nam molestiae quisquam molestias nisi ducimus at distinctio!',
//     imageUrl:
//       'https://elwatan-dz.com/storage/6127/EAp3MmTkFBVPMeBiwnP3ZjwMgUhxjeCkXCHT98YN.jpeg',
//   },
// ]

const Meetups = () => {

  // const [isLoading, setIsLoading] = useState(true)
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   setIsLoading(true)

  //   async function getData() {
  //     try {
  //       // Make a GET request to Firebase Realtime Database
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_FIREBASE_URL}/meetups.json`
  //       )

  //       // `axios` automatically parses JSON, so just use `response.data`
  //       const data = response.data

  //       const meetups = []

  //       for (const key in data) {
  //         const meetup = {
  //           id: key,
  //           ...data[key],
  //         }

  //         meetups.push(meetup)
  //       }
  //       setIsLoading(false)
  //       setData(meetups)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   getData()
  // }, [])

  // if(isLoading) return <IsLoading />

  const meetupsCtx = useContext(MeetupsContext)
  const meetups = meetupsCtx.meetupsData



  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-center text-4xl font-bold text-primary md:text-left">
        All Meetups
      </h1>
      <div className="border border-background" />
      <div className="w-full">
        {meetups.length ? (
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meetups.map((item) => (
              <MeetupItem item={item} key={item.id} />
            ))}
          </ul>
        ) : (
          <div className='flex flex-col gap-10'>
              <p className='text-sm text-secondary-text'>No Meetups please start to Add some!</p>
              <Link to='/new-meetup'  className='text-xl  text-primary hover:text-primary-hover hover:border-b hover:border-primary-hover transition-all w-fit'>Add NewMeetup</Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Meetups
