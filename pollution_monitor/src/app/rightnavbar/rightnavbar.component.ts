import { Component, OnInit, ViewChild , Output , EventEmitter } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { MatSidenav , MatRadioChange } from '@angular/material';
import { MapService } from '../map.service'
import { MapcompComponent} from '../mapcomp/mapcomp.component';
@Component({
  selector: 'app-rightnavbar',
  templateUrl: './rightnavbar.component.html',
  styleUrls: ['./rightnavbar.component.css']
})
export class RightnavbarComponent implements OnInit {

  @Output() onFilter: EventEmitter<any> = new EventEmitter();

  @ViewChild('rightSidenav', { static: true }) public sidenav: MatSidenav;
  // @ViewChild('rightMenu') public sidemenu: MatSidenav;
 array: any = [];
pollutant: any;
  constructor(private sidenavService: SidenavService , public mapService :MapService) { }

  ngOnInit(): void {
    this.array = ['PSI', 'CO', 'SO2', 'NO2', 'PM10', 'PM2.5', 'O3' ]
    this.sidenavService.setSidenav(this.sidenav);
    // this.sidenavService.setSidenav(this.sidemenu);
  }
  radioChange(event: MatRadioChange) {
    this.pollutant = event.value;
    this.mapService.filter( this.pollutant);
  
    console.log(this.pollutant);
}
}
