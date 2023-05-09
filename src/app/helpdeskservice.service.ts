import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { TokenStorageService } from './_services/token-storage-service';

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
 /* httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};*/
currentUser:any;
isLoggedIn:any;

  constructor(private Http: HttpClient,private token: TokenStorageService) { 
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.prenom)
    console.log(this.currentUser.roles)
    console.log(this.currentUser.accessToken)
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
    

    
      console.log(user);
    }
  }
  
   httpOptions =
    { headers: new HttpHeaders().set('Authorization',`Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWlkIiwiaWF0IjoxNjgzNTg1NjM3LCJleHAiOjE2ODM2NzIwMzd9.GfdYQejt8WcDi2o9SH7QgV0h5UDBrHYyjH-F18kpiBgVHB09exi9cZHmruozJebFG9jJIVPwNCNe6rQAsxVDXw"}`)};
   
  
  
  saveDemande(data:any) {
     
    return this.Http.post(this.urlProduct,data,this.httpOptions);
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
                   getMateriel(id_demande:any){
                   
                    return this.Http.get(' http://localhost:8082/materiel/'+id_demande,id_demande)
                   }
                 
                   updateProvider(id_demande:any,providerToUpdate:any) {
                    return this.Http.patch('http://localhost:8082/changeDemande/'+id_demande,providerToUpdate,this.httpOptions);
                       }
                       updateStatus(id_demande:any,providerToUpdate:any) {
                        return this.Http.patch('http://localhost:8082/changestatus/'+id_demande,providerToUpdate);
                           }
                     /*  updateProvider(id_demande:any): Observable<any> {
                        return this.Http.get('http://localhost:8082/contacts/'+id_demande, this.httpOptions )}*/

                       updateProviders(id_demande:any,providerToUpdate:any) {
                        return this.Http.patch('http://localhost:8082/updateDemande/'+id_demande,providerToUpdate,this.httpOptions);
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

                      Count(id:any) {
                        return this.Http.get('http://localhost:8082/demandeCountRequest/'+id,id);
                             }
                             CountChange(id:any) {
                              return this.Http.get('http://localhost:8082/demandeCountChange/'+id,id);
                                   }
                                   CountTelework(id:any) {
                                    return this.Http.get('http://localhost:8082/demandeCountTelework/'+id,id);
                                         }
                                         CountReturn(id:any) {
                                          return this.Http.get('http://localhost:8082/demandeCountReturn/'+id,id);
                                               }
                                   
                      








                      //DemandeRetourVoucher
                      saveDemandeRetourVoucher(data:any) {
     
                        return this.Http.post('http://localhost:8082/addDemandeRetour',data,this.httpOptions);
                            
                      }
                      listDemandeRetourVoucher() {
                        return this.Http.get('http://localhost:8082/demandeRetour',this.httpOptions);
                             }
                             repDemandeRetourVoucher(id:any) {
                              return this.Http.get('http://localhost:8082/demandesRetour/'+id,this.httpOptions);
                              
                                   }
                       getDemandeRetourVoucher(id_demandeRetour:any) {
                                    return this.Http.get('http://localhost:8082/demaneRetour/'+id_demandeRetour,id_demandeRetour)
                                       }


                                         //DemandeTelework
                                         saveDemandeTelework(data:any) {
     
                                          return this.Http.post('http://localhost:8082/addDemandeTelework',data,this.httpOptions);
                                              
                                        }
                                         repDemandeTelework(id:any) {
                                          return this.Http.get('http://localhost:8082/demandesTelework/'+id,this.httpOptions);
                                          
                                               }
                                               getDemandeTelework(id_demandeTelework:any) {
                                                return this.Http.get('http://localhost:8082/demaneTelework/'+id_demandeTelework,id_demandeTelework)
                                                   }
                                                   updateDemandeTelework(id_demandeTelework:any,providerToUpdate:any) {
                                                    return this.Http.patch('http://localhost:8082/updateDemandeTelework/'+id_demandeTelework,providerToUpdate,this.httpOptions);
                                                       }

                      //DemandeChange
                      saveDemandeChange(data:any) {
     
                        return this.Http.post('http://localhost:8082/addDemandeChange',data,this.httpOptions);
                            
                      }
                       repDemandeChange(id:any) {
                        return this.Http.get('http://localhost:8082/demandesChange/'+id,this.httpOptions);
                        
                             }
                             getDemandeChange(id_demandeChange:any) {
                              return this.Http.get('http://localhost:8082/demaneChange/'+id_demandeChange,id_demandeChange)
                                 }
                                 updateDemandeChange(id_demandeChange:any,providerToUpdate:any) {
                                  return this.Http.patch('http://localhost:8082/updateDemandeChange/'+id_demandeChange,providerToUpdate,this.httpOptions);
                                     }

}
