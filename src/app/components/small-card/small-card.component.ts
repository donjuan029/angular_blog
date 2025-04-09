import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule, RouterLink], // Importe CommonModule e RouterLink
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  Id: string = "0";

  constructor() { } // Adicione um construtor vazio

  ngOnInit(): void {
    // Lógica de inicialização do componente pode ir aqui
  }
}
