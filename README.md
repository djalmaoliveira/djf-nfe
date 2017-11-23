# djf-nfe
[![Build Status](https://travis-ci.org/djalmaoliveira/djf-nfe.svg?branch=master)](https://travis-ci.org/djalmaoliveira/djf-nfe) ![Version](https://img.shields.io/npm/v/djf-nfe.svg)

Simples parser para XML da Nota fiscal eletrônica (NFe), usando javascript.

Atenção: A biblioteca não cobre todos os campos definidos na NFe, se não encontrar algum campo faça uma contribuição enviando um pull request com a implementação.


## Preparação

### Pré-requisitos

NodeJS

### Instalação
```
npm install djf-nfe
```

### Exemplos


[Exemplos de uso](https://github.com/djalmaoliveira/djf-nfe/tree/master/test/index.js)


## Especificações

### Funções

* Disponibiliza uma API fluente para acessar os dados da NFe independente da versão do schema.

### Não oferece

* Validação de valores dos campos.

## Testes
```
npm run test
```

### Codificação

[standardjs](https://standardjs.com/rules.html)


## Contribuições

* Contribuições podem ser enviadas através de pull request.
* Lembre-se de adicionar o teste respectivo a sua implementação.
* [Autores](https://github.com/djalmaoliveira/djf-nfe/contributors)

## Versão

[Semantic Versioning](http://semver.org/)


## Licença

[MIT](LICENSE)