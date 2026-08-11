// ============================================================================
// NURSING STUDY HUB
// TEAS 7 ULTIMATE PREP CENTER
// 1,280+ ORIGINAL PRACTICE QUESTIONS
// DIAGNOSTIC • MASTERY • STRATEGY • TIMED PRACTICE • FULL SIMULATION
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================================
    // CORE SETTINGS
    // ========================================================================

    const COURSE_TITLE = "TEAS 7 Ultimate Prep Center";

    const MASTERY_TARGET = 90;

    const DIAGNOSTIC_LENGTH = 80;

    const STANDARD_PRACTICE_LENGTH = 25;

    const WEAK_PRACTICE_LENGTH = 30;

    const SPEED_ROUND_LENGTH = 20;

    const SHARED_QUESTIONS_KEY =
        "nursingStudyHubQuestionsAnswered";

    const STATS_KEY =
        "nshTEAS_FINAL_STATS";

    const EXAM_HISTORY_KEY =
        "nshTEAS_FINAL_EXAM_HISTORY";


    // ========================================================================
    // OFFICIAL-STYLE SECTION STRUCTURE USED BY OUR SIMULATOR
    // ========================================================================

    const TEAS_SECTIONS = {

        reading: {
            id: "reading",
            title: "Reading",
            icon: "📖",
            color: "#2563eb",
            totalQuestions: 45,
            scoredBlueprint: 39,
            minutes: 55,
            bankTarget: 332
        },

        math: {
            id: "math",
            title: "Mathematics",
            icon: "🧮",
            color: "#7c3aed",
            totalQuestions: 38,
            scoredBlueprint: 34,
            minutes: 57,
            bankTarget: 296
        },

        science: {
            id: "science",
            title: "Science",
            icon: "🧬",
            color: "#059669",
            totalQuestions: 50,
            scoredBlueprint: 44,
            minutes: 60,
            bankTarget: 372
        },

        english: {
            id: "english",
            title: "English & Language Usage",
            icon: "✍️",
            color: "#d97706",
            totalQuestions: 37,
            scoredBlueprint: 33,
            minutes: 37,
            bankTarget: 280
        }

    };


    const SECTION_ORDER = [
        "reading",
        "math",
        "science",
        "english"
    ];


    // ========================================================================
    // SKILLS / OFFICIAL BLUEPRINT DOMAINS
    // ========================================================================

    const SKILLS = [

        // READING

        {
            id: "reading-key",
            section: "reading",
            title: "Key Ideas & Details",
            subtitle:
                "Main idea, details, inference, directions, sequence, charts and locating information.",
            tips: [
                "Answer from the passage, not from outside knowledge.",
                "For main idea, choose the answer broad enough to cover the whole passage.",
                "For detail questions, go back to the exact line instead of relying on memory.",
                "For inference questions, choose what must or most reasonably follows from the evidence.",
                "Sequence questions reward careful attention to transition words and directions."
            ]
        },

        {
            id: "reading-craft",
            section: "reading",
            title: "Craft & Structure",
            subtitle:
                "Author purpose, point of view, context clues, fact versus opinion, bias and tone.",
            tips: [
                "Purpose answers usually begin with verbs such as inform, explain, persuade or entertain.",
                "Tone is the author's attitude, not the topic itself.",
                "Use surrounding words to determine an unfamiliar word's meaning.",
                "A fact can be verified; an opinion expresses a judgment or preference.",
                "Bias often appears through selective wording, unsupported assumptions or one-sided presentation."
            ]
        },

        {
            id: "reading-integration",
            section: "reading",
            title: "Integration of Knowledge & Ideas",
            subtitle:
                "Evidence, arguments, paired texts, conclusions, predictions and multiple sources.",
            tips: [
                "A strong claim needs relevant evidence.",
                "Separate what the source states from what you personally believe.",
                "When two sources disagree, identify exactly what point differs.",
                "For predictions, use the established pattern in the text.",
                "Reject evidence that is interesting but does not actually support the claim."
            ]
        },


        // MATH

        {
            id: "math-number",
            section: "math",
            title: "Number & Algebra",
            subtitle:
                "Fractions, decimals, percentages, equations, ratios, proportions, rates and inequalities.",
            tips: [
                "Translate words into an equation before calculating.",
                "Percent means per 100.",
                "For proportions, keep corresponding units in matching positions.",
                "Estimate first so you can catch calculator-entry mistakes.",
                "When solving an equation, perform the same operation on both sides."
            ]
        },

        {
            id: "math-measurement",
            section: "math",
            title: "Measurement & Data",
            subtitle:
                "Graphs, statistics, geometry, area, circumference, volume and unit conversions.",
            tips: [
                "Write the formula before substituting numbers.",
                "Area uses square units; volume uses cubic units.",
                "Mean is sensitive to extreme values; median is resistant.",
                "Read graph axes and units before interpreting the data.",
                "Convert units before combining measurements."
            ]
        },


        // SCIENCE

        {
            id: "science-ap",
            section: "science",
            title: "Human Anatomy & Physiology",
            subtitle:
                "All major organ systems, homeostasis and structure-function relationships.",
            tips: [
                "Learn pathways: blood flow, airflow, digestion, urine formation and nerve signaling.",
                "Connect structure to function instead of memorizing isolated terms.",
                "Know which organ or hormone controls each major physiological process.",
                "Use homeostasis to predict what the body does when a value rises or falls.",
                "Compare similar structures side by side."
            ]
        },

        {
            id: "science-biology",
            section: "science",
            title: "Biology",
            subtitle:
                "Cells, DNA, proteins, inheritance, macromolecules and microorganisms.",
            tips: [
                "Membrane structure explains transport.",
                "DNA → RNA → protein is a core pathway.",
                "Mitosis makes genetically similar somatic cells.",
                "Meiosis reduces chromosome number for gametes.",
                "Match macromolecules with both building blocks and functions."
            ]
        },

        {
            id: "science-chemistry",
            section: "science",
            title: "Chemistry",
            subtitle:
                "Atoms, matter, reactions, solutions, acids, bases and reaction conditions.",
            tips: [
                "Protons determine the element.",
                "Electrons drive bonding and ion formation.",
                "Physical change does not create a new substance; chemical change does.",
                "Lower pH means greater acidity.",
                "Concentration depends on amount of solute relative to solution volume."
            ]
        },

        {
            id: "science-reasoning",
            section: "science",
            title: "Scientific Reasoning",
            subtitle:
                "Scientific method, variables, measurement, evidence, experimental design and conclusions.",
            tips: [
                "Independent variable = what is deliberately changed.",
                "Dependent variable = what is measured.",
                "Control groups provide comparison.",
                "Repeated consistent trials improve reliability.",
                "A conclusion must match the actual data, not the researcher's hopes."
            ]
        },


        // ENGLISH

        {
            id: "english-conventions",
            section: "english",
            title: "Conventions of Standard English",
            subtitle:
                "Spelling, punctuation, agreement, pronouns, sentence structure and grammar.",
            tips: [
                "Find the true subject before choosing the verb.",
                "A comma alone cannot join two complete sentences.",
                "A semicolon can join closely related independent clauses.",
                "Pronouns must agree clearly with their antecedents.",
                "Read the whole sentence aloud when checking modifiers."
            ]
        },

        {
            id: "english-language",
            section: "english",
            title: "Knowledge of Language",
            subtitle:
                "Clarity, audience, paragraph organization, transitions and concise writing.",
            tips: [
                "Prefer the clearest grammatically correct sentence.",
                "Remove redundancy.",
                "Transitions must show the correct logical relationship.",
                "Topic sentences state a paragraph's controlling idea.",
                "Match tone and vocabulary to the intended audience."
            ]
        },

        {
            id: "english-vocab",
            section: "english",
            title: "Vocabulary & Word Parts",
            subtitle:
                "Prefixes, suffixes, roots, context and precise word meaning.",
            tips: [
                "Break unfamiliar words into prefix + root + suffix.",
                "Use sentence context to check the meaning.",
                "Negative prefixes include un-, in-, im-, non- and dis-.",
                "Medical/science roots can often unlock unfamiliar vocabulary.",
                "Choose the meaning that fits the sentence, not merely a familiar dictionary meaning."
            ]
        }

    ];


    const SKILL_MAP = {};

    SKILLS.forEach(function (skill) {
        SKILL_MAP[skill.id] = skill;
    });


    // ========================================================================
    // TEST-TAKING STRATEGY CENTER
    // ========================================================================

    const STRATEGIES = [

        {
            title: "The 3-Pass Method",
            icon: "⚡",
            body:
                "Pass 1: answer questions you know quickly. Pass 2: work calculation or passage questions requiring more time. Pass 3: revisit flagged items. Do not let one hard question consume time needed for five easier questions."
        },

        {
            title: "Eliminate Before You Guess",
            icon: "🎯",
            body:
                "Cross out answers that contradict the question, use the wrong unit, are too extreme, reverse cause and effect or introduce information not supported by the passage."
        },

        {
            title: "Predict Before Looking",
            icon: "🧠",
            body:
                "For reading and vocabulary, decide what the answer should roughly mean before studying the options. This reduces attraction to polished distractors."
        },

        {
            title: "Math: Estimate First",
            icon: "🧮",
            body:
                "Before using exact arithmetic, estimate the expected range. If your exact answer is nowhere near the estimate, recheck decimal placement, units and calculator entry."
        },

        {
            title: "Science: Follow the Pathway",
            icon: "🧬",
            body:
                "When stuck, trace the process in order: structure → input → process → output → regulation. This works for blood flow, digestion, respiration, urine formation, hormones and cellular processes."
        },

        {
            title: "Reading: Prove It",
            icon: "📖",
            body:
                "For inference and conclusion questions, ask: 'What evidence in the passage proves this?' If you cannot point to evidence, the answer may be an unsupported assumption."
        },

        {
            title: "English: Find the Core Sentence",
            icon: "✍️",
            body:
                "Ignore interrupting phrases temporarily. Find the subject, verb and complete thought first. Then evaluate commas, agreement, modifiers and pronouns."
        },

        {
            title: "Flag Without Panic",
            icon: "🚩",
            body:
                "A difficult question is not evidence that the entire test is going badly. Make your best choice, flag it if the section allows review and keep moving."
        },

        {
            title: "Do Not Change Answers Randomly",
            icon: "🔁",
            body:
                "Change an answer only when you identify a specific mistake or new evidence. A vague feeling is weaker than a reason."
        },

        {
            title: "Train Under Time",
            icon: "⏱️",
            body:
                "Content mastery without pacing is incomplete TEAS preparation. Once accuracy improves, practice with strict section timers until the pace feels normal."
        },

        {
            title: "Use Units as Clues",
            icon: "📐",
            body:
                "In math and science, units often reveal the needed operation. Square units suggest area, cubic units suggest volume and rate units identify what belongs in numerator and denominator."
        },

        {
            title: "Aim Above Your Minimum",
            icon: "🏆",
            body:
                "Do not prepare merely to scrape past a school's minimum. Build enough margin that a difficult test form, nerves or several unfamiliar questions do not derail your result."
        }

    ];


    // ========================================================================
    // HIGH-YIELD CHEAT SHEETS
    // ========================================================================

    const MATH_FORMULAS = [

        "Percent = part ÷ whole × 100",

        "Percent change = change ÷ original × 100",

        "Proportion: a/b = c/d",

        "Distance = rate × time",

        "Mean = sum of values ÷ number of values",

        "Rectangle area = length × width",

        "Triangle area = ½ × base × height",

        "Circle circumference = 2πr = πd",

        "Circle area = πr²",

        "Rectangular prism volume = length × width × height",

        "Cylinder volume = πr²h",

        "1 meter = 100 centimeters",

        "1 centimeter = 10 millimeters",

        "1 liter = 1000 milliliters",

        "1 kilogram = 1000 grams",

        "1 gram = 1000 milligrams",

        "1 hour = 60 minutes"

    ];


    const SCIENCE_HIGH_YIELD = [

        "Right heart → lungs; left heart → body.",

        "Arteries carry blood away from the heart; veins carry blood toward it.",

        "Alveoli are the primary gas-exchange structures.",

        "Small intestine performs most nutrient absorption.",

        "Nephron is the functional unit of the kidney.",

        "Insulin lowers blood glucose; glucagon raises it.",

        "PTH raises blood calcium.",

        "Sympathetic = mobilization; parasympathetic = maintenance/rest-and-digest.",

        "Skeletal muscle is voluntary and striated; cardiac is involuntary, striated and branched; smooth is involuntary and nonstriated.",

        "DNA stores genetic information; RNA participates in gene expression and protein synthesis.",

        "Mitosis produces genetically similar daughter cells; meiosis produces haploid gametes.",

        "Carbohydrates and proteins provide about 4 kcal/g; fat provides about 9 kcal/g.",

        "Atomic number = number of protons.",

        "Acids increase hydrogen-ion concentration; bases reduce it or accept H+ depending on model.",

        "Independent variable is manipulated; dependent variable is measured.",

        "Correlation does not by itself prove causation."

    ];


    // ========================================================================
    // DETERMINISTIC RANDOM HELPERS
    // This allows 1,280 stable questions and stable weak-area IDs.
    // ========================================================================

    function hashString(text) {

        let hash = 2166136261;

        for (
            let i = 0;
            i < text.length;
            i++
        ) {

            hash ^= text.charCodeAt(i);

            hash = Math.imul(
                hash,
                16777619
            );

        }

        return hash >>> 0;

    }


    function seededRandom(seedText) {

        let state =
            hashString(seedText) ||
            123456789;


        return function () {

            state += 0x6D2B79F5;

            let t = state;

            t = Math.imul(
                t ^ (t >>> 15),
                t | 1
            );

            t ^= t +
                Math.imul(
                    t ^ (t >>> 7),
                    t | 61
                );


            return (
                (
                    t ^
                    (t >>> 14)
                ) >>> 0
            ) / 4294967296;

        };

    }


    function pick(
        array,
        rng
    ) {

        return array[
            Math.floor(
                rng() *
                array.length
            )
        ];

    }


    function seededShuffle(
        array,
        rng
    ) {

        const copy =
            [...array];


        for (
            let i =
                copy.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    rng() *
                    (i + 1)
                );


            [
                copy[i],
                copy[j]
            ] = [
                copy[j],
                copy[i]
            ];

        }


        return copy;

    }


    function randomShuffle(
        array
    ) {

        const copy =
            [...array];


        for (
            let i =
                copy.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() *
                    (i + 1)
                );


            [
                copy[i],
                copy[j]
            ] = [
                copy[j],
                copy[i]
            ];

        }


        return copy;

    }


    function round(
        number,
        digits = 2
    ) {

        const factor =
            Math.pow(
                10,
                digits
            );


        return (
            Math.round(
                number *
                factor
            ) /
            factor
        );

    }


    function escapeHTML(
        value
    ) {

        return String(
            value ?? ""
        )
            .replaceAll(
                "&",
                "&amp;"
            )
            .replaceAll(
                "<",
                "&lt;"
            )
            .replaceAll(
                ">",
                "&gt;"
            )
            .replaceAll(
                '"',
                "&quot;"
            );

    }


    // ========================================================================
    // QUESTION CONSTRUCTORS
    // ========================================================================

    function mcq(
        id,
        section,
        skill,
        q,
        choices,
        answer,
        explanation,
        difficulty = "medium",
        passage = ""
    ) {

        return {
            id,
            section,
            skill,
            type: "mcq",
            q,
            choices,
            answer,
            explanation,
            difficulty,
            passage
        };

    }


    function numeric(
        id,
        section,
        skill,
        q,
        answer,
        tolerance,
        unit,
        explanation,
        difficulty = "medium"
    ) {

        return {
            id,
            section,
            skill,
            type: "numeric",
            q,
            answer,
            tolerance,
            unit,
            explanation,
            difficulty
        };

    }


    function multi(
        id,
        section,
        skill,
        q,
        choices,
        answers,
        explanation,
        difficulty = "medium",
        passage = ""
    ) {

        return {
            id,
            section,
            skill,
            type: "multiselect",
            q,
            choices,
            answers,
            explanation,
            difficulty,
            passage
        };

    }


    function ordered(
        id,
        section,
        skill,
        q,
        options,
        answer,
        explanation,
        difficulty = "medium"
    ) {

        return {
            id,
            section,
            skill,
            type: "ordered",
            q,
            options,
            answer,
            explanation,
            difficulty
        };

    }


    function hotspot(
        id,
        section,
        skill,
        q,
        areas,
        answer,
        explanation,
        difficulty = "medium"
    ) {

        return {
            id,
            section,
            skill,
            type: "hotspot",
            q,
            areas,
            answer,
            explanation,
            difficulty
        };

    }


    // ========================================================================
    // READING CONTENT GENERATORS
    // ========================================================================

    const READING_CONTEXTS = [

        {
            subject: "community garden",
            goal: "increase access to fresh produce",
            action: "added evening volunteer hours",
            result: "participation increased",
            audience: "neighborhood residents"
        },

        {
            subject: "college tutoring center",
            goal: "help students complete difficult courses",
            action: "added weekend appointments",
            result: "more students used tutoring",
            audience: "college students"
        },

        {
            subject: "public library",
            goal: "improve access to digital resources",
            action: "expanded laptop lending",
            result: "device checkouts increased",
            audience: "library patrons"
        },

        {
            subject: "city bus program",
            goal: "reduce missed medical appointments",
            action: "added a clinic shuttle route",
            result: "on-time clinic arrivals improved",
            audience: "local residents"
        },

        {
            subject: "school breakfast program",
            goal: "increase morning meal participation",
            action: "moved breakfast service closer to classrooms",
            result: "student participation rose",
            audience: "students and families"
        },

        {
            subject: "hospital recycling project",
            goal: "reduce unnecessary waste",
            action: "placed labeled bins near work areas",
            result: "recycling volume increased",
            audience: "hospital employees"
        },

        {
            subject: "walking-trail project",
            goal: "encourage physical activity",
            action: "installed lighting and distance markers",
            result: "evening trail use increased",
            audience: "community members"
        },

        {
            subject: "campus shuttle service",
            goal: "reduce transportation delays",
            action: "added a morning route",
            result: "late arrivals decreased",
            audience: "students"
        }

    ];


    const READING_TONES = [
        "informative",
        "optimistic",
        "cautious",
        "objective"
    ];


    function buildReadingQuestion(
        index
    ) {

        const id =
            `teas_reading_${String(
                index + 1
            ).padStart(
                4,
                "0"
            )}`;


        const rng =
            seededRandom(id);


        const context =
            pick(
                READING_CONTEXTS,
                rng
            );


        const before =
            20 +
            Math.floor(
                rng() *
                41
            );


        const increase =
            5 +
            Math.floor(
                rng() *
                21
            );


        const after =
            before +
            increase;


        const mode =
            index % 12;


        const passage =
            `A local ${context.subject} was created to ${context.goal}. ` +
            `During its first month, about ${before} people participated each week. ` +
            `Organizers then ${context.action}. By the following month, weekly participation had risen to approximately ${after}. ` +
            `Organizers said the change made the program easier to use, although they plan to continue collecting feedback before making additional changes.`;


        if (
            mode === 0
        ) {

            return mcq(
                id,
                "reading",
                "reading-key",
                "Which statement best expresses the main idea of the passage?",
                [
                    `A change intended to improve access to the ${context.subject} was followed by greater participation.`,
                    `The ${context.subject} should immediately make several more changes.`,
                    `Weekly participation is the only useful way to evaluate a program.`,
                    `The organizers believe feedback is unnecessary.`
                ],
                0,
                "The passage focuses on an access-related change followed by increased participation.",
                "medium",
                passage
            );

        }


        if (
            mode === 1
        ) {

            return mcq(
                id,
                "reading",
                "reading-key",
                "Which conclusion is best supported by the passage?",
                [
                    `The change may have made the ${context.subject} more convenient for participants.`,
                    "Every person in the community now uses the program.",
                    "The program will definitely continue growing forever.",
                    "The original program had no value."
                ],
                0,
                "Participation increased after the access-related change, supporting the reasonable inference that convenience may have improved.",
                "medium",
                passage
            );

        }


        if (
            mode === 2
        ) {

            return numeric(
                id,
                "reading",
                "reading-key",
                `According to the passage, by how many people did weekly participation increase?`,
                increase,
                0,
                "people",
                `${after} − ${before} = ${increase}.`,
                "easy"
            );

        }


        if (
            mode === 3
        ) {

            return mcq(
                id,
                "reading",
                "reading-craft",
                "What is the author's primary purpose?",
                [
                    "To explain a program change and its observed result",
                    "To entertain the reader with a fictional story",
                    "To prove that all public programs are successful",
                    "To criticize people who did not participate"
                ],
                0,
                "The passage primarily reports what changed and what happened afterward.",
                "easy",
                passage
            );

        }


        if (
            mode === 4
        ) {

            return mcq(
                id,
                "reading",
                "reading-craft",
                "Which word best describes the overall tone?",
                [
                    "Informative",
                    "Hostile",
                    "Sarcastic",
                    "Panicked"
                ],
                0,
                "The passage presents information in a neutral, explanatory way.",
                "easy",
                passage
            );

        }


        if (
            mode === 5
        ) {

            return mcq(
                id,
                "reading",
                "reading-key",
                "Which detail appears explicitly in the passage?",
                [
                    `Organizers ${context.action}.`,
                    "The program was permanently closed.",
                    "Participation fell after the change.",
                    "Organizers stopped collecting feedback."
                ],
                0,
                "The action is directly stated in the passage.",
                "easy",
                passage
            );

        }


        if (
            mode === 6
        ) {

            return mcq(
                id,
                "reading",
                "reading-craft",
                "Which statement from the passage is closest to a fact that could be verified from records?",
                [
                    `Weekly participation increased from about ${before} to about ${after}.`,
                    "The program is the best program in the city.",
                    "The change was wonderful.",
                    "Everyone should support the program."
                ],
                0,
                "Participation numbers can be checked against program records; the other options are judgments.",
                "medium",
                passage
            );

        }


        if (
            mode === 7
        ) {

            return ordered(
                id,
                "reading",
                "reading-key",
                "Place the events from the passage in chronological order.",
                [
                    "The program was created.",
                    "Organizers changed access.",
                    "Participation increased.",
                    "Organizers planned to keep collecting feedback."
                ],
                [
                    "The program was created.",
                    "Organizers changed access.",
                    "Participation increased.",
                    "Organizers planned to keep collecting feedback."
                ],
                "The passage presents the events in that sequence.",
                "medium"
            );

        }


        if (
            mode === 8
        ) {

            return multi(
                id,
                "reading",
                "reading-integration",
                "Select all statements supported by the passage.",
                [
                    "Participation increased after organizers changed access.",
                    "Organizers are continuing to gather feedback.",
                    "The program has guaranteed permanent success.",
                    "The passage proves the change was the only possible cause of increased participation."
                ],
                [
                    0,
                    1
                ],
                "The first two statements are directly supported. The passage does not establish guaranteed success or definitive causation.",
                "hard",
                passage
            );

        }


        if (
            mode === 9
        ) {

            const wordPassage =
                `The organizers described the initial results as encouraging but preliminary. They explained that additional months of data would be needed before drawing a firm conclusion.`;


            return mcq(
                id,
                "reading",
                "reading-craft",
                "As used in the passage, what does preliminary most nearly mean?",
                [
                    "Early and not yet final",
                    "Completely proven",
                    "Unrelated",
                    "Secret"
                ],
                0,
                "The surrounding sentence explains that more data are needed before a firm conclusion, so preliminary means early or not final.",
                "medium",
                wordPassage
            );

        }


        if (
            mode === 10
        ) {

            const sourceA =
                `Source A reports that participation rose after ${context.action}.`;

            const sourceB =
                `Source B notes that weather improved during the same month and may also have affected participation.`;


            return mcq(
                id,
                "reading",
                "reading-integration",
                "How do the two sources differ?",
                [
                    "Source B introduces another possible explanation for the increase.",
                    "Source A states participation decreased.",
                    "Source B says the program never existed.",
                    "Both sources claim the access change was definitely the only cause."
                ],
                0,
                "Source B adds a possible confounding explanation that Source A does not mention.",
                "hard",
                `${sourceA}<br><br>${sourceB}`
            );

        }


        return mcq(
            id,
            "reading",
            "reading-integration",
            "Which additional evidence would BEST strengthen the claim that the access change helped increase participation?",
            [
                "Participation increased specifically among people who reported that the previous schedule or access was difficult.",
                "The program's logo was redesigned.",
                "A neighboring city has a different program.",
                "One organizer personally likes the change."
            ],
            0,
            "Evidence connecting the change directly with previously affected users most strongly supports the causal claim.",
            "hard",
            passage
        );

    }


    function buildReadingBank(
        count
    ) {

        const bank = [];

        for (
            let i = 0;
            i < count;
            i++
        ) {

            bank.push(
                buildReadingQuestion(
                    i
                )
            );

        }

        return bank;

    }


    // ========================================================================
    // MATH QUESTION GENERATOR
    // ========================================================================

    function buildMathQuestion(
        index
    ) {

        const id =
            `teas_math_${String(
                index + 1
            ).padStart(
                4,
                "0"
            )}`;


        const rng =
            seededRandom(id);


        const mode =
            index % 15;


        const skill =
            mode <= 8
                ? "math-number"
                : "math-measurement";


        if (
            mode === 0
        ) {

            const denominator =
                pick(
                    [
                        4,
                        5,
                        8,
                        10,
                        20,
                        25
                    ],
                    rng
                );


            const numerator =
                1 +
                Math.floor(
                    rng() *
                    (
                        denominator - 1
                    )
                );


            const decimalValue =
                round(
                    numerator /
                    denominator,
                    4
                );


            return mcq(
                id,
                "math",
                skill,
                `Which decimal is equivalent to ${numerator}/${denominator}?`,
                [
                    String(
                        decimalValue
                    ),
                    String(
                        round(
                            numerator /
                            (
                                denominator +
                                1
                            ),
                            4
                        )
                    ),
                    String(
                        round(
                            denominator /
                            numerator,
                            4
                        )
                    ),
                    String(
                        round(
                            decimalValue +
                            0.1,
                            4
                        )
                    )
                ],
                0,
                `${numerator} ÷ ${denominator} = ${decimalValue}.`,
                "easy"
            );

        }


        if (
            mode === 1
        ) {

            const percent =
                pick(
                    [
                        10,
                        15,
                        20,
                        25,
                        30,
                        40,
                        60,
                        75
                    ],
                    rng
                );


            const whole =
                (
                    2 +
                    Math.floor(
                        rng() *
                        18
                    )
                ) *
                10;


            const answer =
                whole *
                percent /
                100;


            return numeric(
                id,
                "math",
                skill,
                `What is ${percent}% of ${whole}?`,
                answer,
                0.001,
                "",
                `${percent}% = ${percent / 100}. Multiply ${whole} × ${percent / 100} = ${answer}.`,
                "easy"
            );

        }


        if (
            mode === 2
        ) {

            const x =
                2 +
                Math.floor(
                    rng() *
                    20
                );


            const multiplier =
                2 +
                Math.floor(
                    rng() *
                    7
                );


            const add =
                1 +
                Math.floor(
                    rng() *
                    15
                );


            const total =
                multiplier *
                x +
                add;


            return numeric(
                id,
                "math",
                skill,
                `Solve for x: ${multiplier}x + ${add} = ${total}`,
                x,
                0.001,
                "",
                `Subtract ${add}: ${multiplier}x = ${total - add}. Divide by ${multiplier}: x = ${x}.`,
                "medium"
            );

        }


        if (
            mode === 3
        ) {

            const oldValue =
                (
                    4 +
                    Math.floor(
                        rng() *
                        12
                    )
                ) *
                10;


            const percentIncrease =
                pick(
                    [
                        10,
                        20,
                        25,
                        50
                    ],
                    rng
                );


            const change =
                oldValue *
                percentIncrease /
                100;


            const newValue =
                oldValue +
                change;


            return numeric(
                id,
                "math",
                skill,
                `A value increases from ${oldValue} to ${newValue}. What is the percent increase?`,
                percentIncrease,
                0.01,
                "%",
                `Increase = ${change}. Percent increase = ${change} ÷ ${oldValue} × 100 = ${percentIncrease}%.`,
                "medium"
            );

        }


        if (
            mode === 4
        ) {

            const a =
                2 +
                Math.floor(
                    rng() *
                    8
                );


            const b =
                3 +
                Math.floor(
                    rng() *
                    9
                );


            const multiplier =
                2 +
                Math.floor(
                    rng() *
                    6
                );


            return mcq(
                id,
                "math",
                skill,
                `A recipe uses ${a} cups of ingredient A for every ${b} cups of ingredient B. How many cups of ingredient B are needed when ingredient A is increased to ${a * multiplier} cups?`,
                [
                    String(
                        b *
                        multiplier
                    ),
                    String(
                        b +
                        multiplier
                    ),
                    String(
                        a *
                        multiplier
                    ),
                    String(
                        b *
                        (
                            multiplier +
                            1
                        )
                    )
                ],
                0,
                `The ratio must stay ${a}:${b}. Multiplying A by ${multiplier} means B is also multiplied by ${multiplier}.`,
                "medium"
            );

        }


        if (
            mode === 5
        ) {

            const distance =
                (
                    3 +
                    Math.floor(
                        rng() *
                        8
                    )
                ) *
                20;


            const hours =
                2 +
                Math.floor(
                    rng() *
                    5
                );


            const rate =
                distance /
                hours;


            return numeric(
                id,
                "math",
                skill,
                `A vehicle travels ${distance} miles in ${hours} hours at a constant average rate. What is the average rate?`,
                rate,
                0.01,
                "mph",
                `Rate = distance ÷ time = ${distance} ÷ ${hours} = ${rate} mph.`,
                "easy"
            );

        }


        if (
            mode === 6
        ) {

            const first =
                2 +
                Math.floor(
                    rng() *
                    8
                );


            const second =
                2 +
                Math.floor(
                    rng() *
                    8
                );


            const numerator =
                first *
                second;


            return numeric(
                id,
                "math",
                skill,
                `Calculate: (${numerator}/${first}) ÷ ${second}`,
                1,
                0.001,
                "",
                `${numerator}/${first} = ${second}; ${second} ÷ ${second} = 1.`,
                "medium"
            );

        }


        if (
            mode === 7
        ) {

            const cost =
                30 +
                Math.floor(
                    rng() *
                    71
                );


            const discount =
                pick(
                    [
                        10,
                        15,
                        20,
                        25
                    ],
                    rng
                );


            const final =
                round(
                    cost *
                    (
                        1 -
                        discount /
                        100
                    ),
                    2
                );


            return numeric(
                id,
                "math",
                skill,
                `An item costs $${cost} and is discounted ${discount}%. What is the sale price before tax?`,
                final,
                0.01,
                "dollars",
                `Discount = $${round(cost * discount / 100, 2)}. Sale price = $${cost} − discount = $${final}.`,
                "medium"
            );

        }


        if (
            mode === 8
        ) {

            const threshold =
                5 +
                Math.floor(
                    rng() *
                    16
                );


            return mcq(
                id,
                "math",
                skill,
                `Which value satisfies x > ${threshold}?`,
                [
                    String(
                        threshold +
                        2
                    ),
                    String(
                        threshold
                    ),
                    String(
                        threshold - 1
                    ),
                    String(
                        threshold - 3
                    )
                ],
                0,
                `x must be greater than ${threshold}; ${threshold + 2} satisfies the inequality.`,
                "easy"
            );

        }


        if (
            mode === 9
        ) {

            const length =
                4 +
                Math.floor(
                    rng() *
                    11
                );


            const width =
                3 +
                Math.floor(
                    rng() *
                    9
                );


            const area =
                length *
                width;


            return numeric(
                id,
                "math",
                skill,
                `What is the area of a rectangle ${length} cm long and ${width} cm wide?`,
                area,
                0.001,
                "cm²",
                `Area = length × width = ${length} × ${width} = ${area} cm².`,
                "easy"
            );

        }


        if (
            mode === 10
        ) {

            const base =
                4 +
                Math.floor(
                    rng() *
                    13
                );


            const height =
                2 +
                Math.floor(
                    rng() *
                    11
                );


            const area =
                base *
                height /
                2;


            return numeric(
                id,
                "math",
                skill,
                `A triangle has base ${base} m and height ${height} m. What is its area?`,
                area,
                0.001,
                "m²",
                `Area = ½bh = ½ × ${base} × ${height} = ${area} m².`,
                "medium"
            );

        }


        if (
            mode === 11
        ) {

            const radius =
                2 +
                Math.floor(
                    rng() *
                    8
                );


            const circumference =
                round(
                    2 *
                    Math.PI *
                    radius,
                    2
                );


            return numeric(
                id,
                "math",
                skill,
                `Using π ≈ 3.14, estimate the circumference of a circle with radius ${radius} cm.`,
                round(
                    2 *
                    3.14 *
                    radius,
                    2
                ),
                0.02,
                "cm",
                `C = 2πr = 2 × 3.14 × ${radius} = ${round(2 * 3.14 * radius, 2)} cm.`,
                "medium"
            );

        }


        if (
            mode === 12
        ) {

            const liters =
                1 +
                Math.floor(
                    rng() *
                    9
                );


            return numeric(
                id,
                "math",
                skill,
                `Convert ${liters} liters to milliliters.`,
                liters *
                1000,
                0,
                "mL",
                `1 L = 1000 mL, so ${liters} × 1000 = ${liters * 1000} mL.`,
                "easy"
            );

        }


        if (
            mode === 13
        ) {

            const values = [
                4 +
                Math.floor(
                    rng() *
                    6
                ),
                8 +
                Math.floor(
                    rng() *
                    6
                ),
                12 +
                Math.floor(
                    rng() *
                    6
                ),
                16 +
                Math.floor(
                    rng() *
                    6
                )
            ];


            const mean =
                values.reduce(
                    (
                        total,
                        value
                    ) =>
                        total +
                        value,
                    0
                ) /
                values.length;


            return numeric(
                id,
                "math",
                skill,
                `Find the mean of: ${values.join(", ")}.`,
                mean,
                0.001,
                "",
                `Add the values and divide by 4: ${values.reduce((a, b) => a + b, 0)} ÷ 4 = ${mean}.`,
                "medium"
            );

        }


        const a =
            10 +
            Math.floor(
                rng() *
                11
            );


        const b =
            a +
            5 +
            Math.floor(
                rng() *
                11
            );


        const c =
            b +
            5 +
            Math.floor(
                rng() *
                11
            );


        return mcq(
            id,
            "math",
            skill,
            `A data set contains ${a}, ${b}, and ${c}. Which statement is true?`,
            [
                `The range is ${c - a}.`,
                `The range is ${c + a}.`,
                `The median is ${a}.`,
                `The mean must equal ${c}.`
            ],
            0,
            `Range = maximum − minimum = ${c} − ${a} = ${c - a}.`,
            "medium"
        );

    }


    function buildMathBank(
        count
    ) {

        const bank = [];

        for (
            let i = 0;
            i < count;
            i++
        ) {

            bank.push(
                buildMathQuestion(
                    i
                )
            );

        }

        return bank;

    }


    // ========================================================================
    // SCIENCE CONCEPT BANK
    // ========================================================================

    const AP_CONCEPTS = [

        [
            "alveoli",
            "thin-walled air sacs where most pulmonary gas exchange occurs",
            "respiratory system"
        ],

        [
            "diaphragm",
            "primary skeletal muscle of quiet inspiration",
            "respiratory system"
        ],

        [
            "left ventricle",
            "heart chamber that pumps blood into systemic circulation",
            "cardiovascular system"
        ],

        [
            "right ventricle",
            "heart chamber that pumps blood toward the lungs",
            "cardiovascular system"
        ],

        [
            "artery",
            "blood vessel that carries blood away from the heart",
            "cardiovascular system"
        ],

        [
            "vein",
            "blood vessel that carries blood toward the heart",
            "cardiovascular system"
        ],

        [
            "capillary",
            "thin vessel specialized for exchange between blood and tissues",
            "cardiovascular system"
        ],

        [
            "small intestine",
            "major site of nutrient digestion and absorption",
            "digestive system"
        ],

        [
            "liver",
            "organ that produces bile and performs major metabolic processing",
            "digestive system"
        ],

        [
            "gallbladder",
            "organ that stores and concentrates bile",
            "digestive system"
        ],

        [
            "pancreas",
            "organ with digestive exocrine functions and endocrine glucose-regulating functions",
            "digestive/endocrine systems"
        ],

        [
            "neuron",
            "excitable cell specialized for nervous-system communication",
            "nervous system"
        ],

        [
            "myelin",
            "insulating material that speeds conduction along many axons",
            "nervous system"
        ],

        [
            "cerebellum",
            "brain region important for coordination and balance",
            "nervous system"
        ],

        [
            "medulla oblongata",
            "brainstem region involved in vital autonomic regulation",
            "nervous system"
        ],

        [
            "skeletal muscle",
            "striated voluntary muscle that moves the skeleton",
            "muscular system"
        ],

        [
            "cardiac muscle",
            "striated involuntary muscle forming the heart wall",
            "muscular system"
        ],

        [
            "smooth muscle",
            "nonstriated involuntary muscle found in many hollow organs and vessels",
            "muscular system"
        ],

        [
            "testis",
            "male gonad that produces sperm and testosterone",
            "reproductive system"
        ],

        [
            "ovary",
            "female gonad that produces oocytes and ovarian hormones",
            "reproductive system"
        ],

        [
            "uterine tube",
            "usual site of fertilization in the female reproductive tract",
            "reproductive system"
        ],

        [
            "epidermis",
            "outer epithelial layer of the skin",
            "integumentary system"
        ],

        [
            "dermis",
            "connective-tissue layer beneath the epidermis containing vessels and many accessory structures",
            "integumentary system"
        ],

        [
            "pituitary gland",
            "endocrine gland linked to the hypothalamus that regulates several hormonal axes",
            "endocrine system"
        ],

        [
            "thyroid gland",
            "endocrine gland that produces hormones influencing metabolic rate",
            "endocrine system"
        ],

        [
            "parathyroid hormone",
            "hormone that raises blood calcium through coordinated effects on bone, kidney and vitamin D pathways",
            "endocrine system"
        ],

        [
            "insulin",
            "pancreatic hormone that generally lowers blood glucose by promoting uptake and storage",
            "endocrine system"
        ],

        [
            "glucagon",
            "pancreatic hormone that helps raise blood glucose",
            "endocrine system"
        ],

        [
            "nephron",
            "functional unit of the kidney",
            "urinary system"
        ],

        [
            "glomerulus",
            "capillary tuft where renal filtration begins",
            "urinary system"
        ],

        [
            "ureter",
            "tube carrying urine from kidney to urinary bladder",
            "urinary system"
        ],

        [
            "B lymphocyte",
            "adaptive immune cell capable of differentiating into antibody-secreting plasma cells",
            "immune system"
        ],

        [
            "T lymphocyte",
            "adaptive immune cell involved in cell-mediated regulation and killing",
            "immune system"
        ],

        [
            "neutrophil",
            "phagocytic white blood cell important in many acute bacterial responses",
            "immune system"
        ],

        [
            "osteoblast",
            "bone-forming cell",
            "skeletal system"
        ],

        [
            "osteoclast",
            "bone-resorbing cell",
            "skeletal system"
        ],

        [
            "ligament",
            "connective tissue structure connecting bone to bone",
            "skeletal system"
        ],

        [
            "tendon",
            "connective tissue structure connecting muscle to bone",
            "musculoskeletal system"
        ],

        [
            "negative feedback",
            "homeostatic control pattern in which a response opposes the original disturbance",
            "homeostasis"
        ],

        [
            "positive feedback",
            "control pattern in which a response amplifies the initiating change",
            "homeostasis"
        ]

    ];


    const BIOLOGY_CONCEPTS = [

        [
            "nucleus",
            "organelle containing most of a eukaryotic cell's DNA"
        ],

        [
            "mitochondrion",
            "organelle that performs major steps of aerobic ATP production"
        ],

        [
            "ribosome",
            "cellular structure where proteins are synthesized"
        ],

        [
            "Golgi apparatus",
            "organelle that modifies, sorts and packages many proteins"
        ],

        [
            "cell membrane",
            "selectively permeable phospholipid-based boundary of the cell"
        ],

        [
            "diffusion",
            "net movement of particles down a concentration gradient"
        ],

        [
            "osmosis",
            "movement of water across a selectively permeable membrane"
        ],

        [
            "active transport",
            "movement of substances using cellular energy, often against a gradient"
        ],

        [
            "DNA",
            "molecule that stores hereditary information"
        ],

        [
            "RNA",
            "nucleic acid involved in gene expression and protein synthesis"
        ],

        [
            "transcription",
            "production of RNA using DNA as a template"
        ],

        [
            "translation",
            "production of a polypeptide using information carried by mRNA"
        ],

        [
            "mitosis",
            "nuclear division producing genetically similar daughter nuclei"
        ],

        [
            "meiosis",
            "cell division process that produces haploid gametes"
        ],

        [
            "gene",
            "DNA sequence contributing to a functional product"
        ],

        [
            "allele",
            "alternative form of a gene"
        ],

        [
            "genotype",
            "genetic allele combination of an organism for a trait"
        ],

        [
            "phenotype",
            "observable characteristic resulting from genotype and environment"
        ],

        [
            "carbohydrate",
            "macromolecule class important in energy supply and structural roles"
        ],

        [
            "protein",
            "polymer of amino acids with structural, enzymatic and regulatory functions"
        ],

        [
            "lipid",
            "hydrophobic molecule class including fats and membrane components"
        ],

        [
            "nucleic acid",
            "polymer involved in genetic information storage or expression"
        ],

        [
            "enzyme",
            "biological catalyst that lowers activation energy"
        ],

        [
            "bacterium",
            "prokaryotic microorganism"
        ],

        [
            "virus",
            "acellular infectious agent requiring host-cell machinery for replication"
        ]

    ];


    const CHEMISTRY_CONCEPTS = [

        [
            "proton",
            "positively charged subatomic particle located in the atomic nucleus"
        ],

        [
            "neutron",
            "uncharged subatomic particle located in the atomic nucleus"
        ],

        [
            "electron",
            "negatively charged subatomic particle occupying regions around the nucleus"
        ],

        [
            "atomic number",
            "number of protons in an atom"
        ],

        [
            "isotope",
            "atoms of the same element with different numbers of neutrons"
        ],

        [
            "ion",
            "atom or molecule with a net electrical charge"
        ],

        [
            "covalent bond",
            "chemical bond involving shared electrons"
        ],

        [
            "ionic attraction",
            "electrostatic attraction between oppositely charged ions"
        ],

        [
            "physical change",
            "change in form or state without formation of a new substance"
        ],

        [
            "chemical change",
            "change that produces one or more new substances"
        ],

        [
            "reactant",
            "starting substance in a chemical reaction"
        ],

        [
            "product",
            "substance formed by a chemical reaction"
        ],

        [
            "catalyst",
            "substance that increases reaction rate without being consumed overall"
        ],

        [
            "solute",
            "substance dissolved in a solution"
        ],

        [
            "solvent",
            "substance doing the dissolving"
        ],

        [
            "concentration",
            "amount of solute relative to a specified amount of solution"
        ],

        [
            "acid",
            "substance that can donate hydrogen ions under a common acid-base model"
        ],

        [
            "base",
            "substance that can accept hydrogen ions under a common acid-base model"
        ],

        [
            "pH",
            "logarithmic measure related to hydrogen-ion activity"
        ],

        [
            "buffer",
            "system that resists large pH changes after small additions of acid or base"
        ]

    ];


    function scienceConceptQuestion(
        id,
        skill,
        concepts,
        rng,
        mode
    ) {

        const correctIndex =
            Math.floor(
                rng() *
                concepts.length
            );


        const concept =
            concepts[
                correctIndex
            ];


        const otherIndices =
            seededShuffle(
                concepts
                    .map(
                        (
                            value,
                            index
                        ) => index
                    )
                    .filter(
                        index =>
                            index !==
                            correctIndex
                    ),
                rng
            )
                .slice(
                    0,
                    3
                );


        if (
            mode % 3 === 0
        ) {

            const raw =
                seededShuffle(
                    [
                        {
                            text: concept[0],
                            correct: true
                        },
                        ...otherIndices.map(
                            index => ({
                                text:
                                    concepts[index][0],
                                correct: false
                            })
                        )
                    ],
                    rng
                );


            return mcq(
                id,
                "science",
                skill,
                `Which term best matches this description?<br><br><strong>${concept[1]}</strong>`,
                raw.map(
                    option =>
                        option.text
                ),
                raw.findIndex(
                    option =>
                        option.correct
                ),
                `<strong>${concept[0]}</strong>: ${concept[1]}.`,
                mode % 2 === 0
                    ? "medium"
                    : "easy"
            );

        }


        const raw =
            seededShuffle(
                [
                    {
                        text: concept[1],
                        correct: true
                    },
                    ...otherIndices.map(
                        index => ({
                            text:
                                concepts[index][1],
                            correct: false
                        })
                    )
                ],
                rng
            );


        return mcq(
            id,
            "science",
            skill,
            `Which statement best describes <strong>${concept[0]}</strong>?`,
            raw.map(
                option =>
                    option.text
            ),
            raw.findIndex(
                option =>
                    option.correct
            ),
            `<strong>${concept[0]}</strong>: ${concept[1]}.`,
            mode % 2 === 0
                ? "medium"
                : "hard"
        );

    }


    function buildScientificReasoningQuestion(
        id,
        rng,
        mode
    ) {

        const temperatures = [
            15,
            20,
            25,
            30,
            35
        ];


        const selectedTemp =
            pick(
                temperatures,
                rng
            );


        if (
            mode % 6 === 0
        ) {

            return mcq(
                id,
                "science",
                "science-reasoning",
                `A researcher changes water temperature to ${selectedTemp}°C and measures the growth rate of identical plants. What is the independent variable?`,
                [
                    "Water temperature",
                    "Plant growth rate",
                    "Plant species",
                    "Measurement instrument"
                ],
                0,
                "The independent variable is deliberately changed by the researcher: water temperature.",
                "easy"
            );

        }


        if (
            mode % 6 === 1
        ) {

            return mcq(
                id,
                "science",
                "science-reasoning",
                "A researcher changes the amount of light received by plants and records their height after two weeks. What is the dependent variable?",
                [
                    "Plant height",
                    "Amount of light",
                    "Type of ruler",
                    "Researcher's prediction"
                ],
                0,
                "The dependent variable is the measured outcome: plant height.",
                "easy"
            );

        }


        if (
            mode % 6 === 2
        ) {

            return multi(
                id,
                "science",
                "science-reasoning",
                "Which actions generally strengthen the reliability of an experiment? Select all that apply.",
                [
                    "Repeat the experiment",
                    "Use consistent measurement procedures",
                    "Change several uncontrolled variables at once",
                    "Increase appropriate sample size"
                ],
                [
                    0,
                    1,
                    3
                ],
                "Replication, consistent procedures and adequate sample size can improve reliability. Uncontrolled changes weaken interpretation.",
                "medium"
            );

        }


        if (
            mode % 6 === 3
        ) {

            return mcq(
                id,
                "science",
                "science-reasoning",
                "Two variables are strongly correlated in an observational study. Which conclusion is most appropriate?",
                [
                    "The variables are associated, but the study alone does not prove causation.",
                    "One variable definitely causes the other.",
                    "The variables must be identical.",
                    "No additional research is ever needed."
                ],
                0,
                "Correlation demonstrates association, not necessarily causation.",
                "medium"
            );

        }


        if (
            mode % 6 === 4
        ) {

            return ordered(
                id,
                "science",
                "science-reasoning",
                "Arrange these scientific-investigation steps in a logical order.",
                [
                    "Ask a testable question",
                    "Form a hypothesis",
                    "Collect data",
                    "Analyze results",
                    "Draw a conclusion"
                ],
                [
                    "Ask a testable question",
                    "Form a hypothesis",
                    "Collect data",
                    "Analyze results",
                    "Draw a conclusion"
                ],
                "Scientific investigations generally progress from question and hypothesis through data collection, analysis and conclusion.",
                "medium"
            );

        }


        return mcq(
            id,
            "science",
            "science-reasoning",
            "An experiment repeatedly produces similar measurements under the same conditions. Which quality is most directly supported?",
            [
                "Reliability",
                "Bias",
                "Confounding",
                "Random error"
            ],
            0,
            "Consistent repeated results support reliability.",
            "easy"
        );

    }


    function buildScienceQuestion(
        index
    ) {

        const id =
            `teas_science_${String(
                index + 1
            ).padStart(
                4,
                "0"
            )}`;


        const rng =
            seededRandom(id);


        // Approximate proportional weighting across the science bank.
        const position =
            index %
            372;


        if (
            position < 152
        ) {

            if (
                position % 23 === 0
            ) {

                return hotspot(
                    id,
                    "science",
                    "science-ap",
                    "Select the region representing the RIGHT LOWER quadrant of a patient facing you.",
                    [
                        "Patient's right upper",
                        "Patient's left upper",
                        "Patient's right lower",
                        "Patient's left lower"
                    ],
                    2,
                    "Anatomical right and left refer to the patient's right and left, not the observer's.",
                    "medium"
                );

            }


            return scienceConceptQuestion(
                id,
                "science-ap",
                AP_CONCEPTS,
                rng,
                position
            );

        }


        if (
            position < 228
        ) {

            return scienceConceptQuestion(
                id,
                "science-biology",
                BIOLOGY_CONCEPTS,
                rng,
                position
            );

        }


        if (
            position < 296
        ) {

            if (
                position % 13 === 0
            ) {

                const pH =
                    1 +
                    Math.floor(
                        rng() *
                        5
                    );


                return mcq(
                    id,
                    "science",
                    "science-chemistry",
                    `Which statement about a solution with pH ${pH} is correct?`,
                    [
                        "It is acidic under ordinary aqueous reference conditions.",
                        "It is strongly basic.",
                        "It must be neutral.",
                        "Its pH proves it contains no ions."
                    ],
                    0,
                    "A pH below 7 is acidic under the common aqueous reference scale.",
                    "easy"
                );

            }


            return scienceConceptQuestion(
                id,
                "science-chemistry",
                CHEMISTRY_CONCEPTS,
                rng,
                position
            );

        }


        return buildScientificReasoningQuestion(
            id,
            rng,
            position
        );

    }


    function buildScienceBank(
        count
    ) {

        const bank = [];

        for (
            let i = 0;
            i < count;
            i++
        ) {

            bank.push(
                buildScienceQuestion(
                    i
                )
            );

        }

        return bank;

    }


    // ========================================================================
    // ENGLISH QUESTION GENERATOR
    // ========================================================================

    const PREFIXES = [

        [
            "pre-",
            "before"
        ],

        [
            "post-",
            "after"
        ],

        [
            "anti-",
            "against"
        ],

        [
            "sub-",
            "under"
        ],

        [
            "inter-",
            "between"
        ],

        [
            "intra-",
            "within"
        ],

        [
            "hyper-",
            "above or excessive"
        ],

        [
            "hypo-",
            "below or deficient"
        ]

    ];


    function buildEnglishQuestion(
        index
    ) {

        const id =
            `teas_english_${String(
                index + 1
            ).padStart(
                4,
                "0"
            )}`;


        const rng =
            seededRandom(id);


        const mode =
            index % 15;


        if (
            mode <= 6
        ) {

            if (
                mode === 0
            ) {

                return mcq(
                    id,
                    "english",
                    "english-conventions",
                    "Which sentence has correct subject-verb agreement?",
                    [
                        "The group of students is studying for the exam.",
                        "The group of students are studying for the exam.",
                        "The group of students be studying for the exam.",
                        "The group of students have studies for the exam."
                    ],
                    0,
                    "The subject is group, which is singular; therefore, is is correct.",
                    "medium"
                );

            }


            if (
                mode === 1
            ) {

                return mcq(
                    id,
                    "english",
                    "english-conventions",
                    "Which sentence is punctuated correctly?",
                    [
                        "The patient felt tired; however, she completed the walk.",
                        "The patient felt tired however she completed the walk.",
                        "The patient felt tired, however she completed the walk.",
                        "The patient felt tired; however she, completed the walk."
                    ],
                    0,
                    "A semicolon can join the two independent clauses, and however is followed by a comma.",
                    "hard"
                );

            }


            if (
                mode === 2
            ) {

                return mcq(
                    id,
                    "english",
                    "english-conventions",
                    "Which option is a complete sentence?",
                    [
                        "The nurse reviewed the instructions with the patient.",
                        "Because the instructions were complicated.",
                        "After the appointment at the clinic.",
                        "While waiting near the front desk."
                    ],
                    0,
                    "The first option contains a complete independent clause. The others are fragments.",
                    "easy"
                );

            }


            if (
                mode === 3
            ) {

                return mcq(
                    id,
                    "english",
                    "english-conventions",
                    "Which sentence uses the apostrophe correctly?",
                    [
                        "The student's notebook was on the desk.",
                        "The students notebook was on the desk.",
                        "The students' notebook was on the desk, referring to one student.",
                        "The student's' notebook was on the desk."
                    ],
                    0,
                    "For one student possessing a notebook, use student's.",
                    "medium"
                );

            }


            if (
                mode === 4
            ) {

                return mcq(
                    id,
                    "english",
                    "english-conventions",
                    "Which sentence uses a pronoun most clearly?",
                    [
                        "Maria gave the report to Elena, and Maria filed a copy.",
                        "Maria gave the report to Elena, and she filed a copy.",
                        "When Maria spoke with Elena, she said it was finished.",
                        "Maria told Elena that she should file it."
                    ],
                    0,
                    "Repeating Maria eliminates ambiguity about who filed the copy.",
                    "medium"
                );

            }


            if (
                mode === 5
            ) {

                return mcq(
                    id,
                    "english",
                    "english-conventions",
                    "Which sentence correctly uses a comma after an introductory phrase?",
                    [
                        "Before the exam, the student reviewed her notes.",
                        "Before the exam the student, reviewed her notes.",
                        "Before, the exam the student reviewed her notes.",
                        "Before the exam the, student reviewed her notes."
                    ],
                    0,
                    "The comma follows the introductory prepositional phrase.",
                    "easy"
                );

            }


            return mcq(
                id,
                "english",
                "english-conventions",
                "Which sentence avoids a misplaced modifier?",
                [
                    "Walking into the classroom, Maya noticed the review sheet on the desk.",
                    "Walking into the classroom, the review sheet was noticed by Maya.",
                    "Maya noticed, walking into the classroom, the review sheet.",
                    "The classroom walking into Maya contained a review sheet."
                ],
                0,
                "The introductory modifier logically describes Maya, who immediately follows it.",
                "medium"
            );

        }


        if (
            mode <= 11
        ) {

            if (
                mode === 7
            ) {

                return mcq(
                    id,
                    "english",
                    "english-language",
                    "Which revision is most concise?",
                    [
                        "The meeting was canceled because of snow.",
                        "The meeting was canceled due to the fact that there was snow.",
                        "Because of the fact of snow, the meeting was canceled.",
                        "The meeting, because snow was occurring in nature, was canceled."
                    ],
                    0,
                    "The first sentence communicates the same meaning without unnecessary words.",
                    "easy"
                );

            }


            if (
                mode === 8
            ) {

                return mcq(
                    id,
                    "english",
                    "english-language",
                    "Which transition BEST shows contrast?",
                    [
                        "However",
                        "Therefore",
                        "For example",
                        "Similarly"
                    ],
                    0,
                    "However signals contrast.",
                    "easy"
                );

            }


            if (
                mode === 9
            ) {

                return ordered(
                    id,
                    "english",
                    "english-language",
                    "Arrange the sentences into the most logical paragraph.",
                    [
                        "First, the student identified the topics that needed review.",
                        "Next, she created a study schedule.",
                        "Then, she completed practice questions each evening.",
                        "Finally, she took a timed practice exam."
                    ],
                    [
                        "First, the student identified the topics that needed review.",
                        "Next, she created a study schedule.",
                        "Then, she completed practice questions each evening.",
                        "Finally, she took a timed practice exam."
                    ],
                    "The transition words establish the logical sequence.",
                    "easy"
                );

            }


            if (
                mode === 10
            ) {

                return mcq(
                    id,
                    "english",
                    "english-language",
                    "Which sentence is most appropriate for a formal email to an instructor?",
                    [
                        "Could you please clarify the due date for the assignment?",
                        "Yo, when's that thing due?",
                        "I kinda need you to tell me about the assignment.",
                        "What's up with the deadline lol?"
                    ],
                    0,
                    "The first option uses clear, respectful language appropriate for an academic audience.",
                    "easy"
                );

            }


            return mcq(
                id,
                "english",
                "english-language",
                "Which sentence would work BEST as a topic sentence for a paragraph about benefits of regular exercise?",
                [
                    "Regular exercise supports several important aspects of physical and mental health.",
                    "Yesterday I saw a blue bicycle.",
                    "Exercise can occur indoors or outdoors, and this sentence provides no central claim.",
                    "Shoes are sold in many stores."
                ],
                0,
                "A topic sentence should introduce the paragraph's main controlling idea.",
                "easy"
            );

        }


        const prefix =
            pick(
                PREFIXES,
                rng
            );


        if (
            mode === 12
        ) {

            return mcq(
                id,
                "english",
                "english-vocab",
                `What does the prefix <strong>${prefix[0]}</strong> most commonly mean?`,
                [
                    prefix[1],
                    "without",
                    "equal",
                    "color"
                ],
                0,
                `${prefix[0]} commonly means ${prefix[1]}.`,
                "easy"
            );

        }


        if (
            mode === 13
        ) {

            return mcq(
                id,
                "english",
                "english-vocab",
                "In the sentence, “The instructor's explanation was concise, giving all necessary information in only a few sentences,” what does concise most nearly mean?",
                [
                    "Brief and clear",
                    "Confusing and lengthy",
                    "Angry",
                    "Incomplete"
                ],
                0,
                "The context explains that the information was delivered in only a few sentences, indicating brevity and clarity.",
                "easy"
            );

        }


        return mcq(
            id,
            "english",
            "english-vocab",
            "Which word most nearly means verify?",
            [
                "Confirm",
                "Ignore",
                "Remove",
                "Predict"
            ],
            0,
            "To verify means to confirm or establish that something is true or accurate.",
            "easy"
        );

    }


    function buildEnglishBank(
        count
    ) {

        const bank = [];

        for (
            let i = 0;
            i < count;
            i++
        ) {

            bank.push(
                buildEnglishQuestion(
                    i
                )
            );

        }

        return bank;

    }


    // ========================================================================
    // BUILD COMPLETE 1,280-QUESTION BANK
    // ========================================================================

    const QUESTION_BANK = [

        ...buildReadingBank(
            TEAS_SECTIONS.reading.bankTarget
        ),

        ...buildMathBank(
            TEAS_SECTIONS.math.bankTarget
        ),

        ...buildScienceBank(
            TEAS_SECTIONS.science.bankTarget
        ),

        ...buildEnglishBank(
            TEAS_SECTIONS.english.bankTarget
        )

    ];


    const QUESTION_MAP = {};

    QUESTION_BANK.forEach(
        function (
            question
        ) {

            QUESTION_MAP[
                question.id
            ] = question;

        }
    );


    const TOTAL_BANK_SIZE =
        QUESTION_BANK.length;


    // ========================================================================
    // STORAGE / STATISTICS
    // ========================================================================

    function defaultStats() {

        const skillStats = {};

        SKILLS.forEach(
            function (
                skill
            ) {

                skillStats[
                    skill.id
                ] = {
                    attempted: 0,
                    correct: 0
                };

            }
        );


        const sectionStats = {};

        SECTION_ORDER.forEach(
            function (
                section
            ) {

                sectionStats[
                    section
                ] = {
                    attempted: 0,
                    correct: 0
                };

            }
        );


        return {

            totalAttempted: 0,

            totalCorrect: 0,

            questions: {},

            weak: [],

            seen: [],

            skillStats,

            sectionStats,

            diagnosticCompleted: false,

            diagnosticScore: 0,

            fullExamsCompleted: 0,

            bestFullExam: 0

        };

    }


    function loadStats() {

        try {

            const stored =
                JSON.parse(
                    localStorage.getItem(
                        STATS_KEY
                    ) || "null"
                );


            if (
                !stored
            ) {

                return defaultStats();

            }


            const base =
                defaultStats();


            return {
                ...base,
                ...stored,
                skillStats: {
                    ...base.skillStats,
                    ...(
                        stored.skillStats ||
                        {}
                    )
                },
                sectionStats: {
                    ...base.sectionStats,
                    ...(
                        stored.sectionStats ||
                        {}
                    )
                },
                questions:
                    stored.questions ||
                    {},
                weak:
                    Array.isArray(
                        stored.weak
                    )
                        ? stored.weak
                        : [],
                seen:
                    Array.isArray(
                        stored.seen
                    )
                        ? stored.seen
                        : []
            };

        } catch {

            return defaultStats();

        }

    }


    let stats =
        loadStats();


    function saveStats() {

        localStorage.setItem(
            STATS_KEY,
            JSON.stringify(
                stats
            )
        );

    }


    function recordQuestion(
        question,
        correct
    ) {

        stats.totalAttempted++;

        if (
            correct
        ) {

            stats.totalCorrect++;

        }


        if (
            !stats.questions[
                question.id
            ]
        ) {

            stats.questions[
                question.id
            ] = {
                attempted: 0,
                correct: 0
            };

        }


        stats.questions[
            question.id
        ].attempted++;


        if (
            correct
        ) {

            stats.questions[
                question.id
            ].correct++;

        }


        if (
            stats.sectionStats[
                question.section
            ]
        ) {

            stats.sectionStats[
                question.section
            ].attempted++;

            if (
                correct
            ) {

                stats.sectionStats[
                    question.section
                ].correct++;

            }

        }


        if (
            stats.skillStats[
                question.skill
            ]
        ) {

            stats.skillStats[
                question.skill
            ].attempted++;

            if (
                correct
            ) {

                stats.skillStats[
                    question.skill
                ].correct++;

            }

        }


        if (
            !stats.seen.includes(
                question.id
            )
        ) {

            stats.seen.push(
                question.id
            );

        }


        if (
            correct
        ) {

            stats.weak =
                stats.weak.filter(
                    id =>
                        id !==
                        question.id
                );

        } else if (
            !stats.weak.includes(
                question.id
            )
        ) {

            stats.weak.push(
                question.id
            );

        }


        localStorage.setItem(

            SHARED_QUESTIONS_KEY,

            Number(
                localStorage.getItem(
                    SHARED_QUESTIONS_KEY
                )
            ) +
            1 || 1

        );


        saveStats();

    }


    function percentage(
        correct,
        attempted
    ) {

        if (
            !attempted
        ) {

            return 0;

        }


        return Math.round(
            correct /
            attempted *
            100
        );

    }


    function sectionAccuracy(
        section
    ) {

        const value =
            stats.sectionStats[
                section
            ];


        return percentage(
            value.correct,
            value.attempted
        );

    }


    function skillAccuracy(
        skill
    ) {

        const value =
            stats.skillStats[
                skill
            ];


        return percentage(
            value.correct,
            value.attempted
        );

    }


    function readinessPercent() {

        const accuracy =
            percentage(
                stats.totalCorrect,
                stats.totalAttempted
            );


        const coverage =
            Math.min(
                100,
                Math.round(
                    stats.seen.length /
                    TOTAL_BANK_SIZE *
                    100
                )
            );


        const diagnosticBonus =
            stats.diagnosticCompleted
                ? 10
                : 0;


        const examBonus =
            Math.min(
                15,
                stats.fullExamsCompleted *
                5
            );


        return Math.min(
            100,
            Math.round(
                accuracy *
                0.55 +
                coverage *
                0.20 +
                diagnosticBonus +
                examBonus
            )
        );

    }


    function readinessLabel() {

        const readiness =
            readinessPercent();


        if (
            readiness >= 90
        ) {

            return "Exam-Ready Range";

        }


        if (
            readiness >= 75
        ) {

            return "Strong Progress";

        }


        if (
            readiness >= 55
        ) {

            return "Building Mastery";

        }


        return "Foundation Stage";

    }


    // ========================================================================
    // PAGE REFERENCES
    // ========================================================================

    const dashboardIntro =
        document.querySelector(
            ".dashboard-intro"
        );


    const progressOverview =
        document.querySelector(
            ".progress-overview"
        );


    const coursesSection =
        document.querySelector(
            ".courses-section"
        );


    const weakAreasSection =
        document.querySelector(
            ".weak-areas-section"
        );


    const footer =
        document.querySelector(
            "footer"
        );


    const teasCard =
        document.querySelector(
            '.course-card[data-course="teas"]'
        );


    if (
        !footer ||
        !teasCard
    ) {

        return;

    }


    const teasButton =
        teasCard.querySelector(
            ".course-button"
        );


    if (
        teasButton
    ) {

        teasButton.textContent =
            "Open TEAS Center →";

    }


    // ========================================================================
    // TEAS STYLES
    // ========================================================================

    function injectStyles() {

        if (
            document.getElementById(
                "teas-ultimate-styles"
            )
        ) {

            return;

        }


        const style =
            document.createElement(
                "style"
            );


        style.id =
            "teas-ultimate-styles";


        style.textContent = `

            .teas-center-page {
                --teas-blue:#2563eb;
                --teas-purple:#7c3aed;
                --teas-green:#059669;
                --teas-orange:#d97706;
            }

            .teas-center-page .course-page-title {
                background:
                    linear-gradient(
                        135deg,
                        #eef2ff,
                        #f0fdf4,
                        #ffffff
                    );
                border-color:#c7d2fe;
            }

            .teas-hero-stats {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(150px,1fr)
                    );
                gap:12px;
                margin:22px 0;
            }

            .teas-stat-box {
                padding:18px;
                border-radius:16px;
                background:#fff;
                border:1px solid #e5e7eb;
            }

            .teas-stat-box strong {
                display:block;
                font-size:27px;
                color:#111827;
                margin-bottom:4px;
            }

            .teas-stat-box span {
                color:#667085;
                font-size:12px;
                font-weight:800;
            }

            .teas-action-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(210px,1fr)
                    );
                gap:14px;
                margin:22px 0 35px;
            }

            .teas-action-card {
                border:1px solid #e5e7eb;
                background:#fff;
                border-radius:18px;
                padding:20px;
                cursor:pointer;
                text-align:left;
                transition:.18s ease;
            }

            .teas-action-card:hover {
                transform:translateY(-2px);
                border-color:#818cf8;
                box-shadow:0 10px 28px rgba(15,23,42,.08);
            }

            .teas-action-icon {
                font-size:28px;
                margin-bottom:12px;
            }

            .teas-action-card h3 {
                margin:0 0 8px;
                color:#111827;
            }

            .teas-action-card p {
                margin:0;
                color:#667085;
                line-height:1.55;
                font-size:13px;
            }

            .teas-section-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(250px,1fr)
                    );
                gap:16px;
                margin-top:18px;
            }

            .teas-section-card {
                padding:22px;
                border-radius:18px;
                border:1px solid #e5e7eb;
                background:#fff;
            }

            .teas-section-card h3 {
                margin:8px 0;
            }

            .teas-section-card p {
                color:#667085;
                font-size:13px;
                line-height:1.6;
            }

            .teas-section-card button {
                margin-top:12px;
                width:100%;
            }

            .teas-progress-track {
                height:8px;
                background:#e5e7eb;
                border-radius:999px;
                overflow:hidden;
                margin-top:12px;
            }

            .teas-progress-fill {
                height:100%;
                background:
                    linear-gradient(
                        90deg,
                        #2563eb,
                        #7c3aed
                    );
                border-radius:999px;
            }

            .teas-skill-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(260px,1fr)
                    );
                gap:14px;
                margin-top:18px;
            }

            .teas-skill-card {
                padding:20px;
                border-radius:17px;
                border:1px solid #e5e7eb;
                background:#fff;
            }

            .teas-skill-card h3 {
                margin:0 0 8px;
            }

            .teas-skill-card p {
                color:#667085;
                line-height:1.6;
                font-size:13px;
            }

            .teas-skill-meta {
                display:flex;
                justify-content:space-between;
                gap:8px;
                margin-top:14px;
                font-size:12px;
                font-weight:800;
                color:#475467;
            }

            .teas-skill-actions {
                display:flex;
                gap:8px;
                margin-top:14px;
            }

            .teas-skill-actions button {
                flex:1;
            }

            .teas-crack-plan {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(220px,1fr)
                    );
                gap:12px;
                margin-top:18px;
            }

            .teas-plan-step {
                padding:18px;
                border-radius:16px;
                background:#f8fafc;
                border:1px solid #e2e8f0;
            }

            .teas-plan-number {
                width:34px;
                height:34px;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                background:#4f46e5;
                color:#fff;
                font-weight:900;
                margin-bottom:12px;
            }

            .teas-plan-step strong {
                display:block;
                margin-bottom:6px;
                color:#172033;
            }

            .teas-plan-step p {
                margin:0;
                color:#667085;
                line-height:1.55;
                font-size:13px;
            }

            .teas-strategy-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(260px,1fr)
                    );
                gap:14px;
                margin-top:18px;
            }

            .teas-strategy {
                padding:20px;
                border:1px solid #e5e7eb;
                border-radius:17px;
                background:#fff;
            }

            .teas-strategy-icon {
                font-size:26px;
            }

            .teas-strategy h3 {
                margin:10px 0 8px;
            }

            .teas-strategy p {
                margin:0;
                line-height:1.65;
                color:#667085;
                font-size:13px;
            }

            .teas-sheet-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(280px,1fr)
                    );
                gap:16px;
                margin-top:18px;
            }

            .teas-sheet {
                padding:20px;
                border-radius:18px;
                border:1px solid #e5e7eb;
                background:#fff;
            }

            .teas-sheet h3 {
                margin-top:0;
            }

            .teas-sheet-item {
                padding:10px 0;
                border-bottom:1px solid #eef2f6;
                color:#475467;
                line-height:1.5;
                font-size:13px;
            }

            .teas-sheet-item:last-child {
                border-bottom:0;
            }

            .teas-passage {
                margin-bottom:18px;
                padding:18px;
                background:#f8fafc;
                border-left:4px solid #6366f1;
                border-radius:10px;
                line-height:1.75;
                color:#344054;
            }

            .teas-multi-option {
                display:flex;
                gap:10px;
                align-items:flex-start;
            }

            .teas-checkbox {
                width:22px;
                height:22px;
                border:2px solid #cbd5e1;
                border-radius:5px;
                display:flex;
                align-items:center;
                justify-content:center;
                flex-shrink:0;
                margin-top:1px;
            }

            .quiz-option.selected .teas-checkbox {
                background:#4f46e5;
                border-color:#4f46e5;
                color:#fff;
            }

            .teas-order-pool,
            .teas-order-selected {
                display:flex;
                flex-direction:column;
                gap:9px;
                margin-top:14px;
            }

            .teas-order-item {
                border:1px solid #d0d5dd;
                border-radius:11px;
                padding:12px 14px;
                background:#fff;
                cursor:pointer;
                text-align:left;
                color:#344054;
            }

            .teas-order-selected {
                padding:14px;
                background:#f8fafc;
                border-radius:14px;
                min-height:55px;
            }

            .teas-hotspot-grid {
                display:grid;
                grid-template-columns:1fr 1fr;
                gap:8px;
                margin-top:18px;
                max-width:420px;
            }

            .teas-hotspot-area {
                min-height:120px;
                border:2px solid #cbd5e1;
                background:#f8fafc;
                border-radius:12px;
                cursor:pointer;
                display:flex;
                align-items:center;
                justify-content:center;
                text-align:center;
                padding:12px;
                color:#475467;
                font-weight:800;
            }

            .teas-hotspot-area.selected {
                border-color:#4f46e5;
                background:#eef2ff;
            }

            .teas-exam-banner {
                padding:12px 16px;
                background:#111827;
                color:#fff;
                display:flex;
                justify-content:space-between;
                gap:12px;
                align-items:center;
                border-radius:12px;
                margin-bottom:15px;
            }

            .teas-timer {
                font-size:20px;
                font-weight:900;
                font-variant-numeric:tabular-nums;
            }

            .teas-exam-nav {
                display:flex;
                flex-wrap:wrap;
                gap:5px;
                margin:14px 0;
            }

            .teas-exam-nav button {
                width:34px;
                height:34px;
                padding:0;
                border-radius:8px;
                border:1px solid #d0d5dd;
                background:#fff;
                cursor:pointer;
                font-size:11px;
            }

            .teas-exam-nav button.current {
                border-color:#4f46e5;
                background:#eef2ff;
            }

            .teas-exam-nav button.answered {
                background:#ecfdf3;
                border-color:#86efac;
            }

            .teas-exam-nav button.flagged {
                box-shadow:inset 0 0 0 2px #f59e0b;
            }

            .teas-readiness {
                padding:22px;
                border-radius:20px;
                background:
                    linear-gradient(
                        135deg,
                        #eef2ff,
                        #ecfdf5
                    );
                border:1px solid #c7d2fe;
                margin:20px 0;
            }

            .teas-readiness-number {
                font-size:42px;
                font-weight:900;
                color:#312e81;
            }

            .teas-disclaimer {
                margin-top:12px;
                font-size:12px;
                color:#667085;
                line-height:1.6;
            }

            body.dark-mode .teas-stat-box,
            body.dark-mode .teas-action-card,
            body.dark-mode .teas-section-card,
            body.dark-mode .teas-skill-card,
            body.dark-mode .teas-strategy,
            body.dark-mode .teas-sheet,
            body.dark-mode .teas-order-item {
                background:#111827;
                border-color:#334155;
            }

            body.dark-mode .teas-stat-box strong,
            body.dark-mode .teas-action-card h3,
            body.dark-mode .teas-section-card h3,
            body.dark-mode .teas-skill-card h3,
            body.dark-mode .teas-strategy h3,
            body.dark-mode .teas-sheet h3 {
                color:#f8fafc;
            }

            body.dark-mode .teas-action-card p,
            body.dark-mode .teas-section-card p,
            body.dark-mode .teas-skill-card p,
            body.dark-mode .teas-strategy p,
            body.dark-mode .teas-sheet-item {
                color:#cbd5e1;
            }

            body.dark-mode .teas-plan-step,
            body.dark-mode .teas-passage,
            body.dark-mode .teas-order-selected,
            body.dark-mode .teas-hotspot-area {
                background:#172033;
                border-color:#334155;
                color:#cbd5e1;
            }

            body.dark-mode .teas-plan-step strong {
                color:#f8fafc;
            }

            body.dark-mode .teas-readiness {
                background:
                    linear-gradient(
                        135deg,
                        #1e1b4b,
                        #052e2b
                    );
                border-color:#4338ca;
            }

            body.dark-mode .teas-readiness-number {
                color:#c7d2fe;
            }

            body.dark-mode .teas-exam-nav button {
                background:#111827;
                color:#f8fafc;
                border-color:#334155;
            }

        `;


        document.head.appendChild(
            style
        );

    }


    injectStyles();


    // ========================================================================
    // CREATE TEAS PAGE
    // ========================================================================

    const teasPage =
        document.createElement(
            "section"
        );


    teasPage.id =
        "teas-center-page";


    teasPage.className =
        "course-page teas-center-page hidden";


    footer.before(
        teasPage
    );


    // ========================================================================
    // MODAL
    // ========================================================================

    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "teas-study-overlay";


    overlay.className =
        "study-overlay hidden";


    overlay.innerHTML = `

        <div class="study-modal">

            <div class="study-modal-header">

                <div>

                    <p
                        id="teas-modal-label"
                        class="study-modal-label"
                    ></p>

                    <h2
                        id="teas-modal-title"
                    ></h2>

                </div>

                <button
                    id="teas-modal-close"
                    class="study-modal-close"
                >
                    ×
                </button>

            </div>

            <div
                id="teas-modal-content"
            ></div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const modalLabel =
        document.getElementById(
            "teas-modal-label"
        );


    const modalTitle =
        document.getElementById(
            "teas-modal-title"
        );


    const modalContent =
        document.getElementById(
            "teas-modal-content"
        );


    function openModal() {

        overlay.classList.remove(
            "hidden"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeModal() {

        stopExamTimer();

        overlay.classList.add(
            "hidden"
        );

        document.body.style.overflow =
            "";

    }


    document
        .getElementById(
            "teas-modal-close"
        )
        .addEventListener(
            "click",
            function () {

                if (
                    examActive
                ) {

                    const leave =
                        window.confirm(
                            "Exit this TEAS simulation? Your current simulation will not be saved."
                        );


                    if (
                        !leave
                    ) {

                        return;

                    }


                    examActive =
                        false;

                }


                closeModal();

            }
        );


    overlay.addEventListener(
        "click",
        function (
            event
        ) {

            if (
                event.target === overlay &&
                !examActive
            ) {

                closeModal();

            }

        }
    );


    // ========================================================================
    // PAGE NAVIGATION
    // ========================================================================

    function hideMainViews() {

        [
            dashboardIntro,
            progressOverview,
            coursesSection,
            weakAreasSection,
            footer
        ].forEach(
            function (
                item
            ) {

                if (
                    item
                ) {

                    item.classList.add(
                        "hidden"
                    );

                }

            }
        );


        document
            .querySelectorAll(
                ".course-page, .lesson-page"
            )
            .forEach(
                page =>
                    page.classList.add(
                        "hidden"
                    )
            );


        closeModal();

    }


    function showTeasCenter() {

        hideMainViews();

        renderTeasPage();

        teasPage.classList.remove(
            "hidden"
        );

        updateDashboardCard();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    function showDashboard() {

        document
            .querySelectorAll(
                ".course-page, .lesson-page"
            )
            .forEach(
                page =>
                    page.classList.add(
                        "hidden"
                    )
            );


        [
            dashboardIntro,
            progressOverview,
            coursesSection,
            weakAreasSection,
            footer
        ].forEach(
            function (
                item
            ) {

                if (
                    item
                ) {

                    item.classList.remove(
                        "hidden"
                    );

                }

            }
        );


        updateDashboardCard();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    document.addEventListener(

        "click",

        function (
            event
        ) {

            const card =
                event.target.closest(
                    '.course-card[data-course="teas"]'
                );


            if (
                !card
            ) {

                return;

            }


            event.preventDefault();

            event.stopPropagation();

            event.stopImmediatePropagation();

            showTeasCenter();

        },

        true

    );


    // ========================================================================
    // TEAS CENTER PAGE
    // ========================================================================

    function renderTeasPage() {

        const overallAccuracy =
            percentage(
                stats.totalCorrect,
                stats.totalAttempted
            );


        const skillCards =
            SKILLS.map(
                function (
                    skill
                ) {

                    const skillStat =
                        stats.skillStats[
                            skill.id
                        ];


                    const accuracy =
                        skillAccuracy(
                            skill.id
                        );


                    return `

                        <div class="teas-skill-card">

                            <h3>
                                ${skill.title}
                            </h3>

                            <p>
                                ${skill.subtitle}
                            </p>

                            <div class="teas-skill-meta">

                                <span>
                                    ${
                                        skillStat.attempted
                                    }
                                    attempted
                                </span>

                                <span>
                                    ${accuracy}%
                                    accuracy
                                </span>

                            </div>

                            <div class="teas-progress-track">

                                <div
                                    class="teas-progress-fill"
                                    style="width:${Math.min(100,accuracy)}%"
                                ></div>

                            </div>

                            <div class="teas-skill-actions">

                                <button
                                    class="study-button"
                                    data-teas-tips="${skill.id}"
                                >
                                    Tips
                                </button>

                                <button
                                    class="study-button primary"
                                    data-teas-skill="${skill.id}"
                                >
                                    Practice
                                </button>

                            </div>

                        </div>

                    `;

                }
            )
            .join("");


        const sectionCards =
            SECTION_ORDER.map(
                function (
                    sectionId
                ) {

                    const section =
                        TEAS_SECTIONS[
                            sectionId
                        ];


                    const accuracy =
                        sectionAccuracy(
                            sectionId
                        );


                    const attempted =
                        stats.sectionStats[
                            sectionId
                        ].attempted;


                    const sectionBank =
                        QUESTION_BANK.filter(
                            question =>
                                question.section ===
                                sectionId
                        ).length;


                    return `

                        <div class="teas-section-card">

                            <div style="font-size:30px;">
                                ${section.icon}
                            </div>

                            <h3>
                                ${section.title}
                            </h3>

                            <p>

                                ${sectionBank}
                                original practice questions
                                in your local bank.

                            </p>

                            <div class="teas-skill-meta">

                                <span>
                                    ${attempted}
                                    attempted
                                </span>

                                <span>
                                    ${accuracy}%
                                </span>

                            </div>

                            <div class="teas-progress-track">

                                <div
                                    class="teas-progress-fill"
                                    style="width:${Math.min(100,accuracy)}%"
                                ></div>

                            </div>

                            <button
                                class="study-button primary"
                                data-teas-section="${sectionId}"
                            >
                                Practice ${section.title} →
                            </button>

                        </div>

                    `;

                }
            )
            .join("");


        teasPage.innerHTML = `

            <div class="course-page-header">

                <button
                    id="teas-back-dashboard"
                    class="back-button"
                >
                    ← Dashboard
                </button>

                <div class="course-page-title">

                    <div class="course-page-icon">
                        🎓
                    </div>

                    <div>

                        <p class="section-label">
                            TEAS 7 COMPLETE PREP SYSTEM
                        </p>

                        <h1>
                            TEAS Ultimate Prep Center
                        </h1>

                        <p>

                            Learn the blueprint,
                            master every content area,
                            repair weak topics,
                            train under time pressure
                            and complete realistic
                            170-question simulations.

                        </p>

                    </div>

                </div>

            </div>


            <div class="teas-readiness">

                <p class="section-label">
                    YOUR TEAS READINESS
                </p>

                <div class="teas-readiness-number">
                    ${readinessPercent()}%
                </div>

                <h2>
                    ${readinessLabel()}
                </h2>

                <div class="teas-progress-track">

                    <div
                        class="teas-progress-fill"
                        style="width:${readinessPercent()}%"
                    ></div>

                </div>

                <p class="teas-disclaimer">

                    This is Nursing Study Hub's
                    preparation-readiness indicator,
                    not an official ATI score prediction.
                    Your goal here is 90%+ mastery
                    under realistic time limits.

                </p>

            </div>


            <div class="teas-hero-stats">

                <div class="teas-stat-box">

                    <strong>
                        ${TOTAL_BANK_SIZE}
                    </strong>

                    <span>
                        PRACTICE QUESTIONS
                    </span>

                </div>

                <div class="teas-stat-box">

                    <strong>
                        ${stats.totalAttempted}
                    </strong>

                    <span>
                        QUESTIONS ANSWERED
                    </span>

                </div>

                <div class="teas-stat-box">

                    <strong>
                        ${overallAccuracy}%
                    </strong>

                    <span>
                        PRACTICE ACCURACY
                    </span>

                </div>

                <div class="teas-stat-box">

                    <strong>
                        ${stats.weak.length}
                    </strong>

                    <span>
                        WEAK QUESTIONS
                    </span>

                </div>

                <div class="teas-stat-box">

                    <strong>
                        ${stats.bestFullExam}%
                    </strong>

                    <span>
                        BEST FULL SIMULATION
                    </span>

                </div>

            </div>


            <div class="teas-action-grid">

                <button
                    id="teas-diagnostic"
                    class="teas-action-card"
                >

                    <div class="teas-action-icon">
                        🩺
                    </div>

                    <h3>
                        Diagnostic Test
                    </h3>

                    <p>

                        Start with
                        ${DIAGNOSTIC_LENGTH}
                        questions to discover
                        your strongest and weakest
                        TEAS areas.

                    </p>

                </button>


                <button
                    id="teas-weak"
                    class="teas-action-card"
                >

                    <div class="teas-action-icon">
                        🎯
                    </div>

                    <h3>
                        Fix My Weak Areas
                    </h3>

                    <p>

                        Automatically retest
                        questions and concepts
                        you previously missed.

                    </p>

                </button>


                <button
                    id="teas-speed"
                    class="teas-action-card"
                >

                    <div class="teas-action-icon">
                        ⚡
                    </div>

                    <h3>
                        Speed Round
                    </h3>

                    <p>

                        Build fast recognition
                        with a short mixed
                        ${SPEED_ROUND_LENGTH}-question
                        drill.

                    </p>

                </button>


                <button
                    id="teas-full-exam"
                    class="teas-action-card"
                >

                    <div class="teas-action-icon">
                        ⏱️
                    </div>

                    <h3>
                        Full 170-Question Simulation
                    </h3>

                    <p>

                        Reading → Math →
                        Science → English
                        with section timers
                        and no instant feedback.

                    </p>

                </button>


                <button
                    id="teas-strategies"
                    class="teas-action-card"
                >

                    <div class="teas-action-icon">
                        🧠
                    </div>

                    <h3>
                        Tips & Tricks
                    </h3>

                    <p>

                        Pacing, elimination,
                        reading strategy,
                        math shortcuts,
                        science reasoning
                        and grammar tactics.

                    </p>

                </button>


                <button
                    id="teas-cheatsheet"
                    class="teas-action-card"
                >

                    <div class="teas-action-icon">
                        📌
                    </div>

                    <h3>
                        High-Yield Sheets
                    </h3>

                    <p>

                        Essential math formulas
                        and science facts for
                        rapid final review.

                    </p>

                </button>

            </div>


            <div class="module-section">

                <div class="module-heading">

                    <span class="module-number">
                        01
                    </span>

                    <div>

                        <p class="section-label">
                            THE CRACK PLAN
                        </p>

                        <h2>
                            How to Use This Until TEAS Feels Easy
                        </h2>

                    </div>

                </div>

                <div class="teas-crack-plan">

                    <div class="teas-plan-step">

                        <div class="teas-plan-number">
                            1
                        </div>

                        <strong>
                            Diagnose
                        </strong>

                        <p>

                            Take the diagnostic
                            without studying first.
                            We need your real baseline.

                        </p>

                    </div>


                    <div class="teas-plan-step">

                        <div class="teas-plan-number">
                            2
                        </div>

                        <strong>
                            Repair Weak Areas
                        </strong>

                        <p>

                            Drill your lowest skills
                            until accuracy rises above
                            85–90%.

                        </p>

                    </div>


                    <div class="teas-plan-step">

                        <div class="teas-plan-number">
                            3
                        </div>

                        <strong>
                            Reach 90% Mastery
                        </strong>

                        <p>

                            Practice each blueprint
                            category until errors become
                            uncommon rather than random.

                        </p>

                    </div>


                    <div class="teas-plan-step">

                        <div class="teas-plan-number">
                            4
                        </div>

                        <strong>
                            Add Time Pressure
                        </strong>

                        <p>

                            Once content is strong,
                            practice maintaining accuracy
                            while moving quickly.

                        </p>

                    </div>


                    <div class="teas-plan-step">

                        <div class="teas-plan-number">
                            5
                        </div>

                        <strong>
                            Simulate the Real Exam
                        </strong>

                        <p>

                            Complete repeated
                            170-question simulations
                            without pausing or looking up
                            answers.

                        </p>

                    </div>


                    <div class="teas-plan-step">

                        <div class="teas-plan-number">
                            6
                        </div>

                        <strong>
                            Final Weak-Area Sweep
                        </strong>

                        <p>

                            In the last phase,
                            spend most study time
                            on recurring mistakes,
                            not topics you already know.

                        </p>

                    </div>

                </div>

            </div>


            <div class="module-section">

                <div class="module-heading">

                    <span class="module-number">
                        02
                    </span>

                    <div>

                        <p class="section-label">
                            SUBJECT PRACTICE
                        </p>

                        <h2>
                            Practice by TEAS Section
                        </h2>

                    </div>

                </div>

                <div class="teas-section-grid">
                    ${sectionCards}
                </div>

            </div>


            <div class="module-section">

                <div class="module-heading">

                    <span class="module-number">
                        03
                    </span>

                    <div>

                        <p class="section-label">
                            BLUEPRINT MASTERY
                        </p>

                        <h2>
                            Practice by Skill
                        </h2>

                    </div>

                </div>

                <div class="teas-skill-grid">
                    ${skillCards}
                </div>

            </div>

        `;


        bindTeasPageEvents();

    }


    function bindTeasPageEvents() {

        document
            .getElementById(
                "teas-back-dashboard"
            )
            .addEventListener(
                "click",
                showDashboard
            );


        document
            .getElementById(
                "teas-diagnostic"
            )
            .addEventListener(
                "click",
                startDiagnostic
            );


        document
            .getElementById(
                "teas-weak"
            )
            .addEventListener(
                "click",
                startWeakPractice
            );


        document
            .getElementById(
                "teas-speed"
            )
            .addEventListener(
                "click",
                startSpeedRound
            );


        document
            .getElementById(
                "teas-full-exam"
            )
            .addEventListener(
                "click",
                startFullExam
            );


        document
            .getElementById(
                "teas-strategies"
            )
            .addEventListener(
                "click",
                showStrategies
            );


        document
            .getElementById(
                "teas-cheatsheet"
            )
            .addEventListener(
                "click",
                showCheatSheets
            );


        document
            .querySelectorAll(
                "[data-teas-section]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            startSectionPractice(
                                button.dataset
                                    .teasSection
                            );

                        }
                    );

                }
            );


        document
            .querySelectorAll(
                "[data-teas-skill]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            startSkillPractice(
                                button.dataset
                                    .teasSkill
                            );

                        }
                    );

                }
            );


        document
            .querySelectorAll(
                "[data-teas-tips]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            showSkillTips(
                                button.dataset
                                    .teasTips
                            );

                        }
                    );

                }
            );

    }


    // ========================================================================
    // STRATEGY / CHEAT SHEET MODALS
    // ========================================================================

    function showStrategies() {

        modalLabel.textContent =
            "TEAS TEST STRATEGY";


        modalTitle.textContent =
            "Tips & Tricks to Beat the Test";


        modalContent.innerHTML = `

            <div class="teas-strategy-grid">

                ${
                    STRATEGIES.map(
                        strategy => `

                            <div class="teas-strategy">

                                <div class="teas-strategy-icon">
                                    ${strategy.icon}
                                </div>

                                <h3>
                                    ${strategy.title}
                                </h3>

                                <p>
                                    ${strategy.body}
                                </p>

                            </div>

                        `
                    ).join("")
                }

            </div>

            <div
                class="important-box"
                style="margin-top:20px;"
            >

                <strong>
                    Your target
                </strong>

                <p>

                    Do not consider a topic finished
                    because you recognized the notes.
                    Consider it mastered when you can
                    repeatedly answer unfamiliar questions
                    correctly without help.

                </p>

            </div>

        `;


        openModal();

    }


    function showCheatSheets() {

        modalLabel.textContent =
            "TEAS HIGH-YIELD REVIEW";


        modalTitle.textContent =
            "Formula & Science Sheets";


        modalContent.innerHTML = `

            <div class="teas-sheet-grid">

                <div class="teas-sheet">

                    <h3>
                        🧮 Math Essentials
                    </h3>

                    ${
                        MATH_FORMULAS.map(
                            item =>
                                `<div class="teas-sheet-item">${item}</div>`
                        ).join("")
                    }

                </div>


                <div class="teas-sheet">

                    <h3>
                        🧬 Science Essentials
                    </h3>

                    ${
                        SCIENCE_HIGH_YIELD.map(
                            item =>
                                `<div class="teas-sheet-item">${item}</div>`
                        ).join("")
                    }

                </div>

            </div>

        `;


        openModal();

    }


    function showSkillTips(
        skillId
    ) {

        const skill =
            SKILL_MAP[
                skillId
            ];


        if (
            !skill
        ) {

            return;

        }


        modalLabel.textContent =
            TEAS_SECTIONS[
                skill.section
            ].title.toUpperCase();


        modalTitle.textContent =
            skill.title;


        modalContent.innerHTML = `

            <div class="important-box">

                <strong>
                    What this skill covers
                </strong>

                <p>
                    ${skill.subtitle}
                </p>

            </div>

            <div class="teas-strategy-grid">

                ${
                    skill.tips.map(
                        (
                            tip,
                            index
                        ) => `

                            <div class="teas-strategy">

                                <div class="teas-strategy-icon">
                                    ${
                                        [
                                            "🎯",
                                            "🧠",
                                            "⚡",
                                            "📌",
                                            "✅"
                                        ][
                                            index %
                                            5
                                        ]
                                    }
                                </div>

                                <p>
                                    ${tip}
                                </p>

                            </div>

                        `
                    ).join("")
                }

            </div>

            <div
                style="
                    display:flex;
                    justify-content:center;
                    margin-top:20px;
                "
            >

                <button
                    id="teas-tip-practice"
                    class="study-button primary"
                >
                    Practice This Skill →
                </button>

            </div>

        `;


        openModal();


        document
            .getElementById(
                "teas-tip-practice"
            )
            .addEventListener(
                "click",
                function () {

                    startSkillPractice(
                        skill.id
                    );

                }
            );

    }


    // ========================================================================
    // PRACTICE QUIZ STATE
    // ========================================================================

    let practiceQuestions = [];

    let practiceIndex = 0;

    let practiceCorrect = 0;

    let practiceSelected = null;

    let practiceSelectedMulti = [];

    let practiceNumeric = "";

    let practiceOrder = [];

    let practiceHotspot = null;

    let practiceChecked = false;

    let practiceMode = "practice";

    let practiceStartTime = 0;


    function startDiagnostic() {

        const perSection = {
            reading: 21,
            math: 18,
            science: 23,
            english: 18
        };


        practiceQuestions = [];


        SECTION_ORDER.forEach(
            function (
                section
            ) {

                practiceQuestions.push(
                    ...randomShuffle(
                        QUESTION_BANK.filter(
                            question =>
                                question.section ===
                                section
                        )
                    )
                        .slice(
                            0,
                            perSection[
                                section
                            ]
                        )
                );

            }
        );


        practiceQuestions =
            randomShuffle(
                practiceQuestions
            );


        startPracticeEngine(
            "DIAGNOSTIC",
            "TEAS Baseline Diagnostic",
            "diagnostic"
        );

    }


    function startSectionPractice(
        sectionId
    ) {

        const pool =
            QUESTION_BANK.filter(
                question =>
                    question.section ===
                    sectionId
            );


        practiceQuestions =
            randomShuffle(
                pool
            )
                .slice(
                    0,
                    STANDARD_PRACTICE_LENGTH
                );


        startPracticeEngine(
            TEAS_SECTIONS[
                sectionId
            ].title.toUpperCase(),
            `${TEAS_SECTIONS[sectionId].title} Practice`,
            "section"
        );

    }


    function startSkillPractice(
        skillId
    ) {

        const pool =
            QUESTION_BANK.filter(
                question =>
                    question.skill ===
                    skillId
            );


        practiceQuestions =
            randomShuffle(
                pool
            )
                .slice(
                    0,
                    Math.min(
                        STANDARD_PRACTICE_LENGTH,
                        pool.length
                    )
                );


        startPracticeEngine(
            TEAS_SECTIONS[
                SKILL_MAP[
                    skillId
                ].section
            ].title.toUpperCase(),
            SKILL_MAP[
                skillId
            ].title,
            "skill"
        );

    }


    function startWeakPractice() {

        const weak =
            stats.weak
                .map(
                    id =>
                        QUESTION_MAP[
                            id
                        ]
                )
                .filter(
                    Boolean
                );


        if (
            !weak.length
        ) {

            modalLabel.textContent =
                "TEAS WEAK AREAS";


            modalTitle.textContent =
                "No Saved Weak Questions";


            modalContent.innerHTML = `

                <div class="results">

                    <div class="results-icon">
                        🎯
                    </div>

                    <h2>
                        Nothing to repair yet
                    </h2>

                    <p class="results-message">

                        Take the diagnostic
                        or complete practice questions.
                        Questions you miss will
                        automatically collect here.

                    </p>

                    <button
                        id="teas-weak-diagnostic"
                        class="study-button primary"
                    >
                        Take Diagnostic →
                    </button>

                </div>

            `;


            openModal();


            document
                .getElementById(
                    "teas-weak-diagnostic"
                )
                .addEventListener(
                    "click",
                    startDiagnostic
                );


            return;

        }


        practiceQuestions =
            randomShuffle(
                weak
            )
                .slice(
                    0,
                    Math.min(
                        WEAK_PRACTICE_LENGTH,
                        weak.length
                    )
                );


        startPracticeEngine(
            "SMART REVIEW",
            "Fix My Weak Areas",
            "weak"
        );

    }


    function startSpeedRound() {

        practiceQuestions =
            randomShuffle(
                QUESTION_BANK
            )
                .slice(
                    0,
                    SPEED_ROUND_LENGTH
                );


        startPracticeEngine(
            "SPEED TRAINING",
            "20-Question TEAS Speed Round",
            "speed"
        );

    }


    function startPracticeEngine(
        label,
        title,
        mode
    ) {

        practiceIndex = 0;

        practiceCorrect = 0;

        practiceSelected = null;

        practiceSelectedMulti = [];

        practiceNumeric = "";

        practiceOrder = [];

        practiceHotspot = null;

        practiceChecked = false;

        practiceMode = mode;

        practiceStartTime =
            Date.now();


        modalLabel.textContent =
            label;


        modalTitle.textContent =
            title;


        openModal();

        renderPracticeQuestion();

    }


    // ========================================================================
    // QUESTION ANSWER HELPERS
    // ========================================================================

    function resetPracticeAnswer() {

        practiceSelected = null;

        practiceSelectedMulti = [];

        practiceNumeric = "";

        practiceOrder = [];

        practiceHotspot = null;

        practiceChecked = false;

    }


    function arraysEqual(
        a,
        b
    ) {

        if (
            a.length !==
            b.length
        ) {

            return false;

        }


        return a.every(
            (
                value,
                index
            ) =>
                value ===
                b[index]
        );

    }


    function sortedArraysEqual(
        a,
        b
    ) {

        const aa =
            [...a].sort();

        const bb =
            [...b].sort();


        return arraysEqual(
            aa,
            bb
        );

    }


    function currentPracticeAnswerReady(
        question
    ) {

        if (
            question.type ===
            "mcq"
        ) {

            return (
                practiceSelected !==
                null
            );

        }


        if (
            question.type ===
            "multiselect"
        ) {

            return (
                practiceSelectedMulti.length >
                0
            );

        }


        if (
            question.type ===
            "numeric"
        ) {

            return (
                String(
                    practiceNumeric
                )
                    .trim() !== ""
            );

        }


        if (
            question.type ===
            "ordered"
        ) {

            return (
                practiceOrder.length ===
                question.options.length
            );

        }


        if (
            question.type ===
            "hotspot"
        ) {

            return (
                practiceHotspot !==
                null
            );

        }


        return false;

    }


    function checkQuestionCorrect(
        question,
        answerState
    ) {

        if (
            question.type ===
            "mcq"
        ) {

            return (
                answerState.selected ===
                question.answer
            );

        }


        if (
            question.type ===
            "multiselect"
        ) {

            return sortedArraysEqual(
                answerState.multi,
                question.answers
            );

        }


        if (
            question.type ===
            "numeric"
        ) {

            const entered =
                Number(
                    String(
                        answerState.numeric
                    )
                        .replaceAll(
                            ",",
                            ""
                        )
                        .trim()
                );


            if (
                !Number.isFinite(
                    entered
                )
            ) {

                return false;

            }


            return (
                Math.abs(
                    entered -
                    Number(
                        question.answer
                    )
                ) <=
                Number(
                    question.tolerance ||
                    0
                )
            );

        }


        if (
            question.type ===
            "ordered"
        ) {

            return arraysEqual(
                answerState.order,
                question.answer
            );

        }


        if (
            question.type ===
            "hotspot"
        ) {

            return (
                answerState.hotspot ===
                question.answer
            );

        }


        return false;

    }


    // ========================================================================
    // RENDER PRACTICE QUESTION
    // ========================================================================

    function renderPracticeQuestion() {

        const question =
            practiceQuestions[
                practiceIndex
            ];


        if (
            !question
        ) {

            return;

        }


        const progress =
            Math.round(
                (
                    (
                        practiceIndex +
                        1
                    ) /
                    practiceQuestions.length
                ) *
                100
            );


        const answerHTML =
            renderQuestionInput(
                question,
                false
            );


        let feedback = "";


        if (
            practiceChecked
        ) {

            const correct =
                checkQuestionCorrect(
                    question,
                    {
                        selected:
                            practiceSelected,
                        multi:
                            practiceSelectedMulti,
                        numeric:
                            practiceNumeric,
                        order:
                            practiceOrder,
                        hotspot:
                            practiceHotspot
                    }
                );


            feedback = `

                <div
                    class="quiz-feedback ${
                        correct
                            ? "correct"
                            : "incorrect"
                    }"
                >

                    <strong>
                        ${
                            correct
                                ? "✓ Correct"
                                : "✕ Not yet"
                        }
                    </strong>

                    <p>
                        ${question.explanation}
                    </p>

                </div>

            `;

        }


        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>

                        Question
                        ${practiceIndex + 1}
                        of
                        ${practiceQuestions.length}

                    </span>

                    <span>
                        ${progress}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${progress}%"
                    ></div>

                </div>

            </div>


            <div class="quiz-body">

                <div class="quiz-card">

                    <p class="quiz-type">

                        ${
                            TEAS_SECTIONS[
                                question.section
                            ].title
                        }
                        •
                        ${
                            SKILL_MAP[
                                question.skill
                            ].title
                        }
                        •
                        ${
                            question.type
                                .toUpperCase()
                        }

                    </p>

                    ${
                        question.passage
                            ? `

                                <div class="teas-passage">
                                    ${question.passage}
                                </div>

                            `
                            : ""
                    }

                    <h3 class="quiz-question">
                        ${question.q}
                    </h3>

                    ${answerHTML}

                    ${feedback}

                </div>


                <div class="study-actions">

                    <button
                        id="teas-practice-exit"
                        class="study-button"
                    >
                        Exit
                    </button>

                    ${
                        practiceChecked
                            ? `

                                <button
                                    id="teas-practice-next"
                                    class="study-button primary"
                                >

                                    ${
                                        practiceIndex ===
                                        practiceQuestions.length -
                                        1
                                            ? "See Results →"
                                            : "Next Question →"
                                    }

                                </button>

                            `
                            : `

                                <button
                                    id="teas-practice-check"
                                    class="study-button primary"
                                    ${
                                        currentPracticeAnswerReady(
                                            question
                                        )
                                            ? ""
                                            : "disabled"
                                    }
                                >
                                    Check Answer
                                </button>

                            `
                    }

                </div>

            </div>

        `;


        bindPracticeInput(
            question
        );


        const exit =
            document.getElementById(
                "teas-practice-exit"
            );


        if (
            exit
        ) {

            exit.addEventListener(
                "click",
                closeModal
            );

        }


        const check =
            document.getElementById(
                "teas-practice-check"
            );


        if (
            check
        ) {

            check.addEventListener(
                "click",
                checkPracticeAnswer
            );

        }


        const next =
            document.getElementById(
                "teas-practice-next"
            );


        if (
            next
        ) {

            next.addEventListener(
                "click",
                function () {

                    if (
                        practiceIndex <
                        practiceQuestions.length -
                        1
                    ) {

                        practiceIndex++;

                        resetPracticeAnswer();

                        renderPracticeQuestion();

                    } else {

                        finishPractice();

                    }

                }
            );

        }

    }


    function renderQuestionInput(
        question,
        examMode
    ) {

        if (
            question.type ===
            "mcq"
        ) {

            return `

                <div class="quiz-options">

                    ${
                        question.choices.map(
                            (
                                choice,
                                index
                            ) => `

                                <button
                                    class="quiz-option ${
                                        (
                                            examMode
                                                ? getExamAnswer(
                                                    question
                                                ) === index
                                                : practiceSelected === index
                                        )
                                            ? "selected"
                                            : ""
                                    }"
                                    data-teas-mcq="${index}"
                                    ${
                                        (
                                            !examMode &&
                                            practiceChecked
                                        )
                                            ? "disabled"
                                            : ""
                                    }
                                >

                                    <span class="quiz-letter">
                                        ${
                                            String.fromCharCode(
                                                65 +
                                                index
                                            )
                                        }
                                    </span>

                                    <span>
                                        ${choice}
                                    </span>

                                </button>

                            `
                        ).join("")
                    }

                </div>

            `;

        }


        if (
            question.type ===
            "multiselect"
        ) {

            const selected =
                examMode
                    ? (
                        getExamAnswer(
                            question
                        ) ||
                        []
                    )
                    : practiceSelectedMulti;


            return `

                <p
                    style="
                        color:#667085;
                        font-size:12px;
                        margin-bottom:10px;
                    "
                >
                    Select all that apply.
                </p>

                <div class="quiz-options">

                    ${
                        question.choices.map(
                            (
                                choice,
                                index
                            ) => `

                                <button
                                    class="quiz-option ${
                                        selected.includes(
                                            index
                                        )
                                            ? "selected"
                                            : ""
                                    }"
                                    data-teas-multi="${index}"
                                    ${
                                        (
                                            !examMode &&
                                            practiceChecked
                                        )
                                            ? "disabled"
                                            : ""
                                    }
                                >

                                    <div class="teas-multi-option">

                                        <span class="teas-checkbox">
                                            ${
                                                selected.includes(
                                                    index
                                                )
                                                    ? "✓"
                                                    : ""
                                            }
                                        </span>

                                        <span>
                                            ${choice}
                                        </span>

                                    </div>

                                </button>

                            `
                        ).join("")
                    }

                </div>

            `;

        }


        if (
            question.type ===
            "numeric"
        ) {

            const value =
                examMode
                    ? (
                        getExamAnswer(
                            question
                        ) ??
                        ""
                    )
                    : practiceNumeric;


            return `

                <input
                    id="teas-numeric-input"
                    class="lab-numeric-input"
                    inputmode="decimal"
                    value="${escapeHTML(value)}"
                    placeholder="Enter your answer"
                    ${
                        (
                            !examMode &&
                            practiceChecked
                        )
                            ? "disabled"
                            : ""
                    }
                >

                ${
                    question.unit
                        ? `

                            <p
                                style="
                                    color:#667085;
                                    font-size:12px;
                                "
                            >
                                Unit:
                                ${question.unit}
                            </p>

                        `
                        : ""
                }

            `;

        }


        if (
            question.type ===
            "ordered"
        ) {

            const selected =
                examMode
                    ? (
                        getExamAnswer(
                            question
                        ) ||
                        []
                    )
                    : practiceOrder;


            const remaining =
                question.options.filter(
                    option =>
                        !selected.includes(
                            option
                        )
                );


            return `

                <p
                    style="
                        color:#667085;
                        font-size:12px;
                    "
                >
                    Click the choices in the correct order.
                </p>

                <div class="teas-order-selected">

                    ${
                        selected.length
                            ? selected.map(
                                (
                                    option,
                                    index
                                ) => `

                                    <div class="teas-order-item">
                                        ${index + 1}. ${option}
                                    </div>

                                `
                            ).join("")
                            : "<span style='color:#98a2b3;'>Your ordered response will appear here.</span>"
                    }

                </div>

                <div class="teas-order-pool">

                    ${
                        remaining.map(
                            option => `

                                <button
                                    class="teas-order-item"
                                    data-teas-order="${escapeHTML(option)}"
                                >
                                    ${option}
                                </button>

                            `
                        ).join("")
                    }

                </div>

                <button
                    id="teas-order-reset"
                    class="study-button"
                    style="margin-top:10px;"
                >
                    Reset Order
                </button>

            `;

        }


        if (
            question.type ===
            "hotspot"
        ) {

            const selected =
                examMode
                    ? getExamAnswer(
                        question
                    )
                    : practiceHotspot;


            return `

                <p
                    style="
                        color:#667085;
                        font-size:12px;
                    "
                >
                    Select the correct area.
                </p>

                <div class="teas-hotspot-grid">

                    ${
                        question.areas.map(
                            (
                                area,
                                index
                            ) => `

                                <button
                                    class="teas-hotspot-area ${
                                        selected === index
                                            ? "selected"
                                            : ""
                                    }"
                                    data-teas-hotspot="${index}"
                                >
                                    ${area}
                                </button>

                            `
                        ).join("")
                    }

                </div>

            `;

        }


        return "";

    }


    function bindPracticeInput(
        question
    ) {

        document
            .querySelectorAll(
                "[data-teas-mcq]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            if (
                                practiceChecked
                            ) {

                                return;

                            }


                            practiceSelected =
                                Number(
                                    button.dataset
                                        .teasMcq
                                );


                            renderPracticeQuestion();

                        }
                    );

                }
            );


        document
            .querySelectorAll(
                "[data-teas-multi]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            if (
                                practiceChecked
                            ) {

                                return;

                            }


                            const value =
                                Number(
                                    button.dataset
                                        .teasMulti
                                );


                            if (
                                practiceSelectedMulti.includes(
                                    value
                                )
                            ) {

                                practiceSelectedMulti =
                                    practiceSelectedMulti.filter(
                                        item =>
                                            item !==
                                            value
                                    );

                            } else {

                                practiceSelectedMulti.push(
                                    value
                                );

                            }


                            renderPracticeQuestion();

                        }
                    );

                }
            );


        const numericInput =
            document.getElementById(
                "teas-numeric-input"
            );


        if (
            numericInput
        ) {

            numericInput.addEventListener(
                "input",
                function () {

                    practiceNumeric =
                        numericInput.value;


                    const check =
                        document.getElementById(
                            "teas-practice-check"
                        );


                    if (
                        check
                    ) {

                        check.disabled =
                            !String(
                                practiceNumeric
                            )
                                .trim();

                    }

                }
            );

        }


        document
            .querySelectorAll(
                "[data-teas-order]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            practiceOrder.push(
                                button.dataset
                                    .teasOrder
                            );


                            renderPracticeQuestion();

                        }
                    );

                }
            );


        const reset =
            document.getElementById(
                "teas-order-reset"
            );


        if (
            reset
        ) {

            reset.addEventListener(
                "click",
                function () {

                    practiceOrder = [];

                    renderPracticeQuestion();

                }
            );

        }


        document
            .querySelectorAll(
                "[data-teas-hotspot]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            practiceHotspot =
                                Number(
                                    button.dataset
                                        .teasHotspot
                                );


                            renderPracticeQuestion();

                        }
                    );

                }
            );

    }


    function checkPracticeAnswer() {

        const question =
            practiceQuestions[
                practiceIndex
            ];


        if (
            !question ||
            practiceChecked ||
            !currentPracticeAnswerReady(
                question
            )
        ) {

            return;

        }


        const correct =
            checkQuestionCorrect(
                question,
                {
                    selected:
                        practiceSelected,
                    multi:
                        practiceSelectedMulti,
                    numeric:
                        practiceNumeric,
                    order:
                        practiceOrder,
                    hotspot:
                        practiceHotspot
                }
            );


        if (
            correct
        ) {

            practiceCorrect++;

        }


        recordQuestion(
            question,
            correct
        );


        practiceChecked =
            true;


        renderPracticeQuestion();

    }


    function finishPractice() {

        const score =
            Math.round(
                practiceCorrect /
                practiceQuestions.length *
                100
            );


        const seconds =
            Math.round(
                (
                    Date.now() -
                    practiceStartTime
                ) /
                1000
            );


        if (
            practiceMode ===
            "diagnostic"
        ) {

            stats.diagnosticCompleted =
                true;

            stats.diagnosticScore =
                score;

            saveStats();

        }


        modalContent.innerHTML = `

            <div class="results">

                <div class="results-icon">
                    ${
                        score >= 90
                            ? "🏆"
                            : score >= 75
                                ? "🔥"
                                : "📚"
                    }
                </div>

                <p class="study-modal-label">
                    PRACTICE RESULTS
                </p>

                <h2>
                    ${score}%
                </h2>

                <p class="results-message">

                    ${
                        score >= 90
                            ? "Excellent. You are performing at our mastery target for this set."
                            : score >= 75
                                ? "Strong progress. Repair the misses before moving on."
                                : "This set exposed useful weak areas. Review them now instead of simply retaking random questions."
                    }

                </p>

                <div class="result-grid">

                    <div class="result-card">

                        <strong>
                            ${practiceCorrect}
                        </strong>

                        <span>
                            Correct
                        </span>

                    </div>

                    <div class="result-card">

                        <strong>
                            ${
                                practiceQuestions.length -
                                practiceCorrect
                            }
                        </strong>

                        <span>
                            Missed
                        </span>

                    </div>

                    <div class="result-card">

                        <strong>
                            ${
                                Math.floor(
                                    seconds /
                                    60
                                )
                            }:
                            ${
                                String(
                                    seconds %
                                    60
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }
                        </strong>

                        <span>
                            Time
                        </span>

                    </div>

                </div>

                <div
                    class="study-actions-group"
                    style="
                        justify-content:center;
                        flex-wrap:wrap;
                    "
                >

                    ${
                        stats.weak.length
                            ? `

                                <button
                                    id="teas-results-weak"
                                    class="study-button"
                                >
                                    🎯 Fix Weak Areas
                                </button>

                            `
                            : ""
                    }

                    <button
                        id="teas-results-close"
                        class="study-button primary"
                    >
                        Return to TEAS Center
                    </button>

                </div>

            </div>

        `;


        const weak =
            document.getElementById(
                "teas-results-weak"
            );


        if (
            weak
        ) {

            weak.addEventListener(
                "click",
                startWeakPractice
            );

        }


        document
            .getElementById(
                "teas-results-close"
            )
            .addEventListener(
                "click",
                function () {

                    closeModal();

                    renderTeasPage();

                    updateDashboardCard();

                }
            );

    }


    // ========================================================================
    // FULL 170-QUESTION EXAM SIMULATOR
    // ========================================================================

    let examActive = false;

    let examSections = {};

    let examSectionIndex = 0;

    let examQuestionIndex = 0;

    let examAnswers = {};

    let examFlags = {};

    let examSectionSeconds = 0;

    let examTimer = null;


    function stopExamTimer() {

        if (
            examTimer
        ) {

            clearInterval(
                examTimer
            );

            examTimer = null;

        }

    }


    function startFullExam() {

        examActive =
            true;


        examSections = {};


        SECTION_ORDER.forEach(
            function (
                section
            ) {

                examSections[
                    section
                ] =
                    randomShuffle(
                        QUESTION_BANK.filter(
                            question =>
                                question.section ===
                                section
                        )
                    )
                        .slice(
                            0,
                            TEAS_SECTIONS[
                                section
                            ].totalQuestions
                        );

            }
        );


        examSectionIndex = 0;

        examQuestionIndex = 0;

        examAnswers = {};

        examFlags = {};


        modalLabel.textContent =
            "FULL TEAS SIMULATION";


        modalTitle.textContent =
            "170-Question Timed Exam";


        openModal();

        beginExamSection();

    }


    function currentExamSectionId() {

        return SECTION_ORDER[
            examSectionIndex
        ];

    }


    function currentExamQuestions() {

        return examSections[
            currentExamSectionId()
        ];

    }


    function currentExamQuestion() {

        return currentExamQuestions()[
            examQuestionIndex
        ];

    }


    function getExamAnswer(
        question
    ) {

        return examAnswers[
            question.id
        ];

    }


    function setExamAnswer(
        question,
        value
    ) {

        examAnswers[
            question.id
        ] =
            value;

    }


    function beginExamSection() {

        stopExamTimer();


        const sectionId =
            currentExamSectionId();


        examQuestionIndex =
            0;


        examSectionSeconds =
            TEAS_SECTIONS[
                sectionId
            ].minutes *
            60;


        examTimer =
            setInterval(
                function () {

                    examSectionSeconds--;


                    const timer =
                        document.getElementById(
                            "teas-exam-timer"
                        );


                    if (
                        timer
                    ) {

                        timer.textContent =
                            formatTime(
                                examSectionSeconds
                            );

                    }


                    if (
                        examSectionSeconds <=
                        0
                    ) {

                        finishExamSection(
                            true
                        );

                    }

                },
                1000
            );


        renderExamQuestion();

    }


    function formatTime(
        seconds
    ) {

        const minutes =
            Math.floor(
                seconds /
                60
            );


        const remainder =
            seconds %
            60;


        return `${minutes}:${String(
            remainder
        ).padStart(
            2,
            "0"
        )}`;

    }


    function examAnswerExists(
        question
    ) {

        const value =
            examAnswers[
                question.id
            ];


        if (
            Array.isArray(
                value
            )
        ) {

            return (
                value.length >
                0
            );

        }


        return (
            value !== undefined &&
            value !== null &&
            String(
                value
            ).trim() !==
            ""
        );

    }


    function renderExamQuestion() {

        if (
            !examActive
        ) {

            return;

        }


        const sectionId =
            currentExamSectionId();


        const section =
            TEAS_SECTIONS[
                sectionId
            ];


        const questions =
            currentExamQuestions();


        const question =
            currentExamQuestion();


        const nav =
            questions.map(
                function (
                    item,
                    index
                ) {

                    const classes = [
                        index ===
                        examQuestionIndex
                            ? "current"
                            : "",
                        examAnswerExists(
                            item
                        )
                            ? "answered"
                            : "",
                        examFlags[
                            item.id
                        ]
                            ? "flagged"
                            : ""
                    ]
                        .filter(
                            Boolean
                        )
                        .join(" ");


                    return `

                        <button
                            class="${classes}"
                            data-exam-nav="${index}"
                        >
                            ${index + 1}
                        </button>

                    `;

                }
            )
            .join("");


        modalLabel.textContent =
            `SECTION ${examSectionIndex + 1} OF 4`;


        modalTitle.textContent =
            section.title;


        modalContent.innerHTML = `

            <div class="teas-exam-banner">

                <strong>
                    ${section.icon}
                    ${section.title}
                </strong>

                <div
                    id="teas-exam-timer"
                    class="teas-timer"
                >
                    ${formatTime(
                        examSectionSeconds
                    )}
                </div>

            </div>


            <div class="teas-exam-nav">
                ${nav}
            </div>


            <div class="quiz-card">

                <p class="quiz-type">

                    QUESTION
                    ${examQuestionIndex + 1}
                    OF
                    ${questions.length}

                    ${
                        examFlags[
                            question.id
                        ]
                            ? " • 🚩 FLAGGED"
                            : ""
                    }

                </p>

                ${
                    question.passage
                        ? `

                            <div class="teas-passage">
                                ${question.passage}
                            </div>

                        `
                        : ""
                }

                <h3 class="quiz-question">
                    ${question.q}
                </h3>

                ${
                    renderQuestionInput(
                        question,
                        true
                    )
                }

            </div>


            <div
                class="study-actions"
                style="flex-wrap:wrap;"
            >

                <div class="study-actions-group">

                    <button
                        id="exam-prev"
                        class="study-button"
                        ${
                            examQuestionIndex ===
                            0
                                ? "disabled"
                                : ""
                        }
                    >
                        ← Previous
                    </button>

                    <button
                        id="exam-flag"
                        class="study-button"
                    >
                        ${
                            examFlags[
                                question.id
                            ]
                                ? "🚩 Unflag"
                                : "⚑ Flag"
                        }
                    </button>

                </div>

                <div class="study-actions-group">

                    ${
                        examQuestionIndex <
                        questions.length -
                        1
                            ? `

                                <button
                                    id="exam-next"
                                    class="study-button primary"
                                >
                                    Next →
                                </button>

                            `
                            : `

                                <button
                                    id="exam-close-section"
                                    class="study-button primary"
                                >
                                    Close ${section.title} Section →
                                </button>

                            `
                    }

                </div>

            </div>

            <p
                style="
                    margin-top:14px;
                    color:#667085;
                    font-size:12px;
                    line-height:1.6;
                "
            >

                Exam mode does not show
                answer explanations.
                You may review questions
                in this section until you
                close the section.

            </p>

        `;


        bindExamInputs(
            question
        );


        document
            .querySelectorAll(
                "[data-exam-nav]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            examQuestionIndex =
                                Number(
                                    button.dataset
                                        .examNav
                                );


                            renderExamQuestion();

                        }
                    );

                }
            );


        const previous =
            document.getElementById(
                "exam-prev"
            );


        if (
            previous
        ) {

            previous.addEventListener(
                "click",
                function () {

                    if (
                        examQuestionIndex >
                        0
                    ) {

                        examQuestionIndex--;

                        renderExamQuestion();

                    }

                }
            );

        }


        document
            .getElementById(
                "exam-flag"
            )
            .addEventListener(
                "click",
                function () {

                    examFlags[
                        question.id
                    ] =
                        !examFlags[
                            question.id
                        ];


                    renderExamQuestion();

                }
            );


        const next =
            document.getElementById(
                "exam-next"
            );


        if (
            next
        ) {

            next.addEventListener(
                "click",
                function () {

                    examQuestionIndex++;

                    renderExamQuestion();

                }
            );

        }


        const closeSection =
            document.getElementById(
                "exam-close-section"
            );


        if (
            closeSection
        ) {

            closeSection.addEventListener(
                "click",
                function () {

                    const unanswered =
                        questions.filter(
                            question =>
                                !examAnswerExists(
                                    question
                                )
                        ).length;


                    const message =
                        unanswered
                            ? `You still have ${unanswered} unanswered question(s). Once this section is closed, you cannot return. Close it anyway?`
                            : `Close the ${section.title} section? You will not be able to return.`;


                    if (
                        window.confirm(
                            message
                        )
                    ) {

                        finishExamSection(
                            false
                        );

                    }

                }
            );

        }

    }


    function bindExamInputs(
        question
    ) {

        document
            .querySelectorAll(
                "[data-teas-mcq]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            setExamAnswer(
                                question,
                                Number(
                                    button.dataset
                                        .teasMcq
                                )
                            );


                            renderExamQuestion();

                        }
                    );

                }
            );


        document
            .querySelectorAll(
                "[data-teas-multi]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            const value =
                                Number(
                                    button.dataset
                                        .teasMulti
                                );


                            const current =
                                Array.isArray(
                                    getExamAnswer(
                                        question
                                    )
                                )
                                    ? [
                                        ...getExamAnswer(
                                            question
                                        )
                                    ]
                                    : [];


                            if (
                                current.includes(
                                    value
                                )
                            ) {

                                setExamAnswer(
                                    question,
                                    current.filter(
                                        item =>
                                            item !==
                                            value
                                    )
                                );

                            } else {

                                current.push(
                                    value
                                );

                                setExamAnswer(
                                    question,
                                    current
                                );

                            }


                            renderExamQuestion();

                        }
                    );

                }
            );


        const numericInput =
            document.getElementById(
                "teas-numeric-input"
            );


        if (
            numericInput
        ) {

            numericInput.addEventListener(
                "input",
                function () {

                    setExamAnswer(
                        question,
                        numericInput.value
                    );

                }
            );

        }


        document
            .querySelectorAll(
                "[data-teas-order]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            const current =
                                Array.isArray(
                                    getExamAnswer(
                                        question
                                    )
                                )
                                    ? [
                                        ...getExamAnswer(
                                            question
                                        )
                                    ]
                                    : [];


                            current.push(
                                button.dataset
                                    .teasOrder
                            );


                            setExamAnswer(
                                question,
                                current
                            );


                            renderExamQuestion();

                        }
                    );

                }
            );


        const reset =
            document.getElementById(
                "teas-order-reset"
            );


        if (
            reset
        ) {

            reset.addEventListener(
                "click",
                function () {

                    setExamAnswer(
                        question,
                        []
                    );


                    renderExamQuestion();

                }
            );

        }


        document
            .querySelectorAll(
                "[data-teas-hotspot]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            setExamAnswer(
                                question,
                                Number(
                                    button.dataset
                                        .teasHotspot
                                )
                            );


                            renderExamQuestion();

                        }
                    );

                }
            );

    }


    function finishExamSection(
        timedOut
    ) {

        stopExamTimer();


        if (
            examSectionIndex <
            SECTION_ORDER.length -
            1
        ) {

            const completedSection =
                TEAS_SECTIONS[
                    currentExamSectionId()
                ].title;


            examSectionIndex++;

            examQuestionIndex = 0;


            modalContent.innerHTML = `

                <div class="results">

                    <div class="results-icon">
                        ${
                            timedOut
                                ? "⏰"
                                : "✓"
                        }
                    </div>

                    <p class="study-modal-label">
                        SECTION CLOSED
                    </p>

                    <h2>
                        ${completedSection} Complete
                    </h2>

                    <p class="results-message">

                        You cannot return to
                        the closed section.

                        Next:
                        ${
                            TEAS_SECTIONS[
                                currentExamSectionId()
                            ].title
                        }.

                    </p>

                    <button
                        id="exam-next-section"
                        class="study-button primary"
                    >
                        Begin Next Section →
                    </button>

                </div>

            `;


            document
                .getElementById(
                    "exam-next-section"
                )
                .addEventListener(
                    "click",
                    beginExamSection
                );


            return;

        }


        finishFullExam();

    }


    function finishFullExam() {

        stopExamTimer();


        examActive =
            false;


        const allQuestions =
            SECTION_ORDER.flatMap(
                section =>
                    examSections[
                        section
                    ]
            );


        let correct =
            0;


        const sectionResults = {};


        SECTION_ORDER.forEach(
            section => {

                sectionResults[
                    section
                ] = {
                    correct: 0,
                    total:
                        examSections[
                            section
                        ].length
                };

            }
        );


        allQuestions.forEach(
            function (
                question
            ) {

                const raw =
                    examAnswers[
                        question.id
                    ];


                let answerState = {
                    selected: null,
                    multi: [],
                    numeric: "",
                    order: [],
                    hotspot: null
                };


                if (
                    question.type ===
                    "mcq"
                ) {

                    answerState.selected =
                        raw;

                }


                if (
                    question.type ===
                    "multiselect"
                ) {

                    answerState.multi =
                        Array.isArray(
                            raw
                        )
                            ? raw
                            : [];

                }


                if (
                    question.type ===
                    "numeric"
                ) {

                    answerState.numeric =
                        raw ?? "";

                }


                if (
                    question.type ===
                    "ordered"
                ) {

                    answerState.order =
                        Array.isArray(
                            raw
                        )
                            ? raw
                            : [];

                }


                if (
                    question.type ===
                    "hotspot"
                ) {

                    answerState.hotspot =
                        raw;

                }


                const isCorrect =
                    checkQuestionCorrect(
                        question,
                        answerState
                    );


                if (
                    isCorrect
                ) {

                    correct++;

                    sectionResults[
                        question.section
                    ].correct++;

                }


                recordQuestion(
                    question,
                    isCorrect
                );

            }
        );


        const score =
            Math.round(
                correct /
                allQuestions.length *
                100
            );


        stats.fullExamsCompleted++;

        stats.bestFullExam =
            Math.max(
                stats.bestFullExam,
                score
            );


        saveStats();


        let history = [];

        try {

            history =
                JSON.parse(
                    localStorage.getItem(
                        EXAM_HISTORY_KEY
                    ) || "[]"
                );

        } catch {

            history = [];

        }


        history.push({
            date:
                new Date()
                    .toISOString(),
            score,
            sectionResults
        });


        localStorage.setItem(
            EXAM_HISTORY_KEY,
            JSON.stringify(
                history.slice(
                    -20
                )
            )
        );


        modalLabel.textContent =
            "FULL SIMULATION RESULTS";


        modalTitle.textContent =
            "TEAS Practice Exam Complete";


        modalContent.innerHTML = `

            <div class="results">

                <div class="results-icon">
                    ${
                        score >= 90
                            ? "🏆"
                            : score >= 80
                                ? "🔥"
                                : "📚"
                    }
                </div>

                <p class="study-modal-label">
                    PRACTICE ACCURACY
                </p>

                <div class="score-circle">

                    <strong>
                        ${score}%
                    </strong>

                    <span>
                        170 QUESTIONS
                    </span>

                </div>

                <p class="results-message">

                    ${
                        score >= 90
                            ? "Excellent performance. Continue repeating full simulations and eliminate any recurring weak areas."
                            : score >= 80
                                ? "Strong result. Your next gains should come from the specific sections and questions you missed."
                                : "This simulation identified where your study time will produce the biggest improvement."
                    }

                </p>


                <div class="result-grid">

                    ${
                        SECTION_ORDER.map(
                            section => `

                                <div class="result-card">

                                    <strong>

                                        ${
                                            Math.round(
                                                sectionResults[
                                                    section
                                                ].correct /
                                                sectionResults[
                                                    section
                                                ].total *
                                                100
                                            )
                                        }%

                                    </strong>

                                    <span>
                                        ${
                                            TEAS_SECTIONS[
                                                section
                                            ].title
                                        }
                                    </span>

                                </div>

                            `
                        ).join("")
                    }

                </div>


                <div
                    class="important-box"
                    style="margin-top:20px;"
                >

                    <strong>
                        Important
                    </strong>

                    <p>

                        This percentage is
                        Nursing Study Hub practice
                        accuracy. It is not an
                        official ATI TEAS scaled score.

                    </p>

                </div>


                <div
                    class="study-actions-group"
                    style="
                        justify-content:center;
                        flex-wrap:wrap;
                        margin-top:20px;
                    "
                >

                    <button
                        id="exam-results-weak"
                        class="study-button"
                    >
                        🎯 Repair Missed Questions
                    </button>

                    <button
                        id="exam-results-done"
                        class="study-button primary"
                    >
                        Return to TEAS Center
                    </button>

                </div>

            </div>

        `;


        document
            .getElementById(
                "exam-results-weak"
            )
            .addEventListener(
                "click",
                startWeakPractice
            );


        document
            .getElementById(
                "exam-results-done"
            )
            .addEventListener(
                "click",
                function () {

                    closeModal();

                    renderTeasPage();

                    updateDashboardCard();

                }
            );

    }


    // ========================================================================
    // DASHBOARD PROGRESS
    // ========================================================================

    function updateDashboardCard() {

        const readiness =
            readinessPercent();


        const spans =
            teasCard.querySelectorAll(
                ".course-progress span"
            );


        if (
            spans.length >
            1
        ) {

            spans[1].textContent =
                `${readiness}%`;

        }


        const fill =
            teasCard.querySelector(
                ".course-progress-fill"
            );


        if (
            fill
        ) {

            fill.style.width =
                `${readiness}%`;

        }


        const questionsAnswered =
            document.getElementById(
                "questions-answered"
            );


        if (
            questionsAnswered
        ) {

            questionsAnswered.textContent =
                Number(
                    localStorage.getItem(
                        SHARED_QUESTIONS_KEY
                    )
                ) || 0;

        }

    }


    // ========================================================================
    // ESCAPE
    // ========================================================================

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


            if (
                overlay.classList.contains(
                    "hidden"
                )
            ) {

                return;

            }


            if (
                examActive
            ) {

                return;

            }


            closeModal();

        }
    );


    // ========================================================================
    // INITIALIZATION
    // ========================================================================

    renderTeasPage();

    updateDashboardCard();

});