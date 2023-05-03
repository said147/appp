import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage-service';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';

@Component({
  selector: 'app-edit-handover',
  templateUrl: './edit-handover.component.html',
  styleUrls: ['./edit-handover.component.css']
})
export class EditHandoverComponent implements OnInit {
  id:any;
  demandes:any;
  providerToUpdate:any
  isLoggedIn = false;
  Materiel:any;
  constructor(private builder: FormBuilder,private tokenStorageService: TokenStorageService,private service: HelpdeskserviceService, private router: Router,private route: ActivatedRoute) { }

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
      console.log( this.demandes);
    /*  this.service.getMateriel(this.id).subscribe(
        response => {
        this.Materiel= response;
         
         console.log(this.Materiel);
        }
        );*/

      if (this.demandes.variants != null) {
        for (let i = 0; i < this.demandes.materiel.length; i++) {
          this.addRow();
        }
        }


         this.productform.patchValue({
           date: this.demandes.date,
           allocation_motive: this.demandes.allocation_motive,
           materiel: this.demandes.materiel

         })
      });
    
  }

  formvariant !: FormArray<any>;
  productform = this.builder.group({
    date: this.builder.control('', Validators.required),
    allocation_motive: this.builder.control('', Validators.required),
   /*  price: this.builder.control('', Validators.required),
    remarks: this.builder.control(''),
    category: this.builder.control(''),*/
    materiel: this.builder.array([])
  });
  addDemande(){
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorageService.getUser();
   
    console.log(this.productform.value);
    
   this.service.saveDemande(this.productform.value).subscribe((result)=>{
    console.warn(result);
  })
  }





  }
  


  addRow() {
    this.formvariant = this.productform.get("materiel") as FormArray;
    this.formvariant.push(this.Generaterow());
    /*this.demandesf.materiel.push( this.materiels);*/
    console.log('New row added successfully', 'New Row');
  }
  Generaterow() {
    return this.builder.group({
    /*  id: this.builder.control({ value: 0, disabled: true }),
      productCode: this.builder.control(this.productform.value.code),
      price: this.builder.control(this.productform.value.price),
      isactive: this.builder.control(true),*/
      equipement: this.builder.control(''),
      model: this.builder.control(''),
      serial: this.builder.control(''),
      comment: this.builder.control('')
    });
  }

  get materiels() {
    return this.productform.get("materiel") as FormArray;
  }



  updateProvider(){
   
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorageService.getUser();
   
      
      
     this.service.updateProviders(this.id, this.productform.value).subscribe(
      response => {
      
      console.log(response);
      
      }
      );
    }
  }

}
