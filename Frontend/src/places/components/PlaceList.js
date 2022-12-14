import React from "react";

import './PlaceList.css';
import Card from "../../shared/components/UIElement/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";
const PlaceList=(props)=>{
   if(props.items.length===0)
   {
        return(
            <div className="place-list center">
                <Card>
                    <h2>No Places Found. Create One?</h2>
                    <Button inverse>Share</Button>
                </Card>
            </div>
        );
   }
   return <ul className="place-list">
        {props.items.map(place=>
            <PlaceItem key={place.id} id={place.id} image={place.imgUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creator} coordinates={place.location}/> 
        )};
   </ul> 
}

export default PlaceList;