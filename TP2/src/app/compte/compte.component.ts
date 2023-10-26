import { Component } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {
  nom : string = "";
  prenom : string = "";
  adresse : string = "";
  codePostal : string = "";
  ville : string = "";
  telephone : string = "";
  email : string = "";
  civilite : string = "";
  password : string = "";
  login : string = "";
  pays : string = "";
}