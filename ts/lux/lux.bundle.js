var lux;
(function (lux) {
    class Aa {
        constructor() {
            this.tag = 'sdf';
        }
    }
    lux.Aa = Aa;
})(lux || (lux = {}));
// "lux2.ts",
//     "lux1.ts"
var lux;
(function (lux) {
    class QQ extends lux.Aa {
        constructor() {
            super(...arguments);
            this.t = '';
        }
        aa() {
        }
    }
    lux.a = 1;
})(lux || (lux = {}));
