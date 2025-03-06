import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {IMensagem} from "../modelo/IMensagem";

@Injectable({
  providedIn: 'root'
})
export class MensagemSweetService extends IMensagem{

  constructor() {
      super();
  }

  sucesso(mensagem: string) {
    Swal.fire(
        {
        title: 'Sucesso',
          timer: 5000,
          text: mensagem,
          icon: 'success',
          confirmButtonText: 'Ok'
    }
    )
  }

  erro(mensagem: string) {
    Swal.fire(
        {
          title: 'Erro',
          timer: 5000,
          text: mensagem,
          icon: 'error',
          confirmButtonText: 'Ok'
        }
    )
  }

    aviso(mensagem: string): void {
        Swal.fire(
            {
                title: 'Aviso',
                timer: 5000,
                text: mensagem,
                icon: 'warning',
                confirmButtonText: 'Ok'
            }
        )

    }

    info(mensagem: string): void {
        Swal.fire(
            {
                title: 'Informacao',
                timer: 5000,
                text: mensagem,
                icon: 'warning',
                confirmButtonText: 'Ok'
            }
        )
    }

}
