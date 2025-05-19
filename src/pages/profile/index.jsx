import img from '../../assets/logo_branca.png'


export default function Profile() {

    return (
        <div className="w-full h-auto">
            <section className=" h-20 flex items-center pl-3 border-b-1 border-colorPrinOpacity" >
                <h1 className="text-[24px]">Meu perfil</h1>
            </section>

            <figure className="w-full h-auto flex justify-center items-center mt-10">
                <img src={img} alt="escuto do time" className='w-[173px] h-[173px]'/>
            </figure>

            <section className='w-full h-auto justify-center flex mt-10 '>
                <div className='w-[319px] h-[85px] rounded-bl-[50px] rounded-tr-[50px] border-1 border-colorText bg-colorInput flex justify-center items-center'>

                </div>
            </section>

        </div>
        
    )
}