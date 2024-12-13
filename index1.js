let reviewContainer = document.getElementById("review-container");
console.log(reviewContainer)
const reviews = [
    {
        id: 1,
        reviewHead: "Rowland smith",
        likes: 4,
        imgSrc: "../assets/avatar_placeholder (1).png",

        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 2,
        reviewHead: "Rowland smith",
        likes: 3,
        imgSrc: "../assets/avatar_placeholder (2).png",
       
        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 3,
        reviewHead: "Rowland smith",
        likes: 4,
        imgSrc: "../assets/avatar_placeholder (4).png",

        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 4,
        reviewHead: "Rowland smith",
        likes: 4,
        imgSrc: "../assets/avatar_placeholder (2).png",

        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 5,
        reviewHead: "Rowland smith",
        likes: 7,
        imgSrc: "../assets/avatar_placeholder (3).png",

        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 6,
        reviewHead: "Roland smith",
        likes: 6,
        imgSrc: "../assets/avatar_placeholder (1).png",

        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 7,
        reviewHead: "Rowlnd smith",
        likes: 3,
        imgSrc: "../assets/avatar_placeholder (2).png",

        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 8,
        reviewHead: "owland smith",
        likes: 5,
        imgSrc: "../assets/avatar_placeholder (4).png",

        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 9,
        reviewHead: "Rowlad smith",
        likes: 2,
        imgSrc: "../assets/avatar_placeholder (1).png",

        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 10,
        reviewHead: "Rowlan smith",
        likes: 3,
        imgSrc: "../assets/avatar_placeholder (3).png",

        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto"

    },
    {
        id: 11,
        reviewHead: "Roland smith",
        likes: 7,
        imgSrc: "../assets/avatar_placeholder (1).png",
        text:
            "I bought it 3 weeks ago and now come back just to say “Awesome  Product”. I really enjoy it. At vero eos et accusamus et iusto",

    },
]

function displayLikes(noOfLikes) {
    let stars = ``; //start with an empty string
    for (let n = 0; n < noOfLikes; n++) {
        stars += `&#9733;`;
    }
    return stars; //  Return the start string
}


reviews.map((item) => {
    const stars = displayLikes(item.likes);

    reviewContainer.innerHTML += `
      <div class="review" key=${item.id}>
                    <div class="review-img-container">
                        <img src="${item.imgSrc}" alt="" width="100%">
                    </div>
                    <div class="right-review">
                        <h5 class="review-head">${item.reviewHead}</h5>
                        <p class="review-text">${item.text}</p>
                        <span>${stars}</span>
                        <div class=likes-reply-container">
                            <span>like</span>
                            <span>reply</span>
                        </div>
                    </div>
                   </div>`

})

