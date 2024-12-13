const storeproducts = [
    {
        id: 1,
        imgPath: "../assets/k.png",
        description: "Loveseat sofa",
        price: "$24.99"
    },
    {
        id: 2,
        imgPath: "../assets/y.png",
        description: "Table lamp",
        price: "$24.55"
    },
    {
        id: 3,
        imgPath: "../assets/q.png",
        description: "Beige table lamp",
        price: "$24.99"
    },
    {
        id: 4,
        imgPath: "../assets/w.png",
        description: "Bamboo basket",
        price: "$30,67"
    },
]
let containerElem = document.getElementById("new");

// mapping through an array
storeproducts.map((product) => {
    containerElem.innerHTML += `
      <div class="card">
                <img src="${product.imgPath}" alt="" class="card-img">
                <h4 class="card-description">${product.description}</h4> 

                <p class="card-price">${product.price}</p>

            </div>`
})


const names = ["caleb", "great", "roland", "mmesoma", "wizzy", "nazo", "divine", "james", "john", "king"];
names[0] = "joshua";
names.push("queen","king");
names.pop();
names.unshift("sam","happy");
names.shift();
names.reverse();
let selectedNames = names.slice(1,4);

const ulElem = document.getElementById("student-list");

selectedNames.map((item) => {
    ulElem.innerHTML += `
    <li> ${item} </li>`
})

const footballclubs = ["chelsea","liverpool","madrid"]