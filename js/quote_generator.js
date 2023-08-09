const generated_quote = document.getElementById("quoteGeneration");
const temporary_seen  = document.getElementById("temporary_seen");

const Quotes = [
    "'The darkest hour has only sixty minutes.' ~ Morris Mandel",
    "'You are never alone. You are eternally connected with everyone.' ~ Amit Ray",
    "'Believe you can and you're halfway there.' ~ Theodore Roosevelt",
    "'You have within you right now, everything you need to deal with whatever the world can throw at you.' ~ Brian Tracy",
    "'Every moment is a fresh beginning.' ~ T.S. Eliot",
    "'When you come out of the storm, you won’t be the same person who walked in. That’s what the storm is all about.' ~ Haruki Murakami",
    "'Sometimes even to live is an act of courage.' ~ Lucius Annaeus Seneca",
    "'No matter what happens, or how bad it seems today, life does go on, and it will be better tomorrow.' ~ Maya Angelou",
    "'To anyone out there who’s hurting — it’s not a sign of weakness to ask for help. It’s a sign of strength.' ~ Barack Obama",
    "'You can't see the future coming — not the terrors, for sure, but you also can't see the wonders that are coming, the moments of light-soaked joy that await each of us.' ~ John Green",
    "'The bravest thing I ever did was continuing my life when I wanted to die.' ~ Juliette Lewis",
    "'These mountains that you are carrying, you were only supposed to climb.' ~ Najwa Zebian",
    "'If you were born with the weakness to fall, you were born with the strength to rise.' ~ Rupi Kaur",
    "'You are proof that beauty can grow in the most difficult of places.' ~ Wednesday Holmes",
]

function generate() {
    let result = Math.floor(Math.random() * Quotes.length);
    generated_quote.textContent = Quotes[result];
}

setInterval(generate, 4000);

function hideParagraph() {
    temporary_seen.style.display = "none";
}

setTimeout(hideParagraph, 3000);