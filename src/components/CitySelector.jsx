import React, { memo, useEffect, useCallback } from 'react'
import propTypes from 'prop-types'
import './CitySelector.css'
import classnames from 'classnames'



const CityItem = memo(function(props){
    const { name, setSelectedCity } = props

    return (
        <li className="city-li" onClick={()=>setSelectedCity(name)}>{name}</li>
    )

})
CityItem.propTypes = {
    name: propTypes.string.isRequired,
    setSelectedCity: propTypes.func.isRequired,
}

const CitySection = memo(function(props){
    const { citys = [], title, setSelectedCity } = props

    return(
        <ul className="city-ul">
            <li className="city-li" key="title" data-cate={title}>{title}</li>
            {
                citys.map((city)=>{
                    return (
                        <CityItem
                            key={city.name}
                            name={city.name}
                            setSelectedCity={setSelectedCity}
                        />
                    )
                })
            }
        </ul>
    )
})
CitySection.propTypes = {
    title: propTypes.string.isRequired,
    citys: propTypes.array,
    setSelectedCity: propTypes.func.isRequired,
}

const AlphaItem = memo(function(props){
    const { alpha, toAlpha } = props

    return (
        <i className="city-index-item" onClick={()=>toAlpha(alpha)}>{alpha}</i>
    )
})
AlphaItem.propTypes = {
    alpha: propTypes.string.isRequired,
    toAlpha: propTypes.func.isRequired,
}
const AlphaList = Array.from(new Array(26), (ele, index)=>{
    return String.fromCharCode(65 + index)
})

const CityList = memo(function(props){
    const { sections, toAlpha, setSelectedCity } = props

    return (
        <div className="city-list">
            <div className="city-cate">
                {
                    sections.map((section)=>{
                        return (
                            <CitySection
                                key={section.title}
                                citys={section.citys}
                                title={section.title}
                                setSelectedCity={setSelectedCity}
                            />
                        )
                    })
                } 
            </div>
            <div className="city-index">
                {
                    AlphaList.map((alpha)=>{
                        return(
                            <AlphaItem
                                alpha={alpha}
                                key={alpha}
                                toAlpha={toAlpha}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
})
CityList.propTypes = {
    sections: propTypes.array.isRequired,
    toAlpha: propTypes.func.isRequired,
    setSelectedCity: propTypes.func.isRequired,
}


const CitySelector = memo(function(props){

    const { isLoading, 
            cityData,
            fetchCityData,
            show,
            hideCitySelector,
            setSelectedCity
        } = props

    
    useEffect(()=>{
        fetchCityData()
    }, [])     

    const toAlpha = useCallback(alpha => {
        document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
    }, [])
    
    const citySections = ()=>{

        if(isLoading){
            return <div>loading</div>
        }

        if(cityData){
            return (
                <CityList
                    sections={cityData.cityList}
                    toAlpha={toAlpha}
                    setSelectedCity={setSelectedCity}
                />
            )
        }

        return <div>error</div>

    }

    return(
        <div className={classnames('city-selector', {hidden: !show})}>
            <div className="city-search">
                <div className="search-back" onClick={()=>hideCitySelector()}>
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
            {citySections()}
        </div>
    )
})

CitySelector.propTypes = {
    isLoading: propTypes.bool.isRequired,
    cityData: propTypes.object,
    setSelectedCity: propTypes.func.isRequired,
}

export default CitySelector