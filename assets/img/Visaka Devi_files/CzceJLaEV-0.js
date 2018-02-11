if (self.CavalryLogger) { CavalryLogger.start_js(["rwl5X"]); }

__d("VideoAssetInsightsBreakdown",["keyMirror"],(function a(b,c,d,e,f,g){var h=c("keyMirror")({AUTOPLAYED:"",FOLLOWERS:"",GENDER:"",DEVICE_PLATFORM_TYPE:""});f.exports=h}),null);
__d("VideoAssetInsightsAudienceRetentionCard.react",["ix","cx","fbt","ClickableAreaButton.react","Grid.react","Image.react","React","VideoAssetInsightsAudienceRetention.react","VideoAssetInsightsBarList.react","VideoAssetInsightsBreakdown","VideoAssetInsightsConstants","VideoAssetInsightsEvents","VideoAssetInsightsInfo.react","VideoAssetInsightsMetricCards","VideoAssetInsightsMetricsNavigationBar.react","VideoAssetInsightsTypedLogger","XUIText.react","asset"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l,m=c("VideoAssetInsightsBarList.react").VideoAssetInsightsBar,n=c("Grid.react").GridItem,o=120;k=babelHelpers.inherits(p,c("React").Component);l=k&&k.prototype;function p(){var s,t;"use strict";for(var u=arguments.length,v=Array(u),w=0;w<u;w++)v[w]=arguments[w];return t=(s=l.constructor).call.apply(s,[this].concat(v)),this.state={selectedBreakdown:null,isZoomed:false},t}p.prototype.$VideoAssetInsightsAudienceRetentionCard1=function(s){"use strict";if(this.state.selectedBreakdown!==s){this.$VideoAssetInsightsAudienceRetentionCard2(s);this.setState({selectedBreakdown:s})}else this.setState({selectedBreakdown:null})};p.prototype.$VideoAssetInsightsAudienceRetentionCard2=function(s){"use strict";__p&&__p();var event=null;switch(s){case c("VideoAssetInsightsBreakdown").AUTOPLAYED:event=c("VideoAssetInsightsEvents").AUDIENCE_RETENTION_BREAKDOWN_AUTO_AND_CLICKED_TO_PLAY;break;case c("VideoAssetInsightsBreakdown").FOLLOWERS:event=c("VideoAssetInsightsEvents").AUDIENCE_RETENTION_BREAKDOWN_FOLLOWERS;break;case c("VideoAssetInsightsBreakdown").GENDER:event=c("VideoAssetInsightsEvents").AUDIENCE_RETENTION_BREAKDOWN_GENDER;break;case c("VideoAssetInsightsBreakdown").DEVICE_PLATFORM_TYPE:event=c("VideoAssetInsightsEvents").AUDIENCE_RETENTION_BREAKDOWN_DEVICE_PLATFORM_TYPE;break}if(event)this.$VideoAssetInsightsAudienceRetentionCard3(event)};p.prototype.$VideoAssetInsightsAudienceRetentionCard3=function(event){"use strict";new(c("VideoAssetInsightsTypedLogger"))().setVideoOrAssetID(this.props.loggerData.videoID).setSource(this.props.loggerData.source).setEvent(event).setPageID(this.props.loggerData.pageID).setCurrentMetricCard(c("VideoAssetInsightsMetricCards").AUDIENCE_RETENTION).log()};p.prototype.$VideoAssetInsightsAudienceRetentionCard4=function(){"use strict";var s=[c("VideoAssetInsightsBreakdown").AUTOPLAYED,c("VideoAssetInsightsBreakdown").FOLLOWERS,c("VideoAssetInsightsBreakdown").GENDER,c("VideoAssetInsightsBreakdown").DEVICE_PLATFORM_TYPE],t=[];s.forEach(function(u){var v=this.$VideoAssetInsightsAudienceRetentionCard5(u);if(v)t.push(v)}.bind(this));return t};p.prototype.$VideoAssetInsightsAudienceRetentionCard5=function(s){"use strict";var t=this.$VideoAssetInsightsAudienceRetentionCard6(s);return t?c("React").createElement(m,{key:s,data:this.$VideoAssetInsightsAudienceRetentionCard6(s),totalValue:this.props.data.views.value,applyColors:this.state.selectedBreakdown===s,isSelectable:true,selected:this.state.selectedBreakdown===s,onSelectToggle:this.$VideoAssetInsightsAudienceRetentionCard1.bind(this,s),showRawValue:false}):null};p.prototype.$VideoAssetInsightsAudienceRetentionCard6=function(s){"use strict";__p&&__p();switch(s){case c("VideoAssetInsightsBreakdown").AUTOPLAYED:var t=this.props.data.viewsAutoplayed,u=this.props.data.viewsClickedToPlay;if(t&&u&&this.props.data.viewsRetentionGraphAutoplayed&&this.props.data.viewsRetentionGraphClickedToPlay)return[{rawValue:t.value,formattedValue:t.text,label:j._("Auto-Played"),color:c("VideoAssetInsightsConstants").CHART_BREAKDOWN_COLOR_1},{rawValue:u.value,formattedValue:u.text,label:j._("Clicked-to-Play"),color:c("VideoAssetInsightsConstants").CHART_BREAKDOWN_COLOR_2}];break;case c("VideoAssetInsightsBreakdown").FOLLOWERS:var v=this.props.data.viewsFollowers,w=this.props.data.viewsNonFollowers;if(v&&w&&this.props.data.viewsRetentionGraphFollowers&&this.props.data.viewsRetentionGraphNonFollowers)return[{rawValue:v.value,formattedValue:v.text,label:j._("Followers"),color:c("VideoAssetInsightsConstants").CHART_BREAKDOWN_COLOR_1},{rawValue:w.value,formattedValue:w.text,label:j._("Non-Followers"),color:c("VideoAssetInsightsConstants").CHART_BREAKDOWN_COLOR_2}];break;case c("VideoAssetInsightsBreakdown").GENDER:var x=this.props.data.viewsMale,y=this.props.data.viewsFemale;if(x&&y&&this.props.data.viewsRetentionGraphMale&&this.props.data.viewsRetentionGraphFemale)return[{rawValue:x.value,formattedValue:x.text,label:j._("Men"),color:c("VideoAssetInsightsConstants").CHART_BREAKDOWN_COLOR_1},{rawValue:y.value,formattedValue:y.text,label:j._("Women"),color:c("VideoAssetInsightsConstants").CHART_BREAKDOWN_COLOR_2}];break;case c("VideoAssetInsightsBreakdown").DEVICE_PLATFORM_TYPE:var z=this.props.data.viewsMobile,A=this.props.data.viewsDesktop;if(z&&A&&this.props.data.viewsRetentionGraphMale&&this.props.data.viewsRetentionGraphFemale)return[{rawValue:z.value,formattedValue:z.text,label:j._("Mobile"),color:c("VideoAssetInsightsConstants").CHART_BREAKDOWN_COLOR_1},{rawValue:A.value,formattedValue:A.text,label:j._("Desktop"),color:c("VideoAssetInsightsConstants").CHART_BREAKDOWN_COLOR_2}];break}return[]};p.prototype.$VideoAssetInsightsAudienceRetentionCard7=function(){"use strict";var s=!this.state.isZoomed;this.setState({isZoomed:s});this.$VideoAssetInsightsAudienceRetentionCard3(c("VideoAssetInsightsEvents").AUDIENCE_RETENTION_TOGGLE_ZOOM)};p.prototype.render=function(){"use strict";var s=p.LABEL,t=c("React").createElement(c("VideoAssetInsightsMetricsNavigationBar.react"),{metric:s,value:"",onBackClick:this.props.onBackClick,currentCardKey:this.props.currentCardKey,siblings:this.props.siblings,onSiblingClick:this.props.onSiblingClick});if(this.props.data.viewsRetentionGraph.length===0)return c("React").createElement("div",{className:"_2qos"},t,c("React").createElement(r,{isAmbientLive:this.props.isAmbientLive}));return c("React").createElement("div",{className:"_2qos"},t,c("React").createElement(c("VideoAssetInsightsInfo.react"),{className:"_4qbz",alignH:"right",tooltip:j._("Audience Retention indicates the points in your video when viewers stopped watching.")}),c("React").createElement(c("VideoAssetInsightsAudienceRetention.react"),{data:this.props.data,onChartHover:this.props.onChartHover,selectedBreakdown:this.state.selectedBreakdown,isZoomed:this.state.isZoomed,videoDurationInSec:this.props.videoDurationInSec,earliestPostCreationTime:this.props.earliestPostCreationTime}),c("React").createElement(q,{shown:this.props.videoDurationInSec>o,selected:this.state.isZoomed,onClick:this.$VideoAssetInsightsAudienceRetentionCard7.bind(this)}),c("React").createElement(c("VideoAssetInsightsBarList.react"),null,this.$VideoAssetInsightsAudienceRetentionCard4()))};p.LABEL=j._("Audience Retention");function q(s){if(!s.shown)return null;var t=j._("Zoom Chart");return c("React").createElement(c("ClickableAreaButton.react"),{onClick:s.onClick,label:t,pressed:s.selected},c("React").createElement("div",{className:"_ssa"+(s.selected?" _ssb":"")},c("React").createElement(c("Image.react"),{src:s.selected?h("419666"):h("419667")}),c("React").createElement("span",{className:"_3-9a"},t)))}function r(s){var t=s.isAmbientLive?j._("Data is unavailable for continuous live videos."):j._("Data is unavailable, check back soon");return c("React").createElement(c("Grid.react"),{cols:1,alignv:"top",align:"center"},c("React").createElement(n,null,c("React").createElement(c("XUIText.react"),{className:"_5vpc",display:"block"},"--")),c("React").createElement(n,null,c("React").createElement("div",{className:"_5vpd"},j._("Audience Retention"))),c("React").createElement(n,null,c("React").createElement("div",{className:"_5vpe"},c("React").createElement(c("Image.react"),{className:"_5vpi",src:h("469371")}),c("React").createElement(c("XUIText.react"),{className:"_5vpk",display:"block"},t))))}f.exports=p}),null);