import { Link, useParams } from "react-router-dom";

function Modify() {
    const {id} = useParams();//am creat acest hook care urmareste ce id este dupa slash in adress care este utilizat mai jos in <h1>. Daca id la adress va fi null se va afisa titlul "Add new product"
    return (
        <div>
            <Link to="/">Back to shopping</Link>
            <h1>{id === 'null' ? 'Add new ' : 'Modify '}product</h1>
        </div> //Afisam conditional textul in h1 in dependenta de valoarea id
    );
}

export default Modify; 