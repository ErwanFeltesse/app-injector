import { Component, OnInit } from '@angular/core';
import { AlimentService } from '../aliment.service';

@Component({
  selector: 'app-list-aliment',
  templateUrl: './list-aliment.component.html',
  styleUrls: ['./list-aliment.component.scss'],
})
export class ListAlimentComponent implements OnInit {
  public aliments: string[] = [];

  constructor(private alimentService: AlimentService) {}

  ngOnInit(): void {
    this.aliments = this.alimentService.aliments;
  }
}
