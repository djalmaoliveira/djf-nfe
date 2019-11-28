const xmlModel = require('djf-xml')

module.exports = NfeModel

function NfeModel (content) {
  content = !content ? '' : content
  var xml = (typeof content !== 'object') ? xmlModel(content) : content

  var value = function (result) {
    result = !result ? '' : result
    return (typeof result !== 'object') ? result : NfeModel(result)
  }

  return {

    dataHoraRecebimento: function () {
      return value(xml.tagValue('dhRecbto'))
    },

    protocolo: function () {
      return value(xml.tagValue('nProt'))
    },

    chave: function () {
      return value(xml.tagValue('chnfe') || value(xml.tagValue('infNFe', 'Id')).replace(/[^\d]+/g, ''))
    },

    tipoAmbiente: function () {
      return value(xml.tagValue('tpAmb'))
    },

    codigoStatusResposta: function () {
      return value(xml.tagValue('cStat') ? xml.tagValue('cStat') : xml.tagValue('cStat'))
    },

    dataEmissao: function () {
      return (xml.tagValue(['dhEmi', 'dEmi']))
    },

    dataEntradaSaida: function () {
      var dt = xml.tagValue(['dhSaiEnt', 'dSaiEnt'])
      if (dt) {
        return (dt)
      }
      return ''
    },

    nrNota: function () {
      return value(xml.tagValue('nNF'))
    },

    naturezaOperacao: function () {
      return value(xml.tagValue('natOp'))
    },

    tipoOperacao: function () {
      return value(xml.tagValue('tpNF'))
    },

    operacao: function () {
      var tipo = {
        '0': 'entrada',
        '1': 'saída'
      }
      return value(tipo[this.tipoOperacao()])
    },

    nome: function () {
      return value(xml.tagValue('xnome'))
    },

    fantasia: function () {
      return value(xml.tagValue('xFant'))
    },

    emitente: function () {
      return value(xml.tagValue('emit'))
    },

    destinatario: function () {
      return value(xml.tagValue('dest'))
    },

    uf: function () {
      return value(xml.tagValue('uf'))
    },

    cep: function () {
      return value(xml.tagValue('CEP'))
    },

    endereco: function () {
      return value(xml.tagValue(['enderEmit', 'enderDest']))
    },

    logradouro: function () {
      return value(xml.tagValue(['xLgr', 'xEnder']))
    },

    numero: function () {
      return value(xml.tagValue('nro'))
    },

    bairro: function () {
      return value(xml.tagValue('xBairro'))
    },

    complemento: function () {
      return value(xml.tagValue('xCpl'))
    },

    municipio: function () {
      return value(xml.tagValue('xMun'))
    },

    codigoMunicipio: function () {
      return value(xml.tagValue('cMun'))
    },

    pais: function () {
      return value(xml.tagValue('xPais'))
    },

    codigoPais: function () {
      return value(xml.tagValue('cPais'))
    },

    telefone: function () {
      return value(xml.tagValue('fone'))
    },

    cnpj: function () {
      return value(xml.tagValue('CNPJ'))
    },

    email: function () {
      return value(xml.tagValue('email'))
    },

    cpf: function () {
      return value(xml.tagValue('CPF'))
    },

    inscricaoNacional: function () {
      return value(this.cnpj() || this.cpf())
    },

    inscricaoMunicipal: function () {
      return value(xml.tagValue('IM'))
    },

    inscricaoEstadual: function () {
      return value(xml.tagValue('IE'))
    },

    inscricaoEstadualST: function () {
      return value(xml.tagValue('IEST'))
    },

    codigoRegimeTributario: function () {
      return value(xml.tagValue('CRT'))
    },

    informacoesProtocolo: function () {
      return value(xml.tagValue('infProt'))
    },

    informacoesNFe: function () {
      return value(xml.tagValue('infNFe'))
    },

    identificacaoNFe: function () {
      return value(xml.tagValue('ide'))
    },

    informacoesComplementares: function () {
      return value(xml.tagValue('infCpl'))
    },

    informacoesFisco: function () {
      return value(xml.tagValue('infAdFisco'))
    },

    nrObservacoes: function () {
      return xml.tagGroup('obsCont').length
    },

    observacao: function (nr) {
      nr = parseInt(nr, 10) - 1
      return value(xmlModel(xml.tagGroup('obsCont')[nr]))
    },

    texto: function () {
      return value(xml.tagValue('xTexto'))
    },

    campoObservacao: function () {
      return value(xml.tagValue('obsCont', 'xCampo'))
    },

    serie: function () {
      return value(xml.tagValue('serie'))
    },

    modelo: function () {
      return value(xml.tagValue('mod'))
    },

    nrItens: function () {
      return xml.tagGroup('det').length
    },

    item: function (nr) {
      nr = parseInt(nr, 10) - 1
      return value(xmlModel(xml.tagGroup('det')[nr]))
    },

    codigo: function () {
      return value(xml.tagValue('cProd'))
    },

    descricao: function () {
      return value(xml.tagValue('xProd'))
    },

    informacoesProduto: function () {
      return value(xml.tagValue('infAdProd'))
    },

    ean: function () {
      return value(xml.tagValue('cEAN'))
    },

    ncm: function () {
      return value(xml.tagValue('NCM'))
    },

    codigoBeneficioFiscal: function () {
      return value(xml.tagValue('cBenef'))
    },

    numeroFCI: function () {
      return value(xml.tagValue('nFCI'))
    },

    cfop: function () {
      return value(xml.tagValue('CFOP'))
    },

    unidadeComercial: function () {
      return value(xml.tagValue('uCom'))
    },

    valorUnitario: function () {
      return value(xml.tagValue('vUnCom'))
    },

    valorAliquota: function () {
      return value(xml.tagValue('vAliqProd'))
    },

    valorFCP: function () {
      return value(xml.tagValue('vFCP'))
    },

    valorFCPST: function () {
      return value(xml.tagValue('vFCPST'))
    },

    valorFCPSTRetido: function () {
      return value(xml.tagValue('vFCPSTRet'))
    },

    porcentagemFCP: function () {
      return value(xml.tagValue('pFCP'))
    },

    porcentagemFCPST: function () {
      return value(xml.tagValue('pFCPST'))
    },

    porcentagemFCPSTRetido: function () {
      return value(xml.tagValue('pFCPSTRet'))
    },

    baseCalculoFCP: function () {
      return value(xml.tagValue('vBCFCP'))
    },

    baseCalculoFCPST: function () {
      return value(xml.tagValue('vBCFCPST'))
    },

    baseCalculoFCPSTRetido: function () {
      return value(xml.tagValue('vBCFCPSTRet'))
    },

    porcentagemCOFINS: function () {
      return value(xml.tagValue('pCOFINS'))
    },

    porcentagemIPI: function () {
      return value(xml.tagValue('pIPI'))
    },

    porcentagemPIS: function () {
      return value(xml.tagValue('pPIS'))
    },

    porcetagemIcmsST: function () {
      return value(xml.tagValue('pICMSST'))
    },

    porcetagemIcms: function () {
      return value(xml.tagValue('pICMS'))
    },

    valorProdutos: function () {
      return value(xml.tagValue('vProd'))
    },

    eanTributavel: function () {
      return value(xml.tagValue('cEANTrib'))
    },

    unidadeTributavel: function () {
      return value(xml.tagValue('uTrib'))
    },

    quantidadeTributavel: function () {
      return value(xml.tagValue('qTrib'))
    },

    quantidadeComercial: function () {
      return value(xml.tagValue('qCom'))
    },

    valorUnitarioTributavel: function () {
      return value(xml.tagValue('vUnTrib'))
    },

    valorFrete: function () {
      return value(xml.tagValue('vFrete'))
    },

    valorSeguro: function () {
      return value(xml.tagValue('vSeg'))
    },

    valorDesconto: function () {
      return value(xml.tagValue('vDesc'))
    },

    valorOutrasDespesas: function () {
      return value(xml.tagValue('vOutro'))
    },

    codigoANP: function () {
      return value(xml.tagValue('cProdANP'))
    },

    indicadorTotal: function () {
      return value(xml.tagValue('indTot'))
    },

    ipi: function () {
      return value(xml.tagValue('IPI'))
    },

    pis: function () {
      return value(xml.tagValue('PIS'))
    },

    cofins: function () {
      return value(xml.tagValue('COFINS'))
    },

    csosn: function () {
      return value(xml.tagValue('CSOSN'))
    },

    origem: function () {
      return value(xml.tagValue('orig'))
    },

    cst: function () {
      return value(xml.tagValue('CST'))
    },

    cest: function () {
      return value(xml.tagValue('CEST'))
    },

    porcentagemMVAST: function () {
      return value(xml.tagValue('pMVAST'))
    },

    modalidadeBCST: function () {
      return value(xml.tagValue('modBCST'))
    },

    transporte: function () {
      return value(xml.tagValue('transp'))
    },

    modalidadeFrete: function () {
      return value(xml.tagValue('modFrete'))
    },

    modalidadeFreteTexto: function () {
      var modalidades = {
        0: 'EMITENTE',
        1: 'DESTINATARIO',
        2: 'TERCEIROS',
        9: 'SEM FRETE'
      }
      return modalidades[this.modalidadeFrete()]
    },

    transportador: function () {
      return value(xml.tagValue('transporta'))
    },

    veiculo: function () {
      return value(xml.tagValue('veicTransp'))
    },

    antt: function () {
      return value(xml.tagValue('RNTC'))
    },

    placa: function () {
      return value(xml.tagValue('placa'))
    },

    volume: function () {
      return value(xml.tagValue('vol'))
    },

    quantidadeVolumes: function () {
      return value(xml.tagValue(['qVol']))
    },

    especie: function () {
      return value(xml.tagValue('esp'))
    },

    marca: function () {
      return value(xml.tagValue('marca'))
    },

    numeracao: function () {
      return value(xml.tagValue('nVol'))
    },

    pesoLiquido: function () {
      return value(xml.tagValue('pesoL'))
    },

    pesoBruto: function () {
      return value(xml.tagValue('pesoB'))
    },

    imposto: function () {
      return value(xml.tagValue('imposto'))
    },

    valorTotalTributos: function () {
      return value(xml.tagValue('vTotTrib'))
    },

    totalIcmsNota: function () {
      return value(xml.tagValue('ICMSTot'))
    },

    total: function () {
      return value(xml.tagValue('total'))
    },

    icms: function () {
      return value(xml.tagValue('ICMS'))
    },

    baseCalculo: function () {
      return value(xml.tagValue('vBC'))
    },

    baseCalculoIcms: function () {
      return value(xml.tagValue('vBC'))
    },

    valorIcms: function () {
      return value(xml.tagValue('vICMS'))
    },

    valorIcmsDesonerado: function () {
      return value(xml.tagValue('vICMSDeson'))
    },

    baseCalculoIcmsST: function () {
      return value(xml.tagValue(['vBCST']))
    },

    baseCalculoIcmsSTRetido: function () {
      return value(xml.tagValue(['vBCSTRet']))
    },

    valorIcmsST: function () {
      return value(xml.tagValue(['vST', 'vICMSST']))
    },

    valorIcmsSTRetido: function () {
      return value(xml.tagValue(['vICMSSTRet']))
    },

    valorII: function () {
      return value(xml.tagValue('vII'))
    },

    valorIPI: function () {
      return value(xml.tagValue('vIPI'))
    },

    valorPIS: function () {
      return value(xml.tagValue('vPIS'))
    },

    valorCOFINS: function () {
      return value(xml.tagValue('vCOFINS'))
    },

    valorNota: function () {
      return value(xml.tagValue('vNF'))
    },

    servico: function () {
      return value(xml.tagValue('ISSQNtot'))
    },

    valorTotalISS: function () {
      return value(xml.tagValue('vISS'))
    },

    valorTotalServicoNaoIncidente: function () {
      return value(xml.tagValue('vServ'))
    },

    cobranca: function () {
      return value(xml.tagValue('cobr'))
    },

    nrDuplicatas: function () {
      return (xml.tagGroup('dup').length)
    },

    duplicata: function (nr) {
      nr = parseInt(nr, 10) - 1
      return value(xmlModel(xml.tagGroup('dup')[nr]))
    },

    numeroDuplicata: function () {
      return value(xml.tagValue('nDup'))
    },

    vencimentoDuplicata: function () {
      return (xml.tagValue(['dVenc']))
    },

    valorDuplicata: function () {
      return value(xml.tagValue('vDup'))
    }

    /*

   : function()   {
      return xml.tagValue('marca');
    },

   : function()   {
      return xml.tagValue('marca');
    },

   : function()   {
      return xml.tagValue('marca');
    },

   : function()   {
      return xml.tagValue('marca');
    },
  */

  }
}
