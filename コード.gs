function doGet() {
  var template = 'index';
  return HtmlService.createTemplateFromFile(template).evaluate();
}

function saveTextToSpreadsheet(text) {
  var ss = SpreadsheetApp.openById('1Dd9cPIOahrNhyasRgqrHglwy931RviwnNu495hpQ3wk'); // スプレッドシートのIDを設定
  var sheet = ss.getSheetByName('シート1'); // 対象のシート名を設定
  sheet.appendRow([text,new Date()]);
}
