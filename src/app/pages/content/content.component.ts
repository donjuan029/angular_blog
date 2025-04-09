import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = "https://www.godaddy.com/resources/br/wp-content/uploads/imagens-e-direitos-autorais.jpg"
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe( value => 
      this.id = value.get("Id")
      
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id = id )[0]
   
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
