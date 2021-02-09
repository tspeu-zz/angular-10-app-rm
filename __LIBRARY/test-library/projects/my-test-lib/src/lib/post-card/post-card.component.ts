import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

export interface PostData{
  name: string;
  content: string;
}

@Component({
  selector: 'lib-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit, OnChanges {

  @Input('post-data') postInput: PostData;

  @Output() postData =  new EventEmitter<PostData>();

  name: string;
  content: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ONcHANGES');
    console.log(changes);
    this.name = this.postInput.name ;
    this.content = this.postInput.content;
  }

  get GetName(): string{
    return this.postInput.name;
  }

  // set SetName(name: string){
  //   this.name = name;
  // }

  get GetContent(){
    return this.postInput.content;
  }

  ngOnInit(): void {
  }

  onPostData() {
    console.log('POST EMITE->');
    this.postData.emit({
      name: this.name,
      content: this.content
    });
  }

}
