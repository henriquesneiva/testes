import * as XLSX from 'xlsx';

export class ExcelService {
  constructor() { }

  public readExcelFile(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();

      reader.onload = (e: any) => {
        const data: Uint8Array = new Uint8Array(e.target.result);
        const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });

        const jsonData: any[] = [];

        workbook.SheetNames.forEach((sheetName: string) => {
          const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
          const sheetData: any[] = XLSX.utils.sheet_to_json(worksheet, { raw: true });

          const filteredData: any[] = sheetData.map((row: any) => ({
            cpf: this.formatarCpf(row['cpfCnpj']),
            produto: row['produto'],
            statusMassa: 'Pronto Para renegociar'
          }));

          jsonData.push(...filteredData);
        });

        resolve(jsonData);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  public formatarCpf(cpf: any): String {
    const cpfNumerico = cpf.replace(/\D/g, '');
    return cpfNumerico.padStart(11, '0').slice(-11);
  }
}