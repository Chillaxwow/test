System.register("chunks:///_virtual/Button_click_event.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,o,n,_,s,c,a,h,p,l,m,u,r;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,o=t._decorator,n=t.find,_=t.ScrollView,s=t.UITransform,c=t.view,a=t.Node,h=t.resources,p=t.SpriteFrame,l=t.Sprite,m=t.Vec2,u=t.UIOpacity,r=t.Component}],execute:function(){var d;i._RF.push({},"d53c2aGewpEKquoBSmMhjfS","Button_click_event",void 0);var v=o.ccclass;o.property,t("Button_click_event",v("Button_click_event")(d=function(t){function i(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).Scence_5=null,e.Scence_4=null,e.dt=0,e.some_button_on=0,e.last_on_button=1,e.scroll=null,e.Scence_3=null,e.showpage_ui=null,e.window_w=void 0,e.window_h=void 0,e.Move_frame=null,e.Quit_button=null,e.Copy_right=null,e.pdf_y=[],e}e(i,t);var o=i.prototype;return o.start=function(){this.Scence_5=n("Canvas/Scence_5"),this.Scence_4=n("Canvas/ScrollView/Scence_4"),this.Move_frame=n("Canvas/ScrollView/Move_frame"),this.scroll=n("Canvas/ScrollView").getComponent(_),this.showpage_ui=n("Canvas/UI_Button/Showpage");for(var t=0;t<6;t++)this.Scence_5.getChildByName("pdf_"+(t+1)).active=!1;this.Quit_button=n("Canvas/UI_Button/Showpage/Quit_Button"),this.Scence_3=n("Canvas/ScrollView/Scence_3"),this.Copy_right=n("Canvas/UI_Button/Copy_right");for(var e=0;e<7;e++)this.pdf_y[e]=n("pdf_"+(e+1)+"/view/PDF",this.Scence_5).getComponent(s).contentSize.y},o.update=function(t){this.window_h=c.getFrameSize().height,this.window_w=c.getFrameSize().width,this.dt=t,this.pdf_right(),this.Quit_button.setPosition(this.window_w/2*(1080/this.window_h)-40,500),this.contact_button()},o.contact_button=function(){var t=this;if(this.Scence_4.getChildByName("Wechat").on(a.EventType.MOUSE_ENTER,(function(e){n("Wechat/Wechat_out",t.Scence_4).active=!0})),this.Scence_4.getChildByName("Email").on(a.EventType.MOUSE_ENTER,(function(e){n("Email/Email_out",t.Scence_4).active=!0})),this.Scence_4.getChildByName("QQ").on(a.EventType.MOUSE_ENTER,(function(e){n("QQ/QQ_out",t.Scence_4).active=!0})),this.Scence_4.getChildByName("Wechat").on(a.EventType.MOUSE_LEAVE,(function(e){n("Wechat/Wechat_out",t.Scence_4).active=!1})),this.Scence_4.getChildByName("Email").on(a.EventType.MOUSE_LEAVE,(function(e){n("Email/Email_out",t.Scence_4).active=!1})),this.Scence_4.getChildByName("QQ").on(a.EventType.MOUSE_LEAVE,(function(e){n("QQ/QQ_out",t.Scence_4).active=!1})),!this.Copy_right.active)for(var e=0;e<3;e++)this.Copy_right.getChildByName("Label_"+(e+1)).active=!1},o.pdf_right=function(){n("pdf_"+this.some_button_on+"/view/PDF",this.Scence_5).setScale(1080/this.window_h,1080/this.window_h),this.showpage_ui.getChildByName("Introduce_"+this.some_button_on).setPosition(1080/this.window_h*1200-this.window_w/2*(1080/this.window_h),0),this.some_button_on>0?(this.move_animal_x(this.Scence_5,-3*this.window_w/2*(1080/this.window_h),-this.window_w/2*(1080/this.window_h),.5),this.move_animal_x(this.Move_frame,0,1080/this.window_h*600,.5),this.move_animal_Alpha(this.showpage_ui,0,255,.5),this.showpage_ui.getChildByName("Introduce_"+this.some_button_on).active=!0,this.Scence_5.getChildByName("pdf_"+this.some_button_on).active=!0,this.last_on_button=this.some_button_on,this.move_animal_Alpha(this.Scence_3,255,0,.3)):(this.move_animal_Alpha(this.showpage_ui,255,0,.2),this.move_animal_x(this.Move_frame,600,0,.5),this.move_animal_x(this.Scence_5,-this.window_w/2*(1080/this.window_h),-3*this.window_w/2*(1080/this.window_h),.5),this.Scence_5.position.x<=-1920&&(this.Scence_5.getChildByName("pdf_"+this.last_on_button).active=!1,this.showpage_ui.getChildByName("Introduce_"+this.last_on_button).active=!1),this.move_animal_Alpha(this.Scence_3,0,255,.3))},o.pdf_down=function(){this.some_button_on>0?(this.move_animal_y(this.Scence_5,-300,-540,.5),this.move_animal_height(this.Scence_5,0,this.window_h,.5),this.move_animal_Alpha(this.showpage_ui,0,255,.5),this.Scence_5.getChildByName("pdf_"+this.some_button_on).active=!0,this.last_on_button=this.some_button_on):(this.move_animal_Alpha(this.showpage_ui,255,0,.2),this.Scence_5.position.y>-1480&&this.Scence_5.position.y<=-540?this.move_animal_y(this.Scence_5,-540,-1480,.2):this.Scence_5.position.y<=-1480&&this.Scence_5.position.y>-1680?n("pdf_"+this.last_on_button+"/view/PDF",this.Scence_5).angle>-30?this.move_animal_rotation(n("pdf_"+this.last_on_button+"/view/PDF",this.Scence_5),0,-30,.2):this.move_animal_y(this.Scence_5,-1480,-1680,.2):this.Scence_5.position.y<=-1680&&(this.Scence_5.getComponent(s).setContentSize(1920,0),this.Scence_5.setPosition(0,-300),n("pdf_"+this.last_on_button+"/view/PDF",this.Scence_5).angle=0,this.Scence_5.getChildByName("pdf_"+this.last_on_button).active=!1))},o.button1_pdf_on=function(){this.some_button_on=1},o.button2_pdf_on=function(){var t=this;this.some_button_on=2,h.load("PDF/pdf_car_1/spriteFrame",p,(function(e,i){n("pdf_2/view/PDF/PDF_1",t.Scence_5).getComponent(l).spriteFrame=i})),h.load("PDF/pdf_car_2/spriteFrame",p,(function(e,i){n("pdf_2/view/PDF/PDF_2",t.Scence_5).getComponent(l).spriteFrame=i}))},o.button3_pdf_on=function(){var t=this;this.some_button_on=3,h.load("PDF/pdf_Web_1/spriteFrame",p,(function(e,i){n("pdf_3/view/PDF/PDF_1",t.Scence_5).getComponent(l).spriteFrame=i})),h.load("PDF/pdf_Web_2/spriteFrame",p,(function(e,i){n("pdf_3/view/PDF/PDF_2",t.Scence_5).getComponent(l).spriteFrame=i}))},o.button4_pdf_on=function(){var t=this;this.some_button_on=4,h.load("PDF/pdf_HCI_pain/spriteFrame",p,(function(e,i){n("pdf_4/view/PDF",t.Scence_5).getComponent(l).spriteFrame=i}))},o.button5_pdf_on=function(){var t=this;this.some_button_on=5,h.load("PDF/pdf_Seeeklab/spriteFrame",p,(function(e,i){n("pdf_5/view/PDF",t.Scence_5).getComponent(l).spriteFrame=i}))},o.button6_pdf_on=function(){var t=this;this.some_button_on=6,h.load("PDF/pdf_FSAE/spriteFrame",p,(function(e,i){n("pdf_6/view/PDF",t.Scence_5).getComponent(l).spriteFrame=i}))},o.button7_pdf_on=function(){this.some_button_on=7},o.button_pdf_off=function(){this.some_button_on=0},o.button_Wechat_on=function(){var t=this;this.copyTextToClipboard("chillaxwow"),this.Copy_right.getChildByName("Label_1").active=!0,this.Copy_right.active=!0,setTimeout((function(){t.Copy_right.active=!1}),1e3)},o.button_Email_on=function(){var t=this;this.copyTextToClipboard("chillaxwow@foxmail.com"),this.Copy_right.getChildByName("Label_2").active=!0,this.Copy_right.active=!0,setTimeout((function(){t.Copy_right.active=!1}),1e3)},o.button_QQ_on=function(){var t=this;this.copyTextToClipboard("729876005"),this.Copy_right.getChildByName("Label_3").active=!0,this.Copy_right.active=!0,setTimeout((function(){t.Copy_right.active=!1}),1e3)},o.menu1_click=function(){this.scroll.getComponent(_).scrollToOffset(new m(0,0),1)},o.menu2_click=function(){this.scroll.getComponent(_).scrollToOffset(new m(0,2160),1)},o.menu3_click=function(){this.scroll.getComponent(_).scrollToOffset(new m(0,5400),1)},o.copyTextToClipboard=function(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length),document.execCommand("copy"),document.body.removeChild(e)},o.move_animal_height=function(t,e,i,o){var n=i-e,_=this.dt*n/o;n>0?t.getComponent(s).height<i-_?t.getComponent(s).height+=_:t.getComponent(s).height>i-_&&(t.getComponent(s).height=i):n<0&&(t.getComponent(s).height>i-_?t.getComponent(s).height+=_:t.getComponent(s).height<i-_&&(t.getComponent(s).height=i))},o.move_animal_x=function(t,e,i,o){var n=i-e,_=this.dt*n/o;n>0?t.position.x<i-_?t.setPosition(t.position.x+_,t.position.y):t.position.x>i-_&&t.setPosition(i,t.position.y):n<0&&(t.position.x>i-_?t.setPosition(t.position.x+_,t.position.y):t.position.x<i-_&&t.setPosition(i,t.position.y))},o.move_animal_y=function(t,e,i,o){var n=i-e,_=this.dt*n/o;n>0?t.position.y<i-_?t.setPosition(t.position.x,t.position.y+_):t.position.y>i-_&&t.setPosition(t.position.x,i):n<0&&(t.position.y>i-_?t.setPosition(t.position.x,t.position.y+_):t.position.y<i-_&&t.setPosition(t.position.x,i))},o.move_animal_rotation=function(t,e,i,o){var n=i-e,_=this.dt*n/o;n>0?t.angle<i-_?t.angle+=_:t.angle>i-_&&(t.angle=i):n<0&&(t.angle>i-_?t.angle+=_:t.angle<i-_&&(t.angle=i))},o.move_animal_Alpha=function(t,e,i,o){var n=i-e,_=this.dt*n/o;n>0?t.getComponent(u).opacity<i-_?t.getComponent(u).opacity+=_:t.getComponent(u).opacity>i-_&&(t.getComponent(u).opacity=i):n<0&&(t.getComponent(u).opacity>i-_?t.getComponent(u).opacity+=_:t.getComponent(u).opacity<i-_&&(t.getComponent(u).opacity=i)),0==t.getComponent(u).opacity?t.active=!1:t.active=!0},i}(r))||d);i._RF.pop()}}}));

System.register("chunks:///_virtual/Cloud_control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,n,r,c;return{setters:[function(o){t=o.inheritsLoose},function(o){n=o.cclegacy,r=o._decorator,c=o.Component}],execute:function(){var e;n._RF.push({},"c95385zr09HqLBOpPItoP2g","Cloud_control",void 0);var u=r.ccclass;r.property,o("Cloud_control",u("Cloud_control")(e=function(o){function n(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=o.call.apply(o,[this].concat(r))||this).Cloud=null,t}t(n,o);var r=n.prototype;return r.start=function(){},r.update=function(o){},n}(c))||e);n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Draw_line.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,r,i;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Graphics,i=t.Component}],execute:function(){var s;n._RF.push({},"1d460vUjRVNur2CnH1MMDpc","Draw_line",void 0);var c=o.ccclass;o.property,t("Draw_line",c("Draw_line")(s=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){this.getComponent(r).moveTo(-960,49),this.getComponent(r).lineTo(960,49),this.getComponent(r).moveTo(-960,-49),this.getComponent(r).lineTo(960,-49),this.getComponent(r).stroke()},o.update=function(t){},n}(i))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/init_all.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,c,l,t;return{setters:[function(n){e=n.inheritsLoose},function(n){c=n.cclegacy,l=n._decorator,t=n.Component}],execute:function(){var r;c._RF.push({},"ce9d9HQmypAQY0tabA9o1FP","init_all",void 0);var u=l.ccclass;l.property,n("init_all",u("init_all")(r=function(n){function c(){for(var e,c=arguments.length,l=new Array(c),t=0;t<c;t++)l[t]=arguments[t];return(e=n.call.apply(n,[this].concat(l))||this).Front_scence=null,e.Mid_scence=null,e.Back_scence=null,e.Left_scence=null,e.Right_scence=null,e.Introduce_scence=null,e.Scence_2=null,e.Scence_3=null,e.Scence_4=null,e.scroll=null,e}e(c,n);var l=c.prototype;return l.start=function(){},l.update=function(n){},c}(t))||r);c._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Button_click_event.ts","./Cloud_control.ts","./Draw_line.ts","./Scroll_control.ts","./Scroll_control_ycontrol.ts","./init_all.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Scroll_control_ycontrol.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var c,t,n,s,o,i,_,l,r;return{setters:[function(e){c=e.inheritsLoose},function(e){t=e.cclegacy,n=e._decorator,s=e.find,o=e.RichText,i=e.Input,_=e.ScrollView,l=e.Vec2,r=e.Component}],execute:function(){var a;t._RF.push({},"1da5dp27ZZAC7peUo8317kY","Scroll_control_ycontrol",void 0);var h=n.ccclass;n.property,e("Scroll_control",h("Scroll_control")(a=function(e){function t(){for(var c,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(c=e.call.apply(e,[this].concat(n))||this).Front_scence=null,c.Mid_scence=null,c.Back_scence=null,c.Left_scence=null,c.Right_scence=null,c.Introduce_scence=null,c.Scence_2=null,c.Scence_3=null,c.scroll=null,c.y_text=null,c.Scroll_y=0,c.mouse=new l(0,0),c.mousemove=new l(0,0),c}c(t,e);var n=t.prototype;return n.onLoad=function(){},n.start=function(){this.Front_scence=s("Canvas/ScrollView/Scence_1/Front_scence"),this.Mid_scence=s("Canvas/ScrollView/Scence_1/Mid_scence"),this.Back_scence=s("Canvas/ScrollView/Scence_1/Back_scence"),this.Left_scence=s("Canvas/ScrollView/Scence_2/Left_scence"),this.Right_scence=s("Canvas/ScrollView/Scence_2/Right_scence"),this.Introduce_scence=s("Canvas/ScrollView/Scence_2/Introduce_scence"),this.Scence_2=s("Canvas/ScrollView/Scence_2"),this.Scence_3=s("Canvas/ScrollView/Scence_3"),this.scroll=s("Canvas/ScrollView"),this.y_text=s("Canvas/Scorll_y_text").getComponent(o),this.scroll.on(i.EventType.MOUSE_WHEEL,this.mouseset,this),this.scroll.on(i.EventType.MOUSE_MOVE,this.mouseset,this),this.Introduce_scence.setScale(0,0),this.Scence_3.setPosition(0,-1080)},n.update=function(e){this.Scroll_y=Math.ceil(this.scroll.getComponent(_).getContentPosition().y)-540,this.y_text.string="Scroll_y="+this.Scroll_y.toString(),this.movecontrol(this.Scroll_y)},n.movecontrol=function(e){e<=540?(this.Move_Front_scence(e),this.Move_Mid_scence(e),this.Move_Back_scence(e),this.Move_Right_scence(e),this.Move_Left_scence(e),this.Introduce_scence.setScale(0,0)):e>=540&&e<=1080?(this.Move_Front_scence(e),this.Move_Mid_scence(e),this.Move_Back_scence(e),this.Move_Right_scence(e),this.Move_Left_scence(e),this.Move_Introduce_scence(e)):e>=1080&&e<=2160?(this.Introduce_scence.setScale(1,1),this.Front_scence.setPosition(0,-540),this.Mid_scence.setScale(0,0),this.Back_scence.setScale(.5,.5),this.Move_scence_2(e)):e>=2160&&e<=4320?this.Move_scence_3(e):e>=4320&&e<=5400&&this.Move_scence_2_2(e)},n.mouseset=function(e){this.mouse=e.getUILocation(),this.mousemove=e.getUIDelta()},n.Move_Front_scence=function(e){var c=this.param_out_line(0,1080,0,-540,e);this.Front_scence.setPosition(0,c)},n.Move_Mid_scence=function(e){var c=this.param_out_line(0,1080,1,0,e);this.Mid_scence.setScale(c,c)},n.Move_Back_scence=function(e){var c=this.param_out_line(0,1080,1,.5,e);this.Back_scence.setScale(c,c)},n.Move_Right_scence=function(e){var c=this.param_out_line(0,1080,1200,0,e);this.Right_scence.setPosition(c,0)},n.Move_Left_scence=function(e){var c=this.param_out_line(0,1080,-1200,-200,e);this.Left_scence.setPosition(c,0)},n.Move_Introduce_scence=function(e){var c=this.param_out_line(540,1080,0,1,e);this.Introduce_scence.setScale(c,c)},n.Move_scence_2=function(e){var c=this.param_out_line(1080,2160,1,.75,e);this.Scence_2.setScale(c,c)},n.Move_scence_3=function(e){var c=this.param_out_line(2160,4320,-1080,1080,e);this.Scence_3.setPosition(0,c),this.mouse.y>440+c+540&&this.mouse.y<540+c+540&&console.log("bottom_1_in")},n.Move_scence_2_2=function(e){var c=this.param_out_line(4320,5400,.75,1,e);this.Scence_2.setScale(c,c)},n.param_out_line=function(e,c,t,n,s){return(t-n)/(e-c)*s+(e*n-c*t)/(e-c)},t}(r))||a);t._RF.pop()}}}));

System.register("chunks:///_virtual/Scroll_control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,o,n,s,_,c,h,a,l,u,r,m,p;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,n=t.find,s=t.RichText,_=t.Input,c=t.view,h=t.ScrollView,a=t.Vec2,l=t.Animation,u=t.UIOpacity,r=t.UITransform,m=t.Node,p=t.Component}],execute:function(){var S;e._RF.push({},"3170fVSqQlBSZ66PVxFz1fX","Scroll_control",void 0);var v=o.ccclass;o.property,t("Scroll_control",v("Scroll_control")(S=function(t){function e(){for(var i,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(i=t.call.apply(t,[this].concat(o))||this).Robot_hand=null,i.human=null,i.Scence_1=null,i.Scence_2=null,i.Scence_3=null,i.Scence_4=null,i.page2_back_ground=null,i.scroll=null,i.y_text=null,i.move_frame=null,i.test_str=null,i.Scroll_y=0,i.mouse=new a(0,0),i.mousemove=new a(0,0),i.dt=0,i.button1_in=!1,i.lastScrollOffsetY=0,i.is_Scroll_down=!1,i.is_touch_button=[!1,!1,!1,!1,!1,!1,!1],i.last_touch_button=0,i.now_touch_button=0,i.button_mouse=!1,i.window_w=void 0,i.window_h=void 0,i.pic_frame=null,i.pic_rolling=[!1,!1],i}i(e,t);var o=e.prototype;return o.onLoad=function(){},o.start=function(){this.Scence_1=n("Canvas/ScrollView/Scence_1"),this.Robot_hand=n("Canvas/ScrollView/Move_frame/Scence_2/Show_sence_start/Robot_hand"),this.human=n("Canvas/ScrollView/Move_frame/Scence_2/Show_sence_start/human"),this.Scence_2=n("Canvas/ScrollView/Move_frame/Scence_2"),this.Scence_3=n("Canvas/ScrollView/Scence_3"),this.Scence_4=n("Canvas/ScrollView/Scence_4"),this.scroll=n("Canvas/ScrollView"),this.y_text=n("Canvas/Scorll_y_text").getComponent(s),this.pic_frame=n("Canvas/ScrollView/Move_frame/pic_frame"),this.page2_back_ground=n("Canvas/ScrollView/Move_frame/page2_back_ground"),this.move_frame=n("Canvas/ScrollView/Move_frame"),this.test_str=n("Canvas/test_str"),this.scroll.on(_.EventType.MOUSE_WHEEL,this.mouseset,this),this.scroll.on(_.EventType.MOUSE_MOVE,this.mouseset,this),this.Scence_4.setPosition(0,540),this.Scence_4.active=!1,this.Scence_2.getChildByName("Change_animal").active=!1,this.Scence_3_init()},o.update=function(t){this.window_h=c.getFrameSize().height,this.window_w=c.getFrameSize().width,this.dt=t,this.Scroll_y=Math.ceil(this.scroll.getComponent(h).getContentPosition().y)-540,this.y_text.string="Scroll_y="+this.Scroll_y.toString()+"\nw="+this.window_w+"\nh="+this.window_h,this.movecontrol(this.Scroll_y),this.is_button_in(),n("Canvas/Scorll_y_text").setPosition(this.window_w/2*(1080/this.window_h),-540)},o.movecontrol=function(t){this.Move_Sence_1(t),this.Move_human(t),this.Move_Robot_hand(t),this.Move_scence_2(t),this.Move_scence_3(t),this.Move_scence_4(t)},o.mouseset=function(t){this.mouse=t.getUILocation(),this.mousemove=new a(t.getLocation().x*(1080/this.window_h),t.getLocation().y*(1080/this.window_h)),this.Scroll_y>this.lastScrollOffsetY?this.is_Scroll_down=!0:this.Scroll_y<this.lastScrollOffsetY&&(this.is_Scroll_down=!1),this.lastScrollOffsetY=this.Scroll_y,this.Scroll_y>180&&this.Scroll_y<900?this.is_Scroll_down?this.scroll.getComponent(h).scrollToOffset(new a(0,1080),1):this.is_Scroll_down||this.scroll.getComponent(h).scrollToOffset(new a(0,0),1):this.Scroll_y>1260&&this.Scroll_y<1980?this.is_Scroll_down?this.scroll.getComponent(h).scrollToOffset(new a(0,2160),1):this.is_Scroll_down||this.scroll.getComponent(h).scrollToOffset(new a(0,1080),1):this.Scroll_y>4325&&this.Scroll_y<5220&&(this.is_Scroll_down?this.scroll.getComponent(h).scrollToOffset(new a(0,5400),1):this.is_Scroll_down||this.scroll.getComponent(h).scrollToOffset(new a(0,4320),1))},o.button_call=function(){for(var t=this,i=function(i){t.Scence_3.getChildByName("Button_"+(i+1)).on(m.EventType.MOUSE_LEAVE,(function(e){console.log("This is a callback after the trigger event_"+(i+1)),t.now_touch_button=0})),t.Scence_3.getChildByName("Button_"+(i+1)).on(m.EventType.MOUSE_ENTER,(function(e){console.log("This is a callback after the trigger event_"+(i+1)),t.now_touch_button=i+1,t.Scence_2.getChildByName("Show_sence_start").active=!1}))},e=0;e<6;e++)i(e)},o.Move_Sence_1=function(t){t<=180?(this.Scence_1.getChildByName("Front_scence").setPosition(this.param_out_sin(0,1920,-100,100,this.mousemove.x),this.param_out_sin(0,1080,-60,60,this.mousemove.y)),this.Scence_1.getChildByName("Left_mountain").setPosition(this.param_out_sin(0,1920,-50,50,this.mousemove.x),this.param_out_sin(0,1080,-30,30,this.mousemove.y)),this.Scence_1.getChildByName("Right_mountain").setPosition(this.param_out_sin(0,1920,-20,20,this.mousemove.x),this.param_out_sin(0,1080,-12,12,this.mousemove.y)),this.Scence_1.getChildByName("Cloud").setPosition(this.param_out_sin(0,1920,-10,10,this.mousemove.x),this.param_out_sin(0,1080,-6,6,this.mousemove.y)),this.move_animal_Alpha(this.Scence_1.getChildByName("Cloud"),0,255,.3)):t>180&&t<=1080?(this.Scence_1.active=!0,this.Scence_1.getChildByName("Front_scence").setScale(this.param_out_line(180,1080,1,5,t),this.param_out_line(180,1080,1,5,t)),this.Scence_1.getChildByName("Left_mountain").setScale(this.param_out_line(180,1080,1,4.5,t),this.param_out_line(180,1080,1,4.5,t)),this.Scence_1.getChildByName("Right_mountain").setScale(this.param_out_line(180,1080,1,4,t),this.param_out_line(180,1080,1,4,t)),this.Scence_1.getChildByName("Back_scence").setScale(this.param_out_line(180,1080,1,3,t),this.param_out_line(180,1080,1,3,t)),this.move_animal_Alpha(this.Scence_1.getChildByName("Cloud"),255,0,.3),this.Scence_1.setPosition(0,this.param_out_line(180,1080,0,-540,t))):this.Scence_1.active=!1},o.Move_human=function(t){var i=this.window_w/2*(1080/this.window_h);if(t<=1080){var e=this.param_out_line(0,1080,i,0,t),o=this.param_out_line(0,1080,-440,120,t);this.human.setPosition(e,o)}else this.human.setPosition(0,120)},o.Move_Robot_hand=function(t){var i=-this.window_w/2*(1080/this.window_h);if(t<=1080){var e=this.param_out_line(0,1080,i,0,t),o=this.param_out_line(0,1080,540,0,t);this.Robot_hand.setPosition(e,o)}else this.Robot_hand.setPosition(0,0)},o.Move_scence_2=function(t){if(t>=1080&&t<2160){this.page2_back_ground.active=!0;var i=this.param_out_line(1080,2160,1,.13,t),e=this.param_out_line(1080,2160,0,-115,t),o=this.param_out_line(1080,2160,0,80,t);this.Scence_2.setPosition(e,o),this.Scence_2.setScale(i,i),this.page2_back_ground.setPosition(0,this.param_out_line(1080,2160,0,90,t)),this.page2_back_ground.setScale(this.param_out_line(1080,2160,1,.25,t),this.param_out_line(1080,2160,1,.25,t))}else if(t<=1080)this.Scence_2.setScale(1,1),this.Scence_2.setPosition(0,0),this.page2_back_ground.active=!1;else if(t<=4320&&t>=2160)this.Scence_2.setScale(.3,.3),this.Scence_2.setPosition(-270,-100),this.page2_back_ground.active=!1;else if(t>=4320&&t<=5400){var n=this.param_out_line(4320,5400,.3,1,t);this.Scence_2.setScale(n,n)}else t>=5400&&this.Scence_2.setScale(1,1)},o.Touch_botton=function(t){for(var i=[!1,!1,!1,!1,!1,!1,!1],e=0;e<i.length;e++)i[e]=e===t-1;return i},o.Scence_3_init=function(){this.Scence_3.active=!1,this.Scence_2.getChildByName("Show_sence_start").active=!0,this.pic_frame.active=!1,this.move_frame.getChildByName("page3_background").active=!1,this.Scence_3.setPosition(0,1080)},o.Move_scence_3=function(t){if(t<2160)this.lastScrollOffsetY>=2160&&this.Scence_3_init();else if(t>=2160&&t<=4320){this.Scence_3.active=!0;var i=this.param_out_line(2160,4320,-this.window_h,this.window_h,t);this.Scence_3.setPosition(0,i),this.Scence_2.getChildByName("Show_sence_start").active=!1,this.pic_frame.active=!0,this.move_frame.getChildByName("page3_background").active=!0,this.mouse.y>440+i+540&&this.mouse.y<540+i+540?this.now_touch_button=1:this.mouse.y>340+i+540&&this.mouse.y<440+i+540?this.now_touch_button=2:this.mouse.y>240+i+540&&this.mouse.y<340+i+540?this.now_touch_button=3:this.mouse.y>140+i+540&&this.mouse.y<240+i+540?this.now_touch_button=4:this.mouse.y>40+i+540&&this.mouse.y<140+i+540?this.now_touch_button=5:this.mouse.y>-60+i+540&&this.mouse.y<40+i+540?this.now_touch_button=6:this.mouse.y>-160+i+540&&this.mouse.y<-60+i+540?this.now_touch_button=7:this.mouse.y<-60+i+540?this.now_touch_button=8:this.now_touch_button=0;var e=this.move_animal_rotation(this.pic_frame,-30*this.last_touch_button,-30*this.now_touch_button,.5);this.is_touch_button=this.Touch_botton(this.now_touch_button),e&&(this.now_touch_button!=this.last_touch_button&&n("Show_sence_"+(this.now_touch_button+1)+"/Animation",this.pic_frame).getComponent(l).play("pic_animation"),this.last_touch_button=this.now_touch_button),this.pic_frame.scale.x>1?this.pic_frame.setScale(this.param_out_line(4320,5400,1,4,t),this.param_out_line(4320,5400,1,4,t)):this.pic_frame.setScale(1,1)}else t>4320&&t<5400?(this.Scence_3.setPosition(0,1080),this.pic_frame.getChildByName("Show_sence_9").setScale(this.param_out_line(4320,5400,1,6,t),this.param_out_line(4320,5400,1,6,t))):this.Scence_3.setPosition(0,1080)},o.Move_scence_4=function(t){if(t>=4320&&t<5400)this.Scence_4.active=!0,this.Scence_4.getComponent(u).opacity=this.param_out_line(4320,5400,0,255,t),this.Scence_4.setPosition(0,-540);else if(t>=5400&&t<=7020){this.Scence_4.active=!0;var i=this.param_out_line(5400,5940,-540,0,t);this.Scence_4.setPosition(0,i),this.Scence_4.getChildByName("Front_scence").setPosition(this.param_out_sin(0,1920,-100,100,this.mousemove.x),this.param_out_sin(0,1080,-60,60,this.mousemove.y)),this.Scence_4.getChildByName("Left_mountain").setPosition(this.param_out_sin(0,1920,-50,50,this.mousemove.x),this.param_out_sin(0,1080,-30,30,this.mousemove.y)),this.Scence_4.getChildByName("Right_mountain").setPosition(this.param_out_sin(0,1920,-20,20,this.mousemove.x),this.param_out_sin(0,1080,-12,12,this.mousemove.y)),this.Scence_4.getChildByName("Cloud").setPosition(this.param_out_sin(0,1920,-10,10,this.mousemove.x),this.param_out_sin(0,1080,-6,6,this.mousemove.y))}else this.Scence_4.active=!1},o.param_out_line=function(t,i,e,o,n){return(e-o)/(t-i)*n+(t*o-i*e)/(t-i)},o.param_out_cruve=function(t,i,e,o,n){return-((e-o)/((t-i)*(t-i)))*(n-t)*(n-t)+e},o.param_out_sin=function(t,i,e,o,n){var s=(o-e)/2,_=Math.PI/(i-t),c=Math.PI/(2*_)-i,h=(e+o)/2;return s*Math.sin(_*(n+c))+h},o.vector_out_cruve=function(t,i,e,o){var n=0;return e>0&&e<2&&(n=2*(1-e)/(i-t)),n*o+(1-n*(t+i)/2)},o.move_animal_x=function(t,i,e,o){var n=e-i,s=this.dt*n/o;n>0?t.position.x<e-s?t.setPosition(t.position.x+s,t.position.y):t.position.x>e-s&&t.setPosition(e,t.position.y):n<0&&(t.position.x>e-s?t.setPosition(t.position.x+s,t.position.y):t.position.x<e-s&&t.setPosition(e,t.position.y))},o.is_button_in=function(){var t=this.window_w*(1080/this.window_h);this.Scence_3.getChildByName("Label").setPosition(-t/2,this.Scence_3.getChildByName("Label").position.y);for(var i=0;i<this.is_touch_button.length;i++)this.Scence_3.getChildByName("Button_"+(i+1)).getComponent(r).setContentSize(t,100),this.Scence_3.getChildByName("Button_"+(i+1)).setPosition(-t/2,this.Scence_3.getChildByName("Button_"+(i+1)).position.y),n("Button_"+(i+1)+"/Label_introution",this.Scence_3).setPosition(t-980,0),n("Button_"+(i+1)+"/Line",this.Scence_3).active=this.is_touch_button[i],this.is_touch_button[i]?(this.move_animal_y(n("Button_"+(i+1)+"/Label_old",this.Scence_3),0,100,.3),this.move_animal_y(n("Button_"+(i+1)+"/Label_new",this.Scence_3),-100,0,.3),this.move_animal_Alpha(n("Button_"+(i+1)+"/Label_introution",this.Scence_3),0,255,.3)):this.is_touch_button[i]||(this.move_animal_y(n("Button_"+(i+1)+"/Label_old",this.Scence_3),100,0,.3),this.move_animal_y(n("Button_"+(i+1)+"/Label_new",this.Scence_3),0,-100,.3),this.move_animal_Alpha(n("Button_"+(i+1)+"/Label_introution",this.Scence_3),255,0,.3))},o.move_animal_Alpha=function(t,i,e,o){var n=e-i,s=this.dt*n/o;n>0?t.getComponent(u).opacity<e-s?t.getComponent(u).opacity+=s:t.getComponent(u).opacity>e-s&&(t.getComponent(u).opacity=e):n<0&&(t.getComponent(u).opacity>e-s?t.getComponent(u).opacity+=s:t.getComponent(u).opacity<e-s&&(t.getComponent(u).opacity=e)),0==t.getComponent(u).opacity?t.active=!1:t.active=!0},o.move_animal_rotation=function(t,i,e,o){var n=e-i,s=this.dt*n/o*this.vector_out_cruve(i,e,.3,t.angle);if(n>0){if(t.angle<e-s)return t.angle+=s,!1;if(t.angle>e-s)return t.angle=e,!0}else if(n<0){if(t.angle>e-s)return t.angle+=s,!1;if(t.angle<e-s)return t.angle=e,!0}else t.angle=e},o.move_animal_y=function(t,i,e,o){var n=e-i,s=this.dt*n/o;n>0?t.position.y<e-s?t.setPosition(t.position.x,t.position.y+s):t.position.y>e-s&&t.setPosition(t.position.x,e):n<0&&(t.position.y>e-s?t.setPosition(t.position.x,t.position.y+s):t.position.y<e-s&&t.setPosition(t.position.x,e))},o.boolean_set_back=function(){for(var t=0;t<this.pic_rolling.length;t++)this.pic_rolling[t]=!1,this.pic_frame.getChildByName("Show_sence_"+(t+1)).angle=30*t},o.move_animal_pic_rotation=function(t,i){this.pic_rolling[0]?this.pic_rolling[1]||(this.pic_rolling[1]=this.move_animal_rotation(t,30*i+30*this.now_touch_button,0*i+30*this.now_touch_button,.3)):this.pic_rolling[0]=this.move_animal_rotation(t,0*i+30*this.now_touch_button,30*i+30*this.now_touch_button,.3)},e}(p))||S);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});