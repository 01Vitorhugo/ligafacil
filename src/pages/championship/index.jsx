import trofeu from '../../assets/trofeu.png'

export default function Championship() {


    return (
        <div className="w-full h-auto">
            <section className=" h-20 flex items-center pl-3 border-b-1 border-colorPrinOpacity">
                <h1 className="text-[24px]">Campeonato</h1>
            </section>

            <section className='flex flex-col justify-center items-center mt-10'>
                <p className='text-colorText'>Em breve..</p>
                <div className="w-full h-auto flex justify-center items-center mb-28">
                    <img src={trofeu} alt="trofeu" />
                </div>
            </section>

        </div>
    )
}