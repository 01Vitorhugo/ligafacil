import logo from '../../assets/logo_site.png'

export default function About() {

    return (
        <div className="w-full h-auto">
            <section className=" h-20 flex items-center pl-3 border-b-1 border-colorPrinOpacity">
                <h1 className="text-[24px]">Sobre nós</h1>
            </section>

            <section className="mt-5 p-3">
                <p className="text-colorText">Somos uma plataforma criada para facilitar a conexão entre times de futebol amador que buscam marcar amistosos com praticidade e agilidade. Nosso objetivo é unir equipes, promover o espírito esportivo e simplificar o agendamento de jogos, eliminando as dificuldades de comunicação e organização.
                    Aqui, você encontra outros times disponíveis, combina partidas com poucos cliques e fortalece o vínculo entre atletas apaixonados pelo jogo. Acreditamos que o futebol vai muito além das quatro linhas — é sobre comunidade, amizade e competição saudável.
                    Junte-se a nós e faça parte dessa rede que movimenta o futebol de verdade!
                </p>
            </section>

            <section className="mt-5 ">
                <figure className="h-470px">
                    <img src={logo} alt="Logo site" />

                </figure>

            </section>

        </div>

    )
}