import { useEffect, useState } from "react";
import { getProducts } from "../products.service";
import { Link } from "react-router-dom";

function Main() {
    // Define a state variable called "products" and a function to set its value
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // va scoate lista de produse la prima randare
        const data = getProducts();

        setProducts(data);// Update the "products" state with the fetched data
    }, []);// The empty array [] means this effect runs once when the component mounts

    return (
        <div>
            <h1>Products list</h1>

            {//tabelul va fi randat doar daca lista de produse va fi not empty
                products.length > 0 && (
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
                            {//am creat loop pentru a afisa fiecare rand in tabel care trebuie sa aiba un key obligatoriu
                                products.map(product => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.category}</td>
                                            <td>{product.price}</td>
                                            <td>{product.originCountry}</td>
                                            <td>
                                                <Link to={'modify/' + product.id}>Modify</Link>
                                                <button>Delete</button>
                                                <button>Order</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                )
            }

            <section>
                <h1>Filter section</h1>
            </section>

            <section>
                <Link to={'modify/null'}>Add new products</Link>
                <Link to={'orders/'}>See orders</Link>
            </section>
        </div>
    );
}

export default Main;