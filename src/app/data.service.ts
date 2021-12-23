import {StrangeHobbie} from './StrangeHobbie';

export class DataService{

  private data: StrangeHobbie =  { name: 'Коллекционировать значки', description: 'раздача 10 долларов незнакомцам', pathImage: './assets/Tesla-Model-S.jpg'};

  getData(): StrangeHobbie {

    return this.data;
  }
  // tslint:disable-next-line:typedef
  addData(descr: string){

    this.data.description = descr;
  }
}
