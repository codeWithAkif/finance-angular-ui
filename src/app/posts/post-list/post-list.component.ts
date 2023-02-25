import { Component, Input} from '@angular/core';
interface IPosts {
    title: string;
    content: string;
};
@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
    panelOpenState = false;
    // posts=[
    //     {title:'First Post', content:'This is the First Post'},
    //     {title:'Second Post', content:'This is the Second Post'},
    //     {title:'Third Post', content:'This is the Third Post'}
    // ]
      
    @Input() posts: IPosts[] = [];
    
}