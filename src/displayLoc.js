let locationContainer = document.getElementById('Location');

function displayLoc(city){
    let form = document.createElement('form');
    let inputLocation = document.createElement('input');
    inputLocation.setAttribute('id', 'inputLocation');
    inputLocation.setAttribute('required', '');
    inputLocation.setAttribute('placeholder', city);
    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    form.appendChild(inputLocation);
    form.appendChild(submitButton);
    locationContainer.appendChild(form);
}

export default displayLoc;