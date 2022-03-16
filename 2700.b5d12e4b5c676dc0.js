"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2700],{2700:(q,g,r)=>{r.r(g),r.d(g,{CountdownPageModule:()=>N});var u=r(9808),y=r(4182),c=r(9537),h=r(333),f=r(5439),Z=r(2916),w=r(2654);class b extends w.w{constructor(i,t){super()}schedule(i,t=0){return this}}let p=(()=>{class s{constructor(t,n=s.now){this.SchedulerAction=t,this.now=n}schedule(t,n=0,o){return new this.SchedulerAction(this,t).schedule(o,n)}}return s.now=()=>Date.now(),s})();class a extends p{constructor(i,t=p.now){super(i,()=>a.delegate&&a.delegate!==this?a.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(i,t=0,n){return a.delegate&&a.delegate!==this?a.delegate.schedule(i,t,n):super.schedule(i,t,n)}flush(i){const{actions:t}=this;if(this.active)return void t.push(i);let n;this.active=!0;do{if(n=i.execute(i.state,i.delay))break}while(i=t.shift());if(this.active=!1,n){for(;i=t.shift();)i.unsubscribe();throw n}}}const v=new a(class x extends b{constructor(i,t){super(i,t),this.scheduler=i,this.work=t,this.pending=!1}schedule(i,t=0){if(this.closed)return this;this.state=i;const n=this.id,o=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(o,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(o,this.id,t),this}requestAsyncId(i,t,n=0){return setInterval(i.flush.bind(i,this),n)}recycleAsyncId(i,t,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}execute(i,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(i,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,t){let o,n=!1;try{this.work(i)}catch(l){n=!0,o=!!l&&l||new Error(l)}if(n)return this.unsubscribe(),o}_unsubscribe(){const i=this.id,t=this.scheduler,n=t.actions,o=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==o&&n.splice(o,1),null!=i&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null}});var C=r(6688);function m(s=0,i=v){return(!function P(s){return!(0,C.k)(s)&&s-parseFloat(s)+1>=0}(s)||s<0)&&(s=0),(!i||"function"!=typeof i.schedule)&&(i=v),new Z.y(t=>(t.add(i.schedule(A,s,{subscriber:t,counter:0,period:s})),t))}function A(s){const{subscriber:i,counter:t,period:n}=s;i.next(t),this.schedule({subscriber:i,counter:t+1,period:n},n)}var d=r(9892),e=r(2096),T=r(7712);function M(s,i){1&s&&(e.TgZ(0,"div",6),e._UZ(1,"ion-spinner",7),e.qZA())}function I(s,i){if(1&s&&(e.TgZ(0,"ion-card"),e.TgZ(1,"ion-card-header"),e.TgZ(2,"ion-card-title"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"ion-card-content"),e.TgZ(5,"p"),e._uU(6," Date : "),e._UZ(7,"br"),e._uU(8),e.ALo(9,"date"),e._UZ(10,"br"),e.qZA(),e.TgZ(11,"p"),e._uU(12," Time Left : "),e._UZ(13,"br"),e._uU(14),e.qZA(),e.qZA(),e.qZA()),2&s){const t=e.oxw(2);e.xp6(3),e.Oqu(t.latestevent.title),e.xp6(5),e.hij(" ",e.xi3(9,3,t.latestevent.date,"dd/MM/yyyy, h:mm a")," "),e.xp6(6),e.hij(" ",t.daysleft," ")}}function U(s,i){1&s&&(e.TgZ(0,"ion-label"),e._uU(1," No Event Upcoming "),e.qZA())}function O(s,i){if(1&s&&(e.TgZ(0,"div",8),e.YNc(1,I,15,6,"ion-card",9),e.YNc(2,U,2,0,"ion-label",9),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.latestevent),e.xp6(1),e.Q6J("ngIf",!t.latestevent)}}const E=[{path:"",component:(()=>{class s{constructor(t,n){this.eventservice=t,this.route=n,this.finishedloading=!1,this.latestevent=void 0,this.receivedevent=void 0,this.daysleft=""}ngOnInit(){this.route.params.subscribe(t=>{null==t.id?this.eventservice.getLatestEvent().subscribe(n=>{this.subscription=m(1e3).subscribe(o=>{this.recalculate()}),this.latestevent=n,this.recalculate(),this.finishedloading=!0,this.makelocalnotification(n)},n=>{this.finishedloading=!0,this.makelocalnotification()}):(this.subscription=m(1e3).subscribe(n=>{this.recalculate()}),this.latestevent={id:parseInt(t.id),title:t.title,date:new Date(t.date)},this.receivedevent=this.latestevent,this.recalculate(),this.finishedloading=!0)})}ngOnDestroy(){null!=this.subscription&&this.subscription.unsubscribe()}refresh(t){null==this.receivedevent?this.eventservice.getLatestEvent().subscribe(n=>{this.latestevent=n,this.recalculate(),t.target.complete(),this.makelocalnotification(n)},n=>{t.target.complete(),this.makelocalnotification()}):(this.latestevent=this.receivedevent,this.recalculate(),t.target.complete())}recalculate(){var n=f(this.latestevent.date).diff(f()),o=f.duration(n);this.daysleft=`Years: ${o.years()}, Months: ${o.months()}, Days: ${o.days()}, Hours: ${o.hours()}, Minutes: ${o.minutes()}, Seconds: ${o.seconds()}`,null==this.receivedevent&&o.milliseconds()<=0&&(this.finishedloading=!1,this.eventservice.getLatestEvent().subscribe(l=>{this.latestevent=l,this.recalculate(),this.finishedloading=!0,this.makelocalnotification(l)},l=>{this.finishedloading=!0,this.makelocalnotification()}))}makelocalnotification(t){d.s.getPending().then(n=>{0==n.notifications.length?null!=t&&d.s.schedule({notifications:[{id:t.id,title:"Upcoming Event",body:t.title,schedule:{at:t.date}}]}):d.s.cancel({notifications:[{id:n.notifications[0].id}]}).then(()=>{null!=t&&d.s.schedule({notifications:[{id:t.id,title:"Upcoming Event",body:t.title,schedule:{at:t.date}}]})})})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(T.n),e.Y36(h.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-countdown"]],decls:11,vars:3,consts:[["translucent",""],["slot","start"],["autoHide","false"],["slot","fixed",3,"disabled","ionRefresh"],["class","centerspinner",4,"ngIf"],["class","content",4,"ngIf"],[1,"centerspinner"],["name","crescent"],[1,"content"],[4,"ngIf"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar",0),e.TgZ(2,"ion-buttons",1),e._UZ(3,"ion-menu-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Countdown"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"ion-content"),e.TgZ(7,"ion-refresher",3),e.NdJ("ionRefresh",function(l){return n.refresh(l)}),e._UZ(8,"ion-refresher-content"),e.qZA(),e.YNc(9,M,2,0,"div",4),e.YNc(10,O,3,2,"div",5),e.qZA()),2&t&&(e.xp6(7),e.s9C("disabled",0==n.finishedloading),e.xp6(2),e.Q6J("ngIf",0==n.finishedloading),e.xp6(1),e.Q6J("ngIf",n.finishedloading))},directives:[c.Gu,c.sr,c.Sm,c.fG,c.wd,c.W2,c.nJ,c.Wo,u.O5,c.PQ,c.PM,c.Zi,c.Dq,c.FN,c.Q$],pipes:[u.uU],styles:["ion-spinner[_ngcontent-%COMP%]{width:100px!important;height:100px!important}.centerspinner[_ngcontent-%COMP%]{top:50%;left:50%;position:fixed;transform:translate(-50%,-50%)}.content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;-webkit-user-select:none;user-select:none}.ios[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin-bottom:100px}ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px}ion-header[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}"]}),s})()}];let J=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[h.Bz.forChild(E)],h.Bz]}),s})(),N=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[u.ez,y.u5,c.Pc,J]]}),s})()}}]);