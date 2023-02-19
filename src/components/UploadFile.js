import React from "react";
import { FileUpload } from "primereact/fileupload";

export default function UploadFile() {
  // const form = formidable({multiples: true})
  const uploadCallback = (event) => {
    const {xhr} = event
    const {response} = xhr
    const {data} = JSON.parse(response)

  };
  return (
    <div className="card">
      <FileUpload
        name="demo"
        url={"/api/uploadFile"}
        onUpload={uploadCallback}
        multiple
        accept="image/*"
        maxFileSize={1000000}
        emptyTemplate={
          <p className="m-0">Drag and drop files to here to upload.</p>
        }
      />
    </div>
  );
}
