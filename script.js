const wordBank = [
    { word: "Buttress", meaning: "Give encouragement or support to (a person, plan, argument)." },
    { word: "Default", meaning: "Failure to act; inaction or neglect." },
    { word: "Vogue", meaning: "Something in fashion, as at a particular time." },
    { word: "Putrefy", meaning: "Cause to rot or decay." },
    { word: "Epitome", meaning: "A person or thing that is typical of or possesses to a high degree the features of a whole class." },
    { word: "Fortuitous", meaning: "Lucky, fortunate." },
    { word: "Rescript", meaning: "Any edict, decree, or official announcement." },
    { word: "Vernacular", meaning: "The native speech or language of a place." },
    { word: "Proselytize", meaning: "To convert or attempt to convert, usually associated with Christianity." },
    { word: "Anglicize", meaning: "To make or become English in form or character." },
    { word: "Incarceration", meaning: "Put in jail." },
    { word: "Covert", meaning: "Secret." },
    { word: "Footnote", meaning: "An explanation or documentation at the bottom of the page." },
    { word: "Penal", meaning: "Related to or involving punishment." },
    { word: "Surveillance", meaning: "A watch kept over a person or group, especially prisoners." },
    { word: "Commemorate", meaning: "To serve as a memorial and reminder of (usually an event)." },
    { word: "Proximate", meaning: "Next, nearest, immediately before or after in order, place or occurrence." },
    { word: "Bugle", meaning: "A brass wind instrument resembling a cornet used typically for sounding military signals." },
    { word: "Veteran", meaning: "A person who has had long experience in an occupation or office. Often used in the context of military or war experience." },
    { word: "Enlisted", meaning: "Drafted, commissioned or engaged." },
    { word: "Segue", meaning: "A smooth and uninterrupted transition from one topic, section, or part of a conversation." },
    { word: "Benefactor", meaning: "An individual providing money or support to a person or cause." },
    { word: "Trepidation", meaning: "A feeling of fear or anxiety about something that may happen." },
    { word: "Xenial", meaning: "Hospitable, especially to visiting strangers or guests." },
    { word: "Zest", meaning: "Great enthusiasm and energy." },
    { word: "Blandishment", meaning: "Flattery intended to persuade." },
    { word: "Cupidity", meaning: "Extreme greed for material wealth." },
    { word: "Mawkish", meaning: "Very sentimental or emotional." },
    { word: "Tome", meaning: "A large and scholarly book." },
    { word: "Jovial", meaning: "Cheerful and friendly." },
    { word: "Ambiguous", meaning: "Unclear or having multiple meanings." },
    { word: "Mitigate", meaning: "To make less severe." },
    { word: "Conundrum", meaning: "A difficult problem or question." },
    { word: "Exacerbate", meaning: "To make a situation worse or more severe." },
    { word: "Ephemeral", meaning: "Lasting for a very short time." },
    { word: "Discern", meaning: "To perceive, detect, or recognize something with clarity." },
    { word: "Adept", meaning: "Highly skilled or proficient in a particular area." },
    { word: "Ineffable", meaning: "Too great or extreme to be expressed in words." },
    { word: "Juxtapose", meaning: "To place side by side for contrasting effect." },
    { word: "Propensity", meaning: "An inclination or natural tendency to behave in a particular way." },
    { word: "Sagacious", meaning: "Having keen mental discernment and good judgment." },
    { word: "Elucidate", meaning: "To make something clear." },
    { word: "Ebullition", meaning: "A sudden outburst of emotion or violence." },
    { word: "Proclivity", meaning: "A natural or habitual inclination or tendency." },
    { word: "Inchoate", meaning: "Just begun and not fully formed or developed." },
    { word: "Recalcitrant", meaning: "Stubbornly resistant to authority or control." },
    { word: "Sycophant", meaning: "A flatterer." },
    { word: "Obfuscate", meaning: "To confuse or bewilder." },
    { word: "Camaraderie", meaning: "Mutual trust and friendship." },
    { word: "Aplomb", meaning: "Self-confidence or assurance." },
    { word: "Quixotic", meaning: "Unrealistic and impractical." },
    { word: "Vestige", meaning: "A trace or remnant of something that is disappearing." },
    { word: "Egregious", meaning: "Outstandingly bad." },
    { word: "Ambivalent", meaning: "Having mixed feelings or contradictory ideas." },
    { word: "Magnanimous", meaning: "Generous or forgiving." },
    { word: "Cognizant", meaning: "Having knowledge about something." },
    { word: "Intransigent", meaning: "Stubborn." },
    { word: "Ostensible", meaning: "Stated or appearing to be true, but not necessarily so." },
    { word: "Benevolent", meaning: "Well-meaning and kindly." },
    { word: "Enervate", meaning: "To weaken or drain energy from someone or something." },
    { word: "Lethargic", meaning: "Affected by sluggishness or a lack of energy." },
    { word: "Inundate", meaning: "To flood with water." },
    { word: "Cajole", meaning: "To persuade someone through flattery or gentle urging." },
    { word: "Mammoth", meaning: "Gigantic." },
    { word: "Plethora", meaning: "A large or excessive amount of something." },
    { word: "Tenacity", meaning: "Determination and persistence." },
    { word: "Ubiquitous", meaning: "Found everywhere." },
    { word: "Taciturn", meaning: "Inclined to silence." },
    { word: "Exalt", meaning: "To honor." },
    { word: "Extravagant", meaning: "Wasteful expenditure." },
    { word: "Forsake", meaning: "Leave someone who counts on you." },
    { word: "Beseech", meaning: "Request earnestly." },
    { word: "Besiege", meaning: "Surround aggressively, corner." },
    { word: "Scrupulous", meaning: "Having ethical or moral principles." },
    { word: "Ratify", meaning: "Approve." },
    { word: "Exasperate", meaning: "Irritate." },
    { word: "Zephyr", meaning: "Breeze." },
    { word: "Munificent", meaning: "Very generous." },
    { word: "Dictum", meaning: "An authoritative declaration." },
    { word: "Adulterate", meaning: "Make impure by adding foreign substance." },
    { word: "Gripe", meaning: "Complain." },
    { word: "Surreptitious", meaning: "Marked by quiet and caution and secrecy." },
    { word: "Burnish", meaning: "Polish." },
    { word: "Palpitate", meaning: "Beat rapidly." },
    { word: "Sully", meaning: "Make dirty." },
    { word: "Subaltern", meaning: "Inferior in rank or status." },
    { word: "Rejoinder", meaning: "A quick reply to a question or remark." },
    { word: "Zenith", meaning: "Top." },
    { word: "Lucrative", meaning: "Profitable." },
    { word: "Embellish", meaning: "Adorn." },
    { word: "Doting", meaning: "Loving." },
    { word: "Gargantuan", meaning: "Titanic." },
    { word: "Deviant", meaning: "One who strays from norms and rules." },
    { word: "Demography", meaning: "The statistical study of human populations." },
    { word: "Stratification", meaning: "(In sociology) the hierarchical or vertical division of society according to rank, caste or class." },
    { word: "Natal", meaning: "Of or relating to a person’s birth." },
    { word: "Causal", meaning: "Of or implying a cause." },
    { word: "Cultural", meaning: "The shared beliefs, behaviors, or social environment connected with a particular aspect of a society." },
    { word: "Conundrum", meaning: "A riddle." },
    { word: "Perpetuate", meaning: "To enable or allow the continuation in the future." },
    { word: "Mandate", meaning: "An authoritative command or statement." },
    { word: "Decennial", meaning: "Of or for a period of 10 years." },
    { word: "Status quo", meaning: "Existing state or condition." },
    { word: "Nativism", meaning: "The policy of protecting native interests against those of immigrants." },
    { word: "Precarity", meaning: "Dependent on circumstances beyond one’s control." },
    { word: "Montage", meaning: "A film sequence made up of many short scenes edited together." },
    { word: "Heterogeneous", meaning: "Different in kind, unlike, incongruous." },
    { word: "Pervasive", meaning: "Common, inescapable, prevalent, omnipresent." },
    { word: "Knotty", meaning: "Involved, intricate or difficult." },
    { word: "Persecution", meaning: "A program or campaign to exterminate or drive away or subjugate people based on their membership in a religious, ethnic, social or racial group." },
    { word: "Silhouettes", meaning: "The outline or general shape of something; a dark image outlined against a lighter background." },
    { word: "Extradition", meaning: "The formal process by which a state or nation hands over an individual charged or convicted of a crime in another state or nation’s jurisdiction to that nation." },
    { word: "Exodus", meaning: "Departure or emigration of usually a large number of people." },
    { word: "Structural", meaning: "Refers to aspects of an economy that are related to its underlying framework, institutions, and long-term characteristics." },
    { word: "Snippet", meaning: "A small piece or fragment of information or content." },
    { word: "Soviet", meaning: "Primarily related to the political and historical framework of the former Soviet Union." },
    { word: "Embodiment", meaning: "Tangible or visible representation of an idea, quality, feeling, or concept." },
    { word: "Entail", meaning: "Involve or require something as a necessary consequence or part of a process, action, or situation." }
  ];
  
  let currentQuestions = [];
  
  function generateQuestions() {
    currentQuestions = [];
    const usedIndices = new Set();
  
    while (currentQuestions.length < 5) {
      const randomIndex = Math.floor(Math.random() * wordBank.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
  
        const correctAnswer = wordBank[randomIndex].meaning;
        const incorrectAnswers = getRandomOptions(wordBank[randomIndex].word);
  
        currentQuestions.push({
          word: wordBank[randomIndex].word,
          correct: correctAnswer,
          options: shuffleArray([correctAnswer, ...incorrectAnswers]),
        });
      }
    }
  }
  
  function getRandomOptions(excludeWord) {
    const options = [];
    while (options.length < 3) {
      const randomIndex = Math.floor(Math.random() * wordBank.length);
      const randomOption = wordBank[randomIndex].meaning;
  
      if (!options.includes(randomOption) && wordBank[randomIndex].word !== excludeWord) {
        options.push(randomOption);
      }
    }
    return options;
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function displayQuestions() {
    const quizArea = document.getElementById("quiz-area");
    quizArea.innerHTML = "";
  
    currentQuestions.forEach((q, index) => {
      const optionsHTML = q.options
        .map(
          (option) => `
          <label>
            <input type="radio" name="question-${index}" value="${option}">
            ${option}
          </label><br>
        `
        )
        .join("");
  
      const questionHTML = `
        <div class="question">
          <p>Q${index + 1}: What is the meaning of "${q.word}"?</p>
          ${optionsHTML}
        </div>
      `;
      quizArea.innerHTML += questionHTML;
    });
  }
  
  function checkAnswers() {
    const resultArea = document.getElementById("result-area");
    resultArea.innerHTML = "";
    let correctCount = 0;
  
    currentQuestions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
      const userAnswer = selectedOption ? selectedOption.value : null;
  
      if (userAnswer === q.correct) {
        correctCount++;
        resultArea.innerHTML += `<p>Q${index + 1}: Correct ✅</p>`;
      } else {
        resultArea.innerHTML += `<p>Q${index + 1}: Incorrect ❌ (Correct: ${q.correct})</p>`;
      }
    });
  
    resultArea.innerHTML += `<p>Your Score: ${correctCount}/5</p>`;
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "block";
  }
  
  document.getElementById("submit-btn").addEventListener("click", checkAnswers);
  
  document.getElementById("next-btn").addEventListener("click", () => {
    generateQuestions();
    displayQuestions();
    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("result-area").innerHTML = "";
  });
  
  // Initialize Quiz
  generateQuestions();
  displayQuestions();
  
  