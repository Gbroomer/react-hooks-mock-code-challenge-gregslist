import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListing] = useState([])
  const [unfilteredListings, setUnfilteredListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(posts => {
        const modifiedPosts = posts.map(post => {
          return {
            ...post,
            favorite: false
          }
        })
        setListing(modifiedPosts)
        setUnfilteredListings(modifiedPosts)
      })
  }, [])

  useEffect(() => {
    console.log(listings)
  }, [listings])

  function addFavorite(currentListing) {
    console.log(currentListing)
    if (currentListing.favorite === false) {
      const modifiedPosts = listings.map(post => {
        if (currentListing.id === post.id) {
          return {
            ...post,
            favorite: true
          }
        } return post
      })
      setListing(modifiedPosts)
    } else {
      const modifiedPosts = listings.map(post => {
        if (currentListing.id === post.id) {
          return {
            ...post,
            favorite: false
          }
        } return post
      })
      setListing(modifiedPosts)
    }
  }

  function trashCan(currentListing) {
    const listId = currentListing.id
    setListing((listings) => listings.filter((list) => list !== currentListing))
    setUnfilteredListings(listings)
    // fetch(`http://localhost:6001/listings/${listId}`, {
    //   method: 'DELETE',
    //   header: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(currentListing)
    // })
  }
  function search(target) {
    setListing(unfilteredListings)
    if(target !== '') {
      setListing((listings) => listings.filter((list) => list.description.toLowerCase().includes(target.toLowerCase())))
    }
  }
  return (
    <div className="app">
      <Header search = {search}/>
      <ListingsContainer listings={listings} addFavorite={addFavorite} trashCan={trashCan} />
    </div>
  );
}

export default App;
