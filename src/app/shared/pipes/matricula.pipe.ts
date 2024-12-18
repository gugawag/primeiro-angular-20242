import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matricula',
  standalone: false
})
export class MatriculaPipe implements PipeTransform {

  transform(matriculaOriginal: string): string {

    if (matriculaOriginal.length != 11) {
      return matriculaOriginal;
    }
    // 2024-1-37-0001

    return `${matriculaOriginal.substring(0,4)}-${matriculaOriginal.substring(4,5)}-${matriculaOriginal.substring(5,7)}-${matriculaOriginal.substring(7,11)}`;
  }

}
