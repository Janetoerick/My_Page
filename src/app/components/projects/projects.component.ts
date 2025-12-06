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
      name: 'Sistema de Gestão de Reserva de Laboratórios e Equipamentos',
      description: 'Aplicação Full-Stack (Spring Boot e React Native) com controle de acesso robusto (Spring Security) para gerenciar a reserva de salas e equipamentos em ambientes acadêmicos ou laboratoriais. O sistema suporta três perfis de usuário (Admin, Docente e Discente).',
      technologies: ['Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'React Native'],
      github: 'https://github.com/Janetoerick/Sistema-de-reserva-back-end/tree/project2',
      features: [
        'Autenticação e Autorização Multi-Nível (Admin, Docente, Discente)',
        'Reserva de Salas: Docentes podem reservar salas completas (implica na reserva de todos os equipamentos internos)',
        'Reserva de Equipamentos Individuais: Discentes podem reservar equipamentos específicos',
        'Gestão Completa (CRUD) de Salas, Equipamentos e Usuários (Perfil Admin)',
        'Segurança e controle de acesso via Spring Security'
      ]
    },
    {
      name: 'Sistema de Gestão de Associados',
      description: 'Aplicação MVC em PHP Puro para controle de cadastros de membros, gestão de anuidades, e registro de pendências de cobrança.',
      technologies: ['PHP', 'Docker', 'Docker Compose', 'MySQL', 'PDO'],
      github: 'https://github.com/Janetoerick/Gerencia_associados',
      features: [
        'CRUD completo de Associados (validação de CPF/E-mail)',
        'Gestão de Anuidades por ano',
        'Geração de Cobranças em Lote',
        'Controle de Pendências Financeiras'
      ]
    },
    // {
    //   name: 'Sistema de Controle de Tarefas',
    //   description: 'Aplicativo full-stack para gerenciamento de tarefas com Spring Boot e Angular.',
    //   technologies: ['Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'Angular'],
    //   github: 'https://github.com/Janetoerick/ControleTarefas_backend',
    //   features: []
    // },
    
  ];
}
