import { Component } from '@angular/core';
interface IPosts {
  title: string;
  content: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPost: IPosts[] = [];

  onPostAdded(post:any){
    this.storedPost.push(post);
  }
}
