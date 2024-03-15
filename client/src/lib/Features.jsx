


const fileFormat =(url="")=>{
   
    const fileExt = url.split(".").pop();
    // console.log(fileExt);

    if(fileExt==='mp4' || fileExt==='webm' || fileExt==="ogg"){
        return "video";
    }
    
    if(fileExt==='jpg' || fileExt==='jpeg' || fileExt==='png' || fileExt==='gif'){
        return "image";
    }
    
    if( fileExt === 'mp3' || fileExt === 'wav'){
        return "audio";
    }


    return fileExt;
};

const transformImage = (url="" , width="100")=>{

}

export {fileFormat , transformImage};