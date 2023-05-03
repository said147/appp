import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage-service';

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
  constructor(private tokenStorageService: TokenStorageService) { }

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
