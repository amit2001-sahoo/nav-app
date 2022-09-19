import React,{useState,useEffect} from "react";
import axios from "axios";

const Search = () => {
    const [term,setTerm] = useState('thor');  //we can also initialize with a default search term so that the search method should do a genuine search
    const [results,setresults] = useState([]);
    // console.log(results);
    useEffect(() => {
        const search = async () => {
             const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
        {
            params : {
                action : 'query',
                list : 'search',
                origin : '*',
                format : 'json',
                srsearch : term
            }
        });
        setresults(data.query.search);
    }
    //for the very first time
    if(term && !results.length){
        search();
    }
    else{
        //this part is the part in which we send requests to the api in a specific amount of time not everytime if there is a change in the input.
      const tid = setTimeout(() => {if(term)
      {
        search();  
      }},1000);  

      return () => {
        clearTimeout(tid);
      };
    }
    },[term]);

    const renderedresults = results.map((result) => {
        return (
            <div  className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                        </div>
                </div>
                <span dangerouslySetInnerHTML={{__html : result.snippet}}></span>
            </div>
        );
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label for="">Search</label>
                    <input className = "input" value = {term} onChange={(e) => {
                        setTerm(e.target.value);
                    }}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedresults}
            </div>
        </div>
    );
}

export default Search;