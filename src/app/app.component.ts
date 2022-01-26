import { Component } from '@angular/core';
import { MealService } from './meal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  meals: any = [];
  ingredients: any = [];
  strtNum: number = 1;
  ingr: string = '';
  measure: string = '';
  mealIngr: string = '';
  mealMeasure: string = '';

  constructor(private mealService: MealService) {}

  setIngredients() {
    while (this.strtNum <= 20) {
      this.ingr = `strIngredient${this.strtNum}`;
      this.measure = `strMeasure${this.strtNum}`;
      this.mealIngr = this.meals[0][this.ingr];
      this.mealMeasure = this.meals[0][this.measure];

      this.ingredients = [
        ...this.ingredients,
        [this.mealIngr, this.mealMeasure],
      ];
      this.strtNum = this.strtNum + 1;
    }
  }

  onSearch() {
    this.mealService.getMeal().subscribe((meals) => (this.meals = meals));
    setTimeout(() => {
      this.setIngredients();
    }, 1000);
  }
}
