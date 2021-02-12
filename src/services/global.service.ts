import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  constructor(private http: HttpClient) {}
  item = new BehaviorSubject(null);

  doAction<T>(method: string, url: string, body?: object | string | null) {
    let newHeaders = HTTP_OPTIONS;

    switch (method.toUpperCase()) {
      case "POST":
        return this.http.post(url, body, newHeaders);
      case "GET":
        return this.http.get<T>(url, newHeaders);

      case "PUT":
        return this.http.put(url, body, newHeaders);

      case "DELETE":
        return this.http.delete(url, newHeaders);
    }
  }

  getItem(item) {
    this.item.next(item);
  }

  getSessionStorageItem(key) {
    return sessionStorage.getItem(key);
  }
  setSessionStorageItem(key, value) {
    sessionStorage.setItem(key, value);
  }
  getLocalStorageItem(key) {
    return localStorage.getItem(key);
  }
  setLocalStorageItem(key, value) {
    localStorage.setItem(key, value);
  }
}
