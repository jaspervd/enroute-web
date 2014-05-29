var Settings = (function () {
    function Settings() {}

    Settings.base = "http://localhost";
    Settings.path = "/MAIV/ENROUTE/enroute-web";
    Settings.API = Settings.base + Settings.path + "/api";

    return Settings;
})();