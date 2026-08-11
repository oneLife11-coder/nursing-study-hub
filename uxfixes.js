// ============================================================================
// NURSING PREP LAB
// UX FIXES
//
// 1. Study Command Center appears only on the dashboard
// 2. Weak Areas opens a focused topic-by-topic review center
// 3. Back buttons move one step at a time
// 4. Daily Study Plan remembers the user's selected study time
//
// IMPORTANT:
// This file intentionally uses NO MutationObserver and NO repeating timer.
// It reacts only to real user actions so it stays lightweight.
// ============================================================================

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        // ====================================================================
        // SETTINGS
        // ====================================================================

        const PLAN_KEY = "nshTOOLS_daily_plan";
        const PLAN_CHOICE_KEY = "nshUX_planner_minutes";

        const COURSE_CONFIG = {

            anatomy1: {
                name: "Anatomy & Physiology I",
                icon: "🫀",
                card: "anatomy1",
                pageId: "anatomy1-page",
                weakSelector: ""
            },

            anatomy2: {
                name: "Anatomy & Physiology II",
                icon: "❤️",
                card: "anatomy2",
                pageId: "anatomy2-page",
                weakSelector: "#ap2-weak-button"
            },

            chemistry: {
                name: "Chemistry",
                icon: "🧪",
                card: "chemistry",
                pageId: "chemistry-page",
                weakSelector: "#chem-weak-button"
            },

            microbiology: {
                name: "Microbiology",
                icon: "🦠",
                card: "microbiology",
                pageId: "microbiology-page",
                weakSelector: "#micro-weak-button"
            },

            statistics: {
                name: "Statistics",
                icon: "📊",
                card: "statistics",
                pageId: "statistics-page",
                weakSelector: "#stat-weak-button"
            },

            nutrition: {
                name: "Nutrition & Diet",
                icon: "🍎",
                card: "nutrition",
                pageId: "nutrition-page",
                weakSelector: "#nut-weak-button"
            },

            labs: {
                name: "Anatomy & Science Labs",
                icon: "🔬",
                card: "labs",
                pageId: "lab-center-page",
                weakSelector: "#lab-weak-button"
            },

            teas: {
                name: "TEAS Practice Center",
                icon: "🎓",
                card: "teas",
                pageId: "teas-center-page",
                weakSelector: "#teas-weak"
            }

        };


        const WEAK_KEY_PATTERNS = [

            {
                courseId: "anatomy1",
                regex: /^nshAP1_(.+)_missed$/i
            },

            {
                courseId: "anatomy2",
                regex: /^nshAP2_(.+)_missed$/i
            },

            {
                courseId: "chemistry",
                regex: /^nshCHEM_FINAL_(.+)_missed$/i
            },

            {
                courseId: "microbiology",
                regex: /^nshMICRO_FINAL_(.+)_missed$/i
            },

            {
                courseId: "statistics",
                regex: /^nshSTAT_(.+)_missed$/i
            },

            {
                courseId: "nutrition",
                regex: /^nshNUT_FINAL_(.+)_missed$/i
            },

            {
                courseId: "labs",
                regex: /^nshLAB_FINAL_(.+)_missed$/i
            }

        ];


        let rememberedCourseId = null;
        let activeWeakFilter = "all";


        // ====================================================================
        // BASIC HELPERS
        // ====================================================================

        function escapeHTML(value) {

            return String(value ?? "")
                .replaceAll("&", "&amp;")
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll('"', "&quot;")
                .replaceAll("'", "&#039;");

        }


        function getJSON(
            key,
            fallback
        ) {

            try {

                const value =
                    JSON.parse(
                        localStorage.getItem(
                            key
                        )
                    );


                return (
                    value === null ||
                    value === undefined
                )
                    ? fallback
                    : value;

            } catch {

                return fallback;

            }

        }


        function todayString() {

            const date =
                new Date();


            return [

                date.getFullYear(),

                String(
                    date.getMonth() + 1
                ).padStart(
                    2,
                    "0"
                ),

                String(
                    date.getDate()
                ).padStart(
                    2,
                    "0"
                )

            ].join("-");

        }


        function isVisible(
            element
        ) {

            if (
                !element
            ) {

                return false;

            }


            if (
                element.classList.contains(
                    "hidden"
                )
            ) {

                return false;

            }


            const style =
                window.getComputedStyle(
                    element
                );


            return (
                style.display !==
                "none" &&
                style.visibility !==
                "hidden"
            );

        }


        function scrollToTop() {

            window.scrollTo({

                top:
                    0,

                behavior:
                    window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                    ).matches
                        ? "auto"
                        : "smooth"

            });

        }


        function showToast(
            message
        ) {

            let container =
                document.getElementById(
                    "nsh-ux-toast-container"
                );


            if (
                !container
            ) {

                container =
                    document.createElement(
                        "div"
                    );


                container.id =
                    "nsh-ux-toast-container";


                document.body.appendChild(
                    container
                );

            }


            const toast =
                document.createElement(
                    "div"
                );


            toast.className =
                "nsh-ux-toast";


            toast.textContent =
                message;


            container.appendChild(
                toast
            );


            requestAnimationFrame(
                function () {

                    toast.classList.add(
                        "show"
                    );

                }
            );


            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );


                    setTimeout(
                        function () {

                            toast.remove();

                        },
                        200
                    );

                },
                2800
            );

        }


        // ====================================================================
        // STYLES
        // ====================================================================

        function injectStyles() {

            if (
                document.getElementById(
                    "nsh-ux-fixes-styles"
                )
            ) {

                return;

            }


            const style =
                document.createElement(
                    "style"
                );


            style.id =
                "nsh-ux-fixes-styles";


            style.textContent = `

                /* ============================================================
                   DASHBOARD-ONLY COMMAND CENTER
                ============================================================ */

                #study-command-center.nsh-ux-dashboard-hidden {
                    display:none !important;
                }


                /* ============================================================
                   MODAL BACK BUTTONS
                ============================================================ */

                .nsh-ux-modal-back {
                    min-height:40px;
                    padding:8px 12px;
                    margin-right:10px;
                    border:1px solid #d0d5dd;
                    border-radius:11px;
                    background:#fff;
                    color:#344054;
                    font-weight:800;
                    cursor:pointer;
                    white-space:nowrap;
                }

                .nsh-ux-modal-back:hover {
                    border-color:#6366f1;
                    color:#4338ca;
                }

                .study-modal-header.nsh-ux-header-with-back,
                .study-tools-modal-header.nsh-ux-header-with-back {
                    align-items:center;
                }

                .nsh-ux-modal-header-left {
                    display:flex;
                    align-items:center;
                    gap:10px;
                    min-width:0;
                }


                /* ============================================================
                   FOCUSED WEAK AREA CENTER
                ============================================================ */

                #nsh-ux-weak-overlay.hidden {
                    display:none !important;
                }

                #nsh-ux-weak-overlay {
                    position:fixed;
                    inset:0;
                    z-index:2147482000;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    padding:24px;
                    background:rgba(15,23,42,.66);
                    backdrop-filter:blur(7px);
                    -webkit-backdrop-filter:blur(7px);
                }

                .nsh-ux-weak-modal {
                    width:min(1080px,96vw);
                    max-height:92vh;
                    overflow:auto;
                    background:#fff;
                    color:#172033;
                    border-radius:24px;
                    box-shadow:0 30px 90px rgba(0,0,0,.3);
                }

                .nsh-ux-weak-header {
                    position:sticky;
                    top:0;
                    z-index:10;
                    display:flex;
                    align-items:flex-start;
                    justify-content:space-between;
                    gap:18px;
                    padding:22px 24px;
                    background:rgba(255,255,255,.97);
                    border-bottom:1px solid #e5e7eb;
                    backdrop-filter:blur(8px);
                }

                .nsh-ux-weak-header-main {
                    display:flex;
                    align-items:flex-start;
                    gap:12px;
                    min-width:0;
                }

                .nsh-ux-weak-header h2 {
                    margin:3px 0 5px;
                }

                .nsh-ux-weak-header p {
                    margin:0;
                    color:#667085;
                    line-height:1.55;
                }

                .nsh-ux-close,
                .nsh-ux-back,
                .nsh-ux-filter,
                .nsh-ux-action {
                    border:1px solid #d0d5dd;
                    background:#fff;
                    color:#344054;
                    border-radius:11px;
                    min-height:42px;
                    padding:9px 13px;
                    font-weight:800;
                    cursor:pointer;
                }

                .nsh-ux-close {
                    width:42px;
                    padding:0;
                    font-size:22px;
                    flex:0 0 auto;
                }

                .nsh-ux-back:hover,
                .nsh-ux-filter:hover,
                .nsh-ux-action:hover {
                    border-color:#6366f1;
                }

                .nsh-ux-weak-body {
                    padding:24px;
                }

                .nsh-ux-weak-summary {
                    display:grid;
                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(180px,1fr)
                        );
                    gap:12px;
                    margin-bottom:20px;
                }

                .nsh-ux-summary-card {
                    padding:17px;
                    border:1px solid #e5e7eb;
                    border-radius:16px;
                    background:#f8fafc;
                }

                .nsh-ux-summary-card strong {
                    display:block;
                    margin-bottom:4px;
                    font-size:26px;
                }

                .nsh-ux-summary-card span {
                    color:#667085;
                    font-size:11px;
                    font-weight:900;
                }

                .nsh-ux-filter-row {
                    display:flex;
                    flex-wrap:wrap;
                    gap:8px;
                    margin-bottom:20px;
                }

                .nsh-ux-filter.active {
                    background:#4f46e5;
                    border-color:#4f46e5;
                    color:#fff;
                }

                .nsh-ux-weak-list {
                    display:flex;
                    flex-direction:column;
                    gap:14px;
                }

                .nsh-ux-weak-card {
                    padding:18px;
                    border:1px solid #e5e7eb;
                    border-radius:18px;
                    background:#fff;
                }

                .nsh-ux-weak-card-top {
                    display:flex;
                    align-items:flex-start;
                    justify-content:space-between;
                    gap:16px;
                }

                .nsh-ux-course-pill,
                .nsh-ux-count-pill {
                    display:inline-flex;
                    align-items:center;
                    gap:5px;
                    padding:5px 9px;
                    border-radius:999px;
                    font-size:10px;
                    font-weight:900;
                }

                .nsh-ux-course-pill {
                    background:#eef2ff;
                    color:#4338ca;
                }

                .nsh-ux-count-pill {
                    background:#fff1f2;
                    color:#be123c;
                    flex:0 0 auto;
                }

                .nsh-ux-weak-card h3 {
                    margin:8px 0 5px;
                }

                .nsh-ux-weak-card p {
                    margin:0;
                    color:#667085;
                    line-height:1.55;
                }

                .nsh-ux-weak-actions {
                    display:flex;
                    flex-wrap:wrap;
                    gap:9px;
                    margin-top:15px;
                }

                .nsh-ux-action.primary {
                    background:#4f46e5;
                    border-color:#4f46e5;
                    color:#fff;
                }

                .nsh-ux-action.focus {
                    background:#fff7ed;
                    border-color:#fdba74;
                    color:#9a3412;
                }

                .nsh-ux-empty {
                    padding:42px 20px;
                    text-align:center;
                    border:1px dashed #cbd5e1;
                    border-radius:18px;
                    color:#667085;
                }

                .nsh-ux-empty-icon {
                    margin-bottom:10px;
                    font-size:44px;
                }


                /* ============================================================
                   TOAST
                ============================================================ */

                #nsh-ux-toast-container {
                    position:fixed;
                    z-index:2147483600;
                    top:
                        calc(
                            var(
                                --nsh-header-height,
                                78px
                            ) +
                            14px
                        );
                    right:18px;
                    width:
                        min(
                            380px,
                            calc(
                                100vw -
                                36px
                            )
                        );
                    pointer-events:none;
                }

                .nsh-ux-toast {
                    margin-bottom:8px;
                    padding:13px 15px;
                    border-radius:13px;
                    background:#111827;
                    color:#fff;
                    box-shadow:
                        0 12px 35px
                        rgba(
                            0,
                            0,
                            0,
                            .22
                        );
                    font-size:12px;
                    line-height:1.5;
                    opacity:0;
                    transform:
                        translateY(
                            -8px
                        );
                    transition:
                        opacity .2s ease,
                        transform .2s ease;
                }

                .nsh-ux-toast.show {
                    opacity:1;
                    transform:
                        translateY(
                            0
                        );
                }


                /* ============================================================
                   DARK MODE
                ============================================================ */

                body.dark-mode
                .nsh-ux-weak-modal,

                body.dark-mode
                .nsh-ux-weak-card,

                body.dark-mode
                .nsh-ux-close,

                body.dark-mode
                .nsh-ux-back,

                body.dark-mode
                .nsh-ux-filter,

                body.dark-mode
                .nsh-ux-action,

                body.dark-mode
                .nsh-ux-modal-back {
                    background:#111827;
                    border-color:#334155;
                    color:#e2e8f0;
                }

                body.dark-mode
                .nsh-ux-weak-header {
                    background:
                        rgba(
                            17,
                            24,
                            39,
                            .97
                        );
                    border-color:#334155;
                }

                body.dark-mode
                .nsh-ux-weak-header p,

                body.dark-mode
                .nsh-ux-weak-card p {
                    color:#cbd5e1;
                }

                body.dark-mode
                .nsh-ux-summary-card {
                    background:#172033;
                    border-color:#334155;
                    color:#f8fafc;
                }

                body.dark-mode
                .nsh-ux-summary-card span {
                    color:#cbd5e1;
                }


                /* ============================================================
                   MOBILE
                ============================================================ */

                @media (max-width:700px) {

                    #nsh-ux-weak-overlay {
                        padding:0;
                        align-items:flex-end;
                    }

                    .nsh-ux-weak-modal {
                        width:100%;
                        max-height:94vh;
                        border-radius:
                            22px
                            22px
                            0
                            0;
                    }

                    .nsh-ux-weak-header,
                    .nsh-ux-weak-body {
                        padding:18px;
                    }

                    .nsh-ux-weak-header-main {
                        display:block;
                    }

                    .nsh-ux-back {
                        margin-bottom:10px;
                    }

                    .nsh-ux-weak-card-top {
                        display:block;
                    }

                    .nsh-ux-count-pill {
                        margin-top:10px;
                    }

                    .nsh-ux-weak-actions {
                        display:grid;
                        grid-template-columns:1fr;
                    }

                    .nsh-ux-weak-actions button {
                        width:100%;
                    }

                    .nsh-ux-modal-back {
                        padding:7px 9px;
                        font-size:12px;
                    }

                }

            `;


            document.head.appendChild(
                style
            );

        }


        // ====================================================================
        // VIEW HELPERS
        // ====================================================================

        function getVisibleCoursePage() {

            return (
                Array.from(
                    document.querySelectorAll(
                        ".course-page"
                    )
                )
                    .find(
                        isVisible
                    ) ||
                null
            );

        }


        function getVisibleLessonPage() {

            return (
                Array.from(
                    document.querySelectorAll(
                        ".lesson-page"
                    )
                )
                    .find(
                        isVisible
                    ) ||
                null
            );

        }


        function getVisibleStudyOverlay() {

            return (
                Array.from(
                    document.querySelectorAll(
                        ".study-overlay," +
                        ".study-tools-modal-overlay"
                    )
                )
                    .find(
                        isVisible
                    ) ||
                null
            );

        }


        function inferCourseIdFromElement(
            element
        ) {

            if (
                !element
            ) {

                return rememberedCourseId;

            }


            const id =
                String(
                    element.id ||
                    ""
                )
                    .toLowerCase();


            const classes =
                String(
                    element.className ||
                    ""
                )
                    .toLowerCase();


            const text =
                `${id} ${classes}`;


            if (
                text.includes(
                    "anatomy1"
                ) ||
                text.includes(
                    "ap1"
                ) ||
                id ===
                "intro-ap-page"
            ) {

                return "anatomy1";

            }


            if (
                text.includes(
                    "anatomy2"
                ) ||
                text.includes(
                    "ap2"
                )
            ) {

                return "anatomy2";

            }


            if (
                text.includes(
                    "chem"
                )
            ) {

                return "chemistry";

            }


            if (
                text.includes(
                    "micro"
                )
            ) {

                return "microbiology";

            }


            if (
                text.includes(
                    "stat"
                )
            ) {

                return "statistics";

            }


            if (
                text.includes(
                    "nut"
                )
            ) {

                return "nutrition";

            }


            if (
                text.includes(
                    "lab"
                )
            ) {

                return "labs";

            }


            if (
                text.includes(
                    "teas"
                )
            ) {

                return "teas";

            }


            return rememberedCourseId;

        }


        function findCoursePage(
            courseId
        ) {

            const config =
                COURSE_CONFIG[
                    courseId
                ];


            if (
                !config
            ) {

                return null;

            }


            const direct =
                document.getElementById(
                    config.pageId
                );


            if (
                direct
            ) {

                return direct;

            }


            return (
                Array.from(
                    document.querySelectorAll(
                        ".course-page"
                    )
                )
                    .find(
                        function (
                            page
                        ) {

                            return (
                                inferCourseIdFromElement(
                                    page
                                ) ===
                                courseId
                            );

                        }
                    ) ||
                null
            );

        }


        function hideDashboardSections() {

            [

                ".dashboard-intro",

                ".progress-overview",

                "#study-command-center",

                ".courses-section",

                ".weak-areas-section",

                "footer"

            ].forEach(
                function (
                    selector
                ) {

                    const element =
                        document.querySelector(
                            selector
                        );


                    if (
                        element
                    ) {

                        element.classList.add(
                            "hidden"
                        );

                    }

                }
            );

        }


        function showDashboardDirect() {

            closeWeakOverlayDirect();

            closeVisibleStudyOverlayDirect();


            document
                .querySelectorAll(
                    ".course-page," +
                    ".lesson-page"
                )
                .forEach(
                    function (
                        page
                    ) {

                        page.classList.add(
                            "hidden"
                        );

                    }
                );


            [

                ".dashboard-intro",

                ".progress-overview",

                "#study-command-center",

                ".courses-section",

                ".weak-areas-section",

                "footer"

            ].forEach(
                function (
                    selector
                ) {

                    const element =
                        document.querySelector(
                            selector
                        );


                    if (
                        element
                    ) {

                        element.classList.remove(
                            "hidden"
                        );

                    }

                }
            );


            rememberedCourseId =
                null;


            syncCommandCenterVisibility();

            scrollToTop();

        }


        function showCourseDirect(
            courseId
        ) {

            const page =
                findCoursePage(
                    courseId
                );


            if (
                !page
            ) {

                showToast(
                    "That course page could not be opened."
                );

                return false;

            }


            closeWeakOverlayDirect();

            closeVisibleStudyOverlayDirect();

            hideDashboardSections();


            document
                .querySelectorAll(
                    ".course-page," +
                    ".lesson-page"
                )
                .forEach(
                    function (
                        item
                    ) {

                        item.classList.add(
                            "hidden"
                        );

                    }
                );


            page.classList.remove(
                "hidden"
            );


            rememberedCourseId =
                courseId;


            syncCommandCenterVisibility();

            scrollToTop();


            return true;

        }


        // ====================================================================
        // FIX 1
        // STUDY COMMAND CENTER ONLY ON DASHBOARD
        // ====================================================================

        function syncCommandCenterVisibility() {

            const commandCenter =
                document.getElementById(
                    "study-command-center"
                );


            if (
                !commandCenter
            ) {

                return;

            }


            const insideCourse =
                Boolean(
                    getVisibleCoursePage() ||
                    getVisibleLessonPage()
                );


            commandCenter
                .classList
                .toggle(
                    "nsh-ux-dashboard-hidden",
                    insideCourse
                );


            if (
                insideCourse
            ) {

                commandCenter.classList.add(
                    "hidden"
                );

            } else {

                commandCenter.classList.remove(
                    "hidden"
                );

            }

        }


        function scheduleViewSync() {

            setTimeout(
                function () {

                    const course =
                        getVisibleCoursePage();


                    const lesson =
                        getVisibleLessonPage();


                    if (
                        course
                    ) {

                        rememberedCourseId =
                            inferCourseIdFromElement(
                                course
                            ) ||
                            rememberedCourseId;

                    }


                    if (
                        lesson &&
                        !rememberedCourseId
                    ) {

                        rememberedCourseId =
                            inferCourseIdFromElement(
                                lesson
                            );

                    }


                    syncCommandCenterVisibility();

                    ensureModalBackButtons();

                    restorePlannerChoice();

                },
                0
            );


            setTimeout(
                function () {

                    syncCommandCenterVisibility();

                    ensureModalBackButtons();

                    restorePlannerChoice();

                },
                90
            );

        }


        // ====================================================================
        // FIX 4
        // DAILY STUDY PLAN REMEMBERS SELECTED TIME
        // ====================================================================

        function validPlannerMinutes(
            value
        ) {

            return [

                30,
                45,
                60,
                90,
                120,
                180

            ].includes(
                Number(
                    value
                )
            );

        }


        function getSavedPlannerChoice() {

            const saved =
                Number(
                    localStorage.getItem(
                        PLAN_CHOICE_KEY
                    )
                );


            if (
                validPlannerMinutes(
                    saved
                )
            ) {

                return saved;

            }


            const plan =
                getJSON(
                    PLAN_KEY,
                    null
                );


            if (
                plan &&
                plan.date ===
                todayString() &&
                validPlannerMinutes(
                    plan.totalMinutes
                )
            ) {

                return Number(
                    plan.totalMinutes
                );

            }


            return 60;

        }


        function savePlannerChoice(
            value
        ) {

            if (
                !validPlannerMinutes(
                    value
                )
            ) {

                return;

            }


            localStorage.setItem(

                PLAN_CHOICE_KEY,

                String(
                    Number(
                        value
                    )
                )

            );

        }


        function restorePlannerChoice() {

            const select =
                document.getElementById(
                    "planner-minutes"
                );


            if (
                !select
            ) {

                return;

            }


            const desired =
                String(
                    getSavedPlannerChoice()
                );


            const exists =
                Array.from(
                    select.options
                )
                    .some(
                        function (
                            option
                        ) {

                            return (
                                option.value ===
                                desired
                            );

                        }
                    );


            if (
                exists
            ) {

                select.value =
                    desired;

            }

        }


        // ====================================================================
        // WEAK AREA HELPERS
        // ====================================================================

        function getTopicCard(
            courseId,
            topicId
        ) {

            if (
                !topicId
            ) {

                return null;

            }


            const coursePage =
                findCoursePage(
                    courseId
                );


            const scope =
                coursePage ||
                document;


            return (
                Array.from(
                    scope.querySelectorAll(
                        ".topic-card"
                    )
                )
                    .find(
                        function (
                            card
                        ) {

                            return (
                                Object.values(
                                    card.dataset ||
                                    {}
                                )
                                    .includes(
                                        topicId
                                    )
                            );

                        }
                    ) ||
                null
            );

        }


        function getTopicTitle(
            courseId,
            topicId
        ) {

            const card =
                getTopicCard(
                    courseId,
                    topicId
                );


            const heading =
                card?.querySelector(
                    "h3"
                );


            if (
                heading
                    ?.textContent
                    .trim()
            ) {

                return heading
                    .textContent
                    .trim();

            }


            if (
                !topicId
            ) {

                return (
                    COURSE_CONFIG[
                        courseId
                    ]?.name ||
                    "Weak Questions"
                );

            }


            return topicId
                .replaceAll(
                    "_",
                    "-"
                )
                .replaceAll(
                    "-",
                    " "
                )
                .replace(
                    /\b\w/g,
                    function (
                        letter
                    ) {

                        return letter
                            .toUpperCase();

                    }
                );

        }


        function parseArray(
            value
        ) {

            try {

                const parsed =
                    JSON.parse(
                        value ||
                        "[]"
                    );


                return Array.isArray(
                    parsed
                )
                    ? parsed
                    : [];

            } catch {

                return [];

            }

        }


        function collectWeakGroups() {

            const groups =
                [];


            for (
                let i = 0;
                i < localStorage.length;
                i++
            ) {

                const key =
                    localStorage.key(
                        i
                    );


                if (
                    !key
                ) {

                    continue;

                }


                for (
                    const pattern
                    of
                    WEAK_KEY_PATTERNS
                ) {

                    const match =
                        key.match(
                            pattern.regex
                        );


                    if (
                        !match
                    ) {

                        continue;

                    }


                    const items =
                        parseArray(
                            localStorage.getItem(
                                key
                            )
                        );


                    if (
                        !items.length
                    ) {

                        break;

                    }


                    const topicId =
                        match[1];


                    groups.push({

                        courseId:
                            pattern.courseId,

                        topicId,

                        title:
                            getTopicTitle(
                                pattern.courseId,
                                topicId
                            ),

                        count:
                            items.length,

                        ids:
                            items,

                        storageKey:
                            key

                    });


                    break;

                }

            }


            const teasStats =
                getJSON(
                    "nshTEAS_FINAL_STATS",
                    null
                );


            if (
                teasStats &&
                Array.isArray(
                    teasStats.weak
                ) &&
                teasStats.weak.length
            ) {

                groups.push({

                    courseId:
                        "teas",

                    topicId:
                        "",

                    title:
                        "Saved TEAS Weak Questions",

                    count:
                        teasStats.weak.length,

                    ids:
                        teasStats.weak,

                    storageKey:
                        "nshTEAS_FINAL_STATS"

                });

            }


            return groups
                .sort(
                    function (
                        a,
                        b
                    ) {

                        const courseCompare =
                            COURSE_CONFIG[
                                a.courseId
                            ]
                                .name
                                .localeCompare(
                                    COURSE_CONFIG[
                                        b.courseId
                                    ].name
                                );


                        if (
                            courseCompare !==
                            0
                        ) {

                            return courseCompare;

                        }


                        return a
                            .title
                            .localeCompare(
                                b.title
                            );

                    }
                );

        }


        // ====================================================================
        // FIX 2
        // FOCUSED WEAK AREA CENTER
        // ====================================================================

        function ensureWeakOverlay() {

            let overlay =
                document.getElementById(
                    "nsh-ux-weak-overlay"
                );


            if (
                overlay
            ) {

                return overlay;

            }


            overlay =
                document.createElement(
                    "div"
                );


            overlay.id =
                "nsh-ux-weak-overlay";


            overlay.className =
                "hidden";


            overlay.setAttribute(
                "role",
                "dialog"
            );


            overlay.setAttribute(
                "aria-modal",
                "true"
            );


            overlay.setAttribute(
                "aria-label",
                "Focused weak area review"
            );


            overlay.innerHTML = `

                <div class="nsh-ux-weak-modal">

                    <div class="nsh-ux-weak-header">

                        <div class="nsh-ux-weak-header-main">

                            <button
                                type="button"
                                class="nsh-ux-back"
                                id="nsh-ux-weak-back"
                            >
                                ← Back
                            </button>

                            <div>

                                <div class="section-label">
                                    FOCUSED REVIEW
                                </div>

                                <h2>
                                    Your Weak Areas
                                </h2>

                                <p>
                                    Only the topics and questions
                                    you missed are shown here.
                                </p>

                            </div>

                        </div>


                        <button
                            type="button"
                            class="nsh-ux-close"
                            id="nsh-ux-weak-close"
                            aria-label="Close"
                        >
                            ×
                        </button>

                    </div>


                    <div
                        class="nsh-ux-weak-body"
                        id="nsh-ux-weak-body"
                    >
                    </div>

                </div>

            `;


            document.body.appendChild(
                overlay
            );


            document
                .getElementById(
                    "nsh-ux-weak-back"
                )
                .addEventListener(
                    "click",
                    closeWeakOverlayDirect
                );


            document
                .getElementById(
                    "nsh-ux-weak-close"
                )
                .addEventListener(
                    "click",
                    closeWeakOverlayDirect
                );


            overlay.addEventListener(
                "click",
                function (
                    event
                ) {

                    if (
                        event.target ===
                        overlay
                    ) {

                        closeWeakOverlayDirect();

                    }

                }
            );


            return overlay;

        }


        function openWeakOverlay() {

            const overlay =
                ensureWeakOverlay();


            activeWeakFilter =
                "all";


            renderWeakOverlay();


            overlay.classList.remove(
                "hidden"
            );


            document.body.style.overflow =
                "hidden";


            ensureModalBackButtons();

        }


        function closeWeakOverlayDirect() {

            const overlay =
                document.getElementById(
                    "nsh-ux-weak-overlay"
                );


            if (
                !overlay
            ) {

                return;

            }


            overlay.classList.add(
                "hidden"
            );


            document.body.style.overflow =
                "";

        }


        function renderWeakOverlay() {

            const body =
                document.getElementById(
                    "nsh-ux-weak-body"
                );


            if (
                !body
            ) {

                return;

            }


            const groups =
                collectWeakGroups();


            const visibleGroups =
                activeWeakFilter ===
                "all"
                    ? groups
                    : groups.filter(
                        function (
                            group
                        ) {

                            return (
                                group.courseId ===
                                activeWeakFilter
                            );

                        }
                    );


            const total =
                groups.reduce(
                    function (
                        sum,
                        group
                    ) {

                        return (
                            sum +
                            group.count
                        );

                    },
                    0
                );


            const coursesWithWeak =
                new Set(
                    groups.map(
                        function (
                            group
                        ) {

                            return group.courseId;

                        }
                    )
                )
                    .size;


            const filterButtons = [

                `

                    <button
                        type="button"
                        class="nsh-ux-filter ${
                            activeWeakFilter ===
                            "all"
                                ? "active"
                                : ""
                        }"
                        data-ux-filter="all"
                    >
                        All (${total})
                    </button>

                `,


                ...Object
                    .keys(
                        COURSE_CONFIG
                    )
                    .map(
                        function (
                            courseId
                        ) {

                            const count =
                                groups
                                    .filter(
                                        function (
                                            group
                                        ) {

                                            return (
                                                group.courseId ===
                                                courseId
                                            );

                                        }
                                    )
                                    .reduce(
                                        function (
                                            sum,
                                            group
                                        ) {

                                            return (
                                                sum +
                                                group.count
                                            );

                                        },
                                        0
                                    );


                            if (
                                !count
                            ) {

                                return "";

                            }


                            const course =
                                COURSE_CONFIG[
                                    courseId
                                ];


                            return `

                                <button
                                    type="button"
                                    class="nsh-ux-filter ${
                                        activeWeakFilter ===
                                        courseId
                                            ? "active"
                                            : ""
                                    }"
                                    data-ux-filter="${courseId}"
                                >

                                    ${course.icon}

                                    ${escapeHTML(
                                        course.name
                                    )}

                                    (${count})

                                </button>

                            `;

                        }
                    )

            ].join("");


            body.innerHTML = `

                <div class="nsh-ux-weak-summary">

                    <div class="nsh-ux-summary-card">

                        <strong>
                            ${total}
                        </strong>

                        <span>
                            SAVED WEAK QUESTIONS
                        </span>

                    </div>


                    <div class="nsh-ux-summary-card">

                        <strong>
                            ${coursesWithWeak}
                        </strong>

                        <span>
                            COURSES TO REVIEW
                        </span>

                    </div>


                    <div class="nsh-ux-summary-card">

                        <strong>
                            ${groups.length}
                        </strong>

                        <span>
                            WEAK TOPICS / GROUPS
                        </span>

                    </div>

                </div>


                ${
                    groups.length
                        ? `

                            <div class="nsh-ux-filter-row">

                                ${filterButtons}

                            </div>


                            <div class="nsh-ux-weak-list">

                                ${
                                    visibleGroups
                                        .map(
                                            renderWeakCard
                                        )
                                        .join("")
                                }

                            </div>

                        `
                        : `

                            <div class="nsh-ux-empty">

                                <div class="nsh-ux-empty-icon">
                                    🎯
                                </div>

                                <h3>
                                    No weak areas saved right now.
                                </h3>

                                <p>
                                    Questions you miss during quizzes,
                                    practice and exams will appear here.
                                </p>

                            </div>

                        `
                }

            `;


            body
                .querySelectorAll(
                    "[data-ux-filter]"
                )
                .forEach(
                    function (
                        button
                    ) {

                        button.addEventListener(
                            "click",
                            function () {

                                activeWeakFilter =
                                    button.dataset
                                        .uxFilter;


                                renderWeakOverlay();

                            }
                        );

                    }
                );


            body
                .querySelectorAll(
                    "[data-ux-open-topic]"
                )
                .forEach(
                    function (
                        button
                    ) {

                        button.addEventListener(
                            "click",
                            function () {

                                openExactWeakTopic(

                                    button.dataset
                                        .uxCourse,

                                    button.dataset
                                        .uxOpenTopic

                                );

                            }
                        );

                    }
                );


            body
                .querySelectorAll(
                    "[data-ux-practice-course]"
                )
                .forEach(
                    function (
                        button
                    ) {

                        button.addEventListener(
                            "click",
                            function () {

                                openNativeWeakPractice(

                                    button.dataset
                                        .uxPracticeCourse

                                );

                            }
                        );

                    }
                );

        }


        function renderWeakCard(
            group
        ) {

            const course =
                COURSE_CONFIG[
                    group.courseId
                ];


            const canPractice =
                Boolean(
                    course.weakSelector
                );


            const hasExactTopic =
                Boolean(
                    group.topicId
                );


            return `

                <article class="nsh-ux-weak-card">

                    <div class="nsh-ux-weak-card-top">

                        <div>

                            <span class="nsh-ux-course-pill">

                                ${course.icon}

                                ${escapeHTML(
                                    course.name
                                )}

                            </span>


                            <h3>

                                ${escapeHTML(
                                    group.title
                                )}

                            </h3>


                            <p>

                                ${group.count}

                                ${
                                    group.count ===
                                    1
                                        ? "missed question"
                                        : "missed questions"
                                }

                                saved from

                                ${
                                    hasExactTopic
                                        ? "this exact topic."
                                        : "this course."
                                }

                            </p>

                        </div>


                        <span class="nsh-ux-count-pill">

                            ${group.count}

                            to review

                        </span>

                    </div>


                    <div class="nsh-ux-weak-actions">

                        ${
                            hasExactTopic
                                ? `

                                    <button
                                        type="button"
                                        class="nsh-ux-action primary"
                                        data-ux-course="${group.courseId}"
                                        data-ux-open-topic="${escapeHTML(
                                            group.topicId
                                        )}"
                                    >
                                        Open Exact Topic →
                                    </button>

                                `
                                : ""
                        }


                        ${
                            canPractice
                                ? `

                                    <button
                                        type="button"
                                        class="nsh-ux-action focus"
                                        data-ux-practice-course="${group.courseId}"
                                    >
                                        🎯 Practice Only Weak Questions
                                    </button>

                                `
                                : ""
                        }

                    </div>

                </article>

            `;

        }


        function openCourseViaCard(
            courseId
        ) {

            const config =
                COURSE_CONFIG[
                    courseId
                ];


            if (
                !config
            ) {

                return false;

            }


            const card =
                document.querySelector(
                    `.course-card[data-course="${config.card}"]`
                );


            if (
                !card
            ) {

                return showCourseDirect(
                    courseId
                );

            }


            rememberedCourseId =
                courseId;


            card.click();


            scheduleViewSync();


            return true;

        }


        function openExactWeakTopic(
            courseId,
            topicId
        ) {

            closeWeakOverlayDirect();


            if (
                !openCourseViaCard(
                    courseId
                )
            ) {

                return;

            }


            setTimeout(
                function () {

                    const card =
                        getTopicCard(
                            courseId,
                            topicId
                        );


                    if (
                        !card
                    ) {

                        showToast(
                            "The course opened, but that exact topic could not be matched automatically."
                        );

                        return;

                    }


                    rememberedCourseId =
                        courseId;


                    card.click();


                    scheduleViewSync();

                },
                120
            );

        }


        function openNativeWeakPractice(
            courseId
        ) {

            const config =
                COURSE_CONFIG[
                    courseId
                ];


            if (
                !config ||
                !config.weakSelector
            ) {

                showToast(
                    "Use Open Exact Topic for this course's saved weakness."
                );

                return;

            }


            closeWeakOverlayDirect();


            if (
                !openCourseViaCard(
                    courseId
                )
            ) {

                return;

            }


            setTimeout(
                function () {

                    const button =
                        document.querySelector(
                            config.weakSelector
                        );


                    if (
                        !button
                    ) {

                        showToast(
                            "The weak-question practice button could not be found."
                        );

                        return;

                    }


                    button.click();


                    scheduleViewSync();

                },
                140
            );

        }


        // ====================================================================
        // FIX 3
        // STEP-BY-STEP BACK NAVIGATION
        // ====================================================================

        function closeVisibleStudyOverlayDirect() {

            const overlay =
                getVisibleStudyOverlay();


            if (
                !overlay
            ) {

                return false;

            }


            const nativeClose =

                overlay.querySelector(
                    ".study-modal-close"
                ) ||

                overlay.querySelector(
                    ".study-tools-close"
                ) ||

                overlay.querySelector(
                    "#tools-modal-close"
                ) ||

                overlay.querySelector(
                    '[id$="modal-close"]'
                );


            if (
                nativeClose
            ) {

                nativeClose.click();

            } else {

                overlay.classList.add(
                    "hidden"
                );


                document.body.style.overflow =
                    "";

            }


            return true;

        }


        function goBackOneStep() {

            const weakOverlay =
                document.getElementById(
                    "nsh-ux-weak-overlay"
                );


            if (
                weakOverlay &&
                isVisible(
                    weakOverlay
                )
            ) {

                closeWeakOverlayDirect();

                return;

            }


            if (
                closeVisibleStudyOverlayDirect()
            ) {

                scheduleViewSync();

                return;

            }


            const lesson =
                getVisibleLessonPage();


            if (
                lesson
            ) {

                const courseId =

                    rememberedCourseId ||

                    inferCourseIdFromElement(
                        lesson
                    );


                if (
                    courseId &&
                    showCourseDirect(
                        courseId
                    )
                ) {

                    return;

                }


                showDashboardDirect();

                return;

            }


            const course =
                getVisibleCoursePage();


            if (
                course
            ) {

                showDashboardDirect();

            }

        }


        function ensureModalBackButtons() {

            document
                .querySelectorAll(
                    ".study-modal-header," +
                    ".study-tools-modal-header"
                )
                .forEach(
                    function (
                        header
                    ) {

                        if (
                            header.querySelector(
                                ".nsh-ux-modal-back"
                            )
                        ) {

                            return;

                        }


                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "nsh-ux-modal-back";


                        button.textContent =
                            "← Back";


                        button.setAttribute(
                            "aria-label",
                            "Go back one step"
                        );


                        button.addEventListener(
                            "click",
                            function (
                                event
                            ) {

                                event.preventDefault();

                                event.stopPropagation();

                                goBackOneStep();

                            }
                        );


                        const first =
                            header.firstElementChild;


                        if (
                            first
                        ) {

                            if (
                                !first.classList.contains(
                                    "nsh-ux-modal-header-left"
                                )
                            ) {

                                const wrapper =
                                    document.createElement(
                                        "div"
                                    );


                                wrapper.className =
                                    "nsh-ux-modal-header-left";


                                header.insertBefore(
                                    wrapper,
                                    first
                                );


                                wrapper.appendChild(
                                    button
                                );


                                wrapper.appendChild(
                                    first
                                );

                            }

                        } else {

                            header.prepend(
                                button
                            );

                        }


                        header.classList.add(
                            "nsh-ux-header-with-back"
                        );

                    }
                );

        }


        // ====================================================================
        // GLOBAL EVENT HANDLING
        // ====================================================================

        document.addEventListener(

            "change",

            function (
                event
            ) {

                if (
                    event.target?.id ===
                    "planner-minutes"
                ) {

                    savePlannerChoice(
                        event.target.value
                    );

                }

            },

            true

        );


        document.addEventListener(

            "click",

            function (
                event
            ) {

                const target =
                    event.target;


                if (
                    !(
                        target instanceof
                        Element
                    )
                ) {

                    return;

                }


                // ============================================================
                // SAVE PLANNER SELECTION BEFORE STUDYTOOLS RERENDERS
                // ============================================================

                const generatePlan =
                    target.closest(
                        "#generate-plan"
                    );


                if (
                    generatePlan
                ) {

                    const select =
                        document.getElementById(
                            "planner-minutes"
                        );


                    if (
                        select
                    ) {

                        savePlannerChoice(
                            select.value
                        );

                    }

                }


                // ============================================================
                // INTERCEPT OLD WEAK AREA CENTER
                // ============================================================

                const dashboardWeak =
                    target.closest(
                        "#weak-area-button"
                    );


                const toolWeak =
                    target.closest(
                        '[data-study-tool="weak"]'
                    );


                if (
                    dashboardWeak ||
                    toolWeak
                ) {

                    event.preventDefault();

                    event.stopPropagation();

                    event.stopImmediatePropagation();


                    openWeakOverlay();


                    return;

                }


                // ============================================================
                // PAGE BACK BUTTONS
                // ALWAYS GO BACK EXACTLY ONE LEVEL
                // ============================================================

                const backButton =
                    target.closest(
                        ".back-button"
                    );


                if (
                    backButton
                ) {

                    const ownerLesson =
                        backButton.closest(
                            ".lesson-page"
                        );


                    const ownerCourse =
                        backButton.closest(
                            ".course-page"
                        );


                    if (
                        ownerLesson ||
                        ownerCourse
                    ) {

                        event.preventDefault();

                        event.stopPropagation();

                        event.stopImmediatePropagation();


                        goBackOneStep();


                        return;

                    }

                }


                // ============================================================
                // REMEMBER COURSE BEFORE OPENING A TOPIC
                // ============================================================

                const visibleCourse =
                    getVisibleCoursePage();


                if (
                    visibleCourse &&
                    (
                        target.closest(
                            ".topic-card"
                        ) ||
                        target.closest(
                            ".topic-button"
                        )
                    )
                ) {

                    rememberedCourseId =

                        inferCourseIdFromElement(
                            visibleCourse
                        ) ||

                        rememberedCourseId;

                }


                const courseCard =
                    target.closest(
                        ".course-card[data-course]"
                    );


                if (
                    courseCard
                ) {

                    rememberedCourseId =
                        courseCard.dataset
                            .course ||
                        null;

                }


                scheduleViewSync();

            },

            true

        );


        document.addEventListener(
            "keydown",
            function (
                event
            ) {

                if (
                    event.key !==
                    "Escape"
                ) {

                    return;

                }


                const weakOverlay =
                    document.getElementById(
                        "nsh-ux-weak-overlay"
                    );


                if (
                    weakOverlay &&
                    isVisible(
                        weakOverlay
                    )
                ) {

                    event.preventDefault();

                    closeWeakOverlayDirect();

                }

            }
        );


        window.addEventListener(
            "pageshow",
            function () {

                scheduleViewSync();

            }
        );


        // ====================================================================
        // INITIALIZE
        // ====================================================================

        injectStyles();

        ensureWeakOverlay();

        ensureModalBackButtons();

        restorePlannerChoice();

        syncCommandCenterVisibility();


        setTimeout(
            function () {

                ensureModalBackButtons();

                restorePlannerChoice();

                syncCommandCenterVisibility();

            },
            250
        );


        console.log(
            "✅ Nursing Prep Lab UX fixes loaded: dashboard tools, weak review, back navigation and planner memory."
        );

    });

})();