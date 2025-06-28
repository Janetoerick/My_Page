import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Sistema de reserva',
      description: 'Aplicativo full-stack para gerenciamento de reservas com Spring Boot e React Native.',
      technologies: ['Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'React Native'],
      github: 'https://github.com/Janetoerick/Sistema-de-reserva-back-end/tree/project2'
    },
    {
      name: 'Sistema de Controle de Taregas',
      description: 'Aplicativo full-stack para gerenciamento de tarefas com Spring Boot e Angular.',
      technologies: ['Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'Angular'],
      github: 'https://github.com/Janetoerick/ControleTarefas_backend'
    },
  ];
}
