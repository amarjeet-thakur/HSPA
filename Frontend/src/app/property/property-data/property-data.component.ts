import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-property-data',
  templateUrl: './property-data.component.html',
  styleUrls: ['./property-data.component.css']
})
export class PropertyDataComponent implements OnInit {
public propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.propertyId = 0;
  }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['Id'];

    this.route.params.subscribe(
      (params)=>{
        this.propertyId = +params['Id'];
      }
    )
  }
  onSelectNext(){
    this.propertyId += 1;
this.router.navigate(['property-deta', this.propertyId])
  }

}
