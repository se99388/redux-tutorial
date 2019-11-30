import { SET_TASKS } from '../actions/todo.action';
import { SET_SEARCH } from '../actions/todo.action';
import { keyBy } from 'lodash';

const initialState = {
    tasks: {},
    search: ''
}
const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TASKS:
            //convert from array to object. first option:

            // const obj = action.payload.reduce(
            //     (accum, currentTask) => {
            //         accum[currentTask.id] = currentTask
            //         return accum
            //     }, {})
            // return { ...state, tasks: obj };

            //second option with lodash
            return { ...state, tasks: keyBy(action.payload,(task)=>task.id) };
        case SET_SEARCH:
            return { ...state, search: action.payload };

        default:
            return state;
    }
}
export default todoReducer;