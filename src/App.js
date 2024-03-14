import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchFeild, setSearchFeild] = useState("");
  const [monsters, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log(searchFeild);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFeild);
    });
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchFeild])

  const onSearchChange = (event) => {
    const searchFeildString = event.target.value.toLowerCase();
    setSearchFeild(searchFeildString);
    // this.setState(() => {
    //   return { searchFeild };
    // });
  };

  

  return (
    <div className="App">
      <h1 className="app-title">MONSTER ROLODEX</h1>
      <SearchBox
        onChangeHandeler={onSearchChange}
        placeholder="search monster"
        className="monster-search-box"
      />

      <CardList monsters={filteredMonsters} />
      {/* {
          filteredMonsters.map((monster) => {
            return <div key={monster.id}>
              <h1 >{monster.name}</h1>

            </div>
            
          })
        } */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchFeild: "",
//     };
//     // console.log('constructor');
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//     // console.log('componentDidMount');
//   }

//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchFeild = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchFeild };
//     });
//   };

//   render() {
//     // console.log('Render');

//     const { monsters, searchFeild } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchFeild);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">MONSTER ROLODEX</h1>
//         <SearchBox
//           onChangeHandeler={onSearchChange}
//           placeholder="search monster"
//           className="search-box"
//         />

//         <CardList monsters={filteredMonsters} />
//         {/* {
//           filteredMonsters.map((monster) => {
//             return <div key={monster.id}>
//               <h1 >{monster.name}</h1>

//             </div>

//           })
//         } */}
//       </div>
//     );
//   }
// }

export default App;
