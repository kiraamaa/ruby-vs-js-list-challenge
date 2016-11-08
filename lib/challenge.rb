def any?(list, &block)
  list.any?(&block)
end

def none?(list, &block)
  list.none?(&block)
end
