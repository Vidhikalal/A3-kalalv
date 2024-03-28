import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
//By vidhikalal 991706094
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  studentName='Vidhi Kalal'
  studentId='991706094'
//string interpolation for studentName and studentId
}
