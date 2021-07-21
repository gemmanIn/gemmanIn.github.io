'use strict';
var uber_supports = function() {
    var d = document.createElement("div"),
        f = ["Khtml", "Ms", "O", "Moz", "Webkit"];
    return function(h) {
        var l = f.length;
        if (h in d.style) return !0;
        for (h = h.replace(/^[a-z]/, function(d) { return d.toUpperCase() }); l--;)
            if (f[l] + h in d.style) return !0;
        return !1
    }
}();

function uber_op(d, f, h) {
    if (!ubermenu_data.hasOwnProperty(d)) return h;
    d = ubermenu_data[d];
    if (f.hasOwnProperty("datatype")) switch (f.datatype) {
        case "numeric":
            d = parseInt(d);
            break;
        case "boolean":
            d = "on" == d || 1 == d || "1" == d ? !0 : !1
    }
    return d
}(function(d, f) {
    var h = function(d, f, h) {
        var k;
        return function() {
            var l = this,
                n = arguments;
            k ? clearTimeout(k) : h && d.apply(l, n);
            k = setTimeout(function() {
                h || d.apply(l, n);
                k = null
            }, f || 100)
        }
    };
    jQuery.fn[f] = function(d) { return d ? this.bind("resize", h(d)) : this.trigger(f) }
})(jQuery, "ubersmartresize");
(function(d, f, h, l) {
    function k(a, c) {
        var b = this;
        this.element = a;
        this.$ubermenu = d(this.element);
        this.orientation = this.$ubermenu.hasClass("ubermenu-vertical") ? "v" : "h";
        this.settings = d.extend({}, r, c);
        this._defaults = r;
        this._name = "ubermenu";
        this.settings.responsive = this.$ubermenu.hasClass("ubermenu-responsive") ? !0 : !1;
        this.settings.debug && this.settings.debug_onscreen && (d("body").append('<div id="uber-onscreen-debug" style="color:#eee;z-index:10000;background:#222;position:fixed;left:0; bottom:0; width:100%; height:50%; padding:10px;overflow:scroll;"> '),
            this.debug_target = d("#uber-onscreen-debug"), this.debug_target.on("click", function() { 100 > d(this).height() ? d(this).height("50%") : d(this).height("50px") }));
        this.log("-- START UBERMENU DEBUG --");
        this.suppress_clicks = this.events_disabled = !1;
        (this.touchenabled = "ontouchstart" in f || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) ? this.$ubermenu.addClass("ubermenu-touch"): this.$ubermenu.addClass("ubermenu-notouch");
        f.navigator.pointerEnabled ? (this.touchStart = "pointerdown", this.touchEnd = "pointerup",
            this.touchMove = "pointermove", this.suppress_clicks = !0) : f.navigator.msPointerEnabled ? (this.touchStart = "MSPointerDown", this.touchEnd = "MSPointerUp", this.touchMove = "MSPointerMove", this.suppress_clicks = !0) : (this.touchStart = "touchstart", this.touchEnd = "touchend", this.touchMove = "touchmove");
        this.toggleevent = "touchend" == this.touchEnd ? this.touchEnd + " click" : this.touchEnd;
        this.transitionend = "transitionend.ubermenu webkitTransitionEnd.ubermenu msTransitionEnd.ubermenu oTransitionEnd.ubermenu";
        (this.transitions =
            uber_supports("transition") && !this.$ubermenu.hasClass("ubermenu-transition-none")) || this.$ubermenu.addClass("ubermenu-no-transitions");
        a = navigator.userAgent.toLowerCase();
        this.log(a);
        this.allow_trigger_overrides = !0;
        this.noTouchEnd = !1;
        c = this.settings.android = /android/.test(a);
        var e = this.settings.windowsmobile = /iemobile/.test(a);
        if (c || e)
            if (c && !(/chrome/.test(a) || /firefox/.test(a) || /opera/.test(a)) || e) this.settings.touchOffClose = !1, this.disableTransitions(), c && !e && (this.$ubermenu.removeClass("ubermenu-trigger-hover_intent").removeClass("ubermenu-trigger-hover").addClass("ubermenu-trigger-click"),
                this.allow_trigger_overrides = this.settings.touchEvents = !1);
        e && (this.log("disable touchoff close and accessibility"), this.settings.touchOffClose = !1, this.settings.accessible = !1, this.settings.mouseEvents = !1);
        !/chrome/.test(a) && /safari/.test(a) && /version\/5/.test(a) && this.disableTransitions();
        var g = this.last_width = f.innerWidth,
            p = b.$ubermenu.find(".ubermenu-item-level-0.ubermenu-align-right");
        p.length && d(f).ubersmartresize(function() {
            g = f.innerWidth;
            b.last_width <= b.settings.breakpoint && g >= b.settings.breakpoint &&
                (p.hide(), p[0].offsetHeight, p.show());
            b.last_width = g
        });
        this.settings.clicktest && (this.touchEnd = "click");
        this.init()
    }
    var r = {
            breakpoint: uber_op("responsive_breakpoint", { datatype: "numeric" }, 959),
            touchEvents: !0,
            mouseEvents: !0,
            retractors: !0,
            touchOffClose: uber_op("touch_off_close", { datatype: "boolean" }, !0),
            submenuIndicatorCloseMobile: uber_op("submenu_indicator_close_mobile", { datatype: "boolean" }, !0),
            moveThreshold: 10,
            submenuAnimationDuration: 500,
            ignoreDummies: !0,
            clicktest: !1,
            windowstest: !1,
            debug: !1,
            debug_onscreen: !1,
            remove_conflicts: uber_op("remove_conflicts", { datatype: "boolean" }, !0),
            reposition_on_load: uber_op("reposition_on_load", { datatype: "boolean" }, !1),
            accessible: uber_op("accessible", { datatype: "boolean" }, !0),
            retractor_display_strategy: uber_op("retractor_display_strategy", { datatype: "string" }, "responsive"),
            intent_delay: uber_op("intent_delay", { datatype: "numeric" }, 300),
            intent_interval: uber_op("intent_interval", { datatype: "numeric" }, 100),
            intent_threshold: uber_op("intent_threshold", { datatype: "numeric" }, 300),
            scrollto_offset: uber_op("scrollto_offset", { datatype: "numeric" }, 0),
            scrollto_duration: uber_op("scrollto_duration", { datatype: "numeric" }, 1E3),
            collapse_after_scroll: uber_op("collapse_after_scroll", { datatype: "boolean" }, !0),
            aria_role_navigation: uber_op("aria_role_navigation", { datatype: "boolean" }, !1),
            aria_expanded: uber_op("aria_expanded", { datatype: "boolean" }, !1),
            aria_hidden: uber_op("aria_hidden", { datatype: "boolean" }, !1),
            aria_responsive_toggle: uber_op("aria_responsive_toggle", { datatype: "boolean" }, !1)
        },
        t, m, n, q;
    k.prototype = {
        init: function() {
            this.log("Initializing UberMenu");
            this.$ubermenu.removeClass("ubermenu-nojs");
            this.removeConflicts();
            this.initializeSubmenuToggleTouchEvents();
            this.initializeSubmenuToggleMouseEvents();
            this.initializeRetractors();
            this.initializeResponsiveToggle();
            this.initializeTouchoffClose();
            this.initializeTabs();
            this.initializeSubmenuPositioning();
            this.initializeSegmentCurrentStates();
            this.initializeAccessibilityOnTab();
            this.initializeAccessibilityStates();
            this.initializeImageLazyLoad()
        },
        removeConflicts: function() {
            this.settings.remove_conflicts &&
                this.$ubermenu.find(".ubermenu-item, .ubermenu-target, .ubermenu-submenu").add(this.$ubermenu).removeAttr("style").unbind().off()
        },
        initializeAccessibilityStates: function() { this.settings.aria_role_navigation && this.$ubermenu.attr("role", "navigation") },
        initializeAccessibilityOnTab: function() {
            if (this.settings.accessible) {
                var a = this;
                d("body").on("keydown.ubermenu", function(c) { 9 == (c.keyCode || c.which) && (d("body").off("keydown.ubermenu"), a.initializeAccessibility()) })
            }
        },
        initializeImageLazyLoad: function() {
            var a =
                this;
            d(".ubermenu-item-level-0").one("ubermenuopen", function() {
                d(this).find(".ubermenu-image-lazyload").each(function() {
                    d(this).data("srcset") && d(this).attr("srcset", d(this).data("srcset")).attr("sizes", d(this).data("sizes"));
                    d(this).attr("src", d(this).data("src")).removeClass("ubermenu-image-lazyload")
                });
                setTimeout(function() {
                    a.clearTabSizes();
                    a.sizeTabs()
                }, 300)
            })
        },
        initializeAccessibility: function() {
            var a = this;
            a.$current_focus = !1;
            a.mousedown = !1;
            a.$ubermenu.addClass("ubermenu-accessible");
            a.$ubermenu.on("focus",
                ".ubermenu-target, a, input, select, textarea",
                function() {
                    if (!a.mousedown) {
                        var c = d(this);
                        a.$current_focus = c;
                        var b = c.parent(".ubermenu-item");
                        b.length && (b.is(".ubermenu-item-level-0") && a.closeAllSubmenus(), b.is(".ubermenu-has-submenu-drop") && setTimeout(function() { c.is(":focus") && (b.siblings(".ubermenu-has-submenu-drop").each(function() { a.closeSubmenu(d(this), "umac", a) }), a.openSubmenu(b, "umac", a)) }, 500), c.on("blur.ubermenu", ".ubermenu-target, a, input, select, textarea", function(b) {
                            a.mousedown || (a.$current_focus = !1, d(this).off("blur.ubermenu"), setTimeout(function() { a.$current_focus || a.closeAllSubmenus() }, 500));
                            a.mousedown = !1
                        }))
                    }
                    a.mousedown = !1
                });
            a.$ubermenu.on("focusout", function() { setTimeout(function() { d(h.activeElement).closest(a.$ubermenu).length || a.closeAllSubmenus() }, 10) });
            a.$ubermenu.find(".ubermenu-item-level-0").on("keydown", function(c) {
                switch (c.which) {
                    case 39:
                        a.closeAllSubmenus();
                        d(this).next().find(">.ubermenu-target").focus();
                        break;
                    case 37:
                        a.closeAllSubmenus();
                        jQuery(this).prev().find(">.ubermenu-target").focus();
                        break;
                    case 27:
                        a.closeAllSubmenus()
                }
            });
            a.$ubermenu.on("mousedown", function(c) {
                a.mousedown = !0;
                setTimeout(function() { a.mousedown = !1 }, 100)
            })
        },
        initializeSubmenuPositioning: function() {
            var a = this;
            a.positionSubmenus();
            d(f).ubersmartresize(function() { a.positionSubmenus() });
            if (this.settings.reposition_on_load) d(f).on("load", function() { a.positionSubmenus() })
        },
        initializeSubmenuToggleTouchEvents: function() {
            if (this.settings.touchEvents) {
                var a = this;
                this.$ubermenu.on(this.touchStart, ".ubermenu-target:not(.shiftnav-toggle)",
                    function(c) { a.handleTouchInteraction(c, this, a) });
                this.$ubermenu.on("click", ".ubermenu-has-submenu-drop > .ubermenu-target, .ubermenu-tab.ubermenu-item-has-children > .ubermenu-target", function(c) { a.handleClicks(c, this, a) })
            }
        },
        initializeSubmenuToggleMouseEvents: function(a) {
            a = a || this;
            if (a.settings.mouseEvents && !a.settings.clicktest && !a.settings.windowstest) {
                a.log("initializeSubmenuToggleMouseEvents");
                var c = "hover";
                a.$ubermenu.hasClass("ubermenu-trigger-click") ? c = "click" : a.$ubermenu.hasClass("ubermenu-trigger-hover_intent") &&
                    (c = "hover_intent");
                "click" == c ? this.suppress_clicks || (this.$ubermenu.on("click.ubermenu-submenu-toggle", ".ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) { a.handleMouseClick(b, this, a) }), this.$ubermenu.on("click.ubermenu-click-target", ".ubermenu-item:not(.ubermenu-has-submenu-drop):not([data-ubermenu-trigger]) > .ubermenu-target", function(b) { a.handleLink(b, this, a) })) : "hover_intent" == c ? (this.$ubermenu.on("mouseenter.mouse_intent", ".ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger])",
                    function(b) { a.handleMouseIntent(b, this, a) }), this.$ubermenu.on("click.ubermenu-click-target", ".ubermenu-item:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) { a.handleLink(b, this, a) })) : (this.$ubermenu.on("mouseenter.ubermenu-submenu-toggle", ".ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) { a.handleMouseover(b, this, a) }), this.$ubermenu.on("click.ubermenu-click-target", ".ubermenu-item:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) {
                    a.handleLink(b,
                        this, a)
                }));
                if (this.allow_trigger_overrides) a.$ubermenu.find(".ubermenu-item[data-ubermenu-trigger]").each(function() {
                    var b = d(this);
                    c = b.data("ubermenu-trigger");
                    if ("click" == c) { if (!this.suppress_clicks) b.on("click.ubermenu-submenu-toggle", ".ubermenu-target", function(b) { a.handleMouseClick(b, this, a) }) } else if ("hover_intent" == c) b.on("mouseenter.mouse_intent", function(b) { a.handleMouseIntent(b, this, a) });
                    else b.on("mouseenter.ubermenu-submenu-toggle", ".ubermenu-target", function(b) {
                        a.handleMouseover(b, this,
                            a)
                    })
                });
                else a.$ubermenu.find(".ubermenu-tab").on("click.ubermenu-submenu-toggle", ".ubermenu-target", function(b) { a.handleMouseClick(b, this, a) })
            }
        },
        disableSubmenuToggleMouseEvents: function() {
            this.log("disableSubmenuToggleMouseEvents");
            this.events_disabled = !0
        },
        reenableSubmenuToggleMouseEvents: function(a) {
            a = a || this;
            a.log("reenableSubmenuToggleMouseEvents");
            a.events_disabled = !1
        },
        initializeRetractors: function() {
            if (this.settings.retractors) {
                var a = this;
                this.$ubermenu.on("click", ".ubermenu-retractor", function(b) {
                    a.handleSubmenuRetractorEnd(b,
                        this, a)
                });
                if (this.settings.touchEvents) this.$ubermenu.on(this.touchStart, ".ubermenu-retractor", function(b) { a.handleSubmenuRetractorStart(b, this, a) });
                this.touchenabled || "touch" != a.settings.retractor_display_strategy || (this.$ubermenu.find(".ubermenu-retractor-mobile").remove(), this.$ubermenu.find(".ubermenu-submenu-retractor-top").removeClass("ubermenu-submenu-retractor-top").removeClass("ubermenu-submenu-retractor-top-2"));
                if (this.settings.submenuIndicatorCloseMobile) {
                    var c = this.$ubermenu.find(".ubermenu-has-submenu-drop > .ubermenu-target").append('<span class="ubermenu-sub-indicator-close"><i class="fas fa-times"></i></span>').find(">.ubermenu-sub-indicator-close");
                    c.on("click", function(b) {
                        b.preventDefault();
                        b.stopPropagation();
                        a.closeSubmenuInstantly(d(this).closest(".ubermenu-item"), "toggleUberMenuSubmenuClosed", a);
                        return !1
                    });
                    if (this.settings.touchEvents) c.on(this.touchStart, function(b) {
                        b.preventDefault();
                        b.stopPropagation();
                        a.closeSubmenuInstantly(d(this).closest(".ubermenu-item"), "toggleUberMenuSubmenuClosed", a);
                        return !1
                    })
                }
            }
        },
        initializeResponsiveToggle: function() {
            var a = this,
                c = ".ubermenu-responsive-toggle[data-ubermenu-target=" + a.$ubermenu.attr("id") + "], .ubermenu-responsive-toggle[data-ubermenu-target=_any_]";
            a.log("initializeResponsiveToggle " + this.toggleevent);
            if (a.settings.aria_responsive_toggle) {
                var b = f.innerWidth > a.settings.breakpoint;
                d(c).attr("aria-hidden", b);
                d(f).ubersmartresize(function() { d(c).attr("aria-hidden", f.innerWidth > a.settings.breakpoint) })
            }
            d(h).on(this.toggleevent, c, function(b) { a.handleResponsiveToggle(b, this, a) })
        },
        initializeTouchoffClose: function() {
            if (this.settings.touchOffClose) {
                var a = this;
                d(h).on(this.touchStart + ".ubermenu_touchoff", function(c) { a.handleTouchoffCloseStart(c, this, a) });
                d(h).on(this.touchEnd + ".ubermenu_touchoff", function(c) { a.handleTouchoffClose(c, this, "touch", a) });
                if (!this.suppress_clicks) d(h).on("mouseup.ubermenu_clickoff", function(c) { a.handleTouchoffClose(c, this, "click", a) })
            }
        },
        initializeTabs: function() {
            var a = this,
                c = a.settings.responsive && f.innerWidth <= a.settings.breakpoint ? !0 : !1;
            a.$tab_blocks = a.$ubermenu.find(".ubermenu-tabs");
            a.$tab_blocks = d(a.$tab_blocks.get().reverse());
            d(f).on("load", function() { a.sizeTabs() });
            a.windowwidth = f.innerWidth;
            d(f).ubersmartresize(function() {
                a.oldwindowwidth =
                    a.windowwidth;
                a.windowwidth = f.innerWidth;
                a.windowwidth != a.oldwindowwidth && (a.clearTabSizes(a), a.sizeTabs(), a.checkActiveTabs(a))
            });
            a.$ubermenu.find(".ubermenu-item-level-0.ubermenu-has-submenu-drop").on("ubermenuopen.sizetabs", function() {
                d(this).off("ubermenuopen.sizetabs");
                a.sizeTabs()
            });
            a.$ubermenu.find(".ubermenu-tabs.ubermenu-tabs-dynamic-sizing").on("ubermenuopen", "> .ubermenu-tabs-group > .ubermenu-tab", function() { a.sizeTabsDynamic(d(this).closest(".ubermenu-tabs")) });
            c || a.initializeActiveTab(a)
        },
        checkActiveTabs: function(a) { f.innerWidth <= a.settings.breakpoint ? a.$tab_blocks.find(".ubermenu-tab.ubermenu-active").removeClass("ubermenu-active") : a.initializeActiveTab(a) },
        initializeActiveTab: function(a) {
            a.$tab_blocks.each(function() {
                var c = d(this).hasClass("ubermenu-tabs-show-default"),
                    b = d(this).hasClass("ubermenu-tabs-show-current"),
                    e = d(this).find("> .ubermenu-tabs-group"),
                    g = !1;
                b && (e.find(".ubermenu-current-menu-item").parentsUntil(e, ".ubermenu-tab:not( .ubermenu-nocurrent )").addClass("ubermenu-current-menu-ancestor"),
                    b = e.find("> .ubermenu-tab.ubermenu-current-menu-ancestor, > .ubermenu-tab.ubermenu-current-menu-item"), b.length && (a.openSubmenu(b.first(), "tab current", a), g = !0));
                c && !g && 0 === e.find("> .ubermenu-tab.ubermenu-active").length /* && a.openSubmenu(e.find("> .ubermenu-tab").first(), "tab default", a) */
            })
        },
        clearTabSizes: function(a) {
            (a || this).$ubermenu.find(".ubermenu-submenu , .ubermenu-tabs , .ubermenu-tab-content-panel , .ubermenu-tabs-group").css("min-height", "")
        },
        sizeTabs: function() {
            var a = this,
                c = a.settings.responsive &&
                f.innerWidth <= a.settings.breakpoint ? !0 : !1;
            c || (a.initializeActiveTab(a), a.$tab_blocks.each(function() {
                var b = !1;
                !d(this).hasClass("ubermenu-tab-layout-top") && !d(this).hasClass("ubermenu-tab-layout-bottom") || c || (b = !0);
                d(this).data("um-stacked", b);
                var e = 0,
                    b = c ? d(this).parentsUntil(".ubermenu").add(d(this).parents(".ubermenu")) : d(this).parentsUntil(".ubermenu-item-level-0");
                b.addClass("ubermenu-test-dimensions");
                var g;
                d(this).find(" > .ubermenu-tabs-group > .ubermenu-tab > .ubermenu-tab-content-panel").each(function() {
                    d(this).addClass("ubermenu-test-dimensions");
                    g = d(this).outerHeight();
                    g > e && (e = g);
                    d(this).data("um-oh", g);
                    d(this).removeClass("ubermenu-test-dimensions")
                });
                d(this).data("um-max-panel-height", e);
                d(this).hasClass("ubermenu-tabs-dynamic-sizing") ? a.sizeTabsDynamic(d(this), !1) : a.sizeTabsMax(d(this));
                b.removeClass("ubermenu-test-dimensions")
            }))
        },
        sizeTabsMax: function(a) {
            var c = a.data("um-max-panel-height"),
                b = a.data("um-stacked"),
                d = a.find("> .ubermenu-tabs-group");
            b ? a.css("min-height", c + d.outerHeight()) : (d.outerHeight() > c && (c = a.outerHeight()), d.css("min-height",
                c));
            d.find("> .ubermenu-tab > .ubermenu-tab-content-panel").css("min-height", c)
        },
        sizeTabsDynamic: function(a, c) {
            c === l && (c = !0);
            c && (c = a.hasClass("ubermenu-tabs-dynamic-sizing-animate"));
            if (!(this.settings.responsive && f.innerWidth <= this.settings.breakpoint)) {
                var b = a.data("um-stacked"),
                    d = a.find("> .ubermenu-tabs-group"),
                    g = d.outerHeight();
                d.css("min-height", "0");
                var p = d.find("> .ubermenu-active > .ubermenu-tab-content-panel"),
                    k = p.data("um-oh"),
                    k = d.outerHeight() > k ? a.outerHeight() : k;
                b ? c ? a.stop().animate({
                    "min-height": k +
                        d.outerHeight()
                }, 300, "swing", function() { p.css("overflow", "auto") }) : a.css("min-height", k + d.outerHeight()) : c ? (d.css("min-height", g), d.stop().animate({ "min-height": k }, 300, "swing", function() { p.css("overflow", "auto") })) : d.css("min-height", k)
            }
        },
        initializeSegmentCurrentStates: function() { this.$ubermenu.find(".ubermenu-current-menu-item").first().parents(".ubermenu-item:not( .ubermenu-nocurrent )").addClass("ubermenu-current-menu-ancestor") },
        disableTransitions: function() {
            this.transitions = !1;
            this.$ubermenu.removeClass("ubermenu-transition-slide").removeClass("ubermenu-transition-fade").removeClass("ubermenu-transition-shift").addClass("ubermenu-no-transitions").addClass("ubermenu-transition-none")
        },
        handleClicks: function(a, c, b) { d(c).data("ubermenu-killClick") && (a.preventDefault(), b.log("killed click after touchend ", a)) },
        handleTouchInteraction: function(a, c, b) {
            a.stopPropagation();
            0 <= a.type.indexOf("pointer") && b.disableTransitions();
            c = d(c);
            c.parent().off("mouseleave.mouse_intent_none");
            b.log("touchstart " + a.type + " " + c.text(), a);
            c.on(b.touchEnd, function(a) { b.handleTap(a, this, b) });
            c.on(b.touchMove, function(a) { b.preventInteractionOnScroll(a, this, b) });
            a.originalEvent.touches ? (c.data("ubermenu-startX",
                a.originalEvent.touches[0].clientX), c.data("ubermenu-startY", a.originalEvent.touches[0].clientY)) : a.originalEvent.clientY && (c.offset(), c.data("ubermenu-startX", a.originalEvent.clientX), c.data("ubermenu-startY", a.originalEvent.clientY))
        },
        preventInteractionOnScroll: function(a, c, b) {
            b.log("touchmove interaction " + a.type, a);
            c = d(c);
            if (a.originalEvent.touches) Math.abs(a.originalEvent.touches[0].clientX - c.data("ubermenu-startX")) > b.settings.moveThreshold || Math.abs(a.originalEvent.touches[0].clientY - c.data("ubermenu-startY")) >
                b.settings.moveThreshold ? (b.log("Preventing interaction on scroll, reset handlers (standard)"), b.resetHandlers(c, "preventScroll touches", b)) : b.log("diff = " + Math.abs(a.originalEvent.touches[0].clientY - c.data("ubermenu-startY")));
            else if (a.originalEvent.clientY) {
                var e = c.data(e);
                Math.abs(a.originalEvent.clientX - c.data("ubermenu-startX")) > b.settings.moveThreshold || Math.abs(a.originalEvent.clientY - c.data("ubermenu-startY")) > b.settings.moveThreshold ? (b.log("Preventing interaction on scroll, reset handlers (standard)"),
                    b.resetHandlers(c, "preventScroll client", b)) : b.log("diff = " + a.originalEvent.clientY + " - " + c.data("ubermenu-startY") + " = " + Math.abs(a.originalEvent.clientY - c.data("ubermenu-startY")))
            } else b.log("no touch points found!")
        },
        handleTap: function(a, c, b) {
            a.preventDefault();
            a.stopPropagation();
            var e = d(c);
            if (e.data("ubermenu-killTouch")) b.log("kill tap"), a.preventDefault(), a.stopPropagation();
            else {
                var g = e.parent();
                b.log("handleTap [" + e.text() + "]", a.type);
                e.data("ubermenu-killClick", !0);
                e.data("ubermenu-killHover", !0);
                setTimeout(function() { e.data("ubermenu-killClick", !1).data("ubermenu-killHover", !1) }, 1E3);
                b.closeSubmenuInstantly(g.siblings(".ubermenu-active"));
                g.hasClass("ubermenu-has-submenu-drop") ? g.hasClass("ubermenu-active") ? ((!g.hasClass("ubermenu-tab") || f.innerWidth <= b.settings.breakpoint) && b.closeSubmenu(g, "toggleUberMenuActive", b), b.handleLink(a, c, b, !0)) : b.openSubmenu(g, "toggle", b) : b.handleLink(a, c, b, !0)
            }
            e.data("ubermenu-killTouch", !1);
            b.resetHandlers(e, "handleTap", b)
        },
        handleLink: function(a, c, b, e) {
            e =
                e || !1;
            b.log("handleLink");
            var g = d(c);
            if (g.is("a")) {
                var k = g.attr("href"),
                    h = g.data("ubermenu-scrolltarget");
                if (h) {
                    c = d(h).first();
                    if (0 < c.length) {
                        a.preventDefault();
                        g.trigger("ubermenuscrollto");
                        a = g.parent(".ubermenu-item");
                        a.addClass("ubermenu-current-menu-item");
                        a.siblings().removeClass("ubermenu-current-menu-item").removeClass("ubermenu-current-menu-parent").removeClass("uberemnu-current-menu-ancestor");
                        var l = !1;
                        d("html,body").animate({ scrollTop: c.offset().top - b.settings.scrollto_offset }, b.settings.scrollto_duration,
                            "swing",
                            function() { l || (b.closeSubmenu(g.closest(".ubermenu-item-level-0"), "handeLink", b), b.settings.collapse_after_scroll && !b.$ubermenu.hasClass("ubermenu-responsive-nocollapse") && b.toggleMenuCollapse("toggle", !1, b), g.trigger("ubermenuscrollto_complete"), l = !0) });
                        return !1
                    }
                    k && -1 == k.indexOf("#") && (-1 == h.indexOf("#") && (h = "#" + h), f.location = k + h, a.preventDefault())
                }
                k ? e && a.isDefaultPrevented() && (b.log("default prevented, follow link"), "_blank" == g.attr("target") ? f.open(k, "_blank") : f.location = k) : a.preventDefault()
            }
        },
        handleMouseClick: function(a, c, b) {
            b.log("handleMouseClick", a);
            var e = d(c);
            if (e.data("ubermenu-killClick")) b.log("handleMouseClick: killClick");
            else {
                var g = e.parent(".ubermenu-item");
                g.length && (g.hasClass("ubermenu-active") ? (e.is("a") && b.handleLink(a, c, b), g.hasClass("ubermenu-tab") || b.closeSubmenu(g, "retract")) : g.hasClass("ubermenu-has-submenu-drop") && (a.preventDefault(), b.closeSubmenuInstantly(g.siblings(".ubermenu-active")), b.openSubmenu(g, "click", b)))
            }
        },
        handleMouseIntent: function(a, c, b) {
            b.log("handleMouseIntent");
            var e = d(c);
            e.data("mouse_intent_timer") && e.data("mouse_intent_timer", clearTimeout(e.data("mouse_intent_timer")));
            var g = e.find(".ubermenu-target");
            g.data("ubermenu-killHover") ? (b.log("killHover MouseIntent"), a.preventDefault(), a.stopPropagation()) : (n = a.pageX, q = a.pageY, e.on("mousemove.mouse_intent", b.trackMouse), e.data("mouse_intent_timer", setTimeout(function() { b.compare(a, e, b.handleMouseIntentSuccess, b) }, b.settings.intent_interval)), e.on("mouseleave.mouse_intent_none", function() {
                d(this).data("mouse_intent_timer",
                    clearTimeout(d(this).data("mouse_intent_timer")));
                e.data("mouse_intent_state", 0);
                e.off("mouseleave.mouse_intent_none");
                g.data("ubermenu-killHover") ? (b.log("killHover MouseIntent_Cancel"), a.preventDefault(), a.stopPropagation()) : b.closeSubmenu(e, "mouse_intent_cancel", b)
            }))
        },
        handleMouseIntentSuccess: function(a, c, b) {
            b.log("handleMouseIntentSuccess");
            c.off("mouseleave.mouse_intent_none");
            var d = c.find(".ubermenu-target");
            if (d.data("ubermenu-killHover")) b.log("Kill hover on IntentSuccess"), a.preventDefault(),
                a.stopPropagation();
            else if (d.data("ubermenu-killHover", !1), b.triggerSubmenu(a, c, b), !c.hasClass("ubermenu-tab") || f.innerWidth <= b.settings.breakpoint) c.on("mouseleave.mouse_intent", function(a) { b.handleMouseIntentLeave(a, this, b) })
        },
        handleMouseIntentLeave: function(a, c, b) {
            var e = d(c);
            e.data("mouse_intent_timer") && e.data("mouse_intent_timer", clearTimeout(e.data("mouse_intent_timer")));
            e.off("mousemove.mouse_intent", b.trackMouse);
            1 == e.data("mouse_intent_state") && e.data("mouse_intent_timer", setTimeout(function() {
                b.delayMouseLeave(a,
                    e, b.handleMouseIntentLeaveSuccess, b)
            }, b.settings.intent_delay))
        },
        handleMouseIntentLeaveSuccess: function(a, c, b) {
            c.off("mouseleave.mouse_intent");
            c.find("> .ubermenu-target").data("ubermenu-killHover") || b.closeSubmenu(c, "mouse_intent_leave", b)
        },
        delayMouseLeave: function(a, c, b, d) {
            c.data("mouse_intent_timer", clearTimeout(c.data("mouse_intent_timer")));
            c.data("mouse_intent_state", 0);
            return b.apply(c, [a, c, d])
        },
        trackMouse: function(a) {
            t = a.pageX;
            m = a.pageY
        },
        compare: function(a, c, b, d) {
            c.data("mouse_intent_timer",
                clearTimeout(c.data("mouse_intent_timer")));
            if (Math.abs(n - t) + Math.abs(q - m) < d.settings.intent_threshold) return c.off("mousemove.mouse_intent", d.track), c.data("mouse_intent_state", 1), b.apply(c, [a, c, d]);
            n = t;
            q = m;
            c.data("mouse_intent_timer", setTimeout(function() { d.compare(a, c, b, d) }, d.settings.intent_interval))
        },
        triggerSubmenu: function(a, c, b) {
            b.closeSubmenuInstantly(c.siblings(".ubermenu-active, .ubermenu-in-transition"));
            b.openSubmenu(c, "mouseenter", b)
        },
        handleMouseover: function(a, c, b) {
            if (!b.events_disabled) {
                var e =
                    d(c);
                e.data("ubermenu-killTouch", !0);
                setTimeout(function() { e.data("ubermenu-killTouch", !1) }, 1E3);
                b.log("handleMouseenter, add mouseleave", a);
                c = e.parent(".ubermenu-item");
                if (c.length && !c.hasClass("ubermenu-active") && (b.triggerSubmenu(a, c, b), !c.hasClass("ubermenu-tab") || f.innerWidth <= b.settings.breakpoint)) c.on("mouseleave.ubermenu-submenu-toggle", function(a) { b.handleMouseleave(a, this, b) })
            }
        },
        handleMouseleave: function(a, c, b) {
            b.log("handleMouseleave, remove mouseleave", a);
            d(c).off("mouseleave.ubermenu-submenu-toggle");
            b.closeSubmenu(d(c), "mouseout")
        },
        handleSubmenuRetractorStart: function(a, c, b) {
            a.preventDefault();
            a.stopPropagation();
            d(c).on(b.touchEnd, function(a) { b.handleSubmenuRetractorEnd(a, this, b) });
            b.log("handleSubmenuRetractorStart " + d(c).text())
        },
        handleSubmenuRetractorEnd: function(a, c, b) {
            a.preventDefault();
            a.stopPropagation();
            a = d(c).closest(".ubermenu-item");
            b.closeSubmenu(a, "handleSubmenuRetractor");
            d(c).off(b.touchEnd);
            b.log("handleSubmenuRetractorEnd " + a.find("> .ubermenu-target").text());
            return !1
        },
        handleResponsiveToggle: function(a,
            c, b) {
            b.log("handleResponsiveToggle " + a.type, a);
            a.preventDefault();
            a.stopPropagation();
            if ("touchend" == a.type) b.$ubermenu.data("ubermenu-prevent-click", !0), setTimeout(function() { b.$ubermenu.data("ubermenu-prevent-click", !1) }, 500);
            else if ("click" == a.type && b.$ubermenu.data("ubermenu-prevent-click")) { b.$ubermenu.data("ubermenu-prevent-click", !1); return }
            b.toggleMenuCollapse("toggle", c, b)
        },
        handleTouchoffCloseStart: function(a, c, b) { b.touchoffclosestart = d(f).scrollTop() },
        handleTouchoffClose: function(a, c, b,
            e) { d(a.target).closest(".ubermenu").length || "click" != b && e.touchoffclosestart != d(f).scrollTop() || (e.log("touchoff close ", a), e.closeAllSubmenus() && (e.disableSubmenuToggleMouseEvents(), f.setTimeout(function() { e.reenableSubmenuToggleMouseEvents(e) }, e.settings.submenuAnimationDuration))) },
        toggleMenuCollapse: function(a, c, b) {
            b = b || this;
            c = c || ".ubermenu-resposive-toggle";
            c = "object" == typeof c ? d(c) : d(c + '[data-ubermenu-target="' + b.$ubermenu.attr("id") + '"]');
            a = a || "toggle";
            "toggle" == a && (a = b.$ubermenu.hasClass("ubermenu-responsive-collapse") ?
                "open" : "close");
            "open" == a ? (b.$ubermenu.removeClass("ubermenu-responsive-collapse"), c.trigger("ubermenutoggledopen"), c.toggleClass("ubermenu-responsive-toggle-open"), b.settings.aria_responsive_toggle && c.attr("aria-pressed", !0)) : (b.$ubermenu.addClass("ubermenu-responsive-collapse"), c.trigger("ubermenutoggledclose"), c.toggleClass("ubermenu-responsive-toggle-open"), b.settings.aria_responsive_toggle && c.attr("aria-pressed", !1));
            b.transitions && !b.$ubermenu.hasClass("ubermenu-responsive-nocollapse") && (b.$ubermenu.addClass("ubermenu-in-transition"),
                b.$ubermenu.on(b.transitionend + "_toggleubermenu", function() {
                    b.$ubermenu.removeClass("ubermenu-in-transition");
                    b.$ubermenu.off(b.transitionend + "_toggleubermenu")
                }))
        },
        positionSubmenus: function() {
            var a = this;
            "h" == a.orientation && a.$ubermenu.find(".ubermenu-submenu-drop.ubermenu-submenu-align-center").each(function() {
                var c = d(this).parent(".ubermenu-item"),
                    b = d(this);
                if (a.$ubermenu.hasClass("ubermenu-bound")) var e = c.closest(".ubermenu , .ubermenu-submenu");
                else if (a.$ubermenu.hasClass("ubermenu-bound-inner")) e =
                    c.closest(".ubermenu-nav , .ubermenu-submenu");
                else {
                    var g = c.closest(".ubermenu-submenu");
                    0 === g.length ? (e = a.$ubermenu.offsetParent()) || (e = d("body")) : e = g
                }
                var g = b.outerWidth(),
                    f = c.outerWidth(),
                    k = c.offset().left,
                    c = e.width();
                e = e.offset().left;
                f = k + f / 2 - (e + g / 2);
                f = 0 < f ? f : 0;
                g > c ? f = (g - c) / -2 : f + g > c && (b.css({ right: 0, left: "auto" }), f = !1);
                !1 !== f && b.css("left", f)
            })
        },
        openSubmenu: function(a, c, b) {
            b = b || this;
            b.log("Open Submenu " + c);
            a.hasClass("ubermenu-active") || (a.addClass("ubermenu-active"), b.settings.aria_expanded && a.find(">.ubermenu-target,>.ubermenu-submenu").attr("aria-expanded",
                "true"), b.settings.aria_hidden && a.find(">.ubermenu-submenu").attr("aria-hidden", "false"), b.transitions && (a.addClass("ubermenu-in-transition"), a.find("> .ubermenu-submenu").on(b.transitionend + "_opensubmenu", function() {
                b.log("finished submenu open transition");
                a.removeClass("ubermenu-in-transition");
                d(this).off(b.transitionend + "_opensubmenu")
            })), a.trigger("ubermenuopen"))
        },
        closeSubmenu: function(a, c, b) {
            b = b || this;
            b.log("closeSubmenu " + a.find(">a").text() + " [" + c + "]");
            a.hasClass("ubermenu-item-has-children") &&
                a.hasClass("ubermenu-active") && (b.transitions && a.addClass("ubermenu-in-transition"), a.each(function() {
                    var a = d(this),
                        c = a.find("> .ubermenu-submenu");
                    if (b.transitions) c.on(b.transitionend + "_closesubmenu", function() {
                        b.log("finished submenu close transition");
                        a.removeClass("ubermenu-in-transition");
                        c.off(b.transitionend + "_closesubmenu")
                    })
                }));
            a.removeClass("ubermenu-active");
            a.trigger("ubermenuclose");
            b.settings.aria_expanded && a.find(">.ubermenu-target,>.ubermenu-submenu").attr("aria-expanded", "false");
            b.settings.aria_hidden && a.find(">.ubermenu-submenu").attr("aria-hidden", "true")
        },
        closeSubmenuInstantly: function(a) {
            0 !== a.length && (a.addClass("ubermenu-notransition"), a.removeClass("ubermenu-active").removeClass("ubermenu-in-transition"), a[0].offsetHeight, a.removeClass("ubermenu-notransition"), a.trigger("ubermenuclose"), this.settings.aria_expanded && a.find(">.ubermenu-target,>.ubermenu-submenu").attr("aria-expanded", "false"), this.settings.aria_hidden && a.find(">.ubermenu-submenu").attr("aria-hidden",
                "true"))
        },
        closeAllSubmenus: function() {
            var a = this.$ubermenu.find(".ubermenu-item-level-0.ubermenu-active");
            a.length && this.closeSubmenuInstantly(a);
            return a.length
        },
        resetHandlers: function(a, c, b) {
            b.log("ResetHandlers: " + c);
            a.off(this.touchEnd);
            a.off(this.touchMove);
            a = a.parent();
            a.off("mousemove.mouse_intent");
            a.off("mouseleave.mouse_intent_none");
            a.data("mouse_intent_timer", clearTimeout(a.data("mouse_intent_timer")));
            a.data("mouse_intent_state", 0)
        },
        log: function(a, c, b) {
            b = b || this;
            b.settings.debug && (b.settings.debug_onscreen ?
                this.debug_target.prepend('<div class="um-debug-content">' + a + "</div>") : console.log(a, c))
        }
    };
    d.fn.ubermenu = function(a) {
        var c = arguments;
        if (a === l || "object" === typeof a) return this.each(function() { d.data(this, "plugin_ubermenu") || d.data(this, "plugin_ubermenu", new k(this, a)) });
        if ("string" === typeof a && "_" !== a[0] && "init" !== a) {
            var b;
            this.each(function() {
                var e = d.data(this, "plugin_ubermenu");
                e instanceof k && "function" === typeof e[a] && (b = e[a].apply(e, Array.prototype.slice.call(c, 1)));
                "destroy" === a && d.data(this,
                    "plugin_ubermenu", null)
            });
            return b !== l ? b : this
        }
    }
})(jQuery, window, document);
(function(d) {
    function f(f) {
        h || (h = !0, "undefined" != typeof console && "window.load" == f && console.log("Notice: UberMenu initialized via " + f + ".  This indicates that an unrelated error on the site prevented it from loading via the normal document ready event."), "." == window.location.hash.substring(1, 2) ? (f = d("body").find(window.location.hash.substring(1)), f.length && window.scrollTo(0, f.offset().top - ubermenu_data.scrollto_offset)) : window.location.hash.length && setTimeout(function() {
                try {
                    var f = d("body").find(window.location.hash);
                    f.length && window.scrollTo(0, f.offset().top - ubermenu_data.scrollto_offset)
                } catch (r) {}
            }, 100), d(".ubermenu-item:empty").each(function() {
                var f = d(this).parent();
                d(this).remove();
                0 == f.find(".ubermenu-item").length && (f.parent().removeClass("ubermenu-has-submenu-drop").removeClass("ubermenu-has-submenu-flyout").off().find(".ubermenu-target > .ubermenu-sub-indicator").remove(), f.remove())
            }), d("#wp-admin-bar-ubermenu_loading").remove(), d(".ubermenu").ubermenu({}), "undefined" !== typeof google && "undefined" !==
            typeof google.maps && "undefined" !== typeof google.maps.LatLng && d(".ubermenu-map-canvas").each(function() {
                var f = d(this),
                    h = f.attr("data-zoom") ? parseInt(f.attr("data-zoom")) : 8,
                    l = f.attr("data-lat") ? new google.maps.LatLng(f.attr("data-lat"), f.attr("data-lng")) : new google.maps.LatLng(40.7143528, -74.0059731),
                    m = new google.maps.Map(this, { zoom: h, mapTypeId: google.maps.MapTypeId.ROADMAP, center: l });
                f.attr("data-address") ? (new google.maps.Geocoder).geocode({ address: f.attr("data-address") }, function(a, c) {
                    c == google.maps.GeocoderStatus.OK &&
                        (m.setCenter(a[0].geometry.location), l = a[0].geometry.location, new google.maps.Marker({ map: m, position: a[0].geometry.location, title: f.attr("data-mapTitle") }))
                }) : new google.maps.Marker({ map: m, position: l, title: f.attr("data-mapTitle") });
                var n = d(this).closest(".ubermenu-has-submenu-drop"),
                    q = function() {
                        google.maps.event.trigger(m, "resize");
                        m.setCenter(l);
                        n.off("ubermenuopen", q)
                    };
                n.on("ubermenuopen", q)
            }))
    }
    var h = !1;
    jQuery(function(d) { f("document.ready") });
    d(window).on("load", function() { f("window.load") })
})(jQuery);

function uberMenu_openMega(d) { jQuery(".ubermenu").ubermenu("openSubmenu", jQuery(d)) }

function uberMenu_openFlyout(d) { jQuery(".ubermenu").ubermenu("openSubmenu", jQuery(d)) }

function uberMenu_close(d) { jQuery(".ubermenu").ubermenu("closeSubmenu", jQuery(d)) }

function uberMenu_redrawSubmenus() { jQuery(".ubermenu").ubermenu("positionSubmenus") };

; /*! This file is auto-generated */
! function(c, d) {
    "use strict";
    var e = !1,
        n = !1;
    if (d.querySelector)
        if (c.addEventListener) e = !0;
    if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage)
        if (c.wp.receiveEmbedMessage = function(e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
                            for (o = 0; o < s.length; o++)
                                if (r = s[o], e.source === r.contentWindow) {
                                    if (r.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        r.height = i
                                    }
                                    if ("link" === t.message)
                                        if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host)
                                            if (d.activeElement === r) c.top.location.href = t.value
                                }
                        }
            }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

    function t() { if (!n) { n = !0; for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) { if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t); if (r || a)(t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e) } } }
}(window, document);