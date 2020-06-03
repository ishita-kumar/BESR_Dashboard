import React, { Component } from 'react';

class HorizontalNav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" >
                             
                            </button>
                           
                        </div>
                        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="dropdown">
                                <button>hi</button>
                                    <ul className="dropdown-menu">
                                        <li><button>hi</button></li>
                                       
                                    </ul>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HorizontalNav;