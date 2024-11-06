import App from "./App"
import { Route, Routes } from "react-router-dom"
import AddPost from "./pages/AddPost"


const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<App/>} /> 
            <Route path="/add-post" element={<AddPost/>} /> 
        </Routes>
    )
}
export default MainRoutes