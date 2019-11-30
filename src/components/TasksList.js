import React from 'react';
import { connect } from 'react-redux';

const TasksList =  ({tasks})=>{
    return(
        <div>{Object.values(tasks).map((task)=>(
            <div key={task.id} style={{border:'1px solid blue', width:'30%', margin:'0 auto'}}>{task.title}</div>
        ))}</div>
    )
}

export default connect(
    (state)=>({tasks:state.todo.tasks})
    ,
    null
)(TasksList)