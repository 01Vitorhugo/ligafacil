import zap from '../../assets/zap.png'
import email from '../../assets/email.png'

export default function Contact() {

    return(
        <div className="w-full h-auto">
             <section className=" h-20 flex items-center pl-3 border-b-1 border-colorPrinOpacity">
                <h1 className="text-[24px]">Contato</h1>
            </section>

            <figure className="h-[500px] mt-10 ">
                <img src={zap} alt="whatsapp" srcset="" />
            </figure>

              <figure className="h-[500px] mt-10 ">
                <img src={email} alt="whatsapp" srcset="" />
            </figure>

        </div>
    )
}