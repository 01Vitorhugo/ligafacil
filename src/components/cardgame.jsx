import photo from '../assets/default.png'
import logoIcon from '../assets/logo_icon.png';

export default function CardGame({ horario, data, endereco }) {

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center ">

            <div className="bg-cover bg-center w-[90%] h-[381px] rounded-lg shadow-[5px_5px_10px_rgba(255,255,255,0.5)] relative  overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center rotate-[-30deg] size-[450px] opacity-20"
                    style={{ backgroundImage: `url(${logoIcon})` }}
                />

                <section className="border-b-1 border-colorPrinOpacity h-[100px] flex ">
                    <figure className='w-[30%] h-full  flex items-center justify-center'>
                        <img src={photo} alt="imagem time" className='h-16' />
                    </figure>

                    <div className='w-[70%] h-full flex items-center justify-center '>
                        <h2 className='text-colorText'>Loucos do morro</h2>

                    </div>
                </section>

                <section className="border-b-1 border-colorPrinOpacity h-14 flex items-center p-3">
                    <p className='text-colorText'>Endereço: {endereco}</p>

                </section>

                <section className="border-b-1 border-colorPrinOpacity h-14 flex items-center p-3">
                    <p className='text-colorText'>Data: {data}</p>

                </section>

                <section className="border-b-1 border-colorPrinOpacity h-14 flex items-center p-3">
                    <p className='text-colorText'>Horário: {horario}</p>

                </section>
            </div>
        </div>
    );
}