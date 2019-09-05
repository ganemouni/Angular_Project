import { Component, OnInit } from '@angular/core';
import{CreateRepositoryService} from '../create-repository.service';


@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css','../../../bootstrap.min.css']
})
export class Level2Component implements OnInit {
private some=[];


  constructor(private _level2:CreateRepositoryService) { }

  ngOnInit() {
    this._level2. createRepository()
    .subscribe( data => {this.some= data} );
  }
   x = new Date();
  public addtofav(kk:any){
     this._level2.addtof(kk).subscribe();
     console.log(kk);
   }

}
