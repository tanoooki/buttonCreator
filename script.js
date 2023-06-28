const controles = document.getElementById('controles');
const css = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange)

const handleStyle ={
    element: btn,
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.heigth = value + 'px';
    }
}


function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);
}
