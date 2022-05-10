//Getting Restaurants Data From MongoDB
function mypagefun(element){
    // console.log(element.id)
    window.localStorage.setItem('restaurantid',element.id)
    // alert(element.id)
}


fetch('/homeData',{
method:'get',
headers:{
    'Content-Type' : 'application/json'
}
})
.then(response => response.json())
.then(data => {
console.log(data)
for(var i=0; i < data.length; i++){
    var variable = '' + 
    '<div class="col-md-3 pb-3">' + 
    '    <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">' + 
    '        <div class="list-card-image">' + 
    '            <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>' + 
    '            <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>' + 
    '            <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>' + 
    '            <a href="/restaurant/pizza-hut" id="'+data[i].restaurant_name+'"  onclick="mypagefun(this)">' + 
    '                <img alt="#" src="../img/restaurants/'+data[i].restaurant_img +'"' + 'class="img-fluid item-img w-100">' + 
    '            </a>' + 
    '        </div>' +
    '        <div class="p-3 position-relative">' + 
    '            <div class="list-card-body">' + 
    '                <h6 class="mb-1"><a href="/restaurant/pizza-hut" id="'+data[i].restaurant_name+'"  onclick="mypagefun(this)" class="text-black">'+data[i].restaurant_name  + 
    '             </a>' + 
    '                </h6>' + 
    '                <p class="text-gray mb-1 small">'+data[i].restaurant_address+'</p>' + 
    '                <p class="text-gray mb-1 rating">' + 
    '                </p>' + 
    '                <ul class="rating-stars list-unstyled">' + 
    '                    <li>' + 
    '                        <i class="feather-star star_active"></i>' + 
    '                        <i class="feather-star star_active"></i>' + 
    '                        <i class="feather-star star_active"></i>' + 
    '                        <i class="feather-star star_active"></i>' + 
    '                        <i class="feather-star"></i>' + 
    '                    </li>' + 
    '                </ul>' + 
    '                <p></p>' + 
    '            </div>' + 
    '            <div class="list-card-badge">' + 
    '                <span class="badge badge-danger">OFFER</span> <small>65% SMAKOSH50</small>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' + 
    '</div>' + 
    '';
    var div = document.getElementById('test')
    div.insertAdjacentHTML('beforeend',variable)


}})