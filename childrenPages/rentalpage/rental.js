const forrest1040 = {
    houseName: "1040 Forrest",
    imageURL: "https://doc-0s-a4-mymaps.googleusercontent.com/untrusted/hostedimage/4pg6ne6rdtr9bt5ad64nokm3v0/3m7lirsmonf8370b5s7ms8ie3k/1670362005000/Fqfp0lHdvn8140SA9Z9w1goDEM-MbBSU/04512745616782451633/5AKgB-9mljOX7lzQRgVm1pWctc2vVyUaWzkVIzvBkDqzH6QJTVr_xuVfZMBpv8-vF3rcFWE6lqPUP-ed0UJ5OyMfwJ-qVqAr9BXlY4edAnjK6JlmtxOl7VB8TytuoVN3gQCODi9iGRJg1xUQR6EkDrK2W1s4P0MFodETUD82kt5RgoJAbkIFYJiONJR46nLXAaBoPsQ?session=0&fife=s16383",
    price: "400"
};


const houses = [forrest1040];

for ( let house of houses ){
    let name = house.houseName;
    let imageURL = house.imageURL;
    let price = house.price;

    const cardContainer = document.getElementById('house-cards-container');

    const houseCard = document.createElement('div');
    houseCard.id = name;
    houseCard.classList.add('house-card');
    houseCard.style.display = 'flex';
    houseCard.style.flexWrap = 'wrap';
    houseCard.style.textAlign = 'center';



    const housePictureBound = document.createElement('div');
    housePictureBound.id = `${name}-picture-boundary`;
    

    housePictureBound.style.width = "100%";
    housePictureBound.style.height = "50%";
    housePictureBound.style.backgroundImage = `url(${imageURL})`;
    housePictureBound.style.backgroundSize = "cover";


    const houseName = document.createElement('h2');
    houseName.innerHTML = `${name}`;
    houseName.style.width = '100%';
    houseName.style.height= '15%';

    const housePrice = document.createElement('h3');
    housePrice.innerHTML = `Starting at $${price}`;
    housePrice.style.marginbottom = "30px";

    cardContainer.appendChild(houseCard);
    houseCard.appendChild(housePictureBound);
    houseCard.appendChild(houseName);
    houseCard.appendChild(housePrice);
}


function forrest1040Clicked(){
    window.open("/main.html")
}

const forrest1040Card = document.getElementById('1040 Forrest');
forrest1040Card.addEventListener('click', forrest1040Clicked)