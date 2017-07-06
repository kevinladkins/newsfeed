class User < ApplicationRecord
  has_secure_password
  has_many :user_sources
  has_many :sources, through: :user_sources

  validates :email, presence: true
  validates :email, uniqueness: true
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i


  def source_ids
    self.sources.map {|source| source.name}
  end
end
