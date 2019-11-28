var NFe = require('../src')
var assert = require('assert')
const fs = require('fs')
const path = require('path')

function fixture () {
  return fs.readFileSync(path.join(__dirname, './nfe-test.xml'), 'utf-8')
}

describe('NFe', function () {
  describe('informacoesNFe', function () {
    it('deveria recuperar informações de identificação da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(typeof nfe.informacoesNFe(), 'object')
      assert.strictEqual(typeof nfe.identificacaoNFe(), 'object')

      var info = nfe.identificacaoNFe()

      assert.strictEqual(info.naturezaOperacao(), 'VENDA MERC.ADQ.SUBST.TRIB.')
      assert.strictEqual(info.nrNota(), '100')
      assert.strictEqual(info.serie(), '0')
      assert.strictEqual(info.modelo(), '55')
      assert.strictEqual(info.tipoAmbiente(), '2')
      assert.strictEqual(info.tipoOperacao(), '1')
      assert.strictEqual(info.operacao(), 'saída')
      assert.strictEqual(info.dataEmissao(), '2011-07-13')
      assert.strictEqual(info.dataEntradaSaida(), '2011-07-13')
    })
  })

  describe('informacoesProtocolo', function () {
    it('deveria recuperar informações do protocolo da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(typeof nfe.informacoesProtocolo(), 'object')
      var protocolo = nfe.informacoesProtocolo()

      assert.strictEqual(protocolo.dataHoraRecebimento(), '2011-07-20T15:49:31')
      assert.strictEqual(protocolo.protocolo(), '000000000000001')
      assert.strictEqual(protocolo.chave(), '31060243816719000108550000000010001234567890')
      assert.strictEqual(protocolo.tipoAmbiente(), '2')
      assert.strictEqual(protocolo.codigoStatusResposta(), '100')
    })
  })

  describe('cobrança', function () {
    it('deveria recuperar informações de cobrança da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(typeof nfe.cobranca(), 'object')
      var cobranca = nfe.cobranca()

      assert.strictEqual(cobranca.nrDuplicatas(), 1)

      assert.strictEqual(typeof cobranca.duplicata(1), 'object')
      var duplicata = cobranca.duplicata(1)

      assert.strictEqual(duplicata.numeroDuplicata(), '59080/01')
      assert.strictEqual(duplicata.vencimentoDuplicata(), '2011-07-13')
      assert.strictEqual(duplicata.valorDuplicata(), '280.00')
    })
  })

  describe('transporte', function () {
    it('deveria recuperar informações de transporte da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(typeof nfe.transporte(), 'object')
      var transporte = nfe.transporte()

      assert.strictEqual(transporte.modalidadeFrete(), '0')
      assert.strictEqual(transporte.modalidadeFreteTexto(), 'EMITENTE')

      // transportadora
      assert.strictEqual(typeof transporte.transportador(), 'object')
      var transportadora = transporte.transportador()
      assert.strictEqual(transportadora.nome(), 'Transporte SA')
      assert.strictEqual(transportadora.cnpj(), '01234567000179')
      assert.strictEqual(transportadora.inscricaoEstadual(), '012345678')
      assert.strictEqual(transportadora.logradouro(), 'RUA DA TRANSPORTADORA')
      assert.strictEqual(transportadora.municipio(), 'SAO PAULO')
      assert.strictEqual(transportadora.uf(), 'SP')

      // veiculo
      assert.strictEqual(typeof transporte.veiculo(), 'object')
      var veiculo = transporte.veiculo()
      assert.strictEqual(veiculo.antt(), '000000')
      assert.strictEqual(veiculo.placa(), 'ZZZ00001')

      // volume
      assert.strictEqual(typeof transporte.volume(), 'object')
      var volume = transporte.volume()

      assert.strictEqual(volume.numeracao(), '1,00')
      assert.strictEqual(volume.especie(), 'UNIDADE')
      assert.strictEqual(volume.marca(), 'DIVERSAS')
      assert.strictEqual(volume.quantidadeVolumes(), '1')
      assert.strictEqual(volume.pesoLiquido(), '22.001')
      assert.strictEqual(volume.pesoBruto(), '22.000')
    })
  })

  describe('informacoesEmitente', function () {
    it('deveria recuperar informações do emitente da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(typeof nfe.emitente(), 'object')

      var emitente = nfe.emitente()

      assert.strictEqual(emitente.nome(), 'Empresa LTDA')
      assert.strictEqual(emitente.fantasia(), 'Super Empresa')
      assert.strictEqual(emitente.email(), '')
      assert.strictEqual(emitente.cpf(), '')
      assert.strictEqual(emitente.cnpj(), '11111111111111')
      assert.strictEqual(emitente.inscricaoNacional(), '11111111111111')
      assert.strictEqual(emitente.inscricaoMunicipal(), '')
      assert.strictEqual(emitente.inscricaoEstadual(), 'ISENTO')
      assert.strictEqual(emitente.inscricaoEstadualST(), '')
      assert.strictEqual(emitente.codigoRegimeTributario(), '3')

      assert.strictEqual(typeof emitente.endereco(), 'object')
      var endereco = emitente.endereco()

      assert.strictEqual(endereco.uf(), 'SP')
      assert.strictEqual(endereco.cep(), '12500090')
      assert.strictEqual(endereco.logradouro(), 'RUA SAO GERONIMO')
      assert.strictEqual(endereco.numero(), '888')
      assert.strictEqual(endereco.bairro(), 'CENTRO')
      assert.strictEqual(endereco.complemento(), '')
      assert.strictEqual(endereco.municipio(), 'SAO PAULO')
      assert.strictEqual(endereco.codigoMunicipio(), '5700200')
      assert.strictEqual(endereco.pais(), 'Brasil')
      assert.strictEqual(endereco.codigoPais(), '1058')
      assert.strictEqual(endereco.telefone(), '99999991')
    })
  })

  describe('informacoesDestinatario', function () {
    it('deveria recuperar informações do destinatério da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(typeof nfe.destinatario(), 'object')

      var destinatario = nfe.destinatario()

      assert.strictEqual(destinatario.nome(), 'NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL')
      assert.strictEqual(destinatario.fantasia(), '')
      assert.strictEqual(destinatario.email(), '')
      assert.strictEqual(destinatario.cpf(), '')
      assert.strictEqual(destinatario.cnpj(), '99999999000191')
      assert.strictEqual(destinatario.inscricaoNacional(), '99999999000191')
      assert.strictEqual(destinatario.inscricaoMunicipal(), '')
      assert.strictEqual(destinatario.inscricaoEstadual(), '')
      assert.strictEqual(destinatario.inscricaoEstadualST(), '')

      assert.strictEqual(typeof destinatario.endereco(), 'object')
      var endereco = destinatario.endereco()

      assert.strictEqual(endereco.uf(), 'SP')
      assert.strictEqual(endereco.cep(), '12556000')
      assert.strictEqual(endereco.logradouro(), 'AV. MEDEIROS')
      assert.strictEqual(endereco.numero(), '999')
      assert.strictEqual(endereco.bairro(), 'CENTRO')
      assert.strictEqual(endereco.complemento(), '')
      assert.strictEqual(endereco.municipio(), 'SAO JOSE')
      assert.strictEqual(endereco.codigoMunicipio(), '5702501')
      assert.strictEqual(endereco.pais(), 'Brasil')
      assert.strictEqual(endereco.codigoPais(), '1058')
      assert.strictEqual(endereco.telefone(), '99999992')
    })
  })

  describe('item', function () {
    it('deveria recuperar informações dos itens/produtos da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(nfe.nrItens(), 2)

      assert.strictEqual(typeof nfe.item(1), 'object')
      var item = nfe.item(1)

      assert.strictEqual(item.codigo(), '3')
      assert.strictEqual(item.descricao(), 'BISCOITO VITAMINADO')
      assert.strictEqual(item.ean(), '0000000000000')
      assert.strictEqual(item.ncm(), '87089100')
      assert.strictEqual(item.cest(), '')
      assert.strictEqual(item.cfop(), '5405')
      assert.strictEqual(item.codigoBeneficioFiscal(), 'SEM CBENEF')
      assert.strictEqual(item.numeroFCI(), '86600455-AA27-4CA7-96A9-8C6877EB0C09')
      assert.strictEqual(item.unidadeComercial(), 'UND')
      assert.strictEqual(item.valorUnitario(), '140.0000000000')
      assert.strictEqual(item.unidadeTributavel(), 'UND')
      assert.strictEqual(item.eanTributavel(), '0000000000000')
      assert.strictEqual(item.quantidadeTributavel(), '1.0000')
      assert.strictEqual(item.quantidadeComercial(), '1.0000')
      assert.strictEqual(item.valorUnitarioTributavel(), '140.0000000000')
      assert.strictEqual(item.valorOutrasDespesas(), '')
      assert.strictEqual(item.indicadorTotal(), '1')
      assert.strictEqual(item.codigoANP(), '620505001')
      assert.strictEqual(item.informacoesProduto(), 'Cod. Forn BISVIT003')

      // imposto
      assert.strictEqual(typeof item.imposto(), 'object')
      assert.strictEqual(typeof item.imposto().icms(), 'object')
      var icms = item.imposto().icms()
      assert.strictEqual(icms.cst(), '10')
      assert.strictEqual(icms.baseCalculo(), '14.63')
      assert.strictEqual(icms.porcetagemIcms(), '4.0000')
      assert.strictEqual(icms.porcetagemIcmsST(), '18.0000')
      assert.strictEqual(icms.valorIcms(), '0.59')
      assert.strictEqual(icms.baseCalculoIcmsST(), '29.42')
      assert.strictEqual(icms.valorIcmsST(), '4.71')
      assert.strictEqual(icms.origem(), '3')
      assert.strictEqual(icms.csosn(), '')
      assert.strictEqual(icms.porcentagemMVAST(), '101.1100')
      assert.strictEqual(icms.modalidadeBCST(), '4')
      assert.strictEqual(icms.valorFCP(), '2.87')
      assert.strictEqual(icms.valorFCPST(), '4.50')
      assert.strictEqual(icms.valorFCPSTRetido(), '0.00')
      assert.strictEqual(icms.porcentagemFCP(), '1.0000')
      assert.strictEqual(icms.porcentagemFCPST(), '1.0000')
      assert.strictEqual(icms.porcentagemFCPSTRetido(), '1.0000')
      assert.strictEqual(icms.baseCalculoFCP(), '249.92')
      assert.strictEqual(icms.baseCalculoFCPST(), '449.92')
      assert.strictEqual(icms.baseCalculoFCPSTRetido(), '100.00')

      assert.strictEqual(typeof item.imposto().ipi(), 'object')
      var ipi = item.imposto().ipi()
      assert.strictEqual(ipi.cst(), '99')
      assert.strictEqual(ipi.baseCalculo(), '140.00')
      assert.strictEqual(ipi.valorIPI(), '0.00')
      assert.strictEqual(ipi.porcentagemIPI(), '0.00')

      assert.strictEqual(typeof item.imposto().pis(), 'object')
      var pis = item.imposto().pis()
      assert.strictEqual(pis.cst(), '01')
      assert.strictEqual(pis.baseCalculo(), '140.00')
      assert.strictEqual(pis.valorPIS(), '0.00')
      assert.strictEqual(pis.porcentagemPIS(), '0.00')

      assert.strictEqual(typeof item.imposto().cofins(), 'object')
      var cofins = item.imposto().cofins()
      assert.strictEqual(cofins.cst(), '01')
      assert.strictEqual(cofins.baseCalculo(), '140.00')
      assert.strictEqual(cofins.porcentagemCOFINS(), '0.00')
      assert.strictEqual(cofins.valorCOFINS(), '0.00')
    })
  })

  describe('total', function () {
    it('deveria recuperar informações de total da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(typeof nfe.totalIcmsNota(), 'object')
      assert.strictEqual(typeof nfe.total(), 'object')
      var total = nfe.total()
      assert.strictEqual(total.baseCalculoIcms(), '0.00')
      assert.strictEqual(total.valorIcms(), '0.00')
      assert.strictEqual(total.valorIcmsDesonerado(), '')
      assert.strictEqual(total.baseCalculoIcmsST(), '0.00')
      assert.strictEqual(total.baseCalculoIcmsSTRetido(), '')
      assert.strictEqual(total.valorIcmsST(), '0.00')
      assert.strictEqual(total.valorIcmsSTRetido(), '')
      assert.strictEqual(total.valorProdutos(), '280.00')
      assert.strictEqual(total.valorFrete(), '0.00')
      assert.strictEqual(total.valorSeguro(), '0.00')
      assert.strictEqual(total.valorDesconto(), '0.00')
      assert.strictEqual(total.valorII(), '0.00')
      assert.strictEqual(total.valorIPI(), '0.00')
      assert.strictEqual(total.valorPIS(), '0.00')
      assert.strictEqual(total.valorCOFINS(), '0.00')
      assert.strictEqual(total.valorOutrasDespesas(), '0.00')
      assert.strictEqual(total.valorNota(), '280.00')
      assert.strictEqual(total.valorTotalTributos(), '')
    })
  })

  describe('servico', function () {
    it('deveria recuperar informações de serviço da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(typeof nfe.total().servico(), 'object')
      var servico = nfe.servico()
      assert.strictEqual(servico.valorTotalISS(), '2.00')
      assert.strictEqual(servico.valorTotalServicoNaoIncidente(), '100.00')
    })
  })

  describe('informacoesAdicionais', function () {
    it('deveria recuperar informações adicionais da NFe', function () {
      var nfe = NFe(fixture())

      assert.strictEqual(nfe.informacoesComplementares(), 'OBS:.')
      assert.strictEqual(nfe.informacoesFisco(), 'Imposto recolhido')
      assert.strictEqual(nfe.nrObservacoes(), 2)
      assert.strictEqual(nfe.observacao(1).texto(), '*ICMS PAGO POR SUBST.TRIBUTARIA.')
      assert.strictEqual(nfe.observacao(1).campoObservacao(), 'ObsCont')
    })
  })
})

describe('NFe inválida', function () {
  describe('NfeInvalida', function () {
    it('deveria retornar vazio quando o xml da NFe é inválido', function () {
      var nfe = NFe('')
      assert.strictEqual(nfe.chave(), '')
    })
  })
})
