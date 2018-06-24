import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../_services/spotify.service';
import { Artist } from '../../_models/Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[];
  constructor(private _spotifyService:SpotifyService) {

   }

  ngOnInit() {
  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      //console.log(res.artists.items);
      this.searchRes = res.artists.items;
    });
  }

}
