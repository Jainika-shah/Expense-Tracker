import './expenseFilterStyles.scss';
const ExpenseFilter = ({onYearChangeHandler}) => {

    const onSelectHandler = (event) => {
        onYearChangeHandler(event.target.value);
    }

    return (
        <div className="dropdown">
            
            <select className="dropbtn" name="years" onChange={onSelectHandler} id="years">
                <option className="dropdown-content" value="2019">Year 2019</option>
                <option className="dropdown-content" value="2020">Year 2020</option>
                <option className="dropdown-content" value="2021">Year 2021</option>
                <option className="dropdown-content" value="2022">Year 2022</option>
            </select>
        </div>
    )
}
export default ExpenseFilter;