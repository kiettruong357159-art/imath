/**
 * i18n.js — Từ điển Việt/Anh và helper dịch chữ giao diện mới.
 * Dùng: mọi màn học sinh, lời giải, báo cáo và trang in.
 * Nội dung câu hỏi do API dịch; file này chỉ dịch nhãn do giao diện tự sinh.
 */
(() => {
  'use strict';

  const EN = {
    'Đang duy trì · Mọi lớp · từ 1 câu/ngày': 'Ongoing · All grades · at least 1 answer/day',
    'Cần bắt đầu · Mọi lớp · từ 1 câu/ngày': 'Start now · All grades · at least 1 answer/day',
    'Tỉ lệ thể hiện câu tự làm đúng. Câu đúng nhờ gợi ý được ghi riêng.': 'Percentages show unassisted correct answers. Correct answers with hints are shown separately.',
    "Bài cô/thầy giao": "Teacher assignments",
    "Lớp học, bài được giao và kết quả của em": "Your classes, assignments and results",
    "Có bài chưa nộp": "You have assignments to submit",
    "Bố mẹ đồng ý cho giáo viên xem kết quả học của em": "My parent agrees that my teacher can see my learning results",
    "Lớp đang chờ bố mẹ đồng ý.": "This class is waiting for parent consent.",
    "Đã đồng ý cho giáo viên xem kết quả.": "Sharing learning results with the teacher is enabled.",
    "Giáo viên xem tên hiển thị, điểm, câu sai và lỗi hay gặp. Em có thể thu hồi ở đây.": "Your teacher can see your display name, scores, incorrect answers and common mistakes. You can withdraw consent here.",
    "Đã vào lớp.": "You have joined the class.",
    "Đã vào lớp. Bố mẹ có thể đồng ý ngay tại đây.": "You have joined the class. Your parent can agree here.",
    "Vào lớp": "Join class", "Đồng ý": "Agree", "Thu hồi": "Withdraw",
    "Đổi sang lớp": "Change to grade",
    "Chuyển lớp": "Change grade",
    "Đã hết lượt đổi lớp. Muốn đổi thêm, phụ huynh liên hệ iMath.": "No grade changes remain. A parent can contact iMath for help.",
    "Kết quả và tiến độ lớp cũ vẫn được giữ.": "Your previous grade's results and progress are kept.",
    "Mở lộ trình cần nhập lại mật khẩu tài khoản.": "Enter your account password to unlock more weeks.",
    "Sẵn sàng vào học": "Ready to learn",
    "Tiến độ 35 tuần": "35-week progress",
    "Đã làm": "Completed",
    "Học tập": "Learning",
    "Xem và sửa": "View and manage",
    "Kết quả lớp cũ vẫn giữ.": "Previous grades and scores are kept.",
    "Chỉ mở thêm, không khóa lại.": "Open more weeks without locking earlier ones.",
    "Mở lộ trình đến": "Unlock learning path to",
    "Vào học với tài khoản con": "Start learning as this child",
    "Lịch sử đổi lớp": "Grade change history",
    "Con vừa đổi lớp": "Your child has just changed grade",
    "Học sinh": "Student",
    "Quản trị": "Administrator",
    "Nhập lại mật khẩu tài khoản để xác nhận:": "Enter your account password to confirm:",
    "Xác nhận thay đổi": "Confirm the change",
    "Nhắc nộp bài:": "Assignment reminder:",
    "Xác nhận": "Confirm",
    "Mở": "Unlock",

    "Toán lời văn": "Word problems",
    "dạng bài": "problem types",
    "Bài toán có ba bước tính": "Three-step word problems",
    "Tìm hai số biết tổng và hiệu": "Finding two numbers from their sum and difference",
    "Tìm số trung bình cộng": "Finding the mean",
    "Bài toán liên quan đến rút về đơn vị": "Unitary method word problems",
    "Hơn, kém nhau bao nhiêu": "How many more or fewer?",
    "Cộng qua 10: gộp cho tròn 10": "Addition across 10: make ten",
    "Trừ qua 10: bớt về 10": "Subtraction across 10: subtract to ten",
    "Bài toán thêm, bớt, nhiều hơn, ít hơn": "Adding, taking away, more and fewer",
    "Cộng, trừ có nhớ đến 100 bằng thanh chục": "Regrouping to 100 using tens bars",
    "Nhân là các nhóm bằng nhau, chia là chia đều": "Equal groups and equal sharing",
    "Trăm, chục, đơn vị": "Hundreds, tens and ones",
    "Cộng, trừ trong phạm vi 1 000 và đo lường": "Addition and subtraction to 1 000 and measurement",
    "Dạng đề thi THPT": "Upper secondary exam style",
    "Dạng đề thi vào 10": "Grade 10 entrance exam style",
    "Dạng đề thi vào 6": "Grade 6 entrance exam style",
    "Câu song sinh cùng dạng": "A twin question of the same type",
    "Em đúng": "You got",
    "ý": "statements correct",
    "điểm": "points",
    "Bước": "Step",
    "Em làm bài ra giấy": "Work out your solution on paper",
    "Em đã làm xong": "I have finished",
    "Bài giải mẫu — tự chấm từng bước": "Model solution — assess each step",
    "Em tự chấm:": "My self-assessment:",
    "Lỗi hay bị trừ điểm": "Common mistakes that lose marks",
    "Điểm tự luận lưu riêng, không cộng vào điểm đề.": "Self-assessed marks are saved separately and do not count towards the test score.",
    "Lưu điểm tự chấm": "Save self-assessment",
    "Tự luận (tự chấm):": "Written solution (self-assessed):",
    "Ôn câu đã sai": "Review mistakes",
    "câu": "questions",
    "Tất cả tuần": "All weeks",
    "Chưa sửa": "Not corrected",
    "Đã sửa": "Corrected",
    "Ôn 10 câu": "Review 10 questions",
    "Em đã sửa hết các câu sai — tiếp tục phát huy nhé!": "You have corrected all your mistakes — keep it up!",
    "Làm đúng lại để chuyển câu sang Đã sửa. Điểm đề cũ giữ nguyên.": "Answer correctly to mark a question as corrected. Your earlier test score stays the same.",
    'Học toán thông minh · Bứt phá tư duy': 'Smart maths learning · Stronger thinking',
    'Trang phụ huynh': 'Parent dashboard', 'Xin chào phụ huynh': 'Welcome, parent',
    'Các con của tôi': 'My children', 'Tạo tài khoản cho con': 'Create an account for your child',
    'Gắn tài khoản có sẵn': 'Link an existing account', 'Xem báo cáo': 'View report',
    'Đặt lại mật khẩu': 'Reset password', 'Mật khẩu của con': "Child's password",
    'Mật khẩu mới cho con': 'New password for your child', 'Tạo và gắn tài khoản': 'Create and link account',
    'Gắn tài khoản': 'Link account', 'Chọn con': 'Choose a child', 'Chưa có tài khoản con nào được gắn.': 'No child account is linked yet.',
    'Xác nhận của phụ huynh': 'Parent consent',
    'Tôi xác nhận mình là cha, mẹ hoặc người giám hộ và đồng ý để iMath lưu kết quả học tập của con theo Nghị định 13/2023.':
      "I confirm that I am the child's parent or guardian and consent to iMath storing the child's learning results under Decree 13/2023.",
    'Đồng ý và tiếp tục': 'Agree and continue', 'Đăng nhập học sinh': 'Student login',
    'Bắt đầu học cùng iMath': 'Start learning with iMath', 'Bắt đầu học': 'Start learning',
    'Chỉ cần tên của con và lớp đang học.': "Just enter your child's name and current grade.",
    'Tên của con': "Child's name", 'Thêm con': 'Add a child', 'Chọn con để vào học': 'Choose a child to start learning',
    'Vào học →': 'Start learning →', 'Tên đăng nhập:': 'Username:',
    'Vào học': 'Start learning', 'Đang học': 'Currently learning', 'Đổi lớp': 'Change grade',
    'Đổi {name} sang Lớp {grade}? Kết quả các lớp trước vẫn giữ.':
      'Change {name} to Grade {grade}? Results from previous grades will be kept.',
    'Phụ huynh': 'Parents', 'Quản lý các tài khoản con': 'Manage child accounts',
    'Chọn tuần': 'Choose a week', 'Mở lộ trình': 'Unlock learning path',
    'Những câu em đã lưu để ôn lại': 'Questions you saved for review',
    'Phụ huynh / Parent': 'Parent', 'Đăng nhập bằng Google': 'Sign in with Google',
    'Đăng nhập với Google': 'Sign in with Google', 'hoặc': 'or',
    'hoặc đăng nhập bằng tên đăng nhập': 'or sign in with your username',
    'Một chạm là con vào học, không cần nhớ mật khẩu': 'One tap and your child starts learning — no password to remember',
    'Khách': 'Guest',
    'Đăng nhập để mở đề Nâng cao nhẹ và lưu kết quả': 'Sign in to unlock Gentle challenge tests and save your results',
    'Học tiếp và lưu kết quả': 'Keep learning and save your results',
    'Đăng nhập bằng Google để lưu kết quả và mở Nâng cao nhẹ': 'Sign in with Google to save your results and unlock Gentle challenge tests',
    'Làm tiếp đề khác': 'Try another test',
    'iMath.vn, về Lộ trình học': 'iMath.vn, back to Learning path',
    'Điều hướng chính': 'Main navigation',
    'Lộ trình học': 'Learning path', 'Luyện thêm/Đề thi': 'Extra practice / Tests', 'Luyện thêm / Đề thi': 'Extra practice / Tests',
    'Báo cáo học tập': 'Progress report', 'Đấu trường': 'Arena', 'Tài liệu': 'Materials', 'Tiện ích': 'Tools', 'Thêm': 'More',
    '✋ Tính nhẩm bằng ngón tay': '✋ Finger maths', '✋ Thử tính bằng ngón tay': '✋ Try finger maths',
    'Ngôn ngữ': 'Language', 'Tiếng Việt': 'Vietnamese', 'Song ngữ': 'Bilingual', 'Tìm kiếm': 'Search', 'Thông báo': 'Notifications',
    'Học sinh': 'Student', 'Tìm đề trong lớp đang chọn': 'Search tests in the selected grade', 'Tên đề hoặc chuyên đề': 'Test or topic name', 'Đăng xuất': 'Log out',
    'Tài khoản của em': 'My account', 'Hồ sơ': 'Profile', 'Hồ sơ của em': 'My profile',
    'Thông tin bé': 'Child information', 'Sửa thông tin bé': 'Edit child information', 'Cài đặt': 'Settings',
    'Đổi mật khẩu': 'Change password', 'Tên hiển thị': 'Display name', 'Lớp đang học': 'Current grade',
    'Ảnh đại diện': 'Avatar', 'Lưu hồ sơ': 'Save profile', 'Đã lưu hồ sơ.': 'Profile saved.',
    'Tên, ngày sinh, ảnh đại diện và lớp đang học': 'Name, date of birth, avatar and current grade',
    'Chọn thông tin và hình em muốn nhìn thấy trên iMath.': 'Choose the information and picture you want to see on iMath.',
    'Giới tính': 'Gender', 'Chưa chọn': 'Not selected', 'Nam': 'Male', 'Nữ': 'Female',
    'Không muốn nói': 'Prefer not to say', 'Lưu thay đổi': 'Save changes', 'Huỷ': 'Cancel',
    'Đã lưu thay đổi.': 'Changes saved.',
    'Muốn đổi lớp, phụ huynh liên hệ iMath.': 'To change grade, ask a parent to contact iMath.',
    'Ngôn ngữ mặc định': 'Default language', 'Đọc to': 'Read aloud', 'Lưu cài đặt': 'Save settings',
    'Đã lưu cài đặt.': 'Settings saved.', 'Mật khẩu hiện tại': 'Current password', 'Mật khẩu mới': 'New password',
    'Nhập lại mật khẩu mới': 'Confirm new password', 'Nhớ báo ba mẹ mật khẩu mới nhé.': 'Remember to tell your parent your new password.',
    'Tên hiển thị, ảnh đại diện và lớp đang học': 'Display name, avatar and current grade',
    'Năng lực, huy hiệu và lịch ôn của em': 'Your skills, badges and review schedule',
    'Lịch sử làm bài': 'Learning history', 'Điểm, thời gian và các bài em đã làm': 'Your scores, study time and completed tests',
    'Xem các bài con đã làm và lời giải đã mở.': "View your child's completed tests and available solutions.",
    'Xem lại các bài em đã làm và sự tiến bộ theo thời gian.': 'Review your completed tests and progress over time.',
    'Tất cả loại bài': 'All test types', 'Loại bài': 'Test type', 'Từ ngày': 'From', 'Đến ngày': 'To', 'Lọc': 'Filter',
    'Xuất báo cáo CSV': 'Export CSV', 'Tổng số bài đã làm': 'Tests completed', 'Điểm trung bình': 'Average score',
    'Bài điểm cao nhất': 'Highest score', 'Thời gian trung bình': 'Average time', 'Chuỗi ngày học': 'Study streak',
    'phút': 'minutes', 'Xem lại': 'Review', 'Em chưa có lượt làm nào trong khoảng này': 'No completed tests in this period',
    'Bắt đầu từ lộ trình tuần để lưu những bước tiến đầu tiên nhé.': 'Start with the weekly learning path and save your first progress.',
    'Vào lộ trình tuần': 'Go to weekly learning path', 'Chưa trả lời': 'Not answered',
    'Ngôn ngữ mặc định và đọc to': 'Default language and read aloud', 'Giữ tài khoản của em an toàn': 'Keep your account secure',
    'Chọn tên và hình em muốn nhìn thấy trên iMath.': 'Choose the name and picture you want to see on iMath.',
    'Cài đặt này được nhớ theo tài khoản của em.': 'These settings are saved to your account.',
    'Hiện nút 🔊 trong đề bài, gợi ý và lời giải.': 'Show the 🔊 button in questions, hints and solutions.',
    'Mật khẩu mới có ít nhất 6 ký tự và khác mật khẩu hiện tại.': 'Use at least 6 characters and choose a different password.',
    'Hồ sơ, báo cáo và cài đặt học tập của em ở cùng một nơi.': 'Your profile, reports and learning settings in one place.',
    'Thông tin bé, báo cáo và cài đặt học tập của em ở cùng một nơi.': 'Child information, reports and learning settings in one place.',
    'Báo cáo tuần này': "This week's report", 'Xem tiến độ, huy hiệu và phần em cần luyện thêm': 'See progress, badges and topics to practise',
    'Mật khẩu nhập lại chưa khớp.': 'The passwords do not match.',
    'Chọn lớp học': 'Choose a grade', 'Chọn học kỳ': 'Choose a term', 'Học kỳ I': 'Term 1', 'Học kỳ II': 'Term 2',
    'Tuần 1–18': 'Weeks 1–18', 'Tuần 19–35': 'Weeks 19–35', 'Nâng cao & thi': 'Challenge & exams', 'Toán tư duy': 'Thinking maths',
    'Toán tư duy Singapore': 'Singapore maths', 'Thử thách Violympic': 'Violympic challenge', 'Luyện thêm SGK': 'Textbook practice',
    'Vào lớp 6 CLC': 'Grade 6 entrance practice', 'Đề thi vào lớp 6 CLC': 'Grade 6 entrance exams',
    'Sắp có': 'Coming soon', 'Đang tải dữ liệu...': 'Loading...', 'Đang tải...': 'Loading...',
    'Đang biên soạn': 'In preparation', 'Nội dung luyện tập đang được biên soạn.': 'Practice content is being prepared.',
    'Không có đề phù hợp trong lớp đang chọn.': 'No matching test in the selected grade.',

    'Chào mừng em trở lại': 'Welcome back', 'Chào mừng em': 'Welcome', 'trở lại!': 'back!',
    'Đăng nhập để tiếp tục lộ trình học của mình.': 'Log in to continue your learning path.',
    'Đăng nhập để tiếp tục hành trình học toán thật vui và hiệu quả cùng iMath.vn nhé!': 'Log in to continue learning maths with iMath.vn.',
    'Tên đăng nhập': 'Username', 'Mật khẩu': 'Password', 'Nhập tên đăng nhập': 'Enter username', 'Nhập mật khẩu': 'Enter password',
    'Hiện mật khẩu': 'Show password', 'Ẩn mật khẩu': 'Hide password', 'Ghi nhớ đăng nhập': 'Remember me', 'Quên mật khẩu?': 'Forgot password?',
    'Đăng nhập': 'Log in', 'Đang đăng nhập…': 'Logging in…', 'Đăng ký': 'Create account', 'Cần hỗ trợ?': 'Need help?',
    '← Quay lại trang học': '← Back to learning',
    'Về iMath.vn': 'About iMath.vn', 'Trợ giúp': 'Help', 'Cùng bắt đầu': "Let's get started", 'nhé!': '',
    'Tạo tài khoản để khám phá hành trình học toán cùng iMath.vn.': 'Create an account to start learning maths with iMath.vn.',
    'Lớp cần học': 'Grade', 'Chọn lớp': 'Choose a grade', 'Thông tin thêm (không bắt buộc)': 'Additional information (optional)',
    'Số điện thoại': 'Phone number', 'Ngày sinh': 'Date of birth', 'Quê quán': 'Hometown', 'Quay lại đăng nhập': 'Back to login',
    'Lấy lại mật khẩu': 'Reset password', 'Đóng': 'Close',
    'Nhờ ba mẹ đăng nhập bằng Google để đặt lại mật khẩu cho em.': 'Ask your parent to sign in with Google and reset your password.',
    'Đã đặt lại mật khẩu.': 'Password reset.',
    'Mở trang hỗ trợ iMath.vn ↗': 'Open iMath.vn support ↗',
    'Cú iMath bên chồng sách Toán, Tư duy và Khám phá': 'iMath owl beside Maths, Thinking and Discovery books',
    'Bảng phép tính, bóng đèn, trường học, sách và bút chì': 'Maths board, light bulb, school, books and pencil',
    'Sổ iMath và ngôi sao': 'iMath notebook and star',

    'Lộ trình theo tuần': 'Weekly learning path', 'Học đều mỗi ngày, tiến bộ vững chắc từng tuần.': 'Learn a little every day and make steady progress each week.',
    'Tuần học': 'Weeks', 'Đề theo tuần': 'Weekly tests', 'Câu hỏi': 'Questions', 'Đề lộ trình đã làm': 'Tests completed',
    'Mục tiêu tuần:': 'Weekly goal:', 'Chưa làm': 'Not started', 'Sẵn sàng': 'Ready', 'Vào làm bài': 'Start', 'Làm lại': 'Retry',
    'Đề 1 - Cơ bản': 'Test 1 - Basic', 'Đề 2 - Luyện chắc': 'Test 2 - Practice', 'Đề 3 - Nâng cao nhẹ': 'Test 3 - Gentle challenge',
    'Lộ trình học kỳ này đang được biên soạn.': 'This term learning path is being prepared.',
    'Trong lúc chờ, em luyện theo chuyên mục nhé': 'In the meantime, practise by topic.', 'Vào Luyện thêm': 'Go to Extra practice',
    'Xem tất cả': 'View all', 'Đề tổng hợp': 'Mixed tests', 'Ôn theo chủ đề': 'Practice by topic',
    'Giữa kỳ 1': 'Mid-term 1', 'Cuối kỳ 1': 'End-of-term 1', 'Giữa kỳ 2': 'Mid-term 2', 'Cuối kỳ 2': 'End-of-term 2',
    'Cuối năm': 'End-of-year', '1 kỳ · 2 đề': '1 exam period · 2 tests',
    'Các đề kiểm tra theo từng giai đoạn học.': 'Tests for each stage of the school year.',
    'Chọn chuyên mục để luyện đúng phần em cần.': 'Choose a topic to practise what you need.',
    'Vào xem đề': 'View tests', 'Đã mở': 'Available', 'Mở từ tuần': 'Opens in week', 'Điểm tốt nhất:': 'Best score:',
    'Bắt đầu làm bài': 'Start test', 'Quay lại': 'Back',
    'Chọn chuyên mục để xem các đề đang có.': 'Choose a topic to view available tests.',
    'Chọn chuyên mục hoặc đề cuối kỳ để luyện tập.': 'Choose a topic or end-of-term test to practise.',
    'Luyện đúng trọng tâm, tiến bộ từng ngày': 'Focused practice, daily progress',
    'Chuyên mục Lớp 1': 'Grade 1 topics', 'Luyện nâng cao': 'Advanced practice',
    'Ôn theo chủ đề và luyện đề tổng hợp theo từng giai đoạn học tập.': 'Practise by topic and take mixed tests throughout the school year.',
    'Kiên trì luyện tập hôm nay để đạt được những thành tích tuyệt vời ngày mai!': 'Keep practising today to achieve great things tomorrow!',
    'Chuyên mục': 'Topics', 'Chưa mở': 'Locked', 'Bộ 1': 'Set 1', 'Bộ 1 · Đang biên soạn': 'Set 1 · In preparation',
    'Luyện thêm': 'Extra practice', 'Luyện thêm - Nâng cao': 'Practice - Advanced', 'Luyện thi học sinh giỏi': 'Maths competition practice', 'Danh sách đề': 'Test list',
    'Chuyên đề và đề thi thử': 'Topics and mock exams',
    'Chọn chuyên đề · Làm bài · Xem lời giải và tự đối chiếu': 'Choose a topic · Practise · Review solutions and your work',
    'Chuyên mục này chưa có đề sẵn sàng.': 'No tests are ready in this topic yet.', 'Bắt đầu': 'Start', 'Đề mẫu': 'Sample test',
    'Hình học & Đại lượng trực quan': 'Visual geometry & measurement', 'bộ trực quan': 'visual sets',
    'Ôn tập & đề tổng hợp': 'Review & mixed tests', 'Ôn hình & đo lường': 'Geometry & measurement review', 'Xem chủ đề': 'View topics',
    'Bài toán thực tế': 'Real-life problems', 'Diện tích': 'Area', 'Đơn vị diện tích': 'Area units',
    'Đơn vị thể tích': 'Volume units', 'Hình hộp và thể tích': 'Cuboids and volume',
    'Số đo thời gian': 'Time measurements', 'Tam giác, hình thang, hình tròn': 'Triangles, trapezoids and circles',
    'Toán Singapore': 'Singapore maths', 'chủ đề': 'topics', 'câu': 'questions', 'Vào luyện': 'Start practice',
    'Mở từ tuần': 'Opens in week',
    'Tách – gộp số đến 10': 'Number bonds to 10', 'Phép cộng là gộp': 'Addition means combining',
    'Phép trừ là bớt / tách': 'Subtraction means taking away or separating',
    'Thêm – bớt để bằng nhau': 'Adding or removing to make equal', 'Quy luật và suy luận': 'Patterns and reasoning',
    'Chục và đơn vị': 'Tens and ones', 'Đo bằng thanh (cm)': 'Measuring with bars (cm)',
    'Cộng – trừ không nhớ đến 100': 'Addition and subtraction without regrouping to 100',
    'Quan sát hình, đo lường và giải bài toán thực tế': 'Explore diagrams, measurement and real-life problems',
    'Hình vẽ lớn, rõ ràng · 15 câu mỗi bộ': 'Large, clear diagrams · 15 questions per set',
    'Xem 7 bộ': 'View 7 sets', 'Đăng nhập để học': 'Sign in to practise', 'bộ': 'sets',

    'Năng lực': 'Competency', 'Ôn đúng lúc': 'Review on time', 'Sửa câu sai': 'Review mistakes',
    'Theo dõi sự chăm học, thái độ và năng lực của em.': 'Track your study habits, attitude and skills.',
    'Tuần này': 'This week', 'Tháng này': 'This month', 'Cả năm': 'Full year', 'Khoảng báo cáo': 'Report period',
    'Tải phiếu năng lực (PDF)': 'Download competency report (PDF)', 'Tóm tắt cho ba mẹ': 'Summary for parents',
    'Chưa đủ dữ liệu để tổng hợp.': 'Not enough data for a summary.', 'Hành động đề xuất': 'Recommended action', 'Cần rèn': 'Needs practice',
    'Luyện ngay →': 'Practise now →', 'Chăm học': 'Study habits', 'Thái độ làm bài': 'Test habits',
    'Theo nhóm': 'By strand', 'Chuyên mục trong nhóm': 'Topics in this strand', 'Theo mức độ': 'By difficulty',
    'Lỗi hay mắc': 'Common mistakes', 'Điểm 4 kỳ': 'Four term scores', 'Tiến bộ': 'Progress', 'Kỳ': 'Test period',
    'Lần đầu': 'First score', 'Tốt nhất': 'Best score', 'Chưa đủ dữ liệu': 'Not enough data', 'Vững': 'Strong', 'Đạt': 'Achieved',
    'N3 · Theo nhóm': 'N3 · By strand', 'N1 · Chuyên mục trong nhóm': 'N1 · Topics in this strand', 'N2 · Theo mức độ': 'N2 · By difficulty',
    'N4 · Lỗi hay mắc': 'N4 · Common mistakes', 'N5 · Điểm 4 kỳ': 'N5 · Four term scores', 'N6 · Tiến bộ': 'N6 · Progress',
    'T1 · Làm vội': 'T1 · Rushing', 'T2 · Đoán mò': 'T2 · Guessing', 'T3 · Kiên trì': 'T3 · Perseverance',
    'Tạm ổn': 'Developing', 'Cần cố gắng': 'Keep trying', 'Em cần ôn lại kiến thức gốc': 'Review the core knowledge first.',
    'Em biết làm bài cơ bản, cần luyện bài vận dụng': 'You can solve basic questions. Practise applying your knowledge.',
    'Em có khả năng làm bài nâng cao': 'You are ready for advanced questions.', 'Làm vội': 'Rushing', 'Đoán mò': 'Guessing', 'Kiên trì': 'Perseverance',
    'C1 · Ngày học': 'C1 · Study days', 'C2 · Chuỗi ngày học': 'C2 · Study streak', 'C3 · Thời gian tuần này': 'C3 · Time this week',
    'C4 · Tiến độ lộ trình': 'C4 · Path progress', 'C5 · Hoàn thành đề': 'C5 · Test completion', 'C6 · Ôn đúng lúc': 'C6 · Review on time',
    'C7 · Chịu sửa sai': 'C7 · Learning from mistakes', 'Đang duy trì': 'Ongoing', 'Cần bắt đầu': 'Time to start',
    'Chưa đủ dữ liệu so tuần trước': 'Not enough data to compare with last week', 'Chưa đủ dữ liệu để đưa ra chẩn đoán.': 'Not enough data for a diagnosis.',
    'Em chưa có chuyên mục cần rèn trong khoảng này.': 'No topics need extra practice in this period.',
    'Em bấm nhanh, có thể chưa đọc kỹ': 'You answered quickly and may not have read carefully', 'Nhịp làm bài phù hợp': 'Your pace is appropriate',
    'Cần đọc kỹ dữ kiện trước khi chọn': 'Read the information carefully before choosing', 'Chưa có dấu hiệu đoán mò': 'No signs of guessing',
    'Em đã làm lại và tăng điểm.': 'You retried and improved your score.', 'Chưa ghi nhận lượt làm lại tăng điểm.': 'No improved retry recorded yet.',
    'Em hay': 'Often:', 'Rất tốt': 'Excellent', 'Tốt': 'Good', 'Đều đặn': 'Consistent', 'Cần đều đặn hơn': 'Be more consistent', 'Hay bỏ dở': 'Often unfinished',
    'đến lịch ôn': 'due for review', 'cần xem lại': 'to review', 'Ôn câu này': 'Review this question',
    'Chưa có câu đến lịch ôn.': 'No questions are due for review.', 'Chưa có câu sai cần sửa.': 'No incorrect answers to review.',

    'Câu trước': 'Previous question', 'Câu tiếp theo': 'Next question', 'Xem kết quả': 'View results', 'Thoát': 'Exit', 'Kiểm tra': 'Check',
    'Em đã đọc kỹ đề chưa? Đọc lại một lần nhé': 'Have you read the question carefully? Read it once more.',
    'Đáp số': 'Answer', 'Phím nhanh': 'Quick keys', 'Học sinh giỏi': 'Challenge',
    'Em tự đánh giá:': 'How confident are you?', 'Chắc chắn': 'Sure', 'Phân vân': 'Not sure', 'Đoán': 'Guessing',
    'Em hãy nhập đáp số trước nhé.': 'Enter your answer first.',
    'Gợi ý': 'Hint', 'Đã hết gợi ý': 'No more hints', 'Câu này chưa có gợi ý — em đọc lại đề thật chậm nhé': 'No hint is available for this question — read the question again very slowly',
    'Xem sơ đồ': 'View diagram', 'Tiếp': 'Next', 'Xem hết': 'Show all', 'Em vẫn chưa hiểu': "I still don't understand",
    'Cú iMath': 'iMath Owl', 'Em chưa hiểu chỗ nào? Cú iMath chỉ cho em nhé!': "Which part is confusing? iMath Owl will help you!",
    '🔍 Em không hiểu đề hỏi gì': "🔍 I don't understand the question", '🧭 Em không biết bắt đầu từ đâu': "🧭 I don't know where to start",
    '✏️ Em không hiểu bước số …': "✏️ I don't understand a step", '❓ Em không hiểu vì sao đáp án của em sai': "❓ I don't understand why my answer was wrong",
    'Vì sao đáp án của em sai?': 'Why was my answer wrong?', 'Gợi ý tiếp →': 'Next hint →', '📊 Xem sơ đồ': '📊 View diagram',
    'Bước': 'Step', 'Làm một câu dễ hơn cùng loại': 'Try an easier question of the same type', 'Câu dễ hơn cùng loại': 'An easier question of the same type',
    'Làm thêm một câu dễ khác': 'Try another easier question', 'không cần dùng': 'not needed',
    'Quay lại câu cũ': 'Back to the original question', 'Giờ em hiểu chưa?': 'Do you understand now?', 'Đã hiểu': 'I understand', 'Chưa hiểu': 'I still need help',
    'Cú iMath khen em đã kiên trì tìm hiểu!': 'iMath Owl is proud of you for keeping at it!',
    'Em nhờ ba mẹ hoặc thầy cô giảng câu này nhé': 'Please ask a parent or teacher to explain this question.', 'Mã câu:': 'Question ID:',
    'Câu em cần người lớn giảng thêm': 'Questions to discuss with an adult', 'Chưa có câu nào cần người lớn giảng thêm.': 'No questions need adult help yet.',
    'Huy hiệu nỗ lực mới!': 'New effort badge!', 'Nỗ lực mỗi ngày': 'Daily effort', 'Huy hiệu nỗ lực': 'Effort badges',
    'ngày liên tiếp': 'days in a row', 'Em hãy tiếp tục cố gắng để nhận huy hiệu đầu tiên nhé!': 'Keep trying to earn your first effort badge!',
    'Lý do chưa hiểu theo chuyên mục': 'Reasons for needing help by topic', 'chưa hiểu đề': 'did not understand the question',
    'chưa biết bắt đầu': 'did not know where to start', 'chưa hiểu bước giải': 'did not understand a step', 'chưa hiểu vì sao sai': 'did not understand why the answer was wrong',
    'Kiến thức:': 'Topic:', 'Học ở Tuần': 'Taught in week', 'Ôn lại tuần này →': 'Review this week →', 'Xem lý thuyết ↗': 'Read the theory ↗ (Vietnamese)',
    'Đã ghi lại': 'Saved', 'Em làm đúng rồi!': 'Great job!', 'Chưa đúng rồi, em xem lời giải nhé.': "Not quite. Let's review the solution.",
    'Câu hỏi yêu thích': 'Favourite questions', 'ÔN TẬP CÁ NHÂN': 'PERSONAL REVIEW',
    'Lưu những câu hay, khó hoặc cần ôn lại để luyện bất cứ lúc nào.': 'Save useful, difficult, or review questions and practise them any time.',
    'Lưu câu hỏi yêu thích': 'Save as favourite', 'Bỏ yêu thích': 'Remove favourite', 'Đã yêu thích': 'Saved', 'Yêu thích': 'Favourite',
    'Lý do lưu': 'Save reason', 'Hay': 'Useful', 'Khó': 'Difficult', 'Cần ôn lại': 'Review again',
    'Lớp': 'Grade', 'Lý do': 'Reason', 'Tất cả lớp': 'All grades', 'Tất cả chuyên mục': 'All topics', 'Tất cả lý do': 'All reasons',
    'Ngày lưu': 'Saved on', 'Xem lời giải': 'View solution', 'Làm ngay': 'Try now', 'Ôn các câu yêu thích': 'Practise favourites',
    'Chưa có câu hỏi yêu thích': 'No favourite questions yet', 'Bấm ngôi sao ở câu hỏi em muốn lưu lại.': 'Select the star on any question you want to save.',
    'Đang tải lời giải...': 'Loading solution...', 'Em làm câu này trước rồi xem lời giải nhé': 'Try this question before viewing the solution.',
    'Lời giải đầy đủ': 'Full solution', 'Đáp án đúng': 'Correct answer', 'Vì sao sai:': 'Why it is wrong:', 'Phương án này chưa đúng.': 'This option is not correct.',
    'Em trả lời:': 'Your answer:', 'Đáp án đúng:': 'Correct answer:', 'Xem thêm lời giải': 'More solution',
    'Đề cho gì, hỏi gì?': 'What do we know? What do we need to find?',
    'Đây là dạng bài gì?': 'What kind of problem is this?', 'Em cần nhớ': 'Remember', 'Có mấy cách làm?': 'How many ways can we solve it?',
    'Vì sao làm cách này?': 'Why this way?', 'Các bước giải': 'Steps', 'Thử lại': 'Check', 'Trình bày bài giải': 'Write the solution',
    'Sơ đồ đoạn thẳng': 'Bar model', 'Cách khác': 'Another way', 'Dạng tương tự': 'Similar problem', 'Phân tích đề': 'Problem analysis',
    'Nhận diện bản chất': 'Identify the key idea', 'Kiến thức sử dụng': 'Knowledge used', 'So sánh các hướng giải': 'Compare solution methods',
    'Chọn hướng giải tối ưu': 'Choose the best method', 'Lời giải chi tiết': 'Detailed solution', 'Kiểm tra kết quả': 'Check the result',
    'Trình bày để đạt điểm tối đa': 'Write for full marks', 'Sơ đồ': 'Diagram', 'Câu trả lời': 'Answer', 'Nhập đáp án': 'Enter your answer', 'Nhập đáp số': 'Enter your answer',
    'Chủ đề cần rèn': 'Topics to practise', 'Em làm tốt tất cả chủ đề!': 'You did well in every topic!', 'KẾT QUẢ BÀI LÀM': 'TEST RESULT',
    'Chưa đạt': 'Keep practising', 'Quay về': 'Back', 'Đúng': 'Correct', 'Sai': 'Incorrect', 'Chưa trả lời': 'Not answered',
    'Em chọn:': 'Your answer:', 'Đáp án:': 'Correct answer:', 'Đang kiểm tra...': 'Checking...', 'Đang lưu điểm...': 'Saving score...',
    'Tính nhanh, biểu thức, dãy cách đều': 'Mental maths, expressions and arithmetic sequences',
    'Cấu tạo số': 'Number structure',
    'Chia hết, số dư, chữ số tận cùng': 'Divisibility, remainders and last digits',
    'Tính nhanh, dãy phân số, so sánh và chặn': 'Mental maths, fraction sequences, comparison and bounds',
    'Chia hết, số dư': 'Divisibility and remainders',
    'Hàm số bậc hai và tham số': 'Quadratic functions and parameters',
    'Phương trình và bất phương trình chứa căn': 'Radical equations and inequalities',
    'Hệ phương trình': 'Systems of equations'
  };

  const solutionNames = {
    primary: { tom_tat: 'Đề cho gì, hỏi gì?', nhan_dien: 'Đây là dạng bài gì?', ghi_nho: 'Em cần nhớ', so_sanh_huong: 'Có mấy cách làm?', huong_giai: 'Vì sao làm cách này?', explanation: 'Các bước giải', thu_lai: 'Thử lại', trinh_bay: 'Trình bày bài giải', so_do: 'Sơ đồ đoạn thẳng', cach_khac: 'Cách khác', mo_rong: 'Dạng tương tự' },
    secondary: { tom_tat: 'Phân tích đề', nhan_dien: 'Nhận diện bản chất', ghi_nho: 'Kiến thức sử dụng', so_sanh_huong: 'So sánh các hướng giải', huong_giai: 'Chọn hướng giải tối ưu', explanation: 'Lời giải chi tiết', thu_lai: 'Kiểm tra kết quả', trinh_bay: 'Trình bày để đạt điểm tối đa', so_do: 'Sơ đồ', cach_khac: 'Cách khác', mo_rong: 'Dạng tương tự' },
    en: { tom_tat: 'What do we know? What do we need to find?', nhan_dien: 'What kind of problem is this?', ghi_nho: 'Remember', so_sanh_huong: 'How many ways can we solve it?', huong_giai: 'Why this way?', explanation: 'Steps', thu_lai: 'Check', trinh_bay: 'Write the solution', so_do: 'Bar model', cach_khac: 'Another way', mo_rong: 'Similar problem' }
  };

  const accountKey = (username) => `imath-language:${username || 'guest'}`;
  const load = (username) => { const value = localStorage.getItem(accountKey(username)); return ['vi', 'en', 'bi'].includes(value) ? value : 'vi'; };
  const save = (username, lang) => localStorage.setItem(accountKey(username), lang);
  const style = () => localStorage.getItem('imath-bilingual-style') === '2' ? '2' : '1';
  const setStyle = (value) => localStorage.setItem('imath-bilingual-style', value === '2' ? '2' : '1');

  function dynamicEnglish(value) {
    if (Object.hasOwn(EN, value)) return EN[value];
    const rules = [
      [/^(\d+) đúng nhờ gợi ý$/, '$1 correct with hints'],
      [/^(\d+) đúng, chưa rõ dùng gợi ý$/, '$1 correct, hint use unknown'],
      [/^Chuyên đề (\d+)\s*[—–-]\s*(.+)$/u, (_m, number, title) => `Topic ${number} — ${dynamicEnglish(title)}`],
      [/^Đã đổi lớp (\d+)\/(\d+) lần\.$/, 'Grade changes used: $1/$2.'],
      [/^Còn (\d+) lần đổi lớp\.$/, '$1 grade changes remaining.'],
      [/^Chuyển sang Lớp (\d+)$/, 'Switch to Grade $1'],
      [/^Đã chuyển từ Lớp (\d+) sang Lớp (\d+)\.$/, 'Changed from Grade $1 to Grade $2.'],
      [/^Con đã làm tới tuần (\d+) · Đang mở tới tuần (\d+)$/, 'Completed through week $1 · Open through week $2'],
      [/^Mở đến tuần (\d+)\? Con sẽ thấy tuần 1–(\d+)\.$/, 'Open through week $1? Your child will see weeks 1–$2.'],
      [/^Đã mở lộ trình đến tuần (\d+)\.$/, 'Learning path opened through week $1.'],
      [/^Tuần (\d+)–(\d+) mở bởi phụ huynh, chưa làm\.$/, 'Weeks $1–$2 were opened by a parent and have not been completed.'],
      [/^Lớp (\d+)$/, 'Grade $1'], [/^Lớp (\d+) · Sắp có$/, 'Grade $1 · Coming soon'],
      [/^Lớp (\d+) · Chưa mở$/, 'Grade $1 · Locked'], [/^Tuần (\d+)$/, 'Week $1'],
      [/^Xong (\d+)\/(\d+)$/, 'Done $1/$2'], [/^Đang làm (\d+)\/(\d+)$/, 'In progress $1/$2'],
      [/^(\d+) đề$/, (_m, count) => `${count} ${count === '1' ? 'test' : 'tests'}`],
      [/^(\d+) câu$/, (_m, count) => `${count} ${count === '1' ? 'question' : 'questions'}`],
      [/^([\d.,]+) phút$/, (_m, count) => `${count} ${count === '1' ? 'minute' : 'minutes'}`],
      [/^(\d+) ngày$/, (_m, count) => `${count} ${count === '1' ? 'day' : 'days'}`],
      [/^· Lớp (\d+)$/, '· Grade $1'], [/^· (\d+) câu$/, '· $1 questions'], [/^· (\d+) đề$/, '· $1 tests'],
      [/^(\d+) lần$/, '$1 times'], [/^(\d+) lượt đủ dữ liệu$/, '$1 eligible attempts'], [/^(\d+)\/7 ngày(.*)$/, '$1/7 days$2'], [/^Vượt (\d+) tuần$/, '$1 weeks ahead'],
      [/^(\d+)\/(\d+) điểm$/, '$1/$2 points'], [/^Mở từ tuần (\d+)$/, 'Opens in week $1'], [/^Sai (\d+)\/(\d+) câu$/, '$1/$2 incorrect'],
      [/^Câu (\d+)(.*)$/, 'Question $1$2'], [/^Lộ trình học › Lớp (\d+)$/, 'Learning path › Grade $1'],
      [/^Hình minh họa câu (\d+)$/, 'Illustration for question $1'], [/^Xem nhóm (.+)$/, 'View group: $1'],
      [/^Luyện thêm \/ Đề thi › Lớp (\d+)$/, 'Extra practice / Tests › Grade $1'],
      [/^Luyện thêm \/ Đề thi › Lớp (\d+) › Học kỳ I$/, 'Extra practice / Tests › Grade $1 › Term 1'],
      [/^Luyện thêm \/ Đề thi › Lớp (\d+) › Học kỳ II$/, 'Extra practice / Tests › Grade $1 › Term 2'],
      [/^Luyện thêm – Lớp (\d+)$/, 'Extra practice – Grade $1'], [/^Luyện thêm – Lớp (\d+) · Học kỳ I$/, 'Extra practice – Grade $1 · Term 1'],
      [/^Luyện thêm – Lớp (\d+) · Học kỳ II$/, 'Extra practice – Grade $1 · Term 2'],
      [/^Lộ trình tuần Lớp (\d+) đang biên soạn$/, 'The Grade $1 weekly path is being prepared'],
      [/^Ôn theo chủ đề · Học kỳ I$/, 'Practice by topic · Term 1'], [/^Ôn theo chủ đề · Học kỳ II$/, 'Practice by topic · Term 2'],
      [/^Đề tổng hợp · Học kỳ I$/, 'Mixed tests · Term 1'], [/^Đề tổng hợp · Học kỳ II$/, 'Mixed tests · Term 2'],
      [/^Ôn tập & đề tổng hợp · Học kỳ I$/, 'Review & mixed tests · Term 1'], [/^Ôn tập & đề tổng hợp · Học kỳ II$/, 'Review & mixed tests · Term 2'],
      [/^Ôn hình & đo lường · (\d+) chủ đề$/, 'Geometry & measurement review · $1 topics'],
      [/^(\d+) kỳ · (\d+) đề mỗi kỳ · ôn hình (\d+) chủ đề$/, '$1 periods · $2 tests each · geometry review: $3 topics'],
      [/^(\d+) kỳ · (\d+) đề mỗi kỳ$/, '$1 periods · $2 tests each'], [/^(\d+) chuyên mục đã mở$/, '$1 topics available'],
      [/^(\d+) câu đến lịch ôn\.$/, '$1 questions due for review.'], [/^(\d+) câu cần xem lại\.$/, '$1 questions to review.'],
      [/^đã mở (\d+)\/(\d+) chuyên mục$/, '$1/$2 topics available'], [/^(\d+) chuyên mục$/, '$1 topics'],
      [/^(\d+) đề sẵn sàng$/, '$1 tests ready'], [/^tuần (\d+)$/, 'week $1'],
      [/^(Tăng|Giảm) ([\d.,]+) phút so tuần trước$/, (_m, direction, amount) => `${direction === 'Tăng' ? 'Up' : 'Down'} ${amount} minutes from last week`],
      [/^(\d+) lượt đủ dữ liệu · (.+)$/, (_m, count, suffix) => `${count} eligible attempts · ${dynamicEnglish(suffix)}`],
      [/^(\d+) lượt lời văn đủ dữ liệu · (.+)$/, (_m, count, suffix) => `${count} eligible word-problem attempts · ${dynamicEnglish(suffix)}`],
      [/^(\d+) lượt lời văn đủ dữ liệu$/, '$1 eligible word-problem attempts'], [/^(\d+) lượt tiến bộ$/, '$1 improved retries'],
      [/^(\d+)\/(\d+) câu đã ôn$/, '$1/$2 questions reviewed'], [/^Em hay (.*) \((\d+) lần\)$/, 'Often: $1 ($2 times)'],
      [/^([\d.,]+%) · (.+)$/, (_m, percent, label) => `${percent} · ${dynamicEnglish(label)}`], [/^\((\d+) lần\)$/, '($1 times)'],
      [/^(.*) · Lớp (\d+)$/, (_m, label, grade) => `${dynamicEnglish(label)} · Grade ${grade}`],
      [/^(.*) · (\d+) câu$/, (_m, label, count) => `${dynamicEnglish(label)} · ${count} questions`],
      [/^(.*) · (\d+) đề$/, (_m, label, count) => `${dynamicEnglish(label)} · ${count} tests`],
      [/^(.*) điểm$/, '$1 points']
    ];
    for (const [pattern, replacement] of rules) if (pattern.test(value)) return value.replace(pattern, replacement);
    return value;
  }

  const t = (value, lang = 'vi') => lang === 'vi' ? value : dynamicEnglish(String(value ?? ''));
  // Đúng/Sai của mệnh đề là True/False, khác nhãn Correct/Incorrect của kết quả làm bài.
  const truthLabels = { vi: { true: 'Đúng', false: 'Sai' }, en: { true: 'True', false: 'False' } };
  const truthLabel = (value, lang = 'vi') => truthLabels[lang === 'vi' ? 'vi' : 'en'][String(value)];
  const safe = (value) => String(value ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])).replace(/\n/g, '<br>');
  function bilingualHtml(en, vi) {
    if (!vi || en === vi) return safe(en || vi);
    if (style() === '2') return `<span class="bilingual-en">${safe(en)}</span><button class="bilingual-vi-toggle" data-bilingual-toggle="1">VI</button><span class="bilingual-vi" hidden>${safe(vi)}</span>`;
    return `<span class="bilingual-en">${safe(en)}</span><span class="bilingual-vi">${safe(vi)}</span>`;
  }

  const textState = new WeakMap();
  const attributeState = new WeakMap();
  const contentSelector = '.source-content,.question-text,.option>span:last-child,.hint-item,.solution-part p,.why-wrong,.result-question,.result-explanation,[data-no-ui-translate]';
  function translateText(root, lang) {
    if (!root) return;
    const targetLang = lang === 'vi' ? 'vi' : 'en';
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.parentElement?.closest(contentSelector)) return;
      let saved = textState.get(node);
      const current = node.nodeValue;
      if (!saved || (current !== saved.original && current !== saved.rendered)) saved = { original: current, rendered: current };
      const trimmed = saved.original.trim();
      if (!trimmed) return;
      const translated = targetLang === 'vi' ? trimmed : t(trimmed, 'en');
      const next = saved.original.replace(trimmed, translated);
      if (current !== next) node.nodeValue = next;
      saved.rendered = next;
      textState.set(node, saved);
    });
    root.querySelectorAll?.('[placeholder],[title],[aria-label],[alt]').forEach((element) => {
      let saved = attributeState.get(element) || {};
      ['placeholder', 'title', 'aria-label', 'alt'].forEach((name) => {
        if (!element.hasAttribute(name)) return;
        const current = element.getAttribute(name);
        const known = saved[name];
        if (!known || (current !== known.original && current !== known.rendered)) saved[name] = { original: current, rendered: current };
        const next = targetLang === 'vi' ? saved[name].original : t(saved[name].original, 'en');
        if (current !== next) element.setAttribute(name, next);
        saved[name].rendered = next;
      });
      attributeState.set(element, saved);
    });
    document.title = targetLang === 'vi' ? 'iMath.vn | Học toán thông minh · Bứt phá tư duy' : 'iMath.vn | Smart maths learning · Stronger thinking';
  }

  const navLabels = Object.freeze({
    vi: Object.freeze({ path: 'Lộ trình học', practice: 'Luyện thêm - Nâng cao', report: 'Báo cáo', favorites: 'Câu hỏi yêu thích' }),
    en: Object.freeze({ path: 'Learning path', practice: 'Practice - Advanced', report: 'Report', favorites: 'Favourite questions' })
  });

  window.IMATH_I18N = { dictionaries: { vi: {}, en: EN }, navLabels, solutionNames, load, save, style, setStyle,
    t, truthLabel, bilingualHtml, translateText };
})();
