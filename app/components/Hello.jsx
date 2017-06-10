import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typist  from 'react-typist';
import { Flex, Box } from 'reflexbox';
import { StyleSheet, css} from 'aphrodite';
import { ButtonOutline } from 'rebass';
import { resetTyper } from '../redux/typingText';
import { resetTyping } from '../redux/typer';
import { resetTyperColor } from '../redux/typerColor';
import { clearHistory } from '../redux/history';
import Social from './Social';

const colorKeyframes = {
   '0%':   { color: '#91d926', },
   '12%':  { color: '#26d991', },
   '25%':  { color: '#26d9b5', },
   '37%':  { color: '#26d9d9', },
   '50%':  { color: '#b526d9', },
   '62%':  { color: '#d926d9', },
   '75%':  { color: '#d9266e', },
   '87%':  { color: '#d9d926', },
   '100%': { color: '#91d926', },
};

const styles = StyleSheet.create({
  colorAnimation: {
        display: 'inline-block',
        animationName: colorKeyframes,
        animationDuration: '5s',
        animationIterationCount: 'infinite',
    },
});

class Hello extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let f1 = " _   _ _ _    _    _  ";
    let f2 = "| \\ | (_) | _| | _(_)";
    let f3 = "|  \\| | | |/ / |/ / |";
    let f4 = "| |\\  | |   <|   <| |";
    let f5 = "|_| \\_|_|_|\\_\\_|\\_\\_|";

    let l1 = "     _            _    ";
    let l2 = "    | | __ _  ___| | __";
    let l3 = " _  | |/ _` |/ __| |/ /";
    let l4 = "| |_| | (_| | (__|   < ";
    let l5 = " \\___/ \\__,_|\\___|_|\\_\\";

    return (
     <div>
       <Flex justify='center' align='flex-end' style={{ height: '5vh'}}>
       </Flex>

       <Social />

       <Flex justify='center' align='center' style={{ height: '50vh'}}>
         <Box>
           <div style={{ fontSize: '3vmax', fontFamily: 'monospace', whiteSpace: 'pre'}}
                className={css(styles.colorAnimation)} >
            <Flex wrap justify='center'>
              <Box sm={12} md={6} justify='center'>
                <p style={{fontWeight: 'bold'}}>{f1}</p>
                <p style={{fontWeight: 'bold'}}>{f2}</p>
                <p style={{fontWeight: 'bold'}}>{f3}</p>
                <p style={{fontWeight: 'bold'}}>{f4}</p>
                <p style={{fontWeight: 'bold'}}>{f5}</p>
              </Box>

              <Box  sm={12} md={6} justify='center'>
                <p style={{fontWeight: 'bold'}}>{l1}</p>
                <p style={{fontWeight: 'bold'}}>{l2}</p>
                <p style={{fontWeight: 'bold'}}>{l3}</p>
                <p style={{fontWeight: 'bold'}}>{l4}</p>
                <p style={{fontWeight: 'bold'}}>{l5}</p>
              </Box>
            </Flex>
          </div>
        </Box>
      </Flex>


      <Flex justify='center'
            align='center'
            style={{ height: '20vh'}}>
        <Box>
          <ButtonOutline
            color="#425875"
            rounded="left"
            big
            style={{outline: 'none', borderWidth: '5px'}}
            onClick={()=> {
              this.props.clearHistory()
              this.props.resetTyper()
              this.props.resetTyping()
              this.props.resetTyperColor()
              this.props.router.push('/term')
            }} >
            Feeling 1337?
        </ButtonOutline>
        </Box>
      </Flex>
    </div>
    );
  }
}

const mapStateToProps = ({  }) => ({  });

const mapDispatchToProps = dispatch => ({
  resetTyper: () => dispatch(resetTyper()),
  resetTyping: () => dispatch(resetTyping()),
  resetTyperColor: () => dispatch(resetTyperColor()),
  clearHistory: () => dispatch(clearHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
