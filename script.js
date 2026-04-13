function inputClicked(id) {
    console.log('Clicked on ' + id);
}

function submitForm() {
    console.log('called submitForm()');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    console.log('Name: ' + name + ', Email: ' + email);
    alert('form submitted');
}