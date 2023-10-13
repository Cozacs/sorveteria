import Topo from '../../topo';
import InfosSobre from '../../secoespaginas/paginaSobre/secaoSobre';
import Rodape from '../../rodape';

export default function PaginaSobre(){
    return(
        <div>
            <Topo />
            <InfosSobre />
            <Rodape />
        </div>
    );
}