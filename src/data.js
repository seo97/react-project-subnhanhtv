const data = [
    {
        "name": "Sương mù đình bát giác",
        "image": "https://subnhanh.net/images/suong-mu-dinh-bat-giac_1.jpg",
        "type": "Phim hành động",
        "parts": "VietSub 720p",
        "id": "7"
    },
    {
        "name": "Hình bóng của tôi",
        "image": "https://subnhanh.net/images/hinh-bong-cua-toi_1.jpg",
        "type": "Phim tình cảm",
        "parts": "Tập 4 Vietsub",
        "id": "8"
    },
    {
        "name": "Tình yêu trong phim: bản lãng mạn",
        "image": "https://subnhanh.net/images/tinh-yeu-trong-phim-ban-lang-man_1.jpg",
        "type": "Phim tình cảm",
        "parts": "Tập 4 Vietsub",
        "id": "9"
    },
    {
        "name": "Yêu thật chỉ vì sinh ra trước",
        "image": "https://subnhanh.net/images/yeu-that-chi-vi-sinh-ra-truoc_1.png",
        "type": "Phim tình cảm",
        "parts": "Tập 30 Vietsub",
        "id": "10"
    },
    {
        "name": "Mặt tối của bình yên",
        "image": "https://subnhanh.net/images/que-nha_1.jpg",
        "type": "Phim kinh dị",
        "parts": "Tập 10 RAW",
        "id": "11"
    },
    {
        "name": "Street Woman Fighter",
        "image": "https://subnhanh.net/images/street-woman-fighter_1.jpg",
        "type": "Phim shows",
        "parts": "Tập 8 Vietsub",
        "id": "12"
    },
    {
        "name": "Chuyện Đời Vùng Cao (Chuyện Đời Làng Trên Núi)",
        "image": "https://subnhanh.net/images/chuyen-doi-vung-cao_1.jpg",
        "type": "Phim shows",
        "parts": "Tập 2 Vietsub",
        "id": "13"
    },

    {
        "name": "Những Quý Cô Say Xỉn",
        "image": "https://subnhanh.net/images/work-later-drink-now_1.jpg",
        "type": "Phim tình cảm",
        "parts": "Trailer",
        "id": "14"
    },
    {
        "name": "Xin Chào Mẫu Thân Đại Nhân",
        "image": "https://subnhanh.net/images/xin-chao-mau-than-dai-nhan_1.jpg",
        "type": "Phim tình cảm",
        "parts": "Tập 14 Vietsub",
        "id": "15"
    },

    {
        "name": "Manh Diện Đại Nhân",
        "image": "https://subnhanh.net/images/manh-dien-dai-nhan_1.jpg",
        "type": "Phim tình cảm",
        "parts": "Tập 9 Vietsub",
        "id": "16"
    },
    {
        "name": "Chân Tướng",
        "image": "https://subnhanh.net/images/chan-tuong_1.jpg",
        "type": "Phim tình cảm",
        "parts": "Tập 16 Vietsub",
        "id": "17"
    },
    {
        "name": "Ngọt Ngào Của Riêng Anh",
        "image": "https://subnhanh.net/images/ngot-ngao-cua-rieng-anh_1.jpg",
        "type": "Phim tình cảm",
        "parts": "Tập 2 Vietsub",
        "id": "18"
    },
    {
        "name": "Bầu Trời Rực Đỏ",
        "image": "https://subnhanh.net/images/bau-troi-ruc-do_1.jpg",
        "type": "Phim tình cảm",
        "parts": "Tập 14 Vietsub",
        "id": "19"
    },
    {
        "name": "Điệu Cha-Cha-Cha Làng Biển",
        "image": "https://subnhanh.net/images/hometown-chachacha_1.jpg",
        "type": "Phim tình cảm",
        "parts": "Tập 16 Vietsub",
        "id": "20"
    },

]
const odd = [
    {
        "name": "Cá Mập: Sự Khởi Đầu",
        "image": "https://subnhanh.net/images/ca-map-su-khoi-dau_1.jpg",
        "type": "Phim hành động",
        "parts": "VietSub 720p",
        "id": "1"
    },
    {
        "name": "Trường Học Nơi Học Sinh Có Thể Bắt Đầu Lại Cuộc Đời",
        "image": "https://subnhanh.net/images/truong-hoc-noi-hoc-sinh-co-the-bat-dau-lai-cuoc-doi_1.jpg",
        "type": "Phim tình cảm",
        "parts": "VietSub 720p",
        "id": "2"
    },
    {
        "name": "Mùa Hè Tương Lai",
        "image": "https://subnhanh.net/images/mua-he-tuong-lai_1.jpg",
        "type": "Phim tình cảm",
        "parts": "VietSub 720p",
        "id": "3"
    },
    {
        "name": "Truyền Thuyết Người Cá Đông Hải 2",
        "image": "https://subnhanh.net/images/truyen-thuyet-nguoi-ca-dong-hai-2_1.jpg",
        "type": "Phim cổ trang",
        "parts": "VietSub 720p",
        "id": "4"
    },
    {
        "name": "Đại Thoại Thần Bộ",
        "image": "https://subnhanh.net/images/dai-thoai-than-bo_1.jpg",
        "type": "Phim cổ trang",
        "parts": "VietSub 720p",
        "id": "5"
    },
    {
        "name": "Con Lắc Tà Thuật",
        "image": "https://subnhanh.net/images/con-lac-ta-thuat_1.jpg",
        "type": "Phim kinh dị",
        "parts": "VietSub 720p",
        "id": "6"
    },
    {
        "name": "Mỹ Nhân Ngư 2021",
        "image": "https://subnhanh.net/images/my-nhan-ngu-2021_1.jpg",
        "type": "Phim tình cảm",
        "parts": "VietSub 720p",
        "id": "7"
    },
    {
        "name": "Thuỷ Quái Thiên Trì Núi Trường Bạch",
        "image": "https://subnhanh.net/images/thuy-quai-thien-tri-nui-truong-bach_1.jpg",
        "type": "Phim phiêu lưu",
        "parts": "VietSub 720p",
        "id": "8"
    },
    {
        "name": "Pháp Y Tống Từ 2: Tứ Tông Tội",
        "image": "https://subnhanh.net/images/phap-y-tong-tu-2-tu-tong-toi_1.jpg",
        "type": "Phim cổ trang",
        "parts": "VietSub 720p",
        "id": "9"
    },
    {
        "name": "Diệp Vấn: Tông Sư Thức Tỉnh",
        "image": "https://subnhanh.net/images/diep-van-tong-su-thuc-tinh_1.png",
        "type": "Phim võ thuật",
        "parts": "VietSub 720p",
        "id": "10"
    },
    {
        "name": "Trường An Phục Yêu",
        "image": "https://subnhanh.net/images/truong-an-phuc-yeu_1.jpg",
        "type": "Phim cổ trang",
        "parts": "VietSub 1080p",
        "id": "11"
    },
    {
        "name": "Thỏ Con Bạo Lực",
        "image": "https://subnhanh.net/images/tho-con-bao-luc_1.jpg",
        "type": "Phim hình sự",
        "parts": "VietSub 720p",
        "id": "12"
    },
    {
        "name": "Tế Công: Hàng Long La Hán",
        "image": "https://subnhanh.net/images/te-cong-hang-long-la-han_1.jpg",
        "type": "Phim cổ trang",
        "parts": "VietSub 720p",
        "id": "13"
    },

    {
        "name": "Nhện Khổng Lồ/ Cự Thù",
        "image": "https://subnhanh.net/images/nhen-khong-lo-cu-thu_1.png",
        "type": "Phim hành động",
        "parts": "VietSub 1080p",
        "id": "14"
    },
    {
        "name": "Tây Du Ký: Tái Thế Yêu Vương",
        "image": "https://subnhanh.net/images/tay-du-ky-tai-the-yeu-vuong_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "VietSub 1080p",
        "id": "15"
    },

    {
        "name": "Cò Quay Nga Không Lối Thoát",
        "image": "https://subnhanh.net/images/co-quay-nga-khong-loi-thoat_1.jpg",
        "type": "Phim tâm lý",
        "parts": "VietSub 720p",
        "id": "16"
    },
    {
        "name": "Thôn Hoàng Miếu: Mỹ Nhân Địa Cung",
        "image": "https://subnhanh.net/images/thon-hoang-mieu-my-nhan-dia-cung_1.jpg",
        "type": "Phim kinh dị",
        "parts": "VietSub 1080p",
        "id": "17"
    },
    {
        "name": "Fan Girl Lãng Mạn",
        "image": "https://subnhanh.net/images/fan-girl-lang-man_1.jpg",
        "type": "Phim tình cảm",
        "parts": "VietSub 720p",
        "id": "18"
    },
    {
        "name": "Màn Đêm Phía Bên Kia Khung Cửa Sổ Tam Giác",
        "image": "https://subnhanh.net/images/man-dem-phia-ben-kia-khung-cua-so-tam-giac_1.jpg",
        "type": "Phim tình cảm",
        "parts": "VietSub 1080p",
        "id": "19"
    },
    {
        "name": "Triệu Hồi",
        "image": "https://subnhanh.net/images/trieu-hoi_1.jpg",
        "type": "Phim hành động",
        "parts": "VietSub 720p",
        "id": "20"
    },

]
const car = [
    {
        "name": "Thiếu Niên Ca Hành (Phần 2)",
        "image": "https://subnhanh.net/images/thieu-nien-ca-hanh-phan-2_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 14 VietSub",
        "id": "1"
    },
    {
        "name": "Lưỡng Bất Nghi 2021",
        "image": "https://subnhanh.net/images/luong-bat-nghi-2021_1.png",
        "type": "Phim hoạt hình",
        "parts": "Tập 21 VietSub",
        "id": "2"
    },
    {
        "name": "Manh Thê Thực Thần (Phần 2)",
        "image": "https://subnhanh.net/images/manh-the-thuc-than-phan-2_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 3 VietSub",
        "id": "3"
    },
    {
        "name": "Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận (TV)",
        "image": "https://subnhanh.net/images/kimetsu-no-yaiba-mugen-ressha-hen-tv_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 2 VietSub",
        "id": "4"
    },
    {
        "name": "Ma Đạo Tổ Sư 3",
        "image": "https://subnhanh.net/images/ma-dao-to-su-3_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 12 Vietsub",
        "id": "5"
    },
    {
        "name": "Mặt Trăng, Raika Và Công Chúa Ma Cà Rồng",
        "image": "https://subnhanh.net/images/mat-trang-raika-va-cong-chua-ma-ca-rong_1.png",
        "type": "Phim hoạt hình",
        "parts": "Tập 3 Vietsub",
        "id": "6"
    },
    {
        "name": "Ma Cà Rồng Lập Tức Chết Đi",
        "image": "https://subnhanh.net/images/ma-ca-rong-lap-tuc-chet-di_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 3 Vietsub",
        "id": "7"
    },
    {
        "name": "Tây Du Ký: Tái Thế Yêu Vương",
        "image": "https://subnhanh.net/images/tay-du-ky-tai-the-yeu-vuong_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "VietSub 1080p",
        "id": "8"
    },
    {
        "name": "Cuộc Sống Chậm Rãi Của Dược Sĩ Gian Lận: Lập Hiệu Thuốc Ở Thế Giới Khác Nào ",
        "image": "https://subnhanh.net/images/cuoc-song-cham-rai-cua…gian-lan-lap-hieu-thuoc-o-the-gioi-khac-nao_1.png",
        "type": "Phim hoạt hình",
        "parts": "Tập 7 Vietsub",
        "id": "9"
    },
    {
        "name": "Truy Lùng Tội Phạm (Phần 2)",
        "image": "https://subnhanh.net/images/truy-lung-toi-pham-phan-2_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 12 thuyết minh",
        "id": "10"
    },
    {
        "name": "Tân Phong Thần: Na Tra Trùng Sinh",
        "image": "https://subnhanh.net/images/tan-phong-than-na-tra-trung-sinh_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "VietSub 720p",
        "id": "11"
    },
    {
        "name": "Đại Chiến Người Khổng Lồ Mùa 4",
        "image": "https://subnhanh.net/images/dai-chien-nguoi-khong-lo-mua-4_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 15 Vietsub",
        "id": "12"
    },
    {
        "name": "Nhà Có Năm Nàng Dâu Phần 2",
        "image": "https://subnhanh.net/images/nha-co-nam-nang-dau-phan-2_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 11 Vietsub",
        "id": "13"
    },

    {
        "name": "Đấu La Đại Lục (2018)",
        "image": "https://subnhanh.net/images/dau-la-dai-luc-2018_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 177 Vietsub",
        "id": "14"
    },
    {
        "name": "Miền Đất Hứa Phần 2",
        "image": "https://subnhanh.net/images/mien-dat-hua-phan-2_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 3 Vietsub",
        "id": "15"
    },

    {
        "name": "Doraemon: Nobita Và Những Bạn Khủng Long Mới",
        "image": "https://subnhanh.net/images/doraemon-nobita-va-nhung-ban-khung-long-moi_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "VietSub 720p",
        "id": "16"
    },
    {
        "name": "Dr Stone: Stone Wars  Season 2",
        "image": "https://subnhanh.net/images/dr-stone-stone-wars-season-2_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 2 Vietsub",
        "id": "17"
    },
    {
        "name": "Thôn Phệ Tinh Không",
        "image": "https://subnhanh.net/images/thon-phe-tinh-khong_1.png",
        "type": "Phim hoạt hình",
        "parts": "Tập 9 Vietsub",
        "id": "18"
    },
    {
        "name": "Vật Thể Bị Nguyền Rủa",
        "image": "https://subnhanh.net/images/vat-the-bi-nguyen-rua_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 12 Vietsub",
        "id": "19"
    },
    {
        "name": "Dấu Ấn Rồng Thiêng",
        "image": "https://subnhanh.net/images/dau-an-rong-thieng_1.jpg",
        "type": "Phim hoạt hình",
        "parts": "Tập 52 thuyết minh",
        "id": "20"
    },

]