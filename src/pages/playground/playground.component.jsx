import React from 'react'

import SHOP_DATA from "../shop/shop.data"

class Playground extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hats : SHOP_DATA
        }
    }

    render(){
       const {hats} = this.state;
       console.log(hats)
       return (
        <div>
          {
            hats.map(({id, title, ...others}) => (
                    <h1 key={id}>{id} : {title}</h1>
                ))
          }
        </div>
      );
    }
}

// une version plus simple :
class Playground_old extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hats : SHOP_DATA
        }
    }

    render(){
       const {hats} = this.state;
       console.log(hats)
       
       return (
        <div>
          {
            hats.map((item) => (
                    <div key={item.id}>{item.id} : {item.title}</div>
                ))
          }
        </div>
      );
    }
}


export default Playground
