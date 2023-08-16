import { Component } from "react";
import styles from './StateExzample.module.css';

export class A extends Component  {
    state = {
        numberOfClick: 0
      }
  
  handleClick = (evt) => {
      console.log(evt);
      this.setState( prevState => {
          return {
              numberOfClick: prevState.numberOfClick + 1
          }
      })
  }
  
  handleReset = () => {
       this.setState({
         numberOfClick: 0
      });
  }
  
      render() {
          console.log('render');
          return ( 
              <div className={styles.count}>
                  <h1 className="header__text">
                        StateExzample
                  </h1>
                  <button onClick={this.handleClick} className={styles.btn}>{this.state.numberOfClick}</button>
                  <button onClick={this.handleReset} className={styles.btn}>Reset</button>
              </div>
          );
      }
}
 
// export default A;