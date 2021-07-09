import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  idUser = environment.id

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/login-page'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
    environment.foto = ''
  }

}
