import './style.scss';

import PropTypes from 'prop-types';
import {PureComponent} from 'react';
import {ReactSwipeViewsInfinite} from 'react-swipe-views';
import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    followFinger:PropTypes.bool,
    duration:PropTypes.number,
    dot:PropTypes.bool,
    activeIndex:PropTypes.number
  };

  static defaultProps = {
    followFinger:true,
    duration:0.3,
    dot:true,
    activeIndex:0
  };

  constructor(props){
  	super(props);
  	this.state = { activeIndex:props.activeIndex };
    this._dotLength = props.children.length;
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.children !== this.props.children) {
      this._dotLength = nextProps.children.length;
      this.setState(nextProps);
    }
  }

  generateDots(){
    let arr = Array.from( Array(this._dotLength).keys() );
    return arr.map(i=>{
      return <span key={i} data-active={this.state.activeIndex == i} />
    });
  }

  _onChange = (state) => {
    const {swiper} = this.refs;
    this.setState({
      activeIndex:swiper.state.activeIndex
    });
  };

  render(){
    const {dot,children,duration,activeIndex,followFinger,...props} = this.props;
    return (
      <div {...props} className={classNames('react-swiper',this.props.className)}>
        {dot && <div className="react-swiper-dots">{this.generateDots()}</div> }
        <ReactSwipeViewsInfinite
          followFinger = {followFinger}
          unit='width'
          ref="swiper"
          onChange={this._onChange}
          duration={duration}>
          {children}
        </ReactSwipeViewsInfinite>
      </div>
    );
  }
}
