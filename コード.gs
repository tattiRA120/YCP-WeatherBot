//UNIXをJSTに変換
function unixTime2jst(intTime, select){
  var d = new Date( intTime * 1000 );
  var month = d.getMonth() + 1;
  var day  = d.getDate();
  var hour = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
  var min  = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
  var sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
  
  if(select == "hms") return (hour + ':' + min + ':' + sec );
  if(select == "mdh") return (month + "/" + day + " " + hour);
};


// 8・12時の天気情報送信
function weatherInfo() {
  var url = "https://api.darksky.net/forecast/key/緯度,経度?lang=ja&units=si"
  var response = UrlFetchApp.fetch(url);

  var json = JSON.parse(response.getContentText());
  var text = "";
  var dailyData = json["daily"]["data"][0];
  var hourlyData = json["hourly"]["data"][0];
  var icon;
  
  text += "*【" + unixTime2jst(hourlyData.time, "mdh") + ":00 の 天気予報】*\n\n";
  text += "・今日の天気: " + dailyData.summary + "\n";
  text += "・日没時刻: " + unixTime2jst(dailyData.sunsetTime, "hms") + "\n\n";
  
  for(var i = 0; i < 12; i += 3){
    hourlyData = json["hourly"]["data"][i];
    if(hourlyData.summary == "晴れ"){
      icon = ":sunny:"
    }else if(hourlyData.summary == "曇り"){
      icon = ":cloud:"
    }else if(hourlyData.summary == "薄曇り"){
      icon = ":partly_sunny:"
    }else if(hourlyData.summary == "曇"){
      icon = ":cloud:"
    }else if(hourlyData.summary == "雨"){
      icon = ":umbrella:"
    }else{
      icon = ""
    };
    text += "     　　     ＊" + unixTime2jst(hourlyData.time, "mdh") + ":00＊\n";
    text += "天気: " + hourlyData.summary + icon + "\n";
    text += "気温: " + Math.round(hourlyData.temperature * 10) / 10 + "℃\n";
    text += "降水確率: " + Math.round(hourlyData.precipProbability) + "%\n";
    text += "降水量: " + Math.round(hourlyData.precipIntensity * 10) / 10 + "mm/h\n";
    text += "風速: " + hourlyData.windSpeed + "m/s\n";
    text += "-----------------------------------------\n";
  }

  var data={
    "text": text,
  };
  
  var options =
  {
  "method" : "POST",
  'contentType': 'application/json',
  'payload' : JSON.stringify(data),
  };
  // SlackのIncoming WebhookのURLを取得して入力
  UrlFetchApp.fetch("https://hooks.slack.com/services/********************", options);
}


//15時の天気情報送信
function weatherInfo_afternoon() {
  var url = "https://api.darksky.net/forecast/key/緯度,経度?lang=ja&units=si"
  var response = UrlFetchApp.fetch(url);

  var json = JSON.parse(response.getContentText());
  var text = "";
  var dailyData = json["daily"]["data"][0];
  var hourlyData = json["hourly"]["data"][0];
  var icon;
  
  text += "*【" + unixTime2jst(hourlyData.time, "mdh") + ":00 の 天気予報】*\n\n";
  text += "・今日の天気: " + dailyData.summary + "\n";
  text += "・日没時刻: " + unixTime2jst(dailyData.sunsetTime, "hms") + "\n\n";
  
  for(var i = 0; i < 9; i += 3){
    hourlyData = json["hourly"]["data"][i];
    if(hourlyData.summary == "晴れ"){
      icon = ":sunny:"
    }else if(hourlyData.summary == "曇り"){
      icon = ":cloud:"
    }else if(hourlyData.summary == "薄曇り"){
      icon = ":partly_sunny:"
    }else if(hourlyData.summary == "曇"){
      icon = ":cloud:"
    }else if(hourlyData.summary == "雨"){
      icon = ":umbrella:"
    }else{
      icon = ""
    };
    text += "     　　     ＊" + unixTime2jst(hourlyData.time, "mdh") + ":00＊\n";
    text += "天気: " + hourlyData.summary + icon + "\n";
    text += "気温: " + Math.round(hourlyData.temperature * 10) / 10 + "℃\n";
    text += "降水確率: " + Math.round(hourlyData.precipProbability) + "%\n";
    text += "降水量: " + Math.round(hourlyData.precipIntensity * 10) / 10 + "mm/h\n";
    text += "風速: " + hourlyData.windSpeed + "m/s\n";
    text += "-----------------------------------------\n";
  }
  
  hourlyData = json["hourly"]["data"][15];
  text += "     　　     ＊" + unixTime2jst(hourlyData.time, "mdh") + ":00＊\n";
  text += "天気: " + hourlyData.summary + "\n";
  text += "気温: " + Math.round(hourlyData.temperature * 10) / 10 + "℃\n";
  text += "降水確率: " + Math.round(hourlyData.precipProbability) + "%\n";
  text += "降水量: " + Math.round(hourlyData.precipIntensity * 10) / 10 + "mm/h\n";
  text += "風速: " + hourlyData.windSpeed + "m/s\n";
  text += "-----------------------------------------\n";

  var data={
    "text": text,
  };
  
  var options =
  {
  "method" : "POST",
  'contentType': 'application/json',
  'payload' : JSON.stringify(data),
  };
  // SlackのIncoming WebhookのURLを取得して入力
  UrlFetchApp.fetch("https://hooks.slack.com/services/********************", options);
}


//18時の天気情報送信
function weatherInfo_night() {
  var url = "https://api.darksky.net/forecast/key/緯度,経度?lang=ja&units=si"
  var response = UrlFetchApp.fetch(url);

  var json = JSON.parse(response.getContentText());
  var text = "";
  var dailyData = json["daily"]["data"][0];
  var hourlyData = json["hourly"]["data"][0];
  var icon;
  
  text += "*【" + unixTime2jst(hourlyData.time, "mdh") + ":00 の 天気予報】*\n\n";
  text += "・今日の天気: " + dailyData.summary + "\n";
  text += "・日没時刻: " + unixTime2jst(dailyData.sunsetTime, "hms") + "\n\n";
  
  for(var i = 0; i < 6; i += 3){
    hourlyData = json["hourly"]["data"][i];
    if(hourlyData.summary == "晴れ"){
      icon = ":sunny:"
    }else if(hourlyData.summary == "曇り"){
      icon = ":cloud:"
    }else if(hourlyData.summary == "薄曇り"){
      icon = ":partly_sunny:"
    }else if(hourlyData.summary == "曇"){
      icon = ":cloud:"
    }else if(hourlyData.summary == "雨"){
      icon = ":umbrella:"
    }else{
      icon = ""
    };
    text += "     　　     ＊" + unixTime2jst(hourlyData.time, "mdh") + ":00＊\n";
    text += "天気: " + hourlyData.summary + icon + "\n";
    text += "気温: " + Math.round(hourlyData.temperature * 10) / 10 + "℃\n";
    text += "降水確率: " + Math.round(hourlyData.precipProbability) + "%\n";
    text += "降水量: " + Math.round(hourlyData.precipIntensity * 10) / 10 + "mm/h\n";
    text += "風速: " + hourlyData.windSpeed + "m/s\n";
    text += "-----------------------------------------\n";
  }
  
  for(var i = 15; i < 21; i += 3){
    hourlyData = json["hourly"]["data"][i];
    text += "     　　     ＊" + unixTime2jst(hourlyData.time, "mdh") + ":00＊\n";
    text += "天気: " + hourlyData.summary + "\n";
    text += "気温: " + Math.round(hourlyData.temperature * 10) / 10 + "℃\n";
    text += "降水確率: " + Math.round(hourlyData.precipProbability) + "%\n";
    text += "降水量: " + Math.round(hourlyData.precipIntensity * 10) / 10 + "mm/h\n";
    text += "風速: " + hourlyData.windSpeed + "m/s\n";
    text += "-----------------------------------------\n";
  }

  var data={
    "text": text,
  };
  
  var options =
  {
  "method" : "POST",
  'contentType': 'application/json',
  'payload' : JSON.stringify(data),
  };
  // SlackのIncoming WebhookのURLを取得して入力
  UrlFetchApp.fetch("https://hooks.slack.com/services/********************", options);
}


// トリガーを平日か判定する処理
function isWeekday(){
  var today = new Date();
  // 土日か判定
  var weekInt = today.getDay();
  if(weekInt <= 0 || 6 <= weekInt){
    return true;
  }
  // 祝日か判定
  var calendarId = "ja.japanese#holiday@group.v.calendar.google.com";
  var calendar = CalendarApp.getCalendarById(calendarId);
  var todayEvents = calendar.getEventsForDay(today);
  if(todayEvents.length > 0){
    return true;
  }
  return false;
}


// トリガー作成
function setTrigger_weatherInfo_morning() {
  // 朝9時実行トリガー
  if (isWeekday()) return;
  var setTime = new Date();
  setTime.setHours(9);
  setTime.setMinutes(00);
  ScriptApp.newTrigger('weatherInfo').timeBased().at(setTime).create();
}

function setTrigger_weatherInfo_daytime() {
  // 昼12時実行トリガー
  if (isWeekday()) return;
  var setTime = new Date();
  setTime.setHours(12);
  setTime.setMinutes(00);
  ScriptApp.newTrigger('weatherInfo').timeBased().at(setTime).create();
}

function setTrigger_weatherInfo_afternoon() {
  // 夕方15時トリガー
  if (isWeekday()) return;
  var setTime = new Date();
  setTime.setHours(15);
  setTime.setMinutes(00);
  ScriptApp.newTrigger('weatherInfo_afternoon').timeBased().at(setTime).create();
}

function setTrigger_weatherInfo_night() {
  // 夜18時トリガー
  if (isWeekday()) return;
  var setTime = new Date();
  setTime.setHours(18);
  setTime.setMinutes(00);
  ScriptApp.newTrigger('weatherInfo_night').timeBased().at(setTime).create();
}


// トリガー消去
function deleteTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  for(var i=0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() == "weatherInfo") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
    if (triggers[i].getHandlerFunction() == "weatherInfo_afternoon") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
    if (triggers[i].getHandlerFunction() == "weatherInfo_night") {
      ScriptApp.deleteTrigger(triggers[i]);
    };
  };
}