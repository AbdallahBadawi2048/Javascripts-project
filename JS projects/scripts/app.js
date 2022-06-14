const result = document.querySelector("#result");
document.querySelectorAll("#child2 button").forEach((a) =>
    a.addEventListener("click", (e) => {
        computerChoice(e);
    })
);

function computerChoice(e) {

    document.querySelector(".child1-1").setAttribute("type", e.target.getAttribute("title").trim())

    let choices = ["Rock", "Paper", "Scissors"];

    result.setAttribute("type", choices[Math.floor(Math.random() * choices.length)]);

    if (e.target.getAttribute("title").trim() == result.getAttribute("type")) {
        setTimeout(() => alert("Draw"), 100);
    }

    if (
        (e.target.getAttribute("title").trim() == "Rock" && result.getAttribute("type") == "Scissors") ||
        (e.target.getAttribute("title").trim() == "Paper" && result.getAttribute("type") == "Rock") ||
        (e.target.getAttribute("title").trim() == "Scissors" && result.getAttribute("type") == "Paper")
    ) {
        setTimeout(() => alert("You win"), 100);
    }

    if (
        (e.target.getAttribute("title").trim() == "Rock" && result.getAttribute("type") == "Paper") ||
        (e.target.getAttribute("title").trim() == "Paper" && result.getAttribute("type") == "Scissors") ||
        (e.target.getAttribute("title").trim() == "Scissors" && result.getAttribute("type") == "Rock")
    ) {
        setTimeout(() => alert("Computer wins"), 100);
    }
}