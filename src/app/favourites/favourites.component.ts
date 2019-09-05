import { Component, OnInit } from '@angular/core';
import{CreateRepositoryService} from '../create-repository.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css','../../../bootstrap.min.css']
})
export class FavouritesComponent implements OnInit {
  private lev3:any;

  constructor(private _level3:CreateRepositoryService) { }

  ngOnInit() {
    this._level3.getfav()
    .subscribe(data => {this.lev3 = data
    console.log(data);});

  }

  removefav(k:any){
    this._level3.removef(k).subscribe();
    console.log(k);
  }

}
