// import {FaExpeditedssl} from 'react-icons/fa'
import './App.css';
import Main from './components/Main';
import Menu from './components/Menu';
import PaginaPrincipal from './components/PaginaPrincipal';
import { useState } from 'react';
import Header from './components/PaginaPrincipal/Header';
import Descricao from './components/PaginaPrincipal/Descricao';


function App() {

  const [entrar, setEntrar] = useState(true)

  return (
    <Main>
        {
          entrar ?  
            <Menu>
              <button onClick={() => setEntrar(!entrar)} type="button">Entrar</button>
            </Menu>
            /* <FaExpeditedssl style={{ color: 'blue', fontSize: '50px' }} /> */
         
          : <PaginaPrincipal>

            <Header> 
              <button onClick={() => setEntrar(!entrar)} className='sair' type="button">Inicio</button>
            </Header>

          
            <Descricao>
           
            </Descricao>

            </PaginaPrincipal>
        }

    </Main>
  );

}

export default App;
