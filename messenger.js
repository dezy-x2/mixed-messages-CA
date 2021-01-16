const nouns = ["cup", "dog", "cat", "animal", "computer", "camp", "card", "pencil", "lamp", "book", "stapler", "picture", "wood", "tool", "pin", "note"];
const adjectives = ["cute", "pretty", "fast", "cool", "nice", "ugly", "dumb", "smart", "windy", "sunny", "cold", "hot", "sticky", "soft", "hard", "annoying"];
const verbs = ["run", "walk", "bike", "read", "program", "write", "teach", "sleep", "eat", "paint", "work", "sit", "build", "pose", "drink", "charge", "beat"];


function pick(part) {
    if (part === "nouns") {
        return nouns[Math.floor(Math.random() * nouns.length)];
    } else if (part === "adjectives") {
        return adjectives[Math.floor(Math.random() * adjectives.length)];
    } else if (part === "verbs") {
        return verbs[Math.floor(Math.random() * verbs.length)];
    } else {
        return "dodo";
    }
}

const sentences = [`A vacation is when you take a trip to some ${pick("adjectives")} place with your ${pick("adjectives")} family.`, `Usually you go to some place that is near a/an
                    ${pick("nouns")} or up on a/an ${pick("nouns")}`, `A good vacation place is one where you can ride a/an ${pick("nouns")} or play ${pick("nouns")} or go hunting 
                    for a/an ${pick("nouns")}.`, `I like to spend my time ${pick("verbs")}ing or ${pick("verbs")}ing`, `When parents go on a vacation, they spend their time eating 
                    three ${pick("nouns")}s a day, and fathers play golf, and mothers sit around ${pick("verbs")}ing.`, `Last summer, my little brother fell in a/an ${pick("nouns")}
                    and got poison ${pick("nouns")} all over his ${pick("nouns")}.`, `My family is going to (the) ${pick("nouns")}, and I will practice ${pick("verbs")}ing.`, 
                    `Parents need vacations more than kids because parents are always very ${pick("adjectives")} and because they have to work 8 hours every day all year making 
                    enough ${pick("nouns")}s to pay for the vacation`];

function pickSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
};

console.log(pickSentence());