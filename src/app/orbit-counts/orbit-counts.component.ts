import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	//countItems: string[] = ['Total:', 'Communication:', 'Probe:', 'Space Station:', 'Telescope:', 'Positioning:', 'Space Debris:'];

  constructor() { }

  ngOnInit() {
  }

  countItems(type: string): number {
    let count = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (type.toLowerCase() === this.satellites[i].type.toLowerCase())
        count++;
    }
    return count;
	
  }

  /*countItems(type: string): number {
	let count = 0;
	type = type.substring(0, type.length -1);
	if (this.satellites && type !=='Total') {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	
		return count;
 		} else {
		return this.satellites.length;

 }*/



}