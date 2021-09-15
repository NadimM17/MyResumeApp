import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  @Input() JobTitle = ""
  @Input() JobDescription = ""
  @Input() DateOfBirth = "";
  @Input() Website = "";
  @Input() Phone = "";
  @Input() City = "";
  @Input() Age = 0;
  @Input() Degree = "";
  @Input() Email = "";
  @Input() Freelance = "";
  @Input() Summary = "";

  constructor(private httpClient : HttpClient) { 
    this.getData();
  }

  ngOnInit(): void {
  }

  getData(): void {
    this.httpClient.get('https://myresumeappapi.herokuapp.com/about')
    .subscribe((json : any) =>
    {
      this.JobTitle = json[0].jobTitle;
      this.JobDescription = json[0].jobDesc;
      this.DateOfBirth = json[0].birthday;
      this.Website = json[0].website;
      this.Phone = json[0].phone;
      this.City = json[0].city;
      this.Age = json[0].age
      this.Degree = json[0].degree;
      this.Email = json[0].email;
      this.Freelance = json[0].freelance;
      this.Summary = json[0].summary;
    })
  }

}
