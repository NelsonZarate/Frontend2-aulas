interface carro {
	marca: string;
	modelo: string;
	ano?: number;
}

const MeuCarro: carro = {
	marca:"Volwkswagen",
	modelo:"Golf 4",
	ano: 1997
};

type MetodoDePagamento = "cartão" | "mbway" | "paypal" ;

interface Pagamento {
	valor: number;
	metodo: MetodoDePagamento;
	detalhes: string
}

function processarPagamento(pagamento: Pagamento):string{
	return pagamento.detalhes;
}