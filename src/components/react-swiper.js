import './style.scss';
import classNames from 'classnames';
import {ReactSwipeViewsInfinite} from 'react-swipe-views';

let id=0;

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    duration:React.PropTypes.number,
    dot:React.PropTypes.bool,
    activeIndex:React.PropTypes.number,
    items:React.PropTypes.array,
    itemTemplate:React.PropTypes.func,
  };

  static defaultProps = {
    duration:0.3,
    dot:true,
    activeIndex:0,
    items:[],
    itemTemplate:function(item,index){
      return (
        <img src={item.url} />
      );
    }
  };

  constructor(props){
  	super(props);
  	this.state = {
      duration:props.duration,
      dot:props.dot,
      activeIndex:props.activeIndex,
      items:props.items,
      itemTemplate:props.itemTemplate
    };
    this._length = props.items.length;
    this._id = id++;
  }

  _dotClick(inIndex){
    var instance = ReactSwipeViewsInfinite.getInstance(`hdl-react-swiper-${this._id}`);
    instance.play(inIndex);
    console.log(instance);
  }

  _onChange(state){
    this.setState({
      activeIndex:state.activeIndex
    })
  }

  render(){
    var dots = [];
    for (var i = 0; i < this._length; i++) {
      dots.push(<span key={i} onClick={this._dotClick.bind(this,i)} data-active={this.state.activeIndex == i}></span>);
    }

    return (
      <div className={classNames('react-swiper',this.props.cssClass)}>
        {this.props.dot ? <div className="react-swiper-dots">{dots}</div>: null}
        <ReactSwipeViewsInfinite
            unit='width'
            ref="swiper"
            delegateHandle={`hdl-react-swiper-${this._id}`}
            onChange={this._onChange.bind(this)}
            duration={this.state.duration}
            activeIndex={this.state.activeIndex}
            itemTemplate={this.state.itemTemplate.bind(this)}
            items={this.state.items} />
      </div>
    );
  }
}
