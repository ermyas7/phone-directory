import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Header(props){
    return (
        <div className="header">
            <h1 className="header-heading" >{props.heading.toUpperCase()} </h1>
        </div>
    );
}

class PhoneDirectory extends React.Component{
    render(){
        
        
        return(
            <div className="main-container">
                <div className="component-container">
                    <Header heading="Phone Directory"/>
                    <div className="component-body-container">
                        <a href="/add" className="add">Add</a>
                        <div className="grid-container heading-container">
                            <h3>Name</h3>
                            <h3>Phone</h3>
                        </div>
                        <div className="grid-container">
                            <p>Ermyas</p>
                            <p>1224343434</p>
                            <p className="delete">Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        );   
    }
}
//======================================

ReactDOM.render(
    <PhoneDirectory/>,
    document.getElementById('root')
);