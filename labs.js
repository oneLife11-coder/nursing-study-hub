// ============================================================================
// NURSING STUDY HUB
// ANATOMY & SCIENCE LAB CENTER
// COMPLETE PRACTICAL / IDENTIFICATION ENGINE
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================================
    // COURSE SETTINGS
    // ========================================================================

    const COURSE_TITLE = "Anatomy & Science Lab Center";

    const PASS_SCORE = 90;

    const STATION_QUIZ_LENGTH = 12;

    const MIXED_PRACTICAL_LENGTH = 30;

    const FINAL_PRACTICAL_LENGTH = 60;

    const SHARED_QUESTIONS_KEY =
        "nursingStudyHubQuestionsAnswered";


    // ========================================================================
    // MODULES
    // ========================================================================

    const MODULES = [

        {
            number: 1,
            title: "Lab Foundations, Safety & Microscopy"
        },

        {
            number: 2,
            title: "Histology Practical"
        },

        {
            number: 3,
            title: "Skeletal System Practical"
        },

        {
            number: 4,
            title: "Muscular & Nervous System Practical"
        },

        {
            number: 5,
            title: "Blood, Heart & Respiratory Practical"
        },

        {
            number: 6,
            title: "Digestive, Urinary, Endocrine & Reproductive Practical"
        },

        {
            number: 7,
            title: "Microbiology Laboratory"
        },

        {
            number: 8,
            title: "Chemistry Laboratory"
        }

    ];


    // ========================================================================
    // DATA HELPERS
    // ========================================================================

    function specimen(
        name,
        clue,
        functionText,
        practicalTip
    ) {

        return {

            name,
            clue,
            function: functionText,
            tip: practicalTip

        };

    }


    function section(
        title,
        paragraphs
    ) {

        return {
            title,
            paragraphs
        };

    }


    function customMCQ(
        id,
        q,
        choices,
        answer,
        explanation
    ) {

        return {

            id,
            type: "mcq",
            q,
            choices,
            answer,
            explanation

        };

    }


    function numericQuestion(
        id,
        q,
        answer,
        tolerance,
        unit,
        explanation
    ) {

        return {

            id,
            type: "numeric",
            q,
            answer,
            tolerance,
            unit,
            explanation

        };

    }


    function station(config) {

        return {

            objectives: [],
            specimens: [],
            sections: [],
            procedure: [],
            pitfalls: [],
            memory: [],
            questions: [],
            clinical: {
                title: "",
                scenario: "",
                connection: ""
            },

            ...config

        };

    }


    // ========================================================================
    // COMPLETE LAB STATION DATA
    // ========================================================================

    const LAB_STATIONS = [

        // ====================================================================
        // MODULE 1
        // ====================================================================

        station({

            id: "lab-safety",

            number: 1,

            module: 1,

            title: "Laboratory Safety & Scientific Practice",

            description:
                "Master personal protective equipment, chemical and biological safety, sharps handling, specimen labeling and common laboratory emergency procedures.",

            objectives: [

                "Identify standard laboratory PPE.",

                "Explain why food and drinks are prohibited in laboratory areas.",

                "Describe proper sharps disposal.",

                "Differentiate chemical, biological and physical hazards.",

                "Recognize immediate responses to common laboratory incidents."

            ],

            specimens: [

                specimen(
                    "Safety goggles",
                    "Protective equipment worn over the eyes during splash or impact risk.",
                    "Protects the eyes from chemicals, biological material and flying debris.",
                    "Goggles must fit securely and remain in place during hazardous procedures."
                ),

                specimen(
                    "Laboratory coat",
                    "Protective outer garment covering clothing and much of the skin.",
                    "Reduces contamination of personal clothing and skin.",
                    "Remove contaminated protective clothing before leaving the laboratory area."
                ),

                specimen(
                    "Biohazard container",
                    "Container marked for materials contaminated with potentially infectious biological material.",
                    "Separates biohazardous waste from ordinary trash.",
                    "Do not place ordinary waste into regulated biohazard containers."
                ),

                specimen(
                    "Sharps container",
                    "Rigid puncture-resistant container used for needles, lancets and other sharps.",
                    "Prevents needlestick injuries and unsafe handling.",
                    "Never reach into, compact or overfill a sharps container."
                ),

                specimen(
                    "Eyewash station",
                    "Emergency fixture designed to flush the eyes continuously.",
                    "Removes irritating or hazardous material from the eyes.",
                    "Immediate and prolonged flushing is important after significant eye exposure."
                ),

                specimen(
                    "Safety shower",
                    "Emergency overhead water system used for major skin or clothing contamination.",
                    "Rapidly dilutes and removes hazardous material from a large body surface.",
                    "Contaminated clothing may need to be removed during flushing."
                )

            ],

            sections: [

                section(
                    "PPE and Exposure Prevention",
                    [

                        "Personal protective equipment reduces contact between hazardous material and the body. Gloves, eye protection, protective clothing and face protection are selected according to the type of exposure anticipated.",

                        "Gloves reduce exposure but do not replace hand hygiene. Gloves can contain microscopic defects and the outside surface may become contaminated during laboratory work.",

                        "Eating, drinking, applying cosmetics and storing food in laboratory refrigerators are prohibited because contaminated hands and surfaces can transfer hazardous material to the mouth."
                    ]
                ),

                section(
                    "Sharps and Biohazard Safety",
                    [

                        "Needles, broken contaminated glass, lancets and similar sharp objects create puncture hazards. They should be discarded immediately in approved puncture-resistant sharps containers.",

                        "Recapping needles should be avoided unless a specific procedure requires it and an approved method is used.",

                        "Biological specimens must be labeled correctly. Identification errors can invalidate results and create serious patient-safety problems."
                    ]
                ),

                section(
                    "Emergency Response",
                    [

                        "Chemical splashes to the eyes require immediate flushing with an eyewash station. Large body exposures may require a safety shower.",

                        "Spills should be managed according to the type of substance involved. Biological spills, acids, bases and solvents may require different neutralization or disinfection methods.",

                        "A laboratory student should know the location of emergency exits, fire extinguishers, eyewash stations, safety showers and spill materials before beginning work."
                    ]
                )

            ],

            procedure: [

                "Inspect the work area before beginning.",

                "Put on required PPE.",

                "Label specimens and containers before or immediately after collection according to procedure.",

                "Keep clean and contaminated items separated.",

                "Dispose of biological waste and sharps correctly.",

                "Disinfect the workspace when finished.",

                "Remove gloves without contaminating bare hands.",

                "Perform hand hygiene before leaving the laboratory."

            ],

            pitfalls: [

                "Wearing gloves outside the laboratory and contaminating door handles or personal items.",

                "Putting needles into ordinary trash.",

                "Using unlabeled tubes or specimens.",

                "Assuming gloves replace hand washing.",

                "Working without knowing where emergency equipment is located."

            ],

            memory: [

                "PPE protects you; labeling protects the patient.",

                "Sharps go directly into sharps containers.",

                "Gloves off → hand hygiene."

            ],

            clinical: {

                title: "Specimen Mislabeling",

                scenario:
                    "Two blood tubes are collected from different patients but labels are placed on the tubes later at the desk.",

                connection:
                    "Delayed labeling creates a serious identification risk. Laboratory results are only meaningful if the specimen is linked to the correct patient."

            },

            questions: [

                customMCQ(
                    "safety1",
                    "Which container is most appropriate for disposal of a used contaminated needle?",
                    [
                        "Rigid sharps container",
                        "Ordinary trash container",
                        "Paper recycling bin",
                        "Sink"
                    ],
                    0,
                    "Used contaminated needles belong in an approved puncture-resistant sharps container."
                ),

                customMCQ(
                    "safety2",
                    "A chemical splashes into a student's eye. What is the priority action?",
                    [
                        "Immediately begin flushing at the eyewash station",
                        "Finish the experiment first",
                        "Cover the eye with a dry towel",
                        "Wait to see whether irritation develops"
                    ],
                    0,
                    "Immediate irrigation helps dilute and remove the chemical from the eye."
                )

            ]

        }),


        station({

            id: "microscope",

            number: 2,

            module: 1,

            title: "Compound Light Microscope",

            description:
                "Identify microscope parts, calculate total magnification, focus safely and understand field of view, resolution and working distance.",

            objectives: [

                "Identify major parts of a compound light microscope.",

                "Calculate total magnification.",

                "Explain the difference between magnification and resolution.",

                "Describe correct focusing sequence.",

                "Explain how field of view changes as magnification increases."

            ],

            specimens: [

                specimen(
                    "Ocular lens",
                    "Lens viewed through at the top of the microscope.",
                    "Further magnifies the image formed by the objective lens.",
                    "A common ocular magnification is 10×."
                ),

                specimen(
                    "Objective lens",
                    "One of several rotating lenses positioned close to the specimen.",
                    "Produces the primary magnified image.",
                    "Objectives commonly include scanning, low-power and high-power lenses."
                ),

                specimen(
                    "Revolving nosepiece",
                    "Rotating structure holding multiple objective lenses.",
                    "Allows rapid selection of objective magnification.",
                    "Rotate until the objective clicks securely into position."
                ),

                specimen(
                    "Stage",
                    "Flat platform where the slide is placed.",
                    "Supports and positions the specimen.",
                    "Mechanical stage controls move the slide precisely."
                ),

                specimen(
                    "Condenser",
                    "Lens system below the stage.",
                    "Focuses light onto the specimen.",
                    "Condenser position can influence image quality."
                ),

                specimen(
                    "Iris diaphragm",
                    "Adjustable opening regulating light passing through the specimen.",
                    "Controls illumination and contrast.",
                    "Excessive or insufficient light can reduce useful contrast."
                ),

                specimen(
                    "Coarse adjustment",
                    "Large focusing knob producing relatively large stage movement.",
                    "Used for initial focusing at lower magnification.",
                    "Avoid coarse focus with high-power objectives because the lens may strike the slide."
                ),

                specimen(
                    "Fine adjustment",
                    "Smaller focusing knob producing very small movement.",
                    "Sharpens focus, especially at high magnification.",
                    "Use fine focus for precise high-power focusing."
                )

            ],

            sections: [

                section(
                    "Magnification",
                    [

                        "Total magnification equals ocular magnification multiplied by objective magnification. A 10× ocular with a 40× objective produces 400× total magnification.",

                        "Magnification makes the image appear larger. Resolution is different: resolution is the ability to distinguish two close points as separate.",

                        "Increasing magnification without adequate resolution produces a larger but blurry image."
                    ]
                ),

                section(
                    "Focusing Sequence",
                    [

                        "Begin with the lowest-power objective because it provides the widest field of view and greatest working distance.",

                        "Center the specimen before moving to higher magnification. Because the field of view becomes smaller, an off-center structure may disappear when magnification increases.",

                        "At high power, use fine focus rather than coarse focus."
                    ]
                ),

                section(
                    "Field of View",
                    [

                        "As magnification increases, field of view decreases. Less of the specimen is visible at one time.",

                        "Working distance also generally decreases as higher-power objectives move closer to the slide.",

                        "The apparent image is inverted relative to actual specimen movement, so moving the slide left may make the image appear to move right."
                    ]
                )

            ],

            procedure: [

                "Carry the microscope with two hands.",

                "Place the slide on the stage.",

                "Begin with the lowest-power objective.",

                "Use coarse focus to obtain the initial image.",

                "Use fine focus to sharpen the image.",

                "Center the structure of interest.",

                "Rotate to a higher-power objective.",

                "Use fine adjustment only as magnification increases."

            ],

            pitfalls: [

                "Starting with the high-power objective.",

                "Using coarse focus under high power.",

                "Failing to center the specimen before increasing magnification.",

                "Confusing magnification with resolution.",

                "Allowing the objective lens to contact the slide."

            ],

            memory: [

                "Total magnification = ocular × objective.",

                "Higher magnification = smaller field of view.",

                "High power = fine focus."

            ],

            clinical: {

                title: "Microscopy in Diagnostic Laboratories",

                scenario:
                    "A laboratory professional examines a stained blood smear under high magnification.",

                connection:
                    "Accurate focusing and resolution are essential for distinguishing cells, microorganisms and microscopic abnormalities."

            },

            questions: [

                numericQuestion(
                    "micro1",
                    "A microscope has a 10× ocular and a 40× objective. What is the total magnification?",
                    400,
                    0.01,
                    "×",
                    "Total magnification = 10 × 40 = 400×."
                ),

                customMCQ(
                    "micro2",
                    "What happens to field of view as objective magnification increases?",
                    [
                        "It decreases",
                        "It always increases",
                        "It remains identical",
                        "It becomes unlimited"
                    ],
                    0,
                    "Higher magnification shows a smaller portion of the specimen."
                )

            ]

        }),


        station({

            id: "measurement-specimen",

            number: 3,

            module: 1,

            title: "Laboratory Measurement, Specimens & Units",

            description:
                "Practice metric units, volume measurement, mass measurement, meniscus reading and reliable specimen handling.",

            objectives: [

                "Use common metric units.",

                "Read a graduated cylinder correctly.",

                "Explain the meniscus.",

                "Differentiate accuracy and precision.",

                "Recognize common measurement errors."

            ],

            specimens: [

                specimen(
                    "Graduated cylinder",
                    "Tall narrow vessel marked with volume graduations.",
                    "Measures liquid volume more accurately than a general beaker.",
                    "Read most aqueous liquids at the bottom of the meniscus at eye level."
                ),

                specimen(
                    "Beaker",
                    "Wide cylindrical container with a pouring lip.",
                    "Used for mixing, heating and approximate volume handling.",
                    "Beaker markings are generally less precise than graduated-cylinder markings."
                ),

                specimen(
                    "Electronic balance",
                    "Instrument with a digital mass display.",
                    "Measures sample mass.",
                    "Tare the balance when using a container."
                ),

                specimen(
                    "Meniscus",
                    "Curved surface formed by a liquid in a narrow container.",
                    "Provides the reference point for accurate volume reading.",
                    "For many aqueous solutions, read the bottom of the meniscus at eye level."
                ),

                specimen(
                    "Pipette",
                    "Narrow calibrated device designed to transfer measured liquid volumes.",
                    "Provides precise volume transfer.",
                    "Different pipettes have different accuracy limits and operating techniques."
                )

            ],

            sections: [

                section(
                    "Metric Measurement",
                    [

                        "Scientific laboratories use metric and SI-based units because they convert systematically by powers of ten.",

                        "Common units include liters and milliliters for volume, grams and milligrams for mass and meters, centimeters and millimeters for length.",

                        "Unit labels should remain attached to every recorded measurement."
                    ]
                ),

                section(
                    "Accuracy and Precision",
                    [

                        "Accuracy describes closeness to the accepted or true value. Precision describes consistency among repeated measurements.",

                        "A set of measurements can be precise but inaccurate if the equipment is consistently miscalibrated.",

                        "Proper technique, calibration and equipment selection influence both accuracy and precision."
                    ]
                ),

                section(
                    "Reading Volume",
                    [

                        "The observer's eye should be level with the liquid surface to prevent parallax error.",

                        "For most water-based solutions in ordinary glassware, the bottom of the concave meniscus is used.",

                        "Recorded values should reflect the precision of the measuring device rather than adding unsupported digits."
                    ]
                )

            ],

            procedure: [

                "Select the measuring device appropriate for the required precision.",

                "Check the unit scale.",

                "Place the device on a level surface.",

                "Bring the eye to the level of the meniscus.",

                "Read the correct point of the meniscus.",

                "Record the value immediately with units."

            ],

            pitfalls: [

                "Reading the meniscus from above or below eye level.",

                "Recording measurements without units.",

                "Using a beaker when a more precise graduated cylinder is required.",

                "Failing to tare a balance.",

                "Reporting more decimal places than the instrument supports."

            ],

            memory: [

                "Eye level prevents parallax.",

                "Accuracy = true; precision = repeatable.",

                "Always record the unit."

            ],

            clinical: {

                title: "Medication and Specimen Measurement",

                scenario:
                    "A small liquid volume must be measured accurately for laboratory analysis.",

                connection:
                    "Choosing appropriate calibrated equipment reduces measurement error that could alter calculated concentration or test results."

            }

        }),


        station({

            id: "anatomical-language-lab",

            number: 4,

            module: 1,

            title: "Anatomical Position, Planes & Body Cavities",

            description:
                "Use anatomical position, directional terminology, planes, cavities and abdominal regions in a practical setting.",

            objectives: [

                "Recognize anatomical position.",

                "Differentiate sagittal, frontal and transverse planes.",

                "Apply directional terminology.",

                "Identify major body cavities.",

                "Use abdominal quadrants clinically."

            ],

            specimens: [

                specimen(
                    "Sagittal plane",
                    "Vertical plane dividing the body into right and left portions.",
                    "Provides a right-left anatomical section.",
                    "A midsagittal section passes through the midline."
                ),

                specimen(
                    "Frontal plane",
                    "Vertical plane dividing the body into anterior and posterior portions.",
                    "Provides front-back anatomical sections.",
                    "Also called the coronal plane."
                ),

                specimen(
                    "Transverse plane",
                    "Horizontal plane dividing the body into superior and inferior portions.",
                    "Produces cross-sectional images.",
                    "Many CT images are displayed in transverse sections."
                ),

                specimen(
                    "Thoracic cavity",
                    "Ventral cavity superior to the diaphragm.",
                    "Contains the lungs, mediastinum and heart-related structures.",
                    "The diaphragm separates thoracic and abdominopelvic cavities."
                ),

                specimen(
                    "Abdominal cavity",
                    "Superior portion of the abdominopelvic cavity.",
                    "Contains many digestive organs.",
                    "It is inferior to the diaphragm."
                ),

                specimen(
                    "Pelvic cavity",
                    "Inferior part of the abdominopelvic cavity.",
                    "Contains portions of the urinary, digestive and reproductive systems.",
                    "It is continuous with the abdominal cavity."
                )

            ],

            sections: [

                section(
                    "Anatomical Position",
                    [

                        "Anatomical terminology is based on a standard reference position: standing upright, head and eyes forward, feet directed forward, arms at the sides and palms facing anteriorly.",

                        "Directional terms remain based on anatomical position even when the patient is lying down.",

                        "This standardization prevents ambiguity when describing locations and movements."
                    ]
                ),

                section(
                    "Planes",
                    [

                        "Sagittal planes divide right and left. Frontal planes divide anterior and posterior. Transverse planes divide superior and inferior.",

                        "Oblique sections pass through the body at an angle rather than following the three standard planes.",

                        "Medical imaging frequently uses these sectional relationships."
                    ]
                ),

                section(
                    "Clinical Location",
                    [

                        "Abdominal quadrants help communicate symptom location. Right upper, left upper, right lower and left lower quadrants are commonly used clinically.",

                        "More detailed nine-region terminology is also used in anatomy.",

                        "Directional language such as proximal, distal, medial, lateral, superficial and deep provides consistent relationships between structures."
                    ]
                )

            ],

            procedure: [

                "Place the model or body diagram in anatomical position.",

                "Identify anterior and posterior surfaces.",

                "Identify superior and inferior directions.",

                "Apply a plane to the model.",

                "Name the resulting body divisions.",

                "Locate the major cavities and abdominal quadrants."

            ],

            pitfalls: [

                "Using the patient's current body position instead of anatomical position as the reference.",

                "Confusing frontal with transverse planes.",

                "Using proximal and distal for unrelated structures.",

                "Confusing left and right from the observer's perspective rather than the patient's."

            ],

            memory: [

                "Sagittal = sides.",

                "Frontal = front/back.",

                "Transverse = top/bottom."

            ],

            clinical: {

                title: "Abdominal Pain Documentation",

                scenario:
                    "A patient reports pain in the right lower quadrant.",

                connection:
                    "Standard anatomical location terminology allows healthcare professionals to communicate the finding consistently."

            }

        }),


        // ====================================================================
        // MODULE 2 — HISTOLOGY
        // ====================================================================

        station({

            id: "epithelial-histology",

            number: 5,

            module: 2,

            title: "Epithelial Tissue Identification",

            description:
                "Identify major epithelial tissues by cell shape, number of layers and location.",

            objectives: [

                "Differentiate simple and stratified epithelia.",

                "Identify squamous, cuboidal and columnar cell shapes.",

                "Recognize pseudostratified epithelium.",

                "Recognize transitional epithelium.",

                "Connect microscopic structure with function."

            ],

            specimens: [

                specimen(
                    "Simple squamous epithelium",
                    "Single thin layer of flat cells with flattened nuclei.",
                    "Allows rapid diffusion and filtration.",
                    "Look for very thin cells lining alveoli or blood vessels."
                ),

                specimen(
                    "Simple cuboidal epithelium",
                    "Single layer of cube-shaped cells with round central nuclei.",
                    "Commonly supports secretion and absorption.",
                    "Kidney tubules are a classic practical specimen."
                ),

                specimen(
                    "Simple columnar epithelium",
                    "Single layer of tall cells with oval nuclei.",
                    "Performs absorption and secretion.",
                    "Look for tall intestinal cells and possible goblet cells."
                ),

                specimen(
                    "Pseudostratified ciliated columnar epithelium",
                    "Nuclei appear at different heights although cells contact the basement membrane.",
                    "Secretes and moves mucus.",
                    "Cilia and goblet cells often indicate respiratory epithelium."
                ),

                specimen(
                    "Stratified squamous epithelium",
                    "Multiple layers with flattened cells at the free surface.",
                    "Protects against abrasion.",
                    "Identify by the shape of the apical cells, not the deepest cells."
                ),

                specimen(
                    "Transitional epithelium",
                    "Multiple layers with rounded or dome-shaped surface cells when relaxed.",
                    "Allows urinary organs to stretch.",
                    "Common practical location: urinary bladder."
                )

            ],

            sections: [

                section(
                    "Layer Number",
                    [

                        "Simple epithelium contains one cell layer, whereas stratified epithelium contains multiple layers.",

                        "Pseudostratified epithelium appears multilayered because nuclei occur at different heights, but all cells contact the basement membrane.",

                        "The number of layers helps predict function: thin simple tissues favor exchange, while multilayered tissues favor protection."
                    ]
                ),

                section(
                    "Cell Shape",
                    [

                        "Squamous cells are thin and flat. Cuboidal cells are approximately as tall as they are wide. Columnar cells are taller than they are wide.",

                        "Stratified epithelial tissue is named according to the shape of cells at the apical surface.",

                        "Transitional epithelium changes appearance as urinary organs stretch."
                    ]
                ),

                section(
                    "Structure and Function",
                    [

                        "Simple squamous epithelium supports rapid diffusion because the barrier is extremely thin.",

                        "Simple cuboidal and columnar tissues are thicker and often specialized for secretion or absorption.",

                        "Stratified squamous tissue resists friction because superficial cells can be shed while deeper layers remain."
                    ]
                )

            ],

            procedure: [

                "Locate the free or apical surface.",

                "Determine the number of cell layers.",

                "Identify the shape of the apical cells.",

                "Look for cilia, goblet cells or keratin.",

                "Use location and function as confirmation rather than the first clue."

            ],

            pitfalls: [

                "Naming stratified epithelium by the deepest cell shape.",

                "Calling pseudostratified epithelium truly stratified.",

                "Mistaking tissue folds for multiple layers.",

                "Ignoring the free surface."

            ],

            memory: [

                "Simple = one layer.",

                "Stratified = stacked layers.",

                "Name stratified epithelium by the TOP cells."

            ],

            clinical: {

                title: "Airway Epithelium",

                scenario:
                    "Chronic airway irritation damages cilia in respiratory epithelium.",

                connection:
                    "Loss of ciliary function reduces the ability to move mucus and trapped particles out of the respiratory tract."

            }

        }),


        station({

            id: "connective-histology",

            number: 6,

            module: 2,

            title: "Connective Tissue Identification",

            description:
                "Identify connective tissues by matrix, fiber pattern and resident cells.",

            objectives: [

                "Identify loose and dense connective tissues.",

                "Recognize adipose tissue.",

                "Differentiate cartilage types.",

                "Identify bone and blood as connective tissues.",

                "Relate extracellular matrix to tissue function."

            ],

            specimens: [

                specimen(
                    "Areolar connective tissue",
                    "Loose arrangement of collagen and elastic fibers with visible open space.",
                    "Wraps, cushions and supports tissues.",
                    "Look for loosely arranged fibers rather than thick parallel bundles."
                ),

                specimen(
                    "Adipose tissue",
                    "Large clear-appearing cells with nuclei displaced toward the edge.",
                    "Stores energy, cushions and insulates.",
                    "The lipid droplet is often removed during tissue preparation, leaving an empty-looking cell."
                ),

                specimen(
                    "Dense regular connective tissue",
                    "Parallel collagen bundles with flattened fibroblast nuclei.",
                    "Resists strong pulling force in one direction.",
                    "Tendon is a classic example."
                ),

                specimen(
                    "Hyaline cartilage",
                    "Smooth glassy matrix with chondrocytes inside lacunae.",
                    "Provides resilient support and reduces friction.",
                    "Look for lacunae without obvious thick fiber bundles."
                ),

                specimen(
                    "Elastic cartilage",
                    "Chondrocytes in lacunae surrounded by visible elastic fibers.",
                    "Provides flexible support.",
                    "External ear is a common example."
                ),

                specimen(
                    "Fibrocartilage",
                    "Rows of chondrocytes between thick collagen fibers.",
                    "Resists compression and tension.",
                    "Intervertebral discs are a classic location."
                )

            ],

            sections: [

                section(
                    "Extracellular Matrix",
                    [

                        "Connective tissues contain cells dispersed within an extracellular matrix composed of fibers and ground substance.",

                        "Matrix characteristics often determine mechanical function more than cell shape alone.",

                        "Collagen provides tensile strength, elastic fibers permit recoil and ground substance influences hydration and diffusion."
                    ]
                ),

                section(
                    "Cartilage",
                    [

                        "Cartilage cells called chondrocytes occupy spaces called lacunae.",

                        "Hyaline cartilage has a relatively smooth matrix. Elastic cartilage contains more elastic fibers. Fibrocartilage contains thick collagen bundles.",

                        "Cartilage is avascular, helping explain its relatively slow repair."
                    ]
                ),

                section(
                    "Dense and Loose Tissue",
                    [

                        "Dense regular connective tissue contains parallel collagen fibers aligned with the direction of force.",

                        "Dense irregular connective tissue contains collagen bundles arranged in multiple directions, making it useful where forces arrive from different angles.",

                        "Loose connective tissue contains more open ground substance and supports nearby vessels and cells."
                    ]
                )

            ],

            procedure: [

                "Assess whether the specimen contains abundant matrix.",

                "Look for fibers and determine their orientation.",

                "Identify specialized cells such as adipocytes or chondrocytes.",

                "Look for lacunae when cartilage is suspected.",

                "Match matrix architecture with expected mechanical function."

            ],

            pitfalls: [

                "Calling empty-looking adipocytes damaged tissue.",

                "Confusing fibrocartilage with dense regular connective tissue.",

                "Ignoring matrix characteristics.",

                "Expecting all connective tissue to contain obvious fibers."

            ],

            memory: [

                "Connective tissue = cells + matrix.",

                "Chondrocytes live in lacunae.",

                "Dense regular = parallel collagen."

            ],

            clinical: {

                title: "Tendon Injury",

                scenario:
                    "A tendon is repeatedly exposed to high tensile force.",

                connection:
                    "Parallel collagen bundles in dense regular connective tissue are arranged to resist tension along the direction of pull."

            }

        }),


        station({

            id: "muscle-histology",

            number: 7,

            module: 2,

            title: "Muscle Tissue Histology",

            description:
                "Differentiate skeletal, cardiac and smooth muscle under the microscope.",

            objectives: [

                "Identify skeletal muscle.",

                "Identify cardiac muscle.",

                "Identify smooth muscle.",

                "Recognize striations and intercalated discs.",

                "Relate tissue structure to contraction function."

            ],

            specimens: [

                specimen(
                    "Skeletal muscle",
                    "Long parallel striated fibers with multiple peripheral nuclei.",
                    "Produces voluntary body movement and posture.",
                    "Look for obvious striations and many nuclei near fiber edges."
                ),

                specimen(
                    "Cardiac muscle",
                    "Branched striated cells with central nuclei and dark intercalated discs.",
                    "Produces rhythmic involuntary contraction of the heart.",
                    "Branching fibers and intercalated discs are high-yield identifiers."
                ),

                specimen(
                    "Smooth muscle",
                    "Spindle-shaped cells with central nuclei and no visible striations.",
                    "Produces involuntary movement in hollow organs and vessels.",
                    "Look for tapered cells and absence of striations."
                ),

                specimen(
                    "Intercalated disc",
                    "Dark transverse junction between adjacent cardiac muscle cells.",
                    "Mechanically and electrically links cardiac cells.",
                    "Only cardiac muscle has intercalated discs."
                )

            ],

            sections: [

                section(
                    "Skeletal Muscle",
                    [

                        "Skeletal muscle fibers are large multinucleated cells formed by fusion of precursor cells.",

                        "Their orderly sarcomeres produce visible striations.",

                        "Peripheral nuclei and long unbranched fibers help distinguish skeletal muscle from cardiac muscle."
                    ]
                ),

                section(
                    "Cardiac Muscle",
                    [

                        "Cardiac muscle is striated but differs from skeletal muscle by branching cells, central nuclei and intercalated discs.",

                        "Intercalated discs contain specialized junctions that help cardiac cells contract as a coordinated tissue.",

                        "Cardiac muscle contraction is involuntary."
                    ]
                ),

                section(
                    "Smooth Muscle",
                    [

                        "Smooth muscle lacks visible sarcomere striations under routine microscopy.",

                        "It forms sheets in many hollow organs and blood vessels.",

                        "Its spindle-shaped cells contract more slowly and can maintain tone for long periods."
                    ]
                )

            ],

            procedure: [

                "First ask whether striations are visible.",

                "If striated, determine whether fibers branch.",

                "Look at nucleus location.",

                "Search for intercalated discs.",

                "Match the tissue with its expected organ location."

            ],

            pitfalls: [

                "Calling cardiac muscle skeletal because both are striated.",

                "Mistaking densely packed smooth muscle for connective tissue.",

                "Ignoring nucleus position.",

                "Failing to recognize branching cardiac fibers."

            ],

            memory: [

                "Skeletal = stripes + many peripheral nuclei.",

                "Cardiac = stripes + branches + discs.",

                "Smooth = no stripes."

            ],

            clinical: {

                title: "Myocardial Damage",

                scenario:
                    "Cardiac muscle cells are damaged during myocardial infarction.",

                connection:
                    "Because cardiac muscle has limited regenerative capacity, significant injury can reduce contractile function."

            }

        }),


        station({

            id: "nervous-histology",

            number: 8,

            module: 2,

            title: "Nervous Tissue Histology",

            description:
                "Identify neurons, neuroglia, gray matter, white matter and major microscopic nervous-tissue features.",

            objectives: [

                "Identify neuron cell bodies.",

                "Recognize axons and dendrites conceptually.",

                "Differentiate neurons from supporting glial cells.",

                "Distinguish gray matter from white matter conceptually.",

                "Recognize peripheral nerve organization."

            ],

            specimens: [

                specimen(
                    "Neuron cell body",
                    "Large cell with prominent nucleus and often a visible nucleolus.",
                    "Contains the nucleus and major biosynthetic machinery of the neuron.",
                    "Neurons often appear much larger than nearby glial nuclei."
                ),

                specimen(
                    "Dendrite",
                    "Branching neuronal process usually receiving synaptic input.",
                    "Carries graded electrical signals toward the cell body.",
                    "Multiple dendrites commonly arise from the soma."
                ),

                specimen(
                    "Axon",
                    "Single neuronal process specialized to conduct action potentials away from the cell body.",
                    "Transmits signals to other neurons, muscles or glands.",
                    "A neuron usually has one axon."
                ),

                specimen(
                    "Neuroglia",
                    "Smaller supporting cells surrounding neurons.",
                    "Support, nourish, insulate and regulate the neuronal environment.",
                    "Glial nuclei often appear smaller and more numerous than neuron cell bodies."
                ),

                specimen(
                    "Peripheral nerve fascicle",
                    "Bundle of nerve fibers surrounded by connective tissue.",
                    "Carries sensory or motor axons through the peripheral nervous system.",
                    "Look for bundled circular or longitudinal nerve profiles."
                )

            ],

            sections: [

                section(
                    "Neurons",
                    [

                        "Neurons are electrically excitable cells specialized for communication.",

                        "The cell body contains the nucleus. Dendrites usually receive signals, while the axon conducts action potentials away from the soma.",

                        "Large neuron cell bodies are often easy to distinguish from small surrounding glial nuclei."
                    ]
                ),

                section(
                    "Neuroglia",
                    [

                        "Glial cells do not simply fill space. They regulate extracellular conditions, form myelin, participate in immune defense and support neuronal metabolism.",

                        "Different glial cell types occur in the central and peripheral nervous systems.",

                        "A routine tissue section may show many more glial nuclei than large neuron cell bodies."
                    ]
                ),

                section(
                    "Gray and White Matter",
                    [

                        "Gray matter contains many neuron cell bodies, dendrites and synapses.",

                        "White matter contains large numbers of myelinated axons.",

                        "The distribution of gray and white matter differs between the brain and spinal cord."
                    ]
                )

            ],

            procedure: [

                "Find the largest cell bodies first.",

                "Identify nuclei and prominent nucleoli.",

                "Look for smaller glial nuclei around neurons.",

                "Assess whether the field is dominated by cell bodies or fiber bundles.",

                "Use tissue location to confirm the structure."

            ],

            pitfalls: [

                "Calling every dark nucleus a neuron.",

                "Confusing peripheral nerve fascicles with smooth muscle.",

                "Assuming glial cells are unimportant support cells.",

                "Forgetting that white matter is rich in myelinated axons."

            ],

            memory: [

                "Neuron soma = large.",

                "Glia = smaller and more numerous.",

                "Gray = cell bodies; white = myelinated axons."

            ],

            clinical: {

                title: "Demyelination",

                scenario:
                    "A disease damages central nervous system myelin.",

                connection:
                    "Loss of myelin slows or disrupts action-potential conduction along affected axons."

            }

        }),


        // ====================================================================
        // MODULE 3 — SKELETAL
        // ====================================================================

        station({

            id: "bone-microanatomy",

            number: 9,

            module: 3,

            title: "Bone Tissue & Osteon Practical",

            description:
                "Identify compact bone structures, osteons, central canals, lacunae and spongy bone.",

            objectives: [

                "Identify an osteon.",

                "Identify central canals.",

                "Recognize lacunae and canaliculi.",

                "Differentiate compact and spongy bone.",

                "Explain how bone microstructure supports function."

            ],

            specimens: [

                specimen(
                    "Osteon",
                    "Circular structural unit with concentric rings surrounding a central canal.",
                    "Forms the basic structural unit of compact bone.",
                    "Look for target-like concentric lamellae."
                ),

                specimen(
                    "Central canal",
                    "Opening in the center of an osteon.",
                    "Contains blood vessels and nerves.",
                    "Usually appears as the central space of a concentric ring system."
                ),

                specimen(
                    "Concentric lamellae",
                    "Circular layers of mineralized bone matrix around a central canal.",
                    "Provide organized strength to compact bone.",
                    "Think of rings around the center of an osteon."
                ),

                specimen(
                    "Lacuna",
                    "Small cavity between lamellae containing an osteocyte.",
                    "Houses mature bone cells.",
                    "Appears as small dark spaces in prepared bone."
                ),

                specimen(
                    "Canaliculi",
                    "Tiny channels radiating between lacunae.",
                    "Allow communication and nutrient exchange among osteocytes.",
                    "Appear as very fine lines extending from lacunae."
                ),

                specimen(
                    "Trabecula",
                    "Thin plate or strut of spongy bone.",
                    "Forms a lightweight framework aligned with mechanical stress.",
                    "Spongy bone lacks complete osteons in the same arrangement as compact bone."
                )

            ],

            sections: [

                section(
                    "Compact Bone",
                    [

                        "Compact bone is dense and organized into osteons in many regions.",

                        "Each osteon contains concentric lamellae surrounding a central canal containing vessels and nerves.",

                        "Osteocytes occupy lacunae and communicate through canaliculi."
                    ]
                ),

                section(
                    "Spongy Bone",
                    [

                        "Spongy bone is formed by interconnected trabeculae rather than tightly packed osteons.",

                        "Trabecular spaces can contain bone marrow.",

                        "The architecture reduces weight while allowing bone to resist multidirectional loads."
                    ]
                ),

                section(
                    "Bone Cells",
                    [

                        "Osteoblasts build bone matrix. Osteocytes maintain mature matrix. Osteoclasts resorb bone.",

                        "Bone remodeling continuously balances formation and resorption.",

                        "Microscopic organization supports both mechanical strength and metabolic mineral regulation."
                    ]
                )

            ],

            procedure: [

                "Identify the overall compact or spongy pattern.",

                "Locate target-like osteons.",

                "Find the central canal.",

                "Trace concentric lamellae.",

                "Locate lacunae and canaliculi.",

                "Compare compact and trabecular organization."

            ],

            pitfalls: [

                "Calling every hole a central canal.",

                "Confusing lacunae with central canals.",

                "Expecting osteons to dominate spongy bone.",

                "Confusing trabeculae with fracture lines."

            ],

            memory: [

                "Osteon = bull's-eye.",

                "Central canal = center.",

                "Lacunae hold osteocytes."

            ],

            clinical: {

                title: "Osteoporosis",

                scenario:
                    "Trabecular bone becomes thinner and less connected over time.",

                connection:
                    "Loss of trabecular architecture reduces bone strength and increases fracture risk."

            }

        }),


        station({

            id: "axial-skeleton-lab",

            number: 10,

            module: 3,

            title: "Skull, Vertebral Column & Thoracic Cage",

            description:
                "Identify high-yield axial skeleton bones and landmarks used in anatomy practicals.",

            objectives: [

                "Identify major skull bones.",

                "Identify vertebral regions.",

                "Recognize atlas and axis.",

                "Identify sternum and ribs.",

                "Use landmarks to orient skeletal specimens."

            ],

            specimens: [

                specimen(
                    "Frontal bone",
                    "Forms the forehead and superior portions of the orbits.",
                    "Protects the anterior brain and contributes to the orbit.",
                    "Look for the large bone anterior to the coronal suture."
                ),

                specimen(
                    "Parietal bone",
                    "Large paired bone forming much of the superior-lateral skull.",
                    "Protects the brain.",
                    "Located posterior to the frontal bone and superior to the temporal bone."
                ),

                specimen(
                    "Temporal bone",
                    "Lateral skull bone surrounding the external acoustic region.",
                    "Protects structures of the ear and forms skull joints.",
                    "Look for mastoid and styloid regions."
                ),

                specimen(
                    "Occipital bone",
                    "Posterior-inferior skull bone containing the foramen magnum.",
                    "Protects the posterior brain and articulates with the atlas.",
                    "Foramen magnum is the major practical landmark."
                ),

                specimen(
                    "Atlas",
                    "First cervical vertebra lacking a typical vertebral body.",
                    "Supports the skull and permits nodding motion.",
                    "C1 looks ring-like."
                ),

                specimen(
                    "Axis",
                    "Second cervical vertebra with a prominent dens.",
                    "Provides a pivot for rotation of the atlas and head.",
                    "The dens identifies C2."
                ),

                specimen(
                    "Sternum",
                    "Flat midline bone on the anterior thorax.",
                    "Provides rib attachment and protects thoracic organs.",
                    "Identify manubrium, body and xiphoid process."
                ),

                specimen(
                    "True ribs",
                    "Upper rib pairs attaching directly to the sternum through their own costal cartilage.",
                    "Protect thoracic organs and support breathing mechanics.",
                    "Ribs 1–7 are true ribs."
                )

            ],

            sections: [

                section(
                    "Skull Orientation",
                    [

                        "Skull practicals are easiest when the specimen is oriented before individual landmarks are named.",

                        "Use the orbit, foramen magnum, external acoustic meatus and major sutures to establish direction.",

                        "Once orientation is known, smaller landmarks become much easier to identify."
                    ]
                ),

                section(
                    "Vertebral Regions",
                    [

                        "Cervical vertebrae are generally smaller and contain transverse foramina. Thoracic vertebrae articulate with ribs. Lumbar vertebrae have large bodies built for weight bearing.",

                        "The atlas and axis are specialized cervical vertebrae.",

                        "The sacrum is formed by fused vertebrae and articulates with the pelvis."
                    ]
                ),

                section(
                    "Thoracic Cage",
                    [

                        "The thoracic cage includes thoracic vertebrae, ribs, costal cartilages and sternum.",

                        "True ribs attach directly to the sternum. False ribs do not have their own direct sternal cartilage attachment.",

                        "The thoracic cage protects the heart and lungs while permitting respiratory movement."
                    ]
                )

            ],

            procedure: [

                "Orient the skull or vertebra first.",

                "Identify large landmarks.",

                "Use articulations to confirm orientation.",

                "Move from major structures to smaller landmarks.",

                "State both structure name and anatomical significance."

            ],

            pitfalls: [

                "Confusing atlas and axis.",

                "Misidentifying left and right temporal landmarks.",

                "Ignoring vertebral region-specific features.",

                "Confusing xiphoid process with the manubrium."

            ],

            memory: [

                "C1 = atlas holds the world/head.",

                "C2 = axis has dens for rotation.",

                "True ribs = 1–7."

            ],

            clinical: {

                title: "Cervical Spine Injury",

                scenario:
                    "A patient sustains trauma to the upper cervical vertebrae.",

                connection:
                    "C1 and C2 surround the upper spinal cord and support head movement, making injury in this region potentially serious."

            }

        }),


        station({

            id: "upper-limb-skeleton",

            number: 11,

            module: 3,

            title: "Pectoral Girdle & Upper Limb Bones",

            description:
                "Identify scapular, humeral, radial, ulnar and hand landmarks.",

            objectives: [

                "Identify clavicle and scapula.",

                "Recognize major humeral landmarks.",

                "Differentiate radius and ulna.",

                "Identify carpals, metacarpals and phalanges.",

                "Orient left versus right upper-limb bones."

            ],

            specimens: [

                specimen(
                    "Scapular spine",
                    "Prominent ridge on the posterior surface of the scapula.",
                    "Provides muscle attachment and separates supraspinous and infraspinous fossae.",
                    "The spine confirms the posterior surface."
                ),

                specimen(
                    "Glenoid cavity",
                    "Shallow lateral socket of the scapula.",
                    "Articulates with the head of the humerus.",
                    "The glenoid faces laterally."
                ),

                specimen(
                    "Head of humerus",
                    "Rounded proximal articular surface.",
                    "Articulates with the glenoid cavity.",
                    "The humeral head faces medially."
                ),

                specimen(
                    "Olecranon fossa",
                    "Large posterior depression on the distal humerus.",
                    "Receives the olecranon during elbow extension.",
                    "The large deep fossa identifies the posterior side."
                ),

                specimen(
                    "Radius",
                    "Forearm bone on the thumb side in anatomical position.",
                    "Participates strongly in wrist articulation and forearm rotation.",
                    "Radius = lateral in anatomical position."
                ),

                specimen(
                    "Ulna",
                    "Forearm bone on the little-finger side.",
                    "Forms the major hinge articulation with the humerus.",
                    "The olecranon is a major proximal landmark."
                ),

                specimen(
                    "Carpals",
                    "Eight small bones of the wrist.",
                    "Permit wrist mobility while transferring forces.",
                    "Carpals are proximal to metacarpals."
                )

            ],

            sections: [

                section(
                    "Scapula",
                    [

                        "The scapula is oriented by the spine, glenoid cavity and borders.",

                        "The spine is posterior and the glenoid cavity faces laterally toward the humerus.",

                        "The acromion and coracoid process are frequent practical landmarks."
                    ]
                ),

                section(
                    "Humerus",
                    [

                        "The rounded head is proximal and faces medially.",

                        "The olecranon fossa is posterior at the distal end.",

                        "Epicondyles and condyles provide additional orientation landmarks."
                    ]
                ),

                section(
                    "Forearm and Hand",
                    [

                        "The radius is lateral and the ulna medial in anatomical position.",

                        "During pronation, the radius crosses over the ulna.",

                        "The hand contains carpals, metacarpals and phalanges."
                    ]
                )

            ],

            procedure: [

                "Locate proximal and distal ends.",

                "Identify the articular surface.",

                "Find major directional landmarks.",

                "Determine anterior versus posterior.",

                "Determine left versus right."

            ],

            pitfalls: [

                "Calling radius medial in anatomical position.",

                "Using the observer's hand orientation instead of anatomical position.",

                "Confusing scapular spine and acromion.",

                "Failing to use the humeral head for orientation."

            ],

            memory: [

                "Radius = thumb side.",

                "Ulna = pinky side.",

                "Scapular spine = posterior."

            ],

            clinical: {

                title: "Shoulder Dislocation",

                scenario:
                    "The humeral head moves out of the glenoid cavity.",

                connection:
                    "The glenoid cavity is relatively shallow, allowing wide mobility but contributing to shoulder instability."

            }

        }),


        station({

            id: "lower-limb-skeleton",

            number: 12,

            module: 3,

            title: "Pelvis & Lower Limb Bones",

            description:
                "Identify major pelvic, femoral, tibial, fibular and foot landmarks.",

            objectives: [

                "Orient the os coxae.",

                "Identify acetabulum and obturator foramen.",

                "Identify major femoral landmarks.",

                "Differentiate tibia and fibula.",

                "Identify tarsals, metatarsals and phalanges."

            ],

            specimens: [

                specimen(
                    "Acetabulum",
                    "Deep lateral socket of the pelvis.",
                    "Articulates with the head of the femur.",
                    "It faces laterally."
                ),

                specimen(
                    "Obturator foramen",
                    "Large opening inferior to the acetabulum.",
                    "Reduces pelvic weight and allows passage of neurovascular structures through smaller regions.",
                    "One of the largest obvious openings in the pelvis."
                ),

                specimen(
                    "Head of femur",
                    "Rounded proximal articular surface connected by the femoral neck.",
                    "Articulates with the acetabulum.",
                    "The femoral head faces medially."
                ),

                specimen(
                    "Greater trochanter",
                    "Large lateral projection at the proximal femur.",
                    "Provides attachment for major hip muscles.",
                    "It lies lateral to the femoral neck."
                ),

                specimen(
                    "Patella",
                    "Sesamoid bone located anterior to the knee.",
                    "Improves mechanical advantage of the quadriceps tendon.",
                    "The broad base is superior and pointed apex inferior."
                ),

                specimen(
                    "Tibia",
                    "Large medial leg bone.",
                    "Primary weight-bearing bone of the leg.",
                    "The tibia forms the medial malleolus."
                ),

                specimen(
                    "Fibula",
                    "Slender lateral leg bone.",
                    "Provides muscle attachment and lateral ankle stability.",
                    "The fibula forms the lateral malleolus."
                )

            ],

            sections: [

                section(
                    "Pelvis",
                    [

                        "The hip bone is formed by the ilium, ischium and pubis.",

                        "The acetabulum faces laterally and receives the femoral head.",

                        "The obturator foramen is a large opening that makes orientation easier."
                    ]
                ),

                section(
                    "Femur",
                    [

                        "The femur is the largest bone of the thigh and transmits body weight from the hip to the knee.",

                        "The femoral head faces medially. The linea aspera lies posteriorly.",

                        "The greater and lesser trochanters provide major muscle attachments."
                    ]
                ),

                section(
                    "Leg and Foot",
                    [

                        "The tibia is the major weight-bearing bone of the leg and lies medially.",

                        "The fibula is more slender and lies laterally.",

                        "The foot contains tarsals, metatarsals and phalanges."
                    ]
                )

            ],

            procedure: [

                "Identify proximal and distal ends.",

                "Locate the femoral or pelvic articular surface.",

                "Use weight-bearing surfaces and malleoli for orientation.",

                "Determine medial versus lateral.",

                "Confirm left versus right."

            ],

            pitfalls: [

                "Calling the fibula the major weight-bearing leg bone.",

                "Orienting the femoral head laterally.",

                "Confusing medial and lateral malleoli.",

                "Forgetting that the patella is anterior."

            ],

            memory: [

                "Tibia = thick and medial.",

                "Fibula = fine and lateral.",

                "Femoral head faces medially."

            ],

            clinical: {

                title: "Femoral Neck Fracture",

                scenario:
                    "An older adult falls and fractures the femoral neck.",

                connection:
                    "The femoral neck connects the head to the shaft and is a common fracture site associated with impaired mobility and vascular complications."

            }

        }),


        // ====================================================================
        // MODULE 4 — MUSCLE / NERVOUS
        // ====================================================================

        station({

            id: "major-muscles-lab",

            number: 13,

            module: 4,

            title: "Major Skeletal Muscle Identification",

            description:
                "Identify major superficial muscles commonly tested in anatomy practicals.",

            objectives: [

                "Identify major head and neck muscles.",

                "Identify major trunk muscles.",

                "Identify major upper-limb muscles.",

                "Identify major lower-limb muscles.",

                "Relate muscle location to action."

            ],

            specimens: [

                specimen(
                    "Sternocleidomastoid",
                    "Large superficial neck muscle running from sternum and clavicle to mastoid process.",
                    "Flexes the neck and rotates the head to the opposite side.",
                    "Look for the prominent oblique strap on the lateral neck."
                ),

                specimen(
                    "Deltoid",
                    "Triangular muscle covering the lateral shoulder.",
                    "Major arm abductor.",
                    "Forms the rounded contour of the shoulder."
                ),

                specimen(
                    "Pectoralis major",
                    "Large fan-shaped anterior chest muscle.",
                    "Adducts and medially rotates the humerus.",
                    "Superficial on the anterior thorax."
                ),

                specimen(
                    "Latissimus dorsi",
                    "Broad superficial muscle of the lower posterior trunk.",
                    "Extends, adducts and medially rotates the humerus.",
                    "Large sheet-like back muscle."
                ),

                specimen(
                    "Biceps brachii",
                    "Prominent anterior arm muscle with two proximal heads.",
                    "Flexes the elbow and supinates the forearm.",
                    "Anterior upper arm."
                ),

                specimen(
                    "Triceps brachii",
                    "Large posterior arm muscle.",
                    "Extends the elbow.",
                    "Posterior upper arm."
                ),

                specimen(
                    "Rectus abdominis",
                    "Paired vertical abdominal muscles.",
                    "Flex the trunk and compress abdominal contents.",
                    "Forms the segmented anterior abdominal wall."
                ),

                specimen(
                    "Gluteus maximus",
                    "Large superficial posterior hip muscle.",
                    "Extends the hip.",
                    "Large buttock muscle."
                ),

                specimen(
                    "Rectus femoris",
                    "Superficial central quadriceps muscle.",
                    "Extends the knee and assists hip flexion.",
                    "Anterior thigh."
                ),

                specimen(
                    "Gastrocnemius",
                    "Large superficial calf muscle with two heads.",
                    "Plantar flexes the ankle and assists knee flexion.",
                    "Forms the visible upper calf."
                )

            ],

            sections: [

                section(
                    "Use Location First",
                    [

                        "Muscle practicals become easier when the body region and surface are identified before the specific muscle.",

                        "Ask whether the specimen is anterior, posterior, medial or lateral.",

                        "Then use fiber direction, attachments and neighboring muscles to confirm identity."
                    ]
                ),

                section(
                    "Actions Follow Attachments",
                    [

                        "A muscle's action depends on which joint it crosses and the line of pull between origin and insertion.",

                        "For example, biceps brachii crosses the elbow anteriorly and produces flexion.",

                        "Triceps brachii crosses the posterior elbow and produces extension."
                    ]
                ),

                section(
                    "Practical Strategy",
                    [

                        "Use large landmark muscles as anchors. Once deltoid, pectoralis major, rectus abdominis, gluteus maximus and quadriceps are recognized, nearby muscles are easier to locate.",

                        "Do not identify a muscle only by memorized color on a model because different models use different colors.",

                        "Shape, location and attachments are more reliable."
                    ]
                )

            ],

            procedure: [

                "Identify body region.",

                "Determine anterior or posterior surface.",

                "Find a major anchor muscle.",

                "Observe fiber direction.",

                "Relate the muscle to the joint it crosses.",

                "State one major action."

            ],

            pitfalls: [

                "Memorizing model colors instead of anatomy.",

                "Confusing biceps and triceps surfaces.",

                "Calling all quadriceps muscles rectus femoris.",

                "Ignoring muscle action when identification is uncertain."

            ],

            memory: [

                "Biceps = anterior arm flexor.",

                "Triceps = posterior arm extensor.",

                "Quadriceps = anterior thigh knee extensors."

            ],

            clinical: {

                title: "Muscle Weakness",

                scenario:
                    "A patient has difficulty standing from a chair.",

                connection:
                    "Hip and knee extensor strength, especially gluteal and quadriceps function, contributes significantly to sit-to-stand movement."

            }

        }),


        station({

            id: "neuromuscular-lab",

            number: 14,

            module: 4,

            title: "Sarcomere, Neuromuscular Junction & Muscle Physiology",

            description:
                "Identify sarcomere structures and sequence excitation-contraction coupling.",

            objectives: [

                "Identify sarcomere boundaries.",

                "Differentiate actin and myosin.",

                "Recognize Z discs, A bands and I bands.",

                "Explain neuromuscular transmission.",

                "Sequence excitation-contraction coupling."

            ],

            specimens: [

                specimen(
                    "Z disc",
                    "Boundary structure at each end of a sarcomere.",
                    "Anchors thin filaments and defines sarcomere length.",
                    "A sarcomere runs from Z disc to Z disc."
                ),

                specimen(
                    "Thin filament",
                    "Actin-containing filament attached to Z discs.",
                    "Interacts with myosin during contraction.",
                    "Thin filaments slide toward the center during contraction."
                ),

                specimen(
                    "Thick filament",
                    "Myosin-containing filament concentrated in the center of a sarcomere.",
                    "Myosin heads generate force through cross-bridge cycling.",
                    "The A band corresponds to the length of thick filaments."
                ),

                specimen(
                    "Neuromuscular junction",
                    "Synapse between a motor neuron and skeletal muscle fiber.",
                    "Transmits motor-neuron signals to skeletal muscle.",
                    "Acetylcholine is the major neurotransmitter."
                ),

                specimen(
                    "Sarcoplasmic reticulum",
                    "Specialized smooth endoplasmic reticulum surrounding myofibrils.",
                    "Stores and releases calcium needed for contraction.",
                    "Calcium release allows actin-myosin interaction."
                )

            ],

            sections: [

                section(
                    "Sarcomere",
                    [

                        "The sarcomere is the functional contractile unit of skeletal and cardiac muscle.",

                        "Thin actin filaments extend inward from Z discs while thick myosin filaments occupy the central region.",

                        "During contraction the filaments slide past one another rather than becoming shorter themselves."
                    ]
                ),

                section(
                    "Neuromuscular Junction",
                    [

                        "A motor-neuron action potential triggers acetylcholine release at the neuromuscular junction.",

                        "Acetylcholine binds receptors on the muscle membrane, producing depolarization and a muscle action potential.",

                        "Acetylcholinesterase helps terminate the signal."
                    ]
                ),

                section(
                    "Calcium and Contraction",
                    [

                        "The muscle action potential triggers calcium release from the sarcoplasmic reticulum.",

                        "Calcium binds troponin, allowing tropomyosin to move away from actin's myosin-binding sites.",

                        "Myosin then interacts with actin through ATP-dependent cross-bridge cycling."
                    ]
                )

            ],

            procedure: [

                "Identify Z discs.",

                "Locate thin and thick filaments.",

                "Trace the action potential from motor neuron to muscle membrane.",

                "Follow calcium release.",

                "Explain cross-bridge formation.",

                "Explain ATP-dependent relaxation."

            ],

            pitfalls: [

                "Saying actin and myosin physically shorten.",

                "Forgetting calcium's role.",

                "Forgetting ATP is required for both cycling and detachment.",

                "Confusing the neuromuscular junction with a neuron-neuron synapse."

            ],

            memory: [

                "Z to Z = sarcomere.",

                "Calcium exposes binding sites.",

                "ATP powers cross-bridge cycling."

            ],

            clinical: {

                title: "Neuromuscular Transmission",

                scenario:
                    "A disorder reduces acetylcholine receptor function at the neuromuscular junction.",

                connection:
                    "Reduced receptor activity impairs muscle-fiber depolarization and can produce weakness."

            }

        }),


        station({

            id: "brain-spinal-lab",

            number: 15,

            module: 4,

            title: "Brain & Spinal Cord Practical",

            description:
                "Identify major brain lobes, cerebellum, brainstem, ventricles and spinal-cord regions.",

            objectives: [

                "Identify cerebral lobes.",

                "Identify cerebellum.",

                "Identify major brainstem regions.",

                "Recognize spinal-cord gray and white matter.",

                "Identify major meninges."

            ],

            specimens: [

                specimen(
                    "Frontal lobe",
                    "Anterior cerebral lobe.",
                    "Supports executive function, voluntary motor planning and aspects of language and behavior.",
                    "Located anterior to the central sulcus."
                ),

                specimen(
                    "Parietal lobe",
                    "Superior-posterior cerebral lobe.",
                    "Processes somatic sensory information and spatial relationships.",
                    "Located posterior to the central sulcus."
                ),

                specimen(
                    "Temporal lobe",
                    "Lateral-inferior cerebral lobe.",
                    "Important for hearing, memory and language-related processing.",
                    "Located inferior to the lateral sulcus."
                ),

                specimen(
                    "Occipital lobe",
                    "Posterior cerebral lobe.",
                    "Contains major visual-processing cortex.",
                    "Most posterior cerebral lobe."
                ),

                specimen(
                    "Cerebellum",
                    "Highly folded structure posterior to the brainstem.",
                    "Coordinates movement, balance and motor learning.",
                    "Smaller than cerebrum and has distinctive folia."
                ),

                specimen(
                    "Medulla oblongata",
                    "Inferior portion of the brainstem continuous with spinal cord.",
                    "Contains pathways and centers involved in vital autonomic regulation.",
                    "Lowest brainstem region."
                ),

                specimen(
                    "Spinal cord gray matter",
                    "Central butterfly- or H-shaped region in spinal-cord cross section.",
                    "Contains neuron cell bodies, dendrites and synapses.",
                    "Gray matter is central in the spinal cord."
                ),

                specimen(
                    "Dura mater",
                    "Tough outer meningeal layer.",
                    "Protects the central nervous system.",
                    "Remember dura = durable outer layer."
                )

            ],

            sections: [

                section(
                    "Cerebrum",
                    [

                        "The cerebrum is divided into lobes named largely for overlying skull bones.",

                        "Sulci and gyri increase cortical surface area.",

                        "The central sulcus is a useful landmark separating frontal and parietal lobes."
                    ]
                ),

                section(
                    "Brainstem and Cerebellum",
                    [

                        "The brainstem includes midbrain, pons and medulla oblongata.",

                        "The cerebellum lies posterior to the brainstem and coordinates movement and balance.",

                        "Damage to different brain regions produces distinct neurologic findings."
                    ]
                ),

                section(
                    "Spinal Cord",
                    [

                        "Spinal-cord gray matter forms a central H-shaped region surrounded by white matter.",

                        "Posterior regions receive sensory input while anterior horn regions contain somatic motor neuron cell bodies.",

                        "Meninges surrounding the central nervous system include dura mater, arachnoid mater and pia mater."
                    ]
                )

            ],

            procedure: [

                "Orient anterior versus posterior brain surfaces.",

                "Identify cerebrum, cerebellum and brainstem.",

                "Locate the cerebral lobes.",

                "Identify midbrain, pons and medulla.",

                "Examine a spinal-cord cross section.",

                "Identify gray matter, white matter and meninges."

            ],

            pitfalls: [

                "Confusing cerebellum with occipital lobe.",

                "Reversing pons and medulla.",

                "Forgetting that spinal-cord gray matter is central.",

                "Confusing dura with pia mater."

            ],

            memory: [

                "Brainstem: midbrain → pons → medulla.",

                "Spinal cord gray = central butterfly.",

                "Dura = durable outer layer."

            ],

            clinical: {

                title: "Cerebellar Injury",

                scenario:
                    "A patient develops poor coordination and an unsteady gait.",

                connection:
                    "Cerebellar dysfunction can impair coordination and balance even when basic muscle strength remains relatively preserved."

            }

        }),


        station({

            id: "pns-reflex-lab",

            number: 16,

            module: 4,

            title: "Peripheral Nerves, Reflexes & Autonomic Pathways",

            description:
                "Review spinal nerves, reflex arcs, sensory and motor pathways and autonomic divisions.",

            objectives: [

                "Sequence a basic reflex arc.",

                "Differentiate sensory and motor neurons.",

                "Identify dorsal and ventral spinal roots.",

                "Differentiate sympathetic and parasympathetic effects.",

                "Connect reflex findings with nervous-system function."

            ],

            specimens: [

                specimen(
                    "Dorsal root",
                    "Posterior root entering the spinal cord.",
                    "Carries sensory information toward the central nervous system.",
                    "Dorsal = sensory."
                ),

                specimen(
                    "Dorsal root ganglion",
                    "Swelling on the dorsal root.",
                    "Contains sensory neuron cell bodies.",
                    "Look for a distinct enlargement on the dorsal root."
                ),

                specimen(
                    "Ventral root",
                    "Anterior root leaving the spinal cord.",
                    "Carries motor axons away from the central nervous system.",
                    "Ventral = motor."
                ),

                specimen(
                    "Spinal nerve",
                    "Short mixed nerve formed after dorsal and ventral roots join.",
                    "Carries both sensory and motor axons.",
                    "Mixed after the roots merge."
                ),

                specimen(
                    "Sympathetic division",
                    "Autonomic division associated with widespread mobilization during stress.",
                    "Increases cardiac output and redirects physiological resources.",
                    "Think fight or flight."
                ),

                specimen(
                    "Parasympathetic division",
                    "Autonomic division associated with maintenance and digestive functions.",
                    "Supports digestion, energy conservation and routine homeostasis.",
                    "Think rest and digest."
                )

            ],

            sections: [

                section(
                    "Reflex Arc",
                    [

                        "A simple reflex arc includes a receptor, sensory neuron, integration center, motor neuron and effector.",

                        "Reflexes can occur rapidly because the spinal cord can process the response without waiting for conscious cortical processing.",

                        "The brain still receives information about the stimulus."
                    ]
                ),

                section(
                    "Roots and Nerves",
                    [

                        "Dorsal roots carry sensory information into the spinal cord.",

                        "Ventral roots carry motor information out.",

                        "After these roots join, the spinal nerve contains both sensory and motor axons."
                    ]
                ),

                section(
                    "Autonomic Divisions",
                    [

                        "Sympathetic and parasympathetic divisions often produce opposing effects on the same organ, but the relationship is not always a simple on-off opposition.",

                        "Sympathetic activity supports increased cardiovascular output during stress.",

                        "Parasympathetic activity supports digestion and energy conservation."
                    ]
                )

            ],

            procedure: [

                "Identify receptor and sensory pathway.",

                "Trace input through the dorsal root.",

                "Locate the integration region.",

                "Trace motor output through the ventral root.",

                "Identify the effector.",

                "Compare sympathetic and parasympathetic responses."

            ],

            pitfalls: [

                "Calling the dorsal root motor.",

                "Forgetting the dorsal root ganglion contains sensory neuron cell bodies.",

                "Calling the spinal nerve purely sensory.",

                "Assuming every autonomic effect is exactly opposite between divisions."

            ],

            memory: [

                "DAVE: Dorsal Afferent, Ventral Efferent.",

                "DRG = sensory cell bodies.",

                "Spinal nerve = mixed."

            ],

            clinical: {

                title: "Absent Reflex",

                scenario:
                    "A deep tendon reflex is absent on one side.",

                connection:
                    "The abnormality could involve the sensory limb, spinal integration, motor pathway, neuromuscular junction or muscle, so the reflex tests an entire circuit."

            }

        }),


        // ====================================================================
        // MODULE 5 — BLOOD / HEART / RESPIRATORY
        // ====================================================================

        station({

            id: "blood-smear",

            number: 17,

            module: 5,

            title: "Blood Smear & Formed Elements",

            description:
                "Identify erythrocytes, platelets and major leukocytes on a blood smear.",

            objectives: [

                "Identify erythrocytes.",

                "Identify platelets.",

                "Differentiate major leukocyte types.",

                "Use nucleus shape and granules for identification.",

                "Connect blood-cell morphology with function."

            ],

            specimens: [

                specimen(
                    "Erythrocyte",
                    "Small pink biconcave cell lacking a nucleus.",
                    "Transports oxygen and participates in carbon-dioxide transport.",
                    "Most numerous formed element in a normal blood smear."
                ),

                specimen(
                    "Platelet",
                    "Very small purple-staining cell fragment.",
                    "Participates in primary hemostasis.",
                    "Much smaller than erythrocytes."
                ),

                specimen(
                    "Neutrophil",
                    "Leukocyte with multilobed nucleus and pale fine granules.",
                    "Phagocytoses microbes and participates in acute inflammation.",
                    "Look for 3–5 nuclear lobes."
                ),

                specimen(
                    "Lymphocyte",
                    "Leukocyte with large round nucleus and thin rim of cytoplasm.",
                    "Includes major adaptive immune cell populations.",
                    "Nucleus occupies most of the cell."
                ),

                specimen(
                    "Monocyte",
                    "Large leukocyte with kidney-shaped or folded nucleus.",
                    "Can enter tissues and differentiate into macrophage-like cells.",
                    "Usually the largest common circulating leukocyte."
                ),

                specimen(
                    "Eosinophil",
                    "Bilobed nucleus with prominent red-orange granules.",
                    "Participates in parasite defense and allergic inflammation.",
                    "Orange-red granules are the key clue."
                ),

                specimen(
                    "Basophil",
                    "Leukocyte with coarse dark blue-purple granules often obscuring the nucleus.",
                    "Releases inflammatory mediators.",
                    "Rare cell with very dark granules."
                )

            ],

            sections: [

                section(
                    "Erythrocytes and Platelets",
                    [

                        "Erythrocytes dominate the visual field in a normal peripheral smear.",

                        "Their biconcave shape increases surface area for gas exchange and flexibility through capillaries.",

                        "Platelets are much smaller fragments involved in clot formation."
                    ]
                ),

                section(
                    "Leukocyte Identification",
                    [

                        "Neutrophils have multilobed nuclei. Lymphocytes usually have large round nuclei. Monocytes are large with indented nuclei.",

                        "Eosinophils contain prominent red-orange granules. Basophils contain dark blue-purple granules.",

                        "Nucleus shape is often the fastest initial practical clue."
                    ]
                ),

                section(
                    "Clinical Interpretation",
                    [

                        "Cell identification is different from determining whether the count is normal.",

                        "A smear can reveal abnormalities in cell number, size, shape or maturity.",

                        "Automated blood counts and microscopic review provide complementary information."
                    ]
                )

            ],

            procedure: [

                "Use low power to find the monolayer region.",

                "Move to higher magnification.",

                "Identify abundant erythrocytes.",

                "Locate platelets.",

                "Find leukocytes.",

                "Use nucleus shape and granules to classify each leukocyte."

            ],

            pitfalls: [

                "Calling platelets small lymphocytes.",

                "Confusing monocytes and lymphocytes.",

                "Ignoring granule color.",

                "Trying to classify leukocytes using size alone."

            ],

            memory: [

                "Neutrophil = multilobed.",

                "Lymphocyte = large round nucleus.",

                "Monocyte = kidney-shaped nucleus."

            ],

            clinical: {

                title: "Acute Bacterial Infection",

                scenario:
                    "A patient's neutrophil count increases during an acute bacterial infection.",

                connection:
                    "Neutrophils are major phagocytic cells involved in the early response to many bacterial infections."

            }

        }),


        station({

            id: "heart-lab",

            number: 18,

            module: 5,

            title: "Heart Anatomy & Blood Flow",

            description:
                "Identify chambers, valves, vessels and trace blood flow through the heart.",

            objectives: [

                "Identify all four heart chambers.",

                "Identify AV and semilunar valves.",

                "Identify major vessels.",

                "Trace pulmonary and systemic flow.",

                "Differentiate oxygenated and deoxygenated flow locations."

            ],

            specimens: [

                specimen(
                    "Right atrium",
                    "Thin-walled superior-right chamber receiving systemic venous blood.",
                    "Receives blood from venae cavae and coronary sinus.",
                    "Blood enters here before the tricuspid valve."
                ),

                specimen(
                    "Tricuspid valve",
                    "Right atrioventricular valve.",
                    "Prevents backflow from right ventricle to right atrium.",
                    "Located between right atrium and right ventricle."
                ),

                specimen(
                    "Right ventricle",
                    "Inferior chamber pumping blood into the pulmonary trunk.",
                    "Drives pulmonary circulation.",
                    "Wall is thinner than left ventricular wall."
                ),

                specimen(
                    "Pulmonary semilunar valve",
                    "Valve at the exit of the right ventricle.",
                    "Prevents backflow from pulmonary trunk into right ventricle.",
                    "One of two semilunar valves."
                ),

                specimen(
                    "Left atrium",
                    "Posterior-superior chamber receiving pulmonary veins.",
                    "Receives oxygenated blood from lungs.",
                    "Feeds blood through the mitral valve."
                ),

                specimen(
                    "Mitral valve",
                    "Left atrioventricular valve with two cusps.",
                    "Prevents backflow from left ventricle to left atrium.",
                    "Also called bicuspid valve."
                ),

                specimen(
                    "Left ventricle",
                    "Thick-walled chamber forming much of the heart's left border and apex.",
                    "Pumps blood into systemic circulation.",
                    "Has the thickest myocardial wall."
                ),

                specimen(
                    "Aorta",
                    "Largest systemic artery leaving the left ventricle.",
                    "Distributes oxygenated blood to systemic circulation.",
                    "Arises after the aortic semilunar valve."
                )

            ],

            sections: [

                section(
                    "Right Heart",
                    [

                        "Systemic venous blood enters the right atrium through the superior and inferior vena cava.",

                        "It crosses the tricuspid valve into the right ventricle.",

                        "The right ventricle pumps blood through the pulmonary valve into the pulmonary trunk."
                    ]
                ),

                section(
                    "Left Heart",
                    [

                        "Pulmonary veins return oxygenated blood from the lungs to the left atrium.",

                        "Blood crosses the mitral valve into the left ventricle.",

                        "The left ventricle pumps through the aortic valve into the aorta."
                    ]
                ),

                section(
                    "Valve Function",
                    [

                        "Heart valves open and close according to pressure gradients rather than active muscular opening.",

                        "AV valves prevent ventricular-to-atrial backflow during ventricular contraction.",

                        "Semilunar valves prevent arterial-to-ventricular backflow during ventricular relaxation."
                    ]
                )

            ],

            procedure: [

                "Identify the apex.",

                "Find the thick-walled left ventricle.",

                "Orient right versus left chambers.",

                "Locate AV valves.",

                "Locate semilunar valves.",

                "Trace blood flow in correct sequence."

            ],

            pitfalls: [

                "Calling pulmonary arteries oxygenated because they are arteries.",

                "Calling pulmonary veins deoxygenated because they are veins.",

                "Confusing mitral and tricuspid valves.",

                "Forgetting the left ventricle has the thickest wall."

            ],

            memory: [

                "Right heart → lungs.",

                "Left heart → body.",

                "Tricuspid right, mitral left."

            ],

            clinical: {

                title: "Left Ventricular Failure",

                scenario:
                    "The left ventricle cannot pump effectively.",

                connection:
                    "Pressure can back up into the pulmonary circulation, contributing to pulmonary congestion and shortness of breath."

            },

            questions: [

                customMCQ(
                    "heart1",
                    "Which structure receives blood immediately after it passes through the tricuspid valve?",
                    [
                        "Right ventricle",
                        "Left ventricle",
                        "Pulmonary vein",
                        "Aorta"
                    ],
                    0,
                    "The tricuspid valve lies between the right atrium and right ventricle."
                )

            ]

        }),


        station({

            id: "vessel-lab",

            number: 19,

            module: 5,

            title: "Arteries, Veins & Capillaries",

            description:
                "Differentiate major vessel types using wall structure, lumen size and function.",

            objectives: [

                "Differentiate arteries and veins.",

                "Identify tunica layers.",

                "Explain capillary structure.",

                "Relate wall thickness to pressure.",

                "Recognize venous valves."

            ],

            specimens: [

                specimen(
                    "Artery",
                    "Vessel with relatively thick muscular wall and rounder lumen.",
                    "Carries blood away from the heart under relatively high pressure.",
                    "Look for a thick tunica media."
                ),

                specimen(
                    "Vein",
                    "Vessel with thinner wall and often larger irregular lumen.",
                    "Returns blood toward the heart.",
                    "Some veins contain valves."
                ),

                specimen(
                    "Capillary",
                    "Microscopic vessel composed mainly of a single endothelial layer.",
                    "Allows exchange between blood and tissues.",
                    "Wall is only one cell layer thick."
                ),

                specimen(
                    "Tunica intima",
                    "Innermost vessel layer containing endothelium.",
                    "Provides a smooth blood-contacting surface.",
                    "Directly borders the lumen."
                ),

                specimen(
                    "Tunica media",
                    "Middle vessel layer containing smooth muscle and elastic tissue.",
                    "Regulates vessel diameter and contributes to pressure control.",
                    "Usually thicker in arteries."
                ),

                specimen(
                    "Venous valve",
                    "Flap-like structure inside many medium veins.",
                    "Reduces backward blood flow.",
                    "Common in limb veins."
                )

            ],

            sections: [

                section(
                    "Arteries",
                    [

                        "Arteries carry blood away from the heart and generally experience higher pressure than veins.",

                        "Their walls contain more smooth muscle and elastic tissue, especially within the tunica media.",

                        "The thicker wall helps withstand and regulate pressure."
                    ]
                ),

                section(
                    "Veins",
                    [

                        "Veins return blood to the heart at lower pressure.",

                        "They often have larger lumens and thinner walls relative to arteries of similar external diameter.",

                        "Valves are important in many limb veins where blood must move against gravity."
                    ]
                ),

                section(
                    "Capillaries",
                    [

                        "Capillary walls are extremely thin to support exchange of gases, nutrients and wastes.",

                        "Blood flow through capillary networks is slow enough to permit efficient diffusion.",

                        "Different capillary types vary in permeability according to tissue function."
                    ]
                )

            ],

            procedure: [

                "Locate the vessel lumen.",

                "Compare wall thickness with lumen diameter.",

                "Identify tunica intima and media.",

                "Look for valves.",

                "Use wall structure to classify the vessel."

            ],

            pitfalls: [

                "Using oxygen content to define artery versus vein.",

                "Calling every large lumen a vein without checking the wall.",

                "Forgetting pulmonary arteries still carry blood away from the heart.",

                "Ignoring vessel valves."

            ],

            memory: [

                "Arteries = Away.",

                "Veins = toward heart.",

                "Capillary = one-cell-thick exchange vessel."

            ],

            clinical: {

                title: "Venous Insufficiency",

                scenario:
                    "Venous valves in the legs fail to close effectively.",

                connection:
                    "Blood can pool in dependent veins, contributing to venous distention and edema."

            }

        }),


        station({

            id: "respiratory-lab",

            number: 20,

            module: 5,

            title: "Respiratory Anatomy & Lung Practical",

            description:
                "Identify conducting and respiratory structures from nasal cavity through alveoli.",

            objectives: [

                "Identify trachea and bronchi.",

                "Differentiate bronchi and bronchioles.",

                "Identify alveoli.",

                "Recognize respiratory epithelium.",

                "Trace air movement."

            ],

            specimens: [

                specimen(
                    "Trachea",
                    "Airway supported by C-shaped hyaline cartilage rings.",
                    "Conducts air between larynx and bronchi.",
                    "Cartilage rings are a major identification clue."
                ),

                specimen(
                    "Primary bronchus",
                    "Large airway entering a lung.",
                    "Conducts air from trachea into each lung.",
                    "Bronchi contain cartilage."
                ),

                specimen(
                    "Bronchiole",
                    "Small airway lacking cartilage plates.",
                    "Regulates airflow using smooth muscle.",
                    "Absence of cartilage helps distinguish bronchioles from bronchi."
                ),

                specimen(
                    "Alveolus",
                    "Microscopic thin-walled air sac.",
                    "Primary site of gas exchange.",
                    "Look for many open air spaces separated by thin septa."
                ),

                specimen(
                    "Type I alveolar cell",
                    "Extremely thin squamous alveolar epithelial cell.",
                    "Forms most of the gas-exchange surface.",
                    "Thinness minimizes diffusion distance."
                ),

                specimen(
                    "Type II alveolar cell",
                    "Cuboidal alveolar cell.",
                    "Produces pulmonary surfactant.",
                    "Surfactant reduces alveolar surface tension."
                )

            ],

            sections: [

                section(
                    "Conducting Zone",
                    [

                        "The conducting zone moves, filters, warms and humidifies air.",

                        "The trachea and larger bronchi use cartilage to help maintain airway patency.",

                        "Bronchioles lack cartilage and rely more heavily on smooth muscle to regulate diameter."
                    ]
                ),

                section(
                    "Respiratory Zone",
                    [

                        "Gas exchange occurs primarily in respiratory bronchioles, alveolar ducts and alveoli.",

                        "The alveolar-capillary barrier is thin to minimize diffusion distance.",

                        "Type II alveolar cells produce surfactant, reducing surface tension."
                    ]
                ),

                section(
                    "Airflow Sequence",
                    [

                        "Air passes from upper airways to trachea, bronchi, bronchioles and finally alveoli.",

                        "As airway branches increase in number, individual airway diameter decreases but total cross-sectional area rises.",

                        "Airway obstruction at different levels produces different clinical patterns."
                    ]
                )

            ],

            procedure: [

                "Identify tracheal cartilage.",

                "Follow branching into bronchi.",

                "Identify smaller bronchioles.",

                "Locate alveolar regions.",

                "Compare wall thickness and cartilage presence.",

                "Trace airflow in sequence."

            ],

            pitfalls: [

                "Calling bronchioles small bronchi without checking for cartilage.",

                "Confusing alveoli with blood vessels.",

                "Forgetting surfactant comes from type II cells.",

                "Forgetting gas exchange occurs primarily in alveoli."

            ],

            memory: [

                "Bronchus = cartilage.",

                "Bronchiole = no cartilage.",

                "Alveoli = gas exchange."

            ],

            clinical: {

                title: "Bronchoconstriction",

                scenario:
                    "Bronchiolar smooth muscle constricts during an asthma exacerbation.",

                connection:
                    "Reduced bronchiolar diameter increases airway resistance and makes ventilation more difficult."

            }

        }),


        // ====================================================================
        // MODULE 6
        // ====================================================================

        station({

            id: "digestive-lab",

            number: 21,

            module: 6,

            title: "Digestive System Practical",

            description:
                "Identify major digestive organs and microscopic structures related to digestion and absorption.",

            objectives: [

                "Trace the gastrointestinal tract.",

                "Identify stomach and small intestine.",

                "Recognize intestinal villi.",

                "Identify liver and gallbladder.",

                "Identify pancreas."

            ],

            specimens: [

                specimen(
                    "Stomach",
                    "J-shaped muscular organ between esophagus and small intestine.",
                    "Stores, mixes and begins substantial protein digestion.",
                    "Look for rugae on the internal surface."
                ),

                specimen(
                    "Small intestine",
                    "Long coiled tube between stomach and large intestine.",
                    "Primary site of digestion and nutrient absorption.",
                    "Includes duodenum, jejunum and ileum."
                ),

                specimen(
                    "Villus",
                    "Fingerlike projection of small-intestinal mucosa.",
                    "Increases surface area for absorption.",
                    "Large number of villi gives intestinal mucosa a textured appearance."
                ),

                specimen(
                    "Large intestine",
                    "Wider terminal intestinal region with haustra.",
                    "Absorbs water and electrolytes and forms feces.",
                    "Haustra are major external landmarks."
                ),

                specimen(
                    "Liver",
                    "Large organ in the right upper abdomen.",
                    "Processes nutrients, produces bile and performs metabolic functions.",
                    "Largest internal glandular organ."
                ),

                specimen(
                    "Gallbladder",
                    "Small sac located on the inferior liver surface.",
                    "Stores and concentrates bile.",
                    "It does not produce bile."
                ),

                specimen(
                    "Pancreas",
                    "Elongated gland posterior to the stomach.",
                    "Produces digestive enzymes and endocrine hormones.",
                    "Has both exocrine and endocrine functions."
                )

            ],

            sections: [

                section(
                    "GI Tract",
                    [

                        "The gastrointestinal tract forms a continuous tube from mouth to anus.",

                        "Major segments include esophagus, stomach, small intestine and large intestine.",

                        "Each region has structural specializations related to storage, digestion, absorption or elimination."
                    ]
                ),

                section(
                    "Accessory Organs",
                    [

                        "The liver produces bile. The gallbladder stores and concentrates bile.",

                        "The pancreas releases digestive enzymes and bicarbonate into the small intestine.",

                        "Accessory organs support digestion even though food does not pass directly through them."
                    ]
                ),

                section(
                    "Absorptive Surface",
                    [

                        "Circular folds, villi and microvilli greatly increase small-intestinal surface area.",

                        "Most nutrients are absorbed through this specialized mucosa.",

                        "Damage to villi can impair nutrient absorption."
                    ]
                )

            ],

            procedure: [

                "Trace the GI tract from esophagus onward.",

                "Identify stomach landmarks.",

                "Separate small from large intestine.",

                "Identify liver, gallbladder and pancreas.",

                "Examine villi microscopically."

            ],

            pitfalls: [

                "Saying gallbladder produces bile.",

                "Confusing pancreas with spleen.",

                "Calling large-intestinal haustra small-intestinal villi.",

                "Forgetting most nutrient absorption occurs in small intestine."

            ],

            memory: [

                "Liver makes bile.",

                "Gallbladder stores bile.",

                "Small intestine absorbs most nutrients."

            ],

            clinical: {

                title: "Villus Damage",

                scenario:
                    "A disease damages intestinal villi.",

                connection:
                    "Reduced absorptive surface area can lead to malabsorption, weight loss and nutrient deficiencies."

            }

        }),


        station({

            id: "urinary-lab",

            number: 22,

            module: 6,

            title: "Kidney, Nephron & Urinary Tract Practical",

            description:
                "Identify kidney regions, nephron structures, ureters and urinary bladder.",

            objectives: [

                "Identify renal cortex and medulla.",

                "Identify renal pyramids.",

                "Recognize glomerulus and renal tubules.",

                "Trace urine flow.",

                "Relate nephron structure to filtration and reabsorption."

            ],

            specimens: [

                specimen(
                    "Renal cortex",
                    "Outer kidney region.",
                    "Contains renal corpuscles and portions of renal tubules.",
                    "Cortex lies superficial to medulla."
                ),

                specimen(
                    "Renal medulla",
                    "Inner kidney region containing renal pyramids.",
                    "Contains loops of Henle and collecting structures.",
                    "Organized into pyramids."
                ),

                specimen(
                    "Renal pyramid",
                    "Triangular medullary region.",
                    "Contains tubules and collecting ducts carrying filtrate toward the papilla.",
                    "Triangle points toward a minor calyx."
                ),

                specimen(
                    "Glomerulus",
                    "Tuft of capillaries inside the renal corpuscle.",
                    "Filters plasma to begin urine formation.",
                    "Looks like a dense capillary ball."
                ),

                specimen(
                    "Bowman's capsule",
                    "Cup-like epithelial structure surrounding the glomerulus.",
                    "Collects glomerular filtrate.",
                    "Together with glomerulus forms renal corpuscle."
                ),

                specimen(
                    "Ureter",
                    "Muscular tube carrying urine from kidney to bladder.",
                    "Propels urine through peristaltic contractions.",
                    "One ureter leaves each kidney."
                ),

                specimen(
                    "Urinary bladder",
                    "Distensible muscular organ in the pelvis.",
                    "Stores urine before urination.",
                    "Lined by transitional epithelium."
                )

            ],

            sections: [

                section(
                    "Kidney Regions",
                    [

                        "The kidney has an outer cortex and inner medulla.",

                        "The medulla contains renal pyramids whose papillae drain toward minor calyces.",

                        "Urine then passes through major calyces and renal pelvis before entering the ureter."
                    ]
                ),

                section(
                    "Nephron",
                    [

                        "The nephron is the functional unit responsible for filtration, reabsorption and secretion.",

                        "Filtration begins at the renal corpuscle.",

                        "The resulting tubular fluid passes through proximal tubule, loop of Henle, distal tubule and collecting system."
                    ]
                ),

                section(
                    "Urine Flow",
                    [

                        "Collecting ducts drain through papillary regions into calyces.",

                        "Urine flows to the renal pelvis, ureter, urinary bladder and urethra.",

                        "Obstruction anywhere along the pathway can impair urinary drainage."
                    ]
                )

            ],

            procedure: [

                "Orient kidney cortex and medulla.",

                "Identify pyramids and pelvis.",

                "Trace urine toward ureter.",

                "Examine glomeruli microscopically.",

                "Identify tubular profiles.",

                "Trace urinary tract to bladder."

            ],

            pitfalls: [

                "Reversing cortex and medulla.",

                "Calling the glomerulus the entire nephron.",

                "Skipping renal pelvis when tracing urine flow.",

                "Confusing ureter and urethra."

            ],

            memory: [

                "Cortex outside, medulla inside.",

                "Glomerulus = filtration.",

                "Ureter: kidney → bladder."

            ],

            clinical: {

                title: "Urinary Obstruction",

                scenario:
                    "A ureter becomes obstructed by a stone.",

                connection:
                    "Urine can back up toward the kidney, increasing pressure within the collecting system."

            }

        }),


        station({

            id: "endocrine-lab",

            number: 23,

            module: 6,

            title: "Endocrine Gland Identification",

            description:
                "Identify major endocrine glands and connect anatomy with hormone function.",

            objectives: [

                "Identify pituitary and thyroid glands.",

                "Identify parathyroid and adrenal glands.",

                "Recognize pancreatic islets.",

                "Relate gland location to major hormones.",

                "Differentiate endocrine and exocrine tissue."

            ],

            specimens: [

                specimen(
                    "Pituitary gland",
                    "Small gland attached to the hypothalamus by the infundibulum.",
                    "Releases hormones regulating multiple endocrine systems.",
                    "Located in the sella turcica."
                ),

                specimen(
                    "Thyroid gland",
                    "Butterfly-shaped gland anterior to the trachea.",
                    "Produces thyroid hormones and calcitonin.",
                    "Two lobes connected by an isthmus."
                ),

                specimen(
                    "Parathyroid gland",
                    "Small glands usually on the posterior thyroid surface.",
                    "Produce parathyroid hormone for calcium regulation.",
                    "Small and easily confused with surrounding tissue."
                ),

                specimen(
                    "Adrenal gland",
                    "Triangular or crescent-shaped gland on the superior kidney.",
                    "Produces cortical steroid hormones and medullary catecholamines.",
                    "Sits on top of kidney."
                ),

                specimen(
                    "Pancreatic islet",
                    "Pale-staining cluster within darker exocrine pancreas.",
                    "Contains endocrine cells including insulin- and glucagon-producing cells.",
                    "Islets appear lighter than surrounding acini."
                )

            ],

            sections: [

                section(
                    "Pituitary and Thyroid",
                    [

                        "The pituitary connects structurally and functionally with the hypothalamus.",

                        "The thyroid sits anterior to the trachea and produces hormones influencing metabolism.",

                        "Parathyroid glands are much smaller and regulate calcium through parathyroid hormone."
                    ]
                ),

                section(
                    "Adrenal Gland",
                    [

                        "The adrenal cortex and medulla have different embryologic origins and hormone products.",

                        "The cortex produces steroid hormones including cortisol and aldosterone.",

                        "The medulla releases catecholamines such as epinephrine."
                    ]
                ),

                section(
                    "Pancreatic Islets",
                    [

                        "Most pancreatic tissue is exocrine and produces digestive enzymes.",

                        "Endocrine islets are scattered within this tissue.",

                        "Insulin and glucagon participate in blood-glucose regulation."
                    ]
                )

            ],

            procedure: [

                "Identify gland location on a body model.",

                "Compare gland size and neighboring structures.",

                "Examine thyroid follicles or pancreatic islets if slides are available.",

                "State one major hormone for each gland.",

                "Connect the hormone with a target function."

            ],

            pitfalls: [

                "Calling the pancreas purely endocrine.",

                "Confusing thyroid and parathyroid glands.",

                "Forgetting adrenal cortex and medulla produce different hormones.",

                "Confusing pituitary location with thyroid location."

            ],

            memory: [

                "Pituitary = sella turcica.",

                "Thyroid = anterior neck.",

                "Adrenal = on kidney."

            ],

            clinical: {

                title: "Adrenal Dysfunction",

                scenario:
                    "A disorder damages the adrenal cortex.",

                connection:
                    "Cortical hormone production may be impaired even though the adrenal medulla is a distinct functional region."

            }

        }),


        station({

            id: "male-reproductive-lab",

            number: 24,

            module: 6,

            title: "Male Reproductive System Practical",

            description:
                "Identify major male reproductive organs, ducts and microscopic testicular structures.",

            objectives: [

                "Identify testes and epididymis.",

                "Trace sperm transport.",

                "Identify vas deferens.",

                "Identify prostate and seminal vesicles.",

                "Recognize seminiferous tubules."

            ],

            specimens: [

                specimen(
                    "Testis",
                    "Male gonad located within the scrotum.",
                    "Produces sperm and testosterone.",
                    "Contains seminiferous tubules."
                ),

                specimen(
                    "Seminiferous tubule",
                    "Coiled microscopic tubule inside the testis.",
                    "Site of sperm production.",
                    "Multiple circular tubular profiles dominate testis histology."
                ),

                specimen(
                    "Epididymis",
                    "Long coiled duct attached to posterior testis.",
                    "Supports sperm maturation and storage.",
                    "Sperm pass here after leaving the testis."
                ),

                specimen(
                    "Vas deferens",
                    "Thick muscular duct transporting sperm from epididymis.",
                    "Propels sperm toward ejaculatory ducts.",
                    "Has a very thick smooth-muscle wall."
                ),

                specimen(
                    "Seminal vesicle",
                    "Paired gland posterior to bladder.",
                    "Contributes nutrient-rich seminal fluid.",
                    "Located superior-posterior to prostate."
                ),

                specimen(
                    "Prostate gland",
                    "Gland inferior to bladder surrounding proximal urethra.",
                    "Contributes secretions to semen.",
                    "Enlargement can affect urine flow."
                )

            ],

            sections: [

                section(
                    "Sperm Production",
                    [

                        "Spermatogenesis occurs inside seminiferous tubules of the testes.",

                        "Developing sperm move toward the tubule lumen and then through ducts toward the epididymis.",

                        "The epididymis supports additional maturation and storage."
                    ]
                ),

                section(
                    "Duct System",
                    [

                        "Sperm move from epididymis into the vas deferens.",

                        "The vas deferens joins ducts associated with accessory glands before entering the urethra.",

                        "Strong smooth muscle in the vas deferens helps propel sperm during ejaculation."
                    ]
                ),

                section(
                    "Accessory Glands",
                    [

                        "Seminal vesicles and prostate contribute much of the fluid portion of semen.",

                        "These secretions support sperm transport and function.",

                        "The prostate's location around the proximal urethra has clinical importance."
                    ]
                )

            ],

            procedure: [

                "Identify testes and scrotum.",

                "Trace epididymis.",

                "Follow vas deferens toward pelvic cavity.",

                "Identify seminal vesicles and prostate.",

                "Examine seminiferous tubules microscopically."

            ],

            pitfalls: [

                "Calling the epididymis the sperm-production site.",

                "Forgetting sperm are produced in seminiferous tubules.",

                "Confusing prostate and seminal vesicle locations.",

                "Skipping the vas deferens in sperm transport sequence."

            ],

            memory: [

                "Testis makes sperm.",

                "Epididymis matures/stores.",

                "Vas deferens transports."

            ],

            clinical: {

                title: "Prostate Enlargement",

                scenario:
                    "The prostate enlarges and compresses the urethra.",

                connection:
                    "Because the prostate surrounds the proximal urethra, enlargement can obstruct urinary flow."

            }

        }),


        station({

            id: "female-reproductive-lab",

            number: 25,

            module: 6,

            title: "Female Reproductive System Practical",

            description:
                "Identify ovaries, uterine tubes, uterus, endometrium and major reproductive structures.",

            objectives: [

                "Identify ovaries.",

                "Identify uterine tubes.",

                "Identify uterus and cervix.",

                "Recognize endometrium.",

                "Trace the pathway of an oocyte."

            ],

            specimens: [

                specimen(
                    "Ovary",
                    "Female gonad positioned lateral to the uterus.",
                    "Produces oocytes and ovarian hormones.",
                    "Follicles may be visible in histological sections."
                ),

                specimen(
                    "Uterine tube",
                    "Tube extending from the uterus toward the ovary.",
                    "Transports the oocyte and is the usual site of fertilization.",
                    "Also called fallopian tube."
                ),

                specimen(
                    "Uterus",
                    "Thick-walled muscular pelvic organ.",
                    "Supports implantation and fetal development.",
                    "Includes fundus, body and cervix."
                ),

                specimen(
                    "Endometrium",
                    "Inner mucosal lining of the uterus.",
                    "Undergoes cyclic changes and supports implantation.",
                    "Changes markedly through the uterine cycle."
                ),

                specimen(
                    "Myometrium",
                    "Thick smooth-muscle layer of the uterine wall.",
                    "Generates uterine contractions.",
                    "Much thicker than the endometrium."
                ),

                specimen(
                    "Cervix",
                    "Narrow inferior region of the uterus.",
                    "Connects uterine cavity with vagina.",
                    "Projects toward the upper vagina."
                )

            ],

            sections: [

                section(
                    "Ovary and Uterine Tube",
                    [

                        "Ovaries contain follicles at different developmental stages.",

                        "After ovulation, the oocyte is usually captured by the uterine tube.",

                        "Fertilization most commonly occurs within the uterine tube rather than the uterine cavity."
                    ]
                ),

                section(
                    "Uterine Wall",
                    [

                        "The uterus contains endometrium, myometrium and an outer covering.",

                        "The endometrium changes in response to ovarian hormones.",

                        "The myometrium is thick smooth muscle important during labor."
                    ]
                ),

                section(
                    "Cycle Relationships",
                    [

                        "Ovarian and uterine cycles are coordinated by changing hormone levels.",

                        "Endometrial proliferation and secretory changes prepare the uterus for possible implantation.",

                        "If pregnancy does not occur, functional endometrial tissue is shed during menstruation."
                    ]
                )

            ],

            procedure: [

                "Identify ovary and uterine tube.",

                "Locate uterus.",

                "Identify fundus, body and cervix.",

                "Examine uterine wall layers.",

                "Trace oocyte movement toward the uterus."

            ],

            pitfalls: [

                "Saying fertilization normally occurs in the uterus.",

                "Confusing endometrium and myometrium.",

                "Confusing ovary and uterine tube.",

                "Ignoring the cervix during uterine orientation."

            ],

            memory: [

                "Ovary → uterine tube → uterus.",

                "Endometrium = inner lining.",

                "Myometrium = muscle."

            ],

            clinical: {

                title: "Ectopic Pregnancy",

                scenario:
                    "An embryo implants within a uterine tube.",

                connection:
                    "Tubal implantation is dangerous because the uterine tube cannot safely support continued expansion of a pregnancy."

            }

        }),


        // ====================================================================
        // MODULE 7 — MICROBIOLOGY
        // ====================================================================

        station({

            id: "aseptic-technique",

            number: 26,

            module: 7,

            title: "Aseptic Technique & Culture Transfer",

            description:
                "Practice contamination prevention during microbial culture transfer.",

            objectives: [

                "Define aseptic technique.",

                "Explain why culture containers should remain open briefly.",

                "Use sterile loops correctly.",

                "Recognize contamination sources.",

                "Differentiate pure and mixed cultures."

            ],

            specimens: [

                specimen(
                    "Inoculating loop",
                    "Thin wire or disposable plastic instrument with a small loop.",
                    "Transfers microbial inoculum.",
                    "Must be sterile before contacting a pure culture."
                ),

                specimen(
                    "Culture tube",
                    "Tube containing broth or agar growth medium.",
                    "Supports growth of microorganisms.",
                    "Keep caps controlled and openings exposed briefly."
                ),

                specimen(
                    "Agar plate",
                    "Petri dish containing solid nutrient medium.",
                    "Supports isolated colonies and surface growth.",
                    "Incubation orientation depends on laboratory protocol."
                ),

                specimen(
                    "Pure culture",
                    "Culture containing one microbial species or strain.",
                    "Allows reliable study of a single organism.",
                    "Unexpected colony types suggest possible contamination."
                ),

                specimen(
                    "Contamination",
                    "Unintended introduction of organisms into a specimen or culture.",
                    "Can produce inaccurate observations or laboratory results.",
                    "Aseptic technique minimizes contamination."
                )

            ],

            sections: [

                section(
                    "Aseptic Principles",
                    [

                        "Aseptic technique reduces unintended microbial transfer between the environment, specimen and culture.",

                        "Sterile tools should not contact nonsterile surfaces before touching the culture.",

                        "Culture containers should remain open only as long as necessary."
                    ]
                ),

                section(
                    "Culture Transfer",
                    [

                        "A sterile loop or other instrument is used to collect inoculum from one culture and transfer it to another medium.",

                        "The technique should protect both the culture from contamination and the worker from unnecessary exposure.",

                        "Procedures vary according to equipment and institutional laboratory policy."
                    ]
                ),

                section(
                    "Recognizing Contamination",
                    [

                        "Unexpected colony morphology, unexpected growth locations or inconsistent results may suggest contamination.",

                        "A contaminated culture cannot reliably represent the intended organism.",

                        "Control cultures help distinguish procedural problems from true biological results."
                    ]
                )

            ],

            procedure: [

                "Disinfect the work area.",

                "Arrange sterile and nonsterile materials.",

                "Sterilize or obtain a sterile transfer tool.",

                "Open culture vessels only briefly.",

                "Transfer the inoculum.",

                "Close containers immediately.",

                "Dispose of materials appropriately.",

                "Disinfect the workspace."

            ],

            pitfalls: [

                "Touching a sterile loop to the bench.",

                "Leaving culture containers open.",

                "Setting sterile caps on contaminated surfaces.",

                "Confusing contamination with true mixed growth."

            ],

            memory: [

                "Sterile touches sterile.",

                "Open briefly.",

                "Unexpected growth = consider contamination."

            ],

            clinical: {

                title: "Blood Culture Contamination",

                scenario:
                    "Skin flora enters a blood-culture bottle during collection.",

                connection:
                    "Contamination may create a false impression of bloodstream infection and can lead to unnecessary treatment."

            }

        }),


        station({

            id: "gram-stain-lab",

            number: 27,

            module: 7,

            title: "Gram Stain Practical",

            description:
                "Perform and interpret the Gram-stain sequence and distinguish Gram-positive from Gram-negative organisms.",

            objectives: [

                "State the Gram-stain sequence.",

                "Explain the role of crystal violet.",

                "Explain the role of iodine.",

                "Explain decolorization.",

                "Differentiate Gram-positive and Gram-negative final colors."

            ],

            specimens: [

                specimen(
                    "Crystal violet",
                    "Purple primary stain used first in the Gram stain.",
                    "Initially colors bacterial cells purple.",
                    "Applied before iodine."
                ),

                specimen(
                    "Gram's iodine",
                    "Mordant added after crystal violet.",
                    "Forms a larger dye complex inside cells.",
                    "Iodine is not the counterstain."
                ),

                specimen(
                    "Decolorizer",
                    "Alcohol or alcohol-acetone step used after iodine.",
                    "Differentially removes dye complex from Gram-negative cells.",
                    "Over-decolorization can make Gram-positive cells appear falsely negative."
                ),

                specimen(
                    "Safranin",
                    "Pink-red counterstain.",
                    "Colors decolorized Gram-negative cells pink/red.",
                    "Applied after decolorization."
                ),

                specimen(
                    "Gram-positive bacterium",
                    "Cell retaining purple crystal-violet complex after decolorization.",
                    "Has thick peptidoglycan contributing to dye retention.",
                    "Final color is purple."
                ),

                specimen(
                    "Gram-negative bacterium",
                    "Cell losing crystal violet during decolorization and taking up counterstain.",
                    "Has thinner peptidoglycan and an outer membrane.",
                    "Final color is pink/red."
                )

            ],

            sections: [

                section(
                    "Sequence",
                    [

                        "The classic Gram-stain sequence is crystal violet, iodine, decolorizer and counterstain.",

                        "Crystal violet stains cells. Iodine forms a larger dye complex.",

                        "Decolorization creates the key differential step before the counterstain is applied."
                    ]
                ),

                section(
                    "Cell Wall Basis",
                    [

                        "Gram-positive bacteria possess thick peptidoglycan that retains the crystal-violet iodine complex during appropriate decolorization.",

                        "Gram-negative bacteria have thinner peptidoglycan and an outer membrane, allowing the primary dye complex to be removed.",

                        "Safranin then makes Gram-negative cells visible as pink or red."
                    ]
                ),

                section(
                    "Technique Errors",
                    [

                        "A smear that is too thick can decolorize unevenly.",

                        "Over-decolorization can cause Gram-positive cells to appear Gram-negative.",

                        "Under-decolorization can leave Gram-negative cells falsely purple."
                    ]
                )

            ],

            procedure: [

                "Prepare and heat-fix an appropriate smear.",

                "Apply crystal violet.",

                "Rinse.",

                "Apply iodine.",

                "Rinse.",

                "Apply decolorizer carefully.",

                "Rinse immediately.",

                "Apply safranin.",

                "Rinse, dry and examine."

            ],

            pitfalls: [

                "Reversing iodine and decolorizer.",

                "Using excessive decolorization.",

                "Using an overly thick smear.",

                "Interpreting old or damaged cultures without considering Gram variability."

            ],

            memory: [

                "CV → I → D → S.",

                "Positive = purple.",

                "Negative = pink."

            ],

            clinical: {

                title: "Rapid Preliminary Information",

                scenario:
                    "A Gram stain from a clinical specimen shows purple cocci in clusters.",

                connection:
                    "Gram reaction and morphology can provide rapid preliminary information while definitive culture and identification are pending."

            },

            questions: [

                customMCQ(
                    "gram1",
                    "Which Gram-stain reagent is applied immediately after crystal violet?",
                    [
                        "Iodine",
                        "Safranin",
                        "Decolorizer",
                        "Methanol"
                    ],
                    0,
                    "Iodine follows crystal violet and acts as the mordant."
                )

            ]

        }),


        station({

            id: "culture-media-lab",

            number: 28,

            module: 7,

            title: "Culture Media, Colony Morphology & Isolation",

            description:
                "Interpret colony morphology and differentiate general, selective and differential media.",

            objectives: [

                "Describe isolated colonies.",

                "Differentiate selective and differential media.",

                "Explain streak-plate isolation.",

                "Use colony morphology correctly.",

                "Recognize that colony appearance alone is not definitive identification."

            ],

            specimens: [

                specimen(
                    "Isolated colony",
                    "Discrete visible microbial growth separated from neighboring colonies.",
                    "Can provide a relatively pure source for further testing.",
                    "Isolation is needed before many identification tests."
                ),

                specimen(
                    "Selective medium",
                    "Medium containing conditions that suppress some organisms while allowing others to grow.",
                    "Selects for particular microbial groups.",
                    "Selection is based on growth or no growth."
                ),

                specimen(
                    "Differential medium",
                    "Medium containing indicators that reveal biochemical differences among growing organisms.",
                    "Differentiates organisms based on visible reactions.",
                    "Look for color or appearance changes."
                ),

                specimen(
                    "Streak plate",
                    "Agar inoculation pattern designed to progressively dilute cells across the surface.",
                    "Produces isolated colonies.",
                    "Heavy growth should become progressively more separated."
                ),

                specimen(
                    "Colony morphology",
                    "Visible characteristics such as size, color, shape, margin, elevation and texture.",
                    "Provides preliminary descriptive information.",
                    "Not sufficient by itself for definitive species identification."
                )

            ],

            sections: [

                section(
                    "Isolation",
                    [

                        "Clinical and environmental samples may contain more than one microorganism.",

                        "The streak-plate method mechanically dilutes cells over the agar surface so individual cells can produce separated colonies.",

                        "An isolated colony can then be used for additional tests."
                    ]
                ),

                section(
                    "Selective Media",
                    [

                        "Selective media contain inhibitors or environmental conditions that favor growth of some organisms over others.",

                        "The key observation is whether an organism can grow under the selective conditions.",

                        "Selection does not automatically identify an organism to species."
                    ]
                ),

                section(
                    "Differential Media",
                    [

                        "Differential media reveal biochemical differences through color changes, precipitation or other visible reactions.",

                        "A medium can be both selective and differential.",

                        "Interpretation should consider both growth and reaction pattern."
                    ]
                )

            ],

            procedure: [

                "Label agar plates.",

                "Use aseptic technique.",

                "Streak initial inoculum.",

                "Sterilize or replace transfer tool between streak regions.",

                "Continue dilution across the plate.",

                "Incubate according to procedure.",

                "Describe isolated colonies."

            ],

            pitfalls: [

                "Calling all colored media differential.",

                "Calling growth alone definitive identification.",

                "Failing to dilute during streaking.",

                "Picking colonies from confluent growth when isolated colonies are available."

            ],

            memory: [

                "Selective = who grows.",

                "Differential = how they look/react.",

                "Streaking = dilution across agar."

            ],

            clinical: {

                title: "Mixed Clinical Culture",

                scenario:
                    "A wound culture grows several colony types.",

                connection:
                    "Isolated colonies allow each morphologic type to be tested separately and help determine which organisms are present."

            }

        }),


        station({

            id: "biochemical-diagnostics",

            number: 29,

            module: 7,

            title: "Biochemical & Diagnostic Microbiology Tests",

            description:
                "Interpret catalase, coagulase and other common laboratory test principles.",

            objectives: [

                "Explain biochemical identification tests.",

                "Interpret positive and negative controls.",

                "Describe catalase testing conceptually.",

                "Describe coagulase testing conceptually.",

                "Explain why multiple tests may be needed."

            ],

            specimens: [

                specimen(
                    "Catalase test",
                    "Test detecting breakdown of hydrogen peroxide with visible bubbling.",
                    "Detects catalase enzyme activity.",
                    "Immediate bubbling indicates a positive reaction."
                ),

                specimen(
                    "Coagulase test",
                    "Test detecting coagulase activity associated with clotting reactions.",
                    "Helps differentiate certain staphylococcal species.",
                    "Interpret according to test format and controls."
                ),

                specimen(
                    "Positive control",
                    "Known specimen expected to produce a positive reaction.",
                    "Verifies that the test system can detect the expected result.",
                    "A failed positive control makes patient/sample results unreliable."
                ),

                specimen(
                    "Negative control",
                    "Known specimen expected to produce a negative reaction.",
                    "Helps detect contamination or nonspecific reaction.",
                    "Unexpected positive control behavior invalidates interpretation."
                ),

                specimen(
                    "Biochemical profile",
                    "Pattern of multiple metabolic test results.",
                    "Supports organism identification.",
                    "Identification often relies on a combination rather than a single test."
                )

            ],

            sections: [

                section(
                    "Biochemical Identification",
                    [

                        "Different microorganisms possess different enzymes and metabolic pathways.",

                        "Laboratory tests exploit these differences by adding substrates and observing visible reactions.",

                        "A single biochemical result often narrows possibilities but does not always provide definitive identification."
                    ]
                ),

                section(
                    "Controls",
                    [

                        "Controls show whether the test itself worked correctly.",

                        "A positive control must produce the expected positive result and a negative control the expected negative result.",

                        "If controls fail, unknown results should not be interpreted as trustworthy."
                    ]
                ),

                section(
                    "Modern Diagnostics",
                    [

                        "Clinical laboratories may combine culture, biochemical testing, antigen detection, nucleic-acid amplification and mass spectrometry.",

                        "Different methods answer different questions and have different turnaround times.",

                        "The specimen type and clinical problem determine the best diagnostic strategy."
                    ]
                )

            ],

            procedure: [

                "Confirm a pure culture when required.",

                "Prepare positive and negative controls.",

                "Perform the biochemical test.",

                "Observe timing carefully.",

                "Compare unknown reaction with controls.",

                "Interpret within the broader identification profile."

            ],

            pitfalls: [

                "Interpreting a test when controls fail.",

                "Assuming one biochemical test proves species identity.",

                "Reading time-sensitive reactions too early or too late.",

                "Using contaminated cultures."

            ],

            memory: [

                "Controls validate the test.",

                "One result narrows; a profile identifies.",

                "Catalase positive = bubbles."

            ],

            clinical: {

                title: "Rapid Organism Identification",

                scenario:
                    "A clinical isolate must be identified to guide therapy.",

                connection:
                    "Biochemical and molecular testing can distinguish organisms that look similar on Gram stain."

            }

        }),


        station({

            id: "antibiotic-susceptibility",

            number: 30,

            module: 7,

            title: "Antibiotic Susceptibility Testing",

            description:
                "Understand zone-of-inhibition measurements and susceptibility interpretation.",

            objectives: [

                "Define antibiotic susceptibility testing.",

                "Identify a zone of inhibition.",

                "Measure zone diameter correctly.",

                "Explain susceptible, intermediate and resistant categories conceptually.",

                "Recognize limitations of visual interpretation."

            ],

            specimens: [

                specimen(
                    "Antibiotic disk",
                    "Small paper disk containing a standardized antimicrobial concentration.",
                    "Creates a diffusion gradient through agar.",
                    "Used in disk-diffusion susceptibility testing."
                ),

                specimen(
                    "Bacterial lawn",
                    "Confluent layer of bacterial growth across an agar surface.",
                    "Provides uniform growth for susceptibility testing.",
                    "The lawn should cover the testing surface evenly."
                ),

                specimen(
                    "Zone of inhibition",
                    "Clear region around an antimicrobial disk where visible growth is prevented.",
                    "Provides a measurable response used with standardized interpretive criteria.",
                    "Measure diameter across the zone."
                ),

                specimen(
                    "Resistant isolate",
                    "Organism not inhibited sufficiently under standardized testing conditions.",
                    "Suggests the drug may be ineffective at usual achievable exposures.",
                    "Interpret using formal breakpoint criteria, not appearance alone."
                )

            ],

            sections: [

                section(
                    "Disk Diffusion",
                    [

                        "Antibiotic disks are placed on an agar surface inoculated with a standardized bacterial suspension.",

                        "The antibiotic diffuses outward while bacteria grow across the plate.",

                        "If growth is inhibited, a clear zone forms around the disk."
                    ]
                ),

                section(
                    "Measurement",
                    [

                        "The zone is measured across its diameter, usually in millimeters.",

                        "Zone size alone does not directly equal drug potency because different antibiotics diffuse differently.",

                        "Standardized breakpoint tables are required to classify susceptibility."
                    ]
                ),

                section(
                    "Clinical Use",
                    [

                        "Susceptibility results help clinicians choose antimicrobials likely to work against the isolated organism.",

                        "Results must still be interpreted with infection site, dosing, patient factors and pharmacology.",

                        "Laboratory susceptibility does not replace clinical judgment."
                    ]
                )

            ],

            procedure: [

                "Prepare a standardized bacterial inoculum.",

                "Create an even lawn on agar.",

                "Place antimicrobial disks.",

                "Incubate under standardized conditions.",

                "Measure inhibition-zone diameters.",

                "Compare values with current interpretive standards."

            ],

            pitfalls: [

                "Assuming the biggest zone always means the strongest antibiotic.",

                "Comparing zone sizes between different drugs without breakpoint criteria.",

                "Measuring radius instead of diameter.",

                "Using a nonstandard bacterial lawn."

            ],

            memory: [

                "Measure diameter, not radius.",

                "Zone size requires breakpoint interpretation.",

                "Susceptibility is standardized."

            ],

            clinical: {

                title: "Antibiotic Selection",

                scenario:
                    "A urine culture grows a bacterium resistant to one commonly used antibiotic but susceptible to another.",

                connection:
                    "Susceptibility testing helps guide targeted antimicrobial therapy."

            },

            questions: [

                numericQuestion(
                    "ast1",
                    "A circular inhibition zone measures 18 mm from one edge directly across the center to the opposite edge. What is the zone diameter?",
                    18,
                    0.01,
                    "mm",
                    "The measurement given across the entire zone is already the diameter: 18 mm."
                )

            ]

        }),


        // ====================================================================
        // MODULE 8 — CHEMISTRY
        // ====================================================================

        station({

            id: "density-lab",

            number: 31,

            module: 8,

            title: "Mass, Volume & Density Laboratory",

            description:
                "Measure mass and volume and calculate density using laboratory data.",

            objectives: [

                "Measure mass correctly.",

                "Measure liquid volume.",

                "Use water displacement for irregular solids.",

                "Calculate density.",

                "Interpret units."

            ],

            specimens: [

                specimen(
                    "Balance",
                    "Instrument used to determine mass.",
                    "Provides mass measurements used in quantitative experiments.",
                    "Tare containers before measuring sample mass."
                ),

                specimen(
                    "Graduated cylinder",
                    "Calibrated vessel used for liquid volume.",
                    "Provides more precise volume measurement than a typical beaker.",
                    "Read at eye level."
                ),

                specimen(
                    "Water displacement",
                    "Volume determination method using change in liquid level.",
                    "Measures volume of irregular solid objects.",
                    "Object volume = final volume − initial volume."
                ),

                specimen(
                    "Density",
                    "Mass per unit volume.",
                    "Describes how much mass occupies a given volume.",
                    "Density = mass ÷ volume."
                )

            ],

            sections: [

                section(
                    "Density Relationship",
                    [

                        "Density relates an object's mass to its volume.",

                        "For a homogeneous material under given conditions, density can help identify or characterize the substance.",

                        "Common laboratory units include g/mL or g/cm³."
                    ]
                ),

                section(
                    "Volume by Displacement",
                    [

                        "Irregular solids may not have dimensions that are easy to measure geometrically.",

                        "Submerging the object in water changes the measured volume.",

                        "The difference between final and initial volume equals the object's displaced volume."
                    ]
                ),

                section(
                    "Measurement Error",
                    [

                        "Incorrect meniscus reading, trapped air bubbles or incomplete submersion can alter calculated volume.",

                        "Balance calibration and failure to tare containers can alter mass measurements.",

                        "Because density uses both measurements, errors in either value affect the final result."
                    ]
                )

            ],

            procedure: [

                "Measure sample mass.",

                "Record initial water volume.",

                "Submerge the irregular sample.",

                "Record final volume.",

                "Calculate displaced volume.",

                "Calculate density.",

                "Report correct units."

            ],

            pitfalls: [

                "Dividing volume by mass instead of mass by volume.",

                "Forgetting to subtract initial from final volume.",

                "Ignoring air bubbles.",

                "Omitting units."

            ],

            memory: [

                "D = m ÷ V.",

                "Displacement = final − initial.",

                "g/mL and g/cm³ are common density units."

            ],

            clinical: {

                title: "Quantitative Laboratory Work",

                scenario:
                    "A laboratory solution must be prepared using precise mass and volume measurements.",

                connection:
                    "Small measurement errors can alter concentration and affect downstream experimental results."

            },

            questions: [

                numericQuestion(
                    "density1",
                    "A sample has a mass of 54 g and a volume of 20 mL. What is its density?",
                    2.7,
                    0.01,
                    "g/mL",
                    "Density = 54 ÷ 20 = 2.7 g/mL."
                ),

                numericQuestion(
                    "density2",
                    "Water rises from 35 mL to 47 mL when an object is submerged. What is the object's volume?",
                    12,
                    0.01,
                    "mL",
                    "Volume = 47 − 35 = 12 mL."
                )

            ]

        }),


        station({

            id: "solution-lab",

            number: 32,

            module: 8,

            title: "Solutions, Molarity & Dilution Laboratory",

            description:
                "Prepare solutions, calculate molarity and solve dilution problems.",

            objectives: [

                "Define solute and solvent.",

                "Calculate molarity.",

                "Use M1V1 = M2V2.",

                "Describe serial dilution conceptually.",

                "Avoid common solution-preparation errors."

            ],

            specimens: [

                specimen(
                    "Solute",
                    "Substance dissolved in a solution.",
                    "Contributes particles to the solution.",
                    "Often the smaller component in a simple solution."
                ),

                specimen(
                    "Solvent",
                    "Substance doing the dissolving.",
                    "Provides the medium of the solution.",
                    "Water is a common biological solvent."
                ),

                specimen(
                    "Molarity",
                    "Moles of solute per liter of solution.",
                    "Expresses solution concentration.",
                    "M = mol/L."
                ),

                specimen(
                    "Volumetric flask",
                    "Calibrated flask with a single volume mark.",
                    "Prepares solutions to a precise final volume.",
                    "Bring the meniscus exactly to the calibration line."
                ),

                specimen(
                    "Dilution",
                    "Reduction of solution concentration by adding solvent.",
                    "Produces a lower concentration from a more concentrated stock solution.",
                    "Solute amount is conserved during ideal dilution."
                )

            ],

            sections: [

                section(
                    "Molarity",
                    [

                        "Molarity expresses moles of solute per liter of final solution.",

                        "The denominator is final solution volume rather than solvent volume alone.",

                        "Laboratory calculations often require converting milliliters to liters."
                    ]
                ),

                section(
                    "Dilution",
                    [

                        "When a stock solution is diluted without adding or removing solute, the amount of solute remains constant.",

                        "This relationship produces the equation M1V1 = M2V2.",

                        "The equation is useful when preparing lower-concentration solutions from concentrated stock."
                    ]
                ),

                section(
                    "Preparation Technique",
                    [

                        "A solution should be mixed thoroughly after dilution.",

                        "When preparing a precise final volume, solute and part of the solvent are mixed first, then solvent is added to the calibration line.",

                        "Pipettes and volumetric flasks improve accuracy compared with approximate glassware."
                    ]
                )

            ],

            procedure: [

                "Identify the target concentration and volume.",

                "Calculate required solute or stock volume.",

                "Measure the solute or stock carefully.",

                "Transfer to an appropriate volumetric container.",

                "Add solvent toward the final volume.",

                "Bring the meniscus to the calibration line.",

                "Mix thoroughly."

            ],

            pitfalls: [

                "Using solvent volume instead of final solution volume for molarity.",

                "Forgetting mL-to-L conversion.",

                "Adding stock concentration and final concentration directly.",

                "Failing to mix the final solution."

            ],

            memory: [

                "M = mol/L.",

                "Dilution: M1V1 = M2V2.",

                "Final volume means total solution volume."

            ],

            clinical: {

                title: "Solution Preparation",

                scenario:
                    "A laboratory needs a lower-concentration solution prepared from a concentrated stock.",

                connection:
                    "Dilution calculations determine the correct stock volume before solvent is added."

            },

            questions: [

                numericQuestion(
                    "solution1",
                    "How many moles are present per liter in a 0.50 M solution?",
                    0.5,
                    0.001,
                    "mol/L",
                    "By definition, 0.50 M means 0.50 mol per liter of solution."
                ),

                numericQuestion(
                    "solution2",
                    "How many mL of 2.0 M stock are needed to prepare 100 mL of 0.50 M solution?",
                    25,
                    0.01,
                    "mL",
                    "M1V1 = M2V2. V1 = (0.50 × 100) ÷ 2.0 = 25 mL."
                )

            ]

        }),


        station({

            id: "ph-lab",

            number: 33,

            module: 8,

            title: "Acids, Bases, pH & Indicators Laboratory",

            description:
                "Measure pH, interpret indicators and distinguish acidic, neutral and basic solutions.",

            objectives: [

                "Define acid and base conceptually.",

                "Interpret the pH scale.",

                "Use pH paper and pH meters.",

                "Explain indicator color change.",

                "Recognize logarithmic pH relationships."

            ],

            specimens: [

                specimen(
                    "pH meter",
                    "Electronic instrument with a probe used to estimate hydrogen-ion activity.",
                    "Provides quantitative pH measurements.",
                    "Calibration is important before accurate measurement."
                ),

                specimen(
                    "pH indicator paper",
                    "Paper containing dyes that change color according to pH.",
                    "Provides an approximate pH range.",
                    "Less precise than a calibrated pH meter."
                ),

                specimen(
                    "Acidic solution",
                    "Solution with pH below 7 under common aqueous reference conditions.",
                    "Has higher hydrogen-ion activity than a neutral solution.",
                    "Lower pH means more acidic."
                ),

                specimen(
                    "Neutral solution",
                    "Solution near pH 7 under common reference conditions.",
                    "Has balanced hydrogen and hydroxide ion activity in pure water at typical laboratory temperature.",
                    "Pure water is a common reference."
                ),

                specimen(
                    "Basic solution",
                    "Solution with pH above 7 under common aqueous reference conditions.",
                    "Has lower hydrogen-ion activity than neutral solution.",
                    "Higher pH means more basic."
                ),

                specimen(
                    "Buffer",
                    "Solution that resists large changes in pH when small amounts of acid or base are added.",
                    "Helps stabilize pH.",
                    "Buffers do not prevent all pH change."
                )

            ],

            sections: [

                section(
                    "pH Scale",
                    [

                        "pH is logarithmic. A one-unit pH difference corresponds to an approximately tenfold difference in hydrogen-ion activity under idealized conditions.",

                        "This means pH 3 is substantially more acidic than pH 4.",

                        "The familiar 0–14 scale is useful for many aqueous laboratory solutions."
                    ]
                ),

                section(
                    "Indicators",
                    [

                        "Acid-base indicators are molecules whose color changes according to protonation state.",

                        "Indicator papers provide convenient approximate pH measurements.",

                        "A calibrated electronic pH meter provides more precise quantitative measurement."
                    ]
                ),

                section(
                    "Buffers",
                    [

                        "Buffers contain components capable of accepting or donating hydrogen ions.",

                        "They reduce the magnitude of pH changes after small acid or base additions.",

                        "Physiological systems use multiple buffers together with respiratory and renal regulation."
                    ]
                )

            ],

            procedure: [

                "Calibrate the pH meter if required.",

                "Rinse the probe according to procedure.",

                "Measure the sample.",

                "Record pH.",

                "Compare with indicator-paper estimate if assigned.",

                "Classify as acidic, neutral or basic."

            ],

            pitfalls: [

                "Calling pH a linear scale.",

                "Assuming pH paper is as precise as a calibrated meter.",

                "Failing to rinse the pH probe between samples.",

                "Saying a buffer prevents all pH change."

            ],

            memory: [

                "Low pH = acidic.",

                "High pH = basic.",

                "One pH unit ≈ tenfold H+ difference."

            ],

            clinical: {

                title: "Blood pH",

                scenario:
                    "A patient's blood pH moves outside its narrow physiologic range.",

                connection:
                    "Even modest pH changes can alter protein function and cellular physiology, so acid-base regulation is tightly controlled."

            },

            questions: [

                customMCQ(
                    "ph1",
                    "Compared with pH 5, a solution at pH 4 has approximately how much greater hydrogen-ion activity?",
                    [
                        "10 times",
                        "2 times",
                        "1000 times",
                        "No difference"
                    ],
                    0,
                    "Because pH is logarithmic, a one-unit decrease corresponds to roughly tenfold greater hydrogen-ion activity."
                )

            ]

        }),


        station({

            id: "titration-lab",

            number: 34,

            module: 8,

            title: "Acid-Base Titration Practical",

            description:
                "Understand burettes, endpoints, equivalence concepts and basic titration calculations.",

            objectives: [

                "Identify a burette.",

                "Explain titration purpose.",

                "Differentiate endpoint and equivalence point conceptually.",

                "Measure titrant volume.",

                "Solve simple 1:1 acid-base titration calculations."

            ],

            specimens: [

                specimen(
                    "Burette",
                    "Long graduated tube with a stopcock near the bottom.",
                    "Delivers accurately measured variable volumes during titration.",
                    "Read initial and final volumes to determine volume delivered."
                ),

                specimen(
                    "Erlenmeyer flask",
                    "Conical flask commonly used to hold analyte during titration.",
                    "Allows swirling with reduced splash risk.",
                    "The burette delivers titrant into this flask."
                ),

                specimen(
                    "Titrant",
                    "Solution of known concentration delivered from a burette.",
                    "Reacts with the unknown analyte.",
                    "Its concentration must be known accurately."
                ),

                specimen(
                    "Analyte",
                    "Solution being analyzed.",
                    "Contains the unknown amount or concentration being determined.",
                    "Placed in the receiving flask."
                ),

                specimen(
                    "Endpoint",
                    "Observed experimental signal used to stop the titration.",
                    "Approximates the chemical equivalence point.",
                    "Often detected by indicator color change."
                )

            ],

            sections: [

                section(
                    "Titration Setup",
                    [

                        "A burette delivers titrant of known concentration into a measured amount of analyte.",

                        "The titration continues until an endpoint indicates that the intended reaction is approximately complete.",

                        "Initial and final burette readings determine titrant volume used."
                    ]
                ),

                section(
                    "Endpoint vs Equivalence",
                    [

                        "The equivalence point is the theoretical point at which reactants are present in stoichiometric proportions.",

                        "The endpoint is the observed signal, such as an indicator color change.",

                        "A well-chosen indicator produces an endpoint close to the equivalence point."
                    ]
                ),

                section(
                    "1:1 Reactions",
                    [

                        "For a simple 1:1 acid-base reaction, the relationship M1V1 = M2V2 can be used at equivalence when concentrations and volumes are expressed consistently.",

                        "More complex reactions require stoichiometric coefficients.",

                        "Reading the burette carefully is essential because volume error directly affects calculated concentration."
                    ]
                )

            ],

            procedure: [

                "Rinse and prepare the burette.",

                "Fill with titrant.",

                "Record initial burette reading.",

                "Measure analyte into flask.",

                "Add indicator if used.",

                "Add titrant while swirling.",

                "Slow addition near endpoint.",

                "Record final burette reading.",

                "Calculate titrant volume and unknown concentration."

            ],

            pitfalls: [

                "Using final burette reading as volume delivered without subtracting the initial reading.",

                "Overshooting the endpoint.",

                "Ignoring stoichiometric coefficients.",

                "Reading the meniscus incorrectly."

            ],

            memory: [

                "Volume delivered = final − initial.",

                "Titrant = known.",

                "Analyte = unknown."

            ],

            clinical: {

                title: "Quantitative Analytical Chemistry",

                scenario:
                    "A laboratory determines the concentration of an unknown acid solution.",

                connection:
                    "Titration uses a precisely measured reaction with a known standard to determine an unknown concentration."

            },

            questions: [

                numericQuestion(
                    "titration1",
                    "A burette reading changes from 2.40 mL to 18.90 mL. How much titrant was delivered?",
                    16.5,
                    0.01,
                    "mL",
                    "18.90 − 2.40 = 16.50 mL."
                ),

                numericQuestion(
                    "titration2",
                    "25.0 mL of 0.100 M acid reacts 1:1 with a base. If 20.0 mL base is required, what is the base molarity?",
                    0.125,
                    0.001,
                    "M",
                    "M1V1 = M2V2. M2 = (0.100 × 25.0) ÷ 20.0 = 0.125 M."
                )

            ]

        })

    ];


    // ========================================================================
    // MAPS
    // ========================================================================

    const STATION_COUNT =
        LAB_STATIONS.length;


    const STATION_MAP = {};


    LAB_STATIONS.forEach(
        function (item) {

            STATION_MAP[item.id] =
                item;

        }
    );


    // ========================================================================
    // DASHBOARD REFERENCES
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


    const labCard =
        document.querySelector(
            '.course-card[data-course="labs"]'
        );


    const overallProgress =
        document.getElementById(
            "overall-progress"
        );


    const overallProgressBar =
        document.getElementById(
            "overall-progress-bar"
        );


    const topicsMastered =
        document.getElementById(
            "topics-mastered"
        );


    const questionsAnswered =
        document.getElementById(
            "questions-answered"
        );


    if (
        !footer ||
        !labCard
    ) {

        return;

    }


    const labDashboardButton =
        labCard.querySelector(
            ".course-button"
        );


    if (
        labDashboardButton
    ) {

        labDashboardButton.textContent =
            "Open Lab Center →";

    }


    // ========================================================================
    // STORAGE
    // ========================================================================

    function storageFor(
        stationId
    ) {

        const base =
            `nshLAB_FINAL_${stationId}`;


        return {

            read:
                `${base}_read`,

            review:
                `${base}_review`,

            identify:
                `${base}_identify`,

            score:
                `${base}_score`,

            passed:
                `${base}_passed`,

            attempts:
                `${base}_attempts`,

            missed:
                `${base}_missed`

        };

    }


    function getNumber(
        key
    ) {

        return (
            Number(
                localStorage.getItem(
                    key
                )
            ) || 0
        );

    }


    function getBoolean(
        key
    ) {

        return (
            localStorage.getItem(
                key
            ) === "true"
        );

    }


    function getArray(
        key
    ) {

        try {

            const value =
                JSON.parse(
                    localStorage.getItem(
                        key
                    ) || "[]"
                );


            return Array.isArray(
                value
            )
                ? value
                : [];

        } catch {

            return [];

        }

    }


    function saveArray(
        key,
        value
    ) {

        localStorage.setItem(
            key,
            JSON.stringify(
                value
            )
        );

    }


    // ========================================================================
    // UTILITIES
    // ========================================================================

    function shuffle(
        array
    ) {

        const copy =
            [...array];


        for (
            let i = copy.length - 1;
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


    function scrollTopSmooth() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }


    // ========================================================================
    // COURSE-SPECIFIC STYLES
    // ========================================================================

    function createStyles() {

        if (
            document.getElementById(
                "lab-center-final-styles"
            )
        ) {

            return;

        }


        const style =
            document.createElement(
                "style"
            );


        style.id =
            "lab-center-final-styles";


        style.textContent = `

            .lab-center-page .course-page-title {
                background:
                    linear-gradient(
                        135deg,
                        #eff6ff,
                        #ffffff
                    );
                border-color:#bfdbfe;
            }

            .lab-center-page .course-page-icon {
                background:
                    linear-gradient(
                        135deg,
                        #dbeafe,
                        #ede9fe
                    );
            }

            .lab-center-note {
                margin:20px 0;
                padding:20px;
                border-radius:18px;
                border:1px solid #bfdbfe;
                background:#eff6ff;
                color:#475467;
                line-height:1.7;
            }

            .lab-station-stats {
                display:flex;
                flex-wrap:wrap;
                gap:8px;
                margin-top:12px;
            }

            .lab-stat-pill {
                display:inline-flex;
                align-items:center;
                padding:6px 10px;
                border-radius:999px;
                background:#f8fafc;
                border:1px solid #e5e7eb;
                color:#475467;
                font-size:11px;
                font-weight:800;
            }

            .lab-objectives {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:#eff6ff;
                border:1px solid #bfdbfe;
            }

            .lab-objectives h3 {
                margin:0 0 12px;
                color:#1d4ed8;
            }

            .lab-objectives li {
                margin-bottom:8px;
                line-height:1.65;
                color:#475467;
            }

            .lab-specimen-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(
                            240px,
                            1fr
                        )
                    );
                gap:15px;
                margin-top:18px;
            }

            .lab-specimen-card {
                padding:18px;
                border-radius:17px;
                background:#ffffff;
                border:1px solid #e5e7eb;
            }

            .lab-specimen-card h3 {
                margin:0 0 10px;
                color:#172033;
            }

            .lab-specimen-label {
                margin-top:12px;
                margin-bottom:4px;
                color:#2563eb;
                font-size:10px;
                font-weight:900;
                letter-spacing:1px;
            }

            .lab-specimen-card p {
                margin:0;
                color:#667085;
                line-height:1.6;
                font-size:13px;
            }

            .lab-procedure {
                counter-reset:labstep;
                display:flex;
                flex-direction:column;
                gap:10px;
            }

            .lab-procedure-step {
                position:relative;
                padding:15px 16px 15px 52px;
                border:1px solid #e5e7eb;
                border-radius:14px;
                background:#ffffff;
                color:#475467;
                line-height:1.55;
            }

            .lab-procedure-step::before {
                counter-increment:labstep;
                content:counter(labstep);
                position:absolute;
                left:14px;
                top:12px;
                width:28px;
                height:28px;
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:50%;
                background:#dbeafe;
                color:#1d4ed8;
                font-weight:900;
            }

            .lab-pitfalls {
                display:flex;
                flex-direction:column;
                gap:10px;
            }

            .lab-pitfall {
                padding:14px 16px;
                border-radius:14px;
                background:#fff7ed;
                border:1px solid #fed7aa;
                color:#9a3412;
                line-height:1.55;
            }

            .lab-memory {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(
                            200px,
                            1fr
                        )
                    );
                gap:12px;
            }

            .lab-memory-item {
                padding:15px;
                border-radius:14px;
                border:1px solid #c7d2fe;
                background:#eef2ff;
                color:#3730a3;
                font-weight:750;
                line-height:1.55;
            }

            .lab-clue-card {
                padding:24px;
                border-radius:20px;
                background:
                    linear-gradient(
                        135deg,
                        #eff6ff,
                        #f5f3ff
                    );
                border:1px solid #bfdbfe;
            }

            .lab-clue-label {
                color:#2563eb;
                font-weight:900;
                font-size:11px;
                letter-spacing:1.1px;
                margin-bottom:10px;
            }

            .lab-clue {
                font-size:20px;
                line-height:1.55;
                color:#172033;
                font-weight:800;
            }

            .lab-clue-tip {
                margin-top:12px;
                color:#667085;
                line-height:1.6;
            }

            .lab-identify-options {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(
                            220px,
                            1fr
                        )
                    );
                gap:10px;
                margin-top:18px;
            }

            .lab-identify-button {
                text-align:left;
                border:1px solid #d0d5dd;
                background:#ffffff;
                color:#344054;
                padding:14px 15px;
                border-radius:13px;
                cursor:pointer;
                font-weight:700;
                transition:.15s ease;
            }

            .lab-identify-button:hover {
                border-color:#3b82f6;
                transform:translateY(-1px);
            }

            .lab-identify-button.selected {
                border-color:#2563eb;
                background:#eff6ff;
            }

            .lab-identify-button.correct {
                border-color:#16a34a;
                background:#f0fdf4;
                color:#166534;
            }

            .lab-identify-button.incorrect {
                border-color:#dc2626;
                background:#fef2f2;
                color:#991b1b;
            }

            .lab-numeric-input {
                width:100%;
                margin-top:18px;
                padding:15px 16px;
                border-radius:12px;
                border:1px solid #d0d5dd;
                font-size:16px;
                background:#ffffff;
            }

            body.dark-mode
            .lab-center-page
            .course-page-title {
                background:
                    linear-gradient(
                        135deg,
                        #122033,
                        #111827
                    );
                border-color:#25476e;
            }

            body.dark-mode
            .lab-center-note {
                background:#122033;
                border-color:#25476e;
                color:#cbd5e1;
            }

            body.dark-mode
            .lab-stat-pill,
            body.dark-mode
            .lab-specimen-card,
            body.dark-mode
            .lab-procedure-step,
            body.dark-mode
            .lab-identify-button {
                background:#111827;
                border-color:#334155;
                color:#cbd5e1;
            }

            body.dark-mode
            .lab-specimen-card h3,
            body.dark-mode
            .lab-clue {
                color:#f8fafc;
            }

            body.dark-mode
            .lab-objectives {
                background:#122033;
                border-color:#25476e;
            }

            body.dark-mode
            .lab-objectives h3 {
                color:#93c5fd;
            }

            body.dark-mode
            .lab-objectives li,
            body.dark-mode
            .lab-specimen-card p {
                color:#cbd5e1;
            }

            body.dark-mode
            .lab-memory-item {
                background:#1e1b4b;
                border-color:#4338ca;
                color:#c7d2fe;
            }

            body.dark-mode
            .lab-pitfall {
                background:#351e10;
                border-color:#7c2d12;
                color:#fed7aa;
            }

            body.dark-mode
            .lab-clue-card {
                background:
                    linear-gradient(
                        135deg,
                        #122033,
                        #211b3b
                    );
                border-color:#334155;
            }

            body.dark-mode
            .lab-numeric-input {
                background:#111827;
                border-color:#334155;
                color:#f8fafc;
            }

        `;


        document.head.appendChild(
            style
        );

    }


    createStyles();


    // ========================================================================
    // DYNAMIC PAGES
    // ========================================================================

    const labPage =
        document.createElement(
            "section"
        );


    labPage.id =
        "lab-center-page";


    labPage.className =
        "course-page lab-center-page hidden";


    footer.before(
        labPage
    );


    const stationPage =
        document.createElement(
            "section"
        );


    stationPage.id =
        "lab-station-page";


    stationPage.className =
        "lesson-page hidden";


    footer.before(
        stationPage
    );


    // ========================================================================
    // QUESTION GENERATOR
    // ========================================================================

    function buildSpecimenQuestions(
        item
    ) {

        const questions =
            [];


        item.specimens.forEach(
            function (
                structure,
                index
            ) {

                const other =
                    item.specimens
                        .map(
                            (
                                value,
                                i
                            ) => i
                        )
                        .filter(
                            i =>
                                i !== index
                        );


                const distractorIndexes =
                    shuffle(
                        other
                    )
                        .slice(
                            0,
                            3
                        );


                let raw = [

                    {
                        text:
                            structure.name,
                        correct:
                            true
                    },

                    ...distractorIndexes.map(
                        i => ({
                            text:
                                item.specimens[i]
                                    .name,
                            correct:
                                false
                        })
                    )

                ];


                raw =
                    shuffle(
                        raw
                    );


                questions.push({

                    id:
                        `${item.id}_identify_${index}`,

                    type:
                        "mcq",

                    topicId:
                        item.id,

                    q:
                        `Identify the structure from this practical clue:<br><br><strong>${structure.clue}</strong>`,

                    choices:
                        raw.map(
                            option =>
                                option.text
                        ),

                    answer:
                        raw.findIndex(
                            option =>
                                option.correct
                        ),

                    explanation:
                        `<strong>${structure.name}</strong>: ${structure.clue} ${structure.tip}`

                });


                raw = [

                    {
                        text:
                            structure.function,
                        correct:
                            true
                    },

                    ...distractorIndexes.map(
                        i => ({
                            text:
                                item.specimens[i]
                                    .function,
                            correct:
                                false
                        })
                    )

                ];


                raw =
                    shuffle(
                        raw
                    );


                questions.push({

                    id:
                        `${item.id}_function_${index}`,

                    type:
                        "mcq",

                    topicId:
                        item.id,

                    q:
                        `What is the major function or significance of <strong>${structure.name}</strong>?`,

                    choices:
                        raw.map(
                            option =>
                                option.text
                        ),

                    answer:
                        raw.findIndex(
                            option =>
                                option.correct
                        ),

                    explanation:
                        `${structure.name}: ${structure.function}`

                });

            }
        );


        return questions;

    }


    function buildQuestionBank(
        item
    ) {

        const custom =
            item.questions.map(
                question => ({

                    ...question,

                    topicId:
                        item.id

                })
            );


        return [

            ...custom,

            ...buildSpecimenQuestions(
                item
            )

        ];

    }


    function allQuestions() {

        return LAB_STATIONS
            .flatMap(
                item =>
                    buildQuestionBank(
                        item
                    )
            );

    }


    function getQuestionById(
        item,
        id
    ) {

        return (
            buildQuestionBank(
                item
            ).find(
                question =>
                    question.id === id
            ) || null
        );

    }


    function stationQuizQuestions(
        item
    ) {

        const custom =
            shuffle(
                item.questions.map(
                    question => ({

                        ...question,

                        topicId:
                            item.id

                    })
                )
            );


        const generated =
            shuffle(
                buildSpecimenQuestions(
                    item
                )
            );


        const chosen =
            custom.slice(
                0,
                Math.min(
                    4,
                    custom.length
                )
            );


        return shuffle([

            ...chosen,

            ...generated.slice(
                0,
                Math.max(
                    0,
                    STATION_QUIZ_LENGTH -
                    chosen.length
                )
            )

        ]);

    }


    // ========================================================================
    // RENDER COURSE PAGE
    // ========================================================================

    function stationCardHTML(
        item
    ) {

        const storage =
            storageFor(
                item.id
            );


        const score =
            getNumber(
                storage.score
            );


        const mastered =
            score >= PASS_SCORE;


        return `

            <article
                class="topic-card lab-station-card"
                data-lab-station="${item.id}"
            >

                <div class="topic-status">
                    ${
                        mastered
                            ? "✓"
                            : item.number
                    }
                </div>

                <div class="topic-information">

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                    <div class="topic-tags">

                        <span>
                            Practical
                        </span>

                        <span>
                            Identification
                        </span>

                        <span>
                            Lab Quiz
                        </span>

                    </div>

                    <div class="lab-station-stats">

                        <span class="lab-stat-pill">
                            🔬
                            ${item.specimens.length}
                            structures
                        </span>

                        <span class="lab-stat-pill">
                            📖
                            ${item.sections.length}
                            lessons
                        </span>

                        <span class="lab-stat-pill">
                            ❓
                            ${
                                buildQuestionBank(
                                    item
                                ).length
                            }
                            questions
                        </span>

                        <span class="lab-stat-pill">
                            🎯 Best:
                            ${score}%
                        </span>

                    </div>

                </div>

                <button class="topic-button">
                    ${
                        mastered
                            ? "Review →"
                            : "Start Lab →"
                    }
                </button>

            </article>

        `;

    }


    function renderCoursePage() {

        const modulesHTML =
            MODULES.map(
                function (
                    module
                ) {

                    const stations =
                        LAB_STATIONS.filter(
                            item =>
                                item.module ===
                                module.number
                        );


                    return `

                        <div class="module-section">

                            <div class="module-heading">

                                <span class="module-number">

                                    ${
                                        String(
                                            module.number
                                        ).padStart(
                                            2,
                                            "0"
                                        )
                                    }

                                </span>

                                <div>

                                    <p class="section-label">
                                        PRACTICAL MODULE
                                        ${module.number}
                                    </p>

                                    <h2>
                                        ${module.title}
                                    </h2>

                                </div>

                            </div>

                            <div class="topic-list">

                                ${
                                    stations
                                        .map(
                                            stationCardHTML
                                        )
                                        .join("")
                                }

                            </div>

                        </div>

                    `;

                }
            )
            .join("");


        labPage.innerHTML = `

            <div class="course-page-header">

                <button
                    id="lab-back-dashboard"
                    class="back-button"
                >
                    ← Dashboard
                </button>

                <div class="course-page-title">

                    <div class="course-page-icon">
                        🔬
                    </div>

                    <div>

                        <p class="section-label">
                            PRACTICAL TRAINING CENTER
                        </p>

                        <h1>
                            Anatomy & Science Lab Center
                        </h1>

                        <p>

                            ${STATION_COUNT}
                            practical stations covering
                            anatomy identification,
                            histology, microscopy,
                            microbiology procedures
                            and quantitative chemistry labs.

                        </p>

                    </div>

                </div>

            </div>


            <div class="course-main-progress">

                <div>

                    <p>
                        Practical Mastery
                    </p>

                    <h2>

                        <span id="lab-course-progress">
                            0
                        </span>%

                    </h2>

                </div>

                <div class="course-progress-large">

                    <div
                        id="lab-course-progress-bar"
                        class="course-progress-large-fill"
                    ></div>

                </div>

            </div>


            <div class="lab-center-note">

                <strong>
                    How to use the Lab Center:
                </strong>

                Study the specimen clues,
                practice identification without
                looking at the answer,
                complete the identification drill
                and earn at least
                ${PASS_SCORE}%
                on each station practical.

                Missed structures automatically
                move into your Lab Weak Areas.

            </div>


            ${modulesHTML}


            <div class="final-practice-card">

                <div>

                    <p class="section-label">
                        LAB MASTERY CENTER
                    </p>

                    <h2>
                        Comprehensive Practical Training
                    </h2>

                    <p>

                        Practice structures from
                        all completed lab modules
                        or take the
                        ${FINAL_PRACTICAL_LENGTH}-question
                        final practical.

                    </p>

                </div>

                <div class="final-practice-actions">

                    <button
                        id="lab-weak-button"
                    >
                        🎯 Weak Structures
                    </button>

                    <button
                        id="lab-mixed-button"
                    >
                        🔬 Mixed Practical
                    </button>

                    <button
                        id="lab-final-button"
                    >
                        🏆 Final Practical
                    </button>

                </div>

            </div>

        `;


        document
            .getElementById(
                "lab-back-dashboard"
            )
            .addEventListener(
                "click",
                showDashboard
            );


        document
            .querySelectorAll(
                ".lab-station-card"
            )
            .forEach(
                function (
                    card
                ) {

                    card.addEventListener(

                        "click",

                        function () {

                            showStation(
                                card.dataset
                                    .labStation
                            );

                        }

                    );


                    const button =
                        card.querySelector(
                            ".topic-button"
                        );


                    button.addEventListener(

                        "click",

                        function (
                            event
                        ) {

                            event.stopPropagation();


                            showStation(
                                card.dataset
                                    .labStation
                            );

                        }

                    );

                }
            );


        document
            .getElementById(
                "lab-weak-button"
            )
            .addEventListener(
                "click",
                startWeakPractice
            );


        document
            .getElementById(
                "lab-mixed-button"
            )
            .addEventListener(
                "click",
                startMixedPractical
            );


        document
            .getElementById(
                "lab-final-button"
            )
            .addEventListener(
                "click",
                startFinalPractical
            );

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

        ].forEach(
            function (
                element
            ) {

                if (
                    element
                ) {

                    element.classList.add(
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


    function showLabCenter() {

        hideMainViews();


        labPage.classList.remove(
            "hidden"
        );


        updateProgress();


        scrollTopSmooth();

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
                element
            ) {

                if (
                    element
                ) {

                    element.classList.remove(
                        "hidden"
                    );

                }

            }
        );


        closeModal();

        updateProgress();

        updateSharedDashboard();

        scrollTopSmooth();

    }


    document.addEventListener(

        "click",

        function (
            event
        ) {

            const card =
                event.target.closest(
                    '.course-card[data-course="labs"]'
                );


            if (
                !card
            ) {

                return;

            }


            event.preventDefault();

            event.stopPropagation();

            event.stopImmediatePropagation();


            showLabCenter();

        },

        true

    );


    // ========================================================================
    // STATION PAGE
    // ========================================================================

    let currentStation =
        null;


    let stationObserver =
        null;


    function renderSpecimens(
        item
    ) {

        return `

            <div class="lab-specimen-grid">

                ${
                    item.specimens.map(
                        structure => `

                            <div class="lab-specimen-card">

                                <h3>
                                    ${structure.name}
                                </h3>

                                <div class="lab-specimen-label">
                                    IDENTIFICATION CLUE
                                </div>

                                <p>
                                    ${structure.clue}
                                </p>

                                <div class="lab-specimen-label">
                                    FUNCTION
                                </div>

                                <p>
                                    ${structure.function}
                                </p>

                                <div class="lab-specimen-label">
                                    PRACTICAL TIP
                                </div>

                                <p>
                                    ${structure.tip}
                                </p>

                            </div>

                        `
                    ).join("")
                }

            </div>

        `;

    }


    function renderSections(
        item
    ) {

        return item.sections.map(
            function (
                part,
                index
            ) {

                return `

                    <section
                        id="lab-section-${index}"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    index + 3
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                LAB CONCEPT
                            </p>

                            <h2>
                                ${part.title}
                            </h2>

                            ${
                                part.paragraphs.map(
                                    paragraph =>
                                        `<p>${paragraph}</p>`
                                ).join("")
                            }

                        </div>

                    </section>

                `;

            }
        ).join("");

    }


    function showStation(
        stationId
    ) {

        const item =
            STATION_MAP[
                stationId
            ];


        if (
            !item
        ) {

            return;

        }


        currentStation =
            item;


        hideMainViews();


        stationPage.innerHTML = `

            <div class="lesson-top-bar">

                <button
                    id="lab-back-course"
                    class="back-button"
                >
                    ← Lab Center
                </button>

                <div class="lesson-progress-text">

                    <span>
                        Station
                        ${item.number}
                        of
                        ${STATION_COUNT}
                    </span>

                    <span>
                        ${item.title}
                    </span>

                </div>

            </div>


            <div class="lesson-hero">

                <div class="lesson-hero-content">

                    <p class="section-label">
                        ANATOMY & SCIENCE LAB
                    </p>

                    <h1>
                        ${item.title}
                    </h1>

                    <p class="lesson-description">
                        ${item.description}
                    </p>

                    <div class="lesson-meta">

                        <span>
                            🔬
                            ${item.specimens.length}
                            Structures
                        </span>

                        <span>
                            📖 Full Lab Guide
                        </span>

                        <span>
                            🎯 Identification Drill
                        </span>

                        <span>
                            🧠 Practical Quiz
                        </span>

                    </div>

                </div>

                <div class="lesson-hero-number">

                    ${
                        String(
                            item.number
                        ).padStart(
                            2,
                            "0"
                        )
                    }

                </div>

            </div>


            <nav class="lesson-navigation">

                <a href="#lab-objectives">
                    Objectives
                </a>

                <a href="#lab-specimens">
                    Structures
                </a>

                <a href="#lab-procedure">
                    Procedure
                </a>

                <a href="#lab-clinical">
                    Clinical
                </a>

                <a href="#lab-errors">
                    Mistakes
                </a>

                <a href="#lab-summary">
                    Memory
                </a>

            </nav>


            <div class="lesson-layout">

                <article class="lesson-content">


                    <section
                        id="lab-objectives"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            01
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                PRACTICAL OBJECTIVES
                            </p>

                            <h2>
                                What You Must Be Able to Identify
                            </h2>

                            <p>
                                ${item.description}
                            </p>

                            <div class="lab-objectives">

                                <h3>
                                    🎯 Lab Objectives
                                </h3>

                                <ul>

                                    ${
                                        item.objectives.map(
                                            objective =>
                                                `<li>${objective}</li>`
                                        ).join("")
                                    }

                                </ul>

                            </div>

                        </div>

                    </section>


                    <section
                        id="lab-specimens"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            02
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                SPECIMEN / MODEL IDENTIFICATION
                            </p>

                            <h2>
                                Structures & Practical Clues
                            </h2>

                            ${renderSpecimens(item)}

                        </div>

                    </section>


                    ${renderSections(item)}


                    <section
                        id="lab-procedure"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    item.sections.length +
                                    3
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                LAB SEQUENCE
                            </p>

                            <h2>
                                Practical Procedure
                            </h2>

                            <div class="lab-procedure">

                                ${
                                    item.procedure.map(
                                        step => `

                                            <div class="lab-procedure-step">
                                                ${step}
                                            </div>

                                        `
                                    ).join("")
                                }

                            </div>

                        </div>

                    </section>


                    <section
                        id="lab-clinical"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    item.sections.length +
                                    4
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                CLINICAL CONNECTION
                            </p>

                            <h2>
                                ${item.clinical.title}
                            </h2>

                            <div class="clinical-case">

                                <div class="clinical-case-header">

                                    <span>
                                        🩺
                                    </span>

                                    <div>

                                        <p>
                                            APPLICATION
                                        </p>

                                        <h3>
                                            Practical Relevance
                                        </h3>

                                    </div>

                                </div>

                                <p>
                                    ${item.clinical.scenario}
                                </p>

                                <div class="clinical-question">

                                    <strong>
                                        Why it matters
                                    </strong>

                                    <p class="clinical-answer">
                                        ${item.clinical.connection}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>


                    <section
                        id="lab-errors"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    item.sections.length +
                                    5
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                PRACTICAL TRAPS
                            </p>

                            <h2>
                                Common Lab Mistakes
                            </h2>

                            <div class="lab-pitfalls">

                                ${
                                    item.pitfalls.map(
                                        pitfall => `

                                            <div class="lab-pitfall">

                                                <strong>
                                                    ⚠️
                                                </strong>

                                                ${pitfall}

                                            </div>

                                        `
                                    ).join("")
                                }

                            </div>

                        </div>

                    </section>


                    <section
                        id="lab-summary"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    item.sections.length +
                                    6
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                PRACTICAL MEMORY
                            </p>

                            <h2>
                                High-Yield Identification Rules
                            </h2>

                            <div class="lab-memory">

                                ${
                                    item.memory.map(
                                        memory => `

                                            <div class="lab-memory-item">
                                                🧠 ${memory}
                                            </div>

                                        `
                                    ).join("")
                                }

                            </div>


                            <div
                                class="mastery-reminder"
                                style="margin-top:20px;"
                            >

                                <span>
                                    🎯
                                </span>

                                <div>

                                    <strong>
                                        Practical Mastery
                                    </strong>

                                    <p>

                                        Complete the
                                        Identification Drill
                                        and earn at least
                                        ${PASS_SCORE}%
                                        on the station quiz.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>


                    <section class="lesson-actions">

                        <div>

                            <p class="section-label">
                                PRACTICAL TRAINING
                            </p>

                            <h2>
                                Test Your Identification
                            </h2>

                            <p>

                                Use the structure clues
                                without looking back at
                                the specimen list.

                            </p>

                        </div>

                        <div class="lesson-action-buttons">

                            <button
                                id="lab-review-button"
                                class="secondary-lesson-button"
                            >
                                🧠 Quick Review
                            </button>

                            <button
                                id="lab-identify-button"
                                class="secondary-lesson-button"
                            >
                                🔬 Identification Drill
                            </button>

                            <button
                                id="lab-quiz-button"
                                class="primary-lesson-button"
                            >
                                🎯 Station Practical
                            </button>

                        </div>

                    </section>

                </article>


                <aside class="lesson-sidebar">

                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            STATION PROGRESS
                        </p>

                        <div class="sidebar-progress-number">

                            <span
                                id="lab-station-progress"
                            >
                                0
                            </span>%

                        </div>

                        <div class="sidebar-progress-bar">

                            <div
                                id="lab-station-progress-fill"
                                class="sidebar-progress-fill"
                            ></div>

                        </div>

                    </div>


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            CHECKLIST
                        </p>

                        <div
                            id="lab-checklist"
                            class="sidebar-checklist"
                        >

                            <div>
                                <span>○</span>
                                Read lab guide
                            </div>

                            <div>
                                <span>○</span>
                                Quick Review
                            </div>

                            <div>
                                <span>○</span>
                                Identification Drill
                            </div>

                            <div>
                                <span>○</span>
                                Pass Practical
                            </div>

                        </div>

                    </div>


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            BEST PRACTICAL
                        </p>

                        <div class="sidebar-progress-number">

                            <span id="lab-best-score">
                                0
                            </span>%

                        </div>

                    </div>


                    <div class="sidebar-card sidebar-tip">

                        <span>
                            💡
                        </span>

                        <div>

                            <strong>
                                Practical Strategy
                            </strong>

                            <p>

                                Identify the region first,
                                then orientation,
                                then the specific structure.

                            </p>

                        </div>

                    </div>

                </aside>

            </div>

        `;


        document
            .getElementById(
                "lab-back-course"
            )
            .addEventListener(
                "click",
                showLabCenter
            );


        document
            .getElementById(
                "lab-review-button"
            )
            .addEventListener(

                "click",

                function () {

                    startQuickReview(
                        item
                    );

                }

            );


        document
            .getElementById(
                "lab-identify-button"
            )
            .addEventListener(

                "click",

                function () {

                    startIdentification(
                        item
                    );

                }

            );


        document
            .getElementById(
                "lab-quiz-button"
            )
            .addEventListener(

                "click",

                function () {

                    startStationQuiz(
                        item
                    );

                }

            );


        stationPage.classList.remove(
            "hidden"
        );


        updateStationProgress(
            item
        );


        observeStation(
            item
        );


        scrollTopSmooth();

    }


    // ========================================================================
    // READ TRACKING
    // ========================================================================

    function observeStation(
        item
    ) {

        if (
            stationObserver
        ) {

            stationObserver.disconnect();

        }


        const summary =
            document.getElementById(
                "lab-summary"
            );


        if (
            !summary ||
            !(
                "IntersectionObserver"
                in window
            )
        ) {

            return;

        }


        stationObserver =
            new IntersectionObserver(

                function (
                    entries
                ) {

                    entries.forEach(
                        function (
                            entry
                        ) {

                            if (
                                entry.isIntersecting &&
                                !stationPage
                                    .classList
                                    .contains(
                                        "hidden"
                                    )
                            ) {

                                localStorage.setItem(
                                    storageFor(
                                        item.id
                                    ).read,
                                    "true"
                                );


                                updateStationProgress(
                                    item
                                );


                                updateProgress();

                            }

                        }
                    );

                },

                {
                    threshold: 0.25
                }

            );


        stationObserver.observe(
            summary
        );

    }


    // ========================================================================
    // PROGRESS
    // ========================================================================

    function calculateStationProgress(
        item
    ) {

        const storage =
            storageFor(
                item.id
            );


        let progress =
            0;


        if (
            getBoolean(
                storage.read
            )
        ) {

            progress += 20;

        }


        if (
            getBoolean(
                storage.review
            )
        ) {

            progress += 20;

        }


        if (
            getBoolean(
                storage.identify
            )
        ) {

            progress += 20;

        }


        if (
            getBoolean(
                storage.passed
            )
        ) {

            progress += 40;

        }


        return progress;

    }


    function isMastered(
        item
    ) {

        return (
            getNumber(
                storageFor(
                    item.id
                ).score
            ) >= PASS_SCORE
        );

    }


    function countMastered() {

        return LAB_STATIONS
            .filter(
                isMastered
            )
            .length;

    }


    function coursePercent() {

        return Math.round(

            (
                countMastered() /
                STATION_COUNT
            ) *
            100

        );

    }


    function updateStationProgress(
        item
    ) {

        const storage =
            storageFor(
                item.id
            );


        const progress =
            calculateStationProgress(
                item
            );


        const number =
            document.getElementById(
                "lab-station-progress"
            );


        const bar =
            document.getElementById(
                "lab-station-progress-fill"
            );


        const score =
            document.getElementById(
                "lab-best-score"
            );


        if (
            number
        ) {

            number.textContent =
                progress;

        }


        if (
            bar
        ) {

            bar.style.width =
                `${progress}%`;

        }


        if (
            score
        ) {

            score.textContent =
                getNumber(
                    storage.score
                );

        }


        const checklist =
            document.querySelectorAll(
                "#lab-checklist > div"
            );


        const states = [

            getBoolean(
                storage.read
            ),

            getBoolean(
                storage.review
            ),

            getBoolean(
                storage.identify
            ),

            getBoolean(
                storage.passed
            )

        ];


        checklist.forEach(
            function (
                row,
                index
            ) {

                const icon =
                    row.querySelector(
                        "span"
                    );


                if (
                    !icon
                ) {

                    return;

                }


                icon.textContent =
                    states[index]
                        ? "✓"
                        : "○";


                icon.style.color =
                    states[index]
                        ? "#16a34a"
                        : "";


                row.style.fontWeight =
                    states[index]
                        ? "700"
                        : "";

            }
        );

    }


    function updateProgress() {

        const percent =
            coursePercent();


        const text =
            document.getElementById(
                "lab-course-progress"
            );


        const bar =
            document.getElementById(
                "lab-course-progress-bar"
            );


        if (
            text
        ) {

            text.textContent =
                percent;

        }


        if (
            bar
        ) {

            bar.style.width =
                `${percent}%`;

        }


        const cardSpans =
            labCard.querySelectorAll(
                ".course-progress span"
            );


        if (
            cardSpans.length > 1
        ) {

            cardSpans[1].textContent =
                `${percent}%`;

        }


        const cardFill =
            labCard.querySelector(
                ".course-progress-fill"
            );


        if (
            cardFill
        ) {

            cardFill.style.width =
                `${percent}%`;

        }


        document
            .querySelectorAll(
                ".lab-station-card"
            )
            .forEach(
                function (
                    card
                ) {

                    const item =
                        STATION_MAP[
                            card.dataset
                                .labStation
                        ];


                    const status =
                        card.querySelector(
                            ".topic-status"
                        );


                    const button =
                        card.querySelector(
                            ".topic-button"
                        );


                    if (
                        status
                    ) {

                        status.textContent =
                            isMastered(
                                item
                            )
                                ? "✓"
                                : item.number;

                    }


                    if (
                        button
                    ) {

                        const progress =
                            calculateStationProgress(
                                item
                            );


                        button.textContent =
                            isMastered(
                                item
                            )
                                ? "Review →"
                                : progress > 0
                                    ? "Continue →"
                                    : "Start Lab →";

                    }

                }
            );


        if (
            currentStation &&
            !stationPage
                .classList
                .contains(
                    "hidden"
                )
        ) {

            updateStationProgress(
                currentStation
            );

        }


        if (
            questionsAnswered
        ) {

            questionsAnswered.textContent =
                getNumber(
                    SHARED_QUESTIONS_KEY
                );

        }


        updateSharedDashboard();

    }


    // ========================================================================
    // SHARED DASHBOARD
    // ========================================================================

    function readCoursePercent(
        courseId
    ) {

        const card =
            document.querySelector(
                `.course-card[data-course="${courseId}"]`
            );


        if (
            !card
        ) {

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


        return (
            Number(
                spans[1]
                    .textContent
                    .replace(
                        "%",
                        ""
                    )
            ) || 0
        );

    }


    function updateSharedDashboard() {

        const builtCourses = [

            "anatomy1",

            "anatomy2",

            "chemistry",

            "microbiology",

            "statistics",

            "nutrition",

            "labs"

        ];


        const percentages =
            builtCourses.map(
                readCoursePercent
            );


        const average =
            Math.round(

                percentages.reduce(
                    (
                        total,
                        value
                    ) =>
                        total +
                        value,
                    0
                ) /

                builtCourses.length

            );


        if (
            overallProgress
        ) {

            overallProgress.textContent =
                average;

        }


        if (
            overallProgressBar
        ) {

            overallProgressBar.style.width =
                `${average}%`;

        }


        if (
            topicsMastered
        ) {

            const mastered =
                Array.from(
                    document.querySelectorAll(
                        ".course-page .topic-status"
                    )
                )
                    .filter(
                        item =>
                            item.textContent
                                .trim() === "✓"
                    )
                    .length;


            topicsMastered.textContent =
                mastered;

        }


        if (
            questionsAnswered
        ) {

            questionsAnswered.textContent =
                getNumber(
                    SHARED_QUESTIONS_KEY
                );

        }

    }


    // ========================================================================
    // MODAL
    // ========================================================================

    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "lab-study-overlay";


    overlay.className =
        "study-overlay hidden";


    overlay.innerHTML = `

        <div class="study-modal">

            <div class="study-modal-header">

                <div>

                    <p
                        id="lab-modal-label"
                        class="study-modal-label"
                    ></p>

                    <h2
                        id="lab-modal-title"
                    ></h2>

                </div>

                <button
                    id="lab-modal-close"
                    class="study-modal-close"
                >
                    ×
                </button>

            </div>

            <div
                id="lab-modal-content"
            ></div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const modalLabel =
        document.getElementById(
            "lab-modal-label"
        );


    const modalTitle =
        document.getElementById(
            "lab-modal-title"
        );


    const modalContent =
        document.getElementById(
            "lab-modal-content"
        );


    function openModal() {

        overlay.classList.remove(
            "hidden"
        );


        document.body.style.overflow =
            "hidden";

    }


    function closeModal() {

        overlay.classList.add(
            "hidden"
        );


        document.body.style.overflow =
            "";

    }


    document
        .getElementById(
            "lab-modal-close"
        )
        .addEventListener(
            "click",
            closeModal
        );


    overlay.addEventListener(

        "click",

        function (
            event
        ) {

            if (
                event.target === overlay
            ) {

                closeModal();

            }

        }

    );


    // ========================================================================
    // QUICK REVIEW
    // ========================================================================

    let reviewStation =
        null;


    let reviewOrder =
        [];


    let reviewIndex =
        0;


    let reviewRevealed =
        false;


    function startQuickReview(
        item
    ) {

        reviewStation =
            item;


        reviewOrder =
            shuffle(
                item.specimens.map(
                    (
                        structure,
                        index
                    ) => index
                )
            );


        reviewIndex =
            0;


        reviewRevealed =
            false;


        modalLabel.textContent =
            `LAB STATION ${item.number}`;


        modalTitle.textContent =
            "Structure Quick Review";


        openModal();

        renderReview();

    }


    function renderReview() {

        const item =
            reviewStation;


        const structure =
            item.specimens[
                reviewOrder[
                    reviewIndex
                ]
            ];


        const progress =
            Math.round(

                (
                    (
                        reviewIndex +
                        1
                    ) /
                    reviewOrder.length
                ) *
                100

            );


        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Structure
                        ${reviewIndex + 1}
                        of
                        ${reviewOrder.length}
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


            <div class="review-body">

                <div class="review-card">

                    ${
                        reviewRevealed
                            ? `

                                <p class="review-type">
                                    IDENTIFICATION
                                </p>

                                <h3 class="review-question">
                                    ${structure.name}
                                </h3>

                                <p class="review-answer">
                                    ${structure.clue}
                                </p>

                                <p class="review-answer">
                                    <strong>
                                        Function:
                                    </strong>
                                    ${structure.function}
                                </p>

                                <p class="review-hint">
                                    ${structure.tip}
                                </p>

                            `
                            : `

                                <p class="review-type">
                                    PRACTICAL CLUE
                                </p>

                                <h3 class="review-question">
                                    ${structure.clue}
                                </h3>

                                <p class="review-hint">

                                    Name the structure
                                    before revealing it.

                                </p>

                            `
                    }

                </div>


                <div class="study-actions">

                    <div class="study-actions-group">

                        <button
                            id="lab-review-prev"
                            class="study-button"
                            ${
                                reviewIndex === 0
                                    ? "disabled"
                                    : ""
                            }
                        >
                            ← Previous
                        </button>

                    </div>

                    <div class="study-actions-group">

                        ${
                            reviewRevealed
                                ? `

                                    <button
                                        id="lab-review-next"
                                        class="study-button primary"
                                    >

                                        ${
                                            reviewIndex ===
                                            reviewOrder.length - 1
                                                ? "Finish Review ✓"
                                                : "Next →"
                                        }

                                    </button>

                                `
                                : `

                                    <button
                                        id="lab-review-reveal"
                                        class="study-button primary"
                                    >
                                        Reveal Structure
                                    </button>

                                `
                        }

                    </div>

                </div>

            </div>

        `;


        const previous =
            document.getElementById(
                "lab-review-prev"
            );


        const reveal =
            document.getElementById(
                "lab-review-reveal"
            );


        const next =
            document.getElementById(
                "lab-review-next"
            );


        if (
            previous
        ) {

            previous.addEventListener(

                "click",

                function () {

                    if (
                        reviewIndex > 0
                    ) {

                        reviewIndex--;

                        reviewRevealed =
                            false;

                        renderReview();

                    }

                }

            );

        }


        if (
            reveal
        ) {

            reveal.addEventListener(

                "click",

                function () {

                    reviewRevealed =
                        true;

                    renderReview();

                }

            );

        }


        if (
            next
        ) {

            next.addEventListener(

                "click",

                function () {

                    if (
                        reviewIndex <
                        reviewOrder.length - 1
                    ) {

                        reviewIndex++;

                        reviewRevealed =
                            false;

                        renderReview();

                    } else {

                        localStorage.setItem(
                            storageFor(
                                item.id
                            ).review,
                            "true"
                        );


                        updateProgress();

                        updateStationProgress(
                            item
                        );


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

                                    You reviewed
                                    ${item.specimens.length}
                                    practical structures.

                                </p>

                                <button
                                    id="lab-review-finish"
                                    class="study-button primary"
                                >
                                    Return to Lab
                                </button>

                            </div>

                        `;


                        document
                            .getElementById(
                                "lab-review-finish"
                            )
                            .addEventListener(
                                "click",
                                closeModal
                            );

                    }

                }

            );

        }

    }


    // ========================================================================
    // IDENTIFICATION DRILL
    // ========================================================================

    let identifyStation =
        null;


    let identifyQuestions =
        [];


    let identifyIndex =
        0;


    let identifyCorrect =
        0;


    let identifySelected =
        null;


    let identifyChecked =
        false;


    function startIdentification(
        item
    ) {

        identifyStation =
            item;


        identifyQuestions =
            shuffle(
                buildSpecimenQuestions(
                    item
                )
                    .filter(
                        question =>
                            question.id.includes(
                                "_identify_"
                            )
                    )
            );


        identifyIndex =
            0;


        identifyCorrect =
            0;


        identifySelected =
            null;


        identifyChecked =
            false;


        modalLabel.textContent =
            `LAB STATION ${item.number}`;


        modalTitle.textContent =
            "Identification Drill";


        openModal();

        renderIdentification();

    }


    function renderIdentification() {

        const question =
            identifyQuestions[
                identifyIndex
            ];


        const progress =
            Math.round(

                (
                    (
                        identifyIndex +
                        1
                    ) /
                    identifyQuestions.length
                ) *
                100

            );


        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Structure
                        ${identifyIndex + 1}
                        of
                        ${identifyQuestions.length}
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


            <div class="lab-clue-card">

                <div class="lab-clue-label">
                    PRACTICAL CLUE
                </div>

                <div class="lab-clue">
                    ${question.q}
                </div>

                <div class="lab-identify-options">

                    ${
                        question.choices.map(
                            function (
                                choice,
                                index
                            ) {

                                let className =
                                    "lab-identify-button";


                                if (
                                    identifySelected === index
                                ) {

                                    className +=
                                        " selected";

                                }


                                if (
                                    identifyChecked
                                ) {

                                    if (
                                        index ===
                                        question.answer
                                    ) {

                                        className +=
                                            " correct";

                                    } else if (
                                        index ===
                                        identifySelected
                                    ) {

                                        className +=
                                            " incorrect";

                                    }

                                }


                                return `

                                    <button
                                        class="${className}"
                                        data-identify-answer="${index}"
                                        ${
                                            identifyChecked
                                                ? "disabled"
                                                : ""
                                        }
                                    >
                                        ${choice}
                                    </button>

                                `;

                            }
                        ).join("")
                    }

                </div>


                ${
                    identifyChecked
                        ? `

                            <div
                                class="quiz-feedback ${
                                    identifySelected ===
                                    question.answer
                                        ? "correct"
                                        : "incorrect"
                                }"
                                style="margin-top:18px;"
                            >

                                <strong>

                                    ${
                                        identifySelected ===
                                        question.answer
                                            ? "✓ Correct"
                                            : "✕ Review this structure"
                                    }

                                </strong>

                                <p>
                                    ${question.explanation}
                                </p>

                            </div>

                        `
                        : ""
                }

            </div>


            <div class="study-actions">

                <div></div>

                <div class="study-actions-group">

                    ${
                        identifyChecked
                            ? `

                                <button
                                    id="identify-next"
                                    class="study-button primary"
                                >

                                    ${
                                        identifyIndex ===
                                        identifyQuestions.length - 1
                                            ? "Finish Drill →"
                                            : "Next Structure →"
                                    }

                                </button>

                            `
                            : `

                                <button
                                    id="identify-check"
                                    class="study-button primary"
                                    ${
                                        identifySelected === null
                                            ? "disabled"
                                            : ""
                                    }
                                >
                                    Check Structure
                                </button>

                            `
                    }

                </div>

            </div>

        `;


        document
            .querySelectorAll(
                "[data-identify-answer]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(

                        "click",

                        function () {

                            if (
                                identifyChecked
                            ) {

                                return;

                            }


                            identifySelected =
                                Number(
                                    button.dataset
                                        .identifyAnswer
                                );


                            renderIdentification();

                        }

                    );

                }
            );


        const check =
            document.getElementById(
                "identify-check"
            );


        const next =
            document.getElementById(
                "identify-next"
            );


        if (
            check
        ) {

            check.addEventListener(

                "click",

                function () {

                    if (
                        identifySelected ===
                        null
                    ) {

                        return;

                    }


                    if (
                        identifySelected ===
                        question.answer
                    ) {

                        identifyCorrect++;

                    }


                    identifyChecked =
                        true;


                    renderIdentification();

                }

            );

        }


        if (
            next
        ) {

            next.addEventListener(

                "click",

                function () {

                    if (
                        identifyIndex <
                        identifyQuestions.length - 1
                    ) {

                        identifyIndex++;

                        identifySelected =
                            null;

                        identifyChecked =
                            false;

                        renderIdentification();

                    } else {

                        localStorage.setItem(
                            storageFor(
                                identifyStation.id
                            ).identify,
                            "true"
                        );


                        updateProgress();


                        updateStationProgress(
                            identifyStation
                        );


                        const score =
                            Math.round(

                                (
                                    identifyCorrect /
                                    identifyQuestions.length
                                ) *
                                100

                            );


                        modalContent.innerHTML = `

                            <div class="results">

                                <div class="results-icon">
                                    🔬
                                </div>

                                <p class="study-modal-label">
                                    IDENTIFICATION COMPLETE
                                </p>

                                <h2>
                                    ${score}%
                                </h2>

                                <p class="results-message">

                                    You identified
                                    ${identifyCorrect}
                                    of
                                    ${identifyQuestions.length}
                                    structures correctly.

                                </p>

                                <div
                                    class="study-actions-group"
                                    style="
                                        justify-content:center;
                                        flex-wrap:wrap;
                                    "
                                >

                                    <button
                                        id="identify-again"
                                        class="study-button"
                                    >
                                        🔄 Try Again
                                    </button>

                                    <button
                                        id="identify-quiz"
                                        class="study-button primary"
                                    >
                                        Start Practical →
                                    </button>

                                </div>

                            </div>

                        `;


                        document
                            .getElementById(
                                "identify-again"
                            )
                            .addEventListener(

                                "click",

                                function () {

                                    startIdentification(
                                        identifyStation
                                    );

                                }

                            );


                        document
                            .getElementById(
                                "identify-quiz"
                            )
                            .addEventListener(

                                "click",

                                function () {

                                    startStationQuiz(
                                        identifyStation
                                    );

                                }

                            );

                    }

                }

            );

        }

    }


    // ========================================================================
    // QUIZ ENGINE
    // ========================================================================

    let quizQuestions =
        [];


    let quizIndex =
        0;


    let quizCorrect =
        0;


    let quizSelected =
        null;


    let quizNumeric =
        "";


    let quizChecked =
        false;


    let quizMode =
        "station";


    let quizStation =
        null;


    function beginQuiz(
        label,
        title
    ) {

        quizIndex =
            0;


        quizCorrect =
            0;


        quizSelected =
            null;


        quizNumeric =
            "";


        quizChecked =
            false;


        modalLabel.textContent =
            label;


        modalTitle.textContent =
            title;


        openModal();

        renderQuiz();

    }


    function startStationQuiz(
        item
    ) {

        quizMode =
            "station";


        quizStation =
            item;


        quizQuestions =
            stationQuizQuestions(
                item
            );


        beginQuiz(
            `LAB STATION ${item.number}`,
            `${item.title} Practical`
        );

    }


    function startMixedPractical() {

        quizMode =
            "mixed";


        quizStation =
            null;


        quizQuestions =
            shuffle(
                allQuestions()
            )
                .slice(
                    0,
                    MIXED_PRACTICAL_LENGTH
                );


        beginQuiz(
            "LAB CENTER • MIXED PRACTICAL",
            "Mixed Science Practical"
        );

    }


    function startFinalPractical() {

        quizMode =
            "final";


        quizStation =
            null;


        const guaranteed =
            LAB_STATIONS.map(
                function (
                    item
                ) {

                    const pool =
                        buildQuestionBank(
                            item
                        );


                    return shuffle(
                        pool
                    )[0];

                }
            );


        const ids =
            new Set(
                guaranteed.map(
                    question =>
                        `${question.topicId}|${question.id}`
                )
            );


        const extras =
            shuffle(
                allQuestions()
                    .filter(
                        question =>
                            !ids.has(
                                `${question.topicId}|${question.id}`
                            )
                    )
            )
                .slice(
                    0,
                    Math.max(
                        0,
                        FINAL_PRACTICAL_LENGTH -
                        guaranteed.length
                    )
                );


        quizQuestions =
            shuffle([

                ...guaranteed,

                ...extras

            ])
                .slice(
                    0,
                    FINAL_PRACTICAL_LENGTH
                );


        beginQuiz(
            "LAB CENTER • FINAL PRACTICAL",
            "60-Question Final Practical"
        );

    }


    function numericCorrect(
        question,
        value
    ) {

        const entered =
            Number(
                String(
                    value
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


    function answerReady(
        question
    ) {

        if (
            question.type ===
            "numeric"
        ) {

            return (
                String(
                    quizNumeric
                )
                    .trim() !== ""
            );

        }


        return (
            quizSelected !== null
        );

    }


    function renderQuiz() {

        const question =
            quizQuestions[
                quizIndex
            ];


        if (
            !question
        ) {

            return;

        }


        const station =
            STATION_MAP[
                question.topicId
            ];


        const progress =
            Math.round(

                (
                    (
                        quizIndex +
                        1
                    ) /
                    quizQuestions.length
                ) *
                100

            );


        let answerHTML =
            "";


        if (
            question.type ===
            "numeric"
        ) {

            answerHTML = `

                <input
                    id="lab-numeric-answer"
                    class="lab-numeric-input"
                    inputmode="decimal"
                    placeholder="Enter numerical answer"
                    value="${escapeHTML(quizNumeric)}"
                    ${
                        quizChecked
                            ? "disabled"
                            : ""
                    }
                >

                ${
                    question.unit
                        ? `

                            <p
                                style="
                                    margin-top:8px;
                                    color:#667085;
                                "
                            >
                                Unit:
                                ${question.unit}
                            </p>

                        `
                        : ""
                }

            `;

        } else {

            const letters = [
                "A",
                "B",
                "C",
                "D",
                "E"
            ];


            answerHTML = `

                <div class="quiz-options">

                    ${
                        question.choices.map(
                            function (
                                choice,
                                index
                            ) {

                                let className =
                                    "quiz-option";


                                if (
                                    quizSelected ===
                                    index
                                ) {

                                    className +=
                                        " selected";

                                }


                                if (
                                    quizChecked
                                ) {

                                    if (
                                        index ===
                                        question.answer
                                    ) {

                                        className +=
                                            " correct";

                                    } else if (
                                        index ===
                                        quizSelected
                                    ) {

                                        className +=
                                            " incorrect";

                                    }

                                }


                                return `

                                    <button
                                        class="${className}"
                                        data-lab-answer="${index}"
                                        ${
                                            quizChecked
                                                ? "disabled"
                                                : ""
                                        }
                                    >

                                        <span class="quiz-letter">
                                            ${
                                                letters[index] ||
                                                index + 1
                                            }
                                        </span>

                                        <span>
                                            ${choice}
                                        </span>

                                    </button>

                                `;

                            }
                        ).join("")
                    }

                </div>

            `;

        }


        let feedback =
            "";


        if (
            quizChecked
        ) {

            const correct =
                question.type ===
                "numeric"
                    ? numericCorrect(
                        question,
                        quizNumeric
                    )
                    : (
                        quizSelected ===
                        question.answer
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
                                : "✕ Review this station"
                        }

                    </strong>

                    <p>
                        ${question.explanation}
                    </p>

                    ${
                        question.type ===
                        "numeric"
                            ? `

                                <p>

                                    <strong>
                                        Expected:
                                    </strong>

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
                        Question
                        ${quizIndex + 1}
                        of
                        ${quizQuestions.length}
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

                        STATION
                        ${station.number}
                        •
                        ${station.title}

                    </p>

                    <h3 class="quiz-question">
                        ${question.q}
                    </h3>

                    ${answerHTML}

                    ${feedback}

                </div>


                <div class="study-actions">

                    <div class="study-actions-group">

                        <button
                            id="lab-quiz-exit"
                            class="study-button"
                        >
                            Exit
                        </button>

                    </div>

                    <div class="study-actions-group">

                        ${
                            quizChecked
                                ? `

                                    <button
                                        id="lab-quiz-next"
                                        class="study-button primary"
                                    >

                                        ${
                                            quizIndex ===
                                            quizQuestions.length - 1
                                                ? "See Results →"
                                                : "Next →"
                                        }

                                    </button>

                                `
                                : `

                                    <button
                                        id="lab-quiz-check"
                                        class="study-button primary"
                                        ${
                                            answerReady(
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

            </div>

        `;


        document
            .querySelectorAll(
                "[data-lab-answer]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(

                        "click",

                        function () {

                            if (
                                quizChecked
                            ) {

                                return;

                            }


                            quizSelected =
                                Number(
                                    button.dataset
                                        .labAnswer
                                );


                            renderQuiz();

                        }

                    );

                }
            );


        const numericInput =
            document.getElementById(
                "lab-numeric-answer"
            );


        if (
            numericInput
        ) {

            numericInput.addEventListener(

                "input",

                function () {

                    quizNumeric =
                        numericInput.value;


                    const check =
                        document.getElementById(
                            "lab-quiz-check"
                        );


                    if (
                        check
                    ) {

                        check.disabled =
                            !String(
                                quizNumeric
                            )
                                .trim();

                    }

                }

            );


            numericInput.addEventListener(

                "keydown",

                function (
                    event
                ) {

                    if (
                        event.key === "Enter" &&
                        String(
                            numericInput.value
                        )
                            .trim()
                    ) {

                        quizNumeric =
                            numericInput.value;


                        checkQuizAnswer();

                    }

                }

            );

        }


        const check =
            document.getElementById(
                "lab-quiz-check"
            );


        const next =
            document.getElementById(
                "lab-quiz-next"
            );


        const exit =
            document.getElementById(
                "lab-quiz-exit"
            );


        if (
            check
        ) {

            check.addEventListener(
                "click",
                checkQuizAnswer
            );

        }


        if (
            next
        ) {

            next.addEventListener(

                "click",

                function () {

                    if (
                        quizIndex <
                        quizQuestions.length - 1
                    ) {

                        quizIndex++;

                        quizSelected =
                            null;

                        quizNumeric =
                            "";

                        quizChecked =
                            false;

                        renderQuiz();

                    } else {

                        finishQuiz();

                    }

                }

            );

        }


        if (
            exit
        ) {

            exit.addEventListener(
                "click",
                closeModal
            );

        }

    }


    // ========================================================================
    // WEAK AREAS
    // ========================================================================

    function addWeak(
        question
    ) {

        const station =
            STATION_MAP[
                question.topicId
            ];


        if (
            !station
        ) {

            return;

        }


        const key =
            storageFor(
                station.id
            ).missed;


        const array =
            getArray(
                key
            );


        if (
            !array.includes(
                question.id
            )
        ) {

            array.push(
                question.id
            );

        }


        saveArray(
            key,
            array
        );

    }


    function removeWeak(
        question
    ) {

        const station =
            STATION_MAP[
                question.topicId
            ];


        if (
            !station
        ) {

            return;

        }


        const key =
            storageFor(
                station.id
            ).missed;


        saveArray(

            key,

            getArray(
                key
            ).filter(
                id =>
                    id !==
                    question.id
            )

        );

    }


    function getWeakQuestions() {

        const weak =
            [];


        LAB_STATIONS.forEach(
            function (
                item
            ) {

                getArray(
                    storageFor(
                        item.id
                    ).missed
                )
                    .forEach(
                        function (
                            id
                        ) {

                            const question =
                                getQuestionById(
                                    item,
                                    id
                                );


                            if (
                                question
                            ) {

                                weak.push(
                                    question
                                );

                            }

                        }
                    );

            }
        );


        return weak;

    }


    function startWeakPractice() {

        const weak =
            getWeakQuestions();


        if (
            !weak.length
        ) {

            modalLabel.textContent =
                "LAB CENTER • WEAK AREAS";


            modalTitle.textContent =
                "No Weak Structures Yet";


            modalContent.innerHTML = `

                <div class="results">

                    <div class="results-icon">
                        🎯
                    </div>

                    <h2>
                        You're clear for now
                    </h2>

                    <p class="results-message">

                        Structures you miss
                        during lab practicals
                        will appear here automatically.

                    </p>

                    <button
                        id="lab-no-weak-close"
                        class="study-button primary"
                    >
                        Got It
                    </button>

                </div>

            `;


            openModal();


            document
                .getElementById(
                    "lab-no-weak-close"
                )
                .addEventListener(
                    "click",
                    closeModal
                );


            return;

        }


        quizMode =
            "weak";


        quizStation =
            null;


        quizQuestions =
            shuffle(
                weak
            )
                .slice(
                    0,
                    Math.min(
                        25,
                        weak.length
                    )
                );


        beginQuiz(
            "LAB CENTER • WEAK AREAS",
            "Weak Structure Practical"
        );

    }


    // ========================================================================
    // QUIZ ANSWERING
    // ========================================================================

    function checkQuizAnswer() {

        const question =
            quizQuestions[
                quizIndex
            ];


        if (
            !question ||
            quizChecked ||
            !answerReady(
                question
            )
        ) {

            return;

        }


        const correct =
            question.type ===
            "numeric"
                ? numericCorrect(
                    question,
                    quizNumeric
                )
                : (
                    quizSelected ===
                    question.answer
                );


        if (
            correct
        ) {

            quizCorrect++;

            removeWeak(
                question
            );

        } else {

            addWeak(
                question
            );

        }


        localStorage.setItem(

            SHARED_QUESTIONS_KEY,

            getNumber(
                SHARED_QUESTIONS_KEY
            ) + 1

        );


        quizChecked =
            true;


        renderQuiz();

    }


    function saveStationScore(
        item,
        score
    ) {

        const storage =
            storageFor(
                item.id
            );


        localStorage.setItem(

            storage.score,

            Math.max(
                score,
                getNumber(
                    storage.score
                )
            )

        );


        localStorage.setItem(

            storage.attempts,

            getNumber(
                storage.attempts
            ) + 1

        );


        if (
            score >= PASS_SCORE
        ) {

            localStorage.setItem(
                storage.passed,
                "true"
            );

        }


        updateStationProgress(
            item
        );

    }


    function finishQuiz() {

        const score =
            Math.round(

                (
                    quizCorrect /
                    quizQuestions.length
                ) *
                100

            );


        if (
            quizMode ===
            "station" &&
            quizStation
        ) {

            saveStationScore(
                quizStation,
                score
            );

        }


        updateProgress();


        renderResults(
            score
        );

    }


    // ========================================================================
    // RESULTS
    // ========================================================================

    function renderResults(
        score
    ) {

        const incorrect =
            quizQuestions.length -
            quizCorrect;


        const passed =
            score >= PASS_SCORE;


        let title =
            "Practical Complete";


        let message =
            "Missed structures were saved to your Lab Weak Areas.";


        let icon =
            "🔬";


        if (
            quizMode ===
            "station"
        ) {

            title =
                passed
                    ? `${quizStation.title} Mastered!`
                    : "Review the Station";


            message =
                passed
                    ? `You reached the ${PASS_SCORE}% practical mastery requirement.`
                    : `You need ${PASS_SCORE}% to master this station. Review the specimen clues and try another randomized practical.`;


            icon =
                passed
                    ? "🏆"
                    : "🔬";

        }


        if (
            quizMode ===
            "final"
        ) {

            title =
                "Final Science Practical Complete";


            message =
                `You completed the ${quizQuestions.length}-question comprehensive Lab Center practical.`;


            icon =
                "🏆";

        }


        if (
            quizMode ===
            "weak"
        ) {

            title =
                "Weak Structure Review Complete";


            message =
                "Correctly answered structures were removed from your weak-area list.";


            icon =
                "🎯";

        }


        modalContent.innerHTML = `

            <div class="results">

                <div class="results-icon">
                    ${icon}
                </div>

                <p class="study-modal-label">
                    PRACTICAL RESULTS
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
                            Missed
                        </span>

                    </div>

                    <div class="result-card">

                        <strong>
                            ${
                                getWeakQuestions()
                                    .length
                            }
                        </strong>

                        <span>
                            Weak Items
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
                        quizMode ===
                        "station"
                            ? `

                                <button
                                    id="lab-result-retake"
                                    class="study-button"
                                >
                                    🔄 New Practical
                                </button>

                                <button
                                    id="lab-result-identify"
                                    class="study-button"
                                >
                                    🔬 Identification Drill
                                </button>

                                <button
                                    id="lab-result-review"
                                    class="study-button"
                                >
                                    🧠 Review
                                </button>

                            `
                            : ""
                    }


                    ${
                        getWeakQuestions()
                            .length
                            ? `

                                <button
                                    id="lab-result-weak"
                                    class="study-button"
                                >
                                    🎯 Weak Structures
                                </button>

                            `
                            : ""
                    }


                    <button
                        id="lab-result-finish"
                        class="study-button primary"
                    >
                        Finish
                    </button>

                </div>

            </div>

        `;


        const retake =
            document.getElementById(
                "lab-result-retake"
            );


        const identify =
            document.getElementById(
                "lab-result-identify"
            );


        const review =
            document.getElementById(
                "lab-result-review"
            );


        const weak =
            document.getElementById(
                "lab-result-weak"
            );


        const finish =
            document.getElementById(
                "lab-result-finish"
            );


        if (
            retake
        ) {

            retake.addEventListener(

                "click",

                function () {

                    startStationQuiz(
                        quizStation
                    );

                }

            );

        }


        if (
            identify
        ) {

            identify.addEventListener(

                "click",

                function () {

                    startIdentification(
                        quizStation
                    );

                }

            );

        }


        if (
            review
        ) {

            review.addEventListener(

                "click",

                function () {

                    startQuickReview(
                        quizStation
                    );

                }

            );

        }


        if (
            weak
        ) {

            weak.addEventListener(
                "click",
                startWeakPractice
            );

        }


        if (
            finish
        ) {

            finish.addEventListener(
                "click",
                closeModal
            );

        }

    }


    // ========================================================================
    // ESCAPE KEY
    // ========================================================================

    document.addEventListener(

        "keydown",

        function (
            event
        ) {

            if (
                event.key === "Escape" &&
                !overlay
                    .classList
                    .contains(
                        "hidden"
                    )
            ) {

                closeModal();

            }

        }

    );


    // ========================================================================
    // INITIALIZATION
    // ========================================================================

    updateProgress();


    setTimeout(
        updateSharedDashboard,
        0
    );

});