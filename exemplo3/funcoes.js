function ola(texto) {
    return `Olá ${texto}`;
}

// export default ola; // ESM + atual
// export {ola};
module.exports = ola; // CommonJS