const countNumbers = () => {
    let pos = 0, neg = 0;
    for (let i = 0; i < 4; i++) {
        let values = parseInt(prompt("Number: "));
         if (values >= 0) {
            pos+=1;
         }else {
            neg+=1;
         }
    }
    console.log("pos: " + pos);
    console.log("neg: " + neg);
}
countNumbers();


