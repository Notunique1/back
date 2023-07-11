const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const quoteBtn = document.getElementById("quoteButton")
const affirmationBtn = document.getElementById("affirmationButton")
const positiveBtn = document.getElementById("positiveButton")
const loveBtn = document.getElementById("loveButton")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtnBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click',getFortune)

const getQuote = () => {
    axios.get("http://localhost:4000/api/quote/")
        .then(res => {
            const data = res.data;
            alert(data);

    });
};

quoteBtn.addEventListener('click',getQuote)

const getAffirmation = () => {
    axios.get("http://localhost:4000/api/affirmation/")
        .then(res => {
            const data = res.data;
            alert(data);

    });
;}

affirmationBtn.addEventListener('click',getAffirmation)

const getPositive = () => {
    axios.get("http://localhost:4000/api/positive/")
        .then(res => {
            const data = res.data;
            alert(data);

     });

;}

positiveBtn.addEventListener('click',getPositive )

const getLove = () => {
    axios.get("http://localhost:4000/api/love/")
        .then(res => {
            const data = res.data;
            alert(data);

        });
        
;}

loveBtn.addEventListener('click',getLove)