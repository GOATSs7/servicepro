import { Component, OnInit, inject } from '@angular/core';
import { ApicallService } from '../../../services/apicall.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  randomMeal: any;
  ApicallService = inject(ApicallService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ApicallService.getRandomMeal().subscribe((data) => {
      this.randomMeal = data.meals[0];
      // console.log(data);
    });
  }

  showNewMeal() {
    this.ApicallService.getRandomMeal().subscribe(
      (response) => (this.randomMeal = response.meals[0])
    );
  }
}
