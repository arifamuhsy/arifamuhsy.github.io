var TidakKenaPajak
var pkp

function penghasilanKenaPajak(annualIncome,marriageStatus,dependentChildrenCount){
    var TidakKenaPajak = statusPernikahan(marriageStatus,dependentChildrenCount)
    pkp = annualIncome - TidakKenaPajak
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

function Children(dependentChildrenCount){
    var ChildrenCount = dependentChildrenCount * 15000000
    return ChildrenCount
}

function statusPernikahan(marriageStatus,dependentChildrenCount){
    if (marriageStatus == 'cerai'){
        TidakKenaPajak = 70000000
        return TidakKenaPajak + Children(dependentChildrenCount)
    }
    else if (marriageStatus == 'menikah'){
        TidakKenaPajak = 60000000
        return TidakKenaPajak + Children(dependentChildrenCount)
    }
    else if(marriageStatus == 'tidak menikah'){
        TidakKenaPajak = 50000000
        return TidakKenaPajak + Children(dependentChildrenCount)
    }
    return TidakKenaPajak
}


function calculateTax(taxYear, name, annualIncome, marriageStatus, dependentChildrenCount) {
    var pph = penghasilanKenaPajak(annualIncome,marriageStatus,dependentChildrenCount)
    if(pph > 0){
        pph = pph - (pph*0.1)
        pph -= 200000000
    }
    if(pph > 0){
        pph = pph - (pph*0.2)
        pph -= 250000000
    }
    if(pph > 0){
        pph = pph - (pph*0.1)
        pph -= 200000000
    }
    if (pph < 0){
        pph = 0
    }

    console.log(pph)


    return penghasilanKenaPajak(annualIncome,marriageStatus,dependentChildrenCount)
}
console.log("Pajak",calculateTax(2024,'ujang',255000000,'tidak menikah',0))