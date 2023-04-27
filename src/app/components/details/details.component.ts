import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';
import { Materiel } from 'src/app/models/materiel';
import { SharedService } from 'src/app/SharedService';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  demandes:any;
  User:any;
  c:any;
  Materiel:any;
  id:any
  username:any;
  providerToUpdate:any;
  constructor(private service: HelpdeskserviceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
      this.id = params.get('id_demande'); 
      console.log("cc")
      console.log( this.id);
   
      }
      );
      
      
      this.service.getProvider(this.id).subscribe(
        response => {
        this.demandes= response;
         console.log(this.demandes.status);
         
        }
        );
      
       /* this.service. listmat(this.id).subscribe(
          response => {
          this.demandes= response;
          
          }
          );*/
          this.service.getMateriel(this.id).subscribe(
            response => {
            this.Materiel= response;
             
             console.log(this.Materiel);
            }
            );
  }
  

  updateProvider() {
 
    this.providerToUpdate = {
    status: 'confirmed'
    
    }
  
    console.log(this.providerToUpdate)
    console.log("1");
   this.service.updateProvider(this.id, this.providerToUpdate).subscribe(
    response => {
    
    console.log(response);
    
    }
    );
    

 
}
updatestatus() {
 
  this.providerToUpdate = {
  status: 'Canceled'
  
  }

  console.log(this.providerToUpdate)
  console.log("1");
 this.service.updateStatus(this.id, this.providerToUpdate).subscribe(
  response => {
  
  console.log(response);
  
  }
  );
  


}
 
}
