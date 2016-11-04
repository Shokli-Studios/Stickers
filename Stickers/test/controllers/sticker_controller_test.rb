require 'test_helper'

class StickerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sticker_index_url
    assert_response :success
  end

end
