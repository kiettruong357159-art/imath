/* Closed, reviewed verifiers for the word-problem bank.
 * The verifier receives ONLY the printed givens and proposed answer, never sol1,
 * hints or generator-local variables. Each predicate is an inverse relation,
 * forward simulation, enumeration or geometric invariant.
 * New/changed templates require a matching rule; unknown templates fail closed.
 */
(() => {
  'use strict';
  const VERSION = 'WP3';
  const plain = s => String(s || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  const numbers = s => (plain(s).replace(/(\d)[ \u00a0\u202f]+(?=\d{3}(?:\D|$))/g, '$1').match(/\d+(?:[.,]\d+)?/g) || []).map(s => Number(s.replace(',', '.')));
  const E = (a,b) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a-b) <= Math.max(1e-8,Math.max(Math.abs(a),Math.abs(b))*1e-10);
  function range(a,b) { if (!Number.isInteger(a) || !Number.isInteger(b) || b-a>10000 || b<a) return []; return Array.from({length:b-a+1},(_,i)=>a+i); }
  function repeat(a,b) { if(!Number.isInteger(b)||b<0||b>10000)return NaN; let total=0; for(let i=0;i<b;i++)total+=a; return total; }
  const digits = x => String(x).split('').map(Number);
  const reverse = x => Number(String(x).split('').reverse().join(''));
  const unique = (values,test) => { const matches=values.filter(test); return matches.length===1?matches[0]:NaN; };
  function permutations(items) { return items.length ? items.flatMap((v,i)=>permutations(items.filter((_,j)=>i!==j)).map(p=>[v,...p])) : [[]]; }
  function position(names,test,name) { const positions=new Set(permutations(names).filter(test).map(p=>p.indexOf(name)+1)); return positions.size===1?[...positions][0]:NaN; }
  function gridSquares(rows,cols) { let count=0; for(let s=1;s<=Math.min(rows,cols);s++)for(let y=0;y+s<=rows;y++)for(let x=0;x+s<=cols;x++)count++; return count; }
  function pageDigits(last) { if(!Number.isInteger(last)||last<1||last>10000)return NaN; let total=0; for(let p=1;p<=last;p++)total+=String(p).length; return total; }
  function tileCount(w,h,s) { if(w%s||h%s||s<=0)return NaN; let count=0; for(let y=0;y<h;y+=s)for(let x=0;x<w;x+=s)count++; return count; }
  function borderArea(w,h,s) { let total=0; for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(x<s||y<s||x>=w-s||y>=h-s)total++; return total; }
  function rectangleRatioArea(perimeter,a,b) { const width=perimeter/2*a/(a+b),length=perimeter/2-width; return length*width; }
  function calendarSaturday(evenCount,ordinal) { const out=new Set(); for(let days=28;days<=31;days++)for(let first=1;first<=7;first++){const dates=range(0,4).map(i=>first+7*i).filter(d=>d<=days);if(dates.filter(d=>d%2===0).length===evenCount)out.add(dates[ordinal-1]);}return out.size===1?[...out][0]:NaN; }

  const definitions = [
    [1, 'kha', 0, "Vị trí hàng dọc (Đếm lặp)", 2, 'kha', 1, "1-kha-0", (n, x) => x+1===n[0]+n[1]],
    [1, 'kha', 1, "Người đứng trước và đứng sau", 2, 'kha', 1, "1-kha-1", (n, x) => x-n[0]-1===n[1]],
    [1, 'kha', 2, "So sánh ít hơn 2 bước tính", 2, 'gioi', 1, "less-then-total", (n, x) => x-n[0]+n[1]===n[0]],
    [1, 'kha', 3, "Đếm số lượng trong dãy liên tiếp", 2, 'gioi', 1, "1-kha-3", (n, x) => x>0 && n[0]+x-1===n[1]],
    [1, 'kha', 4, "Tìm số hạng còn thiếu từ tổng", 2, 'kha', 1, "missing-addend", (n, x) => x+n[1]===n[0]],
    [1, 'kha', 5, "Bớt hai lần liên tiếp", 3, 'gioi', 1, "1-kha-5", (n, x) => x+n[1]+n[2]===n[0]],
    [1, 'kha', 6, "Tìm hiệu rồi tìm tổng hai nhóm", 2, 'gioi', 1, "less-then-total", (n, x) => x-n[0]+n[1]===n[0]],
    [1, 'kha', 7, "Gộp ba nhóm bằng phép cộng", 3, 'kha', 1, "1-kha-7", (n, x) => x-n[0]-n[1]===n[2]],
    [1, 'kha', 8, "Thêm rồi bớt trong cùng tình huống", 3, 'gioi', 1, "two-changes", (n, x) => x+n[2]-n[1]===n[0]],
    [1, 'kha', 9, "So sánh tổng của hai giỏ", 4, 'hsg', 1, "1-kha-9", (n, x) => x+n[2]+n[3]===n[0]+n[1]],
    [1, 'gioi', 0, "Thêm bớt liên hoàn thực tế", 3, 'gioi', 1, "two-changes", (n, x) => x+n[1]-n[2]===n[0]],
    [1, 'gioi', 1, "Chuyển kẹo để hai bạn bằng nhau", 2, 'gioi', 1, "1-gioi-1", (n, x) => n[0]-x===n[1]+x],
    [1, 'gioi', 2, "Toán nhát cắt đoạn dây", 1, 'kha', 1, "1-gioi-2", (n, x) => x-1===n[0]],
    [1, 'gioi', 3, "Hiệu số tuổi bất biến theo thời gian", 3, 'gioi', 1, "1-gioi-3", (n, x) => x+(n[1]+n[2])===n[0]+n[2]],
    [1, 'gioi', 4, "Tìm số hạng chưa biết (Tính ngược)", 2, 'kha', 1, "missing-addend", (n, x) => x+n[0]===n[1]],
    [1, 'gioi', 5, "Tách gộp cấu tạo số có 2 chữ số", 3, 'kha', 1, "1-gioi-5", (n, x) => Math.floor(x/10)===n[1] && x%10===n[2]],
    [1, 'gioi', 6, "Độ dài đoạn thẳng gộp", 2, 'kha', 1, "1-gioi-6", (n, x) => x-n[0]===n[1]],
    [1, 'gioi', 7, "So sánh nhiều hơn 2 bước tính", 2, 'gioi', 1, "1-gioi-7", (n, x) => x-n[0]-n[1]===n[0]],
    [1, 'gioi', 8, "Tính ngược hai lần thêm bớt", 3, 'gioi', 1, "1-gioi-8", (n, x) => x+n[0]-n[1]===n[2]],
    [1, 'gioi', 9, "Chuyển đồ vật rồi tìm số ban đầu", 2, 'gioi', 1, "1-gioi-9", (n, x) => x-n[0]===n[1]],
    [1, 'gioi', 10, "Ba bạn hơn kém liên tiếp", 3, 'hsg', 1, "1-gioi-10", (n, x) => x-(n[0]+n[1])-(n[0]+n[1]+n[2])===n[0]],
    [1, 'gioi', 11, "Đếm hình vuông trong lưới 2 nhân 2", 3, 'gioi', 1, "1-gioi-11", (n, x) => x===gridSquares(n[1],n[2])],
    [1, 'gioi', 12, "Dãy số xen kẽ hai quy luật", 5, 'hsg', 1, "1-gioi-12", (n, x) => x-n[4]===n[1]-n[0] && n[3]-n[2]===n[1]-n[0]],
    [1, 'gioi', 13, "Cân hai loại quả qua vật trung gian", 3, 'gioi', 1, "1-gioi-13", (n, x) => x===repeat(n[0]+n[1],n[2])],
    [1, 'hsg', 0, "Bậc thang tầng nhà (Cộng lặp)", 3, 'gioi', 1, "1-hsg-0", (n, x) => x===repeat(n[2],n[1]-n[0])],
    [1, 'hsg', 1, "Mã số trên toa tàu", 1, 'kha', 1, "1-hsg-1", (n, x) => x===digits(n[0]).reduce((a,b)=>a+b,0)],
    [1, 'hsg', 2, "Giải mã số khóa hai chữ số", 3, 'gioi', 1, "1-hsg-2", (n, x) => Math.floor(x/10)===n[1] && digits(x).reduce((a,b)=>a+b,0)===n[2]],
    [1, 'hsg', 3, "Cân thăng bằng hoa quả cộng dồn", 6, 'hsg', 3, "1-hsg-3", (n, x) => x===repeat(repeat(n[5],n[1]),n[3])],
    [1, 'hsg', 4, "Thỏ nhảy đều trên tia số", 4, 'gioi', 1, "1-hsg-4", (n, x) => x-n[3]===n[1]-n[0] && n[2]-n[1]===n[1]-n[0]],
    [1, 'hsg', 5, "Logic suy luận loại trừ màu sắc", 6, 'hsg', 1, "1-hsg-5", (n, x) => x===unique([1,2,3],a=>a!==n[4]&&a!==n[5])],
    [1, 'hsg', 6, "Sắp xếp thứ tự bằng suy luận", 0, 'hsg', 1, "1-hsg-6", (n, x) => x===position(["Dũng","An","Bình","Cúc"],p=>p[0]==="Dũng"&&p[3]==="Cúc"&&p.indexOf("An")<p.indexOf("Bình"),"Bình")],
    [1, 'hsg', 7, "Gà và thỏ bằng suy luận thêm chân", 2, 'hsg', 1, "1-hsg-7", (n, x) => x===unique(range(0,n[0]),a=>repeat(4,a)+repeat(2,n[0]-a)===n[1])],
    [1, 'hsg', 8, "Tìm ba số từ tổng từng cặp", 3, 'hsg', 1, "1-hsg-8", (n, x) => x+(n[0]-x)===n[0] && x+(n[1]-x)===n[1] && n[0]-x+n[1]-x===n[2] && x<=Math.min(n[0],n[1])],
    [1, 'hsg', 9, "Ô số chữ thập cùng tổng", 5, 'hsg', 1, "1-hsg-9", (n, x) => x+n[3]+n[4]===n[0]+n[1]+n[2]],
    [1, 'hsg', 10, "Sắp thứ tự từ ba manh mối", 0, 'hsg', 1, "1-hsg-10", (n, x) => x===position(["An","Bình","Cúc","Dũng"],p=>p.indexOf("Bình")===p.indexOf("An")+1&&p.indexOf("Cúc")<p.indexOf("An")&&p.indexOf("Dũng")>p.indexOf("Bình"),"An")],
    [1, 'hsg', 11, "Chọn đường ngắn nhất trên lưới", 2, 'kha', 1, "1-hsg-11", (n, x) => x-n[0]===n[1]],
    [2, 'kha', 0, "Ý nghĩa phép nhân (Bảng 2, 5)", 2, 'kha', 2, "equal-groups", (n, x) => x===repeat(n[1],n[0])],
    [2, 'kha', 1, "Ý nghĩa phép chia (Bảng 2, 5)", 2, 'kha', 2, "2-kha-1", (n, x) => repeat(n[1],x)===n[0]],
    [2, 'kha', 2, "Tìm thành phần chưa biết trong phạm vi 1000", 2, 'kha', 2, "2-kha-2", (n, x) => x-n[0]===n[1]],
    [2, 'kha', 3, "Đổi đơn vị đo độ dài dm và cm", 2, 'kha', 2, "2-kha-3", (n, x) => x-n[1]===repeat(10,n[0])],
    [2, 'kha', 4, "Cộng các nhóm bằng nhau theo bảng 2", 2, 'kha', 2, "equal-groups", (n, x) => x===repeat(n[1],n[0])],
    [2, 'kha', 5, "Chia đều theo bảng 5", 2, 'kha', 2, "2-kha-5", (n, x) => repeat(x,n[1])===n[0]],
    [2, 'kha', 6, "Mua hai món rồi tính tiền còn lại", 3, 'gioi', 2, "2-kha-6", (n, x) => x+n[1]+n[2]===n[0]],
    [2, 'kha', 7, "Tính thời gian trong cùng một giờ", 4, 'kha', 2, "2-kha-7", (n, x) => x+n[0]*60+n[1]===n[2]*60+n[3]],
    [2, 'kha', 8, "Gấp lên rồi bớt đi", 3, 'gioi', 2, "2-kha-8", (n, x) => x+n[2]===repeat(n[1],n[0])],
    [2, 'kha', 9, "Tính với số chục và số đơn vị", 3, 'gioi', 2, "2-kha-9", (n, x) => Math.floor((x-n[2])/10)===n[0] && (x-n[2])%10===n[1]],
    [2, 'gioi', 0, "Rót dầu giữa 2 thùng để bằng nhau", 6, 'gioi', 2, "2-gioi-0", (n, x) => n[1]-x===n[3]+x],
    [2, 'gioi', 1, "Tuổi tác 2 anh em khi tổng đạt mốc mới", 3, 'hsg', 2, "2-gioi-1", (n, x) => x+(x-(n[0]-n[1]))===n[2]],
    [2, 'gioi', 2, "Đếm chân gà và thỏ (Giả thiết tạm bảng 2)", 2, 'hsg', 2, "2-gioi-2", (n, x) => x===unique(range(0,n[0]),a=>repeat(4,a)+repeat(2,n[0]-a)===n[1])],
    [2, 'gioi', 3, "Trồng cây 2 đầu đường (Bảng 2, 5)", 4, 'gioi', 2, "2-gioi-3", (n, x) => repeat(n[3],x-1)===n[0]],
    [2, 'gioi', 4, "Nhân với 2 hoặc 5 rồi cộng thêm", 3, 'gioi', 2, "reverse-groups", (n, x) => repeat(x,n[0])+n[1]===n[2]],
    [2, 'gioi', 5, "Cắt thanh gỗ thành nhiều đoạn", 2, 'gioi', 2, "2-gioi-5", (n, x) => x===repeat(n[1],n[0]-1)],
    [2, 'gioi', 6, "Độ dài đường gấp khúc gồm các đoạn bằng nhau", 2, 'kha', 2, "2-gioi-6", (n, x) => x===repeat(n[1],n[0])],
    [2, 'gioi', 7, "Số có chữ số hàng chục gấp 2 lần hàng đơn vị", 3, 'gioi', 2, "2-gioi-7", (n, x) => x%10===n[1] && Math.floor(x/10)===repeat(n[1],n[2])],
    [2, 'gioi', 8, "Tìm số nhóm ban đầu sau khi bớt", 3, 'gioi', 2, "2-gioi-8", (n, x) => x-repeat(n[0],n[1])===n[2]],
    [2, 'gioi', 9, "Đếm phần giao của hai nhóm", 3, 'hsg', 2, "2-gioi-9", (n, x) => x+n[2]===n[0]+n[1]],
    [2, 'gioi', 10, "Đếm số vị trí kể cả hai đầu", 2, 'gioi', 2, "2-gioi-10", (n, x) => n[0]+x-1===n[1]],
    [2, 'gioi', 11, "Cân hai bước tìm túi chưa biết", 3, 'gioi', 3, "2-gioi-11", (n, x) => repeat(x,n[0])+n[1]===n[2]],
    [2, 'gioi', 12, "Dãy xen kẽ cộng 2 và cộng 5", 5, 'gioi', 2, "2-gioi-12", (n, x) => x-n[4]===n[1]-n[0] && n[3]-n[2]===n[1]-n[0]],
    [2, 'gioi', 13, "Tìm đoạn còn thiếu trên đường gấp khúc", 3, 'gioi', 2, "2-gioi-13", (n, x) => x+n[1]+n[2]===n[0]],
    [2, 'hsg', 0, "Tổng ba số đôi một (Cân thăng bằng Lớp 2)", 3, 'hsg', 2, "2-hsg-0", (n, x) => repeat(x,2)===n[0]+n[1]+n[2]],
    [2, 'hsg', 1, "Chuyển gạo để hai bao bằng nhau", 2, 'hsg', 2, "2-hsg-1", (n, x) => n[1]-x===n[0]-n[1]+x],
    [2, 'hsg', 2, "Số có hai chữ số và số đảo ngược", 3, 'hsg', 2, "2-hsg-2", (n, x) => digits(x).length===2 && digits(x).reduce((a,b)=>a+b,0)===n[1] && x-reverse(x)===n[2]],
    [2, 'hsg', 3, "Suy luận ngày đầu từ lịch tháng", 2, 'hsg', 2, "2-hsg-3", (n, x) => x===unique(range(1,7),a=>a+7*(n[0]-1)===n[1])],
    [2, 'hsg', 4, "Xếp đội hình theo quy luật", 4, 'hsg', 2, "2-hsg-4", (n, x) => x===range(1,n[0]).reduce((a,b)=>a+b,0)],
    [2, 'hsg', 5, "Hai loại tiền xu", 5, 'hsg', 2, "2-hsg-5", (n, x) => x===unique(range(0,n[0]),a=>repeat(n[2],a)+repeat(n[1],n[0]-a)===n[3])],
    [2, 'hsg', 6, "Trồng cây xung quanh vườn hình vuông có góc", 2, 'hsg', 2, "2-hsg-6", (n, x) => x===repeat(n[0],4)-4],
    [2, 'hsg', 7, "Tính ngược số quà ban đầu", 3, 'gioi', 2, "reverse-groups", (n, x) => repeat(x,n[0])+n[1]===n[2]],
    [2, 'hsg', 8, "Ba hộp hơn kém theo hai quan hệ", 3, 'hsg', 2, "2-hsg-8", (n, x) => x-n[0]-(n[0]+n[1])===n[0]+n[1]-n[2]],
    [2, 'hsg', 9, "Số đoạn sau nhiều lần cắt", 1, 'kha', 2, "2-hsg-9", (n, x) => x-1===n[0]],
    [2, 'hsg', 10, "Ô vuông tổng bằng nhau tìm số thiếu", 5, 'hsg', 2, "2-hsg-10", (n, x) => x+n[3]+n[4]===n[0]+n[1]+n[2]],
    [2, 'hsg', 11, "Tính ngược phép chia bảng 2 hoặc 5", 3, 'gioi', 2, "2-hsg-11", (n, x) => x+n[0]===repeat(n[2],n[1])],
    [3, 'kha', 0, "Bài toán rút về đơn vị (Dạng thuận)", 3, 'gioi', 3, "3-kha-0", (n, x) => E(x*n[0],n[1]*n[2])],
    [3, 'kha', 1, "Bài toán rút về đơn vị (Chia đều vào hộp mới)", 3, 'kha', 3, "3-kha-1", (n, x) => x*n[2]===n[0]],
    [3, 'kha', 2, "Chu vi và diện tích hình chữ nhật gấp bội", 2, 'gioi', 3, "3-kha-2", (n, x) => x===repeat(n[0],n[0]*n[1])],
    [3, 'kha', 3, "Chu vi và diện tích hình vuông", 1, 'gioi', 3, "3-kha-3", (n, x) => E(4*Math.sqrt(x),n[0])],
    [3, 'kha', 4, "Tính tiền nhiều gói cùng giá", 2, 'kha', 3, "3-kha-4", (n, x) => x===repeat(n[0],n[1])],
    [3, 'kha', 5, "Lịch hoạt động qua hai khoảng thời gian", 3, 'kha', 3, "3-kha-5", (n, x) => x-n[0]-n[1]===n[2]],
    [3, 'kha', 6, "Đổi mét và xăng-ti-mét rồi cộng", 3, 'gioi', 3, "3-kha-6", (n, x) => x-n[1]-n[2]===repeat(100,n[0])],
    [3, 'kha', 7, "Chia có dư trong tình huống xếp hàng", 2, 'kha', 3, "3-kha-7", (n, x) => Number.isInteger(x)&&x*n[1]<=n[0]&&(x+1)*n[1]>n[0]],
    [3, 'kha', 8, "Mua nhiều món rồi tính tiền thừa", 3, 'gioi', 3, "3-kha-8", (n, x) => x+repeat(n[0],n[1])===n[2]],
    [3, 'kha', 9, "Chu vi khi chiều dài hơn chiều rộng", 2, 'gioi', 3, "3-kha-9", (n, x) => x===n[0]+n[0]+n[1]+n[0]+n[0]+n[1]],
    [3, 'gioi', 0, "Tuổi mẹ gấp k lần tuổi con", 3, 'hsg', 3, "3-gioi-0", (n, x) => n[0]+x===(n[1]+x)*n[2]],
    [3, 'gioi', 1, "Phép chia có số dư lớn nhất", 2, 'gioi', 3, "3-gioi-1", (n, x) => Math.floor(x/n[0])===n[1] && x%n[0]===n[0]-1],
    [3, 'gioi', 2, "Mảnh đất mở rộng chiều dài diện tích tăng thêm", 3, 'hsg', 3, "3-gioi-2", (n, x) => x===repeat(n[2]/n[1]+n[0],n[2]/n[1])],
    [3, 'gioi', 3, "Gấp lên nhiều lần rồi bớt đi (Tính ngược)", 3, 'gioi', 3, "3-gioi-3", (n, x) => x*n[0]-n[1]===n[2]],
    [3, 'gioi', 4, "Đếm chữ số dùng để đánh số trang sách", 3, 'gioi', 3, "page-digits", (n, x) => x===pageDigits(n[0])],
    [3, 'gioi', 5, "Trồng cây xung quanh hồ tròn / vườn khép kín", 2, 'gioi', 3, "3-gioi-5", (n, x) => x*n[1]===n[0]],
    [3, 'gioi', 6, "Khối lượng vỏ thùng và lượng dầu", 2, 'hsg', 3, "3-gioi-6", (n, x) => n[0]-x===2*(n[1]-x)],
    [3, 'gioi', 7, "Tìm số có 3 chữ số biết mối quan hệ các hàng", 4, 'gioi', 3, "3-gioi-7", (n, x) => digits(x).length===3 && x%10===n[1] && Math.floor(x/10)%10===n[1]*n[2] && Math.floor(x/100)===n[1]*n[2]*n[3]],
    [3, 'gioi', 8, "Đổi số hàng làm thay đổi số người mỗi hàng", 3, 'kha', 3, "3-gioi-8", (n, x) => x*n[2]===n[0]],
    [3, 'gioi', 9, "Chu vi hàng rào có chừa cổng", 3, 'gioi', 3, "3-gioi-9", (n, x) => x+n[2]===n[0]+n[1]+n[0]+n[1]],
    [3, 'gioi', 10, "Chia đều rồi tìm tổng ban đầu", 3, 'gioi', 3, "3-gioi-10", (n, x) => x-n[0]===repeat(n[2],n[1])],
    [3, 'gioi', 11, "Đảo chữ số hàng trăm và hàng đơn vị", 1, 'gioi', 3, "3-gioi-11", (n, x) => x===Math.abs(reverse(n[0])-n[0])],
    [3, 'gioi', 12, "Kho hàng nhập rồi xuất hai lần", 4, 'gioi', 3, "3-gioi-12", (n, x) => x+n[2]+n[3]-n[1]===n[0]],
    [3, 'gioi', 13, "Tìm chiều rộng từ diện tích hình chữ nhật", 2, 'kha', 3, "3-gioi-13", (n, x) => x*n[1]===n[0]],
    [3, 'hsg', 0, "Lịch tháng có 3 ngày thứ Bảy là ngày chẵn", 2, 'hsg', 3, "3-hsg-0", (n, x) => x===calendarSaturday(n[0],n[1])],
    [3, 'hsg', 1, "Tổng số nhãn dán tăng đều mỗi ngày", 4, 'hsg', 3, "3-hsg-1", (n, x) => n[3]===n[0]+(n[2]-1)*n[1] && x===range(0,n[2]-1).reduce((s,i)=>s+n[0]+i*n[1],0)],
    [3, 'hsg', 2, "Cắt hình và so sánh chu vi", 3, 'gioi', 3, "3-hsg-2", (n, x) => x===repeat(n[1]+n[1]+n[1]+n[1],n[2])],
    [3, 'hsg', 3, "Chuyển số lượng để hai bên bằng nhau", 2, 'gioi', 3, "3-hsg-3", (n, x) => n[0]-x===n[1]+x],
    [3, 'hsg', 4, "Chuyển bi làm xuất hiện tỉ số", 3, 'hsg', 3, "3-hsg-4", (n, x) => (x-n[1])*n[2]===n[0]-x+n[1]],
    [3, 'hsg', 5, "Tuổi tác 3 thế hệ (Ông, Bố, Con)", 3, 'hsg', 3, "3-hsg-5", (n, x) => x+(x+n[1])+(x+n[1]+n[2])===n[0]],
    [3, 'hsg', 6, "Tìm số bị chia và số chia khi biết thương & dư", 3, 'hsg', 3, "3-hsg-6", (n, x) => Number.isInteger((x-n[1])/n[0]) && (x-n[1])/n[0]>n[1] && x+(x-n[1])/n[0]+n[0]+n[1]===n[2]],
    [3, 'hsg', 7, "Cắt tấm bìa hình chữ nhật thành hình vuông", 3, 'gioi', 3, "3-hsg-7", (n, x) => x===tileCount(n[0],n[1],n[2])],
    [3, 'hsg', 8, "Đếm chữ số khi đánh số trang dưới 100", 2, 'gioi', 3, "page-digits", (n, x) => x===pageDigits(n[1])],
    [3, 'hsg', 9, "Tìm số cùng dư trong một khoảng", 5, 'hsg', 3, "3-hsg-9", (n, x) => x===unique(range(n[0]+1,n[1]-1),a=>a%n[2]===n[4]&&a%n[3]===n[4])],
    [3, 'hsg', 10, "Ba thế hệ với hai quan hệ tuổi", 3, 'hsg', 3, "3-hsg-10", (n, x) => x+x*n[0]+x*n[0]+n[1]===n[2]],
    [3, 'hsg', 11, "Năng suất mỗi ngày khi hoàn thành sớm", 3, 'gioi', 3, "3-hsg-11", (n, x) => x*(n[1]-n[2])===n[0]],
    [3, 'hsg', 12, "Hình ghép hai chữ nhật chung chiều rộng", 3, 'gioi', 3, "3-hsg-12", (n, x) => x===repeat(n[0],Math.max(n[1],n[2]))],
    [3, 'hsg', 13, "Chia đồ vật theo hai điều kiện liên tiếp", 3, 'kha', 3, "3-hsg-13", (n, x) => x*n[1]+n[2]===n[0]],
    [4, 'kha', 0, "Tìm hai số khi biết Tổng và Tỉ số", 3, 'gioi', 5, "4-kha-0", (n, x) => E((n[0]-x)*n[2],x*n[1])],
    [4, 'kha', 1, "Tìm hai số khi biết Hiệu và Tỉ số", 3, 'gioi', 5, "4-kha-1", (n, x) => E(x*n[2],(x-n[0])*n[1])],
    [4, 'kha', 2, "Tìm hai số khi biết Tổng và Hiệu", 2, 'kha', 4, "4-kha-2", (n, x) => x-(n[0]-x)===n[1]],
    [4, 'kha', 3, "Tìm phân số của một số", 3, 'kha', 4, "4-kha-3", (n, x) => E(x*n[2],n[0]*n[1])],
    [4, 'kha', 4, "Tìm số còn thiếu từ trung bình cộng", 3, 'gioi', 4, "4-kha-4", (n, x) => E((x+n[1]+n[2])/3,n[0])],
    [4, 'kha', 5, "Bán một phần rồi tìm số còn lại", 3, 'gioi', 4, "remaining-fraction", (n, x) => E((n[0]-x)*n[2],n[0]*n[1])],
    [4, 'kha', 6, "Diện tích lối đi trong hình chữ nhật", 3, 'hsg', 4, "4-kha-6", (n, x) => x===borderArea(n[0],n[1],n[2])],
    [4, 'kha', 7, "Quan hệ giá hai loại hàng", 3, 'gioi', 4, "4-kha-7", (n, x) => x===repeat(repeat(n[1],n[0]),n[2])],
    [4, 'kha', 8, "Tìm phần còn lại của một lớp học", 3, 'gioi', 4, "remaining-fraction", (n, x) => E((n[0]-x)*n[2],n[0]*n[1])],
    [4, 'kha', 9, "Đổi tấn ra ki-lô-gam rồi tính", 3, 'kha', 4, "4-kha-9", (n, x) => x+n[2]-n[1]===repeat(1000,n[0])],
    [4, 'gioi', 0, "Hai số chẵn có k số chẵn ở giữa (Sửa Bug Chẵn)", 2, 'hsg', 4, "4-gioi-0", (n, x) => x%2===0 && (n[0]-x)%2===0 && range(n[0]-x+1,x-1).filter(a=>a%2===0).length===n[1]],
    [4, 'gioi', 1, "Trung bình cộng: Số thứ 3 hơn TBC của 3 số", 3, 'hsg', 4, "4-gioi-1", (n, x) => E(x-(n[0]+n[1]+x)/3,n[2])],
    [4, 'gioi', 2, "Giả thiết tạm Gà và Chó kinh điển", 2, 'hsg', 4, "4-gioi-2", (n, x) => x===unique(range(0,n[0]),a=>4*a+2*(n[0]-a)===n[1])],
    [4, 'gioi', 3, "Chu vi và diện tích hình chữ nhật theo tỉ số", 3, 'hsg', 5, "4-gioi-3", (n, x) => x===rectangleRatioArea(n[0],n[1],n[2])],
    [4, 'gioi', 4, "Trồng cây 2 bên đường cả 2 đầu", 2, 'gioi', 4, "4-gioi-4", (n, x) => (x/2-1)*n[1]===n[0]],
    [4, 'gioi', 5, "Viết thêm chữ số vào bên trái", 3, 'hsg', 4, "4-gioi-5", (n, x) => digits(x).length===n[0] && Number(String(n[1])+String(x))===x*n[2]],
    [4, 'gioi', 6, "Trung bình cộng của 3 số cơ bản", 3, 'kha', 4, "4-gioi-6", (n, x) => E(x*3,n[0]+n[1]+n[2])],
    [4, 'gioi', 7, "Mảnh đất hình vuông chu vi và diện tích", 1, 'gioi', 4, "4-gioi-7", (n, x) => E(4*Math.sqrt(x),n[0])],
    [4, 'gioi', 8, "Tổng hiệu ẩn qua hai thay đổi", 3, 'hsg', 4, "4-gioi-8", (n, x) => x-n[2]===n[0]-x+n[1]],
    [4, 'gioi', 9, "Chuyển một lượng làm hai bên đổi tỉ số", 3, 'hsg', 5, "4-gioi-9", (n, x) => E((x-n[2])*n[0],(x*n[1]/n[0]+n[2])*n[0])],
    [4, 'gioi', 10, "Trung bình của từng cặp số", 3, 'hsg', 4, "4-gioi-10", (n, x) => E(x,n[0]+n[1]+n[2])],
    [4, 'gioi', 11, "Tìm số ban đầu từ phân số còn lại", 5, 'hsg', 4, "4-gioi-11", (n, x) => E((x-x*n[0]/n[1])*(1-n[2]/n[3]),n[4])],
    [4, 'gioi', 12, "Sửa một số sai làm đổi trung bình", 4, 'gioi', 4, "4-gioi-12", (n, x) => E(x*n[0]-(n[3]-n[2]),n[0]*n[1])],
    [4, 'gioi', 13, "Chia phần thưởng theo tỉ lệ ba nhóm", 4, 'hsg', 5, "4-gioi-13", (n, x) => E(x*(n[1]+n[2]+n[3]),n[0]*n[3])],
    [4, 'hsg', 0, "Tỉ số liên hoàn 3 đối tượng (An - Bình - Cúc)", 5, 'hsg', 5, "4-hsg-0", (n, x) => E(x+x*n[2]/n[1]+x*n[2]*n[4]/(n[1]*n[3]),n[0])],
    [4, 'hsg', 1, "Giả thiết tạm: Bán vé xem phim 2 loại giá", 5, 'hsg', 4, "4-hsg-1", (n, x) => x===unique(range(0,n[0]),a=>a*n[2]+(n[0]-a)*n[1]===n[3])],
    [4, 'hsg', 2, "Đánh số trang sách cần N chữ số, hỏi số trang", 1, 'hsg', 4, "4-hsg-2", (n, x) => pageDigits(x)===n[0]],
    [4, 'hsg', 3, "Tuổi tác nâng cao (Khi tuổi anh bằng tuổi em hiện nay)", 2, 'hsg', 4, "4-hsg-3", (n, x) => E(x,n[1]*(x-(n[0]-x)))],
    [4, 'hsg', 4, "Hiệu tỉ ẩn (Cùng thêm hoặc bớt lượng k)", 4, 'hsg', 5, "4-hsg-4", (n, x) => E((x-n[1])*n[3],(x+n[0]-n[1])*n[2])],
    [4, 'hsg', 5, "Tuổi tác qua 2 mốc thời gian", 3, 'hsg', 4, "4-hsg-5", (n, x) => E(x-n[1],(x/n[0]-n[1])*n[2])],
    [4, 'hsg', 6, "Trung bình cộng vượt mức nhóm 4 bạn", 5, 'hsg', 4, "4-hsg-6", (n, x) => E(x-(n[0]+n[1]+n[2]+x)/n[3],n[4])],
    [4, 'hsg', 7, "Chuyển đổi số lượng làm thay đổi tỉ số", 3, 'hsg', 4, "4-hsg-7", (n, x) => E(n[2]-n[0],(x+n[0])*n[1])],
    [4, 'hsg', 8, "Tổng quãng đường phân số theo quy luật", 12, 'hsg', 4, "telescoping", (n, x) => E(x,range(1,n.at(-2)).reduce((s,i)=>s+1/(i*(i+1)),0))],
    [4, 'hsg', 9, "Hai loại xe biết tổng bánh", 3, 'hsg', 4, "4-hsg-9", (n, x) => x===unique(range(0,n[0]),a=>a*3+(n[0]-a)*n[1]===n[2])],
    [4, 'hsg', 10, "Thêm bớt làm thay đổi tỉ số", 3, 'hsg', 5, "4-hsg-10", (n, x) => E(x*n[0]/n[1]+n[2],x)],
    [4, 'hsg', 11, "Tổng phân số theo quy luật bù trừ", 14, 'hsg', 4, "telescoping", (n, x) => E(x,range(1,n.at(-2)).reduce((s,i)=>s+1/(i*(i+1)),0))],
    [4, 'hsg', 12, "Tìm số bị bỏ khỏi nhóm trung bình", 4, 'gioi', 4, "4-hsg-12", (n, x) => E(x+n[2]*n[3],n[0]*n[1])],
    [4, 'hsg', 13, "Tuổi qua hai mốc gấp nhau", 3, 'hsg', 4, "4-hsg-13", (n, x) => E(x*n[0]+n[1],(x+n[1])*n[2])],
    [5, 'kha', 0, "Chuyển động ngược chiều gặp nhau", 5, 'kha', 5, "5-kha-0", (n, x) => E(x*n[2]+x*n[4],n[0])],
    [5, 'kha', 1, "Tỉ số phần trăm của hai số", 2, 'kha', 5, "5-kha-1", (n, x) => E(x*n[0]/100,n[1])],
    [5, 'kha', 2, "Chuyển động cùng chiều đuổi nhau", 3, 'gioi', 5, "5-kha-2", (n, x) => E(x*n[2],n[1]+x*n[0])],
    [5, 'kha', 3, "Tính giá trị phần trăm (Lãi suất tiết kiệm)", 2, 'kha', 5, "5-kha-3", (n, x) => E(x/n[0]*100,n[1])],
    [5, 'kha', 4, "Tìm số ban đầu khi biết giá trị phần trăm", 2, 'kha', 5, "5-kha-4", (n, x) => E(x*n[1]/100,n[0])],
    [5, 'kha', 5, "Vận tốc trung bình của hai chặng", 4, 'gioi', 5, "5-kha-5", (n, x) => E(x*(n[0]+n[2]),n[0]*n[1]+n[2]*n[3])],
    [5, 'kha', 6, "Tìm chiều cao hình hộp từ thể tích", 3, 'gioi', 5, "5-kha-6", (n, x) => E(x*n[1]*n[2],n[0])],
    [5, 'kha', 7, "Phân số còn lại sau hai lần sử dụng", 5, 'hsg', 5, "two-remaining-fractions", (n, x) => E(x*(1-n[0]/n[1])*(1-n[2]/n[3]),n[4])],
    [5, 'kha', 8, "Tìm số còn lại sau khi biết phần trăm", 2, 'gioi', 5, "5-kha-8", (n, x) => E((n[0]-x)/n[0]*100,n[1])],
    [5, 'kha', 9, "Thể tích bể và phần nước đang có", 7, 'gioi', 5, "5-kha-9", (n, x) => E(x*n[4],n[0]*n[1]*n[2]*n[3])],
    [5, 'gioi', 0, "Chuyển động đuổi nhau lệch thời gian", 3, 'gioi', 5, "5-gioi-0", (n, x) => E(x*n[2],(x+n[1])*n[0])],
    [5, 'gioi', 1, "Công việc chung (Hai vòi nước)", 4, 'gioi', 5, "5-gioi-1", (n, x) => E(x/n[1]+x/n[3],1)],
    [5, 'gioi', 2, "Tỉ số % kinh doanh: Lãi theo giá bán", 2, 'gioi', 5, "5-gioi-2", (n, x) => E((n[0]-x)/n[0]*100,n[1])],
    [5, 'gioi', 3, "Tỉ số % kinh doanh: Lãi theo giá vốn", 2, 'gioi', 5, "5-gioi-3", (n, x) => E((x-n[0])/n[0]*100,n[1])],
    [5, 'gioi', 4, "Tỉ số diện tích tam giác chung chiều cao", 3, 'gioi', 5, "5-gioi-4", (n, x) => E(x*n[2],n[0]*n[1])],
    [5, 'gioi', 5, "Chuyển động ngược chiều: Điểm gặp cách A", 3, 'gioi', 5, "5-gioi-5", (n, x) => E(x/n[1],(n[0]-x)/n[2])],
    [5, 'gioi', 6, "Vòi chảy vào và vòi tháo ra", 5, 'gioi', 5, "5-gioi-6", (n, x) => E(x/n[1]-x/n[3],1)],
    [5, 'gioi', 7, "Thể tích hình hộp: Mực nước dâng lên", 3, 'gioi', 5, "5-gioi-7", (n, x) => E(x/n[0]/n[1],n[2])],
    [5, 'gioi', 8, "Tìm giá gốc sau tăng rồi giảm phần trăm", 3, 'hsg', 5, "reverse-two-percent", (n, x) => E(x*(1+n[0]/100)*(1-n[1]/100),n[2])],
    [5, 'gioi', 9, "Vận tốc trung bình có thời gian nghỉ", 3, 'gioi', 5, "5-gioi-9", (n, x) => E(x*(n[0]+n[2]),n[0]*n[1])],
    [5, 'gioi', 10, "Công việc làm theo hai giai đoạn", 4, 'gioi', 5, "5-gioi-10", (n, x) => E(x*n[3]+n[1]*n[2],n[0])],
    [5, 'gioi', 11, "Diện tích thay đổi khi đổi hai kích thước", 4, 'gioi', 5, "5-gioi-11", (n, x) => E(x,repeat(n[0]+n[2],n[1]-n[3]))],
    [5, 'gioi', 12, "Tìm số ban đầu từ hai phân số đã dùng", 5, 'hsg', 5, "two-remaining-fractions", (n, x) => E(x*(1-n[0]/n[1])*(1-n[2]/n[3]),n[4])],
    [5, 'gioi', 13, "Hai loại sản phẩm biết tổng số và tổng tiền", 4, 'hsg', 5, "5-gioi-13", (n, x) => x===unique(range(0,n[0]),a=>a*n[2]+(n[0]-a)*n[1]===n[3])],
    [5, 'hsg', 0, "Đoàn tàu vượt chướng ngại vật (Cột điện & Cầu)", 3, 'hsg', 5, "5-hsg-0", (n, x) => E(x/n[0],(x+n[1])/n[2])],
    [5, 'hsg', 1, "Ca-nô xuôi dòng và ngược dòng", 3, 'hsg', 5, "5-hsg-1", (n, x) => E(n[0]===n[1]?NaN:x/n[0]-x/n[1],2*n[2])],
    [5, 'hsg', 2, "Tỉ số % giảm giá kép (Sale 2 lần liên tiếp)", 3, 'hsg', 5, "5-hsg-2", (n, x) => E(x*(1-n[0]/100)*(1-n[1]/100),100+n[2])],
    [5, 'hsg', 3, "Tỉ số diện tích tam giác cắt ghép (S_ABE / S_ABC)", 5, 'hsg', 5, "5-hsg-3", (n, x) => E(x*n[2]*n[4],n[0]*n[1]*n[3])],
    [5, 'hsg', 4, "Đoàn tàu vượt người đi bộ ngược chiều", 3, 'hsg', 5, "5-hsg-4", (n, x) => E(x/n[2]*3.6,n[0]+n[1])],
    [5, 'hsg', 5, "Chó đuổi thỏ (Tỉ số bước nhảy)", 4, 'hsg', 5, "5-hsg-5", (n, x) => E(x*n[3],n[0]+x*n[1]/n[2])],
    [5, 'hsg', 6, "Công việc chung của 3 người", 3, 'hsg', 5, "5-hsg-6", (n, x) => E(x/n[0]+x/n[1]+x/n[2],1)],
    [5, 'hsg', 7, "Tỉ số kép 3 đại lượng nối tiếp", 5, 'hsg', 5, "5-hsg-7", (n, x) => E(x+x*n[2]/n[1]+x*n[2]*n[4]/(n[1]*n[3]),n[0])],
    [5, 'hsg', 8, "Chuyển động vòng tròn cùng chiều gặp nhau", 5, 'hsg', 5, "5-hsg-8", (n, x) => E(x*n[2]-x*n[4],n[0])],
    [5, 'hsg', 9, "Toán nồng độ dung dịch & pha chế nước muối", 3, 'hsg', 5, "5-hsg-9", (n, x) => E(n[0]*n[1],(n[0]+x)*n[2])],
    [5, 'hsg', 10, "Toán đồng hồ: Hai kim trùng nhau", 1, 'hsg', 5, "5-hsg-10", (n, x) => E(x*6,n[0]*30+x/2)],
    [5, 'hsg', 11, "Hình thang & Diện tích tam giác cánh bướm", 2, 'hsg', 5, "5-hsg-11", (n, x) => E(x/n[1],n[0])],
    [5, 'hsg', 12, "Thay đổi vận tốc làm đổi thời điểm gặp", 4, 'hsg', 5, "5-hsg-12", (n, x) => E(x*n[1]+x*n[2]+x*n[3],n[0])],
    [5, 'hsg', 13, "Giá niêm yết qua giảm giá và thuế", 3, 'hsg', 5, "reverse-two-percent", (n, x) => E(x*(1-n[0]/100)*(1+n[1]/100),n[2])],
    [5, 'hsg', 14, "Chuyển sách làm hai ngăn theo tỉ số mới", 3, 'hsg', 5, "5-hsg-14", (n, x) => E(x-n[2],x*n[1]/n[0]+n[2])],
    [5, 'hsg', 15, "Tổng dãy phân số hình học hữu hạn", 12, 'hsg', 5, "5-hsg-15", (n, x) => E(x,n.filter((_,i)=>i%2===1).reduce((s,d)=>s+1/d,0))]
  ];
  definitions.push(
    [4,'kha',10,'Đóng đủ hộp và để lại phần dư',2,'kha',4,'whole-packets',(n,x)=>Number.isInteger(x)&&x*n[1]<=n[0]&&(x+1)*n[1]>n[0]],
    [4,'kha',11,'Thời gian hoạt động qua giờ tiếp theo',4,'kha',4,'elapsed-cross-hour',(n,x)=>n[0]*60+n[1]+x===n[2]*60+n[3]],
    [4,'gioi',14,'So sánh diện tích khi cùng thêm chiều dài',3,'gioi',4,'compare-area-increments',(n,x)=>x+repeat(n[1],n[2])===repeat(n[0],n[2])],
    [5,'kha',10,'Bổ sung lượng còn thiếu bằng số thập phân',2,'kha',5,'decimal-complement',(n,x)=>E(x+n[1],n[0])],
    [5,'kha',11,'Làm tròn số đo đến đơn vị gần nhất',1,'kha',5,'round-measure',(n,x)=>Number.isInteger(x)&&n[0]>=x-0.5&&n[0]<x+0.5]
  );
  const registry = new Map();
  const labels={kha:'🟡 Mức KHÁ',gioi:'🟠 Mức GIỎI',hsg:'🔴 THỬ THÁCH'};
  function addDefinition(row) {
    const [grade,sourceTier,index,archetype,numberCount,tier,minGrade,family,test]=row;
    const templateId='L'+grade+'-'+sourceTier+'-'+index;
    const spec=Object.freeze({templateId,grade,sourceTier,index,archetype,numberCount,tier,minGrade,templateFamily:'L'+grade+':'+family,test});
    registry.set(templateId,spec); return spec;
  }
  definitions.forEach(addDefinition);
  function specFor(question) {
    const spec=registry.get(question.templateId);
    return spec && question.archetype===spec.archetype ? spec : null;
  }
  function decorate(question,spec) {
    return {...question,templateId:spec.templateId,templateFamily:spec.templateFamily,
      grade:spec.grade,tier:spec.tier,tierLabel:labels[spec.tier],
      difficultyProfile:{tier:spec.tier,basis:'reviewed-template',sourceTier:spec.sourceTier},
      bankVersion:VERSION};
  }
  function verify(question,grade) {
    const spec=specFor(question);
    if(!spec)return {valid:false,reason:'Khuôn chưa có quy tắc kiểm chứng độc lập.'};
    if(question.bankVersion!==VERSION || question.grade!==spec.grade || question.tier!==spec.tier || question.templateFamily!==spec.templateFamily)return {valid:false,reason:'Metadata không khớp khuôn đã rà soát.'};
    if(spec.grade!==Number(grade)||spec.minGrade>Number(grade))return {valid:false,reason:'Khuôn nằm ngoài phạm vi kiến thức của lớp.'};
    const n=numbers(question.text),x=Number(question.answer);
    const correctCount = spec.templateId === 'L5-hsg-15' ? [8,10,12].includes(n.length) : n.length === spec.numberCount;
    if(!correctCount)return {valid:false,reason:'Dữ kiện không khớp khuôn đã kiểm duyệt.'};
    let valid=false;try{valid=Number.isFinite(x)&&Boolean(spec.test(n,x));}catch(_){}
    return {valid,reason:valid?'':'Đáp án không thỏa dữ kiện đề bài.',strategy:'forward-constraints',givens:n};
  }
  function install() {
    for(let grade=1;grade<=5;grade++){
      const pool=window['LOP'+grade+'_POOLS'];const active={kha:[],gioi:[],hsg:[]};
      for(const sourceTier of ['kha','gioi','hsg'])pool[sourceTier].forEach((factory,index)=>{
        const spec=registry.get('L'+grade+'-'+sourceTier+'-'+index);
        if(!spec)throw new Error('Unreviewed template: '+grade+'/'+sourceTier+'/'+index);
        if(spec.minGrade>grade)return;
        const wrapped=()=>decorate(factory(),spec);
        wrapped.templateId=spec.templateId;wrapped.templateFamily=spec.templateFamily;
        active[spec.tier].push(wrapped);
      });
      window['LOP'+grade+'_POOLS']=active;
    }
  }
  install();
  window.WordProblemVerification=Object.freeze({VERSION,numbers,specFor,verify,catalog:Object.freeze([...registry.values()])});
})();
