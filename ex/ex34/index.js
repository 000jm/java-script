// try {
//     console.log('Início da execução do try');

//     unicycle;

//     console.log('Fim da execução do try -- nunca alcançado');

// } catch(err) {

//     console.log('Ocorreu um erro: ' + err.stack);

// } finally {
//     console.log('Isso sempre é executado');
// }

// console.log('...Então a execução continua');

// const json = '{"idade": 30}'

// try {
//     const user = JSON.parse(json)
//     console.log(user);
//     if (!user.name) {
//         // throw new SyntaxError('incomplete data: no name')
//     }
// } catch(e) {
//     console.log('json error: ' + e.name);
    
// }

try {
    const age = 31
    console.log('now age is: ' + age);
    if (age < 22) {
        throw new Error('user age is under 22')
    } else {
        console.log('u are ok');
        
    }
} catch(error) {
    console.log('error: ' + error.message);
    
}
