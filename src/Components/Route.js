import React, { useEffect, useState } from "react";


const Route = ({path,children}) => {
    const [curretnpath,setcurrentpath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setcurrentpath(window.location.pathname); //window.location.pathname gives the url 
        }
        window.addEventListener('popstate',onLocationChange);        
    },[]);
    return(
        curretnpath === path ?
        children :
        null
    )
}
export default Route;