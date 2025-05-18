import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Footer from "../components/footer";
import Home from "../pages/home";


export default function RoutsPage() {
    return (
        <BrowserRouter>
            {/* Colocar menu aqui */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/> } /> 
                <Route path="/register" element={<Register />} />
                
                {/* <Route path="/produtos" element={<PageProdutos />} /> */}
            
                {/* <Route path="*" element={<PageNotFound/>} /> */}
            </Routes>

           <Footer/>
        </BrowserRouter>
    );
}