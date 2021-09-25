import ExpenseDate from "../expenseDate/expenseDateComponent";
import './expenseItemStyles.scss';

function ExpenseItem({title, amount, date}) {
  
    return (
        <div className='expense-item-container'>
        <div className='expense-item-column'>
            <ExpenseDate date={date}/>
            <div className='expense-item-title'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item-amount'>
                <p>${amount}</p>
            </div>
          
        </div>
        </div>
    )
}

export default ExpenseItem;