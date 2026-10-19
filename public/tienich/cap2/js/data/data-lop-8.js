/**
 * data-lop-8.js
 * Ngân hàng câu hỏi Toán Lớp 8 chuẩn phân tầng: Khá (1-3) -> Giỏi (4-10) -> HSG (11-15)
 * Tiện ích: Toán Cấp 2 trực quan - iMath
 */

import { svgCap2, svgGrade8Geometry } from '../core/svg-cap2.js';

export function getGrade8Topics() {

  const bank = {
    'all': { kha: [], nangCao: [], hsg: [] },
    'phan-thuc': {
      "kha": [
        {
          "id": "l8-phan-thuc-kha-01",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tử thức và mẫu thức",
          "prompt": "Với $x\\ne3$, phân thức $\\frac{2x+1}{x-3}$ có tử thức và mẫu thức lần lượt là gì?",
          "svg": "",
          "options": [
            "A. $2x$ và $x$",
            "B. $2x+1$ và $x-3$",
            "C. $x-3$ và $2x+1$",
            "D. $2x+1$ và $3-x$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhận diện cấu tạo phân thức\nMột phân thức có dạng $A/B$, trong đó $A$ là tử thức và $B$ là mẫu thức.\nBước 2: Đọc tử thức\nToàn bộ biểu thức trên gạch phân số là $2x+1$, nên tử thức là $2x+1$, không chỉ $2x$.\nBước 3: Đọc mẫu thức\nToàn bộ biểu thức dưới gạch là $x-3$, nên mẫu thức là $x-3$.\nKhông đổi thành $3-x$ vì hai biểu thức này đối nhau.\nBước 4: Kiểm tra điều kiện\n$x\\ne3$ bảo đảm $x-3\\ne0$, nên phân thức xác định.\nĐiều kiện này không làm thay đổi tên tử thức và mẫu thức.\nBước 5: Kết luận\nTử thức và mẫu thức lần lượt là $2x+1$ và $x-3$. Chọn B."
        },
        {
          "id": "l8-phan-thuc-kha-02",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Điều kiện xác định của phân thức",
          "prompt": "Phân thức $\\frac{2x+1}{3x-6}$ xác định khi nào?",
          "svg": "",
          "options": [
            "A. $x\\ne-\\frac12$",
            "B. $x\\ne6$",
            "C. $x\\ne-2$",
            "D. $x\\ne2$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nêu điều kiện xác định\nPhân thức xác định khi mẫu khác $0$.\nỞ đây cần $3x-6\\ne0$.\nBước 2: Tìm giá trị làm mẫu bằng không\nGiải $3x-6=0$: $3x=6$, nên $x=2$.\nBước 3: Loại đúng giá trị này\nĐiều kiện cần và đủ là $x\\ne2$.\nVới mọi giá trị khác $2$, mẫu $3(x-2)$ đều khác $0$.\nBước 4: Phân biệt tử và mẫu\nTử bằng $0$ vẫn được phép nếu mẫu khác $0$.\nChẳng hạn $x=-1/2$ làm tử bằng $0$ nhưng mẫu khác $0$, nên không bị loại.\nBước 5: Kết luận\nChọn D: $x\\ne2$."
        },
        {
          "id": "l8-phan-thuc-kha-03",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Điều kiện hai phân thức bằng nhau",
          "prompt": "Cho các đa thức $A,B,C,D$. Tại các giá trị của biến làm $B\\ne0,D\\ne0$, điều kiện nào tương đương với $\\frac AB=\\frac CD$?",
          "svg": "",
          "options": [
            "A. $AD=BC$",
            "B. $AC=BD$",
            "C. $AB=CD$",
            "D. $A+D=B+C$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Kiểm tra phép nhân khử mẫu\nGiả thiết $B\\ne0,D\\ne0$ cho $BD\\ne0$.\nTa được phép nhân hoặc chia hai vế cho $BD$.\nBước 2: Chứng minh chiều thứ nhất\nTừ $A/B=C/D$, nhân hai vế với $BD$.\nRút gọn được $AD=BC$.\nBước 3: Chứng minh chiều ngược lại\nNếu $AD=BC$, chia hai vế cho $BD$.\nCó $AD/(BD)=BC/(BD)$, tức $A/B=C/D$.\nBước 4: Xác định đúng tích chéo\nTử của mỗi phân thức nhân với mẫu của phân thức kia.\nĐó là $AD$ và $BC$, không phải $AC$ và $BD$.\nBước 5: Kết luận\nHai phân thức bằng nhau khi và chỉ khi $AD=BC$ trên miền đã cho. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l8-phan-thuc-nang-cao-01",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Rút gọn nhân tử chung",
          "prompt": "Với $x\\ne1$, rút gọn $\\frac{3x(x-1)}{6(x-1)}$.",
          "svg": "",
          "options": [
            "A. $\\frac{x-1}{2}$",
            "B. $2x$",
            "C. $\\frac x2$",
            "D. $\\frac12$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Kiểm tra nhân tử định rút gọn\n$x\\ne1$ cho $x-1\\ne0$, nên $3(x-1)$ khác $0$.\nBước 2: Viết cùng nhân tử\nTử là $3(x-1)x$; mẫu là $3(x-1)\\cdot2$.\nCả hai có nhân tử chung $3(x-1)$.\nBước 3: Chia cả tử và mẫu\nRút gọn nhân tử chung khác $0$, được $x/2$.\nKhông bỏ nhân tử $x$ vì mẫu không có nhân tử này.\nBước 4: Giữ điều kiện gốc\nKết quả đúng với $x\\ne1$.\nDù $x/2$ tính được ở $x=1$, phân thức ban đầu không xác định tại đó.\nBước 5: Kết luận\nChọn C: $x/2$, với $x\\ne1$."
        },
        {
          "id": "l8-phan-thuc-nang-cao-02",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cộng hai phân thức khác mẫu",
          "prompt": "Với $x\\ne1,x\\ne-1$, tính $\\frac2{x-1}+\\frac3{x+1}$.",
          "svg": "",
          "options": [
            "A. $\\frac{5x+1}{x^2-1}$",
            "B. $\\frac5{2x}$",
            "C. $\\frac{5x-1}{x^2+1}$",
            "D. $\\frac{5x-1}{x^2-1}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Chọn mẫu chung\nHai mẫu khác $0$ theo giả thiết. Mẫu chung là $(x-1)(x+1)=x^2-1$.\nBước 2: Quy đồng từng phân thức\n$2/(x-1)=2(x+1)/(x^2-1)$.\n$3/(x+1)=3(x-1)/(x^2-1)$.\nBước 3: Cộng tử cùng mẫu\nTổng bằng $[2(x+1)+3(x-1)]/(x^2-1)$.\nKhi cộng phân thức cùng mẫu, giữ nguyên mẫu chung.\nBước 4: Thu gọn tử\n$2x+2+3x-3=5x-1$.\nVậy tổng là $(5x-1)/(x^2-1)$, vẫn với $x\\ne\\pm1$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-phan-thuc-nang-cao-03",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Trừ phân thức có mẫu đối nhau",
          "prompt": "Với $x\\ne2$, rút gọn $\\frac{x}{2-x}-\\frac2{x-2}$.",
          "svg": "",
          "options": [
            "A. $\\frac{x-2}{x-2}$",
            "B. $-\\frac{x+2}{x-2}$",
            "C. $\\frac{2-x}{x-2}$",
            "D. $\\frac{x+2}{x-2}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhận ra hai mẫu đối nhau\n$2-x=-(x-2)$; cả hai khác $0$ khi $x\\ne2$.\nBước 2: Đổi về cùng mẫu\n$x/(2-x)=-x/(x-2)$.\nDấu âm phải được giữ khi đổi dấu mẫu.\nBước 3: Thực hiện phép trừ\nCó $-x/(x-2)-2/(x-2)=(-x-2)/(x-2)$.\nBước 4: Đặt dấu âm chung ở tử\n$-x-2=-(x+2)$, nên kết quả là $-(x+2)/(x-2)$.\nKhông đổi dấu trừ trước số $2$ thành dấu cộng.\nBước 5: Kết luận\nChọn B, với điều kiện $x\\ne2$."
        },
        {
          "id": "l8-phan-thuc-nang-cao-04",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhân phân thức sau phân tích nhân tử",
          "prompt": "Với $x\\ne0,x\\ne1,x\\ne-3$, rút gọn $\\frac{x^2-9}{x^2-x}\\cdot\\frac{x}{x+3}$.",
          "svg": "",
          "options": [
            "A. $\\frac{x-3}{x-1}$",
            "B. $\\frac{x+3}{x-1}$",
            "C. $\\frac{x(x-3)}{x-1}$",
            "D. $\\frac{x-3}{x+1}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Phân tích đa thức\n$x^2-9=(x-3)(x+3)$ và $x^2-x=x(x-1)$.\nBước 2: Kiểm tra điều kiện rút gọn\n$x\\ne0,1,-3$ bảo đảm tất cả các mẫu và các nhân tử $x,x+3$ định khử đều khác $0$.\nBước 3: Nhân hai phân thức\nTích bằng $\\frac{(x-3)(x+3)x}{x(x-1)(x+3)}$.\nBước 4: Khử các nhân tử chung\nChia tử và mẫu cho $x(x+3)\\ne0$, còn $(x-3)/(x-1)$.\nCác giá trị $0,-3$ vẫn bị cấm trong biểu thức gốc dù không còn xuất hiện trong mẫu cuối.\nBước 5: Kết luận\nChọn A, trên miền $x\\ne0,1,-3$."
        },
        {
          "id": "l8-phan-thuc-nang-cao-05",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Điều kiện của phép chia phân thức",
          "prompt": "Xét $Q=\\frac{x+1}{x-2}:\\frac{x^2-1}{x-2}$. Kết quả rút gọn và điều kiện xác định đầy đủ nào đúng?",
          "svg": "",
          "options": [
            "A. $Q=\\frac1{x-1}$, với $x\\ne1$",
            "B. $Q=\\frac1{x+1}$, với $x\\ne-1,1,2$",
            "C. $Q=\\frac1{x-1}$, với $x\\ne-1,1,2$",
            "D. $Q=\\frac1{x-1}$, với $x\\ne1,2$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xét các mẫu ban đầu\nCả hai phân thức có mẫu $x-2$, nên cần $x\\ne2$.\nBước 2: Kiểm tra số chia\nSố chia $(x^2-1)/(x-2)$ phải khác $0$.\nVì mẫu đã khác $0$, cần $x^2-1\\ne0$, tức $x\\ne-1,1$.\nBước 3: Nhân với nghịch đảo\nTrên miền đó, $Q=\\frac{x+1}{x-2}\\cdot\\frac{x-2}{(x-1)(x+1)}$.\nBước 4: Rút gọn và giữ đủ điều kiện\nKhử $x-2$ và $x+1$, được $Q=1/(x-1)$.\nĐiều kiện vẫn là $x\\ne-1,1,2$, không chỉ điều kiện của mẫu cuối.\nBước 5: Kết luận\nChọn C vì đúng cả biểu thức lẫn miền xác định."
        },
        {
          "id": "l8-phan-thuc-nang-cao-06",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Lập phân thức chênh lệch thời gian",
          "prompt": "Một xe đi đoạn đầu dài $12$ km với vận tốc không đổi $v$ km/h, đoạn sau dài $18$ km với vận tốc không đổi $(v+6)$ km/h, trong đó $v>0$. Không tính thời gian nghỉ. Thời gian đoạn sau trừ thời gian đoạn đầu, tính bằng giờ, bằng biểu thức nào?",
          "svg": "",
          "options": [
            "A. $\\frac{6(v+12)}{v(v+6)}$",
            "B. $\\frac6{v+6}$",
            "C. $\\frac{6(12-v)}{v(v+6)}$",
            "D. $\\frac{6(v-12)}{v(v+6)}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính thời gian mỗi chặng\nThời gian bằng quãng đường chia vận tốc.\nDo đó $t_1=12/v$ giờ và $t_2=18/(v+6)$ giờ; $v>0$ làm hai vận tốc dương.\nBước 2: Viết hiệu đúng thứ tự\nĐề hỏi đoạn sau trừ đoạn đầu, nên cần $t_2-t_1=18/(v+6)-12/v$.\nBước 3: Quy đồng\nMẫu chung là $v(v+6)\\ne0$.\nHiệu bằng $[18v-12(v+6)]/[v(v+6)]$.\nBước 4: Thu gọn và giải thích dấu\nTử bằng $18v-12v-72=6(v-12)$.\nHiệu có thể âm, bằng $0$ hoặc dương tùy $v$; đề không khẳng định chặng sau luôn lâu hơn.\nBước 5: Kết luận\nChọn D: $6(v-12)/[v(v+6)]$ giờ."
        },
        {
          "id": "l8-phan-thuc-nang-cao-07",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Giữ điều kiện khi rút gọn nhiều phép toán",
          "prompt": "Cho $E=\\left(\\frac1{x-1}-\\frac1{x+1}\\right):\\frac{x-2}{x^2-1}$. Chọn kết quả kèm điều kiện xác định đầy đủ.",
          "svg": "",
          "options": [
            "A. $E=\\frac2{x-2}$, với $x\\ne2$",
            "B. $E=\\frac2{x-2}$, với $x\\ne-1,1,2$",
            "C. $E=\\frac2{x-2}$, với $x\\ne-1,1$",
            "D. $E=\\frac{2x}{x-2}$, với $x\\ne-1,1,2$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định các giá trị cấm\nCác mẫu $x-1,x+1,x^2-1$ yêu cầu $x\\ne-1,1$.\nSố chia còn phải khác $0$, nên $x\\ne2$.\nBước 2: Quy đồng hiệu trong ngoặc\nCó $1/(x-1)-1/(x+1)=[(x+1)-(x-1)]/(x^2-1)$.\nBước 3: Thu gọn đúng dấu\nTử bằng $x+1-x+1=2$, nên hiệu là $2/(x^2-1)$.\nBước 4: Thực hiện phép chia\n$E=\\frac2{x^2-1}\\cdot\\frac{x^2-1}{x-2}=2/(x-2)$.\nPhép khử hợp lệ trên miền đã ghi; hai giá trị $-1,1$ không được nhận lại.\nBước 5: Kết luận\nChọn B: $E=2/(x-2)$ với $x\\ne-1,1,2$."
        }
      ],
      "hsg": [
        {
          "id": "l8-phan-thuc-hsg-01",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tính giá trị từ quan hệ giữa hai biến",
          "prompt": "Cho $x\\ne0,x+y\\ne0$ và $y=3x$. Tính $P=\\frac{x^2-y^2}{x^2+xy}$.",
          "svg": "",
          "correctAnswer": "-2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Kiểm tra miền xác định\nMẫu $x^2+xy=x(x+y)$ khác $0$ vì đề cho $x\\ne0$ và $x+y\\ne0$.\nTa được phép rút gọn các nhân tử này nếu chúng xuất hiện ở cả tử và mẫu.\nBước 2: Phân tích tử và mẫu\nDùng hiệu hai bình phương: $x^2-y^2=(x-y)(x+y)$.\nDo đó $P=\\frac{(x-y)(x+y)}{x(x+y)}$.\nBước 3: Rút gọn trước khi thay số\nVì $x+y\\ne0$, chia tử và mẫu cho $x+y$, được $P=(x-y)/x$.\nBước 4: Sử dụng quan hệ giữa hai biến\nThay $y=3x$: $P=(x-3x)/x=-2x/x=-2$ vì $x\\ne0$.\nQuan hệ này cũng cho $x+y=4x\\ne0$, nên không mâu thuẫn với điều kiện ban đầu.\nBước 5: Kết luận\nGiá trị cần nhập là $-2$."
        },
        {
          "id": "l8-phan-thuc-hsg-02",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm hệ số trong đẳng thức phân thức",
          "prompt": "Tìm các hằng số $a,b$ để $\\frac{ax^2+bx-4}{x^2-4}=\\frac{3x+2}{x+2}$ với mọi $x\\ne-2,2$. Chỉ nhập giá trị $a+b$.",
          "svg": "",
          "correctAnswer": "-1",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xét phép khử mẫu\nVới $x\\ne-2,2$, có $x^2-4=(x-2)(x+2)\\ne0$.\nNhân hai vế với mẫu này là phép biến đổi tương đương trên miền đã cho.\nBước 2: Viết đẳng thức đa thức\nTa được $ax^2+bx-4=(3x+2)(x-2)$.\nKhai triển vế phải: $3x^2-6x+2x-4=3x^2-4x-4$.\nBước 3: Xác định các hằng số\nĐẳng thức phải đúng với mọi $x$ thuộc miền, nên các hệ số cùng bậc phải bằng nhau.\nĐối chiếu hệ số của $x^2$ và $x$, được $a=3$ và $b=-4$.\nBước 4: Thay lại kiểm tra\nVới hai giá trị này, tử bên trái là $(3x+2)(x-2)$.\nRút gọn với mẫu $(x-2)(x+2)$ cho đúng $(3x+2)/(x+2)$ khi $x\\ne\\pm2$; điều kiện $x\\ne2$ vẫn phải giữ.\nBước 5: Kết luận\n$a+b=3-4=-1$. Nhập $-1$."
        },
        {
          "id": "l8-phan-thuc-hsg-03",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Giá trị nguyên và nghiệm phải loại",
          "prompt": "Cho $P=\\frac{x^2+2x-8}{x^2-x-2}$, với $x$ là số nguyên và mẫu khác $0$. Tính tổng tất cả các giá trị $x$ làm $P$ là số nguyên.",
          "svg": "",
          "correctAnswer": "-6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Ghi các giá trị bị cấm\nMẫu $x^2-x-2=(x-2)(x+1)$, nên điều kiện là $x\\ne2,-1$.\nNgoài ra $x$ là số nguyên theo đề.\nBước 2: Rút gọn và tách phần nguyên\nTử $x^2+2x-8=(x-2)(x+4)$.\nTrên miền xác định, $P=(x+4)/(x+1)=1+3/(x+1)$.\nBước 3: Tìm các ứng viên nguyên\nVì $x+1$ là số nguyên khác $0$, phân số $3/(x+1)$ nguyên khi và chỉ khi $x+1$ là ước nguyên của $3$.\nCác ước là $1,-1,3,-3$, tương ứng $x=0,-2,2,-4$.\nBước 4: Loại theo mẫu gốc và thử lại\nPhải loại $x=2$ vì làm mẫu ban đầu bằng $0$, dù phân thức rút gọn tính được ở đó.\nVới $x=0,-2,-4$, biểu thức gốc lần lượt bằng $4,-2,0$, đều là số nguyên và mẫu đều khác $0$.\nBước 5: Kết luận\nCác giá trị hợp lệ là $0,-2,-4$; tổng bằng $-6$."
        },
        {
          "id": "l8-phan-thuc-hsg-04",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh đẳng thức trên miền chung",
          "prompt": "Cho $x\\ne y$ và $x\\ne-y$. Chứng minh $\\frac{x+y}{x-y}+\\frac{x-y}{x+y}=2+\\frac{4y^2}{x^2-y^2}$.",
          "svg": "",
          "solution": "Bước 1: Kiểm tra các mẫu\n$x\\ne y$ cho $x-y\\ne0$; $x\\ne-y$ cho $x+y\\ne0$.\nVì vậy tích $(x-y)(x+y)=x^2-y^2$ cũng khác $0$.\nBước 2: Quy đồng vế trái\nMẫu chung là $(x-y)(x+y)$.\nVế trái bằng $\\frac{(x+y)^2+(x-y)^2}{x^2-y^2}$.\nBước 3: Khai triển tử số\nCó $(x+y)^2=x^2+2xy+y^2$ và $(x-y)^2=x^2-2xy+y^2$.\nCộng lại, hai hạng tử chứa $xy$ triệt tiêu, còn $2x^2+2y^2$.\nBước 4: Tạo biểu thức giống vế phải\nViết $2x^2+2y^2=2(x^2-y^2)+4y^2$.\nChia từng phần cho mẫu khác $0$, được $2+\\frac{4y^2}{x^2-y^2}$.\nBước 5: Kết luận\nVế trái đã biến đổi thành vế phải bằng các phép hợp lệ, nên đẳng thức đúng với mọi $x\\ne y$ và $x\\ne-y$."
        },
        {
          "id": "l8-phan-thuc-hsg-05",
          "lop": 8,
          "chuDe": "phan-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Miền xác định không được mở rộng sau rút gọn",
          "prompt": "Xét $F=\\left(\\frac{x^2-1}{x-1}-4\\right):\\frac{x-3}{x+2}$. Tìm điều kiện xác định, chứng minh $F=x+2$ trên miền đó, rồi giải thích vì sao không được dùng $x+2$ để gán giá trị cho $F$ tại $x=1,-2,3$.",
          "svg": "",
          "solution": "Bước 1: Tìm đầy đủ điều kiện xác định\nMẫu $x-1$ yêu cầu $x\\ne1$; mẫu $x+2$ yêu cầu $x\\ne-2$.\nPhép chia còn yêu cầu số chia $(x-3)/(x+2)\\ne0$, tức $x\\ne3$.\nVậy miền xác định là $x\\ne1,-2,3$.\nBước 2: Rút gọn biểu thức trong ngoặc\nVì $x^2-1=(x-1)(x+1)$ và $x\\ne1$, có $(x^2-1)/(x-1)=x+1$.\nDo đó biểu thức trong ngoặc bằng $x+1-4=x-3$.\nBước 3: Thực hiện phép chia\nTrên miền đã ghi, chia cho $(x-3)/(x+2)$ là nhân với nghịch đảo $(x+2)/(x-3)$.\nVì $x\\ne3$, được $F=(x-3)(x+2)/(x-3)=x+2$.\nBước 4: Xét riêng ba điểm cấm\nTại $x=1$, mẫu của phân thức đầu bằng $0$; tại $x=-2$, mẫu của số chia bằng $0$.\nTại $x=3$, số chia bằng $0$, nên phép chia không thực hiện được.\nDù đa thức $x+2$ có giá trị tại những điểm đó, biểu thức gốc $F$ không xác định.\nBước 5: Kết luận\n$F=x+2$ chỉ trên miền $x\\ne1,-2,3$. Rút gọn không làm mất các điều kiện xác định ban đầu."
        }
      ]
    },
    'pt-bac-nhat': {
      "kha": [
        {
          "id": "l8-pt-bac-nhat-kha-01",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Nghiệm của phương trình $3x - 12 = 0$ là:",
          "svg": "",
          "options": [
            "A. x = 4",
            "B. x = -4",
            "C. x = 36",
            "D. x = 9"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định phép biến đổi\nCần đưa phương trình $3x-12=0$ về dạng chỉ còn $x$ ở một vế.\nBước 2: Cộng cùng một số\nCộng $12$ vào hai vế, được $3x=12$.\nBước 3: Chia hệ số\nChia hai vế cho $3\\ne0$, được $x=4$.\nBước 4: Thử lại nghiệm\nThay $x=4$: $3\\cdot4-12=0$, đúng phương trình gốc.\nCác phép biến đổi tương đương nên không còn nghiệm khác.\nBước 5: Kết luận\nChọn A: $x=4$."
        },
        {
          "id": "l8-pt-bac-nhat-kha-02",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Phương trình nào là phương trình bậc nhất một ẩn?",
          "svg": "",
          "options": [
            "A. $x^2 = 4$",
            "B. $2x + 1 = 0$",
            "C. $0x = 2$",
            "D. $xy = 1$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhắc dạng phương trình\nPhương trình bậc nhất một ẩn có dạng $ax+b=0$ với $a\\ne0$.\nBước 2: Kiểm tra phương án B\n$2x+1=0$ có $a=2\\ne0$, $b=1$, nên đúng dạng.\nBước 3: Phân biệt các phương án khác\nA chứa $x^2$, nên không bậc nhất.\nD chứa hai ẩn $x,y$ và tích của chúng, nên không phải phương trình bậc nhất một ẩn.\nBước 4: Kiểm tra trường hợp mất ẩn\nC có hệ số của $x$ bằng $0$, trái điều kiện $a\\ne0$.\nCách viết có chữ $x$ không đủ để coi là bậc nhất.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-pt-bac-nhat-kha-03",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Giải phương trình $5 - 2x = 11$.",
          "svg": "",
          "options": [
            "A. x = 3",
            "B. x = 8",
            "C. x = -3",
            "D. x = -8"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Gom phần chứa ẩn\nTrong $5-2x=11$, trừ $5$ ở cả hai vế để tách hạng tử chứa $x$.\nBước 2: Thu gọn\nTa được $-2x=11-5=6$.\nBước 3: Chia hệ số âm\nChia hai vế cho $-2\\ne0$, được $x=6/(-2)=-3$.\nĐây là đẳng thức nên dấu bằng vẫn giữ nguyên.\nBước 4: Thử lại\nVới $x=-3$, vế trái bằng $5-2(-3)=5+6=11$, đúng vế phải.\nBước 5: Kết luận\nChọn C: $x=-3$."
        }
      ],
      "nangCao": [
        {
          "id": "l8-pt-bac-nhat-nangCao-01",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Giải phương trình $3(x - 2) = 2x + 5$.",
          "svg": "",
          "options": [
            "A. x = 1",
            "B. x = -11",
            "C. x = 5",
            "D. x = 11"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Khai triển ngoặc\nNhân $3$ với từng hạng tử: $3(x-2)=3x-6$.\nBước 2: Chuyển phần chứa x về một vế\nPhương trình là $3x-6=2x+5$.\nTrừ $2x$ ở cả hai vế, được $x-6=5$.\nBước 3: Tìm x\nCộng $6$ vào hai vế, được $x=11$.\nBước 4: Kiểm tra phương trình ban đầu\nVế trái bằng $3(11-2)=27$; vế phải bằng $2\\cdot11+5=27$.\nHai vế bằng nhau nên nghiệm được nhận.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-pt-bac-nhat-nangCao-02",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Giải phương trình $\\frac{x - 1}{3} + \\frac{x + 2}{2} = 4$.",
          "svg": "",
          "options": [
            "A. x = 4",
            "B. x = 2",
            "C. x = 5",
            "D. x = -4"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Chọn mẫu chung\nHai mẫu $3,2$ là hằng số khác $0$, nên phương trình xác định với mọi $x$.\nChọn mẫu chung $6$.\nBước 2: Khử mẫu ở cả hai vế\nNhân phương trình với $6$, được $2(x-1)+3(x+2)=24$.\nVế phải $4$ cũng phải nhân với $6$.\nBước 3: Khai triển và giải\nCó $2x-2+3x+6=24$, tức $5x+4=24$.\nDo đó $5x=20$, nên $x=4$.\nBước 4: Thử lại\n$(4-1)/3+(4+2)/2=1+3=4$, đúng đề.\nKhông có giá trị cấm nào cần kiểm thêm.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-pt-bac-nhat-nangCao-03",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Một hình chữ nhật có chiều dài hơn chiều rộng 3 cm, chu vi 30 cm. Chiều rộng là:",
          "svg": "",
          "options": [
            "A. 9 cm",
            "B. 6 cm",
            "C. 12 cm",
            "D. 3 cm"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đặt ẩn theo điều cần tìm\nGọi chiều rộng là $x>0$ cm.\nChiều dài hơn $3$ cm nên bằng $x+3$ cm.\nBước 2: Lập phương trình chu vi\nChu vi hình chữ nhật bằng hai lần tổng chiều dài và chiều rộng.\nVì vậy $2[x+(x+3)]=30$.\nBước 3: Giải phương trình\nKhai triển: $4x+6=30$, nên $4x=24$ và $x=6$.\nBước 4: Kiểm tra kích thước\nChiều rộng $6$ cm, chiều dài $9$ cm đều dương.\nHiệu bằng $3$ và chu vi $2(6+9)=30$ cm, khớp cả hai dữ kiện.\nBước 5: Kết luận\nChiều rộng là $6$ cm. Chọn B."
        },
        {
          "id": "l8-pt-bac-nhat-nangCao-04",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Giải phương trình $0,5x - 1 = 0,2x + 2$.",
          "svg": "",
          "options": [
            "A. x = 1",
            "B. x = -10",
            "C. x = 10",
            "D. x = 5"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Thống nhất cách đọc số thập phân\nPhương trình là $0{,}5x-1=0{,}2x+2$.\nCó thể nhân cả hai vế với $10$ để bỏ dấu phẩy.\nBước 2: Nhân và thu gọn\nĐược $5x-10=2x+20$.\nBước 3: Giải phương trình\nTrừ $2x$, cộng $10$ ở hai vế: $3x=30$.\nSuy ra $x=10$.\nBước 4: Thử với số thập phân ban đầu\n$0{,}5\\cdot10-1=4$ và $0{,}2\\cdot10+2=4$.\nHai vế khớp nhau.\nBước 5: Kết luận\nChọn C: $x=10$."
        },
        {
          "id": "l8-pt-bac-nhat-nangCao-05",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Một quyển vở giá 8 nghìn đồng. Mua một số vở và trả thêm 5 nghìn đồng tiền gói, tổng cộng 69 nghìn đồng. Số vở là:",
          "svg": "",
          "options": [
            "A. 6",
            "B. 7",
            "C. 9",
            "D. 8"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đặt số vở\nGọi số vở là $x$, với $x$ là số nguyên dương.\nTính tiền theo nghìn đồng.\nBước 2: Lập tổng tiền\nTiền vở là $8x$, tiền gói cố định là $5$.\nDo đó $8x+5=69$.\nBước 3: Tìm x\nTrừ phí gói: $8x=64$.\nChia cho $8$, được $x=8$.\nBước 4: Kiểm tra điều kiện và tổng\n$8$ là số nguyên dương; $8\\cdot8+5=69$ nghìn đồng.\nPhí gói chỉ cộng một lần, không nhân với số vở.\nBước 5: Kết luận\nMua $8$ quyển vở. Chọn D."
        },
        {
          "id": "l8-pt-bac-nhat-nangCao-06",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Giải phương trình $4 - (2x - 3) = 3(x + 4)$.",
          "svg": "",
          "options": [
            "A. x = -1",
            "B. x = 1",
            "C. x = 5",
            "D. x = -5"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Bỏ ngoặc đúng dấu\n$4-(2x-3)=4-2x+3=7-2x$.\nDấu trừ trước ngoặc đổi dấu cả $2x$ và $-3$.\nBước 2: Khai triển vế phải\n$3(x+4)=3x+12$.\nVậy phương trình là $7-2x=3x+12$.\nBước 3: Gom và giải\nTrừ $3x$ và trừ $7$ ở hai vế: $-5x=5$.\nSuy ra $x=-1$.\nBước 4: Thử lại\nVế trái $4-(-2-3)=9$; vế phải $3(-1+4)=9$.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-pt-bac-nhat-nangCao-07",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phương trình bậc nhất một ẩn",
          "prompt": "Tìm m để phương trình $2x + m = 7$ có nghiệm $x = 3$.",
          "svg": "",
          "options": [
            "A. m = 13",
            "B. m = 1",
            "C. m = -1",
            "D. m = 7"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Hiểu yêu cầu về nghiệm\n$x=3$ là nghiệm nghĩa là thay $x=3$ vào phương trình phải được đẳng thức đúng.\nBước 2: Thay giá trị đã biết\n$2\\cdot3+m=7$, tức $6+m=7$.\nBước 3: Tìm tham số\nTrừ $6$ ở cả hai vế, được $m=1$.\nBước 4: Kiểm tra lại\nVới $m=1$, phương trình là $2x+1=7$ và cho $2x=6$, nên $x=3$.\nHệ số $2\\ne0$ bảo đảm nghiệm này duy nhất.\nBước 5: Kết luận\nChọn B: $m=1$."
        }
      ],
      "hsg": [
        {
          "id": "l8-pt-bac-nhat-hsg-01",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tìm tham số qua nghiệm",
          "prompt": "Phương trình $(m - 1)x + 2 = 3x + m$ có nghiệm duy nhất là $x = -\\frac{1}{3}$. Tìm m.",
          "svg": "",
          "correctAnswer": "2.5",
          "dapAnChapNhan": [
            "2,5",
            "5/2"
          ],
          "solution": "Bước 1: Sử dụng nghiệm đã biết\nVì $x=-1/3$ là nghiệm, thay giá trị này vào phương trình phải cho một đẳng thức đúng.\nTa có $-(m-1)/3+2=-1+m$.\nBước 2: Khử mẫu\nNhân hai vế với $3$: $-(m-1)+6=-3+3m$.\nKhai triển dấu trừ: $-m+7=-3+3m$.\nBước 3: Tìm tham số\nCộng $m+3$ ở hai vế, được $10=4m$.\nSuy ra $m=5/2=2{,}5$.\nBước 4: Kiểm tra tính duy nhất\nPhương trình gốc tương đương $(m-4)x=m-2$.\nVới $m=5/2$, hệ số $m-4=-3/2\\ne0$, nên có nghiệm duy nhất $x=(1/2)/(-3/2)=-1/3$, đúng yêu cầu.\nBước 5: Kết luận\n$m=2{,}5$. Nhập $2,5$ hoặc $2.5$."
        },
        {
          "id": "l8-pt-bac-nhat-hsg-02",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tìm ngược từ nghiệm",
          "prompt": "Gọi a là nghiệm của $\\frac{a - 1}{2} - \\frac{a + 1}{3} = 3$. Phương trình $\\frac{x - 1}{a} = \\frac{x + 1}{a + 2}$ có nghiệm x bằng bao nhiêu?",
          "svg": "",
          "correctAnswer": "24",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm a từ phương trình đầu\nHai mẫu $2,3$ khác $0$, nên nhân phương trình với $6$ được $3(a-1)-2(a+1)=18$.\nBước 2: Thu gọn và giải\nKhai triển: $3a-3-2a-2=18$.\nDo đó $a-5=18$, nên $a=23$.\nBước 3: Kiểm tra mẫu của phương trình sau\nVới $a=23$, hai mẫu là $23$ và $25$, đều khác $0$.\nPhương trình sau là $(x-1)/23=(x+1)/25$; nhân chéo được $25(x-1)=23(x+1)$.\nBước 4: Tìm x và thử lại\nKhai triển: $25x-25=23x+23$, nên $2x=48$ và $x=24$.\nThử phương trình đầu: $22/2-24/3=11-8=3$.\nThử phương trình sau: $(24-1)/23=(24+1)/25=1$.\nBước 5: Kết luận\nNghiệm cần nhập là $x=24$."
        },
        {
          "id": "l8-pt-bac-nhat-hsg-03",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Hai bước xác định tham số",
          "prompt": "Tìm m để hai phương trình $2x - m = 0$ và $(m + 2)x = 2m + 4$ cùng nhận một số âm làm nghiệm.",
          "svg": "",
          "correctAnswer": "-2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Biểu diễn nghiệm chung qua m\nPhương trình $2x-m=0$ luôn có nghiệm duy nhất $x=m/2$.\nMuốn hai phương trình cùng nhận một số âm, số này phải thỏa cả phương trình thứ hai và điều kiện $x<0$.\nBước 2: Thay vào phương trình còn lại\nThay $x=m/2$ vào $(m+2)x=2m+4$, rồi nhân với $2$.\nĐược $m(m+2)=4m+8$, hay $m^2-2m-8=0$.\nBước 3: Tìm hai ứng viên\nPhân tích $m^2-2m-8=(m-4)(m+2)$.\nTích bằng $0$ cho $m=4$ hoặc $m=-2$; không chia cho $m+2$ vì có thể làm mất một trường hợp.\nBước 4: Kiểm tra dấu và trường hợp mất ẩn\nVới $m=4$, phương trình đầu cho $x=2>0$, nên loại.\nVới $m=-2$, phương trình đầu cho $x=-1<0$; phương trình thứ hai trở thành $0x=0$, đúng với mọi $x$, nên vẫn nhận $x=-1$.\nĐề chỉ yêu cầu cùng nhận một số âm, không yêu cầu phương trình thứ hai có nghiệm duy nhất.\nBước 5: Kết luận\nChỉ có $m=-2$ thỏa yêu cầu."
        },
        {
          "id": "l8-pt-bac-nhat-hsg-04",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chungMinh",
          "title": "Biện luận số nghiệm",
          "prompt": "Chứng minh phương trình $(m - 2)x = m^2 - 4$ có nghiệm duy nhất $x = m + 2$ khi $m ≠ 2$, và có vô số nghiệm khi $m = 2$.",
          "svg": "",
          "solution": "Bước 1: Phân tích vế phải\nDùng hiệu hai bình phương: $m^2-4=(m-2)(m+2)$.\nPhương trình là $(m-2)x=(m-2)(m+2)$.\nBước 2: Xác định trường hợp phải tách\nNhân tử $m-2$ có thể bằng $0$, nên không được chia hai vế ngay.\nTa xét $m\\ne2$ và $m=2$ riêng biệt.\nBước 3: Xét m khác 2\nKhi $m\\ne2$, chia hai vế cho $m-2\\ne0$ được $x=m+2$.\nĐây là phép biến đổi tương đương, nên chỉ có một nghiệm. Thay lại cho hai vế cùng bằng $(m-2)(m+2)$.\nBước 4: Xét m bằng 2\nThay trực tiếp vào phương trình gốc, được $0x=0$.\nMọi $x\\in\\mathbb R$ đều thỏa đẳng thức này, nên có vô số nghiệm, không chỉ riêng $x=4$.\nBước 5: Kết luận\n$m\\ne2$: nghiệm duy nhất $x=m+2$; $m=2$: mọi số thực là nghiệm. Điều phải chứng minh đã được xác nhận trong đủ hai trường hợp."
        },
        {
          "id": "l8-pt-bac-nhat-hsg-05",
          "lop": 8,
          "chuDe": "pt-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chungMinh",
          "title": "Nghiệm không phụ thuộc tham số",
          "prompt": "Cho $a ≠ b$. Chứng minh phương trình $a(x - b) = b(x - a)$ có nghiệm duy nhất không phụ thuộc a và b.",
          "svg": "",
          "solution": "Bước 1: Ghi vai trò của giả thiết\nGiả thiết $a\\ne b$ tương đương $a-b\\ne0$.\nĐiều này sẽ cho phép chia cho hệ số $a-b$ sau khi thu gọn.\nBước 2: Khai triển hai vế\nTừ $a(x-b)=b(x-a)$, được $ax-ab=bx-ab$.\nHai hạng tử hằng ở hai vế đều là $-ab$.\nBước 3: Khử phần giống nhau\nCộng $ab$ vào hai vế: $ax=bx$.\nChuyển về một vế rồi đặt $x$ làm nhân tử chung: $(a-b)x=0$.\nBước 4: Giải và kiểm tra tính duy nhất\nVì $a-b\\ne0$, chia hai vế cho số này được duy nhất $x=0$.\nThay $x=0$ vào đề: vế trái bằng $-ab$, vế phải cũng bằng $-ab$, nên nghiệm được nhận.\nBước 5: Kết luận\nNghiệm duy nhất là $x=0$ với mọi $a\\ne b$, vì vậy không phụ thuộc giá trị cụ thể của $a,b$."
        }
      ]
    },
    'da-thuc-nhieu-bien': {
      "kha": [
        {
          "id": "l8-da-thuc-nhieu-bien-kha-01",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận diện đơn thức hai biến",
          "prompt": "Biểu thức nào là đơn thức hai biến $x,y$?",
          "svg": "",
          "options": [
            "A. $3x^2+y$",
            "B. $-\\frac32x^2y$",
          "C. $\\frac{x}{y}$",
            "D. $x^2+y^2$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhắc cấu tạo đơn thức\nĐơn thức là tích của một số với các biến có số mũ nguyên không âm.\nBước 2: Kiểm tra phương án B\n$-\\frac32x^2y$ có hệ số $-3/2$, số mũ của $x$ là $2$, của $y$ là $1$.\nCả hai số mũ phù hợp định nghĩa.\nBước 3: Xét hai biểu thức có phép cộng\nA và D đều là tổng hai hạng tử không đồng dạng, không thu gọn thành một đơn thức.\nBước 4: Xét biến ở mẫu\nC là $x/y$, có biến $y$ ở mẫu nên không phải đơn thức theo định nghĩa đã nêu.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-kha-02",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân biệt hai phần biến cùng bậc",
          "prompt": "Thu gọn $4x^2y-3xy^2+2yx^2+xy^2$.",
          "svg": "",
          "options": [
            "A. $4x^2y$",
            "B. $6x^2y-4xy^2$",
            "C. $2x^2y-2xy^2$",
            "D. $6x^2y-2xy^2$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Viết cùng thứ tự phần biến\nDo phép nhân giao hoán, $yx^2=x^2y$.\nVì vậy $2yx^2$ đồng dạng với $4x^2y$.\nBước 2: Gom các hạng tử đồng dạng\nBiểu thức bằng $(4x^2y+2x^2y)+(-3xy^2+xy^2)$.\nBước 3: Cộng hệ số từng nhóm\nNhóm đầu cho $(4+2)x^2y=6x^2y$.\nNhóm sau cho $(-3+1)xy^2=-2xy^2$.\nBước 4: Kiểm tra có thể gộp thêm không\n$x^2y$ và $xy^2$ có số mũ của từng biến khác nhau, nên không đồng dạng dù cùng bậc $3$.\nBước 5: Kết luận\nKết quả là $6x^2y-2xy^2$. Chọn D."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-kha-03",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bậc của tích hai đơn thức nhiều biến",
          "prompt": "Đơn thức $M=(-2x^2y^3)(3xy)$ có bậc bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. 7",
            "B. 4",
            "C. 5",
            "D. 6"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Thu gọn hệ số\nTích hai hệ số là $(-2)\\cdot3=-6$.\nBước 2: Nhân phần biến\n$x^2\\cdot x=x^3$ và $y^3\\cdot y=y^4$ do cộng số mũ cùng cơ số.\nVậy $M=-6x^3y^4$.\nBước 3: Áp dụng định nghĩa bậc\nVới đơn thức khác $0$, bậc bằng tổng số mũ của các biến.\nỞ đây tổng là $3+4=7$.\nBước 4: Phân biệt bậc và hệ số\nHệ số $-6$ không tham gia tính bậc; cũng không chỉ lấy số mũ lớn nhất $4$.\nBước 5: Kết luận\nBậc của $M$ là $7$. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l8-da-thuc-nhieu-bien-nang-cao-01",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Trừ hai đa thức với hai phần biến",
          "prompt": "Đa thức $(3x^2y-2xy^2)-(x^2y+4xy^2)$ bằng biểu thức nào?",
          "svg": "",
          "options": [
            "A. $2x^2y+2xy^2$",
            "B. $4x^2y-6xy^2$",
            "C. $2x^2y-6xy^2$",
            "D. $2x^2y+6xy^2$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xử lý dấu trừ trước ngoặc\nTrừ đa thức nghĩa là cộng đa thức đối, nên đổi dấu từng hạng tử trong ngoặc thứ hai.\nBước 2: Bỏ ngoặc\nĐược $3x^2y-2xy^2-x^2y-4xy^2$.\nĐặc biệt $+4xy^2$ trở thành $-4xy^2$.\nBước 3: Gom theo phần biến\n$(3-1)x^2y+(-2-4)xy^2=2x^2y-6xy^2$.\nBước 4: Kiểm tra bằng phép cộng ngược\nCộng kết quả với $x^2y+4xy^2$ cho $3x^2y-2xy^2$, đúng đa thức bị trừ ban đầu.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-nang-cao-02",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhân đơn thức vào từng hạng tử",
          "prompt": "Kết quả của $-2xy(3x^2-y+2)$ là gì?",
          "svg": "",
          "options": [
            "A. $-6x^3y-2xy^2-4xy$",
            "B. $-6x^3y+2xy^2+2$",
            "C. $-6x^2y+2xy^2-4xy$",
            "D. $-6x^3y+2xy^2-4xy$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Dùng tính phân phối\nNhân $-2xy$ với từng hạng tử trong $3x^2-y+2$.\nKhông bỏ sót hạng tử hằng $2$.\nBước 2: Tính tích đầu\n$(-2xy)\\cdot3x^2=-6x^3y$ vì $x\\cdot x^2=x^3$.\nBước 3: Tính hai tích còn lại\n$(-2xy)(-y)=2xy^2$ do hai dấu âm nhân nhau thành dương.\n$(-2xy)\\cdot2=-4xy$.\nBước 4: Ghép và kiểm tra phần biến\nBa phần biến $x^3y,xy^2,xy$ khác nhau nên không cộng hệ số của chúng với nhau.\nBước 5: Kết luận\nKết quả là $-6x^3y+2xy^2-4xy$. Chọn D."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-nang-cao-03",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tìm hệ số qua những tích tạo cùng phần biến",
          "prompt": "Sau khi khai triển và thu gọn $(2x-y)(x^2+3xy-y^2)$, hệ số của $x^2y$ là bao nhiêu?",
          "svg": "",
          "options": [
            "A. 7",
            "B. 5",
            "C. -5",
            "D. 6"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định hạng tử cần theo dõi\nChỉ cần hệ số của $x^2y$, nên tìm những tích tạo đúng phần biến này.\nBước 2: Xét tích từ 2x\n$2x\\cdot3xy=6x^2y$.\nHai tích còn lại với $2x$ tạo $x^3$ và $xy^2$, không đóng góp vào hệ số cần tìm.\nBước 3: Xét tích từ âm y\n$(-y)\\cdot x^2=-x^2y$.\nHai tích còn lại tạo $xy^2$ và $y^3$.\nBước 4: Cộng hệ số đúng nhóm\nTổng đóng góp là $6-1=5$.\nKhai triển đầy đủ cũng cho $2x^3+5x^2y-5xy^2+y^3$, xác nhận hệ số này.\nBước 5: Kết luận\nChọn B: hệ số bằng $5$."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-nang-cao-04",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chia từng hạng tử cho đơn thức hai biến",
          "prompt": "Với $x\\ne0,y\\ne0$, tính $(12x^3y^2-8x^2y^3+4x^2y^2):(4x^2y^2)$.",
          "svg": "",
          "options": [
            "A. $3x-2y+1$",
            "B. $3x-2y$",
            "C. $3x+2y+1$",
            "D. $3x-2y+xy$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Kiểm tra số chia\n$x\\ne0,y\\ne0$ bảo đảm $4x^2y^2\\ne0$.\nĐược phép chia từng hạng tử của tổng cho số chia này.\nBước 2: Chia hạng tử đầu\n$12x^3y^2/(4x^2y^2)=3x$.\nChia hệ số và trừ số mũ của cùng biến.\nBước 3: Chia hai hạng tử sau\n$-8x^2y^3/(4x^2y^2)=-2y$.\n$4x^2y^2/(4x^2y^2)=1$, không phải $0$.\nBước 4: Kiểm tra bằng phép nhân\n$4x^2y^2(3x-2y+1)$ khai triển trở lại đúng đa thức ban đầu.\nBước 5: Kết luận\nThương là $3x-2y+1$. Chọn A."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-nang-cao-05",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Lập đa thức lượng vật liệu theo hai kích thước",
          "prompt": "Một bộ trang trí gồm hai miếng bìa hình chữ nhật: miếng thứ nhất có kích thước $(x+2y)$ cm và $y$ cm; miếng thứ hai có kích thước $x$ cm và $3y$ cm, với $x,y>0$. Chỉ tính phần bìa của hai miếng, không tính hao hụt. Tổng diện tích bìa là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $(4xy+2y)\\text{ cm}^2$",
            "B. $(3xy+2y^2)\\text{ cm}^2$",
            "C. $(4xy+2y^2)\\text{ cm}^2$",
            "D. $(4xy+6y^2)\\text{ cm}^2$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Kiểm tra kích thước\n$x,y>0$ nên các cạnh $x+2y,y,x,3y$ đều dương.\nDiện tích mỗi hình chữ nhật bằng tích hai kích thước.\nBước 2: Tính miếng thứ nhất\n$S_1=(x+2y)y=xy+2y^2$ cm².\nHạng tử $2y$ nhân với $y$ phải thành $2y^2$.\nBước 3: Tính miếng thứ hai\n$S_2=x\\cdot3y=3xy$ cm².\nBước 4: Cộng diện tích hai miếng\n$S_1+S_2=xy+2y^2+3xy=4xy+2y^2$ cm².\nĐề không tính hao hụt nên không thêm phần diện tích nào khác.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-nang-cao-06",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính từ quan hệ giữa hai biến",
          "prompt": "Biết $x-2y=3$ và $xy=4$. Tính $P=2x^2y-4xy^2+5$ mà không cần tìm riêng $x,y$.",
          "svg": "",
          "options": [
            "A. 17",
            "B. 11",
            "C. 24",
            "D. 29"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận ra dữ kiện dưới dạng tích và hiệu\nĐề cho $xy=4$ và $x-2y=3$.\nTa tìm cách viết phần chứa biến của $P$ bằng hai biểu thức này.\nBước 2: Đặt nhân tử chung\n$2x^2y-4xy^2=2xy(x-2y)$.\nVậy $P=2xy(x-2y)+5$.\nBước 3: Thay các quan hệ\nCó $P=2\\cdot4\\cdot3+5$.\nKhông cần tìm riêng từng biến.\nBước 4: Tính và kiểm tra phép biến đổi\n$2\\cdot4\\cdot3=24$, nên $P=29$.\nNhân ngược $2xy$ vào ngoặc cho đúng hai hạng tử gốc, nên việc thay thế là hợp lệ.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-nang-cao-07",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Triệt tiêu đồng thời hai phần biến không đồng dạng",
          "prompt": "Cho $P(x,y)=(m+n)x^2y+(2m-n)xy^2-(5x+y)xy+y^2$. Cặp $(m,n)$ nào làm $P(x,y)=y^2$ với mọi số thực $x,y$?",
          "svg": "",
          "options": [
            "A. $(2,2)$",
            "B. $(2,3)$",
            "C. $(3,2)$",
            "D. $(1,4)$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Khai triển phần trừ\n$-(5x+y)xy=-5x^2y-xy^2$.\nBước 2: Gom các hạng tử đồng dạng\n$P=(m+n-5)x^2y+(2m-n-1)xy^2+y^2$.\nBước 3: Dùng yêu cầu đúng với mọi x,y\nĐể chỉ còn $y^2$, hai hệ số của $x^2y$ và $xy^2$ phải bằng $0$.\nVì vậy $m+n=5$ và $2m-n=1$.\nBước 4: Tìm và kiểm tra cặp số\nTừ $n=5-m$, thay vào đẳng thức sau được $3m-5=1$, nên $m=2,n=3$.\nThử lại: $2+3-5=0$ và $4-3-1=0$; hai hạng tử cần loại đều triệt tiêu với mọi biến.\nBước 5: Kết luận\nChọn B: $(m,n)=(2,3)$."
        }
      ],
      "hsg": [
        {
          "id": "l8-da-thuc-nhieu-bien-hsg-01",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tìm hệ số của đa thức chưa biết",
          "prompt": "Cho $P=ax^2y+2xy^2$ và $Q=3x^2y-xy^2$. Biết $2P-Q=7x^2y+5xy^2$ với mọi số thực $x,y$. Tìm $a$.",
          "svg": "",
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính hai lần đa thức P\nNhân từng hạng tử với $2$: $2P=2ax^2y+4xy^2$.\nCần giữ hai phần biến $x^2y$ và $xy^2$ riêng vì chúng không đồng dạng.\nBước 2: Trừ đa thức Q\nCó $2P-Q=2ax^2y+4xy^2-(3x^2y-xy^2)$.\nBỏ ngoặc có dấu trừ: $2P-Q=(2a-3)x^2y+5xy^2$.\nBước 3: Đối chiếu hệ số\nĐẳng thức phải đúng với mọi $x,y$, nên hệ số của $x^2y$ phải bằng $7$.\nDo đó $2a-3=7$, suy ra $2a=10$ và $a=5$.\nBước 4: Kiểm tra toàn bộ đẳng thức\nVới $a=5$, hệ số thứ nhất là $2\\cdot5-3=7$.\nHệ số của $xy^2$ đã bằng $5$, nên cả hai hạng tử đều khớp vế phải, không chỉ một phần.\nBước 5: Kết luận\nGiá trị cần tìm là $a=5$."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-hsg-02",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm số mũ từ điều kiện của phép chia",
          "prompt": "Cho đơn thức $M=x^my^n$ có bậc $5$, trong đó $m,n$ là các số nguyên dương. Đa thức $6x^5y^3-9x^3y^4$ chia hết cho $M$, và thương có một hạng tử không chứa $x$. Tính $m+2n$.",
          "svg": "",
          "correctAnswer": "7",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Dùng điều kiện về bậc\nĐơn thức $x^my^n$ có bậc $m+n$, nên $m+n=5$.\nTheo đề, $m,n$ là số nguyên dương.\nBước 2: Dùng điều kiện chia hết\nMỗi hạng tử của đa thức phải chia hết cho $x^my^n$.\nVì số mũ nhỏ nhất của $x$ là $3$ và của $y$ là $3$, cần $m\\le3$, $n\\le3$.\nThương có dạng $6x^{5-m}y^{3-n}-9x^{3-m}y^{4-n}$.\nBước 3: Dùng hạng tử không chứa x\nSố mũ của $x$ trong ít nhất một hạng tử của thương phải bằng $0$.\nVì thế $5-m=0$ hoặc $3-m=0$. Khả năng $m=5$ trái $m\\le3$, nên chỉ nhận $m=3$.\nBước 4: Tìm n và kiểm tra thương\nTừ $m+n=5$ được $n=2$.\nChia đa thức cho $x^3y^2$ được $6x^2y-9y^2$; hạng tử $-9y^2$ không chứa $x$, đúng yêu cầu.\nĐây là phép chia đa thức theo số mũ, không phải thay biến bằng một giá trị riêng.\nBước 5: Kết luận\n$m+2n=3+2\\cdot2=7$."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-hsg-03",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tổ hợp các quan hệ giữa hai phần biến",
          "prompt": "Biết $2x^2y-xy^2=7$ và $x^2y+3xy^2=14$. Tính $T=x^2y+xy^2$.",
          "svg": "",
          "correctAnswer": "8",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định tổng cần tạo\nCần tính $T=x^2y+xy^2$, nên tìm cách kết hợp hai giả thiết để hệ số của $x^2y$ và $xy^2$ bằng nhau.\nKhông cần tìm riêng từng giá trị của $x,y$.\nBước 2: Nhân giả thiết thứ nhất\nNhân $2x^2y-xy^2=7$ với $2$, được $4x^2y-2xy^2=14$.\nBước 3: Nhân giả thiết thứ hai rồi cộng\nNhân $x^2y+3xy^2=14$ với $3$, được $3x^2y+9xy^2=42$.\nCộng hai đẳng thức mới: $7x^2y+7xy^2=56$, tức $7T=56$.\nBước 4: Tính và kiểm tra bằng các đại lượng trung gian\nSuy ra $T=8$.\nCó thể kiểm thêm: lấy ba lần giả thiết đầu cộng giả thiết sau cho $7x^2y=35$, nên $x^2y=5$; từ đó $xy^2=3$ và tổng đúng bằng $8$.\nBước 5: Kết luận\nGiá trị cần nhập là $8$."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-hsg-04",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giải thích điều kiện diện tích không đổi",
          "prompt": "Một hình chữ nhật có kích thước $x,y$. Tăng kích thước thứ nhất thêm $a$ và giảm kích thước thứ hai đi $b$, với $x>0,a>0,0<b<y$. Chứng minh diện tích mới bằng diện tích cũ khi và chỉ khi $ay=b(x+a)$.",
          "svg": "",
          "solution": "Bước 1: Kiểm tra kích thước hai hình\nGiả thiết $x>0$, $a>0$, $0<b<y$ bảo đảm $x,y,x+a,y-b$ đều dương.\nVì thế cả hình chữ nhật cũ và mới đều có diện tích xác định, không suy biến.\nBước 2: Viết hai diện tích\nDiện tích cũ là $S=xy$.\nDiện tích mới là $S'=(x+a)(y-b)$.\nBước 3: Tính hiệu diện tích\nKhai triển: $S'=xy-bx+ay-ab$.\nDo đó $S'-S=ay-bx-ab=ay-b(x+a)$.\nBước 4: Chứng minh cả hai chiều\nNếu $S'=S$ thì hiệu bằng $0$, nên $ay-b(x+a)=0$, tức $ay=b(x+a)$.\nNgược lại, nếu $ay=b(x+a)$ thì biểu thức hiệu bằng $0$, nên $S'=S$.\nBước 5: Kết luận\nDiện tích mới bằng diện tích cũ khi và chỉ khi $ay=b(x+a)$, trên các điều kiện kích thước của đề."
        },
        {
          "id": "l8-da-thuc-nhieu-bien-hsg-05",
          "lop": 8,
          "chuDe": "da-thuc-nhieu-bien",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Biện luận sự phụ thuộc một biến",
          "prompt": "Cho $a,b$ là các hằng số thực và $P(x,y)=(a-2)x^2y+(b+1)xy^2+3y^2$. Chứng minh: với mọi $y$, giá trị của $P$ không thay đổi khi $x$ thay đổi khi và chỉ khi $a=2,b=-1$.",
          "svg": "",
          "solution": "Bước 1: Chứng minh chiều đủ\nNếu $a=2$, $b=-1$ thì hai hệ số chứa $x$ đều bằng $0$.\nKhi đó $P(x,y)=3y^2$; với mỗi $y$ cố định, đổi $x$ không đổi giá trị $P$.\nBước 2: Diễn đạt chiều cần\nGiả sử tính chất không phụ thuộc $x$ đúng với mọi $y$.\nKhi đó $P(x,y)=P(0,y)=3y^2$ với mọi $x,y$.\nSuy ra $(a-2)x^2y+(b+1)xy^2=0$ với mọi $x,y$.\nBước 3: Chọn các giá trị để tìm hệ số\nLấy $y=1$, rồi lần lượt lấy $x=1$ và $x=-1$.\nTa được $(a-2)+(b+1)=0$ và $(a-2)-(b+1)=0$.\nBước 4: Giải và xét tính đầy đủ\nCộng hai đẳng thức: $2(a-2)=0$, nên $a=2$; thay lại được $b=-1$.\nKhông chỉ xét $y=0$ vì khi ấy $P=0$ với mọi $a,b$, không ràng buộc được hai hệ số.\nBước 5: Kết luận\nHai chiều đều đúng: $P$ không đổi theo $x$ với mọi $y$ khi và chỉ khi $a=2,b=-1$."
        }
      ]
    },
    'hang-dang-thuc': {
      "kha": [
        {
          "id": "l8-hang-dang-thuc-kha-01",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bình phương của một tổng",
          "prompt": "Hằng đẳng thức nào đúng với mọi số thực $a,b$?",
          "svg": "",
          "options": [
            "A. $(a+b)^2=a^2+ab+b^2$",
            "B. $(a+b)^2=a^2+2ab+b^2$",
            "C. $(a+b)^2=2a^2+2b^2$",
            "D. $(a+b)^2=a^2+b^2$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Viết bình phương thành tích\n$(a+b)^2=(a+b)(a+b)$.\nBước 2: Nhân từng hạng tử\nDùng tính phân phối được $a^2+ab+ba+b^2$.\nBước 3: Thu gọn hạng tử giữa\nVì $ab=ba$, có $ab+ba=2ab$.\nDo đó kết quả là $a^2+2ab+b^2$.\nBước 4: Kiểm tra tính tổng quát\nCác phép nhân và cộng trên đúng với mọi số thực $a,b$.\nKhông được bỏ hạng tử $2ab$ hay chỉ giữ một lần tích $ab$.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-hang-dang-thuc-kha-02",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bình phương của một hiệu có hệ số",
          "prompt": "Khai triển $(2x-3y)^2$.",
          "svg": "",
          "options": [
            "A. $4x^2-6xy+9y^2$",
            "B. $4x^2+12xy+9y^2$",
            "C. $4x^2-12xy+9y^2$",
            "D. $4x^2-9y^2$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chọn hằng đẳng thức\nDùng $(A-B)^2=A^2-2AB+B^2$ với $A=2x$, $B=3y$.\nBước 2: Tính hai bình phương\n$(2x)^2=4x^2$, $(3y)^2=9y^2$.\nPhải bình phương cả hệ số và biến.\nBước 3: Tính hạng tử giữa\n$-2(2x)(3y)=-12xy$.\nDấu âm do bình phương của một hiệu.\nBước 4: Ghép kết quả\nĐược $4x^2-12xy+9y^2$.\nHạng tử cuối vẫn dương vì là bình phương.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-hang-dang-thuc-kha-03",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân tích hiệu hai bình phương",
          "prompt": "Phân tích $25x^2-4y^2$ thành nhân tử.",
          "svg": "",
          "options": [
            "A. $(5x-2y)(5x+2y)$",
            "B. $(5x-4y)(5x+4y)$",
            "C. $(25x-2y)(x+2y)$",
            "D. $(5x-2y)^2$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhận ra hai bình phương\n$25x^2=(5x)^2$ và $4y^2=(2y)^2$.\nBước 2: Chọn công thức\nHiệu hai bình phương có dạng $A^2-B^2=(A-B)(A+B)$.\nBước 3: Áp dụng\nVới $A=5x,B=2y$, được $(5x-2y)(5x+2y)$.\nBước 4: Kiểm tra bằng nhân ngược\nHai tích chéo $10xy$ và $-10xy$ triệt tiêu, còn $25x^2-4y^2$.\nHai nhân tử phải trái dấu ở phần $2y$, không phải bình phương cùng một hiệu.\nBước 5: Kết luận\nChọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l8-hang-dang-thuc-nang-cao-01",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Lập phương của một tổng",
          "prompt": "Khai triển $(x+2y)^3$.",
          "svg": "",
          "options": [
            "A. $x^3+8y^3$",
            "B. $x^3+3x^2y+6xy^2+8y^3$",
            "C. $x^3+6x^2y+12xy^2+2y^3$",
            "D. $x^3+6x^2y+12xy^2+8y^3$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Chọn công thức lập phương tổng\n$(A+B)^3=A^3+3A^2B+3AB^2+B^3$.\nỞ đây $A=x$, $B=2y$.\nBước 2: Tính hai hạng tử đầu\n$A^3=x^3$ và $3A^2B=3x^2\\cdot2y=6x^2y$.\nBước 3: Tính hai hạng tử sau\n$3AB^2=3x(2y)^2=12xy^2$.\n$B^3=(2y)^3=8y^3$.\nBước 4: Ghép đầy đủ bốn phần\nKết quả là $x^3+6x^2y+12xy^2+8y^3$.\nKhông chỉ lập phương riêng hai số hạng vì còn hai tích ở giữa.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-hang-dang-thuc-nang-cao-02",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận dạng lập phương của một hiệu",
          "prompt": "Biết $x-2y=-3$. Tính $E=x^3-6x^2y+12xy^2-8y^3$.",
          "svg": "",
          "options": [
            "A. 27",
            "B. -9",
            "C. -27",
            "D. -6"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhận diện các cơ số\nHạng tử đầu là $x^3$, hạng tử cuối là $-(2y)^3$.\nTa kiểm hai hạng tử giữa theo lập phương của hiệu $x-2y$.\nBước 2: Đối chiếu hạng tử giữa\n$-3x^2(2y)=-6x^2y$ và $3x(2y)^2=12xy^2$.\nCả hai đều khớp biểu thức $E$.\nBước 3: Viết dạng gọn\nDo đó $E=(x-2y)^3$.\nThay giả thiết $x-2y=-3$ được $E=(-3)^3$.\nBước 4: Tính đúng dấu\n$(-3)^3=(-3)(-3)(-3)=-27$.\nLập phương của số âm vẫn âm, khác với bình phương.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-hang-dang-thuc-nang-cao-03",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính qua nhân tử của tổng hai lập phương",
          "prompt": "Biết $x+2y=5$ và $x^2-2xy+4y^2=7$. Tính $x^3+8y^3$.",
          "svg": "",
          "options": [
            "A. 12",
            "B. 35",
            "C. 125",
            "D. 7"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhận diện tổng hai lập phương\n$x^3+8y^3=x^3+(2y)^3$.\nBước 2: Chọn hằng đẳng thức\n$A^3+B^3=(A+B)(A^2-AB+B^2)$.\nDùng $A=x$, $B=2y$.\nBước 3: Phân tích theo dữ kiện\nĐược $x^3+8y^3=(x+2y)(x^2-2xy+4y^2)$.\nHai nhân tử chính là hai biểu thức đã biết giá trị.\nBước 4: Thay và tính\nGiá trị bằng $5\\cdot7=35$.\nKhông dùng $(x+2y)^3=125$ vì tổng hai lập phương khác lập phương của tổng.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-hang-dang-thuc-nang-cao-04",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hiệu hai lập phương với cơ số là biểu thức",
          "prompt": "Phân tích $(2a-b)^3-8b^3$ thành nhân tử.",
          "svg": "",
          "options": [
            "A. $(2a-3b)(4a^2-3b^2)$",
            "B. $(2a-b)(4a^2+3b^2)$",
            "C. $(2a-3b)(4a^2+4ab+3b^2)$",
            "D. $(2a-3b)(4a^2+3b^2)$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đặt hai biểu thức làm cơ số\nĐặt $A=2a-b$, $B=2b$; biểu thức là $A^3-B^3$.\nBước 2: Dùng hiệu hai lập phương\n$A^3-B^3=(A-B)(A^2+AB+B^2)$.\nNhân tử đầu là $A-B=2a-3b$.\nBước 3: Khai triển nhân tử thứ hai\n$A^2=4a^2-4ab+b^2$, $AB=4ab-2b^2$, $B^2=4b^2$.\nBước 4: Thu gọn\nCộng ba phần: hai hạng tử $ab$ triệt tiêu, còn $4a^2+3b^2$.\nVậy tích là $(2a-3b)(4a^2+3b^2)$; dấu trước $3b^2$ là dương.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-hang-dang-thuc-nang-cao-05",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhân tử chung với hai ngoặc đối dấu",
          "prompt": "Phân tích $3x(x-y)+2y(y-x)$ thành nhân tử.",
          "svg": "",
          "options": [
            "A. $(x-y)(3x-2y)$",
            "B. $(x-y)(3x+2y)$",
            "C. $(x+y)(3x-2y)$",
            "D. $(x+y)(3x+2y)$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhận ra hai ngoặc đối nhau\n$y-x=-(x-y)$.\nMuốn đặt nhân tử chung cần đổi chúng về cùng dạng.\nBước 2: Đổi dấu đúng cả hạng tử\n$2y(y-x)=-2y(x-y)$.\nBước 3: Đặt nhân tử chung\nBiểu thức thành $3x(x-y)-2y(x-y)=(x-y)(3x-2y)$.\nBước 4: Kiểm tra bằng nhân ngược\nKhai triển tích cho $3x^2-5xy+2y^2$.\nBiểu thức ban đầu cũng cho $3x^2-3xy+2y^2-2xy$, cùng kết quả.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-hang-dang-thuc-nang-cao-06",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Nhóm bốn hạng tử để xuất hiện nhân tử chung",
          "prompt": "Phân tích $ax-ay-bx+by$ thành nhân tử.",
          "svg": "",
          "options": [
            "A. $(a+b)(x-y)$",
            "B. $(a-b)(x+y)$",
            "C. $(a-b)(x-y)$",
            "D. $(a+b)(x+y)$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhóm hạng tử theo hệ số\nViết $ax-ay-bx+by=(ax-ay)+(-bx+by)$.\nBước 2: Đặt nhân tử chung từng nhóm\nNhóm đầu bằng $a(x-y)$.\nNhóm sau bằng $-b(x-y)$ vì $-b\\cdot(-y)=by$.\nBước 3: Đặt tiếp ngoặc chung\n$a(x-y)-b(x-y)=(a-b)(x-y)$.\nBước 4: Kiểm tra đủ bốn dấu\nNhân ngược được $ax-ay-bx+by$, đúng biểu thức gốc.\nKhông đổi $a-b$ thành $a+b$ vì hệ số của nhóm thứ hai là $-b$.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-hang-dang-thuc-nang-cao-07",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Phối hợp đặt nhân tử chung và hằng đẳng thức",
          "prompt": "Phân tích hoàn toàn $2x^3-8xy^2+4x^2-8xy$ thành nhân tử.",
          "svg": "",
          "options": [
            "A. $2x(x-2y)(x+2y-2)$",
            "B. $2x(x-2y)(x+2y+2)$",
            "C. $2(x-2y)(x+2y+2)$",
            "D. $2x(x+2y)(x-2y+2)$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đặt nhân tử chung toàn đa thức\nMỗi hạng tử có nhân tử $2x$.\nBiểu thức bằng $2x[x^2-4y^2+2x-4y]$.\nBước 2: Nhóm phần trong ngoặc\nViết thành $(x^2-4y^2)+(2x-4y)$.\nBước 3: Phân tích từng nhóm\nHiệu bình phương là $(x-2y)(x+2y)$; nhóm sau là $2(x-2y)$.\nBước 4: Đặt nhân tử chung lần nữa\nTrong ngoặc bằng $(x-2y)(x+2y+2)$.\nGiữ nhân tử $2x$ bên ngoài, được $2x(x-2y)(x+2y+2)$.\nĐây là phân tích đa thức, không chia cho biến nên vẫn đúng khi một nhân tử bằng $0$.\nBước 5: Kết luận\nChọn B."
        }
      ],
      "hsg": [
        {
          "id": "l8-hang-dang-thuc-hsg-01",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tìm bình phương từ tổng và hiệu",
          "prompt": "Biết $(a+b)(a-b)=21$ và $a^2+b^2=29$. Tính $b^2$.",
          "svg": "",
          "correctAnswer": "4",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nhận diện hằng đẳng thức\nTích $(a+b)(a-b)$ là hiệu hai bình phương $a^2-b^2$.\nDo đó giả thiết đầu cho $a^2-b^2=21$.\nBước 2: Chọn phép kết hợp để khử a\nTa còn biết $a^2+b^2=29$.\nLấy đẳng thức này trừ đẳng thức vừa tìm sẽ khử được $a^2$.\nBước 3: Thực hiện phép trừ\nCó $(a^2+b^2)-(a^2-b^2)=29-21$.\nBỏ ngoặc đúng dấu, được $2b^2=8$, nên $b^2=4$.\nBước 4: Kiểm tra tính phù hợp\nTừ $a^2+b^2=29$ có $a^2=25$.\nHai giá trị bình phương $25,4$ cho tổng $29$ và hiệu $21$ như đề; chẳng hạn $a=5,b=2$ thỏa dữ kiện.\nBước 5: Kết luận\nĐề hỏi $b^2$, nên nhập $4$, không cần chọn dấu của $b$."
        },
        {
          "id": "l8-hang-dang-thuc-hsg-02",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tổng lập phương qua tổng và tổng bình phương",
          "prompt": "Hai số thực $a,b$ thỏa $a+b=7$ và $a^2+b^2=25$. Tính $a^3+b^3$.",
          "svg": "",
          "correctAnswer": "91",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm tích từ bình phương tổng\nDùng $(a+b)^2=a^2+b^2+2ab$.\nThay dữ kiện: $7^2=25+2ab$, nên $2ab=24$ và $ab=12$.\nBước 2: Chọn công thức tổng hai lập phương\nKhai triển $(a+b)^3=a^3+3a^2b+3ab^2+b^3$.\nHai hạng tử giữa bằng $3ab(a+b)$.\nBước 3: Biểu diễn đại lượng cần tính\nChuyển phần giữa sang vế kia: $a^3+b^3=(a+b)^3-3ab(a+b)$.\nCông thức chỉ dùng tổng và tích vừa biết, không yêu cầu tìm từng số.\nBước 4: Thay và tính\nCó $a^3+b^3=7^3-3\\cdot12\\cdot7=343-252=91$.\nKiểm tra với hai số $3,4$: tổng bằng $7$, tổng bình phương bằng $25$, và tổng lập phương $27+64=91$.\nBước 5: Kết luận\nGiá trị cần nhập là $91$."
        },
        {
          "id": "l8-hang-dang-thuc-hsg-03",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Xác định hệ số và chọn đúng dấu",
          "prompt": "Tìm $k$ để $4x^2+(k-1)xy+9y^2$ bằng $(2x-cy)^2$ với mọi số thực $x,y$, trong đó $c$ là một hằng số dương.",
          "svg": "",
          "correctAnswer": "-11",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Khai triển bình phương đã cho\nDùng $(u-v)^2=u^2-2uv+v^2$ với $u=2x$, $v=cy$.\nĐược $(2x-cy)^2=4x^2-4cxy+c^2y^2$.\nBước 2: Đối chiếu hệ số\nVì hai đa thức bằng nhau với mọi $x,y$, cần $c^2=9$ và $k-1=-4c$.\nHệ số của $x^2$ đã bằng $4$ ở cả hai bên.\nBước 3: Dùng điều kiện dương\nTừ $c^2=9$ có $c=3$ hoặc $c=-3$.\nĐề cho $c>0$, nên chỉ nhận $c=3$.\nBước 4: Tính k và thử lại\n$k-1=-4\\cdot3=-12$, nên $k=-11$.\nKhi đó đa thức là $4x^2-12xy+9y^2=(2x-3y)^2$, đúng yêu cầu. Giá trị $c=-3$ đã bị loại nên không sinh thêm đáp án.\nBước 5: Kết luận\n$k=-11$."
        },
        {
          "id": "l8-hang-dang-thuc-hsg-04",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hệ thức lập phương khi tổng ba số bằng không",
          "prompt": "Cho ba số thực $a,b,c$ thỏa $a+b+c=0$. Chứng minh $a^3+b^3+c^3=3abc$.",
          "svg": "",
          "solution": "Bước 1: Sử dụng tổng bằng không\nTừ $a+b+c=0$, biểu diễn $c=-(a+b)$.\nMục đích là đưa tổng ba lập phương về một biểu thức dùng hằng đẳng thức lập phương của tổng.\nBước 2: Thay vào vế trái\nVì lập phương giữ dấu âm, có $c^3=-(a+b)^3$.\nDo đó $a^3+b^3+c^3=a^3+b^3-(a+b)^3$.\nBước 3: Khai triển và triệt tiêu\n$(a+b)^3=a^3+3a^2b+3ab^2+b^3$.\nTrừ toàn bộ biểu thức này, các hạng tử $a^3,b^3$ triệt tiêu, còn $-3a^2b-3ab^2$.\nBước 4: Đặt nhân tử chung và dùng lại giả thiết\nCó $-3a^2b-3ab^2=-3ab(a+b)$.\nVì $a+b=-c$, kết quả bằng $-3ab(-c)=3abc$.\nKhông chia cho biến nào nên lập luận vẫn đúng khi có số bằng $0$.\nBước 5: Kết luận\n$a^3+b^3+c^3=3abc$ với mọi ba số thực thỏa $a+b+c=0$."
        },
        {
          "id": "l8-hang-dang-thuc-hsg-05",
          "lop": 8,
          "chuDe": "hang-dang-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh chia hết bằng phân tích hiệu hai bình phương",
          "prompt": "Cho $a,b$ là các số nguyên khác $0$. Chứng minh $(a+b)^4-(a-b)^4$ chia hết cho $8ab$.",
          "svg": "",
          "solution": "Bước 1: Xác định mục tiêu chia hết\nCần viết biểu thức thành $8ab$ nhân với một số nguyên.\nGiả thiết $a,b$ nguyên khác $0$ bảo đảm số chia $8ab\\ne0$.\nBước 2: Áp dụng hiệu hai bình phương\nCoi $(a+b)^4$ và $(a-b)^4$ là bình phương của $(a+b)^2$ và $(a-b)^2$.\nHiệu bằng $[(a+b)^2-(a-b)^2][(a+b)^2+(a-b)^2]$.\nBước 3: Rút gọn từng ngoặc\nKhai triển hai bình phương, hiệu của chúng là $4ab$.\nTổng của chúng là $2a^2+2b^2=2(a^2+b^2)$.\nBước 4: Ghép các nhân tử\nBiểu thức ban đầu bằng $4ab\\cdot2(a^2+b^2)=8ab(a^2+b^2)$.\nVì $a,b$ nguyên, $a^2+b^2$ là số nguyên; điều này đúng cả khi $ab$ âm.\nBước 5: Kết luận\nThương khi chia cho $8ab$ là số nguyên $a^2+b^2$, nên biểu thức chia hết cho $8ab$."
        }
      ]
    },
    'ham-so': {
      "kha": [
        {
          "id": "l8-ham-so-kha-01",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Mỗi đầu vào có một đầu ra",
          "prompt": "Mỗi bảng dưới đây ghép hàng trên $x$ với hàng dưới $y$ theo từng cột. Bảng nào biểu diễn $y$ là hàm số của $x$?",
          "svg": "",
          "options": [
            "A. $\\begin{array}{c|ccc}x&0&0&1\\\\y&1&2&3\\end{array}$",
            "B. $\\begin{array}{c|ccc}x&-1&0&1\\\\y&-1&1&3\\end{array}$",
            "C. $\\begin{array}{c|ccc}x&-1&1&1\\\\y&-1&2&3\\end{array}$",
            "D. $\\begin{array}{c|ccc}x&0&1&0\\\\y&1&3&-1\\end{array}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhắc điều kiện hàm số\nMỗi giá trị $x$ trong bảng phải được ghép với đúng một giá trị $y$.\nMột giá trị $x$ không thể đồng thời cho hai kết quả khác nhau.\nBước 2: Kiểm tra bảng B\nBa giá trị $x=-1,0,1$ khác nhau, lần lượt ghép với $y=-1,1,3$.\nMỗi đầu vào chỉ có một đầu ra, nên bảng B thỏa điều kiện.\nBước 3: Kiểm tra A và C\nA ghép $x=0$ với cả $1$ và $2$.\nC ghép $x=1$ với cả $2$ và $3$; hai bảng đều vi phạm định nghĩa.\nBước 4: Kiểm tra D\nD ghép $x=0$ với $1$ và $-1$, cũng cho hai giá trị khác nhau.\nKhông xét chỉ số cột; phải so sánh chính các giá trị $x$.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-ham-so-kha-02",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Đọc toạ độ điểm trên đường thẳng",
          "prompt": "Trên hệ trục bên dưới, hai trục cùng đơn vị. Điểm $M$ có toạ độ nào?",
          "svg": "<svg class=\"math-svg\" viewBox=\"0 0 360 360\" width=\"100%\" role=\"img\" aria-label=\"Đồ thị đường thẳng trên hệ trục cùng đơn vị\"><g data-panel=\"0\" data-origin-x=\"180\" data-origin-y=\"172\" data-scale=\"26.4\" transform=\"translate(0 0)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><line x1=\"48\" y1=\"304\" x2=\"48\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"74.4\" y1=\"304\" x2=\"74.4\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"100.8\" y1=\"304\" x2=\"100.8\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"127.19999999999999\" y1=\"304\" x2=\"127.19999999999999\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"153.6\" y1=\"304\" x2=\"153.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"180\" y1=\"304\" x2=\"180\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"206.39999999999998\" y1=\"304\" x2=\"206.39999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"232.79999999999998\" y1=\"304\" x2=\"232.79999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"259.2\" y1=\"304\" x2=\"259.2\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"285.6\" y1=\"304\" x2=\"285.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"312\" y1=\"304\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"304\" x2=\"312\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"277.6\" x2=\"312\" y2=\"277.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"251.2\" x2=\"312\" y2=\"251.2\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"224.79999999999998\" x2=\"312\" y2=\"224.79999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"198.39999999999998\" x2=\"312\" y2=\"198.39999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"172\" x2=\"312\" y2=\"172\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"145.6\" x2=\"312\" y2=\"145.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"119.19999999999999\" x2=\"312\" y2=\"119.19999999999999\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"92.8\" x2=\"312\" y2=\"92.8\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"66.4\" x2=\"312\" y2=\"66.4\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"40\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"48\" y1=\"172\" x2=\"324\" y2=\"172\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 318 168 L 324 172 L 318 176\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"180\" y1=\"304\" x2=\"180\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 176 34 L 180 28 L 184 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"333\" y=\"176\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"193\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"171\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"48\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-5</text><text x=\"74.4\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-4</text><text x=\"100.8\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-3</text><text x=\"127.19999999999999\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"153.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"206.39999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"232.79999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"259.2\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"285.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"312\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">5</text><text x=\"171\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-5</text><text x=\"171\" y=\"281.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-4</text><text x=\"171\" y=\"255.2\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-3</text><text x=\"171\" y=\"228.79999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"171\" y=\"202.39999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"171\" y=\"149.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"171\" y=\"123.19999999999999\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"171\" y=\"96.8\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"171\" y=\"70.4\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"171\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><line data-graph=\"d1\" data-a=\"-1\" data-b=\"1\" x1=\"312\" y1=\"277.6\" x2=\"74.4\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><path d=\"M 127.19999999999999 172 L 127.19999999999999 92.8 L 180 92.8\" fill=\"none\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><circle data-point=\"M\" data-x=\"-2\" data-y=\"3\" cx=\"127.19999999999999\" cy=\"92.8\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"137.2\" y=\"82.8\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">M</text></g></svg>",
          "options": [
            "A. $(3;-2)$",
            "B. $(-2;-3)$",
            "C. $(2;3)$",
            "D. $(-2;3)$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định thứ tự tọa độ\nCặp tọa độ được viết theo thứ tự hoành độ trước, tung độ sau: $(x;y)$.\nBước 2: Đọc hoành độ\nĐường gióng từ $M$ xuống trục ngang gặp vạch $-2$, nên $x=-2$.\nĐiểm nằm bên trái trục tung nên hoành độ âm.\nBước 3: Đọc tung độ\nĐường gióng sang trục đứng gặp vạch $3$, nên $y=3$.\nĐiểm nằm phía trên trục hoành nên tung độ dương.\nBước 4: Ghép và kiểm tra\nTọa độ là $(-2;3)$; không đảo thứ tự thành $(3;-2)$ hoặc đổi dấu vì nhầm trục.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-ham-so-kha-03",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giá trị hàm số bậc nhất",
          "prompt": "Cho $f(x)=-3x+2$, xác định với mọi số thực $x$. Tính $f(-2)$.",
          "svg": "",
          "options": [
            "A. 8",
            "B. -4",
            "C. 4",
            "D. -8"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Hiểu kí hiệu cần tính\n$f(-2)$ là giá trị của công thức khi thay $x$ bằng $-2$.\nHàm xác định với mọi số thực nên được phép thay giá trị này.\nBước 2: Thay cả dấu âm\n$f(-2)=-3\\cdot(-2)+2$.\nĐặt $-2$ trong ngoặc để tránh đọc thành phép trừ.\nBước 3: Thực hiện phép nhân trước\n$(-3)(-2)=6$ vì tích hai số âm dương.\nBước 4: Cộng phần hằng\n$f(-2)=6+2=8$.\nDấu của hệ số $-3$ không làm mọi giá trị hàm đều âm.\nBước 5: Kết luận\nChọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l8-ham-so-nang-cao-01",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hệ số góc sau thu gọn công thức",
          "prompt": "Viết $y=2(x-1)-3x+5$ dưới dạng $y=ax+b$. Cặp $(a,b)$ là gì?",
          "svg": "",
          "options": [
            "A. $(1;3)$",
            "B. $(-1;7)$",
            "C. $(-1;3)$",
            "D. $(2;5)$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Khai triển trước khi đọc hệ số\n$2(x-1)=2x-2$, nên $y=2x-2-3x+5$.\nKhông đọc $a,b$ từ biểu thức chưa thu gọn.\nBước 2: Gom hạng tử chứa x\n$2x-3x=-x$.\nBước 3: Gom hằng số\n$-2+5=3$, nên $y=-x+3$.\nBước 4: Đối chiếu dạng chuẩn\nSo với $y=ax+b$, có $a=-1$ và $b=3$.\n$a\\ne0$ nên đây là hàm số bậc nhất.\nBước 5: Kết luận\nChọn C: $(a,b)=(-1;3)$."
        },
        {
          "id": "l8-ham-so-nang-cao-02",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai điểm cùng thuộc một đồ thị",
          "prompt": "Cặp điểm nào sau đây cùng thuộc đồ thị $y=-2x+3$?",
          "svg": "",
          "options": [
            "A. $(-1;1)$ và $(2;-1)$",
            "B. $(-1;5)$ và $(2;1)$",
            "C. $(-1;-5)$ và $(2;7)$",
            "D. $(-1;5)$ và $(2;-1)$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Dùng điều kiện điểm thuộc đồ thị\nĐiểm $(x;y)$ thuộc đường thẳng khi tọa độ thỏa $y=-2x+3$.\nCần kiểm cả hai điểm trong một phương án.\nBước 2: Tính tại hoành độ âm 1\nVới $x=-1$, có $y=-2(-1)+3=5$.\nĐiểm đúng tương ứng là $(-1;5)$.\nBước 3: Tính tại hoành độ 2\nVới $x=2$, có $y=-4+3=-1$.\nĐiểm đúng tương ứng là $(2;-1)$.\nBước 4: Đối chiếu cặp điểm\nChỉ phương án D chứa đồng thời hai điểm vừa kiểm.\nMột điểm đúng chưa đủ nếu điểm còn lại có tung độ sai.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-ham-so-nang-cao-03",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Chọn đường thẳng từ bảng giá trị",
          "prompt": "Một hàm số bậc nhất có bảng $\\begin{array}{c|ccc}x&-1&0&2\\\\y&3&2&0\\end{array}$. Dùng các điểm trong bảng để chọn đồ thị đúng trong bốn hình. Hai trục ở mọi hình có cùng đơn vị.",
          "svg": "<svg class=\"math-svg\" viewBox=\"0 0 732 732\" width=\"100%\" role=\"img\" aria-label=\"Đồ thị đường thẳng trên hệ trục cùng đơn vị\"><g data-panel=\"0\" data-hinh=\"I\" data-origin-x=\"180\" data-origin-y=\"172\" data-scale=\"26.4\" transform=\"translate(0 0)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"180\" y=\"22\" fill=\"#0f172a\" text-anchor=\"middle\" font-size=\"14\">I</text><line x1=\"48\" y1=\"304\" x2=\"48\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"74.4\" y1=\"304\" x2=\"74.4\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"100.8\" y1=\"304\" x2=\"100.8\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"127.19999999999999\" y1=\"304\" x2=\"127.19999999999999\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"153.6\" y1=\"304\" x2=\"153.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"180\" y1=\"304\" x2=\"180\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"206.39999999999998\" y1=\"304\" x2=\"206.39999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"232.79999999999998\" y1=\"304\" x2=\"232.79999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"259.2\" y1=\"304\" x2=\"259.2\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"285.6\" y1=\"304\" x2=\"285.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"312\" y1=\"304\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"304\" x2=\"312\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"277.6\" x2=\"312\" y2=\"277.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"251.2\" x2=\"312\" y2=\"251.2\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"224.79999999999998\" x2=\"312\" y2=\"224.79999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"198.39999999999998\" x2=\"312\" y2=\"198.39999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"172\" x2=\"312\" y2=\"172\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"145.6\" x2=\"312\" y2=\"145.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"119.19999999999999\" x2=\"312\" y2=\"119.19999999999999\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"92.8\" x2=\"312\" y2=\"92.8\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"66.4\" x2=\"312\" y2=\"66.4\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"40\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"48\" y1=\"172\" x2=\"324\" y2=\"172\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 318 168 L 324 172 L 318 176\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"180\" y1=\"304\" x2=\"180\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 176 34 L 180 28 L 184 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"333\" y=\"176\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"193\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"171\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"48\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-5</text><text x=\"74.4\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-4</text><text x=\"100.8\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-3</text><text x=\"127.19999999999999\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"153.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"206.39999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"232.79999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"259.2\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"285.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"312\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">5</text><text x=\"171\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-5</text><text x=\"171\" y=\"281.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-4</text><text x=\"171\" y=\"255.2\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-3</text><text x=\"171\" y=\"228.79999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"171\" y=\"202.39999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"171\" y=\"149.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"171\" y=\"123.19999999999999\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"171\" y=\"96.8\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"171\" y=\"70.4\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"171\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><line data-graph=\"d1\" data-a=\"1\" data-b=\"2\" x1=\"48\" y1=\"251.2\" x2=\"259.2\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\"/></g><g data-panel=\"1\" data-hinh=\"II\" data-origin-x=\"180\" data-origin-y=\"172\" data-scale=\"26.4\" transform=\"translate(372 0)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"180\" y=\"22\" fill=\"#0f172a\" text-anchor=\"middle\" font-size=\"14\">II</text><line x1=\"48\" y1=\"304\" x2=\"48\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"74.4\" y1=\"304\" x2=\"74.4\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"100.8\" y1=\"304\" x2=\"100.8\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"127.19999999999999\" y1=\"304\" x2=\"127.19999999999999\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"153.6\" y1=\"304\" x2=\"153.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"180\" y1=\"304\" x2=\"180\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"206.39999999999998\" y1=\"304\" x2=\"206.39999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"232.79999999999998\" y1=\"304\" x2=\"232.79999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"259.2\" y1=\"304\" x2=\"259.2\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"285.6\" y1=\"304\" x2=\"285.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"312\" y1=\"304\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"304\" x2=\"312\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"277.6\" x2=\"312\" y2=\"277.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"251.2\" x2=\"312\" y2=\"251.2\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"224.79999999999998\" x2=\"312\" y2=\"224.79999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"198.39999999999998\" x2=\"312\" y2=\"198.39999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"172\" x2=\"312\" y2=\"172\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"145.6\" x2=\"312\" y2=\"145.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"119.19999999999999\" x2=\"312\" y2=\"119.19999999999999\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"92.8\" x2=\"312\" y2=\"92.8\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"66.4\" x2=\"312\" y2=\"66.4\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"40\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"48\" y1=\"172\" x2=\"324\" y2=\"172\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 318 168 L 324 172 L 318 176\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"180\" y1=\"304\" x2=\"180\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 176 34 L 180 28 L 184 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"333\" y=\"176\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"193\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"171\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"48\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-5</text><text x=\"74.4\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-4</text><text x=\"100.8\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-3</text><text x=\"127.19999999999999\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"153.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"206.39999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"232.79999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"259.2\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"285.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"312\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">5</text><text x=\"171\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-5</text><text x=\"171\" y=\"281.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-4</text><text x=\"171\" y=\"255.2\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-3</text><text x=\"171\" y=\"228.79999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"171\" y=\"202.39999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"171\" y=\"149.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"171\" y=\"123.19999999999999\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"171\" y=\"96.8\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"171\" y=\"70.4\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"171\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><line data-graph=\"d1\" data-a=\"-1\" data-b=\"-2\" x1=\"48\" y1=\"92.8\" x2=\"259.2\" y2=\"304\" stroke=\"#2563eb\" stroke-width=\"2.5\"/></g><g data-panel=\"2\" data-hinh=\"III\" data-origin-x=\"180\" data-origin-y=\"172\" data-scale=\"26.4\" transform=\"translate(0 372)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"180\" y=\"22\" fill=\"#0f172a\" text-anchor=\"middle\" font-size=\"14\">III</text><line x1=\"48\" y1=\"304\" x2=\"48\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"74.4\" y1=\"304\" x2=\"74.4\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"100.8\" y1=\"304\" x2=\"100.8\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"127.19999999999999\" y1=\"304\" x2=\"127.19999999999999\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"153.6\" y1=\"304\" x2=\"153.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"180\" y1=\"304\" x2=\"180\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"206.39999999999998\" y1=\"304\" x2=\"206.39999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"232.79999999999998\" y1=\"304\" x2=\"232.79999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"259.2\" y1=\"304\" x2=\"259.2\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"285.6\" y1=\"304\" x2=\"285.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"312\" y1=\"304\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"304\" x2=\"312\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"277.6\" x2=\"312\" y2=\"277.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"251.2\" x2=\"312\" y2=\"251.2\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"224.79999999999998\" x2=\"312\" y2=\"224.79999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"198.39999999999998\" x2=\"312\" y2=\"198.39999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"172\" x2=\"312\" y2=\"172\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"145.6\" x2=\"312\" y2=\"145.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"119.19999999999999\" x2=\"312\" y2=\"119.19999999999999\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"92.8\" x2=\"312\" y2=\"92.8\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"66.4\" x2=\"312\" y2=\"66.4\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"40\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"48\" y1=\"172\" x2=\"324\" y2=\"172\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 318 168 L 324 172 L 318 176\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"180\" y1=\"304\" x2=\"180\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 176 34 L 180 28 L 184 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"333\" y=\"176\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"193\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"171\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"48\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-5</text><text x=\"74.4\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-4</text><text x=\"100.8\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-3</text><text x=\"127.19999999999999\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"153.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"206.39999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"232.79999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"259.2\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"285.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"312\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">5</text><text x=\"171\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-5</text><text x=\"171\" y=\"281.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-4</text><text x=\"171\" y=\"255.2\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-3</text><text x=\"171\" y=\"228.79999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"171\" y=\"202.39999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"171\" y=\"149.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"171\" y=\"123.19999999999999\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"171\" y=\"96.8\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"171\" y=\"70.4\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"171\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><line data-graph=\"d1\" data-a=\"-1\" data-b=\"2\" x1=\"312\" y1=\"251.2\" x2=\"100.8\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\"/></g><g data-panel=\"3\" data-hinh=\"IV\" data-origin-x=\"180\" data-origin-y=\"172\" data-scale=\"26.4\" transform=\"translate(372 372)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"180\" y=\"22\" fill=\"#0f172a\" text-anchor=\"middle\" font-size=\"14\">IV</text><line x1=\"48\" y1=\"304\" x2=\"48\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"74.4\" y1=\"304\" x2=\"74.4\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"100.8\" y1=\"304\" x2=\"100.8\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"127.19999999999999\" y1=\"304\" x2=\"127.19999999999999\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"153.6\" y1=\"304\" x2=\"153.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"180\" y1=\"304\" x2=\"180\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"206.39999999999998\" y1=\"304\" x2=\"206.39999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"232.79999999999998\" y1=\"304\" x2=\"232.79999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"259.2\" y1=\"304\" x2=\"259.2\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"285.6\" y1=\"304\" x2=\"285.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"312\" y1=\"304\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"304\" x2=\"312\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"277.6\" x2=\"312\" y2=\"277.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"251.2\" x2=\"312\" y2=\"251.2\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"224.79999999999998\" x2=\"312\" y2=\"224.79999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"198.39999999999998\" x2=\"312\" y2=\"198.39999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"172\" x2=\"312\" y2=\"172\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"145.6\" x2=\"312\" y2=\"145.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"119.19999999999999\" x2=\"312\" y2=\"119.19999999999999\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"92.8\" x2=\"312\" y2=\"92.8\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"66.4\" x2=\"312\" y2=\"66.4\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"40\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"48\" y1=\"172\" x2=\"324\" y2=\"172\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 318 168 L 324 172 L 318 176\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"180\" y1=\"304\" x2=\"180\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 176 34 L 180 28 L 184 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"333\" y=\"176\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"193\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"171\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"48\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-5</text><text x=\"74.4\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-4</text><text x=\"100.8\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-3</text><text x=\"127.19999999999999\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"153.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"206.39999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"232.79999999999998\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"259.2\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"285.6\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"312\" y=\"187\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">5</text><text x=\"171\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-5</text><text x=\"171\" y=\"281.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-4</text><text x=\"171\" y=\"255.2\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-3</text><text x=\"171\" y=\"228.79999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"171\" y=\"202.39999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"171\" y=\"149.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"171\" y=\"123.19999999999999\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"171\" y=\"96.8\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"171\" y=\"70.4\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"171\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><line data-graph=\"d1\" data-a=\"-2\" data-b=\"2\" x1=\"272.4\" y1=\"304\" x2=\"140.39999999999998\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\"/></g></svg>",
          "options": [
            "A. Hình I",
            "B. Hình II",
            "C. Hình III",
            "D. Hình IV"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đọc các điểm từ bảng\nĐồ thị phải đi qua $(-1;3)$, $(0;2)$ và $(2;0)$.\nĐặc biệt giao trục tung là $(0;2)$ và giao trục hoành là $(2;0)$.\nBước 2: Tìm công thức đường thẳng\nĐặt $y=ax+b$. Điểm $(0;2)$ cho $b=2$.\nĐiểm $(2;0)$ cho $2a+2=0$, nên $a=-1$.\nBước 3: Kiểm điểm còn lại\nCông thức là $y=-x+2$.\nVới $x=-1$, có $y=3$, đúng hàng dữ liệu thứ ba.\nBước 4: Đối chiếu hình\nHình III đi qua hai giao điểm trục đã xác định.\nHình I đi lên, hình II cắt trục tung ở $-2$, hình IV cắt trục hoành ở $1$, nên không khớp bảng.\nBước 5: Kết luận\nChọn C: hình III."
        },
        {
          "id": "l8-ham-so-nang-cao-04",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hệ số góc qua hai điểm",
          "prompt": "Đường thẳng trên hình đi qua $A(-2;-1)$ và $B(2;5)$. Hệ số góc của đường thẳng bằng bao nhiêu?",
          "svg": "<svg class=\"math-svg\" viewBox=\"0 0 360 360\" width=\"100%\" role=\"img\" aria-label=\"Đồ thị đường thẳng trên hệ trục cùng đơn vị\"><g data-panel=\"0\" data-origin-x=\"180\" data-origin-y=\"238\" data-scale=\"33\" transform=\"translate(0 0)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><line x1=\"48\" y1=\"304\" x2=\"48\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"81\" y1=\"304\" x2=\"81\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"114\" y1=\"304\" x2=\"114\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"147\" y1=\"304\" x2=\"147\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"180\" y1=\"304\" x2=\"180\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"213\" y1=\"304\" x2=\"213\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"246\" y1=\"304\" x2=\"246\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"279\" y1=\"304\" x2=\"279\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"312\" y1=\"304\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"304\" x2=\"312\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"271\" x2=\"312\" y2=\"271\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"238\" x2=\"312\" y2=\"238\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"205\" x2=\"312\" y2=\"205\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"172\" x2=\"312\" y2=\"172\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"139\" x2=\"312\" y2=\"139\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"106\" x2=\"312\" y2=\"106\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"73\" x2=\"312\" y2=\"73\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"40\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"48\" y1=\"238\" x2=\"324\" y2=\"238\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 318 234 L 324 238 L 318 242\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"180\" y1=\"304\" x2=\"180\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 176 34 L 180 28 L 184 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"333\" y=\"242\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"193\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"171\" y=\"253\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"48\" y=\"253\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-4</text><text x=\"81\" y=\"253\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-3</text><text x=\"114\" y=\"253\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"147\" y=\"253\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"213\" y=\"253\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"246\" y=\"253\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"279\" y=\"253\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"312\" y=\"253\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"171\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"171\" y=\"275\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"171\" y=\"209\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"171\" y=\"176\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"171\" y=\"143\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"171\" y=\"110\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"171\" y=\"77\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><text x=\"171\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">6</text><line data-graph=\"d1\" data-a=\"1.5\" data-b=\"2\" x1=\"92\" y1=\"304\" x2=\"268\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><circle data-point=\"A\" data-x=\"-2\" data-y=\"-1\" cx=\"114\" cy=\"271\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"122\" y=\"261\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">A</text><circle data-point=\"B\" data-x=\"2\" data-y=\"5\" cx=\"246\" cy=\"73\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"254\" y=\"63\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">B</text></g></svg>",
          "options": [
            "A. $\\frac23$",
            "B. $\\frac32$",
            "C. $3$",
            "D. $-\\frac32$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Liên hệ độ tăng với hệ số góc\nVới đường thẳng $y=ax+b$, hiệu tung độ của hai điểm bằng $a$ nhân hiệu hoành độ.\nVì hai hoành độ khác nhau, được phép lấy thương để tìm $a$.\nBước 2: Tính hiệu hoành độ\nTừ $A$ đến $B$, độ tăng hoành độ là $2-(-2)=4$.\nBước 3: Tính hiệu tung độ\nĐộ tăng tung độ cùng chiều xét là $5-(-1)=6$.\nBước 4: Lấy tỉ số đúng thứ tự\n$a=6/4=3/2$.\nPhải lấy độ tăng tung độ chia độ tăng hoành độ, không đảo thành $2/3$; dấu dương phù hợp đường đi lên.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-ham-so-nang-cao-05",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân biệt song song và trùng nhau",
          "prompt": "Cho $d_1:y=2x-1$, $d_2:y=2(x+1)-3$, $d_3:y=2x+3$. Nhận xét nào đúng?",
          "svg": "",
          "options": [
            "A. Ba đường thẳng song song đôi một.",
            "B. Ba đường thẳng trùng nhau.",
            "C. Hai đường d₁, d₂ cắt nhau; d₃ song song với d₁.",
            "D. Hai đường d₁, d₂ trùng nhau; d₃ song song với chúng."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Thu gọn đường thứ hai\n$d_2$ có $y=2x+2-3=2x-1$.\nBước 2: So sánh d₁ và d₂\nCả hai có cùng công thức $y=2x-1$, nên mọi điểm của đường này cũng thuộc đường kia.\nVì vậy chúng trùng nhau.\nBước 3: So sánh với d₃\n$d_3$ có hệ số góc $2$, bằng hai đường đầu, nhưng tung độ gốc $3$ khác $-1$.\nBước 4: Phân biệt song song và trùng nhau\nNếu có giao điểm với $d_1$, cần $2x+3=2x-1$, tức $3=-1$, vô lí.\nDo đó $d_3$ song song và phân biệt với đường chung $d_1,d_2$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-ham-so-nang-cao-06",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Hàm số mô tả mực nước tăng đều",
          "prompt": "Lúc bắt đầu, mực nước trong bể cao $12$ cm. Trong $10$ phút tiếp theo, mực nước tăng đều $3$ cm mỗi phút, bể không rò rỉ và chưa tràn. Gọi $h$ là độ cao mực nước sau $t$ phút, với $0\\le t\\le10$. Công thức nào đúng?",
          "svg": "",
          "options": [
            "A. $h=12+3t$",
            "B. $h=3+12t$",
            "C. $h=12-3t$",
            "D. $h=3t$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Ghi mức ban đầu\nLúc $t=0$, bể đã có mực nước cao $12$ cm.\nĐây là phần cố định cần giữ trong công thức.\nBước 2: Tính phần tăng thêm\nTốc độ tăng đều $3$ cm/phút, nên sau $t$ phút mực nước tăng $3t$ cm.\nBước 3: Cộng hai phần\nChiều cao lúc sau bằng mức ban đầu cộng phần tăng: $h=12+3t$.\nBước 4: Kiểm tra miền và giá trị đầu\nCông thức được dùng trên $0\\le t\\le10$ theo đề.\nTại $t=0$ cho $h=12$; mỗi phút tăng đúng $3$ cm, phù hợp bể không rò rỉ và chưa tràn.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-ham-so-nang-cao-07",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Kết hợp điểm thuộc và song song phân biệt",
          "prompt": "Tìm cặp $(m,n)$ để $d:y=(m-1)x+n$ đi qua $A(2;3)$ và song song, phân biệt với $d':y=-2x+1$.",
          "svg": "",
          "options": [
            "A. $(-1;1)$",
            "B. $(1;3)$",
            "C. $(-1;7)$",
            "D. $(-3;11)$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Dùng điều kiện song song\nHai đường song song phải có cùng hệ số góc, nên $m-1=-2$.\nSuy ra $m=-1$.\nBước 2: Viết công thức sau khi biết m\nĐường $d$ trở thành $y=-2x+n$.\nBước 3: Dùng điểm thuộc đường\nThay $A(2;3)$: $3=-2\\cdot2+n$.\nDo đó $n=7$.\nBước 4: Kiểm tra phân biệt\n$d$ có tung độ gốc $7$, khác $1$ của $d'$, nên hai đường không trùng nhau.\nHệ số góc $-2\\ne0$, và $-2\\cdot2+7=3$, thỏa đủ yêu cầu.\nBước 5: Kết luận\nChọn C: $(m,n)=(-1;7)$."
        }
      ],
      "hsg": [
        {
          "id": "l8-ham-so-hsg-01",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Hai đoạn chắn trên các trục",
          "prompt": "Đường thẳng $y=-\\frac32x+6$ cắt trục hoành tại $A$ và trục tung tại $B$. Tính $OA+OB$ theo đơn vị trên hình.",
          "svg": "<svg class=\"math-svg\" viewBox=\"0 0 360 360\" width=\"100%\" role=\"img\" aria-label=\"Đồ thị đường thẳng trên hệ trục cùng đơn vị\"><g data-panel=\"0\" data-origin-x=\"100.8\" data-origin-y=\"251.2\" data-scale=\"26.4\" transform=\"translate(0 0)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><line x1=\"48\" y1=\"304\" x2=\"48\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"74.4\" y1=\"304\" x2=\"74.4\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"100.8\" y1=\"304\" x2=\"100.8\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"127.19999999999999\" y1=\"304\" x2=\"127.19999999999999\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"153.6\" y1=\"304\" x2=\"153.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"180\" y1=\"304\" x2=\"180\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"206.39999999999998\" y1=\"304\" x2=\"206.39999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"232.79999999999998\" y1=\"304\" x2=\"232.79999999999998\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"259.2\" y1=\"304\" x2=\"259.2\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"285.6\" y1=\"304\" x2=\"285.6\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"312\" y1=\"304\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"304\" x2=\"312\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"277.6\" x2=\"312\" y2=\"277.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"251.2\" x2=\"312\" y2=\"251.2\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"224.79999999999998\" x2=\"312\" y2=\"224.79999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"198.39999999999998\" x2=\"312\" y2=\"198.39999999999998\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"172\" x2=\"312\" y2=\"172\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"145.6\" x2=\"312\" y2=\"145.6\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"119.19999999999999\" x2=\"312\" y2=\"119.19999999999999\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"92.8\" x2=\"312\" y2=\"92.8\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"66.4\" x2=\"312\" y2=\"66.4\" stroke=\"#e2e8f0\"/><line x1=\"48\" y1=\"40\" x2=\"312\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"48\" y1=\"251.2\" x2=\"324\" y2=\"251.2\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 318 247.2 L 324 251.2 L 318 255.2\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"100.8\" y1=\"304\" x2=\"100.8\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 96.8 34 L 100.8 28 L 104.8 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"333\" y=\"255.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"113.8\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"91.8\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"48\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"74.4\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"127.19999999999999\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"153.6\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"180\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"206.39999999999998\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"232.79999999999998\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">5</text><text x=\"259.2\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">6</text><text x=\"285.6\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">7</text><text x=\"312\" y=\"266.2\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">8</text><text x=\"91.8\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"91.8\" y=\"281.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"91.8\" y=\"228.79999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"91.8\" y=\"202.39999999999998\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"91.8\" y=\"176\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"91.8\" y=\"149.6\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"91.8\" y=\"123.19999999999999\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><text x=\"91.8\" y=\"96.8\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">6</text><text x=\"91.8\" y=\"70.4\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">7</text><text x=\"91.8\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">8</text><line data-graph=\"d1\" data-a=\"-1.5\" data-b=\"6\" x1=\"241.6\" y1=\"304\" x2=\"65.6\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><circle data-point=\"A\" data-x=\"4\" data-y=\"0\" cx=\"206.39999999999998\" cy=\"251.2\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"215.39999999999998\" y=\"239.2\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">A</text><circle data-point=\"B\" data-x=\"0\" data-y=\"6\" cx=\"100.8\" cy=\"92.8\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"109.8\" y=\"80.8\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">B</text></g></svg>",
          "correctAnswer": "10",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định điều kiện tại hai trục\nĐiểm thuộc trục hoành có tung độ $y=0$; điểm thuộc trục tung có hoành độ $x=0$.\nTa dùng hai điều kiện này để tìm $A$ và $B$ riêng biệt.\nBước 2: Tìm giao điểm A\nĐặt $y=0$: $-\\frac32x+6=0$.\nSuy ra $\\frac32x=6$, nên $x=4$ và $A(4;0)$.\nBước 3: Tìm giao điểm B\nĐặt $x=0$, được $y=6$.\nVì vậy $B(0;6)$.\nBước 4: Chuyển tọa độ thành độ dài\nHai giao điểm đều nằm trên nửa trục dương, nên $OA=4$ và $OB=6$.\nThay các tọa độ vào phương trình đường thẳng đều thỏa; các độ dài khớp vị trí trên hình.\nBước 5: Kết luận\n$OA+OB=4+6=10$. Nhập $10$."
        },
        {
          "id": "l8-ham-so-hsg-02",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Diện tích xác định hệ số góc",
          "prompt": "Đường thẳng $y=ax+4$, với $a<0$, cắt hai trục tại $A,B$. Tam giác $OAB$ có diện tích $12$ đơn vị diện tích. Tính $a$.",
          "svg": "",
          "correctAnswer": "-2/3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm đoạn chắn trên trục tung\nTại $x=0$, đường thẳng cho $y=4$, nên $B(0;4)$ và $OB=4$.\nHai trục vuông góc nên tam giác $OAB$ vuông tại $O$.\nBước 2: Dùng diện tích để tìm OA\nDiện tích là $\\frac12OA\\cdot OB=12$.\nThay $OB=4$: $2OA=12$, nên $OA=6$.\nBước 3: Xác định dấu hoành độ của A\nGiao điểm trục hoành thỏa $ax+4=0$, nên $x=-4/a$.\nVì $a<0$, hoành độ này dương. Do đó $A(6;0)$, không phải $A(-6;0)$.\nBước 4: Tính và kiểm tra hệ số\nThay $A$ vào đường thẳng: $6a+4=0$, nên $a=-2/3$.\nGiá trị này âm như yêu cầu; hai đoạn chắn dài $6$ và $4$ cho diện tích $12$, và đều khác $0$ nên tam giác không suy biến.\nBước 5: Kết luận\n$a=-2/3$. Nhập $-2/3$."
        },
        {
          "id": "l8-ham-so-hsg-03",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Giao điểm trong khoảng thời gian hợp lệ",
          "prompt": "Bể thứ nhất ban đầu có mực nước $8$ cm; trong $4$ phút đầu mực nước tăng đều $2$ cm/phút, sau đó tăng đều $1$ cm/phút. Bể thứ hai có mực nước $h_2=26-t$ (cm), với $t$ là số phút tính từ lúc bắt đầu. Xét $0\\le t\\le12$, các bể không tràn và việc đổi tốc độ diễn ra tức thời. Hai mực nước bằng nhau sau bao nhiêu phút?",
          "svg": "",
          "correctAnswer": "7",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chia thời gian theo tốc độ tăng nước\nBể thứ nhất đổi tốc độ sau phút thứ $4$, nên cần hai công thức ở hai giai đoạn.\nBể thứ hai có công thức $h_2=26-t$ trong toàn khoảng $0\\le t\\le12$.\nBước 2: Xét bốn phút đầu\nVới $0\\le t\\le4$, bể thứ nhất có $h_1=8+2t$.\nGiải $8+2t=26-t$ được $3t=18$, tức $t=6$.\nNhưng $6$ không thuộc giai đoạn này, nên không phải thời điểm hợp lệ từ công thức đó.\nBước 3: Lập công thức sau phút thứ 4\nTại $t=4$, mực nước là $8+2\\cdot4=16$ cm.\nTừ đó tăng $1$ cm mỗi phút trong $t-4$ phút, nên $h_1=16+(t-4)=t+12$ khi $4\\le t\\le12$.\nBước 4: Tìm và thử thời điểm gặp nhau\nGiải $t+12=26-t$ được $2t=14$, nên $t=7$, thuộc khoảng đang xét.\nKhi ấy cả hai mực nước đều bằng $19$ cm. Mỗi phương trình trong từng giai đoạn chỉ có một nghiệm, nên không còn thời điểm nào khác.\nBước 5: Kết luận\nHai mực nước bằng nhau sau $7$ phút. Việc thử miền thời gian là bắt buộc trước khi nhận nghiệm."
        },
        {
          "id": "l8-ham-so-hsg-04",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Điểm chung duy nhất của họ đường thẳng",
          "prompt": "Với mỗi $m\\ne-1$, xét $d_m:y=(m+1)x+2m-3$. Tìm điểm chung của tất cả các đường thẳng $d_m$ và chứng minh điểm chung đó là duy nhất. Hình minh hoạ ba đường ứng với $m=0,1,-2$.",
          "svg": "<svg class=\"math-svg\" viewBox=\"0 0 360 360\" width=\"100%\" role=\"img\" aria-label=\"Đồ thị đường thẳng trên hệ trục cùng đơn vị\"><g data-panel=\"0\" data-origin-x=\"242.11764705882354\" data-origin-y=\"55.529411764705884\" data-scale=\"31.058823529411764\" transform=\"translate(0 0)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><line x1=\"55.76470588235294\" y1=\"304\" x2=\"55.76470588235294\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"86.82352941176471\" y1=\"304\" x2=\"86.82352941176471\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"117.88235294117646\" y1=\"304\" x2=\"117.88235294117646\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"148.94117647058823\" y1=\"304\" x2=\"148.94117647058823\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"180\" y1=\"304\" x2=\"180\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"211.05882352941177\" y1=\"304\" x2=\"211.05882352941177\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"242.11764705882354\" y1=\"304\" x2=\"242.11764705882354\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"273.1764705882353\" y1=\"304\" x2=\"273.1764705882353\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"304.2352941176471\" y1=\"304\" x2=\"304.2352941176471\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"55.76470588235294\" y1=\"304\" x2=\"304.2352941176471\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"55.76470588235294\" y1=\"272.94117647058823\" x2=\"304.2352941176471\" y2=\"272.94117647058823\" stroke=\"#e2e8f0\"/><line x1=\"55.76470588235294\" y1=\"241.88235294117646\" x2=\"304.2352941176471\" y2=\"241.88235294117646\" stroke=\"#e2e8f0\"/><line x1=\"55.76470588235294\" y1=\"210.8235294117647\" x2=\"304.2352941176471\" y2=\"210.8235294117647\" stroke=\"#e2e8f0\"/><line x1=\"55.76470588235294\" y1=\"179.76470588235293\" x2=\"304.2352941176471\" y2=\"179.76470588235293\" stroke=\"#e2e8f0\"/><line x1=\"55.76470588235294\" y1=\"148.70588235294116\" x2=\"304.2352941176471\" y2=\"148.70588235294116\" stroke=\"#e2e8f0\"/><line x1=\"55.76470588235294\" y1=\"117.6470588235294\" x2=\"304.2352941176471\" y2=\"117.6470588235294\" stroke=\"#e2e8f0\"/><line x1=\"55.76470588235294\" y1=\"86.58823529411765\" x2=\"304.2352941176471\" y2=\"86.58823529411765\" stroke=\"#e2e8f0\"/><line x1=\"55.76470588235294\" y1=\"55.529411764705884\" x2=\"304.2352941176471\" y2=\"55.529411764705884\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"55.76470588235294\" y1=\"55.529411764705884\" x2=\"316.2352941176471\" y2=\"55.529411764705884\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 310.2352941176471 51.529411764705884 L 316.2352941176471 55.529411764705884 L 310.2352941176471 59.529411764705884\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"242.11764705882354\" y1=\"304\" x2=\"242.11764705882354\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 238.11764705882354 34 L 242.11764705882354 28 L 246.11764705882354 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"325.2352941176471\" y=\"59.529411764705884\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"255.11764705882354\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"233.11764705882354\" y=\"70.52941176470588\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"55.76470588235294\" y=\"70.52941176470588\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-6</text><text x=\"117.88235294117646\" y=\"70.52941176470588\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-4</text><text x=\"180\" y=\"70.52941176470588\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"304.2352941176471\" y=\"70.52941176470588\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"233.11764705882354\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-8</text><text x=\"233.11764705882354\" y=\"245.88235294117646\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-6</text><text x=\"233.11764705882354\" y=\"183.76470588235293\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-4</text><text x=\"233.11764705882354\" y=\"121.6470588235294\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><line data-graph=\"d1\" data-a=\"1\" data-b=\"-3\" x1=\"304.2352941176471\" y1=\"86.58823529411765\" x2=\"86.82352941176471\" y2=\"304\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"180\" y=\"331\" fill=\"#2563eb\" text-anchor=\"middle\" font-size=\"11\">m = 0</text><line data-graph=\"d2\" data-a=\"2\" data-b=\"-1\" x1=\"133.41176470588235\" y1=\"304\" x2=\"265.4117647058824\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><text x=\"180\" y=\"343\" fill=\"#dc2626\" text-anchor=\"middle\" font-size=\"11\">m = 1</text><line data-graph=\"d3\" data-a=\"-1\" data-b=\"-7\" x1=\"55.76470588235294\" y1=\"86.58823529411765\" x2=\"273.1764705882353\" y2=\"304\" stroke=\"#15803d\" stroke-width=\"2.5\"/><text x=\"180\" y=\"355\" fill=\"#15803d\" text-anchor=\"middle\" font-size=\"11\">m = −2</text><circle data-point=\"P\" data-x=\"-2\" data-y=\"-5\" cx=\"180\" cy=\"210.8235294117647\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"190\" y=\"227.8235294117647\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">P</text></g></svg>",
          "solution": "Bước 1: Gom phần phụ thuộc tham số\nViết $(m+1)x+2m-3=m(x+2)+x-3$.\nMuốn tìm một điểm không đổi khi $m$ thay đổi, ta tìm $x$ làm hệ số của $m$ bằng $0$.\nBước 2: Tìm điểm ứng viên\n$x+2=0$ cho $x=-2$.\nThay vào phần còn lại, $y=x-3=-5$, nên điểm ứng viên là $P(-2;-5)$.\nBước 3: Chứng minh điểm thuộc mọi đường\nVới mọi $m\\ne-1$, thay $x=-2$ vào công thức được $y=m\\cdot0-2-3=-5$.\nDo đó $P$ thuộc tất cả các đường thẳng trong họ.\nBước 4: Chứng minh không có điểm chung khác\nXét hai giá trị hợp lệ $m=0$ và $m=1$, được $y=x-3$ và $y=2x-1$.\nĐiểm chung của cả họ phải thuộc cả hai đường này. Giải $x-3=2x-1$ cho duy nhất $x=-2$, rồi $y=-5$.\nVì thế không thể có điểm chung thứ hai.\nBước 5: Kết luận\nĐiểm chung duy nhất là $P(-2;-5)$. Điều kiện $m\\ne-1$ bảo đảm hệ số của $x$ khác $0$ trong mỗi hàm bậc nhất."
        },
        {
          "id": "l8-ham-so-hsg-05",
          "lop": 8,
          "chuDe": "ham-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Mức tăng bằng nhau và hai đường song song",
          "prompt": "Cho $f(x)=ax+b$ và $g(x)=cx+d$, trong đó $a\\ne0,c\\ne0$ và $b\\ne d$. Giả sử với một cặp số thực $u,v$ ta có $f(u+2)-f(u)=g(v+2)-g(v)$. Chứng minh đồ thị của $f$ và $g$ song song, phân biệt. Có cần giả thiết đẳng thức mức tăng đúng với mọi cặp $u,v$ không?",
          "svg": "",
          "solution": "Bước 1: Tính mức tăng của f\nCó $f(u+2)=a(u+2)+b$ và $f(u)=au+b$.\nLấy hiệu: $f(u+2)-f(u)=au+2a+b-au-b=2a$.\nBước 2: Tính mức tăng của g\nTương tự, $g(v+2)-g(v)=c(v+2)+d-(cv+d)=2c$.\nHai kết quả không phụ thuộc vào $u,v$.\nBước 3: Sử dụng giả thiết bằng nhau\nĐẳng thức mức tăng cho $2a=2c$.\nChia hai vế cho $2$, được $a=c$.\nBước 4: Suy ra vị trí hai đồ thị\nHai đường thẳng có cùng hệ số góc $a=c$ nhưng tung độ gốc khác nhau vì $b\\ne d$.\nChúng không có giao điểm: nếu có, phương trình $ax+b=ax+d$ sẽ cho $b=d$, trái giả thiết. Vì vậy hai đường song song, phân biệt.\nBước 5: Kết luận\nChỉ cần đẳng thức mức tăng đúng với một cặp $u,v$ là đủ; nó đã buộc $a=c$ vì hai mức tăng luôn là $2a,2c$.\nKhông cần bổ sung giả thiết đúng với mọi cặp."
        }
      ]
    },
    'hinh-phang': {
      "kha": [
        {
          "id": "l8-hinh-phang-kha-01",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tổng góc trong tứ giác",
          "prompt": "Tổng số đo bốn góc trong của một tứ giác lồi bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. 180°",
            "B. 270°",
            "C. 360°",
            "D. 540°"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chia tứ giác thành hai tam giác\nKẻ một đường chéo của tứ giác lồi.\nĐường chéo nằm trong hình và tạo hai tam giác không chồng lấn phần trong.\nBước 2: Dùng tổng góc tam giác\nMỗi tam giác có tổng góc $180^\\circ$.\nHai tam giác có tổng các góc $360^\\circ$.\nBước 3: Ghép lại các góc ở đầu đường chéo\nTại mỗi đầu đường chéo, hai góc nhỏ cộng lại thành góc trong của tứ giác.\nHai góc còn lại giữ nguyên.\nBước 4: Suy ra tổng cần tìm\nDo đó tổng bốn góc tứ giác bằng tổng góc hai tam giác, tức $2\\cdot180^\\circ=360^\\circ$.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-hinh-phang-kha-02",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc ở hai đáy hình thang cân",
          "prompt": "Hình thang cân $ABCD$ có $AB\\parallel CD$ và $\\widehat D=60^\\circ$. Tính $\\widehat B$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"30\" data-origin=\"190,270\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 2\"><line x1=\"190\" y1=\"114.11542731880104\" x2=\"370\" y2=\"114.11542731880104\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"370\" y1=\"114.11542731880104\" x2=\"460\" y2=\"270\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"460\" y1=\"270\" x2=\"100\" y2=\"270\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><line x1=\"100\" y1=\"270\" x2=\"190\" y2=\"114.11542731880104\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-A\"/><line x1=\"149.33012701892218\" y1=\"194.55771365940052\" x2=\"140.66987298107782\" y2=\"189.55771365940052\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"419.3301270189222\" y1=\"189.55771365940052\" x2=\"410.6698729810778\" y2=\"194.55771365940052\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><polyline data-parallel=\"0\" points=\"275,118.11542731880104 280,114.11542731880104 275,110.11542731880104\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"275,274 280,270 275,266\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><path d=\"M 124 270 A 24 24 0 0 0 112 249.21539030917347\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"145.0333209967908\" y=\"244\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >60°</text><circle cx=\"190\" cy=\"114.11542731880104\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"190\" y=\"94.11542731880104\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"370\" cy=\"114.11542731880104\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"370\" y=\"94.11542731880104\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"460\" cy=\"270\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"476\" y=\"282\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"100\" cy=\"270\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"84\" y=\"282\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text></svg>",
          "options": [
            "A. 60°",
            "B. 120°",
            "C. 90°",
            "D. 150°"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Dùng tính chất hình thang cân\nHai góc kề cùng đáy $CD$ bằng nhau.\nVì $\\widehat D=60^\\circ$, nên $\\widehat C=60^\\circ$.\nBước 2: Dùng hai đáy song song\n$AB\\parallel CD$ và $BC$ là đường cắt.\nHai góc trong cùng phía tại $B,C$ có tổng $180^\\circ$.\nBước 3: Tính góc B\n$\\widehat B=180^\\circ-\\widehat C=120^\\circ$.\nBước 4: Kiểm tra tổng góc\nGóc $A$ cũng bằng $120^\\circ$ do hai góc kề đáy $AB$ bằng nhau.\nTổng $120+120+60+60=360$ độ, phù hợp tứ giác.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-hinh-phang-kha-03",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn đúng cạnh huyền",
          "prompt": "Tam giác $ABC$ vuông tại $B$. Hệ thức nào đúng?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"55\" data-origin=\"195,280\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 3\"><line x1=\"195\" y1=\"60\" x2=\"195\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"195\" y1=\"280\" x2=\"360\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"360\" y1=\"280\" x2=\"195\" y2=\"60\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><polyline points=\"195,268 207,268 207,280\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><circle cx=\"195\" cy=\"60\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"195\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"195\" cy=\"280\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"180\" y=\"296\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"360\" cy=\"280\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"375\" y=\"296\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text></svg>",
          "options": [
            "A. $AB^2=AC^2+BC^2$",
            "B. $BC^2=AB^2+AC^2$",
            "C. $AC=AB+BC$",
            "D. $AC^2=AB^2+BC^2$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định đỉnh vuông\nĐề cho tam giác vuông tại $B$, nên $AB$ và $BC$ là hai cạnh góc vuông.\nBước 2: Xác định cạnh huyền\nCạnh đối diện góc $B$ là $AC$, nên đó là cạnh huyền.\nBước 3: Áp dụng Pythagore\nBình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông.\nVì vậy $AC^2=AB^2+BC^2$.\nBước 4: Phân biệt với tổng độ dài\nĐịnh lí nói về bình phương, không phải $AC=AB+BC$.\nTam giác không suy biến có cạnh huyền ngắn hơn tổng hai cạnh còn lại.\nBước 5: Kết luận\nChọn D."
        }
      ],
      "nangCao": [
        {
          "id": "l8-hinh-phang-nang-cao-01",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giao điểm đường chéo bình hành",
          "prompt": "Hai đường chéo của hình bình hành $ABCD$ cắt nhau tại $O$. Biết $AO=5$ cm. Tính $AC$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"32\" data-origin=\"150,280\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 4\"><line x1=\"150\" y1=\"280\" x2=\"342\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"342\" y1=\"280\" x2=\"406\" y2=\"88\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"406\" y1=\"88\" x2=\"214\" y2=\"88\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><line x1=\"214\" y1=\"88\" x2=\"150\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-A\"/><line x1=\"150\" y1=\"280\" x2=\"406\" y2=\"88\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-C\"/><line x1=\"342\" y1=\"280\" x2=\"214\" y2=\"88\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-D\"/><line x1=\"211\" y1=\"228\" x2=\"217\" y2=\"236\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"339\" y1=\"132\" x2=\"345\" y2=\"140\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"307.5038491169865\" y1=\"237.2696518641397\" x2=\"315.8243520603649\" y2=\"231.7226499018874\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"304.1756479396351\" y1=\"232.2773500981126\" x2=\"312.4961508830135\" y2=\"226.7303481358603\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"243.5038491169865\" y1=\"141.2696518641397\" x2=\"251.8243520603649\" y2=\"135.7226499018874\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"240.1756479396351\" y1=\"136.2773500981126\" x2=\"248.4961508830135\" y2=\"130.7303481358603\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><text x=\"186.64\" y=\"227.51999999999998\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >5 cm</text><circle cx=\"150\" cy=\"280\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"135\" y=\"292\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"342\" cy=\"280\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"357\" y=\"295\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"406\" cy=\"88\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"420\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"214\" cy=\"88\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"200\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"278\" cy=\"184\" r=\"2.5\" fill=\"#1e40af\" data-point=\"O\"/><text x=\"278\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">O</text></svg>",
          "options": [
            "A. 10 cm",
            "B. 5 cm",
            "C. 2,5 cm",
            "D. 20 cm"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nêu tính chất đường chéo\nTrong hình bình hành, hai đường chéo cắt nhau tại trung điểm của mỗi đường.\nBước 2: Áp dụng cho AC\n$O$ là trung điểm $AC$, nên $AO=OC$.\nVới $AO=5$ cm, có $OC=5$ cm.\nBước 3: Tính cả đường chéo\nVì $O$ nằm giữa $A,C$, $AC=AO+OC=5+5=10$ cm.\nBước 4: Kiểm tra phần và toàn bộ\n$AO$ chỉ bằng một nửa $AC$, nên không dùng $5$ cm làm độ dài cả đường.\nKhông cần biết đường chéo $BD$ để tính $AC$.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-hinh-phang-nang-cao-02",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Kiểm tra tam giác vuông bằng ba cạnh",
          "prompt": "Tam giác $ABC$ có $AB=9$ cm, $AC=12$ cm, $BC=15$ cm. Kết luận nào đúng?",
          "svg": "",
          "options": [
            "A. Tam giác vuông tại $B$.",
            "B. Tam giác vuông tại $C$.",
            "C. Tam giác vuông tại $A$.",
            "D. Tam giác không có góc vuông."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Kiểm tra các cạnh\n$9+12>15$ nên ba độ dài tạo được tam giác.\nCạnh lớn nhất là $BC=15$ cm.\nBước 2: Tính tổng bình phương hai cạnh ngắn\n$AB^2+AC^2=9^2+12^2=81+144=225$.\nBước 3: So sánh với cạnh lớn nhất\n$BC^2=15^2=225$, bằng tổng vừa tính.\nBước 4: Dùng định lí đảo\nTheo Pythagore đảo, góc đối diện cạnh $BC$ là góc vuông.\nĐỉnh đối diện $BC$ là $A$, không phải $B$ hay $C$.\nBước 5: Kết luận\nTam giác vuông tại $A$. Chọn C."
        },
        {
          "id": "l8-hinh-phang-nang-cao-03",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Kích thước hình chữ nhật",
          "prompt": "Hình chữ nhật $ABCD$ có $AB=12$ cm, đường chéo $AC=13$ cm. Tính $BC$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"30\" data-origin=\"95,270\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 6\"><line x1=\"95\" y1=\"120\" x2=\"455\" y2=\"120\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"455\" y1=\"120\" x2=\"455\" y2=\"270\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"455\" y1=\"270\" x2=\"95\" y2=\"270\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><line x1=\"95\" y1=\"270\" x2=\"95\" y2=\"120\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-A\"/><line x1=\"95\" y1=\"120\" x2=\"455\" y2=\"270\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-C\"/><polyline points=\"443,120 443,132 455,132\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><polyline points=\"107,270 107,258 95,258\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"275\" y=\"99\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >12 cm</text><text x=\"268.0769230769231\" y=\"211.6153846153846\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >13 cm</text><circle cx=\"95\" cy=\"120\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"83\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"455\" cy=\"120\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"467\" y=\"102\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"455\" cy=\"270\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"467\" y=\"288\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"95\" cy=\"270\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"83\" y=\"288\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text></svg>",
          "options": [
            "A. 1 cm",
            "B. $\\sqrt{313}$ cm",
            "C. 25 cm",
            "D. 5 cm"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định tam giác vuông\nHình chữ nhật có góc $ABC$ vuông, nên tam giác $ABC$ vuông tại $B$.\nĐường chéo $AC=13$ là cạnh huyền.\nBước 2: Viết Pythagore\n$AC^2=AB^2+BC^2$.\nSuy ra $BC^2=AC^2-AB^2$.\nBước 3: Thay số\n$BC^2=13^2-12^2=169-144=25$.\nBước 4: Lấy độ dài và thử\n$BC>0$ nên $BC=5$ cm.\nKiểm tra $12^2+5^2=13^2$; không lấy hiệu $13-12$ vì các cạnh không cùng nằm trên một đoạn thẳng.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-hinh-phang-nang-cao-04",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cạnh hình thoi từ hai đường chéo",
          "prompt": "Hình thoi $ABCD$ có $AC=16$ cm, $BD=12$ cm. Tính độ dài cạnh hình thoi.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"17\" data-origin=\"280,178\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 7\"><line x1=\"280\" y1=\"42\" x2=\"382\" y2=\"178\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"382\" y1=\"178\" x2=\"280\" y2=\"314\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"280\" y1=\"314\" x2=\"178\" y2=\"178\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><line x1=\"178\" y1=\"178\" x2=\"280\" y2=\"42\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-A\"/><line x1=\"280\" y1=\"42\" x2=\"280\" y2=\"314\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-C\"/><line x1=\"382\" y1=\"178\" x2=\"178\" y2=\"178\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-D\"/><line x1=\"335\" y1=\"107\" x2=\"327\" y2=\"113\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"335\" y1=\"249\" x2=\"327\" y2=\"243\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"225\" y1=\"249\" x2=\"233\" y2=\"243\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"225\" y1=\"107\" x2=\"233\" y2=\"113\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><polyline points=\"280,166 292,166 292,178\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><circle cx=\"280\" cy=\"42\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"280\" y=\"23\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"382\" cy=\"178\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"399\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"280\" cy=\"314\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"280\" y=\"334\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"178\" cy=\"178\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"161\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"280\" cy=\"178\" r=\"2.5\" fill=\"#1e40af\" data-point=\"O\"/><text x=\"264\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">O</text><text x=\"100\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >AC = 16 cm</text><text x=\"100\" y=\"66\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >BD = 12 cm</text></svg>",
          "options": [
            "A. 20 cm",
            "B. 10 cm",
            "C. 14 cm",
            "D. $\\sqrt{28}$ cm"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xét giao điểm hai đường chéo\nGọi $O=AC\\cap BD$.\nTrong hình thoi, hai đường chéo vuông góc và cắt nhau tại trung điểm mỗi đường.\nBước 2: Tính các nửa đường chéo\n$AO=16/2=8$ cm, $BO=12/2=6$ cm.\nBước 3: Áp dụng Pythagore\nTam giác $AOB$ vuông tại $O$, nên $AB^2=8^2+6^2=100$.\nBước 4: Suy ra cạnh hình thoi\nĐộ dài $AB=10$ cm vì lấy căn dương.\nBốn cạnh hình thoi bằng nhau, nên kết quả này là độ dài chung của mọi cạnh.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-hinh-phang-nang-cao-05",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Điều kiện đủ để có hình vuông",
          "prompt": "Cho một hình chữ nhật. Điều kiện bổ sung nào dưới đây đủ để kết luận nó là hình vuông?",
          "svg": "",
          "options": [
            "A. Hai đường chéo bằng nhau.",
            "B. Hai đường chéo cắt nhau tại trung điểm mỗi đường.",
            "C. Hai đường chéo vuông góc với nhau.",
            "D. Hai cạnh đối bằng nhau."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định tính chất đã có\nHình chữ nhật đã có bốn góc vuông và là một hình bình hành.\nMuốn thành hình vuông còn cần bốn cạnh bằng nhau.\nBước 2: Xét điều kiện hai đường chéo vuông góc\nHình bình hành có hai đường chéo vuông góc là hình thoi.\nVì thế điều kiện C bảo đảm bốn cạnh bằng nhau.\nBước 3: Kết nối hai loại hình\nHình vừa có bốn góc vuông vừa có bốn cạnh bằng nhau chính là hình vuông.\nBước 4: Loại các điều kiện không bổ sung\nHai đường chéo bằng nhau, cắt nhau tại trung điểm và hai cạnh đối bằng nhau vốn đúng với mọi hình chữ nhật.\nChẳng hạn hình chữ nhật $2$ cm × $3$ cm có cả ba tính chất đó nhưng không vuông.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-hinh-phang-nang-cao-06",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận biết hình thang cân",
          "prompt": "Tứ giác lồi $ABCD$ có $AB\\parallel CD$, $AB<CD$ và hai đường chéo $AC=BD$. Dấu hiệu trên cho phép kết luận gì?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"32\" data-origin=\"280,265\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 9\"><line x1=\"184\" y1=\"137\" x2=\"376\" y2=\"137\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"376\" y1=\"137\" x2=\"472\" y2=\"265\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"472\" y1=\"265\" x2=\"88\" y2=\"265\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><line x1=\"88\" y1=\"265\" x2=\"184\" y2=\"137\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-A\"/><line x1=\"184\" y1=\"137\" x2=\"472\" y2=\"265\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-C\"/><line x1=\"376\" y1=\"137\" x2=\"88\" y2=\"265\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-D\"/><line x1=\"373.2306923302673\" y1=\"215.6309422568987\" x2=\"369.1693076697328\" y2=\"224.76905774310129\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"190.83069233026723\" y1=\"224.76905774310129\" x2=\"186.76930766973274\" y2=\"215.6309422568987\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><polyline data-parallel=\"0\" points=\"275,141 280,137 275,133\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"275,269 280,265 275,261\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"184\" cy=\"137\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"172\" y=\"119\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"376\" cy=\"137\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"388\" y=\"119\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"472\" cy=\"265\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"486\" y=\"282\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"88\" cy=\"265\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"74\" y=\"282\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text></svg>",
          "options": [
            "A. $ABCD$ là hình thang cân.",
            "B. $ABCD$ là hình bình hành.",
            "C. $ABCD$ là hình chữ nhật.",
            "D. $ABCD$ là hình thoi."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhận diện hình thang\nTứ giác lồi có $AB\\parallel CD$, nên là hình thang với hai đáy này.\nBước 2: Dùng dấu hiệu hình thang cân\nHình thang có hai đường chéo bằng nhau là hình thang cân.\nĐề cho $AC=BD$, đúng điều kiện của dấu hiệu.\nBước 3: Kết luận loại hình\nVì vậy $ABCD$ là hình thang cân.\nBước 4: Kiểm tra các lựa chọn khác\n$AB<CD$ nên hai cạnh đối này không bằng nhau.\nĐiều đó loại hình bình hành và các trường hợp đặc biệt của nó là chữ nhật, thoi.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-hinh-phang-nang-cao-07",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Chiều cao và điều kiện dựng hình",
          "prompt": "Một hình thang cân có hai đáy dài $8$ cm và $18$ cm, cạnh bên dài $13$ cm. Tính chiều cao của hình thang.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"20\" data-origin=\"280,295\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 10\"><line x1=\"200\" y1=\"55\" x2=\"360\" y2=\"55\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"360\" y1=\"55\" x2=\"460\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"460\" y1=\"295\" x2=\"100\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><line x1=\"100\" y1=\"295\" x2=\"200\" y2=\"55\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-A\"/><line x1=\"154.6153846153846\" y1=\"176.92307692307693\" x2=\"145.3846153846154\" y2=\"173.07692307692307\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"414.61538461538464\" y1=\"173.07692307692307\" x2=\"405.38461538461536\" y2=\"176.92307692307693\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><polyline data-parallel=\"0\" points=\"275,59 280,55 275,51\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"275,299 280,295 275,291\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"280\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >8 cm</text><text x=\"280\" y=\"335\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >18 cm</text><text x=\"127.84615384615384\" y=\"165.76923076923077\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >13 cm</text><circle cx=\"200\" cy=\"55\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"188\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"360\" cy=\"55\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"372\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"460\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"475\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"100\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"85\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text></svg>",
          "options": [
            "A. 5 cm",
            "B. $\\sqrt{69}$ cm",
            "C. 12 cm",
            "D. $\\sqrt{194}$ cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Dựng hai đường cao\nHạ vuông góc từ hai đầu đáy nhỏ xuống đáy lớn.\nỞ hình thang cân, hai tam giác vuông ngoài hai bên bằng nhau, nên hai đoạn thừa trên đáy lớn bằng nhau.\nBước 2: Tính mỗi đoạn thừa\nTổng hai đoạn là $18-8=10$ cm.\nMỗi đoạn dài $10/2=5$ cm.\nBước 3: Dùng tam giác vuông bên cạnh\nCạnh bên $13$ cm là cạnh huyền, hai cạnh góc vuông là chiều cao $h$ và đoạn $5$ cm.\nDo đó $h^2=13^2-5^2=144$.\nBước 4: Tính và kiểm tra\n$h=12$ cm vì chiều cao dương.\n$5^2+12^2=13^2$; $13>5$ bảo đảm hình không bị ép thành chiều cao bằng $0$.\nBước 5: Kết luận\nChọn C."
        }
      ],
      "hsg": [
        {
          "id": "l8-hinh-phang-hsg-01",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "dien",
          "title": "Đường thẳng nối hai vị trí",
          "prompt": "Từ $O$, một người đi thẳng $800$ m đến $A$, rẽ vuông góc rồi đi thẳng $600$ m đến $B$. Các vị trí nằm trên một mặt phẳng. Khoảng cách theo đường thẳng từ $O$ đến $B$ là bao nhiêu mét?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"0.3\" data-origin=\"160,290\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 11\"><line x1=\"160\" y1=\"290\" x2=\"400\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"O-A\"/><line x1=\"400\" y1=\"290\" x2=\"400\" y2=\"110\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"400\" y1=\"110\" x2=\"160\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-O\"/><polyline points=\"388,290 388,278 400,278\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"280\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >800 m</text><text x=\"424\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >600 m</text><circle cx=\"160\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"O\"/><text x=\"144\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">O</text><circle cx=\"400\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"416\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"400\" cy=\"110\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"414\" y=\"93\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text></svg>",
          "correctAnswer": "1000",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định tam giác vuông\nNgười đi từ $O$ đến $A$ rồi rẽ vuông góc, nên $OA\\perp AB$.\nTam giác $OAB$ vuông tại $A$, với $OA=800$ m, $AB=600$ m.\nBước 2: Chọn đại lượng cần tính\nKhoảng cách thẳng từ $O$ đến $B$ là cạnh huyền $OB$.\nNó khác tổng hai chặng đường đã đi.\nBước 3: Áp dụng định lí Pythagore\nCó $OB^2=OA^2+AB^2=800^2+600^2$.\nTính được $OB^2=640000+360000=1000000$.\nBước 4: Lấy độ dài và kiểm tra\nVì $OB>0$, có $OB=\\sqrt{1000000}=1000$ m.\nKết quả lớn hơn mỗi cạnh góc vuông nhưng nhỏ hơn tổng $800+600=1400$, phù hợp khoảng cách đường thẳng.\nBước 5: Kết luận\nKhoảng cách cần nhập là $1000$ m."
        },
        {
          "id": "l8-hinh-phang-hsg-02",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai đoạn chéo cùng chiều cao",
          "prompt": "Hình chữ nhật $ABCD$ có $AB=14$ cm. Điểm $E$ nằm giữa $A,B$, với $ED=13$ cm và $EC=15$ cm. Tính $AD$ theo cm.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"20\" data-origin=\"140,300\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 12\"><line x1=\"140\" y1=\"300\" x2=\"420\" y2=\"300\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"420\" y1=\"300\" x2=\"420\" y2=\"60\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"420\" y1=\"60\" x2=\"140\" y2=\"60\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><line x1=\"140\" y1=\"60\" x2=\"140\" y2=\"300\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-A\"/><line x1=\"240\" y1=\"300\" x2=\"140\" y2=\"60\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-D\"/><line x1=\"240\" y1=\"300\" x2=\"420\" y2=\"60\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-C\"/><polyline points=\"152,300 152,288 140,288\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><polyline points=\"408,300 408,288 420,288\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"280\" y=\"343\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >14 cm</text><text x=\"171.53846153846155\" y=\"187.69230769230768\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >13 cm</text><text x=\"346\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >15 cm</text><circle cx=\"140\" cy=\"300\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"125\" y=\"316\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"420\" cy=\"300\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"435\" y=\"316\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"420\" cy=\"60\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"435\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"140\" cy=\"60\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"125\" y=\"44\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"240\" cy=\"300\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"240\" y=\"320\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text></svg>",
          "correctAnswer": "12",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt độ dài trên cạnh AB\nĐặt $AE=x$ cm, với $0<x<14$ vì $E$ nằm giữa $A,B$.\nKhi đó $EB=14-x$. Đặt $AD=BC=h>0$ cm theo tính chất hình chữ nhật.\nBước 2: Viết hai hệ thức Pythagore\nTam giác $EAD$ vuông tại $A$, nên $x^2+h^2=13^2=169$.\nTam giác $EBC$ vuông tại $B$, nên $(14-x)^2+h^2=15^2=225$.\nBước 3: Khử chiều cao để tìm x\nLấy phương trình sau trừ phương trình trước: $(14-x)^2-x^2=56$.\nKhai triển: $196-28x=56$, nên $28x=140$ và $x=5$, thỏa $0<x<14$.\nBước 4: Tính và thử chiều cao\nCó $h^2=169-5^2=144$, nên $h=12$ cm vì độ dài dương.\nThử lại $EB=9$ và $9^2+12^2=225=15^2$, đúng dữ kiện $EC=15$.\nBước 5: Kết luận\n$AD=12$ cm."
        },
        {
          "id": "l8-hinh-phang-hsg-03",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chu vi qua một đường chéo chung",
          "prompt": "Tứ giác lồi $ABCD$ có $\\widehat{ABC}=\\widehat{ADC}=90^\\circ$, $AB=7$ cm, $BC=24$ cm và $CD=20$ cm. Tính chu vi tứ giác theo cm.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"14\" data-origin=\"100,130\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 13\"><line x1=\"100\" y1=\"130\" x2=\"127.44\" y2=\"35.92\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"127.44\" y1=\"35.92\" x2=\"450\" y2=\"130\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"450\" y1=\"130\" x2=\"226\" y2=\"298\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><line x1=\"226\" y1=\"298\" x2=\"100\" y2=\"130\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-A\"/><line x1=\"100\" y1=\"130\" x2=\"450\" y2=\"130\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-C\"/><polyline points=\"124.08,47.44 135.6,50.8 138.96,39.28\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><polyline points=\"218.8,288.4 228.4,281.2 235.6,290.8\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"92.6\" y=\"76.80000000000001\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >7 cm</text><text x=\"294.88000000000005\" y=\"61.84000000000001\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >24 cm</text><text x=\"351.2\" y=\"231.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >20 cm</text><circle cx=\"100\" cy=\"130\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"82\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"127.44\" cy=\"35.92\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"127.44\" y=\"15.920000000000002\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"450\" cy=\"130\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"468\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"226\" cy=\"298\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"226\" y=\"318\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text></svg>",
          "correctAnswer": "66",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nhận diện hai tam giác vuông\nGóc $ABC$ vuông nên tam giác $ABC$ vuông tại $B$.\nGóc $ADC$ vuông nên tam giác $ADC$ vuông tại $D$; cả hai cùng có cạnh huyền $AC$.\nBước 2: Tính đường chéo chung\nTrong tam giác $ABC$, có $AC^2=7^2+24^2=49+576=625$.\nVì độ dài dương, $AC=25$ cm.\nBước 3: Tìm cạnh AD\nTrong tam giác $ADC$, có $AD^2=AC^2-CD^2=25^2-20^2=225$.\nDo đó $AD=15$ cm.\nBước 4: Tính đúng đường bao\nChu vi chỉ gồm bốn cạnh $AB,BC,CD,DA$, nên bằng $7+24+20+15=66$ cm.\nKhông cộng $AC$ vì đó là đường chéo bên trong, chỉ dùng để tính cạnh còn thiếu.\nCác độ dài vừa tìm đều dương và thỏa hai hệ thức Pythagore.\nBước 5: Kết luận\nChu vi tứ giác là $66$ cm."
        },
        {
          "id": "l8-hinh-phang-hsg-04",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai cặp cạnh đối song song",
          "prompt": "Cho hình bình hành $ABCD$. Trên đường chéo $AC$ lấy hai điểm $E,F$ theo thứ tự $A,E,F,C$ sao cho $AE=CF$. Chứng minh tứ giác $BEDF$ là hình bình hành.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"25\" data-origin=\"100,280\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 14\"><line x1=\"100\" y1=\"280\" x2=\"350\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"350\" y1=\"280\" x2=\"450\" y2=\"80\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"450\" y1=\"80\" x2=\"200\" y2=\"80\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><line x1=\"200\" y1=\"80\" x2=\"100\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-A\"/><line x1=\"100\" y1=\"280\" x2=\"450\" y2=\"80\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-C\"/><line x1=\"350\" y1=\"280\" x2=\"187.5\" y2=\"230\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-E\"/><line x1=\"187.5\" y1=\"230\" x2=\"200\" y2=\"80\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-D\"/><line x1=\"200\" y1=\"80\" x2=\"362.5\" y2=\"130\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-F\"/><line x1=\"362.5\" y1=\"130\" x2=\"350\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"F-B\"/><line x1=\"134.26930530821582\" y1=\"254.6587842893777\" x2=\"139.23069469178418\" y2=\"263.3412157106223\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"410.76930530821585\" y1=\"96.6587842893777\" x2=\"415.73069469178415\" y2=\"105.3412157106223\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><polyline data-parallel=\"0\" points=\"220,284 225,280 220,276\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"320,84 325,80 320,76\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"149.32917960675005,190.28591269649903 147.9875388202502,184.0249223594996 142.17376207875074,186.70820393249934\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"153.35410196624966,182.2360679774998 152.0124611797498,175.9750776405004 146.19868443825035,178.65835921350012\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"399.3291796067501,190.28591269649903 397.98753882025017,184.0249223594996 392.1737620787507,186.70820393249934\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"403.35410196624974,182.2360679774998 402.01246117974983,175.9750776405004 396.1986844382504,178.65835921350012\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"280\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"86\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"350\" cy=\"280\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"364\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"450\" cy=\"80\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"465\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"200\" cy=\"80\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"185\" y=\"64\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"187.5\" cy=\"230\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"172.5\" y=\"242\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text><circle cx=\"362.5\" cy=\"130\" r=\"2.5\" fill=\"#1e40af\" data-point=\"F\"/><text x=\"377.5\" y=\"118\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">F</text></svg>",
          "solution": "Bước 1: Dùng giao điểm hai đường chéo\nGọi $O$ là giao điểm $AC$ và $BD$.\nVì $ABCD$ là hình bình hành, hai đường chéo cắt nhau tại trung điểm mỗi đường, nên $OA=OC=AC/2$ và $OB=OD$.\nBước 2: Xác định vị trí O trên EF\nĐặt $AE=CF=t$ và $AC=L$.\nThứ tự $A,E,F,C$ cho $EF=L-2t>0$, nên $t<L/2$.\nDo đó trung điểm $O$ của $AC$ nằm giữa $E,F$.\nBước 3: Chứng minh O là trung điểm EF\nCó $OE=OA-AE=L/2-t$.\nTương tự, $OF=OC-CF=L/2-t$, nên $OE=OF$.\nVậy $O$ là trung điểm $EF$.\nBước 4: Áp dụng dấu hiệu hình bình hành\nHai đường chéo của tứ giác $BEDF$ là $BD$ và $EF$.\nChúng cắt nhau tại $O$, là trung điểm của cả hai. Vì $B,D$ không nằm trên $AC$ và $E\\ne F$, tứ giác không suy biến.\nTheo dấu hiệu nhận biết, tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là hình bình hành.\nBước 5: Kết luận\n$BEDF$ là hình bình hành."
        },
        {
          "id": "l8-hinh-phang-hsg-05",
          "lop": 8,
          "chuDe": "hinh-phang",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Đẳng thức độ dài tạo góc vuông",
          "prompt": "Trong tam giác $ABC$, đường cao $AH$ có chân $H$ nằm giữa $B,C$. Biết $AH^2=BH\\cdot HC$. Chứng minh $\\widehat{BAC}=90^\\circ$ bằng định lí Pythagore và định lí đảo.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"36\" data-origin=\"90,282\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · hinh-phang · câu 15\"><line x1=\"219.6\" y1=\"109.20000000000002\" x2=\"90\" y2=\"282\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"90\" y1=\"282\" x2=\"450\" y2=\"282\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"450\" y1=\"282\" x2=\"219.6\" y2=\"109.20000000000002\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"219.6\" y1=\"109.20000000000002\" x2=\"219.6\" y2=\"282\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-H\"/><polyline points=\"219.6,270 231.6,270 231.6,282\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><circle cx=\"219.6\" cy=\"109.20000000000002\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"219.6\" y=\"89.20000000000002\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"90\" cy=\"282\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"75\" y=\"298\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"450\" cy=\"282\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"465\" y=\"298\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"219.6\" cy=\"282\" r=\"2.5\" fill=\"#1e40af\" data-point=\"H\"/><text x=\"219.6\" y=\"301\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">H</text></svg>",
          "solution": "Bước 1: Đặt hai đoạn trên đáy\nĐặt $BH=u>0$, $HC=v>0$ vì $H$ nằm giữa $B,C$.\nKhi đó $BC=u+v$ và giả thiết trở thành $AH^2=uv$.\nBước 2: Áp dụng Pythagore ở tam giác ABH\nVì $AH$ là đường cao, tam giác $ABH$ vuông tại $H$.\nCó $AB^2=AH^2+BH^2=uv+u^2$.\nBước 3: Áp dụng Pythagore ở tam giác ACH\nTương tự, $AC^2=AH^2+HC^2=uv+v^2$.\nCộng hai kết quả: $AB^2+AC^2=u^2+2uv+v^2$.\nBước 4: Tạo điều kiện của định lí đảo\nDùng bình phương một tổng: $u^2+2uv+v^2=(u+v)^2=BC^2$.\nVậy $AB^2+AC^2=BC^2$. Theo định lí Pythagore đảo, tam giác $ABC$ vuông tại đỉnh đối diện cạnh $BC$, tức tại $A$.\nBước 5: Kết luận\n$\\widehat{BAC}=90^\\circ$.\nVì $u,v>0$ nên $AH^2=uv>0$, bảo đảm lập luận không dựa trên một tam giác suy biến."
        }
      ]
    },
    'thales': {
      "kha": [
        {
          "id": "l8-thales-kha-01",
          "lop": 8,
          "chuDe": "thales",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ghép đúng đoạn tương ứng",
          "prompt": "Trong tam giác $ABC$, $M$ nằm giữa $A,B$, $N$ nằm giữa $A,C$ và $MN\\parallel BC$. Tỉ số nào luôn đúng theo định lí Thales?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"18\" data-origin=\"220,295\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 1\"><line x1=\"220\" y1=\"79\" x2=\"58\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"58\" y1=\"295\" x2=\"490\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"490\" y1=\"295\" x2=\"220\" y2=\"79\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"166\" y1=\"151\" x2=\"310\" y2=\"151\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><polyline data-parallel=\"0\" points=\"233,155 238,151 233,147\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"269,299 274,295 269,291\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"220\" cy=\"79\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"220\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"58\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"43\" y=\"311\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"490\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"505\" y=\"311\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"166\" cy=\"151\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"148\" y=\"151\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"310\" cy=\"151\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"328\" y=\"151\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text></svg>",
          "options": [
            "A. $\\frac{AM}{AB}=\\frac{NC}{AC}$",
            "B. $\\frac{AM}{MB}=\\frac{NC}{AN}$",
            "C. $\\frac{AM}{AB}=\\frac{AC}{AN}$",
            "D. $\\frac{AM}{AB}=\\frac{AN}{AC}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận diện cấu hình\n$M$ nằm trên cạnh $AB$, $N$ nằm trên cạnh $AC$ và $MN\\parallel BC$.\nTa cần so sánh các đoạn tính từ cùng đỉnh $A$.\nBước 2: Chọn định lí\nTheo định lí Thales, đường thẳng song song với một cạnh tam giác tạo ra các đoạn tương ứng tỉ lệ.\nBước 3: Viết tỉ số\nTrên hai cạnh $AB,AC$, đoạn từ $A$ đến đường song song lần lượt là $AM,AN$.\nVì vậy $\\frac{AM}{AB}=\\frac{AN}{AC}$.\nBước 4: Đối chiếu\nHai tử số đều là đoạn từ đỉnh $A$; hai mẫu số đều là toàn cạnh tương ứng.\nKhông thay $AN$ bằng $NC$ hoặc đảo riêng một tỉ số.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-thales-kha-02",
          "lop": 8,
          "chuDe": "thales",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đoạn còn lại trên cạnh",
          "prompt": "Trong tam giác $ABC$, $M$ nằm giữa $A,B$, $N$ nằm giữa $A,C$ và $MN\\parallel BC$. Biết $AM=6$ cm, $MB=9$ cm, $AN=8$ cm. Tính $NC$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"18\" data-origin=\"215,295\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 2\"><line x1=\"215\" y1=\"79\" x2=\"53\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"53\" y1=\"295\" x2=\"503\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"503\" y1=\"295\" x2=\"215\" y2=\"79\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"150.2\" y1=\"165.4\" x2=\"330.2\" y2=\"165.4\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><polyline data-parallel=\"0\" points=\"274.79999999999995,169.4 279.79999999999995,165.4 274.79999999999995,161.4\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"372,299 377,295 372,291\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"165\" y=\"109\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >6 cm</text><text x=\"84\" y=\"217\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >9 cm</text><text x=\"285.8\" y=\"104.60000000000001\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >8 cm</text><circle cx=\"215\" cy=\"79\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"215\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"53\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"38\" y=\"311\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"503\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"518\" y=\"311\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"150.2\" cy=\"165.4\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"132.2\" y=\"165.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"330.2\" cy=\"165.4\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"348.2\" y=\"165.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text></svg>",
          "options": [
            "A. 12 cm",
            "B. 20 cm",
            "C. $\\frac{16}{3}$ cm",
            "D. 3 cm"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Ghi dữ kiện\n$AM=6$, $MB=9$, $AN=8$ và $MN\\parallel BC$.\nĐoạn cần tìm là $NC$.\nBước 2: Áp dụng Thales\nHai đoạn trên cạnh $AB$ tương ứng với hai đoạn trên cạnh $AC$.\nDo đó $\\frac{AM}{MB}=\\frac{AN}{NC}$.\nBước 3: Thay số\n$\\frac69=\\frac8{NC}$, nên $6NC=9\\cdot8=72$.\nSuy ra $NC=12$ cm.\nBước 4: Kiểm tra tỉ lệ\n$AB=6+9=15$, $AC=8+12=20$.\nTa có $\\frac6{15}=\\frac8{20}=\\frac25$, phù hợp với đường song song.\nBước 5: Kết luận\n$NC=12$ cm. Chọn A."
        },
        {
          "id": "l8-thales-kha-03",
          "lop": 8,
          "chuDe": "thales",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đoạn nối hai trung điểm",
          "prompt": "Trong tam giác $ABC$, $M,N$ lần lượt là trung điểm của $AB,AC$. Biết $BC=18$ cm. Tính $MN$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"20\" data-origin=\"280,290\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 3\"><line x1=\"280\" y1=\"50\" x2=\"100\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"100\" y1=\"290\" x2=\"460\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"460\" y1=\"290\" x2=\"280\" y2=\"50\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"190\" y1=\"170\" x2=\"370\" y2=\"170\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><line x1=\"239\" y1=\"113\" x2=\"231\" y2=\"107\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"149\" y1=\"233\" x2=\"141\" y2=\"227\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"327.2\" y1=\"104.6\" x2=\"319.2\" y2=\"110.6\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"330.8\" y1=\"109.4\" x2=\"322.8\" y2=\"115.4\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"417.2\" y1=\"224.6\" x2=\"409.2\" y2=\"230.6\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"420.8\" y1=\"229.4\" x2=\"412.8\" y2=\"235.4\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><text x=\"280\" y=\"318\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >18 cm</text><circle cx=\"280\" cy=\"50\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"280\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"100\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"85\" y=\"306\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"460\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"475\" y=\"306\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"190\" cy=\"170\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"172\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"370\" cy=\"170\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"388\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text></svg>",
          "options": [
            "A. 6 cm",
            "B. 12 cm",
            "C. 9 cm",
            "D. 18 cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhận diện hai trung điểm\n$M,N$ lần lượt là trung điểm của $AB,AC$.\nĐoạn $MN$ nối trung điểm hai cạnh của tam giác $ABC$.\nBước 2: Dùng tính chất đường trung bình\nĐường trung bình của tam giác song song với cạnh còn lại và dài bằng một nửa cạnh đó.\nBước 3: Tính độ dài\n$MN=\\frac12BC=\\frac12\\cdot18=9$ cm.\nBước 4: Kiểm tra\n$2MN=18=BC$.\nTa đã lấy một nửa độ dài cạnh thứ ba, không lấy một nửa tổng hai cạnh chứa trung điểm.\nBước 5: Kết luận\nChọn C."
        }
      ],
      "nangCao": [
        {
          "id": "l8-thales-nang-cao-01",
          "lop": 8,
          "chuDe": "thales",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Dùng định lí Thales đảo",
          "prompt": "Trong tam giác $ABC$, $M$ nằm giữa $A,B$, $N$ nằm giữa $A,C$. Biết $AM=3$, $MB=12$, $AN=4$, $NC=16$ (cm). Kết luận nào đúng?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"18\" data-origin=\"215,295\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 4\"><line x1=\"215\" y1=\"79\" x2=\"53\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"53\" y1=\"295\" x2=\"503\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"503\" y1=\"295\" x2=\"215\" y2=\"79\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"182.6\" y1=\"122.20000000000002\" x2=\"272.6\" y2=\"122.20000000000002\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><text x=\"180.4\" y=\"86.80000000000001\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >3</text><text x=\"99.39999999999999\" y=\"194.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >12</text><text x=\"257.6\" y=\"82.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >4</text><text x=\"401.6\" y=\"190.20000000000002\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >16</text><circle cx=\"215\" cy=\"79\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"215\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"53\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"38\" y=\"311\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"503\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"518\" y=\"311\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"182.6\" cy=\"122.20000000000002\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"164.6\" y=\"122.20000000000002\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"272.6\" cy=\"122.20000000000002\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"290.6\" y=\"122.20000000000002\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text><text x=\"430\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >Đơn vị: cm</text></svg>",
          "options": [
            "A. $MN\\perp BC$",
            "B. $MN\\parallel BC$",
            "C. $MB\\parallel NC$",
            "D. $AN\\parallel MB$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định các đoạn tương ứng\n$M$ nằm trên $AB$, $N$ nằm trên $AC$.\nTa so sánh $AM$ với $MB$ và $AN$ với $NC$.\nBước 2: Tính hai tỉ số\n$\\frac{AM}{MB}=\\frac3{12}=\\frac14$.\n$\\frac{AN}{NC}=\\frac4{16}=\\frac14$.\nBước 3: Chọn định lí đảo\nHai tỉ số bằng nhau, với các điểm nằm trên hai cạnh của cùng tam giác.\nTheo định lí Thales đảo, $MN\\parallel BC$.\nBước 4: Phân biệt kết luận\nTa dùng các đoạn tỉ lệ để kết luận song song, không phải vuông góc.\nCác đoạn $MB,AN$ thuộc hai cạnh khác nhau của tam giác nên không phải cặp song song cần tìm.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-thales-nang-cao-02",
          "lop": 8,
          "chuDe": "thales",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Từ phần cạnh đến đoạn song song đáy",
          "prompt": "Trong tam giác $ABC$, $M\\in AB$, $N\\in AC$, cả hai ở trong các cạnh và $MN\\parallel BC$. Biết $AM=8$ cm, $MB=12$ cm, $BC=25$ cm. Tính $MN$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"18\" data-origin=\"215,295\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 5\"><line x1=\"215\" y1=\"79\" x2=\"503\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"503\" y1=\"295\" x2=\"53\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"53\" y1=\"295\" x2=\"215\" y2=\"79\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"330.2\" y1=\"165.4\" x2=\"150.2\" y2=\"165.4\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><polyline data-parallel=\"0\" points=\"226.2,169.4 231.2,165.4 226.2,161.4\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"250.49999999999997,299 255.49999999999997,295 250.49999999999997,291\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"285.8\" y=\"104.60000000000001\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >8 cm</text><text x=\"429.8\" y=\"212.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >12 cm</text><text x=\"278\" y=\"323\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >25 cm</text><circle cx=\"215\" cy=\"79\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"215\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"503\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"517\" y=\"311\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"53\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"39\" y=\"311\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"330.2\" cy=\"165.4\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"348.2\" y=\"165.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"150.2\" cy=\"165.4\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"132.2\" y=\"165.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text></svg>",
          "options": [
            "A. 15 cm",
            "B. $\\frac{50}{3}$ cm",
            "C. 10 cm",
            "D. $\\frac{125}{2}$ cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tính toàn cạnh\n$AB=AM+MB=8+12=20$ cm.\nMẫu số trong tỉ số với $MN/BC$ phải là $AB$, không phải $MB$.\nBước 2: Dùng hệ quả Thales\nVì $MN\\parallel BC$, ta có $\\frac{MN}{BC}=\\frac{AM}{AB}$.\nBước 3: Thay số\n$\\frac{MN}{25}=\\frac8{20}=\\frac25$.\nVậy $MN=25\\cdot\\frac25=10$ cm.\nBước 4: Kiểm tra\n$MN<BC$ vì $M,N$ nằm trên hai cạnh và đoạn song song nằm bên trong tam giác.\nTỉ số $10/25=8/20$ đúng với dữ kiện.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-thales-nang-cao-03",
          "lop": 8,
          "chuDe": "thales",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân giác chia cạnh đối diện",
          "prompt": "Tam giác $ABC$ có $AB=10$ cm, $AC=15$ cm, $BC=20$ cm. Phân giác trong của góc $A$ cắt $BC$ tại $D$. Tính $BD$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"22\" data-origin=\"60,275\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 6\"><line x1=\"211.25\" y1=\"115.23943696894406\" x2=\"60\" y2=\"275\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"60\" y1=\"275\" x2=\"500\" y2=\"275\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"500\" y1=\"275\" x2=\"211.25\" y2=\"115.23943696894406\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"211.25\" y1=\"115.23943696894406\" x2=\"236\" y2=\"275\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-D\"/><path d=\"M 193.375 134.12023078170523 A 26 26 0 0 0 215.23042083202267 140.93294295781214\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"204.7029290085433\" y1=\"136.2426715158615\" x2=\"202.32217592074088\" y2=\"143.8802113511042\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><path d=\"M 215.23042083202267 140.93294295781214 A 26 26 0 0 0 234 127.82663284411817\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"223.8452690400368\" y1=\"133.27715294988494\" x2=\"228.4253668727775\" y2=\"139.8363223974998\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><text x=\"118.19657494206663\" y=\"178.61971848447203\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >10 cm</text><text x=\"367.24395003862224\" y=\"174.11971848447203\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >15 cm</text><text x=\"280\" y=\"319\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >20 cm</text><circle cx=\"211.25\" cy=\"115.23943696894406\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"211.25\" y=\"95.23943696894406\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"60\" cy=\"275\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"45\" y=\"292\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"500\" cy=\"275\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"515\" y=\"292\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"236\" cy=\"275\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"236\" y=\"295\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text></svg>",
          "options": [
            "A. 12 cm",
            "B. 10 cm",
            "C. $\\frac{40}{3}$ cm",
            "D. 8 cm"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Ghi vai trò của đường phân giác\n$AD$ là phân giác trong của góc $A$, với $D$ nằm trên $BC$.\nTa cần tìm $BD$ khi biết $BC=20$ cm.\nBước 2: Dùng tính chất phân giác\n$\\frac{BD}{DC}=\\frac{AB}{AC}=\\frac{10}{15}=\\frac23$.\nNhư vậy $BD,DC$ lần lượt chiếm $2$ và $3$ phần bằng nhau.\nBước 3: Tìm độ dài một phần\nTổng $5$ phần bằng $BC=20$ cm.\nMột phần dài $20/5=4$ cm; do đó $BD=2\\cdot4=8$ cm.\nBước 4: Kiểm tra\n$DC=12$ cm, nên $BD+DC=20$ và $BD/DC=8/12=2/3$.\nCác cạnh $10,15,20$ tạo được tam giác vì $10+15>20$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-thales-nang-cao-04",
          "lop": 8,
          "chuDe": "thales",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Điểm trên phần kéo dài",
          "prompt": "Cho tam giác $ABC$. Trên tia $AB$ lấy $M$ sao cho $B$ nằm giữa $A,M$; trên tia $AC$ lấy $N$ sao cho $C$ nằm giữa $A,N$. Biết $MN\\parallel BC$, $AB=15$ cm, $BM=6$ cm, $AC=20$ cm. Tính $CN$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"12\" data-origin=\"330,190\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 7\"><line x1=\"330\" y1=\"46\" x2=\"481.2\" y2=\"247.6\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-M\"/><line x1=\"481.2\" y1=\"247.6\" x2=\"61.200000000000045\" y2=\"247.6\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><line x1=\"61.200000000000045\" y1=\"247.6\" x2=\"330\" y2=\"46\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"N-A\"/><line x1=\"438\" y1=\"190\" x2=\"138\" y2=\"190\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><polyline data-parallel=\"0\" points=\"283,194 288,190 283,186\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"266.20000000000005,251.6 271.20000000000005,247.6 266.20000000000005,243.6\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"402.4\" y=\"104.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >15 cm</text><text x=\"478\" y=\"205.00000000000003\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >6 cm</text><text x=\"220.2\" y=\"99.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >20 cm</text><circle cx=\"330\" cy=\"46\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"330\" y=\"26\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"438\" cy=\"190\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"460\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"138\" cy=\"190\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"116\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"481.2\" cy=\"247.6\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"496.2\" y=\"264.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"61.200000000000045\" cy=\"247.6\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"46.200000000000045\" y=\"264.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text></svg>",
          "options": [
            "A. 8 cm",
            "B. 28 cm",
            "C. 12 cm",
            "D. 50 cm"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đọc đúng thứ tự điểm\n$A,B,M$ theo thứ tự đó nên $AM=AB+BM=15+6=21$ cm.\nTương tự, $AN=AC+CN$.\nBước 2: Dùng hệ quả Thales\nTrong tam giác $AMN$, có $BC\\parallel MN$.\nVì vậy $\\frac{AB}{AM}=\\frac{AC}{AN}$.\nBước 3: Tìm đoạn từ đỉnh\n$\\frac{15}{21}=\\frac{20}{AN}$, nên $AN=\\frac{20\\cdot21}{15}=28$ cm.\nBước 4: Trở về đoạn cần hỏi\n$CN=AN-AC=28-20=8$ cm.\nKiểm tra $BM/AB=6/15=8/20=CN/AC$.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-thales-nang-cao-05",
          "lop": 8,
          "chuDe": "thales",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chu vi từ hai đường trung bình",
          "prompt": "Tam giác $ABC$ có $AB=15$ cm, $AC=20$ cm, $BC=25$ cm. Gọi $M,N,P$ lần lượt là trung điểm $AB,AC,BC$. Tính chu vi tứ giác $AMPN$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"18\" data-origin=\"215,295\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 8\"><line x1=\"215\" y1=\"79\" x2=\"53\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"53\" y1=\"295\" x2=\"503\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"503\" y1=\"295\" x2=\"215\" y2=\"79\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"134\" y1=\"187\" x2=\"278\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-P\"/><line x1=\"278\" y1=\"295\" x2=\"359\" y2=\"187\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"P-N\"/><line x1=\"178.5\" y1=\"136\" x2=\"170.5\" y2=\"130\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"97.5\" y1=\"244\" x2=\"89.5\" y2=\"238\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"287.6\" y1=\"127.19999999999999\" x2=\"281.6\" y2=\"135.2\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"292.4\" y1=\"130.8\" x2=\"286.4\" y2=\"138.8\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"431.6\" y1=\"235.2\" x2=\"425.6\" y2=\"243.2\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"436.4\" y1=\"238.8\" x2=\"430.4\" y2=\"246.8\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"159.5\" y1=\"290\" x2=\"159.5\" y2=\"300\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"2\"/><line x1=\"165.5\" y1=\"290\" x2=\"165.5\" y2=\"300\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"2\"/><line x1=\"171.5\" y1=\"290\" x2=\"171.5\" y2=\"300\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"2\"/><line x1=\"384.5\" y1=\"290\" x2=\"384.5\" y2=\"300\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"2\"/><line x1=\"390.5\" y1=\"290\" x2=\"390.5\" y2=\"300\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"2\"/><line x1=\"396.5\" y1=\"290\" x2=\"396.5\" y2=\"300\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"2\"/><text x=\"278\" y=\"338\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >25 cm</text><circle cx=\"215\" cy=\"79\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"215\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"53\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"38\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"503\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"518\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"134\" cy=\"187\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"116\" y=\"187\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"359\" cy=\"187\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"377\" y=\"187\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text><circle cx=\"278\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"P\"/><text x=\"278\" y=\"315\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">P</text><text x=\"415\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >AB = 15 cm</text><text x=\"415\" y=\"67\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >AC = 20 cm</text></svg>",
          "options": [
            "A. 17,5 cm",
            "B. 30 cm",
            "C. 35 cm",
            "D. 60 cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định bốn cạnh cần cộng\nChu vi tứ giác $AMPN$ bằng $AM+MP+PN+NA$.\nĐây không phải chu vi tam giác $MNP$.\nBước 2: Tính các nửa cạnh\n$M,N$ là trung điểm nên $AM=AB/2=7{,}5$ cm và $AN=AC/2=10$ cm.\nBước 3: Tính hai đường trung bình\n$MP$ nối trung điểm $AB,BC$ nên $MP=AC/2=10$ cm.\n$PN$ nối trung điểm $BC,AC$ nên $PN=AB/2=7{,}5$ cm.\nBước 4: Cộng chu vi\n$AM+MP+PN+NA=7{,}5+10+7{,}5+10=35$ cm.\nMỗi đoạn được tính đúng một lần.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-thales-nang-cao-06",
          "lop": 8,
          "chuDe": "thales",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đọc sơ đồ đo khoảng cách",
          "prompt": "Để tìm khoảng cách $AB$ không đo trực tiếp được, người đo lập sơ đồ với $O,A,M$ thẳng hàng theo thứ tự đó, $O,B,N$ thẳng hàng theo thứ tự đó và $AB\\parallel MN$. Đo được $OA=12$ m, $AM=8$ m, $MN=30$ m. Tính $AB$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"12\" data-origin=\"105,292\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 9\"><line x1=\"105\" y1=\"292\" x2=\"105\" y2=\"52\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"O-M\"/><line x1=\"105\" y1=\"52\" x2=\"465\" y2=\"52\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><line x1=\"465\" y1=\"52\" x2=\"105\" y2=\"292\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"N-O\"/><line x1=\"105\" y1=\"148\" x2=\"321\" y2=\"148\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><polyline data-parallel=\"0\" points=\"197.2,152 202.2,148 197.2,144\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"262,56 267,52 262,48\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"75\" y=\"220\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >12 m</text><text x=\"75\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >8 m</text><text x=\"285\" y=\"29\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >30 m</text><circle cx=\"105\" cy=\"292\" r=\"2.5\" fill=\"#1e40af\" data-point=\"O\"/><text x=\"91\" y=\"309\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">O</text><circle cx=\"105\" cy=\"148\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"85\" y=\"148\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"105\" cy=\"52\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"90\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"321\" cy=\"148\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"338\" y=\"156\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"465\" cy=\"52\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"480\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text></svg>",
          "options": [
            "A. 45 m",
            "B. 12 m",
            "C. 50 m",
            "D. 18 m"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính độ dài toàn cạnh\n$O,A,M$ theo thứ tự đó nên $OM=OA+AM=12+8=20$ m.\nBước 2: Xác định cấu hình Thales\nTrong tam giác $OMN$, $A$ thuộc $OM$, $B$ thuộc $ON$ và $AB\\parallel MN$.\nTheo hệ quả Thales, $\\frac{AB}{MN}=\\frac{OA}{OM}$.\nBước 3: Tính đoạn song song\n$AB=30\\cdot\\frac{12}{20}=18$ m.\nBước 4: Kiểm tra\n$AB/MN=18/30=3/5=OA/OM$.\nKhông dùng $OA/AM$, vì $MN$ là cạnh của toàn tam giác $OMN$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-thales-nang-cao-07",
          "lop": 8,
          "chuDe": "thales",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai đường song song và hiệu độ dài",
          "prompt": "Trong tam giác $ABC$, các điểm có thứ tự $A,M,P,B$ trên $AB$ và $A,N,Q,C$ trên $AC$, với $MN\\parallel PQ\\parallel BC$. Biết $MP=3$ cm, $NQ=5$ cm, $AC-AB=10$ cm, $AM=PB$ và $BC=20$ cm. Tính $MN$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"17\" data-origin=\"110,295\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 10\"><line x1=\"110\" y1=\"40\" x2=\"110\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"110\" y1=\"295\" x2=\"450\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"450\" y1=\"295\" x2=\"110\" y2=\"40\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"110\" y1=\"142\" x2=\"246\" y2=\"142\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><line x1=\"110\" y1=\"193\" x2=\"314\" y2=\"193\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"P-Q\"/><line x1=\"115\" y1=\"91\" x2=\"105\" y2=\"91\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"115\" y1=\"244\" x2=\"105\" y2=\"244\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><polyline data-parallel=\"0\" points=\"173,146 178,142 173,138\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"207,197 212,193 207,189\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"275,299 280,295 275,291\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"85\" y=\"167.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >3 cm</text><text x=\"295.6\" y=\"146.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >5 cm</text><text x=\"280\" y=\"323\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >20 cm</text><circle cx=\"110\" cy=\"40\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"110\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"110\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"95\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"450\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"465\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"110\" cy=\"142\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"92\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"110\" cy=\"193\" r=\"2.5\" fill=\"#1e40af\" data-point=\"P\"/><text x=\"92\" y=\"193\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">P</text><circle cx=\"246\" cy=\"142\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"264\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text><circle cx=\"314\" cy=\"193\" r=\"2.5\" fill=\"#1e40af\" data-point=\"Q\"/><text x=\"332\" y=\"193\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">Q</text><text x=\"420\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >AC − AB = 10 cm</text></svg>",
          "options": [
            "A. 12 cm",
            "B. 8 cm",
            "C. 4 cm",
            "D. 10 cm"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Viết hai hệ thức Thales\nTừ $MN\\parallel BC$, có $\\frac{AM}{AB}=\\frac{AN}{AC}$.\nTừ $PQ\\parallel BC$, có $\\frac{AP}{AB}=\\frac{AQ}{AC}$.\nBước 2: Trừ các đoạn cùng phía\nTrừ hai hệ thức được $\\frac{AP-AM}{AB}=\\frac{AQ-AN}{AC}$.\nTheo thứ tự điểm, $AP-AM=MP=3$ và $AQ-AN=NQ=5$.\nVậy $3/AB=5/AC$, hay $AB/AC=3/5$.\nBước 3: Tìm hai cạnh\n$AC-AB=10$ cm ứng với $5-3=2$ phần.\nMột phần bằng $5$ cm, nên $AB=15$ cm và $AC=25$ cm.\nBước 4: Tính đoạn cần tìm\nVì $AM=PB$ và $AB=AM+MP+PB$, ta có $2AM+3=15$, nên $AM=6$ cm.\n$MN=BC\\cdot AM/AB=20\\cdot6/15=8$ cm.\nBước 5: Kết luận\nCác đoạn trên $AB$ là $6,3,6$, trên $AC$ là $10,5,10$, đúng các tỉ lệ song song.\nChọn B."
        }
      ],
      "hsg": [
        {
          "id": "l8-thales-hsg-01",
          "lop": 8,
          "chuDe": "thales",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Phân giác và hiệu hai phần",
          "prompt": "Tam giác $ABC$ có $AB=9$ cm, $AC=15$ cm. Phân giác trong $AD$ cắt $BC$ tại $D$, biết $DC-BD=4$ cm. Tính $BD$ theo cm.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"25\" data-origin=\"85,280\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 11\"><line x1=\"172.5\" y1=\"72.71095060278748\" x2=\"85\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"85\" y1=\"280\" x2=\"485\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"485\" y1=\"280\" x2=\"172.5\" y2=\"72.71095060278748\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"172.5\" y1=\"72.71095060278748\" x2=\"235\" y2=\"280\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-D\"/><path d=\"M 162.38888888888889 96.66435186646537 A 26 26 0 0 0 180.00555349946512 97.60405540445227\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"171.3281477022483\" y1=\"94.67971848340049\" x2=\"170.90201959397493\" y2=\"102.66836134907795\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><path d=\"M 180.00555349946512 97.60405540445227 A 26 26 0 0 0 194.16666666666666 87.08299136099421\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"185.62023694252719\" y1=\"90.37049143973861\" x2=\"190.39123219435527\" y2=\"96.79214265317539\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><text x=\"106.63916806429734\" y=\"167.0221419680604\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >9 cm</text><text x=\"342.0164991614216\" y=\"156.35547530139374\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >15 cm</text><circle cx=\"172.5\" cy=\"72.71095060278748\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"172.5\" y=\"52.71095060278748\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"85\" cy=\"280\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"70\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"485\" cy=\"280\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"500\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"235\" cy=\"280\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"235\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><text x=\"285\" y=\"331\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >DC − BD = 4 cm</text></svg>",
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chọn tính chất của phân giác\n$AD$ là phân giác trong của tam giác $ABC$, nên nó chia cạnh đối diện theo tỉ số hai cạnh kề.\nVì vậy $BD/DC=AB/AC=9/15=3/5$.\nBước 2: Biểu diễn hai đoạn theo cùng một đơn vị\nĐặt $BD=3t$, $DC=5t$ với $t>0$.\nCách đặt này giữ đúng tỉ số và độ dài dương.\nBước 3: Sử dụng hiệu đã cho\n$DC-BD=4$ cho $5t-3t=4$.\nSuy ra $2t=4$, nên $t=2$; do đó $BD=6$ cm và $DC=10$ cm.\nBước 4: Kiểm tra dữ kiện\nCó $DC-BD=10-6=4$ và $BD/DC=6/10=3/5$.\nCạnh $BC=16$ nằm giữa $|15-9|=6$ và $15+9=24$, nên phù hợp tam giác không suy biến.\nBước 5: Kết luận\n$BD=6$ cm."
        },
        {
          "id": "l8-thales-hsg-02",
          "lop": 8,
          "chuDe": "thales",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tổng đoạn và chu vi phần còn lại",
          "prompt": "Tam giác $ABC$ có $AB=18$ cm, $AC=24$ cm, $BC=30$ cm. Các điểm $M,N$ ở trong $AB,AC$ và $MN\\parallel BC$, với $MB+MN=26$ cm. Tính chu vi tứ giác $BMNC$ theo cm.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"11\" data-origin=\"190,302\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 12\"><line x1=\"190\" y1=\"302\" x2=\"388\" y2=\"302\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"388\" y1=\"302\" x2=\"190\" y2=\"38\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"190\" y1=\"38\" x2=\"190\" y2=\"302\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"322\" y1=\"302\" x2=\"190\" y2=\"126\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><polyline data-parallel=\"0\" points=\"243.2,203.6 249.39999999999998,205.2 249.59999999999997,198.79999999999998\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"272.90000000000003,155.2 279.1,156.79999999999998 279.3,150.39999999999998\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"289\" y=\"348\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >18 cm</text><text x=\"150\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >24 cm</text><text x=\"309.8\" y=\"154.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >30 cm</text><circle cx=\"190\" cy=\"302\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"174\" y=\"316\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"388\" cy=\"302\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"404\" y=\"318\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"190\" cy=\"38\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"190\" y=\"18\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"322\" cy=\"302\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"322\" y=\"324\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"190\" cy=\"126\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"170\" y=\"126\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text><text x=\"400\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >MB + MN = 26 cm</text></svg>",
          "correctAnswer": "64",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt đoạn làm ẩn\nĐặt $AM=x$ cm với $0<x<18$.\nVì $M$ nằm trong $AB$, có $MB=18-x$.\nBước 2: Dùng hệ quả Thales\n$MN\\parallel BC$ cho $MN/BC=AM/AB$.\nSuy ra $MN=30x/18=5x/3$.\nBước 3: Giải điều kiện tổng\nTừ $MB+MN=26$, được $18-x+5x/3=26$.\nDo đó $2x/3=8$, nên $x=12$, thuộc khoảng cho phép. Khi ấy $MB=6$ và $MN=20$ cm.\nBước 4: Tìm đoạn còn lại trên AC\nThales cho $AN/AC=AM/AB=12/18=2/3$, nên $AN=16$ cm.\nVì $N$ ở trong $AC$, có $NC=24-16=8$ cm.\nBước 5: Kết luận\nChu vi tứ giác $BMNC$ bằng $BM+MN+NC+CB=6+20+8+30=64$ cm."
        },
        {
          "id": "l8-thales-hsg-03",
          "lop": 8,
          "chuDe": "thales",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Phân giác nối với hai đường song song",
          "prompt": "Tam giác $ABC$ có $AB=12$ cm, $AC=18$ cm, $BC=20$ cm. Phân giác trong $AD$ cắt $BC$ tại $D$. Qua $D$ kẻ đường song song $AB$, cắt $AC$ tại $E$. Qua $E$ kẻ đường song song $BC$, cắt $AB$ tại $F$. Tính $AF$ theo cm.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"22\" data-origin=\"60,290\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 13\"><line x1=\"181\" y1=\"55.36198091528303\" x2=\"60\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"60\" y1=\"290\" x2=\"500\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"500\" y1=\"290\" x2=\"181\" y2=\"55.36198091528303\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"181\" y1=\"55.36198091528303\" x2=\"236\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-D\"/><line x1=\"236\" y1=\"290\" x2=\"308.6\" y2=\"149.21718854916983\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-E\"/><line x1=\"308.6\" y1=\"149.21718854916983\" x2=\"132.6\" y2=\"149.21718854916983\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-F\"/><polyline data-parallel=\"0\" points=\"269.9334548346169,232.92497005706426 268.67,226.64773484712643 262.82321183204976,229.25830339039757\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"115.71345483461693,190.69012662181518 114.45,184.41289141187735 108.60321183204974,187.0234599551485\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"202.3,153.21718854916983 207.3,149.21718854916983 202.3,145.21718854916983\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"211.3,153.21718854916983 216.3,149.21718854916983 211.3,145.21718854916983\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"292.5,294 297.5,290 292.5,286\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"301.5,294 306.5,290 301.5,286\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><path d=\"M 169.08333333333334 78.47027067362637 A 26 26 0 0 0 186.9336610396393 80.67584404730353\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"178.3022115843145\" y1=\"77.19594385525782\" x2=\"177.3211976149743\" y2=\"85.13556674252139\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><path d=\"M 186.9336610396393 80.67584404730353 A 26 26 0 0 0 201.94444444444446 70.76750742084525\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"193.1195676773183\" y1=\"73.72270201536244\" x2=\"197.52668319634313\" y2=\"80.39932786993678\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><text x=\"65.43902798973129\" y=\"209.6346879896126\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >12 cm</text><text x=\"427.27056700599\" y=\"201.74579910072367\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >18 cm</text><text x=\"280\" y=\"333\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >20 cm</text><circle cx=\"181\" cy=\"55.36198091528303\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"181\" y=\"35.36198091528303\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"60\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"45\" y=\"307\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"500\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"515\" y=\"307\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"236\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"236\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"308.6\" cy=\"149.21718854916983\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"327.6\" y=\"149.21718854916983\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text><circle cx=\"132.6\" cy=\"149.21718854916983\" r=\"2.5\" fill=\"#1e40af\" data-point=\"F\"/><text x=\"113.6\" y=\"149.21718854916983\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">F</text></svg>",
          "correctAnswer": "4.8",
          "dapAnChapNhan": [
            "4,8",
            "24/5"
          ],
          "solution": "Bước 1: Chia cạnh BC bằng phân giác\nTính chất phân giác cho $BD/DC=AB/AC=12/18=2/3$.\nVì $BD+DC=20$, tổng $5$ phần ứng với $20$ cm, nên $BD=8$ cm và $DC=12$ cm.\nBước 2: Xét đường song song thứ nhất\nTrong tam giác $CAB$, có $D$ thuộc $CB$, $E$ thuộc $CA$ và $DE\\parallel AB$.\nThales cho $CE/CA=CD/CB=12/20=3/5$.\nBước 3: Đổi từ đoạn CE sang AE\nDo $E$ nằm giữa $A,C$, $AE=AC-CE$.\nChia cho $AC>0$, được $AE/AC=1-CE/AC=1-3/5=2/5$.\nBước 4: Xét đường song song thứ hai\nTrong tam giác $ABC$, $EF\\parallel BC$ nên $AF/AB=AE/AC=2/5$.\nDo đó $AF=12\\cdot2/5=24/5=4{,}8$ cm. Các tỉ số nằm giữa $0$ và $1$, phù hợp các điểm trên phần trong của cạnh.\nBước 5: Kết luận\n$AF=4{,}8$ cm. Nhập $4,8$ hoặc $4.8$."
        },
        {
          "id": "l8-thales-hsg-04",
          "lop": 8,
          "chuDe": "thales",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Khôi phục tỉ số để chứng minh song song",
          "prompt": "Trong tam giác $ABC$, $M,N$ nằm trong các cạnh $AB,AC$. Gọi $P$ là trung điểm $MB$, $Q$ là trung điểm $NC$. Biết $\\frac{AP}{AQ}=\\frac{AB}{AC}$. Chứng minh $MN\\parallel BC$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"20\" data-origin=\"215,293\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 14\"><line x1=\"215\" y1=\"53\" x2=\"35\" y2=\"293\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"35\" y1=\"293\" x2=\"535\" y2=\"293\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"535\" y1=\"293\" x2=\"215\" y2=\"53\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"179\" y1=\"101\" x2=\"279\" y2=\"101\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><line x1=\"147\" y1=\"152\" x2=\"139\" y2=\"146\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"75\" y1=\"248\" x2=\"67\" y2=\"242\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"343.6\" y1=\"143.2\" x2=\"337.6\" y2=\"151.2\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"348.4\" y1=\"146.8\" x2=\"342.4\" y2=\"154.8\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"471.6\" y1=\"239.2\" x2=\"465.6\" y2=\"247.2\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"476.4\" y1=\"242.8\" x2=\"470.4\" y2=\"250.8\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><circle cx=\"215\" cy=\"53\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"215\" y=\"33\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"35\" cy=\"293\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"20\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"535\" cy=\"293\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"550\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"179\" cy=\"101\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"159\" y=\"101\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"279\" cy=\"101\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"299\" y=\"101\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text><circle cx=\"107\" cy=\"197\" r=\"2.5\" fill=\"#1e40af\" data-point=\"P\"/><text x=\"87\" y=\"197\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">P</text><circle cx=\"407\" cy=\"197\" r=\"2.5\" fill=\"#1e40af\" data-point=\"Q\"/><text x=\"427\" y=\"197\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">Q</text></svg>",
          "solution": "Bước 1: Biểu diễn AP qua AM và AB\n$P$ là trung điểm $MB$ nên $MP=MB/2$.\nVì thứ tự là $A,M,P,B$, có $AP=AM+MB/2=AM+(AB-AM)/2=(AB+AM)/2$.\nBước 2: Biểu diễn AQ tương tự\n$Q$ là trung điểm $NC$, nên $AQ=AN+NC/2=(AC+AN)/2$.\nMọi đoạn ở mẫu đều dương vì các điểm nằm trong cạnh tam giác.\nBước 3: Sử dụng giả thiết tỉ số\nThay vào $AP/AQ=AB/AC$, được $(AB+AM)/(AC+AN)=AB/AC$.\nNhân chéo: $(AB+AM)AC=(AC+AN)AB$.\nBước 4: Tạo điều kiện Thales đảo\nKhai triển rồi trừ $AB\\cdot AC$ ở hai vế, còn $AM\\cdot AC=AN\\cdot AB$.\nChia cho $AB\\cdot AC>0$: $AM/AB=AN/AC$.\nVì $M,N$ nằm trong $AB,AC$, định lí Thales đảo áp dụng được.\nBước 5: Kết luận\n$MN\\parallel BC$."
        },
        {
          "id": "l8-thales-hsg-05",
          "lop": 8,
          "chuDe": "thales",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hệ thức qua hai đường song song",
          "prompt": "Trong tam giác $ABC$, $M,N$ nằm trong $AB,AC$ và $MN\\parallel BC$. Lấy $P$ nằm giữa $A,M$. Qua $P$ kẻ đường song song $AN$, cắt $MN$ tại $Q$. Chứng minh $AP\\cdot BC=QN\\cdot AB$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"15\" data-origin=\"225,293\" width=\"100%\" role=\"img\" aria-label=\"Lớp 8 · thales · câu 15\"><line x1=\"225\" y1=\"68\" x2=\"45\" y2=\"293\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"45\" y1=\"293\" x2=\"495\" y2=\"293\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"495\" y1=\"293\" x2=\"225\" y2=\"68\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"117\" y1=\"203\" x2=\"387\" y2=\"203\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-N\"/><line x1=\"189\" y1=\"113\" x2=\"297\" y2=\"203\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"P-Q\"/><polyline data-parallel=\"0\" points=\"179.5,207 184.5,203 179.5,199\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"0\" points=\"152.5,297 157.5,293 152.5,289\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"233.14116024516701,154.99113332157694 239.54300424181181,155.11917020150983 238.26263544248283,148.84536308479792\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"240.05515176154339,160.75279291855728 246.45699575818819,160.88082979849017 245.1766269588592,154.60702268177826\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"296.141160245167,132.49113332157694 302.5430042418118,132.61917020150983 301.2626354424828,126.34536308479792\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><polyline data-parallel=\"1\" points=\"303.0551517615434,138.25279291855728 309.4569957581882,138.38082979849017 308.17662695885923,132.10702268177826\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"2\"/><circle cx=\"225\" cy=\"68\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"225\" y=\"48\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"45\" cy=\"293\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"30\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"495\" cy=\"293\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"510\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"117\" cy=\"203\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"97\" y=\"203\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"387\" cy=\"203\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"407\" y=\"203\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text><circle cx=\"189\" cy=\"113\" r=\"2.5\" fill=\"#1e40af\" data-point=\"P\"/><text x=\"169\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">P</text><circle cx=\"297\" cy=\"203\" r=\"2.5\" fill=\"#1e40af\" data-point=\"Q\"/><text x=\"297\" y=\"223\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">Q</text></svg>",
          "solution": "Bước 1: Áp dụng Thales trong tam giác nhỏ\nXét tam giác $MAN$, có $P$ nằm giữa $M,A$ và $PQ\\parallel AN$.\nĐịnh lí Thales cho $MP/MA=MQ/MN$. Tỉ số đầu nằm trong $(0;1)$ nên $Q$ nằm trong $MN$.\nBước 2: Chuyển sang các đoạn bù\nVì $AP=AM-MP$ và $QN=MN-MQ$, lấy $1$ trừ hai vế được $AP/AM=QN/MN$.\nCác mẫu đều là độ dài cạnh dương.\nBước 3: Áp dụng hệ quả Thales trong tam giác lớn\nTừ $MN\\parallel BC$ trong tam giác $ABC$, có $AM/AB=MN/BC$.\nĐẳng thức này liên hệ kích thước tam giác nhỏ với tam giác ban đầu.\nBước 4: Kết nối hai kết quả\nNhân theo từng vế: $(AP/AM)(AM/AB)=(QN/MN)(MN/BC)$.\nRút gọn các độ dài khác $0$, được $AP/AB=QN/BC$.\nBước 5: Kết luận\nNhân hai vế với $AB\\cdot BC>0$, suy ra $AP\\cdot BC=QN\\cdot AB$, đúng điều cần chứng minh."
        }
      ]
    },
    'tam-giac-dong-dang': {
      "kha": [
        {
          "id": "l8-tam-giac-dong-dang-kha-01",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đọc thứ tự đỉnh tương ứng",
          "prompt": "Biết $\\triangle ABC\\sim\\triangle MNP$ theo đúng thứ tự đã viết. Cặp góc nào tương ứng với nhau?",
          "svg": "",
          "options": [
            "A. $\\widehat A$ và $\\widehat N$",
            "B. $\\widehat B$ và $\\widehat N$",
            "C. $\\widehat C$ và $\\widehat M$",
            "D. $\\widehat B$ và $\\widehat P$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đọc thứ tự kí hiệu\nĐề cho $\\triangle ABC\\sim\\triangle MNP$ theo đúng thứ tự đã viết.\nCác đỉnh ở cùng vị trí là các đỉnh tương ứng.\nBước 2: Ghép từng đỉnh\n$A$ ứng với $M$, $B$ ứng với $N$, $C$ ứng với $P$.\nBước 3: Dùng tính chất đồng dạng\nCác góc tương ứng của hai tam giác đồng dạng bằng nhau.\nDo đó $\\widehat B=\\widehat N$.\nBước 4: Đối chiếu phương án\nCặp góc $B,N$ đúng thứ tự; các cặp còn lại ghép các đỉnh không tương ứng.\nKhông căn cứ vào vị trí trái, phải của đỉnh trên hình để đổi thứ tự.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-tam-giac-dong-dang-kha-02",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cạnh tương ứng và chiều của tỉ số",
          "prompt": "Hai tam giác $ABC,MNP$ đồng dạng theo thứ tự đó, với $\\frac{AB}{MN}=\\frac23$. Biết $NP=12$ cm. Tính $BC$.",
          "svg": "",
          "options": [
            "A. 18 cm",
            "B. 6 cm",
            "C. 8 cm",
            "D. 4 cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định cạnh tương ứng\nTheo thứ tự $ABC,MNP$, cạnh $BC$ tương ứng với $NP$.\nBước 2: Viết tỉ số cùng chiều\n$\\frac{BC}{NP}=\\frac{AB}{MN}=\\frac23$.\nCác tử đều là cạnh của $ABC$, các mẫu đều là cạnh của $MNP$.\nBước 3: Tính độ dài\n$BC=12\\cdot\\frac23=8$ cm.\nBước 4: Kiểm tra\n$8/12=2/3$, đúng tỉ số đề bài.\nNếu nhân $12$ với $3/2$ thì đã đảo chiều tỉ số.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-tam-giac-dong-dang-kha-03",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai góc và thứ tự đồng dạng",
          "prompt": "Tam giác $ABC$ có $\\widehat A=40^\\circ$, $\\widehat B=65^\\circ$. Tam giác $DEF$ có $\\widehat D=75^\\circ$, $\\widehat E=40^\\circ$. Cách viết nào đúng?",
          "svg": "",
          "options": [
            "A. $\\triangle ABC\\sim\\triangle DEF$",
            "B. $\\triangle ABC\\sim\\triangle EFD$",
            "C. $\\triangle ABC\\sim\\triangle EDF$",
            "D. $\\triangle ABC\\sim\\triangle FDE$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tìm các góc chưa biết\nTổng ba góc trong một tam giác bằng $180^\\circ$.\n$\\widehat C=180^\\circ-40^\\circ-65^\\circ=75^\\circ$.\nBước 2: Tính góc của tam giác thứ hai\n$\\widehat F=180^\\circ-75^\\circ-40^\\circ=65^\\circ$.\nBước 3: Ghép góc bằng nhau\n$A$ ứng với $E$ vì cùng $40^\\circ$.\n$B$ ứng với $F$ vì cùng $65^\\circ$; $C$ ứng với $D$ vì cùng $75^\\circ$.\nBước 4: Viết đúng thứ tự\nTheo trường hợp góc–góc, $\\triangle ABC\\sim\\triangle EFD$.\nThứ tự $EFD$ giữ đúng các cặp đỉnh vừa ghép.\nBước 5: Kết luận\nChọn B."
        }
      ],
      "nangCao": [
        {
          "id": "l8-tam-giac-dong-dang-nang-cao-01",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ba cặp cạnh cùng tỉ số",
          "prompt": "Tam giác $ABC$ có $AB=4$, $BC=6$, $CA=8$ (cm). Bộ độ dài $(DE,EF,FD)$ nào bảo đảm $\\triangle ABC\\sim\\triangle DEF$?",
          "svg": "",
          "options": [
            "A. $(6;8;10)$ cm",
            "B. $(6;9;11)$ cm",
            "C. $(8;12;18)$ cm",
            "D. $(6;9;12)$ cm"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định điều kiện cần kiểm\nĐể đồng dạng theo thứ tự $ABC,DEF$, cần so sánh $AB/DE$, $BC/EF$, $CA/FD$.\nBước 2: Kiểm tra bộ ở phương án D\n$\\frac46=\\frac69=\\frac8{12}=\\frac23$.\nBa cặp cạnh tương ứng tỉ lệ.\nBước 3: Kết luận theo c.c.c.\nHai bộ cạnh tạo tam giác không suy biến: $4+6>8$ và $6+9>12$.\nVì vậy $\\triangle ABC\\sim\\triangle DEF$ theo trường hợp cạnh–cạnh–cạnh.\nBước 4: Loại các bộ còn lại\nA có $4/6\\ne6/8$; B có $4/6\\ne8/11$; C có $4/8\\ne8/18$.\nMỗi bộ này thiếu ít nhất một tỉ số cần thiết.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-tam-giac-dong-dang-nang-cao-02",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc xen giữa và cặp cạnh tương ứng",
          "prompt": "Tam giác $ABC$ có $AB=6$, $AC=9$ (cm), $\\widehat{BAC}=60^\\circ$. Tam giác $DEF$ có $DE=6$, $DF=4$ (cm), $\\widehat{EDF}=60^\\circ$. Kết luận nào đúng?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"22\" data-origin=\"65,285\" width=\"100%\" role=\"img\" aria-label=\"Đồng dạng lớp 8 · câu 5\"><line x1=\"65\" y1=\"285\" x2=\"197\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"197\" y1=\"285\" x2=\"164\" y2=\"113.52697005068117\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"164\" y1=\"113.52697005068117\" x2=\"65\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"373\" y1=\"285\" x2=\"439\" y2=\"170.6846467004541\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-E\"/><line x1=\"439\" y1=\"170.6846467004541\" x2=\"461\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-F\"/><line x1=\"461\" y1=\"285\" x2=\"373\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"F-D\"/><path d=\"M 89 285 A 24 24 0 0 0 77 264.2153903091735\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"102.23909236273087\" y=\"263.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >60°</text><path d=\"M 393 285 A 20 20 0 0 0 383 267.6794919243112\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"405.0429399400242\" y=\"266.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >60°</text><text x=\"131\" y=\"309\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >6 cm</text><text x=\"92.84936490538904\" y=\"186.76348502534057\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >9 cm</text><text x=\"417\" y=\"309\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >4 cm</text><text x=\"386.0814157129579\" y=\"216.34232335022705\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >6 cm</text><circle cx=\"65\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"51\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"197\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"211\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"164\" cy=\"113.52697005068117\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"164\" y=\"93.52697005068117\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"373\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"359\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"439\" cy=\"170.6846467004541\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"439\" y=\"150.6846467004541\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text><circle cx=\"461\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"F\"/><text x=\"475\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">F</text></svg>",
          "options": [
            "A. $\\triangle ABC\\sim\\triangle DEF$",
            "B. $\\triangle ABC\\sim\\triangle FDE$",
            "C. $\\triangle ABC\\sim\\triangle DFE$",
            "D. $\\triangle ABC\\sim\\triangle EFD$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Ghép góc xen giữa\n$\\widehat{BAC}=\\widehat{EDF}=60^\\circ$, nên thử ghép $A$ với $D$.\nBước 2: Ghép hai cạnh kề góc\n$AB/DF=6/4=3/2$.\n$AC/DE=9/6=3/2$.\nHai cặp cạnh này cùng kề các góc $A,D$ đã ghép.\nBước 3: Áp dụng c.g.c.\nHai cạnh tương ứng tỉ lệ và góc xen giữa bằng nhau.\nDo đó hai tam giác đồng dạng theo cạnh–góc–cạnh.\nBước 4: Xác định thứ tự đỉnh\n$AB$ ứng với $DF$ nên $B$ ứng với $F$.\n$AC$ ứng với $DE$ nên $C$ ứng với $E$.\nVậy $\\triangle ABC\\sim\\triangle DFE$.\nBước 5: Kết luận\nChọn C. Không ghép hai cạnh chỉ vì chúng cùng có độ dài $6$ cm."
        },
        {
          "id": "l8-tam-giac-dong-dang-nang-cao-03",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai tam giác vuông có góc nhọn bằng nhau",
          "prompt": "Tam giác $ABC$ vuông tại $A$, tam giác $DEF$ vuông tại $E$, với $\\widehat B=\\widehat D$. Biết $AB=6$ cm, $BC=10$ cm, $DE=9$ cm. Tính $DF$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"18\" data-origin=\"55,285\" width=\"100%\" role=\"img\" aria-label=\"Đồng dạng lớp 8 · câu 6\"><line x1=\"55\" y1=\"285\" x2=\"163\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"163\" y1=\"285\" x2=\"55\" y2=\"141\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"55\" y1=\"141\" x2=\"55\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"469\" y1=\"285\" x2=\"307\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-E\"/><line x1=\"307\" y1=\"285\" x2=\"307\" y2=\"69\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-F\"/><line x1=\"307\" y1=\"69\" x2=\"469\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"F-D\"/><path d=\"M 139 285 A 24 24 0 0 1 148.6 265.8\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"145.11145618000168\" y1=\"276.05572809000085\" x2=\"137.95603865200235\" y2=\"272.4780193260012\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><path d=\"M 445 285 A 24 24 0 0 1 454.6 265.8\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"451.1114561800017\" y1=\"276.05572809000085\" x2=\"443.95603865200235\" y2=\"272.4780193260012\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><polyline points=\"67,285 67,273 55,273\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><polyline points=\"319,285 319,273 307,273\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"109\" y=\"309\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >6 cm</text><text x=\"127.4\" y=\"199.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >10 cm</text><text x=\"388\" y=\"309\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >9 cm</text><circle cx=\"55\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"41\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"163\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"177\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"55\" cy=\"141\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"55\" y=\"121\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"469\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"483\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"307\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"293\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text><circle cx=\"307\" cy=\"69\" r=\"2.5\" fill=\"#1e40af\" data-point=\"F\"/><text x=\"307\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">F</text></svg>",
          "options": [
            "A. 15 cm",
            "B. 5,4 cm",
            "C. 12 cm",
            "D. $\\frac{20}{3}$ cm"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Ghép các góc\n$\\widehat A=\\widehat E=90^\\circ$ và $\\widehat B=\\widehat D$ theo giả thiết.\nBước 2: Chứng minh đồng dạng\nHai cặp góc bằng nhau nên $\\triangle ABC\\sim\\triangle EDF$ theo góc–góc.\nCác đỉnh tương ứng là $A,E$; $B,D$; $C,F$.\nBước 3: Lập tỉ số cạnh\n$AB$ ứng với $ED$; cạnh huyền $BC$ ứng với cạnh huyền $DF$.\nDo đó $\\frac{DF}{BC}=\\frac{DE}{AB}=\\frac96=\\frac32$.\nBước 4: Tính và kiểm tra\n$DF=10\\cdot\\frac32=15$ cm.\n$15>9$ phù hợp với việc $DF$ là cạnh huyền của tam giác vuông $DEF$.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-tam-giac-dong-dang-nang-cao-04",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Ảnh phóng theo tâm trên lưới",
          "prompt": "Trong mỗi ô hình, ngũ giác xanh là hình gốc; hình cam là một ảnh đề xuất. Các ô lưới đều là hình vuông bằng nhau, $O$ là tâm đã cho. Hình nào là ảnh phóng của ngũ giác xanh với tâm $O$ và tỉ số $2$ (mỗi đỉnh ảnh nằm trên tia từ $O$ qua đỉnh gốc, cách $O$ gấp đôi)?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 520\" role=\"img\" aria-label=\"Bốn ảnh đề xuất trên lưới: hình gốc xanh, hình ảnh cam, tâm O\"><g data-panel=\"0\" data-hinh=\"I\" data-unit=\"24\" transform=\"translate(0 0)\"><rect x=\"5\" y=\"5\" width=\"270\" height=\"250\" rx=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><path d=\"M 36 220 L 36 28 M 36 220 L 228 220\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 60 220 L 60 28 M 36 196 L 228 196\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 84 220 L 84 28 M 36 172 L 228 172\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 108 220 L 108 28 M 36 148 L 228 148\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 132 220 L 132 28 M 36 124 L 228 124\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 156 220 L 156 28 M 36 100 L 228 100\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 180 220 L 180 28 M 36 76 L 228 76\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 204 220 L 204 28 M 36 52 L 228 52\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 228 220 L 228 28 M 36 28 L 228 28\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><line x1=\"36\" y1=\"220\" x2=\"91.19999999999999\" y2=\"164.8\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"201.6\" y2=\"164.8\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"201.6\" y2=\"109.60000000000001\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"146.39999999999998\" y2=\"54.400000000000006\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"91.19999999999999\" y2=\"109.60000000000001\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><polygon data-shape=\"original\" points=\"60,196 108,196 108,172 84,148 60,172\" fill=\"#dbeafe\" fill-opacity=\".7\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><circle data-vertex=\"original-0\" cx=\"60\" cy=\"196\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-1\" cx=\"108\" cy=\"196\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-2\" cx=\"108\" cy=\"172\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-3\" cx=\"84\" cy=\"148\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-4\" cx=\"60\" cy=\"172\" r=\"2.5\" fill=\"#1d4ed8\"/><polygon data-shape=\"image\" points=\"108,172 204,172 204,124 156,76 108,124\" fill=\"#ffedd5\" fill-opacity=\".7\" stroke=\"#c2410c\" stroke-width=\"2\"/><circle data-vertex=\"image-0\" cx=\"108\" cy=\"172\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-1\" cx=\"204\" cy=\"172\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-2\" cx=\"204\" cy=\"124\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-3\" cx=\"156\" cy=\"76\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-4\" cx=\"108\" cy=\"124\" r=\"2.5\" fill=\"#c2410c\"/><text x=\"24\" y=\"227\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><text x=\"48\" y=\"202\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#1d4ed8\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"96\" y=\"175\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#c2410c\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A′</text><text x=\"140\" y=\"247\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình I</text></g><g data-panel=\"1\" data-hinh=\"II\" data-unit=\"24\" transform=\"translate(280 0)\"><rect x=\"5\" y=\"5\" width=\"270\" height=\"250\" rx=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><path d=\"M 36 220 L 36 28 M 36 220 L 228 220\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 60 220 L 60 28 M 36 196 L 228 196\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 84 220 L 84 28 M 36 172 L 228 172\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 108 220 L 108 28 M 36 148 L 228 148\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 132 220 L 132 28 M 36 124 L 228 124\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 156 220 L 156 28 M 36 100 L 228 100\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 180 220 L 180 28 M 36 76 L 228 76\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 204 220 L 204 28 M 36 52 L 228 52\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 228 220 L 228 28 M 36 28 L 228 28\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><line x1=\"36\" y1=\"220\" x2=\"91.19999999999999\" y2=\"164.8\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"201.6\" y2=\"164.8\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"201.6\" y2=\"109.60000000000001\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"146.39999999999998\" y2=\"54.400000000000006\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"91.19999999999999\" y2=\"109.60000000000001\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><polygon data-shape=\"original\" points=\"60,196 108,196 108,172 84,148 60,172\" fill=\"#dbeafe\" fill-opacity=\".7\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><circle data-vertex=\"original-0\" cx=\"60\" cy=\"196\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-1\" cx=\"108\" cy=\"196\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-2\" cx=\"108\" cy=\"172\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-3\" cx=\"84\" cy=\"148\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-4\" cx=\"60\" cy=\"172\" r=\"2.5\" fill=\"#1d4ed8\"/><polygon data-shape=\"image\" points=\"84,184 180,184 180,148 132,112 84,148\" fill=\"#ffedd5\" fill-opacity=\".7\" stroke=\"#c2410c\" stroke-width=\"2\"/><circle data-vertex=\"image-0\" cx=\"84\" cy=\"184\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-1\" cx=\"180\" cy=\"184\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-2\" cx=\"180\" cy=\"148\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-3\" cx=\"132\" cy=\"112\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-4\" cx=\"84\" cy=\"148\" r=\"2.5\" fill=\"#c2410c\"/><text x=\"24\" y=\"227\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><text x=\"48\" y=\"202\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#1d4ed8\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"72\" y=\"187\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#c2410c\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A′</text><text x=\"140\" y=\"247\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình II</text></g><g data-panel=\"2\" data-hinh=\"III\" data-unit=\"24\" transform=\"translate(0 260)\"><rect x=\"5\" y=\"5\" width=\"270\" height=\"250\" rx=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><path d=\"M 36 220 L 36 28 M 36 220 L 228 220\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 60 220 L 60 28 M 36 196 L 228 196\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 84 220 L 84 28 M 36 172 L 228 172\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 108 220 L 108 28 M 36 148 L 228 148\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 132 220 L 132 28 M 36 124 L 228 124\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 156 220 L 156 28 M 36 100 L 228 100\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 180 220 L 180 28 M 36 76 L 228 76\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 204 220 L 204 28 M 36 52 L 228 52\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 228 220 L 228 28 M 36 28 L 228 28\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><line x1=\"36\" y1=\"220\" x2=\"91.19999999999999\" y2=\"164.8\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"201.6\" y2=\"164.8\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"201.6\" y2=\"109.60000000000001\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"146.39999999999998\" y2=\"54.400000000000006\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"91.19999999999999\" y2=\"109.60000000000001\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><polygon data-shape=\"original\" points=\"60,196 108,196 108,172 84,148 60,172\" fill=\"#dbeafe\" fill-opacity=\".7\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><circle data-vertex=\"original-0\" cx=\"60\" cy=\"196\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-1\" cx=\"108\" cy=\"196\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-2\" cx=\"108\" cy=\"172\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-3\" cx=\"84\" cy=\"148\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-4\" cx=\"60\" cy=\"172\" r=\"2.5\" fill=\"#1d4ed8\"/><polygon data-shape=\"image\" points=\"84,172 180,172 180,124 132,76 84,124\" fill=\"#ffedd5\" fill-opacity=\".7\" stroke=\"#c2410c\" stroke-width=\"2\"/><circle data-vertex=\"image-0\" cx=\"84\" cy=\"172\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-1\" cx=\"180\" cy=\"172\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-2\" cx=\"180\" cy=\"124\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-3\" cx=\"132\" cy=\"76\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-4\" cx=\"84\" cy=\"124\" r=\"2.5\" fill=\"#c2410c\"/><text x=\"24\" y=\"227\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><text x=\"48\" y=\"202\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#1d4ed8\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"72\" y=\"175\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#c2410c\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A′</text><text x=\"140\" y=\"247\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình III</text></g><g data-panel=\"3\" data-hinh=\"IV\" data-unit=\"24\" transform=\"translate(280 260)\"><rect x=\"5\" y=\"5\" width=\"270\" height=\"250\" rx=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><path d=\"M 36 220 L 36 28 M 36 220 L 228 220\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 60 220 L 60 28 M 36 196 L 228 196\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 84 220 L 84 28 M 36 172 L 228 172\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 108 220 L 108 28 M 36 148 L 228 148\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 132 220 L 132 28 M 36 124 L 228 124\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 156 220 L 156 28 M 36 100 L 228 100\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 180 220 L 180 28 M 36 76 L 228 76\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 204 220 L 204 28 M 36 52 L 228 52\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><path d=\"M 228 220 L 228 28 M 36 28 L 228 28\" stroke=\"#cbd5e1\" stroke-width=\".6\"/><line x1=\"36\" y1=\"220\" x2=\"91.19999999999999\" y2=\"164.8\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"201.6\" y2=\"164.8\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"201.6\" y2=\"109.60000000000001\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"146.39999999999998\" y2=\"54.400000000000006\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><line x1=\"36\" y1=\"220\" x2=\"91.19999999999999\" y2=\"109.60000000000001\" stroke=\"#94a3b8\" stroke-dasharray=\"3 4\"/><polygon data-shape=\"original\" points=\"60,196 108,196 108,172 84,148 60,172\" fill=\"#dbeafe\" fill-opacity=\".7\" stroke=\"#1d4ed8\" stroke-width=\"2\"/><circle data-vertex=\"original-0\" cx=\"60\" cy=\"196\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-1\" cx=\"108\" cy=\"196\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-2\" cx=\"108\" cy=\"172\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-3\" cx=\"84\" cy=\"148\" r=\"2.5\" fill=\"#1d4ed8\"/><circle data-vertex=\"original-4\" cx=\"60\" cy=\"172\" r=\"2.5\" fill=\"#1d4ed8\"/><polygon data-shape=\"image\" points=\"72,184 144,184 144,148 108,112 72,148\" fill=\"#ffedd5\" fill-opacity=\".7\" stroke=\"#c2410c\" stroke-width=\"2\"/><circle data-vertex=\"image-0\" cx=\"72\" cy=\"184\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-1\" cx=\"144\" cy=\"184\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-2\" cx=\"144\" cy=\"148\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-3\" cx=\"108\" cy=\"112\" r=\"2.5\" fill=\"#c2410c\"/><circle data-vertex=\"image-4\" cx=\"72\" cy=\"148\" r=\"2.5\" fill=\"#c2410c\"/><text x=\"24\" y=\"227\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><text x=\"48\" y=\"202\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#1d4ed8\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"60\" y=\"187\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#c2410c\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A′</text><text x=\"140\" y=\"247\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình IV</text></g></svg>",
          "options": [
            "A. Hình I",
            "B. Hình II",
            "C. Hình III",
            "D. Hình IV"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nêu hai điều kiện của ảnh phóng\nVới mỗi đỉnh gốc $X$ và đỉnh ảnh $X'$, phải có $X'$ trên tia $OX$ và $OX'=2OX$.\nPhải kiểm tra cả tâm lẫn tỉ số, không chỉ độ dài cạnh.\nBước 2: Dùng các ô lưới\nĐếm số ô dịch ngang và dọc từ $O$ đến từng đỉnh.\nNếu cả hai độ dịch đều gấp đôi và giữ chiều, đỉnh ảnh nằm đúng tia và cách $O$ gấp đôi.\nBước 3: Kiểm tra hình III\nCả năm đỉnh cam của hình III có độ dịch ngang và dọc gấp đôi đỉnh xanh tương ứng.\nVì vậy tất cả các đỉnh đều thỏa hai điều kiện.\nBước 4: Loại các hình khác\nHình I có thêm sự dịch chuyển nên sai tâm $O$.\nHình II phóng ngang $2$ lần nhưng phóng dọc $3/2$ lần nên bị biến dạng.\nHình IV đúng tâm nhưng tỉ số chỉ bằng $3/2$.\nBước 5: Kết luận\nChọn C: hình III."
        },
        {
          "id": "l8-tam-giac-dong-dang-nang-cao-05",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chu vi của hai hình đồng dạng",
          "prompt": "Hai ngũ giác đồng dạng có một cặp cạnh tương ứng dài $4$ cm và $6$ cm. Chu vi ngũ giác có cạnh $4$ cm là $28$ cm. Tính chu vi ngũ giác còn lại.",
          "svg": "",
          "options": [
            "A. 63 cm",
            "B. $\\frac{56}{3}$ cm",
            "C. 30 cm",
            "D. 42 cm"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tìm tỉ số phóng\nTừ ngũ giác có cạnh $4$ cm sang ngũ giác có cạnh $6$ cm, tỉ số là $k=6/4=3/2$.\nBước 2: Liên hệ với chu vi\nMỗi cạnh tương ứng được nhân với $k$.\nChu vi là tổng các cạnh, nên tổng này cũng được nhân với $k$.\nBước 3: Tính chu vi mới\n$P=28\\cdot\\frac32=42$ cm.\nBước 4: Kiểm tra cách dùng tỉ số\n$42/28=3/2$, đúng bằng tỉ số cạnh.\nBình phương tỉ số được dùng cho diện tích, không dùng cho chu vi.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-tam-giac-dong-dang-nang-cao-06",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Đo chiều cao qua gương trên mặt đất",
          "prompt": "Một gương nhỏ đặt tại $M$ trên mặt đất nằm ngang. Chân cột $B$, gương $M$, chân người $P$ thẳng hàng theo thứ tự đó; cột $AB$ và đoạn từ chân người đến mắt $PE$ đều thẳng đứng. Khi nhìn thấy đỉnh cột trong gương, có $\\widehat{AMB}=\\widehat{EMP}$. Biết $BM=6$ m, $MP=2$ m, $PE=1{,}6$ m. Tính chiều cao cột $AB$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"45\" data-origin=\"70,295\" width=\"100%\" role=\"img\" aria-label=\"Đồng dạng lớp 8 · câu 9\"><line x1=\"70\" y1=\"79\" x2=\"70\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"70\" y1=\"295\" x2=\"340\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-M\"/><line x1=\"340\" y1=\"295\" x2=\"430\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-P\"/><line x1=\"430\" y1=\"295\" x2=\"430\" y2=\"223\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"P-E\"/><line x1=\"70\" y1=\"79\" x2=\"340\" y2=\"295\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-M\"/><line x1=\"340\" y1=\"295\" x2=\"430\" y2=\"223\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"M-E\"/><path d=\"M 312 295 A 28 28 0 0 1 318.13567333559513 277.50853866847615\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"317.35292034015\" y1=\"287.055833405548\" x2=\"309.80389378686664\" y2=\"284.407777874064\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><path d=\"M 361.86432666440487 277.50853866847615 A 28 28 0 0 1 368 295\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"362.64707965985\" y1=\"287.055833405548\" x2=\"370.19610621313336\" y2=\"284.407777874064\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><polyline points=\"70,283 82,283 82,295\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><polyline points=\"430,283 418,283 418,295\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"205\" y=\"335\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >6 m</text><text x=\"385\" y=\"335\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >2 m</text><text x=\"463\" y=\"259\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >1,6 m</text><circle cx=\"70\" cy=\"79\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"70\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"70\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"57\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"340\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"340\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"430\" cy=\"295\" r=\"2.5\" fill=\"#1e40af\" data-point=\"P\"/><text x=\"443\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">P</text><circle cx=\"430\" cy=\"223\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"444\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text></svg>",
          "options": [
            "A. 4,8 m",
            "B. 6,4 m",
            "C. $\\frac{8}{15}$ m",
            "D. 3 m"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xét hai tam giác qua gương\nCột và người đều thẳng đứng trên mặt đất nằm ngang nên $\\widehat{ABM}=\\widehat{EPM}=90^\\circ$.\nĐề cho $\\widehat{AMB}=\\widehat{EMP}$.\nBước 2: Chứng minh đồng dạng\nHai cặp góc bằng nhau nên $\\triangle ABM\\sim\\triangle EPM$ theo góc–góc.\n$AB$ ứng với $EP$, còn $BM$ ứng với $PM$.\nBước 3: Lập tỉ số\n$\\frac{AB}{EP}=\\frac{BM}{PM}=\\frac62=3$.\nBước 4: Tính chiều cao\n$AB=1{,}6\\cdot3=4{,}8$ m.\nTa dùng khoảng cách từ mỗi chân đến gương; $BP=8$ m không phải cạnh tương ứng với $PM$ trong tỉ số trên.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-tam-giac-dong-dang-nang-cao-07",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Cạnh chung với hai vai trò khác nhau",
          "prompt": "Trong tam giác $ABC$, điểm $D$ nằm giữa $A,B$ và $\\widehat{ACD}=\\widehat{ABC}$. Biết $AB=9$ cm, $AC=6$ cm. Tính $BD$.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"42\" data-origin=\"85,290\" width=\"100%\" role=\"img\" aria-label=\"Đồng dạng lớp 8 · câu 10\"><line x1=\"85\" y1=\"290\" x2=\"463\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"463\" y1=\"290\" x2=\"211\" y2=\"71.76159824632146\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"211\" y1=\"71.76159824632146\" x2=\"85\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"211\" y1=\"71.76159824632146\" x2=\"253\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-D\"/><path d=\"M 439 290 A 24 24 0 0 1 444.8577052955571 274.28831190300855\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"444.26004831373115\" y1=\"283.0132832606217\" x2=\"436.7640676392236\" y2=\"280.2185965648704\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><path d=\"M 199 92.54620793714798 A 24 24 0 0 0 215.53557367611072 95.32913039180863\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"207.68069834221316\" y1=\"91.48423084201247\" x2=\"206.35297767909844\" y2=\"99.37328388028888\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"1\"/><text x=\"274\" y=\"334\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >9 cm</text><text x=\"125.48333950160459\" y=\"167.88079912316073\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >6 cm</text><circle cx=\"85\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"70\" y=\"306\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"463\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"478\" y=\"306\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"211\" cy=\"71.76159824632146\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"211\" y=\"51.761598246321455\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"253\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"253\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text></svg>",
          "options": [
            "A. 4 cm",
            "B. 5 cm",
            "C. 3 cm",
            "D. 6,75 cm"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tìm cặp góc thứ hai\nVì $D$ nằm giữa $A,B$, hai tia $AD,AB$ trùng nhau.\nDo đó $\\widehat{CAD}=\\widehat{BAC}$.\nBước 2: Chứng minh đồng dạng\nKết hợp $\\widehat{ACD}=\\widehat{ABC}$, có $\\triangle ABC\\sim\\triangle ACD$ theo góc–góc.\nThứ tự tương ứng là $A$ với $A$, $B$ với $C$, $C$ với $D$.\nBước 3: Lập tỉ số đúng thứ tự\n$\\frac{AB}{AC}=\\frac{AC}{AD}$, nên $AB\\cdot AD=AC^2$.\nVậy $AD=6^2/9=4$ cm.\nBước 4: Tính đoạn còn lại\n$BD=AB-AD=9-4=5$ cm.\n$0<4<9$ phù hợp với vị trí $D$ nằm giữa $A,B$.\nBước 5: Kết luận\nChọn B."
        }
      ],
      "hsg": [
        {
          "id": "l8-tam-giac-dong-dang-hsg-01",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Từ tỉ số chu vi đến diện tích",
          "prompt": "Hai tam giác đồng dạng có tỉ số chu vi (tam giác nhỏ chia tam giác lớn) bằng $\\frac35$. Diện tích tam giác nhỏ là $27$ cm². Tính diện tích tam giác lớn theo cm².",
          "svg": "",
          "correctAnswer": "75",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Từ chu vi suy ra tỉ số đồng dạng\nVới hai tam giác đồng dạng, tỉ số chu vi bằng tỉ số các cạnh tương ứng.\nTheo thứ tự nhỏ chia lớn, tỉ số đồng dạng là $k=3/5$. Gọi diện tích nhỏ là $S_1$, diện tích lớn là $S_2$.\nBước 2: Chọn quy tắc về diện tích\nTỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng.\nDo đó $S_1/S_2=(3/5)^2=9/25$.\nBước 3: Tìm diện tích lớn\nThay $S_1=27$, có $27/S_2=9/25$.\nSuy ra $S_2=27\\cdot25/9=75$ cm².\nBước 4: Kiểm tra kết quả\nTỉ số $27/75=9/25$ khớp quy tắc và $75>27$ phù hợp tam giác lớn.\nKhông dùng trực tiếp tỉ số $3/5$ cho diện tích vì diện tích thay đổi theo bình phương tỉ số độ dài.\nBước 5: Kết luận\nDiện tích tam giác lớn là $75$ cm²."
        },
        {
          "id": "l8-tam-giac-dong-dang-hsg-02",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Suy hai độ dài từ đồng dạng",
          "prompt": "Tam giác $ABC$ vuông tại $A$, có đường cao $AH$ với $H$ nằm giữa $B,C$. Biết $BH=9$ cm, $HC=16$ cm. Dùng các tam giác đồng dạng để tính $AH+AB$ theo cm.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"18\" data-origin=\"55,285\" width=\"100%\" role=\"img\" aria-label=\"Đồng dạng lớp 8 · câu 12\"><line x1=\"217\" y1=\"69\" x2=\"55\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"55\" y1=\"285\" x2=\"505\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"505\" y1=\"285\" x2=\"217\" y2=\"69\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"217\" y1=\"69\" x2=\"217\" y2=\"285\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-H\"/><polyline points=\"209.8,78.6 219.4,85.8 226.6,76.2\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><polyline points=\"217,273 229,273 229,285\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"136\" y=\"321\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >9 cm</text><text x=\"361\" y=\"321\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >16 cm</text><circle cx=\"217\" cy=\"69\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"217\" y=\"49\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"55\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"41\" y=\"302\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"505\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"519\" y=\"302\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"217\" cy=\"285\" r=\"2.5\" fill=\"#1e40af\" data-point=\"H\"/><text x=\"217\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">H</text></svg>",
          "correctAnswer": "27",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chứng minh cặp tam giác nhỏ đồng dạng\n$AH\\perp BC$ nên $\\widehat{AHB}=\\widehat{CHA}=90^\\circ$.\nTrong tam giác $ABC$ vuông tại $A$, $B+C=90^\\circ$; trong tam giác $ACH$, $\\widehat{CAH}=90^\\circ-C=B=\\widehat{ABH}$.\nDo đó $\\triangle ABH\\sim\\triangle CAH$ theo góc–góc.\nBước 2: Tính AH từ tỉ số tương ứng\nVới sự tương ứng $A\\leftrightarrow C$, $B\\leftrightarrow A$, $H\\leftrightarrow H$, có $BH/AH=AH/CH$.\nSuy ra $AH^2=BH\\cdot CH=9\\cdot16=144$, nên $AH=12$ cm.\nBước 3: Chứng minh cặp tam giác thứ hai đồng dạng\n$\\widehat{AHB}=\\widehat{CAB}=90^\\circ$, và $\\widehat{ABH}=\\widehat{CBA}$ vì $BH$ cùng tia với $BC$.\nVậy $\\triangle ABH\\sim\\triangle CBA$ theo góc–góc.\nBước 4: Tính AB và kiểm tra\nTừ đồng dạng có $BH/BA=AB/BC$, nên $AB^2=BH\\cdot BC=9(9+16)=225$.\nDo đó $AB=15$ cm. Kiểm tra trong tam giác $ABH$: $9^2+12^2=15^2$, phù hợp.\nCác độ dài đều dương, nên các tam giác sử dụng không suy biến.\nBước 5: Kết luận\n$AH+AB=12+15=27$ cm. Hai hệ thức đã được chứng minh từ đồng dạng, không cần học thuộc riêng."
        },
        {
          "id": "l8-tam-giac-dong-dang-hsg-03",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai lần phóng và phần chu vi tăng thêm",
          "prompt": "Một tam giác có $AB:BC:CA=3:5:4$. Phóng hình lần thứ nhất với tỉ số $\\frac32$; tiếp tục phóng ảnh vừa nhận với tỉ số $\\frac43$. Cả hai lần đều là đồng dạng phối cảnh với tỉ số dương. Chu vi ảnh sau lần hai lớn hơn chu vi ảnh sau lần một $24$ cm. Tính cạnh $BC$ của tam giác gốc theo cm.",
          "svg": "",
          "correctAnswer": "20",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt chu vi gốc\nGọi chu vi tam giác ban đầu là $p>0$ cm.\nPhép đồng dạng tỉ số dương nhân mọi cạnh, và do đó chu vi, với cùng tỉ số đó.\nBước 2: Tính chu vi qua hai lần phóng\nSau lần thứ nhất, chu vi là $p_1=3p/2$.\nLần thứ hai tác động lên ảnh vừa nhận, nên $p_2=(4/3)p_1=(4/3)(3/2)p=2p$.\nBước 3: Sử dụng hiệu đúng hai ảnh\nTheo đề, $p_2-p_1=24$, nên $2p-3p/2=24$.\nSuy ra $p/2=24$, tức $p=48$ cm.\nBước 4: Tìm cạnh BC từ tỉ lệ các cạnh\nTổng số phần là $3+5+4=12$, nên mỗi phần dài $48/12=4$ cm.\n$BC$ gồm $5$ phần, bằng $20$ cm. Hai cạnh còn lại là $12,16$ cm, thỏa bất đẳng thức tam giác.\nKiểm tra chu vi hai ảnh: $72$ và $96$ cm, chênh đúng $24$ cm.\nBước 5: Kết luận\n$BC=20$ cm. Hai tỉ số phóng liên tiếp phải nhân, không cộng."
        },
        {
          "id": "l8-tam-giac-dong-dang-hsg-04",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Đổi cặp cạnh để suy tích độ dài",
          "prompt": "Trong tam giác $ABC$, lấy $D$ ở trong $AB$ và $E$ ở trong $AC$, sao cho $AB\\cdot AD=AC\\cdot AE$. Chứng minh $BC\\cdot AE=DE\\cdot AB$ bằng trường hợp đồng dạng c.g.c.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"32\" data-origin=\"85,290\" width=\"100%\" role=\"img\" aria-label=\"Đồng dạng lớp 8 · câu 14\"><line x1=\"85\" y1=\"290\" x2=\"469\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"469\" y1=\"290\" x2=\"213\" y2=\"68.29749663118372\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"213\" y1=\"68.29749663118372\" x2=\"85\" y2=\"290\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"181\" y1=\"290\" x2=\"157\" y2=\"165.29234185504083\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-E\"/><circle cx=\"85\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"70\" y=\"307\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"469\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"484\" y=\"307\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"213\" cy=\"68.29749663118372\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"213\" y=\"48.29749663118372\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"181\" cy=\"290\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"181\" y=\"310\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"157\" cy=\"165.29234185504083\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"137\" y=\"165.29234185504083\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text></svg>",
          "solution": "Bước 1: Biến đổi giả thiết thành tỉ số cạnh\nCác đoạn $AB,AC,AD,AE$ đều dương vì $D,E$ nằm trong hai cạnh.\nChia $AB\\cdot AD=AC\\cdot AE$ cho $AD\\cdot AE$, được $AB/AE=AC/AD$.\nBước 2: Xác định góc xen giữa\nTia $AD$ trùng tia $AB$, tia $AE$ trùng tia $AC$.\nVì vậy góc $BAC$ bằng góc $EAD$: chúng cùng là góc giữa hai tia $AB,AC$.\nBước 3: Áp dụng đồng dạng cạnh–góc–cạnh\nXét $\\triangle ABC$ và $\\triangle AED$.\nHai cặp cạnh kề góc $A$ tỉ lệ theo bước 1, góc xen giữa bằng nhau theo bước 2, nên hai tam giác đồng dạng theo c.g.c.\nSự tương ứng là $A\\leftrightarrow A$, $B\\leftrightarrow E$, $C\\leftrightarrow D$.\nBước 4: Dùng đúng cặp cạnh tương ứng\nTừ đồng dạng, $BC/ED=AB/AE$.\nNhân chéo được $BC\\cdot AE=ED\\cdot AB$; tất cả mẫu đều khác $0$.\nBước 5: Kết luận\n$BC\\cdot AE=DE\\cdot AB$.\nKhông ghép $B$ với $D$ chỉ vì cùng nằm trên một cạnh; sự tương ứng phải theo tỉ số cạnh đã chứng minh."
        },
        {
          "id": "l8-tam-giac-dong-dang-hsg-05",
          "lop": 8,
          "chuDe": "tam-giac-dong-dang",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Ba tia chung gốc và ảnh phối cảnh",
          "prompt": "Cho tam giác $ABC$ và điểm $O$ không nằm trên các đường thẳng $AB,BC,CA$. Với $k>0$, lấy $A',B',C'$ trên các tia $OA,OB,OC$ sao cho $OA'=k\\,OA$, $OB'=k\\,OB$, $OC'=k\\,OC$. Chứng minh tam giác $A'B'C'$ đồng dạng với $ABC$ theo tỉ số $k$, rồi suy tỉ số diện tích. Không được chỉ viện dẫn hình nhìn giống nhau.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"34\" data-origin=\"90,320\" width=\"100%\" role=\"img\" aria-label=\"Đồng dạng lớp 8 · câu 15\"><line x1=\"124\" y1=\"252\" x2=\"226\" y2=\"286\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"226\" y1=\"286\" x2=\"192\" y2=\"184\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"192\" y1=\"184\" x2=\"124\" y2=\"252\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"158\" y1=\"184\" x2=\"362\" y2=\"252\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"U-V\"/><line x1=\"362\" y1=\"252\" x2=\"294\" y2=\"48\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"V-W\"/><line x1=\"294\" y1=\"48\" x2=\"158\" y2=\"184\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"W-U\"/><line x1=\"90\" y1=\"320\" x2=\"158\" y2=\"184\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"O-U\"/><line x1=\"90\" y1=\"320\" x2=\"362\" y2=\"252\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"O-V\"/><line x1=\"90\" y1=\"320\" x2=\"294\" y2=\"48\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"O-W\"/><circle cx=\"90\" cy=\"320\" r=\"2.5\" fill=\"#1e40af\" data-point=\"O\"/><text x=\"75\" y=\"335\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">O</text><circle cx=\"124\" cy=\"252\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"107\" y=\"252\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"226\" cy=\"286\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"226\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"192\" cy=\"184\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"189\" y=\"164\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"158\" cy=\"184\" r=\"2.5\" fill=\"#1e40af\" data-point=\"U\"/><text x=\"138\" y=\"184\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A′</text><circle cx=\"362\" cy=\"252\" r=\"2.5\" fill=\"#1e40af\" data-point=\"V\"/><text x=\"382\" y=\"252\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B′</text><circle cx=\"294\" cy=\"48\" r=\"2.5\" fill=\"#1e40af\" data-point=\"W\"/><text x=\"294\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C′</text></svg>",
          "solution": "Bước 1: Kiểm tra các tam giác trung gian\nVì $O$ không nằm trên các đường thẳng $AB,BC,CA$, các tam giác $OAB,OBC,OCA$ không suy biến.\nVới $k>0$, các điểm ảnh nằm trên đúng các tia và các khoảng cách tới $O$ đều dương. Nếu $k=1$, các điểm ảnh trùng điểm gốc, kết luận cũng được nhận.\nBước 2: Liên hệ cạnh A'B' với AB\nCó $OA'/OA=OB'/OB=k$, còn góc $A'OB'$ bằng góc $AOB$ vì các tia tương ứng trùng nhau.\nTheo c.g.c., $\\triangle OA'B'\\sim\\triangle OAB$, nên $A'B'/AB=k$.\nBước 3: Liên hệ hai cạnh còn lại\nLập luận tương tự với các cặp tam giác có đỉnh $O$, được $B'C'/BC=k$ và $C'A'/CA=k$.\nBa cạnh ảnh bằng $k$ lần ba cạnh gốc. Vì $k>0$, các bất đẳng thức tam giác được bảo toàn, nên tam giác ảnh không suy biến.\nBước 4: Chứng minh đồng dạng hai tam giác cần xét\nBa tỉ số cạnh tương ứng đều bằng $k$, nên $\\triangle A'B'C'\\sim\\triangle ABC$ theo c.c.c.\nĐây là kết luận từ độ dài và định lí, không chỉ dựa vào hình trông giống nhau.\nBước 5: Kết luận về diện tích\nTỉ số đồng dạng là $k$, nên $S_{A'B'C'}/S_{ABC}=k^2$.\nDiện tích tam giác gốc dương, vì vậy tỉ số này xác định."
        }
      ]
    },
    'hinh-chop': {
      "kha": [
        {
          "id": "l8-hinh-chop-kha-01",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đỉnh và số mặt bên",
          "prompt": "Xét hình chóp tam giác đều $S.ABC$ và hình chóp tứ giác đều $T.MNPQ$. Cặp thông tin về đỉnh chóp và số mặt bên nào đúng?",
          "svg": "",
          "options": [
            "A. $S$: 4 mặt bên; $T$: 5 mặt bên.",
            "B. $A$: 3 mặt bên; $M$: 4 mặt bên.",
            "C. $S$: 6 mặt bên; $T$: 8 mặt bên.",
            "D. $S$: 3 mặt bên; $T$: 4 mặt bên."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đọc tên hình chóp\nTrong kí hiệu $S.ABC$, chữ trước dấu chấm là đỉnh $S$, phần sau là đáy $ABC$.\nTương tự, $T.MNPQ$ có đỉnh $T$ và đáy $MNPQ$.\nBước 2: Liên hệ cạnh đáy với mặt bên\nMỗi cạnh đáy cùng đỉnh chóp tạo thành một mặt bên tam giác.\nVì vậy số mặt bên bằng số cạnh đáy.\nBước 3: Đếm từng hình\nĐáy $ABC$ có $3$ cạnh nên chóp $S.ABC$ có $3$ mặt bên.\nĐáy $MNPQ$ có $4$ cạnh nên chóp $T.MNPQ$ có $4$ mặt bên.\nBước 4: Phân biệt các đại lượng\nKhông cộng mặt đáy vào số mặt bên.\nCác số $6,8$ là số cạnh của hai khối chóp này, không phải số mặt bên.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-hinh-chop-kha-02",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Chiều cao, cạnh bên và trung đoạn",
          "prompt": "Hình chóp tứ giác đều $S.ABCD$ có $O$ là tâm đáy, $M$ là trung điểm $BC$. Cặp đoạn nào lần lượt là chiều cao của khối chóp và trung đoạn của nó?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"8\" data-height=\"7\" data-scale3=\"23.10344827586207\" data-origin3=\"173,201.18965517241378\" role=\"img\" aria-label=\"Hình chóp đều lớp 8 · câu 2\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,55.63793103448273 307,182.70689655172413 223.82758620689657,284.3620689655172\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,55.63793103448273 223.82758620689657,284.3620689655172 39,219.67241379310343\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"122.17241379310343\" y1=\"118.01724137931032\" x2=\"173\" y2=\"55.63793103448273\" data-edge3=\"A-S\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"122.17241379310343\" y1=\"118.01724137931032\" x2=\"307\" y2=\"182.70689655172413\" data-edge3=\"A-B\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"122.17241379310343\" y1=\"118.01724137931032\" x2=\"39\" y2=\"219.67241379310343\" data-edge3=\"A-D\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"307\" y1=\"182.70689655172413\" x2=\"173\" y2=\"55.63793103448273\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"182.70689655172413\" x2=\"223.82758620689657\" y2=\"284.3620689655172\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"284.3620689655172\" x2=\"173\" y2=\"55.63793103448273\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"284.3620689655172\" x2=\"39\" y2=\"219.67241379310343\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"39\" y1=\"219.67241379310343\" x2=\"173\" y2=\"55.63793103448273\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"55.63793103448273\" x2=\"173\" y2=\"201.18965517241378\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"201.18965517241378\" x2=\"265.41379310344826\" y2=\"233.53448275862067\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"55.63793103448273\" x2=\"265.41379310344826\" y2=\"233.53448275862067\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-4,-4,0\" cx=\"122.17241379310343\" cy=\"118.01724137931032\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"109.17241379310343\" y=\"126.01724137931032\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"4,-4,0\" cx=\"307\" cy=\"182.70689655172413\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"320\" y=\"190.70689655172413\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"4,4,0\" cx=\"223.82758620689657\" cy=\"284.3620689655172\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"236.82758620689657\" y=\"292.3620689655172\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-4,4,0\" cx=\"39\" cy=\"219.67241379310343\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"26\" y=\"227.67241379310343\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,7\" cx=\"173\" cy=\"55.63793103448273\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"40.63793103448273\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"201.18965517241378\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"213.18965517241378\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"4,0,0\" cx=\"265.41379310344826\" cy=\"233.53448275862067\" r=\"2\" fill=\"#64748b\"/><text x=\"279.41379310344826\" y=\"238.53448275862067\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"20\"><polygon points=\"367,280 527,280 447,118.75484503402902\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"367\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"527\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"118.75484503402902\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"118.75484503402902\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"410.58322566591045\" y1=\"201.15520029479228\" x2=\"403.41677433408955\" y2=\"197.59964473923674\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"490.58322566591045\" y1=\"197.59964473923674\" x2=\"483.41677433408955\" y2=\"201.15520029479228\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"104.75484503402902\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"357\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"537\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
          "options": [
            "A. $SA$ và $SM$",
            "B. $SO$ và $SM$",
            "C. $SM$ và $SO$",
            "D. $SO$ và $SA$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định chiều cao khối chóp\nỞ hình chóp tứ giác đều, đoạn nối đỉnh $S$ với tâm đáy $O$ vuông góc với mặt đáy.\nVì vậy $SO$ là chiều cao khối chóp.\nBước 2: Xét mặt bên\nTam giác $SBC$ cân tại $S$ vì các cạnh bên bằng nhau.\n$M$ là trung điểm $BC$, nên $SM$ vừa là trung tuyến vừa là đường cao của tam giác này.\nBước 3: Nhận diện trung đoạn\nĐường cao của một mặt bên, kẻ từ đỉnh chóp, được gọi là trung đoạn của hình chóp đều.\nDo đó trung đoạn là $SM$.\nBước 4: Giữ đúng thứ tự\nĐề hỏi chiều cao trước, trung đoạn sau, nên cặp cần chọn là $SO,SM$.\n$SA$ là cạnh bên, không phải hai đoạn vừa xác định.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-hinh-chop-kha-03",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Thể tích từ cạnh đáy vuông",
          "prompt": "Một hình chóp tứ giác đều có cạnh đáy $6$ cm và chiều cao $10$ cm. Tính thể tích.",
          "svg": "",
          "options": [
            "A. 360 cm³",
            "B. 60 cm³",
            "C. 120 cm³",
            "D. 180 cm³"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định đáy và chiều cao\nĐáy của hình chóp tứ giác đều là hình vuông cạnh $6$ cm.\nChiều cao khối chóp là $10$ cm.\nBước 2: Tính diện tích đáy\n$S=6\\cdot6=36$ cm².\nBước 3: Dùng công thức thể tích\nThể tích hình chóp bằng một phần ba tích diện tích đáy với chiều cao.\n$V=\\frac13Sh=\\frac13\\cdot36\\cdot10=120$ cm³.\nBước 4: Kiểm tra đơn vị và hệ số\nDiện tích tính bằng cm², chiều cao bằng cm nên thể tích tính bằng cm³.\nKết quả $360$ đã bỏ quên hệ số $1/3$.\nBước 5: Kết luận\nChọn C."
        }
      ],
      "nangCao": [
        {
          "id": "l8-hinh-chop-nang-cao-01",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ba mặt bên của chóp tam giác đều",
          "prompt": "Hình chóp tam giác đều có cạnh đáy $6$ cm, trung đoạn $5$ cm. Tính diện tích xung quanh.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"3\" data-base=\"6\" data-height=\"4.69041575982343\" data-scale3=\"38.84680439271645\" data-origin3=\"142.72191248605637,214.9868971881378\" role=\"img\" aria-label=\"Hình chóp đều lớp 8 · câu 4\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"142.72191248605637,51.00000000000003 82.1657374581691,289 56.459586821850664,137.19120116985442\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"142.72191248605637,51.00000000000003 289.5404131781494,218.76949039455894 82.1657374581691,289\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"56.459586821850664\" y1=\"137.19120116985442\" x2=\"289.5404131781494\" y2=\"218.76949039455894\" data-edge3=\"B-C\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"82.1657374581691\" y1=\"289\" x2=\"142.72191248605637\" y2=\"51.00000000000003\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"82.1657374581691\" y1=\"289\" x2=\"56.459586821850664\" y2=\"137.19120116985442\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"56.459586821850664\" y1=\"137.19120116985442\" x2=\"142.72191248605637\" y2=\"51.00000000000003\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"289.5404131781494\" y1=\"218.76949039455894\" x2=\"142.72191248605637\" y2=\"51.00000000000003\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"82.1657374581691\" y1=\"289\" x2=\"289.5404131781494\" y2=\"218.76949039455894\" data-edge3=\"A-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"142.72191248605637\" y1=\"51.00000000000003\" x2=\"142.72191248605637\" y2=\"214.9868971881378\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"142.72191248605637\" y1=\"214.9868971881378\" x2=\"185.85307531815923\" y2=\"253.88474519727947\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"142.72191248605637\" y1=\"51.00000000000003\" x2=\"185.85307531815923\" y2=\"253.88474519727947\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"0,3.464101615137755,0\" cx=\"82.1657374581691\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"69.1657374581691\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"-3,-1.7320508075688774,0\" cx=\"56.459586821850664\" cy=\"137.19120116985442\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"43.459586821850664\" y=\"145.19120116985442\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3,-1.7320508075688774,0\" cx=\"289.5404131781494\" cy=\"218.76949039455894\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"302.5404131781494\" y=\"226.76949039455894\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"S\" data-xyz=\"0,0,4.69041575982343\" cx=\"142.72191248605637\" cy=\"51.00000000000003\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"142.72191248605637\" y=\"36.00000000000003\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"142.72191248605637\" cy=\"214.9868971881378\" r=\"2\" fill=\"#64748b\"/><text x=\"130.72191248605637\" y=\"226.9868971881378\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"1.5,0.8660254037844387,0\" cx=\"185.85307531815923\" cy=\"253.88474519727947\" r=\"2\" fill=\"#64748b\"/><text x=\"199.85307531815923\" y=\"258.88474519727947\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"26\"><polygon points=\"369,280 525,280 447,150\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"369\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"525\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"150\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"150\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"411.4299717028502\" y1=\"217.0579830217101\" x2=\"404.5700282971498\" y2=\"212.9420169782899\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"489.4299717028502\" y1=\"212.9420169782899\" x2=\"482.5700282971498\" y2=\"217.0579830217101\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"136\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"359\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"535\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">6 cm</text><text x=\"469\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">5 cm</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
          "options": [
            "A. 45 cm²",
            "B. 90 cm²",
            "C. 15 cm²",
            "D. 30 cm²"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định các mặt cần tính\nHình chóp tam giác đều có $3$ mặt bên bằng nhau.\nDiện tích xung quanh là tổng diện tích ba mặt này, không gồm đáy.\nBước 2: Tính một mặt bên\nMỗi tam giác có đáy $6$ cm, đường cao là trung đoạn $5$ cm.\nDiện tích một mặt bằng $\\frac12\\cdot6\\cdot5=15$ cm².\nBước 3: Cộng ba mặt\n$S_{xq}=3\\cdot15=45$ cm².\nBước 4: Kiểm tra bằng chu vi đáy\nChu vi đáy là $3\\cdot6=18$ cm.\nCông thức $S_{xq}=\\frac12\\cdot18\\cdot5$ cũng cho $45$ cm².\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-hinh-chop-nang-cao-02",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phủ kín cả đáy và mặt bên",
          "prompt": "Một mô hình chóp tứ giác đều có cạnh đáy $8$ cm, trung đoạn $5$ cm. Cần phủ kín cả mặt đáy và bốn mặt bên bằng giấy, bỏ qua mép dán và hao hụt. Tổng diện tích giấy bằng bao nhiêu?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"8\" data-height=\"3\" data-scale3=\"23.10344827586207\" data-origin3=\"173,170\" role=\"img\" aria-label=\"Hình chóp đều lớp 8 · câu 5\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,107.62068965517241 122.17241379310343,86.82758620689654 307,151.51724137931035\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,107.62068965517241 39,188.48275862068965 122.17241379310343,86.82758620689654\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,107.62068965517241 307,151.51724137931035 223.82758620689657,253.17241379310346\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,107.62068965517241 223.82758620689657,253.17241379310346 39,188.48275862068965\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"122.17241379310343\" y1=\"86.82758620689654\" x2=\"173\" y2=\"107.62068965517241\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.17241379310343\" y1=\"86.82758620689654\" x2=\"307\" y2=\"151.51724137931035\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"151.51724137931035\" x2=\"173\" y2=\"107.62068965517241\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"151.51724137931035\" x2=\"223.82758620689657\" y2=\"253.17241379310346\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"253.17241379310346\" x2=\"173\" y2=\"107.62068965517241\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"253.17241379310346\" x2=\"39\" y2=\"188.48275862068965\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"39\" y1=\"188.48275862068965\" x2=\"173\" y2=\"107.62068965517241\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.17241379310343\" y1=\"86.82758620689654\" x2=\"39\" y2=\"188.48275862068965\" data-edge3=\"A-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"107.62068965517241\" x2=\"173\" y2=\"170\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"170\" x2=\"265.41379310344826\" y2=\"202.3448275862069\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"107.62068965517241\" x2=\"265.41379310344826\" y2=\"202.3448275862069\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-4,-4,0\" cx=\"122.17241379310343\" cy=\"86.82758620689654\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"109.17241379310343\" y=\"94.82758620689654\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"4,-4,0\" cx=\"307\" cy=\"151.51724137931035\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"320\" y=\"159.51724137931035\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"4,4,0\" cx=\"223.82758620689657\" cy=\"253.17241379310346\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"236.82758620689657\" y=\"261.1724137931035\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-4,4,0\" cx=\"39\" cy=\"188.48275862068965\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"26\" y=\"196.48275862068965\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,3\" cx=\"173\" cy=\"107.62068965517241\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"92.62068965517241\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"170\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"182\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"4,0,0\" cx=\"265.41379310344826\" cy=\"202.3448275862069\" r=\"2\" fill=\"#64748b\"/><text x=\"279.41379310344826\" y=\"207.3448275862069\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"20\"><polygon points=\"367,280 527,280 447,180\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"367\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"527\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"180\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"180\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"410.12347523777214\" y1=\"232.4987801902177\" x2=\"403.87652476222786\" y2=\"227.5012198097823\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"490.12347523777214\" y1=\"227.5012198097823\" x2=\"483.87652476222786\" y2=\"232.4987801902177\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"166\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"357\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"537\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">8 cm</text><text x=\"469\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">5 cm</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
          "options": [
            "A. 80 cm²",
            "B. 64 cm²",
            "C. 224 cm²",
            "D. 144 cm²"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định phạm vi phủ giấy\nĐề yêu cầu phủ cả mặt đáy và bốn mặt bên.\nTa cần diện tích toàn phần, không chỉ diện tích xung quanh.\nBước 2: Tính bốn mặt bên\nMỗi mặt bên có diện tích $\\frac12\\cdot8\\cdot5=20$ cm².\nTổng bốn mặt bằng $4\\cdot20=80$ cm².\nBước 3: Tính mặt đáy\nĐáy là hình vuông cạnh $8$ cm nên có diện tích $8^2=64$ cm².\nBước 4: Cộng diện tích cần phủ\n$80+64=144$ cm².\nĐề đã bỏ qua mép dán và hao hụt nên không cộng thêm phần dự phòng.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-hinh-chop-nang-cao-03",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Chọn hình khai triển gấp được",
          "prompt": "Bốn hình dưới đây có các mặt kề nhau theo nét đứt. Hình nào gấp được thành một hình chóp tứ giác đều không suy biến, với bốn mặt bên là các tam giác cân bằng nhau? Các kích thước trong hình dùng cùng một đơn vị.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 580\" role=\"img\" aria-label=\"Bốn hình khai triển đề xuất; số trong đáy là hai kích thước, số trên mặt bên là đường cao\"><g data-net=\"0\" data-hinh=\"I\" data-unit=\"18\" transform=\"translate(0 0)\"><rect x=\"5\" y=\"5\" width=\"270\" height=\"280\" rx=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><polygon data-face=\"base\" points=\"104,104 176,104 176,176 104,176\" fill=\"#dbeafe\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><polygon data-face=\"side-0\" points=\"104,104 176,104 140,50\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"0\" x1=\"104\" y1=\"104\" x2=\"176\" y2=\"104\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"0\" x1=\"140\" y1=\"104\" x2=\"140\" y2=\"50\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"140\" y=\"77\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-1\" points=\"176,104 176,176 230,140\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"1\" x1=\"176\" y1=\"104\" x2=\"176\" y2=\"176\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"1\" x1=\"176\" y1=\"140\" x2=\"230\" y2=\"140\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"203\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-2\" points=\"176,176 104,176 140,230\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"2\" x1=\"176\" y1=\"176\" x2=\"104\" y2=\"176\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"2\" x1=\"140\" y1=\"176\" x2=\"140\" y2=\"230\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"140\" y=\"203\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><text x=\"140\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">4 × 4</text><text x=\"140\" y=\"268\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình I</text></g><g data-net=\"1\" data-hinh=\"II\" data-unit=\"18\" transform=\"translate(280 0)\"><rect x=\"5\" y=\"5\" width=\"270\" height=\"280\" rx=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><polygon data-face=\"base\" points=\"104,104 176,104 176,176 104,176\" fill=\"#dbeafe\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><polygon data-face=\"side-0\" points=\"104,104 176,104 140,50\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"0\" x1=\"104\" y1=\"104\" x2=\"176\" y2=\"104\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"0\" x1=\"140\" y1=\"104\" x2=\"140\" y2=\"50\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"140\" y=\"77\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-1\" points=\"176,104 176,176 248,140\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"1\" x1=\"176\" y1=\"104\" x2=\"176\" y2=\"176\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"1\" x1=\"176\" y1=\"140\" x2=\"248\" y2=\"140\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"212\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">4</text><polygon data-face=\"side-2\" points=\"176,176 104,176 140,230\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"2\" x1=\"176\" y1=\"176\" x2=\"104\" y2=\"176\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"2\" x1=\"140\" y1=\"176\" x2=\"140\" y2=\"230\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"140\" y=\"203\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-3\" points=\"104,176 104,104 50,140\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"3\" x1=\"104\" y1=\"176\" x2=\"104\" y2=\"104\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"3\" x1=\"104\" y1=\"140\" x2=\"50\" y2=\"140\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"77\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><text x=\"140\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">4 × 4</text><text x=\"140\" y=\"268\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình II</text></g><g data-net=\"2\" data-hinh=\"III\" data-unit=\"18\" transform=\"translate(0 290)\"><rect x=\"5\" y=\"5\" width=\"270\" height=\"280\" rx=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><polygon data-face=\"base\" points=\"104,104 176,104 176,176 104,176\" fill=\"#dbeafe\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><polygon data-face=\"side-0\" points=\"104,104 176,104 140,50\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"0\" x1=\"104\" y1=\"104\" x2=\"176\" y2=\"104\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"0\" x1=\"140\" y1=\"104\" x2=\"140\" y2=\"50\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"140\" y=\"77\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-1\" points=\"176,104 176,176 230,140\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"1\" x1=\"176\" y1=\"104\" x2=\"176\" y2=\"176\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"1\" x1=\"176\" y1=\"140\" x2=\"230\" y2=\"140\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"203\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-2\" points=\"176,176 104,176 140,230\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"2\" x1=\"176\" y1=\"176\" x2=\"104\" y2=\"176\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"2\" x1=\"140\" y1=\"176\" x2=\"140\" y2=\"230\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"140\" y=\"203\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-3\" points=\"104,176 104,104 50,140\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"3\" x1=\"104\" y1=\"176\" x2=\"104\" y2=\"104\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"3\" x1=\"104\" y1=\"140\" x2=\"50\" y2=\"140\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"77\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><text x=\"140\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">4 × 4</text><text x=\"140\" y=\"268\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình III</text></g><g data-net=\"3\" data-hinh=\"IV\" data-unit=\"18\" transform=\"translate(280 290)\"><rect x=\"5\" y=\"5\" width=\"270\" height=\"280\" rx=\"7\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><polygon data-face=\"base\" points=\"104,86 176,86 176,194 104,194\" fill=\"#dbeafe\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><polygon data-face=\"side-0\" points=\"104,86 176,86 140,32\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"0\" x1=\"104\" y1=\"86\" x2=\"176\" y2=\"86\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"0\" x1=\"140\" y1=\"86\" x2=\"140\" y2=\"32\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"140\" y=\"59\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-1\" points=\"176,86 176,194 230,140\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"1\" x1=\"176\" y1=\"86\" x2=\"176\" y2=\"194\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"1\" x1=\"176\" y1=\"140\" x2=\"230\" y2=\"140\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"203\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-2\" points=\"176,194 104,194 140,248\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"2\" x1=\"176\" y1=\"194\" x2=\"104\" y2=\"194\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"2\" x1=\"140\" y1=\"194\" x2=\"140\" y2=\"248\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"140\" y=\"221\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><polygon data-face=\"side-3\" points=\"104,194 104,86 50,140\" fill=\"#ffedd5\" stroke=\"#1e40af\" stroke-width=\"1.6\"/><line data-fold=\"3\" x1=\"104\" y1=\"194\" x2=\"104\" y2=\"86\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><line data-altitude=\"3\" x1=\"104\" y1=\"140\" x2=\"50\" y2=\"140\" stroke=\"#94a3b8\" stroke-dasharray=\"3 3\"/><text x=\"77\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3</text><text x=\"140\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">4 × 6</text><text x=\"140\" y=\"268\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình IV</text></g></svg>",
          "options": [
            "A. Hình I",
            "B. Hình II",
            "C. Hình III",
            "D. Hình IV"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nêu điều kiện của hình khai triển\nCần một đáy vuông và bốn mặt bên là các tam giác cân bằng nhau.\nKhi gấp, khối phải có chiều cao dương.\nBước 2: Kiểm tra các mặt của hình III\nHình III có đáy vuông cạnh $4$ và bốn tam giác cân, cùng đáy $4$, cùng đường cao $3$.\nCác cạnh bên của bốn tam giác bằng nhau nên ghép khớp được.\nBước 3: Kiểm tra khối không suy biến\nGọi $O$ là tâm đáy, $M$ là trung điểm một cạnh, $S$ là đỉnh chóp.\n$OM=2$, $SM=3$ nên chiều cao thỏa $SO^2=SM^2-OM^2=9-4=5>0$.\nHình III gấp được thành khối chóp có chiều cao dương.\nBước 4: Loại ba hình còn lại\nHình I thiếu một mặt bên.\nHình II có một tam giác cao $4$, khác ba tam giác cao $3$.\nHình IV có đáy $4\\times6$, không phải hình vuông.\nBước 5: Kết luận\nChọn C: hình III."
        },
        {
          "id": "l8-hinh-chop-nang-cao-04",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Trung đoạn từ chiều cao khối",
          "prompt": "Hình chóp tứ giác đều có cạnh đáy $10$ cm, chiều cao $12$ cm. Tính trung đoạn.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"10\" data-height=\"12\" data-scale3=\"15.555555555555555\" data-origin3=\"173,219\" role=\"img\" aria-label=\"Hình chóp đều lớp 8 · câu 7\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,51 285.77777777777777,203.44444444444446 215.77777777777777,289\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,51 215.77777777777777,289 60.22222222222223,234.55555555555554\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"130.22222222222223\" y1=\"149\" x2=\"173\" y2=\"51\" data-edge3=\"A-S\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"130.22222222222223\" y1=\"149\" x2=\"285.77777777777777\" y2=\"203.44444444444446\" data-edge3=\"A-B\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"130.22222222222223\" y1=\"149\" x2=\"60.22222222222223\" y2=\"234.55555555555554\" data-edge3=\"A-D\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"285.77777777777777\" y1=\"203.44444444444446\" x2=\"173\" y2=\"51\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"285.77777777777777\" y1=\"203.44444444444446\" x2=\"215.77777777777777\" y2=\"289\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"215.77777777777777\" y1=\"289\" x2=\"173\" y2=\"51\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"215.77777777777777\" y1=\"289\" x2=\"60.22222222222223\" y2=\"234.55555555555554\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"60.22222222222223\" y1=\"234.55555555555554\" x2=\"173\" y2=\"51\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"51\" x2=\"173\" y2=\"219\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"219\" x2=\"250.77777777777777\" y2=\"246.22222222222223\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"51\" x2=\"250.77777777777777\" y2=\"246.22222222222223\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-5,-5,0\" cx=\"130.22222222222223\" cy=\"149\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"117.22222222222223\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"5,-5,0\" cx=\"285.77777777777777\" cy=\"203.44444444444446\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"298.77777777777777\" y=\"211.44444444444446\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"5,5,0\" cx=\"215.77777777777777\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"228.77777777777777\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-5,5,0\" cx=\"60.22222222222223\" cy=\"234.55555555555554\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"47.22222222222223\" y=\"242.55555555555554\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,12\" cx=\"173\" cy=\"51\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"36\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"219\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"231\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"5,0,0\" cx=\"250.77777777777777\" cy=\"246.22222222222223\" r=\"2\" fill=\"#64748b\"/><text x=\"264.77777777777777\" y=\"251.22222222222223\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"151\" y=\"135\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">12 cm</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"15\"><polygon points=\"372,280 522,280 447,85\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"372\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"522\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"85\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"85\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"413.23338242481225\" y1=\"183.93591631723547\" x2=\"405.76661757518775\" y2=\"181.06408368276453\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"488.23338242481225\" y1=\"181.06408368276453\" x2=\"480.76661757518775\" y2=\"183.93591631723547\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"71\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"362\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"532\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">10 cm</text><text x=\"469\" y=\"182.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">d = ?</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
          "options": [
            "A. $\\sqrt{194}$ cm",
            "B. 22 cm",
            "C. $\\sqrt{244}$ cm",
            "D. 13 cm"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định tam giác vuông\nGọi $S$ là đỉnh, $O$ là tâm đáy, $M$ là trung điểm một cạnh đáy.\n$SO$ vuông góc mặt đáy nên tam giác $SOM$ vuông tại $O$.\nBước 2: Tính đoạn trong đáy\nTâm hình vuông cách trung điểm mỗi cạnh bằng nửa cạnh.\nDo đó $OM=10/2=5$ cm, còn $SO=12$ cm.\nBước 3: Dùng định lí Pythagore\nTrung đoạn là $SM$.\n$SM^2=SO^2+OM^2=12^2+5^2=169$.\nBước 4: Lấy độ dài dương\n$SM=13$ cm.\n$13>12$ phù hợp vì $SM$ là cạnh huyền; không dùng nửa đường chéo đáy thay cho $OM$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-hinh-chop-nang-cao-05",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Dung tích với hai đơn vị độ dài",
          "prompt": "Một vật chứa có phần lòng là hình chóp tứ giác đều, cạnh đáy trong $40$ cm, chiều cao trong $0{,}6$ m. Bỏ qua độ dày thành. Dung tích tối đa của vật chứa là bao nhiêu lít? Biết $1$ lít $=1000$ cm³.",
          "svg": "",
          "options": [
            "A. 96 lít",
            "B. 3,2 lít",
            "C. 32 lít",
            "D. 0,032 lít"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Thống nhất đơn vị\nCạnh đáy trong là $40$ cm; chiều cao trong $0{,}6$ m bằng $60$ cm.\nPhải đổi về cùng đơn vị trước khi nhân.\nBước 2: Tính diện tích đáy trong\nĐáy vuông có diện tích $40^2=1600$ cm².\nBước 3: Tính thể tích lòng chứa\n$V=\\frac13\\cdot1600\\cdot60=32000$ cm³.\nDùng kích thước bên trong vì cần dung tích chứa.\nBước 4: Đổi sang lít\nMỗi $1000$ cm³ ứng với $1$ lít.\nDung tích bằng $32000/1000=32$ lít.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-hinh-chop-nang-cao-06",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Vải làm mái chóp không có sàn",
          "prompt": "Mái lều là bốn mặt bên của hình chóp tứ giác đều, cạnh đáy $3$ m, trung đoạn $2{,}5$ m. Không làm sàn. Lượng vải mua phải bằng diện tích mái cộng thêm $8\\%$ chính diện tích mái để dành cho mép may và hao hụt. Cần mua bao nhiêu m² vải?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"3\" data-height=\"2\" data-scale3=\"61.60919540229886\" data-origin3=\"173,183.86206896551724\" role=\"img\" aria-label=\"Hình chóp đều lớp 8 · câu 9\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,72.96551724137929 39,202.34482758620692 122.17241379310344,100.68965517241378\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,72.96551724137929 307,165.37931034482756 223.82758620689657,267.0344827586207\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,72.96551724137929 223.82758620689657,267.0344827586207 39,202.34482758620692\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"122.17241379310344\" y1=\"100.68965517241378\" x2=\"307\" y2=\"165.37931034482756\" data-edge3=\"A-B\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"122.17241379310344\" y1=\"100.68965517241378\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"165.37931034482756\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"165.37931034482756\" x2=\"223.82758620689657\" y2=\"267.0344827586207\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"267.0344827586207\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"267.0344827586207\" x2=\"39\" y2=\"202.34482758620692\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"39\" y1=\"202.34482758620692\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.17241379310344\" y1=\"100.68965517241378\" x2=\"39\" y2=\"202.34482758620692\" data-edge3=\"A-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"72.96551724137929\" x2=\"173\" y2=\"183.86206896551724\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"183.86206896551724\" x2=\"265.41379310344826\" y2=\"216.20689655172413\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"72.96551724137929\" x2=\"265.41379310344826\" y2=\"216.20689655172413\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-1.5,-1.5,0\" cx=\"122.17241379310344\" cy=\"100.68965517241378\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"109.17241379310344\" y=\"108.68965517241378\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"1.5,-1.5,0\" cx=\"307\" cy=\"165.37931034482756\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"320\" y=\"173.37931034482756\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"1.5,1.5,0\" cx=\"223.82758620689657\" cy=\"267.0344827586207\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"236.82758620689657\" y=\"275.0344827586207\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-1.5,1.5,0\" cx=\"39\" cy=\"202.34482758620692\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"26\" y=\"210.34482758620692\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,2\" cx=\"173\" cy=\"72.96551724137929\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"57.96551724137929\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"183.86206896551724\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"195.86206896551724\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"1.5,0,0\" cx=\"265.41379310344826\" cy=\"216.20689655172413\" r=\"2\" fill=\"#64748b\"/><text x=\"279.41379310344826\" y=\"221.20689655172413\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"53\"><polygon points=\"367.5,280 526.5,280 447,147.5\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"367.5\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"526.5\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"147.5\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"147.5\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"410.6799717028502\" y1=\"215.8079830217101\" x2=\"403.8200282971498\" y2=\"211.6920169782899\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"490.1799717028502\" y1=\"211.6920169782899\" x2=\"483.3200282971498\" y2=\"215.8079830217101\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"133.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"357.5\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"536.5\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3 m</text><text x=\"469\" y=\"213.75\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">2,5 m</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
          "options": [
            "A. 15 m²",
            "B. 24 m²",
            "C. 16,2 m²",
            "D. 25,92 m²"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định phần cần vải\nLều chỉ làm bốn mặt bên, không làm sàn.\nVì vậy không cộng diện tích đáy vuông vào diện tích mái.\nBước 2: Tính diện tích mái\nMỗi mặt bên có diện tích $\\frac12\\cdot3\\cdot2{,}5=3{,}75$ m².\nBốn mặt có tổng diện tích $4\\cdot3{,}75=15$ m².\nBước 3: Tính phần dự phòng\nĐề yêu cầu thêm $8\\%$ chính diện tích mái.\nPhần thêm bằng $15\\cdot0{,}08=1{,}2$ m².\nBước 4: Tính lượng vải mua\n$15+1{,}2=16{,}2$ m².\nKiểm tra bằng $15\\cdot1{,}08=16{,}2$ m².\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-hinh-chop-nang-cao-07",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Cạnh bên nào dựng được chóp thật?",
          "prompt": "Một hình chóp tứ giác đều có cạnh đáy $10$ cm và chiều cao phải dương. Trong bốn giá trị dưới đây, giá trị nào có thể là độ dài một cạnh bên?",
          "svg": "",
          "options": [
            "A. 5 cm",
            "B. $5\\sqrt2$ cm",
            "C. 8 cm",
            "D. 6 cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tính khoảng cách trong đáy\nGọi $O$ là tâm đáy và $A$ là một đỉnh đáy.\nĐường chéo hình vuông cạnh $10$ có bình phương $10^2+10^2=200$.\n$OA$ bằng nửa đường chéo nên $OA^2=200/4=50$.\nBước 2: Liên hệ cạnh bên với chiều cao\nGọi cạnh bên $SA=l$, chiều cao $SO=h$.\nTam giác $SOA$ vuông tại $O$, nên $h^2=l^2-50$.\nBước 3: Đặt điều kiện không suy biến\nChiều cao phải dương, vì vậy cần $l^2>50$.\nNếu $l^2=50$ thì $h=0$, không tạo khối chóp theo yêu cầu.\nBước 4: Kiểm tra các lựa chọn\n$5^2=25<50$ và $6^2=36<50$: không có chiều cao thực.\n$(5\\sqrt2)^2=50$: chiều cao bằng $0$, loại.\n$8^2=64>50$: nhận, khi đó $h=\\sqrt{14}>0$.\nBước 5: Kết luận\nChọn C."
        }
      ],
      "hsg": [
        {
          "id": "l8-hinh-chop-hsg-01",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Chiều cao từ thể tích chóp",
          "prompt": "Hình chóp tứ giác đều có cạnh đáy $6$ cm, thể tích $60$ cm³. Tính chiều cao theo cm.",
          "svg": "",
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định hình đáy\nHình chóp tứ giác đều có đáy là hình vuông.\nVới cạnh đáy $6$ cm, diện tích đáy là $B=6^2=36$ cm².\nBước 2: Chọn công thức thể tích\nGọi chiều cao vuông góc với đáy là $h>0$ cm.\nThể tích hình chóp là $V=\\frac13Bh$, không dùng trung đoạn thay cho $h$.\nBước 3: Tìm chiều cao\nThay $V=60$, $B=36$: $60=\\frac13\\cdot36\\cdot h=12h$.\nChia cho $12$, được $h=5$ cm.\nBước 4: Thử lại và kiểm tra tính hợp lệ\nVới $h=5$, thể tích là $\\frac13\\cdot36\\cdot5=60$ cm³, đúng đề.\nChiều cao dương nên hình chóp không suy biến.\nBước 5: Kết luận\nChiều cao cần nhập là $5$ cm."
        },
        {
          "id": "l8-hinh-chop-hsg-02",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai hình chóp ở hai phía của đáy",
          "prompt": "Hai hình chóp tứ giác đều có chung đáy vuông cạnh $16$ cm, các đỉnh ở hai phía của mặt đáy. Trung đoạn của hai chóp lần lượt dài $10$ cm và $17$ cm. Hai khối chỉ chung mặt đáy, không chồng lấn phần bên trong. Tính tổng thể tích theo cm³.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"16\" data-height=\"6\" data-scale3=\"11.497584541062801\" data-origin3=\"173,133.7826086956522\" role=\"img\" aria-label=\"Hình chóp đều lớp 8 · câu 12\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hai chóp chung đáy</text><polygon points=\"173,71.69565217391306 122.41062801932367,51.000000000000014 306.37198067632846,115.38647342995169\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,289 306.37198067632846,115.38647342995169 223.58937198067633,216.56521739130437\" fill=\"#ffedd5\" stroke=\"none\"/><polygon points=\"173,71.69565217391306 39.62801932367151,152.17874396135267 122.41062801932367,51.000000000000014\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,289 223.58937198067633,216.56521739130437 39.62801932367151,152.17874396135267\" fill=\"#ffedd5\" stroke=\"none\"/><polygon points=\"173,71.69565217391306 306.37198067632846,115.38647342995169 223.58937198067633,216.56521739130437\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,71.69565217391306 223.58937198067633,216.56521739130437 39.62801932367151,152.17874396135267\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"122.41062801932367\" y1=\"51.000000000000014\" x2=\"173\" y2=\"289\" data-edge3=\"A-T\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"122.41062801932367\" y1=\"51.000000000000014\" x2=\"173\" y2=\"71.69565217391306\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.41062801932367\" y1=\"51.000000000000014\" x2=\"306.37198067632846\" y2=\"115.38647342995169\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"306.37198067632846\" y1=\"115.38647342995169\" x2=\"173\" y2=\"71.69565217391306\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"306.37198067632846\" y1=\"115.38647342995169\" x2=\"223.58937198067633\" y2=\"216.56521739130437\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.58937198067633\" y1=\"216.56521739130437\" x2=\"173\" y2=\"71.69565217391306\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.58937198067633\" y1=\"216.56521739130437\" x2=\"39.62801932367151\" y2=\"152.17874396135267\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"39.62801932367151\" y1=\"152.17874396135267\" x2=\"173\" y2=\"71.69565217391306\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.41062801932367\" y1=\"51.000000000000014\" x2=\"39.62801932367151\" y2=\"152.17874396135267\" data-edge3=\"A-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"306.37198067632846\" y1=\"115.38647342995169\" x2=\"173\" y2=\"289\" data-edge3=\"B-T\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.58937198067633\" y1=\"216.56521739130437\" x2=\"173\" y2=\"289\" data-edge3=\"C-T\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"39.62801932367151\" y1=\"152.17874396135267\" x2=\"173\" y2=\"289\" data-edge3=\"D-T\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"71.69565217391306\" x2=\"173\" y2=\"133.7826086956522\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"133.7826086956522\" x2=\"264.9806763285024\" y2=\"165.97584541062804\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"71.69565217391306\" x2=\"264.9806763285024\" y2=\"165.97584541062804\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><line x1=\"173\" y1=\"289\" x2=\"173\" y2=\"133.7826086956522\" data-aux=\"TO\" stroke=\"#64748b\" stroke-dasharray=\"4 4\"/><circle data-vertex3=\"A\" data-xyz=\"-8,-8,0\" cx=\"122.41062801932367\" cy=\"51.000000000000014\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"109.41062801932367\" y=\"59.000000000000014\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"8,-8,0\" cx=\"306.37198067632846\" cy=\"115.38647342995169\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"319.37198067632846\" y=\"123.38647342995169\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"8,8,0\" cx=\"223.58937198067633\" cy=\"216.56521739130437\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"236.58937198067633\" y=\"224.56521739130437\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-8,8,0\" cx=\"39.62801932367151\" cy=\"152.17874396135267\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"26.62801932367151\" y=\"160.17874396135267\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,6\" cx=\"173\" cy=\"71.69565217391306\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"56.69565217391306\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-vertex3=\"T\" data-xyz=\"0,0,-15\" cx=\"173\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"305\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">T</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"133.7826086956522\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"145.7826086956522\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"8,0,0\" cx=\"264.9806763285024\" cy=\"165.97584541062804\" r=\"2\" fill=\"#64748b\"/><text x=\"278.9806763285024\" y=\"170.97584541062804\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"9\"><polygon points=\"375,155 519,155 447,65\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"375\" cy=\"155\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"519\" cy=\"155\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"65\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"65\" x2=\"447\" y2=\"155\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 155 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"414.12347523777214\" y1=\"112.4987801902177\" x2=\"407.87652476222786\" y2=\"107.5012198097823\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"486.12347523777214\" y1=\"107.5012198097823\" x2=\"479.87652476222786\" y2=\"112.4987801902177\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"51\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"365\" y=\"165\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"529\" y=\"165\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"169\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"189\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">16 cm</text><text x=\"469\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">10 cm</text></g><g data-flat-face=\"T\" data-unit=\"5\"><polygon points=\"407,310 487,310 447,225\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"407\" cy=\"310\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"487\" cy=\"310\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"225\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"225\" x2=\"447\" y2=\"310\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 310 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"430.619274808804\" y1=\"269.20318814531953\" x2=\"423.380725191196\" y2=\"265.79681185468047\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"470.619274808804\" y1=\"265.79681185468047\" x2=\"463.380725191196\" y2=\"269.20318814531953\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"211\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">T</text><text x=\"397\" y=\"320\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"497\" y=\"320\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"324\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"469\" y=\"267.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">17 cm</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
          "correctAnswer": "1792",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định đoạn trong mặt đáy\nGọi $O$ là tâm đáy vuông, $M$ là trung điểm một cạnh đáy.\nVì cạnh vuông dài $16$ cm, khoảng cách từ tâm đến cạnh là $OM=16/2=8$ cm.\nBước 2: Tính chiều cao chóp thứ nhất\nTrung đoạn nối đỉnh với $M$ dài $10$ cm; chiều cao nối đỉnh với $O$ vuông góc đáy.\nTam giác tạo bởi ba đoạn này vuông tại $O$, nên $h_1^2=10^2-8^2=36$, tức $h_1=6$ cm.\nBước 3: Tính chiều cao chóp thứ hai\nTương tự, $h_2^2=17^2-8^2=225$, nên $h_2=15$ cm.\nHai chiều cao đều dương; không được dùng các trung đoạn $10,17$ làm chiều cao trong công thức thể tích.\nBước 4: Cộng hai thể tích\nDiện tích đáy chung là $16^2=256$ cm².\nHai khối không chồng lấn phần bên trong, nên tổng thể tích bằng $\\frac13\\cdot256\\cdot6+\\frac13\\cdot256\\cdot15$.\nĐặt nhân tử chung, được $\\frac{256}{3}(6+15)=256\\cdot7=1792$ cm³.\nBước 5: Kết luận\nTổng thể tích là $1792$ cm³."
        },
        {
          "id": "l8-hinh-chop-hsg-03",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tỉ lệ trung đoạn xác định thể tích",
          "prompt": "Hình chóp tứ giác đều có diện tích xung quanh $240$ cm². Trung đoạn bằng $\\frac56$ cạnh đáy. Tính thể tích hình chóp theo cm³.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"12\" data-height=\"8\" data-scale3=\"15.402298850574715\" data-origin3=\"173,183.86206896551724\" role=\"img\" aria-label=\"Hình chóp đều lớp 8 · câu 13\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,72.96551724137929 39,202.34482758620692 122.17241379310344,100.68965517241378\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,72.96551724137929 307,165.37931034482756 223.82758620689657,267.0344827586207\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,72.96551724137929 223.82758620689657,267.0344827586207 39,202.34482758620692\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"122.17241379310344\" y1=\"100.68965517241378\" x2=\"307\" y2=\"165.37931034482756\" data-edge3=\"A-B\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"122.17241379310344\" y1=\"100.68965517241378\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"165.37931034482756\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"165.37931034482756\" x2=\"223.82758620689657\" y2=\"267.0344827586207\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"267.0344827586207\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"267.0344827586207\" x2=\"39\" y2=\"202.34482758620692\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"39\" y1=\"202.34482758620692\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.17241379310344\" y1=\"100.68965517241378\" x2=\"39\" y2=\"202.34482758620692\" data-edge3=\"A-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"72.96551724137929\" x2=\"173\" y2=\"183.86206896551724\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"183.86206896551724\" x2=\"265.41379310344826\" y2=\"216.20689655172413\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"72.96551724137929\" x2=\"265.41379310344826\" y2=\"216.20689655172413\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-6,-6,0\" cx=\"122.17241379310344\" cy=\"100.68965517241378\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"109.17241379310344\" y=\"108.68965517241378\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"6,-6,0\" cx=\"307\" cy=\"165.37931034482756\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"320\" y=\"173.37931034482756\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"6,6,0\" cx=\"223.82758620689657\" cy=\"267.0344827586207\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"236.82758620689657\" y=\"275.0344827586207\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-6,6,0\" cx=\"39\" cy=\"202.34482758620692\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"26\" y=\"210.34482758620692\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,8\" cx=\"173\" cy=\"72.96551724137929\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"57.96551724137929\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"183.86206896551724\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"195.86206896551724\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"6,0,0\" cx=\"265.41379310344826\" cy=\"216.20689655172413\" r=\"2\" fill=\"#64748b\"/><text x=\"279.41379310344826\" y=\"221.20689655172413\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"13\"><polygon points=\"369,280 525,280 447,150\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"369\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"525\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"150\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"150\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"411.4299717028502\" y1=\"217.0579830217101\" x2=\"404.5700282971498\" y2=\"212.9420169782899\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"489.4299717028502\" y1=\"212.9420169782899\" x2=\"482.5700282971498\" y2=\"217.0579830217101\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"136\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"359\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"535\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">a</text><text x=\"469\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">d = 5a/6</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
          "correctAnswer": "384",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Biểu diễn trung đoạn qua cạnh đáy\nGọi cạnh đáy là $a>0$ cm, trung đoạn là $d=5a/6$.\nBốn mặt bên là các tam giác có đáy $a$ và đường cao $d$.\nBước 2: Dùng diện tích xung quanh\nTổng diện tích mặt bên là $4\\cdot\\frac12ad=2ad=240$.\nThay $d=5a/6$, được $5a^2/3=240$, nên $a^2=144$ và $a=12$ cm vì độ dài dương.\nBước 3: Tính chiều cao thật của khối\nTrung đoạn $d=10$ cm, khoảng cách từ tâm đáy đến trung điểm cạnh là $a/2=6$ cm.\nPythagore trong tam giác vuông qua chiều cao cho $h^2=10^2-6^2=64$, nên $h=8$ cm.\nBước 4: Tính thể tích và kiểm tra\nCó $V=\\frac13a^2h=\\frac13\\cdot144\\cdot8=384$ cm³.\nKiểm diện tích xung quanh: $2\\cdot12\\cdot10=240$ cm². Đồng thời $d=10>6$ nên chiều cao dương, hình chóp dựng được.\nBước 5: Kết luận\nThể tích là $384$ cm³."
        },
        {
          "id": "l8-hinh-chop-hsg-04",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Suy công thức từ các tam giác mặt bên",
          "prompt": "Một hình chóp tam giác đều hoặc tứ giác đều có chu vi đáy P, trung đoạn d và chiều cao h đều dương. Chứng minh $S_{xq}=\\frac12Pd$. Giải thích thêm vì sao thay d bằng h sẽ cho kết quả nhỏ hơn diện tích xung quanh thật.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"3\" data-base=\"6\" data-height=\"7\" data-scale3=\"29.00579862946389\" data-origin3=\"150.39221737684557,233.7365313656225\" role=\"img\" aria-label=\"Hình chóp đều lớp 8 · câu 14\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"150.39221737684557,51 105.17665213053671,289 85.98260411160832,175.6487084874967\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"150.39221737684557,51 260.01739588839166,236.56088560937084 105.17665213053671,289\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"85.98260411160832\" y1=\"175.6487084874967\" x2=\"260.01739588839166\" y2=\"236.56088560937084\" data-edge3=\"B-C\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"105.17665213053671\" y1=\"289\" x2=\"150.39221737684557\" y2=\"51\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"105.17665213053671\" y1=\"289\" x2=\"85.98260411160832\" y2=\"175.6487084874967\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"85.98260411160832\" y1=\"175.6487084874967\" x2=\"150.39221737684557\" y2=\"51\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"260.01739588839166\" y1=\"236.56088560937084\" x2=\"150.39221737684557\" y2=\"51\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"105.17665213053671\" y1=\"289\" x2=\"260.01739588839166\" y2=\"236.56088560937084\" data-edge3=\"A-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"150.39221737684557\" y1=\"51\" x2=\"150.39221737684557\" y2=\"233.7365313656225\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"150.39221737684557\" y1=\"233.7365313656225\" x2=\"182.59702400946418\" y2=\"262.78044280468544\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"150.39221737684557\" y1=\"51\" x2=\"182.59702400946418\" y2=\"262.78044280468544\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"0,3.464101615137755,0\" cx=\"105.17665213053671\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"92.17665213053671\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"-3,-1.7320508075688774,0\" cx=\"85.98260411160832\" cy=\"175.6487084874967\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"72.98260411160832\" y=\"183.6487084874967\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3,-1.7320508075688774,0\" cx=\"260.01739588839166\" cy=\"236.56088560937084\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"273.01739588839166\" y=\"244.56088560937084\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"S\" data-xyz=\"0,0,7\" cx=\"150.39221737684557\" cy=\"51\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"150.39221737684557\" y=\"36\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"150.39221737684557\" cy=\"233.7365313656225\" r=\"2\" fill=\"#64748b\"/><text x=\"138.39221737684557\" y=\"245.7365313656225\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"1.5,0.8660254037844387,0\" cx=\"182.59702400946418\" cy=\"262.78044280468544\" r=\"2\" fill=\"#64748b\"/><text x=\"196.59702400946418\" y=\"267.78044280468544\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"128.39221737684557\" y=\"142.36826568281126\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">h</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"26\"><polygon points=\"369,280 525,280 447,92.51133367587255\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"369\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"525\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"92.51133367587255\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"92.51133367587255\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"411.6931482859879\" y1=\"187.79210939713101\" x2=\"404.3068517140121\" y2=\"184.71922427874154\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"489.6931482859879\" y1=\"184.71922427874154\" x2=\"482.3068517140121\" y2=\"187.79210939713101\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"78.51133367587255\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"359\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"535\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">a</text><text x=\"469\" y=\"186.25566683793627\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">d</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
          "solution": "Bước 1: Tính diện tích từng mặt bên\nGọi các cạnh đáy là $a_1,\\ldots,a_n$, với $n=3$ hoặc $4$.\nMỗi mặt bên là tam giác có đáy $a_i$ và đường cao là trung đoạn chung $d$, nên diện tích bằng $\\frac12a_i d$.\nBước 2: Cộng các mặt bên\nDiện tích xung quanh là tổng diện tích các mặt bên, không gồm mặt đáy.\nVì vậy $S_{xq}=\\frac12a_1d+\\cdots+\\frac12a_nd=\\frac12(a_1+\\cdots+a_n)d$.\nBước 3: Liên hệ với chu vi đáy\nTổng $a_1+\\cdots+a_n$ chính là chu vi $P$.\nDo đó $S_{xq}=\\frac12Pd$.\nBước 4: So sánh trung đoạn và chiều cao\nGọi $S$ là đỉnh, $O$ là tâm đáy, $M$ là trung điểm một cạnh đáy.\nTam giác $SOM$ vuông tại $O$, với $SM=d$, $SO=h$ và $OM>0$.\nPythagore cho $d^2=h^2+OM^2>h^2$. Vì $d,h>0$, suy ra $d>h$.\nBước 5: Kết luận\nVì $P>0$, có $\\frac12Pd>\\frac12Ph$.\nCông thức đúng dùng trung đoạn $d$; thay bằng chiều cao $h$ sẽ cho diện tích nhỏ hơn diện tích xung quanh thật."
        },
        {
          "id": "l8-hinh-chop-hsg-05",
          "lop": 8,
          "chuDe": "hinh-chop",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Phóng cả ba chiều của hình chóp",
          "prompt": "Từ một hình chóp tam giác đều hoặc tứ giác đều, tạo hình mới bằng cách nhân mọi độ dài ở đáy và chiều cao khối với cùng số $k>0$. Chứng minh thể tích mới bằng $k^3$ thể tích cũ. Dùng kết quả để giải thích vì sao khi mọi độ dài gấp đôi thì thể tích gấp 8, không chỉ gấp 4.",
          "svg": "",
          "solution": "Bước 1: Đặt các đại lượng trước và sau\nGọi diện tích đáy, chiều cao, thể tích cũ lần lượt là $B,h,V$.\nKí hiệu tương ứng của hình mới là $B',h',V'$; theo đề $h'=kh$ với $k>0$.\nBước 2: Tìm sự thay đổi diện tích đáy\nMọi độ dài ở đáy đều nhân với $k$, nên hai đáy đồng dạng tỉ số $k$.\nDiện tích vì thế nhân với $k^2$, tức $B'=k^2B$.\nBước 3: Thay vào công thức thể tích\nThể tích mới là $V'=\\frac13B'h'=\\frac13(k^2B)(kh)$.\nGom các thừa số, được $V'=k^3\\left(\\frac13Bh\\right)=k^3V$.\nBước 4: Xét trường hợp độ dài gấp đôi\nVới $k=2$, đáy có diện tích gấp $2^2=4$ lần và chiều cao gấp $2$ lần.\nThể tích vì vậy gấp $4\\cdot2=8$ lần, không chỉ $4$ lần.\nBước 5: Kết luận\nNhân mọi độ dài theo hệ số $k>0$ làm thể tích nhân với $k^3$.\nĐiều kiện dương giữ đáy và chiều cao không suy biến; hệ số $4$ khi gấp đôi mới chỉ xét hai chiều của đáy, còn thiếu chiều cao."
        }
      ]
    },
    'xac-suat': {
      "kha": [
        {
          "id": "l8-xac-suat-kha-01",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Mã số có biến dữ liệu thành số không?",
          "prompt": "Một phiếu khảo sát mã hoá mức hài lòng: 1 = không hài lòng; 2 = bình thường; 3 = hài lòng. Xét ý nghĩa của thông tin được thu thập, đây là loại dữ liệu nào?",
          "svg": "",
          "options": [
            "A. Dữ liệu số, vì các mã đều là số nguyên.",
            "B. Dữ liệu không là số, có thể sắp thứ tự.",
            "C. Dữ liệu không là số, không thể sắp thứ tự.",
            "D. Dữ liệu số đo, vì mã 3 nghĩa là hài lòng gấp ba mã 1."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định thông tin thực sự\nPhiếu đang thu thập mức hài lòng, không đo chiều dài, khối lượng hay đếm số lượng.\nCác chữ số $1,2,3$ chỉ dùng để ghi mã.\nBước 2: Xét khả năng sắp thứ tự\nBa mức có thể xếp từ thấp đến cao: không hài lòng, bình thường, hài lòng.\nBước 3: Phân loại dữ liệu\nĐây là dữ liệu không là số nhưng có thể sắp thứ tự.\nHình thức ghi bằng chữ số không làm thay đổi ý nghĩa của dữ liệu.\nBước 4: Loại cách hiểu sai\nMã $3$ không có nghĩa mức hài lòng gấp ba mã $1$.\nDo đó không được xem các mã như số đo để so sánh theo phép nhân.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-xac-suat-kha-02",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tỉ số mô tả khả năng lấy thẻ",
          "prompt": "Một hộp có 7 thẻ vàng và 5 thẻ tím, giống nhau về kích thước và khối lượng. Trộn đều rồi lấy ngẫu nhiên một thẻ; mỗi thẻ có cơ hội được lấy như nhau. Xác suất lấy được thẻ tím bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac57$",
            "B. $\\frac7{12}$",
            "C. $\\frac5{12}$",
            "D. $\\frac12$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đếm tất cả thẻ\nHộp có $7+5=12$ thẻ.\nĐề cho các thẻ có cơ hội được lấy như nhau.\nBước 2: Đếm thẻ thuận lợi\nLấy được thẻ tím là kết quả cần xét.\nCó $5$ thẻ tím trong hộp.\nBước 3: Tính xác suất\nXác suất bằng số thẻ tím chia tổng số thẻ: $P=\\frac5{12}$.\nBước 4: Phân biệt màu với thẻ\nHai màu không có cơ hội bằng nhau vì số thẻ mỗi màu khác nhau.\nMẫu số phải là $12$, không phải $7$ thẻ vàng.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-xac-suat-kha-03",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Chọn biểu đồ theo nhiệm vụ",
          "prompt": "Một bảng ghi riêng số nam và số nữ của từng lớp 8A, 8B, 8C. Cần biểu diễn để so sánh trực tiếp SỐ HỌC SINH nam với nữ trong mỗi lớp và giữa các lớp. Phương án nào phù hợp nhất?",
          "svg": "",
          "options": [
            "A. Biểu đồ cột kép: mỗi lớp một cặp cột nam, nữ, cùng thang đo số học sinh.",
            "B. Biểu đồ đoạn thẳng: nối lần lượt nam 8A, nữ 8A, nam 8B, nữ 8B, nam 8C, nữ 8C.",
            "C. Biểu đồ quạt tròn chỉ chia tổng cả ba lớp thành hai phần nam và nữ.",
            "D. Biểu đồ cột chồng 100% cho từng lớp, chỉ ghi phần trăm, không ghi quy mô lớp."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Làm rõ mục tiêu\nCần so sánh số nam với số nữ trong từng lớp, đồng thời so sánh giữa các lớp.\nĐại lượng cần đọc là số học sinh, không chỉ phần trăm.\nBước 2: Chọn cách biểu diễn\nBiểu đồ cột kép đặt hai cột nam, nữ cạnh nhau ở mỗi lớp.\nCác cột dùng chung một thang đo số học sinh.\nBước 3: Kiểm tra mục tiêu so sánh\nHai cột trong một cặp cho phép so sánh nam với nữ.\nCác cặp ở các lớp khác nhau vẫn so sánh được vì dùng cùng đơn vị và thang đo.\nBước 4: Xét các cách khác\nNối xen kẽ nam, nữ bằng đường gấp khúc tạo một trình tự không có ý nghĩa.\nQuạt tròn gộp cả ba lớp làm mất thông tin từng lớp.\nCột $100\\%$ thiếu quy mô lớp nên không xác định được số học sinh.\nBước 5: Kết luận\nChọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l8-xac-suat-nang-cao-01",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Kiểm biểu đồ xuất từ bảng tính",
          "prompt": "Bảng gốc và bốn biểu đồ xuất từ bảng tính ở dưới cùng mô tả số học sinh đăng kí cờ vua. Biểu đồ nào giữ đúng cả nhãn lớp lẫn số liệu của bảng gốc?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 580\" role=\"img\" aria-label=\"Bảng dữ liệu gốc và bốn phương án biểu đồ cột\"><text x=\"280\" y=\"22\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">Bảng gốc: số học sinh đăng kí cờ vua</text><text x=\"280\" y=\"47\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\">8A: 12 bạn   |   8B: 18 bạn   |   8C: 15 bạn</text><g data-hinh=\"I\" data-chart=\"bars\" data-zero=\"197\" data-scale=\"3.5\" transform=\"translate(0 65)\"><rect x=\"4\" y=\"4\" width=\"270\" height=\"244\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"140\" y=\"25\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\">Hình I</text><text x=\"14\" y=\"48\" text-anchor=\"start\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">Bạn</text><line x1=\"48\" y1=\"197\" x2=\"256\" y2=\"197\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"201\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">0</text><line x1=\"48\" y1=\"162\" x2=\"256\" y2=\"162\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"166\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">10</text><line x1=\"48\" y1=\"127\" x2=\"256\" y2=\"127\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"131\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">20</text><line x1=\"48\" y1=\"92\" x2=\"256\" y2=\"92\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"96\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">30</text><line x1=\"48\" y1=\"57\" x2=\"256\" y2=\"57\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"61\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">40</text><path d=\"M 48 50 V 197 H 258\" stroke=\"#334155\" fill=\"none\"/><rect data-category=\"8A\" data-value=\"12\" x=\"64\" y=\"155\" width=\"36\" height=\"42\" fill=\"#2563eb\"/><text x=\"82\" y=\"149\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">12</text><text x=\"82\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8A</text><rect data-category=\"8B\" data-value=\"15\" x=\"134\" y=\"144.5\" width=\"36\" height=\"52.5\" fill=\"#2563eb\"/><text x=\"152\" y=\"138.5\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">15</text><text x=\"152\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8B</text><rect data-category=\"8C\" data-value=\"18\" x=\"204\" y=\"134\" width=\"36\" height=\"63\" fill=\"#2563eb\"/><text x=\"222\" y=\"128\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">18</text><text x=\"222\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8C</text></g><g data-hinh=\"II\" data-chart=\"bars\" data-zero=\"197\" data-scale=\"3.5\" transform=\"translate(280 65)\"><rect x=\"4\" y=\"4\" width=\"270\" height=\"244\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"140\" y=\"25\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\">Hình II</text><text x=\"14\" y=\"48\" text-anchor=\"start\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">Bạn</text><line x1=\"48\" y1=\"197\" x2=\"256\" y2=\"197\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"201\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">0</text><line x1=\"48\" y1=\"162\" x2=\"256\" y2=\"162\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"166\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">10</text><line x1=\"48\" y1=\"127\" x2=\"256\" y2=\"127\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"131\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">20</text><line x1=\"48\" y1=\"92\" x2=\"256\" y2=\"92\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"96\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">30</text><line x1=\"48\" y1=\"57\" x2=\"256\" y2=\"57\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"61\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">40</text><path d=\"M 48 50 V 197 H 258\" stroke=\"#334155\" fill=\"none\"/><rect data-category=\"8A\" data-value=\"12\" x=\"64\" y=\"155\" width=\"36\" height=\"42\" fill=\"#2563eb\"/><text x=\"82\" y=\"149\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">12</text><text x=\"82\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8A</text><rect data-category=\"8B\" data-value=\"18\" x=\"134\" y=\"134\" width=\"36\" height=\"63\" fill=\"#2563eb\"/><text x=\"152\" y=\"128\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">18</text><text x=\"152\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8B</text><rect data-category=\"8C\" data-value=\"15\" x=\"204\" y=\"144.5\" width=\"36\" height=\"52.5\" fill=\"#2563eb\"/><text x=\"222\" y=\"138.5\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">15</text><text x=\"222\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8C</text></g><g data-hinh=\"III\" data-chart=\"bars\" data-zero=\"197\" data-scale=\"3.5\" transform=\"translate(0 320)\"><rect x=\"4\" y=\"4\" width=\"270\" height=\"244\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"140\" y=\"25\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\">Hình III</text><text x=\"14\" y=\"48\" text-anchor=\"start\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">Bạn</text><line x1=\"48\" y1=\"197\" x2=\"256\" y2=\"197\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"201\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">0</text><line x1=\"48\" y1=\"162\" x2=\"256\" y2=\"162\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"166\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">10</text><line x1=\"48\" y1=\"127\" x2=\"256\" y2=\"127\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"131\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">20</text><line x1=\"48\" y1=\"92\" x2=\"256\" y2=\"92\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"96\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">30</text><line x1=\"48\" y1=\"57\" x2=\"256\" y2=\"57\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"61\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">40</text><path d=\"M 48 50 V 197 H 258\" stroke=\"#334155\" fill=\"none\"/><rect data-category=\"8B\" data-value=\"12\" x=\"64\" y=\"155\" width=\"36\" height=\"42\" fill=\"#2563eb\"/><text x=\"82\" y=\"149\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">12</text><text x=\"82\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8B</text><rect data-category=\"8A\" data-value=\"18\" x=\"134\" y=\"134\" width=\"36\" height=\"63\" fill=\"#2563eb\"/><text x=\"152\" y=\"128\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">18</text><text x=\"152\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8A</text><rect data-category=\"8C\" data-value=\"15\" x=\"204\" y=\"144.5\" width=\"36\" height=\"52.5\" fill=\"#2563eb\"/><text x=\"222\" y=\"138.5\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">15</text><text x=\"222\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8C</text></g><g data-hinh=\"IV\" data-chart=\"bars\" data-zero=\"197\" data-scale=\"3.5\" transform=\"translate(280 320)\"><rect x=\"4\" y=\"4\" width=\"270\" height=\"244\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><text x=\"140\" y=\"25\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\">Hình IV</text><text x=\"14\" y=\"48\" text-anchor=\"start\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">Bạn</text><line x1=\"48\" y1=\"197\" x2=\"256\" y2=\"197\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"201\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">0</text><line x1=\"48\" y1=\"162\" x2=\"256\" y2=\"162\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"166\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">10</text><line x1=\"48\" y1=\"127\" x2=\"256\" y2=\"127\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"131\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">20</text><line x1=\"48\" y1=\"92\" x2=\"256\" y2=\"92\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"96\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">30</text><line x1=\"48\" y1=\"57\" x2=\"256\" y2=\"57\" stroke=\"#cbd5e1\"/><text x=\"40\" y=\"61\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"11\" fill=\"#0f172a\">40</text><path d=\"M 48 50 V 197 H 258\" stroke=\"#334155\" fill=\"none\"/><rect data-category=\"8A\" data-value=\"24\" x=\"64\" y=\"113\" width=\"36\" height=\"84\" fill=\"#2563eb\"/><text x=\"82\" y=\"107\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">24</text><text x=\"82\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8A</text><rect data-category=\"8B\" data-value=\"36\" x=\"134\" y=\"71\" width=\"36\" height=\"126\" fill=\"#2563eb\"/><text x=\"152\" y=\"65\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">36</text><text x=\"152\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8B</text><rect data-category=\"8C\" data-value=\"30\" x=\"204\" y=\"92\" width=\"36\" height=\"105\" fill=\"#2563eb\"/><text x=\"222\" y=\"86\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">30</text><text x=\"222\" y=\"220\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">8C</text></g></svg>",
          "options": [
            "A. Hình I",
            "B. Hình II",
            "C. Hình III",
            "D. Hình IV"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Ghi các cặp dữ liệu gốc\nBảng cho lớp 8A có $12$ bạn, 8B có $18$ bạn, 8C có $15$ bạn đăng kí.\nPhải giữ đúng cả tên lớp lẫn số lượng đi kèm.\nBước 2: Đọc biểu đồ theo nhãn\nỞ mỗi hình, tìm nhãn lớp trước rồi đọc độ cao cột theo thang đo.\nKhông chỉ kiểm xem có đủ ba số $12,18,15$ hay không.\nBước 3: Kiểm tra hình II\nHình II ghép đúng 8A với $12$, 8B với $18$, 8C với $15$.\nCả ba cặp đều trùng bảng gốc.\nBước 4: Xác định lỗi ở các hình khác\nHình I tráo số liệu 8B và 8C.\nHình III tráo nhãn 8A và 8B.\nHình IV nhân đôi cả ba số liệu nên sai quy mô.\nBước 5: Kết luận\nChọn B: hình II."
        },
        {
          "id": "l8-xac-suat-nang-cao-02",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Đúng phạm vi và thời điểm thu thập",
          "prompt": "Lớp 8A có 40 học sinh, sáng thứ Hai cả lớp đi học đủ. Cần biết chính xác số bạn ĐẾN TRƯỜNG BẰNG XE ĐẠP trong sáng đó. Mỗi bạn chỉ được tính một lần. Bộ dữ liệu nào dùng được trực tiếp cho mục tiêu này?",
          "svg": "",
          "options": [
            "A. Phiếu lớp 8A, sáng thứ Hai: 18 bạn xe đạp, 25 bạn phương tiện khác.",
            "B. Bảng của toàn khối 8 sáng thứ Hai: 60 bạn xe đạp; không tách từng lớp.",
            "C. Bảng lớp 8A sáng thứ Sáu tuần trước: 13 bạn xe đạp, 27 bạn phương tiện khác.",
            "D. Quan sát đủ 40 bạn lớp 8A sáng thứ Hai: 13 bạn xe đạp, 27 bạn phương tiện khác."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định yêu cầu dữ liệu\nCần đúng lớp 8A, đúng sáng thứ Hai và đủ $40$ học sinh.\nMỗi bạn chỉ được tính một lần.\nBước 2: Kiểm tra phương án D\nD quan sát đủ lớp 8A vào đúng thời điểm.\n$13$ bạn xe đạp và $27$ bạn phương tiện khác có tổng $13+27=40$.\nBước 3: Kiểm tra sự phù hợp\nHai nhóm phân biệt theo cách đến trường trong sáng đó.\nVì vậy dữ liệu D dùng trực tiếp được và cho số bạn xe đạp là $13$.\nBước 4: Loại dữ liệu không đạt\nA có $18+25=43>40$, mâu thuẫn với cách đếm mỗi bạn một lần.\nB không tách riêng 8A; C thuộc thứ Sáu tuần trước, khác thời điểm cần biết.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l8-xac-suat-nang-cao-03",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Từ cơ cấu khối lượng sang bảng",
          "prompt": "Biểu đồ cho cơ cấu KHỐI LƯỢNG của 80 kg vật liệu thu gom; ba loại không trùng nhau và bao gồm toàn bộ vật liệu. Bảng nào đúng theo thứ tự (giấy; nhựa; kim loại), đơn vị kg?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 340\" width=\"100%\" role=\"img\" aria-label=\"Cơ cấu khối lượng vật liệu thu gom\"><g font-family=\"Arial, sans-serif\" font-size=\"16\" fill=\"#0f172a\"><text x=\"280\" y=\"26\" text-anchor=\"middle\" font-weight=\"bold\">Cơ cấu khối lượng vật liệu thu gom</text><path data-label=\"Giấy\" data-count=\"45\" data-total=\"100\" data-start=\"-90\" data-sweep=\"162\" d=\"M 155 180 L 155 75 A 105 105 0 0 1 187.44678440936949 279.8609342109911 Z\" fill=\"#2563eb\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"226.11356052284992\" y=\"168.73671851710338\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#fff\" font-weight=\"bold\" stroke=\"#334155\" stroke-width=\"0.5\" paint-order=\"stroke\">45%</text><rect x=\"300\" y=\"90\" width=\"18\" height=\"18\" fill=\"#2563eb\"/><text x=\"330\" y=\"105\">Giấy</text><path data-label=\"Nhựa\" data-count=\"30\" data-total=\"100\" data-start=\"72\" data-sweep=\"108\" d=\"M 155 180 L 187.44678440936949 279.8609342109911 A 105 105 0 0 1 50 180 Z\" fill=\"#f59e0b\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"112.67946183494195\" y=\"238.2492235949962\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#fff\" font-weight=\"bold\" stroke=\"#334155\" stroke-width=\"0.5\" paint-order=\"stroke\">30%</text><rect x=\"300\" y=\"138\" width=\"18\" height=\"18\" fill=\"#f59e0b\"/><text x=\"330\" y=\"153\">Nhựa</text><path data-label=\"Kim loại\" data-count=\"25\" data-total=\"100\" data-start=\"180\" data-sweep=\"90\" d=\"M 155 180 L 50 180 A 105 105 0 0 1 154.99999999999997 75 Z\" fill=\"#10b981\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"104.08831175456856\" y=\"129.08831175456856\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#fff\" font-weight=\"bold\" stroke=\"#334155\" stroke-width=\"0.5\" paint-order=\"stroke\">25%</text><rect x=\"300\" y=\"186\" width=\"18\" height=\"18\" fill=\"#10b981\"/><text x=\"330\" y=\"201\">Kim loại</text></g></svg>",
          "options": [
            "A. (36; 20; 24)",
            "B. (45; 30; 25)",
            "C. (36; 24; 20)",
            "D. (40; 24; 16)"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đọc đúng tỉ lệ theo nhãn\nGiấy chiếm $45\\%$, nhựa $30\\%$, kim loại $25\\%$ của tổng $80$ kg.\nĐây là tỉ lệ khối lượng, không phải số kg trực tiếp.\nBước 2: Tính giấy\n$80\\cdot45/100=36$ kg.\nBước 3: Tính hai loại còn lại\nNhựa: $80\\cdot30/100=24$ kg.\nKim loại: $80\\cdot25/100=20$ kg.\nBước 4: Kiểm tra tổng và thứ tự\n$36+24+20=80$ kg, khớp tổng thu gom.\nTheo thứ tự giấy, nhựa, kim loại, bộ số là $(36;24;20)$.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l8-xac-suat-nang-cao-04",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai điều kiện phải cùng đúng",
          "prompt": "Có 15 thẻ giống nhau, ghi các số từ 1 đến 15, mỗi số một thẻ. Lấy ngẫu nhiên một thẻ với cơ hội như nhau cho mỗi thẻ. Tính xác suất số lấy được vừa là ước của 12, vừa lớn hơn 2.",
          "svg": "",
          "options": [
            "A. $\\frac4{15}$",
            "B. $\\frac6{15}$",
            "C. $\\frac{13}{15}$",
            "D. $\\frac5{15}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định tổng số thẻ\nCó $15$ thẻ ghi các số từ $1$ đến $15$, mỗi thẻ có cơ hội được lấy như nhau.\nBước 2: Liệt kê các ước\nCác ước dương của $12$ là $1,2,3,4,6,12$.\nTất cả các số này đều có trong hộp.\nBước 3: Lọc điều kiện còn lại\nSố được chọn còn phải lớn hơn $2$.\nLoại $1,2$, còn $3,4,6,12$: có $4$ thẻ thuận lợi.\nBước 4: Tính xác suất\n$P=4/15$.\nTừ “vừa… vừa…” yêu cầu cả hai điều kiện cùng đúng, nên không nhận tất cả sáu ước của $12$.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l8-xac-suat-nang-cao-05",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Số liệu thử chưa thay mô hình",
          "prompt": "Một đồng xu được giả thiết cân đối, nên ở mỗi lần tung xác suất mặt ngửa là $\\frac12$. Một nhóm tung 30 lần, ghi được 18 lần ngửa. Nhận xét nào đúng?",
          "svg": "",
          "options": [
            "A. Xác suất mặt ngửa ở lần tiếp theo đã đổi thành 18/30.",
            "B. Chỉ cần thấy 18 khác 15 là đủ kết luận đồng xu không cân đối.",
            "C. Trong 30 lần tung tiếp theo bắt buộc có đúng 12 lần ngửa để bù lại.",
            "D. Tỉ lệ 18/30 của đợt thử có thể khác 1/2; số liệu này chưa bác bỏ giả thiết đồng xu cân đối."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Phân biệt mô hình và quan sát\nGiả thiết đồng xu cân đối cho xác suất ngửa $1/2$ ở mỗi lần tung.\nSố $18$ là kết quả đã ghi trong một đợt $30$ lần.\nBước 2: Tính tỉ lệ quan sát\n$18/30=0{,}6$, khác $0{,}5$.\nSự khác nhau này mô tả đợt thử, không tự thay đổi giả thiết về đồng xu.\nBước 3: Giải thích dao động\nTrong một số hữu hạn lần tung, số lần ngửa có thể nhiều hơn hoặc ít hơn một nửa.\nKhông có yêu cầu mỗi đợt đều phải có đúng $15$ lần ngửa.\nBước 4: Đánh giá các kết luận\nChỉ từ $18\\ne15$ chưa đủ bác bỏ giả thiết cân đối.\nCũng không có quy tắc bắt đợt tiếp theo phải có đúng $12$ lần ngửa để bù lại.\nBước 5: Kết luận\nNhận xét phù hợp là D."
        },
        {
          "id": "l8-xac-suat-nang-cao-06",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Không coi các giá trị tích là đồng khả năng",
          "prompt": "Hộp đỏ có ba thẻ số 1, 2, 3; hộp xanh có bốn thẻ số 1, 2, 3, 4. Các thẻ trong mỗi hộp giống nhau. Lấy ngẫu nhiên một thẻ từ mỗi hộp; việc lấy ở hai hộp độc lập nên 12 cặp thẻ có cơ hội như nhau. Bảng dưới ghi tích hai số. Tính xác suất tích là số chẵn.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 262\" role=\"img\" aria-label=\"Bảng tích của 12 cặp thẻ đồng khả năng\"><text x=\"280\" y=\"25\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\">Tích hai số trên thẻ (hàng: hộp đỏ; cột: hộp xanh)</text><g><rect x=\"50\" y=\"50\" width=\"92\" height=\"48\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"96\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">Đỏ / Xanh</text></g><g><rect x=\"142\" y=\"50\" width=\"92\" height=\"48\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"188\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">1</text></g><g><rect x=\"234\" y=\"50\" width=\"92\" height=\"48\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"280\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">2</text></g><g><rect x=\"326\" y=\"50\" width=\"92\" height=\"48\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"372\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">3</text></g><g><rect x=\"418\" y=\"50\" width=\"92\" height=\"48\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"464\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">4</text></g><g><rect x=\"50\" y=\"98\" width=\"92\" height=\"48\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"96\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">1</text></g><g data-red=\"1\" data-blue=\"1\" data-product=\"1\"><rect x=\"142\" y=\"98\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"188\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">1</text></g><g data-red=\"1\" data-blue=\"2\" data-product=\"2\"><rect x=\"234\" y=\"98\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"280\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">2</text></g><g data-red=\"1\" data-blue=\"3\" data-product=\"3\"><rect x=\"326\" y=\"98\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"372\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">3</text></g><g data-red=\"1\" data-blue=\"4\" data-product=\"4\"><rect x=\"418\" y=\"98\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"464\" y=\"127\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">4</text></g><g><rect x=\"50\" y=\"146\" width=\"92\" height=\"48\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"96\" y=\"175\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">2</text></g><g data-red=\"2\" data-blue=\"1\" data-product=\"2\"><rect x=\"142\" y=\"146\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"188\" y=\"175\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">2</text></g><g data-red=\"2\" data-blue=\"2\" data-product=\"4\"><rect x=\"234\" y=\"146\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"280\" y=\"175\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">4</text></g><g data-red=\"2\" data-blue=\"3\" data-product=\"6\"><rect x=\"326\" y=\"146\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"372\" y=\"175\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">6</text></g><g data-red=\"2\" data-blue=\"4\" data-product=\"8\"><rect x=\"418\" y=\"146\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"464\" y=\"175\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">8</text></g><g><rect x=\"50\" y=\"194\" width=\"92\" height=\"48\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text x=\"96\" y=\"223\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">3</text></g><g data-red=\"3\" data-blue=\"1\" data-product=\"3\"><rect x=\"142\" y=\"194\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"188\" y=\"223\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">3</text></g><g data-red=\"3\" data-blue=\"2\" data-product=\"6\"><rect x=\"234\" y=\"194\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"280\" y=\"223\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">6</text></g><g data-red=\"3\" data-blue=\"3\" data-product=\"9\"><rect x=\"326\" y=\"194\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"372\" y=\"223\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">9</text></g><g data-red=\"3\" data-blue=\"4\" data-product=\"12\"><rect x=\"418\" y=\"194\" width=\"92\" height=\"48\" fill=\"#fff\" stroke=\"#94a3b8\"/><text x=\"464\" y=\"223\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">12</text></g></svg>",
          "options": [
            "A. $\\frac57$",
            "B. $\\frac23$",
            "C. $\\frac12$",
            "D. $\\frac34$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đếm các cặp đồng khả năng\nMỗi thẻ đỏ ghép với được $4$ thẻ xanh.\nCó $3\\cdot4=12$ cặp, và đề cho các cặp có cơ hội như nhau.\nBước 2: Đếm theo hàng trong bảng\nThẻ đỏ $1$ cho tích chẵn khi thẻ xanh là $2$ hoặc $4$: có $2$ cặp.\nThẻ đỏ $2$ cho tích chẵn với cả bốn thẻ xanh: có $4$ cặp.\nThẻ đỏ $3$ cũng có $2$ cặp, ứng với thẻ xanh $2,4$.\nBước 3: Tính xác suất\nCó $2+4+2=8$ cặp thuận lợi.\n$P=8/12=2/3$.\nBước 4: Kiểm tra bằng các cặp còn lại\nTích lẻ khi cả hai thẻ đều lẻ: có $2\\cdot2=4$ cặp.\n$12-4=8$ xác nhận số cặp chẵn. Phải đếm cặp thẻ, không đếm các giá trị tích khác nhau.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l8-xac-suat-nang-cao-07",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Chiều cao cột có thể gây hiểu sai",
          "prompt": "Biểu đồ bên dưới biểu diễn số sách trên giá A và B. Một bạn nhìn chiều cao PHẦN CỘT ĐƯỢC VẼ và nói: “B có số sách gấp ba A”. Đối chiếu thang trục tung, kết luận nào đúng?",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 347\" role=\"img\" aria-label=\"Biểu đồ cột có trục tung bắt đầu từ 100 cuốn\"><g data-chart=\"cut-bars\" data-min=\"100\" data-zero=\"270\" data-scale=\"24\"><text x=\"280\" y=\"25\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">Số sách trên hai giá A và B</text><text x=\"42\" y=\"46\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\">Cuốn</text><line x1=\"80\" y1=\"270\" x2=\"500\" y2=\"270\" stroke=\"#cbd5e1\"/><text x=\"69\" y=\"275\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">100</text><line x1=\"80\" y1=\"222\" x2=\"500\" y2=\"222\" stroke=\"#cbd5e1\"/><text x=\"69\" y=\"227\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">102</text><line x1=\"80\" y1=\"174\" x2=\"500\" y2=\"174\" stroke=\"#cbd5e1\"/><text x=\"69\" y=\"179\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">104</text><line x1=\"80\" y1=\"126\" x2=\"500\" y2=\"126\" stroke=\"#cbd5e1\"/><text x=\"69\" y=\"131\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">106</text><line x1=\"80\" y1=\"78\" x2=\"500\" y2=\"78\" stroke=\"#cbd5e1\"/><text x=\"69\" y=\"83\" text-anchor=\"end\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">108</text><path d=\"M 80 70 V 275 H 505\" fill=\"none\" stroke=\"#334155\"/><path d=\"M 75 282 l 10 -6 M 75 289 l 10 -6\" stroke=\"#334155\"/><rect data-category=\"A\" data-value=\"102\" x=\"175\" y=\"222\" width=\"70\" height=\"48\" fill=\"#2563eb\"/><text x=\"210\" y=\"214\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\">102</text><text x=\"210\" y=\"300\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\">A</text><rect data-category=\"B\" data-value=\"106\" x=\"375\" y=\"126\" width=\"70\" height=\"144\" fill=\"#2563eb\"/><text x=\"410\" y=\"118\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\">106</text><text x=\"410\" y=\"300\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\">B</text><text x=\"280\" y=\"329\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\">Lưu ý: trục tung bắt đầu ở 100, không phải 0.</text></g></svg>",
          "options": [
            "A. B hơn A 4 cuốn và số sách B gấp 3 lần A.",
            "B. B hơn A 6 cuốn và số sách B bằng $\\frac{53}{50}$ số sách A.",
            "C. B hơn A 2 cuốn và số sách B bằng $\\frac{51}{53}$ số sách A.",
            "D. B hơn A 4 cuốn và số sách B bằng $\\frac{53}{51}$ số sách A."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đọc điểm bắt đầu của trục\nTrục tung bắt đầu ở $100$, không phải $0$.\nVì vậy chiều cao phần cột được vẽ chỉ biểu thị phần vượt quá $100$.\nBước 2: Đọc số sách thật\nGiá A có $102$ cuốn; giá B có $106$ cuốn.\nHai số này lấy theo nhãn thang đo, không phải độ cao $2$ và $6$ trên phần trục bị cắt.\nBước 3: Tính hiệu và tỉ số\nB hơn A $106-102=4$ cuốn.\nSố sách B bằng $106/102=53/51$ số sách A.\nBước 4: Giải thích nhận xét sai\nChiều cao hai phần cột tỉ lệ với $102-100=2$ và $106-100=6$.\n$6/2=3$ chỉ là tỉ số chiều cao phần được vẽ, không phải tỉ số số sách.\nBước 5: Kết luận\nChọn D."
        }
      ],
      "hsg": [
        {
          "id": "l8-xac-suat-hsg-01",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Từ xác suất đến số thẻ có dấu",
          "prompt": "Trong 24 thẻ giống nhau có một số thẻ được đóng dấu sao; mỗi thẻ có hoặc không có dấu sao. Lấy ngẫu nhiên một thẻ, mỗi thẻ có cơ hội như nhau. Xác suất lấy được thẻ có sao là $\\frac58$. Hỏi có bao nhiêu thẻ có sao?",
          "svg": "",
          "correctAnswer": "15",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt số thẻ thuận lợi\nGọi $x$ là số thẻ có sao, với $x$ nguyên và $0\\le x\\le24$.\nCó tất cả $24$ thẻ, mỗi thẻ có cơ hội được chọn như nhau.\nBước 2: Viết xác suất theo tỉ số\nBiến cố cần xét xảy ra khi chọn một trong $x$ thẻ có sao.\nDo đó xác suất là $x/24$.\nBước 3: Dùng xác suất đã cho\nCó $x/24=5/8$.\nNhân hai vế với $24$, được $x=24\\cdot5/8=15$.\nBước 4: Kiểm tra số lượng và xác suất\n$15$ là số nguyên thuộc khoảng từ $0$ đến $24$, nên phù hợp số thẻ.\nThử lại $15/24=5/8$, đúng dữ kiện; số thẻ không sao còn lại là $9$.\nBước 5: Kết luận\nCó $15$ thẻ mang dấu sao."
        },
        {
          "id": "l8-xac-suat-hsg-02",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Ghép quy mô nhóm với cơ cấu riêng",
          "prompt": "Có đúng 200 học sinh, mỗi bạn thuộc nhóm A hoặc B và ban đầu chọn đúng một hoạt động: thực hành hoặc thuyết trình. Bảng và hai biểu đồ dưới đây cho dữ liệu chính xác. Muốn ít nhất 60% TOÀN BỘ 200 bạn chọn thực hành, cần thuyết phục ít nhất bao nhiêu bạn đang chọn thuyết trình đổi sang thực hành? Không thêm học sinh và không ai đổi theo chiều ngược lại.",
          "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 750\" role=\"img\" aria-label=\"Bảng quy mô hai nhóm và hai biểu đồ cơ cấu lựa chọn\"><text x=\"280\" y=\"25\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\">200 học sinh; mỗi bạn thuộc đúng một nhóm</text><text x=\"280\" y=\"50\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\">Bảng quy mô: Nhóm A chiếm 40%   |   Nhóm B chiếm 60%</text><g data-group=\"A\" transform=\"translate(0 70)\"><g font-family=\"Arial, sans-serif\" font-size=\"16\" fill=\"#0f172a\"><text x=\"280\" y=\"26\" text-anchor=\"middle\" font-weight=\"bold\">Lựa chọn ban đầu — nhóm A</text><path data-label=\"Thực hành\" data-count=\"75\" data-total=\"100\" data-start=\"-90\" data-sweep=\"270\" d=\"M 155 180 L 155 75 A 105 105 0 1 1 50 180 Z\" fill=\"#2563eb\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"205.91168824543144\" y=\"230.91168824543144\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#fff\" font-weight=\"bold\" stroke=\"#334155\" stroke-width=\"0.5\" paint-order=\"stroke\">75%</text><rect x=\"300\" y=\"90\" width=\"18\" height=\"18\" fill=\"#2563eb\"/><text x=\"330\" y=\"105\">Thực hành</text><path data-label=\"Thuyết trình\" data-count=\"25\" data-total=\"100\" data-start=\"180\" data-sweep=\"90\" d=\"M 155 180 L 50 180 A 105 105 0 0 1 154.99999999999997 75 Z\" fill=\"#f59e0b\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"104.08831175456856\" y=\"129.08831175456856\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#fff\" font-weight=\"bold\" stroke=\"#334155\" stroke-width=\"0.5\" paint-order=\"stroke\">25%</text><rect x=\"300\" y=\"138\" width=\"18\" height=\"18\" fill=\"#f59e0b\"/><text x=\"330\" y=\"153\">Thuyết trình</text></g></g><g data-group=\"B\" transform=\"translate(0 410)\"><g font-family=\"Arial, sans-serif\" font-size=\"16\" fill=\"#0f172a\"><text x=\"280\" y=\"26\" text-anchor=\"middle\" font-weight=\"bold\">Lựa chọn ban đầu — nhóm B</text><path data-label=\"Thực hành\" data-count=\"40\" data-total=\"100\" data-start=\"-90\" data-sweep=\"144\" d=\"M 155 180 L 155 75 A 105 105 0 0 1 216.71745149070966 264.94678440936946 Z\" fill=\"#2563eb\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"223.47606917325106\" y=\"157.7507764050038\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#fff\" font-weight=\"bold\" stroke=\"#334155\" stroke-width=\"0.5\" paint-order=\"stroke\">40%</text><rect x=\"300\" y=\"90\" width=\"18\" height=\"18\" fill=\"#2563eb\"/><text x=\"330\" y=\"105\">Thực hành</text><path data-label=\"Thuyết trình\" data-count=\"60\" data-total=\"100\" data-start=\"54\" data-sweep=\"216\" d=\"M 155 180 L 216.71745149070966 264.94678440936946 A 105 105 0 1 1 154.99999999999997 75 Z\" fill=\"#f59e0b\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"86.52393082674895\" y=\"202.2492235949962\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#fff\" font-weight=\"bold\" stroke=\"#334155\" stroke-width=\"0.5\" paint-order=\"stroke\">60%</text><rect x=\"300\" y=\"138\" width=\"18\" height=\"18\" fill=\"#f59e0b\"/><text x=\"330\" y=\"153\">Thuyết trình</text></g></g></svg>",
          "correctAnswer": "12",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đọc đúng quy mô từng nhóm\nNhóm A chiếm $40\\%$ toàn khối, nên có $200\\cdot40\\%=80$ bạn.\nNhóm B có $200\\cdot60\\%=120$ bạn. Tổng vẫn là $200$.\nBước 2: Tính số bạn thực hành trong mỗi nhóm\nTrong A, tỉ lệ thực hành là $75\\%$, nên có $80\\cdot75\\%=60$ bạn.\nTrong B, tỉ lệ là $40\\%$, nên có $120\\cdot40\\%=48$ bạn.\nBan đầu tổng số thực hành là $60+48=108$.\nBước 3: Xác định số cần đạt của toàn khối\nÍt nhất $60\\%$ của $200$ bạn nghĩa là ít nhất $200\\cdot60\\%=120$ bạn thực hành.\nCòn thiếu $120-108=12$ bạn.\nBước 4: Kiểm tra tính tối thiểu và khả thi\nMỗi bạn chuyển làm số thực hành tăng đúng $1$, nên chuyển ít hơn $12$ sẽ chưa đạt $120$.\nĐang có $200-108=92$ bạn thuyết trình, đủ để chuyển $12$ bạn. Khi chuyển đúng $12$, tỉ lệ đạt $120/200=60\\%$.\nBước 5: Kết luận\nCần ít nhất $12$ bạn đổi sang thực hành.\nKhông lấy trung bình cộng $75\\%$ và $40\\%$ vì hai nhóm có số học sinh khác nhau."
        },
        {
          "id": "l8-xac-suat-hsg-03",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai phương án thêm thẻ",
          "prompt": "Một hộp ban đầu có 7 thẻ đỏ và một số thẻ xanh dương. Tất cả thẻ giống nhau về kích thước, khối lượng; mỗi thẻ có cơ hội được lấy như nhau. Nếu thêm n thẻ đỏ, xác suất lấy thẻ xanh là $\\frac14$. Nếu từ HỘP BAN ĐẦU chỉ thêm n − 2 thẻ đỏ thì xác suất đó là $\\frac27$. Biết n là số nguyên, $n\\geq2$. Tìm n.",
          "svg": "",
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt số thẻ xanh và phân biệt hai phương án\nGọi số thẻ xanh ban đầu là $b$, với $b$ nguyên dương.\nPhương án một có tổng $7+b+n$ thẻ; phương án hai bắt đầu lại từ hộp gốc và có $7+b+n-2$ thẻ, ít hơn phương án một đúng $2$.\nBước 2: Dùng xác suất thứ nhất\nSố thẻ xanh không đổi, nên $b/(7+b+n)=1/4$.\nSuy ra $7+b+n=4b$, tức tổng thẻ phương án một là $4b$ và phương án hai là $4b-2$.\nBước 3: Tìm b từ xác suất thứ hai\nCó $b/(4b-2)=2/7$; mẫu dương vì $b\\ge1$.\nNhân chéo: $7b=8b-4$, nên $b=4$.\nBước 4: Tìm n và thử cả hai phương án\nThay vào $7+b+n=4b$: $7+4+n=16$, nên $n=5$.\nThêm $5$ thẻ đỏ cho xác suất $4/16=1/4$; thêm $n-2=3$ thẻ đỏ từ hộp ban đầu cho $4/14=2/7$.\n$n=5$ nguyên và không nhỏ hơn $2$, thỏa mọi điều kiện.\nBước 5: Kết luận\nGiá trị cần tìm là $n=5$."
        },
        {
          "id": "l8-xac-suat-hsg-04",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Kết luận nào vẫn đúng khi thiếu phiếu?",
          "prompt": "Một khối có 120 học sinh. Khảo sát việc mở thư viện buổi trưa: 90 bạn trả lời, gồm 70 bạn đồng ý và 20 bạn không đồng ý; 30 bạn chưa trả lời. Mỗi bạn có đúng một ý kiến và các câu trả lời đã ghi là chính xác. Hãy lập luận rằng chắc chắn hơn một nửa toàn khối đồng ý. Có thể đồng thời khẳng định tỉ lệ đồng ý của TOÀN KHỐI bằng $70/90$ hay không? Giải thích rõ phần thông tin còn thiếu.",
          "svg": "",
          "solution": "Bước 1: Xác định số đồng ý đã chắc chắn biết\nTrong $90$ bạn trả lời có $70$ bạn đồng ý.\nDù $30$ bạn còn lại nghĩ gì, tổng số đồng ý của toàn khối không thể nhỏ hơn $70$.\nBước 2: So sánh với một nửa toàn khối\nMột nửa của $120$ là $60$.\nVì $70>60$, ngay số đã biết cũng vượt một nửa, nên chắc chắn hơn một nửa toàn khối đồng ý.\nBước 3: Biểu diễn phần thông tin còn thiếu\nGọi $x$ là số bạn đồng ý trong $30$ bạn chưa trả lời, với $x$ nguyên và $0\\le x\\le30$.\nTỉ lệ đồng ý toàn khối phải là $(70+x)/120$.\nBước 4: Phân biệt tỉ lệ mẫu trả lời và tỉ lệ toàn khối\n$70/90$ chỉ dùng mẫu số là số bạn đã trả lời.\nNếu $x=0$, tỉ lệ toàn khối là $70/120$; nếu $x=30$, tỉ lệ là $100/120$. Cả hai khả năng đều phù hợp dữ kiện nhưng cho kết quả khác nhau.\nVì chưa biết $x$, không được coi nhóm chưa trả lời có cùng cơ cấu ý kiến với nhóm đã trả lời.\nBước 5: Kết luận\nCó thể khẳng định chắc chắn hơn một nửa toàn khối đồng ý, nhưng không thể gán tỉ lệ $70/90$ cho toàn khối. Cần biết ý kiến của các bạn chưa trả lời để tính tỉ lệ chính xác."
        },
        {
          "id": "l8-xac-suat-hsg-05",
          "lop": 8,
          "chuDe": "xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai biến cố bổ sung cho nhau",
          "prompt": "Một hộp có N thẻ giống nhau, $N>0$; mỗi thẻ có cơ hội được lấy như nhau. Trên mỗi thẻ hoặc có dấu sao, hoặc không có dấu sao. Gọi A là biến cố “lấy được thẻ có sao”, B là biến cố “lấy được thẻ không có sao”. Dùng cách mô tả xác suất bằng tỉ số để chứng minh $P(A)+P(B)=1$, kể cả khi không có thẻ nào có sao hoặc mọi thẻ đều có sao.",
          "svg": "",
          "solution": "Bước 1: Đặt số thẻ của mỗi loại\nGọi $r$ là số thẻ có sao, với $r$ nguyên và $0\\le r\\le N$.\nMỗi thẻ thuộc đúng một trong hai loại, nên số thẻ không sao là $N-r$.\nBước 2: Viết hai xác suất\nCác thẻ có cơ hội được lấy như nhau nên $P(A)=r/N$ và $P(B)=(N-r)/N$.\nCác phép chia đều hợp lệ vì $N>0$.\nBước 3: Cộng theo cùng mẫu\nCó $P(A)+P(B)=\\frac{r+(N-r)}{N}=N/N=1$.\nHai loại không trùng nhau và chứa hết thẻ, nên tổng số trường hợp thuận lợi của hai biến cố đúng bằng $N$.\nBước 4: Kiểm tra hai trường hợp biên\nNếu $r=0$, không thẻ nào có sao: $P(A)=0$, $P(B)=1$.\nNếu $r=N$, mọi thẻ có sao: $P(A)=1$, $P(B)=0$.\nCả hai trường hợp đều cho tổng bằng $1$; không cần giả sử mỗi loại phải có ít nhất một thẻ.\nBước 5: Kết luận\n$P(A)+P(B)=1$ với mọi số lượng thẻ phù hợp đề, kể cả khi một loại không xuất hiện."
        }
      ]
    }
  };
  // Bổ sung lớp 8 lô 1–2: 50 câu theo kế hoạch đã duyệt.
  bank["da-thuc-nhieu-bien"]["kha"].push({
  "id": "l8-da-thuc-nhieu-bien-kha-04",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Đổi thứ tự biến trong đơn thức đồng dạng",
  "prompt": "Đơn thức nào đồng dạng với $-4x^2yz$?",
  "svg": "",
  "options": [
    "A. $2xy^2z$",
    "B. $2yzx^2$",
    "C. $2x^2yz^2$",
    "D. $2x^2+y+z$"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Nhắc điều kiện đồng dạng\nHai đơn thức có hệ số khác $0$ được gọi là đồng dạng khi có cùng phần biến, tức cùng số mũ của từng biến. Hệ số có thể khác nhau.\nBước 2: Đối chiếu các biểu thức\nỞ B, đổi thứ tự các thừa số cho $2yzx^2=2x^2yz$, đúng phần biến cần tìm.\nA có số mũ của $x,y$ khác đề; C có số mũ của $z$ khác đề.\nD là một tổng, không phải đơn thức đồng dạng đã nêu.\nBước 3: Kết luận\nChọn B."
});
  bank["da-thuc-nhieu-bien"]["kha"].push({
  "id": "l8-da-thuc-nhieu-bien-kha-05",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Khôi phục đa thức còn thiếu trong tổng",
  "prompt": "Đa thức $P$ thỏa $P+(2xy-y^2)=x^2+xy+3y^2$. Tìm $P$.",
  "svg": "",
  "options": [
    "A. $x^2+3xy+2y^2$",
    "B. $x^2-xy+2y^2$",
    "C. $x^2-xy+4y^2$",
    "D. $x^2+3xy+4y^2$"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Tách đa thức cần tìm\n$P=x^2+xy+3y^2-(2xy-y^2)$.\nTa trừ toàn bộ đa thức đã được cộng với $P$.\nBước 2: Đổi dấu và thu gọn\n$P=x^2+xy+3y^2-2xy+y^2=x^2-xy+4y^2$.\nDấu trừ trước ngoặc làm $-y^2$ đổi thành $+y^2$.\nBước 3: Kiểm bằng phép cộng ngược\n$(x^2-xy+4y^2)+(2xy-y^2)=x^2+xy+3y^2$.\nChọn C."
});
  bank["da-thuc-nhieu-bien"]["nangCao"].push({
  "id": "l8-da-thuc-nhieu-bien-nang-cao-08",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Sửa hệ số hạng tử giữa khi nhân",
  "prompt": "Một bạn viết $(x-2y)(2x+y)=2x^2-xy-2y^2$. Muốn đẳng thức đúng với mọi $x,y$, phải thay hạng tử $-xy$ bằng hạng tử nào?",
  "svg": "",
  "options": [
    "A. $-3xy$",
    "B. $3xy$",
    "C. $-4xy$",
    "D. $xy$"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Nhân từng hạng tử\n$(x-2y)(2x+y)=2x^2+xy-4xy-2y^2$.\nHai tích tạo hạng tử chứa $xy$ là $x\\cdot y$ và $(-2y)\\cdot2x$.\nBước 2: Gộp đúng hệ số\n$xy-4xy=-3xy$.\nHai hạng tử $2x^2$ và $-2y^2$ của bạn đã đúng nên giữ lại.\nBước 3: Kết luận\nCần thay bằng $-3xy$. Chọn A."
});
  bank["da-thuc-nhieu-bien"]["nangCao"].push({
  "id": "l8-da-thuc-nhieu-bien-nang-cao-09",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Cộng hai biểu thức đổi chỗ biến",
  "prompt": "Cho $P(x,y)=2x^2y+3xy^2$. Biểu thức $P(x,y)+P(y,x)$ bằng biểu thức nào?",
  "svg": "",
  "options": [
    "A. $4x^2y+6xy^2$",
    "B. $5x^2y$",
    "C. $x^2y-xy^2$",
    "D. $5x^2y+5xy^2$"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Đổi đồng thời hai biến\n$P(y,x)=2y^2x+3yx^2=2xy^2+3x^2y$.\nPhải đổi cả hai vị trí, không chỉ thay một biến.\nBước 2: Cộng các hạng tử đồng dạng\n$P(x,y)+P(y,x)=(2+3)x^2y+(3+2)xy^2=5x^2y+5xy^2$.\nBước 3: Kết luận\nChọn D."
});
  bank["da-thuc-nhieu-bien"]["nangCao"].push({
  "id": "l8-da-thuc-nhieu-bien-nang-cao-10",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Hai tích có cấu trúc ghép chéo",
  "prompt": "Biết $x=2$ và $xy=3$. Tính $E=(x+y)(xy+x)+(x-y)(xy-x)$ mà không cần tìm riêng $y$.",
  "svg": "",
  "options": [
    "A. $12$",
    "B. $18$",
    "C. $24$",
    "D. $6$"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Nhóm theo hai phần của tích\n$E=xy[(x+y)+(x-y)]+x[(x+y)-(x-y)]$.\nViệc nhóm này giữ nguyên đủ bốn tích, đồng thời làm các hạng tử đối nhau triệt tiêu.\nBước 2: Thu gọn trước khi thay dữ kiện\n$E=2x^2y+2xy=2xy(x+1)$.\nBước 3: Thay hai đại lượng đã biết\n$E=2\\cdot3\\cdot(2+1)=18$.\nDữ kiện có thể xảy ra: $x=2$ cho $y=3/2$.\nBước 4: Kết luận\nChọn B."
});
  bank["da-thuc-nhieu-bien"]["hsg"].push({
  "id": "l8-da-thuc-nhieu-bien-hsg-06",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Đa thức triệt tiêu trên đường x=2y",
  "prompt": "Tìm $a$ để đa thức $3x^2y+axy^2-2y^3$ bằng $0$ với mọi cặp số thực thỏa $x=2y$.",
  "svg": "",
  "correctAnswer": "-5",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Thay quan hệ giữa hai biến\nVới $x=2y$, đa thức trở thành $3(2y)^2y+a(2y)y^2-2y^3=(10+2a)y^3$.\nBước 2: Dùng yêu cầu đúng với mọi giá trị\nLấy $y=1$ thì phải có $10+2a=0$, nên $a=-5$.\nKhông thể chỉ thử $y=0$: giá trị đó làm đa thức bằng $0$ với mọi $a$.\nBước 3: Kiểm chiều ngược lại\nVới $a=-5$, hệ số $10+2a$ bằng $0$ nên đa thức bằng $0$ với mọi $y$.\nBước 4: Kết luận\n$a=-5$."
});
  bank["da-thuc-nhieu-bien"]["hsg"].push({
  "id": "l8-da-thuc-nhieu-bien-hsg-07",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Hiệu hai biểu thức đối xứng từ dữ kiện tích và hiệu",
  "prompt": "Cho $P(x,y)=x^2y-xy^2+2x+3y$. Biết $x-y=2$ và $xy=6$. Tính $P(x,y)-P(y,x)$.",
  "svg": "",
  "correctAnswer": "22",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Viết biểu thức đổi biến\n$P(y,x)=xy^2-x^2y+2y+3x$.\nBước 2: Lấy hiệu và đặt nhân tử chung\n$P(x,y)-P(y,x)=2x^2y-2xy^2-x+y=(x-y)(2xy-1)$.\nDấu trừ trước $P(y,x)$ tác động lên cả bốn hạng tử.\nBước 3: Dùng dữ kiện\nHiệu cần tìm bằng $2(2\\cdot6-1)=22$.\nCác dữ kiện tương thích: $y=\\sqrt7-1$, $x=\\sqrt7+1$ cho $x-y=2$ và $xy=6$.\nBước 4: Kết luận\n$P(x,y)-P(y,x)=22$."
});
  bank["da-thuc-nhieu-bien"]["hsg"].push({
  "id": "l8-da-thuc-nhieu-bien-hsg-08",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Khôi phục ba hệ số qua ba phép kiểm",
  "prompt": "Cho $P(x,y)=ax^2+bxy+cy^2$, trong đó $a,b,c$ là các hằng số. Biết $P(1,1)=4$, $P(1,-1)=-2$, $P(2,1)=13$. Tính $3a+c$.",
  "svg": "",
  "correctAnswer": "5",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Chuyển ba phép kiểm thành đẳng thức\n$a+b+c=4$; $a-b+c=-2$; $4a+2b+c=13$.\nỞ phép kiểm thứ hai, $xy=-1$ nhưng $y^2=1$.\nBước 2: Khử hệ số giữa\nLấy đẳng thức thứ nhất trừ đẳng thức thứ hai: $2b=6$, nên $b=3$.\nThay lại được $a+c=1$ và $4a+c=7$.\nBước 3: Xác định hai hệ số còn lại\nTrừ hai đẳng thức vừa tìm: $3a=6$, nên $a=2$, $c=-1$.\nĐây là cộng trừ các đẳng thức số, không cần dùng công thức giải hệ.\nBước 4: Kiểm lại ba phép thử\nBộ $(a,b,c)=(2,3,-1)$ cho lần lượt $4,-2,13$, đúng ba phép kiểm.\nBước 5: Kết luận\n$3a+c=6-1=5$."
});
  bank["da-thuc-nhieu-bien"]["hsg"].push({
  "id": "l8-da-thuc-nhieu-bien-hsg-09",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Khi nào đổi cách ghép hai tích không đổi kết quả",
  "prompt": "Với các số thực $a,b,x,y$, chứng minh $(x+a)(y+b)-(x+b)(y+a)=(b-a)(x-y)$. Từ đó chỉ rõ khi nào hai tích ở vế trái bằng nhau.",
  "svg": "",
  "solution": "Bước 1: Khai triển hai tích riêng\n$(x+a)(y+b)=xy+bx+ay+ab$.\n$(x+b)(y+a)=xy+ax+by+ab$.\nBước 2: Lấy hiệu và thu gọn\nTrừ biểu thức thứ hai khỏi biểu thức thứ nhất được $(b-a)x+(a-b)y$.\nVì $a-b=-(b-a)$, hiệu bằng $(b-a)(x-y)$.\nBước 3: Xét điều kiện hai tích bằng nhau\nHai tích bằng nhau khi và chỉ khi hiệu bằng $0$.\nTích $(b-a)(x-y)$ bằng $0$ khi và chỉ khi $b-a=0$ hoặc $x-y=0$.\nBước 4: Kết luận đủ hai chiều\nĐiều kiện là $a=b$ hoặc $x=y$, có thể đồng thời cả hai.\nMỗi điều kiện này làm hiệu bằng $0$ nên đều đủ. Không chia cho $b-a$ hoặc $x-y$, vì sẽ bỏ mất trường hợp chúng bằng $0$."
});
  bank["da-thuc-nhieu-bien"]["hsg"].push({
  "id": "l8-da-thuc-nhieu-bien-hsg-10",
  "lop": 8,
  "chuDe": "da-thuc-nhieu-bien",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Ba đường kiểm quyết định một đa thức thuần nhất bậc hai",
  "prompt": "Hai đa thức $P(x,y)=ax^2+bxy+cy^2$ và $Q(x,y)=dx^2+exy+fy^2$ có các hệ số thực. Với mọi số thực $t$, biết $P(t,0)=Q(t,0)$, $P(0,t)=Q(0,t)$ và $P(t,t)=Q(t,t)$. Chứng minh $P(x,y)=Q(x,y)$ với mọi $x,y$. Nếu bỏ điều kiện thứ ba thì kết luận còn được bảo đảm không?",
  "svg": "",
  "solution": "Bước 1: Xét đa thức hiệu\nĐặt $R=P-Q=(a-d)x^2+(b-e)xy+(c-f)y^2$.\nTa cần chứng minh cả ba hệ số của $R$ bằng $0$.\nBước 2: Dùng hai đường kiểm đầu tiên\nTừ $R(t,0)=0$ với mọi $t$, lấy $t=1$ được $a-d=0$.\nTừ $R(0,t)=0$ với mọi $t$, lấy $t=1$ được $c-f=0$.\nDo đó $R=(b-e)xy$; hai điều kiện này chưa xác định hệ số của $xy$.\nBước 3: Dùng điều kiện còn lại\n$R(t,t)=(b-e)t^2=0$ với mọi $t$. Lấy $t=1$ được $b=e$.\nVậy $R=0$ với mọi $x,y$, tức $P=Q$.\nBước 4: Kiểm vai trò của điều kiện thứ ba\nNếu chỉ giữ hai điều kiện đầu, có thể chọn $P=xy$, $Q=0$.\nCả hai đều bằng $0$ khi $x=0$ hoặc $y=0$, nhưng tại $(1,1)$, giá trị của chúng là $1$ và $0$.\nVì vậy bỏ điều kiện thứ ba thì kết luận không còn được bảo đảm."
});
  bank["hinh-phang"]["kha"].push({
  "id": "l8-hinh-phang-kha-04",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Dấu hiệu hình thoi từ hình bình hành",
  "prompt": "Một hình bình hành có thêm điều kiện nào dưới đây thì chắc chắn là hình thoi?",
  "svg": "",
  "options": [
    "A. Hai đường chéo bằng nhau.",
    "B. Có một góc vuông.",
    "C. Hai cạnh kề bằng nhau.",
    "D. Hai đường chéo cắt nhau tại trung điểm mỗi đường."
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Dùng tính chất hình bình hành\nCác cạnh đối của hình bình hành bằng nhau.\nBước 2: Thêm điều kiện hai cạnh kề\nNếu hai cạnh kề bằng nhau, kết hợp với hai cặp cạnh đối bằng nhau thì cả bốn cạnh bằng nhau.\nĐó là hình thoi, nên C đủ.\nBước 3: Kiểm các điều kiện còn lại\nHình chữ nhật không phải hình vuông vẫn có hai đường chéo bằng nhau và có góc vuông, nên A và B chưa đủ.\nD có ở mọi hình bình hành, kể cả hình không có bốn cạnh bằng nhau.\nChọn C."
});
  bank["hinh-phang"]["kha"].push({
  "id": "l8-hinh-phang-kha-05",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Các nửa đường chéo hình chữ nhật",
  "prompt": "Hai đường chéo của hình chữ nhật $ABCD$ cắt nhau tại $O$. Biết $AO=6$ cm, $AB=8$ cm. Tính $OB$.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[8,0],"C":[8,8.94427190999916],"D":[0,8.94427190999916],"O":[4,4.47213595499958]},"edges":[["A","B"],["B","C"],["C","D"],["D","A"],["A","C"],["B","D"]],"unit":26.273798735622528,"origin":[174.9048050575099,294.5],"offsets":{"A":[-12,17],"B":[12,17],"C":[10,-16],"D":[-12,-16],"O":[-18,0]},"right":[["A","B","C"]],"edgeLabels":[{"a":"A","b":"O","value":6,"text":"6 cm","offset":-18},{"a":"A","b":"B","value":8,"text":"8 cm","offset":22}],"title":"Các nửa đường chéo hình chữ nhật"}),
  "options": [
    "A. $12$ cm",
    "B. $6$ cm",
    "C. $4$ cm",
    "D. $8$ cm"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Dùng tính chất hai đường chéo\nHình chữ nhật có $AC=BD$, và $O$ là trung điểm của cả hai đường.\nBước 2: So sánh các nửa đường chéo\n$AO=AC/2$ và $OB=BD/2$ nên $AO=OB$.\nBước 3: Kết luận\n$OB=6$ cm. Số đo cạnh $AB$ không cần dùng cho yêu cầu này. Chọn B."
});
  bank["hinh-phang"]["nangCao"].push({
  "id": "l8-hinh-phang-nang-cao-08",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Diện tích hình chữ nhật từ chu vi và đường chéo",
  "prompt": "Một hình chữ nhật có chu vi $34$ cm và đường chéo dài $13$ cm. Tính diện tích của hình chữ nhật.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[12,0],"C":[12,5],"D":[0,5]},"edges":[["A","B"],["B","C"],["C","D"],["D","A"],["A","C"]],"unit":35.833333333333336,"origin":[65,266.58333333333337],"offsets":{"A":[-12,17],"B":[12,17],"C":[10,-16],"D":[-12,-16]},"right":[["A","B","C"]],"edgeLabels":[{"a":"A","b":"C","value":13,"text":"13 cm","offset":-20}],"notes":[{"x":280,"y":335,"text":"Chu vi: 34 cm"}],"title":"Diện tích hình chữ nhật từ chu vi và đường chéo"}),
  "options": [
    "A. $60$ cm²",
    "B. $30$ cm²",
    "C. $120$ cm²",
    "D. $84$ cm²"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Gọi hai kích thước\nGọi chiều dài, chiều rộng là $a,b>0$. Từ chu vi, $a+b=17$.\nBước 2: Dùng Pythagore cho đường chéo\n$a^2+b^2=13^2=169$.\nBước 3: Tính tích mà không giải từng kích thước\n$(a+b)^2=a^2+b^2+2ab$ nên $289=169+2ab$.\nSuy ra $ab=60$.\nBước 4: Kết luận\nDiện tích là $60$ cm². Kích thước $12$ cm và $5$ cm kiểm được cả chu vi lẫn đường chéo. Chọn A."
});
  bank["hinh-phang"]["nangCao"].push({
  "id": "l8-hinh-phang-nang-cao-09",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Đường chéo hình thoi tạo tam giác đều",
  "prompt": "Hình thoi $ABCD$ có chu vi $32$ cm và $\\widehat{DAB}=60^\\circ$. Tính đường chéo $BD$.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[8,0],"C":[12,6.928203230275509],"D":[4,6.928203230275509]},"edges":[["A","B"],["B","C"],["C","D"],["D","A"],["B","D"]],"unit":33.919328314890514,"origin":[76.48403011065693,294.5],"offsets":{"A":[-12,17],"B":[12,17],"C":[10,-16],"D":[-12,-16]},"equal":[[["A","B"],["B","C"],["C","D"],["D","A"]]],"angles":[{"at":"A","from":"B","to":"D","value":60}],"notes":[{"x":280,"y":335,"text":"Chu vi: 32 cm"}],"title":"Đường chéo hình thoi tạo tam giác đều"}),
  "options": [
    "A. $16$ cm",
    "B. $4$ cm",
    "C. $8\\sqrt3$ cm",
    "D. $8$ cm"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Tìm độ dài cạnh\nBốn cạnh hình thoi bằng nhau nên mỗi cạnh dài $32:4=8$ cm.\nBước 2: Xét tam giác ABD\n$AB=AD$, nên tam giác $ABD$ cân tại $A$.\nGóc ở đỉnh bằng $60^\\circ$, hai góc đáy đều bằng $(180^\\circ-60^\\circ)/2=60^\\circ$.\nVậy tam giác $ABD$ đều.\nBước 3: Kết luận\n$BD=AB=8$ cm. Chọn D."
});
  bank["hinh-phang"]["nangCao"].push({
  "id": "l8-hinh-phang-nang-cao-10",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Diện tích tứ giác trung điểm khi hai đường chéo vuông góc",
  "prompt": "Tứ giác lồi $ABCD$ có $AC\\perp BD$ và $AC=2BD$. Gọi $M,N,P,Q$ lần lượt là trung điểm $AB,BC,CD,DA$. Chu vi $MNPQ$ bằng $36$ cm. Tính diện tích $MNPQ$.",
  "svg": svgGrade8Geometry({"points":{"A":[-12,0],"B":[0,8],"C":[12,0],"D":[0,-4],"M":[-6,4],"N":[6,4],"P":[6,-2],"Q":[-6,-2],"O":[0,0]},"edges":[["A","B"],["B","C"],["C","D"],["D","A"],["A","C"],["B","D"],["M","N"],["N","P"],["P","Q"],["Q","M"]],"unit":17.916666666666668,"origin":[280,212.83333333333334],"offsets":{"A":[-15,0],"B":[0,-19],"C":[15,0],"D":[0,19],"M":[-16,-7],"N":[16,-7],"P":[16,10],"Q":[-16,10],"O":[15,14]},"right":[["A","O","B"]],"notes":[{"x":280,"y":335,"text":"AC = 2BD; chu vi MNPQ = 36 cm"}],"title":"Diện tích tứ giác trung điểm khi hai đường chéo vuông góc"}),
  "options": [
    "A. $144$ cm²",
    "B. $36$ cm²",
    "C. $72$ cm²",
    "D. $288$ cm²"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Nhận dạng tứ giác trung điểm\nTrong các tam giác $ABC,CDA$, đường trung bình cho $MN\\parallel PQ\\parallel AC$ và $MN=PQ=AC/2$.\nTương tự $NP\\parallel MQ\\parallel BD$ và $NP=MQ=BD/2$.\nVì $AC\\perp BD$, $MNPQ$ là hình chữ nhật.\nBước 2: Xác định hai kích thước\nĐiều kiện $AC=2BD$ cho $MN=2NP$.\nChu vi $36$ cho $MN+NP=18$. Do đó $NP=6$, $MN=12$ (cm).\nBước 3: Kết luận\nDiện tích bằng $12\\cdot6=72$ cm². Chọn C."
});
  bank["hinh-phang"]["hsg"].push({
  "id": "l8-hinh-phang-hsg-06",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Độ hạ đầu thang khi dịch chân",
  "prompt": "Một chiếc thang dài $10$ m tựa vào tường thẳng đứng trên nền đất nằm ngang. Ban đầu chân thang cách tường $6$ m. Dịch chân thang ra xa tường thêm $2$ m, đầu trên vẫn tựa vào tường. Đầu trên hạ xuống bao nhiêu mét? Bỏ qua độ dày thang.",
  "svg": svgGrade8Geometry({"points":{"O":[0,0],"A":[0,8],"B":[6,0],"C":[8,0],"D":[0,6]},"edges":[["O","A"],["O","C"],["A","B"],["D","C"]],"unit":29.375,"origin":[162.5,294.5],"offsets":{"O":[-15,13],"A":[-15,-10],"B":[0,18],"C":[16,12],"D":[-16,0]},"equal":[[["A","B"],["D","C"]]],"right":[["A","O","C"]],"edgeLabels":[{"a":"A","b":"B","value":10,"text":"10 m","offset":-16},{"a":"O","b":"B","value":6,"text":"6 m","offset":23},{"a":"B","b":"C","value":2,"text":"2 m","offset":25}],"title":"Độ hạ đầu thang khi dịch chân"}),
  "correctAnswer": "2",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Tìm độ cao ban đầu\nThang, tường và mặt đất tạo tam giác vuông. Nếu độ cao đầu thang là $h_1>0$, $h_1^2=10^2-6^2=64$.\nVậy $h_1=8$ m.\nBước 2: Tìm độ cao sau khi dịch\nKhoảng cách chân thang đến tường mới là $6+2=8$ m.\n$h_2^2=10^2-8^2=36$, nên $h_2=6$ m.\nCả hai khoảng cách chân đều nhỏ hơn chiều dài thang nên hai vị trí đều tồn tại.\nBước 3: Kết luận\nĐầu trên hạ xuống $h_1-h_2=8-6=2$ m."
});
  bank["hinh-phang"]["hsg"].push({
  "id": "l8-hinh-phang-hsg-07",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Điểm trên cạnh cách đều hai đỉnh",
  "prompt": "Hình chữ nhật $ABCD$ có $AB=16$ cm, $AD=12$ cm. Điểm $E$ nằm giữa $A,B$ và thỏa $DE=EB$. Tính $AE$ theo cm.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[16,0],"C":[16,12],"D":[0,12],"E":[3.5,0]},"edges":[["A","B"],["B","C"],["C","D"],["D","A"],["D","E"]],"unit":19.583333333333332,"origin":[123.33333333333334,294.5],"offsets":{"A":[-12,17],"B":[12,17],"C":[10,-16],"D":[-12,-16],"E":[0,18]},"equal":[[["D","E"],["E","B"]]],"right":[["D","A","B"]],"edgeLabels":[{"a":"A","b":"B","value":16,"text":"16 cm","offset":40},{"a":"A","b":"D","value":12,"text":"12 cm","offset":-28}],"title":"Điểm trên cạnh cách đều hai đỉnh"}),
  "correctAnswer": "3.5",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Biểu diễn các đoạn bằng một ẩn\nĐặt $AE=x$ cm, với $0<x<16$. Khi đó $EB=16-x$ và $DE=16-x$.\nBước 2: Dùng tam giác vuông DAE\nVì $AD\\perp AB$, Pythagore cho $DE^2=AD^2+AE^2$.\nDo đó $(16-x)^2=144+x^2$.\nBước 3: Khử các số hạng bình phương\n$256-32x+x^2=144+x^2$, nên $32x=112$ và $x=3{,}5$.\nBước 4: Thử lại điều kiện hình\n$0<3{,}5<16$ nên $E$ ở trong cạnh.\n$EB=12{,}5$ và $DE^2=144+3{,}5^2=156{,}25=12{,}5^2$; các độ dài dương nên $DE=EB$.\nBước 5: Kết luận\n$AE=3{,}5$ cm."
});
  bank["hinh-phang"]["hsg"].push({
  "id": "l8-hinh-phang-hsg-08",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Hai phân giác chia một cạnh hình bình hành",
  "prompt": "Trong hình bình hành $ABCD$, phân giác trong của góc $A$ và góc $D$ cắt $BC$ lần lượt tại $E,F$. Các điểm có thứ tự $B,E,F,C$. Biết $BC=12$ cm, $EF=4$ cm. Tính chu vi hình bình hành.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[4,0],"D":[6,10.392304845413264],"C":[10,10.392304845413264],"E":[6,3.4641016151377544],"F":[8,6.928203230275509]},"edges":[["A","B"],["B","C"],["C","D"],["D","A"],["A","E"],["D","F"]],"unit":22.61288554326034,"origin":[166.9355722836983,294.5],"offsets":{"A":[-12,17],"B":[12,17],"C":[10,-16],"D":[-12,-16],"E":[16,0],"F":[16,0]},"angles":[{"at":"A","from":"B","to":"E","mark":"a","radius":29},{"at":"A","from":"E","to":"D","mark":"a","radius":29},{"at":"D","from":"A","to":"F","mark":"d","radius":26},{"at":"D","from":"F","to":"C","mark":"d","radius":26}],"edgeLabels":[{"a":"B","b":"C","value":12,"text":"12 cm","offset":52},{"a":"E","b":"F","value":4,"text":"4 cm","offset":22}],"title":"Hai phân giác chia một cạnh hình bình hành"}),
  "correctAnswer": "32",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Dùng phân giác tại A\nVì $BE\\parallel AD$, $\\widehat{AEB}=\\widehat{EAD}$.\nMà $AE$ là phân giác nên $\\widehat{EAD}=\\widehat{BAE}$.\nTam giác $ABE$ có hai góc bằng nhau, do đó $BE=AB$.\nBước 2: Dùng phân giác tại D\nVì $CF\\parallel DA$, $\\widehat{DFC}=\\widehat{ADF}$.\nPhân giác $DF$ cho $\\widehat{ADF}=\\widehat{FDC}$, nên tam giác $DCF$ cân và $CF=CD=AB$.\nBước 3: Dùng đúng thứ tự điểm\n$BC=BE+EF+FC=2AB+4$.\nTừ $BC=12$ suy ra $AB=4$ cm; cạnh $AD=BC=12$ cm.\nThứ tự $B,E,F,C$ rất cần thiết: nó quyết định phép cộng ba đoạn ở bước 3.\nBước 4: Kết luận\nChu vi bằng $2(4+12)=32$ cm."
});
  bank["hinh-phang"]["hsg"].push({
  "id": "l8-hinh-phang-hsg-09",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Hình thoi từ trung điểm các cạnh hình chữ nhật",
  "prompt": "Cho hình chữ nhật $ABCD$ có các cạnh dương. Gọi $M,N,P,Q$ lần lượt là trung điểm của $AB,BC,CD,DA$. Chứng minh $MNPQ$ là hình thoi. Chứng minh thêm: hình thoi này là hình vuông khi và chỉ khi $AB=BC$.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[12,0],"C":[12,8],"D":[0,8],"M":[6,0],"N":[12,4],"P":[6,8],"Q":[0,4]},"edges":[["A","B"],["B","C"],["C","D"],["D","A"],["M","N"],["N","P"],["P","Q"],["Q","M"],["M","P"],["N","Q"]],"unit":29.375,"origin":[103.75,294.5],"offsets":{"A":[-12,17],"B":[12,17],"C":[10,-16],"D":[-12,-16],"M":[0,18],"N":[18,0],"P":[0,-18],"Q":[-18,0]},"right":[["A","B","C"]],"notes":[{"x":280,"y":335,"text":"M, N, P, Q là các trung điểm"}],"title":"Hình thoi từ trung điểm các cạnh hình chữ nhật"}),
  "solution": "Bước 1: Áp dụng đường trung bình\nTrong tam giác $ABC$, $MN=AC/2$ và $MN\\parallel AC$.\nTương tự $PQ=AC/2$, $NP=MQ=BD/2$.\nBước 2: Nhận dạng hình thoi\nHình chữ nhật có $AC=BD$, nên bốn cạnh $MN,NP,PQ,QM$ bằng nhau.\nCác trung điểm tạo tứ giác lồi không suy biến, vì hình chữ nhật có hai kích thước dương.\nVậy $MNPQ$ là hình thoi.\nBước 3: Xét hai đường chéo của hình thoi\nĐoạn $MP$ nối trung điểm hai cạnh đối $AB,CD$, nên $MP=BC$.\nTương tự $NQ=AB$. Có thể thấy các đẳng thức này từ hai hình chữ nhật nửa của $ABCD$.\nBước 4: Chứng minh đủ hai chiều\nMột hình thoi có hai đường chéo bằng nhau thì đồng thời là hình chữ nhật, do đó là hình vuông.\nVì thế nếu $AB=BC$ thì $MP=NQ$, và $MNPQ$ là hình vuông.\nNgược lại, nếu $MNPQ$ là hình vuông thì $MP=NQ$, nên $BC=AB$.\nĐiều kiện cần và đủ là $AB=BC$."
});
  bank["hinh-phang"]["hsg"].push({
  "id": "l8-hinh-phang-hsg-10",
  "lop": 8,
  "chuDe": "hinh-phang",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Tổng bình phương khoảng cách đến bốn đỉnh",
  "prompt": "Cho hình chữ nhật $ABCD$ và điểm $M$ nằm trong hình. Chứng minh $MA^2+MC^2=MB^2+MD^2$ bằng định lí Pythagore.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[12,0],"C":[12,8],"D":[0,8],"M":[4,6],"H":[4,0],"K":[4,8]},"edges":[["A","B"],["B","C"],["C","D"],["D","A"],["H","K"],["M","A"],["M","B"],["M","C"],["M","D"]],"unit":29.375,"origin":[103.75,294.5],"offsets":{"A":[-12,17],"B":[12,17],"C":[10,-16],"D":[-12,-16],"M":[-18,7],"H":[0,19],"K":[0,-18]},"right":[["A","H","M"],["D","K","M"]],"title":"Tổng bình phương khoảng cách đến bốn đỉnh"}),
  "solution": "Bước 1: Kẻ đường phụ\nQua $M$ kẻ đường vuông góc $AB$, cắt $AB,CD$ lần lượt tại $H,K$.\nVì $M$ nằm trong hình nên $H,K$ ở trong hai cạnh. Ta có $AH=DK$, $BH=CK$ do các tứ giác $AHKD$, $HBCK$ là hình chữ nhật.\nBước 2: Viết bốn hệ thức Pythagore\n$MA^2=MH^2+AH^2$; $MB^2=MH^2+BH^2$.\n$MC^2=MK^2+CK^2$; $MD^2=MK^2+DK^2$.\nMỗi hệ thức ứng với một tam giác vuông tại $H$ hoặc $K$.\nBước 3: Cộng và đối chiếu\n$MA^2+MC^2=MH^2+MK^2+AH^2+CK^2$.\n$MB^2+MD^2=MH^2+MK^2+BH^2+DK^2$.\nThay $CK=BH$, $DK=AH$ cho thấy hai tổng chứa cùng bốn số hạng.\nBước 4: Kết luận\n$MA^2+MC^2=MB^2+MD^2$. Kết quả không yêu cầu $M$ là tâm hình chữ nhật."
});
  bank["hang-dang-thuc"]["kha"].push({
  "id": "l8-hang-dang-thuc-kha-04",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Nhân tử thứ hai của hiệu hai lập phương",
  "prompt": "Trong hằng đẳng thức $u^3-v^3=(u-v)M$, biểu thức $M$ là gì?",
  "svg": "",
  "options": [
    "A. $u^2+uv+v^2$",
    "B. $u^2-uv+v^2$",
    "C. $u^2+2uv+v^2$",
    "D. $u^2-v^2$"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Nhận dạng hiệu hai lập phương\nCông thức là $u^3-v^3=(u-v)(u^2+uv+v^2)$.\nHạng tử giữa của nhân tử thứ hai mang dấu cộng.\nBước 2: Kiểm bằng nhân phân phối\n$(u-v)(u^2+uv+v^2)=u^3+u^2v+uv^2-u^2v-uv^2-v^3=u^3-v^3$.\nVậy $M=u^2+uv+v^2$. Chọn A."
});
  bank["hang-dang-thuc"]["kha"].push({
  "id": "l8-hang-dang-thuc-kha-05",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Hiệu hai bình phương của tổng và hiệu",
  "prompt": "Thu gọn $(a+b)^2-(a-b)^2$.",
  "svg": "",
  "options": [
    "A. $2ab$",
    "B. $2a^2+2b^2$",
    "C. $4ab$",
    "D. $0$"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Dùng hiệu hai bình phương\n$(a+b)^2-(a-b)^2=[(a+b)-(a-b)][(a+b)+(a-b)]$.\nBước 2: Thu gọn hai nhân tử\nHai ngoặc lần lượt bằng $2b$ và $2a$.\nTích bằng $4ab$. Chọn C."
});
  bank["hang-dang-thuc"]["nangCao"].push({
  "id": "l8-hang-dang-thuc-nang-cao-08",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Phân tích hiệu của một bình phương ghép với số",
  "prompt": "Phân tích $x^2+2xy+y^2-9$ thành nhân tử.",
  "svg": "",
  "options": [
    "A. $(x-y-3)(x-y+3)$",
    "B. $(x+y-9)(x+y+9)$",
    "C. $(x+y-3)^2$",
    "D. $(x+y-3)(x+y+3)$"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Nhận ra bình phương ghép\n$x^2+2xy+y^2=(x+y)^2$.\nBước 2: Phân tích hiệu hai bình phương\nBiểu thức bằng $(x+y)^2-3^2=(x+y-3)(x+y+3)$.\nSố $9$ phải được viết thành $3^2$, không phải $9^2$.\nBước 3: Kết luận\nChọn D."
});
  bank["hang-dang-thuc"]["nangCao"].push({
  "id": "l8-hang-dang-thuc-nang-cao-09",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Bổ sung số hạng để tính bình phương",
  "prompt": "Biết $x$ là số thực thỏa $x^2+6x=7$. Không cần tìm $x$, hãy tính $(x+3)^2$.",
  "svg": "",
  "options": [
    "A. $10$",
    "B. $16$",
    "C. $49$",
    "D. $4$"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Khai triển mục tiêu\n$(x+3)^2=x^2+6x+9$.\nBước 2: Thay cả nhóm đã biết\n$(x+3)^2=7+9=16$.\nKhông được thay riêng $x^2$ bằng $7$, vì dữ kiện còn có $6x$.\nBước 3: Kiểm sự tồn tại và kết luận\n$x=1$ thỏa dữ kiện, nên bài không đặt điều kiện rỗng.\nGiá trị mục tiêu là $16$. Chọn B."
});
  bank["hang-dang-thuc"]["nangCao"].push({
  "id": "l8-hang-dang-thuc-nang-cao-10",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Phân tích tổng hai lũy thừa bậc bốn đặc biệt",
  "prompt": "Phân tích $x^4+4y^4$ thành nhân tử. Cách nào đúng với mọi số thực $x,y$?",
  "svg": "",
  "options": [
    "A. $(x^2-2y^2)(x^2+2y^2)$",
    "B. $(x^2-xy+2y^2)(x^2+xy+2y^2)$",
    "C. $(x^2-2xy+2y^2)(x^2+2xy+2y^2)$",
    "D. $(x^2-2xy-2y^2)(x^2+2xy-2y^2)$"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Tạo bình phương bằng thêm rồi bớt\n$x^4+4y^4=x^4+4x^2y^2+4y^4-4x^2y^2$.\nGiá trị không đổi vì đã thêm và bớt cùng $4x^2y^2$.\nBước 2: Nhận dạng hiệu hai bình phương\nBiểu thức bằng $(x^2+2y^2)^2-(2xy)^2$.\nBước 3: Phân tích thành hai nhân tử\nKết quả là $(x^2+2y^2-2xy)(x^2+2y^2+2xy)$, đúng phương án C.\nA cho hiệu hai lũy thừa bậc bốn; B còn thừa $3x^2y^2$; D tạo hệ số $-8$ của $x^2y^2$.\nBước 4: Kết luận\nChọn C."
});
  bank["hang-dang-thuc"]["hsg"].push({
  "id": "l8-hang-dang-thuc-hsg-06",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Chuỗi nhân tử làm xuất hiện lũy thừa bậc bốn",
  "prompt": "Biết $x$ là số thực và $x^2=2$. Tính $(x-1)(x+1)(x^2+1)$.",
  "svg": "",
  "correctAnswer": "3",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Ghép hai nhân tử đầu\n$(x-1)(x+1)=x^2-1$.\nBước 2: Dùng hiệu hai bình phương lần nữa\n$(x^2-1)(x^2+1)=x^4-1$.\nBước 3: Thay dữ kiện\n$x^4=(x^2)^2=4$, nên tích bằng $4-1=3$.\nCả hai giá trị thực có bình phương bằng $2$ đều cho cùng kết quả.\nBước 4: Kết luận\nTích cần tính bằng $3$."
});
  bank["hang-dang-thuc"]["hsg"].push({
  "id": "l8-hang-dang-thuc-hsg-07",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Tham số để biểu thức có giá trị nhỏ nhất cho trước",
  "prompt": "Tìm $m$ để biểu thức $E=(x-y)^2-6(x-y)+m$ luôn không nhỏ hơn $2$ với mọi số thực $x,y$, đồng thời có ít nhất một cặp $(x,y)$ làm $E=2$.",
  "svg": "",
  "correctAnswer": "11",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Hoàn thành bình phương\n$E=(x-y-3)^2+m-9$.\nBước 2: Tìm giá trị nhỏ nhất có thể đạt\nBình phương luôn không âm. Nó bằng $0$ khi $x-y=3$, chẳng hạn $x=3,y=0$.\nVì vậy giá trị nhỏ nhất của $E$ đúng bằng $m-9$, không chỉ là một cận dưới.\nBước 3: Kết hợp hai yêu cầu\nLuôn $E\\ge2$ và có lúc $E=2$ nghĩa là giá trị nhỏ nhất bằng $2$.\nDo đó $m-9=2$, suy ra $m=11$.\nBước 4: Thử lại\nVới $m=11$, $E=(x-y-3)^2+2\\ge2$; mọi cặp $x-y=3$ cho dấu bằng.\nBước 5: Kết luận\n$m=11$."
});
  bank["hang-dang-thuc"]["hsg"].push({
  "id": "l8-hang-dang-thuc-hsg-08",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Các cặp số nguyên từ hiệu bình phương",
  "prompt": "Các số nguyên dương $x>y$ thỏa $x^2-y^2=45$ và $x+y<20$. Tính tổng tất cả các giá trị có thể của $y$.",
  "svg": "",
  "correctAnswer": "8",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Chuyển sang tích hai số nguyên\nĐặt $u=x-y$, $v=x+y$. Khi đó $uv=45$, $0<u<v<20$.\nHai số $u,v$ cùng tính chẵn lẻ vì $v-u=2y$.\nBước 2: Liệt kê đủ các cặp ước\nCác cặp số nguyên dương $u<v$ có tích $45$ là $(1,45)$, $(3,15)$, $(5,9)$.\nCặp đầu bị loại do $v<20$. Hai cặp còn lại đều gồm hai số lẻ.\nBước 3: Khôi phục và thử lại\nVới $(3,15)$: $x=(15+3)/2=9$, $y=(15-3)/2=6$.\nVới $(5,9)$: $x=7$, $y=2$.\nCả hai cặp đều có $x>y>0$, hiệu bình phương $45$ và tổng nhỏ hơn $20$.\nBước 4: Kết luận\nTổng các giá trị của $y$ là $6+2=8$."
});
  bank["hang-dang-thuc"]["hsg"].push({
  "id": "l8-hang-dang-thuc-hsg-09",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Đẳng thức bốn nhân tử ba biến",
  "prompt": "Chứng minh với mọi số thực $a,b,c$:\n$(a+b+c)(a+b-c)(a-b+c)(-a+b+c)=4a^2b^2-(a^2+b^2-c^2)^2$.",
  "svg": "",
  "solution": "Bước 1: Ghép cặp thứ nhất\n$(a+b+c)(a+b-c)=(a+b)^2-c^2=a^2+b^2-c^2+2ab$.\nBước 2: Ghép cặp thứ hai theo đúng dấu\n$(a-b+c)(-a+b+c)=[c+(a-b)][c-(a-b)]$.\nKết quả bằng $c^2-(a-b)^2=2ab-(a^2+b^2-c^2)$.\nBước 3: Đặt biểu thức trung gian\nGọi $T=a^2+b^2-c^2$. Tích bốn nhân tử trở thành $(2ab+T)(2ab-T)$.\nHai nhân tử có cùng phần $2ab$ và hai phần đối nhau $T,-T$.\nBước 4: Kết luận bằng hiệu hai bình phương\nTích bằng $(2ab)^2-T^2=4a^2b^2-(a^2+b^2-c^2)^2$.\nCác bước không chia cho biểu thức nào, nên đúng cả khi một hay nhiều nhân tử bằng $0$."
});
  bank["hang-dang-thuc"]["hsg"].push({
  "id": "l8-hang-dang-thuc-hsg-10",
  "lop": 8,
  "chuDe": "hang-dang-thuc",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Không âm và điều kiện bằng không của tổng hai bình phương",
  "prompt": "Với mọi số thực $x,y$, chứng minh $F=4x^2-4xy+2y^2-6y+9\\ge0$. Xác định đầy đủ các cặp $(x,y)$ làm $F=0$.",
  "svg": "",
  "solution": "Bước 1: Tách bình phương thứ nhất\n$4x^2-4xy+y^2=(2x-y)^2$.\nSau khi lấy nhóm này, còn lại $y^2-6y+9$.\nBước 2: Nhận ra bình phương thứ hai\n$F=(2x-y)^2+(y-3)^2$.\nMỗi bình phương đều không âm nên tổng không âm.\nBước 3: Xét điều kiện tổng bằng không\nMột tổng hai số không âm bằng $0$ chỉ khi cả hai đều bằng $0$.\nVì thế cần đồng thời $2x-y=0$ và $y-3=0$.\nTừ điều kiện thứ hai được $y=3$; thay vào điều kiện thứ nhất được $x=3/2$.\nBước 4: Kiểm dấu bằng và kết luận\nVới $(x,y)=(3/2,3)$, cả hai bình phương đều bằng $0$.\nVậy $F\\ge0$ với mọi $x,y$, và dấu bằng chỉ xảy ra tại cặp $(3/2,3)$."
});
  bank["phan-thuc"]["kha"].push({
  "id": "l8-phan-thuc-kha-04",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Phân thức nghịch đảo trên miền hợp lệ",
  "prompt": "Với $x\\ne1$ và $x\\ne-2$, phân thức nghịch đảo của $\\frac{x-1}{x+2}$ là gì?",
  "svg": "",
  "options": [
    "A. $\\frac{1-x}{x+2}$",
    "B. $\\frac{x+2}{x-1}$",
    "C. $\\frac{x-1}{x+2}$",
    "D. $\\frac{x+2}{1-x}$"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Kiểm điều kiện nghịch đảo\nMẫu $x+2$ khác $0$ vì $x\\ne-2$; tử $x-1$ khác $0$ vì $x\\ne1$.\nPhân thức đã cho có nghĩa và khác $0$.\nBước 2: Đổi tử và mẫu\nPhân thức nghịch đảo là $(x+2)/(x-1)$.\nTích hai phân thức bằng $1$ trên miền đã nêu.\nBước 3: Kết luận\nChọn B."
});
  bank["phan-thuc"]["kha"].push({
  "id": "l8-phan-thuc-kha-05",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Phân thức đối với mẫu đảo dấu",
  "prompt": "Với $x\\ne y$, phân thức nào là phân thức đối của $\\frac{x+y}{x-y}$?",
  "svg": "",
  "options": [
    "A. $\\frac{y-x}{x+y}$ với $x+y\\ne0$",
    "B. $\\frac{x-y}{x+y}$ với $x+y\\ne0$",
    "C. $\\frac{x+y}{x-y}$",
    "D. $\\frac{x+y}{y-x}$"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Viết phân thức đối\nPhân thức đối là $-(x+y)/(x-y)$.\nBước 2: Chuyển dấu trừ vào mẫu\nVì $y-x=-(x-y)$ nên $-(x+y)/(x-y)=(x+y)/(y-x)$.\nMẫu mới cũng khác $0$ do $x\\ne y$.\nBước 3: Kết luận\nD đúng trên toàn miền đề cho. A và B đổi cả vai trò tử mẫu; C giữ nguyên phân thức nên không phải công thức của phân thức đối. Chọn D."
});
  bank["phan-thuc"]["nangCao"].push({
  "id": "l8-phan-thuc-nang-cao-08",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Sửa phép khử sai hạng tử trong tổng",
  "prompt": "Với $x\\ne-5$, một bạn “khử $x$” trong $\\frac{x+3}{x+5}$ rồi được $\\frac35$. Cách sửa nào đúng với mọi giá trị hợp lệ của $x$?",
  "svg": "",
  "options": [
    "A. $\\frac{x+3}{x+5}=1-\\frac2{x+5}$",
    "B. $\\frac{x+3}{x+5}=1+\\frac2{x+5}$",
    "C. $\\frac{x+3}{x+5}=\\frac35$",
    "D. $\\frac{x+3}{x+5}=1-\\frac2{x+3}$ với $x\\ne-3$"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Chỉ ra phép khử không hợp lệ\nChỉ được rút gọn nhân tử chung, không được xóa một hạng tử đang nằm trong tổng.\n$x+3$ và $x+5$ không cùng có nhân tử $x$.\nBước 2: Tách tử theo mẫu\n$x+3=(x+5)-2$.\nDo đó $(x+3)/(x+5)=1-2/(x+5)$, vẫn giữ $x\\ne-5$.\nBước 3: Kiểm dấu và kết luận\nQuy đồng $1-2/(x+5)$ được tử $x+5-2=x+3$.\nChọn A."
});
  bank["phan-thuc"]["nangCao"].push({
  "id": "l8-phan-thuc-nang-cao-09",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Hiệu hai phân thức có mẫu hai biến",
  "prompt": "Với $x\\ne y$ và $x\\ne-y$, thu gọn $E=\\frac{x}{x+y}-\\frac{y}{x-y}$.",
  "svg": "",
  "options": [
    "A. $\\frac{x^2-y^2}{x^2-y^2}$",
    "B. $\\frac{x^2-y^2}{(x+y)^2}$",
    "C. $\\frac{x^2-2xy-y^2}{x^2-y^2}$",
    "D. $\\frac{x^2+2xy-y^2}{x^2-y^2}$"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Chọn mẫu chung hợp lệ\n$x+y$ và $x-y$ đều khác $0$. Mẫu chung là $(x+y)(x-y)=x^2-y^2$.\nBước 2: Quy đồng và giữ dấu trừ\n$E=[x(x-y)-y(x+y)]/(x^2-y^2)$.\nTử bằng $x^2-xy-xy-y^2=x^2-2xy-y^2$.\nBước 3: Kết luận\n$E=(x^2-2xy-y^2)/(x^2-y^2)$ trên miền đã nêu. Chọn C."
});
  bank["phan-thuc"]["nangCao"].push({
  "id": "l8-phan-thuc-nang-cao-10",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Giá trị làm phân thức bằng không bị loại ở mẫu gốc",
  "prompt": "Xét $P=\\frac{x^2-9}{x^2-5x+6}$ trên miền xác định của phân thức. Những giá trị nào của $x$ làm $P=0$?",
  "svg": "",
  "options": [
    "A. Chỉ $x=3$.",
    "B. Chỉ $x=-3$.",
    "C. $x=-3$ và $x=3$.",
    "D. Không có giá trị nào."
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Tìm miền từ mẫu gốc\n$x^2-5x+6=(x-2)(x-3)$, nên phải có $x\\ne2,3$.\nBước 2: Xét điều kiện tử bằng không\n$x^2-9=(x-3)(x+3)$, nên các giá trị cần kiểm là $3$ và $-3$.\nMột phân thức bằng $0$ cần tử bằng $0$ và mẫu khác $0$ đồng thời.\nBước 3: Loại và thử trực tiếp\n$x=3$ bị loại vì làm mẫu gốc bằng $0$.\n$x=-3$ cho mẫu $9+15+6=30$, tử bằng $0$, nên được nhận.\nBước 4: Kết luận\nChỉ $x=-3$. Chọn B."
});
  bank["phan-thuc"]["hsg"].push({
  "id": "l8-phan-thuc-hsg-06",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Tổng phân thức từ hiệu hai bình phương đã biết",
  "prompt": "Các số thực $x,y$ thỏa $x=3$ và $x^2-y^2=8$. Tính $P=\\frac1{x+y}+\\frac1{x-y}$; các mẫu phải khác $0$.",
  "svg": "",
  "correctAnswer": "3/4",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Kiểm dữ kiện và các mẫu\nTa có $(x+y)(x-y)=x^2-y^2=8\\ne0$, nên cả hai mẫu đều khác $0$.\nCặp $x=3,y=1$ thỏa dữ kiện, nên các điều kiện có thể đồng thời xảy ra.\nBước 2: Quy đồng\n$P=[(x-y)+(x+y)]/(x^2-y^2)=2x/(x^2-y^2)$.\nBước 3: Thay dữ kiện\n$P=2\\cdot3/8=3/4$.\nBước 4: Kết luận\n$P=3/4$."
});
  bank["phan-thuc"]["hsg"].push({
  "id": "l8-phan-thuc-hsg-07",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Nhận ra quan hệ nghịch đảo sau rút gọn",
  "prompt": "Cho số thực $x\\ne0,1,-1$ thỏa $x-\\frac1x=3$. Tính $P=\\frac{(x+1)^2}{x^2-1}-\\frac{x-1}{x+1}$.",
  "svg": "",
  "correctAnswer": "4/3",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Rút gọn trên miền đã cho\n$x^2-1=(x-1)(x+1)$; do $x\\ne1,-1$, phân thức đầu bằng $(x+1)/(x-1)$.\nVậy $P=(x+1)/(x-1)-(x-1)/(x+1)$.\nBước 2: Quy đồng và dùng hằng đẳng thức\n$P=[(x+1)^2-(x-1)^2]/(x^2-1)=4x/(x^2-1)$.\nBước 3: Nhận ra đại lượng đã biết\nVì $x\\ne0$, ta có $(x^2-1)/x=x-1/x=3$.\nDo đó $P=4/[(x^2-1)/x]=4/3$.\nKhông cần giải tìm riêng $x$; mọi phép chia đã được bảo đảm bởi miền xác định.\nBước 4: Kết luận\n$P=4/3$."
});
  bank["phan-thuc"]["hsg"].push({
  "id": "l8-phan-thuc-hsg-08",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Tỉ số bình phương tổng hiệu từ tổng hai thương",
  "prompt": "Các số thực $x,y$ thỏa $xy\\ne0$, $x+y\\ne0$ và $\\frac{x}{y}+\\frac{y}{x}=\\frac52$. Tính $Q=\\frac{(x-y)^2}{(x+y)^2}$.",
  "svg": "",
  "correctAnswer": "1/9",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Quy dữ kiện về một tỉ số\nVì $xy\\ne0$, ta có $(x^2+y^2)/(xy)=5/2$.\nBước 2: Chia cả tử và mẫu của mục tiêu cho cùng $xy$\n$Q=[(x^2+y^2)/(xy)-2]/[(x^2+y^2)/(xy)+2]$.\nPhép biến đổi giữ giá trị vì $xy\\ne0$; mẫu ban đầu khác $0$ do $x+y\\ne0$.\nBước 3: Tính giá trị\n$Q=(5/2-2)/(5/2+2)=(1/2)/(9/2)=1/9$.\nBước 4: Kiểm tính khả thi\nChẳng hạn $x=2,y=1$ thỏa mọi điều kiện và cho $Q=1/9$.\nBước 5: Kết luận\n$Q=1/9$."
});
  bank["phan-thuc"]["hsg"].push({
  "id": "l8-phan-thuc-hsg-09",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "So sánh hai cách chuẩn hóa số dương",
  "prompt": "Cho $x,y>0$. Đặt $A=\\frac{x}{x+y}$ và $B=\\frac{x^2}{x^2+y^2}$. Chứng minh: nếu $x>y$ thì $B>A$; nếu $x<y$ thì $B<A$. Xác định khi nào $A=B$.",
  "svg": "",
  "solution": "Bước 1: Kiểm miền và chọn hiệu cần xét\nVì $x,y>0$, các mẫu $x+y$ và $x^2+y^2$ đều dương.\nTa xét $B-A$ để so sánh hai phân thức.\nBước 2: Quy đồng\n$B-A=[x^2(x+y)-x(x^2+y^2)]/[(x^2+y^2)(x+y)]$.\nTử bằng $x^2y-xy^2=xy(x-y)$.\nBước 3: Xác định dấu có lý do\nTrong hiệu vừa tính, $xy>0$ và mẫu dương. Vì vậy dấu của hiệu đúng bằng dấu của $x-y$.\nNếu $x>y$, hiệu dương nên $B>A$.\nNếu $x<y$, hiệu âm nên $B<A$.\nBước 4: Xét dấu bằng\nHiệu bằng $0$ khi và chỉ khi $x-y=0$, vì các thừa số khác đều khác $0$.\nVậy $A=B$ khi và chỉ khi $x=y$; lúc đó cả hai bằng $1/2$."
});
  bank["phan-thuc"]["hsg"].push({
  "id": "l8-phan-thuc-hsg-10",
  "lop": 8,
  "chuDe": "phan-thuc",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Hai lần biến đổi phân thức trả về số ban đầu",
  "prompt": "Cho số thực $x\\ne1$ và đặt $A=\\frac{x+1}{x-1}$. Chứng minh $A-1\\ne0$ và $\\frac{A+1}{A-1}=x$. Giải thích vì sao kết quả này không cho phép bổ sung $x=1$ vào miền ban đầu.",
  "svg": "",
  "solution": "Bước 1: Tính mẫu của phép biến đổi thứ hai\n$A-1=[x+1-(x-1)]/(x-1)=2/(x-1)$.\nTử $2$ khác $0$ và mẫu hợp lệ nên $A-1\\ne0$.\nBước 2: Tính tử tương ứng\n$A+1=[x+1+(x-1)]/(x-1)=2x/(x-1)$.\nBước 3: Chia hai phân thức\n$(A+1)/(A-1)=[2x/(x-1)]:[2/(x-1)]=x$.\nĐổi phép chia thành phép nhân nghịch đảo là hợp lệ vì đã chứng minh số chia khác $0$.\nBước 4: Kết luận và giữ miền gốc\nHai lần biến đổi trả lại $x$ với mọi $x\\ne1$.\nỞ $x=1$, ngay $A$ đã không xác định. Dạng cuối $x$ có nghĩa tại $1$ không thể làm các phép tính ban đầu tại $1$ trở nên hợp lệ."
});
  bank["thales"]["kha"].push({
  "id": "l8-thales-kha-04",
  "lop": 8,
  "chuDe": "thales",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Điều kiện đủ để điểm chia cạnh là trung điểm",
  "prompt": "Trong tam giác $ABC$, $M$ là trung điểm $AB$ và $N$ nằm giữa $A,C$. Điều kiện nào đủ để chắc chắn $N$ là trung điểm $AC$?",
  "svg": "",
  "options": [
    "A. $MN\\parallel BC$.",
    "B. $AB=AC$.",
    "C. $AM=MB$.",
    "D. $MN\\perp AB$."
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Dùng điều kiện song song\nNếu $MN\\parallel BC$, Thales cho $AN/AC=AM/AB$.\nVì $M$ là trung điểm $AB$, tỉ số bên phải bằng $1/2$.\nBước 2: Suy vị trí của N\n$AN=AC/2$, nên $AN=NC$. Do $N$ nằm trong $AC$, đó chính là trung điểm.\nBước 3: Kết luận về điều kiện đủ\nB chỉ nói tam giác cân; C nhắc lại giả thiết nên cả hai không xác định vị trí $N$.\nD là điều kiện vuông góc, không bảo đảm tỉ số $AN/AC=1/2$ trong một tam giác bất kỳ.\nChọn A."
});
  bank["thales"]["kha"].push({
  "id": "l8-thales-kha-05",
  "lop": 8,
  "chuDe": "thales",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Từ tỉ số hai phần sang tỉ số phần trên toàn cạnh",
  "prompt": "Trong tam giác $ABC$, $M,N$ nằm trong $AB,AC$ và $MN\\parallel BC$. Biết $AM:MB=2:3$. Tính $AN/AC$.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[12,0],"C":[4,9],"M":[4.800000000000001,0],"N":[1.6,3.6]},"edges":[["A","B"],["B","C"],["C","A"],["M","N"]],"unit":26.11111111111111,"origin":[123.33333333333334,294.5],"offsets":{"A":[-15,10],"B":[14,12],"C":[0,-18],"M":[0,19],"N":[-19,0]},"parallel":[[["M","N"],["B","C"]]],"notes":[{"x":280,"y":335,"text":"AM : MB = 2 : 3"}],"title":"Từ tỉ số hai phần sang tỉ số phần trên toàn cạnh"}),
  "options": [
    "A. $2/3$",
    "B. $3/5$",
    "C. $2/5$",
    "D. $3/2$"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Phân biệt phần và toàn cạnh\nNếu $AM$ gồm $2$ phần, $MB$ gồm $3$ phần thì $AB$ gồm $5$ phần.\nVậy $AM/AB=2/5$, không phải $2/3$.\nBước 2: Dùng Thales\nVì $MN\\parallel BC$, $AN/AC=AM/AB=2/5$.\nChọn C."
});
  bank["thales"]["nangCao"].push({
  "id": "l8-thales-nang-cao-08",
  "lop": 8,
  "chuDe": "thales",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Chia cạnh thành bốn phần bằng đường song song",
  "prompt": "Tam giác $ABC$ có $AB=10$ cm, $AC=15$ cm. Các điểm $P,Q,R$ chia $AB$ thành bốn đoạn bằng nhau theo thứ tự $A,P,Q,R,B$. Qua chúng kẻ các đường song song $BC$, cắt $AC$ lần lượt tại $U,V,W$. Tính $VW$.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[10,0],"C":[9,12],"P":[2.5,0],"Q":[5,0],"R":[7.5,0],"U":[2.25,3],"V":[4.5,6],"W":[6.75,9]},"edges":[["A","B"],["B","C"],["C","A"],["P","U"],["Q","V"],["R","W"]],"unit":19.583333333333332,"origin":[182.08333333333334,294.5],"offsets":{"A":[-16,10],"B":[15,12],"C":[5,-18],"P":[0,19],"Q":[0,19],"R":[0,19],"U":[-18,0],"V":[-18,0],"W":[-18,0]},"parallel":[[["P","U"],["Q","V"],["R","W"],["B","C"]]],"edgeLabels":[{"a":"A","b":"C","value":15,"text":"15 cm","offset":-40}],"notes":[{"x":280,"y":335,"text":"AP = PQ = QR = RB; AB = 10 cm"}],"title":"Chia cạnh thành bốn phần bằng đường song song"}),
  "options": [
    "A. $7{,}5$ cm",
    "B. $2{,}5$ cm",
    "C. $5$ cm",
    "D. $3{,}75$ cm"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Xác định hai mức chia\n$AQ/AB=1/2$ và $AR/AB=3/4$.\nBước 2: Áp dụng Thales ở hai đường song song\nVì $QV\\parallel BC$, $AV/AC=1/2$, nên $AV=7{,}5$ cm.\nVì $RW\\parallel BC$, $AW/AC=3/4$, nên $AW=11{,}25$ cm.\nBước 3: Lấy hiệu hai đoạn cùng gốc\nThứ tự $A,V,W,C$ cho $VW=AW-AV=11{,}25-7{,}5=3{,}75$ cm.\nChọn D."
});
  bank["thales"]["nangCao"].push({
  "id": "l8-thales-nang-cao-09",
  "lop": 8,
  "chuDe": "thales",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Tìm cạnh từ chu vi và phân giác",
  "prompt": "Tam giác $ABC$ có chu vi $40$ cm và $AB:AC=2:3$. Phân giác trong $AD$ cắt $BC$ tại $D$, với $BD=6$ cm. Tính $AB$.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[10,0],"C":[5,14.142135623730951],"D":[8,5.656854249492381]},"edges":[["A","B"],["B","C"],["C","A"],["A","D"]],"unit":16.617009357883866,"origin":[196.91495321058068,294.5],"offsets":{"A":[-14,10],"B":[13,12],"C":[0,-18],"D":[18,0]},"angles":[{"at":"A","from":"B","to":"D","mark":"a","radius":25},{"at":"A","from":"D","to":"C","mark":"a","radius":25}],"edgeLabels":[{"a":"B","b":"D","value":6,"text":"6 cm","offset":20}],"notes":[{"x":280,"y":335,"text":"AB : AC = 2 : 3; chu vi ABC = 40 cm"}],"title":"Tìm cạnh từ chu vi và phân giác"}),
  "options": [
    "A. $16$ cm",
    "B. $10$ cm",
    "C. $15$ cm",
    "D. $8$ cm"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Dùng tính chất phân giác\n$BD/DC=AB/AC=2/3$.\nVới $BD=6$, ta được $DC=9$ cm, nên $BC=15$ cm.\nBước 2: Dùng chu vi và tỉ số hai cạnh\n$AB+AC=40-15=25$ cm.\nHai cạnh theo tỉ số $2:3$, nên $AB=25\\cdot2/5=10$ cm và $AC=15$ cm.\nBước 3: Kiểm và kết luận\nBộ cạnh $10,15,15$ tạo tam giác không suy biến; đoạn $BC=15$ được chia thành $6$ và $9$, đúng tỉ số.\nChọn B."
});
  bank["thales"]["nangCao"].push({
  "id": "l8-thales-nang-cao-10",
  "lop": 8,
  "chuDe": "thales",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Đoạn song song đáy qua giao hai đường chéo hình thang",
  "prompt": "Hình thang lồi $ABCD$ có $AB\\parallel CD$, $AB=6$ cm, $CD=18$ cm. Hai đường chéo cắt nhau tại $O$. Qua $O$ kẻ đường song song hai đáy, cắt $AD,BC$ tại $E,F$. Tính $EF$.",
  "svg": svgGrade8Geometry({"points":{"A":[4,6],"B":[10,6],"C":[18,0],"D":[0,0],"O":[7.5,4.5],"E":[3,4.5],"F":[12,4.5]},"edges":[["A","B"],["B","C"],["C","D"],["D","A"],["A","C"],["B","D"],["E","F"]],"unit":23.88888888888889,"origin":[65,248.66666666666669],"offsets":{"A":[-8,-17],"B":[8,-17],"C":[12,14],"D":[-12,14],"O":[0,19],"E":[-18,0],"F":[18,0]},"parallel":[[["A","B"],["C","D"],["E","F",0.7]]],"edgeLabels":[{"a":"A","b":"B","value":6,"text":"6 cm","offset":-20},{"a":"D","b":"C","value":18,"text":"18 cm","offset":24}],"title":"Đoạn song song đáy qua giao hai đường chéo hình thang"}),
  "options": [
    "A. $9$ cm",
    "B. $12$ cm",
    "C. $6$ cm",
    "D. $4{,}5$ cm"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Tìm tỉ số chia đường chéo\nTheo hệ quả Thales với $AB\\parallel CD$, $OA/OC=AB/CD=1/3$.\nỞ đây $A,B$ nằm trên các tia đối của $OC,OD$; ta dùng độ dài dương của các đoạn.\nVậy $AO/AC=1/4$ và $CO/CA=3/4$.\nBước 2: Tính EO trong tam giác ACD\nDo $EO\\parallel CD$, $EO/CD=AO/AC=1/4$.\nSuy ra $EO=18/4=4{,}5$ cm.\nBước 3: Tính OF trong tam giác CAB\nDo $OF\\parallel AB$, $OF/AB=CO/CA=3/4$.\nSuy ra $OF=6\\cdot3/4=4{,}5$ cm.\nBước 4: Kết luận\n$O$ nằm giữa $E,F$ nên $EF=EO+OF=9$ cm. Chọn A.\nKhông lấy trung bình hai đáy, vì đường qua $O$ không nhất thiết là đường trung bình hình thang."
});
  bank["thales"]["hsg"].push({
  "id": "l8-thales-hsg-06",
  "lop": 8,
  "chuDe": "thales",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Đường song song qua trung điểm của nửa cạnh",
  "prompt": "Trong tam giác $ABC$ có $BC=20$ cm, $M,N$ là trung điểm $AB,AC$. Gọi $P$ là trung điểm $MB$. Qua $P$ kẻ đường song song $BC$, cắt $AC$ tại $Q$. Tính $PQ-MN$ theo cm.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[12,0],"C":[0,16],"M":[6,0],"N":[0,8],"P":[9,0],"Q":[0,12]},"edges":[["A","B"],["B","C"],["C","A"],["M","N"],["P","Q"]],"unit":14.6875,"origin":[191.875,294.5],"offsets":{"A":[-14,10],"B":[13,12],"C":[0,-18],"M":[0,19],"N":[-18,0],"P":[0,19],"Q":[-18,0]},"parallel":[[["M","N"],["P","Q"],["B","C"]]],"equal":[[["A","M"],["M","B"]],[["M","P"],["P","B"]]],"edgeLabels":[{"a":"B","b":"C","value":20,"text":"20 cm","offset":24}],"title":"Đường song song qua trung điểm của nửa cạnh"}),
  "correctAnswer": "5",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Tính đường trung bình\n$MN=BC/2=10$ cm.\nBước 2: Xác định vị trí của P trên cả cạnh\n$AM=AB/2$ và $MP=MB/2=AB/4$.\nDo đó $AP=AM+MP=3AB/4$.\nBước 3: Dùng hệ quả Thales\n$PQ/BC=AP/AB=3/4$, nên $PQ=15$ cm.\nBước 4: Kết luận\n$PQ-MN=15-10=5$ cm."
});
  bank["thales"]["hsg"].push({
  "id": "l8-thales-hsg-07",
  "lop": 8,
  "chuDe": "thales",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Giao của trung tuyến và phân giác",
  "prompt": "Tam giác $ABC$ có $AB=12$ cm, $AC=18$ cm, $BC=20$ cm. Phân giác trong $AD$ và trung tuyến $BM$ cắt nhau tại $I$. Tính $AI/ID$.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[12,0],"C":[2.8333333333333335,17.775607506417952],"D":[8.333333333333334,7.110243002567181],"M":[1.4166666666666667,8.887803753208976],"I":[5.9523809523809526,5.078745001833701],"E":[1.9833333333333334,12.442925254492566]},"edges":[["A","B"],["B","C"],["C","A"],["A","D"],["B","M"],["D","E"]],"unit":13.22036391246557,"origin":[200.6778165252066,294.5],"offsets":{"A":[-14,10],"B":[13,12],"C":[0,-18],"D":[19,0],"M":[-19,0],"I":[10,-18],"E":[-19,0]},"parallel":[[["B","M"],["D","E"]]],"equal":[[["A","M"],["M","C"]]],"angles":[{"at":"A","from":"B","to":"D","mark":"a","radius":25},{"at":"A","from":"D","to":"C","mark":"a","radius":25}],"notes":[{"x":280,"y":335,"text":"AB = 12; AC = 18; BC = 20 (cm)"}],"title":"Giao của trung tuyến và phân giác"}),
  "correctAnswer": "5/2",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Tìm tỉ số trên cạnh BC\nTính chất phân giác cho $BD/DC=AB/AC=2/3$.\nDo đó $CD/CB=3/5$.\nBước 2: Kẻ đường phụ song song trung tuyến\nQua $D$ kẻ $DE\\parallel BM$, với $E$ thuộc $CM$.\nTrong tam giác $CBM$, Thales cho $CE/CM=CD/CB=3/5$.\nVì $CM=AC/2$, ta có $CE=3AC/10$ và $AE=7AC/10$.\nBước 3: Dùng Thales trong tam giác ADE\n$M$ nằm giữa $A,E$; $MI$ thuộc $BM$ nên $MI\\parallel DE$.\nVì thế $AI/AD=AM/AE=(AC/2)/(7AC/10)=5/7$.\nBước 4: Chuyển sang tỉ số hai phần\n$ID/AD=1-5/7=2/7$, nên $AI/ID=(5/7)/(2/7)=5/2$.\nVì $AI/AD=5/7$ nằm giữa $0$ và $1$, điểm $I$ ở trong $AD$ và các đoạn dùng làm mẫu dương.\nBước 5: Kết luận\n$AI/ID=5/2$."
});
  bank["thales"]["hsg"].push({
  "id": "l8-thales-hsg-08",
  "lop": 8,
  "chuDe": "thales",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Hai phần hình có cùng chu vi",
  "prompt": "Tam giác $ABC$ có $AB=13$ cm, $AC=14$ cm, $BC=15$ cm. Các điểm $M,N$ nằm trong $AB,AC$, với $MN\\parallel BC$. Chu vi tam giác $AMN$ bằng chu vi tứ giác $BMNC$. Tính $MN$ theo cm.",
  "svg": svgGrade8Geometry({"points":{"A":[0,0],"B":[13,0],"C":[5.384615384615385,12.923076923076923],"M":[10.11111111111111,0],"N":[4.188034188034188,10.051282051282051]},"edges":[["A","B"],["B","C"],["C","A"],["M","N"]],"unit":18.18452380952381,"origin":[161.80059523809524,294.5],"offsets":{"A":[-14,10],"B":[13,12],"C":[0,-18],"M":[0,19],"N":[-19,0]},"parallel":[[["M","N"],["B","C"]]],"notes":[{"x":280,"y":335,"text":"AB = 13; AC = 14; BC = 15 (cm)"}],"title":"Hai phần hình có cùng chu vi"}),
  "correctAnswer": "35/3",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Viết đúng hai chu vi\n$AM+AN+MN=BM+MN+NC+BC$.\nĐoạn $MN$ xuất hiện ở cả hai chu vi nên có thể trừ khỏi hai vế.\nBước 2: Tìm tổng hai cạnh nhỏ\nThay $BM=AB-AM$, $NC=AC-AN$, ta được $2(AM+AN)=AB+AC+BC=42$.\nVậy $AM+AN=21$ cm.\nBước 3: Tìm tỉ số Thales\nGọi $k=AM/AB=AN/AC=MN/BC$. Do các điểm nằm trong cạnh, $0<k<1$.\n$AM+AN=k(AB+AC)=27k=21$, nên $k=7/9$.\nBước 4: Tính và kiểm lại\n$MN=15\\cdot7/9=35/3$ cm.\nChu vi nhỏ bằng $21+35/3=98/3$ cm; chu vi tứ giác bằng $(27-21)+15+35/3=98/3$ cm.\nBước 5: Kết luận\n$MN=35/3$ cm."
});
  bank["thales"]["hsg"].push({
  "id": "l8-thales-hsg-09",
  "lop": 8,
  "chuDe": "thales",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Trung điểm của đoạn chắn bởi hai đường song song",
  "prompt": "Trong tam giác $ABC$, $M$ là trung điểm $BC$ và $P$ nằm giữa $A,M$. Qua $P$ kẻ đường song song $AB$, cắt $MB$ tại $D$; kẻ đường song song $AC$, cắt $MC$ tại $E$. Chứng minh $M$ là trung điểm $DE$.",
  "svg": svgGrade8Geometry({"points":{"A":[4,10],"B":[0,0],"C":[14,0],"M":[7,0],"P":[5.65,4.5],"D":[3.85,0],"E":[10.15,0]},"edges":[["A","B"],["B","C"],["C","A"],["A","M"],["P","D"],["P","E"]],"unit":23.5,"origin":[115.5,294.5],"offsets":{"A":[0,-18],"B":[-14,14],"C":[14,14],"M":[0,19],"P":[18,-10],"D":[0,19],"E":[0,19]},"parallel":[[["P","D"],["A","B"]],[["P","E"],["A","C"]]],"notes":[{"x":280,"y":335,"text":"MB = MC; A, P, M thẳng hàng"}],"title":"Trung điểm của đoạn chắn bởi hai đường song song"}),
  "solution": "Bước 1: Xác định vị trí các điểm\nVì $P$ nằm trong $AM$, các đường song song qua $P$ cắt các cạnh của tam giác $MAB,MAC$ tại điểm trong cạnh.\nDo đó $D$ ở giữa $B,M$ và $E$ ở giữa $M,C$. Suy ra $M$ nằm giữa $D,E$.\nBước 2: Lập tỉ số trong hai tam giác\nTrong tam giác $MAB$, $PD\\parallel AB$ nên $MD/MB=MP/MA$.\nTrong tam giác $MAC$, $PE\\parallel AC$ nên $ME/MC=MP/MA$.\nBước 3: Kết nối với trung điểm đã cho\nHai tỉ số bằng nhau, và $MB=MC$ vì $M$ là trung điểm $BC$.\nDo đó $MD=ME$.\nBước 4: Kết luận\n$M$ nằm giữa $D,E$ và cách đều hai điểm đó, nên $M$ là trung điểm $DE$."
});
  bank["thales"]["hsg"].push({
  "id": "l8-thales-hsg-10",
  "lop": 8,
  "chuDe": "thales",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Tỉ số chia đoạn và điều kiện thẳng hàng",
  "prompt": "Trong tam giác $ABC$, $M,N$ nằm trong $AB,AC$ và $MN\\parallel BC$. Lấy $E$ nằm giữa $M,N$, $D$ nằm giữa $B,C$. Chứng minh $A,E,D$ thẳng hàng khi và chỉ khi $ME/EN=BD/DC$.",
  "svg": svgGrade8Geometry({"points":{"A":[3,10],"B":[0,0],"C":[16,0],"M":[1.5,5],"N":[9.5,5],"D":[10,0],"E":[6.5,5]},"edges":[["A","B"],["B","C"],["C","A"],["M","N"],["A","D"]],"unit":23.5,"origin":[92,294.5],"offsets":{"A":[0,-18],"B":[-14,14],"C":[14,14],"M":[-18,0],"N":[18,0],"D":[0,19],"E":[0,-19]},"parallel":[[["M","N",0.28],["B","C",0.3]]],"title":"Tỉ số chia đoạn và điều kiện thẳng hàng"}),
  "solution": "Bước 1: Chứng minh chiều thuận\nGiả sử $A,E,D$ thẳng hàng. Trong tam giác $ABD$, $ME\\parallel BD$ nên $ME/BD=AE/AD$.\nTrong tam giác $ACD$, $EN\\parallel DC$ nên $EN/DC=AE/AD$.\nSuy ra $ME/BD=EN/DC$, hay $ME/EN=BD/DC$. Các đoạn đều dương nên phép chia hợp lệ.\nBước 2: Dựng giao điểm để xét chiều đảo\nGiả sử $ME/EN=BD/DC$. Gọi $D'$ là giao của tia $AE$ với $BC$.\nVì $E$ nằm trong đoạn chắn $MN$ song song $BC$, tia $AE$ nằm trong góc $BAC$ và cắt đoạn $BC$ tại một điểm trong cạnh.\nBước 3: Dùng chiều thuận cho giao điểm vừa dựng\nTheo bước 1, $BD'/D'C=ME/EN=BD/DC$.\nCộng $1$ vào hai tỉ số rồi lấy nghịch đảo, được $D'C/BC=DC/BC$.\nVì $BC>0$, suy ra $D'C=DC$.\nBước 4: Kết luận tính duy nhất\nCả $D,D'$ nằm trên đoạn $BC$ và có cùng khoảng cách đến $C$, nên chúng trùng nhau.\nVậy $A,E,D$ thẳng hàng. Hai chiều đã được chứng minh."
});
  // Bổ sung lớp 8 lô 3–4: 50 câu theo kế hoạch đã duyệt.
  bank["pt-bac-nhat"]["kha"].push({
  "id": "l8-pt-bac-nhat-kha-04",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Cộng cùng một số vào hai vế",
  "prompt": "Cộng $5$ vào cả hai vế của phương trình $2x-7=3$, ta được phương trình nào?",
  "svg": "",
  "options": [
    "A. $2x-2=3$",
    "B. $2x-12=8$",
    "C. $2x-2=8$",
    "D. $2x-7=8$"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Thực hiện cùng một phép cộng\nVế trái thành $2x-7+5=2x-2$.\nVế phải thành $3+5=8$.\nBước 2: Kết luận\nPhương trình thu được là $2x-2=8$. Chọn C.\nA và D chỉ thay đổi một vế; B trừ $5$ ở vế trái nhưng lại cộng $5$ ở vế phải."
});
  bank["pt-bac-nhat"]["kha"].push({
  "id": "l8-pt-bac-nhat-kha-05",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Sửa dấu khi bỏ ngoặc",
  "prompt": "Khi giải $5-2(x-1)=9$, một bạn viết ngay $5-2x-2=9$. Dòng sửa nào dưới đây đúng?",
  "svg": "",
  "options": [
    "A. $5-2x+2=9$",
    "B. $5-2x-1=9$",
    "C. $5+2x-2=9$",
    "D. $5-2x+1=9$"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Nhân vào từng hạng tử trong ngoặc\n$-2(x-1)=(-2)x+(-2)(-1)=-2x+2$.\nTích của hai số âm là số dương; đây là dấu bạn đã viết sai.\nBước 2: Viết lại phương trình\n$5-2x+2=9$, nên A là dòng sửa đúng.\nBước 3: Kiểm thêm bằng nghiệm\n$7-2x=9$ cho $x=-1$.\nThay vào đề: $5-2(-1-1)=9$, đúng. Chọn A."
});
  bank["pt-bac-nhat"]["nangCao"].push({
  "id": "l8-pt-bac-nhat-nang-cao-08",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Quan hệ tuổi ở hai thời điểm",
  "prompt": "Hiện nay tuổi mẹ gấp $3$ lần tuổi con. Tám năm trước, tuổi mẹ gấp $5$ lần tuổi con. Hỏi hiện nay con bao nhiêu tuổi?",
  "svg": "",
  "options": [
    "A. $12$ tuổi",
    "B. $16$ tuổi",
    "C. $20$ tuổi",
    "D. $8$ tuổi"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Biểu diễn tuổi ở cùng một thời điểm\nGọi tuổi con hiện nay là $x$ tuổi, $x>8$. Tuổi mẹ hiện nay là $3x$ tuổi.\nTám năm trước, hai tuổi lần lượt là $x-8$ và $3x-8$.\nBước 2: Lập và giải phương trình\n$3x-8=5(x-8)$.\n$3x-8=5x-40$, nên $32=2x$ và $x=16$.\nBước 3: Kiểm cả hai thời điểm\nHiện nay con $16$ tuổi, mẹ $48$ tuổi, đúng tỉ số $3$.\nTám năm trước con $8$ tuổi, mẹ $40$ tuổi, đúng tỉ số $5$.\nBước 4: Kết luận\nCon hiện nay $16$ tuổi. Chọn B."
});
  bank["pt-bac-nhat"]["nangCao"].push({
  "id": "l8-pt-bac-nhat-nang-cao-09",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Năng suất tăng và số sản phẩm làm thêm",
  "prompt": "Một tổ dự định làm $40$ sản phẩm mỗi giờ. Thực tế tổ làm đều $45$ sản phẩm mỗi giờ, làm nhiều hơn kế hoạch $30$ sản phẩm và xong sớm $1$ giờ. Bỏ qua thời gian nghỉ và sản phẩm hỏng. Theo kế hoạch, tổ phải làm bao nhiêu sản phẩm?",
  "svg": "",
  "options": [
    "A. $630$",
    "B. $560$",
    "C. $240$",
    "D. $600$"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Chọn thời gian dự định làm ẩn\nGọi thời gian theo kế hoạch là $t$ giờ, $t>1$.\nSố sản phẩm dự định là $40t$; thời gian thực tế là $t-1$ giờ.\nBước 2: Diễn tả số sản phẩm thực tế theo hai cách\nTheo năng suất thực tế, số sản phẩm là $45(t-1)$.\nTheo số sản phẩm làm thêm, số đó bằng $40t+30$.\nVì vậy $45(t-1)=40t+30$.\nBước 3: Giải và kiểm dữ kiện\n$45t-45=40t+30$, nên $5t=75$ và $t=15$.\nKế hoạch: $40\\cdot15=600$ sản phẩm.\nThực tế: $45\\cdot14=630$ sản phẩm, đúng là nhiều hơn $30$ và sớm $1$ giờ.\nBước 4: Kết luận\nKế hoạch là $600$ sản phẩm. Chọn D.\n$630$ là số thực tế; $560=40\\cdot14$ trộn năng suất kế hoạch với thời gian thực tế."
});
  bank["pt-bac-nhat"]["nangCao"].push({
  "id": "l8-pt-bac-nhat-nang-cao-10",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Số hai chữ số và số đảo chữ số",
  "prompt": "Một số tự nhiên có hai chữ số, tổng hai chữ số bằng $9$. Đổi chỗ hai chữ số được một số có hai chữ số lớn hơn số ban đầu $27$. Số ban đầu là bao nhiêu?",
  "svg": "",
  "options": [
    "A. $36$",
    "B. $63$",
    "C. $27$",
    "D. $45$"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Viết giá trị của hai số theo chữ số\nGọi chữ số hàng chục của số ban đầu là $x$. Chữ số hàng đơn vị là $9-x$.\nDo cả số ban đầu và số đổi chỗ đều có hai chữ số, $x$ là số nguyên và $1\\le x\\le8$.\nSố ban đầu là $10x+9-x=9x+9$.\nSố đổi chỗ là $10(9-x)+x=90-9x$.\nBước 2: Dùng hiệu đúng chiều\n$(90-9x)-(9x+9)=27$.\n$81-18x=27$, nên $x=3$.\nBước 3: Thử lại các điều kiện\nSố ban đầu là $36$, có tổng chữ số $3+6=9$.\nSố đổi chỗ là $63$ và $63-36=27$.\n$63$ ở B là số sau khi đổi chỗ; $27$ và $45$ có đúng tổng chữ số nhưng sai hiệu yêu cầu.\nBước 4: Kết luận\nChọn A."
});
  bank["pt-bac-nhat"]["hsg"].push({
  "id": "l8-pt-bac-nhat-hsg-06",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Mô tả bằng lời một phương trình có mẫu hằng",
  "prompt": "Một phần ba của một số, bớt đi $4$, bằng một phần năm của số đó cộng thêm $2$. Tìm số đó.",
  "svg": "",
  "correctAnswer": "45",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Dịch từng phần của đề thành phép tính\nGọi số cần tìm là $x$.\nMột phần ba của số đó bớt $4$ là $x/3-4$; vế còn lại là $x/5+2$.\nBước 2: Giải phương trình\n$\\frac{x}{3}-4=\\frac{x}{5}+2$.\nNhân cả hai vế với $15$ được $5x-60=3x+30$.\n$2x=90$, nên $x=45$.\nBước 3: Thử lại\n$45/3-4=11$ và $45/5+2=11$.\nHai giá trị bằng nhau, đúng đề bài.\nBước 4: Kết luận\nSố cần tìm là $45$."
});
  bank["pt-bac-nhat"]["hsg"].push({
  "id": "l8-pt-bac-nhat-hsg-07",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Hệ số nguyên cho nghiệm nguyên dương",
  "prompt": "Với $n$ là số nguyên dương, xét phương trình $(n+1)x=23-n$. Tính tổng tất cả giá trị của $n$ để phương trình có nghiệm là số nguyên dương.",
  "svg": "",
  "correctAnswer": "29",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Đưa về một tích có giá trị cố định\nVì $n+1>0$, phương trình có duy nhất nghiệm $x=(23-n)/(n+1)$.\nCộng $n+1$ vào hai vế của phương trình cho $(n+1)(x+1)=24$.\nBước 2: Lọc các ước phù hợp\nNếu $n,x$ đều nguyên dương thì $n+1$ và $x+1$ đều là số nguyên ít nhất bằng $2$.\nDo đó $n+1$ là một ước của $24$, nằm từ $2$ đến $12$.\nCác ước đó là $2,3,4,6,8,12$.\nBước 3: Kiểm chiều ngược lại\nTương ứng, $n$ nhận các giá trị $1,2,3,5,7,11$ và $x$ nhận các giá trị $11,7,5,3,2,1$.\nTừng cặp đều thỏa $(n+1)(x+1)=24$, nên thỏa phương trình ban đầu.\nƯớc $24$ không dùng được vì cho $x=0$, trái yêu cầu nguyên dương.\nBước 4: Tính tổng và kết luận\n$1+2+3+5+7+11=29$.\nTổng cần tìm là $29$."
});
  bank["pt-bac-nhat"]["hsg"].push({
  "id": "l8-pt-bac-nhat-hsg-08",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Phương trình giá trị tuyệt đối quy về hai nhánh tuyến tính",
  "prompt": "Tính tổng tất cả nghiệm thực của phương trình $|2x-3|=x+1$.",
  "svg": "",
  "correctAnswer": "14/3",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Ghi điều kiện và quy tắc bỏ giá trị tuyệt đối\nVế trái không âm, nên một nghiệm phải thỏa $x+1\\ge0$, tức $x\\ge-1$.\nVới $2x-3\\ge0$, ta có $|2x-3|=2x-3$.\nVới $2x-3<0$, ta có $|2x-3|=3-2x$.\nBước 2: Giải nhánh thứ nhất\nKhi $x\\ge3/2$, phương trình là $2x-3=x+1$, cho $x=4$.\nGiá trị $4$ thuộc nhánh này; thay vào đề được $5=5$.\nBước 3: Giải nhánh thứ hai\nKhi $-1\\le x<3/2$, phương trình là $3-2x=x+1$, cho $x=2/3$.\nGiá trị $2/3$ thuộc nhánh này; hai vế của đề cùng bằng $5/3$.\nHai nhánh đã phủ mọi giá trị có thể là nghiệm.\nBước 4: Tính tổng và kết luận\n$4+2/3=14/3$.\nTổng các nghiệm là $\\frac{14}{3}$."
});
  bank["pt-bac-nhat"]["hsg"].push({
  "id": "l8-pt-bac-nhat-hsg-09",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Trộn hai vế vẫn giữ tập nghiệm",
  "prompt": "Cho các số thực $a,b,c,d$. Chứng minh hai phương trình $ax+b=cx+d$ và $(2a+c)x+2b+d=(a+2c)x+b+2d$ luôn có cùng tập nghiệm, kể cả khi $a=c$.",
  "svg": "",
  "solution": "Bước 1: Đặt tên cho hai vế của phương trình đầu\nVới mỗi số thực $x$, đặt $F=ax+b$ và $G=cx+d$.\nPhương trình đầu viết thành $F=G$.\nBước 2: Viết phương trình thứ hai theo cùng hai biểu thức\nVế trái là $2F+G$; vế phải là $F+2G$.\nTrừ $F+G$ khỏi cả hai vế, ta được $2F+G=F+2G$ tương đương với $F=G$.\nPhép trừ này đúng với mọi $x$, không chia cho biểu thức nào có thể bằng $0$.\nBước 3: Nêu rõ trường hợp hệ số bằng nhau\nNếu $a=c$, phương trình đầu trở thành $b=d$.\nKhi $b=d$, mọi số thực đều là nghiệm; khi $b\\ne d$, không có nghiệm.\nPhép biến đổi tương đương ở bước 2 cho phương trình thứ hai đúng cùng kết quả đó.\nBước 4: Kết luận\nHai phương trình có cùng tập nghiệm với mọi bộ số thực $a,b,c,d$."
});
  bank["pt-bac-nhat"]["hsg"].push({
  "id": "l8-pt-bac-nhat-hsg-10",
  "lop": 8,
  "chuDe": "pt-bac-nhat",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Vị trí nghiệm từ hai giá trị trái dấu",
  "prompt": "Cho $P(x)=ax+b$ với $a\\ne0$. Biết $u<v$ và $P(u),P(v)$ trái dấu. Chứng minh phương trình $P(x)=0$ có duy nhất một nghiệm $x_0$ và $u<x_0<v$.",
  "svg": "",
  "solution": "Bước 1: Xác định nghiệm của phương trình bậc nhất\nVì $a\\ne0$, phương trình $ax+b=0$ có duy nhất nghiệm $x_0=-b/a$.\nDo $b=-ax_0$, với mọi $t$ ta viết được $P(t)=a(t-x_0)$.\nBước 2: Dùng dữ kiện hai giá trị trái dấu\n$P(u)P(v)<0$.\nThay biểu thức vừa có: $a^2(u-x_0)(v-x_0)<0$.\nVì $a^2>0$, chia cho $a^2$ giữ nguyên chiều bất đẳng thức, được $(u-x_0)(v-x_0)<0$.\nBước 3: Xác định thứ tự của nghiệm\nTích âm nghĩa là hai thừa số trái dấu.\nMặt khác $u<v$ nên $u-x_0<v-x_0$.\nVì vậy thừa số nhỏ hơn phải âm và thừa số lớn hơn phải dương: $u-x_0<0<v-x_0$.\nBước 4: Kết luận\nTừ hai bất đẳng thức trên, $u<x_0<v$. Đây là nghiệm duy nhất đã xác định ở bước 1."
});
  bank["tam-giac-dong-dang"]["kha"].push({
  "id": "l8-tam-giac-dong-dang-kha-04",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Nhận ra thiếu góc xen giữa",
  "prompt": "Xét hai tam giác không suy biến. Phát biểu nào sau đây KHÔNG phải một dấu hiệu đủ để khẳng định chúng đồng dạng?",
  "svg": "",
  "options": [
    "A. Hai cặp góc tương ứng bằng nhau.",
    "B. Ba cặp cạnh tương ứng tỉ lệ.",
    "C. Hai cặp cạnh tương ứng tỉ lệ và hai góc xen giữa bằng nhau.",
    "D. Hai cặp cạnh tương ứng tỉ lệ, không biết thêm điều kiện nào."
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Đối chiếu ba trường hợp đồng dạng\nA là trường hợp góc - góc; B là cạnh - cạnh - cạnh.\nC là cạnh - góc - cạnh, trong đó góc bằng nhau phải xen giữa hai cạnh đang xét.\nBước 2: Giải thích điều kiện còn thiếu ở D\nChỉ hai cặp cạnh tỉ lệ chưa quyết định được cặp cạnh còn lại hoặc góc xen giữa.\nVí dụ hai tam giác có ba cạnh $3,4,5$ và $6,8,9$ đều tồn tại vì mỗi cạnh nhỏ hơn tổng hai cạnh kia.\nHai cặp đầu tỉ lệ $3/6=4/8=1/2$, nhưng cặp cạnh lớn nhất có $5/9\\ne1/2$.\nNếu đồng dạng, ba cạnh theo thứ tự nhỏ đến lớn phải cùng tỉ số. Ví dụ này không thỏa điều đó.\nBước 3: Kết luận\nD chưa đủ. Chọn D."
});
  bank["tam-giac-dong-dang"]["kha"].push({
  "id": "l8-tam-giac-dong-dang-kha-05",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Đường cao tương ứng của hai tam giác",
  "prompt": "Hai tam giác nhọn $ABC$ và $DEF$ đồng dạng theo thứ tự đã viết, $AB/DE=2/3$. Các đường cao $AH,DK$ lần lượt hạ xuống $BC,EF$. Biết $AH=4$ cm. Tính $DK$.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"17.2\" data-origin=\"65,228.6\" width=\"100%\" role=\"img\" aria-label=\"Hình học lớp 8\"><line x1=\"116.6\" y1=\"159.8\" x2=\"65\" y2=\"228.6\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"65\" y1=\"228.6\" x2=\"202.6\" y2=\"228.6\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"202.6\" y1=\"228.6\" x2=\"116.6\" y2=\"159.8\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"366\" y1=\"125.4\" x2=\"288.6\" y2=\"228.6\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-E\"/><line x1=\"288.6\" y1=\"228.6\" x2=\"495\" y2=\"228.6\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-F\"/><line x1=\"495\" y1=\"228.6\" x2=\"366\" y2=\"125.4\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"F-D\"/><line x1=\"116.6\" y1=\"159.8\" x2=\"116.6\" y2=\"228.6\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-H\"/><line x1=\"366\" y1=\"125.4\" x2=\"366\" y2=\"228.6\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-K\"/><polyline points=\"116.6,216.6 104.6,216.6 104.6,228.6\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><polyline points=\"366,216.6 354,216.6 354,228.6\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><text x=\"98.6\" y=\"194.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >4 cm</text><circle cx=\"116.6\" cy=\"159.8\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"116.6\" y=\"141.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"65\" cy=\"228.6\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"53\" y=\"246.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"202.6\" cy=\"228.6\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"214.6\" y=\"246.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"366\" cy=\"125.4\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"366\" y=\"107.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"288.6\" cy=\"228.6\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"276.6\" y=\"246.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text><circle cx=\"495\" cy=\"228.6\" r=\"2.5\" fill=\"#1e40af\" data-point=\"F\"/><text x=\"507\" y=\"246.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">F</text><circle cx=\"116.6\" cy=\"228.6\" r=\"2.5\" fill=\"#1e40af\" data-point=\"H\"/><text x=\"116.6\" y=\"248.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">H</text><circle cx=\"366\" cy=\"228.6\" r=\"2.5\" fill=\"#1e40af\" data-point=\"K\"/><text x=\"366\" y=\"248.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">K</text><text x=\"280\" y=\"336\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >AB / DE = 2 / 3</text></svg>",
  "options": [
    "A. $8/3$ cm",
    "B. $6$ cm",
    "C. $9$ cm",
    "D. $4$ cm"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Xét hai tam giác vuông tạo bởi đường cao\n$\\widehat{AHB}=\\widehat{DKE}=90°$.\nVì $H,K$ nằm trên hai cạnh đáy và hai tam giác lớn đồng dạng, $\\widehat{ABH}=\\widehat{DEK}$.\nDo đó $\\Delta ABH ∼ \\Delta DEK$ theo góc - góc.\nBước 2: Dùng tỉ số cạnh tương ứng\n$AH/DK=AB/DE=2/3$.\nThay $AH=4$: $4/DK=2/3$, nên $DK=6$ cm.\nBước 3: Kết luận\nChọn B. Đường cao tăng cùng tỉ số độ dài $3/2$, không tăng theo bình phương tỉ số."
});
  bank["tam-giac-dong-dang"]["nangCao"].push({
  "id": "l8-tam-giac-dong-dang-nang-cao-08",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Đường trung tuyến tương ứng và cạnh đáy",
  "prompt": "Cho $\\Delta ABC ∼ \\Delta DEF$ theo thứ tự đã viết. Các điểm $M,N$ là trung điểm của $BC,EF$. Biết $AM=5$ cm, $DN=7{,}5$ cm và $BC=8$ cm. Tính $EF$.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"18.695652173913043\" data-origin=\"139.7826086956522,247.1086956521739\" width=\"100%\" role=\"img\" aria-label=\"Hình học lớp 8\"><line x1=\"139.7826086956522\" y1=\"153.6304347826087\" x2=\"65.00000000000001\" y2=\"247.1086956521739\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"65.00000000000001\" y1=\"247.1086956521739\" x2=\"214.56521739130437\" y2=\"247.1086956521739\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"214.56521739130437\" y1=\"247.1086956521739\" x2=\"139.7826086956522\" y2=\"153.6304347826087\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"382.82608695652175\" y1=\"106.8913043478261\" x2=\"270.6521739130435\" y2=\"247.1086956521739\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-E\"/><line x1=\"270.6521739130435\" y1=\"247.1086956521739\" x2=\"495\" y2=\"247.1086956521739\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-F\"/><line x1=\"495\" y1=\"247.1086956521739\" x2=\"382.82608695652175\" y2=\"106.8913043478261\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"F-D\"/><line x1=\"139.7826086956522\" y1=\"153.6304347826087\" x2=\"139.7826086956522\" y2=\"247.1086956521739\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-M\"/><line x1=\"382.82608695652175\" y1=\"106.8913043478261\" x2=\"382.82608695652175\" y2=\"247.1086956521739\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-N\"/><line x1=\"102.3913043478261\" y1=\"242.1086956521739\" x2=\"102.3913043478261\" y2=\"252.1086956521739\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"177.17391304347828\" y1=\"242.1086956521739\" x2=\"177.17391304347828\" y2=\"252.1086956521739\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"323.7391304347826\" y1=\"242.1086956521739\" x2=\"323.7391304347826\" y2=\"252.1086956521739\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"329.7391304347826\" y1=\"242.1086956521739\" x2=\"329.7391304347826\" y2=\"252.1086956521739\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"435.9130434782609\" y1=\"242.1086956521739\" x2=\"435.9130434782609\" y2=\"252.1086956521739\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"441.9130434782609\" y1=\"242.1086956521739\" x2=\"441.9130434782609\" y2=\"252.1086956521739\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><text x=\"123.78260869565219\" y=\"200.3695652173913\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >5 cm</text><text x=\"363.82608695652175\" y=\"177\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >7,5 cm</text><text x=\"139.7826086956522\" y=\"293.1086956521739\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >8 cm</text><circle cx=\"139.7826086956522\" cy=\"153.6304347826087\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"139.7826086956522\" y=\"135.6304347826087\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"65.00000000000001\" cy=\"247.1086956521739\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"53.000000000000014\" y=\"265.1086956521739\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"214.56521739130437\" cy=\"247.1086956521739\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"226.56521739130437\" y=\"265.1086956521739\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"382.82608695652175\" cy=\"106.8913043478261\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"382.82608695652175\" y=\"88.8913043478261\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"270.6521739130435\" cy=\"247.1086956521739\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"258.6521739130435\" y=\"265.1086956521739\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text><circle cx=\"495\" cy=\"247.1086956521739\" r=\"2.5\" fill=\"#1e40af\" data-point=\"F\"/><text x=\"507\" y=\"265.1086956521739\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">F</text><circle cx=\"139.7826086956522\" cy=\"247.1086956521739\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"139.7826086956522\" y=\"267.1086956521739\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"382.82608695652175\" cy=\"247.1086956521739\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"382.82608695652175\" y=\"267.1086956521739\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text></svg>",
  "options": [
    "A. $16/3$ cm",
    "B. $10{,}5$ cm",
    "C. $12$ cm",
    "D. $18$ cm"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Liên hệ trung tuyến với tỉ số đồng dạng\nĐặt $k=AB/DE=BC/EF$.\nVì $M,N$ là trung điểm, $BM/EN=(BC/2)/(EF/2)=k$.\nHai góc $ABM,DEN$ bằng nhau do chúng là hai góc tương ứng của hai tam giác lớn.\nVậy $\\Delta ABM ∼ \\Delta DEN$ theo cạnh - góc - cạnh.\nBước 2: Tìm tỉ số từ hai trung tuyến\n$AM/DN=k$, nên $k=5/7{,}5=2/3$.\nDo đó $BC/EF=2/3$, suy ra $EF=8\\cdot3/2=12$ cm.\nBước 3: Kiểm và kết luận\nTỉ số $8/12=2/3$ đúng bằng $5/7{,}5$.\nChọn C."
});
  bank["tam-giac-dong-dang"]["nangCao"].push({
  "id": "l8-tam-giac-dong-dang-nang-cao-09",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Diện tích phần chênh hai hình đồng dạng",
  "prompt": "Hai tam giác đồng dạng có tỉ số cạnh của hình lớn so với hình nhỏ là $3/2$. Diện tích hình lớn nhiều hơn hình nhỏ $80$ cm². Tính diện tích hình nhỏ.",
  "svg": "",
  "options": [
    "A. $64$ cm²",
    "B. $160$ cm²",
    "C. $144$ cm²",
    "D. $36$ cm²"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Đổi tỉ số cạnh thành tỉ số diện tích\nTỉ số diện tích hình lớn so với hình nhỏ là $(3/2)^2=9/4$.\nBước 2: Dùng phần diện tích chênh lệch\nGọi diện tích hình nhỏ là $S>0$. Khi đó $(9/4)S-S=80$.\n$(5/4)S=80$, nên $S=64$ cm².\nBước 3: Kiểm và kết luận\nDiện tích hình lớn là $(9/4)\\cdot64=144$ cm²; hiệu $144-64=80$ cm² đúng đề.\nChọn A. $160$ ở B là kết quả dùng nhầm tỉ số cạnh $3/2$ cho diện tích; $144$ là diện tích hình lớn."
});
  bank["tam-giac-dong-dang"]["nangCao"].push({
  "id": "l8-tam-giac-dong-dang-nang-cao-10",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Tìm tâm phối cảnh từ hai hình đã cho",
  "prompt": "Trên mặt phẳng tọa độ, cho $A(0;2),B(2;0),C(3;3)$ và $A'(2;6),B'(6;2),C'(8;8)$. Hai tam giác là hai hình đồng dạng phối cảnh tỉ số $2$: $A,B,C$ lần lượt nằm trên các tia $OA',OB',OC'$ và $OA'=2OA$, $OB'=2OB$, $OC'=2OC$. Tâm $O$ là điểm nào?",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"23.5\" data-origin=\"209.5,247.5\" width=\"100%\" role=\"img\" aria-label=\"Hình học lớp 8\"><line x1=\"209.5\" y1=\"200.5\" x2=\"256.5\" y2=\"247.5\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"256.5\" y1=\"247.5\" x2=\"280\" y2=\"177\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"280\" y1=\"177\" x2=\"209.5\" y2=\"200.5\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"256.5\" y1=\"106.5\" x2=\"350.5\" y2=\"200.5\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"Ap-Bp\"/><line x1=\"350.5\" y1=\"200.5\" x2=\"397.5\" y2=\"59.5\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"Bp-Cp\"/><line x1=\"397.5\" y1=\"59.5\" x2=\"256.5\" y2=\"106.5\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"Cp-Ap\"/><circle cx=\"209.5\" cy=\"200.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"196.5\" y=\"188.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"256.5\" cy=\"247.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"266.5\" y=\"265.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"280\" cy=\"177\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"266\" y=\"165\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"256.5\" cy=\"106.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"Ap\"/><text x=\"243.5\" y=\"94.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A′</text><circle cx=\"350.5\" cy=\"200.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"Bp\"/><text x=\"365.5\" y=\"208.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B′</text><circle cx=\"397.5\" cy=\"59.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"Cp\"/><text x=\"397.5\" y=\"41.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C′</text><circle cx=\"162.5\" cy=\"294.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"K\"/><text x=\"149.5\" y=\"306.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">K</text><circle cx=\"209.5\" cy=\"247.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"L\"/><text x=\"219.5\" y=\"234.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">L</text><circle cx=\"186\" cy=\"247.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"174\" y=\"235.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"209.5\" cy=\"294.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"217.5\" y=\"312.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text><text x=\"280\" y=\"336\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >Vị trí các điểm dựng đúng tọa độ đã cho</text></svg>",
  "options": [
    "A. $L(0;0)$",
    "B. $M(-1;0)$",
    "C. $N(0;-2)$",
    "D. $K(-2;-2)$"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Dùng tỉ số 2 để tìm một điều kiện về trung điểm\nVì $A,A'$ cùng thuộc một tia gốc $O$ và $OA'=2OA$, điểm $A$ là trung điểm của $OA'$.\nTọa độ trung điểm bằng trung bình hai tọa độ tương ứng, nên $x_O=2x_A-x_{A'}=2\\cdot0-2=-2$.\nTương tự $y_O=2y_A-y_{A'}=2\\cdot2-6=-2$.\nTâm nếu có phải là $K(-2;-2)$.\nBước 2: Kiểm đủ các cặp đỉnh\nTrung điểm của $KA'$ là $(({-2}+2)/2;({-2}+6)/2)=(0;2)=A$.\nTrung điểm của $KB'$ là $(({-2}+6)/2;({-2}+2)/2)=(2;0)=B$.\nTrung điểm của $KC'$ là $(({-2}+8)/2;({-2}+8)/2)=(3;3)=C$.\nVì mỗi đỉnh gốc là trung điểm của đoạn nối tâm với đỉnh ảnh, cả điều kiện cùng tia và tỉ số $2$ đều đúng.\nBước 3: Kết luận\nTâm là K. Chọn D. Chỉ nằm trên một đường nối hai đỉnh tương ứng, như M trên đường AA', chưa đủ để làm tâm."
});
  bank["tam-giac-dong-dang"]["hsg"].push({
  "id": "l8-tam-giac-dong-dang-hsg-06",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Diện tích thực từ diện tích bản vẽ",
  "prompt": "Một khu đất có bản vẽ đồng dạng với hình thực theo tỉ lệ $1:200$. Diện tích khu đất trên bản vẽ là $5$ cm². Tính diện tích thực của khu đất theo m².",
  "svg": "",
  "correctAnswer": "20",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Dùng tỉ lệ diện tích\nMỗi độ dài thực bằng $200$ lần độ dài trên bản vẽ.\nDiện tích thực vì vậy bằng $200^2=40000$ lần diện tích bản vẽ.\nBước 2: Tính rồi đổi đơn vị\nDiện tích thực là $5\\cdot40000=200000$ cm².\nVì $1$ m² bằng $10000$ cm², diện tích đó là $200000/10000=20$ m².\nBước 3: Kết luận\nDiện tích thực là $20$ m²."
});
  bank["tam-giac-dong-dang"]["hsg"].push({
  "id": "l8-tam-giac-dong-dang-hsg-07",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Ba cạnh chứa ẩn của hai tam giác đồng dạng",
  "prompt": "Hai tam giác có ba cạnh lần lượt là $x,x+2,x+4$ và $x+4,x+8,x+12$ (cm), với $x>0$. Biết hai tam giác đồng dạng. Tính tổng chu vi của chúng.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"15.357142857142858\" data-origin=\"65,221.60846889828184\" width=\"100%\" role=\"img\" aria-label=\"Hình học lớp 8\"><line x1=\"107.23214285714286\" y1=\"177\" x2=\"65\" y2=\"221.60846889828184\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"65\" y1=\"221.60846889828184\" x2=\"187.85714285714286\" y2=\"221.60846889828184\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"187.85714285714286\" y1=\"221.60846889828184\" x2=\"107.23214285714286\" y2=\"177\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"333.75\" y1=\"132.39153110171813\" x2=\"249.28571428571428\" y2=\"221.60846889828184\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-E\"/><line x1=\"249.28571428571428\" y1=\"221.60846889828184\" x2=\"495\" y2=\"221.60846889828184\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-F\"/><line x1=\"495\" y1=\"221.60846889828184\" x2=\"333.75\" y2=\"132.39153110171813\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"F-D\"/><text x=\"73.0447526351214\" y=\"186.92923444914092\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >x</text><text x=\"156.25885538610956\" y=\"183.55423444914092\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >x + 2</text><text x=\"126.42857142857143\" y=\"246.60846889828184\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >x + 4</text><text x=\"278.4465383494071\" y=\"164.625\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >x + 4</text><text x=\"423.0892125289667\" y=\"161.25\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >x + 8</text><text x=\"372.1428571428571\" y=\"246.60846889828184\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >x + 12</text><circle cx=\"107.23214285714286\" cy=\"177\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"107.23214285714286\" y=\"159\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"65\" cy=\"221.60846889828184\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"53\" y=\"239.60846889828184\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"187.85714285714286\" cy=\"221.60846889828184\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"199.85714285714286\" y=\"239.60846889828184\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"333.75\" cy=\"132.39153110171813\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"333.75\" y=\"114.39153110171813\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"249.28571428571428\" cy=\"221.60846889828184\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"237.28571428571428\" y=\"239.60846889828184\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text><circle cx=\"495\" cy=\"221.60846889828184\" r=\"2.5\" fill=\"#1e40af\" data-point=\"F\"/><text x=\"507\" y=\"239.60846889828184\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">F</text></svg>",
  "correctAnswer": "54",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Xác định các cạnh tương ứng\nTrong mỗi bộ, các cạnh đã xếp theo thứ tự tăng dần.\nĐồng dạng làm mọi độ dài tăng cùng một tỉ số dương, nên cạnh nhỏ, vừa, lớn phải ghép đúng thứ tự.\nVì thế $x/(x+4)=(x+2)/(x+8)$.\nBước 2: Giải điều kiện cần\nCác mẫu dương vì $x>0$. Nhân chéo: $x(x+8)=(x+2)(x+4)$.\n$x^2+8x=x^2+6x+8$, nên $2x=8$ và $x=4$.\nBước 3: Kiểm cặp cạnh thứ ba và sự tồn tại\nHai bộ cạnh là $4,6,8$ và $8,12,16$.\nTa có $4/8=6/12=8/16=1/2$.\n$4+6>8$ và $8+12>16$; các cạnh đều dương, nên cả hai tam giác không suy biến và đồng dạng theo ba cạnh.\nBước 4: Tính tổng và kết luận\nHai chu vi là $18$ cm và $36$ cm.\nTổng chu vi là $54$ cm."
});
  bank["tam-giac-dong-dang"]["hsg"].push({
  "id": "l8-tam-giac-dong-dang-hsg-08",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Cả ảnh thu và ảnh phóng từ độ dịch chuyển",
  "prompt": "Tam giác $ABC$ có diện tích $8$ cm². Một phép đồng dạng phối cảnh tâm $O$, tỉ số $k>0$, biến $A,B,C$ thành $A',B',C'$ trên các tia $OA,OB,OC$. Biết $OA=3$ cm, $OB=5$ cm và $AA'+BB'=4$ cm. Tính tổng tất cả giá trị có thể có của diện tích tam giác $A'B'C'$.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"47\" data-origin=\"186,294.5\" width=\"100%\" role=\"img\" aria-label=\"Hình học lớp 8\"><line x1=\"327\" y1=\"294.5\" x2=\"186\" y2=\"59.5\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"186\" y1=\"59.5\" x2=\"374\" y2=\"122.16666666666669\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"374\" y1=\"122.16666666666669\" x2=\"327\" y2=\"294.5\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"186\" y1=\"294.5\" x2=\"327\" y2=\"294.5\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"O-A\"/><line x1=\"186\" y1=\"294.5\" x2=\"186\" y2=\"59.5\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"O-B\"/><text x=\"256.5\" y=\"316.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >3 cm</text><text x=\"211\" y=\"177\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >5 cm</text><circle cx=\"186\" cy=\"294.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"O\"/><text x=\"172\" y=\"306.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">O</text><circle cx=\"327\" cy=\"294.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"339\" y=\"308.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"186\" cy=\"59.5\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"174\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"374\" cy=\"122.16666666666669\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"389\" y=\"117.16666666666669\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><text x=\"280\" y=\"348\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" >Chỉ vẽ hình gốc; diện tích ABC = 8 cm²</text></svg>",
  "correctAnswer": "20",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Phân biệt ảnh thu nhỏ và ảnh phóng to\nVì hai điểm gốc và ảnh cùng trên một tia, $AA'=|OA'-OA|=3|k-1|$.\nTương tự $BB'=5|k-1|$.\nĐề bài cho $8|k-1|=4$, hay $|k-1|=1/2$.\nBước 2: Xét đủ hai tỉ số dương\nNếu ảnh phóng to, $k-1=1/2$, nên $k=3/2$.\nNếu ảnh thu nhỏ, $1-k=1/2$, nên $k=1/2$.\nCả hai tỉ số đều dương và đều cho $AA'+BB'=4$ cm; không được chỉ giữ ảnh phóng to.\nBước 3: Tìm hai diện tích\nDiện tích ảnh bằng $k^2$ lần diện tích gốc.\nVới $k=3/2$, diện tích là $8\\cdot9/4=18$ cm².\nVới $k=1/2$, diện tích là $8\\cdot1/4=2$ cm².\nBước 4: Kết luận\nTổng các diện tích có thể là $18+2=20$ cm²."
});
  bank["tam-giac-dong-dang"]["hsg"].push({
  "id": "l8-tam-giac-dong-dang-hsg-09",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Chứng minh tỉ số đường cao và diện tích",
  "prompt": "Hai tam giác nhọn $ABC,DEF$ đồng dạng theo thứ tự đã viết. Kẻ đường cao $AH$ và $DK$ xuống $BC$ và $EF$. Chứng minh $AH/DK=AB/DE$; từ đó giải thích vì sao $S_{ABC}/S_{DEF}=(AB/DE)^2$.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"17.768595041322314\" data-origin=\"65,251.62809917355372\" width=\"100%\" role=\"img\" aria-label=\"Hình học lớp 8\"><line x1=\"118.30578512396694\" y1=\"145.01652892561984\" x2=\"65\" y2=\"251.62809917355372\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"65\" y1=\"251.62809917355372\" x2=\"207.1487603305785\" y2=\"251.62809917355372\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"207.1487603305785\" y1=\"251.62809917355372\" x2=\"118.30578512396694\" y2=\"145.01652892561984\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"370.61983471074376\" y1=\"102.3719008264463\" x2=\"295.9917355371901\" y2=\"251.62809917355372\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-E\"/><line x1=\"295.9917355371901\" y1=\"251.62809917355372\" x2=\"495\" y2=\"251.62809917355372\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-F\"/><line x1=\"495\" y1=\"251.62809917355372\" x2=\"370.61983471074376\" y2=\"102.3719008264463\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"F-D\"/><line x1=\"118.30578512396694\" y1=\"145.01652892561984\" x2=\"118.30578512396694\" y2=\"251.62809917355372\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-H\"/><line x1=\"370.61983471074376\" y1=\"102.3719008264463\" x2=\"370.61983471074376\" y2=\"251.62809917355372\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-K\"/><polyline points=\"118.30578512396694,239.62809917355372 106.30578512396694,239.62809917355372 106.30578512396694,251.62809917355372\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><polyline points=\"370.61983471074376,239.62809917355372 358.61983471074376,239.62809917355372 358.61983471074376,251.62809917355372\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><circle cx=\"118.30578512396694\" cy=\"145.01652892561984\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"118.30578512396694\" y=\"127.01652892561984\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"65\" cy=\"251.62809917355372\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"53\" y=\"269.6280991735537\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"207.1487603305785\" cy=\"251.62809917355372\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"219.1487603305785\" y=\"269.6280991735537\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"370.61983471074376\" cy=\"102.3719008264463\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"370.61983471074376\" y=\"84.3719008264463\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"295.9917355371901\" cy=\"251.62809917355372\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"283.9917355371901\" y=\"269.6280991735537\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text><circle cx=\"495\" cy=\"251.62809917355372\" r=\"2.5\" fill=\"#1e40af\" data-point=\"F\"/><text x=\"507\" y=\"269.6280991735537\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">F</text><circle cx=\"118.30578512396694\" cy=\"251.62809917355372\" r=\"2.5\" fill=\"#1e40af\" data-point=\"H\"/><text x=\"118.30578512396694\" y=\"271.6280991735537\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">H</text><circle cx=\"370.61983471074376\" cy=\"251.62809917355372\" r=\"2.5\" fill=\"#1e40af\" data-point=\"K\"/><text x=\"370.61983471074376\" y=\"271.6280991735537\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">K</text></svg>",
  "solution": "Bước 1: Chọn hai tam giác vuông có cạnh tương ứng cần tìm\nHai tam giác $ABH,DEK$ đều vuông vì $AH\\perp BC$ và $DK\\perp EF$.\nDo tam giác lớn nhọn, $H,K$ nằm trong hai cạnh đáy; vì thế $\\widehat{ABH}=\\widehat{ABC}$ và $\\widehat{DEK}=\\widehat{DEF}$.\nHai góc ở B và E bằng nhau theo giả thiết đồng dạng.\nBước 2: Chứng minh tỉ số đường cao\nTheo góc - góc, $\\Delta ABH ∼ \\Delta DEK$.\nSuy ra $AH/DK=AB/DE$. Các đường cao đều dương vì tam giác không suy biến.\nBước 3: Kết hợp với công thức diện tích\nĐặt $k=AB/DE$. Giả thiết còn cho $BC/EF=k$.\n$S_{ABC}/S_{DEF}=(BC\\cdot AH/2)/(EF\\cdot DK/2)=(BC/EF)(AH/DK)=k^2$.\nBước 4: Kết luận\n$AH/DK=AB/DE$ và $S_{ABC}/S_{DEF}=(AB/DE)^2$, đúng điều cần chứng minh."
});
  bank["tam-giac-dong-dang"]["hsg"].push({
  "id": "l8-tam-giac-dong-dang-hsg-10",
  "lop": 8,
  "chuDe": "tam-giac-dong-dang",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Dữ kiện hai trung tuyến đủ suy đồng dạng",
  "prompt": "Cho hai tam giác không suy biến $ABC,DEF$. Các điểm $M,N$ lần lượt là trung điểm của $BC,EF$. Biết $AM/DN=BM/EN$ và $\\widehat{AMB}=\\widehat{DNE}$. Chứng minh $\\Delta ABC ∼ \\Delta DEF$ theo đúng thứ tự đã viết.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 360\" data-unit=\"16.044776119402986\" data-origin=\"64.99999999999997,254.01492537313436\" width=\"100%\" role=\"img\" aria-label=\"Hình học lớp 8\"><line x1=\"97.08955223880594\" y1=\"157.74626865671644\" x2=\"64.99999999999997\" y2=\"254.01492537313436\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-B\"/><line x1=\"64.99999999999997\" y1=\"254.01492537313436\" x2=\"193.35820895522386\" y2=\"254.01492537313436\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"B-C\"/><line x1=\"193.35820895522386\" y1=\"254.01492537313436\" x2=\"97.08955223880594\" y2=\"157.74626865671644\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"C-A\"/><line x1=\"340.9701492537313\" y1=\"99.98507462686567\" x2=\"289.6268656716418\" y2=\"254.01492537313436\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-E\"/><line x1=\"289.6268656716418\" y1=\"254.01492537313436\" x2=\"495\" y2=\"254.01492537313436\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"E-F\"/><line x1=\"495\" y1=\"254.01492537313436\" x2=\"340.9701492537313\" y2=\"99.98507462686567\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"F-D\"/><line x1=\"97.08955223880594\" y1=\"157.74626865671644\" x2=\"129.17910447761193\" y2=\"254.01492537313436\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"A-M\"/><line x1=\"340.9701492537313\" y1=\"99.98507462686567\" x2=\"392.3134328358209\" y2=\"254.01492537313436\" stroke=\"#1e40af\" stroke-width=\"2\" data-edge=\"D-N\"/><line x1=\"97.08955223880595\" y1=\"249.01492537313436\" x2=\"97.08955223880595\" y2=\"259.01492537313436\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"161.2686567164179\" y1=\"249.01492537313436\" x2=\"161.2686567164179\" y2=\"259.01492537313436\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"0\"/><line x1=\"337.97014925373134\" y1=\"249.01492537313436\" x2=\"337.97014925373134\" y2=\"259.01492537313436\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"343.97014925373134\" y1=\"249.01492537313436\" x2=\"343.97014925373134\" y2=\"259.01492537313436\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"440.65671641791045\" y1=\"249.01492537313436\" x2=\"440.65671641791045\" y2=\"259.01492537313436\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><line x1=\"446.65671641791045\" y1=\"249.01492537313436\" x2=\"446.65671641791045\" y2=\"259.01492537313436\" stroke=\"#b91c1c\" stroke-width=\"2\" data-equal=\"1\"/><path d=\"M 122.53832139125832 234.09257611407358 A 21 21 0 0 0 108.17910447761193 254.01492537313436\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"115.38798732962739\" y1=\"244.07485053385037\" x2=\"108.89804984822291\" y2=\"239.39716825654025\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"m\"/><path d=\"M 385.67264974946727 234.09257611407358 A 21 21 0 0 0 371.3134328358209 254.01492537313436\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/><line x1=\"378.52231568783634\" y1=\"244.07485053385037\" x2=\"372.0323782064319\" y2=\"239.39716825654025\" stroke=\"#b91c1c\" stroke-width=\"1.5\" data-angle-equal=\"m\"/><circle cx=\"97.08955223880594\" cy=\"157.74626865671644\" r=\"2.5\" fill=\"#1e40af\" data-point=\"A\"/><text x=\"97.08955223880594\" y=\"139.74626865671644\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">A</text><circle cx=\"64.99999999999997\" cy=\"254.01492537313436\" r=\"2.5\" fill=\"#1e40af\" data-point=\"B\"/><text x=\"52.99999999999997\" y=\"272.01492537313436\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">B</text><circle cx=\"193.35820895522386\" cy=\"254.01492537313436\" r=\"2.5\" fill=\"#1e40af\" data-point=\"C\"/><text x=\"205.35820895522386\" y=\"272.01492537313436\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">C</text><circle cx=\"340.9701492537313\" cy=\"99.98507462686567\" r=\"2.5\" fill=\"#1e40af\" data-point=\"D\"/><text x=\"340.9701492537313\" y=\"81.98507462686567\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">D</text><circle cx=\"289.6268656716418\" cy=\"254.01492537313436\" r=\"2.5\" fill=\"#1e40af\" data-point=\"E\"/><text x=\"277.6268656716418\" y=\"272.01492537313436\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">E</text><circle cx=\"495\" cy=\"254.01492537313436\" r=\"2.5\" fill=\"#1e40af\" data-point=\"F\"/><text x=\"507\" y=\"272.01492537313436\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">F</text><circle cx=\"129.17910447761193\" cy=\"254.01492537313436\" r=\"2.5\" fill=\"#1e40af\" data-point=\"M\"/><text x=\"129.17910447761193\" y=\"274.01492537313436\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">M</text><circle cx=\"392.3134328358209\" cy=\"254.01492537313436\" r=\"2.5\" fill=\"#1e40af\" data-point=\"N\"/><text x=\"392.3134328358209\" y=\"274.01492537313436\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"4\" paint-order=\"stroke\" font-weight=\"bold\">N</text></svg>",
  "solution": "Bước 1: Dùng dữ kiện ở hai trung tuyến\nTrong hai tam giác $AMB,DNE$, hai cặp cạnh kề góc M,N thỏa $AM/DN=BM/EN$.\nHai góc xen giữa $AMB,DNE$ bằng nhau theo giả thiết.\nDo đó $\\Delta AMB ∼ \\Delta DNE$ theo cạnh - góc - cạnh.\nBước 2: Rút ra tỉ số cạnh và góc của hai tam giác lớn\nTừ đồng dạng vừa có, $AB/DE=BM/EN$ và $\\widehat{ABM}=\\widehat{DEN}$.\nVì M,N là trung điểm, $BC=2BM$, $EF=2EN$, nên $BC/EF=BM/EN$.\nM nằm trong BC và N nằm trong EF, nên $\\widehat{ABM}=\\widehat{ABC}$, $\\widehat{DEN}=\\widehat{DEF}$.\nBước 3: Áp dụng trường hợp đồng dạng lần thứ hai\nTa đã có $AB/DE=BC/EF$ và $\\widehat{ABC}=\\widehat{DEF}$.\nĐây là hai cặp cạnh tỉ lệ và hai góc xen giữa bằng nhau của tam giác lớn.\nBước 4: Kết luận\nTheo cạnh - góc - cạnh, $\\Delta ABC ∼ \\Delta DEF$. Thứ tự tương ứng là A với D, B với E, C với F."
});
  bank["ham-so"]["kha"].push({
  "id": "l8-ham-so-kha-04",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Ý nghĩa tung độ gốc",
  "prompt": "Đồ thị hàm số $y=-3x+7$ cắt trục $Oy$ tại điểm nào?",
  "svg": "",
  "options": [
    "A. $(7;0)$",
    "B. $(0;7)$",
    "C. $(0;-3)$",
    "D. $(0;-7)$"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Dùng đặc điểm điểm trên trục tung\nMọi điểm trên trục $Oy$ có hoành độ $x=0$.\nBước 2: Tìm tung độ\nThay $x=0$ vào $y=-3x+7$, được $y=7$.\nBước 3: Kết luận\nGiao điểm là $(0;7)$. Chọn B.\nA đảo vị trí hai tọa độ; C lấy nhầm hệ số góc làm tung độ gốc; D đổi sai dấu tung độ."
});
  bank["ham-so"]["kha"].push({
  "id": "l8-ham-so-kha-05",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Đồ thị đi qua gốc sau thu gọn",
  "prompt": "Đồ thị hàm số nào dưới đây đi qua gốc tọa độ $O$?",
  "svg": "",
  "options": [
    "A. $y=4(x-2)+2$",
    "B. $y=4(x+2)+8$",
    "C. $y=4(x-2)-8$",
    "D. $y=4(x-2)+8$"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Nêu điều kiện đi qua gốc tọa độ\nĐiểm $O$ có tọa độ $(0;0)$, nên thay $x=0$ phải nhận được $y=0$.\nBước 2: Kiểm từng hàm số\nTại $x=0$, các giá trị ở A, B, C, D lần lượt là $-6,16,-16,0$.\nChỉ D cho đúng tung độ $0$.\nBước 3: Kết luận\nỞ D, thu gọn được $y=4x$. Chọn D."
});
  bank["ham-so"]["nangCao"].push({
  "id": "l8-ham-so-nang-cao-08",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Đọc hệ số góc với thang số trục khác nhau",
  "prompt": "Đường thẳng $d$ đi qua $O$ và $P$ như hình. Một khoảng lưới theo trục $Ox$ ứng với $2$ đơn vị, theo trục $Oy$ ứng với $3$ đơn vị. Hệ số góc của $d$ bằng bao nhiêu?",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 360\" ><rect width=\"560\" height=\"360\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><g data-origin-x=\"170\" data-origin-y=\"250\" data-scale-x=\"42\" data-scale-y=\"28\"><text x=\"280\" y=\"25\" text-anchor=\"middle\">Đọc số ghi trên từng trục</text><line x1=\"86\" y1=\"45\" x2=\"86\" y2=\"310\" stroke=\"#dbeafe\"/><text x=\"86\" y=\"273\" text-anchor=\"middle\">-2</text><line x1=\"170\" y1=\"45\" x2=\"170\" y2=\"310\" stroke=\"#dbeafe\"/><text x=\"170\" y=\"273\" text-anchor=\"middle\"></text><line x1=\"254\" y1=\"45\" x2=\"254\" y2=\"310\" stroke=\"#dbeafe\"/><text x=\"254\" y=\"273\" text-anchor=\"middle\">2</text><line x1=\"338\" y1=\"45\" x2=\"338\" y2=\"310\" stroke=\"#dbeafe\"/><text x=\"338\" y=\"273\" text-anchor=\"middle\">4</text><line x1=\"422\" y1=\"45\" x2=\"422\" y2=\"310\" stroke=\"#dbeafe\"/><text x=\"422\" y=\"273\" text-anchor=\"middle\">6</text><line x1=\"506\" y1=\"45\" x2=\"506\" y2=\"310\" stroke=\"#dbeafe\"/><text x=\"506\" y=\"273\" text-anchor=\"middle\">8</text><line x1=\"70\" y1=\"250\" x2=\"525\" y2=\"250\" stroke=\"#dbeafe\"/><text x=\"157\" y=\"256\" text-anchor=\"end\"></text><line x1=\"70\" y1=\"166\" x2=\"525\" y2=\"166\" stroke=\"#dbeafe\"/><text x=\"157\" y=\"172\" text-anchor=\"end\">3</text><line x1=\"70\" y1=\"82\" x2=\"525\" y2=\"82\" stroke=\"#dbeafe\"/><text x=\"157\" y=\"88\" text-anchor=\"end\">6</text><path d=\"M70 250H530 M170 315V42\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"536\" y=\"242\">x</text><text x=\"179\" y=\"43\">y</text><text x=\"151\" y=\"273\">O</text><line data-graph=\"d\" data-a=\"0.75\" data-b=\"0\" x1=\"107\" y1=\"281.5\" x2=\"506\" y2=\"82\" stroke=\"#2563eb\" stroke-width=\"3\"/><path d=\"M338 250V166H170\" fill=\"none\" stroke=\"#64748b\" stroke-dasharray=\"5 4\"/><circle data-point=\"P\" data-x=\"4\" data-y=\"3\" cx=\"338\" cy=\"166\" r=\"4\"/><text x=\"348\" y=\"156\">P</text></g></g></svg>",
  "options": [
    "A. $1/2$",
    "B. $4/3$",
    "C. $3/4$",
    "D. $3/2$"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Đọc tọa độ theo số ghi trên trục\nĐiểm $P$ cách $O$ hai khoảng lưới theo chiều ngang, nên hoành độ là $2\\cdot2=4$.\nĐiểm $P$ cao hơn trục hoành một khoảng lưới, nên tung độ là $1\\cdot3=3$.\nBước 2: Dùng phương trình đường thẳng qua gốc\nVì $d$ đi qua $O$, phương trình có dạng $y=ax$.\nThay $P(4;3)$ vào được $3=4a$, nên $a=3/4$.\nBước 3: Kết luận\nChọn C. Lấy $1/2$ ở A là chia số ô lưới mà quên hai trục dùng thang số khác nhau."
});
  bank["ham-so"]["nangCao"].push({
  "id": "l8-ham-so-nang-cao-09",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Đường qua gốc và giao điểm hai đường thẳng",
  "prompt": "Hai đường thẳng $d_1:y=2x+1$ và $d_2:y=-x+7$ cắt nhau tại $I$. Đường thẳng $OI$ có phương trình $y=ax$. Tìm $a$.",
  "svg": "<svg class=\"math-svg\" viewBox=\"0 0 360 360\" width=\"100%\" role=\"img\" aria-label=\"Đồ thị đường thẳng trên hệ trục cùng đơn vị\"><g data-panel=\"0\" data-origin-x=\"132\" data-origin-y=\"256\" data-scale=\"24\" transform=\"translate(0 0)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><line x1=\"84\" y1=\"304\" x2=\"84\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"108\" y1=\"304\" x2=\"108\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"132\" y1=\"304\" x2=\"132\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"156\" y1=\"304\" x2=\"156\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"180\" y1=\"304\" x2=\"180\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"204\" y1=\"304\" x2=\"204\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"228\" y1=\"304\" x2=\"228\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"252\" y1=\"304\" x2=\"252\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"276\" y1=\"304\" x2=\"276\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"304\" x2=\"276\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"280\" x2=\"276\" y2=\"280\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"256\" x2=\"276\" y2=\"256\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"232\" x2=\"276\" y2=\"232\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"208\" x2=\"276\" y2=\"208\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"184\" x2=\"276\" y2=\"184\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"160\" x2=\"276\" y2=\"160\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"136\" x2=\"276\" y2=\"136\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"112\" x2=\"276\" y2=\"112\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"88\" x2=\"276\" y2=\"88\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"64\" x2=\"276\" y2=\"64\" stroke=\"#e2e8f0\"/><line x1=\"84\" y1=\"40\" x2=\"276\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"84\" y1=\"256\" x2=\"288\" y2=\"256\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 282 252 L 288 256 L 282 260\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"132\" y1=\"304\" x2=\"132\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 128 34 L 132 28 L 136 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"297\" y=\"260\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"145\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"123\" y=\"271\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"84\" y=\"271\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"108\" y=\"271\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"156\" y=\"271\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"180\" y=\"271\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"204\" y=\"271\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"228\" y=\"271\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"252\" y=\"271\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">5</text><text x=\"276\" y=\"271\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">6</text><text x=\"123\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"123\" y=\"284\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"123\" y=\"236\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"123\" y=\"212\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"123\" y=\"188\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"123\" y=\"164\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"123\" y=\"140\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><text x=\"123\" y=\"116\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">6</text><text x=\"123\" y=\"92\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">7</text><text x=\"123\" y=\"68\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">8</text><text x=\"123\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">9</text><line data-graph=\"d1\" data-a=\"2\" data-b=\"1\" x1=\"96\" y1=\"304\" x2=\"228\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"180\" y=\"331\" fill=\"#2563eb\" text-anchor=\"middle\" font-size=\"11\">d₁</text><line data-graph=\"d2\" data-a=\"-1\" data-b=\"7\" x1=\"84\" y1=\"40\" x2=\"276\" y2=\"232\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><text x=\"180\" y=\"343\" fill=\"#dc2626\" text-anchor=\"middle\" font-size=\"11\">d₂</text><path d=\"M 180 256 L 180 136 L 132 136\" fill=\"none\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><circle data-point=\"I\" data-x=\"2\" data-y=\"5\" cx=\"180\" cy=\"136\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"190\" y=\"126\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">I</text></g></svg>",
  "options": [
    "A. $5/2$",
    "B. $2/5$",
    "C. $2$",
    "D. $-1$"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Tìm giao điểm của hai đường thẳng\nTại $I$, hai biểu thức tung độ bằng nhau: $2x+1=-x+7$.\n$3x=6$, nên $x=2$ và $y=2\\cdot2+1=5$.\nVậy $I(2;5)$; điểm này khác $O$.\nBước 2: Tìm hệ số của đường thẳng qua O và I\nThay $I$ vào $y=ax$: $5=2a$, nên $a=5/2$.\nBước 3: Kết luận\nChọn A. $2$ và $-1$ là hệ số góc của hai đường thẳng ban đầu, không phải của $OI$."
});
  bank["ham-so"]["nangCao"].push({
  "id": "l8-ham-so-nang-cao-10",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Sửa một tung độ sai trong bảng",
  "prompt": "Bốn cặp tọa độ $A(-2;7)$, $B(0;3)$, $C(1;2)$, $D(3;-3)$ được ghi từ một hàm số bậc nhất. Tất cả hoành độ đều đúng và đúng một tung độ bị ghi sai. Cách sửa nào sau đây làm cả bốn điểm thuộc cùng một đường thẳng?",
  "svg": "<svg class=\"math-svg\" viewBox=\"0 0 360 360\" width=\"100%\" role=\"img\" aria-label=\"Đồ thị đường thẳng trên hệ trục cùng đơn vị\"><g data-panel=\"0\" data-origin-x=\"169.84615384615384\" data-origin-y=\"222.76923076923077\" data-scale=\"20.307692307692307\" transform=\"translate(0 0)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><line x1=\"88.61538461538461\" y1=\"304\" x2=\"88.61538461538461\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"108.92307692307692\" y1=\"304\" x2=\"108.92307692307692\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"129.23076923076923\" y1=\"304\" x2=\"129.23076923076923\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"149.53846153846155\" y1=\"304\" x2=\"149.53846153846155\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"169.84615384615384\" y1=\"304\" x2=\"169.84615384615384\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"190.15384615384613\" y1=\"304\" x2=\"190.15384615384613\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"210.46153846153845\" y1=\"304\" x2=\"210.46153846153845\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"230.76923076923075\" y1=\"304\" x2=\"230.76923076923075\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"251.07692307692307\" y1=\"304\" x2=\"251.07692307692307\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"271.38461538461536\" y1=\"304\" x2=\"271.38461538461536\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"304\" x2=\"271.38461538461536\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"283.6923076923077\" x2=\"271.38461538461536\" y2=\"283.6923076923077\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"263.38461538461536\" x2=\"271.38461538461536\" y2=\"263.38461538461536\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"243.07692307692307\" x2=\"271.38461538461536\" y2=\"243.07692307692307\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"222.76923076923077\" x2=\"271.38461538461536\" y2=\"222.76923076923077\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"202.46153846153845\" x2=\"271.38461538461536\" y2=\"202.46153846153845\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"182.15384615384613\" x2=\"271.38461538461536\" y2=\"182.15384615384613\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"161.84615384615384\" x2=\"271.38461538461536\" y2=\"161.84615384615384\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"141.53846153846155\" x2=\"271.38461538461536\" y2=\"141.53846153846155\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"121.23076923076923\" x2=\"271.38461538461536\" y2=\"121.23076923076923\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"100.92307692307692\" x2=\"271.38461538461536\" y2=\"100.92307692307692\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"80.61538461538461\" x2=\"271.38461538461536\" y2=\"80.61538461538461\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"60.30769230769231\" x2=\"271.38461538461536\" y2=\"60.30769230769231\" stroke=\"#e2e8f0\"/><line x1=\"88.61538461538461\" y1=\"40\" x2=\"271.38461538461536\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"88.61538461538461\" y1=\"222.76923076923077\" x2=\"283.38461538461536\" y2=\"222.76923076923077\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 277.38461538461536 218.76923076923077 L 283.38461538461536 222.76923076923077 L 277.38461538461536 226.76923076923077\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"169.84615384615384\" y1=\"304\" x2=\"169.84615384615384\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 165.84615384615384 34 L 169.84615384615384 28 L 173.84615384615384 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"292.38461538461536\" y=\"226.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"182.84615384615384\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"160.84615384615384\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"88.61538461538461\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-4</text><text x=\"108.92307692307692\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-3</text><text x=\"129.23076923076923\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"149.53846153846155\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"190.15384615384613\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"210.46153846153845\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"230.76923076923075\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"251.07692307692307\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"271.38461538461536\" y=\"237.76923076923077\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">5</text><text x=\"160.84615384615384\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-4</text><text x=\"160.84615384615384\" y=\"287.6923076923077\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-3</text><text x=\"160.84615384615384\" y=\"267.38461538461536\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"160.84615384615384\" y=\"247.07692307692307\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"160.84615384615384\" y=\"206.46153846153845\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"160.84615384615384\" y=\"186.15384615384613\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"160.84615384615384\" y=\"165.84615384615384\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"160.84615384615384\" y=\"145.53846153846155\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"160.84615384615384\" y=\"125.23076923076923\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><text x=\"160.84615384615384\" y=\"104.92307692307692\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">6</text><text x=\"160.84615384615384\" y=\"84.61538461538461\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">7</text><text x=\"160.84615384615384\" y=\"64.3076923076923\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">8</text><text x=\"160.84615384615384\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">9</text><circle data-point=\"A\" data-x=\"-2\" data-y=\"7\" cx=\"129.23076923076923\" cy=\"80.61538461538461\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"139.23076923076923\" y=\"70.61538461538461\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">A</text><circle data-point=\"B\" data-x=\"0\" data-y=\"3\" cx=\"169.84615384615384\" cy=\"161.84615384615384\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"179.84615384615384\" y=\"151.84615384615384\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">B</text><circle data-point=\"C\" data-x=\"1\" data-y=\"2\" cx=\"190.15384615384613\" cy=\"182.15384615384613\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"200.15384615384613\" y=\"172.15384615384613\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">C</text><circle data-point=\"D\" data-x=\"3\" data-y=\"-3\" cx=\"230.76923076923075\" cy=\"283.6923076923077\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"240.76923076923075\" y=\"273.6923076923077\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">D</text></g></svg>",
  "options": [
    "A. Sửa $B$ thành $(0;4)$.",
    "B. Sửa $C$ thành $(1;1)$.",
    "C. Sửa $A$ thành $(-2;8)$.",
    "D. Sửa $D$ thành $(3;-4)$."
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Thử đường thẳng qua hai điểm A, B\nTừ $B(0;3)$, tung độ gốc là $3$.\nThay $A(-2;7)$ vào $y=ax+3$: $7=-2a+3$, nên $a=-2$.\nĐường thẳng là $y=-2x+3$.\nBước 2: Kiểm hai điểm còn lại\nVới $x=3$, hàm số cho $y=-3$, đúng điểm $D$.\nVới $x=1$, hàm số cho $y=1$, khác tung độ $2$ đã ghi tại $C$.\nDo đó sửa C thành $(1;1)$ thì cả bốn điểm cùng thuộc đồ thị.\nBước 3: Loại ba cách sửa khác\nNếu sửa B, ba điểm giữ lại A,C,D không thẳng hàng: A,D nằm trên $y=-2x+3$ nhưng C không nằm trên đó.\nNếu sửa A, hai điểm B,D cũng xác định đường $y=-2x+3$, vẫn không chứa C.\nNếu sửa D, hai điểm A,B vẫn xác định đường đó, vẫn không chứa C.\nBước 4: Kết luận\nChỉ cách sửa ở B đáp ứng đề bài. Chọn B."
});
  bank["ham-so"]["hsg"].push({
  "id": "l8-ham-so-hsg-06",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Mức tăng từ hai điểm trên đồ thị",
  "prompt": "Đồ thị hàm số bậc nhất $f(x)=ax+b$ đi qua $A(-1;2)$ và $B(3;10)$. Tính $f(5)-f(2)$.",
  "svg": "",
  "correctAnswer": "6",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Dùng hai điểm để tìm hệ số góc\n$-a+b=2$ và $3a+b=10$.\nTrừ đẳng thức thứ nhất khỏi đẳng thức thứ hai: $4a=8$, nên $a=2$.\nBước 2: Tính hiệu mà không cần tìm b\n$f(5)-f(2)=(5a+b)-(2a+b)=3a=6$.\nHệ số $b$ bị triệt tiêu vì cùng được cộng vào hai giá trị.\nBước 3: Kiểm bằng hàm số cụ thể\nTừ $-2+b=2$, được $b=4$. Khi đó $f(5)=14$, $f(2)=8$, hiệu đúng là $6$.\nBước 4: Kết luận\n$f(5)-f(2)=6$."
});
  bank["ham-so"]["hsg"].push({
  "id": "l8-ham-so-hsg-07",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Đường qua giao điểm chia hai diện tích",
  "prompt": "Cho $d_1:y=x+2$, $d_2:y=-2x+8$. Hai đường cắt nhau tại $I$ và lần lượt cắt $Oy$ tại $A,B$. Điểm $M$ nằm trong đoạn $AB$, thỏa $S_{IAM}:S_{IMB}=1:3$. Tìm hệ số góc của đường thẳng $IM$.",
  "svg": "<svg class=\"math-svg\" viewBox=\"0 0 360 360\" width=\"100%\" role=\"img\" aria-label=\"Đồ thị đường thẳng trên hệ trục cùng đơn vị\"><g data-panel=\"0\" data-origin-x=\"147\" data-origin-y=\"260\" data-scale=\"22\" transform=\"translate(0 0)\"><rect width=\"360\" height=\"360\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#cbd5e1\"/><line x1=\"103\" y1=\"304\" x2=\"103\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"125\" y1=\"304\" x2=\"125\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"147\" y1=\"304\" x2=\"147\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"169\" y1=\"304\" x2=\"169\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"191\" y1=\"304\" x2=\"191\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"213\" y1=\"304\" x2=\"213\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"235\" y1=\"304\" x2=\"235\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"257\" y1=\"304\" x2=\"257\" y2=\"40\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"304\" x2=\"257\" y2=\"304\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"282\" x2=\"257\" y2=\"282\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"260\" x2=\"257\" y2=\"260\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"238\" x2=\"257\" y2=\"238\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"216\" x2=\"257\" y2=\"216\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"194\" x2=\"257\" y2=\"194\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"172\" x2=\"257\" y2=\"172\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"150\" x2=\"257\" y2=\"150\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"128\" x2=\"257\" y2=\"128\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"106\" x2=\"257\" y2=\"106\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"84\" x2=\"257\" y2=\"84\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"62\" x2=\"257\" y2=\"62\" stroke=\"#e2e8f0\"/><line x1=\"103\" y1=\"40\" x2=\"257\" y2=\"40\" stroke=\"#e2e8f0\"/><line data-axis=\"x\" x1=\"103\" y1=\"260\" x2=\"269\" y2=\"260\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 263 256 L 269 260 L 263 264\" fill=\"none\" stroke=\"#334155\"/><line data-axis=\"y\" x1=\"147\" y1=\"304\" x2=\"147\" y2=\"28\" stroke=\"#334155\" stroke-width=\"1.5\"/><path d=\"M 143 34 L 147 28 L 151 34\" fill=\"none\" stroke=\"#334155\"/><text x=\"278\" y=\"264\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">x</text><text x=\"160\" y=\"31\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">y</text><text x=\"138\" y=\"275\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">O</text><text x=\"103\" y=\"275\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-2</text><text x=\"125\" y=\"275\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">-1</text><text x=\"169\" y=\"275\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">1</text><text x=\"191\" y=\"275\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">2</text><text x=\"213\" y=\"275\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">3</text><text x=\"235\" y=\"275\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">4</text><text x=\"257\" y=\"275\" fill=\"#334155\" text-anchor=\"middle\" font-size=\"11\">5</text><text x=\"138\" y=\"308\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-2</text><text x=\"138\" y=\"286\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">-1</text><text x=\"138\" y=\"242\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">1</text><text x=\"138\" y=\"220\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">2</text><text x=\"138\" y=\"198\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">3</text><text x=\"138\" y=\"176\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">4</text><text x=\"138\" y=\"154\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">5</text><text x=\"138\" y=\"132\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">6</text><text x=\"138\" y=\"110\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">7</text><text x=\"138\" y=\"88\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">8</text><text x=\"138\" y=\"66\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">9</text><text x=\"138\" y=\"44\" fill=\"#334155\" text-anchor=\"end\" font-size=\"11\">10</text><line data-graph=\"d1\" data-a=\"1\" data-b=\"2\" x1=\"103\" y1=\"260\" x2=\"257\" y2=\"106\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"180\" y=\"331\" fill=\"#2563eb\" text-anchor=\"middle\" font-size=\"11\">d₁</text><line data-graph=\"d2\" data-a=\"-2\" data-b=\"8\" x1=\"257\" y1=\"304\" x2=\"125\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><text x=\"180\" y=\"343\" fill=\"#dc2626\" text-anchor=\"middle\" font-size=\"11\">d₂</text><line data-graph=\"d3\" data-a=\"0.25\" data-b=\"3.5\" x1=\"103\" y1=\"194\" x2=\"257\" y2=\"155.5\" stroke=\"#15803d\" stroke-width=\"2.5\"/><text x=\"180\" y=\"355\" fill=\"#15803d\" text-anchor=\"middle\" font-size=\"11\">IM</text><circle data-point=\"A\" data-x=\"0\" data-y=\"2\" cx=\"147\" cy=\"216\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"109\" y=\"220\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">A</text><circle data-point=\"B\" data-x=\"0\" data-y=\"8\" cx=\"147\" cy=\"84\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"109\" y=\"84\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">B</text><circle data-point=\"I\" data-x=\"2\" data-y=\"4\" cx=\"191\" cy=\"172\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"201\" y=\"162\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">I</text><circle data-point=\"M\" data-x=\"0\" data-y=\"3.5\" cx=\"147\" cy=\"183\" r=\"3.5\" fill=\"#b91c1c\"/><text x=\"109\" y=\"187\" fill=\"#991b1b\" text-anchor=\"start\" font-size=\"13\">M</text></g></svg>",
  "correctAnswer": "1/4",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Xác định ba điểm đã biết\n$A(0;2)$, $B(0;8)$ nên $AB=6$.\nGiải $x+2=-2x+8$ được $x=2$, $y=4$, do đó $I(2;4)$.\nBước 2: Đổi tỉ số diện tích thành tỉ số hai đoạn\nHai tam giác $IAM$ và $IMB$ có đáy $AM,MB$ cùng nằm trên $Oy$ và cùng chiều cao kẻ từ $I$.\nVì vậy $AM:MB=S_{IAM}:S_{IMB}=1:3$.\n$M$ nằm trong $AB$, nên $AM=AB/4=3/2$.\nBước 3: Tìm tung độ M và hệ số góc\n$M$ ở trên $A$ theo chiều từ $A$ đến $B$, nên $M(0;2+3/2)=(0;7/2)$.\nĐường $IM$ có dạng $y=kx+7/2$.\nThay $I(2;4)$: $4=2k+7/2$, nên $k=1/4$.\nBước 4: Kết luận\nHệ số góc cần tìm là $\\frac{1}{4}$."
});
  bank["ham-so"]["hsg"].push({
  "id": "l8-ham-so-hsg-08",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Hai lần áp dụng một hàm bậc nhất",
  "prompt": "Cho $f(x)=ax+b$ với $a\\ne0$. Biết $f(f(x))=9x+8$ với mọi số thực $x$, và $f(0)>0$. Tính $f(2)$.",
  "svg": "",
  "correctAnswer": "8",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Thực hiện hai lần phép tính của hàm số\n$f(f(x))=a(ax+b)+b=a^2x+b(a+1)$.\nTại $x=0$, đẳng thức đề bài cho $b(a+1)=8$.\nTại $x=1$, ta có $a^2+b(a+1)=17$. Trừ đẳng thức trên được $a^2=9$.\nBước 2: Xét đầy đủ hai khả năng của a\nNếu $a=3$ thì $4b=8$, nên $b=2$.\nNếu $a=-3$ thì $-2b=8$, nên $b=-4$.\nĐiều kiện $f(0)=b>0$ giữ lại cặp $(a,b)=(3,2)$ và loại cặp còn lại.\nBước 3: Kiểm và tính giá trị\nVới $f(x)=3x+2$, ta có $f(f(x))=3(3x+2)+2=9x+8$.\n$f(2)=3\\cdot2+2=8$.\nBước 4: Kết luận\n$f(2)=8$."
});
  bank["ham-so"]["hsg"].push({
  "id": "l8-ham-so-hsg-09",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Trung điểm trên đồ thị và chiều đảo",
  "prompt": "Cho đường thẳng $d:y=ax+b$ với $a\\ne0$. Hai điểm $A(u;au+b)$ và $B(v;av+b)$ thuộc $d$, $u\\ne v$. Chứng minh trung điểm $M$ của $AB$ cũng thuộc $d$. Chứng minh chiều đảo: nếu $A,M$ thuộc $d$ và $M$ là trung điểm của $AB$ thì $B$ thuộc $d$.",
  "svg": "",
  "solution": "Bước 1: Viết tọa độ trung điểm\nHoành độ của $M$ là $x_M=(u+v)/2$.\nTung độ của $M$ là $y_M=[(au+b)+(av+b)]/2=a(u+v)/2+b$.\nBước 2: Kiểm phương trình đường thẳng\nTừ bước 1, $y_M=ax_M+b$.\nMột điểm thuộc đồ thị khi tọa độ của nó thỏa phương trình đồ thị, nên $M$ thuộc $d$.\nBước 3: Xét chiều đảo\nGọi tọa độ $A$ là $(x_A;y_A)$, $M$ là $(x_M;y_M)$.\nVì $M$ là trung điểm $AB$, tọa độ $B$ thỏa $x_B=2x_M-x_A$ và $y_B=2y_M-y_A$.\nDo $A,M$ thuộc $d$, ta có $y_A=ax_A+b$, $y_M=ax_M+b$.\nVậy $y_B=2(ax_M+b)-(ax_A+b)=a(2x_M-x_A)+b=ax_B+b$.\nBước 4: Kết luận\n$B$ cũng thuộc $d$. Cả phát biểu thuận và chiều đảo đều được chứng minh bằng công thức tọa độ trung điểm."
});
  bank["ham-so"]["hsg"].push({
  "id": "l8-ham-so-hsg-10",
  "lop": 8,
  "chuDe": "ham-so",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Hai phép kiểm xác định một hàm bậc nhất",
  "prompt": "Cho $f(x)=ax+b$, $g(x)=cx+d$, với $a,c\\ne0$. Biết $u\\ne v$, $f(u)=g(u)$ và $f(v)=g(v)$. Chứng minh $f(x)=g(x)$ với mọi $x$. Nếu chỉ biết $f(u)+f(v)=g(u)+g(v)$ thì kết luận đó còn luôn đúng không? Giải thích.",
  "svg": "",
  "solution": "Bước 1: Viết hai đẳng thức tại hai hoành độ\nTừ đề bài: $(a-c)u+(b-d)=0$ và $(a-c)v+(b-d)=0$.\nBước 2: Dùng điều kiện hai hoành độ khác nhau\nTrừ hai đẳng thức được $(a-c)(u-v)=0$.\nVì $u-v\\ne0$, phải có $a=c$. Thế lại vào một đẳng thức được $b=d$.\nVậy $ax+b=cx+d$ với mọi $x$.\nBước 3: Kiểm điều kiện yếu hơn bằng một ví dụ\nChọn $f(x)=x$, $g(x)=2x$, $u=-1$, $v=1$.\nTa có $f(-1)+f(1)=-1+1=0$ và $g(-1)+g(1)=-2+2=0$.\nNhưng $f(1)=1\\ne2=g(1)$, nên hai hàm số không bằng nhau với mọi $x$.\nBước 4: Kết luận\nHai đẳng thức riêng tại hai hoành độ khác nhau đủ xác định cùng một hàm bậc nhất. Chỉ đẳng thức của hai tổng thì chưa đủ."
});
  bank["hinh-chop"]["kha"].push({
  "id": "l8-hinh-chop-kha-04",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Cạnh bên của chóp tam giác đều",
  "prompt": "Hình chóp tam giác đều $S.ABC$ có những cạnh bên nào?",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"3\" data-base=\"6\" data-height=\"5\" data-scale3=\"37.15698547403537\" data-origin3=\"144.03899598629238,218.20643463315918\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"144.03899598629238,51 86.11698795887716,289 61.52904357789387,143.79481720200164\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"144.03899598629238,51 284.4709564221061,221.8244866974759 86.11698795887716,289\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"61.52904357789387\" y1=\"143.79481720200164\" x2=\"284.4709564221061\" y2=\"221.8244866974759\" data-edge3=\"B-C\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"86.11698795887716\" y1=\"289\" x2=\"144.03899598629238\" y2=\"51\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"86.11698795887716\" y1=\"289\" x2=\"61.52904357789387\" y2=\"143.79481720200164\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"61.52904357789387\" y1=\"143.79481720200164\" x2=\"144.03899598629238\" y2=\"51\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"284.4709564221061\" y1=\"221.8244866974759\" x2=\"144.03899598629238\" y2=\"51\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"86.11698795887716\" y1=\"289\" x2=\"284.4709564221061\" y2=\"221.8244866974759\" data-edge3=\"A-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"144.03899598629238\" y1=\"51\" x2=\"144.03899598629238\" y2=\"218.20643463315918\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"144.03899598629238\" y1=\"218.20643463315918\" x2=\"185.29397219049162\" y2=\"255.41224334873795\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"144.03899598629238\" y1=\"51\" x2=\"185.29397219049162\" y2=\"255.41224334873795\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"0,3.464101615137755,0\" cx=\"86.11698795887716\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"73.11698795887716\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"-3,-1.7320508075688774,0\" cx=\"61.52904357789387\" cy=\"143.79481720200164\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"48.52904357789387\" y=\"151.79481720200164\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3,-1.7320508075688774,0\" cx=\"284.4709564221061\" cy=\"221.8244866974759\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"297.4709564221061\" y=\"229.8244866974759\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"S\" data-xyz=\"0,0,5\" cx=\"144.03899598629238\" cy=\"51\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"144.03899598629238\" y=\"36\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"144.03899598629238\" cy=\"218.20643463315918\" r=\"2\" fill=\"#64748b\"/><text x=\"132.03899598629238\" y=\"230.20643463315918\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"1.5,0.8660254037844387,0\" cx=\"185.29397219049162\" cy=\"255.41224334873795\" r=\"2\" fill=\"#64748b\"/><text x=\"199.29397219049162\" y=\"260.41224334873795\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"26\"><polygon points=\"369,280 525,280 447,142.4209318246413\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"369\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"525\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"142.4209318246413\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"142.4209318246413\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"411.47967068960673\" y1=\"213.18325375998492\" x2=\"404.52032931039327\" y2=\"209.23767806465636\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"489.47967068960673\" y1=\"209.23767806465636\" x2=\"482.52032931039327\" y2=\"213.18325375998492\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"128.4209318246413\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"359\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"535\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
  "options": [
    "A. $SA,SB,SC$.",
    "B. $AB,BC,CA$.",
    "C. $SA,AB,AC$.",
    "D. $SO,SM,OM$."
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Xác định đỉnh và đáy\nĐỉnh chóp là $S$, đáy là tam giác $ABC$.\nBước 2: Nhận dạng cạnh bên\nCạnh bên nối đỉnh chóp với một đỉnh của đáy.\nVì vậy các cạnh bên là $SA,SB,SC$.\nCác đoạn $AB,BC,CA$ thuộc đáy; $SO,SM,OM$ là các đoạn phụ trên hình, không phải ba cạnh bên.\nBước 3: Kết luận\nChọn A."
});
  bank["hinh-chop"]["kha"].push({
  "id": "l8-hinh-chop-kha-05",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Khung cạnh chóp tứ giác đều",
  "prompt": "Một khung dây gồm tất cả các cạnh của hình chóp tứ giác đều. Cạnh đáy dài $3$ cm, cạnh bên dài $5$ cm. Bỏ qua phần dây tại các mối nối. Cần bao nhiêu xentimét dây?",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"3\" data-height=\"4.527692569068709\" data-scale3=\"43.87158791101081\" data-origin3=\"173,229.7733563201354\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,50.99999999999997 268.42070370644853,216.61187994683215 209.1940600265839,289\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,50.99999999999997 209.1940600265839,289 77.5792962935515,242.93483269343866\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"136.8059399734161\" y1=\"170.5467126402708\" x2=\"173\" y2=\"50.99999999999997\" data-edge3=\"A-S\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"136.8059399734161\" y1=\"170.5467126402708\" x2=\"268.42070370644853\" y2=\"216.61187994683215\" data-edge3=\"A-B\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"136.8059399734161\" y1=\"170.5467126402708\" x2=\"77.5792962935515\" y2=\"242.93483269343866\" data-edge3=\"A-D\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"268.42070370644853\" y1=\"216.61187994683215\" x2=\"173\" y2=\"50.99999999999997\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"268.42070370644853\" y1=\"216.61187994683215\" x2=\"209.1940600265839\" y2=\"289\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"209.1940600265839\" y1=\"289\" x2=\"173\" y2=\"50.99999999999997\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"209.1940600265839\" y1=\"289\" x2=\"77.5792962935515\" y2=\"242.93483269343866\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"77.5792962935515\" y1=\"242.93483269343866\" x2=\"173\" y2=\"50.99999999999997\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"50.99999999999997\" x2=\"173\" y2=\"229.7733563201354\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"229.7733563201354\" x2=\"238.8073818665162\" y2=\"252.8059399734161\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"50.99999999999997\" x2=\"238.8073818665162\" y2=\"252.8059399734161\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-1.5,-1.5,0\" cx=\"136.8059399734161\" cy=\"170.5467126402708\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"123.80593997341609\" y=\"178.5467126402708\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"1.5,-1.5,0\" cx=\"268.42070370644853\" cy=\"216.61187994683215\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"281.42070370644853\" y=\"224.61187994683215\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"1.5,1.5,0\" cx=\"209.1940600265839\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"222.1940600265839\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-1.5,1.5,0\" cx=\"77.5792962935515\" cy=\"242.93483269343866\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"64.5792962935515\" y=\"250.93483269343866\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,4.527692569068709\" cx=\"173\" cy=\"50.99999999999997\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"35.99999999999997\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"229.7733563201354\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"241.7733563201354\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"1.5,0,0\" cx=\"238.8073818665162\" cy=\"252.8059399734161\" r=\"2\" fill=\"#64748b\"/><text x=\"252.8073818665162\" y=\"257.8059399734161\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"41\"><polygon points=\"385.5,280 508.5,280 447,84.44246370952615\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"385.5\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"508.5\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"84.44246370952615\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"84.44246370952615\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"420.0657568056678\" y1=\"183.42123185476305\" x2=\"412.4342431943322\" y2=\"181.02123185476307\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"481.5657568056678\" y1=\"181.02123185476307\" x2=\"473.9342431943322\" y2=\"183.42123185476305\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"70.44246370952615\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"375.5\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"518.5\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">3 cm</text><text x=\"469\" y=\"182.22123185476306\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">SM</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
  "options": [
    "A. $20$ cm",
    "B. $24$ cm",
    "C. $32$ cm",
    "D. $40$ cm"
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Đếm hai nhóm cạnh\nĐáy là hình vuông có $4$ cạnh, mỗi cạnh dài $3$ cm.\nĐỉnh chóp nối với $4$ đỉnh đáy, tạo $4$ cạnh bên, mỗi cạnh dài $5$ cm.\nBước 2: Tính tổng độ dài\n$4\\cdot3+4\\cdot5=12+20=32$ cm.\nBước 3: Kết luận\nCần $32$ cm dây. Chọn C.\n$20$ chỉ tính các cạnh bên; $24$ và $40$ lần lượt coi cả tám cạnh đều dài $3$ hoặc đều dài $5$."
});
  bank["hinh-chop"]["nangCao"].push({
  "id": "l8-hinh-chop-nang-cao-08",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Mặt bên tam giác cân trước khi tính diện tích",
  "prompt": "Hình chóp tam giác đều có cạnh đáy $6$ cm, cạnh bên $5$ cm. Tính diện tích xung quanh của hình chóp.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"3\" data-base=\"6\" data-height=\"3.605551275463989\" data-scale3=\"44.666666666666664\" data-origin3=\"138.18577876786554,199.92086579755076\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"138.18577876786554,54.97770452389841 68.55733630359667,285.0222954761016 38.999999999999986,110.47015095827535\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"138.18577876786554,54.97770452389841 307,204.27015095827534 68.55733630359667,285.0222954761016\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"38.999999999999986\" y1=\"110.47015095827535\" x2=\"307\" y2=\"204.27015095827534\" data-edge3=\"B-C\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"68.55733630359667\" y1=\"285.0222954761016\" x2=\"138.18577876786554\" y2=\"54.97770452389841\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"68.55733630359667\" y1=\"285.0222954761016\" x2=\"38.999999999999986\" y2=\"110.47015095827535\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"38.999999999999986\" y1=\"110.47015095827535\" x2=\"138.18577876786554\" y2=\"54.97770452389841\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"204.27015095827534\" x2=\"138.18577876786554\" y2=\"54.97770452389841\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"68.55733630359667\" y1=\"285.0222954761016\" x2=\"307\" y2=\"204.27015095827534\" data-edge3=\"A-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"138.18577876786554\" y1=\"54.97770452389841\" x2=\"138.18577876786554\" y2=\"199.92086579755076\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"138.18577876786554\" y1=\"199.92086579755076\" x2=\"187.7786681517983\" y2=\"244.64622321718846\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"138.18577876786554\" y1=\"54.97770452389841\" x2=\"187.7786681517983\" y2=\"244.64622321718846\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"0,3.464101615137755,0\" cx=\"68.55733630359667\" cy=\"285.0222954761016\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"55.55733630359667\" y=\"293.0222954761016\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"-3,-1.7320508075688774,0\" cx=\"38.999999999999986\" cy=\"110.47015095827535\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"25.999999999999986\" y=\"118.47015095827535\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3,-1.7320508075688774,0\" cx=\"307\" cy=\"204.27015095827534\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"320\" y=\"212.27015095827534\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"S\" data-xyz=\"0,0,3.605551275463989\" cx=\"138.18577876786554\" cy=\"54.97770452389841\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"138.18577876786554\" y=\"39.97770452389841\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"138.18577876786554\" cy=\"199.92086579755076\" r=\"2\" fill=\"#64748b\"/><text x=\"126.18577876786554\" y=\"211.92086579755076\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"1.5,0.8660254037844387,0\" cx=\"187.7786681517983\" cy=\"244.64622321718846\" r=\"2\" fill=\"#64748b\"/><text x=\"201.7786681517983\" y=\"249.64622321718846\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"26\"><polygon points=\"369,280 525,280 447,176\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"369\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"525\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"176\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"176\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"411.2\" y1=\"230.4\" x2=\"404.8\" y2=\"225.6\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"489.2\" y1=\"225.6\" x2=\"482.8\" y2=\"230.4\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"162\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"359\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"535\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">6 cm</text><text x=\"469\" y=\"228\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">d</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
  "options": [
    "A. $45$ cm²",
    "B. $36$ cm²",
    "C. $72$ cm²",
    "D. $18$ cm²"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Tìm đường cao của một mặt bên\nMỗi mặt bên là tam giác cân có hai cạnh bên $5$ cm và đáy $6$ cm.\nĐường cao mặt bên đi qua trung điểm đáy, chia đáy thành hai đoạn $3$ cm.\nÁp dụng Pythagore: $d^2=5^2-3^2=16$. Vì d là độ dài nên $d=4$ cm.\nBước 2: Tính diện tích ba mặt bên\nMột mặt bên có diện tích $6\\cdot4/2=12$ cm².\nBa mặt bên bằng nhau, nên $S_{xq}=3\\cdot12=36$ cm².\nBước 3: Kết luận\nChọn B. Không dùng cạnh bên $5$ thay cho đường cao mặt bên; cách đó cho nhầm $45$ cm²."
});
  bank["hinh-chop"]["nangCao"].push({
  "id": "l8-hinh-chop-nang-cao-09",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Giữ thể tích khi chỉ đổi cạnh đáy",
  "prompt": "Một hình chóp tứ giác đều có cạnh đáy $6$ cm và chiều cao $12$ cm. Đổi thành một hình chóp tứ giác đều khác có cạnh đáy $9$ cm nhưng giữ nguyên thể tích. Chiều cao hình mới bằng bao nhiêu?",
  "svg": "",
  "options": [
    "A. $8$ cm",
    "B. $18$ cm",
    "C. $4$ cm",
    "D. $16/3$ cm"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Viết điều kiện bằng nhau về thể tích\nGọi chiều cao hình mới là $h>0$.\nTheo công thức thể tích chóp: $6^2\\cdot12/3=9^2h/3$.\nBước 2: Giải theo chiều cao mới\n$36\\cdot12=81h$, nên $h=432/81=16/3$ cm.\nDiện tích đáy tăng $(9/6)^2=9/4$ lần, nên chiều cao phải giảm còn $4/9$ lần để tích không đổi.\nBước 3: Kiểm và kết luận\nThể tích cũ là $144$ cm³; thể tích mới là $81\\cdot(16/3)/3=144$ cm³.\nChọn D. $8$ cm là kết quả chỉ bù theo tỉ số cạnh mà quên bình phương."
});
  bank["hinh-chop"]["nangCao"].push({
  "id": "l8-hinh-chop-nang-cao-10",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Mặt bên gấp đôi diện tích đáy tam giác",
  "prompt": "Một hình chóp tam giác đều có cạnh đáy $6$ cm. Diện tích MỖI mặt bên bằng hai lần diện tích đáy. Cạnh bên của hình chóp dài bao nhiêu?",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"3\" data-base=\"6\" data-height=\"10.246950765959598\" data-scale3=\"21.38842977950152\" data-origin3=\"156.32936881750288,248.2495682205626\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"156.32936881750288,51 122.98810645250862,289 108.83471066149545,205.41650106236727\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"156.32936881750288,51 237.16528933850458,250.33220359932048 122.98810645250862,289\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"108.83471066149545\" y1=\"205.41650106236727\" x2=\"237.16528933850458\" y2=\"250.33220359932048\" data-edge3=\"B-C\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"122.98810645250862\" y1=\"289\" x2=\"156.32936881750288\" y2=\"51\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.98810645250862\" y1=\"289\" x2=\"108.83471066149545\" y2=\"205.41650106236727\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"108.83471066149545\" y1=\"205.41650106236727\" x2=\"156.32936881750288\" y2=\"51\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"237.16528933850458\" y1=\"250.33220359932048\" x2=\"156.32936881750288\" y2=\"51\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.98810645250862\" y1=\"289\" x2=\"237.16528933850458\" y2=\"250.33220359932048\" data-edge3=\"A-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"156.32936881750288\" y1=\"51\" x2=\"156.32936881750288\" y2=\"248.2495682205626\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"156.32936881750288\" y1=\"248.2495682205626\" x2=\"180.07669789550658\" y2=\"269.6661017996602\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"156.32936881750288\" y1=\"51\" x2=\"180.07669789550658\" y2=\"269.6661017996602\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"0,3.464101615137755,0\" cx=\"122.98810645250862\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"109.98810645250862\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"-3,-1.7320508075688774,0\" cx=\"108.83471066149545\" cy=\"205.41650106236727\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"95.83471066149545\" y=\"213.41650106236727\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3,-1.7320508075688774,0\" cx=\"237.16528933850458\" cy=\"250.33220359932048\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"250.16528933850458\" y=\"258.33220359932045\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"S\" data-xyz=\"0,0,10.246950765959598\" cx=\"156.32936881750288\" cy=\"51\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"156.32936881750288\" y=\"36\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"156.32936881750288\" cy=\"248.2495682205626\" r=\"2\" fill=\"#64748b\"/><text x=\"144.32936881750288\" y=\"260.2495682205626\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"1.5,0.8660254037844387,0\" cx=\"180.07669789550658\" cy=\"269.6661017996602\" r=\"2\" fill=\"#64748b\"/><text x=\"194.07669789550658\" y=\"274.6661017996602\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"19\"><polygon points=\"390,280 504,280 447,82.54620793714798\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"390\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"504\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"82.54620793714798\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"82.54620793714798\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"422.3430756913221\" y1=\"182.38250436102444\" x2=\"414.6569243086779\" y2=\"180.16370357612354\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"479.3430756913221\" y1=\"180.16370357612354\" x2=\"471.6569243086779\" y2=\"182.38250436102444\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"68.54620793714798\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"380\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"514\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">6 cm</text><text x=\"469\" y=\"181.273103968574\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">d</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
  "options": [
    "A. $3\\sqrt{13}$ cm",
    "B. $6\\sqrt3$ cm",
    "C. $3\\sqrt{11}$ cm",
    "D. $3\\sqrt{10}$ cm"
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Tính diện tích tam giác đều ở đáy\nĐường cao đáy có bình phương $6^2-3^2=27$, nên dài $3\\sqrt3$ cm.\nDiện tích đáy là $6\\cdot3\\sqrt3/2=9\\sqrt3$ cm².\nBước 2: Tìm đường cao mặt bên\nMỗi mặt bên có diện tích $18\\sqrt3$ cm².\nGọi trung đoạn là $d>0$. Từ $6d/2=18\\sqrt3$, được $d=6\\sqrt3$ cm.\nBước 3: Tính cạnh bên bằng Pythagore\nTrong nửa mặt bên, hai cạnh góc vuông là $d$ và nửa cạnh đáy $3$.\nCạnh bên s thỏa $s^2=(6\\sqrt3)^2+3^2=108+9=117$.\nVì $s>0$, $s=3\\sqrt{13}$ cm.\nBước 4: Kiểm sự tồn tại và kết luận\nKhoảng cách từ tâm đáy đến trung điểm một cạnh đáy là $\\sqrt3$ cm.\nChiều cao khối có bình phương $d^2-(\\sqrt3)^2=105>0$, nên hình không suy biến.\nChọn A. B mới là trung đoạn, chưa phải cạnh bên."
});
  bank["hinh-chop"]["hsg"].push({
  "id": "l8-hinh-chop-hsg-06",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Thể tích chóp có đáy tam giác đều",
  "prompt": "Hình chóp tam giác đều có cạnh đáy $6$ cm và chiều cao $4\\sqrt3$ cm. Tính thể tích theo cm³.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"3\" data-base=\"6\" data-height=\"6.928203230275509\" data-scale3=\"29.236034907900198\" data-origin3=\"150.2127659574468,233.29787234042553\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"150.2127659574468,51 104.63829787234042,289 85.29189527629941,174.7489718573431\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"150.2127659574468,51 260.7081047237006,236.1446451639335 104.63829787234042,289\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"85.29189527629941\" y1=\"174.7489718573431\" x2=\"260.7081047237006\" y2=\"236.1446451639335\" data-edge3=\"B-C\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"104.63829787234042\" y1=\"289\" x2=\"150.2127659574468\" y2=\"51\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"104.63829787234042\" y1=\"289\" x2=\"85.29189527629941\" y2=\"174.7489718573431\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"85.29189527629941\" y1=\"174.7489718573431\" x2=\"150.2127659574468\" y2=\"51\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"260.7081047237006\" y1=\"236.1446451639335\" x2=\"150.2127659574468\" y2=\"51\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"104.63829787234042\" y1=\"289\" x2=\"260.7081047237006\" y2=\"236.1446451639335\" data-edge3=\"A-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"150.2127659574468\" y1=\"51\" x2=\"150.2127659574468\" y2=\"233.29787234042553\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"150.2127659574468\" y1=\"233.29787234042553\" x2=\"182.6732012980205\" y2=\"262.5723225819668\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"150.2127659574468\" y1=\"51\" x2=\"182.6732012980205\" y2=\"262.5723225819668\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"0,3.464101615137755,0\" cx=\"104.63829787234042\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"91.63829787234042\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"-3,-1.7320508075688774,0\" cx=\"85.29189527629941\" cy=\"174.7489718573431\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"72.29189527629941\" y=\"182.7489718573431\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3,-1.7320508075688774,0\" cx=\"260.7081047237006\" cy=\"236.1446451639335\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"273.7081047237006\" y=\"244.1446451639335\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"S\" data-xyz=\"0,0,6.928203230275509\" cx=\"150.2127659574468\" cy=\"51\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"150.2127659574468\" y=\"36\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"150.2127659574468\" cy=\"233.29787234042553\" r=\"2\" fill=\"#64748b\"/><text x=\"138.2127659574468\" y=\"245.29787234042553\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"1.5,0.8660254037844387,0\" cx=\"182.6732012980205\" cy=\"262.5723225819668\" r=\"2\" fill=\"#64748b\"/><text x=\"196.6732012980205\" y=\"267.5723225819668\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"128.2127659574468\" y=\"142.14893617021278\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">4√3 cm</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"26\"><polygon points=\"369,280 525,280 447,94.3228608578859\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"369\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"525\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"94.3228608578859\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"94.3228608578859\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"411.68781778291714\" y1=\"188.71062376742591\" x2=\"404.31218221708286\" y2=\"185.61223709045996\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"489.68781778291714\" y1=\"185.61223709045996\" x2=\"482.31218221708286\" y2=\"188.71062376742591\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"80.3228608578859\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"359\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"535\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">6 cm</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
  "correctAnswer": "36",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Tính diện tích đáy từ cạnh đáy\nĐường cao của tam giác đều cạnh $6$ là $\\sqrt{6^2-3^2}=3\\sqrt3$ cm.\nVậy $S_b=6\\cdot3\\sqrt3/2=9\\sqrt3$ cm².\nBước 2: Dùng chiều cao của khối chóp\n$V=S_b\\cdot h/3=9\\sqrt3\\cdot4\\sqrt3/3=36$ cm³.\nỞ đây $h$ là đường vuông góc từ đỉnh đến mặt đáy; không phải đường cao mặt bên.\nBước 3: Kết luận\nThể tích là $36$ cm³."
});
  bank["hinh-chop"]["hsg"].push({
  "id": "l8-hinh-chop-hsg-07",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Cùng cạnh bên nhưng thể tích khác nhau",
  "prompt": "Hai hình chóp tứ giác đều có cùng độ dài cạnh bên $13$ cm. Cạnh đáy hình I là $5\\sqrt2$ cm, cạnh đáy hình II là $12\\sqrt2$ cm. Gọi thể tích tương ứng là $V_1,V_2$. Tính $V_2-V_1$ theo cm³.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 740\" width=\"100%\"><g data-hinh=\"I\" transform=\"translate(0 0)\"><svg height=\"370\" xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"7.0710678118654755\" data-height=\"12\" data-scale3=\"17.021909002011054\" data-origin3=\"173,234.8366172217194\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,51 260.2632278094521,222.80030993765703 206.09984503117147,289\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,51 206.09984503117147,289 85.73677219054792,246.87292450578175\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"139.90015496882853\" y1=\"180.6732344434388\" x2=\"173\" y2=\"51\" data-edge3=\"A-S\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"139.90015496882853\" y1=\"180.6732344434388\" x2=\"260.2632278094521\" y2=\"222.80030993765703\" data-edge3=\"A-B\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"139.90015496882853\" y1=\"180.6732344434388\" x2=\"85.73677219054792\" y2=\"246.87292450578175\" data-edge3=\"A-D\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"260.2632278094521\" y1=\"222.80030993765703\" x2=\"173\" y2=\"51\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"260.2632278094521\" y1=\"222.80030993765703\" x2=\"206.09984503117147\" y2=\"289\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"206.09984503117147\" y1=\"289\" x2=\"173\" y2=\"51\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"206.09984503117147\" y1=\"289\" x2=\"85.73677219054792\" y2=\"246.87292450578175\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"85.73677219054792\" y1=\"246.87292450578175\" x2=\"173\" y2=\"51\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"51\" x2=\"173\" y2=\"234.8366172217194\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"234.8366172217194\" x2=\"233.18153642031177\" y2=\"255.9001549688285\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"51\" x2=\"233.18153642031177\" y2=\"255.9001549688285\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-3.5355339059327378,-3.5355339059327378,0\" cx=\"139.90015496882853\" cy=\"180.6732344434388\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"126.90015496882853\" y=\"188.6732344434388\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"3.5355339059327378,-3.5355339059327378,0\" cx=\"260.2632278094521\" cy=\"222.80030993765703\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"273.2632278094521\" y=\"230.80030993765703\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3.5355339059327378,3.5355339059327378,0\" cx=\"206.09984503117147\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"219.09984503117147\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-3.5355339059327378,3.5355339059327378,0\" cx=\"85.73677219054792\" cy=\"246.87292450578175\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"72.73677219054792\" y=\"254.87292450578175\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,12\" cx=\"173\" cy=\"51\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"36\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"234.8366172217194\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"246.8366172217194\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"3.5355339059327378,0,0\" cx=\"233.18153642031177\" cy=\"255.9001549688285\" r=\"2\" fill=\"#64748b\"/><text x=\"247.18153642031177\" y=\"260.9001549688285\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"151\" y=\"142.9183086108597\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">h₁</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"15\"><polygon points=\"393.96699141100896,280 500.03300858899104,280 447,92.35005995204796\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"393.96699141100896\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"500.03300858899104\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"92.35005995204796\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"92.35005995204796\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"424.33272524494964\" y1=\"187.26288656246481\" x2=\"416.6342661660593\" y2=\"185.08717338958314\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"477.3657338339407\" y1=\"185.08717338958314\" x2=\"469.66727475505036\" y2=\"187.26288656246481\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"78.35005995204796\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"383.96699141100896\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"510.03300858899104\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình I: 5√2 cm</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg></g><g data-hinh=\"II\" transform=\"translate(0 370)\"><svg height=\"370\" xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"16.970562748477143\" data-height=\"5\" data-scale3=\"10.891069963103146\" data-origin3=\"173,170\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,120.99018516603584 122.17241379310344,86.82758620689654 307,151.51724137931035\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,120.99018516603584 39,188.48275862068965 122.17241379310344,86.82758620689654\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,120.99018516603584 307,151.51724137931035 223.82758620689657,253.17241379310346\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,120.99018516603584 223.82758620689657,253.17241379310346 39,188.48275862068965\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"122.17241379310344\" y1=\"86.82758620689654\" x2=\"173\" y2=\"120.99018516603584\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.17241379310344\" y1=\"86.82758620689654\" x2=\"307\" y2=\"151.51724137931035\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"151.51724137931035\" x2=\"173\" y2=\"120.99018516603584\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"151.51724137931035\" x2=\"223.82758620689657\" y2=\"253.17241379310346\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"253.17241379310346\" x2=\"173\" y2=\"120.99018516603584\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"253.17241379310346\" x2=\"39\" y2=\"188.48275862068965\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"39\" y1=\"188.48275862068965\" x2=\"173\" y2=\"120.99018516603584\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.17241379310344\" y1=\"86.82758620689654\" x2=\"39\" y2=\"188.48275862068965\" data-edge3=\"A-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"120.99018516603584\" x2=\"173\" y2=\"170\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"170\" x2=\"265.41379310344826\" y2=\"202.3448275862069\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"120.99018516603584\" x2=\"265.41379310344826\" y2=\"202.3448275862069\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-8.485281374238571,-8.485281374238571,0\" cx=\"122.17241379310344\" cy=\"86.82758620689654\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"109.17241379310344\" y=\"94.82758620689654\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"8.485281374238571,-8.485281374238571,0\" cx=\"307\" cy=\"151.51724137931035\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"320\" y=\"159.51724137931035\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"8.485281374238571,8.485281374238571,0\" cx=\"223.82758620689657\" cy=\"253.17241379310346\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"236.82758620689657\" y=\"261.1724137931035\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-8.485281374238571,8.485281374238571,0\" cx=\"39\" cy=\"188.48275862068965\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"26\" y=\"196.48275862068965\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,5\" cx=\"173\" cy=\"120.99018516603584\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"105.99018516603584\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"170\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"182\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"8.485281374238571,0,0\" cx=\"265.41379310344826\" cy=\"202.3448275862069\" r=\"2\" fill=\"#64748b\"/><text x=\"279.41379310344826\" y=\"207.3448275862069\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"151\" y=\"145.49509258301794\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">h₂</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"9\"><polygon points=\"370.6324676318529,280 523.3675323681472,280 447,191.36027978383507\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"370.6324676318529\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"523.3675323681472\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"191.36027978383507\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"191.36027978383507\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"411.8466516010945\" y1=\"238.29099569937554\" x2=\"405.78581603075844\" y2=\"233.0692840844595\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"488.2141839692416\" y1=\"233.0692840844595\" x2=\"482.15334839890556\" y2=\"238.29099569937554\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"177.36027978383507\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"360.6324676318529\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"533.3675323681472\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình II: 12√2 cm</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg></g></svg>",
  "correctAnswer": "280",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Tìm khoảng cách từ tâm đáy đến đỉnh đáy\nVới hình vuông cạnh a, đường chéo dài $a\\sqrt2$, nên khoảng cách từ tâm đến đỉnh bằng $a\\sqrt2/2$.\nHai khoảng cách tương ứng là $5$ cm và $12$ cm.\nBước 2: Tìm chiều cao từng khối\nCạnh bên $13$ là cạnh huyền của tam giác vuông gồm chiều cao và đoạn từ tâm đến đỉnh đáy.\n$h_1=\\sqrt{13^2-5^2}=12$ cm.\n$h_2=\\sqrt{13^2-12^2}=5$ cm.\nCả hai chiều cao dương, nên hai hình đều tồn tại.\nBước 3: Tính hai thể tích\n$V_1=(5\\sqrt2)^2\\cdot12/3=50\\cdot4=200$ cm³.\n$V_2=(12\\sqrt2)^2\\cdot5/3=288\\cdot5/3=480$ cm³.\nBước 4: Kết luận\n$V_2-V_1=280$ cm³."
});
  bank["hinh-chop"]["hsg"].push({
  "id": "l8-hinh-chop-hsg-08",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Chu vi mặt bên xác định diện tích xung quanh",
  "prompt": "Mỗi mặt bên của một hình chóp tứ giác đều có chu vi $36$ cm và đường cao $12$ cm. Tính diện tích xung quanh của hình chóp theo cm².",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"10\" data-height=\"10.908712114635714\" data-scale3=\"16.622618005712766\" data-origin3=\"173,214.19821897429256\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,51.00000000000003 293.51398054141754,197.5756009685798 218.7121995157101,289\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,51.00000000000003 218.7121995157101,289 52.48601945858245,230.8208369800053\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"127.28780048428989\" y1=\"139.39643794858512\" x2=\"173\" y2=\"51.00000000000003\" data-edge3=\"A-S\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"127.28780048428989\" y1=\"139.39643794858512\" x2=\"293.51398054141754\" y2=\"197.5756009685798\" data-edge3=\"A-B\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"127.28780048428989\" y1=\"139.39643794858512\" x2=\"52.48601945858245\" y2=\"230.8208369800053\" data-edge3=\"A-D\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"293.51398054141754\" y1=\"197.5756009685798\" x2=\"173\" y2=\"51.00000000000003\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"293.51398054141754\" y1=\"197.5756009685798\" x2=\"218.7121995157101\" y2=\"289\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"218.7121995157101\" y1=\"289\" x2=\"173\" y2=\"51.00000000000003\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"218.7121995157101\" y1=\"289\" x2=\"52.48601945858245\" y2=\"230.8208369800053\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"52.48601945858245\" y1=\"230.8208369800053\" x2=\"173\" y2=\"51.00000000000003\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"51.00000000000003\" x2=\"173\" y2=\"214.19821897429256\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"214.19821897429256\" x2=\"256.1130900285638\" y2=\"243.2878004842899\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"51.00000000000003\" x2=\"256.1130900285638\" y2=\"243.2878004842899\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-5,-5,0\" cx=\"127.28780048428989\" cy=\"139.39643794858512\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"114.28780048428989\" y=\"147.39643794858512\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"5,-5,0\" cx=\"293.51398054141754\" cy=\"197.5756009685798\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"306.51398054141754\" y=\"205.5756009685798\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"5,5,0\" cx=\"218.7121995157101\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"231.7121995157101\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-5,5,0\" cx=\"52.48601945858245\" cy=\"230.8208369800053\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"39.48601945858245\" y=\"238.8208369800053\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,10.908712114635714\" cx=\"173\" cy=\"51.00000000000003\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"36.00000000000003\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"214.19821897429256\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"226.19821897429256\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"5,0,0\" cx=\"256.1130900285638\" cy=\"243.2878004842899\" r=\"2\" fill=\"#64748b\"/><text x=\"270.1130900285638\" y=\"248.2878004842899\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"16\"><polygon points=\"367,280 527,280 447,88\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"367\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"527\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"88\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"88\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"410.6923076923077\" y1=\"185.53846153846155\" x2=\"403.3076923076923\" y2=\"182.46153846153845\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"490.6923076923077\" y1=\"182.46153846153845\" x2=\"483.3076923076923\" y2=\"185.53846153846155\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"74\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"357\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"537\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">a</text><text x=\"469\" y=\"184\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">12 cm</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
  "correctAnswer": "240",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Biểu diễn cạnh của mặt bên\nGọi cạnh đáy là $a>0$ và cạnh bên là $s>0$.\nChu vi một mặt bên cho $a+2s=36$, nên $s=18-a/2$ và $a<36$.\nBước 2: Dùng đường cao của tam giác cân\nĐường cao mặt bên chia đáy thành hai phần $a/2$.\nTheo Pythagore, $s^2=12^2+(a/2)^2$.\nThay biểu thức s: $(18-a/2)^2=144+a^2/4$.\n$324-18a+a^2/4=144+a^2/4$, nên $a=10$ cm.\nBước 3: Kiểm và tính diện tích\nKhi $a=10$, $s=13$; chu vi $10+13+13=36$ và $13^2-5^2=12^2$.\nChiều cao khối có bình phương $12^2-5^2=119>0$, nên hình không suy biến.\n$S_{xq}=4\\cdot(10\\cdot12/2)=240$ cm².\nBước 4: Kết luận\nDiện tích xung quanh là $240$ cm²."
});
  bank["hinh-chop"]["hsg"].push({
  "id": "l8-hinh-chop-hsg-09",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Chóp tam giác có cả sáu cạnh bằng nhau",
  "prompt": "Hình chóp tam giác đều $S.ABC$ có cả sáu cạnh bằng $a>0$. Gọi $O$ là tâm đáy. Chứng minh $S_{xq}=3S_{ABC}$ và $SO^2=2a^2/3$.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"3\" data-base=\"6\" data-height=\"4.898979485566356\" data-scale3=\"37.69199901244664\" data-origin3=\"143.6219942022229,217.1870969387671\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"143.6219942022229,51 84.86598260666872,289 59.9240029626601,141.7040464450817\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"143.6219942022229,51 286.0759970373399,220.85724437121962 84.86598260666872,289\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"59.9240029626601\" y1=\"141.7040464450817\" x2=\"286.0759970373399\" y2=\"220.85724437121962\" data-edge3=\"B-C\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"84.86598260666872\" y1=\"289\" x2=\"143.6219942022229\" y2=\"51\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"84.86598260666872\" y1=\"289\" x2=\"59.9240029626601\" y2=\"141.7040464450817\" data-edge3=\"A-B\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"59.9240029626601\" y1=\"141.7040464450817\" x2=\"143.6219942022229\" y2=\"51\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"286.0759970373399\" y1=\"220.85724437121962\" x2=\"143.6219942022229\" y2=\"51\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"84.86598260666872\" y1=\"289\" x2=\"286.0759970373399\" y2=\"220.85724437121962\" data-edge3=\"A-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"143.6219942022229\" y1=\"51\" x2=\"143.6219942022229\" y2=\"217.1870969387671\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"143.6219942022229\" y1=\"217.1870969387671\" x2=\"185.4709898220043\" y2=\"254.9286221856098\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"143.6219942022229\" y1=\"51\" x2=\"185.4709898220043\" y2=\"254.9286221856098\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"0,3.464101615137755,0\" cx=\"84.86598260666872\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"71.86598260666872\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"-3,-1.7320508075688774,0\" cx=\"59.9240029626601\" cy=\"141.7040464450817\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"46.9240029626601\" y=\"149.7040464450817\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3,-1.7320508075688774,0\" cx=\"286.0759970373399\" cy=\"220.85724437121962\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"299.0759970373399\" y=\"228.85724437121962\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"S\" data-xyz=\"0,0,4.898979485566356\" cx=\"143.6219942022229\" cy=\"51\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"143.6219942022229\" y=\"36\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"143.6219942022229\" cy=\"217.1870969387671\" r=\"2\" fill=\"#64748b\"/><text x=\"131.6219942022229\" y=\"229.1870969387671\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"1.5,0.8660254037844387,0\" cx=\"185.4709898220043\" cy=\"254.9286221856098\" r=\"2\" fill=\"#64748b\"/><text x=\"199.4709898220043\" y=\"259.9286221856098\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"121.62199420222291\" y=\"134.09354846938356\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">SO</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"26\"><polygon points=\"369,280 525,280 447,144.9000370096276\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"369\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"525\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"144.9000370096276\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"144.9000370096276\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"411.46410161513774\" y1=\"214.45001850481378\" x2=\"404.53589838486226\" y2=\"210.45001850481378\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"489.46410161513774\" y1=\"210.45001850481378\" x2=\"482.53589838486226\" y2=\"214.45001850481378\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"130.9000370096276\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"359\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><text x=\"535\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">a</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg>",
  "solution": "Bước 1: So sánh bốn mặt của khối chóp\nCác tam giác $ABC,SAB,SBC,SCA$ đều có ba cạnh bằng a.\nChúng bằng nhau theo cạnh - cạnh - cạnh, nên có cùng diện tích.\nDiện tích xung quanh là tổng ba mặt bên, do đó $S_{xq}=3S_{ABC}$.\nBước 2: Tính đoạn từ đỉnh đáy đến tâm đáy\nGọi M là trung điểm của AC như trên hình. Tam giác ABC đều nên BM vừa là đường cao vừa là trung tuyến.\n$BM=\\sqrt{a^2-(a/2)^2}=a\\sqrt3/2$.\nTrong tam giác đều, tâm O cũng là trọng tâm, nên $BO=(2/3)BM=a\\sqrt3/3$.\nBước 3: Tính chiều cao của chóp\nHình chóp đều có $SO$ vuông góc mặt đáy, nên tam giác SOB vuông tại O.\n$SO^2=SB^2-BO^2=a^2-a^2/3=2a^2/3$.\nGiá trị này dương vì $a>0$.\nBước 4: Kết luận\nHai hệ thức cần chứng minh đều đúng."
});
  bank["hinh-chop"]["hsg"].push({
  "id": "l8-hinh-chop-hsg-10",
  "lop": 8,
  "chuDe": "hinh-chop",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Tốc độ tăng diện tích khi giữ nguyên đáy",
  "prompt": "Hai hình chóp tứ giác đều có cùng cạnh đáy $a>0$ và các chiều cao $0<h_1<h_2$. Gọi diện tích xung quanh tương ứng là $S_1,S_2$. Chứng minh $1<S_2/S_1<h_2/h_1$.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" viewBox=\"0 0 560 740\" width=\"100%\"><g data-hinh=\"I\" transform=\"translate(0 0)\"><svg height=\"370\" xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"6\" data-height=\"4\" data-scale3=\"30.80459770114943\" data-origin3=\"173,183.86206896551724\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,72.96551724137929 39,202.34482758620692 122.17241379310344,100.68965517241378\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,72.96551724137929 307,165.37931034482756 223.82758620689657,267.0344827586207\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,72.96551724137929 223.82758620689657,267.0344827586207 39,202.34482758620692\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"122.17241379310344\" y1=\"100.68965517241378\" x2=\"307\" y2=\"165.37931034482756\" data-edge3=\"A-B\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"122.17241379310344\" y1=\"100.68965517241378\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"A-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"165.37931034482756\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"307\" y1=\"165.37931034482756\" x2=\"223.82758620689657\" y2=\"267.0344827586207\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"267.0344827586207\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"223.82758620689657\" y1=\"267.0344827586207\" x2=\"39\" y2=\"202.34482758620692\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"39\" y1=\"202.34482758620692\" x2=\"173\" y2=\"72.96551724137929\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"122.17241379310344\" y1=\"100.68965517241378\" x2=\"39\" y2=\"202.34482758620692\" data-edge3=\"A-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"72.96551724137929\" x2=\"173\" y2=\"183.86206896551724\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"183.86206896551724\" x2=\"265.41379310344826\" y2=\"216.20689655172413\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"72.96551724137929\" x2=\"265.41379310344826\" y2=\"216.20689655172413\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-3,-3,0\" cx=\"122.17241379310344\" cy=\"100.68965517241378\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"109.17241379310344\" y=\"108.68965517241378\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"3,-3,0\" cx=\"307\" cy=\"165.37931034482756\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"320\" y=\"173.37931034482756\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3,3,0\" cx=\"223.82758620689657\" cy=\"267.0344827586207\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"236.82758620689657\" y=\"275.0344827586207\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-3,3,0\" cx=\"39\" cy=\"202.34482758620692\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"26\" y=\"210.34482758620692\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,4\" cx=\"173\" cy=\"72.96551724137929\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"57.96551724137929\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"183.86206896551724\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"195.86206896551724\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"3,0,0\" cx=\"265.41379310344826\" cy=\"216.20689655172413\" r=\"2\" fill=\"#64748b\"/><text x=\"279.41379310344826\" y=\"221.20689655172413\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"151\" y=\"128.41379310344826\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">h₁</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"26\"><polygon points=\"369,280 525,280 447,150\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"369\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"525\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"150\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"150\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"411.4299717028502\" y1=\"217.0579830217101\" x2=\"404.5700282971498\" y2=\"212.9420169782899\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"489.4299717028502\" y1=\"212.9420169782899\" x2=\"482.5700282971498\" y2=\"217.0579830217101\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"136\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"359\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"535\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">a</text><text x=\"469\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">d₁</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg></g><g data-hinh=\"II\" transform=\"translate(0 370)\"><svg height=\"370\" xmlns=\"http://www.w3.org/2000/svg\"  width=\"100%\" viewBox=\"0 0 560 370\" data-pyramid-sides=\"4\" data-base=\"6\" data-height=\"8\" data-scale3=\"24.040404040404038\" data-origin3=\"173,224.0909090909091\" role=\"img\" aria-label=\"Hình chóp đều\"><rect width=\"560\" height=\"370\" rx=\"8\" fill=\"#f8fafc\"/><text x=\"175\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Hình biểu diễn không gian</text><polygon points=\"173,51.00000000000003 277.57575757575756,209.66666666666666 212.66666666666666,289\" fill=\"#dbeafe\" stroke=\"none\"/><polygon points=\"173,51.00000000000003 212.66666666666666,289 68.42424242424244,238.51515151515153\" fill=\"#dbeafe\" stroke=\"none\"/><line x1=\"133.33333333333334\" y1=\"159.1818181818182\" x2=\"173\" y2=\"51.00000000000003\" data-edge3=\"A-S\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"133.33333333333334\" y1=\"159.1818181818182\" x2=\"277.57575757575756\" y2=\"209.66666666666666\" data-edge3=\"A-B\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"133.33333333333334\" y1=\"159.1818181818182\" x2=\"68.42424242424244\" y2=\"238.51515151515153\" data-edge3=\"A-D\" data-hidden=\"true\" stroke=\"#1e40af\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/><line x1=\"277.57575757575756\" y1=\"209.66666666666666\" x2=\"173\" y2=\"51.00000000000003\" data-edge3=\"B-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"277.57575757575756\" y1=\"209.66666666666666\" x2=\"212.66666666666666\" y2=\"289\" data-edge3=\"B-C\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"212.66666666666666\" y1=\"289\" x2=\"173\" y2=\"51.00000000000003\" data-edge3=\"C-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"212.66666666666666\" y1=\"289\" x2=\"68.42424242424244\" y2=\"238.51515151515153\" data-edge3=\"C-D\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"68.42424242424244\" y1=\"238.51515151515153\" x2=\"173\" y2=\"51.00000000000003\" data-edge3=\"D-S\" data-hidden=\"false\" stroke=\"#1e40af\" stroke-width=\"2\"/><line x1=\"173\" y1=\"51.00000000000003\" x2=\"173\" y2=\"224.0909090909091\" data-aux=\"SO\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"224.0909090909091\" x2=\"245.12121212121212\" y2=\"249.33333333333331\" data-aux=\"OM\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"4 4\"/><line x1=\"173\" y1=\"51.00000000000003\" x2=\"245.12121212121212\" y2=\"249.33333333333331\" data-aux=\"SM\" stroke=\"#b45309\" stroke-width=\"1.5\"/><circle data-vertex3=\"A\" data-xyz=\"-3,-3,0\" cx=\"133.33333333333334\" cy=\"159.1818181818182\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"120.33333333333334\" y=\"167.1818181818182\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">A</text><circle data-vertex3=\"B\" data-xyz=\"3,-3,0\" cx=\"277.57575757575756\" cy=\"209.66666666666666\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"290.57575757575756\" y=\"217.66666666666666\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><circle data-vertex3=\"C\" data-xyz=\"3,3,0\" cx=\"212.66666666666666\" cy=\"289\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"225.66666666666666\" y=\"297\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><circle data-vertex3=\"D\" data-xyz=\"-3,3,0\" cx=\"68.42424242424244\" cy=\"238.51515151515153\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"55.424242424242436\" y=\"246.51515151515153\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">D</text><circle data-vertex3=\"S\" data-xyz=\"0,0,8\" cx=\"173\" cy=\"51.00000000000003\" r=\"2.7\" fill=\"#1e40af\"/><text x=\"173\" y=\"36.00000000000003\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"16\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><circle data-aux-point=\"O\" data-xyz=\"0,0,0\" cx=\"173\" cy=\"224.0909090909091\" r=\"2\" fill=\"#64748b\"/><text x=\"161\" y=\"236.0909090909091\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">O</text><circle data-aux-point=\"M\" data-xyz=\"3,0,0\" cx=\"245.12121212121212\" cy=\"249.33333333333331\" r=\"2\" fill=\"#64748b\"/><text x=\"259.1212121212121\" y=\"254.33333333333331\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"151\" y=\"137.54545454545456\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">h₂</text><text x=\"445\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Mặt bên đúng tỉ lệ</text><g data-flat-face=\"S\" data-unit=\"23\"><polygon points=\"378,280 516,280 447,83.48791385769681\" fill=\"#fff7ed\" stroke=\"#b45309\" stroke-width=\"1.7\"/><circle data-flat-vertex=\"L\" cx=\"378\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"R\" cx=\"516\" cy=\"280\" r=\"1.8\" fill=\"#b45309\"/><circle data-flat-vertex=\"S\" cx=\"447\" cy=\"83.48791385769681\" r=\"1.8\" fill=\"#b45309\"/><line x1=\"447\" y1=\"83.48791385769681\" x2=\"447\" y2=\"280\" stroke=\"#64748b\" stroke-dasharray=\"4 3\"/><path d=\"M 439 280 v -8 h 8\" fill=\"none\" stroke=\"#64748b\"/><line x1=\"416.2741094895385\" y1=\"183.06913524174655\" x2=\"408.7258905104615\" y2=\"180.41877861595026\" stroke=\"#b45309\" stroke-width=\"1.8\"/><line x1=\"485.2741094895385\" y1=\"180.41877861595026\" x2=\"477.7258905104615\" y2=\"183.06913524174655\" stroke=\"#b45309\" stroke-width=\"1.8\"/><text x=\"447\" y=\"69.48791385769681\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"15\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">S</text><text x=\"368\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">B</text><text x=\"526\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"14\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">C</text><text x=\"447\" y=\"294\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">M</text><text x=\"447\" y=\"314\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">a</text><text x=\"469\" y=\"181.7439569288484\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"13\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">d₂</text></g><text x=\"280\" y=\"353\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"12\" fill=\"#0f172a\" stroke=\"#fff\" stroke-width=\"3\" paint-order=\"stroke\">Nét đứt: cạnh khuất hoặc đường phụ bên trong</text></svg></g></svg>",
  "solution": "Bước 1: Viết trung đoạn và diện tích của mỗi hình\nGọi trung đoạn là $d_1,d_2$. Khoảng cách từ tâm hình vuông đáy đến trung điểm một cạnh bằng $a/2$.\nTheo Pythagore, $d_1^2=h_1^2+a^2/4$ và $d_2^2=h_2^2+a^2/4$.\nMặt khác $S_1=2ad_1$, $S_2=2ad_2$, nên $S_2/S_1=d_2/d_1$.\nBước 2: Chứng minh cận dưới\nVì $h_2>h_1>0$, ta có $d_2^2>d_1^2$.\nHai trung đoạn đều dương, nên $d_2>d_1$ và $S_2/S_1>1$.\nBước 3: So sánh với tỉ số hai chiều cao\n$d_2^2h_1^2-d_1^2h_2^2=(h_2^2+a^2/4)h_1^2-(h_1^2+a^2/4)h_2^2$.\nRút gọn được $(a^2/4)(h_1^2-h_2^2)<0$ vì $a>0$ và $h_1<h_2$.\nChia cho $d_1^2h_1^2>0$, ta có $(d_2/d_1)^2<(h_2/h_1)^2$.\nHai tỉ số dương nên $d_2/d_1<h_2/h_1$.\nBước 4: Kết luận\nKết hợp hai cận, $1<S_2/S_1<h_2/h_1$.\nKhi giữ nguyên đáy, diện tích xung quanh tăng nhưng tăng ít hơn tỉ lệ tăng chiều cao."
});
  bank["xac-suat"]["kha"].push({
  "id": "l8-xac-suat-kha-04",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "kha",
  "mucDo": "NB",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Phân biệt dữ liệu đo và dữ liệu đếm",
  "prompt": "Dữ liệu nào sau đây là dữ liệu liên tục?",
  "svg": "",
  "options": [
    "A. Thời gian chạy $100$ m của mỗi bạn.",
    "B. Số quyển sách trong cặp.",
    "C. Số học sinh của lớp.",
    "D. Số lớp của một khối."
  ],
  "correctAnswer": "A",
  "solution": "Bước 1: Phân biệt dữ liệu đo và dữ liệu đếm\nSố sách, số học sinh và số lớp là những số đếm nguyên không âm.\nThời gian chạy được đo; tùy độ chính xác của dụng cụ, có thể ghi $12,4$ giây, $12,43$ giây hoặc giá trị chi tiết hơn.\nBước 2: Kết luận\nThời gian chạy là dữ liệu liên tục. Chọn A."
});
  bank["xac-suat"]["kha"].push({
  "id": "l8-xac-suat-kha-05",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "kha",
  "mucDo": "TH",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Ô quay có góc không bằng nhau",
  "prompt": "Một vòng quay có các miền đỏ $90°$, xanh $90°$, vàng $60°$, tím $120°$. Giả sử kim có khả năng dừng như nhau tại mọi vị trí trên vòng, bỏ qua ranh giới các miền. Xác suất dừng ở miền vàng bằng bao nhiêu?",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 310\" data-chart=\"spinner\"><rect width=\"560\" height=\"310\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><text x=\"280\" y=\"28\" text-anchor=\"middle\">Các miền màu của vòng quay</text><path data-sector=\"Đỏ\" data-angle=\"90\" d=\"M 180 170 L 180 65 A 105 105 0 0 1 285 170 Z\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"229.00249993622774\" y=\"125.99750006377226\" text-anchor=\"middle\" font-size=\"16\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">90°</text><path data-sector=\"Xanh\" data-angle=\"90\" d=\"M 180 170 L 285 170 A 105 105 0 0 1 180 275 Z\" fill=\"#60a5fa\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"229.00249993622774\" y=\"224.00249993622774\" text-anchor=\"middle\" font-size=\"16\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">90°</text><path data-sector=\"Vàng\" data-angle=\"60\" d=\"M 180 170 L 180 275 A 105 105 0 0 1 89.06733260263395 222.50000000000003 Z\" fill=\"#facc15\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"145.35000000000002\" y=\"235.0155604822616\" text-anchor=\"middle\" font-size=\"16\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">60°</text><path data-sector=\"Tím\" data-angle=\"120\" d=\"M 180 170 L 89.06733260263395 222.50000000000003 A 105 105 0 0 1 179.99999999999997 65 Z\" fill=\"#c084fc\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"119.98443951773838\" y=\"140.35000000000005\" text-anchor=\"middle\" font-size=\"16\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">120°</text><circle cx=\"180\" cy=\"170\" r=\"105\" fill=\"none\" stroke=\"#334155\"/><circle cx=\"180\" cy=\"170\" r=\"3\" fill=\"#0f172a\"/><rect x=\"333\" y=\"75\" width=\"18\" height=\"18\" fill=\"#ef4444\"/><text x=\"365\" y=\"90\" font-size=\"15\">Đỏ</text><rect x=\"333\" y=\"115\" width=\"18\" height=\"18\" fill=\"#60a5fa\"/><text x=\"365\" y=\"130\" font-size=\"15\">Xanh</text><rect x=\"333\" y=\"155\" width=\"18\" height=\"18\" fill=\"#facc15\"/><text x=\"365\" y=\"170\" font-size=\"15\">Vàng</text><rect x=\"333\" y=\"195\" width=\"18\" height=\"18\" fill=\"#c084fc\"/><text x=\"365\" y=\"210\" font-size=\"15\">Tím</text></g></svg>",
  "options": [
    "A. $1/4$",
    "B. $1/6$",
    "C. $1/3$",
    "D. $2/3$"
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Xác định phần của vòng quay ứng với miền vàng\nTổng các góc là $90+90+60+120=360°$.\nMiền vàng chiếm $60/360=1/6$ của vòng.\nBước 2: Dùng giả thiết về khả năng dừng\nVì mọi vị trí có khả năng dừng như nhau, xác suất một miền bằng phần góc mà miền đó chiếm.\nDo đó xác suất cần tìm là $1/6$.\nBước 3: Kết luận\nChọn B. Không lấy $1/4$ chỉ vì có bốn màu: bốn miền không có góc bằng nhau."
});
  bank["xac-suat"]["nangCao"].push({
  "id": "l8-xac-suat-nang-cao-08",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "So đơn giá từ hai cột khác đơn vị",
  "prompt": "Ba cửa hàng bán cùng loại hàng với khối lượng và giá tiền trong bảng. Mua đúng lượng ghi ở mỗi cửa hàng, không có phí khác. Cửa hàng nào có giá mỗi kilôgam thấp nhất?",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 269\" data-chart=\"table\"><rect width=\"560\" height=\"269\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><text x=\"280\" y=\"30\" text-anchor=\"middle\">Báo giá cùng một loại hàng</text><rect x=\"45\" y=\"64\" width=\"157\" height=\"45\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text data-cell=\"0,0\" x=\"123.5\" y=\"92\" text-anchor=\"middle\" font-size=\"16\">Cửa hàng</text><rect x=\"202\" y=\"64\" width=\"157\" height=\"45\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text data-cell=\"0,1\" x=\"280.5\" y=\"92\" text-anchor=\"middle\" font-size=\"16\">Khối lượng (kg)</text><rect x=\"359\" y=\"64\" width=\"157\" height=\"45\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text data-cell=\"0,2\" x=\"437.5\" y=\"92\" text-anchor=\"middle\" font-size=\"16\">Giá (nghìn đồng)</text><rect x=\"45\" y=\"109\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"1,0\" x=\"123.5\" y=\"137\" text-anchor=\"middle\" font-size=\"16\">A</text><rect x=\"202\" y=\"109\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"1,1\" x=\"280.5\" y=\"137\" text-anchor=\"middle\" font-size=\"16\">2,5</text><rect x=\"359\" y=\"109\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"1,2\" x=\"437.5\" y=\"137\" text-anchor=\"middle\" font-size=\"16\">65</text><rect x=\"45\" y=\"154\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"2,0\" x=\"123.5\" y=\"182\" text-anchor=\"middle\" font-size=\"16\">B</text><rect x=\"202\" y=\"154\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"2,1\" x=\"280.5\" y=\"182\" text-anchor=\"middle\" font-size=\"16\">4</text><rect x=\"359\" y=\"154\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"2,2\" x=\"437.5\" y=\"182\" text-anchor=\"middle\" font-size=\"16\">100</text><rect x=\"45\" y=\"199\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"3,0\" x=\"123.5\" y=\"227\" text-anchor=\"middle\" font-size=\"16\">C</text><rect x=\"202\" y=\"199\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"3,1\" x=\"280.5\" y=\"227\" text-anchor=\"middle\" font-size=\"16\">3</text><rect x=\"359\" y=\"199\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"3,2\" x=\"437.5\" y=\"227\" text-anchor=\"middle\" font-size=\"16\">81</text></g></svg>",
  "options": [
    "A. A: $26$ nghìn đồng/kg.",
    "B. B: $25$ nghìn đồng/kg.",
    "C. C: $27$ nghìn đồng/kg.",
    "D. B: $100$ nghìn đồng/kg."
  ],
  "correctAnswer": "B",
  "solution": "Bước 1: Đưa ba báo giá về cùng một kilôgam\nĐơn giá A là $65/2,5=26$ nghìn đồng/kg.\nĐơn giá B là $100/4=25$ nghìn đồng/kg.\nĐơn giá C là $81/3=27$ nghìn đồng/kg.\nBước 2: So sánh cùng đại lượng\nTrong ba đơn giá $26,25,27$, nhỏ nhất là $25$.\nKhông so trực tiếp $65,100,81$, vì ba số tiền ứng với khối lượng khác nhau.\nBước 3: Kết luận\nCửa hàng B rẻ nhất, với giá $25$ nghìn đồng/kg. Chọn B."
});
  bank["xac-suat"]["nangCao"].push({
  "id": "l8-xac-suat-nang-cao-09",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "nangCao",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "chon",
  "title": "Các nhóm khảo sát có thể trùng nhau",
  "prompt": "Trong $30$ học sinh được hỏi, $18$ bạn chọn bóng đá, $14$ bạn chọn cầu lông và $8$ bạn chọn bơi. Mỗi bạn được chọn nhiều môn. Nhận xét nào đúng về việc dùng ba số này làm ba phần của biểu đồ quạt tròn “Tỉ lệ học sinh theo môn”?",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 340\" data-chart=\"bars\"><rect width=\"560\" height=\"340\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><text x=\"280\" y=\"27\" text-anchor=\"middle\">Số học sinh chọn mỗi môn</text><path d=\"M75 285H515\" stroke=\"#cbd5e1\"/><text x=\"62\" y=\"290\" text-anchor=\"end\">0</text><path d=\"M75 235H515\" stroke=\"#cbd5e1\"/><text x=\"62\" y=\"240\" text-anchor=\"end\">5</text><path d=\"M75 185H515\" stroke=\"#cbd5e1\"/><text x=\"62\" y=\"190\" text-anchor=\"end\">10</text><path d=\"M75 135H515\" stroke=\"#cbd5e1\"/><text x=\"62\" y=\"140\" text-anchor=\"end\">15</text><path d=\"M75 85H515\" stroke=\"#cbd5e1\"/><text x=\"62\" y=\"90\" text-anchor=\"end\">20</text><path d=\"M75 65V285H515\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/><rect data-bar=\"Bóng đá\" data-value=\"18\" x=\"115\" y=\"105\" width=\"65\" height=\"180\" fill=\"#2563eb\"/><text x=\"147.5\" y=\"95\" text-anchor=\"middle\">18</text><text x=\"147.5\" y=\"312\" text-anchor=\"middle\">Bóng đá</text><rect data-bar=\"Cầu lông\" data-value=\"14\" x=\"250\" y=\"145\" width=\"65\" height=\"140\" fill=\"#2563eb\"/><text x=\"282.5\" y=\"135\" text-anchor=\"middle\">14</text><text x=\"282.5\" y=\"312\" text-anchor=\"middle\">Cầu lông</text><rect data-bar=\"Bơi\" data-value=\"8\" x=\"385\" y=\"205\" width=\"65\" height=\"80\" fill=\"#2563eb\"/><text x=\"417.5\" y=\"195\" text-anchor=\"middle\">8</text><text x=\"417.5\" y=\"312\" text-anchor=\"middle\">Bơi</text></g></svg>",
  "options": [
    "A. Dùng được vì cả ba số đều dương.",
    "B. Số liệu chắc chắn sai vì tổng vượt $30$.",
    "C. Chưa dùng được: các nhóm có thể trùng nhau, không phải ba phần rời của $30$ học sinh.",
    "D. Chia ba số cho $40$ sẽ cho đúng tỉ lệ trong $30$ học sinh."
  ],
  "correctAnswer": "C",
  "solution": "Bước 1: Xét điều kiện của biểu đồ cơ cấu\nBa phần của biểu đồ quạt tròn phải tạo thành một toàn thể, không đếm một thành viên vào nhiều phần.\nBước 2: Đọc đúng cách khảo sát\nMỗi học sinh được chọn nhiều môn, nên các nhóm có thể trùng nhau.\nTổng $18+14+8=40$ là số lượt chọn, không phải số học sinh được hỏi.\nViệc tổng vượt $30$ vì vậy không đủ để kết luận số liệu sai.\nBước 3: Phân biệt hai loại tỉ lệ\nChia cho $40$ cho tỉ lệ lượt chọn, không phải tỉ lệ trong $30$ học sinh.\nBiểu đồ cột có thể trình bày riêng số bạn chọn từng môn mà không coi ba nhóm là ba phần rời nhau.\nBước 4: Kết luận\nNhận xét C đúng."
});
  bank["xac-suat"]["nangCao"].push({
  "id": "l8-xac-suat-nang-cao-10",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "nangCao",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "chon",
  "title": "Biến cố có đúng một trong hai dấu",
  "prompt": "Có $20$ thẻ giống nhau về kích thước và khối lượng, trong đó $8$ thẻ có hình sao, $10$ thẻ có hình tròn và $3$ thẻ có cả hai hình. Trộn đều rồi rút ngẫu nhiên một thẻ. Xác suất thẻ có đúng một trong hai hình là bao nhiêu?",
  "svg": "",
  "options": [
    "A. $3/20$",
    "B. $15/20$",
    "C. $18/20$",
    "D. $3/5$"
  ],
  "correctAnswer": "D",
  "solution": "Bước 1: Tách phần có cả hai hình\nBa thẻ có cả sao và tròn không được tính vào nhóm có đúng một hình.\nSố thẻ chỉ có sao là $8-3=5$; số thẻ chỉ có tròn là $10-3=7$.\nBước 2: Đếm nhóm cần tìm\nHai nhóm chỉ có một hình không trùng nhau, nên tổng là $5+7=12$ thẻ.\nCó $20$ thẻ được rút với khả năng như nhau.\nBước 3: Tính xác suất và kết luận\n$P=12/20=3/5$. Chọn D.\n$3/20$ ứng với cả hai hình; $15/20$ ứng với ít nhất một hình; $18/20$ cộng hai nhóm mà chưa xử lý phần trùng."
});
  bank["xac-suat"]["hsg"].push({
  "id": "l8-xac-suat-hsg-06",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "hsg",
  "mucDo": "VD",
  "nangLuc": [
    "tu-duy-lap-luan"
  ],
  "dang": "dien",
  "title": "Tổng thể tích từ số chai và dung tích",
  "prompt": "Bảng cho biết số chai nước đã bán trong ba ngày. Mỗi chai chứa đủ dung tích ghi ở đầu cột. Tính tổng lượng nước bán trong cả ba ngày, theo lít.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 269\" data-chart=\"table\"><rect width=\"560\" height=\"269\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><text x=\"280\" y=\"30\" text-anchor=\"middle\">Số chai nước đã bán</text><rect x=\"45\" y=\"64\" width=\"157\" height=\"45\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text data-cell=\"0,0\" x=\"123.5\" y=\"92\" text-anchor=\"middle\" font-size=\"16\">Ngày</text><rect x=\"202\" y=\"64\" width=\"157\" height=\"45\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text data-cell=\"0,1\" x=\"280.5\" y=\"92\" text-anchor=\"middle\" font-size=\"16\">Số chai 250 ml</text><rect x=\"359\" y=\"64\" width=\"157\" height=\"45\" fill=\"#dbeafe\" stroke=\"#94a3b8\"/><text data-cell=\"0,2\" x=\"437.5\" y=\"92\" text-anchor=\"middle\" font-size=\"16\">Số chai 500 ml</text><rect x=\"45\" y=\"109\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"1,0\" x=\"123.5\" y=\"137\" text-anchor=\"middle\" font-size=\"16\">Ngày 1</text><rect x=\"202\" y=\"109\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"1,1\" x=\"280.5\" y=\"137\" text-anchor=\"middle\" font-size=\"16\">24</text><rect x=\"359\" y=\"109\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"1,2\" x=\"437.5\" y=\"137\" text-anchor=\"middle\" font-size=\"16\">18</text><rect x=\"45\" y=\"154\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"2,0\" x=\"123.5\" y=\"182\" text-anchor=\"middle\" font-size=\"16\">Ngày 2</text><rect x=\"202\" y=\"154\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"2,1\" x=\"280.5\" y=\"182\" text-anchor=\"middle\" font-size=\"16\">18</text><rect x=\"359\" y=\"154\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"2,2\" x=\"437.5\" y=\"182\" text-anchor=\"middle\" font-size=\"16\">12</text><rect x=\"45\" y=\"199\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"3,0\" x=\"123.5\" y=\"227\" text-anchor=\"middle\" font-size=\"16\">Ngày 3</text><rect x=\"202\" y=\"199\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"3,1\" x=\"280.5\" y=\"227\" text-anchor=\"middle\" font-size=\"16\">12</text><rect x=\"359\" y=\"199\" width=\"157\" height=\"45\" fill=\"white\" stroke=\"#94a3b8\"/><text data-cell=\"3,2\" x=\"437.5\" y=\"227\" text-anchor=\"middle\" font-size=\"16\">6</text></g></svg>",
  "correctAnswer": "31.5",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Cộng số chai theo từng dung tích\nSố chai $250$ ml là $24+18+12=54$ chai.\nSố chai $500$ ml là $18+12+6=36$ chai.\nBước 2: Tính lượng nước trước khi cộng hai loại\nLoại thứ nhất chứa $54\\cdot250=13500$ ml.\nLoại thứ hai chứa $36\\cdot500=18000$ ml.\nTổng lượng nước là $13500+18000=31500$ ml.\nBước 3: Đổi đơn vị và kết luận\nVì $1000$ ml bằng $1$ lít, tổng lượng nước là $31,5$ lít."
});
  bank["xac-suat"]["hsg"].push({
  "id": "l8-xac-suat-hsg-07",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Xác suất của các miền có góc nhỏ hơn một góc cho trước",
  "prompt": "Một vòng quay gồm bốn miền đỏ, xanh, vàng, xanh lá có góc lần lượt là $θ$, $2θ$, $90°$ và $270°-3θ$; cả bốn góc đều dương. Kim có khả năng dừng như nhau tại mọi vị trí, bỏ qua ranh giới. Xác suất dừng trong một miền có góc NHỎ HƠN $90°$ bằng $1/6$. Tính tổng tất cả số đo có thể có của góc miền xanh, theo độ.",
  "svg": "",
  "correctAnswer": "160",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Tìm miền giá trị và điều kiện tổng góc\nCác góc dương cho $0<θ<90°$.\nXác suất $1/6$ nghĩa là tổng góc của các miền nhỏ hơn $90°$ bằng $360°/6=60°$.\nMiền đỏ luôn được tính, miền vàng không được tính vì góc của nó đúng bằng $90°$.\nBước 2: Xét khi miền xanh nhỏ hơn 90 độ\nNếu $0<θ<45°$, cả đỏ và xanh được tính; miền xanh lá có góc lớn hơn $135°$, không được tính.\nDo đó $θ+2θ=60°$, cho $θ=20°$, thuộc khoảng đang xét.\nBước 3: Xét khoảng giữa\nNếu $45°\\leθ\\le60°$, miền xanh và xanh lá đều có góc ít nhất bằng $90°$.\nChỉ miền đỏ được tính, nên $θ=60°$. Giá trị biên này được nhận vì miền xanh lá đúng bằng $90°$, không phải nhỏ hơn.\nBước 4: Xét khoảng còn lại và thử lại\nNếu $60°<θ<90°$, đỏ và xanh lá được tính. Khi đó $θ+(270°-3θ)=60°$, cho $θ=105°$, nằm ngoài khoảng nên loại.\nVới $θ=20°$, bốn góc là $20°,40°,90°,210°$: phần cần tính là $20°+40°=60°$.\nVới $θ=60°$, bốn góc là $60°,120°,90°,90°$: phần cần tính chỉ là $60°$.\nBước 5: Kết luận\nGóc miền xanh có thể là $40°$ hoặc $120°$. Tổng là $160°$."
});
  bank["xac-suat"]["hsg"].push({
  "id": "l8-xac-suat-hsg-08",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de"
  ],
  "dang": "dien",
  "title": "Đổi màu ít nhất để đạt hai yêu cầu xác suất",
  "prompt": "Vòng quay có $8$ ô bằng nhau ghi các số từ $1$ đến $8$; các ô có khả năng được chọn như nhau. Ban đầu ô chẵn màu đỏ, ô lẻ màu xanh. Được đổi màu từng ô giữa đỏ và xanh. Cần đổi ít nhất bao nhiêu ô để xác suất ô đỏ vẫn là $1/2$, còn xác suất “ô đỏ và số lớn hơn $4$” bằng $3/8$?",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 310\" data-chart=\"spinner\"><rect width=\"560\" height=\"310\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><text x=\"280\" y=\"28\" text-anchor=\"middle\">Màu ban đầu của tám ô</text><path data-sector=\"1\" data-angle=\"45\" d=\"M 180 170 L 180 65 A 105 105 0 0 1 254.2462120245875 95.75378797541252 Z\" fill=\"#60a5fa\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"206.51996186290071\" y=\"110.97514839696782\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">1</text><path data-sector=\"2\" data-angle=\"45\" d=\"M 180 170 L 254.2462120245875 95.75378797541252 A 105 105 0 0 1 285 170 Z\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"244.02485160303218\" y=\"148.48003813709929\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">2</text><path data-sector=\"3\" data-angle=\"45\" d=\"M 180 170 L 285 170 A 105 105 0 0 1 254.2462120245875 244.24621202458746 Z\" fill=\"#60a5fa\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"244.02485160303218\" y=\"201.51996186290071\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">3</text><path data-sector=\"4\" data-angle=\"45\" d=\"M 180 170 L 254.2462120245875 244.24621202458746 A 105 105 0 0 1 180 275 Z\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"206.51996186290071\" y=\"239.02485160303218\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">4</text><path data-sector=\"5\" data-angle=\"45\" d=\"M 180 170 L 180 275 A 105 105 0 0 1 105.75378797541252 244.2462120245875 Z\" fill=\"#60a5fa\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"153.48003813709929\" y=\"239.02485160303218\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">5</text><path data-sector=\"6\" data-angle=\"45\" d=\"M 180 170 L 105.75378797541252 244.2462120245875 A 105 105 0 0 1 75 170 Z\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"115.97514839696782\" y=\"201.51996186290074\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">6</text><path data-sector=\"7\" data-angle=\"45\" d=\"M 180 170 L 75 170 A 105 105 0 0 1 105.7537879754125 95.75378797541252 Z\" fill=\"#60a5fa\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"115.97514839696782\" y=\"148.48003813709929\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">7</text><path data-sector=\"8\" data-angle=\"45\" d=\"M 180 170 L 105.7537879754125 95.75378797541252 A 105 105 0 0 1 179.99999999999997 65 Z\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"153.48003813709923\" y=\"110.97514839696785\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">8</text><circle cx=\"180\" cy=\"170\" r=\"105\" fill=\"none\" stroke=\"#334155\"/><circle cx=\"180\" cy=\"170\" r=\"3\" fill=\"#0f172a\"/><rect x=\"333\" y=\"75\" width=\"18\" height=\"18\" fill=\"#60a5fa\"/><text x=\"365\" y=\"90\" font-size=\"15\">Ô lẻ: xanh</text><rect x=\"333\" y=\"115\" width=\"18\" height=\"18\" fill=\"#ef4444\"/><text x=\"365\" y=\"130\" font-size=\"15\">Ô chẵn: đỏ</text></g></svg>",
  "correctAnswer": "2",
  "dapAnChapNhan": [],
  "solution": "Bước 1: Đổi hai yêu cầu thành số ô\nXác suất đỏ bằng $1/2$ nghĩa là sau khi đổi vẫn có đúng $4$ ô đỏ.\nXác suất đỏ và lớn hơn $4$ bằng $3/8$ nghĩa là trong các ô $5,6,7,8$ có đúng $3$ ô đỏ.\nBước 2: Chỉ ra vì sao phải đổi ít nhất hai ô\nBan đầu trong nhóm lớn hơn $4$ chỉ có $6,8$ đỏ, nên phải đổi ít nhất một ô xanh của nhóm này thành đỏ.\nĐể tổng số đỏ vẫn bằng $4$, phải đổi thêm ít nhất một ô đỏ thành xanh.\nMột lần đổi không thể thực hiện cả hai việc; cần ít nhất hai ô.\nBước 3: Dựng cách đổi đạt yêu cầu\nĐổi ô $5$ thành đỏ và ô $2$ thành xanh.\nKhi đó các ô đỏ là $4,5,6,8$: có bốn ô đỏ, trong đó ba ô lớn hơn $4$.\nHai xác suất lần lượt là $4/8=1/2$ và $3/8$.\nBước 4: Kết luận\nSố ô cần đổi ít nhất là $2$."
});
  bank["xac-suat"]["hsg"].push({
  "id": "l8-xac-suat-hsg-09",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Thiết kế diện tích biểu tượng tỉ lệ số liệu",
  "prompt": "Một báo cáo dùng DIỆN TÍCH ba hình vuông để biểu diễn số sản phẩm A, B, C lần lượt là $30,60,90$. Hình vuông A có cạnh $2$ cm. Hãy xác định cạnh của B và C để biểu diễn đúng tỉ lệ; chứng minh với cách chọn đó, diện tích hình C bằng tổng diện tích hai hình A và B.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 290\" ><rect width=\"560\" height=\"290\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><text x=\"280\" y=\"28\" text-anchor=\"middle\">Diện tích biểu tượng tỉ lệ số sản phẩm</text><rect data-icon=\"A\" data-count=\"30\" x=\"65\" y=\"150\" width=\"70\" height=\"70\" fill=\"#93c5fd\" stroke=\"#334155\"/><text x=\"100\" y=\"138\" text-anchor=\"middle\">2 cm</text><text x=\"100\" y=\"252\" text-anchor=\"middle\">A: 30</text><rect data-icon=\"B\" data-count=\"60\" x=\"230\" y=\"121.00505063388334\" width=\"98.99494936611666\" height=\"98.99494936611666\" fill=\"#fdba74\" stroke=\"#334155\"/><text x=\"279.49747468305833\" y=\"109.00505063388334\" text-anchor=\"middle\">?</text><text x=\"279.49747468305833\" y=\"252\" text-anchor=\"middle\">B: 60</text><rect data-icon=\"C\" data-count=\"90\" x=\"395\" y=\"98.7564434701786\" width=\"121.2435565298214\" height=\"121.2435565298214\" fill=\"#86efac\" stroke=\"#334155\"/><text x=\"455.6217782649107\" y=\"86.7564434701786\" text-anchor=\"middle\">?</text><text x=\"455.6217782649107\" y=\"252\" text-anchor=\"middle\">C: 90</text></g></svg>",
  "solution": "Bước 1: Xác định các diện tích cần có\nHình A có diện tích $2^2=4$ cm², biểu diễn $30$ sản phẩm.\nB có số sản phẩm gấp đôi A nên phải có diện tích $8$ cm².\nC có số sản phẩm gấp ba A nên phải có diện tích $12$ cm².\nBước 2: Chọn độ dài cạnh dương\nGọi cạnh của B, C là b,c. Điều kiện diện tích cho $b^2=8$, $c^2=12$.\nVì độ dài dương, $b=2\\sqrt2$ cm và $c=2\\sqrt3$ cm.\nBước 3: Kiểm tỉ lệ và hệ thức diện tích\nBa diện tích là $4,8,12$, có tỉ lệ $1:2:3$, đúng tỉ lệ $30:60:90$.\nĐồng thời $S_A+S_B=4+8=12=S_C$.\nHệ thức này phù hợp dữ liệu vì $30+60=90$; nó nói về diện tích, không phải tổng độ dài cạnh.\nBước 4: Kết luận\nChọn cạnh B là $2\\sqrt2$ cm, cạnh C là $2\\sqrt3$ cm. Ba biểu tượng đúng tỉ lệ và $S_C=S_A+S_B$."
});
  bank["xac-suat"]["hsg"].push({
  "id": "l8-xac-suat-hsg-10",
  "lop": 8,
  "chuDe": "xac-suat",
  "tang": "hsg",
  "mucDo": "VDC",
  "nangLuc": [
    "tu-duy-lap-luan",
    "giai-quyet-van-de",
    "giao-tiep-toan-hoc"
  ],
  "dang": "chungMinh",
  "title": "Chia nhỏ miền màu không đổi xác suất",
  "prompt": "Một vòng quay có miền đỏ $90°$, xanh $90°$, vàng $180°$. Kim có khả năng dừng như nhau tại mọi vị trí, bỏ qua ranh giới. Chia miền vàng thành $6$ miền nhỏ, mỗi miền $30°$, nhưng không đổi màu. Một bạn cho rằng xác suất vàng tăng từ $1/2$ lên $6/8$. Giải thích xác suất có thay đổi không, và vì sao cách đếm $6/8$ dùng sai ở đây.",
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"math-svg\" width=\"100%\" viewBox=\"0 0 560 620\" ><rect width=\"560\" height=\"620\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><g data-hinh=\"I\" transform=\"translate(0 0)\"><rect width=\"560\" height=\"310\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><text x=\"280\" y=\"28\" text-anchor=\"middle\">I - Trước khi chia</text><path data-sector=\"Đỏ\" data-angle=\"90\" d=\"M 180 170 L 180 65 A 105 105 0 0 1 285 170 Z\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"229.00249993622774\" y=\"125.99750006377226\" text-anchor=\"middle\" font-size=\"16\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">90°</text><path data-sector=\"Xanh\" data-angle=\"90\" d=\"M 180 170 L 285 170 A 105 105 0 0 1 180 275 Z\" fill=\"#60a5fa\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"229.00249993622774\" y=\"224.00249993622774\" text-anchor=\"middle\" font-size=\"16\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">90°</text><path data-sector=\"Vàng\" data-angle=\"180\" d=\"M 180 170 L 180 275 A 105 105 0 0 1 179.99999999999997 65 Z\" fill=\"#facc15\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"110.7\" y=\"175\" text-anchor=\"middle\" font-size=\"16\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">180°</text><circle cx=\"180\" cy=\"170\" r=\"105\" fill=\"none\" stroke=\"#334155\"/><circle cx=\"180\" cy=\"170\" r=\"3\" fill=\"#0f172a\"/><rect x=\"333\" y=\"75\" width=\"18\" height=\"18\" fill=\"#ef4444\"/><text x=\"365\" y=\"90\" font-size=\"15\">Đỏ</text><rect x=\"333\" y=\"115\" width=\"18\" height=\"18\" fill=\"#60a5fa\"/><text x=\"365\" y=\"130\" font-size=\"15\">Xanh</text><rect x=\"333\" y=\"155\" width=\"18\" height=\"18\" fill=\"#facc15\"/><text x=\"365\" y=\"170\" font-size=\"15\">Vàng</text></g></g><g data-hinh=\"II\" transform=\"translate(0 310)\"><rect width=\"560\" height=\"310\" rx=\"12\" fill=\"#f8fafc\"/><g font-family=\"Arial, sans-serif\" font-size=\"17\" fill=\"#172554\"><text x=\"280\" y=\"28\" text-anchor=\"middle\">II - Sau khi chia miền vàng</text><path data-sector=\"Đỏ\" data-angle=\"90\" d=\"M 180 170 L 180 65 A 105 105 0 0 1 285 170 Z\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"229.00249993622774\" y=\"125.99750006377226\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">90°</text><path data-sector=\"Xanh\" data-angle=\"90\" d=\"M 180 170 L 285 170 A 105 105 0 0 1 180 275 Z\" fill=\"#60a5fa\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"229.00249993622774\" y=\"224.00249993622774\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">90°</text><path data-sector=\"V1\" data-angle=\"30\" d=\"M 180 170 L 180 275 A 105 105 0 0 1 127.50000000000003 260.93266739736606 Z\" fill=\"#facc15\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"162.06384017439532\" y=\"241.9386597618324\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">30°</text><path data-sector=\"V2\" data-angle=\"30\" d=\"M 180 170 L 127.50000000000003 260.93266739736606 A 105 105 0 0 1 89.06733260263395 222.50000000000003 Z\" fill=\"#facc15\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"130.99750006377226\" y=\"224.00249993622774\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">30°</text><path data-sector=\"V3\" data-angle=\"30\" d=\"M 180 170 L 89.06733260263395 222.50000000000003 A 105 105 0 0 1 75 170.00000000000006 Z\" fill=\"#facc15\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"113.06134023816757\" y=\"192.9361598256047\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">30°</text><path data-sector=\"V4\" data-angle=\"30\" d=\"M 180 170 L 75 170.00000000000006 A 105 105 0 0 1 89.0673326026339 117.50000000000006 Z\" fill=\"#facc15\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"113.06134023816756\" y=\"157.06384017439535\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">30°</text><path data-sector=\"V5\" data-angle=\"30\" d=\"M 180 170 L 89.0673326026339 117.50000000000006 A 105 105 0 0 1 127.49999999999994 79.06733260263395 Z\" fill=\"#facc15\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"130.99750006377224\" y=\"125.99750006377229\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">30°</text><path data-sector=\"V6\" data-angle=\"30\" d=\"M 180 170 L 127.49999999999994 79.06733260263395 A 105 105 0 0 1 179.99999999999997 65 Z\" fill=\"#facc15\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"162.06384017439527\" y=\"108.06134023816759\" text-anchor=\"middle\" font-size=\"14\" stroke=\"white\" stroke-width=\"3\" paint-order=\"stroke\">30°</text><circle cx=\"180\" cy=\"170\" r=\"105\" fill=\"none\" stroke=\"#334155\"/><circle cx=\"180\" cy=\"170\" r=\"3\" fill=\"#0f172a\"/><rect x=\"333\" y=\"75\" width=\"18\" height=\"18\" fill=\"#ef4444\"/><text x=\"365\" y=\"90\" font-size=\"15\">Đỏ</text><rect x=\"333\" y=\"115\" width=\"18\" height=\"18\" fill=\"#60a5fa\"/><text x=\"365\" y=\"130\" font-size=\"15\">Xanh</text><rect x=\"333\" y=\"155\" width=\"18\" height=\"18\" fill=\"#facc15\"/><text x=\"365\" y=\"170\" font-size=\"15\">Vàng</text></g></g></g></svg>",
  "solution": "Bước 1: Tính xác suất trước khi chia\nMiền vàng chiếm $180/360=1/2$ vòng, nên xác suất vàng là $1/2$.\nBước 2: Xét phần vàng sau khi chia\nSáu miền nhỏ có tổng góc $6\\cdot30=180°$.\nViệc thêm đường chia không làm tăng hoặc giảm phần vòng quay mang màu vàng.\nVì vậy xác suất sau khi chia vẫn là $180/360=1/2$.\nBước 3: Giải thích lỗi trong phép đếm\nSau khi chia có tám miền, nhưng chúng không có khả năng được chọn như nhau.\nMỗi miền đỏ hoặc xanh rộng $90°$, gấp ba một miền vàng nhỏ $30°$.\nDo đó không thể coi mỗi miền là một trong tám kết quả đồng khả năng để lấy $6/8$.\nBước 4: Kết luận\nXác suất vàng không thay đổi. Đếm số miền rồi chia tổng số miền chỉ phù hợp khi các miền được chọn với khả năng như nhau."
});
  return bank;
}

export default getGrade8Topics;
