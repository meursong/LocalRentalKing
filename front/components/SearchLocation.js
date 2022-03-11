import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_LOCAL} from "../reducers/user";

const SearchLocation = () => {
  const dispatch = useDispatch();
  const {local} = useSelector((state)=>state.user);
  const [address, setAddress] = useState("");

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    setAddress(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    dispatch({
      type: UPDATE_LOCAL,
      data: address,
    });
  }

  return (
    <>
      <DaumPostcode
        onComplete={handleComplete}
        adress={address}/>
      <h2>{address}</h2>
    </>
  );

}
export default SearchLocation;