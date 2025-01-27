// bài 1
export function checkNotZero(a) {
    return !(a <= 0);
}

export function manageAdmission(
    location,
    user,
    score1,
    score2,
    score3,
    benchmark
) {
    if (checkNotZero(score1) && checkNotZero(score2) && checkNotZero(score3)) {
        let total = score1 + score2 + score3 + (location + user);
        document.getElementById("txtResult").innerHTML =
            total >= benchmark
                ? "Bạn đã đậu. Tổng điểm: " + total
                : "Bạn đã rớt. Tổng điểm: " + total;
    } else
        document.getElementById("txtResult").innerHTML =
            "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
}
// bài 2

export function calcElecBill(consumedKW) {
    const kw_1 = 500; // Giá điện cho 50 kWh đầu
    const kw_2 = 650; // Giá điện từ 51-100 kWh
    const kw_3 = 850; // Giá điện từ 101-200 kWh
    const kw_4 = 1100; // Giá điện từ 201-350 kWh
    const kw_5 = 1300; // Giá điện trên 350 kWh

    let totalBill = 0;

    if (consumedKW > 0 && consumedKW <= 50) {
        totalBill = consumedKW * kw_1;
    } else if (consumedKW > 50 && consumedKW <= 100) {
        totalBill = 50 * kw_1 + (consumedKW - 50) * kw_2;
    } else if (consumedKW > 100 && consumedKW <= 200) {
        totalBill = 50 * kw_1 + 50 * kw_2 + (consumedKW - 100) * kw_3;
    } else if (consumedKW > 200 && consumedKW <= 350) {
        totalBill =
            50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (consumedKW - 200) * kw_4;
    } else if (consumedKW > 350) {
        totalBill =
            50 * kw_1 +
            50 * kw_2 +
            100 * kw_3 +
            150 * kw_4 +
            (consumedKW - 350) * kw_5;
    } else {
        alert("Số kWh không hợp lệ! Vui lòng nhập lại");
        return;
    }

    const formattedBill = new Intl.NumberFormat("vn-VN").format(totalBill);
    return formattedBill;
}

export function calcTax(user, salary) {
    const taxableIncome = salary - 4000000 - 1600000 * user;

    let tax = 0;
    if (taxableIncome > 0 && taxableIncome <= 60000000) {
        tax = taxableIncome * 0.05; // 5% thuế
    } else if (taxableIncome > 60000000 && taxableIncome <= 120000000) {
        tax = taxableIncome * 0.1; // 10% thuế
    } else if (taxableIncome > 120000000 && taxableIncome <= 210000000) {
        tax = taxableIncome * 0.15; // 15% thuế
    } else if (taxableIncome > 210000000 && taxableIncome <= 384000000) {
        tax = taxableIncome * 0.2; // 20% thuế
    } else if (taxableIncome > 384000000 && taxableIncome <= 624000000) {
        tax = taxableIncome * 0.25; // 25% thuế
    } else if (taxableIncome > 624000000 && taxableIncome <= 960000000) {
        tax = taxableIncome * 0.3; // 30% thuế
    } else if (taxableIncome > 960000000) {
        tax = taxableIncome * 0.35; // 35% thuế
    } else {
        alert("Số tiền thu nhập không hợp lệ");
        return;
    }

    const formattedTax = new Intl.NumberFormat("vn-VN").format(tax);
    return formattedTax;
}

function calcTotal(a, b, c, d, e, f) {
    let total = a + b + c * d;
    if (e > 10) {
        total += (c - 10) * f;
    }
    return total;
}
// Bài 4
export function calcNet(customerType, premiumChannels, connectionsInput) {
    let totalBill = 0;

    if (customerType === "business") {
        totalBill = calcTotal(15, 75, 50, premiumChannels, connectionsInput, 5);
    } else if (customerType === "residential") {
        totalBill = calcTotal(4.5, 20.5, 7.5, premiumChannels, 0, 0);
    } else {
        alert("Hãy chọn loại khách hàng");
        return;
    }
    return totalBill;
}
