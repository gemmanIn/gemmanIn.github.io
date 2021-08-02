(function() {
    $('body').append(`<footer class=footer-outer>
    <div class=container>
        <div class=footer-main>
            <div class=footer-top>
                <div class=footer-log>
                    <a href=index.html> <img src=public/images/logo.svg alt=images> </a>
                </div>
                <div class=footer-number>
                    <div class=footer-mobile-mob>
                        <div class=footer-nuber-ico>
                            <a href="https://api.whatsapp.com/send?phone=+919619812266&amp;text=Hi,%20I%20contacted%20you%20through%20your%20website." target=_blank> <img src="public/images/whatsapp.svg" alt=images></a>
                        </div>
                        <div class=footer-mobile-mob>
                            <div class=footer-nuber-ico>
                                <a href="tel:961 981 2266"> <img src="public/images/call.svg" alt=whatsapp> </a>
                            </div>
                            <div class=footer-number> <label>Asad</label> <a href="tel:96 1981 2266">+91 961 981 2266</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=footer-menu-area>
                <div class=footer-box>
                    <a href=index.html>
                        <h4>Home</h4>
                    </a>
                    <a href=contact-vasai.html>
                        <h4>Contact Vasai</h4>
                    </a>
                    <a href=contact-goregaon.html>
                        <h4>Contact Goregaon</h4>
                    </a>
                </div>
                <div class=footer-box>
                    <h4>Products</h4>
                    <ul>
                        <li id=nav_menu-3 class="widget widget_nav_menu">
                            <div class=menu-footer-product-menu-container>
                                <ul id=menu-footer-product-menu class=menu>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html>20 ltr BT cap</a>
                                    </li>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html#pet-jar>20 ltr Pet Jar</a>
                                    </li>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html#matka>Dispenser / Matka</a>
                                    </li>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html#cool-jug>Cool Jug</a>
                                    </li>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html#20ltr-dis>Dispenser with Handle & Cap (20 ltr)</a>
                                    </li>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html#8ltr-dis>Dispenser with Handle & Cap (8 ltr)</a>
                                    </li>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html#handle>Handle (20 ltr Jar)</a>
                                    </li>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html#bottle-guard>Bottle Guard</a>
                                    </li>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html#cool-tap>Cool Jug Tap</a>
                                    </li>
                                    <li id=menu-item-1130 class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1130">
                                        <a href=products.html#dolphin-tap>Dolphin Tap</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class=copy-right>
            <p>Copyright © <span id="copyright">
                <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>
            </span> Gemman Enterprises. All rights reserved</p>
        </div>
    </div>
</footer>
<meta http-equiv="imagetoolbar" content="no">
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7YN2JW7TS8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7YN2JW7TS8');
</script>
<script>
    /*<![CDATA[*/
    document.oncontextmenu = function() {
        return false;
    };
    document.onselectstart = function() {
        if (event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password") {
            return false;
        } else {
            return true;
        }
    };
    if (window.sidebar) {
        document.onmousedown = function(e) {
            var obj = e.target;
            if (obj.tagName.toUpperCase() == 'SELECT' || obj.tagName.toUpperCase() == "INPUT" || obj.tagName.toUpperCase() == "TEXTAREA" || obj.tagName.toUpperCase() == "PASSWORD") {
                return true;
            } else {
                return false;
            }
        };
    }
    document.ondragstart = function() {
        return false;
    }; /*]]>*/
</script>
<script id=ubermenu-js-extra>
    var ubermenu_data = {
        "remove_conflicts": "on",
        "reposition_on_load": "off",
        "intent_delay": "300",
        "intent_interval": "100",
        "intent_threshold": "7",
        "scrollto_offset": "50",
        "scrollto_duration": "1000",
        "responsive_breakpoint": "959",
        "accessible": "on",
        "retractor_display_strategy": "responsive",
        "touch_off_close": "on",
        "submenu_indicator_close_mobile": "on",
        "collapse_after_scroll": "on",
        "v": "3.4.0.1",
        "configurations": ["main"],
        "ajax_url": "https:\/\/www.milacronindia.com\/wp-admin\/admin-ajax.php",
        "plugin_url": "https:\/\/www.milacronindia.com\/wp-content\/plugins\/ubermenu\/",
        "disable_mobile": "off",
        "prefix_boost": "",
        "aria_role_navigation": "off",
        "aria_expanded": "off",
        "aria_hidden": "off",
        "aria_controls": "",
        "aria_responsive_toggle": "off",
        "theme_locations": {
            "menu-1": "Primary",
            "primary_mobile_menu": "Primary Mobile Menu"
        }
    };
</script>
<script>
    $(document).ready(function() {
        $('.show_tab1 a').click(function() {
            $(".tab1").css("display", "block");
            $(".tab2").css("display", "none");
            $(".tab3").css("display", "none");
        });
    });
    $(document).ready(function() {
        $('.show_tab2 a').click(function() {
            $(".tab2").css("display", "block");
            $(".tab1").css("display", "none");
            $(".tab3").css("display", "none");
        });
    });
    $(document).ready(function() {
        $('.show_tab3 a').click(function() {
            $(".tab3").css("display", "block");
            $(".tab2").css("display", "none");
            $(".tab1").css("display", "none");
        });
    });
    $(document).ready(function() {
        $('.show_tab11 a').click(function() {
            $(".tab1").css("display", "none");
            $(".tab3").css("display", "none");
            $(".tab2").css("display", "none");
        });
    });
</script>
<script>
    window.addEventListener('load', function() {
        jQuery('body').on('click', '[href*="https://api.whatsapp.com/"]', function() {
            gtag('event', 'conversion', {
                'send_to': 'AW-625439822/f5xfCM6O5fcBEM7onaoC'
            });
        })
        jQuery('body').on('click', '[href*="tel:"]', function() {
            gtag('event', 'conversion', {
                'send_to': 'AW-625439822/q31sCKDjg_gBEM7onaoC'
            });
        })
    })
</script>
<script>
    $('#menu-current-active').addClass("ubermenu-active")
</script>
`)
}());
$(document).ready(function() {
    let isActive = false
    $("#products-label").click(function() {
        isActive = !isActive;
        if (isActive)
            $("#products-label + ul.ubermenu-submenu-id-210-col-0").removeClass("hide-submenu");
        else
            $("#products-label + ul.ubermenu-submenu-id-210-col-0").addClass("hide-submenu");
    });
});