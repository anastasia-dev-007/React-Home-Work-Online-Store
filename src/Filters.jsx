function Filters() {
    return (
        <div>
            <div>
                <label>Search by name: </label>
                <input id="byName" type="text" name="byName" />
            </div>

            <div>
                <p>Define interval price from $
                    <input id="minPrice" type="text" size="5" />
                    until $
                    <input id="maxPrice" type="text" size="5" />
                </p>
            </div>

            <div>
                <label>Filter by Category:</label>
                <select name="category" id="categoryFilter">
                </select>
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