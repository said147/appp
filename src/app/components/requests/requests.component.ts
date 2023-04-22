import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';
import { Demande } from 'src/app/models/demande';
import { Materiel } from 'src/app/models/materiel';
import { User } from 'src/app/models/user';
export interface userr{
  username:string;
}
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  demande:any;
  demandes: any[]=[];
item:any;
 
  
  @Input() User: any[]=[];
  s:any=[];
 id?:any;
  materiels: Materiel[]=[];
  Materiel:any;
  searchText='';
  searchTerm = '';
  motCle:string="";
  term:string="";
  currentPage:number=0;
  size:number=8;
  content:any;
  p:number=1;
  itemPerPage:number=8;
  totaldemande:any;
  username:string="";
  pages:Array<number> | undefined;
  constructor(private service: HelpdeskserviceService, private router: Router) { }

  ngOnInit(): void {
   

    this.service.listProduct().subscribe(
      response => {
      this.demande= response;
      this.pages=new Array(this.demande.totalPages);
      this.totaldemande=this.demande.length
      this.demandes.push( response);
      console.log(this.demande);
     }
     
     );
    } 
        
        /*for(let item of this.demande){
         
         
          item=this.service.listUsers(item.id).subscribe(
            response => {
              this.User.push( response);
             

              console.log(   item)
           
            
            
            
            }
            
            );
            
            console.log(   this.demande)
        }*/
        
      /*this.demandes= response;
      this.s=this.demandes.id
      console.log(this.s)
      console.log(this.demandes)
      console.log("this.demandes")
      for(let item of this.demandes){
       
        console.log(item)
        this.service.listUsers(item.id).subscribe(
          response => {
          this.User= response;
          
          this.demandes.item.username=this.User.username;
          console.log(  this.demandes.item)
          
          }
         
          );
        
        console.log('444')
        console.log(this.demandes)
       
          
        
      }*/
    
     
      
    
    
      /*this.Materiel.username="said";
      console.log(this.Materiel);*/
     /* this.service.listProduct().subscribe(
        response => {
        this.demandes= response;
        console.log(this.demandes)
        
        
        
        }
        
        );*/
    /*for(let item of this.demandes){
        console.log(item.id)
        
        
          
      }*/
      
      
      /*this.service.listUsers(this.id).subscribe(
        response => {
        this.User= response;
        
       
        console.log(this.User)
        
        }
        );*/



  
  doSearch() {
    if(this.motCle==""){
      this.ngOnInit();
    }

 else{
  this.service.listProductss(this.motCle,this.currentPage,this.size).subscribe(
    response => {
    this.demande= Object.values(response);
    this.pages=new Array(this.demande.totalPages);
    
    this.demandes.push( response);
    console.log(this.demande);
   }
   
   );
 }
  }
  chercher(){
this.doSearch();
  }
  gotoPage(i:number){
this.currentPage=i;
this.doSearch();

  }
  cancal(){
    this.reloadPage();
  }
  reloadPage(): void {
    window.location.reload();
    this.router.navigateByUrl('/requests');
  }
}
