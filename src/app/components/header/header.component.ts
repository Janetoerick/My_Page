// header.component.ts

import { Component, HostBinding, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; // Importação obrigatória para o DOCUMENT

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMobileMenuOpen: boolean = false;

  // Controla o estado de rolagem (para aplicar sombra/fundo sólido)
  isScrolled = false;

  activeSection: string = 'inicio';

  // Injeção do token DOCUMENT para acessar o objeto 'document' global
  constructor(@Inject(DOCUMENT) private document: Document) { }

  // HostBinding para aplicar a classe 'scrolled' ao <app-header>
  @HostBinding('class.scrolled') get scrolldown() {
    return this.isScrolled;
  }

  // HostListener para escutar o evento de rolagem na janela
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;

    this.checkActiveSection();
  }

  checkActiveSection() {
    const sections = ['inicio', 'sobre', 'habilidades', 'projetos'];
    

    const scrollPosition = window.scrollY + 150; 

    for (const sectionId of sections) {
      // Usa o document injetado para buscar o elemento pelo ID
      const element = this.document.getElementById(sectionId);
      
      if (element) {
        // Verifica se a posição do topo do elemento está visível
        const elementTop = element.offsetTop;
        const elementBottom = element.offsetTop + element.offsetHeight;
        
        if (elementTop <= scrollPosition && elementBottom > scrollPosition) {
          // Se estiver visível, atualiza a seção ativa e sai do loop
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string): void {
    this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection = sectionId; 

    // Fecha o menu mobile após a navegação
    this.isMobileMenuOpen = false;
    this.document.body.style.overflow = 'auto'; // Libera o scroll
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    this.document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }

}