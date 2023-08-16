import QuizForm from "./QuizForm/QuizForm";
import StateExzample from "./StateExzample";

export const App = () => {
  return (
    <>
        <div
      style={{
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React template
      
    </div>
    <StateExzample />
    <QuizForm />
    </>

  );
};
