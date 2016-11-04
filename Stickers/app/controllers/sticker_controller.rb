class StickerController < ApplicationController
  def index
  	@sticker = Sticker.all
  end

  def new
  	@sticker = Sticker.new
  end

  def create
	@sticker = Sticker.new(sticker_params) 
	if @sticker.save 
	  redirect_to '/sticker' 
	else 
	  render 'new' 
	end
  end

  private
  	def message_params
  		params.require(:sticker).permit(:content)
  	end
end
