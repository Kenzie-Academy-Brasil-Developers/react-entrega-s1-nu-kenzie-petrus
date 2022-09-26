import './styleDescricao.css';
import lixo from '../../../img/trash.png'
import { useState } from 'react';

export default function Descricao({lista}){

    const [ textoInput, setTextoInput ] = useState('');
    const [ valorInput, SetValorInput ] = useState('');
    const [ tipo, setTipo ] = useState('');

    function criandoLista(evento){
        evento.preventDefault();

       
        console.log(textoInput, valorInput, tipo)
    

     setTextoInput('');
     SetValorInput('');
     setTipo('');

    }

  

    return(
    
        <section className="corpo">
            <div className="descricao">
                
                <form onSubmit={criandoLista} className='card1'>

                    <h4>Descrição</h4>
                    <input type="text" placeholder="Digite aqui sua descrição" value={textoInput} onChange={ evento => setTextoInput(evento.target.value) } />
                    <span>Ex: Compra de roupas</span>

                    <div>
                        <div className='valor'>
                            <p>Valor</p>
                            <input type="text"  placeholder='R$' value={valorInput} onChange={ evento => SetValorInput(evento.target.value) }  />
                        </div>
                        <div className='tipoValor'>
                            <p>Tipo de valor</p>
                            <select onChange={ evento => setTipo(evento.target.value) }>
                                <option selected disabled value='opcao'>Opções</option>
                                <option value="Entrada">Entrada</option>
                                <option value="Despesa">Despesa</option>
                            </select>
                        </div>
                    </div>

                    <button className='enviarValor' type='submit'>Inserir Valor</button>

                </form>

                <div className='card2'>
                <div>
                    <p>Valor total:</p>
                    <span>$ 100</span>
                </div>
                <p>O valor se refere ao saldo</p>
                </div>
            </div>

            <div className='financeiro'>
                <div>
                    <p>Resumo financeiro</p>
                    <button className='btnTodosFinanceiro' type='button'>Todos</button>
                    <button className='btnFinanceiro' type='button'>Entradas</button>
                    <button className='btnFinanceiro' type='button'>Despesas</button>
                </div>
                <h2>Você ainda não possui nenhum lançamento</h2>

                <ul>
                    <li>
                        <div className='lista1'>
                            <h3>Salário - Mês Dezembro</h3>
                            <p>Entrada</p>
                        </div>
                        <div className='lista2'>
                            <p>R$ 1.000</p>
                            <img src={lixo} alt="lixeira" />
                        </div>
                    </li>

    
                </ul>
            </div>

        </section>

        


    )



}