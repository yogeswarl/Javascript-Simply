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
const voidedName =():void => {
  console.log("This is an example of void Data type")
}

const unknownVariable : unknown = "1";
const unknownToString : string = unknownVariable as string;


const someElement = document.querySelector('.element');
someElement.addEventListener('click',(e) => {
  const target = e.target as HTMLInputElement
  console.log(target.value);
})