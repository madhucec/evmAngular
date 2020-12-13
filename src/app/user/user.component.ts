import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/UserService';

@Component({
  selector: 'pm-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private searchText:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
