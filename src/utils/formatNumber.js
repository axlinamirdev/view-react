export const formatMonto = (totalMonto) => {
    let inicial = "";
    if ((totalMonto.toString().indexOf("-") === 0)) {
        totalMonto = totalMonto.toString().replace("-", "");
        inicial = "-";
    }
    totalMonto = parseFloat(totalMonto).toFixed(2);
    let ingresoTotal = totalMonto.toString().split(".");
    let viewTotal = inicial + decimales(ingresoTotal, formatMontoDecimal(ingresoTotal[0]));
    

    return viewTotal;
}

const decimales = (resultado, numero) => {
    let decimal = "00";
    if (resultado.length === 2) {
        decimal = resultado[1];
    }
    if(parseInt(decimal)===0){
        return numero
    }
    return numero + "," + decimal;
}

const formatMontoDecimal = (num) => {
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.')
        num = num.split('').reverse().join('').replace(/^[\.]/, '') //eslint-disable-line
        return num;
    }
}

export const verifyPrice = (price, type) => {
    let priceFormat = `USD 0`
    if(typeof price!=="undefined"){
        priceFormat = `$ ${formatMonto(price)}`
	
        if(type==="new" && Number(price) < 300000){
            priceFormat = `USD ${formatMonto(price)}`
        }
    }
	

	return priceFormat
}