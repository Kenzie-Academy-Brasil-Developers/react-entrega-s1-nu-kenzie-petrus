import { useState } from "react";
import './style.css';


export default function Form({adicionarItens}){

    const [ textoInput, setTextoInput ] = useState('');
    const [ valorInput, SetValorInput ] = useState('');
    const [ tipo, setTipo ] = useState('');

    function criandoLista(evento){
        evento.preventDefault();

        if(textoInput.length > 0){
            if(tipo === 'Despesa'){

                adicionarItens({
                    description: textoInput,
                    type: tipo,
                    value: -(Number(valorInput))
                })
            }else{
                adicionarItens({
                    description: textoInput,
                    type: tipo,
                    value: Number(valorInput)
                })
            }

            setTextoInput('');
            SetValorInput('');
        }else{
            alert('Preencha todos os campos')
        }

       
    }

    return(
            <>
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
        </>
    )

}

