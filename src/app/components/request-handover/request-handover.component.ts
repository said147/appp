import { Component, OnInit,ViewChild } from '@angular/core';
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
  
   /*materiel: Materiel[]=[];*/
   demande: Demande[]=[];
    employe:any;
    dynamicArray :any= [];
  dng:any={materiel:[]}
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username?: string;
    id?: any;
    prenom?: any;
    departement?: any;



    materiel: any = [
      { equipement: "", model: "",serial:"",comment:"" }
      
    ]
    
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
  @ViewChild("f")
  from!: NgForm;
  onSubmit(f: NgForm) {
    let materiel = Object.keys(f.value).map(item => {
      return f.value[item];
    });
    console.log(materiel);
    // Object.keys because the new indexes are string
  }
  addRow() {
    this.dynamicArray.push({ Equipment: '', MODEl : '', SERVICETAG: '' ,Comments:''});
    console.log('New row added successfully', 'New Row');
  }
  pushNewTag() {
    this.materiel.push({
      equipement: "", model: "",serial:"",comment:""
    })
  }
 /* getAdminFormData(data:any){
   
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorageService.getUser();
     
    /*data.materiel=[]*/
     /*data.materiel=[{equipement:"c.u", "model": "assus",
     "serial": "1475",
     "comment": "ok"},{"equipement": "C.U",
     "model": "hpp",
     "serial": "422",
     "comment": "ok"}];*/
     
       /*console.warn(JSON.stringify(data));*/
      /* console.warn([data.materiel].concat(data));*/
     
     /* console.warn(data);
      
   
   this.service.saveDemande(data).subscribe((result)=>{
         console.warn(result);
       })
    }*/
   
   /* this.service.saveMateriel(data).subscribe((result)=>{
    
      console.warn(result);
    })*/
    
  //}
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

