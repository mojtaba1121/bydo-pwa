import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: "faNumber", standalone: true})
export class FaNumberPipe implements PipeTransform {
    transform(value: string | number): string {
        return String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
    }
}
