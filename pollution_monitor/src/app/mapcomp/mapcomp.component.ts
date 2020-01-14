import { Component, OnInit } from '@angular/core';
import { MapService} from '../map.service';
// import * as fs from 'fs';
@Component({
  selector: 'app-mapcomp',
  templateUrl: './mapcomp.component.html',
  styleUrls: ['./mapcomp.component.css']
})
export class MapcompComponent implements OnInit {
  display: any=[];
  mapMarker: any=[];
  

  constructor(public mapService: MapService) {

    this.mapService.listen().subscribe((m:any) => {
      console.log(m,"fdghd");
      this.onFilterClick(m);
  })
    

 
   }

  title = 'My first AGM project';
  fullImagePath: any;
  lat = 8.5557248;
  lng = 76.8836223;
  markers:any= [];
  color1: any = {
    url: 'https://phentpurwhaky.tk/photo/183067.jpg',
    scaledSize: { width: 50, height: 60 }
  };

  color2: any = {
    url: 'https://phentpurwhaky.tk/photo/183067.jpg',
    scaledSize: { width: 50, height: 60 }
  };

  color3: any = {
    url: 'http://icongal.com/gallery/download/446944/256/ico',
    scaledSize: { width: 50, height: 60 }
  };


onFilterClick(pollutant:string){
// const dataa;
for(let i=1;i<=5;i++){
  this.display = this.markers.filter(item=>item.devnum == i)
  var temp:any = this.display[this.display.length-1]

  if(pollutant=="PSI"){
  if( temp[pollutant]<=50){
    this.display[this.display.length-1].name=temp[pollutant],
     this.display[this.display.length-1].url= 'http://icongal.com/gallery/download/446944/256/ico'
  }else if( temp[pollutant] <=100) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=200) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=300) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] >300) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }
}


if(pollutant=="NO2"){
  if( temp[pollutant]<=40){
    this.display[this.display.length-1].name=temp[pollutant],
     this.display[this.display.length-1].url= 'http://icongal.com/gallery/download/446944/256/ico'
  }else if( temp[pollutant] <=80) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=180) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=280) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=565) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=940) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] >940) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }
}


if(pollutant=="SO2"){
  if( temp[pollutant]<=50){
    this.display[this.display.length-1].name=temp[pollutant],
     this.display[this.display.length-1].url= 'http://icongal.com/gallery/download/446944/256/ico'
  }else if( temp[pollutant] <=150) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=475) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=800) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=1600) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=2620) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] >2620) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }
} 

if(pollutant=="PM10"){
  if( temp[pollutant]<=50){
    this.display[this.display.length-1].name=temp[pollutant],
     this.display[this.display.length-1].url= 'http://icongal.com/gallery/download/446944/256/ico'
  }else if( temp[pollutant] <=150) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=250) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=350) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=420) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=600) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] >600) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }
}

if(pollutant=="CO"){
  if( temp[pollutant]<=2000){
    this.display[this.display.length-1].name=temp[pollutant],
     this.display[this.display.length-1].url= 'http://icongal.com/gallery/download/446944/256/ico'
  }else if( temp[pollutant] <=4000) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=14000) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=24000) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=36000) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=60000) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] >60000) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }
}


if(pollutant=="PM2.5"){
  if( temp[pollutant]<=55){
    this.display[this.display.length-1].name=temp[pollutant],
     this.display[this.display.length-1].url= 'http://icongal.com/gallery/download/446944/256/ico'
  }else if( temp[pollutant] <=150) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=250) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] >250) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }
}

if(pollutant=="O3"){
  if( temp[pollutant]<=100){
    this.display[this.display.length-1].name=temp[pollutant],
     this.display[this.display.length-1].url= 'http://icongal.com/gallery/download/446944/256/ico'
  }else if( temp[pollutant] <=160) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=215) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=265) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }else if( temp[pollutant] <=800) {
    this.display[this.display.length-1].name=temp[pollutant],
    this.display[this.display.length-1].url= 'https://phentpurwhaky.tk/photo/183067.jpg'
  }
}
 // console.log(this.display[this.display.length-1])

  this.mapMarker.push(this.display[this.display.length-1]) 
}






 console.log(pollutant, 'pollutant===========>>',this.mapMarker,temp[pollutant]);

}

  ngOnInit() {

    this.mapService.getPollutantData().subscribe(res => {

this.markers=res;
// console.log(res, 'bfkjdskjlklfjdkl;' )
    });
  }

}
