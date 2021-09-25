import ExpenseFilter from '../../expenseFilter/expenseFilterComponent';
import ChartBar from '../expenseGraphBar/expenseGraphBarComponent';
import './expenseGraphChartStyles.scss';

const ExpenseChart = ({datapoints, onYearChangeHandler}) =>{
    let count = 0;

    // calculates the max value
    const datapointValues = datapoints.map((item) => item.value);
    const totalMax = Math.max(...datapointValues)
    
    return (
       <div> 
            <div className='chart-container'>
            
            {/* creating chart bars */}
                {datapoints.map((datapoint) => {
                return <ChartBar 
                        key={count++}
                        value={datapoint.value} 
                        maxValue={totalMax}
                        label={datapoint.label}
                    />
                }
                )}

            </div>

            <div className='details'>
                <p>Year At A Glance</p>
                <ExpenseFilter onYearChangeHandler={onYearChangeHandler} /> 
            </div>
        </div>
    )
}
export default ExpenseChart;