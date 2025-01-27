import { manageAdmission, calcElecBill, calcTax, calcNet } from "./method.js";

const buttons = document.querySelectorAll(".btn-tabs");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

// B1
document.getElementById("btnResult").addEventListener("click", () => {
    const benchmark = Number(document.getElementById("benchmark").value);
    const location = Number(document.getElementById("selLocation").value);
    const user = Number(document.getElementById("selUser").value);
    const score1 = Number(document.getElementById("score-1").value);
    const score2 = Number(document.getElementById("score-2").value);
    const score3 = Number(document.getElementById("score-3").value);

    manageAdmission(location, user, score1, score2, score3, benchmark);
});

// B2
document.getElementById("btnElecBill").addEventListener("click", () => {
    const customerName = document.getElementById("name").value;
    const consumedKW = Number(document.getElementById("kw").value);

    document.getElementById(
        "txtElecBill"
    ).innerHTML = `Họ tên: ${customerName}; Tiền điện: ${calcElecBill(
        consumedKW
    )} VNĐ`;
});

//B3
document.getElementById("btnTax").addEventListener("click", () => {
    const name = document.getElementById("name2").value;
    const user = Number(document.getElementById("dependent").value);
    const salary = Number(document.getElementById("salary").value);
    document.getElementById(
        "txtTax"
    ).innerHTML = `Họ tên: ${name}; Tiền thuế thu nhập cá nhân: ${calcTax(
        user,
        salary
    )} VND`;
});

// B4
document.getElementById("customerType").addEventListener("change", () => {
    let customerType = document.getElementById("customerType").value;
    console.log(customerType);
    var connectionsInput = document.getElementById("connectionsInput");
    if (customerType === "business") {
        connectionsInput.classList.add("block");
        connectionsInput.classList.remove("hidden");
    } else {
        connectionsInput.classList.remove("block");
        connectionsInput.classList.add("hidden");
    }
});

document.getElementById("btnNet").addEventListener("click", () => {
    let customerType = document.getElementById("customerType").value;
    let customerCode = document.getElementById("customerCode").value;
    let premiumChannels =
        parseInt(document.getElementById("premiumChannels").value) || 0;
    let connectionsInput =
        parseInt(document.getElementById("connectionsInput").value) || 0;

    let format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(calcNet(customerType, premiumChannels, connectionsInput));

    document.getElementById(
        "txtNet"
    ).innerHTML = `Mã khách hàng: ${customerCode};  Tiền cáp: ${format}`;
});
