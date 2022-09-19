import React, { useState } from "react";
import DropDown from "./DropDown";
import Convert from "./Convert"; //component name must start from an uppercase letter

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const languages = [
    {
        label : 'Africaans',
        value : 'af'
    },
    {
        label : 'Arabic',
        value : 'ar'
    },
    {
        label : 'Hindi',
        value : 'hi'
    }
];
const Translate = () => {

    const [selected,setselected] = useState(languages[0]);
    const [text,settext] = useState('');
    // console.log(text+ " "+selected.label);
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => settext(e.target.value)}/>
                </div>
            </div>
            <DropDown options={languages} selected={selected} onSelectedChange={(selected)=> setselected(selected)}/>
            <hr/>
            <h3>output</h3>
            <Convert language={selected} text={text}/>
        </div>
    );
}
export default Translate;