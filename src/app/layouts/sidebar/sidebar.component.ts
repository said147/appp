import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth-service';
import { TokenStorageService } from 'src/app/_services/token-storage-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: any;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard=false;
  username?: string;
  constructor(private token: TokenStorageService,private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }
  public isAdmin(): boolean {
    this.currentUser.roles.name=="ROLE_ADMIN";
    return true;
  }
}
