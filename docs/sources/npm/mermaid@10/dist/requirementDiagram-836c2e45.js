import { c as Te, s as Ce, g as Fe, b as Me, a as De, l as Ne, E as Pe, j as oe, k as Ye, f as ke } from "./mermaid-5a5980d4.js";
import { G as Ue } from "./graph-e9862b7e.js";
import { l as Be } from "./layout-2e6f21ea.js";
import { l as Qe } from "./line-552be4bc.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
var ce = function() {
  var e = function(V, i, r, a) {
    for (r = r || {}, a = V.length; a--; r[V[a]] = i)
      ;
    return r;
  }, t = [1, 3], l = [1, 4], c = [1, 5], u = [1, 6], d = [5, 6, 8, 9, 11, 13, 31, 32, 33, 34, 35, 36, 44, 62, 63], f = [1, 18], h = [2, 7], o = [1, 22], E = [1, 23], R = [1, 24], A = [1, 25], T = [1, 26], N = [1, 27], w = [1, 20], k = [1, 28], x = [1, 29], F = [62, 63], de = [5, 8, 9, 11, 13, 31, 32, 33, 34, 35, 36, 44, 51, 53, 62, 63], fe = [1, 47], pe = [1, 48], ye = [1, 49], _e = [1, 50], Ee = [1, 51], ge = [1, 52], Re = [1, 53], O = [53, 54], M = [1, 64], D = [1, 60], P = [1, 61], Y = [1, 62], U = [1, 63], B = [1, 65], j = [1, 69], z = [1, 70], X = [1, 67], J = [1, 68], m = [5, 8, 9, 11, 13, 31, 32, 33, 34, 35, 36, 44, 62, 63], ie = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, directive: 4, NEWLINE: 5, RD: 6, diagram: 7, EOF: 8, acc_title: 9, acc_title_value: 10, acc_descr: 11, acc_descr_value: 12, acc_descr_multiline_value: 13, requirementDef: 14, elementDef: 15, relationshipDef: 16, requirementType: 17, requirementName: 18, STRUCT_START: 19, requirementBody: 20, ID: 21, COLONSEP: 22, id: 23, TEXT: 24, text: 25, RISK: 26, riskLevel: 27, VERIFYMTHD: 28, verifyType: 29, STRUCT_STOP: 30, REQUIREMENT: 31, FUNCTIONAL_REQUIREMENT: 32, INTERFACE_REQUIREMENT: 33, PERFORMANCE_REQUIREMENT: 34, PHYSICAL_REQUIREMENT: 35, DESIGN_CONSTRAINT: 36, LOW_RISK: 37, MED_RISK: 38, HIGH_RISK: 39, VERIFY_ANALYSIS: 40, VERIFY_DEMONSTRATION: 41, VERIFY_INSPECTION: 42, VERIFY_TEST: 43, ELEMENT: 44, elementName: 45, elementBody: 46, TYPE: 47, type: 48, DOCREF: 49, ref: 50, END_ARROW_L: 51, relationship: 52, LINE: 53, END_ARROW_R: 54, CONTAINS: 55, COPIES: 56, DERIVES: 57, SATISFIES: 58, VERIFIES: 59, REFINES: 60, TRACES: 61, unqString: 62, qString: 63, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "NEWLINE", 6: "RD", 8: "EOF", 9: "acc_title", 10: "acc_title_value", 11: "acc_descr", 12: "acc_descr_value", 13: "acc_descr_multiline_value", 19: "STRUCT_START", 21: "ID", 22: "COLONSEP", 24: "TEXT", 26: "RISK", 28: "VERIFYMTHD", 30: "STRUCT_STOP", 31: "REQUIREMENT", 32: "FUNCTIONAL_REQUIREMENT", 33: "INTERFACE_REQUIREMENT", 34: "PERFORMANCE_REQUIREMENT", 35: "PHYSICAL_REQUIREMENT", 36: "DESIGN_CONSTRAINT", 37: "LOW_RISK", 38: "MED_RISK", 39: "HIGH_RISK", 40: "VERIFY_ANALYSIS", 41: "VERIFY_DEMONSTRATION", 42: "VERIFY_INSPECTION", 43: "VERIFY_TEST", 44: "ELEMENT", 47: "TYPE", 49: "DOCREF", 51: "END_ARROW_L", 53: "LINE", 54: "END_ARROW_R", 55: "CONTAINS", 56: "COPIES", 57: "DERIVES", 58: "SATISFIES", 59: "VERIFIES", 60: "REFINES", 61: "TRACES", 62: "unqString", 63: "qString" },
    productions_: [0, [3, 3], [3, 2], [3, 4], [4, 2], [4, 2], [4, 1], [7, 0], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [14, 5], [20, 5], [20, 5], [20, 5], [20, 5], [20, 2], [20, 1], [17, 1], [17, 1], [17, 1], [17, 1], [17, 1], [17, 1], [27, 1], [27, 1], [27, 1], [29, 1], [29, 1], [29, 1], [29, 1], [15, 5], [46, 5], [46, 5], [46, 2], [46, 1], [16, 5], [16, 5], [52, 1], [52, 1], [52, 1], [52, 1], [52, 1], [52, 1], [52, 1], [18, 1], [18, 1], [23, 1], [23, 1], [25, 1], [25, 1], [45, 1], [45, 1], [48, 1], [48, 1], [50, 1], [50, 1]],
    performAction: function(i, r, a, n, p, s, W) {
      var _ = s.length - 1;
      switch (p) {
        case 4:
          this.$ = s[_].trim(), n.setAccTitle(this.$);
          break;
        case 5:
        case 6:
          this.$ = s[_].trim(), n.setAccDescription(this.$);
          break;
        case 7:
          this.$ = [];
          break;
        case 13:
          n.addRequirement(s[_ - 3], s[_ - 4]);
          break;
        case 14:
          n.setNewReqId(s[_ - 2]);
          break;
        case 15:
          n.setNewReqText(s[_ - 2]);
          break;
        case 16:
          n.setNewReqRisk(s[_ - 2]);
          break;
        case 17:
          n.setNewReqVerifyMethod(s[_ - 2]);
          break;
        case 20:
          this.$ = n.RequirementType.REQUIREMENT;
          break;
        case 21:
          this.$ = n.RequirementType.FUNCTIONAL_REQUIREMENT;
          break;
        case 22:
          this.$ = n.RequirementType.INTERFACE_REQUIREMENT;
          break;
        case 23:
          this.$ = n.RequirementType.PERFORMANCE_REQUIREMENT;
          break;
        case 24:
          this.$ = n.RequirementType.PHYSICAL_REQUIREMENT;
          break;
        case 25:
          this.$ = n.RequirementType.DESIGN_CONSTRAINT;
          break;
        case 26:
          this.$ = n.RiskLevel.LOW_RISK;
          break;
        case 27:
          this.$ = n.RiskLevel.MED_RISK;
          break;
        case 28:
          this.$ = n.RiskLevel.HIGH_RISK;
          break;
        case 29:
          this.$ = n.VerifyType.VERIFY_ANALYSIS;
          break;
        case 30:
          this.$ = n.VerifyType.VERIFY_DEMONSTRATION;
          break;
        case 31:
          this.$ = n.VerifyType.VERIFY_INSPECTION;
          break;
        case 32:
          this.$ = n.VerifyType.VERIFY_TEST;
          break;
        case 33:
          n.addElement(s[_ - 3]);
          break;
        case 34:
          n.setNewElementType(s[_ - 2]);
          break;
        case 35:
          n.setNewElementDocRef(s[_ - 2]);
          break;
        case 38:
          n.addRelationship(s[_ - 2], s[_], s[_ - 4]);
          break;
        case 39:
          n.addRelationship(s[_ - 2], s[_ - 4], s[_]);
          break;
        case 40:
          this.$ = n.Relationships.CONTAINS;
          break;
        case 41:
          this.$ = n.Relationships.COPIES;
          break;
        case 42:
          this.$ = n.Relationships.DERIVES;
          break;
        case 43:
          this.$ = n.Relationships.SATISFIES;
          break;
        case 44:
          this.$ = n.Relationships.VERIFIES;
          break;
        case 45:
          this.$ = n.Relationships.REFINES;
          break;
        case 46:
          this.$ = n.Relationships.TRACES;
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 6: t, 9: l, 11: c, 13: u }, { 1: [3] }, { 3: 8, 4: 2, 5: [1, 7], 6: t, 9: l, 11: c, 13: u }, { 5: [1, 9] }, { 10: [1, 10] }, { 12: [1, 11] }, e(d, [2, 6]), { 3: 12, 4: 2, 6: t, 9: l, 11: c, 13: u }, { 1: [2, 2] }, { 4: 17, 5: f, 7: 13, 8: h, 9: l, 11: c, 13: u, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: o, 32: E, 33: R, 34: A, 35: T, 36: N, 44: w, 62: k, 63: x }, e(d, [2, 4]), e(d, [2, 5]), { 1: [2, 1] }, { 8: [1, 30] }, { 4: 17, 5: f, 7: 31, 8: h, 9: l, 11: c, 13: u, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: o, 32: E, 33: R, 34: A, 35: T, 36: N, 44: w, 62: k, 63: x }, { 4: 17, 5: f, 7: 32, 8: h, 9: l, 11: c, 13: u, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: o, 32: E, 33: R, 34: A, 35: T, 36: N, 44: w, 62: k, 63: x }, { 4: 17, 5: f, 7: 33, 8: h, 9: l, 11: c, 13: u, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: o, 32: E, 33: R, 34: A, 35: T, 36: N, 44: w, 62: k, 63: x }, { 4: 17, 5: f, 7: 34, 8: h, 9: l, 11: c, 13: u, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: o, 32: E, 33: R, 34: A, 35: T, 36: N, 44: w, 62: k, 63: x }, { 4: 17, 5: f, 7: 35, 8: h, 9: l, 11: c, 13: u, 14: 14, 15: 15, 16: 16, 17: 19, 23: 21, 31: o, 32: E, 33: R, 34: A, 35: T, 36: N, 44: w, 62: k, 63: x }, { 18: 36, 62: [1, 37], 63: [1, 38] }, { 45: 39, 62: [1, 40], 63: [1, 41] }, { 51: [1, 42], 53: [1, 43] }, e(F, [2, 20]), e(F, [2, 21]), e(F, [2, 22]), e(F, [2, 23]), e(F, [2, 24]), e(F, [2, 25]), e(de, [2, 49]), e(de, [2, 50]), { 1: [2, 3] }, { 8: [2, 8] }, { 8: [2, 9] }, { 8: [2, 10] }, { 8: [2, 11] }, { 8: [2, 12] }, { 19: [1, 44] }, { 19: [2, 47] }, { 19: [2, 48] }, { 19: [1, 45] }, { 19: [2, 53] }, { 19: [2, 54] }, { 52: 46, 55: fe, 56: pe, 57: ye, 58: _e, 59: Ee, 60: ge, 61: Re }, { 52: 54, 55: fe, 56: pe, 57: ye, 58: _e, 59: Ee, 60: ge, 61: Re }, { 5: [1, 55] }, { 5: [1, 56] }, { 53: [1, 57] }, e(O, [2, 40]), e(O, [2, 41]), e(O, [2, 42]), e(O, [2, 43]), e(O, [2, 44]), e(O, [2, 45]), e(O, [2, 46]), { 54: [1, 58] }, { 5: M, 20: 59, 21: D, 24: P, 26: Y, 28: U, 30: B }, { 5: j, 30: z, 46: 66, 47: X, 49: J }, { 23: 71, 62: k, 63: x }, { 23: 72, 62: k, 63: x }, e(m, [2, 13]), { 22: [1, 73] }, { 22: [1, 74] }, { 22: [1, 75] }, { 22: [1, 76] }, { 5: M, 20: 77, 21: D, 24: P, 26: Y, 28: U, 30: B }, e(m, [2, 19]), e(m, [2, 33]), { 22: [1, 78] }, { 22: [1, 79] }, { 5: j, 30: z, 46: 80, 47: X, 49: J }, e(m, [2, 37]), e(m, [2, 38]), e(m, [2, 39]), { 23: 81, 62: k, 63: x }, { 25: 82, 62: [1, 83], 63: [1, 84] }, { 27: 85, 37: [1, 86], 38: [1, 87], 39: [1, 88] }, { 29: 89, 40: [1, 90], 41: [1, 91], 42: [1, 92], 43: [1, 93] }, e(m, [2, 18]), { 48: 94, 62: [1, 95], 63: [1, 96] }, { 50: 97, 62: [1, 98], 63: [1, 99] }, e(m, [2, 36]), { 5: [1, 100] }, { 5: [1, 101] }, { 5: [2, 51] }, { 5: [2, 52] }, { 5: [1, 102] }, { 5: [2, 26] }, { 5: [2, 27] }, { 5: [2, 28] }, { 5: [1, 103] }, { 5: [2, 29] }, { 5: [2, 30] }, { 5: [2, 31] }, { 5: [2, 32] }, { 5: [1, 104] }, { 5: [2, 55] }, { 5: [2, 56] }, { 5: [1, 105] }, { 5: [2, 57] }, { 5: [2, 58] }, { 5: M, 20: 106, 21: D, 24: P, 26: Y, 28: U, 30: B }, { 5: M, 20: 107, 21: D, 24: P, 26: Y, 28: U, 30: B }, { 5: M, 20: 108, 21: D, 24: P, 26: Y, 28: U, 30: B }, { 5: M, 20: 109, 21: D, 24: P, 26: Y, 28: U, 30: B }, { 5: j, 30: z, 46: 110, 47: X, 49: J }, { 5: j, 30: z, 46: 111, 47: X, 49: J }, e(m, [2, 14]), e(m, [2, 15]), e(m, [2, 16]), e(m, [2, 17]), e(m, [2, 34]), e(m, [2, 35])],
    defaultActions: { 8: [2, 2], 12: [2, 1], 30: [2, 3], 31: [2, 8], 32: [2, 9], 33: [2, 10], 34: [2, 11], 35: [2, 12], 37: [2, 47], 38: [2, 48], 40: [2, 53], 41: [2, 54], 83: [2, 51], 84: [2, 52], 86: [2, 26], 87: [2, 27], 88: [2, 28], 90: [2, 29], 91: [2, 30], 92: [2, 31], 93: [2, 32], 95: [2, 55], 96: [2, 56], 98: [2, 57], 99: [2, 58] },
    parseError: function(i, r) {
      if (r.recoverable)
        this.trace(i);
      else {
        var a = new Error(i);
        throw a.hash = r, a;
      }
    },
    parse: function(i) {
      var r = this, a = [0], n = [], p = [null], s = [], W = this.table, _ = "", Z = 0, me = 0, Ve = 2, Ie = 1, qe = s.slice.call(arguments, 1), g = Object.create(this.lexer), L = { yy: {} };
      for (var re in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, re) && (L.yy[re] = this.yy[re]);
      g.setInput(i, L.yy), L.yy.lexer = g, L.yy.parser = this, typeof g.yylloc > "u" && (g.yylloc = {});
      var se = g.yylloc;
      s.push(se);
      var Oe = g.options && g.options.ranges;
      typeof L.yy.parseError == "function" ? this.parseError = L.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Le() {
        var v;
        return v = n.pop() || g.lex() || Ie, typeof v != "number" && (v instanceof Array && (n = v, v = n.pop()), v = r.symbols_[v] || v), v;
      }
      for (var I, C, S, ae, Q = {}, ee, $, be, te; ; ) {
        if (C = a[a.length - 1], this.defaultActions[C] ? S = this.defaultActions[C] : ((I === null || typeof I > "u") && (I = Le()), S = W[C] && W[C][I]), typeof S > "u" || !S.length || !S[0]) {
          var le = "";
          te = [];
          for (ee in W[C])
            this.terminals_[ee] && ee > Ve && te.push("'" + this.terminals_[ee] + "'");
          g.showPosition ? le = "Parse error on line " + (Z + 1) + `:
` + g.showPosition() + `
Expecting ` + te.join(", ") + ", got '" + (this.terminals_[I] || I) + "'" : le = "Parse error on line " + (Z + 1) + ": Unexpected " + (I == Ie ? "end of input" : "'" + (this.terminals_[I] || I) + "'"), this.parseError(le, {
            text: g.match,
            token: this.terminals_[I] || I,
            line: g.yylineno,
            loc: se,
            expected: te
          });
        }
        if (S[0] instanceof Array && S.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + I);
        switch (S[0]) {
          case 1:
            a.push(I), p.push(g.yytext), s.push(g.yylloc), a.push(S[1]), I = null, me = g.yyleng, _ = g.yytext, Z = g.yylineno, se = g.yylloc;
            break;
          case 2:
            if ($ = this.productions_[S[1]][1], Q.$ = p[p.length - $], Q._$ = {
              first_line: s[s.length - ($ || 1)].first_line,
              last_line: s[s.length - 1].last_line,
              first_column: s[s.length - ($ || 1)].first_column,
              last_column: s[s.length - 1].last_column
            }, Oe && (Q._$.range = [
              s[s.length - ($ || 1)].range[0],
              s[s.length - 1].range[1]
            ]), ae = this.performAction.apply(Q, [
              _,
              me,
              Z,
              L.yy,
              S[1],
              p,
              s
            ].concat(qe)), typeof ae < "u")
              return ae;
            $ && (a = a.slice(0, -1 * $ * 2), p = p.slice(0, -1 * $), s = s.slice(0, -1 * $)), a.push(this.productions_[S[1]][0]), p.push(Q.$), s.push(Q._$), be = W[a[a.length - 2]][a[a.length - 1]], a.push(be);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, ve = function() {
    var V = {
      EOF: 1,
      parseError: function(r, a) {
        if (this.yy.parser)
          this.yy.parser.parseError(r, a);
        else
          throw new Error(r);
      },
      // resets the lexer, sets new input
      setInput: function(i, r) {
        return this.yy = r || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var i = this._input[0];
        this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
        var r = i.match(/(?:\r\n?|\n).*/g);
        return r ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
      },
      // unshifts one char (or a string) into the input
      unput: function(i) {
        var r = i.length, a = i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - r), this.offset -= r;
        var n = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), a.length - 1 && (this.yylineno -= a.length - 1);
        var p = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: a ? (a.length === n.length ? this.yylloc.first_column : 0) + n[n.length - a.length].length - a[0].length : this.yylloc.first_column - r
        }, this.options.ranges && (this.yylloc.range = [p[0], p[0] + this.yyleng - r]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(i) {
        this.unput(this.match.slice(i));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var i = this.matched.substr(0, this.matched.length - this.match.length);
        return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var i = this.match;
        return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var i = this.pastInput(), r = new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + r + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(i, r) {
        var a, n, p;
        if (this.options.backtrack_lexer && (p = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (p.yylloc.range = this.yylloc.range.slice(0))), n = i[0].match(/(?:\r\n?|\n).*/g), n && (this.yylineno += n.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(i[0].length), this.matched += i[0], a = this.performAction.call(this, this.yy, this, r, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a)
          return a;
        if (this._backtrack) {
          for (var s in p)
            this[s] = p[s];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var i, r, a, n;
        this._more || (this.yytext = "", this.match = "");
        for (var p = this._currentRules(), s = 0; s < p.length; s++)
          if (a = this._input.match(this.rules[p[s]]), a && (!r || a[0].length > r[0].length)) {
            if (r = a, n = s, this.options.backtrack_lexer) {
              if (i = this.test_match(a, p[s]), i !== !1)
                return i;
              if (this._backtrack) {
                r = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return r ? (i = this.test_match(r, p[n]), i !== !1 ? i : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var r = this.next();
        return r || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(r) {
        this.conditionStack.push(r);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var r = this.conditionStack.length - 1;
        return r > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(r) {
        return r = this.conditionStack.length - 1 - Math.abs(r || 0), r >= 0 ? this.conditionStack[r] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(r) {
        this.begin(r);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(r, a, n, p) {
        switch (n) {
          case 0:
            return "title";
          case 1:
            return this.begin("acc_title"), 9;
          case 2:
            return this.popState(), "acc_title_value";
          case 3:
            return this.begin("acc_descr"), 11;
          case 4:
            return this.popState(), "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            return 5;
          case 9:
            break;
          case 10:
            break;
          case 11:
            break;
          case 12:
            return 8;
          case 13:
            return 6;
          case 14:
            return 19;
          case 15:
            return 30;
          case 16:
            return 22;
          case 17:
            return 21;
          case 18:
            return 24;
          case 19:
            return 26;
          case 20:
            return 28;
          case 21:
            return 31;
          case 22:
            return 32;
          case 23:
            return 33;
          case 24:
            return 34;
          case 25:
            return 35;
          case 26:
            return 36;
          case 27:
            return 37;
          case 28:
            return 38;
          case 29:
            return 39;
          case 30:
            return 40;
          case 31:
            return 41;
          case 32:
            return 42;
          case 33:
            return 43;
          case 34:
            return 44;
          case 35:
            return 55;
          case 36:
            return 56;
          case 37:
            return 57;
          case 38:
            return 58;
          case 39:
            return 59;
          case 40:
            return 60;
          case 41:
            return 61;
          case 42:
            return 47;
          case 43:
            return 49;
          case 44:
            return 51;
          case 45:
            return 54;
          case 46:
            return 53;
          case 47:
            this.begin("string");
            break;
          case 48:
            this.popState();
            break;
          case 49:
            return "qString";
          case 50:
            return a.yytext = a.yytext.trim(), 62;
        }
      },
      rules: [/^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:(\r?\n)+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:$)/i, /^(?:requirementDiagram\b)/i, /^(?:\{)/i, /^(?:\})/i, /^(?::)/i, /^(?:id\b)/i, /^(?:text\b)/i, /^(?:risk\b)/i, /^(?:verifyMethod\b)/i, /^(?:requirement\b)/i, /^(?:functionalRequirement\b)/i, /^(?:interfaceRequirement\b)/i, /^(?:performanceRequirement\b)/i, /^(?:physicalRequirement\b)/i, /^(?:designConstraint\b)/i, /^(?:low\b)/i, /^(?:medium\b)/i, /^(?:high\b)/i, /^(?:analysis\b)/i, /^(?:demonstration\b)/i, /^(?:inspection\b)/i, /^(?:test\b)/i, /^(?:element\b)/i, /^(?:contains\b)/i, /^(?:copies\b)/i, /^(?:derives\b)/i, /^(?:satisfies\b)/i, /^(?:verifies\b)/i, /^(?:refines\b)/i, /^(?:traces\b)/i, /^(?:type\b)/i, /^(?:docref\b)/i, /^(?:<-)/i, /^(?:->)/i, /^(?:-)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[\w][^\r\n\{\<\>\-\=]*)/i],
      conditions: { acc_descr_multiline: { rules: [6, 7], inclusive: !1 }, acc_descr: { rules: [4], inclusive: !1 }, acc_title: { rules: [2], inclusive: !1 }, unqString: { rules: [], inclusive: !1 }, token: { rules: [], inclusive: !1 }, string: { rules: [48, 49], inclusive: !1 }, INITIAL: { rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 50], inclusive: !0 } }
    };
    return V;
  }();
  ie.lexer = ve;
  function ne() {
    this.yy = {};
  }
  return ne.prototype = ie, ie.Parser = ne, new ne();
}();
ce.parser = ce;
const He = ce;
let ue = [], b = {}, K = {}, q = {}, G = {};
const We = {
  REQUIREMENT: "Requirement",
  FUNCTIONAL_REQUIREMENT: "Functional Requirement",
  INTERFACE_REQUIREMENT: "Interface Requirement",
  PERFORMANCE_REQUIREMENT: "Performance Requirement",
  PHYSICAL_REQUIREMENT: "Physical Requirement",
  DESIGN_CONSTRAINT: "Design Constraint"
}, Ke = {
  LOW_RISK: "Low",
  MED_RISK: "Medium",
  HIGH_RISK: "High"
}, Ge = {
  VERIFY_ANALYSIS: "Analysis",
  VERIFY_DEMONSTRATION: "Demonstration",
  VERIFY_INSPECTION: "Inspection",
  VERIFY_TEST: "Test"
}, je = {
  CONTAINS: "contains",
  COPIES: "copies",
  DERIVES: "derives",
  SATISFIES: "satisfies",
  VERIFIES: "verifies",
  REFINES: "refines",
  TRACES: "traces"
}, ze = (e, t) => (K[e] === void 0 && (K[e] = {
  name: e,
  type: t,
  id: b.id,
  text: b.text,
  risk: b.risk,
  verifyMethod: b.verifyMethod
}), b = {}, K[e]), Xe = () => K, Je = (e) => {
  b !== void 0 && (b.id = e);
}, Ze = (e) => {
  b !== void 0 && (b.text = e);
}, et = (e) => {
  b !== void 0 && (b.risk = e);
}, tt = (e) => {
  b !== void 0 && (b.verifyMethod = e);
}, it = (e) => (G[e] === void 0 && (G[e] = {
  name: e,
  type: q.type,
  docRef: q.docRef
}, Ne.info("Added new requirement: ", e)), q = {}, G[e]), nt = () => G, rt = (e) => {
  q !== void 0 && (q.type = e);
}, st = (e) => {
  q !== void 0 && (q.docRef = e);
}, at = (e, t, l) => {
  ue.push({
    type: e,
    src: t,
    dst: l
  });
}, lt = () => ue, ot = () => {
  ue = [], b = {}, K = {}, q = {}, G = {}, Pe();
}, ct = {
  RequirementType: We,
  RiskLevel: Ke,
  VerifyType: Ge,
  Relationships: je,
  getConfig: () => Te().req,
  addRequirement: ze,
  getRequirements: Xe,
  setNewReqId: Je,
  setNewReqText: Ze,
  setNewReqRisk: et,
  setNewReqVerifyMethod: tt,
  setAccTitle: Ce,
  getAccTitle: Fe,
  setAccDescription: Me,
  getAccDescription: De,
  addElement: it,
  getElements: nt,
  setNewElementType: rt,
  setNewElementDocRef: st,
  addRelationship: at,
  getRelationships: lt,
  clear: ot
}, ht = (e) => `

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }

`, ut = ht, he = {
  CONTAINS: "contains",
  ARROW: "arrow"
}, dt = (e, t) => {
  let l = e.append("defs").append("marker").attr("id", he.CONTAINS + "_line_ending").attr("refX", 0).attr("refY", t.line_height / 2).attr("markerWidth", t.line_height).attr("markerHeight", t.line_height).attr("orient", "auto").append("g");
  l.append("circle").attr("cx", t.line_height / 2).attr("cy", t.line_height / 2).attr("r", t.line_height / 2).attr("fill", "none"), l.append("line").attr("x1", 0).attr("x2", t.line_height).attr("y1", t.line_height / 2).attr("y2", t.line_height / 2).attr("stroke-width", 1), l.append("line").attr("y1", 0).attr("y2", t.line_height).attr("x1", t.line_height / 2).attr("x2", t.line_height / 2).attr("stroke-width", 1), e.append("defs").append("marker").attr("id", he.ARROW + "_line_ending").attr("refX", t.line_height).attr("refY", 0.5 * t.line_height).attr("markerWidth", t.line_height).attr("markerHeight", t.line_height).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L${t.line_height},${t.line_height / 2}
      M${t.line_height},${t.line_height / 2}
      L0,${t.line_height}`
  ).attr("stroke-width", 1);
}, xe = {
  ReqMarkers: he,
  insertLineEndings: dt
};
let y = {}, Se = 0;
const Ae = (e, t) => e.insert("rect", "#" + t).attr("class", "req reqBox").attr("x", 0).attr("y", 0).attr("width", y.rect_min_width + "px").attr("height", y.rect_min_height + "px"), we = (e, t, l) => {
  let c = y.rect_min_width / 2, u = e.append("text").attr("class", "req reqLabel reqTitle").attr("id", t).attr("x", c).attr("y", y.rect_padding).attr("dominant-baseline", "hanging"), d = 0;
  l.forEach((E) => {
    d == 0 ? u.append("tspan").attr("text-anchor", "middle").attr("x", y.rect_min_width / 2).attr("dy", 0).text(E) : u.append("tspan").attr("text-anchor", "middle").attr("x", y.rect_min_width / 2).attr("dy", y.line_height * 0.75).text(E), d++;
  });
  let f = 1.5 * y.rect_padding, h = d * y.line_height * 0.75, o = f + h;
  return e.append("line").attr("class", "req-title-line").attr("x1", "0").attr("x2", y.rect_min_width).attr("y1", o).attr("y2", o), {
    titleNode: u,
    y: o
  };
}, $e = (e, t, l, c) => {
  let u = e.append("text").attr("class", "req reqLabel").attr("id", t).attr("x", y.rect_padding).attr("y", c).attr("dominant-baseline", "hanging"), d = 0;
  const f = 30;
  let h = [];
  return l.forEach((o) => {
    let E = o.length;
    for (; E > f && d < 3; ) {
      let R = o.substring(0, f);
      o = o.substring(f, o.length), E = o.length, h[h.length] = R, d++;
    }
    if (d == 3) {
      let R = h[h.length - 1];
      h[h.length - 1] = R.substring(0, R.length - 4) + "...";
    } else
      h[h.length] = o;
    d = 0;
  }), h.forEach((o) => {
    u.append("tspan").attr("x", y.rect_padding).attr("dy", y.line_height).text(o);
  }), u;
}, ft = (e, t, l, c) => {
  const u = t.node().getTotalLength(), d = t.node().getPointAtLength(u * 0.5), f = "rel" + Se;
  Se++;
  const o = e.append("text").attr("class", "req relationshipLabel").attr("id", f).attr("x", d.x).attr("y", d.y).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(c).node().getBBox();
  e.insert("rect", "#" + f).attr("class", "req reqLabelBox").attr("x", d.x - o.width / 2).attr("y", d.y - o.height / 2).attr("width", o.width).attr("height", o.height).attr("fill", "white").attr("fill-opacity", "85%");
}, pt = function(e, t, l, c, u) {
  const d = l.edge(H(t.src), H(t.dst)), f = Qe().x(function(o) {
    return o.x;
  }).y(function(o) {
    return o.y;
  }), h = e.insert("path", "#" + c).attr("class", "er relationshipLine").attr("d", f(d.points)).attr("fill", "none");
  t.type == u.db.Relationships.CONTAINS ? h.attr(
    "marker-start",
    "url(" + ke.getUrl(y.arrowMarkerAbsolute) + "#" + t.type + "_line_ending)"
  ) : (h.attr("stroke-dasharray", "10,7"), h.attr(
    "marker-end",
    "url(" + ke.getUrl(y.arrowMarkerAbsolute) + "#" + xe.ReqMarkers.ARROW + "_line_ending)"
  )), ft(e, h, y, `<<${t.type}>>`);
}, yt = (e, t, l) => {
  Object.keys(e).forEach((c) => {
    let u = e[c];
    c = H(c), Ne.info("Added new requirement: ", c);
    const d = l.append("g").attr("id", c), f = "req-" + c, h = Ae(d, f);
    let o = we(d, c + "_title", [
      `<<${u.type}>>`,
      `${u.name}`
    ]);
    $e(
      d,
      c + "_body",
      [
        `Id: ${u.id}`,
        `Text: ${u.text}`,
        `Risk: ${u.risk}`,
        `Verification: ${u.verifyMethod}`
      ],
      o.y
    );
    const E = h.node().getBBox();
    t.setNode(c, {
      width: E.width,
      height: E.height,
      shape: "rect",
      id: c
    });
  });
}, _t = (e, t, l) => {
  Object.keys(e).forEach((c) => {
    let u = e[c];
    const d = H(c), f = l.append("g").attr("id", d), h = "element-" + d, o = Ae(f, h);
    let E = we(f, h + "_title", ["<<Element>>", `${c}`]);
    $e(
      f,
      h + "_body",
      [`Type: ${u.type || "Not Specified"}`, `Doc Ref: ${u.docRef || "None"}`],
      E.y
    );
    const R = o.node().getBBox();
    t.setNode(d, {
      width: R.width,
      height: R.height,
      shape: "rect",
      id: d
    });
  });
}, Et = (e, t) => (e.forEach(function(l) {
  let c = H(l.src), u = H(l.dst);
  t.setEdge(c, u, { relationship: l });
}), e), gt = function(e, t) {
  t.nodes().forEach(function(l) {
    l !== void 0 && t.node(l) !== void 0 && (e.select("#" + l), e.select("#" + l).attr(
      "transform",
      "translate(" + (t.node(l).x - t.node(l).width / 2) + "," + (t.node(l).y - t.node(l).height / 2) + " )"
    ));
  });
}, H = (e) => e.replace(/\s/g, "").replace(/\./g, "_"), Rt = (e, t, l, c) => {
  y = Te().requirement;
  const u = y.securityLevel;
  let d;
  u === "sandbox" && (d = oe("#i" + t));
  const h = (u === "sandbox" ? oe(d.nodes()[0].contentDocument.body) : oe("body")).select(`[id='${t}']`);
  xe.insertLineEndings(h, y);
  const o = new Ue({
    multigraph: !1,
    compound: !1,
    directed: !0
  }).setGraph({
    rankdir: y.layoutDirection,
    marginx: 20,
    marginy: 20,
    nodesep: 100,
    edgesep: 100,
    ranksep: 100
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let E = c.db.getRequirements(), R = c.db.getElements(), A = c.db.getRelationships();
  yt(E, o, h), _t(R, o, h), Et(A, o), Be(o), gt(h, o), A.forEach(function(x) {
    pt(h, x, o, t, c);
  });
  const T = y.rect_padding, N = h.node().getBBox(), w = N.width + T * 2, k = N.height + T * 2;
  Ye(h, k, w, y.useMaxWidth), h.attr("viewBox", `${N.x - T} ${N.y - T} ${w} ${k}`);
}, mt = {
  draw: Rt
}, xt = {
  parser: He,
  db: ct,
  renderer: mt,
  styles: ut
};
export {
  xt as diagram
};
