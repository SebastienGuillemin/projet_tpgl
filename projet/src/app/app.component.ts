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

  setTitle(title: string) {
    this.title = title;
    this._titleEditor.setTitle(title)
  }
}