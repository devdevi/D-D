if (self.CavalryLogger) { CavalryLogger.start_js(["2m2+2"]); }

__d("ProfileIntroCardEditMediaFunnelLogger",["Event","FunnelLogger","ProfileIntroCardEditMediaFunnelLoggerEvent"],(function a(b,c,d,e,f,g){__p&&__p();var h="WWW_PROFILE_INTRO_CARD_EDIT_MEDIA_FUNNEL";function i(p){c("Event").listen(p,"click",function(){c("FunnelLogger").endFunnel(h)})}function j(p){c("Event").listen(p,"click",function(){c("FunnelLogger").appendAction(h,c("ProfileIntroCardEditMediaFunnelLoggerEvent").SAVE);c("FunnelLogger").endFunnel(h)})}function k(p){c("Event").listen(p,"click",function(){c("FunnelLogger").startFunnel(h);c("FunnelLogger").appendAction(h,c("ProfileIntroCardEditMediaFunnelLoggerEvent").INTRO_CARD_EDIT)})}function l(p){c("Event").listen(p,"click",function(){c("FunnelLogger").startFunnel(h);c("FunnelLogger").appendAction(h,c("ProfileIntroCardEditMediaFunnelLoggerEvent").SINGLE_EDIT)})}function m(){c("FunnelLogger").appendAction(h,c("ProfileIntroCardEditMediaFunnelLoggerEvent").SEE_DIALOG)}function n(){c("FunnelLogger").appendAction(h,c("ProfileIntroCardEditMediaFunnelLoggerEvent").OPEN_PICKER)}function o(p){c("Event").listen(p,"click",function(){c("FunnelLogger").appendAction(h,c("ProfileIntroCardEditMediaFunnelLoggerEvent").ADD_MEDIA)})}f.exports={logCancel:i,logSave:j,logSeeDialog:m,logSingleEdit:l,logIntroCardEdit:k,logOpenPicker:n,logAddMedia:o}}),null);