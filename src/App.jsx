import styles from './App.module.scss';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Home from './containers/Home'; 
import ContactPage from './containers/ContactPage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/portfolio" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    )
  )

  return (
    <>
    <main className={styles.App}>
      <RouterProvider router={router} />
    </main>
    </>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
