mô-đun . hàng xuất khẩu . config  =  {
    tên : "gia đình" ,
    phiên bản : "1.0.1" ,
    hasPermssion : 0 ,
    tín dụng : "NTKhang" ,
    description : "Tạo ảnh tất cả thành viên trong hộp" ,
    commandCategory : "create image all TV" ,
    usages : "family <size> [# color code] or family <size> \ nHình đại diện kích thước nhỏ thành viên thích hợp và màu mã cho chữ (mặc định là đen) theo cú pháp: \ n $ family <size> <color code > <title> \ nTrong đó: \ n • size: Kích thước mỗi ảnh đại diện thành viên \ n • màu mã: hex dạng mã màu \ n • title: ảnh tiêu đề, mặc định là hộp tên \ nVí dụ: $ family 200 # ffffff Anh em một nhà \ nNếu size = 0 thì sẽ tự điều chỉnh kích thước, nếu không điền tiêu đề thì title sẽ là hộp tên " ,
    thời gian hồi chiêu : 5 ,
    phụ thuộc : {
      "fs-extra" : "" , 
      "axios" : "" , 
      "canvas" : "" , 
      "jimp" : "" , 
      "node-superfetch" : "" ,
      "phấn" : ""
    }
} ;


mô-đun . hàng xuất khẩu . run  =  async  ( { event , api , args } )  =>  {
  var  TOKEN  =  "6628568379% 7Cc1e620fa708a1d5696fb991c1bde5662" ;
  thử  {
    if ( global . client . family  ==  true )  trả về  api . sendMessage ( "Hệ thống đang xử lý yêu cầu từ hộp khác, vui lòng quay lại sau" ,  event . threadID ,  event . messageID ) ;
    toàn cầu . khách hàng . gia đình  =  true ;
	  var  timestart  =  Ngày . ngay ( ) ;
	  const  fs  =  toàn cục . nốt sần [ "fs-extra" ] ;
	  const  axios  =  global . nốt sần [ " axios " ] ;
	  const  { threadID , messageID }  =  sự kiện ;
	  const  request  =  global . nốt sần [ "yêu cầu" ] ;
	  const  superfetch = toàn cầu . nốt sần [ "node-superfetch" ] ;
	  if ( ! fs . bringSync ( __dirname + '/cache/fontfamily.ttf' ) )  {
	    let  getfont  =  ( await  axios . get ( `https: //drive.google.com/u/0/uc? id = 1HOnwKqsW_1CamOnFsmrRW1wvefFF5YpF & export = download` ,  {  responseType : " arraybuffer "  } ) ) . dữ liệu ;
       fs . writeFileSync ( __dirname + "/cache/fontfamily.ttf" ,  Bộ đệm . from ( getfont ,  "utf-8" ) ) ;
	  } ;
	  
	  if ( ! args [ 0 ]  ||  isNaN ( args [ 0 ] )  ==  true  ||  args [ 0 ]  ==  "help" )  {
	    if ( ! fs .. beingSync ( __dirname + "/cache/hexcolor.png" ) )  {
	     let  getimg  =  ( await  axios . get ( `https: // www.htlvietnam.com / images / bai-viet / code-mau / bang-ma-mau-02.jpg` ,  {  responseType : " arraybuffer "  } ) ) . dữ liệu ;
       fs . writeFileSync ( __dirname + "/cache/hexcolor.png" ,  Bộ đệm . from ( getimg ,  "utf-8" ) ) ;
	    }
	    toàn cầu . khách hàng . gia đình  =  giả dối ;
		trả lại  api . sendMessage ( { body : "Nhập kích thước avatar thành viên thích hợp và mã màu cho chữ (mặc định là đen) theo cú pháp: \ n $ family <size> <màu mã> <title> \ nTrong đó: \ n • size : Kích thước mỗi ảnh đại diện thành viên \ n • màu mã: hex dạng màu mã \ n • title: ảnh tiêu đề, mặc định là hộp tên nếu không điền \ nVí dụ: $ family 200 #ffffff Anh em một nhà \ nKích thước lựa chọn = 0 thì sẽ tự điều chỉnh kích thước, nếu tiêu đề không điền thì tiêu đề sẽ là hộp tên " ,
		tập tin đính kèm : fs . createReadStream ( __dirname + "/cache/hexcolor.png" ) } ,  threadID ,  messageID ) ;
	  } ;
    
    
    const  jimp  =  toàn cầu . nốt sần [ " jimp " ] ;
    const  phấn  =  toàn cầu . nốt sần [ "phấn" ] ;
    const  Canvas  =  toàn cầu . nốt sần [ "canvas" ] ;
  

    var  threadInfo  =  chờ  api . getThreadInfo ( threadID ) ;
    var  arrob  =  threadInfo . adminIDs ;
    var  arrayd  =  [ ] ;
    cho ( hãy để  qtv  của  arrob )  {
      sắp xếp . push ( qtv . id )
    } ;
    const  background  =  await  Canvas . loadImage ( "https://i.ibb.co/xqrFW4N/Pics-Art-06-26-12-07-26.jpg" ) ;
    
    var  idtv  =  threadInfo . ID người tham gia ;
  
    var  xbground  =  background . chiều rộng ,
        ybground  =  nền . chiều cao ;


    var  dem  =  1 ;
    var  tds  =  200 ,
        s  =  parseInt ( args [ 0 ] ) ; //kích thước
        //KICH THƯƠC TỰ ĐỘNG
    var  mode  =  "" ;
    if ( s  ==  0 )  {
      var  dtich  =  xbground * ( ybground - tds ) ;
      var  dtichtv  =  Toán học . tầng ( dtich / idtv . length ) ;
      var  s  =  Toán học . sàn ( Math . sqrt ( dtichtv ) ) ;
      mode  + =  "(Kích thước tự động)"
    } ;
        // ===============================
    var  l  =      parseInt ( s / 15 ) , // dòng
        x  =      parseInt ( l ) , //
        y  =      parseInt ( tds ) , //
        xcrop  =  parseInt ( idtv . length * s ) ,
        ycrop  =  parseInt ( tds + s ) ;
        bàn điều khiển . ( các ) nhật ký ;
    s  =  s - l * 2 ;
    // ===============================
    
    var  color  =  args [ 1 ] ;
    if ( ! color  ||  ! color . include ( "#" ) )  {
      màu  =  "# 000000" ;
      autocolor  =  true ;
    } ;
        if ( s  >  ybground  ||  s  >  xbground )  {
          toàn cầu . khách hàng . gia đình  =  giả dối ;
          trả lại  api . sendMessage ( `Kích thước avatar phải nhỏ hơn kích thước background \ nKích thước background: X: $ { xbground } , Y: $ { ybground } ` ,  threadID ,  messageID ) ;
        }
        api . sendMessage ( `🔢Số ảnh dự tính: $ { idtv . length } \ n🆒Kích thước nền: $ { xbground } x $ { ybground } \ n🆕Kích thước mỗi ảnh đại diện: $ { s } $ { mode } \ n # ️⃣Màu: $ { color } \ n⏳Đang xử lý yêu cầu của bạn, quá trình này có thể mất đến 5p để hoàn thành ... ' , threadID ,  messageID ) ;
    var  loadkhung  =  await  Canvas . loadImage ( "https://i.ibb.co/H41cdDM/1624768781720.png" ) ; //("https://s1.uphinh.org/2021/06/24/1624551553171.png ");
    var  title  =  args . lát ( 2 ) . tham gia ( "" )  ||  threadInfo . tên gọi ;
    var  path_alltv  =  __dirname + `/ cache / alltv $ { threadID } $ { Ngày . ngay ( ) } .png` ;
     độ trễ chức năng ( mili giây )  {
       trả về  lời hứa mới  ( giải quyết => setTimeout ( giải quyết , ms ) ) ;   
    } ;
    const  canvas  =  Canvas . createCanvas ( xbground ,  ybground ) ;
    hãy để  ctx  =  canvas . getContext ( '2d' ) ;
    ctx . drawImage ( background ,  0 ,  0 ,  canvas . width ,  canvas . height ) ;

    var  ngdung  =  0 ; // count acc die
    // ====== ĐỂ LOOP DRAW AVATAR ===== //
    
    for ( let  id  của  idtv )  {
      bàn điều khiển . log ( dem ,  phấn . green ( "FAMILY:" ) + "đang vẽ avt của id" + id ) ;
        thử  {
        	var  avatar  =  await  superfetch . get ( `https://graph.facebook.com/ $ { id } / picture? width = 512 & height = 512 & access_token = $ { TOKEN } ` ) ;
        	if ( avatar . url . include ( ".gif" ) )  { ném  Lỗi } ;
        }
        bắt ( e )  {
            ngdung  + =  1 ;
            tiếp tục ; 
        } ;

        if ( x + s  >  xbground )  {
          xcrop  =  x ;
        	x  + =  ( - x ) + l ;
        	y  + =  s + l ;
        	ycrop  + =  s + l ;
        } ;
        
        if ( ycrop  >  ybground )  {
          ycrop  + =  ( - s ) ;
          phá vỡ ;
        } ; 
      
        avatar  =  ảnh đại diện . cơ thể ;
        const  img  =  Canvas mới  . Hình ảnh ( ) ;
        var  avatarload  =  await  Canvas . loadImage ( ảnh đại diện ) ;
        img . src  =  avatarload ;

        ctx . drawImage ( avatarload ,  x ,  y ,  s ,  s ) ;

        if ( arrayd . include ( id ) )  {
        ctx . drawImage ( loadkhung ,  x ,  y ,  s ,  s ) ;
        } ;
        bàn điều khiển . log ( phấn . xanh ( "Gia đình:" ) + "Đã vẽ avt của id" + id ) ;
        dem ++ ;
        img . onerror  =  err  =>  {  ném  err  } ;
        x  + =  parseInt ( s + l ) ;
    } ;
   Vải bạt . registerFont ( __dirname + "/cache/fontfamily.ttf" ,  {
        gia đình : "Manrope"
    } ) ;
    ctx . font  =  "100px Manrope" ;
    ctx . fillStyle  =  màu sắc ;
    ctx . textAlign  =  "trung tâm" ;
    ctx . fillText ( tiêu đề ,  xcrop / 2 ,  133 ) ;
    //ctx.beginPath ();
    bàn điều khiển . log ( phấn . màu vàng ( "Chuyển sang bộ đệm ..." ) ) ;
    // const imageBuffer = canvas.toBuffer ();

    bàn điều khiển . log ( phấn . xanh lam ( `Sucess X: $ { xcrop } , Y: $ { ycrop } ` ) ) ;
    try { // ktra auto cắt ảnh có bị lỗi hay ko
      const  imageecut  =  await  jimp . read ( canvas . toBuffer ( ) ) ;
      bàn điều khiển . log ( "Đã đọc hình ảnh" ,  xcrop ,  ycrop ) ;
      // =========== CẮT HÌNH =========== //
      tưởng tượng . cắt ( 0 ,  0 ,  xcrop ,  ycrop + l - 30 ) . writeAsync ( path_alltv ) ;
      bàn điều khiển . log ( "Đã cắt xong ảnh và lưu vào bộ nhớ cache" ) ;
      chờ đợi  sự chậm trễ ( 200 ) ;
       api . sendMessage ( { body : `🟦Số ảnh: $ { dem } (Đã lọc $ { ngdung } Người dùng facebook) \ n🆒Kích thước nền: $ { xbground } x $ { ybground } \ n🆕Kích thước mỗi ảnh đại diện: $ { s } $ { mode } \ n⏱️Thời gian xử lý: $ { Math . floor ( ( Date . now ( ) - timestart ) / 1000 ) }s` ,
          tập tin đính kèm : fs . createReadStream ( path_alltv ,  {  'highWaterMark' : 128  *  1024  } )
       } ,  threadID ,  ( e ,  info )  =>  {
         nếu ( e )  {
            api . sendMessage ( "Có lỗi, vui lòng thử lại sau" ,  threadID ,  messageID ) ;
         } ;
         fs . unlinkSync ( path_alltv ) ;
       } ,  messageID ) ;
       toàn cầu . khách hàng . family  =  false
    }
    bắt ( e )  {
      bàn điều khiển . log ( e . ngăn xếp ) ;
      fs . writeFileSync ( path_alltv ,  canvas . toBuffer ( ) ) ;
       api . sendMessage ( {
        body : `Lỗi tự động cắt \ n🟦Số ảnh: $ { dem } \ n (Đã lọc $ { ngdung } Người dùng facebook) \ n🆒Kích thước nền: $ { xbground } x $ { ybground } \ n🆕 Kích thước mỗi hình đại diện: $ { s } $ { mode } \ n⏱️Thời gian xử lý: $ { Math . tầng ( ( Date . now ( ) - timestart ) / 1000 ) } seconds` ,
            tập tin đính kèm : fs . createReadStream ( path_alltv ,  {  'highWaterMark' : 128  *  1024  } )
         } ,  threadID ,  ( e ,  info )  =>  {
           nếu ( e )  {
              api . sendMessage ( "Có lỗi, vui lòng thử lại sau" ,  threadID ,  messageID ) ;
           } ;
           fs . unlinkSync ( path_alltv ) ;
         } ,  messageID ) ;
         toàn cầu . khách hàng . gia đình  =  giả dối ;
    }
  }
  catch ( e )  { toàn cầu . khách hàng . gia  =  false } ;
}
Chân trang
© 2022 GitHub, Inc.
Điều hướng chân trang
Điều kiện
Sự riêng tư
Bảo vệ
Trạng thái
Docs
Liên hệ với GitHub
Định giá
API
Tập huấn
Blog
Về
