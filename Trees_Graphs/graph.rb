class Graph
  def initialize(nodes = [])
    @nodes = nodes
  end

  def createNode(value, connections)
    @nodes << Node.new(value, connections)
  end

  def addNode(node)
    @nodes << node
  end
end

class Node
  def initialize(value, connections = [])
    @value = value
    @connections = connections
  end

  def add_connection(node)
    @connections << node
  end
end


a = Node.new('a')
b = Node.new('b')
c = Node.new('c')
d = Node.new('d')
e = Node.new('e')
f = Node.new('f')

a.add_connection(b)
a.add_connection(d)
b.add_connection(e)
d.add_connection(c)
e.add_connection(f)

directed_non_Circular = Graph.new([a,b,c,d,e,f])


g = Node.new('g')
h = Node.new('h')
i = Node.new('i')
j = Node.new('j')
k = Node.new('k')

g.add_connection(h)
g.add_connection(j)
h.add_connection(i)
i.add_connection(g)
j.add_connection(k)
k.add_connection(i)

directed_circular = Graph.new([g,h,i,j,k])

l = Node.new('l')
m = Node.new('m')
n = Node.new('n')
o = Node.new('o')
p = Node.new('p')
q = Node.new('q')
r = Node.new('r')

l.add_connection(m)
m.add_connection(l)
m.add_connection(r)
m.add_connection(n)
r.add_connection(m)
n.add_connection(m)
n.add_connection(q)
q.add_connection(n)
n.add_connection(o)
o.add_connection(n)
o.add_connection(p)
p.add_connection(o)


undirected_non_circular = Graph.new([l,m,n,o,p,q,r])

s = Node.new('s')
t = Node.new('t')
u = Node.new('u')
v = Node.new('v')
w = Node.new('w')
x = Node.new('x')
y = Node.new('y')
z = Node.new('z')

x.add_connection(s)
x.add_connection(y)
s.add_connection(x)
y.add_connection(x)
y.add_connection(v)
y.add_connection(s)
s.add_connection(y)
v.add_connection(y)
v.add_connection(s)
v.add_connection(w)
s.add_connection(v)
w.add_connection(v)
w.add_connection(u)
u.add_connection(w)
u.add_connection(s)
s.add_connection(u)
u.add_connection(z)
z.add_connection(u)
u.add_connection(t)
t.add_connection(u)
z.add_connection(t)
t.add_connection(z)
t.add_connection(s)
s.add_connection(t)

undirected_circular = Graph.new([s,t,u,v,w,x,y,z])
