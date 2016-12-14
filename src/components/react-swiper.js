import './style.scss';
import classNames from 'classnames';
import Swipeable from 'react-swipeable';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    items:React.PropTypes.array,
    height:React.PropTypes.string,
  };

  static defaultProps = {
    items:[]
  };

  constructor(props){
    super(props);
    this.fomratItems();
  }

  fomratItems(){
    var items = this.props.items;
    var first = items[0];
    var last = items[items.length - 1];
    items.push(first);
    items.unshift(last);
  }

  initialTranslate(){

  }

  render(){
    return (
      <div style={this.props.style} className={classNames('react-swiper',this.props.cssClass)}>
        <Swipeable>
          <div className="react-swiper-wrapper">
            <ul className="react-swiper-scroller" style={{width:`${this.props.items.length*100}%`,height:this.props.height}}>
              {this.props.items.map(function(item,index){
                return (
                  <li key={index} style={{ width:`${100/this.props.items.length}%`,height:this.props.height}}>
                    <img src={item.url} />
                  </li>
                )
              }.bind(this))}
            </ul>
          </div>
        </Swipeable>
      </div>
    );
  }
}
