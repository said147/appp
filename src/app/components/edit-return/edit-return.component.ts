import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage-service';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';

@Component({
  selector: 'app-edit-return',
  templateUrl: './edit-return.component.html',
  styleUrls: ['./edit-return.component.css']
})
export class EditReturnComponent implements OnInit {
  id:any;
  demandes:any;
  providerToUpdate:any
  isLoggedIn = false;
  constructor(private builder: FormBuilder,private tokenStorageService: TokenStorageService,private service: HelpdeskserviceService, private router: Router,private route: ActivatedRoute) { }

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
          date_retour: this.demandes.date_retour,
          name_verified: this.demandes.name_verified,
          reason: this.demandes.reason,
          materielRetour: this.demandes.materielRetour

         })
      });
  }
  formvariant !: FormArray<any>;
  productform = this.builder.group({
    date_retour: this.builder.control('', Validators.required),
    name_verified: this.builder.control('', Validators.required),
    reason: this.builder.control('', Validators.required),
   
   /*  price: this.builder.control('', Validators.required),
    remarks: this.builder.control(''),
    category: this.builder.control(''),*/
    materielRetour: this.builder.array([])
  });
  updateDemandeReturn(){
   
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorageService.getUser();
   
      
      
    /* this.service.updateProviders(this.id, this.productform.value).subscribe(
      response => {
      
      console.log(response);
      
      }
      );*/
    }
  }
  addRow() {
    this.formvariant = this.productform.get("materielRetour") as FormArray;
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
      level: this.builder.control(''),
      comment: this.builder.control('')
    });
  }

  get materiels() {
    return this.productform.get("materielRetour") as FormArray;
  }
}
