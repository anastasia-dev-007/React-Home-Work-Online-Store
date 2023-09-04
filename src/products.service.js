// Initial product data
const products = [
    {
        id: 1001,
        name: "dress",
        category: "Women Clothes",
        price: 300,
        originCountry: "Italy",
    },
    {
        id: 1002,
        name: "coat",
        category: "Women Clothes",
        price: 800,
        originCountry: "France",
    },
    {
        id: 1003,
        name: "jeans",
        category: "Men Clothes",
        price: 700,
        originCountry: "Italy",
    },
    {
        id: 1004,
        name: "jacket",
        category: "Men Clothes",
        price: 500,
        originCountry: "Italy",
    },
    {
        id: 1005,
        name: "romper",
        category: "Baby Clothes",
        price: 100,
        originCountry: "France",
    },
    {
        id: 1006,
        name: "sweater",
        category: "Women Clothes",
        price: 400,
        originCountry: "USA",
    },
    {
        id: 1007,
        name: "shirt",
        category: "Men Clothes",
        price: 250,
        originCountry: "England",
    },
    {
        id: 1008,
        name: "onesie",
        category: "Baby Clothes",
        price: 80,
        originCountry: "Germany",
    },
    {
        id: 1009,
        name: "skirt",
        category: "Women Clothes",
        price: 220,
        originCountry: "France",
    },
    {
        id: 1010,
        name: "tie",
        category: "Men Clothes",
        price: 75,
        originCountry: "Italy",
    },
    {
        id: 1011,
        name: "bodysuit",
        category: "Baby Clothes",
        price: 120,
        originCountry: "Spain",
    },
    {
        id: 1012,
        name: "blouse",
        category: "Women Clothes",
        price: 180,
        originCountry: "Spain",
    },
    {
        id: 1013,
        name: "suit",
        category: "Men Clothes",
        price: 900,
        originCountry: "Italy",
    },
    {
        id: 1014,
        name: "socks",
        category: "Baby Clothes",
        price: 15,
        originCountry: "USA",
    },
    {
        id: 1015,
        name: "jumpsuit",
        category: "Women Clothes",
        price: 350,
        originCountry: "France",
    },
    {
        id: 1016,
        name: "vest",
        category: "Men Clothes",
        price: 120,
        originCountry: "England",
    },
    {
        id: 1017,
        name: "hat",
        category: "Baby Clothes",
        price: 30,
        originCountry: "Germany",
    },
    {
        id: 1018,
        name: "dress",
        category: "Baby Clothes",
        price: 350,
        originCountry: "Germany",
    },
    {
        id: 1019,
        name: "leggins",
        category: "Women Clothes",
        price: 380,
        originCountry: "Moldova",
    },
    {
        id: 1020,
        name: "pants",
        category: "Men Clothes",
        price: 260,
        originCountry: "Germany",
    },
];

export const getProducts = () => {
    return products;
}

export const getProductById = (id) => {
    const foundItem = products.find(product => product.id === id);
    //cream o constanta care primeste valorile initiale ale const foundItem, structura generala
    const defaultItem = {
        id: null,
        name: '',
        category: '',
        price: '',
        originCountry: '',
    };

    return foundItem ? foundItem : defaultItem; // daca item a fost gasit il returnam pe el, daca nu, returnam defauldItem
}

export const saveProduct = (product) => {//va adauga studenntul in lista initiala si va modifica studentul existent daca e cazul
    //verificam: daca studentul are id, atunci va trebui sa gasim studentul si sa ii rescriem proprietatile cu ceea ce primim in proprietati ceea ce inseamna ca el a fost modificat, iar daca id este null trebuie sa setam un nou id si sa-l adaugam in const product = [...array acel lung]
    if (!product.id) {//daca nu avem asa produs...
        product.id = products.length + 1;//...cream id nou
        products.push(product);//...si il adaugam in arrau products
    } else {
        const productIndex = products.findIndex(item => item.id === product.id);//acum avand indexul putem inlocui in lista de produse produsul care l-am salcat dupa ce l-am editat. 
        products[productIndex] = product; //Acum acestui index i se atribui valorile modificate din formular
    }

}