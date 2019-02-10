var NFe = require('../src')
const fs = require('fs')
const path = require('path')

function fixture () {
  return fs.readFileSync(path.join(__dirname, './nfe-test.xml'), 'utf-8')
}

module.exports.informacoesNFe = function (test) {
  var nfe = NFe(fixture())

  test.equal(typeof nfe.informacoesNFe(), 'object')
  test.equal(typeof nfe.identificacaoNFe(), 'object')

  var info = nfe.identificacaoNFe()

  test.equal(info.naturezaOperacao(), 'VENDA MERC.ADQ.SUBST.TRIB.')
  test.equal(info.nrNota(), '100')
  test.equal(info.serie(), '0')
  test.equal(info.modelo(), '55')
  test.equal(info.tipoAmbiente(), '2')
  test.equal(info.tipoOperacao(), '1')
  test.equal(info.operacao(), 'saída')
  test.equal(info.dataEmissao(), '2011-07-13')
  test.equal(info.dataEntradaSaida(), '2011-07-13')

  test.done()
}

module.exports.informacoesProtocolo = function (test) {
  var nfe = NFe(fixture())

  test.equal(typeof nfe.informacoesProtocolo(), 'object')
  var protocolo = nfe.informacoesProtocolo()

  test.equal(protocolo.dataHoraRecebimento(), '2011-07-20T15:49:31')
  test.equal(protocolo.protocolo(), '000000000000001')
  test.equal(protocolo.chave(), '31060243816719000108550000000010001234567890')
  test.equal(protocolo.tipoAmbiente(), '2')
  test.equal(protocolo.codigoStatusResposta(), '100')

  test.done()
}

module.exports.duplicatas = function (test) {
  var nfe = NFe(fixture())

  test.equal(typeof nfe.cobranca(), 'object')
  var cobranca = nfe.cobranca()

  test.equal(cobranca.nrDuplicatas(), '1')

  test.equal(typeof cobranca.duplicata(1), 'object')
  var duplicata = cobranca.duplicata(1)

  test.equal(duplicata.numeroDuplicata(), '59080/01')
  test.equal(duplicata.vencimentoDuplicata(), '2011-07-13')
  test.equal(duplicata.valorDuplicata(), '280.00')

  test.done()
}

module.exports.transporte = function (test) {
  var nfe = NFe(fixture())

  test.equal(typeof nfe.transporte(), 'object')
  var transporte = nfe.transporte()

  test.equal(transporte.modalidadeFrete(), '0')
  test.equal(transporte.modalidadeFreteTexto(), 'EMITENTE')

  // transportadora
  test.equal(typeof transporte.transportador(), 'object')
  var transportadora = transporte.transportador()
  test.equal(transportadora.nome(), 'Transporte SA')
  test.equal(transportadora.cnpj(), '01234567000179')
  test.equal(transportadora.inscricaoEstadual(), '012345678')
  test.equal(transportadora.logradouro(), 'RUA DA TRANSPORTADORA')
  test.equal(transportadora.municipio(), 'SAO PAULO')
  test.equal(transportadora.uf(), 'SP')

  // veiculo
  test.equal(typeof transporte.veiculo(), 'object')
  var veiculo = transporte.veiculo()
  test.equal(veiculo.antt(), '000000')
  test.equal(veiculo.placa(), 'ZZZ00001')

  // volume
  test.equal(typeof transporte.volume(), 'object')
  var volume = transporte.volume()

  test.equal(volume.numeracao(), '1,00')
  test.equal(volume.especie(), 'UNIDADE')
  test.equal(volume.marca(), 'DIVERSAS')
  test.equal(volume.quantidadeVolumes(), '1')
  test.equal(volume.pesoLiquido(), '22.001')
  test.equal(volume.pesoBruto(), '22.000')

  test.done()
}

module.exports.informacoesEmitente = function (test) {
  var nfe = NFe(fixture())

  test.equal(typeof nfe.emitente(), 'object')

  var emitente = nfe.emitente()

  test.equal(emitente.nome(), 'Empresa LTDA')
  test.equal(emitente.fantasia(), 'Super Empresa')
  test.equal(emitente.email(), '')
  test.equal(emitente.cpf(), '')
  test.equal(emitente.cnpj(), '11111111111111')
  test.equal(emitente.inscricaoNacional(), '11111111111111')
  test.equal(emitente.inscricaoMunicipal(), '')
  test.equal(emitente.inscricaoEstadual(), 'ISENTO')
  test.equal(emitente.inscricaoEstadualST(), '')

  test.equal(typeof emitente.endereco(), 'object')
  var endereco = emitente.endereco()

  test.equal(endereco.uf(), 'SP')
  test.equal(endereco.cep(), '12500090')
  test.equal(endereco.logradouro(), 'RUA SAO GERONIMO')
  test.equal(endereco.numero(), '888')
  test.equal(endereco.bairro(), 'CENTRO')
  test.equal(endereco.complemento(), '')
  test.equal(endereco.municipio(), 'SAO PAULO')
  test.equal(endereco.codigoMunicipio(), '5700200')
  test.equal(endereco.pais(), 'Brasil')
  test.equal(endereco.codigoPais(), '1058')
  test.equal(endereco.telefone(), '99999991')

  test.done()
}

module.exports.informacoesDestinatario = function (test) {
  var nfe = NFe(fixture())

  test.equal(typeof nfe.destinatario(), 'object')

  var destinatario = nfe.destinatario()

  test.equal(destinatario.nome(), 'NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL')
  test.equal(destinatario.fantasia(), '')
  test.equal(destinatario.email(), '')
  test.equal(destinatario.cpf(), '')
  test.equal(destinatario.cnpj(), '99999999000191')
  test.equal(destinatario.inscricaoNacional(), '99999999000191')
  test.equal(destinatario.inscricaoMunicipal(), '')
  test.equal(destinatario.inscricaoEstadual(), '')
  test.equal(destinatario.inscricaoEstadualST(), '')

  test.equal(typeof destinatario.endereco(), 'object')
  var endereco = destinatario.endereco()

  test.equal(endereco.uf(), 'SP')
  test.equal(endereco.cep(), '12556000')
  test.equal(endereco.logradouro(), 'AV. MEDEIROS')
  test.equal(endereco.numero(), '999')
  test.equal(endereco.bairro(), 'CENTRO')
  test.equal(endereco.complemento(), '')
  test.equal(endereco.municipio(), 'SAO JOSE')
  test.equal(endereco.codigoMunicipio(), '5702501')
  test.equal(endereco.pais(), 'Brasil')
  test.equal(endereco.codigoPais(), '1058')
  test.equal(endereco.telefone(), '99999992')

  test.done()
}

module.exports.item = function (test) {
  var nfe = NFe(fixture())

  test.equal(nfe.nrItens(), '2')

  test.equal(typeof nfe.item(1), 'object')
  var item = nfe.item(1)

  test.equal(item.codigo(), '3')
  test.equal(item.descricao(), 'BISCOITO VITAMINADO')
  test.equal(item.ean(), '0000000000000')
  test.equal(item.ncm(), '87089100')
  test.equal(item.cest(), '')
  test.equal(item.cfop(), '5405')
  test.equal(item.unidadeComercial(), 'UND')
  test.equal(item.valorUnitario(), '140.0000000000')
  test.equal(item.unidadeTributavel(), 'UND')
  test.equal(item.eanTributavel(), '0000000000000')
  test.equal(item.quantidadeTributavel(), '1.0000')
  test.equal(item.quantidadeComercial(), '1.0000')
  test.equal(item.valorUnitarioTributavel(), '140.0000000000')
  test.equal(item.valorOutrasDespesas(), '')
  test.equal(item.indicadorTotal(), '1')
  test.equal(item.codigoANP(), '620505001')
  test.equal(item.informacoesProduto(), 'Cod. Forn BISVIT003')

  // imposto
  test.equal(typeof item.imposto(), 'object')
  test.equal(typeof item.imposto().icms(), 'object')
  var icms = item.imposto().icms()
  test.equal(icms.cst(), '10')
  test.equal(icms.baseCalculo(), '14.63')
  test.equal(icms.porcetagemIcms(), '4.0000')
  test.equal(icms.porcetagemIcmsST(), '18.0000')
  test.equal(icms.valorIcms(), '0.59')
  test.equal(icms.baseCalculoIcmsST(), '29.42')
  test.equal(icms.valorIcmsST(), '4.71')
  test.equal(icms.origem(), '3')
  test.equal(icms.csosn(), '')
  test.equal(icms.porcentagemMVAST(), '101.1100')
  test.equal(icms.modalidadeBCST(), '4')
  test.equal(icms.valorFCP(), '2.87')
  test.equal(icms.valorFCPST(), '4.50')
  test.equal(icms.valorFCPSTRetido(), '0.00')
  test.equal(icms.porcentagemFCP(), '1.0000')
  test.equal(icms.porcentagemFCPST(), '1.0000')
  test.equal(icms.porcentagemFCPSTRetido(), '1.0000')
  test.equal(icms.baseCalculoFCP(), '249.92')
  test.equal(icms.baseCalculoFCPST(), '449.92')
  test.equal(icms.baseCalculoFCPSTRetido(), '100.00')

  test.equal(typeof item.imposto().ipi(), 'object')
  var ipi = item.imposto().ipi()
  test.equal(ipi.cst(), '99')
  test.equal(ipi.baseCalculo(), '140.00')
  test.equal(ipi.valorIPI(), '0.00')
  test.equal(ipi.porcentagemIPI(), '0.00')

  test.equal(typeof item.imposto().pis(), 'object')
  var pis = item.imposto().pis()
  test.equal(pis.cst(), '01')
  test.equal(pis.baseCalculo(), '140.00')
  test.equal(pis.valorPIS(), '0.00')
  test.equal(pis.porcentagemPIS(), '0.00')

  test.equal(typeof item.imposto().cofins(), 'object')
  var cofins = item.imposto().cofins()
  test.equal(cofins.cst(), '01')
  test.equal(cofins.baseCalculo(), '140.00')
  test.equal(cofins.porcentagemCOFINS(), '0.00')
  test.equal(cofins.valorCOFINS(), '0.00')

  test.done()
}

module.exports.total = function (test) {
  var nfe = NFe(fixture())

  test.equal(typeof nfe.totalIcmsNota(), 'object')
  test.equal(typeof nfe.total(), 'object')
  var total = nfe.total()
  test.equal(total.baseCalculoIcms(), '0.00')
  test.equal(total.valorIcms(), '0.00')
  test.equal(total.valorIcmsDesonerado(), '')
  test.equal(total.baseCalculoIcmsST(), '0.00')
  test.equal(total.baseCalculoIcmsSTRetido(), '')
  test.equal(total.valorIcmsST(), '0.00')
  test.equal(total.valorIcmsSTRetido(), '')
  test.equal(total.valorProdutos(), '280.00')
  test.equal(total.valorFrete(), '0.00')
  test.equal(total.valorSeguro(), '0.00')
  test.equal(total.valorDesconto(), '0.00')
  test.equal(total.valorII(), '0.00')
  test.equal(total.valorIPI(), '0.00')
  test.equal(total.valorPIS(), '0.00')
  test.equal(total.valorCOFINS(), '0.00')
  test.equal(total.valorOutrasDespesas(), '0.00')
  test.equal(total.valorNota(), '280.00')
  test.equal(total.valorTotalTributos(), '')

  test.done()
}

module.exports.servico = function (test) {
  var nfe = NFe(fixture())

  test.equal(typeof nfe.total().servico(), 'object')
  var servico = nfe.servico()
  test.equal(servico.valorTotalISS(), '2.00')
  test.equal(servico.valorTotalServicoNaoIncidente(), '100.00')

  test.done()
}

module.exports.informacoesAdicionais = function (test) {
  var nfe = NFe(fixture())

  test.equal(nfe.informacoesComplementares(), 'OBS:.')
  test.equal(nfe.informacoesFisco(), 'Imposto recolhido')
  test.equal(nfe.nrObservacoes(), '2')
  test.equal(nfe.observacao(1).texto(), '*ICMS PAGO POR SUBST.TRIBUTARIA.')
  test.equal(nfe.observacao(1).campoObservacao(), 'ObsCont')

  test.done()
}

module.exports.NfeInvalida = function (test) {
  var nfe = NFe('')

  test.equal(nfe.chave(), '')

  test.done()
}
