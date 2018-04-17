class RecordsList extends React.Component {
  credits(){
  credits = this.props.records.filter((val) => val.amount >= 0)
    return( credits.reduce ((prev, curr) =>
      prev + parseFloat(curr.amount)
    , 0) )
  }
  debits(){
    debets = this.props.records.filter((val) => val.amount < 0)
    return( debets.reduce ((prev, curr) =>
      prev + parseFloat(curr.amount)
    , 0) )
  }
  balance() {return( this.credits() + this.debits() ) }
  showErrors(){
    if (Object.keys(this.props.errors).length > 0){
      return(<Errors errors={this.props.errors}/>)
    }
  }
  render(){
    const recordsList = this.props.records.map((record) =>
          <Record
            key={record.id}
            record={record}
            handleDeleteRecord={this.props.deleteRecord}
            handleEditRecord={this.props.updateRecord}
            getErrors={this.props.getErrors}
          />
        );
    return(
      <div className="records container">
        <h2 className="title">Records</h2>
        <AmountBox type={"success"} amount={this.credits()} text={"Credits"}/>
        <AmountBox type={"danger"} amount={this.debits()} text={"Debits"}/>
        <AmountBox type={"info"} amount={this.balance()} text={"Balance"}/>
        <RecordForm handleNewRecord={this.props.addRecord} getErrors={this.props.getErrors}/>
        {this.showErrors()}
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
}