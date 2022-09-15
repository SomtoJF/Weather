class loader
{
    constructor(element)
    {
        this.container = element;
    }

    on()
    {
        this.container.style.display = 'inline-block';
    };

    off()
    {
        this.container.style.display = 'none';
    };
};

export default loader;