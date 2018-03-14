import './style.scss';

import PropTypes from 'prop-types';
import {PureComponent} from 'react';
import { ReactSwipeViewsInfinite } from 'react-swipe-views';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    duration:PropTypes.number,
    dot:PropTypes.bool,
    activeIndex:PropTypes.number,
    extra:PropTypes.number,
  };

  static defaultProps = {
    duration:0.3,
    dot:true,
    activeIndex:0
  };

  constructor(props){
  	super(props);
  	this.state = {
      activeIndex:props.activeIndex,
      children:props.children,
    };
    this._dotLength = props.children.length;
  }

  componentWillReceiveProps(nextProps, nextState) {
    const {children,activeIndex} = nextProps;
    if (!this.equalChildren(nextProps)) {
      this._dotLength = children.length;
      this.setState({ children, activeIndex });
    }
  }

  equalChildren(nextProps){
    const newKeys = nextProps.children.map( child => child.key);
    let oldKeys = this.props.children.map( child => child.key);
    oldKeys = newKeys.length!==oldKeys.length ? oldKeys.slice(1,-1) : oldKeys;
    return oldKeys.join('__JOIN__') === newKeys.join('__JOIN__');
  }

  generateDots(){
    let arr = new Array(this._dotLength).join().split(',');
    arr = Object.keys(arr);
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
    const {
      dot,
      children,
      duration,
      activeIndex,
      followFinger,
      extra,
      ...props
    } = this.props;

    return (
      <div {...props} className={classNames('react-swiper',this.props.className)}>
        {dot && <div className="react-swiper-dots">{this.generateDots()}</div> }
        { extra }
        <ReactSwipeViewsInfinite
          unit='width'
          ref="swiper"
          onChange={this._onChange}
          duration={duration}>
          {this.state.children}
        </ReactSwipeViewsInfinite>
      </div>
    );
  }
}
