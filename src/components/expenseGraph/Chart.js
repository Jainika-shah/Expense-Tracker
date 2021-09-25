import ExpenseChart from "./expenseGraphChart/expenseGraphChartComponent";

const Chart = ({expenses, onYearChangeHandler}) =>{
    const datapoints = [
        {label : 'Jan', value : 0 },
        {label : 'Feb', value : 0},
        {label : 'Mar', value : 0},
        {label : 'Apr', value : 0},
        {label : 'May', value : 0},
        {label : 'Jun', value : 0},
        {label : 'Jul', value : 0},
        {label : 'Aug', value : 0},
        {label : 'Sep', value : 0},
        {label : 'Oct', value : 0},
        {label : 'Nov', value : 0},
        {label : 'Dec', value : 0},
        
    ];
    
    // assigns the value to all months after adding the amounts.
   expenses.forEach(exp => {
       const expMonth = exp.date.getMonth();
       datapoints[expMonth].value += exp.amount;
   });

    return(
        <ExpenseChart datapoints={datapoints} onYearChangeHandler={onYearChangeHandler}/>
    )
}
export default Chart;