class SingleNode
  def initialize(value)
    @value = value
    @next = nil
  end

  def print
    node = self
    until nil?
      print value
      node = node.next
    end
  end


end
