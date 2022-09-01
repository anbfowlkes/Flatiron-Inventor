class Item < ApplicationRecord
    belongs_to :room, optional: true
end
