import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient} from '@angular/common/http';
import { Genreclass } from './genreclass.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData  : Employee;
  genreData : Genreclass;
  list : Employee[];
  listGenre : Genreclass[];
  readonly rootURL = "https://a7de55d6.ngrok.io/api/Movies";
  constructor(private http : HttpClient) { }
  readonly genreURL = "https://a7de55d6.ngrok.io/api/Genres";
  postEmployee(formData : Employee){
   return this.http.post(this.rootURL,formData);
      // return this.http.post(this.rootURL,
      //   {
      //     "name": "Customer",
      //   }
      //   ).subscribe(
      //     data => {
      //       console.log("success", data);
      //     },
      //     error => {
      //       console.log("error",error);
      //     }
      //   );
}

  refreshList(){
    this.http.get(this.rootURL)
    .toPromise().then(res => this.list = res as Employee[]);
    this.http.get(this.genreURL)
    .toPromise().then(res => this.listGenre = res as Genreclass[]);
  }

  putEmployee(formData : Employee){
    
    
    return this.http.put(this.rootURL+'/'+formData.Id,formData);
     
   }

   deleteEmployee(id : number){
     
    return this.http.delete(this.rootURL+'/'+id);
   }
}