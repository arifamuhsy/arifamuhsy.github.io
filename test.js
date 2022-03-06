const defaultNonTaxableIncome = 5000
const childrenTaxDeducation = 1000
const taxRate = .2

function calculateIncomeTax (annualIncome, ChildrenCount){
    var taxableIncome = annualIncome - defaultNonTaxableIncome

    if (ChildrenCount > 0){
        taxableIncome -= (childrenTaxDeducation*ChildrenCount)
    }
    if (taxableIncome < 0 ){
        return 0
    }
    return taxRate * taxableIncome
}

console.log(calculateIncomeTax(9250,2))