import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import '../App.css';
import '../inf.css';
import Login from '../pages/login';
import ListaClientePages from '../pages/lista_cliente';
import InfCliente from '../pages/inf_cliente';

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/lista" element={<ListaClientePages/>} />
                <Route path="/lista/:id" element={<InfCliente/>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

