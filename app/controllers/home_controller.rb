class HomeController < ApplicationController
  def index
    @leaders = User.select(:id,:email,:rank).order(rank: :desc).as_json
  end
end
