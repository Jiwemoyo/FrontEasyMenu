import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(
      (data: any) => {
        this.recipes = data;
      },
      (error: any) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }
}
