import { Navigation, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Sobre from "./pages/Sobre";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/sobre",
        element: <Sobre />,
    }
]);

export default router