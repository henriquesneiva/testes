~~~JavaScript
const XLSX = require('xlsx');
const axios = require('axios');

// Função para formatar o CPF para 11 dígitos
function formatarCPF(cpf) {
  // ...
  // O restante da função formatarCPF
  // ...
}

// Função para ler o arquivo Excel e extrair os dados
async function lerArquivoExcel(nomeArquivo) {
  // ...
  // O restante da função lerArquivoExcel
  // ...
}

// Função para fazer a requisição GET com os CPFs
async function fazerRequisicaoComCPF(cpfCnpj) {
  const url = `http://teste${cpfCnpj}`;
  const headers = {
    grupo_operadoe: '123',
    canal: '123'
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(`Erro na requisição para o CPF/CNPJ ${cpfCnpj}: ${error.message}`);
    return null;
  }
}

// Exemplo de uso
async function main() {
  const nomeArquivoExcel = 'caminho/para/o/arquivo.xlsx';
  const dadosFiltrados = await lerArquivoExcel(nomeArquivoExcel);

  for (const { cpfCnpj } of dadosFiltrados) {
    const cpfFormatado = formatarCPF(cpfCnpj);
    const resposta = await fazerRequisicaoComCPF(cpfFormatado);

    if (resposta) {
      console.log(`Resposta para o CPF/CNPJ ${cpfCnpj}:`, resposta);
    }
  }
}

main();

~~~
