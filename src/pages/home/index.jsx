import Button from "../../components/button";
import { signOut } from "firebase/auth";
import { auth } from "../../database"

import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

   async function logof() {

    await signOut(auth);
    alert("Usuário deslogado com sucesso!");
        
        navigate('/login');
    }
    return (
        <div className="w-full h-auto">
            <h1>Voce logou e esta na home </h1>

            <Button label="logof" onClick={logof}   />
        </div>
    )
}