

class Funcionario
{
    constructor(nome,email,linkedln,endereco,bairro,complemento,numero,cidade,estado,pais,
        estadocivil,celular,adimissao,cargo,remuneracao,formacao,ultima)
        {
            this.nome=nome;
            this.email=email;
            this.linkedln=linkedln;
            this.endereco=endereco;
            this.bairro=bairro;
            this.complemento=complemento;
            this.numero=numero;
            this.cidade=cidade;
            this.estado=estado;
            this.pais=pais;
            this.estadocivil=estadocivil;
            this.celular=celular;
            this.adimissao=adimissao;
            this.cargo=cargo;
            this.remuneracao=remuneracao;
            this.formacao=formacao;
            this.ultima=ultima;
        }
}

listaFuncionarios=[];
posicao='';

function listar(lista)
{
    let auxHtml='';
    for(let i=0;i<lista.length;i++)
    {
        auxHtml+= '<tr>'+
                   '<td>'+lista[i].nome + '</td>'+
                   '<td>'+lista[i].email + '</td>'+
                   '<td>'+lista[i].linkedln + '</td>'+
                   '<td>'+lista[i].endereco + '</td>'+
                   '<td>'+lista[i].bairro + '</td>'+
                   '<td>'+lista[i].complemento + '</td>'+
                   '<td>'+lista[i].numero + '</td>'+
                   '<td>'+lista[i].cidade + '</td>'+
                   '<td>'+lista[i].estado + '</td>'+
                   '<td>'+lista[i].pais + '</td>'+
                   '<td>'+lista[i].estadocivil + '</td>'+
                   '<td>'+lista[i].celular + '</td>'+
                   '<td>'+lista[i].adimissao + '</td>'+
                   '<td>'+lista[i].cargo + '</td>'+
                   '<td>'+lista[i].remuneracao + '</td>'+
                   '<td>'+lista[i].formacao + '</td>'+
                   '<td>'+lista[i].ultima + '</td>'+
                   '<td>'+ 
                    '<a href="#" class="btn btn-warning btAlterar" rel="'+ i +'">'+ // cria um link pra os botões
                        'Alterar'+
                    '</a>'+
                  '</td>'+

                    '<td>'+
                    '<a href="#" class="btn btn-danger btExcluir" rel="'+ i +'">'+
                        'Excluir'+
                    '</a>'+
                    '</td>'+

                   '</tr>';
    }
    return auxHtml;
}

$(document).ready(function()
{
    $('#btSalvar').click(()=>
    {
        let nome=$('#nomecompleto').val();
        let email=$('#email').val();
        let linkedln=$('#linkedln').val();
        let endereco=$('#endereco').val();
        let bairro=$('#bairro').val();
        let complemento=$('#complemento').val();
        let numero=$('#numero').val();
        let cidade=$('#cidade').val();
        let estado=$('#estado').val();
        let pais=$('#pais').val();
        let estadocivil=$('#estadocivil').val();
        let celular=$('#celular').val();
        let adimissao=$('#admissao_funcionario').val();
        let cargo=$('#cargo_funcionario').val();
        let remuneracao=$('#remuneracao').val();
        let formacao=$('#formacao').val();
        let ultima=$('#ultima').val();

        if(nome!='' && email!='' && linkedln!='' && endereco!='' && bairro!='' && complemento!='' && numero!=''
        && cidade!='' && estado!='' && pais!='' &&  estadocivil!='' && celular!='' && adimissao!='' && cargo!= '' && 
        remuneracao!='' && formacao!='' && ultima!='' )
        {
            funcionario=new Funcionario(nome,email,linkedln,endereco,bairro,complemento,
                numero,cidade,estado,pais,estadocivil,celular,adimissao,cargo,
                remuneracao,formacao,ultima);
            if(posicao== '')
            {
                listaFuncionarios.push(funcionario);
            }
            else
            {
                listaFuncionarios[posicao]=funcionario;
                posicao='';
            }
         

            $('#tabelafuncionario').html(listar(listaFuncionarios));
            alert('Dados salvos com sucesso!');
            $('input').val('');
        }
        else
        {
            alert('Informe todos os dados!');
        }


    });

    $('#tabelafuncionario').on('click', '.btAlterar', function()
    {
        posicao=$(this).attr('rel');
        $('#nome').val(listaFuncionarios[posicao].nome);
        $('#email').val(listaFuncionarios[posicao].email);
        $('#linkedln').val(listaFuncionarios[posicao].linkedln);
        $('#endereco').val(listaFuncionarios[posicao].endereco);
        $('#bairro').val(listaFuncionarios[posicao].bairro);
        $('#complemento').val(listaFuncionarios[posicao].complemento);
        $('#numero').val(listaFuncionarios[posicao].numero);
        $('#cidade').val(listaFuncionarios[posicao].cidade);
        $('#estado').val(listaFuncionarios[posicao].estado);
        $('#pais').val(listaFuncionarios[posicao].pais);
        $('#estadocivil').val(listaFuncionarios[posicao].estadocivil);
        $('#celular').val(listaFuncionarios[posicao].celular);
        $('#admissao_funcionario').val(listaFuncionarios[posicao].adimissao);
        $('#cargo_funcionario').val(listaFuncionarios[posicao].cargo);
        $('#remuneracao').val(listaFuncionarios[posicao].remuneracao);
        $('#formacao').val(listaFuncionarios[posicao].formacao);
        $('#ultima').val(listaFuncionarios[posicao].ultima);

    });

    $('#tabelafuncionario').on('click', '.btExcluir', function()
    {
        if(confirm('Deseja mesmo excluir as informações?'))
        {
            posicao=$(this).attr('rel');
            listaFuncionarios.splice(posicao,1);
            $('#tabelafuncionario').html(listar(listaFuncionarios));
        }
     

    });


});