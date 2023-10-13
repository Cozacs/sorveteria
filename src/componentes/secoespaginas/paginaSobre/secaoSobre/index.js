import './style.css';
import PSobSecaoBanner from '../secaoBanner';

export default function InfosSobre(){
    return(
        <main>
            <PSobSecaoBanner />
            <section className="Informacoes">
                <h2>Sobre Nós</h2>
                <h3>Nós simplesmente amamos sorvete!</h3>
                <p>Nós simplesmente amamos sorvete!
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                    <br /><br />
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
            </section>
            <section className="Fotos">
                <div className="MeiaFoto" id="pessoas"></div>
                <div className="MeiaFoto" id="buffet"></div>
            </section>
        </main>
    );
}