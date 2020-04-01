import React from 'react'
import { connect } from 'react-redux'

function App(){
    return <div>ticket</div>
}

export default connect(
    function mapStateToProps(state){
        return state
    },
    function mapDispatchToProps(dispatch){
        return { dispatch }
    },
)(App)