import React, { useState, useEffect, useRef } from 'react';
import { Users, Plus, Trash2, Copy, Printer, Download, Check, X, Edit2, Save, FileText, Eye, Settings, ArrowRight, AlertCircle } from 'lucide-react';

// =========================================
// MODULE DEFINITIONS
// =========================================
const MODULES = {
  M1: {
    code: 'M1',
    type: 'M',
    title: 'Chuẩn Plan 6 mục',
    summary: 'Mọi plan đều cần đủ 6 mục bắt buộc',
    purpose: 'Đảm bảo mọi plan có đủ thông tin để triển khai và đánh giá',
    content: `Mọi plan trước khi triển khai cần đầy đủ 6 mục:

1. **Mục tiêu cụ thể (có số):** Ví dụ "Tăng 200 follower fanpage trong 7 ngày", KHÔNG phải "Tăng nhận diện".

2. **Đối tượng cụ thể:** Tuổi, nghề, ở đâu, hành vi MXH. KHÔNG phải "khách hàng tiềm năng".

3. **Research thực tế:** Ít nhất 3 ví dụ từ đối thủ/công ty khác, kèm link, mô tả họ làm gì, kết quả ra sao, mình học gì áp dụng.

4. **Triển khai từng bước:** Ai làm, làm gì, ngày nào, công cụ gì — cụ thể đến từng ngày.

5. **Ngân sách & nguồn lực:** Tiền bao nhiêu, ai duyệt, công cụ nào (ghi "0 đồng" nếu không cần tiền).

6. **Đo lường:** Chỉ số gì, đo bằng cách nào, báo cáo khi nào.

**Quy tắc:** Thiếu mục nào → trả lại, không đọc tiếp. Đây là chuẩn tối thiểu, không phải chuẩn cao.

**Quy tắc AI:** Có thể dùng AI brainstorm, KHÔNG nộp thẳng output AI. Plan cuối phải có dấu vết suy nghĩ riêng — research thật, số liệu thật, lý do chọn cách A không chọn cách B.`
  },
  M2: {
    code: 'M2',
    type: 'M',
    title: 'Brief Task Lớn',
    summary: 'Task lớn cần brief xác nhận trước khi bắt đầu',
    purpose: 'Đồng bộ hiểu task trước khi bắt đầu, tránh "em tưởng"',
    content: `**Áp dụng cho task lớn:** >2 giờ làm việc HOẶC liên quan ≥2 người HOẶC có ngân sách.

**Quy trình:**
1. Sếp giao task
2. Trong 30 phút, em gửi brief xác nhận (chat/email):
   - Task này là gì
   - Deadline nào
   - Output cuối cùng là gì (file, link, post, số liệu...)
   - Tiêu chí "xong" là gì
3. Sếp confirm "OK" hoặc sửa
4. Sau confirm = bắt đầu làm. Không được nói "em tưởng" sau khi đã confirm.

**Task nhỏ** (sửa 1 caption, đăng 1 post lặp lại) → không cần brief, triển khai luôn.`
  },
  M3: {
    code: 'M3',
    type: 'M',
    title: 'Quy tắc 2 tiếng xử blocker',
    summary: 'Tự xử 2 tiếng trước khi báo, báo kèm phương án',
    purpose: 'Tự chịu trách nhiệm trước khi escalate',
    content: `Khi gặp bất kỳ blocker nào (lỗi kỹ thuật, không có quyền, chờ đối tác...):

**Trong 2 tiếng đầu — TỰ XỬ.** Làm ít nhất 2 trong 4 việc:
1. Google tìm cách giải quyết
2. Hỏi đồng nghiệp trong team
3. Thử cách khác đạt cùng mục tiêu
4. Ghi lại error/screenshot cụ thể

**Sau 2 tiếng vẫn không xử được → báo sếp NGAY, kèm phương án.**

Mẫu báo cáo đúng:
"Em gặp vấn đề X. Em đã thử (1), (2), kết quả thế này. Em đề xuất phương án A hoặc B. Anh chọn phương án nào ạ?"

**Không bao giờ chấp nhận:**
- Báo cáo trống: "anh ơi không up được ảnh"
- Im lặng đến cuối ngày rồi mới nói
- "Em không có quyền nên em không làm" → Phải hỏi: cần ai duyệt, xin duyệt giúp em.`
  },
  M4: {
    code: 'M4',
    type: 'M',
    title: 'Cadence họp team',
    summary: 'Lịch họp cố định: Monday planning + Friday review + 1:1 tuần',
    purpose: 'Đồng bộ team, giảm hỏi-đáp rời rạc',
    content: `**Sáng thứ 2 — 45 phút — Team Planning**
- Ai làm gì tuần này
- Ai cần hỗ trợ ai
- Chốt ưu tiên

**Chiều thứ 6 — 30 phút — Team Wrap-up**
- Review kết quả tuần
- Lesson learned
- Vướng mắc còn lại để xử tuần sau

**1:1 với sếp — 20 phút/tuần/người**
- Không gian feedback cá nhân
- Phát triển nghề nghiệp
- Vấn đề không tiện nói trước team

**Lưu ý:** Mọi feedback sếp đưa = ghi vào "Sổ note" cá nhân (Google Doc). Tuần sau check xem có sửa không. Lặp lại cùng lỗi 2 lần = vấn đề nghiêm trọng.`
  },
  S1: {
    code: 'S1',
    type: 'S',
    title: 'Brief BẮT BUỘC mọi task',
    summary: 'Mọi task lớn nhỏ đều cần brief xác nhận',
    purpose: 'Chế độ giám sát chặt cho TTS/onboarding/trial',
    content: `**Khác với M2:** S1 áp cho **MỌI task**, kể cả nhỏ. Không có ngoại lệ.

**Quy trình:**
1. Sếp giao task (dù chỉ là sửa 1 dòng caption)
2. Trong 30 phút, em gửi brief xác nhận:
   - Task là gì
   - Deadline
   - Output cuối
   - Tiêu chí "xong"
3. Sếp confirm → bắt đầu

**Nếu không gửi brief trong 30 phút = coi như chưa nhận việc.** Sếp sẽ hỏi lại.

**Sau khi sếp confirm brief:** Cấm dùng các lý do "em tưởng", "em hiểu khác".

Áp dụng đến khi vượt qua trial/onboarding (thường 2-4 tuần).`
  },
  S2: {
    code: 'S2',
    type: 'S',
    title: 'Daily check-in 8h30',
    summary: 'Báo cáo mỗi sáng 10 phút trong giai đoạn quan sát',
    purpose: 'Theo sát tiến độ hàng ngày khi đang trial/onboarding',
    content: `Mỗi sáng **8h30** (hoặc giờ team chọn), **10 phút**, báo 3 câu:

1. Hôm qua làm gì XONG (không phải "làm gì", mà là "xong gì")
2. Hôm nay làm gì
3. Đang vướng gì

**Quy tắc:**
- Không quá 10 phút. Có vướng phức tạp → giải quyết riêng sau, không lan trong daily.
- Quên/trễ ≥3 lần trong 2 tuần = trừ điểm đánh giá.
- Báo qua chat/standup, không cần họp face-to-face nếu remote.

Áp dụng đến khi vượt qua trial/onboarding.`
  },
  S3: {
    code: 'S3',
    type: 'S',
    title: '5 tiêu chí chấm điểm pass/fail',
    summary: 'Đánh giá khách quan có deadline, pass ≥7/10',
    purpose: 'Quyết định tiếp tục hay kết thúc trial dựa trên dữ liệu',
    content: `**5 tiêu chí, mỗi tiêu chí 0–2 điểm. Tổng 10 điểm. Pass ≥ 7/10.**

| # | Tiêu chí | 0 điểm | 1 điểm | 2 điểm |
|---|---|---|---|---|
| 1 | Plan đạt chuẩn 6 mục | Thiếu ≥2 mục thường xuyên | Đủ 6 mục nhưng research nông/AI | Đủ 6 mục, research có chiều sâu, suy nghĩ riêng |
| 2 | Content qua vòng 1 duyệt | <30% qua vòng 1 | 30–60% qua vòng 1 | >60% qua vòng 1 |
| 3 | Xử blocker đúng quy tắc 2 tiếng | Ngồi im chờ / nói "không có quyền" | Có báo nhưng không kèm phương án | Có báo + đề xuất ≥2 phương án |
| 4 | Daily check-in đầy đủ, đúng giờ | Quên/trễ ≥3 lần | Quên/trễ 1–2 lần | Đầy đủ, đúng giờ mỗi ngày |
| 5 | Chủ động đẩy đến hoàn thành | Chờ giao mới làm | Có chủ động 1–2 task | Chủ động xuyên suốt, tự reminder |

**Đánh giá vào ngày kết thúc trial.** Có dữ liệu cụ thể trong Google Doc chung, không phải cảm tính.

**Sau trial:**
- ≥7/10 → tiếp tục, xét lộ trình chính thức
- <7/10 → kết thúc, hỗ trợ thư giới thiệu trung thực`
  },
  S4: {
    code: 'S4',
    type: 'S',
    title: 'Quy tắc "không lý do"',
    summary: 'Cắt các đường biện minh, mọi vướng phải có phương án',
    purpose: 'Cắt đường biện minh trong thời gian trial',
    content: `**Cấm các câu sau trong thời gian trial:**

❌ "Em tưởng..." → Phải hỏi rõ trước khi làm (xem M2/S1)
❌ "Em không biết..." → Phải tìm hiểu: google, hỏi đồng nghiệp, hỏi sếp
❌ "Em không có quyền..." → Phải hỏi: cần ai duyệt, xin duyệt giúp em
❌ "Em nghe a này, c kia nói nên em làm theo" → Phải tự đánh giá, chốt với sếp trước khi làm

**Công thức phản ứng đúng cho mọi vướng mắc:**

> "Em gặp [X]. Em đã thử/hỏi/tìm hiểu [Y]. Em đề xuất [Z]. Anh confirm giúp em."

3 phần bắt buộc:
- **Vấn đề cụ thể** (không mơ hồ)
- **Việc em đã làm** (chứng minh tự xử)
- **Đề xuất hướng giải quyết** (không đẩy quả bóng về sếp)

Áp dụng đến khi vượt qua trial.`
  },
  S5: {
    code: 'S5',
    type: 'S',
    title: 'Cấm AI viết thẳng + verification',
    summary: 'Sếp hỏi 3 câu about plan để verify',
    purpose: 'Đảm bảo người làm thực sự suy nghĩ, không phụ thuộc AI',
    content: `**Có thể dùng AI:** brainstorm ý tưởng, tìm format, sửa ngữ pháp.

**KHÔNG được dùng AI:** viết plan/content rồi nộp thẳng cho sếp.

**Cách sếp verify (hỏi 3 câu about plan):**

1. *"Vì sao em chọn cách A không chọn cách B?"* — Test khả năng suy nghĩ phản biện
2. *"Số liệu/research này em lấy từ đâu? Em verify như thế nào?"* — Test research thật hay AI bịa
3. *"Nếu plan này fail, em sẽ điều chỉnh thế nào?"* — Test hiểu sâu, có plan B

**Trả lời được trôi chảy** = hiểu thật = plan qua.
**Ấp úng, không giải thích được** = copy AI = trả plan, làm lại.

**Cảnh báo về link AI bịa:** AI hay bịa link / số liệu không có thật. Sếp click vào link → nếu không thật hoặc không khớp mô tả → trừ điểm nặng tiêu chí "Plan đạt chuẩn".

Áp dụng đến khi vượt qua trial.`
  }
};

const PRESETS = [
  {
    id: 'standard',
    label: 'Nhân viên chính thức',
    description: 'Áp chuẩn team-wide, không micromanage',
    modules: ['M1', 'M2', 'M3', 'M4'],
    badge: 'Mặc định cho người đang làm tốt'
  },
  {
    id: 'onboarding',
    label: 'Mới onboard (1–3 tháng)',
    description: 'Universal + giám sát nhẹ giai đoạn đầu',
    modules: ['M1', 'M2', 'M3', 'M4', 'S1', 'S2'],
    badge: 'Cho người mới vào'
  },
  {
    id: 'trial',
    label: 'Trial / Phục hồi 2 tuần',
    description: 'Toàn bộ giới hạn nghiêm ngặt, có scoring',
    modules: ['M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3', 'S4', 'S5'],
    badge: 'Performance recovery'
  },
  {
    id: 'senior',
    label: 'Chuyên viên cấp cao',
    description: 'Chỉ chuẩn output, không quy trình họp',
    modules: ['M1', 'M3'],
    badge: 'Cho người tự quản tốt'
  }
];

const STATUS_OPTIONS = [
  { value: 'standard', label: 'Chính thức', color: '#2C5F66' },
  { value: 'onboarding', label: 'Onboarding', color: '#5A7BA8' },
  { value: 'trial', label: 'Trial', color: '#5B2A3E' },
  { value: 'senior', label: 'Cấp cao', color: '#3F5F4A' }
];

// =========================================
// DESIGN TOKENS
// =========================================
const colors = {
  bg: '#FAF8F1',
  card: '#FFFFFF',
  soft: '#F1ECDF',
  ink: '#1A1F2E',
  inkSoft: '#4A5468',
  inkMuted: '#8A8F9C',
  border: '#E5DDC9',
  borderSoft: '#EFE9D8',
  mAccent: '#2C5F66',
  mBg: '#E8EFEE',
  mBgSoft: '#F2F7F6',
  sAccent: '#5B2A3E',
  sBg: '#F0E4EA',
  sBgSoft: '#F8EFF3',
  success: '#4A7C5C'
};

// =========================================
// MAIN APP
// =========================================
export default function App() {
  const [members, setMembers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('config'); // 'config' | 'preview'
  const [copied, setCopied] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const printRef = useRef(null);

  // Inject Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { try { document.head.removeChild(link); } catch (e) {} };
  }, []);

  // Load from storage
  useEffect(() => {
    async function load() {
      try {
        const result = await window.storage.get('members_v1');
        if (result && result.value) {
          const m = JSON.parse(result.value);
          if (Array.isArray(m) && m.length > 0) {
            setMembers(m);
            setSelectedId(m[0].id);
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        // No data yet, seed
      }
      const seed = [
        { id: 'u1', name: 'Uyên', role: 'Thực tập sinh Marketing', status: 'trial', modules: ['M1','M2','M3','M4','S1','S2','S3','S4','S5'] },
        { id: 'u2', name: 'Chuyên viên Marketing', role: 'Chuyên viên Marketing', status: 'standard', modules: ['M1','M2','M3','M4'] },
        { id: 'u3', name: 'Nhân viên 1', role: 'Nhân viên Marketing', status: 'standard', modules: ['M1','M2','M3','M4'] },
        { id: 'u4', name: 'Nhân viên 2', role: 'Nhân viên Marketing', status: 'standard', modules: ['M1','M2','M3','M4'] }
      ];
      setMembers(seed);
      setSelectedId(seed[0].id);
      setLoading(false);
    }
    load();
  }, []);

  // Save to storage
  useEffect(() => {
    if (loading) return;
    window.storage.set('members_v1', JSON.stringify(members)).catch(() => {});
  }, [members, loading]);

  const selected = members.find(m => m.id === selectedId);

  const updateSelected = (changes) => {
    setMembers(prev => prev.map(m => m.id === selectedId ? { ...m, ...changes } : m));
  };

  const toggleModule = (code) => {
    if (!selected) return;
    const has = selected.modules.includes(code);
    const next = has ? selected.modules.filter(c => c !== code) : [...selected.modules, code];
    next.sort();
    updateSelected({ modules: next });
  };

  const applyPreset = (preset) => {
    if (!selected) return;
    updateSelected({ modules: [...preset.modules], status: preset.id });
  };

  const addMember = () => {
    const id = 'u' + Date.now();
    const newMember = { id, name: 'Người mới', role: 'Nhân viên Marketing', status: 'standard', modules: ['M1','M2','M3','M4'] };
    setMembers(prev => [...prev, newMember]);
    setSelectedId(id);
    setEditingName(true);
  };

  const removeMember = (id) => {
    if (members.length <= 1) return;
    const next = members.filter(m => m.id !== id);
    setMembers(next);
    if (selectedId === id) setSelectedId(next[0].id);
  };

  // =========================================
  // MANUAL GENERATION
  // =========================================
  const generateMarkdown = (member) => {
    if (!member) return '';
    const status = STATUS_OPTIONS.find(s => s.value === member.status);
    const modules = member.modules.map(c => MODULES[c]).filter(Boolean);
    const mMods = modules.filter(m => m.type === 'M');
    const sMods = modules.filter(m => m.type === 'S');
    
    const today = new Date().toLocaleDateString('vi-VN');
    
    let md = `# THỎA THUẬN LÀM VIỆC\n\n`;
    md += `**Áp dụng cho:** ${member.name}\n`;
    md += `**Vai trò:** ${member.role}\n`;
    md += `**Chế độ:** ${status?.label || ''}\n`;
    md += `**Ngày soạn:** ${today}\n\n`;
    md += `---\n\n`;
    md += `## Bối cảnh\n\n`;
    
    if (member.status === 'trial') {
      md += `Đây là chế độ làm việc **trial / phục hồi 2 tuần**. Mọi quy tắc trong văn bản này áp dụng nghiêm ngặt trong giai đoạn trial. Cuối kỳ trial sẽ đánh giá theo 5 tiêu chí (xem S3).\n\n`;
      md += `- **Đạt ≥7/10** → tiếp tục, xét lộ trình chính thức\n`;
      md += `- **Dưới 7/10** → kết thúc trial, hỗ trợ thư giới thiệu trung thực\n\n`;
    } else if (member.status === 'onboarding') {
      md += `Đây là chế độ **onboarding** trong 1–3 tháng đầu. Sau giai đoạn này sẽ chuyển sang chuẩn team chính thức (chỉ M1–M4).\n\n`;
    } else if (member.status === 'senior') {
      md += `Bạn đang ở chế độ **chuyên viên cấp cao** — chỉ áp chuẩn output cốt lõi, không có quy trình giám sát chi tiết. Tự quản tốt là yêu cầu mặc định.\n\n`;
    } else {
      md += `Đây là **chuẩn làm việc chung của team Marketing** — áp dụng cho mọi nhân viên chính thức. Mục tiêu: làm việc chuyên nghiệp, có hệ thống, giảm việc-lặp-do-không-rõ-yêu-cầu.\n\n`;
    }
    
    if (mMods.length > 0) {
      md += `---\n\n## A. CHUẨN CHUNG TEAM (M Modules)\n\n`;
      mMods.forEach(mod => {
        md += `### ${mod.code} — ${mod.title}\n\n`;
        md += `**Mục đích:** ${mod.purpose}\n\n`;
        md += `${mod.content}\n\n`;
      });
    }
    
    if (sMods.length > 0) {
      md += `---\n\n## B. CHẾ ĐỘ ĐẶC BIỆT (S Modules)\n\n`;
      md += `*Các module sau chỉ áp dụng trong giai đoạn ${member.status === 'trial' ? 'trial 2 tuần' : 'onboarding'}. Sau giai đoạn này sẽ rà soát lại.*\n\n`;
      sMods.forEach(mod => {
        md += `### ${mod.code} — ${mod.title}\n\n`;
        md += `**Mục đích:** ${mod.purpose}\n\n`;
        md += `${mod.content}\n\n`;
      });
    }
    
    md += `---\n\n## Cam kết hai bên\n\n`;
    md += `**Sếp cam kết:**\n`;
    md += `- Feedback cụ thể, không mơ hồ ("không ổn, làm lại")\n`;
    md += `- Phản hồi brief trong 30 phút (nếu có M2/S1)\n`;
    md += `- Duyệt plan trong 1 ngày làm việc\n`;
    md += `- Không giao thêm task mới khi đang gánh task chính\n\n`;
    md += `**Nhân viên cam kết:**\n`;
    md += `- Tuân thủ chuẩn các module được áp dụng phía trên\n`;
    md += `- Báo blocker đúng cách, có phương án\n`;
    md += `- Ghi feedback vào sổ note, không lặp lỗi 2 lần\n\n`;
    md += `---\n\n`;
    
    return md;
  };

  const handleCopy = async () => {
    const md = generateMarkdown(selected);
    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = md;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const md = generateMarkdown(selected);
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Thoa-thuan-lam-viec-${selected.name.replace(/\s+/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  // =========================================
  // RENDER
  // =========================================
  if (loading) {
    return (
      <div style={{ background: colors.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ color: colors.inkSoft }}>Đang tải...</div>
      </div>
    );
  }

  return (
    <div style={{
      background: colors.bg,
      minHeight: '100vh',
      fontFamily: 'Inter, system-ui, sans-serif',
      color: colors.ink
    }}>
      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          .print-doc { padding: 0 !important; max-width: 100% !important; box-shadow: none !important; border: none !important; }
        }
        .print-only { display: none; }
        .module-card { transition: all 0.15s ease; }
        .module-card:hover { transform: translateY(-1px); }
        .member-tab { transition: all 0.15s ease; }
        .preset-btn { transition: all 0.15s ease; }
        .preset-btn:hover { transform: translateY(-1px); }
        button { font-family: inherit; }
        input { font-family: inherit; }
        .display-serif { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
        .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .scrollbar::-webkit-scrollbar-track { background: transparent; }
        .scrollbar::-webkit-scrollbar-thumb { background: ${colors.border}; border-radius: 3px; }
        .preview-body h1 { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 600; margin: 24px 0 12px; color: ${colors.ink}; }
        .preview-body h2 { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 600; margin: 28px 0 12px; color: ${colors.ink}; border-bottom: 1px solid ${colors.border}; padding-bottom: 8px; }
        .preview-body h3 { font-family: 'Fraunces', serif; font-size: 17px; font-weight: 600; margin: 20px 0 8px; color: ${colors.ink}; }
        .preview-body p { margin: 8px 0; line-height: 1.65; color: ${colors.inkSoft}; font-size: 14.5px; }
        .preview-body ul, .preview-body ol { padding-left: 22px; margin: 8px 0; color: ${colors.inkSoft}; font-size: 14.5px; line-height: 1.65; }
        .preview-body li { margin: 4px 0; }
        .preview-body strong { color: ${colors.ink}; font-weight: 600; }
        .preview-body hr { border: none; border-top: 1px solid ${colors.border}; margin: 24px 0; }
        .preview-body table { border-collapse: collapse; margin: 12px 0; font-size: 13px; width: 100%; }
        .preview-body th, .preview-body td { border: 1px solid ${colors.border}; padding: 8px 10px; text-align: left; vertical-align: top; }
        .preview-body th { background: ${colors.soft}; font-weight: 600; }
        .preview-body code { background: ${colors.soft}; padding: 2px 6px; border-radius: 3px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; }
        .preview-body blockquote { border-left: 3px solid ${colors.mAccent}; padding: 4px 12px; margin: 12px 0; background: ${colors.mBgSoft}; font-style: italic; color: ${colors.inkSoft}; }
      `}</style>

      {/* HEADER */}
      <header className="no-print" style={{
        background: colors.card,
        borderBottom: `1px solid ${colors.border}`,
        padding: '20px 28px',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1400, margin: '0 auto' }}>
          <div>
            <h1 className="display-serif" style={{ fontSize: 24, fontWeight: 600, margin: 0, letterSpacing: '-0.01em' }}>
              Marketing Team Operating Manual
            </h1>
            <p style={{ fontSize: 13, color: colors.inkMuted, margin: '4px 0 0' }}>
              Build manual riêng cho từng nhân viên · Lưu tự động
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button onClick={() => setView('config')} style={{
              padding: '8px 14px',
              background: view === 'config' ? colors.ink : 'transparent',
              color: view === 'config' ? colors.bg : colors.ink,
              border: `1px solid ${view === 'config' ? colors.ink : colors.border}`,
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              <Settings size={14} /> Cấu hình
            </button>
            <button onClick={() => setView('preview')} style={{
              padding: '8px 14px',
              background: view === 'preview' ? colors.ink : 'transparent',
              color: view === 'preview' ? colors.bg : colors.ink,
              border: `1px solid ${view === 'preview' ? colors.ink : colors.border}`,
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              <Eye size={14} /> Xem manual
            </button>
          </div>
        </div>
      </header>

      {/* MEMBERS TAB BAR */}
      <div className="no-print scrollbar" style={{
        background: colors.bg,
        borderBottom: `1px solid ${colors.borderSoft}`,
        padding: '14px 28px',
        overflowX: 'auto'
      }}>
        <div style={{ display: 'flex', gap: 8, maxWidth: 1400, margin: '0 auto', alignItems: 'center' }}>
          {members.map(m => {
            const status = STATUS_OPTIONS.find(s => s.value === m.status);
            const isActive = m.id === selectedId;
            return (
              <div
                key={m.id}
                className="member-tab"
                onClick={() => setSelectedId(m.id)}
                style={{
                  padding: '10px 14px',
                  background: isActive ? colors.card : 'transparent',
                  border: `1px solid ${isActive ? colors.ink : colors.border}`,
                  borderRadius: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  minWidth: 200,
                  flexShrink: 0,
                  boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.06)' : 'none'
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: colors.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {m.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <span style={{
                      display: 'inline-block',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: status?.color || colors.inkMuted
                    }}></span>
                    <span style={{ fontSize: 11, color: colors.inkMuted }}>{status?.label || ''}</span>
                  </div>
                </div>
                {members.length > 1 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); if (confirm(`Xóa ${m.name}?`)) removeMember(m.id); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.inkMuted, padding: 2, display: 'flex' }}
                    title="Xóa"
                  >
                    <Trash2 size={12} />
                  </button>
                )}
              </div>
            );
          })}
          <button onClick={addMember} className="member-tab" style={{
            padding: '10px 14px',
            background: 'transparent',
            border: `1px dashed ${colors.border}`,
            borderRadius: 8,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: colors.inkSoft,
            fontSize: 13,
            fontWeight: 500,
            flexShrink: 0
          }}>
            <Plus size={14} /> Thêm người
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '24px 28px 80px' }}>
        {!selected ? (
          <div style={{ textAlign: 'center', padding: 60, color: colors.inkMuted }}>
            Chọn một người để bắt đầu
          </div>
        ) : view === 'config' ? (
          <ConfigView
            member={selected}
            onUpdate={updateSelected}
            onToggleModule={toggleModule}
            onApplyPreset={applyPreset}
            editingName={editingName}
            setEditingName={setEditingName}
          />
        ) : (
          <PreviewView
            member={selected}
            markdown={generateMarkdown(selected)}
            onCopy={handleCopy}
            onDownload={handleDownload}
            onPrint={handlePrint}
            copied={copied}
            printRef={printRef}
          />
        )}
      </main>
    </div>
  );
}

// =========================================
// CONFIG VIEW
// =========================================
function ConfigView({ member, onUpdate, onToggleModule, onApplyPreset, editingName, setEditingName }) {
  const [tempName, setTempName] = useState(member.name);
  const [tempRole, setTempRole] = useState(member.role);

  useEffect(() => {
    setTempName(member.name);
    setTempRole(member.role);
  }, [member.id]);

  const saveName = () => {
    onUpdate({ name: tempName.trim() || 'Chưa đặt tên', role: tempRole.trim() || 'Nhân viên' });
    setEditingName(false);
  };

  const mModules = Object.values(MODULES).filter(m => m.type === 'M');
  const sModules = Object.values(MODULES).filter(m => m.type === 'S');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 24 }}>
      
      {/* PROFILE */}
      <section style={{
        background: colors.card,
        border: `1px solid ${colors.border}`,
        borderRadius: 12,
        padding: 24
      }}>
        {editingName ? (
          <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
            <div>
              <label style={{ fontSize: 12, color: colors.inkMuted, fontWeight: 500, display: 'block', marginBottom: 4 }}>TÊN</label>
              <input
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', border: `1px solid ${colors.border}`, borderRadius: 6, fontSize: 16, outline: 'none' }}
                autoFocus
              />
            </div>
            <div>
              <label style={{ fontSize: 12, color: colors.inkMuted, fontWeight: 500, display: 'block', marginBottom: 4 }}>VAI TRÒ</label>
              <input
                value={tempRole}
                onChange={(e) => setTempRole(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', border: `1px solid ${colors.border}`, borderRadius: 6, fontSize: 14, outline: 'none' }}
              />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={saveName} style={{
                padding: '8px 16px', background: colors.ink, color: colors.bg, border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6
              }}>
                <Save size={13} /> Lưu
              </button>
              <button onClick={() => { setTempName(member.name); setTempRole(member.role); setEditingName(false); }} style={{
                padding: '8px 16px', background: 'transparent', color: colors.inkSoft, border: `1px solid ${colors.border}`, borderRadius: 6, fontSize: 13, cursor: 'pointer'
              }}>Hủy</button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
            <div>
              <h2 className="display-serif" style={{ fontSize: 32, fontWeight: 600, margin: 0, letterSpacing: '-0.01em' }}>{member.name}</h2>
              <p style={{ fontSize: 14, color: colors.inkSoft, margin: '4px 0 0' }}>{member.role}</p>
              <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 12, color: colors.inkMuted, fontWeight: 500 }}>CHẾ ĐỘ:</span>
                {STATUS_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => onUpdate({ status: opt.value })}
                    style={{
                      padding: '5px 11px',
                      background: member.status === opt.value ? opt.color : 'transparent',
                      color: member.status === opt.value ? '#FFF' : opt.color,
                      border: `1px solid ${opt.color}`,
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => setEditingName(true)} style={{
              padding: '6px 10px', background: 'transparent', color: colors.inkSoft, border: `1px solid ${colors.border}`, borderRadius: 6, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0
            }}>
              <Edit2 size={12} /> Sửa
            </button>
          </div>
        )}
      </section>

      {/* PRESETS */}
      <section>
        <h3 className="display-serif" style={{ fontSize: 18, fontWeight: 600, margin: '0 0 4px' }}>Chọn nhanh theo chế độ</h3>
        <p style={{ fontSize: 13, color: colors.inkMuted, margin: '0 0 14px' }}>1 click áp combo module phù hợp. Bạn vẫn có thể chỉnh từng module sau.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          {PRESETS.map(preset => {
            const isActive = preset.modules.length === member.modules.length && preset.modules.every(c => member.modules.includes(c));
            return (
              <button
                key={preset.id}
                onClick={() => onApplyPreset(preset)}
                className="preset-btn"
                style={{
                  textAlign: 'left',
                  padding: '14px 16px',
                  background: isActive ? colors.ink : colors.card,
                  color: isActive ? colors.bg : colors.ink,
                  border: `1px solid ${isActive ? colors.ink : colors.border}`,
                  borderRadius: 10,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{preset.label}</span>
                  {isActive && <Check size={14} />}
                </div>
                <span style={{ fontSize: 12, opacity: 0.75 }}>{preset.description}</span>
                <div style={{ display: 'flex', gap: 4, marginTop: 6, flexWrap: 'wrap' }}>
                  {preset.modules.map(c => (
                    <span key={c} className="mono" style={{ fontSize: 10, padding: '2px 5px', background: isActive ? 'rgba(255,255,255,0.15)' : (c.startsWith('M') ? colors.mBg : colors.sBg), color: isActive ? colors.bg : (c.startsWith('M') ? colors.mAccent : colors.sAccent), borderRadius: 3, fontWeight: 600 }}>{c}</span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* M MODULES */}
      <section>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
          <h3 className="display-serif" style={{ fontSize: 18, fontWeight: 600, margin: 0, color: colors.mAccent }}>M — Chuẩn chung team</h3>
          <span style={{ fontSize: 12, color: colors.inkMuted }}>Áp được cho mọi nhân viên</span>
        </div>
        <p style={{ fontSize: 13, color: colors.inkMuted, margin: '0 0 14px' }}>Các module universal, không cảm giác giám sát. Khuyến nghị áp đủ M1–M4.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
          {mModules.map(mod => (
            <ModuleCard key={mod.code} module={mod} selected={member.modules.includes(mod.code)} onToggle={() => onToggleModule(mod.code)} />
          ))}
        </div>
      </section>

      {/* S MODULES */}
      <section>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
          <h3 className="display-serif" style={{ fontSize: 18, fontWeight: 600, margin: 0, color: colors.sAccent }}>S — Chế độ đặc biệt</h3>
          <span style={{ fontSize: 12, color: colors.inkMuted }}>Chỉ dùng cho onboarding / trial / phục hồi</span>
        </div>
        <p style={{ fontSize: 13, color: colors.inkMuted, margin: '0 0 14px' }}>Các module có cảm giác giám sát chặt. Đừng áp cho người đang làm tốt — sẽ giết động lực.</p>
        <div style={{ background: colors.sBgSoft, border: `1px solid ${colors.sBg}`, borderRadius: 8, padding: '10px 14px', marginBottom: 14, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <AlertCircle size={16} color={colors.sAccent} style={{ flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 13, color: colors.inkSoft, margin: 0, lineHeight: 1.55 }}>
            Áp S-modules cho người đang ổn = tín hiệu "tao không tin chúng mày" → phá tâm lý an toàn. Chỉ áp khi có lý do rõ.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
          {sModules.map(mod => (
            <ModuleCard key={mod.code} module={mod} selected={member.modules.includes(mod.code)} onToggle={() => onToggleModule(mod.code)} />
          ))}
        </div>
      </section>

      {/* SUMMARY */}
      <section style={{
        background: colors.soft,
        border: `1px solid ${colors.border}`,
        borderRadius: 12,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12
      }}>
        <div>
          <div style={{ fontSize: 13, color: colors.inkMuted, fontWeight: 500 }}>ĐÃ CHỌN</div>
          <div style={{ fontSize: 22, fontWeight: 600, marginTop: 2 }}>
            {member.modules.length} / 9 module
          </div>
          <div style={{ display: 'flex', gap: 4, marginTop: 8, flexWrap: 'wrap' }}>
            {member.modules.sort().map(c => (
              <span key={c} className="mono" style={{
                fontSize: 11,
                padding: '3px 7px',
                background: c.startsWith('M') ? colors.mBg : colors.sBg,
                color: c.startsWith('M') ? colors.mAccent : colors.sAccent,
                borderRadius: 4,
                fontWeight: 600
              }}>{c}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => document.querySelector('header button:nth-of-type(2)')?.click()}
          style={{
            padding: '12px 20px',
            background: colors.ink,
            color: colors.bg,
            border: 'none',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}
        >
          Xem manual <ArrowRight size={15} />
        </button>
      </section>
    </div>
  );
}

// =========================================
// MODULE CARD
// =========================================
function ModuleCard({ module, selected, onToggle }) {
  const isM = module.type === 'M';
  const accent = isM ? colors.mAccent : colors.sAccent;
  const bg = isM ? colors.mBgSoft : colors.sBgSoft;
  
  return (
    <div
      className="module-card"
      onClick={onToggle}
      style={{
        padding: 14,
        background: selected ? bg : colors.card,
        border: `1px solid ${selected ? accent : colors.border}`,
        borderRadius: 8,
        cursor: 'pointer',
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start'
      }}
    >
      <div style={{
        width: 22,
        height: 22,
        borderRadius: 5,
        background: selected ? accent : 'transparent',
        border: `1.5px solid ${selected ? accent : colors.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: 1
      }}>
        {selected && <Check size={14} color="#FFF" strokeWidth={3} />}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span className="mono" style={{ fontSize: 11, color: accent, fontWeight: 700 }}>{module.code}</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: colors.ink }}>{module.title}</span>
        </div>
        <p style={{ fontSize: 12.5, color: colors.inkSoft, margin: '4px 0 0', lineHeight: 1.5 }}>{module.summary}</p>
      </div>
    </div>
  );
}

// =========================================
// PREVIEW VIEW
// =========================================
function PreviewView({ member, markdown, onCopy, onDownload, onPrint, copied, printRef }) {
  const html = renderMarkdown(markdown);
  
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div className="no-print" style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div>
          <h2 className="display-serif" style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>Manual cho {member.name}</h2>
          <p style={{ fontSize: 13, color: colors.inkMuted, margin: '4px 0 0' }}>Copy, in, hoặc tải về để gửi cho nhân viên</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={onCopy} style={btnPrimary(colors)}>
            {copied ? <><Check size={14} /> Đã copy</> : <><Copy size={14} /> Copy</>}
          </button>
          <button onClick={onPrint} style={btnSecondary(colors)}>
            <Printer size={14} /> In
          </button>
          <button onClick={onDownload} style={btnSecondary(colors)}>
            <Download size={14} /> Tải .md
          </button>
        </div>
      </div>
      
      <div ref={printRef} className="print-doc" style={{
        background: colors.card,
        border: `1px solid ${colors.border}`,
        borderRadius: 12,
        padding: '48px 56px',
        maxWidth: 820,
        margin: '0 auto',
        width: '100%',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
      }}>
        <div className="preview-body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

// =========================================
// MARKDOWN -> HTML (minimal)
// =========================================
function renderMarkdown(md) {
  const lines = md.split('\n');
  let html = '';
  let inList = false;
  let listType = null;
  let inTable = false;
  let tableRows = [];
  
  const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = (s) => {
    let out = escapeHtml(s);
    out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*(.+?)\*/g, '<em>$1</em>');
    out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
    return out;
  };
  
  const closeList = () => {
    if (inList) {
      html += listType === 'ul' ? '</ul>' : '</ol>';
      inList = false;
      listType = null;
    }
  };
  
  const closeTable = () => {
    if (inTable) {
      html += '<table>';
      tableRows.forEach((r, i) => {
        if (i === 1) return; // skip separator
        const tag = i === 0 ? 'th' : 'td';
        html += '<tr>';
        r.forEach(cell => { html += `<${tag}>${inline(cell.trim())}</${tag}>`; });
        html += '</tr>';
      });
      html += '</table>';
      inTable = false;
      tableRows = [];
    }
  };
  
  lines.forEach(rawLine => {
    const line = rawLine;
    
    // Table
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      closeList();
      inTable = true;
      const cells = line.trim().slice(1, -1).split('|');
      tableRows.push(cells);
      return;
    } else if (inTable) {
      closeTable();
    }
    
    // Headings
    if (line.startsWith('### ')) { closeList(); html += `<h3>${inline(line.slice(4))}</h3>`; return; }
    if (line.startsWith('## ')) { closeList(); html += `<h2>${inline(line.slice(3))}</h2>`; return; }
    if (line.startsWith('# ')) { closeList(); html += `<h1>${inline(line.slice(2))}</h1>`; return; }
    
    // HR
    if (line.trim() === '---') { closeList(); html += '<hr/>'; return; }
    
    // Blockquote
    if (line.startsWith('> ')) { closeList(); html += `<blockquote>${inline(line.slice(2))}</blockquote>`; return; }
    
    // Ordered list
    const olMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (olMatch) {
      if (!inList || listType !== 'ol') { closeList(); html += '<ol>'; inList = true; listType = 'ol'; }
      html += `<li>${inline(olMatch[2])}</li>`;
      return;
    }
    
    // Unordered list
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList || listType !== 'ul') { closeList(); html += '<ul>'; inList = true; listType = 'ul'; }
      html += `<li>${inline(line.slice(2))}</li>`;
      return;
    }
    
    // Empty line
    if (line.trim() === '') { closeList(); return; }
    
    // Paragraph
    closeList();
    html += `<p>${inline(line)}</p>`;
  });
  
  closeList();
  closeTable();
  return html;
}

// =========================================
// BUTTON STYLES
// =========================================
const btnPrimary = (c) => ({
  padding: '9px 16px',
  background: c.ink,
  color: c.bg,
  border: 'none',
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 6
});

const btnSecondary = (c) => ({
  padding: '9px 16px',
  background: 'transparent',
  color: c.ink,
  border: `1px solid ${c.border}`,
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 6
});
