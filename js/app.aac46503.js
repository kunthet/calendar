(function(){var e={269:function(e,t,a){var n=a(6490)["default"],r=a(4344)["default"],s=a(7831)["default"];const{DaysPerYear:o,DaysPer400Years:i,DaysPer100Years:d,DaysPer4Years:c,DaysFrom1601To1970:l,GregorianEpochYear:y}=a(7487),{floor:h,mod:u}=a(6885),m=-141427,p=-141438;var D=new WeakSet;class x{constructor(){n(this,D)}static get instance(){return new this}calcYear(e){return this.daysToDate(e).year}calcMonth(e){return this.daysToDate(e).month}calcDay(e){return this.daysToDate(e).day}dateToKaen(e,t,a){var n=this.dateToDays(e,t,a);return n>p&&n<m?n+=m-n:n<=p&&(n+=10),n}dateToDays(e,t,a){const n=s(this,D,f).call(this,e,t,a);return n.dateToDays(e,t,a)}daysToDate(e){const t=e<m?new w:new v;return t.daysToDate(e)}daysPerMonth(e,t){const a=s(this,D,f).call(this,e,t),n=a.daysToMonth();return n[t+1]-n[t]}}function f(e,t,a=1){const n=577745,r=365*e+30*t+a,s=r<n;return s?new w:new v}r(x,"MaxYear",245e11),r(x,"MinYear",1601),r(x,"MaxDays",8948441249280837),r(x,"MinDays",-134774);class w{constructor(){r(this,"daysToMonth366",[0,31,60,91,121,152,182,213,244,274,305,335,366]),r(this,"daysToMonth365",[0,31,59,90,120,151,181,212,243,273,304,334,365])}static get instance(){return new v}get name(){return"Julian Calendar"}dateToDays(e,t,a){const n=e-y,r=Math.floor((e-1)/4)-492+3,s=this.daysToMonth(e);return r+n*o+s[t-1]+a-1}daysToDate(e){const t=[[0,31,59,90,120,151,181,212,243,273,304,334,365],[0,31,60,91,121,152,182,213,244,274,305,335,366]];var a=e+719174;const n=u(a+6,7);var r=h(a/c);a-=r*c;var s=h(a/o);s>3&&(s=3),a-=s*o;const i=1,d=i+4*r+s,l=+(!(d%4)>0);var y,m=a,p=1;const D=t[l];for(y=1;y<13;y++)if(m<D[y]){p+=m-D[y-1];break}return{year:d,month:y,day:p,wday:n,yday:m}}daysToMonth(e){return this.isLeapYear(e)?this.daysToMonth366:this.daysToMonth365}isLeapYear(e){return e%4===0}}class v{constructor(){r(this,"daysToMonth366",[0,31,60,91,121,152,182,213,244,274,305,335,366]),r(this,"daysToMonth365",[0,31,59,90,120,151,181,212,243,273,304,334,365])}static get instance(){return new v}get name(){return"Gregorian Calendar"}dateToKaen(e,t,a){return this.dateToDays(e,t,a)}dateToDays(e,t,a){const n=e-y,r=h((e-1)/4)-492,s=h((e-1)/100)-19,i=h((e-1)/400)-4,d=this.daysToMonth(e);var c=n*o+d[t-1]+a-1;return c+=r-s+i,c}daysToDate(e){const t=[[0,31,59,90,120,151,181,212,243,273,304,334,365],[0,31,60,91,121,152,182,213,244,274,305,335,366]];var a=e+l;const n=u(a+1,7);var r=h(a/i);a%=i;var s=h(a/d);s>3&&(s=3),a-=s*d;var y=h(a/c);y>24&&(y=24),a-=y*c;var m=h(a/o);m>3&&(m=3),a-=m*o;const p=1,D=p+400*r+100*s+4*y+m,x=+((!(D%4)&&(D%100||!(D%400)))>0);var f,w=a,v=1;const g=t[x];for(f=1;f<13;f++)if(w<g[f]){v+=w-g[f-1];break}return{year:D,month:f,day:v,wday:n,yday:w}}secondsToDate(e){var t,a,n,r,s,o,i,d,c,l,y,u,m,p=e;const D=[[0,31,59,90,120,151,181,212,243,273,304,334,365],[0,31,60,91,121,152,182,213,244,274,305,335,366]],x=12622780800,f=86400;for(t=p+11644473600,m=h(t/f+1)%7,a=h(t/x),t%=x,n=h(t/3155673600),n>3&&(n=3),t-=3155673600*n,r=h(t/126230400),r>24&&(r=24),t-=126230400*r,s=h(t/31536e3),s>3&&(s=3),t-=31536e3*s,o=1601+400*a+100*n+4*r+s,i=+(!(o%4)&&(o%100||!(o%400))),d=h(t/86400),t%=86400,c=h(t/3600),t%=3600,l=h(t/60),t%=60,u=1,y=1;y<13;y++)if(d<D[i][y]){u+=d-D[i][y-1];break}const w={second:t,minute:l,hour:c,day:u,month:y,year:o,wday:m,yday:d};return w}daysToMonth(e){return this.isLeapYear(e)?this.daysToMonth366:this.daysToMonth365}isLeapYear(e){return e%4===0&&(e%100!==0||e%400===0)}}e.exports.CeCalendar=x,e.exports.Gregorian=v,e.exports.Julian=w},6447:function(e,t,a){var n=a(6490)["default"],r=a(5958)["default"],s=a(7831)["default"],o=a(5950)["default"],i=a(944)["default"],d=a(4344)["default"];const{MillisPerDay:c}=a(7487),{CeCalendar:l}=a(269),y=a(6669),{floor:h}=a(6885);class u{constructor(e,t,a,n=undefined){d(this,"year",void 0),d(this,"month",void 0),d(this,"day",void 0),d(this,"invalid",void 0),this.year=e,this.month=t,this.day=a,this.invalid=n}get isEmpty(){return this.invalid}static get Empty(){return new u(void 0,void 0,void 0,!0)}}const m=-141427,p=-141438;var D=new WeakMap,x=new WeakMap,f=new WeakSet;class w{constructor(e=u.Empty,t=new l){if(n(this,f),r(this,D,{writable:!0,value:void 0}),r(this,x,{writable:!0,value:void 0}),i(this,x,t),(void 0===e||e.isEmpty)&&(e=h(y.PhnomPenhTime().time/c)),(e.constructor===y||e.time)&&(e=h(e.time/c)),void 0!==e.year&&e.month&&e.day){const t=e.year,a=e.month,n=e.day;e=o(this,x).dateToDays(t,a,n)}s(this,f,v).call(this,e)}static fromKaen(e){var t=e;return t<m&&(t-=10),t<m&&t>p&&(t+=m-t),new w(t)}get days(){return o(this,D)}get year(){return this.get().year}get month(){return this.get().month}get day(){return this.get().day}get calendar(){return o(this,x)}get(){return o(this,x).daysToDate(this.days)}static Now(){return new this}static PPNow(){return new this}}function v(e){i(this,D,e)}e.exports.CeDate=w},2023:function(e,t,a){var n=a(5958)["default"],r=a(4344)["default"],s=a(5950)["default"],o=a(944)["default"];const{EDays:i,KDays:d,LunaMonths:c,EAnimalYears:l,AnimalYears:y,ELunaMonths:h,Saks:u,KCEMonths:m}=a(7487),{MillisPerDay:p}=a(7487),{CeDate:D}=a(6447),{CeCalendar:x}=a(269),{YearType:f}=a(2410),w=a(6669),{fdivide:v,mod:g}=a(6885),{toKh:T}=a(466),k=Math.floor;var M=new WeakMap,_=new WeakMap;class C{constructor(...e){if(n(this,M,{writable:!0,value:void 0}),n(this,_,{writable:!0,value:new x}),r(this,"addDays",(e=>new C(this.daysFrom1970()+e))),r(this,"dateToKaen",((e,t,a)=>this.daysToKaen(s(this,_).dateToKaen(e,t,a)))),r(this,"daysToKaen",(e=>e+C.DaysTo1970+C.DaysBeforeJs)),r(this,"daysFromJs",(()=>this.kaen-C.DaysBeforeJs)),r(this,"daysFrom1970",(()=>this.kaen-C.DaysBeforeJs-C.DaysTo1970)),r(this,"elapsedDays",(()=>this.daysFromJs())),r(this,"getYearJs",(()=>{const e=this.elapsedDays();return k((800*e-1173)/292207)})),r(this,"daysFrom1970",(()=>this.elapsedDays()-C.DaysTo1970)),r(this,"elapsedDaysToUtc",(e=>(e-C.EPOCH_OFFSET_AHAKUN-C.EPOCH_OFFSET_FROM_UTC)*C.MILLIS_PER_DAY)),r(this,"beToJsYear",((e,t)=>e>=162?t-1182:t-1181)),r(this,"getDate",(()=>{var e=this.getYearJs(),t=this.calcYearProperty(e);const a=this.kaen-C.DaysBeforeJs,n=t.lerngSak,r=n.month.startDay+n.day;var s=a-n.elapsedDaysJs+r;const o=this.calcDayMonth(s,t),i=o.days<=15,d=o.days,c=o.month,l=this.jsToBeYear(s,e),y=this.getAnimalAndSak(e,s,n),h=g(a,7);var u=D.fromKaen(this.daysFrom1970()).get();const m=u.year,p=u.month,x=u.day;return{ydays:s,ad:u,kean:this.kaen,yearAd:m,monthAd:p,dayAd:x,dayOfWeek:h,day:d,month:c,yearBe:l,kert:i,yearJs:e,animal:y.indexAnimal,sak:y.indexSak,yearType:t.yearType}})),void 0!==e&&!1!==e&&void 0!==e[0]||(e=this.daysToKaen(k(w.PhnomPenhTime().time/p))),e.constructor===Date&&(e=k(e.getTime()/p)),e.constructor===Array&&1===e.length){const t=e[0];e=void 0!==t.year&&t.year.constructor===Number&&t.month&&t.day?this.dateToKaen(t.year,t.month,t.day):this.daysToKaen(t)}e.constructor===Array&&3===e.length&&(e=this.dateToKaen(e[0],e[1],e[2])),o(this,M,e)}get kaen(){return s(this,M)}adDaysFromDayZero(){const e=new Date(this.kaen*p),t=new Date(e.getFullYear(),0,0),a=60*(t.getTimezoneOffset()-e.getTimezoneOffset())*1e3;return k((e-t+a)/C.MILLIS_PER_DAY)}calcYearProperty(e){function t(e){const{result:t,remainder:a}=v(292207*e+1173,800),n=t,r=800-a,s=g(n+2611,3232),{result:o,remainder:i}=v(k(11*n+650),692),d=n+o,{result:c,remainder:l}=v(d,30),y=i<137&&r>207||i<126&&r<208,h=l<6||l>25;return{yearJs:e,ahakun:n,kromthupul:r,avarman:i,bodethey:l,totalMonths:c,oicheapul:s,isExtraDay:y,isExtraMonth:h,elapsedTithis:d}}function a(e,t){const a=25===e.bodethey&&5!==t.bodethey,n=24===e.bodethey&&6===t.bodethey;return e.isExtraMonth||a||n}function n(e,t,n){const r=t.isExtraDay||25===t.bodethey&&5===e.bodethey,s=a(t,e),o=r&&s;return o||e.isExtraDay||25===e.bodethey&&5===n.bodethey}const r=t(e),s=t(e+1),o=t(e-1),i=a(r,s),d=n(r,o,s),l=i*f.ExtraMonth+d*f.ExtraDay,y=i?384:d?355:354,h=i?13:12,u=i?c.ExtraMonth:d?c.ExtraDay:c.Normal,m=this.calcLerngSak({...r,months:u},o),p=r.kromthupul<=207,D=()=>this.calcYearProperty(e+1),x=()=>this.calcYearProperty(e-1);return{...r,adLeap:p,isExtraDay:d,isExtraMonth:i,dayCount:y,monthCount:h,months:u,yearType:l,lerngSak:m,nextYear:D,previousYear:x}}jsToBeYear(e,t){const a=162;return e>a?t+1182:t+1181}calcDayMonth(e,t){let a=e,n=0;a>t.dayCount&&(a-=t.dayCount);const r=t.months;for(n=0;n<r.length;n++){const e=r[n];if(a<=e.days)break;a-=e.days}return{days:a,month:r[n],monthIndex:n}}calcLerngSak(e,t){const a=g(e.ahakun,7),n=d[a],r=i[a],s=e.ahakun,o=s-C.DaysTo1970;var c=4,l=e.bodethey,y=!0;e.bodethey>15&&(y=!1),e.bodethey<=5&&(c=5);const h=e.bodethey<=5||t.isExtraDay&&t.isExtraMonth;h&&(l+=1);const u=()=>new C(o);return{day:l,kert:y,month:e.months[c],dayNameEn:r,dayNameKh:n,dayIndex:a,elapsedDaysUtc:o,elapsedDaysJs:s,toLunaDate:u}}getAnimalAndSak(e,t,a){let n=g(e+C.OFFSET_SAK,10),r=g(e+C.OFFSET_ANIMAL,12);const s=a.month.startDay+a.day;return t>s&&(r=g(r+1,12),n=g(n+1,10)),{indexAnimal:r,indexSak:n}}}function b(e){const t=`ថ្ងៃ${d[e.dayOfWeek]} ${e.kert?e.day+"កើត":e.day-15+"រោច"} ខែ${e.month.name} ឆ្នាំ${y[e.animal]} ${u[e.sak]} ព.ស.${e.yearBe}`;return T(t)}function A(e=(new C).getDate()){const t=`ថ្ងៃទី${e.ad.day} ខែ${m[e.ad.month-1]} ឆ្នាំ${e.ad.year}`;return T(t)}r(C,"EPOCH_OFFSET_AHAKUN",486526),r(C,"EPOCH_OFFSET_FROM_UTC",-105),r(C,"MILLIS_PER_DAY",864e5),r(C,"OFFSET_SAK",8),r(C,"OFFSET_ANIMAL",9),r(C,"OFFSET_WEEKDAY",0),r(C,"DaysBeforeJs",431370),r(C,"DaysTo1970",486421),r(C,"fromKaen",(e=>new C(e-C.DaysTo1970-C.DaysBeforeJs))),C.prototype.toString=function(){const e=this.getDate(),t=e.yearType>=f.ExtraMonth?h.ExtraMonth:h.Normal;return`${i[e.dayOfWeek]} ${e.kert?e.day+"K":e.day-15+"R"} Month.${t[e.month.index]} Year.${l[e.animal]} BE.${e.yearBe}}`},e.exports.Cg=C,e.exports.YX=b,e.exports.v_=A},7487:function(e){e.exports.DAYS_OFFSET_IN_800_YEARS=499,e.exports.DAYS_PER_YEAR_EXACT=365.25875,e.exports.OFFSET_TIMEZONE=252e5,e.exports.DaysPer800Y=292207,e.exports.DaysPerYear=365,e.exports.DaysPer400Years=146097,e.exports.DaysPer100Years=36524,e.exports.DaysPer4Years=1461,e.exports.DaysFrom1601To1970=719162,e.exports.MillisPerDay=864e5,e.exports.MillisPerHour=36e5,e.exports.MillisPerMinute=6e4,e.exports.MillisPerSecond=1e3,e.exports.GregorianEpochYear=1970;const t="មិគសិរ",a="បុស្ស",n="មាឃ",r="ផល្គុន",s="ចេត្រ",o="ពិសាខ",i="ជេស្ឋ",d="អាសាឍ",c="បឋមាសាឍ",l="ទុតិយាសាឍ",y="ស្រាពណ៍",h="ភទ្របទ",u="អស្សុជ",m="កត្ដិក",p=[{index:0,days:29,startDay:0,name:t},{index:1,days:30,startDay:29,name:a},{index:2,days:29,startDay:59,name:n},{index:3,days:30,startDay:88,name:r},{index:4,days:29,startDay:118,name:s},{index:5,days:30,startDay:147,name:o},{index:6,days:30,startDay:177,name:i},{index:7,days:30,startDay:207,name:d},{index:8,days:29,startDay:237,name:y},{index:9,days:30,startDay:266,name:h},{index:10,days:29,startDay:296,name:u},{index:11,days:30,startDay:325,name:m}],D=[{index:0,days:29,startDay:0,name:t},{index:1,days:30,startDay:29,name:a},{index:2,days:29,startDay:59,name:n},{index:3,days:30,startDay:88,name:r},{index:4,days:29,startDay:118,name:s},{index:5,days:30,startDay:147,name:o},{index:6,days:29,startDay:177,name:i},{index:7,days:30,startDay:206,name:c},{index:8,days:30,startDay:236,name:l},{index:9,days:29,startDay:266,name:y},{index:10,days:30,startDay:295,name:h},{index:11,days:29,startDay:325,name:u},{index:12,days:30,startDay:354,name:m}],x=[{index:0,days:29,startDay:0,name:t},{index:1,days:30,startDay:29,name:a},{index:2,days:29,startDay:59,name:n},{index:3,days:30,startDay:88,name:r},{index:4,days:29,startDay:118,name:s},{index:5,days:30,startDay:147,name:o},{index:6,days:29,startDay:177,name:i},{index:7,days:30,startDay:206,name:d},{index:8,days:29,startDay:236,name:y},{index:9,days:30,startDay:265,name:h},{index:10,days:29,startDay:295,name:u},{index:11,days:30,startDay:324,name:m}];e.exports.Kert="កើត",e.exports.Roch="រោច",e.exports.KDay="ថ្ងៃ",e.exports.KMonth="ខែ",e.exports.KYear="ឆ្នាំ",e.exports.KBE="ព.ស.",e.exports.KJS="ចុល្លសករាជ",e.exports.LANG="KH",e.exports.KDays=["សៅរ៍","អាទិត្យ","ចន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ"],e.exports.EDays=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],e.exports.ECEMonths=["January","February","March","April","May","June","July","August","September","October","November","December"],e.exports.KCEMonths=["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],e.exports.KLunaMonths=[t,a,n,r,s,o,i,d,c,l,y,h,u,m],e.exports.ELunaMonths={Normal:["Miksey","Bos","Meak","Polkun","Chet","Pisak","Ches","Asath","Srap","Paktrobot","Asoch","Kadek"],ExtraMonth:["Miksey","Bos","Meak","Polkun","Chet","Pisak","Ches","AsethA","AsathB","Srap","Paktrobot","Asoch","Kadek"]},e.exports.AnimalYears=["ជូត","ឆ្លូវ","ខាល","ថោះ","រោង","ម្សាញ់","មមី","មមែ","វក","រកា","ច","កុរ"],e.exports.EAnimalYears=["Chut","Chlov","Khal","Thors","Rong","Msanh","Momie","Momer","Vok","Roka","Chor","Kul"],e.exports.Saks=["ឯកស័ក","ទោស័ក","ត្រីស័ក","ចត្វាស័ក","បញ្ចស័ក","ឆស័ក","សប្ដស័ក","អដ្ឋស័ក","នព្វស័ក","សំរឹទ្ធិស័ក"],e.exports.LMChet=s,e.exports.LMPisak=o,e.exports.LunaMonths={ExtraDay:p,ExtraMonth:D,Normal:x}},6669:function(e,t,a){var n=a(5958)["default"],r=a(944)["default"],s=a(5950)["default"];const{MillisPerHour:o,MillisPerMinute:i,MillisPerDay:d}=a(7487),{CeDate:c}=a(6447),l=Math.floor;var y=new WeakMap;class h{constructor(e){n(this,y,{writable:!0,value:void 0}),void 0===e&&(e=h._getUtcNow()),(e.constructor===h||e.time)&&(e=s(e,y)),this._setTimestamp(e)}_setTimestamp(e){r(this,y,e)}get time(){return s(this,y)}static _getUtcNow(){return Date.now?Date.now():+new Date}static UtcNow(){return new h(h._getUtcNow())}static TimezoneOffset(){return(new Date).getTimezoneOffset()*i}static LocalNow(){return new h(h._getUtcNow()-h.TimezoneOffset())}static TimeInZone(e){return new h(h._getUtcNow()+e*o)}static PhnomPenhTime(){return new h(h.TimeInZone(7))}static PhnomPenhDate(){return l(this.PhnomPenhTime().time/d)}toDateTime(){return new c(l(this.time/o))}}e.exports=h},466:function(e){function t(e,t=!1){const a="០១២៣៤៥៦៧៨៩",n="0123456789";let r=`${e}`;for(let s=0;s<a.length;s++)r=t?r.replaceAll(a[s],n[s]):r.replaceAll(n[s],a[s]);return r}const a=e=>t(e,!0),n=e=>e!==e,r=e=>e.match(/\d+/g),s=function(){const e=new Date,t=e.getDate(),a=e.getMonth(),n=e.getFullYear();return Date.UTC(n,a,t)};e.exports.isNaN=n,e.exports.isNumber=e=>!n(Number(e))||Boolean(e)&&e.constructor===Number,e.exports.isString=e=>Boolean(e)&&e.constructor===String,e.exports.isNullOrEmpty=e=>null===e||void 0===e||""===e,e.exports.toKh=t,e.exports.toEn=a,e.exports.extractNumbers=r,e.exports.utcToday=s},2410:function(e){const t=Object.freeze({Normal:0,ExtraDay:1,ExtraMonth:2,ExtraMonthAndDay:3});e.exports.YearType=t},6885:function(e){function t(e){return Math.floor(e)}function a(e,t){return e-t*Math.floor(e/t)}const n=(e,t)=>({result:Math.floor(e/t),remainder:a(e,t)});e.exports.floor=t,e.exports.fdivide=n,e.exports.mod=a},3601:function(e,t,a){"use strict";var n=a(9242),r=a(3396);function s(e,t,a,n,s,o){const i=(0,r.up)("WordAddins");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i)])}const o={id:"app"},i={class:"content"},d=(0,r._)("div",{class:"content-header khmer-text"},[(0,r._)("div",{class:"text-center khmer-pali"},[(0,r._)("h1",null,"ចន្ទគតិខ្មែរ")])],-1),c={class:"content-main"},l={class:"padding"},y=(0,r._)("p",{class:"footer text-center"},"©Kunthet-Dev @2023",-1);function h(e,t,a,n,s,h){const u=(0,r.up)("CalendarFrame");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",i,[d,(0,r._)("div",c,[(0,r._)("div",l,[(0,r.Wm)(u),y])])])])}var u=a(7139);const m=e=>((0,r.dD)("data-v-66230880"),e=e(),(0,r.Cn)(),e),p={class:"khmer-text text-center"},D={class:"khmer-moul centered-content"},x=m((()=>(0,r._)("div",{style:{height:"10px"}},null,-1))),f={class:"khmer-text"},w=m((()=>(0,r._)("div",{style:{width:"300px","border-bottom":"1px solid #e3e3e3"}},null,-1))),v=m((()=>(0,r._)("div",{style:{width:"300px","border-bottom":"1px solid #e3e3e3"}},null,-1))),g={id:"date-text",class:"khmer-text text-center",style:{"margin-top":"10px"}},T=m((()=>(0,r._)("br",null,null,-1))),k={style:{"font-size":"11px","padding-bottom":"10px"}},M=m((()=>(0,r._)("label",{for:"input-month",class:"khmer-text"},"ខែ: ",-1))),_=m((()=>(0,r._)("option",{disabled:"",value:""},"សូមរើសខែ",-1))),C=["value"],b=m((()=>(0,r._)("label",{for:"input-year",class:"khmer-text"},"ឆ្នាំ: ",-1))),A={class:"centered-content blue-background"},E={class:"wrapper"},S={class:"wrapper"};function P(e,t,a,s,o,i){const d=(0,r.up)("CalendarCellHeader"),c=(0,r.up)("CalendarCell");return(0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("div",D,[x,(0,r._)("div",null,(0,u.zw)(i.yearBeText),1),(0,r._)("div",f,(0,u.zw)(i.yearJsText),1),w,(0,r._)("div",null,(0,u.zw)(i.lunaMonths),1),v]),(0,r._)("div",g,[(0,r.Uk)((0,u.zw)(i.lunaDateText)+" ",1),T,(0,r.Uk)(" "+(0,u.zw)(i.solarDateText),1)]),(0,r._)("div",k,[(0,r._)("span",{class:"clickable",style:{padding:"10px"},onClick:t[0]||(t[0]=(...e)=>i.gotoToday&&i.gotoToday(...e))},"ថ្ងៃនេះ"),(0,r._)("span",{class:"clickable",style:{padding:"10px"},onClick:t[1]||(t[1]=(...e)=>i.onCopy&&i.onCopy(...e))},"ចម្លង"),i.runInOffice?((0,r.wg)(),(0,r.iD)("span",{key:0,class:"clickable",style:{margin:"10px"},onClick:t[2]||(t[2]=(...e)=>i.insertIntoDocument&&i.insertIntoDocument(...e))},(0,u.zw)(i.insertIntoDocumentLabel),1)):(0,r.kq)("",!0)]),(0,r._)("div",null,[M,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.monthAdIndex=e),class:"khmer-text input-center",id:"input-month"},[_,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.monthsAd,((e,t)=>((0,r.wg)(),(0,r.iD)("option",{value:t,key:t},(0,u.zw)(e),9,C)))),128))],512),[[n.bM,o.monthAdIndex]]),b,(0,r.wy)((0,r._)("input",{id:"input-year",type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>o.yearAd=e),class:"input-center khmer-text"},null,512),[[n.nr,o.yearAd,void 0,{number:!0}]])]),(0,r._)("div",A,[(0,r._)("div",E,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.weekdaysFull,((e,t)=>((0,r.wg)(),(0,r.j4)(d,{title:e,key:t},null,8,["title"])))),128))]),(0,r._)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.cells,((e,t)=>((0,r.wg)(),(0,r.j4)(c,{date:e,key:t,onSelected:i.onSelected},null,8,["date","onSelected"])))),128))])])])}a(7658);const O={class:"outer-container box"},Y={class:"inner-container"},K={class:"centered-content"},F={class:"ad-date roman-number"},I={class:"luna-date khmer-number"};function N(e,t,a,n,s,o){return(0,r.wg)(),(0,r.iD)("div",{class:(0,u.C_)(o.outerContainerClass),onMouseenter:t[0]||(t[0]=e=>this.mouseOver=!0),onMouseleave:t[1]||(t[1]=e=>this.mouseOver=!1),onClick:t[2]||(t[2]=(...e)=>o.onSelected&&o.onSelected(...e)),style:(0,u.j5)(o.backgroundColor)},[(0,r._)("div",O,[(0,r._)("div",Y,[(0,r._)("div",K,[(0,r._)("div",F,(0,u.zw)(o.ad),1),(0,r._)("div",I,(0,u.zw)(o.lunaDay),1)])])])],38)}var $=a(8627),J={name:"CalendarCell",props:{date:Object},emits:["selected"],mounted(){const e=$.hS.getInstance();e.on("cell-selected",(()=>{this.isSelected=!1})),this.isSelected=this.date?.isSelected},data(){return{mouseOver:!1,isSelected:!1}},computed:{lunaDay(){return this.date?.day?`${this.date.day}${this.date.kert?"ក":"រ"}`:null},ad(){return this.date?.ad.day??""},backgroundColor(){return this.mouseOver&&this.date&&this.date.ad.day?"background:#4f8ffd":""},outerContainerClass(){return this.isSelected?"outer-container selected box":"outer-container box"}},methods:{onSelected(){this.date&&this.date.ad.day&&(this.$emit("selected",this.date),this.isSelected=!0)}},watch:{date(){this.isSelected=this.date?.isSelected}}},L=a(89);const B=(0,L.Z)(J,[["render",N],["__scopeId","data-v-13ebf67a"]]);var W=B;const z={class:"outer-container box"},U={class:"inner-container"},H={class:"centered-content"},j={class:"khmer-text title"};function R(e,t,a,n,s,o){return(0,r.wg)(),(0,r.iD)("div",z,[(0,r._)("div",U,[(0,r._)("div",H,[(0,r._)("div",j,(0,u.zw)(a.title??"a"),1)])])])}var Z={name:"CalendarCellHeader",props:{title:String},data(){return{}},computed:{lunaDay(){return`${this.date.dayLuna}${this.date.isKert?"ក":"រ"}`}}};const G=(0,L.Z)(Z,[["render",R],["__scopeId","data-v-66fe9e86"]]);var X=G,V=a(7487),q=a(2023),Q=a(269),ee=a(466);function te(){return!!window.Excel}function ae(){return!!window.Word}function ne(){return!!window.PowerPoint}async function re(e){const t=(new q.Cg).getDate(),a=(0,q.YX)(t);await se(a),e.completed()}async function se(e){try{ae()&&await window.Word.run((async t=>{const a=t.document.getSelection();a.insertText(e,"replace"),await t.sync()})),te()&&await window.Excel.run((async t=>{const a=t.workbook.getSelectedRange();a.values=[[e]],await t.sync()})),ne()&&(await window.Office.context.document.setSelectedDataAsync(e),await window.Office.context.sync())}catch(t){console.log(t)}}function oe(e,t){const a=e.length;return e.push(...e.splice(0,(-t%a+a)%a)),e}function ie(e,t){const a=new q.Cg(t,e+1,1),n=new Q.CeCalendar,r=n.daysPerMonth(t,e),s=[...Array(r)].map(((e,t)=>a.addDays(t).getDate())),o=(new q.Cg).getDate();return s.forEach((e=>{e.isSelected=e.kean===o.kean})),0===s.filter((e=>e.isSelected)).length&&(s[0].isSelected=!0),s}const de=$.hS.getInstance(),ce=V.KCEMonths,le=(new q.Cg).getDate(),ye=le.ad.month-1,he=le.yearAd,ue=ie(ye,he),me=(ue[0].dayOfWeek+6)%7,pe=(new q.Cg).getDate();var De={name:"CalendarFrame",components:{CalendarCell:W,CalendarCellHeader:X},emits:["selected"],data(){return{yearAd:he,monthAdIndex:ye,columns:7,weekdays:["អា","ច","អ","ពុ","ព្រ","សុ","សៅ"],weekdaysFull:oe([...V.KDays],-1),monthsAd:ce,dates:ue,startDate:me,selecteDate:pe}},computed:{rows(){return(this.startDate??0)+this.dates.length>35?6:5},cellCount(){return this.rows*this.columns},cells(){return[...Array(this.startDate),...this.dates,...Array(this.cellCount-this.startDate-this.dates.length)]},lunaDateText(){return(0,q.YX)(this.selecteDate)},solarDateText(){return(0,q.v_)(this.selecteDate)},dateText(){return`${this.lunaDateText}\n${this.solarDateText}`},lunaMonths(){const e=[...new Set(this.dates.map((e=>e.month.name)))];return e.join(" - ")},yearBeText(){const e=new q.Cg(this.yearAd,1,1).getDate(),t=new q.Cg(this.yearAd,12,31).getDate(),a=e.yearBe!==t.yearBe?`ពុទ្ធសករាជ ${e.yearBe} - ${t.yearBe}`:`ពុទ្ធសករាជ ${e.yearBe}`;return(0,ee.toKh)(a)},yearJsText(){const e=new q.Cg(this.yearAd,1,1).getDate(),t=new q.Cg(this.yearAd,12,31).getDate(),a=e.yearJs!==t.yearJs?`ច.ស.${e.yearJs} - ${t.yearJs}`:`ច.ស${e.yearJs}`;return(0,ee.toKh)(a)},runInOffice(){return window.Word||window.Excel},insertIntoDocumentLabel(){return window.Excel?"បញ្ចូលក្នុង Cell":"បញ្ចូលក្នុងអត្ថបទ"}},methods:{onSelected(e){this.selecteDate=e,this.$emit("selected",e),de.emit("cell-selected",e)},onCopy(){navigator.clipboard.writeText(this.dateText)},gotoToday(){const e=(new q.Cg).getDate();this.monthAdIndex===e.ad.month-1&&this.yearAd===e.yearAd?this.updateCalendar():(this.monthAdIndex=e.ad.month-1,this.yearAd=e.yearAd)},updateCalendar(){this.dates=ie(this.monthAdIndex,this.yearAd),this.startDate=(this.dates[0].dayOfWeek+6)%7},async insertIntoDocument(){try{await se(this.dateText)}catch(e){console.log(e)}}},watch:{monthAdIndex(){this.updateCalendar()},yearAd(){this.updateCalendar()},dates(){const e=this.dates.filter((e=>e.isSelected));this.onSelected(e[0])}}};const xe=(0,L.Z)(De,[["render",P],["__scopeId","data-v-66230880"]]);var fe=xe,we={name:"App",components:{CalendarFrame:fe},data(){return{}},methods:{}};const ve=(0,L.Z)(we,[["render",h]]);var ge=ve,Te={components:{WordAddins:ge},name:"App",data(){return{}}};const ke=(0,L.Z)(Te,[["render",s]]);var Me=ke;function _e(){(0,n.ri)(Me).mount("#app")}window.Office?(window.Office.onReady((()=>{_e()})),window.Office.actions.associate("AddTodayButton",re)):_e()}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,s){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],s=e[l][2];for(var i=!0,d=0;d<n.length;d++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[d])}))?n.splice(d--,1):(i=!1,s<o&&(o=s));if(i){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,r,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,o=n[0],i=n[1],d=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(d)var l=d(a)}for(t&&t(n);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(l)},n=self["webpackChunkkhmer_date_word_addins"]=self["webpackChunkkhmer_date_word_addins"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3601)}));n=a.O(n)})();
//# sourceMappingURL=app.aac46503.js.map