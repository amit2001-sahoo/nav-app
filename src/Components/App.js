import React, { useState } from "react";
import Search from "./Search";
import Accordion from "./Accordion";
import DropDown from "./DropDown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
    {
        title : "what is react?",
        body : "modern javascript framework used by most of the developers across the globe"
    },
    {
        title : "why react",
        body : "as it is the favorite among the engineers for its reusability and efficiency"
    },
    {
        title : "how to use",
        body : "anurag dont know how to use the react he only knows how to have sex with cheenu"
    }
];

const options = [
    {
        label : "the color red",
        value : 'red'
    },
    {
        label : "the color green",
        value : 'green'
    },
    {
        label : 'a pinch of blue',
        value : 'blue'
    }
];


const App = () => {
    const [selected,setselected] = useState(options[0]);
    return(
        <div>
            <Header/>
            <Route path='/'>
                <Accordion items={items}/>   
                {/* the component will be automatically passed as an arguement to the route as children and the path as path */}
            </Route>
            <Route path='/list'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
            <DropDown label={'select a color'} options={options} selected={selected} onSelectedChange={(selected) => setselected(selected)}/>
            </Route>
            <Route path='/translate'>
                <Translate/>
            </Route>
        </div>
    );
}

export default App;