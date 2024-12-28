import { Component } from '@angular/core';
import { FooterComponent } from '../header/footer/footer.component';

@Component({
  selector: 'app-header',
  imports: [
    FooterComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
