~~~JavaScript
const XLSX = require('xlsx');

// Função para formatar o CPF para 11 dígitos
function formatarCPF(cpf) {
  // Remove todos os caracteres não numéricos do CPF
  const cpfNumerico = cpf.replace(/\D/g, '');
  // Se o CPF tiver mais de 11 dígitos, remove os zeros à esquerda
  return cpfNumerico.padStart(11, '0').slice(-11);
}

// Função para ler o arquivo Excel e extrair os dados
function lerArquivoExcel(nomeArquivo) {
  const workbook = XLSX.readFile(nomeArquivo);
  const sheetName = workbook.SheetNames[0]; // Assumindo que queremos ler a primeira planilha do arquivo

  // Parseia a planilha para um objeto JSON
  const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  // Obtém o cabeçalho da planilha
  const cabecalho = jsonData[0];

  // Pula a primeira linha do cabeçalho (contém "Data da Baixa")
  const dadosSemCabecalho = jsonData.slice(1);

  // Filtra apenas as colunas "CPF (CGCCDN) / CNPJ" e "Nome do Produto (NPRODDEMP)" e formata o CPF
  const dadosFiltrados = dadosSemCabecalho.map(({ 'CPF (CGCCDN) / CNPJ': cpfCnpj, 'Nome do Produto (NPRODDEMP)': NomeProduto }) => ({
    cpfCnpj: formatarCPF(cpfCnpj),
    NomeProduto,
  }));

  return dadosFiltrados;
}

// Exemplo de uso
const nomeArquivoExcel = 'caminho/para/o/arquivo.xlsx';
const resultadoFiltrado = lerArquivoExcel(nomeArquivoExcel);
console.log(resultadoFiltrado);

~~~
