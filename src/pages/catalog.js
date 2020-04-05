import React from "react";
import {CATALOG, Card} from "../components";
import '../styles/catalog.css'

export const Catalog = () => {
    return(
        <div className={'page catalog'}>
            <header><h1>Catalog</h1></header>
            <main>
                {CATALOG.map((e, i) => {
                    return <Card key={i} src={e.ref} artist={e.artist} name={e.name} difficulty={e.difficulty} origin={e.origin} people={e.people}/>
                })}
            </main>
        </div>
    )
};