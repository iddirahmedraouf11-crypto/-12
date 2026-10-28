
const content = document.getElementById("content");

// ===== الدروس =====

const lessons = [
  {
    title: "تعريف العصر الجاهلي",
    text: "العصر الجاهلي هو الفترة السابقة لظهور الإسلام. ويركز تاريخ الأدب الجاهلي عادة على نحو قرن ونصف قبل البعثة النبوية."
  },
  {
    title: "الحياة الاجتماعية",
    text: "كانت القبيلة الوحدة الاجتماعية الأساسية، ومن القيم المشهورة الكرم والشجاعة والوفاء، إلى جانب العصبية القبلية."
  },
  {
    title: "الحياة السياسية",
    text: "لم تكن شبه الجزيرة العربية دولة موحدة. ومن الممالك العربية المعروفة الحيرة والغساسنة وكندة."
  },
  {
    title: "الحياة الدينية",
    text: "عرف العرب معتقدات متنوعة، منها عبادة الأصنام واليهودية والمسيحية، وكان بعضهم يبحث عن التوحيد."
  },
  {
    title: "الشعر الجاهلي",
    text: "من أبرز أغراضه الفخر والمدح والهجاء والرثاء والغزل والوصف والحكمة. وتميز بقوة التعبير والتصوير."
  },
  {
    title: "المعلقات السبع",
    text: "قصائد طويلة مشهورة من الشعر العربي القديم. توجد اختلافات بين روايات بعض المعلقات وعدد أبياتها."
  }
];

// ===== الشعراء =====

const poets = [
  ["امرؤ القيس", "من أشهر شعراء الجاهلية، عُرف بالغزل والوصف."],
  ["طرفة بن العبد", "شاعر جاهلي من أصحاب المعلقات."],
  ["زهير بن أبي سلمى", "اشتهر بالحكمة والدعوة إلى الصلح."],
  ["لبيد بن ربيعة", "من أصحاب المعلقات، وقد أدرك الإسلام."],
  ["عنترة بن شداد", "شاعر وفارس من بني عبس، اشتهر بالشجاعة."],
  ["عمرو بن كلثوم", "اشتهر بالفخر والاعتزاز بقبيلته تغلب."],
  ["الحارث بن حلزة", "اشتهر بالدفاع عن قبيلته بكر."],
  ["حاتم الطائي", "شاعر جاهلي من قبيلة طيء، اشتهر بالكرم والسخاء."]
];

// ===== أدوات إنشاء الصفحات =====

function heading(title) {
  content.replaceChildren();

  const h = document.createElement("h2");
  h.textContent = title;

  content.appendChild(h);
}

function addButton(label, action, parent = content) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.onclick = action;
  parent.appendChild(btn);
  return btn;
}

function card(title, text, buttonText, action) {
  const section = document.createElement("section");
  section.className = "card";

  const h = document.createElement("h3");
  h.textContent = title;

  const p = document.createElement("p");
  p.textContent = text;

  section.append(h, p);

  if (buttonText && action) {
    addButton(buttonText, action, section);
  }

  content.appendChild(section);
}

// ===== الصفحة الرئيسية =====

function home() {
  heading("مرحبًا بك في العصر الجاهلي");

  card(
    "الدروس التعليمية",
    "تعرف على تاريخ العرب قبل الإسلام.",
    "قراءة الدروس",
    showLessons
  );

  card(
    "أشهر الشعراء",
    "اكتشف أعلام الشعر الجاهلي.",
    "عرض الشعراء",
    showPoets
  );

  card(
    "المعلقات السبع",
    "اقرأ القصائد التي أضفتها إلى التطبيق.",
    "فتح المعلقات",
    showMuallaqat
  );

  card(
    "حاتم الطائي",
    "تعرف على شاعر الكرم والمروءة.",
    "اكتشف المزيد",
    showHatim
  );

  card(
    "اختبر معلوماتك",
    "أجب عن ثمانية أسئلة واحصل على نتيجتك.",
    "ابدأ الاختبار",
    startQuiz
  );
}

// ===== عرض الدروس =====

function showLessons() {
  heading("الدروس التعليمية");

  lessons.forEach(lesson => {
    card(lesson.title, lesson.text);
  });
}

// ===== عرض الشعراء =====

function showPoets() {
  heading("أشهر شعراء الجاهلية");

  poets.forEach(poet => {
    card(poet[0], poet[1]);
  });
}

// ===== حاتم الطائي =====

function showHatim() {
  heading("حاتم الطائي");

  card(
    "من هو حاتم الطائي؟",
    "حاتم بن عبد الله الطائي، شاعر عربي جاهلي من قبيلة طيء، اشتهر بالكرم والسخاء والمروءة."
  );

  card(
    "أشهر صفاته",
    "• الكرم والسخاء\n• إكرام الضيف\n• الشجاعة\n• المروءة\n• مساعدة المحتاج"
  );

  card(
    "شعره",
    "تناول في شعره الكرم والمروءة والاعتزاز بالقيم الأخلاقية."
  );

  card(
    "مكانته",
    "أصبح رمزًا للكرم عند العرب، حتى اشتهر المثل: أكرم من حاتم."
  );

  addButton("العودة إلى الرئيسية", home);
}

// ===== قائمة المعلقات =====

function showMuallaqat() {
  heading("المعلقات السبع");

  muallaqat.forEach((poem, index) => {
    card(
      poem.title,
      "الشاعر: " + poem.poet,
      "قراءة المعلقة",
      () => openPoem(index)
    );
  });
}

// ===== قارئ المعلقات =====

let fontSize = 25;

async function openPoem(index) {
  const poem = muallaqat[index];

  heading(poem.title);

  const status = document.createElement("p");
  status.textContent = "جارٍ تحميل القصيدة...";
  content.appendChild(status);

  let poemText;

  try {
    const response = await fetch(poem.file);

    if (!response.ok) {
      throw new Error("تعذر تحميل الملف");
    }

    poemText = await response.text();

    if (!poemText.trim()) {
      throw new Error("ملف القصيدة فارغ");
    }

    // إذا انتقل المستخدم إلى صفحة أخرى أثناء التحميل
    if (!status.isConnected) return;

    status.remove();

  } catch (error) {
    if (!status.isConnected) return;

    status.textContent =
      "تعذر تحميل القصيدة. تأكد من وجود ملف TXT وأنه يحتوي على الأبيات.";

    addButton("العودة إلى المعلقات", showMuallaqat);
    return;
  }

  const controls = document.createElement("div");
  controls.className = "controls";
  content.appendChild(controls);

  const poemBox = document.createElement("div");
  poemBox.className = "poem";
  poemBox.textContent = poemText;
  poemBox.style.fontSize = fontSize + "px";

  addButton("تكبير الخط +", () => {
    fontSize = Math.min(fontSize + 3, 45);
    poemBox.style.fontSize = fontSize + "px";
  }, controls);

  addButton("تصغير الخط -", () => {
    fontSize = Math.max(fontSize - 3, 16);
    poemBox.style.fontSize = fontSize + "px";
  }, controls);

  addButton("نسخ الأبيات", async () => {
    try {
      await navigator.clipboard.writeText(poemText);
      alert("تم نسخ الأبيات");
    } catch (error) {
      alert("تعذر النسخ. تأكد من أذونات المتصفح.");
    }
  }, controls);

  const search = document.createElement("input");
  search.placeholder = "ابحث عن كلمة داخل المعلقة...";
  search.setAttribute("aria-label", "البحث داخل المعلقة");
  content.appendChild(search);

  const result = document.createElement("p");
  content.appendChild(result);

  content.appendChild(poemBox);

  search.addEventListener("input", () => {
    const query = search.value.trim();

    poemBox.replaceChildren();

    if (!query) {
      poemBox.textContent = poemText;
      result.textContent = "";
      return;
    }

    const original = poemText;
    const lower = original.toLocaleLowerCase("ar");
    const target = query.toLocaleLowerCase("ar");

    let position = 0;
    let matches = 0;

    while (position < original.length) {
      const found = lower.indexOf(target, position);

      if (found === -1) {
        poemBox.append(
          document.createTextNode(original.slice(position))
        );
        break;
      }

      poemBox.append(
        document.createTextNode(original.slice(position, found))
      );

      const mark = document.createElement("mark");
      mark.textContent = original.slice(
        found,
        found + query.length
      );

      poemBox.appendChild(mark);

      position = found + query.length;
      matches++;
    }

    result.textContent = "عدد النتائج: " + matches;
  });

  addButton("العودة إلى المعلقات", showMuallaqat);
}

// ===== الاختبار =====

const questions = [
  {
    q: "متى كان العصر الجاهلي؟",
    options: ["قبل الإسلام", "بعد العصر العباسي", "في العصر الحديث"],
    answer: 0
  },
  {
    q: "من شاعر الفروسية والشجاعة؟",
    options: ["أبو نواس", "عنترة بن شداد", "أحمد شوقي"],
    answer: 1
  },
  {
    q: "بماذا اشتهر حاتم الطائي؟",
    options: ["الطب", "الهندسة", "الكرم"],
    answer: 2
  },
  {
    q: "من صاحب معلقة قفا نبك؟",
    options: ["امرؤ القيس", "زهير", "لبيد"],
    answer: 0
  },
  {
    q: "من شعراء الحكمة؟",
    options: ["المتنبي", "زهير بن أبي سلمى", "أبو تمام"],
    answer: 1
  },
  {
    q: "ما المعلقات؟",
    options: ["مدن عربية", "حروب قديمة", "قصائد شعرية مشهورة"],
    answer: 2
  },
  {
    q: "إلى أي قبيلة ينتمي حاتم الطائي؟",
    options: ["طيء", "تغلب", "عبس"],
    answer: 0
  },
  {
    q: "ما الوحدة الاجتماعية الأساسية في الجاهلية؟",
    options: ["الجامعة", "القبيلة", "المصنع"],
    answer: 1
  }
];

let quiz = [];
let current = 0;
let score = 0;

function startQuiz() {
  quiz = [...questions].sort(() => Math.random() - 0.5);
  current = 0;
  score = 0;

  showQuestion();
}

function showQuestion() {
  if (current >= quiz.length) {
    showResult();
    return;
  }

  const question = quiz[current];

  heading("السؤال " + (current + 1) + " من " + quiz.length);
  card("السؤال", question.q);

  const options = [];
  const feedback = document.createElement("p");

  question.options.forEach((option, index) => {
    const btn = addButton(option, () => {
      options.forEach(b => b.disabled = true);

      options[question.answer].classList.add("correct");

      if (index === question.answer) {
        score++;
        feedback.textContent = "إجابة صحيحة!";
        feedback.style.color = "#54d68a";
      } else {
        btn.classList.add("wrong");
        feedback.textContent =
          "الإجابة الصحيحة: " +
          question.options[question.answer];
        feedback.style.color = "#ff7777";
      }

      next.hidden = false;
    });

    btn.className = "option";
    options.push(btn);
  });

  content.appendChild(feedback);

  const next = addButton("السؤال التالي", () => {
    current++;
    showQuestion();
  });

  next.hidden = true;
}

function showResult() {
  heading("نتيجة الاختبار");

  const percent = Math.round(score / quiz.length * 100);

  const message = percent >= 80
    ? "ممتاز!"
    : percent >= 50
      ? "جيد، واصل التعلم."
      : "راجع الدروس وحاول مجددًا.";

  card(
    "نتيجتك",
    score + " / " + quiz.length +
    "\n" + percent + "%" +
    "\n" + message
  );

  addButton("إعادة الاختبار", startQuiz);
  addButton("العودة إلى الرئيسية", home);
}

// ===== تثبيت التطبيق =====

let deferredPrompt = null;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.hidden = false;
});

installBtn.onclick = async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  await deferredPrompt.userChoice;

  deferredPrompt = null;
  installBtn.hidden = true;
};

window.addEventListener("appinstalled", () => {
  installBtn.hidden = true;
});

// ===== العمل دون إنترنت =====

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .catch(console.error);
  });
}

// تشغيل الصفحة الرئيسية
home();
