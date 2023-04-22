import { Component, OnInit } from '@angular/core';
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
  constructor(private service: HelpdeskserviceService, private router: Router,private route: ActivatedRoute,private tokenStorageService: TokenStorageService) { }

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
}