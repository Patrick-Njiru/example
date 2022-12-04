class User < ApplicationRecord
    validates :age, comparison: {greater_than_or_equal_to: 18, less_than_or_equal_to: 25}
end
