// var hotelData = [
//     {
//         image1:"https://www.thelalit.com/wp-content/uploads/2016/12/Business-Suite-Bed-400x300.jpg",
//         title: "Business Suite",
//         discription:"The Business Suite is an ideal combination of contemporary and classic styles with hued interiors that exemplify luxurious living.",
//         size: "800ft/74m",
//         price:"$499"
//     },
//     {
//         image2:"https://www.thelalit.com/wp-content/uploads/2016/12/Corner-Suite-3-400x300.jpg",
//         title: "Corner Suite",
//         discription:"The majestic Corner Suite offers a panoramic view of the city through its large windows.",
//         size: "800ft/74m",
//         price:"$699"
//     },

//     {
//         image3:"https://www.thelalit.com/wp-content/uploads/2016/12/Corner-Suite-3-400x300.jpg",
//         title: "Corner Suite",
//         discription:"The majestic Corner Suite offers a panoramic view of the city through its large windows.",
//         size: "800ft/74m",
//         price:"$699"
//     },
    
// ];

// var parent  = document.querySelector("#product-conatiner");

// function dispaly (arr){
//     parent.innerHTML = "";
    
//     arr.forEach(function(ele){
//      var card = document.createElement("div");


//     })
// }
var hotelData = [
    {
        image: "https://www.thelalit.com/wp-content/uploads/2016/12/Business-Suite-Bed-400x300.jpg",
        title: "Business Suite",
        description: "The Business Suite is an ideal combination of contemporary and classic styles with hued interiors that exemplify luxurious living.",
        size: "800ft²/74m²",
        price: "$499"
    },
    {
        image: "https://www.thelalit.com/wp-content/uploads/2016/12/Corner-Suite-3-400x300.jpg",
        title: "Corner Suite",
        description: "The majestic Corner Suite offers a panoramic view of the city through its large windows.",
        size: "800ft²/74m²",
        price: "$699"
    },
    {
        image: "https://www.thelalit.com/wp-content/uploads/2016/12/Corner-Suite-3-400x300.jpg",
        title: "Corner Suite",
        description: "The majestic Corner Suite offers a panoramic view of the city through its large windows.",
        size: "800ft²/74m²",
        price: "$699"
    }
    // Add more hotel data as needed
];

var parent = document.getElementById("product-conatiner");

function displayHotelData(data) {
    data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "product-card"; // You can style this class in your CSS

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p>Size: ${item.size}</p>
            <p>Price: ${item.price}</p>
        `;

        parent.appendChild(card);
    });
}

displayHotelData(hotelData);
