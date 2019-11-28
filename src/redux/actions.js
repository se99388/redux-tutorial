
export const SET_NAME = 'SET NAME';

export const setName = (newName) => {
    return {
        type: SET_NAME,
        payload: newName
    }
}