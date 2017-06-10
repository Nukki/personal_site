import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex, Box } from 'reflexbox';
import { SocialIcon } from 'react-social-icons';

export default class Social extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ overflowY: 'auto', height: 47}}>

          <Flex  pr={2}
                 pl={2}
                 align="center"
                 justify="center"
                 style={{ height: 47}}>
            <Box cols={3}
                 style={{color: '#060A0F'}} >.</Box>

            <Box  px={2}  >
              <SocialIcon url="mailto:nikkijack@protonmail.com"
                          network="email"
                          color="#394c65"
                          style={{ height: 44, width: 44}} />
            </Box>
            <Box  px={2}  >
              <SocialIcon url="https://www.linkedin.com/in/nikkijacknyc/"
                          network="linkedin"
                          color="#394c65"
                          style={{ height: 44, width: 44}}/>
            </Box>
            <Box  px={2}  >
              <SocialIcon url="https://twitter.com/daNukki"
                          network="twitter"
                          color="#394c65"
                          style={{ height: 44, width: 44}} />
            </Box>
            <Box  px={2}  >
              <SocialIcon url="https://github.com/Nukki"
                          network="github"
                          color="#394c65"
                          style={{ height: 44, width: 44}} />
            </Box>

            <Box cols={3}
                 style={{color: '#060A0F'}} >.</Box>
          </Flex>
      </div>
    );
  }
}
