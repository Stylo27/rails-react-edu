class RecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', date: '', amount: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    name = e.target.name;
    this.setState({[name]: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    $.post('/records', { record: this.state }, (data) =>
      {this.props.handleNewRecord(data)
      this.setState({ title: '', date: '', amount: '' })}, 'JSON')
  }
  valid() {
    if (this.state.title && this.state.date && this.state.amount){
      return(true)
    }else{
      return(false)
    }
  }
  render() {
    return(
      <RecordFormView
        title={this.state.title}
        date={this.state.date}
        amount={this.state.amount}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        valid={this.valid()}
      />
    )
  }
}