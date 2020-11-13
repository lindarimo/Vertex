import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-where-page',
  templateUrl: './where-page.component.html',
  styleUrls: ['./where-page.component.scss']
})
export class WherePageComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;
  lat = 45.551798;
  lng = 9.075016;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 19,
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  constructor(
    private title: Title,
    private meta: Meta) { }
  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.title.setTitle('Vertex Arese - Palestra e centro medico polispecialistico | dove siamo');
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({ name: 'description', content: 'Arese(MI) - Via XXV Aprile, 31.' });
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }
}