import './styleDescricao.css';

export default function Descricao({listTransactions}){


    return(
            <div className="descricao">
                
                <div className='card2'>
                <div>
                    <p>Valor total:</p>
                    <span>$ {
                            listTransactions.reduce((accumulator, currentValue) => {return accumulator + currentValue.value},0)}
                        </span>
                </div>
                <p>O valor se refere ao saldo</p>
                </div>
            </div>
    )



}