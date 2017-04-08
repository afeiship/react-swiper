import './dev.scss';
import ReactSwiper from './main';


class App extends React.Component {
  _getItemTemplate(item,index){
    return (
      <a href={item.href}>
        <img src={item.url} data-index={index} />
      </a>
    )
  }

  render(){
    const items1 = [
      require('./assets/1_s.jpg'),
      require('./assets/2_s.jpg'),
      require('./assets/3_s.jpg'),
      require('./assets/4_s.jpg'),
    ];
    const items2 = [
      require('./assets/3_s.jpg'),
      require('./assets/4_s.jpg'),
      require('./assets/5_s.jpg'),
    ];
    return (
      <div className="hello-swiper">
        <ReactSwiper>
          {items1.map((item,index)=>{
            return (<img key={index} src={item} />)
          })}
        </ReactSwiper>
        <ReactSwiper
          height='200px'
          dot={false}>
          {items2.map((item,index)=>{
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
