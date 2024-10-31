import Header from "./Components/Header";
import HomePage from "./pages/HomePage";
import SingleCountryPage from "./pages/SingleCountryPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path=':country' element={<SingleCountryPage />} />
      <Route
        path='*'
        element={
          <div className='absolute text-center'>
            <h3>No country to display...</h3>
            <Link to='/' className='btn'>
              Home
            </Link>
          </div>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
