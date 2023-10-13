import './style.css';

export default function Rodape(){
    return(
        <footer>
            <div className="alinhamentoFooter">
                <div className="Logo">
                    <img src="assets/logo.png" alt="Logo da Sorveteria" />
                </div>
                <div className="Contate-nos">
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardinho de Campos,</p>
                    <p>98 São Paulo, SP 12345-678</p>
                </div>
                <div className="Contate-nos">
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className="Contate-nos">
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div id="autor">
                <p>
                    Gelateria Orgulhosamente desenvolvido pelo <strong>Cozacs</strong>
                </ p>
            </div>
        </footer>
    )
}