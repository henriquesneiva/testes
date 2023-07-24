~~~JavaScript
const XLSX = require('xlsx');

// Função para ler o arquivo Excel e extrair os dados
function lerArquivoExcel(nomeArquivo) {
  const workbook = XLSX.readFile(nomeArquivo);
  const sheetName = workbook.SheetNames[0]; // Assumindo que queremos ler a primeira planilha do arquivo

  // Parseia a planilha para um objeto JSON
  const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  // Filtra apenas as colunas "CPF (CGCCDN) / CNPJ" e "Nome do Produto (NPRODDEMP)"
  const dadosFiltrados = jsonData.map(({ 'CPF (CGCCDN) / CNPJ': cpfCnpj, 'Nome do Produto (NPRODDEMP)': NomeProduto }) => ({ cpfCnpj, NomeProduto }));

  return dadosFiltrados;
}

// Exemplo de uso
const nomeArquivoExcel = 'caminho/para/o/arquivo.xlsx';
const resultadoFiltrado = lerArquivoExcel(nomeArquivoExcel);
console.log(resultadoFiltrado);

~~~
