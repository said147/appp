import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';


 










import { UsersProfileComponent } from './pages/users-profile/users-profile.component';

import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';

import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
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
import { FormsModule } from '@angular/forms';
import { RequestChangeComponent } from './components/request-change/request-change.component';
import { EditHandoverComponent } from './components/edit-handover/edit-handover.component';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
   
  

   

    

   

  
    UsersProfileComponent,
   
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    
    PagesBlankComponent,
    DetailsComponent,
    RequestDepartComponent,
    ReponseDepartComponent,
    RequestTeleworkComponent,
    ReponseTeleworkComponent,
    RequestVoucherComponent,
    ReponseVoucherComponent,
    HomeComponent,
    RequestsComponent,
    ReponseHandoverComponent,
    RequestHandoverComponent,
    RequestChangeComponent,
    EditHandoverComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule, Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
