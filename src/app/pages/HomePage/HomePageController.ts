const view = require('./HomePage.html');
const style= require('./HomePageStyle.scss');
const audio1= new Audio('../../../assets/Audio/Sonido_Crispetas_mp3cut.net.mp3');
const audio2= new Audio('../../../assets/Audio/Ambiente_en_la_ciudad_peatones_y_coches_Efecto_de_Sonido_City_ambience_Sound_Effect_mp3cut.net.mp3');
const audio3= new Audio('../../../assets/Audio/PS2_Startup_Screen_-_Sound_Effect_HD_mp3cut.net.mp3');

// const palomitas = document.querySelector('#cine');

export class HomePageController {

    // palomitas=palomitas;
    audio1=audio1;
    audio2=audio2;
    audio3=audio3;
    view = view;
    style=style;
    viewId: string = "Home-page"

    start(){

        /**
         * ESTA ES LA PARTE DE OROZCO
         */
        let animacion30 = document.getElementById('animadito');
        let quiensoy = document.getElementById('identity');
        
        /**
         * ESTA ES LA PARTE DE CARLOS
         *  */
        /**
        En esta funcion seleccionamos los ids de cada elemento y lo cguardamos en su
        respectiva variable.
         */
        let animacion = document.getElementById('flecha');
        let animacion1 = document.getElementById('flecha2');
        let animacion1_1 = document.getElementById('flecha3');

        let animacion2 = document.getElementById('proyectos1');
        let animacion3 = document.getElementById('proyectos2');
        let animacion4 = document.getElementById('proyectos3');
        let animacion5 = document.getElementById('proyectos4');
        let animacion6 = document.getElementById('proyectos5');

        let animaciontext = document.getElementById('text2');
        let animaciontext2 = document.getElementById('text3');
        let animaciontext3 = document.getElementById('text4');
        
        /**
        En esta parte se tomara tres elementos como referencia para medir
        la altura en la cual estan posicionados en la pantalla  */
        let positionObj1 = animacion.getBoundingClientRect().top;
        let positionObj2 = animacion2.getBoundingClientRect().top;
        let positionObj3 = animacion3.getBoundingClientRect().top;

        //Seleccion de LOBO
        let any1 = document.getElementById('sec1');
        let any2 = document.getElementById('sec2');
        let any3 = document.getElementById('sec3');
        let any4 = document.getElementById('sec4');
        let any5 = document.getElementById('sec5');

        let Pobj1 = any1.getBoundingClientRect().top;
        let Pobj2 = any2.getBoundingClientRect().top;
        let Pobj3 = any3.getBoundingClientRect().top;
        let Pobj4 = any4.getBoundingClientRect().top;
        let Pobj5 = any5.getBoundingClientRect().top;
        
        let PositionQuien = quiensoy.getBoundingClientRect().top;

        window.onscroll = (_:any) =>{

            if(window.scrollY+window.innerHeight/2 >= PositionQuien){
                quiensoy.style.left = `${(window.scrollY-700)/10}%`;
                // console.log(quiensoy.style.left);
                console.log((window.scrollY-700)/10);
            }

            animacion30.style.opacity= '1';
            /**
             * se realiza una comparacion entre la posicion del objeto
             * contra la posicion del scroll.
             * Si la posicion del scroll sobrepasa la del objeto, se incializa
             * la animacion. 
             * 
             */
            if((window.scrollY+window.innerHeight/2)>=positionObj1 ){
                animacion.style.animation = 'mover 2s ease-out';
                animacion.style.opacity = '1';
                animacion1.style.animation = 'mover2 2s ease-out';
                animacion1.style.opacity = '1';
                animacion1_1.style.animation = 'mover3 2s ease-out';
                animacion1_1.style.opacity = '1';
                
            }
            /**
             * lo mismo sucede en el siguiente caso, pero esta vez con mas elemntos a iniciar
             * la animacion de aparecer en la pantalla.
             */
            
            if((window.scrollY+window.innerHeight/2)>=positionObj2 && (window.scrollY+window.innerHeight/2)>=positionObj3 ){
                animacion2.style.animation = 'aparecer 2s ease-out';
                animacion2.style.opacity= '1';
                animacion3.style.animation = 'aparecer 2s ease-out';
                animacion3.style.opacity= '1';

                animacion4.style.animation = 'aparecer 2s ease-out';
                animacion4.style.opacity = '1'; 

                animacion5.style.animation = 'aparecer 2s ease-out';
                animacion5.style.opacity= '1';
                animacion5.style.animation = 'aparecer 2s ease-out';
                animacion5.style.opacity= '1';
                animacion6.style.animation = 'aparecer 2s ease-out';
                animacion6.style.opacity= '1';
                
                animaciontext.style.animation = 'aparecer 2s ease-out';
                animaciontext.style.opacity= '1';
                animaciontext2.style.animation = 'aparecer 2s ease-out';
                animaciontext2.style.opacity= '1';
                animaciontext3.style.animation = 'aparecer 2s ease-out';
                animaciontext3.style.opacity= '1';
                
            }
            //CONDICIONES LOBO
            if((window.scrollY+window.innerHeight/2)>=Pobj1){
                any1.style.opacity='1';
        
            }
            if((window.scrollY+window.innerHeight/2)>=Pobj2){
                any2.style.opacity='1';
                
            }
            if((window.scrollY+window.innerHeight/2)>=Pobj3){
                any3.style.opacity='1';
                
            }
            if((window.scrollY+window.innerHeight/2)>=Pobj4){
                any4.style.opacity='1';
                
            }
            if((window.scrollY+window.innerHeight/2)>=Pobj5){
                any5.style.opacity='1';
                
            }
        }  
        this.play();
        
        
    }

    constructor() { 
        
    }
    
    getView(): [string, DocumentFragment] {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    }
    play(){
        document.getElementById('cine').onmouseenter= () =>{ //cine
            this.audio1.play().then().catch(err => console.log(`No tienes ninguna cancion puesta we `));
            this.audio1.volume=0.5;
        }
        document.getElementById('ciudad').onmouseenter= () =>{ //ciudad
            this.audio2.play().then().catch(err => console.log(`No tienes ninguna cancion puesta we `));
            this.audio2.volume=0.5;
        }
        document.getElementById('consola').onmouseenter= () =>{ //consola
            this.audio3.play().then().catch(err => console.log(`No tienes ninguna cancion puesta we `));
            this.audio3.volume=0.5;
        }

    }
    
    
  
}