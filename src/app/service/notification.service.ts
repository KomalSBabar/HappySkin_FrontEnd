import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: any, title = "Success", timeout = 3000) {
    this.toastr.success(message, title, {
      timeOut: timeout,
    });
  }
  showError(message: any, title = "Error", timeout = 3000) {
    this.toastr.error(message, title, {
      timeOut: timeout,
    });
  }

  showInfo(message: any, title = "Information") {
    this.toastr.info(message, title, {
      timeOut: 1000,
    });
  }

  showWarning(message: any, title = "Warning") {
    this.toastr.warning(message, title, {
      timeOut: 1000,
    });
  }


}
