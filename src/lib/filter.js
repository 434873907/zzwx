//time为时间戳格式，如"1487555260448"
const Todate = (time)=> {
	let now = new Date(time)

	let mm = now.getMonth() + 1     //月
	let dd = now.getDate()          //日
	let hh = now.getHours()        //时
	let ii = now.getMinutes()      //分
	let clock=''

	if(mm < 10) clock += "0"
	clock += mm + "-"
	if(dd < 10) clock += "0"
	clock += dd + " "
	if(hh < 10) clock += "0"
	clock += hh + ":"
	if (ii < 10) clock += "0"
	clock += ii
  	return  clock
  }
  //time为datetime格式，如"2017-02-03 00:00:00"

const Getdate = (time)=> {

	let now = new Date(time)
  let year = now.getFullYear()
	let mm = now.getMonth() + 1     //月
	let dd = now.getDate()          //日
	let hh = now.getHours()        //时
	let ii = now.getMinutes()      //分
	let clock=''
  clock+=year+'-'
	if(mm < 10) clock += "0"
	clock += mm + "-"
	if(dd < 10) clock += "0"
	clock += dd + " "
	if(hh < 10) clock += "0"
	clock += hh + ":"
	if (ii < 10) clock += "0"
	clock += ii
  	return  clock
  }
  //time为datetime格式，如"2017-02-03 00:00:00"

const getWeek = (time)=>{
	time = new Date(time)
  	let year = time.getFullYear()
  	let month = time.getMonth()
  	let day = time.getDate()
  	let week = new Date(year,month,day).getDay()
  	if(week == 0) return '周日'
	if(week == 1) return '周一'
	if(week == 2) return '周二'
	if(week == 3) return '周三'
	if(week == 4) return '周四'
	if(week == 5) return '周五'
	if(week == 6) return '周六'
  }
//time为datetime格式，如"2017-02-03 00:00:00"
const getDay = (time)=>{
	time = new Date(time)
  	let year = time.getFullYear()
  	let month = time.getMonth()+1
  	let day = time.getDate()
  	return year + '年' + month + '月' + day + '日'
}

const getMyDay = (oldTime)=>{
    var time=oldTime;
    if(typeof(oldTime)=='string'){
        time = oldTime.replace(/\-/g, "/");
    }
    let date=new Date(time);
    let month= ("0" + (date.getMonth() + 1)).slice(-2);
    let day=("0" + (date.getDate())).slice(-2);
    let year=date.getFullYear();
    return Number(year)+"-"+Number(month)+"-"+Number(day);
}
var goodTime = function(unixTime){

    if(!unixTime){
        return "";
    }

  let str = parseInt( unixTime )
  var now = new Date().getTime(),
    oldTime = new Date(str).getTime(),
    difference = now - oldTime,
    result='',
    minute = 1000 * 60,
    hour = minute * 60,
    day = hour * 24,
    halfamonth = day * 15,
    month = day * 30,
    year = month * 12,

    _year = difference/year,
    _month =difference/month,
    _week =difference/(7*day),
    _day =difference/day,
    _hour =difference/hour,
    _min =difference/minute;
  if(_year>=1) {result= ~~(_year) + " 年前"}
  else if(_month>=1) {result= ~~(_month) + " 个月前"}
  else if(_week>=1) {result= ~~(_week) + " 周前"}
  else if(_day>=1) {result= ~~(_day) +" 天前"}
  else if(_hour>=1) {result= ~~(_hour) +" 个小时前"}
  else if(_min>=1) {result= ~~(_min) +" 分钟前"}
  else result="刚刚";
  return result;
}



const  getAge=function(id){
      if(!id){
          return "";
      }
    let year=parseInt(id.substring(6,10));
    var date=new Date();
    return date.getFullYear()-year;
  }

const getGender=function(str){
    if(!str){
        return "";
    }
    if(str.toLowerCase()=='m'){
        return '男';
    }
    else{
        return "女";
    }
}
const week = function (item) {
  var date =""
  switch (item)
  {
    case 1:
      date="一";
      break;
    case 2:
      date="二";
      break;
    case 3:
      date="三";
      break;
    case 4:
      date="四";
      break;
    case 5:
      date="五";
      break;
    case 6:
      date="六";
      break;
    case 7:
      date="日";
      break;
  }
  return date;
}

export {Todate,getWeek,getDay,goodTime,getMyDay,getAge,getGender,Getdate,week}

