import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My_Page';
}

