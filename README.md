# h3alth - Medical Record Storing Facility over Blockchain

h3alth is a project build for [ETHforAll](https://ethforall.devfolio.co/overview) hackathon hosted on Devfolio. Made by [Sudhanshu Srivastava](https://github.com/Codered9/) under the team name **LonelyColon**. 

**Deployed Link: [h3alth](https://h3alth-gg4hz8sny-codered9.vercel.app)
https://h3alth-gg4hz8sny-codered9.vercel.app
**For smart contract address go the Smart Contract section.**

# Problem Statement

In the current era, a common person stores his/her medical records on a centralized database of some Hospital. Government or Third-Party like Apple Health. The issues in this way are as follows:

 - Control of Database owner or Server Owner over the data of the people.
 - If a hacker attacks successfully on the centralized server, the hacker will get access to all the crucial medical record.

# Proposed Solution

Instead of storing the data on centralized servers, we can store the data over off-chain storage solutions like Filecoin, IPFS etc. And can grant access to the owner via NFT tokens or Wallet Sign ins.

## Advantages

 - Decentralized storage ensuring no third party can access the data.
 - Blockchain hacks are techincally and economically very hard to perform thus making it much more secure.
 

## Disadvantages

- Increased cost due to mining charges and transaction charges.


# Technical Description

## Authentication

User authentication is being handled by [Arcana](https://www.arcana.network/). Arcana sign ins the user via Google sign in or Passwordless login via Email. Post login a user recieves a Arcana Wallet access in which he/she can store the assests required for storing the files.
- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.

## Storage

Decentralized storage is being handled by [Lighthouse.storage](https://www.lighthouse.storage/). Lighthouse is IPFS and Filecoin backed storage technology which automatically bargains with the storage provider nodes and stores our data over off-chain nodes and returns CID.

## Smart Contract

The Smart Contract is pretty basic and simple. In the contract there is a mapping of the sender to an array which stores name of the file and CID of the file, basically creating an index for the user. Which can list all the files stored on blockchain. The signer can only see his/her data and no ones else as ensured by the smart contract.

The smart contract is deployed on Hyperspace Testnet. And you can view the contract using the chain explorer like [Filfox Explorer](https://hyperspace.filfox.info/en/address/0x17D1AEA831d2e322cCE77dBEb96aac134a345eDa).
**The Contract Address on Hyperspace is: `0x17D1AEA831d2e322cCE77dBEb96aac134a345eDa`**


## Future Scope
- Encrypting the files being stored with the private key of the users wallet so the files cannot be read by others even after getting access to it.
- Implementing access right management system so a user can share file with his/her doctor, consultant or any other third party of their choice.
- Medical labs can directly push reports to the users decentralized storage without compromising it.

## Things which were the most difficult
- Connecting smart contract to the web app and signing the transactions with Arcana Wallet.
- Understanding and implementing the working of Lighthouse storage.

## Tracks that I have applied for
- Filecoin - Top 3 Hacks and Prize Pool
- Arcana Network - Arcana Auth Implementation and Prize Pool