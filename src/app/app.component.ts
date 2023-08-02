import { Component } from '@angular/core';
import { ExcelService } from './excel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jsonData: any[] = []; 
  displayedColumns: string[] = ['cpf', 'produto', 'statusMassa'];

  constructor(private excelService: ExcelService) { }

  public onFileChange(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.excelService.readExcelFile(file)
        .then((jsonData: any[]) => {
          console.log('JSON Data:', jsonData);
          this.jsonData = jsonData;
        })
        .catch((error) => {
          console.error('Erro ao ler o arquivo Excel:', error);
        });
    }
  }

  public limparDados(): void {
    this.jsonData = [];
  }
}
