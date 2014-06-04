var Settings = (function () {
    function Settings() {}

    Settings.base = "http://localhost";
    Settings.online = "http://student.howest.be/jasper.van.damme/20132014";
    Settings.path = "/MAIV/ENROUTE/enroute-web";
    Settings.API = Settings.base + Settings.path + "/api";

    return Settings;
})();