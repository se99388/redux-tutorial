
export const SET_NAME = '[user] SET NAME';

export const setName = (newName) => {
    return {
        type: SET_NAME,
        payload: newName
    }
}