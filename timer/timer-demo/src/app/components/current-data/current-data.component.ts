import { Component, OnInit, Input } from '@angular/core';
import { CurrentData } from './current-data';

@Component({
  selector: 'app-current-data',
  templateUrl: './current-data.component.html',
  styleUrls: ['./current-data.component.scss']
})
export class CurrentDataComponent implements OnInit {

  constructor() { }

  @Input() currentData: CurrentData;

  ngOnInit() {
  }

}
