import React from "react";
import { FileUpload } from "primereact/fileupload";
const Web3 = require('web3');
// import { useAuth } from "@arcana/auth-react";
// const { user, connect, isLoggedIn, loading, loginWithSocial, provider } = useAuth();

export default function UploadFile({auth}) {
  console.log(auth.user.address);
  const contractAbi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_filename",
          type: "string",
        },
        {
          internalType: "string",
          name: "_cid",
          type: "string",
        },
      ],
      name: "saveFileCID",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getFiles",
      outputs: [
        {
          internalType: "string[][]",
          name: "",
          type: "string[][]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  // const form = formidable({multiples: true})
  const uploadCallback = (event) => {
    const web3 = new Web3(auth.provider);
    const contract = new web3.eth.Contract(contractAbi, process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
    // web3.eth.getAccounts(console.log)
    const { xhr } = event;
    const { response } = xhr;
    const { data } = JSON.parse(response);
    console.log(data)
    contract.methods.getFiles().call({from: `${auth.user.address}`}, function(error, result){
      console.log(result)  
    })

    contract.methods.saveFileCID(data.Name , data.Hash).send({from: `${auth.user.address}`}, function(error, transactionHash){
      console.log(transactionHash)
    } )
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
