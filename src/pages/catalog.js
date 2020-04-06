import React from "react";
import {SearchCatalog} from "../components";
import '../styles/catalog.css'

export const Catalog = () => {
    return(
        <div className={'page catalog'}>
            <header><h1>Catalog</h1></header>
            <SearchCatalog/>
        </div>
    )
};