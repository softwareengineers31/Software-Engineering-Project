import {useState} from "react";

function properties() {

}

function HousingSearch() {
    const [filters, setFilters] = useState({
        location: "",
        propertyType: "",
        amenities: [],
        priceRange: [0, 2000],
        bedrooms: "",
        bathrooms: "",
        moveInDate: "",
        leaseDuration: "",
        distanceFromSchool: "",
    });

    const [results, setResults] = useState(properties);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSearch = () => {
        let properties;
        const filteredResults = properties.filter((property) => {
            const {
                location,
                propertyType,
                priceRange,
                bedrooms,
                moveInDate,
                leaseDuration,
                distanceFromSchool,
            } = filters;

            return (
                (!location || property.location.includes(location)) &&
                (!propertyType || property.propertyType === propertyType) &&
                (priceRange[0] <= property.price && property.price <= priceRange[1]) &&
                (!bedrooms || property.bedrooms === parseInt(bedrooms)) &&
                (!moveInDate || property.moveInDate >= moveInDate) &&
                (!leaseDuration || property.leaseDuration === leaseDuration) &&
                (!distanceFromSchool ||
                    property.distanceFromSchool <= parseInt(distanceFromSchool))
            );
        });

        setResults(filteredResults);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Student Housing Search</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                {/* Search Form */}
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={filters.location}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Property Type</label>
                        <select
                            name="propertyType"
                            value={filters.propertyType}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        >
                            <option value="">Any</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Studio">Studio</option>
                            <option value="House">House</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Price Range</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                name="minPrice"
                                placeholder="Min"
                                value={filters.priceRange[0]}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        priceRange: [e.target.value, filters.priceRange[1]],
                                    })
                                }
                                className="w-1/2 p-2 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="number"
                                name="maxPrice"
                                placeholder="Max"
                                value={filters.priceRange[1]}
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        priceRange: [filters.priceRange[0], e.target.value],
                                    })
                                }
                                className="w-1/2 p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                        <input
                            type="number"
                            name="bedrooms"
                            value={filters.bedrooms}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Move-in Date</label>
                        <input
                            type="date"
                            name="moveInDate"
                            value={filters.moveInDate}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Lease Duration</label>
                        <input
                            type="text"
                            name="leaseDuration"
                            value={filters.leaseDuration}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Distance from School (km)</label>
                        <input
                            type="number"
                            name="distanceFromSchool"
                            value={filters.distanceFromSchool}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex-1 flex justify-end">
                        <button
                            onClick={handleSearch}
                            className="w-full md:w-auto bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((property) => (
                    <div key={property.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold">{property.title}</h3>
                        <p className="text-sm text-gray-600">{property.location}</p>
                        <p className="text-gray-700 mt-2">${property.price}/month</p>
                        <p className="text-gray-500 text-sm">
                            {property.bedrooms} Bed / {property.bathrooms} Bath
                        </p>
                        <p className="text-gray-500 text-sm">Move-in Date: {property.moveInDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HousingSearch;
