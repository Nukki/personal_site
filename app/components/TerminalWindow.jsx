import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Flex, Box } from 'reflexbox';
import Terminal from './Terminal';
import Icon from 'react-geomicons';
import { ButtonCircle, ButtonOutline, Close} from 'rebass';
import { MorphIcon } from 'react-svg-buttons';


export default class TerminalWindow extends Component {

  render() {

    return (
      <div style={{height: '100vh'}}>
      <div style={{height: '3.1vh'}}></div>
      <Flex p={0}
            align="center"
            justify="center"
            style={{ height: '4.2vh'}}>
        <Box style={{color: '#060A0F'}}  >.</Box>

        <Box align="center"
             mr={1}
             ml={1}
             pr={2}
             pl={3}
             pt={0}
             pb={0}
             style={{ borderRadius: '5px',
                      backgroundColor: '#394c65',
                      minHeight: '100%',
                      width: '100vh' }}>

          <Flex gutter={3}
                align="center"
                justify="space-between"
                style={{height: '4.2vh'}} >

             <Box pl={1} col={2} >
                <Flex align='center'  >
                  <Box align='center'
                       onClick={() => this.props.router.push('/hello')}>
                    <svg style={{ height: '2vh',
                                  width: '2vh'}}>
                      <circle style={{ height: '2vh',
                                       width: '2vh',
                                       fill:'#ff9994',
                                       cx:"50%",
                                       cy:"50%",
                                       r: '50%'}} />
                    </svg>
                  </Box>
                </Flex>
             </Box>

             <Box col={10} >
              <Flex align='center'
                    justify='center' >
                <Box pr={6}
                     style={{ fontSize: '2.7vmin',
                              color: '#c2c8ce',
                              minHeight: '100%'}}>
                    nukkiTerm
                </Box>
              </Flex>
             </Box>
          </Flex>

        </Box>
        <Box style={{color: '#060A0F'}}  >.</Box>
      </Flex>


      <Flex  align="center"
             justify="space-between"
             style={{ height: '76vh'}}>
        <Box style={{color: '#060A0F'}} >.</Box>
        <Box mr={1}
             ml={1}
             pt={1}
             pr={1}
             pl={1}
             pb={2}
             style={{ borderRadius: '5px',
                      backgroundColor: '#0f1b23',
                      height: '76vh',
                      width: '100vh',
                      overflowY: 'hidden' }}>
          <Terminal />
        </Box>
        <Box style={{color: '#060A0F'}}  >.</Box>
      </Flex>
      </div>
    );
  }
}
