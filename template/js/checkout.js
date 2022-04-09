function additem(item_name,item_prize){
    console.log(item_name);
    console.log(item_prize);


    var targetDiv = document.getElementById('item_cart');
    var content = '';
    content += '<div class="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">';
    content +=  '<div class="media align-items-center">';
    content += '<div class="mr-2 text-success">&middot;</div>';
    content += '<div class="media-body">';
    content += '<p class="m-0">'+item_name+'</p>';
    content += '</div>';
    content += '</div>';
    content += '<div class="d-flex align-items-center">';
    content += ' <span class="count-number float-right"><button type="button" class="btn-sm left dec btn btn-outline-secondary"> <i class="feather-minus"></i> </button><input class="count-number-input" type="text" readonly="" value="1"><button type="button" class="btn-sm right inc btn btn-outline-secondary"> <i class="feather-plus"></i> </button></span>';
    content += '<p class="text-gray mb-0 float-right ml-2 text-muted small">₹'+item_prize+'</p>';
    content += '</div>';
    content += '</div>';
    //targetDiv.append(content);
    $("#item_cart").append(content);
}