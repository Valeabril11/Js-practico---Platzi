let array = [];

for (let i = 1; i <= 100; i++) {
    let frase = ''
    if (i % 3 === 0) { frase = 'hola ' }
    if (i % 5 === 0) { frase += 'como estas' }
    if (i % 3 !== 0 && i % 5 != 0) { array.push(i) }
    else{
        array.push(frase);
    }
}
array.forEach(Element => console.log(Element))

for (let i=1 ;i<=100; i++){
    let frase=''
    i%3===0 ? frase='hola ': frase=i
    console.log(frase)
}