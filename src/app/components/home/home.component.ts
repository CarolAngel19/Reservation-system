import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Home")
  }

}
