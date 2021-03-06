import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere auΓerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 1. Observer
    const observer = {
      next: (e: string) => this.log(e),
      error: (err: any) => this.log('ERROR' + err),
      complete: () => this.log('COMPLETE! β')
    }

    // 2. Observable
    // const observable$ = of('π', 'π', 'π')

    // 3. Subscriber
    const observable$ = new Observable<string>(subscriber => {
      subscriber.next('π');
      subscriber.next('π');
      subscriber.next('π');

      const y = setTimeout(() => subscriber.next('π€―'), 1000);
      const z = setTimeout(() => { subscriber.next('π€―'); this.log('ZOMBIES') }, 1500);
      // setTimeout(() => subscriber.error('Boom!'), 500);

      return () => {
        this.log('Es wurde unsubscribed!');
        clearTimeout(y)
        clearTimeout(z)
      };
    });

    // 4. Subscription
    const subscription = observable$.subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 1200);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
