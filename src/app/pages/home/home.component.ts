import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage-service';
import { UserService } from 'src/app/_services/user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.prenom)
    console.log(this.currentUser.roles)
    console.log(this.currentUser.token)
    
  }

}
