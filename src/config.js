/*
const DOMAIN = "https://bonus.stolica-dv.ru";
let script = document.createElement('script');
script.src = "../../../cordova.js";
document.head.append(script);
*/
//export const DOMAIN = "";
const DOMAIN = "https://bonus.stolica-dv.ru";
export const API_URL = `${DOMAIN}/api`;
export const TERMS_URL = `${DOMAIN}/politika-konfidentsialnosti`;
export const RULES_URL = `${DOMAIN}/pravila`;
export const REF_RULES_URL = `${DOMAIN}/pravila-akcii`;
export const VERSION_URL = `${DOMAIN}/version`;
export const LS_CURR_UPDATE = "LS_CurrentUpdate";
export const LS_CONTENTS = "LS_Contents";
export const LS_NEED_UPDATE = "LS_NeedUpdate";
export const LS_SECTION = "section";
export const LS_PUSHID = "LS_pushID";
export let versionApp;
