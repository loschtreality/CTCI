# Design the data structures for a generic deck of cards. Explain how you
# would subclass the data structures to implement blackjack

# Clarifications:

# Are the cards the standard poker type
# Should shuffle be done when there are the max amount of cards in the deck?

# Ideas (blackjack)
# 1. Handling Aces: Keep track if the person has an ace. Add their card values + 11. If they go over 21, subtract 10

class Deck
  def initialize(cards)
    @cards = []
  end

  def shuffle
    @cards.shuffle!
  end

  def draw
    raise "Not enough cards, please shuffle for a new deck!" if @cards.empty?
    @cards.pop
  end
end


class Card
  attr_reader :value, :suite

  SUIT_STRINGS = {
    clubs: '♣',
    diamonds: '♦',
    hearts: '♥',
    spades: '♠'
  }

  VALUE_STRINGS = {
    ace: 'A',
    deuce: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    ten: '10',
    jack: 'J',
    queen: 'Q',
    king: 'K'
  }

  def initialize(value, suite)
    @value = value
    @suite = suite
  end

  def ==(other_card)
    other_card.is_a?(Card) && (other.value == @value) && (other_card.suit == @suit)
  end

end

class Hand < Card
  def initialize(cards)
    @cards = cards
  end

  def score
    @cards.inject(0) { |sum, card| sum + card.value }
  end

end
