import React, { useState } from "react";

function Filters({ products, renderProducts }) {
    //Filter section which contains interconnected filters that update each other as the user interacts with them

    // State to store the filtered products
    const [filteredProducts, setFilteredProducts] = useState([]);

    // State to store the filter criteria
    const [currentFilters, setCurrentFilters] = useState({
        name: "",
        minPrice: "",
        maxPrice: "",
        category: "",
        originCountry: "",
    });

    // Function to apply filters and update filteredProducts
    const applyFilters = () => {
        const updatedFilteredProducts = products.filter((product) => {
            let isAvailable = true;

            if (currentFilters.name) {
                isAvailable = product.name.toLowerCase().includes(currentFilters.name.toLowerCase());
            }//am schimbat startsWith cu includes pentru ca la cautarea"sui..." dadea doar "suit", dar nu si "bodysuit"

            if (currentFilters.minPrice && currentFilters.maxPrice) {
                isAvailable =
                    isAvailable &&
                    product.price >= parseFloat(currentFilters.minPrice) &&
                    product.price <= parseFloat(currentFilters.maxPrice);)
    }

    if (currentFilters.category) {
        isAvailable = isAvailable && product.category === currentFilters.category;
    }

    if (currentFilters.originCountry) {
        isAvailable = isAvailable && product.originCountry === currentFilters.originCountry;
    }

    return isAvailable;

};
// Update the filtered products
setFilteredProducts(updatedFilteredProducts);

// Render the filtered products
renderProducts(updatedFilteredProducts);
    };

    

// Handle input changes and update filter criteria
const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCurrentFilters({
        ...currentFilters,
        [name]: value,
    });
};


}
return (
    <div>
        <div>
            <label>Search by name: </label>
            <input id="byName" type="text" name="byName" />
        </div>

        <div>
            <p>Define interval price from $
                <input
                    id="minPrice"
                    type="text"
                    size="5"
                    name="minPrice"
                    value={currentFilters.minPrice}
                    onChange={handleInputChange} />
                until $
                <input
                    id="maxPrice"
                    type="text"
                    size="5"
                    name="maxPrice"
                    value={currentFilters.maxPrice}
                    onChange={handleInputChange} />
            </p>
        </div>

        <div>
        <button onClick={applyFilters}>Apply Filters</button>
      </div>

    

        <div>
            <label>Filter by Origin Country:</label>
            <select name="originCountry" id="originCountry"></select>
        </div>


        <div>
            <button>Reset Filters</button>
        </div>

        <section>
            <h5>Filter by other criteria</h5>

            <p>Most expensive product: <button>Filter</button></p>

            <p>Cheapest product: <button>Filter</button></p>
        </section>
    </div>
)
}

export default Filters;