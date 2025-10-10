//custom render function
function customRender(reactElement, container) {

    //here we have to define each & every prop(attributes) of the reactElement object
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
    */

    //So instead of defining each & every prop(attributes) we can use for..in loop
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') {continue;} //skipping children prop, if it is there in props
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

//react element object
const reactElement ={
    type: 'a',
    props: {
        href: 'https://www.youtube.com',
        target: '_blank'
    },
    children: ['Click me']
}

//getting main container from index.html
const mainContainer = document.getElementById('root');

//calling custom render function
customRender(reactElement, mainContainer);
