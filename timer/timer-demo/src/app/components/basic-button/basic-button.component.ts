import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {

  constructor() { }
  @Input() light = false;

  ngOnInit() {
  }

}
