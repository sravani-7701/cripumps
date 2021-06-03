import React from 'react'
import award from './asserts/1.png'
import Item from './Item'
const Flexitem = () => {
    return (
        <div className="flex">
            <div>
              <img src={award} alt="momento"/>
            </div>
            <Item/>
        </div>
    )
}
export default Flexitem