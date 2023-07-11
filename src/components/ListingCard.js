import React from "react";

function ListingCard({ list, addFavorite, trashCan }) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        {list.favorite ? (
          <button className="emoji-button favorite active" onClick = {() => addFavorite(list)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick = {() => addFavorite(list)}>☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button className="emoji-button delete" onClick = {() => trashCan(list)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
