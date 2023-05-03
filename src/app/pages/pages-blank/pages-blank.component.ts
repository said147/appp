import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpdeskserviceService } from 'src/app/helpdeskservice.service';

@Component({
  selector: 'app-pages-blank',
  templateUrl: './pages-blank.component.html',
  styleUrls: ['./pages-blank.component.css']
})
export class PagesBlankComponent implements OnInit {
User:any;
roles=[];
  constructor(private service: HelpdeskserviceService, private router: Router) { }

  ngOnInit(): void {
    this.service. listUser().subscribe(
      response => {
        
       this.User= response;
      console.log(this.User)

      });
  }
 
}
