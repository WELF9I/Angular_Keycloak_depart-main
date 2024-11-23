import { Injectable } from '@angular/core';
import { Cours } from '../model/cours.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  apiURL: string = 'http://localhost:8080/cours/api/all';

  cours!: Cours[]; //un tableau de cours

  constructor(private http: HttpClient) { }

  listeCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.apiURL);
  }
}