import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import '../App.css';
import Login from '../pages/login';
import ListaClientePages from '../pages/lista_cliente';

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/cenoura" element={<ListaClientePages/>} />
                <Route path=":id" element={<ListaClientePages/>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

