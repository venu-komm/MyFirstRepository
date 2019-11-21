import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material"
import { from } from 'rxjs';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MatDialogService {

  constructor(private matdialog: MatDialog) {
   }
   openConfirmDialog(msg, type){
    return this.matdialog.open(MatConfirmDialogComponent, {
       width:'360px',
       disableClose: true,
       panelClass: 'confirm-dialog-container',
       position:{top:"10px"} ,
       data: {message:msg, dialogType: type}
     })
   }
   openEmployeeCreate(){
    // return this.matdialog.open(create.component)
   }
}
