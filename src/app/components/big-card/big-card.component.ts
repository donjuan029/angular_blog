import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent{

  @Input()
  photoCover:string = "https://postgrain.com/wp-content/uploads/2017/04/stockvault.jpg"
  @Input()
  cardTitle:string = "Administre seu tempo"
  @Input()
  cardDescription:string = "Sua vida se tornará produtiva"
  @Input()
  Id:string="0"
  constructor(){}

}
