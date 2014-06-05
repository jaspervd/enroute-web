var Settings = (function () {
    function Settings() {}

    Settings.base = "http://localhost";
    Settings.online = "http://student.howest.be/jasper.van.damme/20132014";
    Settings.path = "/MAIV/ENROUTE";
    Settings.API = Settings.base + Settings.path + "/enroute-web/api";
    //Settings.API = Settings.online + Settings.path + "/api/index.php";

    return Settings;
})();