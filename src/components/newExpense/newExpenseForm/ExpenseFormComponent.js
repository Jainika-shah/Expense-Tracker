import { useState } from "react";
import CustomBtn from "../../customButtons/customButtonComponent";
import './ExpenseFormStyles.scss';

const ExpenseForm = ({onSave}) => {
    const [userTitle, setUserTitle] = useState('');
    const [userAmount, setUserAmount] = useState('');
    const [userDate, setUserDate] = useState('');

    const titleChangeHandler = (event) =>{
        setUserTitle(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setUserDate(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setUserAmount(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : userTitle,
            amount : userAmount,
            date : new Date(userDate)
        }
        onSave(expenseData);
        
        setUserTitle('');
        setUserAmount('');
        setUserDate('');

    }


    return <form  onSubmit={submitHandler}>
        <div className='expense-form-container'>
        <div className='expense-form-input'>
                <label>Date</label>
                <input type='date' required value={userDate}  min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
            </div>
            <div className='expense-form-input'>
                <label>Title</label>
                <input type='text' required placeholder="where you spent it?" value={userTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='expense-form-input'>
                <label>Amount</label>
                <input type='number' required placeholder="e.g - 23.34" value={userAmount}  min='0.01' step='0.01' onChange={amountChangeHandler}></input>
            </div>
          
            
        </div>
        <div className='expense-form-button'>
            <CustomBtn title="Cancel" classNames="custom-btn "/>
            <CustomBtn title="Add Expense" classNames="custom-btn "/>
        </div>
    </form>
}
export default ExpenseForm;