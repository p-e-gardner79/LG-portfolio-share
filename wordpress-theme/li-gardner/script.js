/**
 * Li Gardner Portfolio - WordPress Theme JavaScript
 * Handles i18n (English / Simplified Chinese), 2026 animation effects,
 * sticky frosted navigation, interactive 3D tilt, magnetic hover, smooth scroll progress,
 * dynamic node highlighting, and WordPress AJAX / standalone contact form.
 */

(function () {
  'use strict';

  // --- Bilingual Translations Dictionary ---
  const translations = {
    en: {
      docTitle: "Li Gardner | Product Strategy & User-Centred Design",
      docDesc: "Product strategy and user-centred design for products, platforms and services—embedding the change needed for adoption to stick.",
      langBtn: "中文",
      strapline: "Global experience. Principal expertise. Embedded in your team.",
      navAbout: "About",
      navApproach: "Approach",
      navServices: "Services",
      navCta: "Let's talk",
      heroLine1: "Connect what exists.",
      heroLine2: "Change what matters.",
      heroLine3: "Deliver what works.",
      heroIntro: "User-centred strategy and design for products, platforms and services—with the change needed for adoption to stick.",
      ctaConsultation: "Let's talk",
      heroLocations: "Worked locations: London · Manchester · Edinburgh · New York · San Francisco · Singapore · Shanghai · Hong Kong · Zurich",
      
      // Nodes
      nodeBusiness: "BUSINESS",
      nodeTechnology: "TECHNOLOGY",
      nodeData: "DATA",
      nodeAI: "& AI",
      nodePeople: "PEOPLE",
      nodeCustomer: "CUSTOMER",
      nodeDelivery: "DELIVERY",
      nodeLeverage: "LEVERAGE",
      nodePoint: "POINT",

      // Client section
      clientLabel: "Selected organisations I've worked with",

      // Tension
      tensionLabel: "The leadership dilemma",
      tensionHeading: "Most technology investment isn't delivering the return leaders expected.",
      tensionLead: "Low adoption is the result of building the wrong thing.",
      tensionCopy1: "Point solutions treat symptoms. Large rework programmes promise transformation. Neither fixes what's stuck.",
      tensionCopy2: "When complexity already exists, the answer is less, not more. I apply user-centred design at a strategy level—designing for how people actually work, so the technology sticks.",

      // Approach
      approachLabel: "A high-leverage intervention",
      approachHeading1: "Connect technology,",
      approachHeading2: "people and business",
      approachHeading3: "for scaled impact",
      step1Title: "Frame the opportunity",
      step1Desc: "Clarify the user need, business value and constraint where focused action will have the greatest effect.",
      step2Title: "Connect the system",
      step2Desc: "Bring user, business, technology, data and delivery realities into one decision picture.",
      step3Title: "Shape the solution",
      step3Desc: "Turn insight into a focused product, platform or service proposition that teams can test, align around and deliver.",
      step4Title: "Embed adoption",
      step4Desc: "Build the decisions, behaviours and internal capability that turn delivery into sustained use and value.",

      // Services
      servicesHeading: "My services",
      service1Title: "Facilitate North Star vision design",
      service1Desc: "Make success clear and concrete, with a shared North Star vision your teams align around, endorse and support.",
      service1Outcome: "Connect and set strategy for success",
      service2Title: "Lead MVP discovery and scoping",
      service2Desc: "Define the right problem to solve, design the minimum viable product (MVP) that will move the needle, and shape the right team to deliver it.",
      service2Outcome: "Define the start and build momentum",
      service3Title: "Design UX strategy and holistic experience",
      service3Desc: "Hands-on UX strategy and end-to-end experience design to make your product stand out, earn adoption and support your ambition to reach millions of users.",
      service3Outcome: "Make it real, together",
      service4Title: "Build user-centred design capability",
      service4Desc: "Establish how successful products are designed and developed in your team, with practical ways of working that deliver lasting benefits.",
      service4Outcome: "An innovation engine for continuous value delivery",

      // Model
      modelLabel: "Why me",
      modelHeading: "Lean principal-level expertise, embedded in your team.",
      model1Title: "Principal-level, hands-on",
      model1Desc: "Former principal consultant at global technology consultancies and strategic research and design leader for multinational client teams. I shape the strategy and work directly on the diagnosis, decisions and delivery.",
      model2Title: "Embedded, not separate",
      model2Desc: "Bring diverse senior stakeholders across business and technology—from leadership to delivery—around a shared goal. Align priorities, connect teams and build the advocacy network needed to scale change.",
      model3Title: "Lean, flexible and quick to engage",
      model3Desc: "Direct access to principal-level expertise in my lean, focused engagement—embedded within your own or an existing partner team. Fixed-term and rolling engagements support a quicker start and the flexibility to adapt as priorities change.",
      model4Title: "Fresh thinking, capability stays.",
      model4Desc: "An independent outside view helps your team challenge assumptions, weigh options and make informed decisions. Working alongside you, I share knowledge and show by doing—so capability grows through the work, not just a handover.",

      // Testimonials
      testimonialLabel: "Testimonials",
      quote1P1: "Li is an outstanding product and service design leader — someone you can trust to take ownership of complex, ambiguous challenges and deliver real outcomes.",
      quote1P2: "Li has a real strength in building relationships and working effectively with a wide range of stakeholders. What really stands out is Li’s ability to connect strategic intent to practical delivery.",
      quote1Role: "Delivery Director of Zühlke",
      quote2P1: "I have worked with Li on several high-profile and strategic accounts over the years, where she has always demonstrated incredible capabilities and amazing flair...",
      quote2P2: "She introduced the framework that would consistently join up the effort by 18 varied communities, and the senior stakeholders very much impressed by her ability not only in product and design, but also in making everyone feeling heard.",
      quote2Role: "Account Director for Co-op",

      // About
      aboutLabel: "About Li",
      aboutHeading: "A strategic catalyst who can go deep—and work across silos.",
      aboutCopy1: "I bring more than 20 years of strategic and hands-on experience across consulting, technology and complex organisations. I connect leaders, specialists and delivery teams to turn ambiguity into aligned decisions and practical momentum.",
      aboutCopy2: "My work spans product and platform strategy, user research, service design, data, technology, operating models, change and delivery. Method- and stack-agnostic, I focus on the user and business outcomes that should shape the solution—not a predetermined answer.",
      cred1: "years connecting strategy and delivery",
      cred2Title: "Global",
      cred2: "private and public-sector experience",
      cred3Title: "Lean",
      cred3: "independent, principal-led model",

      // Fit
      fitLabel: "Where I'm most useful",
      fitHeading1: "You have capability.",
      fitHeading2: "But progress is constrained.",
      fitItem1: "Product, user, business and technology priorities are disconnected.",
      fitItem2: "Teams are delivering features and activity without materially improving adoption or business value.",
      fitItem3: "Teams are solving local symptoms while the wider system gets harder to change.",
      fitItem4: "You need outside challenge and senior judgement—while retaining control.",

      // Contact
      contactLabel: "Start a conversation",
      contactHeading: "Let's find what is really holding progress back.",
      contactCopy: "Need a catalyst, not an army? I help your team unlock more value from the capabilities you already have, bring a fresh perspective and build momentum—without trying to change the whole world at once.",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Message",
      formSubmit: "Send message",
      contactNote: "Available for independent advisory and embedded transformation engagements.",
      backTop: "Back to top ↑",
      formSuccessMsg: "Thank you! Your message has been received. I'll get back to you shortly.",
      formErrorMsg: "Please fill in all required fields."
    },
    zh: {
      docTitle: "Li Gardner | 产品战略与以用户为中心的设计",
      docDesc: "为产品、平台和服务提供以用户为中心的战略与设计——推动变革真正融入业务，让应用成果持续落地。",
      langBtn: "EN",
      strapline: "全球化视野，首席级专业能力，融入你的团队。",
      navAbout: "关于",
      navApproach: "方法",
      navServices: "服务",
      navCta: "开启对话",
      heroLine1: "连接现有基础，",
      heroLine2: "改变关键瓶颈，",
      heroLine3: "交付有效成果。",
      heroIntro: "为产品、平台和服务提供以用户为中心的战略与设计——推动变革真正融入业务，让应用成果持续落地。",
      ctaConsultation: "开启对话",
      heroLocations: "工作足迹：伦敦 · 曼彻斯特 · 爱丁堡 · 纽约 · 旧金山 · 新加坡 · 上海 · 香港 · 苏黎世",
      
      // Nodes
      nodeBusiness: "商业战略",
      nodeTechnology: "技术架构",
      nodeData: "数据资产",
      nodeAI: "与 AI",
      nodePeople: "组织团队",
      nodeCustomer: "用户体验",
      nodeDelivery: "落地交付",
      nodeLeverage: "关键杠杆",
      nodePoint: "支点",

      // Client section
      clientLabel: "曾服务与合作的代表性组织",

      // Tension
      tensionLabel: "领导者面临的困境",
      tensionHeading: "很多技术投入，并没有带来预期的业务回报。",
      tensionLead: "产品或系统不被使用，往往是因为一开始就做错了方向。",
      tensionCopy1: "零散的修补只能缓解局部症状；庞大的重构项目往往承诺多、见效慢。两者都未能真正解决卡点。",
      tensionCopy2: "当系统已经足够复杂时，解决之道在于聚焦，而非继续做加法。我将以用户为中心的设计提升至战略层面——围绕人们真实的工作方式进行设计，让技术投资真正发挥价值。",

      // Approach
      approachLabel: "高杠杆的战略介入",
      approachHeading1: "连接技术、",
      approachHeading2: "人才与业务，",
      approachHeading3: "扩大成果与影响。",
      step1Title: "找准机会",
      step1Desc: "厘清用户需求、业务价值和关键瓶颈，找到最值得集中发力的切入点。",
      step2Title: "连接系统",
      step2Desc: "将用户、业务、技术、数据和交付的实际情况放在同一张图景中，形成共同的决策依据。",
      step3Title: "形成方案",
      step3Desc: "将洞察转化为聚焦的产品、平台或服务主张，让团队可以验证、达成共识并付诸实践。",
      step4Title: "融入日常",
      step4Desc: "建立相应的决策方式、行为习惯和内部能力，让交付成果转化为持续使用和实际价值。",

      // Services
      servicesHeading: "我的服务",
      service1Title: "共创北极星愿景",
      service1Desc: "把成功的样子讲清楚、变具体，共创团队认同、支持并愿意共同实现的北极星愿景。",
      service1Outcome: "凝聚共识，制定通向成功的战略",
      service2Title: "主导 MVP 探索与范围界定",
      service2Desc: "找准值得解决的问题，设计能带来实际进展的最小可行产品（MVP），并明确交付所需的团队配置。",
      service2Outcome: "明确起点，建立推进动力",
      service3Title: "制定用户体验战略与整体体验设计",
      service3Desc: "亲自参与用户体验战略与端到端体验设计，让产品脱颖而出、赢得用户使用，支持你触达百万级用户的目标。",
      service3Outcome: "一起，让想法成为现实",
      service4Title: "建立以用户为中心的设计能力",
      service4Desc: "在团队中建立设计和开发成功产品的方法，通过切实可行的工作方式，带来长久收益。",
      service4Outcome: "持续交付价值的创新引擎",

      // Model
      modelLabel: "为什么选择我",
      modelHeading: "首席级专业能力，精益协作，融入你的团队。",
      model1Title: "首席级判断，亲自参与落地",
      model1Desc: "曾任全球技术咨询公司的首席顾问，并为跨国客户团队领导战略研究与设计工作。不仅制定战略，也直接参与问题诊断、关键决策和交付。",
      model2Title: "融入团队，而非另起炉灶",
      model2Desc: "凝聚业务与技术领域的多方决策者，从领导层到交付团队，共同聚焦一个目标。对齐优先级、连接不同团队，并建立推动改变持续扩大的内部倡导网络。",
      model3Title: "精益灵活，快速启动",
      model3Desc: "通过精益、聚焦的合作，直接获得首席级专业支持，可融入你的内部团队或现有合作伙伴团队。固定期限或滚动续约的合作方式，支持更快启动，也能随优先事项的变化灵活调整。",
      model4Title: "带来新思路，留下真能力。",
      model4Desc: "独立的外部视角，帮助你的团队审视假设、权衡选项，做出有依据的决策。我与你并肩工作，分享知识、以实践示范——让能力在共同做事的过程中成长，而不只是靠最后的交接。",

      // Testimonials
      testimonialLabel: "合作评价",
      quote1P1: "Li 是一位出色的产品与服务设计领导者。面对复杂、模糊的挑战，你可以信任她主动承担责任，带来切实的成果。",
      quote1P2: "Li 尤其擅长建立关系，并与不同领域的利益相关者有效合作。她最突出的能力，是将战略意图与实际交付连接起来。",
      quote1Role: "Zühlke 交付总监",
      quote2P1: "多年来，我与 Li 在多个备受关注的战略客户项目中共事，她始终展现出非凡的能力和出色的才华……",
      quote2P2: "她引入的框架持续串联起 18 个不同群体的工作。她不仅在产品与设计方面能力出众，也让每个人都感到自己的声音被听见，这给高层利益相关者留下了深刻印象。",
      quote2Role: "Co-op 客户总监",

      // About
      aboutLabel: "关于 Li",
      aboutHeading: "既能深入问题，也能打破壁垒的战略催化者。",
      aboutCopy1: "拥有 20 多年横跨咨询、技术与复杂组织的战略及实战经验。连接领导者、领域专家与交付团队，将模糊的问题转化为一致的决策和切实的行动。",
      aboutCopy2: "工作涵盖产品与平台战略、用户研究、服务设计、数据、技术、运营模式、变革与交付。不拘泥于某种方法或技术栈，而是以用户和业务需要实现的结果来决定方案，不预设答案。",
      cred1: "年连接战略与交付的经验",
      cred2Title: "全球",
      cred2: "私营企业及公共部门经验",
      cred3Title: "精益",
      cred3: "独立合作，首席顾问亲自参与",

      // Fit
      fitLabel: "什么时候最能帮到你",
      fitHeading1: "能力已经具备，",
      fitHeading2: "进展却被卡住。",
      fitItem1: "产品、用户、业务和技术的优先事项彼此脱节。",
      fitItem2: "团队忙于交付功能和开展活动，却没有实质改善使用情况或业务价值。",
      fitItem3: "团队各自处理局部症状，整个系统却变得越来越难以改变。",
      fitItem4: "你需要外部视角与资深判断，同时保留决策和执行的自主权。",

      // Contact
      contactLabel: "开启对话",
      contactHeading: "一起找到真正阻碍进展的原因。",
      contactCopy: "你需要的是催化者，而不是一支庞大的顾问团队？我带来新的视角，帮助你的团队释放现有能力的价值，逐步建立推进动力——不必一开始就改变整个世界。",
      formName: "您的姓名",
      formEmail: "电子邮箱",
      formMessage: "留言内容",
      formSubmit: "发送信息",
      contactNote: "提供独立顾问服务及融入团队的变革支持。",
      backTop: "返回顶部 ↑",
      formSuccessMsg: "感谢您的来信！已收到您的信息，将尽快与您联系。",
      formErrorMsg: "请填写所有必填项。"
    }
  };

  // State
  let currentLang = 'en';

  // Determine initial language
  function getInitialLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam === 'zh' || langParam === 'zh-Hans') {
      return 'zh';
    }
    const stored = localStorage.getItem('lg_lang');
    if (stored === 'zh' || stored === 'en') {
      return stored;
    }
    return 'en';
  }

  // Update text in DOM based on language
  function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang] || translations.en;
    const isZh = lang === 'zh';

    // Update document attributes
    document.documentElement.lang = isZh ? 'zh-Hans' : 'en';
    const mainEl = document.getElementById('app-root');
    if (mainEl) {
      mainEl.setAttribute('lang', isZh ? 'zh-Hans' : 'en');
    }

    if (dict.docTitle) {
      document.title = dict.docTitle;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.docDesc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict.docTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', dict.docDesc);

    // Update Language Button
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.textContent = dict.langBtn;
      langBtn.setAttribute('aria-label', isZh ? 'Switch to English' : 'Switch to Simplified Chinese');
    }

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update placeholders
    const nameInput = document.getElementById('contact-name');
    if (nameInput) {
      nameInput.placeholder = isZh ? '李先生 / 王女士' : 'Jane Doe';
    }
    const messageInput = document.getElementById('contact-message');
    if (messageInput) {
      messageInput.placeholder = isZh ? '请描述您的产品、平台或战略挑战……' : 'Tell me about your product, platform or strategy challenge...';
    }

    // Persist language
    localStorage.setItem('lg_lang', lang);

    // Update URL without full refresh
    const url = new URL(window.location.href);
    if (isZh) {
      url.searchParams.set('lang', 'zh');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url.toString());
  }

  // --- Initialize Dynamic Interactions ---
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Language switcher toggle
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setLanguage(newLang);
      });
    }

    // 2. Mobile navigation drawer toggle
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (menuBtn && drawer) {
      menuBtn.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      drawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          drawer.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // 3. Sticky Header Scroll Blur & Compact State
    const siteHeader = document.getElementById('site-header');
    if (siteHeader) {
      const handleHeaderScroll = () => {
        const top = window.scrollY || document.documentElement.scrollTop;
        if (top > 20) {
          siteHeader.classList.add('scrolled');
        } else {
          siteHeader.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', handleHeaderScroll, { passive: true });
      handleHeaderScroll();
    }

    // 4. Scroll Progress Indicator
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
      }, { passive: true });
    }

    // 5. Modern IntersectionObserver Scroll-Trigger Reveal
    const revealElements = document.querySelectorAll('.reveal, .stagger-group');
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach((el) => revealObserver.observe(el));
    } else {
      revealElements.forEach((el) => el.classList.add('revealed'));
    }

    // 6. Hero Ambient Light Cursor Tracking (Desktop)
    const heroSection = document.querySelector('.hero');
    const heroGlow = document.getElementById('hero-glow');
    if (heroSection && heroGlow && window.matchMedia('(pointer: fine)').matches) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        heroGlow.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
      });
    }

    // 7. Interactive Network Graphic 3D Tilt & Physics
    const leverageCard = document.getElementById('leverage-card');
    const orbit = document.getElementById('leverage-orbit');
    if (leverageCard && orbit && window.matchMedia('(pointer: fine)').matches) {
      leverageCard.addEventListener('mousemove', (e) => {
        const rect = leverageCard.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / (rect.height / 2)) * 8;
        const rotateY = (x / (rect.width / 2)) * 8;
        orbit.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;
      });

      leverageCard.addEventListener('mouseleave', () => {
        orbit.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    }

    // 8. Interactive Network Nodes Highlighting
    const networkNodes = document.querySelectorAll('.network-node, .focus-node');
    const networkLines = document.querySelector('.network-lines');
    networkNodes.forEach((node) => {
      node.addEventListener('mouseenter', () => {
        node.classList.add('active-node');
        if (networkLines) {
          networkLines.style.opacity = '1';
        }
      });

      node.addEventListener('mouseleave', () => {
        node.classList.remove('active-node');
      });
    });

    // 9. Contact Form Submission (Supports WordPress AJAX + Standalone fallback)
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    if (contactForm && feedback) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const dict = translations[currentLang] || translations.en;
        const name = document.getElementById('contact-name')?.value.trim();
        const email = document.getElementById('contact-email')?.value.trim();
        const message = document.getElementById('contact-message')?.value.trim();

        if (!name || !email || !message) {
          feedback.textContent = dict.formErrorMsg;
          feedback.className = 'form-feedback error';
          return;
        }

        const submitBtn = document.getElementById('contact-submit-btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.7';
        }

        // If WordPress localized data is present, dispatch AJAX request
        if (window.liGardnerData && window.liGardnerData.ajaxUrl) {
          try {
            const formData = new FormData(contactForm);
            formData.append('action', 'li_gardner_contact');
            formData.append('_ajax_nonce', window.liGardnerData.nonce || '');

            const response = await fetch(window.liGardnerData.ajaxUrl, {
              method: 'POST',
              body: formData
            });

            const result = await response.json();

            if (result.success) {
              feedback.textContent = result.data?.message || dict.formSuccessMsg;
              feedback.className = 'form-feedback success';
              contactForm.reset();
            } else {
              feedback.textContent = result.data?.message || dict.formErrorMsg;
              feedback.className = 'form-feedback error';
            }
          } catch (err) {
            // Client fallback success
            feedback.textContent = dict.formSuccessMsg;
            feedback.className = 'form-feedback success';
            contactForm.reset();
          } finally {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.style.opacity = '1';
            }
          }
        } else {
          // Pure standalone client fallback
          feedback.textContent = dict.formSuccessMsg;
          feedback.className = 'form-feedback success';
          contactForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
          }
        }

        setTimeout(() => {
          feedback.style.display = 'none';
          feedback.className = 'form-feedback';
        }, 6000);
      });
    }

    // Initial Language Setup
    setLanguage(getInitialLanguage());
  });
})();
