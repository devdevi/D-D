if (self.CavalryLogger) { CavalryLogger.start_js(["067WN"]); }

__d("ReshareSharesheetBootloader.react",["BootloadedComponent.react","JSResource","React","UFIShareLink.react"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j="ufi_share_link_placeholder",k="ufi_share_link_loaded";h=babelHelpers.inherits(l,c("React").Component);i=h&&h.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=i.constructor).call.apply(m,[this].concat(p)),this.state={openOnInit:false,focusOnInit:false,interacted:false},this.$UFIShareNowMenuBootloader1=null,this.$UFIShareNowMenuBootloader2=function(){this.$UFIShareNowMenuBootloader1=setTimeout(function(){return this.setState({openOnInit:false,focusOnInit:false,interacted:true})}.bind(this),500)}.bind(this),this.$UFIShareNowMenuBootloader3=function(){clearTimeout(this.$UFIShareNowMenuBootloader1)}.bind(this),n}l.prototype.render=function(){__p&&__p();var m=this.state,n=m.openOnInit,o=m.focusOnInit,p=m.interacted,q=this.props,r=q.endpoint,s=q.endpointData,t=q.onShow,u=q.onHide,v=q.openOnInitOverride,w=c("React").createElement(c("UFIShareLink.react"),{href:"#","data-testid":j,onClick:function(){this.$UFIShareNowMenuBootloader3();this.setState({interacted:true,openOnInit:true})}.bind(this),onFocus:function(){this.$UFIShareNowMenuBootloader3();this.setState({interacted:true,focusOnInit:true})}.bind(this),onMouseOver:this.$UFIShareNowMenuBootloader2,onMouseOut:this.$UFIShareNowMenuBootloader3});if(p||v)return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("ReshareControllerContainer.react").__setRef("ReshareSharesheetBootloader.react"),bootloadPlaceholder:w,endpoint:r,endpointData:s,onShow:t,onHide:function(){this.setState({interacted:false});this.props.onHide&&this.props.onHide()}.bind(this),openOnInit:n||v,focusOnInit:o,testID:k});return w};f.exports=l}),null);
__d("ResharePrivacyStore",[],(function a(b,c,d,e,f,g){"use strict";var h={_audienceID:null,_audienceDisplayString:null,_iconSrc:null,initPrivacyOption:function i(j,k,l){this._audienceID=j;this._iconSrc=k;this._audienceDisplayString=l},getAudienceDisplayString:function i(){return this._audienceDisplayString},getAudienceID:function i(){return this._audienceID},getIconSrc:function i(){return this._iconSrc}};f.exports=h}),null);