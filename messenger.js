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