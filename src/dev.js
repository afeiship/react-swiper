import './dev.scss';
import ReactSwiper from './main';


class App extends React.Component {
  render(){
    return (
      <ReactSwiper
        height='270px'
        items={[
        {
            url:require('./assets/1.jpg'),
            index:1
        },
        {
            url:require('./assets/2.jpg'),
            index:2
        },
        {
            url:require('./assets/3.jpg'),
            index:3
        }
      ]}>
      </ReactSwiper>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
