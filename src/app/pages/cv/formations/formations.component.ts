import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  @Input() formation: any
  constructor() { }

  ngOnInit(): void {
  }

}
