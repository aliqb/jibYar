import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationComponent } from './layout/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSlideToggleModule,NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jibYar';
}
