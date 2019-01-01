const getLikeCounter = () => {
    console.log('xxxxxxxxxxx');
    // return ApiService.get('/url-to-api')
    //fake
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(101)
                // resolve(-1)
                // reject(new Error('Lỗi gì đó'))
            }, 1000)
        }
    )
}

export default {
    getLikeCounter
}