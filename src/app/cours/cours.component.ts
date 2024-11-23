import { Component, OnInit } from '@angular/core';
import { Cours } from '../model/cours.model';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

     cours! : Cours[]; //un tableau de Cours
     
     constructor(private coursService: CoursService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerCours();
      }
    
      chargerCours(){
        this.coursService.listeCours().subscribe(cours => {
          console.log(cours);
          this.cours = cours;
          });
      }
   

 
  

}