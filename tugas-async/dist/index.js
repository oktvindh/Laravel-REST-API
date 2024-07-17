"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var register = require("./lib/register");
var _process$argv = _toArray(process.argv),
  command = _process$argv[2],
  args = _process$argv.slice(3);
if (command === "register") {
  var _args$0$split = args[0].split(","),
    _args$0$split2 = _slicedToArray(_args$0$split, 3),
    name = _args$0$split2[0],
    password = _args$0$split2[1],
    role = _args$0$split2[2];
  register(name, password, role, function (err, message) {
    if (err) console.error(err);else console.log(message);
  });
}
var login = require("./lib/login");
if (command === "login") {
  var _args$0$split3 = args[0].split(","),
    _args$0$split4 = _slicedToArray(_args$0$split3, 2),
    _name = _args$0$split4[0],
    _password = _args$0$split4[1];
  login(_name, _password).then(function (message) {
    return console.log(message);
  })["catch"](function (err) {
    return console.error(err.message);
  });
}
var addSiswa = require("./lib/addSiswa");
if (command === "addSiswa") {
  var _args$0$split5 = args[0].split(","),
    _args$0$split6 = _slicedToArray(_args$0$split5, 2),
    studentName = _args$0$split6[0],
    trainerName = _args$0$split6[1];
  addSiswa(studentName, trainerName).then(function (message) {
    return console.log(message);
  })["catch"](function (err) {
    return console.error(err.message);
  });
}