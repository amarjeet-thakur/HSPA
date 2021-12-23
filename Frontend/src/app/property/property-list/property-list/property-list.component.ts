import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';
//import { IProperty } from '../../IProperty.Interface'
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Property[];
  Today = new Date();
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';

  constructor(private route: ActivatedRoute, private housingService : HousingService) {
    this.properties = [];
   }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        const newProperty = JSON.parse(localStorage.getItem('newProp'));
        if (newProperty.SellRent === this.SellRent) {
          this.properties = [newProperty, ...this.properties];
        }
        console.log(data);
      },error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }


  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
