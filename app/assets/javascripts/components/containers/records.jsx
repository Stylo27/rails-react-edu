class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {records: props.data, errors: {}}
    this.addRecord = this.addRecord.bind(this)
    this.updateRecord = this.updateRecord.bind(this)
    this.deleteRecord = this.deleteRecord.bind(this)
    this.setErrors = this.setErrors.bind(this)
  }
  setErrors(errors){
    this.setState({errors: errors})
  }
  handleChange(e) {
    name = e.target.name;
    this.setState({[name]: e.target.value})
  }
  addRecord(record){
    records = this.state.records.slice()
    records.push(record)
    this.setState({records: records})
  }
  updateRecord(record, data){
    records = this.state.records.slice()
    index = records.indexOf(record)
    records.splice(index, 1, data)
    this.setState({records: records})
  }
  deleteRecord(record){
    records = this.state.records.slice()
    index = records.indexOf(record)
    records.splice(index, 1)
    this.setState({records: records})
  }
  render(){
    return(
      <RecordsList
        records={this.state.records}
        handleChange={this.handleChange}
        addRecord={this.addRecord}
        updateRecord={this.updateRecord}
        deleteRecord={this.deleteRecord}
        getErrors={this.setErrors}
        errors={this.state.errors}
      />)
  }
};