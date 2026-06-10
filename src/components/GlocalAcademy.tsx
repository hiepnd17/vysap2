import React, { useState } from "react";
import { GLOCAL_COURSES } from "../data";
import { Course, Lesson } from "../types";
import { BookOpen, Award, CheckCircle2, Circle, GraduationCap, ArrowRight, CornerDownRight, RefreshCcw, HelpCircle, FileText, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GlocalAcademy() {
  const [studentName, setStudentName] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>(GLOCAL_COURSES[0]);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);
  
  // Quiz tracking
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [scoreMap, setScoreMap] = useState<{ [lessonId: string]: boolean }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Registration handler
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      setIsRegistered(true);
    }
  };

  const activeLesson = selectedCourse.lessons[activeLessonIdx];

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setActiveLessonIdx(0);
    setUserAnswer(null);
    setQuizSubmitted(false);
  };

  const handleLessonChange = (idx: number) => {
    setActiveLessonIdx(idx);
    setUserAnswer(null);
    setQuizSubmitted(false);
  };

  const handleAnswerSelect = (optionIdx: number) => {
    if (quizSubmitted) return;
    setUserAnswer(optionIdx);
  };

  const handleQuizSubmit = () => {
    if (userAnswer === null) return;
    const isCorrect = userAnswer === activeLesson.quiz.correctAnswer;
    
    setScoreMap(prev => ({
      ...prev,
      [activeLesson.id]: isCorrect
    }));
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setUserAnswer(null);
    setQuizSubmitted(false);
    setScoreMap(prev => {
      const copy = { ...prev };
      delete copy[activeLesson.id];
      return copy;
    });
  };

  // Check if course is fully passed
  const passedAllLessons = selectedCourse.lessons.every(lesson => scoreMap[lesson.id] === true);

  return (
    <div id="glocal-academy-container" className="bg-[#fcfaf5] text-[#1c1917] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#b45309] uppercase tracking-widest bg-amber-100/60 px-3 py-1 rounded-full font-bold">
            Glocal Academy
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
            Học Viện Tri Thức Nông Nghiệp Bản Địa
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Đào tạo kỹ năng số, storytelling mộc mạc và tư duy Marketing 4.0 thực chiến dành riêng cho xã viên Hợp tác xã số.
          </p>
        </div>

        {/* Multi-step registration if not signed in */}
        {!isRegistered ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-stone-100" id="registration-form">
            <div className="text-center mb-6">
              <div className="bg-[#1b3425] h-12 w-12 rounded-full flex items-center justify-center mx-auto text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="font-sans text-lg font-bold text-stone-900 mt-3">Đăng Ký Tài Khoản Học Viên</h2>
              <p className="text-stone-500 text-xs mt-1">Cung cấp họ tên đầy đủ để hệ thống tự cấp văn bằng hoàn thành khóa học.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-stone-600 mb-1.5 font-bold">Họ & Tên Học Viên</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800"
                  id="student-name-input"
                />
              </div>

              <div className="flex items-center space-x-2 bg-emerald-50 p-3 rounded-lg text-[11px] text-emerald-800 leading-normal">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>Bà con sẽ tự động học trực tuyến, làm bài tập thu hoạch và tải chứng nhận kỹ sư số tức thì.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1b3425] text-white py-3 rounded-lg text-sm font-semibold hover:bg-emerald-900 transition flex items-center justify-center space-x-2"
                id="btn-register-lms"
              >
                <UserPlus className="h-4 w-4" />
                <span>Bắt Đầu Nhập Học Miễn Phí</span>
              </button>
            </form>
          </div>
        ) : (
          /* Main LMS Area */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar List of Courses & Lessons (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Profile Card */}
              <div className="bg-white p-4.5 rounded-xl border border-stone-100 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 text-[#b45309] h-10 w-10 rounded-full font-bold flex items-center justify-center text-sm">
                    {studentName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-stone-500 uppercase leading-none">Học viên tích cực</p>
                    <h3 className="font-bold text-stone-900 text-sm mt-1">{studentName}</h3>
                  </div>
                </div>
                <div className="mt-3.5 border-t border-stone-100 pt-3.5 flex justify-between text-xs text-stone-600">
                  <span>Khóa học đang học:</span>
                  <span className="font-semibold text-emerald-800">{selectedCourse.title.split(" ").slice(-2).join(" ")}</span>
                </div>
              </div>

              {/* Course Selector Tabs */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wide text-stone-500 font-bold">Danh sách chuyên để đào tạo</label>
                {GLOCAL_COURSES.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => handleSelectCourse(course)}
                    id={`btn-course-tab-${course.id}`}
                    className={`w-full text-left p-4.5 rounded-xl border transition-all ${
                      selectedCourse.id === course.id
                        ? "bg-white border-[#1b3425] shadow-md ring-1 ring-emerald-950"
                        : "bg-white border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-stone-100 text-[#1b3425] rounded uppercase tracking-wider">
                        {course.difficulty}
                      </span>
                      <span className="text-[11px] font-mono text-stone-500">{course.duration}</span>
                    </div>
                    <h3 className="font-bold text-sm text-[#1b3425] mt-2 leading-tight">{course.title}</h3>
                    <p className="text-stone-500 text-xs mt-1.5 line-clamp-2 leading-normal">{course.description}</p>
                  </button>
                ))}
              </div>

              {/* List of Lessons inside active course */}
              <div className="bg-white p-5 rounded-xl border border-stone-100 shadow-sm space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wide text-stone-500 font-bold flex items-center justify-between">
                  <span>Bài học chiêm nghiệm</span>
                  <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded text-[10px] lowercase">
                    {selectedCourse.lessons.length} bài
                  </span>
                </h4>

                <div className="space-y-2">
                  {selectedCourse.lessons.map((lesson, idx) => {
                    const isPassed = scoreMap[lesson.id] === true;
                    const isActive = activeLessonIdx === idx;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => handleLessonChange(idx)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left text-xs font-medium transition ${
                          isActive
                            ? "bg-emerald-50 text-emerald-950 border border-emerald-400"
                            : "hover:bg-stone-50 text-stone-700"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 mr-2">
                          {isPassed ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          ) : (
                            <Circle className={`h-4 w-4 shrink-0 ${isActive ? "text-emerald-800" : "text-stone-400"}`} />
                          )}
                          <span className={`${isActive ? "font-bold" : ""} truncate`}>{lesson.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-stone-400 shrink-0">{lesson.duration}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Column Right: Active Lesson Classroom (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Big Classroom Screen */}
              <div className="bg-white pb-8 rounded-2xl shadow-md border border-stone-100 overflow-hidden" id="lms-classroom">
                <div className="bg-gradient-to-r from-[#1b3425] to-[#2a523b] text-white p-6">
                  <span className="text-[10px] font-mono bg-[#b45309] text-[#fdfbf7] px-2.5 py-0.5 rounded uppercase font-bold tracking-widest">
                    Chuyên mục học tập chủ động
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold mt-2 font-sans tracking-tight">{selectedCourse.title}</h2>
                  <p className="text-stone-200 text-xs sm:text-sm mt-1 mb-3 italic">{selectedCourse.subtitle}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-[11px] text-emerald-200 border-t border-white/10 pt-3">
                    <span>Chu kỳ khóa: <strong className="text-white">{selectedCourse.duration}</strong></span>
                    <span>•</span>
                    <span>Mức yêu cầu: <strong className="text-white">{selectedCourse.difficulty}</strong></span>
                    <span>•</span>
                    <span>Người giảng thụ: <strong className="text-white">{selectedCourse.lecturer}</strong></span>
                  </div>
                </div>

                {/* Lesson Detail Area */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="border-b border-stone-100 pb-5">
                    <div className="flex items-center space-x-2 text-[#b45309]">
                      <BookOpen className="h-5 w-5 shrink-0" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">BÀI {activeLessonIdx + 1}: {activeLesson.title}</span>
                    </div>
                    <p className="text-stone-500 text-xs italic mt-2">"{activeLesson.summary}"</p>
                  </div>

                  <div className="prose max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
                    <p>{activeLesson.content}</p>
                    <div className="bg-stone-50 p-4.5 rounded-xl border-l-4 border-emerald-800 text-xs sm:text-sm text-stone-600 space-y-2">
                      <p className="font-bold text-stone-900 flex items-center gap-1">
                        <FileText className="h-4 w-4 text-[#b45309]" /> Sổ tay áp dụng nông sản:
                      </p>
                      <p>Kể chuyện truyền cảm không cần thêu dệt sai lệch. Bà con hãy viết nhật ký thô mộc bằng giấy dán, ghi chép kỹ mùa màng, ngày tưới và chụp lại từng giọt sương mai trên lá. Độc giả sẵn sàng trả giá cao vì biết nương vườn của bà con vận hành trân quý thế nào.</p>
                    </div>
                  </div>

                  {/* Interactive Assessment / Quiz Component */}
                  <div className="mt-8 bg-[#fdfbf7] p-5 sm:p-6 rounded-xl border border-stone-200" id="quiz-assessment-box">
                    <h3 className="font-sans text-sm font-bold text-stone-900 mb-4 flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-emerald-800" /> Trắc Nghiệm Thu Hoạch Kiến Thức (Tự động)
                    </h3>
                    
                    <p className="text-stone-800 text-sm font-semibold mb-4 leading-normal">
                      Q: {activeLesson.quiz.question}
                    </p>

                    <div className="space-y-2.5">
                      {activeLesson.quiz.options.map((opt, oIdx) => {
                        const isSelected = userAnswer === oIdx;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleAnswerSelect(oIdx)}
                            disabled={quizSubmitted}
                            className={`w-full text-left px-4 py-3 rounded-lg border text-xs sm:text-sm transition flex items-start gap-3 ${
                              isSelected
                                ? quizSubmitted
                                  ? oIdx === activeLesson.quiz.correctAnswer
                                    ? "bg-green-50 border-green-500 text-green-950 ring-1 ring-green-400"
                                    : "bg-red-50 border-red-500 text-red-950"
                                  : "bg-emerald-50 border-emerald-800 text-emerald-950 ring-1 ring-emerald-800"
                                : "bg-white border-stone-200 hover:bg-stone-50"
                            }`}
                          >
                            <span className="bg-stone-100 text-stone-700 h-5 w-5 inline-flex items-center justify-center font-bold text-xs rounded-full shrink-0">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Quiz Controls */}
                    <div className="mt-5 flex items-center justify-between border-t border-stone-150 pt-4 flex-wrap gap-4">
                      {!quizSubmitted ? (
                        <button
                          onClick={handleQuizSubmit}
                          disabled={userAnswer === null}
                          className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition ${
                            userAnswer === null
                              ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                              : "bg-[#1b3425] text-white hover:bg-emerald-900 shadow"
                          }`}
                          id="btn-submit-quiz"
                        >
                          Nộp Bài Thu Hoạch
                        </button>
                      ) : (
                        <div className="w-full text-xs space-y-4">
                          <div className={`p-4 rounded-lg flex items-start gap-2.5 leading-normal ${
                            userAnswer === activeLesson.quiz.correctAnswer
                              ? "bg-green-50 border border-green-200 text-green-800"
                              : "bg-red-50 border border-red-200 text-red-800"
                          }`}>
                            <span className="font-bold shrink-0">Kết quả:</span>
                            <div>
                              <span>{userAnswer === activeLesson.quiz.correctAnswer ? "Chúc mừng! Bà con đã chọn đáp án hoàn toàn chính xác." : "Tiếc quá, đáp án chưa đúng rồi bà con ơi."}</span>
                              <p className="mt-2 text-stone-600 font-mono text-[11px] leading-relaxed">
                                💡 {activeLesson.quiz.explanation}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between items-center w-full pt-1">
                            <button
                              onClick={handleResetQuiz}
                              className="text-stone-500 hover:text-[#b45309] flex items-center space-x-1 font-semibold"
                            >
                              <RefreshCcw className="h-3.5 w-3.5" />
                              <span>Làm lại bài thu hoạch này</span>
                            </button>

                            {activeLessonIdx < selectedCourse.lessons.length - 1 ? (
                              <button
                                onClick={() => handleLessonChange(activeLessonIdx + 1)}
                                className="bg-[#1b3425] text-white px-4 py-2 rounded text-xs font-semibold flex items-center space-x-1 hover:bg-emerald-900 transition"
                              >
                                <span>Tiếp sang Bài khác</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                              </button>
                            ) : (
                              <span className="text-emerald-700 font-bold font-mono">Đã xong bài tập cuối cùng!</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* AUTOMATED CERTIFICATE GENERATOR PANEL */}
              <AnimatePresence>
                {passedAllLessons && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="bg-stone-900 text-[#fdfbf7] p-8 rounded-2xl border-2 border-amber-400 shadow-2xl relative overflow-hidden"
                    id="lms-certificate-view"
                  >
                    {/* Background decor */}
                    <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />
                    
                    <div className="text-center space-y-4 relative z-10 max-w-2xl mx-auto">
                      <div className="inline-flex h-12 w-12 bg-amber-400 text-stone-900 rounded-full items-center justify-center animate-bounce shadow-md">
                        <Award className="h-7 w-7" />
                      </div>
                      
                      <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-[#f59e0b]">Xác Thực Vinh Danh Đại Sứ</h2>
                      <p className="text-stone-300 text-xs sm:text-sm">
                        Tuyệt vời! Bà con đã hoàn thành đúng 100% tất cả các bài trắc nghiệm thu hoạch kiến thức. Hệ thống Glocal Academy tự động thiết chế chứng văn bằng di sản dán nhãn thông tin dưới đây:
                      </p>

                      {/* Displaying certificate frame */}
                      <div className="bg-[#fdfbf7] text-[#1c1917] p-6 sm:p-10 rounded-xl shadow-inner border-[12px] border-amber-300 text-center space-y-4 max-w-full overflow-x-auto relative">
                        {/* Frame corner design */}
                        <div className="absolute top-2 left-2 right-2 bottom-2 border border-stone-200 pointer-events-none" />
                        
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-emerald-800">HỌC VIỆN GLOCAL ACADEMY BY VYSAP</span>
                          <h3 className="font-sans text-sm sm:text-base font-extrabold text-stone-900 border-b border-amber-100 pb-2">CHỨNG CHỈ GRAPHIC DANH DỰ</h3>
                        </div>

                        <div>
                          <p className="text-stone-400 mb-1 text-[11px] uppercase tracking-wide">Trân trọng chứng nhận học viên</p>
                          <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-emerald-950 underline decoration-amber-400">{studentName}</h4>
                        </div>

                        <div className="max-w-md mx-auto">
                          <p className="text-xs text-stone-600 leading-relaxed">
                            Đã nỗ lực xuất sắc hoàn thành đầy đủ các bài giảng, thực tế hóa tư duy, làm bài thu hoạch và thấu sâm tư tri thức chuyên sâu nâng cao:
                          </p>
                          <p className="font-sans font-bold text-xs sm:text-sm text-[#b45309] mt-2.5">
                            "{selectedCourse.title}"
                          </p>
                        </div>

                        <div className="flex justify-between items-end pt-5 text-left border-t border-stone-100 max-w-lg mx-auto flex-wrap gap-4">
                          <div>
                            <p className="text-[10px] text-stone-400 font-mono">NGÀY CẤP PHÁT</p>
                            <p className="text-xs text-stone-800 font-bold font-mono">06 Tháng 06, 2026</p>
                          </div>
                          
                          <div className="text-right">
                            <span className="inline-block bg-[#1b3425]/15 h-9 w-9 rounded-full relative mb-1">
                              <span className="absolute inset-2 flex items-center justify-center text-xs text-stone-700">📌</span>
                            </span>
                            <p className="text-[10px] text-stone-400 font-mono">ĐẠI SỨ SÁNG LẬP</p>
                            <p className="text-xs text-[#b45309] font-bold italic font-serif">Nguyễn Đức Hiệp</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => window.print()}
                          className="bg-amber-400 text-stone-950 px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-amber-500 transition shadow"
                        >
                          🖨 In Chứng Văn Hoàn Thành (Print PDF)
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
