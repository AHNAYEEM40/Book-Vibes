import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import ListedBooks from './Component/Listed Books/ListedBooks';
import PagesToRead from './Component/Book/Pages to Read/PagesToRead';
import ShowDetails from './Component/ShowDetails/ShowDetails';
import About from './Component/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/listed',
        element:<ListedBooks></ListedBooks>,
        loader:() =>fetch('../FakeData.json')
      },
      {
       path:'/About',
       element:<About></About>
      },
      {
        path:'/read to book',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/BookList/:id',
        element:<ShowDetails></ShowDetails>,
        loader:() =>fetch('../FakeData.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
