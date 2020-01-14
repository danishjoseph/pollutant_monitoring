import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { RightnavbarComponent } from '../rightnavbar/rightnavbar.component';

@Injectable()
export class SidenavService {

    private sidenav: MatSidenav;
 //   private sidemenu: MatSidenav;

    public setSidenav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
    }

    public open() {
        return this.sidenav.open();
    }


    public close() {
        return this.sidenav.close();
    }

    public toggle(): void {
        this.sidenav.toggle();
    }



//     public sideMenu(sidemenu: MatSidenav) {
//         this.sidemenu = sidemenu;
//     }

//     public Menuopen() {
//         return this.sidemenu.open();
//     }


//     public Menuclose() {
//         return this.sidemenu.close();
//     }

//     // public toggleMarker(): void {
//     //     this.sidemenu.toggle();
//     // }
 }