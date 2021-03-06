var gpt_gam_ver = 'v03-LN';
gpt_gam_site = window.location.hostname.toUpperCase();
gpt_gam_ver = (typeof gpt_gam_site !== 'undefined') ? gpt_gam_ver.toUpperCase() : 'V.0.1';
console.log('%c GPT '+gpt_gam_site+' '+gpt_gam_ver ,'color:#d3d3d3; font-size:25px; font-weight: bold; -webkit-text-stroke: 1px black;');

    /*PROTOTYPE CUSTOM FILTERING*/
    String.prototype.klyFiltering = function(delimiter) {
        return this.replace(/[\"\']/g, "").trim().split(delimiter).map(function(t) {
            return t.trim().toLowerCase()
        }).filter(function(x) {
            return x != "";
        });
    };

    /*SET INTERVAL TO AUTO REFRESH BOTTOM FRAME ADS - NEW*/
    window.GAMLibrary = {};
    window.GAMLibrary = {
        dfpSlideup          :   '/36504930/m.otosia.com/dfp-slideup',
        dfpExposer1         :   '/36504930/m.otosia.com/dfp-exposer',
        dfpExposer2         :   '/36504930/m.otosia.com/dfp-exposer',
        dfpBottomFrame      :   '/36504930/m.otosia.com/dfp-bottomfrm',
        dfpTopFrame         :   '/36504930/m.otosia.com/dfp-topfrm',
        dfpHeadline         :   '/36504930/m.otosia.com/dfp-headline',
        scSlot              :   '/36504930/m.otosia.com/dfp-sc',
        timedBottomFrm      :   null,
        setGamBFInterval    :   function(active = true){
                                    if (!active) {
                                        clearInterval(window.GAMLibrary.gamBFInterval);
                                        return;
                                    }
                                    window.GAMLibrary.gamBFInterval = setInterval(function () {
                                        document.querySelector("#dfp-spinads") && document.querySelector("#dfp-spinads").parentElement.remove(); 
                                        googletag.pubads().refresh([window.GAMLibrary.refreshSlot]);
                                    }, 60000);
                                },
        documentMeta       :    function (metaName) {
                                    var metaResult = '';
                                    var metas = document.getElementsByTagName('meta');
                                    if (metas) {
                                        for (var x = 0, y = metas.length; x < y; x++) {
                                            if (metas[x].name.toLowerCase() == metaName) {
                                                metaResult += metas[x].content;
                                            }
                                        }
                                    }
                                    return metaResult != '' ? metaResult : '';
                                },
        inArray             :   function (needle, haystack) {
                                    var length = haystack.length;
                                    for (var i = 0; i < length; i++) {
                                        if (haystack[i] == needle) return true;
                                    }
                                    return false;
                                },
        arrToLowerCase      :   function (arr){
                                    return arr.map(function(v,i){
                                        return v.toLowerCase();
                                    });
                                },
        lockScroll          :   {
                                    status: false,
                                    timeout: 3000,
                                    unset: function() {
                                        document.body.style.overflow = "initial";
                                        document.body.style.position = "unset";
                                        document.body.style.width = "unset";
                                        this.status = false;
                                    },
                                    set: function() {
                                        document.body.style.overflow = "hidden";
                                        document.body.style.position = "fixed";
                                        document.body.style.width = window.screen.width + "px";
                                        this.status = true;
                                        console.log('set');
                                    }
                                },
        scrollBottomFrame   :   function(){
                                    this.scroll = function(){
                                        var scrollNode = document.scrollingElement || document.documentElement;
                                        var scrollTop = scrollNode.scrollTop;
                                        if (scrollTop >= "200") {
                                            console.log('testing scroll',scrollTop,this.timedBottomFrm);
                                            window.removeEventListener("scroll", this.scrollHandler);

                                            googletag.display('div-gpt-ad-otosia-bottomfrm');
                                            googletag.pubads().refresh([this.timedBottomFrm]);

                                            this.refreshSlot = this.timedBottomFrm;
                                            this.setGamBFInterval();
                                        }
                                    };
                                    this.scrollHandler = this.scroll.bind(this);
                                    window.addEventListener("scroll", this.scrollHandler);
                                }
    }

    var PWT = {}; //Initialize Namespace
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    /* START - LOAD PUBMATIC, GOOGLE ADS, CRITEO & REVIVE */
    PWT.jsLoaded = function() { //PubMatic pwt.js on load callback is used to load GPT
        (function() {
            var gads = document.createElement('script');
            var rads = document.createElement('script'); // #1
            var crt = document.createElement("script");
            var crtInit = document.createElement("script");
            var useSSL = 'https:' == document.location.protocol;
            var node = document.getElementsByTagName('script')[0];
    
            /* GPT*/
            gads.async = true;
            gads.type = 'text/javascript';
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            
            /* REVIVE */
            rads.src = (useSSL ? 'https:' : 'http:') + '//adserver.kl-youniverse.com/asyncjs.php'; // #2
            rads.async = true; // #3
          
            /* CRITEO */
            crt.src = (useSSL ? "https:" : "http:") + "//static.criteo.net/js/ld/publishertag.js";
            crt.async = "async";
            crt.type = "text/javascript";
            crtInit.text = 'window.Criteo = window.Criteo || {};window.Criteo.events = window.Criteo.events || [];';

            node.parentNode.insertBefore(crt, node);
            node.parentNode.insertBefore(crtInit, node);
            node.parentNode.insertBefore(gads, node);
            node.parentNode.insertBefore(rads, node); // #4
        })();
    };
    /* END  - LOAD PUBMATIC, GOOGLE ADS, CRITEO & REVIVE */

    (function() {
        var purl = window.location.href;
        var url = '//ads.pubmatic.com/AdServer/js/pwt/156536/514';
        var profileVersionId = '';
        if (purl.indexOf('pwtv=') > 0) {
            var regexp = /pwtv=(.*?)(&|$)/g;
            var matches = regexp.exec(purl);
            if (matches.length >= 2 && matches[1].length > 0) {
                profileVersionId = '/' + matches[1];
            }
        }
        var wtads = document.createElement('script');
        wtads.async = true;
        wtads.type = 'text/javascript';
        wtads.src = url + profileVersionId + '/pwt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(wtads, node);
    })();

    /* DMP CATEGORY LIST */
	window.createDMPTracker = function(adsList, dfpTracker) {
		var dmpEl, dmpON, dmpId = 1,
			dmpList = ["fashion-events","acara-film","beauty-events","comedy-events","fan-conventions","lifestyle-events","musical-events","sporting-events","auto-shows","parenting-events","political-event","apartments","life-insurance","motor-insurance","health-insurance","education-insurance","travel-insurance","home-insurance","automotive","auto-racing","beauty","disasters","local-news","law","international-news","crime","national-news","elections","politics","government-business","business-and-finance","cloud-computing","content-channel","education","outdoor-decorating","consumer-electronics","esports","events","family-and-relationships","fashion-anak","mens-fashion","womens-fashion","fitness-and-exercise","fmcg-food-and-drink","fmcg-personal-care","console-games","pc-games","gaming","computer-peripherals","hatchback","health","healthy-and-wellness","home-and-garden","homeschooling","hotels-and-motels","pharmaceutical-industry","financial-industry","entertainment-industry","healthcare-industry","construction-industry","legal-services-industry","power-and-energy-industry","logistics-and-transportation-industry","food-industry","manufacturing-industry","media-industry","mechanical-and-industrial-engineering-industry","automotive-industry","education-industry","aviation-industry","hospitality-industry","advertising-industry","agriculture","real-estate-industry","retail-industry","technology-industry","telecommunications-industry","interior-decorating","internet","residentials-buy-sell-and-rentals","auto-buying-and-selling","credit-cards","household-supplies","injuries","pregnancy","childrens-health","adults-health","mental-health","reproductive-health","computing","bollywood-content","dangdut-content","movie-content","hijab-content","hollywood-content","korean-content","quiz-content","music-content","coffee","course-education","green-vehicles","frozen-foods","fast-foods","side-dishes","desserts-and-baking","snacks","healthy-cooking-and-eating","make-up","marketing-and-advertising","soft-drinks","mobil-cerdas","luxury-cars","budget-cars","performance-cars","mobile-apps","mpv","news-and-politics","nutrition","non-profit-organizations","business-expos-and-conferences","parenting","marketplace/ecommerce","weight-loss","early-childhood-education","alternative-medicine","chronic-disease","ailment","sports-equipment","skin-care","hair-care","body-care","facecare","home-appliances","personal-finance","houses","loans","fmcg-oral-care","fmcg-hair-care","fmcg-body-care","fmcg-face-care","milk-products","tickets-promo-and-vouchers","property","relationship","auto-rentals","sales-and-promotions","primary-education","online-education","private-school","soccer","motorcycles","auto-repair","shopping-and-ecommerce","smartphones","social-networking","computer-software-and-applications","auto-parts","sports","startups","style-and-fashion","suv","water-services","gas-and-electric","internet-service-providers","phone-services","technology-and-computing","television","physical-therapy","train-tickets","flight-tickets","online-transportation","travel","budget-travel","special-interest-tv","childrens-tv","animation-tv","news-tv","drama-tv","comedy-tv","music-tv","sports-tv","reality-tv","college-education","vaccines","wearable-technology","web-hosting","family-travel","culinary-travel","religious-tourism"];
		Array.isArray(adsList) && dmpList.forEach(function(v, k) {
			adsList.forEach(function(l, e) {
				if (v === l) {
					cat = v.trim();
					dmpEl = document.createElement('img');
					dmpON = parent.window.document.querySelector('#dmp-tracker-' + dmpId);
					dmpON ? dmpON.remove() : '';
					dmpEl.setAttribute('src', 'https://beacon.krxd.net/event.gif?event_id=M361oCpv&event_type=registration&cat=' + cat + '&media=banner');
					dmpEl.setAttribute('width', '0');
					dmpEl.setAttribute('height', '0');
					dmpEl.setAttribute('id', 'dmp-tracker-' + dmpId);
					console.log(dmpEl);
					parent.window.document.body.appendChild(dmpEl);
					dmpId++;
				}
			});
		});
		parent.window.open(dfpTracker, '_blank');
	};

    if (!document.querySelector("div-gpt-ad-otosia-insertion-oop")) {
        var gamInsertionEl = document.createElement("div");
        gamInsertionEl.id = "div-gpt-ad-otosia-insertion-oop";
        document.body.appendChild(gamInsertionEl);
    }
    
    googletag.cmd.push(function() {
        var urlPath = document.URL;
        var isMatcont = false;
        var blackListWords = new Array('matcont', 'aduhai', 'kelamin', 'vital', 'anal', 'belahan', 'bercinta', 'bergairah', 'gairah', 'intim', 'bikini', 'bokong', 'boob', 'bra', 'bugil', 'celana', 'ciuman', 'cleavage', 'dada', 'dewasa', 'diremas', 'doggie', 'ejakulasi', 'ereksi', 'erotis', 'foreplay', 'kiss', 'seks', 'gangbang', 'horny', 'hot', 'kamasutra', 'keperawanan', 'perawan', 'kondom', 'kontrasepsi', 'libido', 'lingerie', 'masturbasi', 'mature', 'menggairahkan', 'menggoda', 'mesra', 'miss-v', 'mr-p', 'nakal', 'naughty', 'nipple', 'nipples', 'onani', 'oral', 'oral seks', 'organ', 'orgasme', 'paha', 'pantat', 'panties', 'payudara', 'pelecehan', 'telanjang', 'penetrasi', 'penis', 'perkosa', 'perkosaan', 'pole', 'porno', 'pornoaksi', 'pornografi', 'telentang', 'provokatif', 'putting', 'ranjang', 'sex', 'penetratif', 'seksi', 'seksual', 'sensual', 'seronok', 'doll', 'toys', 'skandal', 'sperma', 'striptease', 'striptis', 'syur', 'terangsang', 'tiduri', 'topless', 'vagina', 'vibrator', 'lendir', 'prostitusi', 'homoseks', 'meraba-raba', 'mesum', 'memerkosa', 'rudapaksa', 'kemaluan', 'kasus asusila', 'pemerkosaan', 'hubungan seksual', 'hubungan intim', 'video porno', 'berita hoax', 'ternyata hoax', 'ahed tamimi', 'konflik palestina israel', 'konflik suriah', 'ujaran kebencian', 'g30s', 'kediktatoran arab saudi', 'konflik palestina-israel', 'fpi', 'penembakan', 'pelecehan seksual', 'tips seks', 'komunitas swinger', 'fenomena kelainan seksual', 'penyimpangan seks', 'posisi seks', 'obat kuat', 'bentuk payudara', 'implan payudara', 'chat firza-rizieq', 'anarkisme suporter sepakbola', 'bentrok suporter', 'pengeroyokan', 'penganiayaan', 'begal motor', 'kekerasan pada wartawan', 'pemerkosaan anak', 'pencabulan', 'bentrokan warga', 'bentrokan', 'kasus narkoba', 'akibat merokok', 'bahaya merokok', 'berhenti merokok', 'cara berhenti merokok', 'efek berhenti merokok', 'larangan merokok', 'tips berhenti merokok', 'rokok elektrik', 'pilpres 2019', 'koalisi pilpres 2019', 'koalisi prabowo', 'koalisi jokowi', 'prabowo-sandiaga', 'ratna sarumpaet', 'capres jokowi', 'capres prabowo', 'kebohongan ratna sarumpaet', 'prabowo subianto', 'jemaah ansharut daulah', 'aliran sesat', 'lia eden', 'kisah mualaf', 'penistaan agama', 'suporter tewas', 'gempa palu', 'gempa donggala', 'gempa sulawesi tengah', 'pembunuhan', 'tsunami palu', 'penemuan mayat', 'lion air jatuh di karawang', 'lion air jatuh', 'pembunuhan sadis', 'lion air hilang kontak', 'pesawat jatuh', 'pesawat hilang kontak', 'kecelakaan', 'kapal tenggelam di danau toba', 'kecelakaan bus', 'kapal tenggelam', 'kasus tabrak lari', 'bunuh diri', 'perselingkuhan', 'kisah perselingkuhan', 'razia pasangan mesum', 'seks bebas', 'gangguan jiwa', 'tes keperawanan', 'kontroversi hukuman mati', 'stres dan depresi', 'ahok gugat cerai veronica tan', 'Kanker', 'Impotensi', 'merokok', 'Perokok', 'Rokok', 'tembakau', 'Pelanggaran', 'Tablet', 'Overdosis', 'Jantung', 'Stroke', 'Cancer', 'Narkoba', 'Djarum', 'Ganja', 'BNN', 'Obesitas', 'Osteoporosis', 'Corona', 'Corona di indonesia', 'virus corona', 'virus-corona', 'covid-19', 'wabah corona', 'menewaskan', 'menewaskan orang', 'mengancam nyawa', 'meninggal', 'meninggal dunia', 'orang mati', 'orang tewas', 'pemakaman', 'petugas penyelamat', 'telah meninggal', 'terbunuh', 'tewas', 'tewaskan', 'tim penyelamat', 'wanita meninggal', 'autopsi', 'belasungkawa', 'bencana', 'bencana besar', 'bunuh orang', 'darurat bencana', 'dilaporkan tewas', 'dimakamkan', 'dipastikan tewas', 'ditemukan mati', 'ditemukan tewas', 'hilangnya nyawa', 'identitas korban', 'inalillahi', 'jasad korban', 'jasadnya', 'jenasah wanita', 'jenazah', 'jenazah pria', 'jenazah teridentifikasi', 'jasad', 'kehilangan hidupnya', 'kehilangan nyawa', 'kehilangan nyawanya', 'kematian', 'korban', 'korban jiwa', 'korban meninggal', 'korban tewas', 'mati', 'mayat', 'mayat korban', 'membunuh', 'membunuh istrinya', 'membunuh mereka', 'membunuh suaminya', 'menemui ajal', 'mengalami koma', 'menghembuskan nafas terakhir', 'menimbulkan korban', 'meninggal akibat sakit', 'menyebabkan kematian', 'meregang nyawa', 'meregggut nyawa', 'modar', 'nyawa hilang', 'nyawa melayang', 'penyebab kematian', 'tak bernyawa', 'tak sadarkan diri', 'terkapar', 'tidak bernyawa', 'tutup usia', 'wafat', 'kematian virus', 'kematian wabah', 'korban terinfeksi', 'virus menyerang', 'merenggut nyawa', 'pelayat', 'hilangkan nyawa', 'renggut nyawa', 'wabah', 'keadaan kritis', 'kehilangan darah', 'merenggut jiwa', 'telan nyawa', 'menelan nyawa', 'memakan nyawa', 'dinyatakan meninggal', 'nyawa tak tertolong', 'penyakit', 'sakit pernapasan', 'sesak', 'korona', 'corona', 'odp', 'pdp', 'virus', 'rumah sakit', 'Covid-19', 'virus korona', 'positif korona', 'COVID-19', 'terjangkit COVID-19', 'terinfeksi virus corona');
        /* POPULATE META DATA KEYWORDS */
        var dfp_pageTitle = kly.article && kly.article.title.klyFiltering(' ');
        var dfp_titles = (typeof dfp_pageTitle !== 'undefined' && dfp_pageTitle.length > 0 ) ? dfp_pageTitle: [];
        var dfp_pageKeywords = GAMLibrary.documentMeta("keywords");
        var dfp_keyword = dfp_pageKeywords.klyFiltering(",");
        /* POPULATE META DATA DESC */
        var dfp_pageDesc = GAMLibrary.documentMeta("description");
        var dfp_desc = dfp_pageDesc.klyFiltering(",");
        var tagForAds = (typeof window.kly !== 'undefined') ? kly.gtm.tag.klyFiltering("|") : [];
        var dfp_keywords = dfp_keyword.concat(dfp_titles, dfp_desc, tagForAds);
        var isMultipage = window.kly.article["isMultipage"].toString();
        /*MATURE CONTENT DEFINED VAR*/
        if (!blackListWords) {
            var blackListWords = new Array('matcont');
        }
        
        /*CONTENT FILTERING SCRIPT*/
        blackListWords = GAMLibrary.arrToLowerCase(blackListWords);
        dfp_keywords.forEach(function(sKeyword) {
            sKeyword = sKeyword.toLowerCase();
            tagForAds.push(sKeyword);
            if (GAMLibrary.inArray(sKeyword.trim(), blackListWords)) {
                isMatcont = true;
            }
        });

        /*DEFINE ALL SLOT*/
        googletag.defineSlot(GAMLibrary.dfpExposer1, [
            [300, 250],
            [300, 600],
            [320, 480]
        ], 'div-gpt-ad-otosia-dfp-exposer-slot1-oop').addService(googletag.pubads());
        googletag.defineSlot(GAMLibrary.dfpHeadline, [
            [320, 100],
            [320, 50]
        ], 'div-gpt-ad-otosia-hl').addService(googletag.pubads());
        googletag.defineSlot(GAMLibrary.scSlot, [300, 250], 'div-gpt-ad-otosia-sc').addService(googletag.pubads());

        /*OUT OF PAGE SLOTS*/
        googletag.defineOutOfPageSlot(GAMLibrary.dfpTopFrame, 'div-gpt-ad-otosia-topfrm-oop').addService(googletag.pubads());
        googletag.defineOutOfPageSlot(GAMLibrary.dfpExposer2, 'div-gpt-ad-otosia-dfp-exposer-slot2-oop').addService(googletag.pubads());
        googletag.defineOutOfPageSlot(GAMLibrary.dfpSlideup, 'div-gpt-ad-dfp-overlay-oop').addService(googletag.pubads());

        /*Bottom Frame Scrolling*/
        GAMLibrary.timedBottomFrm = googletag.defineSlot(GAMLibrary.dfpBottomFrame, [[320, 50],[320, 100]], 'div-gpt-ad-otosia-bottomfrm').addService(googletag.pubads());
        GAMLibrary.scrollBottomFrame();
        /*Bottom Frame Scrolling*/

        googletag.pubads().addEventListener('slotResponseReceived', function(event) {
            var dfp_slotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/
            var dfp_slotAdUnitPath = event.slot.getSlotId().getAdUnitPath(); /* get adunit path */
            var dfp_slotAdUnitID = event.slot.getSlotId().getId(); /* get adunit container id*/

            /*check if native ads creative was delivered*/
            if (dfp_slotDelivered == 'block') {
                if (dfp_slotAdUnitPath == GAMLibrary.dfpHeadline) {
                    var urlParams = new URLSearchParams(window.location.search);
                    var myParam = JSON.parse(urlParams.get('interval'));
                    headlineSticky(myParam);
                }

                /*check for topframe rendering process */
                if (dfp_slotAdUnitPath == GAMLibrary.dfpTopFrame) {
                    let deviceOrientation = (window.innerHeight < window.innerWidth ? 1 : 0);
                    var that = GAMLibrary.lockScroll;
                    GAMLibrary.lockScroll.set();

                    if (GAMLibrary.lockScroll.status) {
                        setTimeout(function() {
                            that.unset();
                        }, that.timeout);
                    } else {
                        GAMLibrary.lockScroll.unset();
                    }
                    if (deviceOrientation) {
                        GAMLibrary.lockScroll.unset();
                    }
                    window.addEventListener("resize", function() {
                        let deviceOrientation = (window.innerHeight < window.innerWidth ? 1 : 0);
                        if (deviceOrientation) {
                            that.unset();
                            console.log("unset")
                        }
                    });
                    /*tweak oop iframe container*/
                    scWidth = 0;
                    if (self.innerHeight) {
                        scWidth = self.innerWidth;
                    }
                    if (document.documentElement && document.documentElement.clientHeight) {
                        scWidth = document.documentElement.clientWidth;
                    }
                    if (document.body) {
                        scWidth = document.body.clientWidth;
                    }
                    if (((scWidth * 100) / 480) < 100) {
                        scWidth = (scWidth * 100) / 480
                    } else {
                        scWidth = 100
                    }
                    document.getElementById("google_ads_iframe_" + dfp_slotAdUnitID).setAttribute("height", scWidth);
                    document.getElementById("google_ads_iframe_" + dfp_slotAdUnitID).setAttribute("width", "100%");
                }
                /*check for bottomframe rendering process*/
                if (dfp_slotAdUnitPath == GAMLibrary.BottomFrame) {
                    isBottomFrame_delivered = true;
                }

            } else {

                if (dfp_slotAdUnitPath == GAMLibrary.dfpTopFrame) {

                    document.getElementById("google_ads_iframe_" + dfp_slotAdUnitID + "__container__").setAttribute("style", "display: none;");
                }
            }
        });

        /* Criteo Section BEGIN */
        googletag.pubads().disableInitialLoad();
        Criteo.events.push(function() {
            Criteo.RequestBidsOnGoogleTagSlots(3467, function() {
                Criteo.SetDFPKeyValueTargeting();
                googletag.pubads().refresh();
            }, 2000);
        });

        /*  START TARGETING BLOCK   */
        if(isMatcont){
            googletag.pubads().setTargeting("isMatcont", ["1"]);
        }
        
        if(typeof Krux !== "undefined"){
            googletag.pubads().setTargeting('ksg', Krux.segments);
            googletag.pubads().setTargeting('kuid', Krux.user);
        }

        googletag.pubads().setTargeting("tags", tagForAds);
        googletag.pubads().setTargeting("currentUrl", urlPath);
        googletag.pubads().setTargeting("type", kly.gtm.type);
        googletag.pubads().setTargeting("pageType", kly.pageType);
        googletag.pubads().setTargeting("channel", kly.channel.full_slug);
        googletag.pubads().setTargeting("audience", typeof (audience = kly.gtm.audience && kly.gtm.audience.split("|")) === "undefined" ? "false" : audience);
        googletag.pubads().setTargeting("isAdvertorial", typeof (isAdvertorial = kly.article && kly.article.isAdvertorial.toString()) === "undefined" ? "false" :  isAdvertorial);   
        googletag.pubads().setTargeting("isMultipage", typeof (isMultipage = kly.article && kly.article.isMultipage.toString()) === "undefined" ? "false" : isMultipage );
        googletag.pubads().setTargeting("articleId", kly.gtm.articleId.toString());
        googletag.pubads().setTargeting("pagingNum", typeof (pageParam = kly.gtm.pageParam && kly.gtm.pageParam.toString()) === "undefined" ? "false" : pageParam );
        googletag.pubads().setTargeting("newExp",typeof (newExp = kly.gtm.new_exp) === "undefined" ? "false" : kly.gtm.new_exp.toString());
        /*  END TARGETING BLOCK   */

        googletag.pubads().setCentering(true);
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });

    googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-otosia-sc');
    });
    googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-otosia-topfrm-oop');
    });
    googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-otosia-hl');
    });
    googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-otosia-bottomfrm');
    });
    googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-otosia-dfp-exposer-slot1-oop');
    });
    googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-otosia-dfp-exposer-slot2-oop');
    });
    googletag.cmd.push(function() {
        googletag.display('div-gpt-ad-dfp-overlay-oop');
    });
    
    var gptMOtosiaStyle = document.createElement('style');
    gptMOtosiaStyle.textContent = '.list-artikel-berita #div-gpt-ad-otosia-dfp-exposer-slot1-oop{margin:20px auto!important}.detail-berita #div-gpt-ad-otosia-dfp-exposer-slot1-oop{margin:20px -15px!important}#div-gpt-ad-otosia-dfp-exposer-slot1-oop iframe{width:auto}';
    document.body.appendChild(gptMOtosiaStyle);

    /* ===== HEADLINESTICKY METHOD - DEFAULT 3s ===== */
    var headlineStickyInterval=3,headlineStickyStatus=!1;function headlineSticky(t){null!=t&&(headlineStickyInterval=t),console.log(headlineStickyInterval);var e=document.getElementById("div-gpt-ad-otosia-hl"),n=document.createElement("div");n.setAttribute("id","div-gpt-ad-otosia-hl-shadow"),e.parentElement.insertBefore(n,e),injectStickyStyleAndAnimation(),window.addEventListener("scroll",headlineStickyScrollEevent)}function headlineStickyScrollEevent(){var t=document.getElementById("div-gpt-ad-otosia-hl"),e=document.getElementById("div-gpt-ad-otosia-hl-shadow").getBoundingClientRect().top;document.querySelector(".layout__nav-content"),document.documentElement.scrollTop||document.body.scrollTop;headlineStickyStatus?e<=0||(window.removeEventListener("scroll",headlineStickyScrollEevent),removeStickyHeadline(t,!1)):e<=0&&(t.classList.add("hl-active-sticky"),t.style="",removeStickyHeadline(t,!0),headlineStickyStatus=!0)}function removeStickyHeadline(t,e){var n=setInterval(function(){headlineStickyInterval<=0?(t.classList.remove("hl-active-sticky"),t.classList.remove("hl-navbar-hanging"),t.style.margin="10px 0",clearInterval(n),window.removeEventListener("scroll",headlineStickyScrollEevent)):headlineStickyInterval--},1e3);e||(clearInterval(n),t.classList.remove("hl-active-sticky"),t.classList.remove("hl-navbar-hanging"),t.style.margin="10px 0")}function injectStickyStyleAndAnimation(){var t=document.createElement("style");t.textContent="\n\t\t.hl-active-sticky {\n\t\t\tposition: fixed;\n\t\t\ttop: -100%;\n\t\t\tz-index: 9999;\n\t\t\tleft: 50%;\n\t\t\ttransform: translateX(-50%);\n\t\t\tmargin: 0;\n\t\t\ttransition : margin-top .5s ease;\n\t\t\tanimation: hlSlideDown .5s forwards;\n\t\t}\n\n\t\t.hl-navbar-hanging{\n\t\t\tmargin-top : 50px !important;\n\t\t}\n\n\t\t@keyframes hlSlideDown{\n\t\t\t0%{top : -100px;}\n\t\t\t100%{top : 0px;}\n\t\t}\n\t\t",document.head.appendChild(t)}
    /* ===== HEADLINESTICKY METHOD ===== */ 