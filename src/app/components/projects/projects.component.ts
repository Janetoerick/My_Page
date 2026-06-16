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
      name: 'Sistema de Gestão de Reserva',
      description: 'Aplicação Full-Stack para reserva de laboratórios e equipamentos acadêmicos.',
      technologies: [
        { name: 'Spring Boot', icon: 'devicon-spring-plain' },
        { name: 'React Native', icon: 'devicon-react-original' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' }
      ],
      github: 'https://github.com/Janetoerick/Sistema-de-reserva-back-end/tree/project2'
    },
    {
      name: 'Sistema de Gestão de Associados',
      description: 'Aplicação MVC para controle de cadastros, anuidades e cobranças.',
      technologies: [
        { name: 'PHP', icon: 'devicon-php-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' }
      ],
      github: 'https://github.com/Janetoerick/Gerencia_associados'
    }
  ];
}
