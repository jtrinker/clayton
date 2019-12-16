import React from 'react';
import { useState } from 'react';
import listings from './seed.js';
import SortBy from './SortBy';
import HomeListingCard from './HomeListingCard';
import LoadListings from './LoadListings';
import './App.css';

const Listings = () => {
  const [ sortedBy, setSort ] = useState([1,-1]);
  const [ listingsData, setListings] = useState(listings);
  const [ homesDisplayed , setDisplayNumber ] = useState(9);

  const homeArray = listingsData.sort((a, b) => (a.startingPrice > b.startingPrice) ? sortedBy[0] : sortedBy[1]).slice(0, homesDisplayed);
  const homes = homeArray.map((home, index) => (
    <div className="card-position">
      <div className="col xl4 l6 m6 s12" key={index}>
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
    </div>
  ));

  return (
    <div>
      <div className="row hide-on-med-and-down">
        <div className="listings-subheader">
          <h3 className="left available-homes">{`${listingsData.length} `}homes available</h3>
          <div className="right dropdown-container">
            <SortBy homesList={homeArray} setSort={setSort} />
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