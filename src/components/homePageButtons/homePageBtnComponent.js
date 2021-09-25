import CustomBtn from "../customButtons/customButtonComponent";
import ExpenseInput from "../newExpense/newExpenseInput/ExpenseInputComponent";
import './homePageBtnStyles.scss';
import { useState } from "react";
import Msg from "../msgPrint/msgComponent";
import Expenses from "../expensesList/expenses";
import Chart from "../expenseGraph/Chart";


const INITIAL_EXPENSES = [
    {
        id : 1,
        title : 'Stationary',
        amount : 98.21,
        date : new Date(2020, 7, 15)
    },
    {
        id : 2,
        title : 'Project',
        amount : 128.21,
        date : new Date(2019, 3, 13)
    },
    {
        id : 3,
        title : 'Books',
        amount : 18.21,
        date : new Date(2020, 2, 1)
    },
    {
        id : 4,
        title : 'Date',
        amount : 228.21,
        date : new Date(2021, 2, 10)
    },
 
    {
        id : 5,
        title : 'College',
        amount : 28.21,
        date : new Date(2019, 12, 20)
    },
    {
        id : 6,
        title : 'Breakage',
        amount : 118.21,
        date : new Date(2021, 3, 14)
    },
    {
        id : 7,
        title : 'Tools',
        amount : 118.21,
        date : new Date(2021, 3, 4)
    },
    
]


const HomePageButton = () => {

    const [expenses, setExpense] = useState(INITIAL_EXPENSES);
    const [addExpenseBtn, setAddExpenseBtn] = useState(false);
    const [viewExpenseBtn, setViewExpenseBtn] = useState(false);
    const [expenseAdded, setExpenseAdded] = useState(false);
    const [selectedYear, setselectedYear] = useState('2019');

    const addExpenseItem = (expenseData) => {
        setExpense((prevValue)=> {
            setExpenseAdded(true);
            return [
                ...prevValue,
                expenseData
            ]
        })
    }


    const onAddExpenseHandler = () => {
        setAddExpenseBtn(true);
        setViewExpenseBtn(false);
        setExpenseAdded(false);
    }

    const onViewExpHandler = () => {
        setViewExpenseBtn(true);
        setAddExpenseBtn(false);
        setExpenseAdded(false);
    }

    const onYearChangeHandler = (selectedYear) => {
        setselectedYear(selectedYear);
    }
   
    const FilteredExpenses = expenses.filter((item) => {
        return item.date.getFullYear() == selectedYear 
    })

    return (
        <div>
            {/* Home page buttons */}
            <div className='buttons'>
                <CustomBtn title='Add New Expense' clickHandler={onAddExpenseHandler} classNames='custom-btn'/>
                <CustomBtn title='View Expenses' clickHandler={onViewExpHandler} classNames='custom-btn'/>
            </div>
        

            {/* Add expense button functionality */}
            { addExpenseBtn && <ExpenseInput onAddExpense={addExpenseItem}/> }
            { expenseAdded && <Msg title="Expense Added"/> }


            {/* View expense button functionality */}
            { viewExpenseBtn && <Chart expenses={FilteredExpenses} onYearChangeHandler={onYearChangeHandler}/> }
            { viewExpenseBtn && <Expenses filteredExpenses={FilteredExpenses} /> }
            
  


  
        </div>
    )
}

export default HomePageButton;