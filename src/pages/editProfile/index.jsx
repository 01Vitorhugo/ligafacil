import { useState, useContext, useEffect } from "react";
import Button from "../../components/button";
import { Contextapi } from "../../contexApi";


export default function EditProfile() {

    const { user } = useContext(Contextapi);

    const [email, setEmail] = useState(user?.email || "");
    const [nameTime, setNameTime] = useState("");
    const [nameOwner, setNameOwner] = useState("");
    const [phone, setPhone] = useState("");
    const [cep, setCep] = useState("");
    const [number, setNumber] = useState("");
    const [uf, setUf] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [logradouro, setLogradouro] = useState("");


    useEffect(() => {
        if (user) {
            setCep(user.cep || "");
            setNumber(user.number || "");
            setUf(user.ufCep || "");
            setLocalidade(user.locationCep || "");
            setBairro(user.bairroCep || "");
            setLogradouro(user.logradouroCep || "");
            setNameOwner(user.nameOwner || "");
            setNameTime(user.nameTime || "");
            setEmail(user.email || "");
            setPhone(user.phone || "");
        }

    })

    function test(){
        alert("Funcionalidade em teste");
    }


    return (
        <div className="h-auto w-full">
            <section className=" h-20 flex items-center pl-3 border-b-1 border-colorPrinOpacity">
                <h1 className="text-[24px]">Editar perfil</h1>
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

                    />
                </div>


                {/* Novos inputs para funcionalidades */}
                <div className='w-full h-auto flex pl-3 pr-3 gap-4'>

                    <div className='w-[50%] flex flex-col '>
                        <label htmlFor="" className='text-colorPrin'>Cep</label>
                        <input
                            className='h-[45px] w-[100%] border border-colorInput rounded-lg text-colorText pl-3'
                            type="text"
                            name=""
                            id=""
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}

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

                        />
                    </div>


                </div>

                <div className='w-full h-auto flex pl-3 pr-3 gap-4'>

                    <div className='w-[50%] flex flex-col '>
                        <label htmlFor="" className='text-colorPrin'>Logradouro</label>
                        <input
                            className='h-[45px] w-[100%]  border border-colorInput rounded-lg text-colorText pl-3 cursor-no-drop'
                            type="text"
                            name=""
                            id=""
                            value={logradouro}
                            onChange={(e) => setLogradouro(e.target.value)}


                        />
                    </div>

                    <div className='w-[50%] flex flex-col '>
                        <label htmlFor="" className='text-colorPrin'>Bairro</label>
                        <input
                            className='h-[45px] w-[100%]  border border-colorInput rounded-lg text-colorText pl-3 cursor-no-drop'
                            type="text"
                            name=""
                            id=""
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}


                        />
                    </div>


                </div>

                <div className='w-full h-auto flex pl-3 pr-3 gap-4'>


                    <div className='w-[50%] flex flex-col '>
                        <label htmlFor="" className='text-colorPrin'>Localidade</label>
                        <input
                            className='h-[45px] w-[100%]  border border-colorInput rounded-lg text-colorText pl-3 cursor-no-drop'
                            type="text"
                            name=""
                            id=""
                            value={localidade}
                            onChange={(e) => setLocalidade(e.target.value)}


                        />
                    </div>

                    <div className='w-[50%] flex flex-col '>
                        <label htmlFor="" className='text-colorPrin'>Uf</label>
                        <input
                            className='h-[45px] w-[100%]  border border-colorInput rounded-lg text-colorText pl-3 cursor-no-drop'
                            type="text"
                            name=""
                            id=""
                            value={uf}
                            onChange={(e) => setUf(e.target.value)}

                        />
                    </div>


                </div>

                <div className='mt-8 mb-14'>
                    <Button label="Editar perfil"  onClick={() => test()} />

                </div>




            </form>


        </div>
    )
}