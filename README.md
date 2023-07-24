npm install isomorphic-fetch
const fetch = require('isomorphic-fetch');

~~~JavaScript
const XLSX = require('xlsx');
const fetch = require('node-fetch');

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
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Erro na requisição para o CPF/CNPJ ${cpfCnpj}: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
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








~~~JavaScript
const XLSX = require('xlsx');
const fetch = require('node-fetch');

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
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Erro na requisição para o CPF/CNPJ ${cpfCnpj}: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
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

~~~
