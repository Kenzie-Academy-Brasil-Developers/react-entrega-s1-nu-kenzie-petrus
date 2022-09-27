import lixo from '../../img/trash.png'
import './style.css'

export default function Cards({listTransactions, removerItens}){


    return( 
        <li>
            <div className='lista1'>
                <h3>{listTransactions.description}</h3>
                <p>{listTransactions.type}</p>
            </div>
            <div className='lista2'>
                <p>R$ {listTransactions.value},00</p>
                <img onClick={()=> removerItens(listTransactions)} src={lixo} alt="lixeira" />
            </div>
         </li>
        )


}