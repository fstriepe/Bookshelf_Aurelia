import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client/http-response-message'

@inject(HttpClient)
@inject(HttpResponseMessage)
export class Test{

  headingBook = 'BookShelf';
  books =  [];
  url = 'http://localhost:8080/book';

  constructor(http,response){
    this.http = http;
    this.response = response;
  }

  activate(){
    return this.http.get(this.url).then(response => {
      this.books = JSON.parse(response.response);
    },response => {
      console.log("NOT OK !! " + response);
    });
  }
}
