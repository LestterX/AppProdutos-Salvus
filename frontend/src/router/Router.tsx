import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '../App'

const router = createBrowserRouter([
    {
        path: '*',
        element: <div>Error 403: Não autorizado</div>
    },
    {
        path: '/',
        element: <App />
    }
])

export default function Router() {
    return <RouterProvider router={router} />
  }