// Name: Fariha Afroz, ID: 2230563

function showAlert() {
    alert("Welcome to My Online Store!");
}

function addToCart() {
    alert("Item added to cart!");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("All fields must be filled out");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
