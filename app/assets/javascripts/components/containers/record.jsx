class Record extends React.Component {
  constructor(props){
    super(props);
    this.state = {edit: false};

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.dateInputRef = element => {
      this.dateInput = element;
    };
    this.amountInputRef = element => {
      this.amountInput = element;
    };
    this.titleInputRef = element => {
      this.titleInput = element;
    }
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
      success: (data) =>
        {this.setState({edit: false})
        this.props.handleEditRecord(this.props.record, data)},
      error: (data) =>
        this.props.errors(data.responseJSON)
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
      ,error: (data) =>
        this.props.errors(data.responseJSON)
    })
  }
  render(){
    return(
      <RecordRow
        edit={this.state.edit}
        record={this.props.record}
        handleToggle={this.handleToggle}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        dateInputRef={this.dateInputRef}
        titleInputRef={this.titleInputRef}
        amountInputRef={this.amountInputRef}
      />
    )
  }
}
