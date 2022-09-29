import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  infos: any
  formations: any
  competences$: any
  experiences$: any
  langues$: any
  interets$: any

  constructor(
    protected _cv: CvService
  ) { }

  ngOnInit(): void {
    this.getInfos()
    this.getCompetences()
    this.getExperiences()
    this.getFormations()
    this.getInterets()
    this.getLangues()
  }

  getInfos(){
    this._cv.getInfos().subscribe(
      res => {
        console.log(res)
        this.infos = res
      },
      err => {
        console.log(err)
      }
    )
  }
  getFormations(){
    this._cv.getFormations().subscribe(
      res => {
        console.log(res)
        this.formations = res
      },
      err => {
        console.log(err)
      }
    )
  }
  getExperiences(){
    this._cv.getExperiences().subscribe(
      res => {
        console.log(res)
        this.experiences$ = res
      },
      err => {
        console.log(err)
      }
    )
  }
  getCompetences(){
    this._cv.getCompetences().subscribe(
      res => {
        console.log(res)
        this.competences$ = res
      },
      err => {
        console.log(err)
      }
    )
  }
  getLangues(){
    this._cv.getLangues().subscribe(
      res => {
        console.log(res)
        this.langues$ = res
      },
      err => {
        console.log(err)
      }
    )
  }
  getInterets(){
    this._cv.getInterets().subscribe(
      res => {
        console.log(res)
        this.interets$ = res
      },
      err => {
        console.log(err)
      }
    )
  }

}
