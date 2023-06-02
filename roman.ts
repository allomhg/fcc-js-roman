function convertToRoman(num) : string {
  let romString = '';

  while ( num > 0 ) {
    if ( num >= 1000 ) {
      romString += 'M';
      num -= 1000;
    } else if ( num >= 900 ) {
      romString += 'CM';
      num -= 900;
    } else if ( num >= 500 ) {
      romString += 'D';
      num -= 500;
    } else if ( num >= 400 ) {
      romString += 'CD';
      num -= 400;
    } else if ( num >= 100 ) {
      romString += 'C';
      num -= 100;
    } else if ( num >= 90 ) {
      romString += 'XC';
      num -= 90;
    } else if ( num >= 50 ) {
      romString += 'L';
      num -= 50;
    } else if ( num >= 40 ) {
      romString += 'XL';
      num -= 40;
    } else if ( num >= 10 ) {
      romString += 'X';
      num -= 10;
    } else if ( num >= 9 ) {
      romString += 'IX';
      num -= 9;
    } else if ( num >= 5 ) {
      romString += 'V';
      num -= 5;
    } else if ( num >= 4 ) {
      romString += 'IV';
      num -= 4;
    } else if ( num >= 1 ) {
      romString += 'I';
      num -= 1;
    } 
  }
  console.log(romString);
  return romString;
}

convertToRoman(36);
convertToRoman(1001);