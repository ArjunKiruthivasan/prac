import { Component, OnInit,OnChanges,Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit,OnChanges {
  title='Recent Photos';
  @Input() filterBy?:string='all';
  visibleImages:any[]=[];
  constructor(private imageservice:ImageService) {
    this.visibleImages=this.imageservice.getImages();
  }

  ngOnInit() {
  }

  ngOnChanges(){
  this.visibleImages=this.imageservice.getImages();
  }

}
