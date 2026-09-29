(function () {
  var root = document.documentElement;

  function track(event, props) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: event }, props || {}));
  }

  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = !root.classList.contains("light");
      root.classList.toggle("light", next);
      root.style.colorScheme = next ? "light" : "dark";
      try {
        localStorage.setItem("ef-theme", next ? "light" : "dark");
      } catch (e) {}
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", next ? "#f3f0ea" : "#07080b");
      track("theme_toggle", { light: next });
    });
  }

  var navToggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("hidden") === false;
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  var filterForm = document.getElementById("filters");
  if (filterForm) {
    var q = document.getElementById("q");
    var category = document.getElementById("category");
    var tld = document.getElementById("tld");
    var max = document.getElementById("max");
    var len = document.getElementById("len");
    var count = document.getElementById("result-count");
    var empty = document.getElementById("empty");
    var cards = Array.prototype.slice.call(document.querySelectorAll(".domain-card"));

    function readUrl() {
      var params = new URLSearchParams(location.search);
      q.value = params.get("q") || "";
      category.value = params.get("category") || "";
      tld.value = params.get("tld") || "";
      max.value = params.get("max") || "";
      len.value = params.get("len") || "";
    }

    function apply() {
      var query = q.value.trim().toLowerCase();
      var maxN = max.value ? Number(max.value) : null;
      var shown = 0;
      cards.forEach(function (card) {
        var price = card.dataset.price === "" ? null : Number(card.dataset.price);
        var ok = true;
        if (category.value && card.dataset.category !== category.value) ok = false;
        if (tld.value && card.dataset.tld !== tld.value) ok = false;
        if (len.value && card.dataset.len !== len.value) ok = false;
        if (maxN != null && (price == null || price > maxN)) ok = false;
        if (query && (card.dataset.text || "").indexOf(query) === -1) ok = false;
        card.hidden = !ok;
        if (ok) shown += 1;
      });
      if (count) {
        count.textContent =
          shown +
          (shown === 1 ? " name" : " names") +
          (query ? " matching “" + q.value.trim() + "”" : "");
      }
      if (empty) empty.classList.toggle("hidden", shown !== 0);
    }

    function writeUrl() {
      var params = new URLSearchParams();
      if (q.value.trim()) params.set("q", q.value.trim());
      if (category.value) params.set("category", category.value);
      if (tld.value) params.set("tld", tld.value);
      if (max.value) params.set("max", max.value);
      if (len.value) params.set("len", len.value);
      var next = params.toString();
      history.replaceState(null, "", next ? "?" + next : location.pathname);
    }

    readUrl();
    apply();
    filterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      writeUrl();
      apply();
      track("search", { q: q.value });
    });
    [category, tld, max, len].forEach(function (el) {
      el.addEventListener("change", function () {
        writeUrl();
        apply();
      });
    });
    document.getElementById("clear-filters").addEventListener("click", function () {
      q.value = "";
      category.value = "";
      tld.value = "";
      max.value = "";
      len.value = "";
      writeUrl();
      apply();
    });
  }

  function saved() {
    try {
      var raw = JSON.parse(localStorage.getItem("ef-saved") || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (e) {
      return [];
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll(".js-save"), function (btn) {
    var name = btn.getAttribute("data-save");
    function paint() {
      var on = saved().indexOf(name) !== -1;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.textContent = on ? "Saved" : "Save";
    }
    paint();
    btn.addEventListener("click", function () {
      var list = saved();
      var next = list.indexOf(name) === -1 ? list.concat(name) : list.filter(function (n) { return n !== name; });
      try {
        localStorage.setItem("ef-saved", JSON.stringify(next));
      } catch (e) {}
      paint();
      track("save_domain", { domain: name });
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll("[data-views]"), function (el) {
    var name = el.getAttribute("data-views");
    var base = Number(el.getAttribute("data-base") || 12);
    var key = "ef-views-" + name;
    var count = base;
    try {
      var stored = Number(localStorage.getItem(key) || base);
      count = Number.isFinite(stored) ? stored + 1 : base;
      localStorage.setItem(key, String(count));
    } catch (e) {}
    el.textContent = "Opened " + count + " times in this browser.";
  });

  Array.prototype.forEach.call(document.querySelectorAll(".js-inquiry"), function (formEl) {
    var params = new URLSearchParams(location.search);
    if (!formEl.dataset.domain && params.get("domain")) {
      formEl.dataset.domain = params.get("domain");
      var intent = params.get("intent") || "contact";
      formEl.dataset.intent = intent;
      var heading = formEl.querySelector("h2");
      if (heading) {
        heading.textContent =
          intent === "buy" ? "Buy now via escrow" : intent === "offer" ? "Make an offer" : "Contact the agent";
      }
      var blurb = formEl.querySelector("p");
      if (blurb) blurb.textContent = params.get("domain");
      if (intent !== "contact" && !formEl.querySelector("[name=amount]")) {
        var label = document.createElement("label");
        label.className = "grid gap-1 text-sm text-fg";
        label.innerHTML = 'Amount in USD<input class="field" name="amount" inputmode="decimal" />';
        var note = formEl.querySelector("textarea");
        if (note && note.parentElement) note.parentElement.before(label);
      }
    }

    formEl.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(formEl);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var amount = String(data.get("amount") || "").trim();
      var note = String(data.get("note") || "").trim();
      var error = formEl.querySelector(".js-error");
      if (name.length < 2) {
        error.textContent = "Add your name.";
        error.classList.remove("hidden");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = "Use a real email so the agent can reply.";
        error.classList.remove("hidden");
        return;
      }
      var id = "EF-" + Date.now().toString(36).toUpperCase();
      var domain = formEl.dataset.domain || "";
      var formIntent = formEl.dataset.intent || "contact";
      try {
        var prev = JSON.parse(localStorage.getItem("ef-inquiries") || "[]");
        localStorage.setItem(
          "ef-inquiries",
          JSON.stringify(
            [{ id: id, name: name, email: email, amount: amount, note: note, domain: domain, intent: formIntent, at: new Date().toISOString() }]
              .concat(prev)
              .slice(0, 20),
          ),
        );
      } catch (e) {}
      track("inquiry_submit", { intent: formIntent, domain: domain || "general" });
      error.classList.add("hidden");
      var done = formEl.querySelector(".js-done");
      var copy = formEl.querySelector(".js-done-copy");
      var mailto = formEl.querySelector(".js-mailto");
      var subject = encodeURIComponent(
        (headingText(formEl) || "Inquiry") + ": " + (domain || "ErrorFound") + " (" + id + ")",
      );
      var body = encodeURIComponent(
        "Reference: " +
          id +
          "\nName: " +
          name +
          "\nEmail: " +
          email +
          "\nDomain: " +
          (domain || "n/a") +
          "\nAmount: " +
          (amount || "n/a") +
          "\n\n" +
          note,
      );
      if (copy) {
        copy.textContent =
          "Inquiry " +
          id +
          " is stored in this browser. Email it so it is not only local. Nothing is purchased until escrow opens and you control the name.";
      }
      if (mailto) mailto.href = "mailto:sales@desertrich.com?subject=" + subject + "&body=" + body;
      Array.prototype.forEach.call(formEl.children, function (child) {
        if (child !== done && child.tagName !== "H2") child.classList.add("hidden");
      });
      done.classList.remove("hidden");
    });
  });

  function headingText(formEl) {
    var heading = formEl.querySelector("h2");
    return heading ? heading.textContent : "";
  }

  var exit = document.getElementById("exit");
  var exitForm = document.getElementById("exit-form");
  var exitClose = document.getElementById("exit-close");
  if (exit && exitForm && exitClose) {
    var armed = false;
    var shown = false;
    try {
      if (sessionStorage.getItem("ef-exit")) shown = true;
    } catch (e) {}
    setTimeout(function () {
      armed = true;
    }, 8000);
    document.addEventListener("mouseout", function (event) {
      if (!armed || shown || event.clientY > 8) return;
      shown = true;
      try {
        sessionStorage.setItem("ef-exit", "1");
      } catch (e) {}
      exit.hidden = false;
      exit.classList.remove("hidden");
      exit.classList.add("flex");
    });
    function closeExit() {
      exit.hidden = true;
      exit.classList.add("hidden");
      exit.classList.remove("flex");
    }
    exitClose.addEventListener("click", closeExit);
    exit.addEventListener("click", function (event) {
      if (event.target === exit) closeExit();
    });
    exitForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var emailInput = document.getElementById("exit-email");
      var email = emailInput.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
      try {
        localStorage.setItem("ef-note-email", email);
      } catch (e) {}
      track("portfolio_note", { email: true });
      var doneNote = document.getElementById("exit-done");
      doneNote.textContent = "Saved in this browser. The note will use " + email + ".";
      doneNote.classList.remove("hidden");
      var button = exitForm.querySelector("button");
      if (button) button.classList.add("hidden");
    });
  }
})();
