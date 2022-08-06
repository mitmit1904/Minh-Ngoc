mô-đun . hàng xuất khẩu . config  =  {
	name : "nameCommand" ,  // Command name, is used in the command call
	version : "version" ,  // phiên bản của mô-đun này
	hasPermssion : 0/1/2 , // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là quản trị / chủ sở hữu 
	credit : "Name need credit" ,  // Công nhận mô-đun sở hữu là ai
	description : "say bla bla at here" ,  // Chi tiết thông tin về lệnh
	commandCategory : "group" ,  // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages : "[option] [text]" ,  // Command use
	cooldown : 5 ,  // Time one people can repeat the command
	phụ thuộc : {
		"packageName" : "phiên bản"
	} ,  // Liệt kê các mô-đun gói ở bên ngoài tại đây để khi tải lệnh, nó sẽ tự động cài đặt!
	envConfig : {
		// Đây là nơi bạn sẽ thiết lập toàn bộ env của module, APIKEY chẳng hạn, ...
	}
} ;

mô-đun . hàng xuất khẩu . ngôn ngữ  =  {
	"vi" : {
		// Làm gì ở đây thuộc về bạn ¯ \ _ (ツ) _ / ¯
	} ,
	"vi" : {
		// Làm gì ở đây thuộc về bạn ¯ \ _ (ツ) _ / ¯
	}
}

mô-đun . hàng xuất khẩu . onLoad  =  function  ( { configValue } )  {
	// Làm gì ở đây thuộc về bạn ¯ \ _ (ツ) _ / ¯
}

mô-đun . hàng xuất khẩu . handleReaction  =  function ( { api , sự kiện , mô hình , Người dùng , Chủ đề , Đơn vị tiền tệ , handleReaction , mô hình } )  {
	// Làm gì ở đây thuộc về bạn ¯ \ _ (ツ) _ / ¯
}

mô-đun . hàng xuất khẩu . xử  lý _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
	// Làm gì ở đây thuộc về bạn ¯ \ _ (ツ) _ / ¯
}

mô-đun . hàng xuất khẩu . handleEvent  =  function ( { event , api , models , Users , Threads , Currencies } )  {
	// Làm gì ở đây thuộc về bạn ¯ \ _ (ツ) _ / ¯
}

mô-đun . hàng xuất khẩu . handleSedule  =  function ( { event , api , models , Users , Threads , Currencies , SchedItem } )  {
	// Làm gì ở đây thuộc về bạn ¯ \ _ (ツ) _ / ¯
}

mô-đun . hàng xuất khẩu . run  =  function ( { api , event , args , models , Users , Threads , Currencies , permssion } )  {
	// Làm gì ở đây thuộc về bạn ¯ \ _ (ツ) _ / ¯
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
