import { Component, OnInit } from '@angular/core';
import{CreateRepositoryService} from '../create-repository.service';
@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css','../../../bootstrap.min.css']
})
export class Level1Component implements OnInit {
  private some0=[];
  constructor(private _level1:CreateRepositoryService) { }

  ngOnInit() {
    this._level1. createRepository()
    .subscribe( data => {this.some0= data} );
  }

}
