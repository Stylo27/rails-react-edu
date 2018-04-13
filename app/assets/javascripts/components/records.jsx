class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {records: props.data};
    this.addRecord = this.addRecord.bind(this)
    this.updateRecord = this.updateRecord.bind(this)
    this.deleteRecord = this.deleteRecord.bind(this)
  }
  credits(){
    credits = this.state.records.filter((val) => val.amount >= 0)
    return( credits.reduce ((prev, curr) =>
      prev + parseFloat(curr.amount)
    , 0) )
  }
  debits(){
    debets = this.state.records.filter((val) => val.amount < 0)
    return( debets.reduce ((prev, curr) =>
      prev + parseFloat(curr.amount)
    , 0) )
  }
  balance() {return( this.credits() + this.debits() ) }
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
    const recordsList = this.state.records.map((record) =>
      <Record key={record.id} record={record} handleDeleteRecord={this.deleteRecord} handleEditRecord={this.updateRecord}/>
    );
    return(
      <div className="records container">
        <h2 className="title">Records</h2>
        <AmountBox type={"success"} amount={this.credits()} text={"Credits"}/>
        <AmountBox type={"danger"} amount={this.debits()} text={"Debits"}/>
        <AmountBox type={"info"} amount={this.balance()} text={"Balance"}/ >
        <RecordForm handleNewRecord={this.addRecord}/>
        <hr/>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{recordsList}</tbody>
        </table>
      </div>
    )
  }
};
Records.defaultProps = { records: [] }
