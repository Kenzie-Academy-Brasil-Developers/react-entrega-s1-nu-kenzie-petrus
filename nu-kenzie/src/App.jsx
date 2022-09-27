// import {FaExpeditedssl} from 'react-icons/fa'
/* <FaExpeditedssl style={{ color: 'blue', fontSize: '50px' }} /> */
import './App.css';
import Menu from './components/Menu';
import PaginaPrincipal from './components/PaginaPrincipal';
import Header from './components/Header';
import Form from './components/Form';
import Descricao from './components/Descricao';
import Filtro from './components/Filtro';
import Lista from './components/Lista';
import { useState } from 'react';



function App() {

  const [entrar, setEntrar] = useState(true)

  const [listTransactions, setListTransactions] = useState([]);

  const [filter, setFilter] = useState('');

  const filtrarLista = listTransactions.filter((elemento) => filter === "" ? true : elemento.type === filter);

  function adicionarItens(item){

    setListTransactions([...listTransactions, item])

  }

  function removerItens(item){

    const novaLista = listTransactions.filter((elemento) => elemento !== item);

    
      setListTransactions(novaLista)
    

  }



  return (
    <div>

        {
          entrar ?  
            <Menu>
              <button onClick={() => setEntrar(!entrar)} type="button">Entrar</button>
            </Menu>
            
         
          : 
          <PaginaPrincipal>

              <Header setEntrar={setEntrar}/> 
            
              <section className='sectionBloco'>
                <div className='bloco1'>
                  <Form adicionarItens={adicionarItens} />
                  <Descricao listTransactions={listTransactions}/>
                </div>
                <div className='bloco2'>
                  <Filtro setFilter={setFilter}/>
                  <Lista listTransactions={filtrarLista} removerItens={removerItens}/>
                </div>
              </section>

          </PaginaPrincipal>
        }

    </div>
  );

}

export default App;
