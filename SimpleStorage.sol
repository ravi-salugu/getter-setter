// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract simpleStorage 
{
    uint x;   


function get() public view returns ( uint)
{
    return x;
}

function set(uint y) public {
    x=y;
}



}


