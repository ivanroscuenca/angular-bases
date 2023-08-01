import { Component, OnInit } from '@angular/core';
import { DbzService } from '../dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //inyectamos servicio en en el constructor
  constructor(public dbzService: DbzService) {}
}
