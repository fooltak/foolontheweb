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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_train1}", "click", function(sym, e) {
         // 指定した位置からタイムラインを再生 (ミリ秒またはラベル)
         sym.play('start');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // コードをここに挿入
         var mySound = new buzz.sound( "audio/streetcar_go-slow", {
             formats: [ "ogg", "mp3", "acc" ]
         });
         
         mySound.play()
             .fadeIn()
             .loop()
             .bind( "timeupdate", function() {
                var timer = buzz.toTimer( this.getTime() );
                document.getElementById( "timer" ).innerHTML = timer;
             });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         var mySound = new buzz.sound( "audio/streetcar_slow-stop", {
             formats: [ "ogg", "mp3", "acc" ]
         });
         
         mySound.play()
             .fadeIn()
             .loop()
             .bind( "timeupdate", function() {
                var timer = buzz.toTimer( this.getTime() );
                document.getElementById( "timer" ).innerHTML = timer;
             });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("logo");
   //Edge symbol end:'logo'

   //=========================================================
   
   //Edge symbol: 'train1'
   (function(symbolName) {   
   
   })("train1");
   //Edge symbol end:'train1'

})(jQuery, AdobeEdge, "EDGE-14131400");