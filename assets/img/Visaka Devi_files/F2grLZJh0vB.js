if (self.CavalryLogger) { CavalryLogger.start_js(["BeTYg"]); }

__d("ScrollColumn.react",["cx","invariant","SubscriptionsHandler","joinClasses","throttle","tidyEvent","Arbiter","Event","React","ReactDOM","Vector","ViewportBounds"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=c("React").PropTypes,k="ScrollColumn/adjust",l=c("React").createClass({displayName:"ScrollColumn",_subscriptionsHandler:null,propTypes:{left:j.string,topOffset:j.number,zIndex:j.number},getDefaultProps:function m(){return{left:"",topOffset:0,zIndex:0}},_scroll:0,_scrollDelta:0,getInitialState:function m(){return{fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0}},render:function m(){__p&&__p();var n="auto",o=this.state.fixedLeft,p="auto";if(this.state.fixed==="bottom")n=this.state.fixedBottom;else if(this.state.fixed==="top")p=this.state.fixedTop;else{o="auto";p=this.state.top}var q=c("joinClasses")(this.props.className,"_5ss7");return c("React").createElement("div",{className:q,ref:"container"},c("React").createElement("div",{className:"_5ss8"+(this.state.fixed?" fixed_always":""),ref:"column",style:{bottom:n,left:o,top:p,zIndex:this.props.zIndex}},this.props.children))},componentDidMount:function m(){this._subscriptionsHandler=new(c("SubscriptionsHandler"))();this._subscriptionsHandler.addSubscriptions(c("tidyEvent")(c("Arbiter").subscribe(k,function(){this._adjust()}.bind(this))),c("tidyEvent")(c("Event").listen(window,"resize",c("throttle")(this._adjust))),c("tidyEvent")(c("Event").listen(window,"scroll",this._onScroll)),c("tidyEvent")(c("ViewportBounds").subscribe("change",this._adjust)));this._adjust()},componentDidUpdate:function m(n,o){if(o.fixed!==this.state.fixed)c("Arbiter").inform("reflow")},componentWillUnmount:function m(){this._subscriptionsHandler&&this._subscriptionsHandler.release()},_onScroll:function m(event){var n=c("Vector").getScrollPosition().y;this._scrollDelta=n-this._scroll;this._scroll=n;this._adjust()},_adjust:function m(){__p&&__p();if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return}if(this._scrollDelta>0)if(this._isBottomOfColumnVisible()){this._setFixedToBottom();return}if(this._scrollDelta<0)if(this._isTopOfColumnVisible()){this._setFixedToTop();return}var n=this._getTopPositionForRef("column"),o=this._getTopPositionForRef("container"),p=n-o;this._setNotFixed(p)},_getTopPositionForRef:function m(n){var o=this.refs[n];o||i(0);var p=c("Vector").getElementPosition(c("ReactDOM").findDOMNode(o),"viewport").y;if(this._scroll<0)p+=this._scroll;return p},_getTopBoundWithOffset:function m(){return c("ViewportBounds").getTop()+this.props.topOffset},_isContainerBelowViewportTop:function m(){var n=this._getTopPositionForRef("container");return n>=this._getTopBoundWithOffset()},_isColumnLargerThanViewport:function m(){var n=c("Vector").getViewportDimensions().y-c("ViewportBounds").getBottom()-this._getTopBoundWithOffset();return c("ReactDOM").findDOMNode(this.refs.column).offsetHeight>n},_isBottomOfColumnVisible:function m(){var n=this._getTopPositionForRef("column"),o=c("Vector").getElementDimensions(c("ReactDOM").findDOMNode(this.refs.column),"viewport").y,p=n+o;return p<=c("Vector").getViewportDimensions().y-c("ViewportBounds").getBottom()},_isTopOfColumnVisible:function m(){var n=this._getTopPositionForRef("column");return n>=this._getTopBoundWithOffset()},_getFixedLeft:function m(){return c("Vector").getElementPosition(c("ReactDOM").findDOMNode(this.refs.container),"viewport").x},_setFixedToBottom:function m(){this.setState({fixed:"bottom",fixedBottom:c("ViewportBounds").getBottom(),fixedLeft:this.props.left===""?this._getFixedLeft():this.props.left})},_setFixedToTop:function m(){this.setState({fixed:"top",fixedLeft:this.props.left===""?this._getFixedLeft():this.props.left,fixedTop:this._getTopBoundWithOffset()})},_setNotFixed:function m(n){this.setState({fixed:false,top:n})},_updateContainerHeight:function m(){c("ReactDOM").findDOMNode(this.refs.container).style.height=c("ReactDOM").findDOMNode(this.refs.column).offsetHeight+this.state.top+"px"},_updateColumnWidth:function m(){c("ReactDOM").findDOMNode(this.refs.column).style.width=c("ReactDOM").findDOMNode(this.refs.container).offsetWidth+"px"}});l.EVENT_SHOULD_ADJUST=k;f.exports=l}),null);
__d("FollowRequestResultEnum",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({REVERT:"revert"})}),null);
__d("SeeFirstNuxEvents",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"})}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/feed/control/see_first/nux/",{})}),null);
__d("ProfileHoverButton",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","FollowRequestResultEnum","MenuStaticItem","ProfileSubFollowStatus","Run","SeeFirstNuxEvents","SubscribeButton","SubscriptionsHandler","XFeedSeeFirstNuxController"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=1,k="live_notifs",l={follow:0,see_first:0,subscribe_all_live_notifications:k,subscribe_suggested_live_notifications:k,subscribe_none_live_notifications:k};function m(n,o,p,q,r){"use strict";__p&&__p();this.$ProfileHoverButton1=o;this.$ProfileHoverButton2=p;this.$ProfileHoverButton3=r;this.$ProfileHoverButton4=q;this.$ProfileHoverButton5=n;this.$ProfileHoverButton6=null;this.$ProfileHoverButton7=new(c("SubscriptionsHandler"))();this.$ProfileHoverButton2.subscribe("itemclick",function(s,t){__p&&__p();if(t.item instanceof c("MenuStaticItem"))return;var u=t.item.getValue();if(u==="unfollow"){c("Arbiter").inform(c("SubscribeButton").UNSUBSCRIBED,{profile_id:this.$ProfileHoverButton3.id});c("Arbiter").inform(c("FeedBlacklistButton").BLACKLIST,{profile_id:this.$ProfileHoverButton3.id});if(this.$ProfileHoverButton4)this.$ProfileHoverButton4.hide();this.$ProfileHoverButton5.getPopover().hideLayer()}else{this.setSelected(u);if(u===c("ProfileSubFollowStatus").SEE_FIRST&&this.$ProfileHoverButton4){this.$ProfileHoverButton4.hide();this.logNux(c("SeeFirstNuxEvents").SEE_FIRST_SELECTED)}}}.bind(this));this.$ProfileHoverButton7.addSubscriptions(c("Arbiter").subscribe(c("SubscribeButton").SUBSCRIBED,this.setSelected.bind(this,c("ProfileSubFollowStatus").REGULAR_FOLLOW)));this.$ProfileHoverButton7.addSubscriptions(c("Arbiter").subscribe(c("FollowRequestResultEnum").REVERT,this.handleResponse.bind(this)));if(this.$ProfileHoverButton4){this.$ProfileHoverButton4.show();this.logNux(c("SeeFirstNuxEvents").IMP);this.$ProfileHoverButton7.addSubscriptions(c("Event").listen(c("DOM").find(this.$ProfileHoverButton4.getRoot(),"._50zy"),"click",this.logNux.bind(this,c("SeeFirstNuxEvents").XOUT)))}c("Run").onLeave(this.cleanUp.bind(this))}m.prototype.logNux=function(event){"use strict";var n=c("XFeedSeeFirstNuxController").getURIBuilder().getURI();new(c("AsyncRequest"))(n).setData({event:event,id:this.$ProfileHoverButton3.id}).send()};m.prototype.getButtons=function(){"use strict";return c("DOM").scry(this.$ProfileHoverButton1,"._3oz-")};m.prototype.getSelected=function(){"use strict";var n=this.getButtons(),o=null;n.forEach(function(p){var q=p.getAttribute("data-status");if(c("CSS").matchesSelector(p,"._52-0"))o=q});return o};m.prototype.setSelected=function(n){"use strict";__p&&__p();this.$ProfileHoverButton6=this.getSelected();var o=this.getButtons(),p=l[n];o.forEach(function(q){if(p===k)return;var r=q.getAttribute("data-status");if(r===n)c("CSS").addClass(q,"_52-0");else c("CSS").removeClass(q,"_52-0")});this.$ProfileHoverButton2.forEachItem(function(q){__p&&__p();if(!q.getValue)return;var r=q.getValue(),s=l[r];if(r==="unfollow")return;var t=q.getRoot();if(r===n)c("CSS").addClass(t,"_52-0");else if(s===p)c("CSS").removeClass(t,"_52-0")})};m.prototype.handleResponse=function(event,n){"use strict";if(n.id!==this.$ProfileHoverButton3.id||n.location!==j)return;if(event===c("FollowRequestResultEnum").REVERT)this.revert()};m.prototype.revert=function(){"use strict";if(this.$ProfileHoverButton6===null)return;this.setSelected(this.$ProfileHoverButton6)};m.prototype.cleanUp=function(){"use strict";this.$ProfileHoverButton7&&this.$ProfileHoverButton7.release();this.$ProfileHoverButton7=null;this.$ProfileHoverButton1=null;this.$ProfileHoverButton2=null;this.$ProfileHoverButton3=null};f.exports=m}),null);
__d("SeeFirstProfilePopoverMenu",["PopoverMenu"],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c("PopoverMenu"));i=h&&h.prototype;j.prototype._onMenuDone=function(k){"use strict"};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("MessengerHotLikeSVG.react",["cssVar","cx","fbt","CurrentUser","MessengerEnvironment","React","joinClasses","uniqueID"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("React").PropTypes,n="transparent",o=j._("Thumbs Up Sign");k=babelHelpers.inherits(p,c("React").Component);l=k&&k.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.state={titleId:c("uniqueID")()},r}p.prototype.render=function(){var q=c("CurrentUser").isWorkUser()?"#1479fb":"#0084ff",r=this.props.color||(c("MessengerEnvironment").messengerui?q:"#4080ff");return c("React").createElement("div",{className:c("joinClasses")(this.props.className,"_1i1j")},c("React").createElement("svg",{"aria-labelledby":this.state.titleId,height:"100%",role:"img",version:"1.1",viewBox:"0 0 256 256",width:"100%",x:"0px",y:"0px"},c("React").createElement("title",{id:this.state.titleId},o),c("React").createElement("g",null,c("React").createElement("g",null,c("React").createElement("polyline",{fill:n,points:"256,0 258,256 2,258 "}),c("React").createElement("path",{d:"M254,147.1c0-12.7-4.4-16.4-9-20.1c2.6-4.2,5.1-10.2,5.1-18c0-15.8-12.3-25.7-32-25.7h-52c-0.5,0-1-0.5-0.9-1 c1.4-8.6,3-24,3-31.7c0-16.7-4-37.5-19.3-45.7c-4.5-2.4-8.3-3.7-14.1-3.7c-8.8,0-14.6,3.6-16.7,5.9c-1.3,1.4-1.9,3.3-1.8,5.2 l1.3,34.6c0.2,2.8-0.3,5.4-1.6,7.7l-24,47.8c-1.7,3.5-4.2,6.6-7.6,8.5c-3.5,2-6.5,5.9-6.5,9.5v94.8C78,230,94,238,112.3,238h86.1 c13.5,0,22.4-4.5,27.2-13.5c4.4-8.2,3.2-15.8,1.4-21.5c7.4-2.3,14.8-8,16.9-18.3c1.3-6.6-0.7-12.1-2.9-16.2 C247.5,165,254,159.8,254,147.1z",fill:r,stroke:n,strokeLinecap:"round",strokeWidth:"5%"}),c("React").createElement("path",{fill:r,d:"M56.2,100H13.8C7.3,100,2,105.3,2,111.8v128.5c0,6.5,5.3,11.8,11.8,11.8h42.4c6.5,0,11.8-5.3,11.8-11.8V111.8 C68,105.3,62.7,100,56.2,100z"})))))};p.propTypes={color:m.string};f.exports=p}),null);
__d("MNPageComposerUtils",["QE2Logger"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h="product_tagging_minimum_number_products";i.prototype.shouldShowMessagingButton=function(j,k,l,m,n,o,p){var q=j&&j>1&&p!=null&&p;return q||!(j&&j>1||k&&k>1||!j&&!k||l||m||n||o)};i.prototype.isProductTaggerPostButtonDisabled=function(j,k){if(j>0)c("QE2Logger").logExposureForUser(h);return j>0&&j<k};function i(){}f.exports=new i()}),null);
__d("LeftFillRightFitLayout.react",["invariant","Layout.react","React"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("Layout.react").Column,l=c("Layout.react").FillColumn;i=babelHelpers.inherits(m,c("React").Component);j=i&&i.prototype;function m(n){j.constructor.call(this,n)}m.prototype.$LeftFillRightFitLayout1=function(){var n=[],o=this.props.children;o&&o.length===2||h(0);c("React").Children.forEach(this.props.children,function(p){return n.push(p)},this);return{firstChild:n[0],secondChild:n[1]}};m.prototype.render=function(){var n=this.$LeftFillRightFitLayout1();return c("React").createElement(c("Layout.react"),{className:this.props.className,style:this.props.style},c("React").createElement(l,{className:this.props.fillColumnClassName},n.firstChild),c("React").createElement(k,{className:this.props.fitColumnClassName},n.secondChild))};f.exports=m}),null);
__d("VertexScrollColumn.react",["DOMContainer.react","React","ScrollColumn.react"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("React").PropTypes,k=5,l=10;h=babelHelpers.inherits(m,c("React").Component);i=h&&h.prototype;m.prototype.render=function(){"use strict";var n=c("React").createElement(c("ScrollColumn.react"),{topOffset:l,ref:"scrollColumn",zIndex:k},c("React").createElement(c("DOMContainer.react"),null,this.props.content));return n};function m(){"use strict";h.apply(this,arguments)}m.propTypes={content:j.object.isRequired};f.exports=m}),null);
__d("TimelineCapsuleUtilities",["CSS"],(function a(b,c,d,e,f,g){__p&&__p();var h={setFirstUnit:function i(j){__p&&__p();var k=true;for(var l=0;l<j.childNodes.length;++l){var m=j.childNodes[l];if(m.id.indexOf("tl_unit_")===0)if(k){k=false;c("CSS").addClass(m,"firstUnit")}else{c("CSS").removeClass(m,"firstUnit");break}}}};f.exports=h}),null);
__d("TimelineComposer",["csx","Arbiter","Bootloader","ComposerXMarauderLogger","ComposerXStore","CSS","DOM","DOMQuery","Event","Parent","ReloadPage","Run","TimelineCapsuleUtilities","$","getObjectValues","goURI","tidyEvent"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=void 0,j=void 0;function k(){c("ComposerXMarauderLogger").logCompleted(i.id)}function l(n){__p&&__p();if(n.hidePost){k();return}if(n.redirect){var o=c("ComposerXStore").getAllForComposer(n.composer_id);c("getObjectValues")(o).forEach(function(p){if(p.reset)p.reset(p)});c("goURI")(n.redirect);k();return}if(!n.streamStory){c("ReloadPage").now();return}if(n.backdatedTime){c("Bootloader").loadModules(["TimelineStoryPublisher"],function(p){p.publish(n)},"TimelineComposer");k();return}m.renderCapsuleBasedStory(c("$")(n.composer_id),n.streamStory);c("Arbiter").inform("TimelineComposer/on_after_publish",n.streamStory,c("Arbiter").BEHAVIOR_PERSISTENT);k()}var m={init:function n(o){if(!i){j=c("Arbiter").subscribe("composer/publish",function(event,p){l(p)});c("Run").onLeave(m.destroy)}i=c("$")(o)},destroy:function n(){j&&j.unsubscribe()},renderCapsuleBasedStory:function n(o,p){__p&&__p();var q=c("Parent").byClass(o,"fbTimelineCapsule");if(!q)return;var r=c("DOMQuery").scry(q,".fbTimelineUnit")[0],s=r.nextSibling;if(s&&s.getAttribute("data-spine"))r=r.nextSibling;var t=c("DOM").insertAfter(r,p)[0];if(c("CSS").hasClass(t,"fbTimelineUnit"))t=c("DOM").find(t,"div.timelineUnitContainer");c("Bootloader").loadModules(["Animation"],function(u){new u(t).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(u.ease.both).go()},"TimelineComposer");c("TimelineCapsuleUtilities").setFirstUnit(q)},getRoot:function n(){return i},initNUX:function n(o,p){c("tidyEvent")(c("Event").listen(o,"click",function(){var q=c("DOM").scry(p,"textarea")[0];q&&q.focus()}))}};f.exports=b.TimelineComposer||m}),null);
__d("ReactComposerFundraiserAttachmentContainer.react",["cx","fbt","ReactComposerContextTypes","FluxContainer","FluxStore","React","ReactComposerAttachmentPreview.react","ReactComposerFundraiserAttachmentActions","ReactComposerFundraiserAttachmentStore","ReactComposerLoggingName","ReactComposerTaggerActions","ReactComposerTaggerType","XUICloseButton.react","XUISpinner.react"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;function l(){var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.$ReactComposerFundraiserAttachmentContainer3=function(){c("ReactComposerTaggerActions").setTaggerData(this.context.composerID,c("ReactComposerLoggingName").FUNDRAISER_SPROUT,c("ReactComposerTaggerType").FUNDRAISER,{});c("ReactComposerFundraiserAttachmentActions").setMarkup(this.context.composerID,null)}.bind(this),n}l.getStores=function(){"use strict";return[c("ReactComposerFundraiserAttachmentStore")]};l.calculateState=function(m,n,o){"use strict";var p=o.composerID,q=c("ReactComposerFundraiserAttachmentStore").getMarkup(p),r=c("ReactComposerFundraiserAttachmentStore").isFetching(p);return{markup:q,showLoadingIndicator:r}};l.prototype.render=function(){"use strict";var m=this.state.markup?c("React").createElement("div",{className:"_2ane"},c("React").createElement(c("ReactComposerAttachmentPreview.react"),{markup:this.state.markup}),this.$ReactComposerFundraiserAttachmentContainer1()):null;return c("React").createElement("div",null,this.$ReactComposerFundraiserAttachmentContainer2(),m)};l.prototype.$ReactComposerFundraiserAttachmentContainer2=function(){"use strict";if(!this.state.showLoadingIndicator)return null;return c("React").createElement("div",{className:"_jg1 _239z"},c("React").createElement(c("XUISpinner.react"),{background:"light",size:"large"}),i._("Fetching preview"))};l.prototype.$ReactComposerFundraiserAttachmentContainer1=function(){"use strict";if(!this.state.markup)return null;return c("React").createElement("div",{className:"_40_q"},c("React").createElement(c("XUICloseButton.react"),{size:"medium",shade:"light",onClick:this.$ReactComposerFundraiserAttachmentContainer3}))};l.contextTypes=c("ReactComposerContextTypes");f.exports=c("FluxContainer").create(l,{withContext:true,withProps:true})}),null);
__d("ReactComposerPhotoTaggerButton.react",["cx","fbt","ComposerTargetData","React","ReactComponentWithPureRenderMixin","ReactComposerMediaUtils","TooltipLink.react","VideoUploadConfig","XUIAmbientNUX.react","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=c("React").PropTypes,k=c("React").createClass({displayName:"ReactComposerPhotoTaggerButton",mixins:[c("ReactComponentWithPureRenderMixin")],propTypes:{photoLimit:j.number.isRequired,hasData:j.bool,selected:j.bool,multimediaNuxShown:j.bool,onNUXCloseButtonClick:j.func},getDefaultProps:function l(){return{hasData:false,selected:false}},render:function l(){var m=c("joinClasses")("_2vwi _lnh"+(this.props.hasData?" _6xe":""),this.props.className),n=this._renderMultimediaAttachmentsNux(),o=void 0,p=this.props.photoLimit>1,q=c("VideoUploadConfig").allowMultimedia&&this.props.targetData.targetSupportsMultiMedia;if(p)if(q)o=i._("Add photos and videos to your post");else o=i._("Add photos or a video to your post");else o=i._("Add a photo or a video to your post");return c("React").createElement(c("TooltipLink.react"),{className:"_3xem","data-testid":"react-composer-photo-tagger",onClick:this._onSelect,tooltip:o},c("React").createElement("span",{className:"accessible_elem"},this.props.photoLimit>1?i._("Add photos"):i._("Add photo")),c("React").createElement("div",{className:m}),n)},_renderMultimediaAttachmentsNux:function l(){return c("React").createElement(c("XUIAmbientNUX.react"),{position:"below",width:"custom",contextRef:function(){return this.refs.fileInput}.bind(this),customwidth:400,shown:this.props.multimediaNuxShown,onCloseButtonClick:this.props.onNUXCloseButtonClick},i._("You can now add photos and videos to the same post."))}});f.exports=k}),null);
__d("Sticker.react",["cx","fbt","Arbiter","MessengerHotLikeSVG.react","React","ReactDOM","PaddedStickerConfig","StickerConstants","emptyFunction","getElementPosition","getObjectValues","joinClasses","setIntervalAcrossTransitions"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("React").PropTypes,k=83,l=5e3,m=10,n={CLICK:"click",HOVER:"hover",LOAD_AND_HOVER:"load_and_hover",ANIMATE_FOREVER:"animate_forever"},o=c("React").createClass({displayName:"Sticker",propTypes:{accessibilityLabel:j.string,animationTime:j.number,animationTrigger:j.oneOf(c("getObjectValues")(n)),forceCursorPointer:j.bool,frameCount:j.number.isRequired,frameRate:j.number,framesPerCol:j.number.isRequired,framesPerRow:j.number.isRequired,onAttachmentLoad:j.func,onStickerClick:j.func,packID:j.string,packName:j.string,sourceURI:j.string.isRequired,sourceWidth:j.number.isRequired,sourceHeight:j.number.isRequired,spriteURI:j.string,stickerID:j.string,subscribedThreadID:j.string,testID:j.string},getInitialState:function p(){return{index:0,hasAnimated:false,unsubscribeID:null}},getDefaultProps:function p(){return{animationTime:l,accessibilityLabel:"",forceCursorPointer:false,frameRate:k,onStickerClick:c("emptyFunction"),packID:null,packName:""}},componentDidMount:function p(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad();this._stopIntervalID=0;if((this.props.animationTrigger===n.LOAD_AND_HOVER||this.props.animationTrigger===n.ANIMATE_FOREVER)&&this.props.frameCount>1&&this.props.spriteURI)this.startAnimation();if(this.props.subscribedThreadID&&this.props.frameCount>1){var q=c("Arbiter").subscribe(this.props.subscribedThreadID,function(r,s){this.isScrolledIntoView(s.scrollTop,s.viewHeight,s.top)}.bind(this));this.setState({unsubscribeID:q})}},componentWillUnmount:function p(){if(this.state.unsubscribeID)c("Arbiter").unsubscribe(this.state.unsubscribeID);if(this.isAnimating())clearInterval(this._stopIntervalID)},isAnimating:function p(){return!!this._stopIntervalID},getWidth:function p(){return Math.floor(this.props.sourceWidth)},getHeight:function p(){return Math.floor(this.props.sourceHeight)},preloadSprite:function p(){var q=new window.Image();q.onload=function(){if(this.isMounted()&&!this.state.hasAnimated){this.setState({hasAnimated:true});this._stopIntervalID=c("setIntervalAcrossTransitions")(this.incrementFrameIndex,this.props.frameRate)}}.bind(this);if(c("PaddedStickerConfig").ChatPaddedAnimatedStickerGK&&this.props.paddedSpriteURI)q.src=this.props.paddedSpriteURI;else q.src=this.props.spriteURI},isScrolledIntoView:function p(q,r,s){var t=c("getElementPosition")(c("ReactDOM").findDOMNode(this)),u=q+t.y-s,v=q+r,w=u+t.height;if(this.props.frameCount>1&&!this.state.hasAnimated&&w-m<=v&&u+m>=q)this.startAnimation()},startAnimation:function p(){if(!this.state.hasAnimated&&this.props.spriteURI)this.preloadSprite();else if(!this.isAnimating()){this.setState({hasAnimated:true});this._stopIntervalID=c("setIntervalAcrossTransitions")(this.incrementFrameIndex,this.props.frameRate)}},stopAnimation:function p(){this.setState({index:0});clearInterval(this._stopIntervalID);this._stopIntervalID=0},toggleAnimation:function p(){if(this.isAnimating())this.stopAnimation();else this.startAnimation()},shouldStopAnimating:function p(){var q=this.state.index%this.props.frameCount;if(this.props.animationTrigger===n.ANIMATE_FOREVER)return false;if(!(q===0&&this.state.index*this.props.frameRate>this.props.animationTime))return false;if(this.props.animationTrigger===n.CLICK)return true;return!this.state.isHovered},incrementFrameIndex:function p(){if(this.shouldStopAnimating())this.stopAnimation();else this.setState({index:this.state.index+1})},getStyle:function p(){__p&&__p();var q=0,r=this.props.spriteURI;if(c("PaddedStickerConfig").ChatPaddedAnimatedStickerGK&&this.props.paddedSpriteURI){r=this.props.paddedSpriteURI;var s=240/Math.min(this.getHeight(),this.getWidth());q=Math.floor(c("StickerConstants").SPRITE_PADDING/s)}var t=this.state.index%this.props.frameCount,u=t%this.props.framesPerRow*(this.getWidth()+q*2)+q,v=Math.floor(t/this.props.framesPerRow)*(this.getHeight()+q*2)+q,w=this.props.frameCount>1&&this.props.animationTrigger===n.CLICK||this._isStickerClickable(this.props.packID),x=this.props.forceCursorPointer||w?"pointer":"default";if(!this.state.hasAnimated||!this.props.spriteURI)return{backgroundImage:this._isHotLike()?null:"url("+this.props.sourceURI+")",backgroundRepeat:"no-repeat",backgroundSize:this.getWidth()+"px "+this.getHeight()+"px",cursor:x,height:this.getHeight(),width:this.getWidth()};else return{backgroundImage:"url("+r+")",backgroundPosition:-u+"px "+-v+"px",backgroundSize:(this.getWidth()+q*2)*this.props.framesPerRow+"px "+(this.getHeight()+q*2)*this.props.framesPerCol+"px",cursor:x,height:this.getHeight(),width:this.getWidth(),imageRendering:"-webkit-optimize-contrast"}},_isStickerClickable:function p(q){return q&&q!=c("StickerConstants").MOBILE_LIKE_STICKER_PACK_ID&&q!=c("StickerConstants").GRAVEYARD_PACK_ID},onStickerClick:function p(){if(!this._isStickerClickable(this.props.packID))return;if(this.props.onStickerClick)this.props.onStickerClick(this.props.packID,this.props.stickerID)},mouseLeft:function p(){this.setState({isHovered:false})},mouseEntered:function p(){this.setState({isHovered:true});if(!this.isAnimating())this.startAnimation()},tabFocusSelected:function p(){this.setState({isHovered:true});if(!this.isAnimating())this.startAnimation()},tabFocusUnselected:function p(){this.setState({isHovered:false})},getAriaLabel:function p(){return i._("{pack name} {sticker name} sticker",[i.param("pack name",this.props.packName),i.param("sticker name",this.props.accessibilityLabel)])},render:function p(){__p&&__p();var q=void 0,r=void 0;if(this.props.animationTrigger===n.CLICK&&this.props.frameCount>1&&this.props.spriteURI)q=true;else if((this.props.animationTrigger===n.HOVER||this.props.animationTrigger===n.LOAD_AND_HOVER)&&this.props.frameCount>1&&this.props.spriteURI)r=true;var s=q?this.toggleAnimation:null;if(this.props.packID)s=this.onStickerClick;var t=this.props.className,u=null;if(this._isHotLike()){t=c("joinClasses")(t,"_576q");u=c("React").createElement(c("MessengerHotLikeSVG.react"),{color:this.props.customColor})}return c("React").createElement("div",{"aria-label":this.getAriaLabel(),className:t,"data-testid":this.props.testID,onBlur:this.tabFocusUnselected,onClick:s,onFocus:this.tabFocusSelected,onMouseEnter:r?this.mouseEntered:null,onMouseLeave:r?this.mouseLeft:null,role:"img",style:this.getStyle(),tabIndex:"0"},u)},_isHotLike:function p(){if(!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return this.props.stickerID===c("StickerConstants").HOT_LIKE_SMALL_STICKER_ID||this.props.stickerID===c("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID||this.props.stickerID===c("StickerConstants").HOT_LIKE_LARGE_STICKER_ID;return false}});f.exports=o}),null);
__d("StickerUtils",[],(function a(b,c,d,e,f,g){__p&&__p();var h={getScaledDimensions:function i(j,k,l){__p&&__p();var m,n,o;if(k>j){o=l/k;m=j*o;n=k*o}else{o=l/j;m=j*o;n=k*o}return{height:Math.round(m),width:Math.round(n)}},capitalizeWords:function i(j){var k=j.split(" ");for(var l=0;l<k.length;l++){var m=k[l].charAt(0).toUpperCase();k[l]=m+k[l].substr(1)}return k.join(" ")}};f.exports=h}),null);
__d("ReactComposerStickerComponent.react",["ix","cx","fbt","Arbiter","Image.react","React","ReactComposerEvents","ReactComposerLoggingName","ReactComposerPrefillStore","ReactComposerTaggerActions","ReactComposerTaggerType","ShimButton.react","Sticker.react","StickerAssetType","StickerConstants","StickerUtils","XStickerAssetController","fbglyph"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k,l;k=babelHelpers.inherits(m,c("React").Component);l=k&&k.prototype;function m(){var n,o;"use strict";for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=l.constructor).call.apply(n,[this].concat(q)),this.$ReactComposerStickerComponent3=function(){c("ReactComposerTaggerActions").setTaggerData(this.props.composerID,c("ReactComposerLoggingName").STICKER_SPROUT,c("ReactComposerTaggerType").STICKER,null)}.bind(this),this.$ReactComposerStickerComponent4=function(){var s=c("ReactComposerPrefillStore").getAndEraseNestedField(this.props.composerID,["taggersData",c("ReactComposerTaggerType").STICKER]);if(s)c("ReactComposerTaggerActions").setTaggerDataWithoutLogging(this.props.composerID,c("ReactComposerTaggerType").STICKER,s)}.bind(this),o}m.prototype.render=function(){"use strict";if(!(this.props.sticker&&this.props.sticker.stickerID))return null;var n=c("StickerUtils").getScaledDimensions(c("StickerConstants").TRAY_SIZE,c("StickerConstants").TRAY_SIZE,c("StickerConstants").TRAY_SIZE),o=n.height,p=n.width,q=c("XStickerAssetController").getURIBuilder().setInt("sticker_id",this.props.sticker.stickerID),r=c("React").createElement(c("Sticker.react"),{accessibilityLabel:this.props.sticker.accessibilityLabel,animationTrigger:"load_and_hover",frameCount:1,frameRate:c("StickerConstants").DEFAULT_FRAME_RATE,framesPerCol:1,framesPerRow:1,sourceHeight:o,sourceURI:q.setEnum("image_type",c("StickerAssetType").IMAGE).getURI().toString(),sourceWidth:p,stickerID:this.props.sticker.stickerID.toString(),className:"_x85"});return c("React").createElement("div",{className:"_x88"},c("React").createElement("span",{className:"_x8a"},r,this.$ReactComposerStickerComponent2()))};m.prototype.$ReactComposerStickerComponent2=function(){"use strict";return c("React").createElement(c("ShimButton.react"),{className:"_x8b",onClick:this.$ReactComposerStickerComponent3},c("React").createElement(c("Image.react"),{alt:j._("Remove sticker"),src:h("125920")}))};m.prototype.componentWillMount=function(){"use strict";this.$ReactComposerStickerComponent4();this.$ReactComposerStickerComponent1=c("Arbiter").subscribe(c("ReactComposerEvents").SET_PREFILL_DATA+this.context.composerID,this.$ReactComposerStickerComponent4)};m.prototype.componentWillUnmount=function(){"use strict";this.$ReactComposerStickerComponent1&&this.$ReactComposerStickerComponent1.unsubscribe();this.$ReactComposerStickerComponent1=null};f.exports=m}),null);
__d("ProgressBarBase",["emptyFunction","requestAnimationFrame","removeFromArray"],(function a(b,c,d,e,f,g){__p&&__p();var h=[];function i(j,k){"use strict";__p&&__p();this._min=j||0;this._max=k||100;this._initialPosition=0;this._position=0;this._initialVelocity=0;this._velocity=0;this._acceleration=0;this.useAcceleration=true;this._targetPosition=0;this._targetTime=0;this._startTime=null;this._onComplete=c("emptyFunction")}i.prototype.setPosition=function(j){"use strict";j=this._normalizePosition(j);this._initialPosition=j;this._position=j;this.updateMeter(this._position);this.stop();return this};i.prototype.setCompleteHandler=function(j){"use strict";this._onComplete=j||c("emptyFunction");return this};i.prototype.setTarget=function(j,k){"use strict";__p&&__p();this._stopAnimating();this._clearOnCompleteTimeout();this._targetPosition=j;var l=this._normalizePosition(j);this._targetTime=k;this._initialVelocity=this._velocity;this._initialPosition=this._position;if(this.useAcceleration)this._acceleration=2*(l-this._initialPosition-this._initialVelocity*k)/(k*k);else{this._acceleration=0;this._velocity=this._initialVelocity=(l-this._initialPosition)/k}if(this._position>=l)this._onComplete();else this._start();return this};i.prototype.setNoAcceleration=function(j){"use strict";this.useAcceleration=!j;return this};i.prototype._clearOnCompleteTimeout=function(){"use strict";b.clearTimeout(this._onCompleteTimeout)};i.prototype.stop=function(){"use strict";this._clearOnCompleteTimeout();this._velocity=0;this._initialVelocity=0;this._acceleration=0;this._stopAnimating();return this};i.prototype._start=function(){"use strict";this._startTime=Date.now();this._onCompleteTimeout=b.setTimeout(function(){this.setPosition(this._targetPosition);this._onComplete()}.bind(this),this._targetTime);this._startAnimating();return this};i.prototype._loop=function(){"use strict";__p&&__p();var j=Date.now()-this._startTime;this._position=.5*this._acceleration*j*j+this._initialVelocity*j+this._initialPosition;var k=this._velocity;this._velocity=this._acceleration*j+this._initialVelocity;var l=k<0!==this._velocity<0;if(this._position>this._normalizePosition(this._targetPosition)||l){this.setPosition(this._targetPosition);this._onComplete()}else this.updateMeter(this._position)};i.prototype.updateMeter=function(j){"use strict";throw new Error("Unimplemented function: updateMeter")};i.prototype._normalizePosition=function(j){"use strict";return Math.min(Math.max((j-this._min)/(this._max-this._min),0),1)};i.prototype._startAnimating=function(){"use strict";if(!h.includes(this)){h.push(this);if(h.length===1)c("requestAnimationFrame")(i.prototype._requestAnimationFrameCallback)}};i.prototype._stopAnimating=function(){"use strict";c("removeFromArray")(h,this)};i.prototype._requestAnimationFrameCallback=function(){"use strict";h.forEach(function(j){j._loop()});if(h.length)c("requestAnimationFrame")(i.prototype._requestAnimationFrameCallback)};i.setPosition=function(j,k){"use strict";j.setPosition(k)};i.setTarget=function(j,k,l){"use strict";j.setTarget(k,l)};f.exports=i}),null);
__d("ProgressBar",["cx","csx","ProgressBarBase","CSS","Style","DOM"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;j=babelHelpers.inherits(l,c("ProgressBarBase"));k=j&&j.prototype;function l(m,n,o){"use strict";k.constructor.call(this,n,o);this._root=m;this._meter=c("DOM").find(m,"div._5e4k");this._meter2=c("DOM").scry(m,"div._5e2g")[0]}l.prototype.getRoot=function(){"use strict";return this._root};l.prototype.updateMeter=function(m){"use strict";__p&&__p();var n=Math.min(Math.max(m,0),1);c("CSS").conditionClass(this._meter,"_5e2d",n<=0);c("CSS").conditionClass(this._meter,"_5e4j",n>=1);this._root.setAttribute("aria-valuenow",n*100);n=n*100+"%";c("Style").set(this._meter,"width",n);if(this._meter2){c("Style").set(this._meter2,"left",n);c("Style").set(this._meter2,"width",n)}};l.prototype.changeLabel=function(m){"use strict";var n=c("DOM").scry(this._root,"span._5e2h");n.forEach(function(o){c("DOM").setContent(o,m)});return this};f.exports=l}),null);
__d("CapitalizedNameMentionsStrategy",["DocumentMentionsRegex"],(function a(b,c,d,e,f,g){"use strict";var h=1,i=new RegExp("(^|[^#])((?:"+c("DocumentMentionsRegex").NAME+"{"+h+",})$)"),j={name:"CapitalizedNameMentionsStrategy",findMentionableString:function k(l){var m=i.exec(l);if(m!==null)return{matchingString:m[2],leadOffset:m[2].length};return null}};f.exports=j}),null);
__d("ComposerNUXType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CAMERA_NUX:"camera_nux_seen",ADD_MORE_NUX:"add_more_nux_seen",OGCOMPOSER_NUX:"ogcomposer_nux_seen",FACEREC_SUGGESTIONS_NUX:"facerec_suggestions_nux_seen",TAGGING_FLYOUT_NUX:"tagging_flyout_nux_seen",SHARER_MINUTIAE_NUX:"sharer_minutiae_nux_seen",ADD_STICKERS_NUX:"add_stickers_nux_seen",UPCOMING_BIRTHDAYS_NUX:"upcoming_birthdays_nux_seen",CROSS_POST_NUX:"cross_post_nux_seen",SLIDESHOW_NUX:"slideshow_nux_seen"})}),null);
__d("QE",["Banzai","Cache"],(function a(b,c,d,e,f,g){__p&&__p();var h="qe_log_exposure",i=60,j=new(c("Cache"))(),k={logExposure:function l(m,n){var o=n?m+"|"+n:m;if(j.has(o))return;var p={signal:true},q={name:m,id:null};if(n)q.id=n;c("Banzai").post(h,q,p);j.set(o,true,1,i)}};f.exports=k}),null);