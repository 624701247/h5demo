var lux;
(function (lux) {
    console.log('llllllllll');
    var Abc;
    (function (Abc) {
        Abc["A"] = "aa";
        Abc["B"] = "bb";
        Abc["C"] = "cc";
    })(Abc || (Abc = {}));
    var test = Abc.A;
    console.log('TEST', test);
})(lux || (lux = {}));
