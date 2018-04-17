class RecordRow extends React.Component {
  recordRow() {
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td>
          <a className="btn btn-info" onClick={this.props.handleToggle}>{"Edit"}</a>
          <a className="btn btn-danger confirm" onClick={this.props.handleDelete}>{"Delete"}</a>
        </td>
      </tr>
    )
  }
  recordForm(){
    return(
      <tr>
        <td>
          <input className="form-control" type="text" defaultValue={this.props.record.date} ref={this.props.dateInputRef}/>
        </td>
        <td>
          <input className="form-control" type="text" defaultValue={this.props.record.title} ref={this.props.titleInputRef}/>
        </td>
        <td>
          <input className="form-control" type="number" defaultValue={this.props.record.amount} ref={this.props.amountInputRef}/>
        </td>
        <td>
          <a className="btn btn-success" onClick={this.props.handleEdit}>{"Update"}</a>
          <a className="btn btn-danger" onClick={this.props.handleToggle}>{"Cancel"}</a>
        </td>
      </tr>
    )
  }
  render(){
    if (this.props.edit) {
      return(this.recordForm())
    }else{
      return(this.recordRow())
    }
  }
}