import './style.css';
import PSabSecaoBanner from '../secaoBanner';

export default function InfosSab() {
    return(
        <main>
            <PSabSecaoBanner />
            <h3 id="title-sabores">SABORES DE SORVETE</h3>
            <div className='conjunto' >
                <div className='card'>
                    <div className="layout-img" id="oreo"></div>
                    <h2>Sorvete de Oreo</h2>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
                <div className='card'>
                    <div className="layout-img" id="pistache"></div>
                    <h2>Sorvete Pistache</h2>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>
                <div className='card'>
                    <div className="layout-img" id="avela"></div>
                    <h2>Sorvete Cookies & Avelã</h2>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                </div>
            </div>
            <div className='conjunto'>
                <div className='card'>
                    <div className="layout-img" id="kiwi"></div>
                    <h2>Sorvete de Kiwi</h2>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>
                <div className='card'>
                    <div className="layout-img" id="morango"></div>
                    <h2>Sorvete de Morango</h2>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>
                <div className='card'>
                    <div className="layout-img" id="limao"></div>
                    <h2>Sorvete de Limão Siciliano</h2>
                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
            </div>
        </main>
    );
}