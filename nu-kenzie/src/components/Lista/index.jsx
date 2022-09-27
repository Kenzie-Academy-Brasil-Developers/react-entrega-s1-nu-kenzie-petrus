import './style.css'
import Cards from "../cards";


export default function Lista({listTransactions, removerItens}){

   
    return(


        <>
            {
                listTransactions.length ? (

                    <ul className='lista'>
                {
                        listTransactions.map((elemento, index) => {
                        return <Cards key={index} listTransactions={elemento} removerItens={removerItens}/>})
                }
                    </ul>
                ) 
                : 
                (
                    <h2 className='mensagem'>Você ainda não possui nenhum lançamento</h2> 
                )


            }
           
        </>
    )
        
    
}