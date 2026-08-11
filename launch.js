// ============================================================================
// NURSING STUDY HUB
// FINAL LAUNCH & POLISH SYSTEM
// FIXED HEADER • HOME NAVIGATION • RESPONSIVE QA • ACCESSIBILITY • DIAGNOSTICS
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================================
    // CONFIGURATION
    // ========================================================================

    const APP_NAME = "Nursing Study Hub";

    const EXPECTED_SCRIPTS = [
        "script.js",
        "ap2.js",
        "chemistry.js",
        "microbiology.js",
        "statistics.js",
        "nutrition.js",
        "labs.js",
        "teas.js",
        "studytools.js",
        "launch.js"
    ];

    const EXPECTED_COURSES = [
        "anatomy1",
        "anatomy2",
        "chemistry",
        "microbiology",
        "statistics",
        "nutrition",
        "labs",
        "teas"
    ];

    const SHARED_QUESTION_KEY = "nursingStudyHubQuestionsAnswered";

    let launchErrorCount = 0;
    let progressTimer = null;
    let headerResizeObserver = null;


    // ========================================================================
    // HELPERS
    // ========================================================================

    function clamp(number, minimum, maximum) {
        return Math.min(
            maximum,
            Math.max(
                minimum,
                number
            )
        );
    }


    function debounce(callback, delay = 150) {

        let timer = null;

        return function (...args) {

            clearTimeout(timer);

            timer = setTimeout(
                function () {
                    callback(...args);
                },
                delay
            );
        };
    }


    function isVisible(element) {

        if (!element) {
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
            style.display !== "none" &&
            style.visibility !== "hidden"
        );
    }


    // ========================================================================
    // FAVICON FALLBACK
    // ========================================================================

    function ensureFavicon() {

        if (
            document.querySelector(
                'link[rel~="icon"]'
            )
        ) {
            return;
        }

        const svg = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
            >
                <rect
                    width="100"
                    height="100"
                    rx="22"
                    fill="#4f46e5"
                />
                <text
                    x="50"
                    y="68"
                    text-anchor="middle"
                    font-size="62"
                >
                    🩺
                </text>
            </svg>
        `;

        const link =
            document.createElement(
                "link"
            );

        link.rel = "icon";
        link.type = "image/svg+xml";

        link.href =
            "data:image/svg+xml;charset=utf-8," +
            encodeURIComponent(svg);

        document.head.appendChild(
            link
        );
    }


    ensureFavicon();


    // ========================================================================
    // META TAGS
    // ========================================================================

    function ensureMetaTags() {

        if (
            !document.querySelector(
                'meta[name="theme-color"]'
            )
        ) {

            const theme =
                document.createElement(
                    "meta"
                );

            theme.name =
                "theme-color";

            theme.content =
                "#4f46e5";

            document.head.appendChild(
                theme
            );
        }


        if (
            !document.querySelector(
                'meta[name="color-scheme"]'
            )
        ) {

            const colorScheme =
                document.createElement(
                    "meta"
                );

            colorScheme.name =
                "color-scheme";

            colorScheme.content =
                "light dark";

            document.head.appendChild(
                colorScheme
            );
        }


        if (
            !document.querySelector(
                'meta[name="apple-mobile-web-app-capable"]'
            )
        ) {

            const apple =
                document.createElement(
                    "meta"
                );

            apple.name =
                "apple-mobile-web-app-capable";

            apple.content =
                "yes";

            document.head.appendChild(
                apple
            );
        }
    }


    ensureMetaTags();


    // ========================================================================
    // FINAL STYLES
    // ========================================================================

    function injectLaunchStyles() {

        if (
            document.getElementById(
                "nsh-launch-styles"
            )
        ) {
            return;
        }

        const style =
            document.createElement(
                "style"
            );

        style.id =
            "nsh-launch-styles";

        style.textContent = `

            :root {
                --nsh-safe-top:
                    env(
                        safe-area-inset-top,
                        0px
                    );

                --nsh-safe-right:
                    env(
                        safe-area-inset-right,
                        0px
                    );

                --nsh-safe-bottom:
                    env(
                        safe-area-inset-bottom,
                        0px
                    );

                --nsh-safe-left:
                    env(
                        safe-area-inset-left,
                        0px
                    );

                --nsh-mobile-vh:
                    1vh;

                --nsh-header-height:
                    78px;
            }


            html {
                scroll-behavior:
                    smooth;

                -webkit-text-size-adjust:
                    100%;

                text-size-adjust:
                    100%;

                scroll-padding-top:
                    calc(
                        var(
                            --nsh-header-height
                        ) +
                        18px
                    );
            }


            html,
            body {
                max-width:
                    100%;

                overflow-x:
                    hidden;
            }


            body {
                -webkit-tap-highlight-color:
                    rgba(
                        79,
                        70,
                        229,
                        .12
                    );

                overscroll-behavior-y:
                    auto;
            }


            *,
            *::before,
            *::after {
                box-sizing:
                    border-box;
            }


            img,
            svg,
            video,
            canvas,
            iframe {
                max-width:
                    100%;
            }


            button,
            input,
            select,
            textarea {
                font:
                    inherit;
            }


            button {
                touch-action:
                    manipulation;
            }


            button:not(:disabled) {
                cursor:
                    pointer;
            }


            button:disabled {
                cursor:
                    not-allowed;

                opacity:
                    .56;
            }


            button:focus-visible,
            a:focus-visible,
            input:focus-visible,
            textarea:focus-visible,
            select:focus-visible,
            [tabindex]:focus-visible {
                outline:
                    3px solid
                    rgba(
                        79,
                        70,
                        229,
                        .38
                    );

                outline-offset:
                    3px;
            }


            /* ================================================================
               TRUE FIXED HEADER
            ================================================================ */

            .top-header {
                position:
                    fixed !important;

                top:
                    0 !important;

                left:
                    0 !important;

                right:
                    0 !important;

                z-index:
                    10000 !important;

                width:
                    100% !important;

                max-width:
                    none !important;

                margin:
                    0 !important;

                background:
                    rgba(
                        15,
                        23,
                        42,
                        .97
                    ) !important;

                border-bottom:
                    1px solid
                    rgba(
                        148,
                        163,
                        184,
                        .18
                    );

                box-shadow:
                    0 6px 24px
                    rgba(
                        15,
                        23,
                        42,
                        .12
                    );

                backdrop-filter:
                    blur(
                        18px
                    );

                -webkit-backdrop-filter:
                    blur(
                        18px
                    );
            }


            body:not(.dark-mode)
            .top-header {
                background:
                    rgba(
                        255,
                        255,
                        255,
                        .97
                    ) !important;
            }


            #nsh-header-spacer {
                display:
                    block;

                width:
                    100%;

                height:
                    var(
                        --nsh-header-height
                    );

                min-height:
                    var(
                        --nsh-header-height
                    );

                flex:
                    0 0
                    var(
                        --nsh-header-height
                    );

                pointer-events:
                    none;
            }


            .brand,
            .user-area {
                min-width:
                    0;
            }


            .brand {
                cursor:
                    pointer;

                user-select:
                    none;

                border-radius:
                    12px;

                transition:
                    opacity .18s ease,
                    transform .18s ease;
            }


            .brand:hover {
                opacity:
                    .88;
            }


            .brand:active {
                transform:
                    scale(
                        .985
                    );
            }


            .brand strong,
            .brand span {
                overflow-wrap:
                    anywhere;
            }


            #theme-button {
                min-width:
                    44px;

                min-height:
                    44px;

                display:
                    inline-flex;

                align-items:
                    center;

                justify-content:
                    center;
            }


            .dashboard-intro h1,
            .course-page-title h1,
            .lesson-hero h1 {
                font-size:
                    clamp(
                        28px,
                        4vw,
                        48px
                    );

                line-height:
                    1.12;
            }


            .progress-overview,
            .course-grid,
            .study-command-grid {
                align-items:
                    stretch;
            }


            .progress-card,
            .course-card,
            .course-content,
            .topic-card,
            .topic-information,
            .module-heading,
            .module-heading > div,
            .final-practice-card,
            .course-page,
            .lesson-page,
            .course-page-header,
            .course-page-title,
            .lesson-layout,
            .lesson-content,
            .lesson-section-content,
            .quiz-card,
            .study-tool-card,
            .study-plan-session {
                min-width:
                    0;
            }


            .course-card,
            .study-tool-card {
                height:
                    100%;
            }


            .course-content h3,
            .topic-information h3,
            .teas-passage,
            .quiz-option {
                overflow-wrap:
                    anywhere;
            }


            .course-button,
            .topic-button,
            .back-button,
            .study-button,
            .tools-button,
            .primary-lesson-button,
            .secondary-lesson-button {
                min-height:
                    44px;
            }


            .lesson-navigation {
                scrollbar-width:
                    thin;
            }


            .lesson-navigation::-webkit-scrollbar {
                height:
                    5px;
            }


            .lesson-navigation a {
                white-space:
                    nowrap;
            }


            .study-overlay,
            .study-tools-modal-overlay {
                padding-bottom:
                    max(
                        18px,
                        var(
                            --nsh-safe-bottom
                        )
                    );
            }


            .study-modal,
            .study-tools-modal {
                max-width:
                    calc(
                        100vw -
                        28px
                    );
            }


            .quiz-option {
                width:
                    100%;

                min-height:
                    48px;

                text-align:
                    left;
            }


            .study-actions,
            .study-actions-group {
                gap:
                    10px;
            }


            table {
                max-width:
                    100%;
            }


            .lesson-content table,
            .study-modal table,
            .study-tools-modal table {
                display:
                    block;

                width:
                    100%;

                overflow-x:
                    auto;

                -webkit-overflow-scrolling:
                    touch;
            }


            .teas-exam-nav {
                overflow-x:
                    auto;

                padding-bottom:
                    5px;

                -webkit-overflow-scrolling:
                    touch;
            }


            .teas-exam-nav button {
                flex:
                    0 0 auto;
            }


            .teas-exam-banner {
                position:
                    sticky;

                top:
                    0;

                z-index:
                    8;
            }


            /* ================================================================
               STARTUP LOADER
            ================================================================ */

            #nsh-launch-loader {
                position:
                    fixed;

                inset:
                    0;

                z-index:
                    2147483646;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                background:
                    rgba(
                        248,
                        250,
                        252,
                        .97
                    );

                opacity:
                    1;

                transition:
                    opacity .28s ease,
                    visibility .28s ease;
            }


            #nsh-launch-loader.nsh-loader-hide {
                opacity:
                    0;

                visibility:
                    hidden;

                pointer-events:
                    none;
            }


            .nsh-loader-inner {
                text-align:
                    center;

                padding:
                    25px;
            }


            .nsh-loader-icon {
                width:
                    64px;

                height:
                    64px;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                margin:
                    0 auto 12px;

                border-radius:
                    20px;

                background:
                    linear-gradient(
                        135deg,
                        #4f46e5,
                        #7c3aed
                    );

                font-size:
                    33px;

                box-shadow:
                    0 14px 35px
                    rgba(
                        79,
                        70,
                        229,
                        .22
                    );
            }


            .nsh-loader-title {
                font-weight:
                    900;

                color:
                    #172033;
            }


            .nsh-loader-subtitle {
                margin-top:
                    4px;

                color:
                    #667085;

                font-size:
                    12px;
            }


            .nsh-loader-dots {
                display:
                    flex;

                justify-content:
                    center;

                gap:
                    5px;

                margin-top:
                    12px;
            }


            .nsh-loader-dots span {
                width:
                    6px;

                height:
                    6px;

                border-radius:
                    50%;

                background:
                    #6366f1;

                animation:
                    nsh-loader-pulse
                    .9s ease-in-out
                    infinite alternate;
            }


            .nsh-loader-dots span:nth-child(2) {
                animation-delay:
                    .15s;
            }


            .nsh-loader-dots span:nth-child(3) {
                animation-delay:
                    .3s;
            }


            @keyframes nsh-loader-pulse {

                from {
                    opacity:
                        .3;

                    transform:
                        translateY(
                            2px
                        );
                }


                to {
                    opacity:
                        1;

                    transform:
                        translateY(
                            -2px
                        );
                }

            }


            /* ================================================================
               SCROLL TO TOP
            ================================================================ */

            #nsh-scroll-top {
                position:
                    fixed;

                right:
                    max(
                        18px,
                        var(
                            --nsh-safe-right
                        )
                    );

                bottom:
                    max(
                        18px,
                        var(
                            --nsh-safe-bottom
                        )
                    );

                width:
                    48px;

                height:
                    48px;

                z-index:
                    9000;

                border:
                    0;

                border-radius:
                    15px;

                background:
                    #4f46e5;

                color:
                    #fff;

                display:
                    flex;

                align-items:
                    center;

                justify-content:
                    center;

                font-size:
                    19px;

                box-shadow:
                    0 10px 30px
                    rgba(
                        79,
                        70,
                        229,
                        .3
                    );

                opacity:
                    0;

                transform:
                    translateY(
                        14px
                    );

                pointer-events:
                    none;

                transition:
                    opacity .2s ease,
                    transform .2s ease;
            }


            #nsh-scroll-top.visible {
                opacity:
                    1;

                transform:
                    translateY(
                        0
                    );

                pointer-events:
                    auto;
            }


            /* ================================================================
               TOASTS
            ================================================================ */

            #nsh-toast-container {
                position:
                    fixed;

                top:
                    calc(
                        var(
                            --nsh-header-height
                        ) +
                        14px
                    );

                right:
                    max(
                        18px,
                        var(
                            --nsh-safe-right
                        )
                    );

                z-index:
                    2147483645;

                width:
                    min(
                        380px,
                        calc(
                            100vw -
                            36px
                        )
                    );

                display:
                    flex;

                flex-direction:
                    column;

                gap:
                    8px;

                pointer-events:
                    none;
            }


            .nsh-toast {
                padding:
                    13px 15px;

                border-radius:
                    13px;

                background:
                    #111827;

                color:
                    #fff;

                box-shadow:
                    0 12px 35px
                    rgba(
                        0,
                        0,
                        0,
                        .22
                    );

                font-size:
                    12px;

                line-height:
                    1.55;

                opacity:
                    0;

                transform:
                    translateY(
                        -8px
                    );

                transition:
                    opacity .2s ease,
                    transform .2s ease;
            }


            .nsh-toast.show {
                opacity:
                    1;

                transform:
                    translateY(
                        0
                    );
            }


            .nsh-toast.success {
                background:
                    #067647;
            }


            .nsh-toast.warning {
                background:
                    #92400e;
            }


            .nsh-toast.error {
                background:
                    #b42318;
            }


            #nsh-system-banner {
                position:
                    fixed;

                left:
                    50%;

                transform:
                    translateX(
                        -50%
                    );

                bottom:
                    max(
                        18px,
                        var(
                            --nsh-safe-bottom
                        )
                    );

                z-index:
                    2147483644;

                width:
                    min(
                        700px,
                        calc(
                            100vw -
                            32px
                        )
                    );

                padding:
                    12px 16px;

                border-radius:
                    13px;

                background:
                    #fff7ed;

                border:
                    1px solid
                    #fed7aa;

                color:
                    #9a3412;

                box-shadow:
                    0 10px 30px
                    rgba(
                        15,
                        23,
                        42,
                        .12
                    );

                font-size:
                    12px;

                line-height:
                    1.5;

                display:
                    none;
            }


            #nsh-system-banner.visible {
                display:
                    block;
            }


            /* ================================================================
               TABLET
            ================================================================ */

            @media (
                max-width:
                    1024px
            ) {

                .lesson-layout {
                    grid-template-columns:
                        1fr !important;
                }


                .lesson-sidebar {
                    display:
                        grid;

                    grid-template-columns:
                        repeat(
                            2,
                            minmax(
                                0,
                                1fr
                            )
                        );

                    gap:
                        12px;
                }


                .study-command-grid {
                    grid-template-columns:
                        repeat(
                            2,
                            minmax(
                                0,
                                1fr
                            )
                        );
                }

            }


            /* ================================================================
               PHONE
            ================================================================ */

            @media (
                max-width:
                    700px
            ) {

                .top-header {
                    padding-top:
                        max(
                            10px,
                            var(
                                --nsh-safe-top
                            )
                        );
                }


                .brand span {
                    display:
                        none;
                }


                .brand strong {
                    font-size:
                        13px;
                }


                #welcome-name {
                    display:
                        none;
                }


                .progress-overview {
                    grid-template-columns:
                        repeat(
                            2,
                            minmax(
                                0,
                                1fr
                            )
                        ) !important;

                    gap:
                        10px;
                }


                .course-grid,
                .study-command-grid,
                .teas-action-grid,
                .teas-section-grid,
                .teas-skill-grid,
                .teas-strategy-grid,
                .teas-sheet-grid,
                .teas-crack-plan,
                .definition-grid,
                .organ-system-grid {
                    grid-template-columns:
                        1fr !important;
                }


                .section-heading,
                .study-command-header,
                .weak-area-card,
                .course-page-header,
                .course-main-progress,
                .final-practice-card,
                .lesson-actions {
                    display:
                        block !important;
                }


                .weak-area-card
                #weak-area-button,
                .topic-button,
                .final-practice-actions button,
                .lesson-action-buttons button {
                    width:
                        100%;
                }


                .topic-card {
                    display:
                        grid !important;

                    grid-template-columns:
                        auto 1fr;

                    gap:
                        12px;

                    align-items:
                        flex-start !important;
                }


                .topic-status {
                    grid-row:
                        1 / span 2;
                }


                .topic-information {
                    grid-column:
                        2;
                }


                .topic-button {
                    grid-column:
                        1 / -1;
                }


                .lesson-hero-number {
                    display:
                        none;
                }


                .lesson-navigation {
                    display:
                        flex !important;

                    overflow-x:
                        auto;

                    gap:
                        7px;

                    padding:
                        9px 4px;

                    -webkit-overflow-scrolling:
                        touch;
                }


                .lesson-navigation a {
                    flex:
                        0 0 auto;
                }


                .lesson-layout {
                    display:
                        block !important;
                }


                .lesson-sidebar {
                    display:
                        grid !important;

                    grid-template-columns:
                        1fr !important;

                    margin-top:
                        20px;
                }


                .lesson-action-buttons,
                .final-practice-actions {
                    display:
                        grid !important;

                    grid-template-columns:
                        1fr;

                    gap:
                        10px;

                    margin-top:
                        14px;
                }


                .study-overlay,
                .study-tools-modal-overlay {
                    padding:
                        0 !important;

                    align-items:
                        flex-end !important;
                }


                .study-modal,
                .study-tools-modal {
                    width:
                        100% !important;

                    max-width:
                        100% !important;

                    max-height:
                        calc(
                            var(
                                --nsh-mobile-vh
                            ) *
                            94
                        ) !important;

                    border-radius:
                        22px 22px 0 0
                        !important;
                }


                .study-modal-header,
                .study-tools-modal-header {
                    position:
                        sticky;

                    top:
                        0;

                    z-index:
                        20;
                }


                .study-actions {
                    display:
                        flex;

                    flex-direction:
                        column-reverse;
                }


                .study-actions > button,
                .study-actions-group {
                    width:
                        100%;
                }


                .teas-exam-nav {
                    flex-wrap:
                        nowrap !important;
                }


                .tools-stats-grid {
                    grid-template-columns:
                        repeat(
                            2,
                            minmax(
                                0,
                                1fr
                            )
                        );
                }


                .tools-form-grid,
                .countdown-grid,
                .weak-course-grid {
                    grid-template-columns:
                        1fr !important;
                }


                footer {
                    display:
                        block !important;

                    text-align:
                        center;
                }

            }


            @media (
                max-width:
                    420px
            ) {

                .progress-overview,
                .tools-stats-grid,
                .teas-hotspot-grid {
                    grid-template-columns:
                        1fr !important;
                }

            }


            body.dark-mode
            #nsh-launch-loader {
                background:
                    rgba(
                        15,
                        23,
                        42,
                        .98
                    );
            }


            body.dark-mode
            .nsh-loader-title {
                color:
                    #f8fafc;
            }


            body.dark-mode
            .nsh-loader-subtitle {
                color:
                    #94a3b8;
            }


            @media (
                prefers-reduced-motion:
                    reduce
            ) {

                html {
                    scroll-behavior:
                        auto;
                }


                *,
                *::before,
                *::after {
                    scroll-behavior:
                        auto !important;

                    transition-duration:
                        .01ms !important;

                    animation-duration:
                        .01ms !important;

                    animation-iteration-count:
                        1 !important;
                }

            }


            @media print {

                .top-header,
                #nsh-header-spacer,
                #nsh-scroll-top,
                #nsh-toast-container,
                #nsh-system-banner,
                .back-button,
                button {
                    display:
                        none !important;
                }


                body {
                    background:
                        #fff !important;

                    color:
                        #000 !important;
                }

            }

        `;


        document.head.appendChild(
            style
        );
    }


    injectLaunchStyles();


    // ========================================================================
    // FIXED HEADER SPACER
    // ========================================================================

    function updateHeaderHeight() {

        const header =
            document.querySelector(
                ".top-header"
            );

        if (!header) {
            return;
        }

        const height =
            Math.ceil(
                header
                    .getBoundingClientRect()
                    .height
            );

        if (height > 0) {

            document
                .documentElement
                .style
                .setProperty(
                    "--nsh-header-height",
                    `${height}px`
                );
        }
    }


    function initializeFixedHeader() {

        const header =
            document.querySelector(
                ".top-header"
            );

        if (!header) {
            return;
        }


        let spacer =
            document.getElementById(
                "nsh-header-spacer"
            );


        if (!spacer) {

            spacer =
                document.createElement(
                    "div"
                );

            spacer.id =
                "nsh-header-spacer";

            spacer.setAttribute(
                "aria-hidden",
                "true"
            );

            header.insertAdjacentElement(
                "afterend",
                spacer
            );
        }


        updateHeaderHeight();


        setTimeout(
            updateHeaderHeight,
            100
        );

        setTimeout(
            updateHeaderHeight,
            500
        );

        setTimeout(
            updateHeaderHeight,
            1200
        );


        if (
            "ResizeObserver" in
            window
        ) {

            headerResizeObserver =
                new ResizeObserver(
                    function () {
                        updateHeaderHeight();
                    }
                );

            headerResizeObserver.observe(
                header
            );
        }


        window.addEventListener(
            "resize",
            debounce(
                updateHeaderHeight,
                100
            )
        );


        const app =
            document.getElementById(
                "app"
            );


        if (app) {

            const appObserver =
                new MutationObserver(
                    function () {

                        setTimeout(
                            updateHeaderHeight,
                            50
                        );
                    }
                );


            appObserver.observe(
                app,
                {
                    attributes:
                        true,

                    attributeFilter: [
                        "class"
                    ]
                }
            );
        }
    }


    initializeFixedHeader();


    // ========================================================================
    // BRAND / LOGO RETURNS TO DASHBOARD
    // ========================================================================

    function closeStudyOverlays() {

        document
            .querySelectorAll(
                ".study-overlay, .study-tools-modal-overlay"
            )
            .forEach(
                function (overlay) {

                    overlay
                        .classList
                        .add(
                            "hidden"
                        );
                }
            );


        document.body.style.overflow =
            "";
    }


    function goToDashboard() {

        closeStudyOverlays();


        document
            .querySelectorAll(
                ".course-page, .lesson-page"
            )
            .forEach(
                function (page) {

                    page.classList.add(
                        "hidden"
                    );
                }
            );


        const dashboardSections = [

            document.querySelector(
                ".dashboard-intro"
            ),

            document.querySelector(
                ".progress-overview"
            ),

            document.querySelector(
                "#study-command-center"
            ),

            document.querySelector(
                ".courses-section"
            ),

            document.querySelector(
                ".weak-areas-section"
            ),

            document.querySelector(
                "footer"
            )

        ];


        dashboardSections.forEach(
            function (section) {

                if (section) {

                    section.classList.remove(
                        "hidden"
                    );
                }
            }
        );


        document.title =
            APP_NAME;


        syncDashboardProgress();


        window.scrollTo({
            top: 0,

            behavior:
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
                    ? "auto"
                    : "smooth"
        });
    }


    function initializeBrandNavigation() {

        const brand =
            document.querySelector(
                ".brand"
            );


        if (!brand) {
            return;
        }


        brand.setAttribute(
            "role",
            "button"
        );


        brand.setAttribute(
            "tabindex",
            "0"
        );


        brand.setAttribute(
            "aria-label",
            "Return to Nursing Study Hub dashboard"
        );


        brand.setAttribute(
            "title",
            "Go to dashboard"
        );


        brand.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                goToDashboard();
            }
        );


        brand.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    goToDashboard();
                }
            }
        );
    }


    initializeBrandNavigation();


    // ========================================================================
    // MOBILE VIEWPORT HEIGHT
    // ========================================================================

    function updateMobileViewportHeight() {

        const height =
            window.visualViewport
                ? window.visualViewport.height
                : window.innerHeight;


        document
            .documentElement
            .style
            .setProperty(
                "--nsh-mobile-vh",
                `${height * 0.01}px`
            );
    }


    updateMobileViewportHeight();


    window.addEventListener(
        "resize",
        debounce(
            updateMobileViewportHeight,
            100
        )
    );


    if (
        window.visualViewport
    ) {

        window.visualViewport
            .addEventListener(
                "resize",
                debounce(
                    updateMobileViewportHeight,
                    80
                )
            );
    }


    // ========================================================================
    // STARTUP LOADER
    // ========================================================================

    function createLaunchLoader() {

        if (
            document.getElementById(
                "nsh-launch-loader"
            )
        ) {
            return;
        }


        const loader =
            document.createElement(
                "div"
            );


        loader.id =
            "nsh-launch-loader";


        loader.setAttribute(
            "aria-hidden",
            "true"
        );


        loader.innerHTML = `

            <div class="nsh-loader-inner">

                <div class="nsh-loader-icon">
                    🩺
                </div>

                <div class="nsh-loader-title">
                    Nursing Study Hub
                </div>

                <div class="nsh-loader-subtitle">
                    Loading your study system
                </div>

                <div class="nsh-loader-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

        `;


        document.body.appendChild(
            loader
        );


        function removeLoader() {

            loader.classList.add(
                "nsh-loader-hide"
            );


            setTimeout(
                function () {
                    loader.remove();
                },
                350
            );
        }


        if (
            document.readyState ===
            "complete"
        ) {

            setTimeout(
                removeLoader,
                180
            );

        } else {

            window.addEventListener(
                "load",
                function () {

                    setTimeout(
                        removeLoader,
                        180
                    );
                },
                {
                    once: true
                }
            );


            setTimeout(
                removeLoader,
                1600
            );
        }
    }


    createLaunchLoader();


    // ========================================================================
    // TOASTS
    // ========================================================================

    function ensureToastContainer() {

        let container =
            document.getElementById(
                "nsh-toast-container"
            );


        if (container) {
            return container;
        }


        container =
            document.createElement(
                "div"
            );


        container.id =
            "nsh-toast-container";


        container.setAttribute(
            "aria-live",
            "polite"
        );


        document.body.appendChild(
            container
        );


        return container;
    }


    function showToast(
        message,
        type = "default",
        duration = 3200
    ) {

        const container =
            ensureToastContainer();


        const toast =
            document.createElement(
                "div"
            );


        toast.className =
            `nsh-toast ${type}`;


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
                    230
                );
            },
            duration
        );
    }


    // ========================================================================
    // STORAGE TEST
    // ========================================================================

    function localStorageWorks() {

        const key =
            "__nsh_storage_test__";


        try {

            localStorage.setItem(
                key,
                "1"
            );

            localStorage.removeItem(
                key
            );

            return true;

        } catch {

            return false;
        }
    }


    const systemBanner =
        document.createElement(
            "div"
        );


    systemBanner.id =
        "nsh-system-banner";


    systemBanner.setAttribute(
        "role",
        "status"
    );


    document.body.appendChild(
        systemBanner
    );


    if (
        !localStorageWorks()
    ) {

        systemBanner.textContent =
            "Browser storage is unavailable. Study progress may not be saved.";


        systemBanner.classList.add(
            "visible"
        );
    }


    // ========================================================================
    // BUTTON / ACCESSIBILITY POLISH
    // ========================================================================

    function improveButtons(
        root = document
    ) {

        if (
            !root.querySelectorAll
        ) {
            return;
        }


        root
            .querySelectorAll(
                "button:not([type])"
            )
            .forEach(
                function (button) {

                    button.type =
                        "button";
                }
            );


        root
            .querySelectorAll(
                "button"
            )
            .forEach(
                function (button) {

                    if (
                        button.textContent.trim() ===
                        "×" &&
                        !button.hasAttribute(
                            "aria-label"
                        )
                    ) {

                        button.setAttribute(
                            "aria-label",
                            "Close"
                        );
                    }
                }
            );
    }


    function enhanceAccessibility(
        root = document
    ) {

        if (
            !root.querySelectorAll
        ) {
            return;
        }


        const themeButton =
            document.getElementById(
                "theme-button"
            );


        if (themeButton) {

            themeButton.setAttribute(
                "aria-label",
                "Toggle light and dark mode"
            );
        }


        root
            .querySelectorAll(
                ".course-progress-bar, .mini-progress"
            )
            .forEach(
                function (bar) {

                    bar.setAttribute(
                        "role",
                        "progressbar"
                    );

                    bar.setAttribute(
                        "aria-valuemin",
                        "0"
                    );

                    bar.setAttribute(
                        "aria-valuemax",
                        "100"
                    );
                }
            );
    }


    improveButtons();

    enhanceAccessibility();


    // ========================================================================
    // SCROLL TO TOP
    // ========================================================================

    function createScrollToTop() {

        if (
            document.getElementById(
                "nsh-scroll-top"
            )
        ) {
            return;
        }


        const button =
            document.createElement(
                "button"
            );


        button.id =
            "nsh-scroll-top";


        button.type =
            "button";


        button.textContent =
            "↑";


        button.setAttribute(
            "aria-label",
            "Scroll to top"
        );


        document.body.appendChild(
            button
        );


        function updateVisibility() {

            button.classList.toggle(
                "visible",
                window.scrollY > 650
            );
        }


        window.addEventListener(
            "scroll",
            updateVisibility,
            {
                passive: true
            }
        );


        updateVisibility();


        button.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,

                    behavior:
                        window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches
                            ? "auto"
                            : "smooth"
                });
            }
        );
    }


    createScrollToTop();


    // ========================================================================
    // DASHBOARD PROGRESS
    // ========================================================================

    function getCourseProgress(
        courseId
    ) {

        const card =
            document.querySelector(
                `.course-card[data-course="${courseId}"]`
            );


        if (!card) {
            return 0;
        }


        const spans =
            card.querySelectorAll(
                ".course-progress span"
            );


        if (
            spans.length < 2
        ) {
            return 0;
        }


        const value =
            Number(
                spans[
                    spans.length - 1
                ]
                    .textContent
                    .replace(
                        /[^0-9.]/g,
                        ""
                    )
            );


        return Number.isFinite(
            value
        )
            ? clamp(
                value,
                0,
                100
            )
            : 0;
    }


    function updateCourseAccessibility() {

        EXPECTED_COURSES.forEach(
            function (courseId) {

                const card =
                    document.querySelector(
                        `.course-card[data-course="${courseId}"]`
                    );


                if (!card) {
                    return;
                }


                const progressBar =
                    card.querySelector(
                        ".course-progress-bar"
                    );


                if (progressBar) {

                    progressBar.setAttribute(
                        "aria-valuenow",
                        String(
                            Math.round(
                                getCourseProgress(
                                    courseId
                                )
                            )
                        )
                    );
                }
            }
        );
    }


    function syncDashboardProgress() {

        const values =
            EXPECTED_COURSES.map(
                getCourseProgress
            );


        if (!values.length) {
            return;
        }


        const overall =
            Math.round(
                values.reduce(
                    function (
                        total,
                        value
                    ) {

                        return (
                            total +
                            value
                        );
                    },
                    0
                ) /
                values.length
            );


        const overallText =
            document.getElementById(
                "overall-progress"
            );


        const overallBar =
            document.getElementById(
                "overall-progress-bar"
            );


        const questionElement =
            document.getElementById(
                "questions-answered"
            );


        if (overallText) {

            overallText.textContent =
                overall;
        }


        if (overallBar) {

            overallBar.style.width =
                `${overall}%`;


            if (
                overallBar.parentElement
            ) {

                overallBar.parentElement
                    .setAttribute(
                        "aria-valuenow",
                        String(
                            overall
                        )
                    );
            }
        }


        if (questionElement) {

            questionElement.textContent =
                Number(
                    localStorage.getItem(
                        SHARED_QUESTION_KEY
                    )
                ) || 0;
        }


        updateCourseAccessibility();
    }


    setTimeout(
        syncDashboardProgress,
        500
    );


    setTimeout(
        syncDashboardProgress,
        1300
    );


    const courseGrid =
        document.querySelector(
            ".course-grid"
        );


    if (courseGrid) {

        const progressObserver =
            new MutationObserver(
                function () {

                    clearTimeout(
                        progressTimer
                    );


                    progressTimer =
                        setTimeout(
                            syncDashboardProgress,
                            160
                        );
                }
            );


        progressObserver.observe(
            courseGrid,
            {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: true,
                attributeFilter: [
                    "style"
                ]
            }
        );
    }


    // ========================================================================
    // PAGE TITLE
    // ========================================================================

    function determineCurrentPageTitle() {

        const visibleLesson =
            [
                ...document.querySelectorAll(
                    ".lesson-page"
                )
            ]
                .find(
                    isVisible
                );


        if (visibleLesson) {

            const heading =
                visibleLesson.querySelector(
                    "h1"
                );


            if (
                heading &&
                heading.textContent.trim()
            ) {

                return (
                    heading.textContent.trim() +
                    " | " +
                    APP_NAME
                );
            }
        }


        const visibleCourse =
            [
                ...document.querySelectorAll(
                    ".course-page"
                )
            ]
                .find(
                    isVisible
                );


        if (visibleCourse) {

            const heading =
                visibleCourse.querySelector(
                    "h1"
                );


            if (
                heading &&
                heading.textContent.trim()
            ) {

                return (
                    heading.textContent.trim() +
                    " | " +
                    APP_NAME
                );
            }
        }


        return APP_NAME;
    }


    function updatePageTitle() {

        document.title =
            determineCurrentPageTitle();
    }


    setTimeout(
        updatePageTitle,
        600
    );


    // ========================================================================
    // DYNAMIC CONTENT OBSERVER
    // ========================================================================

    const dynamicObserver =
        new MutationObserver(
            debounce(
                function (mutations) {

                    let titleMayHaveChanged =
                        false;


                    mutations.forEach(
                        function (mutation) {

                            if (
                                mutation.type ===
                                "childList"
                            ) {

                                mutation
                                    .addedNodes
                                    .forEach(
                                        function (node) {

                                            if (
                                                node.nodeType !==
                                                1
                                            ) {
                                                return;
                                            }

                                            improveButtons(
                                                node
                                            );

                                            enhanceAccessibility(
                                                node
                                            );
                                        }
                                    );
                            }


                            if (
                                mutation.type ===
                                "attributes" &&
                                mutation.attributeName ===
                                "class"
                            ) {

                                titleMayHaveChanged =
                                    true;
                            }
                        }
                    );


                    if (
                        titleMayHaveChanged
                    ) {

                        updatePageTitle();
                    }
                },
                120
            )
        );


    dynamicObserver.observe(
        document.body,
        {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [
                "class"
            ]
        }
    );


    // ========================================================================
    // THEME COLOR
    // ========================================================================

    function syncThemeColor() {

        const meta =
            document.querySelector(
                'meta[name="theme-color"]'
            );


        if (!meta) {
            return;
        }


        meta.content =
            document.body
                .classList
                .contains(
                    "dark-mode"
                )
                ? "#0f172a"
                : "#4f46e5";
    }


    syncThemeColor();


    const themeObserver =
        new MutationObserver(
            syncThemeColor
        );


    themeObserver.observe(
        document.body,
        {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        }
    );


    // ========================================================================
    // RETURN TO TAB
    // ========================================================================

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.visibilityState ===
                "visible"
            ) {

                syncDashboardProgress();

                updatePageTitle();

                updateMobileViewportHeight();

                updateHeaderHeight();
            }
        }
    );


    // ========================================================================
    // ERROR MONITORING
    // ========================================================================

    window.addEventListener(
        "error",
        function (event) {

            launchErrorCount++;


            console.error(
                "[Nursing Study Hub] Runtime error:",
                event.error ||
                event.message
            );
        }
    );


    window.addEventListener(
        "unhandledrejection",
        function (event) {

            launchErrorCount++;


            console.error(
                "[Nursing Study Hub] Unhandled promise rejection:",
                event.reason
            );
        }
    );


    // ========================================================================
    // LAUNCH DIAGNOSTICS
    // ========================================================================

    function getLoadedScriptNames() {

        return [
            ...document.querySelectorAll(
                "script[src]"
            )
        ]
            .map(
                function (script) {

                    const src =
                        script.getAttribute(
                            "src"
                        ) || "";


                    return src
                        .split("/")
                        .pop()
                        .split("?")[0]
                        .split("#")[0];
                }
            )
            .filter(
                Boolean
            );
    }


    function findDuplicateIds() {

        const counts = {};


        document
            .querySelectorAll(
                "[id]"
            )
            .forEach(
                function (element) {

                    counts[
                        element.id
                    ] =
                        (
                            counts[
                                element.id
                            ] ||
                            0
                        ) +
                        1;
                }
            );


        return Object
            .entries(
                counts
            )
            .filter(
                function (
                    [
                        id,
                        count
                    ]
                ) {

                    return (
                        count >
                        1
                    );
                }
            )
            .map(
                function (
                    [
                        id,
                        count
                    ]
                ) {

                    return {
                        id,
                        count
                    };
                }
            );
    }


    function runLaunchDiagnostics() {

        const issues = [];

        const warnings = [];

        const passed = [];


        const requiredElements = [

            [
                "app",
                "#app"
            ],

            [
                "welcome screen",
                "#welcome-screen"
            ],

            [
                "course grid",
                ".course-grid"
            ],

            [
                "overall progress",
                "#overall-progress"
            ],

            [
                "theme button",
                "#theme-button"
            ],

            [
                "fixed header",
                ".top-header"
            ],

            [
                "header spacer",
                "#nsh-header-spacer"
            ]

        ];


        requiredElements.forEach(
            function (
                [
                    name,
                    selector
                ]
            ) {

                if (
                    document.querySelector(
                        selector
                    )
                ) {

                    passed.push(
                        `Found ${name}`
                    );

                } else {

                    issues.push(
                        `Missing ${name}: ${selector}`
                    );
                }
            }
        );


        EXPECTED_COURSES.forEach(
            function (courseId) {

                const card =
                    document.querySelector(
                        `.course-card[data-course="${courseId}"]`
                    );


                if (card) {

                    passed.push(
                        `Course card found: ${courseId}`
                    );

                } else {

                    issues.push(
                        `Missing course card: ${courseId}`
                    );
                }
            }
        );


        const loadedScripts =
            getLoadedScriptNames();


        EXPECTED_SCRIPTS.forEach(
            function (script) {

                if (
                    loadedScripts.includes(
                        script
                    )
                ) {

                    passed.push(
                        `Loaded ${script}`
                    );

                } else {

                    issues.push(
                        `Script is not loaded: ${script}`
                    );
                }
            }
        );


        const duplicates =
            findDuplicateIds();


        if (
            duplicates.length
        ) {

            duplicates.forEach(
                function (duplicate) {

                    warnings.push(
                        `Duplicate ID: ${duplicate.id} (${duplicate.count} occurrences)`
                    );
                }
            );

        } else {

            passed.push(
                "No duplicate IDs detected"
            );
        }


        if (
            localStorageWorks()
        ) {

            passed.push(
                "Browser storage available"
            );

        } else {

            issues.push(
                "Browser storage unavailable"
            );
        }


        EXPECTED_COURSES.forEach(
            function (courseId) {

                const card =
                    document.querySelector(
                        `.course-card[data-course="${courseId}"]`
                    );


                if (!card) {
                    return;
                }


                const button =
                    card.querySelector(
                        ".course-button"
                    );


                if (!button) {

                    issues.push(
                        `Missing button on ${courseId}`
                    );

                } else if (
                    button
                        .textContent
                        .toLowerCase()
                        .includes(
                            "coming soon"
                        )
                ) {

                    warnings.push(
                        `${courseId} still says Coming Soon`
                    );
                }
            }
        );


        if (
            launchErrorCount >
            0
        ) {

            warnings.push(
                `${launchErrorCount} runtime error(s) detected since page load`
            );

        } else {

            passed.push(
                "No runtime errors detected by launch monitor"
            );
        }


        return {

            status:
                issues.length ===
                0
                    ? (
                        warnings.length ===
                            0
                            ? "PASS"
                            : "PASS_WITH_WARNINGS"
                    )
                    : "FAIL",

            issues,

            warnings,

            passed,

            courseCount:
                document.querySelectorAll(
                    ".course-card"
                ).length,

            expectedCourseCount:
                EXPECTED_COURSES.length,

            loadedScripts,

            runtimeErrors:
                launchErrorCount,

            timestamp:
                new Date()
                    .toISOString()

        };
    }


    window.NSHLaunchDiagnostics = {

        run:
            runLaunchDiagnostics,


        print:
            function () {

                const result =
                    runLaunchDiagnostics();


                console.group(
                    "🩺 Nursing Study Hub Launch Check"
                );


                console.log(
                    "Status:",
                    result.status
                );


                console.log(
                    "Courses:",
                    `${result.courseCount}/${result.expectedCourseCount}`
                );


                if (
                    result.issues.length
                ) {

                    console.error(
                        "Critical issues:",
                        result.issues
                    );
                }


                if (
                    result.warnings.length
                ) {

                    console.warn(
                        "Warnings:",
                        result.warnings
                    );
                }


                console.log(
                    "Passed checks:",
                    result.passed
                );


                console.groupEnd();


                return result;
            }

    };


    setTimeout(
        function () {

            const result =
                runLaunchDiagnostics();


            if (
                result.issues.length
            ) {

                console.error(
                    "[Nursing Study Hub] Launch check found critical issues:",
                    result.issues
                );


                showToast(
                    "A launch-system check found a missing site component. Open the browser console for details.",
                    "error",
                    6000
                );

            } else if (
                result.warnings.length
            ) {

                console.warn(
                    "[Nursing Study Hub] Launch check warnings:",
                    result.warnings
                );

            } else {

                console.log(
                    "🩺 Nursing Study Hub launch check: PASS"
                );
            }
        },
        1800
    );


    // ========================================================================
    // QA SHORTCUT
    // ========================================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.ctrlKey &&
                event.shiftKey &&
                event.key
                    .toLowerCase() ===
                    "d"
            ) {

                event.preventDefault();


                const result =
                    window
                        .NSHLaunchDiagnostics
                        .print();


                if (
                    result.status ===
                    "PASS"
                ) {

                    showToast(
                        "Launch check passed ✓",
                        "success"
                    );

                } else if (
                    result.status ===
                    "PASS_WITH_WARNINGS"
                ) {

                    showToast(
                        `Launch check passed with ${result.warnings.length} warning(s).`,
                        "warning"
                    );

                } else {

                    showToast(
                        `Launch check found ${result.issues.length} critical issue(s).`,
                        "error"
                    );
                }
            }
        }
    );


    // ========================================================================
    // FINAL INITIALIZATION
    // ========================================================================

    syncDashboardProgress();

    syncThemeColor();

    updatePageTitle();

    updateMobileViewportHeight();

    updateHeaderHeight();


    console.log(
        "🩺 Nursing Study Hub fixed-header launch layer initialized."
    );

});