const increase = number=>{
    const promise = new Promise((resolve, reject)=>{
        // resolve -> 성공, reject -> 실패
        setTimeout(()=>{
            // number 값에 +10 후 성공 처리
            const result = number+10
            resolve(result);
        }, 1000)
    })
    return promise;
}

increase(0)
.then(number=>{
    console.log(number); // 10
    return increase(number)
})
.then(number=>{
    console.log(number); // 20
    return increase(number)
})
.then(number=>{
    console.log(number); // 30
    return increase(number)
})
.then(number=>{
    console.log(number); // 40
    return increase(number)
})
.then(number=>{
    console.log(number); // 50
    return increase(number)
})
.catch(error=>{
    // 도중에 에러가 발생한다면 catch를 통해 알 수 있음
    console.log(error);
})