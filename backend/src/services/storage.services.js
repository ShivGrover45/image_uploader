const ImageKit=require('@imagekit/nodejs')


const imagekit=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function upload(buffer){

    console.log(typeof buffer)
    const result =await imagekit.files.upload({
        file:buffer.toString('base64'),
        fileName:"demo.jpg"
    })
    console.log(result)
    return result
}

module.exports=upload