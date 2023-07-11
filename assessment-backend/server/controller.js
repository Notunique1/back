module.exports = {

    getCompliment: (req, res) => {
        const compliments = [
        "Gee, you're a smart cookie!",
        "Cool shirt!", 
        "Your Javascript skills are stellar",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req,res) => {
        const fortunes = [
        "You are wise",
        "You are loved",
        "You are wealthy",
        "You are worthy",
        "You are one of a kind",
        ];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getQuote: (req,res) => {
        const quotes = [
        "This too shall pass",
        "Have faith the size of a mustard seed",
        "God will not put more on you than you can bare",
        "Prayer changes things",
        "Jesus loves you",
    ];

        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomIndex];

        res.status(200).send(randomQuote);
    
    },
    getAffirmation: (req,res) => {
        const affirmations = [
        "You are brave",
        "You are fearless",
        "You will achieve greatness",
        "You are courageous",
        "You are special",

    ];

        let randomIndex = Math.floor(Math.random() * affirmations.length);
        let randomAffirmation = affirmations[randomIndex];

        res.status(200).send(randomQuote);
    },
    getPositive: (req, res) => {
    const positives = [
    "The sun will come out tommorrow",
    "You are liked",
    "Your smile is beautiful",
    "Your a great friend",
    "You are unique",

    ];

    let randomIndex = Math.floor(Math.random() * positives.length);
    let randomPositive = positives[randomIndex];

    res.status(200).send(randomQuote);
    },

    getLove : (req, res) => {

    const loves = [
    "God loves you",
    "Your friends love you",
    "Your parents love you",
    "Your coworkers love you",
    "Your siblings love you",

    ];

    let randomIndex = Math.floor(Math.random() * loves.length);
    let randomLove = loves[randomIndex];

    res.status(200).send(randomLove);
    },
}