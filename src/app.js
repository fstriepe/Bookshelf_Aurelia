import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'test',        moduleId: './test',       nav: true, title:'Book' },
      { route: 'book/:id', moduleId: './editBook', nav: false},
      { route: 'book', moduleId: './addBook', nav: false},
    ]);

    this.router = router;
  }
}
