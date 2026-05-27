/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'mo162',
                type: 'image',
                rect: ['-89px', '0','127px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mo162.png",'0px','0px']
            },
            {
                id: 'mo168',
                type: 'image',
                rect: ['-89px', '0px','127px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mo1682.png",'0px','0px']
            },
            {
                id: 'mo1001',
                type: 'image',
                rect: ['-187px', '0','233px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sakaitram2.png",'0px','0px']
            },
            {
                id: 'fumikiri',
                type: 'image',
                rect: ['60px', '0px','28px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fumikiri.png",'0px','0px']
            },
            {
                id: 'signal-light',
                display: 'none',
                type: 'rect',
                rect: ['426', '138','auto','auto','auto', 'auto']
            },
            {
                id: 'signal-to-right',
                display: 'none',
                type: 'image',
                rect: ['60px', '0px','28px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"signal-to-right.png",'0px','0px']
            },
            {
                id: 'signal-to-left',
                display: 'none',
                type: 'image',
                rect: ['60px', '0px','28px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"signal-to-left.png",'0px','0px']
            },
            {
                id: 'shadanki',
                type: 'image',
                rect: ['150px', '0','11px','123px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shadanki2.png",'0px','0px']
            },
            {
                id: 'bar2',
                type: 'image',
                rect: ['150px', '0','11px','123px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bar2.png",'0px','0px']
            },
            {
                id: 'button-go',
                type: 'image',
                rect: ['209px', '45px','30px','30px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"button-go.png",'0px','0px']
            },
            {
                id: 'button-stop',
                type: 'image',
                rect: ['168px', '45px','30px','30px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"button-stop.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'signal-light',
                symbolName: 'signal-light',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_button-stop}": [
                ["style", "top", '45px'],
                ["style", "height", '30px'],
                ["style", "left", '168px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '30px']
            ],
            "${_signal-light}": [
                ["style", "display", 'none'],
                ["style", "left", '60px'],
                ["style", "top", '0px']
            ],
            "${_mo168}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "left", '-2178px'],
                ["style", "width", '127px']
            ],
            "${_fumikiri}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "left", '60px'],
                ["style", "width", '28px']
            ],
            "${_bar2}": [
                ["style", "height", '123px'],
                ["style", "width", '11px'],
                ["style", "left", '150px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_button-go}": [
                ["style", "top", '45px'],
                ["style", "height", '30px'],
                ["style", "left", '209px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '30px']
            ],
            "${_signal-to-right}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "display", 'none'],
                ["style", "left", '60px'],
                ["style", "width", '28px']
            ],
            "${_mo1001}": [
                ["style", "height", '75px'],
                ["style", "left", '2000px'],
                ["style", "width", '233px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '100%'],
                ["style", "height", '75px'],
                ["style", "overflow", 'hidden']
            ],
            "${_mo162}": [
                ["style", "height", '75px'],
                ["style", "left", '-89px'],
                ["style", "width", '127px']
            ],
            "${_signal-to-left}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "display", 'none'],
                ["style", "left", '60px'],
                ["style", "width", '28px']
            ],
            "${_shadanki}": [
                ["style", "height", '123px'],
                ["style", "left", '150px'],
                ["style", "width", '11px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 57000,
            autoPlay: true,
            timeline: [
                { id: "eid86", tween: [ "style", "${_signal-to-right}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid7", tween: [ "style", "${_signal-to-right}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_signal-to-right}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeInQuad" },
                { id: "eid72", tween: [ "style", "${_signal-to-right}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0, easing: "easeInQuad" },
                { id: "eid73", tween: [ "style", "${_signal-to-right}", "display", 'none', { fromValue: 'block'}], position: 46000, duration: 0, easing: "easeInQuad" },
                { id: "eid18", tween: [ "style", "${_mo162}", "left", '2000px', { fromValue: '-89px'}], position: 5912, duration: 9000, easing: "easeInQuad" },
                { id: "eid66", tween: [ "style", "${_mo162}", "left", '-89px', { fromValue: '2000px'}], position: 47000, duration: 9000, easing: "easeOutQuad" },
                { id: "eid85", tween: [ "style", "${_signal-to-left}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid48", tween: [ "style", "${_signal-to-left}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "style", "${_signal-to-left}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeOutQuad" },
                { id: "eid75", tween: [ "style", "${_signal-to-left}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0, easing: "easeInQuad" },
                { id: "eid77", tween: [ "style", "${_signal-to-left}", "display", 'none', { fromValue: 'block'}], position: 56000, duration: 0, easing: "easeInQuad" },
                { id: "eid21", tween: [ "transform", "${_bar2}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid27", tween: [ "transform", "${_bar2}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 10000, duration: 1000, easing: "easeInQuad" },
                { id: "eid35", tween: [ "transform", "${_bar2}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 15000, duration: 1000, easing: "easeInQuad" },
                { id: "eid37", tween: [ "transform", "${_bar2}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 21000, duration: 1000, easing: "easeInQuad" },
                { id: "eid60", tween: [ "transform", "${_bar2}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 40000, duration: 1000, easing: "easeInQuad" },
                { id: "eid61", tween: [ "transform", "${_bar2}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 46000, duration: 1000, easing: "easeInQuad" },
                { id: "eid69", tween: [ "transform", "${_bar2}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 50000, duration: 1000, easing: "easeInQuad" },
                { id: "eid68", tween: [ "transform", "${_bar2}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 56000, duration: 1000, easing: "easeInQuad" },
                { id: "eid47", tween: [ "style", "${_mo168}", "left", '-89px', { fromValue: '-2178px'}], position: 28000, duration: 9000, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "style", "${_mo168}", "left", '2000px', { fromValue: '-89px'}], position: 43000, duration: 9000, easing: "easeInQuad" },
                { id: "eid36", tween: [ "style", "${_mo1001}", "left", '-187px', { fromValue: '2000px'}], position: 12000, duration: 9000, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_mo1001}", "left", '-1800px', { fromValue: '-187px'}], position: 25000, duration: 9000, easing: "easeInQuad" },
                { id: "eid13", tween: [ "style", "${_signal-light}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_signal-light}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_signal-light}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeInQuad" },
                { id: "eid34", tween: [ "style", "${_signal-light}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid40", tween: [ "style", "${_signal-light}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeInQuad" },
                { id: "eid70", tween: [ "style", "${_signal-light}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0, easing: "easeInQuad" },
                { id: "eid71", tween: [ "style", "${_signal-light}", "display", 'none', { fromValue: 'block'}], position: 46000, duration: 0, easing: "easeInQuad" },
                { id: "eid74", tween: [ "style", "${_signal-light}", "display", 'block', { fromValue: 'none'}], position: 48000, duration: 0, easing: "easeInQuad" },
                { id: "eid76", tween: [ "style", "${_signal-light}", "display", 'none', { fromValue: 'block'}], position: 56000, duration: 0, easing: "easeInQuad" },
                { id: "eid15", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_signal-light}', [] ], ""], position: 1000 },
                { id: "eid30", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_signal-light}', [] ], ""], position: 10000 },
                { id: "eid42", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_signal-light}', [] ], ""], position: 12000 },
                { id: "eid44", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_signal-light}', [] ], ""], position: 21000 },
                { id: "eid78", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_signal-light}', [] ], ""], position: 38000 },
                { id: "eid80", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_signal-light}', [] ], ""], position: 46000 },
                { id: "eid82", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_signal-light}', [] ], ""], position: 48000 },
                { id: "eid84", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_signal-light}', [] ], ""], position: 56000 }            ]
        }
    }
},
"signal-light": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '28px', '75px', 'auto', 'auto'],
                    id: 'signal-left2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/signal-left.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '28px', '75px', 'auto', 'auto'],
                    id: 'signnal-right2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/signnal-right.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_signnal-right2}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${_signal-left2}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '28px']
            ],
            "${symbolSelector}": [
                ["style", "height", '75px'],
                ["style", "width", '28px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid1", tween: [ "style", "${_signnal-right2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "style", "${_signnal-right2}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_signnal-right2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid4", tween: [ "style", "${_signal-left2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_signal-left2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_signal-left2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-86487219");
