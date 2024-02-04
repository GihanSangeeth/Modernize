import { Component } from '@angular/core';


@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {
  
  uploadFile(event: any) {
    console.log(event.target.files[0].name)
    
  }

}
