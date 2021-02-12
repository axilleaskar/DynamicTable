import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { GlobalService } from "src/services/global.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  items: any = [];
  displayedItems: any[] = [];
  columns: any = [];
  Values: any[];
  page = 1;
  collectionSize;
  pageSize = 10;
  mode:string
  indexForEdit:number

  @ViewChild("exampleModal") modal: ElementRef;
  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    if (!this.globalService.getLocalStorageItem("items")) {
      this.globalService
        .doAction("GET", "https://jsonplaceholder.typicode.com/todos")
        .subscribe((resp) => {
          this.items = resp;
          this.globalService.setLocalStorageItem(
            "items",
            JSON.stringify(this.items)
          );
          this.initialize();
        });
    } else {
      this.items = JSON.parse(this.globalService.getLocalStorageItem("items"));
      this.initialize();
    }
  }

  initialize() {
    this.collectionSize = this.items.length;
    this.refreshValues();
    if (this.items.length > 0) {
      Object.entries(this.items[0]).map((resp) => {
        if (!this.checkIfItemIsObject(resp[1])) {
          this.columns.push(resp[0]);
        }
      });
    }
  }

  getValues(item) {
    let listOfValues = [];

    Object.entries(item).map((value, index) => {
      this.columns.map((key, i) => {
        if (key == value[0]) {
          if (!this.checkIfItemIsObject(value[1])) {
            listOfValues[i] = value[1];
          }
        }
      });
    });
    return listOfValues;
  }
  checkIfItemIsObject(item): boolean {
    return typeof item == "object" ? true : false;
  }

  addNewItem(event) {
    this.items.push(event);
    this.refreshValues();
    this.collectionSize = this.items.length;
    this.globalService.setLocalStorageItem("items", JSON.stringify(this.items));
  }

  getSingleItem(item) {
    this.globalService.getItem(item);
  }

  deleteItem(index) {
    let actualIndex = (this.page - 1) * this.pageSize + index;
    this.items.splice(actualIndex, 1);
    this.collectionSize = this.items.length;
    this.refreshValues();
    this.globalService.setLocalStorageItem("items", JSON.stringify(this.items));
  }

  refreshValues() {
    this.displayedItems = this.items
      .map((value, i) => ({ id: i + 1, ...value }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  changeMode(mode, index?){
    this.mode = mode
    if(index){
      this.indexForEdit = (this.page - 1) * this.pageSize + index;
    }
  }

  editItem(event){
    this.items[this.indexForEdit] = event
    this.refreshValues()
    this.globalService.setLocalStorageItem("items", JSON.stringify(this.items));
  }
}
