import React from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({ listings, addFavorite, trashCan }) {
  
  function makeCards() {
    if(listings.length === 0) {
      return null
    }
    return (
    listings.map((list) => (
      <ListingCard list = {list} key = {list.id} addFavorite = {addFavorite} trashCan = {trashCan}/>
    )))
  }

  return (
    <main>
      <ul className="cards">
        {makeCards()}
      </ul>
    </main>
  );
}

export default ListingsContainer;
