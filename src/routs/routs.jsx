import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Footer from "../components/footer";


export default function RoutsPage() {
    return (
        <BrowserRouter>
            {/* Colocar menu aqui */}

            <Routes>
                <Route path="/" element={<Login/> } /> 
                <Route path="/register" element={<Register />} />
                
                {/* <Route path="/produtos" element={<PageProdutos />} /> */}
            
                {/* <Route path="*" element={<PageNotFound/>} /> */}
            </Routes>

           <Footer/>
        </BrowserRouter>
    );
}