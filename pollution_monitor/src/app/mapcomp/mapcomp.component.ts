import { Component, OnInit , ViewChild } from '@angular/core';
import { MapService} from '../map.service';
import { } from 'googlemaps';

// import * as fs from 'fs';
@Component({
  selector: 'app-mapcomp',
  templateUrl: './mapcomp.component.html',
  styleUrls: ['./mapcomp.component.css']
})
export class MapcompComponent implements OnInit {


  display: any = [];
  mapMarker: any = [];
  pollutantClick: any;


  constructor(public mapService: MapService) {

    this.mapService.listen().subscribe((m: any) => {
      console.log(m, 'fdghd');
      this.pollutantClick=m;
      this.onFilterClick(m);
  });



   }

  title = 'My first AGM project';
  fullImagePath: any;
  lat = 8.5557248;
  lng = 76.8836223;
  markers: any = [];
  show:boolean = false;
  color1: any =  {
    url: '../assets/img/index.png',
    scaledSize: {
        width: 20,
        height: 60
    }
  };

  color2: any = {
    url: '../../assets/img/768px-Yellow_icon.png',
    scaledSize: { width: 20, height: 10 }
  };

  color3: any = {
    url: './assets/img/768px-Yellow_icon.svg',
    scaledSize: { width: 50, height: 60 }
  };






onFilterClick(pollutant: string) {
// const dataa;
for (let i = 1; i <= 5; i++) {
  // tslint:disable-next-line: triple-equals
  this.display = this.markers.filter(item => item.devnum == i);
  const temp: any = this.display[this.display.length - 1];

  // tslint:disable-next-line: triple-equals
  if (pollutant ==  'PSI') {
  if ( temp[pollutant] <= 50) {
    this.display[this.display.length - 1].name = temp[pollutant],
     this.display[this.display.length - 1].url = this.color1;
  } else if ( temp[pollutant] <= 100) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = this.color1;
  } else if ( temp[pollutant] <= 200) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = this.color1;
  } else if ( temp[pollutant] <= 300) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = this.color1;
  } else if ( temp[pollutant] > 300) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = this.color1;
  }
}


  // tslint:disable-next-line: triple-equals
  if (pollutant == 'NO2') {
  if ( temp[pollutant] <= 40) {
    this.display[this.display.length - 1].name = temp[pollutant],
     this.display[this.display.length - 1].url = 'http://icongal.com/gallery/download/446944/256/ico';
  } else if ( temp[pollutant] <= 80) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 180) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 280) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 565) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 940) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] > 940) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  }
}


  // tslint:disable-next-line: triple-equals
  if (pollutant == 'SO2') {
  if ( temp[pollutant] <= 50) {
    this.display[this.display.length - 1].name = temp[pollutant],
     this.display[this.display.length - 1].url = 'http://icongal.com/gallery/download/446944/256/ico';
  } else if ( temp[pollutant] <= 150) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 475) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 800) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 1600) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 2620) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] > 2620) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  }
}

  if (pollutant === 'PM10') {
  if ( temp[pollutant] <= 50) {
    this.display[this.display.length - 1].name = temp[pollutant],
     this.display[this.display.length - 1].url = 'http://icongal.com/gallery/download/446944/256/ico';
  } else if ( temp[pollutant] <= 150) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 250) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 350) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 420) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 600) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] > 600) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  }
}

  if (pollutant === 'CO') {
  if ( temp[pollutant] <= 2000) {
    this.display[this.display.length - 1].name = temp[pollutant],
     this.display[this.display.length - 1].url = 'http://icongal.com/gallery/download/446944/256/ico';
  } else if ( temp[pollutant] <= 4000) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 14000) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 24000) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 36000) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 60000) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] > 60000) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  }
}


  if (pollutant === 'PM2.5') {
  if ( temp[pollutant] <= 55) {
    this.display[this.display.length - 1].name = temp[pollutant],
     this.display[this.display.length - 1].url = 'http://icongal.com/gallery/download/446944/256/ico';
  } else if ( temp[pollutant] <= 150) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 250) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] > 250) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  }
}

  if (pollutant === 'O3') {
  if ( temp[pollutant] <= 100) {
    this.display[this.display.length - 1].name = temp[pollutant],
     this.display[this.display.length - 1].url = 'http://icongal.com/gallery/download/446944/256/ico';
  } else if ( temp[pollutant] <= 160) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 215) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 265) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  } else if ( temp[pollutant] <= 800) {
    this.display[this.display.length - 1].name = temp[pollutant],
    this.display[this.display.length - 1].url = 'https://phentpurwhaky.tk/photo/183067.jpg';
  }
}
  console.log(this.display[this.display.length - 1], 'lk');

  this.mapMarker.push(this.display[this.display.length - 1]);
}






 // console.log(pollutant, 'pollutant===========>>',this.mapMarker,temp[pollutant]);

}

markerClicked(data) {

  var locationTime = new Date(data.time).toUTCString();
var time=locationTime.split(' ').slice(0, 5).join(' ');

  this.show = true;
  console.log(data, 'dstadstadsta');
}

closeNav()
{
  this.show = false;
}

  ngOnInit() {

    this.mapService.getPollutantData().subscribe(res => {

this.markers = res;
// console.log(res, 'bfkjdskjlklfjdkl;' )
    });
  }

}
