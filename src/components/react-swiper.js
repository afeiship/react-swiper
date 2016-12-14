import './style.scss';
import classNames from 'classnames';
import Swipeable from 'react-swipeable';
import Measure from 'react-measure';


export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    items:React.PropTypes.array,
    height:React.PropTypes.string,
    duration:React.PropTypes.number,
    dot:React.PropTypes.bool,
    itemTemplate:React.PropTypes.func,
  };

  static defaultProps = {
    items:[],
    duration:0.3,
    dot:true,
    itemTemplate:function(item,index){
      return (
        <img src={item.url} />
      );
    }
  };

  constructor(props){
    super(props);
    this.fomratItems();
    this.state={
      index:1,
      dimensions:{},
      translateX:0,
      duration:props.duration
    }
  }

  componentWillMount(){
    this.toIndex(1);
  }

  fomratItems(){
    var items = this.props.items;
    var first = items[0];
    var last = items[items.length - 1];
    items.push(first);
    items.unshift(last);
  }

  _onSwipedLeft(ev){
    var index = this.state.index + 1;
    this.toIndex(index);
    // ev.preventDefault();
  }

  _onSwipedRight(ev){
    var index = this.state.index - 1;
    this.toIndex(index);
    // ev.preventDefault();
  }

  _onSwipingLeft(ev,deltaX){
    var _translateX = this.state.index * this.state.dimensions.width;
    this.setState({
      duration:0,
      translateX:`-${_translateX+deltaX}px`
    });
    // ev.preventDefault();
  }

  _onSwipingRight(ev,deltaX){
    var _translateX = this.state.index * this.state.dimensions.width;
    this.setState({
      duration:0,
      translateX:`-${_translateX-deltaX}px`
    });
    // ev.preventDefault();
  }
  toIndex(inIndex){
    var index = this.getAbsIndex(inIndex);
    this.setState({
      index:index,
      duration:this.props.duration,
      translateX:`-${inIndex * 100/this.props.items.length}%`
    });
  }

  _onTransitionEnd(){
    this.jumpQuietly();
  }

  _dotClick(inIndex){
    this.toIndex(inIndex);
  }

  getAbsIndex(inIndex){
    var index = inIndex;
    var length = this.props.items.length;
    var _length = length - 1;

    if(index == 0){
      index = _length - 1;
    }

    if(index == _length){
      index = 1;
    }
    return index;
  }


  jumpQuietly(){
    var index = this.getAbsIndex(this.state.index);
    this.setState({
      index:index,
      duration:0,
      translateX:`-${index * 100/this.props.items.length}%`
    });
  }


  render(){
    var dots = [];
    var length = this.props.items.length - 2;
    for (var i = 0; i < length; i++) {
      dots.push(<span key={i} onClick={this._dotClick.bind(this,i+1)} data-active={this.state.index == (i+1)}></span>);
    }

    return (
      <Measure onMeasure={(dimensions) => {
          this.setState({dimensions})
        }}>
        <div className={classNames('react-swiper',this.props.cssClass)}>
          {this.props.dot ? <div className="react-swiper-dots">{dots}</div>: null}
          <Swipeable flickThreshold={0.2} delta={10} preventDefaultTouchmoveEvent className="react-swiper-wrapper"
            onSwipingLeft={this._onSwipingLeft.bind(this)}
            onSwipingRight={this._onSwipingRight.bind(this)}
            onSwipedLeft={this._onSwipedLeft.bind(this)}
            onSwipedRight={this._onSwipedRight.bind(this)}
            >
              <ul className="react-swiper-scroller"
                onTransitionEnd={this._onTransitionEnd.bind(this)}
                style={{
                  width:`${this.props.items.length*100}%`,
                  height:this.props.height,
                  transition:`transform ${this.state.duration}s`,
                  transform:`translateX(${this.state.translateX})`
                }}>
                {this.props.items.map(function(item,index){
                  return (
                    <li key={index} style={{ width:`${100/this.props.items.length}%`,height:this.props.height}}>
                      {this.props.itemTemplate(item,index)}
                    </li>
                  )
                }.bind(this))}
              </ul>
          </Swipeable>
        </div>
      </Measure>
    );
  }
}
