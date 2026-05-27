/***********************
* Adobe Edge Animate コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。 
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mo162}", "click", function(sym, e) {
         // 指定した位置からタイムラインを再生 (ミリ秒またはラベル)
         sym.play('start1');
         var mySound = new buzz.sound( "http://foolontheweb.net/audio/tsurikake", {
             formats: [ "ogg", "mp3", "acc" ]
         });
         
         mySound.play()
             .fadeIn()
             .bind( "timeupdate", function() {
                var timer = buzz.toTimer( this.getTime() );
                document.getElementById( "timer" ).innerHTML = timer;
             });
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_o3050}", "click", function(sym, e) {
         // マウスクリックのコードをここに挿入します
         sym.play('start2');
         
         var mySound = new buzz.sound( "http://foolontheweb.net/audio/cardan", {
             formats: [ "ogg", "mp3", "acc" ]
         });
         
         mySound.play()
             .fadeIn()
             .bind( "timeupdate", function() {
                var timer = buzz.toTimer( this.getTime() );
                document.getElementById( "timer" ).innerHTML = timer;
             });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-71625196");