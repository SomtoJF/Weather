let locationContainer = document.getElementById('Location');

function getLocation(){
    let form = document.createElement('form');
    let inputLocation = document.createElement('input');
    inputLocation.setAttribute('id', 'inputLocation');
    inputLocation.setAttribute('required', '');
    inputLocation.setAttribute('placeholder', 'London');
    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    form.appendChild(inputLocation);
    form.appendChild(submitButton);
    locationContainer.appendChild(form);
}

export default getLocation;