mô-đun . hàng xuất khẩu . config  =  {
    tên : "nhanh" ,
    phiên bản : "1.0.0" ,
    hasPermssion : 2 ,
    tín dụng : "Mirai Team" ,
    description : "Kiểm tra mạng tốc độ" ,
    commandCategory : "hệ thống" ,
    thời gian hồi chiêu : 15 ,
    phụ thuộc : {
		"fast-speedtest-api" : ""
	}
} ;

mô-đun . hàng xuất khẩu . run  =  async  function ( { api , event } )  {
	thử  {
		const  fast  =  global . nốt sần [ "fast-speedtest-api" ] ;
		const  speedTest  =  nhanh mới  ( {
			mã thông báo : "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm" ,
			verbose : false ,
			thời gian chờ : 10000 ,
			https : true ,
			urlCount : 5 ,
			đệmKích thước : 8 ,
			đơn vị : nhanh chóng . CÁC ĐƠN VỊ . Mb / giây
		} ) ;
		const  resault  =  đang chờ  speedTest . getSpeed ​​( ) ;
		trả lại  api . sendMessage (
			"=== Kết quả ==="  + 
			"\ n- Tốc độ:"  +  resault  +  "Mb / giây" ,
			sự kiện . threadID ,  sự kiện . ID tin nhắn
		) ;
	}
	bắt  {
		trả lại  api . sendMessage ( "Cannot speedtest ngay lúc này, hãy thử lại sau!" ,  event . threadID ,  event . messageID ) ;
	}
}
