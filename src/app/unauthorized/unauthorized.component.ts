import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/AuthService';

@Component({
  selector: 'pm-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authservice.logout();
  }

}
