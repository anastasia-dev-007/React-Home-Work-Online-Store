import { Link } from "react-router-dom";



function Orders() {
    return (
        <div>
            <header>
                <Link to="/">Back to shopping</Link>
            </header>
            <h1>Orders</h1>

            <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Price</th>
            <th>Origin Country</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
         
    </tbody>
</table>
        </div>
    )
}

export default Orders;