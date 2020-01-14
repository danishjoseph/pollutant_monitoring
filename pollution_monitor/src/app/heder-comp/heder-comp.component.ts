import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { RightnavbarComponent } from '../rightnavbar/rightnavbar.component';

@Component({
  selector: 'app-heder-comp',
  templateUrl: './heder-comp.component.html',
  styleUrls: ['./heder-comp.component.css']
})
export class HederCompComponent implements OnInit {

  constructor(private sidenav: SidenavService) {

  }
 toggleActive: boolean;
 toggleMarker: boolean;

 toggleRightSidenav() {
   this.toggleActive = !this.toggleActive;
   this.sidenav.toggle();

   console.log('Clicked');
 }

 ngOnInit() {
}

}
