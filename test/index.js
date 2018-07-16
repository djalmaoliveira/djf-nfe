var NFe = require('../src')

function fixture () {
  return '<?xml version="1.0" encoding="UTF-8"?><nfeProc versao="2.00" xmlns="http://www.portalfiscal.inf.br/nfe"><NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe versao="2.00" Id="NFe31060243816719000108550000000010001234567890"><ide><cUF>31</cUF><cNF>00000002</cNF><natOp>VENDA MERC.ADQ.SUBST.TRIB.</natOp><indPag>0</indPag><mod>55</mod><serie>0</serie><nNF>100</nNF><dEmi>2011-07-13</dEmi><dSaiEnt>2011-07-13</dSaiEnt><tpNF>1</tpNF><cMunFG>5700200</cMunFG><tpImp>1</tpImp><tpEmis>1</tpEmis><cDV>0</cDV><tpAmb>2</tpAmb><finNFe>1</finNFe><procEmi>0</procEmi><verProc>4.5.0.0</verProc></ide><emit><CNPJ>11111111111111</CNPJ><xNome>Empresa LTDA</xNome><xFant>Super Empresa</xFant><enderEmit><xLgr>RUA SAO GERONIMO</xLgr><nro>888</nro><xBairro>CENTRO</xBairro><cMun>5700200</cMun><xMun>SAO PAULO</xMun><UF>SP</UF><CEP>12500090</CEP><cPais>1058</cPais><xPais>Brasil</xPais><fone>99999991</fone></enderEmit><IE>ISENTO</IE><CRT>3</CRT></emit><dest><CNPJ>99999999000191</CNPJ><xNome>NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL</xNome><enderDest><xLgr>AV. MEDEIROS</xLgr><nro>999</nro><xBairro>CENTRO</xBairro><cMun>5702501</cMun><xMun>SAO JOSE</xMun><UF>SP</UF><CEP>12556000</CEP><cPais>1058</cPais><xPais>Brasil</xPais><fone>99999992</fone></enderDest><IE/></dest><det nItem="1"><prod><cProd>3</cProd><cEAN>0000000000000</cEAN><xProd>BISCOITO VITAMINADO</xProd><NCM>87089100</NCM><CFOP>5405</CFOP><uCom>UND</uCom><qCom>1.0000</qCom><vUnCom>140.0000000000</vUnCom><vProd>140.00</vProd><cEANTrib>0000000000000</cEANTrib><uTrib>UND</uTrib><qTrib>1.0000</qTrib><vUnTrib>140.0000000000</vUnTrib><indTot>1</indTot><comb><cProdANP>620505001</cProdANP><UFCons>AL</UFCons></comb></prod><imposto><ICMS><ICMS10><orig>3</orig><CST>10</CST><modBC>0</modBC><vBC>14.63</vBC><pICMS>4.0000</pICMS><vICMS>0.59</vICMS><modBCST>4</modBCST><pMVAST>101.1100</pMVAST><vBCST>29.42</vBCST><pICMSST>18.0000</pICMSST><vICMSST>4.71</vICMSST></ICMS10></ICMS><IPI><cEnq>999</cEnq><IPITrib><CST>99</CST><vBC>140.00</vBC><pIPI>0.00</pIPI><vIPI>0.00</vIPI></IPITrib></IPI><PIS><PISAliq><CST>01</CST><vBC>140.00</vBC><pPIS>0.00</pPIS><vPIS>0.00</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>140.00</vBC><pCOFINS>0.00</pCOFINS><vCOFINS>0.00</vCOFINS></COFINSAliq></COFINS></imposto></det><det nItem="2"><prod><cProd>4</cProd><cEAN>0000000000010</cEAN><xProd>BISCOITO RECHEADO</xProd><NCM>34056700</NCM><CFOP>5405</CFOP><uCom>UND</uCom><qCom>1.0000</qCom><vUnCom>140.0000000000</vUnCom><vProd>140.00</vProd><cEANTrib>0000000000000</cEANTrib><uTrib>UND</uTrib><qTrib>1.0000</qTrib><vUnTrib>140.0000000000</vUnTrib><indTot>1</indTot></prod><imposto><ICMS><ICMS60><orig>0</orig><CST>60</CST><vBCSTRet>0.00</vBCSTRet><vICMSSTRet>0.00</vICMSSTRet></ICMS60></ICMS><IPI><cEnq>999</cEnq><IPITrib><CST>99</CST><vBC>140.00</vBC><pIPI>0.00</pIPI><vIPI>0.00</vIPI></IPITrib></IPI><PIS><PISAliq><CST>01</CST><vBC>140.00</vBC><pPIS>0.00</pPIS><vPIS>0.00</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>140.00</vBC><pCOFINS>0.00</pCOFINS><vCOFINS>0.00</vCOFINS></COFINSAliq></COFINS></imposto></det><total><ICMSTot><vBC>0.00</vBC><vICMS>0.00</vICMS><vBCST>0.00</vBCST><vST>0.00</vST><vProd>280.00</vProd><vFrete>0.00</vFrete><vSeg>0.00</vSeg><vDesc>0.00</vDesc><vII>0.00</vII><vIPI>0.00</vIPI><vPIS>0.00</vPIS><vCOFINS>0.00</vCOFINS><vOutro>0.00</vOutro><vNF>280.00</vNF></ICMSTot><ISSQNtot><vServ>100.00</vServ><vBC>100.00</vBC><vISS>2.00</vISS></ISSQNtot></total><transp><transporta><CNPJ>01234567000179</CNPJ><xNome>Transporte SA</xNome><IE>012345678</IE><xEnder>RUA DA TRANSPORTADORA</xEnder><xMun>SAO PAULO</xMun><UF>SP</UF></transporta><veicTransp><placa>ZZZ00001</placa><UF>PE</UF><RNTC>000000</RNTC></veicTransp><modFrete>0</modFrete><vol><qVol>1</qVol><esp>UNIDADE</esp><pesoL>22.001</pesoL><pesoB>22.000</pesoB><marca>DIVERSAS</marca><nVol>1,00</nVol></vol></transp><cobr><fat><nFat>00000002</nFat><vOrig>280.00</vOrig><vLiq>280.00</vLiq></fat><dup><nDup>59080/01</nDup><dVenc>2011-07-13</dVenc><vDup>280.00</vDup></dup></cobr><infAdic><infCpl>OBS:.</infCpl><infAdFisco>Imposto recolhido</infAdFisco><obsCont xCampo="ObsCont"><xTexto>*ICMS PAGO POR SUBST.TRIBUTARIA.</xTexto></obsCont><obsCont xCampo="ObsCont"><xTexto>*PROD. NAO INCIDEM PIS/COFINS CONF.LEI 10.147 DE 12/2000</xTexto></obsCont></infAdic></infNFe><Signature xmlns="http://www.w3.org/2000/09/xmldsig#"><SignedInfo><CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/><SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><Reference URI="#NFe31060243816719000108550000000010001234567890"><Transforms><Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/><Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/></Transforms><DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><DigestValue>/dTxB2va1fii8ON+vsq6Me2VPCA=</DigestValue></Reference></SignedInfo><SignatureValue>xxxxxxxxx</SignatureValue><KeyInfo><X509Data><X509Certificate>yyyyyyy</X509Certificate></X509Data></KeyInfo></Signature></NFe><protNFe versao="2.00"><infProt Id="ID0000000000000001"><tpAmb>2</tpAmb><verAplic>SVRS20000000000</verAplic><chNFe>31060243816719000108550000000010001234567890</chNFe><dhRecbto>2011-07-20T15:49:31</dhRecbto><nProt>000000000000001</nProt><digVal>uuuuuuuuuuuuu</digVal><cStat>100</cStat><xMotivo>Autorizado o uso da NF-e</xMotivo></infProt></protNFe></nfeProc>'
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
  test.equal(total.valorIcmsST(), '0.00')
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
