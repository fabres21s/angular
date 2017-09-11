import {Component} from '@angular/core';
import {FileUploader, FileItem} from 'ng2-file-upload';
import {FileSelectDirective} from './file-select.directive';

// const URL = '/api/';
const URL = 'http://localhost:8080/ws-fileupload/rest/upload';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'fileupload',
  templateUrl: './fileupload.component.html'
})
export class FileuploadComponent {
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}