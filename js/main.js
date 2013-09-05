$(document).ready(function() {

    // Call fancybox for Contact form
    $(".fancybox").fancybox({

        afterLoad: function() { 
            this.content = $('.form-markup').html(); },

        width: 'auto',
        height: 'auto',

        helpers : {
            overlay : {
                css : { 'background' : 'rgba(0, 0, 0, .25)' } } } });

});

//GoSquared
    var GoSquared={};
    GoSquared.acct = "GSN-935427-A";
    (function(w){
        function gs(){
            w._gstc_lt=+(new Date); var d=document;
            var g = d.createElement("script"); g.type = "text/javascript"; g.async = true; g.src = "//d1l6p2sc9645hc.cloudfront.net/tracker.js";
            var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(g, s);
        }
        w.addEventListener?w.addEventListener("load",gs,false):w.attachEvent("onload",gs);
    })(window);

//GoogleAnalytics
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-28609193-1']);
  _gaq.push(['_setDomainName', 'crunchyweb.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();