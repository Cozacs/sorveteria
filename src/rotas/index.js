import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaI from '../componentes/paginas/paginaInicial';
import PaginaSobremesa from '../componentes/paginas/paginaSobremesa';
import PaginaSobre from '../componentes/paginas/paginaSobre';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PaginaI /> }/>
                <Route path='/sobremesa' element={ <PaginaSobremesa /> }/>
                <Route path='/sobre' element={ <PaginaSobre /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;