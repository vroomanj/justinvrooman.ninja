require 'test_helper'

class Devise::ManagementControllerTest < ActionController::TestCase
  test "should get manage" do
    get :manage
    assert_response :success
  end

end
