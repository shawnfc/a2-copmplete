import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation = "This is string interpolation";
  numberInterpolation = 4;

  onTest () {
    return true;
  }
}