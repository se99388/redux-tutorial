import { connect } from 'react-redux';
import React from 'react';
import { setName } from '../../redux/actions/user.action';
import Login from '../../utils/Login'
const ContainerLogin = ({ changeNameFromLogin }) => {
    // console.log("ContainerLogin", props)
    return (
        <Login cb={changeNameFromLogin} />
    )
}


//the second argument in HOC conncet is function that get the dispatch (=which send the data to the store via reducer). This function return an object with key(changeNameFromLogin). The Login component get this key in its props. This key contains a function that get as an argument the newname value (later on this value will be the value in the payload). this function call setName function which return an object of {type:SET_NAME ,payload:newName} and this object is dispatch to the store with the dispatch function. So, this is how we can dispath the data in this component to the store

export default connect(
    undefined,
    //     // (dispatch) => {
    //     //     return {
    //     //         changeNameFromLogin: (newName) => {
    //     //              dispatch(setName(newName))
    //     //         }
    //     //     }
    //     //  }
    //     // short writing
    {
        changeNameFromLogin: setName
    }
)(ContainerLogin)