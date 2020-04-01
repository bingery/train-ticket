import React from 'react'
import propTypes from 'prop-types'
import './CitySelector.css'
import classnames from 'classnames'

export default function CitySelector(props){

    const { isLoading, cityData } = props
    
    const citySections = ()=>{

        if(isLoading){
            return <div>loading</div>
        }

        // if(cityData){
        //     return
        // }


    }

    return(
        <div className={classnames('city-selector')}>
            <div className="city-search">
                <div className="search-back">
                    <svg width="42" height="42">
                        <polyline
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="城市、车站的中文或拼音"
                    />
                </div>
                <i
                    className={classnames('search-clean')}
                >
                    &#xf063;
                </i>
            </div>
            
        </div>
    )
}

CitySelector.propTypes = {
    // title: propTypes.string.isRequired,
    // onBack: propTypes.func.isRequired
}