import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';

@Component({
  selector: 'app-details-return',
  templateUrl: './details-return.component.html',
  styleUrls: ['./details-return.component.css']
})
export class DetailsReturnComponent implements OnInit {
  id:any;
  demandes:any;
  dfd:any[]=[];
  d:any;
  providerToUpdate:any;
  constructor(private service: HelpdeskserviceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
      this.id = params.get('id_demandeRetour'); 
      console.log("cc")
      console.log( this.id);
   
      }
      );
      
      
      this.service.getDemandeRetourVoucher(this.id).subscribe(
        response => {
        this.demandes= response;
         console.log(this.demandes);
         
        }
        );
       /* this.service.getMaterielRetourVoucher(this.id).subscribe(
          response => {
          this.Materiel= response;
           
           console.log(this.Materiel);
          }
          );*/
       /* this.service. listmat(this.id).subscribe(
          response => {
          this.demandes= response;
          
          }
          );*/
       
  }
  updateProvider() {
 
    this.providerToUpdate = {
    status: 'confirmed'
    
    }
  
    console.log(this.providerToUpdate)
    console.log("1");
   this.service.updateRetour(this.id, this.providerToUpdate).subscribe(
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
 this.service.updateRetourStatus(this.id, this.providerToUpdate).subscribe(
  response => {
  
  console.log(response);
  
  }
  );
}
}
