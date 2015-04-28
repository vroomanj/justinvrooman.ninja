class ContactController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if verify_recaptcha
      if @contact.deliver
        flash.now[:notice] = 'Thank you for your message. We will contact you soon!'
      else
        flash.now[:error] = 'Cannot send message.'
        render :new
      end
    else
      flash.now[:alert] = "There was an error with the recaptcha code. Please re-enter the code."      
      flash.delete :recaptcha_error
      render :new
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def page_params
      params.require(:contact).permit(:name, :email, :message, :nickname)
    end
end
