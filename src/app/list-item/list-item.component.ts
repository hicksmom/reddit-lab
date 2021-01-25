import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})

// interface RedditItem {
//   title : string;
//   link : string;
//   image : string;
// }

export class ListItemComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {}

}
