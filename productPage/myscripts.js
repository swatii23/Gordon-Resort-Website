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
// var hotelData = [
//     {
//         image1: "https://www.thelalit.com/wp-content/uploads/2016/12/Business-Suite-Bed-400x300.jpg",
//         image2: "https://www.thelalit.com/wp-content/uploads/2016/12/Corner-Suite-3-400x300.jpg",
//         image3: "https://www.thelalit.com/wp-content/uploads/2016/12/Corner-Suite-3-400x300.jpg",
//         title: "Corner Suite",
//         description: "The majestic Corner Suite offers a panoramic view of the city through its large windows.",
//         size: "800ft²/74m²",
//         price: "$699"
//     }
   
       
     
    
//     // Add more hotel data as needed
// ];

// var parent = document.getElementById("product-conatiner");

// function displayHotelData(data) {
//     data.forEach((item) => {
//         const card = document.createElement("div");
//         card.className = "product-card"; // You can style this class in your CSS

//         card.innerHTML = `
//             <img src="${item.image1}" alt="${item.title}">
//             <h3>${item.title}</h3>
//             <p>${item.description}</p>
//             <p>Size: ${item.size}</p>
//             <p>Price: ${item.price}</p>
//         `;

//         parent.appendChild(card);
//     });
// }

// displayHotelData(hotelData);

let hotelData = [
    {
        image1: "https://www.thelalit.com/wp-content/uploads/2016/12/Business-Suite-Bed-400x300.jpg",
        title: "Corner Suite",
        description: "The majestic Corner Suite offers a panoramic view of the city through its large windows.",
        size: "800ft²/74m²",
        price: "$699"
    },
    {
        image1: "https://www.thelalit.com/wp-content/uploads/2016/12/Business-Suite-Bed-400x300.jpg",
        title: "Corner Suite",
        description: "The majestic Corner Suite offers a panoramic view of the city through its large windows.",
        size: "800ft²/74m²",
        price: "$699"
    },
    {
        image1: "https://www.thelalit.com/wp-content/uploads/2016/12/Business-Suite-Bed-400x300.jpg",
        title: "Corner Suite",
        description: "The majestic Corner Suite offers a panoramic view of the city through its large windows.",
        size: "800ft²/74m²",
        price: "$699"
    },

    {
        image1: "https://www.thelalit.com/wp-content/uploads/2016/12/Premier-Room-King-400x300.jpg",
        title: "Premier Room",
        description: "Modern furnishings & detailing infuse these rooms with contemporary style. Guests delight in luxurious amenities & stunning views.",
        size: "800ft²/74m²",
        price: "$699"
    },
    {
        image1: "https://www.thelalit.com/wp-content/uploads/2016/12/Premier-Room-King-400x300.jpg",
        title: "Premier Room",
        description: "Modern furnishings & detailing infuse these rooms with contemporary style. Guests delight in luxurious amenities & stunning views.",
        size: "800ft²/74m²",
        price: "$699"
    },
    {
        image1: "https://www.thelalit.com/wp-content/uploads/2016/12/Premier-Room-King-400x300.jpg",
        title: "Premier Room",
        description: "The majestic Corner Suite offers a panoramic view of the city through its large windows.",
        size: "800ft²/74m²",
        price: "$699"
    },
    
     
    {
        image1: "https://www.thelalit.com/wp-content/uploads/2017/01/Luxury-Room-400x300.jpg",
        title: "Luxury Room",
        description: "Experience sheer warmth midst contemporary furnishings and rich colour palettes of Luxury Room.",
        size: "800ft²/74m²",
        price: "$699"
    },
    {
        image1: "https://www.thelalit.com/wp-content/uploads/2017/01/Luxury-Room-400x300.jpg",
        title: "Luxury Room",
        description: "Experience sheer warmth midst contemporary furnishings and rich colour palettes of Luxury Room.",
        size: "800ft²/74m²",
        price: "$699"
    },
    {
        image1: "https://www.thelalit.com/wp-content/uploads/2017/01/Luxury-Room-400x300.jpg",
        title: "Luxury Room",
        description: "Experience sheer warmth midst contemporary furnishings and rich colour palettes of Luxury Room.",
        size: "800ft²/74m²",
        price: "$699"
    },


    // Add more product data as needed
];

let parent = document.getElementById("product-conatiner");
var parent1 = document.getElementById("product-conatiner2")
function display(array,parent) {
    parent.innerHTML = "";
    array.forEach((element)=>{
        // let div = document.createElement("div")
        let singalCard = SingleCardItem(element)
        // div.append(singalCard)
       parent.append(singalCard);
        
        singalCard.addEventListener("click", function () {
            window.location.href = './item.html';
            // localStorage.setItem("itemDetails", JSON.stringify(itemObj));
        });

    })
    
}

function SingleCardItem(element){
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("id", "img-img");
    img.setAttribute("src", element.image1);
    img.setAttribute("alt", "hotelimage");

    let h3 = document.createElement("h3");
    h3.textContent = element.title;

    let description = document.createElement("p");
    description.textContent = element.description;

    let size = document.createElement("p");
    size.className = "size-tag";
    size.textContent = "Size: " + element.size;

    let price = document.createElement("p");
    price.textContent = "Price: " + element.price;

   
    div.append(img, h3, description,size,price);

    return div;
}


display(hotelData,parent);

// display(hotelData,parent1)

