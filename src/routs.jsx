import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";


export default function RoutsPage() {
    return (
        <BrowserRouter>
            {/* Colocar menu aqui */}

            <Routes>
                <Route path="/" element={<Login/> } /> 
                
                {/* <Route path="/produtos" element={<PageProdutos />} /> */}
            
                {/* <Route path="*" element={<PageNotFound/>} /> */}
            </Routes>

           {/* Colocar footer aqui */}
        </BrowserRouter>
    );
}