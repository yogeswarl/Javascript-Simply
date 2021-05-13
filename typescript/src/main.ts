const fullName = (givenName : string, familyName: string): string => {
  if(familyName == null){
    return "enter family name";
  }
  return givenName.concat(familyName);
}
console.log(fullName("hello",""))