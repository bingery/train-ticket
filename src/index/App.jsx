import React, { useCallback, useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './App.css'
import Header from '../components/Header.jsx'
import Journey from './Journey.jsx'
import CitySelector from '../components/CitySelector'

import {
    exchangeFromTo
} from './actions'

function App(props){

    const {
        from,
        to,
        dispatch,
        isCityDataLoading,
        cityData
    } = props

    const onBack = useCallback(() =>{
        window.history.back()
    }, [])

    const cbs = useMemo(() => {
        return bindActionCreators(
            {
                exchangeFromTo,
            },
            dispatch
        )
    }, [])

    return (
        <div>
            <div className="header-wrapper">
                <Header title='火车票' onBack={onBack}/>
            </div>
            <form action="./query.html" className="form">
                <Journey from={from} to={to} {...cbs}/>
            </form>

            <CitySelector
                isLoading={isCityDataLoading}
                cityData={cityData}
            />
            
        </div>
    )
}

export default connect(
    function mapStateToProps(state){
        return state
    },
    function mapDispatchToProps(dispatch){
        return { dispatch }
    },
)(App)