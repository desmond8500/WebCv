import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {
  @Input() competences: any
  @Input() langues: any

  constructor() { }

  ngOnInit(): void {
  }

}
