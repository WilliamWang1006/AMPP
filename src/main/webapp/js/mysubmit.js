/**
 * 
 */

//获取JSON文件数据并显示
$(function(){  
    $("#btn").click(function(){  
        $.getJSON("js/userinfo.json",function(data){  
            var $jsontip = $("#jsonTip");  
            var strHtml = "123";//存储数据的变量  
            $jsontip.empty();//清空内容  
            $.each(data,function(infoIndex,info){  
                  strHtml += "姓名："+info["name"]+"<br>";  
                  strHtml += "性别："+info["sex"]+"<br>";  
                  strHtml += "邮箱："+info["email"]+"<br>";  
                  strHtml += "<hr>"  
                })  
            $jsontip.html(strHtml);//显示处理后的数据     
            })  
        })  
      
    })  

    
//获取Rest API返回的JSON数据并显示    
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("getheight");
    });
});