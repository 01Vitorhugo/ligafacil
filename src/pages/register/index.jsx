import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import iconSeta from "../../assets/icon_seta.png";
import logo from "../../assets/logo_site.png";
import Button from "../../components/button";
import { db, auth } from "../../database";
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";




export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameTime, setNameTime] = useState("");
    const [nameOwner, setNameOwner] = useState("");
    const [phone, setPhone] = useState("");
    const [cep, setCep] = useState("");
    const [number, setNumber] = useState("");

    const navigate = useNavigate();

    async function userRegister() {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                email: email,
                nameTime: nameTime,
                nameOwner: nameOwner,
                phone: phone,
                cep: cep,
                number: number
            });
            
            toast.success("Usuário cadastrado com sucesso!");
            navigate("/profile");



        } catch (error) {
            //  console.log(error.message);

            if (error.code === "auth/email-already-in-use") {
                toast.error("Email já cadastrado!");

            } else if (error.code === "auth/weak-password") {
                toast.error("Senha muito fraca!");

            } else {
                toast.error("Erro ao cadastrar!");

            }

            setCep("");
            setNumber("");
            setEmail("");
            setPassword("");
            setNameTime("");
            setNameOwner("");
            setPhone("");
        }
    }

    return (
        <div className="h-auto w-full">

            <section className="w-full h-[111px] flex justify-between items-center pl-3 pr-3">
                <Link to="/login">
                    <img src={iconSeta} alt="voltar" className="w-[40px] h-[57px]" />
                </Link>

                <img src={logo} alt="voltar" className="w-[97px] h-[97px]" />
            </section>

            <section className="w-full h-[81px]  pl-3 flex items-center border-b-1 border-colorPrinOpacity ">
                <h1 className='text-[40px]'>Cadastro</h1>
            </section>

            <form className="w-full h-auto mt-5 flex flex-col items-center pl-3 pr-3 gap-5">
                <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1'>
                    <label htmlFor="" className='text-colorPrin'>Email</label>
                    <input
                        className='h-[45px] border border-colorInput rounded-lg text-colorText pl-3'
                        type="email"
                        name=""
                        id=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required

                    />
                </div>

                <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1'>
                    <label htmlFor="" className='text-colorPrin'>Senha</label>
                    <input
                        className='h-[45px] border border-colorInput rounded-lg text-colorText pl-3'
                        type="password"
                        name=""
                        id=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required

                    />
                </div>

                <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1'>
                    <label htmlFor="" className='text-colorPrin'>Nome do time</label>
                    <input
                        className='h-[45px] border border-colorInput rounded-lg text-colorText pl-3'
                        type="text"
                        name=""
                        id=""
                        value={nameTime}
                        onChange={(e) => setNameTime(e.target.value)}
                        required

                    />
                </div>

                <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1'>
                    <label htmlFor="" className='text-colorPrin'>Nome do responsável</label>
                    <input
                        className='h-[45px] border border-colorInput rounded-lg text-colorText pl-3'
                        type="text"
                        name=""
                        id=""
                        value={nameOwner}
                        onChange={(e) => setNameOwner(e.target.value)}
                        required

                    />
                </div>

                <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1'>
                    <label htmlFor="" className='text-colorPrin'>Telefone</label>
                    <input
                        className='h-[45px] border border-colorInput rounded-lg text-colorText pl-3'
                        type="text"
                        name=""
                        id=""
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required

                    />
                </div>

                <div className='w-full h-auto flex pl-3 pr-3 gap-4'>

                    <div className='w-[50%] flex flex-col '>
                        <label htmlFor="" className='text-colorPrin'>Endereço</label>
                        <input
                            className='h-[45px] w-[100%] border border-colorInput rounded-lg text-colorText pl-3'
                            type="text"
                            name=""
                            id=""
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            required

                        />
                    </div>

                    <div className='w-[50%] flex flex-col '>
                        <label htmlFor="" className='text-colorPrin'>Número</label>
                        <input
                            className='h-[45px] w-[100%]  border border-colorInput rounded-lg text-colorText pl-3'
                            type="text"
                            name=""
                            id=""
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required

                        />
                    </div>


                </div>

                <div className='mt-8 mb-14'>
                    <Button label="Cadastrar" onClick={userRegister} />

                </div>




            </form>

        </div>
    )
}