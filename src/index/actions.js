export const ACTION_SET_FROM = 'SET_FROM'
export const ACTION_SET_TO = 'SET_TO'
export const ACTION_SET_CITY_DATA = 'SET_CITY_DATA'
export const ACTION_SET_IS_CITY_SELECTOR_SHOW = 'SET_IS_CITY_SELECTOR_SHOW'
export const ACTION_SET_IS_CITY_DATA_LOADING = 'SET_IS_CITY_DATA_LOADING'
export const ACTION_SET_CURRENT_SELECTORING_LEFT_CITY = 'SET_CURRENT_SELECTORING_LEFT_CITY'



export function setFrom(from){
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}
export function setTo(to){
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}
export function exchangeFromTo(){
    return (dispatch, getstate)=>{
        const { from, to } = getstate()
        dispatch(setFrom(to))
        dispatch(setTo(from))
    }
}

export function setCityData(cityData){
    window.console.log(cityData)

    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
    }
}
export function setIsCityDataLoading(isCityDataLoading){
    return {
        type: ACTION_SET_IS_CITY_DATA_LOADING,
        payload: isCityDataLoading
    }
}
export function hideCitySelector(){
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_SHOW,
        payload: false
    }
}
export function showCitySelector(currentSelectingLeftCity){
    return (dispatch)=>{
        dispatch({
            type: ACTION_SET_IS_CITY_SELECTOR_SHOW,
            payload: true
        })
        dispatch({
            type: ACTION_SET_CURRENT_SELECTORING_LEFT_CITY,
            payload: currentSelectingLeftCity
        })
    }
}
export function setSelectedCity(city){
    return (dispatch, getstate)=>{
        const { currentSelectingLeftCity } = getstate()
        if(currentSelectingLeftCity){
            dispatch(setFrom(city))
        }else{
            dispatch(setTo(city))
        }
        dispatch(hideCitySelector())
    }
}
export function fetchCityData() {

    return (dispatch, getstate)=>{


        const { isCityDataLoading } = getstate()
        
        if(isCityDataLoading){
            return
        }

        const cache = JSON.parse(
            localStorage.getItem('city_data_cache') || '{}'
        )

        if(Date.now() < cache.expires){
            dispatch(setCityData(cache.data))
            return
        }

        dispatch(setIsCityDataLoading(true))

        fetch('/rest/cities?_' + Date.now())
            .then(res => res.json())
            .then(citydata =>{
                dispatch(setCityData(citydata))

                localStorage.setItem(
                    'city_data_cache', 
                    JSON.stringify({
                        expires: Date.now() + 60 * 1000,
                        data: citydata,
                    })
                )

                dispatch(setIsCityDataLoading(false))
            })
            .catch(() => {
                dispatch(setIsCityDataLoading(false));
            })
    }
}
