import kenzieB from '../../img/NuKenzieBlack.png';
import './styleHeader.css';

export default function Header({setEntrar}){

    function login(){
        setEntrar(true)
    }

    return(

        <header>
            <div className='blocoHeader'>
                <img src={kenzieB} alt="logo" />
                <button onClick={() => login()} className='sair' type="button">Inicio</button>
            </div>
        </header>

    )

}

