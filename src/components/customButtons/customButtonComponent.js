import './customButtonStyles.scss';

function CustomBtn({title, classNames, clickHandler}){
   return (
   <div className='btn'>
    <button onClick={clickHandler} className={classNames}> {title} </button>
   </div>)
}
export default CustomBtn;