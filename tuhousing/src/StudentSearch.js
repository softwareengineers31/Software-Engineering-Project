import React, { usestate } from "react";

const StudentHousingSearch = () => {
  const [searchCriteria, setSearchCriteria] = usestate("");
  const [listings, setListings] = usestate([]);
  const [noResults, setNoResults] = usestate(false);

  const handleSearch = () => {
    const results = mockSearchListings(searchCriteria);

    if (results.length > 0) {
      setListings(results);
      setNoResults(false);
    } else {
      setListings([]);
      setNoResults(true);
    }
  };
  
// EXAMPLE
//Locations are unknown
  const mockSearchListings = (criteria) => {
    const allListings = [
      { id: 1, title: "Apartment", location: "...", price: 1200 },
      { id: 2, title: "House", location: "...", price: 1500 },
      { id: 3, title: "Affordable Room", location: "...", price: 600 }
    ];

    return allListings.filter(listing =>
      listing.title.toLowerCase().includes(criteria.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Student Housing Search</h1>
      <input
        type="text"
        value={searchCriteria}
        onChange={(e) => setSearchCriteria(e.target.value)}
        placeholder="Enter search criteria"
      />
      <button onClick={handleSearch}>Search</button>

      {noResults && <p>No listings found. Please adjust your search criteria.</p>}

      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            {listing.title} - {listing.location} - ${listing.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentHousingSearch;
