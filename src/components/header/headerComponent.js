import './headerStyles.scss';

function Header({title}){
    return(
        <div className='heading'>
            <h1>{title}</h1>
        </div>
    )
}
export default Header;