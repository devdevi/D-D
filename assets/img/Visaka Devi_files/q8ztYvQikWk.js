if (self.CavalryLogger) { CavalryLogger.start_js(["UFFMd"]); }

__d("AdsLWIDialogManagementBody.react",["cx","AdsLWIManagementDialogTabs.react","AdsLWIStepperUtils","BoostedAutomatedAdsConstants","BoostedComponentConstants","FlexLayout.react","React","ScrollableArea.react","VideoPlayerFormatsMap","getDialogBodyHeight"],(function a(b,c,d,e,f,g,h){"use strict";var i=c("AdsLWIStepperUtils").renderComponents,j=c("BoostedAutomatedAdsConstants").AUTOMATED_ADS_DIALOG_SCROLLABLE_TAB_THRESHOLD,k=c("BoostedComponentConstants").DIALOG_WIDTH,l=c("VideoPlayerFormatsMap").embedded;function m(n){var o=n.activeTabPlugin,p=n.layout,q=o.bottomComponents,r=o.layoutDelegate,s=c("getDialogBodyHeight")(p,n.height),t=l?{}:{height:s},u=s<j,v=c("React").createElement(c("AdsLWIManagementDialogTabs.react"),{activeTab:n.activeTab,boostID:n.boostID,tabItems:n.tabItems});return c("React").createElement(c("FlexLayout.react"),{align:"stretch",className:l?"_29fu":"",direction:"vertical",style:t},!u&&v,c("React").createElement(c("ScrollableArea.react"),{className:"_14vn",fade:false,width:k},u&&v,r.genRender()),q&&i(q))}f.exports=m}),null);