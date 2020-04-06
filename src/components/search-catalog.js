import React, {useEffect, useState} from "react";
import {CATALOG} from "./constants";
import {Card} from "./card";

export const SearchCatalog = () => {
    const [searchInput, updateInput] = useState('');
    const [searchResults, updateResults] = useState(CATALOG);

    useEffect(() => {
        if(searchInput){
            let input = searchInput.toLowerCase();
            const filteredResults = CATALOG.filter(({artist, name, people, origin, difficulty}) =>
                   artist.toLowerCase().indexOf(input) > -1 ||
                   people.toLowerCase().indexOf(input) > -1 ||
                   name.toLowerCase().indexOf(input) > -1 ||
                   origin.toString().toLowerCase().indexOf(input) > -1 ||
                   difficulty.toLowerCase().indexOf(input) > -1
            );

            updateResults(filteredResults);
        }
    }, [searchInput]);

    return(
        <>
            <input className={'searchbar'} onChange={e => {updateInput(e.target.value)}}/>
            <main>
                {searchResults.map((e, i) => {
                    return <Card key={i} src={e.ref} artist={e.artist} name={e.name} difficulty={e.difficulty} origin={e.origin} people={e.people}/>
                })}
            </main>
        </>

    )
};