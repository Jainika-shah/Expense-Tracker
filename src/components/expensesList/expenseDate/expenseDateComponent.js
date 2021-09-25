import './expenseDateStyles.scss';

function ExpenseDate({date}){
    return (
        <div className='expense-item-date'>
            <p className='month'>{date.toLocaleString('default',{month : 'long'})}</p>
            {/* <p className='year'>{date.getFullYear()}</p> */}
            <p className='day'>{date.toLocaleString('default',{day : '2-digit'})}</p>
        </div>
    )
}
export default ExpenseDate;