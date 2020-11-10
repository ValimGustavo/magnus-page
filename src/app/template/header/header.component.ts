import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isLogged = false
  ngOnInit(): void {
  }

  login(){
    console.log(this.isLogged)
    this.isLogged = !this.isLogged
  }
}
