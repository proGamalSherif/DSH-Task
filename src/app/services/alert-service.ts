import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  loading(title: string = 'Loading', text: string = '') {
    Swal.fire({
      title,
      text,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }
  success(title: string = 'Success', text: string = '', timer: number = 2000) {
    Swal.fire({
      icon: 'success',
      title,
      text,
      timer,
      showConfirmButton: false,
      timerProgressBar: true
    });
  }
  error(title: string = 'Error!', text: string = '', timer: number = 3000) {
    Swal.fire({
      icon: 'error',
      title,
      text,
      timer,
      showConfirmButton: false,
      timerProgressBar: true
    });
  }
  confirm(
    title: string,
    text: string,
    confirmButtonText: string = 'Confirm',
    cancelButtonText: string = 'Cancel'
  ): Promise<boolean> {
    return Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText
    }).then(result => result.isConfirmed);
  }

  closeAll() {
    Swal.close();
  }
}
