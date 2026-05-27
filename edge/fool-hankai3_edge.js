/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Squada One\', san-serif']='<link href=\'http://fonts.googleapis.com/css?family=Squada+One\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['\'Spicy Rice\'']='<link href=\'http://fonts.googleapis.com/css?family=Spicy+Rice\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['\'Love Ya Like A Sister\'']='<link href=\'http://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister\' rel=\'stylesheet\' type=\'text/css\'>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'train1',
            type:'rect',
            rect:['auto','0','auto','auto','77.3%','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'train1',
            symbolName:'train1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '120px'],
            ["style", "max-width", 'none'],
            ["style", "width", '100%']
         ],
         "${_train1}": [
            ["style", "top", '-1px'],
            ["style", "right", '77.09%'],
            ["style", "left", 'auto'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 19000,
         autoPlay: true,
         labels: {
            "start": 1000
         },
         timeline: [
            { id: "eid61", tween: [ "style", "${_train1}", "right", '-159.49%', { fromValue: '77.09%'}], position: 1000, duration: 8526, easing: "easeInQuad" },
            { id: "eid72", tween: [ "style", "${_train1}", "right", '77%', { fromValue: '159.64%'}], position: 10474, duration: 8526, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_train1}", "top", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
            { id: "eid68", tween: [ "style", "${_train1}", "top", '-1px', { fromValue: '-1px'}], position: 1000, duration: 0 },
            { id: "eid74", tween: [ "style", "${_train1}", "top", '-1px', { fromValue: '-1px'}], position: 9526, duration: 0, easing: "easeOutQuad" },
            { id: "eid75", tween: [ "style", "${_train1}", "top", '-1px', { fromValue: '-1px'}], position: 10474, duration: 0, easing: "easeOutQuad" }         ]
      }
   }
},
"logo": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['Love Ya Like A Sister',30,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'The fool on the web',
      align: 'left',
      rect: ['0px','0px','257px','39px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "width", '257px'],
            ["style", "height", '39px'],
            ["style", "font-family", 'Love Ya Like A Sister'],
            ["style", "left", '0px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '257px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"train1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.499','0.471']],
      id: 'hankai2',
      type: 'image',
      rect: ['auto','-76px','445px','255px','-96.2%','auto'],
      fill: ['rgba(0,0,0,0)','images/hankai2.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '222px']
         ],
         "${_hankai2}": [
            ["style", "-webkit-transform-origin", [4.27,57.07], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [4.27,57.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [4.27,57.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [4.27,57.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [4.27,57.07],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '0.49872'],
            ["style", "right", '-96.22%'],
            ["style", "left", 'auto'],
            ["style", "width", '445px'],
            ["style", "top", '-76px'],
            ["transform", "scaleY", '0.47123'],
            ["style", "height", '255px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-14131400");
