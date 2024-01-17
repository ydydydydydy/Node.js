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

const runTasks = async ()=>{
    // try, catch 구문을 사용
    try {
        let result = await increase(0);
        console.log(result); // 10
        result = await increase(result);
        console.log(result); // 20
    } catch (error) {
        console.log(error);
    }
}
runTasks();