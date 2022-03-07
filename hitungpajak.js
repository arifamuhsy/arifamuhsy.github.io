const TidakKenaPajak = 50000000
function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    // console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    var pkp = annualIncome - TidakKenaPajak
    if (pkp <= 200000000){
        return pkp * .1
    }

    if (pkp <= 450000000 && pkp > 200000000){
        return pkp * .15
    }

    if (pkp > 450000000){
        return pkp * .2
    }
}
console.log("Pajak",calculateTax(2024,'arifa',350000000,'menikah',2))