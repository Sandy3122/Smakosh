const api_url = "/getusers";
// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
        if(data){
            
            document.getElementById("dropdownMenuButton").innerHTML = data[0].Name;   
            document.getElementById("userName").innerHTML = data[0].Name;   
            document.getElementById("userEmail").innerHTML = data[0].Email;   
            document.querySelectorAll('#userMobile','#exampleInputEmail1').innerHTML = data[0].MobileNumber;   
        }
}
// Calling that async function
getapi(api_url);