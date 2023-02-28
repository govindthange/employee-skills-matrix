import { ChangeEvent, useState } from 'react';
import { Button } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import axios from 'axios';

export default function FileUploadComponent() {
    const [file, setFile] = useState();
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }

        let formData = new FormData();

        formData.append("file", file);
        axios.post('https://httpbin.org/post', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (e) => {
                setProgress(Math.round( (e.loaded*100) / e.total ));
            }
        })
        .then((res) => { console.log(res)})
        .catch((err) => {console.log(err)});
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />

            <div>{file && `${file.name} - ${file.type}`}</div>

            <button onClick={handleUploadClick}>Upload</button>

            <LinearProgress variant="determinate" value={progress} />

        </div>
    );
}