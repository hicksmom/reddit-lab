import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RedditItem {
  title : string;
  link : string;
  image : string;
}

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  items : RedditItem[] = [];

  constructor(private http: HttpClient) { }

  getItems() {
    const url = "https://www.reddit.com/r/aww/.json";
    this.http.get(url).subscribe(
      (response : any) => {

        const items = response.data.children;

        for (let item of items) {
          const redditItem : RedditItem = {
            title: item.data.title,
            link: "https://reddit.com" + item.data.permalink,
            image: item.data.thumbnail
          };

          this.items.push(redditItem);

        }

        console.log(this.items);

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
