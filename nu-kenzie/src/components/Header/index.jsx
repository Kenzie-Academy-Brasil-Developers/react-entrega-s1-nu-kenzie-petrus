import kenzieB from '../../img/NuKenzieBlack.png';
import './styleHeader.css';

export default function Header({children}){

    return(

        <div className='header'>
            <img src={kenzieB} alt="logo" />
            {children}
        </div>

    )

}

