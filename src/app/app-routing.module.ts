import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';









import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';


import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';

import { DetailsComponent } from './components/details/details.component';

import { RequestDepartComponent } from './components/request-depart/request-depart.component';
import { ReponseDepartComponent } from './components/reponse-depart/reponse-depart.component';

import { RequestTeleworkComponent } from './components/request-telework/request-telework.component';
import { ReponseTeleworkComponent } from './components/reponse-telework/reponse-telework.component';

import { RequestVoucherComponent } from './components/request-voucher/request-voucher.component';
import { ReponseVoucherComponent } from './components/reponse-voucher/reponse-voucher.component';
import { HomeComponent } from './pages/home/home.component';

import { RequestsComponent } from './components/requests/requests.component';

import { ReponseHandoverComponent } from './components/reponse-handover/reponse-handover.component';
import { RequestHandoverComponent } from './components/request-handover/request-handover.component';

import { RequestChangeComponent } from './components/request-change/request-change.component';

import { EditHandoverComponent } from './components/edit-handover/edit-handover.component';
import { ReactiveFormsModule } from '@angular/forms';

import { DetailsReturnComponent } from './components/details-return/details-return.component';

import { EditReturnComponent } from './components/edit-return/edit-return.component';
import { EditTeleworkComponent } from './components/edit-telework/edit-telework.component';

import { ReponseChangeComponent } from './components/reponse-change/reponse-change.component';
const routes: Routes = [
  { path: '', component: PagesLoginComponent },
  
  { path: 'home', component: HomeComponent },
  
  
  { path: 'requests', component: RequestsComponent },
 
  { path: 'reponse-handover', component: ReponseHandoverComponent },
  { path: 'request-handover', component: RequestHandoverComponent },

 



 
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'requests/details/:id_demande', component: DetailsComponent },
  { path: 'reponse-handover/edit/:id_demande', component: EditHandoverComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path: 'request-depart', component: RequestDepartComponent },
  { path: 'reponse-depart', component: ReponseDepartComponent },
  { path: 'request-telework', component: RequestTeleworkComponent },
  { path: 'reponse-telework', component: ReponseTeleworkComponent },

  { path: 'request-voucher', component: RequestVoucherComponent },
  { path: 'reponse-voucher', component: ReponseVoucherComponent },

  { path: 'request-change', component: RequestChangeComponent },
  { path: 'reponse-change', component: ReponseChangeComponent },

  { path: 'requests/detailsReturn/:id_demandeRetour', component: DetailsReturnComponent },
  { path: 'reponse-voucher/edit-return/:id_demandeRetour', component: EditReturnComponent },
  { path: 'reponse-telework/edit-telework/:id_demandeTelework', component: EditTeleworkComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
