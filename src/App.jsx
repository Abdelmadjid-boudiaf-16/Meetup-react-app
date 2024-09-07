import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Meetups from './pages/Meetups'
import NewMeetup from './pages/NewMeetup'
import FavoriteMeetups from './pages/FavoriteMeetups'
import Layout from './Layout'
import Error from './pages/Error'
import { MeetupsProvider } from './store/meetups'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <MeetupsProvider>
            <Meetups />
          </MeetupsProvider>
        ),
      },
      {
        path: '/new-meetup',
        element: (
          <MeetupsProvider>
            <NewMeetup />
          </MeetupsProvider>
        ),
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
