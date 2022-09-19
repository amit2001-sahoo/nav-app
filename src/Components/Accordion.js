
import React , {useState} from "react";
 export default ({items}) => {
    const [activeIndex,setActiveIndex] = useState(null);
    const renderItems = items.map((item,index) => {
        const active = (index == activeIndex) ? "active" : "";
       return  <React.Fragment key = {item.title}>
        <div className = {`title ${active}`}
            onClick = {() => {
                setActiveIndex(index);
            }}>
            <i className="dropdown icon"></i>
            {item.title}
        </div>
        <div className={`content ${active}`}>
            <p>{item.body}</p>
        </div>
        </React.Fragment>
       });

        return <div className="ui styled accordion">
            {renderItems}
        </div>
 }
    