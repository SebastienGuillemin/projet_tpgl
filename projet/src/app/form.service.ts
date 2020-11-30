import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _sanitizer: DomSanitizer) { }

  generateForm(): SafeHtml {
    var form = '<form action="" method="post">';
    form += '<div class="form-group">';
    form += '<label for="username">Nom d\'utilisateur</label>'
    form += '<input type="text" class="form-control" name="username" id="username" placeholder="Nom d\'utilisateur">';
    form += '</div>';
    form += '<div class="form-group">';
    form += '<label for="password">Mot de passe</label>';
    form += '<input type="password" name="password" id="password" class="form-control" placeholder="Mot de passe">';
    form += '</div>';
    form += '<button type="submit" class="btn btn-primary">Valider</button>';
    form += '</form>';
    return this._sanitizer.bypassSecurityTrustHtml(form);
  }
}

