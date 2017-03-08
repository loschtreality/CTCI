class Graph {
  constructor(nodes = []) {
    this.nodes = nodes
  }

  createNode(value, connections) {
    const newNode = new Node(value, connections)
    this.nodes.push(newNode)
  }

  addNode(node) {
    this.nodes.push(node)
  }

}

class Node {
  constructor(value, connections = []) {
    this.value = value
    this.connections = connections
  }

  addConnection(node) {
    this.connections.push(node)
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.addConnection(b)
a.addConnection(d)
b.addConnection(e)
d.addConnection(c)
e.addConnection(f)

const directedNonCircular = new Graph([a,b,c,d,e,f])


const g = new Node('g')
const h = new Node('h')
const i = new Node('i')
const j = new Node('j')
const k = new Node('k')

g.addConnection(h)
g.addConnection(j)
h.addConnection(i)
i.addConnection(g)
j.addConnection(k)
k.addConnection(i)

const directedCircular = new Graph([g,h,i,j,k])

const l = new Node('l')
const m = new Node('m')
const n = new Node('n')
const o = new Node('o')
const p = new Node('p')
const q = new Node('q')
const r = new Node('r')

l.addConnection(m)
m.addConnection(l)
m.addConnection(r)
m.addConnection(n)
r.addConnection(m)
n.addConnection(m)
n.addConnection(q)
q.addConnection(n)
n.addConnection(o)
o.addConnection(n)
o.addConnection(p)
p.addConnection(o)


const undirectedNonCircular = new Graph([l,m,n,o,p,q,r])

const s = new Node('s')
const t = new Node('t')
const u = new Node('u')
const v = new Node('v')
const w = new Node('w')
const x = new Node('x')
const y = new Node('y')
const z = new Node('z')

x.addConnection(s)
x.addConnection(y)
s.addConnection(x)
y.addConnection(x)
y.addConnection(v)
y.addConnection(s)
s.addConnection(y)
v.addConnection(y)
v.addConnection(s)
v.addConnection(w)
s.addConnection(v)
w.addConnection(v)
w.addConnection(u)
u.addConnection(w)
u.addConnection(s)
s.addConnection(u)
u.addConnection(z)
z.addConnection(u)
u.addConnection(t)
t.addConnection(u)
z.addConnection(t)
t.addConnection(z)
t.addConnection(s)
s.addConnection(t)

const undirectedCircular = new Graph([s,t,u,v,w,x,y,z])

module.exports = { directedNonCircular, directedCircular, undirectedNonCircular, undirectedCircular }
