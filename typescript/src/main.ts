const fullName = (givenName : string, familyName: string): string => {
  if(familyName == null){
    return "enter family name";
  }
  return givenName.concat(familyName);
}

interface User {
  name: string;
  age?: number;
  welcomeMessage(): string;
}

const user : User = {
  name: "Sup",
  welcomeMessage(){
    return "Hello" + name;
  },
}

const username : string | null  = null