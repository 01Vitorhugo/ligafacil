import photo from '../assets/default.png'
import logoIcon from '../assets/logo_icon.png';
import Button from './button';

export default function CardGame({ horario, data, endereco, nomeTime, rua, numero, cep, teste}) {

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center mt-15 ">

            <div className="bg-cover bg-center w-[90%] h-[381px] rounded-lg shadow-[1px_1px_5px_rgba(255,255,255,0.5)] relative  overflow-hidden flex flex-col ">
                <div
                    className="absolute inset-0 bg-cover bg-center rotate-[-30deg] size-[450px] opacity-20"
                    style={{ backgroundImage: `url(${logoIcon})` }}
                />

                <section className="border-b-1 border-colorPrinOpacity h-[100px] flex ">
                    <figure className='w-[30%] h-full  flex items-center justify-center'>
                        <img src={photo} alt="imagem time" className='h-16' />
                    </figure>

                    <div className='w-[70%] h-full flex items-center justify-center'>
                        <h2 className='text-2xl'>{nomeTime}</h2>
                    </div>
                </section>

                <section className="border-b-1 border-colorPrinOpacity h-14 flex items-center p-3">
                    <p className='text-colorText'> {rua}, {numero} - {endereco}, {cep}</p>

                </section>

                <section className="border-b-1 border-colorPrinOpacity h-14 flex items-center p-3">
                    <p className='text-colorText'>Data: {data}</p>

                </section>

                <section className="border-b-1 border-colorPrinOpacity h-14 flex items-center p-3">
                    <p className='text-colorText'>Horário: {horario}</p>

                </section>

                <div className='h-auto flex items-center justify-center p-6'>
                    <Button label={teste} />
                </div>
                
            </div>


        </div>
    );
}