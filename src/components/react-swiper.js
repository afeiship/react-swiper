import './style.scss';
import {PureComponent,PropTypes} from 'react';
import classNames from 'classnames';
import {ReactSwipeViewsInfinite} from 'react-swipe-views';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    duration:PropTypes.number,
    dot:PropTypes.bool,
    activeIndex:PropTypes.number
  };

  static defaultProps = {
    duration:0.3,
    dot:true,
    activeIndex:0
  };

  constructor(props){
  	super(props);
  	this.state = { ...props };
    this._length = props.children.length;
  }

  generateDots(){
    let dots = [], i;
    for (i = 0; i < this._length; i++) {
      dots.push(<span key={i} data-active={this.state.activeIndex == i}></span>);
    }
    return dots;
  }

  _onChange = (state) =>{
    this.setState({
      activeIndex:state.activeIndex
    });
  };

  render(){
    return (
      <div className={classNames('react-swiper',this.props.className)}>
        {this.props.dot ? <div className="react-swiper-dots">{this.generateDots()}</div>: null}
        <ReactSwipeViewsInfinite
          unit='width'
          ref="swiper"
          onChange={this._onChange}
          duration={this.state.duration}
          activeIndex={this.state.activeIndex}>
          {this.props.children}
        </ReactSwipeViewsInfinite>
      </div>
    );
  }
}
