pragma solidity ^0.5.0;

import "./bibaToken.sol";

contract ethSwap {
   string public name= "eth Swap Token Exchange";
   // creates a instance of bibaToken smart contract as token on which we can call methods of bibaToken
   bibaToken public token;

   constructor(bibaToken _token) public{
     token = _token;
   }
}
