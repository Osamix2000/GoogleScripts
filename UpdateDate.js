function drawLastUpdateString(){
	var sheet = SpreadsheetApp.getActiveSheet();
	var cell = sheet.getRange('A1');
	var date = new Date();
	var ary = ['日','月','火','水','木','金','土'];
	var week_num = new Date().getDay();
	var week = '('+ary[week_num]+')';
	var string = "更新日：" + Utilities.formatDate(date,'Asia/Tokyo','yyyy年M月dd日');
	Logger.log(string+week);
	cell.setValue(string+week);
  }