!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("chart.js")) : "function" == typeof define && define.amd ? define(["chart.js"], t) : t((e = e || self).Chart);
})(this, function (e) {
    "use strict";
    var t = (e = e && e.hasOwnProperty("default") ? e.default : e).helpers.options.resolve,
        r = e.DatasetController.extend({
            dataElementType: e.elements.Rectangle,
            update: function (e) {
                var t,
                    r,
                    a = this,
                    o = a.getMeta(),
                    d = o.data || [];
                for (a._xScale = a.getScaleForId(o.xAxisID), a._yScale = a.getScaleForId(o.yAxisID), t = 0, r = d.length; t < r; ++t) a.updateElement(d[t], t, e);
            },
            updateElement: function (e, t, r) {
                var a = this,
                    o = a.getDataset(),
                    d = a.index,
                    n = o.data[t],
                    i = a._xScale,
                    l = a._yScale,
                    s = a._resolveElementOptions(e, t),
                    h = r ? i.getBasePixel() : i.getPixelForValue(n, t, d),
                    c = r ? l.getBasePixel() : l.getPixelForValue(n, t, d),
                    p = s.height,
                    x = s.width,
                    u = p / 2;
                (e._xScale = i),
                    (e._yScale = l),
                    (e._options = s),
                    (e._datasetIndex = d),
                    (e._index = t),
                    (e._model = { x: h, base: c - u, y: c + u, width: x, height: p, backgroundColor: s.backgroundColor, borderColor: s.borderColor, borderSkipped: s.borderSkipped, borderWidth: s.borderWidth }),
                    e.pivot();
            },
            draw: function () {
                var e,
                    t,
                    r = this.getMeta().data || [];
                for (e = 0, t = r.length; e < t; ++e) r[e].draw();
            },
            _resolveElementOptions: function (e, r) {
                var a,
                    o,
                    d,
                    n = this.chart,
                    i = n.data.datasets[this.index],
                    l = n.options.elements.rectangle,
                    s = {},
                    h = { chart: n, dataIndex: r, dataset: i, datasetIndex: this.index },
                    c = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "width", "height"];
                for (a = 0, o = c.length; a < o; ++a) s[(d = c[a])] = t([i[d], l[d]], h, r);
                return s;
            },
        });
    (e.controllers.matrix = r),
        (e.defaults.matrix = {
            hover: { mode: "nearest", intersect: !0 },
            tooltips: { mode: "nearest", intersect: !0 },
            scales: { xAxes: [{ type: "linear" }], yAxes: [{ type: "linear" }] },
            elements: { rectangle: { borderSkipped: !1, width: 20, height: 20 } },
        });
});
