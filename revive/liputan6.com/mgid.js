!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(i, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 0)
}([function(e, t, n) {
    e.exports = n(1)
}
, function(e, t, n) {
    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    window.MarketGidBaseBlockC826444 = function(e, t, n, r, a, s) {
        var c = this;
        if (this.context = t,
        this.root = this.context.document.getElementById(e),
        this.containerId = r,
        this.uniqId = a,
        this.fallbackMode = n,
        this.page = 1,
        this.iteration = 1,
        this.adlink = "",
        this.template = "",
        this.id = 826444,
        this.originalId = 826444,
        this.tickerShow = 0,
        this.pvid = 0,
        this.linkerLinks = [],
        this.muid = "",
        this.botRadarMetrics = -1,
        this.cookieStorage = {},
        this.sharedCookieStorage = {},
        this.afterPreRenderNewsHooks = [],
        this.beforeLoadNewsHooks = [],
        this.afterLoadNewsHooks = [],
        this.afterInjectScriptHooks = [],
        this.afterPrepareCappingDataHooks = [],
        this.afterSendCappingHooks = [],
        this.prerenderStatus = !0,
        this.afterInitHooks = [],
        this.blocksAddress = "",
        this.tickerPrefix = "",
        this.countLoadBlocks = 0,
        this.preTemplate = "",
        this.postTemplate = "",
        this.banners = {},
        this.crashStep = 0,
        this.useTimeTracking = !1,
        this.autoSizeTitle = "17",
        this.loadedDefault = !1,
        this.teaserHashes = {},
        this.teaserData = {},
        this.json = [],
        this.servicerData = {},
        this.childWidgetsData = [],
        this.versionWidget = s,
        this.sspPerformance = "10" >= Math.ceil(100 * Math.random()),
        this.doubleClickType = "",
        this.widgetConstructorData = JSON.parse('{"cols":"4","font":"roboto","kind":"wages","rows":"1","type":"under-article-widget","media":{"opacity":80,"duration":1,"minWidth":250,"position":"bottom","minHeight":150,"videoOverlay":1},"mgbox":{"styles":{"maxWidth":1220}},"price":false,"theme":"#2b397b","width":0,"button":1,"mcdesc":{"styles":{"font":"opensans","color":"#666666","display":"block","fontSize":12,"fontStyle":"normal","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"mgline":{"styles":{"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0}},"imgType":"super","mcimage":{"size":200,"styles":{"padding":0,"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0},"size-width":370,"size-height":200},"mcprice":{"show":"false","styles":{"font":"opensans","color":"#2a3a7b","fontSize":14,"fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"mctable":{"styles":{"borderColor":"","borderWidth":0,"backgroundColor":""}},"mctitle":{"styles":{"color":"#515150","fontSize":"17","fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"subType":"under-article-widget-rectangular","mcdomain":{"styles":{"font":"roboto","color":"#bbbbbb","display":"none","fontSize":10,"fontStyle":"normal","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"isToaster":1,"colsMobile":1,"isDragDown":1,"previewImg":"\\/\\/cdn.mgid.com\\/images\\/draw-widget-preview.jpg","imageFormat":14,"imageShadow":"","textPosition":"bottom","autoplacement":"off","formatChanged":true,"isInterstitial":0,"popupFrequency":15,"is_int_exchange":"0","mobileWidgetImg":"\\/\\/cdn.mgid.com\\/images\\/mobile-widget-preview.png","imageScaleOnHover":"","interstitialAfter":3,"sidebarWidthCorrect":0,"widgetTitleSettings":{"styles":{"font":"roboto","color":"#2b397b","fontSize":17,"text-transform":"uppercase"}},"frequencyCappingShow":3,"frequencyCappingTime":2,"sidebarScrollPercent":0,"widgetTypeDescription":1}'),
        this.globalSettings = JSON.parse('{"capping_observer_threshold":"0.5","current_language":"en","timer_toaster_inactivity":"8","widget_lazy_load_margin":"50"}'),
        c.clickHandlers = [],
        this.sspDoubleClickHash = [],
        this.fakeMode = 0,
        this.requestParams = {},
        c.webProtocol = "https:",
        this.clickHandlerList = {
            sspDoubleClick: {
                handler: "sspDoubleClickHandler",
                priority: 5
            },
            activateDelayLink: {
                handler: "activateDelayLinkHandler",
                priority: 10
            },
            externalCountersLink: {
                handler: "externalCountersLinkHandler",
                priority: 100
            },
            returnedRefreshClick: {
                handler: "returnedRefreshClickHandler",
                priority: 120
            },
            internalExchangeLogger: {
                handler: "internalExchangeLoggerHandler",
                priority: 150
            },
            invisibleDoubleClickLink: {
                handler: "invisibleDoubleClickLinkHandler",
                priority: 150
            },
            showDesktopDoubleClick: {
                handler: "showDesktopDoubleClickButton",
                priority: 150
            },
            hangNiceLinkListener: {
                handler: "hangNiceLinkListener",
                priority: 200
            },
            clickHeatMapElement: {
                handler: "clickHeatMapElement",
                priority: 400
            }
        },
        c.context.self !== c.context.top) {
            refererUrl = c.context.document.referrer;
            var l = refererUrl.split("/");
            c.intExchangeProtocol = 0 == l[0].indexOf("http") ? l[0] : "https:"
        } else {
            var d = c.context.document.location.protocol;
            c.intExchangeProtocol = 0 == d.indexOf("http") ? d : "https:"
        }
        c.sourceName = "",
        this.templates = [],
        this.templateId = 0,
        c.setStyles = function(e) {
            c.styles = e.replace(/\((\'|\")?\/\//g, "($1" + c.webProtocol + "//")
        }
        ,
        c.setTemplate = function(e) {
            e = (e = (e = e.replace(/^\s*[\r\n]|\s{2,}/gm, "")).replace(/\((\'|\")?\/\//g, "($1" + c.webProtocol + "//")).replace('src="//', 'src="' + c.webProtocol + "//"),
            c.templateText = e.replace('href="//', 'href="' + c.webProtocol + "//")
        }
        ,
        this.servicerDomain = "servicer.mgid.com",
        c.setTemplate('<div class="mgbox">\x3c!--advertPrefix--\x3e    {foreach}        <div class="mgline">            {if $banner}{$banner}{/if}            {if $teaser}                                <div class="image-with-text">                                        <div class="mcimg">                        <a {$target} {$href} >                            <div class="image-container">                                <img class="mcimg" {$src} />                                <div class="mgl"><span>ADS</span></div>                                                                    \x3c!--intExchangeWagesImagePlace--\x3e                                                            </div>                        </a>                    </div>                                            <div class="text-elements">    <div class="text_on_hover">        <div class="mctitle"><a {$target} {$href}>{$title}</a></div>                   </div></div>                                    </div>            {/if}        </div>    {/foreach}</div><link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap&subset=cyrillic,vietnamese" rel="stylesheet">'),
        c.setStyles("@font-face { font-family: 'Roboto'; font-style: normal; font-weight: 400; src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/mUdRVCMHGKUBOACHGTH1g-vvDin1pK8aKteLpeZ5c0A.woff) format('woff'); } /* cyrillic-ext */ @font-face { font-family: 'Open Sans'; font-style: normal; font-weight: 400; src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v10/K88pR3goAWT7BTt32Z01m1tXRa8TVwTICgirnJhmVJw.woff2) format('woff2'); unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; } /* cyrillic */ @font-face { font-family: 'Open Sans'; font-style: normal; font-weight: 400; src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v10/RjgO7rYTmqiVp7vzi-Q5UVtXRa8TVwTICgirnJhmVJw.woff2) format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } /* latin-ext */ @font-face { font-family: 'Open Sans'; font-style: normal; font-weight: 400; src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v10/u-WUoqrET9fUeobQW7jkRVtXRa8TVwTICgirnJhmVJw.woff2) format('woff2'); unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; } /* latin */ @font-face { font-family: 'Open Sans'; font-style: normal; font-weight: 400; src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/opensans/v10/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; } /* cyrillic-ext */ @font-face { font-family: 'Open Sans'; font-style: normal; font-weight: 700; src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzCUUniRZcd_wq8DYmIfsw2A.woff2) format('woff2'); unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; } /* cyrillic */ @font-face { font-family: 'Open Sans'; font-style: normal; font-weight: 700; src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzOXREeHhJi4GEUJI9ob_ak4.woff2) format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } /* latin-ext */ @font-face { font-family: 'Open Sans'; font-style: normal; font-weight: 700; src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzBUOjZSKWg4xBWp_C_qQx0o.woff2) format('woff2'); unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; } /* latin */ @font-face { font-family: 'Open Sans'; font-style: normal; font-weight: 700; src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzOgdm0LZdjqr5-oayXSOefg.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; } .mgresponsive { display: inherit; } .mgbox { padding: 0 20px 0 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; border-style: solid; border-width: 0px; border-color: ; background-color: ; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; transition: none !important; box-sizing: border-box; } .image-with-text { position: relative; } .mgbox { width: 100%; max-width: 100%; } div.mcimg { padding: 0px; text-align: center; } img.mcimg { border-style: solid; border-color: #ffffff; border-width: 0px; width: 100% !important; height: auto !important; max-width: 370px; max-height: 200px; box-sizing: border-box; display: block; } .mctitle { text-align: left; margin: 5px 0 0; } .mctitle a { font-weight: 500; font-size: 14px; line-height: 1.25; letter-spacing: 0.2px; font-style: normal; text-decoration: none; color: #070707; font-family: 'Montserrat', sans-serif; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; max-height: 34px; /* fallback */ -webkit-line-clamp: 2; /* number of lines to show */ -webkit-box-orient: vertical; } .mcdesc { display: none; text-align: center; } .mcdesc a { font-weight: normal; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #666666; font-family: 'Open Sans', sans-serif; } .mcdomain { display: none; text-align: center; } .mcdomain a { font-weight: normal; font-size: 10px; line-height: 10px; font-style: normal; text-decoration: none; color: #bbbbbb; font-family: Roboto; padding: 4px; display: block; overflow: hidden; text-transform: capitalize; } .mcdomain a img.mcimgsrc { vertical-align: bottom; margin-bottom: -3px; height: 20px; width: 20px; display: inline-block; } .mgline { background: none repeat scroll 0 0; background-color: ; cursor: pointer; display: inline-block; overflow: hidden; zoom: 1; display: inline; padding: 0 !important; border-style: solid; border-color: #ffffff; border-width: 0px; width: calc(25% - 15px); max-width: 25%; box-sizing: border-box; margin: 10px 20px 20px 0; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; } .mgline:last-child {margin-right: 0 !important;} .mgline .image-container { position: relative; } .mgline .image-container .mcimgad { position: absolute; right: 0; bottom: 0; width: 20px; height: 20px; } .mgline { vertical-align: top; } .mgline, .mgbox { min-width: 90px; } .mgline[max-width~=\"120px\"] .mcdesc { display: none !important; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } .text-elements a { text-decoration: none; } div.mcprice { text-align: left; } div.mcprice span { font-weight: bold; font-size: 14px; line-height: 14px; font-style: normal; text-decoration: none; color: #2a3a7b; font-family: 'Open Sans', sans-serif; } div.mgbuybox, div.mgarrowbox { display: false; } div.mgbuybox, div.mgarrowbox, div.mcprice { display: none; } span.mcpriceold { text-decoration: line-through !important; } img.mcimg { margin: 0; opacity: 1 !important; } .mgline { position: relative; } .mgline .fake { visibility: hidden; position: relative; padding-top: 4px; } .mgline:hover .mctitle a { color: #CE0000; text-decoration: underline !important; text-decoration: none !important; } .mgbuybox { text-align: right; font-weight: 700; font-size: 12px; color: #666666; } .mctitle { line-height: 1 !important; } .mcdesc { margin-top: 0; margin-bottom: 2px; } .mcdesc a { line-height: 1.5 !important; } .mcprice-wrap { position: absolute; display: block; top: 0px; left: 0px; text-decoration: none; } .mcdiscount { color: #fff; border: none; font-size: 1.21em; } .mgarrowbox { position: relative; background: #fff; padding-right: 12px; } .mgarrowbox:before { content: ''; position: absolute; top: 0; right: -10px; border-top: 21px solid transparent; border-bottom: 21px solid transparent; border-left: 10px solid #fff; } div.mcprice-cover { display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-align-items: stretch; -moz-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; -webkit-justify-content: flex-start; justify-content: flex-start; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: 42px; font-size: 14px; } div.mcprice-cover .mcprice { font-size: 1.29em; color: #fff; } div.mcprice-cover.mcprice-cover_old .mcprice-inner { padding-top: 4px; width: auto; } div.mcprice-cover.mcprice-cover_old .mcprice-val { padding-right: 0; } div.mcprice-cover.mcprice-cover_old .mcprice { margin-bottom: 4px; color: #2a3a7b; font-size: 1em; } div.mcprice-cover.mcprice-cover_old + .mcprice-cover { display: none !important; } .mcprice-val, .mcprice-inner { display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-align-items: center; -moz-box-align: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: flex-start; justify-content: flex-start; white-space: nowrap; } .mcprice-inner { background: #ed181d; position: relative; padding: 0 2px 0 8px; text-align: center; color: #fff; width: 100%; } .mcprice-inner:before { content: ''; position: absolute; top: 0; right: -10px; border-top: 21px solid transparent; border-bottom: 21px solid transparent; border-left: 10px solid #ed181d; } .mcprice-val { padding: 2px 10px 0 14px; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: center; justify-content: center; -webkit-align-items: flex-start; -moz-box-align: start; -ms-flex-align: start; align-items: flex-start; font-weight: bold; font-style: normal; text-align: left; } .mcpriceold { display: block !important; position: relative; width: 100%; font-size: 0.78em; font-weight: inherit; color: #ed181d; } .mcpriceold span { position: relative; } .mcpriceold span:before { content: ''; height: 1px; background: #ed181d; left: 0; right: 0; top: 50%; position: absolute; } div.mgbuybox, div.mgarrowbox { display: none; } .fake, .mgtobottom { display: table; bottom: 0; width: 100%; text-align: left; } .fake > *, .mgtobottom > * { display: table-cell; } .mgtobottom__buy { padding-right: 20px; } .mgtobottom { position: absolute; } .mgline .image-with-text, .mgline .mgtobottom { width: 100% !important; margin: 0 auto; } .mgline .image-with-text, .mgline .mgtobottom { max-width: 370px; } .mghead { font-family: 'Noto Sans', sans-serif !important; color: #ce0000; font-size: 20px !important; text-transform: uppercase !important; } .mghead { margin: 5px 0 0 0 !important; font-weight: 600 !important; } .mcdomain { display: none; overflow: hidden; padding: 4px; } .mcdomain a { display: block; padding: 0 0 2px; padding-top: 5px; overflow: hidden; } div.mcprice, div.mcriceold { font-weight: bold; font-size: 14px; line-height: 14px; font-style: normal; text-decoration: none; color: #2a3a7b; font-family: 'Open Sans', sans-serif; } .mgline[max-width~=\"120px\"] .mgarrowbox, .mgline[max-width~=\"120px\"] .mgbuybox { display: none !important; } .image-with-text { min-height: 1px; } @media (max-width: 480px) { } .mg-slider-overlay { overflow: hidden; position: relative; } .mg-slider-overlay .mg-slider-wrap { min-height: 200px; position: relative; width: 100%; -webkit-transform: translate3D(0, 0, 0); -moz-transform: translate3D(0, 0, 0); -ms-transform: translate3D(0, 0, 0); -o-transform: translate3D(0, 0, 0); transform: translate3D(0, 0, 0); -webkit-transition-duration: 200ms; -moz-transition-duration: 200ms; -ms-transition-duration: 200ms; -o-transition-duration: 200ms; transition-duration: 200ms; } .mg-slider-overlay .mg-slider-wrap .mg-slider-box { left: 0; top: 0; position: absolute; width: 100%; } .mg-pagination { text-align: center; } .mg-pagination .mg-pagination-list { display: inline-block; } .mg-pagination .mg-pagination-item { cursor: pointer; display: inline-block; *display: inline; *zoom: 1; width: 8px; height: 8px; margin: 0 2px; background: #ddd; border-radius: 50%; } .mg-pagination .mg-pagination-item-prev, .mg-pagination .mg-pagination-item-next { background: #f7f7f7; border: 1px solid #cecece; border-radius: 2px; cursor: pointer; display: inline-block; height: 11px; margin: 0 10px; padding: 5px 0; text-align: center; vertical-align: middle; width: 29px; } .mg-pagination .mg-pagination-item-prev:after, .mg-pagination .mg-pagination-item-next:after { background: url(https://images.dable.io/static/i/prevnext2.png?3) no-repeat 0 0; background-size: 17px 11px; content: \"\"; display: inline-block; height: 13px; width: 9px; } .mg-pagination .mg-pagination-item-next:after { background-position: -10px 0; width: 8px; } .mg-pagination .mg-pagination-item-current { background: #508eef; } .mgl { text-align: left; color: #fff; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 10px; box-sizing: border-box; line-height: 1; text-transform: uppercase; position: absolute; top: 8px; left: 5px; z-index: 999; } .mgl > span { background: rgba(41, 41, 41, 0.50); padding: 2px 4px; } .mgheader div { margin: 0 5px 0 0 !important; } .mgline .image-container { padding: 0 !important; border: 0 !important; }"),
        c.adBlockStyles = "",
        c.adBlockStyles = c.adBlockStyles.replace(/\((\'|\")?\/\//g, "($1" + c.webProtocol + "//"),
        c.clickTracking = "",
        c.loadedType = "",
        c.funcBlocks = {},
        c.teaserData = {},
        c.deviceType = "desktop",
        c.hrefAttr = "href",
        c.enabledCooperationTypes = ["wages"],
        c.consentData = "",
        c.cmpEnabled = !1,
        c.uspString = "",
        c.uspEnabled = !1,
        c.cookieMatchingDomain = "cm.mgid.com",
        c.context._mgIntExchangeNews = c.context._mgIntExchangeNews || {},
        c.iframePlacementType = 0,
        c.networkInformationType = "unknown",
        c.networkInformationEffectiveType = "unknown",
        c.networkInformationSaveData = 0,
        this.MarketCutStr = function(e, t, n) {
            if (e.length <= t)
                return e;
            var o = new Array
              , r = (o = e.split(" "))[0] + " ";
            for (i = 1; i < o.length; i++) {
                if ((r + o[i]).length > t)
                    return r + (void 0 === n || n ? "..." : "");
                r += o[i] + " "
            }
            return e
        }
        ,
        this.MarketParseStr = function(e, t) {
            var n, i = new Array, o = "";
            for (i = e.split(" "),
            n = 0; n < i.length; n++)
                i[n].length > t && i[n].search(/&\w+;/) < 0 ? o += i[n].substr(0, t) + " " + i[n].substr(t) + " " : o += i[n] + " ";
            return o
        }
        ,
        this.prepareTitle = function(e) {
            return e = this.MarketCutStr(e, 75, 1)
        }
        ,
        this.prepareDesc = function(e) {
            return e = this.MarketCutStr(e, 75)
        }
        ,
        this.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ,
        c.fixGetElementsByClassNameHandler = function(e) {
            null == e.getElementsByClassName && (e.getElementsByClassName = function(e) {
                for (var t = [], n = new RegExp("\\b" + e + "\\b"), i = this.getElementsByTagName("*"), o = 0; o < i.length; o++) {
                    var r = i[o].className;
                    n.test(r) && t.push(i[o])
                }
                return t
            }
            )
        }
        ,
        this.hidePreloadDiv = function() {
            c.fallbackMode ? c.fallbackMode && 0 == this.countLoadBlocks && (c.root.innerHTML = "",
            c.context.document.getElementById("M527614PreloadC826444") && (c.context.document.getElementById("M527614PreloadC826444").style.display = "none")) : c.context.document.getElementById("MarketGidPreloadC" + this.containerId) ? c.context.document.getElementById("MarketGidPreloadC" + this.containerId).style.display = "none" : c.context.document.getElementById("M527614PreloadC" + this.containerId) ? c.context.document.getElementById("M527614PreloadC" + this.containerId).style.display = "none" : c.context.document.getElementById("MarketGidPreloadN" + this.containerId) ? this.context.document.getElementById("MarketGidPreloadN" + this.containerId).style.display = "none" : c.context.document.getElementById("M527614PreloadN" + this.containerId) && (c.context.document.getElementById("M527614PreloadN" + this.containerId).style.display = "none")
        }
        ,
        this.MarketGidPrerenderNews = function(e) {
            var t = c.templateFunc(c, e);
            if (this.root && t && (this.fallbackMode && 0 == this.countLoadBlocks && (this.root.innerHTML = ""),
            this.addPreRenderTemplate(t)),
            1 == c.fakeMode && c.prerenderStatus)
                for (var n = 0; n < c.afterPreRenderNewsHooks.length; n++)
                    c[c.afterPreRenderNewsHooks[n]]()
        }
        ,
        this.MarketGidLoadNews = function(e, t) {
            if (this.hidePreloadDiv(),
            void 0 !== t) {
                if (c.servicerData = t,
                void 0 !== t.dt && (c.deviceType = t.dt),
                void 0 !== c.servicerData && void 0 !== c.servicerData.css && (c.styles = c.servicerData.css,
                c.addStyle("split_style", c.servicerData.css),
                c.removeStyle("main")),
                void 0 !== c.servicerData && void 0 !== c.servicerData.t && "" !== c.servicerData.t) {
                    var n = c.servicerData.t.replace(/\r?\n/g, "");
                    c.setTemplate(n)
                }
                if (c.servicerData.hasOwnProperty("templateId") && c.templates[c.servicerData.templateId] && (void 0 === c.isElastic || 0 == c.countLoadBlocks)) {
                    var i = this.context.document.createElement("script");
                    i.type = "text/javascript",
                    i.charset = "utf-8",
                    i.src = c.webProtocol + "//" + c.templates[c.servicerData.templateId];
                    this.root.parentNode.appendChild(i);
                    var o = 5
                      , r = setInterval((function() {
                        var t = function() {
                            var e, t = c.context._mgtemplates;
                            for (e in t)
                                if ((t[e].widgetId == c.id || t[e].widgetId == c.originalId) && t[e].templateId == c.servicerData.templateId)
                                    return t[e];
                            return null
                        }();
                        if (null === t) {
                            if (--o >= 0)
                                return;
                            new Image(0,0).src = c.webProtocol + "//c.mgid.com/widget-template-timeout?id=" + c.id
                        } else
                            c.templateId = t.templateId,
                            c.removeStyle("main"),
                            c.addStyle("main", t.styles),
                            c.setTemplate(t.template);
                        clearInterval(r),
                        c.MarketGidLoadNews(e)
                    }
                    ), c.servicerData.tsi || 15);
                    return
                }
            }
            if (0 == c.fakeMode)
                for (var a = 0; a < c.beforeLoadNewsHooks.length; a++)
                    c[c.beforeLoadNewsHooks[a]]();
            if (this.isArray(e)) {
                n = c.templateFunc(c, e);
                c.json = e,
                this.root && n && ("function" == typeof c.parseAdvertLink && (n = c.parseAdvertLink(n)),
                this.fallbackMode && 0 == this.countLoadBlocks && (this.root.innerHTML = ""),
                this.addTemplate(n),
                this.renderBanners(!0))
            } else if (this.root && 0 == this.countLoadBlocks)
                return void (this.root.innerHTML = "");
            if (c.servicerData && c.servicerData.muidn && c.servicerData.pvid && 0 != c.pvid && c.servicerData.pvid == c.pvid)
                try {
                    c.context.localStorage && c.context.localStorage.setItem("mgMuidn", c.servicerData.muidn)
                } catch (e) {}
            this.cookieStorage.page = this.page,
            this.cookieStorage.time = (new Date).getTime(),
            this.setCookie();
            var s = this.root.getElementsByTagName("a");
            for (a = 0; a < s.length; a++)
                s[a].rel = "nofollow noopener";
            if (this.countLoadBlocks++,
            0 == c.fakeMode)
                for (a = 0; a < c.afterLoadNewsHooks.length; a++)
                    c[c.afterLoadNewsHooks[a]]();
            else
                "function" == typeof c.responsiveInit && c.responsiveInit()
        }
        ,
        this.addTemplate = this.addPreRenderTemplate = function(e) {
            this.root.insertAdjacentHTML("beforeend", this.preTemplate + e + this.postTemplate)
        }
        ,
        this.getViewportHeight = function() {
            var e = this.context.document
              , t = this.context
              , n = "documentElement"
              , i = "clientHeight"
              , o = "clientWidth"
              , r = "scrollTop";
            return c.isAmp() ? void 0 !== t["intersectionRect826444_" + c.uniqId] ? {
                c: t["intersectionRect826444_" + c.uniqId].height,
                s: t["intersectionRect826444_" + c.uniqId].y
            } : {
                c: t.intersectionRect826444.height,
                s: t.intersectionRect826444.y
            } : t.innerWidth ? {
                c: t.innerHeight,
                s: t.pageYOffset
            } : e[n] && e[n][o] ? {
                c: e[n][i],
                s: e[n][r]
            } : e.body[o] ? {
                c: e.body[i],
                s: e.body[r]
            } : 0
        }
        ,
        this.renderItem = function(e, t, n) {
            if ("html"in e) {
                e.h && (c.teaserData[e.h] = {
                    type: "banner",
                    coopType: "w",
                    imp: void 0 !== e.imp ? e.imp : [],
                    page: c.page,
                    iteration: c.iteration
                });
                var i = "mgBanner_826444_" + this.page + "_" + this.iteration
                  , o = '<iframe id="' + i + '" scrolling="no" style="' + ("width: " + (void 0 !== e.width ? e.width + "px" : "100%") + "; height: " + (void 0 !== e.height ? e.height + "px" : "100%") + "; border: 0px; margin: 0px; overflow: hidden; position: relative;z-index: 1;") + '"></iframe>';
                void 0 === e.rs && (e.rs = !1),
                e.iteration = c.iteration,
                this.banners[i] = e,
                e = ["", this.iteration]
            } else
                o = "";
            if (c.isArray(e)) {
                var r = c.prepareTeaserData(e);
                void 0 !== r.hash && void 0 !== r.id && (c.teaserHashes[r.id] = r.hash);
                var a = ["teaser-" + r.id];
                "l"in r.other && null != r.other.l.match(/[\?|&]u=/) && a.push("dsp"),
                "type"in r.other && a.push("type-" + r.other.type);
                var s = r.price.replace(new RegExp("[^0-9.]"), "")
                  , l = r.priceold.replace(new RegExp("[^0-9.]"), "")
                  , d = r.hash;
                "" !== o && this.banners[i] && this.banners[i].h && (d = this.banners[i].h);
                for (var m = [[/\{\*.*?\*\}/, ""], [/\{\$href\}/g, c.hrefAttr + '="' + c.prepareNiceHref(r.hash) + '" data-hash="' + r.hash + '"'], [/\{\$pmc_item\}/, c.id], [/\{\$hash\}/g, r.hash], [/\{\$target\}/g, void 0 !== r.other.type && "i" == r.other.type || void 0 !== c.servicerData.ats && c.servicerData.ats ? 'target="_top"' : 'target="_blank"'], [/(class\=\".*?)(mgline)([^\"]*\")/, "$1$2 " + a.join(" ") + '$3 data-i="' + d + '"'], [/\{\$source\}/g, r.source], [/\{\$src\}/g, 'width="370" height="200" data-i="' + r.id + '" src="' + (x = r.other.i,
                x && 0 === x.indexOf("//") ? c.webProtocol + x : x) + '" nopin="nopin" loading="lazy"'], [/\{\$title\}/g, c.htmlEntities(r.title)], [/\{\$desc\}/g, c.htmlEntities(r.desc)], [/\{\$iteration\}/g, c.iteration], [/\$iteration/g, c.iteration], [/this\.iteration/g, c.iteration], [/\{\$price\}/g, r.price], [/\{\$priceold\}/g, r.priceold], [/\{\$discount\}/g, r.discount], [/\{if \$price\}/g, "{if '' != " + s + "}"], [/\{if !\$price\}/g, "{if '' == " + s + "}"], [/\{if \$priceold\}/g, "{if '' != " + l + "}"], [/\{if \$price != " "\}/g, "{if " + r.price.trim().length + " != 0}"], [/\{if \$price == " "\}/g, "{if " + r.price.trim().length + " == 0}"], [/\$priceold/g, r.priceold], [/\$price/g, r.price], [/\{if \$rep\}/g, "{if p.isReplic}"], [/\{\$banner\}/g, o], [/\{if \$teaser\}/g, "{if '' == '" + o + "'}"], [/\{if \$banner\}/g, "{if '' != '" + o + "'}"], [/\{\$category\}/g, r.other.category || ""], [/\{\$cta\}/g, void 0 !== r.other.cta ? r.other.cta : ""], [/\{if \$cta\}/g, void 0 !== r.other.cta ? "{if '' != " + r.other.cta + "}" : ""], [/\{if !\$cta\}/g, void 0 !== r.other.cta ? "{if '' == " + r.other.cta + "}" : ""], [/\{\$sourceName\}/g, c.sourceName], [/\{\$vd\}/g, void 0 !== r.other.vd ? c.getTimeBySeconds(r.other.vd) : ""], [/\{\$vv\}/g, void 0 !== r.other.vv ? r.other.vv : ""], [/\{\$vr\}/g, void 0 !== r.other.vr ? r.other.vr : ""], [/\{if \$vd\}/g, "{if '" + (void 0 !== r.other.vd ? r.other.vd : "") + "' != ''}"], [/\{if \$vv\}/g, "{if '" + (void 0 !== r.other.vv ? r.other.vv : "") + "' != ''}"], [/\{if \$vr\}/g, "{if '" + (void 0 !== r.other.vr ? r.other.vr : "") + "' != ''}"]], p = 0; p < m.length; p++)
                    t = t.replace(m[p][0], m[p][1]);
                for (; ; ) {
                    if (t == (t = t.replace(/\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g, (function(e, t, n) {
                        return c.expressionParser(t) ? n : ""
                    }
                    ))))
                        break
                }
                if (void 0 !== r.other.i && r.other.i.match(/\.mp4/)) {
                    var u = /<img class="mcimg" width="(\d+)" height="(\d+)"/.exec(t)
                      , f = u ? u[1] + "px;" : "100%;"
                      , g = u ? u[2] + "px;" : "100%;";
                    t = t.replace(/<img( class="mcimg"[^>]+)/, '<video autoplay loop muted class="mcvideo" $1'),
                    c.addStyle("video", "video.mcvideo { border-style: solid;\n  border-color: #ffffff;\n  border-width: 0;\n  width: 100% !important;\n  height: auto !important;\n  max-width: " + f + "\n  max-height: " + g + "\n  box-sizing: border-box;\n  display: block; }")
                }
                if (1 === r.other.extimg && c.preRenderSizes[n]) {
                    var h = {
                        width: (f = c.preRenderSizes[n].width) + "px !important",
                        height: (g = c.preRenderSizes[n].height) + "px !important",
                        "object-fit": "cover",
                        "-o-object-fit": "cover",
                        "object-position": "top",
                        "-o-object-position": "top"
                    }
                      , v = "";
                    Object.keys(h).forEach((function(e) {
                        v += e + ":" + h[e] + ";"
                    }
                    )),
                    t = t.replace(/<img( class="mcimg")/, '<img class="mcimg" style="' + v + '"')
                }
                return this.iteration++,
                t
            }
            var x
        }
        ,
        this.renderBanners = function(e, t) {
            for (var n in c.banners)
                if (c.banners[n].rs != e) {
                    if (!e) {
                        if (c.banners[n].iteration != t)
                            continue;
                        c.banners[n].rs = !1
                    }
                    var i = c.context.document.getElementById(n);
                    i.contentWindow.document.open(),
                    i.contentWindow.document.write('<html><body style="margin: 0;">' + c.banners[n].html + "</body></html>"),
                    i.contentWindow.document.close(),
                    function(e) {
                        i.contentWindow.document.body.addEventListener("click", (function(t) {
                            for (var n = t.target, i = !1; n.parentElement; ) {
                                if ("A" === n.tagName) {
                                    i = !0;
                                    break
                                }
                                n = n.parentElement
                            }
                            i && ((new Image).src = c.banners[e].clickUrl + c.getAntifraudQueryParameter(c.banners[e].clickUrl))
                        }
                        ), !0)
                    }(n)
                }
        }
        ,
        c.renderLazyBanners = function(e) {
            "banner" == c.teaserData[e].type && c.renderBanners(!1, c.teaserData[e].iteration)
        }
        ,
        this.expressionMap = {
            "||": function(e) {
                for (var t in e)
                    if (c.expressionParser(e[t]))
                        return !0;
                return !1
            },
            "&&": function(e) {
                for (var t in e)
                    if (!c.expressionParser(e[t]))
                        return !1;
                return !0
            },
            "==": function(e) {
                return c.expressionParser(e[0]) == c.expressionParser(e[1])
            },
            "!=": function(e) {
                return c.expressionParser(e[0]) != c.expressionParser(e[1])
            },
            "+": function(e) {
                return c.expressionParser(e[0]) + c.expressionParser(e[1])
            },
            "-": function(e) {
                return c.expressionParser(e[0]) - c.expressionParser(e[1])
            },
            "*": function(e) {
                return c.expressionParser(e[0]) * c.expressionParser(e[1])
            },
            "/": function(e) {
                return c.expressionParser(e[0]) / c.expressionParser(e[1])
            },
            "%": function(e) {
                return c.expressionParser(e[0]) % c.expressionParser(e[1])
            }
        },
        this.expressionParser = function(e) {
            for (var t in c.expressionMap)
                if (-1 !== e.indexOf(t))
                    return c.expressionMap[t](e.split(t));
            return (e || "").replace(/^([\'|\s]+)|([\'|\s]+)$/g, "")
        }
        ,
        this.generateTemplate = function(e) {
            return c.templateText = e,
            c.templateFunc = function(e, t) {
                var n = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(c.templateText);
                if (n) {
                    for (var i = void 0 !== n[1] ? n[1] : "", o = 0; o < t.length; o++)
                        i += e.renderItem(t[o], n[2], o);
                    return i += void 0 !== n[3] ? n[3] : ""
                }
            }
            ,
            !0
        }
        ,
        this.getPageCount = function() {
            var e = parseInt("0")
              , t = parseInt("20");
            return e && t ? Math.min(e, t) : e || t
        }
        ,
        this.init = function() {
            if ("object" !== ("undefined" == typeof JSON ? "undefined" : o(JSON)) && (this.hidePreloadDiv(),
            console.log("Unsupported browser")),
            this.root) {
                this.getCookie();
                var e = parseInt(this.cookieStorage.page);
                this.linkerLinks = this.root.getElementsByTagName("a");
                var t = this.context.MarketGidPageOffset ? parseInt(this.context.MarketGidPageOffset) : 0;
                c.addClickHandler(c.clickHandlerList.hangNiceLinkListener.handler, c.clickHandlerList.hangNiceLinkListener.priority),
                c.addEvent(c.root, "mouseup", c.eventsHangNiceLinkListener),
                c.addEvent(c.root, "contextmenu", c.eventsHangNiceLinkListener),
                c.addEvent(c.root, "touchstart", c.eventsHangNiceLinkListener);
                var n = c.getPageCount();
                if (null != e && e < n && e > 0 ? this.page = e + 1 : (e > n - 1 || e < 1) && (this.page = 1 + t),
                (new Date).getTime() - (null != this.cookieStorage.time ? this.cookieStorage.time : 0) >= 6e5 && (this.page = 1 + t),
                this.page || (this.page = 1),
                this.pageUnlim = this.page - 1,
                this.cookieStorage.page = this.page,
                this.setCookie(),
                !this.context.document.cookie) {
                    var i = new Date;
                    this.page = i.getSeconds() % n + 1
                }
                if (this.blocksAddress = c.webProtocol + "//" + this.servicerDomain + "/",
                c.clickTracking = void 0 !== c.context.MGClickTracking ? c.context.MGClickTracking : "",
                c.adBlockStatement = !1,
                !0 === c.adBlockStatement && c.setTemplate(""),
                !c.generateTemplate(c.templateText))
                    return;
                c.context.onClickExcludes = c.context.onClickExcludes || [],
                c.context.onClickExcludes.push(c.root),
                !0 === c.adBlockStatement ? c.addStyle("adBlockMain", c.adBlockStyles) : c.addStyle("main", c.styles),
                c.addEvent(c.root, "click", c.widgetClickHandler),
                c.addEvent(c.root, "auxclick", c.widgetClickHandler),
                c.afterPrepareCappingDataHooks.push("renderLazyBanners");
                for (var r = 0; r < this.afterInitHooks.length; r++)
                    this[this.afterInitHooks[r]]()
            }
        }
        ,
        this.resetPage = function() {
            this.page = 1
        }
        ,
        this.getMostTopWindow = function() {
            for (var e = c.context; e != e.parent; )
                try {
                    e.parent.document.body;
                    e = e.parent
                } catch (e) {
                    break
                }
            return e
        }
        ,
        c.getDevicePixelRatio = function() {
            var e = 1;
            return void 0 !== c.context.devicePixelRatio ? e = c.context.devicePixelRatio : void 0 !== c.context.screen.systemXDPI && void 0 !== c.context.screen.logicalXDPI && c.context.screen.systemXDPI > c.context.screen.logicalXDPI && (e = c.context.screen.systemXDPI / c.context.screen.logicalXDPI),
            e % 1 == 0 || (e = e.toFixed(3)),
            e
        }
        ,
        this.getCbusterParameter = function() {
            return "cbuster=" + (this.context.MG_CacheBuster || (new Date).getTime() + "" + Math.floor(1e9 * Math.random() + 1))
        }
        ,
        this.injectScript = function(e, t) {
            void 0 === c.updatePrecalcRect ? c.injectionScriptMethod(e, t) : c.updatePrecalcRect((function() {
                c.injectionScriptMethod(e, t)
            }
            ))
        }
        ,
        this.injectionScriptMethod = function(e, t) {
            c.adBlockStatement && (c.requestParams.limitads = "limitads=3",
            c.requestParams.adb = "adb=1");
            var n = c.context.document.createElement("script");
            n.type = "text/javascript",
            n.charset = "utf-8";
            var i = ""
              , r = e ? "fs/" : "";
            i += c.blocksAddress + r + "826444/" + c.page,
            t && (c.requestParams.rsh = "rsh=" + t,
            c.requestParams.initial_composite = "initial_composite=" + c.id),
            void 0 !== c.context.MGi && (c.requestParams.iso = "iso=" + c.context.MGi,
            c.requestParams.token = "token=d4c774bb802ed372defe1d59846fbe42"),
            c.requestParams.pv = "pv=5",
            c.requestParams.cbuster = c.getCbusterParameter();
            var a = "";
            if (JSON.parse('["wages"]').indexOf("int_exchange") >= 0) {
                var s = c.context.document.querySelector('meta[property="og:url"]')
                  , l = c.context.document.querySelector('meta[property="og:title"]');
                if (c.context !== c.context.top)
                    if ("" !== c.context.document.referrer)
                        s = c.context.document.referrer.split("?")[0];
                    else
                        try {
                            s = c.context.parent.document.querySelector('meta[property="og:url"]')
                        } catch (e) {
                            try {
                                s = c.context.parent.document.location.href.split("?")[0]
                            } catch (e) {}
                        }
                s && (a = "object" === o(s) ? s.getAttribute("content") : s,
                c.requestParams.ogurl = "ogurl=" + encodeURIComponent(a)),
                l && (c.requestParams.ogtitle = "ogtitle=" + encodeURIComponent(l.getAttribute("content")))
            }
            if ("function" == typeof c.contextUriParse) {
                var d = c.contextUriParse();
                a && a == d || (c.requestParams.cxurl = "cxurl=" + encodeURIComponent(d))
            }
            if ("" != c.uniqId && (c.requestParams.uniqId = "uniqId=" + c.uniqId),
            c.getActiveChilds().length && (c.requestParams.childs = "childs=" + c.getActiveChilds().join(",")),
            void 0 !== c.context.MG_setRequestNonPersonalizedAds && 1 == c.context.MG_setRequestNonPersonalizedAds && (c.requestParams.npa = "npa=1"),
            0 != c.getInternalIds().length && (c.requestParams.viewedInternalIds = "exclude_int_exchange=" + c.getInternalIds().join(",")),
            c.cmpEnabled) {
                var m = {
                    consentData: "",
                    gdprApplies: !1
                };
                if ("" != c.consentData && void 0 !== c.consentData.gdprApplies && void 0 !== c.consentData.consentData)
                    m = c.consentData;
                else if (c.context.localStorage)
                    try {
                        null != (u = JSON.parse(c.context.localStorage.getItem("MG_ConsentData"))) && void 0 !== u.gdprApplies && void 0 !== u.consentData && (m = u)
                    } catch (e) {}
                c.requestParams.consentData = "consentData=" + m.consentData,
                c.requestParams.gdprApplies = "gdprApplies=" + m.gdprApplies
            }
            if (c.uspEnabled) {
                var p = "";
                if ("" != c.uspString)
                    p = c.uspString;
                else if (c.context.localStorage)
                    try {
                        var u;
                        null != (u = c.context.localStorage.getItem("MG_uspString")) && "" != u && (p = u)
                    } catch (e) {}
                c.requestParams.uspString = "uspString=" + p
            }
            try {
                var f = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                void 0 !== f.type && (c.networkInformationType = f.type,
                c.requestParams.nit = "nit=" + c.networkInformationType),
                void 0 !== f.effectiveType && (c.networkInformationEffectiveType = f.effectiveType,
                c.requestParams.niet = "niet=" + c.networkInformationEffectiveType),
                void 0 !== f.saveData && (c.networkInformationSaveData = f.saveData ? 1 : 0,
                c.requestParams.nisd = "nisd=" + f.saveData)
            } catch (e) {}
            -1 == i.indexOf("?") ? i += "?" : i += "&";
            var g = [];
            for (var h in c.requestParams)
                g.push(c.requestParams[h]);
            var v = c.context.self !== c.context.top
              , x = !0
              , k = !1
              , w = c.context;
            if (v)
                for (; ; ) {
                    try {
                        w.frameElement && "" != w.frameElement.src && (x = !1),
                        w.document.body
                    } catch (e) {
                        k = !0,
                        x = !1;
                        break
                    }
                    if (w == w.parent)
                        break;
                    w = w.parent
                }
            var b = ""
              , y = ""
              , C = "";
            try {
                c.isAmp() ? (c.iframePlacementType = 3,
                b = void 0 !== c.context.context.sourceUrl ? c.context.context.sourceUrl : "",
                y = void 0 !== c.context.context.referrer ? c.context.context.referrer : "",
                C = "" != b ? b : y) : (b = w.document.location.href,
                C = y = w.document.referrer || "",
                v && !x && (k ? c.iframePlacementType = 2 : (C = b,
                c.iframePlacementType = 1)))
            } catch (e) {
                c.iframePlacementType = 2
            }
            0 != c.iframePlacementType && g.push("iframe=" + c.iframePlacementType),
            g.push("ref=" + encodeURIComponent(C));
            try {
                if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 18e5 < Date.now()) {
                    var I = y.match(/:\/\/([^\/:]+)/i);
                    sessionStorage.MG_Session_pr = I && I[1] ? I[1] : "",
                    sessionStorage.MG_Session_lu = b
                }
                sessionStorage.MG_Session_lastUpdate = Date.now(),
                sessionStorage && sessionStorage.MG_Session_pr && g.push("pr=" + encodeURIComponent(sessionStorage.MG_Session_pr)),
                sessionStorage && sessionStorage.MG_Session_lu && g.push("lu=" + encodeURIComponent(sessionStorage.MG_Session_lu))
            } catch (e) {}
            var M = c.getMostTopWindow();
            void 0 === M._mgPageView527614 ? (M._mgPageView527614 = !0,
            g.push("pageView=1")) : g.push("pageView=0"),
            c.pvid = (new Date).getTime().toString(16) + (Math.round(1e9 * Math.random()) + 2147483648).toString(16),
            g.push("pvid=" + c.pvid),
            c.isAmp() ? g.push("implVersion=12") : "" != c.versionWidget && g.push("implVersion=" + c.versionWidget),
            g.push("dpr=" + c.getDevicePixelRatio());
            try {
                if (c.context.localStorage) {
                    var S = c.context.localStorage.getItem("mgMuidn");
                    S && (g.push("muid=" + S),
                    c.muid = S)
                }
            } catch (e) {}
            if (i += g.join("&"),
            n.src = i,
            c.sspPerformance && (n.onload = function() {
                c.context.performance.getEntries().map((function(e) {
                    if (e.name === i) {
                        var t = Math.ceil(e.responseEnd - e.startTime);
                        new Image(0,0).src = c.webProtocol + "//c.mgid.com/widget-ssp-performance?time=" + t
                    }
                }
                ))
            }
            ),
            c.context.document.head.appendChild(n),
            n.onerror = function() {
                c.isAdblock = !0
            }
            ,
            0 == c.fakeMode)
                for (var E = 0; E < c.afterInjectScriptHooks.length; E++)
                    c[c.afterInjectScriptHooks[E]]()
        }
        ,
        this.getActiveChilds = function() {
            return []
        }
        ,
        this.addClickHandler = function(e, t) {
            c.clickHandlers.push({
                handler: e,
                priority: t
            }),
            c.clickHandlers.sort((function(e, t) {
                return e.priority < t.priority ? -1 : 1
            }
            ))
        }
        ,
        this.widgetClickHandler = function(e) {
            var t;
            if ((e || (e = c.context.event),
            e.target || (e.target = e.srcElement),
            "A" != (t = e.target).tagName) && null === (t = c.getParentLink(t)))
                return;
            if (t.hasAttribute("data-hash"))
                for (var n = 0; n < c.clickHandlers.length; n++)
                    if (!c[c.clickHandlers[n].handler](t, e))
                        return
        }
        ,
        this.start = function() {
            if (c.root && 0 == c.countLoadBlocks) {
                !function(e) {
                    if ("function" == typeof c.context.__cmp) {
                        c.cmpEnabled = !0;
                        try {
                            c.context.__cmp("getConsentData", null, (function(e) {
                                c.consentData = e,
                                c.context.localStorage && c.context.localStorage.setItem("MG_ConsentData", JSON.stringify(e))
                            }
                            )),
                            setTimeout((function() {
                                e()
                            }
                            ), 50)
                        } catch (t) {
                            e()
                        }
                    } else
                        e()
                }((function() {
                    !function(e) {
                        if ("function" == typeof c.context.__uspapi) {
                            c.uspEnabled = !0;
                            try {
                                c.context.__uspapi("getUSPData", 1, (function(e, t) {
                                    t && (c.uspString = e.uspString || "",
                                    c.context.localStorage && "" != c.uspString && c.context.localStorage.setItem("MG_uspString", c.uspString))
                                }
                                )),
                                setTimeout((function() {
                                    e()
                                }
                                ), 50)
                            } catch (t) {
                                e()
                            }
                        } else
                            e()
                    }((function() {
                        c.injectScript()
                    }
                    ))
                }
                ))
            }
        }
        ,
        this.addEvent = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
        }
        ,
        this.removeEvent = function(e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n)
        }
        ,
        this.getMainCssSelector = function() {
            return "#" + (this.realRoot ? this.realRoot.id : this.root.id)
        }
        ,
        this.doubleClickHandler = function(e) {
            var t = []
              , n = new Image(0,0)
              , i = e.getAttribute("data-hash");
            t.push("url=" + encodeURIComponent(e)),
            t.push("uuid=" + c.servicerData.rid),
            t.push("hash=" + i),
            t.push("cid=826444"),
            t.push("gb_uid=57166637"),
            t.push("h2=" + c.servicerData.h2),
            t.push("type=" + c.doubleClickType),
            n.src = c.webProtocol + "//c.mgid.com/doubleclick?" + t.join("&")
        }
        ,
        this.adBlockDetect = function() {
            var e = 0
              , t = 1
              , n = function(e) {
                return !e.offsetHeight
            };
            return function(e) {
                var t, i, o, r, a = e.length;
                for (t = 0; t < a; t++) {
                    o = e[t],
                    r = void 0,
                    (r = c.context.document.createElement("div")).className = o,
                    r.innerHTML = ".",
                    c.root.appendChild(r);
                    var s = n(i = r);
                    if (c.root.removeChild(i),
                    s)
                        return !0
                }
                return !1
            }(["banner_ad", "sponsored_ad"]) ? t : e
        }
    }
    ;
    var r = !1
      , a = !1
      , s = !1
      , c = !1;
    if (document.getElementById("MG_ID")) {
        var l = document.getElementById("MG_ID").innerHTML
          , d = parent.window.document.getElementById("MarketGidScriptRootC" + l) ? "MarketGidScriptRootC" + l : "M527614ScriptRootC" + l;
        parent.window.document.getElementById(d) && (r = !0)
    } else {
        d = document.getElementById("MarketGidScriptRootC826444") || document.getElementById("MarketGidScriptRootC826444") ? "MarketGidScriptRootC826444" : (document.getElementById("M527614ScriptRootC826444"),
        "M527614ScriptRootC826444");
        document.getElementById(d) && (r = !0,
        a = !0,
        s = !0)
    }
    (document.getElementById("MarketGidComposite826444") || document.getElementById("M527614Composite826444")) && (r = !0,
    a = !0);
    var m = void 0 !== window.uniqId ? window.uniqId : ("00000" + Math.round(1e5 * Math.random()).toString(16)).slice(-5);
    if (!r) {
        if (document.getElementById("MG_ID")) {
            l = document.getElementById("MG_ID").innerHTML,
            d = parent.window.document.getElementById("MarketGidScriptRootG" + l) ? "MarketGidScriptRootG" + l : "M527614ScriptRootG" + l;
            parent.window.document.getElementById(d) && (r = !0)
        } else {
            d = document.getElementById("MarketGidScriptRootG137419") ? "MarketGidScriptRootG137419" : "M527614ScriptRootG137419";
            document.getElementById(d) && (r = !0,
            a = !0,
            s = !0)
        }
        (document.getElementById("MarketGid0") || document.getElementById("M527614Widget0")) && (r = !0,
        a = !0),
        c = !0
    }
    if (r) {
        if (c)
            if (a)
                if (s) {
                    (g = document.createElement("div")).id = "MarketGid0",
                    document.getElementById(d).appendChild(g),
                    window.MarketGidInfC826444 = new MarketGidBaseBlockC826444(g.id,window,!1,137419,m,11)
                } else {
                    d = document.getElementById("MarketGid0") ? "MarketGid0" : "M527614Widget0",
                    f = document.getElementById("MarketGid0") ? "1" : "2";
                    document.getElementById(d).innerHTML = "",
                    window.MarketGidInfC826444 = new window.MarketGidBaseBlockC826444(d,window,!0,0,m,f)
                }
            else {
                l = document.getElementById("MG_ID").innerHTML;
                (g = parent.window.document.createElement("div")).id = "MarketGid0";
                d = parent.window.document.getElementById("MarketGidScriptRootG" + l) ? "MarketGidScriptRootG" + l : "M527614ScriptRootG" + l,
                f = parent.window.document.getElementById("MarketGidScriptRootG" + l) ? "6" : "8";
                parent.window.document.getElementById(d).appendChild(g),
                window.MarketGidInfC826444 = new window.MarketGidBaseBlockC826444(g.id,parent.window,!1,l,m,f)
            }
        else if (a)
            if (s) {
                h = "" != m ? "_" + m : "";
                var p = (document.getElementById("M527614}ScriptRootC826444") || document.getElementById("M527614ScriptRootC826444") || document.getElementById("MarketGidScriptRootC826444"),
                826444);
                if (!window.document.getElementById("MarketGidComposite" + p) || !window.document.getElementById("M527614Composite" + p)) {
                    (g = window.document.createElement("div")).id = "MarketGidComposite" + p + h;
                    var u = window.document.getElementById("MarketGidScriptRootC" + p) ? "MarketGidScriptRootC" + p : "M527614ScriptRootC" + p;
                    window.document.getElementById(u).appendChild(g),
                    window.document.getElementById(u).id = u + h
                }
                v = window.document.getElementById("MarketGidPreloadC" + p) ? "MarketGidPreloadC" + p : "M527614PreloadC" + p;
                window.document.getElementById(v) && (window.document.getElementById(v).id = v + h);
                var d = document.getElementById("MarketGidComposite" + p + h) ? "MarketGidComposite" + p + h : "M527614Composite" + p + h;
                window.MarketGidInfC826444 = new window.MarketGidBaseBlockC826444(d,window,!1,p + h,m,11)
            } else {
                d = document.getElementById("MarketGidComposite826444") ? "MarketGidComposite826444" : "M527614Composite826444";
                var f = document.getElementById("MarketGidComposite826444") ? "3" : "4";
                document.getElementById(d).innerHTML = "",
                window.MarketGidInfC826444 = new window.MarketGidBaseBlockC826444(d,window,!1,0,m,f)
            }
        else {
            var g, h = "_" + m, l = document.getElementById("MG_ID").innerHTML;
            (g = parent.window.document.createElement("div")).id = "MarketGidComposite826444" + h;
            var d = parent.window.document.getElementById("MarketGidScriptRootC" + l) ? "MarketGidScriptRootC" + l : "M527614ScriptRootC" + l
              , f = parent.window.document.getElementById("MarketGidScriptRootC" + l) ? "9" : "10";
            parent.window.document.getElementById(d).id = d + h;
            var v = parent.window.document.getElementById("MarketGidPreloadC" + l) ? "MarketGidPreloadC" + l : "M527614PreloadC" + l;
            parent.window.document.getElementById(v) && (parent.window.document.getElementById(v).id = v + h),
            d += h,
            parent.window.document.getElementById(d).appendChild(g),
            window.MarketGidInfC826444 = new window.MarketGidBaseBlockC826444(g.id,parent.window,!1,l + h,m,f)
        }
        n(2).call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        n(3),
        window.MarketGidCColorBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Color = "MarketGidCColorBlock826444",
        n(4),
        window.MarketGidCAmpRenderBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.AmpRender = "MarketGidCAmpRenderBlock826444",
        n(5),
        window.MarketGidCMgqBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Mgq = "MarketGidCMgqBlock826444",
        n(6),
        window.MarketGidCCookieBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Cookie = "MarketGidCCookieBlock826444",
        n(7),
        window.MarketGidCObserverBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Observer = "MarketGidCObserverBlock826444",
        n(8),
        window.MarketGidCAntifraudBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Antifraud = "MarketGidCAntifraudBlock826444",
        n(9),
        window.MarketGidCActivateDelayBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.ActivateDelay = "MarketGidCActivateDelayBlock826444",
        n(10),
        window.MarketGidCExternalCountersBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.ExternalCounters = "MarketGidCExternalCountersBlock826444",
        window.MarketGidCMainBlock826444 = function(e) {
            e.addEvent(e.root, "mousemove", (function(t) {
                e.root.mouseX = t.pageX - e.root.offsetLeft,
                e.root.mouseY = t.pageY - e.root.offsetTop
            }
            )),
            e.prepareHref = function(t, n, i) {
                var o = ""
                  , r = e.teaserData[t];
                if (i && void 0 !== e.context._mgExternalLinkChanger && 1 == e.context._mgExternalLinkChanger) {
                    o = i.protocol + "//" + i.hostname + i.pathname;
                    var a = i.search;
                    if ("" != a)
                        for (var s = (a = a.replace("?", "")).split("&"), c = 0; c < s.length; c++) {
                            var l = s[c].split("=");
                            "k" != l[0] && "dc" != l[0] && (o += (0 == c ? "?" : "&") + s[c])
                        }
                } else
                    o = e.clickTracking + e.webProtocol,
                    r ? r.link && (o = /^http[s]?:/.test(r.link) ? e.clickTracking + r.link : "i" == r.coopType ? e.clickTracking + e.intExchangeProtocol + r.link : e.clickTracking + e.webProtocol + r.link) : o = "#";
                var d = "";
                void 0 !== e.clickableDelay && e.clickableDelay && "function" == typeof e.isWagesLink && e.isWagesLink(i) && (d = "dc=1");
                var m = e.getQueryParameterByName("dc");
                if (m && (d = "dc=" + parseInt(m)),
                "" !== e.getClickZone() && "" == d && (d = "dc=" + e.getClickZone()),
                "" !== d && (o += (o.indexOf("?") >= 0 ? "&" : "?") + d),
                "function" == typeof e.getAntifraudParams && r && "i" != r.coopType && (o += e.getAntifraudQueryParameter(o, n, i)),
                e.clickTracking && -1 !== o.indexOf(e.clickTracking) && (o = e.clickTracking + encodeURIComponent(o.replace(e.clickTracking, ""))),
                e.templateId && (o += (o.indexOf("?") >= 0 ? "&" : "?") + "tpl=" + e.templateId),
                -1 !== e.botRadarMetrics && (o += (o.indexOf("?") >= 0 ? "&" : "?") + "brm=" + e.botRadarMetrics),
                r && "i" != r.coopType)
                    try {
                        if (e.context.localStorage) {
                            var p = e.context.localStorage.getItem("mgMuidn");
                            "string" == typeof p && p.length > 0 && (o += (o.indexOf("?") >= 0 ? "&" : "?") + "muid=" + p)
                        }
                    } catch (e) {}
                if (1 == parseInt("")) {
                    var u = "//%host%/r/%title%?u=%rurl%";
                    o = (u = (u = (u = u.replace(/^(\/\/)/, e.context.location.protocol + "$1")).replace(/(%host%)/, e.context.location.host)).replace(/(%title%)/, e.transliterate(r[3]))).replace(/(%rurl%)/, e.tox64String(o, !0))
                }
                return o
            }
            ,
            e.getClickZone = function() {
                var t = JSON.parse("{}");
                if (0 == t.length)
                    return "";
                if (void 0 === t.top || void 0 === t.left || void 0 === t.right || void 0 === t.bottom)
                    return "";
                var n = e.root.offsetHeight
                  , i = e.root.offsetWidth
                  , o = [];
                o.top = parseInt(n / 100 * t.top),
                o.left = parseInt(i / 100 * t.left),
                o.right = i - parseInt(i / 100 * t.right),
                o.bottom = n - parseInt(n / 100 * t.bottom);
                var r = e.root.mouseX
                  , a = e.root.mouseY;
                return [[2, 3, 4], [5, "", 6], [7, 8, 9]][a <= o.top ? 0 : a >= o.bottom ? 2 : 1][r <= o.left ? 0 : r >= o.right ? 2 : 1]
            }
            ,
            e.getAntifraudQueryParameter = function(t, n, i) {
                var o = e.getAntifraudParams(n, i);
                if (o) {
                    var r = e.id;
                    return (t.indexOf("?") >= 0 ? "&" : "?") + "k=" + r + "f" + o
                }
                return ""
            }
            ,
            e.prepareNiceHref = function(t, n, i) {
                var o, r = e.teaserData[t];
                if (1 == r.other.sdl && "i" != r.coopType) {
                    if (o = e.clickTracking,
                    void 0 !== r.other.dl && "" != r.other.dl)
                        o += r.other.dl;
                    else {
                        var a = decodeURIComponent(r[0].replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, "")).toLowerCase()
                          , s = decodeURIComponent(r[3].replace(/[`|',:\/?;$%&\(\)^*!@]/g, "")).replace(/\s/g, "_");
                        o += e.webProtocol + "//" + (a ? a + "/" : "") + s
                    }
                    e.clickTracking && -1 !== o.indexOf(e.clickTracking) && (o = e.clickTracking + encodeURIComponent(o.replace(e.clickTracking, "")))
                } else
                    o = e.prepareHref(t, n, i);
                return o
            }
            ,
            e.transliterate = function(e) {
                var t = {
                    "Ё": "YO",
                    "Й": "I",
                    "Ц": "TS",
                    "У": "U",
                    "К": "K",
                    "Е": "E",
                    "Н": "N",
                    "Г": "G",
                    "Ш": "SH",
                    "Щ": "SCH",
                    "З": "Z",
                    "Х": "H",
                    "Ъ": "",
                    "ё": "yo",
                    "й": "i",
                    "ц": "ts",
                    "у": "u",
                    "к": "k",
                    "е": "e",
                    "н": "n",
                    "г": "g",
                    "ш": "sh",
                    "щ": "sch",
                    "з": "z",
                    "х": "h",
                    "ъ": "'",
                    "Ф": "F",
                    "Ы": "I",
                    "В": "V",
                    "А": "a",
                    "П": "P",
                    "Р": "R",
                    "О": "O",
                    "Л": "L",
                    "Д": "D",
                    "Ж": "ZH",
                    "Э": "E",
                    "ф": "f",
                    "ы": "i",
                    "в": "v",
                    "а": "a",
                    "п": "p",
                    "р": "r",
                    "о": "o",
                    "л": "l",
                    "д": "d",
                    "ж": "zh",
                    "э": "e",
                    "Я": "Ya",
                    "Ч": "CH",
                    "С": "S",
                    "М": "M",
                    "И": "I",
                    "Т": "T",
                    "Ь": "",
                    "Б": "B",
                    "Ю": "YU",
                    "я": "ya",
                    "ч": "ch",
                    "с": "s",
                    "м": "m",
                    "и": "i",
                    "т": "t",
                    "ь": "",
                    "б": "b",
                    "ю": "yu",
                    " ": "_",
                    "і": "i",
                    "І": "I",
                    "ї": "i",
                    "Ї": "I"
                };
                return e.split("").map((function(e) {
                    return e.match(/[a-z0-9_\-]/i) ? e : t[e] || ""
                }
                )).join("")
            }
            ,
            e.getQueryParameterByName = function(t) {
                t = t.replace(/[\[\]]/g, "\\$&");
                var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e.context.location.href);
                return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
            }
            ,
            e.getParentLink = function(e) {
                for (; e && "BODY" !== e.tagName; ) {
                    if ("A" == e.tagName)
                        return e;
                    e = e.parentNode
                }
                return null
            }
            ,
            e.findClosest = function(e, t) {
                for (var n; e.parentNode; ) {
                    n = e.parentNode.querySelectorAll(t);
                    for (var i = 0; i < n.length; i++)
                        if (e.isEqualNode(n[i]))
                            return n[i];
                    e = e.parentNode
                }
                return null
            }
            ,
            e.prepareTeaserData = function(t) {
                var n = {};
                n.source = e.htmlEntities(t[0]),
                n.id = e.htmlEntities(t[1]),
                n.title = void 0 !== t[3] ? e.prepareTitle(t[3]) : "",
                n.desc = void 0 !== t[4] ? e.prepareDesc(t[4]) : "",
                n.mirror = e.subnetMirrors[e.currentSubnet],
                n.key = t[6],
                n.price = void 0 !== t[7] ? e.htmlEntities(t[7]).replace(".00", "") : "",
                n.priceold = void 0 !== t[8] ? e.htmlEntities(t[8]).replace(".00", "") : "";
                var i = 100 * (1 - parseFloat(n.price) / parseFloat(n.priceold));
                i <= 1 || i > 100 ? (n.priceold = "",
                n.discount = "") : n.discount = Math.floor(i) + "%",
                n.hash = t[9],
                n.other = void 0 !== t[10] ? t[10] : {},
                void 0 !== n.other.i && (n.other.i = e.htmlEntities(n.other.i));
                var o = n.title.toLowerCase()
                  , r = n.desc.toLowerCase()
                  , a = ["копия", "подделка", "реплика", "как оригинал"];
                if ("1" == t[5]) {
                    n.isReplic = !0;
                    for (var s = 0; s < a.length; s++)
                        if (e.prepareTitle(o).indexOf(a[s]) > -1 || e.prepareDesc(r).indexOf(a[s]) > -1) {
                            n.isReplic = !1;
                            break
                        }
                } else
                    n.isReplic = !1;
                return "desktop" != e.deviceType && (n.other.sdl = 0),
                t.other = n.other,
                e.teaserData[n.hash] = t,
                e.teaserData[n.hash].type = "teaser",
                e.teaserData[n.hash].id = n.id,
                e.teaserData[n.hash].source = n.source,
                e.teaserData[n.hash].img = n.other.i,
                e.teaserData[n.hash].link = void 0 !== n.other.l ? n.other.l : null,
                e.teaserData[n.hash].mirror = n.mirror,
                e.teaserData[n.hash].coopType = void 0 !== n.other.type ? n.other.type : null,
                e.teaserData[n.hash].clicktrackers = void 0 !== n.other.clicktrackers ? n.other.clicktrackers : [],
                e.teaserData[n.hash].cdomain = n.other.cdomain || null,
                e.teaserData[n.hash].ccid = n.other.ccid || null,
                e.teaserData[n.hash].ch = n.other.ch || null,
                e.teaserData[n.hash].imp = void 0 !== n.other.imp ? n.other.imp : [],
                e.teaserData[n.hash].iteration = e.iteration,
                e.teaserData[n.hash].page = e.page,
                "i" == e.teaserData[n.hash].coopType && (e.context._mgIntExchangeNews[n.id] = 1),
                n
            }
            ,
            e.getInternalIds = function() {
                return Object.keys(e.context._mgIntExchangeNews)
            }
            ,
            e.tox64String = function(e, t) {
                t = void 0 === t && t;
                for (var n, i, o, r, a, s, c, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = "", m = 0; m < e.length; )
                    n = e.charCodeAt(m++),
                    i = e.charCodeAt(m++),
                    o = e.charCodeAt(m++),
                    r = n >> 2,
                    a = (3 & n) << 4 | i >> 4,
                    s = isNaN(i) ? 64 : (15 & i) << 2 | o >> 6,
                    c = isNaN(o) ? 64 : 63 & o,
                    d += l.charAt(r) + l.charAt(a) + l.charAt(s) + l.charAt(c);
                return 1 == t && (d = d.replace("+", "-").replace("/", "_").replace("=", "*")),
                d
            }
            ,
            e.hangNiceLinkListener = function(t, n) {
                if (!e.loadedDefault) {
                    var i = t.getAttribute("data-hash");
                    return void 0 !== e.teaserData[i] && void 0 !== e.teaserData[i].other && void 0 !== e.teaserData[i].other.sdl && (e.teaserData[i].other.sdl = 0),
                    t[e.hrefAttr] = e.prepareHref(i, n, t),
                    !0
                }
            }
            ,
            e.eventsHangNiceLinkListener = function(t) {
                if (!t)
                    t = e.context.event;
                var n;
                if ((t.target || (t.target = t.srcElement),
                "A" != (n = t.target).tagName) && null == (n = e.getParentLink(n)))
                    return;
                n.hasAttribute("data-hash") && e.hangNiceLinkListener(n, t)
            }
            ,
            e.htmlToElement = function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e,
                t.firstChild
            }
            ,
            e.htmlToElements = function(t) {
                var n = e.context.document.createElement("div");
                return n.innerHTML = t,
                Array.prototype.slice.call(n.childNodes)
            }
            ,
            e.isHiddenElement = function(e) {
                for (; "BODY" !== e.tagName; ) {
                    if ("fixed" != e.style.position && null == e.offsetParent)
                        return !0;
                    if ("hidden" == e.style.visibility)
                        return !0;
                    if ("none" == e.style.display)
                        return !0;
                    e = e.parentNode
                }
                return !1
            }
            ,
            e.getTimeBySeconds = function(e) {
                var t = "";
                if (1 === e.indexOf(":") || 2 === e.indexOf(":"))
                    n = e;
                else {
                    if (Number.isNaN(parseInt(e)))
                        return "00:00";
                    var n = new Date(1e3 * e).toISOString().substr(11, 8);
                    t = n.split(":")
                }
                return "00" === t[0] && (n = t[1] + ":" + t[2]),
                n
            }
            ,
            e.htmlEntities = function(e) {
                return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }
            ,
            e.random = function(e, t) {
                return Math.floor(e + Math.random() * (t - e + 1))
            }
        }
        ,
        window.MarketGidCMainBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Main = "MarketGidCMainBlock826444",
        window.MarketGidCStylesheetsBlock826444 = function(e) {
            e.stylesDom = {},
            e.isIE = "undefined" == typeof Proxy,
            e.addStyle = function(t, n, i) {
                t += "_" + e.uniqId,
                !e.isIE && void 0 === i && t in e.stylesDom || "" != (n = (n = (n = (n = n.replace(/(@media \([^(]*\) {)/g, "$1}")).replace(/((?:^|}|,)\W*)((?:\w+)?\.(?:mc|mg)[\-\w]+)/g, "$1" + e.getMainCssSelector() + " $2")).replace(/((@media \([^(]*\) \{)\})/g, "$2")).replace(/video-cdn\.(.+)\/mgPlayer/g, e.currentSubnetDomain)) && (e.isIE ? e.injectStyle(n, t, i) : e.stylesDom[t] = {
                    style: n,
                    container: i
                })
            }
            ,
            e.removeStyle = function(t) {
                t += "_" + e.uniqId,
                !e.isIE && t in e.stylesDom ? delete e.stylesDom[t] : e.clearStyle(t)
            }
            ,
            e.isIE || (e.stylesDom = new Proxy(e.stylesDom,{
                set: function(t, n, i) {
                    var o = i.container
                      , r = i.style;
                    return e.injectStyle(r, n, o),
                    t[n] = i,
                    !0
                },
                has: function(t, n) {
                    return (null !== e.root.querySelector("style#" + n) || void 0 === t[n]) && void 0 !== t[n]
                },
                deleteProperty: function(t, n) {
                    return e.clearStyle(n),
                    delete t[n],
                    !0
                }
            })),
            e.injectStyle = function(t, n, i) {
                var o;
                if (i)
                    if ((o = i).className = "MarketGidC826444",
                    o.styleSheet)
                        o.styleSheet.cssText = t;
                    else {
                        for (; o.firstChild; )
                            o.removeChild(o.firstChild);
                        o.appendChild(e.context.document.createTextNode(t))
                    }
                else
                    (o = e.context.document.createElement("style")).setAttribute("id", n),
                    o.className = "MarketGidC826444",
                    o.type = "text/css",
                    (null != e.realRoot ? e.realRoot : e.root).appendChild(o),
                    o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(e.context.document.createTextNode(t))
            }
            ,
            e.clearStyle = function(t) {
                var n = e.context.document.getElementById(t);
                null !== n && n.parentNode.removeChild(n)
            }
        }
        ,
        window.MarketGidCStylesheetsBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Stylesheets = "MarketGidCStylesheetsBlock826444",
        window.MarketGidCSubnetsBlock826444 = function() {
            var e = this;
            e.funcBlocks.Subnets = "MarketGidCSubnetsBlock826444",
            this.afterInitHooks.push("subnetsLoad"),
            this.currentSubnet = "",
            this.subnetMirrors = {},
            this.subnetMirrorServicers = {},
            this.subnetMirrorsImages = {},
            this.subnetMirrorsAdvert = {},
            this.subnetMirrorsAdLinkBlocks = {},
            this.subnetMirrorsUtm = {},
            this.subnetDashboardDomains = {},
            this.subnetMirrorNames = {},
            this.subnetMirrors[0] = "mgid.com",
            this.subnetMirrorServicers[0] = "servicer.mgid.com",
            this.subnetMirrorNames.marketgid = parseInt("0"),
            this.subnetMirrorsImages[0] = "mgid.com",
            this.subnetMirrorsAdLinkBlocks[0] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id"><a href="https://widgets.mgid.com/%lang/%utm%id" target="_blank"><img style="display: inline-block;width: 65px!important;" src="https://cdn.mgid.com/images/by_mgid_adc_logo_mini.svg" alt="Mgid" title="Mgid"></a></div></div><style>.mghead{ font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:5px 0 0px 5px;float:left;}.mgheader{  display: table !Important; width: 100% !important;margin-bottom:0px;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}</style>',
            this.subnetMirrorsUtm[0] = "?utm_source={domain}&utm_medium=referral&utm_campaign=widgets&utm_content=",
            this.subnetDashboardDomains[0] = e.webProtocol + "//dashboard.mgid.com",
            this.subnetMirrors[1] = "fem.mgid.com",
            this.subnetMirrorServicers[1] = "servicer.mgid.com",
            this.subnetMirrorNames.lady = parseInt("1"),
            this.subnetMirrorsImages[1] = "mgid.com",
            this.subnetMirrorsAdLinkBlocks[1] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id"><a href="http://mgid.com/advertisers%utm%id" target="_blank"> by <img style="display: inherit!important;width: auto!important;" src="//cdn.mgid.com/images/mgid_logo_mini_43x20.png" alt="Mgid" title="Mgid"></a></div></div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{  display: table !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin-bottom: -5px; border:0px}</style>',
            this.subnetMirrorsUtm[1] = "?utm_source=widget_fem&utm_medium=text&utm_campaign=add&utm_content=",
            this.subnetDashboardDomains[1] = e.webProtocol + "//dashboard.mgid.com",
            this.subnetMirrors[2] = "adskeeper.co.uk",
            this.subnetMirrorServicers[2] = "servicer.adskeeper.co.uk",
            this.subnetMirrorNames.adskeeper = parseInt("2"),
            this.subnetMirrorsImages[2] = "adskeeper.co.uk",
            this.subnetMirrorsAdLinkBlocks[2] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id"><a href="//widgets.adskeeper.com/%utm%id" target="_blank"><img src="//cdn.adskeeper.co.uk/images/adskeeper_logo_mini_71x16.png" alt="Adskeeper" title="Adskeeper"></a></div></div><style>.mghead{line-height:20px;vertical-align:middle;font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{  display: table !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}</style>',
            this.subnetMirrorsUtm[2] = "?utm_source=widget_adskeeper&utm_medium=text&utm_campaign=add&utm_content=",
            this.subnetDashboardDomains[2] = e.webProtocol + "//dashboard.adskeeper.co.uk",
            this.subnetMirrors[3] = "lentainform.com",
            this.subnetMirrorServicers[3] = "servicer.lentainform.com",
            this.subnetMirrorNames.lentainform = parseInt("3"),
            this.subnetMirrorsImages[3] = "lentainform.com",
            this.subnetMirrorsAdLinkBlocks[3] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id widgets_logo"><a href="http://partner.lentainform.com" target="_blank"></a></div></div><style>.widgets_logo{position:relative}.widgets_logo a{background:url(https://cdn.lentainform.com/images/lentainform/widgets_lentainform.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo:hover a{background:url(https://cdn.lentainform.com/images/lentainform/widgets_lentainform_hover.png) no-repeat}</style>',
            this.subnetMirrorsUtm[3] = "?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=",
            this.subnetDashboardDomains[3] = e.webProtocol + "//dashboard.lentainform.com",
            this.subnetMirrors[5] = "idealmedia.com",
            this.subnetMirrorServicers[5] = "servicer.idealmedia.com",
            this.subnetMirrorNames["idealmedia.com"] = parseInt("5"),
            this.subnetMirrorsImages[5] = "idealmedia.com",
            this.subnetMirrorsAdLinkBlocks[5] = '<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id"><a href="http://idealmedia.com/" target="_blank"><img style="display: inline-block;width: 43px;" src="//cdn.mirs.com/images/im_logo_mini_43x20.svg" alt="IdealMedia" title="IdealMedia"></a></div></div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: "Open Sans", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{  display: table !Important; width: 100% !important; margin-bottom:-7px;}div.mg_addad%id{text-align: right; margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}</style>',
            this.subnetMirrorsUtm[5] = "?utm_source=widget&utm_medium=text&utm_campaign=add&utm_content=",
            this.subnetDashboardDomains[5] = e.webProtocol + "//dashboard.idealmedia.com",
            this.afterInitHooks.push("subnetsLoad");
            var t = [];
            t.push({
                id: "826444"
            }),
            this.subnetsLoad = function() {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n].id;
                    (function(t) {
                        e.context["MarketGidLoadGoods" + t + ("" != e.uniqId ? "_" + e.uniqId : "")] = function(n, i) {
                            e.originalId = e.id,
                            e.id = t,
                            e.loadedType = "goods",
                            e.currentSubnet = "0",
                            e.currentSubnetDomain = "mgid.com",
                            e.MarketGidLoadNews(n, i)
                        }
                        ,
                        e.context["MarketGidCReject" + t] = e.MarketGidReject
                    }
                    )(i),
                    function(t) {
                        e.context["AdskeeperLoadGoods" + t + ("" != e.uniqId ? "_" + e.uniqId : "")] = function(n, i) {
                            e.originalId = e.id,
                            e.id = t,
                            e.loadedType = "goods",
                            e.currentSubnet = "2",
                            e.currentSubnetDomain = "adskeeper.co.uk",
                            e.MarketGidLoadNews(n, i)
                        }
                        ,
                        e.context["AdskeeperCReject" + t] = e.MarketGidReject
                    }(i),
                    function(t) {
                        e.context["LentaInformLoadGoods" + t + ("" != e.uniqId ? "_" + e.uniqId : "")] = function(n, i) {
                            e.originalId = e.id,
                            e.id = t,
                            e.loadedType = "goods",
                            e.currentSubnet = "3",
                            e.currentSubnetDomain = "lentainform.com",
                            e.MarketGidLoadNews(n, i)
                        }
                        ,
                        e.context["LentaInformCReject" + t] = e.MarketGidReject
                    }(i),
                    function(t) {
                        e.context["IdealMediaLoadGoods" + t + ("" != e.uniqId ? "_" + e.uniqId : "")] = function(n, i) {
                            e.originalId = e.id,
                            e.id = t,
                            e.loadedType = "goods",
                            e.currentSubnet = "5",
                            e.currentSubnetDomain = "idealmedia.com",
                            e.MarketGidLoadNews(n, i)
                        }
                        ,
                        e.context["IdealMediaCReject" + t] = e.MarketGidReject
                    }(i)
                }
            }
            ,
            e.getSubnetByMirror = function(t) {
                var n = 0;
                return void 0 !== e.subnetMirrorNames[t] && (n = e.subnetMirrorNames[t]),
                n
            }
        }
        ,
        window.MarketGidCSubnetsBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Subnets = "MarketGidCSubnetsBlock826444",
        window.MarketGidCInternalExchangeLoggerBlock826444 = function(e) {
            e.afterLoadNewsHooks.push("iExchangeLoggerInit"),
            e.internalExchangeLoggerHandler = function(t, n) {
                var i = t.getAttribute("data-hash");
                if (e.teaserData[i] && "i" == e.teaserData[i].coopType) {
                    var o = document.createElement("IMG")
                      , r = "cid=" + e.id + "&tid=" + e.teaserData[i].id + "&h=" + i;
                    void 0 !== e.servicerData.isBot && (r += "&bot=" + e.servicerData.isBot),
                    void 0 !== e.servicerData.tt && (r += "&tt=" + e.servicerData.tt),
                    void 0 !== e.servicerData.ts && (r += "&ts=" + e.servicerData.ts),
                    void 0 !== e.servicerData.psid && (r += "&psid=" + e.servicerData.psid);
                    var a = "//c.mgid.com/clie?" + r;
                    o.src = e.webProtocol + a,
                    o.onerror = function() {}
                }
                return !0
            }
            ,
            e.iExchangeLoggerInit = function() {
                e.addClickHandler(e.clickHandlerList.internalExchangeLogger.handler, e.clickHandlerList.internalExchangeLogger.priority)
            }
        }
        ,
        window.MarketGidCInternalExchangeLoggerBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.InternalExchangeLogger = "MarketGidCInternalExchangeLoggerBlock826444",
        window.MarketGidCInternalExchangeBlock826444 = function(e) {
            e.afterLoadNewsHooks.push("initIntExchangeLabels"),
            e.initIntExchangeLabels = function() {
                if (-1 != e.enabledCooperationTypes.indexOf("int_exchange") || "3" === e.currentSubnet)
                    for (var t = function(e) {
                        for (var t = [], n = [e]; n.length > 0; )
                            for (var i = n.pop(), o = 0; o < i.childNodes.length; o++) {
                                var r = i.childNodes[o];
                                r.nodeType === Node.COMMENT_NODE ? t.push(r) : n.push(r)
                            }
                        return t
                    }(e.root), n = 0; n < t.length; n++) {
                        var i = t[n]
                          , o = e.findClosest(i, ".mgline");
                        if (o && -1 != o.className.indexOf("type-w")) {
                            var r = e.context.document.createElement("IMG");
                            r.setAttribute("height", 20),
                            "intExchangeWagesImagePlace" == i.data && (r.className = "mcimgad",
                            r.src = e.webProtocol + "//cdn.mgid.com/images/mgid/int_exchange_wages_ad.svg");
                            var a = o.querySelector("a")
                              , s = a["data-hash"] || a.getAttribute("data-hash");
                            s && e.teaserData[s] && e.teaserData[s].source && "intExhangeWagesSourcePlace" == i.data && (r.className = "mcimgsrc",
                            r.src = e.webProtocol + "//cdn.mgid.com/images/mgid/int_exchange_wages_src.svg"),
                            r.src && i.parentNode.replaceChild(r, i)
                        }
                    }
            }
        }
        ,
        window.MarketGidCInternalExchangeBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.InternalExchange = "MarketGidCInternalExchangeBlock826444",
        window.MarketGidCSspDoubleClickBlock826444 = function(e) {
            e.afterSendCappingHooks.push("doubleClickCappingEvent"),
            e.afterInjectScriptHooks.push("servicerDoubleClick"),
            e.doubleClickType = "ssp";
            e.doubleclickStyles = '.MarketGidDButton826444{display:       inline-block;width:         80px;height:        80px;background-color: RGBA(0,0,0,0.4);border:        2px solid white;border-radius:        999px;color:         white !important;font:          normal 500 24px/80px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);text-align:    center;text-shadow:   none;position: absolute;text-decoration: none !important;transition:all 1s;}.MarketGidDLayout826444{height: 100%;width: 100% !important;position: absolute !important;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 99999;}#MarketGidComposite826444 .mgline {position:relative}',
            e.addStyle("ssp_doubleclick", e.doubleclickStyles),
            e.hashTimer = [],
            e.servicerDoubleClickStatus = !1,
            e.sspDoubleClickHook = function() {
                e.addClickHandler(e.clickHandlerList.sspDoubleClick.handler, e.clickHandlerList.sspDoubleClick.priority)
            }
            ,
            e.renderDoubleClick = function(t) {
                var n = e.context.document.createElement("div");
                n.classList.add("MarketGidDLayout826444");
                var i = t.closest(".mgline");
                null !== i && i.appendChild(n);
                var o = e.context.document.createElement("a");
                o.classList.add("MarketGidDButton826444"),
                o.href = t.getAttribute("href"),
                o.setAttribute("data-hash", t.getAttribute("data-hash"));
                var r = (1 - 80 / i.offsetHeight) / 2 * 100
                  , a = i.offsetWidth / 80 * .98;
                navigator.userAgent.toLowerCase().match(/windows/);
                o.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIHBvaW50cz0iMTIsMjkuMSAyMi4yLDE5IDEyLjEsOC45IDE0LDcgMjYsMTkgMTQsMzEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMSI+PC9wb2x5Z29uPjwvc3ZnPg==)",
                o.style.backgroundPosition = "center",
                o.style.top = r + "%";
                var s = a > 1 ? (1 - 80 / i.offsetWidth) / 2 * 100 : 0;
                o.style.left = s + "%",
                a < 1 && (o.style.transform = "scale3d(" + a + "," + a + "," + a + ")",
                o.style.webkitTransform = "scale3d(" + a + "," + a + "," + a + ")",
                o.style.transformOrigin = "left",
                o.style.webkitTransformOrigin = "left"),
                o.target = "_blank",
                n.appendChild(o),
                setTimeout((function() {
                    a = a < 1 ? a : 1,
                    o.style.transform = "scale3d(" + a + "," + a + "," + a + ")"
                }
                ), 10),
                setTimeout((function() {
                    n.parentNode.removeChild(n)
                }
                ), 1e4)
            }
            ,
            e.doubleClickCappingEvent = function() {
                if (void 0 !== e.sspDoubleClickHash)
                    for (var t = 0; t < e.sspDoubleClickHash.length; t++)
                        void 0 === e.hashTimer[e.sspDoubleClickHash[t]] && (e.hashTimer[e.sspDoubleClickHash[t]] = (new Date).getTime())
            }
            ,
            e.sspDoubleClickHandler = function(t, n) {
                var i = t.getAttribute("data-hash")
                  , o = (new Date).getTime();
                return i in e.hashTimer && o - e.hashTimer[i] > e.servicerData.dc || ("w" != e.teaserData[i].coopType || ("MarketGidDButton826444" == t.className || (e.doubleClickHandler(t),
                n.preventDefault(),
                e.renderDoubleClick(t),
                !1)))
            }
            ,
            e.servicerDoubleClick = function() {
                e.addStyle("ssp_doubleclick", e.doubleclickStyles);
                var t = setInterval((function() {
                    !0 !== e.servicerDoubleClickStatus ? void 0 !== e.servicerData.dc && e.root.querySelectorAll("a[data-hash]").length > 0 && (e.sspDoubleClickHook(),
                    e.servicerDoubleClickStatus = !0) : clearInterval(t)
                }
                ), 100)
            }
        }
        ,
        window.MarketGidCSspDoubleClickBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.SspDoubleClick = "MarketGidCSspDoubleClickBlock826444",
        window.MarketGidCAdvertLinkBlock826444 = function(e) {
            e.beforeLoadNewsHooks.push("refreshAdvertLink"),
            e.afterLoadNewsHooks.push("initAdvertPopup"),
            e.getAdvertLinkValue = function() {
                return parseInt("3")
            }
            ,
            e.removeElements = function(e) {
                for (var t = 0; t < e.length; t++)
                    e[t].parentNode.removeChild(e[t])
            }
            ,
            e.refreshAdvertLink = function() {
                var t = e.getAdvertLinkValue();
                if (t)
                    try {
                        var n = e.subnetMirrorsAdLinkBlocks[e.currentSubnet].replace(/%id/g, e.id)
                          , i = "";
                        i = "Promoted Content";
                        var o = navigator.language.substr(0, 2)
                          , r = -1 !== ["es", "vi", "hi", "ru", "uk"].indexOf(o) ? o : "";
                        n = (n = (n = (n = (n = n.replace("%WIDGET_TITLE%", i)).replace("%lang/", "" === r ? "" : r + "/")).replace(/\((\'|\")?\/\//g, "($1" + e.webProtocol + "//")).replace('src="//', 'src="' + e.webProtocol + "//")).replace('href="//', 'href="' + e.webProtocol + "//");
                        var a, s = "";
                        if ("" == s) {
                            s = e.subnetMirrorsUtm[e.currentSubnet];
                            var c = e.context.document.location.hostname;
                            if (e.context !== e.context.top) {
                                var l = e.context.document.referrer.match(/:\/\/(.[^/]+)/);
                                null !== l && (c = l[1])
                            }
                            s = s.replace("{domain}", c)
                        }
                        if (e.tickerPrefix = n.replace(/%utm/, s),
                        1 === t)
                            return;
                        (a = document.createElement("div")).innerHTML = e.tickerPrefix,
                        2 === t && e.removeElements(a.getElementsByClassName("mg_addad" + e.id)),
                        3 === t && e.removeElements(a.getElementsByClassName("mghead")),
                        e.tickerPrefix = a.innerHTML
                    } catch (e) {}
                else
                    e.tickerPrefix = ""
            }
            ,
            e.parseAdvertLink = function(t) {
                var n = "\x3c!--advertPrefix--\x3e"
                  , i = (e.getAdvertLinkValue(),
                t.indexOf(n) > t.length / 2);
                return i && (e.fixGetElementsByClassNameHandler(e.root),
                e.removeElements(e.root.getElementsByClassName("mg_addad" + e.id))),
                (i || 0 == e.countLoadBlocks) && (t = t.indexOf(n) >= 0 ? t.replace(n, this.tickerPrefix) : e.tickerPrefix + t),
                t
            }
            ,
            e.initAdvertPopup = function() {
                if (e.context.top == e.context.self && !(parseInt("0") > 0) && -1 != ["tablet", "desktop"].indexOf(e.deviceType) && void 0 === e.context._mgDisableAdvertPopup && "function" != typeof MarketGidCConstructorBlock826444) {
                    var t = e.root.querySelector(".mg_addad" + e.id);
                    t && t.addEventListener("click", e.showAdvertPopup)
                }
            }
            ,
            e.showAdvertPopup = function(t) {
                var n = e.findClosest(t.target, "[data-advert-url]");
                if (!n)
                    return null;
                t.preventDefault();
                var i = (null != e.realRoot ? e.realRoot : e.root).parentNode
                  , o = i.querySelector("._mgAdvertPopupC826444")
                  , r = i.querySelector("._mgPopupInner")
                  , a = function e(t, n, i) {
                    if (!(i <= 0)) {
                        var o = (n - t.scrollTop) / i * 10;
                        setTimeout((function() {
                            t.scrollTop = t.scrollTop + o,
                            t.scrollTop !== n && e(t, n, i - 10)
                        }
                        ), 10)
                    }
                };
                if (!o) {
                    for (var s = e.htmlToElements('<style>    ._mgAdvertPopupC826444 {        position: fixed;        width: 100%;        height: 100%;        top: 0px;        left: 0px;        font-family: "PTSans", Arial, sans-serif;        font-size: 16px;        color: #696969;        line-height: 1.3;        z-index: 999;        -webkit-box-sizing: border-box;        -moz-box-sizing: border-box;        box-sizing: border-box;    }    ._mgAdvertPopupC826444 iframe {        width: 100%;        height: 377px;    }    ._mgAdvertPopupC826444 ._mgPopupShadow {        position: absolute;        top: 0px;        left: 0px;        width: 100%;        height: 100%;        background-color: #000;        opacity: 0.4;        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";        z-index: 1;    }    ._mgAdvertPopupC826444 ._mgPopupInner {        position: relative;        top: 50%;        margin-left: -375px;        left: 50%;        padding: 36px;        width: 750px;        background-color: #f8f8f8;        z-index: 2;        -webkit-box-sizing: border-box;        -moz-box-sizing: border-box;        box-sizing: border-box;    }    ._mgAdvertPopupC826444 ._mgPopupInner.fixPop {        position: absolute!important;        top: 30px!important;        margin-top: 0!important;    }    ._mgAdvertPopupC826444 ._mgClosePopup {        position: absolute;        overflow: hidden;        top: 5px;        right: 5px;        height: 21px;        width: 21px;        text-indent: -9999px;        background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVmZmZmZmb///+E1CFqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAlSURBVAjXY3BgYGEQAEIWBgcGRkYGBgYXIBaA0CA+SBwkD1QHACp2Ae2BHO8IAAAAAElFTkSuQmCC\') no-repeat center center;        background-color: transparent;    }    ._mgAdvertPopupC826444 ._mgClosePopup:hover {        background-color: #dfdfdf;    }</style><div class="_mgAdvertPopupC826444">    <div class="_mgPopupShadow"></div>    <div class="_mgPopupInner">        <a href="#" class="_mgClosePopup" title="Close"></a>        <iframe frameborder="0"></iframe>    </div></div>'), c = 0; c < s.length; c++)
                        i.appendChild(s[c]);
                    if (!(o = i.querySelector("._mgAdvertPopupC826444")))
                        return !1;
                    r = o.querySelector("._mgPopupInner");
                    var l = o.querySelector("._mgPopupShadow");
                    r.style.marginTop = -r.clientHeight / 2 + "px",
                    l.addEventListener("click", (function(t) {
                        null == e.findClosest(t.target, "._mgPopupInner") && o.setAttribute("style", "display: none")
                    }
                    ));
                    var d = o.querySelector("._mgClosePopup");
                    d && d.addEventListener("click", (function(e) {
                        e.preventDefault(),
                        o.setAttribute("style", "display: none")
                    }
                    ));
                    var m = o.querySelector("iframe");
                    m.setAttribute("src", n.getAttribute("data-advert-url"));
                    var p = e.context.addEventListener ? "addEventListener" : "attachEvent";
                    (0,
                    e.context[p])("attachEvent" == p ? "onmessage" : "message", (function(t) {
                        var n = t.message ? "message" : "data"
                          , i = JSON.parse(t[n]);
                        if (void 0 === i.target || "correct-popup-height" != i.target)
                            return !0;
                        m.style.height = i.height + "px",
                        i.safariIPad && (i.keyboard ? (a(e.context.document.body, 0, 500),
                        r.classList.add("fixPop")) : r.classList.remove("fixPop")),
                        r.style.marginTop = -r.clientHeight / 2 + "px"
                    }
                    ), !1)
                }
                o.setAttribute("style", "display: block"),
                r.className.indexOf("fixPop") >= 0 && a(e.context.document.body, 0, 500)
            }
        }
        ,
        window.MarketGidCAdvertLinkBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.AdvertLink = "MarketGidCAdvertLinkBlock826444",
        window.MarketGidCContentPreviewBlock826444 = function(e) {
            e.afterLoadNewsHooks.push("addPreviewEvent"),
            e.preloadAnimationStyles = ".image-container {\noverflow: hidden;}\n.preload {\n  background: #2a397b;\n  left: -100%;\n  position: absolute;\n  top: 0;\n  height: 4px;\n  width: 100%;\n  z-index: 2;\n  -webkit-animation: preloadAnimation linear .8s;\n  -moz-animation: preloadAnimation linear .8s;\n  -ms-animation: preloadAnimation linear .8s;\n  -o-animation: preloadAnimation linear .8s;\n  animation: preloadAnimation linear .8s;\n  -webkit-animation-iteration-count: 1;\n  -moz-animation-iteration-count: 1;\n  -ms-animation-iteration-count: 1;\n  -o-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n@keyframes preloadAnimation {\n  0% {\n    transform: translateX(0)\n  }\n  90% {\n    transform: translateX(100%)\n  }\n  100% {\n    transform: translateY(-2px)\n  }\n}\n@-moz-keyframes preloadAnimation {\n  0% {\n    -moz-transform: translateX(0)\n  }\n  90% {\n    -moz-transform: translateX(100%)\n  }\n  100% {\n    -moz-transform: translateY(-2px)\n  }\n}\n@-ms-keyframes preloadAnimation {\n  0% {\n    -ms-transform: translateX(0)\n  }\n  90% {\n    -ms-transform: translateX(100%)\n  }\n  100% {\n    -ms-transform: translateY(-2px)\n  }\n}",
            e.addPreviewEvent = function() {
                e.addEvent(e.root, "mouseover", (function(t) {
                    e.injectPreview(t)
                }
                )),
                e.addEvent(e.root, "touchstart", (function(t) {
                    e.injectPreview(t)
                }
                )),
                e.addEvent(e.root, "mouseout", (function(t) {
                    e.removePreview(t)
                }
                )),
                e.addEvent(e.root, "touchend", (function(t) {
                    e.removePreview(t)
                }
                )),
                e.addStyle("contentPreview", e.preloadAnimationStyles)
            }
            ,
            e.injectPreview = function(t) {
                if ("mcimg" === t.target.className) {
                    var n = t.target.parentNode.parentNode.dataset.hash;
                    if (void 0 !== e.teaserData[n] && void 0 !== e.teaserData[n].other.vp) {
                        var i = e.context.document.createElement("div");
                        i.setAttribute("class", "preload"),
                        e.addEvent(i, "animationend", (function(e) {
                            e.target.parentNode.removeChild(e.target)
                        }
                        )),
                        t.target.parentNode.appendChild(i),
                        setTimeout((function() {
                            var i = e.context.document.createElement("video");
                            i.src = e.teaserData[n].other.vp,
                            i.classList.add("previewContent"),
                            i.loop = "loop",
                            i.autoplay = !0,
                            i.setAttribute("playsinline", ""),
                            i.muted = "muted",
                            i.style.position = "absolute",
                            i.style.top = 0,
                            i.style.left = 0,
                            i.style.width = "100%",
                            t.target.parentNode.appendChild(i)
                        }
                        ), 100)
                    }
                }
            }
            ,
            e.removePreview = function(t) {
                var n = t.target;
                "mouseout" === t.type && (n = t.relatedTarget);
                for (var i = e.root.querySelectorAll("video.previewContent"), o = 0; o < i.length; o++)
                    null == n || null == n.parentNode || void 0 === n.parentNode.classList || n.parentNode.classList.contains("image-container") && i[o] === n.parentNode.querySelector("video.previewContent") || (i[o].parentNode.querySelector("img.mcimg").style.display = "block",
                    i[o].parentNode.removeChild(i[o]))
            }
        }
        ,
        window.MarketGidCContentPreviewBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.ContentPreview = "MarketGidCContentPreviewBlock826444",
        window.MarketGidCGradientBlock826444 = function(e) {
            e.afterLoadNewsHooks.push("gradientRendering"),
            e.gradientRendering = function() {
                var t = e.root.querySelectorAll("[class*=mgline-blur]");
                if (0 !== t.length)
                    for (var n = 0; n < t.length; n++) {
                        var i = ""
                          , o = ""
                          , r = /\bmgline-[^\s]*\b/.exec(t[n].classList.value);
                        r && (i = "to " + (o = "blur" == (o = r[0].split("-").pop()) ? "bottom" : o) + ",");
                        var a = t[n]
                          , s = t[n].getElementsByClassName("text-elements")[0];
                        if (!t[n].getElementsByClassName("mctitle")[0])
                            return;
                        var c = t[n].getElementsByClassName("mctitle")[0].getElementsByTagName("a")[0]
                          , l = t[n].getElementsByClassName("mcdomain")[0]
                          , d = t[n].querySelector("img.mcimg").getAttribute("src");
                        "function" == typeof fetch ? function(t, n, i, o, r) {
                            e.colorAverage(d).then((function(a) {
                                (e.context.matchMedia("(max-width: 480px)").matches || "mobile" === e.deviceType) && (r = "");
                                var s = .299 * a.r + .587 * a.g + .114 * a.b > 186 ? "#000" : "#fff"
                                  , c = "linear-gradient(" + r + "transparent, rgba(" + a.r + "," + a.g + "," + a.b + ", 0.25) 15%,rgba(" + a.r + "," + a.g + "," + a.b + ", 0.85) 30%,rgb(" + a.r + "," + a.g + "," + a.b + ") 45%)";
                                t.style.background = "rgb(" + a.r + "," + a.g + "," + a.b + ")",
                                n.style.background = c,
                                i.style.color = s,
                                void 0 !== o && (o.firstElementChild.style.color = s)
                            }
                            ))
                        }(a, s, c, l, i) : function(t, n, i, o) {
                            (e.context.matchMedia("(max-width: 480px)").matches || "mobile" === e.deviceType) && (o = "");
                            var r = "linear-gradient(" + o + "transparent,rgba(0,0,0, 0.25) 15%,rgba(0,0,0, 0.85) 30%,rgb(0,0,0) 45%)";
                            t.style.background = r,
                            n.style.color = "#fff",
                            void 0 !== i && (i.firstElementChild.style.color = "#fff")
                        }(a, s, c, l);
                        var m = e.autoSizeTitle - Math.round(c.clientHeight / e.autoSizeTitle);
                        c.style.fontSize = m + "px",
                        c.style.lineHeight = m + "px"
                    }
            }
        }
        ,
        window.MarketGidCGradientBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Gradient = "MarketGidCGradientBlock826444",
        window.MarketGidCUtilsBlock826444 = function(e) {
            e.utils = {},
            e.utils.getScroll = function() {
                var t = e.utils.getWindow();
                return {
                    top: t.document.body.scrollTop || t.document.documentElement.scrollTop || 0,
                    left: t.document.body.scrollLeft || t.document.documentElement.scrollLeft || 0
                }
            }
            ,
            e.utils.getRect = function(t, n) {
                var i = t.getBoundingClientRect()
                  , o = {
                    top: i.top,
                    bottom: i.bottom,
                    left: i.left,
                    right: i.right,
                    height: i.height ? i.height : i.bottom - i.top,
                    width: i.width ? i.width : i.right - i.left
                };
                if (e.context.self !== e.context.top) {
                    var r = e.utils.getFrame();
                    if (r) {
                        var a = r.getBoundingClientRect();
                        o.top += a.top,
                        o.bottom += a.top,
                        o.left += a.left,
                        o.right += a.left
                    }
                }
                if (n) {
                    var s = e.utils.getScroll();
                    o.top += s.top,
                    o.bottom += s.top,
                    o.left += s.left,
                    o.right += s.left
                }
                return o
            }
            ,
            e.utils.getViewportSize = function() {
                var t = e.utils.getWindow();
                return {
                    width: t.innerWidth || t.document.documentElement.clientWidth,
                    height: t.innerHeight || t.document.documentElement.clientHeight
                }
            }
            ;
            var t = void 0;
            e.utils.getWindow = function() {
                if (void 0 === t) {
                    var n = e.context;
                    if (e.context.parent != e.context.self)
                        try {
                            null != e.context.top.document && (n = e.context.top)
                        } catch (e) {}
                    t = n
                }
                return t
            }
            ;
            var n = void 0;
            e.utils.getFrame = function() {
                if (void 0 === n)
                    try {
                        for (var t = e.context, i = t.frameElement; t.frameElement; t = t.parent)
                            i = t.frameElement;
                        n = i
                    } catch (e) {
                        n = null
                    }
                return n
            }
        }
        ,
        window.MarketGidCUtilsBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Utils = "MarketGidCUtilsBlock826444",
        window.MarketGidCRtbBlock826444 = function(e) {
            this.afterLoadNewsHooks.push("cmPixelLoad"),
            this.cmPixelLoad = function(t) {
                if (!e.context["i.js.loaded"] && e.cookieMatchingDomain) {
                    e.context["i.js.loaded"] = !0;
                    var n = window.MarketGidInfC826444.context.document.createElement("script");
                    n.charset = "utf-8";
                    var i = e.webProtocol + "//" + e.cookieMatchingDomain + "/i.js?" + e.getCbusterParameter();
                    "string" == typeof t && "" != t && (i += t),
                    n.src = i,
                    n.type = "text/javascript",
                    n.async = !0,
                    n.onerror = function() {
                        e.context["i.js.loaded"] = !1
                    }
                    ,
                    (null != window.MarketGidInfC826444.realRoot ? MarketGidInfC826444.realRoot : MarketGidInfC826444.root).parentNode.appendChild(n)
                }
                if (!e.context["i-noref.js.loaded"] && e.cookieMatchingDomain) {
                    e.context["i-noref.js.loaded"] = !0;
                    var o = document.createElement("IFRAME");
                    o.src = "about:blank",
                    o.frameBorder = 0,
                    o.style.position = "absolute",
                    o.style.top = "0px",
                    o.style.left = "-1px",
                    o.style.width = "0px",
                    o.style.height = "0px",
                    o.style.display = "none",
                    o.onload = function() {
                        var t = this.contentDocument.createElement("script");
                        t.charset = "utf-8";
                        var n = e.webProtocol + "//" + e.cookieMatchingDomain + "/i-noref.js?" + e.getCbusterParameter();
                        t.src = n,
                        t.type = "text/javascript",
                        t.async = !0,
                        t.onerror = function() {
                            e.context["i-noref.js.loaded"] = !1
                        }
                        ,
                        this.contentDocument.body.appendChild(t)
                    }
                    ,
                    document.body.appendChild(o)
                }
            }
        }
        ,
        window.MarketGidCRtbBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Rtb = "MarketGidCRtbBlock826444",
        window.MarketGidCResponsiveBlock826444 = function(e) {
            e.afterLoadNewsHooks.push("responsiveInit"),
            e.responsiveInit = function() {
                e.ElementQueries.init(),
                e.fixGetElementsByClassNameHandler(e.root),
                e.fakeMode || (e.fixPrices(),
                setTimeout((function() {
                    e.fixFlexbox()
                }
                ), 100))
            }
            ,
            e.fixElementPrice = function(t) {
                e.fixGetElementsByClassNameHandler(t);
                for (var n = t.getElementsByClassName("mcpriceouter"), i = 0; i < n.length; i++) {
                    var o = n[i].parentNode;
                    e.fixGetElementsByClassNameHandler(o);
                    var r = o.getElementsByClassName("mcpriceold");
                    if (n[i].getBoundingClientRect().bottom >= o.getBoundingClientRect().bottom)
                        for (var a = 0; a < r.length; a++)
                            r[a].style.display = "none";
                    else
                        for (a = 0; a < r.length; a++)
                            r[a].style.display = "inline-block",
                            n[i].getBoundingClientRect().bottom >= o.getBoundingClientRect().bottom && (r[a].style.display = "none")
                }
            }
            ,
            e.fixPrices = function() {
                for (var t = e.root.getElementsByClassName("mgline"), n = 0; n < t.length; n++)
                    !function(t) {
                        e.fixElementPrice(t),
                        t.resizeSensor = new e.ResizeSensor(t,(function() {
                            e.fixElementPrice(t)
                        }
                        ))
                    }(t[n])
            }
            ,
            e.fixFlexbox = function() {
                var t;
                if ("" == (t = (t = e.context.document.body || e.context.document.documentElement).style).webkitFlexWrap || "" == t.msFlexWrap || "" == t.flexWrap)
                    return !0;
                for (var n = e.root.getElementsByClassName("mgline"), i = 0; i < n.length; i++)
                    n[i].style.height = "auto";
                setTimeout((function() {
                    for (var t = 0, i = 0; i < n.length; i++) {
                        var o = n[i].getBoundingClientRect()
                          , r = o.bottom - o.top;
                        r > t && (t = r)
                    }
                    if (0 != r)
                        for (i = 0; i < n.length; i++)
                            n[i].style.height = t + "px";
                    e.fixImages()
                }
                ), 0)
            }
            ,
            e.fixImages = function() {
                setTimeout((function() {
                    for (var t = !1, n = e.root.getElementsByClassName("mcimg"), i = 0; i < n.length; i++)
                        if ("DIV" == n[i].tagName) {
                            var o = n[i].getBoundingClientRect();
                            o.bottom - o.top <= 25 && (t = !0,
                            n[i].style.display = "none",
                            function(e) {
                                setTimeout((function() {
                                    e.style.display = "block"
                                }
                                ), 0)
                            }(n[i]))
                        }
                    t && e.fixFlexbox()
                }
                ), 200)
            }
            ,
            /*! Copyright (c) 2013 Marc J. Schmidt
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software. */
            e.ElementQueries = function() {
                function t(e) {
                    this.element = e,
                    this.options = {};
                    var t, n, i, o, r, a, s, c = 0, l = 0;
                    this.addOption = function(e) {
                        var t = [e.mode, e.property, e.value].join(",");
                        this.options[t] = e
                    }
                    ;
                    var d = ["min-width", "min-height", "max-width", "max-height"];
                    this.call = function() {
                        for (t in c = this.element.offsetWidth,
                        l = this.element.offsetHeight,
                        r = {},
                        this.options)
                            this.options.hasOwnProperty(t) && (n = this.options[t],
                            i = parseFloat(n.value),
                            o = "width" == n.property ? c : l,
                            s = n.mode + "-" + n.property,
                            a = "",
                            "min" == n.mode && o >= i && (a += n.value),
                            "max" == n.mode && o <= i && (a += n.value),
                            r[s] || (r[s] = ""),
                            a && -1 === (" " + r[s] + " ").indexOf(" " + a + " ") && (r[s] += " " + a));
                        for (var e in d)
                            r[d[e]] ? this.element.setAttribute(d[e], r[d[e]].substr(1)) : this.element.removeAttribute(d[e])
                    }
                }
                function n(n, i, o) {
                    n.elementQueriesSetupInformation ? n.elementQueriesSetupInformation.addOption(i) : (n.elementQueriesSetupInformation = new t(n),
                    n.elementQueriesSetupInformation.addOption(i),
                    n.elementQueriesSensor = new e.ResizeSensor(n,(function() {
                        n.elementQueriesSetupInformation.call()
                    }
                    ),o)),
                    n.elementQueriesSetupInformation.call()
                }
                function i(t, i, o, r) {
                    var a, s = function(e) {
                        var t, n, i = 0;
                        if (0 == e.length)
                            return i;
                        for (t = 0,
                        n = e.length; t < n; t++)
                            i = (i << 5) - i + e.charCodeAt(t),
                            i |= 0;
                        return i
                    }(t + i + o + r);
                    if (e.root.querySelectorAll && e.root.querySelectorAll.bind && (a = e.root.querySelectorAll.bind(e.root)),
                    a)
                        for (var c = a(t), l = 0, d = c.length; l < d; l++)
                            n(c[l], {
                                mode: i,
                                property: o,
                                value: r
                            }, s)
                }
                var o = /,?([^,\n]*)\[[\s\t]*(min|max)-(width|height)[\s\t]*[~$\^]?=[\s\t]*"([^"]*)"[\s\t]*]([^\n\s\{]*)/gim;
                function r(e) {
                    var t;
                    for (e = e.replace(/'/g, '"').replace(/(\[.*?\])([A-z\.-]*)/g, "$2$1"); null !== (t = o.exec(e)); )
                        5 < t.length && i(t[1] || t[5], t[2], t[3], t[4])
                }
                function a(e) {
                    var t = "";
                    if (e)
                        if ("string" == typeof e)
                            -1 === (e = e.toLowerCase()).indexOf("min-width") && -1 === e.indexOf("max-width") || r(e);
                        else
                            for (var n = 0, i = e.length; n < i; n++)
                                1 === e[n].type ? -1 !== (t = e[n].selectorText || e[n].cssText).indexOf("min-height") || -1 !== t.indexOf("max-height") ? r(t) : -1 === t.indexOf("min-width") && -1 === t.indexOf("max-width") || r(t) : 4 === e[n].type && a(e[n].cssRules || e[n].rules)
                }
                this.init = function() {
                    for (var t = e.context.document.styleSheets, n = 0, i = t.length; n < i; n++)
                        try {
                            t[n].ownerNode && "MarketGidC826444" == t[n].ownerNode.className && a(t[n].cssRules || t[n].cssText || t[n].rules)
                        } catch (e) {
                            continue
                        }
                }
                ,
                this.update = function() {
                    this.init()
                }
            }
            ,
            e.ElementQueries.update = function() {
                e.ElementQueries.instance.update()
            }
            ,
            e.ElementQueries.init = function() {
                e.ElementQueries.instance || (e.ElementQueries.instance = new e.ElementQueries),
                e.ElementQueries.instance.init()
            }
            ,
            e.initElementQueries = function() {
                e.addEvent(e.context, "load", (function() {
                    e.ElementQueries.init()
                }
                ))
            }
            ,
            e.ResizeSensor = function(t, n, i) {
                function o() {
                    var e, t;
                    this.q = [],
                    this.add = function(e) {
                        this.q.push(e)
                    }
                    ,
                    this.call = function() {
                        for (e = 0,
                        t = this.q.length; e < t; e++)
                            this.q[e].call()
                    }
                }
                function r(t, n, i) {
                    if (t.resizedAttached) {
                        if (t.resizedAttached)
                            return void t.resizedAttached.add(n)
                    } else
                        t.resizedAttached = new o,
                        t.resizedAttached.add(n);
                    if (e.context.document.querySelector) {
                        if (null == (s = e.context.document.querySelector(".resize-sensor.hash_" + i)) || !i) {
                            t.resizeSensor = e.context.document.createElement("div"),
                            t.resizeSensor.className = i ? "resize-sensor hash_" + i : "resize-sensor";
                            var r = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;"
                              , a = "position: absolute; left: 0; top: 0;";
                            t.resizeSensor.style.cssText = r,
                            t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + r + '"><div style="' + a + '"></div></div><div class="resize-sensor-shrink" style="' + r + '"><div style="' + a + ' width: 200%; height: 200%"></div></div>',
                            t.appendChild(t.resizeSensor);
                            var s = t.resizeSensor
                        }
                        ({
                            fixed: 1,
                            absolute: 1
                        })[function(t, n) {
                            return t.currentStyle ? t.currentStyle[n] : e.context.getComputedStyle ? e.context.getComputedStyle(t, null).getPropertyValue(n) : t.style[n]
                        }(t, "position")] || (t.style.position = "relative");
                        var c, l, d = s.childNodes[0], m = d.childNodes[0], p = s.childNodes[1], u = function() {
                            m.style.width = d.offsetWidth + 10 + "px",
                            m.style.height = d.offsetHeight + 10 + "px",
                            d.scrollLeft = d.scrollWidth,
                            d.scrollTop = d.scrollHeight,
                            p.scrollLeft = p.scrollWidth,
                            p.scrollTop = p.scrollHeight,
                            c = t.offsetWidth,
                            l = t.offsetHeight
                        };
                        u();
                        var f = function() {
                            t.resizedAttached && t.resizedAttached.call()
                        };
                        e.addEvent(d, "scroll", (function() {
                            (t.offsetWidth > c || t.offsetHeight > l) && f(),
                            u()
                        }
                        )),
                        e.addEvent(p, "scroll", (function() {
                            (t.offsetWidth < c || t.offsetHeight < l) && f(),
                            u()
                        }
                        ))
                    }
                }
                if ("[object Array]" === Object.prototype.toString.call(t) || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements)
                    for (var a = 0, s = t.length; a < s; a++)
                        r(t[a], n, i);
                else
                    r(t, n, i)
            }
        }
        ,
        window.MarketGidCResponsiveBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Responsive = "MarketGidCResponsiveBlock826444",
        window.MarketGidCCountersBlock826444 = function(e) {
            this.afterLoadNewsHooks.push("countersLoad"),
            this.countersLoad = function() {
                if (826444 != e.id) {
                    var t = e.childWidgetsData[e.id];
                    t.hasNewsWidget ? t.newsWidgetIdPartner : null
                }
            }
            ,
            this.afterLoadNewsHooks.push("compositeComscoreCountersLoad"),
            this.compositeComscoreCountersLoad = function() {
                if (!this.comscoreCompositeCounter) {
                    this.comscoreCompositeCounter = !0,
                    this.context._comscore = this.context._comscore || [];
                    var e = "news" == this.loadedType ? "00" : "110";
                    this.context._comscore.push({
                        c1: "7",
                        c2: "15208452",
                        c3: e
                    }),
                    function() {
                        var e = window.MarketGidInfC826444.context.document.createElement("script")
                          , t = MarketGidInfC826444.context.document.getElementsByTagName("script")[0];
                        e.async = !0;
                        var n = ("http:" == MarketGidInfC826444.context.document.location.protocol ? "http://b" : "https://sb") + ".scorecardresearch.com/beacon.js";
                        e.src = n,
                        t.parentNode.insertBefore(e, t)
                    }()
                }
            }
        }
        ,
        window.MarketGidCCountersBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Counters = "MarketGidCCountersBlock826444",
        window.MarketGidCRejectBlock826444 = function(e) {
            e.isInsertedRejectStyles = !1,
            e.MarketGidReject = function() {
                var t = e.subnetDashboardDomains[e.getSubnetByMirror("marketgid")];
                e.fixGetElementsByClassNameHandler(e.root);
                for (var n = e.root.getElementsByClassName("mgline"), i = 0; i < n.length; i++)
                    !function(n) {
                        if (!(n.className.indexOf("dsp") >= 0)) {
                            e.fixGetElementsByClassNameHandler(n);
                            for (var i = n.getElementsByClassName("mcimg"), o = !1, r = 0; r < i.length; r++)
                                if ("DIV" == i[r].tagName) {
                                    o = i[r];
                                    break
                                }
                            if (o) {
                                e.fixGetElementsByClassNameHandler(o);
                                var a = o.getElementsByClassName("close-informer")
                                  , s = n.className.match(/teaser-([0-9]+)/);
                                if (null != s) {
                                    var c = n.className.match(/type-(w|e|i)/);
                                    if (null != c && "i" != c[1] && 0 == a.length) {
                                        var l = t;
                                        l += "/publisher/blocked";
                                        var d = e.context.document.createElement("a")
                                          , m = e.context.getComputedStyle(o);
                                        d.className = "close-informer",
                                        d.href = l + "/teaser/" + s[1] + "/widget/" + ("w" == c[1] ? "57166637/type/goods" : "0/type/news"),
                                        d.target = "_blank",
                                        d.rel = "nofollow",
                                        d.style.top = parseInt(m.borderTopWidth) + 3 + "px",
                                        d.style.right = parseInt(m.borderRightWidth) + 3 + "px",
                                        o.style.position = "relative",
                                        o.appendChild(d)
                                    }
                                }
                            }
                        }
                    }(n[i])
            }
            ,
            e.initRejectStyles = function() {
                if (!e.isInsertedRejectStyles) {
                    e.addStyle("reject", '        div.mcimg a.close-informer {            width: 14px;            height: 14px;            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");            display: block;            opacity: 0;            position: absolute;            right: 3px;            top: 3px;            z-index: 1;            cursor: pointer;        }        div.mgline:hover a.close-informer {            opacity: 0.7;            -moz-transition: all 0.3s ease-out;            -o-transition: all 0.3s ease-out;            -webkit-transition: all 0.3s ease-out;            -ms-transition: all 0.3s ease-out;            transition: all 0.3s ease-out;        }        div.mgline a.close-informer:hover {            opacity: 1;            -moz-transition: all 0.3s ease-out;            -o-transition: all 0.3s ease-out;            -webkit-transition: all 0.3s ease-out;            -ms-transition: all 0.3s ease-out;            transition: all 0.3s ease-out;        }        div.mcimg {            position: relative;            display: inline-block;        }        div.image-with-price {            position: relative;        }        .mgline .image-container {            width: auto;            margin: 0 auto;            position: relative;        }'),
                    e.isInsertedRejectStyles = !0
                }
            }
            ,
            e.beforeLoadNewsHooks.push("initRejectStyles")
        }
        ,
        window.MarketGidCRejectBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Reject = "MarketGidCRejectBlock826444",
        window.MarketGidCCriteoBlock826444 = function(e) {
            e.afterLoadNewsHooks.push("initCriteoHandlers"),
            e.initCriteoHandlers = function() {
                var t = "LoadCriteoAllPlaces" + e.id;
                "" != e.uniqId && (t += "_" + e.uniqId),
                e.context[t] = e.LoadCriteoAllPlaces
            }
            ,
            e.LoadCriteoAllPlaces = function(t) {
                e.criteoNurl = t.l;
                var n = e.context.document.createElement("script");
                e.criteoParams = t.pos,
                n.type = "text/javascript",
                n.async = "async",
                n.src = "https://static.criteo.net/js/ld/publishertag.js";
                var i = e.context.document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(n, i),
                e.context.Criteo = e.context.Criteo || {},
                e.context.Criteo.events = e.context.Criteo.events || [],
                e.context.Criteo.events.push((function() {
                    var n = {
                        placements: [{
                            slotid: e.root.id,
                            zoneid: t.z,
                            nativeCallback: function(t) {
                                e.ProcessCriteo(t)
                            }
                        }]
                    };
                    e.context.Criteo.Passback.RequestBids(n, 1500)
                }
                )),
                e.context.Criteo.events.push((function() {
                    e.context.Criteo.Passback.RenderAd({
                        adUnit: e.root.id,
                        passback: function(e) {}
                    })
                }
                ))
            }
            ,
            e.ProcessCriteo = function(t) {
                e.countLoadBlocks = 0,
                e.root.innerHTML = "",
                e.addStyle("criteo", e.styles),
                e.iteration = 1;
                var n = []
                  , i = e.json
                  , o = "";
                "advertiser"in t && "domain"in t.advertiser && (o = t.advertiser.domain);
                for (var r = t.products.length, a = 0; a < r; a++)
                    e.criteoPlacement = a,
                    void 0 !== i[a] && (i[e.criteoPlacement][0] = o,
                    i[e.criteoPlacement][1] = a + 1,
                    i[e.criteoPlacement][3] = t.products[a].title,
                    i[e.criteoPlacement][4] = t.products[a].description,
                    i[e.criteoPlacement][7] = t.products[a].price,
                    i[e.criteoPlacement][8] = "",
                    i[e.criteoPlacement][10].i = e.webProtocol + "//imggprx.mgid.com/i/resize?img=" + encodeURIComponent(t.products[a].image.url) + "&size=14",
                    i[e.criteoPlacement][10].l = e.criteoParams[a] + "&u=" + e.tox64String(t.products[a].click_url),
                    i[e.criteoPlacement][10].adc = [],
                    n.push(e.teaserHashes[i[a].id]));
                e.MarketGidLoadNews(i);
                for (a = 0; a < r; a++)
                    if (e.criteoPlacement = a,
                    null != i[a] && t.hasOwnProperty("privacy") && t.privacy.hasOwnProperty("optout_click_url") && t.privacy.hasOwnProperty("optout_image_url")) {
                        var s = e.root.getElementsByClassName("mgline")[e.criteoPlacement].getElementsByClassName("mcimg")[0]
                          , c = e.context.document.createElement("DIV");
                        c.style.position = "absolute",
                        c.style.zIndex = "100",
                        c.style.left = "90%",
                        c.style.top = "0";
                        var l = e.context.document.createElement("A");
                        l.setAttribute("href", t.privacy.optout_click_url),
                        l.setAttribute("target", "_blank");
                        var d = e.context.document.createElement("IMG");
                        if (d.setAttribute("src", t.privacy.optout_image_url),
                        l.appendChild(d),
                        c.appendChild(l),
                        s.appendChild(c),
                        t.hasOwnProperty("impression_pixels"))
                            for (var m in t.impression_pixels)
                                if (t.impression_pixels[m].hasOwnProperty("url")) {
                                    var p = e.context.document.createElement("IMG");
                                    p.src = t.impression_pixels[m].url,
                                    e.context.document.body.appendChild(p)
                                }
                    }
                var u = e.context.document.createElement("IMG");
                u.src = e.criteoNurl + "&ads=" + n.join(","),
                e.context.document.body.appendChild(u)
            }
        }
        ,
        window.MarketGidCCriteoBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Criteo = "MarketGidCCriteoBlock826444",
        window.MarketGidCSendDimensionsBlock826444 = function(e) {
            e.afterPreRenderNewsHooks.push("calcPreRenderingBlock"),
            e.blankImage = "data:image/gif;base64,R0lGODlhcgHIAPAAAAAAAAAAACH5BAEAAAAALAAAAAByAcgAAAL+hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8Z6jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYSpFAAAOw==",
            e.precalcRect = {},
            e.calcPreRenderingBlock = function() {
                setTimeout((function() {
                    e.getViewportHeight();
                    e.fixGetElementsByClassNameHandler(e.root);
                    var t = e.root.getBoundingClientRect();
                    e.root.getElementsByClassName("mgbox")[0] && (t = e.root.getElementsByClassName("mgbox")[0].getBoundingClientRect()),
                    e.precalcRect.width = parseInt(t.width ? t.width : t.right - t.left),
                    e.precalcRect.height = parseInt(t.height ? t.height : t.bottom - t.top),
                    e.precalcRect.top = t.top,
                    e.precalcRect.bottom = t.bottom,
                    e.requestParams.w = "w=" + e.precalcRect.width,
                    e.requestParams.h = "h=" + e.precalcRect.height;
                    var n = 0
                      , o = e.root.getElementsByClassName("mgline")
                      , r = "".split(",").map(Number) || [];
                    for (i = 0; i < o.length; i++) {
                        var a = i + 1
                          , s = o[i].getBoundingClientRect()
                          , c = o[i].getElementsByClassName("mcimg")[0].getBoundingClientRect();
                        if (e.preRenderSizes || (e.preRenderSizes = {}),
                        e.preRenderSizes[a - 1] = {
                            height: c.height,
                            width: c.width
                        },
                        -1 !== r.indexOf(a)) {
                            var l = parseInt(s.height ? s.height : s.bottom - s.top)
                              , d = parseInt(s.width ? s.width : s.right - s.left);
                            e.requestParams["p" + a + "_w"] = "p" + a + "_w=" + d,
                            e.requestParams["p" + a + "_h"] = "p" + a + "_h=" + l
                        }
                        void 0 !== m && m < s.top && 0 === n && (n = i);
                        var m = s.top
                    }
                    0 == n && (n = o.length),
                    e.requestParams.cols = "cols=" + n,
                    e.fakeMode = !1,
                    e.root = e.realRoot,
                    null !== e.context.document.getElementById("preRenderingBlock826444_" + e.uniqId) && e.root.removeChild(e.context.document.getElementById("preRenderingBlock826444_" + e.uniqId)),
                    e.root.style.overflow = "visible",
                    e.root.style.visibility = "visible",
                    e.loadedType = "",
                    e.currentSubnet = "",
                    e.countLoadBlocks = e.countLoadBlocksContainer,
                    e.template = "",
                    e.iteration = 1,
                    "function" == typeof e.widgetPreloadCallback && e.widgetPreloadCallback()
                }
                ), 50)
            }
            ,
            e.updatePrecalcRect = function(t) {
                e.loadedType = "goods",
                e.currentSubnet = "0",
                e.fakeMode = !0,
                e.realRoot = e.root,
                e.countLoadBlocksContainer = e.countLoadBlocks;
                var n = e.context.document.createElement("div");
                n.id = "preRenderingBlock826444_" + e.uniqId,
                n.style.visibility = "hidden";
                var i = e.context.document.createElement("div");
                i.id = e.root.id,
                n.appendChild(i),
                e.root.appendChild(n),
                e.root = i,
                e.root.style.overflow = "hidden";
                for (var o = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet", r = [], a = 1; a <= 4; a++)
                    r.push(["", a, "", o, o, "", "", "", "", "", {
                        i: e.blankImage
                    }]);
                e.MarketGidPrerenderNews(r),
                "function" == typeof t && (e.widgetPreloadCallback = t)
            }
        }
        ,
        window.MarketGidCSendDimensionsBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.SendDimensions = "MarketGidCSendDimensionsBlock826444",
        window.MarketGidCMonitorBlock826444 = function(e) {
            this.afterLoadNewsHooks.push("monitorInit"),
            this.shownBlocks = {},
            this.monitorTimeout = null,
            this.isFirstByType = {},
            this.isFirstByCid = {},
            this.monitorInit = function() {
                if ("function" != typeof e.VisData) {
                    var t = !0
                      , n = e.context.self;
                    try {
                        e.context.self !== e.context.top && e.context.top.location.href && (n = e.context.top)
                    } catch (e) {
                        t = !1
                    }
                    e.VisData = function() {
                        try {
                            if (!t)
                                return function(e) {
                                    return !e || {
                                        extTf: !1
                                    }
                                }
                                ;
                            var i, o, r = {
                                hidden: "visibilitychange",
                                webkitHidden: "webkitvisibilitychange",
                                mozHidden: "mozvisibilitychange",
                                msHidden: "msvisibilitychange"
                            };
                            for (i in r)
                                if (i in document) {
                                    o = r[i];
                                    break
                                }
                            var a, s, c, l, d, m = -1, p = -1, u = -1, f = 1, g = "function" == typeof document.hasFocus ? function() {
                                var e = n.document.hasFocus();
                                e != f && (a = (new Date).getTime()),
                                f = e
                            }
                            : function() {
                                f = 1
                            }
                            ;
                            setInterval(g, 100),
                            e.addEvent(n.document, o, (function() {
                                n.document[i] ? m = 0 : setTimeout((function() {
                                    m = 1
                                }
                                ), 100),
                                d = (new Date).getTime()
                            }
                            )),
                            e.addEvent(n.document, "mouseleave", (function() {
                                u = 0,
                                s = (new Date).getTime()
                            }
                            )),
                            e.addEvent(n.document, "mouseenter", (function() {
                                u = 1,
                                s = (new Date).getTime()
                            }
                            )),
                            e.addEvent(n.document, "touchmove", (function() {
                                u = 2,
                                s = (new Date).getTime()
                            }
                            ));
                            var h = 0;
                            e.addEvent(n.document, "keydown", (function() {
                                h = 1,
                                c = (new Date).getTime()
                            }
                            ));
                            var v = 0
                              , x = 0;
                            e.addEvent(n.document, "click", (function(e) {
                                x = 1,
                                v = (new Date).getTime();
                                for (var t = e.target; t.parentElement; ) {
                                    if ("A" === t.tagName) {
                                        x = 2;
                                        break
                                    }
                                    t = t.parentElement
                                }
                            }
                            )),
                            e.addEvent(n, "blur", (function() {
                                p = "IFRAME" == n.document.activeElement.tagName ? 2 : 0,
                                l = (new Date).getTime()
                            }
                            )),
                            e.addEvent(n, "focus", (function() {
                                p = 1,
                                l = (new Date).getTime()
                            }
                            ));
                            var k = 0
                              , w = null
                              , b = function() {
                                w = (new Date).getTime(),
                                k = 1
                            };
                            n.document.addEventListener ? (n.document.addEventListener("mousewheel", b, !1),
                            n.document.addEventListener("DOMMouseScroll", b, !1)) : n.document.attachEvent("onmousewheel", b);
                            var y = 0;
                            try {
                                var C = new Image;
                                C.__defineGetter__("id", (function() {
                                    y = 1
                                }
                                )),
                                console.debug(C)
                            } catch (e) {
                                y = -1
                            }
                            return function(e) {
                                g();
                                var t = f && (0 !== m || 0 !== p || -1 !== u || k);
                                if (e) {
                                    var n = {
                                        extVs: t,
                                        extTv: m,
                                        extWv: p,
                                        extMa: u,
                                        extHf: f,
                                        extCl: x,
                                        extKp: h,
                                        extMw: k,
                                        extDg: y
                                    }
                                      , i = (new Date).getTime();
                                    return v && (n.extClt = i - v),
                                    w && (n.extMwt = i - w),
                                    l && (n.extWvt = i - l),
                                    s && (n.extMat = i - s),
                                    d && (n.extTvt = i - d),
                                    a && (n.extHft = i - a),
                                    c && (n.extKpt = i - c),
                                    n
                                }
                                return t
                            }
                        } catch (e) {
                            return function(e) {
                                return !e || {}
                            }
                        }
                    }()
                }
                var i = /([A-Za-z0-9\-_\*]{64})/
                  , o = parseFloat(.5);
                if ((!o || o <= 0 || o > 1 || Number(o) != o) && (o = .9),
                "function" == typeof IntersectionObserver && 3 === e.servicerData.cv) {
                    var r = 0
                      , a = 0
                      , s = []
                      , c = null
                      , l = function() {
                        for (var t = 0, n = 0; n < s.length; n++)
                            if (s[n])
                                if (s[n].dataset.shown)
                                    t++;
                                else if (s[n].dataset.observeStart > 0) {
                                    var i = parseFloat(s[n].dataset.observeTime) + ((new Date).getTime() - s[n].dataset.observeStart);
                                    i > 1e3 && (e.intersectionObserver.unobserve(s[n]),
                                    e.intersectionObserver.observe(s[n]))
                                }
                        t < r && setTimeout(arguments.callee, 100)
                    };
                    if (!e.intersectionObserver) {
                        e.intersectionObserver = new IntersectionObserver((function(t) {
                            for (var n = {}, i = 0, r = 0; r < t.length; r++) {
                                var a = t[r];
                                if (a.target.dataset.i && !a.target.dataset.shown)
                                    if (a.target.width + a.target.height != 0) {
                                        if (a.intersectionRatio >= o)
                                            if (0 == a.target.dataset.observeStart)
                                                a.target.dataset.observeStart = (new Date).getTime();
                                            else {
                                                var s = (new Date).getTime() - a.target.dataset.observeStart;
                                                a.target.dataset.observeTime = parseFloat(a.target.dataset.observeTime) + s
                                            }
                                        else
                                            a.target.dataset.observeTime = 0,
                                            a.target.dataset.observeStart = 0;
                                        a.target.dataset.observeTime >= 1e3 && (a.target.dataset.shown = 1,
                                        e.intersectionObserver.unobserve(a.target),
                                        n[a.target.dataset.i] = e.getTeaserCappingData(a.target),
                                        i++)
                                    } else
                                        e.intersectionObserver.unobserve(a.target),
                                        function() {
                                            var t = a.target;
                                            setTimeout((function() {
                                                e.intersectionObserver.observe(t)
                                            }
                                            ), 100)
                                        }()
                            }
                            i && e.prepareCappingData(n, e.servicerData.cv)
                        }
                        ),{
                            threshold: [0, o, 1]
                        })
                    }
                    var d = []
                      , m = null
                      , p = function() {
                        c || (c = setTimeout(l, 100)),
                        m = null;
                        for (var t = d.pop(); t; t = d.pop())
                            e.intersectionObserver.observe(t)
                    }
                      , u = function(e) {
                        d.push(e),
                        s.push(e),
                        r++,
                        m && clearTimeout(m),
                        r < a ? m = setTimeout(p, 100) : p()
                    };
                    !function() {
                        var t = e.root.getElementsByClassName("mgline");
                        if (t.length)
                            for (var n = 0; n < t.length; n++)
                                if (!t[n].dataset.observing) {
                                    var o = i.exec(t[n].dataset.i);
                                    if (o && o[1]) {
                                        t[n].dataset.observeTime = 0,
                                        t[n].dataset.observeStart = 0,
                                        t[n].dataset.observing = "yes";
                                        var r = t[n].querySelectorAll("img.mcimg");
                                        r.length > 0 ? function(t) {
                                            e.addEvent(r[0], "load", (function() {
                                                u(t)
                                            }
                                            )),
                                            e.addEvent(r[0], "error", (function() {
                                                u(t)
                                            }
                                            ))
                                        }(t[n]) : u(t[n]),
                                        a++
                                    } else
                                        t[n].dataset.observing = "no"
                                }
                    }()
                } else
                    this.monitorTimeout || function() {
                        for (var t = {}, n = e.root.getElementsByClassName("mgline"), r = [], a = 0; a < n.length; a++) {
                            var s = i.exec(n[a].dataset.i);
                            if (s && s[1] && !e.shownBlocks[n[a].dataset.i])
                                if (n[a].dataset.observing)
                                    r.push(n[a]);
                                else {
                                    var c = n[a].querySelectorAll("img.mcimg");
                                    c.length > 0 ? function(t) {
                                        var n = new Image;
                                        e.addEvent(n, "load", (function() {
                                            t.dataset.observing = "yes"
                                        }
                                        )),
                                        e.addEvent(n, "error", (function() {
                                            t.dataset.observing = "yes"
                                        }
                                        )),
                                        n.src = c[0].src
                                    }(n[a]) : n[a].dataset.observing = "yes"
                                }
                        }
                        for (a = 0; a < r.length; a++) {
                            var l = r[a];
                            e.elementViewportIntersection(l) >= o && (t[l.dataset.i] = e.getTeaserCappingData(l))
                        }
                        e.prepareCappingData(t, "2"),
                        e.monitorTimeout = setTimeout(arguments.callee, 1e3)
                    }()
            }
            ,
            this.getTeaserImageDims = function(t) {
                if (t) {
                    var n = t.querySelectorAll("img.mcimg");
                    if (n.length > 0)
                        return e.utils.getRect(n[0], !1)
                }
                return {
                    width: 0,
                    height: 0
                }
            }
            ,
            this.getTeaserCappingData = function(t) {
                var n = e.utils.getRect(t, !0)
                  , i = e.getTeaserImageDims(t);
                return {
                    width: Math.round(i.width),
                    height: Math.round(i.height),
                    atf: n.top < e.utils.getViewportSize().height,
                    align: e.getTeaserAlign(n),
                    desc: e.isTeaserElementVisible(t, "mcdesc"),
                    price: e.isTeaserElementVisible(t, "mcprice"),
                    domain: e.isTeaserElementVisible(t, "mcdomain")
                }
            }
            ,
            this.prepareCappingData = function(t, n) {
                var i = []
                  , o = []
                  , r = []
                  , a = [];
                for (var s in t) {
                    var c = s;
                    if (!e.shownBlocks[c]) {
                        var l = t[s].width + "|" + t[s].height + "|" + ((t[s].desc ? 1 : 0) + (t[s].price ? 2 : 0) + (t[s].domain ? 4 : 0) + (t[s].atf ? 8 : 0) + ("right" == t[s].align ? 16 : 0) + ("left" == t[s].align ? 32 : 0)) + "|";
                        if (c && e.teaserData[c]) {
                            e.shownBlocks[c] = 1;
                            var d = e.teaserData[c].coopType;
                            e.teaserData[c].ch && e.teaserData[c].ccid && e.teaserData[c].cdomain && (a = (r = e.prepareMultiCappingData(r, c, l, d, n)).counter)[d][e.teaserData[c].cdomain] > 20 && (e.multiSendCappingData(r[d]),
                            r[d] = [],
                            a = []),
                            (o = (i = e.prepareSingleCappingData(i, c, l, d, n)).counter)[d] > 20 && (e.sendCappingData(i[d]),
                            i[d] = "",
                            o[d] = 0);
                            var m = e.teaserData[c].imp;
                            for (var p in m)
                                e.sendCustomCounter(m[p]);
                            "w" === d && e.sspDoubleClickHash.push(c);
                            for (s = 0; s < e.afterPrepareCappingDataHooks.length; s++)
                                e[e.afterPrepareCappingDataHooks[s]](c)
                        }
                    }
                }
                for (var d in o)
                    o[d] > 0 && e.sendCappingData(i[d]);
                for (var u = 0, f = Object.keys(a); u < f.length; u++) {
                    d = a[f[u]];
                    Object.keys(a[d]).length > 0 && e.multiSendCappingData(r[d])
                }
            }
            ,
            this.sensorsToJsFlags = function() {
                try {
                    var t = e.VisData(!0)
                      , n = 0;
                    if (t) {
                        if (!1 === t.extTf)
                            return 3;
                        1 == t.extVs && (n = 1),
                        t.extHf && (n += 2),
                        t.extWv < 0 ? n += 12 : t.extWv < 3 && (n += t.extWv << 2),
                        t.extTv < 0 ? n += 48 : t.extTv < 3 && (n += t.extTv << 4),
                        t.extMa < 0 ? n += 192 : t.extMa < 3 && (n += t.extMa << 6),
                        t.extCl > 0 && t.extCl < 3 && (n += t.extCl << 8),
                        1 == t.extMw && (n += 1024),
                        1 == t.extKp && (n += 2048),
                        0 != t.extDg && (n += 4096),
                        2 != t.extMa && 1 == t.extMw && t.extMwt < 1500 && (n += 8192),
                        Number(t.extHft) === t.extHft && t.extHft >= 0 && t.extHft < 1500 && (!t.extWvt || t.extWvt < 1500) && (!t.extTvt || t.extTvt < 1500) && (n += 16384),
                        n <<= 1
                    }
                } catch (e) {
                    n = 1
                }
                return n
            }
            ,
            this.prepareMultiCappingData = function(t, n, i, o, r) {
                var a = e.teaserData[n].cdomain
                  , s = e.teaserData[n].ch
                  , c = e.teaserData[n].ccid
                  , l = "pv=" + r;
                return -1 == l.indexOf("extjs") && (l += "&extjs=" + this.sensorsToJsFlags()),
                void 0 === t[o] && (t[o] = [],
                void 0 === t.counter && (t.counter = []),
                void 0 === t.counter[o] && (t.counter[o] = [])),
                void 0 === t[o][a] && (t[o][a] = [],
                t.counter[o][a] = 0),
                void 0 === t[o][a][c] && (t[o][a][c] = ""),
                l += "&v=" + i + s,
                ("0" == r || e.isFirstByType[o + c]) && e.isFirstByCid[o + c] || (l += "&f" + o + "=1",
                e.isFirstByType[o + c] = 1,
                e.isFirstByCid[o + c] = 1),
                t[o][a][c] += l,
                t.counter[o][a]++,
                t
            }
            ,
            this.prepareSingleCappingData = function(t, n, i, o, r) {
                return void 0 === t[o] && (t[o] = "pv=" + r,
                void 0 === t.counter && (t.counter = [])),
                void 0 === t.counter[o] && (t.counter[o] = 0),
                t[o] += "&v=" + i + n,
                "0" == r || e.isFirstByType[o] || (t[o] += "&f" + o + "=1",
                e.isFirstByType[o] = 1),
                -1 == t[o].indexOf("extjs") && (t[o] += "&extjs=" + this.sensorsToJsFlags()),
                t.counter[o]++,
                t
            }
            ,
            this.multiSendCappingData = function(t) {
                for (var n in t)
                    for (var i in t[n]) {
                        var o = t[n][i] + "&cid=" + i;
                        e.sendCappingData(o, n)
                    }
            }
            ,
            this.sendCappingData = function(t, n) {
                var i = document.createElement("IMG")
                  , o = t.search("&cid=")
                  , r = t.search("pv=0&") >= 0;
                if (t += "&imgdim=1",
                -1 != o)
                    var a = t.substr(o + 5).split("&")[0];
                r ? void 0 === a && (t += "&cid=" + e.id.toString()) : ((void 0 === e.context._mgwcapping || -1 == e.context._mgwcapping.indexOf(e.id.toString()) || void 0 !== a && -1 == e.context._mgwcapping.indexOf(a.toString())) && (t = "f=1&" + t),
                e.context._mgwcapping = e.context._mgwcapping || [],
                void 0 === a ? (t += "&cid=" + e.id.toString(),
                e.context._mgwcapping.push(e.id.toString())) : e.context._mgwcapping.push(a)),
                e.servicerData && (e.servicerData.h2 && (t += "&h2=" + e.servicerData.h2),
                e.servicerData.rid && (t += "&rid=" + e.servicerData.rid),
                e.servicerData.tt && (t += "&tt=" + e.servicerData.tt),
                e.servicerData.ts && (t += "&ts=" + e.servicerData.ts),
                e.servicerData.psid && (t += "&psid=" + e.servicerData.psid));
                var s = e.getMostTopWindow();
                void 0 === s._mgPageImp527614 ? (s._mgPageImp527614 = !0,
                t += "&pageImp=1") : t += "&pageImp=0";
                try {
                    if (e.context.localStorage) {
                        var c = e.context.localStorage.getItem("mgMuidn");
                        "string" == typeof c && c.length > 0 && (t += "&muid=" + c)
                    }
                } catch (e) {}
                var l = e.webProtocol + "//";
                l += void 0 !== n ? n : "c.mgid.com",
                t += "&" + e.getCbusterParameter(),
                t += "&tpl=" + e.templateId,
                i.src = l + "/c?" + t;
                for (var d = 0; d < e.afterSendCappingHooks.length; d++)
                    e[e.afterSendCappingHooks[d]]()
            }
            ,
            this.elementViewportIntersection = function(t) {
                var n = e.utils.getRect(t, !0);
                for (var i in n)
                    n[i] = Math.floor(n[i]);
                var o = e.utils.getViewportSize()
                  , r = e.utils.getScroll();
                o.top = r.top,
                o.bottom = r.top + o.height,
                o.left = r.left,
                o.right = r.left + o.width;
                var a = n.width * n.height;
                return a ? Math.max(0, Math.min(n.right, o.right) - Math.max(n.left, o.left)) * Math.max(0, Math.min(n.bottom, o.bottom) - Math.max(n.top, o.top)) / a : 0
            }
            ,
            this.getParentTeaserBlock = function(t) {
                for (var n = t; n != e.root && n != e.context; ) {
                    if (n.className.indexOf("mgline") >= 0)
                        return n;
                    n = n.parentNode
                }
                return null
            }
            ,
            this.isTeaserElementVisible = function(t, n) {
                e.fixGetElementsByClassNameHandler(t);
                var i = t.getElementsByClassName(n);
                if (i.length > 0) {
                    var o = i[0].getBoundingClientRect();
                    return o.right - o != 0 && o.bottom - o.top != 0
                }
                return !1
            }
            ,
            this.getTeaserAlign = function(t) {
                var n = e.context.document.body.scrollWidth;
                return t.right < .3 * n ? "left" : t.left >= .7 * n ? "right" : "center"
            }
            ,
            this.sendCustomCounter = function(e) {
                document.createElement("img").src = e
            }
        }
        ,
        window.MarketGidCMonitorBlock826444.call(window.MarketGidInfC826444, window.MarketGidInfC826444),
        window.MarketGidInfC826444.funcBlocks.Monitor = "MarketGidCMonitorBlock826444",
        window.MarketGidInfC826444.init(),
        void 0 === window.MarketGidInfC826444.context.MarketGidC826444DisableStart && window.MarketGidInfC826444.start()
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = null;
        e.log = function(n) {
            null === t && "1" == e.getQueryParameterByName("mgwdebug") && (t = !0),
            t && console.log("WIDGET_".concat(826444, "_").concat(e.uniqId), n)
        }
    }
}
, function(e, t) {
    window.MarketGidCColorBlock826444 = function(e) {
        e.colorAverage = function(e) {
            var t = {
                r: 0,
                g: 0,
                b: 0
            };
            return fetch(e, {
                mode: "cors"
            }).then((function(e) {
                return e.arrayBuffer()
            }
            )).then((function(e) {
                e = "data:image/png;base64," + (e = btoa(new Uint8Array(e).reduce((function(e, t) {
                    return e + String.fromCharCode(t)
                }
                ), "")));
                return new Promise((function(n) {
                    var i = new Image;
                    i.src = e,
                    i.onload = function() {
                        var e = document.createElement("canvas");
                        e.width = 32,
                        e.height = 32;
                        var o = e.getContext("2d");
                        o.drawImage(i, 0, 0, 32, 32);
                        for (var r = o.getImageData(0, 0, 32, 32), a = -4, s = 0; (a += 4) < r.data.length; )
                            ++s,
                            t.r += r.data[a],
                            t.g += r.data[a + 1],
                            t.b += r.data[a + 2];
                        t.r = Math.floor(t.r / s),
                        t.g = Math.floor(t.g / s),
                        t.b = Math.floor(t.b / s),
                        n(t)
                    }
                }
                ))
            }
            ))
        }
    }
}
, function(e, t) {
    window.MarketGidCAmpRenderBlock826444 = function(e) {
        e.ampResized = [],
        e.ampRenderStart = function() {
            e.context.context.renderStart({
                width: e.precalcRect.width,
                height: e.precalcRect.height
            })
        }
        ,
        e.ampResize = function() {
            setTimeout((function() {
                var t = e.root.getBoundingClientRect();
                e.context.context.requestResize(t.width, t.height)
            }
            ), 100),
            e.context.context.onResizeDenied((function(t, n) {
                e.ampResizeDenied = !0
            }
            )),
            e.context.context.onResizeSuccess((function(t, n) {
                e.ampResizeDenied = !1,
                e.updateSizeStatement(n, t)
            }
            )),
            void 0 === e.ampResizeInterval && (e.ampResizeInterval = setInterval((function() {
                var t = e.root.getBoundingClientRect();
                void 0 !== e.ampResizeDenied && e.ampResizeDenied ? e.context.context.requestResize(t.width, t.height) : Math.floor(t.width) === e.ampResized.width && Math.floor(t.height) === e.ampResized.height || e.context.context.requestResize(t.width, t.height)
            }
            ), 100))
        }
        ,
        e.isAmp = function() {
            return void 0 !== e.context.context && void 0 !== e.context.context.data && void 0 !== e.context.context.data.widget || void 0 !== e.context.boundingClientRect826444 && void 0 !== e.context.intersectionRect826444
        }
        ,
        e.updateSizeStatement = function(t, n) {
            e.ampResized.width = t,
            e.ampResized.height = n
        }
        ,
        e.isAmp() && (e.afterInitHooks.push("ampRenderStart"),
        e.afterLoadNewsHooks.push("ampResize"))
    }
}
, function(e, t) {
    window.MarketGidCMgqBlock826444 = function(e) {
        this.isLongCheck = !1,
        this.afterInitHooks.push("mgqInit"),
        this.mgqWorker = function() {
            for (var t = e.context._mgq.length, n = e.context._mgq.slice(0), i = 0, o = 0; o < t; o++) {
                var r = n[o];
                if ("function" == typeof e.context[r[0]]) {
                    try {
                        e.context[r[0]].apply(e.context, r.slice(1))
                    } catch (e) {}
                    e.context._mgq.splice(o - i, 1),
                    i++
                }
            }
            e.context._mgqi || (e.context._mgqi = e.context.setInterval((function() {
                e.mgqWorker()
            }
            ), 5)),
            e.isLongCheck || (new Date).getTime() - e.context._mgqt > 1e4 && (e.isLongCheck = !0,
            e.context.clearInterval(e.context._mgqi),
            e.context._mgqi = e.context.setInterval((function() {
                e.mgqWorker()
            }
            ), 100))
        }
        ,
        this.mgqInit = function() {
            e.context._mgq = e.context._mgq || [],
            void 0 === e.context._mgqp && (e.context._mgqp = e.mgqWorker,
            e.context._mgqt = (new Date).getTime(),
            e.mgqWorker())
        }
    }
}
, function(e, t, n) {
    window.MarketGidCCookieBlock826444 = function(e) {
        this.storageName = "MarketGidStorage" + (this.context.MarketGidPageOffset ? this.context.MarketGidPageOffset : ""),
        this.getCookieValue = function() {
            var e = this.context.document.cookie.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)"))
              , t = {};
            if (e)
                try {
                    t = JSON.parse(decodeURIComponent(e[1]))
                } catch (e) {}
            return t
        }
        ,
        this.getCookie = function() {
            var e = this.getCookieValue();
            void 0 !== e.C826444 ? this.cookieStorage = e.C826444 : this.cookieStorage = {},
            void 0 !== e[0] ? this.sharedCookieStorage = e[0] : this.sharedCookieStorage = {}
        }
        ,
        this.setCookie = function() {
            var e = this.getCookieValue();
            e.C826444 = this.cookieStorage,
            e[0] = this.sharedCookieStorage;
            var t = encodeURIComponent(JSON.stringify(e));
            this.context.document.cookie = this.storageName + "=" + t + ";path=/"
        }
    }
}
, function(e, t) {
    window.MarketGidCObserverBlock826444 = function(e) {
        e.observerWidgetHooks = [],
        e.observerTeasersHooks = [],
        e.context.IntersectionObserver && (e.afterLoadNewsHooks.push("initWidgetObserver"),
        e.initWidgetObserver = function() {
            e.widgetObserver = new IntersectionObserver((function(t) {
                t.forEach((function(t) {
                    var n = t.isIntersecting ? "shown" : "hidden";
                    if (t.target == e.root) {
                        e.log("Observer. Widget ".concat(n, ". Ratio: ").concat(t.intersectionRatio));
                        for (var i = 0; i < e.observerWidgetHooks.length; i++)
                            e[e.observerWidgetHooks[i]](t.isIntersecting, t.intersectionRatio)
                    } else
                        for (var o = 0; o < e.observerTeasersHooks.length; o++) {
                            var r = 1
                              , a = 1;
                            try {
                                r = e.teaserData[t.target.dataset.i].iteration,
                                a = e.teaserData[t.target.dataset.i].page
                            } catch (e) {}
                            e.log("Observer. Teaser[".concat(a, ", ").concat(r, "] ").concat(n, ". Ratio: ").concat(t.intersectionRatio)),
                            e[e.observerTeasersHooks[o]](t.target, t.isIntersecting, t.intersectionRatio, r, a)
                        }
                }
                ))
            }
            ),{
                threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
            }),
            e.widgetObserver.observe(e.root);
            var t = !0
              , n = !1
              , i = void 0;
            try {
                for (var o, r = e.root.getElementsByClassName("mgline")[Symbol.iterator](); !(t = (o = r.next()).done); t = !0) {
                    var a = o.value;
                    e.widgetObserver.observe(a)
                }
            } catch (e) {
                n = !0,
                i = e
            } finally {
                try {
                    t || null == r.return || r.return()
                } finally {
                    if (n)
                        throw i
                }
            }
        }
        )
    }
}
, function(e, t, n) {
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    window.MarketGidCAntifraudBlock826444 = function(e) {
        e.afterLoadNewsHooks.push("hangAFListener"),
        e.afterInitHooks.push("initAntiFraud"),
        e.timerFromScroll = null,
        e.miliSecondsFromScroll = null,
        e.allowReturnParams = !1,
        e.afCookieData = "",
        e.afCookieRealData = "",
        e.afPrimaryReferrer = "",
        e.afReferrer = "",
        e.afHref = "",
        e.afDeepSession = "",
        e.afOrigHref = "",
        e.afOrigHrefLink = "",
        e.afMouseMoves = "",
        e.afMgLoaded = 0,
        e.afImgLoaded = 0,
        e.afSnapshotProperties = "",
        e.afCoords = "",
        e.afDeviceOrientation = "",
        e.afCoordsClickAndLinkOfPage = "",
        e.afBrowserFlag = "",
        e.afPlugins = "",
        e.afCountMimeTypes = 0,
        e.afFocus = 1,
        e.afBrowserHookMask = 0,
        e.afCharging = -1,
        e.afLevel = -1,
        e.afImageMimeTypes = 0,
        e.topIFrame = void 0,
        e.afGeoPosition = "0|0",
        e.initAntiFraud = function() {
            void 0 === e.sharedCookieStorage.svspr ? (e.afPrimaryReferrer = e.trimString(e.context.document.referrer, 500),
            e.sharedCookieStorage.svspr = e.afPrimaryReferrer,
            e.setCookie()) : e.afPrimaryReferrer = e.sharedCookieStorage.svspr,
            e.afReferrer = e.context.document.referrer,
            e.afHref = e.context.document.location.href;
            var t = [];
            if (t = e.packReferrers(70, 50, 50),
            e.afPrimaryReferrer = e.x64String(t[0]),
            e.afReferrer = e.x64String(t[1]),
            e.afHref = e.x64String(t[2]),
            void 0 !== e.sharedCookieStorage.svsds) {
                e.afDeepSession = e.sharedCookieStorage.svsds;
                void 0 === e.context.MarketGidCSvsdsFlag && (e.afDeepSession++,
                e.context.MarketGidCSvsdsFlag = !0)
            } else
                e.afDeepSession = 1;
            e.sharedCookieStorage.svsds = e.afDeepSession,
            e.setCookie();
            var n = new Date;
            e.afCookieData = n.getTime() + "" + e.id + Math.floor(100 * Math.random()) + 2 * Math.floor(4 * Math.random()),
            e.afCookieData += 1,
            e.afCookieData = e.compressNumber(e.trimString(e.afCookieData, 16, 1)),
            e.afMgLoaded = e.compressNumber(n.getTime()),
            void 0 === e.sharedCookieStorage.TejndEEDj && (e.sharedCookieStorage.TejndEEDj = e.afCookieData,
            e.setCookie()),
            e.afSnapshotProperties = e.getSnapshotProperties(),
            e.afBrowserFlag = e.getBrowserFlag(),
            e.afBrowserHookMask = e.getBrowserHookMask(),
            e.afPlugins = e.x64String(e.getPlugins()),
            e.afImageMimeTypes = e.getSupportedImageMimeTypes(),
            e.afCountMimeTypes = e.getCountMimeTypes(),
            e.generateBatteryInfo(),
            e.generateCurrentGeoPosition()
        }
        ,
        e.x64String = function(e) {
            e = e.toString(),
            e = unescape(encodeURIComponent(e));
            for (var t, n, i, o, r, a, s, c = "ABCDEFGHIJKLMNOPQR$TUVWXYZabcde*ghijklmnopqrstuvwxyz0123456789+/=", l = "", d = 0; d < e.length; )
                64,
                o = (t = e.charCodeAt(d++)) >> 2,
                r = (3 & t) << 4 | (n = e.charCodeAt(d++)) >> 4,
                i = e.charCodeAt(d++),
                a = isNaN(n) ? 64 : (15 & n) << 2 | i >> 6,
                s = isNaN(i) ? 64 : 63 & i,
                l += c.charAt(o) + c.charAt(r) + c.charAt(a) + c.charAt(s);
            return l
        }
        ,
        e.toHexString = function(e) {
            return e ? Math.round(e).toString(16) : ""
        }
        ,
        e.trimString = function(e, t, n) {
            var i = e.length;
            if (i <= t)
                return e;
            var o = n ? i - t : 0;
            return e.substr(o, t)
        }
        ,
        e.getCoordsElementOfPage = function(e) {
            var t = 0
              , n = 0;
            do {
                t += e.offsetLeft,
                n += e.offsetTop
            } while (e = e.offsetParent);return {
                x: t,
                y: n
            }
        }
        ,
        e.getCoordsClickOfPage = function(t) {
            var n = 0
              , i = 0;
            return t || (t = e.context.event),
            t.pageX || t.pageY ? (n = t.pageX,
            i = t.pageY) : t.touches && t.touches[0] ? (n = t.touches[0].pageX,
            i = t.touches[0].pageY) : (t.clientX || t.clientY) && (n = t.clientX + (e.context.document.documentElement.scrollLeft || e.context.document.body.scrollLeft) - e.context.document.documentElement.clientLeft,
            i = t.clientY + (e.context.document.documentElement.scrollTop || e.context.document.body.scrollTop) - e.context.document.documentElement.clientTop),
            {
                x: n,
                y: i
            }
        }
        ,
        e.getCoordsClickOfWindow = function(e) {
            var t = 0
              , n = 0;
            return e.clientX || e.clientY ? (t = e.clientX,
            n = e.clientY) : e.touches && e.touches[0] && (t = e.touches[0].clientX,
            n = e.touches[0].clientY),
            {
                x: t,
                y: n
            }
        }
        ,
        e.getMaxTouchPoints = function() {
            return void 0 !== e.context.navigator.maxTouchPoints ? e.context.navigator.maxTouchPoints : 99
        }
        ,
        e.setDeviceOrientation = function() {
            if (e.context.DeviceOrientationEvent) {
                var t = !0
                  , n = 0;
                e.addEvent(e.context, "deviceorientation", (function(i) {
                    var o = Math.round(i.gamma)
                      , r = Math.round(i.beta)
                      , a = Math.round(i.alpha);
                    t && (n++,
                    t = !1,
                    setTimeout((function() {
                        t = !0
                    }
                    ), 1e3)),
                    e.afDeviceOrientation = parseInt(o) + "|" + parseInt(r) + "|" + parseInt(a) + "|" + parseInt(n)
                }
                ))
            } else
                e.afDeviceOrientation = "0|0|0|0"
        }
        ,
        e.getBrowserFlag = function() {
            var t = 0;
            return (e.context.opera || void 0 !== e.context.opr) && (t += 1),
            (e.context.opera && e.context.opera.buildNumber || void 0 !== e.context.opr) && (t += 2),
            (e.context.document.all || e.context.MSStream) && (t += 4),
            e.context.btoa && !e.context.navigator.msPointerEnabled && void 0 === e.context.clearImmediate || (t += 8),
            e.context.chrome && (t += 16),
            void 0 !== e.context.mozInnerScreenX && (t += 32),
            e.context.external || (t += 64),
            t
        }
        ,
        e.getBrowserHookMask = function() {
            var t = 0;
            return (e.context.opera || void 0 !== e.context.opr) && (t += 1),
            (e.context.opera && e.context.opera.buildNumber || void 0 !== e.context.opr) && (t += 2),
            (e.context.document.all || e.context.MSStream) && (t += 4),
            e.context.btoa && !e.context.navigator.msPointerEnabled && void 0 === e.context.clearImmediate || (t += 8),
            e.context.chrome && (t += 16),
            void 0 !== e.context.mozInnerScreenX && (t += 32),
            e.context.external || (t += 64),
            t
        }
        ,
        e.isJavaEnabled = function() {
            return e.context.navigator.javaEnabled() ? 1 : 0
        }
        ,
        e.isFlashEnabled = function() {
            var t = 0;
            if (void 0 !== e.context.navigator.plugins && "object" == i(e.context.navigator.plugins["Shockwave Flash"]))
                t = 1;
            else if (void 0 !== e.context.ActiveXObject)
                try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (t = 1)
                } catch (e) {}
            return t
        }
        ,
        e.isCookieEnabled = function() {
            return e.context.navigator.cookieEnabled ? 1 : 0
        }
        ,
        e.isSessionStorageEnabled = function() {
            if (e.context.sessionStorage)
                try {
                    var t = null;
                    e.context.sessionStorage.setItem("svs", 1),
                    t = e.context.sessionStorage.getItem("svs")
                } catch (e) {}
            return t ? 1 : 0
        }
        ,
        e.isLocalStorageEnabled = function() {
            if (e.context.localStorage)
                try {
                    var t = null;
                    e.context.localStorage.setItem("svs", 1),
                    t = e.context.localStorage.getItem("svs")
                } catch (e) {}
            return t ? 1 : 0
        }
        ,
        e.groupBitParams = function() {
            var t = 0;
            return e.isJavaEnabled() && (t += 1),
            e.isFlashEnabled() && (t += 2),
            e.isCookieEnabled() && (t += 4),
            e.isLocalStorageEnabled() && (t += 8),
            e.isSessionStorageEnabled() && (t += 16),
            e.isTouchStart() && (t += 32),
            t
        }
        ,
        e.isTouchStart = function() {
            return void 0 !== e.context.ontouchstart
        }
        ,
        e.dec2chr = function(e) {
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcde.ghijklmnopqrstuv0123456789wxyz-_".substr(e, 1)
        }
        ,
        e.oct2chr = function(e) {
            return {
                "00": "A",
                "01": "B",
                "02": "C",
                "03": "D",
                "04": "E",
                "05": "F",
                "06": "G",
                "07": "H",
                10: "I",
                11: "J",
                12: "K",
                13: "L",
                14: "M",
                15: "N",
                16: "O",
                17: "P",
                20: "Q",
                21: "R",
                22: "S",
                23: "T",
                24: "U",
                25: "V",
                26: "W",
                27: "X",
                30: "Y",
                31: "Z",
                32: "a",
                33: "b",
                34: "c",
                35: "d",
                36: "e",
                37: ".",
                40: "g",
                41: "h",
                42: "i",
                43: "j",
                44: "k",
                45: "l",
                46: "m",
                47: "n",
                50: "o",
                51: "p",
                52: "q",
                53: "r",
                54: "s",
                55: "t",
                56: "u",
                57: "v",
                60: "0",
                61: "1",
                62: "2",
                63: "3",
                64: "4",
                65: "5",
                66: "6",
                67: "7",
                70: "8",
                71: "9",
                72: "w",
                73: "x",
                74: "y",
                75: "z",
                76: "-",
                77: "_",
                0: "!",
                1: "*",
                2: ";",
                3: ":",
                4: "=",
                5: "+",
                6: "$",
                7: "~"
            }[e]
        }
        ,
        e.packReferrers = function(t, n, i) {
            for (var o = [e.afPrimaryReferrer, e.afReferrer, e.afHref], r = [t, n, i], a = 0, s = 0, c = 0; c < r.length; c++)
                a += r[c],
                s += o[c].length;
            if (s <= a)
                return o;
            var l = [0, 0, 0]
              , d = [];
            for (c = 0; c < o.length; c++) {
                var m = -1;
                o[c].length >= 8 && (m = o[c].indexOf("/", 8)),
                -1 == m ? (d[c] = o[c],
                o[c] = "") : (d[c] = o[c].substr(0, m),
                o[c] = o[c].substr(m)),
                r[c] -= d[c].length
            }
            var p = d.slice()
              , u = [];
            for (p[0] == p[1] ? u[0] = "++" : p[0] == p[2] && (u[0] = "::"),
            p[1] == p[2] && (u[1] = ";;"); ; ) {
                var f = 0;
                for (c = 0; c < o.length; c++)
                    if (l[c] || o[c].length)
                        l[c] || (f = 1,
                        d[c] += o[c][0],
                        1 != o[c].length ? o[c] = o[c].substr(1) : o[c] = "",
                        r[c]--,
                        r[c] || (l[c] = 1));
                    else {
                        l[c] = 1;
                        for (var g = 0; g < l.length; g++)
                            if (!l[g]) {
                                r[g] += r[c],
                                r[c] = 0;
                                break
                            }
                    }
                if (!f)
                    for (c = 0; c < o.length; c++)
                        if (o[c].length) {
                            for (g = 0; g < r.length; g++)
                                if (r[g]) {
                                    l[c] = 0,
                                    r[c] = r[g],
                                    r[g] = 0,
                                    f = 1;
                                    break
                                }
                            if (f)
                                break
                        }
                if (!f)
                    break
            }
            for (var c in u)
                d[c] = d[c].split(p[c]).join(u[c]);
            return d
        }
        ,
        e.compressNumber = function(t) {
            if (null == t || isNaN(t))
                return "";
            t = Math.abs(t);
            for (var n = parseInt(t, 10).toString(8), i = Math.ceil(n.length / 2), o = "", r = 0; r < i; r++) {
                var a = n.substr(2 * r, 2);
                o += e.oct2chr(a)
            }
            return o
        }
        ,
        e.getSnapshotProperties = function() {
            var t = '{"props":{"3":"window.close","13":"window.navigator.taintEnabled","16":"window.EventTarget.toString","18":"window.navigator.appName","20":"window.ApplicationCacheErrorEvent","22":"window.clearImmediate","23":"window.CryptoKey","25":"window.external.AddSearchProvider","32":"window.chrome.search","33":"window.clientInformation.vendor","40":"window.TouchEvent","43":"window.DeviceMotionEvent","46":"window.navigator.webkitGetGamepads","49":"window.Notification","56":"window.BeforeLoadEvent","57":"window.Entity","72":"window.AnalyserNode","74":"window.ArrayBufferView","76":"window.HTMLBaseFontElement","86":"window.self.SharedWorker","87":"window.Touch","91":"window.DOMException.ABORT_ERR","92":"window.Set","98":"window.document.createTouch","138":"window.NaN","139":"window.document.prepend","163":"window.SiteBoundCredential","165":"window.CanvasCaptureMediaStreamTrack"},"rules":{"contains":{"3":["({command:\\"window.close.self\\"})"],"18":["MicrosoftInternetExplorer"],"33":["GoogleInc."]},"not_empty":[13,16,18,20,22,23,25,32,40,43,46,49,56,57,76,86,87,91,92,98,138,139,163,165],"undefined":[25,46,72,74,87]}}'
              , n = "";
            for (var i in t.props) {
                i = parseInt(i, 10);
                var o = window
                  , r = ""
                  , a = t.props[i].split(".")
                  , s = !0
                  , c = !1
                  , l = void 0;
                try {
                    for (var d, m = a[Symbol.iterator](); !(s = (d = m.next()).done); s = !0) {
                        var p = d.value;
                        if (!(p in o)) {
                            o = "undefined";
                            break
                        }
                        try {
                            o = o[p]
                        } catch (e) {
                            o = "undefined"
                        }
                    }
                } catch (e) {
                    c = !0,
                    l = e
                } finally {
                    try {
                        s || null == m.return || m.return()
                    } finally {
                        if (c)
                            throw l
                    }
                }
                if (r = (o + "").replace(/\s/g, ""),
                t.rules.contains && i in t.rules.contains)
                    for (var u in t.rules.contains[i])
                        n += -1 != r.indexOf(t.rules.contains[i][u]) ? "1" : "0";
                t.rules.empty && -1 != t.rules.empty.indexOf(i) && (n += "" == r ? "1" : "0"),
                t.rules.not_empty && -1 != t.rules.not_empty.indexOf(i) && (n += "undefined" != r && "" != r ? "1" : "0"),
                t.rules[void 0] && -1 != t.rules[void 0].indexOf(i) && (n += "undefined" == r ? "1" : "0")
            }
            var f = Math.ceil(n.length / 6)
              , g = "";
            for (i = 0; i < f; i++) {
                var h = n.substr(6 * i, 6)
                  , v = parseInt(h, 2);
                g += e.dec2chr(v)
            }
            return g
        }
        ,
        e.isTransparent = function(t) {
            for (; t.firstChild && 1 == t.firstChild.nodeType; )
                t = t.firstChild;
            for (; t.parentNode; ) {
                if (e.context.getComputedStyle(t).getPropertyValue("opacity") <= .2)
                    return 1;
                if (t == e.context.document.body)
                    break;
                t = t.parentNode
            }
            return 0
        }
        ,
        e.getCountMimeTypes = function() {
            var t = 0;
            return void 0 !== e.context.navigator.mimeTypes && (t = e.context.navigator.mimeTypes.length),
            t
        }
        ,
        e.getPlugins = function() {
            var t = "";
            if (void 0 !== e.context.navigator.plugins) {
                for (var n = e.context.navigator.plugins, i = [], o = 0; o < n.length; o++)
                    i.push(n[o].name);
                t = e.trimString(i.join("|").replace(/\s/g, ""), 300)
            }
            return t
        }
        ,
        e.getScreenX = function() {
            var t = 0;
            return void 0 !== e.context.screenX && (t = Math.abs(e.context.screenX)),
            t
        }
        ,
        e.getScreenY = function() {
            var t = 0;
            return void 0 !== e.context.screenY && (t = Math.abs(e.context.screenY)),
            t
        }
        ,
        e.setFocus = function() {
            e.afFocus = 1
        }
        ,
        e.unsetFocus = function() {
            e.afFocus = 0
        }
        ,
        e.isSupportHtml5 = function() {
            var t = e.context.document.createElement("canvas");
            return t.getContext && t.getContext("2d") ? 1 : 0
        }
        ,
        e.isOnLine = function() {
            var t = 1;
            return void 0 !== e.context.navigator.onLine && (t = e.context.navigator.onLine ? 1 : 0),
            t
        }
        ,
        e.generateBatteryInfo = function() {
            e.context.navigator.getBattery && e.context.navigator.getBattery().then((function(t) {
                e.afCharging = +t.charging,
                e.afLevel = 100 * t.level
            }
            ))
        }
        ,
        e.generateCurrentGeoPosition = function() {
            try {
                e.context.navigator.permissions.query({
                    name: "geolocation"
                }).then((function(t) {
                    "granted" == t.state && navigator.geolocation.getCurrentPosition((function(t) {
                        e.afGeoPosition = t.coords.latitude + "|" + t.coords.longitude
                    }
                    ))
                }
                ))
            } catch (e) {}
        }
        ,
        e.getSupportedImageMimeTypes = function() {
            var e = 0;
            try {
                var t = document.createElement("canvas");
                if (t.getContext && t.getContext("2d")) {
                    var n = {
                        1: "image/webp",
                        2: "image/jpeg",
                        4: "image/jxr",
                        8: "image/jp2",
                        16: "image/gif"
                    };
                    for (var i in n)
                        0 == t.toDataURL(n[i]).indexOf("data:" + n[i]) && (e |= i)
                }
            } catch (e) {}
            return e
        }
        ,
        e.setCoords = function() {
            var t = e.root.getBoundingClientRect();
            e.afCoords = parseInt(t.height) + "|" + parseInt(t.width) + "|" + parseInt(t.x) + "|" + parseInt(t.y)
        }
        ,
        e.setCoordsClickAndLinkOfPage = function(t, n) {
            var i = e.getCoordsClickOfPage(t)
              , o = e.getCoordsElementOfPage(n);
            e.afCoordsClickAndLinkOfPage = parseInt(i.x) + "|" + parseInt(i.y) + "|" + parseInt(o.x) + "|" + parseInt(o.y)
        }
        ,
        e.getRectOfElement = function(t) {
            try {
                var n = t.getBoundingClientRect()
            } catch (e) {
                n = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 0,
                    width: 0
                }
            }
            var i = {
                top: n.top,
                bottom: n.bottom,
                left: n.left,
                right: n.right,
                height: n.height ? n.height : n.bottom - n.top,
                width: n.width ? n.width : n.right - n.left
            };
            if (e.context.self !== e.context.top) {
                var o = e.getFrameElement();
                if (o) {
                    var r = o.getBoundingClientRect();
                    i.top += r.top,
                    i.bottom += r.top,
                    i.left += r.left,
                    i.right += r.left
                }
            }
            return i
        }
        ,
        e.getFrameElement = function() {
            if (void 0 === e.topIFrame)
                try {
                    for (var t = e.context, n = t.frameElement; t.frameElement; t = t.parent)
                        n = t.frameElement;
                    e.topIFrame = n
                } catch (t) {
                    e.topIFrame = null
                }
            return e.topIFrame
        }
        ,
        e.getAntifraudParams = function(t, n) {
            if (0 != e.allowReturnParams) {
                n = n || e.context.document.createElement("A"),
                t = t || e.context.document.createEvent("MouseEvent");
                var i = new Date
                  , o = e.getCoordsClickOfWindow(t)
                  , r = e.getRectOfElement(n)
                  , a = e.context.document
                  , s = e.isTransparent(n);
                e.setCoords(),
                e.setCoordsClickAndLinkOfPage(t, n);
                for (var c = "", l = 1; l <= 48 * Math.ceil((e.afBrowserFlag + 1) / 68); l++)
                    if (l % 26 != 0 && (l % 26 != 6 || (l % 26 + 5) % 11 != 0)) {
                        c += 1 == l ? String.fromCharCode(98 + l % 26) : String.fromCharCode(102);
                        var d = "";
                        if (l > 48)
                            break;
                        switch (l) {
                        case 1:
                            d = e.afCookieData;
                            break;
                        case 2:
                            d = e.compressNumber(r.bottom);
                            break;
                        case 3:
                            d = e.afMgLoaded;
                            break;
                        case 4:
                            d = e.compressNumber(i.getTime());
                            break;
                        case 5:
                            d = e.compressNumber(a.body.clientHeight);
                            break;
                        case 7:
                            d = e.compressNumber(o.x);
                            break;
                        case 8:
                            d = e.compressNumber(o.y);
                            break;
                        case 9:
                            d = e.compressNumber(r.left);
                            break;
                        case 10:
                            d = e.compressNumber(e.miliSecondsFromScroll);
                            break;
                        case 11:
                            d = e.compressNumber(r.top);
                            break;
                        case 12:
                            d = e.compressNumber(a.body.clientHeight - o.y);
                            break;
                        case 13:
                            d = e.compressNumber(r.width);
                            break;
                        case 14:
                            d = e.compressNumber(r.height);
                            break;
                        case 15:
                            d = e.afSnapshotProperties;
                            break;
                        case 16:
                            d = e.compressNumber(t.clientY);
                            break;
                        case 17:
                            d = e.compressNumber(e.afBrowserFlag);
                            break;
                        case 18:
                            d = e.compressNumber(n["data-rel"]);
                            break;
                        case 19:
                            d = e.afHref;
                            break;
                        case 20:
                            d = e.afReferrer;
                            break;
                        case 21:
                            d = e.afPrimaryReferrer;
                            break;
                        case 22:
                            d = e.compressNumber(e.afDeepSession);
                            break;
                        case 23:
                            d = e.x64String(e.afCoordsClickAndLinkOfPage);
                            break;
                        case 24:
                            d = e.x64String(e.afDeviceOrientation);
                            break;
                        case 25:
                            d = e.x64String(e.afGeoPosition);
                            break;
                        case 27:
                            d = e.compressNumber(e.iframePlacementType);
                            break;
                        case 28:
                            d = e.dec2chr(e.groupBitParams());
                            break;
                        case 29:
                            d = e.x64String(e.afCoords);
                            break;
                        case 30:
                            d = e.compressNumber(e.context.screen.width);
                            break;
                        case 31:
                            d = e.compressNumber(e.context.screen.height);
                            break;
                        case 33:
                            d = e.compressNumber(e.afImgLoaded);
                            break;
                        case 34:
                            d = e.compressNumber(s);
                            break;
                        case 35:
                            d = e.x64String(e.context.navigator.userAgent);
                            break;
                        case 36:
                            d = e.afPlugins;
                            break;
                        case 37:
                            d = e.x64String(parseInt(e.afCountMimeTypes) + "|" + parseInt(e.afImageMimeTypes));
                            break;
                        case 38:
                            d = e.x64String(e.context.navigator.platform);
                            break;
                        case 39:
                            d = e.x64String(-i.getTimezoneOffset());
                            break;
                        case 40:
                            d = e.x64String(e.afCharging + "|" + e.afLevel);
                            break;
                        case 41:
                            d = e.x64String(e.context.screen.availWidth + "|" + e.context.screen.availHeight);
                            break;
                        case 42:
                            d = e.x64String(e.networkInformationType + "|" + e.networkInformationEffectiveType + "|" + e.networkInformationSaveData);
                            break;
                        case 43:
                            d = e.compressNumber(e.getScreenX());
                            break;
                        case 44:
                            d = e.compressNumber(e.getScreenY());
                            break;
                        case 45:
                            d = e.compressNumber(e.afBrowserHookMask);
                            break;
                        case 46:
                            d = e.compressNumber(e.getMaxTouchPoints());
                            break;
                        case 47:
                            d = e.compressNumber(e.isSupportHtml5());
                            break;
                        case 48:
                            d = e.compressNumber(e.isOnLine())
                        }
                        c += d
                    }
                return encodeURIComponent(c)
            }
        }
        ,
        e.reWriteHref = function(t, n) {
            if (!t)
                t = e.context.event;
            t.target || (t.target = t.srcElement);
            var i = n["data-hash"] || n.getAttribute("data-hash");
            void 0 !== i && "A" == n.tagName && (n[e.hrefAttr] = e.prepareNiceHref(i, t, n))
        }
        ,
        e.linkMouseDown = function(t) {
            if (!t)
                t = e.context.event;
            var n;
            if ((t.target || (t.target = t.srcElement),
            e.allowReturnParams = !0,
            "A" != (n = t.target).tagName) && null == (n = e.getParentLink(n)))
                return;
            if (n.hasAttribute("data-hash")) {
                var i = 0;
                parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
                i >> 1 & 8 || (n["data-rel"] = i + 16),
                e.reWriteHref(t, n)
            }
        }
        ,
        e.linkClick = function(t) {
            if (!t)
                t = e.context.event;
            var n;
            if ((t.target || (t.target = t.srcElement),
            e.allowReturnParams = !0,
            "A" != (n = t.target).tagName) && null == (n = e.getParentLink(n)))
                return;
            n.hasAttribute("data-hash") && (e.reWriteHref(t, n),
            e.context.setTimeout((function() {
                e.allowReturnParams = !1,
                e.reWriteHref(t, n)
            }
            ), 100))
        }
        ,
        e.linkMouseOver = function(t) {
            if (!t)
                t = e.context.event;
            var n;
            if ((t.target || (t.target = t.srcElement),
            e.allowReturnParams = !0,
            "A" != (n = t.target).tagName) && null == (n = e.getParentLink(n)))
                return;
            if (n.hasAttribute("data-hash")) {
                var i = 0;
                parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
                i % 2 != 1 && (n["data-rel"] = i + 1),
                e.reWriteHref(t, n)
            }
        }
        ,
        e.timeFromScroll = function(t) {
            if (!t)
                t = e.context.event;
            t.target || (t.target = t.srcElement),
            e.miliSecondsFromScroll = 0,
            e.context.clearInterval(e.timerFromScroll),
            e.timerFromScroll = e.context.setInterval((function() {
                e.miliSecondsFromScroll++
            }
            ), 100)
        }
        ,
        e.linkMouseMove = function(t) {
            if (!t)
                t = e.context.event;
            var n;
            if ((t.target || (t.target = t.srcElement),
            e.allowReturnParams = !0,
            "A" != (n = t.target).tagName) && null == (n = e.getParentLink(n)))
                return;
            if (n.hasAttribute("data-hash")) {
                var i = 0;
                parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
                (i >> 1) % 2 != 1 && (n["data-rel"] = i + 2),
                e.reWriteHref(t, n)
            }
        }
        ,
        e.linkTouchStart = function(t) {
            var n;
            if ((e.allowReturnParams = !0,
            "A" != (n = t.target).tagName) && null == (n = e.getParentLink(n)))
                return;
            if (n.hasAttribute("data-hash")) {
                var i = 0;
                parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
                i >> 1 & 2 || (n["data-rel"] = i + 4),
                e.reWriteHref(t, n)
            }
        }
        ,
        e.linkTouchEnd = function(t) {
            if (!t)
                t = e.context.event;
            var n;
            if ((t.target || (t.target = t.srcElement),
            e.allowReturnParams = !0,
            "A" != (n = t.target).tagName) && null == (n = e.getParentLink(n)))
                return;
            if (n.hasAttribute("data-hash")) {
                var i = 0;
                parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
                i >> 1 & 4 || (n["data-rel"] = i + 8),
                e.reWriteHref(t, n)
            }
        }
        ,
        e.fixTimeImageLoaded = function() {
            e.afImgLoaded || (e.afImgLoaded = (new Date).getTime())
        }
        ,
        e.hangAFListener = function(t) {
            void 0 === t && (t = e.root),
            e.addEvent(t, "mousedown", e.linkMouseDown),
            e.addEvent(t, "mouseup", e.linkClick),
            e.addEvent(t, "mouseover", e.linkMouseOver),
            e.addEvent(t, "mousemove", e.linkMouseMove),
            e.addEvent(t, "touchstart", e.linkTouchStart),
            e.addEvent(t, "touchend", e.linkTouchEnd),
            e.addEvent(e.context.document, "scroll", e.timeFromScroll),
            e.addEvent(e.context, "focus", e.setFocus),
            e.addEvent(e.context, "blur", e.unsetFocus),
            e.setDeviceOrientation();
            for (var n = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/, i = /\/\/s-img.*\/([\d]+)\/.*\.(jpg|gif)/, o = e.root.getElementsByTagName("IMG"), r = e.root.getElementsByTagName("VIDEO"), a = [], s = 0; s < o.length; s++)
                a.push(o[s]);
            for (s = 0; s < r.length; s++)
                a.push(r[s]);
            for (s = 0; s < a.length; s++) {
                var c = n.exec(a[s].src);
                c || (c = i.exec(a[s].src)),
                e.addEvent(a[s], "load", e.fixTimeImageLoaded)
            }
        }
    }
}
, function(e, t, n) {
    window.MarketGidCActivateDelayBlock826444 = function(e) {
        var t;
        e.clickableDelay = !1;
        var n = !1;
        e.afterLoadNewsHooks.push("initActivateDelay"),
        e.isWagesLink = function(t) {
            var n = t.getAttribute("data-hash");
            return e.teaserData[n] && "w" === e.teaserData[n].coopType
        }
        ,
        e.isCloseLink = function(e) {
            return e.classList.contains("mg-close-button-div-inner")
        }
        ,
        e.activateDelayLinkHandler = function(t, i) {
            return !!n || (!!(e.clickableDelay && e.isWagesLink(t) || e.isCloseLink(t)) || (void 0 !== e.servicerData.dc || (e.linksBlocked = !0,
            i.preventDefault(),
            !1)))
        }
        ,
        e.initActivateDelay = function(i, o, r) {
            if (!t) {
                t = !0;
                var a = parseInt(2e3);
                0,
                e.addClickHandler(e.clickHandlerList.activateDelayLink.handler, e.clickHandlerList.activateDelayLink.priority),
                e.context.setTimeout((function() {
                    n = !0,
                    e.linksBlocked = !1,
                    e.clickableDelay = !1
                }
                ), a)
            }
        }
    }
}
, function(e, t) {
    window.MarketGidCExternalCountersBlock826444 = function(e) {
        e.afterLoadNewsHooks.push("handleExternalCountersListener"),
        e.externalCountersLinkHandler = function(t, n) {
            var i = t.getAttribute("data-hash");
            if (Array.isArray(e.teaserData[i].clicktrackers)) {
                var o = e.teaserData[i].clicktrackers;
                if (o.length)
                    for (var r = 0; r < o.length; r++) {
                        e.context.document.createElement("IMG").src = o[r]
                    }
            }
            return !0
        }
        ,
        e.handleExternalCountersListener = function() {
            e.addClickHandler(e.clickHandlerList.externalCountersLink.handler, e.clickHandlerList.externalCountersLink.priority)
        }
    }
}
]);
