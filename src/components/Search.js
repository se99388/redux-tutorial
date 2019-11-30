import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { fetchTasks } from '../redux/actions/todo.action';


const Search = ({ fetchTasks, tasks }) => {

    const handleSubmit = (values) => {
        console.log(values)
        fetchTasks(values.search)
    }
    const tasksArr = Object.values(tasks)
    const findNewest = () => {
        let newest = null;
        for (let task of tasksArr) {
            const currentDate = new Date(task.when)
            if (newest === null || newest < currentDate) {
                newest = currentDate;
            }
            return newest && newest.toISOString();
        }

    }
    return (
        <Formik
            initialValues={{ search:'' }}
            onSubmit={handleSubmit}
        >
            <Form>
                <Field type='search' name='search' />
                <div>
                <p>Number of tasks: {tasksArr.length}</p>
                <p>The newest task: {findNewest()}</p>
            </div>
            </Form>
        
        </Formik>
    )
}
export default connect(
    (state) => ({
        tasks: state.todo.tasks
    }),
    {fetchTasks}
)(Search)