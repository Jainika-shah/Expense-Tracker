import Msg from "../msgPrint/msgComponent";
import ExpenseItem from "./expenseItem/expenseItemComponent";

const Expenses = ({filteredExpenses}) => {

    return <div className='expenses-list'>
            {
            filteredExpenses.length > 0 ?
                filteredExpenses.map((item) => {
                    return (
                        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
                    )
                }):
                <Msg title="No Records Found"/>
            }
        </div>
}

export default Expenses;