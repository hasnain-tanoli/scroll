import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.js";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Protectedlayout from "./components/Protectedlayout.jsx";
import LogInPage from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Protectedlayout authentication>
            {" "}
            <Home />
          </Protectedlayout>
        ),
      },
      {
        path: "/login",
        element: (
          <Protectedlayout authentication={false}>
            <LogInPage />
          </Protectedlayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protectedlayout authentication={false}>
            <SignUp />
          </Protectedlayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Protectedlayout authentication>
            {" "}
            <AllPosts />
          </Protectedlayout>
        ),
      },
      {
        path: "/add-posts",
        element: (
          <Protectedlayout authentication>
            {" "}
            <AddPost />
          </Protectedlayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protectedlayout authentication>
            {" "}
            <EditPost />
          </Protectedlayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
