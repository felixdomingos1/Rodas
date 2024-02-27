function geraNumeroDeFactura() {
    const firstNumber = new Date().getUTCMilliseconds()
    const year = new Date().getFullYear()

    return `${firstNumber}/${year}`;
}

export { geraNumeroDeFactura }