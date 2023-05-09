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
      
       /* this.service. listmat(this.id).subscribe(
          response => {
          this.demandes= response;
          
          }
          );*/
         /* this.service.getMateriel(this.id).subscribe(
            response => {
            this.Materiel= response;
             
             console.log(this.Materiel);
            }
            );*/
  }

}
