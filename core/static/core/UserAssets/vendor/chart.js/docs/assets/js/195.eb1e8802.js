(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{525:function(t,n,a){"use strict";a.r(n);var e=a(6),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"progressive-line-with-easing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#progressive-line-with-easing"}},[t._v("#")]),t._v(" Progressive Line With Easing")]),t._v(" "),a("chart-editor",{attrs:{code:"\n// <block:data:2>\nconst data = [];\nconst data2 = [];\nlet prev = 100;\nlet prev2 = 80;\nfor (let i = 0; i < 1000; i++) {\n  prev += 5 - Math.random() * 10;\n  data.push({x: i, y: prev});\n  prev2 += 5 - Math.random() * 10;\n  data2.push({x: i, y: prev2});\n}\n// </block:data>\n\n// <block:animation:1>\nlet easing = helpers.easingEffects.easeOutQuad;\nlet restart = false;\nconst totalDuration = 5000;\nconst duration = (ctx) => easing(ctx.userindex / data.length) * totalDuration / data.length;\nconst delay = (ctx) => easing(ctx.userindex / data.length) * totalDuration;\nconst previousY = (ctx) => ctx.userindex === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetuserindex).data[ctx.userindex - 1].getProps(['y'], true).y;\nconst animation = {\n  x: {\n    type: 'number',\n    easing: 'linear',\n    duration: duration,\n    from: NaN, // the point is initially skipped\n    delay(ctx) {\n      if (ctx.type !== 'data' || ctx.xStarted) {\n        return 0;\n      }\n      ctx.xStarted = true;\n      return delay(ctx);\n    }\n  },\n  y: {\n    type: 'number',\n    easing: 'linear',\n    duration: duration,\n    from: previousY,\n    delay(ctx) {\n      if (ctx.type !== 'data' || ctx.yStarted) {\n        return 0;\n      }\n      ctx.yStarted = true;\n      return delay(ctx);\n    }\n  }\n};\n// </block:animation>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: {\n    datasets: [{\n      borderColor: Utils.CHART_COLORS.red,\n      borderWidth: 1,\n      radius: 0,\n      data: data,\n    },\n    {\n      borderColor: Utils.CHART_COLORS.blue,\n      borderWidth: 1,\n      radius: 0,\n      data: data2,\n    }]\n  },\n  options: {\n    animation,\n    interaction: {\n      intersect: false\n    },\n    plugins: {\n      legend: false,\n      title: {\n        display: true,\n        text: () => easing.name\n      }\n    },\n    scales: {\n      x: {\n        type: 'linear'\n      }\n    }\n  }\n};\n// </block:config>\n\n// <block:actions:2>\nfunction restartAnims(chart) {\n  chart.stop();\n  const meta0 = chart.getDatasetMeta(0);\n  const meta1 = chart.getDatasetMeta(1);\n  for (let i = 0; i < data.length; i++) {\n    const ctx0 = meta0.controller.getContext(i);\n    const ctx1 = meta1.controller.getContext(i);\n    ctx0.xStarted = ctx0.yStarted = false;\n    ctx1.xStarted = ctx1.yStarted = false;\n  }\n  chart.update();\n}\n\nconst actions = [\n  {\n    name: 'easeOutQuad',\n    handler(chart) {\n      easing = helpers.easingEffects.easeOutQuad;\n      restartAnims(chart);\n    }\n  },\n  {\n    name: 'easeOutCubic',\n    handler(chart) {\n      easing = helpers.easingEffects.easeOutCubic;\n      restartAnims(chart);\n    }\n  },\n  {\n    name: 'easeOutQuart',\n    handler(chart) {\n      easing = helpers.easingEffects.easeOutQuart;\n      restartAnims(chart);\n    }\n  },\n  {\n    name: 'easeOutQuint',\n    handler(chart) {\n      easing = helpers.easingEffects.easeOutQuint;\n      restartAnims(chart);\n    }\n  },\n  {\n    name: 'easeInQuad',\n    handler(chart) {\n      easing = helpers.easingEffects.easeInQuad;\n      restartAnims(chart);\n    }\n  },\n  {\n    name: 'easeInCubic',\n    handler(chart) {\n      easing = helpers.easingEffects.easeInCubic;\n      restartAnims(chart);\n    }\n  },\n  {\n    name: 'easeInQuart',\n    handler(chart) {\n      easing = helpers.easingEffects.easeInQuart;\n      restartAnims(chart);\n    }\n  },\n  {\n    name: 'easeInQuint',\n    handler(chart) {\n      easing = helpers.easingEffects.easeInQuint;\n      restartAnims(chart);\n    }\n  },\n];\n// </block:actions>\n\nmodule.exports = {\n  config,\n  actions\n};\n\n"}}),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" Api")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/api/classes/Chart.html"}},[t._v("Chart")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/api/classes/Chart.html#getdatasetmeta"}},[a("code",[t._v("getDatasetMeta")])])],1)])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/api/classes/Scale.html"}},[t._v("Scale")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/api/classes/Scale.html#getpixelforvalue"}},[a("code",[t._v("getPixelForValue")])])],1)])],1)]),t._v(" "),a("h2",{attrs:{id:"docs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docs"}},[t._v("#")]),t._v(" Docs")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/configuration/animations.html"}},[t._v("Animations")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/configuration/animations.html#animation"}},[t._v("animation")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("delay")])]),t._v(" "),a("li",[a("code",[t._v("duration")])]),t._v(" "),a("li",[a("code",[t._v("easing")])]),t._v(" "),a("li",[a("code",[t._v("loop")])])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/animations.html#easing"}},[t._v("Easing")])],1)])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/charts/line.html"}},[t._v("Line")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/general/options.html"}},[t._v("Options")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable Options")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/general/options.html#data"}},[t._v("Data Context")])],1)])],1)])],1)])],1)}),[],!1,null,null,null);n.default=s.exports}}]);