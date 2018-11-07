import React from 'react';
import user from '../../../../image/user.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: 0
    }
  }
  exit(event) { }
  changeLang(value, event) { }
  handleChange(event) {
    let _self = this;
    let param = this.state.isShow ? 0 : 1;
    this.setState({
      isShow: param
    });
    let fn = function () {
      _self.setState({
        isShow: 0
      });
      window.removeEventListener('click', fn);
    }
    param ? window.addEventListener('click', fn, false) : window.removeEventListener('click', fn)
    event.preventDefault();
    event.stopPropagation();
  }
  componentDidMount() { }
  componentWillUnmount() { }
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="navbar-container">
          <div className="navbar-header pull-left">
            <a href="#" className="navbar-brand">
              <small>
                <i className="icon-leaf"></i>
                测试平台
              </small>
            </a>
          </div>
          <div className="navbar-header pull-right">
            <ul className="nav ace-nav">
              <li className={this.state.isShow ? 'light-blue open' : 'light-blue'}>
                <a href="#" onClick={this.handleChange.bind(this)}>
                  <img className="nav-user-photo" src={user} alt="linjie's Photo" />
                  <span className="user-info">
                    <small>欢迎,</small>
                    tx
                  </span>

                  <i className="icon-caret-down"></i>
                </a>

                <ul className="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                  <li>
                    <a href="#" onClick={this.changeLang.bind(this, 'cn')}>
                      <i className="icon-circle"></i>
                      中文
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#" onClick={this.exit.bind(this)}>
                      <i className="icon-off"></i>
                      退出
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default Header;