//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Akoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("Akoin", "AKN") public {
        _mint(msg.sender, initialSupply);
    }
}
