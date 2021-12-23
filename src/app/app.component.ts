import { Component } from '@angular/core';
import {StrangeHobbie} from './StrangeHobbie';
import {DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {

  hobbie: StrangeHobbie;
  isEdit: boolean;
  selectedHobbie: string;
  constructor(private dataService: DataService){
    this.isEdit = false;
  }
  addItem(){
    this.dataService.addData(this.selectedHobbie);
    this.isEdit = false;
  }
  editHobbie(){
    this.isEdit = true;
    this.selectedHobbie = this.hobbie.description;
    console.log("hello");
  }

  ngOnInit(){
    this.hobbie = this.dataService.getData();
  }
}
