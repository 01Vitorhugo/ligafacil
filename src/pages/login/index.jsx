import Logo from '../../assets/logo_site.png';
import Button from '../../components/button';

export default function Login() {



    return(
        <div className="w-full h-auto">

            <section className="w-full h-[250px]">
                <figure className='w-full h-full flex justify-center items-center'>
                    <img src={Logo} alt="Logo" className="w-1/2 h-auto mx-auto mt-10" />
                </figure>
            </section>

            <section className="w-full h-20 flex items-center p-3 border-b-1 border-colorPrinOpacity ">
                <h1>Login</h1>
            </section>

            <section className='mt-10 w-full h-auto'>

                <form action="" method="post" className=''>

                    <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1'>
                        <label htmlFor="" className='text-colorPrin'>Email</label>
                        <input type="text" name="" id="" className='h-[45px] border border-colorInput rounded-lg text-colorInput pl-3' />
                    </div>

                    <div className='w-full h-auto flex flex-col pl-3 pr-3 gap-1 mt-8'>
                        <label htmlFor="" className='text-colorPrin'>Senha</label>
                        <input type="password" name="" id="" className='h-[45px] border border-colorInput rounded-lg text-colorInput pl-3' />
                    </div>

                    <div className='w-full h-auto flex justify-center mt-8'>
                        <Button label="Entrar" />
                    </div>

                </form>

            </section>

        </div>         
    )
}
