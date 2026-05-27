
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_mo162}","click",function(sym,e){sym.play('start1');var mySound=new buzz.sound("http://foolontheweb.net/audio/tsurikake",{formats:["ogg","mp3","acc"]});mySound.play().fadeIn().bind("timeupdate",function(){var timer=buzz.toTimer(this.getTime());document.getElementById("timer").innerHTML=timer;});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_o3050}","click",function(sym,e){sym.play('start2');var mySound=new buzz.sound("http://foolontheweb.net/audio/cardan",{formats:["ogg","mp3","acc"]});mySound.play().fadeIn().bind("timeupdate",function(){var timer=buzz.toTimer(this.getTime());document.getElementById("timer").innerHTML=timer;});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-71625196");