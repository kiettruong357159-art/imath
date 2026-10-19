/**
 * data-lop-7.js
 * Ngân hàng câu hỏi Toán Lớp 7
 * Tiện ích: Toán Cấp 2 trực quan - iMath
 */

import { svgCap2 } from '../core/svg-cap2.js?v=20260913-l7-lo4';

export function getGrade7Topics() {

  return {
    'all': { kha: [], nangCao: [], hsg: [] },
    'so-huu-ti': {
      "kha": [
        {
          "id": "l7-so-huu-ti-kha-01",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Số đối của một số hữu tỉ",
          "prompt": "Số đối của $-\\frac{3}{4}$ là số nào?",
          "svg": "",
          "options": [
            "A. $\\frac{3}{4}$",
            "B. $-\\frac{4}{3}$",
            "C. $\\frac{4}{3}$",
            "D. $-\\frac{3}{4}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhắc ý nghĩa số đối\nHai số đối nhau có tổng bằng $0$.\nTa tìm số cộng với $-3/4$ để được $0$.\nBước 2: Đổi dấu\nGiữ nguyên độ lớn $3/4$, đổi dấu âm thành dương, được $3/4$.\nBước 3: Kiểm tra tổng\n$-3/4+3/4=0$, đúng định nghĩa số đối.\nBước 4: Phân biệt với nghịch đảo\nĐổi chỗ tử và mẫu là tìm nghịch đảo, không phải số đối.\nVì vậy không chọn các số có độ lớn $4/3$.\nBước 5: Kết luận\nChọn A: $3/4$."
        },
        {
          "id": "l7-so-huu-ti-kha-02",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "So sánh các số hữu tỉ âm",
          "prompt": "Trong bốn số sau, số nào lớn nhất?",
          "svg": "",
          "options": [
            "A. $-\\frac{5}{8}$",
            "B. $-\\frac{2}{3}$",
            "C. $-0{,}6$",
            "D. $-\\frac{7}{10}$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chọn cách so sánh\nĐưa các số về phân số cùng mẫu dương $120$ để so sánh tử số.\nBước 2: Quy đồng hai số đầu\n$-5/8=-75/120$; $-2/3=-80/120$.\nBước 3: Quy đồng hai số sau\n$-0{,}6=-3/5=-72/120$; $-7/10=-84/120$.\nBước 4: So sánh các tử\n$-72>-75>-80>-84$ vì số âm gần $0$ hơn thì lớn hơn.\nVậy $-72/120$ lớn nhất.\nBước 5: Kết luận\nSố lớn nhất là $-0{,}6$. Chọn C."
        },
        {
          "id": "l7-so-huu-ti-kha-03",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cộng hai phân số khác dấu",
          "prompt": "Tính $-\\frac{3}{4}+\\frac{5}{6}$.",
          "svg": "",
          "options": [
            "A. $-\\frac{1}{12}$",
            "B. $\\frac{1}{12}$",
            "C. $\\frac{1}{6}$",
            "D. $-\\frac{19}{12}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tìm mẫu chung\nMẫu chung của $4$ và $6$ là $12$.\nBước 2: Quy đồng đúng dấu\n$-3/4=-9/12$ và $5/6=10/12$.\nBước 3: Cộng tử, giữ mẫu\n$-9/12+10/12=(-9+10)/12=1/12$.\nBước 4: Kiểm tra dấu\n$10/12>9/12$ nên tổng của $10/12$ với $-9/12$ dương.\nKết quả $1/12$ phù hợp.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-so-huu-ti-kha-04",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận biết số nghịch đảo",
          "prompt": "Số nghịch đảo của $-\\frac{5}{7}$ là số nào?",
          "svg": "",
          "options": [
            "A. $\\frac{5}{7}$",
            "B. $\\frac{7}{5}$",
            "C. $-\\frac{7}{5}$",
            "D. $-\\frac{5}{7}$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhắc định nghĩa\nHai số nghịch đảo có tích bằng $1$. Số đã cho khác $0$ nên có nghịch đảo.\nBước 2: Tìm số cần chọn\nTa có $(-\\frac{5}{7})\\cdot (-\\frac{7}{5})=1$.\nVậy số nghịch đảo là $-\\frac{7}{5}$. Chọn C."
        },
        {
          "id": "l7-so-huu-ti-kha-05",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bình phương một tích",
          "prompt": "Tính $P=\\left[(-\\frac{3}{4})\\cdot \\frac{2}{3}\\right]^2$.",
          "svg": "",
          "options": [
            "A. $-\\frac{1}{4}$",
            "B. $\\frac{1}{4}$",
            "C. $\\frac{1}{2}$",
            "D. $\\frac{1}{16}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tính tích trong ngoặc\n$(-\\frac{3}{4})\\cdot \\frac{2}{3}=-\\frac{1}{2}$.\nBước 2: Bình phương và kết luận\n$P=(-\\frac{1}{2})\\cdot (-\\frac{1}{2})=\\frac{1}{4}$.\nTích hai số âm là số dương. Chọn B."
        }
      ],
      "nangCao": [
        {
          "id": "l7-so-huu-ti-nang-cao-01",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Dấu trừ trước một hiệu",
          "prompt": "Tính $-\\frac{1}{2}-\\left(\\frac{3}{4}-\\frac{5}{6}\\right)$.",
          "svg": "",
          "options": [
            "A. $-\\frac{7}{12}$",
            "B. $\\frac{13}{12}$",
            "C. $-\\frac{25}{12}$",
            "D. $-\\frac{5}{12}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính trong ngoặc trước\n$3/4-5/6=9/12-10/12=-1/12$.\nBước 2: Thay vào biểu thức\nBiểu thức thành $-1/2-(-1/12)$.\nBước 3: Xử lý phép trừ số âm\nTrừ một số âm là cộng số đối của nó: $-1/2+1/12$.\nBước 4: Cộng cùng mẫu\n$-6/12+1/12=-5/12$.\nNếu bỏ ngoặc ngay từ đầu, phải đổi dấu cả hai hạng tử trong ngoặc.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-02",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Gom thừa số chung",
          "prompt": "Tính bằng cách hợp lí: $-\\frac{7}{9}\\cdot\\frac{5}{11}+\\left(-\\frac{7}{9}\\right)\\cdot\\frac{6}{11}$.",
          "svg": "",
          "options": [
            "A. $-\\frac{7}{9}$",
            "B. $\\frac{7}{9}$",
            "C. $-\\frac{14}{9}$",
            "D. $-\\frac{7}{18}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhận ra thừa số chung\nCả hai tích đều có thừa số $-7/9$.\nBước 2: Dùng tính phân phối\nĐặt thừa số chung được $(-7/9)(5/11+6/11)$.\nBước 3: Tính trong ngoặc\n$5/11+6/11=(5+6)/11=1$.\nKhi cộng cùng mẫu, không cộng hai mẫu số.\nBước 4: Tính tích còn lại\n$(-7/9)\\cdot1=-7/9$.\nNhân với $1$ giữ nguyên cả độ lớn lẫn dấu.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-03",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phối hợp quy tắc luỹ thừa",
          "prompt": "Tính $\\left(-\\frac{2}{3}\\right)^3\\cdot\\left(-\\frac{2}{3}\\right)^2:\\left(-\\frac{2}{3}\\right)^4$.",
          "svg": "",
          "options": [
            "A. $\\frac{2}{3}$",
            "B. $\\frac{4}{9}$",
            "C. $-\\frac{2}{3}$",
            "D. $-\\frac{32}{243}$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Kiểm tra phép chia\nCơ số $-2/3$ khác $0$ nên lũy thừa ở số chia khác $0$.\nBước 2: Nhân cùng cơ số\nCộng hai số mũ ở tử: $3+2=5$.\nTích hai lũy thừa đầu là $(-2/3)^5$.\nBước 3: Chia cùng cơ số\nTrừ số mũ: $5-4=1$.\nBiểu thức bằng $(-2/3)^1$.\nBước 4: Tính và kiểm tra dấu\nGiá trị là $-2/3$.\nLũy thừa bậc lẻ ở tử âm, số chia bậc chẵn dương nên thương phải âm.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-04",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tìm số trừ chưa biết",
          "prompt": "Tìm $x$ biết $\\frac{3}{5}-x=-\\frac{7}{10}$.",
          "svg": "",
          "options": [
            "A. $-\\frac{1}{10}$",
            "B. $\\frac{1}{10}$",
            "C. $-\\frac{13}{10}$",
            "D. $\\frac{13}{10}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tách phần chứa x\nTrừ $3/5$ ở cả hai vế: $-x=-7/10-3/5$.\nBước 2: Tính vế phải\n$-7/10-6/10=-13/10$.\nBước 3: Tìm x\nTừ $-x=-13/10$, lấy số đối hai vế được $x=13/10$.\nBước 4: Thử lại\n$3/5-13/10=6/10-13/10=-7/10$, đúng đề.\nKhông quên đổi dấu khi chuyển từ $-x$ sang $x$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-05",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Độ cao qua hai lần dịch chuyển",
          "prompt": "Lấy mực nước biển làm mốc $0$ m, chiều lên là chiều dương. Một thiết bị đang ở độ cao $-3{,}5$ m, được kéo lên $1{,}75$ m rồi hạ xuống $2{,}25$ m. Mực nước biển không đổi. Độ cao cuối cùng của thiết bị là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $0{,}5$ m",
            "B. $-4$ m",
            "C. $-3$ m",
            "D. $-7{,}5$ m"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đọc quy ước chiều\nKéo lên làm tăng độ cao, hạ xuống làm giảm độ cao.\nMốc nước biển không đổi nên dùng cùng mốc $0$ suốt quá trình.\nBước 2: Tính sau khi kéo lên\n$-3{,}5+1{,}75=-1{,}75$ m.\nBước 3: Tính sau khi hạ xuống\n$-1{,}75-2{,}25=-4$ m.\nBước 4: Giải thích kết quả\nĐộ dịch chuyển tổng cộng là $1{,}75-2{,}25=-0{,}5$ m.\nThiết bị thấp hơn ban đầu $0{,}5$ m và nằm dưới mực nước biển $4$ m.\nBước 5: Kết luận\nĐộ cao cuối là $-4$ m. Chọn B."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-06",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đọc bảng tính tiền sau giảm giá",
          "prompt": "Một bảng tính ghi: tiền hàng $240\\,000$ đồng; giảm $15\\%$ tiền hàng; phí giao hàng $12\\,000$ đồng không được giảm. Không có khoản thu khác. Ô “Tổng thanh toán” phải hiển thị bao nhiêu đồng?",
          "svg": "",
          "options": [
            "A. $214\\,200$ đồng",
            "B. $228\\,000$ đồng",
            "C. $216\\,000$ đồng",
            "D. $204\\,000$ đồng"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định khoản được giảm\nChỉ tiền hàng $240\\,000$ đồng được giảm $15\\%$.\nPhí giao $12\\,000$ đồng giữ nguyên.\nBước 2: Tính tiền giảm\n$240\\,000\\cdot15/100=36\\,000$ đồng.\nBước 3: Tính tiền hàng còn lại\n$240\\,000-36\\,000=204\\,000$ đồng.\nBước 4: Cộng phí giao\nTổng thanh toán là $204\\,000+12\\,000=216\\,000$ đồng.\nKhông nhân cả tổng tiền hàng và phí giao với $85\\%$.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-07",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chọn nghiệm của đẳng thức có bình phương",
          "prompt": "Tìm số hữu tỉ $x$ thỏa $\\left(x-\\frac12\\right)^2=\\frac9{16}$ và $x<\\frac12$.",
          "svg": "",
          "options": [
            "A. $\\frac54$",
            "B. $-\\frac14$",
            "C. $\\frac14$",
            "D. $-\\frac54$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhận diện hai bình phương\n$9/16=(3/4)^2$.\nMột số có bình phương bằng $9/16$ thì bằng $3/4$ hoặc $-3/4$.\nBước 2: Xét khả năng thứ nhất\n$x-1/2=3/4$ cho $x=1/2+3/4=5/4$.\nBước 3: Xét khả năng thứ hai\n$x-1/2=-3/4$ cho $x=1/2-3/4=-1/4$.\nBước 4: Lọc điều kiện và thử lại\n$5/4>1/2$ nên loại; $-1/4<1/2$ nên nhận.\n$(-1/4-1/2)^2=(-3/4)^2=9/16$.\nBước 5: Kết luận\nChọn B: $x=-1/4$."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-08",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhân chia cùng cấp",
          "prompt": "Tính $P=-\\frac{3}{4}:\\frac{1}{2}\\cdot \\frac{2}{3}$ (không có dấu ngoặc bổ sung).",
          "svg": "",
          "options": [
            "A. $-1$",
            "B. $-\\frac{9}{4}$",
            "C. $-\\frac{1}{4}$",
            "D. $1$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định thứ tự\nPhép nhân và phép chia cùng mức ưu tiên; thực hiện từ trái sang phải.\nSố chia $\\frac{1}{2}$ khác $0$.\nBước 2: Thực hiện hai phép tính\n$-\\frac{3}{4}:\\frac{1}{2}=-\\frac{3}{4}\\cdot 2=-\\frac{3}{2}$.\n$P=-\\frac{3}{2}\\cdot \\frac{2}{3}=-1$. Chọn A."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-09",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "So sánh lũy thừa khác cách viết",
          "prompt": "Trong bốn số sau, số nào lớn nhất?",
          "svg": "",
          "options": [
            "A. $(\\frac{2}{3})^5$",
            "B. $(\\frac{4}{9})^2$",
            "C. $(\\frac{8}{27})^2$",
            "D. $(\\frac{16}{81})^2$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đưa về cùng cơ số\nĐặt $r=\\frac{2}{3}$, ta có $0<r<1$.\nBốn số lần lượt là $r^5,\\ (r^2)^2=r^4,\\ (r^3)^2=r^6,\\ (r^4)^2=r^8$.\nBước 2: So sánh khi cơ số nhỏ hơn 1\nMỗi lần nhân thêm với $r$ dương và nhỏ hơn $1$, giá trị giảm.\n$r^4>r^5>r^6>r^8$. Vì vậy chọn B."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-10",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Khôi phục đầu vào của quy trình",
          "prompt": "Một số hữu tỉ $x$ được chia cho $-\\frac{3}{2}$, sau đó cộng $\\frac{5}{6}$, rồi nhân với $-\\frac{6}{5}$. Kết quả cuối là $\\frac{7}{5}$. Tìm $x$.",
          "svg": "",
          "options": [
            "A. $-3$",
            "B. $\\frac{1}{2}$",
            "C. $\\frac{4}{3}$",
            "D. $3$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đảo phép nhân cuối\nTrước khi nhân với $-\\frac{6}{5}$, giá trị là $\\frac{7}{5}:(-\\frac{6}{5})=-\\frac{7}{6}$.\nBước 2: Đảo phép cộng rồi phép chia\nTrước khi cộng $\\frac{5}{6}$, giá trị là $-\\frac{7}{6}-\\frac{5}{6}=-2$.\nDo đó $x=(-2)\\cdot (-\\frac{3}{2})=3$. Các số chia trong quy trình đều khác $0$.\nBước 3: Thử lại\n$3:(-\\frac{3}{2})=-2$; $-2+\\frac{5}{6}=-\\frac{7}{6}$;\n$-\\frac{7}{6}\\cdot (-\\frac{6}{5})=\\frac{7}{5}$. Kết quả đúng với đề. Chọn D."
        },
        {
          "id": "l7-so-huu-ti-nang-cao-11",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai thương đảo chỗ bằng nhau",
          "prompt": "Cho số hữu tỉ $a\\ne0$ thỏa $a:(-\\frac{2}{3})=(-\\frac{2}{3}):a$. Tập hợp tất cả các giá trị của $a+\\frac{1}{a}$ là tập nào?",
          "svg": "",
          "options": [
            "A. $\\{-\\frac{13}{6};\\frac{13}{6}\\}$",
            "B. $\\{-\\frac{5}{6};\\frac{5}{6}\\}$",
            "C. $\\{\\frac{13}{6}\\}$",
            "D. $\\{-2;2\\}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Dùng điều kiện của phép chia\nVì $a\\ne0$ và $-\\frac{2}{3}\\ne0$, nhân hai vế với $a\\cdot (-\\frac{2}{3})$ được $a^2=\\frac{4}{9}$.\nBước 2: Xét đủ hai dấu\nHai số có bình phương bằng $\\frac{4}{9}$ là $a=\\frac{2}{3}$ và $a=-\\frac{2}{3}$.\nCả hai khác $0$ và đều thỏa đẳng thức ban đầu.\nBước 3: Tính các giá trị cần tìm\nVới $a=\\frac{2}{3}$: $a+\\frac{1}{a}=\\frac{2}{3}+\\frac{3}{2}=\\frac{13}{6}$.\nVới $a=-\\frac{2}{3}$: $a+\\frac{1}{a}=-\\frac{13}{6}$.\nVậy tập cần tìm là $\\{-\\frac{13}{6};\\frac{13}{6}\\}$. Chọn A."
        }
      ],
      "hsg": [
        {
          "id": "l7-so-huu-ti-hsg-01",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Tổng các phân số và điều kiện phép chia",
          "prompt": "Đặt $S=\\frac{1}{1\\cdot2}+\\frac{1}{2\\cdot3}+\\frac{1}{3\\cdot4}+\\cdots+\\frac{1}{9\\cdot10}$, trong đó các mẫu tiếp tục theo quy luật đã viết. Tính $\\frac{1}{1-S}$.",
          "svg": "",
          "correctAnswer": "10",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm cách tách một số hạng\nVới $k=1,2,\\ldots,9$, có $1/k-1/(k+1)=[(k+1)-k]/[k(k+1)]$.\nTử bằng $1$, nên hiệu này chính là số hạng của $S$.\nBước 2: Viết lại tổng\n$S=(1-1/2)+(1/2-1/3)+\\cdots+(1/9-1/10)$.\nMọi mẫu đều dương nên các phép biến đổi hợp lệ.\nBước 3: Khử các cặp đối nhau\n$-1/2$ triệt tiêu với $1/2$; tương tự cho $1/3$ đến $1/9$.\nChỉ còn $S=1-1/10=9/10$.\nBước 4: Kiểm tra mẫu cuối\n$1-S=1/10\\ne0$, nên phép chia cần tính xác định.\n$1/(1-S)=1:(1/10)=10$.\nBước 5: Kết luận\nĐáp số là $10$."
        },
        {
          "id": "l7-so-huu-ti-hsg-02",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "dien",
          "title": "Hai tích có cấu trúc liên tiếp",
          "prompt": "Cho $P=\\left(1-\\frac12\\right)\\left(1-\\frac13\\right)\\cdots\\left(1-\\frac18\\right)$ và $Q=\\left(1+\\frac12\\right)\\left(1+\\frac13\\right)\\cdots\\left(1+\\frac18\\right)$, mỗi tích có đủ các mẫu nguyên từ $2$ đến $8$. Tính $Q:P$.",
          "svg": "",
          "correctAnswer": "36",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Viết từng thừa số dạng phân số\n$1-1/k=(k-1)/k$ và $1+1/k=(k+1)/k$ với $k=2,\\ldots,8$.\nBước 2: Rút gọn tích P\n$P=(1/2)(2/3)(3/4)\\cdots(7/8)$.\nCác số từ $2$ đến $7$ xuất hiện cả ở tử và mẫu, nên khử được; còn $P=1/8$.\nBước 3: Rút gọn tích Q\n$Q=(3/2)(4/3)(5/4)\\cdots(9/8)$.\nKhử các số từ $3$ đến $8$, còn $Q=9/2$.\nBước 4: Thực hiện phép chia\n$P=1/8\\ne0$, nên $Q:P=(9/2)\\cdot8=36$.\nTa chỉ khử các thừa số khác $0$ trong tích, không khử hạng tử của tổng.\nBước 5: Kết luận\nĐáp số là $36$."
        },
        {
          "id": "l7-so-huu-ti-hsg-03",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chọn ưu đãi có giới hạn tiền giảm",
          "prompt": "Mua đúng $4$ quyển sách cùng giá niêm yết $50\\,000$ đồng/quyển. Chỉ được chọn một phương án: A giảm $15\\%$ tiền hàng nhưng số tiền giảm tối đa $25\\,000$ đồng, rồi cộng phí giao $12\\,000$ đồng; B giảm $10\\%$ tiền hàng, trừ tiếp phiếu giảm $5\\,000$ đồng, rồi cộng phí giao $15\\,000$ đồng. Hai phương án áp dụng cho toàn bộ đơn hàng, không có khoản thu khác. Chọn phương án rẻ hơn tiết kiệm được bao nhiêu đồng so với phương án còn lại?",
          "svg": "",
          "correctAnswer": "3000",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính tiền hàng trước giảm\nMua $4$ quyển giá $50\\,000$ đồng nên tiền hàng là $200\\,000$ đồng.\nHai phương án phải tính riêng, không cộng các ưu đãi của chúng.\nBước 2: Tính phương án A\n$15\\%$ tiền hàng là $30\\,000$ đồng nhưng mức giảm tối đa chỉ $25\\,000$ đồng.\nSố phải trả là $200\\,000-25\\,000+12\\,000=187\\,000$ đồng.\nBước 3: Tính phương án B\nGiảm $10\\%$ được $20\\,000$ đồng, rồi trừ phiếu $5\\,000$ đồng.\nCộng phí giao: $200\\,000-20\\,000-5\\,000+15\\,000=190\\,000$ đồng.\nBước 4: So sánh\n$187\\,000<190\\,000$ nên A rẻ hơn.\nKhoản tiết kiệm bằng $190\\,000-187\\,000=3\\,000$ đồng.\nBước 5: Kết luận\nChọn phương án A và tiết kiệm $3\\,000$ đồng."
        },
        {
          "id": "l7-so-huu-ti-hsg-04",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh bất đẳng thức từ hai số hữu tỉ dương",
          "prompt": "Cho hai số hữu tỉ $0<a<b$. Chứng minh $\\frac1a>\\frac1b$ và $(a+b)\\left(\\frac1a+\\frac1b\\right)>4$.",
          "svg": "",
          "solution": "Bước 1: Kiểm tra điều kiện và mục tiêu\n$0<a<b$ cho $ab>0$ và $b-a>0$; các nghịch đảo đều xác định.\nMuốn so sánh hai số, ta xét dấu của hiệu hai số.\nBước 2: So sánh hai nghịch đảo\n$1/a-1/b=(b-a)/(ab)>0$ vì tử và mẫu đều dương.\nDo đó $1/a>1/b$.\nBước 3: Xét phần vượt quá 4\nĐặt $T=(a+b)(1/a+1/b)$.\nKhai triển được $T=2+a/b+b/a$, nên $T-4=a/b+b/a-2$.\nBước 4: Viết thành tích có dấu rõ ràng\n$(b-a)(1/a-1/b)=b/a-1-1+a/b=T-4$.\nCả $b-a$ và $1/a-1/b$ đều dương theo hai bước đầu, nên $T-4>0$.\nBước 5: Kết luận\n$1/a>1/b$ và $(a+b)(1/a+1/b)>4$.\nDấu lớn hơn nghiêm ngặt cần $a<b$; nếu $a=b>0$ thì tích bằng $4$."
        },
        {
          "id": "l7-so-huu-ti-hsg-05",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Phản biện cách chia cho một tổng",
          "prompt": "Một bạn tính $\\frac34:\\left(\\frac12+\\frac14\\right)=\\frac34:\\frac12+\\frac34:\\frac14=\\frac92$. Hãy chỉ ra bước sai, tính lại kết quả đúng và giải thích vì sao không được áp dụng tính chất phân phối như bạn đã làm.",
          "svg": "",
          "solution": "Bước 1: Chỉ đúng phép biến đổi sai\nBạn đã biến phép chia cho một tổng thành tổng hai phép chia.\nĐẳng thức $a:(b+c)=a:b+a:c$ không phải tính chất phân phối.\nBước 2: Tính số chia thật sự\n$1/2+1/4=3/4\\ne0$, nên phép chia ban đầu xác định.\nBước 3: Tính lại kết quả\n$(3/4):(3/4)=1$.\nTrong khi biểu thức bị tách sai cho $3/2+3=9/2$, khác $1$.\nBước 4: Nêu tính chất được dùng đúng\nVới $c\\ne0$, có $(a+b):c=a:c+b:c$.\nLý do: hai phân số cùng mẫu $c$ cộng lại thành $(a+b)/c$.\nTổng phải ở số bị chia; ở bài này tổng lại là số chia.\nBước 5: Kết luận\nKết quả đúng là $1$; sai ở bước áp dụng tính phân phối cho tổng trong số chia."
        },
        {
          "id": "l7-so-huu-ti-hsg-06",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Thương của tổng và hiệu lũy thừa",
          "prompt": "Cho $P=(-\\frac{2}{3})^{10}$, $Q=(\\frac{4}{9})^4$. Tính $\\frac{P+Q}{P-Q}$.",
          "svg": "",
          "correctAnswer": "-2.6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nhận ra thừa số chung\n$P=(\\frac{4}{9})^5=\\frac{4}{9}Q$. Vì $Q=(\\frac{4}{9})^4>0$, ta có $Q\\ne0$.\nBước 2: Kiểm mẫu và rút gọn\n$P-Q=(\\frac{4}{9}-1)Q=-\\frac{5}{9}Q\\ne0$.\n$\\frac{P+Q}{P-Q}=\\frac{(4/9+1)Q}{(4/9-1)Q}=\\frac{13/9}{-5/9}=-\\frac{13}{5}$.\nBước 3: Kết luận\nGiá trị cần tìm là $-\\frac{13}{5}=-2{,}6$."
        },
        {
          "id": "l7-so-huu-ti-hsg-07",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Gom sáu thương theo mẫu",
          "prompt": "Ba số hữu tỉ $a,b,c$ đều khác $0$ và $a+b+c=0$. Tính $T=\\frac{a}{b}+\\frac{b}{a}+\\frac{a}{c}+\\frac{c}{a}+\\frac{b}{c}+\\frac{c}{b}$.",
          "svg": "",
          "correctAnswer": "-3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Gom các phân số cùng mẫu\n$T=\\frac{b+c}{a}+\\frac{a+c}{b}+\\frac{a+b}{c}$.\nViệc đổi thứ tự và nhóm các số hạng không làm thay đổi tổng.\nBước 2: Dùng giả thiết tổng bằng 0\n$b+c=-a$, $a+c=-b$, $a+b=-c$.\nVì các mẫu đều khác $0$, mỗi thương $\\frac{-a}{a},\\frac{-b}{b},\\frac{-c}{c}$ bằng $-1$.\nBước 3: Cộng và kết luận\n$T=-1-1-1=-3$.\nGiả thiết có thể xảy ra, chẳng hạn $a=1,b=1,c=-2$; không cần ba số đôi một khác nhau.\nBước 4: Kết luận\n$T=-3$."
        },
        {
          "id": "l7-so-huu-ti-hsg-08",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Giá trị lớn nhất có điều kiện mẫu",
          "prompt": "Chọn hai số khác nhau $a,b$ từ tập $\\{-\\frac{3}{2};-\\frac{1}{2};\\frac{1}{2};\\frac{3}{2}\\}$, với $a+b\\ne0$. Tìm giá trị lớn nhất của $T=\\frac{a-b}{a+b}$.",
          "svg": "",
          "correctAnswer": "2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Phân loại các lựa chọn\nNếu $a,b$ cùng dấu, hai độ lớn phải là $\\frac{1}{2}$ và $\\frac{3}{2}$. Khi đó $|a-b|=1$, $|a+b|=2$, nên $T$ bằng $\\frac{1}{2}$ hoặc $-\\frac{1}{2}$.\nBước 2: Xét hai số trái dấu\nNếu chúng có cùng độ lớn thì $a+b=0$, bị loại.\nNếu khác độ lớn thì $|a-b|=2$, $|a+b|=1$, nên $T$ bằng $2$ hoặc $-2$.\nBước 3: Chứng minh giá trị lớn nhất đạt được\nCác khả năng đều thuộc $\\{-2;-\\frac{1}{2};\\frac{1}{2};2\\}$.\nChọn $a=\\frac{3}{2},b=-\\frac{1}{2}$ thì $a+b=1\\ne0$ và $T=2$.\nVậy giá trị lớn nhất là $2$.\nBước 4: Kết luận\nGiá trị lớn nhất của $T$ là $2$."
        },
        {
          "id": "l7-so-huu-ti-hsg-09",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Khi nào có thể đổi ngoặc phép chia?",
          "prompt": "Cho các số hữu tỉ $a,b,c$ đều khác $0$. (a) Chứng minh $(a:b):c=a:(b\\cdot c)$. (b) Tìm tất cả các giá trị $c$ để $(a:b):c=a:(b:c)$ và giải thích vì sao không còn giá trị nào khác.",
          "svg": "",
          "solution": "Bước 1: Kiểm các phép chia và chứng minh phần (a)\nVì $b,c\\ne0$, cả $bc$ và $b:c$ đều khác $0$. Mọi phép chia trong đề đều xác định.\n$(a:b):c=\\frac{a}{b}\\cdot \\frac{1}{c}=\\frac{a}{bc}=a:(b\\cdot c)$.\nBước 2: Viết hai vế của phần (b)\nVế trái là $\\frac{a}{bc}$. Vế phải là $a:\\frac{b}{c}=\\frac{ac}{b}$.\nBước 3: Tìm điều kiện bắt buộc\nNhân đẳng thức $\\frac{a}{bc}=\\frac{ac}{b}$ với số khác $0$ là $\\frac{bc}{a}$, ta được $1=c^2$.\nMột số hữu tỉ có bình phương bằng $1$ thì bằng $1$ hoặc $-1$.\nBước 4: Thử lại và kết luận\nVới $c=1$, cả hai vế bằng $\\frac{a}{b}$. Với $c=-1$, cả hai vế bằng $-\\frac{a}{b}$.\nVậy điều kiện cần và đủ là $c=1$ hoặc $c=-1$. Điều kiện $a\\ne0$ giúp bước chia cho $a$ hợp lệ."
        },
        {
          "id": "l7-so-huu-ti-hsg-10",
          "lop": 7,
          "chuDe": "so-huu-ti",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Tổng ba phân thức từ tích bằng một",
          "prompt": "Cho ba số hữu tỉ dương $a,b,c$ thỏa $abc=1$. Chứng minh $\\frac{1}{1+a+ab}+\\frac{1}{1+b+bc}+\\frac{1}{1+c+ca}=1$.",
          "svg": "",
          "solution": "Bước 1: Kiểm mẫu và chọn mẫu chung\nCác số $a,b,c$ dương nên ba mẫu đều dương. Đặt $D=1+a+ab>0$.\nBước 2: Đổi phân thức thứ hai\nTừ $abc=1$, ta có $a(1+b+bc)=a+ab+1=D$.\nNhân cả tử và mẫu phân thức thứ hai với $a\\ne0$ được $\\frac{1}{1+b+bc}=\\frac{a}{D}$.\nBước 3: Đổi phân thức thứ ba\nTa có $ab(1+c+ca)=ab+abc+abca=ab+1+a=D$, vì $abc=1$.\nNhân cả tử và mẫu với $ab>0$ được $\\frac{1}{1+c+ca}=\\frac{ab}{D}$.\nBước 4: Cộng các phân thức cùng mẫu\nTổng đã cho bằng $\\frac{1}{D}+\\frac{a}{D}+\\frac{ab}{D}=\\frac{1+a+ab}{D}=\\frac{D}{D}=1$.\nĐó là điều phải chứng minh."
        }
      ]
    },
    'so-thuc': {
      "kha": [
        {
          "id": "l7-so-thuc-kha-01",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận biết số vô tỉ",
          "prompt": "Trong bốn số sau, số nào là số vô tỉ?",
          "svg": "",
          "options": [
            "A. $\\sqrt9$",
            "B. $0{,}(3)$",
            "C. $-\\frac74$",
            "D. $\\sqrt2$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Phân biệt hai loại số\nSố hữu tỉ viết được thành tỉ số hai số nguyên, mẫu khác $0$.\nSố vô tỉ không viết được dưới dạng đó.\nBước 2: Xét A và C\n$\\sqrt9=3=3/1$ là hữu tỉ.\n$-7/4$ cũng là hữu tỉ theo định nghĩa.\nBước 3: Xét số tuần hoàn\n$0{,}(3)=1/3$, nên B vẫn là hữu tỉ dù có vô hạn chữ số thập phân.\nBước 4: Nhận diện căn còn lại\n$\\sqrt2$ là số vô tỉ đã học: biểu diễn thập phân của nó vô hạn và không tuần hoàn.\nDấu căn không tự làm một số thành vô tỉ, như trường hợp $\\sqrt9$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-so-thuc-kha-02",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Căn bậc hai số học của số thập phân",
          "prompt": "Tính căn bậc hai số học $\\sqrt{0{,}81}$.",
          "svg": "",
          "options": [
            "A. $-0{,}9$",
            "B. $0{,}9$",
            "C. $0{,}81$",
            "D. $0{,}09$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhắc định nghĩa\nCăn bậc hai số học của $0{,}81$ là số không âm có bình phương bằng $0{,}81$.\nBước 2: Tìm số có bình phương phù hợp\n$0{,}9\\cdot0{,}9=0{,}81$.\nBước 3: Kiểm tra dấu\n$0{,}9\\ge0$, thỏa điều kiện căn bậc hai số học.\nBước 4: Phân biệt với căn âm\n$-0{,}9$ cũng có bình phương bằng $0{,}81$, nhưng không phải căn bậc hai số học vì âm.\nBước 5: Kết luận\n$\\sqrt{0{,}81}=0{,}9$. Chọn B."
        },
        {
          "id": "l7-so-thuc-kha-03",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Khoảng cách đến gốc trên trục số",
          "prompt": "Trên trục số, các vạch liên tiếp cách đều nhau. Điểm $M$ nằm ở vạch chính giữa $-2$ và $-1$. Gọi $x$ là số biểu diễn bởi $M$. Tính $|x|$.",
          "svg": svgCap2.svgRealNumberLine({ min: -2, max: 2, step: 0.5, value: -1.5 }),
          "options": [
            "A. $-1{,}5$",
            "B. $0{,}5$",
            "C. $1{,}5$",
            "D. $2{,}5$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đọc khoảng trên trục số\nTừ $-2$ đến $-1$ dài $1$ đơn vị.\n$M$ nằm chính giữa nên cách mỗi đầu $0{,}5$ đơn vị.\nBước 2: Xác định số x\nĐi từ $-2$ sang phải $0{,}5$ được $x=-1{,}5$.\nBước 3: Dùng ý nghĩa giá trị tuyệt đối\n$|x|$ là khoảng cách từ điểm biểu diễn $x$ đến gốc $0$.\nBước 4: Tính khoảng cách\nTừ $-1{,}5$ đến $0$ dài $1{,}5$ đơn vị, nên $|x|=1{,}5$.\nKhoảng cách không mang dấu âm của tọa độ.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-so-thuc-kha-04",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Căn số học khác hai căn đối nhau",
          "prompt": "Khẳng định nào mô tả đúng đồng thời $\\sqrt9$ và các số thực có bình phương bằng $9$?",
          "svg": "",
          "options": [
            "A. $\\sqrt9=3$; chỉ số $3$ có bình phương bằng $9$.",
            "B. $\\sqrt9=3$; hai số $3,-3$ có bình phương bằng $9$.",
            "C. $\\sqrt9=\\pm3$; hai số $3,-3$ có bình phương bằng $9$.",
            "D. $\\sqrt9=-3$; chỉ số $-3$ có bình phương bằng $9$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Dùng định nghĩa căn số học\n$\\sqrt9$ là số không âm có bình phương bằng $9$, nên $\\sqrt9=3$.\nBước 2: Phân biệt với bài tìm số có bình phương cho trước\n$3^2=9$ và $(-3)^2=9$. Các số có bình phương bằng $9$ là $3$ và $-3$.\nChỉ số không âm được chọn làm căn bậc hai số học. Chọn B."
        },
        {
          "id": "l7-so-thuc-kha-05",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giá trị tuyệt đối của tổng hai số âm",
          "prompt": "Tính $T=|-1{,}2+(-0{,}8)|$.",
          "svg": "",
          "options": [
            "A. $-2$",
            "B. $0{,}4$",
            "C. $-0{,}4$",
            "D. $2$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính số nằm trong dấu giá trị tuyệt đối\n$-1{,}2+(-0{,}8)=-2$. Đây là tổng hai số âm, không phải hiệu hai độ lớn.\nBước 2: Lấy giá trị tuyệt đối và kết luận\nKhoảng cách từ $-2$ đến $0$ trên trục số là $2$, nên $T=|-2|=2$. Chọn D."
        }
      ],
      "nangCao": [
        {
          "id": "l7-so-thuc-nang-cao-01",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Kẹp một căn bậc hai giữa hai số thập phân",
          "prompt": "Khẳng định nào đúng?",
          "svg": "",
          "options": [
            "A. $2{,}6<\\sqrt7<2{,}7$",
            "B. $\\sqrt7<2{,}6<2{,}7$",
            "C. $2{,}6<2{,}7<\\sqrt7$",
            "D. $2{,}7<\\sqrt7<2{,}6$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Chọn cách so sánh căn\nVới các số không âm, thứ tự của các số cùng chiều với thứ tự bình phương.\nTa so sánh $2{,}6^2$ và $2{,}7^2$ với $7$.\nBước 2: Kiểm tra đầu dưới\n$2{,}6^2=6{,}76<7$, nên $2{,}6<\\sqrt7$.\nBước 3: Kiểm tra đầu trên\n$2{,}7^2=7{,}29>7$, nên $\\sqrt7<2{,}7$.\nBước 4: Ghép hai kết quả\n$2{,}6<\\sqrt7<2{,}7$.\nCả hai bất đẳng thức đều nghiêm ngặt vì các bình phương không bằng $7$.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-so-thuc-nang-cao-02",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "So sánh các số đối của số dương",
          "prompt": "Chọn thứ tự đúng từ bé đến lớn.",
          "svg": "",
          "options": [
            "A. $-\\sqrt5<-2{,}3<-2{,}2$",
            "B. $-2{,}2<-\\sqrt5<-2{,}3$",
            "C. $-2{,}3<-2{,}2<-\\sqrt5$",
            "D. $-2{,}3<-\\sqrt5<-2{,}2$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tạm so sánh các số dương\n$2{,}2^2=4{,}84$ và $2{,}3^2=5{,}29$.\nBước 2: Kẹp căn\n$4{,}84<5<5{,}29$, nên $2{,}2<\\sqrt5<2{,}3$ vì các số đều dương.\nBước 3: Lấy số đối\nKhi lấy số đối, thứ tự đảo lại.\nDo đó $-2{,}3<-\\sqrt5<-2{,}2$.\nBước 4: Kiểm tra chiều trên trục số\nTrong hai số $-2{,}3$ và $-2{,}2$, số $-2{,}3$ nằm bên trái nên nhỏ hơn.\nKết quả đã viết đúng từ bé đến lớn.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-so-thuc-nang-cao-03",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Chọn số báo cáo trong giới hạn sai lệch",
          "prompt": "Máy đo hiển thị chiều dài $3{,}746$ m. Báo cáo phải dùng số đã làm tròn đến hàng phần trăm và sai lệch so với số máy hiển thị không quá $0{,}005$ m. Trong các số sau, số nào đáp ứng cả hai yêu cầu?",
          "svg": "",
          "options": [
            "A. $3{,}74$ m",
            "B. $3{,}75$ m",
            "C. $3{,}7$ m",
            "D. $3{,}8$ m"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định hàng cần giữ\nLàm tròn đến hàng phần trăm nghĩa là giữ hai chữ số thập phân.\nỞ $3{,}746$, chữ số hàng phần trăm là $4$.\nBước 2: Xét chữ số kế tiếp\nHàng phần nghìn là $6\\ge5$, nên tăng chữ số $4$ lên $5$.\nSố làm tròn là $3{,}75$ m.\nBước 3: Tính sai lệch\n$|3{,}75-3{,}746|=0{,}004$ m.\nBước 4: Kiểm tra yêu cầu thứ hai\n$0{,}004\\le0{,}005$, nên đạt giới hạn sai lệch.\nNếu cắt bỏ thành $3{,}74$ thì sai lệch $0{,}006$ m, không đạt.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-so-thuc-nang-cao-04",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Chọn số chữ số thập phân cần thiết",
          "prompt": "Cân điện tử hiển thị $18{,}647$ kg. Chỉ xét sai lệch do làm tròn so với số hiển thị. Cần báo cáo một số được làm tròn theo quy tắc thông thường, có ít chữ số thập phân nhất mà sai lệch không quá $0{,}05$ kg. Chọn báo cáo phù hợp.",
          "svg": "",
          "options": [
            "A. $18{,}6$ kg",
            "B. $18{,}65$ kg",
            "C. $19$ kg",
            "D. $18{,}64$ kg"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Thử ít chữ số nhất\nNếu không giữ chữ số thập phân, $18{,}647$ làm tròn thành $19$ kg.\nBước 2: Kiểm tra sai lệch\n$19-18{,}647=0{,}353>0{,}05$ kg nên cách này chưa đạt.\nBước 3: Thử một chữ số thập phân\nHàng phần trăm là $4<5$, nên làm tròn đến phần mười được $18{,}6$ kg.\nBước 4: Xác nhận đủ và ít nhất\nSai lệch $18{,}647-18{,}6=0{,}047\\le0{,}05$ kg.\nKhông chữ số thì chưa đạt, một chữ số đã đạt, nên đây là số chữ số ít nhất.\nBước 5: Kết luận\nChọn A. $18{,}65$ chính xác hơn nhưng dùng nhiều chữ số hơn yêu cầu."
        },
        {
          "id": "l7-so-thuc-nang-cao-05",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân loại biểu thức chứa căn và số tuần hoàn",
          "prompt": "Cho $B=\\sqrt{0{,}04}+0{,}(6)$, trong đó $0{,}(6)=0{,}666\\ldots$. Khẳng định nào đúng?",
          "svg": "",
          "options": [
            "A. $B$ là số hữu tỉ và $B=\\frac{13}{15}$.",
            "B. $B$ là số vô tỉ.",
            "C. $B$ là số hữu tỉ và $B=\\frac45$.",
            "D. $B$ là số hữu tỉ và $B=\\frac23$."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Tính căn số học\n$0{,}2\\ge0$ và $0{,}2^2=0{,}04$, nên $\\sqrt{0{,}04}=0{,}2=1/5$.\nBước 2: Đổi số tuần hoàn\n$0{,}(6)=2/3$.\nKhông thay nó bằng số hữu hạn $0{,}6$, vì hai số khác nhau.\nBước 3: Cộng hai phân số\n$B=1/5+2/3=3/15+10/15=13/15$.\nBước 4: Phân loại kết quả\n$13$ và $15$ là các số nguyên, $15\\ne0$, nên $B$ là số hữu tỉ.\nViệc biểu thức có dấu căn không quyết định ngay loại số.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-so-thuc-nang-cao-06",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Kết hợp giá trị tuyệt đối và điều kiện vị trí",
          "prompt": "Số thực $x$ thỏa $|x|=2{,}5$ và $x<1$. Tính $|x+1|$.",
          "svg": "",
          "options": [
            "A. $3{,}5$",
            "B. $-1{,}5$",
            "C. $2{,}5$",
            "D. $1{,}5$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tìm các số có cùng giá trị tuyệt đối\n$|x|=2{,}5$ cho $x=2{,}5$ hoặc $x=-2{,}5$.\nBước 2: Dùng điều kiện còn lại\n$x<1$ loại $2{,}5$, chỉ nhận $x=-2{,}5$.\nBước 3: Tính biểu thức trong dấu giá trị tuyệt đối\n$x+1=-2{,}5+1=-1{,}5$.\nBước 4: Lấy giá trị tuyệt đối\n$|-1{,}5|=1{,}5$ vì khoảng cách đến $0$ không âm.\nKhông được bỏ dấu giá trị tuyệt đối rồi giữ kết quả âm.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-so-thuc-nang-cao-07",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giá trị tuyệt đối khi biết khoảng chứa số",
          "prompt": "Cho số thực $a$ thỏa $-1<a<0$. Biểu thức $|a|+|a+1|$ bằng biểu thức nào dưới đây?",
          "svg": "",
          "options": [
            "A. $-1$",
            "B. $1$",
            "C. $2a+1$",
            "D. $-2a-1$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xét dấu của a\nTừ $-1<a<0$, biết $a<0$ nên $|a|=-a$.\nBước 2: Xét dấu của a cộng 1\n$a>-1$ cho $a+1>0$, nên $|a+1|=a+1$.\nBước 3: Thay hai biểu thức\n$|a|+|a+1|=-a+(a+1)$.\nBước 4: Thu gọn\n$-a+a=0$, nên tổng bằng $1$.\nHai dấu được xác định riêng; không thể bỏ cả hai dấu giá trị tuyệt đối theo cùng một cách.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-so-thuc-nang-cao-08",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Căn của bình phương số âm",
          "prompt": "Cho $x=-1{,}5$. Tính $P=\\sqrt{x^2}+x$.",
          "svg": "",
          "options": [
            "A. $-3$",
            "B. $3$",
            "C. $0$",
            "D. $2{,}25$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tính bình phương trước khi lấy căn\n$x^2=(-1{,}5)^2=2{,}25\\ge0$ nên căn xác định.\nBước 2: Chọn căn không âm\n$\\sqrt{x^2}=\\sqrt{2{,}25}=1{,}5$, vì $1{,}5\\ge0$ và $(1{,}5)^2=2{,}25$.\nKhông được viết $\\sqrt{x^2}=x=-1{,}5$ trong trường hợp này.\nBước 3: Cộng và kết luận\n$P=1{,}5+(-1{,}5)=0$. Chọn C."
        },
        {
          "id": "l7-so-thuc-nang-cao-09",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Suy ngược từ kết quả làm tròn",
          "prompt": "Số dương $x$ được làm tròn đến hàng phần mười thành $2{,}4$, theo quy tắc chữ số kế tiếp từ $5$ trở lên thì tăng một đơn vị ở hàng làm tròn. Điều kiện nào mô tả đúng tất cả các giá trị có thể của $x$?",
          "svg": "",
          "options": [
            "A. $x=2{,}4$",
            "B. $2{,}35<x\\le2{,}45$",
            "C. $2{,}35\\le x<2{,}45$",
            "D. $|x-2{,}4|<0{,}05$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định hai mốc chuyển kết quả\n$2{,}35$ được làm tròn thành $2{,}4$, nên nhận mốc dưới.\n$2{,}45$ được làm tròn thành $2{,}5$, nên không nhận mốc trên.\nBước 2: Xét các số giữa hai mốc\nMọi số từ $2{,}35$ đến dưới $2{,}45$ đều làm tròn thành $2{,}4$. Ngoài khoảng đó, kết quả làm tròn không còn là $2{,}4$.\nBước 3: Kết luận\nĐiều kiện đúng là $2{,}35\\le x<2{,}45$. Chọn C."
        },
        {
          "id": "l7-so-thuc-nang-cao-10",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Thông tin đủ để biết dấu",
          "prompt": "Hai số thực khác nhau $a,b$ thỏa $|a|=|b|=\\sqrt5$. Thông tin bổ sung nào đủ để khẳng định $a<0$?",
          "svg": "",
          "options": [
            "A. $a<b$",
            "B. $a+b=0$",
            "C. $a^2=b^2$",
            "D. $ab=-5$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Liệt kê các số có độ lớn đã cho\nVì $\\sqrt5>0$, mỗi số bằng $\\sqrt5$ hoặc $-\\sqrt5$. Điều kiện $a\\ne b$ buộc chúng trái dấu.\nBước 2: Dùng thông tin thứ tự\nNếu $a<b$, số nhỏ hơn phải là $-\\sqrt5$, do đó $a<0$.\nBước 3: Kiểm vì sao các thông tin khác chưa đủ\nCả hai cách $(a,b)=(\\sqrt5,-\\sqrt5)$ và $(-\\sqrt5,\\sqrt5)$ đều có $a+b=0$, $a^2=b^2$ và $ab=-5$.\nBa thông tin đó không phân biệt số nào âm. Chọn A."
        },
        {
          "id": "l7-so-thuc-nang-cao-11",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Liên kết căn và giá trị tuyệt đối",
          "prompt": "Hai số thực $x,y$ thỏa $|x|=\\sqrt y$ và $x+y=0$. Tập hợp tất cả các giá trị có thể của $y$ là tập nào?",
          "svg": "",
          "options": [
            "A. $\\{1\\}$",
            "B. $\\{0\\}$",
            "C. $\\{-1;0;1\\}$",
            "D. $\\{0;1\\}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Dùng điều kiện căn và tổng\nCăn $\\sqrt y$ xác định nên $y\\ge0$. Từ $x+y=0$, có $x=-y\\le0$ và $|x|=y$.\nBước 2: Xét riêng giá trị 0\nĐẳng thức đầu trở thành $y=\\sqrt y$. Nếu $y=0$, chọn $x=0$ thì cả hai điều kiện đều đúng.\nBước 3: Xét y dương\nBình phương hai vế không âm được $y^2=y$. Khi $y>0$, chia cho $y$ được $y=1$.\nThử $y=1,x=-1$: $|x|=1=\\sqrt1$ và $x+y=0$, nên nhận.\nBước 4: Kết luận\nChỉ có $y=0$ hoặc $y=1$. Tập giá trị là $\\{0;1\\}$. Chọn D."
        }
      ],
      "hsg": [
        {
          "id": "l7-so-thuc-hsg-01",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Số nguyên thỏa hai điều kiện khoảng cách",
          "prompt": "Trên trục số, điểm $M$ biểu diễn số nguyên $x$. Khoảng cách từ $M$ đến điểm biểu diễn $1$ nhỏ hơn $3$, còn khoảng cách từ $M$ đến điểm biểu diễn $-2$ lớn hơn $2$. Tính tổng tất cả các giá trị $x$ thỏa mãn.",
          "svg": "",
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chuyển khoảng cách đầu thành khoảng\nCách điểm $1$ ít hơn $3$ đơn vị nghĩa là nằm giữa $1-3=-2$ và $1+3=4$.\nHai đầu không được nhận vì khoảng cách phải nhỏ hơn $3$.\nBước 2: Liệt kê các số nguyên\nTrong $-2<x<4$, các số nguyên là $-1,0,1,2,3$.\nBước 3: Kiểm khoảng cách thứ hai\nKhoảng cách đến $-2$ lần lượt là $1,2,3,4,5$.\nYêu cầu lớn hơn $2$ loại $-1$ và $0$, giữ $1,2,3$.\nBước 4: Cộng các giá trị còn lại\n$1+2+3=6$.\nCác giá trị cách đúng $2$ không được nhận ở điều kiện thứ hai.\nBước 5: Kết luận\nTổng cần tìm là $6$."
        },
        {
          "id": "l7-so-thuc-hsg-02",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tổng khoảng cách đến hai điểm cố định",
          "prompt": "Trên trục số, $A$ biểu diễn $-2$, $B$ biểu diễn $4$. Điểm $M$ biểu diễn số thực $x<1$ và có tổng khoảng cách $MA+MB=8$. Tìm $x$.",
          "svg": "",
          "correctAnswer": "-3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính khoảng cách hai mốc\n$AB=4-(-2)=6$ đơn vị.\nTa xét vị trí $M$ so với đoạn $AB$.\nBước 2: Loại vị trí trong đoạn\nNếu $M$ thuộc $AB$, kể cả hai đầu, $MA+MB=AB=6$, khác $8$.\nVì vậy $M$ phải ở ngoài đoạn.\nBước 3: Chọn phía phù hợp\nNếu bên phải $B$ thì $x>4$, trái $x<1$.\nDo đó $M$ ở bên trái $A$, và $MB=MA+AB=MA+6$.\nBước 4: Tìm tọa độ\n$MA+MB=8$ cho $2MA+6=8$, nên $MA=1$.\nTừ $A$ ở $-2$ đi sang trái $1$ đơn vị được $x=-3$.\nBước 5: Kết luận và thử lại\n$MA=1$, $MB=7$, tổng bằng $8$ và $-3<1$.\nĐáp số là $-3$."
        },
        {
          "id": "l7-so-thuc-hsg-03",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "dien",
          "title": "Làm tròn có thể làm sai số đoạn cắt được",
          "prompt": "Một sợi dây dài đúng $9{,}85$ m. Cần cắt các đoạn, mỗi đoạn dài đúng $\\sqrt2$ m, không có hao hụt khi cắt. Một bạn làm tròn $\\sqrt2$ thành $1{,}4$ rồi dự đoán cắt được $7$ đoạn. Biết $1{,}4142<\\sqrt2<1{,}4143$. Thực tế cắt được nhiều nhất bao nhiêu đoạn?",
          "svg": "",
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Dùng độ dài thật\nMỗi đoạn dài đúng $\\sqrt2$ m, không phải $1{,}4$ m.\nĐể tìm số đoạn tối đa, kiểm tra $7$ đoạn có đủ dây không và $6$ đoạn có cắt được không.\nBước 2: Loại 7 đoạn\n$\\sqrt2>1{,}4142$ nên $7\\sqrt2>7\\cdot1{,}4142=9{,}8994$ m.\nSố này vượt $9{,}85$ m, nên không đủ cho $7$ đoạn.\nBước 3: Kiểm tra 6 đoạn\n$\\sqrt2<1{,}4143$ nên $6\\sqrt2<8{,}4858<9{,}85$ m.\nVì không hao hụt, cắt được $6$ đoạn.\nBước 4: Xác nhận tính tối đa\nMỗi đoạn có độ dài dương, nên từ $7$ đoạn trở lên cần ít nhất lượng dây cho $7$ đoạn.\nTất cả đều không thể; dự đoán sai do làm tròn độ dài xuống quá thấp.\nBước 5: Kết luận\nNhiều nhất là $6$ đoạn."
        },
        {
          "id": "l7-so-thuc-hsg-04",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Kẹp tổng hai căn mà không tính căn chính xác",
          "prompt": "Không dùng máy tính và không dùng giá trị thập phân có sẵn của các căn, hãy chứng minh $3{,}14<\\sqrt2+\\sqrt3<3{,}16$. Có thể dùng phép nhân các số thập phân.",
          "svg": "",
          "solution": "Bước 1: Chọn cách chứng minh\nTa kẹp riêng từng căn giữa hai số thập phân, rồi cộng các cận.\nChỉ so sánh bình phương của các số dương để giữ đúng thứ tự.\nBước 2: Kẹp căn 2\n$1{,}41^2=1{,}9881<2<2{,}0164=1{,}42^2$.\nDo đó $1{,}41<\\sqrt2<1{,}42$.\nBước 3: Kẹp căn 3\n$1{,}73^2=2{,}9929<3<3{,}0276=1{,}74^2$.\nDo đó $1{,}73<\\sqrt3<1{,}74$.\nBước 4: Cộng từng phía\nCận dưới: $\\sqrt2+\\sqrt3>1{,}41+1{,}73=3{,}14$.\nCận trên: $\\sqrt2+\\sqrt3<1{,}42+1{,}74=3{,}16$.\nBước 5: Kết luận\n$3{,}14<\\sqrt2+\\sqrt3<3{,}16$.\nCác cận được chứng minh bằng phép nhân, không dùng giá trị gần đúng có sẵn của căn."
        },
        {
          "id": "l7-so-thuc-hsg-05",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Bác bỏ dự đoán về hiệu hai căn",
          "prompt": "Một bạn cho rằng $\\sqrt{50}-\\sqrt{49}=\\sqrt2-\\sqrt1$ vì $50-49=2-1$. Không dùng máy tính, hãy dùng các khoảng kẹp để chứng minh hai hiệu không bằng nhau và xác định hiệu nào nhỏ hơn.",
          "svg": "",
          "solution": "Bước 1: Kẹp căn lớn\n$7^2=49<50<50{,}41=7{,}1^2$.\nVì các số dương, $7<\\sqrt{50}<7{,}1$.\nBước 2: Kẹp hiệu thứ nhất\n$\\sqrt{49}=7$, nên trừ $7$ được $0<\\sqrt{50}-\\sqrt{49}<0{,}1$.\nBước 3: Tìm cận dưới hiệu thứ hai\n$1{,}4^2=1{,}96<2$ cho $\\sqrt2>1{,}4$.\nVì $\\sqrt1=1$, có $\\sqrt2-\\sqrt1>0{,}4$.\nBước 4: So sánh hai hiệu\nHiệu thứ nhất nhỏ hơn $0{,}1$, mà $0{,}1<0{,}4$, còn hiệu thứ hai lớn hơn $0{,}4$.\nDo đó hiệu thứ nhất nhỏ hơn hiệu thứ hai.\nBước 5: Kết luận\n$\\sqrt{50}-\\sqrt{49}<\\sqrt2-\\sqrt1$.\nHai số dưới căn cùng chênh $1$ không làm các căn chênh cùng một lượng."
        },
        {
          "id": "l7-so-thuc-hsg-06",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chọn đúng nhánh dấu",
          "prompt": "Cho $|a|=\\frac{7}{4}$, $|b|=\\frac{5}{4}$, $a+b<0$ và $ab<0$. Tính $|2a+b|$.",
          "svg": "",
          "correctAnswer": "2.25",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Dùng dấu của tích\n$ab<0$ nên hai số trái dấu. Hai khả năng là $(a,b)=(\\frac{7}{4},-\\frac{5}{4})$ hoặc $(-\\frac{7}{4},\\frac{5}{4})$.\nBước 2: Dùng dấu của tổng\nKhả năng thứ nhất có tổng $\\frac{1}{2}>0$, trái đề. Khả năng thứ hai có tổng $-\\frac{1}{2}<0$, nên nhận.\nVậy $a=-\\frac{7}{4},b=\\frac{5}{4}$.\nBước 3: Tính biểu thức\n$2a+b=-\\frac{14}{4}+\\frac{5}{4}=-\\frac{9}{4}$.\nDo đó $|2a+b|=\\frac{9}{4}=2{,}25$.\nBước 4: Kết luận\n$|2a+b|=\\frac{9}{4}=2{,}25$."
        },
        {
          "id": "l7-so-thuc-hsg-07",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Lọc số nguyên bằng điều kiện căn",
          "prompt": "Có bao nhiêu số nguyên $n\\ge0$ để căn $\\sqrt{13-2n}$ xác định và $\\sqrt{13-2n}>n$?",
          "svg": "",
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Giới hạn miền cần xét\nCăn xác định khi $13-2n\\ge0$. Với $n$ nguyên không âm, chỉ cần xét $n=0,1,…,6$.\nBước 2: Loại đồng thời các số từ 3 trở lên\nNếu $n\\ge3$ thì $13-2n\\le7<9\\le n^2$.\nCả căn và $n$ đều không âm, nên $\\sqrt{13-2n}<n$; các số này không thỏa đề.\nBước 3: Kiểm ba số còn lại\n$n=0$: $\\sqrt{13}>0$.\n$n=1$: $\\sqrt{11}>1$ vì $11>1^2$.\n$n=2$: $\\sqrt9=3>2$. Các căn này đều xác định.\nBước 4: Kết luận\nCó đúng $3$ số nguyên thỏa mãn: $0,1,2$."
        },
        {
          "id": "l7-so-thuc-hsg-08",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Các số nguyên luôn nằm trong khoảng",
          "prompt": "Chỉ biết hai số thực $a,b$ thỏa $2{,}35\\le a<2{,}45$ và $5{,}55\\le b<5{,}65$. Có bao nhiêu số nguyên $n$ chắc chắn thỏa $10a<n<10b$ với mọi cặp $a,b$ trong các khoảng đã cho?",
          "svg": "",
          "correctAnswer": "31",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm một nhóm số luôn thỏa\nTa có $10a<24{,}5$ và $10b\\ge55{,}5$.\nVới mỗi số nguyên $25\\le n\\le55$, luôn có $10a<24{,}5<n<55{,}5\\le10b$.\nBước 2: Loại những số nguyên nhỏ hơn nhóm đó\nVới $n\\le24$, chọn $a=2{,}4$, là giá trị được phép. Khi đó $10a=24\\ge n$, nên điều kiện $10a<n$ không đúng.\nBước 3: Loại những số nguyên lớn hơn nhóm đó\nVới $n\\ge56$, chọn $b=5{,}55$, là giá trị được phép. Khi đó $10b=55{,}5<n$, nên $n<10b$ không đúng.\nBước 4: Đếm và kết luận\nCác số nguyên được bảo đảm chính xác là $25,26,…,55$. Có $55-25+1=31$ số.\nBước 5: Kết luận\nCó $31$ số nguyên được bảo đảm thỏa mãn."
        },
        {
          "id": "l7-so-thuc-hsg-09",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai số liên tiếp có căn nguyên",
          "prompt": "Tìm tất cả các số nguyên $n\\ge0$ sao cho cả $\\sqrt n$ và $\\sqrt{n+1}$ đều là số nguyên. Chứng minh không còn giá trị nào khác.",
          "svg": "",
          "solution": "Bước 1: Xét giá trị biên\nVới $n=0$, hai căn là $0$ và $1$, đều nguyên, nên nhận.\nBước 2: Giả sử n dương và cả hai căn nguyên\nĐặt $k=\\sqrt n$, $l=\\sqrt{n+1}$. Vì $n\\ge1$, $k,l$ là các số nguyên dương.\n$l^2=k^2+1>k^2$ nên $l>k$. Hai số nguyên khác nhau ít nhất $1$, do đó $l\\ge k+1$.\nBước 3: So hai bình phương liên tiếp\n$l^2\\ge(k+1)^2=(k+1)(k+1)=k^2+2k+1\\ge k^2+3$, vì $k\\ge1$.\nĐiều này trái với $l^2=k^2+1$. Vậy không có $n$ dương nào thỏa.\nBước 4: Kết luận\nGiá trị duy nhất là $n=0$."
        },
        {
          "id": "l7-so-thuc-hsg-10",
          "lop": 7,
          "chuDe": "so-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Khi giá trị tuyệt đối của tổng bằng tổng",
          "prompt": "Cho hai số thực $a,b$. Chứng minh $|a+b|=|a|+|b|$ khi và chỉ khi $ab\\ge0$. Phải xét cả trường hợp một số bằng $0$.",
          "svg": "",
          "solution": "Bước 1: Xét khi có số bằng 0\nNếu $a=0$ thì hai vế đều bằng $|b|$; nếu $b=0$ thì hai vế đều bằng $|a|$. Các trường hợp này có $ab=0$.\nBước 2: Xét hai số cùng dấu\nNếu $a,b>0$ thì $|a+b|=a+b=|a|+|b|$.\nNếu $a,b<0$ thì $a+b<0$, nên $|a+b|=-a-b=|a|+|b|$. Cả hai trường hợp có $ab>0$.\nBước 3: Xét hai số trái dấu và khác 0\nĐặt $p=|a|>0,q=|b|>0$. Khi hai số trái dấu, $|a+b|=|p-q|$.\nNếu $p\\ge q$ thì $|p-q|=p-q<p+q$ vì $q>0$.\nNếu $p<q$ thì $|p-q|=q-p<p+q$ vì $p>0$.\nVậy hai số trái dấu không thể cho dấu bằng.\nBước 4: Kết luận hai chiều\n$ab\\ge0$ gồm trường hợp cùng dấu hoặc có số bằng $0$, đều cho đẳng thức.\nNgược lại, có đẳng thức thì không thể trái dấu, nên $ab\\ge0$."
        }
      ]
    },
    'ti-le-thuc': {
      "kha": [
        {
          "id": "l7-ti-le-thuc-kha-01",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận biết định nghĩa tỉ lệ thức",
          "prompt": "Tỉ lệ thức là gì?",
          "svg": "",
          "options": [
            "A. Tổng của hai tỉ số.",
            "B. Đẳng thức của hai tỉ số.",
            "C. Tích của hai tỉ số.",
            "D. Hiệu của hai tỉ số."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhắc khái niệm tỉ số\nTỉ số của hai số là thương của chúng, với số chia khác $0$.\nBước 2: Xét quan hệ giữa hai tỉ số\nKhi hai tỉ số bằng nhau, ta viết chúng ở hai vế của một đẳng thức.\nBước 3: Nêu tên quan hệ\nĐẳng thức của hai tỉ số được gọi là tỉ lệ thức.\nBước 4: Kiểm tra bằng ví dụ\n$2/3=4/6$ là tỉ lệ thức vì rút gọn $4/6$ được $2/3$.\nTổng, hiệu hoặc tích hai tỉ số riêng lẻ không phải định nghĩa này.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-ti-le-thuc-kha-02",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "mo-hinh-hoa",
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chia theo tỉ lệ",
          "prompt": "Hai bạn chia $25$ quyển vở. Số vở của An và Bình lần lượt tỉ lệ với $2$ và $3$. Bình được bao nhiêu quyển vở?",
          "svg": "",
          "options": [
            "A. $10$",
            "B. $12{,}5$",
            "C. $15$",
            "D. $37{,}5$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Biểu diễn số phần\nSố vở An gồm $2$ phần, Bình gồm $3$ phần bằng nhau.\nBước 2: Tính tổng phần\n$2+3=5$ phần ứng với $25$ quyển.\nBước 3: Tính phần của Bình\nMột phần bằng $25/5=5$ quyển.\nBình được $3\\cdot5=15$ quyển.\nBước 4: Kiểm tra\nAn được $10$ quyển; $10+15=25$ và $10:15=2:3$.\nCác kết quả nguyên phù hợp việc chia vở.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-ti-le-thuc-kha-03",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Nhận ra đại lượng tỉ lệ nghịch",
          "prompt": "Bốn máy giống nhau cùng làm một công việc thì xong trong $6$ giờ. Tám máy như thế cùng làm công việc đó thì xong trong bao lâu? Mỗi máy có năng suất không đổi; các máy không cản trở nhau.",
          "svg": "",
          "options": [
            "A. $12$ giờ",
            "B. $2$ giờ",
            "C. $6$ giờ",
            "D. $3$ giờ"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định đại lượng không đổi\nCùng một công việc và cùng năng suất mỗi máy nên tích số máy với thời gian không đổi.\nBước 2: Tính lượng công việc\nCông việc cần $4\\cdot6=24$ giờ làm của một máy.\nBước 3: Tính thời gian mới\nTám máy cùng làm cần $24/8=3$ giờ.\nBước 4: Kiểm tra quan hệ\nSố máy tăng gấp đôi thì thời gian giảm một nửa.\n$8\\cdot3=4\\cdot6=24$, đúng lượng công việc ban đầu.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-ti-le-thuc-kha-04",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tỉ lệ thuận với hệ số âm",
          "prompt": "Công thức nào cho biết $y$ tỉ lệ thuận với $x$ theo hệ số $-3$?",
          "svg": "",
          "options": [
            "A. $y=-3x$",
            "B. $y=-\\frac{3}{x}\\ (x\\ne0)$",
            "C. $y=x-3$",
            "D. $y=-\\frac{x}{3}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhắc định nghĩa\nHai đại lượng tỉ lệ thuận theo hệ số $k\\ne0$ khi $y=kx$. Hệ số có thể âm.\nBước 2: Thay hệ số\nVới $k=-3$, công thức là $y=-3x$. Chọn A."
        },
        {
          "id": "l7-ti-le-thuc-kha-05",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Giữ tích âm không đổi",
          "prompt": "Hai đại lượng $x,y$ tỉ lệ nghịch và có tích không đổi bằng $-12$. Khi $x=3$ thì $y$ bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $4$",
            "B. $-36$",
            "C. $-4$",
            "D. $-\\frac{1}{4}$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Viết quan hệ tích\n$xy=-12$. Với $x=3\\ne0$, có $3y=-12$.\nBước 2: Tìm và kiểm y\n$y=-12:3=-4$. Thử lại: $3\\cdot (-4)=-12$. Chọn C."
        }
      ],
      "nangCao": [
        {
          "id": "l7-ti-le-thuc-nang-cao-01",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Ghép hai tỉ số có chung một đại lượng",
          "prompt": "Cho $a,b,c>0$, $\\frac{a}{b}=\\frac{2}{3}$ và $\\frac{b}{c}=\\frac{4}{5}$. Tỉ số $\\frac{a}{c}$ bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac{2}{5}$",
            "B. $\\frac{5}{6}$",
            "C. $\\frac{8}{15}$",
            "D. $\\frac{3}{5}$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chọn tỉ số trung gian\n$\\frac ab=\\frac23$ và $\\frac bc=\\frac45$ đều có đại lượng $b$.\nCác số dương nên mọi phép chia đều xác định.\nBước 2: Nhân hai tỉ số\n$\\frac ab\\cdot\\frac bc=\\frac{ab}{bc}=\\frac ac$ vì $b\\ne0$.\nBước 3: Tính giá trị\n$\\frac ac=\\frac23\\cdot\\frac45=\\frac8{15}$.\nBước 4: Kiểm tra bằng số phần\n$a:b=8:12$, $b:c=12:15$, nên $a:b:c=8:12:15$.\nKết quả thứ hai cũng cho $a/c=8/15$.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-02",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Dãy tỉ số với tổng có hệ số",
          "prompt": "Cho $\\frac{x}{3}=\\frac{y}{5}$ và $2x+y=44$. Giá trị của $x$ là:",
          "svg": "",
          "options": [
            "A. $12$",
            "B. $24$",
            "C. $16{,}5$",
            "D. $4$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đặt tỉ số chung\nGọi $x/3=y/5=k$, khi đó $x=3k$, $y=5k$.\nBước 2: Dùng điều kiện tổng\n$2x+y=44$ trở thành $2\\cdot3k+5k=44$.\nBước 3: Tìm tỉ số chung\n$11k=44$ nên $k=4$.\nBước 4: Tính và thử lại\n$x=12$, $y=20$.\n$12/3=20/5=4$ và $2\\cdot12+20=44$, đúng cả hai điều kiện.\nBước 5: Kết luận\n$x=12$. Chọn A."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-03",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Đổi vận tốc và phần trăm thời gian",
          "prompt": "Một người đi cùng một quãng đường với vận tốc không đổi. Nếu vận tốc tăng $25\\%$ so với ban đầu thì thời gian đi giảm bao nhiêu phần trăm so với ban đầu?",
          "svg": "",
          "options": [
            "A. $25\\%$",
            "B. $20\\%$",
            "C. $80\\%$",
            "D. $125\\%$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Viết vận tốc mới\nTăng $25\\%$ nghĩa là vận tốc mới bằng $125\\%=5/4$ vận tốc cũ.\nBước 2: Dùng quãng đường không đổi\nThời gian bằng quãng đường chia vận tốc, nên thời gian tỉ lệ nghịch với vận tốc.\nBước 3: Tính tỉ số thời gian\nThời gian mới bằng $4/5=80\\%$ thời gian cũ.\nBước 4: Phân biệt còn lại và giảm đi\n$80\\%$ là thời gian còn lại.\nPhần giảm là $100\\%-80\\%=20\\%$ so với ban đầu.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-04",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Thêm nước để thay đổi tỉ lệ pha",
          "prompt": "Một bình có $21$ lít hỗn hợp siro và nước theo tỉ lệ thể tích $2:5$. Cần thêm bao nhiêu lít nước để tỉ lệ siro và nước thành $1:3$? Giả sử thể tích hỗn hợp bằng tổng thể tích các thành phần.",
          "svg": "",
          "options": [
            "A. $6$ lít",
            "B. $18$ lít",
            "C. $1$ lít",
            "D. $3$ lít"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính lượng siro ban đầu\nTổng tỉ lệ có $2+5=7$ phần.\nSiro có $21\\cdot2/7=6$ lít.\nBước 2: Tính lượng nước ban đầu\nNước có $21-6=15$ lít.\nBước 3: Dùng tỉ lệ mới\nChỉ thêm nước nên vẫn có $6$ lít siro.\nTỉ lệ siro:nước là $1:3$ đòi hỏi nước có $6\\cdot3=18$ lít.\nBước 4: Tính phần cần thêm\n$18-15=3$ lít.\nSau thêm, $6:18=1:3$ và tổng thể tích $24$ lít, đúng giả thiết cộng thể tích.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-05",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Kết hợp tỉ lệ thuận và tỉ lệ nghịch",
          "prompt": "Các đại lượng $x,y,z$ đều dương. $y$ tỉ lệ thuận với $x$, còn $x$ tỉ lệ nghịch với $z$. Khi $x=4$ thì $y=6$, $z=9$. Khi $z=6$ thì $y$ bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $4$",
            "B. $6$",
            "C. $9$",
            "D. $13{,}5$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tìm hệ số tỉ lệ thuận\n$y/x=6/4=3/2$, nên $y=(3/2)x$.\nBước 2: Tìm tích không đổi\n$x$ tỉ lệ nghịch với $z$ nên $xz=4\\cdot9=36$.\nBước 3: Tìm x khi z bằng 6\n$x=36/6=6$.\nBước 4: Tính y và kiểm tra\n$y=(3/2)\\cdot6=9$.\n$xz=6\\cdot6=36$ và $y/x=9/6=3/2$, khớp cả hai quan hệ.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-06",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Chia theo tỉ lệ khi biết hiệu",
          "prompt": "Độ dài hai đoạn dây tỉ lệ với $3$ và $5$. Đoạn dài hơn đoạn ngắn $18$ cm. Đoạn dây dài có độ dài bao nhiêu xăng-ti-mét?",
          "svg": "",
          "options": [
            "A. $45$ cm",
            "B. $27$ cm",
            "C. $9$ cm",
            "D. $11{,}25$ cm"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Biểu diễn hai độ dài\nGọi hai độ dài là $3k$ và $5k$, với $k>0$.\nBước 2: Dùng hiệu đã biết\n$5k-3k=18$, tức $2k=18$.\nBước 3: Tính đoạn dài\n$k=9$, nên đoạn dài bằng $5\\cdot9=45$ cm.\nBước 4: Thử lại\nĐoạn ngắn dài $27$ cm; $45-27=18$ cm và $27:45=3:5$.\n$18$ ứng với hiệu hai phần, không phải tổng $8$ phần.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-07",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tỉ số của tổng và hiệu",
          "prompt": "Cho $b\\ne0$ và $\\frac{a}{b}=\\frac{2}{3}$. Giá trị của $\\frac{a+b}{a-b}$ là:",
          "svg": "",
          "options": [
            "A. $5$",
            "B. $-5$",
            "C. $-\\frac{1}{5}$",
            "D. $\\frac{1}{5}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Biểu diễn theo tỉ số\n$a/b=2/3$ cho $a=2k$, $b=3k$.\nBước 2: Kiểm tra mẫu cần tính\n$b\\ne0$ nên $k\\ne0$.\nDo đó $a-b=2k-3k=-k\\ne0$.\nBước 3: Tính tử và mẫu\n$a+b=5k$, $a-b=-k$.\nBước 4: Chia nhân tử chung\n$(a+b)/(a-b)=5k/(-k)=-5$.\nĐược phép khử $k$ vì đã chứng minh $k\\ne0$.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-08",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cùng tăng chưa chắc tỉ lệ thuận",
          "prompt": "Bảng dưới ghi ba cặp giá trị tương ứng của $x,y$. Nhận xét nào đúng về ba cặp này?",
          "svg": svgCap2.svgGrade7DataExtension("ratio-table"),
          "options": [
            "A. Tỉ lệ thuận theo hệ số $2$.",
            "B. Tỉ lệ thuận theo hệ số $3$.",
            "C. Tỉ lệ nghịch với tích bằng $3$.",
            "D. Không có một hệ số tỉ lệ thuận hoặc tỉ lệ nghịch chung cho cả ba cặp."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Kiểm tỉ lệ thuận\nCác thương $y:x$ là $3:1=3$, $5:2=2{,}5$, $7:3=\\frac{7}{3}$. Chúng không bằng nhau.\nBước 2: Kiểm tỉ lệ nghịch\nCác tích $xy$ là $3,10,21$, cũng không bằng nhau.\nBước 3: Kết luận\nBa cặp không cùng tuân theo quan hệ tỉ lệ thuận hoặc tỉ lệ nghịch. Việc $y$ tăng khi $x$ tăng chưa đủ để kết luận tỉ lệ thuận. Chọn D."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-09",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tỉ lệ xích và đường đi vòng",
          "prompt": "Trên bản đồ tỉ lệ $1:20\\,000$, đoạn nối hai địa điểm dài $4{,}5$ cm. Đường đi thực tế dài hơn đoạn thẳng giữa hai địa điểm $20$%. Độ dài đường đi thực tế là bao nhiêu mét?",
          "svg": "",
          "options": [
            "A. $720$ m",
            "B. $900$ m",
            "C. $1080$ m",
            "D. $1125$ m"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đổi độ dài trên bản đồ ra thực tế\n$4{,}5\\cdot 20\\,000=90\\,000$ cm $=900$ m. Đây là độ dài đoạn thẳng, chưa phải đường đi.\nBước 2: Tính phần đường dài thêm\nPhần thêm là $900\\cdot 20$%$=180$ m.\nBước 3: Cộng và kết luận\nĐường đi dài $900+180=1080$ m. Chọn C."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-10",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chia theo tỉ lệ nghịch",
          "prompt": "Chia $117$ thẻ thành ba nhóm có số thẻ $a,b,c$ lần lượt tỉ lệ nghịch với $3,4,6$. Nhóm thứ hai có bao nhiêu thẻ?",
          "svg": "",
          "options": [
            "A. $36$",
            "B. $39$",
            "C. $52$",
            "D. $26$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Chuyển sang tỉ lệ thuận tương đương\nĐiều kiện tỉ lệ nghịch là $3a=4b=6c$. Vì $\\frac{1}{3}:\\frac{1}{4}:\\frac{1}{6}=4:3:2$, nên $a:b:c=4:3:2$.\nBước 2: Tính một phần rồi nhóm thứ hai\nCó $4+3+2=9$ phần bằng nhau. Mỗi phần có $117:9=13$ thẻ.\nNhóm thứ hai có $3\\cdot 13=39$ thẻ.\nBước 3: Kiểm lại\n$a=52,b=39,c=26$ có tổng $117$; $3\\cdot 52=4\\cdot 39=6\\cdot 26=156$. Chọn B."
        },
        {
          "id": "l7-ti-le-thuc-nang-cao-11",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cùng diện tích và tổng chu vi",
          "prompt": "Ba hình chữ nhật có cùng diện tích, với một cạnh lần lượt dài $2$ m, $3$ m, $6$ m. Tổng chu vi ba hình là $66$ m. Trong ba cạnh còn lại, cạnh dài nhất dài bao nhiêu mét?",
          "svg": "",
          "options": [
            "A. $11$ m",
            "B. $22$ m",
            "C. $5{,}5$ m",
            "D. $16{,}5$ m"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Gắn ba cạnh chưa biết với diện tích chung\nGọi diện tích chung là $S>0$ (m²). Ba cạnh còn lại dài $\\frac{S}{2},\\frac{S}{3},\\frac{S}{6}$ (m).\nTổng ba độ dài này là $S(\\frac{1}{2}+\\frac{1}{3}+\\frac{1}{6})=S$.\nBước 2: Dùng tổng chu vi\nTổng chu vi bằng $2(2+3+6)+2S=22+2S=66$.\nVậy $S=22$ m².\nBước 3: Chọn cạnh dài nhất và kiểm điều kiện\nBa cạnh còn lại là $11,\\frac{22}{3},\\frac{11}{3}$ m, đều dương. Cạnh lớn nhất là $11$ m.\nTổng chu vi tính lại bằng $22+2\\cdot 22=66$ m. Chọn A."
        }
      ],
      "hsg": [
        {
          "id": "l7-ti-le-thuc-hsg-01",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Bổ sung máy sau hai giai đoạn",
          "prompt": "Sáu máy bơm giống nhau dự kiến bơm đầy một bể trống trong $10$ giờ. Sau $2$ giờ, hai máy dừng; bốn máy còn lại chạy tiếp $3$ giờ. Lúc này cần bổ sung ít nhất bao nhiêu máy như thế để bể đầy không muộn hơn thời điểm dự kiến? Các máy đang chạy tiếp tục hoạt động; năng suất mỗi máy không đổi, không có nước thất thoát và các máy không cản trở nhau.",
          "svg": "",
          "correctAnswer": "4",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Quy công việc về một máy\nBể đầy tương ứng $6\\cdot10=60$ giờ bơm của một máy.\nCác năng suất được cộng vì máy giống nhau, không cản trở nhau và không thất thoát nước.\nBước 2: Tính phần đã làm\nHai giờ đầu được $6\\cdot2=12$ giờ-máy.\nBa giờ sau được $4\\cdot3=12$ giờ-máy; tổng đã làm $24$, còn $60-24=36$ giờ-máy.\nBước 3: Tính thời gian còn lại\nĐã qua $2+3=5$ giờ nên còn $10-5=5$ giờ đến hạn.\nBước 4: Tìm số máy tối thiểu\n$7$ máy làm được $35<36$ giờ-máy, chưa đủ; $8$ máy làm được $40\\ge36$, đủ.\nVậy cần $8$ máy hoạt động, tức bổ sung $8-4=4$ máy.\nBước 5: Kết luận và kiểm tra\nBổ sung ít nhất $4$ máy.\nKhi ấy phần còn lại xong sau $36/8=4{,}5$ giờ, tổng $9{,}5$ giờ, không muộn hơn dự kiến."
        },
        {
          "id": "l7-ti-le-thuc-hsg-02",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Ghép tỉ số và chuyển sách",
          "prompt": "Ba tổ A, B, C có số sách lần lượt là $a,b,c$. Biết $\\frac{a}{b}=\\frac{2}{3}$ và $\\frac{b}{c}=\\frac{4}{5}$. Sau khi tổ C chuyển $6$ quyển cho tổ A, tỉ số số sách của A và C là $\\frac{2}{3}$. Hỏi ban đầu cả ba tổ có bao nhiêu quyển sách?",
          "svg": "",
          "correctAnswer": "175",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Ghép hai tỉ số\nQuy cùng số phần của $b$: $a:b=8:12$, $b:c=12:15$.\nĐặt $a=8k,b=12k,c=15k$ với $k>0$.\nBước 2: Mô tả sau khi chuyển\nA có $8k+6$ quyển, C có $15k-6$ quyển.\nTỉ số mới yêu cầu $15k-6>0$ và $(8k+6)/(15k-6)=2/3$.\nBước 3: Giải theo tỉ số\nNhân chéo: $24k+18=30k-12$.\nSuy ra $6k=30$, nên $k=5$.\nBước 4: Tính số sách và kiểm tra\nBan đầu A, B, C lần lượt có $40,60,75$ quyển.\nSau chuyển A có $46$, C có $69>0$ và $46/69=2/3$; số sách đều nguyên dương.\nBước 5: Kết luận\nTổng ban đầu là $40+60+75=175$ quyển."
        },
        {
          "id": "l7-ti-le-thuc-hsg-03",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Biện luận trước khi rút gọn",
          "prompt": "Tìm tổng tất cả các số thực $m\\ne1$ thỏa mãn $\\frac{m+1}{2}=\\frac{m+1}{m-1}$.",
          "svg": "",
          "correctAnswer": "2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Giữ điều kiện mẫu\nĐề yêu cầu $m\\ne1$ để mẫu $m-1$ khác $0$.\nTrước khi chia cho $m+1$, phải xét nó có bằng $0$ không.\nBước 2: Xét m cộng 1 bằng 0\nKhi $m=-1$, hai vế đều bằng $0$, các mẫu là $2,-2$ đều khác $0$.\nVậy nhận $m=-1$.\nBước 3: Xét m cộng 1 khác 0\nChia hai vế cho $m+1$ được $1/2=1/(m-1)$.\nNhân chéo cho $m-1=2$, nên $m=3$.\nBước 4: Thử nghiệm thứ hai và kiểm đủ trường hợp\nVới $m=3$, hai vế đều bằng $2$ và $m\\ne1$.\nHai trường hợp của $m+1$ đã bao quát mọi khả năng, không bỏ mất nghiệm có tử bằng $0$.\nBước 5: Kết luận\nTổng các giá trị là $-1+3=2$."
        },
        {
          "id": "l7-ti-le-thuc-hsg-04",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Tỉ lệ sau khi cùng tăng tử và mẫu",
          "prompt": "Cho $a,b,c,d,t$ là các số dương, $\\frac{a}{b}=\\frac{c}{d}$ và $\\frac{a+t}{b+t}=\\frac{c+t}{d+t}$. Chứng minh rằng ít nhất một trong hai trường hợp sau xảy ra: $a=b$ và $c=d$; hoặc $a=c$ và $b=d$.",
          "svg": "",
          "solution": "Bước 1: Đặt tỉ số chung\nGọi $a/b=c/d=k>0$, nên $a=kb$, $c=kd$.\nCác mẫu $b+t,d+t$ đều dương theo giả thiết.\nBước 2: Dùng tỉ lệ thức thứ hai\nNhân chéo được $(kb+t)(d+t)=(kd+t)(b+t)$.\nBước 3: Khai triển và thu gọn\nHai vế lần lượt là $kbd+kbt+dt+t^2$ và $kdb+kdt+bt+t^2$.\nKhử các phần bằng nhau, được $kbt+dt=kdt+bt$.\nChia cho $t>0$ rồi chuyển vế: $(k-1)b=(k-1)d$.\nBước 4: Xét hai khả năng\nNếu $k=1$, có $a=b$ và $c=d$.\nNếu $k\\ne1$, được chia cho $k-1$ để có $b=d$; khi đó $a=kb=kd=c$.\nBước 5: Kết luận\nÍt nhất một trong hai trường hợp đề nêu xảy ra.\nKhông chia ngay cho $k-1$, vì như vậy sẽ bỏ trường hợp $k=1$; hai kết luận có thể cùng đúng."
        },
        {
          "id": "l7-ti-le-thuc-hsg-05",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc",
            "giai-quyet-van-de"
          ],
          "dang": "chungMinh",
          "title": "Tỉ số gộp và trung bình cộng",
          "prompt": "Cho $a,b,c,d>0$ và $\\frac{a}{b}<\\frac{c}{d}$. Chứng minh $\\frac{a}{b}<\\frac{a+c}{b+d}<\\frac{c}{d}$. Sau đó chứng minh tỉ số ở giữa bằng trung bình cộng của hai tỉ số ban đầu khi và chỉ khi $b=d$.",
          "svg": "",
          "solution": "Bước 1: Viết theo hai tỉ số ban đầu\nĐặt $r=a/b$, $s=c/d$, nên $r<s$ và $a=rb,c=sd$.\nGọi $T=(a+c)/(b+d)=(rb+sd)/(b+d)$; mẫu $b+d>0$.\nBước 2: So sánh với cận dưới\n$T-r=[rb+sd-r(b+d)]/(b+d)=d(s-r)/(b+d)>0$.\nVậy $r<T$ vì $d,s-r,b+d$ đều dương.\nBước 3: So sánh với cận trên\n$s-T=[s(b+d)-rb-sd]/(b+d)=b(s-r)/(b+d)>0$.\nDo đó $T<s$, hoàn thành hai bất đẳng thức.\nBước 4: Chứng minh điều kiện cần của trung bình cộng\nNếu $T=(r+s)/2$, nhân chéo được $2rb+2sd=(r+s)(b+d)$.\nThu gọn cho $(s-r)b=(s-r)d$.\nVì $s-r>0$, chia được và suy ra $b=d$.\nBước 5: Chứng minh chiều ngược và kết luận\nNếu $b=d$, thì $T=(rb+sb)/(2b)=(r+s)/2$ vì $b>0$.\nVậy tỉ số ở giữa bằng trung bình cộng hai tỉ số ban đầu khi và chỉ khi $b=d$."
        },
        {
          "id": "l7-ti-le-thuc-hsg-06",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Bản đồ được thu nhỏ khi in",
          "prompt": "Một bản đồ gốc có tỉ lệ $1:50\\,000$. Khi in, mọi độ dài trên giấy đều còn bằng $80$% độ dài trên bản gốc. Trên bản in, hai điểm cách nhau $4{,}8$ cm. Khoảng cách thực theo đoạn thẳng giữa hai điểm là bao nhiêu mét?",
          "svg": "",
          "correctAnswer": "3000",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Khôi phục độ dài trên bản gốc\n$80$%$=\\frac{4}{5}$. Độ dài trên bản gốc là $4{,}8:\\frac{4}{5}=6$ cm.\nBước 2: Dùng đúng tỉ lệ xích\nTỉ lệ $1:50\\,000$ thuộc bản gốc, nên khoảng cách thực là $6\\cdot 50\\,000=300\\,000$ cm $=3000$ m.\nBước 3: Đối chiếu với bản in\nĐộ dài $6$ cm in còn $6\\cdot 0{,}8=4{,}8$ cm, đúng dữ kiện. Kết quả là $3000$ m.\nBước 4: Kết luận\nKhoảng cách thực là $3000$ m."
        },
        {
          "id": "l7-ti-le-thuc-hsg-07",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chia theo tỉ lệ dưới giới hạn kho",
          "prompt": "Một mô hình dùng ba loại mảnh A, B, C theo tỉ lệ số lượng $2:3:5$. Kho có $31$ mảnh A, $44$ mảnh B, $70$ mảnh C. Không dùng thêm mảnh ngoài kho; số mảnh mỗi loại phải là số nguyên dương. Có thể dùng nhiều nhất tổng cộng bao nhiêu mảnh mà vẫn giữ đúng tỉ lệ?",
          "svg": "",
          "correctAnswer": "140",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Biểu diễn số mảnh theo một hệ số\n$a=2k,b=3k,c=5k$ với $k>0$. Vì $a,b$ nguyên nên $k=b-a$ cũng là số nguyên.\nBước 2: Tìm giới hạn do kho\n$2k\\le31$, $3k\\le44$, $5k\\le70$. Riêng điều kiện cuối cho $k\\le14$.\nBước 3: Kiểm đạt được giới hạn\n$k=14$ cho $a=28\\le31$, $b=42\\le44$, $c=70\\le70$. Tất cả đều nguyên dương, đúng tỉ lệ.\nBước 4: Tính và đối chiếu kết quả\nTổng bằng $10k$, lớn nhất khi $k=14$, tức $140$ mảnh. Không thể tăng $k$ vì kho loại C đã hết.\nBước 5: Kết luận\nTổng số mảnh lớn nhất là $140$."
        },
        {
          "id": "l7-ti-le-thuc-hsg-08",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đối chiếu hai tỉ lệ của ba phần",
          "prompt": "Ba bao hạt giống A, B, C ban đầu có số hạt tỉ lệ $2:3:4$. Lấy khỏi A đúng $20$ hạt, khỏi B đúng $10$ hạt và không lấy khỏi C; không có thay đổi nào khác. Số hạt còn lại trong cả ba bao đều dương và tỉ lệ $1:2:3$. Ban đầu ba bao có tổng bao nhiêu hạt?",
          "svg": "",
          "correctAnswer": "270",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Dùng tỉ lệ ban đầu\nGọi số hạt ban đầu là $2k,3k,4k$, với $k>0$. Số còn lại là $2k-20,3k-10,4k$.\nBước 2: Liên kết với tỉ lệ sau khi lấy\nVì số hạt C không đổi và ứng với $3$ phần sau, mỗi phần sau là $\\frac{4k}{3}$.\nBao A cho $2k-20=\\frac{4k}{3}$. Nhân với $3$: $6k-60=4k$, nên $k=30$.\nBước 3: Kiểm cả ba bao và tính nguyên\nBan đầu: $60,90,120$ hạt. Còn lại: $40,80,120$ hạt, đều nguyên dương và đúng tỉ lệ $1:2:3$.\nDữ kiện bao B cũng thỏa: $90-10=80$.\nBước 4: Tính và đối chiếu kết quả\nTổng số hạt ban đầu là $60+90+120=270$.\nBước 5: Kết luận\nBan đầu có tổng cộng $270$ hạt."
        },
        {
          "id": "l7-ti-le-thuc-hsg-09",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Bốn tỉ số vòng bằng nhau",
          "prompt": "Cho bốn số thực $a,b,c,d$ đều khác $0$, thỏa $\\frac{a}{b}=\\frac{b}{c}=\\frac{c}{d}=\\frac{d}{a}$. Chứng minh chỉ có hai khả năng: $a=b=c=d$ hoặc $a=c=-b=-d$. Kiểm rằng cả hai khả năng đều thỏa điều kiện.",
          "svg": "",
          "solution": "Bước 1: Đặt tỉ số chung và nhân bốn tỉ số\nĐặt $k=\\frac{a}{b}=\\frac{b}{c}=\\frac{c}{d}=\\frac{d}{a}$. Các mẫu khác $0$ nên phép chia hợp lệ, và $k\\ne0$.\n$k^4=\\frac{a}{b}\\cdot \\frac{b}{c}\\cdot \\frac{c}{d}\\cdot \\frac{d}{a}=1$.\nBước 2: Xét đủ dấu của hệ số\n$k^2\\ge0$ và $(k^2)^2=1$, nên $k^2=1$. Do đó $k=1$ hoặc $k=-1$.\nBước 3: Suy ra hai cấu hình\nNếu $k=1$, các đẳng thức cho $a=b=c=d$.\nNếu $k=-1$, có $a=-b$, $b=-c$, $c=-d$, $d=-a$, tức $a=c=-b=-d$.\nBước 4: Kiểm chiều ngược\nBốn số bằng nhau và khác $0$ cho cả bốn tỉ số bằng $1$.\nBốn số cùng độ lớn khác $0$ và dấu xen kẽ cho cả bốn tỉ số bằng $-1$. Vậy hai khả năng đều hợp lệ và không còn trường hợp khác."
        },
        {
          "id": "l7-ti-le-thuc-hsg-10",
          "lop": 7,
          "chuDe": "ti-le-thuc",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "So hai phương án chia nguyên",
          "prompt": "Có $N$ thẻ giống nhau, $N$ là số nguyên dương. Phương án I chia thành ba nhóm theo tỉ lệ $2:3:5$; phương án II theo tỉ lệ $4:6:9$. (a) Chứng minh so với I, phương án II cho hai nhóm đầu nhiều thẻ hơn và nhóm thứ ba ít hơn, khi cả hai cách chia đều thực hiện được. (b) Tìm $N$ nhỏ nhất để số thẻ của mọi nhóm trong cả hai phương án đều nguyên.",
          "svg": "",
          "solution": "Bước 1: Viết phần của tổng trong mỗi phương án\nPhương án I có tổng số phần $10$, nên ba nhóm nhận $\\frac{2N}{10},\\frac{3N}{10},\\frac{5N}{10}$.\nPhương án II có tổng số phần $19$, nên ba nhóm nhận $\\frac{4N}{19},\\frac{6N}{19},\\frac{9N}{19}$.\nBước 2: So sánh từng nhóm\n$\\frac{4}{19}-\\frac{2}{10}=\\frac{1}{95}>0$;\n$\\frac{6}{19}-\\frac{3}{10}=\\frac{3}{190}>0$;\n$\\frac{9}{19}-\\frac{5}{10}=-\\frac{1}{38}<0$.\nNhân với $N>0$ giữ chiều so sánh, chứng minh được phần (a).\nBước 3: Tìm điều kiện để chia nguyên\nNhóm thứ hai của I có $\\frac{3N}{10}$ thẻ nguyên; vì $3$ và $10$ nguyên tố cùng nhau nên $N$ chia hết cho $10$.\nNhóm đầu của II có $\\frac{4N}{19}$ thẻ nguyên; vì $4$ và $19$ nguyên tố cùng nhau nên $N$ chia hết cho $19$.\nBước 4: Chứng minh giá trị nhỏ nhất đạt được\nSố nguyên dương nhỏ nhất chia hết cho cả $10$ và $19$ là $190$.\nVới $N=190$, I cho $38,57,95$ thẻ; II cho $40,60,90$ thẻ. Tất cả nguyên và mỗi tổng đều bằng $190$.\nVậy $N$ nhỏ nhất là $190$."
        }
      ]
    },
    'bieu-thuc-dai-so': {
      "kha": [
        {
          "id": "l7-bieu-thuc-dai-so-kha-01",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận diện đa thức một biến",
          "prompt": "Biểu thức nào sau đây là đa thức một biến $x$?",
          "svg": "",
          "options": [
            "A. $3x^2-2x+1$",
            "B. $\\frac{1}{x}+2$",
            "C. $2x+y$",
            "D. $\\sqrt{x}+1$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nêu điều kiện đa thức một biến\nMỗi hạng tử là một số nhân với lũy thừa của $x$, số mũ nguyên không âm.\nBước 2: Kiểm tra A\n$3x^2-2x+1$ có các số mũ $2,1,0$, chỉ chứa biến $x$.\nVì vậy A là đa thức một biến $x$.\nBước 3: Xét biến ở mẫu và trong căn\n$1/x$ và $\\sqrt{x}$ không phải lũy thừa với số mũ nguyên không âm theo định nghĩa.\nDo đó B, D không đạt.\nBước 4: Xét số biến\n$2x+y$ có hai biến độc lập, nên C không phải đa thức một biến $x$.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-bieu-thuc-dai-so-kha-02",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bậc sau khi các hạng tử cao nhất triệt tiêu",
          "prompt": "Đa thức $P(x)=4x^3-2x^2+5-4x^3+x$ có bậc bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. 3",
            "B. 1",
            "C. 2",
            "D. 0"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Thu gọn trước khi tìm bậc\nHai hạng tử $4x^3$ và $-4x^3$ có tổng bằng $0$.\nBước 2: Viết đa thức còn lại\n$P(x)=-2x^2+x+5$.\nBước 3: Xác định số mũ cao nhất\nCác số mũ còn lại là $2,1,0$; lớn nhất là $2$.\nBước 4: Kiểm tra hệ số\nHệ số của $x^2$ là $-2\\ne0$, nên hạng tử bậc hai không mất đi.\nKhông dùng bậc $3$ của hai hạng tử đã triệt tiêu.\nBước 5: Kết luận\nBậc của $P$ là $2$. Chọn C."
        },
        {
          "id": "l7-bieu-thuc-dai-so-kha-03",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Thay số âm vào biểu thức",
          "prompt": "Tính giá trị của $A(x)=2x^2-3x+1$ tại $x=-2$.",
          "svg": "",
          "options": [
            "A. 3",
            "B. -1",
            "C. 11",
            "D. 15"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Thay giá trị vào mọi vị trí\n$A(-2)=2(-2)^2-3(-2)+1$.\nBước 2: Tính bình phương trước\n$(-2)^2=4$, nên hạng tử đầu bằng $8$.\nBước 3: Tính tích có dấu\n$-3(-2)=6$ vì tích hai số âm dương.\nBước 4: Cộng các hạng tử\n$A(-2)=8+6+1=15$.\nĐặt số âm trong ngoặc giúp phân biệt $(-2)^2$ với $-2^2$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-bieu-thuc-dai-so-kha-04",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ý nghĩa nghiệm của đa thức",
          "prompt": "Khẳng định nào diễn đạt đúng việc số $t$ là nghiệm của đa thức $P(x)$?",
          "svg": "",
          "options": [
            "A. $P(t)=t$",
            "B. $P(t)=0$",
            "C. $P(0)=t$",
            "D. $P(t)=1$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhắc định nghĩa\nNghiệm là giá trị của biến làm đa thức nhận giá trị $0$.\nBước 2: Đối chiếu\nThay $x=t$ phải được $P(t)=0$. Chọn B."
        },
        {
          "id": "l7-bieu-thuc-dai-so-kha-05",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Diễn tả đúng thứ tự thao tác",
          "prompt": "Một máy nhận số $x$, trừ $3$ rồi bình phương kết quả. Biểu thức nào mô tả đầu ra?",
          "svg": "",
          "options": [
            "A. $x^2-3$",
            "B. $x-3^2$",
            "C. $(x-3)^2$",
            "D. $(x+3)^2$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Theo dõi sau phép trừ\nGiá trị đang có là $x-3$.\nBước 2: Bình phương cả kết quả\nPhải bình phương toàn bộ $x-3$, được $(x-3)^2$. Chọn C."
        }
      ],
      "nangCao": [
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-01",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cộng hai đa thức",
          "prompt": "Cho $P(x)=2x^2-3x+4$ và $Q(x)=-x^2+5x-7$. Đa thức $P(x)+Q(x)$ bằng biểu thức nào?",
          "svg": "",
          "options": [
            "A. $x^2-8x+11$",
            "B. $x^2+2x-3$",
            "C. $3x^2+2x-3$",
            "D. $x^2+2x+11$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Viết tổng hai đa thức\n$P+Q=2x^2-3x+4-x^2+5x-7$.\nBước 2: Cộng các hạng tử bậc hai\n$2x^2-x^2=x^2$.\nBước 3: Cộng các phần còn lại\n$-3x+5x=2x$; $4-7=-3$.\nBước 4: Ghép và kiểm tra\n$P+Q=x^2+2x-3$.\nChỉ cộng hệ số của các hạng tử cùng số mũ, không cộng lẫn hệ số của $x$ và $x^2$.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-02",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Trừ một đa thức có hệ số âm",
          "prompt": "Cho $P(x)=3x^2-x+2$ và $Q(x)=x^2-4x-5$. Tìm $P(x)-Q(x)$.",
          "svg": "",
          "options": [
            "A. $2x^2+3x+7$",
            "B. $2x^2-5x-3$",
            "C. $4x^2-5x-3$",
            "D. $2x^2+3x-3$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đổi dấu đa thức bị trừ\n$-Q=-x^2+4x+5$; cả ba hạng tử đều đổi dấu.\nBước 2: Viết phép cộng tương ứng\n$P-Q=3x^2-x+2-x^2+4x+5$.\nBước 3: Thu gọn theo bậc\n$(3-1)x^2+(-1+4)x+(2+5)=2x^2+3x+7$.\nBước 4: Kiểm tra phép trừ\nCộng kết quả với $Q$ được $3x^2-x+2=P$, nên các dấu đã đúng.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-03",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhân hai đa thức một biến",
          "prompt": "Thực hiện phép nhân $(2x-3)(x+4)$.",
          "svg": "",
          "options": [
            "A. $2x^2+8x-12$",
            "B. $2x^2-5x-12$",
            "C. $2x^2+5x+12$",
            "D. $2x^2+5x-12$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Dùng tính phân phối\nNhân từng hạng tử của $2x-3$ với cả hai hạng tử của $x+4$.\nBước 2: Nhân phần 2x\n$2x(x+4)=2x^2+8x$.\nBước 3: Nhân phần âm 3\n$-3(x+4)=-3x-12$.\nBước 4: Cộng và thu gọn\n$2x^2+8x-3x-12=2x^2+5x-12$.\nCó đủ bốn tích trước khi gộp hai hạng tử chứa $x$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-04",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chia đa thức và kiểm tra thương",
          "prompt": "Trong phép chia đa thức $2x^2+5x-3$ cho $x+3$, thương và dư lần lượt là gì?",
          "svg": "",
          "options": [
            "A. $2x+1$ và $0$",
            "B. $2x-1$ và $0$",
            "C. $2x-1$ và $-6$",
            "D. $2x+5$ và $-3$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Chia hạng tử cao nhất\n$2x^2$ chia cho $x$ được $2x$, là hạng tử đầu của thương.\nBước 2: Nhân rồi trừ\n$2x(x+3)=2x^2+6x$.\nLấy đa thức ban đầu trừ tích này còn $-x-3$.\nBước 3: Chia tiếp\n$-x$ chia cho $x$ được $-1$.\nTrừ $-1(x+3)=-x-3$ thì dư $0$.\nBước 4: Kiểm tra đẳng thức đa thức\n$(x+3)(2x-1)=2x^2+5x-3$.\nĐây là phép chia đa thức để tìm thương, dư; không phải tính phân thức tại $x=-3$ nên không cần loại giá trị này.\nBước 5: Kết luận\nThương $2x-1$, dư $0$. Chọn B."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-05",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Lập biểu thức chu vi theo một biến",
          "prompt": "Một hình chữ nhật có chiều rộng $x$ cm và chiều dài hơn chiều rộng $3$ cm, với $x>0$. Biểu thức nào biểu thị chu vi của hình?",
          "svg": "",
          "options": [
            "A. $2x+3$ cm",
            "B. $x(x+3)$ cm",
            "C. $4x+6$ cm",
            "D. $4x+3$ cm"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Viết chiều dài\nChiều rộng $x$ cm, chiều dài hơn $3$ cm nên bằng $x+3$ cm.\nBước 2: Kiểm tra kích thước\n$x>0$ nên cả $x$ và $x+3$ đều dương.\nBước 3: Lập chu vi\nChu vi là hai lần tổng dài và rộng: $P=2[x+(x+3)]$.\nBước 4: Thu gọn\n$P=2(2x+3)=4x+6$ cm.\nTích $x(x+3)$ biểu thị diện tích, không phải chu vi.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-06",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Kiểm tra một nghiệm của đa thức",
          "prompt": "Trong bốn số sau, số nào là nghiệm của $P(x)=x^3-2x-4$?",
          "svg": "",
          "options": [
            "A. -2",
            "B. 1",
            "C. -1",
            "D. 2"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Dùng định nghĩa nghiệm\nSố $u$ là nghiệm khi $P(u)=0$.\nTa kiểm lần lượt bốn số được cho.\nBước 2: Kiểm hai số đầu\n$P(-2)=-8+4-4=-8\\ne0$.\n$P(1)=1-2-4=-5\\ne0$.\nBước 3: Kiểm hai số sau\n$P(-1)=-1+2-4=-3\\ne0$.\n$P(2)=8-4-4=0$.\nBước 4: Đối chiếu yêu cầu\nTrong bốn lựa chọn, chỉ $2$ làm đa thức bằng $0$.\nĐề chỉ yêu cầu chọn trong bốn số này.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-07",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tìm đủ nghiệm từ một tích",
          "prompt": "Tất cả các nghiệm của đa thức $P(x)=x(2x-3)$ là những số nào?",
          "svg": "",
          "options": [
            "A. $0$ và $\\frac32$",
            "B. Chỉ $\\frac32$",
            "C. $0$ và $-\\frac32$",
            "D. $0$ và $3$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Viết điều kiện nghiệm\nCần $x(2x-3)=0$.\nTích bằng $0$ khi ít nhất một thừa số bằng $0$.\nBước 2: Xét thừa số đầu\n$x=0$ cho tích bằng $0$, nên nhận nghiệm này.\nBước 3: Xét thừa số sau\n$2x-3=0$ cho $2x=3$, nên $x=3/2$.\nBước 4: Kiểm tra đủ nghiệm\nCả hai giá trị đều làm ít nhất một thừa số bằng $0$.\nNếu hai thừa số đều khác $0$, tích không bằng $0$, nên không có nghiệm khác.\nBước 5: Kết luận\nChọn A: $0$ và $3/2$. Không chia ngay cho $x$ vì sẽ mất nghiệm $0$."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-08",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Kiểm thương bằng phép nhân ngược",
          "prompt": "Bạn An ghi $(2x^2+3x-2):(x+2)=2x+1$. Thương đúng của phép chia đa thức này là gì?",
          "svg": "",
          "options": [
            "A. $2x-1$",
            "B. $2x+1$",
            "C. $2x-2$",
            "D. $x-1$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Kiểm thương An ghi\n$(x+2)(2x+1)=2x^2+5x+2$, khác đa thức bị chia.\nBước 2: Nhân thử thương đã sửa\n$(x+2)(2x-1)=2x^2-x+4x-2=2x^2+3x-2$.\nPhép chia đa thức là chia hết, thương $2x-1$. Chọn A. Đây là phép chia đa thức, không phải khẳng định phân thức tại $x=-2$."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-09",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Khôi phục hệ số của hiệu",
          "prompt": "Cho $P(x)=3x^3+ax^2-2x+1$, $Q(x)=x^3-4x^2+bx-5$. Biết $P(x)-Q(x)=2x^3+7x^2-6x+6$ với mọi $x$. Tính $a+b$.",
          "svg": "",
          "options": [
            "A. $-1$",
            "B. $7$",
            "C. $1$",
            "D. $11$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Trừ từng nhóm cùng bậc\n$P-Q=2x^3+(a+4)x^2+(-2-b)x+6$.\nBước 2: Ghép hệ số\n$a+4=7$ nên $a=3$. $-2-b=-6$ nên $b=4$.\nBước 3: Cộng và kiểm\n$a+b=7$. Thay lại được hệ số $x^2$ là $7$ và hệ số $x$ là $-6$. Chọn B."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-10",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai máy cho cùng đa thức",
          "prompt": "Máy I nhân đầu vào $x$ với $2$, cộng $3$, rồi nhân với chính đầu vào $x$. Máy II làm theo quy trình nào để luôn cho cùng kết quả?",
          "svg": "",
          "options": [
            "A. Bình phương x, nhân 2, cộng 3.",
            "B. Cộng 3 vào x, nhân 2, rồi nhân x.",
            "C. Nhân x với 2, bình phương kết quả, cộng 3x.",
            "D. Bình phương x, nhân 2, cộng 3x."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Viết đầu ra máy I\nĐầu ra là $(2x+3)x=2x^2+3x$.\nBước 2: Đối chiếu máy II\nBình phương đầu vào rồi nhân $2$ được $2x^2$. Cộng $3x$ được đúng $2x^2+3x$.\nBước 3: Kết luận\nChọn D. Ba quy trình còn lại lần lượt cho $2x^2+3$, $2x^2+6x$, $4x^2+3x$, không đồng nhất với đầu ra máy I."
        },
        {
          "id": "l7-bieu-thuc-dai-so-nang-cao-11",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Theo dõi qua hai đa thức trung gian",
          "prompt": "Các đa thức thỏa $P(x)=(x-2)Q(x)+5$, $Q(x)=(x+1)R(x)-9$ và $R(3)=1$. Số nào sau đây chắc chắn là nghiệm của $P$?",
          "svg": "",
          "options": [
            "A. $0$",
            "B. $2$",
            "C. $3$",
            "D. $-1$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tính qua đa thức R\n$Q(3)=(3+1)R(3)-9=4-9=-5$.\nBước 2: Chuyển sang P\n$P(3)=(3-2)Q(3)+5=-5+5=0$. Vậy $3$ là nghiệm.\nBước 3: Kiểm riêng các phương án còn lại\nTại $x=2$, ta luôn có $P(2)=5$, nên $2$ không là nghiệm.\nTại $x=-1$, thừa số $x+1$ bằng $0$, nên $Q(-1)=-9$ bất kể giá trị của $R(-1)$. Vì vậy $P(-1)=(-1-2)(-9)+5=32$, nên $-1$ cũng không là nghiệm.\nTại $x=0$, ta có $Q(0)=R(0)-9$ và $P(0)=-2(R(0)-9)+5=23-2R(0)$. Giá trị này phụ thuộc $R(0)$ chưa biết. Chẳng hạn đa thức $R(x)=1$ thỏa $R(3)=1$ nhưng cho $P(0)=21$, nên không thể khẳng định $0$ là nghiệm.\nChỉ $x=3$ chắc chắn là nghiệm. Chọn C."
        }
      ],
      "hsg": [
        {
          "id": "l7-bieu-thuc-dai-so-hsg-01",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khử hệ số nhờ giá trị tại hai số đối",
          "prompt": "Cho đa thức $P(x)=ax^2+bx+3$. Biết $P(1)=8$ và $P(-1)=4$. Tính $P(2)$.",
          "svg": "",
          "correctAnswer": "19",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Dùng giá trị tại 1\n$P(1)=a+b+3=8$, nên $a+b=5$.\nBước 2: Dùng giá trị tại âm 1\n$P(-1)=a-b+3=4$, nên $a-b=1$.\nBước 3: Tìm hai hệ số\nCộng hai đẳng thức được $2a=6$, nên $a=3$.\nTừ $a+b=5$, được $b=2$.\nBước 4: Tính giá trị cần hỏi\n$P(2)=3\\cdot2^2+2\\cdot2+3=12+4+3=19$.\nKiểm tra $P(1)=3+2+3=8$, $P(-1)=3-2+3=4$.\nBước 5: Kết luận\nĐáp số là $19$."
        },
        {
          "id": "l7-bieu-thuc-dai-so-hsg-02",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Biện luận bậc khi hệ số phụ thuộc tham số",
          "prompt": "Cho $P_m(x)=(m-2)x^3+(m+1)x^2+5x-7$. Tìm $m$ để $P_m$ có bậc đúng bằng $2$, rồi tính hệ số của $x^2$ ở đa thức đó. Chỉ nhập hệ số được hỏi.",
          "svg": "",
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nêu hai điều kiện về bậc\nMuốn bậc đúng bằng $2$, hệ số của $x^3$ phải bằng $0$, còn hệ số của $x^2$ phải khác $0$.\nBước 2: Loại hạng tử bậc ba\n$m-2=0$ cho $m=2$.\nBước 3: Kiểm tra bậc hai còn lại\n$m+1=3\\ne0$, nên đa thức không giảm xuống bậc thấp hơn.\nBước 4: Viết đa thức để đối chiếu\n$P_2(x)=3x^2+5x-7$ có bậc $2$ và hệ số của $x^2$ là $3$.\nBước 5: Kết luận\nSố cần nhập là $3$, không phải giá trị tham số $m=2$."
        },
        {
          "id": "l7-bieu-thuc-dai-so-hsg-03",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm dữ kiện ngược từ số trang in",
          "prompt": "Một nhóm in $12$ bản tài liệu giống nhau. Mỗi bản có $x$ trang nội dung và $2$ trang bìa. Nhóm in thêm $6$ trang hướng dẫn dùng chung và dùng tổng cộng $222$ tờ giấy. Mỗi trang được in trên một mặt của một tờ mới, không in hỏng hay in thêm. Mỗi bản có bao nhiêu trang nội dung?",
          "svg": "",
          "correctAnswer": "16",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt số trang nội dung\nGọi $x$ là số trang nội dung mỗi bản, $x$ nguyên dương.\nMỗi bản có tổng $x+2$ trang kể cả bìa.\nBước 2: Lập tổng số tờ\nIn một mặt, mỗi trang dùng một tờ mới, nên $12$ bản dùng $12(x+2)$ tờ.\nThêm $6$ trang chung được $12(x+2)+6=222$.\nBước 3: Tìm số trang một bản\n$12(x+2)=216$ nên $x+2=18$.\nDo đó $x=16$.\nBước 4: Thử và kiểm tra điều kiện\n$12(16+2)+6=222$, đúng tổng giấy.\n$16$ là số nguyên dương và đã loại hai trang bìa khỏi phần nội dung.\nBước 5: Kết luận\nMỗi bản có $16$ trang nội dung."
        },
        {
          "id": "l7-bieu-thuc-dai-so-hsg-04",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh giá trị không phụ thuộc biến",
          "prompt": "Chứng minh rằng với mọi số thực $x$, biểu thức $(x+1)(x+2)-x(x+3)$ luôn bằng $2$.",
          "svg": "",
          "solution": "Bước 1: Xác định cách làm\nMuốn chứng minh biểu thức không phụ thuộc $x$, ta khai triển hai tích rồi trừ.\nCác phép toán đều xác định với mọi số thực $x$.\nBước 2: Khai triển tích đầu\n$(x+1)(x+2)=x^2+2x+x+2=x^2+3x+2$.\nBước 3: Khai triển tích sau\n$x(x+3)=x^2+3x$.\nBước 4: Trừ đúng dấu\n$(x^2+3x+2)-(x^2+3x)=x^2+3x+2-x^2-3x=2$.\nHai hạng tử chứa biến triệt tiêu hoàn toàn.\nBước 5: Kết luận\n$(x+1)(x+2)-x(x+3)=2$ với mọi số thực $x$.\nĐây là phép biến đổi tổng quát, không chỉ kiểm tại vài giá trị của $x$."
        },
        {
          "id": "l7-bieu-thuc-dai-so-hsg-05",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh một đa thức không có nghiệm",
          "prompt": "Xét đa thức $P(x)=(x-1)^2+(x+2)^2$. Không cần khai triển, hãy chứng minh $P(x)>0$ với mọi số thực $x$, từ đó kết luận $P$ không có nghiệm thực.",
          "svg": "",
          "solution": "Bước 1: Xét dấu từng bình phương\n$(x-1)^2\\ge0$ và $(x+2)^2\\ge0$ với mọi số thực $x$.\nVậy $P(x)\\ge0$.\nBước 2: Xét khi tổng bằng 0\nTổng hai số không âm chỉ bằng $0$ nếu cả hai cùng bằng $0$.\nNếu một số dương thì tổng đã dương.\nBước 3: Tìm điều kiện đồng thời\n$(x-1)^2=0$ đòi $x=1$.\n$(x+2)^2=0$ đòi $x=-2$.\nBước 4: Loại khả năng bằng 0\nMột số $x$ không thể vừa bằng $1$ vừa bằng $-2$.\nVì vậy $P(x)$ không bằng $0$; kết hợp không âm, có $P(x)>0$.\nBước 5: Kết luận\n$P(x)>0$ với mọi số thực $x$.\nNghiệm phải làm đa thức bằng $0$, nên $P$ không có nghiệm thực."
        },
        {
          "id": "l7-bieu-thuc-dai-so-hsg-06",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Số dư và hệ số tự do",
          "prompt": "Cho $P(x)=(x+1)(2x^2-x+3)+r$, trong đó $r$ là hằng số. Biết $P(-1)=7$. Tính hệ số tự do của $P$.",
          "svg": "",
          "correctAnswer": "10",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tìm r không khai triển\nThay $x=-1$, tích có thừa số $0$ nên $P(-1)=r=7$.\nBước 2: Tìm hệ số tự do\nHệ số tự do là $P(0)=(0+1)\\cdot 3+7=10$.\nBước 3: Kết luận\nHệ số tự do của $P$ là $10$."
        },
        {
          "id": "l7-bieu-thuc-dai-so-hsg-07",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khôi phục đa thức từ độ tăng",
          "prompt": "Đa thức $P(x)=ax^2+bx+c$ thỏa $P(x+1)-P(x)=6x+5$ với mọi $x$, và $P(0)=-2$. Tính $P(2)$.",
          "svg": "",
          "correctAnswer": "14",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Khai triển bằng phép nhân\n$(x+1)(x+1)=x^2+2x+1$. Vì thế $P(x+1)-P(x)=2ax+a+b$.\nBước 2: Khớp các hệ số\n$2a=6$ nên $a=3$. $a+b=5$ nên $b=2$. $c=P(0)=-2$.\nBước 3: Tính và kiểm\n$P(2)=3\\cdot 4+2\\cdot 2-2=14$. Có thể kiểm độc lập: từ $P(0)=-2$ tăng thêm $5$ rồi thêm $11$, cũng được $14$.\nBước 4: Kết luận\n$P(2)=14$."
        },
        {
          "id": "l7-bieu-thuc-dai-so-hsg-08",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai nghiệm nguyên phân biệt",
          "prompt": "Với số nguyên $m$ thỏa $-3\\le m\\le5$, xét $P_m(x)=(x-1)((m-1)x-3)$. Có bao nhiêu giá trị của $m$ để đa thức có đúng hai nghiệm nguyên phân biệt? Dùng tính chất: tích bằng $0$ khi và chỉ khi ít nhất một thừa số bằng $0$.",
          "svg": "",
          "correctAnswer": "3",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tách trường hợp hệ số bằng 0\nVới $m=1$, đa thức là $-3(x-1)$, chỉ có nghiệm $1$, nên loại.\nBước 2: Tìm nghiệm còn lại\nVới $m\\ne1$, nghiệm là $1$ và $3/(m-1)$. Nghiệm thứ hai nguyên khi $m-1$ là một trong các ước nguyên $-3,-1,1,3$ của $3$.\nBước 3: Kiểm phân biệt và miền m\nCác giá trị tương ứng là $m=-2,0,2,4$, đều nằm trong miền đã cho. Với $m=4$, nghiệm thứ hai cũng bằng $1$, nên loại.\nBước 4: Kết luận\nCó $3$ giá trị phù hợp: $m=-2,0,2$."
        },
        {
          "id": "l7-bieu-thuc-dai-so-hsg-09",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Nghiệm chung và nghiệm của tổng",
          "prompt": "Cho hai đa thức $P,Q$. Chứng minh rằng nếu $t$ là nghiệm chung của $P,Q$ thì $t$ là nghiệm của $P+Q$. Chiều ngược lại có luôn đúng không? Giải thích bằng một ví dụ nếu không.",
          "svg": "",
          "solution": "Bước 1: Dùng giả thiết nghiệm chung\n$P(t)=0$ và $Q(t)=0$ theo định nghĩa nghiệm.\nBước 2: Tính giá trị tổng\n$(P+Q)(t)=P(t)+Q(t)=0+0=0$. Vậy $t$ là nghiệm của tổng.\nBước 3: Kiểm chiều ngược\nChọn $P(x)=x$, $Q(x)=x-2$ và $t=1$. Khi đó $(P+Q)(1)=0$, nhưng $P(1)=1$ và $Q(1)=-1$, đều khác $0$.\nBước 4: Kết luận\nChiều thuận đúng. Chiều ngược không luôn đúng vì hai giá trị khác $0$ có thể cộng thành $0$."
        },
        {
          "id": "l7-bieu-thuc-dai-so-hsg-10",
          "lop": 7,
          "chuDe": "bieu-thuc-dai-so",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Nghiệm đi thành cặp số đối",
          "prompt": "Cho $P(x)=x^7-2x^5+3x$. Chứng minh $0$ là nghiệm; nếu số $t$ là nghiệm thì $-t$ cũng là nghiệm. Với $t=0$, có được tính thành hai nghiệm phân biệt không?",
          "svg": "",
          "solution": "Bước 1: Kiểm nghiệm 0\n$P(0)=0$, nên $0$ là nghiệm.\nBước 2: Đổi dấu đầu vào\nLũy thừa bậc lẻ đổi dấu khi đổi dấu cơ số. Do đó $P(-t)=-t^7+2t^5-3t=-P(t)$.\nBước 3: Dùng điều kiện nghiệm\nNếu $P(t)=0$ thì $P(-t)=-0=0$. Vậy $-t$ cũng là nghiệm.\nBước 4: Phân biệt hai giá trị\nKhi $t=0$, hai số $t,-t$ là cùng một số, chỉ tính một nghiệm. Khi $t\\ne0$, chúng khác nhau. Kết luận này không khẳng định có nghiệm khác $0$."
        }
      ]
    },
    'goc-song-song': {
      "kha": [
        {
          "id": "l7-goc-song-song-kha-01",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận diện hai góc đối đỉnh",
          "prompt": "Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$; $O$ nằm giữa $A,B$ và giữa $C,D$. Góc nào đối đỉnh với $\\widehat{AOC}$?",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,0],"A":[4,0],"B":[-4,4.898587196589413e-16],"C":[2.8284271247461903,2.82842712474619],"D":[-2.8284271247461907,-2.82842712474619]},"edges":[["A","B"],["C","D"]],"offsets":{"O":[0,20],"A":[15,0],"B":[-15,0],"C":[10,-15],"D":[-10,15]},"title":"Hai đường AB và CD cắt nhau tại O","angles":[{"at":"O","from":"A","to":"C"},{"at":"O","from":"B","to":"D"}]}),
          "options": [
            "A. $\\widehat{AOD}$",
            "B. $\\widehat{BOD}$",
            "C. $\\widehat{COB}$",
            "D. $\\widehat{AOB}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định hai cạnh của góc\nGóc $AOC$ có hai cạnh là tia $OA$ và tia $OC$.\nBước 2: Tìm tia đối của OA\n$O$ nằm giữa $A,B$, nên $OB$ là tia đối của $OA$.\nBước 3: Tìm tia đối của OC\n$O$ nằm giữa $C,D$, nên $OD$ là tia đối của $OC$.\nBước 4: Dùng định nghĩa đối đỉnh\nHai cạnh của góc $BOD$ lần lượt đối với hai cạnh của góc $AOC$.\nVì vậy $BOD$ là góc đối đỉnh cần tìm, không phải góc chỉ kề một cạnh.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-goc-song-song-kha-02",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính góc do tia phân giác tạo ra",
          "prompt": "Góc $\\widehat{xOy}=80^\\circ$ và $Ot$ là tia phân giác của góc này. Tính $\\widehat{xOt}$.",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,0],"X":[4,0],"T":[3.064177772475912,2.571150438746157],"Y":[0.6945927106677217,3.939231012048832]},"edges":[["O","X"],["O","T"],["O","Y"]],"labels":{"X":"x","T":"t","Y":"y"},"offsets":{"O":[-15,10],"X":[15,0],"T":[15,-10],"Y":[0,-20]},"angles":[{"at":"O","from":"X","to":"Y","value":80,"radius":55,"labelRadius":75}],"title":"Ot là phân giác góc xOy bằng 80 độ"}),
          "options": [
            "A. $40^\\circ$",
            "B. $80^\\circ$",
            "C. $160^\\circ$",
            "D. $50^\\circ$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhắc tính chất phân giác\n$Ot$ nằm trong góc $xOy$ và chia nó thành hai góc bằng nhau.\nBước 2: Viết hai góc bằng nhau\n$\\widehat{xOt}=\\widehat{tOy}$.\nBước 3: Dùng tổng góc\nHai góc này có tổng $80^\\circ$, nên mỗi góc bằng $80^\\circ/2=40^\\circ$.\nBước 4: Kiểm tra\n$40^\\circ+40^\\circ=80^\\circ$, khớp góc ban đầu.\nBước 5: Kết luận\n$\\widehat{xOt}=40^\\circ$. Chọn A."
        },
        {
          "id": "l7-goc-song-song-kha-03",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc đồng vị khi biết hai đường song song",
          "prompt": "Trong hình, $AB\\parallel CD$, các điểm $E,O,P,F$ thẳng hàng theo thứ tự đó, $O\\in AB$, $P\\in CD$. Biết $\\widehat{BOE}=60^\\circ$. Tính $\\widehat{DPO}$.",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,1.5],"P":[-1.7320508075688772,-1.5],"A":[-4,1.5],"B":[4,1.5],"C":[-5.732050807568877,-1.5],"D":[2.267949192431123,-1.5],"E":[1.7320508075688772,4.5],"F":[-3.4641016151377544,-4.5]},"edges":[["A","B"],["C","D"],["E","F"]],"offsets":{"O":[-20,0],"P":[-20,0],"A":[-14,0],"B":[14,0],"C":[-14,0],"D":[14,0],"E":[0,-16],"F":[0,16]},"angles":[{"at":"O","from":"B","to":"E","value":60}],"title":"AB song song CD; góc BOE bằng 60 độ"}),
          "options": [
            "A. $30^\\circ$",
            "B. $120^\\circ$",
            "C. $90^\\circ$",
            "D. $60^\\circ$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận diện đường cắt\nĐường qua $E,O,P,F$ cắt hai đường song song $AB,CD$ tại $O,P$.\nBước 2: Xét vị trí hai góc\nGóc $BOE$ và góc $DPO$ nằm ở vị trí đồng vị như trên hình.\nBước 3: Dùng tính chất song song\nHai đường song song tạo các góc đồng vị bằng nhau với cùng đường cắt.\nVậy $\\widehat{DPO}=\\widehat{BOE}$.\nBước 4: Thay số\n$\\widehat{DPO}=60^\\circ$.\nKhông lấy góc bù $120^\\circ$ vì đó là góc kề với góc đang hỏi.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-goc-song-song-kha-04",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc đồng vị trên hình xoay",
          "prompt": "Các điểm $A,M,B$ thẳng hàng; $C,N,D$ thẳng hàng; $E,M,N,F$ thẳng hàng theo thứ tự đó. Trong hình, cặp góc nào là hai góc đồng vị khi đường $EF$ cắt hai đường $AB,CD$?",
          "svg": svgCap2.svgGrade7AngleExtension("corresponding"),
          "options": [
            "A. $\\widehat{AMN}$ và $\\widehat{CNF}$",
            "B. $\\widehat{AMN}$ và $\\widehat{MND}$",
            "C. $\\widehat{AMN}$ và $\\widehat{CNM}$",
            "D. $\\widehat{AMN}$ và $\\widehat{BME}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định vị trí hai góc\nGóc $\\widehat{AMN}$ dùng tia $MA$ và tia $MN$ hướng về phía $F$.\nỞ giao điểm $N$, góc $\\widehat{CNF}$ dùng tia $NC$ cùng phía với $MA$ và tia $NF$ cùng hướng với $MN$.\nBước 2: Gọi tên cặp góc\nHai góc nằm ở vị trí tương ứng tại hai giao điểm, nên là hai góc đồng vị.\nĐó là $\\widehat{AMN}$ và $\\widehat{CNF}$. Xoay cả hình không đổi vị trí tương ứng này. Chọn A."
        },
        {
          "id": "l7-goc-song-song-kha-05",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Qua đường song song trung gian",
          "prompt": "Ba đường thẳng $a,b,c$ đôi một phân biệt, $a\\parallel b$ và $b\\parallel c$. Đường cắt đi qua $E,O,P,Q$ theo thứ tự đó. Các tia $OA,PB,QC$ cùng hướng trên ba đường như hình. Biết $\\widehat{AOE}=68^\\circ$. Tính $\\widehat{CQO}$.",
          "svg": svgCap2.svgGrade7AngleExtension("three-parallel"),
          "options": [
            "A. $112^\\circ$",
            "B. $34^\\circ$",
            "C. $68^\\circ$",
            "D. $136^\\circ$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nối quan hệ song song\nHai đường thẳng phân biệt cùng song song với một đường thứ ba thì song song với nhau.\nTừ $a\\parallel b$ và $c\\parallel b$, có $a\\parallel c$.\nBước 2: Dùng góc đồng vị\n$\\widehat{AOE}$ và $\\widehat{CQO}$ là hai góc đồng vị của đường cắt với $a,c$.\nVậy $\\widehat{CQO}=68^\\circ$. Chọn C."
        }
      ],
      "nangCao": [
        {
          "id": "l7-goc-song-song-nang-cao-01",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tách phần góc nằm giữa hai tia",
          "prompt": "Trong góc $\\widehat{AOB}=130^\\circ$, các tia $OC,OD$ nằm bên trong theo thứ tự $OA,OC,OD,OB$. Biết $\\widehat{AOC}=35^\\circ$ và $\\widehat{DOB}=25^\\circ$. Tính $\\widehat{COD}$.",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,0],"A":[4,0],"C":[3.276608177155967,2.294305745404184],"D":[-1.0352761804100834,3.8637033051562732],"B":[-2.5711504387461575,3.064177772475912]},"edges":[["O","A"],["O","C"],["O","D"],["O","B"]],"offsets":{"O":[0,20],"A":[14,0],"C":[16,-3],"D":[0,-18],"B":[-14,-8]},"angles":[{"at":"O","from":"A","to":"C","value":35,"radius":26,"labelRadius":47},{"at":"O","from":"D","to":"B","value":25,"radius":26,"labelRadius":47},{"at":"O","from":"A","to":"B","value":130,"radius":85,"labelRadius":104}],"title":"Các tia OA OC OD OB theo thứ tự, các góc 35, 130 và 25 độ"}),
          "options": [
            "A. $95^\\circ$",
            "B. $105^\\circ$",
            "C. $70^\\circ$",
            "D. $60^\\circ$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đọc đúng thứ tự tia\nCác tia theo thứ tự $OA,OC,OD,OB$ trong góc $AOB$.\nBước 2: Chia góc lớn\n$\\widehat{AOB}=\\widehat{AOC}+\\widehat{COD}+\\widehat{DOB}$.\nBa góc kề nhau phủ hết góc lớn, không chồng phần trong.\nBước 3: Tính góc giữa\n$\\widehat{COD}=130^\\circ-35^\\circ-25^\\circ=70^\\circ$.\nBước 4: Kiểm tra\n$35+70+25=130$, đúng tổng ban đầu.\nCần trừ cả hai góc ở hai đầu, không chỉ một góc.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-goc-song-song-nang-cao-02",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Dùng góc đối đỉnh để tìm số đo",
          "prompt": "Hai đường thẳng $AB,CD$ cắt nhau tại $O$ như hình. Hai góc đối đỉnh $AOC,BOD$ lần lượt có số đo $(3x+10)^\\circ$ và $(5x-30)^\\circ$. Tính số đo góc $AOC$.",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,0],"A":[4,0],"B":[-4,4.898587196589413e-16],"C":[1.3680805733026753,3.7587704831436333],"D":[-1.3680805733026775,-3.758770483143633]},"edges":[["A","B"],["C","D"]],"offsets":{"O":[0,20],"A":[15,0],"B":[-15,0],"C":[10,-15],"D":[-10,15]},"angles":[{"at":"O","from":"A","to":"C","value":"(3x + 10)°","radius":36,"labelRadius":90},{"at":"O","from":"B","to":"D","value":"(5x − 30)°","radius":36,"labelRadius":90}],"title":"Hai góc đối đỉnh có số đo 3x cộng 10 và 5x trừ 30 độ"}),
          "options": [
            "A. $20^\\circ$",
            "B. $70^\\circ$",
            "C. $110^\\circ$",
            "D. $50^\\circ$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Dùng tính chất đối đỉnh\n$\\widehat{AOC}=\\widehat{BOD}$ vì hai góc đối đỉnh.\nBước 2: Lập đẳng thức số đo\n$3x+10=5x-30$.\nBước 3: Tìm x\nChuyển vế được $40=2x$, nên $x=20$.\nBước 4: Tính góc cần hỏi\n$\\widehat{AOC}=3\\cdot20+10=70^\\circ$.\nGóc kia cũng bằng $5\\cdot20-30=70^\\circ$; số đo dương và nhỏ hơn $180^\\circ$.\nBước 5: Kết luận\nChọn B. Đề hỏi số đo góc, không phải $x=20$."
        },
        {
          "id": "l7-goc-song-song-nang-cao-03",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Chọn đúng thang chia trên thước đo góc",
          "prompt": "Thước đo góc được đặt tâm tại $O$, tia $OA$ trùng cạnh gốc về bên phải. Tia $OB$ đi qua vạch có hai số $40$ và $140$ trên hai thang chia. Dựa vào thang bắt đầu từ $0$ ở tia $OA$, góc $AOB$ bằng bao nhiêu?",
          "svg": svgCap2.svgProtractor(140),
          "options": [
            "A. $40^\\circ$",
            "B. $50^\\circ$",
            "C. $130^\\circ$",
            "D. $140^\\circ$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định cạnh gốc\nTia $OA$ nằm về bên phải và trùng cạnh gốc của thước.\nBước 2: Chọn thang đo\nPhải dùng thang có số $0$ tại phía $OA$, rồi đọc theo chiều mở góc đến $OB$.\nBước 3: Đọc vạch của OB\nTrên thang vừa chọn, vạch tương ứng ghi $140$.\nSố $40$ ở cùng vạch thuộc thang có gốc phía ngược lại.\nBước 4: Kiểm tra loại góc\nTừ tia hướng phải đến tia chếch lên trái trong hình tạo góc tù.\n$140^\\circ$ là góc tù, còn $40^\\circ$ là góc nhọn nên không phù hợp.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-goc-song-song-nang-cao-04",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Tính duy nhất của đường song song qua một điểm",
          "prompt": "Điểm $M$ không thuộc đường thẳng $d$. Hai bạn vẽ các đường thẳng $a,b$ đều đi qua $M$ và đều song song với $d$. Nếu cả hai bạn vẽ đúng, kết luận nào bắt buộc đúng?",
          "svg": "",
          "options": [
            "A. $a$ và $b$ trùng nhau.",
            "B. $a$ và $b$ là hai đường song song phân biệt.",
            "C. $a$ và $b$ vuông góc.",
            "D. $a$ và $b$ cắt nhau tạo góc nhọn."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định điều kiện tiên đề\n$M$ nằm ngoài $d$.\nCả $a,b$ đều đi qua $M$ và song song với $d$.\nBước 2: Nêu tiên đề Euclid\nQua một điểm nằm ngoài một đường thẳng, chỉ có một đường thẳng song song với đường đó.\nBước 3: Áp dụng tính duy nhất\nNếu cả hai bạn vẽ đúng thì cả $a$ và $b$ đều phải là đường duy nhất này.\nBước 4: Kết luận quan hệ\nDo đó $a,b$ trùng nhau.\nChúng không thể là hai đường song song phân biệt vì cùng đi qua $M$.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-goc-song-song-nang-cao-05",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Tách giả thiết và kết luận của định lí",
          "prompt": "Định lí: “Nếu hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau.” Cách ghi nào đúng?",
          "svg": "",
          "options": [
            "A. Giả thiết: $a\\parallel b$; kết luận: $a\\perp c$ và $b\\perp c$.",
            "B. Giả thiết: $a\\perp b$; kết luận: $a\\parallel c$.",
            "C. Giả thiết: $a\\ne b$, $a\\perp c$, $b\\perp c$; kết luận: $a\\parallel b$.",
            "D. Giả thiết: $a\\ne b$, $a\\perp c$, $b\\perp d$; kết luận: $a\\parallel b$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tách phần đã cho\nPhần sau chữ “nếu” là giả thiết: hai đường phân biệt cùng vuông góc với một đường thứ ba.\nBước 2: Ghi bằng kí hiệu\nGiả thiết phải có $a\\ne b$, $a\\perp c$, $b\\perp c$.\nBước 3: Tách phần phải kết luận\nPhần sau chữ “thì” là $a\\parallel b$.\nBước 4: Đối chiếu từng điều kiện\nC giữ đủ tính phân biệt và cùng một đường $c$.\nA đảo vai trò giả thiết–kết luận; B thiếu dữ kiện; D thay đường chung bằng hai đường khác nhau.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-goc-song-song-nang-cao-06",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Chọn lập luận đủ để chứng minh song song",
          "prompt": "Hai đường thẳng $AB$ và $CD$ bị đường thẳng $OP$ cắt tại $O,P$ như hình. Biết $\\widehat{AOP}=\\widehat{OPD}=60^\\circ$. Lập luận nào chứng minh được $AB\\parallel CD$?",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,1.5],"P":[-1.7320508075688772,-1.5],"A":[-4,1.5],"B":[4,1.5],"C":[-5.732050807568877,-1.5],"D":[2.267949192431123,-1.5],"E":[1.7320508075688772,4.5],"F":[-3.4641016151377544,-4.5]},"edges":[["A","B"],["C","D"],["E","F"]],"offsets":{"O":[-20,0],"P":[-20,0],"A":[-14,0],"B":[14,0],"C":[-14,0],"D":[14,0],"E":[0,-16],"F":[0,16]},"angles":[{"at":"O","from":"A","to":"P","value":60},{"at":"P","from":"O","to":"D","value":60}],"title":"Hai góc so le trong AOP và OPD cùng bằng 60 độ"}),
          "options": [
            "A. Vì hai góc trên là hai góc đối đỉnh.",
            "B. Vì hai góc trên là hai góc đồng vị.",
            "C. Vì bất kì hai góc bằng nhau đều cho hai đường song song.",
            "D. Vì hai góc trên ở vị trí so le trong và bằng nhau."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định hai đỉnh góc\nHai góc ở $O$ và $P$, là hai giao điểm khác nhau của cùng đường cắt.\nVì khác đỉnh, chúng không phải góc đối đỉnh.\nBước 2: Xác định vị trí\n$AOP$ và $OPD$ đều ở phía trong hai đường $AB,CD$, nhưng ở hai phía của đường cắt.\nDo đó chúng là cặp góc so le trong.\nBước 3: Dùng dữ kiện số đo\nCả hai cùng bằng $60^\\circ$, nên bằng nhau.\nBước 4: Áp dụng dấu hiệu song song\nMột đường cắt hai đường tạo cặp góc so le trong bằng nhau thì hai đường song song.\nVì vậy $AB\\parallel CD$; không phải mọi cặp góc bằng nhau đều cho kết luận này.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-goc-song-song-nang-cao-07",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Truyền quan hệ vuông góc qua hai đường song song",
          "prompt": "Trong hình, $AB\\parallel CD$ và đường thẳng $OP$ vuông góc với $AB$ tại $O$, cắt $CD$ tại $P$. Tính $\\widehat{OPD}$.",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,1.5],"P":[0,-1.5],"A":[-4,1.5],"B":[4,1.5],"C":[-4,-1.5],"D":[4,-1.5],"E":[0,4.5],"F":[0,-4.5]},"edges":[["A","B"],["C","D"],["E","F"]],"offsets":{"O":[-20,0],"P":[-20,0],"A":[-14,0],"B":[14,0],"C":[-14,0],"D":[14,0],"E":[0,-16],"F":[0,16]},"right":[["B","O","P"]],"title":"AB song song CD và OP vuông góc AB"}),
          "options": [
            "A. $90^\\circ$",
            "B. $45^\\circ$",
            "C. $180^\\circ$",
            "D. $0^\\circ$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định góc vuông đã có\n$OP\\perp AB$ nên các góc tạo tại $O$ đều bằng $90^\\circ$.\nBước 2: Chọn tia để lập góc đồng vị\nLấy $E$ trên đường $OP$ sao cho $O$ nằm giữa $E,P$.\nKhi đó $\\widehat{BOE}=90^\\circ$.\nBước 3: Dùng hai đường song song\nGóc $BOE$ đồng vị với góc $OPD$ trong cấu hình $AB\\parallel CD$.\nBước 4: Suy ra số đo\nHai góc đồng vị bằng nhau nên $\\widehat{OPD}=90^\\circ$.\nNói cách khác, đường vuông góc với một trong hai đường song song cũng vuông góc với đường còn lại.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-goc-song-song-nang-cao-08",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Dấu hiệu từ hai góc trong cùng phía",
          "prompt": "Hai đường $AB,CD$ bị đường $MN$ cắt tại $M,N$ như hình. Biết $\\widehat{BMN}=115^\\circ$ và $\\widehat{MND}=65^\\circ$. Lập luận nào đúng?",
          "svg": svgCap2.svgGrade7AngleExtension("same-side"),
          "options": [
            "A. $AB\\parallel CD$ vì hai góc đã cho là đồng vị bằng nhau.",
            "B. $AB$ không song song $CD$ vì $115^\\circ\\ne65^\\circ$.",
            "C. $AB\\parallel CD$ vì hai góc đã cho là đối đỉnh.",
            "D. $AB\\parallel CD$ vì hai góc trong cùng phía có tổng $180^\\circ$."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận đúng vị trí góc\n$\\widehat{BMN}$ và $\\widehat{MND}$ ở bên trong hai đường $AB,CD$ và cùng phía đường cắt $MN$.\nBước 2: Kiểm dấu hiệu song song\n$115^\\circ+65^\\circ=180^\\circ$. Hai góc trong cùng phía bù nhau nên $AB\\parallel CD$.\nChọn D; không cần hai góc này bằng nhau."
        },
        {
          "id": "l7-goc-song-song-nang-cao-09",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân giác gặp đường song song",
          "prompt": "Cho $AB\\parallel CD$, $E,M,N$ thẳng hàng theo thứ tự đó và $\\widehat{BME}=56^\\circ$. Tia $MR$ là phân giác nằm trong góc $BMN$, cắt $CD$ tại $R$ như hình. Tính $\\widehat{MRN}$.",
          "svg": svgCap2.svgGrade7AngleExtension("bisector-cut"),
          "options": [
            "A. $28^\\circ$",
            "B. $62^\\circ$",
            "C. $56^\\circ$",
            "D. $124^\\circ$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tìm góc được chia đôi\nHai tia $ME,MN$ đối nhau nên $\\widehat{BMN}=180^\\circ-56^\\circ=124^\\circ$.\nBước 2: Dùng định nghĩa phân giác\n$\\widehat{BMR}=\\widehat{RMN}=124^\\circ:2=62^\\circ$.\nBước 3: Chuyển góc xuống đường song song\n$\\widehat{BMR}$ và $\\widehat{MRN}$ là hai góc so le trong vì $AB\\parallel CD$.\nVậy $\\widehat{MRN}=62^\\circ$. Chọn B."
        },
        {
          "id": "l7-goc-song-song-nang-cao-10",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc gấp giữa hai đường song song",
          "prompt": "Hai đường ngang $AX,BY$ song song. Điểm $C$ nằm giữa hai đường và ở bên phải $A,B$ như hình; $AX,BY$ là các tia hướng sang phải. Biết $\\widehat{XAC}=30^\\circ$, $\\widehat{CBY}=50^\\circ$. Tính $\\widehat{ACB}$.",
          "svg": svgCap2.svgGrade7AngleExtension("bend"),
          "options": [
            "A. $20^\\circ$",
            "B. $100^\\circ$",
            "C. $80^\\circ$",
            "D. $130^\\circ$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Kẻ đường phụ qua chỗ gấp\nQua $C$ kẻ đường song song với $AX,BY$. Gọi $CU$ là tia trên đường đó hướng sang trái.\nDo $C$ ở giữa hai đường và bên phải $A,B$, tia $CU$ nằm trong góc $ACB$.\nBước 2: Chuyển hai góc về đỉnh C\nHai cặp góc so le trong cho $\\widehat{ACU}=30^\\circ$ và $\\widehat{UCB}=50^\\circ$.\nBước 3: Cộng hai phần góc\n$\\widehat{ACB}=30^\\circ+50^\\circ=80^\\circ$. Chọn C."
        },
        {
          "id": "l7-goc-song-song-nang-cao-11",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Kiểm song song từ hai phân giác",
          "prompt": "Đường $MN$ cắt $a,b$ tại $M,N$. Các tia $MB,ND$ cùng phía đối với đường $MN$. Hai tia $MR,NR$ lần lượt là phân giác nằm trong các góc $BMN,DNM$, gặp nhau tại $R$ với $\\widehat{MRN}=80^\\circ$. Kết luận nào đúng?",
          "svg": svgCap2.svgGrade7AngleExtension("not-parallel"),
          "options": [
            "A. $a\\parallel b$ vì hai tia đều là phân giác.",
            "B. $a$ không song song $b$; nếu song song thì $\\widehat{MRN}$ phải bằng $90^\\circ$.",
            "C. Chưa thể kết luận vì chưa biết độ dài $MN$.",
            "D. $a\\perp b$ vì $\\widehat{MRN}<90^\\circ$."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xét giả sử hai đường song song\nNếu $a\\parallel b$, hai góc trong cùng phía $\\widehat{BMN},\\widehat{DNM}$ có tổng $180^\\circ$.\nBước 2: Tính tổng hai góc của tam giác MNR\nVì $MR,NR$ là các phân giác, $\\widehat{RMN}+\\widehat{MNR}=\\frac{1}{2}(180^\\circ)=90^\\circ$.\nTam giác $MNR$ không suy biến vì ba góc trong cấu hình đều khác $0^\\circ$.\nBước 3: Đối chiếu với dữ kiện\nTổng ba góc tam giác bằng $180^\\circ$, nên giả sử trên buộc $\\widehat{MRN}=90^\\circ$.\nĐiều này trái với $80^\\circ$ đã cho. Vậy $a,b$ không song song. Chọn B."
        }
      ],
      "hsg": [
        {
          "id": "l7-goc-song-song-hsg-01",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đếm góc nhọn từ nhiều tia chung gốc",
          "prompt": "Trong một nửa mặt phẳng bờ $AF$, có sáu tia theo thứ tự $OA,OB,OC,OD,OE,OF$; $OA$ và $OF$ đối nhau. Số đo năm góc liên tiếp là $20^\\circ,30^\\circ,40^\\circ,50^\\circ,40^\\circ$. Mỗi cặp hai tia khác nhau tạo một góc không vượt $180^\\circ$. Có bao nhiêu góc nhọn trong các góc đó?",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,0],"A":[4,0],"B":[3.7587704831436337,1.3680805733026749],"C":[2.5711504387461575,3.064177772475912],"D":[2.4492935982947064e-16,4],"E":[-3.0641777724759116,2.571150438746158],"F":[-4,4.898587196589413e-16]},"edges":[["O","A"],["O","B"],["O","C"],["O","D"],["O","E"],["O","F"]],"offsets":{"O":[0,22],"A":[16,0],"B":[16,-5],"C":[10,-17],"D":[0,-18],"E":[-12,-12],"F":[-16,0]},"angles":[{"at":"O","from":"A","to":"B","value":20,"radius":30,"labelRadius":52},{"at":"O","from":"B","to":"C","value":30,"radius":30,"labelRadius":52},{"at":"O","from":"C","to":"D","value":40,"radius":30,"labelRadius":52},{"at":"O","from":"D","to":"E","value":50,"radius":30,"labelRadius":52},{"at":"O","from":"E","to":"F","value":40,"radius":30,"labelRadius":52}],"title":"Sáu tia trong nửa mặt phẳng, các góc liên tiếp 20, 30, 40, 50, 40 độ"}),
          "correctAnswer": "7",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đổi sang vị trí tính từ OA\nCộng dồn năm góc, sáu tia có vị trí $0^\\circ,20^\\circ,50^\\circ,90^\\circ,140^\\circ,180^\\circ$.\nBước 2: Nêu cách đếm không trùng\nMỗi cặp tia được xét từ tia đứng trước đến tia đứng sau.\nGóc nhọn phải có hiệu vị trí lớn hơn $0^\\circ$ và nhỏ hơn $90^\\circ$.\nBước 3: Đếm từ ba tia đầu\nTừ $OA$: $OB,OC$ cho $20^\\circ,50^\\circ$ — có $2$ góc.\nTừ $OB$: $OC,OD$ cho $30^\\circ,70^\\circ$ — có $2$ góc.\nTừ $OC$: chỉ $OD$ cho $40^\\circ$ — có $1$ góc; $OE$ tạo đúng $90^\\circ$ nên loại.\nBước 4: Đếm các tia còn lại\nTừ $OD$: chỉ $OE$ cho $50^\\circ$ — có $1$ góc.\nTừ $OE$: $OF$ cho $40^\\circ$ — có $1$ góc.\nTừ $OF$ không còn tia đứng sau; mọi cặp đã được xét theo quy tắc.\nBước 5: Kết luận\nCó $2+2+1+1+1=7$ góc nhọn.\nCác góc đúng $90^\\circ$ không được tính."
        },
        {
          "id": "l7-goc-song-song-hsg-02",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm ngược số đo từ quan hệ giữa ba góc",
          "prompt": "Ba đường thẳng phân biệt cắt nhau tại $O$. Trên một nửa mặt phẳng, ba góc kề nhau có số đo lần lượt là $\\alpha$, $\\alpha+20^\\circ$, $2\\alpha$, như hình. Tính số đo góc lớn thứ hai trong ba góc đó theo độ.",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,0],"X":[4,0],"A":[3.064177772475912,2.571150438746157],"B":[-0.6945927106677212,3.939231012048832],"Y":[-4,4.898587196589413e-16],"C":[-3.064177772475912,-2.571150438746157],"D":[0.6945927106677199,-3.9392310120488325]},"edges":[["X","Y"],["A","C"],["B","D"]],"labels":{"X":"x","Y":"y"},"offsets":{"O":[0,20],"X":[15,0],"Y":[-15,0],"A":[15,-5],"B":[0,-18],"C":[-15,5],"D":[0,18]},"angles":[{"at":"O","from":"X","to":"A","value":"α","radius":26,"labelRadius":48},{"at":"O","from":"A","to":"B","value":"α + 20°","radius":36,"labelRadius":66},{"at":"O","from":"B","to":"Y","value":"2α","radius":26,"labelRadius":48}],"title":"Ba góc kề trên góc bẹt lần lượt alpha, alpha cộng 20 độ, hai alpha"}),
          "correctAnswer": "60",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định tổng góc\nBa góc kề trong một nửa mặt phẳng phủ hết góc bẹt, nên tổng bằng $180^\\circ$.\nBước 2: Lập đẳng thức\n$\\alpha+(\\alpha+20^\\circ)+2\\alpha=180^\\circ$.\nBước 3: Tìm từng góc\n$4\\alpha=160^\\circ$, nên $\\alpha=40^\\circ$.\nBa góc lần lượt là $40^\\circ,60^\\circ,80^\\circ$.\nBước 4: Xếp thứ tự và kiểm tra\n$40<60<80$, các góc đều dương và tổng bằng $180^\\circ$.\nVì vậy ba đường phân biệt không bị trùng do góc bằng $0$.\nBước 5: Kết luận\nGóc lớn thứ hai bằng $60^\\circ$; nhập $60$."
        },
        {
          "id": "l7-goc-song-song-hsg-03",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "dien",
          "title": "Kiểm một phản ví dụ thiếu đường vuông góc chung",
          "prompt": "Một bạn bỏ chữ “cùng” trong định lí và nói: “Nếu $a\\perp c$ và $b\\perp d$ thì $a\\parallel b$.” Xét hình: bốn đường cùng đi qua $O$, $a\\perp c$, $b\\perp d$; tia $OB$ của $b$ nằm trong góc vuông $XOC$, với $OX$ thuộc $a$, $OC$ thuộc $c$ và $\\widehat{BOC}=45^\\circ$. Góc nhọn giữa $a$ và $b$ bằng bao nhiêu độ, qua đó thấy đây là phản ví dụ?",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,0],"X":[4,0],"N":[-4,0],"C":[0,4],"H":[0,-4],"B":[3,3],"K":[-3,-3],"D":[-3,3],"L":[3,-3]},"edges":[["X","N"],["C","H"],["B","K"],["D","L"]],"labels":{"X":"X (a)","C":"C (c)","B":"B (b)","D":"D (d)","N":"","H":"","K":"","L":""},"offsets":{"O":[-15,-12],"X":[16,0],"C":[0,-18],"B":[20,-8],"D":[-20,-8]},"angles":[{"at":"O","from":"B","to":"C","value":45,"radius":44,"labelRadius":68}],"right":[["X","O","C"],["K","O","L"]],"title":"a vuông góc c, b vuông góc d, nhưng a và b cắt nhau"}),
          "correctAnswer": "45",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xác định góc chứa OB\n$OX$ thuộc $a$, $OC$ thuộc $c$ và $a\\perp c$, nên $\\widehat{XOC}=90^\\circ$.\nBước 2: Dùng vị trí bên trong\n$OB$ nằm trong góc $XOC$, nên $\\widehat{XOB}+\\widehat{BOC}=90^\\circ$.\nBước 3: Tính góc giữa hai đường\n$\\widehat{XOB}=90^\\circ-45^\\circ=45^\\circ$.\nĐây là góc nhọn giữa $a$ và $b$.\nBước 4: Đối chiếu phát biểu\n$a,b$ cắt nhau tại $O$ theo góc $45^\\circ$, nên không song song.\nDù $a\\perp c$ và $b\\perp d$ đều đúng, chúng không cùng vuông góc với một đường.\nBước 5: Kết luận\nĐáp số $45$; hình là phản ví dụ cho phát biểu đã bỏ chữ “cùng”."
        },
        {
          "id": "l7-goc-song-song-hsg-04",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh tính bắc cầu bằng tiên đề Euclid",
          "prompt": "Cho ba đường thẳng đôi một phân biệt $a,b,c$, biết $a\\parallel c$ và $b\\parallel c$. Dùng tiên đề Euclid để chứng minh $a\\parallel b$.",
          "svg": svgCap2.svgGeometry({"points":{"A":[-4,2],"B":[4,2],"C":[-4,0],"D":[4,0],"E":[-4,-2],"F":[4,-2]},"edges":[["A","B"],["C","D"],["E","F"]],"labels":{"A":"a","C":"b","E":"c","B":"","D":"","F":""},"offsets":{"A":[-15,0],"C":[-15,0],"E":[-15,0]},"title":"Ba đường thẳng phân biệt a b c, a và b cùng song song c"}),
          "solution": "Bước 1: Chọn cách chứng minh\n$a,b$ đã phân biệt. Muốn chứng minh song song, ta chứng minh chúng không cắt nhau.\nBước 2: Giả sử chúng cắt nhau\nGiả sử giao điểm là $M$.\nVì $M$ thuộc $a$ mà $a\\parallel c$, điểm $M$ không thuộc $c$.\nBước 3: Áp dụng tiên đề Euclid tại M\nQua điểm $M$ nằm ngoài $c$ chỉ có một đường song song với $c$.\nBước 4: Chỉ ra mâu thuẫn\nCả $a$ lẫn $b$ đều qua $M$, phân biệt và cùng song song với $c$.\nĐiều đó tạo hai đường song song với $c$ qua $M$, trái tính duy nhất ở bước 3.\nBước 5: Kết luận\nGiả sử cắt nhau không đúng, nên $a,b$ không cắt nhau.\nHai đường phân biệt trong mặt phẳng không cắt nhau là song song: $a\\parallel b$."
        },
        {
          "id": "l7-goc-song-song-hsg-05",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh hai tia phân giác vuông góc",
          "prompt": "Hai góc $xOy$ và $yOz$ kề bù, với $0^\\circ<\\widehat{xOy}<180^\\circ$. Các tia $Ou,Ov$ lần lượt là phân giác nằm trong hai góc đó. Chứng minh $Ou\\perp Ov$.",
          "svg": svgCap2.svgGeometry({"points":{"O":[0,0],"X":[4,0],"U":[2,3.4641016151377544],"Y":[-2,3.4641016151377544],"V":[-3.4641016151377544,2],"Z":[-4,0]},"edges":[["O","X"],["O","U"],["O","Y"],["O","V"],["O","Z"]],"labels":{"X":"x","U":"u","Y":"y","V":"v","Z":"z"},"offsets":{"O":[0,22],"X":[16,0],"U":[8,-18],"Y":[-8,-18],"V":[-17,-6],"Z":[-16,0]},"angles":[{"at":"O","from":"X","to":"U","radius":30},{"at":"O","from":"U","to":"Y","radius":30},{"at":"O","from":"Y","to":"V","radius":65},{"at":"O","from":"Y","to":"V","radius":70},{"at":"O","from":"V","to":"Z","radius":65},{"at":"O","from":"V","to":"Z","radius":70}],"title":"Hai phân giác Ou Ov của hai góc kề bù xOy và yOz"}),
          "solution": "Bước 1: Đặt số đo và giữ điều kiện\nĐặt $\\widehat{xOy}=\\alpha$, với $0^\\circ<\\alpha<180^\\circ$.\nHai góc kề bù nên $\\widehat{yOz}=180^\\circ-\\alpha$.\nBước 2: Dùng phân giác thứ nhất\n$Ou$ là phân giác trong góc $xOy$, nên $\\widehat{uOy}=\\alpha/2$.\nBước 3: Dùng phân giác thứ hai\n$Ov$ là phân giác trong góc $yOz$, nên $\\widehat{yOv}=(180^\\circ-\\alpha)/2$.\nBước 4: Cộng đúng hai góc\nDo hai phân giác nằm trong hai góc kề, $Oy$ nằm giữa $Ou,Ov$.\nVậy $\\widehat{uOv}=\\alpha/2+(180^\\circ-\\alpha)/2=90^\\circ$.\nBước 5: Kết luận\n$Ou\\perp Ov$.\nĐiều kiện về $\\alpha$ bảo đảm cả hai góc ban đầu có phần trong, nên các phân giác không suy biến."
        },
        {
          "id": "l7-goc-song-song-hsg-06",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chuyển hai hướng về cùng đỉnh",
          "prompt": "Hai đường ngang $a,b$ song song. Điểm $O$ thuộc $b$, các điểm $A,B$ thuộc $a$ theo thứ tự từ trái sang phải; cả hai ở bên phải $O$ như hình. Biết $\\widehat{BAO}=113^\\circ$, $\\widehat{ABO}=27^\\circ$. Tính $\\widehat{AOB}$ theo độ.",
          "svg": svgCap2.svgGrade7AngleExtension("two-cuts"),
          "correctAnswer": "40",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chọn tia chuẩn trên đường dưới\nLấy tia $OX$ trên $b$ hướng sang phải. Theo vị trí các điểm, tia $OB$ nằm trong góc $AOX$.\nBước 2: Chuyển hai góc về O\nGóc $\\widehat{AOX}$ và $\\widehat{BAO}$ là hai góc trong cùng phía, nên $\\widehat{AOX}=180^\\circ-113^\\circ=67^\\circ$.\nHai góc so le trong $\\widehat{BOX},\\widehat{ABO}$ bằng nhau nên $\\widehat{BOX}=27^\\circ$.\nBước 3: Lấy hiệu và đối chiếu\n$\\widehat{AOB}=67^\\circ-27^\\circ=40^\\circ$.\nKiểm lại trong tam giác $AOB$: $113^\\circ+27^\\circ+40^\\circ=180^\\circ$.\nBước 4: Kết luận\n$\\widehat{AOB}=40^\\circ$."
        },
        {
          "id": "l7-goc-song-song-hsg-07",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Góc lệch của phân giác",
          "prompt": "Cho hai đường ngang $AX,BY$ song song, $C$ nằm giữa hai đường và ở bên phải $A,B$; hai tia $AX,BY$ hướng sang phải. Đặt $\\alpha=\\widehat{XAC}=(2x+10)^\\circ$, $\\beta=\\widehat{CBY}=(3x-5)^\\circ$, với $5<x<30$. Biết $\\widehat{ACB}=125^\\circ$. Tia $CT$ là phân giác trong của góc $ACB$; tia $CO$ hướng sang trái và song song với $AX$. Tính góc nhỏ $\\widehat{OCT}$ theo độ.",
          "svg": svgCap2.svgGrade7AngleExtension("bisector-offset"),
          "correctAnswer": "4.5",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Lập quan hệ giữa hai góc\nTia $CO$ nằm trong góc $ACB$. Nhờ hai cặp góc so le trong, $\\widehat{ACO}=\\alpha$, $\\widehat{OCB}=\\beta$.\nDo đó $(2x+10)+(3x-5)=125$, tức $5x+5=125$.\nBước 2: Tính và kiểm các góc\n$x=24$ thuộc khoảng $5<x<30$.\n$\\alpha=58^\\circ$, $\\beta=67^\\circ$; hai góc dương, đều nhỏ hơn $90^\\circ$ và có tổng $125^\\circ$.\nBước 3: Xác định vị trí phân giác\n$\\widehat{ACT}=125^\\circ:2=62{,}5^\\circ$.\nVì $\\widehat{ACO}=58^\\circ<62{,}5^\\circ$, tia $CT$ nằm giữa $CO$ và $CB$.\nBước 4: Tính phần góc lệch\n$\\widehat{OCT}=\\widehat{ACT}-\\widehat{ACO}=62{,}5^\\circ-58^\\circ=4{,}5^\\circ$.\nBước 5: Kết luận\n$\\widehat{OCT}=4{,}5^\\circ$."
        },
        {
          "id": "l7-goc-song-song-hsg-08",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Xét đủ vị trí của hai đường",
          "prompt": "Ba đường thẳng phân biệt $a,b,c$ đi qua $O$. Góc nhọn giữa $a,c$ là $25^\\circ$; giữa $b,c$ là $65^\\circ$. Góc giữa $a,b$ được lấy là góc nhỏ hơn hoặc bằng $90^\\circ$. Tính tổng tất cả các số đo khác nhau có thể có của góc này, theo độ.",
          "svg": svgCap2.svgGrade7AngleExtension("two-cases"),
          "correctAnswer": "130",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chọn các tia để xét đủ vị trí\nLấy $OC$ là một tia trên $c$. Trên $a$ chỉ có một tia tạo với $OC$ góc $25^\\circ$; trên $b$ chỉ có một tia tạo với $OC$ góc $65^\\circ$.\nHai tia này hoặc cùng phía, hoặc khác phía đối với đường $c$; đó là đủ các khả năng.\nBước 2: Xét hai cấu hình\nCùng phía: góc giữa hai tia là $65^\\circ-25^\\circ=40^\\circ$; góc nhỏ giữa hai đường là $40^\\circ$.\nKhác phía: góc giữa hai tia là $65^\\circ+25^\\circ=90^\\circ$; hai đường vuông góc.\nBước 3: Kiểm khả năng dựng và cộng\nCả hai cấu hình trên đều dựng được, ba đường vẫn phân biệt. Đổi các tia sang phía đối diện không tạo số đo mới.\nTổng các số đo khác nhau là $40+90=130$.\nBước 4: Kết luận\nTổng các số đo khác nhau là $130^\\circ$."
        },
        {
          "id": "l7-goc-song-song-hsg-09",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Đặc trưng song song qua hai phân giác",
          "prompt": "Đường $EF$ cắt hai đường $AB,CD$ tại hai điểm phân biệt $M,N$, với $E,M,N,F$ theo thứ tự đó. Các tia $MB,ND$ cùng phía đối với $EF$. Tia $MR$ là phân giác trong của góc $BME$; tia $NS$ là phân giác trong của góc $DNM$. Chứng minh: $AB\\parallel CD$ khi và chỉ khi hai đường thẳng chứa $MR,NS$ song song.",
          "svg": svgCap2.svgGrade7AngleExtension("parallel-bisectors"),
          "solution": "Bước 1: Nhận cặp góc cần dùng\n$\\widehat{BME}$ và $\\widehat{DNM}$ là hai góc đồng vị. Các tia $ME,NM$ cùng hướng.\nDo các phân giác nằm trong hai góc và cùng phía $EF$, $\\widehat{RME},\\widehat{SNM}$ cũng là cặp góc đồng vị.\nBước 2: Chứng minh chiều thuận\nNếu $AB\\parallel CD$ thì $\\widehat{BME}=\\widehat{DNM}$.\nLấy một nửa mỗi góc được $\\widehat{RME}=\\widehat{SNM}$. Theo dấu hiệu góc đồng vị bằng nhau, các đường chứa $MR,NS$ song song.\nBước 3: Chứng minh chiều ngược\nNếu các đường chứa $MR,NS$ song song thì $\\widehat{RME}=\\widehat{SNM}$ do đồng vị.\nNhân đôi hai góc và dùng định nghĩa phân giác được $\\widehat{BME}=\\widehat{DNM}$.\nTheo dấu hiệu góc đồng vị, $AB\\parallel CD$.\nBước 4: Kết luận và điều kiện hình\nHai chiều đều đúng, nên điều kiện đã nêu là cần và đủ.\nHai đường phân giác là phân biệt: nếu trùng nhau thì phải là đường $MN$, trái với việc các phân giác nằm trong các góc không suy biến."
        },
        {
          "id": "l7-goc-song-song-hsg-10",
          "lop": 7,
          "chuDe": "goc-song-song",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Quan hệ góc của đường gấp ba đoạn",
          "prompt": "Hai đường ngang $a,b$ song song, $a$ ở trên $b$. Điểm $A$ thuộc $a$, $D$ thuộc $b$; $B,C$ nằm trong dải giữa hai đường. Từ trái sang phải là $A,B,C,D$, và $B$ ở thấp hơn $C$ như hình. Tia $AX$ hướng sang phải trên $a$; tia $DZ$ hướng sang trái trên $b$. Đặt $\\alpha=\\widehat{XAB}$, $\\beta=\\widehat{ZDC}$, $φ=\\widehat{ABC}$, $ψ=\\widehat{BCD}$. Chứng minh $φ+\\alpha=ψ+\\beta$. Từ đó chứng minh: nếu $φ=ψ$ thì $AB\\parallel CD$.",
          "svg": svgCap2.svgGrade7AngleExtension("three-segments"),
          "solution": "Bước 1: Đưa các hướng về những đường ngang\nQua $B,C$ kẻ các đường ngang song song với $a,b$.\nGọi $θ$ là góc nhọn của tia $BC$ với tia ngang hướng sang phải tại $B$.\nDo thứ tự và vị trí cao thấp đã cho, $\\alpha,\\beta,θ$ đều nằm giữa $0^\\circ$ và $90^\\circ$.\nBước 2: Biểu diễn góc tại B\nTia $BA$ chếch lên trái, tạo với tia ngang hướng trái góc $\\alpha$ (so le trong). Tia $BC$ chếch lên phải, tạo với tia ngang hướng phải góc $θ$.\nBa phần ghép thành góc bẹt phía trên tại $B$, nên $\\alpha+φ+θ=180^\\circ$.\nBước 3: Biểu diễn góc tại C và nối kết quả\nTại $C$, tia $CB$ chếch xuống trái, tạo với tia ngang hướng trái góc $θ$; tia $CD$ chếch xuống phải, tạo với tia ngang hướng phải góc $\\beta$. Các góc được chuyển bằng tính chất song song.\nBa phần ghép thành góc bẹt phía dưới: $θ+ψ+\\beta=180^\\circ$.\nHai đẳng thức cho $φ+\\alpha=180^\\circ-θ=ψ+\\beta$.\nBước 4: Suy ra quan hệ song song khi hai góc bằng nhau\nNếu $φ=ψ$ thì trừ hai vế được $\\alpha=\\beta$.\nQua $B$ kẻ đường $l\\parallel CD$. Góc nhọn phía trên giữa tia của $l$ hướng lên trái và tia ngang hướng trái bằng $\\beta$; góc tương ứng của $BA$ bằng $\\alpha$.\nVì $\\alpha=\\beta$ và hai tia đều ở cùng nửa mặt phẳng phía trên, chúng trùng nhau. Do đó $AB=l\\parallel CD$."
        }
      ]
    },
    'tam-giac-bang-nhau': {
      "kha": [
        {
          "id": "l7-tam-giac-bang-nhau-kha-01",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận diện cạnh tương ứng",
          "prompt": "Biết $\\triangle ABC=\\triangle MNP$ theo đúng thứ tự đỉnh đã viết. Cạnh tương ứng với $AB$ là cạnh nào?",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,3],"B":[0,0],"C":[4,0],"M":[10,3],"N":[10,0],"P":[6,0]},"edges":[["A","B"],["B","C"],["C","A"],["M","N"],["N","P"],["P","M"]],"offsets":{"A":[-15,-15],"B":[-15,15],"C":[15,15],"M":[15,-15],"N":[15,15],"P":[-15,15]},"title":"Hai tam giác ABC và MNP bằng nhau","equal":[[["A","B"],["M","N"]],[["B","C"],["N","P"]],[["A","C"],["M","P"]]]}),
          "options": [
            "A. $MN$",
            "B. $NP$",
            "C. $MP$",
            "D. $BC$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đọc thứ tự đỉnh\n$\\triangle ABC=\\triangle MNP$ nghĩa là các đỉnh được ghép theo vị trí đã viết.\nBước 2: Ghép hai đầu cạnh\n$A$ tương ứng với $M$, còn $B$ tương ứng với $N$.\nBước 3: Xác định cạnh tương ứng\nCạnh nối hai đỉnh tương ứng $M,N$ là $MN$.\nBước 4: Kiểm tra các lựa chọn\n$NP$ ứng với $BC$, $MP$ ứng với $AC$, nên không phải cạnh cần tìm.\nKhông ghép cạnh theo vị trí trái, phải trên hình.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-tam-giac-bang-nhau-kha-02",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tổng các góc của tam giác",
          "prompt": "Tam giác $ABC$ có $\\widehat{A}=50^\\circ$, $\\widehat{B}=60^\\circ$. Tính $\\widehat{C}$.",
          "svg": svgCap2.svgGeometry({"points":{"A":[3.680044790717032,6.374024551651074],"B":[0,0],"C":[6,0]},"edges":[["A","B"],["B","C"],["C","A"]],"offsets":{"A":[0,-20],"B":[-17,15],"C":[17,15]},"title":"Tam giác ABC có góc A 50 độ và góc B 60 độ","angles":[{"at":"A","from":"B","to":"C","value":50},{"at":"B","from":"A","to":"C","value":60}]}),
          "options": [
            "A. $110^\\circ$",
            "B. $60^\\circ$",
            "C. $70^\\circ$",
            "D. $130^\\circ$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhắc tổng góc\nBa góc trong tam giác có tổng bằng $180^\\circ$.\nBước 2: Cộng hai góc đã biết\n$50^\\circ+60^\\circ=110^\\circ$.\nBước 3: Tính góc còn lại\n$\\widehat C=180^\\circ-110^\\circ=70^\\circ$.\nBước 4: Kiểm tra tổng\n$50+60+70=180$, đúng định lí.\n$110^\\circ$ chỉ là tổng hai góc đã biết, không phải góc $C$.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-tam-giac-bang-nhau-kha-03",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc đáy tam giác cân",
          "prompt": "Tam giác $ABC$ cân tại $A$, $\\widehat{A}=40^\\circ$. Tính $\\widehat{B}$.",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,8.242432258363868],"B":[-3,0],"C":[3,0]},"edges":[["A","B"],["B","C"],["C","A"]],"offsets":{"A":[0,-20],"B":[-17,15],"C":[17,15]},"title":"Tam giác ABC cân tại A, góc A 40 độ","equal":[[["A","B"],["A","C"]]],"angles":[{"at":"A","from":"B","to":"C","value":40,"radius":28,"labelRadius":50}]}),
          "options": [
            "A. $40^\\circ$",
            "B. $70^\\circ$",
            "C. $140^\\circ$",
            "D. $80^\\circ$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Nhận diện đỉnh cân\nTam giác cân tại $A$ có $AB=AC$, nên hai góc đáy $B,C$ bằng nhau.\nBước 2: Tính tổng góc đáy\n$\\widehat B+\\widehat C=180^\\circ-40^\\circ=140^\\circ$.\nBước 3: Chia đều tổng\n$\\widehat B=\\widehat C=140^\\circ/2=70^\\circ$.\nBước 4: Kiểm tra\n$40+70+70=180$ và hai góc đáy bằng nhau, khớp cả hai tính chất.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-tam-giac-bang-nhau-kha-04",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Điểm trên đường trung trực",
          "prompt": "$AB$ là đoạn thẳng, $M$ nằm trên đường trung trực của $AB$. Khẳng định nào luôn đúng?",
          "svg": svgCap2.svgGrade7Batch3("bisector-point"),
          "options": [
            "A. $MA=AB$",
            "B. $MB=AB/2$",
            "C. $MA=MB$",
            "D. $MA=2MB$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Dùng tính chất trung trực\nMỗi điểm trên đường trung trực cách đều hai đầu đoạn thẳng.\nBước 2: Kết luận\n$MA=MB$. Không có dữ kiện buộc hai khoảng cách này bằng nửa $AB$. Chọn C."
        },
        {
          "id": "l7-tam-giac-bang-nhau-kha-05",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc ứng với đúng đỉnh",
          "prompt": "Hai tam giác $ABC$ và $DEF$ bằng nhau theo thứ tự đỉnh đã viết. Biết $\\widehat{A}=50^\\circ$, $\\widehat{C}=60^\\circ$. Tính $\\widehat{E}$.",
          "svg": svgCap2.svgGrade7Batch3("corresponding-triangles"),
          "options": [
            "A. $70^\\circ$",
            "B. $50^\\circ$",
            "C. $60^\\circ$",
            "D. $110^\\circ$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Tính góc còn lại\nTổng ba góc tam giác là $180^\\circ$, nên $\\widehat{B}=180^\\circ-50^\\circ-60^\\circ=70^\\circ$.\nBước 2: Ghép đúng đỉnh\n$B$ tương ứng với $E$, nên $\\widehat{E}=70^\\circ$. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-01",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Từ trung điểm đến góc vuông",
          "prompt": "Cho tam giác $ABC$ có $AB=AC$. Điểm $M$ là trung điểm của $BC$. Tính $\\widehat{AMB}$.",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,4],"B":[-3,0],"C":[3,0],"M":[0,0]},"edges":[["A","B"],["B","C"],["C","A"],["A","M"]],"offsets":{"A":[0,-20],"B":[-18,15],"C":[18,15],"M":[0,20]},"title":"Tam giác cân ABC, M là trung điểm BC","equal":[[["A","B"],["A","C"]],[["B","M"],["M","C"]]]}),
          "options": [
            "A. $45^\\circ$",
            "B. $60^\\circ$",
            "C. $90^\\circ$",
            "D. $180^\\circ$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Ghi các cạnh bằng nhau\nXét $\\triangle ABM$ và $\\triangle ACM$.\n$AB=AC$ theo đề.\n$BM=CM$ vì $M$ là trung điểm.\n$AM$ là cạnh chung.\nBước 2: Chứng minh hai tam giác bằng nhau\nBa cặp cạnh tương ứng bằng nhau, nên $\\triangle ABM=\\triangle ACM$ theo cạnh–cạnh–cạnh.\nBước 3: Suy ra cặp góc\nHai góc tương ứng tại $M$ bằng nhau: $\\widehat{AMB}=\\widehat{AMC}$.\nBước 4: Dùng hai tia đối\n$B,M,C$ thẳng hàng, $M$ ở giữa, nên hai góc này kề bù.\nChúng bằng nhau và tổng $180^\\circ$, nên mỗi góc bằng $90^\\circ$.\nBước 5: Kết luận\n$\\widehat{AMB}=90^\\circ$. Chọn C."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-02",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai đoạn thẳng cắt nhau tại trung điểm",
          "prompt": "Hai đoạn thẳng $AC$ và $BD$ cắt nhau tại $O$, với $OA=OC$, $OB=OD$; $A,O,B$ không thẳng hàng. Biết $AB=7$ cm. Tính $CD$.",
          "svg": svgCap2.svgGeometry({"points":{"A":[3,0],"B":[4,6.928203230275509],"C":[-3,0],"D":[-4,-6.928203230275509],"O":[0,0]},"edges":[["A","C"],["B","D"],["A","B"],["C","D"]],"offsets":{"A":[18,0],"B":[10,-16],"C":[-18,0],"D":[-10,17],"O":[18,18]},"title":"O là trung điểm AC và BD; AB dài 7 cm","equal":[[["A","O"],["O","C"]],[["B","O"],["O","D"]]],"edgeLabels":[{"a":"A","b":"B","text":"7 cm","value":7,"offset":22}]}),
          "options": [
            "A. $3{,}5$ cm",
            "B. $7$ cm",
            "C. $14$ cm",
            "D. Không đủ dữ kiện để tính."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xét hai tam giác\nXét $AOB$ và $COD$; chúng không suy biến do $A,O,B$ không thẳng hàng.\nBước 2: Ghi các dữ kiện tương ứng\n$OA=OC$ theo đề.\n$OB=OD$ cũng theo đề.\n$\\widehat{AOB}=\\widehat{COD}$ vì hai góc đối đỉnh.\nBước 3: Áp dụng cạnh–góc–cạnh\nGóc bằng nhau nằm xen giữa hai cặp cạnh bằng nhau.\nVậy $\\triangle AOB=\\triangle COD$.\nBước 4: Lấy cạnh tương ứng\n$AB$ tương ứng với $CD$, nên $CD=AB=7$ cm.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-03",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Hai tam giác vuông có cạnh huyền bằng nhau",
          "prompt": "Tam giác $ABC$ có $AB=AC$. Đường cao $AH$ có chân $H$ nằm trong đoạn $BC$. Biết $BH=3$ cm. Tính $BC$.",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,4],"B":[-3,0],"C":[3,0],"H":[0,0]},"edges":[["A","B"],["B","C"],["C","A"],["A","H"]],"offsets":{"A":[0,-20],"B":[-18,12],"C":[18,12],"H":[0,20]},"title":"Tam giác ABC có AB bằng AC, AH vuông góc BC, BH dài 3 cm","equal":[[["A","B"],["A","C"]]],"right":[["A","H","C"]],"edgeLabels":[{"a":"B","b":"H","text":"3 cm","value":3,"offset":23}]}),
          "options": [
            "A. $3$ cm",
            "B. $1{,}5$ cm",
            "C. $9$ cm",
            "D. $6$ cm"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Nhận diện hai tam giác vuông\n$AH$ là đường cao nên $\\widehat{AHB}=\\widehat{AHC}=90^\\circ$.\nBước 2: Ghi các cạnh bằng nhau\nCạnh huyền $AB=AC$ theo đề.\nCạnh góc vuông $AH$ là cạnh chung của hai tam giác.\nBước 3: Chứng minh bằng nhau\n$\\triangle ABH=\\triangle ACH$ theo cạnh huyền–cạnh góc vuông.\nDo đó $BH=CH$ là hai cạnh tương ứng.\nBước 4: Tính toàn cạnh đáy\n$CH=3$ cm; $H$ nằm giữa $B,C$ nên $BC=BH+HC=3+3=6$ cm.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-04",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "So sánh cạnh qua góc đối diện",
          "prompt": "Tam giác $ABC$ có $\\widehat{A}=80^\\circ$, $\\widehat{B}=60^\\circ$. Khẳng định nào đúng?",
          "svg": svgCap2.svgGeometry({"points":{"A":[1.9581109339984184,3.391547624541408],"B":[0,0],"C":[6,0]},"edges":[["A","B"],["B","C"],["C","A"]],"offsets":{"A":[0,-20],"B":[-17,15],"C":[17,15]},"title":"Tam giác ABC có góc A 80 độ, góc B 60 độ","angles":[{"at":"A","from":"B","to":"C","value":80},{"at":"B","from":"A","to":"C","value":60}]}),
          "options": [
            "A. $AB$ là cạnh dài nhất.",
            "B. $AC$ là cạnh dài nhất.",
            "C. $BC$ là cạnh dài nhất.",
            "D. $AB=AC$."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tìm góc thứ ba\n$\\widehat C=180^\\circ-80^\\circ-60^\\circ=40^\\circ$.\nBước 2: Xếp các góc\n$\\widehat A>\\widehat B>\\widehat C$ vì $80>60>40$.\nBước 3: Dùng quan hệ góc và cạnh\nTrong cùng một tam giác, cạnh đối diện góc lớn hơn thì dài hơn.\nBước 4: Ghép đúng cạnh đối diện\nĐối diện $A$ là $BC$, đối diện $B$ là $AC$, đối diện $C$ là $AB$.\nVậy $BC>AC>AB$.\nBước 5: Kết luận\n$BC$ dài nhất. Chọn C."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-05",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Đếm cạnh nguyên tạo được tam giác",
          "prompt": "Hai cạnh của một tam giác dài $4$ cm và $7$ cm. Cạnh thứ ba dài $x$ cm, với $x$ là số nguyên dương. Có bao nhiêu giá trị của $x$?",
          "svg": "",
          "options": [
            "A. $7$",
            "B. $8$",
            "C. $9$",
            "D. $10$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nêu điều kiện tạo tam giác\nCạnh thứ ba phải lớn hơn hiệu và nhỏ hơn tổng hai cạnh đã biết.\nBước 2: Thay hai cạnh\n$7-4<x<7+4$, tức $3<x<11$.\nBước 3: Liệt kê số nguyên\n$x$ có thể là $4,5,6,7,8,9,10$.\nBước 4: Đếm và kiểm tra biên\nCó $10-4+1=7$ giá trị.\n$x=3$ hoặc $x=11$ làm một cạnh bằng tổng hai cạnh kia, tạo hình suy biến nên loại.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-06",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Đường vuông góc và đường xiên",
          "prompt": "Điểm $A$ nằm ngoài đường thẳng $d$, $AH\\perp d$ tại $H$. Điểm $B$ thuộc $d$ và khác $H$. Biết $AH=2x+1$ cm, $AB=3x-2$ cm, với $x$ là số nguyên dương. Giá trị nhỏ nhất có thể của $x$ là bao nhiêu?",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,9],"H":[0,0],"B":[4.358898943540674,0],"P":[-1.5,0],"Q":[6,0]},"edges":[["P","Q"],["A","H"],["A","B"]],"offsets":{"A":[0,-20],"H":[0,20],"B":[0,20],"P":[0,20],"Q":[0,20]},"right":[["A","H","B"]],"edgeLabels":[{"a":"A","b":"H","text":"2x + 1","offset":45},{"a":"A","b":"B","text":"3x − 2","offset":-40}],"title":"AH vuông góc đường thẳng d; AB là đường xiên","labels":{"P":"","Q":"d"}}),
          "options": [
            "A. $1$",
            "B. $2$",
            "C. $3$",
            "D. $4$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: So sánh vuông góc với đường xiên\n$AH$ vuông góc $d$, còn $AB$ là đường xiên vì $B\\ne H$.\nĐường vuông góc ngắn hơn đường xiên từ cùng một điểm, nên $AH<AB$.\nBước 2: Dùng biểu thức độ dài\n$2x+1<3x-2$ cho $x>3$.\nBước 3: Chọn số nguyên nhỏ nhất\nSố nguyên dương nhỏ nhất lớn hơn $3$ là $4$.\nKhi đó $AH=9$ cm, $AB=10$ cm.\nBước 4: Kiểm tra có dựng được\nĐường tròn tâm $A$, bán kính $10$ cm cắt đường $d$ có khoảng cách đến $A$ là $9$ cm.\nChọn một giao điểm làm $B$ sẽ có $B\\ne H$, nên các độ dài thực sự có thể xảy ra.\nBước 5: Kết luận\nGiá trị nhỏ nhất là $4$. Chọn D."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-07",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tỉ lệ trên đường trung tuyến",
          "prompt": "Trong tam giác $ABC$, hai trung tuyến $AM$ và $BN$ cắt nhau tại $G$. Biết $AG=6$ cm. Tính $AM$.",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,9],"B":[-6,0],"C":[6,0],"M":[0,0],"N":[3,4.5],"G":[0,3]},"edges":[["A","B"],["B","C"],["C","A"],["A","M"],["B","N"]],"offsets":{"A":[0,-20],"B":[-18,13],"C":[18,13],"M":[0,20],"N":[24,0],"G":[-20,-2]},"title":"G là giao điểm hai trung tuyến AM và BN; AG dài 6 cm","equal":[[["B","M"],["M","C"]],[["A","N"],["N","C"]]],"edgeLabels":[{"a":"A","b":"G","value":6,"text":"AG = 6 cm","offset":26,"at":0.5}]}),
          "options": [
            "A. $9$ cm",
            "B. $3$ cm",
            "C. $12$ cm",
            "D. $18$ cm"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định trọng tâm\n$G$ là giao điểm hai trung tuyến nên là trọng tâm tam giác.\nBước 2: Dùng tỉ lệ chia trung tuyến\nTrọng tâm cách đỉnh bằng $2/3$ độ dài trung tuyến: $AG=(2/3)AM$.\nBước 3: Tính trung tuyến\n$AM=6:(2/3)=6\\cdot3/2=9$ cm.\nBước 4: Kiểm tra phần còn lại\n$GM=9-6=3$ cm, nên $AG:GM=6:3=2:1$, đúng tính chất trọng tâm.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-08",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Góc xen giữa hai cạnh",
          "prompt": "Cho hai tam giác $ABC,DEF$ có $AB=DE=4$ cm, $AC=DF=6$ cm. Cần thêm dữ kiện nào để áp dụng trực tiếp trường hợp cạnh–góc–cạnh với hai cặp cạnh này?",
          "svg": svgCap2.svgGrade7Batch3("sas"),
          "options": [
            "A. $\\widehat{ABC}=\\widehat{DEF}$",
            "B. $\\widehat{BAC}=\\widehat{EDF}$",
            "C. $\\widehat{ACB}=\\widehat{DFE}$",
            "D. $\\widehat{ABC}=\\widehat{DFE}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định góc xen giữa\nHai cạnh $AB,AC$ gặp nhau tại $A$; hai cạnh $DE,DF$ gặp nhau tại $D$.\nBước 2: Chọn điều kiện\nCần $\\widehat{BAC}=\\widehat{EDF}$. Hai cặp cạnh và góc xen giữa bằng nhau cho trường hợp c.g.c. Chọn B."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-09",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hai tam giác cân ở hai phía đáy",
          "prompt": "$A,D$ ở hai phía của đường $BC$. Tam giác $ABC$ cân tại $A$, tam giác $DBC$ cân tại $D$; $\\widehat{BAC}=80^\\circ$, $\\widehat{BDC}=120^\\circ$. Tính $\\widehat{ABD}$ (góc nhỏ).",
          "svg": svgCap2.svgGrade7Batch4("double-isosceles"),
          "options": [
            "A. $20^\\circ$",
            "B. $40^\\circ$",
            "C. $100^\\circ$",
            "D. $80^\\circ$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính góc đáy phía A\n$\\widehat{ABC}=(180^\\circ-80^\\circ):2=50^\\circ$.\nBước 2: Tính góc đáy phía D\n$\\widehat{CBD}=(180^\\circ-120^\\circ):2=30^\\circ$.\nBước 3: Ghép theo vị trí hai phía\nHai tia $BA,BD$ nằm ở hai phía $BC$; góc nhỏ giữa chúng bằng $50^\\circ+30^\\circ=80^\\circ$. Chọn D."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-10",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Từ trung trực tìm khoảng cách",
          "prompt": "$P$ nằm trên đường trung trực của $AB$. Biết $PA=3x-2$ cm, $PB=x+6$ cm. Độ dài $PA$ là bao nhiêu cm?",
          "svg": svgCap2.svgGrade7Batch4("bisector-length"),
          "options": [
            "A. $4$",
            "B. $10$",
            "C. $12$",
            "D. $8$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Viết hệ thức khoảng cách\n$PA=PB$ nên $3x-2=x+6$.\nBước 2: Giải rồi đổi về đại lượng hỏi\n$2x=8$ nên $x=4$. Vì thế $PA=3\\cdot 4-2=10$ cm; $PB=4+6=10$ cm, đều dương. Chọn B."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-11",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Kiểm cấu hình có tồn tại",
          "prompt": "Cho đoạn $AB$ dài $6$ cm. Có thể có hai điểm phân biệt $M,N$ cùng phía đối với đường $AB$ sao cho $AM=AN=5$ cm và $BM=BN=5$ cm không?",
          "svg": "",
          "options": [
            "A. Có, vì 5+5>6.",
            "B. Có, vì hai tam giác có ba cạnh bằng nhau.",
            "C. Không, vì điều kiện cùng phía buộc M và N trùng nhau.",
            "D. Không, vì 5+5 nhỏ hơn 6."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Dùng khoảng cách đến hai đầu\nVì $AM=BM$ và $AN=BN$, cả $M,N$ nằm trên trung trực của $AB$. Gọi $H$ là trung điểm $AB$.\nBước 2: So hai tam giác vuông\nTam giác $AHM$ và $AHN$ vuông tại $H$, có cạnh huyền $AM=AN$ và cạnh góc vuông $AH$ chung. Chúng bằng nhau, nên $HM=HN$.\nBước 3: Dùng điều kiện cùng phía\nTrên đường trung trực, $M,N$ cùng phía $AB$ nên cùng thuộc một tia gốc $H$. Cùng khoảng cách đến $H$ buộc chúng trùng nhau, trái giả thiết phân biệt.\nBước 4: Kết luận\nKhông có cấu hình như đề. Nếu bỏ điều kiện cùng phía thì hai điểm đối xứng qua $AB$ có thể thỏa mãn. Chọn C."
        },
        {
          "id": "l7-tam-giac-bang-nhau-nang-cao-12",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Dữ kiện đủ để hai cạnh bằng nhau",
          "prompt": "Tam giác $ABC$ không suy biến, $M$ là trung điểm $BC$. Trong các điều kiện riêng lẻ sau, điều kiện nào bảo đảm $AB=AC$?",
          "svg": svgCap2.svgGrade7Batch4("midpoint-sufficient"),
          "options": [
            "A. $AM\\perp BC$",
            "B. $AM=BM$",
            "C. $\\widehat{ABC}=90^\\circ$",
            "D. $AM>BM$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xét điều kiện vuông góc\nNếu $AM\\perp BC$, hai tam giác vuông $AMB,AMC$ có $AM$ chung, $MB=MC$ và góc xen giữa cùng bằng $90^\\circ$.\nTheo c.g.c, chúng bằng nhau nên $AB=AC$.\nBước 2: Phân biệt với điều kiện khác\n$AM=BM$ hoặc $AM>BM$ chỉ nói về độ dài, không buộc $AM$ vuông góc $BC$. Góc $B$ bằng $90^\\circ$ thì $AC$ là cạnh huyền, lớn hơn $AB$. Chọn A."
        }
      ],
      "hsg": [
        {
          "id": "l7-tam-giac-bang-nhau-hsg-01",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Trung điểm nằm trên đường trung tuyến",
          "prompt": "Trong tam giác $ABC$, hai trung tuyến $AM$ và $BN$ cắt nhau tại trọng tâm $G$. Điểm $D$ là trung điểm của $AG$. Biết $DM=8$ cm. Tính $AM$ theo xăng-ti-mét.",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,12],"B":[-8,0],"C":[8,0],"M":[0,0],"N":[4,6],"G":[0,4],"D":[0,8]},"edges":[["A","B"],["B","C"],["C","A"],["A","M"],["B","N"]],"offsets":{"A":[0,-20],"B":[-18,14],"C":[18,14],"M":[0,20],"N":[24,0],"G":[-20,-2],"D":[-20,0]},"title":"G là trọng tâm; D là trung điểm AG; DM dài 8 cm","equal":[[["B","M"],["M","C"]],[["A","N"],["N","C"]],[["A","D"],["D","G"]]],"edgeLabels":[{"a":"D","b":"M","text":"DM = 8 cm","value":8,"offset":-65,"at":0.55}]}),
          "correctAnswer": "12",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chia trung tuyến theo trọng tâm\n$AG=(2/3)AM$ và $GM=(1/3)AM$.\nBước 2: Dùng trung điểm D\n$D$ là trung điểm $AG$, nên $DG=AG/2=(1/3)AM$.\nBước 3: Đọc thứ tự điểm\nTrên trung tuyến, thứ tự là $A,D,G,M$.\nVì vậy $DM=DG+GM=(2/3)AM$.\nBước 4: Tính và thử lại\n$(2/3)AM=8$ nên $AM=12$ cm.\nKhi đó $AG=8$, $DG=4$, $GM=4$ và $DM=8$ cm, đúng dữ kiện.\nBước 5: Kết luận\nĐáp số là $12$ cm."
        },
        {
          "id": "l7-tam-giac-bang-nhau-hsg-02",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai tam giác cân lồng nhau",
          "prompt": "Tam giác $ABC$ cân tại $A$ và $\\widehat{A}=30^\\circ$. Điểm $D$ nằm trong cạnh $AC$ sao cho $BD=BC$. Tính $\\widehat{ABD}$ theo độ.",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,3.732050807568877],"B":[-1,0],"C":[1,0],"D":[0.7320508075688772,1]},"edges":[["A","B"],["B","C"],["C","A"],["B","D"]],"offsets":{"A":[0,-20],"B":[-18,12],"C":[17,17],"D":[25,0]},"title":"ABC cân tại A có góc A 30 độ; D thuộc AC và BD bằng BC","equal":[[["A","B",0.35],["A","C",0.35]],[["B","D",0.55],["B","C",0.5]]],"angles":[{"at":"A","from":"B","to":"C","value":30,"radius":25,"labelRadius":50}]}),
          "correctAnswer": "45",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính góc đáy tam giác lớn\n$AB=AC$ nên $\\widehat{ABC}=\\widehat{BCA}=(180^\\circ-30^\\circ)/2=75^\\circ$.\nBước 2: Chuyển góc tại C\n$D$ nằm trong $AC$, nên tia $CD$ trùng tia $CA$.\nDo đó $\\widehat{BCD}=75^\\circ$.\nBước 3: Xét tam giác cân nhỏ\n$BD=BC$ nên tam giác $BDC$ cân tại $B$.\nHai góc đáy $BDC,BCD$ đều bằng $75^\\circ$; do đó $\\widehat{DBC}=30^\\circ$.\nBước 4: Tính góc cần tìm\n$D$ nằm trong cạnh đối diện nên tia $BD$ nằm trong góc $ABC$.\n$\\widehat{ABD}=\\widehat{ABC}-\\widehat{DBC}=75^\\circ-30^\\circ=45^\\circ$.\nBước 5: Kết luận\nĐáp số là $45$ độ."
        },
        {
          "id": "l7-tam-giac-bang-nhau-hsg-03",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Loại trường hợp tam giác suy biến",
          "prompt": "Một tam giác cân có chu vi $24$ cm và một cạnh dài $6$ cm. Tính độ dài cạnh đáy theo xăng-ti-mét.",
          "svg": "",
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Xét hai vai trò của cạnh 6\nTrong tam giác cân, cạnh dài $6$ cm có thể là cạnh bên hoặc cạnh đáy.\nPhải kiểm cả hai khả năng.\nBước 2: Giả sử là cạnh bên\nHai cạnh bên đều bằng $6$ cm, nên đáy bằng $24-6-6=12$ cm.\nBước 3: Loại trường hợp suy biến\n$6+6=12$, trái bất đẳng thức tam giác nghiêm ngặt.\nVì vậy cạnh $6$ cm không thể là cạnh bên.\nBước 4: Kiểm tra khi là đáy\nMỗi cạnh bên bằng $(24-6)/2=9$ cm.\n$9+9>6$ và $9+6>9$, nên bộ cạnh $9,9,6$ tạo được tam giác, chu vi đúng $24$.\nBước 5: Kết luận\nCạnh đáy dài $6$ cm."
        },
        {
          "id": "l7-tam-giac-bang-nhau-hsg-04",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh đoạn bằng nhau và đường song song",
          "prompt": "Cho tam giác $ABC$, $M$ là trung điểm của $BC$. Trên tia đối của tia $MA$, lấy $D$ sao cho $MD=MA$. Chứng minh $AB=DC$ và $AB\\parallel DC$.",
          "svg": svgCap2.svgGeometry({"points":{"A":[-1,4],"B":[-4,0],"C":[4,0],"M":[0,0],"D":[1,-4]},"edges":[["A","B"],["B","C"],["C","A"],["B","D"],["C","D"],["A","D"]],"offsets":{"A":[-8,-20],"B":[-20,0],"C":[20,0],"M":[20,17],"D":[8,20]},"title":"M là trung điểm BC và AD, hai tam giác ABM và DCM","equal":[[["B","M"],["M","C"]],[["A","M"],["M","D"]]]}),
          "solution": "Bước 1: Ghi dữ kiện để so sánh tam giác\nXét $\\triangle ABM$ và $\\triangle DCM$.\n$AM=DM$ theo cách lấy $D$.\n$BM=CM$ vì $M$ là trung điểm $BC$.\nBước 2: Xác định góc xen giữa\n$MA,MD$ là hai tia đối; $MB,MC$ cũng là hai tia đối.\nVì vậy $\\widehat{AMB}=\\widehat{DMC}$ là hai góc đối đỉnh.\nBước 3: Chứng minh bằng nhau và lấy hệ quả\n$\\triangle ABM=\\triangle DCM$ theo cạnh–góc–cạnh.\nSuy ra $AB=DC$ và $\\widehat{ABM}=\\widehat{DCM}$ theo các cặp tương ứng.\nBước 4: Nhận diện dấu hiệu song song\n$M$ nằm giữa $B,C$; $A,D$ ở hai phía của $BC$ vì chúng nằm trên hai tia đối gốc $M$ ngoài đường $BC$.\nHai góc $ABM,DCM$ là góc so le trong đối với đường cắt $BC$.\nChúng bằng nhau nên $AB\\parallel DC$.\nBước 5: Kết luận\n$AB=DC$ và $AB\\parallel DC$.\nTam giác $ABC$ không suy biến bảo đảm $A$ ngoài $BC$, nên các tam giác so sánh đều hợp lệ."
        },
        {
          "id": "l7-tam-giac-bang-nhau-hsg-05",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc",
            "giai-quyet-van-de"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh tia phân giác qua giao điểm",
          "prompt": "Tam giác $ABC$ cân tại $A$. Lấy $D,E$ lần lượt trong các cạnh $AB,AC$ sao cho $AD=AE$. Hai đoạn thẳng $BE$ và $CD$ cắt nhau tại $M$ trong tam giác. Chứng minh $AM$ là tia phân giác của $\\widehat{BAC}$.",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,4],"B":[-3,0],"C":[3,0],"D":[-1.5,2],"E":[1.5,2],"M":[0,1.3333333333333333]},"edges":[["A","B"],["B","C"],["C","A"],["B","E"],["C","D"],["A","M"]],"offsets":{"A":[0,-20],"B":[-18,14],"C":[18,14],"D":[-24,-4],"E":[24,-4],"M":[0,24]},"title":"ABC cân tại A, AD bằng AE, BE cắt CD tại M","equal":[[["A","B",0.8],["A","C",0.8]],[["A","D",0.35],["A","E",0.35]]]}),
          "solution": "Bước 1: Chứng minh cặp tam giác đầu bằng nhau\nXét $\\triangle ABE$ và $\\triangle ACD$.\n$AB=AC$ vì tam giác cân tại $A$.\n$AE=AD$ theo đề.\n$\\widehat{BAE}=\\widehat{CAD}=\\widehat{BAC}$ vì $E$ thuộc $AC$, $D$ thuộc $AB$.\nVậy hai tam giác bằng nhau theo cạnh–góc–cạnh.\nBước 2: Chuyển kết quả sang góc tại M\nTừ hai tam giác bằng nhau, $\\widehat{ABE}=\\widehat{ACD}$.\n$M$ thuộc $BE,CD$, nên $\\widehat{ABM}=\\widehat{ACM}$.\nBước 3: Chứng minh MB bằng MC\nTam giác $ABC$ cân cho $\\widehat{ABC}=\\widehat{ACB}$.\n$M$ nằm trong tam giác, nên $\\widehat{MBC}=\\widehat{ABC}-\\widehat{ABM}$.\nTương tự, $\\widehat{MCB}=\\widehat{ACB}-\\widehat{ACM}$.\nHai góc toàn phần bằng nhau, hai góc bị trừ cũng bằng nhau theo bước 2, nên $\\widehat{MBC}=\\widehat{MCB}$.\nTam giác $BMC$ có hai góc đáy bằng nhau, nên $MB=MC$.\nBước 4: Chứng minh cặp tam giác chứa AM bằng nhau\nXét $\\triangle ABM$ và $\\triangle ACM$.\n$AB=AC$ do giả thiết tam giác cân.\n$BM=CM$ là kết quả bước 3.\n$AM$ là cạnh chung của hai tam giác.\nHai tam giác bằng nhau theo cạnh–cạnh–cạnh, nên $\\widehat{BAM}=\\widehat{MAC}$.\nBước 5: Kết luận\nVì $M$ nằm trong tam giác, tia $AM$ nằm trong góc $BAC$.\nNó chia góc thành hai góc bằng nhau, nên là tia phân giác cần chứng minh."
        },
        {
          "id": "l7-tam-giac-bang-nhau-hsg-06",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chu vi qua hai đoạn còn lại",
          "prompt": "Tam giác $ABC$ cân tại $A$. Điểm $D,E$ lần lượt nằm trong $AB,AC$, với $AD=AE$. Biết $BD=3x-1$, $CE=x+5$, $DE=3$, $BC=9$ (cm). Tính chu vi tứ giác $BDEC$.",
          "svg": svgCap2.svgGrade7Batch4("truncated-isosceles"),
          "correctAnswer": "28",
          "dapAnChapNhan": [],
          "solution": "Bước 1: So phần còn lại hai cạnh bằng nhau\n$AB=AC$, $AD=AE$ nên $BD=AB-AD=AC-AE=CE$.\nBước 2: Khôi phục độ dài\n$3x-1=x+5$ cho $x=3$, nên $BD=CE=8$ cm.\nBước 3: Kết luận\nChu vi $BDEC$ là $8+3+8+9=28$ cm."
        },
        {
          "id": "l7-tam-giac-bang-nhau-hsg-07",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đường gãy ngắn nhất qua trung trực",
          "prompt": "Tam giác $ABC$ vuông tại $A$, có $AB=6$, $AC=8$, $BC=10$ cm. Điểm $M$ di động trên toàn bộ đường trung trực của $AB$. Giá trị nhỏ nhất của $MA+MC$ là bao nhiêu cm?",
          "svg": svgCap2.svgGrade7Batch4("shortest-midline"),
          "correctAnswer": "10",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đổi một đoạn nhờ trung trực\nVới mọi $M$ trên đường trung trực, $MA=MB$. Vì vậy $MA+MC=MB+MC$.\nBước 2: So với đoạn thẳng BC\nNếu $M$ không nằm trên đoạn $BC$, đường gãy từ $B$ qua $M$ đến $C$ dài hơn $BC$. Nếu $M$ nằm trên đoạn $BC$ thì $MB+MC=BC$.\nDo đó tổng luôn ít nhất $10$ cm.\nBước 3: Chỉ ra vị trí đạt được\nĐường trung trực cắt đoạn $BC$ tại một điểm: $B$ và $C$ ở hai phía của đường trung trực do $AC\\perp AB$. Chọn giao điểm đó làm $M$ thì $MA+MC=BC=10$ cm.\nBước 4: Kết luận\nGiá trị nhỏ nhất là $10$ cm."
        },
        {
          "id": "l7-tam-giac-bang-nhau-hsg-08",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Hai tầng góc trong các tam giác",
          "prompt": "Tam giác $ABC$ nhọn có $\\widehat{A}=40^\\circ$. Hai đường cao từ $B,C$ cắt nhau tại $H$. Trong tam giác $BHC$, hai phân giác trong tại $B,C$ cắt nhau tại $I$. Tính góc nhỏ $\\widehat{BIC}$ theo độ.",
          "svg": "",
          "correctAnswer": "160",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính hai góc tại B và C\nVì $BH\\perp AC$, $CH\\perp AB$, ta có $\\widehat{HBC}=90^\\circ-\\widehat{C}$ và $\\widehat{HCB}=90^\\circ-\\widehat{B}$.\nTam giác nhọn nên $H$ ở bên trong và các góc trên đúng là góc trong của tam giác $BHC$.\nBước 2: Cộng trước khi chia đôi\n$\\widehat{B}+\\widehat{C}=140^\\circ$. Vậy $\\widehat{HBC}+\\widehat{HCB}=180^\\circ-140^\\circ=40^\\circ$.\nBước 3: Dùng hai phân giác\nTrong tam giác $BIC$, tổng hai góc tại $B,C$ bằng một nửa $40^\\circ$, tức $20^\\circ$. Do đó $\\widehat{BIC}=180^\\circ-20^\\circ=160^\\circ$.\nBước 4: Kết luận\nGóc nhỏ $BIC$ bằng $160^\\circ$."
        },
        {
          "id": "l7-tam-giac-bang-nhau-hsg-09",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Hai lần dùng tam giác vuông bằng nhau",
          "prompt": "Tam giác $ABC$ nhọn, cân tại $A$. Lấy $M$ trong tam giác, trên phân giác góc $A$. Hạ $MP\\perp AB$, $MQ\\perp AC$ với $P,Q$ nằm trong các cạnh tương ứng. Chứng minh $MP=MQ$, $BP=CQ$ và $MB=MC$.",
          "svg": svgCap2.svgGrade7Batch4("feet-isosceles"),
          "solution": "Bước 1: So hai tam giác tại A\nHai tam giác vuông $APM,AQM$ có cạnh huyền $AM$ chung và góc nhọn $PAM=MAQ$ do $AM$ là phân giác.\nChúng bằng nhau theo cạnh huyền–góc nhọn. Vì thế $AP=AQ$ và $MP=MQ$.\nBước 2: Trừ đoạn trên hai cạnh bên\n$AB=AC$, $AP=AQ$ và $P,Q$ nằm trong các cạnh, nên $BP=AB-AP=AC-AQ=CQ$.\nBước 3: So hai tam giác tại B và C\nHai tam giác $BPM,CQM$ có $BP=CQ$, $MP=MQ$ và góc xen giữa tại $P,Q$ cùng bằng $90^\\circ$. Theo c.g.c, chúng bằng nhau.\nBước 4: Kết luận\n$MB=MC$. Cùng với bước đầu và bước hai, đã chứng minh đủ ba đẳng thức."
        },
        {
          "id": "l7-tam-giac-bang-nhau-hsg-10",
          "lop": 7,
          "chuDe": "tam-giac-bang-nhau",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chu vi và chặn một đoạn",
          "prompt": "Tam giác $ABC$ không suy biến. Đường trung trực của $BC$ cắt bên trong cạnh $AC$ tại $D$. Chứng minh chu vi tam giác $ABD$ bằng $AB+AC$ và $2AD>AC-AB$.",
          "svg": svgCap2.svgGrade7Batch4("perimeter-bisector"),
          "solution": "Bước 1: Đổi khoảng cách từ D\n$D$ trên đường trung trực của $BC$ nên $DB=DC$. Vì $D$ nằm trong $AC$, ta có $AD+DC=AC$.\nBước 2: Tính chu vi\n$AB+AD+DB=AB+AD+DC=AB+AC$.\nBước 3: Dùng tam giác không suy biến\n$B$ không nằm trên $AC$, nên tam giác $ABD$ không suy biến. Bất đẳng thức tam giác cho $AB+AD>BD$.\nThay $BD=DC=AC-AD$, được $AB+AD>AC-AD$. Chuyển vế cho $2AD>AC-AB$.\nBước 4: Kết luận\nCả hai kết luận đều đúng; dấu lớn hơn là nghiêm ngặt vì tam giác $ABD$ không suy biến."
        }
      ]
    },
    'hinh-lang-tru': {
      "kha": [
        {
          "id": "l7-hinh-lang-tru-kha-01",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đếm cạnh của hình lập phương",
          "prompt": "Một hình lập phương có bao nhiêu cạnh?",
          "svg": svgCap2.svgPrismModel({"base":[[0,0],[4,0],[4,4],[0,4]],"height":4,"title":"Hình lập phương","heightLabel":""}),
          "options": [
            "A. 6",
            "B. 8",
            "C. 12",
            "D. 24"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chia cạnh thành ba nhóm\nChọn một mặt làm mặt trên và mặt đối diện làm mặt dưới.\nBước 2: Đếm cạnh của hai mặt\nMỗi mặt vuông có $4$ cạnh; hai mặt đối diện có $4+4=8$ cạnh khác nhau.\nBước 3: Đếm các cạnh nối\nCó $4$ cạnh nối các đỉnh tương ứng của mặt trên với mặt dưới.\nBước 4: Cộng và kiểm tra không trùng\nTổng $8+4=12$ cạnh; ba nhóm không chung cạnh và phủ đủ hình.\nSố $6$ là số mặt, $8$ là số đỉnh, không phải số cạnh.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-hinh-lang-tru-kha-02",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Mặt bên của lăng trụ đứng tam giác",
          "prompt": "Một lăng trụ đứng có đáy là tam giác. Ba mặt bên của nó là những hình gì?",
          "svg": svgCap2.svgPrismModel({"base":[[0,0],[3,0],[0,4]],"height":6,"title":"Lăng trụ đứng tam giác","heightLabel":""}),
          "options": [
            "A. Ba hình tam giác.",
            "B. Ba hình chữ nhật.",
            "C. Ba hình vuông trong mọi trường hợp.",
            "D. Hai hình chữ nhật và một hình tam giác."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xét tính chất lăng trụ đứng\nCác cạnh bên vuông góc với mặt đáy và có cùng độ dài.\nBước 2: Nhận diện mỗi mặt bên\nMột cạnh đáy cùng cạnh tương ứng ở đáy kia và hai cạnh bên tạo mặt chữ nhật.\nBước 3: Đếm số mặt bên\nĐáy tam giác có $3$ cạnh, nên có $3$ mặt bên như vậy.\nBước 4: Phân biệt với hình vuông\nChiều cao không nhất thiết bằng cạnh đáy, nên các chữ nhật không luôn là hình vuông.\nHai tam giác là mặt đáy, không phải mặt bên.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-hinh-lang-tru-kha-03",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Thể tích lăng trụ đáy tam giác vuông",
          "prompt": "Lăng trụ đứng có đáy là tam giác vuông với hai cạnh góc vuông $3$ cm và $4$ cm, chiều cao lăng trụ $8$ cm. Tính thể tích.",
          "svg": svgCap2.svgPrismModel({"base":[[0,0],[3,0],[0,4]],"height":8,"title":"Đáy tam giác vuông; chiều cao 8 cm","edgeLabels":[{"edge":0,"text":"3 cm"},{"edge":2,"text":"4 cm"}],"heightLabel":"8 cm"}),
          "options": [
            "A. $96$ cm³",
            "B. $24$ cm³",
            "C. $192$ cm³",
            "D. $48$ cm³"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định đáy\nĐáy là tam giác vuông có hai cạnh góc vuông $3$ cm, $4$ cm.\nBước 2: Tính diện tích đáy\n$S=3\\cdot4/2=6$ cm².\nBước 3: Dùng chiều cao lăng trụ\nChiều cao nối hai đáy là $8$ cm, khác chiều cao của tam giác đáy.\nBước 4: Tính thể tích\n$V=S\\cdot h=6\\cdot8=48$ cm³.\nHệ số $1/2$ đã dùng khi tính đáy tam giác, không thêm lần nữa.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-hinh-lang-tru-kha-04",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cạnh bên nối hai đỉnh tương ứng",
          "prompt": "Hình vẽ là lăng trụ đứng tam giác $ABC.DEF$, trong đó $A,B,C$ tương ứng với $D,E,F$. Đoạn nào là cạnh bên?",
          "svg": svgCap2.svgGrade7Batch3("prism-label"),
          "options": [
            "A. $AD$",
            "B. $AB$",
            "C. $AE$",
            "D. $DE$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định hai đáy\nHai đáy là $ABC$ và $DEF$. Cạnh bên nối hai đỉnh tương ứng.\nBước 2: Chọn đoạn\n$AD$ nối $A$ với đỉnh tương ứng $D$. $AB,DE$ là cạnh đáy, $AE$ là đường chéo của mặt bên. Chọn A."
        },
        {
          "id": "l7-hinh-lang-tru-kha-05",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Mặt bên lớn nhất",
          "prompt": "Lăng trụ đứng có đáy tam giác vuông với ba cạnh $3,4,5$ cm, cạnh bên $6$ cm. Diện tích mặt bên lớn nhất là bao nhiêu cm²?",
          "svg": svgCap2.svgGrade7Batch3("prism-6"),
          "options": [
            "A. $18$",
            "B. $24$",
            "C. $72$",
            "D. $30$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính ba mặt bên\nChúng là hình chữ nhật có diện tích $3\\cdot 6=18$, $4\\cdot 6=24$, $5\\cdot 6=30$ cm².\nBước 2: So sánh\nGiá trị lớn nhất là $30$ cm². Chọn D."
        }
      ],
      "nangCao": [
        {
          "id": "l7-hinh-lang-tru-nang-cao-01",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Diện tích vật liệu hộp không nắp",
          "prompt": "Một hộp chữ nhật không nắp có kích thước đáy $6$ cm, $4$ cm và chiều cao $3$ cm. Bỏ qua độ dày, mép dán và phần hao hụt. Cần bao nhiêu cm² vật liệu để làm hộp?",
          "svg": svgCap2.svgPrismModel({"base":[[0,0],[6,0],[6,4],[0,4]],"height":3,"title":"Hộp không nắp","open":true,"edgeLabels":[{"edge":0,"text":"6 cm"},{"edge":1,"text":"4 cm"}],"heightLabel":"3 cm"}),
          "options": [
            "A. 84",
            "B. 108",
            "C. 60",
            "D. 72"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định các mặt cần vật liệu\nHộp không nắp có một đáy và bốn mặt bên.\nBước 2: Tính đáy\n$6\\cdot4=24$ cm².\nBước 3: Tính các mặt bên\nHai mặt dài có tổng $2\\cdot6\\cdot3=36$ cm².\nHai mặt còn lại có tổng $2\\cdot4\\cdot3=24$ cm².\nBước 4: Cộng diện tích\n$24+36+24=84$ cm².\nKhông cộng thêm mặt nắp hoặc mép dán vì đề đã loại chúng.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-02",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa"
          ],
          "dang": "chon",
          "title": "Thể tích vật chìm làm dâng nước",
          "prompt": "Bể chữ nhật có diện tích đáy trong lòng bể $200$ cm². Khi thả một vật chìm hoàn toàn, mực nước tăng từ $5$ cm lên $6{,}5$ cm, chưa tràn bể. Vật không hút nước, không có bọt khí mắc lại và không thêm hay mất nước. Thể tích vật là bao nhiêu cm³?",
          "svg": "",
          "options": [
            "A. 1300",
            "B. 1000",
            "C. 300",
            "D. 150"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tính mức nước tăng\n$6{,}5-5=1{,}5$ cm.\nChỉ phần tăng thêm liên quan đến thể tích vật chiếm chỗ.\nBước 2: Tính thể tích phần dâng\nBể có đáy không đổi $200$ cm², nên phần dâng có thể tích $200\\cdot1{,}5=300$ cm³.\nBước 3: Liên hệ với vật\nVật chìm hoàn toàn nên toàn bộ thể tích vật đẩy nước lên.\nKhông hút nước, không bọt khí và không mất nước bảo đảm phần dâng chỉ do vật chiếm chỗ.\nBước 4: Kiểm tra đại lượng cần tính\n$200\\cdot6{,}5$ là thể tích dưới mực nước mới gồm cả vật, không phải riêng thể tích vật.\nBước 5: Kết luận\nThể tích vật là $300$ cm³. Chọn C."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-03",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tìm chiều cao từ diện tích xung quanh",
          "prompt": "Lăng trụ đứng có đáy tam giác cạnh $3$ cm, $4$ cm, $5$ cm và diện tích xung quanh $96$ cm². Chiều cao lăng trụ bằng bao nhiêu cm?",
          "svg": svgCap2.svgPrismModel({"base":[[0,0],[3,0],[0,4]],"height":8,"title":"Lăng trụ đáy tam giác 3,4,5","edgeLabels":[{"edge":0,"text":"3"},{"edge":1,"text":"5"},{"edge":2,"text":"4"}],"heightLabel":"h"}),
          "options": [
            "A. 16",
            "B. 8",
            "C. 24",
            "D. 12"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tính chu vi đáy\n$p=3+4+5=12$ cm.\nBước 2: Dùng diện tích xung quanh\nLăng trụ đứng có $S_{xq}=p\\cdot h$, nên $12h=96$.\nBước 3: Tìm chiều cao\n$h=96/12=8$ cm.\nBước 4: Kiểm tra hình và đơn vị\n$3+4>5$ nên đáy tạo được tam giác; $h=8>0$.\n$12$ cm nhân $8$ cm được $96$ cm², đúng diện tích đã cho.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-04",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Tìm cạnh đáy từ diện tích xung quanh",
          "prompt": "Lăng trụ đứng có đáy chữ nhật với hai cạnh $a$ cm và $3$ cm, chiều cao $10$ cm. Diện tích xung quanh là $140$ cm². Tìm $a$.",
          "svg": svgCap2.svgPrismModel({"base":[[0,0],[4,0],[4,3],[0,3]],"height":10,"title":"Đáy chữ nhật a × 3 cm","edgeLabels":[{"edge":0,"text":"a"},{"edge":1,"text":"3 cm"}],"heightLabel":"10 cm"}),
          "options": [
            "A. 7",
            "B. 11",
            "C. 2",
            "D. 4"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Viết chu vi đáy\nĐáy chữ nhật cạnh $a$ và $3$ cm có chu vi $2(a+3)$ cm.\nBước 2: Lập công thức diện tích\n$S_{xq}=2(a+3)\\cdot10=140$.\nBước 3: Tìm cạnh chưa biết\nChia cho $20$ được $a+3=7$, nên $a=4$ cm.\nBước 4: Kiểm tra\n$a>0$, đáy hợp lệ; $2(4+3)\\cdot10=140$ cm².\nCông thức dùng chu vi đáy, không dùng diện tích đáy $3a$.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-05",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đọc hình khai triển lăng trụ tam giác",
          "prompt": "Hình khai triển gồm ba hình chữ nhật ghép thành dải, có bề rộng lần lượt $3,4,5$ cm; hai tam giác vuông cạnh $3,4,5$ cm gắn như hình. Khi dùng thước đo cạnh chung của các hình chữ nhật theo phương dọc, được $6$ cm. Chiều cao lăng trụ sau khi gấp là bao nhiêu cm?",
          "svg": svgCap2.svgGeometry({"points":{"R0":[0,0],"R1":[3,0],"R2":[7,0],"R3":[12,0],"S0":[0,6],"S1":[3,6],"S2":[7,6],"S3":[12,6],"T":[3,-3],"U":[3,9]},"edges":[["R0","R3"],["S0","S3"],["R0","S0"],["R1","S1"],["R2","S2"],["R3","S3"],["R1","T"],["T","R2"],["S1","U"],["U","S2"]],"labels":{"R0":"","R1":"","R2":"","R3":"","S0":"","S1":"","S2":"","S3":"","T":"","U":""},"edgeLabels":[{"a":"R0","b":"R1","text":"3 cm"},{"a":"R1","b":"R2","text":"4 cm"},{"a":"R2","b":"R3","text":"5 cm"},{"a":"R3","b":"S3","text":"6 cm"}],"title":"Hình khai triển lăng trụ đứng tam giác 3,4,5; chiều cao 6"}),
          "options": [
            "A. 6",
            "B. 3",
            "C. 4",
            "D. 12"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Nhận diện các mặt trên hình khai triển\nBa chữ nhật là ba mặt bên; hai tam giác là hai đáy.\nBước 2: Ghép các cạnh đáy\nCác bề rộng $3,4,5$ cm ghép với ba cạnh tương ứng của tam giác đáy.\nBước 3: Nhận diện cạnh bên khi gấp\nCạnh dọc chung của dải chữ nhật nối hai đáy sau khi gấp.\nTrong lăng trụ đứng, cạnh bên này chính là chiều cao.\nBước 4: Đọc số đo đúng\nCạnh dọc dài $6$ cm nên chiều cao bằng $6$ cm.\nTổng $3+4+5=12$ cm là chu vi đáy, không phải chiều cao.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-06",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đổi đơn vị thể tích",
          "prompt": "Một mô hình có thể tích $0{,}024$ m³. Giá trị đó bằng bao nhiêu dm³?",
          "svg": "",
          "options": [
            "A. 2,4",
            "B. 240",
            "C. 24",
            "D. 0,24"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Nhắc đổi độ dài\n$1$ m bằng $10$ dm.\nBước 2: Đổi theo ba chiều\nMột khối lập phương cạnh $1$ m có kích thước $10\\times10\\times10$ dm.\nVì vậy $1$ m³ bằng $1000$ dm³.\nBước 3: Đổi thể tích đã cho\n$0{,}024\\cdot1000=24$ dm³.\nBước 4: Kiểm tra chiều đổi\nĐơn vị dm³ nhỏ hơn m³ nên số đo phải tăng khi đổi sang dm³.\nKhông chỉ nhân $10$ như khi đổi độ dài.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-07",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Đọc thước trước khi tính mô hình",
          "prompt": "Một cạnh của mô hình hộp chữ nhật đặt trên thước có hai đầu tại vạch $2{,}4$ cm và $8{,}4$ cm như hình. Hai kích thước còn lại đo được là $4$ cm và $3$ cm. Thể tích mô hình là bao nhiêu cm³?",
          "svg": svgCap2.svgMeasurementRuler(),
          "options": [
            "A. 100,8",
            "B. 129,6",
            "C. 28,8",
            "D. 72"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đọc hai đầu trên thước\nCạnh bắt đầu tại $2{,}4$ cm và kết thúc tại $8{,}4$ cm.\nBước 2: Tính độ dài thực\nĐộ dài là hiệu $8{,}4-2{,}4=6$ cm vì đầu cạnh không đặt tại vạch $0$.\nBước 3: Dùng công thức thể tích hộp\nBa kích thước là $6,4,3$ cm, nên $V=6\\cdot4\\cdot3$.\nBước 4: Tính và kiểm tra đơn vị\n$V=72$ cm³; tích ba độ dài có đơn vị thể tích.\nKhông lấy $8{,}4$ cm làm chiều dài cạnh.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-08",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Chu vi dải mặt bên",
          "prompt": "Trải ba mặt bên của lăng trụ đứng thành một dải chữ nhật như hình, không chồng lấn. Ba cạnh đáy dài $3,4,5$ cm; cạnh bên dài $7$ cm. Chu vi đường bao ngoài của dải là bao nhiêu cm?",
          "svg": svgCap2.svgGrade7Batch3("strip"),
          "options": [
            "A. $84$",
            "B. $38$",
            "C. $66$",
            "D. $24$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định kích thước dải\nDải có chiều dài $3+4+5=12$ cm và chiều rộng $7$ cm.\nBước 2: Chỉ tính đường bao ngoài\nCác nét gấp ở giữa không thuộc chu vi. Chu vi là $2(12+7)=38$ cm. Chọn B."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-09",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đổi cặp mặt được gọi là đáy",
          "prompt": "Cùng một hộp chữ nhật có ba kích thước $2,3,5$ cm. Lần I chọn mặt $2\\times3$ làm đáy; lần II chọn mặt $3\\times5$ làm đáy. Diện tích xung quanh lần I lớn hơn lần II bao nhiêu cm²?",
          "svg": svgCap2.svgGrade7Batch3("box235"),
          "options": [
            "A. $0$",
            "B. $9$",
            "C. $18$",
            "D. $82$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tính theo đáy lần I\nChiều cao là $5$ cm, nên $S_I=2(2+3)\\cdot 5=50$ cm².\nBước 2: Tính theo đáy lần II\nChiều cao là $2$ cm, nên $S_{II}=2(3+5)\\cdot 2=32$ cm².\nBước 3: So sánh\nHiệu là $50-32=18$ cm². Tổng diện tích sáu mặt không đổi, nhưng nhóm bốn mặt bên thay đổi. Chọn C."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-10",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phủ đúng hai mặt được chỉ định",
          "prompt": "Lăng trụ đứng có đáy tam giác vuông với hai cạnh góc vuông $3,4$ cm và cạnh huyền $5$ cm; cạnh bên $10$ cm. Chỉ sơn hai mặt bên ứng với các cạnh $3$ và $4$ cm. Sơn hai lớp, mỗi lớp dùng $0{,}1$ g/cm², không hao hụt. Cần bao nhiêu gam sơn?",
          "svg": svgCap2.svgGrade7Batch3("prism-paint"),
          "options": [
            "A. $14$",
            "B. $7$",
            "C. $24$",
            "D. $12$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định phần được sơn\nHai mặt cần sơn có tổng diện tích $(3+4)\\cdot 10=70$ cm². Mặt ứng với cạnh $5$ cm không sơn.\nBước 2: Tính lượng sơn\nMột lớp cần $70\\cdot 0{,}1=7$ g. Hai lớp cần $14$ g. Chọn A."
        },
        {
          "id": "l7-hinh-lang-tru-nang-cao-11",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Từ khung cạnh đến hai vòng dây",
          "prompt": "Khung hộp chữ nhật có ba kích thước $x,x+2,2x-1$ cm, đều dương. Tổng độ dài 12 cạnh là $100$ cm. Buộc hai vòng dây: một vòng quanh hình chữ nhật cạnh $x,x+2$, một vòng quanh hình chữ nhật cạnh $x+2,2x-1$. Mỗi vòng thêm $2$ cm để thắt nút. Tổng dây cần dùng là bao nhiêu cm?",
          "svg": svgCap2.svgGrade7Batch3("box6811"),
          "options": [
            "A. $66$",
            "B. $68$",
            "C. $100$",
            "D. $70$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Khôi phục kích thước\nMỗi kích thước xuất hiện trên bốn cạnh, nên $4(x+x+2+2x-1)=100$.\n$4x+1=25$, được $x=6$. Ba kích thước là $6,8,11$ cm, đều dương.\nBước 2: Tính hai vòng\nHai chu vi là $2(6+8)=28$ cm và $2(8+11)=38$ cm.\nBước 3: Thêm phần thắt nút\nCần $28+38+2+2=70$ cm. Chọn D."
        }
      ],
      "hsg": [
        {
          "id": "l7-hinh-lang-tru-hsg-01",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Thể tích khối ghép có phần giao",
          "prompt": "Hai khối hộp cùng cao $4$ cm có đáy lần lượt $6\\times2$ cm và $2\\times5$ cm, chồng khít lên nhau ở phần đáy $2\\times2$ cm. Mặt đáy khối hợp có hình chữ L như hình. Tính thể tích khối hợp theo cm³; phần giao chỉ tính một lần.",
          "svg": svgCap2.svgGeometry({"points":{"A":[0,0],"B":[6,0],"C":[6,2],"D":[2,2],"E":[2,5],"F":[0,5]},"edges":[["A","B"],["B","C"],["C","D"],["D","E"],["E","F"],["F","A"]],"labels":{"A":"","B":"","C":"","D":"","E":"","F":""},"edgeLabels":[{"a":"A","b":"B","text":"6 cm","value":6},{"a":"B","b":"C","text":"2 cm","value":2},{"a":"E","b":"F","text":"2 cm","value":2},{"a":"F","b":"A","text":"5 cm","value":5}],"title":"Mặt đáy chữ L của khối cao 4 cm"}),
          "correctAnswer": "72",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính khối thứ nhất\n$V_1=6\\cdot2\\cdot4=48$ cm³.\nBước 2: Tính khối thứ hai\n$V_2=2\\cdot5\\cdot4=40$ cm³.\nBước 3: Xác định phần chung\nHai khối chồng khít ở đáy $2\\times2$ cm và cùng cao $4$ cm.\nPhần giao có thể tích $2\\cdot2\\cdot4=16$ cm³.\nBước 4: Tránh đếm trùng\nTrong $V_1+V_2$, phần giao đã được tính hai lần, trong khi khối hợp chỉ cần một lần.\nVì vậy $V=48+40-16=72$ cm³.\nBước 5: Kết luận\nĐáp số là $72$ cm³.\nKiểm tra bằng diện tích đáy hợp: $(12+10-4)\\cdot4=72$."
        },
        {
          "id": "l7-hinh-lang-tru-hsg-02",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đếm khối tiếp xúc đúng hai mặt hộp",
          "prompt": "Hộp chữ nhật kín có kích thước trong lòng $10$ cm, $8$ cm, $6$ cm. Xếp kín hộp bằng các khối lập phương cạnh $2$ cm thành hàng song song với cạnh hộp, không cắt khối và không có khe hở. Có bao nhiêu khối nhỏ tiếp xúc đúng hai mặt trong của hộp (không tính các khối ở góc tiếp xúc ba mặt)?",
          "svg": "",
          "correctAnswer": "24",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đếm số khối theo ba chiều\nCác chiều hộp chia cho cạnh khối nhỏ cho $10/2=5$, $8/2=4$, $6/2=3$ khối.\nBước 2: Xác định vị trí cần đếm\nKhối tiếp xúc đúng hai mặt nằm dọc cạnh hộp nhưng không ở góc.\nKhối ở góc chạm ba mặt phải loại; khối giữa mặt chỉ chạm một mặt.\nBước 3: Đếm theo từng hướng cạnh\nCó bốn cạnh theo chiều dài, mỗi cạnh còn $5-2=3$ khối sau bỏ hai đầu: $12$ khối.\nBốn cạnh theo chiều rộng cho $4(4-2)=8$ khối.\nBốn cạnh theo chiều cao cho $4(3-2)=4$ khối.\nBước 4: Kiểm tra không trùng hoặc thiếu\nBa nhóm không trùng vì đã bỏ các góc giao nhau.\nMỗi chiều có hơn $2$ khối, nên không khối nào chạm đồng thời hai mặt đối diện gây trường hợp đặc biệt.\nBước 5: Kết luận\nTổng là $12+8+4=24$ khối."
        },
        {
          "id": "l7-hinh-lang-tru-hsg-03",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "So sánh hai hộp không nắp",
          "prompt": "Hai hộp chữ nhật không nắp có kích thước đáy và chiều cao lần lượt: A là $6\\times4\\times3$ cm; B là $8\\times3\\times3$ cm. Bỏ qua độ dày và mép dán. Hộp dùng ít vật liệu hơn tiết kiệm được bao nhiêu cm² so với hộp kia?",
          "svg": "",
          "correctAnswer": "6",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Nêu công thức vật liệu\nHộp không nắp cần diện tích một đáy cộng bốn mặt bên: $S=ab+2(a+b)h$.\nBước 2: Tính hộp A\n$S_A=6\\cdot4+2(6+4)\\cdot3=24+60=84$ cm².\nBước 3: Tính hộp B\n$S_B=8\\cdot3+2(8+3)\\cdot3=24+66=90$ cm².\nBước 4: So sánh\nHai đáy cùng diện tích nhưng chu vi khác nhau, nên phần mặt bên khác nhau.\nA dùng ít hơn $90-84=6$ cm².\nBước 5: Kết luận\nHộp A tiết kiệm $6$ cm² vật liệu."
        },
        {
          "id": "l7-hinh-lang-tru-hsg-04",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh diện tích tăng khi cắt khối",
          "prompt": "Một hộp chữ nhật có đáy cạnh $a,b>0$, đường chéo đáy dài $c$ và chiều cao $h>0$. Cắt theo mặt phẳng đứng qua một đường chéo đáy, được hai lăng trụ đứng tam giác. Hình minh hoạ khai triển một lăng trụ sau khi cắt. Chứng minh tổng diện tích xung quanh của hai lăng trụ bằng diện tích xung quanh hộp ban đầu cộng $2ch$. Giải thích phần diện tích tăng thêm.",
          "svg": svgCap2.svgGeometry({"points":{"R0":[0,0],"R1":[3,0],"R2":[7,0],"R3":[12,0],"S0":[0,6],"S1":[3,6],"S2":[7,6],"S3":[12,6],"T":[3,-3],"U":[3,9]},"edges":[["R0","R3"],["S0","S3"],["R0","S0"],["R1","S1"],["R2","S2"],["R3","S3"],["R1","T"],["T","R2"],["S1","U"],["U","S2"]],"labels":{"R0":"","R1":"","R2":"","R3":"","S0":"","S1":"","S2":"","S3":"","T":"","U":""},"edgeLabels":[{"a":"R0","b":"R1","text":"a"},{"a":"R1","b":"R2","text":"b"},{"a":"R2","b":"R3","text":"c"},{"a":"R3","b":"S3","text":"h"}],"title":"Dải mặt bên có bề rộng a b c và chiều cao h"}),
          "solution": "Bước 1: Xác định các mặt bên mới\nMặt cắt đứng theo đường chéo đáy chia hộp thành hai lăng trụ tam giác.\nMỗi đáy tam giác có ba cạnh $a,b,c$; chiều cao vẫn là $h$.\nBước 2: Tính diện tích mỗi lăng trụ\nBa mặt bên là chữ nhật có diện tích $ah,bh,ch$.\nTổng mỗi lăng trụ là $(a+b+c)h$.\nBước 3: So sánh với hộp ban đầu\nHai lăng trụ có tổng $2(a+b+c)h$.\nDiện tích xung quanh hộp ban đầu là $2(a+b)h$.\nBước 4: Tính và giải thích phần tăng\nHiệu bằng $2(a+b+c)h-2(a+b)h=2ch$.\nMặt cắt tạo hai mặt chữ nhật mới, mỗi mặt rộng $c$, cao $h$; các mặt bên cũ vẫn được tính đủ.\nBước 5: Kết luận\nTổng diện tích xung quanh mới bằng diện tích cũ cộng $2ch$.\n$a,b,h>0$ bảo đảm hai đáy tam giác và các mặt cắt không suy biến."
        },
        {
          "id": "l7-hinh-lang-tru-hsg-05",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh giới hạn thể tích",
          "prompt": "Lăng trụ đứng có đáy chữ nhật cạnh $a,b>0$ và chiều cao $h>0$, biết $a+b=10$ cm. Chứng minh thể tích không vượt $25h$ cm³ và nêu khi nào đạt dấu bằng. Có thể dùng đẳng thức $(a+b)^2-4ab=(a-b)^2$.",
          "svg": "",
          "solution": "Bước 1: Liên hệ thể tích với diện tích đáy\n$V=abh$; vì $h>0$ cố định trong phép so sánh, ta cần chứng minh $ab\\le25$.\nBước 2: Dùng đẳng thức được cho\n$(a+b)^2-4ab=(a-b)^2\\ge0$ vì bình phương không âm.\nBước 3: Thay tổng hai cạnh\n$a+b=10$ nên $100-4ab\\ge0$, hay $ab\\le25$.\nBước 4: Suy ra thể tích và điều kiện bằng\nNhân với $h>0$ giữ chiều so sánh: $V=abh\\le25h$.\nDấu bằng chỉ khi $(a-b)^2=0$, tức $a=b$.\nBước 5: Kết luận\nKết hợp $a+b=10$, dấu bằng xảy ra khi $a=b=5$ cm.\nĐáy vuông cạnh $5$ cm hợp lệ và cho $V=25h$ cm³, nên giới hạn đạt được."
        },
        {
          "id": "l7-hinh-lang-tru-hsg-06",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chọn mặt tiếp xúc để giảm phần phủ",
          "prompt": "Lăng trụ đứng đặc có đáy tam giác vuông cạnh $3,4,5$ cm và cạnh bên $12$ cm. Đặt khối nằm ổn định trên một mặt phẳng, một mặt của khối tiếp xúc hoàn toàn với bàn. Sơn tất cả phần bề mặt còn lại. Diện tích nhỏ nhất cần sơn là bao nhiêu cm²?",
          "svg": svgCap2.svgGrade7Batch3("prism-12"),
          "correctAnswer": "96",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính toàn bộ bề mặt\nMỗi đáy có diện tích $3\\cdot 4:2=6$ cm². Ba mặt bên có tổng $(3+4+5)\\cdot 12=144$ cm².\nKhối có năm mặt, tổng diện tích là $144+2\\cdot 6=156$ cm².\nBước 2: Chọn mặt bị che lớn nhất\nCác diện tích mặt là $6,6,36,48,60$ cm². Đặt mặt $5\\times12$ tiếp xúc bàn sẽ che được $60$ cm², lớn nhất.\nBước 3: Kết luận\nDiện tích nhỏ nhất cần sơn là $156-60=96$ cm²."
        },
        {
          "id": "l7-hinh-lang-tru-hsg-07",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Ba cách xếp chồng cùng các tấm",
          "prompt": "Có $24$ khối hộp đặc giống nhau kích thước $1\\times2\\times3$ cm. Chồng thành một cột thẳng, các mặt tiếp xúc khít nhau, không so le. Cả cột dùng cùng một hướng đặt; chiều dày mỗi tầng có thể là $1$, $2$ hoặc $3$ cm. Diện tích toàn phần lớn nhất và nhỏ nhất của cột chênh nhau bao nhiêu cm²?",
          "svg": "",
          "correctAnswer": "184",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Liệt kê đúng ba cột\nChiều dày $1$ cho cột $2\\times3\\times24$; chiều dày $2$ cho cột $1\\times3\\times48$; chiều dày $3$ cho cột $1\\times2\\times72$.\nBước 2: Tính diện tích ngoài\nBa diện tích lần lượt là $2(6+48+72)=252$, $2(3+48+144)=390$, $2(2+72+144)=436$ cm². Các mặt nằm giữa hai tầng không thuộc bề mặt ngoài.\nBước 3: Kết luận\nChênh lệch cần tìm là $436-252=184$ cm²."
        },
        {
          "id": "l7-hinh-lang-tru-hsg-08",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khôi phục hộp có cạnh nguyên",
          "prompt": "Một hộp chữ nhật có ba kích thước là số nguyên dương (cm), thể tích $48$ cm³ và tổng độ dài 12 cạnh là $44$ cm. Tính diện tích toàn phần theo cm².",
          "svg": "",
          "correctAnswer": "80",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Chuyển dữ kiện và sắp cạnh\nGọi $a\\le b\\le c$ là ba kích thước. Có $abc=48$ và $a+b+c=11$. Nếu $a\\ge4$ thì thể tích ít nhất $64$, nên $a$ chỉ có thể là $1,2,3$.\nBước 2: Loại hai khả năng đầu\nVới $a=1$, các cặp $b\\le c$ có tích $48$ là $(1,48),(2,24),(3,16),(4,12),(6,8)$; không cặp nào có tổng $10$.\nVới $a=2$, các cặp $2\\le b\\le c$ có tích $24$ là $(2,12),(3,8),(4,6)$; không cặp nào có tổng $9$.\nBước 3: Xét khả năng còn lại\nVới $a=3$, cần $bc=16$, $b+c=8$ và $b\\ge3$. Chỉ có $b=c=4$. Bộ $3,4,4$ thỏa đủ hai dữ kiện.\nBước 4: Kết luận\nDiện tích toàn phần là $2(3\\cdot 4+3\\cdot 4+4\\cdot 4)=80$ cm²."
        },
        {
          "id": "l7-hinh-lang-tru-hsg-09",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Thể tích giữ nguyên chưa đủ giữ diện tích",
          "prompt": "Hộp chữ nhật có kích thước $a,b,c>0$. Hộp mới có kích thước $2a,3b,c/6$. Chứng minh hai hộp cùng thể tích. Diện tích toàn phần có nhất thiết bằng nhau không? Cho một ví dụ cụ thể để giải thích.",
          "svg": "",
          "solution": "Bước 1: So thể tích\nThể tích mới là $(2a)(3b)(c/6)=abc$, bằng thể tích cũ. Mọi kích thước mới đều dương.\nBước 2: Kiểm diện tích qua một ví dụ\nChọn $a=b=c=1$ cm. Hộp cũ có diện tích $6$ cm².\nHộp mới có kích thước $2,3,1/6$ cm và diện tích $2(6+1/3+1/2)=41/3$ cm².\nBước 3: Kết luận\nThể tích luôn bằng nhau. Diện tích toàn phần không nhất thiết bằng nhau, vì $41/3\\ne6$."
        },
        {
          "id": "l7-hinh-lang-tru-hsg-10",
          "lop": 7,
          "chuDe": "hinh-lang-tru",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Cùng một khối qua ba cách gọi đáy",
          "prompt": "Hộp chữ nhật có ba kích thước $a,b,c>0$. Có thể chọn từng cặp mặt đối diện làm hai đáy. Chứng minh thể tích và diện tích toàn phần không phụ thuộc cách chọn đó; giải thích vì sao diện tích xung quanh có thể thay đổi.",
          "svg": svgCap2.svgGrade7Batch3("box123"),
          "solution": "Bước 1: Theo dõi thể tích\nBa cách tính là $(ab)c$, $(ac)b$, $(bc)a$. Đều bằng $abc$ do tính giao hoán và kết hợp của phép nhân.\nBước 2: Theo dõi các mặt\nSáu mặt gồm hai mặt diện tích $ab$, hai mặt $ac$, hai mặt $bc$. Tổng luôn là $2ab+2ac+2bc$, dù gọi cặp nào là đáy.\nBước 3: Phân biệt diện tích xung quanh\nXung quanh chỉ tính bốn mặt ngoài hai đáy. Chọn đáy $ab$ thì được $2ac+2bc$; chọn đáy $ac$ thì được $2ab+2bc$.\nChẳng hạn $a=1,b=2,c=3$ cho hai giá trị $18$ và $16$, khác nhau.\nBước 4: Kết luận\nThể tích và tổng sáu mặt không đổi. Diện tích xung quanh phụ thuộc cặp mặt được chọn làm đáy."
        }
      ]
    },
    'xac-suat-thuc-nghiem': {
      "kha": [
        {
          "id": "l7-xac-suat-thuc-nghiem-kha-01",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận diện xác suất thực nghiệm",
          "prompt": "Sau nhiều lần thử hợp lệ, cách nào cho xác suất thực nghiệm của biến cố $A$?",
          "svg": "",
          "options": [
            "A. Lấy số loại kết quả có thể chia số lần thử.",
            "B. Lấy số lần A xuất hiện chia tổng số lần thử.",
            "C. Lấy tổng số lần thử chia số lần A xuất hiện.",
            "D. Luôn ghi 1/2 vì chỉ có xảy ra hoặc không xảy ra."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định dữ liệu cần dùng\nCần số lần biến cố $A$ xuất hiện và tổng số lần thử hợp lệ.\nBước 2: Nêu điều kiện mẫu\nTổng số lần thử phải lớn hơn $0$ để phép chia xác định.\nBước 3: Viết cách tính\nXác suất thực nghiệm bằng số lần $A$ xuất hiện chia tổng số lần thử.\nĐây là tỉ lệ quan sát trong dữ liệu đã thu.\nBước 4: Phân biệt cách đếm sai\nKhông lấy số loại kết quả làm tử, không đảo thương.\nHai khả năng xảy ra và không xảy ra không buộc số lần quan sát phải chia đôi.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-kha-02",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Tính tần số tương đối từ quan sát",
          "prompt": "Một nhóm tung đồng xu 40 lần hợp lệ, ghi nhận mặt ngửa 18 lần. Xác suất thực nghiệm của biến cố “xuất hiện mặt ngửa” trong đợt này bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac9{20}$",
            "B. $\\frac{11}{20}$",
            "C. $\\frac12$",
            "D. $\\frac{20}{9}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định tổng số lần\nCó $40$ lần tung hợp lệ, nên mẫu số là $40$.\nBước 2: Xác định số lần ngửa\nMặt ngửa xuất hiện $18$ lần, nên tử số là $18$.\nBước 3: Tính tỉ lệ thực nghiệm\n$18/40=9/20$ sau chia tử và mẫu cho $2$.\nBước 4: Giữ đúng ý nghĩa dữ liệu\nĐây là kết quả riêng của đợt đã quan sát.\nKhông thay nó bằng $1/2$ dựa vào hình dung về đồng xu.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-kha-03",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Hiểu đúng kết quả không xuất hiện trong mẫu",
          "prompt": "Trong 12 lần quay một vòng quay, nhóm không ghi nhận ô xanh lần nào. Kết luận nào đúng với dữ liệu này?",
          "svg": "",
          "options": [
            "A. Ô xanh không thể xuất hiện trong bất kì lần quay nào.",
            "B. Lần quay tiếp theo chắc chắn xuất hiện ô xanh.",
            "C. Vòng quay chắc chắn bị hỏng.",
            "D. Xác suất thực nghiệm của ô xanh trong 12 lần này bằng 0; chưa đủ để kết luận ô xanh không thể xuất hiện."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Ghi số lần quan sát\nTrong $12$ lần quay, có $0$ lần vào ô xanh.\nBước 2: Tính xác suất thực nghiệm\n$0/12=0$ vì tổng lần thử khác $0$.\nBước 3: Giới hạn kết luận\nSố $0$ chỉ nói ô xanh chưa xuất hiện trong mẫu $12$ lần này.\nMột mẫu hữu hạn không đủ chứng minh ô xanh không thể xuất hiện ở mọi lần quay.\nBước 4: Loại các suy đoán khác\nDữ liệu không bảo đảm lần tiếp theo sẽ ra xanh, cũng không chứng minh vòng quay hỏng.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-kha-04",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ý nghĩa tử số trong bản ghi",
          "prompt": "Gieo thử $20$ hạt, có $16$ hạt nảy mầm. Báo cáo ghi xác suất thực nghiệm nảy mầm là $16/20$. Số $16$ biểu thị điều gì?",
          "svg": "",
          "options": [
            "A. Tổng số hạt đem thử.",
            "B. Số hạt chưa nảy mầm.",
            "C. Số hạt chắc chắn nảy trong lần thử tới.",
            "D. Số hạt đã nảy mầm trong dữ liệu này."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Đọc dữ liệu quan sát\nMẫu số đếm tổng số hạt đã thử, tử số đếm số lần kết quả cần xét xuất hiện.\nBước 2: Kết luận\n$16$ là số hạt đã nảy mầm trong lần thử này, không phải số hạt chắc chắn nảy ở lần thử tới. Chọn D."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-kha-05",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đọc một bản ghi ngắn",
          "prompt": "Tám lần thử có kết quả theo thứ tự: A, B, A, A, B, B, A, B. Xác suất thực nghiệm của A trong bản ghi này là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $1/4$",
            "B. $1/2$",
            "C. $4/5$",
            "D. $2$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Đếm trên bản ghi\nA xuất hiện ở vị trí $1,3,4,7$, tổng $4$ lần trong $8$ lần thử.\nBước 2: Lập tỷ số\nXác suất thực nghiệm là $4/8=1/2$. Chọn B."
        }
      ],
      "nangCao": [
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-01",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Lấy tần số của biến cố bổ sung",
          "prompt": "Trong 50 lần thử hợp lệ, một thiết bị phát tín hiệu 17 lần. Xác suất thực nghiệm của biến cố “không phát tín hiệu” bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac{17}{50}$",
            "B. $\\frac{17}{33}$",
            "C. $\\frac{33}{50}$",
            "D. $\\frac12$"
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Chia hai loại kết quả\nMỗi lần hoặc phát tín hiệu hoặc không phát; hai nhóm không trùng và phủ đủ $50$ lần.\nBước 2: Đếm lần không phát\n$50-17=33$ lần.\nBước 3: Tính tỉ lệ cần hỏi\nXác suất thực nghiệm không phát bằng $33/50$.\nBước 4: Kiểm tra bằng phần còn lại\n$17/50+33/50=1$, đúng tổng hai nhóm kết quả.\nKhông dùng $17/50$, vì đó là tỉ lệ phát tín hiệu.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-02",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Gộp các loại kết quả rời nhau",
          "prompt": "80 lần thử cho đúng một màu mỗi lần: đỏ 24, vàng 16, xanh 40. Xác suất thực nghiệm của biến cố “đỏ hoặc vàng” là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac12$",
            "B. $\\frac3{10}$",
            "C. $\\frac15$",
            "D. $\\frac34$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định biến cố\n“Đỏ hoặc vàng” gồm các lần ra đỏ và các lần ra vàng.\nBước 2: Kiểm tra có trùng không\nMỗi lần cho đúng một màu, nên không có lần nào vừa đỏ vừa vàng.\nĐược cộng trực tiếp hai số đếm.\nBước 3: Đếm và tính tỉ lệ\nCó $24+16=40$ lần thuận lợi trong $80$ lần.\nXác suất thực nghiệm bằng $40/80=1/2$.\nBước 4: Kiểm tra tổng\nCộng thêm $40$ lần xanh được $80$, đúng toàn bộ dữ liệu.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-03",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Xác định đơn vị một lần thử",
          "prompt": "Mỗi lần thử gồm tung đồng xu hai lượt và ghi cả cặp. Trong 20 cặp hợp lệ có 6 cặp ngửa-ngửa. Xác suất thực nghiệm của biến cố “cả hai lượt đều ngửa” là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac3{20}$",
            "B. $\\frac3{10}$",
            "C. $\\frac35$",
            "D. $\\frac14$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định đơn vị phép thử\nMột lần thử gồm cả hai lượt tung và ghi một cặp kết quả.\nVì vậy có $20$ phép thử, không phải $40$.\nBước 2: Đếm cặp thuận lợi\nCó $6$ cặp ngửa–ngửa, đúng biến cố cả hai lượt đều ngửa.\nBước 3: Tính tỉ lệ\n$6/20=3/10$.\nBước 4: Phân biệt mẫu số\n$40$ là số lượt tung lẻ; dùng nó sẽ không cùng đơn vị với tử số đang đếm cặp.\nKết quả dựa vào dữ liệu, không cần giả thiết đồng xu cân đối.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-04",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Gộp hai đợt có cỡ mẫu khác nhau",
          "prompt": "Đợt 1 có 20 lần thử, biến cố A xuất hiện 8 lần. Đợt 2 theo cùng quy trình có 80 lần thử, A xuất hiện 48 lần. Khi gộp tất cả bản ghi, xác suất thực nghiệm của A bằng bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac12$",
            "B. $\\frac35$",
            "C. $\\frac7{25}$",
            "D. $\\frac{14}{25}$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Cộng số lần thử\nHai đợt có tổng $20+80=100$ lần theo cùng quy trình.\nBước 2: Cộng số lần A xuất hiện\nTổng là $8+48=56$ lần.\nBước 3: Tính từ dữ liệu gộp\nXác suất thực nghiệm bằng $56/100=14/25$.\nBước 4: Giải thích vì sao không lấy trung bình đơn giản\nĐợt $80$ lần đóng góp nhiều bản ghi hơn đợt $20$ lần.\nLấy trung bình hai tỉ lệ như hai đợt bằng nhau sẽ làm sai ảnh hưởng của từng đợt.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-05",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "So sánh hai tần số tương đối",
          "prompt": "Nhóm A ghi biến cố xuất hiện 14 lần trong 35 lần thử; nhóm B ghi 18 lần trong 50 lần thử. Nhận xét nào đúng về hai xác suất thực nghiệm?",
          "svg": "",
          "options": [
            "A. Nhóm B lớn hơn vì 18 lớn hơn 14.",
            "B. Hai nhóm bằng nhau.",
            "C. Nhóm A lớn hơn vì 14 × 50 > 18 × 35.",
            "D. Không thể so sánh vì số lần thử khác nhau."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Viết hai tỉ lệ\nNhóm A có $14/35$, nhóm B có $18/50$.\nBước 2: Chọn cách so sánh\nHai mẫu đều dương, nên so sánh hai phân số bằng các tích chéo.\nBước 3: Tính tích chéo\n$14\\cdot50=700$, còn $18\\cdot35=630$.\nBước 4: Kết luận thứ tự\n$700>630$ nên $14/35>18/50$.\nDù nhóm B có số lần xuất hiện nhiều hơn, tỉ lệ của B vẫn nhỏ hơn do mẫu số cũng lớn hơn.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-06",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Làm sạch bản ghi trước khi tính",
          "prompt": "Nhóm ghi 60 lần quay, trong đó 5 lần kim dừng ở ranh giới được quy định là không hợp lệ và bị loại hoàn toàn. Trong 55 lần hợp lệ có 22 lần vào ô đỏ. Xác suất thực nghiệm của ô đỏ, tính trên những lần hợp lệ, là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac25$",
            "B. $\\frac{11}{30}$",
            "C. $\\frac9{20}$",
            "D. $\\frac{22}{65}$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định những lần bị loại\nCó $5$ lần ranh giới không hợp lệ và bị loại hoàn toàn khỏi dữ liệu tính toán.\nBước 2: Tính mẫu số còn lại\n$60-5=55$ lần hợp lệ.\nBước 3: Dùng số lần đỏ hợp lệ\nCó $22$ lần đỏ trong chính $55$ lần này.\nXác suất thực nghiệm là $22/55=2/5$.\nBước 4: Kiểm tra phạm vi tử và mẫu\nCả tử và mẫu đều chỉ tính trên các lần hợp lệ.\nNếu giữ mẫu $60$ thì đã đưa các lần bị loại trở lại phép tính.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-07",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Ảnh hưởng của một bản ghi bị phân loại sai",
          "prompt": "Trong 100 lần thử hợp lệ, ban đầu báo cáo A xuất hiện 37 lần. Kiểm lại thấy một lần được ghi nhầm là A, thực tế là không A; tổng số lần thử giữ nguyên. Xác suất thực nghiệm giảm bao nhiêu?",
          "svg": "",
          "options": [
            "A. $\\frac1{37}$",
            "B. $\\frac1{100}$",
            "C. $\\frac1{99}$",
            "D. $\\frac{36}{100}$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Phân biệt sửa và xóa bản ghi\nMột kết quả đổi từ $A$ thành không $A$, nhưng lần thử đó vẫn hợp lệ.\nVì vậy tổng vẫn là $100$ lần.\nBước 2: Sửa số lần A\nSố lần $A$ giảm từ $37$ xuống $36$.\nBước 3: Viết hai tỉ lệ\nTrước sửa là $37/100$, sau sửa là $36/100$.\nBước 4: Tính mức giảm\n$37/100-36/100=1/100$.\n$36/100$ là tỉ lệ mới, không phải mức giảm.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-08",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Sao chép bản ghi",
          "prompt": "Một bản ghi có $8$ lần thử, A xuất hiện $3$ lần. Bạn chép nguyên bản ghi ấy ba lần liên tiếp vào bảng tổng hợp, không làm thí nghiệm mới. Tỷ số số dòng ghi A trên tổng số dòng của bảng mới là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $3/8$",
            "B. $9/8$",
            "C. $1/8$",
            "D. $9/11$"
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đếm sau sao chép\nCó $3\\cdot 3=9$ dòng A và $8\\cdot 3=24$ dòng tất cả.\nBước 2: Rút gọn và phân biệt\nTỷ số là $9/24=3/8$. Chọn A. Việc sao chép không tạo ra $24$ lần quan sát độc lập."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-09",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Cùng tỷ lệ từ hai cỡ dữ liệu",
          "prompt": "Theo cùng một quy trình, nhóm I đã ghi A $8$ lần trong $20$ lần thử, nhóm II ghi A $12$ lần trong $30$ lần. Kết luận nào phù hợp với hai bản ghi?",
          "svg": "",
          "options": [
            "A. Nhóm II có xác suất thực nghiệm lớn hơn vì 12>8.",
            "B. Nhóm I có xác suất thực nghiệm lớn hơn vì tổng lần thử nhỏ hơn.",
            "C. Hai xác suất thực nghiệm bằng nhau; chưa biết chắc kết quả lần thử kế tiếp.",
            "D. Hai nhóm chắc chắn cùng nhận A ở lần thử kế tiếp."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tính hai tỷ số\n$8/20=2/5$ và $12/30=2/5$, nên xác suất thực nghiệm bằng nhau.\nBước 2: Giới hạn kết luận\nHai bảng không xác định chắc chắn kết quả của lần thử kế tiếp. Số lần xuất hiện A lớn hơn không tự làm tỷ số lớn hơn. Chọn C."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-10",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Bỏ một bản ghi A",
          "prompt": "Trong $20$ bản ghi hợp lệ có $7$ bản ghi A. Nếu bỏ đúng một bản ghi A thì tỷ số A trong $19$ bản ghi còn lại là bao nhiêu? Đây chỉ là thao tác trên dữ liệu, không phải một lần thử mới.",
          "svg": "",
          "options": [
            "A. $6/20$",
            "B. $7/19$",
            "C. $7/20$",
            "D. $6/19$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Cập nhật cả hai số đếm\nSố A còn $7-1=6$, tổng còn $20-1=19$.\nBước 2: Tính tỷ số\nTỷ số mới là $6/19$. Chọn D. Nó mô tả phần dữ liệu đã bị chọn bỏ, không thay thế tỷ số $7/20$ của dữ liệu gốc."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-nang-cao-11",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Sửa cả một đoạn bị đảo nhãn",
          "prompt": "$50$ lần thử chỉ nhận A hoặc B. Bảng đang ghi $23$ kết quả A. Phát hiện trong đúng $10$ dòng cuối, mọi nhãn A bị ghi thành B và mọi B thành A; $40$ dòng đầu đúng. Trong $10$ dòng cuối đang có $8$ nhãn A. Xác suất thực nghiệm của A sau sửa là bao nhiêu?",
          "svg": "",
          "options": [
            "A. $31/50$",
            "B. $17/50$",
            "C. $15/40$",
            "D. $21/50$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tách phần đầu đúng\nBốn mươi dòng đầu có $23-8=15$ kết quả A.\nBước 2: Khôi phục phần cuối\nMười dòng cuối đang có $8$ A và $2$ B. Sau đảo lại đúng, chúng có $2$ A và $8$ B.\nBước 3: Cộng lại\nTổng A đúng là $15+2=17$, tổng số thử vẫn $50$. Xác suất thực nghiệm là $17/50$. Chọn B."
        }
      ],
      "hsg": [
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-01",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tìm số lần thành công thêm tối thiểu",
          "prompt": "Đã thử 20 lần, A xuất hiện 7 lần. Tiếp tục theo cùng quy trình và giả sử tất cả các lần thử thêm đều ghi nhận A. Cần ít nhất bao nhiêu lần thêm để xác suất thực nghiệm của A trong toàn bộ dữ liệu đạt từ 60% trở lên?",
          "svg": "",
          "correctAnswer": "13",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đặt số lần thử thêm\nGọi $n$ là số nguyên không âm chỉ số lần thêm.\nTheo giả sử, cả $n$ lần đều có $A$, nên tổng lần $A$ là $7+n$, tổng lần thử là $20+n>0$.\nBước 2: Viết mức cần đạt\nCần $(7+n)/(20+n)\\ge60\\%=3/5$.\nBước 3: Biến đổi điều kiện\nNhân với các mẫu dương: $5(7+n)\\ge3(20+n)$.\n$35+5n\\ge60+3n$ cho $2n\\ge25$, tức $n\\ge12{,}5$.\nBước 4: Chọn số nguyên và kiểm tra biên\nSố nguyên nhỏ nhất là $13$.\nVới $n=12$, $19/32<3/5$ vì $95<96$; với $n=13$, $20/33>3/5$ vì $100>99$.\nBước 5: Kết luận\nCần ít nhất $13$ lần thêm theo giả sử đề bài.\nĐiều này không dự đoán rằng các lần thử thật sắp tới chắc chắn đều có $A$."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-02",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "dien",
          "title": "Giá trị thực nghiệm và tính nguyên của số đếm",
          "prompt": "Một báo cáo ghi xác suất thực nghiệm của A chính xác bằng $0{,}35$, không làm tròn. Tổng số lần thử hợp lệ là số nguyên từ 25 đến 45. Có bao nhiêu tổng số lần thử có thể phù hợp?",
          "svg": "",
          "correctAnswer": "1",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đổi tỉ lệ chính xác\n$0{,}35=35/100=7/20$, là phân số tối giản.\nBước 2: Liên hệ với số đếm\nGọi tổng lần thử là $N$, số lần $A$ là $k$ nguyên.\n$k/N=7/20$ cho $k=7N/20$.\nBước 3: Dùng điều kiện nguyên\n$7$ và $20$ nguyên tố cùng nhau, nên muốn $7N$ chia hết cho $20$ thì $N$ phải chia hết cho $20$.\nBước 4: Lọc khoảng và kiểm tra\nTừ $25$ đến $45$ chỉ có bội $40$.\nKhi $N=40$, $k=14$ nguyên và $0\\le14\\le40$, nên khả thi.\nBước 5: Kết luận\nCó đúng $1$ tổng số lần thử phù hợp.\nTính “chính xác, không làm tròn” là điều kiện cần cho lập luận chia hết này."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-03",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khôi phục cỡ đợt thử bổ sung",
          "prompt": "Đợt đầu có 30 lần thử hợp lệ với xác suất thực nghiệm của A bằng $0{,}4$. Đợt sau thực hiện cùng quy trình, có số lần thử nguyên dương không quá 25 và xác suất thực nghiệm của A bằng $0{,}65$. Khi gộp cả hai đợt, xác suất thực nghiệm bằng $0{,}5$. Các tỉ lệ đều chính xác, không làm tròn. Đợt sau có bao nhiêu lần thử?",
          "svg": "",
          "correctAnswer": "20",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính số lần A ở đợt đầu\n$30\\cdot0{,}4=12$ lần.\nBước 2: Đặt số lần đợt sau\nGọi $n$ nguyên dương, $n\\le25$.\nSố lần $A$ đợt sau là $0{,}65n$ vì tỉ lệ chính xác.\nBước 3: Dùng tỉ lệ gộp\n$(12+0{,}65n)/(30+n)=0{,}5$.\nMẫu dương, nên $12+0{,}65n=15+0{,}5n$.\nBước 4: Giải và kiểm tính khả thi\n$0{,}15n=3$ cho $n=20$.\nĐợt sau có $13$ lần $A$, nguyên và không vượt $20$; $20\\le25$.\nGộp hai đợt được $(12+13)/(30+20)=25/50=0{,}5$.\nBước 5: Kết luận\nĐợt sau có $20$ lần thử."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-04",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh giới hạn tổng ba tần số quan sát",
          "prompt": "Thử một thiết bị có ba đèn A, B, C trong $N>0$ lần hợp lệ. Mỗi bản ghi cho biết đúng một hoặc đúng hai đèn sáng, không có lần nào cả ba đèn cùng sáng hoặc cùng tắt. Gọi $p_A,p_B,p_C$ là xác suất thực nghiệm của việc từng đèn sáng, đều tính trên $N$ bản ghi này. Chứng minh $1\\le p_A+p_B+p_C\\le2$ và nêu chính xác khi nào xảy ra mỗi dấu bằng.",
          "svg": "",
          "solution": "Bước 1: Đếm số lượt sáng theo đèn\nGọi số lượt sáng của A, B, C lần lượt là $n_A,n_B,n_C$.\nTheo định nghĩa, $p_A+p_B+p_C=(n_A+n_B+n_C)/N$.\nBước 2: Đếm cùng tổng theo bản ghi\nGọi $t$ là số bản ghi có hai đèn sáng, với $0\\le t\\le N$.\n$N-t$ bản ghi còn lại có một đèn sáng.\nTổng lượt sáng là $2t+(N-t)=N+t$.\nBước 3: Kết nối hai cách đếm\n$n_A+n_B+n_C=N+t$, nên $p_A+p_B+p_C=1+t/N$.\nPhép chia hợp lệ vì $N>0$.\nBước 4: Suy ra hai cận và dấu bằng dưới\n$0\\le t/N\\le1$ cho $1\\le p_A+p_B+p_C\\le2$.\nBằng $1$ khi và chỉ khi $t=0$, tức mọi bản ghi đều có đúng một đèn sáng.\nBước 5: Kết luận dấu bằng trên\nBằng $2$ khi và chỉ khi $t=N$, tức mọi bản ghi đều có đúng hai đèn sáng.\nLập luận chỉ đếm dữ liệu đã ghi, không cần giả thiết các trạng thái có cơ hội như nhau."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-05",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Phản ví dụ cho cách gộp không trọng số",
          "prompt": "Một bạn nói: “Muốn gộp hai đợt thử, luôn lấy trung bình cộng hai xác suất thực nghiệm.” Hãy cho một phản ví dụ có số lần thử hai đợt khác nhau, số lần xuất hiện nguyên hợp lệ; tính cả cách của bạn và tần số từ dữ liệu gộp để chứng minh phát biểu sai.",
          "svg": "",
          "solution": "Bước 1: Chọn hai đợt hợp lệ khác cỡ\nĐợt 1: $10$ lần thử, $A$ xuất hiện $2$ lần.\nĐợt 2: $30$ lần thử, $A$ xuất hiện $18$ lần.\nCác số đếm nguyên, không âm và không vượt số lần thử.\nBước 2: Tính từng tỉ lệ\nĐợt 1 có $2/10=0{,}2$, đợt 2 có $18/30=0{,}6$.\nBước 3: Tính theo cách bạn đề xuất\nTrung bình cộng là $(0{,}2+0{,}6)/2=0{,}4$.\nBước 4: Tính từ các bản ghi gộp\nTổng có $2+18=20$ lần $A$ trong $10+30=40$ lần thử.\nTỉ lệ đúng là $20/40=0{,}5$, khác $0{,}4$.\nBước 5: Kết luận\nPhản ví dụ chứng minh phát biểu “luôn lấy trung bình cộng” sai.\nPhải cộng số lần xuất hiện và tổng lần thử; đợt lớn hơn có nhiều bản ghi đóng góp hơn."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-06",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khôi phục số lần ở một cửa sổ quan sát",
          "prompt": "Một bản ghi được tính lũy kế: sau $20$ lần thử, xác suất thực nghiệm của A là $0{,}3$; sau $50$ lần thử là $0{,}46$. Cả hai tỷ lệ đều chính xác. Từ lần $21$ đến lần $50$, A xuất hiện bao nhiêu lần?",
          "svg": "",
          "correctAnswer": "17",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đổi hai tỷ lệ thành số lần\nHai mốc có số lần A là $20\\cdot 0{,}3=6$ và $50\\cdot 0{,}46=23$.\nBước 2: Lấy đúng phần giữa hai mốc\nPhần từ lần $21$ đến $50$ có $23-6=17$ lần A trong $30$ lần, phù hợp giới hạn số lần thử.\nBước 3: Kết luận\nA xuất hiện $17$ lần trong khoảng được hỏi."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-07",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Chọn bỏ dữ liệu làm thay đổi tỷ lệ",
          "prompt": "Trong $40$ lần thử chỉ có A hoặc B, A xuất hiện $24$ lần. Người ta chỉ xóa các dòng A cho đến khi tỷ số A trong phần còn lại bằng $1/2$. Có bao nhiêu dòng bị xóa? Phải còn ít nhất một dòng; các số liệu đều chính xác.",
          "svg": "",
          "correctAnswer": "8",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đếm phần không bị xóa\nCó $40-24=16$ dòng B; chúng giữ nguyên vì chỉ xóa A.\nBước 2: Dùng tỷ số một nửa\nĐể A chiếm một nửa, số dòng A còn lại phải bằng số dòng B, tức $16$. Vậy đã xóa $24-16=8$ dòng.\nBước 3: Kiểm lại\nCòn $32$ dòng, trong đó $16$ A, đúng tỷ số $1/2$. Tỷ số này chỉ thuộc bảng đã chọn bỏ, không phải dữ liệu gốc.\nBước 4: Kết luận\nĐã xóa $8$ dòng A."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-08",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Tổng số lượt từ hai thao tác xóa",
          "prompt": "Bản ghi gồm $n>1$ lần thử A hoặc B, có cả hai loại. Nếu xóa một dòng A, tỷ số A giảm đúng $1/60$. Nếu xóa một dòng B từ bản gốc, tỷ số A tăng đúng $1/40$. Hai thao tác xét riêng trên bản gốc. Tìm $n$.",
          "svg": "",
          "correctAnswer": "25",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Ký hiệu số lần A\nGọi $a$ là số dòng A, với $0<a<n$. Hai tỷ số sau xóa lần lượt là $(a-1)/(n-1)$ và $a/(n-1)$.\nBước 2: Tính khoảng cách giữa hai tỷ số\nTỷ số thứ hai hơn thứ nhất $1/60+1/40=1/24$. Mặt khác, trừ hai phân số cùng mẫu được $1/(n-1)$.\nVậy $1/(n-1)=1/24$, nên $n=25$.\nBước 3: Kiểm tính tồn tại\nĐộ tăng $a/24-a/25=a/600=1/40$ cho $a=15$. Có $15$ A và $10$ B là dữ liệu hợp lệ.\nXóa A: $15/25-14/24=1/60$. Xóa B: $15/24-15/25=1/40$.\nBước 4: Kết luận\nTổng số lần thử là $25$."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-09",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Sao chép không tăng số lần quan sát thật",
          "prompt": "Một bản ghi có $n>0$ lần thử, A xuất hiện $a$ lần với $0\\le a\\le n$. Chép nguyên bản ghi thành $k$ bản giống nhau, $k$ nguyên dương. Chứng minh tỷ số A không đổi. Vì sao không được báo rằng đã thực hiện $kn$ lần thử mới độc lập?",
          "svg": "",
          "solution": "Bước 1: Đếm số dòng\nBảng sao chép có $kn$ dòng, trong đó $ka$ dòng A.\nBước 2: Rút gọn có điều kiện\n$k,n$ đều dương, nên $ka/(kn)=a/n$. Điều này đúng cả khi $a=0$ hoặc $a=n$.\nBước 3: Phân biệt bản sao và quan sát\nMỗi dòng mới chỉ lặp lại một kết quả cũ, không xuất phát từ một lần thực hiện quy trình mới. Chỉ có $n$ lần thử thực sự, nên không được coi các bản sao là những quan sát độc lập mới.\nBước 4: Kết luận\nTỷ số không đổi; số lần quan sát thật vẫn là $n$."
        },
        {
          "id": "l7-xac-suat-thuc-nghiem-hsg-10",
          "lop": 7,
          "chuDe": "xac-suat-thuc-nghiem",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Tỷ số cuối không xác định thứ tự",
          "prompt": "Bản ghi ban đầu có $n>0$ lần thử A hoặc B, với $a$ kết quả A. Xét hai khả năng cho hai kết quả tiếp theo: A rồi B, hoặc B rồi A. Chứng minh tỷ số A sau cả hai lần bằng nhau, nhưng sau lần đầu thì khác nhau. Có thể suy thứ tự hai kết quả chỉ từ tỷ số cuối không?",
          "svg": "",
          "solution": "Bước 1: So sau lần đầu\nNhánh A trước cho $(a+1)/(n+1)$; nhánh B trước cho $a/(n+1)$. Hiệu bằng $1/(n+1)>0$, nên khác nhau.\nBước 2: So sau cả hai lần\nMỗi nhánh đều thêm đúng một A và một B, nên cùng có tỷ số $(a+1)/(n+2)$.\nBước 3: Kết luận\nHai thứ tự khác nhau cho cùng tỷ số cuối. Do đó tỷ số cuối không đủ xác định thứ tự; cần bản ghi theo thời gian. Đây là so sánh hai khả năng, không khẳng định chúng có xác suất lý thuyết bằng nhau."
        }
      ]
    },
    'thong-ke': {
      "kha": [
        {
          "id": "l7-thong-ke-kha-01",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân loại dữ liệu khảo sát",
          "prompt": "Trong các dữ liệu sau, dữ liệu nào không phải dữ liệu số?",
          "svg": "",
          "options": [
            "A. Số sách đọc trong tháng.",
            "B. Thời gian đi đến trường tính bằng phút.",
            "C. Môn thể thao yêu thích.",
            "D. Chiều cao tính bằng cm."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Phân biệt số liệu với tên nhóm\nDữ liệu số thường là số đếm hoặc số đo.\nTên một loại hoạt động là dữ liệu phân loại, không phải số lượng.\nBước 2: Xét số đếm\nSố sách đọc trong tháng là số đếm, nên A là dữ liệu số.\nBước 3: Xét các số đo\nThời gian tính bằng phút và chiều cao tính bằng cm đều là số đo, nên B, D là dữ liệu số.\nBước 4: Xét sở thích\nMôn thể thao yêu thích được ghi bằng tên như bơi, bóng đá, cầu lông.\nĐây là tên nhóm nên không phải dữ liệu số.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-thong-ke-kha-02",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Lọc bản ghi theo tiêu chí hợp lệ",
          "prompt": "Phiếu khảo sát hỏi “Số ngày đi bộ đến trường trong tuần học 5 ngày”, chỉ nhận số nguyên từ $0$ đến $5$. Bốn bản ghi là $3$; $5$; $-1$; $2{,}5$. Có bao nhiêu bản ghi hợp lệ?",
          "svg": "",
          "options": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Ghi đủ điều kiện hợp lệ\nBản ghi phải là số nguyên và nằm từ $0$ đến $5$, kể cả hai đầu.\nBước 2: Kiểm tra 3 và 5\nCả hai đều nguyên và trong khoảng, nên hợp lệ.\nBước 3: Kiểm tra âm 1\n$-1<0$ nên không hợp lệ dù là số nguyên.\nBước 4: Kiểm tra 2,5\n$2{,}5$ nằm trong khoảng nhưng không nguyên, nên cũng không hợp lệ.\nBước 5: Kết luận\nCó $2$ bản ghi hợp lệ. Chọn B."
        },
        {
          "id": "l7-thong-ke-kha-03",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Đọc số liệu trên biểu đồ đoạn thẳng",
          "prompt": "Biểu đồ cho số lượt mượn sách từ thứ Hai đến thứ Năm. Thứ Ba có bao nhiêu lượt?",
          "svg": svgCap2.svgLineChart({"labels":["Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm"],"values":[12,18,15,21],"title":"Lượt mượn sách","unit":"lượt"}),
          "options": [
            "A. 12",
            "B. 15",
            "C. 21",
            "D. 18"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tìm đúng ngày\nTrên trục ngang, tìm vị trí thứ Ba, không dùng thứ tự cao thấp của các điểm.\nBước 2: Xác định điểm dữ liệu\nTừ nhãn thứ Ba, dóng lên điểm của đường biểu diễn.\nBước 3: Đọc trục đứng\nTung độ của điểm là $18$; trục đứng biểu thị số lượt mượn sách.\nBước 4: Đối chiếu\nSố $15$ thuộc điểm thứ Tư, không phải ngày đang hỏi.\nBước 5: Kết luận\nThứ Ba có $18$ lượt. Chọn D."
        },
        {
          "id": "l7-thong-ke-kha-04",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "NB",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Nhận dạng biểu đồ",
          "prompt": "Biểu đồ trong hình thuộc loại nào?",
          "svg": svgCap2.svgGrade7DataExtension("line-kind"),
          "options": [
            "A. Biểu đồ cột.",
            "B. Biểu đồ đoạn thẳng.",
            "C. Biểu đồ cột kép.",
            "D. Biểu đồ hình quạt tròn."
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Quan sát cách biểu diễn\nMỗi cặp ngày và số lượt được biểu diễn bằng một điểm; các điểm được nối theo thứ tự thời gian bằng các đoạn thẳng.\nBước 2: Gọi tên\nĐó là biểu đồ đoạn thẳng. Hình không dùng cột hoặc chia hình tròn thành các phần. Chọn B."
        },
        {
          "id": "l7-thong-ke-kha-05",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "kha",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Ghép các nhóm trên biểu đồ quạt",
          "prompt": "Theo biểu đồ, quan hệ nào đúng giữa số bạn của ba nhóm A, B, C?",
          "svg": svgCap2.svgGrade7DataExtension("parts-equal"),
          "options": [
            "A. Số bạn C bằng tổng số bạn A và B.",
            "B. Số bạn B bằng tổng số bạn A và C.",
            "C. Số bạn A bằng tổng số bạn B và C.",
            "D. Số bạn A bằng số bạn B."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đọc số lượng hoặc tỷ phần\nNhóm A có $10$ bạn, B có $15$ bạn, C có $25$ bạn; tổng $50$ bạn.\nBước 2: Ghép hai nhóm\nA và B có $10+15=25$ bạn, bằng số bạn nhóm C.\nTrên biểu đồ cũng có $20$%$+30$%$=50$%. Chọn A."
        }
      ],
      "nangCao": [
        {
          "id": "l7-thong-ke-nang-cao-01",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Kiểm tra tổng tỉ lệ của các nhóm",
          "prompt": "Mỗi học sinh chọn đúng một trong ba câu lạc bộ và tất cả đều trả lời. Bảng tỉ lệ ghi: thể thao $45\\%$, âm nhạc $35\\%$, mĩ thuật $30\\%$. Kết luận nào đúng?",
          "svg": "",
          "options": [
            "A. Bảng không hợp lí vì tổng là 110%, vượt 100%.",
            "B. Bảng hợp lí vì từng tỉ lệ nhỏ hơn 100%.",
            "C. Bảng hợp lí vì thể thao có tỉ lệ cao nhất.",
            "D. Chỉ cần đổi tên các nhóm là bảng đúng."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Xác định quan hệ giữa ba nhóm\nMỗi học sinh chọn đúng một câu lạc bộ và tất cả đều trả lời.\nBa nhóm không trùng nhau, đồng thời chứa toàn bộ học sinh.\nBước 2: Nêu tổng tỉ lệ cần có\nVì vậy tổng ba tỉ lệ phải đúng $100\\%$.\nBước 3: Cộng số báo cáo\n$45\\%+35\\%+30\\%=110\\%$.\nBước 4: So sánh và giải thích lỗi\n$110\\%>100\\%$, mâu thuẫn với việc mỗi người chỉ tính một lần.\nTừng tỉ lệ dưới $100\\%$ không đủ bảo đảm cả bảng đúng; phải kiểm lại số liệu trước khi vẽ.\nBước 5: Kết luận\nChọn A."
        },
        {
          "id": "l7-thong-ke-nang-cao-02",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Đánh giá tính đại diện của mẫu",
          "prompt": "Muốn biết loại sách học sinh toàn khối 7 thích đọc, nhóm chỉ hỏi 20 bạn đang dự buổi sinh hoạt câu lạc bộ đọc truyện tranh. Nhận xét nào phù hợp nhất?",
          "svg": "",
          "options": [
            "A. Đủ 20 bạn thì chắc chắn đại diện cho toàn khối.",
            "B. Mẫu này chứng minh toàn khối thích truyện tranh nhất.",
            "C. Mẫu có thể lệch do chỉ lấy từ một nhóm có sở thích riêng.",
            "D. Chỉ cần vẽ biểu đồ đẹp là có thể suy ra cho toàn khối."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Xác định đối tượng cần tìm hiểu\nMục tiêu là sở thích đọc sách của toàn khối 7.\nBước 2: Xác định đối tượng thực tế được hỏi\nNhóm chỉ hỏi người đang dự câu lạc bộ đọc truyện tranh.\nĐây là một nhóm có sở thích riêng, không bao gồm đủ các nhóm học sinh trong khối.\nBước 3: Giải thích nguy cơ lệch\nNhóm này có thể thích truyện tranh nhiều hơn học sinh ở các nhóm khác.\nKết quả của họ vì thế chưa đại diện cho toàn khối.\nBước 4: Nêu hướng thu thập phù hợp\nCần chọn người từ nhiều lớp, nhiều nhóm theo cách hạn chế thiên lệch trước khi suy rộng.\nSố lượng $20$ hay hình thức biểu đồ đẹp không tự sửa được lỗi chọn mẫu.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-thong-ke-nang-cao-03",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "su-dung-cong-cu"
          ],
          "dang": "chon",
          "title": "Chuẩn bị dữ liệu để vẽ đường diễn biến",
          "prompt": "Phần mềm nhận ba cặp (ngày; nhiệt độ): $(3;18)$, $(1;12)$, $(2;15)$. Để vẽ biểu đồ đoạn thẳng thể hiện diễn biến theo ngày tăng dần, phải nối các điểm theo thứ tự nào?",
          "svg": "",
          "options": [
            "A. $(3;18)\\to(1;12)\\to(2;15)$",
            "B. $(1;12)\\to(2;15)\\to(3;18)$",
            "C. $(1;18)\\to(2;12)\\to(3;15)$",
            "D. $(18;3)\\to(12;1)\\to(15;2)$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Xác định thứ tự cần biểu diễn\nBiểu đồ diễn biến theo thời gian nên trục ngày cần đi theo $1,2,3$.\nBước 2: Giữ nguyên từng cặp\nNgày $1$ đi với $12$, ngày $2$ với $15$, ngày $3$ với $18$.\nKhông được sắp riêng cột ngày rồi để nhiệt độ ở chỗ cũ.\nBước 3: Viết các điểm theo ngày\nThứ tự là $(1;12),(2;15),(3;18)$.\nBước 4: Nối và kiểm tra\nNối lần lượt ba điểm này từ trái sang phải.\nMỗi nhiệt độ vẫn thuộc đúng ngày trong bảng ban đầu.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-thong-ke-nang-cao-04",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Đối chiếu số lượng với hình quạt",
          "prompt": "Khảo sát 60 học sinh, mỗi bạn chọn đúng một hoạt động: đọc sách 12 bạn, âm nhạc 18 bạn, thể thao 30 bạn. Hình quạt biểu diễn dữ liệu này. Phần âm nhạc chiếm bao nhiêu phần trăm?",
          "svg": svgCap2.svgPieChart({"labels":["Đọc sách","Âm nhạc","Thể thao"],"values":[12,18,30],"title":"Hoạt động yêu thích — 60 học sinh","display":"none"}),
          "options": [
            "A. $18\\%$",
            "B. $20\\%$",
            "C. $50\\%$",
            "D. $30\\%$"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Xác định phần và tổng\nCó $18$ bạn chọn âm nhạc trong tổng $60$ bạn.\nBước 2: Tính tỉ số\n$18/60=3/10$.\nBước 3: Đổi sang phần trăm\n$(3/10)\\cdot100\\%=30\\%$.\nBước 4: Kiểm tra cả cơ cấu\nĐọc sách chiếm $12/60=20\\%$, thể thao chiếm $30/60=50\\%$.\n$20+30+50=100$, phù hợp mỗi bạn chỉ chọn một hoạt động.\nBước 5: Kết luận\nChọn D."
        },
        {
          "id": "l7-thong-ke-nang-cao-05",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chon",
          "title": "Đối chiếu bảng tóm tắt với đường biểu diễn",
          "prompt": "Biểu đồ ghi số sản phẩm của bốn tuần. Bảng tóm tắt nào khớp cả giá trị lớn nhất, nhỏ nhất và chênh lệch giữa chúng?",
          "svg": svgCap2.svgLineChart({"labels":["Tuần 1","Tuần 2","Tuần 3","Tuần 4"],"values":[8,12,20,10],"title":"Số sản phẩm mỗi tuần","unit":"sản phẩm"}),
          "options": [
            "A. Lớn nhất 20; nhỏ nhất 8; chênh lệch 12.",
            "B. Lớn nhất 20; nhỏ nhất 10; chênh lệch 10.",
            "C. Lớn nhất 12; nhỏ nhất 8; chênh lệch 4.",
            "D. Lớn nhất 20; nhỏ nhất 8; chênh lệch 28."
          ],
          "correctAnswer": "A",
          "solution": "Bước 1: Đọc đủ bốn điểm\nSố sản phẩm các tuần lần lượt là $8,12,20,10$.\nBước 2: Tìm lớn nhất\nSo sánh cả bốn số, giá trị lớn nhất là $20$.\nBước 3: Tìm nhỏ nhất\nGiá trị nhỏ nhất là $8$, không phải $10$ của tuần cuối.\nBước 4: Tính chênh lệch\n$20-8=12$ sản phẩm.\nChênh lệch dùng phép trừ, không lấy tổng $20+8$.\nBước 5: Kết luận\nChọn A vì khớp đủ ba thông tin."
        },
        {
          "id": "l7-thong-ke-nang-cao-06",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "So sánh mức tăng giữa hai thời điểm liên tiếp",
          "prompt": "Đường biểu diễn cho số cây được chăm sóc qua năm tuần. Khoảng nào có mức tăng lớn nhất so với tuần ngay trước?",
          "svg": svgCap2.svgLineChart({"labels":["Tuần 1","Tuần 2","Tuần 3","Tuần 4","Tuần 5"],"values":[10,18,15,25,29],"title":"Số cây được chăm sóc","unit":"cây"}),
          "options": [
            "A. Tuần 1 đến tuần 2.",
            "B. Tuần 2 đến tuần 3.",
            "C. Tuần 3 đến tuần 4.",
            "D. Tuần 4 đến tuần 5."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Đọc dãy theo tuần\nSố cây lần lượt là $10,18,15,25,29$.\nBước 2: Tính hai thay đổi đầu\nTuần 1–2: $18-10=8$ cây.\nTuần 2–3: $15-18=-3$ cây, tức giảm $3$ cây.\nBước 3: Tính hai thay đổi sau\nTuần 3–4: $25-15=10$ cây.\nTuần 4–5: $29-25=4$ cây.\nBước 4: So sánh mức tăng\nTrong các mức tăng $8,10,4$, lớn nhất là $10$ ở tuần 3–4.\nTuần 5 có tổng lớn nhất nhưng không tăng nhiều nhất so với tuần trước.\nBước 5: Kết luận\nChọn C."
        },
        {
          "id": "l7-thong-ke-nang-cao-07",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chon",
          "title": "Suy số lượng từ góc ở tâm",
          "prompt": "Biểu đồ quạt tròn mô tả 75 học sinh, mỗi bạn chọn một môn thể thao. Phần bóng đá có góc ở tâm $144^\\circ$. Có bao nhiêu học sinh chọn bóng đá?",
          "svg": svgCap2.svgPieChart({"labels":["Bóng đá","Bơi","Cầu lông"],"values":[30,25,20],"title":"Môn thể thao — 75 học sinh","display":"angle"}),
          "options": [
            "A. 40",
            "B. 30",
            "C. 45",
            "D. 144"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Liên hệ góc với phần tổng\nCả hình tròn $360^\\circ$ biểu diễn toàn bộ $75$ học sinh.\nBước 2: Tính tỉ phần bóng đá\nGóc $144^\\circ$ ứng với $144/360=2/5$ tổng số.\nBước 3: Tính số học sinh\n$75\\cdot2/5=30$ bạn.\nBước 4: Kiểm tra đơn vị\n$144$ là số đo góc, không phải số học sinh.\n$30/75=2/5$ đúng tỉ phần vừa đọc từ hình.\nBước 5: Kết luận\nChọn B."
        },
        {
          "id": "l7-thong-ke-nang-cao-08",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "TH",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Đọc đúng khoảng thời gian",
          "prompt": "Trên trục ngang của biểu đồ, khoảng từ ngày 2 đến ngày 5 dài gấp mấy lần khoảng từ ngày 1 đến ngày 2?",
          "svg": svgCap2.svgGrade7DataExtension("unequal-time"),
          "options": [
            "A. $1$ lần",
            "B. $2$ lần",
            "C. $\\frac{1}{3}$ lần",
            "D. $3$ lần"
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tính khoảng thời gian thật\nTừ ngày $2$ đến ngày $5$ là $3$ ngày; từ ngày $1$ đến ngày $2$ là $1$ ngày.\nBước 2: Liên hệ với trục ngang\nTrục thời gian dùng cùng một thang đo nên khoảng cách tỷ lệ với số ngày. Tỉ số là $3:1=3$.\nCác điểm quan sát liên tiếp không nhất thiết cách đều nhau. Chọn D."
        },
        {
          "id": "l7-thong-ke-nang-cao-09",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Sửa nhãn để hai biểu đồ khớp nhau",
          "prompt": "Biểu đồ cột đã được kiểm đúng. Biểu đồ quạt bên cạnh nhằm mô tả cùng số bạn của ba nhóm, nhưng có hai nhãn nhóm bị đổi chỗ; kích thước các phần quạt vẫn đúng. Cần đổi lại cặp nhãn nào?",
          "svg": svgCap2.svgGrade7DataExtension("wrong-legend"),
          "options": [
            "A. A và B.",
            "B. B và C.",
            "C. A và C.",
            "D. Không cần đổi nhãn."
          ],
          "correctAnswer": "C",
          "solution": "Bước 1: Tìm tổng từ biểu đồ cột\n$12+18+30=60$ bạn.\nBước 2: Tính tỷ lệ đúng của từng nhóm\nA chiếm $12:60=20$%; B chiếm $18:60=30$%; C chiếm $30:60=50$%.\nBước 3: Đối chiếu với nhãn quạt\nPhần $50$% đang ghi A nhưng phải là C; phần $20$% đang ghi C nhưng phải là A. Nhãn B ở phần $30$% đã đúng.\nVậy đổi nhãn A và C. Chọn C."
        },
        {
          "id": "l7-thong-ke-nang-cao-10",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Phân biệt số đo với điểm trên đoạn nối",
          "prompt": "Biểu đồ ghi nhiệt độ lúc 9 giờ vào các ngày 1, 3 và 7. Không có số đo ở các ngày khác và không giả định nhiệt độ biến đổi đều giữa hai lần đo. Kết luận nào chắc chắn đúng từ dữ liệu đã đo?",
          "svg": svgCap2.svgGrade7DataExtension("measured-only"),
          "options": [
            "A. Ngày 2 có nhiệt độ lúc 9 giờ đúng $23^\\circ$C.",
            "B. Ngày 4 có nhiệt độ lúc 9 giờ đúng $25^\\circ$C.",
            "C. Nhiệt độ lúc 9 giờ cao nhất trong cả bảy ngày là $26^\\circ$C.",
            "D. Nhiệt độ lúc 9 giờ ngày 7 cao hơn ngày 1 đúng $2^\\circ$C."
          ],
          "correctAnswer": "D",
          "solution": "Bước 1: Tách dữ liệu đo và phần nối minh họa\nBa số đo là ngày $1$: $20^\\circ$C; ngày $3$: $26^\\circ$C; ngày $7$: $22^\\circ$C.\nCác đoạn nối giúp theo dõi số đo; chúng không tạo ra số liệu đo mới ở ngày $2$ hoặc $4$.\nBước 2: Kiểm giới hạn của kết luận\nChưa có số đo các ngày còn lại nên không thể xác định nhiệt độ ngày $2$, ngày $4$, hoặc nhiệt độ cao nhất của cả bảy ngày.\nBước 3: So sánh hai số đo có thật\nNgày $7$ cao hơn ngày $1$ đúng $22-20=2^\\circ$C. Kết luận D được dữ liệu bảo đảm."
        },
        {
          "id": "l7-thong-ke-nang-cao-11",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "nangCao",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan"
          ],
          "dang": "chon",
          "title": "Khôi phục tổng từ chênh lệch hai phần quạt",
          "prompt": "Biểu đồ chia toàn bộ học sinh thành ba nhóm A, B, C, mỗi bạn thuộc đúng một nhóm. Các góc ở tâm lần lượt là $144^\\circ$, $126^\\circ$, $90^\\circ$. Nhóm A nhiều hơn nhóm B đúng 4 bạn. Nhóm C có bao nhiêu bạn?",
          "svg": svgCap2.svgGrade7DataExtension("recover-total"),
          "options": [
            "A. $16$",
            "B. $20$",
            "C. $28$",
            "D. $32$"
          ],
          "correctAnswer": "B",
          "solution": "Bước 1: Tính phần chênh lệch trong cả hình tròn\nHai phần A và B chênh $144^\\circ-126^\\circ=18^\\circ$, chiếm $\\frac{18}{360}=\\frac{1}{20}$ tổng số học sinh.\nBước 2: Khôi phục tổng số học sinh\n$\\frac{1}{20}$ tổng tương ứng $4$ bạn, nên tổng là $4\\cdot 20=80$ bạn.\nBước 3: Tính nhóm C và kiểm lại\nC chiếm $\\frac{90}{360}=\\frac{1}{4}$, nên có $80:4=20$ bạn.\nA có $80\\cdot \\frac{144}{360}=32$ bạn; B có $28$ bạn. Hiệu $32-28=4$, tổng $32+28+20=80$. Chọn B."
        }
      ],
      "hsg": [
        {
          "id": "l7-thong-ke-hsg-01",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khôi phục cỡ khảo sát từ phần trăm làm tròn",
          "prompt": "Có đúng 20 học sinh chọn bơi trong một khảo sát có $N$ người, với $40\\le N\\le50$. Báo cáo ghi tỉ lệ chọn bơi là $43\\%$, sau khi làm tròn tỉ lệ phần trăm đến hàng đơn vị theo quy tắc thông thường. Có bao nhiêu giá trị nguyên của $N$ phù hợp?",
          "svg": "",
          "correctAnswer": "2",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Viết tỉ lệ trước làm tròn\nCó $20$ bạn chọn bơi trong $N$ người, nên tỉ lệ phần trăm là $2000/N$.\nBước 2: Xác định khoảng làm tròn\nĐể làm tròn thành $43$, cần $42{,}5\\le2000/N<43{,}5$.\nĐầu $42{,}5$ được làm tròn lên $43$, còn $43{,}5$ đã thành $44$ nên loại.\nBước 3: Khoanh các số nguyên có thể\nVới $N\\le45$, tỉ lệ ít nhất $2000/45>44$, không đạt.\nVới $N\\ge48$, tỉ lệ nhiều nhất $2000/48<42$, không đạt.\nTrong khoảng $40$ đến $50$, chỉ còn $46,47$ cần thử.\nBước 4: Kiểm tra hai giá trị\n$42{,}5\\cdot46=1955\\le2000<2001=43{,}5\\cdot46$.\n$42{,}5\\cdot47=1997{,}5\\le2000<2044{,}5=43{,}5\\cdot47$.\nCả hai thỏa chính xác mà không cần làm tròn thương trung gian.\nBước 5: Kết luận\nCó $2$ giá trị của $N$, là $46$ và $47$."
        },
        {
          "id": "l7-thong-ke-hsg-02",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "dien",
          "title": "Kiểm chứng tỉ lệ tăng trong quảng cáo",
          "prompt": "Biểu đồ cho số người tham gia tháng 1 là 80 và tháng 2 là 88. Quảng cáo nói “tăng 20% so với tháng 1”. Tỉ lệ tăng đúng là bao nhiêu phần trăm? Chỉ nhập số trước dấu %.",
          "svg": svgCap2.svgLineChart({"labels":["Tháng 1","Tháng 2"],"values":[80,88],"title":"Số người tham gia","unit":"người"}),
          "correctAnswer": "10",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đọc hai mốc trên biểu đồ\nTháng 1 có $80$ người, tháng 2 có $88$ người.\nBước 2: Tính số tăng\n$88-80=8$ người.\nBước 3: Chọn đúng số gốc\n“Tăng so với tháng 1” nghĩa là lấy số tăng chia số tháng 1, tức chia cho $80$.\nBước 4: Đổi ra phần trăm\n$8/80\\cdot100\\%=10\\%$.\nKiểm tra $80\\cdot1{,}10=88$, đúng tháng 2.\nBước 5: Kết luận\nTỉ lệ tăng đúng là $10\\%$, không phải $20\\%$; nhập $10$."
        },
        {
          "id": "l7-thong-ke-hsg-03",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Dùng dữ liệu đăng ký để chia nhóm",
          "prompt": "150 học sinh đăng ký ba hoạt động theo biểu đồ. Mỗi nhóm tối đa 16 học sinh và chỉ gồm một hoạt động; không chuyển học sinh sang hoạt động khác. Cần ít nhất bao nhiêu nhóm để đủ chỗ cho tất cả?",
          "svg": svgCap2.svgPieChart({"labels":["Bơi","Cờ","Vẽ"],"values":[60,54,36],"title":"Đăng ký hoạt động — 150 học sinh"}),
          "correctAnswer": "11",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đổi tỉ lệ thành số học sinh\nBiểu đồ cho bơi $40\\%$, cờ $36\\%$, vẽ $24\\%$.\nTrong $150$ bạn, ba nhóm lần lượt có $60,54,36$ bạn.\nBước 2: Tìm số nhóm bơi tối thiểu\n$3\\cdot16=48<60\\le64=4\\cdot16$, nên cần ít nhất $4$ nhóm bơi.\nBước 3: Tính hai hoạt động còn lại\nCờ: $48<54\\le64$, cần ít nhất $4$ nhóm.\nVẽ: $2\\cdot16=32<36\\le48=3\\cdot16$, cần ít nhất $3$ nhóm.\nBước 4: Chứng minh tổ chức được\nBơi chia $16+16+16+12$; cờ chia $16+16+16+6$; vẽ chia $16+16+4$.\nMỗi nhóm không quá $16$, cùng một hoạt động và không bỏ sót ai.\nBước 5: Kết luận\nCần ít nhất $4+4+3=11$ nhóm.\nKhông chia chung $150$ cho $16$, vì không được ghép các hoạt động trong một nhóm."
        },
        {
          "id": "l7-thong-ke-hsg-04",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Chứng minh tỉ trọng bằng nhau chưa cho số lượng bằng nhau",
          "prompt": "Hai biểu đồ quạt của hai lớp đều ghi “đọc sách: 25%”. Một bạn kết luận số học sinh chọn đọc sách ở hai lớp bằng nhau. Hãy xây dựng một phản ví dụ bằng số học sinh nguyên, mỗi lớp không quá 40 học sinh, và giải thích vì sao kết luận không suy ra được chỉ từ hai tỉ lệ.",
          "svg": "",
          "solution": "Bước 1: Xác định điều cần bác bỏ\nHai tỉ lệ bằng nhau chỉ cho biết phần của mỗi lớp, chưa cho số lượng bằng nhau.\nTa chọn hai lớp có sĩ số khác nhau.\nBước 2: Xây dựng lớp thứ nhất\nLớp A có $20$ học sinh, $5$ bạn đọc sách.\nTỉ lệ là $5/20=25\\%$.\nBước 3: Xây dựng lớp thứ hai\nLớp B có $40$ học sinh, $10$ bạn đọc sách.\nTỉ lệ cũng là $10/40=25\\%$.\nBước 4: Kiểm tra phản ví dụ\nSĩ số đều không quá $40$, mọi số lượng nguyên và hợp lệ.\nHai tỉ lệ bằng nhau nhưng $5\\ne10$, nên kết luận của bạn không luôn đúng.\nBước 5: Kết luận\nCần biết cả sĩ số lớp mới suy ra số học sinh từ tỉ lệ.\nHai hình quạt cùng ghi $25\\%$ chưa đủ kết luận số bạn bằng nhau."
        },
        {
          "id": "l7-thong-ke-hsg-05",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "mo-hinh-hoa",
            "giai-quyet-van-de"
          ],
          "dang": "chungMinh",
          "title": "Thiết kế thu thập dữ liệu đầy đủ",
          "prompt": "Cần biết chính xác số học sinh trong khối 7 chọn mỗi hoạt động, mỗi bạn chọn đúng một trong ba hoạt động. Khối có danh sách đầy đủ học sinh theo lớp. Hãy thiết kế cách thu thập, kiểm tra và lập bảng sao cho không bỏ sót, không đếm trùng; giải thích vì sao tổng ba nhóm bằng sĩ số khối khi quy trình hoàn tất.",
          "svg": "",
          "solution": "Bước 1: Lập danh sách kiểm soát\nDùng danh sách đầy đủ theo lớp; mỗi học sinh có một dòng riêng để tránh nhầm người cùng tên.\nMỗi dòng có ô ghi một trong ba hoạt động và trạng thái đã trả lời hay chưa.\nBước 2: Thu thập đủ lựa chọn\nHỏi từng bạn, ghi đúng một lựa chọn vào dòng của bạn đó.\nĐánh dấu các bạn chưa trả lời để thu bổ sung; không tự đoán lựa chọn còn thiếu.\nBước 3: Kiểm tra trước khi chốt\nĐối chiếu danh sách: mỗi người có đúng một lựa chọn hợp lệ.\nXử lý các dòng trùng, lựa chọn nhiều hoạt động hoặc còn trống bằng cách xác nhận lại với học sinh.\nBước 4: Lập bảng tổng hợp\nĐếm ba hoạt động trong từng lớp, rồi cộng cùng hoạt động qua các lớp.\nKiểm tra tổng từng lớp bằng sĩ số lớp và tổng toàn khối bằng sĩ số khối.\nBước 5: Giải thích và kết luận\nMỗi học sinh thuộc đúng một nhóm nên không bị đếm trùng; danh sách đã đủ trả lời nên không bị bỏ sót.\nVì vậy tổng ba nhóm bằng sĩ số khối. Nếu còn người chưa trả lời thì chưa được coi bảng là số liệu đầy đủ."
        },
        {
          "id": "l7-thong-ke-hsg-06",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VD",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Đọc mức tăng theo độ dài khoảng thời gian",
          "prompt": "Biểu đồ ghi tổng số trang đã đọc sau các ngày $0,2,5,9$, lần lượt $0,18,42,70$. Trong ba khoảng thời gian liên tiếp được đánh dấu, mức tăng trung bình lớn nhất là bao nhiêu trang/ngày? Không giả định mỗi ngày đọc đều nhau.",
          "svg": svgCap2.svgGrade7Batch4("cumulative"),
          "correctAnswer": "9",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tính riêng từng khoảng\nTừ ngày $0$ đến $2$: $(18-0):(2-0)=9$. Từ ngày $2$ đến $5$: $(42-18):3=8$. Từ ngày $5$ đến $9$: $(70-42):4=7$ trang/ngày.\nBước 2: So sánh đúng đại lượng\nDù khoảng cuối tăng nhiều trang nhất, nó dài hơn nên mức tăng trung bình không lớn nhất.\nBước 3: Kết luận\nMức tăng trung bình lớn nhất là $9$ trang/ngày."
        },
        {
          "id": "l7-thong-ke-hsg-07",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Từ thay đổi nhóm đến tổng người",
          "prompt": "Biểu đồ quạt thể hiện ba nhóm A, B, C, mỗi người chỉ ở một nhóm; góc quạt lần lượt $150^\\circ,120^\\circ,90^\\circ$. Chuyển đúng $10$ người từ A sang C thì ba nhóm có số người bằng nhau. Tổng số người ban đầu là bao nhiêu?",
          "svg": svgCap2.svgGrade7Batch4("pie-transfer"),
          "correctAnswer": "120",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Đọc tỷ phần và nhóm không đổi\nNhóm B chiếm $120/360=1/3$ tổng, và không bị chuyển người. Sau chuyển, cả ba nhóm đều bằng số người nhóm B.\nBước 2: Tính phần tương ứng 10 người\nA ban đầu hơn B một góc $150^\\circ-120^\\circ=30^\\circ$, tức $1/12$ tổng số người. Phần hơn này chính là $10$ người chuyển đi.\nBước 3: Tính tổng và kiểm\nTổng là $10\\cdot 12=120$. Ban đầu A, B, C có $50,40,30$ người; chuyển xong đều $40$.\nBước 4: Kết luận\nTổng số người ban đầu là $120$."
        },
        {
          "id": "l7-thong-ke-hsg-08",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de"
          ],
          "dang": "dien",
          "title": "Khôi phục bảng từ thông tin gộp",
          "prompt": "Số sản phẩm trong bốn ngày liên tiếp là $a,b,c,d$ (số nguyên không âm), có tổng $80$. Biết $b+c=46$, $a=d$, và $a+b=36$. Ngày có nhiều sản phẩm nhất làm được bao nhiêu sản phẩm?",
          "svg": "",
          "correctAnswer": "27",
          "dapAnChapNhan": [],
          "solution": "Bước 1: Tách hai ngày ngoài\n$a+d=80-(b+c)=34$. Do $a=d$, mỗi ngày này có $17$ sản phẩm.\nBước 2: Khôi phục hai ngày giữa\n$b=36-17=19$, rồi $c=46-19=27$.\nBước 3: Kiểm bảng hoàn chỉnh\nBốn giá trị $17,19,27,17$ là số nguyên không âm, tổng $80$ và thỏa tất cả dữ kiện.\nBước 4: Kết luận\nNgày nhiều nhất có $27$ sản phẩm."
        },
        {
          "id": "l7-thong-ke-hsg-09",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Đoạn nối không thay dữ liệu còn thiếu",
          "prompt": "Một biểu đồ chỉ có hai số đo: ngày 1 là $10$, ngày 5 là $18$, nối bằng đoạn thẳng. Có thể khẳng định số đo thực ở ngày 3 là $14$ và cả năm ngày tăng liên tục không? Hãy lập hai dãy năm số nguyên không âm cùng khớp hai số đo đã có để giải thích.",
          "svg": svgCap2.svgGrade7Batch4("endpoints"),
          "solution": "Bước 1: Phân biệt số đo và nét nối\nHai điểm chỉ xác nhận ngày 1 và ngày 5. Nét nối không tạo thêm số đo cho ngày 2, 3, 4.\nBước 2: Dựng hai bộ dữ liệu\nDãy I là $10,12,14,16,18$: ngày 3 bằng $14$, tăng liên tục.\nDãy II là $10,15,8,20,18$: ngày 3 bằng $8$, có cả tăng và giảm. Cả hai đều khớp hai đầu mút và có năm số nguyên không âm.\nBước 3: Kết luận\nKhông thể khẳng định hai điều nêu trong đề chỉ từ hai số đo. Cần dữ liệu thực của các ngày ở giữa."
        },
        {
          "id": "l7-thong-ke-hsg-10",
          "lop": 7,
          "chuDe": "thong-ke",
          "tang": "hsg",
          "mucDo": "VDC",
          "nangLuc": [
            "tu-duy-lap-luan",
            "giai-quyet-van-de",
            "giao-tiep-toan-hoc"
          ],
          "dang": "chungMinh",
          "title": "Cùng mức tăng chưa cùng tỷ lệ tăng",
          "prompt": "Hai dãy số liệu trong bốn ngày là A: $10,14,12,18$ và B: $20,24,22,28$. Chứng minh giữa bất kỳ hai ngày nào, lượng tăng (có dấu) của hai dãy bằng nhau. Tỷ lệ tăng từ ngày 1 đến ngày 4 có bằng nhau không? Giải thích.",
          "svg": svgCap2.svgGrade7Batch4("shift-series"),
          "solution": "Bước 1: Nhận mối liên hệ\nỞ từng ngày, số liệu B bằng số liệu A cộng $10$.\nBước 2: So hiệu của bất kỳ hai ngày\nGọi hai giá trị của A là $u,v$ thì hai giá trị của B là $u+10,v+10$. Hiệu tương ứng là $(v+10)-(u+10)=v-u$. Điều này đúng cả khi hiệu âm.\nBước 3: Tính tỷ lệ theo số gốc\nTừ ngày 1 đến 4, hai dãy đều tăng $8$. Nhưng A tăng $8/10=80$%, B tăng $8/20=40$%.\nBước 4: Kết luận\nLượng tăng giữa các ngày bằng nhau, nhưng tỷ lệ tăng không nhất thiết bằng nhau vì số gốc khác nhau."
        }
      ]
    }
  };
}

export default getGrade7Topics;
