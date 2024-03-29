import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/_services/token-storage-service';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';

@Component({
  selector: 'app-request-voucher',
  templateUrl: './request-voucher.component.html',
  styleUrls: ['./request-voucher.component.css']
})
export class RequestVoucherComponent implements OnInit {
  username?: string;
  id?: any;
  prenom?: any;
  departement?: any;
  isLoggedIn = false;
  @Input() name: Date;
  constructor(private builder: FormBuilder,private tokenStorageService: TokenStorageService,private service: HelpdeskserviceService) { 
    this.name = new Date();
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.id=user.id;
      this.prenom=user.prenom;
      this.departement=user.departement; 
    }
    const name = new Date();
    console.log(name)
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
  addDemandeReturn(){
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorageService.getUser();
   
    console.log(this.productform.value);
    
   this.service.saveDemandeRetourVoucher(this.productform.value).subscribe((result)=>{
    console.warn(result);
  })
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
