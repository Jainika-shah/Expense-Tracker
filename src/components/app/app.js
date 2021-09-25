import React from 'react';
import './app.scss';

// components-
import Header from '../header/headerComponent';
import HomePageButton from '../homePageButtons/homePageBtnComponent';


function App(){
    return(
    <div>
        <Header title='Expense Tracker'/>
        <HomePageButton/>       
    </div>
    )
}

export default App;