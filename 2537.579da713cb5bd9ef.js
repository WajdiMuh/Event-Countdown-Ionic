"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2537],{2537:(P,v,l)=>{l.r(v),l.d(v,{EventlistPageModule:()=>x});var c=l(9808),u=l(4182),i=l(2974),g=l(333),h=l(655),d=l(5439),t=l(2096),m=l(7712);function p(n,o){1&n&&(t.TgZ(0,"div",6),t._UZ(1,"ion-spinner",7),t.qZA())}function _(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item-sliding"),t.TgZ(1,"ion-item",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).eventclick(a)}),t.TgZ(2,"ion-label"),t.TgZ(3,"h3"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"date"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"ion-item-options",13),t.TgZ(9,"ion-item-option",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).delete(a)}),t._uU(10,"Delete"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=o.$implicit;t.xp6(4),t.Oqu(e.title),t.xp6(2),t.hij(" ",t.xi3(7,2,e.date,"dd/MM/yyyy, h:mm a")," ")}}function Z(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",8),t.TgZ(1,"ion-list"),t.TgZ(2,"ion-list-header"),t._uU(3," Events "),t.qZA(),t.YNc(4,_,11,5,"ion-item-sliding",9),t.TgZ(5,"ion-item",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().add()}),t._UZ(6,"ion-icon",11),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.eventlist)}}function y(n,o){1&n&&(t.TgZ(0,"ion-footer"),t._UZ(1,"ion-toolbar"),t.qZA())}const T=[{path:"",component:(()=>{class n{constructor(e,s,r,a,f){this.alertController=e,this.toastController=s,this.eventservice=r,this.platform=a,this.router=f,this.finishedloading=!1,this.eventlist=[]}ngOnInit(){this.eventservice.getAllEvents().subscribe(e=>{this.eventlist=e,this.finishedloading=!0},e=>{this.finishedloading=!0})}refresh(e){this.eventservice.getAllEvents().subscribe(s=>{this.eventlist=s,e.target.complete()},s=>{e.target.complete()})}eventclick(e){this.router.navigate(["/countdown",e])}delete(e){this.finishedloading=!1,this.eventservice.deleteEvent(e).subscribe(s=>{this.finishedloading=!0,this.eventlist=s},s=>{this.finishedloading=!0})}add(){return(0,h.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"",header:"Add Event",inputs:[{name:"title",type:"text",placeholder:"Title"},{name:"date",type:"datetime-local",min:d().format("yyyy-MM-DD")+"T00:00:00",value:d().add(1,"days").format("yyyy-MM-DDTHH:mm:ss.SSS")}],buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Add",handler:s=>(0,h.mG)(this,void 0,void 0,function*(){""==s.title||""==s.date?(yield this.toastController.create({message:"Either the title or date is not set",duration:2e3})).present():d(s.date).isBefore(d())?(yield this.toastController.create({message:"The date is in the past",duration:2e3})).present():(this.finishedloading=!1,this.eventservice.addEvent(s.title,d(s.date).format("yyyy-MM-DDTHH:mm:ss.SSS")).subscribe(r=>{this.finishedloading=!0,this.eventlist=r},r=>{this.finishedloading=!0}))})}]})).present()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.Br),t.Y36(i.yF),t.Y36(m.n),t.Y36(i.t4),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-eventlist"]],decls:12,vars:4,consts:[["slot","start"],["autoHide","false"],["slot","fixed",3,"disabled","ionRefresh"],["class","centerspinner",4,"ngIf"],["class","content",4,"ngIf"],[4,"ngIf"],[1,"centerspinner"],["name","crescent"],[1,"content"],[4,"ngFor","ngForOf"],["lines","none",1,"addbutton",3,"click"],["name","add-circle-outline"],[3,"click"],["side","end"],["color","danger",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-buttons",0),t._UZ(3,"ion-menu-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Event List"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"ion-content"),t.TgZ(7,"ion-refresher",2),t.NdJ("ionRefresh",function(a){return s.refresh(a)}),t._UZ(8,"ion-refresher-content"),t.qZA(),t.YNc(9,p,2,0,"div",3),t.YNc(10,Z,7,1,"div",4),t.qZA(),t.YNc(11,y,2,0,"ion-footer",5)),2&e&&(t.xp6(7),t.s9C("disabled",0==s.finishedloading),t.xp6(2),t.Q6J("ngIf",0==s.finishedloading),t.xp6(1),t.Q6J("ngIf",s.finishedloading),t.xp6(1),t.Q6J("ngIf",0==s.platform.is("desktop")))},directives:[i.Gu,i.sr,i.Sm,i.fG,i.wd,i.W2,i.nJ,i.Wo,c.O5,i.PQ,i.q_,i.yh,c.sg,i.Ie,i.gu,i.td,i.Q$,i.IK,i.u8,i.fr],pipes:[c.uU],styles:[".addbutton[_ngcontent-%COMP%]{--padding-start: 0px}.addbutton[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#2ed400;margin:auto}ion-spinner[_ngcontent-%COMP%]{width:100px!important;height:100px!important}.centerspinner[_ngcontent-%COMP%]{top:50%;left:50%;position:fixed;transform:translate(-50%,-50%)}"]}),n})()}];let E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(T)],g.Bz]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,u.u5,i.Pc,E]]}),n})()}}]);