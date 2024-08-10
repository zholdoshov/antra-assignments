import React, { useState } from 'react'

export default function WishList() {
  const[wishlist, setWishList] = useState(['hello', 'book']);
  return (
    <div>
      <h3>My reading wishlist({wishlist.length})</h3>
      <ul>
        {wishlist.map((wish) => {
          return <div key={wish}>
            <li>{wish}</li>
            <button>delete</button>
            </div>
        })}
      </ul>
    </div>
  )
}
