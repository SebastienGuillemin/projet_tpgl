import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'projet';

  constructor(private _titleEditor: Title) { }

  onActivate(componentReference) {
    this.title = componentReference.getTitle();
    this._titleEditor.setTitle(this.title)
 }
}