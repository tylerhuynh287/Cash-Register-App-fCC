let price = 19.5;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

function calculateChange(price, cash, cid) {
    let changeDue = cash - price;
    let totalInDrawer = cid.reduce((sum, curr) => sum + curr[1], 0);

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (cash === price) {
        document.getElementById("change-due").innerText = "No change due - customer paid with exact cash";
        return { status: "EXACT_CASH", change: [] };
    }

    if (totalInDrawer < changeDue) {
        document.getElementById("change-due").innerText = "Status: INSUFFICIENT_FUNDS";
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    let sortedCid = cid.reverse();
    let changeArray = [];
    let remainingChange = changeDue;

    for (let [unit, amountAvailable] of sortedCid) {
        let unitValue = currencyValues[unit];
        let amountToGive = 0;

        while (remainingChange >= unitValue && amountAvailable > 0) {
            remainingChange = (remainingChange - unitValue).toFixed(2);
            amountAvailable -= unitValue;
            amountToGive += unitValue;
        }

        if (amountToGive > 0) {
            changeArray.push([unit, parseFloat(amountToGive.toFixed(2))]);
        }
    }

    let totalChangeGiven = changeArray.reduce((sum, curr) => sum + curr[1], 0);

    if (totalChangeGiven < changeDue) {
        document.getElementById("change-due").innerText = "Status: INSUFFICIENT_FUNDS";
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (totalInDrawer === totalChangeGiven) {
        document.getElementById("change-due").innerText = `Status: CLOSED ${changeArray.map(item => `${item[0]}: $${item[1]}`).join(" ")}`;
        return { status: "CLOSED", change: changeArray };
    }

    document.getElementById("change-due").innerText = `Status: OPEN ${changeArray.map(item => `${item[0]}: $${item[1]}`).join(" ")}`;
    return { status: "OPEN", change: changeArray };
}

document.getElementById("purchase-btn").addEventListener("click", function () {
    let cash = parseFloat(document.getElementById("cash").value);

    if (isNaN(cash)) {
        alert("Please enter a valid cash amount.");
        return;
    }

    calculateChange(price, cash, JSON.parse(JSON.stringify(cid)));
});