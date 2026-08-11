// ============================================================================
// NURSING STUDY HUB
// MICROBIOLOGY — EXPANDED FINAL COURSE
// Nursing / Health Sciences Prerequisite Microbiology
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================================
    // COURSE SETTINGS
    // ========================================================================

    const COURSE_TITLE = "Microbiology";
    const PASS_SCORE = 90;
    const TOPIC_QUIZ_LENGTH = 12;
    const MIXED_PRACTICE_LENGTH = 30;
    const FINAL_EXAM_LENGTH = 60;
    const SHARED_QUESTIONS_KEY = "nursingStudyHubQuestionsAnswered";

    // ========================================================================
    // MODULES
    // ========================================================================

    const MODULES = [
        { number: 1, title: "Foundations, Microscopy & Laboratory Skills" },
        { number: 2, title: "Bacterial Structure, Growth & Genetics" },
        { number: 3, title: "Microbial Control & Antimicrobial Therapy" },
        { number: 4, title: "Host-Microbe Relationships & Immunity" },
        { number: 5, title: "Medically Important Bacteria" },
        { number: 6, title: "Viruses & Viral Diseases" },
        { number: 7, title: "Fungi, Protozoa & Helminths" },
        { number: 8, title: "Clinical Microbiology, Epidemiology & Infection Prevention" }
    ];

    // ========================================================================
    // HELPERS FOR COURSE DATA
    // ========================================================================

    function topic(
        id,
        number,
        module,
        title,
        description,
        objectives,
        facts,
        sections,
        clinical,
        practice,
        traps,
        memory,
        summary,
        questions,
        tags = ["Theory", "Clinical", "Quiz"]
    ) {
        return {
            id,
            number,
            module,
            title,
            description,
            objectives,
            facts,
            sections,
            clinical,
            practice,
            traps,
            memory,
            summary,
            questions,
            tags
        };
    }

    function section(label, title, paragraphs, table = null) {
        return { label, title, paragraphs, table };
    }

    // ========================================================================
    // COMPLETE COURSE DATA
    // ========================================================================

    const MICRO_TOPICS = [

        // ====================================================================
        // MODULE 1
        // ====================================================================

        topic(
            "microbial-world",
            1,
            1,
            "The Microbial World & History of Microbiology",
            "Build the foundation of microbiology by learning what microorganisms are, how germ theory developed, how microbes interact with humans, and why microbiology matters in nursing practice.",
            [
                "Define microbiology, microorganism, pathogen, infection and disease.",
                "Identify the major groups of microorganisms and infectious agents.",
                "Differentiate colonization from infection.",
                "Explain spontaneous generation versus biogenesis.",
                "Describe the contributions of Pasteur, Koch, Jenner and Fleming.",
                "Explain why most microorganisms are not human pathogens."
            ],
            [
                ["Microbiology", "The study of microorganisms and infectious agents."],
                ["Microorganism", "A microscopic living organism such as a bacterium, fungus or protozoan."],
                ["Pathogen", "A microorganism or infectious agent capable of causing disease."],
                ["Colonization", "Presence and multiplication of microorganisms without tissue invasion or disease."],
                ["Infection", "Invasion and multiplication of microorganisms within a host."],
                ["Disease", "A disturbance of normal body structure or function."],
                ["Biogenesis", "The principle that living organisms arise from preexisting living organisms."],
                ["Germ theory", "The concept that microorganisms can cause infectious disease."],
                ["Normal microbiota", "Microorganisms normally living on or within the human body."],
                ["Microbiome", "The microbial community, its genes and its ecological interactions."]
            ],
            [
                section(
                    "MICROBIAL DIVERSITY",
                    "Microbiology Includes Many Different Forms of Life",
                    [
                        "Microbiology includes bacteria, archaea, fungi, protozoa, microscopic algae and infectious agents such as viruses. These organisms are grouped together because of their microscopic size, not because they are biologically identical.",
                        "Bacteria and archaea are prokaryotic. Fungi and protozoa are eukaryotic. Viruses are acellular infectious agents that depend on living cells for replication.",
                        "This distinction becomes important in treatment because antibacterial drugs, antifungal drugs and antiviral drugs act on very different targets."
                    ]
                ),
                section(
                    "BENEFICIAL MICROBES",
                    "Most Microorganisms Are Not Pathogens",
                    [
                        "Only a small portion of known microorganisms regularly cause human disease. Many microorganisms recycle nutrients, participate in food production and maintain ecosystems.",
                        "Human body surfaces also contain microbial communities. Intestinal bacteria participate in vitamin metabolism and compete with invading organisms. Skin and vaginal microbiota help limit colonization by certain pathogens.",
                        "For healthcare workers, microbiology is therefore not simply about eliminating microbes. It is about understanding which organisms are dangerous, how they spread and how normal microbial communities protect the host."
                    ]
                ),
                section(
                    "HISTORY",
                    "From Spontaneous Generation to Germ Theory",
                    [
                        "Spontaneous generation was the old belief that living organisms could arise directly from nonliving material. Controlled experiments by scientists such as Francesco Redi and Louis Pasteur challenged this idea.",
                        "Pasteur used swan-neck flasks that allowed air into sterile broth while trapping airborne particles. Broth remained sterile unless microorganisms could physically reach it. These experiments strongly supported biogenesis.",
                        "Pasteur also contributed to fermentation science, pasteurization and vaccine development."
                    ]
                ),
                section(
                    "KOCH",
                    "Linking Specific Microbes With Specific Diseases",
                    [
                        "Robert Koch developed methods for isolating microorganisms in pure culture and connecting particular organisms with particular diseases.",
                        "His postulates were historically important because they transformed germ theory into an experimentally testable framework.",
                        "Modern microbiology recognizes limitations. Some pathogens cannot be cultured easily, some healthy people carry pathogens without symptoms and some diseases involve several organisms rather than one."
                    ]
                ),
                section(
                    "NURSING CONNECTION",
                    "Why Microbiology Matters at the Bedside",
                    [
                        "Nurses encounter microbiology when collecting cultures, caring for wounds, administering antimicrobial drugs, applying isolation precautions and recognizing possible sepsis.",
                        "Understanding transmission mechanisms explains why hand hygiene, PPE, respiratory isolation and device removal work.",
                        "Understanding microbial biology also prevents common errors such as assuming antibiotics are useful for viral infections or assuming every positive culture means clinical disease."
                    ]
                )
            ],
            {
                title: "Colonization Is Not the Same as Infection",
                scenario: "A patient's nasal screening swab detects Staphylococcus aureus, but the patient has no fever, drainage, pain or other evidence of disease.",
                connection: "The organism may be colonizing the nose. Microbial detection alone does not prove tissue invasion or clinical infection."
            },
            [
                ["Why is the statement 'all bacteria are dangerous' incorrect?", "Most bacteria are not human pathogens.", ["Many are environmental.", "Many are harmless commensals.", "Some protect against pathogen colonization."]],
                ["What did Pasteur's swan-neck flask experiments support?", "Biogenesis.", ["Microbes appeared when contamination occurred.", "Sterile broth remained sterile when microbes were excluded."]],
                ["Why do nurses need to understand colonization?", "Because culture positivity does not automatically mean infection.", ["Clinical signs, specimen source and patient condition must be considered."]]
            ],
            [
                "Colonization does not automatically require antimicrobial treatment.",
                "A microorganism is not automatically a pathogen.",
                "Viruses are infectious agents but are not cellular organisms.",
                "Koch's postulates are historically important but have modern limitations."
            ],
            [
                "BIOGENESIS = BIO means life; life comes from existing life.",
                "COLONIZATION = microbes are present; INFECTION = microbes invade.",
                "Think of microbiology as three questions: What is the organism? How does it spread? What damage can it cause?"
            ],
            [
                "Microbiology studies microscopic organisms and infectious agents.",
                "Most microorganisms do not cause disease.",
                "Normal microbiota can protect the host.",
                "Pasteur strongly supported biogenesis.",
                "Koch connected specific organisms with specific diseases.",
                "Microbiology directly supports infection prevention and safe nursing care."
            ],
            [
                {
                    id: "mw1",
                    type: "mcq",
                    q: "A patient has Staphylococcus aureus detected from a nasal screening swab but has no symptoms. Which term best describes this finding?",
                    choices: ["Sepsis", "Colonization", "Sterilization", "Systemic infection"],
                    answer: 1,
                    explanation: "Colonization means microorganisms are present and may multiply without producing tissue invasion or disease."
                },
                {
                    id: "mw2",
                    type: "mcq",
                    q: "Which scientist's swan-neck flask experiments strongly supported biogenesis?",
                    choices: ["Louis Pasteur", "Robert Koch", "Alexander Fleming", "Edward Jenner"],
                    answer: 0,
                    explanation: "Pasteur demonstrated that sterile broth remained sterile when contamination by microorganisms was prevented."
                },
                {
                    id: "mw3",
                    type: "mcq",
                    q: "Which statement about normal microbiota is most accurate?",
                    choices: [
                        "All normal microbiota are pathogens.",
                        "Normal microbiota can contribute to colonization resistance.",
                        "Normal microbiota are found only in the intestine.",
                        "Normal microbiota should always be eliminated with antibiotics."
                    ],
                    answer: 1,
                    explanation: "Normal microbiota can compete with potential pathogens and reduce their ability to establish colonization."
                }
            ]
        ),

        topic(
            "microscopy",
            2,
            1,
            "Microscopy, Magnification & Resolution",
            "Master the principles of light microscopy, total magnification, resolution, oil immersion and electron microscopy.",
            [
                "Define magnification and resolution.",
                "Calculate total magnification.",
                "Identify major parts of the compound light microscope.",
                "Explain why oil immersion improves resolution.",
                "Compare bright-field, phase-contrast, fluorescence and electron microscopy.",
                "Differentiate SEM and TEM."
            ],
            [
                ["Magnification", "Apparent enlargement of an image."],
                ["Resolution", "Ability to distinguish two nearby points as separate."],
                ["Ocular lens", "Eyepiece lens, commonly 10×."],
                ["Objective lens", "Lens closest to the specimen."],
                ["Condenser", "Focuses light onto the specimen."],
                ["Iris diaphragm", "Controls the amount of light reaching the specimen."],
                ["Oil immersion", "Use of immersion oil with a 100× objective to improve resolution."],
                ["SEM", "Scanning electron microscopy used mainly for surface detail."],
                ["TEM", "Transmission electron microscopy used mainly for internal ultrastructure."],
                ["Fluorescence microscopy", "Uses fluorescent molecules to identify structures or organisms."]
            ],
            [
                section(
                    "MAGNIFICATION",
                    "Making an Image Larger",
                    [
                        "A compound light microscope typically contains an ocular lens and several objective lenses. Total magnification equals ocular magnification multiplied by objective magnification.",
                        "A 10× ocular combined with a 40× objective produces 400× total magnification. A 10× ocular with a 100× objective produces 1000×.",
                        "Magnification alone is not enough. An image can be enlarged without revealing more detail if resolution is poor."
                    ],
                    [
                        ["Objective", "Typical Name", "Total With 10× Ocular"],
                        ["4×", "Scanning", "40×"],
                        ["10×", "Low power", "100×"],
                        ["40×", "High dry", "400×"],
                        ["100×", "Oil immersion", "1000×"]
                    ]
                ),
                section(
                    "RESOLUTION",
                    "Resolution Determines Useful Detail",
                    [
                        "Resolution refers to the ability to distinguish two points as separate. It is one of the most important concepts in microscopy.",
                        "Visible-light microscopes have a resolution limit determined partly by the wavelength of light and the optical system.",
                        "Electron microscopes use electron beams with much shorter effective wavelengths and therefore achieve much greater resolution."
                    ]
                ),
                section(
                    "OIL IMMERSION",
                    "Why Oil Improves the Image",
                    [
                        "Light bends when it passes from glass into air. At high magnification, this refraction causes light to miss the objective lens.",
                        "Immersion oil has a refractive index similar to glass. It reduces bending and allows more light to enter the 100× objective.",
                        "Oil does not change the objective's labeled magnification. Its major benefit is improved resolving ability."
                    ]
                ),
                section(
                    "LIGHT MICROSCOPY",
                    "Different Light Microscopes Solve Different Problems",
                    [
                        "Bright-field microscopy is commonly used for stained bacterial specimens. The specimen appears darker against a bright background.",
                        "Phase-contrast microscopy enhances differences in refractive index and can be useful for observing living unstained cells.",
                        "Fluorescence microscopy uses fluorescent dyes or antibodies that emit light after excitation, allowing targeted detection of specific structures or organisms."
                    ]
                ),
                section(
                    "ELECTRON MICROSCOPY",
                    "SEM Versus TEM",
                    [
                        "Transmission electron microscopy sends electrons through thin sections and provides high-resolution views of internal structures.",
                        "Scanning electron microscopy scans a specimen surface and produces highly detailed three-dimensional-like surface images.",
                        "Electron microscopy requires complex specimen preparation and is not used for routine observation of living cells."
                    ]
                )
            ],
            {
                title: "Microscopy in a Gram Stain",
                scenario: "A laboratory professional examines a Gram-stained bacterial specimen with a 10× ocular and 100× oil-immersion objective.",
                connection: "The total magnification is 1000×. Immersion oil improves resolution by reducing refraction between the slide and objective."
            },
            [
                ["Calculate total magnification with a 10× ocular and 40× objective.", "400×.", ["Multiply 10 by 40.", "Total magnification = ocular × objective."]],
                ["Calculate total magnification with a 10× ocular and 100× objective.", "1000×.", ["10 × 100 = 1000."]],
                ["Why is oil used with the 100× objective?", "To improve resolution by reducing light refraction.", ["Oil has an optical refractive index similar to glass."]]
            ],
            [
                "Magnification and resolution are not the same thing.",
                "Oil immersion improves resolution rather than changing the objective's labeled magnification.",
                "SEM primarily shows surfaces; TEM primarily shows internal detail.",
                "Using oil on an objective not designed for oil can damage or contaminate the lens."
            ],
            [
                "MAGNIFICATION = larger.",
                "RESOLUTION = clearer.",
                "SEM = Surface.",
                "TEM = Through the specimen."
            ],
            [
                "Total magnification equals ocular × objective.",
                "Resolution determines distinguishable detail.",
                "Oil immersion reduces refraction.",
                "100× objective with 10× ocular gives 1000×.",
                "SEM emphasizes surfaces.",
                "TEM emphasizes internal structures."
            ],
            [
                {
                    id: "scope1",
                    type: "numeric",
                    q: "A microscope uses a 10× ocular lens and a 40× objective. What is the total magnification?",
                    answer: 400,
                    tolerance: 0,
                    unit: "×",
                    explanation: "Total magnification equals 10 × 40 = 400×."
                },
                {
                    id: "scope2",
                    type: "mcq",
                    q: "Which term describes the ability to distinguish two nearby points as separate?",
                    choices: ["Magnification", "Resolution", "Refraction", "Fixation"],
                    answer: 1,
                    explanation: "Resolution describes the ability to distinguish fine detail and separate close points."
                },
                {
                    id: "scope3",
                    type: "mcq",
                    q: "Which microscope is best suited for detailed imaging of the external surface of a bacterial cell?",
                    choices: ["SEM", "TEM", "Bright-field only", "Simple hand lens"],
                    answer: 0,
                    explanation: "Scanning electron microscopy is especially useful for detailed surface imaging."
                }
            ],
            ["Lab", "Practical", "Calculation"]
        ),

        topic(
            "aseptic-culture",
            3,
            1,
            "Aseptic Technique, Culture Media & Isolation",
            "Learn how microorganisms are transferred without contamination and how microbiologists use culture media and streak techniques to isolate organisms.",
            [
                "Define aseptic technique.",
                "Explain contamination prevention.",
                "Differentiate broth, agar plates and slants.",
                "Differentiate general, enriched, selective and differential media.",
                "Explain the streak-plate method.",
                "Explain why pure cultures are necessary."
            ],
            [
                ["Aseptic technique", "Procedures that reduce contamination of specimens, cultures, personnel and the environment."],
                ["Culture medium", "Nutrient preparation used to grow microorganisms."],
                ["Broth", "Liquid culture medium."],
                ["Agar", "Solidifying agent commonly used in microbiological media."],
                ["Selective medium", "Medium that favors some organisms while inhibiting others."],
                ["Differential medium", "Medium that distinguishes organisms through visible biochemical differences."],
                ["Enriched medium", "Medium supplemented with additional nutrients for fastidious organisms."],
                ["Pure culture", "Culture containing one microbial species or strain."],
                ["Colony", "Visible mass of microbial cells growing on solid medium."],
                ["Streak plate", "Technique used to progressively dilute cells across agar and obtain isolated colonies."]
            ],
            [
                section(
                    "ASEPTIC TECHNIQUE",
                    "Preventing Unwanted Microbial Transfer",
                    [
                        "Aseptic technique protects the culture from environmental contamination and protects the worker from exposure.",
                        "Important principles include disinfecting work surfaces, keeping containers closed when possible, using sterile transfer tools and avoiding contact between sterile equipment and nonsterile surfaces.",
                        "In clinical microbiology, poor collection technique can introduce skin or environmental organisms into a specimen and produce misleading results."
                    ]
                ),
                section(
                    "MEDIA TYPES",
                    "Not All Culture Media Have the Same Purpose",
                    [
                        "General-purpose media support many nonfastidious organisms. Enriched media contain extra nutrients such as blood or growth factors.",
                        "Selective media contain substances that inhibit some organisms while allowing others to grow.",
                        "Differential media contain substrates and indicators that reveal biochemical differences among organisms."
                    ]
                ),
                section(
                    "MACCONKEY EXAMPLE",
                    "One Medium Can Be Selective and Differential",
                    [
                        "MacConkey agar inhibits many Gram-positive organisms and favors growth of many Gram-negative enteric bacteria.",
                        "It also contains lactose and a pH indicator. Lactose fermenters produce acid and develop pink or reddish colonies.",
                        "This means MacConkey agar is both selective and differential."
                    ]
                ),
                section(
                    "STREAK PLATE",
                    "Separating a Mixed Population",
                    [
                        "The streak-plate method reduces cell density across successive regions of an agar plate.",
                        "As fewer cells are deposited, individual cells become separated and produce isolated colonies.",
                        "An isolated colony can then be transferred to fresh medium to establish a pure culture."
                    ]
                ),
                section(
                    "COLONY MORPHOLOGY",
                    "What a Colony Can and Cannot Tell You",
                    [
                        "Colonies may be described according to size, color, shape, margin, elevation, texture and hemolysis.",
                        "Colony morphology provides useful preliminary clues.",
                        "It usually cannot identify an organism to species level without additional tests."
                    ]
                )
            ],
            {
                title: "Contaminated Urine Culture",
                scenario: "A urine sample grows several different skin organisms at low colony counts and the patient has no urinary symptoms.",
                connection: "The pattern may reflect specimen contamination rather than true urinary infection. Proper clean-catch collection improves specimen quality."
            },
            [
                ["What is the purpose of a streak plate?", "To obtain isolated colonies.", ["Successive streaking lowers cell density.", "Separated cells produce discrete colonies."]],
                ["What is selective medium designed to do?", "Favor some organisms while inhibiting others.", ["Selective agents alter which organisms can grow."]],
                ["What is differential medium designed to do?", "Produce visible differences based on biochemical traits.", ["Color changes or reactions help distinguish organisms."]]
            ],
            [
                "Selective and differential are different concepts.",
                "A single medium can be both selective and differential.",
                "One colony generally represents growth from one cell or a small cluster, but contamination is still possible.",
                "Colony appearance alone rarely provides final species identification."
            ],
            [
                "SELECTIVE = who can grow.",
                "DIFFERENTIAL = how growers look different.",
                "STREAK = separate."
            ],
            [
                "Aseptic technique prevents unwanted contamination.",
                "Broth is liquid; agar is solid.",
                "Selective media favor certain organisms.",
                "Differential media reveal biochemical differences.",
                "Streak plates produce isolated colonies.",
                "Pure cultures are required for accurate identification."
            ],
            [
                {
                    id: "culture1",
                    type: "mcq",
                    q: "Which technique is most commonly used to obtain isolated colonies from a mixed bacterial culture?",
                    choices: ["Streak plating", "Autoclaving", "Gram staining", "ELISA"],
                    answer: 0,
                    explanation: "The streak-plate technique progressively separates cells across an agar surface."
                },
                {
                    id: "culture2",
                    type: "mcq",
                    q: "MacConkey agar inhibits many Gram-positive organisms and distinguishes lactose fermenters by color. It is therefore:",
                    choices: ["Only enriched", "Selective and differential", "Only reducing", "A sterilizing medium"],
                    answer: 1,
                    explanation: "MacConkey agar selects for many Gram-negative organisms and differentiates lactose fermenters."
                },
                {
                    id: "culture3",
                    type: "mcq",
                    q: "Why is an isolated colony useful?",
                    choices: [
                        "It can help establish a pure culture.",
                        "It proves the organism is pathogenic.",
                        "It eliminates the need for additional testing.",
                        "It sterilizes the plate."
                    ],
                    answer: 0,
                    explanation: "Isolated colonies can be subcultured to obtain a pure culture for identification and susceptibility testing."
                }
            ],
            ["Lab", "Practical", "Clinical"]
        ),

        topic(
            "staining",
            4,
            1,
            "Smears, Simple Stains, Gram Stain & Special Stains",
            "Master smear preparation and major differential staining methods, with special emphasis on Gram staining, acid-fast staining, endospore staining and capsule visualization.",
            [
                "Explain smear preparation and fixation.",
                "Describe simple staining.",
                "List Gram-stain steps in order.",
                "Explain the structural reason for Gram-positive and Gram-negative colors.",
                "Explain acid-fast staining.",
                "Describe endospore and capsule staining conceptually."
            ],
            [
                ["Smear", "Thin layer of microorganisms prepared on a microscope slide."],
                ["Fixation", "Process that attaches cells to the slide and usually kills them."],
                ["Simple stain", "Single-dye stain used to show morphology and arrangement."],
                ["Crystal violet", "Primary stain in the Gram stain."],
                ["Iodine", "Mordant in the Gram stain."],
                ["Decolorizer", "Alcohol or acetone-alcohol step that differentiates Gram-positive and Gram-negative cells."],
                ["Safranin", "Common Gram-stain counterstain."],
                ["Acid-fast stain", "Differential stain for organisms with waxy mycolic-acid-rich walls."],
                ["Endospore stain", "Special stain used to demonstrate bacterial endospores."],
                ["Capsule stain", "Method that demonstrates an external capsule as a clear or contrasting area around cells."]
            ],
            [
                section(
                    "SMEAR PREPARATION",
                    "A Good Stain Starts With a Good Smear",
                    [
                        "A smear should be thin enough for individual cells to be distinguished. Thick smears can retain stain unevenly and interfere with interpretation.",
                        "After air drying, the smear is fixed. Heat fixation is common in teaching laboratories.",
                        "Overheating can distort cell shape, so fixation should be controlled."
                    ]
                ),
                section(
                    "SIMPLE STAIN",
                    "One Dye Reveals Shape and Arrangement",
                    [
                        "A simple stain uses one basic dye such as methylene blue or crystal violet.",
                        "Simple staining is useful for viewing bacterial morphology, size and arrangement.",
                        "Because every cell is stained similarly, a simple stain does not differentiate bacteria according to cell-wall type."
                    ]
                ),
                section(
                    "GRAM STAIN",
                    "The Classic Differential Stain",
                    [
                        "The Gram stain sequence is crystal violet, iodine, decolorizer and safranin.",
                        "Crystal violet stains all cells initially. Iodine forms a large crystal violet-iodine complex.",
                        "The decolorizer is the critical differential step. Gram-positive cells retain the complex because of their thick peptidoglycan wall.",
                        "Gram-negative cells lose the primary dye during decolorization and are then stained pink or red by safranin."
                    ],
                    [
                        ["Step", "Reagent", "Purpose"],
                        ["1", "Crystal violet", "Primary stain"],
                        ["2", "Iodine", "Mordant"],
                        ["3", "Alcohol/acetone", "Differential decolorization"],
                        ["4", "Safranin", "Counterstain"]
                    ]
                ),
                section(
                    "GRAM ERRORS",
                    "Why Technique Matters",
                    [
                        "Over-decolorization can cause Gram-positive cells to appear Gram-negative.",
                        "Under-decolorization can cause Gram-negative cells to remain purple.",
                        "Very old bacterial cultures can also produce variable staining because damaged cell walls may not retain dye normally."
                    ]
                ),
                section(
                    "SPECIAL STAINS",
                    "Acid-Fast, Endospore and Capsule Stains",
                    [
                        "Mycobacteria contain waxy mycolic acids and are poorly demonstrated by routine Gram staining. Acid-fast staining uses strong dyes such as carbol fuchsin and an acid-alcohol decolorizer.",
                        "Endospore staining demonstrates resistant spores formed by genera such as Bacillus and Clostridium.",
                        "Capsule staining uses techniques that avoid shrinking or destroying the capsule and often shows the capsule as a clear halo around a stained cell."
                    ]
                )
            ],
            {
                title: "Suspected Tuberculosis",
                scenario: "A respiratory specimen is being examined for Mycobacterium tuberculosis.",
                connection: "Acid-fast staining is useful because mycobacteria possess waxy mycolic-acid-rich cell envelopes that do not stain reliably with the standard Gram method."
            },
            [
                ["List the Gram-stain steps.", "Crystal violet → iodine → decolorizer → safranin.", ["Primary stain.", "Mordant.", "Differential step.", "Counterstain."]],
                ["Why do Gram-positive organisms remain purple?", "Their thick peptidoglycan retains the crystal violet-iodine complex.", ["The wall dehydrates during alcohol treatment and traps the complex."]],
                ["Why is the acid-fast stain useful for Mycobacterium?", "Because mycobacteria contain mycolic acids.", ["These waxy lipids require specialized staining methods."]]
            ],
            [
                "Decolorization is the most technique-sensitive Gram-stain step.",
                "Gram-negative bacteria are not 'without a cell wall'; they have a thin peptidoglycan layer.",
                "Acid-fast bacteria are not simply another Gram category.",
                "Endospore staining demonstrates survival structures, not reproductive spores."
            ],
            [
                "GRAM: Crystal → Iodine → Decolorize → Safranin.",
                "Purple = Positive.",
                "Pink = Gram-negative after counterstain.",
                "Acid-fast = think Mycobacterium and mycolic acid."
            ],
            [
                "Simple stains show morphology.",
                "Gram staining is differential.",
                "Gram-positive bacteria are purple.",
                "Gram-negative bacteria are pink or red.",
                "Acid-fast organisms contain waxy mycolic acids.",
                "Special stains can reveal capsules and endospores."
            ],
            [
                {
                    id: "stain1",
                    type: "mcq",
                    q: "Which Gram-stain step is primarily responsible for differentiating Gram-positive from Gram-negative cells?",
                    choices: ["Crystal violet", "Iodine", "Decolorizer", "Safranin"],
                    answer: 2,
                    explanation: "The decolorizer removes crystal violet from Gram-negative cells while Gram-positive cells retain the complex."
                },
                {
                    id: "stain2",
                    type: "mcq",
                    q: "An organism remains red after treatment with acid-alcohol in an acid-fast stain. Which feature best explains this?",
                    choices: [
                        "A thick capsule",
                        "A mycolic-acid-rich wall",
                        "Absence of DNA",
                        "A Gram-negative outer membrane only"
                    ],
                    answer: 1,
                    explanation: "Acid-fast organisms retain the primary dye because of their lipid-rich, mycolic-acid-containing cell envelope."
                },
                {
                    id: "stain3",
                    type: "mcq",
                    q: "A Gram-positive organism appears pink after staining. Which technical error could cause this?",
                    choices: ["Over-decolorization", "Skipping safranin only", "Using too little oil", "Using a clean slide"],
                    answer: 0,
                    explanation: "Excessive decolorization can remove the primary dye complex from Gram-positive cells."
                }
            ],
            ["Lab", "Practical", "High Yield"]
        ),

        topic(
            "lab-identification",
            5,
            1,
            "Biochemical Tests & Practical Identification",
            "Learn the major laboratory reactions used to differentiate clinically important bacteria, including catalase, coagulase, oxidase, fermentation and hemolysis.",
            [
                "Explain catalase testing.",
                "Explain coagulase testing.",
                "Explain oxidase testing.",
                "Interpret hemolysis patterns.",
                "Explain carbohydrate fermentation tests.",
                "Integrate multiple test results to narrow bacterial identity."
            ],
            [
                ["Catalase test", "Detects breakdown of hydrogen peroxide and helps separate staphylococci from streptococci."],
                ["Coagulase test", "Helps identify Staphylococcus aureus among staphylococci."],
                ["Oxidase test", "Detects cytochrome c oxidase activity."],
                ["Alpha hemolysis", "Partial hemolysis with greenish discoloration."],
                ["Beta hemolysis", "Complete clearing around colonies on blood agar."],
                ["Gamma hemolysis", "No hemolysis."],
                ["Fermentation test", "Detects use of a carbohydrate and often acid or gas production."],
                ["Indole test", "Detects ability to convert tryptophan to indole."],
                ["Urease test", "Detects enzymatic breakdown of urea."],
                ["Biochemical profile", "Pattern of reactions used together for identification."]
            ],
            [
                section(
                    "CATALASE",
                    "Staphylococcus Versus Streptococcus",
                    [
                        "Catalase breaks hydrogen peroxide into water and oxygen. A positive test produces visible bubbling.",
                        "Staphylococcus species are catalase positive. Streptococcus and Enterococcus are catalase negative.",
                        "This is one of the classic first steps for differentiating Gram-positive cocci."
                    ]
                ),
                section(
                    "COAGULASE",
                    "Identifying Staphylococcus aureus",
                    [
                        "Coagulase promotes clot formation by interacting with plasma factors.",
                        "Staphylococcus aureus is classically coagulase positive.",
                        "Staphylococcus epidermidis and many other common coagulase-negative staphylococci are coagulase negative."
                    ]
                ),
                section(
                    "OXIDASE",
                    "Detecting Cytochrome c Oxidase",
                    [
                        "The oxidase test detects activity of cytochrome c oxidase in the respiratory electron transport chain.",
                        "Pseudomonas and Neisseria are oxidase positive.",
                        "Most Enterobacterales such as E. coli and Klebsiella are oxidase negative."
                    ]
                ),
                section(
                    "HEMOLYSIS",
                    "Reading Blood Agar",
                    [
                        "Alpha hemolysis produces partial red-cell destruction with a greenish appearance.",
                        "Beta hemolysis produces complete clearing around colonies.",
                        "Gamma hemolysis means no visible hemolysis.",
                        "Hemolysis patterns are useful clues but should be combined with other identification tests."
                    ]
                ),
                section(
                    "INTEGRATED IDENTIFICATION",
                    "Use a Pattern, Not a Single Result",
                    [
                        "Microbiologists combine Gram reaction, morphology, colony characteristics and biochemical results.",
                        "For example, Gram-positive cocci in clusters that are catalase positive and coagulase positive strongly suggest Staphylococcus aureus.",
                        "Gram-negative rods that ferment lactose and are oxidase negative suggest members of Enterobacterales such as E. coli or Klebsiella."
                    ]
                )
            ],
            {
                title: "Gram-Positive Cocci in Clusters",
                scenario: "A wound culture produces Gram-positive cocci in clusters. The isolate is catalase positive and coagulase positive.",
                connection: "The combination strongly supports Staphylococcus aureus."
            },
            [
                ["What does a positive catalase test look like?", "Rapid bubbling after hydrogen peroxide is added.", ["Catalase releases oxygen gas."]],
                ["What classic organism is coagulase positive?", "Staphylococcus aureus.", ["Coagulase helps distinguish S. aureus from many coagulase-negative staphylococci."]],
                ["Which two major genera are commonly oxidase positive?", "Pseudomonas and Neisseria.", ["Most Enterobacterales are oxidase negative."]]
            ],
            [
                "No single biochemical test should be interpreted without the rest of the organism profile.",
                "Catalase differentiates staphylococci from streptococci; coagulase helps identify S. aureus.",
                "Alpha hemolysis is partial, not complete.",
                "Gamma hemolysis means no hemolysis."
            ],
            [
                "STAPH = Catalase positive.",
                "S. AUREUS = Coagulase positive.",
                "PSEUDOMONAS and NEISSERIA = think oxidase positive.",
                "BETA hemolysis = big clear zone."
            ],
            [
                "Catalase helps separate Staphylococcus from Streptococcus.",
                "Coagulase strongly supports S. aureus.",
                "Oxidase helps separate Pseudomonas from Enterobacterales.",
                "Hemolysis patterns help classify bacteria.",
                "Multiple test results are combined for identification."
            ],
            [
                {
                    id: "labid1",
                    type: "mcq",
                    q: "A Gram-positive coccus in clusters is catalase positive and coagulase positive. Which organism is most likely?",
                    choices: ["Staphylococcus aureus", "Streptococcus pyogenes", "Enterococcus faecalis", "Neisseria meningitidis"],
                    answer: 0,
                    explanation: "S. aureus is a Gram-positive coccus in clusters that is catalase and coagulase positive."
                },
                {
                    id: "labid2",
                    type: "mcq",
                    q: "Which laboratory finding best distinguishes staphylococci from streptococci?",
                    choices: ["Catalase reaction", "Acid-fast reaction", "Endospore formation", "Viral envelope"],
                    answer: 0,
                    explanation: "Staphylococci are catalase positive, while streptococci and enterococci are generally catalase negative."
                },
                {
                    id: "labid3",
                    type: "mcq",
                    q: "A Gram-negative rod is oxidase negative and lactose fermenting. Which group is most likely?",
                    choices: ["Enterobacterales", "Neisseria", "Mycobacterium", "Staphylococcus"],
                    answer: 0,
                    explanation: "Many Enterobacterales are oxidase negative, and organisms such as E. coli and Klebsiella ferment lactose."
                }
            ],
            ["Lab", "Practical", "High Yield"]
        ),

        // ====================================================================
        // MODULE 2
        // ====================================================================

        topic(
            "prokaryotic-eukaryotic",
            6,
            2,
            "Prokaryotic vs. Eukaryotic Cells",
            "Compare bacterial cells with human and fungal cells and connect structural differences with antimicrobial drug targets.",
            [
                "Differentiate prokaryotic and eukaryotic cells.",
                "Compare bacterial and eukaryotic ribosomes.",
                "Explain the bacterial nucleoid.",
                "Explain binary fission.",
                "Identify major membrane-bound organelles in eukaryotes.",
                "Connect cell structure with selective toxicity."
            ],
            [
                ["Prokaryote", "Cell lacking a membrane-bound nucleus."],
                ["Eukaryote", "Cell containing a membrane-bound nucleus."],
                ["Nucleoid", "Region containing the bacterial chromosome."],
                ["70S ribosome", "Typical bacterial cytoplasmic ribosome."],
                ["80S ribosome", "Typical eukaryotic cytoplasmic ribosome."],
                ["Binary fission", "Primary bacterial cell-division process."],
                ["Mitosis", "Eukaryotic nuclear division."],
                ["Organelle", "Specialized cellular structure, often membrane bound in eukaryotes."],
                ["Selective toxicity", "Ability to damage a microorganism more than the host."]
            ],
            [
                section(
                    "CELLULAR ORGANIZATION",
                    "Bacteria Are Cells, But They Are Prokaryotic",
                    [
                        "Bacteria contain DNA, ribosomes, cytoplasm and a plasma membrane. They are living cellular organisms.",
                        "Unlike human cells, they do not contain a membrane-bound nucleus.",
                        "Their primary chromosome occupies a nucleoid region within the cytoplasm."
                    ]
                ),
                section(
                    "EUKARYOTIC CELLS",
                    "Human and Fungal Cells Are More Compartmentalized",
                    [
                        "Eukaryotic cells contain membrane-bound nuclei and organelles such as mitochondria, endoplasmic reticulum and Golgi apparatus.",
                        "Fungi are also eukaryotic, which makes antifungal selective toxicity more difficult than antibacterial selective toxicity.",
                        "The more closely a pathogen resembles human cells, the fewer unique treatment targets may be available."
                    ]
                ),
                section(
                    "RIBOSOMES",
                    "A Major Antimicrobial Target",
                    [
                        "Bacterial cytoplasmic ribosomes are 70S, composed of 30S and 50S subunits.",
                        "Human cytoplasmic ribosomes are 80S, composed of 40S and 60S subunits.",
                        "Several antibiotics exploit these structural differences by binding bacterial ribosomal subunits."
                    ]
                ),
                section(
                    "CELL DIVISION",
                    "Binary Fission Is Not Mitosis",
                    [
                        "Most bacteria reproduce by binary fission.",
                        "The chromosome replicates, chromosome copies move apart, a septum forms and the cell divides.",
                        "Because bacteria lack a nucleus and mitotic spindle, this process is not mitosis."
                    ]
                ),
                section(
                    "SELECTIVE TOXICITY",
                    "Differences Create Drug Targets",
                    [
                        "Human cells lack peptidoglycan, so bacterial cell-wall synthesis can be targeted selectively.",
                        "Bacterial ribosomes differ from human cytoplasmic ribosomes.",
                        "Unique microbial enzymes and metabolic pathways provide additional therapeutic targets."
                    ]
                )
            ],
            {
                title: "30S Ribosomal Target",
                scenario: "A patient receives an antibiotic that binds to the bacterial 30S ribosomal subunit.",
                connection: "The drug exploits structural differences between bacterial 70S ribosomes and human cytoplasmic 80S ribosomes."
            },
            [
                ["Where is the bacterial chromosome located?", "In the nucleoid.", ["Bacteria do not have a membrane-bound nucleus."]],
                ["What are the bacterial ribosomal subunits?", "30S and 50S.", ["Together they form the bacterial 70S ribosome."]],
                ["What division process do most bacteria use?", "Binary fission.", ["This differs from eukaryotic mitosis."]]
            ],
            [
                "Bacteria are living cells even though they lack nuclei.",
                "Binary fission is not mitosis.",
                "70S and 80S are sedimentation values and do not add arithmetically in the usual way.",
                "Fungi are eukaryotes, not prokaryotes."
            ],
            [
                "PRO = no membrane-bound nucleus.",
                "EU = true nucleus.",
                "Bacteria = 70S.",
                "Humans = 80S."
            ],
            [
                "Bacteria are prokaryotic.",
                "Human and fungal cells are eukaryotic.",
                "Bacterial DNA is located in a nucleoid.",
                "Bacterial cytoplasmic ribosomes are 70S.",
                "Bacteria divide mainly by binary fission.",
                "Structural differences create antimicrobial targets."
            ],
            [
                {
                    id: "prok1",
                    type: "mcq",
                    q: "Which structure is absent from a typical bacterial cell?",
                    choices: ["Ribosome", "DNA", "Plasma membrane", "Membrane-bound nucleus"],
                    answer: 3,
                    explanation: "Bacteria are prokaryotic and therefore lack a membrane-bound nucleus."
                },
                {
                    id: "prok2",
                    type: "mcq",
                    q: "Which ribosomal subunits form the typical bacterial 70S ribosome?",
                    choices: ["40S and 60S", "30S and 50S", "20S and 50S", "10S and 60S"],
                    answer: 1,
                    explanation: "Bacterial 70S ribosomes contain 30S and 50S subunits."
                }
            ]
        ),

        topic(
            "bacterial-morphology",
            7,
            2,
            "Bacterial Morphology & Arrangement",
            "Learn bacterial shapes, arrangements and microscopic terminology used when interpreting Gram stains and preliminary culture reports.",
            [
                "Identify cocci, bacilli, coccobacilli and spiral forms.",
                "Recognize diplococci, chains and clusters.",
                "Explain pleomorphism.",
                "Relate division planes to bacterial arrangement.",
                "Interpret common preliminary laboratory descriptions."
            ],
            [
                ["Coccus", "Spherical bacterial cell."],
                ["Bacillus", "Rod-shaped bacterial cell."],
                ["Coccobacillus", "Short rod intermediate between coccal and bacillary appearance."],
                ["Vibrio", "Curved comma-shaped rod."],
                ["Spirillum", "Rigid spiral-shaped bacterium."],
                ["Spirochete", "Thin flexible helical bacterium."],
                ["Diplococci", "Cocci occurring in pairs."],
                ["Streptococci", "Cocci arranged in chains."],
                ["Staphylococci", "Cocci arranged in grape-like clusters."],
                ["Pleomorphism", "Variation in cell shape or size."]
            ],
            [
                section(
                    "SHAPE",
                    "Cell Shape Narrows the Possibilities",
                    [
                        "Cocci are spherical, bacilli are rods and coccobacilli are short rods.",
                        "Vibrio species have a curved comma-like appearance. Spirilla and spirochetes have spiral or helical forms.",
                        "Morphology is useful for preliminary classification but rarely establishes a species identity by itself."
                    ]
                ),
                section(
                    "ARRANGEMENT",
                    "How Division Patterns Create Clusters and Chains",
                    [
                        "Cells that divide in one plane and remain attached may form chains.",
                        "Cells dividing in several planes may form clusters.",
                        "Pairs are called diplococci, chains use the prefix strepto- and clusters use the prefix staphylo-."
                    ]
                ),
                section(
                    "PLEOMORPHISM",
                    "Not Every Species Has One Perfect Shape",
                    [
                        "Pleomorphic bacteria can vary in size and shape.",
                        "Environmental conditions and cell age can also affect appearance.",
                        "Therefore, microscopic morphology should always be interpreted with Gram reaction and additional tests."
                    ]
                ),
                section(
                    "PRELIMINARY REPORTS",
                    "Turning Microscopy Into Clinical Clues",
                    [
                        "Gram-positive cocci in clusters suggest staphylococci.",
                        "Gram-positive cocci in chains or pairs suggest streptococci or enterococci.",
                        "Gram-negative diplococci can suggest Neisseria in the appropriate clinical setting.",
                        "Gram-negative rods encompass many organisms and require additional identification."
                    ]
                ),
                section(
                    "LIMITATIONS",
                    "Morphology Is a Starting Point",
                    [
                        "Different species may share the same microscopic appearance.",
                        "Laboratory identification integrates morphology with culture, biochemical testing, antigen detection and molecular methods.",
                        "Clinical context also matters because the significance of an organism varies by body site."
                    ]
                )
            ],
            {
                title: "Positive Blood Culture",
                scenario: "A preliminary report says 'Gram-positive cocci in clusters.'",
                connection: "This morphology suggests staphylococci, but species identification and susceptibility testing are still required."
            },
            [
                ["What arrangement is described by staphylo-?", "Clusters.", ["Staphylococci commonly resemble grape-like clusters."]],
                ["What arrangement is described by strepto-?", "Chains.", ["Streptococci commonly remain attached after division."]],
                ["Can shape alone identify a species?", "No.", ["Shape provides a clue, not a final identity."]]
            ],
            [
                "Bacillus can describe a rod shape or the genus Bacillus depending on capitalization and context.",
                "Morphology alone does not establish pathogenicity.",
                "Not every staphylococcal-looking organism is S. aureus."
            ],
            [
                "STAPH = clusters.",
                "STREP = chains.",
                "DIPLO = pairs.",
                "BACILLUS = rod."
            ],
            [
                "Cocci are spherical.",
                "Bacilli are rods.",
                "Diplococci occur in pairs.",
                "Streptococci form chains.",
                "Staphylococci form clusters.",
                "Morphology must be combined with other tests."
            ],
            [
                {
                    id: "morph1",
                    type: "mcq",
                    q: "Gram-positive cocci in grape-like clusters most strongly suggest which arrangement?",
                    choices: ["Staphylococcal", "Streptococcal", "Spirochetal", "Bacillary"],
                    answer: 0,
                    explanation: "The prefix staphylo- refers to a cluster-like arrangement."
                },
                {
                    id: "morph2",
                    type: "mcq",
                    q: "Which term describes spherical bacteria occurring in pairs?",
                    choices: ["Diplococci", "Bacilli", "Spirochetes", "Vibrios"],
                    answer: 0,
                    explanation: "Diplococci are cocci occurring in pairs."
                }
            ],
            ["Lab", "Practical", "Theory"]
        ),

        topic(
            "cell-wall",
            8,
            2,
            "Gram-Positive & Gram-Negative Cell Envelopes",
            "Master peptidoglycan, teichoic acids, outer membranes, lipopolysaccharide and the structural basis of Gram staining and antimicrobial differences.",
            [
                "Describe peptidoglycan structure and function.",
                "Compare Gram-positive and Gram-negative envelopes.",
                "Explain teichoic acids.",
                "Explain the Gram-negative outer membrane.",
                "Describe lipopolysaccharide and lipid A.",
                "Relate cell-envelope structure to antimicrobial susceptibility."
            ],
            [
                ["Peptidoglycan", "Rigid sugar-peptide polymer providing bacterial cell-wall strength."],
                ["Gram-positive", "Bacterium with thick peptidoglycan and no Gram-negative outer membrane."],
                ["Gram-negative", "Bacterium with thin peptidoglycan and an outer membrane."],
                ["Teichoic acid", "Polymer associated with many Gram-positive walls."],
                ["Outer membrane", "External membrane unique to Gram-negative bacteria."],
                ["LPS", "Lipopolysaccharide found in the Gram-negative outer membrane."],
                ["Lipid A", "Toxic portion of LPS responsible for endotoxin activity."],
                ["Periplasm", "Space between the inner and outer membranes of Gram-negative bacteria."],
                ["Porin", "Outer-membrane channel allowing passage of selected small molecules."]
            ],
            [
                section(
                    "PEPTIDOGLYCAN",
                    "The Cell Wall Prevents Osmotic Rupture",
                    [
                        "Peptidoglycan forms a strong mesh surrounding most bacterial cells.",
                        "Bacterial cytoplasm often contains a high concentration of solutes, creating an inward movement of water.",
                        "The rigid peptidoglycan wall resists excessive expansion and prevents osmotic lysis."
                    ]
                ),
                section(
                    "GRAM-POSITIVE",
                    "A Thick Peptidoglycan Wall",
                    [
                        "Gram-positive bacteria contain a thick multilayered peptidoglycan wall.",
                        "Teichoic and lipoteichoic acids contribute to wall structure and surface properties.",
                        "During Gram staining, the thick wall retains the crystal violet-iodine complex, producing a purple appearance."
                    ]
                ),
                section(
                    "GRAM-NEGATIVE",
                    "A Thin Wall Plus an Outer Membrane",
                    [
                        "Gram-negative bacteria contain a thin peptidoglycan layer located in the periplasm.",
                        "Outside the peptidoglycan is an additional outer membrane.",
                        "This outer membrane can reduce penetration of certain drugs and contributes to intrinsic resistance."
                    ]
                ),
                section(
                    "LIPOPOLYSACCHARIDE",
                    "Understanding Endotoxin",
                    [
                        "The outer membrane contains lipopolysaccharide.",
                        "The lipid A component of LPS is responsible for classic endotoxin effects.",
                        "Large systemic exposure can trigger strong innate immune activation, fever, vasodilation, capillary leak, coagulation abnormalities and shock."
                    ]
                ),
                section(
                    "CLINICAL IMPORTANCE",
                    "Cell-Envelopes Influence Drug Activity",
                    [
                        "Peptidoglycan synthesis is an important antibacterial target because human cells do not contain peptidoglycan.",
                        "The Gram-negative outer membrane can act as a permeability barrier.",
                        "Porin changes, efflux pumps and beta-lactamases located in the periplasm can contribute to resistance."
                    ],
                    [
                        ["Feature", "Gram-positive", "Gram-negative"],
                        ["Peptidoglycan", "Thick", "Thin"],
                        ["Outer membrane", "Absent", "Present"],
                        ["LPS", "Absent", "Present"],
                        ["Teichoic acids", "Common", "Absent"],
                        ["Final Gram color", "Purple", "Pink/red"]
                    ]
                )
            ],
            {
                title: "Gram-Negative Septic Shock",
                scenario: "A patient with Gram-negative bacteremia develops severe hypotension and systemic inflammatory activation.",
                connection: "Lipid A of LPS can strongly activate innate immune pathways and contribute to septic shock."
            },
            [
                ["Which bacterial group contains an outer membrane?", "Gram-negative bacteria.", ["The outer membrane lies outside the thin peptidoglycan layer."]],
                ["What part of LPS acts as endotoxin?", "Lipid A.", ["Lipid A strongly activates inflammatory responses."]],
                ["Why is peptidoglycan a useful drug target?", "Human cells do not contain it.", ["This supports selective toxicity."]]
            ],
            [
                "Gram-negative bacteria do contain peptidoglycan; their layer is simply thin.",
                "Endotoxin is lipid A, not the entire bacterial cell wall.",
                "Gram-positive bacteria do not contain LPS.",
                "Exotoxin and endotoxin are different concepts."
            ],
            [
                "POSITIVE = thick purple wall.",
                "NEGATIVE = thin wall + outer membrane.",
                "LPS lives in Gram-negative bacteria.",
                "Lipid A = endotoxin."
            ],
            [
                "Peptidoglycan provides wall strength.",
                "Gram-positive cells have thick peptidoglycan.",
                "Gram-negative cells have thin peptidoglycan plus an outer membrane.",
                "LPS occurs in Gram-negative bacteria.",
                "Lipid A is endotoxin.",
                "Cell-envelope structure affects antibiotic susceptibility."
            ],
            [
                {
                    id: "wall1",
                    type: "mcq",
                    q: "Which structure is found in Gram-negative but not typical Gram-positive bacterial envelopes?",
                    choices: ["Peptidoglycan", "Plasma membrane", "Outer membrane containing LPS", "Ribosomes"],
                    answer: 2,
                    explanation: "Gram-negative organisms contain an outer membrane rich in lipopolysaccharide."
                },
                {
                    id: "wall2",
                    type: "mcq",
                    q: "Which molecule is directly responsible for classical endotoxin activity?",
                    choices: ["Teichoic acid", "Lipid A", "Peptidoglycan", "Capsular polysaccharide"],
                    answer: 1,
                    explanation: "Lipid A is the toxic portion of Gram-negative LPS."
                },
                {
                    id: "wall3",
                    type: "mcq",
                    q: "Why can the Gram-negative outer membrane contribute to antibiotic resistance?",
                    choices: [
                        "It can reduce drug entry.",
                        "It eliminates all metabolic activity.",
                        "It contains human ribosomes.",
                        "It prevents bacterial DNA replication entirely."
                    ],
                    answer: 0,
                    explanation: "The outer membrane functions as a permeability barrier and can reduce penetration of certain antimicrobial agents."
                }
            ],
            ["Theory", "Clinical", "High Yield"]
        ),

        topic(
            "external-structures",
            9,
            2,
            "Capsules, Flagella, Pili, Biofilms & Endospores",
            "Learn bacterial structures that promote attachment, motility, genetic transfer, immune evasion, environmental survival and persistent device-associated infection.",
            [
                "Explain capsule function.",
                "Describe fimbriae and pili.",
                "Explain flagellar motility.",
                "Describe biofilm formation.",
                "Explain endospore formation and germination.",
                "Connect these structures with virulence and infection control."
            ],
            [
                ["Capsule", "Organized external layer that can protect against phagocytosis and dehydration."],
                ["Glycocalyx", "External carbohydrate-rich coating surrounding some bacteria."],
                ["Fimbriae", "Short attachment structures that promote adherence."],
                ["Sex pilus", "Structure involved in DNA transfer during conjugation."],
                ["Flagellum", "Motility structure."],
                ["Biofilm", "Surface-associated microbial community embedded in extracellular matrix."],
                ["Endospore", "Dormant highly resistant bacterial survival structure."],
                ["Sporulation", "Process of endospore formation."],
                ["Germination", "Return of an endospore to vegetative growth."]
            ],
            [
                section(
                    "CAPSULES",
                    "External Protection and Immune Evasion",
                    [
                        "Capsules are organized layers surrounding certain bacterial cells.",
                        "They can limit phagocytosis, reduce dehydration and support adherence.",
                        "Encapsulated pathogens such as Streptococcus pneumoniae, Klebsiella pneumoniae and Neisseria meningitidis use capsules as important virulence factors."
                    ]
                ),
                section(
                    "FIMBRIAE AND PILI",
                    "Attachment and Gene Transfer",
                    [
                        "Fimbriae are short structures that help bacteria attach to host cells and surfaces.",
                        "Adherence is often essential because microorganisms must resist mechanical removal by mucus, urine flow or other host processes.",
                        "Certain longer pili participate in conjugation and transfer plasmid DNA between bacterial cells."
                    ]
                ),
                section(
                    "FLAGELLA",
                    "Bacterial Motility",
                    [
                        "Flagella rotate and propel bacteria through liquid environments.",
                        "Motility can help organisms move toward nutrients or through mucus.",
                        "Flagellar proteins can also stimulate innate immune recognition."
                    ]
                ),
                section(
                    "BIOFILMS",
                    "Microbial Communities Behave Differently",
                    [
                        "Biofilms begin when cells attach to a surface and produce extracellular matrix.",
                        "Within a mature biofilm, organisms can exchange signals and genetic material and may grow more slowly.",
                        "Biofilm organisms are often harder to eradicate because the matrix, altered metabolism and community structure reduce antimicrobial effectiveness."
                    ]
                ),
                section(
                    "ENDOSPORES",
                    "Extreme Environmental Survival",
                    [
                        "Certain Gram-positive bacteria, especially Bacillus and Clostridium species, form endospores under unfavorable conditions.",
                        "Endospores resist heat, drying, radiation and many chemical disinfectants.",
                        "When conditions improve, spores germinate and return to active vegetative growth.",
                        "Endospore formation is a survival mechanism, not reproduction."
                    ]
                )
            ],
            {
                title: "Persistent Central-Line Infection",
                scenario: "A patient repeatedly develops bacteremia with the same organism while a long-term intravascular catheter remains in place.",
                connection: "A biofilm on the catheter can protect microorganisms from immune defenses and antibiotics, sometimes making device removal necessary."
            },
            [
                ["What is the major role of fimbriae?", "Adherence.", ["Fimbriae help cells attach to surfaces and host tissues."]],
                ["What is the role of a sex pilus?", "DNA transfer during conjugation.", ["The pilus facilitates cell-to-cell contact."]],
                ["Why are endospores clinically important?", "They are highly resistant survival structures.", ["They may persist in healthcare environments despite conditions that kill vegetative cells."]]
            ],
            [
                "Endospores are not reproductive structures.",
                "Biofilm tolerance is not exactly the same as inherited resistance.",
                "Flagella primarily promote motility; fimbriae primarily promote attachment.",
                "Capsules are external to the bacterial wall."
            ],
            [
                "FLAGELLA = movement.",
                "FIMBRIAE = stick.",
                "PILUS = pass DNA.",
                "BIOFILM = community shield.",
                "ENDOSPORE = survive."
            ],
            [
                "Capsules can inhibit phagocytosis.",
                "Fimbriae promote adherence.",
                "Sex pili transfer DNA.",
                "Flagella promote motility.",
                "Biofilms support persistent device infections.",
                "Endospores provide extreme environmental resistance."
            ],
            [
                {
                    id: "ext1",
                    type: "mcq",
                    q: "Which bacterial structure is most directly associated with plasmid transfer during conjugation?",
                    choices: ["Flagellum", "Sex pilus", "Capsule", "Endospore"],
                    answer: 1,
                    explanation: "Conjugative pili facilitate direct cell-to-cell transfer of plasmid DNA."
                },
                {
                    id: "ext2",
                    type: "mcq",
                    q: "Why can removal of an infected catheter sometimes be necessary despite appropriate antibiotics?",
                    choices: [
                        "Biofilm organisms may persist on the device.",
                        "Antibiotics cannot enter blood.",
                        "Catheters destroy all antibodies.",
                        "Bacteria become viruses on plastic."
                    ],
                    answer: 0,
                    explanation: "Device-associated biofilms can protect organisms and allow persistent infection despite antimicrobial therapy."
                },
                {
                    id: "ext3",
                    type: "mcq",
                    q: "Which statement about bacterial endospores is correct?",
                    choices: [
                        "They are reproductive structures.",
                        "They are highly resistant survival structures.",
                        "They occur in all Gram-negative bacteria.",
                        "They are viral particles."
                    ],
                    answer: 1,
                    explanation: "Endospores allow certain bacteria to survive harsh environmental conditions."
                }
            ],
            ["Theory", "Clinical", "Lab"]
        ),

        topic(
            "microbial-growth",
            10,
            2,
            "Microbial Growth, Nutrition & the Growth Curve",
            "Understand microbial nutritional needs, generation time, exponential growth and the lag, log, stationary and death phases.",
            [
                "Describe major microbial nutritional requirements.",
                "Define generation time.",
                "Explain exponential population growth.",
                "Identify the four phases of a standard growth curve.",
                "Relate growth phase to metabolism and antimicrobial susceptibility."
            ],
            [
                ["Generation time", "Time required for a microbial population to double."],
                ["Lag phase", "Adaptation phase before maximal cell division."],
                ["Log phase", "Exponential phase of rapid population growth."],
                ["Stationary phase", "Phase in which growth and death rates are approximately balanced."],
                ["Death phase", "Phase in which viable cell numbers decline."],
                ["Fastidious organism", "Organism with complex nutritional requirements."],
                ["Binary fission", "Primary process of bacterial reproduction."],
                ["Exponential growth", "Population increase through repeated doubling."]
            ],
            [
                section(
                    "NUTRITION",
                    "Microorganisms Need Carbon, Energy and Building Blocks",
                    [
                        "Microorganisms require carbon, nitrogen, phosphorus, sulfur, minerals and trace elements.",
                        "Some also require vitamins and special growth factors.",
                        "Fastidious organisms require enriched media because they cannot synthesize all necessary compounds independently."
                    ]
                ),
                section(
                    "GENERATION TIME",
                    "Population Doubling Can Be Rapid",
                    [
                        "Generation time refers to the time needed for a population to double.",
                        "Under ideal conditions, repeated doubling can produce very large populations from a small inoculum.",
                        "Generation time differs greatly among organisms and changes with temperature, nutrients and other environmental conditions."
                    ]
                ),
                section(
                    "LAG PHASE",
                    "Adaptation Before Rapid Growth",
                    [
                        "During lag phase, bacteria adapt to a new environment.",
                        "Cells may synthesize enzymes, repair damage and prepare for division.",
                        "The population does not increase rapidly, but cells are metabolically active."
                    ]
                ),
                section(
                    "LOG PHASE",
                    "Exponential Division",
                    [
                        "During log phase, cells divide at the maximum rate permitted by the environment.",
                        "Cellular metabolism is highly active.",
                        "Antibiotics that target active cell-wall synthesis may be especially effective during rapid growth."
                    ]
                ),
                section(
                    "STATIONARY AND DEATH",
                    "Nutrients Become Limited",
                    [
                        "As nutrients are depleted and waste accumulates, the population enters stationary phase.",
                        "The number of newly produced cells is approximately balanced by the number dying.",
                        "Eventually, viable cell numbers decline during the death phase."
                    ],
                    [
                        ["Phase", "Main Event"],
                        ["Lag", "Adaptation"],
                        ["Log", "Rapid exponential division"],
                        ["Stationary", "Growth ≈ death"],
                        ["Death", "Viable count decreases"]
                    ]
                )
            ],
            {
                title: "Cell-Wall Active Antibiotic",
                scenario: "A beta-lactam antibiotic is administered to susceptible bacteria that are rapidly dividing.",
                connection: "Actively dividing cells are synthesizing peptidoglycan and may be particularly vulnerable to cell-wall synthesis inhibitors."
            },
            [
                ["Which growth phase contains the most rapid division?", "Log phase.", ["The population increases exponentially."]],
                ["What occurs during lag phase?", "Metabolic adaptation.", ["Cells prepare for rapid growth."]],
                ["What defines stationary phase?", "Growth and death are approximately balanced.", ["Nutrients are limited and waste accumulates."]]
            ],
            [
                "Lag phase does not mean complete metabolic inactivity.",
                "Stationary phase does not mean every cell has stopped functioning.",
                "Generation time is population doubling time, not lifespan."
            ],
            [
                "LAG = learn the environment.",
                "LOG = lots of growth.",
                "STATIONARY = stable total count.",
                "DEATH = decline."
            ],
            [
                "Microbes require nutrients and energy.",
                "Generation time is doubling time.",
                "Lag phase is adaptation.",
                "Log phase is exponential growth.",
                "Stationary phase balances growth and death.",
                "Death phase shows declining viability."
            ],
            [
                {
                    id: "growth1",
                    type: "mcq",
                    q: "During which growth phase are bacteria usually dividing most rapidly?",
                    choices: ["Lag", "Log", "Stationary", "Death"],
                    answer: 1,
                    explanation: "Log phase is characterized by rapid exponential division."
                },
                {
                    id: "growth2",
                    type: "mcq",
                    q: "Which statement about lag phase is most accurate?",
                    choices: [
                        "Cells are metabolically adapting.",
                        "Every cell is dead.",
                        "The culture is sterile.",
                        "The population is already at maximal density."
                    ],
                    answer: 0,
                    explanation: "Cells in lag phase are adapting to the environment and preparing for division."
                }
            ]
        ),

        topic(
            "environmental-growth",
            11,
            2,
            "Temperature, pH, Oxygen & Osmotic Requirements",
            "Learn how physical and chemical environmental factors determine where microorganisms can grow.",
            [
                "Classify microbes according to temperature preference.",
                "Differentiate obligate aerobes, obligate anaerobes and facultative anaerobes.",
                "Explain microaerophiles and aerotolerant anaerobes.",
                "Explain the effects of pH and osmotic pressure.",
                "Connect oxygen requirements with specimen collection."
            ],
            [
                ["Psychrophile", "Microorganism adapted to cold temperatures."],
                ["Mesophile", "Microorganism preferring moderate temperatures."],
                ["Thermophile", "Microorganism preferring high temperatures."],
                ["Obligate aerobe", "Organism requiring oxygen."],
                ["Obligate anaerobe", "Organism unable to grow in normal atmospheric oxygen."],
                ["Facultative anaerobe", "Organism capable of growth with or without oxygen."],
                ["Microaerophile", "Organism requiring oxygen at lower-than-atmospheric concentrations."],
                ["Aerotolerant anaerobe", "Organism that does not use oxygen but tolerates it."],
                ["Halophile", "Organism adapted to high salt concentration."]
            ],
            [
                section(
                    "TEMPERATURE",
                    "Most Human Pathogens Are Mesophiles",
                    [
                        "Many human pathogens grow best near body temperature and are therefore classified as mesophiles.",
                        "Cold-adapted psychrophiles are more common in cold environments.",
                        "Thermophiles contain enzymes and membranes adapted to high temperatures."
                    ]
                ),
                section(
                    "OXYGEN",
                    "Microbes Handle Oxygen Differently",
                    [
                        "Obligate aerobes require oxygen for energy metabolism.",
                        "Obligate anaerobes cannot tolerate ordinary oxygen exposure because they lack sufficient systems for detoxifying reactive oxygen species.",
                        "Facultative anaerobes grow with or without oxygen and often grow more efficiently when oxygen is available."
                    ]
                ),
                section(
                    "MICROAEROPHILES",
                    "Some Organisms Need Less Oxygen",
                    [
                        "Microaerophiles require oxygen but at concentrations below atmospheric levels.",
                        "Campylobacter and Helicobacter are classic examples.",
                        "Special culture conditions are often required to recover these organisms."
                    ]
                ),
                section(
                    "PH",
                    "Hydrogen Ion Concentration Affects Enzymes",
                    [
                        "Most human pathogens grow best near neutral pH.",
                        "Certain organisms tolerate acidic environments such as the stomach or vagina.",
                        "Extreme pH can alter protein shape, membrane stability and transport processes."
                    ]
                ),
                section(
                    "OSMOTIC PRESSURE",
                    "Water Availability Determines Growth",
                    [
                        "High salt or sugar concentrations draw water out of microbial cells.",
                        "This is one reason salt and sugar can preserve food.",
                        "Some organisms tolerate or require high salt concentrations.",
                        "Staphylococci have relatively strong salt tolerance, contributing to survival on skin."
                    ]
                )
            ],
            {
                title: "Anaerobic Wound Culture",
                scenario: "A deep necrotic wound is suspected to contain obligate anaerobic bacteria.",
                connection: "Exposure to oxygen during collection or transport can decrease recovery of anaerobes, so appropriate anaerobic transport systems are important."
            },
            [
                ["Which organisms grow with or without oxygen?", "Facultative anaerobes.", ["They can switch metabolic strategies."]],
                ["Why are many pathogens mesophiles?", "Their optimal temperature range overlaps body temperature.", ["The human body provides a moderate stable environment."]],
                ["Why can high salt inhibit bacteria?", "It decreases available water and creates osmotic stress.", ["Water leaves cells in hypertonic conditions."]]
            ],
            [
                "Facultative anaerobes do not require oxygen.",
                "Anaerobic does not mean every organism immediately dies after brief oxygen exposure.",
                "Most human pathogens are mesophiles, not thermophiles."
            ],
            [
                "MESO = middle temperature.",
                "FACULTATIVE = flexible about oxygen.",
                "OBLIGATE anaerobe = oxygen is a problem."
            ],
            [
                "Most human pathogens are mesophiles.",
                "Obligate aerobes require oxygen.",
                "Obligate anaerobes are harmed by oxygen.",
                "Facultative anaerobes grow with or without oxygen.",
                "pH affects enzyme and membrane function.",
                "Osmotic stress can inhibit growth."
            ],
            [
                {
                    id: "env1",
                    type: "mcq",
                    q: "Which organism category can grow in both the presence and absence of oxygen?",
                    choices: ["Obligate aerobe", "Obligate anaerobe", "Facultative anaerobe", "Microaerophile only"],
                    answer: 2,
                    explanation: "Facultative anaerobes can use oxygen when available but can also grow without it."
                },
                {
                    id: "env2",
                    type: "mcq",
                    q: "A deep tissue specimen suspected of containing obligate anaerobes should be:",
                    choices: [
                        "Protected from oxygen during transport.",
                        "Left open to room air.",
                        "Boiled before transport.",
                        "Mixed with alcohol."
                    ],
                    answer: 0,
                    explanation: "Obligate anaerobes may be damaged by oxygen, so anaerobic collection and transport methods improve recovery."
                }
            ]
        ),

        topic(
            "metabolism",
            12,
            2,
            "Microbial Metabolism, Respiration & Fermentation",
            "Understand microbial energy production and how metabolic differences are used in identification.",
            [
                "Differentiate catabolism and anabolism.",
                "Explain enzyme function.",
                "Explain glycolysis.",
                "Compare aerobic respiration, anaerobic respiration and fermentation.",
                "Explain ATP production conceptually.",
                "Connect fermentation products with bacterial identification."
            ],
            [
                ["Metabolism", "All chemical reactions occurring in a cell."],
                ["Catabolism", "Breakdown reactions that release energy."],
                ["Anabolism", "Synthetic reactions that require energy."],
                ["Enzyme", "Biological catalyst."],
                ["Glycolysis", "Pathway converting glucose to pyruvate."],
                ["Aerobic respiration", "Respiration using oxygen as the final electron acceptor."],
                ["Anaerobic respiration", "Respiration using an electron acceptor other than oxygen."],
                ["Fermentation", "ATP-producing metabolism that does not use an external respiratory electron acceptor."],
                ["ATP", "Major cellular energy-transfer molecule."]
            ],
            [
                section(
                    "ENERGY",
                    "Catabolism Powers Cellular Work",
                    [
                        "Catabolic pathways break down nutrients and release energy.",
                        "Cells capture part of this energy in ATP and reduced electron carriers.",
                        "Anabolic pathways use ATP to build proteins, nucleic acids, lipids and other cellular structures."
                    ]
                ),
                section(
                    "ENZYMES",
                    "Biological Catalysts Control Reaction Rates",
                    [
                        "Enzymes lower activation energy and accelerate biochemical reactions.",
                        "Their activity depends on temperature, pH and substrate availability.",
                        "Because enzymes are specific, the enzymes present in a microorganism strongly influence its metabolic capabilities."
                    ]
                ),
                section(
                    "GLYCOLYSIS",
                    "Breaking Glucose Into Pyruvate",
                    [
                        "Glycolysis occurs in the cytoplasm and converts glucose into pyruvate.",
                        "The pathway produces a small amount of ATP through substrate-level phosphorylation.",
                        "It also produces reduced electron carriers that can be used during respiration."
                    ]
                ),
                section(
                    "RESPIRATION",
                    "Electron Transport Produces Large ATP Yields",
                    [
                        "Aerobic respiration uses oxygen as the final electron acceptor.",
                        "Anaerobic respiration uses alternative acceptors such as nitrate in certain bacteria.",
                        "Both use an electron transport chain and generally produce more ATP than fermentation."
                    ]
                ),
                section(
                    "FERMENTATION",
                    "Fermentation Helps Glycolysis Continue",
                    [
                        "Fermentation regenerates oxidized electron carriers so glycolysis can continue when respiratory pathways are unavailable.",
                        "Different organisms produce different end products such as lactic acid, ethanol, mixed acids or gases.",
                        "Clinical laboratories use these metabolic patterns to help identify bacteria."
                    ]
                )
            ],
            {
                title: "Lactose Fermentation on MacConkey Agar",
                scenario: "A Gram-negative organism grows as pink colonies on MacConkey agar.",
                connection: "Pink coloration indicates acid production from lactose fermentation, narrowing the identification toward organisms such as E. coli or Klebsiella."
            },
            [
                ["Which pathway converts glucose to pyruvate?", "Glycolysis.", ["It occurs in the cytoplasm."]],
                ["Which generally yields more ATP: respiration or fermentation?", "Respiration.", ["Electron transport and oxidative phosphorylation increase ATP yield."]],
                ["Why are fermentation reactions useful in identification?", "Different organisms metabolize carbohydrates differently.", ["Acid or gas production can produce visible test results."]]
            ],
            [
                "Fermentation and anaerobic respiration are not the same process.",
                "Aerobic respiration is not required by all bacteria.",
                "Enzymes accelerate reactions but are not consumed as reaction products."
            ],
            [
                "CATABOLISM = cut down.",
                "ANABOLISM = assemble.",
                "GLYCOLYSIS = glucose splitting.",
                "FERMENTATION = keep glycolysis going."
            ],
            [
                "Catabolism releases energy.",
                "Anabolism builds structures.",
                "Glycolysis produces pyruvate.",
                "Respiration generally produces more ATP than fermentation.",
                "Fermentation regenerates electron carriers.",
                "Metabolic differences help identify microorganisms."
            ],
            [
                {
                    id: "met1",
                    type: "mcq",
                    q: "Which process generally produces the greatest ATP yield from glucose?",
                    choices: ["Aerobic respiration", "Fermentation", "Simple diffusion", "Gram staining"],
                    answer: 0,
                    explanation: "Aerobic respiration uses electron transport and oxidative phosphorylation and generally produces far more ATP than fermentation."
                },
                {
                    id: "met2",
                    type: "mcq",
                    q: "What is one major purpose of fermentation?",
                    choices: [
                        "Regenerate electron carriers so glycolysis can continue.",
                        "Create a bacterial nucleus.",
                        "Destroy all ATP.",
                        "Produce peptidoglycan directly."
                    ],
                    answer: 0,
                    explanation: "Fermentation regenerates oxidized electron carriers needed for continued glycolysis."
                }
            ]
        ),

        topic(
            "genetics",
            13,
            2,
            "Bacterial Genetics: DNA, Replication, Transcription & Translation",
            "Learn how bacterial genetic information is stored, copied, regulated and expressed as proteins.",
            [
                "Describe the bacterial chromosome.",
                "Explain plasmids.",
                "Explain DNA replication.",
                "Differentiate transcription and translation.",
                "Explain operons conceptually.",
                "Connect gene expression with bacterial phenotype."
            ],
            [
                ["Chromosome", "Large DNA molecule carrying essential genetic information."],
                ["Plasmid", "Small independently replicating DNA molecule often carrying accessory genes."],
                ["Replication", "Copying of DNA before cell division."],
                ["Transcription", "Synthesis of RNA from DNA."],
                ["Translation", "Synthesis of protein from messenger RNA."],
                ["mRNA", "Messenger RNA carrying coding information to ribosomes."],
                ["Operon", "Group of bacterial genes controlled together."],
                ["Gene expression", "Use of genetic information to produce RNA or protein."]
            ],
            [
                section(
                    "CHROMOSOMAL DNA",
                    "The Bacterial Genome",
                    [
                        "Most bacterial genes are located on one main chromosome within the nucleoid.",
                        "The chromosome contains genes required for basic cellular survival, metabolism and reproduction.",
                        "Bacterial genomes are generally much smaller than human genomes."
                    ]
                ),
                section(
                    "PLASMIDS",
                    "Accessory DNA With Major Clinical Importance",
                    [
                        "Plasmids are smaller DNA molecules that replicate independently.",
                        "They often carry genes that provide advantages under specific conditions.",
                        "Examples include antibiotic-resistance genes, toxin genes and metabolic pathways."
                    ]
                ),
                section(
                    "DNA REPLICATION",
                    "Copying Genetic Information Before Division",
                    [
                        "Before binary fission, the bacterial chromosome must be replicated.",
                        "DNA polymerases synthesize new DNA using existing strands as templates.",
                        "Accurate replication is essential, but occasional errors provide a source of mutation."
                    ]
                ),
                section(
                    "TRANSCRIPTION",
                    "DNA to RNA",
                    [
                        "During transcription, RNA polymerase binds DNA and produces an RNA copy.",
                        "Messenger RNA contains coding information that can be translated into protein.",
                        "Because bacteria lack a nucleus, transcription occurs in the same cellular compartment as translation."
                    ]
                ),
                section(
                    "TRANSLATION AND REGULATION",
                    "RNA to Protein",
                    [
                        "Ribosomes read mRNA codons and assemble amino acids into proteins.",
                        "Bacteria can regulate groups of genes through systems such as operons.",
                        "Gene regulation allows rapid adaptation to nutrients, temperature, oxygen and other environmental changes."
                    ]
                )
            ],
            {
                title: "Resistance Plasmid",
                scenario: "A bacterium carries a plasmid encoding an enzyme that destroys a beta-lactam antibiotic.",
                connection: "Plasmids can carry clinically important accessory genes, including antimicrobial-resistance determinants."
            },
            [
                ["What is transcription?", "RNA synthesis from DNA.", ["RNA polymerase copies information from DNA."]],
                ["What is translation?", "Protein synthesis from mRNA.", ["Ribosomes decode the mRNA sequence."]],
                ["Why are plasmids clinically important?", "They can carry resistance and virulence genes.", ["Plasmids can also move between bacteria."]]
            ],
            [
                "Plasmids are not the same as the primary chromosome.",
                "Transcription produces RNA, not protein.",
                "Translation occurs on ribosomes.",
                "Bacterial transcription and translation can occur simultaneously."
            ],
            [
                "DNA → RNA = transcription.",
                "RNA → protein = translation.",
                "PLASMID = extra genetic toolkit."
            ],
            [
                "Bacteria contain chromosomal DNA.",
                "Plasmids carry accessory genes.",
                "Replication copies DNA.",
                "Transcription produces RNA.",
                "Translation produces protein.",
                "Gene regulation allows adaptation."
            ],
            [
                {
                    id: "gen1",
                    type: "mcq",
                    q: "Which process directly produces messenger RNA from DNA?",
                    choices: ["Translation", "Transcription", "Conjugation", "Binary fission"],
                    answer: 1,
                    explanation: "Transcription is the synthesis of RNA using DNA as a template."
                },
                {
                    id: "gen2",
                    type: "mcq",
                    q: "Which genetic element commonly carries accessory antibiotic-resistance genes?",
                    choices: ["Plasmid", "Capsule", "Flagellum", "Endospore"],
                    answer: 0,
                    explanation: "Plasmids frequently carry resistance genes and can be transferred between bacteria."
                }
            ]
        ),

        topic(
            "mutation-transfer",
            14,
            2,
            "Mutation, Transformation, Transduction & Conjugation",
            "Learn how mutations arise and how bacteria exchange genetic material through horizontal gene transfer.",
            [
                "Define mutation.",
                "Explain selection of resistant variants.",
                "Explain transformation.",
                "Explain transduction.",
                "Explain conjugation.",
                "Connect horizontal transfer with multidrug resistance."
            ],
            [
                ["Mutation", "Heritable change in genetic material."],
                ["Point mutation", "Change involving a single nucleotide pair."],
                ["Horizontal gene transfer", "Transfer of genetic material between organisms outside parent-to-offspring inheritance."],
                ["Transformation", "Uptake of free DNA from the environment."],
                ["Transduction", "Bacteriophage-mediated transfer of bacterial DNA."],
                ["Conjugation", "Direct cell-to-cell DNA transfer."],
                ["Bacteriophage", "Virus that infects bacteria."],
                ["Selection pressure", "Environmental force that favors organisms with advantageous traits."]
            ],
            [
                section(
                    "MUTATION",
                    "Variation Can Arise During DNA Replication",
                    [
                        "DNA replication is highly accurate but not perfect.",
                        "Spontaneous mutations occasionally change bacterial proteins or regulatory sequences.",
                        "A mutation may be harmful, neutral or beneficial depending on the environment."
                    ]
                ),
                section(
                    "SELECTION",
                    "Antibiotics Select Resistance Rather Than Creating Need-Directed Mutations",
                    [
                        "A bacterial population may already contain rare resistant variants before antibiotic exposure.",
                        "Treatment suppresses susceptible organisms, allowing resistant cells to survive and expand.",
                        "This is natural selection acting on microbial populations."
                    ]
                ),
                section(
                    "TRANSFORMATION",
                    "Uptake of Naked Environmental DNA",
                    [
                        "Certain bacteria can take up free DNA released from dead or damaged cells.",
                        "If the new DNA recombines or persists, the recipient can gain new traits.",
                        "Transformation does not require bacteriophages or direct cell contact."
                    ]
                ),
                section(
                    "TRANSDUCTION",
                    "Bacteriophages as Gene Carriers",
                    [
                        "Bacteriophages infect bacterial cells.",
                        "Occasionally, bacterial DNA becomes packaged into phage particles.",
                        "When that phage infects another bacterium, it can deliver bacterial genes to the new cell."
                    ]
                ),
                section(
                    "CONJUGATION",
                    "Direct Cell-to-Cell Transfer",
                    [
                        "Conjugation requires physical interaction between donor and recipient bacteria.",
                        "Transfer plasmids encode machinery that moves DNA between cells.",
                        "Resistance plasmids can carry multiple resistance genes, allowing multidrug resistance to spread rapidly."
                    ]
                )
            ],
            {
                title: "Hospital Spread of a Resistance Plasmid",
                scenario: "Several different Gram-negative bacterial species in the same unit acquire the same carbapenem-resistance gene.",
                connection: "Horizontal gene transfer, particularly plasmid-mediated conjugation, can spread resistance genes across bacterial populations."
            },
            [
                ["Which mechanism involves free environmental DNA?", "Transformation.", ["No bacteriophage or direct cell contact is required."]],
                ["Which mechanism uses a bacteriophage?", "Transduction.", ["Phages can accidentally transfer bacterial DNA."]],
                ["Which mechanism often transfers plasmids through direct cell contact?", "Conjugation.", ["Conjugative machinery moves DNA between cells."]]
            ],
            [
                "Antibiotics usually select resistant variants rather than causing purposeful mutation.",
                "Transformation does not use a bacteriophage.",
                "Transduction is phage mediated.",
                "Conjugation commonly spreads resistance plasmids."
            ],
            [
                "TRANSFORMATION = take DNA from surroundings.",
                "TRANSDUCTION = virus delivers DNA.",
                "CONJUGATION = bacteria connect."
            ],
            [
                "Mutations create genetic variation.",
                "Selection favors advantageous traits.",
                "Transformation uses free DNA.",
                "Transduction uses bacteriophages.",
                "Conjugation involves direct transfer.",
                "Horizontal gene transfer accelerates antimicrobial resistance."
            ],
            [
                {
                    id: "hgt1",
                    type: "mcq",
                    q: "A bacterium receives an antibiotic-resistance plasmid directly from another bacterium. Which process occurred?",
                    choices: ["Transformation", "Conjugation", "Transduction", "Mutation only"],
                    answer: 1,
                    explanation: "Conjugation commonly transfers plasmid DNA through direct cell-to-cell contact."
                },
                {
                    id: "hgt2",
                    type: "mcq",
                    q: "A bacteriophage transfers a toxin gene from one bacterial cell to another. This is:",
                    choices: ["Transformation", "Transduction", "Conjugation", "Binary fission"],
                    answer: 1,
                    explanation: "Transduction is bacteriophage-mediated transfer of bacterial DNA."
                },
                {
                    id: "hgt3",
                    type: "mcq",
                    q: "Which statement best describes antibiotic selection pressure?",
                    choices: [
                        "Antibiotics favor survival of resistant organisms.",
                        "Antibiotics intentionally teach bacteria to mutate.",
                        "Antibiotics eliminate all resistance genes.",
                        "Antibiotics prevent horizontal gene transfer permanently."
                    ],
                    answer: 0,
                    explanation: "Antibiotic exposure suppresses susceptible organisms and can allow resistant organisms to survive and expand."
                }
            ],
            ["Genetics", "Clinical", "High Yield"]
        ),

        // ====================================================================
        // MODULE 3
        // ====================================================================

        topic(
            "physical-control",
            15,
            3,
            "Sterilization & Physical Control of Microorganisms",
            "Understand sterilization, disinfection, moist heat, dry heat, filtration, pasteurization and radiation.",
            [
                "Define sterilization, disinfection and antisepsis.",
                "Explain autoclave sterilization.",
                "Differentiate moist and dry heat.",
                "Explain filtration.",
                "Explain pasteurization.",
                "Compare ionizing and ultraviolet radiation."
            ],
            [
                ["Sterilization", "Destruction or removal of all viable microorganisms including bacterial endospores."],
                ["Disinfection", "Reduction or destruction of many pathogens on inanimate objects."],
                ["Antisepsis", "Chemical reduction of microorganisms on living tissue."],
                ["Autoclave", "Device using pressurized steam for sterilization."],
                ["Pasteurization", "Controlled heat treatment that reduces pathogens without sterilizing."],
                ["Filtration", "Physical removal of microorganisms from fluids or air."],
                ["Ionizing radiation", "High-energy radiation causing extensive molecular and DNA damage."],
                ["UV radiation", "Nonionizing radiation that damages DNA but penetrates poorly."]
            ],
            [
                section(
                    "STERILIZATION",
                    "The Highest Level of Microbial Control",
                    [
                        "Sterilization eliminates all viable microorganisms, including bacterial endospores.",
                        "Sterility is required for instruments entering sterile tissue or the vascular system.",
                        "Not every cleaning or disinfection process produces sterility."
                    ]
                ),
                section(
                    "MOIST HEAT",
                    "Steam Transfers Heat Efficiently",
                    [
                        "Moist heat denatures proteins and damages membranes.",
                        "Boiling kills many vegetative organisms but is not reliable sterilization because endospores may survive.",
                        "An autoclave combines steam, pressure and time to achieve reliable sterilization."
                    ]
                ),
                section(
                    "DRY HEAT",
                    "Useful for Selected Heat-Stable Materials",
                    [
                        "Dry heat kills mainly through oxidation and dehydration.",
                        "Higher temperatures and longer exposure times are generally required compared with moist heat.",
                        "Dry heat may be used for certain glassware, powders and oils."
                    ]
                ),
                section(
                    "FILTRATION",
                    "Remove Rather Than Kill",
                    [
                        "Filtration is useful for heat-sensitive fluids that cannot be autoclaved.",
                        "Membrane filters physically retain microorganisms.",
                        "HEPA filtration removes many airborne particles from specialized environments."
                    ]
                ),
                section(
                    "RADIATION",
                    "Penetration Determines Use",
                    [
                        "Ultraviolet radiation damages DNA but has poor penetration, making it most useful for exposed surfaces and air.",
                        "Ionizing radiation penetrates more deeply and can sterilize certain disposable medical products.",
                        "Radiation effectiveness depends on dose, exposure and material characteristics."
                    ]
                )
            ],
            {
                title: "Sterilizing Surgical Instruments",
                scenario: "Reusable surgical instruments must be processed in a way that destroys bacterial endospores.",
                connection: "For heat-stable instruments, autoclaving is a standard method because pressurized steam can achieve sterilization."
            },
            [
                ["Does boiling reliably sterilize?", "No.", ["Many vegetative cells die, but endospores may survive."]],
                ["What does an autoclave use?", "Pressurized steam.", ["Steam transfers heat efficiently."]],
                ["When is filtration especially useful?", "For heat-sensitive fluids.", ["Microorganisms are removed physically rather than destroyed by heat."]]
            ],
            [
                "Disinfection is not sterilization.",
                "Boiling is not reliable sterilization.",
                "UV light has poor penetration.",
                "Autoclave pressure allows steam to reach higher temperatures; pressure itself is not the primary killing mechanism."
            ],
            [
                "STERILIZATION = everything, including spores.",
                "AUTOCLAVE = steam + pressure + time.",
                "FILTER = physically remove."
            ],
            [
                "Sterilization destroys all viable microorganisms.",
                "Autoclaves use pressurized steam.",
                "Boiling is not dependable sterilization.",
                "Filtration protects heat-sensitive materials.",
                "UV has poor penetration.",
                "Ionizing radiation penetrates more deeply."
            ],
            [
                {
                    id: "physcontrol1",
                    type: "mcq",
                    q: "Which method is most appropriate for sterilizing reusable heat-stable surgical instruments?",
                    choices: ["Autoclaving", "Refrigeration", "Low-level disinfection", "Visible light"],
                    answer: 0,
                    explanation: "Autoclaving uses pressurized steam and can reliably destroy bacterial endospores."
                },
                {
                    id: "physcontrol2",
                    type: "mcq",
                    q: "Why is boiling not considered reliable sterilization?",
                    choices: [
                        "Some bacterial endospores can survive.",
                        "Boiling does not heat water.",
                        "Boiling always produces radiation.",
                        "Vegetative bacteria multiply faster at boiling temperatures."
                    ],
                    answer: 0,
                    explanation: "Boiling kills many vegetative cells but may not destroy bacterial endospores."
                }
            ],
            ["Lab", "Clinical", "High Yield"]
        ),

        topic(
            "chemical-control",
            16,
            3,
            "Disinfectants, Antiseptics & Chemical Control",
            "Learn the mechanisms and clinical uses of alcohols, chlorhexidine, chlorine, iodine, oxidizing agents and other antimicrobial chemicals.",
            [
                "Differentiate antiseptics and disinfectants.",
                "Explain levels of disinfection.",
                "Describe alcohol action.",
                "Describe chlorhexidine.",
                "Explain chlorine and oxidizing agents.",
                "Identify factors affecting disinfectant effectiveness."
            ],
            [
                ["Disinfectant", "Chemical used mainly on inanimate surfaces."],
                ["Antiseptic", "Chemical used on living tissue."],
                ["High-level disinfection", "Destroys essentially all microorganisms except high numbers of bacterial spores."],
                ["Alcohol", "Agent that denatures proteins and disrupts lipid membranes."],
                ["Chlorhexidine", "Persistent skin antiseptic that disrupts microbial membranes."],
                ["Chlorine", "Strong oxidizing disinfectant."],
                ["Iodophor", "Iodine-containing antiseptic preparation."],
                ["Contact time", "Required duration that a disinfectant remains wet on a surface."],
                ["Organic load", "Blood, tissue or other material that may reduce disinfectant activity."]
            ],
            [
                section(
                    "ANTISEPTIC VS DISINFECTANT",
                    "The Intended Surface Matters",
                    [
                        "Antiseptics are formulated for living tissue such as skin.",
                        "Disinfectants are used on inanimate surfaces and equipment.",
                        "A chemical safe for a countertop may not be safe for skin."
                    ]
                ),
                section(
                    "ALCOHOLS",
                    "Rapid Membrane and Protein Damage",
                    [
                        "Alcohols denature proteins and disrupt lipid membranes.",
                        "They work rapidly against many vegetative bacteria and enveloped viruses.",
                        "They are not reliable against bacterial endospores."
                    ]
                ),
                section(
                    "CHLORHEXIDINE",
                    "Persistent Skin Activity",
                    [
                        "Chlorhexidine disrupts microbial membranes and binds to skin.",
                        "Its residual activity makes it useful for surgical preparation and vascular-access procedures.",
                        "Correct application and drying time remain important."
                    ]
                ),
                section(
                    "HALOGENS AND OXIDIZERS",
                    "Strong Chemical Damage",
                    [
                        "Chlorine compounds oxidize microbial cellular components and are widely used for environmental disinfection.",
                        "Iodine compounds are frequently used as antiseptics.",
                        "Hydrogen peroxide and related oxidizing agents damage proteins, lipids and nucleic acids."
                    ]
                ),
                section(
                    "WHAT CHANGES EFFECTIVENESS",
                    "Concentration and Contact Time Matter",
                    [
                        "Disinfectant effectiveness depends on concentration, contact time, temperature and microbial type.",
                        "Organic material can protect microorganisms or chemically interfere with disinfectants.",
                        "Cleaning before disinfection improves effectiveness by removing debris."
                    ]
                )
            ],
            {
                title: "Central-Line Skin Preparation",
                scenario: "Before central-line insertion, chlorhexidine is applied to the patient's skin according to protocol.",
                connection: "Chlorhexidine is an antiseptic with persistent activity on skin and is widely used for vascular-access preparation."
            },
            [
                ["What is an antiseptic used on?", "Living tissue.", ["Skin antisepsis is a common example."]],
                ["Why must surfaces often be cleaned before disinfection?", "Organic matter can reduce disinfectant activity.", ["Physical removal improves chemical access."]],
                ["Why does contact time matter?", "The chemical must remain present long enough to achieve intended activity.", ["Wiping too early may reduce effectiveness."]]
            ],
            [
                "Alcohol is not reliable sterilization.",
                "Antiseptic and disinfectant are not interchangeable terms.",
                "A stronger concentration is not automatically safer or more effective.",
                "Cleaning and disinfection are different steps."
            ],
            [
                "ANTISEPTIC = skin.",
                "DISINFECTANT = surface.",
                "CONTACT TIME = keep it wet long enough."
            ],
            [
                "Antiseptics are used on living tissue.",
                "Disinfectants are used on surfaces.",
                "Alcohol damages proteins and membranes.",
                "Chlorhexidine has persistent skin activity.",
                "Organic matter can reduce effectiveness.",
                "Contact time is essential."
            ],
            [
                {
                    id: "chemcontrol1",
                    type: "mcq",
                    q: "Chlorhexidine applied to a patient's skin before central-line insertion is best classified as a:",
                    choices: ["Antiseptic", "Culture medium", "Antibiotic resistance enzyme", "Sterile nutrient"],
                    answer: 0,
                    explanation: "Antiseptics are antimicrobial chemicals designed for use on living tissue."
                },
                {
                    id: "chemcontrol2",
                    type: "mcq",
                    q: "Which factor can significantly reduce the effectiveness of many disinfectants?",
                    choices: ["Organic contamination", "Correct contact time", "Proper dilution", "Surface cleaning"],
                    answer: 0,
                    explanation: "Blood, tissue and other organic material may protect microorganisms and interfere with chemical action."
                }
            ]
        ),

        topic(
            "antibiotics",
            17,
            3,
            "Antibiotic Classes & Mechanisms of Action",
            "Learn the major bacterial targets of beta-lactams, glycopeptides, aminoglycosides, tetracyclines, macrolides, fluoroquinolones and folate inhibitors.",
            [
                "Explain selective toxicity.",
                "Identify the major antimicrobial target categories.",
                "Explain beta-lactam and glycopeptide action.",
                "Differentiate 30S and 50S ribosomal inhibitors.",
                "Explain nucleic-acid synthesis inhibitors.",
                "Differentiate bactericidal and bacteriostatic action."
            ],
            [
                ["Selective toxicity", "Preferential damage to microorganisms rather than host cells."],
                ["Bactericidal", "Kills bacteria."],
                ["Bacteriostatic", "Inhibits bacterial growth."],
                ["Beta-lactam", "Drug class inhibiting peptidoglycan cross-linking."],
                ["Vancomycin", "Glycopeptide antibiotic inhibiting cell-wall synthesis in susceptible Gram-positive organisms."],
                ["Aminoglycoside", "30S ribosomal inhibitor."],
                ["Tetracycline", "30S ribosomal inhibitor."],
                ["Macrolide", "50S ribosomal inhibitor."],
                ["Fluoroquinolone", "Inhibits bacterial DNA replication enzymes."],
                ["Sulfonamide", "Inhibits bacterial folate metabolism."]
            ],
            [
                section(
                    "SELECTIVE TOXICITY",
                    "Target What Humans Do Not Have",
                    [
                        "The best antibacterial targets are structures or pathways absent from human cells or sufficiently different from them.",
                        "Peptidoglycan is an excellent example because human cells do not possess it.",
                        "Bacterial ribosomes also differ from human cytoplasmic ribosomes."
                    ]
                ),
                section(
                    "CELL-WALL INHIBITORS",
                    "Beta-Lactams and Glycopeptides",
                    [
                        "Beta-lactams inhibit enzymes involved in peptidoglycan cross-linking.",
                        "Weakening the wall can lead to osmotic lysis in actively growing bacteria.",
                        "Vancomycin interferes with peptidoglycan synthesis through a different binding mechanism and is mainly active against susceptible Gram-positive bacteria."
                    ]
                ),
                section(
                    "30S INHIBITORS",
                    "Aminoglycosides and Tetracyclines",
                    [
                        "Aminoglycosides bind the 30S ribosomal subunit and disrupt accurate protein synthesis.",
                        "Tetracyclines also target the 30S subunit and interfere with aminoacyl-tRNA binding.",
                        "Drug distribution, toxicity and bacterial susceptibility differ considerably between these classes."
                    ]
                ),
                section(
                    "50S INHIBITORS",
                    "Macrolides and Related Drugs",
                    [
                        "Macrolides bind the 50S bacterial ribosomal subunit and inhibit protein synthesis.",
                        "Other 50S-active drugs use different binding sites and mechanisms.",
                        "Because ribosomes are essential, inhibition prevents bacterial growth or survival."
                    ]
                ),
                section(
                    "DNA, RNA AND FOLATE",
                    "Additional Drug Targets",
                    [
                        "Fluoroquinolones inhibit DNA gyrase or topoisomerase enzymes required for bacterial DNA replication.",
                        "Rifamycins inhibit bacterial RNA polymerase.",
                        "Sulfonamides and trimethoprim block sequential steps in bacterial folate metabolism."
                    ],
                    [
                        ["Target", "Example Drug/Class"],
                        ["Cell wall", "Beta-lactams, vancomycin"],
                        ["30S ribosome", "Aminoglycosides, tetracyclines"],
                        ["50S ribosome", "Macrolides"],
                        ["DNA replication", "Fluoroquinolones"],
                        ["RNA synthesis", "Rifamycins"],
                        ["Folate metabolism", "Sulfonamides / trimethoprim"]
                    ]
                )
            ],
            {
                title: "Beta-Lactam Therapy",
                scenario: "A susceptible bacterium is actively dividing while a beta-lactam antibiotic is present.",
                connection: "Beta-lactams inhibit cell-wall cross-linking, weakening peptidoglycan and potentially causing bacterial lysis."
            },
            [
                ["What do beta-lactams target?", "Peptidoglycan cell-wall synthesis.", ["They inhibit penicillin-binding proteins involved in cross-linking."]],
                ["What do tetracyclines and aminoglycosides target?", "The bacterial 30S ribosomal subunit.", ["Both inhibit protein synthesis through different mechanisms."]],
                ["What do macrolides target?", "The bacterial 50S ribosomal subunit.", ["They inhibit protein synthesis."]]
            ],
            [
                "Antibiotics do not treat ordinary viral infections.",
                "Bacteriostatic does not mean clinically ineffective.",
                "Selective toxicity is relative rather than perfect.",
                "Different antibiotics targeting the same broad structure can have very different clinical properties."
            ],
            [
                "30S = aminoglycosides + tetracyclines.",
                "50S = macrolides.",
                "Beta-lactam = break wall building.",
                "Fluoroquinolone = DNA."
            ],
            [
                "Antibiotics exploit microbial targets.",
                "Beta-lactams inhibit cell-wall synthesis.",
                "30S and 50S inhibitors block protein synthesis.",
                "Fluoroquinolones impair DNA replication.",
                "Sulfonamides affect folate metabolism.",
                "Bactericidal drugs kill; bacteriostatic drugs inhibit growth."
            ],
            [
                {
                    id: "abx1",
                    type: "mcq",
                    q: "Why is peptidoglycan an excellent antibacterial target?",
                    choices: [
                        "Human cells lack peptidoglycan.",
                        "Human cells contain more peptidoglycan than bacteria.",
                        "Viruses contain thick peptidoglycan.",
                        "Peptidoglycan is found only in red blood cells."
                    ],
                    answer: 0,
                    explanation: "Human cells do not contain peptidoglycan, supporting selective toxicity."
                },
                {
                    id: "abx2",
                    type: "mcq",
                    q: "Which drug class primarily targets bacterial DNA gyrase or topoisomerase?",
                    choices: ["Fluoroquinolones", "Macrolides", "Glycopeptides", "Sulfonamides"],
                    answer: 0,
                    explanation: "Fluoroquinolones inhibit enzymes required for bacterial DNA replication."
                },
                {
                    id: "abx3",
                    type: "mcq",
                    q: "Which class acts primarily at the bacterial 50S ribosomal subunit?",
                    choices: ["Macrolides", "Tetracyclines", "Aminoglycosides", "Beta-lactams"],
                    answer: 0,
                    explanation: "Macrolides inhibit bacterial protein synthesis by binding the 50S ribosomal subunit."
                }
            ],
            ["Pharmacology", "Clinical", "High Yield"]
        ),

        topic(
            "resistance",
            18,
            3,
            "Antimicrobial Resistance, Susceptibility & Stewardship",
            "Learn how bacteria resist drugs, how laboratories measure susceptibility and how stewardship slows resistance.",
            [
                "Describe major resistance mechanisms.",
                "Explain beta-lactamase and target modification.",
                "Explain efflux and decreased permeability.",
                "Define MIC and susceptibility breakpoints.",
                "Explain antimicrobial stewardship.",
                "Explain why source control matters."
            ],
            [
                ["Antimicrobial resistance", "Ability to survive or grow despite antimicrobial exposure that inhibits susceptible organisms."],
                ["Beta-lactamase", "Enzyme that hydrolyzes beta-lactam antibiotics."],
                ["Target modification", "Resistance produced by changing the drug-binding site."],
                ["Efflux pump", "Transport system that removes antimicrobial drugs from the cell."],
                ["Reduced permeability", "Resistance mechanism that limits drug entry."],
                ["MIC", "Minimum inhibitory concentration."],
                ["Breakpoint", "Standard threshold used to classify susceptibility."],
                ["Antimicrobial stewardship", "Coordinated use of antimicrobials to optimize therapy and limit resistance."]
            ],
            [
                section(
                    "DRUG DESTRUCTION",
                    "Enzymes Can Inactivate Antibiotics",
                    [
                        "Beta-lactamases hydrolyze the beta-lactam ring of susceptible drugs.",
                        "Some enzymes have narrow activity while others, such as ESBLs or carbapenemases, affect many important agents.",
                        "Resistance genes may be encoded on chromosomes or transferable plasmids."
                    ]
                ),
                section(
                    "TARGET MODIFICATION",
                    "Change the Place Where the Drug Binds",
                    [
                        "Mutations or acquired genes can alter antimicrobial targets.",
                        "MRSA produces an altered penicillin-binding protein with reduced affinity for many beta-lactams.",
                        "Vancomycin-resistant enterococci change the terminal structure of peptidoglycan precursors, reducing vancomycin binding."
                    ]
                ),
                section(
                    "EFFLUX AND PERMEABILITY",
                    "Keep the Drug Out",
                    [
                        "Efflux pumps actively remove drugs from bacterial cells.",
                        "Gram-negative bacteria can decrease entry through changes in porin proteins.",
                        "Reduced entry plus active export can dramatically lower intracellular drug concentration."
                    ]
                ),
                section(
                    "MIC AND SUSCEPTIBILITY",
                    "How Laboratories Measure Drug Activity",
                    [
                        "The MIC is the lowest tested antimicrobial concentration preventing visible bacterial growth.",
                        "Laboratories interpret MIC values using standardized breakpoints.",
                        "Results are reported as susceptible, resistant or other standardized categories depending on the testing system."
                    ]
                ),
                section(
                    "STEWARDSHIP",
                    "Use Antibiotics Precisely",
                    [
                        "Broad-spectrum empiric therapy may be necessary initially in severe infection.",
                        "When culture and susceptibility results become available, therapy can often be narrowed.",
                        "Stewardship also includes choosing the correct dose, route and duration and avoiding antibiotics when bacterial infection is unlikely."
                    ]
                )
            ],
            {
                title: "De-Escalating Broad-Spectrum Therapy",
                scenario: "A patient with sepsis initially receives broad-spectrum antibiotics. Cultures later identify a susceptible organism with a narrow-spectrum option.",
                connection: "When clinically appropriate, narrowing therapy reduces unnecessary antimicrobial exposure, toxicity and selection pressure."
            },
            [
                ["What does beta-lactamase do?", "It hydrolyzes beta-lactam antibiotics.", ["This can prevent the drug from reaching or binding its target."]],
                ["How does an efflux pump cause resistance?", "It actively removes drug from the bacterial cell.", ["Lower intracellular concentration reduces activity."]],
                ["What does MIC mean?", "Minimum inhibitory concentration.", ["It is the lowest tested drug concentration preventing visible growth."]]
            ],
            [
                "Resistance is a property of the microorganism, not the patient.",
                "Broad-spectrum therapy is not automatically better therapy.",
                "A lower MIC cannot always be compared directly across unrelated drug classes.",
                "Susceptibility does not replace source control."
            ],
            [
                "ENZYME = destroy the drug.",
                "TARGET CHANGE = drug cannot bind.",
                "EFFLUX = pump it out.",
                "PORIN LOSS = keep it out."
            ],
            [
                "Resistance can involve drug destruction.",
                "Drug targets can change.",
                "Efflux pumps remove drugs.",
                "Permeability can decrease.",
                "MIC measures inhibitory concentration.",
                "Stewardship optimizes antimicrobial use."
            ],
            [
                {
                    id: "res1",
                    type: "mcq",
                    q: "Which resistance mechanism directly decreases intracellular antibiotic concentration by pumping drug out of a bacterium?",
                    choices: ["Efflux pump", "Capsule", "Endospore", "Binary fission"],
                    answer: 0,
                    explanation: "Efflux pumps actively export antimicrobial compounds."
                },
                {
                    id: "res2",
                    type: "mcq",
                    q: "What is the MIC?",
                    choices: [
                        "Lowest antimicrobial concentration preventing visible growth",
                        "Highest dose tolerated by a patient",
                        "Diameter of a bacterial cell",
                        "Number of organisms in one colony"
                    ],
                    answer: 0,
                    explanation: "MIC stands for minimum inhibitory concentration."
                },
                {
                    id: "res3",
                    type: "mcq",
                    q: "A culture identifies a susceptible organism after broad empiric therapy was started. Which stewardship action is often appropriate?",
                    choices: [
                        "Narrow therapy if clinically appropriate.",
                        "Add more broad-spectrum antibiotics automatically.",
                        "Ignore culture results.",
                        "Continue every empiric drug indefinitely."
                    ],
                    answer: 0,
                    explanation: "De-escalation to targeted therapy is a central antimicrobial-stewardship principle."
                }
            ],
            ["Pharmacology", "Clinical", "High Yield"]
        ),

        // ====================================================================
        // MODULE 4
        // ====================================================================

        topic(
            "microbiome",
            19,
            4,
            "Normal Microbiota, Microbiome & Opportunistic Infection",
            "Understand body-site microbiota, colonization resistance, dysbiosis and opportunistic infection.",
            [
                "Define resident and transient microbiota.",
                "Explain colonization resistance.",
                "Explain dysbiosis.",
                "Define opportunistic pathogen.",
                "Describe antibiotic-associated microbiome disruption.",
                "Explain why body site changes microbial significance."
            ],
            [
                ["Resident microbiota", "Microorganisms regularly found at a body site."],
                ["Transient microbiota", "Microorganisms present temporarily."],
                ["Colonization resistance", "Protection produced by normal microbiota competing with pathogens."],
                ["Dysbiosis", "Disruption of microbial-community composition or function."],
                ["Opportunistic pathogen", "Organism causing disease mainly when barriers or host defenses are impaired."],
                ["Sterile site", "Body site expected to contain no microorganisms in routine clinical conditions."]
            ],
            [
                section(
                    "BODY-SITE COMMUNITIES",
                    "Different Body Sites Support Different Microbes",
                    [
                        "Skin, mouth, gastrointestinal tract and vagina support characteristic microbial communities.",
                        "Environmental conditions such as pH, moisture, nutrients and oxygen shape each community.",
                        "Blood and cerebrospinal fluid are normally considered sterile in routine clinical microbiology."
                    ]
                ),
                section(
                    "COLONIZATION RESISTANCE",
                    "Normal Microbes Compete With Invaders",
                    [
                        "Normal microbiota occupy attachment sites and consume nutrients.",
                        "Some produce acids or antimicrobial compounds that inhibit competitors.",
                        "This makes it harder for potential pathogens to establish themselves."
                    ]
                ),
                section(
                    "DYSBIOSIS",
                    "Antibiotics Can Disrupt Ecological Balance",
                    [
                        "Broad-spectrum antibiotics suppress susceptible normal bacteria.",
                        "Loss of competition can permit resistant organisms or opportunists to overgrow.",
                        "Clostridioides difficile and Candida are classic examples."
                    ]
                ),
                section(
                    "OPPORTUNISTIC INFECTION",
                    "Location and Host Condition Matter",
                    [
                        "An organism harmless on intact skin can cause serious infection if introduced through a central line.",
                        "Immunocompromised patients may develop disease from organisms that rarely cause illness in healthy people.",
                        "Pathogenicity therefore reflects both microbial virulence and host susceptibility."
                    ]
                ),
                section(
                    "CLINICAL INTERPRETATION",
                    "Positive Culture Does Not Always Mean Disease",
                    [
                        "Cultures from nonsterile sites may contain colonizing organisms.",
                        "A positive blood or cerebrospinal fluid culture generally has greater significance because these sites are normally sterile.",
                        "The specimen source must always be considered when interpreting microbiology results."
                    ]
                )
            ],
            {
                title: "Antibiotic-Associated Dysbiosis",
                scenario: "A patient develops severe diarrhea after receiving broad-spectrum antibiotics for several days.",
                connection: "Antibiotic disruption of protective intestinal microbiota can permit C. difficile overgrowth and toxin-mediated colitis."
            },
            [
                ["What is colonization resistance?", "Protection provided by normal microbiota against pathogen establishment.", ["Competition for nutrients and attachment sites contributes."]],
                ["What is dysbiosis?", "Disruption of normal microbial-community balance.", ["Antibiotics are one common cause."]],
                ["Why can a skin organism cause bacteremia?", "It can enter a normally sterile site through a device or barrier break.", ["Location changes clinical significance."]]
            ],
            [
                "Normal microbiota are not harmless in every body site.",
                "A positive culture from a nonsterile site may represent colonization.",
                "Broad-spectrum antibiotics can increase opportunistic infection risk."
            ],
            [
                "NORMAL FLORA protect by competition.",
                "DYSBIOSIS = disrupted ecosystem.",
                "OPPORTUNIST = takes advantage of weakness."
            ],
            [
                "Body sites contain characteristic microbial communities.",
                "Normal microbiota provide colonization resistance.",
                "Dysbiosis disrupts microbial balance.",
                "Opportunists cause disease when defenses fail.",
                "Antibiotics can alter the microbiome.",
                "Specimen source affects interpretation."
            ],
            [
                {
                    id: "microbiome1",
                    type: "mcq",
                    q: "Why can broad-spectrum antibiotics increase the risk of Clostridioides difficile infection?",
                    choices: [
                        "They disrupt protective intestinal microbiota.",
                        "They sterilize the intestine permanently.",
                        "They convert bacteria into viruses.",
                        "They prevent all toxin production."
                    ],
                    answer: 0,
                    explanation: "Broad-spectrum antibiotics can reduce colonization resistance by suppressing normal intestinal bacteria."
                },
                {
                    id: "microbiome2",
                    type: "mcq",
                    q: "Which situation best illustrates an opportunistic infection?",
                    choices: [
                        "A skin commensal enters the bloodstream through a catheter.",
                        "Normal skin bacteria remain on intact skin.",
                        "A sterile culture remains sterile.",
                        "A patient develops immunity after vaccination."
                    ],
                    answer: 0,
                    explanation: "Normal flora can become pathogenic when barriers are breached or they gain access to normally sterile sites."
                }
            ]
        ),

        topic(
            "pathogenesis",
            20,
            4,
            "Pathogenesis, Virulence Factors, Exotoxins & Endotoxin",
            "Learn how pathogens attach, invade, evade immunity and damage tissues.",
            [
                "Define virulence and virulence factor.",
                "Explain portals of entry and exit.",
                "Describe adherence and invasion.",
                "Explain immune-evasion strategies.",
                "Differentiate exotoxin and endotoxin.",
                "Explain infectious dose."
            ],
            [
                ["Virulence", "Degree of pathogenicity of a microorganism."],
                ["Virulence factor", "Microbial trait that promotes disease."],
                ["Adhesin", "Structure or molecule promoting attachment."],
                ["Invasion", "Entry and spread through host tissue."],
                ["Exotoxin", "Protein toxin produced by certain bacteria."],
                ["Endotoxin", "Lipid A component of Gram-negative LPS."],
                ["Infectious dose", "Approximate number of organisms required to establish infection."],
                ["Antigenic variation", "Change in surface antigens that can help microorganisms evade immunity."]
            ],
            [
                section(
                    "PORTALS",
                    "A Pathogen Must Reach the Right Place",
                    [
                        "Microorganisms enter through portals such as the respiratory tract, gastrointestinal tract, genitourinary tract, skin breaks or parenteral exposure.",
                        "Many pathogens have preferred entry routes because they possess adhesins for specific tissues.",
                        "The route of entry can strongly influence disease severity."
                    ]
                ),
                section(
                    "ADHERENCE",
                    "Attachment Prevents Mechanical Removal",
                    [
                        "Adhesins bind host-cell receptors.",
                        "Without adhesion, microorganisms may be removed by mucus, urine flow, coughing or other mechanical defenses.",
                        "Fimbriae, pili, capsules and surface proteins can all contribute to adherence."
                    ]
                ),
                section(
                    "INVASION",
                    "Spreading Through Tissues",
                    [
                        "Some pathogens remain superficial, while others invade deeper tissues.",
                        "Microbial enzymes can degrade extracellular structures and promote spread.",
                        "Intracellular pathogens may enter host cells and use them as protected environments."
                    ]
                ),
                section(
                    "IMMUNE EVASION",
                    "Avoiding Host Defense",
                    [
                        "Capsules can reduce phagocytosis.",
                        "Antigenic variation can change surface molecules recognized by antibodies.",
                        "Biofilms can physically protect organisms.",
                        "Some pathogens survive within phagocytes or interfere with complement."
                    ]
                ),
                section(
                    "TOXINS",
                    "Exotoxin and Endotoxin Are Not the Same",
                    [
                        "Exotoxins are proteins and often have specific cellular targets.",
                        "Examples include botulinum toxin, tetanus toxin and cholera toxin.",
                        "Endotoxin is lipid A of Gram-negative LPS and produces broad inflammatory activation.",
                        "Endotoxin release can contribute to fever, vasodilation, capillary leak and shock."
                    ],
                    [
                        ["Feature", "Exotoxin", "Endotoxin"],
                        ["Chemical type", "Protein", "Lipid A"],
                        ["Organisms", "Certain Gram+ and Gram−", "Gram− only"],
                        ["Typical action", "Specific cellular target", "Systemic inflammation"],
                        ["Toxoid vaccine possible", "Some", "No classic toxoid"]
                    ]
                )
            ],
            {
                title: "Toxin-Mediated Paralysis",
                scenario: "A patient develops neurologic paralysis from a bacterial toxin even though the bacteria remain localized.",
                connection: "Exotoxins can produce severe systemic effects through highly specific molecular actions without widespread bacterial invasion."
            },
            [
                ["What is an adhesin?", "A structure or molecule that helps microbes attach to host cells.", ["Attachment is often essential for colonization."]],
                ["What is endotoxin?", "Lipid A of Gram-negative LPS.", ["It strongly activates innate immune pathways."]],
                ["What is an exotoxin?", "A bacterial protein toxin.", ["Many exotoxins have specific molecular targets."]]
            ],
            [
                "Exotoxin and endotoxin are not synonyms.",
                "Endotoxin occurs only in Gram-negative bacteria.",
                "Virulence is not identical to contagiousness.",
                "An organism may cause severe disease through toxins even without deep invasion."
            ],
            [
                "EXO = protein exported by bacteria.",
                "ENDO = lipid A embedded in Gram-negative outer membrane.",
                "ADHESIN = attach."
            ],
            [
                "Virulence factors promote microbial success in the host.",
                "Adhesins promote attachment.",
                "Capsules and antigenic variation promote immune evasion.",
                "Exotoxins are proteins.",
                "Endotoxin is lipid A.",
                "Host susceptibility influences disease severity."
            ],
            [
                {
                    id: "path1",
                    type: "mcq",
                    q: "Which bacterial component is responsible for classic endotoxin activity?",
                    choices: ["Peptidoglycan", "Lipid A", "Capsule", "Flagellum"],
                    answer: 1,
                    explanation: "Lipid A is the toxic component of Gram-negative LPS."
                },
                {
                    id: "path2",
                    type: "mcq",
                    q: "Which virulence factor most directly helps a microorganism remain attached to mucosal cells?",
                    choices: ["Adhesin", "Endospore", "Autoclave", "Antibody"],
                    answer: 0,
                    explanation: "Adhesins bind host-cell receptors and promote microbial attachment."
                }
            ],
            ["Theory", "Clinical", "High Yield"]
        ),

        topic(
            "innate-immunity",
            21,
            4,
            "Innate Immunity, Inflammation, Complement & Phagocytosis",
            "Master first-line barriers, inflammation, neutrophils, macrophages, complement and fever.",
            [
                "Identify major physical and chemical barriers.",
                "Explain pattern recognition.",
                "Describe acute inflammation.",
                "Explain neutrophil and macrophage functions.",
                "Describe complement outcomes.",
                "Explain fever as an innate response."
            ],
            [
                ["Innate immunity", "Rapid nonspecific defense present before exposure."],
                ["Neutrophil", "Major phagocyte in acute bacterial infection."],
                ["Macrophage", "Long-lived phagocyte that also presents antigen."],
                ["Inflammation", "Protective vascular and cellular response to injury or infection."],
                ["Complement", "Plasma-protein system promoting inflammation, opsonization and lysis."],
                ["Opsonization", "Coating of a target to enhance phagocytosis."],
                ["Chemotaxis", "Directed cell movement toward chemical signals."],
                ["Phagocytosis", "Engulfment and destruction of particles or microbes."],
                ["Fever", "Regulated elevation in body temperature."]
            ],
            [
                section(
                    "BARRIERS",
                    "Prevent Entry Before Fighting Infection",
                    [
                        "Intact skin provides a strong mechanical barrier.",
                        "Mucus, cilia, coughing, tears, saliva and urine flow remove microorganisms.",
                        "Stomach acid, lysozyme and antimicrobial peptides provide chemical protection."
                    ]
                ),
                section(
                    "PATTERN RECOGNITION",
                    "Innate Cells Detect Conserved Microbial Signals",
                    [
                        "Innate immune cells express pattern-recognition receptors.",
                        "These receptors detect conserved microbial molecules such as bacterial LPS and viral nucleic acids.",
                        "Activation triggers cytokine production and inflammatory responses."
                    ]
                ),
                section(
                    "INFLAMMATION",
                    "Bring Blood Flow and Immune Cells to the Site",
                    [
                        "Inflammatory mediators cause vasodilation and increased vascular permeability.",
                        "These changes contribute to redness, warmth, swelling and pain.",
                        "Chemotactic signals recruit leukocytes from blood into tissues."
                    ]
                ),
                section(
                    "PHAGOCYTES",
                    "Neutrophils and Macrophages",
                    [
                        "Neutrophils are rapid responders in many acute bacterial infections.",
                        "They engulf and destroy microorganisms using enzymes and reactive molecules.",
                        "Macrophages perform phagocytosis, release cytokines and present antigen to adaptive immune cells."
                    ]
                ),
                section(
                    "COMPLEMENT",
                    "Three Major Outcomes",
                    [
                        "Complement can coat microorganisms with C3b, increasing phagocytosis.",
                        "Complement fragments promote inflammation and leukocyte recruitment.",
                        "The terminal pathway can form a membrane attack complex that damages susceptible microbial membranes."
                    ]
                ),
                section(
                    "FEVER",
                    "A Regulated Host Response",
                    [
                        "Pyrogenic cytokines act on the hypothalamus and increase the body's temperature set point.",
                        "Moderate fever can support immune function and inhibit certain microorganisms.",
                        "Very high temperatures or fever in vulnerable patients can also create physiologic stress."
                    ]
                )
            ],
            {
                title: "Acute Bacterial Infection",
                scenario: "A patient has fever, purulent drainage and a high neutrophil count.",
                connection: "Neutrophils are major innate immune responders to many acute bacterial infections and contribute to pus formation."
            },
            [
                ["What is opsonization?", "Coating a target to improve phagocytosis.", ["C3b and antibodies can act as opsonins."]],
                ["Which leukocyte is especially important early in acute bacterial infection?", "Neutrophil.", ["Neutrophils rapidly migrate into infected tissue."]],
                ["What are three major complement effects?", "Opsonization, inflammation and lysis.", ["Different complement products perform different functions."]]
            ],
            [
                "Innate immunity is rapid but not antigen-specific like adaptive immunity.",
                "Inflammation can be protective and still cause host tissue injury when excessive.",
                "Complement is a system of proteins, not one molecule."
            ],
            [
                "NEUTROPHIL = now; early acute response.",
                "MACROPHAGE = eat + present antigen.",
                "C3b = coat bacteria.",
                "MAC = membrane attack complex."
            ],
            [
                "Skin and mucosa are first-line barriers.",
                "Innate receptors detect microbial patterns.",
                "Neutrophils dominate many acute bacterial responses.",
                "Macrophages phagocytose and present antigen.",
                "Complement promotes opsonization, inflammation and lysis.",
                "Fever is a regulated immune response."
            ],
            [
                {
                    id: "innate1",
                    type: "mcq",
                    q: "Which complement-related process makes bacteria easier for phagocytes to engulf?",
                    choices: ["Opsonization", "Conjugation", "Fermentation", "Mutation"],
                    answer: 0,
                    explanation: "Opsonization coats microorganisms and increases phagocytic recognition."
                },
                {
                    id: "innate2",
                    type: "mcq",
                    q: "Which cell is typically a major early responder in acute bacterial infection?",
                    choices: ["Neutrophil", "Erythrocyte", "Platelet", "Osteocyte"],
                    answer: 0,
                    explanation: "Neutrophils are rapidly recruited to many bacterial infections."
                }
            ],
            ["Immunology", "Clinical", "High Yield"]
        ),

        topic(
            "adaptive-immunity",
            22,
            4,
            "Adaptive Immunity, B Cells, T Cells & Antibodies",
            "Learn antigen-specific immunity, clonal expansion, B-cell responses, T-cell responses and the five major antibody classes.",
            [
                "Differentiate innate and adaptive immunity.",
                "Explain clonal selection.",
                "Describe B-cell and plasma-cell function.",
                "Differentiate CD4 and CD8 T-cell functions.",
                "Describe IgM, IgG, IgA, IgE and IgD.",
                "Explain immune memory."
            ],
            [
                ["Adaptive immunity", "Antigen-specific defense characterized by memory."],
                ["Antigen", "Molecule recognized specifically by adaptive immune receptors."],
                ["B lymphocyte", "Cell that can differentiate into antibody-secreting plasma cells."],
                ["Plasma cell", "Activated B-cell descendant specialized for antibody secretion."],
                ["Helper T cell", "CD4 T cell coordinating immune responses."],
                ["Cytotoxic T cell", "CD8 T cell that kills infected or abnormal host cells."],
                ["IgM", "Antibody class prominent in early primary immune responses."],
                ["IgG", "Major serum antibody associated with secondary responses and placental transfer."],
                ["IgA", "Major antibody in mucosal secretions."],
                ["IgE", "Antibody class involved in immediate allergy and parasite responses."]
            ],
            [
                section(
                    "CLONAL SELECTION",
                    "One Antigen Activates Matching Lymphocytes",
                    [
                        "Each B or T lymphocyte expresses receptors with a particular antigen specificity.",
                        "When the correct antigen and activation signals are present, the lymphocyte proliferates.",
                        "This produces effector cells and long-lived memory cells."
                    ]
                ),
                section(
                    "B CELLS",
                    "Humoral Immunity",
                    [
                        "Activated B cells differentiate into plasma cells.",
                        "Plasma cells release large quantities of antibodies.",
                        "Antibodies can neutralize toxins and viruses, opsonize bacteria and activate complement."
                    ]
                ),
                section(
                    "HELPER T CELLS",
                    "Coordinating the Immune Response",
                    [
                        "CD4 helper T cells respond to antigen presented on MHC class II molecules.",
                        "They release cytokines and provide signals to B cells, macrophages and other immune cells.",
                        "Loss of helper T-cell function, as in untreated HIV infection, can profoundly impair immunity."
                    ]
                ),
                section(
                    "CYTOTOXIC T CELLS",
                    "Killing Infected Host Cells",
                    [
                        "CD8 cytotoxic T cells recognize antigen presented on MHC class I.",
                        "They can destroy virus-infected and abnormal host cells.",
                        "This is especially important for pathogens that spend much of their life cycle inside host cells."
                    ]
                ),
                section(
                    "ANTIBODY CLASSES",
                    "Five Major Immunoglobulin Types",
                    [
                        "IgM is prominent early in a primary response and is highly effective at activating complement.",
                        "IgG is the major serum immunoglobulin, dominates many secondary responses and crosses the placenta.",
                        "IgA protects mucosal surfaces and is found in secretions such as saliva, tears and breast milk.",
                        "IgE participates in immediate hypersensitivity and defense against certain parasites.",
                        "IgD is primarily expressed on naive B-cell surfaces as an antigen receptor."
                    ],
                    [
                        ["Antibody", "High-Yield Role"],
                        ["IgM", "Early primary response"],
                        ["IgG", "Major serum antibody; placenta"],
                        ["IgA", "Mucosal secretions"],
                        ["IgE", "Allergy and parasites"],
                        ["IgD", "B-cell receptor"]
                    ]
                ),
                section(
                    "MEMORY",
                    "Why Secondary Responses Are Faster",
                    [
                        "Primary exposure generates memory B and T cells.",
                        "Later exposure activates these memory cells more rapidly.",
                        "Vaccination uses this principle to establish protection before natural exposure."
                    ]
                )
            ],
            {
                title: "Secondary Immune Response",
                scenario: "A vaccinated patient is exposed to a pathogen months later and rapidly produces high-affinity antibodies.",
                connection: "Memory B cells formed during vaccination allow a faster and stronger secondary adaptive immune response."
            },
            [
                ["Which cells secrete antibodies?", "Plasma cells.", ["They are differentiated B cells."]],
                ["Which antibody crosses the placenta?", "IgG.", ["IgG provides passive fetal and neonatal protection."]],
                ["Which antibody is especially important at mucosal surfaces?", "IgA.", ["IgA is present in saliva, tears and breast milk."]]
            ],
            [
                "B cells do not directly become CD4 T cells.",
                "IgM is not the major placental antibody.",
                "IgA is strongly associated with mucosal protection.",
                "CD8 T cells kill infected host cells; antibodies mainly act extracellularly."
            ],
            [
                "M = first Major response.",
                "G = Goes through placenta.",
                "A = At mucosal Areas.",
                "E = allergy and parasites.",
                "D = B-cell receptor."
            ],
            [
                "Adaptive immunity is antigen specific.",
                "B cells produce plasma cells and memory cells.",
                "CD4 T cells coordinate immunity.",
                "CD8 T cells kill infected cells.",
                "IgG crosses the placenta.",
                "IgA protects mucosal surfaces.",
                "Memory allows rapid secondary responses."
            ],
            [
                {
                    id: "adaptive1",
                    type: "mcq",
                    q: "Which cell type secretes large quantities of antibody?",
                    choices: ["Plasma cell", "Neutrophil", "Platelet", "Erythrocyte"],
                    answer: 0,
                    explanation: "Plasma cells are differentiated B cells specialized for antibody secretion."
                },
                {
                    id: "adaptive2",
                    type: "mcq",
                    q: "Which immunoglobulin class is most strongly associated with mucosal secretions?",
                    choices: ["IgA", "IgG", "IgM", "IgD"],
                    answer: 0,
                    explanation: "IgA is the major antibody class protecting mucosal surfaces."
                },
                {
                    id: "adaptive3",
                    type: "mcq",
                    q: "Which lymphocyte is especially important for killing virus-infected host cells?",
                    choices: ["CD8 cytotoxic T cell", "Bacterial endospore", "Platelet", "Neutrophil only"],
                    answer: 0,
                    explanation: "CD8 cytotoxic T cells recognize infected host cells and can induce their death."
                }
            ],
            ["Immunology", "Clinical", "High Yield"]
        ),

        topic(
            "vaccines-hypersensitivity",
            23,
            4,
            "Vaccines, Active & Passive Immunity, Hypersensitivity",
            "Understand vaccine principles, immune memory and the four major hypersensitivity mechanisms.",
            [
                "Differentiate active and passive immunity.",
                "Explain vaccine-induced immune memory.",
                "Compare major vaccine platforms conceptually.",
                "Explain herd or population protection conceptually.",
                "Differentiate Types I, II, III and IV hypersensitivity.",
                "Recognize anaphylaxis as Type I."
            ],
            [
                ["Active immunity", "Immunity generated by an individual's own adaptive response."],
                ["Passive immunity", "Temporary protection through transferred antibodies."],
                ["Vaccine", "Preparation designed to induce protective immune memory."],
                ["Live attenuated vaccine", "Vaccine using a weakened replicating organism."],
                ["Toxoid", "Inactivated toxin used as a vaccine antigen."],
                ["Type I hypersensitivity", "Immediate IgE-mediated reaction."],
                ["Type II hypersensitivity", "Antibody-mediated injury against cell or tissue targets."],
                ["Type III hypersensitivity", "Immune-complex-mediated inflammation."],
                ["Type IV hypersensitivity", "Delayed T-cell-mediated reaction."],
                ["Anaphylaxis", "Severe systemic Type I hypersensitivity."]
            ],
            [
                section(
                    "ACTIVE IMMUNITY",
                    "The Patient's Own Immune System Responds",
                    [
                        "Active immunity occurs after natural infection or vaccination.",
                        "The immune system produces effector cells, antibodies and memory cells.",
                        "Protection can persist for years or decades depending on the antigen."
                    ]
                ),
                section(
                    "PASSIVE IMMUNITY",
                    "Immediate But Temporary Protection",
                    [
                        "Passive immunity transfers preformed antibodies.",
                        "Examples include maternal IgG across the placenta and therapeutic immune globulin.",
                        "Because the recipient's own lymphocytes were not activated in the same way, long-term memory is generally not produced."
                    ]
                ),
                section(
                    "VACCINE TYPES",
                    "Different Ways to Present Antigen",
                    [
                        "Live attenuated vaccines use weakened organisms capable of limited replication.",
                        "Inactivated and subunit vaccines use nonreplicating antigens.",
                        "Toxoid vaccines target bacterial toxins rather than the whole organism.",
                        "Conjugate vaccines attach poorly immunogenic polysaccharides to proteins to improve immune responses."
                    ]
                ),
                section(
                    "TYPE I AND II",
                    "Immediate Allergy Versus Antibody-Mediated Injury",
                    [
                        "Type I hypersensitivity is IgE mediated and can occur within minutes. Anaphylaxis is the classic severe example.",
                        "Type II hypersensitivity involves antibodies directed against cell-surface or tissue antigens.",
                        "Examples include certain hemolytic reactions and autoimmune cytopenias."
                    ]
                ),
                section(
                    "TYPE III AND IV",
                    "Immune Complexes Versus Delayed T-Cell Injury",
                    [
                        "Type III hypersensitivity results from deposition of antigen-antibody complexes and complement activation.",
                        "Type IV hypersensitivity is T-cell mediated and delayed.",
                        "The tuberculin skin-test response is a classic Type IV example."
                    ]
                )
            ],
            {
                title: "Anaphylaxis",
                scenario: "Minutes after exposure to an allergen, a patient develops wheezing, hypotension and widespread urticaria.",
                connection: "This is a severe Type I IgE-mediated hypersensitivity reaction."
            },
            [
                ["Which immunity creates memory: active or passive?", "Active immunity.", ["The individual's lymphocytes respond and form memory cells."]],
                ["Which hypersensitivity type causes anaphylaxis?", "Type I.", ["It is IgE mediated and immediate."]],
                ["Which hypersensitivity type describes the tuberculin skin-test response?", "Type IV.", ["It is T-cell mediated and delayed."]]
            ],
            [
                "Passive immunity is immediate but temporary.",
                "Vaccination is a form of active immunity.",
                "Type IV hypersensitivity is T-cell mediated, not antibody mediated.",
                "Toxoid vaccines target toxins rather than bacterial cell structures."
            ],
            [
                "I = Immediate.",
                "II = antibodies against cells/tissues.",
                "III = immune complexes.",
                "IV = delayed T cells."
            ],
            [
                "Active immunity generates memory.",
                "Passive immunity transfers antibodies.",
                "Vaccination creates protective adaptive responses.",
                "Type I is IgE mediated.",
                "Type III involves immune complexes.",
                "Type IV is delayed and T-cell mediated."
            ],
            [
                {
                    id: "vax1",
                    type: "mcq",
                    q: "Receiving preformed antibodies produces which type of immunity?",
                    choices: ["Passive immunity", "Active immunity", "Autoimmunity", "No immunity"],
                    answer: 0,
                    explanation: "Passive immunity involves transfer of preformed antibodies."
                },
                {
                    id: "vax2",
                    type: "mcq",
                    q: "A patient develops wheezing and hypotension within minutes of allergen exposure. Which hypersensitivity type is most likely?",
                    choices: ["Type I", "Type II", "Type III", "Type IV"],
                    answer: 0,
                    explanation: "Anaphylaxis is a classic immediate IgE-mediated Type I hypersensitivity reaction."
                }
            ]
        ),

        // ====================================================================
        // MODULE 5
        // ====================================================================

        topic(
            "staphylococcus",
            24,
            5,
            "Staphylococcus aureus, MRSA & Coagulase-Negative Staphylococci",
            "Study staphylococcal identification, skin infections, toxin-mediated disease, bacteremia, endocarditis, device infections and MRSA.",
            [
                "Describe staphylococcal morphology and catalase reaction.",
                "Explain coagulase testing.",
                "Describe major S. aureus infections.",
                "Explain MRSA resistance.",
                "Describe toxin-mediated S. aureus diseases.",
                "Explain coagulase-negative staphylococcal device infections."
            ],
            [
                ["Staphylococcus aureus", "Gram-positive catalase-positive coagulase-positive coccus."],
                ["MRSA", "Methicillin-resistant Staphylococcus aureus."],
                ["Coagulase", "Laboratory marker strongly associated with S. aureus."],
                ["Staphylococcus epidermidis", "Coagulase-negative skin commensal associated with device infection."],
                ["Protein A", "S. aureus virulence factor that binds the Fc portion of IgG."],
                ["Toxic shock syndrome", "Toxin-mediated systemic illness associated with certain S. aureus strains."],
                ["Enterotoxin", "Heat-stable S. aureus toxin causing rapid food poisoning."],
                ["Biofilm", "Surface-associated community important in prosthetic and catheter infections."]
            ],
            [
                section(
                    "IDENTIFICATION",
                    "Gram-Positive Cocci in Clusters",
                    [
                        "Staphylococci are Gram-positive cocci arranged in clusters and are catalase positive.",
                        "S. aureus is classically coagulase positive.",
                        "Many clinical laboratories now use automated or molecular identification, but the classic tests remain high-yield for exams."
                    ]
                ),
                section(
                    "SKIN AND SOFT TISSUE",
                    "Abscesses and Purulent Infection",
                    [
                        "S. aureus commonly causes folliculitis, abscesses, cellulitis, wound infections and surgical-site infections.",
                        "Purulent drainage and abscess formation are classic findings.",
                        "Drainage or other source control can be as important as antimicrobial therapy."
                    ]
                ),
                section(
                    "INVASIVE DISEASE",
                    "Bacteremia, Endocarditis and Bone Infection",
                    [
                        "S. aureus can enter the bloodstream and cause severe metastatic infection.",
                        "Complications include endocarditis, osteomyelitis, septic arthritis and deep abscesses.",
                        "S. aureus bacteremia is clinically significant and should not be dismissed as contamination."
                    ]
                ),
                section(
                    "TOXIN DISEASES",
                    "Toxic Shock, Food Poisoning and Scalded Skin",
                    [
                        "Some strains produce superantigen toxins that cause toxic shock syndrome.",
                        "Preformed enterotoxin in food can cause rapid-onset vomiting.",
                        "Exfoliative toxins can produce staphylococcal scalded-skin syndrome."
                    ]
                ),
                section(
                    "MRSA",
                    "Altered Penicillin-Binding Protein",
                    [
                        "MRSA carries mec-related resistance determinants producing altered penicillin-binding protein.",
                        "This reduces susceptibility to most beta-lactam antibiotics.",
                        "Community and healthcare-associated MRSA strains can both cause invasive disease."
                    ]
                ),
                section(
                    "COAGULASE-NEGATIVE STAPH",
                    "Skin Flora That Love Medical Devices",
                    [
                        "S. epidermidis commonly lives on skin and is often a blood-culture contaminant.",
                        "However, it forms biofilms on central lines, prosthetic joints and cardiac devices.",
                        "Repeated positive cultures with compatible symptoms increase concern for true infection."
                    ]
                )
            ],
            {
                title: "Central-Line Infection",
                scenario: "Several blood cultures from a patient with a central venous catheter repeatedly grow Staphylococcus epidermidis.",
                connection: "Coagulase-negative staphylococci can form biofilms on intravascular devices and produce true bloodstream infection."
            },
            [
                ["How are staphylococci arranged microscopically?", "Clusters.", ["They commonly appear as Gram-positive cocci in grape-like clusters."]],
                ["What classic test distinguishes S. aureus?", "Coagulase.", ["S. aureus is classically coagulase positive."]],
                ["Why does S. epidermidis frequently cause device infections?", "Biofilm formation.", ["Biofilms promote adherence and persistence on artificial surfaces."]]
            ],
            [
                "A coagulase-negative staphylococcus can be contamination or a real pathogen.",
                "MRSA is not resistant to every antibiotic.",
                "S. aureus food poisoning can occur from preformed toxin even without bacterial invasion.",
                "S. aureus bacteremia should be treated as clinically significant."
            ],
            [
                "STAPH = clusters + catalase positive.",
                "AUREUS = coagulase positive.",
                "EPIDERMIDIS = equipment and devices.",
                "MRSA = modified penicillin-binding protein."
            ],
            [
                "Staphylococci are Gram-positive cocci in clusters.",
                "S. aureus is catalase and coagulase positive.",
                "S. aureus causes abscesses and invasive disease.",
                "MRSA alters the beta-lactam target.",
                "S. epidermidis forms device biofilms.",
                "S. aureus can produce powerful exotoxins."
            ],
            [
                {
                    id: "staph1",
                    type: "mcq",
                    q: "A wound isolate is a Gram-positive coccus in clusters, catalase positive and coagulase positive. Which organism is most likely?",
                    choices: ["Staphylococcus aureus", "Streptococcus pyogenes", "Enterococcus faecalis", "Neisseria gonorrhoeae"],
                    answer: 0,
                    explanation: "The combination of clusters, catalase positivity and coagulase positivity strongly supports S. aureus."
                },
                {
                    id: "staph2",
                    type: "mcq",
                    q: "Which organism is especially associated with prosthetic-device biofilm infection?",
                    choices: ["Staphylococcus epidermidis", "Vibrio cholerae", "Treponema pallidum", "Bordetella pertussis"],
                    answer: 0,
                    explanation: "S. epidermidis is a common skin organism with strong biofilm-forming ability on artificial surfaces."
                },
                {
                    id: "staph3",
                    type: "mcq",
                    q: "A patient develops vomiting three hours after eating improperly stored cream-filled food. Which S. aureus mechanism best explains the short incubation period?",
                    choices: ["Preformed enterotoxin", "Slow bloodstream invasion", "Endospore germination", "Viral replication"],
                    answer: 0,
                    explanation: "S. aureus food poisoning can result from ingestion of preformed heat-stable enterotoxin."
                }
            ],
            ["Pathogens", "Clinical", "High Yield"]
        ),

        topic(
            "streptococcus",
            25,
            5,
            "Streptococcus pyogenes, Group B Streptococcus & Pneumococcus",
            "Learn the major streptococcal pathogens, hemolysis patterns, virulence factors and postinfectious complications.",
            [
                "Describe streptococcal morphology and catalase reaction.",
                "Differentiate alpha and beta hemolysis.",
                "Describe group A streptococcal disease.",
                "Explain rheumatic fever and poststreptococcal glomerulonephritis conceptually.",
                "Describe group B streptococcal neonatal disease.",
                "Describe Streptococcus pneumoniae."
            ],
            [
                ["Streptococcus pyogenes", "Group A beta-hemolytic Streptococcus."],
                ["Streptococcus agalactiae", "Group B Streptococcus."],
                ["Streptococcus pneumoniae", "Encapsulated alpha-hemolytic diplococcus."],
                ["Alpha hemolysis", "Partial greenish hemolysis."],
                ["Beta hemolysis", "Complete clearing around colonies."],
                ["M protein", "Major virulence factor of S. pyogenes."],
                ["Rheumatic fever", "Immune-mediated complication following certain group A streptococcal pharyngitis infections."],
                ["Pneumolysin", "Toxin produced by S. pneumoniae."]
            ],
            [
                section(
                    "GENERAL IDENTIFICATION",
                    "Gram-Positive Catalase-Negative Cocci",
                    [
                        "Streptococci are Gram-positive cocci commonly arranged in chains or pairs.",
                        "They are generally catalase negative.",
                        "Hemolysis on blood agar helps provide preliminary classification."
                    ]
                ),
                section(
                    "GROUP A STREP",
                    "Streptococcus pyogenes",
                    [
                        "S. pyogenes is beta hemolytic and causes pharyngitis, impetigo, cellulitis and invasive soft-tissue infections.",
                        "It can produce streptococcal pyrogenic exotoxins associated with scarlet fever and toxic shock-like illness.",
                        "M protein is an important antiphagocytic virulence factor."
                    ]
                ),
                section(
                    "POSTINFECTIOUS COMPLICATIONS",
                    "Disease Can Continue After the Bacteria Are Gone",
                    [
                        "Acute rheumatic fever can follow inadequately treated group A streptococcal pharyngitis.",
                        "The mechanism involves immune cross-reactivity rather than ongoing bacterial invasion.",
                        "Poststreptococcal glomerulonephritis can follow pharyngeal or skin infection and involves immune-complex injury."
                    ]
                ),
                section(
                    "GROUP B STREP",
                    "Important in Pregnancy and Neonates",
                    [
                        "S. agalactiae commonly colonizes the gastrointestinal and genital tracts.",
                        "Newborns can acquire the organism during delivery.",
                        "Group B Streptococcus can cause neonatal sepsis, pneumonia and meningitis."
                    ]
                ),
                section(
                    "PNEUMOCOCCUS",
                    "An Encapsulated Alpha-Hemolytic Diplococcus",
                    [
                        "S. pneumoniae commonly colonizes the nasopharynx.",
                        "Its polysaccharide capsule is a major virulence factor.",
                        "It causes community-acquired pneumonia, otitis media, sinusitis, bacteremia and meningitis."
                    ]
                )
            ],
            {
                title: "Pregnancy Screening",
                scenario: "A pregnant patient is screened late in pregnancy for genital and rectal group B Streptococcus colonization.",
                connection: "Intrapartum antibiotic prophylaxis is used when indicated to reduce neonatal invasive group B streptococcal disease."
            },
            [
                ["Which organism is group A Streptococcus?", "Streptococcus pyogenes.", ["It is classically beta hemolytic."]],
                ["Which organism is group B Streptococcus?", "Streptococcus agalactiae.", ["It is important in neonatal sepsis."]],
                ["Which streptococcus is an encapsulated alpha-hemolytic diplococcus?", "Streptococcus pneumoniae.", ["Its capsule is a major virulence factor."]]
            ],
            [
                "Group A and group B Streptococcus are different organisms.",
                "Rheumatic fever is immune mediated and classically follows pharyngitis.",
                "Pneumococcus is alpha hemolytic.",
                "Group B screening concerns colonization that can affect the newborn."
            ],
            [
                "PYOGENES = pus and pharyngitis.",
                "AGALACTIAE = babies.",
                "PNEUMONIAE = pneumonia + capsule."
            ],
            [
                "Streptococci are Gram-positive and catalase negative.",
                "S. pyogenes is group A strep.",
                "S. agalactiae is group B strep.",
                "Rheumatic fever can follow group A strep pharyngitis.",
                "Pneumococcus is encapsulated and alpha hemolytic.",
                "Pneumococcus causes pneumonia and meningitis."
            ],
            [
                {
                    id: "strep1",
                    type: "mcq",
                    q: "Which organism is routinely screened for late in pregnancy to reduce neonatal sepsis risk?",
                    choices: ["Streptococcus agalactiae", "Mycobacterium tuberculosis", "Pseudomonas aeruginosa", "Candida albicans"],
                    answer: 0,
                    explanation: "Group B Streptococcus can be transmitted during delivery and cause severe neonatal disease."
                },
                {
                    id: "strep2",
                    type: "mcq",
                    q: "A child develops migratory polyarthritis and carditis several weeks after untreated streptococcal pharyngitis. Which complication is most likely?",
                    choices: ["Acute rheumatic fever", "Botulism", "Tetanus", "Candidiasis"],
                    answer: 0,
                    explanation: "Acute rheumatic fever is an immune-mediated complication associated with group A streptococcal pharyngitis."
                },
                {
                    id: "strep3",
                    type: "mcq",
                    q: "Which feature is a major virulence factor of Streptococcus pneumoniae?",
                    choices: ["Polysaccharide capsule", "Endospore", "Mycolic acid", "Viral envelope"],
                    answer: 0,
                    explanation: "The pneumococcal capsule inhibits phagocytic clearance and is a major virulence factor."
                }
            ],
            ["Pathogens", "Clinical", "High Yield"]
        ),

        topic(
            "enterococcus",
            26,
            5,
            "Enterococcus, VRE & Healthcare-Associated Gram-Positive Infection",
            "Study enterococcal biology, urinary infections, bacteremia, endocarditis and vancomycin resistance.",
            [
                "Describe Enterococcus morphology and habitat.",
                "Identify common enterococcal infections.",
                "Explain intrinsic and acquired resistance.",
                "Define VRE.",
                "Explain why enterococci persist in healthcare environments."
            ],
            [
                ["Enterococcus", "Gram-positive catalase-negative cocci normally inhabiting the gastrointestinal tract."],
                ["Enterococcus faecalis", "Common enterococcal species causing human infection."],
                ["Enterococcus faecium", "Species frequently associated with multidrug resistance."],
                ["VRE", "Vancomycin-resistant Enterococcus."],
                ["Intrinsic resistance", "Natural resistance characteristic of a microbial species."],
                ["Acquired resistance", "Resistance gained through mutation or new genes."]
            ],
            [
                section(
                    "NORMAL HABITAT",
                    "Intestinal Flora With Pathogenic Potential",
                    [
                        "Enterococci are normal inhabitants of the gastrointestinal tract.",
                        "They tolerate bile, salt and harsh environmental conditions relatively well.",
                        "This hardiness contributes to persistence in healthcare environments."
                    ]
                ),
                section(
                    "CLINICAL INFECTIONS",
                    "UTI, Bacteremia and Endocarditis",
                    [
                        "Enterococci commonly cause healthcare-associated urinary tract infection.",
                        "They can also cause bloodstream infection, intra-abdominal infection and endocarditis.",
                        "Indwelling devices and antibiotic exposure increase risk."
                    ]
                ),
                section(
                    "RESISTANCE",
                    "Why Enterococcus Is Therapeutically Difficult",
                    [
                        "Enterococci are naturally less susceptible to several antibiotic classes.",
                        "They can also acquire resistance through plasmids and other mobile genetic elements.",
                        "Enterococcus faecium is particularly associated with multidrug-resistant healthcare infection."
                    ]
                ),
                section(
                    "VANCOMYCIN RESISTANCE",
                    "Changing the Drug-Binding Target",
                    [
                        "VRE strains alter the terminal peptide structure of peptidoglycan precursors.",
                        "This dramatically reduces vancomycin binding.",
                        "Vancomycin resistance genes can be carried on transferable genetic elements."
                    ]
                ),
                section(
                    "INFECTION PREVENTION",
                    "Contact Transmission Matters",
                    [
                        "VRE can contaminate surfaces and equipment.",
                        "Hand hygiene, environmental cleaning and appropriate contact precautions reduce transmission.",
                        "Antibiotic stewardship also reduces selection pressure."
                    ]
                )
            ],
            {
                title: "VRE in a Hospitalized Patient",
                scenario: "A patient with prolonged hospitalization and broad-spectrum antibiotic exposure develops a urinary infection with vancomycin-resistant Enterococcus faecium.",
                connection: "Healthcare exposure, antibiotic selection pressure and enterococcal environmental persistence all increase VRE risk."
            },
            [
                ["Where do enterococci commonly live normally?", "The gastrointestinal tract.", ["They are common intestinal commensals."]],
                ["What does VRE mean?", "Vancomycin-resistant Enterococcus.", ["Resistance often involves altered peptidoglycan precursors."]],
                ["Which enterococcal species is often highly drug resistant?", "Enterococcus faecium.", ["E. faecium is a major multidrug-resistant healthcare pathogen."]]
            ],
            [
                "Enterococcus is not the same as Streptococcus despite similar morphology.",
                "VRE refers to vancomycin-resistant enterococci, not vancomycin-resistant S. aureus.",
                "Colonization with VRE does not automatically mean active infection."
            ],
            [
                "ENTERO = intestine.",
                "FAECIUM = frequently resistant.",
                "VRE = vancomycin-resistant Enterococcus."
            ],
            [
                "Enterococci normally inhabit the intestine.",
                "They can cause UTI, bacteremia and endocarditis.",
                "They tolerate harsh conditions.",
                "E. faecium commonly shows multidrug resistance.",
                "VRE alters the vancomycin-binding target.",
                "Contact precautions help reduce spread."
            ],
            [
                {
                    id: "entero1",
                    type: "mcq",
                    q: "Which organism is especially associated with multidrug-resistant healthcare infection and VRE?",
                    choices: ["Enterococcus faecium", "Streptococcus pyogenes", "Bacillus subtilis", "Neisseria gonorrhoeae"],
                    answer: 0,
                    explanation: "E. faecium is a major multidrug-resistant enterococcal healthcare pathogen."
                },
                {
                    id: "entero2",
                    type: "mcq",
                    q: "Vancomycin resistance in enterococci commonly involves:",
                    choices: [
                        "Alteration of peptidoglycan precursor targets.",
                        "Loss of all DNA.",
                        "Conversion into a virus.",
                        "Formation of fungal hyphae."
                    ],
                    answer: 0,
                    explanation: "VRE changes the terminal peptide structure of cell-wall precursors, reducing vancomycin binding."
                }
            ],
            ["Pathogens", "Clinical", "High Yield"]
        ),

        topic(
            "enterobacterales",
            27,
            5,
            "E. coli, Klebsiella, Proteus & Enterobacterales",
            "Study major enteric Gram-negative rods responsible for UTI, sepsis, pneumonia and healthcare-associated resistance.",
            [
                "Describe common Enterobacterales characteristics.",
                "Explain E. coli as normal flora and pathogen.",
                "Describe Klebsiella pneumoniae.",
                "Explain Proteus urease activity.",
                "Explain lactose fermentation.",
                "Describe ESBL and carbapenem-resistance concerns."
            ],
            [
                ["Enterobacterales", "Order of facultatively anaerobic Gram-negative rods including many intestinal organisms."],
                ["Escherichia coli", "Major intestinal commensal and leading cause of uncomplicated UTI."],
                ["Klebsiella pneumoniae", "Encapsulated Gram-negative rod causing pneumonia, UTI and healthcare infection."],
                ["Proteus mirabilis", "Motile urease-positive Gram-negative rod associated with urinary infection and stones."],
                ["Lactose fermenter", "Organism that produces acid from lactose."],
                ["ESBL", "Extended-spectrum beta-lactamase."],
                ["Carbapenemase", "Enzyme capable of hydrolyzing carbapenem antibiotics."]
            ],
            [
                section(
                    "GENERAL FEATURES",
                    "Enteric Gram-Negative Rods",
                    [
                        "Enterobacterales are Gram-negative rods and facultative anaerobes.",
                        "Most are oxidase negative.",
                        "Many normally live in the gastrointestinal tract."
                    ]
                ),
                section(
                    "E. COLI",
                    "Normal Intestinal Flora and Major Uropathogen",
                    [
                        "E. coli normally inhabits the intestine.",
                        "It is the leading cause of uncomplicated bacterial urinary tract infection.",
                        "Specific strains also cause neonatal meningitis, sepsis and several types of diarrheal disease."
                    ]
                ),
                section(
                    "KLEBSIELLA",
                    "A Prominent Capsule",
                    [
                        "Klebsiella pneumoniae possesses a large polysaccharide capsule.",
                        "It can cause pneumonia, UTI, bloodstream infection and liver abscess.",
                        "Healthcare strains frequently carry ESBLs or carbapenemases."
                    ]
                ),
                section(
                    "PROTEUS",
                    "Urease and Urinary Stones",
                    [
                        "Proteus mirabilis produces urease, which breaks down urea and raises urine pH.",
                        "Alkaline urine promotes formation of struvite stones.",
                        "Proteus also demonstrates characteristic swarming motility on agar."
                    ]
                ),
                section(
                    "LACTOSE FERMENTATION",
                    "MacConkey Clues",
                    [
                        "E. coli and Klebsiella are common lactose fermenters.",
                        "They produce pink colonies on MacConkey agar.",
                        "Proteus, Salmonella and Shigella are generally non-lactose fermenters."
                    ]
                ),
                section(
                    "RESISTANCE",
                    "ESBLs and Carbapenemases",
                    [
                        "ESBL-producing organisms can hydrolyze many penicillins and cephalosporins.",
                        "Carbapenemases can compromise carbapenem therapy and create major infection-control concerns.",
                        "Resistance genes often spread through plasmids."
                    ]
                )
            ],
            {
                title: "Uncomplicated UTI",
                scenario: "A patient presents with dysuria and urinary frequency. Culture grows a lactose-fermenting Gram-negative rod identified as E. coli.",
                connection: "E. coli from intestinal flora commonly colonizes the periurethral area and ascends the urinary tract."
            },
            [
                ["What is the leading cause of uncomplicated bacterial UTI?", "E. coli.", ["It commonly ascends from intestinal flora."]],
                ["Which organism is strongly associated with urease and struvite stones?", "Proteus mirabilis.", ["Urease alkalinizes urine."]],
                ["Which organisms commonly ferment lactose?", "E. coli and Klebsiella.", ["They often appear pink on MacConkey agar."]]
            ],
            [
                "E. coli can be normal flora and still cause disease at another body site.",
                "ESBL describes a resistance enzyme, not a bacterial species.",
                "Proteus is usually a non-lactose fermenter.",
                "Klebsiella's capsule contributes to a mucoid colony appearance."
            ],
            [
                "E. COLI = everyday UTI.",
                "KLEBSIELLA = capsule.",
                "PROTEUS = pH up because urease.",
                "Pink MacConkey = lactose fermentation."
            ],
            [
                "Enterobacterales are Gram-negative rods.",
                "E. coli commonly causes UTI.",
                "Klebsiella has a prominent capsule.",
                "Proteus produces urease.",
                "E. coli and Klebsiella commonly ferment lactose.",
                "ESBLs and carbapenemases create major resistance."
            ],
            [
                {
                    id: "entb1",
                    type: "mcq",
                    q: "Which organism is the most common cause of uncomplicated bacterial urinary tract infection?",
                    choices: ["Escherichia coli", "Mycobacterium tuberculosis", "Candida auris", "Influenza A"],
                    answer: 0,
                    explanation: "E. coli is the leading cause of uncomplicated bacterial UTI."
                },
                {
                    id: "entb2",
                    type: "mcq",
                    q: "A patient has recurrent UTIs, alkaline urine and struvite stones. Which organism is especially likely?",
                    choices: ["Proteus mirabilis", "Staphylococcus epidermidis", "Neisseria meningitidis", "Clostridium botulinum"],
                    answer: 0,
                    explanation: "Proteus produces urease, increasing urine pH and promoting struvite stone formation."
                },
                {
                    id: "entb3",
                    type: "mcq",
                    q: "A Gram-negative rod produces pink colonies on MacConkey agar. What does this suggest?",
                    choices: ["Lactose fermentation", "Acid-fast staining", "Endospore formation", "Coagulase production"],
                    answer: 0,
                    explanation: "Pink MacConkey colonies indicate acid production from lactose fermentation."
                }
            ],
            ["Pathogens", "Clinical", "Lab"]
        ),

        topic(
            "enteric-pathogens",
            28,
            5,
            "Salmonella, Shigella, Campylobacter, Vibrio & Diarrheagenic E. coli",
            "Compare major bacterial causes of gastroenteritis, dysentery and foodborne illness.",
            [
                "Differentiate inflammatory and watery diarrhea conceptually.",
                "Describe Salmonella.",
                "Describe Shigella.",
                "Describe Campylobacter.",
                "Explain Vibrio cholerae toxin.",
                "Differentiate major diarrheagenic E. coli patterns."
            ],
            [
                ["Salmonella", "Enteric Gram-negative pathogen causing gastroenteritis and enteric fever."],
                ["Shigella", "Low-infectious-dose enteric pathogen causing inflammatory dysentery."],
                ["Campylobacter jejuni", "Curved Gram-negative organism causing gastroenteritis."],
                ["Vibrio cholerae", "Curved Gram-negative rod causing profuse secretory diarrhea."],
                ["Shiga toxin", "Toxin inhibiting protein synthesis and associated with Shigella dysenteriae and certain E. coli."],
                ["ETEC", "Enterotoxigenic E. coli causing watery traveler's diarrhea."],
                ["EHEC/STEC", "Shiga-toxin-producing E. coli associated with bloody diarrhea and HUS."],
                ["HUS", "Hemolytic uremic syndrome."]
            ],
            [
                section(
                    "SALMONELLA",
                    "Foodborne Gastroenteritis and Enteric Fever",
                    [
                        "Nontyphoidal Salmonella commonly spreads through contaminated poultry, eggs, reptiles and other foods.",
                        "It causes inflammatory gastroenteritis and can invade the bloodstream in high-risk patients.",
                        "Salmonella Typhi produces systemic enteric fever rather than ordinary localized gastroenteritis."
                    ]
                ),
                section(
                    "SHIGELLA",
                    "Low Infectious Dose and Dysentery",
                    [
                        "Shigella spreads efficiently by the fecal-oral route and has a very low infectious dose.",
                        "It invades colonic mucosa and produces inflammatory diarrhea with blood and mucus.",
                        "Certain strains produce Shiga toxin."
                    ]
                ),
                section(
                    "CAMPYLOBACTER",
                    "Curved Gram-Negative Gastroenteritis",
                    [
                        "Campylobacter jejuni is commonly associated with undercooked poultry.",
                        "It can cause fever, abdominal pain and inflammatory diarrhea.",
                        "A recognized postinfectious complication is Guillain-Barré syndrome."
                    ]
                ),
                section(
                    "CHOLERA",
                    "Secretory Diarrhea Without Deep Invasion",
                    [
                        "Vibrio cholerae produces cholera toxin in the small intestine.",
                        "The toxin increases intracellular signaling that drives chloride and water secretion.",
                        "Severe disease causes massive watery diarrhea and dehydration."
                    ]
                ),
                section(
                    "DIARRHEAGENIC E. COLI",
                    "Different Strains Cause Different Syndromes",
                    [
                        "ETEC produces enterotoxins and commonly causes traveler's watery diarrhea.",
                        "EHEC or STEC produces Shiga-like toxin and can cause bloody diarrhea.",
                        "Antibiotic treatment in suspected STEC is generally approached cautiously because of concern for toxin-associated complications."
                    ]
                )
            ],
            {
                title: "Bloody Diarrhea After Undercooked Beef",
                scenario: "A patient develops severe abdominal cramps and bloody diarrhea after eating undercooked ground beef.",
                connection: "Shiga-toxin-producing E. coli should be considered because it can cause hemorrhagic colitis and hemolytic uremic syndrome."
            },
            [
                ["Which pathogen has a very low infectious dose?", "Shigella.", ["It spreads efficiently person-to-person."]],
                ["Which pathogen causes profuse secretory 'rice-water' diarrhea?", "Vibrio cholerae.", ["Cholera toxin drives chloride and water secretion."]],
                ["Which E. coli category is associated with Shiga toxin and HUS?", "EHEC/STEC.", ["Shiga toxin can damage vascular endothelium."]]
            ],
            [
                "Salmonella and Shigella are not identical enteric pathogens.",
                "Cholera causes severe watery diarrhea without needing deep mucosal invasion.",
                "STEC can cause HUS.",
                "Campylobacter can precede Guillain-Barré syndrome."
            ],
            [
                "SHIGELLA = small infectious dose.",
                "CHOLERA = chloride and water out.",
                "STEC = Shiga toxin.",
                "CAMPY = curved + chicken."
            ],
            [
                "Salmonella commonly causes foodborne gastroenteritis.",
                "Shigella causes dysentery and spreads easily.",
                "Campylobacter is associated with poultry.",
                "Cholera causes profuse secretory diarrhea.",
                "ETEC causes traveler's diarrhea.",
                "STEC can cause bloody diarrhea and HUS."
            ],
            [
                {
                    id: "gi1",
                    type: "mcq",
                    q: "Which organism is classically associated with profuse watery diarrhea caused by toxin-driven intestinal secretion?",
                    choices: ["Vibrio cholerae", "Staphylococcus epidermidis", "Mycobacterium tuberculosis", "Treponema pallidum"],
                    answer: 0,
                    explanation: "Cholera toxin causes intense chloride and water secretion into the intestinal lumen."
                },
                {
                    id: "gi2",
                    type: "mcq",
                    q: "Which bacterial gastroenteritis is associated with a later risk of Guillain-Barré syndrome?",
                    choices: ["Campylobacter jejuni", "Klebsiella pneumoniae", "Enterococcus faecalis", "Bacillus subtilis"],
                    answer: 0,
                    explanation: "Campylobacter infection is a recognized trigger of Guillain-Barré syndrome."
                },
                {
                    id: "gi3",
                    type: "mcq",
                    q: "A child develops bloody diarrhea followed by anemia, thrombocytopenia and acute kidney injury. Which pathogen is especially concerning?",
                    choices: ["Shiga-toxin-producing E. coli", "Influenza virus", "Staphylococcus epidermidis", "Candida albicans"],
                    answer: 0,
                    explanation: "STEC can cause hemolytic uremic syndrome after toxin-mediated endothelial injury."
                }
            ],
            ["Pathogens", "Clinical", "High Yield"]
        ),

        topic(
            "pseudomonas-acinetobacter",
            29,
            5,
            "Pseudomonas, Acinetobacter & Nonfermenting Gram-Negative Rods",
            "Study major opportunistic nonfermenters associated with ventilators, burns, devices, biofilms and multidrug resistance.",
            [
                "Describe Pseudomonas aeruginosa.",
                "Explain oxidase testing.",
                "Describe Pseudomonas virulence and pigments.",
                "Explain biofilm formation.",
                "Describe Acinetobacter baumannii.",
                "Explain why nonfermenters are important in hospitals."
            ],
            [
                ["Pseudomonas aeruginosa", "Oxidase-positive nonfermenting Gram-negative rod associated with moist environments."],
                ["Pyocyanin", "Blue-green pigment produced by Pseudomonas aeruginosa."],
                ["Biofilm", "Community important in chronic Pseudomonas infection."],
                ["Acinetobacter baumannii", "Healthcare-associated Gram-negative coccobacillus associated with multidrug resistance."],
                ["Nonfermenter", "Gram-negative organism that does not ferment glucose in the typical enteric pattern."]
            ],
            [
                section(
                    "PSEUDOMONAS ECOLOGY",
                    "A Moist-Environment Opportunist",
                    [
                        "Pseudomonas aeruginosa has minimal nutritional requirements and survives well in moist environments.",
                        "Healthcare reservoirs can include sinks, respiratory equipment and wet surfaces if infection-control practices fail.",
                        "It primarily causes disease in patients with disrupted barriers or weakened defenses."
                    ]
                ),
                section(
                    "CLINICAL DISEASE",
                    "Burns, Ventilators and Cystic Fibrosis",
                    [
                        "Pseudomonas is associated with burn wound infection, ventilator-associated pneumonia, catheter infection and malignant otitis externa.",
                        "It also causes chronic respiratory infection in many patients with cystic fibrosis.",
                        "Severe bacteremia can produce ecthyma gangrenosum skin lesions."
                    ]
                ),
                section(
                    "VIRULENCE",
                    "Toxins, Pigments and Biofilm",
                    [
                        "Pseudomonas produces exotoxin A, proteases and other damaging factors.",
                        "The pigment pyocyanin contributes to oxidative injury.",
                        "Alginate-rich biofilms help chronic airway strains persist."
                    ]
                ),
                section(
                    "RESISTANCE",
                    "Multiple Barriers to Therapy",
                    [
                        "Pseudomonas has low outer-membrane permeability, efflux pumps and inducible resistance mechanisms.",
                        "It can also acquire beta-lactamases and other resistance genes.",
                        "Treatment depends heavily on susceptibility results."
                    ]
                ),
                section(
                    "ACINETOBACTER",
                    "A Major Multidrug-Resistant Healthcare Pathogen",
                    [
                        "Acinetobacter baumannii survives unusually well on dry surfaces for a Gram-negative organism.",
                        "It causes ventilator-associated pneumonia, wound infection and bloodstream infection.",
                        "Some strains are resistant to multiple antimicrobial classes."
                    ]
                )
            ],
            {
                title: "Burn Wound Infection",
                scenario: "A burn patient develops a wound infection with a Gram-negative rod that produces a blue-green pigment.",
                connection: "Pseudomonas aeruginosa is strongly associated with burn wounds and produces the blue-green pigment pyocyanin."
            },
            [
                ["Which organism produces pyocyanin?", "Pseudomonas aeruginosa.", ["The pigment can create a blue-green appearance."]],
                ["What classic test reaction does Pseudomonas usually have?", "Oxidase positive.", ["This helps separate it from Enterobacterales."]],
                ["Why can Pseudomonas persist in chronic infections?", "Biofilm formation and multiple resistance mechanisms.", ["Biofilms reduce antimicrobial and immune effectiveness."]]
            ],
            [
                "Pseudomonas is generally a nonfermenter, not an Enterobacterales lactose fermenter.",
                "Blue-green pigment is a clue, not the only identification criterion.",
                "Acinetobacter and Pseudomonas are different organisms."
            ],
            [
                "PSEUDO = pools and plumbing.",
                "PYOCYANIN = blue-green.",
                "ACINETOBACTER = acquired healthcare resistance."
            ],
            [
                "Pseudomonas thrives in moist environments.",
                "It causes burn, ventilator and device infections.",
                "Pseudomonas is oxidase positive.",
                "Biofilms support chronic infection.",
                "Acinetobacter is an important multidrug-resistant healthcare pathogen."
            ],
            [
                {
                    id: "pseudo1",
                    type: "mcq",
                    q: "A burn patient has a wound infection producing blue-green drainage. Which organism is most likely?",
                    choices: ["Pseudomonas aeruginosa", "Streptococcus pyogenes", "Clostridium tetani", "Treponema pallidum"],
                    answer: 0,
                    explanation: "Pseudomonas aeruginosa produces pigments including pyocyanin and is strongly associated with burn wound infection."
                },
                {
                    id: "pseudo2",
                    type: "mcq",
                    q: "Which characteristic commonly distinguishes Pseudomonas aeruginosa from Enterobacterales?",
                    choices: ["Oxidase positivity", "Gram-positive staining", "Endospore production", "Coagulase production"],
                    answer: 0,
                    explanation: "Pseudomonas is typically oxidase positive, while Enterobacterales are usually oxidase negative."
                }
            ],
            ["Pathogens", "Clinical", "High Yield"]
        ),

        topic(
            "neisseria-haemophilus",
            30,
            5,
            "Neisseria, Haemophilus & Respiratory Gram-Negative Pathogens",
            "Learn meningococcus, gonococcus, Haemophilus influenzae and key nursing implications.",
            [
                "Describe Neisseria morphology.",
                "Differentiate N. gonorrhoeae and N. meningitidis.",
                "Explain meningococcal transmission.",
                "Describe Haemophilus influenzae.",
                "Explain Hib vaccination.",
                "Recognize major clinical syndromes."
            ],
            [
                ["Neisseria gonorrhoeae", "Gram-negative diplococcus causing gonorrhea."],
                ["Neisseria meningitidis", "Encapsulated Gram-negative diplococcus causing meningitis and meningococcemia."],
                ["Pili", "Major Neisseria attachment structures."],
                ["Antigenic variation", "Change in surface antigens that helps Neisseria evade immunity."],
                ["Haemophilus influenzae", "Small Gram-negative coccobacillus causing respiratory and invasive disease."],
                ["Hib", "Haemophilus influenzae type b."]
            ],
            [
                section(
                    "NEISSERIA",
                    "Oxidase-Positive Gram-Negative Diplococci",
                    [
                        "Pathogenic Neisseria species are Gram-negative diplococci and oxidase positive.",
                        "They are fastidious and require enriched media.",
                        "Pili and antigenic variation play major roles in attachment and immune evasion."
                    ]
                ),
                section(
                    "GONORRHEA",
                    "Neisseria gonorrhoeae",
                    [
                        "N. gonorrhoeae infects mucosal surfaces of the genital tract, rectum, pharynx and conjunctiva.",
                        "Infection may be asymptomatic, especially in some women.",
                        "Complications include pelvic inflammatory disease, infertility and disseminated infection."
                    ]
                ),
                section(
                    "MENINGOCOCCUS",
                    "Neisseria meningitidis",
                    [
                        "N. meningitidis colonizes the nasopharynx.",
                        "It spreads through close respiratory contact.",
                        "Invasive disease can cause meningitis or rapidly progressive meningococcemia with petechiae, purpura, shock and DIC."
                    ]
                ),
                section(
                    "HAEMOPHILUS",
                    "A Fastidious Coccobacillus",
                    [
                        "Haemophilus influenzae requires special growth factors.",
                        "Nontypeable strains commonly cause otitis, sinusitis and respiratory disease.",
                        "Encapsulated type b strains historically caused severe epiglottitis and meningitis in children."
                    ]
                ),
                section(
                    "HIB VACCINE",
                    "Vaccination Changed Pediatric Disease",
                    [
                        "The Hib conjugate vaccine targets the type b polysaccharide capsule.",
                        "Widespread vaccination dramatically reduced invasive Hib disease.",
                        "The vaccine does not prevent disease caused by unrelated respiratory viruses called influenza."
                    ]
                )
            ],
            {
                title: "Meningococcal Exposure",
                scenario: "A college student is diagnosed with meningococcal meningitis and close household contacts are identified.",
                connection: "Close contacts may require post-exposure antibiotic prophylaxis because N. meningitidis spreads through respiratory secretions during close contact."
            },
            [
                ["Which Neisseria causes meningococcal meningitis?", "Neisseria meningitidis.", ["It can also cause meningococcemia."]],
                ["Which Neisseria causes gonorrhea?", "Neisseria gonorrhoeae.", ["It primarily infects mucosal surfaces."]],
                ["What disease did Hib vaccination greatly reduce?", "Invasive H. influenzae type b disease.", ["This includes meningitis and epiglottitis."]]
            ],
            [
                "Haemophilus influenzae is a bacterium, not influenza virus.",
                "N. gonorrhoeae and N. meningitidis are different pathogens.",
                "Meningococcemia can progress extremely rapidly."
            ],
            [
                "MENINGITIDIS = meningitis.",
                "GONORRHOEAE = gonorrhea.",
                "Hib = type b capsule vaccine."
            ],
            [
                "Neisseria are Gram-negative diplococci.",
                "N. gonorrhoeae causes gonorrhea.",
                "N. meningitidis causes meningitis and meningococcemia.",
                "Meningococcus spreads through close respiratory contact.",
                "H. influenzae is a fastidious coccobacillus.",
                "Hib vaccination prevents invasive type b disease."
            ],
            [
                {
                    id: "neiss1",
                    type: "mcq",
                    q: "A patient develops fever, meningismus, hypotension and a rapidly spreading petechial rash. Which organism is especially concerning?",
                    choices: ["Neisseria meningitidis", "Staphylococcus epidermidis", "E. coli intestinal flora", "Candida albicans"],
                    answer: 0,
                    explanation: "Meningococcemia can cause meningitis, shock and a petechial or purpuric rash."
                },
                {
                    id: "neiss2",
                    type: "mcq",
                    q: "Which vaccine dramatically reduced childhood epiglottitis and meningitis caused by a particular bacterial capsule type?",
                    choices: ["Hib vaccine", "Influenza vaccine only", "Tetanus toxoid only", "Varicella vaccine"],
                    answer: 0,
                    explanation: "Hib conjugate vaccination prevents invasive Haemophilus influenzae type b disease."
                }
            ],
            ["Pathogens", "Clinical", "High Yield"]
        ),

        topic(
            "clostridia",
            31,
            5,
            "Clostridioides difficile, Tetanus, Botulism & Gas Gangrene",
            "Master major anaerobic spore-forming Gram-positive pathogens and their toxins.",
            [
                "Describe clostridial endospores.",
                "Explain C. difficile disease.",
                "Explain tetanus toxin.",
                "Explain botulinum toxin.",
                "Describe C. perfringens myonecrosis.",
                "Compare spastic and flaccid paralysis."
            ],
            [
                ["Clostridioides difficile", "Spore-forming anaerobic bacterium causing antibiotic-associated colitis."],
                ["Clostridium tetani", "Organism producing tetanospasmin and causing spastic paralysis."],
                ["Clostridium botulinum", "Organism producing botulinum toxin and causing flaccid paralysis."],
                ["Clostridium perfringens", "Anaerobic spore-former associated with gas gangrene."],
                ["Pseudomembranous colitis", "Severe inflammatory colitis associated with toxigenic C. difficile."],
                ["Tetanospasmin", "Tetanus neurotoxin."],
                ["Botulinum toxin", "Neurotoxin blocking acetylcholine release."],
                ["Myonecrosis", "Rapid destruction of muscle tissue."]
            ],
            [
                section(
                    "GENERAL FEATURES",
                    "Anaerobic Spore-Forming Gram-Positive Rods",
                    [
                        "Many medically important clostridia are anaerobic Gram-positive rods capable of forming endospores.",
                        "Endospores help them survive harsh environmental conditions.",
                        "Disease often results from powerful exotoxins."
                    ]
                ),
                section(
                    "C. DIFFICILE",
                    "Antibiotic-Associated Colitis",
                    [
                        "Broad-spectrum antibiotics can disrupt intestinal microbiota and permit C. difficile overgrowth.",
                        "Toxigenic strains produce toxins that damage colon cells and trigger inflammation.",
                        "Disease ranges from diarrhea to pseudomembranous colitis and toxic megacolon."
                    ]
                ),
                section(
                    "TETANUS",
                    "Spastic Paralysis",
                    [
                        "C. tetani spores can contaminate wounds.",
                        "Tetanospasmin travels to the nervous system and blocks release of inhibitory neurotransmitters.",
                        "Loss of inhibition produces muscle rigidity, painful spasms and spastic paralysis."
                    ]
                ),
                section(
                    "BOTULISM",
                    "Flaccid Paralysis",
                    [
                        "Botulinum toxin blocks acetylcholine release at neuromuscular junctions.",
                        "This produces descending symmetric flaccid paralysis.",
                        "Foodborne botulism involves ingestion of preformed toxin; infant botulism involves intestinal colonization by spores."
                    ]
                ),
                section(
                    "C. PERFRINGENS",
                    "Gas Gangrene",
                    [
                        "C. perfringens can grow rapidly in traumatized, ischemic tissue.",
                        "Toxin production causes myonecrosis.",
                        "Gas production can produce crepitus, and urgent surgical debridement is usually essential."
                    ]
                )
            ],
            {
                title: "Antibiotic-Associated Diarrhea",
                scenario: "A hospitalized patient develops profuse watery diarrhea after several days of broad-spectrum antibiotic therapy.",
                connection: "C. difficile should be considered because dysbiosis can permit toxin-producing C. difficile to proliferate."
            },
            [
                ["Which organism causes antibiotic-associated pseudomembranous colitis?", "Clostridioides difficile.", ["Antibiotic-mediated dysbiosis is a major risk factor."]],
                ["Which disease causes spastic paralysis?", "Tetanus.", ["Tetanospasmin blocks inhibitory neurotransmitter release."]],
                ["Which disease causes descending flaccid paralysis?", "Botulism.", ["Botulinum toxin blocks acetylcholine release."]]
            ],
            [
                "Tetanus causes spastic paralysis.",
                "Botulism causes flaccid paralysis.",
                "C. difficile spores are environmentally resistant.",
                "C. perfringens myonecrosis requires urgent source control."
            ],
            [
                "TETANUS = tense muscles.",
                "BOTULISM = floppy/flaccid.",
                "C. DIFF = antibiotics then diarrhea.",
                "PERFRINGENS = gas in damaged tissue."
            ],
            [
                "Clostridial species can form endospores.",
                "C. difficile causes antibiotic-associated colitis.",
                "Tetanus causes spastic paralysis.",
                "Botulism causes flaccid paralysis.",
                "C. perfringens causes gas gangrene.",
                "Many clostridial diseases are toxin mediated."
            ],
            [
                {
                    id: "clost1",
                    type: "mcq",
                    q: "A hospitalized patient develops severe watery diarrhea after broad-spectrum antibiotics. Which organism is most likely?",
                    choices: ["Clostridioides difficile", "Neisseria gonorrhoeae", "Staphylococcus epidermidis", "Mycoplasma pneumoniae"],
                    answer: 0,
                    explanation: "C. difficile commonly follows antibiotic disruption of normal intestinal microbiota."
                },
                {
                    id: "clost2",
                    type: "mcq",
                    q: "A patient develops muscle rigidity and painful spasms after a contaminated wound. Which toxin mechanism is most likely?",
                    choices: [
                        "Blockade of inhibitory neurotransmitter release",
                        "Blockade of acetylcholine at the neuromuscular junction",
                        "Destruction of red blood cells only",
                        "Inhibition of bacterial peptidoglycan"
                    ],
                    answer: 0,
                    explanation: "Tetanospasmin blocks inhibitory neurotransmission and produces spastic paralysis."
                },
                {
                    id: "clost3",
                    type: "mcq",
                    q: "Which disease is characterized by descending flaccid paralysis?",
                    choices: ["Botulism", "Tetanus", "Scarlet fever", "Tuberculosis"],
                    answer: 0,
                    explanation: "Botulinum toxin blocks acetylcholine release, producing descending flaccid paralysis."
                }
            ],
            ["Pathogens", "Clinical", "High Yield"]
        ),

        topic(
            "tb-atypical-spirochetes",
            32,
            5,
            "Tuberculosis, Mycoplasma, Chlamydia & Spirochetes",
            "Study acid-fast mycobacteria, cell-wall-deficient bacteria, obligate intracellular bacteria and spirochetes.",
            [
                "Explain the acid-fast nature of Mycobacterium tuberculosis.",
                "Differentiate latent and active TB.",
                "Explain why Mycoplasma resists beta-lactams.",
                "Describe Chlamydia trachomatis.",
                "Describe Treponema pallidum.",
                "Describe Borrelia burgdorferi."
            ],
            [
                ["Mycobacterium tuberculosis", "Acid-fast bacterium causing tuberculosis."],
                ["Latent TB infection", "Persistent TB infection without active clinical disease."],
                ["Active TB", "Clinically active tuberculosis capable of causing symptoms and transmission when pulmonary."],
                ["Mycoplasma pneumoniae", "Cell-wall-deficient bacterium causing atypical pneumonia."],
                ["Chlamydia trachomatis", "Obligate intracellular bacterium causing sexually transmitted and ocular disease."],
                ["Treponema pallidum", "Spirochete causing syphilis."],
                ["Borrelia burgdorferi", "Spirochete causing Lyme disease."],
                ["Erythema migrans", "Expanding skin lesion associated with early Lyme disease."]
            ],
            [
                section(
                    "TUBERCULOSIS STRUCTURE",
                    "Mycolic Acids Create an Acid-Fast Cell Envelope",
                    [
                        "Mycobacterium tuberculosis contains abundant mycolic acids.",
                        "The waxy envelope retains acid-fast dyes even after acid-alcohol treatment.",
                        "This structure also contributes to environmental resistance and slow nutrient uptake."
                    ]
                ),
                section(
                    "TB PATHOGENESIS",
                    "Granulomas and Latency",
                    [
                        "Inhaled organisms reach the lungs and can survive within macrophages.",
                        "Cell-mediated immunity organizes granulomas that contain infection.",
                        "Organisms can remain dormant for years as latent TB infection."
                    ]
                ),
                section(
                    "ACTIVE TB",
                    "Reactivation and Airborne Transmission",
                    [
                        "Latent infection can reactivate when immune control weakens.",
                        "Pulmonary TB may cause chronic cough, fever, night sweats, weight loss and hemoptysis.",
                        "Active pulmonary disease can transmit through airborne particles."
                    ]
                ),
                section(
                    "MYCOPLASMA AND CHLAMYDIA",
                    "Atypical Bacteria",
                    [
                        "Mycoplasma lacks peptidoglycan completely, making beta-lactam antibiotics ineffective.",
                        "Chlamydia is an obligate intracellular bacterium with a distinctive developmental cycle.",
                        "Both organisms demonstrate why bacterial pathogens cannot always be evaluated by ordinary Gram staining."
                    ]
                ),
                section(
                    "SPIROCHETES",
                    "Syphilis and Lyme Disease",
                    [
                        "Treponema pallidum causes syphilis, a sexually transmitted disease with primary, secondary, latent and tertiary stages.",
                        "Borrelia burgdorferi causes Lyme disease and is transmitted by Ixodes ticks.",
                        "Early Lyme disease commonly produces an expanding erythema migrans lesion."
                    ]
                )
            ],
            {
                title: "Suspected Pulmonary TB",
                scenario: "A patient has months of cough, weight loss, night sweats and a cavitary lung lesion.",
                connection: "Active pulmonary tuberculosis requires airborne precautions while diagnostic testing is performed."
            },
            [
                ["Why is M. tuberculosis acid fast?", "Its cell envelope contains large amounts of mycolic acid.", ["The waxy lipid retains acid-fast stain."]],
                ["Why do beta-lactams not work against Mycoplasma?", "Mycoplasma lacks peptidoglycan.", ["There is no cell-wall synthesis target."]],
                ["Which organism causes syphilis?", "Treponema pallidum.", ["It is a spirochete."]]
            ],
            [
                "Latent TB is not active contagious pulmonary TB.",
                "Mycoplasma lacks a cell wall.",
                "Chlamydia is a bacterium despite being obligately intracellular.",
                "Syphilis and Lyme disease are caused by different spirochetes."
            ],
            [
                "TB = mycolic acid + airborne.",
                "MYCOPLASMA = missing wall.",
                "TREPONEMA = syphilis.",
                "BORRELIA = Lyme."
            ],
            [
                "M. tuberculosis is acid fast.",
                "TB can persist latently in granulomas.",
                "Active pulmonary TB spreads through airborne particles.",
                "Mycoplasma lacks peptidoglycan.",
                "Chlamydia is obligately intracellular.",
                "Treponema causes syphilis.",
                "Borrelia causes Lyme disease."
            ],
            [
                {
                    id: "tb1",
                    type: "mcq",
                    q: "Which precaution category is required for suspected active pulmonary tuberculosis?",
                    choices: ["Airborne", "Contact only", "Droplet only", "No precautions"],
                    answer: 0,
                    explanation: "Pulmonary TB spreads through small airborne particles."
                },
                {
                    id: "tb2",
                    type: "mcq",
                    q: "Why are beta-lactam antibiotics ineffective against Mycoplasma pneumoniae?",
                    choices: [
                        "Mycoplasma lacks a peptidoglycan cell wall.",
                        "Mycoplasma is a virus.",
                        "Mycoplasma is an endospore.",
                        "Mycoplasma contains LPS only."
                    ],
                    answer: 0,
                    explanation: "Beta-lactams target peptidoglycan synthesis, and Mycoplasma lacks peptidoglycan."
                },
                {
                    id: "tb3",
                    type: "mcq",
                    q: "An expanding erythema migrans rash after a tick bite is most associated with:",
                    choices: ["Borrelia burgdorferi", "Treponema pallidum", "S. aureus", "Clostridium tetani"],
                    answer: 0,
                    explanation: "Borrelia burgdorferi causes Lyme disease and is associated with erythema migrans."
                }
            ],
            ["Pathogens", "Clinical", "High Yield"]
        ),

        // ====================================================================
        // MODULE 6
        // ====================================================================

        topic(
            "virus-basics",
            33,
            6,
            "Virus Structure, Replication & Viral Pathogenesis",
            "Learn viral structure, genome types, envelopes, replication steps, latency and antiviral targeting.",
            [
                "Define virus and virion.",
                "Describe capsids and envelopes.",
                "Explain host range and tissue tropism.",
                "Outline the viral replication cycle.",
                "Differentiate lytic/productive and latent infection.",
                "Explain why antibiotics do not treat viruses."
            ],
            [
                ["Virus", "Acellular infectious agent requiring host-cell machinery for replication."],
                ["Virion", "Complete infectious virus particle outside a host cell."],
                ["Capsid", "Protein coat surrounding viral genetic material."],
                ["Envelope", "Host-derived lipid membrane surrounding some viruses."],
                ["Viral genome", "DNA or RNA genetic material of a virus."],
                ["Host range", "Range of species or cells a virus can infect."],
                ["Tropism", "Preference of a virus for particular cells or tissues."],
                ["Latency", "Persistence of viral genetic material with limited active replication."],
                ["Budding", "Release process used by many enveloped viruses."]
            ],
            [
                section(
                    "STRUCTURE",
                    "Viruses Are Acellular",
                    [
                        "Viruses contain genetic material surrounded by a protein capsid.",
                        "Some viruses additionally possess a host-derived lipid envelope.",
                        "Viruses lack independent ribosomes and do not produce ATP through complete metabolic pathways."
                    ]
                ),
                section(
                    "GENOMES",
                    "DNA or RNA, But Not Both as the Main Genome",
                    [
                        "Viral genomes may be DNA or RNA.",
                        "They can be single stranded or double stranded depending on the virus.",
                        "Genome type determines how the virus replicates and which enzymes it must use or encode."
                    ]
                ),
                section(
                    "ATTACHMENT AND ENTRY",
                    "Receptor Binding Determines Tropism",
                    [
                        "Viral surface proteins bind specific receptors on host cells.",
                        "This receptor requirement contributes to host range and tissue tropism.",
                        "After attachment, viruses enter through membrane fusion, endocytosis or other mechanisms."
                    ]
                ),
                section(
                    "REPLICATION",
                    "Redirecting Host Machinery",
                    [
                        "A generalized replication cycle includes attachment, entry, uncoating, genome replication, protein synthesis, assembly and release.",
                        "Viruses use host ribosomes to make viral proteins.",
                        "New virions are assembled from newly synthesized genomes and structural proteins."
                    ]
                ),
                section(
                    "ENVELOPED VS NONENVELOPED",
                    "Environmental Stability Differs",
                    [
                        "Enveloped viruses acquire lipid membranes from host cells.",
                        "Lipid envelopes are vulnerable to detergents, drying and many disinfectants.",
                        "Many nonenveloped viruses are more environmentally stable."
                    ]
                ),
                section(
                    "LATENCY",
                    "The Genome Can Remain Without Continuous Production",
                    [
                        "Some viruses establish latent infection in which viral genetic material remains within host cells.",
                        "Herpesviruses are classic examples.",
                        "Reactivation can occur months or years later."
                    ]
                )
            ],
            {
                title: "Antibiotics and Viral Illness",
                scenario: "A patient with a confirmed uncomplicated viral respiratory infection requests an antibiotic.",
                connection: "Antibacterial drugs target bacterial structures such as peptidoglycan, bacterial ribosomes or bacterial enzymes that viruses do not possess."
            },
            [
                ["Why must viruses infect cells to replicate?", "They lack independent ribosomes and complete metabolic machinery.", ["Host cells provide essential biosynthetic systems."]],
                ["What is a capsid?", "The protein coat surrounding the viral genome.", ["It protects genetic material and helps determine structure."]],
                ["Why are many enveloped viruses sensitive to detergents?", "Detergents disrupt the lipid envelope.", ["Loss of an envelope can destroy infectivity."]]
            ],
            [
                "Viruses are not bacteria.",
                "Antibiotics generally do not treat viral disease.",
                "Not every virus has an envelope.",
                "Latency does not mean the virus has been eliminated."
            ],
            [
                "CAPSID = coat.",
                "ENVELOPE = lipid layer.",
                "TROPISM = tissue preference.",
                "LATENCY = hidden genome persists."
            ],
            [
                "Viruses are acellular.",
                "Virions contain genome and capsid.",
                "Some viruses have envelopes.",
                "Viruses require host cells to reproduce.",
                "Attachment depends on host receptors.",
                "Some viruses establish latency.",
                "Antibiotics do not target viral replication."
            ],
            [
                {
                    id: "virus1",
                    type: "mcq",
                    q: "Why are standard antibacterial antibiotics ineffective against viruses?",
                    choices: [
                        "Viruses lack bacterial targets such as peptidoglycan and bacterial ribosomes.",
                        "Viruses are always larger than bacteria.",
                        "Viruses contain thicker peptidoglycan.",
                        "Viruses reproduce only in water."
                    ],
                    answer: 0,
                    explanation: "Antibiotics generally target structures and metabolic pathways present in bacteria but absent from viruses."
                },
                {
                    id: "virus2",
                    type: "mcq",
                    q: "Which structure surrounds the viral genome in all conventional viruses?",
                    choices: ["Capsid", "Peptidoglycan", "Cell wall", "Mitochondrion"],
                    answer: 0,
                    explanation: "The protein capsid encloses the viral genome."
                }
            ],
            ["Virology", "Clinical", "High Yield"]
        ),

        topic(
            "respiratory-viruses",
            34,
            6,
            "Influenza, RSV, Coronaviruses & Respiratory Viruses",
            "Study common respiratory viruses, antigenic variation, risk groups and prevention.",
            [
                "Describe influenza virus disease.",
                "Differentiate antigenic drift and shift.",
                "Describe RSV.",
                "Describe respiratory coronaviruses.",
                "Explain major respiratory transmission concepts.",
                "Connect vaccination with prevention."
            ],
            [
                ["Influenza", "Acute respiratory viral infection caused mainly by influenza A or B."],
                ["Antigenic drift", "Gradual accumulation of mutations in viral surface-antigen genes."],
                ["Antigenic shift", "Major reassortment producing a substantially new influenza A strain."],
                ["RSV", "Respiratory syncytial virus."],
                ["Coronavirus", "Enveloped RNA-virus family including several human respiratory pathogens."],
                ["Droplet transmission", "Spread through respiratory particles over close range."]
            ],
            [
                section(
                    "INFLUENZA CLINICAL PICTURE",
                    "Abrupt Systemic and Respiratory Illness",
                    [
                        "Influenza often begins abruptly with fever, chills, myalgia, headache and fatigue.",
                        "Respiratory symptoms include cough and sore throat.",
                        "Complications include viral pneumonia and secondary bacterial pneumonia."
                    ]
                ),
                section(
                    "ANTIGENIC DRIFT",
                    "Small Changes Over Time",
                    [
                        "RNA replication errors gradually alter influenza surface proteins.",
                        "These accumulated mutations are called antigenic drift.",
                        "Drift contributes to seasonal influenza outbreaks and the need to review vaccine composition regularly."
                    ]
                ),
                section(
                    "ANTIGENIC SHIFT",
                    "Major Reassortment",
                    [
                        "Influenza A viruses contain segmented genomes.",
                        "When different influenza A strains infect the same host cell, genome segments can reassort.",
                        "A major new antigen combination is called antigenic shift and can contribute to pandemic emergence."
                    ]
                ),
                section(
                    "RSV",
                    "A Major Cause of Infant Bronchiolitis",
                    [
                        "RSV commonly causes upper respiratory illness in older children and adults.",
                        "Infants can develop bronchiolitis and pneumonia.",
                        "Prematurity and significant cardiopulmonary disease increase risk of severe infection."
                    ]
                ),
                section(
                    "CORONAVIRUSES",
                    "Enveloped RNA Respiratory Viruses",
                    [
                        "Human coronaviruses include strains causing common-cold illnesses and strains capable of severe respiratory disease.",
                        "Risk of transmission depends on respiratory particles, proximity, ventilation and viral characteristics.",
                        "Vaccination, ventilation, respiratory hygiene and appropriate isolation reduce spread."
                    ]
                )
            ],
            {
                title: "Seasonal Influenza",
                scenario: "A nursing facility experiences multiple residents with abrupt fever, myalgias and cough during influenza season.",
                connection: "Influenza can spread rapidly in congregate settings and may cause severe complications in older adults."
            },
            [
                ["What is antigenic drift?", "Gradual mutation of influenza surface antigens.", ["It contributes to seasonal variation."]],
                ["What is antigenic shift?", "Major reassortment in influenza A.", ["It can create substantially new antigen combinations."]],
                ["Which virus is a major cause of bronchiolitis in infants?", "RSV.", ["RSV can cause serious lower-respiratory disease in infants."]]
            ],
            [
                "Antigenic shift occurs especially in influenza A.",
                "Drift is gradual mutation; shift is major reassortment.",
                "RSV is a virus, not a bacterium."
            ],
            [
                "DRIFT = little changes.",
                "SHIFT = big switch.",
                "RSV = respiratory syncytial virus in infants."
            ],
            [
                "Influenza causes systemic and respiratory symptoms.",
                "Drift is gradual mutation.",
                "Shift is major reassortment.",
                "RSV causes infant bronchiolitis.",
                "Coronaviruses are enveloped RNA viruses.",
                "Respiratory prevention uses vaccination, hygiene and appropriate precautions."
            ],
            [
                {
                    id: "respvirus1",
                    type: "mcq",
                    q: "Which process explains gradual year-to-year changes in influenza surface antigens?",
                    choices: ["Antigenic drift", "Antigenic shift", "Binary fission", "Conjugation"],
                    answer: 0,
                    explanation: "Antigenic drift is gradual accumulation of mutations."
                },
                {
                    id: "respvirus2",
                    type: "mcq",
                    q: "Which virus is a major cause of bronchiolitis in infants?",
                    choices: ["RSV", "HIV", "Hepatitis C virus", "Human papillomavirus"],
                    answer: 0,
                    explanation: "Respiratory syncytial virus is a major cause of infant bronchiolitis."
                }
            ],
            ["Virology", "Clinical", "High Yield"]
        ),

        topic(
            "herpes-hpv",
            35,
            6,
            "Herpesviruses, Varicella, EBV, CMV & HPV",
            "Learn clinically important persistent DNA viruses, latency and oncogenic viral infections.",
            [
                "Explain herpesvirus latency.",
                "Differentiate HSV-1 and HSV-2 conceptually.",
                "Describe varicella-zoster virus.",
                "Describe EBV and CMV.",
                "Explain HPV-related disease.",
                "Connect vaccination with HPV prevention."
            ],
            [
                ["HSV", "Herpes simplex virus."],
                ["Latency", "Persistence of viral genome with limited active replication."],
                ["Varicella-zoster virus", "Virus causing chickenpox and shingles."],
                ["EBV", "Epstein-Barr virus."],
                ["CMV", "Cytomegalovirus."],
                ["HPV", "Human papillomavirus."],
                ["Oncogenic virus", "Virus capable of contributing to cancer development."],
                ["Shingles", "Reactivation of latent varicella-zoster virus."]
            ],
            [
                section(
                    "HERPES SIMPLEX",
                    "Latency in Sensory Ganglia",
                    [
                        "HSV infects mucosal epithelial cells and then enters sensory neurons.",
                        "The viral genome can remain latent in sensory ganglia.",
                        "Reactivation produces recurrent lesions at or near the original distribution."
                    ]
                ),
                section(
                    "VARICELLA-ZOSTER",
                    "Chickenpox First, Shingles Later",
                    [
                        "Primary varicella-zoster infection causes chickenpox.",
                        "The virus becomes latent in sensory ganglia.",
                        "Later reactivation causes shingles along affected sensory dermatomes."
                    ]
                ),
                section(
                    "EBV",
                    "Mononucleosis and B-Cell Infection",
                    [
                        "Epstein-Barr virus commonly spreads through saliva.",
                        "It infects B lymphocytes and epithelial cells.",
                        "Primary infection in adolescents or adults can cause infectious mononucleosis with fever, pharyngitis and lymphadenopathy."
                    ]
                ),
                section(
                    "CMV",
                    "Important in Immunocompromised and Congenital Infection",
                    [
                        "CMV commonly establishes lifelong latent infection.",
                        "Severe disease is most likely in immunocompromised patients.",
                        "Congenital CMV can cause hearing loss and neurologic injury."
                    ]
                ),
                section(
                    "HPV",
                    "Persistent Infection and Cancer Risk",
                    [
                        "Human papillomaviruses infect epithelial cells.",
                        "Some types cause genital warts, while high-risk oncogenic types can contribute to cervical and other anogenital or oropharyngeal cancers.",
                        "HPV vaccination prevents infection with important high-risk and wart-associated types."
                    ]
                )
            ],
            {
                title: "Painful Dermatomal Vesicles",
                scenario: "An older adult develops a unilateral painful vesicular rash limited to one dermatome.",
                connection: "This pattern is characteristic of shingles caused by reactivation of latent varicella-zoster virus."
            },
            [
                ["What causes shingles?", "Reactivation of varicella-zoster virus.", ["The virus remains latent in sensory ganglia."]],
                ["Which virus commonly causes mononucleosis?", "EBV.", ["EBV infects B lymphocytes."]],
                ["Why is HPV vaccination important?", "It prevents infection with types associated with genital warts and cancers.", ["High-risk HPV types can promote malignant transformation."]]
            ],
            [
                "Chickenpox and shingles are caused by the same virus at different stages.",
                "Latency does not mean elimination.",
                "HPV vaccination is preventive and does not remove an established infection."
            ],
            [
                "VZV = varicella first, zoster later.",
                "EBV = B cells.",
                "CMV = congenital + compromised host.",
                "HPV = papilloma and cancer risk."
            ],
            [
                "Herpesviruses establish latency.",
                "VZV causes chickenpox and shingles.",
                "EBV commonly causes mononucleosis.",
                "CMV is important in congenital and immunocompromised disease.",
                "High-risk HPV can contribute to cancer.",
                "HPV vaccination prevents important infections."
            ],
            [
                {
                    id: "herpes1",
                    type: "mcq",
                    q: "A patient develops a painful unilateral vesicular rash restricted to one dermatome. Which virus is most likely?",
                    choices: ["Varicella-zoster virus", "Hepatitis B virus", "RSV", "Norovirus"],
                    answer: 0,
                    explanation: "Shingles represents reactivation of latent varicella-zoster virus in a sensory ganglion."
                },
                {
                    id: "herpes2",
                    type: "mcq",
                    q: "Which virus is strongly associated with infectious mononucleosis and B-cell infection?",
                    choices: ["EBV", "Influenza A", "HCV", "Rotavirus"],
                    answer: 0,
                    explanation: "Epstein-Barr virus infects B lymphocytes and commonly causes infectious mononucleosis."
                }
            ],
            ["Virology", "Clinical", "High Yield"]
        ),

        topic(
            "bloodborne-viruses",
            36,
            6,
            "HIV, Hepatitis B & Hepatitis C",
            "Study the major bloodborne viruses relevant to healthcare workers, chronic disease and occupational exposure.",
            [
                "Describe HIV target cells and disease progression.",
                "Explain antiretroviral suppression conceptually.",
                "Describe HBV transmission and chronic infection.",
                "Explain HBV vaccination.",
                "Describe HCV chronic infection and treatment.",
                "Explain bloodborne occupational-exposure principles."
            ],
            [
                ["HIV", "Human immunodeficiency virus."],
                ["CD4 T cell", "Helper T lymphocyte targeted by HIV."],
                ["AIDS", "Advanced stage of HIV infection characterized by severe immunodeficiency."],
                ["HBV", "Hepatitis B virus."],
                ["HCV", "Hepatitis C virus."],
                ["Standard precautions", "Core measures treating blood and body fluids as potentially infectious."],
                ["Antiretroviral therapy", "Combination drug therapy suppressing HIV replication."],
                ["Chronic hepatitis", "Long-term liver inflammation that can lead to cirrhosis and cancer."]
            ],
            [
                section(
                    "HIV TARGETS",
                    "Progressive Loss of CD4 T-Cell Function",
                    [
                        "HIV infects cells expressing CD4 and appropriate coreceptors.",
                        "Progressive depletion and dysfunction of CD4 T cells impair cellular and humoral immune coordination.",
                        "Untreated infection can progress to opportunistic infections and AIDS."
                    ]
                ),
                section(
                    "HIV TREATMENT",
                    "Combination Therapy Suppresses Replication",
                    [
                        "Modern antiretroviral therapy combines drugs targeting different stages of the viral life cycle.",
                        "Effective therapy can suppress viral replication to very low levels.",
                        "Long-term suppression allows immune recovery and dramatically improves survival."
                    ]
                ),
                section(
                    "HEPATITIS B",
                    "A Vaccine-Preventable Bloodborne Virus",
                    [
                        "HBV spreads through blood, sexual contact and perinatal exposure.",
                        "Infection can become chronic and lead to cirrhosis or hepatocellular carcinoma.",
                        "Vaccination is highly effective and especially important for healthcare workers."
                    ]
                ),
                section(
                    "HEPATITIS C",
                    "A Frequently Chronic Bloodborne Infection",
                    [
                        "HCV spreads primarily through blood exposure.",
                        "Many infections become chronic.",
                        "Direct-acting antiviral therapy can cure most infections, but there is no routinely available HCV vaccine."
                    ]
                ),
                section(
                    "OCCUPATIONAL EXPOSURE",
                    "Needlestick Management Is Time Sensitive",
                    [
                        "After a needlestick or mucosal blood exposure, the site should be cleaned and the event reported immediately.",
                        "Risk assessment considers the type of exposure, source patient and worker's vaccination status.",
                        "HIV post-exposure prophylaxis is most effective when started promptly when indicated."
                    ]
                )
            ],
            {
                title: "Needlestick Exposure",
                scenario: "A nurse sustains a percutaneous needlestick from a device contaminated with patient blood.",
                connection: "Immediate cleaning, reporting and protocol-based evaluation are essential because HIV, HBV and HCV risks and management differ."
            },
            [
                ["Which immune cell is a major target of HIV?", "CD4 T lymphocyte.", ["Loss of CD4 function causes progressive immunodeficiency."]],
                ["Which major bloodborne virus has an effective vaccine?", "HBV.", ["Healthcare workers should be vaccinated against hepatitis B."]],
                ["Is there a routine vaccine for HCV?", "No.", ["Prevention depends on exposure reduction and blood safety."]]
            ],
            [
                "HIV, HBV and HCV have different prevention and post-exposure approaches.",
                "HBV vaccination does not protect against HCV.",
                "Standard precautions apply even when a patient's infection status is unknown."
            ],
            [
                "HIV = CD4.",
                "HBV = vaccine available.",
                "HCV = no vaccine, but curative therapy exists."
            ],
            [
                "HIV targets CD4-bearing immune cells.",
                "Antiretroviral therapy suppresses HIV replication.",
                "HBV can become chronic and is vaccine preventable.",
                "HCV frequently becomes chronic.",
                "HCV has no routine vaccine.",
                "Needlestick evaluation should occur immediately."
            ],
            [
                {
                    id: "bloodvirus1",
                    type: "mcq",
                    q: "Which bloodborne virus is routinely preventable with vaccination?",
                    choices: ["Hepatitis B virus", "Hepatitis C virus", "HIV", "All three"],
                    answer: 0,
                    explanation: "An effective HBV vaccine is widely available and recommended for healthcare workers."
                },
                {
                    id: "bloodvirus2",
                    type: "mcq",
                    q: "Which lymphocyte population is progressively depleted during untreated HIV infection?",
                    choices: ["CD4 T cells", "Platelets", "Erythrocytes", "Osteocytes"],
                    answer: 0,
                    explanation: "HIV targets CD4-bearing cells and progressive CD4 loss causes immunodeficiency."
                },
                {
                    id: "bloodvirus3",
                    type: "mcq",
                    q: "After a needlestick involving patient blood, the nurse should first follow which general principle?",
                    choices: [
                        "Clean the site and report the exposure immediately.",
                        "Wait several days before reporting.",
                        "Assume transmission has occurred.",
                        "Begin random antibiotics."
                    ],
                    answer: 0,
                    explanation: "Prompt cleaning, reporting and risk assessment are essential because some post-exposure interventions are time sensitive."
                }
            ],
            ["Virology", "Clinical", "Nursing"]
        ),

        // ====================================================================
        // MODULE 7
        // ====================================================================

        topic(
            "fungi",
            37,
            7,
            "Fungi, Candida & Opportunistic Mycoses",
            "Learn fungal cell structure, yeast versus mold morphology and major opportunistic fungal infections.",
            [
                "Differentiate fungi from bacteria.",
                "Differentiate yeasts and molds.",
                "Explain fungal cell-wall and membrane structure.",
                "Describe Candida infections.",
                "Describe Aspergillus conceptually.",
                "Explain why antifungal selective toxicity is challenging."
            ],
            [
                ["Fungus", "Eukaryotic organism including yeasts and molds."],
                ["Yeast", "Unicellular fungus."],
                ["Mold", "Multicellular filamentous fungus."],
                ["Hypha", "Filamentous fungal structure."],
                ["Mycelium", "Mass of fungal hyphae."],
                ["Candida albicans", "Common yeast causing mucosal and invasive infection."],
                ["Aspergillus", "Mold capable of causing allergic and invasive pulmonary disease."],
                ["Ergosterol", "Major fungal cell-membrane sterol."],
                ["Chitin", "Structural component of fungal cell walls."]
            ],
            [
                section(
                    "FUNGAL CELLS",
                    "Fungi Are Eukaryotes",
                    [
                        "Fungi contain nuclei, mitochondria and other membrane-bound organelles.",
                        "Their cell walls contain chitin and glucans rather than peptidoglycan.",
                        "Their plasma membranes contain ergosterol as a major sterol."
                    ]
                ),
                section(
                    "YEASTS",
                    "Single-Celled Fungi",
                    [
                        "Yeasts commonly reproduce by budding.",
                        "Candida species are important human yeasts.",
                        "Some yeasts can form elongated pseudohyphae under appropriate conditions."
                    ]
                ),
                section(
                    "MOLDS",
                    "Filamentous Fungi",
                    [
                        "Molds grow as branching filaments called hyphae.",
                        "Groups of hyphae form a mycelium.",
                        "Microscopic hyphal morphology can help identify molds."
                    ]
                ),
                section(
                    "CANDIDA",
                    "Normal Flora That Can Become Invasive",
                    [
                        "Candida commonly colonizes the mouth, gastrointestinal tract, genital tract and skin.",
                        "Antibiotics, diabetes, immunosuppression and invasive devices increase candidiasis risk.",
                        "Disease ranges from oral thrush and vulvovaginal infection to life-threatening candidemia."
                    ]
                ),
                section(
                    "ASPERGILLUS",
                    "An Airborne Mold",
                    [
                        "Aspergillus spores are common in the environment.",
                        "Healthy people usually clear inhaled spores.",
                        "Severely immunocompromised patients can develop invasive pulmonary aspergillosis."
                    ]
                ),
                section(
                    "ANTIFUNGAL TARGETS",
                    "Fungal and Human Cells Are Both Eukaryotic",
                    [
                        "Antifungal treatment is challenging because fungi share many cellular features with humans.",
                        "Ergosterol and fungal cell-wall components provide useful selective targets.",
                        "Azoles inhibit ergosterol synthesis, while echinocandins inhibit fungal beta-glucan cell-wall synthesis."
                    ]
                )
            ],
            {
                title: "Oral Thrush",
                scenario: "An immunosuppressed patient develops white oral plaques that can be scraped away, exposing erythematous mucosa.",
                connection: "This presentation is consistent with oral candidiasis caused by overgrowth of Candida."
            },
            [
                ["Are fungi prokaryotic or eukaryotic?", "Eukaryotic.", ["They contain nuclei and membrane-bound organelles."]],
                ["What major sterol is found in fungal membranes?", "Ergosterol.", ["Several antifungals target ergosterol or its synthesis."]],
                ["What is a hypha?", "A filamentous fungal structure.", ["Molds consist of branching hyphae."]]
            ],
            [
                "Fungi are not bacteria.",
                "Antibacterial antibiotics generally do not treat fungal infections.",
                "Candida can be normal flora and still become pathogenic.",
                "Ergosterol is the fungal sterol target; cholesterol is the major human membrane sterol."
            ],
            [
                "YEAST = one cell.",
                "MOLD = many hyphae.",
                "ERGOSTEROL = fungal membrane target.",
                "CANDIDA = commensal that becomes opportunistic."
            ],
            [
                "Fungi are eukaryotes.",
                "Yeasts are unicellular.",
                "Molds form hyphae.",
                "Fungal membranes contain ergosterol.",
                "Candida is an important opportunistic pathogen.",
                "Aspergillus can cause invasive disease in immunocompromised patients."
            ],
            [
                {
                    id: "fungi1",
                    type: "mcq",
                    q: "Which molecule is a major fungal membrane target for antifungal therapy?",
                    choices: ["Ergosterol", "Peptidoglycan", "Lipid A", "Teichoic acid"],
                    answer: 0,
                    explanation: "Ergosterol is a major fungal membrane sterol targeted by several antifungal drugs."
                },
                {
                    id: "fungi2",
                    type: "mcq",
                    q: "An immunocompromised patient has white oral plaques that scrape away. Which organism is most likely?",
                    choices: ["Candida albicans", "Neisseria meningitidis", "Clostridium tetani", "E. coli"],
                    answer: 0,
                    explanation: "Oral candidiasis commonly presents with removable white plaques."
                }
            ],
            ["Mycology", "Clinical", "High Yield"]
        ),

        topic(
            "parasites",
            38,
            7,
            "Protozoa, Malaria & Helminths",
            "Study major eukaryotic parasites, their life cycles and transmission routes.",
            [
                "Differentiate protozoa and helminths.",
                "Describe Giardia.",
                "Describe Trichomonas.",
                "Explain malaria transmission and life cycle conceptually.",
                "Differentiate nematodes, cestodes and trematodes.",
                "Recognize eosinophilia in tissue-invasive helminth infection."
            ],
            [
                ["Protozoan", "Single-celled eukaryotic parasite."],
                ["Helminth", "Multicellular parasitic worm."],
                ["Giardia", "Flagellated protozoan causing waterborne diarrheal disease."],
                ["Trichomonas vaginalis", "Sexually transmitted flagellated protozoan."],
                ["Plasmodium", "Protozoan genus causing malaria."],
                ["Vector", "Living organism transmitting a pathogen."],
                ["Nematode", "Roundworm."],
                ["Cestode", "Tapeworm."],
                ["Trematode", "Fluke."],
                ["Eosinophilia", "Increased eosinophil count associated with certain parasitic diseases."]
            ],
            [
                section(
                    "PROTOZOA",
                    "Single-Celled Eukaryotic Parasites",
                    [
                        "Protozoa are eukaryotic cells with nuclei and organelles.",
                        "Many have complex life cycles involving active trophozoites and environmentally resistant cysts.",
                        "Their treatment therefore differs from antibacterial therapy."
                    ]
                ),
                section(
                    "GIARDIA",
                    "Waterborne Malabsorptive Diarrhea",
                    [
                        "Giardia cysts are transmitted through fecally contaminated water or food.",
                        "Trophozoites attach to the small intestinal mucosa.",
                        "Infection can produce foul-smelling, greasy diarrhea and malabsorption."
                    ]
                ),
                section(
                    "TRICHOMONAS",
                    "A Sexually Transmitted Protozoan",
                    [
                        "Trichomonas vaginalis is transmitted sexually.",
                        "It causes vaginitis and can cause urethral symptoms.",
                        "Unlike Giardia, it does not form a typical environmentally resistant cyst stage."
                    ]
                ),
                section(
                    "MALARIA",
                    "Mosquito-Borne Protozoan Infection",
                    [
                        "Malaria is caused by Plasmodium species transmitted through infected Anopheles mosquitoes.",
                        "Parasites first infect liver cells and later red blood cells.",
                        "Red-cell infection and rupture contribute to periodic fevers, anemia and systemic complications."
                    ]
                ),
                section(
                    "HELMINTHS",
                    "Multicellular Parasitic Worms",
                    [
                        "Nematodes are roundworms, cestodes are tapeworms and trematodes are flukes.",
                        "Transmission routes include contaminated soil, food, freshwater, insect vectors and undercooked meat.",
                        "Tissue-invasive helminth infections can produce eosinophilia."
                    ]
                )
            ],
            {
                title: "Backpacking Diarrhea",
                scenario: "A traveler develops prolonged foul-smelling greasy diarrhea after drinking untreated stream water.",
                connection: "Giardia is strongly associated with ingestion of cysts from contaminated surface water."
            },
            [
                ["What kind of organism is Giardia?", "A protozoan.", ["It is a single-celled eukaryotic parasite."]],
                ["How is malaria transmitted?", "Through infected Anopheles mosquitoes.", ["The mosquito is a vector."]],
                ["What is a cestode?", "A tapeworm.", ["Cestodes are flat segmented helminths."]]
            ],
            [
                "Protozoa are not bacteria.",
                "Malaria is caused by a protozoan, not a virus.",
                "Helminths are multicellular eukaryotes.",
                "A vector is living; a fomite is inanimate."
            ],
            [
                "GIARDIA = greasy waterborne diarrhea.",
                "TRICHOMONAS = sexually transmitted protozoan.",
                "PLASMODIUM = malaria.",
                "CESTODE = tapeworm."
            ],
            [
                "Protozoa are single-celled eukaryotes.",
                "Helminths are multicellular worms.",
                "Giardia spreads through contaminated water.",
                "Trichomonas is sexually transmitted.",
                "Plasmodium causes malaria.",
                "Anopheles mosquitoes transmit malaria.",
                "Helminths can produce eosinophilia."
            ],
            [
                {
                    id: "parasite1",
                    type: "mcq",
                    q: "Which organism is classically associated with prolonged greasy diarrhea after drinking untreated stream water?",
                    choices: ["Giardia", "Staphylococcus aureus", "HIV", "Mycobacterium tuberculosis"],
                    answer: 0,
                    explanation: "Giardia cysts are commonly transmitted through fecally contaminated surface water."
                },
                {
                    id: "parasite2",
                    type: "mcq",
                    q: "Which organism causes malaria?",
                    choices: ["Plasmodium", "Neisseria", "Candida", "Influenza"],
                    answer: 0,
                    explanation: "Malaria is caused by protozoa in the genus Plasmodium."
                }
            ],
            ["Parasitology", "Clinical", "High Yield"]
        ),

        // ====================================================================
        // MODULE 8
        // ====================================================================

        topic(
            "specimens",
            39,
            8,
            "Clinical Specimen Collection & Transport",
            "Learn how blood, urine, respiratory, wound and sterile-site specimens should be collected to produce reliable microbiology results.",
            [
                "Explain why specimen quality determines diagnostic quality.",
                "Describe blood-culture collection principles.",
                "Explain clean-catch urine collection.",
                "Recognize poor-quality respiratory specimens.",
                "Compare superficial wound swabs with deep specimens.",
                "Explain labeling and transport requirements."
            ],
            [
                ["Clinical specimen", "Patient sample submitted for laboratory testing."],
                ["Blood culture", "Culture used to detect bloodstream microorganisms."],
                ["Clean-catch urine", "Midstream urine specimen collected to reduce contamination."],
                ["Contamination", "Introduction of organisms not representing the true infected site."],
                ["Transport medium", "Medium designed to preserve specimen organisms during transport."],
                ["Sterile site", "Body site expected to contain no microorganisms under ordinary conditions."],
                ["Specimen rejection", "Laboratory refusal of an improperly collected, labeled or transported specimen."]
            ],
            [
                section(
                    "GENERAL PRINCIPLES",
                    "The Laboratory Cannot Repair a Poor Specimen",
                    [
                        "A specimen should represent the actual site of infection.",
                        "Collection must use appropriate aseptic technique, adequate volume and correct containers.",
                        "Whenever practical, cultures are obtained before antimicrobials are started, but urgent treatment should not be dangerously delayed."
                    ]
                ),
                section(
                    "BLOOD CULTURES",
                    "Skin Antisepsis and Blood Volume Matter",
                    [
                        "Blood-culture contamination commonly occurs when skin flora enter the bottle during collection.",
                        "Careful antisepsis reduces false-positive results.",
                        "Adequate blood volume is one of the most important determinants of culture sensitivity."
                    ]
                ),
                section(
                    "URINE",
                    "Clean-Catch Midstream Collection",
                    [
                        "The patient cleanses appropriately and begins urinating before collecting the midstream portion.",
                        "This reduces contamination by skin and periurethral organisms.",
                        "Urine should be transported promptly or preserved appropriately."
                    ]
                ),
                section(
                    "RESPIRATORY SPECIMENS",
                    "Sputum Must Come From the Lower Respiratory Tract",
                    [
                        "Saliva contains abundant upper-airway microbiota.",
                        "A poor-quality sputum specimen may produce misleading cultures.",
                        "Laboratories often assess cellular content to judge whether the specimen represents lower respiratory secretions."
                    ]
                ),
                section(
                    "WOUNDS AND STERILE SITES",
                    "Sample the Deep Infection",
                    [
                        "Superficial swabs can recover colonizing organisms.",
                        "Deep aspirates or tissue specimens often provide better information for deep infections.",
                        "Specimens from normally sterile sites are especially clinically significant."
                    ]
                )
            ],
            {
                title: "Blood-Culture Contamination",
                scenario: "Only one bottle grows a common skin organism in a patient without signs of bloodstream infection.",
                connection: "Collection contamination is possible, especially when skin antisepsis was suboptimal, though clinical context must guide interpretation."
            },
            [
                ["Why is blood-culture skin antisepsis important?", "To reduce contamination by skin flora.", ["False positives can lead to unnecessary antibiotics."]],
                ["Why collect midstream urine?", "To reduce contamination.", ["The initial stream flushes urethral contaminants."]],
                ["Why can superficial wound swabs be misleading?", "They may sample colonizers rather than deep pathogens.", ["Deep tissue may better represent the infected site."]]
            ],
            [
                "A positive culture does not automatically mean true infection.",
                "Specimen contamination often occurs before the sample reaches the laboratory.",
                "Correct labeling is a patient-safety requirement.",
                "Culture collection should not dangerously delay lifesaving therapy."
            ],
            [
                "GOOD SPECIMEN = right site, right container, right time.",
                "BLOOD = skin antisepsis + volume.",
                "URINE = clean catch + midstream."
            ],
            [
                "Specimen quality determines test quality.",
                "Blood cultures require careful skin antisepsis.",
                "Adequate blood volume improves detection.",
                "Midstream urine reduces contamination.",
                "Deep wound specimens may outperform superficial swabs.",
                "Transport conditions matter."
            ],
            [
                {
                    id: "spec1",
                    type: "mcq",
                    q: "What is the main purpose of clean-catch midstream urine collection?",
                    choices: ["Reduce contamination", "Sterilize the bladder", "Increase skin flora", "Destroy urinary pathogens"],
                    answer: 0,
                    explanation: "Clean-catch technique reduces contamination from skin and urethral flora."
                },
                {
                    id: "spec2",
                    type: "mcq",
                    q: "Which factor is especially important for maximizing blood-culture sensitivity?",
                    choices: ["Adequate blood volume", "Leaving bottle caps open", "Using saliva instead of blood", "Delaying transport for days"],
                    answer: 0,
                    explanation: "Blood volume is a major determinant of blood-culture sensitivity."
                }
            ],
            ["Lab", "Clinical", "Nursing"]
        ),

        topic(
            "diagnostics",
            40,
            8,
            "Culture, PCR, NAAT, Antigen Tests & Susceptibility Testing",
            "Learn how clinical microbiology laboratories identify organisms and determine antimicrobial susceptibility.",
            [
                "Explain culture-based identification.",
                "Describe antigen tests.",
                "Explain PCR and NAAT.",
                "Define sensitivity and specificity.",
                "Explain disk diffusion.",
                "Define MIC and breakpoints."
            ],
            [
                ["Culture", "Growth of viable microorganisms on or in nutrient media."],
                ["Antigen test", "Test that detects microbial molecules."],
                ["PCR", "Polymerase chain reaction used to amplify target DNA."],
                ["NAAT", "Nucleic acid amplification test."],
                ["Sensitivity", "Ability of a test to identify people who truly have the target condition."],
                ["Specificity", "Ability of a test to identify people who truly do not have the target condition."],
                ["Disk diffusion", "Agar method measuring zones of inhibition around antimicrobial disks."],
                ["Zone of inhibition", "Area where bacterial growth is prevented."],
                ["MIC", "Minimum inhibitory concentration."],
                ["Breakpoint", "Standard threshold used to interpret susceptibility."]
            ],
            [
                section(
                    "CULTURE",
                    "Grow the Organism",
                    [
                        "Culture allows laboratories to recover viable microorganisms.",
                        "Colonies can be examined by Gram stain, biochemical tests and automated identification systems.",
                        "Culture also provides living organisms for phenotypic susceptibility testing."
                    ]
                ),
                section(
                    "ANTIGEN TESTS",
                    "Detect Microbial Proteins or Other Molecules",
                    [
                        "Antigen assays use antibodies or similar binding molecules to detect pathogen components.",
                        "They are often faster than culture.",
                        "Performance depends on the organism, specimen type and amount of antigen."
                    ]
                ),
                section(
                    "PCR AND NAAT",
                    "Amplify Genetic Targets",
                    [
                        "PCR amplifies selected DNA sequences.",
                        "RNA viruses can be detected by reverse-transcription amplification approaches.",
                        "Molecular testing is especially useful for viruses, slow-growing organisms and pathogens difficult to culture."
                    ]
                ),
                section(
                    "SENSITIVITY AND SPECIFICITY",
                    "Understanding Test Performance",
                    [
                        "A highly sensitive test detects most true cases and therefore produces few false negatives.",
                        "A highly specific test correctly excludes most people without the disease and therefore produces few false positives.",
                        "Predictive values also depend on disease prevalence."
                    ]
                ),
                section(
                    "DISK DIFFUSION",
                    "Zones of Inhibition",
                    [
                        "A standardized bacterial suspension is spread across an agar plate.",
                        "Antibiotic disks are placed on the surface.",
                        "The diameter of each inhibition zone is measured and interpreted using standardized drug-specific breakpoints."
                    ]
                ),
                section(
                    "MIC",
                    "The Lowest Concentration Preventing Visible Growth",
                    [
                        "MIC testing exposes bacteria to a range of drug concentrations.",
                        "The MIC is the lowest concentration preventing visible growth.",
                        "The value is interpreted using standardized susceptibility breakpoints that incorporate pharmacology and outcome data."
                    ]
                )
            ],
            {
                title: "Rapid Influenza NAAT",
                scenario: "A respiratory molecular test identifies influenza viral RNA within a few hours.",
                connection: "Nucleic-acid amplification can provide rapid sensitive detection without requiring prolonged culture."
            },
            [
                ["What does PCR amplify?", "Target nucleic-acid sequences.", ["DNA targets are amplified directly; RNA targets require reverse transcription."]],
                ["What does high sensitivity reduce?", "False negatives.", ["Most true cases are detected."]],
                ["What does MIC mean?", "Minimum inhibitory concentration.", ["It is the lowest concentration preventing visible growth."]]
            ],
            [
                "A positive molecular test does not always prove that viable organisms remain.",
                "Sensitivity and specificity are not the same as predictive value.",
                "A larger disk-diffusion zone cannot be compared directly across unrelated antibiotics without breakpoints.",
                "MIC is not the same as minimum bactericidal concentration."
            ],
            [
                "SENSITIVE = catches Sick cases.",
                "SPECIFIC = confirms healthy negatives.",
                "MIC = minimum concentration that inhibits."
            ],
            [
                "Culture recovers viable organisms.",
                "Antigen tests detect microbial molecules.",
                "PCR and NAAT detect nucleic acid.",
                "High sensitivity reduces false negatives.",
                "High specificity reduces false positives.",
                "Disk diffusion measures inhibition zones.",
                "MIC is the lowest concentration preventing visible growth."
            ],
            [
                {
                    id: "diag1",
                    type: "mcq",
                    q: "Which test directly amplifies microbial nucleic acid?",
                    choices: ["PCR", "Gram stain", "Autoclave", "Catalase test"],
                    answer: 0,
                    explanation: "PCR amplifies targeted nucleic-acid sequences."
                },
                {
                    id: "diag2",
                    type: "mcq",
                    q: "A test with very high sensitivity is especially useful because it produces relatively few:",
                    choices: ["False negatives", "True positives", "True negatives", "Culture colonies"],
                    answer: 0,
                    explanation: "High sensitivity means most people with the disease test positive, reducing false negatives."
                },
                {
                    id: "diag3",
                    type: "mcq",
                    q: "What is measured during Kirby-Bauer disk-diffusion testing?",
                    choices: ["Zone of inhibition", "Antibody titer only", "Viral capsid size", "Number of host chromosomes"],
                    answer: 0,
                    explanation: "The diameter of the inhibition zone is measured and compared with standardized breakpoints."
                }
            ],
            ["Lab", "Clinical", "Practical"]
        ),

        topic(
            "epidemiology",
            41,
            8,
            "Epidemiology, Incidence, Prevalence & the Chain of Infection",
            "Learn how infectious diseases spread through populations and how nurses help break transmission chains.",
            [
                "Define incidence and prevalence.",
                "Differentiate endemic, epidemic and pandemic.",
                "Define reservoir, vector and fomite.",
                "Explain the chain of infection.",
                "Explain outbreak investigation basics.",
                "Calculate a simple attack rate."
            ],
            [
                ["Epidemiology", "Study of distribution and determinants of health events in populations."],
                ["Incidence", "Number or rate of new cases during a defined time period."],
                ["Prevalence", "Proportion of a population with a condition at a defined time."],
                ["Endemic", "Disease consistently present in a population or region."],
                ["Epidemic", "Disease occurrence above expected levels."],
                ["Pandemic", "Epidemic spreading across multiple countries or continents."],
                ["Reservoir", "Natural habitat in which an infectious agent persists."],
                ["Vector", "Living organism transmitting a pathogen."],
                ["Fomite", "Contaminated inanimate object involved in transmission."],
                ["Attack rate", "Proportion of exposed people who become ill during an outbreak."]
            ],
            [
                section(
                    "INCIDENCE",
                    "New Cases Measure Risk",
                    [
                        "Incidence measures newly occurring disease cases over a specified period.",
                        "It is useful for estimating the risk of developing an infection.",
                        "A rising incidence suggests increasing transmission or detection."
                    ]
                ),
                section(
                    "PREVALENCE",
                    "Existing Cases Measure Burden",
                    [
                        "Prevalence includes people already living with the condition.",
                        "A disease can have high prevalence if it lasts a long time, even when incidence is relatively low.",
                        "Prevalence therefore reflects total burden more than immediate risk."
                    ]
                ),
                section(
                    "ENDEMIC, EPIDEMIC, PANDEMIC",
                    "Expected Versus Excess Disease",
                    [
                        "Endemic disease remains consistently present in a population.",
                        "An epidemic occurs when cases exceed expected levels.",
                        "A pandemic is an epidemic spanning broad international regions."
                    ]
                ),
                section(
                    "CHAIN OF INFECTION",
                    "Transmission Requires Connected Links",
                    [
                        "The chain includes the infectious agent, reservoir, portal of exit, mode of transmission, portal of entry and susceptible host.",
                        "Breaking any link can reduce transmission.",
                        "Hand hygiene interrupts transmission, vaccines reduce host susceptibility and isolation limits opportunities for spread."
                    ]
                ),
                section(
                    "OUTBREAK INVESTIGATION",
                    "Person, Place and Time",
                    [
                        "Investigators confirm an outbreak and verify diagnoses.",
                        "A case definition is developed.",
                        "Cases are analyzed according to person, place and time to identify common exposures and transmission patterns."
                    ]
                ),
                section(
                    "ATTACK RATE",
                    "A Simple Outbreak Calculation",
                    [
                        "Attack rate equals the number of people who become ill divided by the number exposed, multiplied by 100.",
                        "For example, if 20 of 50 people who ate a food develop illness, the attack rate is 40 percent.",
                        "Comparing attack rates among exposures can help identify an outbreak source."
                    ]
                )
            ],
            {
                title: "Unit Gastroenteritis Outbreak",
                scenario: "Eight patients on one hospital unit develop the same gastrointestinal illness within three days.",
                connection: "Investigators would compare shared exposures, room locations, timing, staff interactions and environmental contamination."
            },
            [
                ["What does incidence measure?", "New cases over a defined period.", ["Incidence reflects risk."]],
                ["What does prevalence measure?", "Existing disease burden.", ["It includes all current cases."]],
                ["If 20 of 50 exposed people become ill, what is the attack rate?", "40%.", ["20 ÷ 50 × 100 = 40%."]]
            ],
            [
                "Incidence and prevalence are not interchangeable.",
                "Endemic does not mean harmless.",
                "A vector is living; a fomite is inanimate.",
                "Attack rate uses the number exposed as the denominator."
            ],
            [
                "INCIDENCE = incoming new cases.",
                "PREVALENCE = present cases.",
                "VECTOR = living carrier.",
                "FOMITE = object."
            ],
            [
                "Incidence measures new cases.",
                "Prevalence measures total disease burden.",
                "Endemic means consistently present.",
                "Epidemic means above expected.",
                "Pandemic spans broad regions.",
                "Breaking the chain of infection reduces spread.",
                "Attack rate measures illness among exposed people."
            ],
            [
                {
                    id: "epi1",
                    type: "mcq",
                    q: "Which measure focuses on newly occurring cases during a defined time period?",
                    choices: ["Incidence", "Prevalence", "Specificity", "Colonization"],
                    answer: 0,
                    explanation: "Incidence measures new cases over time."
                },
                {
                    id: "epi2",
                    type: "numeric",
                    q: "During a foodborne outbreak, 30 of 75 exposed people become ill. What is the attack rate as a percentage?",
                    answer: 40,
                    tolerance: 0,
                    unit: "%",
                    explanation: "Attack rate = 30 ÷ 75 × 100 = 40%."
                },
                {
                    id: "epi3",
                    type: "mcq",
                    q: "Which is an example of a fomite?",
                    choices: ["Contaminated blood-pressure cuff", "Mosquito", "Tick", "Human reservoir"],
                    answer: 0,
                    explanation: "A fomite is a contaminated inanimate object involved in transmission."
                }
            ],
            ["Public Health", "Calculation", "Clinical"]
        ),

        topic(
            "infection-control",
            42,
            8,
            "Standard, Contact, Droplet & Airborne Precautions",
            "Master hand hygiene, PPE, standard precautions and the three major transmission-based precaution categories.",
            [
                "Explain standard precautions.",
                "Explain why gloves do not replace hand hygiene.",
                "Differentiate contact, droplet and airborne precautions.",
                "Explain negative-pressure rooms.",
                "Recognize classic organisms for each precaution category.",
                "Explain safe transport and equipment practices."
            ],
            [
                ["Standard precautions", "Core infection-prevention practices applied to every patient."],
                ["Contact precautions", "Measures for organisms spread primarily through direct or indirect contact."],
                ["Droplet precautions", "Measures for organisms spread mainly through larger respiratory particles at close range."],
                ["Airborne precautions", "Measures for organisms spread through small suspended airborne particles."],
                ["Negative-pressure room", "Room in which air flows inward and does not freely escape into surrounding areas."],
                ["N95 respirator", "Respirator used for certain airborne exposure risks."],
                ["Dedicated equipment", "Patient-care equipment reserved for one patient to reduce cross-transmission."]
            ],
            [
                section(
                    "STANDARD PRECAUTIONS",
                    "Every Patient, Every Time",
                    [
                        "Standard precautions are used for all patients regardless of known diagnosis.",
                        "They include hand hygiene, PPE based on anticipated exposure, sharps safety, respiratory hygiene, safe injections and environmental cleaning.",
                        "Transmission-based precautions are added when an organism requires additional control."
                    ]
                ),
                section(
                    "HAND HYGIENE",
                    "The Most Fundamental Infection-Prevention Measure",
                    [
                        "Hands frequently transfer microorganisms between patients, surfaces and equipment.",
                        "Alcohol-based hand rub is effective in many routine situations.",
                        "Soap and water is especially important when hands are visibly soiled and in certain spore-related situations where mechanical removal is emphasized."
                    ]
                ),
                section(
                    "CONTACT PRECAUTIONS",
                    "Direct and Indirect Contact",
                    [
                        "Contact precautions commonly involve gown and gloves and attention to environmental cleaning.",
                        "Dedicated equipment reduces transfer through contaminated devices.",
                        "C. difficile and many multidrug-resistant organisms are common examples."
                    ]
                ),
                section(
                    "DROPLET PRECAUTIONS",
                    "Close-Range Respiratory Spread",
                    [
                        "Droplet precautions protect against larger respiratory particles generated by coughing, sneezing or talking.",
                        "A surgical mask is commonly used for close contact depending on the pathogen and institutional protocol.",
                        "Influenza and meningococcal disease are classic examples."
                    ]
                ),
                section(
                    "AIRBORNE PRECAUTIONS",
                    "Small Suspended Particles",
                    [
                        "Airborne precautions are used when infectious particles remain suspended in air.",
                        "Patients are placed in airborne infection isolation rooms with negative pressure when available.",
                        "Appropriate respirators such as fit-tested N95 devices are used.",
                        "Pulmonary tuberculosis, measles and varicella are classic examples."
                    ],
                    [
                        ["Category", "Classic Examples", "Major Concept"],
                        ["Contact", "C. difficile, many MDROs", "Touch/surfaces"],
                        ["Droplet", "Influenza, meningococcus", "Close respiratory particles"],
                        ["Airborne", "TB, measles, varicella", "Suspended particles"]
                    ]
                ),
                section(
                    "GLOVES AND PPE",
                    "Barriers Do Not Replace Hand Hygiene",
                    [
                        "Gloves reduce contamination during expected contact with blood, body fluids or contaminated materials.",
                        "Gloves can have microscopic defects and hands can become contaminated during removal.",
                        "Hand hygiene is therefore still required after glove removal."
                    ]
                )
            ],
            {
                title: "Suspected Pulmonary Tuberculosis",
                scenario: "A coughing patient with weight loss and a cavitary lung lesion arrives in the emergency department.",
                connection: "The patient should be placed under airborne precautions with appropriate respiratory protection."
            },
            [
                ["Which precautions are used for pulmonary TB?", "Airborne precautions.", ["TB spreads through suspended infectious particles."]],
                ["Which category is classic for influenza?", "Droplet precautions.", ["Large respiratory particles are an important transmission route."]],
                ["Do gloves replace hand hygiene?", "No.", ["Hands may become contaminated during removal or through defects."]]
            ],
            [
                "Standard precautions continue when transmission-based precautions are added.",
                "Airborne and droplet precautions are not interchangeable.",
                "Gloves do not replace hand hygiene.",
                "Isolation category depends on transmission mechanism, not disease severity."
            ],
            [
                "CONTACT = touch.",
                "DROPLET = close respiratory spread.",
                "AIRBORNE = particles stay suspended.",
                "TB = airborne."
            ],
            [
                "Standard precautions apply to all patients.",
                "Hand hygiene interrupts transmission.",
                "Contact precautions reduce touch and surface spread.",
                "Droplet precautions reduce close respiratory spread.",
                "Airborne precautions control suspended particles.",
                "TB requires airborne precautions.",
                "Gloves do not replace hand hygiene."
            ],
            [
                {
                    id: "prec1",
                    type: "mcq",
                    q: "Which infection is the classic example requiring airborne precautions?",
                    choices: ["Pulmonary tuberculosis", "Uncomplicated E. coli UTI", "Vaginal candidiasis", "Localized cellulitis"],
                    answer: 0,
                    explanation: "Pulmonary TB can spread through small airborne particles."
                },
                {
                    id: "prec2",
                    type: "mcq",
                    q: "Which statement about gloves is correct?",
                    choices: [
                        "Hand hygiene is still required after glove removal.",
                        "Gloves sterilize the hands.",
                        "Gloves replace hand hygiene.",
                        "Gloves are required for every interaction."
                    ],
                    answer: 0,
                    explanation: "Gloves reduce exposure but do not eliminate the need for hand hygiene."
                },
                {
                    id: "prec3",
                    type: "mcq",
                    q: "Which infection is classically managed with droplet precautions?",
                    choices: ["Influenza", "Pulmonary TB", "C. difficile diarrhea", "Localized fungal nail infection"],
                    answer: 0,
                    explanation: "Influenza is a classic droplet-precaution infection."
                }
            ],
            ["Nursing", "Clinical", "High Yield"]
        ),

        topic(
            "hais-sepsis",
            43,
            8,
            "Healthcare-Associated Infections, Devices & Sepsis",
            "Connect microbiology to CAUTI, CLABSI, ventilator-associated infection, surgical-site infection, bacteremia and sepsis.",
            [
                "Define healthcare-associated infection.",
                "Explain CAUTI and CLABSI risk.",
                "Explain ventilator-associated infection.",
                "Explain biofilm-related device infection.",
                "Differentiate bacteremia and sepsis.",
                "Explain source control."
            ],
            [
                ["HAI", "Healthcare-associated infection."],
                ["CAUTI", "Catheter-associated urinary tract infection."],
                ["CLABSI", "Central line-associated bloodstream infection."],
                ["VAP", "Ventilator-associated pneumonia."],
                ["Bacteremia", "Presence of viable bacteria in the bloodstream."],
                ["Sepsis", "Life-threatening organ dysfunction caused by a dysregulated host response to infection."],
                ["Septic shock", "Severe subset of sepsis with major circulatory and metabolic abnormalities."],
                ["Source control", "Removal or drainage of an infectious focus."]
            ],
            [
                section(
                    "WHY HOSPITALIZED PATIENTS ARE VULNERABLE",
                    "Multiple Risk Factors Converge",
                    [
                        "Hospitalized patients may have impaired immunity, open wounds, surgery and invasive devices.",
                        "Antibiotic exposure disrupts normal microbiota and selects resistant organisms.",
                        "Frequent contact with healthcare personnel and equipment creates transmission opportunities."
                    ]
                ),
                section(
                    "CAUTI",
                    "Urinary Catheters Bypass Normal Defenses",
                    [
                        "Urinary catheters provide a route for ascending microorganisms.",
                        "Biofilms can form on internal and external catheter surfaces.",
                        "Avoiding unnecessary catheter placement and removing catheters promptly reduces risk."
                    ]
                ),
                section(
                    "CLABSI",
                    "Direct Vascular Access",
                    [
                        "Central lines provide microorganisms direct access to the bloodstream.",
                        "Contamination can occur during insertion, hub manipulation or dressing failure.",
                        "Sterile insertion technique and meticulous maintenance are essential."
                    ]
                ),
                section(
                    "VENTILATORS",
                    "Airway Defenses Are Disrupted",
                    [
                        "Endotracheal tubes bypass upper-airway defenses and interfere with coughing and mucociliary clearance.",
                        "Secretions can accumulate above the cuff and enter the lower respiratory tract.",
                        "Reducing unnecessary ventilation duration lowers risk."
                    ]
                ),
                section(
                    "BACTEREMIA VS SEPSIS",
                    "Bloodstream Organisms Are Not the Definition of Sepsis",
                    [
                        "Bacteremia means viable bacteria are present in blood.",
                        "Sepsis is organ dysfunction caused by a dysregulated host response to infection.",
                        "Sepsis can occur with negative blood cultures and from infections outside the bloodstream."
                    ]
                ),
                section(
                    "SOURCE CONTROL",
                    "Antibiotics May Not Be Enough",
                    [
                        "Infected catheters may need removal.",
                        "Abscesses may need drainage.",
                        "Necrotic tissue may require debridement.",
                        "Effective therapy combines antimicrobial treatment with elimination of the infection source when necessary."
                    ]
                )
            ],
            {
                title: "Sepsis From Pneumonia",
                scenario: "A patient with pneumonia develops hypotension, acute kidney injury, altered mental status and elevated lactate.",
                connection: "This represents systemic organ dysfunction from infection and should raise concern for sepsis and possible septic shock."
            },
            [
                ["What is CAUTI?", "Catheter-associated urinary tract infection.", ["Urinary catheters increase ascending infection risk."]],
                ["Is bacteremia the same as sepsis?", "No.", ["Bacteremia means bacteria in blood; sepsis means life-threatening organ dysfunction from infection."]],
                ["What is source control?", "Removing or draining the focus sustaining infection.", ["Examples include abscess drainage or catheter removal."]]
            ],
            [
                "Sepsis does not require a positive blood culture.",
                "A device should not remain simply for convenience.",
                "Antibiotics may fail if source control is inadequate.",
                "Bacteremia does not automatically equal septic shock."
            ],
            [
                "CAUTI = catheter + urine.",
                "CLABSI = central line + blood.",
                "SEPSIS = infection plus organ dysfunction.",
                "SOURCE CONTROL = remove the source."
            ],
            [
                "HAIs occur during healthcare delivery.",
                "Urinary catheters increase UTI risk.",
                "Central lines can cause bloodstream infection.",
                "Ventilators disrupt airway defenses.",
                "Biofilms support device infections.",
                "Sepsis is organ dysfunction caused by infection.",
                "Source control is often essential."
            ],
            [
                {
                    id: "hai1",
                    type: "mcq",
                    q: "Which intervention most directly reduces infection risk from a urinary catheter that is no longer needed?",
                    choices: ["Remove it promptly", "Leave it for convenience", "Add indefinite antibiotics", "Open the drainage system daily"],
                    answer: 0,
                    explanation: "Reducing unnecessary catheter days is one of the most effective CAUTI-prevention strategies."
                },
                {
                    id: "hai2",
                    type: "mcq",
                    q: "Which statement best defines sepsis?",
                    choices: [
                        "Life-threatening organ dysfunction caused by a dysregulated host response to infection.",
                        "Any positive urine culture.",
                        "Any fever caused by a virus.",
                        "Bacteria growing on an agar plate."
                    ],
                    answer: 0,
                    explanation: "Sepsis is defined by life-threatening organ dysfunction resulting from a dysregulated host response to infection."
                },
                {
                    id: "hai3",
                    type: "mcq",
                    q: "A patient has an infected abscess. Antibiotics are given, but the abscess remains undrained. Which principle is missing?",
                    choices: ["Source control", "Gram staining", "Passive immunity", "Antigenic shift"],
                    answer: 0,
                    explanation: "Many infections require drainage or removal of the infectious focus in addition to antimicrobial therapy."
                }
            ],
            ["Nursing", "Clinical", "High Yield"]
        )
    ];

    // ========================================================================
    // CONSTANTS / MAP
    // ========================================================================

    const TOPIC_COUNT = MICRO_TOPICS.length;
    const TOPIC_MAP = {};

    MICRO_TOPICS.forEach(function (item) {
        TOPIC_MAP[item.id] = item;
    });

    // ========================================================================
    // EXISTING DASHBOARD ELEMENTS
    // ========================================================================

    const dashboardIntro = document.querySelector(".dashboard-intro");
    const progressOverview = document.querySelector(".progress-overview");
    const coursesSection = document.querySelector(".courses-section");
    const weakAreasSection = document.querySelector(".weak-areas-section");
    const footer = document.querySelector("footer");

    const microbiologyCard = document.querySelector(
        '.course-card[data-course="microbiology"]'
    );

    const overallProgress = document.getElementById("overall-progress");
    const overallProgressBar = document.getElementById("overall-progress-bar");
    const topicsMastered = document.getElementById("topics-mastered");
    const questionsAnswered = document.getElementById("questions-answered");

    if (!footer || !microbiologyCard) {
        return;
    }

    // Always ensure dashboard button says Open Course.
    const microDashboardButton = microbiologyCard.querySelector(".course-button");

    if (microDashboardButton) {
        microDashboardButton.textContent = "Open Course →";
    }

    // ========================================================================
    // STORAGE
    // ========================================================================

    function storageFor(topicId) {
        const base = `nshMICRO_FINAL_${topicId}`;

        return {
            read: `${base}_read`,
            review: `${base}_review`,
            practice: `${base}_practice`,
            marked: `${base}_marked`,
            score: `${base}_score`,
            passed: `${base}_passed`,
            attempts: `${base}_attempts`,
            missed: `${base}_missed`
        };
    }

    function getNumber(key) {
        return Number(localStorage.getItem(key)) || 0;
    }

    function getBoolean(key) {
        return localStorage.getItem(key) === "true";
    }

    function getArray(key) {
        try {
            const value = JSON.parse(localStorage.getItem(key) || "[]");
            return Array.isArray(value) ? value : [];
        } catch {
            return [];
        }
    }

    function saveArray(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // ========================================================================
    // UTILITIES
    // ========================================================================

    function shuffle(array) {
        const copy = [...array];

        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        return copy;
    }

    function scrollTopSmooth() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function escapeHTML(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
    }

    // ========================================================================
    // STYLES
    // ========================================================================

    function createStyles() {

        if (document.getElementById("microbiology-final-expanded-styles")) {
            return;
        }

        const style = document.createElement("style");
        style.id = "microbiology-final-expanded-styles";

        style.textContent = `

            .microbiology-course-page .course-page-title {
                background: linear-gradient(135deg,#eff6ff,#ffffff);
                border-color:#dbeafe;
            }

            .microbiology-course-page .course-page-icon {
                background:linear-gradient(135deg,#dbeafe,#eff6ff);
            }

            .micro-topic-stat-row {
                display:flex;
                flex-wrap:wrap;
                gap:8px;
                margin-top:12px;
            }

            .micro-topic-stat {
                display:inline-flex;
                align-items:center;
                gap:6px;
                padding:6px 10px;
                border-radius:999px;
                background:#f8fafc;
                border:1px solid #e5e7eb;
                color:#475467;
                font-size:11px;
                font-weight:700;
            }

            .micro-course-note {
                margin:20px 0;
                padding:20px;
                border-radius:18px;
                background:#f8fafc;
                border:1px solid #e5e7eb;
                color:#475467;
                line-height:1.7;
            }

            .micro-objectives {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:linear-gradient(135deg,#eff6ff,#f8fbff);
                border:1px solid #dbeafe;
            }

            .micro-objectives h3 {
                margin-bottom:12px;
            }

            .micro-objectives li {
                margin-bottom:8px;
                color:#475467;
                line-height:1.65;
                font-size:14px;
            }

            .micro-prose {
                display:flex;
                flex-direction:column;
                gap:15px;
            }

            .micro-prose p {
                margin:0;
                color:#475467;
                line-height:1.8;
                font-size:15px;
            }

            .micro-table-wrap {
                width:100%;
                overflow-x:auto;
                margin-top:22px;
                border:1px solid #e5e7eb;
                border-radius:16px;
            }

            .micro-table {
                width:100%;
                border-collapse:collapse;
                min-width:520px;
            }

            .micro-table th,
            .micro-table td {
                padding:13px 15px;
                border-bottom:1px solid #e5e7eb;
                text-align:left;
                vertical-align:top;
                font-size:13px;
                line-height:1.5;
            }

            .micro-table th {
                background:#f8fafc;
                color:#344054;
                font-weight:800;
            }

            .micro-table td {
                color:#667085;
            }

            .micro-table tr:last-child td {
                border-bottom:none;
            }

            .micro-memory-box {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:#f3f0ff;
                border:1px solid #ddd6fe;
            }

            .micro-memory-box h3 {
                margin:0 0 14px;
                color:#5b21b6;
            }

            .micro-memory-item {
                padding:10px 0;
                color:#5b21b6;
                line-height:1.6;
                border-bottom:1px solid rgba(91,33,182,.12);
            }

            .micro-memory-item:last-child {
                border-bottom:none;
            }

            .micro-exam-traps {
                display:flex;
                flex-direction:column;
                gap:11px;
            }

            .micro-exam-trap {
                padding:16px 18px;
                border-radius:14px;
                background:#fff8ed;
                border:1px solid #fed7aa;
                color:#9a3412;
                line-height:1.55;
                font-size:13px;
            }

            .micro-practice-preview {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:#f7f8ff;
                border:1px solid #c7d2fe;
            }

            .micro-practice-preview p {
                color:#475467;
                line-height:1.65;
            }

            .micro-practice-card {
                padding:22px;
                border:1px solid #e5e7eb;
                border-radius:18px;
                background:#fff;
            }

            .micro-practice-label {
                color:#2563eb;
                font-size:11px;
                font-weight:900;
                letter-spacing:1.2px;
                margin-bottom:8px;
            }

            .micro-practice-question {
                color:#172033;
                font-size:19px;
                line-height:1.55;
                margin-bottom:14px;
            }

            .micro-practice-solution {
                margin-top:18px;
                padding:18px;
                border-radius:15px;
                background:#eff6ff;
                border:1px solid #bfdbfe;
            }

            .micro-practice-solution li {
                margin-bottom:8px;
                color:#475467;
                line-height:1.55;
            }

            .micro-practice-answer {
                margin-top:10px;
                font-weight:900;
                color:#1d4ed8;
            }

            .micro-numeric-wrap {
                margin-top:20px;
            }

            .micro-numeric-input {
                width:100%;
                padding:15px 16px;
                border:1px solid #d0d5dd;
                border-radius:12px;
                font-size:16px;
                outline:none;
                background:#fff;
            }

            .micro-numeric-input:focus {
                border-color:#667eea;
                box-shadow:0 0 0 3px rgba(102,126,234,.12);
            }

            .micro-numeric-unit {
                margin-top:8px;
                color:#667085;
                font-size:12px;
            }

            body.dark-mode .microbiology-course-page .course-page-title {
                background:linear-gradient(135deg,#111d35,#111827);
                border-color:#243c68;
            }

            body.dark-mode .microbiology-course-page .course-page-icon {
                background:#15284b;
            }

            body.dark-mode .micro-topic-stat,
            body.dark-mode .micro-course-note {
                background:#151e2e;
                border-color:#263043;
                color:#cbd5e1;
            }

            body.dark-mode .micro-objectives {
                background:#12203a;
                border-color:#294a7a;
            }

            body.dark-mode .micro-objectives li,
            body.dark-mode .micro-prose p,
            body.dark-mode .micro-practice-preview p,
            body.dark-mode .micro-practice-solution li {
                color:#cbd5e1;
            }

            body.dark-mode .micro-table-wrap,
            body.dark-mode .micro-table th,
            body.dark-mode .micro-table td,
            body.dark-mode .micro-practice-card {
                border-color:#263043;
            }

            body.dark-mode .micro-table th {
                background:#172033;
                color:#e2e8f0;
            }

            body.dark-mode .micro-table td {
                color:#aab4c5;
            }

            body.dark-mode .micro-memory-box {
                background:#21193d;
                border-color:#4c3b75;
            }

            body.dark-mode .micro-memory-box h3,
            body.dark-mode .micro-memory-item {
                color:#d8b4fe;
            }

            body.dark-mode .micro-exam-trap {
                background:#352111;
                border-color:#7c3d12;
                color:#fed7aa;
            }

            body.dark-mode .micro-practice-preview {
                background:#161b31;
                border-color:#333c74;
            }

            body.dark-mode .micro-practice-card {
                background:#111827;
            }

            body.dark-mode .micro-practice-question {
                color:#f1f5f9;
            }

            body.dark-mode .micro-practice-solution {
                background:#14233d;
                border-color:#28538a;
            }

            body.dark-mode .micro-numeric-input {
                background:#111827;
                color:#f8fafc;
                border-color:#334155;
            }

        `;

        document.head.appendChild(style);
    }

    createStyles();

    // ========================================================================
    // CREATE COURSE + LESSON PAGES
    // ========================================================================

    const microbiologyPage = document.createElement("section");
    microbiologyPage.id = "microbiology-page";
    microbiologyPage.className =
        "course-page microbiology-course-page hidden";

    footer.before(microbiologyPage);

    const microbiologyLessonPage = document.createElement("section");
    microbiologyLessonPage.id = "microbiology-final-lesson-page";
    microbiologyLessonPage.className = "lesson-page hidden";

    footer.before(microbiologyLessonPage);

    // ========================================================================
    // COURSE PAGE
    // ========================================================================

    function topicCardHTML(item) {

        const storage = storageFor(item.id);
        const mastered = getNumber(storage.score) >= PASS_SCORE;

        return `
            <article
                class="topic-card microbiology-topic-card"
                data-micro-topic="${item.id}"
            >
                <div class="topic-status">
                    ${mastered ? "✓" : item.number}
                </div>

                <div class="topic-information">

                    <h3>${item.title}</h3>

                    <p>${item.description}</p>

                    <div class="topic-tags">
                        ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
                    </div>

                    <div class="micro-topic-stat-row">

                        <span class="micro-topic-stat">
                            📖 ${item.sections.length} lesson sections
                        </span>

                        <span class="micro-topic-stat">
                            🧠 ${item.facts.length} key concepts
                        </span>

                        <span class="micro-topic-stat">
                            🔬 ${item.practice.length} practice drills
                        </span>

                        <span class="micro-topic-stat">
                            ❓ ${buildQuestionBank(item).length} question-bank items
                        </span>

                    </div>

                </div>

                <button class="topic-button">
                    Start →
                </button>

            </article>
        `;
    }

    function renderCoursePage() {

        const modulesHTML = MODULES.map(function (module) {

            const topics = MICRO_TOPICS.filter(
                item => item.module === module.number
            );

            return `
                <div class="module-section">

                    <div class="module-heading">

                        <span class="module-number">
                            ${String(module.number).padStart(2, "0")}
                        </span>

                        <div>
                            <p class="section-label">
                                MODULE ${module.number}
                            </p>

                            <h2>${module.title}</h2>
                        </div>

                    </div>

                    <div class="topic-list">
                        ${topics.map(topicCardHTML).join("")}
                    </div>

                </div>
            `;
        }).join("");

        microbiologyPage.innerHTML = `

            <div class="course-page-header">

                <button
                    id="micro-back-dashboard"
                    class="back-button"
                >
                    ← Dashboard
                </button>

                <div class="course-page-title">

                    <div class="course-page-icon">
                        🦠
                    </div>

                    <div>

                        <p class="section-label">
                            EXPANDED FULL COURSE
                        </p>

                        <h1>
                            Microbiology for Nursing & Health Sciences
                        </h1>

                        <p>
                            ${TOPIC_COUNT} detailed topics covering laboratory microbiology,
                            bacterial structure, growth, genetics, antimicrobial therapy,
                            immunity, major pathogens, virology, fungi, parasites,
                            diagnostics, epidemiology, isolation and healthcare-associated infection.
                        </p>

                    </div>

                </div>

            </div>

            <div class="course-main-progress">

                <div>
                    <p>Course Mastery</p>

                    <h2>
                        <span id="micro-course-progress">0</span>%
                    </h2>
                </div>

                <div class="course-progress-large">
                    <div
                        id="micro-course-progress-bar"
                        class="course-progress-large-fill"
                    ></div>
                </div>

            </div>

            <div class="micro-course-note">

                <strong>Mastery system:</strong>

                Read the full lesson, complete Quick Review,
                complete the Practice Lab and then earn at least
                ${PASS_SCORE}% on the randomized topic quiz.

                Missed quiz questions are automatically added to Weak Areas.

            </div>

            ${modulesHTML}

            <div class="final-practice-card">

                <div>

                    <p class="section-label">
                        COMPREHENSIVE REVIEW
                    </p>

                    <h2>
                        Microbiology Mastery Center
                    </h2>

                    <p>
                        Practice missed concepts, mix questions from the entire course,
                        or complete a ${FINAL_EXAM_LENGTH}-question comprehensive exam.
                    </p>

                </div>

                <div class="final-practice-actions">

                    <button id="micro-weak-button">
                        🎯 Weak Areas
                    </button>

                    <button id="micro-practice-button">
                        🧫 Mixed Practice
                    </button>

                    <button id="micro-exam-button">
                        🏆 Final Mastery Exam
                    </button>

                </div>

            </div>
        `;

        document
            .getElementById("micro-back-dashboard")
            .addEventListener("click", showDashboard);

        document
            .querySelectorAll(".microbiology-topic-card")
            .forEach(function (card) {

                card.addEventListener("click", function () {
                    showTopic(card.dataset.microTopic);
                });

                const button = card.querySelector(".topic-button");

                button.addEventListener("click", function (event) {
                    event.stopPropagation();
                    showTopic(card.dataset.microTopic);
                });
            });

        document
            .getElementById("micro-weak-button")
            .addEventListener("click", startWeakPractice);

        document
            .getElementById("micro-practice-button")
            .addEventListener("click", startMixedPractice);

        document
            .getElementById("micro-exam-button")
            .addEventListener("click", startFinalExam);
    }

    renderCoursePage();

    // ========================================================================
    // NAVIGATION
    // ========================================================================

    function hideMainViews() {

        [
            dashboardIntro,
            progressOverview,
            coursesSection,
            weakAreasSection,
            footer
        ].forEach(function (element) {

            if (element) {
                element.classList.add("hidden");
            }
        });

        document
            .querySelectorAll(".course-page, .lesson-page")
            .forEach(page => page.classList.add("hidden"));

        closeModal();
    }

    function showMicrobiologyCourse() {

        hideMainViews();

        microbiologyPage.classList.remove("hidden");

        updateProgress();

        scrollTopSmooth();
    }

    function showDashboard() {

        document
            .querySelectorAll(".course-page, .lesson-page")
            .forEach(page => page.classList.add("hidden"));

        [
            dashboardIntro,
            progressOverview,
            coursesSection,
            weakAreasSection,
            footer
        ].forEach(function (element) {

            if (element) {
                element.classList.remove("hidden");
            }
        });

        closeModal();

        updateProgress();
        updateSharedDashboard();

        scrollTopSmooth();
    }

    // Capture course card before old Coming Soon handler.
    document.addEventListener(
        "click",
        function (event) {

            const card = event.target.closest(
                '.course-card[data-course="microbiology"]'
            );

            if (!card) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            showMicrobiologyCourse();
        },
        true
    );

    // ========================================================================
    // RENDER HELPERS
    // ========================================================================

    function renderParagraphs(paragraphs) {

        return `
            <div class="micro-prose">
                ${paragraphs.map(
                    paragraph => `<p>${paragraph}</p>`
                ).join("")}
            </div>
        `;
    }

    function renderFacts(facts) {

        return `
            <div class="definition-grid">

                ${facts.map(function (fact) {
                    return `
                        <div class="definition-card">
                            <h3>${fact[0]}</h3>
                            <p>${fact[1]}</p>
                        </div>
                    `;
                }).join("")}

            </div>
        `;
    }

    function renderTable(table) {

        if (!table || !table.length) {
            return "";
        }

        const [headers, ...rows] = table;

        return `
            <div class="micro-table-wrap">

                <table class="micro-table">

                    <thead>
                        <tr>
                            ${headers.map(
                                header => `<th>${header}</th>`
                            ).join("")}
                        </tr>
                    </thead>

                    <tbody>
                        ${rows.map(function (row) {
                            return `
                                <tr>
                                    ${row.map(
                                        cell => `<td>${cell}</td>`
                                    ).join("")}
                                </tr>
                            `;
                        }).join("")}
                    </tbody>

                </table>

            </div>
        `;
    }

    function renderChecklist(items) {

        return `
            <div class="summary-checklist">
                ${items.map(
                    item => `<div>✓ ${item}</div>`
                ).join("")}
            </div>
        `;
    }

    function renderClinical(clinical) {

        return `
            <div class="clinical-case">

                <div class="clinical-case-header">

                    <span>🩺</span>

                    <div>

                        <p>
                            CLINICAL APPLICATION
                        </p>

                        <h3>
                            ${clinical.title}
                        </h3>

                    </div>

                </div>

                <p>
                    ${clinical.scenario}
                </p>

                <div class="clinical-question">

                    <strong>
                        Microbiology Connection
                    </strong>

                    <p class="clinical-answer">
                        ${clinical.connection}
                    </p>

                </div>

            </div>
        `;
    }

    function renderMemory(memory) {

        return `
            <div class="micro-memory-box">

                <h3>
                    🧠 Memory Tricks
                </h3>

                ${memory.map(
                    item => `
                        <div class="micro-memory-item">
                            ${item}
                        </div>
                    `
                ).join("")}

            </div>
        `;
    }

    function sectionHTML(item, part, index) {

        return `
            <section
                id="micro-detail-${item.id}-${index}"
                class="lesson-section"
            >

                <div class="lesson-section-number">
                    ${String(index + 3).padStart(2, "0")}
                </div>

                <div class="lesson-section-content">

                    <p class="lesson-small-label">
                        ${part.label}
                    </p>

                    <h2>
                        ${part.title}
                    </h2>

                    ${renderParagraphs(part.paragraphs || [])}

                    ${renderTable(part.table)}

                </div>

            </section>
        `;
    }

    // ========================================================================
    // LESSON STATE
    // ========================================================================

    let currentTopic = null;
    let lessonObserver = null;

    function showTopic(topicId) {

        const item = TOPIC_MAP[topicId];

        if (!item) {
            return;
        }

        currentTopic = item;

        hideMainViews();

        renderLesson(item);

        microbiologyLessonPage.classList.remove("hidden");

        updateLessonProgress(item);
        observeLesson(item);

        scrollTopSmooth();
    }

    function renderLesson(item) {

        const navigation = item.sections.map(function (part, index) {
            return `
                <a href="#micro-detail-${item.id}-${index}">
                    ${part.label}
                </a>
            `;
        }).join("");

        microbiologyLessonPage.innerHTML = `

            <div class="lesson-top-bar">

                <button
                    id="micro-back-course"
                    class="back-button"
                >
                    ← Microbiology
                </button>

                <div class="lesson-progress-text">

                    <span>
                        Topic ${item.number} of ${TOPIC_COUNT}
                    </span>

                    <span>
                        ${item.title}
                    </span>

                </div>

            </div>

            <div class="lesson-hero">

                <div class="lesson-hero-content">

                    <p class="section-label">
                        MICROBIOLOGY FOR NURSING
                    </p>

                    <h1>
                        ${item.title}
                    </h1>

                    <p class="lesson-description">
                        ${item.description}
                    </p>

                    <div class="lesson-meta">

                        <span>
                            📖 ${item.sections.length} Teaching Sections
                        </span>

                        <span>
                            🎯 ${item.objectives.length} Objectives
                        </span>

                        <span>
                            🧠 ${item.facts.length} Core Concepts
                        </span>

                        <span>
                            🔬 Practice Lab
                        </span>

                        <span>
                            🩺 Clinical Application
                        </span>

                        <span>
                            ❓ Applied Quiz
                        </span>

                    </div>

                </div>

                <div class="lesson-hero-number">
                    ${String(item.number).padStart(2, "0")}
                </div>

            </div>

            <nav class="lesson-navigation">

                <a href="#micro-overview">
                    Objectives
                </a>

                <a href="#micro-concepts">
                    Terminology
                </a>

                ${navigation}

                <a href="#micro-clinical">
                    Clinical
                </a>

                <a href="#micro-memory">
                    Memory
                </a>

                <a href="#micro-traps">
                    Exam Traps
                </a>

                <a href="#micro-summary">
                    Summary
                </a>

            </nav>

            <div class="lesson-layout">

                <article class="lesson-content">

                    <section
                        id="micro-overview"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            01
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                LEARNING OBJECTIVES
                            </p>

                            <h2>
                                What You Need to Master
                            </h2>

                            ${renderParagraphs([
                                item.description,
                                "Focus on understanding mechanisms rather than memorizing disconnected lists. For every organism or process, connect structure, function, transmission, laboratory identification and clinical disease."
                            ])}

                            <div class="micro-objectives">

                                <h3>
                                    🎯 Learning Objectives
                                </h3>

                                <ul>
                                    ${item.objectives.map(
                                        objective => `<li>${objective}</li>`
                                    ).join("")}
                                </ul>

                            </div>

                        </div>

                    </section>

                    <section
                        id="micro-concepts"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            02
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                ESSENTIAL TERMINOLOGY
                            </p>

                            <h2>
                                Core Concepts
                            </h2>

                            ${renderParagraphs([
                                "Use these terms as building blocks. Each definition should connect to the larger mechanism explained in the lesson."
                            ])}

                            ${renderFacts(item.facts)}

                        </div>

                    </section>

                    ${item.sections.map(
                        (part, index) => sectionHTML(item, part, index)
                    ).join("")}

                    <section
                        id="micro-clinical"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            ${String(item.sections.length + 3).padStart(2, "0")}
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                CLINICAL APPLICATION
                            </p>

                            <h2>
                                Connect the Science to Patient Care
                            </h2>

                            ${renderClinical(item.clinical)}

                            <div class="micro-practice-preview">

                                <h3>
                                    🔬 Practice Lab
                                </h3>

                                <p>
                                    This topic includes ${item.practice.length}
                                    guided laboratory or clinical reasoning drills.
                                    Try each one before revealing the explanation.
                                </p>

                                <button
                                    id="micro-inline-practice"
                                    class="secondary-lesson-button"
                                >
                                    Open Practice Lab →
                                </button>

                            </div>

                        </div>

                    </section>

                    <section
                        id="micro-memory"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            ${String(item.sections.length + 4).padStart(2, "0")}
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                MEMORY SYSTEM
                            </p>

                            <h2>
                                Remember the Confusing Parts
                            </h2>

                            ${renderMemory(item.memory)}

                        </div>

                    </section>

                    <section
                        id="micro-traps"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            ${String(item.sections.length + 5).padStart(2, "0")}
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                COMMON EXAM TRAPS
                            </p>

                            <h2>
                                Do Not Mix These Up
                            </h2>

                            <div class="micro-exam-traps">

                                ${item.traps.map(
                                    trap => `
                                        <div class="micro-exam-trap">
                                            <strong>⚠️ Watch out:</strong>
                                            ${trap}
                                        </div>
                                    `
                                ).join("")}

                            </div>

                        </div>

                    </section>

                    <section
                        id="micro-summary"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            ${String(item.sections.length + 6).padStart(2, "0")}
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                HIGH-YIELD REVIEW
                            </p>

                            <h2>
                                Topic Summary
                            </h2>

                            ${renderChecklist(item.summary)}

                            <div class="mastery-reminder">

                                <span>🎯</span>

                                <div>

                                    <strong>
                                        Mastery Requirement
                                    </strong>

                                    <p>
                                        Complete Quick Review and Practice Lab,
                                        then earn at least ${PASS_SCORE}% on the randomized mastery quiz.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                    <section class="lesson-actions">

                        <div>

                            <p class="section-label">
                                RETRIEVAL + APPLICATION
                            </p>

                            <h2>
                                Master ${item.title}
                            </h2>

                            <p>
                                Review from memory, apply the concepts to clinical
                                and laboratory problems, then complete the randomized quiz.
                            </p>

                        </div>

                        <div class="lesson-action-buttons">

                            <button
                                id="micro-review-button"
                                class="secondary-lesson-button"
                            >
                                🧠 Quick Review
                            </button>

                            <button
                                id="micro-practice-lab-button"
                                class="secondary-lesson-button"
                            >
                                🔬 Practice Lab
                            </button>

                            <button
                                id="micro-topic-quiz-button"
                                class="primary-lesson-button"
                            >
                                🎯 Mastery Quiz
                            </button>

                        </div>

                    </section>

                </article>

                <aside class="lesson-sidebar">

                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            TOPIC PROGRESS
                        </p>

                        <div class="sidebar-progress-number">
                            <span id="micro-topic-progress">0</span>%
                        </div>

                        <div class="sidebar-progress-bar">
                            <div
                                id="micro-topic-progress-fill"
                                class="sidebar-progress-fill"
                            ></div>
                        </div>

                    </div>

                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            MASTERY CHECKLIST
                        </p>

                        <div
                            id="micro-topic-checklist"
                            class="sidebar-checklist"
                        >

                            <div>
                                <span>○</span>
                                Read complete lesson
                            </div>

                            <div>
                                <span>○</span>
                                Quick Review
                            </div>

                            <div>
                                <span>○</span>
                                Practice Lab
                            </div>

                            <div>
                                <span>○</span>
                                Pass mastery quiz
                            </div>

                        </div>

                    </div>

                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            BEST QUIZ SCORE
                        </p>

                        <div class="sidebar-progress-number">
                            <span id="micro-best-score">0</span>%
                        </div>

                    </div>

                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            LESSON DEPTH
                        </p>

                        <p>
                            ${item.sections.length} teaching sections
                        </p>

                        <p>
                            ${item.facts.length} core terms
                        </p>

                        <p>
                            ${item.practice.length} practice drills
                        </p>

                        <p>
                            ${buildQuestionBank(item).length} bank questions
                        </p>

                    </div>

                    <div class="sidebar-card sidebar-tip">

                        <span>💡</span>

                        <div>

                            <strong>
                                Microbiology Strategy
                            </strong>

                            <p>
                                For pathogens, learn:
                                Gram/type → reservoir → transmission →
                                virulence → disease → diagnostic clue → prevention.
                            </p>

                        </div>

                    </div>

                </aside>

            </div>
        `;

        document
            .getElementById("micro-back-course")
            .addEventListener("click", showMicrobiologyCourse);

        document
            .getElementById("micro-review-button")
            .addEventListener("click", function () {
                startQuickReview(item);
            });

        document
            .getElementById("micro-practice-lab-button")
            .addEventListener("click", function () {
                startPracticeLab(item);
            });

        document
            .getElementById("micro-inline-practice")
            .addEventListener("click", function () {
                startPracticeLab(item);
            });

        document
            .getElementById("micro-topic-quiz-button")
            .addEventListener("click", function () {
                startTopicQuiz(item);
            });
    }

    // ========================================================================
    // LESSON READ TRACKING
    // ========================================================================

    function observeLesson(item) {

        if (lessonObserver) {
            lessonObserver.disconnect();
        }

        const summary = document.getElementById("micro-summary");

        if (!summary || !("IntersectionObserver" in window)) {
            return;
        }

        lessonObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting &&
                        !microbiologyLessonPage.classList.contains("hidden")
                    ) {

                        localStorage.setItem(
                            storageFor(item.id).read,
                            "true"
                        );

                        updateLessonProgress(item);
                        updateProgress();
                    }
                });
            },
            {
                threshold: 0.25
            }
        );

        lessonObserver.observe(summary);
    }

    // ========================================================================
    // PROGRESS
    // ========================================================================

    function calculateTopicProgress(item) {

        const storage = storageFor(item.id);

        let value = 0;

        if (getBoolean(storage.read)) {
            value += 20;
        }

        if (getBoolean(storage.review)) {
            value += 20;
        }

        if (getBoolean(storage.practice)) {
            value += 20;
        }

        if (getBoolean(storage.passed)) {
            value += 40;
        }

        return value;
    }

    function isMastered(item) {
        return getNumber(storageFor(item.id).score) >= PASS_SCORE;
    }

    function setChecklist(items, index, complete) {

        if (!items[index]) {
            return;
        }

        const icon = items[index].querySelector("span");

        if (!icon) {
            return;
        }

        icon.textContent = complete ? "✓" : "○";
        icon.style.color = complete ? "#16a34a" : "";

        items[index].style.fontWeight =
            complete ? "700" : "";
    }

    function updateLessonProgress(item) {

        const storage = storageFor(item.id);
        const progress = calculateTopicProgress(item);

        const text = document.getElementById("micro-topic-progress");
        const fill = document.getElementById("micro-topic-progress-fill");
        const best = document.getElementById("micro-best-score");

        if (text) {
            text.textContent = progress;
        }

        if (fill) {
            fill.style.width = `${progress}%`;
        }

        if (best) {
            best.textContent = getNumber(storage.score);
        }

        const items = document.querySelectorAll(
            "#micro-topic-checklist > div"
        );

        setChecklist(items, 0, getBoolean(storage.read));
        setChecklist(items, 1, getBoolean(storage.review));
        setChecklist(items, 2, getBoolean(storage.practice));
        setChecklist(items, 3, getBoolean(storage.passed));
    }

    function countMastered() {
        return MICRO_TOPICS.filter(isMastered).length;
    }

    function getCoursePercent() {
        return Math.round(
            (countMastered() / TOPIC_COUNT) * 100
        );
    }

    function updateProgress() {

        const percent = getCoursePercent();

        const courseText = document.getElementById(
            "micro-course-progress"
        );

        const courseBar = document.getElementById(
            "micro-course-progress-bar"
        );

        if (courseText) {
            courseText.textContent = percent;
        }

        if (courseBar) {
            courseBar.style.width = `${percent}%`;
        }

        document
            .querySelectorAll(".microbiology-topic-card")
            .forEach(function (card) {

                const item = TOPIC_MAP[card.dataset.microTopic];
                const status = card.querySelector(".topic-status");
                const button = card.querySelector(".topic-button");

                const mastered = isMastered(item);
                const progress = calculateTopicProgress(item);

                if (status) {
                    status.textContent =
                        mastered ? "✓" : item.number;
                }

                if (button) {
                    button.textContent =
                        mastered
                            ? "Review →"
                            : progress > 0
                                ? "Continue →"
                                : "Start →";
                }
            });

        const spans = microbiologyCard.querySelectorAll(
            ".course-progress span"
        );

        if (spans.length > 1) {
            spans[1].textContent = `${percent}%`;
        }

        const cardFill = microbiologyCard.querySelector(
            ".course-progress-fill"
        );

        if (cardFill) {
            cardFill.style.width = `${percent}%`;
        }

        if (
            currentTopic &&
            !microbiologyLessonPage.classList.contains("hidden")
        ) {
            updateLessonProgress(currentTopic);
        }

        if (questionsAnswered) {
            questionsAnswered.textContent =
                getNumber(SHARED_QUESTIONS_KEY);
        }

        updateSharedDashboard();
    }

    // ========================================================================
    // SHARED DASHBOARD
    // ========================================================================

    function readCoursePercent(courseId) {

        const card = document.querySelector(
            `.course-card[data-course="${courseId}"]`
        );

        if (!card) {
            return 0;
        }

        const spans = card.querySelectorAll(
            ".course-progress span"
        );

        if (spans.length < 2) {
            return 0;
        }

        return (
            Number(
                spans[1].textContent.replace("%", "")
            ) || 0
        );
    }

    function updateSharedDashboard() {

        const courseIds = [
            "anatomy1",
            "anatomy2",
            "chemistry",
            "microbiology"
        ];

        const values = courseIds.map(readCoursePercent);

        const average = Math.round(
            values.reduce(
                (total, value) => total + value,
                0
            ) / values.length
        );

        if (overallProgress) {
            overallProgress.textContent = average;
        }

        if (overallProgressBar) {
            overallProgressBar.style.width = `${average}%`;
        }

        if (topicsMastered) {

            const mastered = Array.from(
                document.querySelectorAll(
                    ".course-page .topic-status"
                )
            ).filter(function (status) {
                return status.textContent.trim() === "✓";
            }).length;

            topicsMastered.textContent = mastered;
        }

        if (questionsAnswered) {
            questionsAnswered.textContent =
                getNumber(SHARED_QUESTIONS_KEY);
        }
    }

    document
        .querySelectorAll(
            '.course-card[data-course="anatomy1"],' +
            '.course-card[data-course="anatomy2"],' +
            '.course-card[data-course="chemistry"],' +
            '.course-card[data-course="microbiology"]'
        )
        .forEach(function (card) {

            new MutationObserver(function () {

                setTimeout(
                    updateSharedDashboard,
                    0
                );

            }).observe(
                card,
                {
                    subtree: true,
                    childList: true,
                    characterData: true
                }
            );
        });

    // ========================================================================
    // MODAL
    // ========================================================================

    const overlay = document.createElement("div");
    overlay.id = "microbiology-study-overlay";
    overlay.className = "study-overlay hidden";

    overlay.innerHTML = `

        <div class="study-modal">

            <div class="study-modal-header">

                <div>

                    <p
                        id="micro-modal-label"
                        class="study-modal-label"
                    ></p>

                    <h2 id="micro-modal-title"></h2>

                </div>

                <button
                    id="micro-modal-close"
                    class="study-modal-close"
                >
                    ×
                </button>

            </div>

            <div id="micro-modal-content"></div>

        </div>
    `;

    document.body.appendChild(overlay);

    const modalLabel = document.getElementById(
        "micro-modal-label"
    );

    const modalTitle = document.getElementById(
        "micro-modal-title"
    );

    const modalContent = document.getElementById(
        "micro-modal-content"
    );

    function openModal() {

        overlay.classList.remove("hidden");

        document.body.style.overflow = "hidden";
    }

    function closeModal() {

        overlay.classList.add("hidden");

        document.body.style.overflow = "";
    }

    document
        .getElementById("micro-modal-close")
        .addEventListener("click", closeModal);

    overlay.addEventListener("click", function (event) {

        if (event.target === overlay) {
            closeModal();
        }
    });

    // ========================================================================
    // QUICK REVIEW
    // ========================================================================

    let reviewTopic = null;
    let reviewOrder = [];
    let reviewIndex = 0;
    let reviewRevealed = false;

    function startQuickReview(item) {

        reviewTopic = item;

        reviewOrder = shuffle(
            item.facts.map(
                (fact, index) => index
            )
        );

        reviewIndex = 0;
        reviewRevealed = false;

        modalLabel.textContent =
            `MICROBIOLOGY • TOPIC ${item.number}`;

        modalTitle.textContent =
            "Quick Review";

        openModal();
        renderReview();
    }

    function renderReview() {

        const item = reviewTopic;
        const factIndex = reviewOrder[reviewIndex];
        const fact = item.facts[factIndex];

        const storage = storageFor(item.id);
        const marked = getArray(storage.marked);
        const isMarked = marked.includes(factIndex);

        const percentage = Math.round(
            ((reviewIndex + 1) / reviewOrder.length) * 100
        );

        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Card ${reviewIndex + 1}
                        of ${reviewOrder.length}
                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    ></div>

                </div>

            </div>

            <div class="review-body">

                <div class="review-card">

                    ${
                        reviewRevealed
                            ? `
                                <p class="review-type">
                                    ANSWER
                                </p>

                                <h3 class="review-question">
                                    ${fact[0]}
                                </h3>

                                <p class="review-answer">
                                    ${fact[1]}
                                </p>

                                <p class="review-hint">
                                    Now connect this term to one
                                    organism, laboratory test,
                                    mechanism or clinical example.
                                </p>
                            `
                            : `
                                <p class="review-type">
                                    ACTIVE RECALL
                                </p>

                                <h3 class="review-question">
                                    Explain: "${fact[0]}"
                                </h3>

                                <p class="review-hint">
                                    Answer from memory before revealing it.
                                </p>
                            `
                    }

                </div>

                <div class="study-actions">

                    <div class="study-actions-group">

                        <button
                            id="micro-review-prev"
                            class="study-button"
                            ${reviewIndex === 0 ? "disabled" : ""}
                        >
                            ← Previous
                        </button>

                        <button
                            id="micro-review-mark"
                            class="study-button ${isMarked ? "marked" : ""}"
                        >
                            ${isMarked ? "★ Review Later" : "☆ Review Later"}
                        </button>

                    </div>

                    <div class="study-actions-group">

                        ${
                            reviewRevealed
                                ? `
                                    <button
                                        id="micro-review-next"
                                        class="study-button primary"
                                    >
                                        ${
                                            reviewIndex === reviewOrder.length - 1
                                                ? "Finish Review ✓"
                                                : "Next →"
                                        }
                                    </button>
                                `
                                : `
                                    <button
                                        id="micro-review-reveal"
                                        class="study-button primary"
                                    >
                                        Reveal Answer
                                    </button>
                                `
                        }

                    </div>

                </div>

            </div>
        `;

        const previous = document.getElementById(
            "micro-review-prev"
        );

        const mark = document.getElementById(
            "micro-review-mark"
        );

        const reveal = document.getElementById(
            "micro-review-reveal"
        );

        const next = document.getElementById(
            "micro-review-next"
        );

        if (previous) {

            previous.addEventListener("click", function () {

                if (reviewIndex > 0) {
                    reviewIndex--;
                    reviewRevealed = false;
                    renderReview();
                }
            });
        }

        if (mark) {

            mark.addEventListener("click", function () {

                const array = getArray(storage.marked);
                const position = array.indexOf(factIndex);

                if (position >= 0) {
                    array.splice(position, 1);
                } else {
                    array.push(factIndex);
                }

                saveArray(storage.marked, array);

                renderReview();
            });
        }

        if (reveal) {

            reveal.addEventListener("click", function () {
                reviewRevealed = true;
                renderReview();
            });
        }

        if (next) {

            next.addEventListener("click", function () {

                if (reviewIndex < reviewOrder.length - 1) {

                    reviewIndex++;
                    reviewRevealed = false;
                    renderReview();

                } else {

                    localStorage.setItem(
                        storage.review,
                        "true"
                    );

                    updateProgress();
                    updateLessonProgress(item);

                    modalContent.innerHTML = `

                        <div class="results">

                            <div class="results-icon">
                                🧠
                            </div>

                            <p class="study-modal-label">
                                REVIEW COMPLETE
                            </p>

                            <h2>
                                ${item.title}
                            </h2>

                            <p class="results-message">
                                You completed all
                                ${item.facts.length}
                                active-recall cards.
                            </p>

                            <button
                                id="micro-review-done"
                                class="study-button primary"
                            >
                                Return to Lesson
                            </button>

                        </div>
                    `;

                    document
                        .getElementById("micro-review-done")
                        .addEventListener("click", closeModal);
                }
            });
        }
    }

    // ========================================================================
    // PRACTICE LAB
    // ========================================================================

    let practiceTopic = null;
    let practiceOrder = [];
    let practiceIndex = 0;
    let practiceRevealed = false;

    function startPracticeLab(item) {

        practiceTopic = item;

        practiceOrder = shuffle(
            item.practice.map(
                (problem, index) => index
            )
        );

        practiceIndex = 0;
        practiceRevealed = false;

        modalLabel.textContent =
            `MICROBIOLOGY • TOPIC ${item.number}`;

        modalTitle.textContent =
            "Practice Lab";

        openModal();

        renderPracticeLab();
    }

    function renderPracticeLab() {

        const item = practiceTopic;
        const problem = item.practice[
            practiceOrder[practiceIndex]
        ];

        const prompt = problem[0];
        const answer = problem[1];

        const steps = Array.isArray(problem[2])
            ? problem[2]
            : [problem[2]];

        const percentage = Math.round(
            ((practiceIndex + 1) / practiceOrder.length) * 100
        );

        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Drill ${practiceIndex + 1}
                        of ${practiceOrder.length}
                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    ></div>

                </div>

            </div>

            <div class="micro-practice-card">

                <p class="micro-practice-label">
                    CLINICAL / LAB DRILL
                </p>

                <div class="micro-practice-question">
                    ${prompt}
                </div>

                ${
                    practiceRevealed
                        ? `
                            <div class="micro-practice-solution">

                                <strong>
                                    Explanation
                                </strong>

                                <ol>
                                    ${steps.map(
                                        step => `<li>${step}</li>`
                                    ).join("")}
                                </ol>

                                <div class="micro-practice-answer">
                                    Answer: ${answer}
                                </div>

                            </div>
                        `
                        : `
                            <p style="color:#667085;line-height:1.65">
                                Think through the problem before revealing the answer.
                                Use the organism structure, mechanism, transmission,
                                laboratory clue and clinical context.
                            </p>
                        `
                }

            </div>

            <div class="study-actions">

                <div class="study-actions-group">

                    <button
                        id="micro-practice-prev"
                        class="study-button"
                        ${practiceIndex === 0 ? "disabled" : ""}
                    >
                        ← Previous
                    </button>

                </div>

                <div class="study-actions-group">

                    ${
                        practiceRevealed
                            ? `
                                <button
                                    id="micro-practice-next"
                                    class="study-button primary"
                                >
                                    ${
                                        practiceIndex === practiceOrder.length - 1
                                            ? "Complete Practice ✓"
                                            : "Next Drill →"
                                    }
                                </button>
                            `
                            : `
                                <button
                                    id="micro-practice-reveal"
                                    class="study-button primary"
                                >
                                    Show Explanation
                                </button>
                            `
                    }

                </div>

            </div>
        `;

        const previous = document.getElementById(
            "micro-practice-prev"
        );

        const reveal = document.getElementById(
            "micro-practice-reveal"
        );

        const next = document.getElementById(
            "micro-practice-next"
        );

        if (previous) {

            previous.addEventListener("click", function () {

                if (practiceIndex > 0) {
                    practiceIndex--;
                    practiceRevealed = false;
                    renderPracticeLab();
                }
            });
        }

        if (reveal) {

            reveal.addEventListener("click", function () {
                practiceRevealed = true;
                renderPracticeLab();
            });
        }

        if (next) {

            next.addEventListener("click", function () {

                if (practiceIndex < practiceOrder.length - 1) {

                    practiceIndex++;
                    practiceRevealed = false;
                    renderPracticeLab();

                } else {

                    localStorage.setItem(
                        storageFor(item.id).practice,
                        "true"
                    );

                    updateProgress();
                    updateLessonProgress(item);

                    modalContent.innerHTML = `

                        <div class="results">

                            <div class="results-icon">
                                🔬
                            </div>

                            <p class="study-modal-label">
                                PRACTICE COMPLETE
                            </p>

                            <h2>
                                ${item.title}
                            </h2>

                            <p class="results-message">
                                You completed all
                                ${item.practice.length}
                                laboratory and clinical drills.
                            </p>

                            <div
                                class="study-actions-group"
                                style="justify-content:center"
                            >

                                <button
                                    id="micro-practice-quiz-now"
                                    class="study-button primary"
                                >
                                    Start Mastery Quiz →
                                </button>

                                <button
                                    id="micro-practice-done"
                                    class="study-button"
                                >
                                    Return to Lesson
                                </button>

                            </div>

                        </div>
                    `;

                    document
                        .getElementById("micro-practice-quiz-now")
                        .addEventListener("click", function () {
                            startTopicQuiz(item);
                        });

                    document
                        .getElementById("micro-practice-done")
                        .addEventListener("click", closeModal);
                }
            });
        }
    }

    // ========================================================================
    // QUESTION BANK
    // ========================================================================

    function buildTermQuestions(item) {

        const questions = [];

        item.facts.forEach(function (fact, index) {

            const otherIndices = item.facts
                .map((x, i) => i)
                .filter(i => i !== index);

            const distractors = shuffle(otherIndices).slice(0, 3);

            let raw = [
                {
                    text: fact[1],
                    correct: true
                },
                ...distractors.map(function (i) {
                    return {
                        text: item.facts[i][1],
                        correct: false
                    };
                })
            ];

            raw = shuffle(raw);

            questions.push({
                id: `${item.id}_def_${index}`,
                type: "mcq",
                q: `Which statement best describes <strong>${fact[0]}</strong>?`,
                choices: raw.map(option => option.text),
                answer: raw.findIndex(option => option.correct),
                explanation: `<strong>${fact[0]}:</strong> ${fact[1]}`,
                topicId: item.id
            });

            raw = [
                {
                    text: fact[0],
                    correct: true
                },
                ...distractors.map(function (i) {
                    return {
                        text: item.facts[i][0],
                        correct: false
                    };
                })
            ];

            raw = shuffle(raw);

            questions.push({
                id: `${item.id}_term_${index}`,
                type: "mcq",
                q: `Which term matches this definition?<br><br><strong>${fact[1]}</strong>`,
                choices: raw.map(option => option.text),
                answer: raw.findIndex(option => option.correct),
                explanation: `The correct term is <strong>${fact[0]}</strong>.`,
                topicId: item.id
            });
        });

        return questions;
    }

    function buildQuestionBank(item) {

        const custom = (item.questions || []).map(function (question) {
            return {
                ...question,
                topicId: item.id
            };
        });

        return [
            ...custom,
            ...buildTermQuestions(item)
        ];
    }

    function selectTopicQuestions(item) {

        const custom = shuffle(
            (item.questions || []).map(function (question) {
                return {
                    ...question,
                    topicId: item.id
                };
            })
        );

        const termQuestions = shuffle(
            buildTermQuestions(item)
        );

        // Use as many applied questions as possible first.
        const customTarget = Math.min(
            custom.length,
            Math.ceil(TOPIC_QUIZ_LENGTH / 2)
        );

        const chosen = custom.slice(
            0,
            customTarget
        );

        const needed =
            TOPIC_QUIZ_LENGTH -
            chosen.length;

        return shuffle([
            ...chosen,
            ...termQuestions.slice(0, needed)
        ]);
    }

    function allQuestions() {

        return MICRO_TOPICS.flatMap(
            item => buildQuestionBank(item)
        );
    }

    function questionById(item, id) {

        return (
            buildQuestionBank(item).find(
                question => question.id === id
            ) || null
        );
    }

    // ========================================================================
    // QUIZ STATE
    // ========================================================================

    let quizQuestions = [];
    let quizIndex = 0;
    let quizCorrect = 0;
    let quizSelected = null;
    let quizNumeric = "";
    let quizChecked = false;
    let quizMode = "topic";
    let quizTopic = null;

    // ========================================================================
    // START QUIZZES
    // ========================================================================

    function startTopicQuiz(item) {

        quizMode = "topic";
        quizTopic = item;
        quizQuestions = selectTopicQuestions(item);

        beginQuiz(
            `MICROBIOLOGY • TOPIC ${item.number}`,
            `${item.title} Mastery Quiz`
        );
    }

    function startMixedPractice() {

        quizMode = "practice";
        quizTopic = null;

        quizQuestions = shuffle(
            allQuestions()
        ).slice(
            0,
            MIXED_PRACTICE_LENGTH
        );

        beginQuiz(
            "MICROBIOLOGY • MIXED PRACTICE",
            "Microbiology Mixed Practice"
        );
    }

    function startFinalExam() {

        quizMode = "final";
        quizTopic = null;

        const guaranteed = MICRO_TOPICS.map(function (item) {

            const custom = (item.questions || []).map(function (question) {
                return {
                    ...question,
                    topicId: item.id
                };
            });

            const bank = custom.length
                ? custom
                : buildTermQuestions(item);

            return shuffle(bank)[0];
        });

        const guaranteedIds = new Set(
            guaranteed.map(
                question => `${question.topicId}|${question.id}`
            )
        );

        const extras = shuffle(
            allQuestions().filter(function (question) {
                return !guaranteedIds.has(
                    `${question.topicId}|${question.id}`
                );
            })
        ).slice(
            0,
            Math.max(
                0,
                FINAL_EXAM_LENGTH - guaranteed.length
            )
        );

        quizQuestions = shuffle([
            ...guaranteed,
            ...extras
        ]).slice(
            0,
            FINAL_EXAM_LENGTH
        );

        beginQuiz(
            "MICROBIOLOGY • COMPREHENSIVE EXAM",
            "Microbiology Final Mastery Exam"
        );
    }

    // ========================================================================
    // WEAK AREAS
    // ========================================================================

    function getWeakQuestions() {

        const weak = [];

        MICRO_TOPICS.forEach(function (item) {

            const ids = getArray(
                storageFor(item.id).missed
            );

            ids.forEach(function (id) {

                const question = questionById(item, id);

                if (question) {
                    weak.push(question);
                }
            });
        });

        return weak;
    }

    function startWeakPractice() {

        const weak = getWeakQuestions();

        if (!weak.length) {

            modalLabel.textContent =
                "MICROBIOLOGY • SMART REVIEW";

            modalTitle.textContent =
                "Weak Areas";

            modalContent.innerHTML = `

                <div class="results">

                    <div class="results-icon">
                        🎯
                    </div>

                    <h2>
                        No Microbiology weak questions yet
                    </h2>

                    <p class="results-message">
                        Questions you miss during quizzes
                        will automatically appear here.
                    </p>

                    <button
                        id="micro-no-weak-close"
                        class="study-button primary"
                    >
                        Got It
                    </button>

                </div>
            `;

            openModal();

            document
                .getElementById("micro-no-weak-close")
                .addEventListener("click", closeModal);

            return;
        }

        quizMode = "weak";
        quizTopic = null;

        quizQuestions = shuffle(
            weak
        ).slice(
            0,
            Math.min(
                25,
                weak.length
            )
        );

        beginQuiz(
            "MICROBIOLOGY • SMART REVIEW",
            "Study My Microbiology Weak Areas"
        );
    }

    // ========================================================================
    // QUIZ
    // ========================================================================

    function beginQuiz(label, title) {

        quizIndex = 0;
        quizCorrect = 0;
        quizSelected = null;
        quizNumeric = "";
        quizChecked = false;

        modalLabel.textContent = label;
        modalTitle.textContent = title;

        openModal();
        renderQuiz();
    }

    function answerReady(question) {

        if (question.type === "numeric") {
            return String(quizNumeric).trim() !== "";
        }

        return quizSelected !== null;
    }

    function numericCorrect(question, value) {

        const entered = Number(
            String(value)
                .replaceAll(",", "")
                .trim()
        );

        if (!Number.isFinite(entered)) {
            return false;
        }

        const tolerance = Number(
            question.tolerance ?? 0
        );

        return (
            Math.abs(
                entered - Number(question.answer)
            ) <= tolerance
        );
    }

    function renderQuiz() {

        const question = quizQuestions[quizIndex];

        if (!question) {
            return;
        }

        const item = TOPIC_MAP[question.topicId];

        const percentage = Math.round(
            ((quizIndex + 1) / quizQuestions.length) * 100
        );

        const letters = ["A", "B", "C", "D", "E"];

        let answerArea = "";

        if (question.type === "numeric") {

            answerArea = `

                <div class="micro-numeric-wrap">

                    <input
                        id="micro-numeric-answer"
                        class="micro-numeric-input"
                        inputmode="decimal"
                        placeholder="Enter your numerical answer"
                        value="${escapeHTML(quizNumeric)}"
                        ${quizChecked ? "disabled" : ""}
                    >

                    ${
                        question.unit
                            ? `
                                <div class="micro-numeric-unit">
                                    Answer unit: ${question.unit}
                                </div>
                            `
                            : ""
                    }

                </div>
            `;

        } else {

            answerArea = `

                <div class="quiz-options">

                    ${question.choices.map(function (choice, index) {

                        let className = "quiz-option";

                        if (quizSelected === index) {
                            className += " selected";
                        }

                        if (quizChecked) {

                            if (index === question.answer) {
                                className += " correct";
                            } else if (index === quizSelected) {
                                className += " incorrect";
                            }
                        }

                        return `
                            <button
                                class="${className}"
                                data-micro-answer="${index}"
                                ${quizChecked ? "disabled" : ""}
                            >

                                <span class="quiz-letter">
                                    ${letters[index] || index + 1}
                                </span>

                                <span>
                                    ${choice}
                                </span>

                            </button>
                        `;

                    }).join("")}

                </div>
            `;
        }

        let feedback = "";

        if (quizChecked) {

            const correct =
                question.type === "numeric"
                    ? numericCorrect(
                        question,
                        quizNumeric
                    )
                    : quizSelected === question.answer;

            feedback = `

                <div
                    class="quiz-feedback ${
                        correct ? "correct" : "incorrect"
                    }"
                >

                    <strong>
                        ${correct ? "✓ Correct" : "✕ Not quite"}
                    </strong>

                    <p>
                        ${question.explanation}
                    </p>

                    ${
                        question.type === "numeric"
                            ? `
                                <p>
                                    <strong>Expected:</strong>
                                    ${question.answer}
                                    ${question.unit || ""}
                                </p>
                            `
                            : ""
                    }

                </div>
            `;
        }

        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Question ${quizIndex + 1}
                        of ${quizQuestions.length}
                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    ></div>

                </div>

            </div>

            <div class="quiz-body">

                <div class="quiz-card">

                    <p class="quiz-type">
                        TOPIC ${item.number}
                        •
                        ${item.title}
                    </p>

                    <h3 class="quiz-question">
                        ${question.q}
                    </h3>

                    ${answerArea}

                    ${feedback}

                </div>

                <div class="study-actions">

                    <div class="study-actions-group">

                        <button
                            id="micro-quiz-exit"
                            class="study-button"
                        >
                            Exit Quiz
                        </button>

                    </div>

                    <div class="study-actions-group">

                        ${
                            quizChecked
                                ? `
                                    <button
                                        id="micro-quiz-next"
                                        class="study-button primary"
                                    >
                                        ${
                                            quizIndex === quizQuestions.length - 1
                                                ? "See Results →"
                                                : "Next Question →"
                                        }
                                    </button>
                                `
                                : `
                                    <button
                                        id="micro-quiz-check"
                                        class="study-button primary"
                                        ${answerReady(question) ? "" : "disabled"}
                                    >
                                        Check Answer
                                    </button>
                                `
                        }

                    </div>

                </div>

            </div>
        `;

        document
            .querySelectorAll("[data-micro-answer]")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    if (quizChecked) {
                        return;
                    }

                    quizSelected = Number(
                        button.dataset.microAnswer
                    );

                    renderQuiz();
                });
            });

        const numericInput = document.getElementById(
            "micro-numeric-answer"
        );

        if (numericInput) {

            numericInput.addEventListener("input", function () {

                quizNumeric = numericInput.value;

                const check = document.getElementById(
                    "micro-quiz-check"
                );

                if (check) {
                    check.disabled =
                        !String(quizNumeric).trim();
                }
            });

            numericInput.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter" &&
                        String(quizNumeric).trim()
                    ) {
                        checkAnswer();
                    }
                }
            );
        }

        const check = document.getElementById(
            "micro-quiz-check"
        );

        const next = document.getElementById(
            "micro-quiz-next"
        );

        const exit = document.getElementById(
            "micro-quiz-exit"
        );

        if (check) {
            check.addEventListener("click", checkAnswer);
        }

        if (next) {

            next.addEventListener("click", function () {

                if (quizIndex < quizQuestions.length - 1) {

                    quizIndex++;
                    quizSelected = null;
                    quizNumeric = "";
                    quizChecked = false;

                    renderQuiz();

                } else {

                    finishQuiz();
                }
            });
        }

        if (exit) {
            exit.addEventListener("click", closeModal);
        }
    }

    // ========================================================================
    // WEAK QUESTION STORAGE
    // ========================================================================

    function addWeak(question) {

        const item = TOPIC_MAP[question.topicId];

        if (!item) {
            return;
        }

        const key = storageFor(item.id).missed;
        const ids = getArray(key);

        if (!ids.includes(question.id)) {
            ids.push(question.id);
        }

        saveArray(key, ids);
    }

    function removeWeak(question) {

        const item = TOPIC_MAP[question.topicId];

        if (!item) {
            return;
        }

        const key = storageFor(item.id).missed;

        saveArray(
            key,
            getArray(key).filter(
                id => id !== question.id
            )
        );
    }

    function checkAnswer() {

        const question = quizQuestions[quizIndex];

        if (
            !question ||
            quizChecked ||
            !answerReady(question)
        ) {
            return;
        }

        const correct =
            question.type === "numeric"
                ? numericCorrect(
                    question,
                    quizNumeric
                )
                : quizSelected === question.answer;

        if (correct) {

            quizCorrect++;
            removeWeak(question);

        } else {

            addWeak(question);
        }

        localStorage.setItem(
            SHARED_QUESTIONS_KEY,
            getNumber(SHARED_QUESTIONS_KEY) + 1
        );

        quizChecked = true;

        renderQuiz();
    }

    // ========================================================================
    // SAVE TOPIC RESULT
    // ========================================================================

    function saveTopicResult(item, score) {

        const storage = storageFor(item.id);

        localStorage.setItem(
            storage.score,
            Math.max(
                score,
                getNumber(storage.score)
            )
        );

        localStorage.setItem(
            storage.attempts,
            getNumber(storage.attempts) + 1
        );

        if (score >= PASS_SCORE) {
            localStorage.setItem(
                storage.passed,
                "true"
            );
        }

        updateLessonProgress(item);
    }

    function finishQuiz() {

        const score = Math.round(
            (quizCorrect / quizQuestions.length) * 100
        );

        if (
            quizMode === "topic" &&
            quizTopic
        ) {
            saveTopicResult(
                quizTopic,
                score
            );
        }

        updateProgress();

        showResults(score);
    }

    // ========================================================================
    // RESULTS
    // ========================================================================

    function showResults(score) {

        const incorrect =
            quizQuestions.length - quizCorrect;

        const passed =
            score >= PASS_SCORE;

        let title = "Practice Complete";
        let message =
            "Missed questions were automatically saved to Microbiology Weak Areas.";
        let icon = "🦠";

        if (quizMode === "topic") {

            title = passed
                ? `${quizTopic.title} Mastered!`
                : "Review and Try Again";

            message = passed
                ? `You reached the ${PASS_SCORE}% mastery requirement.`
                : `You need at least ${PASS_SCORE}% to master this topic. Review the missed concepts and try another randomized quiz.`;

            icon = passed
                ? "🏆"
                : "📚";

        } else if (quizMode === "final") {

            title =
                "Microbiology Final Mastery Exam Complete";

            message =
                `You completed ${quizQuestions.length} questions across the complete Microbiology course.`;

            icon = "🏆";

        } else if (quizMode === "weak") {

            title =
                "Weak-Area Review Complete";

            message =
                "Questions answered correctly were removed from your Microbiology weak-area list.";

            icon = "🎯";
        }

        modalContent.innerHTML = `

            <div class="results">

                <div class="results-icon">
                    ${icon}
                </div>

                <p class="study-modal-label">
                    RESULTS
                </p>

                <h2>
                    ${title}
                </h2>

                <p class="results-message">
                    ${message}
                </p>

                <div class="score-circle">

                    <strong>
                        ${score}%
                    </strong>

                    <span>
                        SCORE
                    </span>

                </div>

                <div class="result-grid">

                    <div class="result-card">

                        <strong>
                            ${quizCorrect}
                        </strong>

                        <span>
                            Correct
                        </span>

                    </div>

                    <div class="result-card">

                        <strong>
                            ${incorrect}
                        </strong>

                        <span>
                            Incorrect
                        </span>

                    </div>

                    <div class="result-card">

                        <strong>
                            ${
                                quizMode === "topic"
                                    ? `${getNumber(
                                        storageFor(
                                            quizTopic.id
                                        ).score
                                    )}%`
                                    : getWeakQuestions().length
                            }
                        </strong>

                        <span>
                            ${
                                quizMode === "topic"
                                    ? "Best Score"
                                    : "Weak Questions"
                            }
                        </span>

                    </div>

                </div>

                <div
                    class="study-actions-group"
                    style="justify-content:center;flex-wrap:wrap"
                >

                    ${
                        quizMode === "topic"
                            ? `
                                <button
                                    id="micro-result-retake"
                                    class="study-button"
                                >
                                    🔄 New Quiz
                                </button>

                                <button
                                    id="micro-result-practice"
                                    class="study-button"
                                >
                                    🔬 Practice Lab
                                </button>

                                <button
                                    id="micro-result-review"
                                    class="study-button"
                                >
                                    🧠 Quick Review
                                </button>
                            `
                            : ""
                    }

                    ${
                        getWeakQuestions().length
                            ? `
                                <button
                                    id="micro-result-weak"
                                    class="study-button"
                                >
                                    🎯 Weak Areas
                                </button>
                            `
                            : ""
                    }

                    <button
                        id="micro-result-finish"
                        class="study-button primary"
                    >
                        Finish
                    </button>

                </div>

            </div>
        `;

        const retake = document.getElementById(
            "micro-result-retake"
        );

        const practice = document.getElementById(
            "micro-result-practice"
        );

        const review = document.getElementById(
            "micro-result-review"
        );

        const weak = document.getElementById(
            "micro-result-weak"
        );

        const finish = document.getElementById(
            "micro-result-finish"
        );

        if (retake) {

            retake.addEventListener("click", function () {
                startTopicQuiz(quizTopic);
            });
        }

        if (practice) {

            practice.addEventListener("click", function () {
                startPracticeLab(quizTopic);
            });
        }

        if (review) {

            review.addEventListener("click", function () {
                startQuickReview(quizTopic);
            });
        }

        if (weak) {
            weak.addEventListener(
                "click",
                startWeakPractice
            );
        }

        if (finish) {
            finish.addEventListener(
                "click",
                closeModal
            );
        }
    }

    // ========================================================================
    // ESCAPE
    // ========================================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                !overlay.classList.contains("hidden")
            ) {
                closeModal();
            }
        }
    );

    // ========================================================================
    // INITIALIZE
    // ========================================================================

    updateProgress();

    setTimeout(
        updateSharedDashboard,
        0
    );

});