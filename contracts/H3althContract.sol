// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract H3althContract{
    mapping(address => string[][]) private fileCIDstore;

    function saveFileCID(string memory _filename, string memory _cid) public {
        fileCIDstore[msg.sender].push([_filename, _cid]);
    }

    function getFiles() public view returns(string [][] memory){
        return fileCIDstore[msg.sender];
    }
}