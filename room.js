const rooms = [
    {
        name: "Cottage",
        price: 75000,
        image: "./assets/media/Rooms/COTTAGE/IMG_1714.jpg",
        facilities: {
            familySize: "Family Size",
            bedrooms: "2 Bedrooms",
            bathrooms: "2 Bathrooms",
            livingRoom: "Living Room",
            diningArea: "Dining Area",
            miniFridge: "Mini Fridge",
            parking: "Parking",
            miniBar: "Mini Bar",
            airConditioning: "Air Conditioning",
            roomService: "Room Service",
            teaCoffee: "Tea / Coffee",
            tv: "TV",
            beachAccess: "Beach Access (2 Per Room)"
        }
    },
    {
        name: "Round House 1",
        price: 55000,
        image: "./assets/media/Rooms/ROUND HOUSE COTTAGE/IMG_0262-1.jpg",
        facilities: {
            familySize: "Family Size",
            bedrooms: "2 Bedrooms",
            bathrooms: "2 Bathrooms",
            livingRoom: "Living Room",
            diningArea: "Dining Area",
            miniFridge: "Mini Fridge",
            parking: "Parking",
            miniBar: "Mini Bar",
            airConditioning: "Air Conditioning",
            roomService: "Room Service",
            teaCoffee: "Tea / Coffee",
            tv: "TV",
            beachAccess: "Beach Access (2 Per Room)"
        }
    },
    {
        name: "V-VIP Suite",
        price: 40000,
        image: "./assets/media/Rooms/VVIP SUITE/IMG_1620.jpg",
        facilities: {
            familySize: "Family Size",
            bedrooms: "2 Bedrooms",
            bathrooms: "2 Bathrooms",
            livingRoom: "Living Room",
            diningArea: "Dining Area",
            miniFridge: "Mini Fridge",
            parking: "Parking",
            miniBar: "Mini Bar",
            airConditioning: "Air Conditioning",
            roomService: "Room Service",
            teaCoffee: "Tea / Coffee",
            tv: "TV",
            beachAccess: "Beach Access (2 Per Room)"
        }
    },

    {
        name: "VIP Suite",
        price: 35000,
        image: "./assets/media/Rooms/VIP SUITE/IMG_0302.jpg",
        facilities: {
            familySize: "Family Size",
            bedrooms: "2 Bedrooms",
            bathrooms: "2 Bathrooms",
            livingRoom: "Living Room",
            diningArea: "Dining Area",
            miniFridge: "Mini Fridge",
            parking: "Parking",
            miniBar: "Mini Bar",
            airConditioning: "Air Conditioning",
            roomService: "Room Service",
            teaCoffee: "Tea / Coffee",
            tv: "TV",
            beachAccess: "Beach Access (2 Per Room)"
        }
    },
    {
        name: "Alcove Room",
        price: 26000,
        image: "./assets/media/Rooms/ALCOVE ROOM/IMG_1672.jpg",
        facilities: {
            familySize: "Family Size",
            bedrooms: "2 Bedrooms",
            bathrooms: "2 Bathrooms",
            livingRoom: "Living Room",
            diningArea: "Dining Area",
            miniFridge: "Mini Fridge",
            parking: "Parking",
            miniBar: "Mini Bar",
            airConditioning: "Air Conditioning",
            roomService: "Room Service",
            teaCoffee: "Tea / Coffee",
            tv: "TV",
            beachAccess: "Beach Access (2 Per Room)"
        }
    },

    {
        name: "Executive Room",
        price: 24000,
        image: "./assets/media/Rooms/EXECUTIVE ROOM/IMG_1678.jpg",
        facilities: {
            familySize: "Family Size",
            bedrooms: "2 Bedrooms",
            bathrooms: "2 Bathrooms",
            livingRoom: "Living Room",
            diningArea: "Dining Area",
            miniFridge: "Mini Fridge",
            parking: "Parking",
            miniBar: "Mini Bar",
            airConditioning: "Air Conditioning",
            roomService: "Room Service",
            teaCoffee: "Tea / Coffee",
            tv: "TV",
            beachAccess: "Beach Access (2 Per Room)"
        }
    },
    {
        name: "Business Suite",
        price: 24000,
        image: "./assets/media/Rooms/BUSINESS SUITE/DSC_4630.jpg",
        facilities: {
            familySize: "Family Size",
            bedrooms: "2 Bedrooms",
            bathrooms: "2 Bathrooms",
            livingRoom: "Living Room",
            diningArea: "Dining Area",
            miniFridge: "Mini Fridge",
            parking: "Parking",
            miniBar: "Mini Bar",
            airConditioning: "Air Conditioning",
            roomService: "Room Service",
            teaCoffee: "Tea / Coffee",
            tv: "TV",
            beachAccess: "Beach Access (2 Per Room)"
        }
    },
    {
        name: "Studio Room",
        price: 22000,
        image: "./assets/media/Rooms/STUDIO ROOM/IMG_1688.jpg",
        facilities: {
            familySize: "Family Size",
            bedrooms: "2 Bedrooms",
            bathrooms: "2 Bathrooms",
            livingRoom: "Living Room",
            diningArea: "Dining Area",
            miniFridge: "Mini Fridge",
            parking: "Parking",
            miniBar: "Mini Bar",
            airConditioning: "Air Conditioning",
            roomService: "Room Service",
            teaCoffee: "Tea / Coffee",
            tv: "TV",
            beachAccess: "Beach Access (2 Per Room)"
        }
    },

    {
    name: "Deluxe Room",
    price: 20000,
    image: "./assets/media/Rooms/DELUXE ROOM/IMG_1644.jpg",
    facilities: {
        familySize: "Family Size",
        bedrooms: "2 Bedrooms",
        bathrooms: "2 Bathrooms",
        livingRoom: "Living Room",
        diningArea: "Dining Area",
        miniFridge: "Mini Fridge",
        parking: "Parking",
        miniBar: "Mini Bar",
        airConditioning: "Air Conditioning",
        roomService: "Room Service",
        teaCoffee: "Tea / Coffee",
        tv: "TV",
        beachAccess: "Beach Access (2 Per Room)"
    }
}

];

let mainDiv = document.createElement("div");
mainDiv.classList.add("container");


let Sbtn = document.querySelector(".rooms-n-suites");


function displayData(arr) {
    mainDiv.innerHTML = "";


    arr.forEach((ele) => {

   let card = CreateCard(ele);
   mainDiv.append(card);
    
   })
  
};
  

let card2 = mainCard();
Sbtn.append(card2,mainDiv);

function mainCard(){
    let main1Div = document.createElement("div");
    main1Div.classList.add("col-12");
    main1Div.id = "innerPageHeading";

    let h21 = document.createElement("h2");
    h21.classList.add("header-h2", "text-center");
    h21.textContent = "Rooms & Suites";
   
    let p = document.createElement("p");
    p.classList.add("text-parag", "text-center");
    p.textContent = "Kindly note that all quoted room / suite prices are subject to change without notice due to inflationary trends.";

    main1Div.append (h21,p);

    return main1Div;

}

      function CreateCard(ele){
        // card append all the card here

        let cardElement = document.createElement("div")  
        cardElement.classList.add("row");
        cardElement.id = "room-row";
         
        // card append all the card here
   //1
        let card = document.createElement("div");
        card.classList.add("col-12","col-lg-6");
        card.id = "left-room-col";

        let img = document.createElement("img");
        img.classList.add("room-page-imgs")
        img.src =  ele.image;
        img.alt = "cottage-featured-img";
        
        card.append(img);
//2
        
        let secDiv = document.createElement("div");
        secDiv.classList.add("col-12","col-lg-6");
        secDiv.id = "right-room-col";
// 2.A
        let hA2 = document.createElement("h2");
        hA2.classList.add("header-h2","header-text");
        hA2.textContent = ele.name +" ";
        
        let spanB = document.createElement("span");
        spanB.classList.add("price");
        spanB.textContent = "(" + `₦${ele.price} / night`+")";
        
        hA2.append(spanB);


        let thirdDiv = document.createElement("div");
        thirdDiv.classList.add("facilities-main");

        let forthDiv = document.createElement("div")
          forthDiv.classList.add("left");
      //c1
        let fiveDiv = document.createElement("div")
        fiveDiv.classList.add("facilities");

        let img1 = document.createElement ("img");
        img1.src = "./assets/icons/family.svg"
        img1.alt = "family"
        img1.width = 27;
        
        let p = document.createElement("p")
        p.textContent = ele.facilities.familySize;
        
        fiveDiv.append(img1, p);
        // c1
      
        //c2
        let fiveDiv1 = document.createElement("div")
        fiveDiv1.classList.add("facilities");

        let img2 = document.createElement ("img");
        img2.src = "./assets/icons/bed.svg"
        img2.alt = "Bedroom"
        img2.width = 27;
        
        let p1 = document.createElement("p")
        p1.textContent = ele.facilities.bedrooms;
        
        fiveDiv1.append(img2, p1);
        // c2

        //c3
        let fiveDiv3 = document.createElement("div")
        fiveDiv3.classList.add("facilities");

        let img3 = document.createElement ("img");
        img3.src = "./assets/icons/tissue.svg"
        img3.alt = "Bathroom"
        img3.width = 27;
        
        let p2 = document.createElement("p")
        p2.textContent = ele.facilities.bathrooms;
        
        fiveDiv3.append(img3, p2);
        // c3

        //c4
        let fiveDiv4 = document.createElement("div")
        fiveDiv4.classList.add("facilities");

        let img4 = document.createElement ("img");
        img4.src = "./assets/icons/chair.svg"
        img4.alt = "Livingroom"
        img4.width = 27;
        
        let p3 = document.createElement("p")
        p3.textContent = ele.facilities.livingRoom;
        
        fiveDiv4.append(img4, p3);
        // c4

        //c5
        let fiveDiv5 = document.createElement("div")
        fiveDiv5.classList.add("facilities");

        let img5 = document.createElement ("img");
        img5.src = "./assets/icons/dining.svg"
        img5.alt = "Dining"
        img5.width = 27;
        
        let p4 = document.createElement("p")
        p4.textContent = ele.facilities.diningArea;
        
        fiveDiv5.append(img5, p4);
        // c5

        //c6
        let fiveDiv6 = document.createElement("div")
        fiveDiv6.classList.add("facilities");

        let img6 = document.createElement ("img");
        img6.src = "./assets/icons/fridge.svg"
        img6.alt = "MiniFridge"
        img6.width = 27;
        
        let p5 = document.createElement("p")
        p5.textContent = ele.facilities.miniFridge;
        
        fiveDiv6.append(img6, p5);
        // c6
        
        
        //c7
        let fiveDiv7 = document.createElement("div")
        fiveDiv7.classList.add("facilities");

        let img7 = document.createElement ("img");
        img7.src = "./assets/icons/parking.svg"
        img7.alt = "Parking"
        img7.width = 27;
        
        let p6 = document.createElement("p")
        p6.textContent = ele.facilities.parking;
        
        fiveDiv7.append(img7, p6);
        // c7
        
        forthDiv.append(fiveDiv,fiveDiv1,fiveDiv3,fiveDiv4,fiveDiv5,fiveDiv6,fiveDiv7);
        
        // right section
       
        let forthDiv11 = document.createElement("div")
          forthDiv11.classList.add("right");
      //c1
        let fiveDiv12 = document.createElement("div")
        fiveDiv12.classList.add("facilities");

        let img12 = document.createElement ("img");
        img12.src = "./assets/icons/cocktail.svg"
        img12.alt = "family"
        img12.width = 27;
        
        let p12 = document.createElement("p")
        p12.textContent ="Mini Bar";
        
        fiveDiv12.append(img12, p12);
        // c1
      
        //c2
        let fiveDiv13 = document.createElement("div")
        fiveDiv13.classList.add("facilities");

        let img13 = document.createElement ("img");
        img13.src = "./assets/icons/ac.svg"
        img13.alt = "Bedroom"
        img13.width = 27;
        
        let p13 = document.createElement("p")
        p13.textContent = "Air Conditioning";
        
        fiveDiv13.append(img13, p13);
        // c2

        //c3
        let fiveDiv14 = document.createElement("div")
        fiveDiv14.classList.add("facilities");

        let img14 = document.createElement ("img");
        img14.src = "./assets/icons/room-service.svg"
        img14.alt = "Bathroom"
        img14.width = 27;
        
        let p14 = document.createElement("p")
        p14.textContent = "Room Service";
        
        fiveDiv14.append(img14, p14);
        // c3

        //c4
        let fiveDiv15 = document.createElement("div")
        fiveDiv15.classList.add("facilities");

        let img15 = document.createElement ("img");
        img15.src = "./assets/icons/coffee.svg"
        img15.alt = "Livingroom"
        img15.width = 27;
        
        let p15 = document.createElement("p")
        p15.textContent = "Tea / Coffee";
        
        fiveDiv15.append(img15, p15);
        // c4

        //c5
        let fiveDiv16 = document.createElement("div")
        fiveDiv16.classList.add("facilities");

        let img16 = document.createElement ("img");
        img16.src = "./assets/icons/tv.svg"
        img16.alt = "Dining"
        img16.width = 27;
        
        let p16 = document.createElement("p")
        p16.textContent ="TV";
        
        fiveDiv16.append(img16, p16);
        // c5

        //c6
        let fiveDiv17 = document.createElement("div")
        fiveDiv17.classList.add("facilities");

        let img17 = document.createElement ("img");
        img17.src = "./assets/icons/beach.svg"
        img17.alt = "MiniFridge"
        img17.width = 27;
        
        let p17 = document.createElement("p")
        p17.textContent = "Beach Access (2 Per Room)";
        
        fiveDiv17.append(img17, p17);
        // c6
    
        
        forthDiv11.append(fiveDiv12, fiveDiv13,fiveDiv14,fiveDiv15,fiveDiv16,fiveDiv17);
        
        // right section end
         
        thirdDiv.append(forthDiv,forthDiv11)

        //for button

        let btnDiv = document.createElement("div");
        btnDiv.classList.add("facilities-btns");

        let btn1 = document.createElement("button");
        btn1.classList.add("yellow-btn");
        btn1.textContent = "More Details"
       
        btn1.addEventListener("click",(e)=>{
         e.preventDefault();
        window.location.href = './accommodations/cottage.html'
        });
    
        let btn2 = document.createElement("button");
        btn2.classList.add("outline-btn");
        btn2.textContent = "Book Now"
       
        btn2.addEventListener("click",(e)=>{
         e.preventDefault();
         window.location.href = './bookings.html'
        });

       btnDiv.append(btn1,btn2);

       secDiv.append(hA2,thirdDiv,btnDiv);

       

       cardElement.append(card,secDiv);
        


       return cardElement;
       
    }
       

displayData(rooms);

let lowToHigh = document.querySelector("#sort-low-high");
let highTolow = document.querySelector("#sort-high-low");

lowToHigh.addEventListener("click",(e)=>{
    e.preventDefault();
    rooms.sort((a,b)=>{
     return a.price - b.price;
    })
    displayData(rooms);
})


highTolow.addEventListener("click",(e)=>{
    e.preventDefault();
    rooms.sort((a,b)=>{
     return b.price - a.price;
    })
    displayData(rooms);
})

