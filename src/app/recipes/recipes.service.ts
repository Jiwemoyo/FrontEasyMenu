import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = `${environment.apiUrl}/recipes`;

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getRecipeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createRecipe(recipeData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, recipeData);
  }

  updateRecipe(id: string, recipeData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, recipeData);
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
