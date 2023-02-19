import formidable from "formidable";

const lighthouse = require("@lighthouse-web3/sdk");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {

  console.log("API hit")
  // console.log(req.body)
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    console.log(files)
    if (!files.demo) {
     return res.status(400).send("No file uploaded");
    }
    try {
      const apiKey = process.env.NEXT_PUBLIC_LIGHTHOUSE_API_KEY;
      const {data} = await lighthouse.upload(files.demo._writeStream.path, apiKey);
      console.log(data);
      return res.status(201).send({data});
    } catch (e) {
      console.log(e);
      return res.status(500).send("Error uploading files!");
    }
    return ;
  });
}
