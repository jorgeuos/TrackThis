var wid = window.setTimeout(function () {
  /**
   * Default Matomo tracking script
   */
  var _paq = (window._paq = window._paq || []);
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  console.log("Shoot");
  var userID = document.getElementById("login_form_login");
  if (userID !== null) {
    console.log(userID.value);
    _paq.push(["setUserId", userID.value]);
  }
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function () {
    var u = "//mtmo.com:8443/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "1"]);
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = u + "matomo.js";
    s.parentNode.insertBefore(g, s);
  })();
}, "3000");
