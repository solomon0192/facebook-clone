document.getElementById("login").onclick = function() {
    let phonenumber = document.getElementById("phno").value
    let password = document.getElementById("pas").value

    if(phonenumber === ""){
        alert("Please enter your phone number")
    }
    
    
    if(password === ""){
        alert("Enter your password")
    }
    if(password.length <= 7){
        alert("password must not be less that 8 characters")
    }
    
    else{
        window.location.href = "landpage.html"
    }
}


document.getElementById("create").onclick = function() {
    window.location.href = "register.html"
    
}


