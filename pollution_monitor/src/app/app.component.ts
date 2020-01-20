import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './sidenav/sidenav.service';
import { RightnavbarComponent } from './rightnavbar/rightnavbar.component';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'title';

  @ViewChild('rightSidenav', { static: false }) public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    // this.sidenavService.setSidenav(this.sidenav);
  }
}
