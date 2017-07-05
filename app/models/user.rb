class User < ApplicationRecord
  has_secure_password
  has_many :user_sources
  has_many :sources, through: :user_sources


  def source_ids
    self.sources.map {|source| source.name}
  end
end
