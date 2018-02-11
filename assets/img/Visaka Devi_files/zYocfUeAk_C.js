if (self.CavalryLogger) { CavalryLogger.start_js(["ZAJ+U"]); }

__d("HomepagePanelPageInsights.react",["cx","fbt","FacepileRounded.react","Link.react","List.react","PagesEventObserver","PagesEventType","React","XUIButton.react","XUIButtonGroup.react","intlNumUtils"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=32,m=Object.freeze({LIKE:"like",VIEW:"view",POST:"post"});j=babelHelpers.inherits(n,c("React").PureComponent);k=j&&j.prototype;function n(o){k.constructor.call(this,o);this.state={selectedTab:m.LIKE}}n.prototype.$HomepagePanelPageInsights1=function(){return c("React").createElement("div",{className:"_2n5z"},c("React").createElement(c("XUIButtonGroup.react"),null,c("React").createElement(c("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===m.LIKE?" _2n60":""),label:i._("Likes"),onClick:this.$HomepagePanelPageInsights2.bind(this,m.LIKE)}),c("React").createElement(c("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===m.VIEW?" _2n60":""),label:i._("Views"),onClick:this.$HomepagePanelPageInsights2.bind(this,m.VIEW)}),c("React").createElement(c("XUIButton.react"),{className:"_2n5-"+(this.state.selectedTab===m.POST?" _2n60":""),label:i._("Posts"),onClick:this.$HomepagePanelPageInsights2.bind(this,m.POST)})))};n.prototype.$HomepagePanelPageInsights3=function(){var o=c("React").createElement("div",{className:"_1oso"},this.props.date_range);switch(this.state.selectedTab){case m.LIKE:return c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",{className:"_2n66"},c("React").createElement(c("Link.react"),{className:"_2n67",href:this.props.insights_uri.pageLikesURI},this.props.total_likes)),c("React").createElement("li",{className:"_2n68"},c("React").createElement(c("Link.react"),{className:"_2n69"+(this.props.new_likes===0?" _21t8":""),href:this.props.insights_uri.pageLikesURI},i._({"*":"{number} new likes this week","_1":"1 new like this week"},[i.plural(this.props.new_likes,"number")]))),c("React").createElement("li",{className:"_2n6a"},c("React").createElement(c("Link.react"),{ajaxify:this.props.friend_inviter_uri,"aria-label":"People who recently liked this Page",rel:"dialog"},c("React").createElement(c("FacepileRounded.react"),{imageSize:l,profiles:this.$HomepagePanelPageInsights4(),showNames:true}))));case m.VIEW:var p=c("React").createElement(c("Link.react"),{className:"_1osw"+(this.props.exceed_view_limit?" _1osx":""),href:this.props.insights_uri.pageViewsURI},c("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_views)),q=c("React").createElement(c("Link.react"),{className:"_1osz",href:this.props.insights_uri.pageViewsURI},i._({"*":"Page Views","_1":" Page View"},[i.plural(this.props.new_views)])),r=c("React").createElement(c("Link.react"),{className:"_1osw"+(this.props.exceed_view_limit?" _1osx":""),href:this.props.insights_uri.postReachURI},c("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_engagements)),s=c("React").createElement(c("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI},i._({"*":"Post Engagements","_1":" Post Engagement"},[i.plural(this.props.new_engagements)]));return c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,o),c("React").createElement("li",{className:"_1os-"},c("React").createElement(c("List.react"),{border:"light",direction:"horizontal",spacing:"none"},c("React").createElement("li",{className:"_1os_"},c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,p),c("React").createElement("li",null,q))),c("React").createElement("li",{className:"_1os_"},c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,r),c("React").createElement("li",null,s))))));case m.POST:var t=c("React").createElement(c("Link.react"),{className:"_1osw"+(this.props.exceed_post_limit?" _1osx":""),href:this.props.insights_uri.postReachURI},c("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_comments)),u=c("React").createElement(c("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI},i._({"*":"Comments","_1":" Comment"},[i.plural(this.props.new_comments)])),v=c("React").createElement(c("Link.react"),{className:"_1osw"+(this.props.exceed_post_limit?" _1osx":""),href:this.props.insights_uri.postReachURI},c("intlNumUtils").formatNumberWithThousandDelimiters(this.props.new_shares)),w=c("React").createElement(c("Link.react"),{className:"_1osz",href:this.props.insights_uri.postReachURI},i._({"*":"Shares","_1":" Share"},[i.plural(this.props.new_shares)]));return c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,o),c("React").createElement("li",{className:"_1os-"},c("React").createElement(c("List.react"),{border:"light",direction:"horizontal",spacing:"none"},c("React").createElement("li",{className:"_1os_"},c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,t),c("React").createElement("li",null,u))),c("React").createElement("li",{className:"_1os_"},c("React").createElement(c("List.react"),{border:"none",spacing:"none"},c("React").createElement("li",null,v),c("React").createElement("li",null,w))))));default:return c("React").createElement("div",null)}};n.prototype.$HomepagePanelPageInsights4=function(){var o=this.props.friends_data;return Object.keys(o).map(function(p){return{image_src:"https://graph.facebook.com/"+o[p].uniqueID+"/picture?height="+l*2+"&width="+l*2,name:o[p].name}})};n.prototype.$HomepagePanelPageInsights2=function(o){this.setState({selectedTab:o});c("PagesEventObserver").notify(c("PagesEventType").VISIT_INSIGHTS_TAB,this.props.page_id,{ref:"aymt_homepage_panel"})};n.prototype.render=function(){return c("React").createElement("div",null,this.$HomepagePanelPageInsights1(),this.$HomepagePanelPageInsights3())};f.exports=n}),null);
__d("legacy:FBXSaveExperience",["FBXSaveExperience"],(function a(b,c,d,e,f,g){b.FBXSaveExperience=c("FBXSaveExperience")}),3);