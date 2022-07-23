export function displayColor(color) {
    return `${color == "red" ? "🟥" : color == "blue" ? "🟦" : color == "green" ? "🟩" : "🟨"}`
}

const moves = [
    { id: "1", content: "" },
    { id: "2", content: "" },
    { id: "3", content: "" },
]

const sousOrdres = []; 
for (let i = 1; i < 5; i++) {
    sousOrdres.push({
        id: i,
        moves: moves,
    })
}
export const blankOrdres = [
    {
        color: "green",
        ready: false,
        ordres: sousOrdres
    },
    {
        color: "blue",
        ready: false,
        ordres: sousOrdres,
    },
    {
        color: "yellow",
        ready: false,
        ordres: sousOrdres
    },
    {
        color: "red",
        ready: false,
        ordres: sousOrdres
    },
]