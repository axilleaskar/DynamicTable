import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "src/services/global.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  @Input() item: any;
  values = [];
  constructor(private globalService: GlobalService, private router: Router) {}

  ngOnInit() {
    if (this.item) {
      this.getDetails(this.item);
    } else {
      this.globalService.item.subscribe((resp) => {
        if (resp) {
          this.item = resp;
          this.getDetails(this.item);
        } else {
          this.router.navigate(["/home"]);
        }
      });
    }
  }


  getDetails(item) {
    Object.entries(item).forEach((detail) => {
      if (typeof detail[1] == "object") {
        this.getDetails(detail[1]);
      } else {
        this.values.push({ code: detail[0], description: detail[1] });
      }
    });
  }
}
