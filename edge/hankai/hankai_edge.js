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
                id: 'streetcar_go-slow-f2',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['582', '166','320px','45px','auto', 'auto'],
                source: ['media/streetcar_go-slow-f.mp3','media/streetcar_go-slow-f.ogg']
            },
            {
                id: 'ding2',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['480', '166','320px','45px','auto', 'auto'],
                source: ['media/ding.ogg','media/ding.mp3']
            },
            {
                id: 'fumikiri2',
                type: 'image',
                rect: ['60px', '0px','28px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fumikiri.png",'0px','0px']
            },
            {
                id: 'signal-light3',
                display: 'none',
                type: 'rect',
                rect: ['426', '138','auto','auto','auto', 'auto']
            },
            {
                id: 'signal-to-right2',
                display: 'none',
                type: 'image',
                rect: ['60px', '0px','28px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"signal-to-right.png",'0px','0px']
            },
            {
                id: 'fumikiri-sound',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/fumikiri.ogg','media/fumikiri.mp3']
            },
            {
                id: 'bar2',
                type: 'image',
                rect: ['150px', '0','11px','123px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bar2.png",'0px','0px']
            },
            {
                id: 'shadanki2',
                type: 'image',
                rect: ['150px', '0','11px','123px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"shadanki2.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'signal-light3',
                symbolName: 'signal-light',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_mo162}": [
                ["style", "height", '75px'],
                ["style", "left", '-89px'],
                ["style", "width", '127px']
            ],
            "${_fumikiri2}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "left", '60px'],
                ["style", "width", '28px']
            ],
            "${_signal-light3}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "left", '60px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '100%'],
                ["style", "height", '75px'],
                ["style", "overflow", 'hidden']
            ],
            "${_signal-to-right2}": [
                ["style", "top", '0px'],
                ["style", "height", '75px'],
                ["style", "display", 'none'],
                ["style", "left", '60px'],
                ["style", "width", '28px']
            ],
            "${_bar2}": [
                ["style", "height", '123px'],
                ["style", "width", '11px'],
                ["style", "left", '150px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_shadanki2}": [
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
            duration: 15278,
            autoPlay: true,
            timeline: [
                { id: "eid13", tween: [ "style", "${_signal-light3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_signal-light3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid29", tween: [ "style", "${_signal-light3}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeInQuad" },
                { id: "eid18", tween: [ "style", "${_mo162}", "left", '2000px', { fromValue: '-89px'}], position: 5000, duration: 9000, easing: "easeInQuad" },
                { id: "eid21", tween: [ "transform", "${_bar2}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeInQuad" },
                { id: "eid27", tween: [ "transform", "${_bar2}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 9000, duration: 1000, easing: "easeInQuad" },
                { id: "eid31", tween: [ "style", "${_signal-to-right2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid7", tween: [ "style", "${_signal-to-right2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid28", tween: [ "style", "${_signal-to-right2}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeInQuad" },
                { id: "eid15", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_signal-light3}', [] ], ""], position: 1000 },
                { id: "eid14", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_fumikiri-sound}', [] ], ""], position: 1000 },
                { id: "eid23", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_ding2}', [] ], ""], position: 4000 },
                { id: "eid24", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_streetcar_go-slow-f2}', [] ], ""], position: 5000 },
                { id: "eid22", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_fumikiri-sound}', [] ], ""], position: 9000 },
                { id: "eid30", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_signal-light3}', [] ], ""], position: 10000 }            ]
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
