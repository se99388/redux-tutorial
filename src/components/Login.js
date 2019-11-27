import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


export default () => {
    const handleSubmit = (values)=>{
        console.log(values)
    }
    return (<Formik
        initialValues={{name:''}}
        onSubmit={handleSubmit}
        >  
        {() => <Form>
                    <Field type='text' name='name' />
                    <button type='submit'>Login</button>
                </Form>
            }
        </Formik>
    );
}


