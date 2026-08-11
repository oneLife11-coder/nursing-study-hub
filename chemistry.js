// ============================================================
// NURSING STUDY HUB
// CHEMISTRY — FINAL FULL COURSE BUILD
// 40 topics • worked examples • practice lab • formula sheet
// active recall • randomized mastery quizzes • weak areas
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    const COURSE_TITLE = "Chemistry";
    const PASS_SCORE = 90;
    const TOPIC_QUIZ_LENGTH = 12;
    const MIXED_PRACTICE_LENGTH = 30;
    const FINAL_EXAM_LENGTH = 60;
    const SHARED_QUESTIONS_KEY = "nursingStudyHubQuestionsAnswered";

    const MODULES = [{"number":1,"title":"Foundations, Measurement & Matter"},{"number":2,"title":"Atomic Structure & Periodic Chemistry"},{"number":3,"title":"Bonding, Molecular Structure & Nomenclature"},{"number":4,"title":"Moles, Reactions & Stoichiometry"},{"number":5,"title":"Energy, Gases & States of Matter"},{"number":6,"title":"Solutions, Kinetics & Equilibrium"},{"number":7,"title":"Acids, Bases, Redox & Nuclear Chemistry"},{"number":8,"title":"Organic Chemistry"},{"number":9,"title":"Biological Chemistry"}];

    const CHEM_TOPICS = [{"id":"chemistry-matter","title":"Chemistry, Matter & the Scientific Method","module":1,"desc":"Build the vocabulary of chemistry: matter, energy, pure substances, mixtures, properties, changes, observation and evidence-based scientific reasoning.","objectives":["Define chemistry and matter.","Classify matter as element, compound, homogeneous mixture or heterogeneous mixture.","Distinguish physical and chemical properties and changes.","Differentiate observation, hypothesis, experiment and theory.","Connect chemical classification with healthcare materials."],"facts":[["Matter","Anything that has mass and occupies space."],["Element","A pure substance made of one type of atom."],["Compound","A pure substance containing elements chemically combined in fixed ratios."],["Mixture","A physical combination of substances with variable composition."],["Homogeneous mixture","A mixture with uniform composition throughout."],["Heterogeneous mixture","A mixture with nonuniform composition."],["Physical property","A property observed without changing chemical identity."],["Chemical property","A property describing how a substance can undergo chemical change."],["Physical change","A change in state or form without changing chemical identity."],["Chemical change","A process that produces substances with new chemical identities."]],"sections":[{"label":"CLASSIFYING MATTER","title":"Pure substances and mixtures","paragraphs":["Chemistry studies the composition, structure, properties and transformations of matter. In health science, this includes gases in the lungs, ions in plasma, water, medications, nutrients and biomolecules.","Pure substances have fixed composition. Elements contain one type of atom, while compounds contain two or more elements bonded in a fixed ratio. Water is a compound because every molecule has the same H₂O composition.","Mixtures have variable composition. Saline is homogeneous because dissolved ions are distributed uniformly. Whole blood is heterogeneous because cells and platelets are suspended within plasma."],"table":[["Category","Example","Key feature"],["Element","O₂","One element"],["Compound","H₂O","Fixed formula"],["Homogeneous mixture","0.9% saline","Uniform"],["Heterogeneous mixture","Whole blood","Multiple phases/components"]]},{"label":"PROPERTIES & CHANGES","title":"Identity versus appearance","paragraphs":["Physical properties include color, density, mass, volume, melting point and state. Measuring a physical property does not require changing the substance into a new chemical species.","Chemical properties describe reactivity. Flammability, oxidation and acid-base reactivity are chemical properties. A chemical change rearranges atoms and forms products with new identities.","Melting ice is a physical change because the substance remains H₂O. Burning ethanol is a chemical change because new products such as carbon dioxide and water are formed."]},{"label":"SCIENTIFIC REASONING","title":"Observation, hypothesis and evidence","paragraphs":["An observation records what is measured or noticed. A hypothesis is a testable explanation or prediction. Experiments are designed to challenge hypotheses using controlled observations.","A scientific theory is not a guess. It is a broad explanatory framework supported by extensive evidence and repeated testing.","Reliable chemical reasoning requires units, reproducible measurements, transparent calculations and willingness to revise conclusions when evidence changes."]}],"clinical":["IV saline","An IV bag contains sodium chloride dissolved uniformly in sterile water.","It is a homogeneous mixture: water is the solvent and sodium chloride is the solute."],"traps":["A compound is not the same as a mixture.","A phase change is usually physical, not chemical.","A theory is not simply an untested guess."],"summary":["Elements contain one type of atom.","Compounds have fixed composition.","Mixtures have variable composition.","Solutions are homogeneous mixtures.","Physical changes preserve chemical identity.","Chemical changes create new substances."],"practice":[["Classify 0.9% sodium chloride in water.","Homogeneous mixture.","The composition is uniform throughout the solution."],["Is boiling water a chemical or physical change?","Physical change.","Liquid H₂O becomes gaseous H₂O; the chemical identity remains unchanged."],["A substance reacts with oxygen and forms a new oxide. Is this a physical or chemical property?","Chemical property.","Reactivity with oxygen describes the ability to undergo chemical change."]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"measurement-units","title":"Measurement, SI Units & Dimensional Analysis","module":1,"desc":"Master scientific units, metric prefixes and dimensional analysis, the same unit-cancellation method used in chemistry and medication calculations.","objectives":["Identify common SI and metric units.","Convert among kilo-, centi-, milli-, micro- and nano- prefixes.","Set up dimensional-analysis chains.","Use equality-based conversion factors correctly.","Apply conversions to healthcare quantities."],"facts":[["SI system","Internationally standardized system of scientific units."],["Meter","SI base unit of length."],["Kilogram","SI base unit of mass."],["Second","SI base unit of time."],["Liter","Common metric volume unit equal to 1000 mL."],["Milli","10⁻³."],["Micro","10⁻⁶."],["Nano","10⁻⁹."],["Kilo","10³."],["Dimensional analysis","A conversion method in which unwanted units cancel algebraically."]],"sections":[{"label":"METRIC SYSTEM","title":"Powers of ten","paragraphs":["The metric system is built on powers of ten. Prefixes change the size of a base unit without changing the type of measurement.","One kilogram equals 1000 grams, one gram equals 1000 milligrams and one milligram equals 1000 micrograms. One liter equals 1000 milliliters.","Because many healthcare values are reported in kilograms, milligrams, micrograms, liters and milliliters, prefix fluency prevents thousand-fold errors."],"table":[["Prefix","Symbol","Factor"],["kilo","k","10³"],["centi","c","10⁻²"],["milli","m","10⁻³"],["micro","µ","10⁻⁶"],["nano","n","10⁻⁹"]]},{"label":"DIMENSIONAL ANALYSIS","title":"Let the units guide the mathematics","paragraphs":["A conversion factor is a ratio made from two equivalent quantities, such as 1000 mg/1 g. Because numerator and denominator represent the same amount, the factor has a value of one.","Orient each conversion factor so the unwanted unit cancels. The unit that remains should be the unit requested by the problem.","If the final unit is wrong, the setup is wrong even if the arithmetic was performed correctly."],"example":["Convert 2.50 L to mL.",["Start with 2.50 L.","Multiply by 1000 mL/1 L.","Liters cancel.","2.50 × 1000 = 2500."],"2.50 L = 2.50 × 10³ mL."]},{"label":"MULTISTEP CONVERSIONS","title":"Use a chain rather than mental shortcuts","paragraphs":["Complex conversions can use several factors in one line. For example, kilograms can be converted to pounds, or micrograms to milligrams to grams.","Write every unit explicitly. This makes the calculation auditable and reduces the risk of moving a decimal in the wrong direction.","Exact conversion factors do not limit significant figures; measured quantities do."]}],"clinical":["Medication units","A medication order is 500 mg but a reference value is in grams.","500 mg × 1 g/1000 mg = 0.500 g."],"traps":["1 mg is 1000 µg, not 1 µg.","Keep units until the final answer.","Conversion factors should be based on exact equalities when possible."],"summary":["1 L = 1000 mL.","1 g = 1000 mg.","1 mg = 1000 µg.","Dimensional analysis uses unit cancellation.","Final units are part of the answer."],"practice":[["Convert 0.750 L to mL.","750 mL.",["0.750 L × 1000 mL/L = 750 mL."]],["Convert 2500 µg to mg.","2.50 mg.",["2500 µg × 1 mg/1000 µg = 2.50 mg."]],["Convert 3.2 kg to g.","3200 g.",["3.2 kg × 1000 g/kg = 3200 g."]]],"quiz":[{"id":"meas1","type":"numeric","q":"Convert 1.25 L to mL.","answer":1250,"tolerance":0.5,"unit":"mL","explanation":"1.25 L × 1000 mL/L = 1250 mL."},{"id":"meas2","type":"numeric","q":"Convert 4800 µg to mg.","answer":4.8,"tolerance":0.01,"unit":"mg","explanation":"Divide micrograms by 1000."},{"id":"meas3","type":"mcq","q":"Which conversion factor correctly converts grams to milligrams?","choices":["1 g/1000 mg","1000 mg/1 g","1 mg/1000 g","1000 g/1 mg"],"answer":1,"explanation":"1000 mg = 1 g, and grams must cancel."}],"tags":["Theory","Practice","Quiz"]},{"id":"sigfig-density-temperature","title":"Significant Figures, Scientific Notation, Density & Temperature","module":1,"desc":"Learn measurement precision, rounding rules, scientific notation, density and temperature conversions used throughout quantitative chemistry.","objectives":["Count significant figures.","Round multiplication/division and addition/subtraction correctly.","Use scientific notation.","Calculate density, mass or volume.","Convert °C, °F and K."],"facts":[["Significant figure","A digit that communicates meaningful measurement precision."],["Accuracy","Closeness to an accepted value."],["Precision","Closeness of repeated measurements to one another."],["Scientific notation","Writing a number as a coefficient times a power of ten."],["Density","Mass divided by volume."],["Celsius","Common scientific temperature scale."],["Kelvin","Absolute temperature scale."],["Absolute zero","0 K, the theoretical minimum temperature."]],"sections":[{"label":"SIGNIFICANT FIGURES","title":"Precision is carried through calculations","paragraphs":["All nonzero digits are significant. Zeros between nonzero digits are significant. Leading zeros are not significant because they only locate the decimal point.","Trailing zeros after a decimal point are significant. For multiplication and division, the result is limited by the factor with the fewest significant figures.","For addition and subtraction, round according to decimal places rather than total significant figures."],"example":["How many significant figures are in 0.00450?",["Ignore leading zeros.","The 4 and 5 are significant.","The final zero is significant because it is a trailing decimal zero."],"3 significant figures."]},{"label":"DENSITY","title":"Density = mass ÷ volume","paragraphs":["Density describes how tightly mass is packed into volume. Common units include g/mL and g/cm³.","The equation d = m/V can be rearranged to m = dV or V = m/d.","Density is an intensive property: changing sample size does not change the density of a pure substance at the same conditions."],"example":["A sample has mass 18.0 g and volume 6.00 mL. Find density.",["d = m/V.","18.0 g ÷ 6.00 mL = 3.00 g/mL."],"3.00 g/mL."]},{"label":"TEMPERATURE","title":"Celsius, Fahrenheit and Kelvin","paragraphs":["Kelvin and Celsius increments are the same size, but their zero points differ. K = °C + 273.15.","For Fahrenheit, °F = (°C × 9/5) + 32 and °C = (°F − 32) × 5/9.","Gas-law calculations require absolute temperature in Kelvin."],"example":["Convert 37.0 °C to °F.",["37.0 × 9/5 = 66.6.","66.6 + 32 = 98.6."],"98.6 °F."]}],"clinical":["Body temperature","A temperature of 37.0 °C is reported in Fahrenheit.","It equals 98.6 °F."],"traps":["Accuracy and precision are different concepts.","Kelvin does not use a degree symbol.","Leading zeros are never significant."],"summary":["Density = mass/volume.","K = °C + 273.15.","37 °C = 98.6 °F.","Leading zeros are not significant.","Trailing decimal zeros are significant."],"practice":[["How many significant figures are in 0.03040?","4.",["3, 0, 4 and the final 0 are significant; leading zeros are not."]],["A liquid has mass 25.0 g and volume 20.0 mL. Find density.","1.25 g/mL.",["25.0/20.0 = 1.25."]],["Convert 25.0 °C to K.","298.15 K.",["25.0 + 273.15 = 298.15."]]],"quiz":[{"id":"sigd1","type":"numeric","q":"A sample has mass 42.0 g and volume 14.0 mL. What is its density?","answer":3.0,"tolerance":0.01,"unit":"g/mL","explanation":"42.0/14.0 = 3.00 g/mL."},{"id":"sigt1","type":"numeric","q":"Convert 20.0 °C to Kelvin.","answer":293.15,"tolerance":0.02,"unit":"K","explanation":"K = °C + 273.15."},{"id":"sigt2","type":"numeric","q":"Convert 68.0 °F to °C.","answer":20.0,"tolerance":0.05,"unit":"°C","explanation":"(68−32)×5/9 = 20.0 °C."}],"tags":["Theory","Practice","Quiz"]},{"id":"atomic-structure","title":"Atomic Structure: Protons, Neutrons, Electrons, Isotopes & Ions","module":2,"desc":"Understand the particles inside atoms, atomic number, mass number, isotopes, ions and the difference between nuclear identity and electrical charge.","objectives":["Identify subatomic particles and their charges.","Use atomic number and mass number.","Calculate neutrons in an isotope.","Determine electron count in ions.","Distinguish isotopes from ions."],"facts":[["Proton","Positively charged nuclear particle."],["Neutron","Neutral nuclear particle."],["Electron","Negatively charged particle outside the nucleus."],["Atomic number","Number of protons."],["Mass number","Protons plus neutrons in a specific isotope."],["Isotope","Atoms of the same element with different neutron numbers."],["Ion","An atom or molecule with net charge."],["Cation","Positively charged ion."],["Anion","Negatively charged ion."],["Average atomic mass","Abundance-weighted average of naturally occurring isotope masses."]],"sections":[{"label":"SUBATOMIC PARTICLES","title":"The nucleus contains almost all atomic mass","paragraphs":["Protons and neutrons are located in the nucleus. Electrons occupy quantum-mechanical regions around the nucleus and have much smaller mass.","The number of protons defines the element. Every carbon atom has six protons; every oxygen atom has eight.","A neutral atom contains equal numbers of protons and electrons."],"table":[["Particle","Charge","Location"],["Proton","+1","Nucleus"],["Neutron","0","Nucleus"],["Electron","−1","Electron cloud"]]},{"label":"ISOTOPES","title":"Neutron number can change without changing the element","paragraphs":["Isotopes have the same number of protons but different numbers of neutrons. Carbon-12 and carbon-14 are both carbon because each contains six protons.","Mass number is the integer total of protons and neutrons for one isotope. Neutrons = mass number − atomic number.","The periodic-table atomic mass is usually noninteger because it averages the masses of naturally occurring isotopes according to abundance."]},{"label":"IONS","title":"Electron gain or loss creates charge","paragraphs":["Atoms become ions when electrons are gained or lost. Losing electrons produces a positive cation; gaining electrons produces a negative anion.","Ion formation does not change the number of protons and therefore does not change elemental identity.","Sodium commonly forms Na⁺ by losing one electron. Chlorine commonly forms Cl⁻ by gaining one electron."],"example":["How many protons, neutrons and electrons are in ²³Na⁺?",["Na atomic number = 11, so protons = 11.","Neutrons = 23 − 11 = 12.","Na⁺ has lost one electron, so electrons = 10."],"11 protons, 12 neutrons, 10 electrons."]}],"clinical":["Electrolytes","Sodium in extracellular fluid exists primarily as Na⁺.","Its positive charge allows it to participate in osmotic balance and membrane electrical gradients."],"traps":["Changing electrons changes charge, not element identity.","Changing neutrons creates an isotope, not a new element.","Mass number is not the same as average atomic mass."],"summary":["Atomic number = protons.","Mass number = protons + neutrons.","Neutral atoms have equal protons and electrons.","Cations are positive.","Anions are negative.","Isotopes differ in neutrons."],"practice":[["How many neutrons are in carbon-14?","8.",["Carbon has 6 protons. 14−6 = 8 neutrons."]],["How many electrons are in Mg²⁺?","10.",["Mg atomic number is 12; a 2+ ion has lost two electrons."]],["How many electrons are in Cl⁻?","18.",["Cl has 17 protons/electrons when neutral and gains one electron."]]],"quiz":[{"id":"atom1","type":"numeric","q":"An isotope has atomic number 17 and mass number 37. How many neutrons does it contain?","answer":20,"tolerance":0,"unit":"neutrons","explanation":"37−17 = 20."},{"id":"atom2","type":"numeric","q":"How many electrons are in Ca²⁺? Calcium has atomic number 20.","answer":18,"tolerance":0,"unit":"electrons","explanation":"Ca²⁺ has lost two electrons: 20−2 = 18."},{"id":"atom3","type":"mcq","q":"Which change creates an isotope of an element?","choices":["Changing proton number","Changing neutron number","Changing electron number only","Changing chemical state"],"answer":1,"explanation":"Isotopes have the same proton number but different neutron numbers."}],"tags":["Theory","Practice","Quiz"]},{"id":"electron-configuration","title":"Electron Configuration, Orbitals & Valence Electrons","module":2,"desc":"Learn how electrons occupy energy levels and orbitals and why valence-electron patterns control bonding and periodic behavior.","objectives":["Describe shells, subshells and orbitals.","Apply basic electron-filling rules.","Write simple electron configurations.","Identify valence electrons.","Relate valence configuration to chemical reactivity."],"facts":[["Principal energy level","A major quantized electron-energy shell."],["Orbital","A region of high probability for finding an electron."],["s subshell","A subshell containing one orbital."],["p subshell","A subshell containing three orbitals."],["Electron configuration","Distribution of electrons among orbitals."],["Valence electron","An outer-shell electron strongly involved in bonding."],["Aufbau principle","Electrons occupy lower-energy orbitals before higher-energy orbitals."],["Pauli exclusion principle","An orbital holds at most two electrons with opposite spin."],["Hund's rule","Degenerate orbitals fill singly before pairing."]],"sections":[{"label":"ORBITALS","title":"Electrons occupy allowed quantum states","paragraphs":["Electron energy is quantized. Electrons occupy orbitals rather than classical planetary paths.","An s subshell contains one orbital and can hold two electrons. A p subshell contains three orbitals and can hold six electrons.","Each orbital can hold at most two electrons with opposite spins."]},{"label":"FILLING ORDER","title":"Lower-energy states fill first","paragraphs":["Ground-state configurations place electrons into available orbitals in order of increasing energy. The common beginning sequence is 1s, 2s, 2p, 3s, 3p and then 4s before 3d in the simple filling model.","Hund's rule explains that electrons occupy equal-energy p orbitals singly before pairing.","Electron configuration is useful because periodic-table position reflects recurring outer-electron patterns."],"example":["Write the electron configuration of oxygen, atomic number 8.",["Place 2 electrons in 1s.","Place 2 electrons in 2s.","The remaining 4 enter 2p."],"1s² 2s² 2p⁴."]},{"label":"VALENCE ELECTRONS","title":"Outer electrons determine common bonding patterns","paragraphs":["For main-group elements, valence electrons usually occupy the highest principal energy level.","Sodium has one valence electron and commonly loses it to form Na⁺. Chlorine has seven valence electrons and commonly gains one to form Cl⁻.","Elements in the same periodic-table group have similar valence-electron patterns and therefore often show similar chemistry."]}],"clinical":["Sodium and potassium","Both sodium and potassium commonly form +1 ions.","Both are Group 1 elements with one valence electron that can be lost relatively easily."],"traps":["Orbitals are not circular planetary tracks.","The octet concept is useful but has exceptions.","Valence electrons are not all electrons in an atom."],"summary":["Orbitals hold at most two electrons.","s holds 2 electrons total.","p holds 6 electrons total.","Valence electrons control much main-group chemistry.","Periodic groups share similar outer-electron patterns."],"practice":[["Write the ground-state configuration of carbon.","1s² 2s² 2p².",["Carbon has 6 electrons."]],["How many valence electrons does oxygen have?","6.",["Oxygen is in Group 16."]],["How many electrons fit in a p subshell?","6.",["Three p orbitals × two electrons each."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"periodic-trends","title":"Periodic Table & Periodic Trends","module":2,"desc":"Use periodic-table organization to predict common charges, atomic size, ionization energy and electronegativity.","objectives":["Interpret groups and periods.","Recognize metals, nonmetals and metalloids.","Predict common main-group ionic charges.","Explain atomic-radius trends.","Explain ionization-energy and electronegativity trends."],"facts":[["Group","Vertical column of the periodic table."],["Period","Horizontal row of the periodic table."],["Atomic radius","A measure of atomic size."],["Ionization energy","Energy required to remove an electron from a gaseous atom."],["Electronegativity","Ability of an atom in a bond to attract shared electrons."],["Alkali metal","Group 1 metal, commonly +1."],["Alkaline earth metal","Group 2 metal, commonly +2."],["Halogen","Group 17 nonmetal, commonly −1."],["Noble gas","Group 18 element with a very stable valence shell."]],"sections":[{"label":"ORGANIZATION","title":"Groups reveal recurring chemistry","paragraphs":["The periodic table is ordered by atomic number. Vertical groups often share similar valence-electron configurations.","Group 1 metals commonly form +1 ions, Group 2 metals +2 ions and Group 17 halogens −1 ions.","Metals occupy most of the left and center of the table; nonmetals lie mainly toward the upper right."]},{"label":"ATOMIC RADIUS","title":"Size increases down and generally decreases across","paragraphs":["Moving down a group adds occupied principal energy levels, so atoms generally become larger.","Across a period, proton number increases while electrons are added to the same principal shell. Increasing effective nuclear attraction generally pulls electrons closer.","Cations are usually smaller than their neutral atoms, while anions are often larger."]},{"label":"IONIZATION & ELECTRONEGATIVITY","title":"Electron attraction grows toward the upper right","paragraphs":["Ionization energy generally increases across a period and decreases down a group.","Electronegativity follows a similar broad pattern, with fluorine among the most electronegative elements.","Electronegativity differences are central to predicting bond polarity."],"table":[["Trend","Across a period →","Down a group ↓"],["Atomic radius","Generally decreases","Increases"],["Ionization energy","Generally increases","Decreases"],["Electronegativity","Generally increases","Generally decreases"]]}],"clinical":["Common body ions","Na⁺, K⁺, Ca²⁺ and Cl⁻ have predictable common charges.","Their positions in Groups 1, 2 and 17 help explain these ionic charges."],"traps":["Groups are vertical; periods are horizontal.","Atomic radius and ionization energy usually trend oppositely.","Electronegativity refers to bonded-electron attraction, not electron removal."],"summary":["Atomic number orders the table.","Group members often share valence patterns.","Radius grows down a group.","Ionization energy generally rises across a period.","Electronegativity helps predict bond polarity."],"practice":[["Which is generally larger, Na or Cl in the same period?","Na.",["Atomic radius generally decreases left to right."]],["Which has higher electronegativity, F or I?","F.",["Electronegativity generally decreases down a group."]],["What common ion does calcium form?","Ca²⁺.",["Calcium is a Group 2 metal."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"ionic-bonding","title":"Ionic Bonding, Lattice Structure & Formula Writing","module":3,"desc":"Understand electron transfer, electrostatic attraction, ionic lattices and how to write neutral formulas from ion charges.","objectives":["Explain ionic bond formation.","Predict common ion charges.","Balance ionic charges in formulas.","Use parentheses with polyatomic ions.","Relate ionic structure to conductivity and melting behavior."],"facts":[["Ionic bond","Electrostatic attraction between oppositely charged ions."],["Formula unit","Simplest whole-number ratio of ions in an ionic solid."],["Lattice","Extended three-dimensional arrangement of ions."],["Polyatomic ion","Covalently bonded group carrying an overall charge."],["Hydroxide","OH⁻."],["Nitrate","NO₃⁻."],["Sulfate","SO₄²⁻."],["Phosphate","PO₄³⁻."],["Ammonium","NH₄⁺."]],"sections":[{"label":"FORMATION","title":"Opposite charges attract","paragraphs":["Metals often lose electrons to form cations, while nonmetals often gain electrons to form anions.","The resulting ions are held together by electrostatic attraction. Ionic solids form extended lattices rather than separate neutral molecules.","Because electrostatic forces are strong, many ionic solids have relatively high melting points."]},{"label":"FORMULA WRITING","title":"Total charge must equal zero","paragraphs":["The chemical formula of an ionic compound shows the smallest whole-number ratio of ions producing electrical neutrality.","Na⁺ and Cl⁻ combine 1:1 as NaCl. Ca²⁺ requires two Cl⁻ ions, giving CaCl₂.","When more than one polyatomic ion is required, parentheses enclose the polyatomic ion before adding a subscript."],"example":["Write the formula for aluminum sulfate.",["Aluminum is Al³⁺.","Sulfate is SO₄²⁻.","The least common charge magnitude is 6.","Use 2 Al³⁺ and 3 sulfate ions."],"Al₂(SO₄)₃."]},{"label":"PROPERTIES","title":"Mobile ions conduct electricity","paragraphs":["In a solid lattice, ions are fixed and cannot move freely, so solid ionic compounds conduct poorly.","When melted or dissolved, ions become mobile and can carry electrical current.","This is why many water-soluble ionic compounds are strong electrolytes."]}],"clinical":["Electrolyte solutions","NaCl in water separates into hydrated Na⁺ and Cl⁻.","Mobile ions allow the solution to conduct electrical current."],"traps":["Ionic formulas must be neutral overall.","Do not change polyatomic-ion composition when balancing charge.","Ordinary ionic names do not use molecular prefixes."],"summary":["Ionic bonds are electrostatic attractions.","Cations are positive and anions negative.","Formula units show lowest whole-number ratios.","Charge balance determines subscripts.","Mobile ions conduct current."],"practice":[["Write the formula for magnesium chloride.","MgCl₂.",["Mg²⁺ needs two Cl⁻ ions."]],["Write the formula for calcium nitrate.","Ca(NO₃)₂.",["Ca²⁺ needs two nitrate ions, each −1."]],["Write the formula for ammonium phosphate.","(NH₄)₃PO₄.",["Three NH₄⁺ balance PO₄³⁻."]]],"quiz":[{"id":"ionic1","type":"mcq","q":"What is the correct formula for calcium phosphate?","choices":["CaPO₄","Ca₂PO₄","Ca₃(PO₄)₂","Ca(PO₄)₃"],"answer":2,"explanation":"3 Ca²⁺ gives +6 and 2 PO₄³⁻ gives −6."},{"id":"ionic2","type":"mcq","q":"What is the correct formula for aluminum oxide?","choices":["AlO","Al₂O₃","Al₃O₂","AlO₂"],"answer":1,"explanation":"2 Al³⁺ balances 3 O²⁻."},{"id":"ionic3","type":"mcq","q":"Why does molten NaCl conduct electricity better than solid NaCl?","choices":["Atoms become radioactive","Ions can move freely","Covalent bonds form","Electrons disappear"],"answer":1,"explanation":"Charge carriers must be mobile."}],"tags":["Theory","Practice","Quiz"]},{"id":"covalent-bonding","title":"Covalent Bonding & Lewis Structures","module":3,"desc":"Learn electron sharing, bond order, Lewis structures, lone pairs, formal electron counting and common octet-rule patterns.","objectives":["Explain covalent bonding.","Distinguish single, double and triple bonds.","Count total valence electrons.","Draw basic Lewis structures.","Recognize lone pairs and octet exceptions."],"facts":[["Covalent bond","Bond formed by shared electron density."],["Single bond","One shared electron pair."],["Double bond","Two shared electron pairs."],["Triple bond","Three shared electron pairs."],["Lewis structure","Valence-electron representation of a molecule or ion."],["Lone pair","Nonbonding pair of valence electrons."],["Bond order","Number of shared electron pairs between two bonded atoms."],["Octet rule","Model in which many main-group atoms favor eight valence electrons."]],"sections":[{"label":"SHARING ELECTRONS","title":"Covalent bonds form mainly between nonmetals","paragraphs":["Covalent bonding occurs when atoms share electron density rather than transfer electrons completely.","A single bond contains one shared pair, a double bond two and a triple bond three.","Higher bond order generally corresponds to shorter and stronger bonds between the same kinds of atoms."]},{"label":"LEWIS STRUCTURES","title":"A systematic electron-accounting method","paragraphs":["First count all valence electrons, adjusting for ionic charge. Connect atoms with single bonds, then distribute remaining electrons to complete outer shells.","Hydrogen requires two electrons. Carbon, nitrogen, oxygen and fluorine commonly follow octets in introductory structures.","If octets cannot be completed with single bonds, convert lone-pair electrons into multiple bonds when chemically appropriate."],"example":["Draw the electron accounting for CO₂.",["Total valence electrons: C = 4 and two O = 12, total 16.","Place O–C–O.","To give carbon an octet, form a double bond to each oxygen.","Each oxygen retains two lone pairs."],"O=C=O with two lone pairs on each O."]},{"label":"EXCEPTIONS","title":"The octet rule is useful, not universal","paragraphs":["Hydrogen follows a duet. Boron can form stable electron-deficient compounds, and third-period elements can sometimes appear with expanded valence shells in Lewis models.","Odd-electron molecules also exist. Therefore, Lewis structures are models that emphasize valence-electron bookkeeping rather than complete quantum descriptions.","When multiple valid Lewis structures differ only in electron placement, resonance may be needed."]}],"clinical":["Water","Oxygen in H₂O forms two covalent O–H bonds and retains two lone pairs.","Those electron groups later explain water's bent geometry and polarity."],"traps":["A covalent bond is sharing, not necessarily equal sharing.","A double bond contains two shared pairs, not two electrons total.","Lewis structures are models and have exceptions."],"summary":["Covalent bonds share electrons.","Bond order increases from single to double to triple.","Lewis structures track valence electrons.","Lone pairs affect structure.","Many second-period atoms favor octets."],"practice":[["How many valence electrons are in H₂O?","8.",["2 from two H atoms plus 6 from oxygen."]],["How many valence electrons are in CO₂?","16.",["4 from carbon plus 12 from two oxygens."]],["What bond order is C≡N?","3.",["A triple bond has bond order 3."]]],"quiz":[{"id":"lewis1","type":"numeric","q":"How many total valence electrons are in NH₃?","answer":8,"tolerance":0,"unit":"electrons","explanation":"N contributes 5 and three H contribute 3."},{"id":"lewis2","type":"numeric","q":"How many total valence electrons are in CO₂?","answer":16,"tolerance":0,"unit":"electrons","explanation":"4 + 6 + 6 = 16."},{"id":"lewis3","type":"mcq","q":"Which statement about a double bond is correct?","choices":["It contains one shared electron","It contains two shared electron pairs","It is always ionic","It contains no sigma bonding"],"answer":1,"explanation":"A double bond represents two shared electron pairs."}],"tags":["Theory","Practice","Quiz"]},{"id":"molecular-geometry","title":"VSEPR, Molecular Geometry & Hybrid Shape Reasoning","module":3,"desc":"Predict molecular geometry from electron-group repulsion and distinguish electron-domain geometry from molecular shape.","objectives":["Count electron groups around a central atom.","Predict linear, trigonal planar and tetrahedral arrangements.","Recognize bent and trigonal pyramidal shapes.","Explain lone-pair effects on bond angles.","Connect shape to molecular properties."],"facts":[["VSEPR","Model predicting geometry from electron-group repulsion."],["Electron domain","A bond or lone pair counted as one region around a central atom."],["Linear","Two electron groups, approximately 180°."],["Trigonal planar","Three electron groups, approximately 120°."],["Tetrahedral","Four electron groups, approximately 109.5°."],["Trigonal pyramidal","Four electron groups with one lone pair and three bonds."],["Bent","A molecular shape with two bonded atoms and one or more lone pairs on the central atom."]],"sections":[{"label":"ELECTRON GROUPS","title":"Electron density spreads out","paragraphs":["VSEPR treats bonds and lone pairs as electron-density regions that repel one another.","Two groups arrange linearly, three trigonal-planar and four tetrahedrally to maximize separation.","Multiple bonds count as one electron group even though they contain more than one shared electron pair."],"table":[["Electron groups","Electron geometry","Ideal angle"],["2","Linear","180°"],["3","Trigonal planar","120°"],["4","Tetrahedral","109.5°"]]},{"label":"LONE PAIRS","title":"Molecular shape may differ from electron geometry","paragraphs":["Molecular geometry describes positions of atoms, not lone pairs. A tetrahedral electron arrangement with one lone pair gives trigonal-pyramidal molecular shape, as in NH₃.","A tetrahedral electron arrangement with two lone pairs gives a bent molecule, as in H₂O.","Lone pairs repel bonding pairs strongly and often compress bond angles below ideal values."]},{"label":"STRUCTURE-FUNCTION","title":"Shape determines interactions","paragraphs":["Three-dimensional geometry influences polarity, intermolecular forces and molecular recognition.","Biological receptors and enzymes distinguish molecular shapes with great precision.","Thus, geometry is not merely a drawing convention; it has direct chemical and biological consequences."]}],"clinical":["Molecular recognition","Drugs fit into receptors through three-dimensional interactions.","Changing molecular geometry can change binding even if the molecular formula remains unchanged."],"traps":["Electron geometry and molecular geometry are not always the same.","A multiple bond counts as one VSEPR group.","Lone pairs usually compress adjacent bond angles."],"summary":["2 groups → linear.","3 groups → trigonal planar.","4 groups → tetrahedral electron geometry.","NH₃ is trigonal pyramidal.","H₂O is bent.","Lone pairs influence angles."],"practice":[["What is the geometry of CO₂ around carbon?","Linear.",["Carbon has two electron groups."]],["What is the molecular geometry of NH₃?","Trigonal pyramidal.",["Four electron groups: three bonds and one lone pair."]],["What is the molecular geometry of H₂O?","Bent.",["Four electron groups: two bonds and two lone pairs."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"polarity-imf","title":"Bond Polarity, Molecular Polarity & Intermolecular Forces","module":3,"desc":"Use electronegativity and molecular geometry to predict polarity, then relate intermolecular forces to boiling point, solubility and biological behavior.","objectives":["Explain bond dipoles.","Determine overall molecular polarity.","Compare London dispersion, dipole-dipole and hydrogen bonding.","Relate IMF strength to boiling point.","Apply 'like dissolves like' cautiously."],"facts":[["Bond dipole","Separation of partial charge within a polar covalent bond."],["Polar molecule","A molecule with a nonzero net dipole."],["London dispersion force","Attraction from temporary electron-distribution fluctuations."],["Dipole-dipole force","Attraction between permanent molecular dipoles."],["Hydrogen bond","Strong dipole attraction involving H bonded to N, O or F."],["Polarizability","Ease with which an electron cloud can be distorted."],["Hydrophilic","Interacting favorably with water."],["Hydrophobic","Interacting poorly with water."]],"sections":[{"label":"BOND POLARITY","title":"Electronegativity differences create unequal sharing","paragraphs":["When two bonded atoms attract shared electrons differently, electron density shifts toward the more electronegative atom.","This creates partial negative and partial positive ends of the bond rather than complete ionic charges.","The larger the electronegativity difference within the covalent range, the more polar the bond tends to be."]},{"label":"MOLECULAR POLARITY","title":"Geometry determines whether dipoles cancel","paragraphs":["A molecule can contain polar bonds and still be nonpolar overall if the bond dipoles cancel by symmetry.","CO₂ contains polar C=O bonds but is linear, so the two dipoles oppose each other and cancel.","Water is bent, so its O–H dipoles do not cancel. Water therefore has a strong net dipole."]},{"label":"INTERMOLECULAR FORCES","title":"Molecules attract one another in several ways","paragraphs":["London dispersion forces occur in all particles and increase with polarizability and molecular size.","Polar molecules also experience dipole-dipole interactions. Molecules containing suitable O–H, N–H or F–H groups can form hydrogen bonds.","Stronger intermolecular forces generally increase boiling point and can strongly affect viscosity, surface tension and solubility."],"table":[["Interaction","Occurs in","Relative significance"],["London dispersion","All particles","Universal; stronger in larger/polarizable species"],["Dipole-dipole","Polar molecules","Adds attraction"],["Hydrogen bonding","Suitable H–N/O/F systems","Especially strong intermolecular attraction"]]}],"clinical":["Water as solvent","Body fluids are water-based and dissolve many ions and polar molecules.","Water's polarity and hydrogen bonding allow strong interactions with charged and polar solutes."],"traps":["Polar bonds do not guarantee a polar molecule.","Hydrogen bonding is intermolecular, not the covalent O–H bond itself.","Dispersion forces occur in every molecule."],"summary":["Electronegativity differences create bond polarity.","Geometry controls net molecular dipole.","CO₂ is nonpolar overall.","H₂O is polar.","Hydrogen bonding strongly affects water.","Stronger IMFs generally raise boiling point."],"practice":[["Is CO₂ polar overall?","No.",["Its two C=O dipoles cancel in a linear geometry."]],["Which intermolecular force exists in every molecule?","London dispersion.",["Temporary electron fluctuations occur in all particles."]],["Why does water have a high boiling point for its size?","Strong hydrogen bonding.",["Water molecules form an extensive H-bond network."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"nomenclature","title":"Chemical Nomenclature & Formula Writing","module":3,"desc":"Name ionic compounds, molecular compounds and acids and translate systematic names back into formulas.","objectives":["Name binary ionic compounds.","Use Roman numerals for variable-charge metals.","Name molecular compounds with prefixes.","Name common acids.","Write formulas from chemical names."],"facts":[["Roman numeral","Indicates the charge of certain metal cations in ionic names."],["Binary ionic compound","Compound containing two elements and composed of ions."],["Molecular prefix","mono-, di-, tri-, tetra-, penta- and related prefixes."],["Hydrochloric acid","HCl(aq)."],["Nitric acid","HNO₃."],["Sulfuric acid","H₂SO₄."],["Carbonic acid","H₂CO₃."],["Acetic acid","CH₃COOH."]],"sections":[{"label":"IONIC NAMES","title":"Cation first, anion second","paragraphs":["For binary ionic compounds, name the cation first. A monatomic anion receives an -ide ending.","NaCl is sodium chloride and MgO is magnesium oxide.","Metals capable of several charges use Roman numerals. FeCl₂ is iron(II) chloride; FeCl₃ is iron(III) chloride."],"example":["Name Fe₂O₃.",["Oxygen is O²⁻, so three O give −6.","Two Fe must total +6.","Each Fe is +3."],"iron(III) oxide."]},{"label":"MOLECULAR NAMES","title":"Prefixes specify atom number","paragraphs":["Binary molecular compounds usually involve nonmetals and use prefixes to show atom counts.","CO₂ is carbon dioxide. N₂O₄ is dinitrogen tetroxide.","The first element usually omits mono- when only one atom is present."]},{"label":"ACIDS","title":"Acid names follow characteristic patterns","paragraphs":["Binary acids in water use hydro- plus the element root plus -ic acid, as in hydrochloric acid.","Oxyanions ending in -ate generally form acids ending in -ic: nitrate → nitric acid.","Oxyanions ending in -ite generally form acids ending in -ous: nitrite → nitrous acid."]}],"clinical":["Bicarbonate and carbonic acid","HCO₃⁻ and H₂CO₃ form a major physiological buffer pair.","Recognizing ionic and acid names makes later acid-base chemistry easier."],"traps":["Roman numerals show charge, not atom count.","Do not use molecular prefixes for ordinary ionic names.","HCl is called hydrochloric acid specifically in aqueous solution."],"summary":["Ionic compounds name cation first.","Monatomic anions end in -ide.","Roman numerals identify variable metal charge.","Molecular compounds use prefixes.","Acid naming follows anion patterns."],"practice":[["Name CaCl₂.","Calcium chloride.",["Calcium has a fixed +2 charge."]],["Name FeCl₃.","Iron(III) chloride.",["Three Cl⁻ require Fe³⁺."]],["Write the formula for dinitrogen pentoxide.","N₂O₅.",["di = 2 nitrogen; penta = 5 oxygen."]]],"quiz":[{"id":"name1","type":"mcq","q":"What is the correct name for CuCl₂?","choices":["Copper chloride","Copper(I) chloride","Copper(II) chloride","Dicopper chloride"],"answer":2,"explanation":"Two Cl⁻ require Cu²⁺."},{"id":"name2","type":"mcq","q":"What is the formula for sulfuric acid?","choices":["H₂SO₃","H₂SO₄","HSO₄","H₂S"],"answer":1,"explanation":"Sulfate gives sulfuric acid, H₂SO₄."},{"id":"name3","type":"mcq","q":"What is N₂O₄ called?","choices":["Nitrogen oxide","Nitrogen(IV) oxide","Dinitrogen tetroxide","Nitride oxide"],"answer":2,"explanation":"Binary molecular compounds use prefixes."}],"tags":["Theory","Practice","Quiz"]},{"id":"mole-molar-mass","title":"The Mole, Avogadro's Number & Molar Mass","module":4,"desc":"Use the mole as chemistry's counting unit and convert among particles, moles and grams using Avogadro's number and molar mass.","objectives":["Define the mole.","Use Avogadro's number.","Calculate molar mass.","Convert grams to moles and moles to grams.","Convert moles to particles."],"facts":[["Mole","6.022 × 10²³ representative particles."],["Avogadro's number","6.022 × 10²³ particles per mole."],["Molar mass","Mass in grams of one mole of a substance."],["Formula mass","Sum of atomic masses represented in an ionic formula."],["Molecular mass","Sum of atomic masses in one molecule."],["Representative particle","Atom, molecule, ion or formula unit counted by the mole."]],"sections":[{"label":"MOLE CONCEPT","title":"A counting unit for microscopic particles","paragraphs":["Individual atoms and molecules are too small to count directly in ordinary laboratory work. The mole links microscopic particle counts with measurable macroscopic amounts.","One mole contains exactly 6.02214076 × 10²³ specified entities. Introductory calculations often use 6.022 × 10²³.","The identity of the entity matters: one mole of O atoms is not the same as one mole of O₂ molecules."]},{"label":"MOLAR MASS","title":"Periodic-table masses become grams per mole","paragraphs":["Atomic masses from the periodic table are added according to the subscripts in a chemical formula.","For H₂O, two hydrogen atoms plus one oxygen atom give about 18.02 g/mol.","Molar mass is the bridge between grams and moles."],"example":["How many moles are in 36.0 g H₂O?",["Molar mass H₂O ≈ 18.02 g/mol.","36.0 g × 1 mol/18.02 g = 2.00 mol."],"2.00 mol H₂O."]},{"label":"PARTICLES","title":"Moles connect to molecules, atoms and ions","paragraphs":["Multiply moles by Avogadro's number to obtain representative particles. Divide particle count by Avogadro's number to obtain moles.","If a problem asks for atoms inside molecules, use the chemical formula as an additional conversion factor.","For example, one mole of H₂O contains two moles of hydrogen atoms."]}],"clinical":["Laboratory reporting","Clinical chemistry often uses mmol/L for electrolytes and metabolites.","Moles compare numbers of particles, which is often more chemically meaningful than comparing grams."],"traps":["A mole is a particle count, not a mass.","Molar mass depends on formula.","One mole of O₂ contains two moles of O atoms."],"summary":["1 mol = 6.022 × 10²³ entities.","Molar mass has units g/mol.","Moles = grams/molar mass.","Particles = moles × Avogadro's number."],"practice":[["Find moles in 58.44 g NaCl.","1.000 mol.",["Molar mass NaCl ≈ 58.44 g/mol."]],["How many molecules are in 0.500 mol H₂O?","3.01 × 10²³ molecules.",["0.500 × 6.022×10²³."]],["What mass is 2.00 mol CO₂?","88.02 g.",["Molar mass ≈44.01 g/mol; multiply by 2.00."]]],"quiz":[{"id":"mole1","type":"numeric","q":"How many moles are in 18.02 g of water?","answer":1.0,"tolerance":0.01,"unit":"mol","explanation":"18.02 g ÷ 18.02 g/mol = 1.00 mol."},{"id":"mole2","type":"numeric","q":"What mass in grams is 0.500 mol NaCl? Use 58.44 g/mol.","answer":29.22,"tolerance":0.05,"unit":"g","explanation":"0.500 × 58.44 = 29.22 g."},{"id":"mole3","type":"numeric","q":"How many particles are in 2.00 mol? Enter the coefficient before ×10^23.","answer":12.044,"tolerance":0.02,"unit":"×10^23 particles","explanation":"2.00 × 6.022 = 12.044 ×10²³."}],"tags":["Theory","Practice","Quiz"]},{"id":"composition-formulas","title":"Percent Composition, Empirical & Molecular Formulas","module":4,"desc":"Determine mass percent and derive empirical and molecular formulas from composition data.","objectives":["Calculate percent composition.","Convert percent composition to mole ratios.","Determine empirical formulas.","Determine molecular formulas from empirical formulas and molar mass.","Distinguish empirical and molecular formulas."],"facts":[["Percent composition","Mass percent contributed by each element in a compound."],["Empirical formula","Simplest whole-number atom ratio."],["Molecular formula","Actual number of each type of atom in a molecule."],["Empirical formula mass","Molar mass of the empirical-formula unit."],["Mass percent","Part mass divided by total mass multiplied by 100%."]],"sections":[{"label":"PERCENT COMPOSITION","title":"How much of the mass comes from each element?","paragraphs":["Percent composition is calculated from the element's mass contribution divided by the molar mass of the compound.","For a pure compound, all elemental mass percentages should add to approximately 100%, allowing for rounding.","Mass percent is useful in analytical chemistry and provides the starting point for empirical-formula problems."],"example":["Find the percent oxygen by mass in H₂O.",["Molar mass H₂O ≈ 18.02 g/mol.","O contributes 16.00 g/mol.","16.00/18.02 ×100 ≈ 88.8%."],"About 88.8% oxygen by mass."]},{"label":"EMPIRICAL FORMULA","title":"Masses → moles → simplest ratio","paragraphs":["If percentages are given, assume a convenient 100 g sample so each percentage becomes grams.","Convert each element's mass to moles, divide all mole values by the smallest, then convert to whole-number ratios.","If ratios are near values such as 1.5 or 1.33, multiply all ratios by a small integer to obtain whole numbers."]},{"label":"MOLECULAR FORMULA","title":"The molecular formula is an integer multiple","paragraphs":["Calculate the empirical formula mass, then divide the measured molecular molar mass by the empirical-formula mass.","The resulting number should be near a whole integer. Multiply every empirical subscript by that integer.","For example, empirical CH₂O with molar mass near 180 g/mol corresponds to six empirical units, C₆H₁₂O₆."],"example":["A compound has empirical formula CH₂O and molar mass 180.16 g/mol. Find molecular formula.",["Empirical mass ≈30.03 g/mol.","180.16/30.03 ≈6.","Multiply subscripts by 6."],"C₆H₁₂O₆."]}],"clinical":["Glucose formula","Glucose has molecular formula C₆H₁₂O₆ but empirical formula CH₂O.","Empirical formulas show simplest ratios and do not uniquely identify a molecule."],"traps":["Empirical formula is not always the molecular formula.","Use moles, not grams, to obtain atom ratios.","Round only after checking whether a small multiplier is needed."],"summary":["Percent composition is mass-based.","Empirical formulas are simplest whole-number ratios.","Molecular formulas are integer multiples of empirical formulas.","Convert mass to moles before finding atom ratios."],"practice":[["What is the empirical formula of C₆H₁₂O₆?","CH₂O.",["Divide all subscripts by 6."]],["If empirical formula mass is 30 g/mol and molecular molar mass is 60 g/mol, what multiplier is used?","2.",["60/30 = 2."]],["What percent of a 20.0 g sample is element X if X contributes 5.00 g?","25.0%.",["5.00/20.0 ×100."]]],"quiz":[{"id":"comp1","type":"numeric","q":"A compound contains 12.0 g C in a 44.0 g sample. What is the mass percent of C?","answer":27.27,"tolerance":0.1,"unit":"%","explanation":"12.0/44.0 ×100 = 27.27%."},{"id":"comp2","type":"numeric","q":"An empirical formula has mass 30.0 g/mol and the molecular molar mass is 150.0 g/mol. What whole-number multiplier is required?","answer":5,"tolerance":0,"unit":"","explanation":"150/30 = 5."},{"id":"comp3","type":"mcq","q":"Which sequence is correct for determining an empirical formula from mass data?","choices":["Mass→ratio→moles","Mass→moles→divide by smallest→whole numbers","Moles→grams→percent","Percent→subscripts directly"],"answer":1,"explanation":"Atom ratios come from moles."}],"tags":["Theory","Practice","Quiz"]},{"id":"balancing-reactions","title":"Chemical Equations, Balancing & Reaction Types","module":4,"desc":"Interpret and balance chemical equations and recognize synthesis, decomposition, replacement, precipitation, acid-base and combustion patterns.","objectives":["Identify reactants and products.","Balance equations using coefficients.","Apply conservation of atoms.","Recognize common reaction classes.","Interpret state symbols."],"facts":[["Reactant","Starting substance in a reaction."],["Product","Substance formed by a reaction."],["Coefficient","Number placed before a formula to balance an equation."],["Subscript","Part of a formula showing atom ratio."],["Synthesis","Reaction combining simpler species."],["Decomposition","Reaction breaking a substance into simpler products."],["Single replacement","One element replaces another."],["Double replacement","Ions exchange partners."],["Combustion","Rapid oxidation, often involving O₂."],["State symbol","Notation such as (s), (l), (g), or (aq)."]],"sections":[{"label":"BALANCING","title":"Conservation of atoms","paragraphs":["Ordinary chemical reactions rearrange atoms; they do not create or destroy nuclei. A balanced equation therefore has the same count of each element on both sides.","Change coefficients only. Altering a subscript changes the chemical identity of a reactant or product.","Start with the most complex species or an element appearing in fewest places, and recheck every element at the end."],"example":["Balance H₂ + O₂ → H₂O.",["Place 2 before H₂O to balance oxygen.","Products now contain 4 H atoms.","Place 2 before H₂."],"2H₂ + O₂ → 2H₂O."]},{"label":"REACTION TYPES","title":"Patterns help predict products","paragraphs":["Synthesis combines species; decomposition splits them. Single replacement involves an element displacing another, while double replacement exchanges ions.","Acid-base neutralization is a common double-replacement pattern producing water plus a salt.","Complete combustion of a hydrocarbon in excess oxygen commonly yields CO₂ and H₂O."],"table":[["Type","Pattern"],["Synthesis","A + B → AB"],["Decomposition","AB → A + B"],["Single replacement","A + BC → AC + B"],["Double replacement","AB + CD → AD + CB"]]},{"label":"STATE SYMBOLS","title":"Physical state changes chemical interpretation","paragraphs":["(s), (l), (g) and (aq) specify solid, liquid, gas and aqueous states.","Aqueous ionic substances may dissociate into ions; solids generally do not appear as separated ions in net ionic equations.","State information therefore becomes important in solubility and equilibrium chemistry."]}],"clinical":["Metabolism","Biochemical pathways are networks of balanced chemical transformations.","Atoms from nutrients are rearranged into products such as CO₂, H₂O and biomolecules rather than disappearing."],"traps":["Never balance by changing subscripts.","Coefficients multiply the entire formula.","Balanced equations conserve each element, not necessarily the number of molecules."],"summary":["Reactants are left of the arrow.","Products are right of the arrow.","Coefficients balance equations.","Subscripts define substances.","Reaction patterns aid prediction."],"practice":[["Balance: N₂ + H₂ → NH₃.","N₂ + 3H₂ → 2NH₃.",["Balance N with 2 NH₃, then H with 3 H₂."]],["Balance: CH₄ + O₂ → CO₂ + H₂O.","CH₄ + 2O₂ → CO₂ + 2H₂O.",["Balance C, then H, then O."]],["What type is AB → A + B?","Decomposition.",["One compound breaks apart."]]],"quiz":[{"id":"bal1","type":"numeric","q":"In the balanced equation N₂ + xH₂ → 2NH₃, what is x?","answer":3,"tolerance":0,"unit":"","explanation":"Six H atoms are needed, requiring 3 H₂."},{"id":"bal2","type":"numeric","q":"In CH₄ + xO₂ → CO₂ + 2H₂O, what is x?","answer":2,"tolerance":0,"unit":"","explanation":"Products contain 4 O atoms, requiring 2 O₂."},{"id":"bal3","type":"mcq","q":"Which action is allowed when balancing a chemical equation?","choices":["Change subscripts","Change element symbols","Change coefficients","Delete atoms"],"answer":2,"explanation":"Only coefficients may be adjusted."}],"tags":["Theory","Practice","Quiz"]},{"id":"stoichiometry","title":"Stoichiometry & Mole Ratios","module":4,"desc":"Use balanced equations quantitatively to convert among moles, masses and particles of reactants and products.","objectives":["Extract mole ratios from balanced equations.","Perform mole-to-mole calculations.","Perform mass-to-mass calculations.","Use dimensional-analysis chains.","Check answers for chemical reasonableness."],"facts":[["Stoichiometry","Quantitative relationships among reactants and products."],["Mole ratio","Conversion factor derived from balanced-equation coefficients."],["Given substance","Species for which an amount is known."],["Desired substance","Species whose amount must be calculated."],["Mass-to-mass stoichiometry","Conversion from mass of one species to mass of another through moles."]],"sections":[{"label":"MOLE RATIOS","title":"Coefficients are chemical conversion factors","paragraphs":["In 2H₂ + O₂ → 2H₂O, the coefficients mean 2 mol H₂ react with 1 mol O₂ to form 2 mol H₂O.","Any ratio made from these coefficients can serve as a stoichiometric conversion factor.","The equation must be balanced before any mole ratio is used."],"example":["How many mol H₂O form from 3.0 mol O₂ with excess H₂?",["Use 2 mol H₂O/1 mol O₂.","3.0 ×2 = 6.0 mol."],"6.0 mol H₂O."]},{"label":"MASS-TO-MASS","title":"Grams → moles → mole ratio → grams","paragraphs":["Equation coefficients relate moles, not grams. Therefore, mass must first be converted to moles using molar mass.","Apply the balanced-equation ratio, then convert the desired moles back to grams if needed.","Keep all units visible so each unwanted unit cancels in sequence."],"flow":[["Given mass","Use molar mass"],["Given moles","Use coefficient ratio"],["Desired moles","Use molar mass"],["Desired mass","Report with units"]]},{"label":"MULTISTEP REASONING","title":"One long dimensional-analysis chain","paragraphs":["A single factor-label chain can often reduce mistakes because units show the logic from start to finish.","Round only at the end unless intermediate rounding is unavoidable.","If a calculated product mass is implausibly huge or tiny, recheck coefficients, molar masses and unit orientation."]}],"clinical":["Quantitative preparation","Chemical preparation requires exact relationships between reactants, products and concentration.","Stoichiometric dimensional analysis reinforces the same unit discipline used in dosage calculations."],"traps":["Do not use coefficients as gram ratios.","Always balance first.","Use molar mass for gram↔mole conversions."],"summary":["Balanced coefficients provide mole ratios.","Mass problems go through moles.","Units should cancel logically.","Molar mass connects grams and moles."],"practice":[["For 2H₂ + O₂ → 2H₂O, how many mol H₂O form from 1.5 mol O₂?","3.0 mol.",["1.5×2 = 3.0."]],["For N₂ + 3H₂ → 2NH₃, how many mol NH₃ form from 6.0 mol H₂ with excess N₂?","4.0 mol.",["6.0×2/3 = 4.0."]],["Why must a mass-to-mass problem pass through moles?","Coefficients express mole ratios.",["Convert each mass through molar mass before using the equation ratio."]]],"quiz":[{"id":"sto1","type":"numeric","q":"For 2H₂ + O₂ → 2H₂O, how many moles H₂O form from 2.5 mol O₂?","answer":5.0,"tolerance":0.01,"unit":"mol","explanation":"2.5 × 2/1 = 5.0 mol."},{"id":"sto2","type":"numeric","q":"For N₂ + 3H₂ → 2NH₃, how many mol NH₃ form from 9.0 mol H₂ with excess N₂?","answer":6.0,"tolerance":0.01,"unit":"mol","explanation":"9.0 × 2/3 = 6.0 mol."},{"id":"sto3","type":"mcq","q":"What is the correct path for a mass-to-mass stoichiometry problem?","choices":["grams→grams directly","grams→moles→mole ratio→grams","grams→liters→grams","moles→grams→coefficients"],"answer":1,"explanation":"Balanced coefficients relate moles."}],"tags":["Theory","Practice","Quiz"]},{"id":"limiting-yield","title":"Limiting Reactants, Excess Reactants & Percent Yield","module":4,"desc":"Determine which reactant limits product formation and calculate theoretical, actual and percent yield.","objectives":["Identify the limiting reactant.","Identify excess reactant.","Calculate theoretical yield.","Calculate percent yield.","Explain why actual yield differs from theoretical yield."],"facts":[["Limiting reactant","Reactant consumed first according to stoichiometry."],["Excess reactant","Reactant remaining after the limiting reactant is consumed."],["Theoretical yield","Maximum product predicted by stoichiometry."],["Actual yield","Product actually obtained."],["Percent yield","Actual/theoretical ×100%."]],"sections":[{"label":"LIMITING REACTANT","title":"The first required reactant to run out","paragraphs":["Product formation stops when any required reactant is exhausted. The limiting reactant determines the maximum amount of product.","The smallest mass is not necessarily limiting because different reactants have different molar masses and equation coefficients.","A reliable method is to calculate the amount of product each reactant could independently produce. The smaller product amount identifies the limiting reactant."]},{"label":"THEORETICAL YIELD","title":"Maximum possible product","paragraphs":["Once the limiting reactant is known, use it to calculate theoretical yield.","Theoretical yield assumes complete reaction according to the balanced equation and no product loss.","The excess reactant is not used to calculate theoretical yield because some of it remains after the limiting reactant is gone."]},{"label":"PERCENT YIELD","title":"Comparing laboratory result with theory","paragraphs":["Actual yield may be lower due to incomplete reaction, side reactions, transfer losses or purification losses.","Percent yield = actual yield/theoretical yield ×100%.","Values above 100% usually signal measurement error, contamination, retained solvent or an incorrect theoretical calculation."],"example":["The theoretical yield is 10.0 g and actual yield is 8.50 g. Find percent yield.",["8.50/10.0 = 0.850.","Multiply by 100."],"85.0%."]}],"clinical":["Resource limitation","Biochemical pathways can slow when one required substrate becomes insufficient.","The limiting-reactant idea illustrates how one scarce requirement can constrain overall production."],"traps":["Smallest mass does not automatically mean limiting.","Theoretical yield comes from the limiting reactant.","Percent yield compares actual to theoretical, not excess reactant."],"summary":["Limiting reactant runs out first.","Excess reactant remains.","Theoretical yield is maximum predicted product.","Percent yield = actual/theoretical ×100%."],"practice":[["Theoretical yield 25.0 g, actual 20.0 g. Percent yield?","80.0%.",["20/25×100."]],["If reactant A can make 4 mol product and B can make 6 mol, which limits?","A.",["The smaller possible product amount identifies the limiting reactant."]],["Can a valid clean percent yield exceed 100%?","Usually no.",[">100% often indicates contamination or error."]]],"quiz":[{"id":"yield1","type":"numeric","q":"Actual yield is 18.0 g and theoretical yield is 24.0 g. What is percent yield?","answer":75.0,"tolerance":0.1,"unit":"%","explanation":"18/24×100 = 75%."},{"id":"yield2","type":"mcq","q":"Reactant A could produce 5.0 mol product; reactant B could produce 3.0 mol. Which is limiting?","choices":["A","B","Both are excess","Cannot determine"],"answer":1,"explanation":"B produces the smaller maximum amount of product."},{"id":"yield3","type":"mcq","q":"Which value should be used to calculate theoretical yield?","choices":["Excess reactant","Limiting reactant","Actual product mass only","Catalyst mass"],"answer":1,"explanation":"The limiting reactant sets the maximum product."}],"tags":["Theory","Practice","Quiz"]},{"id":"aqueous-net-ionic","title":"Aqueous Reactions, Solubility & Net Ionic Equations","module":4,"desc":"Understand dissociation, precipitation, spectator ions, acid-base neutralization and net ionic equations.","objectives":["Explain aqueous dissociation.","Use basic solubility rules.","Identify precipitates.","Write complete ionic equations.","Cancel spectator ions to obtain net ionic equations."],"facts":[["Aqueous","Dissolved in water."],["Dissociation","Separation of ions from an ionic compound in solution."],["Precipitate","Insoluble solid formed from solution."],["Spectator ion","Ion present but not changed in the net reaction."],["Complete ionic equation","Equation showing strong soluble electrolytes as ions."],["Net ionic equation","Equation containing only species directly undergoing chemical change."],["Solubility","Extent to which a solute dissolves under specified conditions."]],"sections":[{"label":"DISSOCIATION","title":"Water stabilizes separated ions","paragraphs":["Polar water molecules orient around ions and can pull soluble ionic compounds apart into hydrated cations and anions.","NaCl(aq) is therefore represented as Na⁺(aq) and Cl⁻(aq) in a complete ionic equation.","Not all ionic compounds are highly soluble, so state symbols and solubility rules matter."]},{"label":"PRECIPITATION","title":"Some ion combinations form insoluble solids","paragraphs":["When two solutions are mixed, ions may exchange partners. If one product is poorly soluble, it forms a precipitate.","Common introductory rules include high solubility of nitrates and many alkali-metal salts, while compounds such as AgCl are poorly soluble.","The precipitate remains written as an intact solid in the ionic equation."]},{"label":"NET IONIC EQUATIONS","title":"Remove ions that did not actually change","paragraphs":["Write soluble strong electrolytes as ions, preserve solids, liquids, gases and weak electrolytes as appropriate, then cancel identical spectator ions.","For silver chloride precipitation, the net ionic equation is Ag⁺(aq) + Cl⁻(aq) → AgCl(s).","For strong acid-strong base neutralization, the net ionic core is H⁺(aq) + OH⁻(aq) → H₂O(l)."],"example":["What is the net ionic equation for AgNO₃ + NaCl → AgCl + NaNO₃?",["Split soluble strong electrolytes into ions.","AgCl remains solid.","Cancel Na⁺ and NO₃⁻."],"Ag⁺(aq) + Cl⁻(aq) → AgCl(s)."]}],"clinical":["Electrolyte testing","Solutions conduct when they contain mobile ions.","Strong aqueous electrolytes provide many charged particles that carry current."],"traps":["Aqueous means dissolved in water, not simply liquid.","Do not split precipitates into ions.","Spectator ions are chemically present but absent from the net ionic equation."],"summary":["Soluble ionic compounds can dissociate.","Precipitates are insoluble solids.","Net ionic equations remove spectator ions.","Ag⁺ + Cl⁻ → AgCl(s).","H⁺ + OH⁻ → H₂O."],"practice":[["Identify spectators in AgNO₃ + NaCl → AgCl + NaNO₃.","Na⁺ and NO₃⁻.",["They remain unchanged in solution."]],["What is the net ionic equation for strong acid + strong base?","H⁺ + OH⁻ → H₂O.",["Other soluble ions are spectators."]],["Should AgCl(s) be split into ions?","No.",["It is an insoluble solid."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"thermochemistry","title":"Energy, Heat, Enthalpy & Calorimetry","module":5,"desc":"Understand heat transfer, temperature, system versus surroundings, endothermic and exothermic processes, enthalpy and calorimetry.","objectives":["Distinguish heat from temperature.","Identify exothermic and endothermic processes.","Use the sign of ΔH.","Calculate heat with q = mcΔT.","Apply calorimetry and energy conservation."],"facts":[["Heat","Energy transferred because of a temperature difference."],["Temperature","Measure related to average molecular kinetic energy."],["System","The part of the universe being studied."],["Surroundings","Everything outside the defined system."],["Exothermic","Process releasing heat from system to surroundings."],["Endothermic","Process absorbing heat into the system."],["Enthalpy change","Heat change at constant pressure under common chemistry conditions."],["Specific heat","Heat needed to raise 1 g of a substance by 1 °C."],["Calorimetry","Measurement of heat transfer."]],"sections":[{"label":"HEAT & TEMPERATURE","title":"Related but not identical","paragraphs":["Temperature reflects average kinetic energy of particles. Heat is energy in transit from a warmer region to a cooler region.","Two objects can have the same temperature but contain different total thermal energy because their masses and compositions differ.","Heat transfer continues until thermal equilibrium is reached."]},{"label":"ENTHALPY","title":"Exothermic versus endothermic","paragraphs":["For an exothermic process, the system loses heat to the surroundings and ΔH is negative under the standard sign convention.","For an endothermic process, the system absorbs heat and ΔH is positive.","Breaking bonds requires energy; forming bonds releases energy. The overall balance determines the reaction enthalpy."]},{"label":"CALORIMETRY","title":"q = mcΔT","paragraphs":["For heating or cooling without phase change, q = mcΔT, where m is mass, c is specific heat and ΔT = Tfinal − Tinitial.","If the measured material warms, q for that material is positive. If it cools, q is negative.","In an insulated calorimeter, heat lost by one part is gained by another, so qsystem + qsurroundings is approximately zero."],"example":["How much heat warms 100.0 g water by 5.0 °C? c = 4.184 J/g·°C.",["q = mcΔT.","100.0 × 4.184 × 5.0 = 2092 J.","Round appropriately."],"About 2.1 kJ absorbed."]}],"clinical":["Temperature regulation","The body contains a large amount of water.","Water's high specific heat helps buffer rapid temperature changes."],"traps":["Heat is not temperature.","Exothermic means the system releases heat.","Use ΔT = final − initial."],"summary":["Exothermic ΔH < 0.","Endothermic ΔH > 0.","q = mcΔT.","Energy lost by one part is gained by another in ideal calorimetry.","Water has high specific heat."],"practice":[["How much heat raises 50.0 g water by 10.0 °C? c=4.184 J/g·°C.","2092 J.",["50.0×4.184×10.0."]],["If ΔH = −125 kJ, is the process exothermic or endothermic?","Exothermic.",["Negative ΔH means heat leaves the system."]],["A sample cools from 40 °C to 30 °C. What is ΔT?","−10 °C.",["30−40 = −10."]]],"quiz":[{"id":"thermo1","type":"numeric","q":"Calculate q in joules for 25.0 g water heated by 4.0 °C. Use 4.184 J/g·°C.","answer":418.4,"tolerance":1.0,"unit":"J","explanation":"25.0×4.184×4.0 = 418.4 J."},{"id":"thermo2","type":"mcq","q":"A reaction has ΔH = +45 kJ. Which statement is correct?","choices":["It is exothermic","It is endothermic","No heat is involved","The surroundings must gain heat from the system"],"answer":1,"explanation":"Positive ΔH means the system absorbs heat."},{"id":"thermo3","type":"numeric","q":"A 10.0 g sample with c=2.0 J/g·°C warms by 15 °C. What is q?","answer":300,"tolerance":1,"unit":"J","explanation":"q=10×2×15=300 J."}],"tags":["Theory","Practice","Quiz"]},{"id":"gas-laws","title":"Gases, Pressure & Gas Laws","module":5,"desc":"Apply kinetic molecular theory, Boyle's law, Charles's law, the combined gas law, ideal gas law and partial pressures.","objectives":["Explain gas pressure using particle collisions.","Use Boyle's law.","Use Charles's and combined gas laws.","Use PV=nRT.","Apply Dalton's law of partial pressures."],"facts":[["Pressure","Force per unit area from particle collisions."],["Boyle's law","At constant T and n, P is inversely proportional to V."],["Charles's law","At constant P and n, V is proportional to absolute T."],["Combined gas law","P₁V₁/T₁ = P₂V₂/T₂."],["Ideal gas law","PV=nRT."],["Absolute temperature","Kelvin temperature."],["Partial pressure","Pressure contributed by one gas in a mixture."],["Dalton's law","Total pressure equals sum of partial pressures."]],"sections":[{"label":"KINETIC MOLECULAR THEORY","title":"Gas pressure comes from moving particles","paragraphs":["Gas particles are widely separated and move continuously. Their collisions with container walls create pressure.","Increasing temperature increases average kinetic energy. Changing volume changes collision frequency with the walls.","Ideal-gas models work best when particles are relatively far apart and intermolecular attractions are less important."]},{"label":"BOYLE & CHARLES","title":"Pressure-volume and temperature-volume relationships","paragraphs":["Boyle's law gives P₁V₁=P₂V₂ when temperature and amount remain constant. Compression raises pressure.","Charles's law gives V₁/T₁=V₂/T₂ when pressure and amount remain constant. Kelvin temperature must be used.","The combined gas law handles simultaneous changes in pressure, volume and temperature for a fixed amount of gas."],"example":["A gas occupies 2.0 L at 1.0 atm and is compressed to 1.0 L at constant T. Find P₂.",["P₁V₁=P₂V₂.","1.0×2.0 = P₂×1.0.","P₂=2.0 atm."],"2.0 atm."]},{"label":"IDEAL GAS & PARTIAL PRESSURE","title":"PV=nRT and Dalton's law","paragraphs":["The ideal gas equation relates pressure, volume, amount and absolute temperature. Use an R value with units matching the problem.","In a gas mixture, each gas behaves as though it contributes its own partial pressure.","Total pressure is the sum of component partial pressures, a principle directly relevant to respiratory gas exchange."]}],"clinical":["Breathing","During inspiration, thoracic and lung volume increase.","By Boyle's law, alveolar pressure falls below atmospheric pressure and air moves inward."],"traps":["Gas-law temperatures require Kelvin.","Boyle's law assumes constant temperature.","Partial pressure is the pressure contribution of one gas, not total gas pressure."],"summary":["P and V are inverse at constant T.","V and Kelvin T are direct at constant P.","PV=nRT.","Total pressure is the sum of partial pressures.","Gas laws explain ventilation."],"practice":[["A gas at 1.0 atm occupies 4.0 L. At constant T it is compressed to 2.0 L. New pressure?","2.0 atm.",["1×4=P×2."]],["Convert 27 °C to K for a gas-law problem.","300.15 K.",["27+273.15."]],["If O₂ partial pressure is 160 mmHg and N₂ is 600 mmHg, total of those two gases?","760 mmHg.",["Add partial pressures."]]],"quiz":[{"id":"gas1","type":"numeric","q":"A gas occupies 3.0 L at 2.0 atm. At constant temperature, what volume will it occupy at 1.0 atm?","answer":6.0,"tolerance":0.05,"unit":"L","explanation":"P₁V₁=P₂V₂: 2×3=1×V₂."},{"id":"gas2","type":"numeric","q":"Convert 37.0 °C to Kelvin for use in a gas law.","answer":310.15,"tolerance":0.02,"unit":"K","explanation":"37.0+273.15=310.15 K."},{"id":"gas3","type":"mcq","q":"Which change lowers gas pressure if temperature and moles remain constant?","choices":["Decrease volume","Increase volume","Add more gas","Decrease container size"],"answer":1,"explanation":"Boyle's law: larger volume gives lower pressure."}],"tags":["Theory","Practice","Quiz"]},{"id":"states-phase-changes","title":"Solids, Liquids, Phase Changes & Vapor Pressure","module":5,"desc":"Connect particle organization and intermolecular forces with melting, boiling, vapor pressure, surface tension and viscosity.","objectives":["Compare solids, liquids and gases.","Explain phase changes energetically.","Define vapor pressure and boiling point.","Relate IMF strength to vapor pressure and boiling point.","Explain surface tension and viscosity."],"facts":[["Melting","Solid → liquid."],["Freezing","Liquid → solid."],["Vaporization","Liquid → gas."],["Condensation","Gas → liquid."],["Sublimation","Solid → gas."],["Deposition","Gas → solid."],["Vapor pressure","Pressure of vapor in equilibrium with its liquid."],["Boiling point","Temperature at which vapor pressure equals external pressure."],["Surface tension","Resistance to increasing a liquid surface area."],["Viscosity","Resistance to flow."]],"sections":[{"label":"PHASES","title":"Particle freedom increases from solid to gas","paragraphs":["Solids have relatively fixed particle positions, liquids flow while retaining volume and gases expand to fill their containers.","The state favored at a given temperature and pressure depends partly on intermolecular attractions.","Strong attractions favor condensed phases, whereas high temperature favors greater molecular motion."]},{"label":"PHASE CHANGES","title":"Breaking intermolecular attractions requires energy","paragraphs":["Melting, vaporization and sublimation are endothermic because energy is required to separate particles.","Freezing, condensation and deposition are exothermic because stronger attractions form.","During a phase change at constant pressure, energy can change molecular organization without immediately changing temperature."]},{"label":"VAPOR PRESSURE & BOILING","title":"Stronger attraction means lower vapor pressure","paragraphs":["Molecules escape a liquid surface into vapor. At equilibrium, vapor pressure reflects the tendency of molecules to remain in the gas phase.","Stronger intermolecular forces reduce vapor pressure and generally increase boiling point.","Boiling begins when vapor pressure equals external pressure, so boiling point decreases at lower atmospheric pressure."]}],"clinical":["Sweating","Evaporation of sweat removes higher-energy water molecules from the skin surface.","Evaporative cooling helps lower body temperature."],"traps":["Boiling and evaporation are not identical.","Stronger IMFs lower vapor pressure but raise boiling point.","Phase changes do not change chemical identity."],"summary":["Vaporization is endothermic.","Condensation is exothermic.","Boiling occurs when vapor pressure equals external pressure.","Strong IMFs raise boiling point.","Evaporation causes cooling."],"practice":[["Is condensation endothermic or exothermic?","Exothermic.",["Gas particles form stronger attractions in the liquid."]],["What happens to boiling point when external pressure decreases?","It decreases.",["Vapor pressure reaches the lower external pressure at a lower temperature."]],["Which has lower vapor pressure: a liquid with stronger or weaker IMFs?","Stronger IMFs.",["Fewer molecules escape into vapor."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"solutions-solubility","title":"Solutions, Solubility & Electrolytes","module":6,"desc":"Understand solute-solvent interactions, saturation, factors affecting solubility and electrical conductivity of strong, weak and nonelectrolytes.","objectives":["Identify solute and solvent.","Explain molecular-level dissolution.","Distinguish saturated, unsaturated and supersaturated solutions.","Compare strong, weak and nonelectrolytes.","Explain temperature and pressure effects on solubility."],"facts":[["Solution","Homogeneous mixture."],["Solvent","Component that dissolves the solute or is present in greater amount."],["Solute","Substance dissolved in the solvent."],["Solubility","Maximum equilibrium amount that dissolves under specified conditions."],["Saturated","Contains the equilibrium maximum dissolved solute."],["Unsaturated","Contains less than the maximum."],["Supersaturated","Contains more dissolved solute than the normal equilibrium amount and is unstable."],["Strong electrolyte","Produces ions extensively in solution."],["Weak electrolyte","Ionizes only partially."],["Nonelectrolyte","Dissolves without producing substantial ions."]],"sections":[{"label":"DISSOLUTION","title":"Solute-solvent attractions determine whether mixing is favorable","paragraphs":["Water's polarity makes it effective at surrounding ions and many polar molecules.","Ion-dipole interactions stabilize ions such as Na⁺ and Cl⁻ in aqueous solution. Hydrogen bonding helps dissolve many polar molecular solutes.","Nonpolar substances generally dissolve poorly in water because they cannot replace water-water interactions with equally favorable new interactions."]},{"label":"SATURATION","title":"Solubility is an equilibrium property","paragraphs":["An unsaturated solution can dissolve more solute under the same conditions. A saturated solution is at equilibrium with respect to additional dissolution.","A supersaturated solution contains more dissolved solute than the normal equilibrium amount and can crystallize rapidly when disturbed or seeded.","For many solids, solubility changes with temperature. Gas solubility usually decreases as temperature rises."]},{"label":"ELECTROLYTES","title":"Conductivity requires mobile charge","paragraphs":["Strong electrolytes produce many ions; soluble ionic compounds and strong acids are common examples.","Weak electrolytes only partially ionize, so fewer ions carry current.","Glucose dissolves as neutral molecules and is a nonelectrolyte despite being highly water soluble."],"table":[["Type","Example","Particles"],["Strong electrolyte","NaCl","Mostly ions"],["Weak electrolyte","Acetic acid","Molecules + some ions"],["Nonelectrolyte","Glucose","Neutral molecules"]]}],"clinical":["Plasma electrolytes","Body fluids contain Na⁺, K⁺, Cl⁻, HCO₃⁻ and other ions.","These mobile charged particles influence conductivity, osmolality and membrane potentials."],"traps":["Solubility is not the same as dissolution rate.","Weak electrolyte does not mean poorly soluble.","A molecular solute can be water soluble without conducting strongly."],"summary":["Solutions are homogeneous.","Water favors ionic and polar solutes.","Saturation is an equilibrium condition.","Electrolytes produce ions.","Glucose is a nonelectrolyte."],"practice":[["Is NaCl a strong electrolyte in water?","Yes.",["Soluble NaCl dissociates extensively into ions."]],["Does glucose conduct strongly after dissolving?","No.",["It remains mostly neutral molecules."]],["What usually happens to gas solubility as temperature rises?","It decreases.",["Warmer liquids generally retain less dissolved gas."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"molarity-dilution","title":"Concentration, Molarity & Dilution","module":6,"desc":"Calculate molarity, prepare solutions from solids or stock solutions and solve dilution problems with unit-aware dimensional analysis.","objectives":["Calculate molarity from moles and liters.","Calculate moles from molarity and volume.","Prepare a molar solution conceptually.","Use M₁V₁=M₂V₂.","Distinguish solution volume from solvent volume."],"facts":[["Concentration","Amount of solute relative to solution or solvent."],["Molarity","Moles of solute per liter of solution."],["Stock solution","Concentrated solution used to prepare dilutions."],["Dilution","Decrease in concentration by adding solvent."],["Aliquot","Measured portion of a solution."],["Final volume","Total volume after dilution."]],"sections":[{"label":"MOLARITY","title":"M = moles of solute / liters of solution","paragraphs":["Molarity is one of the most common concentration units in chemistry. The denominator is total solution volume, not solvent volume.","To find moles from molarity, use n=MV with volume in liters.","To prepare a solution from solid, determine required moles, convert to mass, dissolve and bring the solution to the desired final volume."],"example":["What is the molarity of 0.50 mol NaCl in 2.0 L solution?",["M=n/V.","0.50/2.0=0.25."],"0.25 M."]},{"label":"DILUTION","title":"Solute moles remain constant","paragraphs":["In a simple dilution, adding solvent changes concentration and volume but not the number of moles of solute.","Therefore M₁V₁=M₂V₂ when the same solute is present before and after dilution.","Both volume values may use the same units because their units cancel, but concentration units must also be consistent."],"example":["How much 2.0 M stock is needed to prepare 100 mL of 0.50 M solution?",["2.0×V₁=0.50×100.","V₁=25 mL.","Dilute the 25 mL aliquot to a final volume of 100 mL."],"25 mL stock."]},{"label":"PREPARATION ERRORS","title":"Final volume is not solvent volume added","paragraphs":["If 25 mL of stock is diluted to 100 mL, you do not simply add exactly 100 mL of water. You add solvent until the total solution volume reaches 100 mL.","Volumetric glassware is designed around this final-volume concept.","This distinction becomes important when accurate concentrations are required."]}],"clinical":["IV and laboratory solutions","Healthcare solutions are often described using concentration units such as mmol/L, mg/mL or percent.","Accurate concentration calculations require careful attention to both amount and final volume."],"traps":["Molarity uses liters of solution.","Dilution preserves solute moles.","Final volume is not necessarily the volume of solvent added."],"summary":["M=n/V.","n=MV.","M₁V₁=M₂V₂ for simple dilution.","Use final total solution volume.","Keep units consistent."],"practice":[["0.20 mol in 0.50 L gives what molarity?","0.40 M.",["0.20/0.50."]],["How many moles are in 250 mL of 0.20 M solution?","0.050 mol.",["0.20×0.250 L."]],["What volume of 1.0 M stock makes 100 mL of 0.10 M solution?","10 mL.",["1.0V₁=0.10×100."]]],"quiz":[{"id":"molr1","type":"numeric","q":"What is the molarity of 0.75 mol solute in 1.5 L solution?","answer":0.5,"tolerance":0.01,"unit":"M","explanation":"0.75/1.5=0.50 M."},{"id":"molr2","type":"numeric","q":"How many moles are in 0.200 L of a 0.50 M solution?","answer":0.1,"tolerance":0.002,"unit":"mol","explanation":"n=MV=0.50×0.200=0.100 mol."},{"id":"dil1","type":"numeric","q":"How many mL of 2.0 M stock are needed to prepare 200 mL of 0.50 M solution?","answer":50,"tolerance":0.2,"unit":"mL","explanation":"2.0V₁=0.50×200, so V₁=50 mL."}],"tags":["Theory","Practice","Quiz"]},{"id":"colligative-osmosis","title":"Colligative Properties, Osmosis & Tonicity","module":6,"desc":"Learn how dissolved-particle number changes vapor pressure, boiling point, freezing point and osmotic behavior, then connect these principles with cell volume and IV fluids.","objectives":["Define colligative property.","Explain why particle number matters.","Describe osmosis and osmotic pressure.","Distinguish osmolarity from molarity.","Explain isotonic, hypotonic and hypertonic effects on cells."],"facts":[["Colligative property","Solution property depending primarily on number of dissolved particles."],["Osmosis","Net water movement across a selectively permeable membrane."],["Osmotic pressure","Pressure required to oppose osmosis."],["Osmolarity","Osmoles of solute particles per liter of solution."],["Isotonic","Produces no major net cell-water shift for the membrane considered."],["Hypotonic","Has lower effective nonpenetrating-solute concentration than the cell."],["Hypertonic","Has higher effective nonpenetrating-solute concentration than the cell."],["Freezing-point depression","Lowering of solvent freezing point by dissolved particles."],["Boiling-point elevation","Raising of solvent boiling point by dissolved particles."]],"sections":[{"label":"PARTICLE EFFECTS","title":"Colligative properties count particles","paragraphs":["Dissolved solute particles reduce the escaping tendency of solvent molecules and alter phase-transition conditions.","More particles generally produce greater vapor-pressure lowering, boiling-point elevation and freezing-point depression.","Electrolytes can produce more particles per mole than nonelectrolytes because of dissociation."]},{"label":"OSMOSIS","title":"Water responds to effective solute differences","paragraphs":["If a membrane allows water to move but restricts a solute, water tends to move toward the side with greater effective concentration of nonpenetrating solute.","Osmotic pressure quantifies the pressure needed to oppose that water movement.","Osmolarity counts osmotically active particles; one ideal mole of NaCl can contribute approximately two osmoles because it dissociates into two ions."]},{"label":"TONICITY","title":"Predicting cell-volume change","paragraphs":["In an isotonic environment, cells maintain approximately stable volume. In a hypotonic environment, water enters cells and they swell.","In a hypertonic environment, water leaves cells and they shrink.","Tonicity depends specifically on solutes that do not rapidly cross the membrane, so it is related to but not identical with total osmolarity."],"table":[["Environment","Water movement","Cell response"],["Hypotonic","Into cell","Swells"],["Isotonic","No major net shift","Stable"],["Hypertonic","Out of cell","Shrinks"]]}],"clinical":["IV fluids","IV fluid tonicity influences movement of water between extracellular fluid and cells.","Large tonic imbalances can cause cells to swell or shrink."],"traps":["Osmolarity and tonicity are related but not identical.","Equal molarity does not mean equal particle concentration.","Tonicity depends on effectively nonpenetrating solutes."],"summary":["Colligative effects depend on particle number.","Osmosis is water movement.","Hypotonic solutions swell cells.","Hypertonic solutions shrink cells.","Electrolyte dissociation increases particle count."],"practice":[["Which causes RBC swelling: hypotonic or hypertonic solution?","Hypotonic.",["Water enters the cell."]],["Ideally, 1 mol NaCl produces about how many moles of particles?","2.",["Na⁺ and Cl⁻."]],["Which environment causes water to leave a cell?","Hypertonic.",["External effective solute concentration is higher."]]],"quiz":[{"id":"osm1","type":"mcq","q":"A red blood cell is placed in a strongly hypotonic solution. What happens?","choices":["It shrinks","It swells","No water moves","All ions disappear"],"answer":1,"explanation":"Water enters the cell in a hypotonic environment."},{"id":"osm2","type":"numeric","q":"Ideal complete dissociation of 0.50 mol NaCl produces approximately how many osmoles of particles?","answer":1.0,"tolerance":0.02,"unit":"osmoles","explanation":"NaCl produces about 2 particles per formula unit: 0.50×2=1.0."},{"id":"osm3","type":"mcq","q":"Which statement best distinguishes tonicity from osmolarity?","choices":["They are always identical","Tonicity depends mainly on nonpenetrating solutes","Osmolarity only applies to gases","Tonicity is measured in kelvin"],"answer":1,"explanation":"Penetrating solutes may contribute to osmolarity without sustained tonic effects."}],"tags":["Theory","Practice","Quiz"]},{"id":"kinetics","title":"Chemical Kinetics, Activation Energy & Catalysts","module":6,"desc":"Understand reaction rates, collision theory, activation energy and how temperature, concentration, surface area and catalysts change reaction speed.","objectives":["Define reaction rate.","Apply collision theory.","Explain activation energy.","Predict rate changes from concentration and temperature.","Explain catalysts and enzymes."],"facts":[["Reaction rate","Change in reactant or product concentration per unit time."],["Collision theory","Particles must collide with suitable energy and orientation to react."],["Activation energy","Minimum energy barrier along a reaction pathway."],["Catalyst","Substance that increases rate without net consumption."],["Enzyme","Biological catalyst."],["Transition state","High-energy arrangement along the reaction path."],["Rate law","Mathematical relation between rate and reactant concentrations determined experimentally."]],"sections":[{"label":"COLLISION THEORY","title":"Most collisions do not react","paragraphs":["Reacting particles must encounter one another, but collision alone is insufficient.","A productive collision requires enough energy to overcome the activation-energy barrier and an orientation that allows bonds to reorganize.","Reaction rate therefore reflects the frequency of effective collisions."]},{"label":"RATE FACTORS","title":"Temperature and concentration change collision success","paragraphs":["Higher reactant concentration usually increases collision frequency. Greater surface area exposes more solid particles to reaction.","Higher temperature increases molecular speed and, more importantly, increases the fraction of collisions energetic enough to cross the activation barrier.","The size of a temperature effect varies with the reaction and its activation energy."]},{"label":"CATALYSIS","title":"A lower-energy pathway","paragraphs":["Catalysts provide alternative pathways with lower activation energy.","They accelerate both forward and reverse reactions and therefore do not change the equilibrium constant.","Enzymes use highly specific active sites to orient substrates and stabilize transition states under physiological conditions."]}],"clinical":["Enzymes","Metabolic reactions would be far too slow without enzymes.","Enzymes lower activation barriers while preserving the thermodynamic equilibrium of the reaction."],"traps":["Catalysts do not change ΔH.","Catalysts do not change K.","Higher temperature can speed reactions but may denature biological catalysts."],"summary":["Effective collisions require energy and orientation.","Higher concentration often increases rate.","Temperature strongly affects rate.","Catalysts lower activation energy.","Enzymes are catalysts."],"practice":[["What does a catalyst lower?","Activation energy.",["It provides a different reaction pathway."]],["Does a catalyst change the equilibrium constant?","No.",["It speeds both directions."]],["Why can powdered solid react faster than a large chunk?","Greater surface area.",["More particles are exposed for collision."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"equilibrium","title":"Chemical Equilibrium & Le Châtelier's Principle","module":6,"desc":"Understand dynamic equilibrium, equilibrium constants and how systems respond to changes in concentration, pressure and temperature.","objectives":["Define dynamic equilibrium.","Interpret K qualitatively.","Apply Le Châtelier's principle.","Predict concentration and pressure shifts.","Explain temperature and catalyst effects."],"facts":[["Dynamic equilibrium","State in which forward and reverse rates are equal."],["Equilibrium constant","Expression describing equilibrium composition at a given temperature."],["Reaction quotient","K-like expression evaluated away from equilibrium."],["Le Châtelier's principle","Qualitative prediction of how equilibrium responds to disturbance."],["Equilibrium shift","Change in equilibrium composition toward reactants or products."]],"sections":[{"label":"DYNAMIC EQUILIBRIUM","title":"Equal rates, not stopped chemistry","paragraphs":["At equilibrium, reactants continue forming products and products continue forming reactants.","The forward and reverse rates are equal, so macroscopic concentrations remain constant with time.","Equilibrium does not require equal reactant and product concentrations."]},{"label":"LE CHÂTELIER","title":"The system responds to a disturbance","paragraphs":["Adding a reactant often shifts equilibrium toward products; removing a product can also favor product formation.","For gas equilibria, decreasing volume raises pressure and favors the side with fewer moles of gas, when gas mole counts differ.","Changing concentration or pressure changes equilibrium position but not K at constant temperature."]},{"label":"TEMPERATURE & CATALYSTS","title":"Temperature can change K; catalysts cannot","paragraphs":["Treat heat conceptually as a reactant in an endothermic forward reaction and as a product in an exothermic one.","Changing temperature changes the equilibrium constant because it changes the relative thermodynamic favorability of forward and reverse directions.","A catalyst only helps the system reach equilibrium faster; it does not change K or the final equilibrium composition."]}],"clinical":["Oxygen binding","Reversible binding of oxygen to hemoglobin responds to oxygen concentration and chemical conditions.","Physiological binding systems often use equilibrium ideas even when their full behavior is more complex."],"traps":["Equilibrium does not mean equal concentrations.","A catalyst does not shift equilibrium.","Only temperature changes K for a given reaction expression."],"summary":["At equilibrium, forward and reverse rates are equal.","Le Châtelier predicts responses to disturbances.","Adding reactant often shifts toward products.","Pressure shifts matter for gases.","Temperature can change K.","Catalysts do not change K."],"practice":[["If product is removed, which direction is often favored?","Toward products.",["The system replaces some removed product."]],["Does adding a catalyst change K?","No.",["It speeds both directions."]],["If volume decreases in a gas equilibrium, which side is favored?","The side with fewer gas moles.",["Higher pressure favors fewer gas particles, when counts differ."]]],"quiz":[{"id":"eq1","type":"mcq","q":"At dynamic equilibrium, which statement is true?","choices":["Reactions stop","Reactant and product concentrations are equal","Forward and reverse rates are equal","All reactants are consumed"],"answer":2,"explanation":"Equal rates keep concentrations constant."},{"id":"eq2","type":"mcq","q":"Which change can alter the equilibrium constant K?","choices":["Adding catalyst","Changing temperature","Adding an inert stir bar","Increasing surface area of a pure solid"],"answer":1,"explanation":"K is temperature dependent."},{"id":"eq3","type":"mcq","q":"Removing product from an equilibrium mixture generally causes a shift in which direction?","choices":["Toward reactants","Toward products","No reaction can occur","K becomes zero"],"answer":1,"explanation":"The system tends to replace removed product."}],"tags":["Theory","Practice","Quiz"]},{"id":"equilibrium-calculations","title":"Equilibrium Expressions & Introductory K Calculations","module":6,"desc":"Build equilibrium expressions and use K values to reason quantitatively about product- versus reactant-favored systems.","objectives":["Write Kc expressions.","Exclude pure solids and liquids from K expressions.","Interpret large and small K values.","Calculate simple K values from equilibrium concentrations.","Relate Q to K conceptually."],"facts":[["Kc","Equilibrium constant expressed using molar concentrations."],["Kp","Equilibrium constant expressed using gas partial pressures."],["Reaction quotient Q","Same algebraic form as K evaluated at current conditions."],["Product-favored","Equilibrium containing relatively more products, often associated with large K."],["Reactant-favored","Equilibrium containing relatively more reactants, often associated with small K."]],"sections":[{"label":"WRITING K","title":"Products over reactants, each raised to coefficients","paragraphs":["For aA + bB ⇌ cC + dD, Kc = [C]^c[D]^d / ([A]^a[B]^b) for species represented by concentration.","Pure solids and pure liquids are omitted from the usual equilibrium expression because their activities are effectively constant.","Stoichiometric coefficients become exponents in the equilibrium expression."]},{"label":"INTERPRETING K","title":"Magnitude describes equilibrium position","paragraphs":["A very large K means products are strongly favored at equilibrium relative to reactants, although it says nothing directly about reaction speed.","A very small K means reactants are favored.","K close to one often indicates appreciable amounts of both sides."]},{"label":"Q VERSUS K","title":"Predicting spontaneous direction toward equilibrium","paragraphs":["Q uses the current concentrations or pressures in the same expression as K.","If Q<K, the reaction tends to proceed forward toward products. If Q>K, it tends to proceed in reverse toward reactants.","If Q=K, the system is already at equilibrium."],"example":["For A ⇌ B, [A]=0.20 M and [B]=0.80 M at equilibrium. Find K.",["K=[B]/[A].","0.80/0.20=4.0."],"K=4.0."]}],"clinical":["Binding equilibria","Many drug-receptor and acid-base systems are described with equilibrium constants.","The size of an equilibrium constant indicates relative affinity or product favorability, not how fast equilibrium is reached."],"traps":["K magnitude does not indicate rate.","Pure solids and liquids are omitted from standard K expressions.","Coefficients become exponents."],"summary":["K is products over reactants using the balanced equation.","Large K generally favors products.","Small K generally favors reactants.","Q<K predicts forward shift.","Q>K predicts reverse shift."],"practice":[["For A ⇌ B, [A]=0.50 M and [B]=1.0 M. K?","2.0.",["1.0/0.50."]],["If Q<K, which direction is favored?","Forward.",["More products form until Q reaches K."]],["Are pure solids included in ordinary Kc expressions?","No.",["Their activity is treated as constant."]]],"quiz":[{"id":"eqc1","type":"numeric","q":"For A ⇌ B, equilibrium [A]=0.25 M and [B]=0.75 M. What is Kc?","answer":3.0,"tolerance":0.02,"unit":"","explanation":"K=[B]/[A]=0.75/0.25=3."},{"id":"eqc2","type":"mcq","q":"If Q is greater than K, which direction is favored as equilibrium is approached?","choices":["Forward","Reverse","Neither; K changes","Reaction stops permanently"],"answer":1,"explanation":"Too much product relative to equilibrium drives the reverse direction."},{"id":"eqc3","type":"mcq","q":"What does a very large K usually indicate?","choices":["A very fast reaction","Products are favored at equilibrium","Reactants are favored","No products form"],"answer":1,"explanation":"K describes equilibrium position, not speed."}],"tags":["Theory","Practice","Quiz"]},{"id":"acid-base-theory","title":"Acids, Bases & Conjugate Pairs","module":7,"desc":"Learn Arrhenius and Brønsted-Lowry acid-base concepts, proton transfer, conjugate pairs and strong versus weak acid/base behavior.","objectives":["Define Brønsted acids and bases.","Identify conjugate pairs.","Distinguish strong and weak acids.","Distinguish strength from concentration.","Explain amphiprotic behavior."],"facts":[["Brønsted acid","Proton donor."],["Brønsted base","Proton acceptor."],["Conjugate base","Species remaining after an acid loses H⁺."],["Conjugate acid","Species formed when a base gains H⁺."],["Strong acid","Acid that ionizes essentially completely in water."],["Weak acid","Acid that ionizes partially."],["Strong base","Base that dissociates or reacts extensively to produce OH⁻."],["Amphiprotic","Able to donate or accept a proton."],["Hydronium","H₃O⁺."]],"sections":[{"label":"PROTON TRANSFER","title":"Acid donates; base accepts","paragraphs":["A Brønsted-Lowry acid donates H⁺ and becomes its conjugate base. A Brønsted-Lowry base accepts H⁺ and becomes its conjugate acid.","Every proton-transfer reaction therefore contains two conjugate acid-base pairs.","Water often participates directly because it can accept or donate protons."],"example":["In HCl + H₂O → H₃O⁺ + Cl⁻, identify the acid and base.",["HCl donates H⁺, so it is the acid.","H₂O accepts H⁺, so it is the base.","Cl⁻ is the conjugate base; H₃O⁺ is the conjugate acid."],"Acid HCl; base H₂O."]},{"label":"STRENGTH","title":"Strength is extent of ionization, not amount present","paragraphs":["A strong acid ionizes almost completely in water, while a weak acid establishes an equilibrium with substantial un-ionized acid remaining.","Concentration describes how much acid is present per unit volume. Therefore, a dilute strong acid and a concentrated weak acid are different comparisons.","Strong acids have very weak conjugate bases; strong bases have very weak conjugate acids."]},{"label":"AMPHIPROTIC SPECIES","title":"Some substances can act either way","paragraphs":["Water can donate a proton to a strong base or accept a proton from an acid.","Bicarbonate, HCO₃⁻, can accept H⁺ to form H₂CO₃ or donate H⁺ to form CO₃²⁻.","This flexibility is important in biological buffer systems."]}],"clinical":["Bicarbonate buffer","Bicarbonate can accept H⁺ and carbonic acid can donate H⁺.","Their conjugate relationship helps stabilize extracellular pH."],"traps":["Strong does not mean concentrated.","Conjugate pairs differ by one proton.","Water can be either acid or base."],"summary":["Acids donate H⁺.","Bases accept H⁺.","Acids form conjugate bases.","Bases form conjugate acids.","Strength describes ionization extent.","Water is amphiprotic."],"practice":[["What is the conjugate base of H₂CO₃?","HCO₃⁻.",["Remove one H⁺."]],["What is the conjugate acid of NH₃?","NH₄⁺.",["Add one H⁺."]],["Can a weak acid be concentrated?","Yes.",["Strength and concentration are different properties."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"ph-poh","title":"pH, pOH, H⁺ & OH⁻ Calculations","module":7,"desc":"Calculate pH, pOH, hydrogen-ion concentration and hydroxide concentration and understand the logarithmic meaning of the pH scale.","objectives":["Use pH = −log[H⁺].","Use [H⁺]=10⁻ᵖᴴ.","Calculate pOH and [OH⁻].","Use pH+pOH=14.00 at 25 °C.","Interpret tenfold pH changes."],"facts":[["pH","Negative base-10 logarithm of hydrogen-ion activity; often approximated with concentration."],["pOH","Negative logarithm of hydroxide concentration in introductory problems."],["Acidic","[H⁺] > [OH⁻]."],["Basic","[OH⁻] > [H⁺]."],["Neutral","[H⁺] = [OH⁻]."],["Kw","Water ionization constant, approximately 1.0×10⁻¹⁴ at 25 °C."],["Logarithmic scale","Scale where a one-unit pH change corresponds to tenfold H⁺ change."]],"sections":[{"label":"CALCULATING PH","title":"pH = −log[H⁺]","paragraphs":["The logarithmic pH scale compresses large ranges of hydrogen-ion concentration into manageable numbers.","A solution with [H⁺]=1.0×10⁻³ M has pH 3.00.","A decrease from pH 7 to pH 6 represents about a tenfold increase in hydrogen-ion concentration."],"example":["Find pH if [H⁺]=1.0×10⁻⁴ M.",["pH=−log(1.0×10⁻⁴)."],"pH=4.00."]},{"label":"FROM PH TO H+","title":"Use the antilogarithm","paragraphs":["Rearranging gives [H⁺]≈10⁻ᵖᴴ for introductory concentration calculations.","At pH 5, [H⁺]≈1×10⁻⁵ M. At pH 6, [H⁺]≈1×10⁻⁶ M.","Thus, seemingly small numerical pH changes represent large chemical differences."]},{"label":"POH & KW","title":"Hydrogen and hydroxide are linked","paragraphs":["At 25 °C, Kw=[H⁺][OH⁻]≈1.0×10⁻¹⁴ and pH+pOH=14.00.","If pH=9.00, pOH=5.00 and [OH⁻]≈1×10⁻⁵ M.","Neutral pH is temperature dependent because Kw changes with temperature."]}],"clinical":["Blood pH","Arterial blood pH is maintained in a narrow slightly basic range.","Because pH is logarithmic, small pH shifts represent substantial relative changes in H⁺."],"traps":["A one-unit pH change is tenfold in H⁺.","Lower pH means higher H⁺.","Neutral pH is exactly 7 only under specific temperature conditions such as near 25 °C."],"summary":["pH=−log[H⁺].","[H⁺]=10⁻ᵖᴴ.","At 25 °C, pH+pOH=14.","Lower pH means more H⁺.","pH is logarithmic."],"practice":[["What is pH of 1×10⁻³ M H⁺?","3.00.",["−log(10⁻³)=3."]],["What is [H⁺] at pH 4?","1×10⁻⁴ M.",["10⁻⁴."]],["At 25 °C, pH 8 has what pOH?","6.",["14−8."]]],"quiz":[{"id":"ph1","type":"numeric","q":"What is the pH of a solution with [H⁺]=1.0×10^-5 M?","answer":5.0,"tolerance":0.01,"unit":"","explanation":"pH=−log(10⁻⁵)=5."},{"id":"ph2","type":"numeric","q":"At 25 °C, what is pOH if pH=9.25?","answer":4.75,"tolerance":0.01,"unit":"","explanation":"14.00−9.25=4.75."},{"id":"ph3","type":"numeric","q":"A solution changes from pH 7 to pH 5. How many times larger is [H⁺]?","answer":100,"tolerance":0.5,"unit":"times","explanation":"Two pH units correspond to 10²=100-fold."}],"tags":["Theory","Practice","Quiz"]},{"id":"buffers-henderson","title":"Buffers & Henderson-Hasselbalch Reasoning","module":7,"desc":"Understand buffer action, buffer capacity, pKa and how weak acid/conjugate base ratios determine pH.","objectives":["Explain how buffers consume added acid or base.","Define buffer capacity.","Relate pKa to acid strength.","Use Henderson-Hasselbalch conceptually and numerically.","Explain why buffers work best near pKa."],"facts":[["Buffer","System resisting large pH changes."],["Buffer capacity","Amount of acid/base a buffer can absorb before pH changes greatly."],["Ka","Acid dissociation equilibrium constant."],["pKa","−log Ka."],["Henderson-Hasselbalch equation","pH=pKa+log([A⁻]/[HA])."],["Conjugate base","Base form of a weak acid buffer pair."],["Buffer range","Typically most effective within about one pH unit of pKa."]],"sections":[{"label":"BUFFER ACTION","title":"Weak acid and conjugate base share the workload","paragraphs":["When strong acid is added, the conjugate base binds much of the added H⁺. When strong base is added, the weak acid donates H⁺ to neutralize much of the OH⁻.","A buffer does not prevent pH change completely. It reduces the magnitude of change until one component becomes depleted.","Greater total concentrations of the buffer pair generally provide greater buffer capacity."]},{"label":"PKA & RATIO","title":"pH depends on the base-to-acid ratio","paragraphs":["The Henderson-Hasselbalch equation is pH=pKa+log([A⁻]/[HA]).","When conjugate base and weak acid concentrations are equal, the log term is zero and pH=pKa.","If base exceeds acid tenfold, pH is about one unit above pKa; if acid exceeds base tenfold, pH is about one unit below pKa."],"example":["A buffer has pKa=4.76 and equal concentrations of A⁻ and HA. Find pH.",["[A⁻]/[HA]=1.","log(1)=0.","pH=4.76+0."],"pH=4.76."]},{"label":"PHYSIOLOGICAL BUFFERING","title":"Bicarbonate is an open buffer system","paragraphs":["The bicarbonate system links CO₂, H₂CO₃, H⁺ and HCO₃⁻.","The lungs regulate the CO₂ side rapidly through ventilation, while kidneys regulate bicarbonate and acid excretion more slowly.","Because the body actively regulates buffer components, physiological acid-base control is more dynamic than a closed beaker buffer."]}],"clinical":["Bicarbonate","The lungs can alter CO₂ and the kidneys can alter HCO₃⁻.","This coordinated regulation gives the bicarbonate system major physiological importance."],"traps":["Buffers can be overwhelmed.","pH=pKa only when base and acid forms are equal.","Buffer capacity depends on amount as well as ratio."],"summary":["Buffers contain weak acid/base pairs.","Conjugate base consumes added H⁺.","Weak acid neutralizes added base.","pH=pKa when [A⁻]=[HA].","Buffers work best near pKa."],"practice":[["If pKa=6.1 and [base]=[acid], what is pH?","6.1.",["log(1)=0."]],["If base/acid ratio is 10, pH is how far from pKa?","+1 pH unit.",["log10(10)=1."]],["What happens to buffer capacity if total buffer concentration increases?","It generally increases.",["More buffer molecules are available to neutralize additions."]]],"quiz":[{"id":"buf1","type":"numeric","q":"A buffer has pKa 7.20 and equal acid and conjugate-base concentrations. What is pH?","answer":7.2,"tolerance":0.01,"unit":"","explanation":"When ratio=1, log1=0, so pH=pKa."},{"id":"buf2","type":"numeric","q":"A buffer has pKa 6.0 and [base]/[acid]=10. What is pH?","answer":7.0,"tolerance":0.02,"unit":"","explanation":"pH=6.0+log10(10)=7.0."},{"id":"buf3","type":"mcq","q":"Which component of a weak-acid buffer primarily consumes added strong acid?","choices":["The conjugate base","The weak acid","Water only","A catalyst"],"answer":0,"explanation":"The conjugate base accepts added H⁺."}],"tags":["Theory","Practice","Quiz"]},{"id":"titrations-neutralization","title":"Acid-Base Neutralization & Titrations","module":7,"desc":"Use stoichiometry to understand neutralization, equivalence points, indicators and titration calculations.","objectives":["Write neutralization reactions.","Define equivalence point.","Distinguish endpoint from equivalence point.","Use titration stoichiometry.","Calculate unknown acid/base concentration in simple 1:1 reactions."],"facts":[["Neutralization","Acid-base reaction producing conjugate products, often water and a salt."],["Titration","Controlled addition of solution of known concentration to determine another concentration."],["Titrant","Known solution delivered during titration."],["Analyte","Solution being analyzed."],["Equivalence point","Point where stoichiometrically equivalent amounts have reacted."],["Endpoint","Observed indicator or instrument signal used to estimate equivalence."],["Indicator","Substance changing color over a characteristic pH range."]],"sections":[{"label":"NEUTRALIZATION","title":"H⁺ and OH⁻ form water in strong systems","paragraphs":["For strong acid and strong base, the central net ionic reaction is H⁺ + OH⁻ → H₂O.","Balanced stoichiometry determines how many moles of acid react with how many moles of base.","Polyprotic acids or bases with multiple equivalents require careful coefficient reasoning."]},{"label":"TITRATION SETUP","title":"Known titrant reveals unknown analyte","paragraphs":["A measured volume of analyte is placed in a flask, and titrant of known concentration is added gradually.","The equivalence point occurs when chemically equivalent stoichiometric amounts have reacted.","An indicator endpoint should be chosen to occur near the true equivalence region."]},{"label":"CALCULATION","title":"Moles first, then concentration","paragraphs":["For a 1:1 reaction, moles acid at equivalence equal moles base. Since n=MV, MₐVₐ=MᵦVᵦ in that special case.","For other stoichiometries, use the balanced equation instead of memorizing a 1:1 shortcut.","Volumes must use compatible units; if the same unit appears on both sides of a 1:1 equation, it cancels."],"example":["25.0 mL HCl is neutralized by 20.0 mL of 0.100 M NaOH. Find HCl molarity.",["Moles NaOH=0.100×0.0200=0.00200 mol.","HCl:NaOH is 1:1, so HCl moles=0.00200.","M HCl=0.00200/0.0250=0.0800 M."],"0.0800 M HCl."]}],"clinical":["Antacid chemistry","Antacids contain basic substances that neutralize gastric acid.","Their neutralizing capacity depends on acid-base stoichiometry, not merely tablet mass."],"traps":["Endpoint is an observation; equivalence point is stoichiometric.","M₁V₁=M₂V₂ only works directly for suitable 1:1 stoichiometry.","Use liters when calculating moles with mol/L."],"summary":["Neutralization is stoichiometric.","Titrant concentration is known.","Equivalence point is chemical; endpoint is observed.","Use n=MV.","Balanced coefficients control titration ratios."],"practice":[["10.0 mL 0.200 M HCl contains how many moles?","0.00200 mol.",["0.200×0.0100."]],["At equivalence for HCl + NaOH, moles HCl equal what?","Moles NaOH.",["The reaction ratio is 1:1."]],["Is endpoint exactly identical to equivalence point by definition?","No.",["Endpoint is the observed signal used to estimate equivalence."]]],"quiz":[{"id":"tit1","type":"numeric","q":"20.0 mL of 0.150 M NaOH neutralizes a 1:1 acid. How many moles NaOH were used?","answer":0.003,"tolerance":2e-05,"unit":"mol","explanation":"0.150×0.0200=0.00300 mol."},{"id":"tit2","type":"numeric","q":"25.0 mL HCl requires 25.0 mL of 0.100 M NaOH at 1:1 equivalence. What is HCl molarity?","answer":0.1,"tolerance":0.002,"unit":"M","explanation":"Equal volumes and 1:1 stoichiometry give equal molarities."},{"id":"tit3","type":"mcq","q":"Which statement is correct?","choices":["Endpoint is the theoretical stoichiometric point","Equivalence point is where stoichiometric amounts have reacted","Indicators change K","Titrant concentration is always unknown"],"answer":1,"explanation":"Equivalence is defined chemically; endpoint is observed."}],"tags":["Theory","Practice","Quiz"]},{"id":"redox","title":"Oxidation-Reduction Chemistry & Oxidation Numbers","module":7,"desc":"Track electron transfer with oxidation numbers and identify oxidizing and reducing agents in chemical and biochemical reactions.","objectives":["Define oxidation and reduction.","Assign common oxidation numbers.","Identify species oxidized and reduced.","Identify oxidizing and reducing agents.","Connect redox with cellular metabolism."],"facts":[["Oxidation","Loss of electrons or increase in oxidation number."],["Reduction","Gain of electrons or decrease in oxidation number."],["Oxidizing agent","Species that oxidizes another and is itself reduced."],["Reducing agent","Species that reduces another and is itself oxidized."],["Oxidation number","Bookkeeping value for electron ownership."],["Redox reaction","Coupled oxidation and reduction process."],["NAD⁺/NADH","Biological oxidized/reduced electron-carrier pair."]],"sections":[{"label":"OIL RIG","title":"Oxidation is loss; reduction is gain","paragraphs":["Electrons are conserved in redox chemistry. If one species loses electrons, another must gain them.","Oxidation and reduction therefore always occur together.","OIL RIG is a useful memory aid: Oxidation Is Loss, Reduction Is Gain."]},{"label":"OXIDATION NUMBERS","title":"Track redox when electrons are not written explicitly","paragraphs":["Elements in their standard elemental form have oxidation number 0. Monatomic ions have oxidation numbers equal to their charge.","Oxygen is usually −2 and hydrogen usually +1 in common compounds, with important exceptions.","An increase in oxidation number signals oxidation; a decrease signals reduction."]},{"label":"AGENTS & BIOCHEMISTRY","title":"The oxidizing agent gets reduced","paragraphs":["An oxidizing agent accepts electrons and is reduced. A reducing agent donates electrons and is oxidized.","In metabolism, NAD⁺ accepts electrons and becomes NADH, so NAD⁺ acts as an oxidizing agent in that step.","NADH later donates electrons to the respiratory chain and is oxidized back to NAD⁺."]}],"clinical":["Cellular respiration","Nutrients are progressively oxidized while carriers such as NAD⁺ are reduced.","Redox transfer stores energy in electron carriers for later ATP production."],"traps":["The oxidizing agent is reduced.","The reducing agent is oxidized.","Oxidation does not require direct reaction with O₂."],"summary":["Oxidation loses electrons.","Reduction gains electrons.","Oxidation number rises during oxidation.","Oxidizing agents are reduced.","Reducing agents are oxidized.","NAD⁺/NADH is a redox pair."],"practice":[["If Fe²⁺ becomes Fe³⁺, oxidation or reduction?","Oxidation.",["Oxidation number rises from +2 to +3; one electron is lost."]],["If Cl₂ becomes 2Cl⁻, oxidation or reduction?","Reduction.",["Chlorine gains electrons."]],["What happens to the oxidizing agent?","It is reduced.",["It accepts electrons."]]],"quiz":[{"id":"red1","type":"mcq","q":"Fe²⁺ → Fe³⁺ is which process?","choices":["Reduction","Oxidation","Neutralization","Precipitation"],"answer":1,"explanation":"The oxidation number increases and an electron is lost."},{"id":"red2","type":"mcq","q":"An oxidizing agent does what?","choices":["Donates electrons and is oxidized","Accepts electrons and is reduced","Changes pH only","Never changes itself"],"answer":1,"explanation":"The oxidizing agent causes oxidation by accepting electrons."},{"id":"red3","type":"mcq","q":"NAD⁺ becomes NADH during a metabolic step. NAD⁺ has been:","choices":["Oxidized","Reduced","Hydrolyzed","Precipitated"],"answer":1,"explanation":"NAD⁺ accepts reducing equivalents and becomes reduced."}],"tags":["Theory","Practice","Quiz"]},{"id":"electrochemistry","title":"Electrochemistry & Biological Electrical Gradients","module":7,"desc":"Connect spontaneous redox reactions with electron flow, galvanic cells, electrodes, cell potentials and the broader idea of electrochemical gradients.","objectives":["Define galvanic and electrolytic cells.","Identify anode and cathode processes.","Relate electron flow to redox.","Interpret positive cell potential conceptually.","Connect chemical and electrical potential in biology."],"facts":[["Galvanic cell","Electrochemical cell using a spontaneous redox reaction to produce electrical work."],["Electrolytic cell","Cell using external electrical energy to drive a nonspontaneous reaction."],["Anode","Electrode where oxidation occurs."],["Cathode","Electrode where reduction occurs."],["Cell potential","Voltage associated with an electrochemical cell."],["Salt bridge","Ionic connection maintaining charge balance between half-cells."],["Electrochemical gradient","Combined chemical-concentration and electrical potential difference."]],"sections":[{"label":"ELECTRODES","title":"Anode oxidizes; cathode reduces","paragraphs":["Redox reactions can be separated into half-reactions at two electrodes.","Oxidation always occurs at the anode and reduction always occurs at the cathode. A common mnemonic is An Ox, Red Cat.","In a galvanic cell, electrons flow through the external circuit from anode to cathode."]},{"label":"CELL POTENTIAL","title":"Spontaneous redox can perform electrical work","paragraphs":["A positive standard cell potential corresponds to a thermodynamically favorable galvanic reaction under standard-state assumptions.","Voltage reflects a difference in electron chemical potential between the half-reactions.","Changing concentrations can alter actual cell potential, which is the basis of the Nernst relationship."]},{"label":"BIOLOGICAL GRADIENTS","title":"Cells store energy in ion gradients","paragraphs":["Biological membranes separate ions and charges, creating electrochemical gradients.","The sodium and potassium gradients across cell membranes contain stored free energy that drives electrical signaling and transport.","Although membrane potentials are not simple metal-electrode batteries, the same general principle applies: chemical and electrical differences can perform work."]}],"clinical":["Membrane potential","Cells maintain unequal ion concentrations across membranes.","Electrochemical gradients drive ion movement and are essential for nerve and muscle excitability."],"traps":["Oxidation is always at the anode.","Reduction is always at the cathode.","Electrode sign can differ between galvanic and electrolytic cells, so memorize process rather than sign alone."],"summary":["Anode = oxidation.","Cathode = reduction.","Electrons flow anode→cathode in a galvanic circuit.","Positive galvanic cell potential indicates favorable redox under stated conditions.","Ion gradients store free energy."],"practice":[["Where does oxidation occur?","Anode.",["An Ox."]],["Where does reduction occur?","Cathode.",["Red Cat."]],["In a galvanic external circuit, electrons move from where to where?","Anode to cathode.",["Electrons are released at oxidation and consumed at reduction."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"nuclear-chemistry","title":"Nuclear Chemistry, Radioactivity & Half-Life","module":7,"desc":"Distinguish nuclear from chemical reactions and learn alpha, beta and gamma radiation, radioactive half-life and medical applications.","objectives":["Compare chemical and nuclear reactions.","Identify alpha, beta and gamma radiation.","Explain radioactive decay.","Calculate remaining amount after half-lives.","Describe medical uses and safety concepts."],"facts":[["Radioactivity","Spontaneous nuclear emission from unstable nuclei."],["Alpha particle","Helium nucleus, 2 protons + 2 neutrons."],["Beta particle","High-speed electron or positron emitted in nuclear decay."],["Gamma radiation","High-energy electromagnetic radiation from a nucleus."],["Half-life","Time required for half of a radioactive population to decay."],["Radioisotope","Radioactive isotope."],["Ionizing radiation","Radiation energetic enough to ionize matter."],["Tracer","Detectable isotope used to follow a process."]],"sections":[{"label":"NUCLEAR CHANGE","title":"Nuclear reactions alter the nucleus","paragraphs":["Chemical reactions rearrange electrons and bonds; nuclear reactions change nuclear composition or energy.","Because elemental identity is determined by proton number, certain nuclear reactions can transform one element into another.","Nuclear energy scales are much larger than ordinary bond-energy scales."]},{"label":"RADIATION TYPES","title":"Different emissions penetrate differently","paragraphs":["Alpha particles are massive and highly ionizing but penetrate poorly externally. Beta particles are lighter and penetrate farther.","Gamma rays are high-energy photons with no mass or charge and can penetrate deeply.","Radiation risk depends on type, energy, dose, exposure route and tissue sensitivity."],"table":[["Type","Charge","Relative penetration"],["Alpha","+2","Low"],["Beta","−1 or +1","Moderate"],["Gamma","0","High"]]},{"label":"HALF-LIFE","title":"Exponential decay","paragraphs":["After one half-life, one-half remains; after two, one-quarter; after three, one-eighth.","The fraction remaining after n half-lives is (1/2)ⁿ.","Half-life is characteristic of the isotope and is not normally changed by ordinary temperature or pressure."],"example":["80 mg of a radioisotope remains initially. How much after 3 half-lives?",["80→40→20→10 mg."],"10 mg."]}],"clinical":["Medical tracers","Radioisotopes can be attached to molecules that localize in particular tissues.","Detected emissions can reveal physiological distribution or organ function."],"traps":["Half-life does not mean everything disappears after two half-lives.","Alpha radiation can be especially hazardous if taken internally.","Gamma is electromagnetic radiation, not a massive particle."],"summary":["Chemical reactions change electrons; nuclear reactions change nuclei.","Alpha is a helium nucleus.","Beta emits electron/positron.","Gamma is high-energy EM radiation.","Half-life produces exponential decay."],"practice":[["100 mg remains initially. How much after 2 half-lives?","25 mg.",["100→50→25."]],["Which radiation is most penetrating among alpha, beta, gamma?","Gamma.",["Gamma photons penetrate more deeply."]],["What fraction remains after 4 half-lives?","1/16.",["(1/2)^4."]]],"quiz":[{"id":"nuc1","type":"numeric","q":"A sample starts at 160 mg. How many mg remain after 3 half-lives?","answer":20,"tolerance":0.1,"unit":"mg","explanation":"160→80→40→20."},{"id":"nuc2","type":"numeric","q":"What percent remains after 2 half-lives?","answer":25,"tolerance":0.1,"unit":"%","explanation":"(1/2)^2=1/4=25%."},{"id":"nuc3","type":"mcq","q":"Which type of radiation is high-energy electromagnetic radiation?","choices":["Alpha","Beta","Gamma","Neutron number"],"answer":2,"explanation":"Gamma rays are photons."}],"tags":["Theory","Practice","Quiz"]},{"id":"organic-hydrocarbons","title":"Organic Chemistry: Carbon Skeletons, Hydrocarbons & Isomers","module":8,"desc":"Learn carbon's bonding versatility, hydrocarbon families, saturation, aromatic structures and structural/stereochemical isomerism.","objectives":["Explain carbon tetravalence.","Distinguish alkanes, alkenes and alkynes.","Recognize aromatic rings.","Define structural isomers.","Explain why three-dimensional isomers can behave differently biologically."],"facts":[["Organic compound","Carbon-based compound typically containing C-H frameworks."],["Hydrocarbon","Compound containing only carbon and hydrogen."],["Alkane","Hydrocarbon with only C–C single bonds."],["Alkene","Hydrocarbon with at least one C=C."],["Alkyne","Hydrocarbon with at least one C≡C."],["Aromatic compound","Compound containing a stabilized conjugated ring system such as benzene."],["Isomer","Same molecular formula, different arrangement."],["Structural isomer","Different atom connectivity."],["Stereoisomer","Same connectivity, different spatial arrangement."],["Saturated","No C=C or C≡C in the carbon skeleton."]],"sections":[{"label":"CARBON FRAMEWORKS","title":"Four bonds create immense diversity","paragraphs":["Carbon has four valence electrons and commonly forms four covalent bonds.","Carbon atoms bond to one another in chains, branches and rings and can form single, double and triple bonds.","This versatility makes carbon the framework of carbohydrates, lipids, proteins, nucleic acids and most medications."]},{"label":"HYDROCARBON FAMILIES","title":"Saturation changes bonding and geometry","paragraphs":["Alkanes contain only single C–C bonds and are saturated. Alkenes contain at least one C=C, while alkynes contain a C≡C.","Double bonds restrict free rotation and create different geometrical possibilities.","Hydrocarbon regions are nonpolar and interact poorly with water."]},{"label":"ISOMERS","title":"Same formula can mean different chemistry","paragraphs":["Structural isomers have the same molecular formula but different connectivity.","Stereoisomers share connectivity but differ in three-dimensional arrangement.","Biological receptors are three-dimensional, so stereoisomers can have very different pharmacological actions."]}],"clinical":["Drug stereochemistry","Two stereoisomers may fit a receptor differently.","Same molecular formula does not guarantee the same biological effect."],"traps":["Organic does not mean natural or safe.","Alkenes and alkynes are unsaturated.","Isomers share formulas but can have different properties."],"summary":["Carbon commonly forms four bonds.","Alkanes are saturated.","Alkenes have C=C.","Alkynes have C≡C.","Aromatic systems have stabilized rings.","Isomerism changes structure and function."],"practice":[["Which family contains a C=C bond?","Alkene.",["Alkenes have at least one double bond."]],["Are alkanes saturated?","Yes.",["They contain only C–C single bonds."]],["Can stereoisomers have different drug effects?","Yes.",["Receptors distinguish three-dimensional shape."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"functional-groups","title":"Organic Functional Groups & Health-Science Nomenclature","module":8,"desc":"Recognize hydroxyl, carbonyl, carboxyl, amino, phosphate, sulfhydryl, ester and amide groups and predict their effects on polarity and reactivity.","objectives":["Identify major functional groups.","Distinguish aldehydes and ketones.","Explain carboxylic-acid and amine acid-base behavior.","Recognize esters and amides.","Relate functional groups to polarity and solubility."],"facts":[["Hydroxyl","–OH group."],["Carbonyl","C=O group."],["Aldehyde","Terminal carbonyl-containing compound."],["Ketone","Internal carbonyl-containing compound."],["Carboxyl","–COOH group."],["Amino","Nitrogen-containing basic group such as –NH₂."],["Phosphate","P-O functional group often carrying negative charge."],["Sulfhydryl","–SH group."],["Ester","Carbonyl bonded to an –O– linking another carbon group."],["Amide","Carbonyl bonded to nitrogen."]],"sections":[{"label":"POLAR GROUPS","title":"Small structural changes alter molecular behavior","paragraphs":["Hydroxyl groups increase polarity and can participate in hydrogen bonding.","Carboxyl groups can donate protons; amino groups can accept protons. Therefore, many biomolecules carry charge depending on pH.","Phosphate groups are strongly polar and often negatively charged in physiological conditions."]},{"label":"CARBONYL FAMILIES","title":"Aldehydes, ketones, acids, esters and amides","paragraphs":["Aldehydes and ketones both contain carbonyl groups but differ in carbonyl position and attached groups.","Carboxylic acids contain a carbonyl and hydroxyl on the same carbon. Esters replace the acidic hydroxyl with an –O–carbon group.","Amides contain a carbonyl attached to nitrogen; peptide bonds are amide linkages."]},{"label":"BIOLOGICAL REACTIVITY","title":"Functional groups control interactions","paragraphs":["Hydrocarbon portions increase hydrophobic character, whereas ionic and strongly polar functional groups increase water compatibility.","Enzymes often recognize particular functional groups and catalyze their modification.","Drug metabolism frequently adds or exposes polar groups, making compounds easier to distribute in water and eliminate."]}],"clinical":["Amino acids","Every standard amino acid contains an amino group and carboxyl group.","These groups give amino acids acid-base behavior and enable peptide-bond formation."],"traps":["Carbonyl and carboxyl are different.","An –OH group does not automatically make a molecule a base.","Peptide bonds are amide linkages."],"summary":["Hydroxyl increases polarity.","Carboxyl can donate H⁺.","Amino can accept H⁺.","Phosphate is highly polar.","Esters occur in many lipids.","Amides include peptide bonds."],"practice":[["Which group is –COOH?","Carboxyl.",["It contains carbonyl plus hydroxyl."]],["Which functional group defines peptide bonds?","Amide.",["Peptide bonds are amide linkages."]],["Which group is –SH?","Sulfhydryl.",["Sulfur-hydrogen group."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"organic-reactions","title":"Organic Reactions: Condensation, Hydrolysis, Oxidation & Reduction","module":8,"desc":"Understand common reaction patterns used to build, break and modify biological organic molecules.","objectives":["Explain condensation reactions.","Explain hydrolysis.","Recognize organic oxidation and reduction.","Relate ester and amide formation to condensation.","Connect organic reaction patterns to metabolism and digestion."],"facts":[["Condensation reaction","Reaction joining molecules while eliminating a small molecule such as water."],["Hydrolysis","Bond cleavage involving water."],["Esterification","Formation of an ester, commonly from an alcohol and carboxylic acid."],["Amide formation","Formation of a carbonyl-nitrogen linkage."],["Organic oxidation","Increase in bonding to electronegative atoms or decrease in C-H bonding."],["Organic reduction","Decrease in oxidation state, often increased C-H bonding."]],"sections":[{"label":"BUILDING MOLECULES","title":"Condensation links smaller units","paragraphs":["Condensation-type reactions can join monomers while releasing water or another small molecule.","Ester bonds in triglycerides and amide peptide bonds in proteins can be understood through this general pattern.","Cells use enzymes and energy coupling to make these synthetic reactions proceed efficiently."]},{"label":"BREAKING MOLECULES","title":"Hydrolysis uses water to cleave bonds","paragraphs":["Digestive enzymes hydrolyze glycosidic, peptide and ester bonds.","A water molecule contributes components to the products as the covalent linkage is broken.","Hydrolysis is therefore conceptually opposite to many condensation reactions."]},{"label":"OXIDATION-REDUCTION","title":"Carbon oxidation powers metabolism","paragraphs":["Organic oxidation often increases C-O bonding or decreases C-H bonding.","During fuel metabolism, carbon atoms are progressively oxidized while electron carriers are reduced.","Complete oxidation of many nutrient carbons ultimately yields CO₂."]}],"clinical":["Digestion","Digestive enzymes hydrolyze dietary macromolecules into smaller absorbable units.","Hydrolysis chemistry underlies digestion of proteins, carbohydrates and triglycerides."],"traps":["Hydrolysis uses water; condensation commonly eliminates water.","Oxidation does not require direct addition of O₂.","Ester bonds and amide bonds are chemically different."],"summary":["Condensation builds larger molecules.","Hydrolysis breaks covalent linkages using water.","Esterification forms ester bonds.","Peptide bonds are amides.","Organic oxidation is central to metabolism."],"practice":[["What reaction type breaks a peptide bond during digestion?","Hydrolysis.",["Water participates in bond cleavage."]],["What reaction class commonly builds polymers from monomers?","Condensation.",["Small molecules can be eliminated as covalent bonds form."]],["Does organic oxidation always require molecular oxygen as a direct reactant?","No.",["Electron carriers can mediate oxidation."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"carbohydrates","title":"Carbohydrate Chemistry","module":9,"desc":"Study monosaccharides, disaccharides, polysaccharides, glycosidic bonds and the structural chemistry of glucose, glycogen, starch and cellulose.","objectives":["Classify carbohydrates by size.","Recognize glucose, fructose and galactose.","Explain glycosidic bond formation and hydrolysis.","Compare glycogen, starch and cellulose.","Connect carbohydrate structure with digestion and metabolism."],"facts":[["Monosaccharide","Single sugar unit."],["Glucose","Six-carbon aldose central to metabolism."],["Fructose","Six-carbon ketose."],["Disaccharide","Two monosaccharides joined by a glycosidic bond."],["Sucrose","Glucose + fructose."],["Lactose","Glucose + galactose."],["Polysaccharide","Polymer of many monosaccharides."],["Glycogen","Highly branched animal glucose-storage polymer."],["Starch","Plant glucose-storage polymer."],["Cellulose","Plant structural glucose polymer humans cannot enzymatically digest."],["Glycosidic bond","Covalent linkage joining sugars."]],"sections":[{"label":"MONOSACCHARIDES","title":"Simple sugars are chemical building blocks","paragraphs":["Monosaccharides contain multiple hydroxyl groups and a carbonyl-derived structure.","Glucose is a major metabolic fuel. Fructose and galactose are other important dietary monosaccharides.","In water, many sugars spend most of their time in cyclic ring forms."]},{"label":"DISACCHARIDES","title":"Glycosidic bonds join sugars","paragraphs":["Sucrose contains glucose and fructose; lactose contains glucose and galactose.","Digestive enzymes hydrolyze glycosidic bonds before monosaccharides are absorbed.","Enzyme specificity matters because different glycosidic linkages require different enzymes."]},{"label":"POLYSACCHARIDES","title":"Same monomer, different architecture","paragraphs":["Glycogen is highly branched and stores glucose in animals. Liver glycogen can support blood glucose, while muscle glycogen primarily fuels muscle.","Starch stores glucose in plants and is digestible by humans.","Cellulose uses a different glycosidic linkage that human digestive enzymes cannot hydrolyze efficiently, so it functions as dietary fiber."],"table":[["Polymer","Role"],["Glycogen","Animal glucose storage"],["Starch","Plant glucose storage"],["Cellulose","Plant structural fiber"]]}],"clinical":["Lactose intolerance","Low intestinal lactase leaves lactose incompletely digested.","Unabsorbed lactose retains water osmotically and can be fermented by intestinal bacteria."],"traps":["Humans digest starch but not cellulose efficiently.","Lactose and sucrose contain different sugar pairs.","Glycogen is more highly branched than most starch structures."],"summary":["Glucose is a monosaccharide.","Sucrose = glucose+fructose.","Lactose = glucose+galactose.","Glycogen stores glucose in animals.","Cellulose is dietary fiber for humans."],"practice":[["What monosaccharides make sucrose?","Glucose and fructose.",["Sucrose is a disaccharide."]],["Which animal polysaccharide stores glucose?","Glycogen.",["Stored mainly in liver and skeletal muscle."]],["Why is cellulose not digested well by humans?","Humans lack enzymes for its glycosidic linkage.",["Structure determines digestibility."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"lipids","title":"Lipid Chemistry, Fatty Acids & Membranes","module":9,"desc":"Learn fatty acids, triglycerides, saturation, phospholipids, cholesterol, lipoprotein concepts and membrane self-assembly.","objectives":["Describe fatty-acid structure.","Distinguish saturated and unsaturated fatty acids.","Explain triglyceride formation and storage.","Explain phospholipid amphipathic behavior.","Describe cholesterol's structural and biosynthetic roles."],"facts":[["Fatty acid","Hydrocarbon chain with terminal carboxyl group."],["Saturated fatty acid","Contains no C=C bonds."],["Unsaturated fatty acid","Contains one or more C=C bonds."],["Triglyceride","Glycerol esterified to three fatty acids."],["Phospholipid","Amphipathic lipid with polar head and nonpolar tails."],["Amphipathic","Containing hydrophilic and hydrophobic regions."],["Cholesterol","Steroid lipid important in membranes and hormone synthesis."],["Lipid bilayer","Double layer of phospholipids forming membrane structure."],["Micelle","Aggregate with hydrophobic interior and polar exterior."]],"sections":[{"label":"FATTY ACIDS","title":"Hydrocarbon chains store chemical energy","paragraphs":["Fatty acids contain long nonpolar hydrocarbon chains plus a carboxyl group.","Saturated fatty acids lack C=C bonds; unsaturated fatty acids contain one or more.","Cis double bonds introduce bends that reduce tight packing and often increase fluidity."]},{"label":"TRIGLYCERIDES","title":"Efficient long-term energy storage","paragraphs":["Triglycerides form when glycerol is esterified to three fatty acids.","They are highly hydrophobic and stored with little associated water, making them energy dense.","During fasting, lipases hydrolyze triglycerides to release fatty acids and glycerol."]},{"label":"PHOSPHOLIPIDS & CHOLESTEROL","title":"Amphipathic molecules self-assemble into membranes","paragraphs":["Phospholipids have hydrophilic heads and hydrophobic tails. In water they spontaneously form bilayers that shield tails from the aqueous environment.","Cholesterol inserts between phospholipids and modulates membrane fluidity and permeability.","Cholesterol is also a precursor for steroid hormones, bile acids and vitamin D-related compounds."]}],"clinical":["Cell membranes","The lipid bilayer creates a hydrophobic barrier.","Charged ions require channels or transporters to cross efficiently, enabling cells to maintain ion gradients."],"traps":["Unsaturated does not mean hydrogen-free.","Phospholipids are amphipathic, not purely hydrophobic.","Cholesterol is biologically essential even though abnormal lipoprotein patterns can contribute to disease."],"summary":["Saturated fatty acids have no C=C.","Cis unsaturation introduces bends.","Triglycerides store energy.","Phospholipids form bilayers.","Cholesterol modifies membranes and is a biosynthetic precursor."],"practice":[["Which lipid is the main structural basis of cell membranes?","Phospholipids.",["Their amphipathic structure forms bilayers."]],["What bond type links fatty acids to glycerol in triglycerides?","Ester bonds.",["Triglycerides contain three ester linkages."]],["Which tends to pack less tightly: cis unsaturated or saturated fatty acids?","Cis unsaturated.",["Double-bond bends disrupt packing."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"proteins-enzymes","title":"Amino Acids, Proteins & Enzymes","module":9,"desc":"Understand amino-acid acid-base chemistry, peptide bonds, four levels of protein structure, denaturation and enzyme catalysis.","objectives":["Describe the common amino-acid backbone.","Explain peptide-bond formation.","Distinguish four levels of protein structure.","Explain denaturation.","Explain enzyme specificity, saturation and inhibition conceptually."],"facts":[["Amino acid","Molecule with amino group, carboxyl group and variable side chain."],["R group","Variable amino-acid side chain."],["Zwitterion","Species bearing both positive and negative charges."],["Peptide bond","Amide linkage joining amino acids."],["Primary structure","Amino-acid sequence."],["Secondary structure","Local helices and sheets stabilized largely by backbone H bonds."],["Tertiary structure","Overall 3D fold of one polypeptide."],["Quaternary structure","Arrangement of multiple polypeptide subunits."],["Denaturation","Disruption of normal higher-order protein structure."],["Enzyme","Biological catalyst."],["Active site","Region where substrate binds and chemistry occurs."]],"sections":[{"label":"AMINO ACIDS","title":"Side chains create chemical diversity","paragraphs":["Standard amino acids share an alpha carbon bonded to an amino group, carboxyl group, hydrogen and variable R group.","At physiological pH, amino and carboxyl groups are usually ionized, so amino acids often exist as zwitterions.","R groups determine whether side chains are nonpolar, polar, acidic, basic or capable of special covalent chemistry."]},{"label":"PROTEIN STRUCTURE","title":"Sequence determines folding and function","paragraphs":["Primary structure is the amino-acid sequence joined by peptide bonds. Secondary structures include alpha helices and beta sheets.","Tertiary structure arises from side-chain interactions including hydrophobic effects, ionic interactions, hydrogen bonds and disulfide bonds.","Proteins with multiple chains also have quaternary structure. Function depends strongly on correct three-dimensional folding."]},{"label":"ENZYME CATALYSIS","title":"Active sites lower activation barriers","paragraphs":["Enzymes bind substrates selectively and stabilize transition states, lowering activation energy.","As substrate concentration increases, enzyme rate can approach a maximum when active sites become saturated.","Inhibitors can reduce enzyme activity through several mechanisms. Temperature and pH also alter enzyme structure and catalytic rate."]}],"clinical":["Fever and proteins","Excessive heat can disrupt weak interactions that stabilize proteins.","Severe denaturation can impair enzyme activity and cell function."],"traps":["Denaturation usually does not mean peptide bonds were all hydrolyzed.","Enzymes affect rate, not equilibrium constant.","Primary structure is sequence, not three-dimensional shape."],"summary":["Amino acids have amino and carboxyl groups.","R groups determine side-chain properties.","Peptide bonds are amides.","Primary=sequence.","Secondary=local folds.","Tertiary=3D fold.","Enzymes lower activation energy."],"practice":[["Which structure level is amino-acid sequence?","Primary.",["Peptide-bond sequence defines primary structure."]],["What bond joins amino acids?","Peptide bond.",["It is an amide linkage."]],["Do enzymes change equilibrium constants?","No.",["They change the rate of reaching equilibrium."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]},{"id":"nucleic-acids-atp","title":"DNA, RNA, Nucleotides & ATP","module":9,"desc":"Learn nucleotide structure, DNA and RNA differences, complementary base pairing, phosphodiester bonds and ATP as a cellular energy-transfer molecule.","objectives":["Describe nucleotide components.","Compare DNA and RNA.","Explain phosphodiester backbones.","Apply complementary base pairing.","Explain ATP hydrolysis and phosphorylation."],"facts":[["Nucleotide","Nitrogenous base + pentose sugar + phosphate."],["DNA","Deoxyribonucleic acid, major hereditary information molecule."],["RNA","Ribonucleic acid involved in gene expression and regulation."],["Phosphodiester bond","Covalent linkage joining nucleotides in a strand."],["Purine","Two-ring base: adenine or guanine."],["Pyrimidine","One-ring base: cytosine, thymine or uracil."],["Complementary base pairing","Specific H-bond pairing of compatible bases."],["ATP","Adenosine triphosphate, central cellular energy-transfer nucleotide."],["ADP","Adenosine diphosphate."],["Phosphorylation","Addition or transfer of a phosphate group."]],"sections":[{"label":"NUCLEOTIDES","title":"Three-part monomers","paragraphs":["A nucleotide contains a nitrogenous base, five-carbon sugar and one or more phosphate groups.","DNA uses deoxyribose; RNA uses ribose. Phosphodiester bonds link nucleotides into a sugar-phosphate backbone.","The sequence of nitrogenous bases stores or conveys biological information."]},{"label":"DNA & RNA","title":"Similar chemistry, different roles and structures","paragraphs":["DNA contains adenine, thymine, cytosine and guanine and is usually double stranded.","RNA generally uses uracil in place of thymine and is often single stranded, though it can fold into complex structures.","Complementary hydrogen bonding pairs A with T in DNA, A with U in RNA and G with C."],"table":[["Feature","DNA","RNA"],["Sugar","Deoxyribose","Ribose"],["A partner","Thymine","Uracil"],["Typical form","Double stranded","Often single stranded"]]},{"label":"ATP","title":"A rapidly recycled energy-transfer intermediate","paragraphs":["ATP consists of adenine, ribose and three phosphate groups.","Hydrolysis of ATP to ADP and inorganic phosphate releases free energy that can be coupled to transport, movement and biosynthesis.","ATP is not the body's long-term energy store. Cells continually regenerate it using energy from nutrient oxidation."],"flow":[["Nutrient oxidation","Releases usable free energy"],["ADP + Pi","Phosphorylated to ATP"],["ATP hydrolysis","Transfers free energy"],["Cell work","Transport, contraction, synthesis"]]}],"clinical":["Active transport","The Na⁺/K⁺ ATPase hydrolyzes ATP while moving ions against gradients.","Chemical energy in ATP is converted into electrochemical gradient energy."],"traps":["ATP is a nucleotide, not a protein.","DNA uses thymine; RNA usually uses uracil.","Hydrogen bonds pair bases; phosphodiester bonds form the strand backbone."],"summary":["Nucleotides contain base, sugar and phosphate.","DNA has deoxyribose.","RNA has ribose.","A-T and G-C pair in DNA.","ATP transfers free energy.","Cells constantly regenerate ATP."],"practice":[["What sugar is in DNA?","Deoxyribose.",["RNA contains ribose."]],["What base replaces thymine in RNA?","Uracil.",["RNA uses U."]],["What covalent bond links nucleotides in one strand?","Phosphodiester bond.",["It forms the sugar-phosphate backbone."]]],"quiz":[],"tags":["Theory","Practice","Quiz"]}];

    const dashboardIntro = document.querySelector(".dashboard-intro");
    const progressOverview = document.querySelector(".progress-overview");
    const coursesSection = document.querySelector(".courses-section");
    const weakAreasSection = document.querySelector(".weak-areas-section");
    const footer = document.querySelector("footer");
    const chemistryCard = document.querySelector('.course-card[data-course="chemistry"]');
    const overallProgress = document.getElementById("overall-progress");
    const overallProgressBar = document.getElementById("overall-progress-bar");
    const topicsMastered = document.getElementById("topics-mastered");
    const questionsAnswered = document.getElementById("questions-answered");

    if (!footer || !chemistryCard) return;

    const TOPIC_COUNT = CHEM_TOPICS.length;
    const TOPIC_MAP = {};
    CHEM_TOPICS.forEach((topic, index) => {
        topic.number = index + 1;
        TOPIC_MAP[topic.id] = topic;
    });

    function storageFor(topicId) {
        const base = `nshCHEM_FINAL_${topicId}`;
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
            const parsed = JSON.parse(localStorage.getItem(key) || "[]");
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }

    function saveArray(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function shuffle(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function scrollTopSmooth() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function esc(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
    }

    function createChemistryStyles() {
        if (document.getElementById("chemistry-final-styles")) return;

        const style = document.createElement("style");
        style.id = "chemistry-final-styles";
        style.textContent = `
            .chemistry-course-page .course-page-title {
                background: linear-gradient(135deg, #f0fdf4, #ffffff);
                border-color: #d1fae5;
            }
            .chemistry-course-page .course-page-icon {
                background: linear-gradient(135deg, #dcfce7, #ecfdf5);
            }
            .chem-topic-stat-row {
                display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;
            }
            .chem-topic-stat {
                display:inline-flex; align-items:center; gap:6px;
                padding:6px 10px; border-radius:999px;
                background:#f8fafc; border:1px solid #e5e7eb;
                color:#475467; font-size:11px; font-weight:700;
            }
            .chem-objectives, .chem-formula-box, .chem-worked-example,
            .chem-practice-preview, .chem-course-note {
                margin-top:20px; padding:20px; border-radius:18px;
            }
            .chem-objectives {
                background:linear-gradient(135deg,#f0fdf4,#f8fffb);
                border:1px solid #d1fae5;
            }
            .chem-objectives h3, .chem-formula-box h3,
            .chem-worked-example h3, .chem-practice-preview h3 {
                margin:0 0 12px; font-size:16px;
            }
            .chem-objectives ul { padding-left:20px; }
            .chem-objectives li { margin-bottom:8px; color:#475467; line-height:1.6; font-size:14px; }
            .chem-prose { display:flex; flex-direction:column; gap:15px; }
            .chem-prose p { color:#475467; line-height:1.78; font-size:15px; margin:0; }
            .chem-table-wrap {
                width:100%; overflow-x:auto; margin-top:22px;
                border:1px solid #e5e7eb; border-radius:16px;
            }
            .chem-table { width:100%; border-collapse:collapse; min-width:520px; }
            .chem-table th, .chem-table td {
                padding:13px 15px; border-bottom:1px solid #e5e7eb;
                text-align:left; vertical-align:top; font-size:13px; line-height:1.5;
            }
            .chem-table th { background:#f8fafc; color:#344054; font-weight:800; }
            .chem-table td { color:#667085; }
            .chem-table tr:last-child td { border-bottom:none; }
            .chem-worked-example {
                border:1px solid #bbf7d0; background:linear-gradient(135deg,#f0fdf4,#f7fff9);
            }
            .chem-example-label {
                margin:0 0 7px; font-size:11px; font-weight:900;
                letter-spacing:1.2px; color:#15803d;
            }
            .chem-worked-example ol { padding-left:22px; margin:12px 0; }
            .chem-worked-example li { margin-bottom:8px; line-height:1.55; color:#475467; font-size:14px; }
            .chem-example-answer {
                margin-top:12px; padding:13px 15px; border-radius:12px;
                background:#dcfce7; color:#166534; font-weight:800;
            }
            .chem-practice-preview {
                border:1px solid #c7d2fe; background:#f7f8ff;
            }
            .chem-practice-preview p { color:#475467; line-height:1.65; }
            .chem-exam-traps { display:flex; flex-direction:column; gap:11px; }
            .chem-exam-trap {
                padding:16px 18px; border-radius:14px; background:#fff8ed;
                border:1px solid #fed7aa; color:#9a3412; line-height:1.55; font-size:13px;
            }
            .chem-formula-strip {
                display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
                gap:10px; margin-top:18px;
            }
            .chem-formula-chip {
                padding:13px; border:1px solid #dbeafe; border-radius:14px;
                background:#f8fbff; color:#1e3a5f; font-size:13px; font-weight:700;
            }
            .chem-course-note {
                background:#f8fafc; border:1px solid #e5e7eb; color:#475467; line-height:1.65;
            }
            .chem-modal-problem {
                padding:22px; border:1px solid #e5e7eb; border-radius:18px; background:#fff;
            }
            .chem-problem-number {
                color:#15803d; font-weight:900; font-size:11px; letter-spacing:1.2px; margin-bottom:8px;
            }
            .chem-problem-prompt { font-size:19px; line-height:1.55; color:#172033; margin-bottom:16px; }
            .chem-solution {
                margin-top:18px; padding:18px; border-radius:15px;
                background:#f0fdf4; border:1px solid #bbf7d0;
            }
            .chem-solution ol { padding-left:20px; }
            .chem-solution li { margin-bottom:8px; color:#475467; line-height:1.55; }
            .chem-solution-answer { font-weight:900; color:#166534; margin-top:10px; }
            .chem-numeric-wrap { margin-top:16px; }
            .chem-numeric-input {
                width:100%; padding:14px 15px; border:2px solid #d0d5dd;
                border-radius:12px; font-size:16px; outline:none; background:#fff; color:#172033;
            }
            .chem-numeric-input:focus { border-color:#22c55e; }
            .chem-numeric-unit { margin-top:7px; color:#667085; font-size:12px; }
            .chem-formula-sheet-grid {
                display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
                gap:12px; margin-top:16px;
            }
            .chem-formula-card {
                padding:16px; border-radius:14px; border:1px solid #e5e7eb; background:#f8fafc;
            }
            .chem-formula-card strong { display:block; color:#172033; margin-bottom:6px; }
            .chem-formula-card span { color:#475467; line-height:1.5; font-size:13px; }
            body.dark-mode .chemistry-course-page .course-page-title {
                background:linear-gradient(135deg,#10261c,#111827); border-color:#1f4933;
            }
            body.dark-mode .chemistry-course-page .course-page-icon { background:#123323; }
            body.dark-mode .chem-topic-stat, body.dark-mode .chem-course-note,
            body.dark-mode .chem-formula-card {
                background:#151e2e; border-color:#263043; color:#cbd5e1;
            }
            body.dark-mode .chem-objectives {
                background:#14251c; border-color:#28523b;
            }
            body.dark-mode .chem-objectives li, body.dark-mode .chem-prose p,
            body.dark-mode .chem-worked-example li, body.dark-mode .chem-practice-preview p {
                color:#cbd5e1;
            }
            body.dark-mode .chem-table-wrap, body.dark-mode .chem-table th,
            body.dark-mode .chem-table td, body.dark-mode .chem-modal-problem {
                border-color:#263043;
            }
            body.dark-mode .chem-table th { background:#172033; color:#e2e8f0; }
            body.dark-mode .chem-table td { color:#aab4c5; }
            body.dark-mode .chem-worked-example, body.dark-mode .chem-solution {
                background:#12251a; border-color:#25623e;
            }
            body.dark-mode .chem-example-answer { background:#173b27; color:#bbf7d0; }
            body.dark-mode .chem-practice-preview { background:#161b31; border-color:#333c74; }
            body.dark-mode .chem-exam-trap { background:#352111; border-color:#7c3d12; color:#fed7aa; }
            body.dark-mode .chem-modal-problem { background:#111827; }
            body.dark-mode .chem-problem-prompt, body.dark-mode .chem-formula-card strong { color:#f1f5f9; }
            body.dark-mode .chem-numeric-input {
                background:#111827; border-color:#334155; color:#f1f5f9;
            }
            body.dark-mode .chem-formula-chip { background:#142033; border-color:#294664; color:#bfdbfe; }

            @media (max-width:700px) {
                .chem-formula-sheet-grid { grid-template-columns:1fr; }
                .chem-formula-strip { grid-template-columns:1fr 1fr; }
            }

            @media (max-width:420px) {
                .chem-formula-strip { grid-template-columns:1fr; }
            }
        `;

        document.head.appendChild(style);
    }

    createChemistryStyles();

    const chemistryPage = document.createElement("section");
    chemistryPage.id = "chemistry-page";
    chemistryPage.className = "course-page chemistry-course-page hidden";
    footer.before(chemistryPage);

    const chemistryLessonPage = document.createElement("section");
    chemistryLessonPage.id = "chemistry-final-lesson-page";
    chemistryLessonPage.className = "lesson-page hidden";
    footer.before(chemistryLessonPage);

    function courseTopicHTML(topic) {
        const s = storageFor(topic.id);
        const best = getNumber(s.score);

        return `
            <article class="topic-card chemistry-topic-card" data-chem-topic="${topic.id}">
                <div class="topic-status">${best >= PASS_SCORE ? "✓" : topic.number}</div>

                <div class="topic-information">
                    <h3>${topic.title}</h3>
                    <p>${topic.desc}</p>

                    <div class="topic-tags">
                        ${(topic.tags || []).map(tag => `<span>${tag}</span>`).join("")}
                    </div>

                    <div class="chem-topic-stat-row">
                        <span class="chem-topic-stat">📖 ${topic.sections.length} teaching sections</span>
                        <span class="chem-topic-stat">🧠 ${topic.facts.length} review concepts</span>
                        <span class="chem-topic-stat">✏️ ${topic.practice.length} practice problems</span>
                    </div>
                </div>

                <button class="topic-button">Start →</button>
            </article>
        `;
    }

    function renderCoursePage() {

        const modulesHTML = MODULES.map(module => {

            const moduleTopics = CHEM_TOPICS.filter(
                topic => topic.module === module.number
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

                            <h2>
                                ${module.title}
                            </h2>
                        </div>

                    </div>

                    <div class="topic-list">
                        ${moduleTopics.map(courseTopicHTML).join("")}
                    </div>

                </div>
            `;

        }).join("");

        chemistryPage.innerHTML = `

            <div class="course-page-header">

                <button
                    id="chem-back-dashboard"
                    class="back-button"
                >
                    ← Dashboard
                </button>

                <div class="course-page-title">

                    <div class="course-page-icon">
                        🧪
                    </div>

                    <div>

                        <p class="section-label">
                            FINAL FULL COURSE
                        </p>

                        <h1>
                            Chemistry for Health Sciences
                        </h1>

                        <p>
                            ${TOPIC_COUNT} complete topics covering measurement, atomic structure, bonding,
                            calculations, reactions, gases, solutions, equilibrium, acid-base chemistry,
                            redox, nuclear chemistry, organic chemistry and biochemistry.
                        </p>

                    </div>

                </div>

            </div>

            <div class="course-main-progress">

                <div>
                    <p>
                        Course Mastery
                    </p>

                    <h2>
                        <span id="chem-course-progress">0</span>%
                    </h2>
                </div>

                <div class="course-progress-large">
                    <div
                        id="chem-course-progress-bar"
                        class="course-progress-large-fill"
                    >
                    </div>
                </div>

            </div>

            <div class="chem-course-note">

                <strong>
                    How Chemistry mastery works:
                </strong>

                each topic gives 20% for reaching the lesson summary, 20% for Quick Review,
                20% for completing the Practice Lab and 40% for passing the randomized mastery quiz.
                A quiz score of ${PASS_SCORE}% or higher marks the topic mastered.

            </div>

            ${modulesHTML}

            <div class="final-practice-card">

                <div>

                    <p class="section-label">
                        COMPREHENSIVE REVIEW
                    </p>

                    <h2>
                        Chemistry Mastery Center
                    </h2>

                    <p>
                        Use the formula sheet, revisit missed questions, practice across all modules
                        or take a ${FINAL_EXAM_LENGTH}-question comprehensive exam.
                    </p>

                </div>

                <div class="final-practice-actions">

                    <button id="chem-formula-button">
                        📐 Formula Sheet
                    </button>

                    <button id="chem-weak-button">
                        🎯 Weak Areas
                    </button>

                    <button id="chem-practice-button">
                        🧪 Mixed Practice
                    </button>

                    <button id="chem-exam-button">
                        🏆 Final Mastery Exam
                    </button>

                </div>

            </div>
        `;

        document
            .getElementById("chem-back-dashboard")
            .addEventListener(
                "click",
                showDashboard
            );

        document
            .querySelectorAll(".chemistry-topic-card")
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => showTopic(
                        card.dataset.chemTopic
                    )
                );

                const button =
                    card.querySelector(".topic-button");

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        showTopic(
                            card.dataset.chemTopic
                        );

                    }
                );

            });

        document
            .getElementById("chem-formula-button")
            .addEventListener(
                "click",
                showFormulaSheet
            );

        document
            .getElementById("chem-weak-button")
            .addEventListener(
                "click",
                startWeakPractice
            );

        document
            .getElementById("chem-practice-button")
            .addEventListener(
                "click",
                startMixedPractice
            );

        document
            .getElementById("chem-exam-button")
            .addEventListener(
                "click",
                startFinalExam
            );
    }

    renderCoursePage();

    function hideMainViews() {

        [
            dashboardIntro,
            progressOverview,
            coursesSection,
            weakAreasSection,
            footer
        ].forEach(el => {

            if (el) {
                el.classList.add("hidden");
            }

        });

        document
            .querySelectorAll(
                ".course-page,.lesson-page"
            )
            .forEach(page =>
                page.classList.add("hidden")
            );

        closeModal();
    }

    function showChemistryCourse() {

        hideMainViews();

        chemistryPage
            .classList
            .remove("hidden");

        updateProgress();

        scrollTopSmooth();
    }

    function showDashboard() {

        document
            .querySelectorAll(
                ".course-page,.lesson-page"
            )
            .forEach(page =>
                page.classList.add("hidden")
            );

        [
            dashboardIntro,
            progressOverview,
            coursesSection,
            weakAreasSection,
            footer
        ].forEach(el => {

            if (el) {
                el.classList.remove("hidden");
            }

        });

        closeModal();

        updateProgress();

        updateSharedDashboard();

        scrollTopSmooth();
    }

    document.addEventListener(
        "click",
        event => {

            const card =
                event.target.closest(
                    '.course-card[data-course="chemistry"]'
                );

            if (!card) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            showChemistryCourse();

        },
        true
    );

    function renderParagraphs(paragraphs) {

        return `
            <div class="chem-prose">
                ${
                    paragraphs
                        .map(
                            p => `<p>${p}</p>`
                        )
                        .join("")
                }
            </div>
        `;
    }

    function renderFacts(facts) {

        return `
            <div class="definition-grid">

                ${
                    facts.map(
                        fact => `
                            <div class="definition-card">

                                <h3>
                                    ${fact[0]}
                                </h3>

                                <p>
                                    ${fact[1]}
                                </p>

                            </div>
                        `
                    ).join("")
                }

            </div>
        `;
    }

    function renderChecklist(items) {

        return `
            <div class="summary-checklist">

                ${
                    items.map(
                        item => `<div>✓ ${item}</div>`
                    ).join("")
                }

            </div>
        `;
    }

    function renderTable(table) {

        if (
            !table ||
            !table.length
        ) {
            return "";
        }

        const [
            headers,
            ...rows
        ] = table;

        return `
            <div class="chem-table-wrap">

                <table class="chem-table">

                    <thead>
                        <tr>
                            ${
                                headers.map(
                                    header =>
                                        `<th>${header}</th>`
                                ).join("")
                            }
                        </tr>
                    </thead>

                    <tbody>

                        ${
                            rows.map(
                                row => `
                                    <tr>
                                        ${
                                            row.map(
                                                cell =>
                                                    `<td>${cell}</td>`
                                            ).join("")
                                        }
                                    </tr>
                                `
                            ).join("")
                        }

                    </tbody>

                </table>

            </div>
        `;
    }

    function renderFlow(flow) {

        if (
            !flow ||
            !flow.length
        ) {
            return "";
        }

        return `
            <div class="organization-flow">

                ${
                    flow.map(
                        (item, index) => `
                            <div class="organization-item">

                                <span class="organization-number">
                                    ${index + 1}
                                </span>

                                <div>
                                    <h3>${item[0]}</h3>
                                    <p>${item[1]}</p>
                                </div>

                            </div>

                            ${
                                index < flow.length - 1
                                    ? `<div class="organization-arrow">↓</div>`
                                    : ""
                            }
                        `
                    ).join("")
                }

            </div>
        `;
    }

    function renderExample(example) {

        if (!example) {
            return "";
        }

        const [
            prompt,
            steps,
            answer
        ] = example;

        return `
            <div class="chem-worked-example">

                <p class="chem-example-label">
                    WORKED EXAMPLE
                </p>

                <h3>
                    ${prompt}
                </h3>

                <ol>
                    ${
                        steps.map(
                            step =>
                                `<li>${step}</li>`
                        ).join("")
                    }
                </ol>

                <div class="chem-example-answer">
                    ${answer}
                </div>

            </div>
        `;
    }

    function renderClinical(clinical) {

        const [
            title,
            scenario,
            connection
        ] = clinical;

        return `
            <div class="clinical-case">

                <div class="clinical-case-header">

                    <span>
                        🩺
                    </span>

                    <div>
                        <p>
                            HEALTH-SCIENCE CONNECTION
                        </p>

                        <h3>
                            ${title}
                        </h3>
                    </div>

                </div>

                <p>
                    ${scenario}
                </p>

                <div class="clinical-question">

                    <strong>
                        Chemistry Connection
                    </strong>

                    <p class="clinical-answer">
                        ${connection}
                    </p>

                </div>

            </div>
        `;
    }

    function sectionHTML(
        topic,
        section,
        index
    ) {

        return `
            <section
                id="chem-detail-${topic.id}-${index}"
                class="lesson-section"
            >

                <div class="lesson-section-number">
                    ${String(index + 3).padStart(2, "0")}
                </div>

                <div class="lesson-section-content">

                    <p class="lesson-small-label">
                        ${section.label}
                    </p>

                    <h2>
                        ${section.title}
                    </h2>

                    ${
                        renderParagraphs(
                            section.paragraphs || []
                        )
                    }

                    ${
                        renderFlow(
                            section.flow
                        )
                    }

                    ${
                        renderTable(
                            section.table
                        )
                    }

                    ${
                        renderExample(
                            section.example
                        )
                    }

                </div>

            </section>
        `;
    }

    let currentTopic = null;
    let lessonObserver = null;

    function showTopic(topicId) {

        const topic =
            TOPIC_MAP[topicId];

        if (!topic) {
            return;
        }

        currentTopic =
            topic;

        hideMainViews();

        renderLesson(topic);

        chemistryLessonPage
            .classList
            .remove("hidden");

        updateLessonProgress(topic);

        observeLesson(topic);

        scrollTopSmooth();
    }

    function renderLesson(topic) {

        const nav =
            topic.sections
                .map(
                    (section, index) =>
                        `<a href="#chem-detail-${topic.id}-${index}">${section.label}</a>`
                )
                .join("");

        chemistryLessonPage.innerHTML = `

            <div class="lesson-top-bar">

                <button
                    id="chem-back-course"
                    class="back-button"
                >
                    ← Chemistry
                </button>

                <div class="lesson-progress-text">

                    <span>
                        Topic ${topic.number} of ${TOPIC_COUNT}
                    </span>

                    <span>
                        ${topic.title}
                    </span>

                </div>

            </div>

            <div class="lesson-hero">

                <div class="lesson-hero-content">

                    <p class="section-label">
                        CHEMISTRY FOR HEALTH SCIENCES
                    </p>

                    <h1>
                        ${topic.title}
                    </h1>

                    <p class="lesson-description">
                        ${topic.desc}
                    </p>

                    <div class="lesson-meta">

                        <span>
                            📖 Full Lesson
                        </span>

                        <span>
                            🎯 ${topic.objectives.length} Objectives
                        </span>

                        <span>
                            🧠 ${topic.facts.length} Concepts
                        </span>

                        <span>
                            ✏️ ${topic.practice.length} Practice Problems
                        </span>

                        <span>
                            🩺 Clinical Connection
                        </span>

                        <span>
                            🎯 Mastery Quiz
                        </span>

                    </div>

                </div>

                <div class="lesson-hero-number">
                    ${String(topic.number).padStart(2, "0")}
                </div>

            </div>

            <nav class="lesson-navigation">

                <a href="#chem-overview">
                    Overview
                </a>

                <a href="#chem-concepts">
                    Key Terms
                </a>

                ${nav}

                <a href="#chem-application">
                    Application
                </a>

                <a href="#chem-traps">
                    Exam Traps
                </a>

                <a href="#chem-summary">
                    Summary
                </a>

            </nav>

            <div class="lesson-layout">

                <article class="lesson-content">

                    <section
                        id="chem-overview"
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

                            ${
                                renderParagraphs([
                                    topic.desc,
                                    "Study this lesson for understanding first. Then work the practice problems without looking at the solution before using Quick Review and the randomized mastery quiz."
                                ])
                            }

                            <div class="chem-objectives">

                                <h3>
                                    🎯 Learning Objectives
                                </h3>

                                <ul>

                                    ${
                                        topic.objectives.map(
                                            objective =>
                                                `<li>${objective}</li>`
                                        ).join("")
                                    }

                                </ul>

                            </div>

                        </div>

                    </section>

                    <section
                        id="chem-concepts"
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

                            ${
                                renderParagraphs([
                                    "These definitions are the vocabulary of the lesson. Use them to explain mechanisms and solve problems rather than memorizing isolated words."
                                ])
                            }

                            ${
                                renderFacts(
                                    topic.facts
                                )
                            }

                        </div>

                    </section>

                    ${
                        topic.sections.map(
                            (section, index) =>
                                sectionHTML(
                                    topic,
                                    section,
                                    index
                                )
                        ).join("")
                    }

                    <section
                        id="chem-application"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            ${
                                String(
                                    topic.sections.length + 3
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                HEALTH-SCIENCE APPLICATION
                            </p>

                            <h2>
                                Connect Chemistry to the Human Body
                            </h2>

                            ${
                                renderClinical(
                                    topic.clinical
                                )
                            }

                            <div class="chem-practice-preview">

                                <h3>
                                    ✏️ Practice before the quiz
                                </h3>

                                <p>
                                    This topic includes ${topic.practice.length} guided practice problems.
                                    Reveal each solution only after attempting the problem yourself.
                                </p>

                                <button
                                    id="chem-inline-practice"
                                    class="secondary-lesson-button"
                                >
                                    Open Practice Lab →
                                </button>

                            </div>

                        </div>

                    </section>

                    <section
                        id="chem-traps"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            ${
                                String(
                                    topic.sections.length + 4
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                COMMON EXAM TRAPS
                            </p>

                            <h2>
                                Don't Mix These Up
                            </h2>

                            <div class="chem-exam-traps">

                                ${
                                    topic.traps.map(
                                        trap => `
                                            <div class="chem-exam-trap">
                                                <strong>
                                                    ⚠️ Watch out:
                                                </strong>
                                                ${trap}
                                            </div>
                                        `
                                    ).join("")
                                }

                            </div>

                        </div>

                    </section>

                    <section
                        id="chem-summary"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            ${
                                String(
                                    topic.sections.length + 5
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                EXAM REVIEW
                            </p>

                            <h2>
                                High-Yield Summary
                            </h2>

                            ${
                                renderChecklist(
                                    topic.summary
                                )
                            }

                            <div class="mastery-reminder">

                                <span>
                                    🎯
                                </span>

                                <div>

                                    <strong>
                                        Mastery Requirement
                                    </strong>

                                    <p>
                                        Complete Quick Review and Practice Lab, then earn at least ${PASS_SCORE}%
                                        on the randomized mastery quiz.
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
                                Master ${topic.title}
                            </h2>

                            <p>
                                Use all three activities. The quiz mixes core concepts with calculation/application questions where appropriate.
                            </p>

                        </div>

                        <div class="lesson-action-buttons">

                            <button
                                id="chem-review-button"
                                class="secondary-lesson-button"
                            >
                                🧠 Quick Review
                            </button>

                            <button
                                id="chem-practice-lab-button"
                                class="secondary-lesson-button"
                            >
                                ✏️ Practice Lab
                            </button>

                            <button
                                id="chem-topic-quiz-button"
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
                            <span id="chem-topic-progress">0</span>%
                        </div>

                        <div class="sidebar-progress-bar">
                            <div
                                id="chem-topic-progress-fill"
                                class="sidebar-progress-fill"
                            >
                            </div>
                        </div>

                    </div>

                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            MASTERY CHECKLIST
                        </p>

                        <div
                            id="chem-topic-checklist"
                            class="sidebar-checklist"
                        >

                            <div>
                                <span>○</span>
                                Read full lesson
                            </div>

                            <div>
                                <span>○</span>
                                Complete Quick Review
                            </div>

                            <div>
                                <span>○</span>
                                Complete Practice Lab
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
                            <span id="chem-best-score">0</span>%
                        </div>

                    </div>

                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            LESSON DEPTH
                        </p>

                        <p>
                            ${topic.sections.length} teaching sections
                        </p>

                        <p>
                            ${topic.facts.length} review concepts
                        </p>

                        <p>
                            ${topic.practice.length} guided problems
                        </p>

                        <p>
                            ${buildQuestionBank(topic).length} question-bank items
                        </p>

                    </div>

                    <div class="sidebar-card sidebar-tip">

                        <span>
                            💡
                        </span>

                        <div>

                            <strong>
                                Chemistry Strategy
                            </strong>

                            <p>
                                For calculation topics, write the formula, substitute units, solve, then ask whether the answer is chemically reasonable.
                            </p>

                        </div>

                    </div>

                </aside>

            </div>
        `;

        document
            .getElementById(
                "chem-back-course"
            )
            .addEventListener(
                "click",
                showChemistryCourse
            );

        document
            .getElementById(
                "chem-review-button"
            )
            .addEventListener(
                "click",
                () => startQuickReview(
                    topic
                )
            );

        document
            .getElementById(
                "chem-practice-lab-button"
            )
            .addEventListener(
                "click",
                () => startPracticeLab(
                    topic
                )
            );

        document
            .getElementById(
                "chem-inline-practice"
            )
            .addEventListener(
                "click",
                () => startPracticeLab(
                    topic
                )
            );

        document
            .getElementById(
                "chem-topic-quiz-button"
            )
            .addEventListener(
                "click",
                () => startTopicQuiz(
                    topic
                )
            );
    }

    function observeLesson(topic) {

        if (lessonObserver) {
            lessonObserver.disconnect();
        }

        const summary =
            document.getElementById(
                "chem-summary"
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

        lessonObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting &&
                                !chemistryLessonPage
                                    .classList
                                    .contains("hidden")
                            ) {

                                localStorage.setItem(
                                    storageFor(topic.id).read,
                                    "true"
                                );

                                updateLessonProgress(
                                    topic
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

        lessonObserver.observe(
            summary
        );
    }

    function calculateTopicProgress(topic) {

        const storage =
            storageFor(
                topic.id
            );

        let value = 0;

        if (
            getBoolean(storage.read)
        ) {
            value += 20;
        }

        if (
            getBoolean(storage.review)
        ) {
            value += 20;
        }

        if (
            getBoolean(storage.practice)
        ) {
            value += 20;
        }

        if (
            getBoolean(storage.passed)
        ) {
            value += 40;
        }

        return value;
    }

    function isMastered(topic) {

        return (
            getNumber(
                storageFor(topic.id).score
            ) >= PASS_SCORE
        );
    }

    function setChecklist(
        items,
        index,
        complete
    ) {

        if (!items[index]) {
            return;
        }

        const icon =
            items[index]
                .querySelector("span");

        if (!icon) {
            return;
        }

        icon.textContent =
            complete
                ? "✓"
                : "○";

        icon.style.color =
            complete
                ? "#16a34a"
                : "";

        items[index].style.fontWeight =
            complete
                ? "700"
                : "";
    }

    function updateLessonProgress(topic) {

        const storage =
            storageFor(
                topic.id
            );

        const progress =
            calculateTopicProgress(
                topic
            );

        const text =
            document.getElementById(
                "chem-topic-progress"
            );

        const fill =
            document.getElementById(
                "chem-topic-progress-fill"
            );

        const best =
            document.getElementById(
                "chem-best-score"
            );

        if (text) {
            text.textContent =
                progress;
        }

        if (fill) {
            fill.style.width =
                `${progress}%`;
        }

        if (best) {
            best.textContent =
                getNumber(
                    storage.score
                );
        }

        const items =
            document.querySelectorAll(
                "#chem-topic-checklist > div"
            );

        setChecklist(
            items,
            0,
            getBoolean(storage.read)
        );

        setChecklist(
            items,
            1,
            getBoolean(storage.review)
        );

        setChecklist(
            items,
            2,
            getBoolean(storage.practice)
        );

        setChecklist(
            items,
            3,
            getBoolean(storage.passed)
        );
    }

    function countMastered() {

        return CHEM_TOPICS
            .filter(
                isMastered
            )
            .length;
    }

    function getCoursePercent() {

        return Math.round(
            (
                countMastered() /
                TOPIC_COUNT
            ) *
            100
        );
    }

    function updateProgress() {

        const percent =
            getCoursePercent();

        const courseText =
            document.getElementById(
                "chem-course-progress"
            );

        const courseBar =
            document.getElementById(
                "chem-course-progress-bar"
            );

        if (courseText) {
            courseText.textContent =
                percent;
        }

        if (courseBar) {
            courseBar.style.width =
                `${percent}%`;
        }

        document
            .querySelectorAll(
                ".chemistry-topic-card"
            )
            .forEach(
                card => {

                    const topic =
                        TOPIC_MAP[
                            card.dataset.chemTopic
                        ];

                    const status =
                        card.querySelector(
                            ".topic-status"
                        );

                    const button =
                        card.querySelector(
                            ".topic-button"
                        );

                    const mastered =
                        isMastered(
                            topic
                        );

                    const progress =
                        calculateTopicProgress(
                            topic
                        );

                    if (status) {
                        status.textContent =
                            mastered
                                ? "✓"
                                : topic.number;
                    }

                    if (button) {

                        button.textContent =
                            mastered
                                ? "Review →"
                                : progress > 0
                                    ? "Continue →"
                                    : "Start →";
                    }

                }
            );

        const cardSpans =
            chemistryCard
                .querySelectorAll(
                    ".course-progress span"
                );

        if (
            cardSpans.length > 1
        ) {
            cardSpans[1].textContent =
                `${percent}%`;
        }

        const cardFill =
            chemistryCard.querySelector(
                ".course-progress-fill"
            );

        if (cardFill) {
            cardFill.style.width =
                `${percent}%`;
        }

        if (
            currentTopic &&
            !chemistryLessonPage
                .classList
                .contains("hidden")
        ) {

            updateLessonProgress(
                currentTopic
            );
        }

        if (questionsAnswered) {

            questionsAnswered.textContent =
                getNumber(
                    SHARED_QUESTIONS_KEY
                );
        }

        updateSharedDashboard();
    }

    function readCoursePercent(
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

        const courseIds =
            [
                "anatomy1",
                "anatomy2",
                "chemistry"
            ];

        const values =
            courseIds.map(
                readCoursePercent
            );

        const average =
            Math.round(
                values.reduce(
                    (a, b) =>
                        a + b,
                    0
                ) /
                values.length
            );

        if (overallProgress) {
            overallProgress.textContent =
                average;
        }

        if (overallProgressBar) {
            overallProgressBar.style.width =
                `${average}%`;
        }

        if (topicsMastered) {

            const mastered =
                Array.from(
                    document.querySelectorAll(
                        ".course-page .topic-status"
                    )
                )
                .filter(
                    el =>
                        el.textContent
                            .trim() === "✓"
                )
                .length;

            topicsMastered.textContent =
                mastered;
        }

        if (questionsAnswered) {

            questionsAnswered.textContent =
                getNumber(
                    SHARED_QUESTIONS_KEY
                );
        }
    }

    document.querySelectorAll(
        '.course-card[data-course="anatomy1"],' +
        '.course-card[data-course="anatomy2"],' +
        '.course-card[data-course="chemistry"]'
    )
    .forEach(
        card => {

            new MutationObserver(
                () =>
                    setTimeout(
                        updateSharedDashboard,
                        0
                    )
            )
            .observe(
                card,
                {
                    subtree: true,
                    childList: true,
                    characterData: true
                }
            );

        }
    );

    // --------------------------------------------------------
    // STUDY MODAL
    // --------------------------------------------------------

    const overlay =
        document.createElement(
            "div"
        );

    overlay.id =
        "chemistry-final-study-overlay";

    overlay.className =
        "study-overlay hidden";

    overlay.innerHTML = `

        <div class="study-modal">

            <div class="study-modal-header">

                <div>

                    <p
                        id="chem-modal-label"
                        class="study-modal-label"
                    >
                    </p>

                    <h2 id="chem-modal-title">
                    </h2>

                </div>

                <button
                    id="chem-modal-close"
                    class="study-modal-close"
                >
                    ×
                </button>

            </div>

            <div id="chem-modal-content">
            </div>

        </div>
    `;

    document.body.appendChild(
        overlay
    );

    const modalLabel =
        document.getElementById(
            "chem-modal-label"
        );

    const modalTitle =
        document.getElementById(
            "chem-modal-title"
        );

    const modalContent =
        document.getElementById(
            "chem-modal-content"
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
            "chem-modal-close"
        )
        .addEventListener(
            "click",
            closeModal
        );

    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {
                closeModal();
            }

        }
    );

    // --------------------------------------------------------
    // FORMULA SHEET
    // --------------------------------------------------------

    const FORMULAS = [

        [
            "Metric",
            "1 kg = 1000 g; 1 g = 1000 mg; 1 mg = 1000 µg; 1 L = 1000 mL"
        ],

        [
            "Density",
            "d = m/V; m = dV; V = m/d"
        ],

        [
            "Temperature",
            "K = °C + 273.15; °F = (°C × 9/5) + 32"
        ],

        [
            "Moles",
            "n = mass/molar mass; particles = n × 6.022×10²³"
        ],

        [
            "Mass percent",
            "% = part mass / total mass × 100"
        ],

        [
            "Percent yield",
            "% yield = actual/theoretical × 100"
        ],

        [
            "Calorimetry",
            "q = mcΔT"
        ],

        [
            "Boyle",
            "P₁V₁ = P₂V₂"
        ],

        [
            "Combined gas law",
            "P₁V₁/T₁ = P₂V₂/T₂"
        ],

        [
            "Ideal gas",
            "PV = nRT"
        ],

        [
            "Dalton",
            "Ptotal = ΣPcomponent"
        ],

        [
            "Molarity",
            "M = mol/L; n = MV"
        ],

        [
            "Dilution",
            "M₁V₁ = M₂V₂"
        ],

        [
            "pH",
            "pH = −log[H⁺]; [H⁺] = 10⁻ᵖᴴ"
        ],

        [
            "pOH",
            "pOH = −log[OH⁻]; pH + pOH = 14.00 at 25 °C"
        ],

        [
            "Water",
            "Kw = [H⁺][OH⁻] ≈ 1.0×10⁻¹⁴ at 25 °C"
        ],

        [
            "Buffer",
            "pH = pKa + log([A⁻]/[HA])"
        ],

        [
            "Half-life",
            "fraction remaining = (1/2)ⁿ"
        ]

    ];

    function showFormulaSheet() {

        modalLabel.textContent =
            "CHEMISTRY • REFERENCE";

        modalTitle.textContent =
            "Formula & Relationship Sheet";

        modalContent.innerHTML = `

            <div class="chem-formula-sheet-grid">

                ${
                    FORMULAS.map(
                        formula => `

                            <div class="chem-formula-card">

                                <strong>
                                    ${formula[0]}
                                </strong>

                                <span>
                                    ${formula[1]}
                                </span>

                            </div>

                        `
                    ).join("")
                }

            </div>

            <div
                class="study-actions"
                style="margin-top:20px"
            >

                <div>
                </div>

                <button
                    id="chem-formula-close"
                    class="study-button primary"
                >
                    Close
                </button>

            </div>
        `;

        openModal();

        document
            .getElementById(
                "chem-formula-close"
            )
            .addEventListener(
                "click",
                closeModal
            );
    }

    // --------------------------------------------------------
    // QUICK REVIEW
    // --------------------------------------------------------

    let reviewTopic = null;
    let reviewOrder = [];
    let reviewIndex = 0;
    let reviewRevealed = false;

    function startQuickReview(topic) {

        reviewTopic =
            topic;

        reviewOrder =
            shuffle(
                topic.facts.map(
                    (_, index) =>
                        index
                )
            );

        reviewIndex =
            0;

        reviewRevealed =
            false;

        modalLabel.textContent =
            `CHEMISTRY • TOPIC ${topic.number}`;

        modalTitle.textContent =
            "Quick Review";

        openModal();

        renderReview();
    }

    function renderReview() {

        const topic =
            reviewTopic;

        const factIndex =
            reviewOrder[
                reviewIndex
            ];

        const fact =
            topic.facts[
                factIndex
            ];

        const storage =
            storageFor(
                topic.id
            );

        const marked =
            getArray(
                storage.marked
            );

        const isMarked =
            marked.includes(
                factIndex
            );

        const percentage =
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
                        Card ${reviewIndex + 1} of ${reviewOrder.length}
                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    >
                    </div>

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
                                    Explain the idea in your own words before continuing.
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
                            id="chem-review-prev"
                            class="study-button"
                            ${
                                reviewIndex === 0
                                    ? "disabled"
                                    : ""
                            }
                        >
                            ← Previous
                        </button>

                        <button
                            id="chem-review-mark"
                            class="study-button ${isMarked ? "marked" : ""}"
                        >
                            ${
                                isMarked
                                    ? "★ Review Later"
                                    : "☆ Review Later"
                            }
                        </button>

                    </div>

                    <div class="study-actions-group">

                        ${
                            reviewRevealed
                                ? `

                                    <button
                                        id="chem-review-next"
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
                                        id="chem-review-reveal"
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

        const previous =
            document.getElementById(
                "chem-review-prev"
            );

        const mark =
            document.getElementById(
                "chem-review-mark"
            );

        const reveal =
            document.getElementById(
                "chem-review-reveal"
            );

        const next =
            document.getElementById(
                "chem-review-next"
            );

        if (previous) {

            previous.addEventListener(
                "click",
                () => {

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

        if (mark) {

            mark.addEventListener(
                "click",
                () => {

                    const array =
                        getArray(
                            storage.marked
                        );

                    const position =
                        array.indexOf(
                            factIndex
                        );

                    if (
                        position >= 0
                    ) {

                        array.splice(
                            position,
                            1
                        );

                    } else {

                        array.push(
                            factIndex
                        );
                    }

                    saveArray(
                        storage.marked,
                        array
                    );

                    renderReview();

                }
            );
        }

        if (reveal) {

            reveal.addEventListener(
                "click",
                () => {

                    reviewRevealed =
                        true;

                    renderReview();

                }
            );
        }

        if (next) {

            next.addEventListener(
                "click",
                () => {

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
                            storage.review,
                            "true"
                        );

                        updateProgress();

                        updateLessonProgress(
                            topic
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
                                    ${topic.title}
                                </h2>

                                <p class="results-message">
                                    You completed ${topic.facts.length} active-recall cards.
                                </p>

                                <button
                                    id="chem-review-done"
                                    class="study-button primary"
                                >
                                    Return to Lesson
                                </button>

                            </div>
                        `;

                        document
                            .getElementById(
                                "chem-review-done"
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

    // --------------------------------------------------------
    // PRACTICE LAB
    // --------------------------------------------------------

    let practiceTopic = null;
    let practiceOrder = [];
    let practiceIndex = 0;
    let practiceRevealed = false;

    function startPracticeLab(topic) {

        practiceTopic =
            topic;

        practiceOrder =
            shuffle(
                topic.practice.map(
                    (_, index) =>
                        index
                )
            );

        practiceIndex =
            0;

        practiceRevealed =
            false;

        modalLabel.textContent =
            `CHEMISTRY • TOPIC ${topic.number}`;

        modalTitle.textContent =
            "Guided Practice Lab";

        openModal();

        renderPracticeLab();
    }

    function renderPracticeLab() {

        const topic =
            practiceTopic;

        if (
            !topic.practice.length
        ) {

            localStorage.setItem(
                storageFor(topic.id).practice,
                "true"
            );

            updateProgress();

            closeModal();

            return;
        }

        const item =
            topic.practice[
                practiceOrder[
                    practiceIndex
                ]
            ];

        const prompt =
            item[0];

        const answer =
            item[1];

        const steps =
            Array.isArray(item[2])
                ? item[2]
                : [item[2]];

        const percentage =
            Math.round(
                (
                    (
                        practiceIndex +
                        1
                    ) /
                    practiceOrder.length
                ) *
                100
            );

        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Problem ${practiceIndex + 1} of ${practiceOrder.length}
                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    >
                    </div>

                </div>

            </div>

            <div class="chem-modal-problem">

                <p class="chem-problem-number">
                    TRY IT YOURSELF
                </p>

                <div class="chem-problem-prompt">
                    ${prompt}
                </div>

                ${
                    practiceRevealed
                        ? `

                            <div class="chem-solution">

                                <strong>
                                    Step-by-step solution
                                </strong>

                                <ol>
                                    ${
                                        steps.map(
                                            step =>
                                                `<li>${step}</li>`
                                        ).join("")
                                    }
                                </ol>

                                <div class="chem-solution-answer">
                                    Answer: ${answer}
                                </div>

                            </div>

                        `
                        : `

                            <p style="color:#667085;line-height:1.6">
                                Work the problem on paper first. For conceptual problems, explain the answer aloud.
                            </p>

                        `
                }

            </div>

            <div class="study-actions">

                <div class="study-actions-group">

                    <button
                        id="chem-practice-prev"
                        class="study-button"
                        ${
                            practiceIndex === 0
                                ? "disabled"
                                : ""
                        }
                    >
                        ← Previous
                    </button>

                </div>

                <div class="study-actions-group">

                    ${
                        practiceRevealed
                            ? `

                                <button
                                    id="chem-practice-next"
                                    class="study-button primary"
                                >
                                    ${
                                        practiceIndex === practiceOrder.length - 1
                                            ? "Complete Practice ✓"
                                            : "Next Problem →"
                                    }
                                </button>

                            `
                            : `

                                <button
                                    id="chem-practice-reveal"
                                    class="study-button primary"
                                >
                                    Show Solution
                                </button>

                            `
                    }

                </div>

            </div>
        `;

        const previous =
            document.getElementById(
                "chem-practice-prev"
            );

        const reveal =
            document.getElementById(
                "chem-practice-reveal"
            );

        const next =
            document.getElementById(
                "chem-practice-next"
            );

        if (previous) {

            previous.addEventListener(
                "click",
                () => {

                    if (
                        practiceIndex > 0
                    ) {

                        practiceIndex--;

                        practiceRevealed =
                            false;

                        renderPracticeLab();
                    }

                }
            );
        }

        if (reveal) {

            reveal.addEventListener(
                "click",
                () => {

                    practiceRevealed =
                        true;

                    renderPracticeLab();

                }
            );
        }

        if (next) {

            next.addEventListener(
                "click",
                () => {

                    if (
                        practiceIndex <
                        practiceOrder.length - 1
                    ) {

                        practiceIndex++;

                        practiceRevealed =
                            false;

                        renderPracticeLab();

                    } else {

                        localStorage.setItem(
                            storageFor(topic.id).practice,
                            "true"
                        );

                        updateProgress();

                        updateLessonProgress(
                            topic
                        );

                        modalContent.innerHTML = `

                            <div class="results">

                                <div class="results-icon">
                                    ✏️
                                </div>

                                <p class="study-modal-label">
                                    PRACTICE COMPLETE
                                </p>

                                <h2>
                                    ${topic.title}
                                </h2>

                                <p class="results-message">
                                    You completed all ${topic.practice.length} guided problems.
                                    Now try the mastery quiz without looking at the lesson.
                                </p>

                                <div
                                    class="study-actions-group"
                                    style="justify-content:center"
                                >

                                    <button
                                        id="chem-practice-quiz-now"
                                        class="study-button primary"
                                    >
                                        Start Mastery Quiz →
                                    </button>

                                    <button
                                        id="chem-practice-done"
                                        class="study-button"
                                    >
                                        Return to Lesson
                                    </button>

                                </div>

                            </div>
                        `;

                        document
                            .getElementById(
                                "chem-practice-quiz-now"
                            )
                            .addEventListener(
                                "click",
                                () => startTopicQuiz(
                                    topic
                                )
                            );

                        document
                            .getElementById(
                                "chem-practice-done"
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

    // --------------------------------------------------------
    // QUESTION BANK
    // --------------------------------------------------------

    function buildTermQuestions(topic) {

        const output = [];

        topic.facts.forEach(
            (fact, index) => {

                const otherIndices =
                    topic.facts
                        .map(
                            (_, i) =>
                                i
                        )
                        .filter(
                            i =>
                                i !== index
                        );

                const distractorIndices =
                    shuffle(
                        otherIndices
                    )
                    .slice(
                        0,
                        3
                    );

                let raw = [

                    {
                        text: fact[1],
                        correct: true
                    },

                    ...distractorIndices.map(
                        i => ({
                            text:
                                topic.facts[i][1],
                            correct:
                                false
                        })
                    )

                ];

                raw =
                    shuffle(raw);

                output.push({

                    id:
                        `${topic.id}_def_${index}`,

                    type:
                        "mcq",

                    q:
                        `Which statement best describes <strong>${fact[0]}</strong>?`,

                    choices:
                        raw.map(
                            x => x.text
                        ),

                    answer:
                        raw.findIndex(
                            x => x.correct
                        ),

                    explanation:
                        `<strong>${fact[0]}:</strong> ${fact[1]}`,

                    topicId:
                        topic.id

                });

                raw = [

                    {
                        text:
                            fact[0],

                        correct:
                            true
                    },

                    ...distractorIndices.map(
                        i => ({

                            text:
                                topic.facts[i][0],

                            correct:
                                false

                        })
                    )

                ];

                raw =
                    shuffle(raw);

                output.push({

                    id:
                        `${topic.id}_term_${index}`,

                    type:
                        "mcq",

                    q:
                        `Which term matches this definition?<br><br><strong>${fact[1]}</strong>`,

                    choices:
                        raw.map(
                            x =>
                                x.text
                        ),

                    answer:
                        raw.findIndex(
                            x =>
                                x.correct
                        ),

                    explanation:
                        `The correct term is <strong>${fact[0]}</strong>.`,

                    topicId:
                        topic.id

                });

            }
        );

        return output;
    }

    function buildQuestionBank(topic) {

        const custom =
            (
                topic.quiz ||
                []
            )
            .map(
                question => ({
                    ...question,
                    topicId:
                        topic.id
                })
            );

        return [
            ...custom,
            ...buildTermQuestions(topic)
        ];
    }

    function selectTopicQuestions(topic) {

        const custom =
            shuffle(
                (
                    topic.quiz ||
                    []
                )
                .map(
                    question => ({
                        ...question,
                        topicId:
                            topic.id
                    })
                )
            );

        const term =
            shuffle(
                buildTermQuestions(
                    topic
                )
            );

        const customTarget =
            Math.min(
                custom.length,
                Math.ceil(
                    TOPIC_QUIZ_LENGTH /
                    2
                )
            );

        const chosen =
            custom.slice(
                0,
                customTarget
            );

        const needed =
            TOPIC_QUIZ_LENGTH -
            chosen.length;

        return shuffle([
            ...chosen,
            ...term.slice(
                0,
                needed
            )
        ]);
    }

    function questionById(
        topic,
        id
    ) {

        return (
            buildQuestionBank(
                topic
            )
            .find(
                question =>
                    question.id === id
            ) ||
            null
        );
    }

    // --------------------------------------------------------
    // QUIZ
    // --------------------------------------------------------

    let quizQuestions = [];
    let quizIndex = 0;
    let quizCorrect = 0;
    let quizSelected = null;
    let quizNumeric = "";
    let quizChecked = false;
    let quizMode = "topic";
    let quizTopic = null;

    function startTopicQuiz(topic) {

        quizMode =
            "topic";

        quizTopic =
            topic;

        quizQuestions =
            selectTopicQuestions(
                topic
            );

        beginQuiz(
            `CHEMISTRY • TOPIC ${topic.number}`,
            `${topic.title} Mastery Quiz`
        );
    }

    function allQuestions() {

        return CHEM_TOPICS.flatMap(
            topic =>
                buildQuestionBank(
                    topic
                )
                .map(
                    question => ({
                        ...question,
                        topicId:
                            topic.id
                    })
                )
        );
    }

    function startMixedPractice() {

        quizMode =
            "practice";

        quizTopic =
            null;

        quizQuestions =
            shuffle(
                allQuestions()
            )
            .slice(
                0,
                MIXED_PRACTICE_LENGTH
            );

        beginQuiz(
            "CHEMISTRY • MIXED PRACTICE",
            "Chemistry Mixed Practice"
        );
    }

    function startFinalExam() {

        quizMode =
            "final";

        quizTopic =
            null;

        const guaranteed =
            CHEM_TOPICS.map(
                topic => {

                    const custom =
                        topic.quiz &&
                        topic.quiz.length

                            ? shuffle(
                                topic.quiz.map(
                                    question => ({
                                        ...question,
                                        topicId:
                                            topic.id
                                    })
                                )
                            )[0]

                            : shuffle(
                                buildTermQuestions(
                                    topic
                                )
                            )[0];

                    return custom;

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
                    FINAL_EXAM_LENGTH -
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
                FINAL_EXAM_LENGTH
            );

        beginQuiz(
            "CHEMISTRY • COMPREHENSIVE EXAM",
            "Chemistry Final Mastery Exam"
        );
    }

    function getWeakQuestions() {

        const weak = [];

        CHEM_TOPICS.forEach(
            topic => {

                const ids =
                    getArray(
                        storageFor(
                            topic.id
                        ).missed
                    );

                ids.forEach(
                    id => {

                        const question =
                            questionById(
                                topic,
                                id
                            );

                        if (question) {
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
                "CHEMISTRY • SMART REVIEW";

            modalTitle.textContent =
                "Weak Areas";

            modalContent.innerHTML = `

                <div class="results">

                    <div class="results-icon">
                        🎯
                    </div>

                    <h2>
                        No Chemistry weak questions yet
                    </h2>

                    <p class="results-message">
                        Questions you miss in Chemistry quizzes are stored here automatically.
                    </p>

                    <button
                        id="chem-no-weak-close"
                        class="study-button primary"
                    >
                        Got It
                    </button>

                </div>
            `;

            openModal();

            document
                .getElementById(
                    "chem-no-weak-close"
                )
                .addEventListener(
                    "click",
                    closeModal
                );

            return;
        }

        quizMode =
            "weak";

        quizTopic =
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
            "CHEMISTRY • SMART REVIEW",
            "Study My Chemistry Weak Areas"
        );
    }

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

    function currentAnswerReady(
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
                .trim() !==
                ""
            );
        }

        return (
            quizSelected !==
            null
        );
    }

    function numericCorrect(
        question,
        value
    ) {

        const entered =
            Number(
                String(value)
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

        const tolerance =
            Number(
                question.tolerance ??
                0
            );

        return (
            Math.abs(
                entered -
                Number(
                    question.answer
                )
            ) <=
            tolerance
        );
    }

    function renderQuiz() {

        const question =
            quizQuestions[
                quizIndex
            ];

        if (!question) {
            return;
        }

        const topic =
            TOPIC_MAP[
                question.topicId
            ];

        const percentage =
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

        const ready =
            currentAnswerReady(
                question
            );

        const letters =
            [
                "A",
                "B",
                "C",
                "D",
                "E"
            ];

        let answerArea = "";

        if (
            question.type ===
            "numeric"
        ) {

            answerArea = `

                <div class="chem-numeric-wrap">

                    <input
                        id="chem-numeric-answer"
                        class="chem-numeric-input"
                        inputmode="decimal"
                        placeholder="Enter your numerical answer"
                        value="${esc(quizNumeric)}"
                        ${
                            quizChecked
                                ? "disabled"
                                : ""
                        }
                    >

                    ${
                        question.unit
                            ? `
                                <div class="chem-numeric-unit">
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

                    ${
                        question.choices.map(
                            (choice, index) => {

                                let className =
                                    "quiz-option";

                                if (
                                    quizSelected ===
                                    index
                                ) {
                                    className +=
                                        " selected";
                                }

                                if (quizChecked) {

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
                                        data-chem-answer="${index}"
                                        ${
                                            quizChecked
                                                ? "disabled"
                                                : ""
                                        }
                                    >

                                        <span class="quiz-letter">
                                            ${letters[index] || index + 1}
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

        let feedback = "";

        if (quizChecked) {

            const correct =
                question.type ===
                "numeric"

                    ? numericCorrect(
                        question,
                        quizNumeric
                    )

                    : quizSelected ===
                        question.answer;

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
                                : "✕ Not quite"
                        }
                    </strong>

                    <p>
                        ${question.explanation}
                    </p>

                    ${
                        question.type === "numeric"
                            ? `
                                <p>
                                    <strong>
                                        Expected answer:
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
                        Question ${quizIndex + 1} of ${quizQuestions.length}
                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    >
                    </div>

                </div>

            </div>

            <div class="quiz-body">

                <div class="quiz-card">

                    <p class="quiz-type">
                        TOPIC ${topic.number} • ${topic.title}${
                            question.type === "numeric"
                                ? " • CALCULATION"
                                : ""
                        }
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
                            id="chem-quiz-exit"
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
                                        id="chem-quiz-next"
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
                                        id="chem-quiz-check"
                                        class="study-button primary"
                                        ${
                                            ready
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
                "[data-chem-answer]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            if (
                                quizChecked
                            ) {
                                return;
                            }

                            quizSelected =
                                Number(
                                    button.dataset
                                        .chemAnswer
                                );

                            renderQuiz();

                        }
                    );

                }
            );

        const numericInput =
            document.getElementById(
                "chem-numeric-answer"
            );

        if (numericInput) {

            numericInput.addEventListener(
                "input",
                () => {

                    quizNumeric =
                        numericInput.value;

                    const check =
                        document.getElementById(
                            "chem-quiz-check"
                        );

                    if (check) {

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
                event => {

                    if (
                        event.key ===
                        "Enter" &&
                        String(
                            quizNumeric
                        )
                        .trim()
                    ) {

                        checkAnswer();
                    }

                }
            );
        }

        const check =
            document.getElementById(
                "chem-quiz-check"
            );

        const next =
            document.getElementById(
                "chem-quiz-next"
            );

        const exit =
            document.getElementById(
                "chem-quiz-exit"
            );

        if (check) {

            check.addEventListener(
                "click",
                checkAnswer
            );
        }

        if (next) {

            next.addEventListener(
                "click",
                () => {

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

        if (exit) {

            exit.addEventListener(
                "click",
                closeModal
            );
        }
    }

    function addWeak(question) {

        const topic =
            TOPIC_MAP[
                question.topicId
            ];

        if (!topic) {
            return;
        }

        const key =
            storageFor(
                topic.id
            ).missed;

        const ids =
            getArray(
                key
            );

        if (
            !ids.includes(
                question.id
            )
        ) {

            ids.push(
                question.id
            );
        }

        saveArray(
            key,
            ids
        );
    }

    function removeWeak(question) {

        const topic =
            TOPIC_MAP[
                question.topicId
            ];

        if (!topic) {
            return;
        }

        const key =
            storageFor(
                topic.id
            ).missed;

        saveArray(
            key,
            getArray(key)
                .filter(
                    id =>
                        id !== question.id
                )
        );
    }

    function checkAnswer() {

        const question =
            quizQuestions[
                quizIndex
            ];

        if (
            !question ||
            quizChecked ||
            !currentAnswerReady(
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

                : quizSelected ===
                    question.answer;

        if (correct) {

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
            ) +
            1
        );

        quizChecked =
            true;

        renderQuiz();
    }

    function saveTopicResult(
        topic,
        score
    ) {

        const storage =
            storageFor(
                topic.id
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
            ) +
            1
        );

        if (
            score >=
            PASS_SCORE
        ) {

            localStorage.setItem(
                storage.passed,
                "true"
            );
        }

        updateLessonProgress(
            topic
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
            "topic" &&
            quizTopic
        ) {

            saveTopicResult(
                quizTopic,
                score
            );
        }

        updateProgress();

        showResults(
            score
        );
    }

    function showResults(score) {

        const incorrect =
            quizQuestions.length -
            quizCorrect;

        const passed =
            score >=
            PASS_SCORE;

        let title =
            "Practice Complete";

        let message =
            "Missed questions were saved automatically for Weak Areas.";

        let icon =
            "🧪";

        if (
            quizMode ===
            "topic"
        ) {

            title =
                passed
                    ? `${quizTopic.title} Mastered!`
                    : "Review and Try Again";

            message =
                passed
                    ? `You reached the ${PASS_SCORE}% mastery requirement.`
                    : `You need at least ${PASS_SCORE}% to master this topic. Use the missed-question explanations, Practice Lab and Quick Review before retrying.`;

            icon =
                passed
                    ? "🏆"
                    : "📚";

        } else if (
            quizMode ===
            "final"
        ) {

            title =
                "Chemistry Final Mastery Exam Complete";

            message =
                `You completed ${quizQuestions.length} questions covering the full ${TOPIC_COUNT}-topic course.`;

            icon =
                "🏆";

        } else if (
            quizMode ===
            "weak"
        ) {

            title =
                "Weak-Area Review Complete";

            message =
                "Correctly answered questions were removed from your Chemistry weak-area list.";

            icon =
                "🎯";
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
                                    ? `${getNumber(storageFor(quizTopic.id).score)}%`
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
                                    id="chem-result-retake"
                                    class="study-button"
                                >
                                    🔄 New Quiz
                                </button>

                                <button
                                    id="chem-result-practice"
                                    class="study-button"
                                >
                                    ✏️ Practice Lab
                                </button>

                                <button
                                    id="chem-result-review"
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
                                    id="chem-result-weak"
                                    class="study-button"
                                >
                                    🎯 Weak Areas
                                </button>

                            `
                            : ""
                    }

                    <button
                        id="chem-result-finish"
                        class="study-button primary"
                    >
                        Finish
                    </button>

                </div>

            </div>
        `;

        const retake =
            document.getElementById(
                "chem-result-retake"
            );

        const practice =
            document.getElementById(
                "chem-result-practice"
            );

        const review =
            document.getElementById(
                "chem-result-review"
            );

        const weak =
            document.getElementById(
                "chem-result-weak"
            );

        const finish =
            document.getElementById(
                "chem-result-finish"
            );

        if (retake) {

            retake.addEventListener(
                "click",
                () =>
                    startTopicQuiz(
                        quizTopic
                    )
            );
        }

        if (practice) {

            practice.addEventListener(
                "click",
                () =>
                    startPracticeLab(
                        quizTopic
                    )
            );
        }

        if (review) {

            review.addEventListener(
                "click",
                () =>
                    startQuickReview(
                        quizTopic
                    )
            );
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

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape" &&
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

    updateProgress();

    setTimeout(
        updateSharedDashboard,
        0
    );

});