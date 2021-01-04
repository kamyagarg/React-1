import React from 'react';
import { Navbar } from './Navbar.js';
import './webpage.css';



export class Webpage extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        return(
            <div>
                <Navbar />
                <Main />
                <Footer />
            </div>
        );
    }
}
