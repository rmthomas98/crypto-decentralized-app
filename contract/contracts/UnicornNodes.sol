//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract UnicornNodes is ERC721Enumerable, Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    uint public maxSupply = 5000;
    uint public price = 0.05 ether;
    uint public maxPerMint = 10;

    string public baseTokenURI;

    bool publicMint = false;
    bool whitelistMint = false;

    constructor(string memory baseURI) ERC721("Unicorn Nodes", "CORNS") {
      setBaseURI(baseURI);
    }

    function _baseURI() internal view virtual override returns (string memory) {
      return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
      baseTokenURI = _baseTokenURI;
    }

    function setPublicMint(bool _publicMint) public onlyOwner {
      publicMint = _publicMint;
    }

    function setWhitelistMint(bool _whitelistMint) public onlyOwner {
      whitelistMint = _whitelistMint;
    }

    function setPrice(uint _price) public onlyOwner {
      price = _price;
    }

    function pause() public onlyOwner {
      whitelistMint = false;
      publicMint = false;
    }

    function getSupply() public onlyOwner view returns (uint) {
      uint supply = _tokenIds.current();
      return supply;
    }

    function recoverSigner(bytes32 hash, bytes memory signature) public pure returns (address) {
      bytes32 messageDigest = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
      return ECDSA.recover(messageDigest, signature);
    }

    function devMint(uint _count) public onlyOwner {
      uint totalMinted = _tokenIds.current();
      require(totalMinted.add(_count) < maxSupply, "Not enough NFTs to mint");
      require(_count > 0, "You have to mint at least 1 NFT");
      for (uint i = 0; i < _count; i++) {
        _mintSingleNFT();
      }
    }

    function preSaleMint(uint _count, bytes32 hash, bytes memory signature) public payable {
      uint totalMinted = _tokenIds.current();
      require(whitelistMint, "Presale is not active.");
      require(totalMinted.add(_count) < maxSupply, "Not enough NFTs to mint");
      require(_count > 0 && _count <= maxPerMint, "Cannot mint specified number of NFTs");
      require(msg.value >= price.mul(_count), "Not enough ether to purchase NFTs");
      require(recoverSigner(hash, signature) == owner(), "Address is not whitelisted.");
      for (uint i = 0; i < _count; i++) {
        _mintSingleNFT();
      }
    }

    function mint(uint _count) public payable {
      uint totalMinted = _tokenIds.current();
      require(publicMint, "You cannot mint right now.");
      require(totalMinted.add(_count) < maxSupply, "Not enough NFTs to mint.");
      require(_count > 0 && _count <= maxPerMint, "Cannot mint specified number of NFTs.");
      require(msg.value >= price.mul(_count), "Not enough ether to purchase NFTs.");
      for (uint i = 0; i < _count; i++) {
        _mintSingleNFT();
      }
    }

    function _mintSingleNFT() private {
      uint newTokenID = _tokenIds.current();
      _safeMint(msg.sender, newTokenID);
      _tokenIds.increment();
    }

    function tokenBalanceOfOwner(address _owner) external view returns (uint) {
      uint tokenCount = balanceOf(_owner);
      return tokenCount;
    }

    function withdraw() public payable onlyOwner {
      uint balance = address(this).balance;
      require(balance > 0, "No ether to withdraw");
      (bool success, ) = (msg.sender).call{value: balance}("");
      require(success, "Transfer failed.");
    }
}