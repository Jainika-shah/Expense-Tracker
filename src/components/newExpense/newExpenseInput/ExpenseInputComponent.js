import ExpenseForm from "../newExpenseForm/ExpenseFormComponent";
import './ExpenseInputStyles.scss';

const ExpenseInput = ({onAddExpense}) => {

    const onSaveHandler = (userInput) => {
        const userInputData = {
            ...userInput,
            id : Math.random()
        }
        onAddExpense(userInputData);
    }

    return <div className='input-container'>
        <ExpenseForm onSave={onSaveHandler}/>
    </div>
}

export default ExpenseInput;