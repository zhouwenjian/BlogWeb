
$(function() {
	showAddress();
});
function showIp(){
	var url = basePath+'commonController/getRequestIp.do?random='+ Math.random();
	$.getJSON(url, function(rs) {
		console.log(rs);
	    var ip = "获取失败";//获取用户IP
	    if(rs.status==200){
	    	ip = rs.data.ip;
	    }
	    //alert(ip);
	    document.getElementById("showaddress").innerText=" IP地址: "+ip+" ";
	});
}

function showAddress(){
	var url = basePath+'commonController/getRequestBaiduAddress.do?random='+ Math.random();
	$.getJSON(url, function(rs) {
		console.log(rs);
	    var address = "获取失败";//获取用户IP
	    var ip = "获取失败";//获取用户IP
	    if(rs.status==200){
	    	ip=rs.data.ip;
	    }
	    if(rs.status==200&&rs.data.status==0){
	    	address = rs.data.content.address;
	    	
	    }
	    //alert(ip);
	    document.getElementById("showaddress").innerText="   ip地址:  "+ip+" "+"  登录地址:  "+address+" ";
	});
}
