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

    const deleteProduct = (index) => {
        // Confirm user's intention to delete
        const canDelete = window.confirm("Are you sure you want to delete this product?") //fara window iniante de confirm era eroarw
        if (canDelete) {
            // Create a new array without the deleted product
            const updatedProducts = [...products];
            updatedProducts.splice(index, 1);//simplu splice in React nu merge, ca splice modifies the array in-place. However, React prefers immutability, so you should avoid mutating the state directly. Instead, you should create a new array without the deleted product and then update the state with that new array. Asa am creat la inceput o constanta ma sus

            // Update the state with the new array
            setProducts(updatedProducts);
        }
    }


    return (
        <div>
            <section>
                <button><Link to={'orders/'}>See orders</Link></button>
            </section>
            
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
                                //mai tarziu am adaugat la argument si index pentru a-l insera la Delete btn, pentru ca altfel stergea random products
                                products.map((product, index) => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.category}</td>
                                            <td>{product.price}</td>
                                            <td>{product.originCountry}</td>
                                            <td>
                                                <button><Link to={'modify/' + product.id}>Modify</Link></button>
                                                <button onClick={() => deleteProduct(index)}>Delete</button>
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
                <button>
                    <Link to={'modify/null'}>Add new products</Link>
                </button>
            </section>

            <section>
                <h1>Filter section</h1>
            </section>


        </div>
    );
}

export default Main;