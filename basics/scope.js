let varOne = 'var1';
if(true) {
    console.log(varOne, '1');
    let varTwo = 'var2';
    console.log(varTwo, '2A');
    // console.log(varThree, '3A'); // Error
    if (true) {
        console.log(varTwo, '2B');
        let varThree = 'var3';
        console.log(varThree, '3B');
    }
}
