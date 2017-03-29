/*
 * 二叉树的遍历有三种方式，如下：
（1）前序遍历（DLR），首先访问根结点，然后遍历左子树，最后遍历右子树。简记根-左-右。
（2）中序遍历（LDR），首先遍历左子树，然后访问根结点，最后遍历右子树。简记左-根-右。
（3）后序遍历（LRD），首先遍历左子树，然后遍历右子树，最后访问根结点。简记左-右-根。
 */

var pre = document.getElementById('pre-order');
var ino = document.getElementById('in-order');
var post = document.getElementById('post-order');
var root = document.getElementsByClassName('root')[0];
var data = [];
var head,timer;

//前序遍历
function preOrder(node) {
	if (node != null ) {
		data.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}
}

//中序遍历
function inOrder(node) {
	if (node != null ) {
		inOrder(node.firstElementChild);
		data.push(node);
		inOrder(node.lastElementChild);
	}
}

//后序遍历
function postOrder(node) {
	if (node != null ) {
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		data.push(node);
	}
}

//重置
function clear(arr) {
	if (arr.length > 0){
		head.style.backgroundColor = "#fff" ;
		arr = [];
		clearTimeout(timer);
	}
}

//显示
function show() {
	head = data.shift();
	if(head) {
		head.style.backgroundColor = "#ff0000";
		timer = setTimeout(function(){
			head.style.backgroundColor = "#fff";
			show();
		},500);
	}
}

pre.addEventListener('click',function(){
	clear(data);
	preOrder(root);
	show();
});

ino.addEventListener('click',function(){
	clear(data);
	inOrder(root);
	show();
});

post.addEventListener('click',function(){
	clear(data);
	postOrder(root);
	show();
});



























