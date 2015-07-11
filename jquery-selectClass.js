//サンプル
//
// $("div#hoge").selectClass(["bright","dark"],false); //iteratableが2個ならboolで指定できる
// => <div id="hoge" class="bright"></div>
//
// $("div#hoge").selectClass(["bright","dark"],true); //iteratableが2個ならboolで指定できる
// => <div id="hoge" class="dark"></div>
//
// $("div#hoge").selectClass(["bright","dark","sepia"],false); //←3個目以降は無視される
// => <div id="hoge" class="bright"></div>
//
// $("div#hoge").selectClass(["bright","dark","sepia"],true); //←3個目以降は無視される
// => <div id="hoge" class="dark"></div>
//
// $("div#hoge").selectClass(["bright","dark","sepia"],1); //数値を指定するとそのインデックスのを選ぶ
// => <div id="hoge" class="dark"></div>
//
// $("div#hoge").selectClass(["bright","dark","sepia"],2); //←3個目以降も適用できる
// => <div id="hoge" class="sepia"></div>
//
// $("div#hoge").selectClass(["bright","dark","sepia"],"dark"); //←文字を指定すると文字に一致するクラスを選ぶ
// => <div id="hoge" class="dark"></div>
//
// $("div#hoge").selectClass(["bright","dark","sepia"],"sepia"); //←3個目以降も適用できる
// => <div id="hoge" class="sepia"></div>
//
// $("div#hoge").selectClass(new Set("bright","dark","sepia"),"bright"); //←iteratableなら配列じゃなくてもOK(ES6)
// => <div id="hoge" class="bright"></div>

(function($){
	$.fn.selectClass = selectClass;
	
	function selectClass(iteratable,selector){
		var list = [];
		if((typeof(Symbol)==="function") && (typeof(Array.from)==="function")){
			//ES6記述(新予約語が出てこないような、共存できる範囲で)
			if(iteratable[Symbol.iteratable]==="function"){
				if(typeof(iteratable.values)==="function"){
					list = Array.from(iteratable.values());
				}
				else{
					list = Array.from(iteratable);
				}
			}
		}
		else{
			//ES5互換
			if($.isArray(iteratable)){
				list = iteratable;
			}
		}
		
		if(!list.length) return;
		
		var index = -1;
		switch(typeof(selector)){
			case "boolean":
				for(var i=list.length;i--;){
					if((i==0&&!selector) || (i==1&&selector)){
						index = i;
						break;
					}
				}
				break;
			case "string":
				var index = list.indexOf(selector);
				break;
			case "number":
				index = selector;
				break;
		}
		
		if(index>-1){
			$(this).addClass(list[index]);
			list.splice(index,1);
		}
		$(this).removeClass(list.join(" "));
	}
})(jQuery);