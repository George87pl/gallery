import {Injectable} from '@angular/core'

@Injectable()
export class ImageService{
  visibleImages = [];
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
    return IMAGES.slice(0).find(i => i.id == id);
  }
}

const IMAGES = [
  {"id": 1, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg"},
  {"id": 2, "category": "boats", "caption": "Sailing", "url": "assets/img/boat_02.jpg"},
  {"id": 3, "category": "boats", "caption": "Sunset Pier", "url": "assets/img/boat_03.jpg"},
  {"id": 4, "category": "boats", "caption": "Sundey Afternoon", "url": "assets/img/boat_04.jpg"},
  {"id": 5, "category": "boats", "caption": "Sunset in the docks", "url": "assets/img/boat_05.jpg"},
  {"id": 6, "category": "camping", "caption": "Camping trip", "url": "assets/img/camping_01.jpg"},
  {"id": 7, "category": "camping", "caption": "Trip", "url": "assets/img/camping_02.jpg"},
  {"id": 8, "category": "camping", "caption": "Montain path", "url": "assets/img/camping_03.jpg"},
  {"id": 9, "category": "camping", "caption": "On the trail", "url": "assets/img/camping_04.jpg"},
  {"id": 10, "category": "camping", "caption": "Kim and Jessie", "url": "assets/img/camping_05.jpg"},
  {"id": 11, "category": "camping", "caption": "View from the top", "url": "assets/img/camping_06.jpg"},
  {"id": 12, "category": "camping", "caption": "Our camping trip", "url": "assets/img/camping_07.jpg"},
  {"id": 13, "category": "library", "caption": "Library", "url": "assets/img/library_01.jpg"},
  {"id": 14, "category": "library", "caption": "Local library", "url": "assets/img/library_02.jpg"},
  {"id": 15, "category": "library", "caption": "Nice library", "url": "assets/img/library_03.jpg"},
  {"id": 16, "category": "library", "caption": "A lot of books", "url": "assets/img/library_04.jpg"},
  {"id": 17, "category": "library", "caption": "Books", "url": "assets/img/library_05.jpg"}
]
