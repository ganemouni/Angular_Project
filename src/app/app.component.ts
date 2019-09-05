import { Component } from '@angular/core';
import{CreateRepositoryService} from './create-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../bootstrap.min.css']
})
export class AppComponent {
  title = 'GitHubProject';
  public searches:any;
  
  

  private gane=[];
  private another=[];
  public displayname=true;
  constructor(private _createrep:CreateRepositoryService){

  }
  
  ngOnInit()
  {
    this._createrep. createRepository()
    .subscribe( data => {this.gane= data} );
  }
  random(z){

    this._createrep.searchRepository(z).subscribe(data =>{this.another=data;console.log(data);});
    this.displayname=false;
  }
  work(){
    this.displayname=true;
  }

}
