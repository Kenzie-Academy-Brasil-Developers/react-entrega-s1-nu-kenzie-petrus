/* eslint-disable array-callback-return */
import './style.css';

export default function Filtro({setFilter}){


return(
    
    <div className='financeiro'>
        <div>
            <p>Resumo financeiro</p>
            <button className='btnTodosFinanceiro' type='button' onClick={() => setFilter('') }>Todos</button>
            <button className='btn' type='button' onClick={() => setFilter('Entrada')}>Entrada</button>
            <button className='btn' type='button' onClick={() => setFilter('Despesa')}>Despesas</button>
        </div>
         
    </div>

)



}