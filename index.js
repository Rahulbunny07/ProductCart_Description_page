const data = [
    {
        id:1,
        name: "Product 1",
        price:"100",
        description:"Dell laptop",
        img: "https://place-hold.it/500x500&text=product-1",
        addtoCart: true,
    },
    
    {
        id:2,
        name:"Product 2",
        price:"100",
        description:"Dell laptop",
        img:"https://place-hold.it/500x500&text=product-2"
    },

    {
        id:3,
        name:"Product 3",
        price:"100",
        description:"Dell laptop",
        img:"https://place-hold.it/500x500&text=product-3"
    },

    {
        id:4,
        name:"Product 4",
        price:"100",
        description:"Dell laptop",
        img:"https://place-hold.it/500x500&text=product-4"
    },

    {
        id:5,
        name:"Product 5",
        price:"100",
        description:"Dell laptop",
        img:"https://place-hold.it/500x500&text=product-5"
    },

    {
        id:6,
        name:"Product 6",
        price:"100",
        description:"Dell laptop",
        img:"https://place-hold.it/500x500&text=product-6"
    },

]

var productCartRow = document.getElementById("product-cart-row");

data.forEach((elem) => {
    let col1 = document.createElement("div");
    col1.setAttribute("class", "col-4 mb-4");
    
    let card = document.createElement("div");
    card.setAttribute("class", "card h-100");

    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.src = elem.img;

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let h2 = document.createElement("h2");
    h2.innerHTML = elem.name;

    let p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.innerHTML = elem.description;

    let h5 = document.createElement("h5");
    h5.innerHTML="Price  " + elem.price;

    let button = document.createElement("button")
    button.setAttribute("class", "btn btn-primary btn-disabled")
    button.innerHTML = "Add to cart"

    cardBody.append(h2, p, h5, button);

    card.append(cardImg, cardBody);

    col1.append(card);
 
    productCartRow.append(col1);

});














// var container = document.createElement("div");
// container.setAttribute("class","container");

// var row = document.createElement("div")
// row.setAttribute("class", "row");

// var col1 = document.createElement("div");
// col1.setAttribute("class", "col-4");
// col1.innerHTML = " Column 1 ";

// var col2 = document.createElement("div");
// col2.setAttribute("class","col-4");
// col2.innerHTML = " Column 2 ";

// var col3 = document.createElement("div");
// col3.setAttribute("class","col-4");
// col3.innerHTML = " Column 3 ";

// row.append(col1, col2, col3);

// container.append(row);

// document.body.append(container);