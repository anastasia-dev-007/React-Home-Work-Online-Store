import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById, saveProduct } from "../products.service";

function Modify() {
    const { id } = useParams();//am creat acest hook care urmareste ce id este dupa slash in adress care este utilizat mai jos in <h1>. Daca id la adress va fi null se va afisa titlul "Add new product"
    const [fieldsValue, setFieldsValue] = useState(null);//acest state va fi utilizat pentru a lucra cu formularul. Use state este null, ceea ce inseamna ca nu este randata formularul pana cand functia useEffect nu este executata. Iar cum era pana acum cu obiect gol nu ar fi lucrat, pentru ca asta ar inseamna ca si asa e true
    const [message, setMessage] = useState('');

    //vom utiliza hook pentru a ne redirectiona pe pagina principala dupa ce salvam modificarile
    const navigate = useNavigate();//l-am utilizat in handleSave

    //adaugam useEffect pentru a scoate utilizatorul dupa id, vom expecuta functia atunci cand id isi modifica valoarea, de aceea il punem in [id], iar la argumentul getProductById, id este cu + pentru ca el este initial string dar noua ne trebuie number
    useEffect(() => {
        const item = getProductById(+id);

        setFieldsValue(item);//aceasta functie returneaza fie item gasit, fie item gol
    }, [id]);

    //function to handle changes in form input elements and update the state accordingly.
    // handleChange function is called, it extracts the name and value from the input element that triggered the change and then updates the state (fieldsValue) by creating a new object that includes the updated field with the new value while keeping all other fields intact. This approach ensures immutability and allows React to efficiently manage component re-renders based on state changes. We added this function onChnage in forms below
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFieldsValue({ ...fieldsValue, [name]: value })//This line is where the state update takes place. It uses the setFieldsValue function to update the state. 
    };

    const handleSave = () => {
        if (!fieldsValue.name || !fieldsValue.category || !fieldsValue.price || !fieldsValue.originCountry) {
            setMessage('Please fill in form fields!')
        } else {
            saveProduct(fieldsValue); //am chemat functia din products.service.js
            setMessage('Product has been saved!');//se va afisa mesaj cand functia va fi executata cu succes
            setTimeout(() => navigate('/'), 1000)//asteptam o secunda dupa indicam unde vrem sa mergem noi ('/')
        }
    }

    const handleReset = () => {
        setFieldsValue(getProductById(+id));//pentru a scoate valoarea initiala, si nu atribuim (null), (id+) pentru ca la reset daca nimic nu schimbam sa nu se stearga toate fields
    }

    return (
        <div>
            <Link to="/">Back to shopping</Link>
            <h1>{id === 'null' ? 'Add new ' : 'Modify '}product</h1>

            {
                //randam forma doar cand produsul va avea date
                //scoatem elementul form si lasam fragment pentru ca de altfel apare problema la submit
                //prima linie cu messaj inseamna ca daca avem mesaj atunci il afisam
                fieldsValue && (
                    <>
                        {message && <p style={{ color: 'green' }}>{message}</p>}

                        <div>
                            
                            <input type="text" placeholder="Product name" name="name" value={fieldsValue?.name} onChange={handleChange} />
                            <input type="text" placeholder="Product category" name="category" value={fieldsValue?.category} onChange={handleChange} />
                            <input type="text" placeholder="Product price" name="price" value={fieldsValue?.price} onChange={handleChange} />
                            <input type="text" placeholder="Product Origin Country" name="originCountry" value={fieldsValue?.originCountry} onChange={handleChange} />
                        </div>

                        <div>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={handleReset}>Reset</button>
                        </div>
                    </>
                )
            }

        </div> //Afisam conditional textul in h1 in dependenta de valoarea id
        // from input - value={product?.name}: This attribute sets the value of the input field. It's using curly braces {} to insert a JavaScript expression. In this case, it's trying to set the input's value to the name property of an object called product. The ?. is the optional chaining operator, which means that if product is null or undefined, the code won't throw an error; it will simply result in an empty input field.
    );
}

export default Modify; 