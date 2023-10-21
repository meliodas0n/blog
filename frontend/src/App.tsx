import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/single",
    element: <Single />,
  },
  {
    path: "/write",
    element: <Write />,
  },
]);

function App() {
  return (
    <>
      <div className="text-9xl">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
