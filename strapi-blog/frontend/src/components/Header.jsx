import { useEffect, useState } from 'react';

const Header = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/categories")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          console.log(result)
        },
        (error) => {
          throw new Error("this is error")
        }
      )
  }, [])

  return(
    <header className="header">
       <ul>
        {items.map(item => (
          <li key={item.id}>
            <a href ={item.categoryName}> {item.categoryName}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
export default Header;