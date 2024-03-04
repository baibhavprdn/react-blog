import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Create from "../screens/newBlog";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/create',
    element: <Create />
  }
])

export default router;