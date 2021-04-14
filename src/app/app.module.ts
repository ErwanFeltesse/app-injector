import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddAlimentComponent } from './add-aliment/add-aliment.component';
import { ListAlimentComponent } from './list-aliment/list-aliment.component';
import { FormsModule } from '@angular/forms';
import { AlimentService } from './aliment.service';

@NgModule({
  declarations: [AppComponent, AddAlimentComponent, ListAlimentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AlimentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
