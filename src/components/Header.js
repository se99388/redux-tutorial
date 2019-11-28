import React from 'react';
import { connect } from 'react-redux'

const Header = (props) => {
console.log(props)
    return (
        <h1>
            Logged in. My name is: {props.username}
        </h1>
    );
}
//connect is HOC. we send into the conncet: 1. function with all the state which return the realevant obj only, from this state. Now we will get it in the props and we can subscribe to any changes in this specific state
export default connect(
    (state) => { return { username: state.name } },
    null
)(Header);


