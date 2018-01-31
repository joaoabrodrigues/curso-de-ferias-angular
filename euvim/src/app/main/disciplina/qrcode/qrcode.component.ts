import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {
  public qrCode;

  constructor(public dialogRef: MatDialogRef<QrcodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _httpClient: HttpClient) { }

  ngOnInit() {
    console.log(this.data);
    this.qrCode = 'https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=207x207&chl=' + btoa(JSON.stringify(this.data));
  }
}
