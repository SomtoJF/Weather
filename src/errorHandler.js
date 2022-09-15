let errorContainer = document.getElementById('error');
class ErrorHandler
{
    constructor(container)
    {
        this.container = container;
    }

    clear()
    {
        this.container.textContent = '';
    };

    display()
    {
        this.container.textContent = 'Invalid Entry';
    }
}

let error = new ErrorHandler(errorContainer);
export default error;