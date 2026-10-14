export function randomList (total: number): number[] {
    const ordem = Array.from({length: total}, (_, i) => i);
    const desordenado = [];

    for (let i = 0; i < total; i++) {
        const indice = Math.floor(Math.random() * (total - i));
        desordenado.push(ordem[indice]);
        ordem.splice(indice, 1);
    }

    return desordenado;
}
