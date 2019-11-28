

const initialState = {
    tasks:[],
    search:''
}
const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        // case SET_NAME:
        //     return { ...state, name: action.payload };

        default:
            return state;
    }
}
export default todoReducer;