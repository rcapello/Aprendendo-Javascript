const nome = "Silvana"
const sexo = "M"
const idade = 55
const contribuicao = 40

const calc_contribuicao = idade + contribuicao

    // verificação true ou false
    const homempode = sexo == "M" && contribuicao >= 35 && calc_contribuicao >= 95
    const mulherpode = sexo == "F" && contribuicao >= 30 && calc_contribuicao >= 85

    if (homempode || mulherpode) {
        console.log (`${nome}, Você pode se aposentar`)

    } else {
        console.log (`${nome}, Você não pode se aposentar`)
    }
