const u = "http://bbs.zhiyoo.net/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1";

const m = "POST";

const h = {"Cookie": $prefs.valueForKey("zyC")};
   
const b = "formhash=c73ace40&qdxq=fd";

 var myRequest = {url: u, method: m, headers: h, body: b};
 

$task.fetch(myRequest).then(response => {
  
  if(response.body.indexOf("成功") != -1){
    $notify("今日智友签到", "", "成功")
  }if(response.body.indexOf("明天") != -1){
    $notify("今日智友已经签到过了", "", "")
  }else {
    $notify("今日智友签到", "失败", "可能要更新一下cookie信息了")
  }  
}
)
