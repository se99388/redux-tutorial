
export const SET_SEARCH = '[todo] set search';
export const SET_TASKS = '[todo] set tasks';

export const setTasks = (tasks) => {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export const setSearch = (searchTerm) => {
    return {
        type: SET_SEARCH,
        payload: searchTerm
    }
}

export const fetchTasks = (searchTerm) => {
    return async (dispatch) => {
        dispatch(setSearch(searchTerm));
        const response = await fetch(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchTerm}`);
        const data = await response.json();
        return dispatch(setTasks(data));
    }



}

