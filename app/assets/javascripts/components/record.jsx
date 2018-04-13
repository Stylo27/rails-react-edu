class Record extends React.Component {
  constructor(props){
    super(props)
    this.state = {edit: false}

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle(e){
    e.preventDefault();
    this.setState({edit: !this.state.edit})
  }
  handleEdit(e){
    e.preventDefault();
    data = {
      title: this.titleInput.value,
      date: this.dateInput.value,
      amount: this.amountInput.value
    }
    $.ajax({
      method: 'PUT',
      url: '/records/' + this.props.record.id,
      dataType: 'JSON',
      data: {record: data},
      success: () =>
        {this.setState({edit: false})
        this.props.handleEditRecord(this.props.record, data)}
    })
  }
  handleDelete(e){
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/records/' + this.props.record.id,
      dataType: 'JSON',
      success: () =>
        this.props.handleDeleteRecord(this.props.record)
    })
  }
  recordRow() {
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td>
          <a className="btn btn-info" onClick={this.handleToggle}>{"Edit"}</a>
          <a className="btn btn-danger" onClick={this.handleDelete}>{"Delete"}</a>
        </td>
      </tr>
    )
  }
  recordForm(){
    return(
      <tr>
        <td>
          <input className="form-control" type="text" defaultValue={this.props.record.date} ref={(node) => {this.dateInput = node;}}/>
        </td>
        <td>
          <input className="form-control" type="text" defaultValue={this.props.record.title} ref={(node) => {this.titleInput = node;}}/>
        </td>
        <td>
          <input className="form-control" type="number" defaultValue={this.props.record.amount} ref={(node) => {this.amountInput = node;}}/>
        </td>
        <td>
          <a className="btn btn-success" onClick={this.handleEdit}>{"Update"}</a>
          <a className="btn btn-danger" onClick={this.handleToggle}>{"Cancel"}</a>
        </td>
      </tr>
    )
  }
  render(){
    if (this.state.edit) {
      return(this.recordForm())
    }else{
      return(this.recordRow())
    }
  }
}
