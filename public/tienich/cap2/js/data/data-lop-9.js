/**
 * data-lop-9.js
 * Ngân hàng câu hỏi Toán Lớp 9
 * Tiện ích: Toán Cấp 2 trực quan - iMath
 */

import { svgCap2 } from '../core/svg-cap2.js';
import { svgGrade9RoundSolid, svgGrade9RoundNet } from '../core/svg-cap2.js';
import { svgGrade9Circle, svgGrade9Stat } from '../core/svg-cap2.js';
import { svgGrade9Trig } from '../core/svg-cap2.js';
import { svgGrade9Plot } from '../core/svg-cap2.js';

export function getGrade9Topics() {

  return {
    'all': { kha: [], nangCao: [], hsg: [] },
    'bat-pt': {
      "kha": [
        {
          "id": "l9-bat-pt-kha-01",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận dạng bất phương trình bậc nhất",
          "prompt": "Bất phương trình nào là bậc nhất một ẩn $x$?",
          "svg": "",
          "options": [
            "A. $x^2+2>0$.",
            "B. $-3x+2>0$.",
            "C. $\\frac1x+2>0$.",
            "D. $0x+2>0$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhắc lại dạng cần nhận biết\nBất phương trình bậc nhất một ẩn có dạng $ax+b>0$ hoặc dùng dấu $<,\\le,\\ge$, với $a\\ne0$.\nBước 2: Xét phương án B\nTrong $-3x+2>0$, hệ số của $x$ là $a=-3\\ne0$, còn $b=2$.\nẨn chỉ xuất hiện ở bậc nhất, nên phương án này đúng dạng.\nBước 3: Phân biệt với biểu thức khác bậc\nPhương án A chứa $x^2$ nên không bậc nhất.\nPhương án C chứa $1/x$ nên không có dạng $ax+b$.\nBước 4: Kiểm tra trường hợp hệ số bằng không\nỞ D, $0x+2>0$ chỉ còn $2>0$, không còn ẩn.\nĐiều kiện $a\\ne0$ loại trường hợp này.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l9-bat-pt-kha-02",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cộng cùng một số",
          "prompt": "Biết $a<b$. Kết luận nào luôn đúng?",
          "svg": "",
          "options": [
            "A. $a-4>b-4$.",
            "B. $a+4<b-4$.",
            "C. $a-4=b-4$.",
            "D. $a-4<b-4$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định giả thiết\nTa biết $a<b$ và cần tìm một quan hệ đúng với mọi cặp số thỏa giả thiết.\nBước 2: Chọn tính chất bảo toàn thứ tự\nCộng cùng một số vào hai vế của bất đẳng thức sẽ giữ nguyên chiều.\nỞ đây chọn số được cộng là $-4$.\nBước 3: Áp dụng tính chất\nTừ $a<b$, được $a+(-4)<b+(-4)$.\nViết gọn thành $a-4<b-4$.\nBước 4: Giải thích vì sao không đổi dấu\nHai vế cùng giảm $4$, nên khoảng chênh lệch không đổi: $(b-4)-(a-4)=b-a>0$.\nVế trái vẫn nhỏ hơn vế phải, không trở thành bằng nhau hay lớn hơn.\nBước 5: Kết luận\nQuan hệ luôn đúng là $a-4<b-4$. Chọn D."
        },
        {
          "id": "l9-bat-pt-kha-03",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhân với số âm",
          "prompt": "Với hai số thực $a<b$, hãy chọn kết luận đúng khi nhân cả hai vế với $-3$.",
          "svg": "",
          "options": [
            "A. $-3a>-3b$.",
            "B. $-3a<-3b$.",
            "C. $-3a=-3b$.",
            "D. $-3a<3b$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xét dấu số nhân\nTa nhân cả hai vế của $a<b$ với $-3$; đây là số âm.\nBước 2: Nêu quy tắc cần dùng\nNhân hai vế của bất đẳng thức với cùng một số âm phải đổi chiều bất đẳng thức.\nBước 3: Thực hiện phép nhân\nVế trái thành $-3a$, vế phải thành $-3b$.\nĐổi dấu $<$ thành $>$, được $-3a>-3b$.\nBước 4: Kiểm tra bằng hiệu\nVì $b-a>0$, có $(-3a)-(-3b)=3(b-a)>0$.\nDo đó $-3a$ thực sự lớn hơn $-3b$; dấu bằng không xảy ra.\nBước 5: Kết luận\nChọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l9-bat-pt-nangCao-01",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chia cho hệ số âm",
          "prompt": "Giải bất phương trình $-4x\\ge10$.",
          "svg": "",
          "options": [
            "A. $x\\ge-\\frac52$.",
            "B. $x\\le\\frac52$.",
            "C. $x\\le-\\frac52$.",
            "D. $x<-\\frac52$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhận xét phép chia cần thực hiện\nĐể đưa $-4x\\ge10$ về dạng chỉ còn $x$, ta chia hai vế cho $-4$.\nĐây là số âm nên bắt buộc đổi chiều bất đẳng thức.\nBước 2: Chia và đổi chiều\nTa được $x\\le10/(-4)$, tức $x\\le-5/2$.\nBước 3: Kiểm tra điểm biên\nThay $x=-5/2$, vế trái bằng $10$.\nDấu $\\ge$ cho phép hai vế bằng nhau, nên điểm biên được nhận.\nBước 4: Kiểm tra chiều của tập nghiệm\nChẳng hạn $x=-3$ cho $12\\ge10$, đúng; còn $x=-2$ cho $8\\ge10$, sai.\nĐiều này phù hợp với miền nằm về bên trái $-5/2$.\nBước 5: Kết luận\nTập nghiệm là $x\\le-5/2$. Chọn C.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-02",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Mẫu số là các hằng dương",
          "prompt": "Giải $\\frac{2x-1}{3}-\\frac{x+2}{4}>1$, với $x\\in\\mathbb R$.",
          "svg": "",
          "options": [
            "A. $x>\\frac{22}{5}$.",
            "B. $x<\\frac{22}{5}$.",
            "C. $x>\\frac25$.",
            "D. $x>\\frac{18}{5}$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định mẫu chung\nHai mẫu $3$ và $4$ đều là hằng số khác $0$, nên biểu thức xác định với mọi $x\\in\\mathbb R$.\nTa nhân hai vế với mẫu chung $12>0$, giữ nguyên chiều.\nBước 2: Khử mẫu\nĐược $4(2x-1)-3(x+2)>12$.\nDấu trừ trước phân thức thứ hai tác động lên toàn bộ $x+2$.\nBước 3: Khai triển và thu gọn\nCó $8x-4-3x-6>12$, tức $5x-10>12$.\nCộng $10$ rồi chia cho $5>0$, được $x>22/5$.\nBước 4: Kiểm tra ranh giới\nTại $x=22/5$, vế trái của bất phương trình gốc bằng $1$, nên không được nhận vì đề dùng dấu $>$.\nKhông có điều kiện mẫu nào cần loại thêm.\nBước 5: Kết luận\nTập nghiệm là $x>22/5$. Chọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-03",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Dấu trừ tác động lên cả ngoặc",
          "prompt": "Giải $5-2(3x-1)\\le3(x+4)$.",
          "svg": "",
          "options": [
            "A. $x\\le-\\frac59$.",
            "B. $x\\ge-1$.",
            "C. $x\\ge\\frac59$.",
            "D. $x\\ge-\\frac59$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Khai triển đúng dấu\nCó $-2(3x-1)=-6x+2$ và $3(x+4)=3x+12$.\nVì vậy bất phương trình trở thành $7-6x\\le3x+12$.\nBước 2: Gom các hạng tử chứa x\nTrừ $3x$ và trừ $7$ ở cả hai vế, được $-9x\\le5$.\nBước 3: Chia cho số âm\nVì $-9<0$, chia hai vế cho $-9$ phải đổi $\\le$ thành $\\ge$.\nKết quả là $x\\ge-5/9$.\nBước 4: Kiểm tra điểm biên\nThay $x=-5/9$ vào hai biểu thức đã khai triển, cả hai đều bằng $31/3$.\nDấu bằng được phép nên điểm biên thuộc tập nghiệm.\nBước 5: Kết luận\nTập nghiệm là $x\\ge-5/9$. Chọn D.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-04",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ghép hai thông tin về thứ tự",
          "prompt": "Cho $a+2\\le b$ và $b-1<c$. Kết luận nào luôn đúng?",
          "svg": "",
          "options": [
            "A. $a+2<c$.",
            "B. $a+1<c$.",
            "C. $a+1=c$.",
            "D. $a+1>c$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tìm biểu thức nối hai giả thiết\nGiả thiết thứ hai so sánh $b-1$ với $c$.\nTa biến đổi giả thiết đầu để cũng xuất hiện $b-1$.\nBước 2: Trừ cùng một số\nTừ $a+2\\le b$, trừ $1$ ở hai vế được $a+1\\le b-1$.\nPhép cộng hoặc trừ cùng một số giữ nguyên chiều bất đẳng thức.\nBước 3: Dùng tính chất bắc cầu\nKết hợp với $b-1<c$, có $a+1\\le b-1<c$.\nVì vậy $a+1<c$; kết quả là bất đẳng thức nghiêm do quan hệ cuối là $<$.\nBước 4: Kiểm tra các kết luận mạnh hơn\nLấy $a=0$, $b=2$, $c=3/2$: cả hai giả thiết đúng, nhưng $a+2<c$ sai.\nỞ ví dụ này, $a+1=c$ và $a+1>c$ cũng sai.\nBước 5: Kết luận\nKết luận luôn đúng là $a+1<c$. Chọn B.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-05",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Phí cố định và số lượt dùng",
          "prompt": "Một dịch vụ thu phí mở tài khoản $180$ nghìn đồng và $35$ nghìn đồng mỗi lượt. Không có phí khác. Với tối đa $600$ nghìn đồng, mua được nhiều nhất bao nhiêu lượt nguyên?",
          "svg": "",
          "options": [
            "A. 11 lượt.",
            "B. 17 lượt.",
            "C. 12 lượt.",
            "D. 13 lượt."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chọn ẩn và đơn vị\nGọi $n$ là số lượt mua, với $n$ là số nguyên không âm.\nTính các khoản tiền theo nghìn đồng.\nBước 2: Lập điều kiện ngân sách\nPhí cố định là $180$, tiền cho $n$ lượt là $35n$.\nKhông có phí khác nên yêu cầu là $180+35n\\le600$.\nBước 3: Giải bất phương trình\nTrừ $180$: $35n\\le420$.\nChia cho $35>0$: $n\\le12$.\nBước 4: Kiểm tra số lượt lớn nhất\nVới $12$ lượt, tổng tiền là $180+35\\cdot12=600$, vừa đủ.\nVới $13$ lượt, cần $635$, vượt mức cho phép; mỗi lượt thêm đều làm phí tăng.\nBước 5: Kết luận\nMua được nhiều nhất $12$ lượt. Chọn C.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-06",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai đầu mút đều bị loại",
          "prompt": "Có bao nhiêu số nguyên $x$ thỏa $-\\frac52<x<\\frac73$?",
          "svg": "",
          "options": [
            "A. 4.",
            "B. 6.",
            "C. 7.",
            "D. 5."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định vị trí hai đầu mút\nCó $-5/2=-2{,}5$ và $2<7/3<3$.\nTa cần các số nguyên nằm giữa và không trùng hai đầu mút này.\nBước 2: Tìm số nguyên nhỏ nhất\nSố $-3$ nhỏ hơn $-2{,}5$ nên bị loại.\nSố $-2$ lớn hơn $-2{,}5$ nên là số nguyên nhỏ nhất được nhận.\nBước 3: Tìm số nguyên lớn nhất\nSố $2$ nhỏ hơn $7/3$ nên được nhận; $3$ lớn hơn $7/3$ nên bị loại.\nBước 4: Liệt kê và đếm\nCác giá trị là $-2,-1,0,1,2$.\nCó $2-(-2)+1=5$ số nguyên; cộng $1$ vì đếm cả hai số nguyên đầu và cuối.\nBước 5: Kết luận\nCó $5$ giá trị. Chọn D.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-07",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Không được chia ngay cho tham số",
          "prompt": "Với $m\\in\\mathbb R$, xét $(m-2)x\\ge m-2$. Mô tả nào đúng cho mọi $m$?",
          "svg": "",
          "options": [
            "A. $m>2$: $x\\ge1$; $m<2$: $x\\le1$; $m=2$: mọi $x$.",
            "B. Mọi $m$ đều cho $x\\ge1$.",
            "C. $m\\ne2$: $x\\ge1$; $m=2$: vô nghiệm.",
            "D. $m>2$: $x\\le1$; $m<2$: $x\\ge1$; $m=2$: mọi $x$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xét dấu hệ số của x\nMuốn chia cho $m-2$, phải biết hệ số này dương, âm hay bằng $0$.\nVì vậy ta chia thành ba trường hợp, không chia ngay khi chưa xét dấu.\nBước 2: Trường hợp m lớn hơn 2\nKhi $m>2$, có $m-2>0$.\nChia hai vế cho số dương này, giữ chiều và được $x\\ge1$.\nBước 3: Trường hợp m nhỏ hơn 2\nKhi $m<2$, có $m-2<0$.\nChia hai vế cho số âm này, đổi chiều và được $x\\le1$.\nBước 4: Trường hợp m bằng 2\nThay trực tiếp $m=2$, bất phương trình trở thành $0\\ge0$.\nMệnh đề này đúng với mọi $x$ thực, nên không có hạn chế đối với $x$.\nBước 5: Kết luận\n$m>2$: $x\\ge1$; $m<2$: $x\\le1$; $m=2$: mọi $x\\in\\mathbb R$. Chọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-08",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhân tử chung có ba trạng thái",
          "prompt": "Với $m\\in\\mathbb R$, xét $(m-3)(2x+1)>(m-3)(x-2)$. Kết luận nào đúng?",
          "svg": "",
          "options": [
            "A. $m=3$ nhận mọi $x$; $m\\ne3$ nhận $x>-3$.",
            "B. $m>3$: $x>-3$; $m<3$: $x<-3$; $m=3$: vô nghiệm.",
            "C. $m>3$: $x<-3$; $m<3$: $x>-3$; $m=3$: vô nghiệm.",
            "D. $m\\ne3$: $x>-3$; $m=3$: vô nghiệm."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đưa về một tích\nTrừ vế phải ở cả hai vế rồi đặt $m-3$ làm nhân tử chung.\nTa được $(m-3)[(2x+1)-(x-2)]>0$, tức $(m-3)(x+3)>0$.\nBước 2: Khi m lớn hơn 3\nLúc này $m-3>0$, chia hai vế cho nó không đổi chiều.\nĐược $x+3>0$, tức $x>-3$.\nBước 3: Khi m nhỏ hơn 3\nLúc này $m-3<0$, chia hai vế phải đổi chiều.\nĐược $x+3<0$, tức $x<-3$.\nBước 4: Khi m bằng 3\nBất phương trình trở thành $0>0$, là mệnh đề sai.\nVì dấu ở đây là $>$ chứ không phải $\\ge$, không có giá trị $x$ nào được nhận.\nBước 5: Kết luận\n$m>3$: $x>-3$; $m<3$: $x<-3$; $m=3$: vô nghiệm. Chọn B.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-09",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Mọi nghiệm đều nằm bên phải",
          "prompt": "Tìm điều kiện của $m$ để mọi nghiệm của $x>2m-1$ đều thỏa $x>3$.",
          "svg": "",
          "options": [
            "A. $m>2$.",
            "B. $m\\le2$.",
            "C. $m<2$.",
            "D. $m\\ge2$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Hiểu yêu cầu về tập nghiệm\nMọi số nằm bên phải $2m-1$ phải đồng thời nằm bên phải $3$.\nTa cần so sánh hai ranh giới $2m-1$ và $3$.\nBước 2: Tìm điều kiện đủ\nNếu $2m-1\\ge3$ thì từ $x>2m-1$ có $x>3$.\nGiải $2m-1\\ge3$ được $m\\ge2$.\nBước 3: Kiểm tra tính cần thiết\nNếu $2m-1<3$, chọn $x=3$.\nSố này thỏa $x>2m-1$ nhưng không thỏa $x>3$, trái yêu cầu.\nBước 4: Kiểm tra dấu bằng\nKhi $m=2$, bất phương trình đầu chính là $x>3$.\nHai tập nghiệm bằng nhau nên $m=2$ vẫn được nhận.\nBước 5: Kết luận\nĐiều kiện cần và đủ là $m\\ge2$. Chọn D.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-10",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cùng ranh giới và cùng kiểu đầu mút",
          "prompt": "Tìm $m$ để hai bất phương trình $-3x+6<0$ và $x+m>5$ có cùng tập nghiệm.",
          "svg": "",
          "options": [
            "A. $m=3$.",
            "B. $m=7$.",
            "C. $m=-3$.",
            "D. $m=2$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Giải bất phương trình thứ nhất\nTừ $-3x+6<0$ được $-3x<-6$.\nChia cho $-3$ và đổi chiều, ta có $x>2$.\nBước 2: Giải bất phương trình thứ hai\nTừ $x+m>5$ được $x>5-m$ bằng cách trừ $m$ ở hai vế.\nBước 3: So sánh tập nghiệm\nCả hai tập đều gồm những số lớn hơn một đầu mút không được lấy.\nChúng bằng nhau khi và chỉ khi hai đầu mút trùng nhau: $5-m=2$.\nBước 4: Tìm và thử m\nGiải được $m=3$.\nThay lại, bất phương trình thứ hai là $x+3>5$, cũng cho $x>2$.\nBước 5: Kết luận\nGiá trị cần tìm là $m=3$. Chọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-11",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Khoảng đo sau hiệu chuẩn",
          "prompt": "Một cảm biến có chỉ số thực $u$, quy đổi thành nhiệt độ $T=2{,}5u-4$ (độ C). Cần nhiệt độ sai lệch không quá $1$ độ so với $20$ độ C. Khoảng chỉ số $u$ nào được chấp nhận?",
          "svg": "",
          "options": [
            "A. $6\\le u\\le6{,}8$.",
            "B. $9{,}2<u<10$.",
            "C. $9{,}2\\le u\\le10$.",
            "D. $9{,}6\\le u\\le10{,}4$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Diễn đạt sai lệch cho phép\nSai lệch không quá $1$ độ so với $20$ độ nghĩa là nhiệt độ được nằm từ $19$ đến $21$ độ, kể cả hai đầu mút.\nDo đó $19\\le T\\le21$.\nBước 2: Thay công thức cảm biến\nVới $T=2{,}5u-4$, ta có $19\\le2{,}5u-4\\le21$.\nBước 3: Giải bất đẳng thức kép\nCộng $4$ vào cả ba phần: $23\\le2{,}5u\\le25$.\nChia cả ba phần cho $2{,}5>0$, giữ chiều: $9{,}2\\le u\\le10$.\nBước 4: Kiểm tra hai giới hạn\n$u=9{,}2$ cho $T=19$; $u=10$ cho $T=21$.\nCả hai đều lệch đúng $1$ độ, nên không dùng dấu bất đẳng thức nghiêm.\nBước 5: Kết luận\nKhoảng chỉ số được nhận là $9{,}2\\le u\\le10$. Chọn C.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-nangCao-12",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Một tham số dùng cho cả đoạn",
          "prompt": "Tìm tất cả $m$ để $(m-1)x+m>0$ với mọi $x\\in[-2;3]$.",
          "svg": "",
          "options": [
            "A. $\\frac34\\le m\\le2$.",
            "B. $\\frac34<m<2$.",
            "C. $m<2$.",
            "D. $1<m<2$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Kiểm tra hai đầu đoạn\nĐặt $F(x)=(m-1)x+m$.\nVì yêu cầu đúng với mọi $x\\in[-2;3]$, phải có $F(-2)=2-m>0$ và $F(3)=4m-3>0$.\nBước 2: Tìm điều kiện cần\nHai bất đẳng thức cho $m<2$ và $m>3/4$.\nDo đó cần $3/4<m<2$.\nBước 3: Chứng minh điều kiện cũng đủ\nNếu $m>1$, hệ số $m-1$ dương nên $F(x)$ tăng theo $x$; giá trị nhỏ nhất trên đoạn là $F(-2)>0$.\nNếu $m<1$, hệ số âm nên $F(x)$ giảm; giá trị nhỏ nhất là $F(3)>0$.\nNếu $m=1$, có $F(x)=1>0$ với mọi $x$.\nBước 4: Loại hai giá trị biên\n$m=2$ cho $F(-2)=0$; $m=3/4$ cho $F(3)=0$.\nĐề yêu cầu lớn hơn $0$, nên cả hai giá trị tham số này bị loại.\nBước 5: Kết luận\nĐiều kiện cần và đủ là $3/4<m<2$. Chọn B.",
          "manThi": "phuongTrinh"
        }
      ],
      "hsg": [
        {
          "id": "l9-bat-pt-hsg-01",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "dien",
          "title": "Đủ hàng nhưng phải vừa giá chứa",
          "prompt": "Mỗi thùng nguyên chứa $8$ bộ dụng cụ. Cần ít nhất $97$ bộ; giá chứa được nhiều nhất $14$ thùng. Không tách thùng. Cần lấy ít nhất bao nhiêu thùng để thỏa cả hai yêu cầu?",
          "svg": "",
          "correctAnswer": "13",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn và đọc hai yêu cầu\nGọi $n$ là số thùng cần lấy. Vì không tách thùng nên $n$ là số nguyên không âm.\nMỗi thùng có $8$ bộ, do đó $n$ thùng có $8n$ bộ.\nBước 2: Lập điều kiện\nCần ít nhất $97$ bộ nghĩa là $8n\\ge97$.\nGiá chứa nhiều nhất $14$ thùng nghĩa là $n\\le14$.\nBước 3: Tìm các số thùng hợp lệ\nChia bất phương trình đầu cho $8>0$, giữ chiều: $n\\ge97/8=12{,}125$.\nVì $n$ nguyên, số nhỏ nhất có thể xét là $13$. Kết hợp giới hạn của giá, chỉ còn $13$ hoặc $14$.\nBước 4: Kiểm tra lựa chọn nhỏ nhất\nVới $n=13$, có $8\\cdot13=104\\ge97$ bộ và $13\\le14$ thùng.\nVới $n=12$, chỉ có $96<97$ bộ nên không đủ.\nBước 5: Kết luận\nCần lấy ít nhất $13$ thùng. Không làm tròn $12{,}125$ về $12$, vì bài yêu cầu đủ số bộ dụng cụ.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-hsg-02",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Ranh giới chưa quyết định chiều",
          "prompt": "Tìm $m$ để bất phương trình $(m+2)x<m^2-4$ có tập nghiệm đúng là $x>-5$.",
          "svg": "",
          "correctAnswer": "-3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định điều phải khớp\nTập nghiệm cần có là $x>-5$: phải khớp cả điểm biên $-5$ lẫn chiều $>$.\nBước 2: Xét hệ số có thể bằng không\nNếu $m=-2$, bất phương trình trở thành $0<0$, không có nghiệm. Trường hợp này không phù hợp.\nVới $m\\ne-2$, phân tích $m^2-4=(m-2)(m+2)$.\nBước 3: Xác định chiều của tập nghiệm\nNếu $m+2>0$, chia hai vế cho $m+2$ cho $x<m-2$. Đây là nửa trục bên trái, không thể bằng tập $x>-5$.\nVì vậy cần $m+2<0$. Khi chia cho số âm này, phải đảo chiều: $x>m-2$.\nBước 4: Ghép điểm biên và thử lại\nHai tập $x>m-2$ và $x>-5$ bằng nhau khi $m-2=-5$, tức $m=-3$.\nGiá trị này thỏa $m+2=-1<0$.\nThay vào đề: $-x<5$. Chia cho $-1$ và đổi chiều được đúng $x>-5$.\nBước 5: Kết luận\nGiá trị duy nhất là $m=-3$. Chỉ tìm điểm biên mà không xét dấu hệ số là chưa đủ.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-hsg-03",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khoảng thời gian hai thiết bị cùng đạt chuẩn",
          "prompt": "Hai thiết bị cùng bật tại $t=0$ và chạy đến $t=20$ phút. Nhiệt độ A là $80-2t$ trong $0\\le t\\le12$, sau đó là $56-4(t-12)$ trong $12<t\\le20$. Nhiệt độ B luôn là $10+3t$ (độ C). A đạt chuẩn khi không quá $50$ độ; B đạt chuẩn khi dưới $64$ độ. Có bao nhiêu thời điểm $t$ nguyên mà cả hai cùng đạt chuẩn?",
          "svg": "",
          "correctAnswer": "4",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tách các giai đoạn\nTa cần đồng thời nhiệt độ A không quá $50$ và nhiệt độ B nhỏ hơn $64$, với $t$ nguyên trong $[0;20]$.\nA đổi công thức tại $t=12$, nên phải giải riêng từng giai đoạn.\nBước 2: Kiểm tra A ở giai đoạn đầu\nVới $0\\le t\\le12$, điều kiện $80-2t\\le50$ cho $-2t\\le-30$, tức $t\\ge15$ sau khi đổi chiều.\nKhông có $t$ nào vừa $t\\ge15$ vừa $t\\le12$. Vì vậy giai đoạn đầu không có thời điểm đạt yêu cầu.\nBước 3: Kiểm tra A ở giai đoạn sau\nVới $12<t\\le20$, ta có $56-4(t-12)\\le50$.\nKhai triển: $104-4t\\le50$, rồi $-4t\\le-54$.\nChia cho $-4$ và đảo chiều: $t\\ge13{,}5$.\nBước 4: Kết hợp điều kiện của B\nB đạt chuẩn khi $10+3t<64$, tức $3t<54$, nên $t<18$.\nKết hợp cả hai thiết bị và miền thời gian: $13{,}5\\le t<18$.\nCác số nguyên trong khoảng này là $14,15,16,17$.\nBước 5: Kiểm tra đầu mút và kết luận\n$t=13$ bị loại vì A còn $52$ độ; $t=18$ bị loại vì B bằng $64$ độ, không phải dưới $64$.\nVậy có $4$ thời điểm nguyên phù hợp.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-hsg-04",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Xác định dấu trên toàn miền",
          "prompt": "Cho $-2\\le t\\le1$ và hai số thực $a<b$. Chứng minh $(2t-3)a>(2t-3)b$. Giải thích vì sao không thể thay dấu $>$ trong kết luận bằng dấu $\\ge$ rồi coi hai vế có thể bằng nhau.",
          "svg": "",
          "solution": "Bước 1: Nhận diện phép biến đổi\nĐề cho $a<b$ và yêu cầu so sánh hai số sau khi cùng nhân với $2t-3$.\nMuốn biết có phải đổi chiều hay không, trước hết phải biết dấu của $2t-3$.\nBước 2: Xác định dấu trên toàn miền\nTừ $t\\le1$, nhân với $2>0$ được $2t\\le2$.\nTrừ $3$ ở hai vế: $2t-3\\le-1<0$.\nNhư vậy thừa số này luôn âm, không bao giờ bằng $0$.\nBước 3: Áp dụng tính chất bất đẳng thức\nNhân $a<b$ với số âm $2t-3$ phải đảo chiều.\nDo đó $(2t-3)a>(2t-3)b$.\nBước 4: Giải thích vì sao không có dấu bằng\nHiệu hai vế là $(2t-3)(a-b)$.\nTa có $2t-3<0$ và $a-b<0$. Tích hai số âm khác $0$ là số dương, nên hiệu này lớn hơn $0$.\nBước 5: Kết luận\nBất đẳng thức nghiêm ngặt luôn đúng trên miền đã cho.\nViết dấu $\\ge$ vẫn là một kết luận đúng nhưng yếu hơn; từ cách viết đó không được khẳng định dấu bằng có thể xảy ra.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-hsg-05",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Giữ đúng đầu mút trong hai chiều",
          "prompt": "Chứng minh với mọi số thực $x$, $\\frac{3x-2}{-4}\\ge\\frac{x+6}{2}$ khi và chỉ khi $x\\le-2$. Kiểm riêng điểm $x=-2$.",
          "svg": "",
          "solution": "Bước 1: Kiểm tra điều kiện\nHai mẫu là $-4$ và $2$, đều khác $0$. Vì vậy bất phương trình xác định với mọi số thực $x$.\nBước 2: Chọn cách khử mẫu\nNhân hai vế với $-4$. Vì $-4<0$, dấu $\\ge$ phải đổi thành $\\le$.\nTa được $3x-2\\le-2(x+6)$.\nBước 3: Giải bất phương trình\nKhai triển vế phải: $3x-2\\le-2x-12$.\nCộng $2x+2$ vào cả hai vế: $5x\\le-10$.\nChia cho $5>0$, giữ chiều: $x\\le-2$.\nBước 4: Giải thích hai chiều và kiểm đầu mút\nMỗi phép cộng và phép nhân/chia ở trên đều đảo ngược được, vì số nhân/chia khác $0$. Do đó đây là các bước tương đương, không chỉ là điều kiện cần.\nThay $x=-2$: vế trái bằng $(-8)/(-4)=2$, vế phải bằng $4/2=2$. Dấu bằng được nhận.\nBước 5: Kết luận\nBất phương trình ban đầu đúng khi và chỉ khi $x\\le-2$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-hsg-06",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Điểm biên và một điểm kiểm chứng",
          "prompt": "Bất phương trình $ax+6\\le0$ có ranh giới nghiệm là $x=3$ và nhận $x=4$ làm nghiệm. Tìm $a$.",
          "svg": "",
          "correctAnswer": "-2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Hiểu dữ kiện ranh giới\nRanh giới $x=3$ là điểm tại đó biểu thức $ax+6$ bằng $0$.\nNếu $a=0$ thì $ax+6=6$ không đổi và không có ranh giới như đề, nên cần $a\\ne0$.\nBước 2: Lập phương trình tìm hệ số\nThay $x=3$ vào $ax+6=0$, được $3a+6=0$.\nBước 3: Tính hệ số\nTrừ $6$ ở hai vế: $3a=-6$.\nChia cho $3$: $a=-2$, thỏa điều kiện khác $0$.\nBước 4: Kiểm tra phía nhận nghiệm\nThay $a=-2$, bất phương trình là $-2x+6\\le0$, tương đương $-2x\\le-6$.\nChia cho $-2$ và đổi chiều, được $x\\ge3$.\nVì $4\\ge3$, điểm $x=4$ đúng là nghiệm; thay trực tiếp cũng cho $-8+6=-2\\le0$.\nBước 5: Kết luận\nHệ số cần tìm là $a=-2$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-hsg-07",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chọn số chuyến xe tải lớn",
          "prompt": "Chở ít nhất $29$ tấn hàng bằng không quá $7$ chuyến. Một chuyến xe lớn chở tối đa $5$ tấn, xe nhỏ tối đa $3$ tấn; có đủ hai loại xe, được chở chưa đầy tải. Ít nhất phải dùng bao nhiêu chuyến xe lớn?",
          "svg": "",
          "correctAnswer": "4",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn và mô tả giới hạn\nGọi $x,y$ lần lượt là số chuyến xe lớn và xe nhỏ. Cả hai là số nguyên không âm.\nKhông quá $7$ chuyến cho $x+y\\le7$, tức $y\\le7-x$.\nBước 2: Ước lượng sức chở lớn nhất\nVới $x,y$ chuyến, sức chở tối đa là $5x+3y$ tấn.\nMuốn chở được ít nhất $29$ tấn thì cần $5x+3y\\ge29$.\nBước 3: Tìm giới hạn dưới của số chuyến lớn\nDo $y\\le7-x$ và $3>0$, ta có $5x+3y\\le5x+3(7-x)=21+2x$.\nVì vậy $29\\le21+2x$, nên $8\\le2x$, tức $x\\ge4$.\nĐây mới là điều kiện cần; còn phải chỉ ra có phương án dùng đúng $4$ chuyến lớn.\nBước 4: Dựng phương án đạt giới hạn\nChọn $x=4,y=3$. Tổng số chuyến bằng $7$; sức chở bằng $4\\cdot5+3\\cdot3=29$ tấn.\nPhương án này thực hiện được vì có đủ hai loại xe.\nBước 5: Kết luận\nÍt nhất cần $4$ chuyến xe lớn. Nếu chỉ có $3$ chuyến lớn, dù thêm $4$ chuyến nhỏ thì cũng chỉ chở được $27$ tấn.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-hsg-08",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đúng bốn nghiệm nguyên trong miền cho trước",
          "prompt": "Với $m$ nguyên, có đúng bốn số nguyên $x$ trong miền $1\\le x\\le10$ thỏa đồng thời $2x<m$ và $x+m\\le15$. Tính tổng tất cả giá trị $m$ thỏa mãn.",
          "svg": "",
          "correctAnswer": "30",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nhận xét về các nghiệm nguyên\nCả $2x<m$ và $x+m\\le15$ đều đặt giới hạn trên cho $x$.\nNếu một số nguyên $x$ trong $[1;10]$ thỏa mãn thì mọi số nguyên nhỏ hơn nó và không nhỏ hơn $1$ cũng thỏa mãn.\nVì vậy đúng bốn nghiệm phải là $1,2,3,4$.\nBước 2: Buộc số 4 được nhận\nThay $x=4$ vào hai điều kiện: $8<m$ và $4+m\\le15$.\nDo đó $8<m\\le11$. Vì $m$ nguyên, chỉ cần xét $m=9,10,11$.\nBước 3: Kiểm tra số 5 bị loại\nVới $m=9$ hoặc $m=10$, điều kiện $2\\cdot5<m$ sai.\nVới $m=11$, điều kiện $5+m\\le15$ sai vì $16>15$.\nVì các điều kiện đều chặn trên, khi $5$ bị loại thì các số lớn hơn $5$ cũng bị loại.\nBước 4: Kiểm tra không bỏ sót\nNếu $m\\le8$ thì $4$ không thỏa điều kiện đầu.\nNếu $m\\ge12$ thì $4$ không thỏa điều kiện sau.\nDo đó ngoài ba giá trị đã xét không thể có đúng bốn nghiệm.\nBước 5: Kết luận\nTổng các giá trị cần tìm là $9+10+11=30$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-hsg-09",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Vì sao chỉ cần thử hai đầu đoạn",
          "prompt": "Cho $u<v$, $F(x)=ax+b$, $G(x)=cx+d$ với các hệ số thực. Chứng minh $F(x)\\le G(x)$ với mọi $x\\in[u;v]$ khi và chỉ khi $F(u)\\le G(u)$ và $F(v)\\le G(v)$. Không dùng đạo hàm.",
          "svg": "",
          "solution": "Bước 1: Đưa về hiệu hai biểu thức\nĐặt $H(x)=G(x)-F(x)=(c-a)x+(d-b)$.\nĐiều cần chứng minh trở thành: $H(x)\\ge0$ trên $[u;v]$ khi và chỉ khi $H(u),H(v)\\ge0$.\nBước 2: Chứng minh chiều cần\nNếu $H(x)\\ge0$ với mọi $x\\in[u;v]$, ta được phép chọn riêng $x=u$ và $x=v$ vì cả hai thuộc đoạn.\nVậy $H(u)\\ge0$ và $H(v)\\ge0$.\nBước 3: Biểu diễn giá trị bên trong đoạn\nGiả sử hai giá trị ở đầu đoạn không âm. Với $u\\le x\\le v$, đặt $r=(v-x)/(v-u)$ và $s=(x-u)/(v-u)$.\nVì $v-u>0$, ta có $r,s\\ge0$; đồng thời $r+s=1$ và $ru+sv=x$.\nViết $H(t)=At+B$, ta tính $rH(u)+sH(v)=A(ru+sv)+B(r+s)=Ax+B=H(x)$.\nBước 4: Suy ra dấu của hiệu\nHai tích $rH(u)$ và $sH(v)$ đều không âm, nên tổng của chúng không âm.\nDo đó $H(x)\\ge0$, tức $F(x)\\le G(x)$ tại mọi điểm trong đoạn.\nBước 5: Kết luận\nHai điều kiện tương đương. Lập luận vẫn đúng khi $A=c-a=0$, vì ta không chia cho $A$; trường hợp hiệu là hằng số không bị bỏ sót.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-bat-pt-hsg-10",
          "lop": 9,
          "chuDe": "bat-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chia theo tham số phải có đủ ba nhánh",
          "prompt": "Cho $m\\in\\mathbb R$. Chứng minh tập nghiệm của $(m-1)x\\le m+1$ là $x\\le1+\\frac2{m-1}$ nếu $m>1$, là $x\\ge1+\\frac2{m-1}$ nếu $m<1$, và là mọi số thực nếu $m=1$. Nêu vì sao không thể gộp hai nhánh đầu thành một chiều duy nhất.",
          "svg": "",
          "solution": "Bước 1: Vì sao phải chia trường hợp\nMuốn tách $x$, ta cần chia cho $m-1$. Số này có thể dương, âm hoặc bằng $0$, nên không được chia ngay.\nBước 2: Trường hợp m lớn hơn 1\nKhi $m>1$, có $m-1>0$. Chia giữ chiều: $x\\le(m+1)/(m-1)$.\nVì $m+1=(m-1)+2$, ta viết được $x\\le1+2/(m-1)$.\nBước 3: Trường hợp m nhỏ hơn 1\nKhi $m<1$, có $m-1<0$. Chia phải đổi chiều: $x\\ge(m+1)/(m-1)=1+2/(m-1)$.\nCác phép chia trong hai trường hợp này đều tương đương vì mẫu khác $0$.\nBước 4: Trường hợp m bằng 1\nThay trực tiếp vào bất phương trình gốc, được $0\\cdot x\\le2$.\nMệnh đề này đúng với mọi số thực $x$. Không dùng công thức có mẫu $m-1$ tại đây.\nBước 5: Kết luận và kiểm lỗi đổi chiều\nBa tập nghiệm đúng như đề nêu.\nKhông thể giữ chung một chiều: với $m=0$, đề là $-x\\le1$, tức $x\\ge-1$.\nNếu viết sai thành $x\\le-1$ thì bỏ mất nghiệm $x=0$ và nhận sai $x=-2$.",
          "manThi": "phuongTrinh"
        }
      ]
    },
    'pt-quy-ve-bac-nhat': {
      "kha": [
        {
          "id": "l9-pt-quy-ve-bac-nhat-kha-01",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận dạng phương trình tích",
          "prompt": "Phương trình nào đã có dạng tích của hai nhân tử bậc nhất bằng $0$?",
          "svg": "",
          "options": [
            "A. $(2x-3)+(x+4)=0$.",
            "B. $(2x-3)(x+4)=0$.",
            "C. $(2x-3)(x+4)=5$.",
            "D. $(x^2+1)(x-2)=0$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tách yêu cầu của đề\nCần một tích gồm hai nhân tử bậc nhất, và tích đó phải bằng $0$.\nCả hai điều kiện đều cần được kiểm tra.\nBước 2: Xét hai nhân tử của phương án B\nTrong $(2x-3)(x+4)=0$, các nhân tử là $2x-3$ và $x+4$.\nChúng có hệ số của $x$ lần lượt là $2$ và $1$, đều khác $0$, nên đều bậc nhất.\nBước 3: Kiểm tra phép toán và vế phải\nHai nhân tử được nhân với nhau, vế phải bằng $0$.\nVì vậy phương án B thỏa đủ yêu cầu.\nBước 4: Phân biệt các phương án còn lại\nA là tổng, chưa phải dạng tích đã hỏi.\nC có tích bằng $5$, không bằng $0$.\nD có nhân tử $x^2+1$ bậc hai, không phải hai nhân tử bậc nhất.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-kha-02",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tìm miền trước khi giải",
          "prompt": "Điều kiện xác định của phương trình $\\frac1{x-2}+\\frac2{x+3}=\\frac5{2x-4}$ là gì?",
          "svg": "",
          "options": [
            "A. $x\\ne2$.",
            "B. $x\\ne-3$.",
            "C. $x\\ne2,3$.",
            "D. $x\\ne2,-3$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nêu điều kiện của phân thức\nPhương trình chỉ xác định khi tất cả các mẫu khác $0$.\nBa mẫu cần xét là $x-2$, $x+3$ và $2x-4$.\nBước 2: Xét hai mẫu đầu\n$x-2\\ne0$ tương đương $x\\ne2$.\n$x+3\\ne0$ tương đương $x\\ne-3$.\nBước 3: Xét mẫu thứ ba\nVì $2x-4=2(x-2)$, mẫu này khác $0$ khi $x\\ne2$.\nNó không tạo thêm giá trị cấm ngoài giá trị đã tìm.\nBước 4: Gộp và kiểm tra điều kiện\nCần đồng thời $x\\ne2$ và $x\\ne-3$.\nVới mọi giá trị khác hai số này, cả ba mẫu đều khác $0$; không cần giải phương trình để tìm miền xác định.\nBước 5: Kết luận\nĐiều kiện là $x\\ne2,-3$. Chọn D."
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-kha-03",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai nhân tử, hai khả năng",
          "prompt": "Giải phương trình $(3x+2)(x-5)=0$ trong tập số thực.",
          "svg": "",
          "options": [
            "A. $S=\\{-\\frac23;5\\}$.",
            "B. $S=\\{\\frac23;5\\}$.",
            "C. $S=\\{-\\frac23;-5\\}$.",
            "D. $S=\\{5\\}$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Sử dụng tính chất tích bằng không\nTích hai số thực bằng $0$ khi ít nhất một thừa số bằng $0$.\nVì thế xét $3x+2=0$ hoặc $x-5=0$.\nBước 2: Giải nhánh thứ nhất\n$3x+2=0$ cho $3x=-2$, nên $x=-2/3$.\nBước 3: Giải nhánh thứ hai\n$x-5=0$ cho $x=5$.\nHai nhánh là lựa chọn “hoặc”, không yêu cầu cả hai nhân tử cùng bằng $0$.\nBước 4: Thử lại nghiệm\nVới $x=-2/3$, nhân tử $3x+2$ bằng $0$ nên tích bằng $0$.\nVới $x=5$, nhân tử $x-5$ bằng $0$ nên tích cũng bằng $0$.\nĐề không có mẫu hay điều kiện nào cần loại thêm.\nBước 5: Kết luận\nTập nghiệm là $\\{-2/3;5\\}$. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-01",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nghiệm trùng chỉ ghi một lần",
          "prompt": "Tập nghiệm của $(2x-6)(x-3)=0$ là gì?",
          "svg": "",
          "options": [
            "A. $S=\\{3;6\\}$.",
            "B. $S=\\{-3\\}$.",
            "C. $S=\\{3\\}$.",
            "D. $S=\\varnothing$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhận dạng phương trình tích\nTích bằng $0$ khi ít nhất một thừa số bằng $0$. Không cần khai triển thành đa thức.\nBước 2: Giải nhân tử thứ nhất\n$2x-6=0$ cho $2x=6$, nên $x=3$.\nBước 3: Giải nhân tử thứ hai\n$x-3=0$ cũng cho $x=3$. Hai nhân tử không nhất thiết cho hai nghiệm khác nhau.\nBước 4: Kiểm tra và lập tập nghiệm\nThay $3$ vào đề được $0\\cdot0=0$. Tập nghiệm ghi mỗi giá trị một lần, nên $S=\\{3\\}$.\nBước 5: Kết luận\nChọn C.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-02",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đặt nhân tử trước khi khai triển",
          "prompt": "Giải $(x-2)(3x+1)+(x-2)(x-5)=0$.",
          "svg": "",
          "options": [
            "A. $S=\\{1\\}$.",
            "B. $S=\\{1;2\\}$.",
            "C. $S=\\{2;\\frac32\\}$.",
            "D. $S=\\{-1;2\\}$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tìm nhân tử chung\nCả hai số hạng chứa $x-2$. Ta đặt nó ra ngoài, không chia hai vế cho nó vì có thể bằng $0$.\nBước 2: Thu gọn phần còn lại\nVế trái bằng $(x-2)[3x+1+x-5]=4(x-2)(x-1)$.\nBước 3: Giải phương trình tích\nVì $4\\ne0$, phương trình cho $x-2=0$ hoặc $x-1=0$, tức $x=2$ hoặc $x=1$.\nBước 4: Thử trong đề gốc\n$x=2$ làm hai số hạng bằng $0$.\n$x=1$ cho hai số hạng $-4$ và $4$, tổng bằng $0$. Cả hai được nhận.\nBước 5: Kết luận\nChọn B: $S=\\{1;2\\}$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-03",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nghiệm sau khử mẫu bị loại",
          "prompt": "Giải $\\frac{2x-3}{x-3}=\\frac3{x-3}$. Chọn kết luận đã xét điều kiện xác định.",
          "svg": "",
          "options": [
            "A. Nghiệm duy nhất là $x=3$.",
            "B. Mọi $x\\ne3$ đều là nghiệm.",
            "C. Nghiệm duy nhất là $x=0$.",
            "D. Phương trình vô nghiệm."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Ghi điều kiện mẫu\n$x-3\\ne0$, nên $x\\ne3$.\nBước 2: Khử mẫu trên miền đã ghi\nNhân hai vế với $x-3\\ne0$, được $2x-3=3$.\nBước 3: Tìm ứng viên\n$2x=6$, nên ứng viên duy nhất là $x=3$.\nBước 4: Đối chiếu điều kiện\n$x=3$ làm cả hai mẫu gốc bằng $0$, nên không được nhận. Không còn ứng viên nào khác.\nBước 5: Kết luận\nPhương trình vô nghiệm, chọn D. Nghiệm của phương trình sau khử mẫu chưa tự động là nghiệm của phương trình gốc.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-04",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Các số hạng bậc hai triệt tiêu",
          "prompt": "Giải $\\frac{x+1}{x-2}=\\frac{x+3}{x+1}$.",
          "svg": "",
          "options": [
            "A. $S=\\{-7\\}$.",
            "B. $S=\\{7\\}$.",
            "C. $S=\\{-5\\}$.",
            "D. $S=\\{-1\\}$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Ghi miền xác định\nHai mẫu buộc $x\\ne2$ và $x\\ne-1$.\nBước 2: Nhân với tích mẫu\nTrên miền này, $(x-2)(x+1)\\ne0$, nên phương trình tương đương $(x+1)^2=(x+3)(x-2)$.\nBước 3: Khai triển và giải\n$x^2+2x+1=x^2+x-6$.\nTrừ $x^2+x$ hai vế được $x+1=-6$, nên $x=-7$.\nBước 4: Kiểm nghiệm gốc\n$-7$ không bị cấm. Hai vế lần lượt là $(-6)/(-9)=2/3$ và $(-4)/(-6)=2/3$, bằng nhau.\nBước 5: Kết luận\nChọn A: $S=\\{-7\\}$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-05",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đẳng thức trên miền xác định",
          "prompt": "Tập nghiệm của $\\frac{x^2-9}{x-3}=x+3$ là gì?",
          "svg": "",
          "options": [
            "A. $S=\\mathbb R$.",
            "B. $S=\\{3\\}$.",
            "C. $S=\\mathbb R\\setminus\\{3\\}$.",
            "D. $S=\\varnothing$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Giữ điểm cấm\nMẫu $x-3$ khác $0$ nên $x\\ne3$.\nBước 2: Phân tích tử\nTheo hiệu hai bình phương, $x^2-9=(x-3)(x+3)$.\nBước 3: Rút gọn phương trình\nVới $x\\ne3$, vế trái bằng $x+3$. Phương trình trở thành $x+3=x+3$.\nBước 4: Xác định tập nghiệm\nĐẳng thức đúng với mọi số trong miền, nên mọi $x\\ne3$ đều là nghiệm.\nRiêng $3$ không được nhận vì biểu thức gốc không xác định, dù đẳng thức rút gọn tính được tại đó.\nBước 5: Kết luận\nChọn C: mọi số thực trừ $3$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-06",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Khử mẫu dẫn đến mâu thuẫn",
          "prompt": "Giải $\\frac{x+2}{x-1}=1+\\frac4{x-1}$.",
          "svg": "",
          "options": [
            "A. $S=\\{1\\}$.",
            "B. $S=\\varnothing$.",
            "C. $S=\\mathbb R\\setminus\\{1\\}$.",
            "D. $S=\\{-1\\}$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xét mẫu\n$x\\ne1$ để hai phân thức xác định.\nBước 2: Khử mẫu đầy đủ\nNhân cả hai vế với $x-1$ được $x+2=(x-1)+4$.\nSố $1$ bên phải cũng phải nhân với mẫu, không được bỏ qua.\nBước 3: Thu gọn\n$x+2=x+3$ tương đương $2=3$ sau khi trừ $x$ hai vế.\nBước 4: Giải thích vô nghiệm\n$2=3$ sai với mọi $x$. Vì mọi nghiệm hợp lệ phải thỏa nó nên không có nghiệm trong miền.\n$x=1$ cũng không được xét vì làm mẫu bằng $0$.\nBước 5: Kết luận\nChọn B: $S=\\varnothing$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-07",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Nhân tử mất hẳn theo tham số",
          "prompt": "Cho $m\\in\\mathbb R$. Xét $[(m-1)x-2m+2](x+1)=0$. Kết luận nào đúng về tập nghiệm theo $m$?",
          "svg": "",
          "options": [
            "A. Với mọi $m$, $S=\\{-1;2\\}$.",
            "B. Nếu $m=1$ thì $S=\\{-1\\}$; nếu $m\\ne1$ thì $S=\\{-1;2\\}$.",
            "C. Nếu $m=1$ thì $S=\\varnothing$; nếu $m\\ne1$ thì $S=\\{-1;2\\}$.",
            "D. Nếu $m=1$ thì $S=\\mathbb R$; nếu $m\\ne1$ thì $S=\\{-1;2\\}$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Phân tích theo tham số\n$(m-1)x-2m+2=(m-1)(x-2)$, nên đề là $(m-1)(x-2)(x+1)=0$.\nBước 2: Xét m bằng 1\nKhi $m=1$, thừa số đầu bằng $0$ với mọi $x$. Không có mẫu nên mọi số thực đều là nghiệm.\nBước 3: Xét m khác 1\nChỉ lúc này mới chia được cho $m-1$, thu được $(x-2)(x+1)=0$.\nHai nghiệm là $2,-1$.\nBước 4: Kiểm đủ trường hợp\nHai nhánh $m=1$ và $m\\ne1$ phủ mọi tham số. Thay $2$ hoặc $-1$ vào đề gốc luôn làm một nhân tử bằng $0$.\nBước 5: Kết luận\nChọn D. Chia ngay cho $m-1$ sẽ làm mất trường hợp vô số nghiệm.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-08",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đổi dấu mẫu đối nhau",
          "prompt": "Giải $\\frac{x+1}{2-x}+\\frac2{x-2}=2$.",
          "svg": "",
          "options": [
            "A. $S=\\{\\frac53\\}$.",
            "B. $S=\\{3\\}$.",
            "C. $S=\\{1\\}$.",
            "D. $S=\\{-\\frac53\\}$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Điều kiện xác định\nCả hai mẫu đều khác $0$ khi $x\\ne2$.\nBước 2: Đưa về cùng mẫu\nVì $2-x=-(x-2)$, phân thức đầu bằng $-(x+1)/(x-2)$.\nTổng bằng $[-(x+1)+2]/(x-2)=(1-x)/(x-2)$.\nBước 3: Khử mẫu và giải\n$1-x=2(x-2)=2x-4$, nên $5=3x$, tức $x=5/3$.\nBước 4: Thử lại\n$5/3\\ne2$. Phân thức đầu bằng $8$, phân thức sau bằng $-6$; tổng đúng $2$.\nĐổi dấu mẫu phải đổi dấu cả tử tương ứng.\nBước 5: Kết luận\nChọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-09",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhân tử bị rút gọn vẫn để lại điểm cấm",
          "prompt": "Giải $\\frac{x^2-4}{x-2}=4$.",
          "svg": "",
          "options": [
            "A. $S=\\{2\\}$.",
            "B. $S=\\{-2;2\\}$.",
            "C. $S=\\varnothing$.",
            "D. $S=\\mathbb R\\setminus\\{2\\}$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Ghi điều kiện\n$x\\ne2$ vì mẫu bằng $x-2$.\nBước 2: Phân tích tử\n$x^2-4=(x-2)(x+2)$, nên trên miền đã cho vế trái bằng $x+2$.\nBước 3: Giải phương trình rút gọn\n$x+2=4$ cho ứng viên $x=2$.\nBước 4: Loại ứng viên\n$x=2$ không thuộc miền. Tại đó phân thức gốc có mẫu $0$, nên không thể thay công thức rút gọn để nhận nghiệm.\nVì ứng viên duy nhất bị loại, tập nghiệm rỗng.\nBước 5: Kết luận\nChọn C.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-10",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hệ số thập phân chính xác",
          "prompt": "Giải $(0{,}4x-0{,}6)(1{,}5x+0{,}75)=0$.",
          "svg": "",
          "options": [
            "A. $S=\\{-1{,}5;0{,}5\\}$.",
            "B. $S=\\{0{,}5;1{,}5\\}$.",
            "C. $S=\\{-2;1{,}5\\}$.",
            "D. $S=\\{-0{,}5;1{,}5\\}$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Dùng quy tắc tích\nMột trong hai nhân tử phải bằng $0$. Các số thập phân ở đây là số hữu tỉ chính xác, không cần làm tròn.\nBước 2: Giải nhân tử đầu\n$0{,}4x-0{,}6=0$ cho $x=0{,}6/0{,}4=6/4=1{,}5$.\nBước 3: Giải nhân tử sau\n$1{,}5x+0{,}75=0$ cho $x=-0{,}75/1{,}5=-0{,}5$.\nBước 4: Kiểm hai nghiệm\n$0{,}4\\cdot1{,}5-0{,}6=0$; $1{,}5\\cdot(-0{,}5)+0{,}75=0$.\nMỗi giá trị làm một nhân tử bằng $0$, nên cả hai thỏa phương trình tích.\nBước 5: Kết luận\nChọn D: $S=\\{-0{,}5;1{,}5\\}$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-11",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Không chia mất nhân tử chung",
          "prompt": "Giải $(x+3)(2x-1)=(x+3)(x+5)$.",
          "svg": "",
          "options": [
            "A. $S=\\{6\\}$.",
            "B. $S=\\{-3;6\\}$.",
            "C. $S=\\{-6;-3\\}$.",
            "D. $S=\\{-3;4\\}$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tránh chia cho biểu thức có thể bằng không\nHai vế có $x+3$, nhưng $x=-3$ có thể là nghiệm. Ta chuyển vế và đặt nhân tử chung thay vì chia ngay.\nBước 2: Phân tích\n$(x+3)[2x-1-(x+5)]=(x+3)(x-6)=0$.\nDấu trừ trước ngoặc đổi $+5$ thành $-5$.\nBước 3: Giải tích\n$x+3=0$ hoặc $x-6=0$, cho $x=-3,6$.\nBước 4: Thử lại\n$x=-3$ làm cả hai vế bằng $0$; $x=6$ làm cả hai vế bằng $9\\cdot11=99$.\nBước 5: Kết luận\nChọn B. Nếu chia cho $x+3$ mà không xét riêng, sẽ mất nghiệm $-3$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-nangCao-12",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tham số tác động cả tử lẫn mẫu",
          "prompt": "Cho $m\\in\\mathbb R$. Xét $\\frac{[(m-2)x-m+2](x-3)}{x-m}=0$, với điều kiện $x\\ne m$. Kết luận nào mô tả đúng số nghiệm?",
          "svg": "",
          "options": [
            "A. $m=2$: vô số nghiệm $x\\ne2$; $m=1$ hoặc $m=3$: một nghiệm; các $m$ khác: hai nghiệm.",
            "B. $m=2$: mọi $x\\in\\mathbb R$ đều là nghiệm; $m=1$ hoặc $m=3$: một nghiệm; các $m$ khác: hai nghiệm.",
            "C. $m=2$: vô nghiệm; $m=1$ hoặc $m=3$: một nghiệm; các $m$ khác: hai nghiệm.",
            "D. Với mọi $m\\ne2$ đều có hai nghiệm $1,3$; $m=2$ có vô số nghiệm $x\\ne2$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Ghi miền và phân tích tử\nGiữ $x\\ne m$. Tử bằng $(m-2)(x-1)(x-3)$.\nBước 2: Xét m bằng 2\nTử đồng nhất bằng $0$, còn mẫu cấm $x=2$. Vì vậy có vô số nghiệm, gồm mọi số thực khác $2$.\nBước 3: Xét m khác 2\nTử bằng $0$ khi $x=1$ hoặc $x=3$. Hai ứng viên này phải tiếp tục so với $x\\ne m$.\nBước 4: Đếm theo điểm bị mẫu loại\n$m=1$ loại $x=1$, chỉ còn $3$; $m=3$ loại $3$, chỉ còn $1$.\nVới $m\\ne1,2,3$, cả $1,3$ đều hợp lệ và làm tử bằng $0$, nên có hai nghiệm.\nBước 5: Kết luận\nChọn A. Không gọi mọi số thực là nghiệm khi $m=2$, vì điểm cấm vẫn còn.",
          "manThi": "phuongTrinh"
        }
      ],
      "hsg": [
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-01",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Chỉ cộng các nghiệm hợp điều kiện",
          "prompt": "Giải $(2x-1)(x+3)=0$ với điều kiện bổ sung $x>-2$. Nhập tổng các nghiệm hợp lệ.",
          "svg": "",
          "correctAnswer": "0.5",
          "dapAnChapNhan": [
            "0,5",
            "1/2"
          ],
          "solution": "Bước 1: Xác định yêu cầu\nTa cần tìm nghiệm của phương trình tích, sau đó giữ những nghiệm thỏa $x>-2$. Đề hỏi tổng các nghiệm được giữ lại.\nBước 2: Dùng quy tắc tích bằng không\nMột tích bằng $0$ khi ít nhất một thừa số bằng $0$.\nVì vậy $(2x-1)(x+3)=0$ tương đương $2x-1=0$ hoặc $x+3=0$.\nBước 3: Giải từng phương trình\nTừ $2x-1=0$, có $2x=1$, nên $x=1/2$.\nTừ $x+3=0$, có $x=-3$.\nBước 4: Kiểm tra điều kiện bổ sung\n$1/2>-2$ nên nhận $1/2$; còn $-3<-2$ nên loại $-3$.\nThay $x=1/2$ vào phương trình gốc, thừa số đầu bằng $0$, nên tích đúng bằng $0$.\nBước 5: Kết luận\nChỉ có nghiệm hợp lệ $x=1/2$. Tổng cần nhập là $1/2=0{,}5$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-02",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chỉ một nghiệm hợp lệ",
          "prompt": "Với $m\\in\\mathbb R$, xét $\\frac{(x-m)(x-2)}{x-1}=0$. Tìm tổng các giá trị $m$ để phương trình có đúng một nghiệm thực.",
          "svg": "",
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Ghi điều kiện xác định\nMẫu $x-1$ phải khác $0$, nên $x\\ne1$.\nKhông được tính một giá trị làm mẫu bằng $0$ là nghiệm.\nBước 2: Đưa về phương trình tích\nTrên miền xác định, phân thức bằng $0$ khi tử bằng $0$.\nTa có $(x-m)(x-2)=0$, nên các ứng viên là $x=m$ và $x=2$.\nBước 3: Xác định nghiệm luôn được nhận\n$x=2$ luôn hợp lệ: tử bằng $0$ và mẫu bằng $1$.\nDo đó muốn có đúng một nghiệm, ứng viên $x=m$ phải bị loại hoặc trùng với $2$.\nBước 4: Xét đủ các khả năng\nNếu $m=1$, ứng viên $x=m$ bị loại bởi điều kiện xác định; chỉ còn $2$.\nNếu $m=2$, hai ứng viên trùng nhau; tập nghiệm vẫn chỉ gồm số $2$.\nNếu $m\\ne1,2$, hai ứng viên phân biệt và đều khác $1$; phương trình có hai nghiệm.\nBước 5: Kết luận\nCác giá trị cần tìm là $m=1,2$. Tổng bằng $3$.\nChú ý: nghiệm xuất hiện ở hai thừa số vẫn chỉ được tính một lần nếu cùng một giá trị.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-03",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Mô hình khoảng cách qua thấu kính",
          "prompt": "Trong mô hình cho sẵn, khoảng cách từ vật đến thấu kính là $d>0$ cm, từ ảnh đến thấu kính là $d'>0$ cm và $\\frac1{12}=\\frac1d+\\frac1{d'}$. Vật và ảnh ở hai phía thấu kính, với $d'=2d$. Hãy lập phương trình rồi tính khoảng cách từ vật đến ảnh, đơn vị cm.",
          "svg": "",
          "correctAnswer": "54",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đọc ý nghĩa các khoảng cách\n$d>0$ là khoảng cách từ vật đến thấu kính; $d'=2d>0$ là khoảng cách từ ảnh đến thấu kính.\nVì vật và ảnh ở hai phía, khoảng cách cần tìm sẽ là tổng $d+d'$.\nBước 2: Lập phương trình theo mô hình\nThay $d'=2d$ vào công thức đã cho: $1/12=1/d+1/(2d)$.\nCác mẫu khác $0$ vì $d>0$.\nBước 3: Giải phương trình\nQuy đồng vế phải được $1/12=3/(2d)$.\nNhân hai vế với $24d\\ne0$: $2d=36$, nên $d=18$ cm.\nTừ $d'=2d$ có $d'=36$ cm.\nBước 4: Kiểm tra kết quả\nHai khoảng cách đều dương và $36=2\\cdot18$.\nThay lại: $1/18+1/36=2/36+1/36=3/36=1/12$, đúng mô hình.\nBước 5: Trả lời bài toán\nKhoảng cách từ vật đến ảnh là $18+36=54$ cm. Không lấy hiệu vì đề đã cho vật và ảnh ở hai phía thấu kính.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-04",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Vì sao phải giữ miền khi khử mẫu?",
          "prompt": "Cho $A(x)$ và $B(x)$ là hai đa thức bậc nhất. Chứng minh rằng trên miền $x\\ne1,-2$, hai phương trình $\\frac{A(x)}{x-1}=\\frac{B(x)}{x+2}$ và $A(x)(x+2)=B(x)(x-1)$ có cùng nghiệm. Giải thích vì sao không được bỏ điều kiện miền khỏi kết luận.",
          "svg": "",
          "solution": "Bước 1: Xác định miền chung\nĐặt $D=(x-1)(x+2)$. Trên miền $x\\ne1,-2$, ta có $D\\ne0$.\nMuốn khẳng định hai phương trình có cùng nghiệm, phải chứng minh cả hai chiều trên miền này.\nBước 2: Từ phương trình phân thức sang phương trình đa thức\nGiả sử $A(x)/(x-1)=B(x)/(x+2)$ tại một $x$ thuộc miền.\nNhân cả hai vế với $D$, rồi rút gọn các thừa số khác $0$, được $A(x)(x+2)=B(x)(x-1)$.\nBước 3: Chứng minh chiều ngược lại\nGiả sử $A(x)(x+2)=B(x)(x-1)$ và $x\\ne1,-2$.\nChia cả hai vế cho $D\\ne0$ thu được $A(x)/(x-1)=B(x)/(x+2)$.\nBước 4: Giải thích vì sao phải giữ điều kiện\nỞ $x=1$ hoặc $x=-2$, ít nhất một phân thức không xác định, còn phương trình đa thức vẫn có thể đúng.\nChẳng hạn lấy $A(x)=x-1$, $B(x)=x+2$. Phương trình đa thức khi ấy đúng với mọi $x$, nhưng phương trình phân thức vẫn cấm $1,-2$.\nBước 5: Kết luận\nHai phương trình có cùng nghiệm trên miền đã cho. Khử mẫu không có nghĩa là được xóa điều kiện của mẫu gốc.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-05",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Khi hai nhân tử có chung nghiệm",
          "prompt": "Cho $a,b,c,d\\in\\mathbb R$, $a\\ne0$, $c\\ne0$. Chứng minh hai phương trình $ax+b=0$ và $cx+d=0$ có chung nghiệm khi và chỉ khi $ad=bc$. Từ đó xác định khi nào $(ax+b)(cx+d)=0$ có đúng một nghiệm thực.",
          "svg": "",
          "solution": "Bước 1: Tìm nghiệm của từng nhân tử\nVì $a\\ne0$, phương trình $ax+b=0$ có nghiệm duy nhất $x=-b/a$.\nVì $c\\ne0$, phương trình $cx+d=0$ có nghiệm duy nhất $x=-d/c$.\nBước 2: Diễn đạt việc có chung nghiệm\nHai phương trình có chung nghiệm khi và chỉ khi $-b/a=-d/c$.\nBước 3: Biến đổi điều kiện tương đương\nNhân hai vế với $ac\\ne0$ được $-bc=-ad$, tức $ad=bc$.\nNgược lại, từ $ad=bc$, chia cho $ac\\ne0$ và đổi dấu thu lại $-b/a=-d/c$.\nDo đó điều kiện vừa tìm là cần và đủ.\nBước 4: Đếm nghiệm của phương trình tích\nTheo quy tắc tích bằng không, nghiệm của $(ax+b)(cx+d)=0$ là các nghiệm của hai nhân tử.\nNếu $ad=bc$, hai giá trị nghiệm trùng nhau, nên chỉ có một nghiệm thực.\nNếu $ad\\ne bc$, hai giá trị khác nhau, nên có hai nghiệm thực.\nBước 5: Kết luận\nPhương trình tích có đúng một nghiệm thực khi và chỉ khi $ad=bc$. Các giả thiết $a,c\\ne0$ bảo đảm không có nhân tử hằng cần xét riêng.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-06",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Một ứng viên bị cấm, một nghiệm được nhận",
          "prompt": "Giải $\\frac{x^2-5x+6}{x-2}=4$ với điều kiện bổ sung $x>0$. Nhập nghiệm hợp lệ.",
          "svg": "",
          "correctAnswer": "7",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Ghi đầy đủ điều kiện\nĐề cho $x>0$; mẫu còn yêu cầu $x-2\\ne0$. Miền cần giữ là $x>0$, $x\\ne2$.\nBước 2: Phân tích tử\nTa có $x^2-5x+6=(x-2)(x-3)$ vì $(-2)+(-3)=-5$ và $(-2)(-3)=6$.\nBước 3: Rút gọn trên miền hợp lệ\nVới $x\\ne2$, phương trình trở thành $x-3=4$, nên $x=7$.\nNếu khử mẫu trước, ta sẽ được $x^2-9x+14=0$, tức $(x-2)(x-7)=0$. Giá trị $2$ xuất hiện ở cách này vẫn phải loại.\nBước 4: Thử nghiệm trong phương trình gốc\n$7>0$ và $7\\ne2$.\nVế trái tại $7$ là $(49-35+6)/(7-2)=20/5=4$, bằng vế phải.\nBước 5: Kết luận\nNghiệm hợp lệ duy nhất là $x=7$. Giá trị $2$ dương nhưng không được nhận vì làm mẫu gốc bằng $0$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-07",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Cùng hiệu suất thời gian",
          "prompt": "Hai phương án làm cùng một công việc có thời gian chu kỳ lần lượt là $x+1$ phút và $x+5$ phút; thời gian làm việc hữu ích trong các chu kỳ ấy lần lượt là $x-2$ phút và $x+1$ phút, với $x>2$. Hiệu suất thời gian được tính bằng thời gian hữu ích chia tổng thời gian chu kỳ. Lập phương trình để hai hiệu suất bằng nhau, rồi tính tổng thời gian hai chu kỳ, đơn vị phút.",
          "svg": "",
          "correctAnswer": "28",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Hiểu hiệu suất và điều kiện\nHiệu suất bằng thời gian hữu ích chia thời gian chu kỳ, không phải hiệu hai thời gian.\nVới $x>2$, bốn thời gian $x-2,x+1,x+5$ đều dương, nên các phân thức sau xác định.\nBước 2: Lập phương trình\nHai hiệu suất bằng nhau cho $(x-2)/(x+1)=(x+1)/(x+5)$.\nBước 3: Khử mẫu và giải\nNhân với $(x+1)(x+5)\\ne0$, được $(x-2)(x+5)=(x+1)^2$.\nKhai triển: $x^2+3x-10=x^2+2x+1$.\nTrừ $x^2+2x$ ở hai vế: $x-10=1$, nên $x=11$.\nBước 4: Kiểm tra ý nghĩa thực tế\n$11>2$, nên các thời gian hợp lệ.\nHiệu suất thứ nhất là $9/12=3/4$, hiệu suất thứ hai là $12/16=3/4$; chúng bằng nhau như yêu cầu.\nBước 5: Kết luận đúng đại lượng đề hỏi\nHai chu kỳ dài $12$ phút và $16$ phút. Tổng thời gian là $28$ phút, không phải giá trị tham số $11$.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-08",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Nghiệm chung phải hợp cả hai miền",
          "prompt": "Tìm số thực $m$ để hai phương trình $\\frac{(x-m)(x+2)}{x-1}=0$ và $\\frac{(x-2m+1)(x-5)}{x+2}=0$ cùng nhận một số thực làm nghiệm.",
          "svg": "",
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Ghi miền của nghiệm chung\nNghiệm chung phải làm cả hai mẫu khác $0$, nên $x\\ne1,-2$.\nBước 2: Xét phương trình thứ nhất\nTử bằng $0$ khi $x=m$ hoặc $x=-2$.\nNhưng $x=-2$ làm phương trình thứ hai không xác định. Vì vậy nghiệm chung, nếu có, bắt buộc là $x=m$, với $m\\ne1,-2$.\nBước 3: Đưa điều kiện chung về m\nThay $x=m$ vào tử phương trình thứ hai được $(m-2m+1)(m-5)=0$.\nTức là $(1-m)(m-5)=0$, cho $m=1$ hoặc $m=5$.\nBước 4: Loại và thử các ứng viên\n$m=1$ bị loại vì khi ấy nghiệm chung dự kiến $x=1$ làm mẫu thứ nhất bằng $0$.\nVới $m=5$, chọn $x=5$: tử thứ nhất có thừa số $x-m=0$; tử thứ hai có thừa số $x-5=0$.\nHai mẫu lần lượt bằng $4$ và $7$, đều khác $0$.\nBước 5: Kết luận\nChỉ có $m=5$ thỏa yêu cầu. Việc xét miền chung trước giúp tránh nhận nhầm nghiệm của riêng một phương trình.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-09",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Cùng rút về đẳng thức, khác tập nghiệm",
          "prompt": "Xét $(E_1):\\ \\frac{x^2-1}{x-1}=x+1$ và $(E_2):\\ \\frac{x^2-4}{x-2}=x+2$. Chứng minh cả hai đều rút về đẳng thức $0=0$ trên miền tương ứng nhưng có tập nghiệm khác nhau. Xác định đầy đủ những số là nghiệm của $E_1$ mà không là nghiệm của $E_2$, và ngược lại.",
          "svg": "",
          "solution": "Bước 1: Ghi hai miền riêng\n$E_1$ yêu cầu $x\\ne1$; $E_2$ yêu cầu $x\\ne2$.\nHai miền không giống nhau, nên phải giữ riêng khi rút gọn.\nBước 2: Giải phương trình thứ nhất\nTrên miền $x\\ne1$, dùng $x^2-1=(x-1)(x+1)$ để được $x+1=x+1$, tương đương $0=0$.\nMọi số thuộc miền đều đúng, nên $S_1$ gồm tất cả số thực trừ $1$.\nBước 3: Giải phương trình thứ hai\nTrên miền $x\\ne2$, dùng $x^2-4=(x-2)(x+2)$ để được $x+2=x+2$, cũng tương đương $0=0$.\nVậy $S_2$ gồm tất cả số thực trừ $2$.\nBước 4: So sánh hai tập nghiệm\nSố $2$ thuộc $S_1$: thay vào $E_1$ cho $3=3$. Nhưng $2$ không thuộc $S_2$ vì mẫu của $E_2$ bằng $0$.\nSố $1$ thuộc $S_2$: thay vào $E_2$ cho $3=3$. Nhưng $1$ không thuộc $S_1$ vì mẫu của $E_1$ bằng $0$.\nMọi số khác $1,2$ đều thuộc cả hai tập.\nBước 5: Kết luận\nNghiệm của $E_1$ mà không của $E_2$ chỉ là $2$; chiều ngược chỉ là $1$.\nHai phương trình cùng rút về $0=0$ vẫn có thể có tập nghiệm khác nhau vì miền xác định khác nhau.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-quy-ve-bac-nhat-hsg-10",
          "lop": 9,
          "chuDe": "pt-quy-ve-bac-nhat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Nghiệm cố định và số nghiệm của cả họ",
          "prompt": "Cho $m\\in\\mathbb R$ và phương trình $(x-2)[(m-1)x-m-1]=0$. Chứng minh $x=2$ là nghiệm duy nhất được nhận với mọi giá trị $m$. Sau đó xác định đầy đủ các $m$ để phương trình có đúng một nghiệm thực.",
          "svg": "",
          "solution": "Bước 1: Tìm nghiệm được nhận với mọi m\nThay $x=2$, nhân tử $x-2$ bằng $0$, nên phương trình đúng với mọi $m$.\nĐây là một nghiệm cố định; chưa có nghĩa mọi phương trình trong họ chỉ có nghiệm này.\nBước 2: Chứng minh không có nghiệm cố định khác\nXét riêng $m=1$, nhân tử thứ hai bằng $-2$. Phương trình là $-2(x-2)=0$, chỉ nhận $x=2$.\nMột nghiệm được nhận với mọi $m$ phải được nhận cả tại $m=1$. Vì thế không có nghiệm cố định nào khác.\nBước 3: Đếm nghiệm khi m khác 1\nNhân tử thứ hai bằng $0$ cho $(m-1)x=m+1$, tức $x=(m+1)/(m-1)$.\nNgoài nghiệm $2$, chỉ có thêm ứng viên này. Hai ứng viên trùng nhau khi $m+1=2(m-1)$, tức $m=3$.\nBước 4: Kiểm tra các trường hợp\n$m=1$ đã cho đúng một nghiệm.\n$m=3$ cho $2(x-2)^2=0$, cũng chỉ có nghiệm $2$.\nVới $m\\ne1,3$, hai ứng viên khác nhau; mỗi ứng viên làm một nhân tử bằng $0$, nên cả hai đều là nghiệm.\nBước 5: Kết luận\nNghiệm cố định duy nhất là $2$. Phương trình có đúng một nghiệm thực khi và chỉ khi $m=1$ hoặc $m=3$.",
          "manThi": "phuongTrinh"
        }
      ]
    },
    'can-thuc': {
      "kha": [
        {
          "id": "l9-can-thuc-kha-01",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai loại căn",
          "prompt": "Trong tập số thực, khẳng định nào đúng về $\\sqrt a$ và $\\sqrt[3]a$?",
          "svg": "",
          "options": [
            "A. Cả hai căn chỉ xác định khi $a\\ge0$.",
            "B. Căn bậc hai xác định khi $a\\ge0$; căn bậc ba xác định với mọi số thực $a$.",
            "C. Cả hai căn xác định với mọi số thực $a$.",
            "D. Căn bậc ba xác định với mọi số thực $a$ và luôn không âm."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhắc nghĩa căn bậc hai số học\n$\\sqrt a$ là số không âm có bình phương bằng $a$.\nVì bình phương của số thực không âm, cần $a\\ge0$ để căn này xác định.\nBước 2: Nhắc nghĩa căn bậc ba\n$\\sqrt[3]a$ là số có lập phương bằng $a$.\nMỗi số thực đều có một căn bậc ba thực, nên không cần điều kiện $a\\ge0$.\nBước 3: Kiểm tra trường hợp số âm\nChẳng hạn $\\sqrt[3]{-8}=-2$ vì $(-2)^3=-8$.\nVí dụ này cho thấy căn bậc ba có thể âm, còn $\\sqrt{-8}$ không xác định trong tập số thực.\nBước 4: Đối chiếu hai miền xác định\nCăn bậc hai số học xác định với $a\\ge0$; căn bậc ba xác định với mọi $a\\in\\mathbb R$.\nKhông gộp hai quy tắc thành một vì chúng thuộc hai phép căn khác nhau.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l9-can-thuc-kha-02",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Điều kiện dưới dấu căn",
          "prompt": "Biểu thức $\\sqrt{7-2x}$ xác định trong tập số thực khi nào?",
          "svg": "",
          "options": [
            "A. $x\\ge\\frac72$.",
            "B. $x<\\frac72$.",
            "C. $x\\le\\frac72$.",
            "D. $x\\le-\\frac72$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định điều kiện dưới căn\nCăn bậc hai $\\sqrt{7-2x}$ xác định trong tập số thực khi và chỉ khi $7-2x\\ge0$.\nBước 2: Chuyển hằng số\nTrừ $7$ ở hai vế, được $-2x\\ge-7$.\nBước 3: Chia cho số âm\nVì $-2<0$, khi chia hai vế cho $-2$ phải đổi chiều.\nTa được $x\\le7/2$.\nBước 4: Kiểm tra đầu mút\nTại $x=7/2$, biểu thức dưới căn bằng $0$ và $\\sqrt0=0$ xác định.\nVì vậy giữ dấu bằng; với $x>7/2$, biểu thức dưới căn âm nên bị loại.\nBước 5: Kết luận\nĐiều kiện là $x\\le7/2$. Chọn C."
        },
        {
          "id": "l9-can-thuc-kha-03",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bình phương không giữ dấu",
          "prompt": "Cho $x<2$. Rút gọn $\\sqrt{(x-2)^2}$.",
          "svg": "",
          "options": [
            "A. $2-x$.",
            "B. $x-2$.",
            "C. $x+2$.",
            "D. $|x|-2$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Kiểm tra sự xác định\nVới mọi số thực $x$, bình phương $(x-2)^2$ không âm.\nDo đó căn đã cho xác định, đặc biệt trên miền $x<2$ của đề.\nBước 2: Dùng công thức căn của bình phương\nVới số thực $u$, có $\\sqrt{u^2}=|u|$.\nLấy $u=x-2$, được $\\sqrt{(x-2)^2}=|x-2|$.\nBước 3: Xét dấu trước khi bỏ giá trị tuyệt đối\nGiả thiết $x<2$ cho $x-2<0$.\nGiá trị tuyệt đối của một số âm bằng số đối của nó, nên $|x-2|=-(x-2)$.\nBước 4: Rút gọn và kiểm tra dấu\nCó $-(x-2)=2-x$; vì $x<2$, kết quả này dương.\nĐiều đó phù hợp căn bậc hai số học luôn không âm; kết quả $x-2$ âm sẽ không phù hợp.\nBước 5: Kết luận\nBiểu thức bằng $2-x$. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l9-can-thuc-nangCao-01",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Gộp các căn cùng loại",
          "prompt": "Tính $S=\\sqrt{75}-2\\sqrt{12}+\\sqrt{27}$. Các số dưới căn đều dương.",
          "svg": "",
          "options": [
            "A. $6\\sqrt3$.",
            "B. $10\\sqrt3$.",
            "C. $2\\sqrt3$.",
            "D. $4\\sqrt3$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận dạng các căn cùng loại\nCác số dưới căn đều dương. Ta tìm thừa số chính phương để đưa ba căn về cùng căn $\\sqrt3$.\nBước 2: Đưa thừa số ra ngoài căn\n$75=25\\cdot3$ nên $\\sqrt{75}=5\\sqrt3$.\n$12=4\\cdot3$ nên $\\sqrt{12}=2\\sqrt3$; tương tự $\\sqrt{27}=3\\sqrt3$.\nBước 3: Thay vào biểu thức\n$S=5\\sqrt3-2\\cdot2\\sqrt3+3\\sqrt3$.\nHệ số $2$ trước căn thứ hai vẫn phải nhân với kết quả rút gọn.\nBước 4: Cộng các hệ số\n$S=(5-4+3)\\sqrt3=4\\sqrt3$. Không cộng trực tiếp các số dưới dấu căn.\nBước 5: Kết luận\nChọn D.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-02",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Thừa số ngoài căn khi biến âm",
          "prompt": "Với $x<0$, rút gọn $P=\\sqrt{18x^2}-x\\sqrt8$.",
          "svg": "",
          "options": [
            "A. $x\\sqrt2$.",
            "B. $-5x\\sqrt2$.",
            "C. $-x\\sqrt2$.",
            "D. $5x\\sqrt2$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Kiểm điều kiện và dấu\n$18x^2\\ge0$, $8>0$, nên các căn xác định. Giả thiết $x<0$ quyết định cách bỏ giá trị tuyệt đối.\nBước 2: Rút gọn căn chứa biến\n$\\sqrt{18x^2}=3\\sqrt2\\sqrt{x^2}=3|x|\\sqrt2$.\nDo $x<0$, có $|x|=-x$, nên căn này bằng $-3x\\sqrt2$.\nBước 3: Rút gọn hạng tử còn lại\n$\\sqrt8=2\\sqrt2$, do đó $x\\sqrt8=2x\\sqrt2$.\nBước 4: Trừ các hạng tử\n$P=-3x\\sqrt2-2x\\sqrt2=-5x\\sqrt2$.\nKhông thay $\\sqrt{x^2}$ bằng $x$ khi $x$ âm.\nBước 5: Kết luận\nChọn B.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-03",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ghép hai căn trên miền âm",
          "prompt": "Cho $x<-1$. Rút gọn $P=\\sqrt{\\frac{x^2-1}{(x+1)^2}}\\cdot\\sqrt{\\frac{x+1}{x-1}}$.",
          "svg": "",
          "options": [
            "A. $-1$.",
            "B. $\\frac{x-1}{x+1}$.",
            "C. $1$.",
            "D. $\\frac{x+1}{x-1}$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Kiểm tra các mẫu và căn\n$x<-1$ cho $x+1<0$, $x-1<0$, cả hai khác $0$.\n$x^2-1>0$ và $(x+1)/(x-1)>0$, nên hai căn xác định.\nBước 2: Chọn phép ghép căn\nVới hai số không âm $A,B$, có $\\sqrt A\\sqrt B=\\sqrt{AB}$. Ta dùng tính chất này cho toàn bộ hai phân thức.\nBước 3: Rút gọn tích dưới căn\nPhân tích $x^2-1=(x-1)(x+1)$.\nTích dưới căn bằng $[(x-1)(x+1)/(x+1)^2]\\cdot[(x+1)/(x-1)]=1$ vì các thừa số bị rút gọn đều khác $0$.\nBước 4: Tính căn và tránh phép tách sai\n$P=\\sqrt1=1$. Không tách thành các căn riêng của $x+1$ hay $x-1$, vì các số đó âm.\nBước 5: Kết luận\nChọn C.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-04",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Mẫu là một căn thức",
          "prompt": "Cho $x>0$. Trục căn thức ở mẫu của $\\frac6{\\sqrt{3x}}$ được kết quả nào?",
          "svg": "",
          "options": [
            "A. $\\frac{2\\sqrt{3x}}x$.",
            "B. $\\frac{6\\sqrt{3x}}x$.",
            "C. $\\frac{2\\sqrt{3x}}{3x}$.",
            "D. $\\frac2{\\sqrt{3x}}$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Kiểm mẫu\n$x>0$ nên $3x>0$ và $\\sqrt{3x}>0$. Phân thức xác định.\nBước 2: Chọn thừa số để trục căn\nNhân cả tử và mẫu với $\\sqrt{3x}$ sẽ biến mẫu thành $3x$, không còn căn.\nBước 3: Thực hiện\n$6/\\sqrt{3x}=6\\sqrt{3x}/(\\sqrt{3x}\\sqrt{3x})=6\\sqrt{3x}/(3x)$.\nBước 4: Rút gọn hệ số\nChia tử và mẫu cho $3$, được $2\\sqrt{3x}/x$. Điều kiện $x>0$ vẫn được giữ.\nBước 5: Kết luận\nChọn A. Nhân mẫu với căn phải đồng thời nhân tử với cùng căn đó.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-05",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Mẫu nhị thức liên hợp",
          "prompt": "Rút gọn $Q=\\frac4{\\sqrt7-\\sqrt3}$. Hai căn xác định và mẫu khác $0$ vì $7\\ne3$.",
          "svg": "",
          "options": [
            "A. $\\sqrt7-\\sqrt3$.",
            "B. $4(\\sqrt7+\\sqrt3)$.",
            "C. $\\frac25(\\sqrt7+\\sqrt3)$.",
            "D. $\\sqrt7+\\sqrt3$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận dạng mẫu là hiệu hai căn\nHai căn xác định và khác nhau, nên mẫu không bằng $0$.\nBước 2: Chọn biểu thức liên hợp\nLiên hợp của $\\sqrt7-\\sqrt3$ là $\\sqrt7+\\sqrt3$, một số dương khác $0$.\nBước 3: Nhân cả tử và mẫu\n$Q=4(\\sqrt7+\\sqrt3)/[(\\sqrt7-\\sqrt3)(\\sqrt7+\\sqrt3)]$.\nDùng hiệu hai bình phương, mẫu bằng $7-3=4$.\nBước 4: Rút gọn\n$Q=4(\\sqrt7+\\sqrt3)/4=\\sqrt7+\\sqrt3$. Hệ số $4$ triệt tiêu, không giữ lại ở tử.\nBước 5: Kết luận\nChọn D.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-06",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Máy tính và căn bậc ba âm",
          "prompt": "Căn bậc ba xác định với mọi số thực. Cần tính $\\sqrt[3]{-5}$, làm tròn đến hàng phần nghìn bằng máy tính. Cách làm và kết quả nào đúng?",
          "svg": "",
          "options": [
            "A. Nhập căn bậc ba của $5$; được $1{,}710$.",
            "B. Nhập căn bậc ba của $(-5)$; được $-1{,}710$.",
            "C. Nhập căn bậc hai của $(-5)$; được $-2{,}236$.",
            "D. Nhập $(-5)^3$; được $-125{,}000$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định đúng phép tính\nCần căn bậc ba của số âm $-5$, không phải căn bậc hai hay lập phương.\nCăn bậc ba của một số âm là số âm vì lập phương giữ dấu.\nBước 2: Nhập máy tính\nDùng chức năng căn bậc ba, đặt đối số $(-5)$ trong ngoặc để máy nhận cả dấu âm.\nBước 3: Đọc kết quả\nMáy cho khoảng $-1{,}7099759$. Đây là số có lập phương bằng $-5$ trước khi làm tròn.\nBước 4: Làm tròn\nLàm tròn độ lớn $1{,}7099759$ đến ba chữ số thập phân được $1{,}710$, rồi giữ dấu âm.\nCăn bậc hai của $-5$ không có giá trị thực; $(-5)^3=-125$ là phép tính khác.\nBước 5: Kết luận\nChọn B, kết quả gần đúng $-1{,}710$.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-07",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Số chia cũng có điều kiện",
          "prompt": "Xét $P=\\left(\\frac{\\sqrt x}{\\sqrt x-1}-\\frac1{x-\\sqrt x}\\right):\\frac{\\sqrt x+1}{\\sqrt x-2}$. Chọn kết luận gồm điều kiện xác định đầy đủ của biểu thức gốc và dạng rút gọn.",
          "svg": "",
          "options": [
            "A. $x>0$; $P=\\frac{\\sqrt x-2}{\\sqrt x}$.",
            "B. $x>0,\\ x\\ne1$; $P=\\frac{\\sqrt x-2}{\\sqrt x}$.",
            "C. $x>0,\\ x\\ne1,4$; $P=\\frac{\\sqrt x-2}{\\sqrt x}$.",
            "D. $x>0,\\ x\\ne1,4$; $P=\\frac{\\sqrt x}{\\sqrt x-2}$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Ghi đầy đủ điều kiện\nĐặt $t=\\sqrt x\\ge0$. Các mẫu yêu cầu $t\\ne1$, $t(t-1)\\ne0$, $t\\ne2$.\nSố chia $(t+1)/(t-2)$ khác $0$ vì $t+1>0$. Vậy $x>0$, $x\\ne1,4$.\nBước 2: Quy đồng trong ngoặc\n$t/(t-1)-1/[t(t-1)]=(t^2-1)/[t(t-1)]$.\nBước 3: Phân tích và rút gọn\n$t^2-1=(t-1)(t+1)$, nên tổng trong ngoặc bằng $(t+1)/t$ trên miền đã ghi.\nBước 4: Thực hiện phép chia\nChia cho $(t+1)/(t-2)$ là nhân với $(t-2)/(t+1)$.\nDo đó $P=(t-2)/t=(\\sqrt x-2)/\\sqrt x$. Các điểm cấm $1,4$ không được bổ sung trở lại dù mẫu cuối không còn cấm chúng.\nBước 5: Kết luận\nChọn C, đúng cả điều kiện lẫn biểu thức rút gọn.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-08",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Rút gọn rồi tính giá trị",
          "prompt": "Cho $x\\ge0$, $x\\ne1$. Rút gọn $P=\\frac{\\sqrt x+1}{\\sqrt x-1}-\\frac{\\sqrt x-1}{\\sqrt x+1}$ rồi tính $P$ tại $x=9$. Chọn giá trị nhận được.",
          "svg": "",
          "options": [
            "A. $\\frac32$.",
            "B. $\\frac34$.",
            "C. $\\frac52$.",
            "D. $3$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Giữ miền và đặt ẩn phụ\nĐặt $t=\\sqrt x\\ge0$, $t\\ne1$. Hai mẫu $t-1,t+1$ khác $0$.\nBước 2: Quy đồng hiệu\n$P=[(t+1)^2-(t-1)^2]/[(t-1)(t+1)]$.\nBước 3: Khai triển đúng dấu trừ\nTử bằng $t^2+2t+1-(t^2-2t+1)=4t$.\nVậy $P=4t/(t^2-1)=4\\sqrt x/(x-1)$.\nBước 4: Thay giá trị được phép\n$x=9$ thỏa miền, nên $P=4\\cdot3/(9-1)=12/8=3/2$.\nCó thể kiểm trực tiếp $4/2-2/4=3/2$ trong biểu thức gốc.\nBước 5: Kết luận\nChọn A.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-09",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Rút hai tổng trước khi chia",
          "prompt": "Với $x\\ge0$, $x\\ne4$, cho $A=\\frac{\\sqrt x}{\\sqrt x-2}-\\frac2{\\sqrt x+2}$ và $B=\\sqrt x+2+\\frac8{\\sqrt x-2}$. Rút gọn $Q=A:B$, rồi tìm $x$ để $Q=\\frac15$.",
          "svg": "",
          "options": [
            "A. $3$.",
            "B. $49$.",
            "C. $9$.",
            "D. $4$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đặt ẩn và xét miền\nĐặt $t=\\sqrt x\\ge0$, $t\\ne2$. Các mẫu $t-2,t+2$ khác $0$; còn phải kiểm $B\\ne0$ trước khi chia.\nBước 2: Rút gọn A\n$A=[t(t+2)-2(t-2)]/[(t-2)(t+2)]=(t^2+4)/[(t-2)(t+2)]$.\nHai hạng tử $2t$ và $-2t$ triệt tiêu ở tử.\nBước 3: Rút gọn B và kiểm số chia\n$B=[(t+2)(t-2)+8]/(t-2)=(t^2+4)/(t-2)$.\nVì $t^2+4>0$, có $B\\ne0$. Do đó $Q=A/B=1/(t+2)$.\nBước 4: Giải yêu cầu bổ sung\n$1/(t+2)=1/5$ cho $t+2=5$, nên $t=3$ và $x=t^2=9$.\nGiá trị này không bị cấm; thay lại $A=13/5$, $B=13$, cho đúng $Q=1/5$.\nBước 5: Kết luận\nChọn C. Đề hỏi $x$, không phải $t=\\sqrt x$.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-10",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai căn khác nhau trong mẫu",
          "prompt": "Cho $x\\ge1$. Trục căn thức ở mẫu rồi rút gọn $P=\\frac{\\sqrt{x+3}+\\sqrt{x-1}}{\\sqrt{x+3}-\\sqrt{x-1}}$.",
          "svg": "",
          "options": [
            "A. $\\frac{x+1-\\sqrt{(x+3)(x-1)}}2$.",
            "B. $x+1+\\sqrt{(x+3)(x-1)}$.",
            "C. $\\frac{x+1+\\sqrt{(x+3)(x-1)}}4$.",
            "D. $\\frac{x+1+\\sqrt{(x+3)(x-1)}}2$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Kiểm các căn và mẫu\n$x\\ge1$ bảo đảm các căn xác định. Vì $x+3>x-1$, có $\\sqrt{x+3}>\\sqrt{x-1}$, nên mẫu dương.\nBước 2: Chọn liên hợp\nNhân cả tử và mẫu với $\\sqrt{x+3}+\\sqrt{x-1}$.\nMẫu mới bằng $(x+3)-(x-1)=4$.\nBước 3: Khai triển tử\nTử là bình phương một tổng: $2x+2+2\\sqrt{(x+3)(x-1)}$.\nHạng tử tích phải có hệ số $2$ theo $(a+b)^2=a^2+2ab+b^2$.\nBước 4: Chia hệ số chung\nChia tử và mẫu cho $2$, được $P=[x+1+\\sqrt{(x+3)(x-1)}]/2$.\nTại $x=1$, hai biểu thức cùng bằng $1$, nên đầu mút được giữ.\nBước 5: Kết luận\nChọn D.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-11",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Căn chẵn và căn lẻ trong cùng biểu thức",
          "prompt": "Cho $x<0$. Rút gọn $T=\\sqrt[3]{8x^3}-\\sqrt{9x^2}+\\sqrt{x^4}$.",
          "svg": "",
          "options": [
            "A. $x^2-x$.",
            "B. $x^2+5x$.",
            "C. $-x^2+5x$.",
            "D. $-x^2-x$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Phân biệt hai loại căn\nCăn bậc ba nhận mọi số thực; $9x^2,x^4$ không âm nên các căn bậc hai cũng xác định.\nBước 2: Rút gọn căn bậc ba\n$\\sqrt[3]{8x^3}=2x$ vì $(2x)^3=8x^3$, không lấy giá trị tuyệt đối.\nBước 3: Rút gọn hai căn bậc hai\n$\\sqrt{9x^2}=3|x|=-3x$ do $x<0$.\n$\\sqrt{x^4}=|x^2|=x^2$ vì $x^2\\ge0$.\nBước 4: Thay và thu gọn\n$T=2x-(-3x)+x^2=x^2+5x$. Dấu trừ trước căn thứ hai trở thành cộng sau khi thế $-3x$.\nBước 5: Kết luận\nChọn B.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-nangCao-12",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Đủ điều kiện trước khi rút gọn",
          "prompt": "Xét $P=\\left(\\frac{\\sqrt{x-1}}{\\sqrt{x-1}-1}-\\frac1{\\sqrt{x-1}+1}\\right):\\frac{x}{x-4}$. Chọn điều kiện xác định đầy đủ và dạng rút gọn đúng.",
          "svg": "",
          "options": [
            "A. $x\\ge1,\\ x\\ne2,4$; $P=\\frac{x-4}{x-2}$.",
            "B. $x\\ge0,\\ x\\ne2,4$; $P=\\frac{x-4}{x-2}$.",
            "C. $x\\ge1,\\ x\\ne2$; $P=\\frac{x-4}{x-2}$.",
            "D. $x\\ge1,\\ x\\ne2,4$; $P=\\frac{x-2}{x-4}$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xét miền gốc\nCăn yêu cầu $x\\ge1$. Mẫu $\\sqrt{x-1}-1$ yêu cầu $x\\ne2$; mẫu $x-4$ yêu cầu $x\\ne4$.\nMẫu $\\sqrt{x-1}+1$ dương. Số chia $x/(x-4)$ khác $0$ vì $x\\ge1$.\nBước 2: Đặt ẩn phụ và quy đồng\nĐặt $t=\\sqrt{x-1}\\ge0$. Trong ngoặc bằng $[t(t+1)-(t-1)]/(t^2-1)$.\nBước 3: Thu gọn tử và đổi về x\nTử bằng $t^2+1=x$, mẫu bằng $t^2-1=x-2$. Trong ngoặc là $x/(x-2)$.\nBước 4: Chia hai phân thức\n$P=[x/(x-2)]\\cdot[(x-4)/x]=(x-4)/(x-2)$.\nRút gọn $x$ hợp lệ vì $x\\ge1$; điểm $x=4$ vẫn bị cấm trong biểu thức ban đầu.\nBước 5: Kết luận\nChọn A với miền $x\\ge1$, $x\\ne2,4$.",
          "manThi": "rutGonCan"
        }
      ],
      "hsg": [
        {
          "id": "l9-can-thuc-hsg-01",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Hiệu hai căn bậc ba",
          "prompt": "Cho $a=-5$, $b=3$. Tính $T=\\sqrt[3]{(a-b)^3}-\\sqrt[3]{(a+b)^3}$. Căn bậc ba xác định với mọi đối số thực.",
          "svg": "",
          "correctAnswer": "-6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định loại căn\nBài dùng căn bậc ba. Căn bậc ba xác định cả khi số dưới căn âm.\nBước 2: Chọn tính chất\nVới mọi số thực $u$, ta có $\\sqrt[3]{u^3}=u$, vì $u$ là số duy nhất có lập phương bằng $u^3$.\nKhông thay kết quả bằng $|u|$: đó là tính chất của $\\sqrt{u^2}$.\nBước 3: Rút gọn biểu thức\nÁp dụng cho $u=a-b$ và $u=a+b$, được $T=(a-b)-(a+b)$.\nBỏ ngoặc thứ hai phải đổi dấu: $T=a-b-a-b=-2b$.\nBước 4: Thay số và kiểm trực tiếp\nVới $b=3$, có $T=-6$.\nKiểm tra: $a-b=-8$, $a+b=-2$, nên hai căn lần lượt là $-8$ và $-2$; hiệu $-8-(-2)=-6$.\nBước 5: Kết luận\nGiá trị cần nhập là $-6$.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-hsg-02",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Không cần tìm riêng hai căn",
          "prompt": "Cho $a,b\\ge0$, $\\sqrt a+\\sqrt b=5$ và $a+b=13$. Tính $T=a\\sqrt a+b\\sqrt b$.",
          "svg": "",
          "correctAnswer": "35",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn phụ\nĐặt $u=\\sqrt a$, $v=\\sqrt b$. Vì $a,b\\ge0$ nên $u,v$ là các số thực không âm.\nTa có $u+v=5$, $u^2+v^2=a+b=13$ và $T=u^3+v^3$.\nBước 2: Tìm tích hai ẩn\nDùng $(u+v)^2=u^2+2uv+v^2$.\nThay dữ kiện: $25=13+2uv$, nên $2uv=12$, tức $uv=6$.\nBước 3: Biểu diễn tổng lập phương\nKhai triển $(u+v)^3=u^3+v^3+3uv(u+v)$.\nChuyển vế được $T=(u+v)^3-3uv(u+v)$.\nBước 4: Tính và kiểm tính tồn tại\nThay số: $T=5^3-3\\cdot6\\cdot5=125-90=35$.\nCác dữ kiện có thể đồng thời xảy ra: lấy $u=2,v=3$, thì $a=4,b=9$ thỏa đề. Không cần tìm riêng $a,b$ để tính $T$.\nBước 5: Kết luận\nGiá trị biểu thức là $35$.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-hsg-03",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hằng số trên cả miền xác định",
          "prompt": "Với $x\\ge0$, $x\\ne1$, đặt $F(x)=\\frac{mx+n\\sqrt x+4}{x-1}-\\frac2{\\sqrt x-1}$, trong đó $m,n$ là số thực. Tìm $m^2+n^2$ để $F(x)$ là một hằng số với mọi $x$ trong miền đã cho.",
          "svg": "",
          "correctAnswer": "8",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn và giữ miền\nĐặt $t=\\sqrt x$, nên $t\\ge0$, $t\\ne1$.\nKhi đó $x-1=(t-1)(t+1)$; cả hai thừa số đều khác $0$ trên miền này.\nBước 2: Quy đồng\nTa có $2/(t-1)=2(t+1)/(t^2-1)$.\nDo đó $F=[mt^2+nt+4-2(t+1)]/(t^2-1)=[mt^2+(n-2)t+2]/(t^2-1)$.\nBước 3: Dùng điều kiện là hằng số\nGiả sử $F=k$ với mọi $t$ trong miền. Nhân mẫu khác $0$ được $(m-k)t^2+(n-2)t+(2+k)=0$.\nTại $t=0$ có $2+k=0$, nên $k=-2$.\nTại $t=2$ và $t=3$, sau khi dùng $2+k=0$, lần lượt được $2(m-k)+(n-2)=0$ và $3(m-k)+(n-2)=0$.\nLấy phương trình sau trừ phương trình trước: $m-k=0$. Vì vậy $m=-2$ và $n=2$.\nBước 4: Kiểm tra trên toàn miền\nThay $m=-2,n=2$, tử bằng $-2t^2+2=-2(t^2-1)$.\nVậy $F=-2$ với mọi $t\\ge0,t\\ne1$, không chỉ tại ba điểm đã thử.\nBước 5: Kết luận\n$m^2+n^2=(-2)^2+2^2=8$. Bước kiểm tra toàn miền là cần thiết vì thử vài điểm riêng lẻ chưa tự chứng minh một biểu thức là hằng số.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-hsg-04",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Đẳng thức qua mẫu liên hợp",
          "prompt": "Cho $a,b>0$ và $a\\ne b$. Chứng minh $\\left(\\frac{\\sqrt a}{\\sqrt a+\\sqrt b}+\\frac{\\sqrt b}{\\sqrt a-\\sqrt b}\\right)(a-b)=a+b$.",
          "svg": "",
          "solution": "Bước 1: Kiểm tra các mẫu\n$a,b>0$ nên hai căn xác định và $\\sqrt a+\\sqrt b>0$.\nDo $a\\ne b$, có $\\sqrt a\\ne\\sqrt b$, nên mẫu còn lại cũng khác $0$.\nBước 2: Chọn mẫu chung\nTích hai mẫu là $(\\sqrt a+\\sqrt b)(\\sqrt a-\\sqrt b)=a-b\\ne0$ theo hiệu hai bình phương.\nBước 3: Quy đồng và tính tử\nTổng trong ngoặc bằng $[\\sqrt a(\\sqrt a-\\sqrt b)+\\sqrt b(\\sqrt a+\\sqrt b)]/(a-b)$.\nKhai triển tử được $a-\\sqrt{ab}+\\sqrt{ab}+b=a+b$.\nHai hạng tử chứa $\\sqrt{ab}$ triệt tiêu vì đối nhau.\nBước 4: Nhân với thừa số bên ngoài\nVế trái bằng $[(a+b)/(a-b)](a-b)=a+b$.\nPhép rút gọn hợp lệ vì đã có $a-b\\ne0$.\nBước 5: Kết luận\nĐẳng thức đúng với mọi $a,b$ thỏa giả thiết. Không mở rộng kết luận sang $a=b$, vì biểu thức ban đầu không xác định tại đó.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-hsg-05",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Miền đạt giá trị nhỏ nhất",
          "prompt": "Với $x\\in\\mathbb R$, đặt $P=\\sqrt{x^2-6x+9}+\\sqrt{x^2+2x+1}$. Chứng minh $P\\ge4$ và xác định đầy đủ các giá trị $x$ để $P=4$ bằng cách xét dấu.",
          "svg": "",
          "solution": "Bước 1: Nhận dạng biểu thức dưới căn\n$x^2-6x+9=(x-3)^2$ và $x^2+2x+1=(x+1)^2$.\nHai bình phương luôn không âm, nên $P$ xác định với mọi số thực $x$.\nBước 2: Đưa về giá trị tuyệt đối\nDùng $\\sqrt{u^2}=|u|$, ta được $P=|x-3|+|x+1|$.\nHai biểu thức đổi dấu tại $x=-1$ và $x=3$, nên cần chia trục số theo hai mốc này.\nBước 3: Xét miền bên trái và miền giữa\nNếu $x<-1$, cả $x-3$ và $x+1$ âm. Khi đó $P=3-x-x-1=2-2x>4$ vì $-2x>2$.\nNếu $-1\\le x\\le3$, có $x-3\\le0$ và $x+1\\ge0$. Vì thế $P=3-x+x+1=4$.\nBước 4: Xét miền bên phải\nNếu $x>3$, cả hai biểu thức đều dương. Khi đó $P=x-3+x+1=2x-2>4$ vì $2x>6$.\nBa trường hợp đã phủ hết mọi số thực, kể cả hai đầu mút ở trường hợp giữa.\nBước 5: Kết luận\n$P\\ge4$ với mọi $x$. Dấu bằng xảy ra đúng trên cả đoạn $-1\\le x\\le3$, không chỉ tại một điểm.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-hsg-06",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Thay số vô tỉ sau rút gọn",
          "prompt": "Cho $x>0$, $x\\ne1$ và $P=\\left(\\frac{\\sqrt x}{\\sqrt x-1}+\\frac1{\\sqrt x+1}\\right)\\frac{x-1}{\\sqrt x}$. Rút gọn $P$, rồi tính giá trị tại $x=3+2\\sqrt2$.",
          "svg": "",
          "correctAnswer": "4",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn phụ và điều kiện\nĐặt $t=\\sqrt x>0$, $t\\ne1$. Khi đó $x-1=(t-1)(t+1)$.\nCác mẫu $t,t-1,t+1$ đều khác $0$.\nBước 2: Quy đồng tổng trong ngoặc\n$t/(t-1)+1/(t+1)=[t(t+1)+(t-1)]/[(t-1)(t+1)]$.\nTử bằng $t^2+2t-1$, mẫu bằng $t^2-1$.\nBước 3: Nhân và rút gọn\n$P=[(t^2+2t-1)/(t^2-1)]\\cdot[(t^2-1)/t]$.\nRút gọn thừa số khác $0$ rồi chia từng hạng tử cho $t$: $P=t+2-1/t$.\nBước 4: Tính tại giá trị đề cho\n$3+2\\sqrt2=(1+\\sqrt2)^2$ và $1+\\sqrt2>0$, nên $t=1+\\sqrt2$.\nTrục căn thức: $1/(1+\\sqrt2)=(\\sqrt2-1)/[(1+\\sqrt2)(\\sqrt2-1)]=\\sqrt2-1$.\nVậy $P=1+\\sqrt2+2-(\\sqrt2-1)=4$.\nBước 5: Kết luận và kiểm miền\n$x=3+2\\sqrt2>0$ và khác $1$, nên được phép thay vào biểu thức gốc. Kết quả là $4$.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-hsg-07",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Giá trị nguyên và điểm cấm đã mất",
          "prompt": "Cho $x$ là số nguyên không âm, $x\\ne4$, và $P=\\frac{x+\\sqrt x-6}{x-4}+\\frac7{\\sqrt x+2}$. Rút gọn $P$, rồi tính tổng tất cả các giá trị $x$ để $P$ là số nguyên.",
          "svg": "",
          "correctAnswer": "36",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn và giữ điểm cấm\nĐặt $t=\\sqrt x\\ge0$. Vì $x\\ne4$, có $t\\ne2$; còn $t+2>0$.\nBước 2: Rút gọn biểu thức\n$x+\\sqrt x-6=t^2+t-6=(t+3)(t-2)$; $x-4=(t-2)(t+2)$.\nDo đó $P=(t+3)/(t+2)+7/(t+2)=(t+10)/(t+2)=1+8/(t+2)$.\nĐiều kiện $t\\ne2$ vẫn phải giữ sau khi rút gọn.\nBước 3: Chứng minh t phải nguyên\nNếu $P$ nguyên, đặt $h=P-1=8/(t+2)$. Vì mẫu dương nên $h$ là số nguyên dương.\nSuy ra $t=8/h-2$ hữu tỉ. Viết $t=p/q$ tối giản với $q>0$; từ $t^2=x$ nguyên có $p^2=xq^2$.\nNếu $q>1$, một số nguyên tố chia $q$ cũng phải chia $p^2$, nên chia $p$, trái với tối giản. Vậy $q=1$ và $t$ nguyên.\nBước 4: Liệt kê và thử lại\n$t+2$ là ước dương của $8$ và ít nhất bằng $2$, nên $t+2=2,4,8$.\nTương ứng $t=0,2,6$. Loại $t=2$ vì $x=4$ bị cấm.\nCòn $x=0,36$: biểu thức rút gọn lần lượt cho $P=5,2$, đều nguyên; hai giá trị đều thuộc miền gốc.\nBước 5: Kết luận\nTổng các giá trị $x$ là $0+36=36$. Không được nhận $x=4$ chỉ vì nó không còn làm mẫu của biểu thức rút gọn bằng $0$.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-hsg-08",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tham số và nghiệm rơi vào điểm cấm",
          "prompt": "Với $m$ là số nguyên, cho $P_m(x)=\\frac{x+(m-1)\\sqrt x-m}{x-1}$ trên miền $x\\ge0$, $x\\ne1$. Rút gọn $P_m(x)$, rồi tìm tổng các giá trị $m$ để phương trình $P_m(x)=2$ có nghiệm thỏa $0\\le x<9$.",
          "svg": "",
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn phụ\nĐặt $t=\\sqrt x\\ge0$, $t\\ne1$. Điều kiện $0\\le x<9$ tương đương $0\\le t<3$.\nBước 2: Rút gọn trên miền gốc\nTử bằng $t^2+(m-1)t-m=(t-1)(t+m)$.\nMẫu bằng $(t-1)(t+1)$, nên $P_m=(t+m)/(t+1)$, nhưng vẫn giữ $t\\ne1$.\nBước 3: Giải phương trình theo t\nVì $t+1>0$, phương trình $P_m=2$ tương đương $t+m=2(t+1)$.\nChuyển vế được $t=m-2$.\nBước 4: Kết hợp điều kiện và kiểm giá trị cấm\nTừ $0\\le t<3$ có $2\\le m<5$. Vì $m$ nguyên, ứng viên là $2,3,4$.\n$m=3$ cho $t=1$, tức $x=1$, bị loại bởi mẫu gốc.\n$m=2$ cho $x=0$; thay biểu thức gốc cho $(-2)/(-1)=2$.\n$m=4$ cho $x=4$; tử bằng $4+3\\cdot2-4=6$, mẫu bằng $3$, nên cũng cho $2$.\nBước 5: Kết luận\nChỉ nhận $m=2,4$. Tổng cần tìm là $6$.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-hsg-09",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai cách viết qua liên hợp",
          "prompt": "Cho $x\\ge1$ và $P=\\frac1{\\sqrt{x+1}+\\sqrt x}-\\frac1{\\sqrt x+\\sqrt{x-1}}$. Chứng minh $P=\\frac{-2}{(\\sqrt{x+1}+\\sqrt{x-1})(\\sqrt{x+1}+\\sqrt x)(\\sqrt x+\\sqrt{x-1})}$, từ đó xác định dấu của $P$.",
          "svg": "",
          "solution": "Bước 1: Kiểm miền và đặt tên các căn\nVới $x\\ge1$, đặt $a=\\sqrt{x+1}$, $b=\\sqrt x$, $c=\\sqrt{x-1}$.\nTa có $a,b>0$, $c\\ge0$, nên $a+b,b+c,a+c$ đều dương, kể cả khi $x=1$.\nBước 2: Quy đồng hiệu\n$P=1/(a+b)-1/(b+c)=[(b+c)-(a+b)]/[(a+b)(b+c)]$.\nThu gọn tử được $P=(c-a)/[(a+b)(b+c)]$.\nBước 3: Biến đổi hiệu hai căn\nVì $a+c>0$, có $c-a=(c-a)(c+a)/(c+a)=(c^2-a^2)/(a+c)$.\nMà $c^2-a^2=(x-1)-(x+1)=-2$, nên $c-a=-2/(a+c)$.\nBước 4: Kết nối hai kết quả\nThay vào biểu thức của $P$: $P=-2/[(a+c)(a+b)(b+c)]$.\nĐổi $a,b,c$ về các căn ban đầu được đúng đẳng thức đề yêu cầu.\nBước 5: Xác định dấu và kết luận\nBa thừa số ở mẫu đều dương, còn tử bằng $-2<0$. Vì vậy $P<0$ với mọi $x\\ge1$; không có trường hợp $P=0$.",
          "manThi": "rutGonCan"
        },
        {
          "id": "l9-can-thuc-hsg-10",
          "lop": 9,
          "chuDe": "can-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Liệt kê đầy đủ cho một họ biểu thức",
          "prompt": "Cho số nguyên $k\\ge2$ và số nguyên $x\\ge0$. Đặt $F_k(x)=\\frac{x+2k\\sqrt x+2k^2-1}{\\sqrt x+k}-\\sqrt x$. Chứng minh rằng $F_k(x)$ là số nguyên khi và chỉ khi $x=(d-k)^2$, trong đó $d$ là một ước dương của $k^2-1$ và $d\\ge k$.",
          "svg": "",
          "solution": "Bước 1: Kiểm điều kiện và rút gọn\nĐặt $t=\\sqrt x\\ge0$. Vì $k\\ge2$, mẫu $t+k\\ge k>0$.\nTử bằng $t^2+2kt+2k^2-1=(t+k)^2+(k^2-1)$.\nChia cho $t+k$ rồi trừ $t$, được $F_k=k+(k^2-1)/(t+k)$.\nBước 2: Từ giá trị nguyên suy ra căn hữu tỉ\nGiả sử $F_k$ nguyên. Khi đó $h=F_k-k=(k^2-1)/(t+k)$ là số nguyên dương, vì $k^2-1>0$.\nSuy ra $t=(k^2-1)/h-k$ hữu tỉ.\nBước 3: Chứng minh t nguyên và tìm ước d\nViết $t=p/q$ tối giản, $q>0$. Từ $t^2=x$ nguyên có $p^2=xq^2$.\nNếu một số nguyên tố chia $q$ thì nó chia $p^2$, nên chia $p$, trái với tối giản. Do đó $q=1$.\nĐặt $d=t+k$. Đây là số nguyên ít nhất bằng $k$; từ $h=(k^2-1)/d$ nguyên suy ra $d$ là ước dương của $k^2-1$.\nKhi ấy $x=t^2=(d-k)^2$. Ta đã chứng minh chiều cần.\nBước 4: Chứng minh chiều đủ\nNgược lại, lấy một ước dương $d$ của $k^2-1$ với $d\\ge k$, rồi đặt $x=(d-k)^2$.\nĐây là số nguyên không âm và $\\sqrt x=d-k$ vì $d-k\\ge0$.\nDo đó $F_k=k+(k^2-1)/d$ là số nguyên; mẫu bằng $d>0$ nên biểu thức xác định.\nBước 5: Kết luận\nHai chiều chứng minh đúng điều kiện tương đương của đề.\nKhông tự nhận ước $d<k$: khi đó $\\sqrt{(d-k)^2}=|d-k|$ không bằng $d-k$, nên phép thế ở chiều đủ không còn đúng.",
          "manThi": "rutGonCan"
        }
      ]
    },
    'he-hai-pt': {
      "kha": [
        {
          "id": "l9-he-hai-pt-kha-01",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai phương trình đều phải hợp lệ",
          "prompt": "Hệ nào gồm hai phương trình bậc nhất hai ẩn $x,y$?",
          "svg": "",
          "options": [
            "A. $\\begin{cases}x^2+y=3\\\\x-y=1\\end{cases}$",
            "B. $\\begin{cases}xy=2\\\\x+y=3\\end{cases}$",
            "C. $\\begin{cases}0x+3y=6\\\\2x-y=1\\end{cases}$",
            "D. $\\begin{cases}0x+0y=1\\\\x+y=3\\end{cases}$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nêu dạng phương trình cần có\nPhương trình bậc nhất hai ẩn có dạng $ax+by=c$, trong đó $a,b$ không đồng thời bằng $0$.\nKhông bắt buộc cả hai hệ số đều khác $0$.\nBước 2: Kiểm tra phương trình đầu ở C\n$0x+3y=6$ có $a=0$, $b=3\\ne0$.\nVì vẫn có một hệ số khác $0$, phương trình này đúng dạng.\nBước 3: Kiểm tra phương trình sau ở C\n$2x-y=1$ có hai hệ số $2$ và $-1$, nên cũng là phương trình bậc nhất hai ẩn.\nHệ C vì thế gồm đúng hai phương trình theo yêu cầu.\nBước 4: Loại các hệ khác\nA có $x^2$, B có tích $xy$, nên chứa phương trình không bậc nhất.\nD có $0x+0y=1$, với cả hai hệ số bằng $0$, vi phạm định nghĩa.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l9-he-hai-pt-kha-02",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Thỏa một phương trình chưa đủ",
          "prompt": "Cặp $(x;y)$ nào là nghiệm của $\\begin{cases}2x+y=4\\\\x-y=-1\\end{cases}$?",
          "svg": "",
          "options": [
            "A. $(1;2)$.",
            "B. $(2;1)$.",
            "C. $(-1;2)$.",
            "D. $(1;-2)$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Hiểu nghiệm của hệ\nMột cặp $(x;y)$ là nghiệm khi thỏa đồng thời cả hai phương trình.\nTa có thể tìm cặp số rồi thay lại để kiểm tra.\nBước 2: Khử y\nCộng $2x+y=4$ và $x-y=-1$ theo từng vế, được $3x=3$.\nVậy $x=1$.\nBước 3: Tìm y\nThay vào $2x+y=4$: $2+y=4$, nên $y=2$.\nBước 4: Thử cả hai phương trình\nVới $(1;2)$, có $2\\cdot1+2=4$ và $1-2=-1$.\nCả hai đều đúng; không chỉ kiểm một phương trình rồi kết luận.\nBước 5: Kết luận\nNghiệm là $(1;2)$. Chọn A."
        },
        {
          "id": "l9-he-hai-pt-kha-03",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giao điểm trên hệ trục",
          "prompt": "Hai đường thẳng trong hình biểu diễn $y=2x-1$ và $y=-x+5$. Đọc hình để chọn nghiệm của hệ gồm hai phương trình này.",
          "svg": svgGrade9Plot({"id":"he9-03","title":"Giao điểm của hai đường thẳng","xmin":-1,"xmax":5,"ymin":-2,"ymax":7,"lines":[{"a":2,"b":-1,"label":"y = 2x − 1","color":"#2563eb"},{"a":-1,"b":5,"label":"y = −x + 5","color":"#db2777"}],"points":[{"x":2,"y":3,"label":"M","guides":true}]}),
          "options": [
            "A. $(3;2)$.",
            "B. $(2;3)$.",
            "C. $(2;5)$.",
            "D. $(1;3)$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Liên hệ giao điểm với nghiệm\nĐiểm thuộc một đường thẳng thì tọa độ của nó thỏa phương trình đường thẳng đó.\nVì vậy giao điểm hai đường biểu diễn nghiệm chung của hệ.\nBước 2: Đọc hoành độ\nTừ giao điểm trên hình, đối chiếu xuống trục hoành được $x=2$.\nHoành độ được viết trước trong cặp tọa độ.\nBước 3: Đọc tung độ\nĐối chiếu giao điểm sang trục tung được $y=3$.\nCặp đọc được là $(2;3)$, không phải $(3;2)$.\nBước 4: Kiểm tra bằng phương trình\nThay $x=2$ vào đường thứ nhất: $2\\cdot2-1=3$.\nThay vào đường thứ hai: $-2+5=3$.\nCả hai đều cho đúng tung độ đã đọc.\nBước 5: Kết luận\nNghiệm của hệ là $(2;3)$. Chọn B."
        }
      ],
      "nangCao": [
        {
          "id": "l9-he-hai-pt-nangCao-01",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Thế từ ẩn đã được cô lập",
          "prompt": "Giải hệ $\\begin{cases}x=2y-1\\\\3x+y=11\\end{cases}$.",
          "svg": "",
          "options": [
            "A. $(2;3)$.",
            "B. $(3;-2)$.",
            "C. $(5;3)$.",
            "D. $(3;2)$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Chọn cách thế\nPhương trình đầu đã cho $x=2y-1$. Ta thay biểu thức này vào phương trình thứ hai để chỉ còn ẩn $y$.\nBước 2: Giải phương trình theo y\nCó $3(2y-1)+y=11$.\nKhai triển và thu gọn: $6y-3+y=11$, nên $7y=14$ và $y=2$.\nBước 3: Tìm x\nThay $y=2$ vào $x=2y-1$, được $x=3$.\nBước 4: Thử lại cả hai phương trình\nVới $(x;y)=(3;2)$, có $3=2\\cdot2-1$ và $3\\cdot3+2=11$.\nCặp số tìm được thỏa đồng thời cả hai phương trình.\nBước 5: Kết luận\nHệ có nghiệm duy nhất $(3;2)$. Chọn D.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-02",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cộng để triệt tiêu ngay một ẩn",
          "prompt": "Giải hệ $\\begin{cases}3x+2y=7\\\\5x-2y=9\\end{cases}$.",
          "svg": "",
          "options": [
            "A. $(2;\\frac12)$.",
            "B. $(\\frac12;2)$.",
            "C. $(2;-\\frac12)$.",
            "D. $(2;1)$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhận xét hệ số\nHệ số của $y$ trong hai phương trình là $2$ và $-2$. Cộng hai phương trình sẽ khử được $y$.\nBước 2: Tính x\nCộng từng vế: $(3x+2y)+(5x-2y)=7+9$.\nDo đó $8x=16$, nên $x=2$.\nBước 3: Tính y\nThay vào phương trình đầu: $6+2y=7$.\nSuy ra $2y=1$, tức $y=1/2$.\nBước 4: Kiểm tra\nPhương trình đầu có $3\\cdot2+2\\cdot(1/2)=7$.\nPhương trình thứ hai có $5\\cdot2-2\\cdot(1/2)=9$.\nBước 5: Kết luận\nNghiệm duy nhất là $(2;1/2)$. Chọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-03",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tạo hệ số đối nhau",
          "prompt": "Giải hệ $\\begin{cases}2x+3y=1\\\\3x-2y=8\\end{cases}$.",
          "svg": "",
          "options": [
            "A. $(2;1)$.",
            "B. $(-1;2)$.",
            "C. $(2;-1)$.",
            "D. $(1;-2)$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chuẩn bị khử ẩn\nHai hệ số của $y$ là $3$ và $-2$. Ta đưa chúng thành $6$ và $-6$.\nBước 2: Nhân và cộng phương trình\nNhân phương trình đầu với $2$: $4x+6y=2$.\nNhân phương trình sau với $3$: $9x-6y=24$.\nCộng lại được $13x=26$, nên $x=2$.\nBước 3: Tìm ẩn còn lại\nThay vào $2x+3y=1$: $4+3y=1$.\nVậy $3y=-3$, nên $y=-1$.\nBước 4: Thử nghiệm\nCó $2\\cdot2+3(-1)=1$ và $3\\cdot2-2(-1)=8$.\nCả hai đẳng thức đều đúng; các phép biến đổi trên là tương đương.\nBước 5: Kết luận\nHệ có nghiệm duy nhất $(2;-1)$. Chọn C.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-04",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đọc đúng thứ tự kết quả máy tính",
          "prompt": "Nhập hệ $\\begin{cases}0{,}5x+0{,}25y=2\\\\0{,}2x-0{,}5y=-1\\end{cases}$ vào máy tính theo thứ tự hệ số của $x$, của $y$, rồi hằng số. Kết quả nào đúng theo thứ tự $(x;y)$?",
          "svg": "",
          "options": [
            "A. $(3;2{,}5)$.",
            "B. $(2{,}5;3)$.",
            "C. $(-2{,}5;3)$.",
            "D. $(2{,}5;-3)$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhập đúng hệ số\nNếu dùng máy tính, nhập hai hàng hệ số $(0{,}5;0{,}25;2)$ và $(0{,}2;-0{,}5;-1)$.\nCần giữ dấu âm của hệ số $y$ và vế phải ở hàng thứ hai.\nBước 2: Đưa về hệ số nguyên để kiểm tra\nNhân phương trình đầu với $4$: $2x+y=8$.\nNhân phương trình sau với $10$: $2x-5y=-10$.\nBước 3: Giải hệ\nLấy phương trình đầu trừ phương trình sau: $6y=18$, nên $y=3$.\nThay lại: $2x+3=8$, nên $x=2{,}5$.\nBước 4: Đối chiếu với hệ ban đầu\nCó $0{,}5\\cdot2{,}5+0{,}25\\cdot3=1{,}25+0{,}75=2$.\nCó $0{,}2\\cdot2{,}5-0{,}5\\cdot3=0{,}5-1{,}5=-1$.\nBước 5: Kết luận\nNghiệm là $(2{,}5;3)$. Chọn B.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-05",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hệ số tỉ lệ nhưng hằng số không khớp",
          "prompt": "Hệ $\\begin{cases}2x-3y=4\\\\4x-6y=5\\end{cases}$ có tập nghiệm như thế nào?",
          "svg": "",
          "options": [
            "A. Chỉ có nghiệm $(2;0)$.",
            "B. Vô số nghiệm thỏa $2x-3y=4$.",
            "C. Mọi cặp số thực đều là nghiệm.",
            "D. Vô nghiệm."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: So sánh hai vế trái\nVế trái $4x-6y$ của phương trình sau bằng hai lần vế trái $2x-3y$ của phương trình đầu.\nBước 2: Tạo phương trình tương ứng\nNếu một cặp $(x;y)$ thỏa $2x-3y=4$ thì nhân hai vế với $2$ cho $4x-6y=8$.\nBước 3: Kiểm tra sự mâu thuẫn\nPhương trình thứ hai lại yêu cầu $4x-6y=5$.\nCùng một biểu thức không thể đồng thời bằng $8$ và $5$.\nBước 4: Giải thích về nghiệm của hệ\nNghiệm của hệ phải thỏa cả hai phương trình, không chỉ một phương trình riêng lẻ.\nVì hai yêu cầu mâu thuẫn, không có cặp số nào được nhận.\nBước 5: Kết luận\nHệ vô nghiệm. Chọn D.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-06",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Mô tả hết nghiệm của hệ phụ thuộc",
          "prompt": "Mô tả nào là toàn bộ nghiệm của $\\begin{cases}x+2y=3\\\\3x+6y=9\\end{cases}$?",
          "svg": "",
          "options": [
            "A. $(x;y)=(3-2t;t)$ với mọi $t\\in\\mathbb R$.",
            "B. Chỉ $(3;0)$.",
            "C. $(x;y)=(3+2t;t)$ với mọi $t\\in\\mathbb R$.",
            "D. Mọi $(x;y)\\in\\mathbb R^2$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhận ra hai phương trình phụ thuộc\nNhân $x+2y=3$ với $3$ được đúng $3x+6y=9$.\nVì thế phương trình thứ hai không tạo thêm điều kiện mới.\nBước 2: Chọn một ẩn tự do\nĐặt $y=t$ với $t$ là số thực tùy ý.\nPhương trình đầu trở thành $x+2t=3$.\nBước 3: Biểu diễn nghiệm\nTừ đó $x=3-2t$.\nMọi nghiệm của hệ đều phải có dạng $(3-2t;t)$.\nBước 4: Kiểm tra chiều ngược lại\nVới mọi $t\\in\\mathbb R$, có $(3-2t)+2t=3$.\nNhân đẳng thức này với $3$ cho phương trình sau, nên mọi cặp vừa viết đều là nghiệm.\nBước 5: Kết luận\nTập nghiệm là $(x;y)=(3-2t;t)$, $t\\in\\mathbb R$. Chọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-07",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Xét riêng trước khi chia theo tham số",
          "prompt": "Với $m\\in\\mathbb R$, xét $\\begin{cases}x+y=2\\\\mx+y=m+1\\end{cases}$. Kết luận nào đúng?",
          "svg": "",
          "options": [
            "A. Mọi $m$ đều có duy nhất nghiệm $(1;1)$.",
            "B. $m=1$ vô nghiệm; các $m$ khác có nghiệm $(1;1)$.",
            "C. $m=1$ có vô số nghiệm $x+y=2$; các $m$ khác có duy nhất nghiệm $(1;1)$.",
            "D. $m=1$ nhận mọi cặp số thực; các $m$ khác có nghiệm $(1;1)$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Khử y\nLấy phương trình $mx+y=m+1$ trừ $x+y=2$.\nTa được $(m-1)x=m-1$.\nBước 2: Xét m khác 1\nKhi $m\\ne1$, được phép chia hai vế cho $m-1$, nên $x=1$.\nTừ $x+y=2$ có $y=1$. Cặp này thỏa phương trình sau vì $m+1=m+1$.\nBước 3: Xét m bằng 1\nKhi $m=1$, cả hai phương trình đều là $x+y=2$.\nMỗi $y=t$ cho một nghiệm $x=2-t$, nên có vô số nghiệm.\nBước 4: Phân biệt miền nghiệm\nỞ $m=1$, hệ không nhận mọi cặp số thực; chỉ nhận những cặp có tổng bằng $2$.\nKhông chia cho $m-1$ ở trường hợp này vì đó là phép chia cho $0$.\nBước 5: Kết luận\n$m=1$: vô số nghiệm trên $x+y=2$; $m\\ne1$: nghiệm duy nhất $(1;1)$. Chọn C.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-08",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai nghịch đảo làm ẩn phụ",
          "prompt": "Giải hệ $\\begin{cases}\\frac2x+\\frac1y=5\\\\\\frac1x-\\frac1y=1\\end{cases}$ với $x\\ne0$, $y\\ne0$.",
          "svg": "",
          "options": [
            "A. $(2;1)$.",
            "B. $(\\frac12;1)$.",
            "C. $(1;\\frac12)$.",
            "D. $(-\\frac12;1)$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đặt ẩn phụ và giữ điều kiện\nVì $x\\ne0$, $y\\ne0$, đặt $u=1/x$, $v=1/y$.\nTa phải có $u\\ne0$, $v\\ne0$ để đổi trở lại các ẩn ban đầu.\nBước 2: Giải hệ mới\nHệ trở thành $2u+v=5$ và $u-v=1$.\nCộng hai phương trình: $3u=6$, nên $u=2$; từ đó $v=1$.\nBước 3: Trở về x và y\nHai giá trị phụ đều khác $0$.\nTừ $1/x=2$ và $1/y=1$, được $x=1/2$, $y=1$.\nBước 4: Thử lại\nCó $2/(1/2)+1/1=5$ và $1/(1/2)-1/1=1$.\nCặp số vừa tìm thỏa hệ gốc và điều kiện xác định.\nBước 5: Kết luận\nNghiệm là $(1/2;1)$. Chọn B.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-09",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đổi hai tổ hợp rồi đổi lại",
          "prompt": "Giải hệ $\\begin{cases}2(x+y-1)+(x-y+2)=9\\\\(x+y-1)-2(x-y+2)=-3\\end{cases}$.",
          "svg": "",
          "options": [
            "A. $(3;3)$.",
            "B. $(\\frac32;\\frac52)$.",
            "C. $(\\frac52;\\frac32)$.",
            "D. $(2;2)$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhận diện các biểu thức lặp lại\nĐặt $u=x+y-1$ và $v=x-y+2$.\nHệ đã cho trở thành $2u+v=9$ và $u-2v=-3$.\nBước 2: Giải theo ẩn phụ\nNhân phương trình đầu với $2$, rồi cộng phương trình sau: $5u=15$.\nDo đó $u=3$, và $2\\cdot3+v=9$ cho $v=3$.\nBước 3: Trả lại các hằng số\nTừ $x+y-1=3$, được $x+y=4$.\nTừ $x-y+2=3$, được $x-y=1$.\nBước 4: Tìm và kiểm nghiệm\nCộng hai phương trình: $2x=5$, nên $x=5/2$ và $y=3/2$.\nKhi đó $u=v=3$, nên $2u+v=9$ và $u-2v=-3$ đúng.\nBước 5: Kết luận\nNghiệm là $(5/2;3/2)$. Chọn C.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-10",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Quan hệ của nghiệm cùng điều kiện duy nhất",
          "prompt": "Tìm $m\\in\\mathbb R$ để hệ $\\begin{cases}mx+y=2\\\\x+my=2\\end{cases}$ có nghiệm duy nhất thỏa $x+y=1$.",
          "svg": "",
          "options": [
            "A. $m=3$.",
            "B. $m=1$.",
            "C. $m=-1$.",
            "D. $m\\in\\{-3;3\\}$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Sử dụng điều kiện về tổng\nĐề yêu cầu nghiệm của hệ có $x+y=1$.\nCộng hai phương trình $mx+y=2$ và $x+my=2$, được $(m+1)(x+y)=4$.\nBước 2: Tìm giá trị cần có của m\nThay $x+y=1$ vào đẳng thức trên: $m+1=4$.\nVậy chỉ $m=3$ có thể thỏa yêu cầu.\nBước 3: Kiểm tra tính duy nhất\nVới $m=3$, hệ là $3x+y=2$, $x+3y=2$.\nTrừ hai phương trình: $2(x-y)=0$, nên $x=y$.\nBước 4: Kiểm tra điều kiện tổng\nThay $y=x$ vào phương trình đầu: $4x=2$, nên $x=y=1/2$.\nĐây là nghiệm duy nhất và có $x+y=1$ như đề yêu cầu.\nBước 5: Kết luận\nGiá trị cần tìm là $m=3$. Chọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-11",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai giá trị suy biến, hai kết quả khác nhau",
          "prompt": "Xét hệ $\\begin{cases}mx+2y=4\\\\2x+my=4\\end{cases}$. Kết luận nào đúng?",
          "svg": "",
          "options": [
            "A. $m=2,-2$ đều vô số nghiệm; các $m$ khác duy nhất.",
            "B. $m=2,-2$ đều vô nghiệm; các $m$ khác duy nhất.",
            "C. $m=2$ vô nghiệm, $m=-2$ vô số nghiệm; các $m$ khác duy nhất.",
            "D. $m=2$ vô số nghiệm, $m=-2$ vô nghiệm; các $m$ khác duy nhất."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Cộng và trừ hai phương trình\nTừ hệ đã cho, nhận được $(m+2)(x+y)=8$ và $(m-2)(x-y)=0$.\nHai giá trị $m=-2$ và $m=2$ cần xét riêng trước khi chia.\nBước 2: Xét m bằng 2\nCả hai phương trình đều trở thành $2x+2y=4$.\nHệ có vô số nghiệm thỏa $x+y=2$.\nBước 3: Xét m bằng âm 2\nPhương trình tổng trở thành $0=8$, là đẳng thức sai.\nVì vậy hệ vô nghiệm khi $m=-2$.\nBước 4: Xét các giá trị còn lại\nNếu $m\\ne\\pm2$, từ phương trình hiệu có $x=y$.\nThay vào hệ được $x=y=4/(m+2)$, xác định duy nhất và thỏa cả hai phương trình.\nBước 5: Kết luận\n$m=2$: vô số nghiệm; $m=-2$: vô nghiệm; còn lại: nghiệm duy nhất. Chọn D.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-nangCao-12",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Nghiệm hệ phụ có đổi về được không?",
          "prompt": "Giải hệ $\\begin{cases}\\sqrt{x+1}+\\frac1{y-2}=1\\\\2\\sqrt{x+1}-\\frac1{y-2}=-4\\end{cases}$ trong miền $x\\ge-1$, $y\\ne2$.",
          "svg": "",
          "options": [
            "A. $(0;\\frac52)$.",
            "B. Vô nghiệm.",
            "C. $(0;\\frac32)$.",
            "D. $(2;\\frac52)$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Ghi điều kiện và đặt ẩn phụ\nĐiều kiện là $x\\ge-1$, $y\\ne2$.\nĐặt $u=\\sqrt{x+1}\\ge0$ và $v=1/(y-2)\\ne0$.\nBước 2: Giải hệ phụ\nTa có $u+v=1$ và $2u-v=-4$.\nCộng hai phương trình: $3u=-3$, nên $u=-1$; khi đó $v=2$.\nBước 3: Đối chiếu điều kiện của u\nGiá trị $u=-1$ trái với $u\\ge0$.\nCăn bậc hai số học của một số không âm không thể là số âm.\nBước 4: Giải thích vì sao không được bình phương để nhận nghiệm\nNếu bình phương $\\sqrt{x+1}=-1$, ta tìm được $x=0$ nhưng thử lại có $\\sqrt{0+1}=1\\ne-1$.\nBình phương đã làm mất điều kiện dấu; $x=0$ không phải nghiệm của phương trình trước khi bình phương.\nBước 5: Kết luận\nHệ ban đầu vô nghiệm. Chọn B.",
          "manThi": "phuongTrinh"
        }
      ],
      "hsg": [
        {
          "id": "l9-he-hai-pt-hsg-01",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "dien",
          "title": "Giá hai loại vé",
          "prompt": "Hai lần mua dùng cùng bảng giá, không phụ phí hay giảm giá. Ba vé người lớn và hai vé trẻ em giá $250$ nghìn đồng; hai vé người lớn và năm vé trẻ em giá $295$ nghìn đồng. Lập hệ để tìm giá một vé người lớn, đơn vị nghìn đồng.",
          "svg": "",
          "correctAnswer": "60",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn có đơn vị\nGọi $u,v>0$ lần lượt là giá vé người lớn và trẻ em, đơn vị nghìn đồng.\nHai lần mua cùng bảng giá nên dùng chung hai ẩn.\nBước 2: Lập hệ từ từng hóa đơn\nLần đầu: $3u+2v=250$.\nLần sau: $2u+5v=295$.\nKhông thêm phụ phí vì đề đã loại khoản này.\nBước 3: Khử ẩn v\nNhân phương trình đầu với $5$: $15u+10v=1250$.\nNhân phương trình sau với $2$: $4u+10v=590$.\nLấy phương trình trên trừ phương trình dưới: $11u=660$, nên $u=60$.\nBước 4: Tìm ẩn còn lại và kiểm tra\nThay vào $3u+2v=250$: $180+2v=250$, nên $v=35$.\nCả hai giá dương. Kiểm hóa đơn: $180+70=250$ và $120+175=295$.\nBước 5: Kết luận\nMột vé người lớn giá $60$ nghìn đồng. Ô trả lời dùng đơn vị nghìn đồng nên nhập $60$.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-he-hai-pt-hsg-02",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Pha trộn có bước bay hơi",
          "prompt": "Trộn hai dung dịch muối nồng độ khối lượng $10\\%$ và $25\\%$. Sau đó chỉ cho bay hơi $100$ g nước, không mất muối, thu được $500$ g dung dịch nồng độ $18\\%$. Không có thất thoát nào khác. Lập hệ để tìm khối lượng dung dịch $25\\%$ đã dùng, đơn vị g.",
          "svg": "",
          "correctAnswer": "200",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chọn ẩn trước khi bay hơi\nGọi $u,v>0$ g là khối lượng dung dịch $10\\%$ và $25\\%$ ban đầu.\nSau bay hơi còn $500$ g; đã mất $100$ g nước nên ban đầu có $600$ g dung dịch.\nBước 2: Lập hai phương trình bảo toàn\nBảo toàn khối lượng trước bay hơi: $u+v=600$.\nLượng muối cuối là $0{,}18\\cdot500=90$ g. Muối không bay hơi nên $0{,}10u+0{,}25v=90$.\nBước 3: Giải hệ\nNhân phương trình khối lượng với $0{,}10$: $0{,}10u+0{,}10v=60$.\nLấy phương trình muối trừ phương trình này: $0{,}15v=30$, nên $v=200$ g.\nTừ đó $u=600-200=400$ g.\nBước 4: Kiểm tính khả thi\nLượng muối là $40+50=90$ g. Nước ban đầu có $600-90=510$ g, đủ để bay hơi $100$ g.\nSau đó còn $500$ g dung dịch với nồng độ $90/500=18\\%$, đúng đề.\nBước 5: Kết luận\nĐã dùng $200$ g dung dịch $25\\%$. Không lấy nồng độ trung bình cộng vì hai lượng dung dịch khác nhau và còn có bước bay hơi nước.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-he-hai-pt-hsg-03",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai lần quan sát vận tốc",
          "prompt": "Hai xe giữ vận tốc không đổi trong cả hai lần chạy, xe I nhanh hơn xe II. Khi cùng xuất phát từ một điểm và cùng chiều, sau $3$ giờ chúng cách nhau $45$ km. Trong lần khác, chúng cùng xuất phát từ hai đầu quãng đường $210$ km, đi ngược chiều và gặp nhau sau $2$ giờ. Không có thời gian dừng. Lập hệ để tìm vận tốc xe I, đơn vị km/h.",
          "svg": "",
          "correctAnswer": "60",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt vận tốc\nGọi vận tốc hai xe lần lượt là $u,v$ km/h, với $u>v>0$.\nHai lần chạy giữ nguyên vận tốc nên cùng một hệ có thể mô tả cả hai tình huống.\nBước 2: Lập phương trình khi đi cùng chiều\nSau $3$ giờ, xe I đi $3u$ km, xe II đi $3v$ km.\nKhoảng cách giữa chúng bằng hiệu quãng đường: $3u-3v=45$, tức $u-v=15$.\nBước 3: Lập phương trình khi đi ngược chiều\nKhi gặp nhau, tổng hai quãng đường bằng $210$ km.\nDo cùng đi $2$ giờ, có $2u+2v=210$, tức $u+v=105$.\nBước 4: Giải và kiểm hệ\nCộng hai phương trình: $2u=120$, nên $u=60$; từ $u-v=15$ có $v=45$.\nĐiều kiện $u>v>0$ được thỏa. Kiểm: $3(60-45)=45$ và $2(60+45)=210$.\nBước 5: Kết luận\nVận tốc xe I là $60$ km/h. Cùng chiều dùng hiệu vận tốc, còn ngược chiều gặp nhau dùng tổng vận tốc vì ý nghĩa khoảng cách khác nhau.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-he-hai-pt-hsg-04",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Cộng bội phải giữ phương trình còn lại",
          "prompt": "Đặt $F=ax+by-c$, $G=dx+ey-f$, với các hệ số thực và mỗi phương trình bậc nhất hợp lệ. Chứng minh hệ $F=0,G=0$ tương đương hệ $F=0,G+kF=0$ với mọi số thực $k$. Giải thích bằng một ví dụ vì sao thay cả hai phương trình bằng cùng phương trình $F+G=0$ có thể làm thêm nghiệm.",
          "svg": "",
          "solution": "Bước 1: Nêu điều phải chứng minh\nHai hệ tương đương nghĩa là mỗi nghiệm của hệ thứ nhất cũng là nghiệm của hệ thứ hai và ngược lại.\nỞ đây chỉ thay phương trình thứ hai; phương trình $F=0$ phải được giữ.\nBước 2: Chứng minh chiều thuận\nNếu $F=0$ và $G=0$ thì $G+kF=0+k\\cdot0=0$.\nVậy cặp nghiệm đó thỏa hệ mới $F=0,G+kF=0$.\nBước 3: Chứng minh chiều ngược\nNếu $F=0$ và $G+kF=0$, lấy phương trình thứ hai trừ $k$ lần phương trình thứ nhất, được $G=0$.\nKhông có phép chia cho $k$, nên lập luận đúng cả khi $k=0$.\nBước 4: Minh họa vì sao không thay cả hai phương trình\nLấy $F=x-1$, $G=y-2$. Hệ gốc buộc $x=1,y=2$.\nNếu thay cả hai bằng $F+G=0$, chỉ còn điều kiện $x+y=3$.\nCặp $(0;3)$ thỏa điều kiện mới nhưng không thỏa $x=1$ và $y=2$; đây là nghiệm bị thêm.\nBước 5: Kết luận\nPhép cộng một bội của phương trình thứ nhất vào phương trình thứ hai bảo toàn nghiệm khi vẫn giữ phương trình thứ nhất. Gộp cả hệ thành một điều kiện có thể làm mất thông tin.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-hsg-05",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai cặp nghiệm không thể khác nhau",
          "prompt": "Hệ $\\begin{cases}ax+by=c\\\\dx+ey=f\\end{cases}$ có ít nhất một nghiệm và $ae-bd\\ne0$. Giả sử $(x_1;y_1)$ và $(x_2;y_2)$ đều là nghiệm. Hãy chứng minh hai cặp này trùng nhau bằng cách lấy hiệu, không dùng công thức nghiệm của hệ.",
          "svg": "",
          "solution": "Bước 1: Đặt hiệu của hai nghiệm\nGiả sử $(x_1;y_1)$ và $(x_2;y_2)$ đều là nghiệm. Đặt $u=x_1-x_2$, $v=y_1-y_2$.\nCần chứng minh $u=v=0$.\nBước 2: Lấy hiệu các phương trình tương ứng\nTừ $ax_1+by_1=c$ và $ax_2+by_2=c$, trừ vế theo vế được $au+bv=0$.\nTương tự, phương trình thứ hai cho $du+ev=0$.\nBước 3: Khử v để tìm u\nNhân phương trình đầu với $e$, phương trình sau với $b$, rồi trừ: $(ae-bd)u=0$.\nVì $ae-bd\\ne0$, chia được cho hệ số này, nên $u=0$.\nBước 4: Khử u để tìm v\nNhân phương trình sau với $a$, phương trình đầu với $d$, rồi trừ: $(ae-bd)v=0$.\nCũng do hệ số khác $0$, có $v=0$. Cách làm không đòi riêng $a,b,d,e$ phải khác $0$.\nBước 5: Kết luận\n$x_1=x_2$ và $y_1=y_2$, nên hai cặp trùng nhau. Hệ có nhiều nhất một nghiệm; kết hợp giả thiết đã có ít nhất một nghiệm, suy ra hệ có nghiệm duy nhất.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-hsg-06",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tính biểu thức không cần giải từng ẩn",
          "prompt": "Biết $(x;y)$ là nghiệm của $\\begin{cases}2x+3y=7\\\\5x-y=9\\end{cases}$. Không giải riêng $x,y$, tính $9x+5y$.",
          "svg": "",
          "correctAnswer": "23",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nhìn vào biểu thức cần tính\nTa cần $9x+5y$, không cần riêng từng ẩn.\nHãy ghép hai vế trái $2x+3y$ và $5x-y$ sao cho hệ số đúng $9,5$.\nBước 2: Chọn phép ghép\nHai lần phương trình đầu cho $4x+6y=14$.\nCộng với phương trình thứ hai $5x-y=9$ sẽ tạo hệ số $4+5=9$ của $x$ và $6-1=5$ của $y$.\nBước 3: Cộng các vế tương ứng\n$(4x+6y)+(5x-y)=14+9$.\nDo đó $9x+5y=23$.\nBước 4: Giải thích tính hợp lệ\nVì $(x;y)$ thỏa cả hai phương trình, mỗi đẳng thức dùng trong phép cộng đều đúng tại cặp đó.\nThao tác chỉ cộng các đẳng thức, không chia cho biểu thức chứa ẩn, nên không sinh điều kiện phụ.\nBước 5: Kết luận\nGiá trị cần tìm là $23$. Đây là cách tính trực tiếp một tổ hợp của hai ẩn.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-hsg-07",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai lịch vận hành của hai máy",
          "prompt": "Hai máy có năng suất không đổi, công việc chia được và sản lượng cộng được khi làm chung. Cùng chạy thì chúng hoàn thành một công việc trong $6$ giờ. Với công việc cùng quy mô, máy I chạy $3$ giờ và máy II chạy $2$ giờ tạo được $13/30$ công việc. Lập hệ để tìm thời gian máy I làm một mình xong toàn bộ, đơn vị giờ.",
          "svg": "",
          "correctAnswer": "10",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt năng suất thay vì thời gian\nGọi $u,v>0$ là phần công việc máy I và II làm được trong một giờ.\nVì sản lượng cộng được, năng suất chung là $u+v$.\nBước 2: Lập hệ\nCùng làm xong trong $6$ giờ cho $6(u+v)=1$, tức $u+v=1/6$.\nLần chạy còn lại cho $3u+2v=13/30$.\nBước 3: Giải bằng khử ẩn\nNhân phương trình đầu với $2$: $2u+2v=1/3$.\nTrừ khỏi phương trình sau: $u=13/30-1/3=13/30-10/30=1/10$.\nSuy ra $v=1/6-1/10=1/15$.\nBước 4: Kiểm tra và đổi về thời gian\nHai năng suất đều dương; $1/10+1/15=1/6$ và $3/10+2/15=13/30$.\nMáy I làm $1/10$ công việc mỗi giờ, nên thời gian làm cả công việc là $1:(1/10)=10$ giờ.\nBước 5: Kết luận\nĐáp số là $10$ giờ. Không nhầm năng suất $1/10$ với thời gian cần nhập.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-he-hai-pt-hsg-08",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Miền nghiệm lọc tham số nguyên",
          "prompt": "Tìm tổng các số nguyên $m$ để nghiệm của $\\begin{cases}x+y=m\\\\2x-y=3\\end{cases}$ thỏa $0<x<3$ và $y>0$.",
          "svg": "",
          "correctAnswer": "14",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Giải hệ theo m\nCộng $x+y=m$ với $2x-y=3$, được $3x=m+3$, nên $x=(m+3)/3$.\nThay vào phương trình đầu: $y=m-(m+3)/3=(2m-3)/3$.\nBước 2: Kiểm tính duy nhất\nCác phép cộng và thế đảo ngược được; số chia là $3\\ne0$. Do đó với mỗi $m$, đây là nghiệm duy nhất của hệ.\nBước 3: Đổi các điều kiện thành điều kiện của m\n$0<x<3$ tương đương $0<m+3<9$, tức $-3<m<6$.\n$y>0$ tương đương $2m-3>0$, tức $m>3/2$.\nBước 4: Lấy giao và liệt kê\nGiao hai điều kiện là $3/2<m<6$.\nCác số nguyên trong khoảng là $2,3,4,5$. Mỗi số này thỏa cả hai điều kiện; hai đầu mút không được nhận.\nBước 5: Kết luận\nTổng các giá trị $m$ là $2+3+4+5=14$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-hsg-09",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Quan hệ cố định kể cả tại hệ phụ thuộc",
          "prompt": "Cho $m\\in\\mathbb R$ và hệ $\\begin{cases}(m+1)x+(m-1)y=2m^2+4\\\\(m-1)x+(m+1)y=2m^2-4\\end{cases}$. Chứng minh hệ luôn có nghiệm và mọi nghiệm đều thỏa $x-y=4$, không phụ thuộc $m$. Xét riêng $m=0$.",
          "svg": "",
          "solution": "Bước 1: Tìm quan hệ không phụ thuộc tham số\nLấy phương trình đầu trừ phương trình sau.\nHệ số của $x$ là $(m+1)-(m-1)=2$; hệ số của $y$ là $-2$; vế phải là $8$.\nDo đó mọi nghiệm thỏa $2x-2y=8$, tức $x-y=4$.\nBước 2: Tìm điều kiện còn lại\nCộng hai phương trình được $2m(x+y)=4m^2$.\nỞ đây chưa được chia cho $m$ vì $m$ có thể bằng $0$.\nBước 3: Xét m khác 0\nChia cho $2m\\ne0$ được $x+y=2m$.\nKết hợp $x-y=4$, có $x=m+2$, $y=m-2$.\nTừ phương trình tổng và hiệu có thể khôi phục hai phương trình gốc bằng cách cộng/trừ rồi chia $2$, nên cặp này thật sự là nghiệm duy nhất.\nBước 4: Xét m bằng 0\nHệ gốc trở thành $x-y=4$ và $-x+y=-4$, hai phương trình tương đương nhau.\nMọi cặp $(y+4;y)$ với $y$ thực đều là nghiệm. Do đó trường hợp này có vô số nghiệm, vẫn thỏa $x-y=4$.\nBước 5: Kết luận\nHệ luôn có nghiệm và mọi nghiệm đều thỏa quan hệ cố định $x-y=4$. Trường hợp $m=0$ phải xét riêng để không làm mất cả một họ nghiệm.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-he-hai-pt-hsg-10",
          "lop": 9,
          "chuDe": "he-hai-pt",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Điều kiện cần đủ của phép đổi nghịch đảo",
          "prompt": "Cho $p,q\\in\\mathbb R$. Xét $\\begin{cases}\\frac1x+\\frac2y=p\\\\\\frac3x-\\frac1y=q\\end{cases}$ với $xy\\ne0$. Chứng minh hệ có nghiệm khi và chỉ khi $(p+2q)(3p-q)\\ne0$, và khi đó nghiệm duy nhất là $x=7/(p+2q)$, $y=7/(3p-q)$.",
          "svg": "",
          "solution": "Bước 1: Đặt ẩn phụ và giữ điều kiện\nVì $xy\\ne0$, đặt $u=1/x$, $v=1/y$. Khi đó $u,v$ đều khác $0$.\nHệ trở thành $u+2v=p$, $3u-v=q$.\nBước 2: Giải hệ phụ\nLấy phương trình đầu cộng hai lần phương trình sau: $7u=p+2q$, nên $u=(p+2q)/7$.\nLấy ba lần phương trình đầu trừ phương trình sau: $7v=3p-q$, nên $v=(3p-q)/7$.\nHai công thức xác định duy nhất $u,v$ vì $7\\ne0$.\nBước 3: Chứng minh điều kiện cần\nNếu hệ gốc có nghiệm thì $u,v\\ne0$. Hai tử $p+2q$ và $3p-q$ phải đều khác $0$, tức tích của chúng khác $0$.\nNếu một tử bằng $0$, không thể tìm số thực khác $0$ có nghịch đảo bằng $0$.\nBước 4: Chứng minh điều kiện đủ và tìm nghiệm\nNếu tích khác $0$, lấy $x=7/(p+2q)$ và $y=7/(3p-q)$; hai giá trị xác định và khác $0$.\nKhi đó $1/x=u$, $1/y=v$ như ở bước 2, nên thay vào hệ gốc cho đúng $p,q$.\nBước 5: Kết luận tính duy nhất\nHệ có nghiệm đúng khi $(p+2q)(3p-q)\\ne0$, và nghiệm là hai công thức trên.\nHệ phụ có nghiệm duy nhất; mỗi $u,v$ khác $0$ chỉ cho một cặp nghịch đảo $x,y$, nên nghiệm gốc cũng duy nhất.",
          "manThi": "phuongTrinh"
        }
      ]
    },
    'pt-bac-hai': {
      "kha": [
        {
          "id": "l9-pt-bac-hai-kha-01",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hệ số của hạng tử bậc hai",
          "prompt": "Phương trình nào là phương trình bậc hai một ẩn?",
          "svg": "",
          "options": [
            "A. $3x-7=0$.",
            "B. $0x^2+2x-1=0$.",
            "C. $-2x^2+3=0$.",
            "D. $x^3-x+1=0$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhắc định nghĩa\nPhương trình bậc hai một ẩn có dạng $ax^2+bx+c=0$, với $a\\ne0$.\nCác hệ số $b,c$ được phép bằng $0$.\nBước 2: Xét phương án C\n$-2x^2+3=0$ có $a=-2$, $b=0$, $c=3$.\nVì $a\\ne0$, đây là phương trình bậc hai.\nBước 3: Xét hai phương án bậc nhất\nA chỉ chứa $x$ bậc nhất.\nỞ B, hạng tử $0x^2$ bằng $0$, nên phương trình cũng chỉ còn bậc nhất.\nBước 4: Xét phương án còn lại\nD có hạng tử $x^3$ với hệ số khác $0$, nên bậc cao nhất là $3$.\nKhông thể coi đó là phương trình bậc hai chỉ vì cũng có ẩn $x$.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l9-pt-bac-hai-kha-02",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bình phương bằng một số dương",
          "prompt": "Tập nghiệm thực của $3x^2-18=0$ là gì?",
          "svg": "",
          "options": [
            "A. $S=\\{\\sqrt6\\}$.",
            "B. $S=\\{-6;6\\}$.",
            "C. $S=\\varnothing$.",
            "D. $S=\\{-\\sqrt6;\\sqrt6\\}$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đưa về phương trình bình phương\nTừ $3x^2-18=0$, cộng $18$ vào hai vế được $3x^2=18$.\nBước 2: Chia hệ số\nChia hai vế cho $3\\ne0$, được $x^2=6$.\nBước 3: Tìm đủ hai nghiệm thực\nVì $6>0$, có $x=\\sqrt6$ hoặc $x=-\\sqrt6$.\nHai số đối nhau này đều có bình phương bằng $6$.\nBước 4: Thử lại và phân biệt với căn số học\nVới mỗi giá trị, $3x^2-18=3\\cdot6-18=0$.\nKí hiệu $\\sqrt6$ chỉ số không âm; phương trình $x^2=6$ còn có cả nghiệm âm nên không được bỏ sót.\nBước 5: Kết luận\nTập nghiệm là $\\{-\\sqrt6;\\sqrt6\\}$. Chọn D."
        },
        {
          "id": "l9-pt-bac-hai-kha-03",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nghiệm không không được bỏ",
          "prompt": "Giải phương trình $4x^2+6x=0$ trong tập số thực.",
          "svg": "",
          "options": [
            "A. $S=\\{-\\frac32\\}$.",
            "B. $S=\\{0;-\\frac32\\}$.",
            "C. $S=\\{0;\\frac32\\}$.",
            "D. $S=\\{0;-\\frac23\\}$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhận ra nhân tử chung\nHai hạng tử $4x^2$ và $6x$ đều có nhân tử $2x$.\nVì thế $4x^2+6x=2x(2x+3)$.\nBước 2: Chuyển sang phương trình tích\nPhương trình trở thành $2x(2x+3)=0$.\nTích bằng $0$ nên $2x=0$ hoặc $2x+3=0$.\nBước 3: Giải hai nhánh\nNhánh đầu cho $x=0$.\nNhánh sau cho $2x=-3$, tức $x=-3/2$.\nBước 4: Thử lại và tránh mất nghiệm\n$x=0$ cho vế trái bằng $0$; $x=-3/2$ cho $4\\cdot9/4+6(-3/2)=9-9=0$.\nKhông chia ngay phương trình cho $x$ vì chưa biết $x\\ne0$; làm vậy sẽ mất nghiệm $0$.\nBước 5: Kết luận\nTập nghiệm là $\\{0;-3/2\\}$. Chọn B."
        }
      ],
      "nangCao": [
        {
          "id": "l9-pt-bac-hai-nangCao-01",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Biệt thức không là số chính phương",
          "prompt": "Hai nghiệm của $2x^2-4x-3=0$ là cặp nào?",
          "svg": "",
          "options": [
            "A. $\\frac{2+\\sqrt{10}}2$ và $\\frac{2-\\sqrt{10}}2$.",
            "B. $2+\\sqrt{10}$ và $2-\\sqrt{10}$.",
            "C. $\\frac{-2+\\sqrt{10}}2$ và $\\frac{-2-\\sqrt{10}}2$.",
            "D. $\\frac{2+\\sqrt7}2$ và $\\frac{2-\\sqrt7}2$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định hệ số\n$a=2$, $b=-4$, $c=-3$. Dấu của $b,c$ phải đi cùng hệ số khi thay công thức.\nBước 2: Tính biệt thức\n$\\Delta=(-4)^2-4\\cdot2\\cdot(-3)=16+24=40>0$ nên có hai nghiệm thực phân biệt.\nBước 3: Dùng công thức nghiệm\n$x=[4\\pm\\sqrt{40}]/4$. Vì $\\sqrt{40}=2\\sqrt{10}$, rút gọn được $x=(2\\pm\\sqrt{10})/2$.\nBước 4: Kiểm bằng tổng, tích\nTổng hai số là $2=-b/a$, tích là $(4-10)/4=-3/2=c/a$.\nMẫu công thức là $2a=4$, không phải $2$ trước khi rút gọn.\nBước 5: Kết luận\nChọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-02",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giữ dấu của mẫu trong công thức nghiệm",
          "prompt": "Giải $-3x^2+5x+2=0$. Cặp nghiệm nào đúng?",
          "svg": "",
          "options": [
            "A. $-2$ và $\\frac13$.",
            "B. $2$ và $-\\frac13$.",
            "C. $2$ và $\\frac13$.",
            "D. $4$ và $-\\frac23$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Ghi hệ số và mẫu công thức\n$a=-3$, $b=5$, $c=2$; do đó $2a=-6$.\nBước 2: Kiểm nghiệm thực\n$\\Delta=25-4(-3)2=49>0$, căn biệt thức bằng $7$.\nBước 3: Tính từng nghiệm\n$x_1=(-5+7)/(-6)=-1/3$.\n$x_2=(-5-7)/(-6)=2$. Phải giữ dấu âm của mẫu cho cả hai phép chia.\nBước 4: Thử trực tiếp\nTại $2$, vế trái bằng $-12+10+2=0$.\nTại $-1/3$, vế trái bằng $-1/3-5/3+2=0$.\nBước 5: Kết luận\nChọn B.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-03",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ba phương trình chỉ khác hằng số",
          "prompt": "Xét lần lượt $(I):x^2-6x+9=0$, $(II):x^2-6x+10=0$, $(III):x^2-6x+8=0$. Số nghiệm thực phân biệt của ba phương trình, theo thứ tự I, II, III, là bộ nào?",
          "svg": "",
          "options": [
            "A. $(2;0;1)$.",
            "B. $(1;2;0)$.",
            "C. $(1;0;2)$.",
            "D. $(2;0;2)$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chọn tiêu chuẩn đếm nghiệm\nVới phương trình bậc hai, biệt thức âm cho $0$ nghiệm thực, bằng $0$ cho $1$ nghiệm phân biệt, dương cho $2$ nghiệm phân biệt.\nBước 2: Xét I\n$\\Delta_I=36-36=0$. Phương trình là $(x-3)^2=0$, nên chỉ có giá trị nghiệm $3$.\nBước 3: Xét II\n$\\Delta_{II}=36-40=-4<0$, nên không có nghiệm thực.\nBước 4: Xét III\n$\\Delta_{III}=36-32=4>0$, cho hai nghiệm $2,4$.\nNghiệm kép ở I không được đếm thành hai giá trị vì đề hỏi nghiệm phân biệt.\nBước 5: Kết luận\nBộ số lượng là $(1;0;2)$, chọn C.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-04",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhẩm hai nghiệm hữu tỉ",
          "prompt": "Không cần dùng công thức nghiệm, hãy chọn cặp nghiệm của $6x^2-x-2=0$ bằng tổng và tích.",
          "svg": "",
          "options": [
            "A. $2$ và $-\\frac16$.",
            "B. $\\frac12$ và $-\\frac23$.",
            "C. $\\frac13$ và $-\\frac12$.",
            "D. $\\frac23$ và $-\\frac12$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tìm tổng và tích cần có\nPhương trình hệ số đầu $6$ yêu cầu tổng nghiệm $1/6$ và tích $-2/6=-1/3$ theo Viète.\nBước 2: Kiểm cặp ở phương án D\n$2/3-1/2=4/6-3/6=1/6$.\n$(2/3)(-1/2)=-1/3$. Cặp này khớp cả hai yêu cầu.\nBước 3: Chứng minh hai số thật sự là nghiệm\nKhai triển $6(x-2/3)(x+1/2)=6x^2-x-2$.\nVì vậy mỗi số làm một nhân tử bằng $0$, nên thỏa phương trình gốc.\nBước 4: Loại cách kiểm thiếu\nChỉ khớp tích chưa đủ: cặp $1/2,-2/3$ có cùng tích nhưng tổng $-1/6$, sai dấu.\nBước 5: Kết luận\nChọn D.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-05",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tổng bình phương không cần tìm từng nghiệm",
          "prompt": "Gọi $x_1,x_2$ là hai nghiệm thực của $x^2-3x-1=0$. Không giải từng nghiệm, tính $x_1^2+x_2^2$.",
          "svg": "",
          "options": [
            "A. $7$.",
            "B. $11$.",
            "C. $9$.",
            "D. $13$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Kiểm hai nghiệm thực\n$\\Delta=(-3)^2-4\\cdot1\\cdot(-1)=13>0$.\nBước 2: Dùng Viète\nĐặt $S=x_1+x_2=3$ và $P=x_1x_2=-1$.\nBước 3: Biến đổi tổng bình phương\nTừ $(x_1+x_2)^2=x_1^2+x_2^2+2x_1x_2$, suy ra $x_1^2+x_2^2=S^2-2P$.\nBước 4: Thay số đúng dấu\n$S^2-2P=9-2(-1)=11$.\nKhông thay tổng bình phương bằng $S^2$, vì còn hạng tử $2P$.\nBước 5: Kết luận\nChọn B.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-06",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tổng và tích có bảo đảm hai số tồn tại?",
          "prompt": "Cần tìm hai số thực có tổng bằng $6$ và tích bằng $10$. Kết luận nào đúng?",
          "svg": "",
          "options": [
            "A. Không tồn tại hai số thực như vậy.",
            "B. Hai số là $3$ và $3$.",
            "C. Hai số là $2$ và $4$.",
            "D. Hai số là $3+\\sqrt{10}$ và $3-\\sqrt{10}$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đưa bài toán về phương trình\nNếu hai số thực có tổng $6$, tích $10$, chúng phải là nghiệm của $t^2-6t+10=0$ theo Viète đảo.\nBước 2: Kiểm tồn tại nghiệm\n$\\Delta=36-40=-4<0$, nên phương trình không có nghiệm thực.\nBước 3: Giải thích mâu thuẫn bằng bình phương\nNếu gọi hai số là $u,v$, có $(u-v)^2=(u+v)^2-4uv=36-40=-4$.\nBình phương một số thực không âm, nên dữ kiện không thể đồng thời đúng.\nBước 4: Đối chiếu các cặp dễ nhầm\n$3,3$ có tích $9$; $2,4$ có tích $8$. Tổng đúng nhưng tích đều sai.\nBước 5: Kết luận\nKhông có hai số thực như yêu cầu, chọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-07",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai nghiệm phải vừa thực vừa dương",
          "prompt": "Tìm điều kiện cần và đủ của số thực $m$ để $x^2-6x+m=0$ có hai nghiệm dương phân biệt.",
          "svg": "",
          "options": [
            "A. $m>0$.",
            "B. $0\\le m<9$.",
            "C. $0<m<9$.",
            "D. $0<m\\le9$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Điều kiện hai nghiệm phân biệt\n$\\Delta=36-4m>0$ tương đương $m<9$. Đây là điều kiện cần trước khi xét dấu nghiệm.\nBước 2: Dùng tổng và tích\nKhi có nghiệm thực, tổng bằng $6>0$, tích bằng $m$.\nBước 3: Xác định dấu\nHai nghiệm dương phải có tích $m>0$.\nNgược lại, nếu tích dương thì hai nghiệm cùng dấu; tổng dương loại khả năng cùng âm, nên cả hai dương.\nBước 4: Kết hợp và kiểm đầu mút\nCần và đủ $0<m<9$.\n$m=0$ cho một nghiệm $0$, không dương; $m=9$ cho nghiệm kép $3$, không phân biệt.\nBước 5: Kết luận\nChọn C. Điều kiện $m>0$ một mình chưa bảo đảm nghiệm thực tồn tại.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-08",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tổng lập phương hai nghiệm",
          "prompt": "Gọi $x_1,x_2$ là hai nghiệm của $x^2-2x-2=0$. Không giải từng nghiệm, tính $x_1^3+x_2^3$.",
          "svg": "",
          "options": [
            "A. $8$.",
            "B. $20$.",
            "C. $14$.",
            "D. $32$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Kiểm nghiệm\n$\\Delta=4+8=12>0$, nên hai nghiệm thực tồn tại.\nBước 2: Ghi Viète\n$S=x_1+x_2=2$, $P=x_1x_2=-2$.\nBước 3: Chọn hằng đẳng thức\nKhai triển $S^3=x_1^3+x_2^3+3x_1x_2(x_1+x_2)$.\nVì thế tổng lập phương bằng $S^3-3PS$.\nBước 4: Tính giá trị\n$2^3-3(-2)2=8+12=20$.\nHạng tử cần trừ có cả tổng lẫn tích, không chỉ là $3P$.\nBước 5: Kết luận\nChọn B.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-09",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nghịch đảo của nghiệm đã dịch chuyển",
          "prompt": "Gọi $x_1,x_2$ là hai nghiệm của $x^2-5x+5=0$. Sau khi kiểm điều kiện mẫu, tính $A=\\frac1{x_1-1}+\\frac1{x_2-1}$.",
          "svg": "",
          "options": [
            "A. $\\frac35$.",
            "B. $1$.",
            "C. $-3$.",
            "D. $3$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Kiểm nghiệm thực và ghi Viète\n$\\Delta=25-20=5>0$. Đặt $S=x_1+x_2=5$, $P=x_1x_2=5$.\nBước 2: Kiểm từng mẫu qua tích\n$(x_1-1)(x_2-1)=P-S+1=1\\ne0$.\nTích khác $0$ chứng tỏ cả hai mẫu đều khác $0$.\nBước 3: Quy đồng\n$A=[(x_2-1)+(x_1-1)]/[(x_1-1)(x_2-1)]=(S-2)/(P-S+1)$.\nBước 4: Thay số\n$A=(5-2)/1=3$. Tổng hai nghịch đảo không bằng nghịch đảo của tổng hai mẫu.\nBước 5: Kết luận\nChọn D.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-10",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Lập phương trình cho hai nghiệm mới",
          "prompt": "Hai nghiệm của $x^2+3x-1=0$ là $x_1,x_2$. Phương trình bậc hai có hệ số của $t^2$ bằng $1$ và hai nghiệm $t_1=x_1+2$, $t_2=x_2+2$ là phương trình nào?",
          "svg": "",
          "options": [
            "A. $t^2-t-3=0$.",
            "B. $t^2+t-3=0$.",
            "C. $t^2-t+9=0$.",
            "D. $t^2+7t+9=0$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xét nghiệm gốc\n$\\Delta=9+4=13>0$. Viète cho $S=-3$, $P=-1$.\nBước 2: Tính tổng nghiệm mới\n$t_1+t_2=(x_1+2)+(x_2+2)=S+4=1$.\nBước 3: Tính tích nghiệm mới\n$t_1t_2=x_1x_2+2(x_1+x_2)+4=P+2S+4=-3$.\nBước 4: Lập phương trình và kiểm\nPhương trình hệ số đầu $1$ là $t^2-(t_1+t_2)t+t_1t_2=0$, tức $t^2-t-3=0$.\nThế $x=t-2$ vào đề gốc cũng được $(t-2)^2+3(t-2)-1=t^2-t-3$.\nBước 5: Kết luận\nChọn A.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-11",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tham số qua Viète chưa phải là đáp án cuối",
          "prompt": "Tìm tất cả số thực $m$ để $x^2-2(m+1)x+m^2+4=0$ có hai nghiệm thực $x_1,x_2$ thỏa $x_1+x_2+x_1x_2=14$.",
          "svg": "",
          "options": [
            "A. $m=-4$.",
            "B. $m\\in\\{-4;2\\}$.",
            "C. $m=2$.",
            "D. Không có giá trị $m$ nào."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Ghi điều kiện nghiệm thực\n$\\Delta=4(m+1)^2-4(m^2+4)=4(2m-3)$.\nCần $\\Delta\\ge0$, tức $m\\ge3/2$.\nBước 2: Dùng Viète trên miền hợp lệ\n$S=2m+2$, $P=m^2+4$. Yêu cầu $S+P=14$ cho $m^2+2m-8=0$.\nBước 3: Tìm ứng viên\n$(m+4)(m-2)=0$ cho $m=-4$ hoặc $m=2$.\nBước 4: Loại và kiểm\n$-4<3/2$ nên bị loại vì không có nghiệm thực.\nVới $m=2$, phương trình là $x^2-6x+8=0$, có nghiệm $2,4$; $2+4+2\\cdot4=14$.\nBước 5: Kết luận\nChọn C. Nhận cả hai ứng viên là lỗi quên điều kiện biệt thức.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-nangCao-12",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai ứng viên bị loại vì hai lí do khác nhau",
          "prompt": "Tìm tất cả số thực $m$ để $x^2-(m-1)x+2m-5=0$ có hai nghiệm thực $x_1,x_2$ (có thể trùng), với $x_1\\ne1$, $x_2\\ne1$, và $\\frac1{x_1-1}+\\frac1{x_2-1}=(m-4)^2$.",
          "svg": "",
          "options": [
            "A. $m=3$.",
            "B. Không có giá trị $m$ nào.",
            "C. $m=5$.",
            "D. $m\\in\\{3;5\\}$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Kiểm điều kiện tồn tại nghiệm\nCần $\\Delta=(m-1)^2-4(2m-5)=m^2-10m+21\\ge0$.\nKhi đó Viète cho $S=m-1$, $P=2m-5$.\nBước 2: Kiểm điều kiện mẫu\n$(x_1-1)(x_2-1)=P-S+1=m-3$, nên phải có $m\\ne3$.\nBước 3: Rút gọn điều kiện đề\nTổng hai nghịch đảo bằng $(S-2)/(P-S+1)=(m-3)/(m-3)=1$ trên miền hợp lệ.\nDo đó $(m-4)^2=1$, cho ứng viên $m=3,5$.\nBước 4: Kiểm cả hai loại điều kiện\n$m=3$ cho $(x-1)^2=0$, nên mẫu trong biểu thức bằng $0$; loại.\n$m=5$ cho $\\Delta=-4<0$, không có nghiệm thực; cũng loại.\nBước 5: Kết luận\nKhông có tham số thỏa mãn, chọn B. Rút gọn thành hằng số không xóa các điều kiện ban đầu.",
          "manThi": "phuongTrinh"
        }
      ],
      "hsg": [
        {
          "id": "l9-pt-bac-hai-hsg-01",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "dien",
          "title": "Chọn nghiệm dương trước khi làm tròn",
          "prompt": "Dùng máy tính cầm tay tìm nghiệm dương của $x^2-2x-7=0$, rồi làm tròn đến hàng phần trăm. Chỉ nhập số đã làm tròn.",
          "svg": "",
          "correctAnswer": "3.83",
          "dapAnChapNhan": [
            "3,83"
          ],
          "solution": "Bước 1: Xác định hệ số\nPhương trình có $a=1$, $b=-2$, $c=-7$. Vì $a\\ne0$, có thể dùng công thức nghiệm bậc hai.\nBước 2: Kiểm tra sự tồn tại nghiệm\n$\\Delta=b^2-4ac=(-2)^2-4\\cdot1\\cdot(-7)=4+28=32>0$.\nVậy phương trình có hai nghiệm thực phân biệt.\nBước 3: Chọn nghiệm dương\n$x=(2\\pm\\sqrt{32})/2=1\\pm2\\sqrt2$.\nVì $2\\sqrt2>1$, nghiệm $1-2\\sqrt2$ âm; chỉ $1+2\\sqrt2$ dương.\nBước 4: Dùng máy tính và làm tròn\nNhập $1+2\\sqrt2$ vào máy tính, được khoảng $3{,}828427$.\nHàng phần trăm là chữ số $2$, chữ số ngay sau là $8\\ge5$, nên tăng hàng phần trăm thêm $1$.\nBước 5: Kết luận\nNhập $3{,}83$. Đây là giá trị gần đúng theo yêu cầu, không phải nghiệm chính xác để thay lại và đòi vế trái bằng đúng $0$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-hsg-02",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Một thương của các biểu thức đối xứng",
          "prompt": "Gọi $x_1,x_2$ là hai nghiệm của $x^2-4x+2=0$. Không giải từng nghiệm, tính $T=\\frac{\\frac{x_1^3}{x_2}+\\frac{x_2^3}{x_1}}{\\frac{x_1}{x_2}+\\frac{x_2}{x_1}+2}$. Trước khi tính, kiểm tra các mẫu và số chia khác $0$.",
          "svg": "",
          "correctAnswer": "8.5",
          "dapAnChapNhan": [
            "8,5",
            "17/2"
          ],
          "solution": "Bước 1: Kiểm tra nghiệm và đặt tổng, tích\n$\\Delta=(-4)^2-4\\cdot1\\cdot2=8>0$, nên hai nghiệm thực tồn tại.\nTheo Viète, đặt $S=x_1+x_2=4$, $P=x_1x_2=2$.\nBước 2: Kiểm tra toàn bộ phép chia\nVì $P\\ne0$, cả $x_1,x_2$ đều khác $0$.\nSố chia của thương lớn là $(x_1^2+x_2^2+2x_1x_2)/P=S^2/P=16/2=8\\ne0$.\nVậy biểu thức đề cho xác định.\nBước 3: Rút gọn biểu thức cần tính\nTử của thương lớn bằng $(x_1^4+x_2^4)/P$ sau khi quy đồng.\nChia cho $S^2/P$ được $T=(x_1^4+x_2^4)/S^2$; bước này hợp lệ vì $P,S^2$ khác $0$.\nBước 4: Tính tổng lũy thừa bằng Viète\n$x_1^2+x_2^2=S^2-2P=16-4=12$.\nBình phương đẳng thức này: $(x_1^2+x_2^2)^2=x_1^4+x_2^4+2P^2$.\nDo đó $x_1^4+x_2^4=12^2-2\\cdot2^2=144-8=136$.\nBước 5: Kết luận\n$T=136/16=17/2=8{,}5$. Không cần giải riêng từng nghiệm và không bỏ qua điều kiện của số chia ngoài cùng.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-hsg-03",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Diện tích trồng cây bên trong lối đi",
          "prompt": "Một khu vườn hình chữ nhật có chiều dài hơn hai lần chiều rộng $3$ m. Người ta làm lối đi rộng $1$ m ở phía trong dọc cả bốn cạnh. Phần trồng cây còn lại là hình chữ nhật diện tích $75$ m². Hãy lập phương trình để tính chu vi ngoài của khu vườn, đơn vị m.",
          "svg": "",
          "correctAnswer": "48",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn theo kích thước ngoài\nGọi chiều rộng ngoài là $w$ m, chiều dài ngoài là $2w+3$ m.\nLối đi ở cả hai phía của mỗi kích thước nên phần trồng cây có chiều rộng $w-2$ và chiều dài $2w+1$.\nCần $w>2$ để phần trồng cây có chiều rộng dương.\nBước 2: Lập phương trình diện tích\nDiện tích trồng cây bằng $75$ nên $(w-2)(2w+1)=75$.\nKhai triển được $2w^2-3w-2=75$, tức $2w^2-3w-77=0$.\nBước 3: Giải phương trình\n$\\Delta=(-3)^2-4\\cdot2\\cdot(-77)=625=25^2$.\nVì vậy $w=(3\\pm25)/4$, cho $w=7$ hoặc $w=-11/2$.\nBước 4: Kiểm điều kiện và diện tích\nLoại $-11/2$ vì không thỏa $w>2$; nhận $w=7$.\nChiều dài ngoài là $17$ m. Phần trồng cây rộng $5$ m, dài $15$ m, có diện tích $5\\cdot15=75$ m².\nBước 5: Tính chu vi cần tìm\nChu vi ngoài bằng $2(7+17)=48$ m. Không dùng kích thước $5,15$ vì đề hỏi chu vi khu vườn, không hỏi chu vi phần trồng cây.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-pt-bac-hai-hsg-04",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Từ công thức nghiệm đến định lí Viète",
          "prompt": "Cho $a,b,c\\in\\mathbb R$, $a\\ne0$ và $\\Delta=b^2-4ac\\ge0$. Gọi $x_1,x_2$ là hai nghiệm của $ax^2+bx+c=0$, tính cả hai lần khi là nghiệm kép. Xuất phát từ công thức nghiệm, chứng minh $a(x-x_1)(x-x_2)=ax^2+bx+c$, rồi khai triển và đối chiếu hệ số để suy ra hệ thức Viète.",
          "svg": "",
          "solution": "Bước 1: Viết công thức nghiệm và điều kiện\nVì $a\\ne0$ và $\\Delta\\ge0$, hai biểu thức $x_1=(-b+\\sqrt\\Delta)/(2a)$, $x_2=(-b-\\sqrt\\Delta)/(2a)$ xác định.\nNếu $\\Delta=0$, ta vẫn ghi nghiệm kép hai lần theo yêu cầu.\nBước 2: Đưa tích về hiệu hai bình phương\n$x-x_1=x+b/(2a)-\\sqrt\\Delta/(2a)$ và $x-x_2=x+b/(2a)+\\sqrt\\Delta/(2a)$.\nDùng $(U-V)(U+V)=U^2-V^2$, có $a(x-x_1)(x-x_2)=a[(x+b/(2a))^2-\\Delta/(4a^2)]$.\nBước 3: Khai triển và dùng định nghĩa biệt thức\nVế phải bằng $ax^2+bx+(b^2-\\Delta)/(4a)$.\nDo $\\Delta=b^2-4ac$, có $b^2-\\Delta=4ac$; hạng tử cuối bằng $c$.\nVậy $a(x-x_1)(x-x_2)=ax^2+bx+c$ với mọi $x$.\nBước 4: Đối chiếu hệ số\nKhai triển tích theo cách khác được $ax^2-a(x_1+x_2)x+ax_1x_2$.\nHai đa thức đồng nhất có cùng hệ số, nên $-a(x_1+x_2)=b$ và $ax_1x_2=c$.\nBước 5: Kết luận\nChia cho $a\\ne0$, thu được $x_1+x_2=-b/a$ và $x_1x_2=c/a$.\nChứng minh không chia cho $\\sqrt\\Delta$ hay $x_1-x_2$, nên vẫn đúng khi nghiệm kép.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-hsg-05",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Tích âm phải đi cùng sự tồn tại nghiệm",
          "prompt": "Cho $a,b,c\\in\\mathbb R$ và $a\\ne0$. Chứng minh $ax^2+bx+c=0$ có hai nghiệm thực trái dấu khi và chỉ khi $ac<0$. Ở chiều từ hệ số đến nghiệm, phải chứng minh sự tồn tại hai nghiệm trước khi dùng Viète.",
          "svg": "",
          "solution": "Bước 1: Xác định hai chiều cần chứng minh\nTa cần chứng minh từ $ac<0$ có hai nghiệm thực trái dấu, và ngược lại từ hai nghiệm trái dấu có $ac<0$.\nKhông được dùng Viète trước khi biết các nghiệm thực tồn tại.\nBước 2: Chứng minh tồn tại nghiệm khi ac âm\nGiả sử $ac<0$. Khi đó $-4ac>0$, nên $\\Delta=b^2-4ac>b^2\\ge0$.\nVì $\\Delta>0$, phương trình có hai nghiệm thực phân biệt.\nBước 3: Xét dấu các nghiệm\nViète cho $x_1x_2=c/a=ac/a^2$.\nTử âm, mẫu $a^2>0$, nên tích âm. Hai số thực có tích âm phải khác $0$ và trái dấu.\nBước 4: Chứng minh chiều ngược\nGiả sử phương trình có hai nghiệm thực trái dấu. Khi đó $x_1x_2<0$.\nTheo Viète, $c/a<0$. Nhân với $a^2>0$ được $ac<0$.\nBước 5: Kết luận\nĐiều kiện cần và đủ là $ac<0$. Việc kiểm $\\Delta$ ở chiều đầu bảo đảm lập luận không dựa trên những nghiệm thực chưa chắc tồn tại.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-hsg-06",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Không cần biết nghiệm nào lớn hơn",
          "prompt": "Gọi $x_1,x_2$ là hai nghiệm của $x^2+5x+1=0$. Không giải từng nghiệm, tính $(x_1-x_2)^2$.",
          "svg": "",
          "correctAnswer": "21",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Kiểm tra hai nghiệm thực\n$\\Delta=5^2-4\\cdot1\\cdot1=21>0$, nên phương trình có hai nghiệm thực phân biệt.\nBước 2: Áp dụng Viète\nĐặt $S=x_1+x_2=-5$, $P=x_1x_2=1$.\nBước 3: Biến đổi biểu thức cần tính\n$(x_1-x_2)^2=x_1^2+x_2^2-2x_1x_2$.\nMà $x_1^2+x_2^2=S^2-2P$, nên $(x_1-x_2)^2=S^2-4P$.\nBước 4: Thay số\nGiá trị cần tìm bằng $(-5)^2-4\\cdot1=25-4=21$.\nĐổi thứ tự hai nghiệm chỉ đổi dấu $x_1-x_2$, không đổi bình phương của hiệu.\nBước 5: Kết luận\nĐáp số là $21$; không cần tìm từng nghiệm.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-hsg-07",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Năng suất tăng sau hai ngày",
          "prompt": "Một tổ dự định làm $240$ sản phẩm với năng suất không đổi. Sau $2$ ngày làm đúng kế hoạch, tổ tăng năng suất thêm $15$ sản phẩm mỗi ngày và giữ mức mới đến khi xong. Tổ hoàn thành sớm hơn kế hoạch $2$ ngày. Giả sử sản phẩm đều đạt yêu cầu, không phải làm lại và không có ngày nghỉ. Lập phương trình rồi tìm năng suất dự định, đơn vị sản phẩm/ngày.",
          "svg": "",
          "correctAnswer": "30",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt ẩn và điều kiện thực tế\nGọi năng suất dự định là $x$ sản phẩm/ngày. Cần $x>0$.\nSau hai ngày vẫn còn việc để tăng năng suất, nên $240-2x>0$, tức $x<120$.\nBước 2: Lập phương trình thời gian\nThời gian dự định là $240/x$ ngày.\nThực tế làm hai ngày đầu rồi làm phần còn lại với năng suất $x+15$, nên mất $2+(240-2x)/(x+15)$ ngày.\nHoàn thành sớm $2$ ngày cho $2+(240-2x)/(x+15)=240/x-2$.\nBước 3: Khử mẫu và giải\nChuyển $-2$ sang trái: $4+(240-2x)/(x+15)=240/x$.\nNhân với $x(x+15)>0$, được $4x(x+15)+x(240-2x)=240(x+15)$.\nKhai triển rồi chuyển vế: $2x^2+60x-3600=0$, tức $x^2+30x-1800=0$.\n$\\Delta=8100=90^2$, nên $x=(-30\\pm90)/2$, cho $30$ hoặc $-60$.\nBước 4: Loại và thử nghiệm\nLoại $-60$; nhận $30$ vì $0<30<120$.\nDự định mất $8$ ngày. Hai ngày đầu làm $60$ sản phẩm, còn $180$; năng suất mới $45$ sản phẩm/ngày nên cần thêm $4$ ngày.\nThực tế $6$ ngày, sớm đúng $2$ ngày.\nBước 5: Kết luận\nNăng suất dự định là $30$ sản phẩm/ngày.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-pt-bac-hai-hsg-08",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tỉ lệ nghiệm phải đi cùng dấu",
          "prompt": "Tìm số thực $m$ để $x^2-3mx+2m+12=0$ có hai nghiệm dương, trong đó nghiệm lớn gấp đôi nghiệm nhỏ.",
          "svg": "",
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Biểu diễn hai nghiệm theo tỉ lệ\nGiả sử yêu cầu thỏa mãn. Gọi nghiệm nhỏ là $u>0$; nghiệm lớn là $2u$.\nVì $u>0$, hai nghiệm phân biệt.\nBước 2: Dùng tổng và tích nghiệm\nTheo Viète, $u+2u=3m$, nên $u=m>0$.\nĐồng thời $u\\cdot2u=2m+12$, tức $2u^2=2m+12$.\nBước 3: Tìm các tham số có thể\nThay $u=m$: $m^2=m+6$, hay $(m-3)(m+2)=0$.\nỨng viên là $m=3$ và $m=-2$. Điều kiện $m>0$ loại $-2$.\nBước 4: Kiểm tra chiều đủ\nVới $m=3$, phương trình là $x^2-9x+18=0$.\n$\\Delta=81-72=9>0$ và hai nghiệm bằng $(9\\pm3)/2$, tức $3$ và $6$.\nCả hai dương, và $6=2\\cdot3$, nên điều kiện được thỏa thật sự.\nBước 5: Kết luận\nGiá trị duy nhất là $m=3$. Bước thử lại bảo đảm các điều kiện từ Viète không chỉ là điều kiện cần.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-hsg-09",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hệ thức không phụ thuộc tham số",
          "prompt": "Cho $m\\in\\mathbb R$ và phương trình $x^2-(m+2)x+2m-1=0$. Chứng minh phương trình luôn có hai nghiệm thực phân biệt $x_1,x_2$ và $(x_1-2)(x_2-2)=-1$, không phụ thuộc $m$. Từ đó giải thích vì sao luôn có một nghiệm nhỏ hơn $2$ và một nghiệm lớn hơn $2$.",
          "svg": "",
          "solution": "Bước 1: Kiểm tra sự tồn tại nghiệm\n$\\Delta=(m+2)^2-4(2m-1)=m^2-4m+8=(m-2)^2+4$.\nVì bình phương không âm, $\\Delta\\ge4>0$ với mọi $m$; hai nghiệm thực phân biệt luôn tồn tại.\nBước 2: Viết hệ thức Viète\nĐặt $S=x_1+x_2=m+2$ và $P=x_1x_2=2m-1$.\nBước 3: Tính tích các hiệu\nKhai triển $(x_1-2)(x_2-2)=x_1x_2-2(x_1+x_2)+4=P-2S+4$.\nThay vào: $(2m-1)-2(m+2)+4=-1$.\nCác hạng tử chứa $m$ triệt tiêu, nên kết quả không phụ thuộc tham số.\nBước 4: Diễn giải dấu của tích\nTích $(x_1-2)(x_2-2)$ âm nên hai thừa số trái dấu và đều khác $0$.\nMột thừa số âm nghĩa là nghiệm tương ứng nhỏ hơn $2$; thừa số còn lại dương nghĩa là nghiệm kia lớn hơn $2$.\nBước 5: Kết luận\nHai nghiệm luôn nằm ở hai phía của $2$. Kết luận này không nói rằng chúng trái dấu so với $0$.",
          "manThi": "phuongTrinh"
        },
        {
          "id": "l9-pt-bac-hai-hsg-10",
          "lop": 9,
          "chuDe": "pt-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Đổi biến và số nghiệm được bảo toàn",
          "prompt": "Cho $a,b,c\\in\\mathbb R$, $a\\ne0$. Đặt $t=2x-1$. Chứng minh phép đổi biến này tạo một tương ứng hai chiều giữa các nghiệm thực của $ax^2+bx+c=0$ và của $at^2+(2a+2b)t+a+2b+4c=0$. Sau đó so sánh hai biệt thức để giải thích vì sao số nghiệm thực phân biệt được giữ nguyên, kể cả khi vô nghiệm hoặc có nghiệm kép.",
          "svg": "",
          "solution": "Bước 1: Xác định phép đổi biến hai chiều\n$t=2x-1$ cho phép tính ngược $x=(t+1)/2$ vì $2\\ne0$.\nMỗi số thực ở một phía ứng với đúng một số thực ở phía còn lại.\nBước 2: Thế và khử mẫu\nThay $x=(t+1)/2$ vào phương trình gốc: $a(t+1)^2/4+b(t+1)/2+c=0$.\nNhân với $4\\ne0$, được $a(t+1)^2+2b(t+1)+4c=0$.\nBước 3: Thu gọn và giải thích tương đương\nKhai triển cho $at^2+(2a+2b)t+a+2b+4c=0$.\nCác phép thế và nhân vừa dùng đều đảo ngược được, nên nghiệm không bị thêm hoặc mất.\nBước 4: So sánh biệt thức\n$\\Delta_t=(2a+2b)^2-4a(a+2b+4c)$.\nKhai triển: $\\Delta_t=4a^2+8ab+4b^2-4a^2-8ab-16ac=4(b^2-4ac)=4\\Delta_x$.\nVì $4>0$, hai biệt thức cùng dấu.\nBước 5: Kết luận theo từng trường hợp\nNếu biệt thức âm, cả hai vô nghiệm thực; bằng $0$, mỗi phương trình có một nghiệm kép; dương, mỗi phương trình có hai nghiệm phân biệt.\nNgoài ra, hai giá trị $x$ khác nhau cho hai giá trị $t=2x-1$ khác nhau, nên phép đổi biến bảo toàn tính phân biệt của nghiệm.",
          "manThi": "phuongTrinh"
        }
      ]
    },
    'ham-so-bac-hai': {
      "kha": [
        {
          "id": "l9-ham-so-bac-hai-kha-01",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đúng dạng hàm số đang học",
          "prompt": "Hàm số nào có đúng dạng $y=ax^2$ với $a\\ne0$?",
          "svg": "",
          "options": [
            "A. $y=2x+1$.",
            "B. $y=-\\frac32x^2$.",
            "C. $y=x^2+1$.",
            "D. $y=0x^2$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đọc đúng dạng được yêu cầu\nCần hàm số $y=ax^2$, chỉ có hạng tử $ax^2$ và hệ số $a\\ne0$.\nBước 2: Đối chiếu phương án B\n$y=-\\frac32x^2$ có $a=-3/2\\ne0$ và không có hạng tử nào thêm.\nVì vậy nó đúng dạng đề hỏi.\nBước 3: Phân biệt hai dạng khác\nA là $y=2x+1$, thuộc dạng bậc nhất.\nC là $y=x^2+1$, có thêm hằng số $1$ nên không đúng dạng riêng $y=ax^2$ đang hỏi.\nBước 4: Kiểm tra hệ số ở D\n$y=0x^2$ có $a=0$, trái điều kiện $a\\ne0$.\nDù cách viết có $x^2$, hàm này thực chất là $y=0$.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l9-ham-so-bac-hai-kha-02",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bình phương trước khi nhân hệ số",
          "prompt": "Với $y=-\\frac12x^2$, các giá trị $y$ tương ứng với $x=-2,0,3$, theo đúng thứ tự, là bộ nào?",
          "svg": "",
          "options": [
            "A. $(2;0;-\\frac92)$.",
            "B. $(-1;0;-\\frac32)$.",
            "C. $(-2;0;\\frac92)$.",
            "D. $(-2;0;-\\frac92)$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định thứ tự tính\nTrong $y=-\\frac12x^2$, cần bình phương $x$ trước rồi nhân với $-1/2$.\nTa tính lần lượt theo đúng thứ tự $x=-2,0,3$.\nBước 2: Thay x bằng âm 2\nCó $(-2)^2=4$, nên $y=-\\frac12\\cdot4=-2$.\nDấu âm trong hoành độ nằm trong phép bình phương, không làm $x^2$ âm.\nBước 3: Thay hai giá trị còn lại\nVới $x=0$, có $y=-\\frac12\\cdot0^2=0$.\nVới $x=3$, có $y=-\\frac12\\cdot9=-9/2$.\nBước 4: Kiểm tra dấu và thứ tự\nHệ số âm nhân với bình phương không âm nên mọi tung độ vừa tính đều không dương.\nGiữ thứ tự tương ứng, được $(-2;0;-9/2)$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l9-ham-so-bac-hai-kha-03",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ảnh đối xứng trên parabol",
          "prompt": "Điểm $A(-2;2)$ nằm trên $y=\\frac12x^2$. Điểm đối xứng với $A$ qua trục tung có tọa độ nào?",
          "svg": svgGrade9Plot({"id":"ham9-03","title":"Đối xứng qua trục tung","xmin":-4,"xmax":4,"ymin":-1,"ymax":5,"curves":[{"a":0.5,"label":"y = x²/2"}],"points":[{"x":-2,"y":2,"label":"A","dx":-10,"guides":true},{"x":2,"y":2,"label":"B","guides":true}]}),
          "options": [
            "A. $(2;2)$.",
            "B. $(-2;-2)$.",
            "C. $(2;-2)$.",
            "D. $(0;2)$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nêu quy tắc đối xứng qua trục tung\nĐối xứng qua trục tung giữ nguyên tung độ và đổi dấu hoành độ.\nHai điểm nằm cách trục tung bằng nhau về hai phía.\nBước 2: Đổi hoành độ của A\nĐiểm $A$ có hoành độ $-2$, nên điểm ảnh có hoành độ $2$.\nBước 3: Giữ tung độ\nTung độ của $A$ là $2$, nên tung độ điểm ảnh vẫn bằng $2$.\nVậy điểm ảnh có tọa độ $(2;2)$.\nBước 4: Kiểm tra với parabol\nThay $x=2$ vào $y=\\frac12x^2$, được $y=\\frac12\\cdot4=2$.\nĐiểm ảnh cũng thuộc parabol; không đổi dấu tung độ như phép đối xứng qua gốc tọa độ.\nBước 5: Kết luận\nĐiểm cần tìm là $(2;2)$. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l9-ham-so-bac-hai-nangCao-01",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Xác định hệ số từ điểm trên đồ thị",
          "prompt": "Đồ thị $y=ax^2$ đi qua $M(-3;-6)$. Giá trị của $a$ là bao nhiêu?",
          "svg": svgGrade9Plot({"id":"ham9-04","title":"Parabol đi qua M","xmin":-4,"xmax":4,"ymin":-8,"ymax":1,"curves":[{"a":-0.6666666666666666}],"points":[{"x":-3,"y":-6,"label":"M","dx":10,"dy":15,"guides":true}]}),
          "options": [
            "A. $a=2$.",
            "B. $a=\\frac23$.",
            "C. $a=-\\frac23$.",
            "D. $a=-2$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Dùng ý nghĩa điểm thuộc đồ thị\nTọa độ $M(-3;-6)$ phải thỏa $y=ax^2$.\nBước 2: Thay đúng hoành độ, tung độ\n$-6=a(-3)^2=9a$. Bình phương $-3$ bằng $9$, không phải $-9$.\nBước 3: Tìm hệ số\nChia cho $9\\ne0$ được $a=-6/9=-2/3$.\nBước 4: Kiểm lại\n$(-2/3)\\cdot9=-6$, đúng tung độ. Hệ số âm và khác $0$ cho parabol mở xuống, phù hợp điểm nằm dưới trục hoành.\nBước 5: Kết luận\nChọn C.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-02",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Chọn đồ thị từ bảng giá trị",
          "prompt": "Một hàm số $y=ax^2$ có bảng: khi $x=-2,-1,0,1,2$ thì $y=2,\\frac12,0,\\frac12,2$. Bốn hình cùng thang đo dưới đây, hình nào đúng?",
          "svg": svgGrade9Plot({"id":"ham9-05","title":"Bốn phương án đồ thị","panels":[{"title":"Hình I","xmin":-3,"xmax":3,"ymin":-2,"ymax":8,"curves":[{"a":-0.5}]},{"title":"Hình II","xmin":-3,"xmax":3,"ymin":-2,"ymax":8,"curves":[{"a":2}]},{"title":"Hình III","xmin":-3,"xmax":3,"ymin":-2,"ymax":8,"curves":[{"a":0.5}]},{"title":"Hình IV","xmin":-3,"xmax":3,"ymin":-2,"ymax":8,"curves":[{"a":1}]}]}),
          "options": [
            "A. Hình I.",
            "B. Hình II.",
            "C. Hình III.",
            "D. Hình IV."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tìm hệ số từ bảng\nTại $x=1$, có $y=1/2$, nên $a=1/2$.\nBước 2: Xác định dạng và điểm kiểm\nParabol mở lên, qua gốc tọa độ, đối xứng qua trục tung. Ngoài ra nó phải qua $(2;2)$ và $(-2;2)$.\nBước 3: Đối chiếu hình\nHình III có đúng các tọa độ theo bảng và cùng thang đo đề cho.\nBước 4: Giải thích loại hình khác\nHình I mở xuống; hình II cho $y=8$ tại $x=2$; hình IV cho $y=4$ tại $x=2$, đều không khớp $y=2$.\nDáng chữ U một mình chưa đủ để chọn vì nhiều hệ số dương có cùng dáng đó.\nBước 5: Kết luận\nChọn C, hình III.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-03",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hoành độ gấp ba nhưng đổi dấu",
          "prompt": "Trên $y=ax^2$, $a\\ne0$, hai điểm có hoành độ $u$ và $-3u$, với $u\\ne0$. Gọi tung độ tương ứng là $y_1,y_2$. Tính $y_2/y_1$.",
          "svg": "",
          "options": [
            "A. $-3$.",
            "B. $9$.",
            "C. $3$.",
            "D. $-9$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Viết tung độ thứ nhất\nVới hoành độ $u$, có $y_1=au^2$.\n$a,u\\ne0$ nên $y_1\\ne0$, tỉ số đề hỏi xác định.\nBước 2: Viết tung độ thứ hai\n$y_2=a(-3u)^2=9au^2$ vì bình phương làm mất dấu âm và bình phương cả hệ số $3$.\nBước 3: Chia hai tung độ\n$y_2/y_1=9au^2/(au^2)=9$.\nBước 4: Kiểm phạm vi kết luận\nKết quả đúng cả khi $a<0$: hai tung độ cùng âm nhưng tỉ số vẫn dương. Không lấy tỉ số tung độ bằng tỉ số hoành độ.\nBước 5: Kết luận\nChọn B.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-04",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phía nào của trục hoành?",
          "prompt": "Với đồ thị $y=-2x^2$, phát biểu nào đúng?",
          "svg": svgGrade9Plot({"id":"ham9-07","title":"y = −2x²","xmin":-3,"xmax":3,"ymin":-8,"ymax":1,"curves":[{"a":-2}]}),
          "options": [
            "A. Mọi điểm đều có tung độ âm, kể cả $O$.",
            "B. Đồ thị nằm phía trên trục hoành khi $x<0$.",
            "C. Đồ thị không có điểm chung với trục hoành.",
            "D. Trừ $O$, mọi điểm ở dưới trục hoành; giao với mỗi trục chỉ là $O$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xét dấu tung độ\nVì $x^2\\ge0$, có $y=-2x^2\\le0$ với mọi $x$.\nBước 2: Xét khi tung độ bằng 0\n$-2x^2=0$ chỉ khi $x=0$. Do đó đồ thị gặp trục hoành duy nhất tại $O(0;0)$.\nBước 3: Xét giao với trục tung\nTrên trục tung, $x=0$; thay vào hàm số được $y=0$, nên giao điểm cũng chỉ là $O$.\nBước 4: Mô tả phần còn lại\nKhi $x\\ne0$, có $x^2>0$ nên $y<0$. Mọi điểm khác $O$ nằm dưới trục hoành, dù hoành độ âm hay dương.\nBước 5: Kết luận\nChọn D. Phát biểu “mọi điểm có tung độ âm” sai tại $O$.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-05",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giao với một đường ngang",
          "prompt": "Tìm giao điểm của $y=-\\frac12x^2$ và $y=-8$.",
          "svg": svgGrade9Plot({"id":"ham9-08","title":"Đường ngang cắt parabol","xmin":-5,"xmax":5,"ymin":-10,"ymax":2,"tick":2,"curves":[{"a":-0.5,"label":"y = −x²/2"}],"lines":[{"a":0,"b":-8,"label":"y = −8"}],"points":[{"x":-4,"y":-8,"label":"A","dx":-10},{"x":4,"y":-8,"label":"B"}]}),
          "options": [
            "A. $(-4;-8)$ và $(4;-8)$.",
            "B. Chỉ $(4;-8)$.",
            "C. $(-4;8)$ và $(4;8)$.",
            "D. Không có giao điểm."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Lập phương trình hoành độ\nĐiểm chung có cùng tung độ trên hai đồ thị: $-x^2/2=-8$.\nBước 2: Giải phương trình\nNhân hai vế với $-2$ được $x^2=16$, nên $x=-4$ hoặc $x=4$.\nBước 3: Tìm tung độ tương ứng\nCả hai điểm nằm trên đường $y=-8$, nên tung độ đều là $-8$.\nBước 4: Kiểm hai điểm\nThay từng hoành độ vào parabol đều cho $-(16)/2=-8$.\nHoành độ âm vẫn hợp lệ; không có điều kiện chỉ chọn căn dương.\nBước 5: Kết luận\nHai điểm là $(-4;-8)$ và $(4;-8)$, chọn A.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-06",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "So sánh hai hệ số trên cùng hệ trục",
          "prompt": "Hình vẽ biểu diễn $(P):y=ax^2$ màu xanh và $(Q):y=bx^2$ màu hồng. Cả hai có hệ số khác $0$. Quan hệ nào đúng?",
          "svg": svgGrade9Plot({"id":"ham9-09","title":"Hai parabol cùng thang đo","xmin":-4,"xmax":4,"ymin":-1,"ymax":6,"curves":[{"a":0.25,"label":"P (xanh)"},{"a":1,"label":"Q (hồng)","color":"#db2777"}],"points":[{"x":2,"y":1,"label":"P","dy":15,"guides":true},{"x":2,"y":4,"label":"Q","guides":true}]}),
          "options": [
            "A. $0<b<a$.",
            "B. $a<b<0$.",
            "C. $0<a<b$.",
            "D. $a<0<b$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhìn chiều mở\nCả hai parabol mở lên nên $a>0$ và $b>0$.\nBước 2: Chọn cùng một hoành độ khác 0\nTại $x=2$, điểm trên P thấp hơn điểm trên Q theo hình, nên $y_P<y_Q$.\nBước 3: Chuyển thành so sánh hệ số\n$y_P=4a$, $y_Q=4b$, do đó $4a<4b$.\nChia cho $4>0$ được $a<b$.\nBước 4: Kết hợp\nCó $0<a<b$. So sánh tại cùng hoành độ và cùng thang đo đáng tin cậy hơn chỉ nói hình nào “hẹp” hơn.\nBước 5: Kết luận\nChọn C.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-07",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Điểm thuộc và điều kiện cắt phải cùng đúng",
          "prompt": "Tìm số thực $m\\ne1$ để parabol $y=(m-1)x^2$ đi qua $A(m;2m)$ và cắt $y=9$ tại hai điểm phân biệt.",
          "svg": "",
          "options": [
            "A. $m=0$.",
            "B. $m=2$.",
            "C. $m=-1$.",
            "D. $m\\in\\{-1;0;2\\}$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Dùng điều kiện điểm thuộc\n$A(m;2m)$ thuộc parabol nên $(m-1)m^2=2m$.\nChuyển vế và phân tích: $m(m^2-m-2)=m(m-2)(m+1)=0$.\nBước 2: Liệt kê ứng viên\n$m=0,2,-1$, đều khác $1$. Không chia ngay cho $m$ vì sẽ mất ứng viên $0$.\nBước 3: Dùng điều kiện hai giao điểm\n$(m-1)x^2=9$ có hai nghiệm thực phân biệt khi $9/(m-1)>0$, tức $m>1$.\nNếu hệ số âm thì vế trái không dương, không thể bằng $9$.\nBước 4: Chọn và thử\nChỉ $m=2$ thỏa $m>1$. Parabol $y=x^2$ đi qua $(2;4)$ và cắt $y=9$ tại $x=-3,3$.\nBước 5: Kết luận\nChọn B.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-08",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đủ tọa độ của cả hai giao điểm",
          "prompt": "Tìm hai giao điểm của $y=\\frac12x^2$ và $y=-\\frac12x+3$.",
          "svg": svgGrade9Plot({"id":"ham9-16","title":"Tương giao parabol và đường xiên","xmin":-4,"xmax":4,"ymin":-1,"ymax":6,"curves":[{"a":0.5,"label":"y = x²/2"}],"lines":[{"a":-0.5,"b":3,"label":"y = −x/2 + 3"}],"points":[{"x":-3,"y":4.5,"label":"A","dx":-10},{"x":2,"y":2,"label":"B"}]}),
          "options": [
            "A. $(-3;-3)$ và $(2;2)$.",
            "B. $(-3;\\frac92)$ và $(2;2)$.",
            "C. $(3;\\frac92)$ và $(-2;2)$.",
            "D. $(-3;2)$ và $(2;\\frac92)$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Lập phương trình điểm chung\n$x^2/2=-x/2+3$. Nhân với $2$ và chuyển vế được $x^2+x-6=0$.\nBước 2: Giải hoành độ\n$(x+3)(x-2)=0$ nên $x=-3$ hoặc $x=2$.\nBước 3: Tính từng tung độ\nVới $x=-3$, đường thẳng cho $y=3/2+3=9/2$.\nVới $x=2$, có $y=-1+3=2$.\nBước 4: Kiểm trong parabol\n$(-3)^2/2=9/2$ và $2^2/2=2$. Các cặp tọa độ đều thuộc cả hai đồ thị.\nBước 5: Kết luận\nChọn B: $(-3;9/2)$ và $(2;2)$. Không tráo tung độ giữa hai hoành độ.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-09",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tiếp xúc qua nghiệm kép",
          "prompt": "Tìm $m$ để đường thẳng $y=4x+m$ tiếp xúc với parabol $y=2x^2$.",
          "svg": "",
          "options": [
            "A. $m=2$.",
            "B. $m=-4$.",
            "C. $m=0$.",
            "D. $m=-2$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Lập phương trình hoành độ\n$2x^2=4x+m$ tương đương $2x^2-4x-m=0$.\nBước 2: Diễn đạt tiếp xúc\nTiếp xúc yêu cầu phương trình hoành độ có nghiệm kép, tức $\\Delta=0$, không chỉ $\\Delta\\ge0$.\nBước 3: Tìm tham số\n$\\Delta=(-4)^2-4\\cdot2(-m)=16+8m$.\n$16+8m=0$ cho $m=-2$.\nBước 4: Kiểm tiếp điểm\nPhương trình trở thành $2(x-1)^2=0$, có nghiệm kép $x=1$.\nTại đó hai đồ thị cùng cho $y=2$, nên tiếp điểm là $(1;2)$.\nBước 5: Kết luận\nChọn D.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-10",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Từ hoành độ đến tích tung độ",
          "prompt": "Đường $y=3x+m$ cắt $y=x^2$ tại hai điểm phân biệt có hoành độ $x_1,x_2$ và tung độ $y_1,y_2$. Biết $x_1^2+x_2^2=13$. Tính $y_1y_2$.",
          "svg": "",
          "options": [
            "A. $13$.",
            "B. $-4$.",
            "C. $4$.",
            "D. $2$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Dùng phương trình hoành độ\n$x^2-3x-m=0$ có tổng nghiệm $S=3$, tích $P=-m$.\nBước 2: Áp dụng dữ kiện tổng bình phương\n$x_1^2+x_2^2=S^2-2P=9+2m=13$, nên $m=2$.\nBước 3: Kiểm hai giao điểm\nVới $m=2$, biệt thức bằng $9+8=17>0$, đúng yêu cầu hai điểm phân biệt.\nBước 4: Tính tích tung độ\nHai điểm trên $y=x^2$ nên $y_1y_2=x_1^2x_2^2=(x_1x_2)^2=P^2=(-2)^2=4$.\nKhông lấy tích hoành độ $-2$ làm tích tung độ.\nBước 5: Kết luận\nChọn C.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-11",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai phía trục tung",
          "prompt": "Tìm điều kiện của $m$ để $y=2x+m$ cắt $y=-x^2$ tại hai điểm nằm ở hai phía trục tung.",
          "svg": "",
          "options": [
            "A. $m<0$.",
            "B. $m\\le0$.",
            "C. $0<m<1$.",
            "D. $m<1$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Chuyển ý nghĩa hình học\nHai điểm ở hai phía trục tung nghĩa là hoành độ của chúng trái dấu, không điểm nào có hoành độ $0$.\nBước 2: Lập phương trình hoành độ\n$-x^2=2x+m$ tương đương $x^2+2x+m=0$.\nNếu có hai nghiệm trái dấu, Viète cho tích $m<0$.\nBước 3: Kiểm điều kiện đủ\nNgược lại, $m<0$ cho $\\Delta=4-4m>0$, bảo đảm hai nghiệm thực phân biệt.\nTích $m<0$ khiến chúng trái dấu, nên hai điểm thật sự ở hai phía trục tung.\nBước 4: Kiểm biên\n$m=0$ cho một nghiệm $0$: điểm tương ứng nằm trên trục tung, không thuộc một phía nào.\nBước 5: Kết luận\nĐiều kiện cần và đủ $m<0$, chọn A.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-nangCao-12",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Độ dài dây xiên gồm cả hai độ lệch",
          "prompt": "Đường $y=x+m$ cắt $y=x^2$ tại hai điểm phân biệt $A,B$. Tìm $m$ để $AB=6\\sqrt2$. Hai trục tọa độ dùng cùng đơn vị độ dài.",
          "svg": "",
          "options": [
            "A. $m=\\frac{17}4$.",
            "B. $m=\\frac{35}4$.",
            "C. $m=9$.",
            "D. $m=-\\frac{35}4$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Biểu diễn hiệu hoành độ\nHoành độ giao điểm thỏa $x^2-x-m=0$; Viète cho $S=1$, $P=-m$.\nDo đó $(x_1-x_2)^2=S^2-4P=1+4m$.\nBước 2: Liên hệ hiệu tung độ\nVì cùng nằm trên $y=x+m$, có $y_1-y_2=x_1-x_2$.\nBước 3: Dùng khoảng cách trong hệ trục\nHai trục cùng đơn vị nên Pythagore cho $AB^2=(x_1-x_2)^2+(y_1-y_2)^2=2(1+4m)$.\nĐặt bằng $(6\\sqrt2)^2=72$, được $m=35/4$.\nBước 4: Kiểm tồn tại và độ dài\nBiệt thức lúc này bằng $36>0$, hoành độ $-5/2,7/2$ chênh $6$; tung độ cũng chênh $6$.\nVậy độ dài đúng bằng $\\sqrt{36+36}=6\\sqrt2$.\nBước 5: Kết luận\nChọn B.",
          "manThi": "hamSo"
        }
      ],
      "hsg": [
        {
          "id": "l9-ham-so-bac-hai-hsg-01",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "dien",
          "title": "Mô hình quãng đường bình phương",
          "prompt": "Trong khoảng $0\\le t\\le6$ giây, quãng đường của một vật được mô hình hóa bởi $s=at^2$ (m), với $a>0$. Sau $2$ giây vật đi được $12$ m. Lập công thức rồi tìm thời gian vật đi được $75$ m, đơn vị giây.",
          "svg": "",
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đọc miền áp dụng của mô hình\nMô hình $s=at^2$ chỉ dùng trong $0\\le t\\le6$ giây và có $a>0$.\nTa cần tìm $a$ từ dữ kiện đã biết, rồi mới tính thời gian ứng với $75$ m.\nBước 2: Xác định hệ số\nTại $t=2$, có $s=12$, nên $12=a\\cdot2^2=4a$.\nChia cho $4$ được $a=3>0$. Mô hình là $s=3t^2$.\nBước 3: Giải phương trình quãng đường\nĐặt $s=75$: $3t^2=75$, nên $t^2=25$.\nHai ứng viên đại số là $t=5$ và $t=-5$.\nBước 4: Kiểm tra miền thời gian\n$t=-5$ bị loại vì âm. $t=5$ thuộc $[0;6]$ nên được nhận.\nThay lại: $3\\cdot5^2=75$ m, đúng yêu cầu.\nBước 5: Kết luận\nVật đi được $75$ m sau $5$ giây trong khoảng mô hình cho phép.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-ham-so-bac-hai-hsg-02",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Dây ngang và khoảng cách đến trục hoành",
          "prompt": "Đường $y=k$, $k>0$, cắt $y=\\frac12x^2$ tại $M,N$. Tìm $k$ để độ dài $MN$ bằng ba lần khoảng cách từ đường $y=k$ đến trục hoành.",
          "svg": "",
          "correctAnswer": "8/9",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm hai giao điểm\nHoành độ điểm chung thỏa $x^2/2=k$, tức $x^2=2k$.\nVì $k>0$, có hai hoành độ phân biệt $-\\sqrt{2k}$ và $\\sqrt{2k}$; cả hai tung độ bằng $k$.\nBước 2: Biểu diễn hai độ dài\nĐoạn $MN$ nằm ngang, nên độ dài là hiệu hoành độ: $MN=2\\sqrt{2k}$.\nKhoảng cách giữa đường $y=k$ và trục hoành $y=0$ là $k$, do $k>0$.\nBước 3: Lập và giải phương trình\nĐiều kiện đề cho là $2\\sqrt{2k}=3k$.\nHai vế đều dương, nên bình phương là phép biến đổi tương đương: $8k=9k^2$.\nVì $k>0$, chia cho $k$ được $8=9k$, nên $k=8/9$.\nBước 4: Thử kết quả\nHai hoành độ khi ấy là $\\pm4/3$; $MN=8/3$ và $3k=8/3$.\nĐiều kiện $k>0$ cũng được thỏa.\nBước 5: Kết luận\n$k=8/9$. Không nhận $k=0$ từ phương trình sau bình phương, vì lúc đó hai giao điểm trùng nhau và trái giả thiết.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-hsg-03",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm giao điểm còn lại qua hai dữ kiện",
          "prompt": "Parabol $y=ax^2$ đi qua $C(2;2)$. Đường $y=mx+3$ cắt parabol tại $A(-2;2)$ và một điểm khác $B$. Tính tổng hoành độ và tung độ của $B$.",
          "svg": svgGrade9Plot({"id":"ham9-13","title":"Parabol, đường thẳng và điểm đã biết","xmin":-4,"xmax":4,"ymin":-1,"ymax":6,"curves":[{"a":0.5,"label":"P"}],"lines":[{"a":0.5,"b":3,"label":"d"}],"points":[{"x":2,"y":2,"label":"C","dx":10,"dy":15},{"x":-2,"y":2,"label":"A","dx":-10},{"x":3,"y":4.5,"label":"B"}]}),
          "correctAnswer": "7.5",
          "dapAnChapNhan": [
            "7,5",
            "15/2"
          ],
          "solution": "Bước 1: Tìm parabol\n$C(2;2)$ thuộc $y=ax^2$, nên $2=4a$ và $a=1/2$.\nVậy parabol có phương trình $y=x^2/2$.\nBước 2: Tìm đường thẳng\n$A(-2;2)$ thuộc $y=mx+3$, nên $2=-2m+3$.\nSuy ra $m=1/2$, đường thẳng là $y=x/2+3$.\nBước 3: Tìm hoành độ giao điểm\nCho hai tung độ bằng nhau: $x^2/2=x/2+3$.\nNhân với $2$ rồi chuyển vế: $x^2-x-6=0$, tức $(x+2)(x-3)=0$.\nCó $x=-2$ hoặc $x=3$. Điểm $A$ đã có hoành độ $-2$, nên $B$ có hoành độ $3$.\nBước 4: Tìm và kiểm tung độ B\nTrên parabol, $y_B=3^2/2=9/2$.\nTrên đường thẳng, $3/2+3=9/2$, nên $B$ thuộc cả hai đồ thị.\nBước 5: Kết luận\nTổng tọa độ của $B$ là $3+9/2=15/2=7{,}5$.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-hsg-04",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Đối xứng và hai điểm cùng tung độ",
          "prompt": "Cho $a\\ne0$. Chứng minh nếu $M(u;au^2)$ thuộc $y=ax^2$ thì ảnh của M qua trục tung cũng thuộc đồ thị. Chứng minh thêm: hai điểm phân biệt trên đồ thị có cùng tung độ thì hoành độ của chúng đối nhau.",
          "svg": "",
          "solution": "Bước 1: Mô tả phép đối xứng qua trục tung\nPhép đối xứng qua trục tung đổi dấu hoành độ và giữ tung độ.\nDo đó ảnh của $M(u;au^2)$ là $M'(-u;au^2)$.\nBước 2: Kiểm ảnh có thuộc đồ thị không\nThay hoành độ $-u$ vào hàm số: $a(-u)^2=au^2$, đúng bằng tung độ của $M'$.\nVậy $M'$ cũng thuộc parabol. Nếu $u=0$, ảnh trùng với $M$ tại gốc tọa độ.\nBước 3: Xét hai điểm có cùng tung độ\nGọi hoành độ hai điểm là $u,v$. Cùng tung độ cho $au^2=av^2$.\nChia cho $a\\ne0$, chuyển vế và phân tích: $u^2-v^2=(u-v)(u+v)=0$.\nBước 4: Dùng giả thiết phân biệt\nNếu $u=v$ thì hai điểm vừa cùng hoành độ vừa cùng tung độ, tức trùng nhau, trái giả thiết.\nVì vậy $u-v\\ne0$; tích bằng $0$ buộc $u+v=0$, hay $v=-u$.\nBước 5: Kết luận\nParabol đối xứng qua trục tung. Hai điểm phân biệt trên parabol có cùng tung độ thì hoành độ đối nhau và chúng đối xứng nhau qua trục tung.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-hsg-05",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Kể cả đường thẳng đứng",
          "prompt": "Chứng minh một đường thẳng bất kỳ có không quá hai điểm chung với parabol $y=ax^2$, $a\\ne0$. Cần xét cả đường thẳng song song với trục tung.",
          "svg": "",
          "solution": "Bước 1: Chia các loại đường thẳng\nMột đường thẳng hoặc song song trục tung, hoặc viết được dưới dạng $y=kx+b$.\nPhải xét cả hai loại vì đường $x=c$ không biểu diễn bằng $y=kx+b$.\nBước 2: Xét đường không song song trục tung\nHoành độ điểm chung với parabol thỏa $ax^2=kx+b$, tức $ax^2-kx-b=0$.\nĐây là phương trình bậc hai thật sự vì $a\\ne0$.\nBước 3: Đổi số nghiệm thành số giao điểm\nPhương trình bậc hai có nhiều nhất hai nghiệm thực phân biệt.\nMỗi hoành độ nghiệm chỉ cho một tung độ $y=ax^2$. Vì vậy có nhiều nhất hai điểm chung; nghiệm kép chỉ cho một điểm.\nBước 4: Xét đường song song trục tung\nVới đường $x=c$, mọi điểm chung phải có hoành độ $c$.\nTrên parabol chỉ có một điểm như vậy là $(c;ac^2)$, nên trường hợp này có đúng một điểm chung.\nBước 5: Kết luận\nHai trường hợp phủ mọi đường thẳng. Do đó không đường thẳng nào có quá hai điểm chung với parabol $y=ax^2$.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-hsg-06",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tiếp tuyến song song đường đã biết",
          "prompt": "Một tiếp tuyến của $y=\\frac12x^2$ song song với đường $d:y=-2x+5$. Viết tiếp tuyến dưới dạng $y=-2x+b$. Tìm $b$.",
          "svg": svgGrade9Plot({"id":"ham9-21","title":"Parabol và đường d đã biết","xmin":-4,"xmax":4,"ymin":-1,"ymax":7,"curves":[{"a":0.5,"label":"P: y = x²/2"}],"lines":[{"a":-2,"b":5,"label":"d: y = −2x + 5"}]}),
          "correctAnswer": "-2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Dùng điều kiện song song\nĐường cần tìm có cùng hệ số góc $-2$ với $d$, nên viết $y=-2x+b$.\nCòn phải tìm $b$ để đường này tiếp xúc với parabol.\nBước 2: Lập phương trình hoành độ\n$x^2/2=-2x+b$ tương đương $x^2/2+2x-b=0$.\nTiếp xúc ứng với phương trình có nghiệm kép.\nBước 3: Dùng biệt thức\nỞ đây $a=1/2$, hệ số của $x$ là $2$, hằng số là $-b$.\n$\\Delta=2^2-4\\cdot(1/2)(-b)=4+2b$.\nCho $\\Delta=0$, được $b=-2$.\nBước 4: Kiểm tra tiếp điểm và hai đường phân biệt\nThay lại, phương trình hoành độ là $(x+2)^2/2=0$, chỉ có nghiệm kép $x=-2$.\nTung độ bằng $2$, nên tiếp điểm là $(-2;2)$.\nTung độ gốc $-2$ khác $5$ của $d$, nên hai đường song song và không trùng nhau.\nBước 5: Kết luận\n$b=-2$, tiếp tuyến là $y=-2x-2$.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-hsg-07",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chỉ nhận thời điểm trong mô hình",
          "prompt": "Trên một trục vị trí, trong $0\\le t\\le4$ giây, vật A có vị trí $s_A=at^2$ (m), $a>0$, và tại $t=2$ có vị trí $4$ m. Vật B xuất phát ở vị trí $-5$ m lúc $t=0$, chuyển động đều theo chiều dương với vận tốc $6$ m/s. Lập hai mô hình rồi tìm thời điểm chúng gặp nhau trong khoảng đã nêu, đơn vị giây.",
          "svg": "",
          "correctAnswer": "1",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Lập mô hình của vật A\nVật A có $s_A=at^2$. Dữ kiện tại $t=2$ cho $4=4a$, nên $a=1$ và $s_A=t^2$.\nMiền áp dụng là $0\\le t\\le4$ giây.\nBước 2: Lập mô hình của vật B\nVật B bắt đầu ở vị trí $-5$ m, đi theo chiều dương với vận tốc $6$ m/s.\nSau $t$ giây, vị trí của B là $s_B=-5+6t$, không phải chỉ $6t$.\nBước 3: Tìm thời điểm cùng vị trí\nGặp nhau khi $s_A=s_B$, nên $t^2=-5+6t$.\nChuyển vế: $t^2-6t+5=(t-1)(t-5)=0$, cho $t=1$ hoặc $t=5$.\nBước 4: Kiểm miền và vị trí\n$t=5$ nằm ngoài khoảng $[0;4]$ nên không được dùng trong mô hình đã cho.\n$t=1$ hợp lệ; khi đó $s_A=1$ và $s_B=-5+6=1$ m.\nBước 5: Kết luận\nHai vật gặp nhau sau $1$ giây trong khoảng cần xét.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-ham-so-bac-hai-hsg-08",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Diện tích qua trục tung",
          "prompt": "Đường $y=x+m$, $m>0$, cắt $y=x^2$ tại $A,B$. Tìm $m$ để tam giác $OAB$ có diện tích $3$, với $O$ là gốc tọa độ và hai trục dùng cùng đơn vị.",
          "svg": "",
          "correctAnswer": "2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm vị trí hai giao điểm\nHoành độ thỏa $x^2-x-m=0$, có $\\Delta=1+4m>0$ vì $m>0$.\nViète cho $x_A+x_B=1$, $x_Ax_B=-m<0$. Đặt thứ tự $x_A<0<x_B$.\nBước 2: Chia tam giác để tính diện tích\nĐường thẳng cắt trục tung tại $C(0;m)$. Vì $0$ nằm giữa hai hoành độ, $C$ nằm trên đoạn $AB$.\nĐoạn $OC$ dài $m$ chia tam giác $OAB$ thành $OAC$ và $OCB$.\nLấy $OC$ làm đáy, hai chiều cao tương ứng là $-x_A$ và $x_B$, nên $S_{OAB}=m(x_B-x_A)/2$.\nBước 3: Biểu diễn hiệu hai nghiệm\nTheo công thức nghiệm, $x_B-x_A=\\sqrt{1+4m}$.\nĐiều kiện diện tích là $m\\sqrt{1+4m}/2=3$, tức $m\\sqrt{1+4m}=6$.\nHai vế dương, nên bình phương tương đương: $m^2(1+4m)=36$.\nBước 4: Giải và thử tham số\nChuyển vế và phân tích: $4m^3+m^2-36=(m-2)(4m^2+9m+18)=0$.\nVì $m>0$, nhân tử thứ hai dương, nên chỉ $m=2$.\nKhi ấy hai hoành độ là $-1,2$, tung độ là $1,4$; diện tích $2[2-(-1)]/2=3$.\nBước 5: Kết luận\nGiá trị cần tìm là $m=2$. Các khoảng cách trong công thức diện tích được lấy dương, không thay trực tiếp $x_A<0$ làm chiều cao.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-hsg-09",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Công thức tiếp tuyến không dùng đạo hàm",
          "prompt": "Cho $a\\ne0$ và $t\\in\\mathbb R$. Chứng minh đường $y=2atx-at^2$ tiếp xúc với parabol $y=ax^2$ tại điểm có hoành độ $t$. Không dùng đạo hàm.",
          "svg": "",
          "solution": "Bước 1: Viết điều kiện điểm chung\nĐiểm chung phải thỏa $ax^2=2atx-at^2$.\nChuyển toàn bộ về một vế: $ax^2-2atx+at^2=0$.\nBước 2: Nhận dạng bình phương\nĐặt $a$ ra ngoài: $a(x^2-2tx+t^2)=a(x-t)^2=0$.\nVì $a\\ne0$, phương trình tương đương $(x-t)^2=0$.\nBước 3: Xác định tiếp điểm\nPhương trình có một nghiệm kép $x=t$.\nTrên parabol, tung độ bằng $at^2$. Trên đường thẳng, thay $x=t$ cũng được $2at^2-at^2=at^2$.\nBước 4: Kết nối với tiếp xúc\nĐường thẳng có phương trình hoành độ giao điểm với nghiệm kép tại $t$, nên nó tiếp xúc parabol ở điểm $(t;at^2)$.\nNếu $t=0$, đường là $y=0$ và tiếp điểm là gốc tọa độ. Nếu $a<0$, phép chia cho $a\\ne0$ vẫn hợp lệ.\nBước 5: Kết luận\nCông thức tiếp tuyến đúng với mọi $a\\ne0$ và mọi số thực $t$, không cần dùng đạo hàm.",
          "manThi": "hamSo"
        },
        {
          "id": "l9-ham-so-bac-hai-hsg-10",
          "lop": 9,
          "chuDe": "ham-so-bac-hai",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Trung điểm của các dây song song",
          "prompt": "Cho $a\\ne0$ và $k$ cố định. Đường $y=kx+b$ cắt $y=ax^2$ tại hai điểm phân biệt $A,B$, có trung điểm M. Chứng minh mọi M nằm trên đường thẳng $x=k/(2a)$. Nêu điều kiện của $b$ để có hai giao điểm, rồi xác định M nằm phía trên hay dưới parabol tại cùng hoành độ theo dấu của $a$.",
          "svg": "",
          "solution": "Bước 1: Điều kiện có hai giao điểm\nHoành độ thỏa $ax^2-kx-b=0$. Vì $a\\ne0$, có hai điểm phân biệt đúng khi $\\Delta=k^2+4ab>0$.\nNếu $a>0$, điều kiện là $b>-k^2/(4a)$; nếu $a<0$, chia cho $4a$ phải đổi chiều, được $b<-k^2/(4a)$.\nBước 2: Tìm hoành độ trung điểm\nViète cho $x_A+x_B=k/a$.\nVì $M$ là trung điểm, $x_M=(x_A+x_B)/2=k/(2a)$, không phụ thuộc $b$.\nBước 3: Tính tung độ trung điểm\nHai điểm trên đường thẳng nên $y_A=kx_A+b$, $y_B=kx_B+b$.\nLấy trung bình: $y_M=k(x_A+x_B)/2+b=k^2/(2a)+b$.\nBước 4: So sánh với điểm trên parabol có cùng hoành độ\nTại $x_M$, tung độ parabol là $a[k/(2a)]^2=k^2/(4a)$.\nHiệu tung độ bằng $y_M-k^2/(4a)=b+k^2/(4a)=\\Delta/(4a)$.\nTử dương, nên hiệu dương khi $a>0$ và âm khi $a<0$.\nBước 5: Kết luận\nMọi trung điểm nằm trên đường thẳng $x=k/(2a)$.\n$M$ ở trên parabol nếu $a>0$, ở dưới nếu $a<0$. Dấu bằng không xảy ra vì sẽ cho $\\Delta=0$, khi hai giao điểm không còn phân biệt.",
          "manThi": "hamSo"
        }
      ]
    },
    'he-thuc-luong': {
      "kha": [
        {
          "id": "l9-he-thuc-luong-kha-01",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cạnh đối với góc đã chọn",
          "prompt": "Tam giác $ABC$ vuông tại $A$, góc $ABC=\\alpha$. Tỉ số nào bằng $\\sin\\alpha$?",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[8,0],"C":[0,6]},"edges":[["A","B",""],["A","C",""],["B","C",""]],"right":[["B","A","C"]],"angles":[["A","B","C","α"]],"title":"Cạnh đối với góc đã chọn"}),
          "options": [
            "A. $\\frac{AB}{BC}$.",
            "B. $\\frac{AC}{AB}$.",
            "C. $\\frac{AC}{BC}$.",
            "D. $\\frac{AB}{AC}$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định cạnh huyền\nTam giác vuông tại $A$, nên cạnh đối diện góc vuông là $BC$, tức cạnh huyền.\nBước 2: Xác định cạnh đối với góc đang xét\nGóc $\\alpha$ nằm tại $B$.\nCạnh không đi qua đỉnh $B$ là $AC$, nên $AC$ là cạnh đối; cạnh góc vuông còn lại $AB$ là cạnh kề.\nBước 3: Áp dụng định nghĩa sin\nSin của một góc nhọn bằng độ dài cạnh đối chia độ dài cạnh huyền.\nDo đó $\\sin\\alpha=AC/BC$.\nBước 4: Phân biệt với các tỉ số khác\n$AB/BC$ là cos; $AC/AB$ là tang; $AB/AC$ là cot của góc $B$.\nViệc xác định đúng góc đang xét giúp tránh đổi cạnh đối và cạnh kề.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l9-he-thuc-luong-kha-02",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Sin của góc đặc biệt",
          "prompt": "Tam giác $ABC$ vuông tại $A$, $BC=12$ cm, $B=30^\\circ$. Tính $AC$.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[10.392304845413264,0],"C":[0,6]},"edges":[["A","B",""],["A","C",""],["B","C","12 cm"]],"right":[["B","A","C"]],"angles":[["A","B","C","30°"]],"title":"Sin của góc đặc biệt"}),
          "options": [
            "A. $6$ cm.",
            "B. $6\\sqrt3$ cm.",
            "C. $12$ cm.",
            "D. $4\\sqrt3$ cm."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định các cạnh liên quan\nTam giác vuông tại $A$ nên $BC=12$ cm là cạnh huyền.\nCạnh cần tìm $AC$ đối diện góc $B=30^\\circ$.\nBước 2: Chọn tỉ số lượng giác\nSin liên hệ cạnh đối với cạnh huyền, nên $\\sin B=AC/BC$.\nSuy ra $AC=BC\\sin B$.\nBước 3: Thay số\nVì $\\sin30^\\circ=1/2$, có $AC=12\\cdot1/2=6$ cm.\nBước 4: Kiểm tra kết quả\nTỉ số $AC/BC=6/12=1/2$ khớp sin của góc đã cho.\n$AC<BC$ cũng phù hợp cạnh góc vuông ngắn hơn cạnh huyền; dùng cos ở đây sẽ tính cạnh $AB$.\nBước 5: Kết luận\n$AC=6$ cm. Chọn A."
        },
        {
          "id": "l9-he-thuc-luong-kha-03",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai góc nhọn phụ nhau",
          "prompt": "Tam giác $ABC$ vuông tại $A$. Kết luận nào đúng?",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[8,0],"C":[0,6]},"edges":[["A","B",""],["A","C",""],["B","C",""]],"right":[["B","A","C"]],"angles":[],"title":"Hai góc nhọn phụ nhau"}),
          "options": [
            "A. $\\sin B=\\sin C$.",
            "B. $\\cos B=\\cos C$.",
            "C. $\\tan B=\\tan C$.",
            "D. $\\cos C=\\sin B$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tìm quan hệ giữa hai góc nhọn\nTổng ba góc tam giác bằng $180^\\circ$ và góc $A=90^\\circ$.\nVì vậy $B+C=90^\\circ$, tức $B,C$ phụ nhau.\nBước 2: Viết sin của góc B\nTrong tam giác vuông tại $A$, cạnh đối với $B$ là $AC$, cạnh huyền là $BC$.\nDo đó $\\sin B=AC/BC$.\nBước 3: Viết cos của góc C\nĐối với $C$, cạnh kề là $AC$ và cạnh huyền vẫn là $BC$.\nVì vậy $\\cos C=AC/BC$.\nBước 4: So sánh hai tỉ số\nHai tỉ số cùng bằng $AC/BC$, nên $\\cos C=\\sin B$.\nHai góc phụ nhau không nhất thiết bằng nhau, nên không tự kết luận sin, cos hay tang của chúng bằng nhau từng đôi.\nBước 5: Kết luận\nChọn D."
        }
      ],
      "nangCao": [
        {
          "id": "l9-he-thuc-luong-nangCao-01",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Máy tính phải ở đơn vị độ",
          "prompt": "Đặt máy tính ở chế độ DEG. Giá trị $\\tan37^\\circ$ làm tròn đến bốn chữ số thập phân là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $0{,}6018$.",
            "B. $0{,}7536$.",
            "C. $0{,}7986$.",
            "D. $1{,}3270$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Kiểm tra đơn vị góc\nGóc đã cho tính bằng độ, nên đặt máy tính ở chế độ DEG trước khi tính.\nNếu dùng chế độ radian, cùng số nhập $37$ sẽ chỉ một góc khác.\nBước 2: Chọn đúng hàm lượng giác\nCần tính tang, nên nhập $\\tan(37)$, không nhập sin, cos hoặc hàm tìm góc.\nBước 3: Đọc kết quả chưa làm tròn\nMáy cho $\\tan37^\\circ\\approx0{,}753554\\ldots$.\nTa giữ bốn chữ số sau dấu phẩy là $7535$ và xét chữ số tiếp theo.\nBước 4: Làm tròn\nChữ số thập phân thứ năm là $5$, nên tăng chữ số thứ tư từ $5$ lên $6$.\nKết quả đến bốn chữ số thập phân là $0{,}7536$.\nBước 5: Kết luận\nChọn B. Các giá trị của sin, cos hoặc cot cùng góc không thay được cho tang.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-02",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cạnh đối từ cạnh huyền",
          "prompt": "Tam giác $ABC$ vuông tại $A$, $BC=13$ cm và $\\sin B=5/13$. Tính $AC$.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[12,0],"C":[0,5]},"edges":[["A","B",""],["A","C",""],["B","C","13 cm"]],"right":[["B","A","C"]],"angles":[],"title":"Cạnh đối từ cạnh huyền"}),
          "options": [
            "A. $12$ cm.",
            "B. $13$ cm.",
            "C. $5$ cm.",
            "D. $8$ cm."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định vai trò các cạnh\nTam giác vuông tại $A$ nên $BC$ là cạnh huyền.\nĐối với góc $B$, cạnh $AC$ là cạnh đối.\nBước 2: Chọn định nghĩa sin\nTrong tam giác vuông, sin của góc nhọn bằng cạnh đối chia cạnh huyền.\nVì vậy $\\sin B=AC/BC$.\nBước 3: Thay số và tính\nTheo đề, $AC/13=5/13$.\nNhân hai vế với $13$ được $AC=5$ cm.\nBước 4: Kiểm tra tính phù hợp\nCạnh góc vuông tìm được dương và nhỏ hơn cạnh huyền $13$ cm.\nPythagore cho cạnh còn lại $AB=\\sqrt{13^2-5^2}=12$ cm, phù hợp một tam giác vuông không suy biến.\nBước 5: Kết luận\n$AC=5$ cm. Chọn C.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-03",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tang cho tỉ số đối trên kề",
          "prompt": "Tam giác $ABC$ vuông tại $A$, $AC=9$ cm và $\\tan B=3/4$. Tính $AB$.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[12,0],"C":[0,9]},"edges":[["A","B",""],["A","C","9 cm"],["B","C",""]],"right":[["B","A","C"]],"angles":[],"title":"Tang cho tỉ số đối trên kề"}),
          "options": [
            "A. $12$ cm.",
            "B. $6{,}75$ cm.",
            "C. $15$ cm.",
            "D. $9$ cm."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định cạnh đối và cạnh kề\nVới góc $B$ trong tam giác vuông tại $A$, cạnh đối là $AC=9$ cm và cạnh kề là $AB$.\nBước 2: Viết tỉ số tang\nTheo định nghĩa, $\\tan B=AC/AB$.\nThay dữ kiện được $9/AB=3/4$.\nBước 3: Giải tỉ lệ thức\nNhân chéo: $3AB=36$.\nChia cho $3$ được $AB=12$ cm.\nBước 4: Kiểm tra vai trò hai cạnh\nCó $AC/AB=9/12=3/4$, đúng giả thiết.\nVì tỉ số nhỏ hơn $1$, cạnh đối $AC$ phải ngắn hơn cạnh kề $AB$; kết quả $9<12$ phù hợp.\nBước 5: Kết luận\n$AB=12$ cm. Chọn A.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-04",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Tìm đúng góc bằng hàm ngược",
          "prompt": "Tam giác $ABC$ vuông tại $A$, $AB=7$ cm, $AC=10$ cm. Dùng máy tính tìm góc $B$, làm tròn đến độ.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[7,0],"C":[0,10]},"edges":[["A","B","7 cm"],["A","C","10 cm"],["B","C",""]],"right":[["B","A","C"]],"angles":[],"title":"Tìm đúng góc bằng hàm ngược"}),
          "options": [
            "A. $35^\\circ$.",
            "B. $44^\\circ$.",
            "C. $46^\\circ$.",
            "D. $55^\\circ$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Chọn tỉ số từ hai cạnh đã biết\nTam giác vuông tại $A$; đối với góc $B$, $AC=10$ là cạnh đối và $AB=7$ là cạnh kề.\nDo đó dùng tang sẽ không cần tính cạnh huyền.\nBước 2: Lập tỉ số\nCó $\\tan B=AC/AB=10/7$.\nGóc $B$ nhọn nên xác định duy nhất từ tỉ số này.\nBước 3: Tìm góc bằng máy tính\nĐặt chế độ DEG, dùng chức năng tìm góc từ tang: $B=\\arctan(10/7)$.\nMáy cho $B\\approx55{,}008^\\circ$.\nBước 4: Làm tròn và kiểm tra\nLàm tròn đến độ được $55^\\circ$.\nVì cạnh đối lớn hơn cạnh kề nên góc $B>45^\\circ$; kết quả này phù hợp. Đảo tỉ số sẽ cho góc còn lại.\nBước 5: Kết luận\n$B\\approx55^\\circ$. Chọn D.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-05",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giải đủ tam giác vuông",
          "prompt": "Tam giác $ABC$ vuông tại $A$, $AB=6$ cm, $B=60^\\circ$. Chọn bộ kết quả đúng theo thứ tự $(AC;BC;C)$.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[6,0],"C":[0,10.392304845413264]},"edges":[["A","B","6 cm"],["A","C",""],["B","C",""]],"right":[["B","A","C"]],"angles":[["A","B","C","60°"]],"title":"Giải đủ tam giác vuông"}),
          "options": [
            "A. $(3\\sqrt3\\text{ cm};12\\text{ cm};30^\\circ)$.",
            "B. $(6\\sqrt3\\text{ cm};12\\text{ cm};30^\\circ)$.",
            "C. $(6\\sqrt3\\text{ cm};3\\text{ cm};30^\\circ)$.",
            "D. $(6\\sqrt3\\text{ cm};12\\text{ cm};60^\\circ)$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Phân tích các đại lượng cần tìm\nVới góc $B=60^\\circ$, $AB=6$ cm là cạnh kề, $AC$ là cạnh đối và $BC$ là cạnh huyền.\nTa dùng tang để tìm $AC$, cos để tìm $BC$.\nBước 2: Tính cạnh đối\nCó $AC=AB\\tan B=6\\tan60^\\circ=6\\sqrt3$ cm.\nBước 3: Tính cạnh huyền\nTừ $\\cos B=AB/BC$, được $BC=AB/\\cos B$.\nVì $\\cos60^\\circ=1/2$, nên $BC=6/(1/2)=12$ cm.\nBước 4: Tính góc còn lại và kiểm tra\nHai góc nhọn của tam giác vuông phụ nhau, nên $C=90^\\circ-60^\\circ=30^\\circ$.\nKiểm tra Pythagore: $6^2+(6\\sqrt3)^2=36+108=144=12^2$.\nBước 5: Kết luận\nBộ kết quả là $(6\\sqrt3\\text{ cm};12\\text{ cm};30^\\circ)$. Chọn B.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-06",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Máy đo đặt cao hơn mặt đất",
          "prompt": "Mặt đất nằm ngang. Mắt ngắm $E$ cao $1{,}5$ m, cách chân cột thẳng đứng $H$ theo phương ngang $20$ m. Góc nâng từ $E$ đến đỉnh $T$ là $45^\\circ$. Tính chiều cao cột.",
          "svg": svgGrade9Trig({"points":{"O":[-20,0],"E":[-20,1.5],"H":[0,0],"K":[0,1.5],"T":[0,21.5]},"edges":[["O","H","20 m"],["O","E","1,5 m"],["H","K",""],["K","T",""],["E","K","",true],["E","T",""]],"right":[["E","K","T"]],"angles":[["K","E","T","45°"]],"title":"Máy đo đặt cao hơn mặt đất"}),
          "options": [
            "A. $20$ m.",
            "B. $18{,}5$ m.",
            "C. $21{,}5$ m.",
            "D. $30$ m."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Dựng tam giác vuông dùng góc nâng\nQua mắt ngắm $E$, kẻ đường ngang cắt cột tại $K$.\nCột thẳng đứng nên $EK\\perp KT$; góc giữa $EK$ và tia ngắm $ET$ bằng $45^\\circ$.\nBước 2: Xác định các đoạn đã biết\nKhoảng cách ngang đến cột là $EK=20$ m.\nMặt đất ngang và mắt cao $1{,}5$ m nên $HK=1{,}5$ m.\nBước 3: Tính phần cột phía trên mắt\nTrong tam giác vuông $EKT$, $\\tan45^\\circ=KT/EK$.\nSuy ra $KT=20\\cdot1=20$ m.\nBước 4: Ghép chiều cao toàn cột\nChiều cao cần tìm tính từ chân cột $H$, không phải từ mức mắt $K$.\nVì vậy $HT=HK+KT=1{,}5+20=21{,}5$ m.\nBước 5: Kết luận\nCột cao $21{,}5$ m. Chọn C.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-07",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai vị trí nhìn cùng phía cột",
          "prompt": "Trên mặt đất ngang, $A,B,H$ theo thứ tự thẳng hàng, $AB=20$ m. Cột $HT$ thẳng đứng tại $H$. Góc nâng từ $A$ là $30^\\circ$, từ $B$ là $60^\\circ$; coi điểm ngắm sát mặt đất. Tính $HT$.",
          "svg": svgGrade9Trig({"points":{"A":[-30,0],"B":[-10,0],"H":[0,0],"T":[0,17.32050807568877]},"edges":[["A","B","20 m"],["B","H",""],["H","T",""],["A","T",""],["B","T",""]],"right":[["B","H","T"]],"angles":[["H","A","T","30°"],["H","B","T","60°"]],"title":"Hai vị trí nhìn cùng phía cột"}),
          "options": [
            "A. $10\\sqrt3$ m.",
            "B. $20\\sqrt3$ m.",
            "C. $10$ m.",
            "D. $20$ m."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đặt các độ dài và liên hệ vị trí\nĐặt $BH=d>0$, $HT=h>0$.\nVì $A,B,H$ theo thứ tự trên một đường thẳng và $AB=20$, nên $AH=d+20$.\nBước 2: Dùng góc nâng tại B\nTam giác $BHT$ vuông tại $H$, nên $h/d=\\tan60^\\circ=\\sqrt3$.\nDo đó $h=d\\sqrt3$.\nBước 3: Dùng góc nâng tại A\nTương tự, $h/(d+20)=\\tan30^\\circ=1/\\sqrt3$.\nThay $h=d\\sqrt3$ vào, nhân với $\\sqrt3$ được $3d=d+20$, nên $d=10$.\nBước 4: Tính chiều cao và thử lại\nCó $h=10\\sqrt3$ m; khi đó $AH=30$ m.\nHai tỉ số $h/BH=\\sqrt3$ và $h/AH=1/\\sqrt3$ khớp cả hai góc đã cho.\nBước 5: Kết luận\n$HT=10\\sqrt3$ m. Chọn A.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-08",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Khôi phục cả đoạn cao trước khi dùng sin",
          "prompt": "Thang $BC$ tựa vào tường đứng $AC$, chân tường $A$ trên sân ngang $AB$. Điểm $D$ trên $AC$ có $AD=3$ m, $DC=5$ m. Biết $\\sin B=4/5$. Tính chiều dài thang.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[6,0],"C":[0,8],"D":[0,3]},"edges":[["A","B",""],["A","D","3 m"],["D","C","5 m"],["B","C",""]],"right":[["B","A","C"]],"angles":[],"title":"Khôi phục cả đoạn cao trước khi dùng sin"}),
          "options": [
            "A. $6{,}25$ m.",
            "B. $8$ m.",
            "C. $6{,}4$ m.",
            "D. $10$ m."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định chiều cao chạm tường\nVì $D$ nằm trên đoạn $AC$, có $AC=AD+DC=3+5=8$ m.\nĐoạn $DC=5$ m chỉ là một phần chiều cao, không phải cạnh đối của góc $B$.\nBước 2: Chọn định nghĩa sin\nTường vuông góc sân nên tam giác $ABC$ vuông tại $A$.\nDây thang $BC$ là cạnh huyền, còn $AC$ là cạnh đối góc $B$.\nBước 3: Tính độ dài thang\nCó $\\sin B=AC/BC=8/BC=4/5$.\nNhân chéo: $4BC=40$, nên $BC=10$ m.\nBước 4: Kiểm tra hình học\nĐộ dài $10$ m lớn hơn chiều cao $8$ m, phù hợp cạnh huyền.\nCạnh ngang là $AB=\\sqrt{10^2-8^2}=6$ m, dương nên cấu hình tồn tại.\nBước 5: Kết luận\nThang dài $10$ m. Chọn D.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-09",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc hạ đo từ phương ngang",
          "prompt": "Đỉnh $T$ của trạm quan sát cao $24$ m so với sân ngang. Góc hạ từ phương ngang qua $T$ xuống điểm $B$ trên sân là $60^\\circ$. Gọi $A$ là chân trạm. Tính khoảng cách ngang $AB$.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[13.856406460551018,0],"T":[0,24],"K":[13.856406460551018,24]},"edges":[["A","B","?"],["A","T","24 m"],["T","B",""],["T","K","",true]],"right":[["B","A","T"]],"angles":[["K","T","B","60°"]],"notes":["TK là phương ngang"],"title":"Góc hạ đo từ phương ngang"}),
          "options": [
            "A. $24\\sqrt3$ m.",
            "B. $8\\sqrt3$ m.",
            "C. $12\\sqrt3$ m.",
            "D. $12$ m."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Chuyển góc hạ thành góc nâng\nPhương ngang qua $T$ song song với mặt sân $AB$.\nTia ngắm $TB$ cắt hai đường song song, nên góc nâng tại $B$ bằng góc hạ $60^\\circ$.\nBước 2: Xác định tam giác vuông\nTrạm thẳng đứng nên $AT\\perp AB$ và $AT=24$ m.\nĐối với góc tại $B$, $AT$ là cạnh đối, $AB$ là cạnh kề.\nBước 3: Lập và giải tỉ số\nCó $\\tan60^\\circ=AT/AB=24/AB$.\nDo đó $AB=24/\\sqrt3$.\nBước 4: Rút gọn và kiểm tra\nNhân tử và mẫu với $\\sqrt3$: $AB=24\\sqrt3/3=8\\sqrt3$ m.\nGóc hạ đo từ phương ngang; không dùng góc $30^\\circ$ giữa tia ngắm và phương đứng thay cho nó.\nBước 5: Kết luận\nKhoảng cách ngang là $8\\sqrt3$ m. Chọn B.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-10",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Nâng điểm neo nhưng giữ chân dây",
          "prompt": "Một dây căng dài $15$ m nối điểm neo trên cột thẳng đứng với điểm $B$ cố định trên nền ngang. Ban đầu góc dây với nền là $\\alpha$, $\\sin\\alpha=3/5$. Nâng điểm neo lên thêm $7$ m dọc cột, giữ nguyên $B$. Dây mới căng thẳng cần dài bao nhiêu?",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[12,0],"C":[0,9],"T":[0,16]},"edges":[["A","B",""],["A","C",""],["C","T","7 m"],["B","C","15 m"],["B","T","?"]],"right":[["B","A","T"]],"angles":[["A","B","C","α"]],"title":"Nâng điểm neo nhưng giữ chân dây"}),
          "options": [
            "A. $22$ m.",
            "B. $16$ m.",
            "C. $20$ m.",
            "D. $18$ m."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tính độ cao neo ban đầu\nDây dài $15$ m là cạnh huyền của tam giác vuông.\nVì $\\sin\\alpha=3/5$, độ cao ban đầu là $h=15\\cdot3/5=9$ m.\nBước 2: Tìm khoảng cách ngang cố định\nÁp dụng Pythagore, khoảng cách từ $B$ đến chân cột là $d=\\sqrt{15^2-9^2}=12$ m.\nĐiểm $B$ giữ nguyên nên khoảng cách này không đổi khi nâng neo.\nBước 3: Tính độ cao neo mới\nNeo được nâng thẳng đứng thêm $7$ m, nên độ cao mới là $9+7=16$ m.\nBước 4: Tính chiều dài dây mới\nDây mới là cạnh huyền của tam giác vuông có hai cạnh góc vuông $12$ và $16$ m.\nDo đó độ dài là $\\sqrt{12^2+16^2}=\\sqrt{400}=20$ m.\nKhông cộng trực tiếp $7$ vào dây cũ vì $7$ m là thay đổi theo phương đứng, không theo phương dây.\nBước 5: Kết luận\nDây mới cần dài $20$ m. Chọn C.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-11",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai trạm có cao độ khác nhau",
          "prompt": "Điểm ngắm $B$ cao hơn điểm ngắm $A$ đúng $6$ m và gần cột thẳng đứng hơn $30$ m theo phương ngang. Chân cột $H$ cùng cao độ với $A$; cả hai trạm cùng phía cột và nằm trong cùng mặt phẳng đứng. Góc nâng từ $A$ có tang bằng $2/5$, từ $B$ là $45^\\circ$. Tính chiều cao cột $HT$.",
          "svg": svgGrade9Trig({"points":{"A":[-40,0],"B":[-10,6],"H":[0,0],"K":[0,6],"T":[0,16],"J":[-10,0]},"edges":[["A","J","30 m"],["J","H",""],["J","B","6 m"],["H","K",""],["K","T",""],["B","K","",true],["A","T",""],["B","T",""]],"right":[["B","K","T"],["A","H","T"]],"angles":[["H","A","T","α"],["K","B","T","45°"]],"title":"Hai trạm có cao độ khác nhau"}),
          "options": [
            "A. $16$ m.",
            "B. $20$ m.",
            "C. $24$ m.",
            "D. $10$ m."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đặt khoảng cách và chiều cao\nGọi $AH=d>30$ m và $HT=h>6$ m.\nTừ $B$, khoảng cách ngang đến cột là $d-30$; chênh cao lên đỉnh là $h-6$.\nBước 2: Viết hệ thức từ A\nVì $A$ cùng cao độ với chân cột, tỉ số tang cho $h/d=2/5$.\nSuy ra $h=2d/5$.\nBước 3: Viết hệ thức từ B\nGóc nâng $45^\\circ$ có tang bằng $1$, nên $(h-6)/(d-30)=1$.\nDo đó $h-6=d-30$, tức $h=d-24$.\nBước 4: Giải và kiểm tra điều kiện\nTừ $2d/5=d-24$, được $3d/5=24$, nên $d=40$ và $h=16$.\nCó $d>30$, $h>6$; từ $B$ hai đoạn chênh cao và ngang đều bằng $10$ m, đúng góc $45^\\circ$.\nBước 5: Kết luận\nCột cao $HT=16$ m. Chọn A.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-nangCao-12",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Chỉ nhận vị trí có thể đứng đo",
          "prompt": "Cột $HT$ thẳng đứng cao $h$ m, với $20<h<24$. Trên nền ngang, $H,P,B$ thẳng hàng theo thứ tự, $HB=40$ m. Hai góc nâng từ $P$ và $B$ phụ nhau. Vì có chướng ngại, chỉ được đặt $P$ ở vị trí có $HP$ là số nguyên mét và $12\\le HP\\le16$. Có bao nhiêu giá trị $HP$ có thể phù hợp với một chiều cao $h$ trong khoảng trên?",
          "svg": svgGrade9Trig({"points":{"H":[0,0],"P":[13,0],"B":[40,0],"T":[0,22.80350850198276]},"edges":[["H","P","x"],["P","B",""],["H","T","h"],["T","P",""],["T","B",""]],"right":[["B","H","T"]],"angles":[["H","P","T","α"],["H","B","T","β"]],"notes":["HB = 40 m; α + β = 90°"],"title":"Chỉ nhận vị trí có thể đứng đo"}),
          "options": [
            "A. 5.",
            "B. 4.",
            "C. 3.",
            "D. 2."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đặt vị trí điểm P\nGọi $HP=x$ m, với $x$ nguyên và $12\\le x\\le16$.\nDo $HB=40$, hai góc nâng có tang lần lượt là $h/x$ và $h/40$.\nBước 2: Dùng điều kiện hai góc phụ nhau\nHai góc nhọn phụ nhau có tích các tang bằng $1$.\nVì vậy $(h/x)(h/40)=1$, hay $h^2=40x$.\nBước 3: Dùng khoảng chiều cao\nTừ $20<h<24$ và $h>0$, bình phương được $400<h^2<576$.\nThay $h^2=40x$ rồi chia cho $40$: $10<x<14{,}4$.\nKết hợp điều kiện nguyên và $12\\le x\\le16$, chỉ còn $x=12,13,14$.\nBước 4: Kiểm tra mỗi vị trí đều dựng được\nVới từng giá trị này, chọn $h=\\sqrt{40x}$ thì $20<h<24$.\nHai tang dương và nghịch đảo nhau, nên hai góc nâng nhọn thực sự phụ nhau; mọi vị trí đã liệt kê đều được nhận.\nBước 5: Kết luận\nCó $3$ giá trị của $HP$. Chọn C.",
          "manThi": "heThucLuong"
        }
      ],
      "hsg": [
        {
          "id": "l9-he-thuc-luong-hsg-01",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "dien",
          "title": "Chiều dài phần đường dốc",
          "prompt": "Một đường dốc thẳng nghiêng $30^\\circ$ so với mặt đất ngang, đưa người đi lên cao đúng $3$ m. Tính chiều dài phần dốc, đơn vị m; không tính các đoạn nằm ngang ở hai đầu.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[5.196152422706632,0],"C":[0,3]},"edges":[["A","B",""],["A","C","3 m"],["B","C",""]],"right":[["B","A","C"]],"angles":[["A","B","C","30°"]],"title":"Chiều dài phần đường dốc"}),
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Mô hình hóa đường dốc\nĐường dốc, hình chiếu ngang và đoạn chênh cao tạo thành tam giác vuông.\nGọi $L>0$ là chiều dài dốc; đây là cạnh huyền. Độ cao $3$ m là cạnh đối góc $30^\\circ$.\nBước 2: Chọn tỉ số lượng giác\nĐịnh nghĩa sin trong tam giác vuông cho $\\sin30^\\circ=3/L$.\nDùng sin vì đã biết cạnh đối và cần tìm cạnh huyền.\nBước 3: Tính chiều dài\n$\\sin30^\\circ=1/2$, nên $1/2=3/L$.\nNhân chéo được $L=6$ m.\nBước 4: Kiểm ý nghĩa kết quả\n$6>3$ nên cạnh huyền lớn hơn cạnh góc vuông, phù hợp.\nHình chiếu ngang bằng $6\\cos30^\\circ=3\\sqrt3$ m, khác chiều dài dốc; đây không phải đại lượng đề hỏi.\nBước 5: Kết luận\nPhần dốc dài $6$ m.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-hsg-02",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đo bề rộng sông từ hai phía chân vuông góc",
          "prompt": "Hai bờ sông thẳng và song song. Trên bờ gần lấy $A,B$ với $AB=16\\sqrt3$ m. Cây $T$ ở bờ đối diện; chân đường vuông góc từ $T$ xuống đường $AB$ là $H$ nằm giữa $A,B$. Đo được $\\widehat{TAB}=30^\\circ$, $\\widehat{TBA}=60^\\circ$. Tính chiều rộng sông $TH$, đơn vị m.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"H":[20.784609690826528,0],"B":[27.712812921102035,0],"T":[20.784609690826528,12],"J":[0,12],"K":[27.712812921102035,12]},"edges":[["A","H",""],["H","B",""],["J","T","",true],["T","K","",true],["H","T","?"],["A","T",""],["B","T",""]],"right":[["A","H","T"]],"angles":[["B","A","T","30°"],["A","B","T","60°"]],"notes":["AB = 16√3 m; JK là bờ đối diện"],"title":"Đo bề rộng sông từ hai phía chân vuông góc"}),
          "correctAnswer": "12",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Phân tích vị trí chân vuông góc\nĐặt $TH=h>0$. Vì $H$ nằm giữa $A,B$, ta có $AH+BH=AB$.\nHai tam giác $AHT,BHT$ vuông tại $H$; các góc ở $A,B$ lần lượt là $30^\\circ,60^\\circ$.\nBước 2: Biểu diễn đoạn AH\nTrong tam giác $AHT$, $\\tan30^\\circ=TH/AH=h/AH$.\nDo đó $AH=h/\\tan30^\\circ=h\\sqrt3$.\nBước 3: Biểu diễn đoạn BH và lập phương trình\nTương tự, $BH=h/\\tan60^\\circ=h/\\sqrt3$.\nCộng hai đoạn: $h\\sqrt3+h/\\sqrt3=16\\sqrt3$.\nQuy đồng vế trái được $4h/\\sqrt3=16\\sqrt3$, nên $4h=48$ và $h=12$.\nBước 4: Kiểm số đo\n$AH=12\\sqrt3$, $BH=4\\sqrt3$, tổng đúng $16\\sqrt3$.\nCác tỉ số $TH/AH=1/\\sqrt3$ và $TH/BH=\\sqrt3$ khớp hai góc đã cho.\nBước 5: Kết luận\nChiều rộng sông là $12$ m. Phải cộng hai đoạn vì chân vuông góc ở giữa hai điểm đo.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-hsg-03",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đo khoảng cách giữa hai tầng",
          "prompt": "Từ điểm ngắm $E$ nhìn hai ban công $P,Q$ trên cùng đường thẳng đứng của tòa nhà đối diện. $P$ thấp hơn $E$, $Q$ cao hơn $E$. Tia nhìn $EP$ dài $20$ m. Góc hạ tới $P$ là $30^\\circ$, góc nâng tới $Q$ là $45^\\circ$, đều đo từ phương ngang qua $E$. Tính $PQ$ theo mét, làm tròn đến một chữ số thập phân.",
          "svg": svgGrade9Trig({"points":{"E":[-17.32050807568877,10],"P":[0,0],"K":[0,10],"Q":[0,27.32050807568877]},"edges":[["E","K","",true],["P","K",""],["K","Q",""],["E","P","20 m"],["E","Q",""]],"right":[["E","K","Q"]],"angles":[["P","E","K","30°",34],["K","E","Q","45°",34]],"notes":["EK là phương ngang; cần tìm PQ"],"title":"Đo khoảng cách giữa hai tầng"}),
          "correctAnswer": "27.3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Thêm đường ngang qua điểm ngắm\nKẻ $EK$ nằm ngang, với $K$ thuộc đường thẳng đứng $PQ$.\nVì $P$ thấp hơn $E$ và $Q$ cao hơn $E$, $K$ nằm giữa $P,Q$. Do đó $PQ=PK+KQ$.\nBước 2: Tính phần độ cao phía dưới\nTrong tam giác vuông $EKP$, cạnh huyền $EP=20$ m và góc hạ ở $E$ bằng $30^\\circ$.\n$PK=20\\sin30^\\circ=10$ m; $EK=20\\cos30^\\circ=10\\sqrt3$ m.\nBước 3: Tính phần độ cao phía trên\nTam giác $EKQ$ vuông tại $K$, góc nâng ở $E$ là $45^\\circ$.\n$KQ=EK\\tan45^\\circ=10\\sqrt3$ m vì $\\tan45^\\circ=1$.\nBước 4: Cộng và làm tròn\n$PQ=10+10\\sqrt3\\approx27{,}3205$ m.\nChữ số hàng phần trăm là $2<5$, nên làm tròn đến một chữ số thập phân được $27{,}3$ m.\nBước 5: Kết luận\nHai ban công cách nhau khoảng $27{,}3$ m. Không lấy hiệu vì chúng ở hai phía của đường ngang qua mắt; không làm tròn các đoạn trung gian quá sớm.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-hsg-04",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Tổng hai bình phương tỉ số",
          "prompt": "Với góc nhọn $\\alpha$, chứng minh $\\sin^2\\alpha+\\cos^2\\alpha=1$ từ định nghĩa trong tam giác vuông. Nếu thêm $\\sin\\alpha+\\cos\\alpha=7/5$ và $\\alpha<45^\\circ$, hãy xác định riêng $\\sin\\alpha$ và $\\cos\\alpha$.",
          "svg": "",
          "solution": "Bước 1: Dùng định nghĩa trong tam giác vuông\nGọi cạnh đối, cạnh kề góc $\\alpha$ và cạnh huyền lần lượt là $a,b,c>0$.\nTheo định nghĩa, $\\sin\\alpha=a/c$, $\\cos\\alpha=b/c$.\nBước 2: Chứng minh hệ thức cơ bản\nPythagore cho $a^2+b^2=c^2$.\nChia cho $c^2>0$ được $(a/c)^2+(b/c)^2=1$, tức $\\sin^2\\alpha+\\cos^2\\alpha=1$.\nBước 3: Tìm hai giá trị lượng giác chưa xét thứ tự\nĐặt $p=\\sin\\alpha$, $q=\\cos\\alpha$, nên $p,q>0$.\nTừ $p+q=7/5$ và $p^2+q^2=1$, có $2pq=49/25-1=24/25$, nên $pq=12/25$.\nDo đó $p,q$ là hai nghiệm của $t^2-(7/5)t+12/25=0$, tương đương $(5t-3)(5t-4)=0$.\nHai giá trị là $3/5$ và $4/5$.\nBước 4: Xác định đúng thứ tự\nTrong tam giác vuông, góc còn lại là $90^\\circ-\\alpha>45^\\circ>\\alpha$.\nCạnh đối diện góc nhỏ hơn ngắn hơn, nên $a<b$, tức $p<q$.\nBước 5: Kết luận\n$\\sin\\alpha=3/5$, $\\cos\\alpha=4/5$.\nTam giác vuông có cạnh $3,4,5$ xác nhận các giá trị này tồn tại. Nếu thiếu $\\alpha<45^\\circ$, chưa phân biệt được cặp trên với cặp đảo.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-hsg-05",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Công thức hai điểm ngắm cùng phía",
          "prompt": "Trên nền ngang, $A,B,H$ thẳng hàng theo thứ tự, $AB=d>0$, $HT=h>0$ vuông góc nền. Góc nâng từ $A$ là $\\alpha$, từ $B$ là $\\beta$, với $0<\\alpha<\\beta<90^\\circ$. Chứng minh $h=\\frac{d\\tan\\alpha\\tan\\beta}{\\tan\\beta-\\tan\\alpha}$ và giải thích vì sao mẫu số dương.",
          "svg": svgGrade9Trig({"points":{"A":[-30,0],"B":[-10,0],"H":[0,0],"T":[0,20]},"edges":[["A","B","d"],["B","H",""],["H","T","h"],["A","T",""],["B","T",""]],"right":[["B","H","T"]],"angles":[["H","A","T","α"],["H","B","T","β"]],"title":"Công thức hai điểm ngắm cùng phía"}),
          "solution": "Bước 1: Biểu diễn hai khoảng cách ngang\nĐặt $BH=x>0$. Vì $A,B,H$ theo thứ tự và $AB=d$, có $AH=x+d$.\nHai tam giác $BHT,AHT$ đều vuông tại $H$.\nBước 2: Viết công thức tang\nTừ điểm $B$, $\\tan\\beta=h/x$, nên $h=x\\tan\\beta$.\nTừ điểm $A$, $\\tan\\alpha=h/(x+d)$, nên $h=(x+d)\\tan\\alpha$.\nBước 3: Liên kết và xét mẫu trước khi chia\nĐồng nhất hai biểu thức của $h$: $x\\tan\\beta=x\\tan\\alpha+d\\tan\\alpha$.\nVậy $x(\\tan\\beta-\\tan\\alpha)=d\\tan\\alpha$.\nVế phải dương vì $d>0$ và góc $\\alpha$ nhọn; $x>0$ nên $\\tan\\beta-\\tan\\alpha>0$.\nBước 4: Tìm chiều cao\nChia cho hiệu tang dương được $x=d\\tan\\alpha/(\\tan\\beta-\\tan\\alpha)$.\nThay vào $h=x\\tan\\beta$, thu được $h=d\\tan\\alpha\\tan\\beta/(\\tan\\beta-\\tan\\alpha)$.\nBước 5: Kết luận\nCông thức được chứng minh với mẫu dương. Nếu hai góc bằng nhau, phương trình ở bước 3 có vế trái $0$ nhưng vế phải dương, nên cấu hình ấy không phù hợp giả thiết.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-hsg-06",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Hai bóng cùng thời điểm",
          "prompt": "Trên cùng nền ngang, một cọc thẳng đứng cao $3$ m có bóng dài $4$ m. Cùng lúc, cây thẳng đứng cao $12$ m có bóng dài bao nhiêu mét? Coi các tia nắng song song và cây không bị che bóng.",
          "svg": "",
          "correctAnswer": "16",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nhận diện góc chung\nGọi $\\alpha$ là góc giữa tia nắng và nền ngang.\nCác tia nắng song song và nền cùng nằm ngang nên cọc và cây tạo cùng góc $\\alpha$ với bóng của chúng.\nBước 2: Tính tang từ cọc\nTam giác tạo bởi cọc thẳng đứng và bóng vuông tại chân cọc.\nDo đó $\\tan\\alpha=3/4$: chiều cao là cạnh đối, bóng là cạnh kề.\nBước 3: Áp dụng cho cây\nGọi bóng cây dài $L>0$ m. Ta có $\\tan\\alpha=12/L$.\nVì cùng góc chiếu, $12/L=3/4$.\nBước 4: Giải và kiểm tỉ lệ\nNhân chéo: $48=3L$, nên $L=16$ m.\nCây cao gấp $4$ lần cọc và bóng cũng dài gấp $4$ lần, phù hợp cùng góc chiếu.\nBước 5: Kết luận\nBóng cây dài $16$ m. Kết quả dùng giả thiết cây không bị che bóng và nền ngang chung.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-hsg-07",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai dốc có chiều lên xuống khác nhau",
          "prompt": "Một lối đi nằm trong cùng mặt phẳng đứng. Đoạn $AB$ dài $12$ m đi lên, nghiêng $30^\\circ$ so với phương ngang. Đoạn $BC$ dài $4\\sqrt3$ m đi xuống, nghiêng $60^\\circ$ so với phương ngang. Cả hai đều tiến về bên phải, không quay ngược. Tính khoảng cách thẳng $AC$ theo mét, làm tròn đến một chữ số thập phân.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"B":[10.392304845413264,6],"C":[13.856406460551018,0],"H":[10.392304845413264,0],"K":[13.856406460551018,6]},"edges":[["A","B","12 m"],["B","C","4√3 m"],["A","C","?"],["B","H","",true],["B","K","",true]],"right":[["A","H","B"]],"angles":[["C","A","B","30°"],["K","B","C","60°"]],"title":"Hai dốc có chiều lên xuống khác nhau"}),
          "correctAnswer": "13.9",
          "dapAnChapNhan": [
            "13,9",
            "139/10"
          ],
          "solution": "Bước 1: Tách mỗi đoạn thành chuyển dịch ngang và đứng\nĐề hỏi khoảng cách thẳng $AC$, không hỏi độ dài đường đi $AB+BC$.\nVì hai đoạn đều tiến về bên phải, chuyển dịch ngang được cộng; đoạn lên và đoạn xuống có chuyển dịch đứng trái dấu.\nBước 2: Tính chuyển dịch của AB\nNgang: $12\\cos30^\\circ=6\\sqrt3$ m.\nĐứng: đi lên $12\\sin30^\\circ=6$ m.\nBước 3: Tính chuyển dịch của BC\nNgang: $4\\sqrt3\\cos60^\\circ=2\\sqrt3$ m.\nĐứng: đi xuống $4\\sqrt3\\sin60^\\circ=6$ m.\nBước 4: Kết hợp hai đoạn\nChênh cao từ $A$ đến $C$ bằng $6-6=0$, nên $A,C$ cùng cao độ.\nKhoảng cách thẳng $AC$ vì thế chính là tổng chuyển dịch ngang: $6\\sqrt3+2\\sqrt3=8\\sqrt3$ m.\nBước 5: Kết luận và làm tròn\n$8\\sqrt3\\approx13{,}8564$, làm tròn đến một chữ số thập phân được $13{,}9$ m.\nKhông cộng hai độ chênh cao cùng dấu và không dùng tổng hai đoạn dốc thay cho $AC$.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-hsg-08",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Cột đặt trên sườn dốc",
          "prompt": "Sườn đất thẳng $AB$ dài $12$ m, nghiêng lên $30^\\circ$ so với phương ngang qua $A$. Cột $BT$ thẳng đứng đặt tại $B$. Từ $A$ nhìn đỉnh $T$ với góc nâng $60^\\circ$; điểm ngắm sát đất, mọi điểm trong cùng mặt phẳng đứng. Tính riêng chiều cao cột $BT$, đơn vị m.",
          "svg": svgGrade9Trig({"points":{"A":[0,0],"H":[10.392304845413264,0],"B":[10.392304845413264,6],"T":[10.392304845413264,18]},"edges":[["A","B","12 m"],["A","H","",true],["H","B","",true],["B","T","?"],["A","T",""]],"right":[["A","H","T"]],"angles":[["H","A","B","30°",22],["H","A","T","60°",44]],"title":"Cột đặt trên sườn dốc"}),
          "correctAnswer": "12",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Phân biệt chiều cao cột và độ cao đỉnh\nHạ $BH$ vuông góc phương ngang qua $A$. Vì $BT$ thẳng đứng, $H,B,T$ thẳng hàng theo thứ tự.\nĐộ cao đỉnh so với $A$ là $HT$, còn chiều cao riêng cột là $BT=HT-BH$.\nBước 2: Tính nền ngang và độ cao chân cột\nTam giác $ABH$ vuông tại $H$, có $AB=12$ m, góc ở $A$ bằng $30^\\circ$.\n$AH=12\\cos30^\\circ=6\\sqrt3$ m; $BH=12\\sin30^\\circ=6$ m.\nBước 3: Tính độ cao đỉnh\nTrong tam giác $AHT$ vuông tại $H$, $\\tan60^\\circ=HT/AH$.\nVì vậy $HT=6\\sqrt3\\cdot\\sqrt3=18$ m.\nBước 4: Trừ độ cao sườn đất\n$BT=HT-BH=18-6=12$ m.\nKết quả dương, phù hợp đỉnh cột nằm phía trên chân cột.\nBước 5: Kết luận\nCột cao $12$ m. Số $18$ m là độ cao đỉnh so với đường ngang qua điểm ngắm, không phải chiều cao riêng của cột.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-hsg-09",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chia đồng nhất thức phải giữ mẫu khác không",
          "prompt": "Cho hai góc nhọn $\\alpha,\\beta$ thỏa $\\tan\\beta=2\\tan\\alpha$. Chứng minh $1+\\tan^2\\alpha=1/\\cos^2\\alpha$, rồi dùng công thức tương tự cho $\\beta$ để chứng minh $\\frac12\\cos\\alpha<\\cos\\beta<\\cos\\alpha$. Không dùng đạo hàm.",
          "svg": "",
          "solution": "Bước 1: Chứng minh công thức cần dùng\nVì $\\alpha$ nhọn, $\\cos\\alpha>0$. Chia $\\sin^2\\alpha+\\cos^2\\alpha=1$ cho $\\cos^2\\alpha$ được $\\tan^2\\alpha+1=1/\\cos^2\\alpha$.\nCông thức tương tự đúng cho góc nhọn $\\beta$.\nBước 2: Đưa về một biến dương\nĐặt $t=\\tan\\alpha>0$, nên $\\tan\\beta=2t$.\nSuy ra $\\cos^2\\alpha=1/(1+t^2)$ và $\\cos^2\\beta=1/(1+4t^2)$.\nBước 3: Chứng minh giới hạn trên\nDo $t>0$, có $1+4t^2>1+t^2>0$.\nLấy nghịch đảo hai số dương đổi chiều, được $\\cos^2\\beta<\\cos^2\\alpha$.\nBước 4: Chứng minh giới hạn dưới\nTa có $4(1+t^2)-(1+4t^2)=3>0$.\nVì các mẫu dương, $1/(1+4t^2)>1/[4(1+t^2)]=\\cos^2\\alpha/4$.\nKết hợp hai phía: $\\cos^2\\alpha/4<\\cos^2\\beta<\\cos^2\\alpha$.\nBước 5: Lấy căn và kết luận\nHai côsin đều dương, nên lấy căn giữ thứ tự: $\\cos\\alpha/2<\\cos\\beta<\\cos\\alpha$.\nDấu bằng không xảy ra. Đặc biệt, tang tăng gấp đôi không có nghĩa côsin giảm đúng một nửa.",
          "manThi": "heThucLuong"
        },
        {
          "id": "l9-he-thuc-luong-hsg-10",
          "lop": 9,
          "chuDe": "he-thuc-luong",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Diện tích mái từ đường cao và hai góc đáy",
          "prompt": "Mặt cắt mái là tam giác $ABC$ có hai góc đáy $B=\\alpha,C=\\beta$ đều nhọn. Đường cao $AH=h>0$ hạ xuống $BC$. Chứng minh $S_{ABC}=\\frac{h^2}{2}(\\cot\\alpha+\\cot\\beta)$. Sau đó tính diện tích khi $h=12$ m, $\\tan\\alpha=1$, $\\tan\\beta=3/4$.",
          "svg": svgGrade9Trig({"points":{"B":[-12,0],"H":[0,0],"C":[16,0],"A":[0,12]},"edges":[["B","C",""],["A","B",""],["A","C",""],["A","H","h"]],"right":[["B","H","A"]],"angles":[["C","B","A","α"],["B","C","A","β"]],"title":"Diện tích mái từ đường cao và hai góc đáy"}),
          "solution": "Bước 1: Xác định vị trí chân đường cao\nHai góc đáy đều nhọn nên chân đường cao $H$ nằm bên trong cạnh $BC$.\nDo đó $BC=BH+CH$, và hai tam giác $ABH,ACH$ đều vuông tại $H$.\nBước 2: Biểu diễn hai đoạn đáy bằng cotang\n$\\tan\\alpha=h/BH$ nên $BH=h/\\tan\\alpha=h\\cot\\alpha$.\nTương tự $CH=h/\\tan\\beta=h\\cot\\beta$.\nCác góc nhọn có tang dương, nên phép chia hợp lệ và hai đoạn dương.\nBước 3: Dựng công thức diện tích\nCộng hai đoạn: $BC=h(\\cot\\alpha+\\cot\\beta)$.\nDùng $S_{ABC}=BC\\cdot h/2$, được $S_{ABC}=h^2(\\cot\\alpha+\\cot\\beta)/2$.\nBước 4: Thay số cụ thể\nVới $h=12$, $\\tan\\alpha=1$, có $BH=12$ m.\nVới $\\tan\\beta=3/4$, có $CH=12:(3/4)=16$ m.\nVậy $BC=28$ m và diện tích bằng $28\\cdot12/2=168$ m².\nBước 5: Kết luận\nCông thức đã được chứng minh, diện tích ở trường hợp cho sẵn là $168$ m². Bước cộng $BH+CH$ dựa vào vị trí $H$ trong cạnh, không dùng tùy ý khi chân đường cao nằm ngoài cạnh.",
          "manThi": "heThucLuong"
        }
      ]
    },
    'duong-tron': {
      "kha": [
        {
          "id": "l9-duong-tron-kha-01",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Dây dài nhất và trục đối xứng",
          "prompt": "Đường tròn tâm $O$ bán kính $5$ cm. Khẳng định nào đúng?",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[-5,0],"B":[5,0]},"circles":[{"center":[0,0],"r":5}],"edges":[["A","B","10 cm"]],"title":"Dây dài nhất và trục đối xứng"}),
          "options": [
            "A. Dây dài nhất bằng $5$ cm; chỉ một trục đối xứng.",
            "B. Dây dài nhất bằng $10$ cm; mọi đường qua $O$ là trục đối xứng.",
            "C. Mọi dây đều dài $10$ cm.",
            "D. Dây dài nhất bằng $10$ cm; tâm đối xứng nằm trên đường tròn."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tính đường kính\nVới bán kính $R=5$ cm, đường kính bằng $2R=10$ cm.\nBước 2: Giải thích dây dài nhất\nVới hai điểm $A,B$ trên đường tròn, có $AB\\le AO+OB=2R$.\nDấu bằng đạt được khi $A,O,B$ thẳng hàng và $O$ nằm giữa, tức $AB$ là đường kính. Vì vậy dây dài nhất bằng $10$ cm.\nBước 3: Xác định các trục đối xứng\nQua phép đối xứng qua một đường thẳng đi qua $O$, khoảng cách của mỗi điểm đến $O$ vẫn bằng $R$.\nẢnh của điểm trên đường tròn vẫn thuộc đường tròn, nên mọi đường thẳng qua $O$ là trục đối xứng.\nBước 4: Phân biệt tâm và điểm trên đường tròn\nTâm đối xứng là $O$ vì phép đối xứng tâm $O$ đưa mỗi đầu đường kính sang đầu còn lại.\n$O$ không nằm trên đường tròn khi $R=5>0$; các dây không qua tâm ngắn hơn $10$ cm.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l9-duong-tron-kha-02",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Khoảng cách từ tâm đến đường thẳng",
          "prompt": "Đường tròn $(O;5\\text{ cm})$ và đường thẳng $d$ cách $O$ một khoảng $3$ cm. $d$ có bao nhiêu điểm chung với đường tròn?",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"H":[0,3],"M":[-6,3],"N":[6,3]},"circles":[{"center":[0,0],"r":5}],"edges":[["M","N","d"],["O","H","3 cm"]],"right":[["O","H","N"]],"edgeLabelOffsets":{"M-N":[135,-42]},"title":"Khoảng cách từ tâm đến đường thẳng"}),
          "options": [
            "A. 0.",
            "B. 1.",
            "C. 2.",
            "D. Vô số."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Ghi hai độ dài cần so sánh\nBán kính là $R=5$ cm; khoảng cách vuông góc từ $O$ đến đường thẳng $d$ là $3$ cm.\nBước 2: Áp dụng điều kiện vị trí tương đối\nKhi khoảng cách từ tâm đến đường thẳng nhỏ hơn bán kính, đường thẳng cắt đường tròn tại hai điểm.\nỞ đây $3<5$, nên thuộc trường hợp này.\nBước 3: Giải thích bằng chân đường vuông góc\nGọi $H$ là chân vuông góc từ $O$ xuống $d$.\nĐiểm giao $M$ phải thỏa $HM^2=OM^2-OH^2=25-9=16$, tức $HM=4$ cm.\nBước 4: Đếm hai vị trí\nTrên đường thẳng $d$ có hai điểm cách $H$ đúng $4$ cm, nằm ở hai phía của $H$.\nCả hai đều cách $O$ đúng $5$ cm, nên đều thuộc đường tròn.\nBước 5: Kết luận\nCó $2$ điểm chung. Chọn C."
        },
        {
          "id": "l9-duong-tron-kha-03",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phải phân biệt cung lớn và cung nhỏ",
          "prompt": "Trên đường tròn tâm $O$, góc ở tâm nhỏ $AOB$ bằng $110^\\circ$. Số đo cung lớn $AB$ bằng bao nhiêu?",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[5,0],"B":[-1.7101007166283435,4.698463103929543]},"circles":[{"center":[0,0],"r":5}],"edges":[["O","A",""],["O","B",""]],"angles":[["A","O","B","110°"]],"title":"Phải phân biệt cung lớn và cung nhỏ"}),
          "options": [
            "A. $250^\\circ$.",
            "B. $110^\\circ$.",
            "C. $55^\\circ$.",
            "D. $220^\\circ$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định cung nhỏ\nSố đo cung nhỏ bằng số đo góc ở tâm nhỏ chắn cung đó.\nVì vậy cung nhỏ $AB$ có số đo $110^\\circ$.\nBước 2: Liên hệ hai cung\nCung nhỏ và cung lớn $AB$ ghép lại thành toàn bộ đường tròn, có số đo $360^\\circ$.\nBước 3: Tính phần còn lại\nSố đo cung lớn là $360^\\circ-110^\\circ=250^\\circ$.\nBước 4: Kiểm tra loại góc và độ lớn\nKết quả $250^\\circ>180^\\circ$ phù hợp cung lớn.\nKhông chia $110^\\circ$ cho $2$ vì dữ kiện là góc ở tâm, còn quy tắc một nửa cung dùng cho góc nội tiếp.\nBước 5: Kết luận\nCung lớn $AB$ có số đo $250^\\circ$. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l9-duong-tron-nangCao-01",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tiếp xúc trong hay ngoài",
          "prompt": "Hai đường tròn có bán kính $5$ cm và $3$ cm, khoảng cách hai tâm bằng $2$ cm. Chọn kết luận đúng.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"I":[2,0],"T":[5,0]},"circles":[{"center":[0,0],"r":5},{"center":[2,0],"r":3}],"edges":[["O","I","2 cm"],["I","T","3 cm"]],"title":"Tiếp xúc trong hay ngoài"}),
          "options": [
            "A. Cắt nhau tại hai điểm.",
            "B. Không có điểm chung.",
            "C. Tiếp xúc ngoài.",
            "D. Tiếp xúc trong."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Ghi ba đại lượng quyết định vị trí\nBán kính lớn là $R=5$ cm, bán kính nhỏ là $r=3$ cm và khoảng cách hai tâm là $d=2$ cm.\nHai tâm khác nhau vì $d>0$.\nBước 2: Tính tổng và hiệu bán kính\nCó $R+r=8$ cm và $R-r=2$ cm.\nTa cần so sánh $d$ với hai số này.\nBước 3: Áp dụng điều kiện tiếp xúc\nVì $d=R-r$, đường tròn nhỏ nằm phía trong đường tròn lớn và hai đường tròn có đúng một điểm chung.\nĐó là trường hợp tiếp xúc trong.\nBước 4: Phân biệt với các vị trí khác\nTiếp xúc ngoài cần $d=R+r=8$, không phải $2$.\nCắt nhau tại hai điểm cần $R-r<d<R+r$; ở đây đầu trái đạt dấu bằng nên chỉ có một điểm chung.\nBước 5: Kết luận\nHai đường tròn tiếp xúc trong. Chọn D.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-02",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc nội tiếp chắn cung đã biết",
          "prompt": "Trên đường tròn tâm $O$, góc ở tâm nhỏ $AOB=124^\\circ$. Điểm $C$ nằm trên cung lớn $AB$, khác $A,B$. Tính $\\widehat{ACB}$.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[5,0],"B":[-2.7959645173537333,4.145187862775209],"C":[-2.1130913087035,-4.5315389351832485]},"circles":[{"center":[0,0],"r":5}],"edges":[["O","A",""],["O","B",""],["A","C",""],["B","C",""]],"angles":[["A","O","B","124°"]],"title":"Góc nội tiếp chắn cung đã biết"}),
          "options": [
            "A. $124^\\circ$.",
            "B. $62^\\circ$.",
            "C. $118^\\circ$.",
            "D. $31^\\circ$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định cung bị chắn\nĐiểm $C$ ở cung lớn $AB$, nên góc nội tiếp $ACB$ chắn cung nhỏ $AB$, là cung không chứa $C$.\nBước 2: Tìm số đo cung nhỏ\nSố đo cung nhỏ bằng số đo góc ở tâm nhỏ chắn cung đó.\nVì vậy cung nhỏ $AB$ có số đo $124^\\circ$.\nBước 3: Áp dụng định lí góc nội tiếp\nGóc nội tiếp bằng một nửa số đo cung bị chắn.\nDo đó $\\widehat{ACB}=124^\\circ/2=62^\\circ$.\nBước 4: Kiểm tra vị trí của đỉnh\nNếu lấy nửa cung lớn thì được $(360^\\circ-124^\\circ)/2=118^\\circ$.\nKết quả đó ứng với đỉnh nằm trên cung nhỏ, trái vị trí $C$ trong đề.\nBước 5: Kết luận\n$\\widehat{ACB}=62^\\circ$. Chọn B.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-03",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tâm ngoại tiếp hình chữ nhật",
          "prompt": "Hình chữ nhật $ABCD$ có $AB=8$ cm, $BC=6$ cm. Gọi $O$ là giao điểm hai đường chéo. Đường tròn đi qua bốn đỉnh có tâm và bán kính nào?",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[-4,-3],"B":[4,-3],"C":[4,3],"D":[-4,3]},"circles":[{"center":[0,0],"r":5}],"edges":[["A","B","8 cm"],["B","C","6 cm"],["C","D",""],["D","A",""],["A","C","",true],["B","D","",true]],"title":"Tâm ngoại tiếp hình chữ nhật"}),
          "options": [
            "A. Tâm $O$, bán kính $10$ cm.",
            "B. Tâm $A$, bán kính $10$ cm.",
            "C. Tâm $O$, bán kính $7$ cm.",
            "D. Tâm $O$, bán kính $5$ cm."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính đường chéo hình chữ nhật\nTam giác $ABC$ vuông tại $B$ nên Pythagore cho $AC^2=AB^2+BC^2=8^2+6^2=100$.\nVì độ dài dương, $AC=10$ cm.\nBước 2: Sử dụng tính chất hai đường chéo\nTrong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường.\nDo đó $AC=BD=10$ cm và $O$ là trung điểm cả hai.\nBước 3: Tìm các khoảng cách từ O đến đỉnh\nCó $OA=OC=AC/2=5$ cm và $OB=OD=BD/2=5$ cm.\nVậy $O$ cách đều bốn đỉnh.\nBước 4: Xác định đường tròn ngoại tiếp\nĐường tròn tâm $O$, bán kính $5$ cm đi qua cả $A,B,C,D$.\nĐộ dài đường chéo $10$ cm là đường kính, không phải bán kính.\nBước 5: Kết luận\nTâm là $O$, bán kính $5$ cm. Chọn D.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-04",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai bán kính của tam giác đều",
          "prompt": "Tam giác đều cạnh $6\\sqrt3$ cm có đường tròn ngoại tiếp bán kính $R$ và đường tròn nội tiếp bán kính $r$. Tính $(R;r)$.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[3.6739403974420594e-16,6],"B":[-5.196152422706632,-3.000000000000001],"C":[5.19615242270663,-3.0000000000000027],"H":[0,-3]},"edges":[["A","B",""],["B","C",""],["C","A",""],["A","H","9 cm",true]],"circles":[{"center":[0,0],"r":6},{"center":[0,0],"r":3}],"right":[["A","H","C"]],"title":"Hai bán kính của tam giác đều"}),
          "options": [
            "A. $(6;3)$ cm.",
            "B. $(3;6)$ cm.",
            "C. $(9;3)$ cm.",
            "D. $(6;\\frac32)$ cm."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Dựng đường cao tam giác đều\nGọi cạnh tam giác là $a=6\\sqrt3$ cm và đường cao là $h$.\nĐường cao cũng là trung tuyến, chia đáy thành hai đoạn dài $a/2$.\nBước 2: Tính đường cao\nPythagore cho $h^2=a^2-(a/2)^2=3a^2/4$.\nDo đó $h=a\\sqrt3/2=9$ cm.\nBước 3: Xác định tâm chung\nTrong tam giác đều, các đường trung tuyến cũng là đường trung trực và phân giác.\nVì thế trọng tâm đồng thời là tâm ngoại tiếp và nội tiếp; nó chia đường cao theo tỉ lệ $2:1$ tính từ đỉnh.\nBước 4: Tính hai bán kính\nKhoảng cách từ tâm đến đỉnh là $R=2h/3=6$ cm.\nKhoảng cách vuông góc từ tâm đến cạnh là $r=h/3=3$ cm.\nBước 5: Kết luận\n$(R;r)=(6;3)$ cm. Chọn A.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-05",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Độ dài cung và diện tích quạt là hai đại lượng",
          "prompt": "Hình quạt bán kính $6$ cm có góc ở tâm $120^\\circ$. Chọn cặp “độ dài cung; diện tích quạt” đúng.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[6,0],"B":[-2.9999999999999987,5.196152422706632]},"circles":[{"center":[0,0],"r":6}],"edges":[["O","A","6 cm"],["O","B",""]],"sectors":[{"r":6,"start":0,"end":120}],"angles":[["A","O","B","120°"]],"title":"Độ dài cung và diện tích quạt là hai đại lượng"}),
          "options": [
            "A. $(2\\pi\\text{ cm};12\\pi\\text{ cm}^2)$.",
            "B. $(4\\pi\\text{ cm};6\\pi\\text{ cm}^2)$.",
            "C. $(4\\pi\\text{ cm};12\\pi\\text{ cm}^2)$.",
            "D. $(12\\pi\\text{ cm};36\\pi\\text{ cm}^2)$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tìm phần của một vòng tròn\nGóc ở tâm $120^\\circ$ chiếm $120/360=1/3$ góc tròn.\nĐộ dài cung và diện tích quạt đều bằng $1/3$ đại lượng tương ứng của cả hình tròn.\nBước 2: Tính chu vi và diện tích cả hình tròn\nVới $R=6$ cm, chu vi là $2\\pi R=12\\pi$ cm.\nDiện tích là $\\pi R^2=36\\pi$ cm².\nBước 3: Tính độ dài cung\nLấy $1/3$ chu vi: $l=12\\pi/3=4\\pi$ cm.\nĐây chỉ là độ dài cung, không cộng thêm hai bán kính.\nBước 4: Tính diện tích quạt\nLấy $1/3$ diện tích hình tròn: $S=36\\pi/3=12\\pi$ cm².\nĐơn vị diện tích là cm², khác đơn vị độ dài cung.\nBước 5: Kết luận\nCặp cần chọn là $(4\\pi\\text{ cm};12\\pi\\text{ cm}^2)$. Chọn C.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-06",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu",
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phép quay phải đúng chiều và đúng đỉnh",
          "prompt": "Bát giác đều $ABCDEFGH$ có các đỉnh ghi theo chiều ngược kim đồng hồ. Góc quay dương nhỏ nhất theo chiều ngược kim đồng hồ quanh tâm, vừa giữ nguyên bát giác vừa đưa $A$ đến $D$, là bao nhiêu?",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[3.061616997868383e-16,5],"B":[-3.5355339059327373,3.5355339059327378],"C":[-5,6.123233995736766e-16],"D":[-3.5355339059327386,-3.5355339059327373],"E":[-9.184850993605148e-16,-5],"F":[3.535533905932737,-3.5355339059327386],"G":[5,-1.2246467991473533e-15],"H":[3.5355339059327417,3.5355339059327333]},"edges":[["A","B",""],["B","C",""],["C","D",""],["D","E",""],["E","F",""],["F","G",""],["G","H",""],["H","A",""]],"circles":[{"center":[0,0],"r":5}],"title":"Phép quay phải đúng chiều và đúng đỉnh"}),
          "options": [
            "A. $45^\\circ$.",
            "B. $135^\\circ$.",
            "C. $90^\\circ$.",
            "D. $225^\\circ$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tính góc giữa hai đỉnh liên tiếp\nBát giác đều chia vòng tròn quanh tâm thành $8$ phần bằng nhau.\nMỗi bước từ một đỉnh đến đỉnh kế tiếp ứng với $360^\\circ/8=45^\\circ$.\nBước 2: Đếm bước theo đúng chiều\nCác đỉnh được ghi ngược chiều kim đồng hồ.\nĐể đưa $A$ tới $D$ theo chiều đó, đi qua $A\\to B\\to C\\to D$, gồm $3$ bước.\nBước 3: Tính góc quay\nGóc quay tương ứng là $3\\cdot45^\\circ=135^\\circ$.\nĐó là một bội của $45^\\circ$, nên phép quay đưa toàn bộ các đỉnh tới các đỉnh và giữ nguyên bát giác.\nBước 4: Kiểm tra tính nhỏ nhất\nCác góc dương nhỏ hơn $135^\\circ$ giữ nguyên bát giác chỉ là $45^\\circ$ và $90^\\circ$, đưa $A$ tới $B$ hoặc $C$.\nChúng chưa đưa $A$ tới $D$.\nBước 5: Kết luận\nGóc quay dương nhỏ nhất là $135^\\circ$. Chọn B.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-07",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Một phần của vành khuyên",
          "prompt": "Hai đường tròn đồng tâm có bán kính $8$ cm và $5$ cm. Lấy phần vành khuyên nằm trong góc ở tâm $120^\\circ$. Diện tích phần đó là bao nhiêu?",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[8,0],"B":[-3.9999999999999982,6.92820323027551],"C":[5,0],"D":[-2.499999999999999,4.330127018922194]},"circles":[{"center":[0,0],"r":8},{"center":[0,0],"r":5}],"sectors":[{"r":8,"inner":5,"start":0,"end":120}],"edges":[["O","A",""],["O","B",""]],"notes":["Bán kính ngoài 8 cm; bán kính trong 5 cm"],"angles":[["A","O","B","120°"]],"title":"Một phần của vành khuyên"}),
          "options": [
            "A. $3\\pi$ cm².",
            "B. $39\\pi$ cm².",
            "C. $\\frac{89\\pi}{3}$ cm².",
            "D. $13\\pi$ cm²."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận diện phần diện tích\nPhần cần tìm nằm giữa hai cung đồng tâm cùng góc $120^\\circ$.\nTa lấy diện tích quạt lớn trừ diện tích quạt nhỏ.\nBước 2: Tính quạt lớn\nGóc chiếm $1/3$ vòng tròn, nên $S_1=\\pi\\cdot8^2/3=64\\pi/3$ cm².\nBước 3: Tính quạt nhỏ\nTương tự, $S_2=\\pi\\cdot5^2/3=25\\pi/3$ cm².\nQuạt nhỏ nằm hoàn toàn trong quạt lớn vì hai đường tròn đồng tâm.\nBước 4: Lấy hiệu và phân biệt công thức\nCó $S=S_1-S_2=(64-25)\\pi/3=13\\pi$ cm².\nPhải lấy hiệu các bình phương $8^2-5^2$, không lấy bình phương hiệu $(8-5)^2$; phần vành khuyên không phải một hình tròn bán kính $3$.\nBước 5: Kết luận\nDiện tích là $13\\pi$ cm². Chọn D.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-08",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc ngoài của tứ giác nội tiếp",
          "prompt": "Tứ giác lồi $ABCD$ nội tiếp đường tròn, $\\widehat{DAB}=74^\\circ$. Kéo dài $BC$ qua $C$ tới $E$. Tính $\\widehat{DCE}$.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[-4.698463103929542,1.7101007166283444],"B":[-1.7101007166283468,-4.698463103929541],"C":[3.830222215594889,-3.213938048432698],"D":[3.94005376803361,3.078307376628291],"E":[6.046351388484183,-2.620128026233961]},"circles":[{"center":[0,0],"r":5}],"edges":[["A","B",""],["B","C",""],["C","D",""],["D","A",""],["C","E",""]],"angles":[["D","A","B","74°"]],"title":"Góc ngoài của tứ giác nội tiếp"}),
          "options": [
            "A. $106^\\circ$.",
            "B. $37^\\circ$.",
            "C. $74^\\circ$.",
            "D. $148^\\circ$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Phân biệt góc trong và góc cần tìm\n$\\widehat{BCD}$ là góc trong của tứ giác tại $C$.\n$\\widehat{DCE}$ là góc ngoài vì $E$ nằm trên phần kéo dài của $BC$ qua $C$.\nBước 2: Dùng tính chất tứ giác nội tiếp\nHai góc đối của tứ giác nội tiếp bù nhau, nên $\\widehat{DAB}+\\widehat{BCD}=180^\\circ$.\nVới $\\widehat{DAB}=74^\\circ$, được $\\widehat{BCD}=106^\\circ$.\nBước 3: Liên hệ góc trong và góc ngoài\nHai tia $CB$ và $CE$ đối nhau nên $\\widehat{BCD}$ và $\\widehat{DCE}$ là hai góc kề bù.\nVì vậy tổng của chúng cũng bằng $180^\\circ$.\nBước 4: Tính góc được hỏi\nCó $\\widehat{DCE}=180^\\circ-106^\\circ=74^\\circ$.\nSố $106^\\circ$ vừa tính là góc trong, không phải đáp số cuối cùng.\nBước 5: Kết luận\n$\\widehat{DCE}=74^\\circ$. Chọn C.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-09",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chắn đường kính trước khi tính cạnh",
          "prompt": "Tam giác $ABC$ nội tiếp đường tròn có đường kính $AB=13$ cm, $AC=5$ cm, $C$ khác $A,B$. Tính $BC$.",
          "svg": svgGrade9Circle({"points":{"O":[6.5,0],"A":[0,0],"B":[13,0],"C":[1.9230769230769231,4.615384615384615]},"circles":[{"center":[6.5,0],"r":6.5}],"edges":[["A","B","13 cm"],["A","C","5 cm"],["B","C","?"]],"right":[["A","C","B"]],"title":"Chắn đường kính trước khi tính cạnh"}),
          "options": [
            "A. $12$ cm.",
            "B. $\\sqrt{194}$ cm.",
            "C. $8$ cm.",
            "D. $18$ cm."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhận ra góc chắn đường kính\n$C$ thuộc đường tròn và khác hai đầu đường kính $A,B$.\nGóc nội tiếp $ACB$ chắn nửa đường tròn có số đo $180^\\circ$.\nBước 2: Xác định tam giác vuông\nTheo định lí góc nội tiếp, $\\widehat{ACB}=180^\\circ/2=90^\\circ$.\nVậy $AB=13$ cm là cạnh huyền, không phải cạnh góc vuông.\nBước 3: Áp dụng Pythagore\nCó $AB^2=AC^2+BC^2$.\nSuy ra $BC^2=13^2-5^2=169-25=144$.\nBước 4: Chọn căn phù hợp\nVì $BC$ là độ dài dương, $BC=\\sqrt{144}=12$ cm.\nKiểm tra $5^2+12^2=13^2$, đúng hệ thức của tam giác vuông này.\nBước 5: Kết luận\n$BC=12$ cm. Chọn A.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-10",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Từ bán kính đến góc tiếp tuyến và dây",
          "prompt": "Dây $AB$ của đường tròn tâm $O$ thỏa $\\widehat{OAB}=28^\\circ$. Tia tiếp tuyến $At$ được chọn sao cho tia $AB$ nằm trong góc vuông $OAt$. Điểm $C$ nằm trên cung lớn $AB$. Chọn cặp $(\\widehat{BAt};\\widehat{ACB})$.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[3.061616997868383e-16,-5],"B":[4.145187862775208,2.7959645173537346],"C":[-4.92403876506104,0.8682408883346514],"T":[6,-5]},"circles":[{"center":[0,0],"r":5}],"edges":[["O","A",""],["O","B",""],["A","B",""],["A","T","t"],["A","C",""],["B","C",""]],"angles":[["O","A","B","28°"]],"right":[["O","A","T"]],"title":"Từ bán kính đến góc tiếp tuyến và dây"}),
          "options": [
            "A. $(28^\\circ;62^\\circ)$.",
            "B. $(62^\\circ;62^\\circ)$.",
            "C. $(118^\\circ;62^\\circ)$.",
            "D. $(62^\\circ;124^\\circ)$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Dùng tính chất tiếp tuyến\nBán kính $OA$ vuông góc với tiếp tuyến $At$, nên $\\widehat{OAt}=90^\\circ$.\nTheo vị trí tia $AB$ đã cho, nó nằm bên trong góc vuông này.\nBước 2: Tính góc giữa dây và tia tiếp tuyến\nCó $\\widehat{OAB}+\\widehat{BAt}=90^\\circ$.\nDo đó $\\widehat{BAt}=90^\\circ-28^\\circ=62^\\circ$.\nBước 3: Tính góc ở tâm\nVì $OA=OB$ là hai bán kính, tam giác $OAB$ cân tại $O$.\nHai góc đáy đều bằng $28^\\circ$, nên $\\widehat{AOB}=180^\\circ-56^\\circ=124^\\circ$.\nBước 4: Tính góc nội tiếp\n$C$ ở cung lớn nên $\\widehat{ACB}$ chắn cung nhỏ $AB$.\nVì vậy $\\widehat{ACB}=124^\\circ/2=62^\\circ$.\nBước 5: Kết luận\nCặp góc là $(62^\\circ;62^\\circ)$. Chọn B.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-11",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tích hai phần của mỗi dây",
          "prompt": "Hai dây $AB,CD$ cắt nhau tại $P$ nằm trong đường tròn, với $PA=3$ cm, $PB=8$ cm, $PC=4$ cm. Tính $PD$.",
          "svg": svgGrade9Circle({"points":{"O":[2.5,1],"P":[0,0],"A":[-3,0],"B":[8,0],"C":[0,-4],"D":[0,6]},"circles":[{"center":[2.5,1],"r":5.5901699437494745}],"edges":[["A","P","3"],["P","B","8"],["C","P","4"],["P","D","?"]],"notes":["Độ dài tính bằng cm"],"title":"Tích hai phần của mỗi dây"}),
          "options": [
            "A. $\\frac32$ cm.",
            "B. $\\frac{32}{3}$ cm.",
            "C. $\\frac83$ cm.",
            "D. $6$ cm."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Chọn hai tam giác để liên hệ các đoạn\nXét tam giác $PAC$ và tam giác $PDB$.\nVì hai dây cắt nhau tại điểm trong $P$, các góc $APC$ và $DPB$ đối đỉnh nên bằng nhau.\nBước 2: Chứng minh cặp góc thứ hai bằng nhau\nTia $AP$ cùng hướng với $AB$, còn tia $DP$ cùng hướng với $DC$.\nVì vậy $\\widehat{PAC}=\\widehat{BAC}$ và $\\widehat{PDB}=\\widehat{CDB}$.\nHai góc nội tiếp $BAC$ và $CDB$ cùng chắn cung $BC$, nên bằng nhau.\nBước 3: Lập tỉ số từ đồng dạng\nHai tam giác $PAC$ và $PDB$ đồng dạng theo góc–góc, với $P\\leftrightarrow P$, $A\\leftrightarrow D$, $C\\leftrightarrow B$.\nDo đó $PA/PD=PC/PB$, hay $PA\\cdot PB=PC\\cdot PD$.\nBước 4: Thay số\nCó $3\\cdot8=4\\cdot PD$, nên $PD=6$ cm.\nHệ thức nhân hai phần của từng dây; không ghép ngẫu nhiên các đoạn khác dây.\nBước 5: Kết luận\n$PD=6$ cm. Chọn D.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-nangCao-12",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Đoạn ngoài khác cả cát tuyến",
          "prompt": "Từ $P$ ngoài đường tròn, tiếp tuyến $PT=6$ cm và cát tuyến đi qua $A,B$ theo thứ tự $P,A,B$. Biết $AB=9$ cm. Tính $PA$.",
          "svg": svgGrade9Circle({"points":{"O":[7.5,0],"P":[0,0],"A":[3,0],"B":[12,0],"T":[4.8,3.6]},"circles":[{"center":[7.5,0],"r":4.5}],"edges":[["P","A","?"],["A","B","9 cm"],["P","T","6 cm"],["O","T","",true]],"right":[["O","T","P"]],"title":"Đoạn ngoài khác cả cát tuyến"}),
          "options": [
            "A. $3$ cm.",
            "B. $4$ cm.",
            "C. $12$ cm.",
            "D. $6$ cm."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định toàn bộ cát tuyến\nĐặt $PA=x>0$ cm.\nVì thứ tự là $P,A,B$ và $AB=9$, có $PB=PA+AB=x+9$, không phải chỉ $9$.\nBước 2: Giải thích hệ thức tiếp tuyến và cát tuyến\nHai tam giác $PTA$ và $PBT$ có góc tại $P$ chung vì hai tia $PA,PB$ trùng nhau.\nTheo định lí góc tạo bởi tiếp tuyến và dây cung, $\\widehat{PTA}=\\widehat{TBA}=\\widehat{PBT}$.\nChúng đồng dạng theo góc–góc, nên $PT/PB=PA/PT$, tức $PT^2=PA\\cdot PB$.\nBước 3: Lập và giải phương trình\nThay số: $x(x+9)=6^2=36$.\nChuyển vế và phân tích: $x^2+9x-36=(x-3)(x+12)=0$.\nDo đó $x=3$ hoặc $x=-12$.\nBước 4: Loại nghiệm và thử lại\nĐộ dài phải dương nên loại $-12$.\nVới $x=3$, có $PB=12$ và $PA\\cdot PB=3\\cdot12=36=PT^2$, đúng hệ thức.\nBước 5: Kết luận\n$PA=3$ cm. Chọn A.",
          "manThi": "hinhTron"
        }
      ],
      "hsg": [
        {
          "id": "l9-duong-tron-hsg-01",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Độ dài tiếp tuyến",
          "prompt": "Từ điểm $P$ bên ngoài đường tròn tâm $O$ bán kính $5$ cm, kẻ hai tiếp tuyến $PA,PB$. Biết $OP=13$ cm. Tính $PA$, đơn vị cm.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"P":[13,0],"A":[1.9230769230769231,4.615384615384615],"B":[1.9230769230769231,-4.615384615384615]},"circles":[{"center":[0,0],"r":5}],"edges":[["O","P","13 cm"],["O","A","5 cm"],["P","A","?"],["P","B",""]],"right":[["O","A","P"]],"title":"Độ dài tiếp tuyến"}),
          "correctAnswer": "12",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Phân tích các đoạn đã biết\n$OA=5$ cm là bán kính, $OP=13$ cm là khoảng cách từ tâm đến điểm ngoài.\nCần tìm đoạn tiếp tuyến $PA$.\nBước 2: Xác định tam giác vuông\n$PA$ tiếp xúc đường tròn tại $A$, nên bán kính $OA$ vuông góc với $PA$.\nVì vậy tam giác $OAP$ vuông tại $A$, có cạnh huyền $OP$.\nBước 3: Áp dụng Pythagore\n$OA^2+PA^2=OP^2$.\nDo đó $PA^2=13^2-5^2=169-25=144$.\nBước 4: Chọn độ dài hợp lệ\nVì $PA$ là độ dài dương, $PA=\\sqrt{144}=12$ cm, không nhận $-12$.\nKiểm tra $5^2+12^2=13^2$; $OP=13>5$ cũng xác nhận $P$ nằm ngoài đường tròn.\nBước 5: Kết luận\nĐộ dài tiếp tuyến cần tìm là $12$ cm.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-hsg-02",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Góc trên đường tròn chứa hình vuông",
          "prompt": "Hình vuông $ABCD$ nội tiếp đường tròn bán kính $R$. Điểm $E$ thuộc cung nhỏ $CD$, khác $C,D$. Biết $\\widehat{AEB}=(2x+15)^\\circ$ và đường chéo $AC=x-3$ cm. Tính $R$, đơn vị cm.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[3.6739403974420594e-16,6],"B":[-6,7.347880794884119e-16],"C":[-1.102182119232618e-15,-6],"D":[6,-1.4695761589768238e-15],"E":[4.242640687119284,-4.242640687119286]},"edges":[["A","B",""],["B","C",""],["C","D",""],["D","A",""],["A","C","x − 3 cm",true],["A","E",""],["B","E",""]],"circles":[{"center":[0,0],"r":6}],"title":"Góc trên đường tròn chứa hình vuông"}),
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định cung bị chắn\nHình vuông có bốn cạnh bằng nhau, nên bốn cung giữa các đỉnh liên tiếp bằng nhau.\nMỗi cung có số đo $360^\\circ/4=90^\\circ$.\n$E$ thuộc cung nhỏ $CD$, nên góc nội tiếp $AEB$ chắn cung nhỏ $AB$ không chứa $E$.\nBước 2: Tính góc nội tiếp\nGóc nội tiếp bằng nửa số đo cung bị chắn, nên $\\widehat{AEB}=90^\\circ/2=45^\\circ$.\nBước 3: Tìm x và đường chéo\n$2x+15=45$ cho $2x=30$, nên $x=15$.\nDo đó $AC=x-3=12$ cm, là độ dài dương.\nBước 4: Liên hệ đường chéo với bán kính\nHai đỉnh đối diện của hình vuông cách nhau hai cung liên tiếp, tổng $180^\\circ$. Vì vậy $AC$ là đường kính.\nTa có $2R=AC=12$, nên $R=6$ cm.\nBước 5: Kết luận\nBán kính là $6$ cm. Vị trí $E$ khác $C,D$ và nằm trên cung đã cho bảo đảm không chọn nhầm cung bị chắn.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-hsg-03",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Số cạnh qua một cung nhiều cạnh",
          "prompt": "Một đa giác đều $n$ cạnh ($n\\ge6$) nội tiếp đường tròn. $A_0,A_1,\\ldots,A_4$ là năm đỉnh liên tiếp. Một đỉnh $M$ nằm trên cung $A_4A_0$ không chứa $A_1,A_2,A_3$ và khác hai đầu. Biết $\\widehat{A_0MA_4}=60^\\circ$. Tìm $n$.",
          "svg": "",
          "correctAnswer": "12",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chia đường tròn theo đa giác đều\n$n$ cạnh bằng nhau tạo $n$ cung bằng nhau, mỗi cung giữa hai đỉnh liên tiếp có số đo $360^\\circ/n$.\nBước 2: Xác định đúng cung bị chắn\n$M$ nằm trên cung còn lại, nên góc $A_0MA_4$ chắn cung đi qua $A_1,A_2,A_3$.\nCung này gồm bốn cung liên tiếp, có số đo $4\\cdot360^\\circ/n$.\nBước 3: Dùng định lí góc nội tiếp\n$60^\\circ=(1/2)\\cdot4\\cdot360^\\circ/n$.\nBỏ đơn vị độ trong phương trình số: $60=720/n$, nên $60n=720$ và $n=12$.\nBước 4: Kiểm tính tồn tại\n$12\\ge6$ và là số nguyên. Cung qua bốn cạnh có số đo $120^\\circ$, nên góc nội tiếp chắn nó đúng bằng $60^\\circ$.\nCung còn lại có các đỉnh khác hai đầu, nên chọn được $M$ đúng yêu cầu.\nBước 5: Kết luận\nĐa giác có $12$ cạnh. Khi đó góc quay dương nhỏ nhất quanh tâm giữ nguyên đa giác là $360^\\circ/12=30^\\circ$.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-hsg-04",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai chân đường cao tạo tứ giác nội tiếp",
          "prompt": "Tam giác $ABC$ nhọn, cân tại $A$. Gọi $D,E$ lần lượt là chân đường vuông góc từ $B$ xuống $AC$ và từ $C$ xuống $AB$. Chứng minh $B,D,E,C$ cùng thuộc một đường tròn; suy ra $\\widehat{BDE}=\\widehat{BCE}$, rồi chứng minh $DE\\parallel BC$.",
          "svg": svgGrade9Circle({"points":{"A":[0,8],"B":[-6,0],"C":[6,0],"D":[1.6800000000000002,5.76],"E":[-1.6800000000000002,5.76],"O":[0,0]},"circles":[{"center":[0,0],"r":6}],"edges":[["A","B",""],["A","C",""],["B","C",""],["B","D",""],["C","E",""],["D","E",""]],"right":[["B","D","C"],["C","E","B"]],"title":"Hai chân đường cao tạo tứ giác nội tiếp"}),
          "solution": "Bước 1: Phân tích vị trí và góc vuông\nTam giác nhọn nên $D$ nằm trong $AC$, $E$ nằm trong $AB$.\n$BD\\perp AC$ cho $\\widehat{BDC}=90^\\circ$; $CE\\perp AB$ cho $\\widehat{BEC}=90^\\circ$.\nBước 2: Chứng minh bốn điểm nội tiếp\nCác điểm nhìn đoạn $BC$ dưới góc vuông thuộc đường tròn đường kính $BC$.\nVì vậy cả $D,E$ thuộc đường tròn ấy, cùng với $B,C$. Bốn điểm phân biệt nên tạo được tứ giác nội tiếp.\nBước 3: Suy ra đẳng thức góc\nTrên đường tròn vừa xác định, $\\widehat{BDE}$ và $\\widehat{BCE}$ cùng chắn cung $BE$ không chứa hai đỉnh góc.\nTheo định lí góc nội tiếp, $\\widehat{BDE}=\\widehat{BCE}$.\nBước 4: Tìm tỉ số trên hai cạnh của tam giác\nXét hai tam giác vuông $ABD$ và $ACE$.\nChúng có cạnh huyền $AB=AC$ vì tam giác cân tại $A$; góc $BAD$ bằng góc $CAE$ vì đều là góc ở đỉnh $A$.\nHai tam giác bằng nhau theo cạnh huyền–góc nhọn, nên $AD=AE$.\nDo $AC=AB>0$, có $AD/AC=AE/AB$.\nBước 5: Kết luận song song\n$D,E$ nằm trên hai cạnh $AC,AB$ và chia hai cạnh theo cùng tỉ số. Định lí Thales đảo cho $DE\\parallel CB$.\nNhư vậy đã chứng minh đủ tính nội tiếp, đẳng thức góc và quan hệ song song.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-hsg-05",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Đường nối tâm và giao hai tiếp tuyến",
          "prompt": "Từ $P$ ngoài đường tròn $(O)$ kẻ hai tiếp tuyến tại hai điểm phân biệt $A,B$. Chứng minh $PA=PB$, $OP$ là phân giác góc $APB$, rồi suy ra $OP\\perp AB$ và đi qua trung điểm của $AB$.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"P":[10,0],"A":[2.5,4.330127018922193],"B":[2.5,-4.330127018922193]},"circles":[{"center":[0,0],"r":5}],"edges":[["O","A",""],["O","B",""],["P","A",""],["P","B",""],["O","P","",true],["A","B","",true]],"right":[["O","A","P"],["O","B","P"]],"title":"Đường nối tâm và giao hai tiếp tuyến"}),
          "solution": "Bước 1: Nhận diện hai tam giác vuông\nVì $PA,PB$ là tiếp tuyến tại $A,B$, có $OA\\perp PA$ và $OB\\perp PB$.\nDo đó các tam giác $OAP,OBP$ vuông tại $A,B$.\nBước 2: Chứng minh hai tam giác bằng nhau\n$OP$ là cạnh huyền chung của hai tam giác.\n$OA=OB$ vì cùng là bán kính đường tròn.\nVậy hai tam giác vuông bằng nhau theo cạnh huyền–cạnh góc vuông, với tương ứng $O\\leftrightarrow O$, $A\\leftrightarrow B$, $P\\leftrightarrow P$.\nBước 3: Suy ra độ dài và phân giác\nHai cạnh tương ứng cho $PA=PB$.\nHai góc tương ứng tại $P$ cho $\\widehat{APO}=\\widehat{OPB}$; tia $PO$ nằm trong góc giữa hai tiếp tuyến, nên là tia phân giác của góc $APB$.\nBước 4: Xác định đường trung trực\n$OA=OB$ nên $O$ thuộc đường trung trực của $AB$.\n$PA=PB$ nên $P$ cũng thuộc đường trung trực của $AB$, theo tính chất điểm cách đều hai đầu đoạn thẳng.\n$O\\ne P$ vì $P$ ở ngoài đường tròn, nên đường qua hai điểm này chính là đường trung trực.\nBước 5: Kết luận\n$PA=PB$, $PO$ phân giác góc $APB$, và đường $OP$ vuông góc với $AB$ tại trung điểm của $AB$.\nGiả thiết $P$ ngoài đường tròn bảo đảm hai tiếp tuyến và các tam giác không suy biến.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-hsg-06",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Quay cả đường chéo",
          "prompt": "Thập nhị giác đều $ABCDEFGHIJKL$ ghi các đỉnh theo chiều ngược kim đồng hồ. Tìm góc quay dương nhỏ nhất theo chiều ngược kim đồng hồ quanh tâm đưa đoạn $AC$ thành đoạn $FH$ (không định hướng), đơn vị độ.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[3.061616997868383e-16,5],"B":[-2.499999999999999,4.330127018922194],"C":[-4.330127018922194,2.4999999999999996],"D":[-5,6.123233995736766e-16],"E":[-4.330127018922193,-2.5000000000000004],"F":[-2.500000000000002,-4.330127018922193],"G":[-9.184850993605148e-16,-5],"H":[2.5000000000000004,-4.330127018922193],"I":[4.330127018922192,-2.500000000000002],"J":[5,-1.2246467991473533e-15],"K":[4.330127018922195,2.4999999999999964],"L":[2.4999999999999987,4.3301270189221945]},"edges":[["A","B",""],["B","C",""],["C","D",""],["D","E",""],["E","F",""],["F","G",""],["G","H",""],["H","I",""],["I","J",""],["J","K",""],["K","L",""],["L","A",""],["A","C",""],["F","H",""]],"circles":[{"center":[0,0],"r":5}],"title":"Quay cả đường chéo"}),
          "correctAnswer": "150",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính góc giữa hai đỉnh liên tiếp\nThập nhị giác đều có $12$ đỉnh, nên góc quay quanh tâm từ một đỉnh đến đỉnh kế tiếp là $360^\\circ/12=30^\\circ$.\nBước 2: Xét cách ghép đầu mút thứ nhất\nĐưa $A$ đến $F$ theo chiều ngược kim đồng hồ cần đi qua năm bước: $A,B,C,D,E,F$.\nGóc quay là $5\\cdot30^\\circ=150^\\circ$.\nCùng phép quay ấy đưa $C$ qua năm bước đến $H$, nên đoạn $AC$ được đưa thành $FH$.\nBước 3: Kiểm khả năng đổi hai đầu đoạn\nVì đoạn không định hướng, còn phải xét $A\\to H$ và $C\\to F$.\n$A\\to H$ cần bảy bước, tức $210^\\circ$. Nhưng quay bảy bước lại đưa $C$ đến $J$, không phải $F$.\nVì vậy cách ghép đổi đầu không phù hợp.\nBước 4: Kiểm tính nhỏ nhất\nẢnh của đầu mút $A$ chỉ có thể là $F$ hoặc $H$. Hai khả năng đã xét hết.\nGóc $150^\\circ$ là đại diện dương nhỏ nhất của cách quay phù hợp; thêm vòng $360^\\circ$ chỉ làm góc lớn hơn.\nBước 5: Kết luận\nGóc quay cần tìm là $150^\\circ$.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-hsg-07",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tích dây và hiệu hai đoạn",
          "prompt": "Tứ giác lồi $ACBD$ nội tiếp đường tròn. Hai đường chéo $AB,CD$ cắt tại $P$, với $PC=5$ cm, $PD=8$ cm và $PB-PA=3$ cm. Tính độ dài $AB$, đơn vị cm.",
          "svg": svgGrade9Circle({"points":{"O":[1.5,1.5],"P":[0,0],"A":[-5,0],"B":[8,0],"C":[0,-5],"D":[0,8]},"circles":[{"center":[1.5,1.5],"r":6.670832032063167}],"edges":[["A","C",""],["C","B",""],["B","D",""],["D","A",""],["A","B","",true],["C","P","5"],["P","D","8"]],"notes":["PB − PA = 3 cm"],"title":"Tích dây và hiệu hai đoạn"}),
          "correctAnswer": "13",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Dùng vị trí giao hai đường chéo\nTứ giác lồi nên $P$ nằm trong cả hai đoạn $AB,CD$.\nÁp dụng hệ thức hai dây cắt nhau trong đường tròn: $PA\\cdot PB=PC\\cdot PD$.\nBước 2: Đặt ẩn độ dài\nĐặt $PA=x>0$. Vì $PB-PA=3$, có $PB=x+3$.\nMặt khác $PC\\cdot PD=5\\cdot8=40$.\nBước 3: Lập và giải phương trình\n$x(x+3)=40$, nên $x^2+3x-40=0$.\nPhân tích $(x-5)(x+8)=0$, cho $x=5$ hoặc $x=-8$.\nBước 4: Loại nghiệm và kiểm hệ thức\nLoại $-8$ vì độ dài phải dương. Nhận $PA=5$, nên $PB=8$.\nKiểm tích $5\\cdot8=40$ và hiệu $8-5=3$, đều đúng đề.\nBước 5: Tính độ dài cả dây\nVì $P$ nằm giữa $A,B$, $AB=PA+PB=5+8=13$ cm.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-hsg-08",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Phần tròn ngoài lục giác đều",
          "prompt": "Lục giác đều nội tiếp đường tròn bán kính $6$ cm. Tính diện tích phần nằm trong đường tròn nhưng ngoài lục giác, theo cm², làm tròn đến một chữ số thập phân.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[3.6739403974420594e-16,6],"B":[-5.196152422706632,2.9999999999999996],"C":[-5.196152422706632,-3.000000000000001],"D":[-1.102182119232618e-15,-6],"E":[5.19615242270663,-3.0000000000000027],"F":[5.196152422706634,2.9999999999999956]},"edges":[["A","B",""],["B","C",""],["C","D",""],["D","E",""],["E","F",""],["F","A",""],["O","A","",true],["O","B","",true],["O","C","",true],["O","D","",true],["O","E","",true],["O","F","",true]],"circles":[{"center":[0,0],"r":6}],"fillPolygon":["A","B","C","D","E","F"],"title":"Phần tròn ngoài lục giác đều"}),
          "correctAnswer": "19.6",
          "dapAnChapNhan": [
            "19,6"
          ],
          "solution": "Bước 1: Chia lục giác thành các tam giác\nNối tâm với sáu đỉnh. Mỗi tam giác có hai cạnh là bán kính $6$ cm và góc xen giữa bằng $360^\\circ/6=60^\\circ$.\nHai góc còn lại bằng nhau và có tổng $120^\\circ$, nên mỗi góc bằng $60^\\circ$. Vì vậy cả sáu tam giác đều, cạnh $6$ cm.\nBước 2: Tính diện tích một tam giác đều\nĐường cao chia đáy thành hai đoạn $3$ cm.\nTheo Pythagore, chiều cao bằng $\\sqrt{6^2-3^2}=\\sqrt{27}=3\\sqrt3$ cm.\nDiện tích một tam giác là $6\\cdot3\\sqrt3/2=9\\sqrt3$ cm².\nBước 3: Tính diện tích lục giác và đường tròn\nLục giác có diện tích $6\\cdot9\\sqrt3=54\\sqrt3$ cm².\nĐường tròn có diện tích $\\pi\\cdot6^2=36\\pi$ cm².\nBước 4: Lấy phần chênh lệch\nLục giác nằm trong đường tròn, nên phần cần tìm bằng $36\\pi-54\\sqrt3\\approx19{,}5666$ cm².\nKhông dùng diện tích sáu hình quạt làm diện tích lục giác, vì mỗi quạt còn chứa phần ngoài cạnh lục giác.\nBước 5: Kết luận\nLàm tròn đến một chữ số thập phân, diện tích là $19{,}6$ cm².",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-hsg-09",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Nội tiếp phụ trong cấu hình tiếp tuyến và đường kính",
          "prompt": "Cho đường tròn $(O)$ đường kính $AB$. Điểm $C$ trên đường tròn khác $A,B$; hai tiếp tuyến tại $A,C$ gặp nhau tại $P$. Gọi $H$ là chân đường vuông góc từ $A$ xuống $OP$. Đường thẳng $PB$ cắt đường tròn lần nữa tại $D$, theo thứ tự $P,D,B$, với $D\\ne B$. Chứng minh: (a) $A,O,C,P$ nội tiếp; (b) $A,H,C$ thẳng hàng và $OP\\parallel BC$; (c) $PA^2=PD\\cdot PB$.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[-5,0],"B":[5,0],"C":[3,4],"P":[-5,10],"H":[-1,2],"D":[0,5]},"circles":[{"center":[0,0],"r":5}],"edges":[["A","B",""],["A","P",""],["P","C",""],["O","C","",true],["O","P","",true],["A","C",""],["B","C",""],["P","B",""]],"right":[["O","A","P"],["O","C","P"],["A","H","P"]],"title":"Nội tiếp phụ trong cấu hình tiếp tuyến và đường kính"}),
          "solution": "Bước 1: Phân tích dữ kiện và các tính chất cần dùng\n$PA,PC$ là tiếp tuyến nên $OA\\perp PA$, $OC\\perp PC$.\n$AB$ là đường kính nên góc nội tiếp $ACB$ là góc vuông.\nTa sẽ dùng góc vuông để chứng minh nội tiếp, dùng tam giác bằng nhau để xác định đường trung trực, rồi dùng đồng dạng để chứng minh hệ thức tích.\nBước 2: Chứng minh phần (a) — bốn điểm nội tiếp\nTrong các tam giác $OAP,OCP$, có $\\widehat{OAP}=\\widehat{OCP}=90^\\circ$.\nVì vậy $A$ và $C$ cùng nhìn đoạn $OP$ dưới góc vuông, nên cùng thuộc đường tròn đường kính $OP$.\nSuy ra $A,O,C,P$ nội tiếp. Các điểm phân biệt do $P$ ở ngoài đường tròn và $C\\ne A,B$.\nBước 3: Chứng minh phần (b) — xác định H và đường song song\nXét hai tam giác vuông $OAP,OCP$: cạnh huyền $OP$ chung; cạnh góc vuông $OA=OC$ vì cùng là bán kính.\nTheo cạnh huyền–cạnh góc vuông, hai tam giác bằng nhau, nên $PA=PC$.\n$OA=OC$ cho $O$ thuộc đường trung trực của $AC$; $PA=PC$ cho $P$ cũng thuộc đường ấy. Vì $O\\ne P$, $OP$ chính là đường trung trực của $AC$.\nGọi $M$ là trung điểm $AC$. Khi đó $M\\in OP$ và $AM\\perp OP$.\nĐường vuông góc từ $A$ đến $OP$ là duy nhất, nên chân $H$ trùng $M$. Vì vậy $A,H,C$ thẳng hàng.\nMặt khác $\\widehat{ACB}=90^\\circ$ vì chắn đường kính $AB$, nên $BC\\perp AC$. Đã có $OP\\perp AC$, do đó $OP\\parallel BC$.\nBước 4: Chứng minh phần (c) — tạo cặp tam giác đồng dạng\nXét tam giác $PAD$ và $PBA$.\nVì $P,D,B$ theo thứ tự, hai tia $PD,PB$ trùng nhau, nên góc $APD$ bằng góc $BPA$.\nGóc giữa tiếp tuyến $PA$ và dây $AD$ bằng góc nội tiếp chắn cùng dây $AD$: $\\widehat{PAD}=\\widehat{ABD}$.\nTại $B$, hai tia $BD,BP$ trùng nhau nên $\\widehat{ABD}=\\widehat{PBA}$.\nVậy hai tam giác đồng dạng theo góc–góc, với tương ứng $P\\leftrightarrow P$, $A\\leftrightarrow B$, $D\\leftrightarrow A$.\nCác cạnh tương ứng cho $PA/PB=PD/PA$. Nhân với $PA\\cdot PB>0$, được $PA^2=PD\\cdot PB$.\nBước 5: Kết luận và kiểm điều kiện\nĐã chứng minh đủ (a), (b), (c).\nThứ tự $P,D,B$ xác định đúng đoạn ngoài $PD$, toàn cát tuyến $PB$ và các tia trùng nhau dùng ở bước 4. Các độ dài chia đều dương; không áp dụng lập luận cho trường hợp các điểm trùng nhau.",
          "manThi": "hinhTron"
        },
        {
          "id": "l9-duong-tron-hsg-10",
          "lop": 9,
          "chuDe": "duong-tron",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai đường tròn chung dây và một đường tròn phụ",
          "prompt": "Hai đường tròn cắt nhau tại $A,B$. Hai điểm phân biệt $P,Q$ nằm trong đoạn $AB$ và $AP=BQ$. Qua $P$ kẻ hai đường khác nhau: đường thứ nhất cắt đường tròn thứ nhất tại $C,D$, đường thứ hai cắt đường tròn thứ hai tại $E,F$. Các điểm $C,D,E,F,A,B$ đôi một khác nhau; $P$ nằm giữa $C,D$ và giữa $E,F$. Chứng minh $C,D,E,F$ nội tiếp một đường tròn và $PC\\cdot PD=QA\\cdot QB$.",
          "svg": svgGrade9Circle({"points":{"A":[0,4],"B":[0,-4],"P":[0,1],"Q":[0,-1],"C":[-7.898979485566356,1],"D":[1.8989794855663558,1],"E":[3.9154759474226504,4.91547594742265],"F":[-1.9154759474226504,-0.9154759474226504]},"circles":[{"center":[-3,0],"r":5},{"center":[3,0],"r":5}],"edges":[["A","B",""],["C","D",""],["E","F",""],["C","E","",true],["F","D","",true]],"labelOffsets":{"P":[-15,-12],"Q":[14,0]},"title":"Hai đường tròn chung dây và một đường tròn phụ"}),
          "solution": "Bước 1: Tìm các tích bằng nhau từ hai đường tròn\nTrong đường tròn thứ nhất, hai dây $AB,CD$ cắt nhau tại $P$ bên trong, nên $PC\\cdot PD=PA\\cdot PB$ theo hệ thức hai dây cắt nhau.\nTrong đường tròn thứ hai, tương tự có $PE\\cdot PF=PA\\cdot PB$.\nVì vậy $PC\\cdot PD=PE\\cdot PF$. Các đoạn đều dương do $P$ nằm trong các dây.\nBước 2: Chọn hai tam giác để dùng tích vừa tìm\nChia đẳng thức tích cho $PF\\cdot PD>0$, được $PC/PF=PE/PD$.\nDo $PC,PD$ là hai tia đối nhau và $PE,PF$ là hai tia đối nhau, các góc $CPE,FPD$ đối đỉnh nên bằng nhau.\nVậy hai tam giác $PCE,PFD$ có hai cặp cạnh quanh góc ấy tỉ lệ và góc xen giữa bằng nhau.\nBước 3: Chứng minh tính nội tiếp\nTheo cạnh–góc–cạnh, hai tam giác đồng dạng với $P\\leftrightarrow P$, $C\\leftrightarrow F$, $E\\leftrightarrow D$.\nSuy ra $\\widehat{PCE}=\\widehat{PFD}$. Vì $C,P,D$ thẳng hàng và $F,P,E$ thẳng hàng theo thứ tự, hai góc này là $\\widehat{DCE}$ và $\\widehat{EFD}$.\nHai đường qua $P$ khác nhau; hai đoạn $CD,EF$ cắt nhau bên trong, nên bốn đầu mút tạo một tứ giác lồi với $C,F$ cùng phía đối với đường $DE$.\nHai điểm $C,F$ cùng nhìn đoạn $DE$ dưới một góc bằng nhau, ở cùng một phía, nên cùng thuộc một cung tròn qua $D,E$. Vậy $C,D,E,F$ nội tiếp.\nBước 4: Dùng điều kiện đối xứng độ dài trên AB\nĐề cho $AP=BQ$.\nVì $P,Q$ đều nằm trong $AB$, có $PB=AB-AP$ và $QA=AB-BQ$. Do $AP=BQ$, suy ra $PB=QA$.\nBởi vậy $PA\\cdot PB=QB\\cdot QA$.\nBước 5: Kết luận\nKết hợp bước 1 và bước 4, $PC\\cdot PD=QA\\cdot QB$, đồng thời đã chứng minh tính nội tiếp.\nNếu hai đường qua $P$ trùng nhau thì không có các tam giác và tứ giác không suy biến; giả thiết hai đường khác nhau đã loại trường hợp đó.",
          "manThi": "hinhTron"
        }
      ]
    },
    'hinh-tru-non-cau': {
      "kha": [
        {
          "id": "l9-hinh-tru-non-cau-kha-01",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Các bộ phận của hình trụ",
          "prompt": "Hình trụ có hai tâm đáy $O,O_1$. $A$ thuộc đường tròn đáy dưới; $A_1$ là điểm tương ứng trên đáy trên, với $AA_1$ song song trục. Khẳng định nào đúng?",
          "svg": svgGrade9RoundSolid({"kind":"cylinder","r":3,"h":7,"labels":true,"title":"Các bộ phận của hình trụ"}),
          "options": [
            "A. $OA$ là đường kính và $OO_1$ là bán kính.",
            "B. $OA$ là bán kính; $OO_1$ là chiều cao; $AA_1=OO_1$.",
            "C. $AA_1$ là bán kính và hai đáy khác diện tích.",
            "D. Hai đáy là hai hình tròn bằng nhau nằm trong cùng một mặt phẳng."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhận diện hai đáy\nHai đáy hình trụ là hai hình tròn bằng nhau, nằm trong hai mặt phẳng song song khác nhau.\nCác tâm đáy là $O$ và $O_1$.\nBước 2: Nhận diện bán kính\n$A$ nằm trên đường tròn đáy dưới, nên đoạn từ tâm $O$ tới $A$ là bán kính $OA$.\nĐoạn này không phải đường kính vì chỉ nối tâm với một điểm trên đường tròn.\nBước 3: Nhận diện chiều cao\nĐoạn nối hai tâm $OO_1$ vuông góc với hai mặt đáy và biểu diễn khoảng cách giữa chúng.\nVì thế $OO_1$ là chiều cao hình trụ.\nBước 4: Liên hệ đường sinh với chiều cao\n$AA_1$ nối hai điểm tương ứng trên hai đường tròn đáy và song song trục, nên là đường sinh.\nHai đoạn $AA_1$ và $OO_1$ cùng nối hai mặt phẳng đáy theo phương vuông góc, nên $AA_1=OO_1$.\nBước 5: Kết luận\n$OA$ là bán kính, $OO_1$ là chiều cao và $AA_1=OO_1$. Chọn B."
        },
        {
          "id": "l9-hinh-tru-non-cau-kha-02",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chiều cao khác đường sinh",
          "prompt": "Hình nón có đỉnh $S$, tâm đáy $O$, điểm $A$ trên đường tròn đáy. Biết $OA=3$ cm, $SO=4$ cm và $SA=5$ cm. Cặp “chiều cao; đường sinh” của hình nón là gì?",
          "svg": svgGrade9RoundSolid({"kind":"cone","r":3,"h":4,"labels":true,"rLabel":"3 cm","hLabel":"4 cm","lLabel":"5 cm","title":"Chiều cao khác đường sinh"}),
          "options": [
            "A. $(3;4)$ cm.",
            "B. $(5;4)$ cm.",
            "C. $(4;3)$ cm.",
            "D. $(4;5)$ cm."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Phân biệt ba đoạn đã cho\n$OA$ nằm trong đáy; $SO$ nối đỉnh với tâm đáy; $SA$ nối đỉnh với điểm trên đường tròn đáy.\nChúng có vai trò khác nhau dù cùng là các đoạn của hình nón.\nBước 2: Xác định chiều cao\n$SO$ vuông góc với mặt phẳng đáy, nên là chiều cao.\nTheo đề, chiều cao bằng $4$ cm.\nBước 3: Xác định đường sinh\nĐoạn $SA$ nằm trên mặt bên, nối đỉnh với đường tròn đáy, nên là đường sinh.\nTheo đề, đường sinh bằng $5$ cm; còn $OA=3$ cm là bán kính.\nBước 4: Kiểm tra các độ dài\nTam giác $SOA$ vuông tại $O$, và $3^2+4^2=9+16=25=5^2$.\nDữ kiện phù hợp, với đường sinh là cạnh huyền dài hơn chiều cao.\nBước 5: Kết luận\nCặp “chiều cao; đường sinh” là $(4;5)$ cm. Chọn D."
        },
        {
          "id": "l9-hinh-tru-non-cau-kha-03",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hình cầu và mặt cầu khi cắt",
          "prompt": "Một mặt phẳng cách tâm của hình cầu bán kính $5$ cm một khoảng $3$ cm. Chọn mô tả đúng: phần chung với hình cầu và giao tuyến với mặt cầu lần lượt là gì?",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"H":[0,3],"A":[4,3],"B":[-4,3]},"edges":[["O","H","3 cm"],["B","A",""],["O","A","5 cm"]],"circles":[{"center":[0,0],"r":5}],"right":[["O","H","A"]],"notes":["Mặt cắt qua tâm O, vuông góc mặt phẳng cắt"],"edgeLabelOffsets":{"O-A":[0,28]},"title":"Hình cầu và mặt cầu khi cắt"}),
          "options": [
            "A. Hình tròn và đường tròn, cùng bán kính nhỏ hơn $5$ cm.",
            "B. Đều là đường tròn, bán kính $5$ cm.",
            "C. Hình tròn và đường tròn, cùng bán kính $5$ cm.",
            "D. Đều là một điểm vì mặt phẳng không qua tâm."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Kiểm tra mặt phẳng có cắt qua hình cầu\nKhoảng cách từ tâm đến mặt phẳng là $3$ cm, nhỏ hơn bán kính $5$ cm.\nVì vậy mặt phẳng đi qua phần bên trong, không chỉ tiếp xúc mặt cầu.\nBước 2: Phân biệt hình cầu và mặt cầu\nHình cầu ở đây gồm cả phần bên trong và mặt bao quanh.\nMặt cầu chỉ gồm các điểm cách tâm đúng bán kính.\nBước 3: Xác định hai phần giao\nPhần chung của mặt phẳng với hình cầu là một hình tròn, gồm cả miền bên trong.\nGiao tuyến với mặt cầu là đường tròn làm biên của hình tròn đó.\nBước 4: Kiểm tra kích thước thiết diện\nPythagore cho bán kính thiết diện $r=\\sqrt{5^2-3^2}=4$ cm, dương và nhỏ hơn $5$ cm.\nChỉ khi mặt phẳng qua tâm thì thiết diện mới có bán kính bằng bán kính cầu.\nBước 5: Kết luận\nHai phần lần lượt là hình tròn và đường tròn. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l9-hinh-tru-non-cau-nangCao-01",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đổi đơn vị trước khi tính mặt bên",
          "prompt": "Một hình trụ có chu vi đáy $40$ cm và chiều cao $0{,}6$ m. Diện tích xung quanh bằng bao nhiêu cm²?",
          "svg": "",
          "options": [
            "A. 24 cm².",
            "B. 240 cm².",
            "C. 2400 cm².",
            "D. 4800 cm²."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Thống nhất đơn vị\nĐề hỏi diện tích theo cm² và đã cho chu vi đáy theo cm.\nĐổi chiều cao $0{,}6$ m thành $60$ cm trước khi tính.\nBước 2: Hiểu hình khai triển\nMặt bên hình trụ khai triển thành hình chữ nhật.\nMột cạnh bằng chu vi đáy $40$ cm, cạnh còn lại bằng chiều cao $60$ cm.\nBước 3: Tính diện tích xung quanh\nDiện tích hình chữ nhật là tích hai kích thước, nên $S_{xq}=40\\cdot60=2400$ cm².\nBước 4: Kiểm tra phạm vi cần tính\nĐề chỉ hỏi diện tích xung quanh nên không cộng hai đáy.\nKhông dùng tích $40\\cdot0{,}6$ rồi ghi cm² vì hai số đó ban đầu mang đơn vị khác nhau.\nBước 5: Kết luận\nDiện tích xung quanh bằng $2400$ cm². Chọn C.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-02",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đường kính trong công thức thể tích",
          "prompt": "Một khối trụ có đường kính đáy $8$ cm, chiều cao $0{,}15$ m. Thể tích bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $240\\pi$ cm³.",
            "B. $960\\pi$ cm³.",
            "C. $120\\pi$ cm³.",
            "D. $2{,}4\\pi$ cm³."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định bán kính\nĐường kính đáy bằng $8$ cm nên bán kính là $r=8/2=4$ cm.\nCông thức thể tích dùng bán kính, không dùng đường kính.\nBước 2: Đổi đơn vị chiều cao\nCó $0{,}15$ m $=15$ cm.\nVì vậy $r$ và $h$ đã cùng đơn vị cm.\nBước 3: Tính diện tích đáy và thể tích\nDiện tích đáy là $S=\\pi r^2=16\\pi$ cm².\nThể tích trụ bằng diện tích đáy nhân chiều cao: $V=16\\pi\\cdot15=240\\pi$ cm³.\nBước 4: Kiểm tra các hệ số\nNếu lấy $8$ thay cho $r$, bình phương sẽ làm diện tích đáy tăng $4$ lần.\nKhối trụ không có hệ số $1/3$ như khối nón.\nBước 5: Kết luận\n$V=240\\pi$ cm³. Chọn A.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-03",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Diện tích nón dùng đường sinh",
          "prompt": "Hình nón có bán kính đáy $5$ cm, chiều cao $12$ cm, đường sinh $13$ cm. Tính diện tích xung quanh.",
          "svg": svgGrade9RoundSolid({"kind":"cone","r":5,"h":12,"labels":true,"rLabel":"5 cm","hLabel":"12 cm","lLabel":"13 cm","title":"Diện tích nón dùng đường sinh"}),
          "options": [
            "A. $60\\pi$ cm².",
            "B. $65\\pi$ cm².",
            "C. $130\\pi$ cm².",
            "D. $90\\pi$ cm²."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Phân biệt chiều cao và đường sinh\nBán kính đáy là $r=5$ cm, chiều cao $h=12$ cm, đường sinh $l=13$ cm.\nDiện tích mặt bên dùng đường sinh vì nó là bán kính của hình quạt khai triển.\nBước 2: Chọn công thức\nDiện tích xung quanh hình nón là $S_{xq}=\\pi rl$.\nKhông thay $l$ bằng chiều cao $h$.\nBước 3: Thay số\nCó $S_{xq}=\\pi\\cdot5\\cdot13=65\\pi$ cm².\nBước 4: Kiểm tra dữ kiện và phần diện tích\nCác kích thước thỏa $5^2+12^2=13^2$, đúng tam giác vuông tạo bởi bán kính, chiều cao và đường sinh.\nĐề không hỏi diện tích toàn phần nên không cộng thêm $25\\pi$ cm² của đáy.\nBước 5: Kết luận\nDiện tích xung quanh là $65\\pi$ cm². Chọn B.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-04",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Từ đường sinh đến thể tích",
          "prompt": "Hình nón có bán kính đáy $8$ cm và đường sinh $17$ cm. Thể tích bằng bao nhiêu?",
          "svg": svgGrade9RoundSolid({"kind":"cone","r":8,"h":15,"labels":true,"rLabel":"8 cm","hLabel":"h","lLabel":"17 cm","title":"Từ đường sinh đến thể tích"}),
          "options": [
            "A. $960\\pi$ cm³.",
            "B. $\\frac{1088\\pi}{3}$ cm³.",
            "C. $192\\pi$ cm³.",
            "D. $320\\pi$ cm³."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận ra chiều cao chưa biết\nThể tích nón dùng chiều cao vuông góc với đáy, trong khi $17$ cm đã cho là đường sinh.\nCần tính chiều cao trước.\nBước 2: Dùng tam giác vuông qua trục\nChiều cao $h$, bán kính $8$ và đường sinh $17$ tạo thành tam giác vuông có cạnh huyền $17$.\nVì vậy $h^2=17^2-8^2=289-64=225$, nên $h=15$ cm.\nBước 3: Tính thể tích\nÁp dụng $V=\\frac13\\pi r^2h$.\nThay số: $V=\\frac13\\pi\\cdot64\\cdot15=320\\pi$ cm³.\nBước 4: Kiểm tra điều kiện hình\nĐường sinh $17>8$ nên chiều cao tính được dương; hình nón không suy biến.\nHệ số $1/3$ và chiều cao $15$ đều phải giữ đúng trong công thức.\nBước 5: Kết luận\n$V=320\\pi$ cm³. Chọn D.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-05",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Lớp phủ mặt ngoài quả cầu",
          "prompt": "Một quả cầu có đường kính $18$ dm. Phủ kín mặt ngoài bằng một lớp sơn rất mỏng, bỏ qua hao hụt. Diện tích cần phủ là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $81\\pi$ dm².",
            "B. $324\\pi$ dm².",
            "C. $1296\\pi$ dm².",
            "D. $972\\pi$ dm²."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tìm bán kính quả cầu\nĐường kính $18$ dm cho bán kính $r=9$ dm.\nLớp sơn rất mỏng nên diện tích cần phủ được tính bằng diện tích mặt cầu ban đầu.\nBước 2: Chọn công thức diện tích mặt cầu\nCông thức là $S=4\\pi r^2$.\nĐây là diện tích toàn mặt cong, không phải diện tích hình tròn lớn.\nBước 3: Thực hiện phép tính\nCó $r^2=9^2=81$.\nDo đó $S=4\\pi\\cdot81=324\\pi$ dm².\nBước 4: Kiểm tra yêu cầu phủ kín\nPhủ kín mặt ngoài và bỏ qua hao hụt nên không cần thêm hay bớt phần diện tích nào.\nGiá trị $81\\pi$ chỉ tính một hình tròn bán kính $9$; lấy $18$ làm bán kính lại tăng kết quả $4$ lần.\nBước 5: Kết luận\nDiện tích cần phủ là $324\\pi$ dm². Chọn B.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-06",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Thể tích viên cầu và đơn vị dung tích",
          "prompt": "Một viên bi đặc hình cầu có bán kính $1{,}5$ cm. Thể tích viên bi, tính bằng mL, bằng bao nhiêu? Biết $1$ cm³ $=1$ mL.",
          "svg": "",
          "options": [
            "A. $9\\pi$ mL.",
            "B. $\\frac{27\\pi}{8}$ mL.",
            "C. $\\frac{9\\pi}{2}$ mL.",
            "D. $3\\pi$ mL."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhận diện đại lượng cần tính\nViên bi đặc hình cầu có bán kính $r=1{,}5=3/2$ cm.\nĐề hỏi thể tích, nên dùng $V=\\frac43\\pi r^3$.\nBước 2: Tính lập phương bán kính\nCó $r^3=(3/2)^3=27/8$ cm³.\nCần lập phương cả tử và mẫu, không chỉ bình phương bán kính như khi tính diện tích.\nBước 3: Tính thể tích theo cm³\nCó $V=\\frac43\\pi\\cdot\\frac{27}{8}=\\frac{108\\pi}{24}=\\frac{9\\pi}{2}$ cm³.\nBước 4: Đổi sang mL\nTheo đề, $1$ cm³ $=1$ mL nên giá trị số giữ nguyên.\nThể tích là $9\\pi/2$ mL, không nhân thêm hệ số đổi đơn vị nào.\nBước 5: Kết luận\nChọn C.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-07",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Mặt tiếp giáp không nằm ngoài vật",
          "prompt": "Một vật đặc gồm khối trụ bán kính $3$ cm, cao $8$ cm, ghép với một nửa khối cầu cùng bán kính ở phía trên. Hai mặt tròn ghép khít. Tính diện tích toàn bộ mặt ngoài, kể cả đáy phẳng dưới; bỏ qua độ dày lớp phủ.",
          "svg": svgGrade9RoundNet({"kind":"capsule-section","r":3,"h":8,"title":"Mặt tiếp giáp không nằm ngoài vật"}),
          "options": [
            "A. $66\\pi$ cm².",
            "B. $84\\pi$ cm².",
            "C. $93\\pi$ cm².",
            "D. $75\\pi$ cm²."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Liệt kê các mặt còn lộ ra ngoài\nMặt ngoài gồm mặt bên trụ, mặt cong của nửa cầu và đáy phẳng dưới của trụ.\nHai mặt tròn ghép khít nằm bên trong vật nên không thuộc mặt ngoài.\nBước 2: Tính mặt bên trụ\nVới $r=3$ cm và $h=8$ cm, diện tích là $2\\pi rh=2\\pi\\cdot3\\cdot8=48\\pi$ cm².\nBước 3: Tính mặt cong nửa cầu\nMặt cong nửa cầu bằng một nửa diện tích mặt cầu: $\\frac12\\cdot4\\pi r^2=2\\pi r^2=18\\pi$ cm².\nKhông cộng đáy tròn của nửa cầu vì nó chính là mặt tiếp giáp.\nBước 4: Cộng đáy dưới và tổng hợp\nĐáy dưới có diện tích $\\pi r^2=9\\pi$ cm².\nTổng cần tính là $48\\pi+18\\pi+9\\pi=75\\pi$ cm².\nBước 5: Kết luận\nDiện tích toàn bộ mặt ngoài là $75\\pi$ cm². Chọn D.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-08",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Vật liệu của hộp trụ kín",
          "prompt": "Hộp hình trụ kín có bán kính đáy $4$ cm và cao $9$ cm. Bỏ qua bề dày, mép nối và hao hụt. Tổng diện tích tấm vật liệu làm hộp là bao nhiêu?",
          "svg": svgGrade9RoundSolid({"kind":"cylinder","r":4,"h":9,"labels":true,"rLabel":"4 cm","hLabel":"9 cm","title":"Vật liệu của hộp trụ kín"}),
          "options": [
            "A. $72\\pi$ cm².",
            "B. $88\\pi$ cm².",
            "C. $104\\pi$ cm².",
            "D. $144\\pi$ cm²."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Phân tích từ “hộp kín”\nHộp kín cần vật liệu cho mặt bên và cả hai đáy tròn.\nKhông được chỉ tính một đáy như hộp không nắp.\nBước 2: Tính diện tích mặt bên\nCó $S_{xq}=2\\pi rh=2\\pi\\cdot4\\cdot9=72\\pi$ cm².\nBước 3: Tính hai đáy\nMỗi đáy có diện tích $\\pi\\cdot4^2=16\\pi$ cm².\nHai đáy cần $32\\pi$ cm².\nBước 4: Tổng hợp vật liệu\nTổng diện tích là $72\\pi+32\\pi=104\\pi$ cm².\nĐề đã bỏ qua mép nối, bề dày và hao hụt nên không cộng phần phụ.\nBước 5: Kết luận\nCần $104\\pi$ cm² vật liệu. Chọn C.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-09",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Một phần mặt bên nón",
          "prompt": "Hình nón có bán kính đáy $6$ cm và đường sinh $10$ cm. Sơn phần mặt bên giữa hai đường sinh ứng với cung đáy $150^\\circ$; lấy đúng phần ứng với cung này, không lấy phần còn lại. Diện tích được sơn là bao nhiêu?",
          "svg": svgGrade9RoundNet({"kind":"sector","l":10,"angle":216,"rayLabel":"10 cm","highlight":90,"angleLabel":"Khai triển toàn mặt bên","arcLabel":"Phần tô ứng với cung đáy 150°","title":"Một phần mặt bên nón"}),
          "options": [
            "A. $25\\pi$ cm².",
            "B. $\\frac{125\\pi}{3}$ cm².",
            "C. $35\\pi$ cm².",
            "D. $60\\pi$ cm²."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định tỉ phần mặt bên\nCung đáy $150^\\circ$ chiếm $150/360=5/12$ chu vi đáy.\nCác đường sinh có cùng độ dài nên phần mặt bên tương ứng cũng chiếm $5/12$ toàn mặt bên.\nBước 2: Tính diện tích mặt bên đầy đủ\nVới $r=6$ cm, $l=10$ cm, có $S_{xq}=\\pi rl=60\\pi$ cm².\nBước 3: Tính diện tích được sơn\nLấy đúng tỉ phần đã xác định: $S=\\frac5{12}\\cdot60\\pi=25\\pi$ cm².\nBước 4: Phân biệt góc đáy và góc khai triển\nKhi khai triển, cung dài không đổi nhưng bán kính quạt là $l=10$, nên toàn mặt bên ứng với góc $360^\\circ\\cdot6/10=216^\\circ$.\nPhần sơn ứng với $216^\\circ\\cdot5/12=90^\\circ$, không phải $150^\\circ$ trong hình quạt khai triển.\nBước 5: Kết luận\nDiện tích sơn là $25\\pi$ cm². Chọn A.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-10",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Từ đường tròn lớn tới mặt cầu",
          "prompt": "Một đường tròn lớn của mặt cầu có chu vi $14\\pi$ cm. Diện tích mặt cầu bằng bao nhiêu?",
          "svg": svgGrade9RoundSolid({"kind":"sphere","r":7,"h":0,"labels":true,"rLabel":"R","note":"Đường tròn lớn có chu vi 14π cm","title":"Từ đường tròn lớn tới mặt cầu"}),
          "options": [
            "A. $49\\pi$ cm².",
            "B. $196\\pi$ cm².",
            "C. $784\\pi$ cm².",
            "D. $98\\pi$ cm²."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Liên hệ đường tròn lớn với mặt cầu\nĐường tròn lớn nằm trong mặt phẳng qua tâm cầu.\nBán kính của nó bằng bán kính $R$ của mặt cầu.\nBước 2: Tính bán kính từ chu vi\nChu vi đã cho là $14\\pi$ cm, nên $2\\pi R=14\\pi$.\nChia cho $2\\pi>0$, được $R=7$ cm.\nBước 3: Tính diện tích mặt cầu\nÁp dụng $S=4\\pi R^2$.\nThay số được $S=4\\pi\\cdot49=196\\pi$ cm².\nBước 4: Kiểm tra loại diện tích\n$\\pi R^2=49\\pi$ cm² chỉ là diện tích hình tròn lớn.\nĐề hỏi toàn bộ mặt cầu nên phải dùng hệ số $4$.\nBước 5: Kết luận\nDiện tích mặt cầu là $196\\pi$ cm². Chọn B.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-11",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bán kính thiết diện không bằng bán kính cầu",
          "prompt": "Mặt phẳng cách tâm cầu $5$ cm cắt khối cầu bán kính $13$ cm. Tính bán kính hình tròn thiết diện.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"H":[0,5],"A":[12,5],"B":[-12,5]},"edges":[["O","H","5 cm"],["H","A","?"],["B","H",""],["O","A","13 cm"]],"circles":[{"center":[0,0],"r":13}],"right":[["O","H","A"]],"notes":["Mặt cắt qua tâm, vuông góc mặt phẳng thiết diện"],"edgeLabelOffsets":{"H-A":[0,-52],"O-A":[0,40]},"title":"Bán kính thiết diện không bằng bán kính cầu"}),
          "options": [
            "A. $8$ cm.",
            "B. $\\sqrt{194}$ cm.",
            "C. $24$ cm.",
            "D. $12$ cm."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định tâm thiết diện\nGọi $O$ là tâm cầu, $H$ là chân đường vuông góc từ $O$ xuống mặt phẳng cắt.\nVới điểm $A$ bất kỳ trên đường tròn thiết diện, $OA=13$ cm và $OH=5$ cm.\nBước 2: Nhận ra tam giác vuông\nVì $OH$ vuông góc mặt phẳng nên $OH\\perp HA$.\nTam giác $OHA$ vuông tại $H$, có $OA$ là cạnh huyền.\nBước 3: Tính bán kính thiết diện\nPythagore cho $HA^2=OA^2-OH^2=13^2-5^2=144$.\nDo đó $HA=12$ cm. Giá trị này không phụ thuộc điểm $A$, nên $H$ là tâm và $HA$ là bán kính thiết diện.\nBước 4: Kiểm tra sự tồn tại\nKhoảng cách đến mặt phẳng $5<13$, nên mặt phẳng thực sự cắt cầu theo một đường tròn có bán kính dương.\nKhông lấy hiệu độ dài $13-5$ vì ba đoạn đang thuộc tam giác vuông, không cùng một đường thẳng.\nBước 5: Kết luận\nBán kính thiết diện là $12$ cm. Chọn D.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-nangCao-12",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Nón nội tiếp cầu và phía của mặt đáy",
          "prompt": "Hình nón nội tiếp mặt cầu tâm $O$, bán kính $5$ cm. Đỉnh $S$ trên mặt cầu; chân chiều cao $H$ nằm trên tia đối của tia $OS$, với $OH=3$ cm. Đáy nón là hình tròn do mặt phẳng qua $H$ vuông góc $OS$ cắt khối cầu. Tính đường sinh nón.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"S":[0,5],"H":[0,-3],"A":[4,-3],"B":[-4,-3]},"edges":[["S","A","?"],["S","B",""],["B","A",""],["S","H","",true],["O","A","5 cm",true],["O","H","3 cm"]],"circles":[{"center":[0,0],"r":5}],"right":[["S","H","A"]],"notes":["Thiết diện qua trục của nón và tâm cầu"],"title":"Nón nội tiếp cầu và phía của mặt đáy"}),
          "options": [
            "A. $2\\sqrt5$ cm.",
            "B. $4\\sqrt5$ cm.",
            "C. $\\sqrt{89}$ cm.",
            "D. $8$ cm."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định đúng vị trí đáy\n$H$ thuộc tia đối của $OS$, nên $H$ và $S$ nằm hai phía của $O$.\nVì $SO=5$ cm và $OH=3$ cm, chiều cao nón là $SH=SO+OH=8$ cm.\nBước 2: Tìm bán kính đáy\nLấy $A$ trên đường tròn đáy. Khi đó $OA=5$ cm và $OH\\perp HA$.\nPythagore cho $HA^2=OA^2-OH^2=25-9=16$, nên $HA=4$ cm.\nBước 3: Tìm đường sinh\nTam giác $SHA$ vuông tại $H$, có đường sinh $SA$ là cạnh huyền.\nVậy $SA^2=SH^2+HA^2=8^2+4^2=80$.\nBước 4: Rút gọn và kiểm tra\nVì độ dài dương, $SA=\\sqrt{80}=4\\sqrt5$ cm.\nĐáy tồn tại vì $OH=3<5$; lấy $5-3$ làm chiều cao sẽ đặt đáy sai phía so với giả thiết.\nBước 5: Kết luận\nĐường sinh bằng $4\\sqrt5$ cm. Chọn B.",
          "manThi": "hinhKhongGian"
        }
      ],
      "hsg": [
        {
          "id": "l9-hinh-tru-non-cau-hsg-01",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Cạnh nào được cuộn làm chu vi",
          "prompt": "Cuộn tấm chữ nhật kích thước $20\\pi$ cm và $12$ cm thành mặt bên hình trụ, sao cho cạnh $20\\pi$ cm trở thành chu vi đáy. Hai mép ghép sát, không chồng, không hao hụt. Tìm bán kính đáy, đơn vị cm.",
          "svg": svgGrade9RoundNet({"kind":"rectangle","a":62.83185307179586,"b":12,"aLabel":"20π cm — trở thành chu vi","bLabel":"12 cm","title":"Cạnh nào được cuộn làm chu vi"}),
          "correctAnswer": "10",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định cạnh nào tạo đáy\nĐề cho cạnh $20\\pi$ cm cuộn thành chu vi đáy. Cạnh $12$ cm còn lại trở thành chiều cao hình trụ.\nHai mép ghép sát, không hao hụt nên chu vi đúng bằng $20\\pi$ cm.\nBước 2: Chọn công thức chu vi\nVới bán kính đáy $r>0$, chu vi đường tròn đáy là $2\\pi r$.\nBước 3: Lập và giải phương trình\n$2\\pi r=20\\pi$.\nChia hai vế cho $2\\pi>0$, được $r=10$ cm.\nBước 4: Kiểm lại kích thước\nChu vi với bán kính $10$ là $2\\pi\\cdot10=20\\pi$ cm, đúng cạnh dùng để quấn.\nChiều cao vẫn là $12$ cm; không lấy cạnh này để tính bán kính.\nBước 5: Kết luận\nBán kính đáy bằng $10$ cm.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-hsg-02",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Cuộn quạt tròn thành nón",
          "prompt": "Một hình quạt tròn bán kính $10$ cm, góc ở tâm $216^\\circ$ được cuộn thành mặt bên hình nón. Hai bán kính ghép sát, không chồng và không cắt bỏ vật liệu. Tính chiều cao hình nón, đơn vị cm.",
          "svg": svgGrade9RoundNet({"kind":"sector","l":10,"angle":216,"rayLabel":"10 cm","angleLabel":"216°","title":"Cuộn quạt tròn thành nón"}),
          "correctAnswer": "8",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Liên hệ hình quạt với hình nón\nKhi cuộn, bán kính hình quạt trở thành đường sinh $l=10$ cm của nón.\nĐộ dài cung quạt trở thành chu vi đáy vì hai mép ghép sát, không chồng.\nBước 2: Tính độ dài cung\nCung chiếm $216/360$ của đường tròn bán kính $10$, nên dài $2\\pi\\cdot10\\cdot216/360=12\\pi$ cm.\nBước 3: Tìm bán kính đáy\nGọi bán kính đáy là $r>0$. Từ $2\\pi r=12\\pi$, có $r=6$ cm.\nChú ý $10$ là đường sinh, không phải bán kính đáy.\nBước 4: Dùng tam giác vuông trong hình nón\nChiều cao $h$, bán kính đáy $r$ và đường sinh $l$ tạo tam giác vuông với cạnh huyền $l$.\n$h^2=l^2-r^2=100-36=64$, nên $h=8$ cm vì chiều cao dương.\nBước 5: Kết luận và kiểm không suy biến\nChiều cao bằng $8$ cm. Có $0<r=6<l=10$, nên hình nón có chiều cao dương; góc quạt nhỏ hơn $360^\\circ$ phù hợp điều đó.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-hsg-03",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Ống trụ rỗng có hai đầu mở",
          "prompt": "Một ống trụ thẳng có đường kính ngoài $30$ mm, bề dày thành đều $3$ mm và dài $20$ cm. Hai đầu mở, không có nắp hay đáy. Nếu thể tích vật liệu bằng $k\\pi$ cm³ thì $k$ bằng bao nhiêu?",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"A":[15,0],"B":[12,0]},"edges":[["O","A",""]],"circles":[{"center":[0,0],"r":15},{"center":[0,0],"r":12}],"notes":["Mặt đầu ống: đường kính ngoài 30 mm; thành dày 3 mm"],"title":"Ống trụ rỗng có hai đầu mở"}),
          "correctAnswer": "16.2",
          "dapAnChapNhan": [
            "16,2"
          ],
          "solution": "Bước 1: Đổi về cùng đơn vị\nĐường kính ngoài $30$ mm bằng $3$ cm, nên bán kính ngoài $R=1{,}5$ cm.\nBề dày $3$ mm bằng $0{,}3$ cm; chiều dài ống là $20$ cm.\nBước 2: Tính bán kính trong\nBề dày thành được đo theo bán kính, nên $r=R-0{,}3=1{,}2$ cm.\n$r>0$, vì vậy phần rỗng bên trong tồn tại.\nBước 3: Chọn phép trừ thể tích\nVật liệu chiếm hình trụ ngoài trừ hình trụ rỗng trong.\nHai trụ cùng chiều dài $20$ cm vì hai đầu mở, không có đáy hay nắp.\nBước 4: Tính thể tích vật liệu\n$V=\\pi(R^2-r^2)\\cdot20=\\pi(1{,}5^2-1{,}2^2)\\cdot20$.\n$1{,}5^2-1{,}2^2=2{,}25-1{,}44=0{,}81$, nên $V=16{,}2\\pi$ cm³.\nBước 5: Kết luận\n$k=16{,}2$. Không trừ bề dày khỏi chiều dài và không dùng đường kính thay bán kính trong công thức thể tích.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-hsg-04",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Suy công thức diện tích bên nón",
          "prompt": "Một hình nón có bán kính đáy $r>0$, đường sinh $l>r$. Cắt mặt bên theo một đường sinh rồi trải phẳng thành hình quạt. Dùng độ dài cung và diện tích quạt để chứng minh $S_{xq}=\\pi rl$. Giải thích vì sao không thay $l$ bằng chiều cao $h$.",
          "svg": svgGrade9RoundNet({"kind":"sector","l":5,"angle":144,"rayLabel":"l","angleLabel":"θ","arcLabel":"Cung dài 2πr","title":"Suy công thức diện tích bên nón"}),
          "solution": "Bước 1: Mô tả mặt bên sau khi trải\nCắt theo một đường sinh và trải phẳng, mặt bên thành hình quạt bán kính $l$.\nGọi góc ở tâm của quạt là $\\theta$ độ. Cung ngoài có độ dài bằng chu vi đáy $2\\pi r$.\nBước 2: Lập hệ thức độ dài cung\nĐộ dài cung quạt là $2\\pi l\\cdot\\theta/360$.\nSuy ra $2\\pi l\\cdot\\theta/360=2\\pi r$, nên $\\theta/360=r/l$ vì $l>0$.\nBước 3: Tính diện tích hình quạt\nDiện tích quạt là $\\pi l^2\\cdot\\theta/360$.\nThay tỉ số vừa tìm, được $S_{xq}=\\pi l^2(r/l)=\\pi rl$.\nBước 4: Giải thích vai trò đường sinh\nKhi trải mặt bên, các đoạn nối đỉnh nón đến đường tròn đáy có độ dài $l$; chúng trở thành bán kính quạt.\nChiều cao $h$ nằm bên trong khối nón, không nằm trên mặt bên để trở thành bán kính quạt.\nTheo Pythagore, $h=\\sqrt{l^2-r^2}<l$ vì $r>0$.\nBước 5: Kết luận\n$S_{xq}=\\pi rl$. Thay $l$ bằng $h$ sẽ cho diện tích nhỏ hơn giá trị thật.\nGiả thiết $0<r<l$ còn bảo đảm $0<\\theta<360$ và chiều cao dương.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-hsg-05",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "So sánh nón và trụ đúng giả thiết",
          "prompt": "Một hình nón và một hình trụ có cùng bán kính đáy $r>0$. Gọi $V_t,V_n$ lần lượt là thể tích trụ và nón. Dùng công thức thể tích chứng minh: $V_t=3V_n$ khi và chỉ khi hai chiều cao bằng nhau. Nếu bỏ giả thiết cùng bán kính, đẳng thức thể tích trên có còn buộc hai chiều cao bằng nhau không? Giải thích.",
          "svg": "",
          "solution": "Bước 1: Đặt tên hai chiều cao\nGọi $h_t,h_n>0$ lần lượt là chiều cao hình trụ và hình nón.\nHai hình có cùng diện tích đáy $\\pi r^2>0$.\nBước 2: Viết công thức thể tích\n$V_t=\\pi r^2h_t$ và $V_n=(1/3)\\pi r^2h_n$.\nVì vậy $3V_n=\\pi r^2h_n$.\nBước 3: Chứng minh tương đương\n$V_t=3V_n$ tương đương $\\pi r^2h_t=\\pi r^2h_n$.\nChia cho $\\pi r^2>0$ được $h_t=h_n$; ngược lại, hai chiều cao bằng nhau thì thay công thức cũng cho đẳng thức thể tích.\nBước 4: Kiểm khi bỏ giả thiết cùng bán kính\nLấy trụ có bán kính $2$, chiều cao $1$: $V_t=4\\pi$.\nLấy nón có bán kính $1$, chiều cao $4$: $V_n=4\\pi/3$.\nCó $V_t=3V_n$ nhưng hai chiều cao $1,4$ khác nhau.\nBước 5: Kết luận\nKhi cùng bán kính dương, điều kiện thể tích và điều kiện chiều cao tương đương.\nNếu bỏ giả thiết ấy, đẳng thức thể tích không còn buộc hai chiều cao bằng nhau, như ví dụ cụ thể ở bước 4.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-hsg-06",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "dien",
          "title": "Nhãn có chồng mép",
          "prompt": "Quấn một nhãn giấy quanh thân trụ bán kính $3{,}5$ cm đúng một vòng, rồi chồng thêm hai mép một đoạn dài $1{,}2$ cm theo chiều quấn. Bỏ qua độ dày giấy. Cần chiều dài nhãn bao nhiêu cm? Làm tròn đến một chữ số thập phân.",
          "svg": "",
          "correctAnswer": "23.2",
          "dapAnChapNhan": [
            "23,2"
          ],
          "solution": "Bước 1: Tách chiều dài nhãn thành hai phần\nNhãn cần đủ một vòng quanh thân trụ, rồi thêm đúng độ dài chồng mép $1{,}2$ cm.\nBỏ qua độ dày giấy nên một vòng có độ dài bằng chu vi tròn bán kính $3{,}5$ cm.\nBước 2: Tính chu vi thân\n$C=2\\pi r=2\\pi\\cdot3{,}5=7\\pi$ cm.\nBước 3: Cộng phần chồng mép\nChiều dài nhãn là $L=7\\pi+1{,}2$ cm.\nChỉ cộng $1{,}2$ một lần: phần dài hơn một vòng chính là phần bị phủ chồng, không phải hai phần dư độc lập.\nBước 4: Tính gần đúng\n$L\\approx23{,}1911$ cm.\nHàng phần trăm là $9\\ge5$, nên khi làm tròn đến một chữ số thập phân, $23{,}1$ được tăng thành $23{,}2$.\nBước 5: Kết luận\nCần nhãn dài khoảng $23{,}2$ cm.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-hsg-07",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Thiết kế bình có đáy nón",
          "prompt": "Lòng bình gồm một phần trụ bán kính $3$ cm, cao $h$ cm, ghép với phần nón ở dưới cùng bán kính, có chiều cao $(h-2)$ cm. Hai phần chỉ chung mặt đáy, không chồng thể tích. Dung tích lòng bình là $66\\pi$ cm³. Lập phương trình tìm $h$, biết cả hai phần có chiều cao dương.",
          "svg": svgGrade9RoundNet({"kind":"tank-section","r":3,"h":6,"coneHeight":4,"title":"Thiết kế bình có đáy nón"}),
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Ghi điều kiện chiều cao\nPhần trụ cao $h$, phần nón cao $h-2$. Cả hai dương nên cần $h>2$.\nHai phần chỉ chung mặt đáy, nên dung tích bằng tổng thể tích, không trừ phần chồng.\nBước 2: Tính từng thể tích theo h\nPhần trụ: $V_t=\\pi\\cdot3^2h=9\\pi h$.\nPhần nón: $V_n=(1/3)\\pi\\cdot3^2(h-2)=3\\pi(h-2)$.\nBước 3: Lập và giải phương trình\n$9\\pi h+3\\pi(h-2)=66\\pi$.\nChia cho $\\pi>0$: $9h+3h-6=66$, nên $12h=72$, tức $h=6$ cm.\nBước 4: Kiểm điều kiện và dung tích\n$6>2$; chiều cao nón bằng $4$ cm, dương.\nThể tích hai phần là $54\\pi$ và $12\\pi$ cm³, cộng lại đúng $66\\pi$ cm³.\nBước 5: Kết luận\n$h=6$ cm. Không tính cả bình như một trụ cao $2h-2$, vì phần nón có thể tích chỉ bằng một phần ba trụ cùng đáy và chiều cao.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-hinh-tru-non-cau-hsg-08",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khoảng trống trong hộp ôm vừa quả cầu",
          "prompt": "Một quả cầu đặc có diện tích mặt ngoài $144\\pi$ cm², đặt vừa khít trong hộp trụ: thành trụ tiếp xúc quả cầu theo đường tròn lớn, hai đáy tiếp xúc tại hai cực. Bỏ qua bề dày hộp. Phần thể tích trong hộp ngoài quả cầu bằng $k\\pi$ cm³. Tính $k$.",
          "svg": svgGrade9RoundNet({"kind":"sphere-in-cylinder","r":6,"title":"Khoảng trống trong hộp ôm vừa quả cầu"}),
          "correctAnswer": "144",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm bán kính cầu từ diện tích\nCông thức mặt cầu là $S=4\\pi R^2$.\n$4\\pi R^2=144\\pi$ cho $R^2=36$. Vì bán kính dương, nhận $R=6$ cm.\nBước 2: Xác định kích thước hộp trụ\nThành hộp ôm đường tròn lớn của cầu nên bán kính trụ bằng $6$ cm.\nHai đáy chạm hai cực đối diện nên chiều cao trụ bằng đường kính cầu $2R=12$ cm.\nBước 3: Tính thể tích trụ và cầu\n$V_t=\\pi\\cdot6^2\\cdot12=432\\pi$ cm³.\n$V_c=(4/3)\\pi\\cdot6^3=288\\pi$ cm³.\nBước 4: Lấy phần trong hộp nhưng ngoài cầu\nQuả cầu nằm hoàn toàn trong hộp, nên thể tích trống là $V_t-V_c=144\\pi$ cm³.\nGiá trị dương, phù hợp hộp còn phần trống quanh cầu.\nBước 5: Kết luận\n$k=144$. Không dùng $6$ cm làm chiều cao trụ: khoảng cách giữa hai đáy là cả đường kính $12$ cm.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-hsg-09",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai thiết diện đối xứng của cầu",
          "prompt": "Trong khối cầu tâm $O$, bán kính $R>0$, hai mặt phẳng song song nằm ở hai phía của $O$, cùng cách $O$ một khoảng $d$, với $0<d<R$. Chứng minh hai hình tròn thiết diện có cùng bán kính. Ngược lại, nếu hai mặt phẳng song song phân biệt cắt khối cầu thành hai hình tròn cùng bán kính dương, chứng minh chúng cách đều $O$ và ở hai phía của $O$.",
          "svg": svgGrade9Circle({"points":{"O":[0,0],"H":[0,3],"K":[0,-3],"A":[4,3],"B":[-4,3],"C":[4,-3],"D":[-4,-3]},"edges":[["A","B",""],["C","D",""],["H","K","",true],["O","A","R",true],["O","C","",true]],"circles":[{"center":[0,0],"r":5}],"right":[["O","H","A"],["O","K","C"]],"notes":["Thiết diện qua O: hai mặt phẳng cách tâm cùng khoảng d"],"title":"Hai thiết diện đối xứng của cầu"}),
          "solution": "Bước 1: Liên hệ bán kính thiết diện với khoảng cách đến tâm\nGọi $H$ là hình chiếu vuông góc của tâm $O$ lên một mặt phẳng cắt cầu; $H$ là tâm hình tròn thiết diện.\nLấy $M$ trên đường tròn thiết diện. Khi đó $OM=R$, $HM=r$ và tam giác $OHM$ vuông tại $H$.\nPythagore cho $r^2=R^2-OH^2$.\nBước 2: Chứng minh chiều thuận\nHai mặt phẳng cùng cách $O$ một khoảng $d$, nên bán kính thiết diện thỏa $r_1^2=R^2-d^2=r_2^2$.\nVì $0<d<R$, hai bán kính đều dương. Lấy căn dương được $r_1=r_2$.\nBước 3: Chứng minh hai khoảng cách bằng nhau ở chiều ngược\nGiả sử hai thiết diện có cùng bán kính $r>0$. Gọi các khoảng cách đến tâm là $d_1,d_2\\ge0$.\nCông thức ở bước 1 cho $d_1^2=R^2-r^2=d_2^2$.\nVì khoảng cách không âm, suy ra $d_1=d_2$.\nBước 4: Xác định hai phía của tâm\nKẻ đường qua $O$ vuông góc với hai mặt phẳng song song, cắt chúng tại $H_1,H_2$.\nNếu hai mặt phẳng ở cùng phía thì $H_1,H_2$ ở cùng tia xuất phát từ $O$. Lại có $OH_1=OH_2$, nên $H_1=H_2$; hai mặt phẳng song song qua cùng điểm sẽ trùng, trái giả thiết.\nNếu khoảng cách bằng $0$, cả hai mặt phẳng qua $O$ và song song, cũng phải trùng nhau. Vậy khoảng cách chung dương và chúng ở hai phía của $O$.\nBước 5: Kết luận\nHai chiều đã được chứng minh. Giả thiết bán kính thiết diện dương loại trường hợp mặt phẳng chỉ tiếp xúc cầu tại một điểm.",
          "manThi": "hinhKhongGian"
        },
        {
          "id": "l9-hinh-tru-non-cau-hsg-10",
          "lop": 9,
          "chuDe": "hinh-tru-non-cau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai cách cuộn cùng một tấm giấy",
          "prompt": "Tấm chữ nhật có hai cạnh $a>b>0$. Cuộn không chồng mép, không hao hụt: cách I lấy cạnh $a$ làm chu vi đáy, cách II lấy cạnh $b$ làm chu vi đáy. Gọi thể tích hai hình trụ tạo thành là $V_1,V_2$. Chứng minh $V_1/V_2=a/b$ và kết luận cách nào chứa được nhiều hơn, dù hai diện tích mặt bên bằng nhau.",
          "svg": svgGrade9RoundNet({"kind":"rectangle","a":30,"b":20,"aLabel":"a — chu vi ở cách I","bLabel":"b — chu vi ở cách II","title":"Hai cách cuộn cùng một tấm giấy"}),
          "solution": "Bước 1: Xác định kích thước cách I\nCạnh $a$ làm chu vi nên $2\\pi r_1=a$, tức $r_1=a/(2\\pi)$.\nCạnh còn lại là chiều cao $h_1=b$.\nBước 2: Tính thể tích cách I\n$V_1=\\pi r_1^2h_1=\\pi[a/(2\\pi)]^2b=a^2b/(4\\pi)$.\nBước 3: Làm tương tự cho cách II\nLấy cạnh $b$ làm chu vi: $r_2=b/(2\\pi)$, chiều cao $h_2=a$.\nDo đó $V_2=\\pi[b/(2\\pi)]^2a=b^2a/(4\\pi)$.\nBước 4: So sánh hai thể tích\nVì $a,b>0$, cả hai thể tích dương nên chia được.\n$V_1/V_2=[a^2b/(4\\pi)]/[b^2a/(4\\pi)]=a/b>1$ do $a>b$.\nBước 5: Kết luận\nCách I chứa được nhiều hơn. Cả hai mặt bên có diện tích $ab$ vì cùng một tấm giấy, nhưng thể tích phụ thuộc bình phương bán kính nên không buộc bằng nhau.\nNếu $a=b>0$ thì tỉ số bằng $1$; cạnh bằng $0$ không tạo hình trụ có thể tích dương.",
          "manThi": "hinhKhongGian"
        }
      ]
    },
    'thong-ke-xac-suat': {
      "kha": [
        {
          "id": "l9-thong-ke-xac-suat-kha-01",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tần số không phải là giá trị đo",
          "prompt": "Mẫu số liệu là $2,3,2,4,3,2,5,4,2,3$. Tần số của giá trị $2$ là bao nhiêu?",
          "svg": "",
          "options": [
            "A. 2.",
            "B. 3.",
            "C. 4.",
            "D. 10."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhắc nghĩa tần số\nTần số của giá trị $2$ là số lần số $2$ xuất hiện trong mẫu.\nNó không phải bản thân giá trị đang xét.\nBước 2: Đếm ở nửa đầu mẫu\nTrong năm số đầu $2,3,2,4,3$, số $2$ xuất hiện ở vị trí $1$ và $3$, được $2$ lần.\nBước 3: Đếm ở nửa sau mẫu\nTrong năm số sau $2,5,4,2,3$, số $2$ xuất hiện thêm $2$ lần, ở vị trí $6$ và $9$ của toàn mẫu.\nBước 4: Cộng và kiểm tra\nTổng số lần là $2+2=4$.\nMẫu có $10$ quan sát, nhưng chỉ $4$ quan sát mang giá trị $2$; không dùng cỡ mẫu làm tần số riêng của một giá trị.\nBước 5: Kết luận\nTần số cần tìm là $4$. Chọn C."
        },
        {
          "id": "l9-thong-ke-xac-suat-kha-02",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bảng tần số phải giữ đúng nhãn",
          "prompt": "Mẫu gồm $1,2,1,3,2,2,4,3,1,2,3,4$. Theo thứ tự giá trị $1,2,3,4$, dãy tần số nào đúng?",
          "svg": "",
          "options": [
            "A. $(3;4;3;2)$.",
            "B. $(4;3;3;2)$.",
            "C. $(3;4;2;3)$.",
            "D. $(3;3;3;3)$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Giữ thứ tự các giá trị\nĐề yêu cầu tần số theo thứ tự $1,2,3,4$.\nTa đếm riêng từng giá trị rồi ghi đúng vị trí tương ứng.\nBước 2: Đếm giá trị 1 và 2\nSố $1$ xuất hiện ở các vị trí $1,3,9$, nên có tần số $3$.\nSố $2$ xuất hiện ở các vị trí $2,5,6,10$, nên có tần số $4$.\nBước 3: Đếm giá trị 3 và 4\nSố $3$ xuất hiện ở các vị trí $4,8,11$, nên có tần số $3$.\nSố $4$ xuất hiện ở các vị trí $7,12$, nên có tần số $2$.\nBước 4: Kiểm tra tổng và nhãn\nTổng $3+4+3+2=12$ đúng số quan sát của mẫu.\nDãy phải giữ đúng nhãn; chỉ có tổng đúng chưa đủ nếu đổi chỗ tần số của hai giá trị.\nBước 5: Kết luận\nDãy tần số là $(3;4;3;2)$. Chọn A."
        },
        {
          "id": "l9-thong-ke-xac-suat-kha-03",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Kết quả cơ bản có thứ tự",
          "prompt": "Tung hai đồng xu cân đối độc lập, gọi là xu I và xu II. Ghi mặt của từng xu theo đúng thứ tự I, II; S là sấp, N là ngửa. Không gian mẫu đồng khả năng nào đúng?",
          "svg": "",
          "options": [
            "A. $\\{0,1,2\\}$.",
            "B. $\\{(S,S),(S,N),(N,N)\\}$.",
            "C. $\\{S,N\\}$.",
            "D. $\\{(S,S),(S,N),(N,S),(N,N)\\}$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định một kết quả\nMỗi kết quả là một cặp có thứ tự: mặt xu I đứng trước, mặt xu II đứng sau.\nMỗi xu có hai khả năng S hoặc N.\nBước 2: Liệt kê khi xu I sấp\nNếu xu I là S, xu II có thể là S hoặc N.\nTa được hai cặp $(S,S)$ và $(S,N)$.\nBước 3: Liệt kê khi xu I ngửa\nNếu xu I là N, tương tự có $(N,S)$ và $(N,N)$.\nVậy có tất cả $2\\cdot2=4$ kết quả phân biệt.\nBước 4: Giải thích tính đồng khả năng\nHai xu cân đối và độc lập nên mỗi cặp có xác suất $(1/2)(1/2)=1/4$.\n$(S,N)$ khác $(N,S)$ vì vị trí của hai xu khác nhau. Nếu chỉ ghi số mặt ngửa $0,1,2$, nhãn $1$ gom hai cặp nên ba nhãn đó không đồng khả năng.\nBước 5: Kết luận\nKhông gian mẫu là $\\{(S,S),(S,N),(N,S),(N,N)\\}$. Chọn D."
        }
      ],
      "nangCao": [
        {
          "id": "l9-thong-ke-xac-suat-nangCao-01",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tần số tương đối chính xác",
          "prompt": "Trong mẫu $80$ sản phẩm đo được, có $18$ sản phẩm mang giá trị $12$ mm. Tần số tương đối của giá trị $12$ mm bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $18\\%$.",
            "B. $22{,}5\\%$.",
            "C. $12\\%$.",
            "D. $25\\%$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Phân biệt giá trị và tần số\nGiá trị đang xét là $12$ mm, còn số lần giá trị này xuất hiện là $18$.\nCỡ mẫu gồm tất cả $80$ sản phẩm.\nBước 2: Chọn công thức tần số tương đối\nTần số tương đối bằng tần số của giá trị chia cho cỡ mẫu.\nVì vậy cần tính $18/80$, không lấy $12/80$.\nBước 3: Đổi sang phần trăm\nCó $18/80=9/40=0{,}225$.\nNhân với $100\\%$ được $22{,}5\\%$.\nBước 4: Giải thích ý nghĩa\nTrong mẫu đã đo, sản phẩm mang giá trị $12$ mm chiếm $22{,}5\\%$.\nĐây là mô tả dữ liệu của mẫu; dữ kiện này chưa đủ để khẳng định xác suất của một sản phẩm tương lai đúng bằng tỉ lệ đó.\nBước 5: Kết luận\nTần số tương đối là $22{,}5\\%$. Chọn B.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-02",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu",
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn biểu đồ đúng cả nhãn lẫn cột",
          "prompt": "Bảng tần số có các giá trị $0,1,2$ với tần số tương ứng $4,7,5$. Chọn biểu đồ đúng. Các trục tung trong cả bốn hình đều bắt đầu ở $0$ và dùng cùng thang chia.",
          "svg": svgGrade9Stat({"kind":"choices","panels":[{"labels":["0","1","2"],"values":[7,4,5]},{"labels":["0","1","2"],"values":[4,5,7]},{"labels":["0","1","2"],"values":[4,7,5]},{"labels":["1","2","3"],"values":[4,7,5]}],"ymax":8,"tick":2,"title":"Chọn biểu đồ đúng cả nhãn lẫn cột"}),
          "options": [
            "A. Hình I.",
            "B. Hình II.",
            "C. Hình III.",
            "D. Hình IV."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Ghi các cặp giá trị và tần số\nBảng yêu cầu ba cặp $(0;4)$, $(1;7)$, $(2;5)$.\nTrục ngang phải ghi đúng giá trị; độ cao mỗi cột phải bằng tần số đi kèm.\nBước 2: Đối chiếu hình III\nỞ hình III, cột tại $0$ cao $4$, cột tại $1$ cao $7$, cột tại $2$ cao $5$.\nBa cặp đều khớp bảng và các trục dùng thang chia đã cho.\nBước 3: Kiểm tra hai hình đổi độ cao\nHình I đổi tần số $4$ và $7$, nên gán sai số lần xuất hiện cho giá trị $0$ và $1$.\nHình II đổi tần số $7$ và $5$, nên gán sai cho giá trị $1$ và $2$.\nBước 4: Kiểm tra nhãn ở hình IV\nHình IV dùng các nhãn $1,2,3$ thay vì $0,1,2$.\nĐộ cao đúng nhưng đặt ở giá trị sai vẫn không biểu diễn đúng bảng.\nBước 5: Kết luận\nBiểu đồ đúng là hình III. Chọn C.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-03",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giá trị ở biên vào nhóm nào",
          "prompt": "Ghép mẫu $10,12,15,15,18,20,22,24$ vào ba nhóm $[10;15),[15;20),[20;25)$. Dãy tần số theo thứ tự ba nhóm là gì?",
          "svg": "",
          "options": [
            "A. $(4;2;2)$.",
            "B. $(2;3;3)$.",
            "C. $(2;4;2)$.",
            "D. $(3;2;3)$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đọc quy ước hai đầu nhóm\nKí hiệu $[a;b)$ nghĩa là nhận các giá trị $a\\le x<b$.\nĐầu trái được tính vào nhóm, đầu phải không được tính.\nBước 2: Đếm nhóm đầu\nNhóm $[10;15)$ nhận $10,12$, có tần số $2$.\nHai số $15$ không thuộc nhóm này vì $15$ là đầu phải.\nBước 3: Đếm hai nhóm còn lại\nNhóm $[15;20)$ nhận $15,15,18$, có tần số $3$.\nNhóm $[20;25)$ nhận $20,22,24$, có tần số $3$.\nBước 4: Kiểm tra tổng và các giá trị biên\nTổng tần số là $2+3+3=8$, đúng cỡ mẫu.\nHai lần xuất hiện của $15$ đều được đếm nhưng mỗi lần chỉ thuộc một nhóm; $20$ chỉ thuộc nhóm cuối.\nBước 5: Kết luận\nDãy tần số là $(2;3;3)$. Chọn B.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-04",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đọc histogram tần số tương đối",
          "prompt": "Histogram biểu diễn thời gian (phút) của $60$ lần giao hàng đã ghi nhận; các nhóm rộng bằng nhau, nhận đầu trái và loại đầu phải. Có bao nhiêu lần mất từ $10$ phút đến dưới $20$ phút?",
          "svg": svgGrade9Stat({"kind":"hist","labels":["[0;10)","[10;20)","[20;30)","[30;40)"],"values":[25,35,30,10],"ymax":40,"tick":10,"unit":"Tần số tương đối (%)","title":"Đọc histogram tần số tương đối"}),
          "options": [
            "A. 35 lần.",
            "B. 15 lần.",
            "C. 18 lần.",
            "D. 21 lần."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định nhóm cần đọc\n“Từ $10$ phút đến dưới $20$ phút” ứng với nhóm $[10;20)$.\nNhóm này nhận $10$ nhưng không nhận $20$.\nBước 2: Đọc đại lượng trên biểu đồ\nCột của nhóm $[10;20)$ biểu diễn tần số tương đối $35\\%$.\nSố $35$ là phần trăm, không phải số lần giao hàng.\nBước 3: Chuyển sang tần số\nCỡ mẫu là $60$, nên số lần thuộc nhóm bằng $60\\cdot35/100=21$.\nBước 4: Kiểm tra phạm vi đếm\nKhông cộng thêm nhóm bắt đầu từ $20$ phút vì đề yêu cầu dưới $20$.\nTỉ số $21/60=35\\%$ khớp lại đúng số đọc trên biểu đồ.\nBước 5: Kết luận\nCó $21$ lần giao hàng trong khoảng thời gian này. Chọn D.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-05",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Có hoàn lại nên nhận cả hai số giống nhau",
          "prompt": "Hộp có ba thẻ giống nhau về hình dạng, ghi $1,2,3$. Rút ngẫu nhiên đều một thẻ, ghi số rồi bỏ lại; trộn và rút độc lập lần hai. Xác suất để số lần đầu lớn hơn số lần sau là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac13$.",
            "B. $\\frac12$.",
            "C. $\\frac23$.",
            "D. $\\frac29$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định kết quả sơ cấp\nMỗi kết quả là một cặp có thứ tự $(a;b)$: số lần đầu và số lần sau.\nDo có hoàn lại và hai lần rút độc lập, mỗi vị trí đều nhận một trong $1,2,3$ với khả năng như nhau.\nBước 2: Đếm tất cả kết quả\nCó $3\\cdot3=9$ cặp đồng khả năng.\nCác cặp $(1;1),(2;2),(3;3)$ vẫn có thể xảy ra và phải nằm trong tổng số này.\nBước 3: Liệt kê kết quả thuận lợi\nĐiều kiện $a>b$ chỉ xảy ra với $(2;1),(3;1),(3;2)$.\nCó đúng $3$ cặp thuận lợi.\nBước 4: Tính xác suất\nTheo công thức cổ điển, xác suất bằng $3/9=1/3$.\nKhông bỏ các cặp bằng nhau khỏi mẫu vì phép thử ban đầu không loại chúng.\nBước 5: Kết luận\nXác suất là $1/3$. Chọn A.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-06",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Không hoàn lại và cặp không thứ tự",
          "prompt": "Chọn ngẫu nhiên đều hai thẻ khác nhau từ năm thẻ ghi $1,2,3,4,5$, không hoàn lại. Mỗi cặp thẻ không thứ tự có khả năng như nhau. Xác suất để tổng hai số là số lẻ bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac3{10}$.",
            "B. $\\frac25$.",
            "C. $\\frac35$.",
            "D. $\\frac6{25}$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Thống nhất cách đếm\nĐề chọn hai thẻ khác nhau không hoàn lại và coi mỗi cặp không thứ tự đồng khả năng.\nVì vậy một cặp như $\\{1,2\\}$ chỉ đếm một lần.\nBước 2: Đếm tất cả cặp\nGhép thẻ $1$ với bốn thẻ sau, thẻ $2$ với ba thẻ sau, rồi tương tự: có $4+3+2+1=10$ cặp.\nCách này không lặp lại cặp đã đếm.\nBước 3: Đếm cặp có tổng lẻ\nTổng hai số nguyên lẻ khi một số lẻ và một số chẵn.\nCó $3$ thẻ lẻ $1,3,5$ và $2$ thẻ chẵn $2,4$, nên có $3\\cdot2=6$ cặp thuận lợi.\nBước 4: Tính xác suất và kiểm tra cách đếm\nXác suất là $6/10=3/5$.\nNếu đếm có thứ tự, cả tử và mẫu đều phải gấp đôi; không trộn tử không thứ tự với mẫu có thứ tự.\nBước 5: Kết luận\nChọn C.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-07",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Sửa lỗi biên trước khi tính tỉ lệ",
          "prompt": "Một mẫu có $30$ số đo, đều thuộc $[0;30)$. Người nhập dùng sai các nhóm $[0;10],[10;20],[20;30)$ và ghi tần số $12,14,9$. Biết mỗi số đo không ở biên chỉ được đếm một lần, có đúng $2$ số đo bằng $10$, còn lỗi duy nhất là đếm lặp tại $10$ và $20$. Sau khi sửa thành các nhóm nhận đầu trái, loại đầu phải, tần số tương đối của nhóm $[10;20)$ là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac25$.",
            "B. $\\frac{11}{30}$.",
            "C. $\\frac{11}{35}$.",
            "D. $\\frac7{15}$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tính số lần đếm thừa\nTổng tần số sai là $12+14+9=35$, trong khi chỉ có $30$ số đo.\nCó $5$ lượt đếm thừa; theo giả thiết, chúng chỉ phát sinh tại hai biên $10$ và $20$.\nBước 2: Tìm số đo bằng 20\nMỗi số đo ở biên bị tính vào hai nhóm, tức thừa đúng một lượt.\nĐã có $2$ số đo bằng $10$, nên số đo bằng $20$ là $5-2=3$.\nBước 3: Sửa nhóm giữa theo đúng quy ước\nNhóm đúng $[10;20)$ vẫn nhận các số bằng $10$, nhưng phải bỏ $3$ số bằng $20$.\nTần số nhóm giữa là $14-3=11$.\nBước 4: Kiểm tra tổng và tính tần số tương đối\nNhóm đầu bỏ $2$ số bằng $10$, còn $12-2=10$; nhóm cuối vẫn có $9$.\nTổng đúng là $10+11+9=30$. Vì vậy tần số tương đối nhóm giữa là $11/30$, không chia cho tổng sai $35$.\nBước 5: Kết luận\nChọn B.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-08",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc quạt từ tần số",
          "prompt": "Mẫu có ba giá trị A, B, C với tần số $7,9,8$. Khi vẽ biểu đồ tần số tương đối hình quạt, bộ góc theo đúng thứ tự A, B, C là gì? Hình chỉ minh họa các phần tương ứng.",
          "svg": svgGrade9Stat({"kind":"pie","labels":["A","B","C"],"values":[7,9,8],"title":"Góc quạt từ tần số"}),
          "options": [
            "A. $(105^\\circ;135^\\circ;120^\\circ)$.",
            "B. $(135^\\circ;105^\\circ;120^\\circ)$.",
            "C. $(105^\\circ;120^\\circ;135^\\circ)$.",
            "D. $(70^\\circ;90^\\circ;80^\\circ)$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Tính cỡ mẫu\nTổng tần số là $7+9+8=24$.\nBa phần của biểu đồ phải cùng biểu diễn đủ $24$ quan sát này.\nBước 2: Quy đổi một quan sát thành góc\nCả hình tròn có góc $360^\\circ$ nên mỗi quan sát tương ứng $360^\\circ/24=15^\\circ$.\nBước 3: Tính theo đúng thứ tự nhãn\nNhóm A có góc $7\\cdot15^\\circ=105^\\circ$.\nNhóm B có góc $9\\cdot15^\\circ=135^\\circ$.\nNhóm C có góc $8\\cdot15^\\circ=120^\\circ$.\nBước 4: Kiểm tra tổng và độ lớn\nCó $105^\\circ+135^\\circ+120^\\circ=360^\\circ$.\nNhóm B có tần số lớn nhất nên góc lớn nhất; nhóm A nhỏ nhất nên góc nhỏ nhất, đúng các kết quả vừa tính.\nBước 5: Kết luận\nBộ góc là $(105^\\circ;135^\\circ;120^\\circ)$. Chọn A.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-09",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đổi đơn vị không đổi tần số",
          "prompt": "Bảng số đo độ dài theo cm có các giá trị $120,150,180$ với tần số $2,5,3$. Đổi toàn bộ số đo sang m. Cặp “giá trị có tần số lớn nhất; tần số đó” là gì?",
          "svg": "",
          "options": [
            "A. $(150;5)$.",
            "B. $(1{,}5;0{,}05)$.",
            "C. $(1{,}8;5)$.",
            "D. $(1{,}5;5)$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Phân biệt số đo và số lần xuất hiện\nCác số $120,150,180$ là độ dài theo cm.\nCác số $2,5,3$ là tần số, tức số lần mỗi độ dài xuất hiện.\nBước 2: Đổi đơn vị số đo\nVì $1$ m $=100$ cm, chia từng độ dài cho $100$.\nBa giá trị mới là $1{,}2$, $1{,}5$, $1{,}8$ m.\nBước 3: Giữ nguyên tần số\nĐổi đơn vị không làm mất hay thêm quan sát nào, cũng không gộp hai độ dài khác nhau thành một.\nDo đó các tần số tương ứng vẫn là $2,5,3$.\nBước 4: Chọn tần số lớn nhất\nSố lớn nhất trong $2,5,3$ là $5$, đi kèm giá trị $1{,}5$ m.\nKhông chia tần số cho $100$ vì đó không phải đại lượng độ dài.\nBước 5: Kết luận\nCặp cần tìm là $(1{,}5;5)$. Chọn D.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-10",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chỉ gộp khi các ranh giới khớp nhau",
          "prompt": "Bốn nhóm $[0;5),[5;10),[10;15),[15;20)$ có tần số $4,7,6,3$. Gộp thành hai nhóm $[0;10),[10;20)$. Tần số tương đối hai nhóm mới là gì?",
          "svg": "",
          "options": [
            "A. $(50\\%;50\\%)$.",
            "B. $(55\\%;45\\%)$.",
            "C. $(45\\%;55\\%)$.",
            "D. $(40\\%;60\\%)$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định các nhóm được gộp\nNhóm $[0;10)$ gồm hai nhóm đầu $[0;5)$ và $[5;10)$.\nNhóm $[10;20)$ gồm hai nhóm cuối $[10;15)$ và $[15;20)$.\nBước 2: Cộng tần số trong mỗi nhóm mới\nTần số nhóm đầu là $4+7=11$.\nTần số nhóm sau là $6+3=9$. Các nhóm cũ không chồng nhau nên cộng trực tiếp, không lấy trung bình.\nBước 3: Giữ cỡ mẫu ban đầu\nTổng số quan sát vẫn là $4+7+6+3=20$.\nGộp nhóm chỉ đổi cách trình bày, không đổi số dữ liệu.\nBước 4: Tính hai tần số tương đối\nNhóm đầu có $11/20=55\\%$; nhóm sau có $9/20=45\\%$.\nTổng là $100\\%$; giá trị $10$ thuộc nhóm sau theo quy ước nhận đầu trái.\nBước 5: Kết luận\nCặp tần số tương đối là $(55\\%;45\\%)$. Chọn B.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-11",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhãn lặp không làm các nhãn đồng khả năng",
          "prompt": "Quay độc lập hai vòng quay công bằng. Vòng I có bốn ô bằng nhau ghi $1,1,2,3$; vòng II có ba ô bằng nhau ghi $1,2,2$. Xác suất hai số nhận được bằng nhau là bao nhiêu?",
          "svg": svgGrade9Stat({"kind":"spinners","panels":[{"labels":["1","1","2","3"]},{"labels":["1","2","2"]}],"title":"Nhãn lặp không làm các nhãn đồng khả năng"}),
          "options": [
            "A. $\\frac12$.",
            "B. $\\frac14$.",
            "C. $\\frac13$.",
            "D. $\\frac23$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chọn các kết quả thực sự đồng khả năng\nCần phân biệt từng ô vật lí, kể cả các ô ghi cùng một số.\nVòng I có $4$ ô bằng nhau, vòng II có $3$ ô bằng nhau; hai vòng công bằng và độc lập nên có $4\\cdot3=12$ cặp ô đồng khả năng.\nBước 2: Đếm trường hợp cùng nhận số 1\nVòng I có $2$ ô ghi $1$, vòng II có $1$ ô ghi $1$.\nVì thế có $2\\cdot1=2$ cặp ô cho hai số cùng bằng $1$.\nBước 3: Đếm các trường hợp bằng nhau còn lại\nSố $2$ cho $1\\cdot2=2$ cặp ô.\nSố $3$ không cho cặp nào vì vòng II không có ô ghi $3$.\nBước 4: Tính xác suất\nTổng thuận lợi là $2+2=4$, nên xác suất bằng $4/12=1/3$.\nKhông coi các nhãn $1,2,3$ ở vòng I có cơ hội bằng nhau: nhãn $1$ chiếm tới hai ô.\nBước 5: Kết luận\nChọn C.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-nangCao-12",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Nhánh dừng sớm không đồng khả năng",
          "prompt": "Tung một đồng xu cân đối. Nếu lần đầu ngửa thì dừng và được $1$ điểm. Nếu lần đầu sấp thì tung tiếp độc lập: lần hai ngửa được $2$ điểm, lần hai sấp được $0$ điểm. Xác suất được ít nhất $1$ điểm là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac34$.",
            "B. $\\frac23$.",
            "C. $\\frac12$.",
            "D. $\\frac14$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xem xét quy tắc dừng\nCác nhánh dừng là N, SN và SS, trong đó N là ngửa, S là sấp.\nChúng không đồng khả năng vì nhánh N chỉ cần một lần tung, còn hai nhánh kia cần hai lần.\nBước 2: Tạo mô hình đồng khả năng để đếm\nTưởng tượng luôn tung độc lập hai lần; nếu lần đầu N thì bỏ qua kết quả lần sau.\nBốn cặp NN, NS, SN, SS đồng khả năng. Việc ghi thêm một kết quả bị bỏ qua không thay đổi điểm của trò chơi.\nBước 3: Xác định các cặp đạt yêu cầu\nNN và NS đều được $1$ điểm vì lần đầu ngửa.\nSN được $2$ điểm, SS được $0$ điểm.\nBước 4: Tính xác suất\nCó $3$ trong $4$ cặp cho ít nhất $1$ điểm, nên xác suất là $3/4$.\nKhông lấy $2/3$ từ ba nhánh dừng vì các nhánh ấy không có xác suất bằng nhau.\nBước 5: Kết luận\nChọn A.",
          "manThi": "thongKe"
        }
      ],
      "hsg": [
        {
          "id": "l9-thong-ke-xac-suat-hsg-01",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Ô thiếu trong bảng tần số",
          "prompt": "Bảng có bốn giá trị $1,2,3,4$, tần số tương ứng $6,k,9,5$. Tần số tương đối của giá trị $4$ bằng đúng $20\\%$. Tìm $k$.",
          "svg": "",
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Phân biệt tần số và tần số tương đối\nGiá trị $4$ có tần số $5$, tức xuất hiện $5$ lần.\nTần số tương đối bằng tần số chia cỡ mẫu $N>0$, nên $5/N=20\\%=1/5$.\nBước 2: Tìm cỡ mẫu\nNhân chéo được $N=25$.\nBước 3: Dùng tổng tần số\nTổng tần số phải bằng cỡ mẫu: $6+k+9+5=25$.\nThu gọn $k+20=25$, nên $k=5$.\nBước 4: Kiểm tính hợp lệ\n$k=5$ là số nguyên không âm.\nTổng tần số là $6+5+9+5=25$ và tần số tương đối của giá trị $4$ là $5/25=20\\%$.\nBước 5: Kết luận\nTần số còn thiếu là $k=5$.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-hsg-02",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Cùng một mẫu nhưng hai cách chia",
          "prompt": "Một mẫu $80$ số đo thuộc $[0;40)$. Bảng I cho tần số tương đối các nhóm $[0;10),[10;20),[20;40)$ là $25\\%,30\\%,45\\%$. Bảng II của chính mẫu đó cho nhóm $[0;15)$ chiếm $40\\%$. Có bao nhiêu số đo thuộc $[15;20)$?",
          "svg": "",
          "correctAnswer": "12",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nhận xét cách tách khoảng\nKhoảng $[0;20)$ là hợp rời nhau của $[0;15)$ và $[15;20)$.\nHai bảng dùng cùng mẫu $80$ số đo, nên có thể lấy hiệu số lượng tương ứng.\nBước 2: Tính số đo dưới 20 từ bảng I\nHai nhóm $[0;10)$ và $[10;20)$ có tổng tần số tương đối $25\\%+30\\%=55\\%$.\nSố đo dưới $20$ là $80\\cdot55/100=44$.\nBước 3: Tính số đo dưới 15 từ bảng II\nSố đo thuộc $[0;15)$ là $80\\cdot40/100=32$.\nBước 4: Lấy hiệu và kiểm lại\nSố đo thuộc $[15;20)$ bằng $44-32=12$.\nKiểm: nhóm $[0;10)$ có $20$ số, nên $[10;15)$ có $32-20=12$ số. Hai phần $12+12=24$ đúng bằng $30\\%$ của $80$ trong nhóm $[10;20)$.\nBước 5: Kết luận\nCó $12$ số đo thuộc $[15;20)$. Giá trị đúng $15$ được nhận ở khoảng này, còn đúng $20$ bị loại.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-hsg-03",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm số bi từ phép lấy không hoàn lại",
          "prompt": "Hộp có $4$ bi đỏ và $n$ bi xanh, với $n$ nguyên dương; các bi như nhau về kích thước, mỗi bi có cùng khả năng được rút. Rút lần lượt hai bi không hoàn lại. Xác suất cả hai đều đỏ bằng $1/6$. Lập phương trình để tìm $n$.",
          "svg": "",
          "correctAnswer": "5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định các kết quả đồng khả năng\nTạm đánh dấu từng viên bi để phân biệt khi đếm; tổng cộng có $n+4$ viên.\nLần đầu có $n+4$ lựa chọn, lần sau còn $n+3$ vì không hoàn lại.\nVì mỗi viên được rút đều, có $(n+4)(n+3)$ cặp có thứ tự đồng khả năng.\nBước 2: Đếm kết quả thuận lợi\nMuốn cả hai đỏ: lần đầu có $4$ lựa chọn, lần sau còn $3$ viên đỏ.\nDo đó số cặp thuận lợi là $4\\cdot3=12$.\nBước 3: Lập và giải phương trình xác suất\n$12/[(n+4)(n+3)]=1/6$.\nVì $n$ nguyên dương, mẫu khác $0$; nhân chéo được $(n+4)(n+3)=72$.\nKhai triển: $n^2+7n-60=0$, tức $(n-5)(n+12)=0$.\nBước 4: Loại và thử nghiệm\nCác ứng viên là $n=5,-12$. Loại $-12$ vì không phải số viên bi nguyên dương.\nVới $n=5$, hộp có $9$ bi; xác suất $12/(9\\cdot8)=1/6$, đúng đề.\nBước 5: Kết luận\nCó $5$ bi xanh. Không dùng $(n+4)^2$ làm mẫu đếm, vì viên đã rút không được đưa lại vào hộp.",
          "manThi": "baiToanThucTe"
        },
        {
          "id": "l9-thong-ke-xac-suat-hsg-04",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Ghép nhóm không khôi phục được từng số đo",
          "prompt": "Bảng ghép nhóm cho $[0;10)$ có $2$ số đo và $[10;20)$ có $3$ số đo. Chứng minh bảng xác định được cỡ mẫu và tần số tương đối từng nhóm, nhưng không xác định duy nhất tổng các giá trị đo. Hãy dựng hai mẫu chứng minh kết luận sau.",
          "svg": "",
          "solution": "Bước 1: Xác định thông tin bảng cho trực tiếp\nCó $2$ số đo trong $[0;10)$ và $3$ số đo trong $[10;20)$.\nHai khoảng rời nhau và chứa toàn mẫu, nên cỡ mẫu $N=2+3=5$.\nBước 2: Tính tần số tương đối\nNhóm đầu có tần số tương đối $2/5=40\\%$.\nNhóm sau có tần số tương đối $3/5=60\\%$. Các giá trị này được xác định duy nhất từ bảng.\nBước 3: Dựng mẫu thứ nhất\nLấy mẫu $1,2,11,12,13$.\nCó đúng hai số ở nhóm đầu và ba số ở nhóm sau; tổng là $1+2+11+12+13=39$.\nBước 4: Dựng mẫu thứ hai và đối chiếu\nLấy mẫu $8,9,17,18,19$.\nMẫu này cũng cho đúng bảng tần số đã nêu, nhưng tổng là $8+9+17+18+19=71$, khác $39$.\nBước 5: Kết luận\nBảng xác định cỡ mẫu và tần số tương đối, nhưng không xác định duy nhất tổng các số đo.\nThay mỗi số đo bằng trung điểm nhóm chỉ có thể cho một ước lượng, không phải tổng chính xác của mọi mẫu phù hợp.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-hsg-05",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Vì sao hai cách đếm cho cùng xác suất",
          "prompt": "Chọn ngẫu nhiên đều hai thẻ khác nhau trong $n\\ge2$ thẻ phân biệt, không hoàn lại. Xét biến cố chỉ phụ thuộc hai thẻ được chọn, không phụ thuộc thứ tự. Chứng minh xác suất tính bằng cặp có thứ tự bằng xác suất tính bằng cặp không thứ tự. Nêu vì sao giả thiết không phụ thuộc thứ tự là cần thiết.",
          "svg": "",
          "solution": "Bước 1: Liên hệ hai cách ghi kết quả\nVới hai thẻ phân biệt $a,b$, cặp không thứ tự gồm hai thẻ ấy tương ứng đúng hai kết quả có thứ tự: $(a,b)$ và $(b,a)$.\nKhông có trường hợp $a=b$ vì chọn hai thẻ khác nhau, không hoàn lại.\nBước 2: Đếm toàn bộ và thuận lợi\nGiả sử có $M$ cặp không thứ tự, trong đó $K$ cặp thuận lợi.\nMỗi cặp cho hai thứ tự, nên tổng số kết quả có thứ tự là $2M$.\nVì biến cố không phụ thuộc thứ tự, một cặp thuận lợi cho cả hai thứ tự thuận lợi; do đó có $2K$ kết quả thuận lợi.\nBước 3: Giải thích đồng khả năng\nCác cặp có thứ tự đồng khả năng do cách chọn đều.\nMỗi cặp không thứ tự gom đúng hai kết quả như vậy, nên các cặp không thứ tự cũng đồng khả năng.\nBước 4: So sánh hai xác suất\nCách đếm không thứ tự cho $K/M$; cách có thứ tự cho $2K/(2M)=K/M$.\n$M>0$ vì $n\\ge2$, nên phép chia hợp lệ.\nBước 5: Nêu giới hạn và kết luận\nHai cách cho cùng xác suất dưới giả thiết của đề.\nVới biến cố “số ở thẻ đầu lớn hơn số ở thẻ sau”, đổi hai thẻ có thể đổi đúng thành sai. Khi ấy không thể đánh dấu cả một cặp không thứ tự là thuận lợi; điều kiện không phụ thuộc thứ tự là thiết yếu.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-hsg-06",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Ngưỡng đạt chuẩn trùng ranh giới nhóm",
          "prompt": "Thời gian hoàn thành (phút) của một mẫu được ghép vào $[0;5),[5;10),[10;15),[15;20)$, tần số tương ứng $6,9,12,3$. Quy định đạt chuẩn nếu thời gian dưới $10$ phút hoặc từ $15$ phút đến dưới $20$ phút. Có bao nhiêu quan sát đạt chuẩn?",
          "svg": "",
          "correctAnswer": "18",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đọc đúng miền đạt chuẩn\nDưới $10$ phút ứng với hai nhóm $[0;5)$ và $[5;10)$.\nTừ $15$ đến dưới $20$ phút ứng với nhóm $[15;20)$.\nBước 2: Kiểm các nhóm có chồng nhau không\nBa nhóm trên rời nhau theo quy ước nhận đầu trái, loại đầu phải.\nVì vậy cộng các tần số sẽ không đếm trùng quan sát.\nBước 3: Cộng tần số đạt chuẩn\nSố quan sát đạt là $6+9+3=18$.\nBước 4: Kiểm các giá trị ở ranh giới\nĐúng $10$ phút thuộc $[10;15)$ nên không đạt.\nĐúng $15$ phút thuộc $[15;20)$ nên đạt.\nTổng mẫu $6+9+12+3=30$; nhóm không đạt có $12$ quan sát, và $30-12=18$ khớp kết quả.\nBước 5: Kết luận\nCó $18$ quan sát đạt chuẩn.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-hsg-07",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai bảng kiểm định của cùng mẫu",
          "prompt": "Một mẫu $50$ chi tiết có sai số thuộc $[0;4)$ mm. Bảng I cho tần số các nhóm $[0;1),[1;2),[2;3),[3;4)$ là $8,a,b,10$. Bảng II cho tần số các nhóm $[0;2),[2;4)$ chênh nhau $6$, nhóm đầu ít hơn nhóm sau. Tìm $b$ và kiểm các tần số tìm được là số nguyên không âm.",
          "svg": "",
          "correctAnswer": "18",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xét hai nhóm lớn của bảng II\nGọi tần số của $[0;2)$ và $[2;4)$ là $U,V$.\nChúng chứa toàn mẫu nên $U+V=50$. Nhóm đầu ít hơn $6$ nên $V-U=6$.\nBước 2: Tìm tần số từng nhóm lớn\nCộng hai phương trình: $2V=56$, nên $V=28$.\nSuy ra $U=50-28=22$.\nBước 3: Đối chiếu với bảng I\nNhóm $[0;2)$ gồm $[0;1)$ và $[1;2)$, nên $8+a=22$, cho $a=14$.\nNhóm $[2;4)$ gồm $[2;3)$ và $[3;4)$, nên $b+10=28$, cho $b=18$.\nBước 4: Kiểm tính hợp lệ\nCác tần số $8,14,18,10$ đều nguyên không âm.\nTổng bằng $50$; khi gộp được $22,28$, đúng chênh lệch $6$ và đúng chiều nhóm đầu ít hơn.\nBước 5: Kết luận\nTần số cần tìm là $b=18$.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-hsg-08",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chữ số tham số trong mô hình tạo số",
          "prompt": "Chọn $m\\in\\{2,3,4,5,6,7,8,9\\}$. Từ bốn chữ số $0,1,2,m$ tạo tập các số có hai chữ số khác nhau; nếu $m=2$ thì chữ số $2$ chỉ có một bản. Chọn đều một số trong tập đó. Tìm tổng các giá trị $m$ để xác suất số được chọn chia hết cho $3$ bằng $1/3$.",
          "svg": "",
          "correctAnswer": "18",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xét trường hợp chữ số bị trùng\nNếu $m=2$, chỉ có ba chữ số khác nhau $0,1,2$.\nCác số hợp lệ là $10,12,20,21$; trong đó $12,21$ chia hết cho $3$. Xác suất $2/4=1/2$, nên loại $m=2$.\nBước 2: Đếm toàn bộ khi m khác 2\nKhi $m\\ne2$, bốn chữ số khác nhau. Hàng chục có $3$ cách chọn trong $1,2,m$, hàng đơn vị có $3$ cách chọn khác hàng chục.\nCó $9$ số đồng khả năng. Muốn xác suất bằng $1/3$, cần đúng $3$ số chia hết cho $3$.\nBước 3: Dùng dấu hiệu chia hết cho 3\nMột số chia hết cho $3$ khi tổng hai chữ số chia hết cho $3$.\n$12,21$ luôn thuận lợi. Các số $10,20$ không thuận lợi.\nNếu $m=3,6,9$, có thêm đúng số hàng chục $m$, hàng đơn vị $0$; các số ghép $m$ với $1,2$ không chia hết cho $3$. Tổng là $3$ số.\nBước 4: Loại các lớp dư còn lại\nNếu $m=4,7$ dư $1$, ghép với chữ số $2$ cho thêm hai số theo hai thứ tự, nên có $4$ số thuận lợi, xác suất $4/9$.\nNếu $m=5,8$ dư $2$, ghép với chữ số $1$ cũng cho thêm hai số, xác suất $4/9$.\nTrong mỗi trường hợp, số có hàng chục $0$ không được tính là số hai chữ số.\nBước 5: Kết luận\nChỉ nhận $m=3,6,9$, tổng bằng $18$. Việc xét riêng $m=2$ tránh đếm hai lần cùng một chữ số.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-hsg-09",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Khi nào biết chính xác tỉ lệ vượt ngưỡng",
          "prompt": "Bảng ghép nhóm dùng các khoảng nhận đầu trái, loại đầu phải; cỡ mẫu $N>0$. Chứng minh nếu ngưỡng $t$ trùng ranh giới nhóm thì xác định được chính xác tỉ lệ số đo $\\ge t$. Nếu $t$ nằm trong một nhóm có tần số dương, giải thích vì sao nói chung không xác định được tỉ lệ này chỉ từ bảng, và cho ví dụ.",
          "svg": "",
          "solution": "Bước 1: Hiểu quy ước ranh giới\nMột nhóm $[a;b)$ nhận giá trị bằng $a$ nhưng không nhận giá trị bằng $b$.\nTa cần số quan sát không nhỏ hơn $t$, rồi chia cho cỡ mẫu $N>0$.\nBước 2: Xét ngưỡng trùng ranh giới nhóm\nKhi $t$ là ranh giới, mỗi nhóm hoặc nằm hoàn toàn dưới $t$, hoặc nằm hoàn toàn từ $t$ trở lên.\nVì đầu trái được nhận, số đo đúng bằng $t$ nằm trong nhóm bắt đầu tại $t$ và được đếm.\nCộng tần số các nhóm từ đó trở lên rồi chia $N$ cho tỉ lệ chính xác.\nBước 3: Chỉ ra thông tin thiếu khi ngưỡng ở giữa nhóm\nNếu $t$ nằm trong một nhóm có quan sát, bảng chỉ cho tổng số quan sát của cả nhóm.\nNó không cho biết bao nhiêu số ở phần dưới $t$, bao nhiêu số từ $t$ trở lên.\nBước 4: Dựng ví dụ cụ thể\nCho nhóm $[10;20)$ có hai quan sát và $t=15$.\nMẫu $11,12$ cho tỉ lệ từ $15$ trở lên bằng $0/2=0$.\nMẫu $16,18$ cho tỉ lệ bằng $2/2=1$. Hai mẫu có cùng bảng nhóm nhưng kết quả khác nhau.\nBước 5: Kết luận\nNgưỡng tại ranh giới cho phép tính chính xác; ngưỡng trong nhóm nói chung không đủ thông tin.\nNếu nhóm chứa ngưỡng có tần số $0$, không có quan sát nào cần chia hai phía, nên vẫn có thể tính. Vì thế không khẳng định máy móc rằng mọi ngưỡng trong nhóm đều không tính được.",
          "manThi": "thongKe"
        },
        {
          "id": "l9-thong-ke-xac-suat-hsg-10",
          "lop": 9,
          "chuDe": "thong-ke-xac-suat",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Đổi chỗ hai kết quả để chứng minh bằng nhau",
          "prompt": "Hộp có $n\\ge2$ thẻ phân biệt, ghi các số thực đôi một khác nhau. Rút ngẫu nhiên đều hai thẻ không hoàn lại, ghi theo thứ tự $(a,b)$. Chứng minh xác suất $a>b$ bằng xác suất $a<b$, rồi tính mỗi xác suất. Giải thích điều gì thay đổi nếu các thẻ có thể ghi cùng số.",
          "svg": "",
          "solution": "Bước 1: Xác định không gian kết quả\nMỗi kết quả là một cặp thẻ có thứ tự, ghi giá trị $(a,b)$.\nDo rút đều và không hoàn lại, các cặp thẻ phân biệt có thứ tự đều đồng khả năng.\nBước 2: Ghép các kết quả thuận lợi\nVới mỗi kết quả thỏa $a>b$, đổi thứ tự cho $(b,a)$, trong đó số thứ nhất nhỏ hơn số thứ hai.\nĐổi lại một lần nữa thu được kết quả ban đầu. Vì vậy mỗi kết quả của biến cố lớn hơn ghép với đúng một kết quả của biến cố nhỏ hơn, không thiếu và không trùng.\nBước 3: Suy ra hai xác suất bằng nhau\nHai biến cố có cùng số kết quả thuận lợi trong cùng một không gian đồng khả năng.\nDo đó $P(a>b)=P(a<b)$.\nBước 4: Tính giá trị khi các số đôi một khác nhau\nKhông có $a=b$ vì hai thẻ khác nhau ghi hai số khác nhau.\nHai biến cố $a>b$ và $a<b$ rời nhau, đồng thời bao trùm mọi kết quả, nên tổng xác suất bằng $1$.\nHai xác suất bằng nhau và có tổng $1$, do đó mỗi xác suất bằng $1/2$.\nBước 5: Xét khi nhãn có thể trùng\nPhép đổi thứ tự vẫn ghép hai biến cố lớn hơn và nhỏ hơn, nên xác suất của chúng vẫn bằng nhau.\nNhưng có thể có biến cố $a=b$; khi đó mỗi xác suất bằng $[1-P(a=b)]/2$, không nhất thiết bằng $1/2$.\nKhi đếm phải phân biệt từng thẻ, kể cả các thẻ ghi cùng số; không gộp các cặp nhãn trùng thành một kết quả đồng khả năng duy nhất.",
          "manThi": "thongKe"
        }
      ]
    }
  };
}

export default getGrade9Topics;
