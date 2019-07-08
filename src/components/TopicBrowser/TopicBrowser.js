import React, { Component } from 'react';

// Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from "../Topics/FilterString"
import Palidrome from '../Topics/Palindrome'
import Sum  from '../Topics/Sum'


export default class TopicBrowser extends Component {
  render() {
    return (
      <div>
          <EvenAndOdd />
          <FilterObject />
          <FilterString />
          <Palidrome />
          <Sum />
      </div>
    )
  }
}
