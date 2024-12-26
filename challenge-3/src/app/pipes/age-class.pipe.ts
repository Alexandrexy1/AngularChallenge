import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'ageClass'
})
export class AgeClassPipe implements PipeTransform {
  transform(age: number): string {
    if (age < 25) return 'is-red';
    else if (age < 35 && age > 25 ) return 'is-blue';
    else return 'is-green';

  }
}