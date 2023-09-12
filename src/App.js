import "./App.css";
import RootLayout from "./components/RootLayout";
import AddNewBlog from "./components/AddNewBlog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import BlogDetails from "./components/BlogDetails";
import EditBlog from "./components/EditBlog";
import 'alertifyjs/build/css/alertify.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/add-new-blog", element: <AddNewBlog /> },
        { path: "/blog-details/:id", element: <BlogDetails /> },
        { path: "/edit-blog/:id", element: <EditBlog /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
