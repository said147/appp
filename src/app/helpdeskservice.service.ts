import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class HelpdeskserviceService {
  urlProduct ="http://localhost:8082/addDemande";
  urlrequest="http://localhost:8082/demande";
  urlrequests="http://localhost:8082/demane/";
  urluser="http://localhost:8082/users";
  urlUp="http://localhost:8082/contacts/";
  urlPr="http://localhost:8082/addClien";
  urlRep="http://localhost:8082/demandes/"
  urlreque="http://localhost:8082/demandeww";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
  constructor(private Http: HttpClient) { }
  
  
  
  
  saveDemande(data:any) {
     
    return this.Http.post(this.urlProduct,data);
        }
        listProduct() {
          return this.Http.get(this.urlrequest);
               }
               listProductss(motCle:string,page:number,size:number) {
                return this.Http.get("http://localhost:8082/chercher?mc="+motCle+"&size"+size+"&page="+page)
                     }
                     listProductsss(status:string,page:number,size:number) {
                      return this.Http.get("http://localhost:8082/cherchers?mc="+status+"&size"+size+"&page="+page)
                           }
                     CountRequests() {
                      return this.Http.get('http://localhost:8082/demandeCount');
                           }
                           CountRequestClosed() {
                            return this.Http.get('http://localhost:8082/countClosed');
                                 }
                                 CountRequestWaiting() {
                                  return this.Http.get('http://localhost:8082/demandeCountWaiting');
                                       }
                                       CountRequestEnCours() {
                                        return this.Http.get('http://localhost:8082/countCours');
                                             }
                     
               
             
               getProvider(id_demande:any) {
                return this.Http.get(this.urlrequests+id_demande,id_demande)
                   }
                 
                   updateProvider(id_demande:any,providerToUpdate:any) {
                    return this.Http.patch('http://localhost:8082/contacts/'+id_demande,providerToUpdate);
                       }
                       updateStatus(id_demande:any,providerToUpdate:any) {
                        return this.Http.patch('http://localhost:8082/changestatus/'+id_demande,providerToUpdate);
                           }
                     /*  updateProvider(id_demande:any): Observable<any> {
                        return this.Http.get('http://localhost:8082/contacts/'+id_demande, this.httpOptions )}*/

                       updateProviders(id:any) {
                        return this.Http.put(this.urlProduct,id);
                           }


                           saveDemand(data:any){
 return this.Http.post(this.urlPr,data);
                           }

                           listProducts() {
                            return this.Http.get(this.urlreque);
                                 }

                                 getProviders(id:any) {
                                  return this.Http.get('http://localhost:8082/demandeww/4',id)
                                     }

                                     saveMateriel(data:any) {
     
                                      return this.Http.post('http://localhost:8082/postmateril',data);
                                          }
                                  
                                          listUser() {
                                            return this.Http.get('http://localhost:8082/users');
                                                 }
                                                 listUsers(id:any) {
                                                  return this.Http.get('http://localhost:8082/user/'+id,id);
                                                       }
                                                       listmat(id:any) {
                                                        return this.Http.get('http://localhost:8082/materiel/4',id);
                                                             }

                                                             rep(id:any) {
                                                              return this.Http.get(this.urlRep+id,id);
                                                                   }
                                    
                      deletet(id_demande:any) {
                        return this.Http.delete('http://localhost:8082/Deletedemande/'+id_demande,id_demande)
                      }                                            
}
