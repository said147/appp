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
    btnDisabled:boolean = false;
    p:number=1;
    itemPerPage:number=5;
    totaldemande:any;
    status:string="";
    term:string="";
    currentPage:number=0;
    size:number=8;
    content:any;
    pages:Array<number> | undefined;
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
  doSearch() {
    if(this.status==""){
      this.ngOnInit();
    }

 else{
  this.service.listProductsss(this.status,this.currentPage,this.size).subscribe(
    response => {
    this.demandes= Object.values(response);
    this.pages=new Array(this.demandes.totalPages);
    
    this.demandes.push( response);
    console.log(this.demandes);
   }
   
   );
 }
  }
  chercher(){
this.doSearch();
  }

}
