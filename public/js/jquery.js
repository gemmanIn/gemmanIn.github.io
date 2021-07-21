/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ !(function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ?
        (module.exports = e.document ?
            t(e, !0) :
            function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e);
            }) :
        t(e);
})("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ?

        function(e) {
            return t.flat.call(e);
        } :
        function(e) {
            return t.concat.apply([], e);
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        x = function(e) {
            return null != e && e === e.window;
        },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement("script");
        if (((o.text = e), t))
            for (r in c)(i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
    }
    var f = "3.5.1",
        S = function(e, t) {
            return new S.fn.init(e, t);
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this);
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function(e) {
            return S.each(this, e);
        },
        map: function(n) {
            return this.pushStack(
                S.map(this, function(e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(
                S.grep(this, function(e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function() {
            return this.pushStack(
                S.grep(this, function(e, t) {
                    return t % 2;
                })
            );
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
    }),
    (S.extend = S.fn.extend = function() {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || m(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    (r = e[t]),
                    "__proto__" !== t &&
                    a !== r &&
                    (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ?
                        ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}), (i = !1), (a[t] = S.extend(l, o, r))) :
                        void 0 !== r && (a[t] = r));
        return a;
    }),
    S.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e);
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || ("function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l));
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function(e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
            },
            each: function(e, t) {
                var n,
                    r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break;
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n);
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function(e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (p(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a);
            },
            guid: 1,
            support: y,
        }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
        });
    var d = (function(n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            v,
            s,
            c,
            y,
            S = "sizzle" + 1 * new Date(),
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0;
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            oe = function() {
                T();
            },
            ae = be(
                function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                }, { dir: "parentNode", next: "legend" }
            );
        try {
            H.apply((t = O.call(p.childNodes)), p.childNodes), t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length ?

                    function(e, t) {
                        L.apply(e, O.call(t));
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while ((e[n++] = t[r++]));
                        e.length = n - 1;
                    },
            };
        }

        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (((n = n || []), "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
            if (!r && (T(e), (e = e || C), E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if ((i = u[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
                        ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) || ((s = e.getAttribute("id")) ? (s = s.replace(re, ie)) : e.setAttribute("id", (s = S))), (o = (l = h(t)).length);
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",");
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === S && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r);
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], (e[t + " "] = n);
            };
        }

        function le(e) {
            return (e[S] = !0), e;
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while ((n = n.nextSibling))
                    if (n === t) return -1;
            return e ? 1 : -1;
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }

        function ge(t) {
            return function(e) {
                return "form" in e ?
                    e.parentNode && !1 === e.disabled ?
                    "label" in e ?
                    "label" in e.parentNode ?
                    e.parentNode.disabled === t :
                    e.disabled === t :
                    e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t) :
                    e.disabled === t :
                    "label" in e && e.disabled === t;
            };
        }

        function ve(a) {
            return le(function(o) {
                return (
                    (o = +o),
                    le(function(e, t) {
                        var n,
                            r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for (e in ((d = se.support = {}),
                (i = se.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !Y.test(t || (n && n.nodeName) || "HTML");
                }),
                (T = se.setDocument = function(e) {
                    var t,
                        n,
                        r = e ? e.ownerDocument || e : p;
                    return (
                        r != C &&
                        9 === r.nodeType &&
                        r.documentElement &&
                        ((a = (C = r).documentElement),
                            (E = !i(C)),
                            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
                            (d.scope = ce(function(e) {
                                return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                            })),
                            (d.attributes = ce(function(e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (d.getElementsByTagName = ce(function(e) {
                                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
                            })),
                            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
                            (d.getById = ce(function(e) {
                                return (a.appendChild(e).id = S), !C.getElementsByName || !C.getElementsByName(S).length;
                            })),
                            d.getById ?
                            ((b.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                (b.find.ID = function(e, t) {
                                    if ("undefined" != typeof t.getElementById && E) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                })) :
                            ((b.filter.ID = function(e) {
                                    var n = e.replace(te, ne);
                                    return function(e) {
                                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                        return t && t.value === n;
                                    };
                                }),
                                (b.find.ID = function(e, t) {
                                    if ("undefined" != typeof t.getElementById && E) {
                                        var n,
                                            r,
                                            i,
                                            o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            (i = t.getElementsByName(e)), (r = 0);
                                            while ((o = i[r++]))
                                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        }
                                        return [];
                                    }
                                })),
                            (b.find.TAG = d.getElementsByTagName ?

                                function(e, t) {
                                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
                                } :
                                function(e, t) {
                                    var n,
                                        r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                        return r;
                                    }
                                    return o;
                                }),
                            (b.find.CLASS =
                                d.getElementsByClassName &&
                                function(e, t) {
                                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
                                }),
                            (s = []),
                            (v = []),
                            (d.qsa = K.test(C.querySelectorAll)) &&
                            (ce(function(e) {
                                    var t;
                                    (a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                                        e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                                        (t = C.createElement("input")).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                                        e.querySelectorAll(":checked").length || v.push(":checked"),
                                        e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                                        e.querySelectorAll("\\\f"),
                                        v.push("[\\r\\n\\f]");
                                }),
                                ce(function(e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = C.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                        (a.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        v.push(",.*:");
                                })),
                            (d.matchesSelector = K.test((c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector))) &&
                            ce(function(e) {
                                (d.disconnectedMatch = c.call(e, "*")), c.call(e, "[s!='']:x"), s.push("!=", F);
                            }),
                            (v = v.length && new RegExp(v.join("|"))),
                            (s = s.length && new RegExp(s.join("|"))),
                            (t = K.test(a.compareDocumentPosition)),
                            (y =
                                t || K.test(a.contains) ?

                                function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                } :
                                function(e, t) {
                                    if (t)
                                        while ((t = t.parentNode))
                                            if (t === e) return !0;
                                    return !1;
                                }),
                            (D = t ?

                                function(e, t) {
                                    if (e === t) return (l = !0), 0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        n ||
                                        (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!d.sortDetached && t.compareDocumentPosition(e) === n) ?
                                            e == C || (e.ownerDocument == p && y(p, e)) ?
                                            -1 :
                                            t == C || (t.ownerDocument == p && y(p, t)) ?
                                            1 :
                                            u ?
                                            P(u, e) - P(u, t) :
                                            0 :
                                            4 & n ?
                                            -1 :
                                            1)
                                    );
                                } :
                                function(e, t) {
                                    if (e === t) return (l = !0), 0;
                                    var n,
                                        r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        a = [e],
                                        s = [t];
                                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                                    if (i === o) return pe(e, t);
                                    n = e;
                                    while ((n = n.parentNode)) a.unshift(n);
                                    n = t;
                                    while ((n = n.parentNode)) s.unshift(n);
                                    while (a[r] === s[r]) r++;
                                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
                                })),
                        C
                    );
                }),
                (se.matches = function(e, t) {
                    return se(e, null, null, t);
                }),
                (se.matchesSelector = function(e, t) {
                    if ((T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))))
                        try {
                            var n = c.call(e, t);
                            if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                        } catch (e) {
                            N(t, !0);
                        }
                    return 0 < se(t, C, null, [e]).length;
                }),
                (se.contains = function(e, t) {
                    return (e.ownerDocument || e) != C && T(e), y(e, t);
                }),
                (se.attr = function(e, t) {
                    (e.ownerDocument || e) != C && T(e);
                    var n = b.attrHandle[t.toLowerCase()],
                        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                    return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
                (se.escape = function(e) {
                    return (e + "").replace(re, ie);
                }),
                (se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (se.uniqueSort = function(e) {
                    var t,
                        n = [],
                        r = 0,
                        i = 0;
                    if (((l = !d.detectDuplicates), (u = !d.sortStable && e.slice(0)), e.sort(D), l)) {
                        while ((t = e[i++])) t === e[i] && (r = n.push(i));
                        while (r--) e.splice(n[r], 1);
                    }
                    return (u = null), e;
                }),
                (o = se.getText = function(e) {
                    var t,
                        n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === i || 4 === i) return e.nodeValue;
                    } else
                        while ((t = e[r++])) n += o(t);
                    return n;
                }),
                ((b = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function(e) {
                            return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function(e) {
                            var t,
                                n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ?
                                null :
                                (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ?

                                function() {
                                    return !0;
                                } :
                                function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t;
                                };
                        },
                        CLASS: function(e) {
                            var t = m[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                    m(e, function(e) {
                                        return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function(n, r, i) {
                            return function(e) {
                                var t = se.attr(e, n);
                                return null == t ?
                                    "!=" === r :
                                    !r ||
                                    ((t += ""),
                                        "=" === r ?
                                        t === i :
                                        "!=" === r ?
                                        t !== i :
                                        "^=" === r ?
                                        i && 0 === t.indexOf(i) :
                                        "*=" === r ?
                                        i && -1 < t.indexOf(i) :
                                        "$=" === r ?
                                        i && t.slice(-i.length) === i :
                                        "~=" === r ?
                                        -1 < (" " + t.replace(B, " ") + " ").indexOf(i) :
                                        "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                            };
                        },
                        CHILD: function(h, e, t, g, v) {
                            var y = "nth" !== h.slice(0, 3),
                                m = "last" !== h.slice(-4),
                                x = "of-type" === e;
                            return 1 === g && 0 === v ?

                                function(e) {
                                    return !!e.parentNode;
                                } :
                                function(e, t, n) {
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        u,
                                        l = y !== m ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        f = x && e.nodeName.toLowerCase(),
                                        p = !n && !x,
                                        d = !1;
                                    if (c) {
                                        if (y) {
                                            while (l) {
                                                a = e;
                                                while ((a = a[l]))
                                                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                                u = l = "only" === h && !u && "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                                            (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2]), (a = s && c.childNodes[s]);
                                            while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                                if (1 === a.nodeType && ++d && a === e) {
                                                    i[h] = [k, s, d];
                                                    break;
                                                }
                                        } else if ((p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d))
                                            while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                                                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                        return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                                    }
                                };
                        },
                        PSEUDO: function(e, o) {
                            var t,
                                a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return a[S] ?
                                a(o) :
                                1 < a.length ?
                                ((t = [e, e, "", o]),
                                    b.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                    le(function(e, t) {
                                        var n,
                                            r = a(e, o),
                                            i = r.length;
                                        while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                                    }) :
                                    function(e) {
                                        return a(e, 0, t);
                                    }) :
                                a;
                        },
                    },
                    pseudos: {
                        not: le(function(e) {
                            var r = [],
                                i = [],
                                s = f(e.replace($, "$1"));
                            return s[S] ?
                                le(function(e, t, n, r) {
                                    var i,
                                        o = s(e, null, r, []),
                                        a = e.length;
                                    while (a--)(i = o[a]) && (e[a] = !(t[a] = i));
                                }) :
                                function(e, t, n) {
                                    return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                                };
                        }),
                        has: le(function(t) {
                            return function(e) {
                                return 0 < se(t, e).length;
                            };
                        }),
                        contains: le(function(t) {
                            return (
                                (t = t.replace(te, ne)),
                                function(e) {
                                    return -1 < (e.textContent || o(e)).indexOf(t);
                                }
                            );
                        }),
                        lang: le(function(n) {
                            return (
                                V.test(n || "") || se.error("unsupported lang: " + n),
                                (n = n.replace(te, ne).toLowerCase()),
                                function(e) {
                                    var t;
                                    do {
                                        if ((t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id;
                        },
                        root: function(e) {
                            return e === a;
                        },
                        focus: function(e) {
                            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !b.pseudos.empty(e);
                        },
                        header: function(e) {
                            return J.test(e.nodeName);
                        },
                        input: function(e) {
                            return Q.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: ve(function() {
                            return [0];
                        }),
                        last: ve(function(e, t) {
                            return [t - 1];
                        }),
                        eq: ve(function(e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: ve(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: ve(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: ve(function(e, t, n) {
                            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                            return e;
                        }),
                        gt: ve(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e;
                        }),
                    },
                }).pseudos.nth = b.pseudos.eq), { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ?

                function(e, t, n) {
                    while ((e = e[u]))
                        if (1 === e.nodeType || f) return s(e, t, n);
                    return !1;
                } :
                function(e, t, n) {
                    var r,
                        i,
                        o,
                        a = [k, p];
                    if (n) {
                        while ((e = e[u]))
                            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                    } else
                        while ((e = e[u]))
                            if (1 === e.nodeType || f)
                                if (((i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === k && r[1] === p) return (a[2] = r[2]);
                                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                                }
                    return !1;
                };
        }

        function we(i) {
            return 1 < i.length ?

                function(e, t, n) {
                    var r = i.length;
                    while (r--)
                        if (!i[r](e, t, n)) return !1;
                    return !0;
                } :
                i[0];
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }

        function Ce(d, h, g, v, y, e) {
            return (
                v && !v[S] && (v = Ce(v)),
                y && !y[S] && (y = Ce(y, e)),
                le(function(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = [],
                        u = [],
                        l = t.length,
                        c =
                        e ||
                        (function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                            return n;
                        })(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || (!e && h) ? c : Te(c, s, d, n, r),
                        p = g ? (y || (e ? d : l || v) ? [] : t) : f;
                    if ((g && g(f, p, n, r), v)) {
                        (i = Te(p, u)), v(i, [], n, r), (o = i.length);
                        while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                (i = []), (o = p.length);
                                while (o--)(a = p[o]) && i.push((f[o] = a));
                                y(null, (p = []), i, r);
                            }
                            o = p.length;
                            while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                        }
                    } else(p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
                })
            );
        }

        function Ee(e) {
            for (
                var i,
                    t,
                    n,
                    r = e.length,
                    o = b.relative[e[0].type],
                    a = o || b.relative[" "],
                    s = o ? 1 : 0,
                    u = be(
                        function(e) {
                            return e === i;
                        },
                        a, !0
                    ),
                    l = be(
                        function(e) {
                            return -1 < P(i, e);
                        },
                        a, !0
                    ),
                    c = [
                        function(e, t, n) {
                            var r = (!o && (n || t !== w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                            return (i = null), r;
                        },
                    ]; s < r; s++
            )
                if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee((e = e.slice(n))), n < r && xe(e));
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (me.prototype = b.filters = b.pseudos),
            (b.setFilters = new me()),
            (h = se.tokenize = function(e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = x[e + " "];
                if (l) return t ? 0 : l.slice(0);
                (a = e), (s = []), (u = b.preFilter);
                while (a) {
                    for (o in ((n && !(r = _.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                            (n = !1),
                            (r = z.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace($, " ") }), (a = a.slice(n.length))),
                            b.filter))
                        !(r = G[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
            }),
            (f = se.compile = function(e, t) {
                var n,
                    v,
                    y,
                    m,
                    x,
                    r,
                    i = [],
                    o = [],
                    a = A[e + " "];
                if (!a) {
                    t || (t = h(e)), (n = t.length);
                    while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                    (a = A(
                        e,
                        ((v = o),
                            (m = 0 < (y = i).length),
                            (x = 0 < v.length),
                            (r = function(e, t, n, r, i) {
                                var o,
                                    a,
                                    s,
                                    u = 0,
                                    l = "0",
                                    c = e && [],
                                    f = [],
                                    p = w,
                                    d = e || (x && b.find.TAG("*", i)),
                                    h = (k += null == p ? 1 : Math.random() || 0.1),
                                    g = d.length;
                                for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                                    if (x && o) {
                                        (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                                        while ((s = v[a++]))
                                            if (s(o, t || C, n)) {
                                                r.push(o);
                                                break;
                                            }
                                        i && (k = h);
                                    }
                                    m && ((o = !s && o) && u--, e && c.push(o));
                                }
                                if (((u += l), m && l !== u)) {
                                    a = 0;
                                    while ((s = y[a++])) s(c, f, t, n);
                                    if (e) {
                                        if (0 < u)
                                            while (l--) c[l] || f[l] || (f[l] = q.call(r));
                                        f = Te(f);
                                    }
                                    H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                                }
                                return i && ((k = h), (w = p)), c;
                            }),
                            m ? le(r) : r)
                    )).selector = e;
                }
                return a;
            }),
            (g = se.select = function(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = "function" == typeof e && e,
                    c = !r && h((e = l.selector || e));
                if (((n = n || []), 1 === c.length)) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                        l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (((a = o[i]), b.relative[(s = a.type)])) break;
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), (ee.test(o[0].type) && ye(t.parentNode)) || t))) {
                            if ((o.splice(i, 1), !(e = r.length && xe(o)))) return H.apply(n, r), n;
                            break;
                        }
                    }
                }
                return (l || f(e, c))(r, t, !E, n, !t || (ee.test(e) && ye(t.parentNode)) || t), n;
            }),
            (d.sortStable = S.split("").sort(D).join("") === S),
            (d.detectDuplicates = !!l),
            T(),
            (d.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
            })),
            ce(function(e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
            fe("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (d.attributes &&
                ce(function(e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
            fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            ce(function(e) {
                return null == e.getAttribute("disabled");
            }) ||
            fe(R, function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }),
            se
        );
    })(C);
    (S.find = d), (S.expr = d.selectors), (S.expr[":"] = S.expr.pseudos), (S.uniqueSort = S.unique = d.uniqueSort), (S.text = d.getText), (S.isXMLDoc = d.isXML), (S.contains = d.contains), (S.escapeSelector = d.escape);
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return m(n) ?
            S.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r;
            }) :
            n.nodeType ?
            S.grep(e, function(e) {
                return (e === n) !== r;
            }) :
            "string" != typeof n ?
            S.grep(e, function(e) {
                return -1 < i.call(n, e) !== r;
            }) :
            S.filter(n, e, r);
    }
    (S.filter = function(e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ?
            S.find.matchesSelector(r, e) ? [r] : [] :
            S.find.matches(
                e,
                S.grep(t, function(e) {
                    return 1 === e.nodeType;
                })
            )
        );
    }),
    S.fn.extend({
        find: function(e) {
            var t,
                n,
                r = this.length,
                i = this;
            if ("string" != typeof e)
                return this.pushStack(
                    S(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (S.contains(i[t], this)) return !0;
                    })
                );
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0));
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
        },
    });
    var j,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || j), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
    }).prototype = S.fn),
    (j = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    S.fn.extend({
            has: function(e) {
                var t = S(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (S.contains(this, t[e])) return !0;
                });
            },
            closest: function(e, t) {
                var n,
                    r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && S(e);
                if (!k.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                o.push(n);
                                break;
                            }
                return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
            },
            index: function(e) {
                return e ? ("string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function(e, t) {
                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
        S.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return h(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return h(e, "parentNode", n);
                },
                next: function(e) {
                    return O(e, "nextSibling");
                },
                prev: function(e) {
                    return O(e, "previousSibling");
                },
                nextAll: function(e) {
                    return h(e, "nextSibling");
                },
                prevAll: function(e) {
                    return h(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return h(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return h(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return T(e.firstChild);
                },
                contents: function(e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
                },
            },
            function(r, i) {
                S.fn[r] = function(e, t) {
                    var n = S.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e;
    }

    function M(e) {
        throw e;
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (S.Callbacks = function(r) {
        var e, n;
        r =
            "string" == typeof r ?
            ((e = r),
                (n = {}),
                S.each(e.match(P) || [], function(e, t) {
                    n[t] = !0;
                }),
                n) :
            S.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
                }
                r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
            },
            f = {
                add: function() {
                    return (
                        s &&
                        (t && !i && ((l = s.length - 1), u.push(t)),
                            (function n(e) {
                                S.each(e, function(e, t) {
                                    m(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                                });
                            })(arguments),
                            t && !i && c()),
                        this
                    );
                },
                remove: function() {
                    return (
                        S.each(arguments, function(e, t) {
                            var n;
                            while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length;
                },
                empty: function() {
                    return s && (s = []), this;
                },
                disable: function() {
                    return (a = u = []), (s = t = ""), this;
                },
                disabled: function() {
                    return !s;
                },
                lock: function() {
                    return (a = u = []), t || i || (s = t = ""), this;
                },
                locked: function() {
                    return !!a;
                },
                fireWith: function(e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
                },
                fire: function() {
                    return f.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!o;
                },
            };
        return f;
    }),
    S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i;
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this;
                    },
                    catch: function(e) {
                        return a.then(null, e);
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                (i = null);
                        }).promise();
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                            m(t) ?
                                                s ?
                                                t.call(e, l(u, o, R, s), l(u, o, M, s)) :
                                                (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) :
                                                (a !== R && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                                        }
                                    },
                                    t = s ?
                                    e :
                                    function() {
                                        try {
                                            e();
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
                            };
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
                        }).promise();
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a;
                    },
                },
                s = {};
            return (
                S.each(o, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    (a[t[1]] = n.add),
                    r &&
                        n.add(
                            function() {
                                i = r;
                            },
                            o[3 - e][2].disable,
                            o[3 - e][3].disable,
                            o[0][2].lock,
                            o[0][3].lock
                        ),
                        n.add(t[3].fire),
                        (s[t[0]] = function() {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                        }),
                        (s[t[0] + "With"] = n.fireWith);
                }),
                a.promise(s),
                e && e.call(s, s),
                s
            );
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        (r[t] = this), (i[t] = 1 < arguments.length ? s.call(arguments) : e), --n || o.resolveWith(r, i);
                    };
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise();
        },
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
    (S.readyException = function(e) {
        C.setTimeout(function() {
            throw e;
        });
    });
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
    }
    (S.fn.ready = function(e) {
        return (
            F.then(e)["catch"](function(e) {
                S.readyException(e);
            }),
            this
        );
    }),
    S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || F.resolveWith(E, [S]);
            },
        }),
        (S.ready.then = F.then),
        "complete" === E.readyState || ("loading" !== E.readyState && !E.documentElement.doScroll) ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                    m(r) || (a = !0),
                    l &&
                    (a ?
                        (t.call(e, r), (t = null)) :
                        ((l = t),
                            (t = function(e, t, n) {
                                return l.call(S(e), n);
                            }))),
                    t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase();
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U);
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function G() {
        this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
    (G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
        },
        set: function(e, t, n) {
            var r,
                i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n,
                r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]];
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t);
        },
    });
    var Y = new G(),
        Q = new G(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof(n = e.getAttribute(r)))) {
                try {
                    n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i));
                } catch (e) {}
                Q.set(e, t, n);
            } else n = void 0;
        return n;
    }
    S.extend({
            hasData: function(e) {
                return Q.hasData(e) || Y.hasData(e);
            },
            data: function(e, t, n) {
                return Q.access(e, t, n);
            },
            removeData: function(e, t) {
                Q.remove(e, t);
            },
            _data: function(e, t, n) {
                return Y.access(e, t, n);
            },
            _removeData: function(e, t) {
                Y.remove(e, t);
            },
        }),
        S.fn.extend({
            data: function(n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = X(r.slice(5))), Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof n ?
                    this.each(function() {
                        Q.set(this, n);
                    }) :
                    $(
                        this,
                        function(e) {
                            var t;
                            if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                            this.each(function() {
                                Q.set(this, n, e);
                            });
                        },
                        null,
                        e,
                        1 < arguments.length,
                        null, !0
                    );
            },
            removeData: function(e) {
                return this.each(function() {
                    Q.remove(this, e);
                });
            },
        }),
        S.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, S.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = S._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                    ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function() {
                                S.dequeue(e, t);
                            },
                            o
                        )), !r && o && o.empty.fire();
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: S.Callbacks("once memory").add(function() {
                            Y.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        S.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e ?
                    S.queue(this[0], t) :
                    void 0 === n ?
                    this :
                    this.each(function() {
                        var e = S.queue(this, t, n);
                        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                    })
                );
            },
            dequeue: function(e) {
                return this.each(function() {
                    S.dequeue(this, e);
                });
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", []);
            },
            promise: function(e, t) {
                var n,
                    r = 1,
                    i = S.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    re.getRootNode &&
        (ie = function(e) {
            return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
        });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === S.css(e, "display"));
    };

    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ?

            function() {
                return r.cur();
            } :
            function() {
                return S.css(e, t, "");
            },
            u = s(),
            l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || ("px" !== l && +u)) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), S.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
            ((n = r.style.display),
                t ?
                ("none" === n && ((l[c] = Y.get(r, "display") || null), l[c] || (r.style.display = "")),
                    "" === r.style.display &&
                    ae(r) &&
                    (l[c] =
                        ((u = a = o = void 0),
                            (a = (i = r).ownerDocument),
                            (s = i.nodeName),
                            (u = ue[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = S.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (ue[s] = u))))) :
                "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S.fn.extend({
        show: function() {
            return le(this, !0);
        },
        hide: function() {
            return le(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ?
                e ?
                this.show() :
                this.hide() :
                this.each(function() {
                    ae(this) ? S(this).show() : S(this).hide();
                });
        },
    });
    var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = "<option></option>"),
        (y.option = !!ce.lastChild);
    var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n;
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td), y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]), (c = u[0]);
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)) {
            c = 0;
            while ((o = a[c++])) he.test(o.type || "") && n.push(o);
        }
        return f;
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0;
    }

    function Ee() {
        return !1;
    }

    function Se(e, t) {
        return (
            (e ===
                (function() {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) ke(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Ee;
        else if (!i) return e;
        return (
            1 === o &&
            ((a = i),
                ((i = function(e) {
                    return S().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = S.guid++))),
            e.each(function() {
                S.event.add(this, t, i, r, n);
            })
        );
    }

    function Ae(e, i, o) {
        o
            ?
            (Y.set(e, i, !1),
                S.event.add(e, i, {
                    namespace: !1,
                    handler: function(e) {
                        var t,
                            n,
                            r = Y.get(this, i);
                        if (1 & e.isTrigger && this[i]) {
                            if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                            else if (((r = s.call(arguments)), Y.set(this, i, r), (t = o(this, i)), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}), r !== n))
                                return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                        } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
                    },
                })) :
            void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
    }
    (S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.get(t);
            if (V(t)) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && S.find.matchesSelector(re, i),
                    n.guid || (n.guid = S.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                    (a = v.handle = function(e) {
                        return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
                    }),
                    (l = (e = (e || "").match(P) || [""]).length);
                while (l--)
                    (d = g = (s = Te.exec(e[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                    ((f = S.event.special[d] || {}),
                        (d = (i ? f.delegateType : f.bindType) || d),
                        (f = S.event.special[d] || {}),
                        (c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                        (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
                        f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        (S.event.global[d] = !0));
            }
        },
        remove: function(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (((d = g = (s = Te.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        (f = S.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                            (!i && g !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (s && !s.test(c.namespace)) ||
                            (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                            (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || S.removeEvent(e, d, v.handle), delete u[d]);
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                (a = S.event.handlers.call(this, u, l)), (t = 0);
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    (u.currentTarget = i.elem), (n = 0);
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                        ((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ?

                    function() {
                        if (this.originalEvent) return e(this.originalEvent);
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function(e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
                },
                _default: function(e) {
                    var t = e.target;
                    return (pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click")) || A(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
    (S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ?
            ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Ee),
                (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget)) :
            (this.type = e),
            t && S.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        },
    }),
    S.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && be.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && we.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            S.event.addProp
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            S.event.special[e] = {
                setup: function() {
                    return Ae(this, e, Se), !1;
                },
                trigger: function() {
                    return Ae(this, e), !0;
                },
                delegateType: t,
            };
        }),
        S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
            S.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t,
                        n = e.relatedTarget,
                        r = e.handleObj;
                    return (n && (n === this || S.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
                },
            };
        }),
        S.fn.extend({
            on: function(e, t, n, r) {
                return ke(this, e, t, n, r);
            },
            one: function(e, t, n, r) {
                return ke(this, e, t, n, r, 1);
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)), !1 === n && (n = Ee),
                    this.each(function() {
                        S.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
    }

    function Le(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in (Y.remove(t, "handle events"), s))
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
            });
        if (f && ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)(u = e), c !== p && ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
                    (u = a[c]),
                    he.test(u.type || "") &&
                    !Y.access(u, "globalEval") &&
                    S.contains(l, u) &&
                    (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l));
        }
        return n;
    }

    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    S.extend({
            htmlPrefilter: function(e) {
                return e;
            },
            clone: function(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = e.cloneNode(!0),
                    f = ie(e);
                if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
                    for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
                        (s = o[r]), (u = a[r]), void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                    else Oe(e, c);
                return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
            },
            cleanData: function(e) {
                for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (V(n)) {
                        if ((t = n[Y.expando])) {
                            if (t.events)
                                for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                            n[Y.expando] = void 0;
                        }
                        n[Q.expando] && (n[Q.expando] = void 0);
                    }
            },
        }),
        S.fn.extend({
            detach: function(e) {
                return Re(this, e, !0);
            },
            remove: function(e) {
                return Re(this, e);
            },
            text: function(e) {
                return $(
                    this,
                    function(e) {
                        return void 0 === e ?
                            S.text(this) :
                            this.empty().each(function() {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function() {
                return Pe(this, arguments, function(e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || qe(this, e).appendChild(e);
                });
            },
            prepend: function() {
                return Pe(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = qe(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function() {
                return Pe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function() {
                return Pe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function(e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function() {
                        return S.clone(this, e, t);
                    })
                );
            },
            html: function(e) {
                return $(
                    this,
                    function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function() {
                var n = [];
                return Pe(
                    this,
                    arguments,
                    function(e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) {
            S.fn[e] = function(e) {
                for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)(t = o === i ? this : this.clone(!0)), S(r[o])[a](t), u.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = C), t.getComputedStyle(e);
        },
        We = function(e, t, n) {
            var r,
                i,
                o = {};
            for (i in t)(o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
        },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || Ie(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }!(function() {
        function e() {
            if (l) {
                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                (n = "1%" !== e.top),
                (s = 12 === t(e.marginLeft)),
                (l.style.right = "60%"),
                (o = 36 === t(e.right)),
                (r = 36 === t(e.width)),
                (l.style.position = "absolute"),
                (i = 12 === t(l.offsetWidth / 3)),
                re.removeChild(u),
                    (l = null);
            }
        }

        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = E.createElement("div"),
            l = E.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
                (l.cloneNode(!0).style.backgroundClip = ""),
                (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
                S.extend(y, {
                    boxSizingReliable: function() {
                        return e(), r;
                    },
                    pixelBoxStyles: function() {
                        return e(), o;
                    },
                    pixelPosition: function() {
                        return e(), n;
                    },
                    reliableMarginLeft: function() {
                        return e(), s;
                    },
                    scrollboxSize: function() {
                        return e(), i;
                    },
                    reliableTrDimensions: function() {
                        var e, t, n, r;
                        return (
                            null == a &&
                            ((e = E.createElement("table")),
                                (t = E.createElement("tr")),
                                (n = E.createElement("div")),
                                (e.style.cssText = "position:absolute;left:-11111px"),
                                (t.style.height = "1px"),
                                (n.style.height = "9px"),
                                re.appendChild(e).appendChild(t).appendChild(n),
                                (r = C.getComputedStyle(t)),
                                (a = 3 < parseInt(r.height)),
                                re.removeChild(e)),
                            a
                        );
                    },
                }));
    })();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return (
            t ||
            (e in ze ?
                e :
                (Ue[e] =
                    (function(e) {
                        var t = e[0].toUpperCase() + e.slice(1),
                            n = _e.length;
                        while (n--)
                            if ((e = _e[n] + t) in ze) return e;
                    })(e) || e))
        );
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ?
            ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) :
            ((u += S.css(e, "padding" + ne[a], !0, i)), "padding" !== n ? (u += S.css(e, "border" + ne[a] + "Width", !0, i)) : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!y.boxSizingReliable() && i) || (!y.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === S.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        );
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Be(e, "opacity");
                            return "" === n ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i,
                        o,
                        a,
                        s = X(t),
                        u = Ge.test(t),
                        l = e.style;
                    if ((u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = se(e, t, i)), (o = "number")),
                        null != n &&
                        n == n &&
                        ("number" !== o || u || (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
                            y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                            (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
                }
            },
            css: function(e, t, n, r) {
                var i,
                    o,
                    a,
                    s = X(t);
                return (
                    Ge.test(t) || (t = Xe(s)),
                    (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                    void 0 === i && (i = Be(e, t, r)),
                    "normal" === i && t in Qe && (i = Qe[t]),
                    "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
                );
            },
        }),
        S.each(["height", "width"], function(e, u) {
            S.cssHooks[u] = {
                get: function(e, t, n) {
                    if (t)
                        return !Ve.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width) ?
                            Ze(e, u, n) :
                            We(e, Ye, function() {
                                return Ze(e, u, n);
                            });
                },
                set: function(e, t, n) {
                    var r,
                        i = Ie(e),
                        o = !y.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                        s = n ? Ke(e, u, n, a, i) : 0;
                    return (
                        a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - 0.5)),
                        s && (r = te.exec(t)) && "px" !== (r[3] || "px") && ((e.style[u] = t), (t = S.css(e, u))),
                        Je(0, t, s)
                    );
                },
            };
        }),
        (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
            if (t)
                return (
                    (parseFloat(Be(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        We(e, { marginLeft: 0 }, function() {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function(i, o) {
            (S.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
            "margin" !== i && (S.cssHooks[i + o].set = Je);
        }),
        S.fn.extend({
            css: function(e, t) {
                return $(
                    this,
                    function(e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((S.Tween = et).prototype = {
            constructor: et,
            init: function(e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || S.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function() {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this);
            },
            run: function(e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function(e) {
                    S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)]) ? (e.elem[e.prop] = e.now) : S.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (S.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (S.fx = et.prototype.init),
        (S.fx.step = {});
    var tt,
        nt,
        rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
    }

    function ut() {
        return (
            C.setTimeout(function() {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }

    function lt(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if ((r = i[o].call(n, t, e))) return r;
    }

    function ft(o, e, t) {
        var n,
            a,
            r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem;
            }),
            u = function() {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n;
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
                },
            }),
            c = l.props;
        for (!(function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (((i = t[(r = X(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete e[r], o))(n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(c, l.opts.specialEasing); r < i; r++)
            if ((n = ft.prefilters[r].call(l, o, c, l.opts))) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return (
            S.map(c, ct, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (S.Animation = S.extend(ft, {
        tweeners: {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function(e, t) {
            m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
            for (var n, r = 0, i = e.length; r < i; r++)(n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
        },
        prefilters: [
            function(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    v = Y.get(e, "fxshow");
                for (r in (n.queue ||
                        (null == (a = S._queueHooks(e, "fx")).unqueued &&
                            ((a.unqueued = 0),
                                (s = a.empty.fire),
                                (a.empty.fire = function() {
                                    a.unqueued || s();
                                })),
                            a.unqueued++,
                            p.always(function() {
                                p.always(function() {
                                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                                });
                            })),
                        t))
                    if (((i = t[r]), ot.test(i))) {
                        if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = (v && v[r]) || S.style(e, r);
                    }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in (f &&
                            1 === e.nodeType &&
                            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                null == (l = v && v.display) && (l = Y.get(e, "display")),
                                "none" === (c = S.css(e, "display")) && (l ? (c = l) : (le([e], !0), (l = e.style.display || l), (c = S.css(e, "display")), le([e]))),
                                ("inline" === c || ("inline-block" === c && null != l)) &&
                                "none" === S.css(e, "float") &&
                                (u ||
                                    (p.done(function() {
                                            h.display = l;
                                        }),
                                        null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                                    (h.display = "inline-block"))),
                            n.overflow &&
                            ((h.overflow = "hidden"),
                                p.always(function() {
                                    (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                })),
                            (u = !1),
                            d))
                        u ||
                        (v ? "hidden" in v && (g = v.hidden) : (v = Y.access(e, "fxshow", { display: l })),
                            o && (v.hidden = !g),
                            g && le([e], !0),
                            p.done(function() {
                                for (r in (g || le([e]), Y.remove(e, "fxshow"), d)) S.style(e, r, d[r]);
                            })),
                        (u = ct(g ? v[r] : 0, r, p)),
                        r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
    })),
    (S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
        return (
            S.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function() {
                m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
            }),
            r
        );
    }),
    S.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function(t, e, n, r) {
                var i = S.isEmptyObject(t),
                    o = S.speed(e, n, r),
                    a = function() {
                        var e = ft(this, S.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function(i, e, o) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                    this.each(function() {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = S.timers,
                            r = Y.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                        for (t = n.length; t--;) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || S.dequeue(this, i);
                    })
                );
            },
            finish: function(a) {
                return (!1 !== a && (a = a || "fx"),
                    this.each(function() {
                        var e,
                            t = Y.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = S.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        S.each(["toggle", "show", "hide"], function(e, r) {
            var i = S.fn[r];
            S.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
            };
        }),
        S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) {
            S.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n);
            };
        }),
        (S.timers = []),
        (S.fx.tick = function() {
            var e,
                t = 0,
                n = S.timers;
            for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (tt = void 0);
        }),
        (S.fx.timer = function(e) {
            S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function() {
            nt || ((nt = !0), st());
        }),
        (S.fx.stop = function() {
            nt = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function(r, e) {
            return (
                (r = (S.fx && S.fx.speeds[r]) || r),
                (e = e || "fx"),
                this.queue(e, function(e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function() {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (rt = E.createElement("input")),
        (it = E.createElement("select").appendChild(E.createElement("option"))),
        (rt.type = "checkbox"),
        (y.checkOn = "" !== rt.value),
        (y.optSelected = it.selected),
        ((rt = E.createElement("input")).value = "t"),
        (rt.type = "radio"),
        (y.radioValue = "t" === rt.value);
    var pt,
        dt = S.expr.attrHandle;
    S.fn.extend({
            attr: function(e, t) {
                return $(this, S.attr, e, t, 1 < arguments.length);
            },
            removeAttr: function(e) {
                return this.each(function() {
                    S.removeAttr(this, e);
                });
            },
        }),
        S.extend({
            attr: function(e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ?
                        S.prop(e, t, n) :
                        ((1 === o && S.isXMLDoc(e)) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                            void 0 !== n ?
                            null === n ?
                            void S.removeAttr(e, t) :
                            i && "set" in i && void 0 !== (r = i.set(e, n, t)) ?
                            r :
                            (e.setAttribute(t, n + ""), n) :
                            i && "get" in i && null !== (r = i.get(e, t)) ?
                            r :
                            null == (r = S.find.attr(e, t)) ?
                            void 0 :
                            r);
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function(e, t) {
                var n,
                    r = 0,
                    i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (pt = {
            set: function(e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = dt[t] || S.find.attr;
            dt[t] = function(e, t, n) {
                var r,
                    i,
                    o = t.toLowerCase();
                return n || ((i = dt[o]), (dt[o] = r), (r = null != a(e, t, n) ? o : null), (dt[o] = i)), r;
            };
        });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(P) || []).join(" ");
    }

    function yt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }

    function mt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
            prop: function(e, t) {
                return $(this, S.prop, e, t, 1 < arguments.length);
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[S.propFix[e] || e];
                });
            },
        }),
        S.extend({
            prop: function(e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = S.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
        (S.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
        }),
        S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            S.propFix[this.toLowerCase()] = this;
        }),
        S.fn.extend({
            addClass: function(t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function(e) {
                        S(this).addClass(t.call(this, e, yt(this)));
                    });
                if ((e = mt(t)).length)
                    while ((n = this[u++]))
                        if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                            a = 0;
                            while ((o = e[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = vt(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function(t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u = 0;
                if (m(t))
                    return this.each(function(e) {
                        S(this).removeClass(t.call(this, e, yt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = mt(t)).length)
                    while ((n = this[u++]))
                        if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                            a = 0;
                            while ((o = e[a++]))
                                while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                            i !== (s = vt(r)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function(i, t) {
                var o = typeof i,
                    a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a ?
                    t ?
                    this.addClass(i) :
                    this.removeClass(i) :
                    m(i) ?
                    this.each(function(e) {
                        S(this).toggleClass(i.call(this, e, yt(this), t), t);
                    }) :
                    this.each(function() {
                        var e, t, n, r;
                        if (a) {
                            (t = 0), (n = S(this)), (r = mt(i));
                            while ((e = r[t++])) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        } else(void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
                    });
            },
            hasClass: function(e) {
                var t,
                    n,
                    r = 0;
                t = " " + e + " ";
                while ((n = this[r++]))
                    if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var xt = /\r/g;
    S.fn.extend({
            val: function(n) {
                var r,
                    e,
                    i,
                    t = this[0];
                return arguments.length ?
                    ((i = m(n)),
                        this.each(function(e) {
                            var t;
                            1 === this.nodeType &&
                                (null == (t = i ? n.call(this, e, S(this).val()) : n) ?
                                    (t = "") :
                                    "number" == typeof t ?
                                    (t += "") :
                                    Array.isArray(t) &&
                                    (t = S.map(t, function(e) {
                                        return null == e ? "" : e + "";
                                    })),
                                    ((r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value")) || (this.value = t));
                        })) :
                    t ?
                    (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ?
                    e :
                    "string" == typeof(e = t.value) ?
                    e.replace(xt, "") :
                    null == e ?
                    "" :
                    e :
                    void 0;
            },
        }),
        S.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : vt(S.text(e));
                    },
                },
                select: {
                    get: function(e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (((t = S(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function(e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = S.makeArray(t),
                            a = i.length;
                        while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        S.each(["radio", "checkbox"], function() {
            (S.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
                },
            }),
            y.checkOn ||
                (S.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
        }),
        (y.focusin = "onfocusin" in C);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation();
        };
    S.extend(S.event, {
            trigger: function(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    f,
                    p = [n || E],
                    d = v.call(e, "type") ? e.type : e,
                    h = v.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                    ((o = f = a = n = n || E),
                        3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !bt.test(d + S.event.triggered) &&
                        (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
                            (u = d.indexOf(":") < 0 && "on" + d),
                            ((e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                            (e.namespace = h.join(".")),
                            (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (e.result = void 0),
                            e.target || (e.target = n),
                            (t = null == t ? [e] : S.makeArray(t, [e])),
                            (c = S.event.special[d] || {}),
                            r || !c.trigger || !1 !== c.trigger.apply(n, t)))
                ) {
                    if (!r && !c.noBubble && !x(n)) {
                        for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
                        a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
                    }
                    i = 0;
                    while ((o = p[i++]) && !e.isPropagationStopped())
                        (f = o),
                        (e.type = 1 < i ? s : c.bindType || d),
                        (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && V(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
                    return (
                        (e.type = d),
                        r ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !V(n) ||
                        (u &&
                            m(n[d]) &&
                            !x(n) &&
                            ((a = n[u]) && (n[u] = null),
                                (S.event.triggered = d),
                                e.isPropagationStopped() && f.addEventListener(d, wt),
                                n[d](),
                                e.isPropagationStopped() && f.removeEventListener(d, wt),
                                (S.event.triggered = void 0),
                                a && (n[u] = a))),
                        e.result
                    );
                }
            },
            simulate: function(e, t, n) {
                var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
                S.event.trigger(r, null, t);
            },
        }),
        S.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    S.event.trigger(e, t, this);
                });
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
            },
        }),
        y.focusin ||
        S.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
            var i = function(e) {
                S.event.simulate(r, e.target, S.event.fix(e));
            };
            S.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = Y.access(e, r);
                    t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
                },
                teardown: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = Y.access(e, r) - 1;
                    t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
                },
            };
        });
    var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return (t && !t.getElementsByTagName("parsererror").length) || S.error("Invalid XML: " + e), t;
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
            });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function(e, t) {
        var n,
            r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function() {
                i(this.name, this.value);
            });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&");
    }),
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this;
                })
                .filter(function() {
                    var e = this.type;
                    return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
                })
                .map(function(e, t) {
                    var n = S(this).val();
                    return null == n ?
                        null :
                        Array.isArray(n) ?
                        S.map(n, function(e) {
                            return { name: t.name, value: e.replace(kt, "\r\n") };
                        }) : { name: t.name, value: n.replace(kt, "\r\n") };
                })
                .get();
        },
    });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while ((n = i[r++])) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return (
                (s[e] = !0),
                S.each(t[e] || [], function(e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), l(n), !1);
                }),
                r
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }

    function $t(e, t) {
        var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e;
    }
    (Wt.href = Tt.href),
    S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function(e, t) {
                return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Rt),
            ajaxTransport: Ft(Mt),
            ajax: function(e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    p,
                    n,
                    d,
                    r,
                    h,
                    g,
                    i,
                    o,
                    v = S.ajaxSetup({}, t),
                    y = v.context || v,
                    m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                    x = S.Deferred(),
                    b = S.Callbacks("once memory"),
                    w = v.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while ((t = Ht.exec(p))) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return h ? p : null;
                        },
                        setRequestHeader: function(e, t) {
                            return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
                        },
                        overrideMimeType: function(e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        },
                    };
                if (
                    (x.promise(T),
                        (v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//")),
                        (v.type = t.method || t.type || v.method || v.type),
                        (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
                        null == v.crossDomain)
                ) {
                    r = E.createElement("a");
                    try {
                        (r.href = v.url), (r.href = r.href), (v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
                    } catch (e) {
                        v.crossDomain = !0;
                    }
                }
                if ((v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h)) return T;
                for (i in ((g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                        (v.type = v.type.toUpperCase()),
                        (v.hasContent = !Ot.test(v.type)),
                        (f = v.url.replace(qt, "")),
                        v.hasContent ?
                        v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) :
                        ((o = v.url.slice(f.length)),
                            v.data && (v.processData || "string" == typeof v.data) && ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data), !1 === v.cache && ((f = f.replace(Lt, "$1")), (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
                            (v.url = f + o)),
                        v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
                        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
                        T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
                        v.headers))
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
                if (((u = "abort"), b.add(v.complete), T.done(v.success), T.fail(v.error), (c = Bt(Mt, v, t, T)))) {
                    if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h)) return T;
                    v.async &&
                        0 < v.timeout &&
                        (d = C.setTimeout(function() {
                            T.abort("timeout");
                        }, v.timeout));
                    try {
                        (h = !1), c.send(a, l);
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");

                function l(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = t;
                    h ||
                        ((h = !0),
                            d && C.clearTimeout(d),
                            (c = void 0),
                            (p = r || ""),
                            (T.readyState = 0 < e ? 4 : 0),
                            (i = (200 <= e && e < 300) || 304 === e),
                            n &&
                            (s = (function(e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s = e.contents,
                                    u = e.dataTypes;
                                while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break;
                                        }
                                        a || (a = i);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}),
                            (s = (function(e, t, n, r) {
                                var i,
                                    o,
                                    a,
                                    s,
                                    u,
                                    l = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                o = c.shift();
                                while (o)
                                    if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                                        if ("*" === o) o = u;
                                        else if ("*" !== u && u !== o) {
                                    if (!(a = l[u + " " + o] || l["* " + o]))
                                        for (i in l)
                                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                                break;
                                            }
                                    if (!0 !== a)
                                        if (a && e["throws"]) t = a(t);
                                        else
                                            try {
                                                t = a(t);
                                            } catch (e) {
                                                return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                            }
                                }
                                return { state: "success", data: t };
                            })(v, s, T, i)),
                            i ?
                            (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                                204 === e || "HEAD" === v.type ? (l = "nocontent") : 304 === e ? (l = "notmodified") : ((l = s.state), (o = s.data), (i = !(a = s.error)))) :
                            ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                            (T.status = e),
                            (T.statusText = (t || l) + ""),
                            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                            T.statusCode(w),
                            (w = void 0),
                            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                            b.fireWith(y, [T, l]),
                            g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function(e, t, n) {
                return S.get(e, t, n, "json");
            },
            getScript: function(e, t) {
                return S.get(e, void 0, t, "script");
            },
        }),
        S.each(["get", "post"], function(e, i) {
            S[i] = function(e, t, n, r) {
                return m(t) && ((r = r || n), (n = t), (t = void 0)), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e));
            };
        }),
        S.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (S._evalUrl = function(e, t, n) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function() {} },
                dataFilter: function(e) {
                    S.globalEval(e, t, n);
                },
            });
        }),
        S.fn.extend({
            wrapAll: function(e) {
                var t;
                return (
                    this[0] &&
                    (m(e) && (e = e.call(this[0])),
                        (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                        .map(function() {
                            var e = this;
                            while (e.firstElementChild) e = e.firstElementChild;
                            return e;
                        })
                        .append(this)),
                    this
                );
            },
            wrapInner: function(n) {
                return m(n) ?
                    this.each(function(e) {
                        S(this).wrapInner(n.call(this, e));
                    }) :
                    this.each(function() {
                        var e = S(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n);
                    });
            },
            wrap: function(t) {
                var n = m(t);
                return this.each(function(e) {
                    S(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function(e) {
                return (
                    this.parent(e)
                    .not("body")
                    .each(function() {
                        S(this).replaceWith(this.childNodes);
                    }),
                    this
                );
            },
        }),
        (S.expr.pseudos.hidden = function(e) {
            return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (S.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function(i) {
            var o, a;
            if (y.cors || (zt && !i.crossDomain))
                return {
                    send: function(e, t) {
                        var n,
                            r = i.xhr();
                        if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields))
                            for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) r.setRequestHeader(n, e[n]);
                        (o = function(e) {
                            return function() {
                                o &&
                                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                        "abort" === e ?
                                        r.abort() :
                                        "error" === e ?
                                        "number" != typeof r.status ?
                                        t(0, "error") :
                                        t(r.status, r.statusText) :
                                        t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
                            };
                        }),
                        (r.onload = o()),
                        (a = r.onerror = r.ontimeout = o("error")),
                        void 0 !== r.onabort ?
                            (r.onabort = a) :
                            (r.onreadystatechange = function() {
                                4 === r.readyState &&
                                    C.setTimeout(function() {
                                        o && a();
                                    });
                            }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function() {
                        o && o();
                    },
                };
        }),
        S.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function(e) {
                    return S.globalEval(e), e;
                },
            },
        }),
        S.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        S.ajaxTransport("script", function(n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function(e, t) {
                        (r = S("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function(e) {
                                    r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                        E.head.appendChild(r[0]);
                    },
                    abort: function() {
                        i && i();
                    },
                };
        });
    var Ut,
        Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Xt.pop() || S.expando + "_" + Ct.guid++;
                return (this[e] = !0), e;
            },
        }),
        S.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r,
                i,
                o,
                a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(Vt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    (e.converters["script json"] = function() {
                        return o || S.error(r + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (i = C[r]),
                    (C[r] = function() {
                        o = arguments;
                    }),
                    n.always(function() {
                        void 0 === i ? S(C).removeProp(r) : (C[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)), o && m(i) && i(o[0]), (o = i = void 0);
                    }),
                    "script"
                );
        }),
        (y.createHTMLDocument = (((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ut.childNodes.length)),
        (S.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] :
                ("boolean" == typeof t && ((n = t), (t = !1)),
                    t || (y.createHTMLDocument ? (((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href), t.head.appendChild(r)) : (t = E)),
                    (o = !n && []),
                    (i = N.exec(e)) ? [t.createElement(i[1])] : ((i = xe([e], t, o)), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
            var r, i, o;
        }),
        (S.fn.load = function(e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (-1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                m(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                0 < a.length &&
                S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function(e) {
                    (o = arguments), a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                })
                .always(
                    n &&
                    function(e, t) {
                        a.each(function() {
                            n.apply(this, o || [e.responseText, t, e]);
                        });
                    }
                ),
                this
            );
        }),
        (S.expr.pseudos.animated = function(t) {
            return S.grep(S.timers, function(e) {
                return t === e.elem;
            }).length;
        }),
        (S.offset = {
            setOffset: function(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = S.css(e, "position"),
                    c = S(e),
                    f = {};
                "static" === l && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = S.css(e, "top")),
                    (u = S.css(e, "left")),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    m(t) && (t = t.call(e, n, S.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
            },
        }),
        S.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ?
                        this :
                        this.each(function(e) {
                            S.offset.setOffset(this, t, e);
                        });
                var e,
                    n,
                    r = this[0];
                return r ? (r.getClientRects().length ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function() {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (i.left += S.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                    return e || re;
                });
            },
        }),
        S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
            var o = "pageYOffset" === i;
            S.fn[t] = function(e) {
                return $(
                    this,
                    function(e, t, n) {
                        var r;
                        if ((x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        S.each(["top", "left"], function(e, n) {
            S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
                if (t) return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
            });
        }),
        S.each({ Height: "height", Width: "width" }, function(a, s) {
            S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
                S.fn[o] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return $(
                        this,
                        function(e, t, n) {
                            var r;
                            return x(e) ?
                                0 === o.indexOf("outer") ?
                                e["inner" + a] :
                                e.document.documentElement["client" + a] :
                                9 === e.nodeType ?
                                ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) :
                                void 0 === n ?
                                S.css(e, t, i) :
                                S.style(e, t, n, i);
                        },
                        s,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            S.fn[t] = function(e) {
                return this.on(t, e);
            };
        }),
        S.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
                return this.off(e, null, t);
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            S.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (S.proxy = function(e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
                (r = s.call(arguments, 2)),
                ((i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || S.guid++),
                i
            );
    }),
    (S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
        define.amd &&
        define("jquery", [], function() {
            return S;
        });
    var Yt = C.jQuery,
        Qt = C.$;
    return (
        (S.noConflict = function(e) {
            return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
        }),
        "undefined" == typeof e && (C.jQuery = C.$ = S),
        S
    );
});
/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

!(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ?
        e(exports, require("jquery"), require("popper.html")) :
        "function" == typeof define && define.amd ?
        define(["exports", "jquery", "popper.js"], e) :
        e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function(t, e, h) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }

    function l(r) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols &&
                (e = e.concat(
                    Object.getOwnPropertySymbols(o).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(o, t).enumerable;
                    })
                )),
                e.forEach(function(t) {
                    var e, n, i;
                    (e = r), (i = o[(n = t)]), n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = i);
                });
        }
        return r;
    }
    (e = e && e.hasOwnProperty("default") ? e.default : e), (h = h && h.hasOwnProperty("default") ? h.default : h);
    var r,
        n,
        o,
        a,
        c,
        u,
        f,
        d,
        g,
        _,
        m,
        p,
        v,
        y,
        E,
        C,
        T,
        b,
        S,
        I,
        A,
        D,
        w,
        N,
        O,
        k,
        P,
        j,
        H,
        L,
        R,
        x,
        W,
        U,
        q,
        F,
        K,
        M,
        Q,
        B,
        V,
        Y,
        z,
        J,
        Z,
        G,
        $,
        X,
        tt,
        et,
        nt,
        it,
        rt,
        ot,
        st,
        at,
        lt,
        ct,
        ht,
        ut,
        ft,
        dt,
        gt,
        _t,
        mt,
        pt,
        vt,
        yt,
        Et,
        Ct,
        Tt,
        bt,
        St,
        It,
        At,
        Dt,
        wt,
        Nt,
        Ot,
        kt,
        Pt,
        jt,
        Ht,
        Lt,
        Rt,
        xt,
        Wt,
        Ut,
        qt,
        Ft,
        Kt,
        Mt,
        Qt,
        Bt,
        Vt,
        Yt,
        zt,
        Jt,
        Zt,
        Gt,
        $t,
        Xt,
        te,
        ee,
        ne,
        ie,
        re,
        oe,
        se,
        ae,
        le,
        ce,
        he,
        ue,
        fe,
        de,
        ge,
        _e,
        me,
        pe,
        ve,
        ye,
        Ee,
        Ce,
        Te,
        be,
        Se,
        Ie,
        Ae,
        De,
        we,
        Ne,
        Oe,
        ke,
        Pe,
        je,
        He,
        Le,
        Re,
        xe,
        We,
        Ue,
        qe,
        Fe,
        Ke,
        Me,
        Qe,
        Be,
        Ve,
        Ye,
        ze,
        Je,
        Ze,
        Ge,
        $e,
        Xe,
        tn,
        en,
        nn,
        rn,
        on,
        sn,
        an,
        ln,
        cn,
        hn,
        un,
        fn,
        dn,
        gn,
        _n,
        mn,
        pn,
        vn,
        yn,
        En,
        Cn,
        Tn,
        bn,
        Sn,
        In,
        An,
        Dn,
        wn,
        Nn,
        On,
        kn,
        Pn,
        jn,
        Hn,
        Ln,
        Rn,
        xn,
        Wn,
        Un,
        qn,
        Fn = (function(i) {
            var e = "transitionend";

            function t(t) {
                var e = this,
                    n = !1;
                return (
                    i(this).one(l.TRANSITION_END, function() {
                        n = !0;
                    }),
                    setTimeout(function() {
                        n || l.triggerTransitionEnd(e);
                    }, t),
                    this
                );
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    for (;
                        (t += ~~(1e6 * Math.random())), document.getElementById(t););
                    return t;
                },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    (e && "#" !== e) || (e = t.getAttribute("href") || "");
                    try {
                        return document.querySelector(e) ? e : null;
                    } catch (t) {
                        return null;
                    }
                },
                getTransitionDurationFromElement: function(t) {
                    if (!t) return 0;
                    var e = i(t).css("transition-duration");
                    return parseFloat(e) ? ((e = e.split(",")[0]), 1e3 * parseFloat(e)) : 0;
                },
                reflow: function(t) {
                    return t.offsetHeight;
                },
                triggerTransitionEnd: function(t) {
                    i(t).trigger(e);
                },
                supportsTransitionEnd: function() {
                    return Boolean(e);
                },
                isElement: function(t) {
                    return (t[0] || t).nodeType;
                },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                o = e[i],
                                s =
                                o && l.isElement(o) ?
                                "element" :
                                ((a = o), {}.toString
                                    .call(a)
                                    .match(/\s([a-z]+)/i)[1]
                                    .toLowerCase());
                            if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
                        }
                    var a;
                },
            };
            return (
                (i.fn.emulateTransitionEnd = t),
                (i.event.special[l.TRANSITION_END] = {
                    bindType: e,
                    delegateType: e,
                    handle: function(t) {
                        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                    },
                }),
                l
            );
        })(e),
        Kn =
        ((n = "alert"),
            (a = "." + (o = "bs.alert")),
            (c = (r = e).fn[n]),
            (u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }),
            (f = "alert"),
            (d = "fade"),
            (g = "show"),
            (_ = (function() {
                function i(t) {
                    this._element = t;
                }
                var t = i.prototype;
                return (
                    (t.close = function(t) {
                        var e = this._element;
                        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                    }),
                    (t.dispose = function() {
                        r.removeData(this._element, o), (this._element = null);
                    }),
                    (t._getRootElement = function(t) {
                        var e = Fn.getSelectorFromElement(t),
                            n = !1;
                        return e && (n = document.querySelector(e)), n || (n = r(t).closest("." + f)[0]), n;
                    }),
                    (t._triggerCloseEvent = function(t) {
                        var e = r.Event(u.CLOSE);
                        return r(t).trigger(e), e;
                    }),
                    (t._removeElement = function(e) {
                        var n = this;
                        if ((r(e).removeClass(g), r(e).hasClass(d))) {
                            var t = Fn.getTransitionDurationFromElement(e);
                            r(e)
                                .one(Fn.TRANSITION_END, function(t) {
                                    return n._destroyElement(e, t);
                                })
                                .emulateTransitionEnd(t);
                        } else this._destroyElement(e);
                    }),
                    (t._destroyElement = function(t) {
                        r(t).detach().trigger(u.CLOSED).remove();
                    }),
                    (i._jQueryInterface = function(n) {
                        return this.each(function() {
                            var t = r(this),
                                e = t.data(o);
                            e || ((e = new i(this)), t.data(o, e)), "close" === n && e[n](this);
                        });
                    }),
                    (i._handleDismiss = function(e) {
                        return function(t) {
                            t && t.preventDefault(), e.close(this);
                        };
                    }),
                    s(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3";
                        },
                    }, ]),
                    i
                );
            })()),
            r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _())),
            (r.fn[n] = _._jQueryInterface),
            (r.fn[n].Constructor = _),
            (r.fn[n].noConflict = function() {
                return (r.fn[n] = c), _._jQueryInterface;
            }),
            _),
        Mn =
        ((p = "button"),
            (y = "." + (v = "bs.button")),
            (E = ".data-api"),
            (C = (m = e).fn[p]),
            (T = "active"),
            (b = "btn"),
            (I = '[data-toggle^="button"]'),
            (A = '[data-toggle="buttons"]'),
            (D = "input"),
            (w = ".active"),
            (N = ".btn"),
            (O = { CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E }),
            (k = (function() {
                function n(t) {
                    this._element = t;
                }
                var t = n.prototype;
                return (
                    (t.toggle = function() {
                        var t = !0,
                            e = !0,
                            n = m(this._element).closest(A)[0];
                        if (n) {
                            var i = this._element.querySelector(D);
                            if (i) {
                                if ("radio" === i.type)
                                    if (i.checked && this._element.classList.contains(T)) t = !1;
                                    else {
                                        var r = n.querySelector(w);
                                        r && m(r).removeClass(T);
                                    }
                                if (t) {
                                    if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                    (i.checked = !this._element.classList.contains(T)), m(i).trigger("change");
                                }
                                i.focus(), (e = !1);
                            }
                        }
                        e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t && m(this._element).toggleClass(T);
                    }),
                    (t.dispose = function() {
                        m.removeData(this._element, v), (this._element = null);
                    }),
                    (n._jQueryInterface = function(e) {
                        return this.each(function() {
                            var t = m(this).data(v);
                            t || ((t = new n(this)), m(this).data(v, t)), "toggle" === e && t[e]();
                        });
                    }),
                    s(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3";
                        },
                    }, ]),
                    n
                );
            })()),
            m(document)
            .on(O.CLICK_DATA_API, I, function(t) {
                t.preventDefault();
                var e = t.target;
                m(e).hasClass(b) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle");
            })
            .on(O.FOCUS_BLUR_DATA_API, I, function(t) {
                var e = m(t.target).closest(N)[0];
                m(e).toggleClass(S, /^focus(in)?$/.test(t.type));
            }),
            (m.fn[p] = k._jQueryInterface),
            (m.fn[p].Constructor = k),
            (m.fn[p].noConflict = function() {
                return (m.fn[p] = C), k._jQueryInterface;
            }),
            k),
        Qn =
        ((j = "carousel"),
            (L = "." + (H = "bs.carousel")),
            (R = ".data-api"),
            (x = (P = e).fn[j]),
            (W = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }),
            (U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }),
            (q = "next"),
            (F = "prev"),
            (K = "left"),
            (M = "right"),
            (Q = { SLIDE: "slide" + L, SLID: "slid" + L, KEYDOWN: "keydown" + L, MOUSEENTER: "mouseenter" + L, MOUSELEAVE: "mouseleave" + L, TOUCHEND: "touchend" + L, LOAD_DATA_API: "load" + L + R, CLICK_DATA_API: "click" + L + R }),
            (B = "carousel"),
            (V = "active"),
            (Y = "slide"),
            (z = "carousel-item-right"),
            (J = "carousel-item-left"),
            (Z = "carousel-item-next"),
            (G = "carousel-item-prev"),
            ($ = ".active"),
            (X = ".active.carousel-item"),
            (tt = ".carousel-item"),
            (et = ".carousel-item-next, .carousel-item-prev"),
            (nt = ".carousel-indicators"),
            (it = "[data-slide], [data-slide-to]"),
            (rt = '[data-ride="carousel"]'),
            (ot = (function() {
                function o(t, e) {
                    (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this._config = this._getConfig(e)),
                    (this._element = P(t)[0]),
                    (this._indicatorsElement = this._element.querySelector(nt)),
                    this._addEventListeners();
                }
                var t = o.prototype;
                return (
                    (t.next = function() {
                        this._isSliding || this._slide(q);
                    }),
                    (t.nextWhenVisible = function() {
                        !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
                    }),
                    (t.prev = function() {
                        this._isSliding || this._slide(F);
                    }),
                    (t.pause = function(t) {
                        t || (this._isPaused = !0), this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                    }),
                    (t.cycle = function(t) {
                        t || (this._isPaused = !1),
                            this._interval && (clearInterval(this._interval), (this._interval = null)),
                            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                    }),
                    (t.to = function(t) {
                        var e = this;
                        this._activeElement = this._element.querySelector(X);
                        var n = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding)
                                P(this._element).one(Q.SLID, function() {
                                    return e.to(t);
                                });
                            else {
                                if (n === t) return this.pause(), void this.cycle();
                                var i = n < t ? q : F;
                                this._slide(i, this._items[t]);
                            }
                    }),
                    (t.dispose = function() {
                        P(this._element).off(L),
                            P.removeData(this._element, H),
                            (this._items = null),
                            (this._config = null),
                            (this._element = null),
                            (this._interval = null),
                            (this._isPaused = null),
                            (this._isSliding = null),
                            (this._activeElement = null),
                            (this._indicatorsElement = null);
                    }),
                    (t._getConfig = function(t) {
                        return (t = l({}, W, t)), Fn.typeCheckConfig(j, t, U), t;
                    }),
                    (t._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard &&
                            P(this._element).on(Q.KEYDOWN, function(t) {
                                return e._keydown(t);
                            }),
                            "hover" === this._config.pause &&
                            (P(this._element)
                                .on(Q.MOUSEENTER, function(t) {
                                    return e.pause(t);
                                })
                                .on(Q.MOUSELEAVE, function(t) {
                                    return e.cycle(t);
                                }),
                                "ontouchstart" in document.documentElement &&
                                P(this._element).on(Q.TOUCHEND, function() {
                                    e.pause(),
                                        e.touchTimeout && clearTimeout(e.touchTimeout),
                                        (e.touchTimeout = setTimeout(function(t) {
                                            return e.cycle(t);
                                        }, 500 + e._config.interval));
                                }));
                    }),
                    (t._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName))
                            switch (t.which) {
                                case 37:
                                    t.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    t.preventDefault(), this.next();
                            }
                    }),
                    (t._getItemIndex = function(t) {
                        return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : []), this._items.indexOf(t);
                    }),
                    (t._getItemByDirection = function(t, e) {
                        var n = t === q,
                            i = t === F,
                            r = this._getItemIndex(e),
                            o = this._items.length - 1;
                        if (((i && 0 === r) || (n && r === o)) && !this._config.wrap) return e;
                        var s = (r + (t === F ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                    }),
                    (t._triggerSlideEvent = function(t, e) {
                        var n = this._getItemIndex(t),
                            i = this._getItemIndex(this._element.querySelector(X)),
                            r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
                        return P(this._element).trigger(r), r;
                    }),
                    (t._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
                            P(e).removeClass(V);
                            var n = this._indicatorsElement.children[this._getItemIndex(t)];
                            n && P(n).addClass(V);
                        }
                    }),
                    (t._slide = function(t, e) {
                        var n,
                            i,
                            r,
                            o = this,
                            s = this._element.querySelector(X),
                            a = this._getItemIndex(s),
                            l = e || (s && this._getItemByDirection(t, s)),
                            c = this._getItemIndex(l),
                            h = Boolean(this._interval);
                        if ((t === q ? ((n = J), (i = Z), (r = K)) : ((n = z), (i = G), (r = M)), l && P(l).hasClass(V))) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                            (this._isSliding = !0), h && this.pause(), this._setActiveIndicatorElement(l);
                            var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: c });
                            if (P(this._element).hasClass(Y)) {
                                P(l).addClass(i), Fn.reflow(l), P(s).addClass(n), P(l).addClass(n);
                                var f = Fn.getTransitionDurationFromElement(s);
                                P(s)
                                    .one(Fn.TRANSITION_END, function() {
                                        P(l)
                                            .removeClass(n + " " + i)
                                            .addClass(V),
                                            P(s).removeClass(V + " " + i + " " + n),
                                            (o._isSliding = !1),
                                            setTimeout(function() {
                                                return P(o._element).trigger(u);
                                            }, 0);
                                    })
                                    .emulateTransitionEnd(f);
                            } else P(s).removeClass(V), P(l).addClass(V), (this._isSliding = !1), P(this._element).trigger(u);
                            h && this.cycle();
                        }
                    }),
                    (o._jQueryInterface = function(i) {
                        return this.each(function() {
                            var t = P(this).data(H),
                                e = l({}, W, P(this).data());
                            "object" == typeof i && (e = l({}, e, i));
                            var n = "string" == typeof i ? i : e.slide;
                            if ((t || ((t = new o(this, e)), P(this).data(H, t)), "number" == typeof i)) t.to(i);
                            else if ("string" == typeof n) {
                                if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n]();
                            } else e.interval && (t.pause(), t.cycle());
                        });
                    }),
                    (o._dataApiClickHandler = function(t) {
                        var e = Fn.getSelectorFromElement(this);
                        if (e) {
                            var n = P(e)[0];
                            if (n && P(n).hasClass(B)) {
                                var i = l({}, P(n).data(), P(this).data()),
                                    r = this.getAttribute("data-slide-to");
                                r && (i.interval = !1), o._jQueryInterface.call(P(n), i), r && P(n).data(H).to(r), t.preventDefault();
                            }
                        }
                    }),
                    s(o, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.1.3";
                            },
                        },
                        {
                            key: "Default",
                            get: function() {
                                return W;
                            },
                        },
                    ]),
                    o
                );
            })()),
            P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler),
            P(window).on(Q.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
                    var i = P(t[e]);
                    ot._jQueryInterface.call(i, i.data());
                }
            }),
            (P.fn[j] = ot._jQueryInterface),
            (P.fn[j].Constructor = ot),
            (P.fn[j].noConflict = function() {
                return (P.fn[j] = x), ot._jQueryInterface;
            }),
            ot),
        Bn =
        ((at = "collapse"),
            (ct = "." + (lt = "bs.collapse")),
            (ht = (st = e).fn[at]),
            (ut = { toggle: !0, parent: "" }),
            (ft = { toggle: "boolean", parent: "(string|element)" }),
            (dt = { SHOW: "show" + ct, SHOWN: "shown" + ct, HIDE: "hide" + ct, HIDDEN: "hidden" + ct, CLICK_DATA_API: "click" + ct + ".data-api" }),
            (gt = "show"),
            (_t = "collapse"),
            (mt = "collapsing"),
            (pt = "collapsed"),
            (vt = "width"),
            (yt = "height"),
            (Et = ".show, .collapsing"),
            (Ct = '[data-toggle="collapse"]'),
            (Tt = (function() {
                function a(e, t) {
                    (this._isTransitioning = !1),
                    (this._element = e),
                    (this._config = this._getConfig(t)),
                    (this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                    for (var n = [].slice.call(document.querySelectorAll(Ct)), i = 0, r = n.length; i < r; i++) {
                        var o = n[i],
                            s = Fn.getSelectorFromElement(o),
                            a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                                return t === e;
                            });
                        null !== s && 0 < a.length && ((this._selector = s), this._triggerArray.push(o));
                    }
                    (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                }
                var t = a.prototype;
                return (
                    (t.toggle = function() {
                        st(this._element).hasClass(gt) ? this.hide() : this.show();
                    }),
                    (t.show = function() {
                        var t,
                            e,
                            n = this;
                        if (!this._isTransitioning &&
                            !st(this._element).hasClass(gt) &&
                            (this._parent &&
                                0 ===
                                (t = [].slice.call(this._parent.querySelectorAll(Et)).filter(function(t) {
                                    return t.getAttribute("data-parent") === n._config.parent;
                                })).length &&
                                (t = null), !(t && (e = st(t).not(this._selector).data(lt)) && e._isTransitioning))
                        ) {
                            var i = st.Event(dt.SHOW);
                            if ((st(this._element).trigger(i), !i.isDefaultPrevented())) {
                                t && (a._jQueryInterface.call(st(t).not(this._selector), "hide"), e || st(t).data(lt, null));
                                var r = this._getDimension();
                                st(this._element).removeClass(_t).addClass(mt), (this._element.style[r] = 0), this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                    s = Fn.getTransitionDurationFromElement(this._element);
                                st(this._element)
                                    .one(Fn.TRANSITION_END, function() {
                                        st(n._element).removeClass(mt).addClass(_t).addClass(gt), (n._element.style[r] = ""), n.setTransitioning(!1), st(n._element).trigger(dt.SHOWN);
                                    })
                                    .emulateTransitionEnd(s),
                                    (this._element.style[r] = this._element[o] + "px");
                            }
                        }
                    }),
                    (t.hide = function() {
                        var t = this;
                        if (!this._isTransitioning && st(this._element).hasClass(gt)) {
                            var e = st.Event(dt.HIDE);
                            if ((st(this._element).trigger(e), !e.isDefaultPrevented())) {
                                var n = this._getDimension();
                                (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"), Fn.reflow(this._element), st(this._element).addClass(mt).removeClass(_t).removeClass(gt);
                                var i = this._triggerArray.length;
                                if (0 < i)
                                    for (var r = 0; r < i; r++) {
                                        var o = this._triggerArray[r],
                                            s = Fn.getSelectorFromElement(o);
                                        if (null !== s) st([].slice.call(document.querySelectorAll(s))).hasClass(gt) || st(o).addClass(pt).attr("aria-expanded", !1);
                                    }
                                this.setTransitioning(!0);
                                this._element.style[n] = "";
                                var a = Fn.getTransitionDurationFromElement(this._element);
                                st(this._element)
                                    .one(Fn.TRANSITION_END, function() {
                                        t.setTransitioning(!1), st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN);
                                    })
                                    .emulateTransitionEnd(a);
                            }
                        }
                    }),
                    (t.setTransitioning = function(t) {
                        this._isTransitioning = t;
                    }),
                    (t.dispose = function() {
                        st.removeData(this._element, lt), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                    }),
                    (t._getConfig = function(t) {
                        return ((t = l({}, ut, t)).toggle = Boolean(t.toggle)), Fn.typeCheckConfig(at, t, ft), t;
                    }),
                    (t._getDimension = function() {
                        return st(this._element).hasClass(vt) ? vt : yt;
                    }),
                    (t._getParent = function() {
                        var n = this,
                            t = null;
                        Fn.isElement(this._config.parent) ? ((t = this._config.parent), "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : (t = document.querySelector(this._config.parent));
                        var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            i = [].slice.call(t.querySelectorAll(e));
                        return (
                            st(i).each(function(t, e) {
                                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
                            }),
                            t
                        );
                    }),
                    (t._addAriaAndCollapsedClass = function(t, e) {
                        if (t) {
                            var n = st(t).hasClass(gt);
                            e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n);
                        }
                    }),
                    (a._getTargetFromElement = function(t) {
                        var e = Fn.getSelectorFromElement(t);
                        return e ? document.querySelector(e) : null;
                    }),
                    (a._jQueryInterface = function(i) {
                        return this.each(function() {
                            var t = st(this),
                                e = t.data(lt),
                                n = l({}, ut, t.data(), "object" == typeof i && i ? i : {});
                            if ((!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || ((e = new a(this, n)), t.data(lt, e)), "string" == typeof i)) {
                                if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                                e[i]();
                            }
                        });
                    }),
                    s(a, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.1.3";
                            },
                        },
                        {
                            key: "Default",
                            get: function() {
                                return ut;
                            },
                        },
                    ]),
                    a
                );
            })()),
            st(document).on(dt.CLICK_DATA_API, Ct, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var n = st(this),
                    e = Fn.getSelectorFromElement(this),
                    i = [].slice.call(document.querySelectorAll(e));
                st(i).each(function() {
                    var t = st(this),
                        e = t.data(lt) ? "toggle" : n.data();
                    Tt._jQueryInterface.call(t, e);
                });
            }),
            (st.fn[at] = Tt._jQueryInterface),
            (st.fn[at].Constructor = Tt),
            (st.fn[at].noConflict = function() {
                return (st.fn[at] = ht), Tt._jQueryInterface;
            }),
            Tt),
        Vn =
        ((St = "dropdown"),
            (At = "." + (It = "bs.dropdown")),
            (Dt = ".data-api"),
            (wt = (bt = e).fn[St]),
            (Nt = new RegExp("38|40|27")),
            (Ot = { HIDE: "hide" + At, HIDDEN: "hidden" + At, SHOW: "show" + At, SHOWN: "shown" + At, CLICK: "click" + At, CLICK_DATA_API: "click" + At + Dt, KEYDOWN_DATA_API: "keydown" + At + Dt, KEYUP_DATA_API: "keyup" + At + Dt }),
            (kt = "disabled"),
            (Pt = "show"),
            (jt = "dropup"),
            (Ht = "dropright"),
            (Lt = "dropleft"),
            (Rt = "dropdown-menu-right"),
            (xt = "position-static"),
            (Wt = '[data-toggle="dropdown"]'),
            (Ut = ".dropdown form"),
            (qt = ".dropdown-menu"),
            (Ft = ".navbar-nav"),
            (Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
            (Mt = "top-start"),
            (Qt = "top-end"),
            (Bt = "bottom-start"),
            (Vt = "bottom-end"),
            (Yt = "right-start"),
            (zt = "left-start"),
            (Jt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }),
            (Zt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }),
            (Gt = (function() {
                function c(t, e) {
                    (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
                }
                var t = c.prototype;
                return (
                    (t.toggle = function() {
                        if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
                            var t = c._getParentFromElement(this._element),
                                e = bt(this._menu).hasClass(Pt);
                            if ((c._clearMenus(), !e)) {
                                var n = { relatedTarget: this._element },
                                    i = bt.Event(Ot.SHOW, n);
                                if ((bt(t).trigger(i), !i.isDefaultPrevented())) {
                                    if (!this._inNavbar) {
                                        if ("undefined" == typeof h) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var r = this._element;
                                        "parent" === this._config.reference ?
                                            (r = t) :
                                            Fn.isElement(this._config.reference) && ((r = this._config.reference), "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])),
                                            "scrollParent" !== this._config.boundary && bt(t).addClass(xt),
                                            (this._popper = new h(r, this._menu, this._getPopperConfig()));
                                    }
                                    "ontouchstart" in document.documentElement && 0 === bt(t).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop),
                                        this._element.focus(),
                                        this._element.setAttribute("aria-expanded", !0),
                                        bt(this._menu).toggleClass(Pt),
                                        bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n));
                                }
                            }
                        }
                    }),
                    (t.dispose = function() {
                        bt.removeData(this._element, It), bt(this._element).off(At), (this._element = null), (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
                    }),
                    (t.update = function() {
                        (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (t._addEventListeners = function() {
                        var e = this;
                        bt(this._element).on(Ot.CLICK, function(t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle();
                        });
                    }),
                    (t._getConfig = function(t) {
                        return (t = l({}, this.constructor.Default, bt(this._element).data(), t)), Fn.typeCheckConfig(St, t, this.constructor.DefaultType), t;
                    }),
                    (t._getMenuElement = function() {
                        if (!this._menu) {
                            var t = c._getParentFromElement(this._element);
                            t && (this._menu = t.querySelector(qt));
                        }
                        return this._menu;
                    }),
                    (t._getPlacement = function() {
                        var t = bt(this._element.parentNode),
                            e = Bt;
                        return t.hasClass(jt) ? ((e = Mt), bt(this._menu).hasClass(Rt) && (e = Qt)) : t.hasClass(Ht) ? (e = Yt) : t.hasClass(Lt) ? (e = zt) : bt(this._menu).hasClass(Rt) && (e = Vt), e;
                    }),
                    (t._detectNavbar = function() {
                        return 0 < bt(this._element).closest(".navbar").length;
                    }),
                    (t._getPopperConfig = function() {
                        var e = this,
                            t = {};
                        "function" == typeof this._config.offset ?
                            (t.fn = function(t) {
                                return (t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {})), t;
                            }) :
                            (t.offset = this._config.offset);
                        var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                        return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
                    }),
                    (c._jQueryInterface = function(e) {
                        return this.each(function() {
                            var t = bt(this).data(It);
                            if ((t || ((t = new c(this, "object" == typeof e ? e : null)), bt(this).data(It, t)), "string" == typeof e)) {
                                if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                                t[e]();
                            }
                        });
                    }),
                    (c._clearMenus = function(t) {
                        if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                            for (var e = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = e.length; n < i; n++) {
                                var r = c._getParentFromElement(e[n]),
                                    o = bt(e[n]).data(It),
                                    s = { relatedTarget: e[n] };
                                if ((t && "click" === t.type && (s.clickEvent = t), o)) {
                                    var a = o._menu;
                                    if (bt(r).hasClass(Pt) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && bt.contains(r, t.target))) {
                                        var l = bt.Event(Ot.HIDE, s);
                                        bt(r).trigger(l),
                                            l.isDefaultPrevented() ||
                                            ("ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop),
                                                e[n].setAttribute("aria-expanded", "false"),
                                                bt(a).removeClass(Pt),
                                                bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)));
                                    }
                                }
                            }
                    }),
                    (c._getParentFromElement = function(t) {
                        var e,
                            n = Fn.getSelectorFromElement(t);
                        return n && (e = document.querySelector(n)), e || t.parentNode;
                    }),
                    (c._dataApiKeydownHandler = function(t) {
                        if (
                            (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || bt(t.target).closest(qt).length))) : Nt.test(t.which)) &&
                            (t.preventDefault(), t.stopPropagation(), !this.disabled && !bt(this).hasClass(kt))
                        ) {
                            var e = c._getParentFromElement(this),
                                n = bt(e).hasClass(Pt);
                            if ((n || (27 === t.which && 32 === t.which)) && (!n || (27 !== t.which && 32 !== t.which))) {
                                var i = [].slice.call(e.querySelectorAll(Kt));
                                if (0 !== i.length) {
                                    var r = i.indexOf(t.target);
                                    38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
                                }
                            } else {
                                if (27 === t.which) {
                                    var o = e.querySelector(Wt);
                                    bt(o).trigger("focus");
                                }
                                bt(this).trigger("click");
                            }
                        }
                    }),
                    s(c, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.1.3";
                            },
                        },
                        {
                            key: "Default",
                            get: function() {
                                return Jt;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function() {
                                return Zt;
                            },
                        },
                    ]),
                    c
                );
            })()),
            bt(document)
            .on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler)
            .on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler)
            .on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus)
            .on(Ot.CLICK_DATA_API, Wt, function(t) {
                t.preventDefault(), t.stopPropagation(), Gt._jQueryInterface.call(bt(this), "toggle");
            })
            .on(Ot.CLICK_DATA_API, Ut, function(t) {
                t.stopPropagation();
            }),
            (bt.fn[St] = Gt._jQueryInterface),
            (bt.fn[St].Constructor = Gt),
            (bt.fn[St].noConflict = function() {
                return (bt.fn[St] = wt), Gt._jQueryInterface;
            }),
            Gt),
        Yn =
        ((Xt = "modal"),
            (ee = "." + (te = "bs.modal")),
            (ne = ($t = e).fn[Xt]),
            (ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
            (re = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }),
            (oe = {
                HIDE: "hide" + ee,
                HIDDEN: "hidden" + ee,
                SHOW: "show" + ee,
                SHOWN: "shown" + ee,
                FOCUSIN: "focusin" + ee,
                RESIZE: "resize" + ee,
                CLICK_DISMISS: "click.dismiss" + ee,
                KEYDOWN_DISMISS: "keydown.dismiss" + ee,
                MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
                CLICK_DATA_API: "click" + ee + ".data-api",
            }),
            (se = "modal-scrollbar-measure"),
            (ae = "modal-backdrop"),
            (le = "modal-open"),
            (ce = "fade"),
            (he = "show"),
            (ue = ".modal-dialog"),
            (fe = '[data-toggle="modal"]'),
            (de = '[data-dismiss="modal"]'),
            (ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
            (_e = ".sticky-top"),
            (me = (function() {
                function r(t, e) {
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(ue)),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._scrollbarWidth = 0);
                }
                var t = r.prototype;
                return (
                    (t.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t);
                    }),
                    (t.show = function(t) {
                        var e = this;
                        if (!this._isTransitioning && !this._isShown) {
                            $t(this._element).hasClass(ce) && (this._isTransitioning = !0);
                            var n = $t.Event(oe.SHOW, { relatedTarget: t });
                            $t(this._element).trigger(n),
                                this._isShown ||
                                n.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                    this._checkScrollbar(),
                                    this._setScrollbar(),
                                    this._adjustDialog(),
                                    $t(document.body).addClass(le),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    $t(this._element).on(oe.CLICK_DISMISS, de, function(t) {
                                        return e.hide(t);
                                    }),
                                    $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function() {
                                        $t(e._element).one(oe.MOUSEUP_DISMISS, function(t) {
                                            $t(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                                        });
                                    }),
                                    this._showBackdrop(function() {
                                        return e._showElement(t);
                                    }));
                        }
                    }),
                    (t.hide = function(t) {
                        var e = this;
                        if ((t && t.preventDefault(), !this._isTransitioning && this._isShown)) {
                            var n = $t.Event(oe.HIDE);
                            if (($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                                this._isShown = !1;
                                var i = $t(this._element).hasClass(ce);
                                if (
                                    (i && (this._isTransitioning = !0),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        $t(document).off(oe.FOCUSIN),
                                        $t(this._element).removeClass(he),
                                        $t(this._element).off(oe.CLICK_DISMISS),
                                        $t(this._dialog).off(oe.MOUSEDOWN_DISMISS),
                                        i)
                                ) {
                                    var r = Fn.getTransitionDurationFromElement(this._element);
                                    $t(this._element)
                                        .one(Fn.TRANSITION_END, function(t) {
                                            return e._hideModal(t);
                                        })
                                        .emulateTransitionEnd(r);
                                } else this._hideModal();
                            }
                        }
                    }),
                    (t.dispose = function() {
                        $t.removeData(this._element, te),
                            $t(window, document, this._element, this._backdrop).off(ee),
                            (this._config = null),
                            (this._element = null),
                            (this._dialog = null),
                            (this._backdrop = null),
                            (this._isShown = null),
                            (this._isBodyOverflowing = null),
                            (this._ignoreBackdropClick = null),
                            (this._scrollbarWidth = null);
                    }),
                    (t.handleUpdate = function() {
                        this._adjustDialog();
                    }),
                    (t._getConfig = function(t) {
                        return (t = l({}, ie, t)), Fn.typeCheckConfig(Xt, t, re), t;
                    }),
                    (t._showElement = function(t) {
                        var e = this,
                            n = $t(this._element).hasClass(ce);
                        (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                            (this._element.style.display = "block"),
                            this._element.removeAttribute("aria-hidden"),
                            (this._element.scrollTop = 0),
                            n && Fn.reflow(this._element),
                            $t(this._element).addClass(he),
                            this._config.focus && this._enforceFocus();
                        var i = $t.Event(oe.SHOWN, { relatedTarget: t }),
                            r = function() {
                                e._config.focus && e._element.focus(), (e._isTransitioning = !1), $t(e._element).trigger(i);
                            };
                        if (n) {
                            var o = Fn.getTransitionDurationFromElement(this._element);
                            $t(this._dialog).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
                        } else r();
                    }),
                    (t._enforceFocus = function() {
                        var e = this;
                        $t(document)
                            .off(oe.FOCUSIN)
                            .on(oe.FOCUSIN, function(t) {
                                document !== t.target && e._element !== t.target && 0 === $t(e._element).has(t.target).length && e._element.focus();
                            });
                    }),
                    (t._setEscapeEvent = function() {
                        var e = this;
                        this._isShown && this._config.keyboard ?
                            $t(this._element).on(oe.KEYDOWN_DISMISS, function(t) {
                                27 === t.which && (t.preventDefault(), e.hide());
                            }) :
                            this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS);
                    }),
                    (t._setResizeEvent = function() {
                        var e = this;
                        this._isShown ?
                            $t(window).on(oe.RESIZE, function(t) {
                                return e.handleUpdate(t);
                            }) :
                            $t(window).off(oe.RESIZE);
                    }),
                    (t._hideModal = function() {
                        var t = this;
                        (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                            (this._isTransitioning = !1),
                            this._showBackdrop(function() {
                                $t(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), $t(t._element).trigger(oe.HIDDEN);
                            });
                    }),
                    (t._removeBackdrop = function() {
                        this._backdrop && ($t(this._backdrop).remove(), (this._backdrop = null));
                    }),
                    (t._showBackdrop = function(t) {
                        var e = this,
                            n = $t(this._element).hasClass(ce) ? ce : "";
                        if (this._isShown && this._config.backdrop) {
                            if (
                                ((this._backdrop = document.createElement("div")),
                                    (this._backdrop.className = ae),
                                    n && this._backdrop.classList.add(n),
                                    $t(this._backdrop).appendTo(document.body),
                                    $t(this._element).on(oe.CLICK_DISMISS, function(t) {
                                        e._ignoreBackdropClick ? (e._ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
                                    }),
                                    n && Fn.reflow(this._backdrop),
                                    $t(this._backdrop).addClass(he), !t)
                            )
                                return;
                            if (!n) return void t();
                            var i = Fn.getTransitionDurationFromElement(this._backdrop);
                            $t(this._backdrop).one(Fn.TRANSITION_END, t).emulateTransitionEnd(i);
                        } else if (!this._isShown && this._backdrop) {
                            $t(this._backdrop).removeClass(he);
                            var r = function() {
                                e._removeBackdrop(), t && t();
                            };
                            if ($t(this._element).hasClass(ce)) {
                                var o = Fn.getTransitionDurationFromElement(this._backdrop);
                                $t(this._backdrop).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
                            } else r();
                        } else t && t();
                    }),
                    (t._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                    }),
                    (t._resetAdjustments = function() {
                        (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                    }),
                    (t._checkScrollbar = function() {
                        var t = document.body.getBoundingClientRect();
                        (this._isBodyOverflowing = t.left + t.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (t._setScrollbar = function() {
                        var r = this;
                        if (this._isBodyOverflowing) {
                            var t = [].slice.call(document.querySelectorAll(ge)),
                                e = [].slice.call(document.querySelectorAll(_e));
                            $t(t).each(function(t, e) {
                                    var n = e.style.paddingRight,
                                        i = $t(e).css("padding-right");
                                    $t(e)
                                        .data("padding-right", n)
                                        .css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
                                }),
                                $t(e).each(function(t, e) {
                                    var n = e.style.marginRight,
                                        i = $t(e).css("margin-right");
                                    $t(e)
                                        .data("margin-right", n)
                                        .css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
                                });
                            var n = document.body.style.paddingRight,
                                i = $t(document.body).css("padding-right");
                            $t(document.body)
                                .data("padding-right", n)
                                .css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                        }
                    }),
                    (t._resetScrollbar = function() {
                        var t = [].slice.call(document.querySelectorAll(ge));
                        $t(t).each(function(t, e) {
                            var n = $t(e).data("padding-right");
                            $t(e).removeData("padding-right"), (e.style.paddingRight = n || "");
                        });
                        var e = [].slice.call(document.querySelectorAll("" + _e));
                        $t(e).each(function(t, e) {
                            var n = $t(e).data("margin-right");
                            "undefined" != typeof n && $t(e).css("margin-right", n).removeData("margin-right");
                        });
                        var n = $t(document.body).data("padding-right");
                        $t(document.body).removeData("padding-right"), (document.body.style.paddingRight = n || "");
                    }),
                    (t._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        (t.className = se), document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e;
                    }),
                    (r._jQueryInterface = function(n, i) {
                        return this.each(function() {
                            var t = $t(this).data(te),
                                e = l({}, ie, $t(this).data(), "object" == typeof n && n ? n : {});
                            if ((t || ((t = new r(this, e)), $t(this).data(te, t)), "string" == typeof n)) {
                                if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n](i);
                            } else e.show && t.show(i);
                        });
                    }),
                    s(r, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.1.3";
                            },
                        },
                        {
                            key: "Default",
                            get: function() {
                                return ie;
                            },
                        },
                    ]),
                    r
                );
            })()),
            $t(document).on(oe.CLICK_DATA_API, fe, function(t) {
                var e,
                    n = this,
                    i = Fn.getSelectorFromElement(this);
                i && (e = document.querySelector(i));
                var r = $t(e).data(te) ? "toggle" : l({}, $t(e).data(), $t(this).data());
                ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
                var o = $t(e).one(oe.SHOW, function(t) {
                    t.isDefaultPrevented() ||
                        o.one(oe.HIDDEN, function() {
                            $t(n).is(":visible") && n.focus();
                        });
                });
                me._jQueryInterface.call($t(e), r, this);
            }),
            ($t.fn[Xt] = me._jQueryInterface),
            ($t.fn[Xt].Constructor = me),
            ($t.fn[Xt].noConflict = function() {
                return ($t.fn[Xt] = ne), me._jQueryInterface;
            }),
            me),
        zn =
        ((ve = "tooltip"),
            (Ee = "." + (ye = "bs.tooltip")),
            (Ce = (pe = e).fn[ve]),
            (Te = "bs-tooltip"),
            (be = new RegExp("(^|\\s)" + Te + "\\S+", "g")),
            (Ae = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !(Ie = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }),
                selector: !(Se = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                }),
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
            }),
            (we = "out"),
            (Ne = {
                HIDE: "hide" + Ee,
                HIDDEN: "hidden" + Ee,
                SHOW: (De = "show") + Ee,
                SHOWN: "shown" + Ee,
                INSERTED: "inserted" + Ee,
                CLICK: "click" + Ee,
                FOCUSIN: "focusin" + Ee,
                FOCUSOUT: "focusout" + Ee,
                MOUSEENTER: "mouseenter" + Ee,
                MOUSELEAVE: "mouseleave" + Ee,
            }),
            (Oe = "fade"),
            (ke = "show"),
            (Pe = ".tooltip-inner"),
            (je = ".arrow"),
            (He = "hover"),
            (Le = "focus"),
            (Re = "click"),
            (xe = "manual"),
            (We = (function() {
                function i(t, e) {
                    if ("undefined" == typeof h) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners();
                }
                var t = i.prototype;
                return (
                    (t.enable = function() {
                        this._isEnabled = !0;
                    }),
                    (t.disable = function() {
                        this._isEnabled = !1;
                    }),
                    (t.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled;
                    }),
                    (t.toggle = function(t) {
                        if (this._isEnabled)
                            if (t) {
                                var e = this.constructor.DATA_KEY,
                                    n = pe(t.currentTarget).data(e);
                                n || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), pe(t.currentTarget).data(e, n)),
                                    (n._activeTrigger.click = !n._activeTrigger.click),
                                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                            } else {
                                if (pe(this.getTipElement()).hasClass(ke)) return void this._leave(null, this);
                                this._enter(null, this);
                            }
                    }),
                    (t.dispose = function() {
                        clearTimeout(this._timeout),
                            pe.removeData(this.element, this.constructor.DATA_KEY),
                            pe(this.element).off(this.constructor.EVENT_KEY),
                            pe(this.element).closest(".modal").off("hide.bs.modal"),
                            this.tip && pe(this.tip).remove(),
                            (this._isEnabled = null),
                            (this._timeout = null),
                            (this._hoverState = null),
                            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                            (this._popper = null),
                            (this.element = null),
                            (this.config = null),
                            (this.tip = null);
                    }),
                    (t.show = function() {
                        var e = this;
                        if ("none" === pe(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var t = pe.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            pe(this.element).trigger(t);
                            var n = pe.contains(this.element.ownerDocument.documentElement, this.element);
                            if (t.isDefaultPrevented() || !n) return;
                            var i = this.getTipElement(),
                                r = Fn.getUID(this.constructor.NAME);
                            i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && pe(i).addClass(Oe);
                            var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                                s = this._getAttachment(o);
                            this.addAttachmentClass(s);
                            var a = !1 === this.config.container ? document.body : pe(document).find(this.config.container);
                            pe(i).data(this.constructor.DATA_KEY, this),
                                pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i).appendTo(a),
                                pe(this.element).trigger(this.constructor.Event.INSERTED),
                                (this._popper = new h(this.element, i, {
                                    placement: s,
                                    modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: je }, preventOverflow: { boundariesElement: this.config.boundary } },
                                    onCreate: function(t) {
                                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                    },
                                    onUpdate: function(t) {
                                        e._handlePopperPlacementChange(t);
                                    },
                                })),
                                pe(i).addClass(ke),
                                "ontouchstart" in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);
                            var l = function() {
                                e.config.animation && e._fixTransition();
                                var t = e._hoverState;
                                (e._hoverState = null), pe(e.element).trigger(e.constructor.Event.SHOWN), t === we && e._leave(null, e);
                            };
                            if (pe(this.tip).hasClass(Oe)) {
                                var c = Fn.getTransitionDurationFromElement(this.tip);
                                pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c);
                            } else l();
                        }
                    }),
                    (t.hide = function(t) {
                        var e = this,
                            n = this.getTipElement(),
                            i = pe.Event(this.constructor.Event.HIDE),
                            r = function() {
                                e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n),
                                    e._cleanTipClass(),
                                    e.element.removeAttribute("aria-describedby"),
                                    pe(e.element).trigger(e.constructor.Event.HIDDEN),
                                    null !== e._popper && e._popper.destroy(),
                                    t && t();
                            };
                        if ((pe(this.element).trigger(i), !i.isDefaultPrevented())) {
                            if (
                                (pe(n).removeClass(ke),
                                    "ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop),
                                    (this._activeTrigger[Re] = !1),
                                    (this._activeTrigger[Le] = !1),
                                    (this._activeTrigger[He] = !1),
                                    pe(this.tip).hasClass(Oe))
                            ) {
                                var o = Fn.getTransitionDurationFromElement(n);
                                pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
                            } else r();
                            this._hoverState = "";
                        }
                    }),
                    (t.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (t.isWithContent = function() {
                        return Boolean(this.getTitle());
                    }),
                    (t.addAttachmentClass = function(t) {
                        pe(this.getTipElement()).addClass(Te + "-" + t);
                    }),
                    (t.getTipElement = function() {
                        return (this.tip = this.tip || pe(this.config.template)[0]), this.tip;
                    }),
                    (t.setContent = function() {
                        var t = this.getTipElement();
                        this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()), pe(t).removeClass(Oe + " " + ke);
                    }),
                    (t.setElementContent = function(t, e) {
                        var n = this.config.html;
                        "object" == typeof e && (e.nodeType || e.jquery) ? (n ? pe(e).parent().is(t) || t.empty().append(e) : t.text(pe(e).text())) : t[n ? "html" : "text"](e);
                    }),
                    (t.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                    }),
                    (t._getAttachment = function(t) {
                        return Ie[t.toUpperCase()];
                    }),
                    (t._setListeners = function() {
                        var i = this;
                        this.config.trigger.split(" ").forEach(function(t) {
                                if ("click" === t)
                                    pe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                                        return i.toggle(t);
                                    });
                                else if (t !== xe) {
                                    var e = t === He ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                        n = t === He ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                                    pe(i.element)
                                        .on(e, i.config.selector, function(t) {
                                            return i._enter(t);
                                        })
                                        .on(n, i.config.selector, function(t) {
                                            return i._leave(t);
                                        });
                                }
                                pe(i.element)
                                    .closest(".modal")
                                    .on("hide.bs.modal", function() {
                                        return i.hide();
                                    });
                            }),
                            this.config.selector ? (this.config = l({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                    }),
                    (t._fixTitle = function() {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                    }),
                    (t._enter = function(t, e) {
                        var n = this.constructor.DATA_KEY;
                        (e = e || pe(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), pe(t.currentTarget).data(n, e)),
                        t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0),
                            pe(e.getTipElement()).hasClass(ke) || e._hoverState === De ?
                            (e._hoverState = De) :
                            (clearTimeout(e._timeout),
                                (e._hoverState = De),
                                e.config.delay && e.config.delay.show ?
                                (e._timeout = setTimeout(function() {
                                    e._hoverState === De && e.show();
                                }, e.config.delay.show)) :
                                e.show());
                    }),
                    (t._leave = function(t, e) {
                        var n = this.constructor.DATA_KEY;
                        (e = e || pe(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), pe(t.currentTarget).data(n, e)),
                        t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1),
                            e._isWithActiveTrigger() ||
                            (clearTimeout(e._timeout),
                                (e._hoverState = we),
                                e.config.delay && e.config.delay.hide ?
                                (e._timeout = setTimeout(function() {
                                    e._hoverState === we && e.hide();
                                }, e.config.delay.hide)) :
                                e.hide());
                    }),
                    (t._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1;
                    }),
                    (t._getConfig = function(t) {
                        return (
                            "number" == typeof(t = l({}, this.constructor.Default, pe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                            "number" == typeof t.title && (t.title = t.title.toString()),
                            "number" == typeof t.content && (t.content = t.content.toString()),
                            Fn.typeCheckConfig(ve, t, this.constructor.DefaultType),
                            t
                        );
                    }),
                    (t._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t;
                    }),
                    (t._cleanTipClass = function() {
                        var t = pe(this.getTipElement()),
                            e = t.attr("class").match(be);
                        null !== e && e.length && t.removeClass(e.join(""));
                    }),
                    (t._handlePopperPlacementChange = function(t) {
                        var e = t.instance;
                        (this.tip = e.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                    }),
                    (t._fixTransition = function() {
                        var t = this.getTipElement(),
                            e = this.config.animation;
                        null === t.getAttribute("x-placement") && (pe(t).removeClass(Oe), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = e));
                    }),
                    (i._jQueryInterface = function(n) {
                        return this.each(function() {
                            var t = pe(this).data(ye),
                                e = "object" == typeof n && n;
                            if ((t || !/dispose|hide/.test(n)) && (t || ((t = new i(this, e)), pe(this).data(ye, t)), "string" == typeof n)) {
                                if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n]();
                            }
                        });
                    }),
                    s(i, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.1.3";
                            },
                        },
                        {
                            key: "Default",
                            get: function() {
                                return Ae;
                            },
                        },
                        {
                            key: "NAME",
                            get: function() {
                                return ve;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function() {
                                return ye;
                            },
                        },
                        {
                            key: "Event",
                            get: function() {
                                return Ne;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function() {
                                return Ee;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function() {
                                return Se;
                            },
                        },
                    ]),
                    i
                );
            })()),
            (pe.fn[ve] = We._jQueryInterface),
            (pe.fn[ve].Constructor = We),
            (pe.fn[ve].noConflict = function() {
                return (pe.fn[ve] = Ce), We._jQueryInterface;
            }),
            We),
        Jn =
        ((qe = "popover"),
            (Ke = "." + (Fe = "bs.popover")),
            (Me = (Ue = e).fn[qe]),
            (Qe = "bs-popover"),
            (Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g")),
            (Ve = l({}, zn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' })),
            (Ye = l({}, zn.DefaultType, { content: "(string|element|function)" })),
            (ze = "fade"),
            (Ze = ".popover-header"),
            (Ge = ".popover-body"),
            ($e = {
                HIDE: "hide" + Ke,
                HIDDEN: "hidden" + Ke,
                SHOW: (Je = "show") + Ke,
                SHOWN: "shown" + Ke,
                INSERTED: "inserted" + Ke,
                CLICK: "click" + Ke,
                FOCUSIN: "focusin" + Ke,
                FOCUSOUT: "focusout" + Ke,
                MOUSEENTER: "mouseenter" + Ke,
                MOUSELEAVE: "mouseleave" + Ke,
            }),
            (Xe = (function(t) {
                var e, n;

                function i() {
                    return t.apply(this, arguments) || this;
                }
                (n = t), ((e = i).prototype = Object.create(n.prototype)), ((e.prototype.constructor = e).__proto__ = n);
                var r = i.prototype;
                return (
                    (r.isWithContent = function() {
                        return this.getTitle() || this._getContent();
                    }),
                    (r.addAttachmentClass = function(t) {
                        Ue(this.getTipElement()).addClass(Qe + "-" + t);
                    }),
                    (r.getTipElement = function() {
                        return (this.tip = this.tip || Ue(this.config.template)[0]), this.tip;
                    }),
                    (r.setContent = function() {
                        var t = Ue(this.getTipElement());
                        this.setElementContent(t.find(Ze), this.getTitle());
                        var e = this._getContent();
                        "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ge), e), t.removeClass(ze + " " + Je);
                    }),
                    (r._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content;
                    }),
                    (r._cleanTipClass = function() {
                        var t = Ue(this.getTipElement()),
                            e = t.attr("class").match(Be);
                        null !== e && 0 < e.length && t.removeClass(e.join(""));
                    }),
                    (i._jQueryInterface = function(n) {
                        return this.each(function() {
                            var t = Ue(this).data(Fe),
                                e = "object" == typeof n ? n : null;
                            if ((t || !/destroy|hide/.test(n)) && (t || ((t = new i(this, e)), Ue(this).data(Fe, t)), "string" == typeof n)) {
                                if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n]();
                            }
                        });
                    }),
                    s(i, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.1.3";
                            },
                        },
                        {
                            key: "Default",
                            get: function() {
                                return Ve;
                            },
                        },
                        {
                            key: "NAME",
                            get: function() {
                                return qe;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function() {
                                return Fe;
                            },
                        },
                        {
                            key: "Event",
                            get: function() {
                                return $e;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function() {
                                return Ke;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function() {
                                return Ye;
                            },
                        },
                    ]),
                    i
                );
            })(zn)),
            (Ue.fn[qe] = Xe._jQueryInterface),
            (Ue.fn[qe].Constructor = Xe),
            (Ue.fn[qe].noConflict = function() {
                return (Ue.fn[qe] = Me), Xe._jQueryInterface;
            }),
            Xe),
        Zn =
        ((en = "scrollspy"),
            (rn = "." + (nn = "bs.scrollspy")),
            (on = (tn = e).fn[en]),
            (sn = { offset: 10, method: "auto", target: "" }),
            (an = { offset: "number", method: "string", target: "(string|element)" }),
            (ln = { ACTIVATE: "activate" + rn, SCROLL: "scroll" + rn, LOAD_DATA_API: "load" + rn + ".data-api" }),
            (cn = "dropdown-item"),
            (hn = "active"),
            (un = '[data-spy="scroll"]'),
            (fn = ".active"),
            (dn = ".nav, .list-group"),
            (gn = ".nav-link"),
            (_n = ".nav-item"),
            (mn = ".list-group-item"),
            (pn = ".dropdown"),
            (vn = ".dropdown-item"),
            (yn = ".dropdown-toggle"),
            (En = "offset"),
            (Cn = "position"),
            (Tn = (function() {
                function n(t, e) {
                    var n = this;
                    (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(e)),
                    (this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    tn(this._scrollElement).on(ln.SCROLL, function(t) {
                            return n._process(t);
                        }),
                        this.refresh(),
                        this._process();
                }
                var t = n.prototype;
                return (
                    (t.refresh = function() {
                        var e = this,
                            t = this._scrollElement === this._scrollElement.window ? En : Cn,
                            r = "auto" === this._config.method ? t : this._config.method,
                            o = r === Cn ? this._getScrollTop() : 0;
                        (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()), [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function(t) {
                                var e,
                                    n = Fn.getSelectorFromElement(t);
                                if ((n && (e = document.querySelector(n)), e)) {
                                    var i = e.getBoundingClientRect();
                                    if (i.width || i.height) return [tn(e)[r]().top + o, n];
                                }
                                return null;
                            })
                            .filter(function(t) {
                                return t;
                            })
                            .sort(function(t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function(t) {
                                e._offsets.push(t[0]), e._targets.push(t[1]);
                            });
                    }),
                    (t.dispose = function() {
                        tn.removeData(this._element, nn),
                            tn(this._scrollElement).off(rn),
                            (this._element = null),
                            (this._scrollElement = null),
                            (this._config = null),
                            (this._selector = null),
                            (this._offsets = null),
                            (this._targets = null),
                            (this._activeTarget = null),
                            (this._scrollHeight = null);
                    }),
                    (t._getConfig = function(t) {
                        if ("string" != typeof(t = l({}, sn, "object" == typeof t && t ? t : {})).target) {
                            var e = tn(t.target).attr("id");
                            e || ((e = Fn.getUID(en)), tn(t.target).attr("id", e)), (t.target = "#" + e);
                        }
                        return Fn.typeCheckConfig(en, t, an), t;
                    }),
                    (t._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                    }),
                    (t._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                    }),
                    (t._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                    }),
                    (t._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i);
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return (this._activeTarget = null), void this._clear();
                            for (var r = this._offsets.length; r--;) {
                                this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
                            }
                        }
                    }),
                    (t._activate = function(e) {
                        (this._activeTarget = e), this._clear();
                        var t = this._selector.split(",");
                        t = t.map(function(t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                        });
                        var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
                        n.hasClass(cn) ?
                            (n.closest(pn).find(yn).addClass(hn), n.addClass(hn)) :
                            (n.addClass(hn),
                                n
                                .parents(dn)
                                .prev(gn + ", " + mn)
                                .addClass(hn),
                                n.parents(dn).prev(_n).children(gn).addClass(hn)),
                            tn(this._scrollElement).trigger(ln.ACTIVATE, { relatedTarget: e });
                    }),
                    (t._clear = function() {
                        var t = [].slice.call(document.querySelectorAll(this._selector));
                        tn(t).filter(fn).removeClass(hn);
                    }),
                    (n._jQueryInterface = function(e) {
                        return this.each(function() {
                            var t = tn(this).data(nn);
                            if ((t || ((t = new n(this, "object" == typeof e && e)), tn(this).data(nn, t)), "string" == typeof e)) {
                                if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                                t[e]();
                            }
                        });
                    }),
                    s(n, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.1.3";
                            },
                        },
                        {
                            key: "Default",
                            get: function() {
                                return sn;
                            },
                        },
                    ]),
                    n
                );
            })()),
            tn(window).on(ln.LOAD_DATA_API, function() {
                for (var t = [].slice.call(document.querySelectorAll(un)), e = t.length; e--;) {
                    var n = tn(t[e]);
                    Tn._jQueryInterface.call(n, n.data());
                }
            }),
            (tn.fn[en] = Tn._jQueryInterface),
            (tn.fn[en].Constructor = Tn),
            (tn.fn[en].noConflict = function() {
                return (tn.fn[en] = on), Tn._jQueryInterface;
            }),
            Tn),
        Gn =
        ((In = "." + (Sn = "bs.tab")),
            (An = (bn = e).fn.tab),
            (Dn = { HIDE: "hide" + In, HIDDEN: "hidden" + In, SHOW: "show" + In, SHOWN: "shown" + In, CLICK_DATA_API: "click" + In + ".data-api" }),
            (wn = "dropdown-menu"),
            (Nn = "active"),
            (On = "disabled"),
            (kn = "fade"),
            (Pn = "show"),
            (jn = ".dropdown"),
            (Hn = ".nav, .list-group"),
            (Ln = ".active"),
            (Rn = "> li > .active"),
            (xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
            (Wn = ".dropdown-toggle"),
            (Un = "> .dropdown-menu .active"),
            (qn = (function() {
                function i(t) {
                    this._element = t;
                }
                var t = i.prototype;
                return (
                    (t.show = function() {
                        var n = this;
                        if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn)) || bn(this._element).hasClass(On))) {
                            var t,
                                i,
                                e = bn(this._element).closest(Hn)[0],
                                r = Fn.getSelectorFromElement(this._element);
                            if (e) {
                                var o = "UL" === e.nodeName ? Rn : Ln;
                                i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1];
                            }
                            var s = bn.Event(Dn.HIDE, { relatedTarget: this._element }),
                                a = bn.Event(Dn.SHOW, { relatedTarget: i });
                            if ((i && bn(i).trigger(s), bn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())) {
                                r && (t = document.querySelector(r)), this._activate(this._element, e);
                                var l = function() {
                                    var t = bn.Event(Dn.HIDDEN, { relatedTarget: n._element }),
                                        e = bn.Event(Dn.SHOWN, { relatedTarget: i });
                                    bn(i).trigger(t), bn(n._element).trigger(e);
                                };
                                t ? this._activate(t, t.parentNode, l) : l();
                            }
                        }
                    }),
                    (t.dispose = function() {
                        bn.removeData(this._element, Sn), (this._element = null);
                    }),
                    (t._activate = function(t, e, n) {
                        var i = this,
                            r = ("UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln))[0],
                            o = n && r && bn(r).hasClass(kn),
                            s = function() {
                                return i._transitionComplete(t, r, n);
                            };
                        if (r && o) {
                            var a = Fn.getTransitionDurationFromElement(r);
                            bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a);
                        } else s();
                    }),
                    (t._transitionComplete = function(t, e, n) {
                        if (e) {
                            bn(e).removeClass(Pn + " " + Nn);
                            var i = bn(e.parentNode).find(Un)[0];
                            i && bn(i).removeClass(Nn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
                        }
                        if ((bn(t).addClass(Nn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Fn.reflow(t), bn(t).addClass(Pn), t.parentNode && bn(t.parentNode).hasClass(wn))) {
                            var r = bn(t).closest(jn)[0];
                            if (r) {
                                var o = [].slice.call(r.querySelectorAll(Wn));
                                bn(o).addClass(Nn);
                            }
                            t.setAttribute("aria-expanded", !0);
                        }
                        n && n();
                    }),
                    (i._jQueryInterface = function(n) {
                        return this.each(function() {
                            var t = bn(this),
                                e = t.data(Sn);
                            if ((e || ((e = new i(this)), t.data(Sn, e)), "string" == typeof n)) {
                                if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                                e[n]();
                            }
                        });
                    }),
                    s(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.1.3";
                        },
                    }, ]),
                    i
                );
            })()),
            bn(document).on(Dn.CLICK_DATA_API, xn, function(t) {
                t.preventDefault(), qn._jQueryInterface.call(bn(this), "show");
            }),
            (bn.fn.tab = qn._jQueryInterface),
            (bn.fn.tab.Constructor = qn),
            (bn.fn.tab.noConflict = function() {
                return (bn.fn.tab = An), qn._jQueryInterface;
            }),
            qn);
    !(function(t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    })(e),
    (t.Util = Fn),
    (t.Alert = Kn),
    (t.Button = Mn),
    (t.Carousel = Qn),
    (t.Collapse = Bn),
    (t.Dropdown = Vn),
    (t.Modal = Yn),
    (t.Popover = Jn),
    (t.Scrollspy = Zn),
    (t.Tab = Gn),
    (t.Tooltip = zn),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports !== "undefined") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(function($) {
    "use strict";
    var Slick = window.Slick || {};

    Slick = (function() {
        var instanceUid = 0;

        function Slick(element, settings) {
            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: "slick-dots",
                draggable: true,
                easing: "linear",
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: false,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000,
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false,
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = "hidden";
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = "visibilitychange";
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data("slick") || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== "undefined") {
                _.hidden = "mozHidden";
                _.visibilityChange = "mozvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                _.hidden = "webkitHidden";
                _.visibilityChange = "webkitvisibilitychange";
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.registerBreakpoints();
            _.init(true);
        }

        return Slick;
    })();

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack
            .find(".slick-active")
            .attr({
                "aria-hidden": "false",
            })
            .find("a, input, button, select")
            .attr({
                tabindex: "0",
            });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
        var _ = this;

        if (typeof index === "boolean") {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }

        _.unload();

        if (typeof index === "number") {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr("data-slick-index", index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                    height: targetHeight,
                },
                _.options.speed
            );
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {
        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                        left: targetLeft,
                    },
                    _.options.speed,
                    _.options.easing,
                    callback
                );
            } else {
                _.$slideTrack.animate({
                        top: targetLeft,
                    },
                    _.options.speed,
                    _.options.easing,
                    callback
                );
            }
        } else {
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft,
                }).animate({
                    animStart: targetLeft,
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = "translate(" + now + "px, 0px)";
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = "translate(0px," + now + "px)";
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    },
                });
            } else {
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
                } else {
                    animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {
                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };

    Slick.prototype.getNavTarget = function() {
        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;
    };

    Slick.prototype.asNavFor = function(index) {
        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && typeof asNavFor === "object") {
            asNavFor.each(function() {
                var target = $(this).slick("getSlick");
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };

    Slick.prototype.applyTransition = function(slide) {
        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase;
        } else {
            transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.autoPlay = function() {
        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };

    Slick.prototype.autoPlayClear = function() {
        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };

    Slick.prototype.autoPlayIterator = function() {
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {
            if (_.options.infinite === false) {
                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {
                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }

            _.slideHandler(slideTo);
        }
    };

    Slick.prototype.buildArrows = function() {
        var _ = this;

        if (_.options.arrows === true) {
            _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
            _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");

            if (_.slideCount > _.options.slidesToShow) {
                _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                }
            } else {
                _.$prevArrow
                    .add(_.$nextArrow)

                .addClass("slick-hidden")
                    .attr({
                        "aria-disabled": "true",
                        tabindex: "-1",
                    });
            }
        }
    };

    Slick.prototype.buildDots = function() {
        var _ = this,
            i,
            dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$slider.addClass("slick-dotted");

            dot = $("<ul />").addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find("li").first().addClass("slick-active");
        }
    };

    Slick.prototype.buildOut = function() {
        var _ = this;

        _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr("data-slick-index", index)
                .data("originalStyling", $(element).attr("style") || "");
        });

        _.$slider.addClass("slick-slider");

        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css("opacity", 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass("draggable");
        }
    };

    Slick.prototype.buildRows = function() {
        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 0) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement("div");
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement("div");
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider
                .children()
                .children()
                .children()
                .css({
                    width: 100 / _.options.slidesPerRow + "%",
                    display: "inline-block",
                });
        }
    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === "window") {
            respondToWidth = windowWidth;
        } else if (_.respondTo === "slider") {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === "min") {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === "unslick") {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === "unslick") {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
            }
        }
    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is("a")) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is("li")) {
            $target = $target.closest("li");
        }

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {
            case "previous":
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case "next":
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case "index":
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger("focus");
                break;

            default:
                return;
        }
    };

    Slick.prototype.checkNavigable = function(index) {
        var _ = this,
            navigables,
            prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {
        var _ = this;

        if (_.options.dots && _.$dots !== null) {
            $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off("keydown.slick", _.keyHandler);
            }
        }

        _.$slider.off("focus.slick blur.slick");

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
            _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
                _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
            }
        }

        _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
        _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
        _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
        _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);

        _.$list.off("click.slick", _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off("keydown.slick", _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off("click.slick", _.selectHandler);
        }

        $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);

        $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);

        $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);

        $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function() {
        var _ = this;

        _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
        _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function() {
        var _ = this,
            originalSlides;

        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr("style");
            _.$slider.empty().append(originalSlides);
        }
    };

    Slick.prototype.clickHandler = function(event) {
        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Slick.prototype.destroy = function(refresh) {
        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $(".slick-cloned", _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {
            _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {
            _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }

        if (_.$slides) {
            _.$slides
                .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                .removeAttr("aria-hidden")
                .removeAttr("data-slick-index")
                .each(function() {
                    $(this).attr("style", $(this).data("originalStyling"));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass("slick-slider");
        _.$slider.removeClass("slick-initialized");
        _.$slider.removeClass("slick-dotted");

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger("destroy", [_]);
        }
    };

    Slick.prototype.disableTransition = function(slide) {
        var _ = this,
            transition = {};

        transition[_.transitionType] = "";

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {
        var _ = this;

        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex,
            });

            _.$slides.eq(slideIndex).animate({
                    opacity: 1,
                },
                _.options.speed,
                _.options.easing,
                callback
            );
        } else {
            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex,
            });

            if (callback) {
                setTimeout(function() {
                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }
        }
    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {
        var _ = this;

        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).animate({
                    opacity: 0,
                    zIndex: _.options.zIndex - 2,
                },
                _.options.speed,
                _.options.easing
            );
        } else {
            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2,
            });
        }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
        var _ = this;

        if (filter !== null) {
            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.focusHandler = function() {
        var _ = this;

        _.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(event) {
            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {
                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(":focus");
                    _.autoPlay();
                }
            }, 0);
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
        var _ = this;
        return _.currentSlide;
    };

    Slick.prototype.getDotCount = function() {
        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function(slideIndex) {
        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                coef = -1;

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2;
                    }
                }
                verticalOffset = verticalHeight * _.options.slidesToShow * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = (_.slideCount % _.options.slidesToScroll) * _.slideWidth * -1;
                        verticalOffset = (_.slideCount % _.options.slidesToScroll) * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = (_.slideWidth * Math.floor(_.options.slidesToShow)) / 2 - (_.slideWidth * _.slideCount) / 2;
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }

        if (_.options.variableWidth === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
        var _ = this;

        return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function() {
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;
    };

    Slick.prototype.getSlick = function() {
        return this;
    };

    Slick.prototype.getSlideCount = function() {
        var _ = this,
            slidesTraversed,
            swipedSlide,
            centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find(".slick-slide").each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;

            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
        var _ = this;

        _.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(slide),
                },
            },
            dontAnimate
        );
    };

    Slick.prototype.init = function(creation) {
        var _ = this;

        if (!$(_.$slider).hasClass("slick-initialized")) {
            $(_.$slider).addClass("slick-initialized");

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }

        if (creation) {
            _.$slider.trigger("init", [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {
            _.paused = false;
            _.autoPlay();
        }
    };

    Slick.prototype.initADA = function() {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                return val >= 0 && val < _.slideCount;
            });

        _.$slides
            .add(_.$slideTrack.find(".slick-cloned"))
            .attr({
                "aria-hidden": "true",
                tabindex: "-1",
            })
            .find("a, input, button, select")
            .attr({
                tabindex: "-1",
            });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + _.instanceUid + i,
                    tabindex: -1,
                });

                if (slideControlIndex !== -1) {
                    var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;
                    if ($("#" + ariaButtonControl).length) {
                        $(this).attr({
                            "aria-describedby": ariaButtonControl,
                        });
                    }
                }
            });

            _.$dots
                .attr("role", "tablist")
                .find("li")
                .each(function(i) {
                    var mappedSlideIndex = tabControlIndexes[i];

                    $(this).attr({
                        role: "presentation",
                    });

                    $(this)
                        .find("button")
                        .first()
                        .attr({
                            role: "tab",
                            id: "slick-slide-control" + _.instanceUid + i,
                            "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
                            "aria-label": i + 1 + " of " + numDotGroups,
                            "aria-selected": null,
                            tabindex: "-1",
                        });
                })
                .eq(_.currentSlide)
                .find("button")
                .attr({
                    "aria-selected": "true",
                    tabindex: "0",
                })
                .end();
        }

        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({ tabindex: "0" });
            } else {
                _.$slides.eq(i).removeAttr("tabindex");
            }
        }

        _.activateADA();
    };

    Slick.prototype.initArrowEvents = function() {
        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off("click.slick").on(
                "click.slick", {
                    message: "previous",
                },
                _.changeSlide
            );
            _.$nextArrow.off("click.slick").on(
                "click.slick", {
                    message: "next",
                },
                _.changeSlide
            );

            if (_.options.accessibility === true) {
                _.$prevArrow.on("keydown.slick", _.keyHandler);
                _.$nextArrow.on("keydown.slick", _.keyHandler);
            }
        }
    };

    Slick.prototype.initDotEvents = function() {
        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $("li", _.$dots).on(
                "click.slick", {
                    message: "index",
                },
                _.changeSlide
            );

            if (_.options.accessibility === true) {
                _.$dots.on("keydown.slick", _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
            $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initSlideEvents = function() {
        var _ = this;

        if (_.options.pauseOnHover) {
            _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
            _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initializeEvents = function() {
        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on(
            "touchstart.slick mousedown.slick", {
                action: "start",
            },
            _.swipeHandler
        );
        _.$list.on(
            "touchmove.slick mousemove.slick", {
                action: "move",
            },
            _.swipeHandler
        );
        _.$list.on(
            "touchend.slick mouseup.slick", {
                action: "end",
            },
            _.swipeHandler
        );
        _.$list.on(
            "touchcancel.slick mouseleave.slick", {
                action: "end",
            },
            _.swipeHandler
        );

        _.$list.on("click.slick", _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on("keydown.slick", _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on("click.slick", _.selectHandler);
        }

        $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));

        $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);

        $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
        $(_.setPosition);
    };

    Slick.prototype.initUI = function() {
        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.show();
        }
    };

    Slick.prototype.keyHandler = function(event) {
        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? "next" : "previous",
                    },
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? "previous" : "next",
                    },
                });
            }
        }
    };

    Slick.prototype.lazyLoad = function() {
        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;

        function loadImages(imagesScope) {
            $("img[data-lazy]", imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr("data-lazy"),
                    imageSrcSet = $(this).attr("data-srcset"),
                    imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"),
                    imageToLoad = document.createElement("img");

                imageToLoad.onload = function() {
                    image.animate({ opacity: 0 }, 100, function() {
                        if (imageSrcSet) {
                            image.attr("srcset", imageSrcSet);

                            if (imageSizes) {
                                image.attr("sizes", imageSizes);
                            }
                        }

                        image.attr("src", imageSource).animate({ opacity: 1 }, 200, function() {
                            image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        });
                        _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
                    });
                };

                imageToLoad.onerror = function() {
                    image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");

                    _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
                };

                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === "anticipated") {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find(".slick-slide");

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find(".slick-slide");
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };

    Slick.prototype.loadSlider = function() {
        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1,
        });

        _.$slider.removeClass("slick-loading");

        _.initUI();

        if (_.options.lazyLoad === "progressive") {
            _.progressiveLazyLoad();
        }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {
        var _ = this;

        _.changeSlide({
            data: {
                message: "next",
            },
        });
    };

    Slick.prototype.orientationChange = function() {
        var _ = this;

        _.checkResponsive();
        _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {
        var _ = this;

        _.autoPlayClear();
        _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {
        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };

    Slick.prototype.postSlide = function(index) {
        var _ = this;

        if (!_.unslicked) {
            _.$slider.trigger("afterChange", [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr("tabindex", 0).focus();
                }
            }
        }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
        var _ = this;

        _.changeSlide({
            data: {
                message: "previous",
            },
        });
    };

    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function(tryCount) {
        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $("img[data-lazy]", _.$slider),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ($imgsToLoad.length) {
            image = $imgsToLoad.first();
            imageSource = image.attr("data-lazy");
            imageSrcSet = image.attr("data-srcset");
            imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
            imageToLoad = document.createElement("img");

            imageToLoad.onload = function() {
                if (imageSrcSet) {
                    image.attr("srcset", imageSrcSet);

                    if (imageSizes) {
                        image.attr("sizes", imageSizes);
                    }
                }

                image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
                _.progressiveLazyLoad();
            };

            imageToLoad.onerror = function() {
                if (tryCount < 3) {
                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function() {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {
                    image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");

                    _.$slider.trigger("lazyLoadError", [_, image, imageSource]);

                    _.progressiveLazyLoad();
                }
            };

            imageToLoad.src = imageSource;
        } else {
            _.$slider.trigger("allImagesLoaded", [_]);
        }
    };

    Slick.prototype.refresh = function(initializing) {
        var _ = this,
            currentSlide,
            lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {
            _.changeSlide({
                    data: {
                        message: "index",
                        index: currentSlide,
                    },
                },
                false
            );
        }
    };

    Slick.prototype.registerBreakpoints = function() {
        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
            _.respondTo = _.options.respondTo || "window";

            for (breakpoint in responsiveSettings) {
                l = _.breakpoints.length - 1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }

            _.breakpoints.sort(function(a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };

    Slick.prototype.reinit = function() {
        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on("click.slick", _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger("reInit", [_]);
    };

    Slick.prototype.resize = function() {
        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
        var _ = this;

        if (typeof index === "boolean") {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.setCSS = function(position) {
        var _ = this,
            positionProps = {},
            x,
            y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
        y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = "translate(" + x + ", " + y + ")";
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
                _.$slideTrack.css(positionProps);
            }
        }
    };

    Slick.prototype.setDimensions = function() {
        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: "0px " + _.options.centerPadding,
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + " 0px",
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();

        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function() {
        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: "relative",
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0,
                });
            } else {
                $(element).css({
                    position: "relative",
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0,
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1,
        });
    };

    Slick.prototype.setHeight = function() {
        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css("height", targetHeight);
        }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;

        if ($.type(arguments[0]) === "object") {
            option = arguments[0];
            refresh = arguments[1];
            type = "multiple";
        } else if ($.type(arguments[0]) === "string") {
            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") {
                type = "responsive";
            } else if (typeof arguments[1] !== "undefined") {
                type = "single";
            }
        }

        if (type === "single") {
            _.options[option] = value;
        } else if (type === "multiple") {
            $.each(option, function(opt, val) {
                _.options[opt] = val;
            });
        } else if (type === "responsive") {
            for (item in value) {
                if ($.type(_.options.responsive) !== "array") {
                    _.options.responsive = [value[item]];
                } else {
                    l = _.options.responsive.length - 1;

                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {
                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                            _.options.responsive.splice(l, 1);
                        }

                        l--;
                    }

                    _.options.responsive.push(value[item]);
                }
            }
        }

        if (refresh) {
            _.unload();
            _.reinit();
        }
    };

    Slick.prototype.setPosition = function() {
        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger("setPosition", [_]);
    };

    Slick.prototype.setProps = function() {
        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? "top" : "left";

        if (_.positionProp === "top") {
            _.$slider.addClass("slick-vertical");
        } else {
            _.$slider.removeClass("slick-vertical");
        }

        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === "number") {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = "OTransform";
            _.transformType = "-o-transform";
            _.transitionType = "OTransition";
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = "MozTransform";
            _.transformType = "-moz-transform";
            _.transitionType = "MozTransition";
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = "webkitTransform";
            _.transformType = "-webkit-transform";
            _.transitionType = "webkitTransition";
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = "msTransform";
            _.transformType = "-ms-transform";
            _.transitionType = "msTransition";
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = "transform";
            _.transformType = "transform";
            _.transitionType = "transition";
        }
        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function(index) {
        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;

        allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");

        _.$slides.eq(index).addClass("slick-current");

        if (_.options.centerMode === true) {
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {
                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
                }

                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center");
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass("slick-center");
                }
            }

            _.$slides.eq(index).addClass("slick-center");
        } else {
            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false");
            } else if (allSlides.length <= _.options.slidesToShow) {
                allSlides.addClass("slick-active").attr("aria-hidden", "false");
            } else {
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
                } else {
                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
                }
            }
        }

        if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {
        var _ = this,
            i,
            slideIndex,
            infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex])
                        .clone(true)
                        .attr("id", "")
                        .attr("data-slick-index", slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack)
                        .addClass("slick-cloned");
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex])
                        .clone(true)
                        .attr("id", "")
                        .attr("data-slick-index", slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack)
                        .addClass("slick-cloned");
                }
                _.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function() {
                        $(this).attr("id", "");
                    });
            }
        }
    };

    Slick.prototype.interrupt = function(toggle) {
        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function(event) {
        var _ = this;

        var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide");

        var index = parseInt(targetElement.attr("data-slick-index"));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideHandler(index, false, true);
            return;
        }

        _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick("getSlick");

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {
                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };

    Slick.prototype.startLoad = function() {
        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.hide();
        }

        _.$slider.addClass("slick-loading");
    };

    Slick.prototype.swipeDirection = function() {
        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round((r * 180) / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? "left" : "right";
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? "left" : "right";
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? "right" : "left";
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return "down";
            } else {
                return "up";
            }
        }

        return "vertical";
    };

    Slick.prototype.swipeEnd = function(event) {
        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger("edge", [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            direction = _.swipeDirection();

            switch (direction) {
                case "left":
                case "down":
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case "right":
                case "up":
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:
            }

            if (direction != "vertical") {
                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger("swipe", [_, direction]);
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };

    Slick.prototype.swipeHandler = function(event) {
        var _ = this;

        if (_.options.swipe === false || ("ontouchend" in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }

        switch (event.data.action) {
            case "start":
                _.swipeStart(event);
                break;

            case "move":
                _.swipeMove(event);
                break;

            case "end":
                _.swipeEnd(event);
                break;
        }
    };

    Slick.prototype.swipeMove = function(event) {
        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches,
            verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || (touches && touches.length !== 1)) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === "right") || (_.currentSlide >= _.getDotCount() && swipeDirection === "left")) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function(event) {
        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
        var _ = this;

        if (_.$slidesCache !== null) {
            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.unload = function() {
        var _ = this;

        $(".slick-cloned", _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    };

    Slick.prototype.unslick = function(fromBreakpoint) {
        var _ = this;
        _.$slider.trigger("unslick", [_, fromBreakpoint]);
        _.destroy();
    };

    Slick.prototype.updateArrows = function() {
        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
            _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");

            if (_.currentSlide === 0) {
                _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            }
        }
    };

    Slick.prototype.updateDots = function() {
        var _ = this;

        if (_.$dots !== null) {
            _.$dots.find("li").removeClass("slick-active").end();

            _.$dots
                .find("li")
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass("slick-active");
        }
    };

    Slick.prototype.visibility = function() {
        var _ = this;

        if (_.options.autoplay) {
            if (document[_.hidden]) {
                _.interrupted = true;
            } else {
                _.interrupted = false;
            }
        }
    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == "object" || typeof opt == "undefined") _[i].slick = new Slick(_[i], opt);
            else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != "undefined") return ret;
        }
        return _;
    };
});

/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!(function(a, b) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], b);
    else if ("undefined" != typeof exports) b(module, exports);
    else {
        var c = { exports: {} };
        b(c, c.exports), (a.WOW = c.exports);
    }
})(this, function(a, b) {
    "use strict";

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }

    function d(a, b) {
        return b.indexOf(a) >= 0;
    }

    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d;
            }
        return a;
    }

    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
    }

    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
            c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
            d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
            e = void 0;
        return null != document.createEvent ? ((e = document.createEvent("CustomEvent")), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? ((e = document.createEventObject()), (e.eventType = a)) : (e.eventName = a), e;
    }

    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]();
    }

    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : (a[b] = c);
    }

    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
    }

    function k() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }
    Object.defineProperty(b, "__esModule", { value: !0 });
    var l,
        m,
        n = (function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b;
            };
        })(),
        o =
        window.WeakMap ||
        window.MozWeakMap ||
        (function() {
            function a() {
                c(this, a), (this.keys = []), (this.values = []);
            }
            return (
                n(a, [{
                        key: "get",
                        value: function(a) {
                            for (var b = 0; b < this.keys.length; b++) {
                                var c = this.keys[b];
                                if (c === a) return this.values[b];
                            }
                        },
                    },
                    {
                        key: "set",
                        value: function(a, b) {
                            for (var c = 0; c < this.keys.length; c++) {
                                var d = this.keys[c];
                                if (d === a) return (this.values[c] = b), this;
                            }
                            return this.keys.push(a), this.values.push(b), this;
                        },
                    },
                ]),
                a
            );
        })(),
        p =
        window.MutationObserver ||
        window.WebkitMutationObserver ||
        window.MozMutationObserver ||
        ((m = l = (function() {
                function a() {
                    c(this, a),
                        "undefined" != typeof console &&
                        null !== console &&
                        (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."));
                }
                return n(a, [{ key: "observe", value: function() {} }]), a;
            })()),
            (l.notSupported = !0),
            m),
        q =
        window.getComputedStyle ||
        function(a) {
            var b = /(\-([a-z]){1})/g;
            return {
                getPropertyValue: function(c) {
                    "float" === c && (c = "styleFloat"),
                        b.test(c) &&
                        c.replace(b, function(a, b) {
                            return b.toUpperCase();
                        });
                    var d = a.currentStyle;
                    return (null != d ? d[c] : void 0) || null;
                },
            };
        },
        r = (function() {
            function a() {
                var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                c(this, a),
                    (this.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null, resetAnimation: !0 }),
                    (this.animate = (function() {
                        return "requestAnimationFrame" in window ?

                            function(a) {
                                return window.requestAnimationFrame(a);
                            } :
                            function(a) {
                                return a();
                            };
                    })()),
                    (this.vendors = ["moz", "webkit"]),
                    (this.start = this.start.bind(this)),
                    (this.resetAnimation = this.resetAnimation.bind(this)),
                    (this.scrollHandler = this.scrollHandler.bind(this)),
                    (this.scrollCallback = this.scrollCallback.bind(this)),
                    (this.scrolled = !0),
                    (this.config = e(b, this.defaults)),
                    null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)),
                    (this.animationNameCache = new o()),
                    (this.wowEvent = g(this.config.boxClass));
            }
            return (
                n(a, [{
                        key: "init",
                        value: function() {
                            (this.element = window.document.documentElement), d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), (this.finished = []);
                        },
                    },
                    {
                        key: "start",
                        value: function() {
                            var a = this;
                            if (((this.stopped = !1), (this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass))), (this.all = this.boxes.slice(0)), this.boxes.length))
                                if (this.disabled()) this.resetStyle();
                                else
                                    for (var b = 0; b < this.boxes.length; b++) {
                                        var c = this.boxes[b];
                                        this.applyStyle(c, !0);
                                    }
                            if (
                                (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), (this.interval = setInterval(this.scrollCallback, 50))), this.config.live)
                            ) {
                                var d = new p(function(b) {
                                    for (var c = 0; c < b.length; c++)
                                        for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                            var f = d.addedNodes[e];
                                            a.doSync(f);
                                        }
                                });
                                d.observe(document.body, { childList: !0, subtree: !0 });
                            }
                        },
                    },
                    {
                        key: "stop",
                        value: function() {
                            (this.stopped = !0), j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval);
                        },
                    },
                    {
                        key: "sync",
                        value: function() {
                            p.notSupported && this.doSync(this.element);
                        },
                    },
                    {
                        key: "doSync",
                        value: function(a) {
                            if ((("undefined" != typeof a && null !== a) || (a = this.element), 1 === a.nodeType)) {
                                a = a.parentNode || a;
                                for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                                    var e = b[c];
                                    d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), (this.scrolled = !0));
                                }
                            }
                        },
                    },
                    {
                        key: "show",
                        value: function(a) {
                            return (
                                this.applyStyle(a),
                                (a.className = a.className + " " + this.config.animateClass),
                                null != this.config.callback && this.config.callback(a),
                                h(a, this.wowEvent),
                                this.config.resetAnimation &&
                                (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)),
                                a
                            );
                        },
                    },
                    {
                        key: "applyStyle",
                        value: function(a, b) {
                            var c = this,
                                d = a.getAttribute("data-wow-duration"),
                                e = a.getAttribute("data-wow-delay"),
                                f = a.getAttribute("data-wow-iteration");
                            return this.animate(function() {
                                return c.customStyle(a, b, d, e, f);
                            });
                        },
                    },
                    {
                        key: "resetStyle",
                        value: function() {
                            for (var a = 0; a < this.boxes.length; a++) {
                                var b = this.boxes[a];
                                b.style.visibility = "visible";
                            }
                        },
                    },
                    {
                        key: "resetAnimation",
                        value: function(a) {
                            if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                                var b = a.target || a.srcElement;
                                b.className = b.className.replace(this.config.animateClass, "").trim();
                            }
                        },
                    },
                    {
                        key: "customStyle",
                        value: function(a, b, c, d, e) {
                            return (
                                b && this.cacheAnimationName(a),
                                (a.style.visibility = b ? "hidden" : "visible"),
                                c && this.vendorSet(a.style, { animationDuration: c }),
                                d && this.vendorSet(a.style, { animationDelay: d }),
                                e && this.vendorSet(a.style, { animationIterationCount: e }),
                                this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }),
                                a
                            );
                        },
                    },
                    {
                        key: "vendorSet",
                        value: function(a, b) {
                            for (var c in b)
                                if (b.hasOwnProperty(c)) {
                                    var d = b[c];
                                    a["" + c] = d;
                                    for (var e = 0; e < this.vendors.length; e++) {
                                        var f = this.vendors[e];
                                        a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                                    }
                                }
                        },
                    },
                    {
                        key: "vendorCSS",
                        value: function(a, b) {
                            for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                                var f = this.vendors[e];
                                d = d || c.getPropertyCSSValue("-" + f + "-" + b);
                            }
                            return d;
                        },
                    },
                    {
                        key: "animationName",
                        value: function(a) {
                            var b = void 0;
                            try {
                                b = this.vendorCSS(a, "animation-name").cssText;
                            } catch (c) {
                                b = q(a).getPropertyValue("animation-name");
                            }
                            return "none" === b ? "" : b;
                        },
                    },
                    {
                        key: "cacheAnimationName",
                        value: function(a) {
                            return this.animationNameCache.set(a, this.animationName(a));
                        },
                    },
                    {
                        key: "cachedAnimationName",
                        value: function(a) {
                            return this.animationNameCache.get(a);
                        },
                    },
                    {
                        key: "scrollHandler",
                        value: function() {
                            this.scrolled = !0;
                        },
                    },
                    {
                        key: "scrollCallback",
                        value: function() {
                            if (this.scrolled) {
                                this.scrolled = !1;
                                for (var a = [], b = 0; b < this.boxes.length; b++) {
                                    var c = this.boxes[b];
                                    if (c) {
                                        if (this.isVisible(c)) {
                                            this.show(c);
                                            continue;
                                        }
                                        a.push(c);
                                    }
                                }
                                (this.boxes = a), this.boxes.length || this.config.live || this.stop();
                            }
                        },
                    },
                    {
                        key: "offsetTop",
                        value: function(a) {
                            for (; void 0 === a.offsetTop;) a = a.parentNode;
                            for (var b = a.offsetTop; a.offsetParent;)(a = a.offsetParent), (b += a.offsetTop);
                            return b;
                        },
                    },
                    {
                        key: "isVisible",
                        value: function(a) {
                            var b = a.getAttribute("data-wow-offset") || this.config.offset,
                                c = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset,
                                d = c + Math.min(this.element.clientHeight, k()) - b,
                                e = this.offsetTop(a),
                                f = e + a.clientHeight;
                            return d >= e && f >= c;
                        },
                    },
                    {
                        key: "disabled",
                        value: function() {
                            return !this.config.mobile && f(navigator.userAgent);
                        },
                    },
                ]),
                a
            );
        })();
    (b["default"] = r), (a.exports = b["default"]);
});
$(document).ready(function() {
    var time = 1;
    var $bar, $slick, isPause, tick, percentTime;
    $slick = $(".slider");
    $slick.slick({ arrows: false, speed: 1200, adaptiveHeight: false, fade: true });
    $bar = $(".slider-progress .progress");

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 30);
    }

    function interval() {
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $bar.css({ width: percentTime + "%" });
            if (percentTime >= 100) {
                $slick.slick("slickNext");
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $bar.css({ width: 0 + "%" });
        clearTimeout(tick);
    }
    startProgressbar();
    $(".slick-next, .slick-prev").click(function() {
        startProgressbar();
    });
});
$(".slider").on("init reInit afterChange", function(event, slick) {
    $(".news__counter").html(slick.slickCurrentSlide() + 1 + " / " + slick.slideCount);
});
$(document).ready(function() {
    var $slider = $(".auto-motive-slider");
    var $progressBar = $(".progress-state");
    var $progressBarLabel = $(".slider__label-one");
    $slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;
        $progressBar.css("background-size", calc + "% 100%").attr("aria-valuenow", calc);
        $progressBarLabel.text(calc + "% completed");
    });
    $slider.slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    });
});
$(".ubermenu-responsive-toggle").on("mousedown touchstart", function() {
    $("body").toggleClass("mobile-submenu-fixed");
});
$(window).scroll(function() {
    var sticky = $("body"),
        scroll = $(window).scrollTop();
    if (scroll >= 10) sticky.addClass("sticky");
    else sticky.removeClass("sticky");
});
$(".c-header_nav_burger").click(function() {
    $("body").toggleClass("has-navOpen");
    $("body").toggleClass("ubermenu-responsive-toggle-open");
});
$("ul.nav-tabs a").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
});
new WOW().init();
$(document).ready(function() {
    $(".c-header_nav_burger").click(function() {
        $(".nav-main").toggleClass("block");
    });
});
$(document).ready(function() {
    $(".quick").click(function() {
        $(".form-popup").addClass("formopen");
    });
    $(".cancel").click(function() {
        $(".form-popup").removeClass("formopen");
    });
});
$(document).ready(function() {
    $('.home-banner').slick({ slidesToShow: 4, autoplaySpeed: 1000, waitForAnimate: false, slidesToScroll: 1, arrows: false, dots: false, focusOnSelect: true, autoplay: true, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
    $('.year-slider').slick({ slidesToShow: 4, speed: 2000, slidesToScroll: 1, arrows: true, dots: false, focusOnSelect: true, autoplay: true, asNavFor: '.year-details-slider', responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
    $('.year-details-slider').slick({ slidesToShow: 4, speed: 2000, slidesToScroll: 1, asNavFor: '.year-slider', dots: false, arrows: true, autoplay: true, focusOnSelect: true, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
});;
(function() {
    function id(v) { return document.getElementById(v); }

    function loadbar() {
        var ovrl = id("overlay"),
            img = document.images,
            c = 0;
        tot = img.length;

        function imgLoaded() {
            c += 1;
            if (c === tot) return doneLoading();
        }

        function doneLoading() {
            ovrl.style.opacity = 0;
            setTimeout(function() {
                ovrl.style.display = "none";
            }, 1200);
        }
        for (var i = 0; i < tot; i++) {
            var tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());