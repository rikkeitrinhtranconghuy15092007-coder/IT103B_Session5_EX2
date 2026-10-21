const rawTicketCode = "   med-card-0428-ut   ";

const cleanTicketCode = rawTicketCode.trim().toUpperCase();

const isValidPrefix = cleanTicketCode.startsWith("MED-");

const firstDashIndex = cleanTicketCode.indexOf("-");
const secondDashIndex = cleanTicketCode.indexOf("-", firstDashIndex + 1);

const departmentCode = cleanTicketCode.slice(firstDashIndex + 1, secondDashIndex);

const isPriority = cleanTicketCode.includes("-UT");

const displayCode = cleanTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Có thẻ ưu tiên (-UT):", isPriority);
console.log("Chuỗi in phiếu:", displayCode);