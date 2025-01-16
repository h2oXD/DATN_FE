(() => {
    "use strict";
    const t = () => localStorage.getItem("theme"),
        a = () => {
            const e = t();
            return e || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark");
        },
        r = (e) => {
            if ("auto" === e && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.setAttribute("data-bs-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-bs-theme", e);
            }
        },
        c = (e, t = !1) => {
            const a = document.querySelector(".bs-theme-text");
            const r = document.querySelector(`[data-bs-theme-value="${e}"]`);

            // Kiểm tra null
            if (r) {
                document.querySelectorAll("[data-bs-theme-value]").forEach((el) => {
                    el.classList.remove("active");
                    el.setAttribute("aria-pressed", "false");
                });
                r.classList.add("active");
                r.setAttribute("aria-pressed", "true");
            }

            if (a) {
                a.textContent = e;
            }

            const themeIconActive = document.querySelector(".theme-icon-active");
            const themeIcon = r ? document.querySelector(`[data-bs-theme-value="${e}"] .theme-icon`) : null;

            if (themeIconActive && themeIcon) {
                themeIconActive.innerHTML = themeIcon.outerHTML;
            }

            if (t && r) r.focus();
        };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        const e = t();
        if (e !== "light" && e !== "dark") {
            r(a());
        }
    });

    window.addEventListener("DOMContentLoaded", () => {
        c(a());
        document.querySelectorAll("[data-bs-theme-value]").forEach((t) => {
            t.addEventListener("click", () => {
                const e = t.getAttribute("data-bs-theme-value");
                localStorage.setItem("theme", e);
                r(e);
                c(e, true);
            });
        });
    });
})();
