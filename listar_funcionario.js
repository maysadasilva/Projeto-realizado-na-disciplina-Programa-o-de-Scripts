function listar_funcionario(lista) {
    let auxHtml = "";
    for (let i = 0; i < lista.length; i++) {
        auxHtml += '<tr>' +
            '<td>' + lista[i].nome + '</td>' +
            '<td>' + lista[i].email + '</td>' +
            '<td>' + lista[i].linkedln + '</td>' +
            '<td>' + lista[i].endereco + '</td>' +
            '<td>' + lista[i].bairro + '</td>' +
            '<td>' + lista[i].complemento + '</td>' +
            '<td>' + lista[i].numero + '</td>' +
            '<td>' + lista[i].cidade + '</td>' +
            '<td>' + lista[i].estado + '</td>' +
            '<td>' + lista[i].pais + '</td>' +
            '<td>' + lista[i].estadocivil + '</td>' +
            '<td>' + lista[i].celular + '</td>' +
            '<td>' + lista[i].adimissao + '</td>' +
            '<td>' + lista[i].cargo + '</td>' +
            '<td>' + lista[i].remuneracao + '</td>' +
            '<td>' + lista[i].formacao + '</td>' +
            '<td>' + lista[i].ultima + '</td>' +
            '</tr>';
    }
    return auxHtml;
}
