
import React from "react"
import rendererCardInfo from "./renderCardInfo";

const dynamicCardConfig = [{
      component: "card",
      key:1,
      children: [{
          component: "body",
          key:2,
          children: [{
              component: "title",
              key:3,
              children: "This is a title"
            },{
              component: "subtitle",
              key:4,
              children: "This is the subtitle"
            },{
              component: "text",
              key:5,
              children:"Some quick example text to build on the card title and make up the bulk of the card's content."
            }]
        }]
    }];

const DynamicComponent = () => {
    return(<div className="card-container">
        
            {dynamicCardConfig.map( cardInfo => {
               
               return rendererCardInfo(cardInfo) })}
    </div>)
}

export default DynamicComponent;