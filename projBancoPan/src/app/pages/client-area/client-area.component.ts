import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-area',
  templateUrl: './client-area.component.html',
  styleUrls: ['./client-area.component.scss']
})
export class ClientAreaComponent implements OnInit {
  public step: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
