let backgroundContainer = document.getElementById('background');
let rootElement = document.documentElement;
let value = getComputedStyle(rootElement);

function changeBackground(weather){
    if(weather == 'Clouds'){

        rootElement.style.setProperty('--background', value.getPropertyValue('--cloudy'));
    };
    if(weather == 'Rain'){

        rootElement.style.setProperty('--background', value.getPropertyValue('--rain'));
    };
    if(weather == 'Snow'){

        rootElement.style.setProperty('--background', value.getPropertyValue('--snow'));
    };
    if(weather == 'Clear'){

        rootElement.style.setProperty('--background', value.getPropertyValue('--clear'));
    };
    if(weather == 'Sunny'){

        rootElement.style.setProperty('--background', value.getPropertyValue('--sunny'));
    };
};

export default changeBackground;