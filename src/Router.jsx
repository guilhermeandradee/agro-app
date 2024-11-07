import App from "./App"
import { Route, Routes } from "react-router-dom"
import AddPost from "./pages/AddPost"
import DetalhesPostagem from "./pages/DetalhesPostagem"


const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<App/>} /> 
            <Route path="/add-post" element={<AddPost/>} /> 
            <Route path="/postagem/:id" element={<DetalhesPostagem/>} /> 
        </Routes>
    )
}
export default MainRoutes