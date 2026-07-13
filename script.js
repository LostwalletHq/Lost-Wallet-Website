
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


