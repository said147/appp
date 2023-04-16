import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Role } from "../models/role";
import { TokenStorageService } from "./token-storage-service";



const AUTH_API = 'http://localhost:8082/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:any;
  
    constructor(private http: HttpClient,private token: TokenStorageService) { 
      this.currentUser = this.token.getUser();
    console.log(this.currentUser.prenom)
    console.log(this.currentUser.roles)
    console.log(this.currentUser.token)
    }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string ,prenom:string,departement:string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      prenom,
      departement
     
     
    }, httpOptions);
  }
  public isAdmin(): boolean {
    this.currentUser.roles.includes("Admin");
    return true;
  }
  

}
