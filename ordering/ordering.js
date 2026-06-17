
const cartStorage={
    get:()=> JSON.parse(localStorage.getItem("MenuFoods")) || [],
    set:(MenuFoods) => localStorage.setItem('MenuFoods',JSON.stringify(MenuFoods))

};

const isIndexPage = window.location.pathname.includes('Menu.html');
const IsCartPage = window.location.pathname.includes('cart.html');


const items = [
    {
        id: 1,
        img:'./suya pic.jpg',
        title:"suya",
        desc:'10 sticks',
        price: 2800 , 
        img2:'./add (1).png'


    },
     {
        id: 2,
        img:'./kilishi.jpg',
        title:"Kilishi",
        desc:'10 sticks',
        price: 2800 , 
        img2:'./add (1).png'


    },
     {
        id: 3,
        img:'./grilledcatfish2.jpg',
        title:" Grilled Catfish (Point & Kill)",
        desc:'Grilled and delicious',
        price: 12000 , 
        img2:'./add (1).png'


    },
     {
        id: 4,
        img:'./asun.jpg',
        title:"Asun (Spicy Roasted Goat)",
        desc:'per piece',
        price: 2000 , 
        img2:'./add (1).png'


    },
     {
        id: 5,
        img:'./grilledprawn.jpg',
        title:"Grilled Plantain (Boli)",
        desc:'per plate',
        price: 8500 , 
        img2:'./add (1).png'


    },
     {
        id: 6,
        img:'./grilledprawn.jpg',
        title:"Grilled Prawns",
        desc:'Grilled and delicious',
        price: 4500 , 
        img2:'./add (1).png'


    },
     {
        id: 7,
        img:'./grilledcroaker.jpg',
        title:"Grilled Croaker",
        desc:'Grilled and delicious',
        price: 10000 ,
        img2:'./add (1).png'
 

    },
     {
        id: 8,
        img:'./roastedcorn.jpg',
        title:"Roasted Corn",
        desc:'per piece',
        price: 2500 ,
        img2:'./add (1).png'


    },
     {
        id: 9,
        img:'./gurasa.jpg',
        title:"Gurasa",
        desc:' per slice',
        price: 500 , 
        img2:'./add (1).png'
    },
     
]

// const drinks =[
//     {
//         id: 1,
//         img:'./suya pic.jpg',
//         title:"zobo",
//         desc:'chilled drink',
//         price: 2500 , 

//     },
//      {
//         id: 2,
//         img:'./suya pic.jpg',
//         title:"sKunu Aya",
//         desc:'chilled drink',
//         price: 2800 , 

//     },
//      {
//         id: 3,
//         img:'./suya pic.jpg',
//         title:"Palm Wine",
//         desc:'Fresh chilled drink',
//         price: 3500 , 

//     },
//      {
//         id: 4,
//         img:'./suya pic.jpg',
//         title:"Chapman",
//         desc:'chilled drink',
//         price: 1000 , 

//     },
//      {
//         id: 5,
//         img:'./suya pic.jpg',
//         title:"Star Lager",
//         desc:'chilled drink',
//         price: 4000 , 

//     },
//      {
//         id: 6,
//         img:'./suya pic.jpg',
//         title:"Gulder",
//         desc:'chilled drink',
//         price: 5000 , 

//     },
//      {
//         id: 7,
//         img:'./suya pic.jpg',
//         title:"Trophy / Hero",
//         desc:'chilled drink',
//         price: 4000 , 

//     },
//      {
//         id: 8,
//         img:'./suya pic.jpg',
//         title:"Teem Bitter Lemon",
//         desc:'chilled drink',
//         price: 2500 , 

//     },
//      {
//         id: 9,
//         img:'./suya pic.jpg',
//         title:"Trophy / Hero",
//         desc:'chilled drink',
//         price: 3000 , 

//     },
//      {
//         id: 10,
//         img:'./suya pic.jpg',
//         title:"Tble Water",
//         desc:'Ice Cold',
//         price: 2800 , 

//     },
//     {
//      id: 11,
//         img:'./suya pic.jpg',
//         title:"Guinness Foreign Extra Stout", 
//         desc:'Ice Cold',
//         price: 2800 , 
//     },
// ]

// if(IsIndexPage){
//     const  MenuContainer= document.querySelector('.MenuSelection')
//     foods.forEach(food => {
//         const  newMenu =  ` 
//         <div class="foodSection" data-id = "${food.id}">
//                 <img class="foodImage" src="${food.img}" alt="">
//                 <h4 class="itemName">${food.title}</h4>
//                 <h4 class="Quantity">${food.desc}</h4>
//                 <div class="addToCart">
//                     <span class="price">${food.price}</span>
//                     <button class="addTocheckout">+</button>
//                 </div>
//         </div>
//         `;

//         MenuContainer.insertAdjacentHTML('beforeend',newMenu)
//     })
        
 const formatprice = (price =>{
    const formattedPrice = parseFloat(price.toFixed(2)).toLocaleString();
    return formattedPrice;
})

const calculateTotal = ()=>{
    let totalPrice = 0;
    const cartGridItems = document.querySelectorAll('.procuct-in-cart');

    cartGridItems.forEach(items =>{
        const priceElement = item.querySelector('.price');
        const quantityElement = item.querySelector('.quantity.select');
        const untiPrice = parseFloat(priceElement.getAttribute('data-unit-price'));
        const quantity = parseInt(quantityElement.value);
        const itemTotal = untiPrice * quantity;

        totalPrice += itemTotal;
    })

    const pricingContainer = document.querySelector('.pricing-container');
    if(pricingContainer){
        const displayPricing =`
        <h3>Order Summary</h3>
                <div class="subtotal">
                    <h3>Subtotal:</h3>
                    <div>$${formatPrice(totalPrice)}</div>
                </div>
                <div class="shipping">
                    <h3>Shipping</h3>
                    <div>FREE</div>
                </div>
                <div class="tax">
                    <h3>Estimated Tax</h3>
                    <div>$${formatprice(totalPrice *.08)} </div>
                </div>
                <div class="Total">
                    <h3>Estimated Total</h3>
                    <div>$${formatprice(totalPrice * 1.08)}</div>
                </div>
                <div>
                    <button class="checkout-btn">CheckOut</button>
                </div>`

        pricingContainer.innerHTML = displayPricing
    }
}
const updateQuantity = (event) =>{
    const quanval = parseInt(event.target.value);
    const prod = event.target.closest('.product-in-cart');
    const prodId = parseInt(prod.getAttribute('data-id'));

    let newCartItems = cartStorage.get();
    newCartItems =newCartItems.map(items =>{
        if(items.id === prodId){
            items.quantity == quanval
        }
    })
    cartStorage.set(newCartItems);
    calculateTotal();
}
const removeItem = (event =>{
    const prodremove = event.target.closest('.product-in-cart').getAttribute('.data-id');
    let cartItems = cartStorage.get();
    cartItems= cartItems.filter(item =>item.id!== parseInt(prodremove));
    cartStorage.set(cartItems);
    event.target.closest('..product-in-cart').remove();
  
    if(cartItems.length===0) {  
        document.querySelector('.cart-items').innerHTML = '<h2> Your cart is  empty</h2>'
    }

    calculateTotal();
})
document.addEventListener('change', event =>{
    if(event.target.classList.contains('quantity-select')){
        updateQuantity(event)
    }
})

if (isIndexPage){
    const PricingContainer = document.querySelector('.MenuSelection');

    items.forEach(item => {
        const newProd = `
        <div class="foodSection" data-id = "${item.id}">
                <img class="foodImage" src="${item.img}" alt="">
                <h4 class="itemName">${item.title}</h4>
                <h4 class="Quantity">${item.desc}</h4>
                <div class="addToCart">
                    <span class="price">${item.price}</span>
                    <button class="Addbtn">Add</button>
                </div>
        </div>`;

        PricingContainer.insertAdjacentHTML('beforeend',newProd)
    });


    const AddToCartBtns = document.querySelectorAll('.AddToCart');
    AddToCartBtns.forEach(btn => {
        btn.addEventListener ('click', event =>{
            const productId = event.target.closest ('.foodSection').getAttribute('data-id');
            const productData = items.find(items=> items.id===parseInt (productId))
            let cartItems = cartStorage.get()
            const existingItemIndex = cartItems.find(items => items.id === productData.id);

            if (existingItemIndex !== -1){
                alert('Item is already in the cart')
            }else{
                cartItems.push({...productData, quantity :1});
                cartStorage.set(cartItems);
                alert("item added to your cart")
            }

        }) 
    });
}

if (isCartsPage){
    const cartGrid = document.querySelector('.cartItems');
    const cartItems = cartStorage.get();

    if(cartItems.length ===0){
        cartGrid.innerHTML = '<h2> Your cart is  empty</h2>';
        calculateTotal();
    }else{
        cartItems.forEach(items => {
            const addProd =`
            <div class="product-in-cart" data-id = "${items.id}">
                <div class="product-in-cart-left">
                        <img src="${items.Image}" alt="">
                        <div class="product-info">
                            <p>"${items.title}"</p>
                            <p>item #:${items.price}</p>
                        </div>
                </div>

                <div class="product-in-cart-right">
                        <div>
                            <p>Each</p>
                            <div class="price" data-unit-price ="${items.price}">$${item.price}</div>
                        </div>
                        <div class="quantity">
                            <label for="quantity">Qty:</label>
                            <select name="quantity" class="quantity-select" id="quantity">
                                <option value="1" ${items.quantity ===1 ? "selected" : ""}>1</option>
                                <option value="2" ${items.quantity ===2 ? "selected" : ""}>2</option>
                                <option value="3" ${items.quantity ===3 ? "selected" : ""}>3</option>
                                <option value="4" ${items.quantity ===4 ? "selected" : ""}>4</option>
                            </select>
                        </div>
                </div>
            </div>`
            cartGrid.insertAdjacentHTML('beforeend',addProd)
        });
        calculateTotal();
    }

    const faX = document.querySelectorAll('.fa-x')
    faX.forEach(item =>{
        item.addEventListener('click',event=>{
            removeItem(event);
        });
    });

}






const fullname = document.querySelector ('.fullname')
const email = document.querySelector ('.email')
const phone = document.querySelector ('.phone')
const reason = document.querySelector ('.reason')
const message = document.querySelector ('.message')


const contactForm = document.querySelector ('#contactForm')
contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert('Thank you for reaching out, your request has been submitted')
})
