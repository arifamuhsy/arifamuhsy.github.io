var TidakKenaPajak

function penghasilanKenaPajak(annualIncome){
    var TidakKenaPajak = 50000000
    var pkp = annualIncome - TidakKenaPajak
    if (pkp <= 200000000){
        pkp *= .1
    }

    else if (pkp <= 450000000 && pkp > 200000000){
        pkp *= .15
    }

    else if (pkp > 450000000){
        pkp *= .2
    }
    if (pkp < 0){
        return 0
    }
    return pkp
}


function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    // console.log(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount)
    return penghasilanKenaPajak(annualIncome)
}
console.log("Pajak",calculateTax(2024,'arifa',350000000,'menikah',2))