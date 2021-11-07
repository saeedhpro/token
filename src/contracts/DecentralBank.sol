pragma solidity ^0.8.0;

import './RWD.sol';
import "./Tether.sol";

contract DecentralBank {
    string public name = "Bank";
    address public owner;
    Tether public tether;
    RWD public rwd;

    address[] stackers;

    mapping(address => uint) public stackingBalance;
    mapping(address => bool) public hasStacked;
    mapping(address => bool) public isStacked;

    constructor(RWD _rwd, Tether _tether) public {
        tether = _tether;
        rwd = _rwd;
    }

    function depositTokens(uint _amount) public {
        require(_amount > 0, "amount cant be zero");
        tether.transferFrom(msg.sender, address(this), _amount);
        stackingBalance[msg.sender] += _amount;
        if(!hasStacked[msg.sender]) {
            stackers.push(msg.sender);
        }
        isStacked[msg.sender] = true;
        hasStacked[msg.sender] = true;
    }
}
