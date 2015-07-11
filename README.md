# jquery-selectClass
俺はクラス名を複数の中から選びたかったんや…

## サンプル

$("div#hoge").selectClass(["bright","dark"],false); //iteratableが2個ならboolで指定できる<br>
=&gt; &lt;div id="hoge" class="bright"&gt;&lt;/div&gt;

$("div#hoge").selectClass(["bright","dark"],true); //iteratableが2個ならboolで指定できる<br>
=&gt; &lt;div id="hoge" class="dark"&gt;&lt;/div&gt;

$("div#hoge").selectClass(["bright","dark","sepia"],false); //←3個目以降は無視される<br>
=&gt; &lt;div id="hoge" class="bright"&gt;&lt;/div&gt;

$("div#hoge").selectClass(["bright","dark","sepia"],true); //←3個目以降は無視される<br>
=&gt; &lt;div id="hoge" class="dark"&gt;&lt;/div&gt;

$("div#hoge").selectClass(["bright","dark","sepia"],1); //数値を指定するとそのインデックスのを選ぶ<br>
=&gt; &lt;div id="hoge" class="dark"&gt;&lt;/div&gt;

$("div#hoge").selectClass(["bright","dark","sepia"],2); //←3個目以降も適用できる<br>
=&gt; &lt;div id="hoge" class="sepia"&gt;&lt;/div&gt;

$("div#hoge").selectClass(["bright","dark","sepia"],"dark"); //←文字を指定すると文字に一致するクラスを選ぶ<br>
=&gt; &lt;div id="hoge" class="dark"&gt;&lt;/div&gt;

$("div#hoge").selectClass(["bright","dark","sepia"],"sepia"); //←3個目以降も適用できる<br>
=&gt; &lt;div id="hoge" class="sepia"&gt;&lt;/div&gt;

$("div#hoge").selectClass(new Set("bright","dark","sepia"),"bright"); //←iteratableなら配列じゃなくてもOK(ES6)<br>
=&gt; &lt;div id="hoge" class="bright"&gt;&lt;/div&gt;
