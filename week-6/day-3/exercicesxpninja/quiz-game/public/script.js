const loadBtn = document.getElementById("loadQuestion");
const submitBtn = document.getElementById("submitAnswer");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const resultDiv = document.getElementById("result");
const questionIdInput = document.getElementById("questionId");
const answerInput = document.getElementById("answerInput");

// Charger une question depuis le serveur
loadBtn.addEventListener("click", async () => {
    const id = questionIdInput.value;
    resultDiv.textContent = "";
    answerInput.value = "";
    try {
        const res = await fetch(`http://localhost:3000/api/question/${id}`);
        if (!res.ok) throw new Error("Question non trouvée !");
        const data = await res.json();
        questionContainer.textContent = `Question ${data.id}: ${data.question}`;
        answerContainer.style.display = "block";
    } catch (err) {
        questionContainer.textContent = err.message;
        answerContainer.style.display = "none";
    }
});

// Vérifier la réponse
submitBtn.addEventListener("click", async () => {
    const id = questionIdInput.value;
    const answer = answerInput.value;
    try {
        const res = await fetch(`http://localhost:3000/api/answer`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ questionId: Number(id), answer })
        });
        const data = await res.json();
        resultDiv.textContent = data.correct ? "✅ Correct !" : "❌ Incorrect !";
    } catch (err) {
        resultDiv.textContent = "Erreur lors de la vérification de la réponse.";
    }
});
