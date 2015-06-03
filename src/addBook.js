import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {HttpResponseMessage} from 'aurelia-http-client/http-response-message'
import {Router} from 'aurelia-router';

@inject(HttpClient)
@inject(HttpResponseMessage)
@inject(Router)
export class EditBook{
  tmp;
  id;
  title;
  isbn;
  description;
  price;
  url = 'http://localhost:8080/book/';

  constructor(http,response,router){
    this.http = http;
    this.router = router;
    this.r = response;
    this.http.configure(x => {
      x.withHeader('Content-Type','application/json');
    });
  }

  add(){
    this.tmp ="{title:'" + this.title + "', isbn : '"  + this.isbn+"' , description : '"+this.description +"', price : '"+ this.price + " '}";
    return this.http.post(this.url,  JSON.stringify(eval('('+this.tmp+')'))).then( r => {
        console.log("Message sent, so OK : " + r.status);
        window.location.href = "#/test";
      },r => {
        console.log("NOT OK : " +  JSON.stringify(eval('('+this.tmp+')')) + r.status);
      }
    );

  }

  activate(){
  }


}
