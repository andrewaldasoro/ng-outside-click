import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'outside-click';

	@ViewChild('testButton', {static: false}) testButton: ElementRef;
	
	@HostListener('document:npmclick', ['$event']) onClick(event) {
		if (this.testButton.nativeElement.contains(event.target)) {// or some similar check
			console.log('Click Inside');
		} else {
			console.log('Click Outside');
		}
	}

}
