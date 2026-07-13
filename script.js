
// Lost Wallet Website
console.log("Welcome to Lost Wallet!");

// Wallet Status
const walletStatus = document.getElementById("wallet-status");

if (walletStatus) {
    walletStatus.textContent = "🟢 Still Missing";
}

// Join Community Button
const joinButton = document.querySelector(".btn");

if (joinButton) {
    joinButton.addEventListener("click", function () {
        alert("🚀 Welcome to Lost Wallet!\n\nThe journey has just begun.");
    });
}
