mô-đun . hàng xuất khẩu . config  =  {
    tên : "tệp" ,
    phiên bản : "1.0.1" ,
    hasPermssion : 2 ,
    tín dụng : "JRT" ,
    mô tả : "Xóa tệp hoặc thư mục trong các lệnh thư mục" ,
    commandCategory : "Quản trị viên" ,
    usages : "\ ncommands start <text> \ ncommands ext <text> \ ncommands <text> \ ncommands [để trống] \ ncommands help \ nLƯU Ý: <text> is your character fill in the option" ,
    thời gian hồi chiêu : 5
} ;

mô-đun . hàng xuất khẩu . handleReply  =  ( { api , event , args , handleReply } )  =>  {
    if ( event . senderID  ! =  handleReply . author )  return ; 
    const  fs  =  request ( "fs-extra" ) ;
  var  arrnum  =  sự kiện . cơ thể . chia ( "" ) ;
  var  msg  =  "" ;
  var  nums  =  arrnum . map ( n  =>  parseInt ( n ) ) ;

  for ( let  num  of  nums )  {
    var  target  =  handleReply . các tệp [ num - 1 ] ;
    var  fileOrdir  =  fs . statSync ( __dirname + '/' + target ) ;
        if ( fileOrdir . isDirectory ( )  ==  true )  {
          var  typef  =  "[Thư mục🗂️]" ;
          fs . rmdirSync ( __dirname + '/' + target ,  { recursive : true } ) ;
        }
        else  if ( fileOrdir . isFile ( )  ==  true )  {
          var  typef  =  "[Tập tin📄]" ;
          fs . unlinkSync ( __dirname + "/" + target ) ;
        }
        msg  + =  typef + '' + handleReply . tệp [ num - 1 ] + "\ n" ;
  }
  api . sendMessage ( "⚡️Đã xóa các tập tin sau các lệnh thư mục: \ n \ n" + msg ,  event . threadID ,  event . messageID ) ;
}


mô-đun . hàng xuất khẩu . run  =  async  function ( { api , event , args , Threads } )  {
  
  const  fs  =  request ( "fs-extra" ) ;
  var  tệp  =  fs . readdirSync ( __dirname + "/" )  ||  [ ] ;
  var  msg  =  "" ,  i  =  1 ;
  
//

  if ( args [ 0 ]  ==  'help' )  {
    var  msg  =  `
Command use:
• Phím: start <text>
• Tác dụng: Lọc ra tệp cần xóa có tùy chọn bắt đầu ký tự
• Ví dụ: xếp hạng lệnh
• Khóa: ext <text>
• Tác dụng: Filter ra file cần xóa có tùy chọn đuôi
• Tác dụng: filter the files in name with text option
• Ví dụ: các lệnh a
• Key: to blank
• Tác dụng: filter ra all files in cache
• Ví dụ: lệnh
• Chìa khóa: trợ giúp
• Tác dụng: xem cách sử dụng lệnh
• Ví dụ: lệnh help` ;
    
    trả lại  api . sendMessage ( msg ,  event . threadID ,  event . messageID ) ;
  }
  else  if ( args [ 0 ]  ==  "start"  &&  args [ 1 ] )  {
    var  word  =  args . lát ( 1 ) . tham gia ( "" ) ;
    var  files  =  các tập tin . filter ( file  =>  file . startWith ( word ) ) ;
    
    if ( files . length  ==  0 )  trả về  api . sendMessage ( `⚡️Không có tệp nào trong bộ đệm có ký tự bắt đầu bằng: $ { word } ` ,  event . threadID  , event .  messageID ) ;
    var  key  =  `⚡️Có $ { tệp . length } tệp có đầu ký tự là: $ { word } ` ;
  }
  
  // tập tin đuôi là .....
  else  if ( args [ 0 ]  ==  "ext"  &&  args [ 1 ] )  {
    var  ext  =  args [ 1 ] ;
    var  files  =  các tập tin . filter ( file  =>  file . endWith ( ext ) ) ;
    
    if ( files . length  ==  0 )  trả về  api . sendMessage ( `⚡️Không có tệp nào trong các lệnh có ký tự kết thúc bằng: $ { ext } ` ,  event . threadID  , event .  messageID ) ;
    var  key  =  `⚡️Có $ { tệp . length } file có đuôi là: $ { ext } ` ;
  }
  //Tất cả các tập tin
  khác  nếu  ( ! args [ 0 ] )  {
  if ( files . length  ==  0 )  trả về  api . sendMessage ( "️Commands của bạn không có tệp hoặc thư mục nào" ,  event . threadID  , event .  messageID ) ;
  var  key  =  "⚡️Tất cả các tệp trong các lệnh thư mục:" ;
  }
  // in name with character .....
  khác  {
    var  word  =  args . lát ( 0 ) . tham gia ( "" ) ;
    var  files  =  các tập tin . filter ( file  =>  file . bao gồm ( word ) ) ;
    if ( files . length  ==  0 )  trả về  api . sendMessage ( `⚡️Không có tệp nào trong tên có ký tự: $ { word } ` ,  event . threadID  , event .  messageID ) ;
    var  key  =  `⚡️Có $ { tệp . length } file in name with character: $ { word } ` ;
  }
  
    các tập tin . forEach ( tệp  =>  {
        var  fileOrdir  =  fs . statSync ( __dirname + '/' + tệp ) ;
        if ( fileOrdir . isDirectory ( )  ==  true )  var  typef  =  "[Thư mục🗂️]" ;
        if ( fileOrdir . isFile ( )  ==  true )  var  typef  =  "[File📄]" ;
        msg  + =  ( i ++ ) + '. ' + typef + ' ' + tệp + ' \ n ' ;
    } ) ;
    
     api . sendMessage ( `⚡️Reply message bằng số để xóa tệp tương ứng, có thể rep nhiều số, cách nhau bằng dấu cách. \ n $ { key } \ n \ n` + msg ,  event . threadID ,  ( e ,  info )  =>  global . client . handleReply . push ( {
    tên : cái này . cấu hình . tên ,
    messageID : thông tin . messageID ,
    tác giả : sự kiện . senderID ,
    các tập tin
  } ) )
 
}
