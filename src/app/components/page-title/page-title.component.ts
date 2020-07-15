import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  @Input() backButton: string; // show or hide
  @Input() pageTitle: string;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  public GoBack(){
    this.location.back();
  }
}
