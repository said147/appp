import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage-service';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrls: ['./request-change.component.css']
})
export class RequestChangeComponent implements OnInit {
  demandes:any;
    materiels: Materiel[]=[];
    employe:any;
    dynamicArray :any= [];
  
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username?: string;
    id?: any;
    prenom?: any;
    departement?: any;
  constructor(private builder: FormBuilder,private service: HelpdeskserviceService, private router: Router,private route: ActivatedRoute,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    

      

      this.username = user.username;
      this.id=user.id;
      this.prenom=user.prenom;
      this.departement=user.departement;
      
  }
  
}

formvariant !: FormArray<any>;
productform = this.builder.group({
  date: this.builder.control('', Validators.required),
 
 /*  price: this.builder.control('', Validators.required),
  remarks: this.builder.control(''),
  category: this.builder.control(''),*/
  materielChangeAncient: this.builder.array([]),
  materielChangeNew: this.builder.array([]),
});
addDemandeChange(){
  if (this.tokenStorageService.getToken()) {
    this.isLoggedIn = true;
    const user = this.tokenStorageService.getUser();
 
  console.log(this.productform.value);
  
 this.service.saveDemandeChange(this.productform.value).subscribe((result)=>{
  console.warn(result);
})

}






}

addRow1() {
  this.formvariant = this.productform.get("materielChangeAncient") as FormArray;
  this.formvariant.push(this.Generaterow1());
  /*this.demandesf.materiel.push( this.materiels);*/
  console.log('New row added successfully', 'New Row');





}
addRow2() {
  this.formvariant = this.productform.get("materielChangeNew") as FormArray;
  this.formvariant.push(this.Generaterow2());
  /*this.demandesf.materiel.push( this.materiels);*/
  console.log('New row added successfully', 'New Row');

}
Generaterow1() {
  return this.builder.group({
  /*  id: this.builder.control({ value: 0, disabled: true }),
    productCode: this.builder.control(this.productform.value.code),
    price: this.builder.control(this.productform.value.price),
    isactive: this.builder.control(true),*/
    equipement: this.builder.control(''),
    model: this.builder.control(''),
    serial: this.builder.control(''),
    level: this.builder.control('')
  });
}
Generaterow2() {
  return this.builder.group({
  /*  id: this.builder.control({ value: 0, disabled: true }),
    productCode: this.builder.control(this.productform.value.code),
    price: this.builder.control(this.productform.value.price),
    isactive: this.builder.control(true),*/
    equipement: this.builder.control(''),
    model: this.builder.control(''),
    serial: this.builder.control(''),
    level: this.builder.control('')
  });
}
get materiels1() {
  return this.productform.get("materielChangeAncient") as FormArray;
}
get materiels2() {
  return this.productform.get("materielChangeNew") as FormArray;
}
}