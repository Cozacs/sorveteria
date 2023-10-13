import Topo from '../../topo';
import Rodape from '../../rodape';
import Infos from '../../secoespaginas/paginaInicial/secaoResumo';


export default function PaginaI(){
    return(
        <div>
            <Topo />
            <Infos />
            <Rodape />
        </div>
    );
}