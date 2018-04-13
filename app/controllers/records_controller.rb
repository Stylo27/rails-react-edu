class RecordsController < ApplicationController
  def index
    @records = Record.all
  end

  def create
    @record = Record.new(record_params)

    if @record.save
      render json: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def update
    if set_record.update(record_params)
      render json: set_record
    else
      render json: set_record.errors, status: :unprocessable_entity
    end
  end

  def destroy
    set_record.destroy
    head :no_content
  end

  private

  def set_record
    @record = Record.find(params[:id])
  end

  def record_params
    params.require(:record).permit(:title, :amount, :date)
  end
end
