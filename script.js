
// Lost Wallet Website
console.log("Welcome to Lost Wallet!");

// Wallet Status
const walletStatus = document.getElementById("wallet-status");

if (walletStatus) {
    walletStatus.textContent = "🟢 Still Missing";
}
const hunterCount = document.getElementById("hunter-count");

if (hunterCount) {

    let count = 0;
    const target = 500;

    const counter = setInterval(() => {

        count++;

        hunterCount.textContent = count;

        if (count >= target) {
            clearInterval(counter);
        }

    }, 5);

}
// Join Community Button
const joinButton = document.querySelector(".btn");

if (joinButton) {
    joinButton.addEventListener("click", function () {
        alert("🚀 Welcome to Lost Wallet!\n\nThe journey has just begun.");
    });
