import * as React from 'react';
import { css } from 'glamor';

const formRules = css({
  display: 'flex',
  flexDirection: 'column',
  '&>*': {
    width: '100%'
  },
  '& > label': {
    width: '100%',
    margin: '8px 0',
    '&>span': {
      width: 150,
      display: 'inline-block',
      textAlign: 'right',
      margin: '0 16px'
    }
  },
  '& input, textarea': {
    width: 200,
  }
});

const outputRules = css({
  textAlign: 'left'
})

const containerRules = css({
  display: 'flex',
  '&>*': {
    flex: 1,
    border: '1px solid #333',
    padding: 16,
  }
})

export class ReplyBackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      lastSpoke: '',
      person: '',
      repliedBack: '',
      problem: '',
      nextStep: '',
      link: '',
      output: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
    this.output = this.output.bind(this);
  }

  reset () {
    this.setState({
      person: '',
      lastSpoke: '',
      repliedBack: '',
      problem: '',
      nextStep: '',
      link: '',
      output: ''
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      output: `
        Intercom Relay <br/>
        *Person*: ${this.state.person} <br/>
        *Last time you spoke*: ${this.state.lastSpoke} <br/>
        *Replied Back at*: ${this.state.repliedBack} <br/>
        *Problem*: ${this.state.problem} <br/>
        *Potential Next Step*: ${this.state.nextStep} <br/>
        *Link*: ${this.state.link}
      `
    })
    event.preventDefault();
  }

  output () {
    return {
      __html: this.state.output || 'submit form for generated output'
    }
  }

  render() {
    return (
      <div {...containerRules}>
        <form onSubmit={this.handleSubmit} {...formRules}>
          <label>
            <span>Person:</span>
            <input name='person' type="text" value={this.state.person} onChange={this.handleChange} />
          </label>
          <label>
            <span>Last time you spoke:</span>
            <input name='lastSpoke' type="text" value={this.state.lastSpoke} onChange={this.handleChange} />
          </label>
          <label>
            <span>Replied Back at:</span>
            <input name='repliedBack' type="text" value={this.state.repliedBack} onChange={this.handleChange} />
          </label>
          <label>
            <span>Problem:</span>
            <textarea name='problem' type="text" value={this.state.problem} onChange={this.handleChange} />
          </label>
          <label>
            <span>Potential Next Step:</span>
            <textarea name='nextStep' type="text" value={this.state.nextStep} onChange={this.handleChange} />
          </label>
          <label>
            <span>Link:</span>
            <input name='link' type="text" value={this.state.link} onChange={this.handleChange} />
          </label>
          <div {...css({display: 'flex', '&>*': {margin: '0 8px'}})}>
            <input type='button' value='Reset' onClick={this.reset}/>
            <input type="submit" value="Submit" style={{backgroundColor: '#a4d2a4'}} />
          </div>
          
        </form>
        <div {...outputRules}>
          <p dangerouslySetInnerHTML={this.output()}></p>
        </div>
      </div>
    );
  }
}
