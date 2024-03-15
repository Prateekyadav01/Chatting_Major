import { FileOpen as FileOpenIcon } from '@mui/icons-material';
import React from 'react'
import { transformImage } from '../../lib/Features';

const RenderAttachment = (file , url) => {
    console.log(file)
    switch (file) {
        case "video":
            return <video controls src={url} preload='none' width={"200px"}/>
        
        case "image":
            return (
              <img src={url} alt="attachment" style={{
                width: "200px",
                height: "150px", 
                objectFit:"contain"
            }}/>
               
            );
           
        case "audio":
            return <audio controls src={url} preload='none' width={"200px"}/>
            

        default:
            return <FileOpenIcon/>
           
    }

}

export default RenderAttachment
