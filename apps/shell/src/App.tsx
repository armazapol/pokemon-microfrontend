// import { RemoteComponentWrapper } from './components/RemoteComponentWrapper'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { InfinityScroll } from "./pages/InfinityScroll";
import LayoutComponent from "./components/LayoutComponent";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<LoginPage />} />
      <Route path="/" element={<LayoutComponent />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/infinity" element={<InfinityScroll />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
