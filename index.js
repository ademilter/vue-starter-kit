const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    const prompts = [{
      type: 'list',
      name: 'type',
      message: 'What do you want to generate?',
      choices: [
        {
          name: 'Page',
          value: 'pages',
          checked: false
        },
        {
          name: 'Component',
          value: 'components',
          checked: true
        }
      ]
    }]
    if (this.args[0]) {
      return this.composeWith(`./scaffolding/${this.args[0]}`)
    }
    return this.prompt(prompts).then(props => {
      this.composeWith(`./scaffolding/${props.type}`)
    })
  }
}
