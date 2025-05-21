import { useState } from 'react';
import Logo from '../../assets/logo_site.png';
import Button from '../../components/button';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../database';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();


    async function loginUser() {

        if (!email || email.trim() === "") {
            console.log("Erro: O campo de email está vazio!");
            return;
        }

        if (!senha || senha.trim() === "") {
            console.log("Erro: O campo de senha está vazio!");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email.trim(), senha);
            // alert("Usuário logado com sucesso!", userCredential.user);
            toast.success("Usuário logado com sucesso!");
            navigate('/');


        } catch (error) {
            // alert("Email ou senha incorretos");
            toast.error("Email ou senha incorretos");
            setEmail("");
            setSenha("");
        }

    }

    return (
        <div className="w-full h-auto">

            <section className="w-full h-auto mt-6">
                <figure className='w-full  flex justify-center items-center'>
                    <img src={Logo} alt="Logo" className="w-1/2 max-w-[500px] max-h-[500px] mx-auto " />
                </figure>
            </section>

            <section className="w-full h-20 flex items-center p-3 border-b-1 border-colorPrinOpacity ">
                <h1 className='text-[40px]'>Login</h1>
            </section>

            <section className='mt-10 w-full h-auto'>

                <form>

                    <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1'>
                        <label htmlFor="" className='text-colorPrin'>Email</label>
                        <input
                            className='h-[45px] border border-colorInput rounded-lg text-colorText pl-3'
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1 mt-8'>
                        <label htmlFor="" className='text-colorPrin'>Senha</label>
                        <input
                            className='h-[45px] border border-colorInput rounded-lg text-colorText pl-3'
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}

                        />
                    </div>

                    <div className='w-full h-auto flex justify-center mt-8'>
                        <Button label="Entrar" onClick={() => loginUser()} />
                    </div>

                    <p className='text-colorText text-center mt-5 mb-5 text-[10px]'>OU</p>

                    <div className='w-full h-auto flex justify-center mt-6 mb-30'>
                        <Button label="Criar conta nova" to="/register" />
                    </div>

                </form>

            </section>

        </div>
    )
}
