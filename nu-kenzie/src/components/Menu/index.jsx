import kenzie from '../../img/NuKenzie.png';
import kenzie2 from '../../img/Group262.png';
import './styleMenu.css';

export default function Menu({children}){

   

    return(

        <section>
            <div>
                <img src={kenzie} alt="logo" />
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                {children}
            </div>

            <div>
                <img src={kenzie2} alt="" />
            </div>

        </section>
    )


}