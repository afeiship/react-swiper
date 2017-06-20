import './dev.scss';

import ReactSwiper from './main';

class App extends React.Component {
  state = {
    items1:[
      require('./assets/1_s.jpg'),
      require('./assets/2_s.jpg'),
      require('./assets/3_s.jpg'),
      require('./assets/4_s.jpg'),
    ],
    items2:[
      require('./assets/3_s.jpg'),
      require('./assets/4_s.jpg'),
      require('./assets/5_s.jpg'),
    ]
  };

  _click1 = (e) =>{
      const {items1,items2} = this.state;
      this.setState({
        items1:items2,
        // items2:items1
      });
  };

  constructor(props){
    super(props);
    window.demo = this;
  }

  render(){
    const {items1,items2} = this.state;
    return (
      <div className="hello-swiper">
        <button onClick={this._click1}>Switch Items</button>

        <h1>Has dots</h1>
        <ReactSwiper>
          {items1.map((item,index)=>{
            return (<img key={index} src={item} />)
          })}
        </ReactSwiper>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
