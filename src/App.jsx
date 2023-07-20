import './App.scss';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import ShoppingPage from './components/ShoppingPage';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<HomePage/>}/>
        <Route path='/shop' element={<ShoppingPage/>}/>
      </Route>
    )
  )

  return (
    <>
    <main>
      <RouterProvider router={router}/>
    </main>
    </>
  )
}

const Root = () => {
  return (
  <>
    <Navigation />
    <Outlet/>
  </>
  )
}

