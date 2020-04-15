import React from 'react'
import propTypes from 'prop-types'
import './Journey.css'
import switchImg from './imgs/switch.svg'

export default function Journey(props){
    const { from, to, exchangeFromTo, showCitySelector } = props
   
    return(
        <div className='journey'>
            <div className="journey-station" onClick={()=> showCitySelector(true)}>
                <input type="text" readOnly name="from" className="journey-input journey-from"
                value={from} 
                />
            </div>
            <div className="journey-switch" onClick={()=> exchangeFromTo()}>
                <img src={switchImg} width="70" height="40" alt="switch"/>
            </div>
            <div className="journey-station" onClick={()=> showCitySelector(false)}>
                <input type="text" readOnly name="to" className="journey-input journey-to"
                value={to}  
                />
            </div>
        </div>
    )
}

Journey.propTypes = {
    from: propTypes.string.isRequired,
    to: propTypes.string.isRequired,
    exchangeFromTo: propTypes.func.isRequired,
    showCitySelector: propTypes.func.isRequired
}