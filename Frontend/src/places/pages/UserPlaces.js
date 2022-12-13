import React from "react";


import PlaceList from "../components/PlaceList";
const PLACES=[
    {id:'p1',title:'Taj Mahal', description:'Seventh Wonder of The World', imgUrl:'https://lh5.googleusercontent.com/p/AF1QipNjQ5SJFQ43S6nQHYkSflVjCaHqQGQdS8eEIL1f=w408-h277-k-no',address :'Agra',
    location:{
        lat:27.1751825,lng:78.0397837
    },
    creator:'u1'},
    {id:'p2',title:'Golden Gate Bridge', description:'A giant beautiful bridge', imgUrl:'https://lh5.googleusercontent.com/p/AF1QipN0-mJ4M1ftzod1vtrdwMyE2fmmqxGdPxnvQMH4=w408-h306-k-no',address :'San Francisco',
    location:{
        lat:27.1751825,lng:78.0397837
    },
    creator:'u2'}
];
const UserPlaces=()=>{
    return(
        <PlaceList items={PLACES}/>
        // <h1>Working</h1>
    );  
};
export default UserPlaces;