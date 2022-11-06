import React from 'react';
// import React, { Components } from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
// import ClickCounter from './components/ClickCounter';
import Count from './components/Count';
import Hover from './components/Hover';
// import Hover from './components/Hover';
// import User from './components/User';
// import PortalsDemo from './components/PortalsDemo';
// import FocusInput from './components/FocusInput';
// import RefDemo from './components/RefDemo';
// import FragmentDemo from './components/FragmentDemo';
// import InLine from './components/InLine';
// import NameList from './components/NameList';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import EventBind from './components/EventBind';
//  import Greet from './components/Greet';
//  import Welcome from './components/Welcome';
//  import Hello from './components/Hello';
//  import FunctionClick from './components/FunctionClick';
// import StyleSheet from './components/StyleSheet';
// import './appStyles.css';
// import styles from './appStyles.module.css'
// import Form from './components/Form';

// class App extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }


class App extends React.Component {
  render() {
   return (
      <div className="App">
        <Count render={(Count, incrementCount) =>(
        <ClickCounter Count={Count}
         incrementCount={incrementCount}  />
         )} />
          <Count render={(Count, incrementCount) =>(
        <Hover Count={Count}
         incrementCount={incrementCount}  />
         )} />
        {/* <ClickCounter />
        <Hover />
        <User name={(isLogedIn) => isLogedIn ? 'Raja' : 'Guest'} /> */}
        {/* <PortalsDemo /> */}
        {/* <FocusInput /> */}
        {/* <RefDemo /> */}
        {/* <FragmentDemo /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <InLine /> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
       {/* <FunctionClick />   */}
     {/* <Greet name='raja' heroName='Rajasekhar'>
      <p>This is my Name</p>
     </Greet>
     <Greet name='Ram' heroName='Raj' />
     <Greet name='raji' heroName='Rajarni'/>
       <Welcome /> 
      <Hello />  */}
     </div>
   );
 }
}

export default App;
