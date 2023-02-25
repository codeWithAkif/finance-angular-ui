import { Component, EventEmitter, Output } from "@angular/core";
import {IPost} from '../post.model';
import {NgForm} from "@angular/forms";

@Component({
    selector:'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls:['./post-create.component.css']
})

export class PostCreateComponent{
    enteredTitle='';
    enteredContent='';
    @Output() postCreated= new EventEmitter<IPost>();

    onAddPost(form:NgForm){
        if(form.invalid){
            return;
        }
        const post:IPost ={
            title:form.value.title,
            content:form.value.content
        }
        this.postCreated.emit(post);
    }
}