const fullName = (givenName : string, familyName: string): string => {
  if(familyName == null){
    return "enter family name";
  }
  return givenName.concat(familyName);
}

interface UserInterface {
  name: string;
  age?: number;
  welcomeMessage(): string;
}

const user : UserInterface = {
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

class User {
  firstName: string;
  lastName?: string;
  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
const userclass = new User("Sup","S");
console.log(userclass.getFullName);

const addID = <T>(obj: T) => {
const id = Math.random().toString(10);
return {
    ...obj,
    id
  };
};

const addIdToUser = {
  name: 'Rose'
}
const result = addID(addIdToUser);
console.log(result)

enum Status {
  NotStarted,
  InProgress,
  Done
}