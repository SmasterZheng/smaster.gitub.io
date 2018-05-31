/*
1.获取所有元素，并将nav里的a提取成列表
2.遍历出a列表的所有位置
3.阻止点击超链接跳转
4.改变href的值
*/

window.onload=function() {
	// 获取nav元素
	var nav = document.getElementById("nav");
	// 获取图片
	var pic = document.getElementById("pic");
	// 将nav里的a元素赋值给links（列表）
	// var links = nav.getElemntTagNames('img');
	var links = document.querySelectorAll("#nav>img");//获取的links也是一个类数组

	console.log(links);
	/*
	*1.将正确的音乐地址放入一个数组中
	*2.获取audio元素也放入一个数组中
	*/
	var musics = new Array("audio/youhebuke.mp3",
		"audio/luzhouyue.mp3",
		"audio/xiangxiangzhizhong.mp3",
		"audio/huanting.mp3",
		"audio/shanshuizhijian.mp3",
		"audio/zuijiageshou.mp3");
	var body = document.body;
	// var audios = body.getElementsByTagName("audio");
	var audio = body.getElementsByTagName("audio1");
	console.log(audio);
	// 遍历出a列表的所有位置
	for (var i = 0; i < links.length; i++) {
		links[i].onclick=function() {
		// 将列表中的href值(地址)赋值给一个新的变量link
		// var link = this.getAttribute("href");
		// 修改/设置新的pic的src(地址)
		// pic.setAttribute("src",link);
		pic.src = this.src;
		console.log(pic.src);
		// var string = musics[i];
		// audio1.src = "http://www.51mp3ring.com/51mp3ring_com3/at201311795831.mp3";
		// audio[i]["src"]=  "audio/huanting.mp3"
		// console.log(audio1);
		// console.log(audio1.src);
		// console.log(audio.src);
		}
		// 自定义
		links[0].onmouseover = function(){
			audio1.src = musics[0];
		}
		links[0].onmouseout = function(){
			audio1.src = "adio/youhebuke.mp3";
		}
		// 寻雾启示
		links[1].onmouseover = function(){
			audio1.src = musics[1];
		}
		links[1].onmouseout = function(){
			audio1.src = "adio/luzhouyue.mp3";
		}
		// 苏格拉没有底
		links[2].onmouseover = function(){
			audio1.src = musics[2];
		}
		links[2].onmouseout = function(){
			audio1.src = "adio/xiangxiangzhizhong.mp3";
		}
		// 梦游计
		links[3].onmouseover = function(){
			audio1.src = musics[3];
		}
		links[3].onmouseout = function(){
			audio1.src = "adio/huanting.mp3";
		}
		// 不如吃茶去
		links[4].onmouseover = function(){
			audio1.src = musics[4];
		}
		links[4].onmouseout = function(){
			audio1.src = "adio/shanshuizhijian.mp3";
		}
		// 青年晚报
		links[5].onmouseover = function(){
			audio1.src = musics[5];
		}
		links[5].onmouseout = function(){
			audio1.src = "adio/zuijiageshou.mp3";
		}
	}
	// 文本域的值发生变化的事件
	// nav.onchange = function() {
	// 	pic.src = this.value;
	// }
	
	
}