function sides(literals, ...expressions) {
    let s1 = (expressions[1] + Math.sqrt(expressions[1] * expressions[1]  - (16 * expressions[0]))) / 4;

    let s2 = (expressions[1] - Math.sqrt(expressions[1] * expressions[1]  - (16 * expressions[0]))) / 4;

    let array = [s1, s2];

    array =  array.sort(function (a,b) {return a-b;});

    return array;
}