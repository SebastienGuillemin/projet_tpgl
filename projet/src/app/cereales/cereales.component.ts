import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cereales',
  templateUrl: './cereales.component.html',
  styleUrls: ['./cereales.component.css']
})
export class CerealesComponent implements OnInit {
title : string = "Voir lot de céréales" ;
  constructor() { }

  ngOnInit(): void {
  }

}
