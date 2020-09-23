const view = require('./load.html');
const style= require('./load.scss');

// const palomitas = document.querySelector('#cine');

export class Loading{

    // palomitas=palomitas;
    view = view;
    style=style;
    viewId: string = "Loading";

    start(){
        //al cargar la pagina load se oculta 
        document.getElementById('load').style.display='none';
        
    }
           
    constructor() { 
        
    }
    
    getView(): [string, DocumentFragment] {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    }
}