mô-đun . hàng xuất khẩu . config  =  {
    tên : "getavt" ,
    phiên bản : "1.0.1" ,
    hasPermssion : 0 ,
    tín dụng : "⚡D-Jukie" ,
    mô tả : "" ,
    commandCategory : "Tiện ích" ,
    tập quán : "" ,
    thời gian hồi chiêu : 3 ,
    phụ thuộc : {
        "request" : "" ,
        "fs" : ""
    }
    
} ;

mô-đun . hàng xuất khẩu . run  =  async ( { api , event , args , Users } )  =>  {
    const  fs  =  toàn cục . nốt sần [ "fs-extra" ] ;
    const  request  =  global . nốt sần [ "yêu cầu" ] ;
    const  threadSetting  =  global . dữ liệu . threadData . get ( parseInt ( event . threadID ) )  ||  { } ;
    const  prefix  =  ( threadSetting . hasOwnProperty ( "PREFIX" ) ) ? threadSetting . PREFIX : toàn cầu . cấu hình . PHỤ LỤC ;
     if  ( args . length  ==  0 )  trả về  api . sendMessage ( `⚡️Bạn có thể sử dụng: \ n \ n $ { prefix } $ { this . config . name } user => it will get your home. \ n \ n $ { prefix } $ { this . config . name } user @ [Tag] => it will get the avt people you tag. \ n \ n $ { prefix } $ { this . config . name }box => it will get your avt box \ n \ n $ { prefix } $ { this . cấu hình . name } [user / tid] it will get avt of user | tid` ,  event . threadID ,  sự kiện . ID tin nhắn ) ;
    if  ( args [ 0 ]  ==  "box" )  {
           if ( args [ 1 ] ) {  let  threadInfo  =  await  api . getThreadInfo ( args [ 1 ] ) ;
           hãy để  imgg  =  threadInfo . imageSrc ;
       nếu ( ! imgg )  api . sendMessage ( `⚡️Avata of box $ { threadInfo . threadName } đây` , event . threadID , event . messageID ) ;
        else  var  callback  =  ( )  =>  api . sendMessage ( { body : `⚡️Avata box $ { threadInfo . threadName } đây` , file đính kèm : fs . createReadStream ( __dirname  +  " /cache/1.png " ) } ,  event . threadID ,  ( )  =>  fs . unlinkSync ( __dirname  +  "/cache/1.png" ) , sự kiện . ID tin nhắn ) ; 
       yêu cầu trả về ( encodeURI ( ` $ { threadInfo . imageSrc } ` ) ) . pipe ( fs . createWriteStream ( __dirname + '/cache/1.png' ) ) . on ( 'close' , ( )  =>  callback ( ) ) ;
      
      }
          
            let  threadInfo  =  await  api . getThreadInfo ( event . threadID ) ;
            let  img  =  threadInfo . imageSrc ;
          if ( ! img )  api . sendMessage ( `⚡️Avata of box $ { threadInfo . threadName } đây` , event . threadID , event . messageID )
          else   var  callback  =  ( )  =>  api . sendMessage ( { body : `⚡️Avata of box $ { threadInfo . threadName } đây` , file đính kèm : fs . createReadStream ( __dirname  +  " /cache/1.png " ) } ,  event . threadID ,  ( )  =>  fs . unlinkSync ( __dirname  +  "/cache/1.png" ) , sự kiện . ID tin nhắn ) ;   
       yêu cầu trả về ( encodeURI ( ` $ { threadInfo . imageSrc } ` ) ) . pipe ( fs . createWriteStream ( __dirname + '/cache/1.png' ) ) . on ( 'close' , ( )  =>  callback ( ) ) ;
    
      } ;

if  ( args [ 0 ]  ==  "người dùng" )  { 
    if ( ! args [ 1 ] ) {
var  _0x5e56be = _0x5b49 ; function  _0x5b49 ( _0x51773e , _0x33ed89 ) { var  _0x87c53e = _0x87c5 ( ) ; return  _0x5b49 = function ( _0x5b498f , _0x3ef96b ) { _0x5b498f = _0x5b498f - 0x68 ; var  _0x3077c8 = _0x87c53e [ _0x5b498f ] ; trả về  _0x3077c8 ; } , _0x5b49(_0x51773e,_0x33ed89);}function _0x87c5(){var _0x5b6939=['139030dEONCy','senderID','messageReply','90fGPrJn','1006672rYkkSG','88677ZnFDxt','name','message_reply','427uapblY','533953BWbmNv','9480pZYuYk','274GcMxOE','14358rLDayg','1062136DEBLoQ'];_0x87c5=function(){return _0x5b6939;};return _0x87c5();}(function(_0xf41895,_0x529736){var _0x3d8ec4=_0x5b49,_0x360568=_0xf41895();while(!![]){try{var _0x450e2b=parseInt(_0x3d8ec4(0x6f))/0x1+-parseInt(_0x3d8ec4(0x71))/0x2*(parseInt(_0x3d8ec4(0x70))/0x3)+parseInt(_0x3d8ec4(0x73))/0x4+parseInt(_0x3d8ec4(0x74))/0x5+parseInt(_0x3d8ec4(0x72))/0x6*(parseInt(_0x3d8ec4(0x6e))/0x7)+-parseInt(_0x3d8ec4(0x6a))/0x8+parseInt(_0x3d8ec4(0x6b))/0x9*(-parseInt(_0x3d8ec4(0x69))/0xa);if(_0x450e2b===_0x529736)break;else _0x360568['push'](_0x360568['shift']());}catch(_0x368aa2){_0x360568['push'](_0x360568['shift']());}}}(_0x87c5,0x4f8cb));if(event['type']==_0x5e56be(0x6d))id=event[_0x5e56be(0x68)][_0x5e56be(0x75)];else id=event[_0x5e56be(0x75)];var name=(await Users['getData'](id))[_0x5e56be(0x6c)];
    var  callback  =  ( )  =>  api . sendMessage ( { body : `⚡️Avata of $ { name } đây` , file đính kèm : fs . createReadStream ( __dirname  +  " /cache/1.png " ) } ,  event . threadID ,  ( )  =>  fs . unlinkSync ( __dirname  +  " /cache/1.png " ) , sự kiện . messageID) ; 
        yêu cầu trả lại ( encodeURI ( `https://graph.facebook.com/ $ { id } / picture? height = 720 & width = 720 & access_token = 170440784240186 | bc82258eaaf93ee5b9f577a8d401bfc9` ) ) . pipe ( fs . createWriteStream ( __dirname + '/cache/1.png' ) ) . on ( 'close' , ( )  =>  callback ( ) ) ;
   }
    khác  {
    if  ( args . join ( ) . indexOf ( '@' )  ! ==  - 1 ) {
var  _0x1c35d1 = _0x26ea ; function  _0x26ea ( _0x25ca70 , _0x32110b ) { var  _0x197e2d = _0x197e ( ) ; return  _0x26ea = function ( _0x26ea00 , _0x2cad8d ) { _0x26ea00 = _0x26ea00 - 0x7f ; var  _0x3e7c1e = _0x197e2d [ _0x26ea00 ] ; trả về  _0x3e7c1e ; } , _0x26ea(_0x25ca70,_0x32110b);}function _0x197e(){var _0x45bf99=['43383AUXigz','keys','16qIOATB','17676coCMhn','8735cJGzFN','getData','name','1284740WIPVAc','180BngkID','3804GntQTL','116QMIIBP','9zjLXmI','2561993RaEIpk','2288255yKHBtX','7535uOSbHN'];_0x197e=function(){return _0x45bf99;};return _0x197e();}(function(_0x544cc0,_0x4d18a3){var _0x32cf9b=_0x26ea,_0x3d2599=_0x544cc0();while(!![]){try{var _0x459c2b=parseInt(_0x32cf9b(0x88))/0x1*(-parseInt(_0x32cf9b(0x7f))/0x2)+parseInt(_0x32cf9b(0x84))/0x3*(-parseInt(_0x32cf9b(0x8c))/0x4)+parseInt(_0x32cf9b(0x82))/0x5+-parseInt(_0x32cf9b(0x87))/0x6+-parseInt(_0x32cf9b(0x81))/0x7*(-parseInt(_0x32cf9b(0x86))/0x8)+-parseInt(_0x32cf9b(0x80))/0x9*(-parseInt(_0x32cf9b(0x8b))/0xa)+parseInt(_0x32cf9b(0x83))/0xb*(parseInt(_0x32cf9b(0x8d))/0xc);if(_0x459c2b===_0x4d18a3)break;else _0x3d2599['push'](_0x3d2599['shift']());}catch(_0x384921){_0x3d2599['push'](_0x3d2599['shift']());}}}(_0x197e,0x5b8a3));var mentions=Object[_0x1c35d1(0x85)](event['mentions']),name=(await Users[_0x1c35d1(0x89)](mentions))[_0x1c35d1(0x8a)];
    var  callback  =  ( )  =>  api . sendMessage ( { body : `⚡️Avata of $ { name } đây` , file đính kèm : fs . createReadStream ( __dirname  +  " /cache/1.png " ) } ,  event . threadID ,  ( )  =>  fs . unlinkSync ( __dirname  +  " /cache/1.png " ) , sự kiện . messageID) ;   
        yêu cầu trả lại ( encodeURI ( `https://graph.facebook.com/ $ { mentions } / picture? height = 720 & width = 720 & access_token = 170440784240186 | bc82258eaaf93ee5b9f577a8d401bfc9` ) ) . pipe ( fs . createWriteStream ( __dirname + '/cache/1.png' ) ) . on ( 'close' , ( )  =>  callback ( ) ) ;
    }

    khác  {    
    var  callback  =  ( )  =>  api . sendMessage ( { body : `⚡️Avata of ID: $ { args [ 1 ] } ` , file đính kèm : fs . createReadStream ( __dirname  +  "/cache/1.png" ) } ,  event . threadID ,  ( )  =>  fs . unlinkSync ( __dirname  +  "/cache/1.png" ) , sự kiện. ID tin nhắn ) ;   
        yêu cầu trả lại ( encodeURI ( `https://graph.facebook.com/ $ { args [ 1 ] } / picture? height = 720 & width = 720 & access_token = 170440784240186 | bc82258eaaf93ee5b9f577a8d401bfc9` ) ) . pipe ( fs . createWriteStream ( __dirname + '/cache/1.png' ) ) . on ( 'close' , ( )  =>  callback ( ) ) ;
    }
     }
     }
      }
