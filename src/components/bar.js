import React from "react";
import {Link, NavLink} from "react-router-dom";

export const Bar = () => {
    return(
        <div className={'bar'}>
            <main>
                <nav>
                    <ul>
                        <li><Link to="/">Just Dance</Link></li>
                        <li><NavLink to="/home" activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to="/catalog" activeClassName='active'>Catalog</NavLink></li>
                        <li><NavLink to="/results" activeClassName='active'>Results</NavLink></li>
                    </ul>
                </nav>
            </main>
        </div>
    )
};