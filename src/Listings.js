import React from 'react';
import { useState } from 'react';
import listings from './seed.js';
import SortBy from './SortBy';
import HomeListingCard from './HomeListingCard';
import LoadListings from './LoadListings';
import './App.css';

const Listings = () => {
  const [ sortedBy, setSort ] = useState(1);
  const [ listingsData, setListings] = useState(listings);
  const [ homesDisplayed , setDisplayNumber ] = useState(9);

  let orderedData = [];

  if (sortedBy === 1) {
    orderedData = listings.sort((a, b) => (a.startingPrice > b.startingPrice) ? 1 : -1);
  } else if (sortedBy === 2) {
    orderedData = listings.sort((b, a) => (b.startingPrice > a.startingPrice) ? 1 : -1);
  }

  const homeArray = orderedData.slice(0, homesDisplayed);
  const homes = homeArray.map((home, index) => (
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
          <div className="right dropdown-container">
            <SortBy sortedBy={sortedBy} setSort={setSort} />
          </div>
        </div>
      </div>
      <div className="row">
        {homes}
      </div>
      <div className="row">
        <LoadListings
          listings={listingsData}
          homesList={homeArray}
          setDisplayNumber={setDisplayNumber}
          numberOfHomesDisplayed={homesDisplayed}
        />
      </div>
    </div>
  )
}

export default Listings;