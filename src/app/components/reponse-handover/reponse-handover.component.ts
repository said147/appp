import { Component, OnInit } from '@angular/core';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';
import { SharedService } from 'src/app/SharedService';
import { TokenStorageService } from 'src/app/_services/token-storage-service';

@Component({
  selector: 'app-reponse-handover',
  templateUrl: './reponse-handover.component.html',
  styleUrls: ['./reponse-handover.component.css']
})
export class ReponseHandoverComponent implements OnInit {
  isLoggedIn = false;
  username?: string;
    id?: any;
    prenom?: any;
    departement?: any;
    demandes:any;

  constructor(private service: HelpdeskserviceService,private sharedService: SharedService,private tokenStorageService: TokenStorageService) { }
a=this.sharedService.data;
  ngOnInit(): void {
    
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    

      

      this.username = user.username;
      this.id=user.id;
      this.prenom=user.prenom;
      this.departement=user.departement;
      
      
    }
    this.service.rep(this.id).subscribe(
      response => {
        this.demandes= response;
       console.log( this.demandes)
    
      
      
      
      }
      
      );
    console.log(this.id)
    
  }
  Ondeleted( id_demande:any){
   this.service.deletet(id_demande).subscribe(
    response => {
     
     console.log( "said")
  
    
    
    
    }
    
    );
  }
  

}
