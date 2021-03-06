import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('fileUploadInput', {static: false}) inputRef;

  charName = '';
  jsonToDownload = {};
  uploadedSheet = {};
  forceJsonUpload = false;
  readyToDownload = {
    character: false,
    inventory: false,
  };

  getCharName(newCharName: string) {
    this.charName = newCharName.toUpperCase();
  }

  getJson(json: any, jsonSection: string) {
    this.jsonToDownload[jsonSection] = json;
  }

  print() {
    window.print();
  }

  download() {
    const fileName = this.charName.toUpperCase() !== '' ? `${this.charName.toUpperCase()}.json` : `blank.json`;
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.jsonToDownload));
    const dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', fileName);
  }

  uploadFile(event: any) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsText(selectedFile, 'UTF-8');
    fileReader.onload = () => {
     this.uploadedSheet = JSON.parse(fileReader.result.toString());
     this.reset();
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  reset() {
    this.inputRef.nativeElement.value = '';
  }
}
