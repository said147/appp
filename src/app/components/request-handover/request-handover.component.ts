import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';
import { Demande } from 'src/app/models/demande';
import { Materiel } from 'src/app/models/materiel';
import { TokenStorageService } from 'src/app/_services/token-storage-service';

@Component({
  selector: 'app-request-handover',
  templateUrl: './request-handover.component.html',
  styleUrls: ['./request-handover.component.css']
})
export class RequestHandoverComponent implements OnInit {
    demandes:any;
    materiels: Materiel[]=[];
    employe:any;
  
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username?: string;
    id?: any;
    prenom?: any;
    departement?: any;
  constructor(private service: HelpdeskserviceService, private router: Router,private route: ActivatedRoute,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    /*this.route.paramMap.subscribe(
      params => {
      this.employe.id_employer = params.get('id_employer'); 
     console.log(this.employe.id_employer)
      }
      );
    this.service.getProviders(this.id).subscribe(
      response => {
      this.employe= response;
      }
      );*/
      this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    

      

      this.username = user.username;
      this.id=user.id;
      this.prenom=user.prenom;
      this.departement=user.departement;
      
    }
    
      
  }
  getAdminFormData(data:any){
   
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorageService.getUser();
    
      data.status="En cours";
       data.equipement="clav";
       data.model="asus";
       data.serial="000";
       data.comment ="ok";
       console.warn(data);
   
   this.service.saveDemande(data).subscribe((result)=>{
         console.warn(result);
       })
    }
   
   /* this.service.saveMateriel(data).subscribe((result)=>{
    
      console.warn(result);
    })*/
    
  }
  /*getAdminFormDat(data:any){
    const user = this.tokenStorageService.getUser();
    data.id=user.id;
    console.warn(data);*/
   /* this.service.saveMateriel(data).subscribe((result)=>{
      console.warn(result);
    })*/
 /* }*/

 /*public isUser(){
  if(this.tokenStorageService.)
 }*/
}
