import React from 'react'
import photo from './asserts/2.png'
 const Item = () => {
    return (
        <div className="item">
            <h1>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
            </h1>
            <ul>
                <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for<br/>
                 various projects across the globe to save energy.
                </li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the <br/>
                old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
	            </li>
            </ul>
            <img src={photo} alt="award presentation"/>
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director<br/>
                 of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable <br/>
                 Minister of State.
	        </p>
        </div>
    )
}
export default Item