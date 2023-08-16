import { Formik, Field, Form } from 'formik';

const QuizForm = () => {
    return ( 
        <>
         <h1 className="header__text">QuizForm</h1>

    <div>
    
        <Formik
                initialValues={{
                    topic: '',
                    level: 'beginner',
                    time: 0,
                    questions: 0,
                }}
                onSubmit={values => {
                    console.log(values);
                }}
                >
                <Form>
                        <label>
                        Topic
                        <Field name="topic" placeholder="Quiz topic..." />
                        </label>
                    
                        <label>
                        Level
                        <Field as="select" name="level">
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </Field>
                        </label>
                        <label>
                        Time
                        <Field name="time" type="number" />
                        </label>

                        <label>
                        Questions
                        <Field name="questions" type="number" />
                        </label>
                    
                    <button type="submit">Submit</button>
                </Form>
        </Formik>
  </div>         
      
        </>
        );
}
 
export default QuizForm;