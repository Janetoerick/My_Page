import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(
    private scroller: ViewportScroller,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  // Função chamada pelo botão "Entrar em Contato"
  openContact() {
    const footerElement = this.document.getElementById('contato');
    
    // 1. Rola suavemente para o ID 'contato' (o footer)
    this.scroller.scrollToAnchor('contato');

    // 2. Aplica a classe de animação e remove depois de 1.5s
    if (footerElement) {
      // Adiciona a classe que inicia a animação
      this.renderer.addClass(footerElement, 'animate-pulse');

      // Remove a classe após 1500ms (1.5s) para permitir que a animação possa ser re-executada
      setTimeout(() => {
        this.renderer.removeClass(footerElement, 'animate-pulse');
      }, 1500); 
    }
  }
}
