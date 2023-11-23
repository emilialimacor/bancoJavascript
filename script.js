 // Objeto Banco
 const Banco = {
    conta: 123456,
    saldo: 1000,
    tipoConta: 'Corrente',
    agencia: '001',
    buscarSaldo: function () {
      return this.saldo;
    },
    deposito: function (valor) {
      this.saldo += valor;
      return this.saldo;
    },
    saque: function (valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        return this.saldo;
      } else {
        return 'Saldo insuficiente';
      }
    },
    numeroConta: function () {
      return this.conta;
    }
  };

  // Funções para interação com a página
  function buscarSaldo() {
    exibirResultado(Banco.buscarSaldo());
  }

  function realizarDeposito() {
    const valor = parseFloat(prompt('Digite o valor do depósito:'));
    if (!isNaN(valor)) {
      exibirResultado(Banco.deposito(valor));
    } else {
      exibirResultado('Valor inválido');
    }
  }

  function realizarSaque() {
    const valor = parseFloat(prompt('Digite o valor do saque:'));
    if (!isNaN(valor)) {
      exibirResultado(Banco.saque(valor));
    } else {
      exibirResultado('Valor inválido');
    }
  }

  function obterNumeroConta() {
    exibirResultado(Banco.numeroConta());
  }

  function exibirResultado(mensagem) {
    document.getElementById('output').innerText = mensagem;
  }