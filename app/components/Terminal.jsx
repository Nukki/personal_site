import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typist  from 'react-typist';
import { typingUpdate, resetTyping } from '../redux/typer';
import { addHistory, clearHistory } from '../redux/history';
import { setTyper } from '../redux/typingText';
import { setTyperColor } from '../redux/typerColor';
import ReactAutoScroll from 'react-to-target-auto-scroll';

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.getHelp = this.getHelp.bind(this);
  }

  handleInput(e){
     if (e.key === "Enter") {
       this.props.setTyperColor();
       this.props.resetTyping();
       let cmd = e.target.value;
       this.props.addHistory("\n$ " + cmd);

       switch (cmd.trim().toLowerCase()) {
         case "help":
            this.getHelp();
            break;
         case "who dis":
            this.props.setTyper(["My name is Nikki Jack. I'm an aspiring software developer. Getting my Bachelor's in Computer Science at CUNY Hunter College soon. Also interested in InfoSec and digital privacy"]);
            break;
         case "linkedin":
            this.props.setTyper(["linkedin.com/in/nikkijacknyc"]);
            break;
         case "twitter":
            this.props.setTyper(["twitter.com/code_in_heels"]);
            break;
         case "email":
            this.props.setTyper(["nikkijack@protonmail.com"]);
            break;
         case "github":
            this.props.setTyper(["github.com/Nukki"]);
            break;
         case "keybase":
            this.props.setTyper(["keybase.io/nukki"]);
            break;
        case "aww":
            this.props.setTyper(["robots are cute"]);
            break;
        case "ayyy":
            this.props.setTyper(["lmao"]);
            break;
        case "clear":
            this.props.clearHistory();
            this.props.setTyper([]);
            break;
         default:
            this.props.setTyper(["nukki: command not found. Type \'help\' for a list of commands"]);
            break;
       }
       this.clearInput();
     }
  }

  getHelp() {
    let text = ["Commands: ",
               " --------",
               " help ",
               " who dis ",
               " email",
               " twitter",
               " github   ",
               " linkedin ",
               " keybase  ",
               " clear"
             ];
     this.props.setTyper(text);
  }

  clearInput(){
     this.refs.term.value = "";
  }

  render() {
    const { update, addHistory, typingDone, history, typerText, typerColor } = this.props;

    const historyContent = history.map( (line, i) => {
      if(line.props){
        switch(line.props.children) {
          case 'twitter.com/code_in_heels':
            return (<p key={i}> <a target='_blank' href="https://twitter.com/code_in_heels">{line}</a> </p>);
            break;
          case 'linkedin.com/in/nikkijacknyc':
            return (<p key={i}> <a target='_blank' href="https://www.linkedin.com/in/nikkijacknyc/">{line}</a> </p>);
            break;
          case 'github.com/Nukki':
            return (<p key={i}> <a target='_blank' href="https://github.com/Nukki">{line}</a> </p>);
            break;
          case 'keybase.io/nukki':
            return (<p key={i}> <a target='_blank' href="http://keybase.io/nukki">{line}</a> </p>);
            break;
          case 'nikkijack@protonmail.com':
            return (<p key={i}> <a target='_blank' href="mailto:nikkijack@protonmail.com">{line}</a> </p>);
            break;
          default:
            return (<p key={i}>{line}</p>);
            break;
        }
      }
      else {
        return (<p key={i} style={{color: '#90a9bf' }}>{line}</p>);
      }
    });

    const selfTypeContent = typerText.map((line, i) => (
      <p key={i}>{line}</p>
    ) );


    return (
      <ReactAutoScroll
        targetPosition={900}
        easeType={'linear'}
        speed={5}
        updateInterval={40}
        onScrollingDone={() => console.log('scrolling finished')}
        scrollTargetRef={this.refs.scrollExample}
        isEnabled
      >
      <div ref="scrollExample"
           style={{ fontSize: '16px',
                    fontFamily: 'Roboto Mono',
                    color: '#485560',
                    overflow: 'hidden',
                    wordWrap: 'break-word',
                    width: '100%',
                    height: '74vh' }} >
           <div style={{ height: '74vh',
                         width: '100%' ,
                         color: '#90a9bf'}} >
            {historyContent}

            {
              !typingDone ? (
                <div style={{ color: typerColor }} >
                <Typist
                  avgTypingDelay={40}
                  cursor={{ element:' ' }}
                  onTypingDone={()=> {
                    selfTypeContent.forEach((line)=> addHistory(line));
                    update();
                  }} >

                  {selfTypeContent}

                </Typist>
                </div>
              ) : (<div></div>)
            }

            {
              typingDone ? (
                <div>
                  <p>
                    <span style={{color: "white"}}>$ </span>
                    <input type="text"
                      spellCheck="false"
                      onKeyPress={this.handleInput}
                      style={{cursor: 'pointer',
                        backgroundColor: '#0f1b23',
                        fontFamily: 'Roboto Mono',
                        fontSize: '16px',
                        color: "white"}}
                      ref="term"  autoFocus />
                  </p>

                </div>

              ) : (<div></div>)
            }

           </div>
         </div>
      </ReactAutoScroll>
    );
  }
}

const mapStateToProps = ({ typingDone, history, typerText, typerColor }) => ({ typingDone, history, typerText, typerColor });

const mapDispatchToProps = dispatch => ({
  update: () => dispatch(typingUpdate()),
  addHistory: (line) => dispatch(addHistory(line)),
  setTyper: (text) => dispatch(setTyper(text)),
  resetTyping: () => dispatch(resetTyping()),
  clearHistory: () => dispatch(clearHistory()),
  setTyperColor: () => {
    let arr = ['#91d926', '#26d991', '#26d9b5','#26d9d9', '#b526d9','#d926d9', '#d9266e','#d9d926'];
    let c = arr[Math.floor(Math.random()*arr.length)];
    dispatch(setTyperColor(c));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Terminal);
