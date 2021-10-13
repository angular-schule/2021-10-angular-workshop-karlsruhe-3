import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  currentWidth = 0;

  constructor() {

    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent(window, 'resize').pipe(
      // map(() => window.innerWidth) --> Pipes sollten pure bleiben
      map(e => (e.target as Window).innerWidth),
      debounceTime(1000),
      startWith(-999),
      startWith(-888),
      tap(console.log) // --> Seiteneffekte immer nur mit tap
    )
    .subscribe(width => this.currentWidth = width)


    /******************************/
  }

}
