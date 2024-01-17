// 파라미터 값이 주어지면
// 1초 뒤에 10을 더해서 반환

const increase = (number, callback)=>{
    setTimeout(()=>{
        const result = number+10;
        if(callback){
            callback(result)
        }
    }, 1000)
}

// 1초 뒤에 10을 반환
increase(0, (result)=>{
    console.log(result); // 10
    increase(result, result=>{
        console.log(result); // 20
        increase(result, result=>{
            console.log(result); // 30
            increase(result, result=>{
                console.log(result); // 40
                increase(result, result=>{
                    console.log(result); // 50
                    increase(result, result=>{
                        console.log(result); // 60
                        increase(result, result=>{
                            console.log(result); // 70
                            increase(result, result=>{
                                console.log(result); // 80
                                increase(result, result=>{
                                    console.log(result); // 90
                                    increase(result, result=>{
                                        console.log(result); // 100
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})