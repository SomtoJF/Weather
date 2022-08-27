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

function changeIcon(element, weather){
    if(weather == 'Clouds'){

        element.style.backgroundImage = value.getPropertyValue('--cloudy-icon');
    };
    if(weather == 'Rain'){

        element.style.backgroundImage = value.getPropertyValue('--rainy-icon');
    };
    if(weather == 'Snow'){

        element.style.backgroundImage = value.getPropertyValue('--snowy-icon');
    };
    if(weather == 'Clear'){

        element.style.backgroundImage = value.getPropertyValue('--clear-icon');
    };
    if(weather == 'Sunny'){

        element.style.backgroundImage = value.getPropertyValue('--sunny-icon');
    };
};
export {changeIcon};
export default changeBackground;