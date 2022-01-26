import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
})
export class MealComponent implements OnInit {
  @Input() meals: any;
  @Input() ingredients: any;

  constructor() {}

  ngOnInit(): void {}
}
