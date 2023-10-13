import Topo from '../../topo';
import Rodape from '../../rodape';
import InfosSab from '../../secoespaginas/paginaSobremesa/secaoSabores';

export default function PaginaSobremesa(){
    return(
        <div>
            <Topo />
            <InfosSab />
            <Rodape />
        </div>
    );
}