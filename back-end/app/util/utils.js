export const validaEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);    
} 

export const validaCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if (cnpj == '') return false;

    if (cnpj.length != 14) return false;

    return true;
}

export const calcularTotalVenda = (itens, formaPagamento) => {
    let total = 0;

    itens.forEach(item => {
        const quantidade = item.quantidade || 1;
        total += parseFloat(item.price) * quantidade;
    });

    if (formaPagamento.toLowerCase() === "dinheiro") {
        total = total * 0.95;
    }

    return total;
};
