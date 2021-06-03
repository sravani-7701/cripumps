import React from 'react'
import call from './asserts/phone-call.png'
import facebook from './asserts/facebook.png'
import globe from './asserts/globe.png'
 const Footer = () => {
    return (
        <div className="foot">
            <div className="phn">
            <img src={call} />
            <p>Toll free 1800 200 1234</p>
            </div>
            <div className="phn">
             <img src={facebook}/>
             <p>www.facebook.com/cripumps</p>
            </div>
            <div className="phn">
              <img src={globe}/>
              <p>www.crigroups.com</p>
            </div>

        </div>
    )
}
export default Footer