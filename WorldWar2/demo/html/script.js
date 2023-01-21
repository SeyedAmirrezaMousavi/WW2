var svgMapEuroCurrency = new svgMap({
    targetElementID: 'svgMapEuroCurrency',
    data: {
      data: {
        war: {}
      },
      applyData: 'war',
      values: {
        FR : {Mottahed : 0 , Mottafegh: 1 , color: '#ff7f50', near_k: ['GB', 'CN', 'TH', 'ET', 'IT','BE','ES','PT','LR', 'IQ', 'TR', 'BR', 'NL', 'CH'], aluminium : 169, tungsten: 5, oil:0, steel: 341, chromium: 24},
        GB : {Mottahed : 0 , Mottafegh: 1 , color: '#ff7f50', near_k: ['CA','GT','MX','NL','BR','VE','LR','IT','EG','ET','BE','PT','ZA','YE','SA','IQ','IR','AF','NP','BT','TA','CN','TH','IE'], aluminium : 26, tungsten: 14, oil:4, steel: 127, chromium: 28},
        
        
        
        
        RU : {Mottahed : 0 , Mottafegh: 0 , color: '#fdcb6e', near_k : ['JP','MAN','MN','CN','GB','AF','IR','TR','RO','PL','LV','EE','FI'], aluminium : 62, tungsten: 34, oil:103, steel: 245, chromium: 190},
        
        
        
        US : {Mottahed : 0 , Mottafegh: 1 , color: '#ff7f50', near_k: ['CA','PA','MX'], aluminium : 38, tungsten: 30, oil:170, steel: 32, chromium: -6},
        PL : {Mottahed : 0 , Mottafegh: 1 , color: '#ff7f50', near_k: ['RU', 'DE' , 'LT' ,'LV', 'RO' , 'CZ'], aluminium : 5, tungsten: 0, oil:4, steel: 32, chromium: 0},
        ZA : {Mottahed : 0 , Mottafegh: 1 , color: '#ff7f50', near_k: ['GB', 'PT'], aluminium : 0, tungsten: 0, oil:0, steel: 2, chromium: 90},
        AU : {Mottahed : 0 , Mottafegh: 1 , color: '#ff7f50', near_k : ['NL'], aluminium : 0, tungsten: 19, oil:0, steel: 20, chromium: 3},
        CA : {Mottahed : 0 , Mottafegh: 1 , color: '#ff7f50', near_k: ['GB','US'], aluminium : 16, tungsten: 0, oil:1, steel: 4, chromium: 0},
        NZ : {Mottahed : 0 , Mottafegh: 1 , color: '#ff7f50', near_k: [], aluminium : 0, tungsten: 3, oil:0, steel: -2, chromium: 0},
        CN : {Mottahed : 0 , Mottafegh: 1 , color: '#ff7f50', near_k: ['MAN','MN','TA','FR','GB','RU','AF'], aluminium : 0, tungsten: 2, oil:0, steel: 4, chromium: 0},


        DE : {Mottahed : 1 , Mottafegh: 0 , color: '#2ed573', near_k: ['FR','NL', 'CH', 'AT', 'CZ', 'PL', 'LT'], aluminium : 94, tungsten: 11, oil:3, steel: 265, chromium: 2},
        JP : {Mottahed : 1 , Mottafegh: 0 , color: '#2ed573', near_k : ['MAN','RU'], aluminium : -1, tungsten: 18, oil:19, steel: 14, chromium: 67},


        FI : {Mottahed : 0 , Mottafegh: 0 , color: '#4834d4', aluminium : -1, tungsten: 0, oil:0, steel: 2, chromium: 1},


        NL : {near_k : ['GB','DE','BE'], aluminium : 14, tungsten: 0, oil:8, steel: 1, chromium: 0},
        MAN : {near_k: ['JP','RU','CN','MN'], aluminium : 0, tungsten: 0, oil:0, steel: 0, chromium: 0},
        MN : {near_k: ['MAN','RU','CN'], aluminium : 0, tungsten: 0, oil:0, steel: -1, chromium: 2},
        TH : {near_k: ['GB','FR'], aluminium : 0, tungsten: 1, oil:0, steel: -2, chromium: 0},
        TA : {near_k: ['CN','BT','NP','GB'], aluminium : 169, tungsten: 5, oil:0, steel: 341, chromium: 24},
        BT : {near_k: ['GB','TA']},
        NP : {near_k: ['GB','TA']},
        AF : {near_k: ['GB','CN','RU','IR']},
        IR: {near_k: ['GB','AF','RU','TR','IQ']},
        IQ: {near_k: ['GB','IR','TR','FR','SA']},
        SA: {near_k: ['GB','YE','IQ']},
        YE: {near_k: ['GB','SA']},
        TR: {near_k: ['FR','IR','IQ','BG','GR']},
        EG: {near_k: ['GB','IT']},
        ET: {near_k: ['GB','FR','IT']},
        ZA: {near_k: ['GB','PT']},
        LR: {near_k: ['GB','FR']},
        IT: {near_k: ['GB', 'EG', 'FR', 'ET', 'CH', 'AT', 'Yu']},
        PT: {near_k: ['GB', 'ZA','BE', 'FR', 'ES']},
        BE: {near_k: ['GB', 'PT', 'FR', 'NL']},
        ES: {near_k: ['FR', 'PT']},
        CL: {near_k: ['AG','BO','PE']},
        AR: {near_k: ['CL', 'BO', 'PY', 'BR', 'UY']},
        UY: {near_k: ['BR','AR']},
        BR: {near_k: ['GB','NL','FR','UY', 'PY', 'AR', 'BO', 'PE', 'CO', 'VE']},
        PY: {near_k: ['BO', 'BR', 'AR']},
        BO: {near_k: ['PE', 'BR', 'PY','AR','CL']},
        PE: {near_k: ['CL', 'BO', 'BR', 'EC', 'CO']},
        EC: {near_k: ['PE', 'CO']},
        CO: {near_k: ['VE', 'PA', 'BR', 'PE', 'EC']},
        VE: {near_k: ['GB', 'BR', 'CO']},
        MX: {near_k: ['GB', 'GT', 'US']},
        GR: {near_k: ['TR', 'BG', 'YU', 'AL']},
        BG: {near_k: ['RO', 'YU','TR','GR']},
        AL: {near_k: ['GR', 'YU']},
        RO: {near_k: ['RU', 'CZ','PL', 'HU', 'YU']},
        YU: {near_k: ['AL', 'GR', 'BG', 'RO', 'HU', 'AT', 'IT']},
        HU: {near_k: ['RO', 'YU', 'CZ', 'AT']},
        CZ: {near_k: ['DE', 'PL', 'RO', 'HU', 'AT']},
        AT: {near_k: ['YU', 'HU', 'CZ', 'DE', 'IT', 'CH']},
        CH: {near_k: ['FR','IT','AT','DE']},
        PL: {near_k: ['RO', 'CZ', 'DE','LT', 'RU']},
        IE: {near_k: ['GB']},
        NO: {near_k: ['SE', 'FI']},
        SE: {near_k: ['NO', 'FI']},
        FI: {near_k: ['NO', 'SE', 'RU']},
        LT: {near_k: ['DE','PL', 'RU', 'LV']},
        LV: {near_k: ['LT', 'EE' , 'RU', 'PL']},
        EE: {near_k: ['RU', 'LV']},
        DK: {near_k: []},
        CU: {near_k: []},
        HT: {near_k: []},
        DO: {near_k: []},
        GT: {near_k: ['GB','MX','HN','SV']},
        SV: {near_k: ['GT', 'HN']},
        HN: {near_k: ['GT' , 'SV' , 'NI']},
        NI: {near_k: ['HN' , 'CR']},
        CR: {near_k: ['NI' , 'PA']},
        PA: {near_k: ['CR' , 'CO']}




      }
    },
    colorMin: '#ced6e0',
    colorMax: '#ced6e0',
    colorNoData: '#ced6e0',
    thresholdMax: 1,
    thresholdMin: 0,
    initialZoom: 3,
    initialPan: {
      x: 420,
      y: 50
    },
    mouseWheelZoomEnabled: true,
    mouseWheelZoomWithKey: true,
    onGetTooltip: function (tooltipDiv, countryID, countryValues) {
      // Geting the list of countries
      var countries = svgMapEuroCurrency.countries;

      // Create tooltip content element
      var tooltipContentElement = document.createElement('div');
      tooltipContentElement.style.padding = '16px 24px';

      // Fill content
      var innerHTML =
        '<div style="margin: 0 0 10px; text-align: center"><img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/{0}.svg" alt="" style="height: 40px; width: auto; border: 2px solid #eee"></div>'.replace(
          '{0}',
          countryID.toLowerCase()
        );

      innerHTML +=
        '<div style="min-width: 180px; font-weight: bold; margin: 0 0 15px; text-align: center">' +
        countries[countryID] +
        '</div>';

      if (countryValues && countryValues.Mottahed == 0) {
        innerHTML +=
          '<div style="margin-bottom: 8px"><span style="color: #f03; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✘</span>is Allie</div>';
      }
      else if (countryValues && countryValues.Mottahed == 1) {
        innerHTML +=
          '<div style="margin-bottom: 8px"><span style="color: #6d0; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✔</span>Is Axis</div>';
      } else {
        innerHTML +=
          '<div style="margin-bottom: 8px; color: #aaa"><span style="color: #f03; display: inline-block; margin-right: 4px; width: 20px; text-align: center">✘</span>Is neutral</div>';
      }

      // Return element with custom content
      tooltipContentElement.innerHTML = innerHTML;
      return tooltipContentElement;
    }
  });
  
  function win_war(winner, looser){
    if(looser == 'DE'){
      window.location.replace('../../../../Games/index.html');
    }
    // svgMapEuroCurrency.Prototype.mapPaths.winner.d +=  ' '
    PT = Object.getPrototypeOf(svgMapEuroCurrency)
    Object.getPrototypeOf(svgMapEuroCurrency).mapPaths[winner].d += ' ' + Object.getPrototypeOf(svgMapEuroCurrency).mapPaths[looser].d 
    Object.getPrototypeOf(svgMapEuroCurrency).mapPaths[looser].d = ''

    Object.getPrototypeOf(svgMapEuroCurrency).hoi[winner].aluminium += Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].aluminium
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[winner].chromium += Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].chromium
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[winner].steel += Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].steel
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[winner].oil += Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].oil
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[winner].tungsten += Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].tungsten

    Object.getPrototypeOf(svgMapEuroCurrency).hoi[winner] = Object.getPrototypeOf(svgMapEuroCurrency).hoi[winner] + 2400000
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[winner].manpower += Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].manpower
    
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].tungsten = 0
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].oil = 0
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].steel = 0
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].chromium = 0
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].aluminium = 0
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[looser].manpower = 0



    localStorage.setItem("paths",JSON.stringify(Object.getPrototypeOf(svgMapEuroCurrency).mapPaths)) 
    localStorage.setItem('hoi',JSON.stringify(Object.getPrototypeOf(svgMapEuroCurrency).hoi))
    location.reload()
  }
  function improve_relation(country){
    if(Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].pp >= 10){
    Object.getPrototypeOf(svgMapEuroCurrency).hoi[country].about_them_opinion = Object.getPrototypeOf(svgMapEuroCurrency).hoi[country].about_them_opinion + 15
    Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].pp = Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].pp - 10
    localStorage.setItem('hoi',JSON.stringify(Object.getPrototypeOf(svgMapEuroCurrency).hoi))
    location.reload()
  }}
  
  function trade(toTrade, country, much){
    (Object.getPrototypeOf(svgMapEuroCurrency).hoi[country])[toTrade] -= much
    (Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'])[toTrade] += much
    (Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE']).gold -= much * 100000
    localStorage.setItem('hoi',JSON.stringify(Object.getPrototypeOf(svgMapEuroCurrency).hoi))
    location.reload()
  }

  function makeFactory(){
    if ((Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE).gold >= 350000 && Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.aluminium >= 1 && Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.oil >= 1 && Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.seel >= 1 && Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.tungsten >= 1 && Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.chromium >= 1)
    (Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE)['cf'] = (Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE)['cf'] + 1
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.gold -=  350000
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.aluminium = Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.aluminium - 1
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.tungsten = Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.tungsten - 1
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.oil = Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.oil - 1
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.steel = Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.steel - 1
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.chromium = Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.chromium - 1
    localStorage.setItem('hoi',JSON.stringify(Object.getPrototypeOf(svgMapEuroCurrency).hoi))
    location.reload()
  }
  function product(){}

  function deploy(){
    if(Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.gold >= 100000){
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.manpower = Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.manpower + 100000
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.gold = Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.gold - 100000
    localStorage.setItem('hoi',JSON.stringify(Object.getPrototypeOf(svgMapEuroCurrency).hoi))
    location.reload()
  }}

  document.getElementById('manpower_h2').innerHTML = Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].manpower
  document.getElementById('coin').innerHTML = Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].gold
  document.getElementById('pp').innerHTML = Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].pp
  document.getElementById('factory_h2').innerHTML = Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].cf






  let key = ''
  let countries = ''
  let keys = Object.keys(Object.getPrototypeOf(svgMapEuroCurrency)['hoi'])
  let op = ''
  
  for(let i = 0; i != keys.length; i++ ){
    key = keys[i]
    op = Object.getPrototypeOf(svgMapEuroCurrency).hoi[key]
    // console.log(op)
    op = op['about_them_opinion']
    op = String(op)
    if(key == 'DE'){
      continue;
    }
    countries += `<li class = "country_dep" onclick='improve_relation("${key}")'>` 
    countries += '<h2>' + Object.getPrototypeOf(svgMapEuroCurrency).countries[key]+'   ' + op+'</h2>'
    countries += '</li>'
  }
  document.getElementById('diplomacy_ul').innerHTML = countries

  let country_code = ''
  let manpowers = ''
  let country_codes = Object.keys(Object.getPrototypeOf(svgMapEuroCurrency)['hoi'])
  let mn = ''
  
  for(let i = 0; i != country_codes.length; i++ ){
    country_code = country_codes[i]
    if(country_code == 'DE'){
      continue;
    }
    mn = Object.getPrototypeOf(svgMapEuroCurrency).hoi[country_code]
    // console.log(mn)
    mn = mn.manpower
    if(mn == 0){
      continue;
    }
    mn = String(mn)
    manpowers += `<li class = "country_dep" onclick='war("DE","${country_code}")'>` 
    manpowers += '<h2>' + Object.getPrototypeOf(svgMapEuroCurrency).countries[country_code]+'   ' + mn+'</h2>'
    manpowers += '</li>'
  }
  document.getElementById('manpower_ul').innerHTML = manpowers


  let diplomacy_clicked = 0;
  let trade_clicked = 0;
  let construction_clicked = 0;
  let production_clicked = 0;
  let deploy_clicked = 0;
  let manpower_clicked = 0;
  function diplomacy_btn(){
    diplomacy_clicked += 1
    if (diplomacy_clicked % 2 == 0){
        document.getElementById('diplomacy_shower').style.display = 'none'
    }
    else{
        document.getElementById('diplomacy_shower').style.display = 'block'
    }
  }
  function trade_btn(){
    trade_clicked += 1
    if (trade_clicked % 2 == 0){
        document.getElementById('trade_shower').style.display = 'none'
    }
    else{
        document.getElementById('trade_shower').style.display = 'block'
    }
  }

  function manpower_btn(){
    manpower_clicked += 1
    if (manpower_clicked % 2 == 0){
        document.getElementById('manpower_shower').style.display = 'none'
    }
    else{
        document.getElementById('manpower_shower').style.display = 'block'
    }
  }



  function war(fCountry, sCountry){
    if(Object.getPrototypeOf(svgMapEuroCurrency).hoi[fCountry].manpower >= Object.getPrototypeOf(svgMapEuroCurrency).hoi[sCountry].manpower){
      win_war(fCountry, sCountry)
    }
    else{
      win_war(sCountry, fCountry)
    }
  }

  document.getElementById('al').innerHTML = 'aluminium    ' + String(Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].aluminium)
  document.getElementById('tu').innerHTML = 'tungsten   ' + String(Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].tungsten)
  document.getElementById('oi').innerHTML = 'oil    ' + String(Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].oil)
  document.getElementById('st').innerHTML = 'steel    ' + String(Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].steel)
  document.getElementById('ch').innerHTML = 'chromium   ' + String(Object.getPrototypeOf(svgMapEuroCurrency).hoi['DE'].chromium)

  function trading(type){
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE[type] += 1
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.gold -= 100000
    localStorage.setItem('hoi',JSON.stringify(Object.getPrototypeOf(svgMapEuroCurrency).hoi))
    location.reload()
  }
  function minute_pass(){
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.pp +=  100
    Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.gold +=  (Object.getPrototypeOf(svgMapEuroCurrency).hoi.DE.cf * 10000)
    let countries = Object.keys(Object.getPrototypeOf(svgMapEuroCurrency).hoi)
    for(let i = 0; i != countries.length; i++){
      if(countries[i] == 'DE'){
        continue;
      }
      Object.getPrototypeOf(svgMapEuroCurrency).hoi[countries[i]].about_them_opinion -= 5
      if(Object.getPrototypeOf(svgMapEuroCurrency).hoi[countries[i]].about_them_opinion <= -50){
        war('DE', countries[i])
      }
    }
    
    localStorage.setItem('hoi',JSON.stringify(Object.getPrototypeOf(svgMapEuroCurrency).hoi))
    setTimeout(minute_pass, 300000)
    
  }
  minute_pass()







