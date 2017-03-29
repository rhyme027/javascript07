var root = document.getElementById("root");
var data = [root];
data.push.apply(data,root.getElementsByTagName("div"));

var dlr = document.getElementById("dlr");
var ldr = document.getElementById("ldr");
var lrd = document.getElementById("lrd");

//遍历状态
var ergodicState = function(arr) {
	var cont = 0;
	arr[cont].className = "ergodicState";
	console.log(arr[cont].getElementsByTagName("b")[0].textContent);
	var timer = setInterval(function(){
		if(cont <arr.length - 1) {
			arr[cont].className ="";
			cont ++ ;
			arr[cont].className = "ergodicState";
			console.log(arr[cont].getElementsByTagName("b")[0].textContent);
		}else{
			clearInterval(timer);
			arr[cont].className = "";
			lrd.className = "";
			dlr.className = "";
			ldr.className = "";
			dlr.removeAttribute("disabled");
			lrd.removeAttribute("disabled");
			ldr.removeAttribute("disabled");
		}
	},1000);
}

//先序遍历
dlr.onclick = function () {
	dlr.className = "ergodicState";
	ldr.className = "unergodicState"
	lrd.className = "unergodicState"
	dlr.setAttribute("disabled","disabled");
	lrd.setAttribute("disabled","disabled");
	ldr.setAttribute("disabled","disabled");
	ergodicState(data);
	return false;
}

//中序遍历
ldr.onclick = function () {
	dlr.className = "unergodicState";
	ldr.className = "ergodicState"
	lrd.className = "unergodicState"
	dlr.setAttribute("disabled","disabled");
	lrd.setAttribute("disabled","disabled");
	ldr.setAttribute("disabled","disabled");
	var stack = [];//堆栈
	var sort = []; //排序后的数组
	var i = 0;
	while(true) {
		if(i===data.length) {
			ergodicState(sort);
			return false;
		}
		if (data[i].getElementsByTagName("div").exist()) {
			stack.push(data[i]);
		}else{
			sort.push(data[i]);
			if(stack.length !=0 ) {
				sort.push(stack.pop());
			}
		}
		i++;
	}
}

//后序遍历
lrd.onclick = function () {
	dlr.className = "unergodicState";
	ldr.className = "unergodicState";
	lrd.className = "ergodicState";
	dlr.setAttribute("disabled","disabled");
	lrd.setAttribute("disabled","disabled");
	ldr.setAttribute("disabled","disabled");
	var stack = []; //堆栈
	var sort = []; //储存排序后的数据
	var i = 0;
	
	//把符合要求的节点从堆栈中取出
	var pushs = function() {
		for(var j = len -1;j>=0;j--) {
			if(typeof stack[j] != "underfined") {
				var d = stack[j][0].getElementsByTagName("div").length + 1;
				if (stack[j][1] >= d) {
					sort.push(stack[j][0]);
					delete stack[j];
				}
			}
		}
	};
	
	while(true) {
		var arr = [];
		var len = stack.length;
		if(len !=0 ){
			for (var j in stack) {
				stack[j][i] += 1;
			}
		}
		if(i >= data.length) {
			pushs();
			ergodicState(sort);
			return false;
		}
		if(data[i].getElementsByTagName("div").exit()){
			arr[0] = data[i];
			arr[i] = 0;
			stack.push(arr);
		}else{
			if(len != 0){
				pushs();
			}
			sort.push(data[i]);
		}
		i++;
	}
}

//判断dom中是否有过这个节点
Object.prototype.exist = function() {
	if(typeof this != "undefined" && this.length >=1) {
		return true;
	}
	return false;
}; 




















