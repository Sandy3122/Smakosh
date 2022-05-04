// Getting Restaurant Data From MongoDB
fetch('/restaurant/getrestaurant',{
    method:'get',
    headers:
     {
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    document.getElementById('restaurant_name').innerHTML = data.restaurant_name
    document.getElementById('restaurant_tag').innerHTML = data.restaurant_tag
    document.getElementById('restaurant_address').innerHTML = data.restaurant_address
    document.getElementById('restaurant_IMG').src = "../img/restaurants/"+data.restaurant_logo_img
    document.getElementById('restaurant_SideIMG').src = "../img/restaurants/"+data.restaurant_side_img
})


//Getting Veg Items Data From MongoDB 
fetch('/restaurant/PizzaHutVeg',{
    method:'get',
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    for(var i=0; i < data.length; i++){
        console.log(i)
    var newDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newDiv.className = 'p-3 border-bottom menu-list';

    var span1 = document.createElement('span')
    span1.className = "float-right"
    
    var anchar1 = document.createElement('a')
    anchar1.className = "btn btn-outline-secondary btn-sm"
    anchar1.innerText = "ADD"
    anchar1.id = data[i].item_name
    anchar1.onclick = function(){
    var data2 = {
        name:this.id
    }
    fetch('/restaurant/cart',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data2)
    })
    .then(response => response.json())
    .then(data3 => {
        console.log(data3)
        document.getElementById('cart_item').innerHTML = data3[0].item_name
        document.getElementById('cart_price').innerHTML = data3[0].price
        document.getElementById('cart_item_price').innerHTML = data3[0].price
        document.getElementById('total_price').innerHTML = data3[0].price
        document.getElementById('overall_cost').innerHTML = parseInt(data3[0].price) + 62 + 10
        document.getElementById('quantity').value = "1"
    })
}
    span1.appendChild
    (anchar1)

    var newSubDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv.className = 'media';

    var image1 = document.createElement('img')
    image1.src = "../img/restaurants/"+data[i].item_img
    image1.className = "mr-3 rounded-pill"

    var newSubDiv1 = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv1.className = 'media-body';

    var heading1 = document.createElement('h6');
    // newDiv.id = 'r'+i;
    heading1.className = 'media-body';
    heading1.innerHTML = data[i].item_name

    var p1 = document.createElement('p')
    p1.className = "text-muted mb-0"
    p1.innerHTML = data[i].description
    
    var p2 = document.createElement('p')
    p2.className = "text-muted mb-0"
    p2.innerHTML = data[i].price

    newSubDiv1.appendChild(heading1)
    newSubDiv1.appendChild(p1)
    newSubDiv1.appendChild(p2)

    newSubDiv.appendChild(image1)
    newSubDiv.appendChild(newSubDiv1)    
    newDiv.appendChild(span1)
    newDiv.appendChild(newSubDiv)
    document.getElementById('Veg').appendChild(newDiv);
        console.log(newDiv)
    }
})

//Getting Non-Veg Items Data From MongoDB
fetch('/restaurant/PizzaHutNonVeg',{
    method:'get',
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    for(var i=0; i < data.length; i++){
        console.log(i)
    var newDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newDiv.className = 'p-3 border-bottom menu-list';

    var span1 = document.createElement('span')
    span1.className = "float-right"
    
    var anchar1 = document.createElement('a')
    anchar1.className = "btn btn-outline-secondary btn-sm"
    anchar1.innerText = "ADD"
    anchar1.id = data[i].item_name
    anchar1.onclick = function(){
    var data2 = {
        name:this.id
    }
    fetch('/restaurant/cart',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data2)
    })
    .then(response => response.json())
    .then(data3 => {
        console.log(data3)
        document.getElementById('cart_item').innerHTML = data3[0].item_name
        document.getElementById('cart_price').innerHTML = data3[0].price
        document.getElementById('cart_item_price').innerHTML = data3[0].price
        document.getElementById('total_price').innerHTML = data3[0].price
        document.getElementById('overall_cost').innerHTML = parseInt(data3[0].price) + 62 + 10
        document.getElementById('quantity').value = "1"
    })
}
    
    span1.appendChild
    (anchar1)

    var newSubDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv.className = 'media';

    var image1 = document.createElement('img')
    image1.src = "../img/restaurants/"+data[i].item_img
    image1.className = "mr-3 rounded-pill"

    var newSubDiv1 = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv1.className = 'media-body';

    var heading1 = document.createElement('h6');
    // newDiv.id = 'r'+i;
    heading1.className = 'media-body';
    heading1.innerHTML = data[i].item_name

    var p1 = document.createElement('p')
    p1.className = "text-muted mb-0"
    p1.innerHTML = data[i].description
    
    var p2 = document.createElement('p')
    p2.className = "text-muted mb-0"
    p2.innerHTML = data[i].price

    newSubDiv1.appendChild(heading1)
    newSubDiv1.appendChild(p1)
    newSubDiv1.appendChild(p2)

    newSubDiv.appendChild(image1)
    newSubDiv.appendChild(newSubDiv1)    
    newDiv.appendChild(span1)
    newDiv.appendChild(newSubDiv)
    document.getElementById('Non-Veg').appendChild(newDiv);
        console.log(newDiv)
    }
})



//Getting Non-Veg Items Data From MongoDB
fetch('/restaurant/PizzaHutBeverages',{
    method:'get',
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    for(var i=0; i < data.length; i++){
        console.log(i)
    var newDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newDiv.className = 'p-3 border-bottom menu-list';

    var span1 = document.createElement('span')
    span1.className = "float-right"
    
    var anchar1 = document.createElement('a')
    anchar1.className = "btn btn-outline-secondary btn-sm"
    anchar1.innerText = "ADD"
    anchar1.id = data[i]._id
    anchar1.id = data[i].item_name
    anchar1.onclick = function(){
    var data2 = {
        name:this.id
    }
    fetch('/restaurant/cart',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data2)
    })
    .then(response => response.json())
    .then(data3 => {
        console.log(data3)
        document.getElementById('cart_item').innerHTML = data3[0].item_name
        document.getElementById('cart_price').innerHTML = data3[0].price
        document.getElementById('cart_item_price').innerHTML = data3[0].price
        document.getElementById('total_price').innerHTML = data3[0].price
        document.getElementById('overall_cost').innerHTML = parseInt(data3[0].price) + 62 + 10
        document.getElementById('quantity').value = "1"
    })
}
    
    
    span1.appendChild
    (anchar1)

    var newSubDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv.className = 'media';

    var image1 = document.createElement('img')
    image1.src = "../img/restaurants/"+data[i].item_img
    image1.className = "mr-3 rounded-pill"

    var newSubDiv1 = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv1.className = 'media-body';

    var heading1 = document.createElement('h6');
    // newDiv.id = 'r'+i;
    heading1.className = 'media-body';
    heading1.innerHTML = data[i].item_name

    var p1 = document.createElement('p')
    p1.className = "text-muted mb-0"
    p1.innerHTML = data[i].description
    
    var p2 = document.createElement('p')
    p2.className = "text-muted mb-0"
    p2.innerHTML = data[i].price

    newSubDiv1.appendChild(heading1)
    newSubDiv1.appendChild(p1)
    newSubDiv1.appendChild(p2)

    newSubDiv.appendChild(image1)
    newSubDiv.appendChild(newSubDiv1)    
    newDiv.appendChild(span1)
    newDiv.appendChild(newSubDiv)
    document.getElementById('Beverages').appendChild(newDiv);
        console.log(newDiv)
    }
})



//Getting Non-Veg Items Data From MongoDB
fetch('/restaurant/PizzaHutDrinks',{
    method:'get',
    headers:{
        'Content-Type' : 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    for(var i=0; i < data.length; i++){
        console.log(i)
    var newDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newDiv.className = 'p-3 border-bottom menu-list';

    var span1 = document.createElement('span')
    span1.className = "float-right"
    
    var anchar1 = document.createElement('a')
    anchar1.className = "btn btn-outline-secondary btn-sm"
    anchar1.innerText = "ADD"
    anchar1.id = data[i].item_name
    anchar1.onclick = function(){
    var data2 = {
        name:this.id
    }
    fetch('/restaurant/cart',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data2)
    })
    .then(response => response.json())
    .then(data3 => {
        console.log(data3)
        document.getElementById('cart_item').innerHTML = data3[0].item_name
        document.getElementById('cart_price').innerHTML = data3[0].price
        document.getElementById('cart_item_price').innerHTML = data3[0].price
        document.getElementById('total_price').innerHTML = data3[0].price
        document.getElementById('overall_cost').innerHTML = parseInt(data3[0].price) + 62 + 10
        document.getElementById('quantity').value = "1"
    })
}
    
    span1.appendChild
    (anchar1)

    var newSubDiv = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv.className = 'media';

    var image1 = document.createElement('img')
    image1.src = "../img/restaurants/"+data[i].item_img
    image1.className = "mr-3 rounded-pill"

    var newSubDiv1 = document.createElement('div');
    // newDiv.id = 'r'+i;
    newSubDiv1.className = 'media-body';

    var heading1 = document.createElement('h6');
    // newDiv.id = 'r'+i;
    heading1.className = 'media-body';
    heading1.innerHTML = data[i].item_name

    var p1 = document.createElement('p')
    p1.className = "text-muted mb-0"
    p1.innerHTML = data[i].description
    
    var p2 = document.createElement('p')
    p2.className = "text-muted mb-0"
    p2.innerHTML = data[i].rupee
    p2.innerHTML = data[i].price

    newSubDiv1.appendChild(heading1)
    newSubDiv1.appendChild(p1)
    newSubDiv1.appendChild(p2)

    newSubDiv.appendChild(image1)
    newSubDiv.appendChild(newSubDiv1)    
    newDiv.appendChild(span1)
    newDiv.appendChild(newSubDiv)
    document.getElementById('Drinks').appendChild(newDiv);
        console.log(newDiv)
    }
})


function subprice(){
    var val = document.getElementById('quantity').value
    var price = document.getElementById('cart_item_price').innerHTML;
    var totalprice = document.getElementById('cart_price').innerHTML
    // alert(val)
    if(parseInt(val)<=1){
        document.getElementById('quantity').value = "1"
    }
    else{
        document.getElementById('quantity').value = parseInt(val) - 1
        document.getElementById('cart_price').innerHTML = parseInt(totalprice) - parseInt(price)
        document.getElementById('total_price').innerHTML = parseInt(totalprice) - parseInt(price)
        document.getElementById('overall_cost').innerHTML = (parseInt(totalprice) - parseInt(price)) + 62 + 10
        document.getElementById('total_pay+').innerHTML = (parseInt(totalprice) - parseInt(price)) + 62 + 10
    }
}

function addprice(){
    var val = document.getElementById('quantity').value;
    var price = document.getElementById('cart_item_price').innerHTML;
    var totalprice = parseInt(price) * (parseInt(val) + 1)
    
    // alert(totalprice)
    document.getElementById('quantity').value = parseInt(val) + 1
    document.getElementById('cart_price').innerHTML = totalprice.toString()
    document.getElementById('total_price').innerHTML = totalprice.toString()
    document.getElementById('overall_cost').innerHTML = totalprice + 62 + 10 
}