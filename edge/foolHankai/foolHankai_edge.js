/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'mo162',
            type:'image',
            rect:['auto','0','210px','120px','76%','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"mo162.png",'0px','0px']
         },
         {
            id:'o3050',
            type:'image',
            rect:['auto','328%','209px','120px','-27.1%','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"o3050.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '100%'],
            ["style", "height", '75px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mo162}": [
            ["style", "left", 'auto'],
            ["style", "height", '75px'],
            ["style", "right", '76%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '131px']
         ],
         "${_o3050}": [
            ["style", "top", '0%'],
            ["style", "left", 'auto'],
            ["style", "height", '76px'],
            ["style", "right", '86.2%'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '131px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 30000,
         autoPlay: true,
         labels: {
            "start1": 1000,
            "start2": 16000
         },
         timeline: [
            { id: "eid4", tween: [ "style", "${_mo162}", "height", '75px', { fromValue: '75px'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_mo162}", "width", '131px', { fromValue: '131px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_mo162}", "right", '-160%', { fromValue: '76%'}], position: 1000, duration: 8500, easing: "easeInQuad" },
            { id: "eid3", tween: [ "style", "${_mo162}", "right", '76%', { fromValue: '160%'}], position: 10500, duration: 4500, easing: "easeOutQuad" },
            { id: "eid7", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 1000, duration: 0 },
            { id: "eid29", tween: [ "style", "${_o3050}", "right", '86.2%', { fromValue: '86.2%'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid31", tween: [ "style", "${_o3050}", "right", '-149.8%', { fromValue: '86.2%'}], position: 16000, duration: 8500, easing: "easeInQuad" },
            { id: "eid32", tween: [ "style", "${_o3050}", "right", '86.2%', { fromValue: '170.2%'}], position: 25500, duration: 4500, easing: "easeOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-71625196");
