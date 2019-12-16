import React from 'react';
import { useState } from 'react';
import listings from './seed.js';
import SortBy from './SortBy';
import HomeListingCard from './HomeListingCard';
import LoadListings from './LoadListings';
import './App.css';

const Listings = () => {
  const [ listingsData, setListings] = useState(listings);
  
  const [ homesDisplayed , setDisplayNumber ] = useState(listingsData.slice(0, 9));
  const homes = homesDisplayed.map((home, index) => (
    <div className="col xl4" key={index}>
      <HomeListingCard 
        name={home.homeName}
        imageUrl={home.imageURL}
        beds={home.beds}
        baths={home.baths}
        isMultiSection={home.isMultiSection}
        sqft={home.sqft}
        startingPrice={home.startingPrice}
      />
    </div>
  ));

  return (
    <div>
      <div className="row">
        <div className="listings-subheader">
          <h3 className="left available-homes">{`${listingsData.length} `}homes available</h3>
          <div className="right">
            <SortBy />
          </div>
        </div>
      </div>
      <div className="row">
        {homes}
      </div>
      <div className="row">
        <LoadListings listings={listingsData} homesDisplayed={homes} setDisplayNumber={setDisplayNumber} />
      </div>
    </div>
  )
}

export default Listings;