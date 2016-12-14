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
    return (
      <div class="hello-swiper">
        <ReactSwiper
          height='270px'
          itemTemplate={this._getItemTemplate.bind(this)}
          items={[
          {
              url:require('./assets/1_s.jpg'),
              href:'#1',
              index:1
          },
          {
              url:require('./assets/2_s.jpg'),
              href:'#2',
              index:2
          },
          {
              url:require('./assets/3_s.jpg'),
              href:'#3',
              index:3
          },
          {
              url:require('./assets/4_s.jpg'),
              href:'#4',
              index:4
          }
        ]}>
        </ReactSwiper>
        <ReactSwiper
          height='200px'
          dot={false}
          items={[
          {
              url:require('./assets/4_s.jpg'),
              href:'#1',
              index:1
          },
          {
              url:require('./assets/5_s.jpg'),
              href:'#2',
              index:2
          },
          {
              url:require('./assets/6_s.jpg'),
              href:'#3',
              index:3
          }
        ]}>
        </ReactSwiper>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
