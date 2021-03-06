import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Hero} from '../models/hero'
import {HeroViewer} from './hero-show'
import {HeroService} from "../services/hero-service";

@Component({
    selector: 'heros-app',
    template: `
       <a href (click)="add()" class="btn btn-info">
            <i class="fa fa-plus"></i> Add
       </a>
       <div *ngIf="heroService.heroes">
          <table>
            <tr *ngFor="#hero of heroService.heroes">
                <td>
                  {{ hero.name }}
                </td>
                <td>
                    <a href (click)="select(hero)" class="btn btn-info">
                        <i class="fa fa-caret-square-o-down"></i> Show
                    </a>
                    <a href [routerLink]="['/Edit', {id: hero._id}]" class="btn btn-info">
                        <i class="fa fa-pencil-square-o"></i> Edit
                    </a>
                    <a href (click)="remove(hero)" class="btn btn-info">
                        <i class="fa fa-trash-o"></i> Remove
                    </a>
                </td>
          </tr>
          </table>
          <h2>Selected hero: {{heroService.selectedHero?.name}}</h2>
          <hero-show [hero]="heroService.selectedHero"></hero-show>
        </div>
        `,
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, HeroViewer ]
})

export class HeroList {
    constructor(public heroService : HeroService, public router: Router) {
    }

    //auto-executed during the component initialization
    ngOnInit() {
        //If the heroes list is undefined then fetch the data from REST service
        if (!this.heroService.heroes) {
            //After getting the heros -> get their quotes
            //This is a demo of two async calls done in sequence
            this.heroService.fetchHeros().subscribe(
                    (heroes:Hero[]) => {
                        this.heroService.heroes = heroes;
                        this.heroService.selectedHero = heroes[0];
                    },
                    (err) => console.error('There was an error: ' + err),
                    () => console.log('Completed!')
                );
        }
    }

    add() {
        this.router.navigate(['/Add']);
        return false;
    }

    select(hero: Hero) {
        this.heroService.selectedHero = hero;
        return false;
    }

    remove(hero: Hero) {
        if (confirm("Confirm delete?")) {
            this.heroService.remove(hero);
        }
        return false;
    }
}