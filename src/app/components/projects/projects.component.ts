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
      hasDocker: false,
      technologies: [
        { name: 'Spring Boot', icon: 'devicon-spring-plain' },
        { name: 'React Native', icon: 'devicon-react-original' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' },
        { name: 'Spring Security', icon: 'devicon-spring-plain' }
      ],
      github: 'https://github.com/Janetoerick/Sistema-de-reserva-back-end/tree/project2',
      features: ['Autenticação Multi-Nível', 'Agendamento Inteligente', 'Histórico de Ocupação']
    },
    {
      name: 'Sistema de Gestão de Associados',
      description: 'Aplicação MVC para controle de cadastros, anuidades e cobranças.',
      hasDocker: true,
      technologies: [
        { name: 'PHP', icon: 'devicon-php-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' },
      ],
      github: 'https://github.com/Janetoerick/Gerencia_associados',
      features: ['Módulo Financeiro Automatizado']
    },
    {
      name: 'Sistema de Gestão de produtos',
      description: 'Aplicação Full-Stack para gerenciamento de produtos.',
      hasDocker: true,
      technologies: [
        { name: 'Spring Boot', icon: 'devicon-spring-plain' },
        { name: 'Angular', icon: 'devicon-angular-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      ],
      github: 'https://github.com/Janetoerick/Gerenciamento_produtos',
      features: ['Paginação', 'Filtro Inteligente']
    },
  ];
}
