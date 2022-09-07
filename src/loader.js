let loader = document.getElementById('loader');
function loaderOn()
{
    loader.style.display = 'inline-block';
};

function loaderOff()
{
    loader.style.display = 'none';
};

export { loaderOff, loaderOn };