/**
 * data-lop-6.js
 * Ngân hàng câu hỏi Toán Lớp 6
 * Tiện ích: Toán Cấp 2 trực quan - iMath
 */

import { svgCap2 } from '../core/svg-cap2.js?v=20260913-l6-lo4';

export function getGrade6Topics() {

  return {
    'all': { kha: [], nangCao: [], hsg: [] },
    'so-nguyen': {
      "kha": [
        {
          "id": "l6-so-nguyen-kha-01",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận biết số nguyên âm",
          "prompt": "Trong các số sau, số nào là số nguyên âm?",
          "svg": "",
          "options": [
            "A. 0",
            "B. -9",
            "C. 4",
            "D. 12"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Ta cần chọn một số nguyên âm trong bốn số đã cho.\nBước 2: Số nguyên âm là số nguyên nhỏ hơn $0$, được viết với dấu trừ phía trước.\nBước 3: $-9<0$, nên $-9$ là số nguyên âm.~$4$ và $12$ lớn hơn $0$, nên là số nguyên dương.\nBước 4: Số $0$ không phải số nguyên âm, cũng không phải số nguyên dương.\nBước 5: Chỉ $-9$ thỏa mãn. Chọn B."
        },
        {
          "id": "l6-so-nguyen-kha-02",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "su-dung-cong-cu",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Đọc số ứng với điểm M",
          "prompt": "Các vạch trên trục số cách đều nhau. Điểm $M$ biểu diễn số nào?",
          "svg": svgCap2.svgGrade6NumberLine(),
          "options": [
            "A. -6",
            "B. -2",
            "C. -4",
            "D. 2"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Trên hình có hai mốc $-6$ và $-2$. Giữa hai mốc là hai khoảng chia bằng nhau.\nBước 2: Từ $-6$ đến $-2$, số chỉ tăng $-2-(-6)=4$ đơn vị.\nBước 3: Mỗi khoảng ứng với $4:2=2$ đơn vị.\nBước 4: $M$ ở vạch liền bên phải $-6$, nên số ứng với $M$ là $-6+2=-4$.~Đi thêm một khoảng nữa sẽ đến $-2$, đúng với hình.\nBước 5: $M$ biểu diễn số $-4$. Chọn C."
        },
        {
          "id": "l6-so-nguyen-kha-03",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính tổng khác dấu",
          "prompt": "Tính $(-12)+7$.",
          "svg": "",
          "options": [
            "A. -5",
            "B. 5",
            "C. -19",
            "D. 19"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Hai số $-12$ và $7$ khác dấu.\nBước 2: Ta có $12>7$. Vì vậy tổng mang dấu âm của số $-12$.\nBước 3: Lấy phần lớn trừ phần nhỏ: $12-7=5$.\nBước 4: Gắn dấu âm đã xác định, được $(-12)+7=-5$.~Không cộng $12+7$ vì hai số đang khác dấu.\nBước 5: Tổng bằng $-5$. Chọn A."
        },
        {
          "id": "l6-so-nguyen-kha-04",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Số đối của một số nguyên",
          "prompt": "Số đối của $-17$ là số nào?",
          "svg": "",
          "options": [
            "A. $-17$",
            "B. $17$",
            "C. $0$",
            "D. $\\frac1{17}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhắc lại số đối.\nHai số đối nhau có tổng bằng $0$.\nBước 2: Tìm số cần chọn.\nTa có $(-17)+17=0$, nên số đối của $-17$ là $17$. Chọn B."
        },
        {
          "id": "l6-so-nguyen-kha-05",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Sắp xếp các số nguyên",
          "prompt": "Dãy nào sắp xếp bốn số $-18,-5,0,7$ theo thứ tự tăng dần?",
          "svg": "",
          "options": [
            "A. $-5;-18;0;7$",
            "B. $7;0;-5;-18$",
            "C. $-18;-5;0;7$",
            "D. $0;-18;-5;7$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: So sánh hai số âm.\nSố $-18$ nhỏ hơn $-5$ vì nằm xa hơn về phía bên trái số $0$ trên trục số.\nBước 2: Ghép thứ tự đầy đủ.\nHai số âm đều nhỏ hơn $0$; số $7$ lớn hơn $0$.\nVậy $-18<-5<0<7$. Chọn C."
        }
      ],
      "nangCao": [
        {
          "id": "l6-so-nguyen-nang-cao-01",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Xác định dấu của tích",
          "prompt": "Không cần nhân ra kết quả, tích $(-2)\\cdot(-3)\\cdot(-5)$ mang dấu gì?",
          "svg": "",
          "options": [
            "A. Dương",
            "B. Âm",
            "C. Bằng 0",
            "D. Không xác định được"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tích có ba thừa số $-2,-3,-5$, đều âm và khác $0$.\nBước 2: Âm nhân âm được dương; dương nhân âm được âm.\nBước 3: Tích $(-2)\\cdot(-3)$ mang dấu dương.\nBước 4: Lấy tích dương vừa có nhân với $-5$, kết quả mang dấu âm.~Không có thừa số $0$ nên tích không thể bằng $0$.\nBước 5: Không cần tính độ lớn vẫn biết tích âm. Chọn B."
        },
        {
          "id": "l6-so-nguyen-nang-cao-02",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tính nhiệt độ sau tăng rồi giảm",
          "prompt": "Sáng sớm trời $-4^\\circ C$. Trưa tăng $7^\\circ C$, tối giảm $9^\\circ C$ so với trưa. Nhiệt độ tối là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $-20^\\circ C$",
            "B. $-2^\\circ C$",
            "C. $12^\\circ C$",
            "D. $-6^\\circ C$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Ban đầu là $-4^\\circ C$. Buổi trưa tăng $7^\\circ C$, rồi buổi tối giảm $9^\\circ C$ so với trưa.\nBước 2: Tăng nhiệt độ nghĩa là cộng: $-4+7=3$.~Buổi trưa là $3^\\circ C$.\nBước 3: Giảm so với trưa nghĩa là lấy $3-9=-6$.~Buổi tối là $-6^\\circ C$.\nBước 4: Cả ngày thay đổi $7-9=-2$ độ.~Từ $-4$ giảm thêm $2$ được $-6$, khớp kết quả.\nBước 5: Nhiệt độ tối là $-6^\\circ C$. Chọn D."
        },
        {
          "id": "l6-so-nguyen-nang-cao-03",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính nhanh tổng hai tích",
          "prompt": "Tính nhanh $(-37)\\cdot8+(-37)\\cdot2$.",
          "svg": "",
          "options": [
            "A. 370",
            "B. -296",
            "C. -370",
            "D. -74"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Hai tích $(-37)\\cdot8$ và $(-37)\\cdot2$ có chung thừa số $-37$.\nBước 2: Ta có $a\\cdot b+a\\cdot c=a\\cdot(b+c)$.~Vì thế có thể gộp hai lần nhân thành một lần nhân.\nBước 3: $(-37)\\cdot8+(-37)\\cdot2=(-37)\\cdot(8+2)$.~Mà $8+2=10$.\nBước 4: $(-37)\\cdot10=-370$, vì số âm nhân số dương được số âm.\nBước 5: Giá trị biểu thức là $-370$. Chọn C."
        },
        {
          "id": "l6-so-nguyen-nang-cao-04",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính biểu thức có phép trừ số âm",
          "prompt": "Giá trị của $18-[6-(-4)]$ bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. 16",
            "B. 8",
            "C. 20",
            "D. 28"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Trong $18-[6-(-4)]$, phải tính biểu thức trong ngoặc trước.\nBước 2: Trừ $-4$ là cộng số đối của nó: $6-(-4)=6+4$.\nBước 3: $6+4=10$.\nBước 4: Thay cả ngoặc bằng $10$, được $18-10=8$.~Dấu trừ trước ngoặc vẫn là dấu trừ.\nBước 5: Giá trị cần tìm là $8$. Chọn B."
        },
        {
          "id": "l6-so-nguyen-nang-cao-05",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tìm độ thay đổi mỗi bước",
          "prompt": "Robot ở số $-5$. Sau ba bước bằng nhau, cùng chiều, nó đến số $7$. Mỗi bước làm số chỉ tăng bao nhiêu đơn vị?",
          "svg": "",
          "options": [
            "A. 4",
            "B. -4",
            "C. 2",
            "D. 12"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Robot đi từ $-5$ đến $7$ bằng ba bước bằng nhau, cùng chiều.\nBước 2: Số chỉ tăng $7-(-5)=12$ đơn vị.~Vì điểm cuối ở bên phải điểm đầu nên các bước làm số chỉ tăng.\nBước 3: Một bước tăng $12:3=4$ đơn vị.\nBước 4: Các vị trí lần lượt là $-5,-1,3,7$.~Ba lần đều tăng $4$, và đến đúng đích.\nBước 5: Mỗi bước tăng $4$ đơn vị. Chọn A."
        },
        {
          "id": "l6-so-nguyen-nang-cao-06",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính tổng sau khi bỏ một số",
          "prompt": "Cộng tất cả số nguyên từ $-4$ đến $4$, kể hai đầu, nhưng bỏ số $-2$. Tổng bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. -2",
            "B. 0",
            "C. 4",
            "D. 2"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Trước hết cộng tất cả số nguyên từ $-4$ đến $4$, chưa bỏ số nào.\nBước 2: Các cặp $(-4,4),(-3,3),(-2,2),(-1,1)$ đều có tổng bằng $0$.~Số còn lại cũng là $0$.\nBước 3: Vì mọi cặp đều triệt tiêu, tổng đủ các số bằng $0$.\nBước 4: Bỏ $-2$ nghĩa là trừ $-2$ khỏi tổng: $0-(-2)=2$.~Cũng có thể thấy số $2$ còn lại không có số đối để ghép.\nBước 5: Tổng mới bằng $2$. Chọn D."
        },
        {
          "id": "l6-so-nguyen-nang-cao-07",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tìm giá trị lớn nhất từ ba thẻ số",
          "prompt": "Điền $-3,-2,4$ vào $a,b,c$, mỗi số dùng đúng một lần. Giá trị lớn nhất của $(a-b)\\cdot c$ là bao nhiêu?",
          "svg": "",
          "options": [
            "A. 14",
            "B. 18",
            "C. 4",
            "D. -4"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Mỗi số chỉ được dùng một lần. Ta lần lượt chọn $c=4$, $c=-2$, $c=-3$; với mỗi cách, còn hai cách điền $a,b$.\nBước 2: $(-3-(-2))\\cdot4=-4$.~Đổi chỗ $a,b$ được $(-2-(-3))\\cdot4=4$.\nBước 3: $(-3-4)\\cdot(-2)=14$.~Đổi chỗ được $(4-(-3))\\cdot(-2)=-14$.\nBước 4: Hai kết quả là $(-2-4)\\cdot(-3)=18$ và $(4-(-2))\\cdot(-3)=-18$.~Đã xét đủ sáu cách điền. Trong các kết quả $-4,4,14,-14,18,-18$, lớn nhất là $18$.\nBước 5: Giá trị lớn nhất bằng $18$, đạt khi $a=-2,b=4,c=-3$. Chọn B."
        },
        {
          "id": "l6-so-nguyen-nang-cao-08",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phép chia hai số khác dấu",
          "prompt": "Tính $(-48):6$.",
          "svg": "",
          "options": [
            "A. $-8$",
            "B. $8$",
            "C. $-42$",
            "D. $-288$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định dấu của thương.\nSố bị chia âm, số chia dương nên thương âm.\nBước 2: Tính và kiểm bằng phép nhân.\n$48:6=8$ nên $(-48):6=-8$.\nQuả thật $(-8)\\cdot6=-48$. Chọn A."
        },
        {
          "id": "l6-so-nguyen-nang-cao-09",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Khôi phục hai ô của bảng cộng",
          "prompt": "Hai ô bị che bởi chữ $a,b$. Biết $a+(-7)=-12$ và $b+a=4$. Số trong ô $b$ là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $-1$",
            "B. $-9$",
            "C. $1$",
            "D. $9$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tìm ô thứ nhất.\nMuốn tìm số hạng $a$, lấy tổng trừ số hạng đã biết:\n$a=-12-(-7)=-5$.\nBước 2: Tìm ô thứ hai.\nThay $a=-5$ vào $b+a=4$, ta có $b+(-5)=4$.\nVậy $b=4-(-5)=9$.\nBước 3: Kiểm tra.\n$-5+(-7)=-12$ và $9+(-5)=4$, đúng cả hai dữ kiện. Chọn D."
        },
        {
          "id": "l6-so-nguyen-nang-cao-10",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Số chia cho thương nguyên dương",
          "prompt": "Chọn danh sách đầy đủ các số nguyên $x$ để $(-18):x$ là số nguyên dương. Điều kiện: $x\\ne0$.",
          "svg": "",
          "options": [
            "A. $1;2;3;6;9;18$",
            "B. $-1;-2;-3;-6;-9;-18$",
            "C. $-2;-3;-6;-9$",
            "D. $-1;-2;-3;-6;-9;-18;0$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xét dấu của số chia.\nSố bị chia là $-18$. Để thương dương thì $x$ phải âm.\nBước 2: Xét điều kiện chia hết.\nCác ước dương của $18$ là $1,2,3,6,9,18$.\nDo đó các số chia âm cho thương nguyên là $-1,-2,-3,-6,-9,-18$.\nBước 3: Đối chiếu đầy đủ.\nMỗi số vừa tìm đều khác $0$ và cho thương dương.\nKhông số âm nào khác có thể chia hết $-18$. Chọn B."
        },
        {
          "id": "l6-so-nguyen-nang-cao-11",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Sửa một lần ghi điểm sai",
          "prompt": "Tổng điểm của một đội đang ghi là $-9$. Có đúng một lượt bị ghi nhầm thành $-14$, trong khi điểm đúng của lượt đó là $+6$. Các lượt khác đều đúng. Tổng điểm sau khi sửa là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $-3$",
            "B. $-17$",
            "C. $11$",
            "D. $-29$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Bỏ điểm đã ghi nhầm.\nTổng $-9$ đang chứa số $-14$. Bỏ số đó nghĩa là trừ $-14$:\n$-9-(-14)=5$.\nBước 2: Ghi lại điểm đúng.\nThêm $+6$ vào tổng của các lượt còn lại:\n$5+6=11$.\nBước 3: Kết luận.\nTổng điểm đúng là $11$. Chọn C.\nKhông chỉ cộng thêm $6$, vì như vậy điểm sai $-14$ vẫn còn trong tổng."
        },
        {
          "id": "l6-so-nguyen-nang-cao-12",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tìm hai số từ tổng và tích",
          "prompt": "Hai số nguyên $a>b$ thỏa mãn $ab=-24$ và $a+b=-5$. Giá trị $a-b$ là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $11$",
            "B. $-5$",
            "C. $5$",
            "D. $-11$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định dấu và độ lớn.\nTích âm nên một số dương, một số âm. Vì $a>b$ nên $a$ dương, $b$ âm.\nTổng âm nên số âm có phần số tự nhiên lớn hơn.\nBước 2: Xét các cặp thừa số của $24$.\nCác cặp độ lớn là $(1;24),(2;12),(3;8),(4;6)$.\nĐặt dấu âm vào số lớn hơn, các tổng lần lượt là $-23,-10,-5,-2$.\nBước 3: Chọn cặp thỏa cả hai dữ kiện.\nChỉ $a=3,b=-8$ cho tổng $-5$. Đồng thời $3\\cdot(-8)=-24$.\nBước 4: Tính hiệu.\n$a-b=3-(-8)=11$. Chọn A."
        },
        {
          "id": "l6-so-nguyen-nang-cao-13",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đổi dấu trong một quan hệ thứ tự",
          "prompt": "Cho hai số nguyên $a<b<0$. Khẳng định nào luôn đúng?",
          "svg": "",
          "options": [
            "A. $-a<-b<0$",
            "B. $0<-a<-b$",
            "C. $-b<-a<0$",
            "D. $0<-b<-a$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định dấu sau khi lấy số đối.\nVì $a,b$ đều âm nên $-a,-b$ đều dương.\nBước 2: So sánh hai số đối.\n$a$ ở bên trái $b$ và cả hai ở bên trái $0$. Vì thế $a$ cách $0$ xa hơn $b$.\nKhi lấy số đối, hai điểm chuyển sang bên phải $0$ với khoảng cách giữ nguyên. Do đó $-a>-b$.\nBước 3: Kết luận.\nTa có $0<-b<-a$. Chọn D."
        }
      ],
      "hsg": [
        {
          "id": "l6-so-nguyen-hsg-01",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tìm x từ phép trừ và phép nhân",
          "prompt": "Tìm số nguyên $x$ biết $5-2x=-9$.",
          "svg": "",
          "correctAnswer": "7",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Trong $5-2x=-9$, số $2x$ là số trừ chưa biết.\nBước 2: Số trừ bằng số bị trừ trừ đi hiệu, nên $2x=5-(-9)$.\nBước 3: Ta có $2x=14$, do đó $x=14:2=7$.\nBước 4: $5-2\\cdot7=5-14=-9$.~Giá trị $7$ là số nguyên và thỏa đẳng thức.\nBước 5: Số nguyên cần tìm là $x=7$. Nhập $7$."
        },
        {
          "id": "l6-so-nguyen-hsg-02",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm số bước sang phải",
          "prompt": "Robot xuất phát ở $-3$. Mỗi bước là sang phải $5$ đơn vị hoặc sang trái $2$ đơn vị. Sau đúng $8$ bước, nó ở $9$. Có bao nhiêu bước sang phải?",
          "svg": "",
          "correctAnswer": "4",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nếu cả tám bước đều sang trái, robot đến $-3-8\\cdot2=-19$.\nBước 2: Vị trí cần đến là $9$, cao hơn vị trí tạm tính $9-(-19)=28$ đơn vị.\nBước 3: Đổi một bước trái $-2$ thành một bước phải $+5$ làm vị trí cuối tăng thêm $5-(-2)=7$ đơn vị.~Vì vậy số bước phải cần có là $28:7=4$.\nBước 4: Còn $8-4=4$ bước trái.~Vị trí cuối là $-3+4\\cdot5-4\\cdot2=9$.~Có đủ đúng tám bước như đề yêu cầu.\nBước 5: Robot có $4$ bước sang phải. Nhập $4$."
        },
        {
          "id": "l6-so-nguyen-hsg-03",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm các điểm có tổng khoảng cách cho trước",
          "prompt": "Trên trục số, tổng khoảng cách từ điểm $X$ đến hai số $-2$ và $4$ là $10$ đơn vị. Tính tổng các số nguyên có thể ứng với $X$.",
          "svg": "",
          "correctAnswer": "2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Hai số $-2$ và $4$ cách nhau $4-(-2)=6$ đơn vị.\nBước 2: Nếu $X$ nằm trong đoạn từ $-2$ đến $4$, hai khoảng cách ghép lại đúng bằng $6$.~Vì đề yêu cầu tổng bằng $10$, điểm $X$ phải nằm ngoài đoạn này.\nBước 3: Gọi khoảng cách tới mốc gần hơn là $d$.~Khoảng cách tới mốc xa hơn là $d+6$.~Do đó $d+d+6=10$, nên $d=(10-6):2=2$.\nBước 4: Bên trái có $X=-2-2=-4$, cho hai khoảng cách $2$ và $8$.~Bên phải có $X=4+2=6$, cho hai khoảng cách $8$ và $2$.~Cả hai là số nguyên và đều có tổng khoảng cách $10$.\nBước 5: Chỉ có $-4$ và $6$. Tổng các số cần tìm là $-4+6=2$. Nhập $2$."
        },
        {
          "id": "l6-so-nguyen-hsg-04",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Lập luận chọn được số không hoặc cặp số đối",
          "prompt": "Chọn $21$ số nguyên khác nhau từ $-20$ đến $20$, kể hai đầu. Giải thích vì sao luôn chọn được số $0$ hoặc hai số đối nhau.",
          "svg": "",
          "solution": "Bước 1: Nếu trong 21 số đã chọn có $0$, yêu cầu đã được đáp ứng. Ta chỉ cần xét trường hợp không chọn $0$.\nBước 2: Từ $-20$ đến $20$, bỏ $0$ còn 20 cặp số đối nhau: $(-1,1),(-2,2),\\ldots,(-20,20)$.~Mỗi số khác $0$ nằm trong đúng một cặp.\nBước 3: Nếu không chọn được hai số đối nhau thì mỗi cặp chỉ được lấy nhiều nhất một số.\nBước 4: Từ 20 cặp, cách chọn ấy chỉ lấy được nhiều nhất 20 số.~Nhưng đề đã cho chọn 21 số khác nhau. Vì thế phải có một cặp được lấy cả hai số.\nBước 5: Nếu không có $0$ thì có hai số đối nhau. Vậy trong mọi cách chọn, luôn có $0$ hoặc một cặp số đối nhau."
        },
        {
          "id": "l6-so-nguyen-hsg-05",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh số cuối không phụ thuộc cách chọn",
          "prompt": "Trên bảng có $-1,0,1,2$. Mỗi lần xoá hai số $a,b$ rồi viết $a+b+1$. Sau ba lần còn một số. Chứng minh số đó luôn bằng $5$, dù chọn hai số nào để xoá.",
          "svg": "",
          "solution": "Bước 1: Tổng bốn số là $-1+0+1+2=2$.\nBước 2: Hai số bị xóa đóng góp $a+b$ vào tổng cũ.~Số mới đóng góp $a+b+1$, nhiều hơn đúng $1$.~Các số không bị xóa giữ nguyên.\nBước 3: Mỗi lần tổng tăng $1$, bất kể chọn hai số nào.~Sau ba lần, tổng tăng $3$, nên bằng $2+3=5$.\nBước 4: Mỗi lần xóa hai số, viết một số thì số lượng giảm một.~Bắt đầu với bốn số, sau ba lần chỉ còn một số; số đó chính là tổng lúc cuối.\nBước 5: Số còn lại luôn bằng $5$. Cách chọn hai số để xóa không làm thay đổi kết luận."
        },
        {
          "id": "l6-so-nguyen-hsg-06",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm số chia rồi tính biểu thức",
          "prompt": "Số nguyên $x\\ne0$ thỏa mãn $(-72):x=9$. Tính $5-2x$.",
          "svg": "",
          "correctAnswer": "21",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đổi về phép nhân để tìm số chia.\nTừ $(-72):x=9$ suy ra $9x=-72$.\nVậy $x=(-72):9=-8$, thỏa điều kiện khác $0$.\nBước 2: Thay vào biểu thức.\n$5-2x=5-2\\cdot(-8)=5-(-16)=21$.\nBước 3: Kết luận.\nGiá trị cần tìm là $21$."
        },
        {
          "id": "l6-so-nguyen-hsg-07",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Năm số nối thành vòng",
          "prompt": "Năm số nguyên $a,b,c,d,e$ thỏa mãn $a+b=-7$, $b+c=5$, $c+d=9$, $d+e=-4$, $e+a=-9$. Tìm $c$.",
          "svg": "",
          "correctAnswer": "8",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm tổng của cả năm số.\nCộng năm đẳng thức, mỗi số xuất hiện đúng hai lần:\n$2(a+b+c+d+e)=-7+5+9-4-9=-6$.\nVậy tổng năm số là $-3$.\nBước 2: Tách bốn số không phải $c$.\nTa đã biết $a+b=-7$ và $d+e=-4$.\nDo đó tổng năm số cũng bằng $-7+c-4=c-11$.\nBước 3: Tìm và kiểm tra giá trị.\n$c-11=-3$ nên $c=8$.\nTừ đó $b=-3,a=-4,d=1,e=-5$.\nCác tổng lần lượt là $-7,5,9,-4,-9$, đúng đề bài.\nBước 4: Kết luận.\nSố $c$ bằng $8$."
        },
        {
          "id": "l6-so-nguyen-hsg-08",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Lọc số chia qua khoảng của thương",
          "prompt": "Tìm tổng các số nguyên dương $n$ sao cho $q=(-30):n$ là số nguyên và $-8<q<-3$.",
          "svg": "",
          "correctAnswer": "11",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Liệt kê các thương có thể.\nSố nguyên nằm giữa $-8$ và $-3$, không lấy hai đầu, là $-7,-6,-5,-4$.\nBước 2: Tìm số chia tương ứng.\nTừ $(-30):n=q$ có $n=(-30):q$.\nVới $q=-7$, ta được $30/7$, không nguyên.\nVới $q=-6$, ta được $n=5$.\nVới $q=-5$, ta được $n=6$.\nVới $q=-4$, ta được $30/4$, không nguyên.\nBước 3: Kiểm điều kiện và cộng.\n$5,6$ đều dương; các thương $-6,-5$ đều nằm trong khoảng yêu cầu.\nTổng các số $n$ là $5+6=11$.\nBước 4: Kết luận.\nTổng các số cần tìm là $11$."
        },
        {
          "id": "l6-so-nguyen-hsg-09",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Có thể điền bảng dấu hay không?",
          "prompt": "Điền chín số nguyên khác $0$ vào bảng $3$ hàng, $3$ cột. Có thể làm cho tích ba số ở mỗi hàng đều âm, còn tích ba số ở mỗi cột đều dương không? Hãy giải thích.",
          "svg": "",
          "solution": "Bước 1: Xét tích của cả chín số theo các hàng.\nGộp chín số thành ba hàng không bỏ sót hay lặp số nào.\nNếu tích mỗi hàng âm thì tích cả bảng là tích của ba số âm, nên âm.\nBước 2: Xét cùng tích đó theo các cột.\nGộp theo ba cột cũng dùng đúng chín số ban đầu.\nNếu tích mỗi cột dương thì tích cả bảng phải dương.\nBước 3: Đối chiếu hai cách tính.\nĐổi cách nhóm thừa số không đổi tích.\nMột tích không thể vừa âm vừa dương. Các số khác $0$ nên cũng không có trường hợp tích bằng $0$.\nBước 4: Kết luận.\nKhông thể điền bảng thỏa đồng thời hai yêu cầu."
        },
        {
          "id": "l6-so-nguyen-hsg-10",
          "lop": 6,
          "chuDe": "so-nguyen",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Tổng âm có buộc mọi số đều âm?",
          "prompt": "Có năm số nguyên. Bỏ bất kỳ một số nào thì tổng bốn số còn lại đều âm. Giải thích vì sao tổng năm số âm. Có bắt buộc cả năm số đều âm không? Nếu không, hãy cho một ví dụ và kiểm tra.",
          "svg": "",
          "solution": "Bước 1: Cộng năm tổng của bốn số.\nMỗi lần bỏ một số, ta có một tổng âm. Có năm cách bỏ, nên cộng năm tổng ấy vẫn được một số âm.\nBước 2: Đếm số lần mỗi số được giữ lại.\nMột số chỉ bị bỏ trong đúng một cách, còn được giữ trong bốn cách khác.\nVì vậy tổng ở bước 1 bằng bốn lần tổng năm số ban đầu.\nBốn lần tổng ấy âm, nên tổng ban đầu cũng âm.\nBước 3: Xét liệu từng số có phải âm không.\nChọn năm số $2,-1,-1,-1,-1$.\nBỏ $2$ thì tổng còn lại là $-4$.\nBỏ bất kỳ số $-1$ nào thì tổng còn lại là $2-1-1-1=-1$.\nMọi cách bỏ đều cho tổng âm, nhưng số $2$ dương.\nBước 4: Kết luận.\nTổng năm số bắt buộc âm; từng số không bắt buộc đều âm."
        }
      ]
    },
    'phan-so-thap-phan': {
      "kha": [
        {
          "id": "l6-phan-so-thap-phan-kha-01",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận dạng cách viết là phân số",
          "prompt": "Cách viết nào đúng dạng phân số với tử và mẫu là số nguyên?",
          "svg": "",
          "options": [
            "A. $\\frac30$",
            "B. $\\frac{1{,}5}{2}$",
            "C. $\\frac{-3}{5}$",
            "D. $\\frac2{0{,}5}$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Phân số có dạng $\\frac ab$, trong đó $a,b$ là số nguyên và $b\\ne0$.\nBước 2: Cách viết $\\frac30$ có mẫu bằng $0$, nên không hợp lệ.\nBước 3: Ở B, tử $1{,}5$ không là số nguyên.~Ở D, mẫu $0{,}5$ không là số nguyên.~Cả hai không đúng dạng được hỏi.\nBước 4: Trong $\\frac{-3}{5}$, tử $-3$ và mẫu $5$ đều nguyên; mẫu khác $0$.\nBước 5: Cách viết đúng là $\\frac{-3}{5}$. Chọn C."
        },
        {
          "id": "l6-phan-so-thap-phan-kha-02",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Rút gọn phân số âm",
          "prompt": "Rút gọn $\\frac{-6}{8}$ về phân số tối giản.",
          "svg": "",
          "options": [
            "A. $\\frac{-3}{8}$",
            "B. $\\frac34$",
            "C. $\\frac{-6}{4}$",
            "D. $\\frac{-3}{4}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tử $-6$ và mẫu $8$ cùng chia hết cho $2$.\nBước 2: Chia cả tử và mẫu cho cùng một số khác $0$ không làm đổi giá trị phân số.\nBước 3: $\\frac{-6}{8}=\\frac{-6:2}{8:2}=\\frac{-3}{4}$.~Dấu âm vẫn được giữ ở tử.\nBước 4: Hai số $3$ và $4$ không có ước chung dương nào lớn hơn $1$.~Vì vậy không thể rút gọn tiếp.\nBước 5: Phân số tối giản là $\\frac{-3}{4}$. Chọn D."
        },
        {
          "id": "l6-phan-so-thap-phan-kha-03",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính tổng hai số thập phân",
          "prompt": "Tính $-0{,}7+1{,}2$.",
          "svg": "",
          "options": [
            "A. $0{,}5$",
            "B. $-0{,}5$",
            "C. $1{,}9$",
            "D. $-1{,}9$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Số $-0{,}7$ âm, số $1{,}2$ dương; đây là phép cộng khác dấu.\nBước 2: Ta có $1{,}2>0{,}7$, nên tổng mang dấu dương.\nBước 3: $1{,}2-0{,}7=0{,}5$.\nBước 4: Từ $-0{,}7$, tăng $0{,}7$ đến $0$, còn tăng $0{,}5$ nữa.~Vì vậy kết quả là $0{,}5$.\nBước 5: $-0{,}7+1{,}2=0{,}5$. Chọn A."
        },
        {
          "id": "l6-phan-so-thap-phan-kha-04",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giá trị của một chữ số thập phân",
          "prompt": "Trong số $3{,}047$, chữ số $4$ có giá trị bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac4{10}$",
            "B. $\\frac4{1000}$",
            "C. $\\frac4{100}$",
            "D. $4$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định hàng của chữ số.\nSau dấu phẩy, lần lượt là hàng phần mười, phần trăm, phần nghìn.\nChữ số $4$ ở hàng phần trăm.\nBước 2: Nêu giá trị.\nBốn phần trăm bằng $\\frac{4}{100}=0{,}04$. Chọn C."
        },
        {
          "id": "l6-phan-so-thap-phan-kha-05",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân số bằng nhau khi mẫu âm",
          "prompt": "Phân số nào bằng $\\frac{-3}{5}$?",
          "svg": "",
          "options": [
            "A. $\\frac6{-10}$",
            "B. $\\frac6{10}$",
            "C. $\\frac{-3}{10}$",
            "D. $\\frac{-6}{5}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Chuyển dấu âm.\n$\\frac{-3}{5}=\\frac3{-5}$ vì cả hai phân số đều là số đối của $\\frac35$.\nBước 2: Nhân cả tử và mẫu.\nNhân cả tử và mẫu của $\\frac3{-5}$ với $2$ được $\\frac6{-10}$.\nGiá trị phân số được giữ nguyên. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l6-phan-so-thap-phan-nang-cao-01",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính thương hai phân số",
          "prompt": "Tính $\\frac{-3}{4}:\\frac32$.",
          "svg": "",
          "options": [
            "A. $\\frac{-9}{8}$",
            "B. $\\frac{-1}{2}$",
            "C. $-2$",
            "D. $\\frac12$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Số chia là $\\frac32$, khác $0$, nên phép chia thực hiện được.\nBước 2: Chia cho một phân số khác $0$ là nhân với phân số nghịch đảo của nó.~Nghịch đảo của $\\frac32$ là $\\frac23$.\nBước 3: $\\frac{-3}{4}:\\frac32=\\frac{-3}{4}\\cdot\\frac23=\\frac{-6}{12}$.\nBước 4: Chia tử và mẫu cho $6$, được $\\frac{-6}{12}=-\\frac12$.~Dấu âm phù hợp vì số âm chia số dương được số âm.\nBước 5: Kết quả là $-\\frac12$. Chọn B."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-02",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tính chiều dài ruy băng còn lại",
          "prompt": "Dải ruy băng dài $\\frac56$ m. Cắt hai đoạn, mỗi đoạn $\\frac14$ m. Còn lại bao nhiêu mét?",
          "svg": "",
          "options": [
            "A. $\\frac7{12}$",
            "B. $\\frac12$",
            "C. $\\frac13$",
            "D. $\\frac43$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Có hai đoạn, mỗi đoạn dài $\\frac14$ m. Phải tính tổng hai đoạn trước khi trừ.\nBước 2: Chiều dài đã cắt là $2\\cdot\\frac14=\\frac12$ m.\nBước 3: Ta có $\\frac12=\\frac36$.~Phần còn lại là $\\frac56-\\frac36=\\frac26$ m.\nBước 4: $\\frac26=\\frac13$.~Phần cắt $\\frac36$ nhỏ hơn $\\frac56$, nên đủ ruy băng để cắt hai đoạn.\nBước 5: Còn $\\frac13$ m ruy băng. Chọn C."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-03",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tính số học sinh tham gia hoạt động",
          "prompt": "Lớp có $40$ học sinh, trong đó $\\frac35$ là nữ. Có $25\\%$ số bạn nữ tham gia đội cờ. Đội cờ có bao nhiêu bạn nữ?",
          "svg": "",
          "options": [
            "A. 10",
            "B. 24",
            "C. 18",
            "D. 6"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Trước hết tìm số bạn nữ trong 40 học sinh, rồi mới tìm $25\\%$ của số bạn nữ ấy.\nBước 2: $40\\cdot\\frac35=24$ bạn nữ.\nBước 3: $25\\%=\\frac{25}{100}=\\frac14$.~Đề nói một phần tư số bạn nữ, không phải một phần tư cả lớp.\nBước 4: $24\\cdot\\frac14=6$ bạn.~Số này không vượt quá 24 bạn nữ, phù hợp với đề.\nBước 5: Đội cờ có $6$ bạn nữ. Chọn D."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-04",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Tìm số trang cả quyển sách",
          "prompt": "Lan đã đọc $\\frac25$ quyển sách, còn $54$ trang. Sơ đồ chia sách thành năm phần bằng nhau. Quyển sách có bao nhiêu trang?",
          "svg": svgCap2.svgGrade6FractionBar(),
          "options": [
            "A. 90",
            "B. 135",
            "C. 36",
            "D. 108"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Cả quyển sách được chia thành năm phần bằng nhau. Lan đã đọc hai phần.\nBước 2: Còn $5-2=3$ phần, ứng với $54$ trang.\nBước 3: Một phần có $54:3=18$ trang.\nBước 4: Cả năm phần có $18\\cdot5=90$ trang.~Đã đọc $18\\cdot2=36$ trang; $90-36=54$, đúng đề.\nBước 5: Quyển sách có $90$ trang. Chọn A."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-05",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tính số cốc rót đầy",
          "prompt": "Có $0{,}75$ lít nước. Mỗi cốc đầy chứa $0{,}2$ lít. Rót không làm đổ nước thì nhiều nhất được bao nhiêu cốc đầy?",
          "svg": "",
          "options": [
            "A. 4",
            "B. 3",
            "C. 5",
            "D. 2"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Có $0{,}75$ lít nước, mỗi cốc đầy cần $0{,}2$ lít. Chỉ đếm cốc đầy.\nBước 2: $0{,}75:0{,}2=3{,}75$.~Kết quả này cho biết đủ ba cốc đầy và còn một phần nước.\nBước 3: Ba cốc cần $3\\cdot0{,}2=0{,}6$ lít, ít hơn $0{,}75$ lít.\nBước 4: Bốn cốc cần $4\\cdot0{,}2=0{,}8$ lít, nhiều hơn lượng có.~Không được làm tròn $3{,}75$ thành bốn cốc đầy.\nBước 5: Nhiều nhất rót được $3$ cốc đầy. Chọn B."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-06",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn số làm tròn thành số đã cho",
          "prompt": "Số nào dưới đây khi làm tròn đến hàng phần mười cho kết quả $2{,}7$?",
          "svg": "",
          "options": [
            "A. $2{,}64$",
            "B. $2{,}75$",
            "C. $2{,}65$",
            "D. $2{,}76$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Làm tròn đến hàng phần mười thì nhìn chữ số hàng phần trăm.\nBước 2: Nếu chữ số ấy nhỏ hơn $5$, giữ hàng phần mười; nếu từ $5$ trở lên, tăng hàng phần mười thêm $1$.\nBước 3: $2{,}64$ làm tròn thành $2{,}6$.~$2{,}75$ làm tròn thành $2{,}8$.\nBước 4: $2{,}65$ làm tròn thành $2{,}7$.~$2{,}76$ làm tròn thành $2{,}8$.~Chỉ một số cho kết quả yêu cầu.\nBước 5: Số cần chọn là $2{,}65$. Chọn C."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-07",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Theo dõi lượng nước sau hai thao tác",
          "prompt": "Bình đang chứa $\\frac23$ dung tích. Lấy đi $\\frac14$ lượng nước đang có, rồi thêm nước bằng $\\frac16$ phần trống lúc ấy. Cuối cùng nước chiếm bao nhiêu dung tích bình?",
          "svg": "",
          "options": [
            "A. $\\frac5{12}$",
            "B. $\\frac23$",
            "C. $\\frac12$",
            "D. $\\frac7{12}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Coi toàn bộ dung tích bình là $1$. Ban đầu lượng nước chiếm $\\frac23$ dung tích.\nBước 2: Lấy đi $\\frac14$ lượng đang có thì còn $\\frac34$ lượng ấy.~Nước còn $\\frac23\\cdot\\frac34=\\frac12$ dung tích.\nBước 3: Phần trống lúc này là $1-\\frac12=\\frac12$ dung tích.~Lượng thêm bằng $\\frac16$ phần trống, tức $\\frac16\\cdot\\frac12=\\frac1{12}$ dung tích.\nBước 4: $\\frac12+\\frac1{12}=\\frac6{12}+\\frac1{12}=\\frac7{12}$.~Giá trị nhỏ hơn $1$, nên nước không tràn. Hai phân số trong đề áp dụng cho hai lượng khác nhau.\nBước 5: Nước chiếm $\\frac7{12}$ dung tích bình. Chọn D."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-08",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Sửa phép cộng hai phân số",
          "prompt": "Bạn Nam viết $\\frac23+\\frac14=\\frac37$ bằng cách cộng hai tử và cộng hai mẫu. Kết quả đúng của phép cộng là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac37$",
            "B. $\\frac3{12}$",
            "C. $\\frac8{12}$",
            "D. $\\frac{11}{12}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận ra chỗ sai.\nCác phần ba và phần tư có kích thước khác nhau. Phải đổi về cùng loại phần trước khi cộng.\nBước 2: Quy đồng rồi cộng.\n$\\frac23=\\frac8{12}$ và $\\frac14=\\frac3{12}$.\nVậy $\\frac23+\\frac14=\\frac{8+3}{12}=\\frac{11}{12}$. Chọn D."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-09",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hiệu của hai phân số gần một",
          "prompt": "Tính $\\frac{18}{19}-\\frac{17}{18}$.",
          "svg": "",
          "options": [
            "A. $\\frac1{37}$",
            "B. $\\frac1{342}$",
            "C. $-\\frac1{342}$",
            "D. $\\frac1{18}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Viết mỗi phân số qua phần còn thiếu đến một.\n$\\frac{18}{19}=1-\\frac1{19}$; $\\frac{17}{18}=1-\\frac1{18}$.\nBước 2: Tính hiệu hai phần còn thiếu.\nHiệu cần tìm là $\\frac1{18}-\\frac1{19}=\\frac{19-18}{18\\cdot19}=\\frac1{342}$.\nBước 3: Đối chiếu dấu.\n$\\frac1{19}<\\frac1{18}$ nên phân số đầu gần $1$ hơn và lớn hơn phân số sau. Hiệu dương phù hợp. Chọn B."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-10",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ước lượng để đặt dấu phẩy",
          "prompt": "Khi tính $19{,}8\\cdot0{,}51$, Lan ghi đúng dãy chữ số nhưng quên vị trí dấu phẩy. Không nhân đầy đủ, hãy dùng ước lượng để chọn kết quả có thể đúng.",
          "svg": "",
          "options": [
            "A. $1{,}0098$",
            "B. $100{,}98$",
            "C. $10{,}098$",
            "D. $1009{,}8$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chặn hai thừa số dương.\n$19<19{,}8<20$ và $0{,}5<0{,}51<0{,}6$.\nBước 2: Ước lượng tích.\nVì các số đều dương, tích lớn hơn $19\\cdot0{,}5=9{,}5$ và nhỏ hơn $20\\cdot0{,}6=12$.\nBước 3: Chọn vị trí dấu phẩy.\nTrong bốn cách viết, chỉ $10{,}098$ nằm giữa $9{,}5$ và $12$. Chọn C."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-11",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "So độ dài sau hai cách chia đều",
          "prompt": "An chia đều $\\frac34$ m dây thành $3$ đoạn. Bình chia đều $\\frac56$ m dây thành $5$ đoạn. Không hao hụt dây. Mỗi đoạn của An dài hơn mỗi đoạn của Bình bao nhiêu mét?",
          "svg": "",
          "options": [
            "A. $\\frac1{12}$ m",
            "B. $\\frac14$ m",
            "C. $\\frac16$ m",
            "D. $\\frac5{12}$ m"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Tính độ dài mỗi đoạn của An.\n$\\frac34:3=\\frac14$ m.\nBước 2: Tính độ dài mỗi đoạn của Bình.\n$\\frac56:5=\\frac16$ m.\nBước 3: So sánh hai đoạn.\n$\\frac14-\\frac16=\\frac3{12}-\\frac2{12}=\\frac1{12}$ m.\nĐây là độ dài hơn của mỗi đoạn, không phải hiệu hai cuộn dây ban đầu. Chọn A."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-12",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Khôi phục phân số từ hai lần thay đổi",
          "prompt": "Trên giấy có phân số $\\frac ab$ với $a,b$ là số nguyên dương. Thêm $2$ vào riêng tử số thì được $\\frac12$. Thêm $4$ vào riêng mẫu số thì được $\\frac13$. Mỗi lần đều bắt đầu từ phân số viết trên giấy. Giá trị phân số ban đầu là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac12$",
            "B. $\\frac13$",
            "C. $\\frac25$",
            "D. $\\frac35$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Dùng lần thay đổi tử số.\n$\\frac{a+2}{b}=\\frac12$ nghĩa là $b=2(a+2)=2a+4$.\nBước 2: Dùng lần thay đổi mẫu số.\n$\\frac a{b+4}=\\frac13$ nghĩa là $b+4=3a$, hay $b=3a-4$.\nBước 3: Tìm tử và mẫu đã viết.\nHai cách tính cùng số $b$ nên $2a+4=3a-4$.\nDo đó $a=8$, rồi $b=20$. Cả hai đều nguyên dương.\nBước 4: Thử hai thay đổi từ bản gốc.\n$\\frac{8+2}{20}=\\frac12$; $\\frac8{20+4}=\\frac13$.\nGiá trị ban đầu là $\\frac8{20}=\\frac25$. Các thay đổi áp dụng cho $8/20$, không áp dụng cho bản đã rút gọn $2/5$. Chọn C."
        },
        {
          "id": "l6-phan-so-thap-phan-nang-cao-13",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chia hai số thập phân nhỏ",
          "prompt": "Tính $0{,}072:0{,}006$.",
          "svg": "",
          "options": [
            "A. $1{,}2$",
            "B. $12$",
            "C. $120$",
            "D. $0{,}12$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đổi đồng thời hai số.\nNhân cả số bị chia và số chia với $1000$ thì thương không đổi.\n$0{,}072:0{,}006=72:6$.\nBước 2: Tính và thử bằng phép nhân.\n$72:6=12$; $0{,}006\\cdot12=0{,}072$. Vậy thương bằng $12$. Chọn B."
        }
      ],
      "hsg": [
        {
          "id": "l6-phan-so-thap-phan-hsg-01",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tìm x trong phép chia rồi cộng",
          "prompt": "Tìm $x$ biết $x:0{,}4+1{,}5=3$.",
          "svg": "",
          "correctAnswer": "0.6",
          "dapAnChapNhan": [
            "0,6",
            "3/5"
          ],
          "solution": "Bước 1: Trong $x:0{,}4+1{,}5=3$, phép cuối cùng là cộng $1{,}5$.\nBước 2: Do đó $x:0{,}4=3-1{,}5=1{,}5$.\nBước 3: Số bị chia bằng thương nhân số chia: $x=1{,}5\\cdot0{,}4=0{,}6$.\nBước 4: $0{,}6:0{,}4+1{,}5=1{,}5+1{,}5=3$.~Số chia $0{,}4$ khác $0$, nên phép thử hợp lệ.\nBước 5: $x=0{,}6$. Nhập $0{,}6$."
        },
        {
          "id": "l6-phan-so-thap-phan-hsg-02",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đếm phân số tối giản giữa hai mốc",
          "prompt": "Có bao nhiêu phân số tối giản có mẫu số $12$, lớn hơn $\\frac13$ và nhỏ hơn $\\frac34$?",
          "svg": "",
          "correctAnswer": "2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: $\\frac13=\\frac4{12}$ và $\\frac34=\\frac9{12}$.\nBước 2: Mẫu $12$ dương, nên phân số nằm giữa hai mốc khi tử nguyên lớn hơn $4$ và nhỏ hơn $9$.~Các tử là $5,6,7,8$; không nhận hai đầu mút.\nBước 3: $\\frac6{12}$ rút gọn được vì $6,12$ cùng chia hết cho $6$.~$\\frac8{12}$ rút gọn được vì $8,12$ cùng chia hết cho $4$.\nBước 4: $5$ và $12$ chỉ có ước chung dương $1$.~$7$ và $12$ cũng vậy.~Do đó $\\frac5{12}$ và $\\frac7{12}$ đều tối giản.\nBước 5: Có đúng $2$ phân số thỏa mãn. Nhập $2$."
        },
        {
          "id": "l6-phan-so-thap-phan-hsg-03",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm lượng nước ban đầu",
          "prompt": "Lần đầu lấy ra $\\frac13$ lượng nước trong bình, rồi lấy thêm $1$ lít. Lần sau lấy ra $\\frac12$ lượng còn lại, rồi lấy thêm $1$ lít. Bình còn $3$ lít. Ban đầu có bao nhiêu lít?",
          "svg": "",
          "correctAnswer": "13.5",
          "dapAnChapNhan": [
            "13,5",
            "27/2"
          ],
          "solution": "Bước 1: Sau khi lấy thêm $1$ lít ở lần sau, còn $3$ lít.~Ngay trước thao tác ấy còn $3+1=4$ lít.\nBước 2: Bốn lít vừa tìm là một nửa lượng nước trước lần sau.~Lượng trước lần sau bằng $4\\cdot2=8$ lít.\nBước 3: Trước khi lấy thêm $1$ lít ở lần đầu, còn $8+1=9$ lít.~Đó là $\\frac23$ lượng ban đầu, nên ban đầu có $9:\\frac23=13{,}5$ lít.\nBước 4: Lần đầu lấy $13{,}5:\\!3=4{,}5$ lít rồi thêm $1$ lít, còn $8$ lít.~Lần sau lấy $8:2=4$ lít rồi thêm $1$ lít, còn $3$ lít.~Cả hai lần đều đủ nước để lấy.\nBước 5: Ban đầu bình có $13{,}5$ lít. Nhập $13{,}5$."
        },
        {
          "id": "l6-phan-so-thap-phan-hsg-04",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giải thích hai phân số vẫn nghịch đảo",
          "prompt": "Cho phân số $\\frac ab$ với $a,b$ là các số nguyên khác $0$. Nhân tử với $3$, mẫu với $5$ được $P$. Với phân số nghịch đảo $\\frac ba$, nhân tử với $5$, mẫu với $3$ được $Q$. Giải thích vì sao $P$ và $Q$ vẫn nghịch đảo.",
          "svg": "",
          "solution": "Bước 1: Theo cách thay tử và mẫu, $P=\\frac{3a}{5b}$ và $Q=\\frac{5b}{3a}$.\nBước 2: Vì $a,b$ là các số nguyên khác $0$, nên $3a$ và $5b$ đều khác $0$.~Cả hai phân số mới đều xác định và khác $0$.\nBước 3: Hai số là nghịch đảo của nhau khi tích của chúng bằng $1$.\nBước 4: $P\\cdot Q=\\frac{3a\\cdot5b}{5b\\cdot3a}$.~Tử và mẫu là cùng một tích khác $0$, chỉ khác thứ tự thừa số.~Vì vậy $P\\cdot Q=1$.\nBước 5: $P,Q$ vẫn nghịch đảo. Điều kiện $a,b\\ne0$ cần thiết: thiếu nó thì có thể xuất hiện mẫu bằng $0$."
        },
        {
          "id": "l6-phan-so-thap-phan-hsg-05",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh tổng lớn hơn một phần hai",
          "prompt": "Chứng minh $\\frac1{11}+\\frac1{12}+\\cdots+\\frac1{20}>\\frac12$. Dấu ba chấm chỉ tất cả các mẫu nguyên liên tiếp từ $11$ đến $20$.",
          "svg": "",
          "solution": "Bước 1: Các mẫu chạy từ $11$ đến $20$, kể cả hai đầu, nên có $20-11+1=10$ số hạng.\nBước 2: Ta so mỗi số hạng với $\\frac1{20}$.~Với các phân số cùng tử dương, mẫu dương nhỏ hơn thì phân số lớn hơn.\nBước 3: Chín số hạng có mẫu từ $11$ đến $19$ đều lớn hơn $\\frac1{20}$.~Số hạng cuối đúng bằng $\\frac1{20}$.\nBước 4: Thay chín số hạng đầu bằng $\\frac1{20}$ làm tổng giảm, nên tổng ban đầu lớn hơn $10\\cdot\\frac1{20}$.~Tích này bằng $\\frac{10}{20}=\\frac12$.\nBước 5: $\\frac1{11}+\\frac1{12}+\\cdots+\\frac1{20}>\\frac12$.~Dấu lớn hơn là nghiêm ngặt vì chín số hạng đầu thực sự lớn hơn số dùng để thay."
        },
        {
          "id": "l6-phan-so-thap-phan-hsg-06",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm số theo hàng và tổng chữ số",
          "prompt": "Một số có đúng hai chữ số sau dấu phẩy, lớn hơn $1{,}24$ và nhỏ hơn $1{,}29$. Tổng ba chữ số của số đó bằng $8$. Tìm số ấy.",
          "svg": "",
          "correctAnswer": "1.25",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Liệt kê theo hàng phần trăm.\nCác số thỏa khoảng và số chữ số là $1{,}25$; $1{,}26$; $1{,}27$; $1{,}28$. Hai đầu $1{,}24$ và $1{,}29$ không được nhận.\nBước 2: Lọc theo tổng chữ số.\nCác tổng lần lượt là $1+2+5=8$; $9$; $10$; $11$. Chỉ số đầu thỏa mãn.\nBước 3: Kết luận.\nSố cần tìm là $1{,}25$."
        },
        {
          "id": "l6-phan-so-thap-phan-hsg-07",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khi nào phân số có giá trị nguyên?",
          "prompt": "Tìm tổng tất cả số nguyên dương $n$ để $\\frac{n+9}{n+1}$ là số nguyên.",
          "svg": "",
          "correctAnswer": "11",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tách phần nguyên.\nVì $n$ nguyên dương nên $n+1\\ge2$, mẫu luôn khác $0$.\n$\\frac{n+9}{n+1}=1+\\frac8{n+1}$.\nBước 2: Tìm các mẫu có thể.\nBiểu thức nguyên khi và chỉ khi $n+1$ là ước dương của $8$.\nCác ước là $1,2,4,8$. Loại $1$ vì $n+1\\ge2$. Vậy $n=1,3,7$.\nBước 3: Thử và cộng.\nVới $n=1,3,7$, phân số lần lượt bằng $5,3,2$, đều nguyên.\nTổng các giá trị $n$ là $1+3+7=11$.\nBước 4: Kết luận.\nTổng cần tìm bằng $11$."
        },
        {
          "id": "l6-phan-so-thap-phan-hsg-08",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đổi chỗ hai chữ số sau dấu phẩy",
          "prompt": "Số $0{,}ab$ có hai chữ số $a,b$ đều khác $0$. Đổi chỗ chúng được số $0{,}ba$. Số ban đầu lớn hơn số mới $0{,}27$, và $a\\cdot b=18$. Tìm số ban đầu.",
          "svg": "",
          "correctAnswer": "0.63",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Liệt kê các cặp chữ số có tích đúng.\nMỗi chữ số từ $1$ đến $9$, nên các cặp $(a,b)$ là $(2,9),(3,6),(6,3),(9,2)$. Cặp có chữ số $18$ không hợp lệ.\nBước 2: Dùng thứ tự của hai số.\nSố ban đầu lớn hơn số đổi chỗ nên chữ số hàng phần mười của nó phải lớn hơn chữ số còn lại.\nChỉ còn $(a,b)=(6,3)$ hoặc $(9,2)$.\nBước 3: Thử độ chênh.\n$0{,}63-0{,}36=0{,}27$, đúng yêu cầu.\n$0{,}92-0{,}29=0{,}63$, không đúng. Đồng thời $6\\cdot3=18$.\nBước 4: Kết luận.\nSố ban đầu là $0{,}63$."
        },
        {
          "id": "l6-phan-so-thap-phan-hsg-09",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Cùng thêm vào tử và mẫu",
          "prompt": "Cho $a,b,k$ là số nguyên dương và $a<b$. So sánh $\\frac ab$ với $\\frac{a+k}{b+k}$. Giải thích vì sao cùng thêm vào tử và mẫu không giữ nguyên giá trị phân số trong trường hợp này.",
          "svg": "",
          "solution": "Bước 1: Xét phần còn thiếu đến một.\n$\\frac ab=1-\\frac{b-a}{b}$ và $\\frac{a+k}{b+k}=1-\\frac{b-a}{b+k}$.\nVì $a<b$ nên $b-a>0$. Các mẫu đều dương.\nBước 2: So sánh hai phần còn thiếu.\nHai phần bù có cùng tử dương $b-a$, nhưng $b+k>b$.\nChia cùng một lượng dương cho số lớn hơn cho kết quả nhỏ hơn, nên $\\frac{b-a}{b+k}<\\frac{b-a}{b}$.\nBước 3: Trở lại hai phân số.\nCùng lấy $1$ trừ đi, phần bị trừ nhỏ hơn cho hiệu lớn hơn. Do đó $\\frac ab<\\frac{a+k}{b+k}$.\nBước 4: Kết luận.\n$\\frac ab<\\frac{a+k}{b+k}<1$. Phân số tăng giá trị, vẫn nhỏ hơn $1$ vì tử còn nhỏ hơn mẫu.\nCùng thêm khác với cùng nhân tử và mẫu với một số khác không."
        },
        {
          "id": "l6-phan-so-thap-phan-hsg-10",
          "lop": 6,
          "chuDe": "phan-so-thap-phan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Có thể chèn mãi phân số ở giữa?",
          "prompt": "Cho hai phân số $p<q$. Đặt $r=(p+q):2$. Giải thích vì sao $p<r<q$. Nếu tiếp tục lấy trung bình của $p$ và số vừa tạo, có tạo được bao nhiêu phân số khác nhau tùy ý nằm giữa $p,q$ không?",
          "svg": "",
          "solution": "Bước 1: So sánh số mới với hai đầu.\n$r-p=\\frac{q-p}{2}>0$ và $q-r=\\frac{q-p}{2}>0$ vì $q-p>0$.\nVậy $p<r<q$, kể cả khi một hoặc cả hai số ban đầu âm.\nBước 2: Kiểm số tạo được vẫn là phân số.\nTổng hai phân số viết được thành phân số bằng quy đồng. Chia cho $2$ tức nhân mẫu với $2$, vẫn cho mẫu khác không.\nBước 3: Lặp trong một khoảng nhỏ hơn.\nThay $q$ bằng số $r$ vừa tạo, lập luận trên cho một phân số mới lớn hơn $p$ và nhỏ hơn $r$.\nMỗi số mới nhỏ hơn số trước, nên không trùng bất kỳ số đã tạo nào; tất cả vẫn nằm giữa hai đầu ban đầu.\nBước 4: Kết luận.\nSau bất kỳ số lần hữu hạn nào, vẫn thực hiện được thêm một lần nữa. Vì vậy có thể tạo bao nhiêu phân số khác nhau tùy ý nằm giữa hai phân số đã cho."
        }
      ]
    },
    'tinh-chia-het': {
      "kha": [
        {
          "id": "l6-tinh-chia-het-kha-01",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn số nguyên tố trong danh sách",
          "prompt": "Số nào sau đây là số nguyên tố?",
          "svg": "",
          "options": [
            "A. $1$",
            "B. $21$",
            "C. $29$",
            "D. $39$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Số nguyên tố là số tự nhiên lớn hơn $1$, có đúng hai ước dương là $1$ và chính nó.\nBước 2: $1$ không lớn hơn $1$.~$21=3\\cdot7$ và $39=3\\cdot13$, nên hai số này có thêm ước ngoài $1$ và chính nó.\nBước 3: $29$ không chia hết cho $2,3,4,5$.~Với $4$, có thể nhận ra số chia hết cho $4$ phải chẵn, còn $29$ lẻ.\nBước 4: Nếu $29$ có hai thừa số tự nhiên đều lớn hơn $1$, ít nhất một thừa số nhỏ hơn $6$, vì $6\\cdot6=36>29$.~Các số từ $2$ đến $5$ đều đã bị loại, nên $29$ chỉ có ước $1$ và $29$.\nBước 5: $29$ là số nguyên tố. Chọn C."
        },
        {
          "id": "l6-tinh-chia-het-kha-02",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn số chia hết cho cả hai và năm",
          "prompt": "Số nào chia hết cho cả $2$ và $5$?",
          "svg": "",
          "options": [
            "A. $125$",
            "B. $230$",
            "C. $342$",
            "D. $455$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Số chia hết cho $5$ có chữ số tận cùng là $0$ hoặc $5$.\nBước 2: Số chia hết cho $2$ phải có chữ số tận cùng chẵn.~Trong $0,5$, chỉ $0$ là chẵn.\nBước 3: Chỉ $230$ tận cùng bằng $0$.~$125,455$ tận cùng bằng $5$; $342$ không chia hết cho $5$.\nBước 4: $230:2=115$ và $230:5=46$, đều là số nguyên.\nBước 5: Số chia hết cho cả $2$ và $5$ là $230$. Chọn B."
        },
        {
          "id": "l6-tinh-chia-het-kha-03",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân biệt chia hết cho ba và chín",
          "prompt": "Số nào chia hết cho $3$ nhưng không chia hết cho $9$?",
          "svg": "",
          "options": [
            "A. $234$",
            "B. $351$",
            "C. $432$",
            "D. $123$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Một số chia hết cho $3$ hoặc $9$ khi tổng chữ số của nó chia hết cho số tương ứng.\nBước 2: $234$ có tổng chữ số $2+3+4=9$.~$351$ có tổng $3+5+1=9$.~$432$ có tổng $4+3+2=9$.~Cả ba chia hết cho $9$, nên không thỏa đề.\nBước 3: Tổng chữ số là $1+2+3=6$.\nBước 4: Số $6$ chia hết cho $3$ nhưng không chia hết cho $9$.~Vì vậy $123$ cũng có đúng hai tính chất đang cần.\nBước 5: Chọn D, số $123$."
        },
        {
          "id": "l6-tinh-chia-het-kha-04",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Số một thuộc loại nào?",
          "prompt": "Số $1$ thuộc loại nào dưới đây?",
          "svg": "",
          "options": [
            "A. Số nguyên tố.",
            "B. Hợp số.",
            "C. Không là số nguyên tố, không là hợp số.",
            "D. Vừa là số nguyên tố, vừa là hợp số."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đếm ước và nhớ điều kiện.\nSố $1$ chỉ có một ước dương là chính nó. Số nguyên tố và hợp số đều phải lớn hơn $1$.\nBước 2: Kết luận.\nSố $1$ không là số nguyên tố và cũng không là hợp số. Chọn C."
        },
        {
          "id": "l6-tinh-chia-het-kha-05",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận ra tổng không chia hết",
          "prompt": "Cho $a,b$ là số tự nhiên cùng chia hết cho $5$ (có thể bằng $0$). Biểu thức nào luôn không chia hết cho $5$?",
          "svg": "",
          "options": [
            "A. $a+b$",
            "B. $ab$",
            "C. $a+1$",
            "D. $2a+b$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xét các biểu thức vẫn là bội.\n$a+b$, $ab$ và $2a+b$ đều chia hết cho $5$, vì tổng và tích các bội của $5$ vẫn là bội của $5$.\nBước 2: Xét số thêm một đơn vị.\n$a$ chia hết cho $5$ nên $a+1$ chia cho $5$ dư $1$, kể cả $a=0$. Vậy chọn C."
        }
      ],
      "nangCao": [
        {
          "id": "l6-tinh-chia-het-nang-cao-01",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn phân tích đầy đủ",
          "prompt": "Cách nào phân tích $90$ thành tích các thừa số nguyên tố đầy đủ?",
          "svg": "",
          "options": [
            "A. $2\\cdot3^2\\cdot5$",
            "B. $2\\cdot9\\cdot5$",
            "C. $2\\cdot3\\cdot15$",
            "D. $3^2\\cdot10$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Phân tích thành thừa số nguyên tố phải vừa có tích bằng $90$, vừa chỉ dùng các thừa số nguyên tố.\nBước 2: $90=2\\cdot45$.~$45=3\\cdot15$ và $15=3\\cdot5$.\nBước 3: Do đó $90=2\\cdot3\\cdot3\\cdot5=2\\cdot3^2\\cdot5$.~Các số $2,3,5$ đều nguyên tố.\nBước 4: Ở B còn $9$, ở C còn $15$, ở D còn $10$.~Đó đều là hợp số, nên việc phân tích chưa hoàn tất.\nBước 5: Cách phân tích đầy đủ là $2\\cdot3^2\\cdot5$. Chọn A."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-02",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Chia các phần quà giống nhau",
          "prompt": "Có $24$ quyển vở và $36$ bút. Chia hết vào nhiều nhất bao nhiêu phần quà giống nhau? Mỗi phần có cùng số vở và cùng số bút.",
          "svg": "",
          "options": [
            "A. $6$",
            "B. $12$",
            "C. $24$",
            "D. $72$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Chia hết vở và bút vào các phần giống nhau thì cả $24$ và $36$ phải chia hết cho số phần.~Vì vậy số phần là ước chung của $24$ và $36$.\nBước 2: Muốn số phần nhiều nhất, tìm ước chung lớn nhất của $24$ và $36$.\nBước 3: Ước của $24$ là $1,2,3,4,6,8,12,24$.~Các số trong đó cũng là ước của $36$ là $1,2,3,4,6,12$.~Lớn nhất là $12$.\nBước 4: Mỗi phần có $24:12=2$ vở và $36:12=3$ bút.~Không thừa món nào; số phần lớn hơn $12$ không thể là ước chung.\nBước 5: Chia được nhiều nhất $12$ phần quà. Chọn B."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-03",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai đèn cùng bật lại",
          "prompt": "Hai đèn bật theo chu kì cố định: đèn A mỗi $9$ giây, đèn B mỗi $12$ giây. Chúng vừa cùng bật. Sau ít nhất bao nhiêu giây chúng cùng bật lần nữa?",
          "svg": "",
          "options": [
            "A. $36$",
            "B. $21$",
            "C. $24$",
            "D. $108$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Tính từ lúc vừa cùng bật, thời gian chờ phải là bội dương của cả $9$ và $12$.\nBước 2: Các thời điểm tiếp theo là $9,18,27,36,\\ldots$ giây.~Không tính $0$ vì đề hỏi lần sau.\nBước 3: Đèn B bật ở $12,24,36,\\ldots$ giây.~Trong các bội dương của $9$ đã xét, số đầu tiên đồng thời là bội của $12$ là $36$.\nBước 4: $36=9\\cdot4=12\\cdot3$.~Hai đèn cùng bật sau bốn chu kì của A và ba chu kì của B.\nBước 5: Thời gian ít nhất là $36$ giây. Chọn A."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-04",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tìm số dư của một tổng",
          "prompt": "Chia $7\\cdot15+7\\cdot9+5$ cho $7$ được số dư nào?",
          "svg": "",
          "options": [
            "A. $0$",
            "B. $2$",
            "C. $5$",
            "D. $7$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Trong $7\\cdot15+7\\cdot9+5$, hai tích đầu đều có thừa số $7$.\nBước 2: $7\\cdot15+7\\cdot9=7\\cdot(15+9)=7\\cdot24$.\nBước 3: Biểu thức bằng $7\\cdot24+5$.\nBước 4: Số dư phải không âm và nhỏ hơn số chia.~Ta có $0\\le5<7$, nên $5$ chính là số dư; không thể nhận $7$ làm số dư.\nBước 5: Phép chia cho $7$ có số dư $5$. Chọn C."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-05",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "So số thừa số nguyên tố",
          "prompt": "Trong bốn số sau, số nào là ước lớn nhất của $2^3\\cdot4^2$?",
          "svg": "",
          "options": [
            "A. $32$",
            "B. $64$",
            "C. $128$",
            "D. $256$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Ta có $2^3=8$ và $4^2=16$.\nBước 2: $2^3\\cdot4^2=8\\cdot16=128$.\nBước 3: $128:32=4$, $128:64=2$, $128:128=1$.~Vì thế $32,64,128$ đều là ước dương của $128$.\nBước 4: Số $256>128$ không thể là ước dương của $128$.~Trong ba ước hợp lệ đã cho, $128$ lớn nhất.\nBước 5: Ước lớn nhất trong bốn phương án là $128$. Chọn C."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-06",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tìm chữ số thoả cả hai điều kiện",
          "prompt": "Số có bốn chữ số $\\overline{4a2b}$ chia hết cho cả $5$ và $9$. Giá trị lớn nhất của chữ số $a$ là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $3$",
            "B. $5$",
            "C. $7$",
            "D. $9$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chữ số cuối $b$ phải là $0$ hoặc $5$. Chữ số $a$ thuộc $0,1,\\ldots,9$.\nBước 2: Tổng chữ số là $4+a+2+0=6+a$, nằm từ $6$ đến $15$.~Bội của $9$ duy nhất trong khoảng này là $9$, nên $6+a=9$, được $a=3$.\nBước 3: Tổng chữ số là $11+a$, nằm từ $11$ đến $20$.~Bội của $9$ duy nhất là $18$, nên $a=7$.\nBước 4: Hai khả năng của $a$ là $3$ và $7$.~Với $a=7,b=5$, số $4725$ tận cùng bằng $5$, tổng chữ số bằng $18$, thỏa cả hai điều kiện.\nBước 5: Chữ số $a$ lớn nhất là $7$. Chọn C."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-07",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai cách xếp đều thiếu hai viên",
          "prompt": "Có hơn $50$ nhưng ít hơn $90$ viên bi. Xếp hàng $6$ viên hoặc hàng $8$ viên đều thiếu $2$ viên để đầy hàng cuối. Có bao nhiêu viên bi?",
          "svg": "",
          "options": [
            "A. $72$",
            "B. $70$",
            "C. $74$",
            "D. $46$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Gọi số bi ban đầu là $n$. Thêm $2$ viên sẽ vừa đủ hàng ở cả cách xếp $6$ viên lẫn $8$ viên.\nBước 2: Vì vậy $n+2$ là bội của cả $6$ và $8$.~Các bội chung dương là $24,48,72,96,\\ldots$.\nBước 3: Từ $50<n<90$, khi thêm $2$ ta có $52<n+2<92$.~Trong các bội chung, chỉ $72$ nằm trong khoảng này.\nBước 4: $n=72-2=70$.~$70=6\\cdot11+4$: hàng cuối thiếu $2$ viên.~$70=8\\cdot8+6$: hàng cuối cũng thiếu $2$ viên.\nBước 5: Có $70$ viên bi. Chọn B."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-08",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đẳng thức đúng chưa đủ là phép chia có dư",
          "prompt": "Vì $83=9\\cdot8+11$, Minh nói: “Chia $83$ cho $9$ được thương $8$, dư $11$”. Nhận xét nào đúng?",
          "svg": "",
          "options": [
            "A. Đúng, chỉ cần đẳng thức đã cho đúng.",
            "B. Sai, vì số dư $11$ không nhỏ hơn $9$.",
            "C. Sai, vì số dư phải là một ước của $9$.",
            "D. Đúng, vì thương và số dư đều dương."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Kiểm điều kiện của số dư.\nTrong phép chia cho $9$, số dư phải từ $0$ đến $8$. Số $11$ không nhỏ hơn $9$, nên không thể làm số dư.\nBước 2: Viết phép chia đúng.\nChuyển $9$ từ phần $11$ sang thương: $83=9\\cdot9+2$. Thương đúng là $9$, dư $2$. Chọn B."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-09",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cắt đoạn bằng nhau với độ dài bị giới hạn",
          "prompt": "Hai sợi dây dài $126$ cm và $210$ cm được cắt hết thành các đoạn bằng nhau, dài một số nguyên xentimét. Không nối và không hao hụt dây. Mỗi đoạn dài hơn $15$ cm nhưng ngắn hơn $30$ cm. Có tất cả bao nhiêu đoạn?",
          "svg": "",
          "options": [
            "A. $8$",
            "B. $21$",
            "C. $10$",
            "D. $16$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tìm độ dài phải chia hết cả hai sợi.\nĐộ dài mỗi đoạn là ước chung của $126$ và $210$.\n$126=2\\cdot3^2\\cdot7$; $210=2\\cdot3\\cdot5\\cdot7$. Ước chung lớn nhất là $42$.\nBước 2: Lọc ước chung theo khoảng.\nCác ước của $42$ là $1,2,3,6,7,14,21,42$. Chỉ $21$ lớn hơn $15$ và nhỏ hơn $30$.\nBước 3: Đếm đoạn của từng sợi.\n$126:21=6$ đoạn; $210:21=10$ đoạn. Tổng $6+10=16$ đoạn. Chọn D."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-10",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bổ sung thừa số còn thiếu",
          "prompt": "Số nguyên dương nhỏ nhất cần nhân với $72$ để tích chia hết cho $60$ là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $5$",
            "B. $10$",
            "C. $15$",
            "D. $60$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: So các thừa số nguyên tố.\n$72=2^3\\cdot3^2$ và $60=2^2\\cdot3\\cdot5$.\nSố $72$ đã có đủ thừa số $2$ và $3$ cần thiết, còn thiếu thừa số $5$.\nBước 2: Tìm số nhỏ nhất và thử.\nSố nhân phải chia hết cho $5$, nên nhỏ nhất là $5$.\n$72\\cdot5=360=60\\cdot6$, đúng yêu cầu. Chọn A."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-11",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Số dư sau khi nhân và cộng",
          "prompt": "Số tự nhiên $n$ chia cho $9$ dư $4$. Số $2n+7$ chia cho $9$ dư bao nhiêu?",
          "svg": "",
          "options": [
            "A. $15$",
            "B. $6$",
            "C. $4$",
            "D. $8$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Viết số ban đầu qua thương và dư.\nCó số tự nhiên $k$ sao cho $n=9k+4$.\nBước 2: Tính rồi đưa phần dư về đúng khoảng.\n$2n+7=18k+15=9(2k+1)+6$.\nSố $15$ còn chứa một nhóm $9$, nên không được dừng ở dư $15$.\nBước 3: Kết luận.\n$6$ nằm từ $0$ đến $8$, nên số dư là $6$. Chọn B."
        },
        {
          "id": "l6-tinh-chia-het-nang-cao-12",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Số có chữ số đầu và cuối giống nhau",
          "prompt": "Tìm tổng các số có ba chữ số dạng $\\overline{aba}$ chia hết cho $15$, với $a\\ne b$ và $a\\ne0$.",
          "svg": "",
          "options": [
            "A. $1110$",
            "B. $1665$",
            "C. $585$",
            "D. $525$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Dùng điều kiện chia hết cho năm.\nChữ số cuối là $a$ nên $a$ bằng $0$ hoặc $5$. Vì cũng là chữ số đầu của số có ba chữ số, $a=5$.\nBước 2: Dùng điều kiện chia hết cho ba.\nTổng chữ số là $10+b$. Với chữ số $b$ từ $0$ đến $9$, tổng chia hết cho $3$ khi $b=2,5,8$.\nĐiều kiện $a\\ne b$ loại $b=5$.\nBước 3: Kiểm và cộng.\nCòn $525$ và $585$. Chúng cùng chia hết cho $3$ và $5$, nên chia hết cho $15$ vì $3$ và $5$ nguyên tố cùng nhau.\n$525+585=1110$. Chọn A."
        }
      ],
      "hsg": [
        {
          "id": "l6-tinh-chia-het-hsg-01",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Đếm ước trong khoảng cho trước",
          "prompt": "Có bao nhiêu ước dương của $84$ lớn hơn $3$ và nhỏ hơn $20$?",
          "svg": "",
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Cần đếm ước dương của $84$ lớn hơn $3$ và nhỏ hơn $20$, không lấy hai đầu mút.\nBước 2: Ta có các cặp $(1;84),(2;42),(3;28),(4;21),(6;14),(7;12)$.~Mỗi số xuất hiện trong các cặp này là một ước của $84$.\nBước 3: Chỉ cần thử thừa số nhỏ đến $9$, vì nếu cả hai thừa số từ $10$ trở lên thì tích ít nhất $100>84$.~Trong $1$ đến $9$, các số $5,8,9$ không là ước của $84$, nên không có cặp nào khác.\nBước 4: Các ước thỏa giới hạn là $4,6,7,12,14$.~Số $3$ nằm ở đầu mút bị loại; $21$ trở lên vượt giới hạn.\nBước 5: Có $5$ ước cần tìm. Nhập $5$."
        },
        {
          "id": "l6-tinh-chia-het-hsg-02",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Ba số nguyên tố cách đều",
          "prompt": "Ba số $p$, $p+2$, $p+4$ đều là số nguyên tố. Tính tổng ba số đó.",
          "svg": "",
          "correctAnswer": "15",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Một số nguyên khi chia cho $3$ chỉ có thể dư $0,1$ hoặc $2$. Ta áp dụng cho $p$.\nBước 2: Nếu $p$ dư $0$ thì $p$ chia hết cho $3$.~Nếu $p$ dư $1$ thì $p+2$ chia hết cho $3$.~Nếu $p$ dư $2$ thì $p+4$ chia hết cho $3$.~Vậy luôn có một số trong ba số chia hết cho $3$.\nBước 3: Một số nguyên tố chia hết cho $3$ phải bằng $3$; nếu lớn hơn $3$ thì có thêm ước $3$.~Do đó một trong $p,p+2,p+4$ bằng $3$.\nBước 4: Các khả năng tương ứng là $p=3$, $p=1$, $p=-1$.~Hai số $1,-1$ không là số nguyên tố.~Với $p=3$, ba số là $3,5,7$, đều nguyên tố.\nBước 5: Tổng cần tìm là $3+5+7=15$. Nhập $15$."
        },
        {
          "id": "l6-tinh-chia-het-hsg-03",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chọn bội đồng thời nguyên tố cùng nhau",
          "prompt": "Tìm số nguyên dương nhỏ nhất $n$ sao cho $n$ chia hết cho $12$, $n+5$ chia hết cho $7$ và $\\text{ƯCLN}(n,18)=6$.",
          "svg": "",
          "correctAnswer": "156",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Vì $n$ nguyên dương và chia hết cho $12$, ta xét các bội $12,24,36,\\ldots$ theo thứ tự tăng dần.\nBước 2: Với các bội từ $12$ đến $156$, giá trị $n+5$ lần lượt là $17,29,41,53,65,77,89,101,113,125,137,149,161$.~Trong danh sách chỉ $77=7\\cdot11$ và $161=7\\cdot23$ chia hết cho $7$.~Hai ứng viên là $n=72$ và $n=156$.\nBước 3: $72$ chia hết cho $18$, nên $\\text{ƯCLN}(72,18)=18$, không phải $6$.~Vì vậy $72$ không thỏa.\nBước 4: $156=12\\cdot13$ và $156+5=161=7\\cdot23$.~Mặt khác $156=18\\cdot8+12$, nên ước chung của $156,18$ cũng là ước chung của $18,12$; ước chung lớn nhất là $6$.~Mọi bội dương của $12$ nhỏ hơn $156$ đều đã xét.\nBước 5: Số nhỏ nhất thỏa cả ba điều kiện là $156$. Nhập $156$."
        },
        {
          "id": "l6-tinh-chia-het-hsg-04",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giải thích tích chia hết cho sáu",
          "prompt": "Giải thích vì sao tích của ba số tự nhiên liên tiếp luôn chia hết cho $6$. Xét cả trường hợp có số $0$.",
          "svg": "",
          "solution": "Bước 1: Ba số tự nhiên liên tiếp có số $0$ thì tích bằng $0$.~Vì $0=6\\cdot0$, tích chia hết cho $6$.\nBước 2: Với ba số dương liên tiếp, luôn có số chẵn: hai số kề nhau đã có một số chẵn.~Do đó tích có thừa số $2$.\nBước 3: Gọi số đầu là $n$.~Nếu $n$ chia $3$ dư $0$, số đầu chia hết cho $3$.~Nếu dư $1$, số $n+2$ chia hết cho $3$.~Nếu dư $2$, số $n+1$ chia hết cho $3$.\nBước 4: Tích có thừa số nguyên tố $2$ và thừa số nguyên tố $3$.~Hai số này khác nhau, nên trong tích có đủ $2\\cdot3=6$ làm thừa số.~Vì thế tích chia hết cho $6$.\nBước 5: Cả trường hợp có $0$ và trường hợp ba số dương đều thỏa. Tích của ba số tự nhiên liên tiếp luôn chia hết cho $6$."
        },
        {
          "id": "l6-tinh-chia-het-hsg-05",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giải thích hai danh sách ước chung trùng nhau",
          "prompt": "Cho hai số nguyên dương $a>b$. Giải thích vì sao các ước chung của $a,b$ cũng chính là các ước chung của $b,a-b$. Từ đó so sánh hai ước chung lớn nhất.",
          "svg": "",
          "solution": "Bước 1: Vì $a>b>0$, cả $a,b,a-b$ đều dương.~Ta cần cho thấy mỗi ước chung của một cặp cũng là ước chung của cặp kia.\nBước 2: Nếu $d$ là ước chung của $a,b$, viết $a=du,b=dv$.~Khi đó $a-b=d(u-v)$, nên $d$ cũng là ước của $a-b$.~Vậy $d$ là ước chung của $b,a-b$.\nBước 3: Nếu $d$ là ước chung của $b,a-b$, cả hai số này đều là bội của $d$.~Tổng của chúng cũng là bội của $d$: $b+(a-b)=a$.~Vậy $d$ là ước chung của $a,b$.\nBước 4: Hai chiều trên cho thấy hai cặp có đúng cùng các ước chung dương, không thừa hay thiếu ước nào.\nBước 5: Phần tử lớn nhất của hai danh sách giống nhau cũng giống nhau.~Do đó $\\text{ƯCLN}(a,b)=\\text{ƯCLN}(b,a-b)$."
        },
        {
          "id": "l6-tinh-chia-het-hsg-06",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Bội của sáu nhưng không là bội của chín",
          "prompt": "Trong các số nguyên từ $1$ đến $120$, kể cả hai đầu, có bao nhiêu số chia hết cho $6$ nhưng không chia hết cho $9$?",
          "svg": "",
          "correctAnswer": "14",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đếm các số chia hết cho sáu.\nCác số là $6,12,\\ldots,120$, có $120:6=20$ số.\nBước 2: Xác định phần phải bỏ.\nSố vừa chia hết cho $6$ vừa chia hết cho $9$ phải là bội của bội chung nhỏ nhất $18$.\nTrong khoảng đã cho có $18,36,54,72,90,108$, tổng cộng $6$ số.\nBước 3: Trừ phần giao.\n$20-6=14$. Chỉ loại bội chung, không loại mọi bội của $9$ ở ngoài danh sách ban đầu.\nBước 4: Kết luận.\nCó $14$ số thỏa mãn."
        },
        {
          "id": "l6-tinh-chia-het-hsg-07",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm cặp từ ước chung và bội chung",
          "prompt": "Có bao nhiêu cặp số nguyên dương $(a,b)$ với $a<b$, ước chung lớn nhất bằng $6$ và bội chung nhỏ nhất bằng $180$?",
          "svg": "",
          "correctAnswer": "4",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tách phần chung.\nViết $a=6u$, $b=6v$. Khi đó $u<v$ và $u,v$ nguyên tố cùng nhau; nếu còn ước chung lớn hơn $1$, ƯCLN của $a,b$ sẽ lớn hơn $6$.\nBước 2: Dùng bội chung nhỏ nhất.\nVì $u,v$ nguyên tố cùng nhau, bội chung nhỏ nhất của $6u,6v$ là $6uv$.\nVậy $6uv=180$, hay $uv=30$.\nBước 3: Liệt kê đầy đủ và thử.\nCác cặp ước của $30$ có $u<v$ là $(1,30),(2,15),(3,10),(5,6)$. Mỗi cặp đều nguyên tố cùng nhau.\nTương ứng $(a,b)=(6,180),(12,90),(18,60),(30,36)$. Mỗi cặp có ƯCLN $6$ và BCNN $180$.\nBước 4: Kết luận.\nCó $4$ cặp số thỏa mãn."
        },
        {
          "id": "l6-tinh-chia-het-hsg-08",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tích chia hết cho một nghìn",
          "prompt": "Tìm số nguyên dương nhỏ nhất $n$ để tích $1\\cdot2\\cdot3\\cdots n$ chia hết cho $1000$.",
          "svg": "",
          "correctAnswer": "15",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định thừa số cần có.\n$1000=2^3\\cdot5^3$. Tích cần chứa ít nhất ba thừa số $2$ và ba thừa số $5$.\nBước 2: Giải thích vì sao các số nhỏ hơn chưa đủ.\nNếu $n<15$, chỉ các số $5$ và $10$ trong tích có thể cung cấp thừa số $5$, mỗi số cung cấp một thừa số. Tổng nhiều nhất là hai, nên tích chưa chia hết cho $1000$.\nBước 3: Kiểm tại mốc đầu tiên.\nKhi $n=15$, ba số $5,10,15$ cung cấp đủ ba thừa số $5$.\nHai số $2$ và $4=2^2$ đã cung cấp đủ ba thừa số $2$. Tích vì thế chia hết cho $1000$.\nBước 4: Kết luận.\nGiá trị nhỏ nhất là $n=15$."
        },
        {
          "id": "l6-tinh-chia-het-hsg-09",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Vì sao số chia nguyên tố là đặc biệt?",
          "prompt": "Cho $a,b$ là số nguyên dương. Giải thích: nếu $ab$ chia hết cho $7$ thì ít nhất một trong hai số $a,b$ chia hết cho $7$. Thay $7$ bằng $6$ thì kết luận có luôn đúng không?",
          "svg": "",
          "solution": "Bước 1: Xét nguồn của thừa số bảy.\nPhân tích $a$ và $b$ thành thừa số nguyên tố rồi ghép lại được phân tích của $ab$. Nếu một số bằng $1$ thì nó không cung cấp thừa số nguyên tố nào.\nBước 2: Dùng tính nguyên tố.\nVì $7$ là số nguyên tố và $ab$ chia hết cho $7$, phân tích tích phải có thừa số $7$. Thừa số này phải có sẵn trong phân tích của $a$ hoặc của $b$.\nSố chứa thừa số $7$ chia hết cho $7$, chứng tỏ khẳng định đầu đúng.\nBước 3: Kiểm khi thay bằng hợp số.\nLấy $a=2$, $b=3$. Tích bằng $6$ chia hết cho $6$, nhưng cả $2$ lẫn $3$ đều không chia hết cho $6$.\nHai thừa số $2$ và $3$ của $6$ có thể nằm ở hai số khác nhau.\nBước 4: Kết luận.\nKhẳng định với $7$ đúng. Khẳng định thay bằng $6$ không luôn đúng; cặp $2,3$ là phản ví dụ."
        },
        {
          "id": "l6-tinh-chia-het-hsg-10",
          "lop": 6,
          "chuDe": "tinh-chia-het",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Viết lặp một nhóm ba chữ số",
          "prompt": "Viết lặp hai lần một số có ba chữ số, chẳng hạn $234$ thành $234234$. Giải thích vì sao số mới luôn chia hết cho $7,11,13$. Hãy chọn một số có ba chữ số để số mới không có ước nguyên tố nào khác ngoài ba số đó.",
          "svg": "",
          "solution": "Bước 1: Tách theo giá trị hàng.\nGọi số ba chữ số là $m$. Số mới bằng $1000m+m=1001m$, vì nhóm đầu được dịch ba hàng sang trái.\nBước 2: Phân tích phần luôn có.\n$1001=7\\cdot11\\cdot13$, nên số mới bằng $7\\cdot11\\cdot13\\cdot m$. Nó chia hết cho cả $7,11,13$.\nBước 3: Chọn số không thêm loại thừa số mới.\nChọn $m=121=11^2$, là số có đúng ba chữ số.\nSố mới $121121=7\\cdot11^3\\cdot13$ chỉ có ba ước nguyên tố là $7,11,13$.\nBước 4: Kết luận.\nMọi số tạo theo cách đã cho đều chia hết cho $7,11,13$. Một lựa chọn đáp ứng yêu cầu thêm là $m=121$."
        }
      ]
    },
    'hinh-truc-quan': {
      "kha": [
        {
          "id": "l6-hinh-truc-quan-kha-01",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Nhận ra lục giác đều",
          "prompt": "Hình nào trong bốn hình dưới đây là lục giác đều?",
          "svg": svgCap2.svgGrade6Visual(1),
          "options": [
            "A. Hình I",
            "B. Hình II",
            "C. Hình III",
            "D. Hình IV"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Lục giác đều có sáu cạnh bằng nhau và sáu góc bằng nhau.\nBước 2: Hình I có ba cạnh, hình III có bốn cạnh, hình IV có năm cạnh.~Chỉ hình II có sáu cạnh.\nBước 3: Sáu cạnh và sáu góc của hình II được vẽ đều nhau, đúng mẫu lục giác đều.\nBước 4: Không chỉ cần nhiều cạnh: phải có đúng sáu cạnh và các cạnh, góc đều nhau.~Hình II đáp ứng các đặc điểm đó.\nBước 5: Lục giác đều là hình II. Chọn B."
        },
        {
          "id": "l6-hinh-truc-quan-kha-02",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đọc đặc điểm hình thoi",
          "prompt": "Hình thoi $ABCD$ có các cạnh được đánh cùng một dấu gạch. Nhận xét nào đúng?",
          "svg": svgCap2.svgGrade6Visual(2),
          "options": [
            "A. Bốn góc đều vuông.",
            "B. Chỉ hai cạnh đối diện bằng nhau.",
            "C. Hai đường chéo dài bằng nhau.",
            "D. Bốn cạnh bằng nhau, các góc không nhất thiết vuông."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Bốn cạnh của hình thoi được đánh cùng một dấu gạch.\nBước 2: Các đoạn có cùng dấu gạch là các đoạn bằng nhau.~Vì vậy $AB=BC=CD=DA$.\nBước 3: Hình thoi không bắt buộc có góc vuông.~Hình đang vẽ có góc nhọn và góc tù, nên không thể kết luận bốn góc đều vuông.\nBước 4: Bốn cạnh bằng nhau chưa đủ để kết luận hai đường chéo bằng nhau.~Tính chất chắc chắn ở đây là bốn cạnh bằng nhau, không phải bốn góc vuông.\nBước 5: Nhận xét đúng là bốn cạnh bằng nhau, các góc không nhất thiết vuông. Chọn D."
        },
        {
          "id": "l6-hinh-truc-quan-kha-03",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Chọn nếp gấp chồng khít",
          "prompt": "Tờ giấy hình chữ nhật không vuông có hai đường $d_1,d_2$ như hình. Gấp theo đường nào thì hai phần giấy chồng khít?",
          "svg": svgCap2.svgGrade6Visual(3),
          "options": [
            "A. Chỉ $d_1$.",
            "B. Chỉ $d_2$.",
            "C. Cả hai đường.",
            "D. Không đường nào."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Một đường là trục đối xứng nếu gấp theo đường ấy thì hai phần giấy chồng khít.\nBước 2: Đường $d_1$ đi ngang chính giữa hình chữ nhật.~Gấp theo đó đưa cạnh trên trùng cạnh dưới; hai nửa có cùng chiều dài và chiều rộng.\nBước 3: Đường $d_2$ là đường chéo. Muốn hai nửa chồng khít qua đường này, cạnh dài ở một phía phải trùng cạnh ngắn ở phía kia.\nBước 4: Tờ giấy là hình chữ nhật không vuông nên cạnh dài và cạnh ngắn không bằng nhau.~Vì vậy gấp theo $d_2$ không chồng khít toàn bộ hai phần.\nBước 5: Chỉ gấp theo $d_1$ được hai phần chồng khít. Chọn A."
        },
        {
          "id": "l6-hinh-truc-quan-kha-04",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Nhận ra hình vuông khi đổi hướng",
          "prompt": "Quan sát bốn hình. Hình nào là hình vuông?",
          "svg": svgCap2.svgGrade6VisualExtension("squares"),
          "options": [
            "A. Hình I.",
            "B. Hình II.",
            "C. Hình III.",
            "D. Hình IV."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhắc đặc điểm hình vuông.\nHình vuông có bốn cạnh bằng nhau và bốn góc vuông. Việc đặt nghiêng không làm thay đổi các đặc điểm đó.\nBước 2: Đối chiếu các hình.\nHình I có cạnh dài và cạnh ngắn. Hình II có bốn cạnh bằng nhau nhưng các góc không vuông. Hình III có các cạnh và góc không thỏa cả hai yêu cầu.\nHình IV có bốn cạnh bằng nhau và bốn góc vuông, nên là hình vuông. Chọn D."
        },
        {
          "id": "l6-hinh-truc-quan-kha-05",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đặc điểm chắc chắn của hình bình hành",
          "prompt": "Cho hình bình hành $ABCD$ như hình. Khẳng định nào đúng với mọi hình bình hành?",
          "svg": svgCap2.svgGrade6VisualExtension("parallelogram"),
          "options": [
            "A. Bốn góc đều vuông.",
            "B. Hai cặp cạnh đối song song.",
            "C. Bốn cạnh bằng nhau.",
            "D. Hai đường chéo vuông góc."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhớ đặc điểm dùng để nhận biết.\nMột hình bình hành có hai cặp cạnh đối song song.\nBước 2: Áp dụng cho các đỉnh đã ghi.\nHai cặp cạnh đối là $AB,CD$ và $AD,BC$.\nDo đó $AB$ song song $CD$, $AD$ song song $BC$.\nBước 3: Phân biệt với các hình đặc biệt.\nBốn góc vuông là đặc điểm của hình chữ nhật; bốn cạnh bằng nhau là đặc điểm của hình thoi. Hình bình hành không bắt buộc có chúng, cũng không bắt buộc có đường chéo vuông góc. Chọn B."
        }
      ],
      "nangCao": [
        {
          "id": "l6-hinh-truc-quan-nang-cao-01",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Theo dõi đỉnh sau khi quay",
          "prompt": "Quay hình bình hành $ABCD$ nửa vòng quanh điểm $O$ ở giữa hai đường chéo. Đỉnh $A$ đến vị trí nào?",
          "svg": svgCap2.svgGrade6Visual(4),
          "options": [
            "A. $B$",
            "B. $O$",
            "C. $C$",
            "D. $D$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Điểm $O$ ở giữa hai đường chéo của hình bình hành.\nBước 2: Một điểm sau khi quay nửa vòng nằm phía đối diện qua tâm và vẫn cách tâm một khoảng như cũ.\nBước 3: Trên đường chéo $AC$, hai điểm $A,C$ nằm hai phía của $O$ và cách $O$ bằng nhau.\nBước 4: Vì vậy quay nửa vòng quanh $O$ đưa $A$ đến $C$.~Điểm $O$ vẫn đứng yên, không phải vị trí mới của $A$.\nBước 5: Đỉnh $A$ đến vị trí $C$. Chọn C."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-02",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Bổ sung các ô đối xứng",
          "prompt": "Chỉ được tô thêm ô. Cần tô ít nhất bao nhiêu ô để phần tô xanh đối xứng qua đường dọc $d$?",
          "svg": svgCap2.svgGrade6Visual(5),
          "options": [
            "A. $2$",
            "B. $3$",
            "C. $4$",
            "D. $6$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đếm hàng từ trên xuống, cột từ trái sang phải.~Các ô xanh là hàng 1 cột 1, hàng 2 cột 1 và hàng 3 cột 2.\nBước 2: Lưới có bốn cột, nên cột 1 đối xứng với cột 4; cột 2 đối xứng với cột 3.~Phản chiếu qua đường dọc giữ nguyên hàng.\nBước 3: Ô (1;1) cần ô (1;4).~Ô (2;1) cần ô (2;4).~Ô (3;2) cần ô (3;3).~Cả ba ô cần thêm đều đang trắng.\nBước 4: Không được xóa ô xanh nên bắt buộc tô đủ ba ô ấy.~Tô xong, mọi ô xanh đều có ô đối xứng cùng màu; không cần tô thêm ô nào khác.\nBước 5: Ít nhất phải tô $3$ ô. Chọn B."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-03",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Chọn đỉnh thứ tư",
          "prompt": "Mỗi ô lưới là hình vuông. Đã có ba đỉnh $A,B,D$. Chọn điểm nào làm đỉnh $C$ để $ABCD$ là hình chữ nhật?",
          "svg": svgCap2.svgGrade6Visual(6),
          "options": [
            "A. $P$",
            "B. $Q$",
            "C. $R$",
            "D. $S$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Trên lưới, $AB$ nằm ngang và $AD$ nằm dọc, nên chúng vuông góc.\nBước 2: Để $DC$ là cạnh đối diện $AB$ của hình chữ nhật, $C$ phải nằm cùng hàng ngang với $D$.\nBước 3: Để $BC$ là cạnh đối diện $AD$, $C$ phải nằm cùng cột dọc với $B$.\nBước 4: Hàng qua $D$ và cột qua $B$ gặp nhau tại $S$.~Chọn $C=S$ tạo hai cạnh ngang, hai cạnh dọc, bốn góc vuông.\nBước 5: Điểm phải chọn là $S$. Chọn D."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-04",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Nhận dạng mảnh còn thiếu",
          "prompt": "Khung lục giác đều được chia thành sáu tam giác đều bằng nhau. Bốn ô đã có giấy xanh. Mảnh giấy nguyên nào vừa khít hai ô trắng còn lại?",
          "svg": svgCap2.svgGrade6Visual(7),
          "options": [
            "A. Hình chữ nhật.",
            "B. Tam giác đều.",
            "C. Hình thoi.",
            "D. Lục giác đều."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Phần thiếu gồm hai tam giác đều bằng nhau, nằm sát nhau và có chung một cạnh.\nBước 2: Cạnh chung nằm bên trong khi ghép, nên không thuộc đường bao ngoài.\nBước 3: Mỗi tam giác còn hai cạnh ngoài.~Tổng cộng có bốn cạnh ngoài bằng nhau vì các tam giác đều có cùng cạnh.\nBước 4: Bốn cạnh bằng nhau tạo thành hình thoi như phần trắng trên hình.~Các góc không vuông, nên không phải hình chữ nhật.\nBước 5: Mảnh vừa khít là hình thoi. Chọn C."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-05",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đếm cạnh ô trên đường bao",
          "prompt": "Năm ô vuông bằng nhau ghép thành hình dưới đây. Đường bao ngoài gồm bao nhiêu đoạn dài bằng một cạnh ô? Không tính các cạnh nằm bên trong.",
          "svg": svgCap2.svgGrade6Visual(8),
          "options": [
            "A. $10$",
            "B. $12$",
            "C. $16$",
            "D. $20$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Lấy một cạnh ô vuông làm một đơn vị độ dài.~Chỉ đếm đường bao ngoài, không đếm cạnh chung giữa hai ô.\nBước 2: Bắt đầu ở góc trên trái: đi sang phải $2$ đơn vị, xuống $1$, sang phải $1$.\nBước 3: Đi xuống $1$, sang trái $3$, rồi đi lên $2$ đơn vị để về góc đầu.\nBước 4: $2+1+1+1+3+2=10$ đơn vị.~Đường đi đã khép kín và mỗi đoạn biên chỉ được đếm một lần.\nBước 5: Đường bao gồm $10$ đoạn dài bằng cạnh ô. Chọn A."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-06",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Tìm độ dài trên đáy lớn",
          "prompt": "Hình thang cân có đáy nhỏ $AB=6$ cm, đáy lớn $DC=12$ cm. Hai đoạn vuông góc từ $A,B$ xuống đáy lớn cắt đáy tại $H,K$ như hình. Biết $HK=6$ cm. Độ dài $DH$ là bao nhiêu?",
          "svg": svgCap2.svgGrade6Visual(9),
          "options": [
            "A. $2$ cm",
            "B. $3$ cm",
            "C. $6$ cm",
            "D. $9$ cm"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đáy $DC$ gồm $DH$, $HK$ và $KC$.~Biết $DC=12$ cm, $HK=6$ cm.\nBước 2: Tổng hai đoạn ở hai bên là $DH+KC=12-6=6$ cm.\nBước 3: Gấp hình thang cân theo đường dọc chính giữa, phần bên trái chồng khít phần bên phải.~Vì thế $DH=KC$.\nBước 4: Hai phần bằng nhau có tổng $6$ cm, nên $DH=6:2=3$ cm.~Thử lại: $3+6+3=12$ cm.\nBước 5: $DH=3$ cm. Chọn B."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-07",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de",
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tìm ô chứa chấm sau khi ghép",
          "prompt": "Mảnh chữ L bên trái gồm ba ô vuông, có một chấm đỏ. Chỉ được quay, không lật hay cắt mảnh. Đặt mảnh vào phần trắng của hình chữ nhật bên phải. Chấm đỏ nằm ở ô nào?",
          "svg": svgCap2.svgGrade6Visual(10),
          "options": [
            "A. Ô A.",
            "B. Ô B.",
            "C. Ô C.",
            "D. Không ghép được."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Mảnh chữ L có một ô trên bên trái và hai ô ở hàng dưới.~Chấm đỏ nằm trong ô trên bên trái.\nBước 2: Phần trắng cần lấp có hai ô ở hàng trên và một ô dưới bên phải.\nBước 3: Quay mảnh nửa vòng sẽ đổi hàng trên thành hàng dưới và đổi bên trái thành bên phải.~Khi đó ba ô vừa khít phần trắng, không phải lật hay cắt.\nBước 4: Ô trên bên trái mang chấm đỏ chuyển xuống dưới bên phải.~Đó là ô C trong hình đích; các góc quay khác không khớp chỗ trống.\nBước 5: Chấm đỏ nằm ở ô C. Chọn C."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-08",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Tìm điểm qua gương",
          "prompt": "Các ô lưới là hình vuông bằng nhau. Điểm nào là ảnh của $A$ khi soi gương qua đường thẳng $d$?",
          "svg": svgCap2.svgGrade6VisualExtension("mirror"),
          "options": [
            "A. Điểm P.",
            "B. Điểm Q.",
            "C. Điểm R.",
            "D. Điểm S."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định vị trí cần tìm.\nẢnh của $A$ phải ở bên kia đường $d$, cùng hàng ngang với $A$ và cách $d$ một khoảng bằng khoảng cách từ $A$ đến $d$.\nBước 2: Đếm khoảng chia.\n$A$ ở bên trái $d$ bốn khoảng lưới. $P$ ở bên phải $d$ bốn khoảng và cùng hàng với $A$.\n$Q$ sai hàng, $R$ xa hơn, $S$ nằm ngay trên $d$.\nBước 3: Kết luận.\nĐiểm cần chọn là $P$. Chọn A."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-09",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đếm tam giác theo kích thước",
          "prompt": "Hình tam giác đều được chia lưới như hình; mỗi cạnh lớn gồm ba cạnh nhỏ bằng nhau. Có tất cả bao nhiêu tam giác đều có các cạnh nằm trọn trên những nét đã vẽ? Tính cả tam giác lớn bên ngoài.",
          "svg": svgCap2.svgGrade6VisualExtension("triangles"),
          "options": [
            "A. 9.",
            "B. 10.",
            "C. 13.",
            "D. 12."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đếm tam giác cạnh bằng một cạnh nhỏ.\nCác hàng có lần lượt $1,3,5$ tam giác nhỏ, kể cả những tam giác có đỉnh hướng xuống.\nCó $1+3+5=9$ tam giác loại này.\nBước 2: Đếm tam giác cạnh bằng hai cạnh nhỏ.\nCó một tam giác ở phía trên, một ở góc dưới trái và một ở góc dưới phải: tổng cộng $3$ hình.\nNếu quay đỉnh xuống, cạnh ngang dài hai cạnh nhỏ phải ở ít nhất hàng lưới thứ hai tính từ đỉnh trên. Đỉnh dưới của nó cần xuống thêm hai hàng nữa. Lưới chỉ có ba hàng nên không chứa được hình này.\nBước 3: Đếm hình lớn và cộng.\nCó đúng một tam giác cạnh bằng ba cạnh nhỏ, là đường bao ngoài. Không có kích thước cạnh nào khác trên lưới.\nTổng cộng $9+3+1=13$ tam giác. Chọn C."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-10",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Hai lỗ sau khi mở giấy",
          "prompt": "Gấp nửa trái của tờ giấy hình chữ nhật sang phải theo đường giữa. Đục một lỗ nhỏ tại $P$ xuyên qua cả hai lớp, cách nếp gấp $1$ cm như hình. Mở phẳng giấy, khoảng cách giữa hai lỗ là bao nhiêu?",
          "svg": svgCap2.svgGrade6VisualExtension("fold-hole"),
          "options": [
            "A. $1$ cm.",
            "B. $2$ cm.",
            "C. $0$ cm.",
            "D. $4$ cm."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Theo dõi hai lớp giấy.\nKhi gấp, hai vị trí bị đục chồng lên nhau. Khi mở, chúng nằm ở hai phía của nếp gấp, cùng trên một đường vuông góc với nếp.\nBước 2: Tính khoảng cách.\nMỗi lỗ cách nếp gấp $1$ cm. Nếp gấp nằm giữa hai lỗ nên khoảng cách là $1+1=2$ cm.\nBước 3: Kết luận.\nHai lỗ cách nhau $2$ cm. Chọn B."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-11",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Trục đối xứng của hai hình vuông ghép",
          "prompt": "Hai hình vuông được ghép như hình; cạnh của hình nhỏ bằng một nửa cạnh hình lớn. Cạnh phải hình nhỏ nằm chính giữa cạnh trái hình lớn. Trong hai đường $d,e$ đã vẽ, đường nào là trục đối xứng của toàn hình?",
          "svg": svgCap2.svgGrade6VisualExtension("joined-squares"),
          "options": [
            "A. Chỉ đường d.",
            "B. Chỉ đường e.",
            "C. Cả d và e.",
            "D. Không đường nào."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xét đường ngang $d$.\nĐường $d$ đi qua chính giữa cả hai hình vuông.\nGấp theo $d$, phần trên của mỗi hình vuông chồng khít phần dưới của chính nó. Toàn hình giữ nguyên.\nBước 2: Xét đường dọc $e$.\nHình có phần vuông nhỏ nhô ra bên trái. Bên phải không có phần tương ứng.\nVì vậy gấp theo $e$ không làm toàn bộ hai phần chồng khít.\nBước 3: Kết luận.\nTrong hai đường đã cho, chỉ $d$ là trục đối xứng. Chọn A."
        },
        {
          "id": "l6-hinh-truc-quan-nang-cao-12",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Số thanh dọc trong cách lát",
          "prompt": "Lát kín bảng $3$ hàng, $4$ cột bằng các thanh $1\\times3$ ô, không cắt, không chồng và không thừa ra ngoài. Các thanh nằm dọc theo ô lưới, được đặt ngang hoặc dọc. Danh sách đầy đủ số thanh đặt dọc có thể có là gì?",
          "svg": svgCap2.svgGrade6VisualExtension("triomino"),
          "options": [
            "A. $0;1;2;3;4$.",
            "B. $0;4$.",
            "C. $4$.",
            "D. $1;4$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xét ảnh hưởng của một thanh dọc.\nMột thanh dọc dài đúng ba hàng nên chiếm một ô ở mỗi hàng. Gọi số thanh dọc là $k$; khi đó $0\\le k\\le4$.\nBước 2: Xét các ô còn lại trong từng hàng.\nMỗi hàng còn $4-k$ ô để lát bằng thanh ngang, mỗi thanh ngang chiếm $3$ ô cùng hàng.\nVì vậy $4-k$ phải chia hết cho $3$. Trong các số $0,1,2,3,4$, chỉ $k=1$ hoặc $k=4$ thỏa điều kiện.\nBước 3: Kiểm tra có cách lát thật.\nVới $k=4$, đặt bốn thanh dọc vào bốn cột.\nVới $k=1$, đặt một thanh dọc ở cột ngoài cùng, rồi đặt một thanh ngang vào ba ô còn lại của mỗi hàng.\nBước 4: Kết luận.\nCả hai số $1,4$ đều đạt được và không số nào khác đạt được. Chọn D."
        }
      ],
      "hsg": [
        {
          "id": "l6-hinh-truc-quan-hsg-01",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Đếm các nếp gấp chồng khít",
          "prompt": "Một tờ giấy lục giác đều có bao nhiêu đường thẳng làm nếp gấp để hai phần giấy chồng khít?",
          "svg": svgCap2.svgGrade6Visual(11),
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Mỗi nếp gấp làm hai phần lục giác đều chồng khít là một trục đối xứng của nó.\nBước 2: Sáu đỉnh ghép thành ba cặp đỉnh đối diện.~Đường qua mỗi cặp là một nếp gấp chồng khít, nên có $3$ đường loại này.\nBước 3: Sáu cạnh ghép thành ba cặp cạnh đối diện.~Đường qua trung điểm mỗi cặp cũng chia hình thành hai phần chồng khít, cho thêm $3$ đường.\nBước 4: Một trục đối xứng phải qua tâm hình.~Nếu đi qua đỉnh, nó qua đỉnh đối diện; nếu đi qua trong một cạnh, nó phải chia đôi cạnh ấy để hai phần cạnh chồng khít, rồi qua trung điểm cạnh đối diện.~Đó chính là hai loại vừa đếm.\nBước 5: Có $3+3=6$ nếp gấp. Nhập $6$."
        },
        {
          "id": "l6-hinh-truc-quan-hsg-02",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Bổ sung ít ô nhất theo hai trục",
          "prompt": "Trên lưới, chỉ được tô thêm ô. Cần tô ít nhất bao nhiêu ô để phần xanh đối xứng qua cả đường dọc $d$ lẫn đường ngang $e$?",
          "svg": svgCap2.svgGrade6Visual(12),
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đếm hàng, cột từ 1 đến 5. Trục dọc đổi cột $1\\leftrightarrow5$, $2\\leftrightarrow4$; trục ngang đổi hàng theo cùng cách.~Hàng 3 và cột 3 ở giữa.\nBước 2: Đối xứng qua trục dọc cần ô (1;4).~Qua trục ngang cần ô (5;2).~Đối xứng tiếp cần ô (5;4).~Ba ô này đều phải tô.\nBước 3: Tương tự, cần thêm (2;5), (4;1), (4;5).~Đây là ba ô khác với nhóm trên.\nBước 4: Ô (3;3) giữ nguyên qua cả hai trục, không cần thêm ô ghép cặp.~Sáu ô đã nêu đều đang trắng và bắt buộc có. Khi tô đủ, cả hai nhóm đều đối xứng qua hai trục.\nBước 5: Ít nhất cần thêm $3+3=6$ ô. Nhập $6$."
        },
        {
          "id": "l6-hinh-truc-quan-hsg-03",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm các ô cần tô thêm",
          "prompt": "Chỉ được tô thêm ô để phần xanh giữ nguyên khi quay nửa vòng quanh $O$. Dùng ít ô thêm nhất. Tính tổng các số ghi trong những ô phải tô thêm.",
          "svg": svgCap2.svgGrade6Visual(13),
          "correctAnswer": "31",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Quay nửa vòng quanh $O$ đưa mỗi ô sang ô đối diện qua tâm lưới; cả hàng và cột đều đảo thứ tự.\nBước 2: Ô số $1$ đổi chỗ với ô $16$.~Ô $8$ đổi chỗ với ô $9$.~Ô $11$ đổi chỗ với ô $6$.\nBước 3: Các ô $16,9,6$ đều đang trắng.~Vì chỉ được tô thêm, phải tô cả ba để mỗi ô xanh có ô đối diện cũng xanh.\nBước 4: Sau khi thêm, ba cặp đổi chỗ cho nhau khi quay; hình xanh giữ nguyên.~Không cần ô nào khác. Tổng các số ở ô thêm là $16+9+6=31$.\nBước 5: Tổng cần nhập là $31$, không phải số ô thêm $3$."
        },
        {
          "id": "l6-hinh-truc-quan-hsg-04",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "su-dung-cong-cu",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giải thích cách chuyển một mảnh giấy",
          "prompt": "Cắt mảnh tam giác cam khỏi hình bình hành, rồi trượt nó sang phải như hình. Không xoay, kéo giãn hay bỏ mảnh nào. Giải thích vì sao ghép được hình chữ nhật và vì sao diện tích không đổi.",
          "svg": svgCap2.svgGrade6Visual(14),
          "solution": "Bước 1: Mảnh cam là tam giác có một cạnh đứng bằng chiều cao hình bình hành và một cạnh ngang bằng phần lệch của hai đáy.\nBước 2: Trượt nguyên mảnh sang bên phải như hình, không xoay hay kéo giãn.~Cạnh nghiêng của mảnh cam khớp với cạnh nghiêng bên phải phần xanh.\nBước 3: Cạnh ngang của mảnh lấp phần trống phía dưới; cạnh đứng của mảnh khép phía phải.~Đường bao mới có hai cạnh ngang và hai cạnh đứng, tạo bốn góc vuông.~Vì vậy hình ghép là hình chữ nhật.\nBước 4: Hai mảnh giữ nguyên kích thước.~Khi ghép, chúng không chồng lên nhau và không để khe hở.~Không mảnh nào bị bỏ đi, nên tổng diện tích hai mảnh giữ nguyên.\nBước 5: Hình chữ nhật ghép được có diện tích bằng hình bình hành ban đầu. Việc chuyển chỗ mảnh giấy chỉ đổi hình dạng, không đổi diện tích."
        },
        {
          "id": "l6-hinh-truc-quan-hsg-05",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "su-dung-cong-cu",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giải thích diện tích hình thoi ở giữa",
          "prompt": "Trên tờ giấy hình vuông, nối trung điểm các cạnh thành hình thoi ở giữa. Gấp bốn góc vào tâm $O$ theo các nét đứt. Giải thích vì sao bốn góc vừa phủ kín hình thoi và vì sao hình thoi chiếm một nửa diện tích tờ giấy.",
          "svg": svgCap2.svgGrade6Visual(15),
          "solution": "Bước 1: Đoạn nối các trung điểm tạo hình thoi ở giữa.~Phần ngoài gồm bốn tam giác ở bốn góc tờ giấy.\nBước 2: Gấp theo đoạn nối hai trung điểm thì hai trung điểm trên nếp gấp đứng yên.~Đỉnh góc vuông được đưa đến tâm $O$.~Vì vậy tam giác góc chồng khít tam giác có đỉnh $O$ và cùng hai trung điểm ấy.\nBước 3: Bốn góc lần lượt phủ bốn tam giác quanh $O$ trong hình thoi.~Bốn tam giác này không chồng phần trong lên nhau và phủ kín hình thoi.\nBước 4: Gấp không làm đổi diện tích mỗi mảnh.~Do đó tổng diện tích bốn góc bằng diện tích hình thoi.~Tờ giấy ban đầu gồm chính bốn góc ấy và hình thoi.\nBước 5: Diện tích cả tờ giấy bằng hai lần diện tích hình thoi. Vì vậy hình thoi chiếm một nửa diện tích tờ giấy."
        },
        {
          "id": "l6-hinh-truc-quan-hsg-06",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Đếm hình chữ nhật trên lưới",
          "prompt": "Lưới gồm $2$ hàng, $3$ cột ô vuông. Có bao nhiêu hình chữ nhật có các cạnh nằm trên đường lưới? Tính cả các hình vuông.",
          "svg": svgCap2.svgGrade6VisualExtension("rectangles"),
          "correctAnswer": "18",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chọn hai cạnh nằm ngang.\nCó ba đường ngang. Chọn hai đường làm cạnh trên và dưới có ba cách: hàng trên, hàng dưới, hoặc cả hai hàng.\nBước 2: Chọn hai cạnh thẳng đứng.\nCó bốn đường dọc. Các cặp đường tạo chiều rộng một ô có $3$ cách; rộng hai ô có $2$ cách; rộng ba ô có $1$ cách.\nTổng cộng $3+2+1=6$ cách.\nBước 3: Ghép hai lựa chọn.\nMỗi cặp đường ngang kết hợp được với mỗi cặp đường dọc và xác định đúng một hình chữ nhật.\nCó $3\\cdot6=18$ hình. Các hình vuông đã nằm trong số này.\nBước 4: Kết luận.\nCó $18$ hình chữ nhật, tính cả hình vuông."
        },
        {
          "id": "l6-hinh-truc-quan-hsg-07",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Bỏ que để không còn hình vuông",
          "prompt": "Mười hai que bằng nhau xếp thành lưới $2\\times2$ ô vuông như hình. Chỉ được lấy bớt que, không di chuyển que còn lại. Ít nhất cần lấy bao nhiêu que để không còn hình vuông nào, kể cả hình lớn?",
          "svg": svgCap2.svgGrade6VisualExtension("sticks"),
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xét vì sao hai que chưa đủ.\nCó bốn hình vuông nhỏ và một hình vuông lớn.\nMuốn phá hình lớn phải bỏ ít nhất một que ở đường bao ngoài. Que này chỉ thuộc một ô nhỏ.\nQue thứ hai thuộc nhiều nhất hai ô nhỏ. Hai que vì thế phá được nhiều nhất ba trong bốn ô nhỏ, vẫn còn ít nhất một ô.\nBước 2: Chỉ ra cách bỏ ba que.\nBỏ cả hai que thẳng đứng ở giữa lưới. Khi đó bốn ô nhỏ đều mất một cạnh.\nBỏ thêm một que trên đường bao ngoài để phá hình vuông lớn.\nBước 3: Kiểm tính đầy đủ.\nCác que chỉ theo hai hướng ngang, dọc. Trên lưới này, hình vuông chỉ có cạnh dài một que hoặc hai que, nên không còn loại hình vuông nào khác.\nBước 4: Kết luận.\nHai que không đủ, ba que có cách làm. Số que ít nhất cần bỏ là $3$."
        },
        {
          "id": "l6-hinh-truc-quan-hsg-08",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Đếm cách lát bảng hai hàng",
          "prompt": "Dùng bốn miếng chữ nhật $1\\times2$ ô giống nhau để lát kín bảng $2\\times4$ ô. Miếng nằm theo ô lưới, có thể đặt ngang hoặc dọc; không cắt, không chồng. Có bao nhiêu cách lát? Hai cách khác nhau nếu các cặp ô được ghép khác nhau; không gộp các cách chỉ vì chúng là ảnh gương.",
          "svg": svgCap2.svgGrade6VisualExtension("domino"),
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xét góc trái của bảng.\nNếu miếng che ô trên trái đặt dọc, nó phủ trọn cột đầu, để lại bảng $2\\times3$.\nNếu miếng ấy đặt ngang, hai ô dưới nó phải ghép thành một miếng ngang nữa; còn lại bảng $2\\times2$.\nBước 2: Đếm các bảng nhỏ.\nBảng $2\\times1$ có $1$ cách: một miếng dọc.\nBảng $2\\times2$ có $2$ cách: hai miếng dọc hoặc hai miếng ngang.\nTheo cách xét cột đầu, bảng $2\\times3$ có $2+1=3$ cách.\nBước 3: Cộng hai trường hợp của bảng ban đầu.\nCột đầu đặt dọc cho $3$ cách; hai miếng đầu đặt ngang cho $2$ cách.\nHai trường hợp không trùng nhau, nên tổng là $3+2=5$.\nBước 4: Liệt kê để đối chiếu trên hình.\nNăm cách ghép cặp ô là:\n$(AE,BF,CG,DH)$;\n$(AB,EF,CG,DH)$;\n$(AE,BC,FG,DH)$;\n$(AE,BF,CD,GH)$;\n$(AB,EF,CD,GH)$.\nVậy có $5$ cách lát.\nBước 5: Kết luận.\nCó $5$ cách lát khác nhau."
        },
        {
          "id": "l6-hinh-truc-quan-hsg-09",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc",
            "su-dung-cong-cu"
          ],
          "dang": "chungMinh",
          "title": "Vì sao đủ diện tích vẫn không lát được?",
          "prompt": "Bảng $4\\times4$ được tô xanh trắng xen kẽ như hình. Bỏ hai ô góc có dấu $\\times$. Có thể lát kín phần còn lại bằng bảy miếng $1\\times2$ ô không? Miếng nằm theo lưới, được đặt ngang hoặc dọc, không cắt và không chồng. Hãy giải thích; chỉ tính số ô là chưa đủ.",
          "svg": svgCap2.svgGrade6VisualExtension("checker"),
          "solution": "Bước 1: Đếm ô theo màu.\nBảng ban đầu có $8$ ô xanh và $8$ ô trắng. Hai ô bị bỏ đều xanh.\nPhần còn lại có $6$ ô xanh và $8$ ô trắng, tổng $14$ ô.\nBước 2: Xét một miếng lát.\nDù đặt ngang hay dọc, miếng $1\\times2$ luôn che hai ô chung cạnh.\nDo màu xen kẽ, hai ô đó luôn gồm một xanh và một trắng.\nBước 3: So sánh nhu cầu của bảy miếng.\nBảy miếng phải che đúng $7$ ô xanh và $7$ ô trắng.\nTrong khi phần cần lát chỉ có $6$ ô xanh và có tới $8$ ô trắng. Hai số lượng không phù hợp.\nBước 4: Kết luận.\nKhông thể lát kín theo yêu cầu. Tổng diện tích bằng $14$ ô là điều kiện cần, nhưng chưa bảo đảm có cách lát."
        },
        {
          "id": "l6-hinh-truc-quan-hsg-10",
          "lop": 6,
          "chuDe": "hinh-truc-quan",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc",
            "su-dung-cong-cu"
          ],
          "dang": "chungMinh",
          "title": "Cùng diện tích nhưng không gấp chồng khít",
          "prompt": "Tờ giấy hình chữ nhật $ABCD$ có $AB=6$ cm, $AD=4$ cm. Đường chéo $AC$ chia giấy thành hai mảnh. Giải thích vì sao hai mảnh có diện tích bằng nhau, nhưng gấp nguyên tờ giấy theo $AC$ thì hai nửa không chồng khít. Có thể dùng thao tác xoay nửa vòng quanh tâm $O$ để lập luận.",
          "svg": svgCap2.svgGrade6VisualExtension("diagonal-fold"),
          "solution": "Bước 1: So sánh hai mảnh bằng thao tác xoay.\nXoay hình chữ nhật nửa vòng quanh tâm $O$ thì $A$ đến $C$, $B$ đến $D$, $C$ đến $A$.\nMảnh $ABC$ vì thế chồng khít mảnh $CDA$. Xoay giấy không làm đổi diện tích, nên hai mảnh có diện tích bằng nhau.\nBước 2: Phân biệt xoay với gấp theo đường chéo.\nKhi gấp theo $AC$, hai điểm $A,C$ nằm trên nếp gấp nên giữ nguyên vị trí.\nNếu hai nửa chồng khít thì đỉnh còn lại $B$ phải đến đúng $D$.\nBước 3: Kiểm độ dài phải được giữ nguyên.\nGấp không kéo giãn giấy, nên khoảng cách từ $A$ đến ảnh của $B$ vẫn phải bằng $AB=6$ cm.\nNhưng $AD=4$ cm, khác $6$ cm. Bởi vậy ảnh của $B$ không thể là $D$.\nBước 4: Kết luận.\nHai mảnh có diện tích bằng nhau nhưng $AC$ không phải trục đối xứng của tờ giấy này. Do đó gấp theo $AC$ không làm hai nửa chồng khít."
        }
      ]
    },
    'hinh-co-ban': {
      "kha": [
        {
          "id": "l6-hinh-co-ban-kha-01",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Chọn điểm không thuộc đường thẳng",
          "prompt": "Quan sát hình. Điểm nào không thuộc đường thẳng $d$?",
          "svg": svgCap2.svgGrade6Basics(1),
          "options": [
            "A. $M$",
            "B. $P$",
            "C. $N$",
            "D. Cả ba điểm đều thuộc $d$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Cần tìm điểm không thuộc đường thẳng $d$ trên hình.\nBước 2: Một điểm thuộc đường thẳng khi dấu chấm biểu diễn điểm nằm trên nét biểu diễn đường thẳng ấy.\nBước 3: Dấu chấm của $M$ và $N$ đều nằm trên $d$.~Vì vậy $M\\in d$ và $N\\in d$.\nBước 4: Dấu chấm của $P$ nằm ngoài nét đường thẳng $d$, nên $P\\notin d$.~Ta nhìn dấu chấm, không lấy vị trí chữ ghi tên điểm để xét.\nBước 5: Điểm không thuộc $d$ là $P$. Chọn B."
        },
        {
          "id": "l6-hinh-co-ban-kha-02",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận ra điểm nằm giữa",
          "prompt": "Trên hình, điểm nào nằm giữa hai điểm $A,B$?",
          "svg": svgCap2.svgGrade6Basics(2),
          "options": [
            "A. $A$",
            "B. $B$",
            "C. $C$",
            "D. Không có điểm nào."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Trên hình, đi từ $A$ đến $B$ thì gặp $C$ trước khi đến $B$.\nBước 2: Ba dấu chấm $A,C,B$ cùng nằm trên một đường thẳng.\nBước 3: Điểm $C$ thuộc đoạn $AB$ và khác hai đầu mút, nên nằm giữa $A,B$.\nBước 4: $A$ và $B$ là hai đầu đoạn, không phải điểm nằm giữa chính hai đầu ấy.\nBước 5: Điểm nằm giữa là $C$. Chọn C."
        },
        {
          "id": "l6-hinh-co-ban-kha-03",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Phân loại góc trên hình",
          "prompt": "Góc $xOy$ trên hình có số đo $120^\\circ$. Đây là góc gì?",
          "svg": svgCap2.svgGrade6Basics(3),
          "options": [
            "A. Góc nhọn.",
            "B. Góc vuông.",
            "C. Góc bẹt.",
            "D. Góc tù."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Góc $xOy$ có số đo $120^\\circ$.\nBước 2: Góc tù lớn hơn góc vuông $90^\\circ$ nhưng nhỏ hơn góc bẹt $180^\\circ$.\nBước 3: $120^\\circ>90^\\circ$, nên góc này không nhọn và không vuông.\nBước 4: $120^\\circ<180^\\circ$.~Vậy $90^\\circ<120^\\circ<180^\\circ$, đúng điều kiện của góc tù.\nBước 5: Đây là góc tù. Chọn D."
        },
        {
          "id": "l6-hinh-co-ban-kha-04",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Hai tia đối nhau phải cùng gốc",
          "prompt": "Trên hình, $A,O,B$ thẳng hàng theo thứ tự đó. Cặp nào là hai tia đối nhau?",
          "svg": svgCap2.svgGrade6GeometryExtension("opposite"),
          "options": [
            "A. $AB$ và $BA$.",
            "B. $OA$ và $OB$.",
            "C. $OA$ và $OC$.",
            "D. $AO$ và $AB$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Dùng định nghĩa.\nHai tia đối nhau phải chung gốc và đi về hai phía trên cùng đường thẳng.\nBước 2: Đối chiếu hình.\nTia $OA$ và $OB$ cùng gốc $O$, đi về hai phía. Tia $AB$ và $BA$ khác gốc nên không là hai tia đối nhau. Chọn B."
        },
        {
          "id": "l6-hinh-co-ban-kha-05",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Điểm nằm trong góc",
          "prompt": "Góc $xOy$ là góc vuông như hình. Điểm nào nằm trong góc, không nằm trên cạnh góc?",
          "svg": svgCap2.svgGrade6GeometryExtension("inside"),
          "options": [
            "A. $P$",
            "B. $Q$",
            "C. $R$",
            "D. $S$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định miền trong góc.\nMiền trong góc nằm bên phải tia $Oy$ và phía trên tia $Ox$; không gồm hai cạnh.\nBước 2: Kiểm từng điểm.\n$P$ ở miền đó. $Q$ nằm về bên trái, $R$ nằm phía dưới, còn $S$ ở trên cạnh $Ox$. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l6-hinh-co-ban-nang-cao-01",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai tên của cùng một tia",
          "prompt": "Ba điểm theo thứ tự $A,B,C$ trên tia đã vẽ. Tia nào trùng với tia $AB$?",
          "svg": svgCap2.svgGrade6Basics(4),
          "options": [
            "A. $AC$",
            "B. $BA$",
            "C. $BC$",
            "D. $CA$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Tia $AB$ có gốc $A$ và đi từ $A$ về phía $B$.\nBước 2: Hai tia trùng nhau phải có cùng gốc và cùng hướng.\nBước 3: Vì thứ tự điểm là $A,B,C$, tia $AC$ cũng có gốc $A$ và đi về phía $B,C$.~Nó có cùng gốc, cùng hướng với tia $AB$.\nBước 4: $BA,BC$ có gốc $B$; $CA$ có gốc $C$.~Dù $BC$ cùng hướng, khác gốc vẫn không trùng tia $AB$.\nBước 5: Tia trùng với $AB$ là $AC$. Chọn A."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-02",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đọc đoạn thẳng trên thước",
          "prompt": "Hai đầu đoạn $AB$ ở vạch $1{,}5$ cm và $6$ cm của thước. Độ dài $AB$ là bao nhiêu?",
          "svg": svgCap2.svgGrade6Basics(5),
          "options": [
            "A. $6$ cm",
            "B. $7{,}5$ cm",
            "C. $4{,}5$ cm",
            "D. $3$ cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Một đầu ở vạch $1{,}5$ cm, đầu kia ở vạch $6$ cm.\nBước 2: Độ dài đoạn bằng số đọc ở đầu bên phải trừ số đọc ở đầu bên trái.\nBước 3: $AB=6-1{,}5=4{,}5$ cm.\nBước 4: Đầu trái không đặt ở vạch $0$, nên không thể lấy ngay $6$ cm làm độ dài.~Từ $1{,}5$ đến $6$ đúng là thêm $4{,}5$.\nBước 5: $AB=4{,}5$ cm. Chọn C."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-03",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính đoạn nằm trong một nửa",
          "prompt": "$M$ là trung điểm của $AB$, $AB=14$ cm. Điểm $P$ nằm giữa $A,M$ và $AP=2$ cm. Tính $PM$.",
          "svg": svgCap2.svgGrade6Basics(6),
          "options": [
            "A. $12$ cm",
            "B. $5$ cm",
            "C. $7$ cm",
            "D. $9$ cm"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: $M$ là trung điểm $AB$, nên $AM=MB$ và $AM=AB:2$.\nBước 2: $AM=14:2=7$ cm.\nBước 3: Vì $P$ nằm giữa $A,M$, đoạn $AM$ gồm $AP$ và $PM$.~Do đó $PM=AM-AP$.\nBước 4: $PM=7-2=5$ cm.~Ta có $AP=2<7=AM$ và $2+5=7$, phù hợp vị trí đã cho.\nBước 5: $PM=5$ cm. Chọn B."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-04",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đọc góc từ tia hướng trái",
          "prompt": "Tia $OA$ hướng sang trái. Đọc số đo góc $AOB$ theo thước hai thang trong hình.",
          "svg": svgCap2.svgGrade6Basics(7),
          "options": [
            "A. $120^\\circ$",
            "B. $30^\\circ$",
            "C. $150^\\circ$",
            "D. $60^\\circ$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tia $OA$ hướng sang trái, nên phải bắt đầu đọc từ phía trái của thước đo góc.\nBước 2: Chọn thang có vạch $0^\\circ$ ở phía tia $OA$.~Không chọn theo thói quen thang bắt đầu ở bên phải.\nBước 3: Tại vị trí tia $OB$, thang bắt đầu từ trái ghi $60^\\circ$.\nBước 4: Số $120^\\circ$ ở cùng vạch thuộc thang đếm từ phải.~Nó không đo từ tia $OA$ đang hướng trái.\nBước 5: $\\widehat{AOB}=60^\\circ$. Chọn D."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-05",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đếm đoạn thẳng từ năm điểm",
          "prompt": "Trên một đường thẳng có năm điểm phân biệt $A,B,C,D,E$. Có bao nhiêu đoạn thẳng có hai đầu thuộc năm điểm này?",
          "svg": svgCap2.svgGrade6Basics(8),
          "options": [
            "A. $10$",
            "B. $4$",
            "C. $5$",
            "D. $20$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Một đoạn được xác định bởi hai đầu mút. Đổi thứ tự hai đầu không tạo đoạn mới: $AB$ và $BA$ là cùng một đoạn.\nBước 2: Ghép $A$ với từng điểm còn lại được $AB,AC,AD,AE$: có $4$ đoạn.\nBước 3: Từ $B$ thêm $BC,BD,BE$: có $3$ đoạn.~Từ $C$ thêm $CD,CE$: có $2$ đoạn.~Từ $D$ thêm $DE$: có $1$ đoạn.\nBước 4: $4+3+2+1=10$.~Mỗi cặp điểm đã xuất hiện đúng một lần; các đoạn chồng nhau một phần vẫn khác nhau nếu khác hai đầu mút.\nBước 5: Có $10$ đoạn thẳng. Chọn A."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-06",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đếm đường qua bốn điểm",
          "prompt": "Ba điểm phân biệt $A,B,C$ thẳng hàng; $D$ nằm ngoài đường thẳng đó. Có bao nhiêu đường thẳng đi qua ít nhất hai trong bốn điểm?",
          "svg": svgCap2.svgGrade6Basics(9),
          "options": [
            "A. $3$",
            "B. $6$",
            "C. $4$",
            "D. $5$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Các cặp $AB,AC,BC$ cùng xác định một đường thẳng vì $A,B,C$ thẳng hàng.\nBước 2: Ghép $D$ với ba điểm ấy được $AD,BD,CD$.\nBước 3: Nếu chẳng hạn $AD$ trùng $BD$, đường đó đi qua cả $A,B,D$.~Khi ấy $D$ phải nằm trên đường thẳng $AB$, trái với đề.~Lập luận tương tự áp dụng cho hai cặp còn lại.\nBước 4: Không đường nào trong $AD,BD,CD$ trùng đường $ABC$, vì chúng chứa $D$ ở ngoài đường ấy.~Vậy có một đường ban đầu và ba đường mới.\nBước 5: Tổng cộng $1+3=4$ đường thẳng. Chọn C."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-07",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de",
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tìm vạch của đầu đoạn còn thiếu",
          "prompt": "Thước chia theo xăng-ti-mét. $A$ ở vạch $2$, trung điểm $M$ của $AB$ ở vạch $5{,}5$. $B$ ở phía bên phải $M$. Đầu $B$ ứng với số nào trên thước?",
          "svg": svgCap2.svgGrade6Basics(10),
          "options": [
            "A. $7$",
            "B. $9$",
            "C. $11$",
            "D. $3{,}5$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: $A$ ở vạch $2$, $M$ ở vạch $5{,}5$, nên $AM=5{,}5-2=3{,}5$ cm.\nBước 2: $M$ là trung điểm $AB$, nên $MB=AM=3{,}5$ cm.\nBước 3: $B$ nằm bên phải $M$, vì vậy số đọc ở $B$ lớn hơn số đọc ở $M$.\nBước 4: Số đọc là $5{,}5+3{,}5=9$.~Độ dài $AB=7$ cm, nhưng $7$ không phải số đọc ở đầu $B$ vì $A$ ở vạch $2$.\nBước 5: $B$ ở vạch $9$ cm. Chọn B."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-08",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đặt thước đo góc đúng cách",
          "prompt": "Muốn đo góc $AOB$ bằng thước đo góc, cách đặt nào đúng?",
          "svg": "",
          "options": [
            "A. Đặt tâm thước tại $A$.",
            "B. Đặt tâm tại $O$, vạch $90$ trên $OA$, rồi đọc trực tiếp thang từ $0$.",
            "C. Đặt vạch $0$ trên $OA$, tâm ở đâu cũng được.",
            "D. Đặt tâm tại $O$, vạch $0$ của thang đọc trên $OA$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Ghép các mốc của thước với góc.\nTâm thước phải trùng đỉnh $O$. Vạch $0$ của thang được đọc phải nằm trên một cạnh góc.\nBước 2: Đọc cạnh còn lại.\nSau khi đặt đúng hai mốc, đọc vạch mà cạnh kia đi qua. Chỉ đặt tâm đúng hoặc chỉ đặt vạch $0$ đúng đều chưa đủ. Chọn D."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-09",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Phần góc còn lại",
          "prompt": "Tia $OC$ nằm trong góc $AOB$. Biết $\\widehat{AOB}=110^\\circ$, $\\widehat{AOC}=35^\\circ$. Tính $\\widehat{COB}$.",
          "svg": svgCap2.svgGrade6GeometryExtension("angle75"),
          "options": [
            "A. $145^\\circ$",
            "B. $55^\\circ$",
            "C. $75^\\circ$",
            "D. $35^\\circ$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định hai phần ghép thành góc lớn.\nVì $OC$ ở trong góc nên $\\widehat{AOC}+\\widehat{COB}=\\widehat{AOB}$.\nBước 2: Lấy phần toàn trừ phần đã biết.\n$\\widehat{COB}=110^\\circ-35^\\circ=75^\\circ$. Kết quả dương và nhỏ hơn góc toàn phần. Chọn C."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-10",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Hai điểm ở hai phía của gốc",
          "prompt": "Hai tia $OA,OB$ đối nhau. Biết $OA=3$ cm, $OB=5$ cm. Độ dài $AB$ là bao nhiêu?",
          "svg": svgCap2.svgGrade6GeometryExtension("opposite-length"),
          "options": [
            "A. $2$ cm",
            "B. $5$ cm",
            "C. $3$ cm",
            "D. $8$ cm"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Suy ra thứ tự điểm.\n$A$ và $B$ ở hai phía của $O$, nên $O$ nằm giữa $A,B$.\nBước 2: Ghép hai đoạn.\n$AB=AO+OB=3+5=8$ cm. Không lấy hiệu vì hai điểm không ở cùng phía của gốc. Chọn D."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-11",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Hai góc bằng nhau ở hai phía",
          "prompt": "Hai tia $OB,OC$ nằm ở hai phía của đường thẳng chứa $OA$, và $\\widehat{BOA}=\\widehat{AOC}=75^\\circ$ như hình. Tính góc nhỏ $BOC$.",
          "svg": svgCap2.svgGrade6GeometryExtension("angle150"),
          "options": [
            "A. $150^\\circ$",
            "B. $75^\\circ$",
            "C. $0^\\circ$",
            "D. $105^\\circ$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định góc đi qua tia OA.\nHai góc đã biết ở hai phía $OA$, nên góc đi từ $OB$ qua $OA$ đến $OC$ bằng $75^\\circ+75^\\circ$.\nBước 2: Kiểm đó là góc nhỏ.\nTổng bằng $150^\\circ<180^\\circ$, vì vậy chính là góc nhỏ $BOC$. Chọn A."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-12",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Thiếu vị trí thì có mấy số đo?",
          "prompt": "Biết $\\widehat{AOC}=80^\\circ$, $\\widehat{BOC}=50^\\circ$. Chưa biết $OA,OB$ ở cùng phía hay khác phía đường thẳng chứa $OC$. Tập đầy đủ các số đo có thể của góc nhỏ $AOB$ là gì?",
          "svg": svgCap2.svgGrade6GeometryExtension("two-angle-cases"),
          "options": [
            "A. Chỉ $30^\\circ$.",
            "B. $30^\\circ$ và $130^\\circ$.",
            "C. Chỉ $130^\\circ$.",
            "D. $50^\\circ$ và $80^\\circ$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xét khi hai tia ở cùng phía.\nGóc $AOB$ là phần chênh: $80^\\circ-50^\\circ=30^\\circ$.\nBước 2: Xét khi hai tia ở khác phía.\nGóc đi qua $OC$ bằng $80^\\circ+50^\\circ=130^\\circ<180^\\circ$, nên là góc nhỏ cần tìm.\nBước 3: Kết luận đủ trường hợp.\nMỗi tia chỉ có thể nằm ở một trong hai phía đã nêu. Vì vậy có hai khả năng $30^\\circ$ và $130^\\circ$. Không được chọn một giá trị khi đề chưa cho vị trí. Chọn B."
        },
        {
          "id": "l6-hinh-co-ban-nang-cao-13",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Ba phần trong một góc vuông",
          "prompt": "Các tia theo thứ tự $OA,OC,OD,OB$ bên trong và trên biên góc vuông $AOB$. Biết $\\widehat{AOC}=25^\\circ$, $\\widehat{COD}=40^\\circ$. Tính $\\widehat{DOB}$.",
          "svg": svgCap2.svgGrade6GeometryExtension("angle25"),
          "options": [
            "A. $65^\\circ$",
            "B. $50^\\circ$",
            "C. $25^\\circ$",
            "D. $15^\\circ$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Cộng hai phần đầu.\n$\\widehat{AOD}=25^\\circ+40^\\circ=65^\\circ$ vì các tia có thứ tự đã cho.\nBước 2: Tính phần còn lại của góc vuông.\n$\\widehat{DOB}=90^\\circ-65^\\circ=25^\\circ$. Ba phần cộng lại bằng $90^\\circ$. Chọn C."
        }
      ],
      "hsg": [
        {
          "id": "l6-hinh-co-ban-hsg-01",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tìm đoạn giữa hai mốc trong",
          "prompt": "Bốn điểm theo thứ tự $A,B,C,D$ trên một đường thẳng. Biết $AD=13$ cm, $AB=3$ cm, $CD=5$ cm. Tính $BC$ theo xăng-ti-mét.",
          "svg": svgCap2.svgGrade6Basics(11),
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Các điểm xếp theo $A,B,C,D$, nên $AD$ gồm liên tiếp ba đoạn $AB,BC,CD$.\nBước 2: $AB+BC+CD=AD$.~Đoạn chưa biết bằng toàn đoạn trừ hai phần đã biết.\nBước 3: $BC=13-3-5=5$ cm.\nBước 4: $3+5+5=13$ cm, đúng bằng $AD$.~Giá trị $BC>0$ phù hợp với bốn điểm phân biệt theo thứ tự đề cho.\nBước 5: $BC=5$ cm. Nhập $5$."
        },
        {
          "id": "l6-hinh-co-ban-hsg-02",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tính khoảng cách hai trung điểm",
          "prompt": "Ba điểm theo thứ tự $A,B,C$ trên một đường thẳng. $M$ là trung điểm của $AB$, $N$ là trung điểm của $BC$. Biết $AN=11$ cm, $MC=13$ cm. Tính $MN$ theo xăng-ti-mét.",
          "svg": svgCap2.svgGrade6Basics(12),
          "correctAnswer": "8",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Vì $M$ là trung điểm $AB$, gọi $AM=MB=u$.~Vì $N$ là trung điểm $BC$, gọi $BN=NC=v$.~Thứ tự các điểm là $A,M,B,N,C$.\nBước 2: $AN=AM+MB+BN=2u+v=11$.~$MC=MB+BN+NC=u+2v=13$.\nBước 3: Cộng hai độ dài: $11+13=3u+3v=3(u+v)$.~Mà $MN=MB+BN=u+v$, nên $MN=24:3=8$ cm.\nBước 4: Từ $AN-MN=11-8=3$, được $AM=u=3$.~Do đó $v=8-3=5$.~Thử lại $2\\cdot3+5=11$, $3+2\\cdot5=13$; cả hai nửa đoạn đều dương.\nBước 5: $MN=8$ cm. Nhập $8$."
        },
        {
          "id": "l6-hinh-co-ban-hsg-03",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm đoạn có độ dài đã cho",
          "prompt": "Sáu điểm theo thứ tự $A,B,C,D,E,F$ trên một đường thẳng. Các đoạn liên tiếp dài lần lượt $2,3,5,2,3$ cm. Có bao nhiêu đoạn dài $10$ cm với hai đầu thuộc sáu điểm?",
          "svg": svgCap2.svgGrade6Basics(13),
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính khoảng cách từ $A$ đến từng điểm bằng cách cộng các đoạn liên tiếp.\nBước 2: Các khoảng cách lần lượt là $0,2,5,10,12,15$ cm, ứng với $A,B,C,D,E,F$.~Chẳng hạn $AC=2+3=5$, $AD=2+3+5=10$.\nBước 3: Từ vị trí $0$ có $10$: đoạn $AD$.~Từ vị trí $2$ có $12$: đoạn $BE$.~Từ vị trí $5$ có $15$: đoạn $CF$.\nBước 4: Các điểm ở vị trí $10,12,15$ muốn làm đầu bên trái phải có điểm ở $20,22,25$, nhưng không có.~Mỗi đoạn đã được đếm từ đầu bên trái, nên không đếm trùng.\nBước 5: Có đúng $3$ đoạn dài $10$ cm. Nhập $3$."
        },
        {
          "id": "l6-hinh-co-ban-hsg-04",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "su-dung-cong-cu",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giải thích vì sao nếp gấp tìm được trung điểm",
          "prompt": "Trên tờ giấy có đoạn $AB$ với $A\\ne B$. Gấp giấy để $A$ trùng $B$, nếp gấp cắt đoạn $AB$ tại $M$. Giải thích vì sao $M$ là trung điểm của $AB$. Không dùng số đo ước lượng từ hình.",
          "svg": svgCap2.svgGrade6Basics(14),
          "solution": "Bước 1: $M$ nằm trên nếp gấp. Khi gấp giấy, điểm trên nếp gấp giữ nguyên vị trí, nên $M$ đứng yên.\nBước 2: Đề cho gấp để $A$ trùng $B$.~Vì vậy đoạn nối $M$ với $A$ chồng khít đoạn nối $M$ với $B$.\nBước 3: Gấp không kéo giãn giấy, nên hai đoạn chồng khít dài bằng nhau: $MA=MB$.\nBước 4: $M$ thuộc đoạn $AB$ theo cách chọn.~Nó không thể trùng $A$ hoặc $B$: một điểm trên nếp gấp đứng yên, trong khi hai điểm khác nhau $A,B$ phải được đưa trùng nhau.~Do đó $M$ nằm giữa $A,B$.\nBước 5: $M$ nằm giữa $A,B$ và $MA=MB$, nên là trung điểm của $AB$. Kết luận dựa vào phép gấp, không dựa vào ước lượng hình vẽ."
        },
        {
          "id": "l6-hinh-co-ban-hsg-05",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "su-dung-cong-cu",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Vì sao hai thang chỉ cùng số ở góc vuông",
          "prompt": "Ở mỗi vạch của thước đo góc hai thang, có hai số đọc theo hai chiều ngược nhau. Giải thích vì sao tổng hai số luôn bằng $180^\\circ$. Khi nào hai số ở cùng một vạch bằng nhau?",
          "svg": svgCap2.svgGrade6Basics(15),
          "solution": "Bước 1: Một thang đếm từ $0^\\circ$ ở đầu trái; thang kia đếm từ $0^\\circ$ ở đầu phải của cùng nửa vòng tròn.\nBước 2: Vạch ấy chia nửa vòng thành phần từ trái đến vạch và phần từ vạch đến phải.~Hai số đọc chính là số đo hai phần này.\nBước 3: Hai phần ghép lại thành nửa vòng, tức góc bẹt $180^\\circ$.~Vì vậy tổng hai số đọc luôn bằng $180^\\circ$.\nBước 4: Nếu hai số bằng nhau thì mỗi số là $180^\\circ:2=90^\\circ$.~Ngược lại, tại vạch chính giữa, hai phía đều đo được $90^\\circ$.\nBước 5: Hai số cùng vạch có tổng $180^\\circ$; chúng bằng nhau đúng tại vạch $90^\\circ$. Hai số khác nhau ở vạch khác không phải lỗi của thước."
        },
        {
          "id": "l6-hinh-co-ban-hsg-06",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Đếm tia nhưng không đếm trùng",
          "prompt": "Ba điểm theo thứ tự $A,B,C$ trên một đường thẳng; $D$ ở ngoài đường thẳng. Có bao nhiêu tia phân biệt có gốc là $A$ hoặc $B$ và đi qua ít nhất một trong ba điểm còn lại?",
          "svg": svgCap2.svgGrade6GeometryExtension("count-rays"),
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đếm tại gốc A.\nTia $AB$ trùng $AC$, còn $AD$ khác chúng vì $D$ không thuộc đường thẳng $ABC$. Có $2$ tia.\nBước 2: Đếm tại gốc B.\nBa tia $BA,BC,BD$ khác nhau: hai tia đầu đối nhau, tia còn lại không nằm trên đường thẳng ấy. Có $3$ tia.\nHai nhóm khác gốc không trùng tia. Tổng là $2+3=5$ tia.\nBước 3: Kết luận.\nCó $5$ tia phân biệt."
        },
        {
          "id": "l6-hinh-co-ban-hsg-07",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Không biết hai điểm ở phía nào",
          "prompt": "Trên đường thẳng $AB$, $AB=10$ cm. Chọn $M,N$ sao cho $AM=3$ cm và $BN=4$ cm; không bắt buộc $M,N$ thuộc đoạn $AB$. Tính tổng tất cả các độ dài khác nhau có thể của $MN$, theo cm.",
          "svg": svgCap2.svgGrade6GeometryExtension("four-positions"),
          "correctAnswer": "40",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Liệt kê vị trí của từng điểm.\nLấy $A$ làm mốc $0$, phía $B$ là chiều dương thì $B$ ở mốc $10$.\n$M$ ở mốc $-3$ hoặc $3$; $N$ ở mốc $6$ hoặc $14$.\nBước 2: Ghép đủ bốn trường hợp.\nNếu $M$ ở $-3$, hai độ dài là $6-(-3)=9$ và $14-(-3)=17$ cm.\nNếu $M$ ở $3$, hai độ dài là $6-3=3$ và $14-3=11$ cm.\nBước 3: Cộng các giá trị khác nhau.\nBốn số $3,9,11,17$ khác nhau và đều dựng được trên đường thẳng. Tổng là $40$.\nBước 4: Kết luận.\nTổng các độ dài khác nhau của $MN$ bằng $40$ cm."
        },
        {
          "id": "l6-hinh-co-ban-hsg-08",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Hai đoạn dài chồng lên nhau",
          "prompt": "Bốn điểm theo thứ tự $A,B,C,D$. Biết $AB=2BC$, $CD=BC+1$ cm và $AC+BD=31$ cm. Tính $AD$ theo cm.",
          "svg": svgCap2.svgGrade6GeometryExtension("overlapping-lengths"),
          "correctAnswer": "25",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt tên độ dài đoạn giữa.\nGọi $BC=x$ cm, $x>0$. Khi đó $AB=2x$ cm và $CD=x+1$ cm.\nBước 2: Đếm số lần đoạn giữa xuất hiện.\n$AC=3x$ và $BD=2x+1$, nên $5x+1=31$. Do đó $x=6$.\nBước 3: Tính đoạn toàn phần và thử.\n$AD=12+6+7=25$ cm.\n$AC=18$, $BD=13$ nên tổng $31$ cm. Các đoạn liên tiếp đều dương, đúng thứ tự điểm.\nBước 4: Kết luận.\n$AD=25$ cm."
        },
        {
          "id": "l6-hinh-co-ban-hsg-09",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc",
            "su-dung-cong-cu"
          ],
          "dang": "chungMinh",
          "title": "Tia trùng nhau chưa cho đủ thứ tự",
          "prompt": "Ba điểm $A,B,C$ phân biệt và hai tia $AB,AC$ trùng nhau. Có thể kết luận hai tia $BA,BC$ đối nhau không? Dùng hai thứ tự điểm trên hình để giải thích, và nêu điều kiện cần thêm để kết luận đó đúng.",
          "svg": svgCap2.svgGrade6GeometryExtension("ray-order"),
          "solution": "Bước 1: Đọc đúng giả thiết.\nHai tia $AB,AC$ trùng nhau chỉ cho biết $B,C$ cùng phía đối với $A$. Chưa biết điểm nào gần $A$ hơn.\nBước 2: Kiểm hai thứ tự.\nỞ hình I, thứ tự $A,B,C$ làm $B$ nằm giữa hai điểm còn lại. Khi đó $BA,BC$ đối nhau.\nỞ hình II, thứ tự $A,C,B$ làm $BA,BC$ cùng hướng và trùng nhau, nên không đối nhau.\nBước 3: Kết luận.\nChưa thể kết luận từ giả thiết ban đầu. Cần thêm $B$ nằm giữa $A,C$; tương đương $AB<AC$ trong cấu hình hai tia trùng đã cho."
        },
        {
          "id": "l6-hinh-co-ban-hsg-10",
          "lop": 6,
          "chuDe": "hinh-co-ban",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc",
            "su-dung-cong-cu"
          ],
          "dang": "chungMinh",
          "title": "Dựng bảy xentimét bằng hai đoạn chuẩn",
          "prompt": "Trên một đường thẳng, bắt đầu từ $O$. Mỗi lần chỉ được đặt nối tiếp một đoạn chuẩn dài $3$ cm hoặc $5$ cm, theo một trong hai hướng; có thể quay lại phần đã đi. Không có thước chia vạch khác. Hãy tạo điểm cách $O$ đúng $7$ cm bằng ba lần đặt, và giải thích vì sao không thể làm với ít hơn ba lần.",
          "svg": svgCap2.svgGrade6GeometryExtension("construct-seven"),
          "solution": "Bước 1: Chỉ ra cách thực hiện.\nTừ $O$, đặt $OP=5$ cm sang phải, rồi $PQ=5$ cm cũng sang phải. Từ $Q$ đặt đoạn $QR=3$ cm sang trái.\nVì $OQ=10$ cm nên $OR=10-3=7$ cm.\nBước 2: Kiểm một lần đặt.\nMột lần chỉ tạo khoảng cách $3$ hoặc $5$ cm, chưa đạt $7$.\nBước 3: Kiểm hai lần đặt.\nHai lần cùng hướng cho các khoảng cách $6,8,10$ cm. Hai lần ngược hướng cho $0$ hoặc $2$ cm.\nĐã xét cả hai loại độ dài và hai hướng; không có $7$ cm.\nBước 4: Kết luận.\nBa lần đặt theo cách $5+5-3$ thực hiện được. Một hoặc hai lần không đủ, nên ba là số lần ít nhất."
        }
      ]
    },
    'chu-vi-dien-tich': {
      "kha": [
        {
          "id": "l6-chu-vi-dien-tich-kha-01",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Chọn đơn vị cho phần mặt sàn",
          "prompt": "Cần tính phần mặt sàn để mua vật liệu phủ kín. Nên tính đại lượng nào và dùng đơn vị nào?",
          "svg": "",
          "options": [
            "A. Chu vi, mét.",
            "B. Diện tích, mét.",
            "C. Chu vi, mét vuông.",
            "D. Diện tích, mét vuông."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Phần mặt sàn là diện tích, đo bằng đơn vị vuông như mét vuông (m²).\nBước 2: Chu vi chỉ đo đường bao quanh sàn."
        },
        {
          "id": "l6-chu-vi-dien-tich-kha-02",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính chu vi khu vườn",
          "prompt": "Khu vườn hình chữ nhật dài $8$ m, rộng $5$ m. Chu vi là bao nhiêu?",
          "svg": svgCap2.svgGrade6Areas(2),
          "options": [
            "A. $13$ m",
            "B. $26$ m",
            "C. $40$ m",
            "D. $16$ m"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Chu vi bằng $2\\cdot(8+5)=26$ m.\nBước 2: Tích $8\\cdot5=40$ là số đo diện tích, không phải chu vi."
        },
        {
          "id": "l6-chu-vi-dien-tich-kha-03",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn đúng chiều cao để tính diện tích",
          "prompt": "Hình bình hành có đáy $9$ cm, chiều cao $4$ cm và cạnh bên $5$ cm như hình. Diện tích bằng bao nhiêu?",
          "svg": svgCap2.svgGrade6Areas(3),
          "options": [
            "A. $45$ cm²",
            "B. $18$ cm²",
            "C. $36$ cm²",
            "D. $28$ cm²"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Lấy đáy nhân với chiều cao vuông góc: $S=9\\cdot4=36$ cm².\nBước 2: Cạnh bên $5$ cm không phải chiều cao ứng với đáy $9$ cm."
        },
        {
          "id": "l6-chu-vi-dien-tich-kha-04",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Chu vi hình thoi",
          "prompt": "Hình thoi có cạnh dài $a$ cm. Công thức nào tính chu vi theo cm?",
          "svg": svgCap2.svgGrade6GeometryExtension("rhombus"),
          "options": [
            "A. $4a$",
            "B. $a^2$",
            "C. $2a$",
            "D. $4a^2$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhận ra các cạnh bằng nhau.\nHình thoi có bốn cạnh đều dài $a$.\nBước 2: Cộng đường bao.\n$P=a+a+a+a=4a$. Chọn A."
        },
        {
          "id": "l6-chu-vi-dien-tich-kha-05",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Độ nghiêng có làm đổi diện tích?",
          "prompt": "Hai hình bình hành I và II đều có đáy $5$ cm, chiều cao $3$ cm như hình. So sánh diện tích.",
          "svg": svgCap2.svgGrade6GeometryExtension("same-parallelogram"),
          "options": [
            "A. Hình I lớn hơn.",
            "B. Hình II lớn hơn.",
            "C. Bằng nhau, cùng $15$ cm².",
            "D. Bằng nhau, cùng $8$ cm²."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chọn đúng hai kích thước.\nDiện tích hình bình hành là đáy nhân chiều cao, không phụ thuộc độ nghiêng khi hai kích thước này giữ nguyên.\nBước 2: Tính từng hình.\n$S_I=S_{II}=5\\cdot3=15$ cm². Chọn C."
        }
      ],
      "nangCao": [
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-01",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính diện tích theo hai đường chéo",
          "prompt": "Hình thoi có hai đường chéo dài $12$ cm và $16$ cm. Tính diện tích.",
          "svg": svgCap2.svgGrade6Areas(4),
          "options": [
            "A. $96$ cm²",
            "B. $192$ cm²",
            "C. $48$ cm²",
            "D. $56$ cm²"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Diện tích bằng nửa tích hai đường chéo: $S=12\\cdot16:2=96$ cm².\nBước 2: Các số đo dương và hình vẽ có bốn cạnh bằng nhau."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-02",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tính chiều dài rào có hai cổng",
          "prompt": "Mảnh đất chữ nhật dài $18$ m, rộng $12$ m. Làm rào quanh đất, chừa hai cổng riêng rộng $3$ m và $2$ m như hình. Không có phần rào nào khác. Cần bao nhiêu mét rào?",
          "svg": svgCap2.svgGrade6Areas(5),
          "options": [
            "A. $60$ m",
            "B. $50$ m",
            "C. $65$ m",
            "D. $55$ m"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đường bao dài $2(18+12)=60$ m.\nBước 2: Hai cổng không trùng nhau, tổng chiều rộng $3+2=5$ m, nên cần $60-5=55$ m rào.\nBước 3: Chỉ trừ mỗi cổng một lần."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-03",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Tính diện tích hình thang cân",
          "prompt": "Mảnh đất hình thang cân có hai đáy $14$ m và $8$ m, chiều cao $4$ m. Cạnh bên dài $5$ m như hình. Diện tích bằng bao nhiêu?",
          "svg": svgCap2.svgGrade6Areas(6),
          "options": [
            "A. $88$ m²",
            "B. $44$ m²",
            "C. $55$ m²",
            "D. $32$ m²"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: $S=(14+8)\\cdot4:2=44$ m².\nBước 2: Phải dùng chiều cao $4$ m; cạnh bên $5$ m không vuông góc với hai đáy."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-04",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tính số viên gạch lát kín nền",
          "prompt": "Nền chữ nhật dài $3{,}6$ m, rộng $2{,}4$ m. Lát bằng gạch vuông cạnh $30$ cm, không có khe và không hao hụt. Cần bao nhiêu viên?",
          "svg": "",
          "options": [
            "A. $96$",
            "B. $24$",
            "C. $288$",
            "D. $960$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đổi $30$ cm $=0{,}3$ m.\nBước 2: Theo chiều dài xếp $3{,}6:0{,}3=12$ viên, theo chiều rộng xếp $2{,}4:0{,}3=8$ viên.\nBước 3: Cần $12\\cdot8=96$ viên.\nBước 4: Hai thương đều nguyên nên lát kín mà không phải cắt gạch; cũng có thể lấy $8{,}64:0{,}09=96$."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-05",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tìm cạnh rồi tính chu vi",
          "prompt": "Tấm bìa hình chữ nhật có diện tích $84$ cm², chiều dài $12$ cm. Tính chu vi.",
          "svg": svgCap2.svgGrade6Areas(8),
          "options": [
            "A. $19$ cm",
            "B. $168$ cm",
            "C. $38$ cm",
            "D. $24$ cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chiều rộng là $84:12=7$ cm.\nBước 2: Chu vi bằng $2(12+7)=38$ cm.\nBước 3: Cả hai kích thước dương và $7<12$, phù hợp tên chiều rộng, chiều dài."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-06",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tính tiền sơn phần tường còn lại",
          "prompt": "Sơn một mặt tường chữ nhật rộng $5$ m, cao $3$ m, trừ cửa rộng $1$ m, cao $2$ m. Giá sơn trọn gói là $50\\,000$ đồng/m² phần được sơn. Cần trả bao nhiêu đồng?",
          "svg": svgCap2.svgGrade6Areas(9),
          "options": [
            "A. $750\\,000$",
            "B. $650\\,000$",
            "C. $550\\,000$",
            "D. $600\\,000$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Diện tích tường $5\\cdot3=15$ m²; cửa $1\\cdot2=2$ m².\nBước 2: Phần được sơn là $15-2=13$ m², tiền phải trả $13\\cdot50\\,000=650\\,000$ đồng.\nBước 3: Không sơn cửa và không tính thêm mặt tường khác."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-07",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tìm chu vi không cần đo từng bậc",
          "prompt": "Hình bậc thang có cạnh dưới dài $12$ cm, cạnh trái cao $8$ cm. Các bậc chỉ đi sang trái hoặc đi lên như hình, mọi góc đều vuông. Tính chu vi.",
          "svg": svgCap2.svgGrade6Areas(10),
          "options": [
            "A. $20$ cm",
            "B. $48$ cm",
            "C. $96$ cm",
            "D. $40$ cm"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đi từ góc dưới phải lên góc trên trái theo các bậc: tổng các đoạn ngang bằng $12$ cm, tổng các đoạn đứng bằng $8$ cm.\nBước 2: Thêm cạnh dưới và cạnh trái, chu vi là $12+8+12+8=40$ cm.\nBước 3: Vì đường bậc không quay ngược hướng nên không có phần độ dài phải cộng thêm."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-08",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đổi đơn vị diện tích",
          "prompt": "Một tấm phủ có diện tích $45\\,000$ cm². Diện tích đó bằng bao nhiêu m²?",
          "svg": "",
          "options": [
            "A. $450$ m²",
            "B. $4{,}5$ m²",
            "C. $45$ m²",
            "D. $0{,}45$ m²"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đổi đơn vị theo hai chiều.\n$1$ m² là diện tích hình vuông cạnh $100$ cm, nên bằng $100\\cdot100=10\\,000$ cm².\nBước 2: Thực hiện phép đổi.\n$45\\,000:10\\,000=4{,}5$ m². Chọn B."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-09",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Diện tích phần viền",
          "prompt": "Hình chữ nhật ngoài dài $12$ cm, rộng $8$ cm. Hình chữ nhật trắng ở trong dài $10$ cm, rộng $6$ cm. Tính diện tích phần viền tô màu.",
          "svg": svgCap2.svgGrade6GeometryExtension("frame36"),
          "options": [
            "A. $4$ cm²",
            "B. $60$ cm²",
            "C. $156$ cm²",
            "D. $36$ cm²"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính toàn phần và phần trong.\n$S_{ngoài}=12\\cdot8=96$ cm²; $S_{trong}=10\\cdot6=60$ cm².\nBước 2: Lấy hiệu diện tích.\nPhần viền và phần trắng ghép vừa hình ngoài, không chồng lên nhau. Diện tích viền là $96-60=36$ cm². Chọn D."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-10",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "So hai tam giác cùng đáy",
          "prompt": "Hai tam giác I, II cùng có đáy $10$ cm; chiều cao tương ứng $6$ cm và $9$ cm. Diện tích hình II lớn hơn hình I bao nhiêu cm²?",
          "svg": svgCap2.svgGrade6GeometryExtension("triangle-difference"),
          "options": [
            "A. $15$",
            "B. $30$",
            "C. $3$",
            "D. $45$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Tính diện tích mỗi tam giác.\n$S_I=10\\cdot6:2=30$ cm²; $S_{II}=10\\cdot9:2=45$ cm².\nBước 2: Tính phần hơn.\n$45-30=15$ cm². Chiều cao tăng $3$ cm nhưng phần diện tích tăng phải tính theo nửa tích với đáy. Chọn A."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-11",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Tìm chiều rộng từ dải thêm",
          "prompt": "Một hình chữ nhật dài $10$ cm. Tăng chiều dài thêm $3$ cm, giữ nguyên chiều rộng thì diện tích tăng $18$ cm². Diện tích hình ban đầu là bao nhiêu?",
          "svg": svgCap2.svgGrade6GeometryExtension("added-strip"),
          "options": [
            "A. $78$ cm²",
            "B. $60$ cm²",
            "C. $18$ cm²",
            "D. $180$ cm²"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xét dải tăng thêm.\nDải mới là hình chữ nhật có chiều dài $3$ cm và chiều rộng bằng chiều rộng cũ.\nBước 2: Tìm chiều rộng và diện tích cũ.\nChiều rộng là $18:3=6$ cm. Diện tích ban đầu bằng $10\\cdot6=60$ cm². Chọn B."
        },
        {
          "id": "l6-chu-vi-dien-tich-nang-cao-12",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Cạnh chung không thuộc đường bao ngoài",
          "prompt": "Ghép hai tấm chữ nhật $8$ cm × $3$ cm và $5$ cm × $3$ cm như hình. Chúng chỉ chung một đoạn cạnh, không chồng diện tích. Chu vi ngoài của toàn hình là $34$ cm. Đoạn cạnh chung dài bao nhiêu?",
          "svg": svgCap2.svgGrade6GeometryExtension("shared-edge"),
          "options": [
            "A. $4$ cm",
            "B. $1$ cm",
            "C. $2$ cm",
            "D. $3$ cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Cộng chu vi khi còn tách rời.\nHai chu vi là $2(8+3)=22$ cm và $2(5+3)=16$ cm; tổng $38$ cm.\nBước 2: Xác định phần đã tính thừa.\nĐoạn chung được tính một lần ở mỗi tấm, nhưng không thuộc đường bao ngoài sau ghép. Tổng cũ thừa hai lần độ dài đoạn chung.\nBước 3: Tính và kiểm khả năng ghép.\nĐộ dài đoạn chung bằng $(38-34):2=2$ cm. Nó nhỏ hơn cạnh $3$ cm nên ghép lệch như hình thực hiện được. Chọn C."
        }
      ],
      "hsg": [
        {
          "id": "l6-chu-vi-dien-tich-hsg-01",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tính diện tích phần chữ L",
          "prompt": "Từ tấm bìa chữ nhật $10$ cm × $8$ cm, cắt bỏ hình chữ nhật $4$ cm × $3$ cm ở góc trên phải. Tính diện tích phần chữ L còn lại theo cm².",
          "svg": svgCap2.svgGrade6Areas(11),
          "correctAnswer": "68",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tấm bìa ban đầu có diện tích $10\\cdot8=80$ cm².\nBước 2: Phần cắt nằm trọn trong tấm bìa, diện tích $4\\cdot3=12$ cm².\nBước 3: Còn $80-12=68$ cm²."
        },
        {
          "id": "l6-chu-vi-dien-tich-hsg-02",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de",
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tìm diện tích lớn nhất với cạnh nguyên",
          "prompt": "Một hình chữ nhật có chu vi $22$ cm, hai cạnh là số nguyên dương tính theo xăng-ti-mét. Diện tích lớn nhất có thể là bao nhiêu cm²?",
          "svg": "",
          "correctAnswer": "30",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tổng hai cạnh kề là $22:2=11$ cm.\nBước 2: Không kể đổi chiều, các cặp cạnh là $(1;10),(2;9),(3;8),(4;7),(5;6)$.\nBước 3: Diện tích tương ứng $10,18,24,28,30$ cm².\nBước 4: Đã xét đủ vì một cạnh không vượt $5$ khi gọi nó là cạnh ngắn hơn.\nBước 5: Lớn nhất $30$ cm², đạt với hình $5$ cm × $6$ cm."
        },
        {
          "id": "l6-chu-vi-dien-tich-hsg-03",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tính diện tích hình chữ thập",
          "prompt": "Hai dải chữ nhật $8$ cm × $3$ cm và $3$ cm × $7$ cm đặt chồng thành hình chữ thập. Phần chồng là hình vuông cạnh $3$ cm. Tính diện tích toàn hình theo cm², mỗi chỗ chỉ tính một lần.",
          "svg": svgCap2.svgGrade6Areas(13),
          "correctAnswer": "36",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Hai diện tích riêng là $24$ và $21$ cm².\nBước 2: Khi cộng, phần chồng diện tích $3\\cdot3=9$ cm² bị tính hai lần, trong khi chỉ cần một lần.\nBước 3: Diện tích toàn hình là $24+21-9=36$ cm².\nBước 4: Không trừ cả hai lần phần chồng vì phần ấy vẫn thuộc hình."
        },
        {
          "id": "l6-chu-vi-dien-tich-hsg-04",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giao-tiep-toan-hoc",
            "su-dung-cong-cu"
          ],
          "dang": "chungMinh",
          "title": "Giải thích công thức diện tích hình thang",
          "prompt": "Hai miếng bìa hình thang bằng nhau có hai đáy $a,b$ và chiều cao $h$, đều dương. Quay một miếng nửa vòng rồi ghép sát như hình. Giải thích vì sao diện tích một miếng là $\\frac{(a+b)h}{2}$.",
          "svg": svgCap2.svgGrade6Areas(14),
          "solution": "Bước 1: Miếng thứ hai sau khi quay có đáy nhỏ ở phía đáy lớn của miếng thứ nhất.\nBước 2: Ghép hai cạnh nghiêng trùng khít thì đường bao mới là hình bình hành.\nBước 3: Một đáy của hình ghép gồm một đoạn dài $a$ và một đoạn dài $b$, nên dài $a+b$; khoảng cách hai đáy vẫn là $h$.\nBước 4: Diện tích hình ghép là $(a+b)h$.\nBước 5: Hai miếng bằng nhau, không chồng lên nhau và không có khe hở, nên diện tích mỗi miếng bằng một nửa: $\\frac{(a+b)h}{2}$."
        },
        {
          "id": "l6-chu-vi-dien-tich-hsg-05",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giao-tiep-toan-hoc",
            "su-dung-cong-cu"
          ],
          "dang": "chungMinh",
          "title": "So sánh hai vị trí cắt ô vuông",
          "prompt": "Hai tấm bìa đều là hình chữ nhật $10$ cm × $6$ cm. Mỗi tấm cắt bỏ một ô vuông cạnh $2$ cm: tấm I cắt ở góc, tấm II cắt giữa cạnh dài như hình. Giải thích vì sao diện tích còn lại bằng nhau nhưng chu vi tấm II lớn hơn tấm I $4$ cm.",
          "svg": svgCap2.svgGrade6Areas(15),
          "solution": "Bước 1: Mỗi tấm mất đúng $2\\cdot2=4$ cm², nên cùng còn $10\\cdot6-4=56$ cm².\nBước 2: Ở tấm I, hai cạnh ngoài dài $2+2$ cm bị mất, thay bằng hai cạnh mới cũng dài $2+2$ cm; chu vi vẫn là $2(10+6)=32$ cm.\nBước 3: Ở tấm II, mất một đoạn ngoài dài $2$ cm, thêm ba cạnh của chỗ khoét dài $2+2+2=6$ cm, nên chu vi tăng $6-2=4$ cm, thành $36$ cm.\nBước 4: Chỗ khoét không chạm hai góc, nên ba cạnh mới đều nằm trên đường bao.\nBước 5: Do đó chênh lệch là $4$ cm."
        },
        {
          "id": "l6-chu-vi-dien-tich-hsg-06",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Ghép thêm mái tam giác",
          "prompt": "Một mảnh bìa gồm hình vuông cạnh $6$ cm và một tam giác ghép phía ngoài trên trọn một cạnh hình vuông như hình. Chiều cao tam giác ứng với cạnh chung là $4$ cm. Tính diện tích mảnh bìa theo cm².",
          "svg": svgCap2.svgGrade6GeometryExtension("house"),
          "correctAnswer": "48",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính phần vuông.\n$S_{vuông}=6\\cdot6=36$ cm².\nBước 2: Tính phần tam giác.\nĐáy tam giác là cạnh chung dài $6$ cm, nên diện tích bằng $6\\cdot4:2=12$ cm².\nBước 3: Cộng hai miền không chồng.\nHai phần chỉ chung cạnh, không chồng diện tích. Tổng diện tích là $36+12=48$ cm².\nBước 4: Kết luận.\nDiện tích mảnh bìa bằng $48$ cm²."
        },
        {
          "id": "l6-chu-vi-dien-tich-hsg-07",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Tìm chu vi ngoài từ diện tích viền",
          "prompt": "Một khung chữ nhật có viền đều rộng $1$ cm ở cả bốn phía. Hai cạnh ngoài đều lớn hơn $2$ cm. Diện tích phần viền là $32$ cm². Tính chu vi hình chữ nhật ngoài theo cm.",
          "svg": svgCap2.svgGrade6GeometryExtension("frame-inverse"),
          "correctAnswer": "36",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chia viền thành bốn dải không chồng.\nGọi hai cạnh ngoài là $a,b$ cm. Hai dải trên, dưới dài $a$, rộng $1$; tổng diện tích $2a$ cm².\nHai dải bên còn lại dài $b-2$, rộng $1$; tổng $2(b-2)$ cm². Bốn ô góc đã nằm trong hai dải ngang.\nBước 2: Dùng diện tích viền.\n$2a+2b-4=32$, nên $2(a+b)=36$. Đây chính là chu vi ngoài.\nBước 3: Kiểm có khung thỏa điều kiện.\nChẳng hạn cạnh ngoài $10$ cm và $8$ cm cho phần trong $8$ cm × $6$ cm; viền $80-48=32$ cm².\nBước 4: Kết luận.\nChu vi ngoài bằng $36$ cm."
        },
        {
          "id": "l6-chu-vi-dien-tich-hsg-08",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Thay đổi hai cạnh mà giữ diện tích",
          "prompt": "Hình chữ nhật có chu vi $26$ cm. Tăng chiều dài $2$ cm và giảm chiều rộng $1$ cm thì diện tích không đổi; chiều rộng ban đầu lớn hơn $1$ cm. Tính diện tích ban đầu theo cm².",
          "svg": svgCap2.svgGrade6GeometryExtension("changed-rectangle"),
          "correctAnswer": "40",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Dùng chu vi.\nGọi chiều dài, rộng ban đầu là $a,b$ cm. Ta có $a+b=13$.\nBước 2: So dải thêm và dải bớt.\nTrước tiên tăng chiều dài $2$ cm, thêm diện tích $2b$ cm². Sau đó giảm chiều rộng $1$ cm trên cả chiều dài mới $a+2$, bớt $a+2$ cm².\nDiện tích giữ nguyên nên $2b=a+2$, hay $a=2b-2$.\nBước 3: Tìm kích thước và thử.\n$2b-2+b=13$ cho $b=5$, $a=8$. Diện tích cũ $8\\cdot5=40$; diện tích mới $10\\cdot4=40$ cm². Chiều rộng mới dương.\nBước 4: Kết luận.\nDiện tích ban đầu bằng $40$ cm²."
        },
        {
          "id": "l6-chu-vi-dien-tich-hsg-09",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc",
            "su-dung-cong-cu"
          ],
          "dang": "chungMinh",
          "title": "Cắt ghép để hiểu diện tích bình hành",
          "prompt": "Hình bình hành có đáy $b$, chiều cao $h$. Chân đường cao từ đỉnh trên trái nằm trong cạnh đáy như hình I. Cắt mảnh tam giác tô vàng theo đường cao và chuyển sang phải như hình II. Giải thích vì sao thu được hình chữ nhật đáy $b$, cao $h$, rồi nêu công thức diện tích hình bình hành.",
          "svg": svgCap2.svgGrade6GeometryExtension("cut-parallelogram"),
          "solution": "Bước 1: Theo dõi mảnh được chuyển.\nMảnh vàng được trượt sang phải, không xoay và không thay kích thước. Cạnh xiên của nó ghép đúng vào cạnh xiên bên phải của phần còn lại vì hai cạnh bên bình hành có cùng hướng và độ dài.\nBước 2: Nhìn đường bao sau ghép.\nCạnh đứng của mảnh vàng thành cạnh phải. Cạnh cắt đứng là cạnh trái; cạnh trên và dưới đều nằm ngang theo hình.\nPhần cắt bớt ở bên trái được bù bằng đúng phần chuyển sang bên phải, nên chiều ngang vẫn là $b$, chiều cao vẫn là $h$.\nBước 3: Kết luận bằng bảo toàn diện tích.\nKhông có mảnh bị bỏ hoặc chồng diện tích. Hình chữ nhật mới có diện tích $b\\cdot h$, nên hình bình hành ban đầu cũng có diện tích $S=b\\cdot h$."
        },
        {
          "id": "l6-chu-vi-dien-tich-hsg-10",
          "lop": 6,
          "chuDe": "chu-vi-dien-tich",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc",
            "su-dung-cong-cu"
          ],
          "dang": "chungMinh",
          "title": "Đừng quên ô vuông ở góc",
          "prompt": "Tăng mỗi cạnh hình vuông thêm $2$ cm thì diện tích tăng $36$ cm². Dùng cách chia phần thêm thành hai dải và một ô góc như hình để tìm cạnh ban đầu. Giải thích vì sao không được chỉ tính hai dải dài bằng cạnh cũ.",
          "svg": svgCap2.svgGrade6GeometryExtension("square-enlarge"),
          "solution": "Bước 1: Chia phần thêm thành ba miền.\nGọi cạnh cũ là $a$ cm, $a>0$. Hai dải có kích thước $a$ cm × $2$ cm, tổng diện tích $4a$ cm².\nÔ vuông ở góc có cạnh $2$ cm, diện tích $4$ cm². Nó không nằm trong hai dải dài bằng cạnh cũ.\nBước 2: Tìm cạnh cũ.\nTổng phần thêm là $4a+4=36$, nên $4a=32$ và $a=8$ cm.\nBước 3: Thử và kết luận.\nCạnh mới là $10$ cm. Hiệu diện tích $10\\cdot10-8\\cdot8=100-64=36$ cm².\nCạnh ban đầu là $8$ cm. Chỉ tính hai dải sẽ bỏ sót ô góc $4$ cm² và cho kết quả sai."
        }
      ]
    },
    'thong-ke': {
      "kha": [
        {
          "id": "l6-thong-ke-kha-01",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn dữ liệu là số",
          "prompt": "Khi tìm hiểu việc đọc sách của các bạn, dữ liệu nào sau đây là số?",
          "svg": "",
          "options": [
            "A. Số quyển sách đã đọc",
            "B. Thể loại sách",
            "C. Màu bìa sách",
            "D. Tên sách yêu thích"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Số quyển sách đã đọc là một số đếm.\nBước 2: Màu bìa, tên sách và thể loại sách là dữ liệu phân loại."
        },
        {
          "id": "l6-thong-ke-kha-02",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Đọc biểu đồ tranh",
          "prompt": "Mỗi hình tròn đầy biểu diễn 4 chậu cây. Tổ B chăm sóc bao nhiêu chậu?",
          "svg": svgCap2.svgGrade6Statistics(2),
          "options": [
            "A. 16",
            "B. 2",
            "C. 8",
            "D. 12"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Hàng của tổ B có 2 hình tròn đầy, nên có $2\\cdot4=8$ chậu.\nBước 2: Không lấy số hình làm số chậu và không đọc nhầm sang hàng khác."
        },
        {
          "id": "l6-thong-ke-kha-03",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Đọc số cây của tổ",
          "prompt": "Theo biểu đồ, tổ B trồng được bao nhiêu cây?",
          "svg": svgCap2.svgGrade6Statistics(3),
          "options": [
            "A. 8",
            "B. 10",
            "C. 12",
            "D. 5"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Trục đứng tăng 2 cây mỗi khoảng chia.\nBước 2: Đỉnh cột B ở vạch 10, nên tổ B trồng 10 cây."
        },
        {
          "id": "l6-thong-ke-kha-04",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hỏi rõ khoảng thời gian",
          "prompt": "Muốn thu thập số ngày mỗi bạn đi bộ đến trường trong tuần học vừa qua, câu hỏi nào cho dữ liệu đúng mục tiêu?",
          "svg": "",
          "options": [
            "A. Bạn có thích đi bộ không?",
            "B. Trong tuần học vừa qua, có bao nhiêu ngày bạn đi bộ đến trường?",
            "C. Hôm nay bạn đi bộ hay đi xe?",
            "D. Bạn thường đi bộ bao nhiêu lần?"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định thông tin cần hỏi.\nCần một số ngày, gắn với đúng tuần học đã nêu, không phải sở thích hoặc thói quen chung.\nBước 2: Chọn câu hỏi đủ rõ.\nCâu hỏi ở B nêu cả việc đi bộ và tuần vừa qua. Các câu khác hỏi thích hay không, một ngày riêng lẻ hoặc không chỉ rõ thời gian. Chọn B."
        },
        {
          "id": "l6-thong-ke-kha-05",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Ô chưa trả lời không phải số không",
          "prompt": "Theo bảng, có thể khẳng định điều nào?",
          "svg": svgCap2.svgGrade6DataExtension("missing"),
          "options": [
            "A. Cả bốn bạn đọc tổng cộng đúng $3$ quyển.",
            "B. Chi chắc chắn không đọc quyển nào.",
            "C. An đọc $0$ quyển; chưa biết Chi đọc bao nhiêu.",
            "D. An và Chi đều chưa trả lời."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Phân biệt hai kiểu bản ghi.\nAn đã trả lời $0$: bạn ấy không đọc quyển nào trong tuần. Chi chưa trả lời nên chưa biết số sách của Chi.\nBước 2: Nêu kết luận đúng phạm vi.\nChỉ khẳng định An đọc $0$ quyển và chưa biết số của Chi. Không được tự điền $0$ vào ô thiếu. Chọn C."
        }
      ],
      "nangCao": [
        {
          "id": "l6-thong-ke-nang-cao-01",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tìm bản ghi cần kiểm tra",
          "prompt": "Bốn bạn ghi số quyển truyện mình đọc trong một tuần là 0; 3; −2; 5. Bản ghi nào chắc chắn cần kiểm tra lại?",
          "svg": "",
          "options": [
            "A. 5",
            "B. 0",
            "C. 3",
            "D. −2"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Số quyển truyện là số đếm không âm.\nBước 2: Có thể chưa đọc quyển nào nên 0 hợp lệ; −2 không hợp lệ."
        },
        {
          "id": "l6-thong-ke-nang-cao-02",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Tìm lớp tăng nhiều sách nhất",
          "prompt": "Biểu đồ cho biết số sách các lớp quyên góp trong hai đợt. Lớp nào tăng nhiều sách nhất từ đợt một sang đợt hai?",
          "svg": svgCap2.svgGrade6Statistics(5),
          "options": [
            "A. 6B",
            "B. 6C",
            "C. 6A và 6C tăng như nhau",
            "D. 6A"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Lớp 6A tăng $18-12=6$ quyển; 6B giảm $16-14=2$ quyển; 6C tăng $18-10=8$ quyển.\nBước 2: Vì $8>6$, lớp 6C tăng nhiều nhất.\nBước 3: Không chỉ so sánh số sách đợt hai."
        },
        {
          "id": "l6-thong-ke-nang-cao-03",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đếm các thời gian phù hợp",
          "prompt": "Thời gian đi học (phút) của 10 bạn là: 8; 12; 10; 9; 15; 10; 7; 11; 10; 14. Có bao nhiêu bạn đi học từ 10 phút đến dưới 13 phút?",
          "svg": "",
          "options": [
            "A. 5",
            "B. 6",
            "C. 3",
            "D. 4"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Giữ các bản ghi 12; 10; 10; 11; 10, được 5 bạn.\nBước 2: Các số 10 lặp lại thuộc các bạn khác nhau nên phải đếm đủ; 13 không thuộc khoảng đang hỏi."
        },
        {
          "id": "l6-thong-ke-nang-cao-04",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính tổng từ các hình tròn",
          "prompt": "Biểu đồ cho biết số quyển truyện của ba tổ. Một hình tròn đầy ứng với 4 quyển, nửa hình ứng với 2 quyển. Cả ba tổ có bao nhiêu quyển?",
          "svg": svgCap2.svgGrade6Statistics(7),
          "options": [
            "A. 28",
            "B. 18",
            "C. 20",
            "D. 24"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tổ A có $2\\cdot4+2=10$ quyển; B có $4+2=6$ quyển; C có $2\\cdot4=8$ quyển.\nBước 2: Tổng là $10+6+8=24$ quyển.\nBước 3: Hai nửa hình chỉ bằng một hình đầy."
        },
        {
          "id": "l6-thong-ke-nang-cao-05",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hoàn thành bảng môn thể thao",
          "prompt": "Cả 32 bạn đều trả lời, mỗi bạn chọn đúng một trong ba môn ở bảng. Có bao nhiêu bạn chọn bơi?",
          "svg": svgCap2.svgGrade6Statistics(8),
          "options": [
            "A. 21",
            "B. 9",
            "C. 11",
            "D. 20"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Hai môn đã biết có $12+9=21$ bạn.\nBước 2: Số bạn chọn bơi là $32-21=11$.\nBước 3: Mỗi bạn được tính đúng một lần nên dùng được tổng 32."
        },
        {
          "id": "l6-thong-ke-nang-cao-06",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Lập dòng số liệu từ cột kép",
          "prompt": "Lập lại bảng từ biểu đồ. Dòng nào ghi đúng lớp 6B theo thứ tự: số nam; số nữ; tổng số bạn?",
          "svg": svgCap2.svgGrade6Statistics(9),
          "options": [
            "A. 12; 8; 20",
            "B. 8; 12; 20",
            "C. 12; 8; 24",
            "D. 12; 20; 32"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Theo chú giải, cột xanh là nam, cột cam là nữ.\nBước 2: Lớp 6B có 12 nam và 8 nữ; tổng $12+8=20$.\nBước 3: Phải giữ đúng thứ tự hai nhóm và tính tổng trong cùng lớp."
        },
        {
          "id": "l6-thong-ke-nang-cao-07",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Sửa bảng rồi so sánh",
          "prompt": "Mỗi bạn chọn đúng một nhóm A, B hoặc C. Bảng ban đầu có một bạn nhóm A bị ghi hai lần; ngoài lỗi đó, một bạn thuộc C bị ghi nhầm sang B. Sau khi sửa đủ hai lỗi, nhóm nào có nhiều bạn nhất?",
          "svg": svgCap2.svgGrade6Statistics(10),
          "options": [
            "A. Chỉ C",
            "B. A và C",
            "C. B và C",
            "D. Chỉ A"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Bỏ một bản ghi trùng ở A: A còn 4.\nBước 2: Chuyển bản ghi nhầm từ B sang C: B còn 3, C thành 4.\nBước 3: Bảng đúng là A: 4; B: 3; C: 4, nên A và C cùng nhiều nhất.\nBước 4: Tổng giảm đúng một vì chỉ lỗi ghi trùng làm thừa người."
        },
        {
          "id": "l6-thong-ke-nang-cao-08",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đọc phiếu kiểm đếm",
          "prompt": "Mỗi nhóm năm dấu trong bảng biểu diễn $5$ bạn, mỗi dấu lẻ biểu diễn $1$ bạn. Dãy số bạn của A, B, C lần lượt là gì?",
          "svg": svgCap2.svgGrade6DataExtension("tally"),
          "options": [
            "A. $7;5;11$",
            "B. $3;1;3$",
            "C. $6;4;9$",
            "D. $11;5;7$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đọc các nhóm năm và dấu lẻ.\nA có một nhóm năm và hai dấu: $5+2=7$. B có một nhóm năm: $5$.\nBước 2: Đọc nhóm còn lại và giữ thứ tự.\nC có hai nhóm năm và một dấu: $10+1=11$. Dãy A, B, C là $7;5;11$. Chọn A."
        },
        {
          "id": "l6-thong-ke-nang-cao-09",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Biểu đồ phải khớp toàn bộ bảng",
          "prompt": "Bảng gốc ghi số bạn của ba nhóm: A có $7$, B có $3$, C có $5$. Biểu đồ nào khớp đủ cả ba nhóm?",
          "svg": svgCap2.svgGrade6DataExtension("choose-chart"),
          "options": [
            "A. Hình I.",
            "B. Hình II.",
            "C. Hình III.",
            "D. Hình IV."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đối chiếu lần lượt, không chỉ cột cao nhất.\nBiểu đồ đúng phải có A cao tới $7$, B tới $3$, C tới $5$, theo đúng nhãn dưới từng cột.\nBước 2: Kiểm bốn phương án.\nI đổi chỗ số của B và C. II đổi A và B. IV đổi A và C. Chỉ III khớp cả ba giá trị. Chọn C."
        },
        {
          "id": "l6-thong-ke-nang-cao-10",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Thứ tự nhóm trên biểu đồ đã đổi",
          "prompt": "Hai biểu đồ cho số sách quyên góp. Từ đợt một sang đợt hai, số truyện của tổ A tăng bao nhiêu quyển? Chú ý vị trí A, B đã đổi ở đợt hai.",
          "svg": svgCap2.svgGrade6DataExtension("reversed-groups"),
          "options": [
            "A. $1$",
            "B. $4$",
            "C. $6$",
            "D. $3$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Chọn đúng màu và tổ.\nTruyện là cột xanh. Tổ A ở bên trái đợt một nhưng bên phải đợt hai.\nBước 2: Đọc và lấy hiệu cùng loại sách.\nTổ A có $8$ quyển truyện ở đợt một, $11$ ở đợt hai. Tăng $11-8=3$ quyển. Chọn D."
        },
        {
          "id": "l6-thong-ke-nang-cao-11",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đọc đúng chiều đi của sách",
          "prompt": "Theo bảng, cuối thứ Hai tủ còn bao nhiêu quyển sách? Không có sách mới, sách mất hay giao dịch nào khác.",
          "svg": svgCap2.svgGrade6DataExtension("loan"),
          "options": [
            "A. $15$",
            "B. $29$",
            "C. $7$",
            "D. $21$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định số làm giảm và số làm tăng.\nCho mượn $7$ quyển làm số trong tủ giảm. Được trả $4$ quyển làm số trong tủ tăng.\nBước 2: Tính số còn lại.\n$18-7+4=15$ quyển. Không cộng cả hai cột giao dịch hoặc trừ cả hai. Chọn A."
        },
        {
          "id": "l6-thong-ke-nang-cao-12",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Nhóm dẫn đầu có chắc giữ vị trí?",
          "prompt": "Theo bảng, còn $4$ bạn chưa trả lời. Khi đủ câu trả lời, A có chắc chắn là nhóm có số bạn nhiều nhất một mình không?",
          "svg": svgCap2.svgGrade6DataExtension("leader"),
          "options": [
            "A. Chắc chắn A dẫn đầu vì hiện có $12$ bạn.",
            "B. Chưa chắc; B có thể lên $13$ bạn.",
            "C. Chắc chắn B sẽ dẫn đầu.",
            "D. Chắc chắn A và B bằng nhau."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Thử cách trả lời có thể đổi vị trí dẫn đầu.\nNếu cả $4$ bạn chọn B thì B có $9+4=13$, lớn hơn A có $12$. Vì vậy A không chắc chắn giữ đầu.\nBước 2: Kiểm cũng có cách A vẫn đứng đầu.\nNếu cả $4$ bạn chọn C thì C có $11$, B có $9$, A vẫn có $12$.\nBước 3: Kết luận.\nCả hai tình huống đều phù hợp đề, nên chưa thể chốt nhóm dẫn đầu duy nhất. Chọn B."
        },
        {
          "id": "l6-thong-ke-nang-cao-13",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Số lượt không luôn là số người",
          "prompt": "Thư viện ghi nhận $10$ bạn đến thứ Hai và $7$ bạn đến thứ Ba. Mỗi bạn chỉ được ghi một lần trong mỗi ngày, nhưng có thể đến cả hai ngày. Nhiều nhất có bao nhiêu bạn khác nhau đã đến?",
          "svg": "",
          "options": [
            "A. $10$",
            "B. $7$",
            "C. $17$",
            "D. $3$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tìm giới hạn trên.\nGộp hai danh sách có $10+7=17$ lượt tên. Nếu có tên trùng giữa hai ngày, số bạn khác nhau sẽ giảm.\nBước 2: Chỉ ra cách đạt giới hạn.\nNếu $7$ bạn thứ Ba đều khác $10$ bạn thứ Hai, có đúng $17$ người. Điều này được phép theo đề. Vậy nhiều nhất là $17$. Chọn C."
        }
      ],
      "hsg": [
        {
          "id": "l6-thong-ke-hsg-01",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tìm giá trị một khoảng chia",
          "prompt": "Biểu đồ mất các số trên trục đứng, chỉ còn số 0. Mỗi khoảng chia đều biểu diễn cùng một số quyển vở. Ba tổ góp tổng cộng 40 quyển. Một khoảng chia ứng với bao nhiêu quyển?",
          "svg": svgCap2.svgGrade6Statistics(11),
          "correctAnswer": "4",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Các cột A, B, C lần lượt cao 2, 3, 5 khoảng chia.\nBước 2: Tổng là $2+3+5=10$ khoảng, ứng với 40 quyển.\nBước 3: Vì vậy một khoảng ứng với $40:10=4$ quyển."
        },
        {
          "id": "l6-thong-ke-hsg-02",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm số bạn nữ đi xe đạp",
          "prompt": "Bảng ghi cách đi học của 30 bạn. Mỗi bạn dùng đúng một cách trong ba cách đã nêu. Có bao nhiêu bạn nữ đi xe đạp?",
          "svg": svgCap2.svgGrade6Statistics(12),
          "correctAnswer": "2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Số nam đi xe buýt là $16-6-8=2$.\nBước 2: Có 5 bạn đi xe buýt nên số nữ đi xe buýt là $5-2=3$.\nBước 3: Số nữ đi xe đạp là $14-9-3=2$.\nBước 4: Kiểm tra: xe đạp có $8+2=10$ bạn và $15+10+5=30$."
        },
        {
          "id": "l6-thong-ke-hsg-03",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm số bạn chỉ thích một loại",
          "prompt": "Hỏi đủ 24 bạn về hai loại sách: 15 bạn thích truyện tranh, 13 bạn thích thơ, 4 bạn không thích loại nào. Một bạn có thể thích cả hai. Có bao nhiêu bạn chỉ thích đúng một trong hai loại?",
          "svg": "",
          "correctAnswer": "12",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Có $24-4=20$ bạn thích ít nhất một loại.\nBước 2: Tổng $15+13=28$ đã đếm những bạn thích cả hai hai lần; số bạn ấy là $28-20=8$.\nBước 3: Số bạn chỉ thích đúng một loại là $20-8=12$ (gồm 7 bạn chỉ thích truyện tranh và 5 bạn chỉ thích thơ)."
        },
        {
          "id": "l6-thong-ke-hsg-04",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Sửa các nhóm trùng đầu mút",
          "prompt": "Các bạn đọc từ 0 đến 15 quyển sách (số nguyên). Bảng tạm chia nhóm: 0–5 có 12 bạn; 5–10 có 15 bạn; 10–15 có 10 bạn, đều tính cả hai đầu mút. Có 3 bạn đọc 5 quyển, 2 bạn đọc 10 quyển. Ngoài ranh giới trùng, bảng không có lỗi khác. Giải thích cách sửa để mỗi bạn chỉ được đếm một lần và tìm số bạn thực tế.",
          "svg": "",
          "solution": "Bước 1: Ba bạn đọc 5 quyển bị đếm ở cả nhóm một và nhóm hai; hai bạn đọc 10 quyển bị đếm ở cả nhóm hai và nhóm ba.\nBước 2: Mỗi bạn ấy thừa một lượt đếm.\nBước 3: Có thể sửa thành: từ 0 đến dưới 5 có $12-3=9$ bạn; từ 5 đến dưới 10 có $15-2=13$ bạn; từ 10 đến 15, kể cả 15, vẫn có 10 bạn.\nBước 4: Các nhóm mới không trùng và vẫn phủ hết các số nguyên từ 0 đến 15.\nBước 5: Số bạn thực tế là $9+13+10=32$, cũng bằng $12+15+10-3-2=32$."
        },
        {
          "id": "l6-thong-ke-hsg-05",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Vì sao không được đổi thang riêng một cột",
          "prompt": "Một biểu đồ cột dùng chung gốc 0 và mỗi khoảng cao 1 cm biểu diễn 2 bạn. Giải thích: nếu nhóm A nhiều hơn nhóm B 6 bạn thì cột A cao hơn cột B 3 cm. Nếu đổi sang 1 cm biểu diễn 4 bạn, vì sao phải vẽ lại tất cả các cột theo cùng thang mới?",
          "svg": "",
          "solution": "Bước 1: Cứ 2 bạn ứng với 1 cm nên phần hơn 6 bạn ứng với $6:2=3$ cm.\nBước 2: Cùng gốc 0 giúp chênh lệch chiều cao biểu diễn đúng chênh lệch số bạn.\nBước 3: Với thang mới, số bạn không đổi nhưng mỗi cột phải cao bằng một nửa chiều cao cũ, vì mỗi xentimét nay biểu diễn gấp đôi số bạn.\nBước 4: Phần chênh cũng giảm từ 3 cm xuống 1,5 cm.\nBước 5: Nếu chỉ đổi một cột, các cột dùng các đơn vị khác nhau, nên không thể so số bạn bằng cách so chiều cao của chúng."
        },
        {
          "id": "l6-thong-ke-hsg-06",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Tổng sách không phải tổng số bạn",
          "prompt": "Bảng cho số sách mỗi bạn đọc và số bạn tương ứng. Tất cả các bạn đã đọc tổng cộng bao nhiêu quyển?",
          "svg": svgCap2.svgGrade6DataExtension("weighted-books"),
          "correctAnswer": "20",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính đóng góp của từng nhóm.\nNhóm đọc $0$ quyển đóng góp $0\\cdot3=0$; nhóm đọc $1$ quyển đóng góp $1\\cdot4=4$.\nBước 2: Tính hai nhóm còn lại và cộng.\nNhóm đọc $2$ quyển góp $2\\cdot5=10$; nhóm đọc $3$ quyển góp $3\\cdot2=6$. Tổng $0+4+10+6=20$.\nBước 3: Kết luận.\nTất cả đã đọc $20$ quyển sách."
        },
        {
          "id": "l6-thong-ke-hsg-07",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Khôi phục nhãn bị mất thứ tự",
          "prompt": "Ba cột X, Y, Z biểu diễn số bạn đọc $0$, $1$, $2$ quyển sách, mỗi cột ứng với một số khác nhau nhưng các nhãn đã mất thứ tự. Có tất cả $16$ quyển được đọc. Số bạn đọc $0$ quyển có thể nhận những giá trị khác nhau. Tính tổng các giá trị đó.",
          "svg": svgCap2.svgGrade6DataExtension("lost-labels"),
          "correctAnswer": "14",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đọc số bạn trong mỗi cột.\nBa cột có $4$, $6$, $8$ bạn. Cần ghép ba số sách $0,1,2$ cho đúng tổng $16$.\nBước 2: Loại nhóm đọc hai quyển không phù hợp.\nNếu nhóm $8$ bạn đọc hai quyển, riêng nhóm này đã đọc $16$, trong khi nhóm đọc một quyển vẫn góp thêm, nên không được.\nNếu nhóm $6$ bạn đọc hai quyển, còn thiếu $4$ quyển, nên nhóm đọc một quyển phải có $4$ bạn; khi đó nhóm $8$ đọc không quyển. Tổng là $12+4=16$.\nBước 3: Kiểm một khả năng nữa.\nNếu nhóm $4$ bạn đọc hai quyển, còn thiếu $8$ quyển; nhóm $8$ đọc một quyển và nhóm $6$ đọc không quyển. Tổng cũng là $8+8=16$.\nBước 4: Kết luận.\nHai giá trị có thể là $6$ và $8$; tổng các giá trị bằng $14$."
        },
        {
          "id": "l6-thong-ke-hsg-08",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Ít lượt đổi nhất để nhóm D dẫn đầu",
          "prompt": "Theo bảng, một số bạn ở A, B hoặc C được đổi sang D, mỗi bạn đổi một lần. Ít nhất cần bao nhiêu bạn đổi để D nhiều hơn từng nhóm còn lại?",
          "svg": svgCap2.svgGrade6DataExtension("change-votes"),
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Loại không đổi hoặc một lượt đổi.\nD đang có $4$ bạn. Sau một lượt chỉ có $5$, còn A vẫn ít nhất $6$, nên chưa đủ.\nBước 2: Kiểm hai lượt đổi.\nKhi đó D có $6$. Muốn D đứng đầu một mình, A và B đều phải còn nhiều nhất $5$. A cần ít nhất $2$ bạn rời đi, B cần ít nhất $1$: tổng ít nhất $3$ lượt, vượt quá hai.\nBước 3: Chỉ ra cách với ba lượt.\nChuyển $1$ bạn từ A và $2$ bạn từ B sang D. Bốn nhóm thành $6,4,5,7$; D lớn hơn từng nhóm khác.\nBước 4: Kết luận.\nCần ít nhất $3$ bạn đổi nhóm."
        },
        {
          "id": "l6-thong-ke-hsg-09",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Tổng chung không nói thay từng người",
          "prompt": "Bốn bạn đọc tổng cộng $12$ quyển sách. Minh kết luận: “Mỗi bạn đều đọc ít nhất $3$ quyển”. Hãy nêu hai bộ số liệu cùng tổng $12$: một bộ làm kết luận đúng, một bộ làm kết luận sai. Giải thích vì sao chỉ biết tổng là chưa đủ.",
          "svg": "",
          "solution": "Bước 1: Dựng bộ số liệu làm kết luận đúng.\nBốn số $3,3,3,3$ có tổng $12$, mỗi số đều ít nhất $3$.\nBước 2: Dựng bộ số liệu làm kết luận sai.\nBốn số $0,0,6,6$ cũng có tổng $12$, nhưng hai bạn đọc $0$ quyển, nhỏ hơn $3$. Số sách đọc có thể bằng không.\nBước 3: Giải thích thông tin bị mất.\nKhi chỉ cộng thành tổng, ta không còn biết sách được phân bố giữa từng bạn như thế nào. Hai bộ dữ liệu khác nhau cùng cho số tổng đã nêu.\nBước 4: Kết luận.\nKhông thể khẳng định mỗi bạn đọc ít nhất $3$ quyển chỉ từ tổng $12$. Cần dữ liệu riêng từng bạn."
        },
        {
          "id": "l6-thong-ke-hsg-10",
          "lop": 6,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chọn đơn vị cho biểu đồ tranh nguyên hình",
          "prompt": "Ba nhóm có $6$, $10$, $14$ quyển sách. Muốn vẽ biểu đồ tranh bằng các hình giống nhau; mỗi hình ứng với cùng một số nguyên dương quyển sách, không dùng nửa hình. Tìm số quyển lớn nhất mà mỗi hình có thể biểu diễn và giải thích vì sao.",
          "svg": "",
          "solution": "Bước 1: Chuyển yêu cầu nguyên hình thành điều kiện.\nMỗi số liệu $6,10,14$ chia cho số quyển ứng với một hình phải được số nguyên. Vì vậy đơn vị ấy phải là ước chung của ba số.\nBước 2: Tìm đơn vị lớn nhất.\nCác ước chung của $6$ và $10$ chỉ có $1,2$; $14$ chia hết cho cả $1$ và $2$. Vì vậy lớn nhất là $2$.\nBước 3: Kiểm cách biểu diễn.\nChọn một hình ứng với $2$ quyển. Ba nhóm cần $3,5,7$ hình, đều nguyên và khớp số liệu.\nBước 4: Kết luận.\nMỗi hình biểu diễn nhiều nhất $2$ quyển. Chọn số lớn hơn sẽ buộc ít nhất một nhóm dùng phần hình, trái yêu cầu."
        }
      ]
    },
    'xac-suat-mo-hinh': {
      "kha": [
        {
          "id": "l6-xac-suat-mo-hinh-kha-01",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Gọi tên các kết quả của đồng xu",
          "prompt": "Tung một đồng xu, chỉ ghi mặt ngửa hay mặt sấp khi xu nằm yên trên mặt bàn; không xét trường hợp xu dựng cạnh. Danh sách kết quả nào đầy đủ?",
          "svg": "",
          "options": [
            "A. Chỉ sấp",
            "B. Ngửa, sấp, dựng cạnh",
            "C. Chỉ ngửa",
            "D. Ngửa, sấp"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Theo mô hình đã nêu, xu nằm yên với mặt ngửa hoặc mặt sấp.\nBước 2: Cả hai đều là kết quả có thể; trường hợp dựng cạnh đã được loại khỏi mô hình."
        },
        {
          "id": "l6-xac-suat-mo-hinh-kha-02",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận ra điều không thể",
          "prompt": "Lấy một viên bi từ túi có đúng các viên trong hình và ghi màu. Điều nào không thể xảy ra?",
          "svg": svgCap2.svgGrade6Models(2),
          "options": [
            "A. Lấy được bi vàng",
            "B. Lấy được bi đỏ hoặc xanh",
            "C. Lấy được bi đỏ",
            "D. Lấy được bi xanh"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Túi chỉ có bi đỏ và bi xanh, không có bi vàng.\nBước 2: Vì vậy lấy được bi vàng là không thể; đỏ hoặc xanh đều có thể và lấy được một trong hai màu ấy là chắc chắn."
        },
        {
          "id": "l6-xac-suat-mo-hinh-kha-03",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận ra điều chắc chắn",
          "prompt": "Hộp có bốn thẻ ghi 1, 2, 3, 4. Lấy một thẻ. Điều nào chắc chắn xảy ra?",
          "svg": "",
          "options": [
            "A. Số lấy được lớn hơn 2",
            "B. Số lấy được bằng 1",
            "C. Số lấy được nhỏ hơn 5",
            "D. Số lấy được là số chẵn"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Cả bốn số 1, 2, 3, 4 đều nhỏ hơn 5.\nBước 2: Các điều kiện còn lại chỉ đúng với một số thẻ, nên có thể xảy ra nhưng không chắc chắn."
        },
        {
          "id": "l6-xac-suat-mo-hinh-kha-04",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Kết quả hợp lệ của vòng quay",
          "prompt": "Vòng quay có bốn ô A, B, C, D. Quy ước: nếu kim dừng đúng vạch phân cách thì quay lại và chưa ghi kết quả. Kim đang dừng trên vạch giữa A và B. Cần làm gì?",
          "svg": svgCap2.svgGrade6DataExtension("spinner"),
          "options": [
            "A. Ghi A vì đứng trước B.",
            "B. Ghi cả A và B.",
            "C. Ghi thêm kết quả “vạch”.",
            "D. Quay lại, chưa ghi kết quả."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Áp dụng quy ước của phép thử.\nDừng trên vạch chưa phải kết quả hợp lệ. Không được tự chọn ô kề hoặc ghi thêm một kết quả mới.\nBước 2: Kết luận.\nQuay lại, chưa ghi chữ nào cho lần dừng trên vạch. Chọn D."
        },
        {
          "id": "l6-xac-suat-mo-hinh-kha-05",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Ghi đồng thời màu và hình",
          "prompt": "Lấy một trong ba thẻ trên hình và ghi cả màu lẫn hình dạng. Kết quả nào không thể xảy ra?",
          "svg": svgCap2.svgGrade6DataExtension("shapes"),
          "options": [
            "A. Đỏ–tròn.",
            "B. Đỏ–vuông.",
            "C. Xanh–tròn.",
            "D. Xanh–vuông."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Liệt kê cặp đặc điểm thực có.\nCó đỏ–tròn, xanh–tròn và xanh–vuông.\nBước 2: Kiểm cặp không có thẻ tương ứng.\nCó màu đỏ và cũng có hình vuông trong hộp, nhưng không có thẻ nào vừa đỏ vừa vuông. Chọn B."
        }
      ],
      "nangCao": [
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-01",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ghi đủ hai lần tung",
          "prompt": "Tung một đồng xu hai lần. Viết N cho ngửa, S cho sấp, theo thứ tự lần một rồi lần hai. Danh sách nào đủ các kết quả có thể?",
          "svg": "",
          "options": [
            "A. NN, NS, SS",
            "B. NN, NS, SN, SS",
            "C. N, S",
            "D. NS, SN"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Lần đầu N thì lần sau có thể N hoặc S, cho NN, NS.\nBước 2: Lần đầu S thì cho SN, SS.\nBước 3: NS và SN khác thứ tự nên là hai kết quả khác nhau."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-02",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn các thẻ phù hợp",
          "prompt": "Một hộp có các thẻ ghi từ 1 đến 8, mỗi số một thẻ. Lấy một thẻ. Những số nào vừa chẵn vừa lớn hơn 3?",
          "svg": "",
          "options": [
            "A. 3, 5, 7",
            "B. 2, 4, 6, 8",
            "C. 4, 5, 6, 7, 8",
            "D. 4, 6, 8"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Các số chẵn là 2, 4, 6, 8; loại 2 vì không lớn hơn 3.\nBước 2: Các kết quả thuận lợi còn lại là 4, 6, 8.\nBước 3: Phải thoả đồng thời cả hai điều kiện."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-03",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai viên cùng màu có tạo màu mới không",
          "prompt": "Túi có hai viên bi đỏ và một viên bi xanh như hình. Lấy một viên, chỉ ghi màu. Danh sách các kết quả khác nhau là gì?",
          "svg": svgCap2.svgGrade6Models(6),
          "options": [
            "A. Đỏ, xanh, đồng thời cả đỏ và xanh",
            "B. Đỏ",
            "C. Đỏ, xanh",
            "D. Đỏ thứ nhất, đỏ thứ hai, xanh"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chỉ ghi màu nên lấy viên đỏ nào cũng ghi cùng một kết quả “đỏ”.\nBước 2: Hai màu có thể ghi là đỏ và xanh.\nBước 3: Số viên bi không phải số màu khác nhau."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-04",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ghi các tổng có thể nhận",
          "prompt": "Lấy một thẻ từ mỗi hộp trong hình rồi ghi tổng hai số. Mọi cặp thẻ từ hai hộp đều có thể được lấy. Danh sách các tổng khác nhau là gì?",
          "svg": svgCap2.svgGrade6Models(7),
          "options": [
            "A. 3, 4, 5, 6, 7",
            "B. 3, 5, 7",
            "C. 3, 4, 5, 6, 7, 8",
            "D. 3, 4, 5, 6"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Với thẻ 1 ở A, tổng là 3 hoặc 5; với thẻ 2, tổng là 4 hoặc 6; với thẻ 3, tổng là 5 hoặc 7.\nBước 2: Ghi mỗi giá trị một lần được 3, 4, 5, 6, 7.\nBước 3: Tổng 5 có hai cách tạo nhưng vẫn chỉ là một giá trị."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-05",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Có thể lấy lại thẻ số hai không",
          "prompt": "Hộp có đúng ba thẻ ghi 1, 2, 3. Lần đầu lấy được thẻ 2. Muốn lần hai có thể lại lấy được số 2 thì phải làm gì trước lần hai?",
          "svg": "",
          "options": [
            "A. Bỏ thêm thẻ 1 ra ngoài",
            "B. Trả thẻ 2 vào hộp",
            "C. Giữ thẻ 2 ở ngoài hộp",
            "D. Chỉ đổi chỗ hai thẻ còn lại"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Mỗi số chỉ có một thẻ.\nBước 2: Nếu thẻ 2 còn ở ngoài, hộp không còn số 2 nên lần hai không thể lấy được nó.\nBước 3: Trả thẻ 2 vào hộp làm số 2 trở thành kết quả có thể, nhưng không làm nó chắc chắn được lấy."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-06",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Loại cặp không phù hợp thông tin",
          "prompt": "Hộp A có các thẻ 1, 2, 3; hộp B có các thẻ 2, 3. Lấy một thẻ mỗi hộp và biết tổng hai số là số lẻ. Cặp nào không phù hợp? Viết số của A trước, số của B sau.",
          "svg": "",
          "options": [
            "A. (3; 2)",
            "B. (1; 2)",
            "C. (2; 3)",
            "D. (1; 3)"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Các tổng tương ứng là 3, 5, 4, 5.\nBước 2: Cặp (1; 3) cho tổng 4 chẵn nên không phù hợp thông tin.\nBước 3: Ba cặp còn lại đều cho tổng lẻ."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-07",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Liệt kê chuỗi không có hai Đ liền nhau",
          "prompt": "Một túi có thẻ đỏ và thẻ xanh. Lấy ba lần, lần nào cũng trả thẻ vào túi; ghi Đ hoặc X theo thứ tự. Chỉ giữ chuỗi không có hai Đ liền nhau. Danh sách nào đầy đủ?",
          "svg": "",
          "options": [
            "A. XXX, XXĐ, XĐX, ĐXX, ĐXĐ, ĐĐX",
            "B. XXX, XXĐ, XĐX, ĐXX",
            "C. XXX, XXĐ, XĐX, ĐXX, ĐXĐ",
            "D. XXX, XXĐ, XĐX, ĐXX, XĐĐ"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tám chuỗi có thể là XXX, XXĐ, XĐX, XĐĐ, ĐXX, ĐXĐ, ĐĐX, ĐĐĐ.\nBước 2: Loại XĐĐ, ĐĐX, ĐĐĐ vì có hai Đ liền nhau.\nBước 3: Còn đúng XXX, XXĐ, XĐX, ĐXX, ĐXĐ.\nBước 4: Chuỗi ĐXĐ vẫn hợp lệ vì hai Đ không liền nhau."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-08",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Làm cho một màu không còn có thể xuất hiện",
          "prompt": "Túi có $2$ thẻ xanh, $1$ thẻ đỏ và $1$ thẻ vàng. Muốn sau khi bớt thẻ, lấy một thẻ không thể được màu xanh, cần bỏ thẻ nào?",
          "svg": "",
          "options": [
            "A. Bỏ cả hai thẻ xanh.",
            "B. Bỏ một thẻ xanh.",
            "C. Bỏ thẻ đỏ và thẻ vàng.",
            "D. Không cần bỏ thẻ nào."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xét điều kiện màu xanh còn có thể xuất hiện.\nChỉ cần còn một thẻ xanh trong túi thì vẫn có thể lấy được xanh.\nBước 2: Loại đủ thẻ mang màu đó.\nPhải bỏ cả hai thẻ xanh. Hai thẻ đỏ, vàng còn lại giữ túi không rỗng để vẫn lấy được một thẻ. Chọn A."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-09",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Dừng ngay khi lấy được đỏ",
          "prompt": "Túi có thẻ đỏ và xanh. Mỗi lần lấy đều trả thẻ vào túi trước lần sau. Dừng ngay khi lấy được đỏ, hoặc sau lần thứ ba nếu chưa có đỏ. Ghi Đ, X theo thứ tự. Danh sách nào đầy đủ?",
          "svg": "",
          "options": [
            "A. Đ, X.",
            "B. ĐĐĐ, ĐĐX, ĐXĐ, ĐXX, XĐĐ, XĐX, XXĐ, XXX.",
            "C. Đ, XĐ, XXĐ, XXX.",
            "D. Đ, XĐ, XXĐ."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xét các thời điểm dừng vì đỏ.\nĐỏ ở lần một cho Đ. Lần một xanh, lần hai đỏ cho XĐ. Hai lần xanh rồi đỏ cho XXĐ.\nBước 2: Xét hết ba lần vẫn không đỏ.\nChuỗi XXX được ghi và dừng do đủ ba lần. Không ghi tiếp sau chữ Đ đầu tiên.\nBước 3: Kết luận.\nDanh sách là Đ, XĐ, XXĐ, XXX. Chọn C."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-10",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Điểm cuối cho biết được điều gì?",
          "prompt": "Một quân đi từ S theo mũi tên, qua A hoặc B rồi dừng tại C, D hoặc E. Mỗi đường trên sơ đồ đều có thể được chọn. Nếu quân dừng ở C, nhận xét nào chắc chắn đúng?",
          "svg": svgCap2.svgGrade6DataExtension("routes"),
          "options": [
            "A. Đã đi qua B.",
            "B. Đã đi qua cả A và B.",
            "C. Có thể đến C mà không qua A hoặc B.",
            "D. Đã đi qua A."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Lần ngược đường đi vào C.\nTheo sơ đồ, chỉ có mũi tên từ A đến C. Không có mũi tên từ B đến C.\nBước 2: Kết luận theo thông tin đã biết.\nMuốn đến C, quân phải đi qua A. Không suy ra kết luận ấy khi chỉ biết dừng ở D, vì D nhận đường từ cả A và B. Chọn D."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-11",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Không ghi thứ tự khi lấy hai thẻ",
          "prompt": "Túi có hai thẻ đỏ và một thẻ xanh. Lấy hai thẻ, không hoàn lại. Chỉ ghi hai màu, coi “đỏ–xanh” và “xanh–đỏ” là cùng kết quả. Danh sách kết quả khác nhau là gì?",
          "svg": "",
          "options": [
            "A. Đỏ–đỏ, đỏ–xanh, xanh–xanh.",
            "B. Đỏ–đỏ, đỏ–xanh.",
            "C. Chỉ đỏ–xanh.",
            "D. Đỏ–đỏ, đỏ–xanh, xanh–đỏ."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Kiểm số thẻ cần cho mỗi cặp.\nHai thẻ đỏ có sẵn nên đỏ–đỏ có thể. Một đỏ và một xanh cũng có thể.\nBước 2: Loại cặp thiếu vật và gộp thứ tự.\nKhông có hai thẻ xanh nên xanh–xanh không thể. Hai thứ tự của cặp khác màu được gộp theo quy ước.\nBước 3: Kết luận.\nChỉ có đỏ–đỏ và đỏ–xanh. Chọn B."
        },
        {
          "id": "l6-xac-suat-mo-hinh-nang-cao-12",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Thêm thẻ có làm mọi tích đều mới?",
          "prompt": "Hộp ban đầu có thẻ $1,2,3$. Lấy hai lần, có hoàn lại, chỉ ghi tích. Thêm thẻ $4$ rồi giữ nguyên cách thử. Những giá trị tích nào mới có thể xuất hiện mà trước đó không thể?",
          "svg": "",
          "options": [
            "A. $8,12,16$.",
            "B. $4,8,12,16$.",
            "C. $8,12$.",
            "D. $4,8,12$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Liệt kê tích trong mô hình cũ.\nCác tích khác nhau là $1,2,3,4,6,9$. Trong đó $4$ đã có từ $2\\cdot2$.\nBước 2: Xét những cặp dùng thẻ mới.\nTích với $4$ là $4\\cdot1=4$, $4\\cdot2=8$, $4\\cdot3=12$, $4\\cdot4=16$. Cặp $4,4$ được phép vì có hoàn lại.\nBước 3: Lấy phần thực sự mới.\nLoại $4$ vì đã có. Còn $8,12,16$. Các cặp không dùng thẻ $4$ không tạo tích mới. Chọn A."
        }
      ],
      "hsg": [
        {
          "id": "l6-xac-suat-mo-hinh-hsg-01",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Đếm cặp có số đỏ lớn hơn",
          "prompt": "Hộp đỏ có các thẻ 1, 2, 4; hộp xanh có các thẻ 1, 3. Lấy một thẻ mỗi hộp, ghi cặp (số đỏ; số xanh). Có bao nhiêu cặp khác nhau có số đỏ lớn hơn số xanh?",
          "svg": "",
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Với số đỏ 1, không có số xanh nhỏ hơn.\nBước 2: Với số đỏ 2, được (2; 1).\nBước 3: Với số đỏ 4, được (4; 1) và (4; 3).\nBước 4: Có đúng 3 cặp; cặp (1; 1) bị loại vì hai số bằng nhau."
        },
        {
          "id": "l6-xac-suat-mo-hinh-hsg-02",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm số lớn nhất trên ba thẻ",
          "prompt": "Hộp có ba thẻ ghi ba số nguyên dương khác nhau. Lấy hai thẻ, không hoàn lại, rồi cộng. Biết danh sách đầy đủ các tổng có thể là 5, 7, 8. Số lớn nhất trên một thẻ là bao nhiêu?",
          "svg": "",
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Gọi ba số theo thứ tự tăng dần là $a<b<c$.\nBước 2: Ba tổng tăng dần là $a+b=5$, $a+c=7$, $b+c=8$.\nBước 3: Cộng ba tổng được $2(a+b+c)=20$, nên $a+b+c=10$.\nBước 4: Suy ra $c=10-5=5$, $b=10-7=3$, $a=10-8=2$.\nBước 5: Ba số 2, 3, 5 nguyên dương, khác nhau và tạo đúng các tổng 5, 7, 8."
        },
        {
          "id": "l6-xac-suat-mo-hinh-hsg-03",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Lấy đủ hai thẻ mỗi màu yêu cầu",
          "prompt": "Hộp có 9 thẻ tròn: 4 đỏ, 3 xanh, 2 vàng. Lấy các thẻ mà không nhìn màu, không hoàn lại. Ít nhất phải lấy bao nhiêu thẻ để chắc chắn có ít nhất 2 thẻ đỏ và ít nhất 2 thẻ xanh?",
          "svg": svgCap2.svgGrade6Models(13),
          "correctAnswer": "8",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Lấy 7 thẻ vẫn có thể gặp 4 đỏ, 1 xanh, 2 vàng, chưa đủ 2 xanh.\nBước 2: Nếu lấy 8 thẻ mà chỉ có nhiều nhất 1 xanh thì nhiều nhất chỉ lấy được $4+1+2=7$ thẻ, không đủ 8.\nBước 3: Nếu chỉ có nhiều nhất 1 đỏ thì nhiều nhất có $1+3+2=6$ thẻ, cũng không đủ 8.\nBước 4: Vì vậy mọi cách lấy 8 thẻ đều đủ ít nhất 2 đỏ và 2 xanh; 8 là số nhỏ nhất."
        },
        {
          "id": "l6-xac-suat-mo-hinh-hsg-04",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giải thích vì sao có thể lấy được tổng chẵn",
          "prompt": "Ba thẻ ghi ba số nguyên khác nhau. Có thể lấy bất kì hai thẻ. Giải thích vì sao luôn có cách lấy hai thẻ có tổng chẵn. Điều này có nghĩa là mọi cách lấy đều cho tổng chẵn không?",
          "svg": "",
          "solution": "Bước 1: Mỗi số nguyên là chẵn hoặc lẻ.\nBước 2: Ba số được chia vào hai loại nên phải có ít nhất hai số cùng loại: nếu mỗi loại có nhiều nhất một số thì chỉ có nhiều nhất hai số.\nBước 3: Lấy hai thẻ cùng loại, tổng của hai số chẵn hoặc hai số lẻ đều chẵn.\nBước 4: Đây là khẳng định luôn có một cách lấy phù hợp, không phải mọi cách lấy đều phù hợp.\nBước 5: Nếu các thẻ gồm cả số chẵn và số lẻ, lấy một thẻ mỗi loại sẽ cho tổng lẻ; nếu cả ba cùng loại thì mọi cách lấy đều cho tổng chẵn."
        },
        {
          "id": "l6-xac-suat-mo-hinh-hsg-05",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giải thích danh sách các tổng chẵn",
          "prompt": "Hộp có năm thẻ ghi 1, 2, 3, 4, 5. Lấy ba thẻ khác nhau, không hoàn lại. Giải thích vì sao các tổng chẵn có thể nhận được đúng là 6, 8, 10, 12: mỗi số ấy đều có cách lấy, và không còn tổng chẵn nào khác.",
          "svg": "",
          "solution": "Bước 1: Ba thẻ khác nhau có tổng nhỏ nhất $1+2+3=6$ và lớn nhất $3+4+5=12$.\nBước 2: Các số chẵn từ 6 đến 12 chỉ là 6, 8, 10, 12.\nBước 3: Chúng đều tạo được: $1+2+3=6$, $1+2+5=8$, $1+4+5=10$, $3+4+5=12$.\nBước 4: Mỗi cách đều dùng ba thẻ khác nhau có trong hộp.\nBước 5: Như vậy danh sách vừa không thiếu vừa không thừa; các tổng lẻ vẫn có thể xảy ra nhưng không thuộc yêu cầu."
        },
        {
          "id": "l6-xac-suat-mo-hinh-hsg-06",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Bộ đồ có một điều kiện loại",
          "prompt": "Chọn một áo trong ba màu đỏ, xanh, vàng và một quần màu đen hoặc trắng. Mọi bộ đều được phép trừ áo đỏ với quần đen, như bảng. Có bao nhiêu bộ khác nhau có thể chọn?",
          "svg": svgCap2.svgGrade6DataExtension("clothes"),
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đếm theo từng màu áo.\nÁo đỏ chỉ đi với quần trắng: $1$ bộ. Áo xanh có $2$ bộ và áo vàng có $2$ bộ.\nBước 2: Cộng các nhóm không trùng.\nKhác màu áo thì khác bộ, nên tổng $1+2+2=5$.\nBước 3: Kết luận.\nCó $5$ bộ khác nhau."
        },
        {
          "id": "l6-xac-suat-mo-hinh-hsg-07",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Dừng khi tổng lần đầu đạt ít nhất bốn",
          "prompt": "Hộp có hai thẻ $1$ và $2$. Lấy từng lần, ghi số rồi trả thẻ vào hộp. Dừng ngay khi tổng các số đã ghi lần đầu đạt ít nhất $4$. Có bao nhiêu dãy kết quả theo thứ tự có thể được ghi?",
          "svg": "",
          "correctAnswer": "8",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xét dãy bắt đầu bằng hai.\nSau $2$, lấy tiếp $2$ thì dừng: $(2,2)$. Nếu lấy $1$, tổng mới $3$ nên lấy thêm một lần: $(2,1,1)$ hoặc $(2,1,2)$. Có $3$ dãy.\nBước 2: Xét dãy bắt đầu bằng một.\nSau $(1,2)$ tổng $3$, thêm $1$ hoặc $2$ cho $(1,2,1)$, $(1,2,2)$.\nSau $(1,1)$ tổng $2$: thêm $2$ thì dừng với $(1,1,2)$; thêm $1$ thì tổng $3$, còn hai dãy $(1,1,1,1)$, $(1,1,1,2)$. Có $5$ dãy.\nBước 3: Kết luận.\nCó tất cả $3+5=8$ dãy kết quả."
        },
        {
          "id": "l6-xac-suat-mo-hinh-hsg-08",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Bỏ thẻ để một tổng không thể xuất hiện",
          "prompt": "Hộp có sáu thẻ $1,2,3,4,5,6$. Bỏ bớt thẻ trước khi thử; sau đó lấy bất kỳ hai thẻ còn lại, không hoàn lại. Ít nhất phải bỏ bao nhiêu thẻ để tổng $7$ không thể xảy ra, mà vẫn còn ít nhất hai thẻ để lấy?",
          "svg": "",
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Liệt kê các cặp tạo tổng bảy.\nChỉ có các cặp $1,6$; $2,5$; $3,4$. Ba cặp không có thẻ chung.\nBước 2: Giải thích vì sao bỏ hai chưa đủ.\nMỗi thẻ bị bỏ chỉ phá được một cặp trong ba cặp. Bỏ nhiều nhất hai thẻ vẫn để nguyên ít nhất một cặp tạo tổng $7$.\nBước 3: Chỉ ra cách bỏ ba thẻ.\nBỏ $4,5,6$, còn $1,2,3$. Các tổng hai thẻ là $3,4,5$, không có $7$; vẫn còn đủ thẻ để lấy.\nBước 4: Kết luận.\nÍt nhất phải bỏ $3$ thẻ."
        },
        {
          "id": "l6-xac-suat-mo-hinh-hsg-09",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Mọi tổng đều chẵn thì từng thẻ có chẵn?",
          "prompt": "Hộp có ba thẻ ghi ba số nguyên khác nhau. Biết mọi cách lấy hai thẻ khác nhau đều cho tổng chẵn. Có bắt buộc cả ba số đều chẵn không? Giải thích và nêu đầy đủ hai kiểu chẵn–lẻ có thể của hộp.",
          "svg": "",
          "solution": "Bước 1: Loại việc trộn số chẵn và số lẻ.\nNếu hộp có cả một thẻ chẵn và một thẻ lẻ, có thể lấy đúng hai thẻ ấy. Tổng của chúng lẻ, trái giả thiết mọi tổng đều chẵn.\nBước 2: Nêu hai kiểu còn lại và kiểm.\nVì thế cả ba phải cùng tính chẵn–lẻ. Ba số chẵn cộng từng đôi cho chẵn; ba số lẻ cộng từng đôi cũng cho chẵn.\nVí dụ hộp $2,4,6$ thuộc kiểu đầu và hộp $1,3,5$ thuộc kiểu sau. Cả hai có ba số khác nhau.\nBước 3: Kết luận.\nKhông bắt buộc từng thẻ chẵn. Đầy đủ hai kiểu là cả ba chẵn hoặc cả ba lẻ; không thể trộn hai loại."
        },
        {
          "id": "l6-xac-suat-mo-hinh-hsg-10",
          "lop": 6,
          "chuDe": "xac-suat-mo-hinh",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Có đỏ không có nghĩa là sớm chắc chắn lấy được đỏ",
          "prompt": "Túi có $2$ thẻ đỏ, $3$ thẻ xanh. Cứ lấy một thẻ rồi trả lại, dừng khi gặp đỏ. Bạn An nói chắc chắn dừng trong $5$ lần. Hãy giải thích vì sao chưa đúng. Nếu đổi thành không hoàn lại thì chậm nhất lần thứ mấy phải dừng, và vì sao mốc đó không thể giảm?",
          "svg": "",
          "solution": "Bước 1: Nêu một dãy bác bỏ mốc năm lần khi hoàn lại.\nCó thể lấy xanh cả năm lần vì sau mỗi lượt thẻ xanh lại ở trong túi. Dãy XXXXX phù hợp mọi quy tắc nhưng chưa dừng.\nBước 2: Xét mô hình không hoàn lại.\nChỉ có $3$ thẻ xanh. Nếu ba lần đầu đều xanh thì thẻ thứ tư chắc chắn đỏ. Nếu đỏ xuất hiện sớm hơn thì đã dừng trước đó.\nBước 3: Kiểm mốc nhỏ nhất bảo đảm dừng.\nDãy ba thẻ xanh ở ba lần đầu có thể xảy ra, nên không thể bảo đảm dừng trong ba lần. Lần thứ tư là mốc bảo đảm đầu tiên.\nBước 4: Kết luận.\nVới hoàn lại, khẳng định chắc chắn dừng trong năm lần sai. Với không hoàn lại, chậm nhất lần thứ $4$ phải dừng."
        }
      ]
    }
  };
}

export default getGrade6Topics;
