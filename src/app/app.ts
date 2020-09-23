import{Loading}from './pages/load/load'
import{HomePageController} from './pages/HomePage/HomePageController'
class App {
  
  
  mainPages = [
    Loading,
    HomePageController
    
  ];
  loaded: any =[]; 

  render() {
    const component = this.component();

    this.mainPages.forEach(pageController => {
      const controller = new pageController();
      this.loaded.push(controller);
      const [elId, element] = new pageController().getView();
      component.appendChild(this.createPage(elId, element));
    })

    document.body.append(component);
    /**
     * Este es el cambio
     */
    document.body.onload = () =>{
      this.loaded.forEach((controller: any) => {
        controller.start();
      })
    }
  }

  createPage(id: string, element: DocumentFragment) {
    const page = document.createElement('div');
    page.id = id;
    page.appendChild(element);
    return page;
  }

  component() {
    const element = document.createElement('div');
    element.id = "app";
    return element;
  }
}

const app = new App();
app.render();
