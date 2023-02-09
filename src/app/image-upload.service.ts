import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseURL from './help';
import { ImageAndFile } from './ImageAndFile';


@Injectable({
  providedIn: 'root'
})
export class ImageUploadService 
{

  constructor(private http: HttpClient) { }


  //Save Image
  saveImage(file: File)
  {

    // const formData: FormData = new FormData();

    // formData.append('file', file);

   return this.http.post<ImageAndFile>(`${baseURL}/api/fileSystem`, file);
  }

}
