import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
  <input
    #inputSearch
    type="text"
    autofocus
    placeholder="Search..."
    class="form-control-lg"
    (keyup)="onSearch(inputSearch.value)"
  />
  `,
  styles: ['input {width:100%;}']
})
export class FormSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(data:string) {
    if(data && data.length > 3){
      console.log('busca ', data);
      this.router.navigate(['/character-list'],{
        queryParams:{q:data}
      });
  }

  }

}
