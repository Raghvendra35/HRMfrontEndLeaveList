import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';
import { ImageAndFile } from '../ImageAndFile';



@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit
{

  name: any;
  datas: any;

  selectedFiles: FileList;
  currentFile: File;


  imageAndFile: ImageAndFile=new ImageAndFile();

   formData: FormData=new FormData();

   constructor(private imageUploadService: ImageUploadService ){}

  ngOnInit(): void {
   
  }


  

  onFileSelected(event)
  {
      this.selectedFiles = event.target.files;

      console.log("event inside");
      console.log(event);
  
      console.log("Inside files");
      console.log(event.target.files);

      this.formData=event.target.files[0];
      console.log("Form Data");
      console.log(this.formData);
      //console.log(this.formData.name);
      //console.log(this.datas.type);


      // console.log("Object inside");
      // this.imageAndFile=event.target.files[0];
      // console.log(this.imageAndFile.name);
      
    




    }









   uploadImage()
   {

    this.currentFile = this.selectedFiles.item(0);


    this.imageUploadService.saveImage(this.currentFile
      ).subscribe((data)=>
    {
      console.log("inside uploadImage");
      console.log(data);
      alert("Inage Saved");
    }, (error)=>
      {
        alert("Failed !!!");
      })
   }

}
