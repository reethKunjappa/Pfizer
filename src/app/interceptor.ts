// Dependency Imports
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { Router, ActivatedRoute } from '@angular/router';

// Below Imports only for showing error msg on modal
import { StatusComponent } from './status/status.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

@Injectable()

export class I1 implements HttpInterceptor {

  // Property Declarations
  public statusDialog : any;

  constructor(public spinnerService: HttpInterceptorService, public dialog: MatDialog, private router : Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if ( req.url.substring(req.url.lastIndexOf('/') + 1) === 'compare' ) {
      this.spinnerService.hide();
    }else {
      this.spinnerService.show();
    }

    // this.spinnerService.show();

    return next.handle(req).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if( event.body.status.code !== 0 ){
            // let headerMessage = event.url.substring(event.url.lastIndexOf('/') + 1) === 'compare' && event.body.status.code == -2  ? 'Message' : 'Error';
            let headerMessage = ( event.url.substring(event.url.lastIndexOf('/') + 1) === 'compare' || event.url.substring(event.url.lastIndexOf('/') + 1) === 'compare' && event.url.substring(event.url.lastIndexOf('/') + 1) === 'commentAck') && event.body.status.code == -2  ? 'Message' : 'Error';
            // event.url.substring(event.url.lastIndexOf('/') + 1) === 'compare' ||    // Condition removed as compare is getting called from view project page only.
            this.displayErrorMessage( event.body.status, headerMessage );
          }
          this.spinnerService.hide();
        }
      },
      (err: any) => {
        if ( err ) {
          this.spinnerService.hide();
          this.displayErrorMessage(err, '');
        }
      }
    );

  }

  displayErrorMessage( errMessage, headerMessage ){
    this.statusDialog = this.dialog.open(StatusComponent, {
      disableClose: true,
      width: '400px',
      data: {
        statusText: errMessage.message,
        statusTitle: headerMessage ? headerMessage : 'Error',//'Error',
        showSubmit: false,
        showCancel: true,
        submitText: 'Ok',
        cancelText: 'Close',
      },
    });
    
    this.statusDialog.afterClosed().subscribe(result => {
      if ( result == 'Cancel' ) {
        this.router.navigate(['/project',{}]);
      }
    });
  }

}