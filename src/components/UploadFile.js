import React, { useState } from "react";
import { FileUpload } from "primereact/fileupload";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
const Web3 = require("web3");

export default function UploadFile({ auth }) {
  const [listFiles, setListFiles] = useState([]);
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

  const web3 = new Web3(auth.provider);
  const contract = new web3.eth.Contract(
    contractAbi,
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  );

  console.log(auth.user.address);

  const uploadCallback = (event) => {
    const { xhr } = event;
    const { response } = xhr;
    const { data } = JSON.parse(response);
    contract.methods
      .saveFileCID(data.Name, data.Hash)
      .send(
        { from: `${auth.user.address}` },
        function (error, transactionHash) {
          console.log(transactionHash);
        }
      );
  };

  const getFiles = async () => {
    await contract.methods
      .getFiles()
      .call({ from: `${auth.user.address}` }, function (error, result) {
        setListFiles(result);
        listFiles.map((res) => {
          console.log(res[1]);
        });
        console.log(typeof listFiles);
      });
  };

  return (
    <div
      className="card"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <h2 style={{ margin: "2rem", fontSize: "2rem" }}>Uploading Files</h2>
      <p style={{ margin: "2rem", fontSize: "1.4rem" }}>
        Before uploading your files kindly do the following steps:
      </p>
      <ul
        style={{
          marginLeft: "4rem",
          marginBottom: "2rem",
          fontSize: "1.2rem",
          lineHeight: "1.6rem",
        }}
      >
        <li>
          Sign the transaction to add HyperSpace Testnet to your Arcana Wallet.
        </li>
        <li>
          After approving, you will see Hyperspace Testnet in your list of
          avaliable networks. Select it.
        </li>
        <li>
          Top up your wallet through Hyperspace Faucets to have some tFil.
        </li>
        <li>Now you can upload your files.</li>
      </ul>

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

      {/* List Files */}

      <h2 style={{ margin: "2rem", marginTop: "4rem", fontSize: "2rem" }}>
        Fetch Files
      </h2>

      <p
        style={{
          margin: "2rem",
          fontSize: "1.4rem",
          maxWidth: "52rem",
          textAlign: "justify",
        }}
      >
        You can view your stored files here by clicking on to the button. This
        will show your stored files <b>Hashed Names</b> along with their
        respective <b>CID</b> using which you can fetch your files.
      </p>

      <Button
        label="List Files"
        onClick={getFiles}
        style={{ marginLeft: "4rem" }}
      />

      <table
        style={{ margin: "4rem", display: "flex", flexDirection: "column" }}
      >
        <tr
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4rem",
            justifyContent: "space-between",
          }}
        >
          <th style={{ fontSize: "2rem", textAlign: "center" }}>Filename</th>
          <th style={{ fontSize: "2rem", textAlign: "center" }}>CID</th>
        </tr>

        {listFiles.map((res) => (
          <tr
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10",
              justifyContent: "space-between",
              marginTop: "12px",
              fontSize: "20px",
            }}
          >
            <td style={{ minWidth: "5rem", textAlign: "left" }}>{res[0]}</td>
            <td style={{ minWidth: "5rem", textAlign: "left" }}>{res[1]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
