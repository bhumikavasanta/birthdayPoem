import React from 'react';
import SearchField from '../../components/atoms/SearchField/SearchField';
import SwitchButton from '../../components/atoms/SwitchButton/SwitchButton';

export default function AllLoans() {
  return (
    <>
      <h1>All Loans</h1>
      <p>All loans details</p>
      <SwitchButton />
      <SearchField />
    </>
  );
}
