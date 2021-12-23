import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router, RoutesRecognized} from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/housing.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-data',
  templateUrl: './property-data.component.html',
  styleUrls: ['./property-data.component.css']
})
export class PropertyDataComponent implements OnInit {
public propertyId: number;
property = new Property();
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private housingService: HousingService) { 
    this.propertyId = 0;
  }

  ngOnInit() {
    //this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data) => {
        this.property = data['prp'];
      }
    );

    // this.route.params.subscribe(
    //   (params)=>{
    //     this.propertyId = +params['Id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       data => {
    //         this.property = data;
    //       }, error => this.router.navigate(['/'])
          
    //     );
    //   }
    // )

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal-1.jpg',
        medium: 'assets/images/internal-1.jpg',
        big: 'assets/images/internal-1.jpg'
      },
      {
        small: 'assets/images/internal-2.jpg',
        medium: 'assets/images/internal-2.jpg',
        big: 'assets/images/internal-2.jpg'
      },
      {
        small: 'assets/images/internal-3.jpg',
        medium: 'assets/images/internal-3.jpg',
        big: 'assets/images/internal-3.jpg'
      },
      {
        small: 'assets/images/internal-4.jpg',
        medium: 'assets/images/internal-4.jpg',
        big: 'assets/images/internal-4.jpg'
      },
      {
        small: 'assets/images/internal-5.jpg',
        medium: 'assets/images/internal-5.jpg',
        big: 'assets/images/internal-5.jpg'
      }
    ];

  }
}
