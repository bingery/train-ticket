import React from 'react'
import { connect } from 'react-redux'

function App(){
    return <div>query</div>
}

export default connect(
    function mapStateToProps(state){
        return state
    },
    function mapDispatchToProps(dispatch){
        return { dispatch }
    },
)(App)