import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Meetups from './pages/Meetups'
import NewMeetup from './pages/NewMeetup'
import FavoriteMeetups from './pages/FavoriteMeetups'
import Layout from './Layout'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Meetups />,
      },
      {
        path: '/new-meetup',
        element: <NewMeetup />,
      },
      {
        path: 'favorite-meetups',
        element: <FavoriteMeetups />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
