import { Component,OnInit } from '@angular/core';
import { FaceTest } from './models/face-test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testProjet';
  facetests_!:FaceTest[]
  ngOnInit() :void {
    this.facetests_ = [
      new FaceTest("Tenekeu","Yvan","le plus beau de tout fombap",new Date(),5000,"https://pps.whatsapp.net/v/t61.24694-24/305256593_412734400766353_6602970058618405658_n.jpg?ccb=11-4&oh=01_AVzLdxVKGFXGloo8k1SJ-HpSqbLQ1g2D0GtGzLQykFNjQg&oe=63309B6D"),
      new FaceTest("Sipowa","Elysee","le gar de fenty",new Date(),5000,"https://pps.whatsapp.net/v/t61.24694-24/147946324_363861465778141_6708838517926338433_n.jpg?ccb=11-4&oh=01_AVyczjD_Mu0RnU6BC4Br7F9Y6hAYusJBT_sxX3FuB-H-CA&oe=6334A98D"),
      new FaceTest("Fenty","Prisca","la bs timide",new Date(),5000,"https://pps.whatsapp.net/v/t61.24694-24/161640337_409225054143404_4560252922044341004_n.jpg?ccb=11-4&oh=01_AVxwQrynk09HiXfW-K_sT6nK9KKqT8B9jLU2qnRXAeVrbg&oe=6332761C"),
      new FaceTest("Lando","Laure","la plus belle du monde mondial",new Date(),5000,"https://pps.whatsapp.net/v/t61.24694-24/158678343_443600764489040_6789316143054814158_n.jpg?ccb=11-4&oh=01_AVzYZ13RNFRhtjFU4eYnp_fJVIgsDxLKu2wlS7RVXSSDJg&oe=6333F14E"),
    ]
  }
}
