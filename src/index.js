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

function ContactForm(props){
    return(
        <div className="person">
          <a href="#" className="person-back">Back</a>  
          <form className="person-contact">
            <div className="person-contact-name">
                <label for="name" className="person-contact-name-label">Name:</label>
                <input type="text" className="person-contact-name-input" id="name"/>
            </div>
            <div className="person-contact-number">
                <label for="number" className="person-contact-number-label">
                    Phone:
                </label>
                <input type="text" className="person-contact-number-input" id="number"/>
            </div>
            <div className="person-value">
                <p className="person-value-subscribe">Subscriber to be added:</p>
                <p className="person-value-name">Name:</p>
                <p className="person-value-number">Phone:</p>
            </div>
            <a href="#" class="add">Add</a>
        </form>  
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