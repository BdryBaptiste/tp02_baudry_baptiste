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
  affiche: boolean = false;
  valid: boolean = true;
  isValid(): boolean{
    return this.valid;
  }

  desactivation(){
    this.valid = false;
  }

  toggleInfo(){
     this.affiche = !this.affiche;
  }
}